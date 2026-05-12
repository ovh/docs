---
title: "Esporta il tuo sito Web"
excerpt: "Come esportare un sito Web OVHcloud"
updated: 2026-05-04
---

## Obiettivo

Questa guida ti mostra come esportare tutti gli elementi del tuo sito Web in formato standard, da un [hosting Web OVHcloud](/links/web/hosting).

**Questa guida ti mostra come esportare il tuo sito Web OVHcloud.**

## Prerequisiti

- Disporre di una [soluzione di hosting Web OVHcloud](/links/web/hosting)

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### 1 - Recupero dei file del tuo spazio di storage FTP

#### 1.1 Accedere allo spazio di storage.

Per accedere allo spazio di storage sono necessari:

- utente FTP o SSH attivo.
- la password associata a questo utente FTP o SSH.
- l'indirizzo del server.
- porta di connessione al server

Questi dati sono indicati nell’email di conferma dell’installazione del tuo hosting ma.

Se non ne hai ancora uno, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}.
>>
>> ![FTP -SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Visualizzi le informazioni associate allo spazio di storage. le informazioni di accesso allo spazio di storage.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> In caso di necessità, consulta la guida [Accedere allo spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Se hai smarrito la password, segui la procedura descritta nella guida [Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password).

Una volta recuperati tutti gli elementi, il recupero dei tuoi file sullo spazio di storage può essere effettuato in due modi diversi:

- **Utilizzare un software compatibile con il protocollo FTP o SFTP**: dovrai installare sul tuo computer un software compatibile, come [FileZilla](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide). Se hai bisogno di aiuto per utilizzarlo, contatta il produttore del software installato:

- **Accesso SSH**: questa opzione prevede l’utilizzo di comandi da un terminale per interagire con lo spazio di storage.  Per utilizzare questo tipo di accesso sono necessarie conoscenze avanzate e un'[offerta di hosting Web OVHcloud](/links/web/hosting) specifica. Per maggiori informazioni, consulta la guida ["Utilizzare l'accesso SSH di un hosting Web"](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

#### 1.2 Scarica i file dal tuo spazio di storage.

Una volta connesso al tuo spazio di archiviazione e in base ai siti web ospitati su di esso, potranno apparire diverse cartelle.

Se necessario, individua in precedenza nel tuo hosting web il nome della cartella radice in cui è conservato il tuo sito web. A tale scopo, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella tabella che appare, per il sito web desiderato, osserva il `Cartella di root`{.action} che viene visualizzato.
>>
>> ![export-website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

Ancora connesso al tuo spazio di archiviazione, ti rimane solo da scaricare i file del tuo sito web accedendo alla cartella radice precedentemente identificata.

### 2 - Recuperare il backup del tuo database (facoltativo)

> [!primary]
>
> Se il tuo sito Web non utilizza un database, questo step è facoltativo.
>

Per recuperare un backup del tuo database, consulta la nostra guida:
[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export).

Se utilizzi un database **Web Cloud Databases** per il tuo sito Web, consulta la sezione dedicata al backup della nostra guida:
[Salvare ed esportare un database sul tuo server di database](/pages/web_cloud/web_cloud_databases/save-export-on-database-server).

### 3 - Recuperare i log del tuo hosting OVHcloud

Consulta la nostra guida dedicata: [Hosting Web - Consultare le statistiche e i log di un sito web](/pages/web_cloud/web_hosting/logs_and_statistics).

## Per saperne di più

[Accedere allo spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_connection).

[Modificare la password di un utente FTP ](/pages/web_cloud/web_hosting/ftp_change_password)

[Utilizza FileZilla con il tuo hosting](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).

[Utilizzare l'accesso SSH di un hosting Web](/pages/web_cloud/web_hosting/ssh_on_webhosting). 

[Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export).

[Inziare a utilizzare Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
