---
title: "Annonces de fin de vente/vie base de données SQL"
excerpt: "Annonces de fin de vente/vie base de données SQL"
updated: 2024-09-06
---

Les produits couverts par ces annonces de fin de vente et de fin de vie sont les services base de données SQL Web Hosting, joignables via le réseau Web Hosting. Référez-vous à la [politique de fin de vie des bases de données managées](/pages/web_cloud/web_cloud_databases/eol-policy) pour plus d'informations.

|Version du SGBD|Annonce de fin de vie|Fin de vente|Fin de support|
|---|---|---|---|
|MySQL 5.7|2023-11-16|2024-02-16|2024-05-17|
|MySQL 8.0|À définir|À définir|À définir|

> [!primary]
>
> Les services de base de données SQL inclus avec les hébergements Web OVHcloud ne peuvent pas être mis à jour directement à partir de l'espace client OVHcloud ou via la base de données en fin de vente/vie.
>

Si vous souhaitez anticiper cette fin de vente/vie ou effectuer les actions manuellement, vous devez obligatoirement réaliser les actions suivantes :

- Cas n°1 : vous disposez d'une seule base de données incluse avec votre offre d'hébergement Web :
    - Vérifiez que le contenu de la base de données est compatible avec un SGBD plus récent.
    - [Exportez le contenu de la base de données](/pages/web_cloud/web_hosting/sql_database_export).
    - Supprimez l'ancienne base de données.
    - [Créez une nouvelle base de données](/pages/web_cloud/web_hosting/sql_create_database) dans une version de SGBD plus récente.
    - [Importez le contenu de l'ancienne base de données dans la nouvelle](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
    - Associez la nouvelle base de données à votre site web.

- Cas n°2 : vous disposez de plusieurs base de données incluses avec votre offre d'hébergement Web :
    - Vérifiez que le contenu de la base de données est compatible avec un SGBD plus récent.
    - Par précaution, [exportez le contenu de la base de données](/pages/web_cloud/web_hosting/sql_database_export).
    - [Créez une nouvelle base de données](/pages/web_cloud/web_hosting/sql_create_database) dans une version de SGBD plus récente.
    - [Dupliquez le contenu de l'ancienne base de données dans la nouvelle](/pages/web_cloud/web_hosting/copy_database).
    - Associez la nouvelle base de données à votre site web.
    - Supprimez l'ancienne base de données.

## Aller plus loin

[Se connecter à l'espace client OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login).

[Créer une base de données sur son hébergement web](/pages/web_cloud/web_hosting/sql_create_database).

[Récupérer la sauvegarde de la base de données d'un hébergement web](/pages/web_cloud/web_hosting/sql_database_export).

[Dupliquer le contenu d'une base de données dans une autre](/pages/web_cloud/web_hosting/copy_database).

Pour des prestations spécialisées (référencement, développement, etc), contactez les [partenaires OVHcloud](/links/partner).

Si vous souhaitez bénéficier d'une assistance à l'usage et à la configuration de vos solutions OVHcloud, nous vous proposons de consulter nos différentes [offres de support](/links/support).

Échangez avec notre [communauté d'utilisateurs](/links/community).