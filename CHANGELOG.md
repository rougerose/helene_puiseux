# Changelog

## [1.0.2] - 2022-12-05
- Mise à jour de package.json :
  - supprimer les bibliothèques dépréciées : gulp, sass, etc.
  - sass est volontairement conservé dans la version 1.32.13 afin d'éviter les warnings relatif à la division, et ce qui permet de garder la dépendance à inuitcss.
  - compiler les scss avec npm.
  - Attention : la minification du js n'a pas été mise à jour.
- Mise à jour pour Spip 4.1
