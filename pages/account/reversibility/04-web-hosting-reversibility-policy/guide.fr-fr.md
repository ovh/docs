---
title: Politique de réversibilité d'un hébergement Web
slug: politique-de-reversibilite-hebergement-web
section: Politiques de réversibilité
order: 5
---

**Dernière mise à jour le 05/05/2021**

## Objectif

Ce document est la politique de réversibilité appliquée sur un **hébergement Web** avec un [nom de domaine](https://www.ovh.com/fr/domaines/).

Cette politique vise à mettre en oeuvre les principes de réversibilité mondiale et les prérequis du [Code de conduite IaaS de l'OMPI pour les fournisseurs de Cloud](https://swipo.eu/download-section/copyrighted-downloads/){.external}.

## Liste des fonctionnalités

Les fonctionnalités des hébergements web OVHcloud sont divisées en trois catégories:

- Les [fonctionnalités principales](#fonctionnalites-principales) pour lesquelles nous garantissons la capacité de migrer.
- L'[implémentation OVHcloud](#ovhcloud-implementation), dont la migration nécessitera des adaptations à un nouvel environnement.
- Les [fonctionnalités spécifiques](#fonctions-specifiques), dont la migration en tant que telle est impossible à garantir car elle est liée à l'environnement OVHcloud ou à des développements spécifiques.

### Fonctionnalités principales <a name="fonctionnalites-principales"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|----|-----|---|-----|-----|
|Enregistrer et gérer les noms de domaine|Réservation et enregistrement d'un nom de domaine avec bureau d'enregistrement.<br><br>Paramètre DNS d'un nom de domaine.|N/A|**Migration entrante**: Transférez la demande du bureau d'enregistrement d'origine, puis gérez-la via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)<br><br>**Migration sortante**: Demande de transfert entièrement gérée dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).|**Migration entrante**: [Transfert d'un nom de domaine vers OVHcloud](https://docs.ovh.com/fr/domains/transferer-mon-domaine-generique/)<br><br>[Transfert d'un nom de domaine .co.uk vers OVHcloud](https://docs.ovh.com/fr/domains/transferer-domaine-couk/)<br><br>**Migration sortante**: [Transfert d'un nom de domaine vers un autre bureau d'enregistrement](https://docs.ovh.com/fr/domains/transfert-sortant-dun-nom-de-domaine-generique-ou-geographique/)<br><br>[Transfert sortant d’un nom de domaine .co.uk](https://docs.ovh.com/fr/domains/transfert-sortant-dun-nom-de-domaine-couk/)|
|Hébergement Web - Serveurs HTTP|Mise à disposition d'un serveur Web front-end et d'un environnement d'exécution|**PHP**: 7.3 / 7.2 / 7.1 / 7.0 / 5.6<br><br>**Node.js**: 8 / 10 / 11|**Migration entrante**: Commandez un nouvel hébergement OVHcloud.<br><br>**Migration sortante**: Commandez un nouvel hébergement Web auprès d'un nouvel hébergeur. Répliquez la configuration de l'environnement d'exécution à partir de votre espace client ou du fichier .ovhconfig.|**Migration entrante**:<br>[Débuter avec votre l'hébergement Web - Définir votre projet](https://docs.ovh.com/fr/hosting/premiers-pas-avec-hebergement-web/#etape-1-delimiter-votre-projet)<br><br>[Débuter avec votre Cloud Web - Définir votre projet](https://docs.ovh.com/fr/hosting/premiers-pas-avec-hebergement-web/#etape-1-delimiter-votre-projet)<br>[Configuration du fichier .ovhconfig sur votre hébergement Web](https://docs.ovh.com/fr/hosting/configurer-fichier-ovhconfig/)<br><br>**Migration sortante**: [Configuration du fichier .ovhconfig sur votre hébergement Web](https://docs.ovh.com/fr/hosting/configurer-fichier-ovhconfig/)<br><br>[Modifier la version de PHP à partir de votre espace client](https://docs.ovh.com/fr/hosting/modifier-lenvironnement-dexecution-de-mon-hebergement-web/)<br><br>Remarque: ces documents vous permettent de récupérer des informations pertinentes sur le fichier .ovhconfig et la version PHP.|
|Hébergement Web - Serveurs de fichiers (FTP).|Mise à disposition d'un serveur de fichiers pour héberger les fichiers composants du site Web (pages, scripts, ressources...)|**Tout type de format** - les clients peuvent téléverser n'importe quel fichier sur le serveur.|**Migration entrante**: Connexion FTP au serveur de fichiers et importation.<br><br>**Migration sortante**: Connexion FTP et récupération de fichiers.|**Migration entrante**: [Migration de votre site Web vers OVHcloud](https://docs.ovh.com/fr/hosting/migrer-mon-site-chez-ovh/)<br><br>**Migration sortante**: [Exporter un site Web - récupérer des fichiers de votre espace de stockage FTP](https://docs.ovh.com/fr/hosting/exporter-son-site-web/#etape-1-recuperation-des-fichiers-de-votre-espace-de-stockage-ftp)|
|Hébergement Web: bases de données|Bases de données pouvant être connectées au site Web|**Offres SQL partagées**:<br><br>**MySQL** 5.6<br>**Offres SQL privées**:<br><br>**MySQL** 5.6 / 5.7<br>**MariaDB** 10.1<br><br>**PostgreSQL** 9.4 / 9.5 / 9.6 / 10|**Migration entrante**: Créez une base de données, puis importez les données selon l'une des méthodes disponibles (restauration de sauvegarde, interface phpMyAdmin, script, connexion SSH)<br><br>**Migration sortante**: Exporter les données par l'une des méthodes disponibles (exportation de sauvegarde, interface phpMyAdmin, script, connexion SSH)|**Migration entrante**: [Importation d'une sauvegarde dans une base de données sur votre hébergement Web](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/)<br><br>[SQL privé - Importation d'une base de données](https://docs.ovh.com/fr/hosting/premiers-pas-avec-sql-prive/#importation-dune-base-de-donnees-facultatif)<br><br>**Migration sortante**: [Récupération de la sauvegarde de la base de données sur votre hébergement Web](https://docs.ovh.com/fr/hosting/exportation-bases-donnees/)|

### Implémentation OVHcloud <a name="ovhcloud-implementation"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|---|---|---|---|
|Modules en un clic|Installation automatisée de CMS (WordPress, PrestaShop, Joomla!, Drupal)|N/A|**Migration entrante**: Non applicable<br><br>**Migration sortante**: Une fois le module en un clic installé, suivez la procédure de migration standard du site Web (y compris la migration de la base de données)|**Migration sortante**: Voir "Hébergement Web" ci-dessus.|
|Sauvegardes automatiques|Sauvegardes automatisées des sites Web et des bases de données|N/A, restaurez une sauvegarde pour exporter son contenu|**Migration entrante**: Les sauvegardes sont automatiquement activées.<br><br>**Migration sortante**: Activez un plan de sauvegarde avec le nouvel hébergeur après la migration du site.<br><br>Il n'est pas possible d'exporter une sauvegarde en tant que telle : les sauvegardes sont internes et ne sont pas présentées comme un fichier ou une archive. Pour importer le contenu d'un serveur de fichiers (FTP) et d'une base de données, **restaurez la sauvegarde, puis exportez le site Web** comme indiqué ci-dessus.|**Migration entrante**: Voir « Hébergement Web » ci-dessus.<br><br>**Migration sortante**: Voir « Hébergement Web » ci-dessus.|
|Journalisation|Conservation et consultation des logs du site Web. Analyse et représentation graphique de ces logs avec l'application Urchin WebAnalytics.|Texte brut avec un format de logs Apache standard|**Migration entrante**: Non applicable - les logs de l'infrastructure précédente ne sont pas pertinents pour un autre.<br><br>**Migration sortante**: Téléchargez les fichiers de logs à partir de votre [esapce client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)|**Migration entrante**: N/A<br><br>**Migration sortante**: [Exportation d'un site Web - récupération des logs](https://docs.ovh.com/fr/hosting/exporter-son-site-web/#etape-3-recuperer-les-logs-de-votre-hebergement-ovhcloud)|
|Planification des tâches |Exécution de tâches automatisées périodiques (cron)|N/A|**Migration entrante**: Les scripts ne sont pas importés tels quels. Récupérez les anciens scripts ou leur structure et réimplémentez-les sur l'hébergement OVHcloud via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>**Migration sortante**: Les scripts ne sont pas exportés tels quels. Récupérez la structure des scripts dans votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) et réimplémentez-les dans l'environnement cible.|**Migration entrante et sortante**: [Utilisation de tâches automatisées sur un hébergement Web](https://docs.ovh.com/fr/hosting/mutualise-taches-automatisees-cron/)|

### Fonctionnalités spécifiques <a name="fonctionnalités-spécifiques"></a>

|Fonction|Description|Formats disponibles|Modèle de migration|Documentation disponible|
|---|-----|---|-----|---|
|Pare-feu applicatif|Module serveur HTTP pour le filtrage du contenu Web entrant et sortant|N/A|**Migration entrante**: Activation du pare-feu à partir de votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>**Migration sortante**: Commandez et configurez un pare-feu avec le nouvel hébergeur|**Migration entrante**: [Activation du pare-feu applicatif](https://docs.ovh.com/fr/hosting/activation-pare-feu-applicatif/)<br><br>**Migration sortante**: N/A|
|Anti-DDoS|L'anti-DDoS est un ensemble d'équipements et de moyens mis en place pour absorber les attaques par déni de service. Il comprend une analyse du trafic, « l’aspiration » vers un réseau spécialisé et la mitigation, assurée par la technologie VAC développée par OVHcloud.|N/A|**Migration entrante**: Le système anti-DDoS est un composant de notre infrastructure, activé par défaut. Aucune action n'est requise.<br><br>**Migration sortante**: Commandez et configurez un anti-DDoS avec le nouveau fournisseur.|[Protection anti-DDoS OVHcloud](https://www.ovh.com/fr/anti-ddos/)<br><br>[Technologie anti-DDoS](https://www.ovh.com/fr/anti-ddos/technologie-anti-ddos.xml)<br><br>**Migration sortante**: N/A|
|Load Balancing|Les Load Balancers sont des périphériques réseau qui distribuent les demandes entre les services et les datacenters pour s'assurer qu'il n'y a pas de surcharge.|N/A|**Migration entrante**: Commande et activation via l'[espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr).<br><br>**Migration sortante**: Commandez et configurez un équilibrage de charge avec le nouveau fournisseur.|**Migration entrante**: [Load Balancer OVHcloud](https://www.ovh.com/fr/solutions/load-balancer/)<br><br>**Migration sortante**: N/A|

### Liste des architectures

Tous les composants d'un produit Web OVHcloud sont accessibles via votre [espace client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Cela permet de visualiser et de gérer les serveurs Web front-end, les serveurs de fichiers (FTP), les bases de données, les noms de domaine, les e-mails, ... ainsi que les fonctions associées à ces composants.

### Services Partenaires

Les partenaires OVHcloud sont répertoriés avec le mot clé "Cloud Migration" dans le [répertoire dédié](https://partner.ovhcloud.com/fr/directory/).

### Coût et frais

Aucune facturation supplémentaire n'est prévue à partir d'OVHcloud pour les fonctionnalités de migration répertoriées ici.

### Conservation des données après la résiliation du contrat

Les données sont conservées 45 jours après la fin du service, puis supprimées définitivement.
