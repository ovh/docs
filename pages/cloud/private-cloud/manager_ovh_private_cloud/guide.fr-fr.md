---
title: Présentation de l'espace client Private Cloud OVH
slug: manager-ovh-private-cloud
excerpt: Découvrez les possibilités de votre espace client Private Cloud
section: Premiers pas
---

**Dernière mise à jour le 10/12/2017**

## Objectif

L'espace client OVH vous propose de nombreuses options de paramétrage de votre infrastructure Private Cloud.

**Ce guide vous en fait découvrir les multiples possibilités.**

## Prérequis

- Être connecté à votre l'[espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external} dans la partie `Dédié`{.action} puis `Private Cloud`{.action}.
- Posséder un produit [Private Cloud](https://www.ovh.com/fr/private-cloud/){.external}.


## En pratique

### Onglet général

Une fois dans la partie `Dédié`{.action} puis `Private Cloud`{.action} de votre [espace client OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, vous aurez accès à un aperçu général de votre Private Cloud :

![Informations générales](images/manager_general.png){.thumbnail}

Tout en haut, `1 sur l'image`, vous retrouverez le nom et la description de votre Private Cloud. N'hésitez pas à le personnaliser, cela vous sera d'une grande utilité si vous possédez plusieurs infrastructures. 

À droite, `2 sur l'image`, vous retrouverez plusieurs boutons :

- la commande de bloc IP qui vous redirigera vers l'onglet `IP`{.action} ;
- la commande de licences (cPanel, Plesk..) qui vous redirigera vers l'onglet `Licences`{.action} ;
- le passage de toutes vos ressources au forfait mensuel (si elles le sont déjà, rien ne s'affichera) ;
- l'inscription à la mailing-list Private Cloud ;
- la demande de résiliation de votre service : un mail vous sera envoyé pour valider votre requête.


### Informations générales

Dans la première partie, vous trouverez les informations générales de votre Private Cloud.

![Informations générales](images/general_information.png){.thumbnail}


- La version de votre Private Cloud.
- Sa référence commerciale OVH.
- Le datacenter et plus précisément la zone dans laquelle votre infrastructure est installée.
- La sécurité d'accès à votre infrastructure (`Ouvert` ou `Restreint`) avec les restrictions par IP source.
- La bande passante garantie, cette fonctionnalité sera disponible prochainement.
- Le nombre de datacenters virtuels dans votre infrastructure.
- Le nombre de blocs IP.


### Options

Vous aurez ensuite un visuel sur l'état des options NSX et vRops.

![Options](images/options.png){.thumbnail}

Dans cet exemple, les options NSX et vRops sont activées et vous avez la possibilité de les désactiver si vous n'en avez pas ou plus l'utilité.

Pour activer l'une une de ces options, il vous suffit de cliquer sur le bouton correspondant.

![Activation d'options](images/options_activation.png){.thumbnail}

En cliquant sur `Découvrir cette option`{.action}, vous trouverez des guides concernant chacune des options.


### Datacenters

Vous retrouverez dans cet onglet un court résumé des datacenters virtuels présents dans votre offre Private Cloud :

![Datacenter](images/datacenter.png){.thumbnail}

Vous verrez plus bas toutes les informations concernant les datacenters.

> [!primary]
>
> Vous pouvez ajouter un autre datacenter depuis cette page, cela n'engage aucun frais supplémentaire.
> 



### Utilisateurs

Tous les utilisateurs pouvant se connecter à vSphere seront présents dans cette partie :

![Utilisateurs](images/users.png){.thumbnail}

Vous pouvez créer un utilisateur en cliquant sur le bouton `Créer un utilisateur`{.action} à droite.

Pour chaque utilisateur vous trouverez différentes informations :

- l'identifiant ;
- l'adresse e-mail (facultative) ;
- le numéro de téléphone (facultatif) ;
- le token de validation ;
- le statut.

Les droits présents dans cette partie sont paramétrés pour les différents utilisateurs. Ils permettent d'obtenir la gestion sur l'onglet `OVH network`{.action} pour le premier et avoir la gestion dans le même onglet, mais sur les IP failovers pour le second.
En cliquant sur la roue crantée à droite du tableau, plusieurs choix se présentent à vous :

- modifier les entrées de ce tableau ;
- voir et modifier les droits de cet utilisateur par datacenter ;
- changer le mot de passe de l'utilisateur ;
- supprimer cet utilisateur.

Nous allons voir plus en détails la modification des droits par datacenter :

![Droits utilisateur par datacenter](images/rights_user_datacenters.png){.thumbnail}

- `Accès vSphere`{.action} - il s'agit des droits globaux de l'utilisateur sur le vSphere :

|Droits|Description|
|---|---|
|none|aucun accès|
|read only|accès en lecture seule|
|read/Write|accès en lecture/écriture|
|provider|accès réservé aux administrateurs OVH|

- `Ajout de ressources`{.action} - ce bouton permet d'accorder ou non le droit d'ajouter des ressources supplémentaires via le plugin OVH dans le vSphere client.

- `Accès au VM Network`{.action} - il s'agit de la gestion des droits sur la partie réseau public (appelée `VM Network` dans l'interface vSphere) :

|Droits|Description|
|---|---|
|none|aucun accès|
|read only|accès en lecture seule|
|provider|permet de configurer des machines virtuelles (VM) sur le réseau public|

- `Accès au V(X)LAN`{.action} - il s'agit de la gestion des droits sur la partie réseau privé les VXLAN pour la gamme Dedicated Cloud ou les VLAN pour la gamme SDDC :

|Droits|Description|
|---|---|
none|aucun accès|
|read only|accès en lecture seule|
|provider|permet de configurer des machines virtuelles (VM) sur le réseau privé|
|administrator|permet de gérer les port groups du switch virtuel (en créer, modifier, supprimer...)|

> [!warning]
>
> Les droits étant en cours de refonte, les informations présentes ici sont amenées à être modifiées.
> 


### Sécurité

La politique d'accès à votre vCenter est paramétrable dans cet onglet :

![Paramètres de sécurité](images/security.png){.thumbnail}

Vous pourrez configurer les éléments au-dessus et dans le tableau avec les boutons disponibles sur la droite de ce dernier. Il est possible de configurer :

- une limite sur la session de connexion ;
- le nombre de connexions simultanées autorisé ;
- la politique d'accès, restreinte ou non, avec une autorisation par IP source. Les IP seront présentes dans le tableau.

La politique de déconnexion consiste à déconnecter le premier ou le dernier utilisateur connecté.
Dans cet exemple si 50 utilisateurs sont connectés, et qu'un 51e se connecte, le premier à avoir établi la connexion sera déconnecté.
Si vous mettez la politique d'accès en mode restreint et que vous ne renseignez aucune IP, personne ne pourra se connecter au client vSphere. Les machines virtuelles resteront toutefois accessibles.


### Opérations

Dans ce dernier onglet, vous trouverez les opérations en cours sur votre infrastructure :

![Opérations](images/operations.png){.thumbnail}

Vous pouvez vérifier si une opération est en erreur, si une maintenance est planifiée...

Si votre accès au client vSphere n'est pas possible, une maintenance peut être en cours, cet onglet vous permet de le vérifier.


### Vue datacenter

Dans un Private Cloud, vous pouvez avoir plusieurs datacenters. En cliquant sur votre Private Cloud, vous les retrouverez :

![Vue Datacenter](images/datacenter_view.png){.thumbnail}

Vous pouvez personnaliser le nom de votre datacenter en cliquant sur le crayon, ainsi qu'ajouter description personnalisée.
Vous retrouverez les premières informations sur votre datacenter, sa gamme (SDDC ou DC), le nombre d'hôtes et de datastores.
Il est possible de bénéficier de plusieurs datacenters dans une même offre Private Cloud en ayant des gammes Dedicated Cloud et Software Defined Datacenter.


### Hôtes

Ici sont présents les hôtes de votre datacenter :

![Hosts](images/hosts.png){.thumbnail}

Vous retrouverez dans cette partie :

- le nom des hôtes ;
- le profil (M, L, L+...) ;
- le mode de facturation : si votre hôte est en facturation à l'heure, vous aurez la possibilité de le passer en facturation mensuelle ;
- le statut de l'hôte ;
- le nombre d'heures utilisées (uniquement sur une ressource horaire).

Sur la droite de cette image, vous pourrez commander un nouvel hôte en paiement mensuel.


### Datastores

Le tableau des datastores est similaire à celui des hôtes :

![Datastores](images/datastores.png){.thumbnail}

Vous retrouverez dans cette partie :

- les noms des datastores ;
- des informations sur leur taille ;
- le mode de facturation
- le statut du datastore ;
- le nombre d'heures utilisées (uniquement sur une ressource horaire).

Sur la droite de cette image, vous pourrez commander un nouveau datastore en paiement mensuel.


### Backup

L'onglet de backup vous permet d'activer la solution `Veeam backup` en cliquant sur le bouton `Activer le backup`{.action} :

![Backup](images/backup.png){.thumbnail}

Pour plus d'informations sur cette option, vous pouvez consulter ce [guide](https://docs.ovh.com/fr/private-cloud/veeam-backup-as-a-service/){.external}.


### Licence Windows

L'onglet `Licence Windows`{.action} permet d'activer les licences SPLA Windows sur votre datacenter en cliquant sur le bouton situé à droite :

![Licence SPLA Windows](images/windows_licence.png){.thumbnail}

Vous pouvez retrouver la page des tarifs [ici](https://www.ovh.com/fr/private-cloud/options/images-licences.xml){.external}.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.