---
title: Politique de réversibilité du produit Managed Web Hosting
updated: 2025-08-25
---

## Objectif

Ce document est la politique de réversibilité du produit Managed Web Hosting couvrant l’offre commerciale d’OVHcloud Hébergement Web.

Cette politique vise à mettre en œuvre les principes généraux de réversibilité et notre conformité avec le Code de conduite SWIPO IaaS pour les fournisseurs de cloud.


## Liste des fonctionnalités

Les fonctionnalités du produit sont réparties en trois catégories :

1. Les **fonctionnalités principales** pour lesquelles nous garantissons la capacité de migration.
2. Les **implémentations OVHcloud** qui nécessitent une adaptation à un nouvel environnement de migration.
3. Les **fonctionnalités spécifiques** qui ne peuvent pas être garanties pour la migration car elles sont liées à l'environnement OVHcloud ou impliquent des développements personnalisés.

### 1. Fonctionnalités principales

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Package hébergement web standard | Utilisation de composants open source standards : Linux, Apache, MySQL/MariaDB, PHP | SQL, PHP, HTML, JSON, CSV | **Entrante** : copie des fichiers applicatifs, import des bases de données via dump SQL <br>**Sortante** : export des fichiers de données client/dumps de base de données, réutilisables sur tout environnement compatible | [Comment créer un serveur web Debian ou Ubuntu](/pages/bare_metal_cloud/dedicated_servers/installing_lamp_debian9_ubuntu18) |
| Import et export de fichiers applicatifs | Transfert des fichiers web (PHP, HTML, assets) via FTP/SFTP et rsync pour les offres Pro et Performance | Tous formats de fichiers  | **Entrante** : chargement direct des fichiers <br>**Sortante** : export direct des fichiers pour migration vers tout autre hébergeur | [Exporter son site web](/pages/web_cloud/web_hosting/exporter-son-site-web) |
| Accès SSH/SFTP à l’environnement client | Accès simple utilisateur à son l’environnement pour transfert de fichiers et automatisation | Fichiers, scripts, dumps | **Entrante** : transfert des fichiers applicatifs, dumps SQL, scripts via FTP/SFTP et rsync/scp/SSH pour les offres Pro et Performance <br>**Sortante** : Export des fichiers, dumps, scripts via FTP/SFTP et rsync/scp/SSH pour les offres Pro et Performance vers tout autre hébergeur| [Exporter son site web](/pages/web_cloud/web_hosting/exporter-son-site-web) |

### 2. Implémentations OVHcloud

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Cron jobs et tâches planifiées | Tâches automatisées via crontab | NA | **Entrante** : recréation des tâches planifiées sur la cible via l’espace client ou API <br>**Sortante** : export via API. Adaptation manuelle à faire dans l’environnement cible pour les tâches à planifier  | [Créer des tâches automatisées](/pages/web_cloud/web_hosting/cron_tasks) |
| Modules Apache/PHP non standards | Modules ou extensions non présents par défaut sur la cible | Modules, extensions | **Entrante** : adaptation des applicatifs hébergés à l’environnement d’hébergement fourni. Configuration Apache, PHP disponible en ligne <br>**Sortante** : vérification de la disponibilité des modules sur la cible, adaptation possible  | [Hébergement mutualisés](/pages/web_cloud/web_hosting/web_hosting_main_info)<br><br>[Configurer son environnement d'hébergement](/pages/web_cloud/web_hosting/configure_your_web_hosting) |
| Synchronisation avec des repository git | Synchronisation des données avec des repository git | Tous types de fichiers | **Entrante** : import de données via configuration d’un repository git <br>**Sortante** : export de données via configuration d’un repository git | [Configurer et utiliser git](/pages/web_cloud/web_hosting/git_integration_webhosting) |

### 3. Fonctionnalités spécifiques

| **Fonction** | **Description** | **Formats disponibles** | **Modèle de migration** | **Documentation disponible** |
| --- | --- | --- | --- | --- |
| Monitoring | Dashboard de monitoring de : commandes FTP, requêtes http, le temps moyen de réponse, les connexions sortantes, l’utilisation du CPU, le dépassement du plafond de ressources | NA | **Entrante** : l’activation est automatique à la création du service, aucune action requise <br>**Sortante** : NA | [Consulter les statistiques et logs d'un site web](/pages/web_cloud/web_hosting/logs_and_statistics) |
| Analyse de données | Outil d’analyse de données (OWSTAT) permettant de générer un suivi statistique sur un site web donné | HTTP | **Entrante** : l’activation est automatique à la création du service, aucune action requise <br>**Sortante** : pas d'export possible | [Consulter les statistiques et logs d'un site web](/pages/web_cloud/web_hosting/logs_and_statistics) |
| Anti-DDoS | L’anti-DDoS est un ensemble d’outils et de mécanismes conçus pour absorber les attaques par déni de service. Il comprend l'analyse du trafic, le « nettoyage » via un réseau spécialisé et la mitigation grâce à la technologie VAC développée par OVHcloud. | N/A | **Entrant** : le système anti-DDoS fait partie de notre infrastructure et est activé par défaut. Aucune action n'est requise. <br> **Sortant** : commande et configuration d'un anti-DDoS chez le nouveau fournisseur. | [OVHcloud DDoS Protection](/links/security/antiddos) |

### Liste des architectures

Ce produit est une plateforme managée mutualisée non personnalisable par le client et nécessitant une adaptation des applications à l’environnement d’hébergement.
La base technique repose sur Linux Apache, MySQL/MariaDB et PHP. L’architecture permet une personnalisation partielle (gestion multi-sites, tâches planifiées) et permet de bénéficier de services managés tels que des sauvegardes automatisées, une intégration réseau (IPv4/IPv6). Les ressources (CPU, RAM, stockage) sont évolutives selon l’offre choisie.

### Services Partenaires

Les partenaires OVHcloud concernés figurent dans l'annuaire des [partenaires OVHcloud](/links/partner) sous les mots-clés « **Data center expansion and Migration** ».

OVHcloud dispose également d’un service dédié : [OVHcloud Professional Services](/links/professional-services).

### Coût et frais

La facturation est à l’année. Aucun frais de résiliation spécifique n’est appliqué : la suppression du service arrête la facturation à la date anniversaire. Il incombe au client d’exporter ses fichiers, bases et configurations avant suppression, car leur effacement est irréversible.

### Conservation des données après la résiliation du contrat

Après suppression du service ou résiliation du contrat, OVHcloud supprime définitivement toutes les données stockées (fichiers, bases de données, snapshots). Une période de rétention de 45 jours suivant la date d’échéance du service s’applique.
