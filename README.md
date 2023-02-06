# Tiped avec Electron

**Trello** est une application de Todolist géniale et ultra complète. Seul problème ? Ce n'est pas adapté aux caprices de la *JIRAMA*. C'est pour cette raison que j'ai décidé de développer **Tiped**, une alternative offline, très largement moins complète par rapport à **Trello** mais au moins lorsqu'il n'y a pas courant et donc pas de connexion, c'est toujours fonctionnel.

## Télécharger l'application

* Pour Windows (x64) : [tiped-win32-x64](https://drive.google.com/file/d/11dX0CtyLb7suEGQbtEBGiHRbwVWcCopS/view?usp=share_link)
* Pour linux (x64) : [tiped-linux-x64](https://drive.google.com/file/d/1bnt3gzcMDAR2iZEqf-_O3HCMz-atSHtR/view?usp=share_link)

## Prérequis pour les développeurs

Il faut avoir d'installer :

* **Node** version *18.13*
* **Node Package Manager** version *9.3.1*

## Installation des dépendances

Exécutez la commande suivante pour installer les dépendances :

`npm install`

## Lancer l'application en mode développement

Exécutez la commande suivante pour lancer l'application en mode dev :

`npm start`

## Compiler l'application pour votre système d'exploitation actuel

Exécutez la commande suivante pour compiler l'application pour votre OS :

`npx electron-packager .`