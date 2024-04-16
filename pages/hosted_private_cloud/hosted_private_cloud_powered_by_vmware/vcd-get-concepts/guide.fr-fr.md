---
title: "VCD - Les concepts fondamentaux de vCD"
excerpt: "Decouvrer les concepts fondamentaux de vCD"
updated: 2024-04-09
flag: hidden
---

## Objectif

**Ce guide vous détaille les fondamentaux de vCD chez OVHcloud.**

## Prérequis

## En pratique

### Concept fondamentaux

Dans cette section, nous allons établir les bases essentielles de VMware Cloud Director (VCD). 

En définissant ces principes de manière claire et concise, nous allons fournir les bases nécessaires pour une utilisation efficace et réussie de VCD. Que ce soit pour les administrateurs cherchant à déployer des infrastructures complexes ou pour les utilisateurs souhaitant accéder aux ressources de manière transparente, cette exploration des concepts de base de VCD constitue un point de départ essentiel.

#### Organisations

Une organisation représente une entité administrative regroupant des utilisateurs, des groupes et des ressources informatiques spécifiques. 

Les utilisateurs s'authentifient au niveau de l'organisation en fournissant des informations d'identification établies par un administrateur d'organisation lors de leur création ou de leur importation. 

Les administrateurs système sont responsables de la création et de la provisionnement des organisations, tandis que les administrateurs d'organisation prennent en charge la gestion des utilisateurs, des groupes et des catalogues propres à l'organisation.

#### Utilisateurs et groupes

Une organisation peut regrouper un nombre variable d'utilisateurs et de groupes. Les utilisateurs peuvent être créés directement par l'administrateur de l'organisation ou importés depuis un service d'annuaire.

Quant aux groupes, ils doivent être importés depuis le service d'annuaire. Au sein d'une organisation, les autorisations sont gérées en attribuant des droits et des rôles spécifiques aux utilisateurs et aux groupes.

#### Virtual Data Centers (vDC)

Un datacenter virtuel offre des ressources à une organisation, créant ainsi un environnement où les systèmes virtuels peuvent être stockés, déployés et exploités.

De plus, il fournit un espace de stockage pour les CD et DVD virtuels. Il est important de noter qu'une organisation peut disposer de plusieurs datacenters virtuels pour répondre à ses besoins spécifiques en matière de ressources informatiques.

#### Organisation Réseaux de datacenters virtuels

Un réseau de datacenter virtuel d'organisation est encapsulé dans un datacenter virtuel spécifique créé avec VMware Cloud Director, et il est accessible à toutes les vApps de cette organisation. Ce réseau permet aux différentes vApps d'une organisation de communiquer entre elles de manière transparente. Il peut être configuré pour être connecté à un réseau externe ou maintenu isolé et interne à l'organisation.

Seuls les administrateurs système ont le privilège de créer de tels réseaux, mais les administrateurs d'organisation sont en mesure de gérer les configurations des réseaux de datacenter virtuel d'organisation, y compris les services réseau qu'ils offrent.

#### Réseau vApp

Un réseau vApp est inclus dans une vApp et facilite la communication entre les différentes machines virtuelles de cette vApp. 

Il est possible de connecter un réseau vApp à un réseau de datacenter virtuel d'organisation, ce qui permet à la vApp de communiquer avec d'autres vApps au sein de l'organisation. 

De plus, si le réseau de datacenter virtuel d'organisation est connecté à un réseau externe, cela offre la possibilité à la vApp de communiquer également en dehors de l'organisation.

#### Catalogue

Les organisations exploitent des catalogues pour stocker des modèles vApp ainsi que des fichiers multimédias. 

Les membres autorisés au sein d'une organisation peuvent accéder à ces catalogues pour utiliser les modèles vApp et les fichiers multimédias qui y sont contenus afin de créer leurs propres vApps. 

De plus, les administrateurs d'organisation ont la capacité de copier des éléments provenant de catalogues publics dans le catalogue spécifique à leur organisation.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.