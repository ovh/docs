---
title: Utilisation DynHost
legacy_guide_number: 2024
slug: utilisation-dynhost
excerpt: Ce guide vous explique Ce qu’est un DynHost, ainsi que son fonctionnement.
section: DNS et zone DNS
order: 6
---

> [!warning]
>
> OVH met à votre disposition des services dont la configuration, la gestion et la responsabilité vous incombent. Il vous revient de ce fait d'en assurer le bon fonctionnement.
> 
> Nous mettons à votre disposition ce guide afin de vous accompagner au mieux sur des tâches courantes. Néanmoins, nous vous recommandons de faire appel à un prestataire spécialisé et/ou de contacter l'éditeur du service si vous éprouvez des difficultés. En effet, nous ne serons pas en mesure de vous fournir une assistance. Plus d'informations dans la section « Aller plus loin » de ce guide.
> 

## Généralités

### Prérequis
- Disposer d'un domaine enregistré chez OVH
- Utiliser les serveurs DNS OVH mutualisés pour votre domaine


### Définitions
- Adresse IP

Sur Internet, les ordinateurs communiquent entre eux grâce au protocole TCP/IP qui identifie chaque machine réseau et chaque ordinateur sous la forme d'une adresse : xxx.xxx.xxx.xxx.

- DNS

Les utilisateurs communiquent avec des adresses IP, mais pour plus de facilité, ces adresses IP sont définies en noms de station ou adresses plus faciles à retenir : ce sont les DNS (Domain Name System).


### A quoi sert l'option DynHOST ?
Si vous disposez d'une connexion internet, votre IP de connexion peut être amenée à changer à chaque reconnexion. DynHOST vous permet de faire pointer votre domaine ou un sous-domaine vers une IP de connexion, et si elle change, de la mettre à jour en temps réel à l'aide d'un identifiant et d'un mot de passe. Ainsi, vous pouvez faire de l'hébergement sur votre propre connexion internet.


## Création d'un DynHOST

### Connexion a l'espace client
- Connectez-vous dans [l'espace
client](https://www.ovh.com/manager/web){.external} à l'aide de votre couple identifiant (nic-handle) - mot de passe.
- Cliquez sur "Connexion" pour valider l'opération.


![hosting](images/img_3443.jpg){.thumbnail}


### Selection du domaine
- Dans le menu de gauche, sélectionnez " Domaines ", puis " votre domaine " pour lequel créer un DynHost.


![hosting](images/img_3444.jpg){.thumbnail}


### Gestion des acces
- Cliquez sur l'onglet DynHost , puis sur " Gérer les accès ".


![hosting](images/img_3458.jpg){.thumbnail}

- Cliquez ensuite sur " Créer un Identifiant ".


![hosting](images/img_3459.jpg){.thumbnail}

- Indiquez sur cette fenêtre les différentes informations demandées :
- Identifiant
- Sous-domaine
- Mot de passe
- Puis cliquez sur " Valider ".


![hosting](images/img_3461.jpg){.thumbnail}

Vous pourrez ensuite visualiser le compte que vous venez de créer, ainsi que le sous-domaine associé.

- Cliquez ensuite sur le bouton retour .


![hosting](images/img_3463.jpg){.thumbnail}


### Création du DynHost
- Cliquez sur " Ajouter un DynHost ".


![hosting](images/img_3464.jpg){.thumbnail}

Indiquez ici :

- Le sous-domaine sur lequel mettre en place le DynHost.
- L' adresse IP de destination actuelle
- Cliquez ensuite sur " Valider ".


![hosting](images/img_3465.jpg){.thumbnail}



> [!success]
>
> Attention :
> - 
> La création de ce champ prend 24 heures.
> 
> 

- Vous pourrez ensuite visualiser la bonne création de votre DynHost avec le sous-domaine et son IP .


![hosting](images/img_3470.jpg){.thumbnail}



> [!alert]
>
> Attention :
> - 
> La création de l'enregistrement de Type A dans votre zone DNS est
> automatique. Il ne faut donc le créer manuellement ni avant, ni après
> avoir créé votre DynHost.
> 
> 


## Les outils a utiliser

### Bali Dynamic DNS (gratuit)
- Dans Bali Dynamic DNS, renseignez les champs demandés en vert , puis cliquez sur " Update IP in database if necessary ".


![hosting](images/img_3477.jpg){.thumbnail}

- Le status " IP changed " apparaît, cela veut dire que votre IP a bien été mise à jour.


![hosting](images/img_3478.jpg){.thumbnail}


### Direct Update (Shareware)
- Dans Direct Update, il vous suffit de renseigner les champs en vert et de ne pas oublier de décocher la case " Désactiver/ignorer ce compte ".


![hosting](images/img_3480.jpg){.thumbnail}


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.