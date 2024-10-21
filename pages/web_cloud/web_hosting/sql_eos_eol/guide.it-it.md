---
title: "Annunci di fine vendita/vita database SQL"
excerpt: "Annunci di fine vendita/vita database SQL"
updated: 2024-10-17
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

I prodotti coperti da questi annunci di fine vendita e di fine ciclo di vita sono i servizi database SQL Web Hosting, raggiungibili tramite la rete Web Hosting. Per maggiori informazioni, consulta la [politica di fine ciclo di vita dei database gestiti](/pages/web_cloud/web_cloud_databases/eol-policy).

|Versione DBMS|Fine del ciclo di vita|Fine vendita|Fine supporto|
|---|---|---|---|
|MySQL 8.0|Da definire|Da definire|Da definire|

> [!primary]
>
> I servizi di database SQL inclusi negli hosting Web OVHcloud non possono essere aggiornati direttamente dallo Spazio Cliente OVHcloud o tramite il database alla fine del ciclo di vita del prodotto.
>

Se si desidera anticipare la fine della vendita o eseguire le operazioni manualmente, è necessario eseguire le operazioni seguenti:

- Caso 1: con il piano di hosting Web è incluso un solo database:
    - Verificare che il contenuto del database sia compatibile con un DBMS più recente.
    - [Esportare il contenuto del database](/pages/web_cloud/web_hosting/sql_database_export).
    - Elimina il vecchio database.
    - [Crea un nuovo database](/pages/web_cloud/web_hosting/sql_create_database) in una versione di DBMS più recente.
    - [Importare il contenuto del vecchio database nel nuovo](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
    - Associa il nuovo database al tuo sito Web.

- Caso 2: la tua offerta di hosting Web include diversi database:
    - Verificare che il contenuto del database sia compatibile con un DBMS più recente.
    - Per precauzione, [esportare il contenuto del database](/pages/web_cloud/web_hosting/sql_database_export).
    - [Crea un nuovo database](/pages/web_cloud/web_hosting/sql_create_database) in una versione di DBMS più recente.
    - [Duplica il contenuto del vecchio database nel nuovo](/pages/web_cloud/web_hosting/copy_database).
    - Associa il nuovo database al tuo sito Web.
    - Elimina il vecchio database.

## Per saperne di più

[Accedi allo Spazio Cliente OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login).

[Creare un database su un hosting Web](/pages/web_cloud/web_hosting/sql_create_database).

[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export).

[Duplicare il contenuto di un database in un altro](/pages/web_cloud/web_hosting/copy_database).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
