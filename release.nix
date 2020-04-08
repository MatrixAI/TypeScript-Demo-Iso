{
  pkgs ? import ./pkgs.nix
}:

with pkgs;
rec {
  application = callPackage ./default.nix {};
  docker = dockerTools.buildImage {
    name = application.pname;
    contents = application;
  };
}
