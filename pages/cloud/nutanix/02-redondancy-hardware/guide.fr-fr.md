---
title: Redondance matérielle
slug: redondancy-hardware
excerpt: "Présentation de la redondance matérielle sur NUTANIX"
section: Premiers pas
order: 02
---

**Dernière mise à jour le 18/02/2022**

## Objectif

Cette documentation rappelle le fonctionnement d'un cluster NUTANIX et des capacités de palier à une défaillance matérielle.

## Présentation des matériels

### Rappel sur la définition d'un noeud

Une solution nutanix est composée de ce que l'on appelle des noeuds, un noeud est en fait un ordinateur physique,  sur cet ordinateur se trouve
* Un disque système ou deux disques systèmes en RAID (A préciser)
* Un disque SSD ou est stocké la CVM *Machine virtuelle qui assure les connexions entre chaque noeud et qui est une composante essentielle de la solution NUTANIX* , sur ce disque si il y'a de la place il peut servir pour le stockage de données
* D'autres disques SSD ou SAS (Il faudra se faire préciser l'offre car chez NUTANIX suivant le type de disque ce n'est pas le même type de licence)
* Un ou plusieurs processeurs.
* De la mémoire.
* Parfois une carte graphique.

Dans l'idéal il faut que chaque noeud d'un cluster NUTANIX soit identique 

### Fonctionnement de la redondance

Un cluster est créé à partir des noeuds du cluster, il faut au minumum 3 noeuds pour faire fonctionner une cluster

La solution NUTANIX d'OVHcloud permet d'avoir jusqu'a 18 noeuds

La redondance des données ne se fait pas sur un noeud comme avec du RAID mais au travers du réseau sur plusieurs noeuds, il y'a plusieurs niveaux de redondances

* RF2: Les données sont disponibles sur 2 noeuds, ce qui permet la défaillance d'un noeud ou d'un disque de données sur un des noeuds
* RF3: Les données sont disponibles sur 3 noeuds, cette solution n'est possible qu'a partir de 5 noeuds, elle est plus securisée car elle permet la perte de deux noeuds, le revers de la médaille c'est quelle est plus 

### Connexion au cluster

La connexion au cluster peut se faire de plusieurs manières:

* Sur l'interface WEB Prism ELEMENT **C'est en fait une des C.V.M**
* A partir de l'interface WEB Prism Central **Machine virtuelle supplémentaire qui possèdes des fonctionnalités que n'a pas PRISM Element et qui permet de se connecter à un plusieurs clusters**
* En SSH sur le cluster **Dans ce cas là c'est aussi une des C.V.M**

Dans cette documentation nous allons nous connecter au travers de PRISM Central

***A finaliser quand j'aurai accès au CLUSTER***

## Aller plus loin


Site très interessant sur le fonctionnement de NUTANIX [<The nutanix BIBLE>](https://www.nutanixbible.com/)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
