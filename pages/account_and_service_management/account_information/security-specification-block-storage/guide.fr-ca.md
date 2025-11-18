---
title: Spécifications de sécurité du service Block Storage
excerpt: Présentation de la sécurité du stockage par bloc (Block Storage)
updated: 2025-01-17
---

## Objectif

En complément du [modèle de responsabilité du service Block Storage entre le client et OVHcloud](/pages/storage_and_backup/block_storage/responsibility-model-block-storage/), cette page a pour objectif de présenter les particularités et fonctions de sécurité propres à ce service. Elle met aussi en avant des bonnes pratiques qui permettront au client de l'exploiter au mieux. 

### 1. Certifications

- ISO/IEC 27001
- ISO/IEC 27701
- ISO/IEC 27017
- ISO/IEC 27018
- HDS
- SOC 1 type II
- SOC 2 type II
- CSA type II
- C5 type II

### 2. Recommandations une fois le service livré

Une fois que vous disposez d'une instance Public Cloud, vous pouvez ajouter vos volumes Block Storage. Vous pouvez gérer les droits des utilisateurs via la section `Users & Roles`{.action} de [l'espace client OVHcloud](/links/manager) en suivant ce [guide](/pages/public_cloud/public_cloud_cross_functional/create_and_delete_a_user).

### 3. Niveaux de service (SLA)

Les SLA varient entre 99,999% et 99,5% et diffèrent en fonction des offres et des gammes. Reportez-vous aux conditions particulières de service pour plus de détails.

### 4. Sauvegardes

Vous devez mettre en place un dispositif de sauvegarde supplémentaire basé sur vos propres outils ou à travers les options proposées par OVHcloud, comme un second serveur, une adresse Additional IP, etc.

| **Option** | **Granularité** | **RPO** | **RTO** | **Documentation** |
| --- | --- | --- | --- | --- |
| Volume backup | Le volume | Dépend de la date de la dernière sauvegarde et du temps de résolution de l'incident | Dépend de la taille du volume| [Création d'une sauvegarde d'un volume](/pages/public_cloud/compute/volume-backup)|

### 5. Logs

| **Source** | **Contenu** | **Documentation** |
| --- | --- | --- |
| Espace client | Logs sur toutes les interactions réalisées via des appels API, lancés par les contacts administrateur, technique ou de facturation, sur les services auxquels ils ont accès. |- <https://eu.api.ovh.com/console/#/me> (voir `/me/api/logs`)<br>- [Liste des appels API lancés avec votre compte](https://eu.api.ovh.com/console/#/me/api/logs/self~GET)<br>- [Liste des appels API lancés sur des services auxquels vous avez accès](https://eu.api.ovh.com/console/#/me/api/logs/services~GET)<br>- [Obtenir vos logs d'audit](https://eu.api.ovh.com/console/#/me/logs/audit~GET) |

### 6. API

| **Nom** | **Capacité** | **Liens** |
| --- | --- | --- |
| Espace client et service | Manipulation des comptes client et des services sur lesquels le compte a des droits de gestion du service | [Gestion des volumes dans l’API OpenStack](/pages/public_cloud/compute/starting_with_managing_volumes_openstack_api)|

### 7. Comptes - Utilisateur

#### 7.1 Control Plane

Depuis votre espace client, vous pouvez gérer votre service en utilisant [trois contacts différents](/pages/account_and_service_management/account_information/managing_contacts).<br>
Afin de référencer chaque client ayant souscrit à un ou plusieurs services, OVHcloud utilise un compte propriétaire avec un ID interne. 

Pour renforcer l'accès au compte client, nous vous recommandons d'activer [la double authentification (2FA)](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa) ou [l'authentification en SSO (Single Sign-On)](/pages/account_and_service_management/account_information/ovhcloud-account-connect-saml-adfs).


#### 7.2 Data Plane

Une fois que vous avez obtenu vos informations d'identification, vous êtes autonome pour créer des comptes d'utilisateurs sur votre système d'exploitation et les applications que vous avez installées.

### 8. Fonctionnalités et options disponibles lors de la livraison du service

#### 8.1 Option HDS

L’option HDS peut être activée sur le service.<br>
La souscription au [niveau de support Business](/links/support-business) est obligatoire, afin de respecter les exigences nécessaires.

### 9. Réversibilité

Pour assurer la réversibilité du service, vous pouvez suivre la [politique de réversibilité spécifique](/pages/account_and_service_management/reversibility/03-public-cloud-reversibility-policy) pour importer et exporter vos données en toute autonomie.

#### 9.1 Effacement des données client

Une fois votre projet Public Cloud supprimé dans l’espace client OVHcloud, toutes les ressources allouées sont libérées.
