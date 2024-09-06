---
title: "SQL Database EOS and EOL announcements"
excerpt: "SQL Database EOS and EOL announcements"
updated: 2024-09-06
---

The products covered by those End Of Sale (EOS) and End Of Life (EOL) announcements are the SQL Database Web Hosting services, MySQL databases reachable on the Web Hosting network. See also the [OVHcloud Managed databases EOL policy](/pages/web_cloud/web_cloud_databases/eol-policy) for more information.

|DBMS version|EOL announcement|End-of-Sale|End-of-Support|
|---|---|---|---|
|MySQL 5.7|2023-11-16|2024-02-16|2024-05-17|
|MySQL 8.0|To be defined|To be defined|To be defined|

> [!primary]
>
> Currently and at your level, the SQL database services included with OVHcloud web hosting plans cannot be updated directly from the OVHcloud Control Panel or via the database at the end of sales/life.
>

If you want to anticipate this end of sale/life or perform the actions manually, you must perform the following actions:

- Case 1: you only have one database included with your Web Hosting plan:
- Verify that the database contents are compatible with a newer DBMS.
- [Export database content](/pages/web_cloud/web_hosting/sql_database_export).
- Delete the old database.
- [Create a new database](/pages/web_cloud/web_hosting/sql_create_database) in a newer DBMS version.
- [Import content from old database into new one](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
- Link the new database to your website.

- Case 2: You have several databases included with your Web Hosting plan:
- Verify that the database contents are compatible with a newer DBMS.
- As a precaution, [export database content](/pages/web_cloud/web_hosting/sql_database_export).
- [Create a new database](/pages/web_cloud/web_hosting/sql_create_database) in a newer DBMS version.
- [Duplicate the content of the old database in the new one](/pages/web_cloud/web_hosting/copy_database).
- Link the new database to your website.
- Delete the old database.

## Go further

[Log in to the OVHcloud Control Panel](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Creating a database on your web hosting plan](/pages/web_cloud/web_hosting/sql_create_database)

[Retrieving the backup of a Web Hosting plan’s database](/pages/web_cloud/web_hosting/sql_database_export)

[Duplicating the contents of one database to another](/pages/web_cloud/web_hosting/copy_database)

For specialised services (SEO, development, etc.), contact [OVHcloud partners](/links/partner).

If you would like assistance using and configuring your OVHcloud solutions, please refer to our [support offers](/links/support).

Join our [community of users](/links/community).