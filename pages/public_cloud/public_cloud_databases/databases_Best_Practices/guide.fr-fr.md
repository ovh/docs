---
title: 'Sécuriser votre compte OVHcloud et gérer vos informations personnelles'
excerpt: 'Apprenez à optimiser la sécurité de votre compte OVHcloud, à gérer vos informations personnelles et à déléguer l'accès à votre compte'
updated: 2024-06-12
---

## Objectif

**Découvrez comment sécuriser votre compte OVHcloud, gérer vos informations personnelles et mettre en œuvre les meilleures pratiques pour structurer vos projets Public Cloud.**

## Prérequis

- Un compte OVHcloud actif
- Accès à votre panneau de contrôle OVHcloud

## En pratique

### Étape 1 : Sécuriser votre compte

1. **Activer l'authentification à deux facteurs (2FA)**
   - Connectez-vous à votre panneau de contrôle OVHcloud.
   - Accédez à "Mon compte" et sélectionnez "Sécurité".
   - Suivez les instructions pour configurer la 2FA avec votre méthode préférée (SMS, application d'authentification).

2. **Utiliser des mots de passe forts**
   - Assurez-vous que votre mot de passe comporte au moins 12 caractères, avec un mélange de lettres, de chiffres et de caractères spéciaux.
   - Évitez d'utiliser le même mot de passe sur plusieurs sites.

3. **Mettre régulièrement à jour vos identifiants**
   - Changez périodiquement votre mot de passe pour réduire le risque d'accès non autorisé.
   - Mettez à jour vos questions de sécurité et vos informations de contact.

### Étape 2 : Gestion des informations personnelles

1. **Vérifier vos informations personnelles**
   - Allez dans "Mon compte" et cliquez sur "Informations personnelles".
   - Assurez-vous que tous vos détails sont exacts et à jour.

2. **Configurer des alertes de compte**
   - Activez les notifications par e-mail pour les activités de compte.
   - Surveillez votre compte pour toute activité suspecte et signalez-la immédiatement.

3. **Déléguer l'accès de manière responsable**
   - Utilisez la fonctionnalité "Gestion des utilisateurs" pour accorder l'accès aux membres de l'équipe.
   - Attribuez des permissions appropriées en fonction des rôles et des responsabilités.

### Meilleures pratiques pour la structuration des projets Public Cloud

Un environnement bien architecturé est crucial pour gérer et faire évoluer efficacement vos ressources OVHcloud. Voici comment structurer vos projets :

#### Établir des Landing Zones

Créez un environnement multi-compte évolutif et sécurisé comme base pour vos projets. Cette approche aidera à isoler les ressources et à gérer la croissance efficacement.

#### Utiliser plusieurs comptes

Isolez les ressources et les charges de travail dans différents comptes pour une meilleure sécurité et gestion. Cela inclut la configuration des comptes pour les différentes unités commerciales, applications ou environnements (développement, staging, production).

#### Organiser par applications et environnements

Segmentez vos projets par applications et divisez-les par environnements. Utilisez des VRacks pour connecter les ressources en toute sécurité à travers ces environnements.

#### Mettre en œuvre la segmentation du réseau

Utilisez des réseaux privés et des politiques claires pour protéger les données sensibles. Assurez-vous que le trafic entre les différents segments est contrôlé et surveillé.

#### Étiquetage cohérent

Implémentez une stratégie de balisage pour catégoriser et gérer les ressources efficacement. Cela aide à l'allocation des ressources, à la facturation et au suivi de la conformité.

### Principes de gestion des identités et de la multi-location sur OpenStack et Flexible Engine

#### Domaine (OpenStack) / Compte (Flexible Engine)

Les domaines sont le niveau d'abstraction le plus élevé pour les ressources et les utilisateurs dans un environnement OpenStack. Un domaine peut contenir directement des utilisateurs, des groupes d'utilisateurs et des projets.

#### Projets (OpenStack & Flexible Engine) / Locataire (déprécié)

Les projets sont le deuxième niveau d'abstraction dans OpenStack. Ils peuvent contenir des groupes d'utilisateurs ou des utilisateurs et des ressources.

#### Groupes d'utilisateurs (OpenStack & Flexible Engine)

Les groupes d'utilisateurs sont des ensembles d'utilisateurs. L'avantage est qu'en attribuant des rôles à un groupe d'utilisateurs, tous les utilisateurs du groupe obtiennent les permissions de ces rôles.

#### Rôles

Dans OpenStack, les permissions sont obtenues via l'attribution de rôles. Les rôles contiennent des permissions qui sont des paires type d'objet-opération.

#### Utilisateurs

Les utilisateurs sont les entités actives dans le système OpenStack qui peuvent consommer des ressources. Les utilisateurs sans rôle attribué ne peuvent rien faire dans le système.

#### Keystone v3

Avec Keystone v3, la multi-location est introduite avec l'utilisation des domaines. Chaque domaine a son propre administrateur de domaine, qui peut créer des projets, des utilisateurs, des groupes et attribuer des rôles au sein de son domaine.

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.

Pour des informations détaillées et le soutien de la communauté, consultez notre [guide des meilleures pratiques](https://cloud.orange-business.com/en/best-practices-and-how-to/iam-multi-tenancy/) et rejoignez nos discussions communautaires sur [Discord](https://discord.com/channels/850031577277792286/1222599406163853484).

N'hésitez pas à nous contacter si vous avez besoin d'aide supplémentaire !

Sources :
- [Documentation OVHcloud](https://docs.ovh.com)
- [Guide Public Cloud OVHcloud](https://docs.ovh.com/gb/en/public-cloud/)
- [Principes IAM et multi-location sur Flexible Engine](https://cloud.orange-business.com/en/best-practices-and-how-to/iam-multi-tenancy/)
