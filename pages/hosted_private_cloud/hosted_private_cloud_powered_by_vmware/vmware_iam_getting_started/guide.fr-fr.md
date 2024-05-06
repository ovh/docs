---
title: "Premiers pas avec IAM dans votre Hosted Private Cloud - VMware On OVHcloud"
excerpt: "Bien démarrer avec IAM dans votre cloud privée VMware managé par OVH"
updated: 2024-05-24
---

# Table of Contents
1. [Premiers pas avec IAM](lien vers doc getting started)
1. [Les Prérequis](lien vers doc)
2. [Les concepts IAM dans un PCC](lien vers doc)
3. [Comment activer IAM](lien vers doc)
4. [Comment ajouter un role IAM manuellement](lien vers doc)

## Objectif
  
**Dans ces guides, nous allons vous expliquer les bases pour démarrer avec IAM dans votre Cloud Privée VMware on OVHcloud** 

Voici les liens des guides :

- Guide 1 : [Comment activer IAM dans votre cloud privée OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_enable#Objectif)
- Guide 2 : [Comment créer un role IAM et le lier à une politique](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 3 : [Comment configurer des politique IAM avec votre cloud privée OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_policy)
- Guide 4 : [Comment lier un role IAM à une politique](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : [Comment gérer les identités associées IAM avec mon PCC](/home/pbgarcia/Documents/GIT/doc3/docs/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_actions)


Le diagramme suivant présente une vue d'ensemble de la solution IAM ainsi que le fonctionnement de la gestion des **Ressources**, des **Droits** et **Actions** :

![Schema IAM](images/iam_schema.png){.thumbnail}


## En pratique

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

2. [Créer une politique de gestion des ressources (policy, ressources groupes)]( lien vers doc gerer uen policy IAM avec PCC)  
  

### Etape 1 : Comment fonctionne une Politique IAM (policy) ?

Gérez les identités de vos utilisateurs et de vos applications, ainsi que leurs droits d’accès dans une interface unique pour tous vos services. 

OVHcloud IAM permet de gérer finement l’ensemble des autorisations des produits OVHcloud et d’obtenir un meilleur niveau de sécurité avec une vision centralisée de vos accès.

En détail, une politique contient :

    Une ou plusieurs identités visées par cette politique.
        Il peut s'agir d'identifiants de comptes, d'utilisateurs ou de groupes d'utilisateurs (comme ceux utilisés dans Federation - d'autres guides SSO sont disponibles).
    Une ou plusieurs ressources concernées par cette politique.
        Une ressource est un produit OVHcloud qui sera concerné par cette politique (un nom de domaine, un serveur Nutanix, un Load Balancer, etc.).
    Une ou plusieurs actions autorisées ou exceptées par cette politique.
        Les actions sont les droits spécifiques concernés par cette politique (redémarrage d'un serveur, création d'un compte e-mail, résiliation d'un abonnement, etc.)

  
### Etape 2 : Comment fonctionne IAM avec PCC
  
  
Pour mieux comprendre comment fonctionne IAM avec Vsphere vous pouvez lire ce guide : [Comment utiliser les politiques IAM avec vSphere](https://help.ovhcloud.com/csm/fr-vmware-use-iam-vsphere?id=kb_article_view&sysparm_article=KB0059059)
  
  
## Aller plus loin
  
Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.


