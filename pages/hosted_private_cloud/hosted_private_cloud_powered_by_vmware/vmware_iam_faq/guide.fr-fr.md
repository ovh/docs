---
title: "Premiers pas avec IAM dans votre Hosted Private Cloud - VMware On OVHcloud"
excerpt: "Bien démarrer avec IAM dans votre cloud privée VMware managé par OVH"
updated: 2024-05-24
---

# Table des matières 

1. [Premiers pas avec IAM](lien vers doc getting started)
1. [Objectif](#Objectif)
3. [Faq](#FAQ)

## Objectif
  
**Dans cette FAQ, nous aborderons quelques question ainsi les avantages et limitations de l'utilisation de IAM dans votre Cloud Privée VMware sur OVHcloud** 

Voici les liens des guides :

- Guide 1 : [Comment activer IAM dans votre cloud privée OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_enable#Objectif)
- Guide 2 : [Comment créer un role IAM et le lier à une politique](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role)
- Guide 3 : [Comment configurer des politiques IAM avec votre cloud privée OVHcloud](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_policy)
- Guide 4 : [Comment lier un role IAM à une politique](/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_role_policy)
- Guide 5 : [Comment gérer les identités associées IAM avec mon PCC](/home/pbgarcia/Documents/GIT/doc3/docs/pages/hosted_private_cloud/hosted_private_cloud_powered_by_vmware/vmware_iam_actions)


Le diagramme suivant présente une vue d'ensemble de la solution IAM ainsi que le fonctionnement de la gestion des **Ressources**, des **Droits** et **Actions** :

![Schema IAM](images/iam_schema.png){.thumbnail}

## FAQ

## Dans qu'elle scope applicable puis-je utiliser IAM dans mon cloud privée OVHcloud ?

IAM permet de simplifier la gestion de l'authentification et de centraliser son utilisation.

## Quelles droits je peux utiliser avec mon role dans une policy IAM ?

Les droits utilisés avec une politique IAM sont ceux que je retrouve dans la console OVhcloud de mon PCC VMware. Je peux choisir **d'accéder à Vsphere, accéder au vmNetwork, accéder aux v(x)Lans** (en opérateur, lecture, écriture, administrateur par exemple). Ils sont modifiable niveau du PCC  ou par datacentres. Grâce aux roles IAM.

## Comment IAM délègue la gestion des accès aux services IAM OVHcloud ?

La gestion des rôles associés et leurs autorisations dans vSphere s'effectue depuis la page du manager OVH de votre PCC [lien web](https://www.ovh.com/manager/#/iam/). La gestion des politiques et accès s'effectue depuis l'IAM OVHcloud dans la partie Bare Metal Cloud avec lequel vous accéder depuis le tableau de bord de votre utilisateur en haut à droite [lien web](https://www.ovh.com/manager/#/dedicated/useraccount/dashboard)

## Y-a t'il une gestion avancée des roles modifiés ?

Oui, la version suivante d'IAM permettra d'aller plus loin dans la gestion des droits avec les roles IAM modifiés.

## Quelles sont les limitations de IAM avec mon Cloud privée VMware ?

Les infrastructures bénéficiant d'options de sécurité renforcée ou d'un service certifié (HDS, PCI-DSS ou SNC) ne peuvent actuellement pas utiliser l'IAM OVHcloud.

**SNC : SecNumCloud**
**HDS : Hébergement de santé**
**PCI-DSS: Hébergement de données bancaires**

Un role IAM ne peut actuellement uniquement être ajouté manuellement dans une policy, vous pouvez suivre [ce guide :](lien vers doc) pour retrouver la solution.

## Est ce que je peux activer IAM dans mon cloud privée VMware sur OVHcloud ?

Oui je peux activer IAM depuis mon cloud privée VMware (voir guide : Comment activer IAMdans mon pcc) en Beta.

## Est ce que je peux ajouter un role automatiquement à une politique IAM ?

Non il n'est pas possible j'ajouter un role grace aux groupe de permissions managées.

## Est-il possible d'utiliser une fédération d'identité externe avec IAM et mon PCC ? -> A valider

Oui, l'utilisateur devra renseigner son identifiant XXX/idp sans son mot de passe afin d'être redirigé vers la page d'authentification du provider d'identité.

## Aller plus loin

Pour aller plus moin avec IAM vous pourvez lire ces guides :
1. [Comment utiliser les politiques IAM avec vSphere](https://help.ovhcloud.com/csm/fr-vmware-use-iam-vsphere?id=kb_article_view&sysparm_article=KB0059059)

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com>.