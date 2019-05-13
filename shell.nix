{
  pkgs ? import ./pkgs.nix,
  nodeVersion ? "10_x",
}:
  with pkgs;
  let
    nodePackages = lib.getAttrFromPath
                   (lib.splitString "." ("nodePackages_" + nodeVersion))
                   pkgs;
    drv = import ./default.nix { inherit pkgs nodeVersion; };
  in
    drv.overrideAttrs (attrs: {
      src = null;
      nativeBuildInputs = [ nodePackages.node2nix ]
                          ++ (lib.attrByPath [ "nativeBuildInputs" ] [] attrs);
      shellHook = ''
        echo 'Entering ${attrs.name}'
        set -o allexport
        . ./.env
        set +o allexport
        set -v
        export PATH="$(pwd)/dist/bin:$(npm bin):$PATH"

        # setting up for nix-build
        npm install --package-lock-only
        node2nix \
          --input package.json \
          --lock package-lock.json \
          --node-env node-env.nix \
          --output node-packages.nix \
          --composition package.nix \
          --nodejs-10

        set +v
      '';
    })
