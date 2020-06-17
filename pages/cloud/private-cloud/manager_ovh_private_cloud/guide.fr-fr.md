---
title: Présentation de l'espace client Private Cloud OVHcloud
slug: manager-ovh-private-cloud
excerpt: Découvrez les possibilités de votre espace client Private Cloud
section: Premiers pas
order: 1
---

**Dernière mise à jour le 17/06/2020**

## Objectif

L'espace client OVHcloud vous propose de nombreuses options de paramétrage de votre infrastructure Private Cloud.

**Ce guide vous en fait découvrir les multiples possibilités.**

## Prérequis

- Être connecté à votre l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} dans la partie `Server`{.action} puis `Private Cloud`{.action}.
- Posséder un produit [Private Cloud](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/){.external}.


## En pratique

### Onglet général

Une fois dans la partie `Server`{.action} puis `Private Cloud`{.action} de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, vous aurez accès à un aperçu général de votre Private Cloud :

![Informations générales](images/controlpanel1.png){.thumbnail}

En haut de la page, `1 sur l'image`, vous retrouverez le nom et la description de votre Private Cloud. N'hésitez pas à le personnaliser, cela vous sera d'une grande utilité si vous possédez plusieurs infrastructures. 

À gauche, `2 sur l'image`, vous retrouverez votre ou vos Private Cloud ainsi que le ou les datacentres virtuels qui le composent.


#### Informations générales

Dans le tableau de gauche, vous trouverez les informations générales de votre Private Cloud.

![Informations générales](images/controlpanel2.png){.thumbnail}


- La description de votre Private Cloud (Avec la possibilité de changer son nom)
- La version de votre Private Cloud.
- Sa référence commerciale OVHcloud.
- Le datacenter et plus précisément la zone dans laquelle votre infrastructure est installée.
- La politique d'accès à votre infrastructure (`Ouvert` ou `Restreint`) avec les restrictions par IP source.
- Le nombre de datacenters virtuels dans votre infrastructure.
- Le nombre de blocs IP (Avec la possibilité de commander des blocs supplémentaires)


#### Options et conformité

Dans le tableau central, vous aurez un visuel sur l'état des options NSX et vRops ainsi que sur l'état des options HDS et PCI-DSS.

![Options](images/controlpanel3.png){.thumbnail}

Dans cet exemple, les options NSX et vRops sont activées.


#### Datacentres

Vous retrouverez dans cet onglet un court résumé des datacentres virtuels présents dans votre offre Private Cloud :

![Datacenters](images/controlpanel5.png){.thumbnail}

Vous verrez plus bas dans ce guide, une vue plus détaillée des datacentres virtuels.

> [!primary]
>
> Vous pouvez ajouter un autre datacentre depuis cette page, cela n'engage aucun frais supplémentaire.
> 



#### Utilisateurs

Tous les utilisateurs pouvant se connecter à vSphere seront présents dans cette partie :

![Utilisateurs](images/controlpanel6.png){.thumbnail}

Vous pouvez créer un utilisateur en cliquant sur le bouton `Créer un utilisateur`{.action} à gauche.

Pour chaque utilisateur vous trouverez différentes informations sur l'utilisateur, et les droits appliqués sur l'ensemble du Private Cloud :

- L'identifiant.
- Son prenom (facultatif).
- Son nom de famille (facultatif).
- l'adresse e-mail (facultative).
- le numéro de téléphone (facultatif).
- le droit *token validator*, permettant de valider des opérations sensibles sur des Private Cloud disposant de l'option HDS ou PCI-DSS.
- Le droit *Ip*, permettant d'accèder au plugin OVH network.
- Le droit *Ip Failover*, permettant de gérer les IPs Failover relié à votre Private Cloud.
- Le droit *Interface NSX*, permettant d'accèder à l'interface NSX si l'option est activé dans votre Private Cloud.
- le statut (Diagnostic), permettant de voir si votre utilisateur est bien créé.

En cliquant sur le bouton `...`{.action} à droite du tableau, plusieurs choix se présentent à vous :

- Modifier les entrées de ce tableau (Modification des droits vus précédemment, ajout d'une adresse email, d'un numéro de téléphone).
- Voir et modifier les droits de cet utilisateur par datacentre.
- Changer le mot de passe de l'utilisateur.
- Supprimer cet utilisateur.

Nous allons voir plus en détails la modification des droits par datacentre :

![Droits utilisateur par datacenter](images/controlpanel7.png){.thumbnail}

- `Accès vSphere`{.action} - il s'agit des droits globaux de l'utilisateur sur le vSphere :

|Droits|Description|
|---|---|
|Aucun|aucun accès|
|Lecture seule|accès en lecture seule|
|Lecture/Ecriture|accès en lecture/écriture|
|Operateur|accès réservé aux administrateurs OVHcloud|

- `Accès au VM Network`{.action} - il s'agit de la gestion des droits sur la partie réseau public (appelée `VM Network` dans l'interface vSphere) :

|Droits|Description|
|---|---|
|Aucun|aucun accès|
|Lecture seule|accès en lecture seule|
|Operateur|permet de configurer des machines virtuelles (VM) sur le réseau public|

- `Accès au V(X)LAN`{.action} - il s'agit de la gestion des droits sur la partie réseau privé les VXLAN pour la gamme Dedicated Cloud ou les VLAN pour la gamme SDDC :

|Droits|Description|
|---|---|
|Aucun|aucun accès|
|Lecture seule|accès en lecture seule|
|Operateur|permet de configurer des machines virtuelles (VM) sur le réseau privé|
|Administrateur|permet de gérer les port groups du switch virtuel (en créer, modifier, supprimer...)|

- `Ajout de ressources`{.action} - ce bouton permet d'accorder ou non le droit d'ajouter des ressources supplémentaires via le plugin OVH dans le vSphere client.


#### Sécurité

La politique d'accès à votre vCenter est paramétrable dans cet onglet :

![Paramètres de sécurité](images/controlpanel8.png){.thumbnail}

Vous pourrez configurer les éléments au-dessus et dans le tableau avec les boutons disponibles sur la droite de ce dernier. Il est possible de configurer :

- Le délai d'expiration d'une session de connexion.

- Le nombre de connexions simultanées autorisées.

- la politique d'accès, restreinte ou non, avec une autorisation par IP source. Les IP seront présentes dans le tableau.
Il est possible de modifier ou de supprimer l'IP ou la plage en cliquant sur le bouton `...`{.action} présent sur la droite de ce tableau.

> [!warning]
>
> Si vous mettez la politique d'accès en mode restreint et que vous ne renseignez aucune IP, aucun utilisateur ne pourra se connecter au client vSphere. Les machines virtuelles resteront toutefois accessibles.
> 


- La politique de déconnexion consiste à déconnecter le premier ou le dernier utilisateur connecté.
Dans cet exemple si 50 utilisateurs sont connectés, et qu'un 51e se connecte, le premier à avoir établi la connexion sera déconnecté.

Un second tableau est disponible concernant l'option *VM encryption*.

Vous pourrez trouver plus de détails sur cette option dans [ce guide](../vm-encrypt/).

#### Opérations

Dans cet onglet, vous trouverez les opérations en cours sur votre infrastructure :

![Opérations](images/controlpanel9.png){.thumbnail}

Vous pouvez vérifier si une opération est en erreur, si une maintenance est planifiée...

Vous pouvez modifier la date d'une maintenance en cliquant sur le bouton `...`{.action} présent à droite de ce tableau.

> [!primary]
>
> Si votre accès au client vSphere n'est pas possible, une maintenance peut être en cours, cet onglet vous permet de le vérifier.
>


#### Licence Windows

L'onglet `Licence Windows`{.action} permet d'activer les licences SPLA Windows sur votre Private Cloud en cliquant sur le bouton situé à droite :

![Licence SPLA Windows](images/controlpanel10.png){.thumbnail}

Vous pouvez retrouver la page des tarifs [ici](https://www.ovhcloud.com/fr/enterprise/products/hosted-private-cloud/images-licenses/){.external}.



### Vue datacentre

Dans un Private Cloud, vous pouvez avoir plusieurs datacentres. En cliquant sur votre Private Cloud, vous les retrouverez :

![Vue Datacenter](images/controlpanel11.png){.thumbnail}

Vous pouvez personnaliser le nom de votre datacenter en cliquant sur le crayon, ainsi qu'ajouter description personnalisée.

Vous retrouverez les premières informations sur votre datacenter, sa gamme, le nombre d'hôtes et de datastores.
Il est possible de bénéficier de plusieurs datacenters dans une même offre Private Cloud en ayant des gammes Dedicated Cloud et Software Defined Datacenter.


#### Hôtes

Ici sont présents les hôtes de votre datacenter :

![Hosts](images/controlpanel12.png){.thumbnail}

Vous retrouverez dans cette partie :

- Les noms des hôtes.
- Leurs profils (M, L, L+...).
- Le mode de facturation : si votre hôte est en facturation à l'heure, vous aurez la possibilité de le passer en facturation mensuelle en cliquant sur le bouton disponible à droite du tableau.
- Le statut de l'hôte.
- Le nombre d'heures utilisées (uniquement sur une ressource horaire).

En haut à gauche de ce tableau, vous pourrez commander un nouvel hôte en paiement mensuel.


#### Datastores

Le tableau des datastores est similaire à celui des hôtes :

![Datastores](images/controlpanel13.png){.thumbnail}

Vous retrouverez dans cette partie :

- Les noms des datastores.
- Leurs profiles.
- Leurs types (Hybrid ou full SSD).
- Leurs tailles.
- Le mode de facturation.
- Le statut du datastore, permettant de savoir s'il est correctement installé.
- Le nombre d'heures utilisées (uniquement sur une ressource horaire).

En haut à gauche de ce tableau, vous pourrez commander un nouveau datastore en paiement mensuel.


#### Backup

L'onglet de backup vous permet d'activer la solution `Veeam backup`.

![Backup](images/controlpanel14.png){.thumbnail}

Pour plus d'informations sur cette option, vous pouvez consulter ce [guide](../veeam-backup-as-a-service/){.external}.


## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.
