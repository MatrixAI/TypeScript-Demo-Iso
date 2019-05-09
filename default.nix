{
  pkgs ? import ./pkgs.nix,
  nodeVersion ? "10_x"
}:
  with pkgs;
  let
    nodejs = lib.getAttrFromPath
            (lib.splitString "." ("nodejs-" + nodeVersion))
            pkgs;
    nodePackages = lib.getAttrFromPath
                   (lib.splitString "." ("nodePackages_" + nodeVersion))
                   pkgs;
    drv = (import ./package.nix { inherit pkgs nodejs; }).package;
  in
    drv.overrideAttrs (attrs: {
      src = lib.cleanSourceWith {
        filter = (path: type:
          ! (builtins.any
            (r: (builtins.match r (builtins.baseNameOf path)) != null)
            [
              "node_modules"
              "\.env"
              "tmp"
            ])
        );
        src = lib.cleanSource attrs.src;
      };
    })
