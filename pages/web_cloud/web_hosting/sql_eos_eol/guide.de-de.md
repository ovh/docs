---
title: "SQL Database Web Hosting EOL und EOS Ankündigungen"
excerpt: "SQL Database Web Hosting EOL und EOS Ankündigungen"
updated: 2024-09-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

Die von der folgenden Terminierung zu End-of-Life (EOL) und End-of-Sale (EOS) erfassten Produkte sind Webhosting SQL Datenbankdienste, d.h. MySQL Datenbanken, die über das Webhosting-Netzwerk erreichbar sind.

Weitere Informationen finden Sie auf der Seite zur [EOL Policy für Managed Databases](/pages/web_cloud/web_cloud_databases/eol-policy).

|DBMS-Version|EOL Ankündigung|End-of-Sale|End-of-Support|
|---|---|---|---|
|MySQL 5.7|2023-11-16|2024-02-16|2024-05-17|
|MySQL 8.0|Noch festzulegen|Noch festzulegen|Noch festzulegen|

> [!primary]
>
> Derzeit können Kunden die in den OVHcloud Webhostings enthaltenen SQL-Datenbankdienste zum End-of-Sale/Life nicht direkt über das OVHcloud Kundencenter oder die Datenbank aktualisieren.
>

Um das End-of-Sale/Life vorzubereiten oder Aktualisierungen manuell vorzunehmen, müssen Sie die folgenden Aktionen ausführen:

- Fall Nr. 1: Sie verfügen über eine einzige Datenbank, die in Ihrem Webhosting Angebot enthalten ist:
    - Überprüfen Sie, ob der Inhalt der Datenbank mit einem neueren DBMS kompatibel ist.
    - [Datenbankinhalt exportieren](/pages/web_cloud/web_hosting/sql_database_export).
    - Löschen Sie die alte Datenbank.
    - [Neue Datenbank erstellen](/pages/web_cloud/web_hosting/sql_create_database), in einer neueren DBMS-Version.
    - [Inhalt der alten Datenbank in die neue importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
    - Verbinden Sie die neue Datenbank mit Ihrer Website.

- Fall Nr. 2: Sie verfügen über mehrere Datenbanken, die bei Ihrem Webhosting Angebot inklusive sind:
    - Überprüfen Sie, ob der Inhalt der Datenbank mit einem neueren DBMS kompatibel ist.
    - [Datenbankinhalt exportieren](/pages/web_cloud/web_hosting/sql_database_export).
    - [Neue Datenbank erstellen](/pages/web_cloud/web_hosting/sql_create_database) in einer neueren DBMS-Version.
    - [Duplizieren Sie den Inhalt der alten Datenbank in die neue Datenbank](/pages/web_cloud/web_hosting/copy_database).
    - Verbinden Sie die neue Datenbank mit Ihrer Website.
    - Löschen Sie die alte Datenbank.

## Weiterführende Informationen

[In das OVHcloud Kundencenter einloggen](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)

[Backup einer Webhosting-Datenbank exportieren](/pages/web_cloud/web_hosting/sql_database_export)

[Inhalt einer Datenbank in eine andere duplizieren](/pages/web_cloud/web_hosting/copy_database)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
