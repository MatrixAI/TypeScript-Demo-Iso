{
  pkgs ? import ./pkgs.nix,
  nodeVersion ? "10_x",
}:
  with pkgs;
  let
    nodePackages = lib.getAttrFromPath
                   (lib.splitString "." ("nodePackages_" + nodeVersion))
                   pkgs;
    drv = (import ./package.nix { inherit pkgs nodejs; }).shell;
  in
    drv.overrideAttrs (attrs: {
      nativeBuildInputs = [ nodePackages.node2nix ]
                          ++ (lib.attrByPath [ "nativeBuildInputs" ] [] attrs);
      shellHook = attrs.shellHook + ''
        echo 'Entering ${attrs.name}'
        set -v
        ln --symbolic --no-dereference --force $NODE_PATH node_modules
        export PATH="$(pwd)/dist/bin:$(npm bin):$PATH"
        set +v
      '';
    })
