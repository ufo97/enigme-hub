# Enigme Hub

Ce projet est un projet fait par Naël DECHARTRE, Luka BURIAN, Hugo BATY et Eliot LE BRICON dans le cadre du cours de développement web en 5e année de Polytech Angers.

## Comment installer et lancer le projet

Prérequis : vous devez avoir installé npm sur votre machine afin d'installer le projet.

Ce projet est divisé en 2 parties distinctes : la partie front et la partie back. Les deux doivent être installés pour le bon fonctionnement du site web, veuillez vous vous rendre sur [https://github.com/ufo97/enigme-hub-backend](https://github.com/ufo97/enigme-hub-backend) pour installer le back-end.

Pour installer le front-end, il faut : 

1/ Cloner le projet en utilisant la commande git clone.

2/ Se placer dans le dossier cloné avec le terminal pour lancer npm install.

3/ Une fois l'installation finie, lancez la commande npm start dans le même dossier.

4/ Rendez-vous sur [http://localhost:3000](http://localhost:3000) pour voir le projet. 

N'oubliez pas d'installer et de lancer le back-end avant de commencer à parcourir le site ! 


## A noter !

Pour le bon fonctionnement de l'énigme numéro 5, utilisez Firefox. 

Si vous n'arrivez pas à lancer le projet, il est possible que vous ayiez besoin de remplacer les lignes 16 et 17 dans le fichier package.json par ces deux lignes : 

### `"start": "react-scripts --openssl-legacy-provider start",`
### `"build": "react-scripts --openssl-legacy-provider build",`
