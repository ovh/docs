---
title: Comprendre la nomenclature des flavors de la gamme 2017
slug: faq-comment-comprendre-la-nouvelle-nomenclature-de-la-gamme-2017
excerpt: FAQ expliquant le nommage du catalogue Public Cloud 2017
section: Base de connaissances
---


## Nomenclature
La gamme 2017 apporte une nouvelle standardisation des noms des flavors.


### La premiere lettre indique le type de l'instance
*La catégorie "General Purpose"* propose un ratio CPU/RAM équilibré sur les instances pour répondre à la plupart des usages. C'est l'ancienne catégorie EG et leurs noms commenceront par B dans la nouvelle gamme. Ex: B2-7

*Les instances "CPU Optimized"* sont propulsées par processeur Xeon E5 et bénéficient d'un nombre de cœurs élevé. C'est l'idéal pour les cas où la puissance de calcul prime. Il s'agit de l'ancienne catégorie HG et leurs noms commenceront par C comme "CPU" dans la nouvelle gamme. Ex: C2-6

*Les instances "RAM Optimized"* proposent une grande quantité de mémoire pour répondre au mieux aux besoins des bases de données et autres applications gourmandes en ressource mémoire. C'est l'ancienne gamme SP et leurs noms commenceront par R comme RAM dans la nouvelle gamme. Ex: R2-240


### Le deuxieme caractere indique la generation
Le deuxième caractère est un chiffre et correspond à la génération de la gamme. Pour 2017, c'est la seconde génération pour la plupart des type d'instance, par conséquent ce caractère est "2"


### La derniere partie
La dernière partie se trouve après un "-" et indique la quantité de RAM.


## Tableau de correspondance de gamme
Voici un tableau de correspondance entre la gamme 2015 et la gamme 2017.

|Nom 2015|Nom 2017|
|---|---|
|*Ressources partagées : Sandbox*||
|VPS-SSD1|S1-2|
|VPS-SSD2|S1-4|
|VPS-SSD3|S1-8|
|*Ressources garanties : General Purpose*||
|EG7|B2-7|
|EG15|B2-15|
|EG30|B2-30|
|EG60|B2-60|
|EG120|B2-120|
|*Ressources garanties : CPU Optimized*||
|HG7|C2-7|
|HG15|C2-15|
|HG30|C2-30|
|HG60|C2-60|
|HG120|C2-120|
|*Ressources garanties : RAM Optimized*||
|SP30|R2-30|
|SP60|R2-60|
|SP120|R2-120|
|SP240|R2-240|