---
title: Comment utiliser les politiques IAM avec vSphere
excerpt: "Découvrez comment connecter votre vSphere avec l'IAM OVHcloud"
updated: 2023-07-28
---

> [!warning]
>
> Cette fonctionnalité est actuellement en version bêta. Retrouvez plus d'informations sur <https://labs.ovhcloud.com/en/>.
>

## Objectif

Ce guide vous permettra de connecter votre vSphere avec l'IAM OVHcloud.
Cela vous permettra :
- De vous connecter sur votre vSphere en utilisant un compte OVHcloud
- De gérer les niveaux de droits de vos utilisateurs aux travers des politiques IAM

## Prérequis

- Disposer d'un [compte OVHcloud](/pages/account/customer/ovhcloud-account-creation)
- Savoir [gérer les utilisateurs du compte](/pages/account/customer/ovhcloud-users-management)
- Savoir [comment configurer des stratégies pour IAM](/pages/account/iam-policies-ui)

## En pratique

### Activer l'IAM sur votre serveur

Vous pouvez activer l'option IAM sur votre Hosted Private Cloud depuis l'API OVHcloud : POST /dedicatedCloud/{serviceName}/iam/enable
Cette opération pourra prendre jusqu’à 30 minutes

L'activation de l'IAM OVHcloud ne désactive pas vos utilisateurs Hosted Private Cloud existants, vous pourrez toujours les utiliser pour vous connecter directement aux différents éléments de votre Hosted Private Cloud, sans passer par l'IAM.

L'IAM d'OVHcloud n'est pas disponible sur les environnements disposant des options de sécurité avancée et de certifications (PCI-DSS, HDS, HIPAA, SNC)

La connection avec l'IAM OVHcloud peut être désactivée depuis l'API OVHcloud : POST /dedicatedCloud/{serviceName}/iam/disable

### Créer des rôles IAM

Une fois l'option activée, des rôles IAM sont créés par défaut et sont utilisable dans les politiques d'accès de l'IAM OVHcloud.
Vous pourrez créer vous même de nouveaux rôles depuis l'API OVHcloud : POST /dedicatedCloud/{serviceName}/iam/addRole

La gestion des permissions de vSphere de chaque rôle IAM s'effectue comme pour n'importe quel autre utilisateur de votre Hosted Private Cloud, dans l'API ou dans l'[espace client OVHcloud](/pages/cloud/private-cloud/change_users_rights)

### Utilisation des politiques IAM

La création des policies IAM s'effectue depuis l'[IAM OVHcloud](/pages/account/iam-policies-ui). 
Chaque rôle IAM de votre Hosted Private Cloud correspond à une action IAM s'écrivant sous la forme "pccVMware:vSphere:assumeRole?**nom du role**".
Par exemple, pour le rôle **iam-admin**, l'action est "pccVMware:vSphere:assumeRole?**iam-admin**"

Cette action doit être indiquée dans la partie "Actions ajoutées manuellement" de la création de politique

![IAM Policies](images/action_on_policy.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d’utilisateurs sur <https://community.ovh.com/>.
