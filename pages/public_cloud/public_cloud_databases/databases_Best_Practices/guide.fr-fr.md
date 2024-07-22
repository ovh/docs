---
title: Sécuriser votre compte OVHcloud et gérer vos informations personnelles
excerpt: Apprenez à optimiser la sécurité de votre compte OVHcloud, à gérer vos informations personnelles et à déléguer l'accès à votre compte
updated: 2023-12-08
---

## Objectif

**Découvrez comment sécuriser votre compte OVHcloud, gérer vos informations personnelles et appliquer les meilleures pratiques pour structurer vos projets sur le Cloud Public.**

## Prérequis

- Un compte OVHcloud actif
- Accès à votre Tableau de Bord OVHcloud

## En pratique

### Étape 1: Sécuriser Votre Compte

Pour des instructions détaillées sur la sécurisation de votre compte OVHcloud, veuillez consulter le [guide officiel](/pages/account_and_service_management/account_information/all_about_username).

#### Activer l'Authentification à Deux Facteurs (2FA)
- **Ce que cela fait** : Ajoute une couche de sécurité supplémentaire en demandant une deuxième forme de vérification (par exemple, une application mobile, une clé de sécurité) en plus de votre mot de passe.
- **Comment activer** : Connectez-vous à votre Tableau de Bord OVHcloud, allez dans l'onglet Sécurité et suivez les étapes pour configurer la 2FA en utilisant une application mobile ou une clé de sécurité. Assurez-vous de stocker vos codes de secours en toute sécurité. [Guide détaillé sur la 2FA](https://support.us.ovhcloud.com/hc/en-us/articles/360013968099-Securing-an-Account-with-Two-Factor-Authentication).
- **Exemple** : Si vous utilisez une clé de sécurité U2F, vous la brancherez sur votre port USB chaque fois que vous vous connectez, ajoutant ainsi une mesure de sécurité supplémentaire au-delà de votre mot de passe.

#### Définir des Mots de Passe Robustes
- **Exigences** : Au moins neuf caractères, incluant des lettres majuscules et minuscules, des chiffres et des caractères spéciaux. Évitez les informations personnelles et les mots du dictionnaire.
- **Gestion** : Utilisez un gestionnaire de mots de passe comme KeePass ou Bitwarden pour stocker et générer des mots de passe robustes. Mettez régulièrement à jour votre mot de passe et assurez-vous qu'il est unique pour chaque service. [Guide sur les mots de passe](/pages/account_and_service_management/account_information/manage-ovh-password).
- **Exemple** : Un mot de passe robuste pourrait être `A1b2C3!d4#e5F6`.

#### Ajouter une Adresse Email de Secours
- **Importance** : Aide à récupérer l'accès à votre compte si l'email principal est inaccessible.
- **Configuration** : Ajoutez une adresse email de secours dans le Tableau de Bord OVHcloud sous les paramètres de votre profil, en veillant à ce qu'elle diffère de votre adresse principale. [Guide sur la gestion des informations personnelles](https://help.ovhcloud.com/csm/en-gb-account-secure-account-personal-data?id=kb_article_view&sysparm_article=KB0042918).

### Étape 2: Gérer les Informations Personnelles

Pour vérifier et mettre à jour vos informations personnelles ou pour changer votre adresse email principale, veuillez vous référer au guide officiel : [Sécuriser mon compte OVHcloud et gérer mes informations personnelles](/pages/account_and_service_management/account_information/all_about_username).

### Étape 3: Déléguer l'Accès

1. **Gestion des Utilisateurs**
   - **Délégation** : Utilisez la fonctionnalité "Gestion des Utilisateurs" dans le Tableau de Bord pour accorder des accès aux membres de l'équipe avec les autorisations appropriées. Cela aide à maintenir la sécurité tout en permettant un accès nécessaire.
   - **Exemple** : Accordez un accès "lecture seule" à un comptable pour consulter les informations de facturation sans lui donner la possibilité de modifier quoi que ce soit.

### Étape 4: Meilleures Pratiques pour Structurer les Projets Cloud Publics

1. **Établir des Zones de Départ**
   - **But** : Créez des environnements multi-comptes évolutifs et sécurisés pour isoler les ressources et gérer la croissance de manière efficace. [Guide sur la création de projets Public Cloud](https://help.ovhcloud.com/csm/en-public-cloud-compute-create-project?id=kb_article_view&sysparm_article=KB0050599).
   - **Exemple** : Configurez des comptes séparés pour différents départements comme RH, Finance et Développement pour garantir l'isolement et la sécurité des données.

![Diagramme de Zones de Départ](https://www.ovhcloud.com/cdn/www.ovhcloud.com/images/content/OVHcloud_public_cloud_diagram.jpg)

2. **Utiliser Plusieurs Comptes**
   - **Stratégie** : Séparez les ressources et les charges de travail dans différents comptes en fonction des unités commerciales, des applications ou des environnements (développement, mise en scène, production).
   - **Exemple** : Utilisez un compte pour le développement et un autre pour la production pour éviter les interférences accidentelles entre les environnements.

3. **Organiser par Applications et Environnements**
   - **Mise en œuvre** : Utilisez les VRacks pour connecter les ressources de manière sécurisée à travers différents environnements. Mettez en œuvre la segmentation du réseau pour protéger les données sensibles. [Guide sur la connexion des instances Public Cloud](https://help.ovhcloud.com/csm/en-gb-public-cloud-compute-getting-started?id=kb_article_view&sysparm_article=KB0051017).
   - **Exemple** : Segmentez votre application CRM en environnements de développement, de test et de production, chacun avec ses propres politiques et contrôles de sécurité réseau.

![Schéma de segmentation réseau](https://www.ovhcloud.com/cdn/www.ovhcloud.com/images/content/OVHcloud_network_segmentation.jpg)

4. **Tagging Consistant**
   - **Utilisation** : Étiquetez les ressources pour une gestion efficace, la facturation et le suivi de conformité. Notez que le tagging est actuellement disponible uniquement pour certaines ressources.
   - **Exemple** : Utilisez des tags comme `Projet:CRM`, `Environnement:Production`, et `Propriétaire:Marketing` pour organiser et suivre les ressources.

### Documentation Complète sur les VRacks et les Réseaux Privés

Pour plus de détails sur les configurations de VRacks et de réseaux privés, veuillez consulter les guides suivants :
- [Utilisation des VRacks avec le Cloud Public](https://docs.ovh.com/gb/en/public-cloud/using-vrack-public-cloud/)
- [Guide sur les VRacks](https://docs.ovh.com/gb/en/dedicated/vrack/)

![Configuration VRack](https://www.ovhcloud.com/cdn/www.ovhcloud.com/images/content/OVHcloud_vrack_configuration.jpg)

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur <https://community.ovh.com/>.
