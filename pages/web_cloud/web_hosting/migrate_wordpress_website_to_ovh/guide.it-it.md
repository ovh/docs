---
title: "Migrare un sito Web WordPress in OVHcloud"
excerpt: "Questa guida ti mostra come migrare il tuo sito Web WordPress e i servizi associati in OVHcloud"
updated: 2024-06-27
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come migrare passo per passo il sito Web WordPress e tutti i servizi associati a OVHcloud.

> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione. garantirne il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. In caso di difficoltà o dubbi, ti consigliamo di contattare un [provider specializzato](/links/partner) o [l’editor del CMS WordPress](https://wordpress.com/it/support/){.external}. OVH non sarà infatti in grado di fornirti assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

**Questa guida ti mostra come migrare il tuo sito Web WordPress e i servizi associati in OVHcloud.**

## Prerequisiti

- Essere connesso all’interfaccia di amministrazione di WordPress

## Procedura

### Step 1: salva i file e il database del tuo sito Web WordPress

Il primo step consiste nel recuperare tutti i file relativi al sito Web WordPress. Questo include sia i file WordPress che il database. Consulta quindi la nostra guida "[Backup del sito WordPress](/pages/web_cloud/web_hosting/how_to_backup_your_wordpress)".

### Step 2: trasferisci il tuo sito Web WordPress in OVHcloud

Dopo aver effettuato il backup dei file e del database del sito Web WordPress, trasferiscili sul tuo hosting Web OVHcloud. Se non hai ancora attivato un hosting Web OVHcloud, segui lo step 1 della guida "[Migrare un sito Web e i servizi associati a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

#### Step 2.1: trasferire i file del sito Web WordPress

> [!primary]
>
> Per trasferire i file WordPress sull’hosting Web, ti consigliamo di utilizzare il software [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
>

Per trasferire i file relativi al sito Web WordPress, accedi prima allo [spazio di storage FTP del tuo hosting Web OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).

Una volta effettuato l’accesso allo spazio di storage FTP dell’hosting Web OVHcloud, accedi alla directory radice "www" (o a un’altra cartella radice creata in precedenza). Se i file di backup sono compressi (zip), decomprimeteli in una cartella vuota sul computer prima di caricarli nella directory radice dell’hosting Web OVHcloud.

#### Step 2.2: importa il database dal tuo sito Web WordPress

Se ancora non ne disponi, [crea un nuovo database](/pages/web_cloud/web_hosting/sql_create_database) e [importa il backup nel nuovo database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

> [!primary]
>
> OVHcloud propone server di database Web Cloud Databases. Per utilizzare questa offerta con il tuo sito Web, consulta la nostra documentazione completa sul prodotto nella nostra [pagina dedicata](/links/web/databases).
>

### Step 3: aggiorna le informazioni del database

A questo punto, è necessario collegare il sito Web WordPress al database. Queste modifiche devono essere effettuate nel file di configurazione **"wp-config.php"**. Tutte le azioni da effettuare sono disponibili nella guida "[Modificare la password del database di un hosting Web](/pages/web_cloud/web_hosting/sql_change_password)".

### Migrare altri servizi associati al sito Web WordPress

I file e i database WordPress sono stati migrati di recente. Per migrare altri servizi come email, domini e zone DNS, segui gli step della guida "[Migrare un sito Web e i servizi associati in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" e consulta gli step relativi ai servizi da migrare. In effetti, molti degli step saranno già stati effettuati in questa guida.

## Per saperne di più <a name="go-further"></a>

[Panoramica sulle email condivise](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

[Migrare il proprio sito Web e i servizi associati a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

[Importare un database MySQL](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Creare un database sul proprio hosting Web](/pages/web_cloud/web_hosting/sql_create_database).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).