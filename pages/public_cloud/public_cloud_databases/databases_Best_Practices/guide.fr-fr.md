---
title: 'Meilleures Pratiques pour Structurer les Projets Public Cloud OVHcloud'
excerpt: 'Optimisez la sécurité de votre compte OVHcloud, gérez vos informations personnelles et structurez efficacement vos projets Public Cloud'
updated: 2023-12-08
---

## Objectif

**Découvrez comment sécuriser votre compte OVHcloud, gérer vos informations personnelles et implémenter les meilleures pratiques pour structurer vos projets Public Cloud.**

## Prérequis

- Un compte OVHcloud actif
- Accès à votre panneau de contrôle OVHcloud

## En pratique

### Étape 1 : Sécurisation de votre compte

Pour des instructions détaillées sur la sécurisation de votre compte OVHcloud avec l'authentification à deux facteurs (2FA), veuillez consulter le guide officiel : [Sécuriser votre compte OVHcloud avec l'authentification à deux facteurs](/pages/account_and_service_management/account_information/all_about_username).

#### Activer l'authentification à deux facteurs (2FA)
- **Ce que cela fait** : Ajoute une couche de sécurité supplémentaire en nécessitant une seconde forme de vérification (ex. : application mobile, clé de sécurité) en plus de votre mot de passe.
- **Comment l'activer** : Connectez-vous à votre panneau de contrôle OVHcloud, allez dans l'onglet Sécurité et suivez les étapes pour configurer le 2FA à l'aide d'une application mobile ou d'une clé de sécurité. Assurez-vous de stocker vos codes de sauvegarde en lieu sûr. [Guide détaillé 2FA](https://support.us.ovhcloud.com/hc/en-us/articles/360013968099-Securing-an-Account-with-Two-Factor-Authentication).
- **Exemple** : Si vous utilisez une clé de sécurité U2F, vous devrez la brancher à votre port USB à chaque connexion, offrant une mesure de sécurité supplémentaire au-delà de votre mot de passe.

#### Définir des mots de passe forts
- **Exigences** : Au moins neuf caractères, incluant des majuscules, des minuscules, des chiffres et des caractères spéciaux. Évitez les informations personnelles et les mots du dictionnaire.
- **Gestion** : Utilisez un gestionnaire de mots de passe comme KeePass ou Bitwarden pour stocker et générer des mots de passe forts. Mettez régulièrement à jour votre mot de passe et assurez-vous qu'il est unique pour chaque service. [Guide de gestion des mots de passe](/pages/account_and_service_management/account_information/manage-ovh-password).

#### Ajouter une adresse email de secours
- **Importance** : Aide à récupérer l'accès à votre compte si l'email principal est inaccessible.
- **Configuration** : Ajoutez une adresse email de secours dans le panneau de contrôle OVHcloud sous les paramètres de votre profil, en vous assurant qu'elle diffère de votre adresse email principale. [Guide sur la gestion des informations personnelles](pages/account_and_service_management/account_information/all_about_username/).

### Étape 2 : Gestion des informations personnelles et mise en œuvre de IAM et RBAC

Pour vérifier et mettre à jour vos informations personnelles ou pour changer votre adresse email principale, veuillez consulter le guide officiel : [Tout sur le nom d'utilisateur](/pages/account_and_service_management/account_information/all_about_username).

#### Gestion des identités et des accès (IAM)

**Définition** : IAM est un cadre pour gérer les identités des utilisateurs et leur accès aux ressources de manière sécurisée.

**Mise en œuvre chez OVHcloud** : Utilisez IAM pour créer des utilisateurs, des groupes et des politiques dans OVHcloud.

**Éléments clés** :
1. **Utilisateurs** : Comptes individuels pour les personnes ayant besoin d'accéder aux ressources OVHcloud.
2. **Groupes** : Collections d'utilisateurs ayant des besoins d'accès communs.
3. **Politiques** : Règles définissant les actions que les utilisateurs et les groupes peuvent effectuer sur quelles ressources.

**Exemples** :
- **Créer des utilisateurs** : Créez des comptes individuels pour chaque membre de l'équipe. Assurez-vous que chaque utilisateur a un ensemble de données d'identification unique.
- **Regrouper les utilisateurs** : Créez des groupes tels que "Développeurs", "Admins" et "Auditeurs" pour simplifier la gestion des permissions.
- **Définir des politiques** : Attribuez des politiques aux utilisateurs et aux groupes pour restreindre ou accorder des accès. Par exemple, un développeur peut avoir des permissions pour déployer des applications mais pas pour gérer les informations de facturation.

**Pour en savoir plus** : 
- [Guide IAM OVHcloud](https://www.ovhcloud.com/en/identity-security/identity-access-management/)
- [Comment utiliser les politiques IAM via le panneau de contrôle OVHcloud](/pages/account_and_service_management/account_information/iam-policy-ui/)
- [Comment utiliser les politiques IAM via l'API OVHcloud](/pages/account_and_service_management/account_information/iam-policies-api/)

#### Contrôle d'accès basé sur les rôles (RBAC)

**Définition** : RBAC régule l'accès aux ressources basé sur les rôles assignés aux utilisateurs individuels.

**Mise en œuvre chez OVHcloud** : Assignez des rôles aux utilisateurs et aux groupes pour contrôler leurs permissions au sein de l'environnement cloud.

**Éléments clés** :
1. **Rôles** : Définissent un ensemble de permissions.
2. **Attribution des rôles** : Assignez des rôles aux utilisateurs ou aux groupes.

**Exemples** :
- **Créer des rôles** : Définissez des rôles tels que "Lecture seule", "Développeur" et "Administrateur". Chaque rôle a un ensemble spécifique de permissions.
- **Attribuer des rôles** : Attribuez le rôle "Lecture seule" aux auditeurs qui ont seulement besoin de consulter les ressources, et le rôle "Développeur" aux utilisateurs qui doivent déployer et gérer des applications.
- **Utiliser les attributions de rôles** : Liez les rôles aux utilisateurs et aux groupes pour appliquer les permissions nécessaires.

**Pour en savoir plus** : [Guide RBAC OVHcloud](https://www.ovhcloud.com/en/identity-security/identity-access-management/)

### Étape 3 : Délégation d'accès

Pour gérer les utilisateurs et déléguer l'accès à votre compte OVHcloud, veuillez consulter le guide officiel : [Gestion des utilisateurs OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-users-management).

#### Création et gestion des utilisateurs locaux

**Vue d'ensemble** : Avec OVHcloud, vous pouvez créer des utilisateurs locaux supplémentaires avec des accès en lecture ou écriture à votre compte client. Cela vous permet d'accorder à d'autres membres de votre entreprise l'accès à vos services OVHcloud sans partager les mots de passe ou les détails d'authentification à deux facteurs.

**Exemples** :
- **Créer un utilisateur local** : Ajoutez un utilisateur pour un nouveau développeur rejoignant votre équipe, en lui donnant accès aux ressources nécessaires sans exposer des informations sensibles.
- **Groupes d'utilisateurs** : Attribuez le nouvel utilisateur à un groupe "Développeurs" qui a un accès administratif restreint, lui permettant de gérer les applications mais pas les comptes utilisateurs.

**Pour en savoir plus** : Pour des étapes détaillées sur l'ajout et la gestion des utilisateurs locaux, consultez le [Guide de gestion des utilisateurs OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-users-management).

### Étape 4 : Meilleures pratiques pour structurer les projets Public Cloud

#### Établir des Landing Zones

**Objectif** : Créer des environnements multi-comptes sécurisés et évolutifs pour isoler les ressources et gérer la croissance efficacement.

**Définition** : Une Landing Zone est un environnement pré-configuré, sécurisé, évolutif et multi-compte basé sur les meilleures pratiques. Elle sert de point de départ pour déployer des charges de travail dans un environnement cloud.

**Mise en œuvre chez OVHcloud** :
- Les Local Zones sont positionnées stratégiquement près d'utilisateurs ou de localisations spécifiques pour réduire significativement la distance physique que doivent parcourir les données, offrant ainsi une faible latence et une haute performance. Ces zones assurent une conformité totale avec les régulations de localisation des données et améliorent l'expérience client avec des temps de réponse rapides.
- Les Local Zones OVHcloud offrent flexibilité et évolutivité, permettant d'ajouter ou de retirer des ressources à la demande. Ces instances sont adaptées à divers besoins, allant de l'archivage à long terme aux solutions de stockage haute performance.
- **Guide** : [Créer des projets Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project/).

**Exemples** :
- **Faible latence et proximité** : Positionnez les Local Zones près des bases d'utilisateurs spécifiques pour minimiser la latence et améliorer la performance des applications.
- **Résidence des données** : Utilisez les Local Zones pour respecter les régulations de localisation des données, assurant que les données soient traitées dans des frontières géographiques spécifiques.
- **Couverture internationale** : OVHcloud vise à déployer 150 Local Zones globalement dans les trois prochaines années, améliorant la performance et la conformité.

**Pour en savoir plus** :
- [Vue d'ensemble des Local Zones OVHcloud](https://www.ovhcloud.com/en/about-us/global-infrastructure/local-zone/?_gl=1*1qvadba*_gcl_au*NTIyMTcxNjkwLjE3MTU5NTg5ODIuMTQxNzQ4MDM5NS4xNzIxNjY0Nzk2LjE3MjE2NjQ3OTY.)
- [Capacités et limitations des Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations/)

#### Utiliser plusieurs comptes

**Stratégie** : Séparez les ressources et les charges de travail en différents comptes basés sur les unités d'affaires, les applications ou les environnements (développement, staging, production).

**Mise en œuvre chez OVHcloud** :
- Chez OVHcloud, cela peut être réalisé en créant des comptes séparés pour chaque environnement ou projet. Chaque compte peut avoir ses propres ressources, facturation et politiques de gestion.
- **Exemple** : Utilisez un compte pour le développement et un autre pour la production afin de prévenir toute interférence accidentelle entre les environnements.
- **Guide** : [Guide de gestion des utilisateurs OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-users-management/).

#### Organiser par applications et environnements

**Mise en œuvre** : Utilisez les VRacks pour connecter en toute sécurité les ressources à travers différents environnements. Implémentez une segmentation réseau pour protéger les données sensibles.

**Exemple** :
- Segmentez votre application CRM en environnements de développement, de test et de production, chacun avec ses propres politiques réseau et contrôles de sécurité.
- **Guide** : [Connexion des instances Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps/).

### Documentation complète sur les VRacks et les réseaux privés

Pour plus de détails sur les configurations VRack et réseau privé, consultez les guides suivants :
- [Utilisation des VRacks avec Public Cloud](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack/)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
