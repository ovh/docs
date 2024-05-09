---
title: "Premiers pas avec IAM dans votre Hosted Private Cloud - VMware On OVHcloud"
excerpt: "Bien démarrer avec IAM dans votre cloud privée VMware managé par OVH"
updated: 2024-05-24
---

# Table of Contents
1. [Liens des guides IAM](#Objectif)
2. [Prérequis](#Prérequis)
3. [En pratique](#En pratique)
4. [Etape 1 : En pratique](#En pratique)
5. [Etape 2 : FAQ](#FAQ)

## Objectif
  
**Dans ces guides, nous allons vous expliquer les bases pour démarrer avec IAM dans votre Cloud Privée VMware on OVHcloud** 

Voici les liens des guides :

- Guide 1 : [Premiers pas avec IAM et VMware sur OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_enable#Objectif)
- Guide 2 : [Comment activer IAM dans un cloud privé VMware managé par OVH](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_policy)
- Guide 3 : [Comment utiliser les rôles IAM dans un cloud privée VMware managé par OVH](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 4 : [Comment ajouter un rôle IAM à une politique globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_actions)
- Guide 5 : [Comment associer un utilisateur à une politique IAM globale](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_actions...)

Le diagramme suivant présente une vue d'ensemble de la solution IAM ainsi que le fonctionnement de la gestion des **Ressources**, des **Droits** et **Actions** :

![Schema IAM](images/iam_schema.png){.thumbnail}

![Schema IAM pour PCC](images/iam_vmware_schema_2.png){.thumbnail}

## Prérequis

Pour activer IAM, vous aurez besoin des éléments suivants :

- Avoir un compte OVHcloud (voir guide :[Comment créer un compte OVHcloud](https://help.ovhcloud.com/csm/fr-account-create-ovhcloud-account?id=kb_article_view&sysparm_article=KB0043023)).
- Disposer au préalable d'un ou plusieurs produits liés à ce compte OVHcloud (Hosted Private Cloud powered by VMware, Service Pack VMware etc..)
- Savoir ["Créer et gérer des utilisateurs locaux sur un compte OVHcloud"](https://help.ovhcloud.com/csm/fr-account-managing-users?id=kb_article_view&sysparm_article=KB0043058).
- Savoir ["Comment utiliser les politiques IAM depuis votre espace client"](https://help.ovhcloud.com/csm/fr-customer-iam-policies-ui?id=kb_article_view&sysparm_article=KB0058730).

## Etape 1 : En pratique

> [!WARNING]
> L'activation de l'IAM OVHcloud ne désactive pas vos utilisateurs Hosted Private Cloud existants, vous pourrez toujours les utiliser pour vous connecter directement aux différents éléments de votre Hosted Private Cloud, sans passer par l'IAM.
>
> L'IAM d'OVHcloud n'est pas disponible sur les environnements disposant des options de sécurité avancée et de certifications (PCI-DSS, HDS, HIPAA, SNC).


L'activation de l'IAM OVHcloud délègue la gestion des accès au service IAM OVHcloud. La gestion des rôles associés et leurs autorisations dans vSphere s'effectue depuis la page : `Hosted Private Cloud > PCC-XX > Users > IAM OVH cloud`

[Lien Web:](https://www.ovh.com/manager/#/dedicated/dedicated_cloud/pcc-X-X-X-X/users). 

Et la gestion des politiques et accès s'effectue depuis **l'IAM OVHcloud** : `Bare Metal Cloud > IAM`

[Lien Web :](https://www.ovh.com/manager/#/iam/dashboard/policies)

> [!TIP]
> La gestion des permissions d'un rôle dans vSphere est identique aux utilisateurs de votre infrastructure. La gestion des politiques et accès à ce rôle s'effectuera toutefois depuis l'IAM OVHcloud.

Pour vous connecter à votre cloud privée vous disposez de 2 types d'authentifications possible : **Les utilisateurs locaux** (Local) ou **les utilisateur IAM** (si activé)

![Login OVHcloud IAM/LOCAL](images/image-01.png){.thumbnail}

Pour utiliser IAM dans votre cloud privée, il va falloir : 

1. [Activer IAM](lien vers guide activer IAM dans PCC)

2. [Créer une politique de gestion des ressources IAM avec vorte cloud privée VMware(roles par défaut, politique, ressources groupes)]( lien vers doc comment gérer une policy IAM avec PCC)  
  
---

### Comment fonctionne une Politique IAM (policy) ?

Gérez les identités de vos utilisateurs et de vos applications, ainsi que leurs droits d’accès dans une interface unique pour tous vos services. 

OVHcloud IAM permet de gérer finement l’ensemble des autorisations des produits OVHcloud et d’obtenir un meilleur niveau de sécurité avec une vision centralisée de vos accès.

En détail, une politique contient :

Une ou plusieurs identités visées par cette politique. 
Il peut s'agir d'identifiants de comptes, d'utilisateurs ou de groupes d'utilisateurs (comme ceux utilisés dans Federation - d'autres guides SSO sont disponibles).

Une ou plusieurs ressources concernées par cette politique.

Une ressource est un produit OVHcloud qui sera concerné par cette politique (un nom de domaine, un serveur Nutanix, un Load Balancer, etc.).

Une ou plusieurs actions autorisées ou exceptées par cette politique.
        Les actions sont les droits spécifiques concernés par cette politique (redémarrage d'un serveur, création d'un compte e-mail, résiliation d'un abonnement, etc.)

Les 4 principaux éléments d'une politique sont : 

**Nom de la politique (obligatoire)** : il s'agit du nom qui apparaîtra dans les interfaces. Le nom doit être unique et ne doit contenir aucun espace.

**Types de produits** : sélectionnez les types de produits pour définir le champ d'application de la politique. Un ou plusieurs types de produit peuvent être inclus dans la même politique.

**Ressources** : ajoutez des ressources ou des groupes de ressources à couvrir par la politique. Les ressources disponibles sont filtrées par type de produit préalablement sélectionné. 
**Actions** : 

---  
### Comment fonctionne IAM avec PCC
  
  
Pour mieux comprendre comment fonctionne IAM avec Vsphere vous pouvez lire ce guide : [Comment utiliser les politiques IAM avec vSphere](https://help.ovhcloud.com/csm/fr-vmware-use-iam-vsphere?id=kb_article_view&sysparm_article=KB0059059)
  
Vous pouvez aussi regarder ce schema visuel pour mieux comprendre comment s'imbrique IAM avec vos services VMware ->


![Schema IAM 3](images/iam_vmware_schema_3.png){.thumbnail}

---

![Schema IAM 2](images/iam_vmware_schema_2.png){.thumbnail}


### Definition API Private cloud

<https://api.ovh.com/console-preview/?section=%2Fme&branch=v1#overview>

|**Method**|**Path**|**Description**|
| :-: | :-: | :-: |
|GET|/me/identity/user|Retrieve all users of this account|
|POST|/me/identity/user|Create a new user|
|GET|/me/identity/user/{user}|Get details of this specific user|
|PUT|/me/identity/user/{user}|Alter a user|
|DELETE|/me/identity/user/{user}|Delete a user|
|GET|/me/identity/group|Retrieve all groups of this account|
|POST|/me/identity/group|Create a new group|
|GET|/me/identity/group/{group}|Get details of this specific group|
|PUT|/me/identity/group/{group}|Alter a group|
|DELETE|/me/identity/group/{group}|Delete a group|


## Etape 2 : FAQ

## Dans quelle scope applicable puis-je utiliser IAM et quelles sont ses limitations ?

IAM est actuellement dans une version BETA sur la plateforme OVHcloud, les infrastructures bénéficiant d'options de sécurité renforcée ou d'un service certifié (HDS, PCI-DSS ou SNC) ne peuvent actuellement pas utiliser l'IAM OVHcloud.

**SNC : SecNumCloud**
**HDS : Hébergement de santé**
**PCI-DSS: Hébergement de données bancaires**

Un role IAM ne peut que uniquement être ajouté manuellement dans une politique (action : assumrole -> role_iam), vous pouvez suivre le guide [comment ...](lien vers doc) pour la solution.

IAM permet de simplifier la gestion de l'authentification et de centraliser son utilisation.

## Quelles sont les droits que je peux utiliser dans mon role IAM ?

Les droits utilisés avec une politique IAM sont ceux que je retrouve dans la console OVhcloud de mon PCC VMware. Je peux choisir **d'accéder à Vsphere, accéder au vmNetwork, accéder aux v(x)Lans** (en opérateur, lecture, écriture, administrateur par exemple). Ils sont modifiable niveau du PCC  ou par datacentres. Grâce aux roles IAM.

## Comment IAM délègue la gestion des accès aux services IAM OVHcloud ?

La gestion des rôles associés et leurs autorisations dans vSphere s'effectue depuis la page du manager OVH de votre PCC [lien web](https://www.ovh.com/manager/#/iam/). La gestion des politiques et accès s'effectue depuis l'IAM OVHcloud dans la partie Bare Metal Cloud avec lequel vous accéder depuis le tableau de bord de votre utilisateur en haut à droite [lien web](https://www.ovh.com/manager/#/dedicated/useraccount/dashboard)

## Y-aura t'il une gestion avancée des roles modifiés à l'avenir ?

Oui, la version suivante de IAM permettra d'aller plus loin dans la gestion des droits avec les roles IAM modifiés.

## Est ce que je peux activer IAM dans mon cloud privée VMware sur OVHcloud ?

Oui je peux activer IAM depuis mon cloud privée VMware (voir guide : Comment activer IAMdans mon pcc) en Beta.

## Est ce que je peux ajouter un role automatiquement à une politique IAM ?

Non il n'est pas possible j'ajouter un role grace aux groupe de permissions managées.

## Que représente un role dans une politique IAM ?

Chaque rôle de votre Hosted Private Cloud correspond à une action s'écrivant sous la forme `pccVMware:vSphere:assumeRole?nom_du_role` dans une politique IAM.

Par exemple, pour le rôle **iam-admin** d'un PCC, l'action est -> `pccVMware:vSphere:assumeRole?iam-admin`.

## Est-il possible d'utiliser une fédération d'identité externe avec IAM et mon PCC ? -> A valider

Oui, l'utilisateur devra renseigner son identifiant XXX/idp sans son mot de passe afin d'être redirigé vers la page d'authentification du provider d'identité.


## Aller plus loin
  
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.


