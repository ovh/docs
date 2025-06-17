---
title: "FAQ Hosting web"
excerpt: "Rivivi le principali domande sugli hosting Web OVHcloud"
updated: 2025-04-25
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

**Fare clic sulle domande riportate di seguito per visualizzare le spiegazioni.**

## Gestisci la tua offerta

/// details | Come configurare il tuo hosting Web?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.

È possibile gestire i certificati SSL, la versione PHP applicata all’hosting Web, l’opzione CDN, gli eventuali multisiti, i database, ecc.

> [!success]
>
> Per aiutarti a configurare il tuo hosting Web, consulta le sezioni "*Per iniziare*" e "*Configura il tuo hosting Web Personale, Pro o Performance*" di [questa pagina](/products/web-cloud-hosting).

///

/// details | Ho dimenticato la password di accesso all’account in cui si trova il tuo hosting Web, cosa fai?

Se hai dimenticato l’identificativo cliente OVHcloud o la password associata, segui questi step:

1. Accedi all’[interfaccia di connessione allo Spazio Cliente OVHcloud](/links/manager).
2. Clicca sul link `Non ricordi identificativo o password?`{.action} presente nella finestra di connessione.
3. Indica il tuo identificativo cliente OVHcloud (esempio: **aa00000-ovh**) o l’indirizzo email di contatto associato al tuo identificativo cliente OVHcloud.
4. Clicca sul pulsante `Invia`{.action}.

La procedura di ripristino verrà inviata al tuo indirizzo email di contatto.

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Impostare e gestire la password di un account OVHcloud](/pages/account_and_service_management/account_information/manage-ovh-password)".

///

/// details | Come gestire la password dello spazio di storage FTP di un hosting Web?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `FTP - SSH`{.action}.

Sarà possibile modificare la password FTP dell’hosting Web.

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password)".

///

/// details | Come modificare la password del database associata all’hosting Web?

> [!warning]
>
> Se modifichi la password di un database utilizzata da uno dei tuoi siti Web, aggiornala anche nel file di configurazione del sito Web in questione. Senza questo aggiornamento, infatti, il sito Web sarà disconnesso dal suo database e non funzionerà correttamente.

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `Database`{.action}.

In questa interfaccia è possibile modificare le password dei database associati all’hosting Web.

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Modificare la password del database di un hosting Web](/pages/web_cloud/web_hosting/sql_change_password)".

///

/// details | Come modificare la password di un indirizzo email associato a un hosting Web?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Email`{.action} (o sul menu `MX Plan`{.action} se utilizzi la versione beta dello Spazio Cliente OVHcloud) e seleziona il dominio interessato.
3. Clicca sulla scheda `Email`{.action}.
4. Nella tabella che appare, clicca sul pulsante `...`{.action} a destra dell’indirizzo email interessato e poi clicca su `Modifica la password`{.action}.

Sarà possibile modificare la password associata all’indirizzo di posta elettronica (attenersi alla politica indicata nella finestra di immissione).

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Modificare la password di un indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)".
>
> Se utilizzi un client di posta (Outlook, Mail di macOS, Thunderbird, ecc...), aggiorna la password del tuo indirizzo email quando il client di posta lo richiede, al momento dell'apertura o della sincronizzazione.
>
> Per maggiori informazioni sulla soluzione email *MX Plan*, consulta le nostre [FAQ - Email](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).

///

/// details | Come pubblicare un sito Web?

Per pubblicare online il sito Web, è necessario disporre di questi elementi:

- un [nome di dominio](/links/web/domains) che corrisponderà all'indirizzo Web dal quale il tuo sito sarà accessibile tramite un browser Internet (ad esempio: *dominio.tld*). Per visualizzare il sito Web, questo dominio deve essere associato anche al tuo hosting Web.
- [hosting Web](/links/web/hosting) su cui installare il sito Web.

Ecco i principali step da seguire:

1. Definisci il tuo progetto (sito Web "chiavi in mano" (CMS) installato manualmente o grazie ai moduli in 1 click di OVHcloud, sito Web creato da te o da un provider, etc.).
2. Carica i file del sito nello spazio di storage FTP del tuo hosting Web.
3. Collegare il sito Web a un database (se il sito utilizza un database).
4. Accedete al vostro sito web.

> [!success]
>
> Per maggiori informazioni sulla pubblicazione di un sito Web su un hosting Web, consulta la nostra guida dettagliata "[Mettere online un sito Internet su un hosting Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>
> Se scegli di installare un CMS (WordPress, Joomla!, PrestaShop, Drupal) con la nostra soluzione "Moduli in 1 click", consulta la nostra guida dettagliata "[Installare il tuo sito Web con un 'CMS in 1 click'](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>
> Se il sito Web esiste già presso un altro provider e vuoi migrarlo presso OVHcloud, consulta la nostra guida dettagliata "[Migrare un sito Web e i servizi associati a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
>
> Per configurare il tuo hosting Web, consulta le [guide relative alle nostre soluzioni di hosting Web](/products/web-cloud-hosting).

///

/// details | Come trasferire, senza interruzione di servizio, il tuo sito Web, il tuo database, il tuo dominio e le tue email in OVHcloud?

Ecco i principali step da seguire:

1. Ordina l’hosting e gli indirizzi email in OVHcloud.
2. Creare e preconfigurare una zona DNS per un dominio in OVHcloud.
3. Ripristinare un backup completo del sito Web.
4. Importare il backup del sito Web sulla soluzione di hosting OVHcloud.
5. Ricreare gli indirizzi email in modo identico in OVHcloud.
6. Dichiarare i server di posta OVHcloud nella zona DNS attiva del dominio.
7. Trasferire il contenuto dei vecchi indirizzi email nei nuovi indirizzi in OVHcloud.
8. Riconfigurare il software di posta.
9. Sostituire i server DNS attivi del dominio con quelli di OVHcloud.
10. Trasferire un dominio in OVHcloud.

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Migrare un sito Web e i servizi associati a OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".

///

/// details | Come ospitare più siti Web su uno stesso hosting Web?

Se il tuo [hosting Web](/links/web/hosting) è compatibile, segui questi step:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `Multisito`{.action}.

Lì è possibile gestire i domini/sottodomini dichiarati in multisito sul proprio hosting Web.

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

///

/// details | Come visualizzare un sito Web con un URL in "HTTPS"?

Per rendere il sito Web accessibile con un URL in "HTTPS" (esempio: `https://domain.tld`), sono necessari due prerequisiti:

- Per registrare un dominio è necessario disporre di un certificato SSL attivo (o installato sull’hosting Web).
- nel codice sorgente del tuo sito Web, è necessario forzare la riscrittura degli URL in "HTTPS".

OVHcloud propone diversi [certificati SSL](/links/web/hosting-options) sugli hosting Web.

Per attivare un certificato SSL sul tuo hosting Web, segui questi step:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Nella nuova pagina e nel riquadro **Configurazione**, clicca sul pulsante `...`{.action} a destra della dicitura **Certificato SSL** e poi su `Ordina un certificato SSL`{.action}.
4. Selezionare il certificato desiderato dall'elenco dei [certificati disponibili](/pages/web_cloud/web_hosting/ssl_on_webhosting), poi prosegui fino al completamento dell’ordine.

> [!success]
>
> Trovi tutti i dettagli nelle guide seguenti:
>
> - [Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting).
> - [Hosting Web - Attivare un certificato SSL gratuito Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt).
> - [Hosting Web - Attivare un certificato SSL Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv).
> - [Hosting Web - Attivare un certificato SSL Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev).
> - [Hosting Web - Installa un certificato SSL personalizzato](/pages/web_cloud/web_hosting/ssl_custom).

Una volta installato il certificato SSL di tua scelta e installato in OVHcloud, assicurati che il codice sorgente del sito Web riscriva in "HTTPS" gli URL di accesso. In caso di difficoltà, contatta il tuo Webmaster o uno dei nostri [partner](/links/partner).

///

/// details | Come cambiare offerta di hosting Web?

Per ordinare la soluzione di hosting Web più adatta alle proprie esigenze, consulta le nostre offerte su [questa pagina](/links/web/hosting).

> [!primary]
>
> In base al piano di hosting Web attivo, alcune soluzioni potrebbero non essere disponibili. Per maggiori informazioni, consulta la nostra guida "[Hosting Web - Come far evolvere la tua offerta](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

Una volta effettuata la scelta, segui questi step:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Nella nuova pagina e nel riquadro **Abbonamento**, clicca sul pulsante `...`{.action} a destra della dicitura `Piano` e poi su `Modificare soluzione`{.action}.
4. Seleziona il nuovo abbonamento e la durata. Conferma i contratti corrispondenti e clicca su `Invia`{.action}.

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Hosting Web - Come far evolvere la tua offerta](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

///

/// details | In caso di disattivazione, come conservare il servizio di posta associato all’hosting Web?

In caso di disattivazione o rimozione dell’hosting Web, anche il servizio di posta associato viene disattivato. Per conservare gli indirizzi email è necessario scollegare il servizio di posta elettronica **prima** della disattivazione dell’hosting Web.

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Nella nuova pagina e nel riquadro **Configurazione**, clicca sul pulsante `...`{.action} a destra della dicitura `Account email`, poi su `Scollega la tua opzione email`{.action}.
4. Segui le istruzioni per ordinare un servizio di posta indipendente che ti permetta di conservare i tuoi indirizzi email già creati.

///

/// details | In caso di disattivazione di un hosting Web "Performance", come conservare la soluzione "Web Cloud Databases" collegata?

Gli hosting Web **Performance** includono un'offerta Web Cloud Databases attivabile gratuitamente.<br>
Quando disattivi o elimini il tuo hosting Web **Performance**, viene disattivata anche la soluzione Web Cloud Databases eventualmente associata. Per conservare la soluzione Web Cloud Databases è necessario scollegarla **prima* della disattivazione dell’hosting.

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Nella nuova pagina e nel riquadro **Configurazione**, clicca sul pulsante `...`{.action} a destra della voce `Web Cloud Databases` e poi su `Scollega`{.action}.
4. Segui le istruzioni per ordinare un'offerta Web Cloud Databases indipendente per conservare la tua soluzione Web Cloud Databases già creata.

**Questa operazione è irreversibile e l'offerta Web Cloud Databases viene successivamente fatturata indipendentemente dall’hosting Web Performance.**

///

/// details | Come aumentare la RAM di una soluzione "Web Cloud Databases" associata a un hosting Web "Performance"?

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Web Cloud Databases`{.action} e seleziona la soluzione Web Cloud Databases interessata.
3. Nella nuova pagina e nel riquadro **Informazioni generali**, clicca sul pulsante `...`{.action} a destra della dicitura `RAM`, poi su `Modifica la quantità di RAM`{.action}.
4. Segui le istruzioni per ordinare la quantità di RAM desiderata, poi prosegui fino alla convalida dell'ordine.

> [!success]
>
> In caso di necessità, consulta la sezione "*Modifica la tua offerta Web Cloud Databases*" della nostra guida "[Configurare un'offerta Web Cloud Databases](/pages/web_cloud/web_cloud_databases/configure-database-server)".

///

## Diagnostica

> [!success]
>
> In caso di malfunzionamenti non elencati nelle FAQ, consulta la sezione "*Risoluzione dei problemi*" delle nostre [guide sulle soluzioni di hosting Web](/products/web-cloud-hosting).

/// details | Cosa fare se il mio sito Web non funziona correttamente?

Il malfunzionamento del sito Web potrebbe essere dovuto a diversi motivi.<br>
Per capirne la causa, verifica innanzitutto che nessuno dei tuoi abbonamenti abbia bisogno di essere rinnovato**.

Segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Nella nuova pagina, clicca sul tuo nome nell’angolo in alto a destra e seleziona `Le mie offerte e servizi`{.action}.

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Come rinnovare i servizi OVHcloud](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

In seguito consulta gli [eventi in corso sulla nostra infrastruttura](https://www.status-ovhcloud.com/).

Se tutti i servizi sono attivi e non subiscono incidenti o interventi di manutenzione, ti invitiamo a effettuare una diagnostica più approfondita.

> [!success]
>
> Consulta la sezione "*Risoluzione dei problemi*" delle nostre [guide sulle soluzioni di hosting Web](/products/web-cloud-hosting).

///

/// details | Cosa fare se la pagina "Sito in costruzione" di OVHcloud rimane visualizzata dopo che il sito Web è stato reso disponibile online?

![site-en-construction](/pages/assets/screens/other/browsers/errors/site-en-construction.png){.thumbnail}

Una volta installato l’hosting Web, OVHcloud crea questa pagina di attesa sotto forma di file **index.html** contenuto nella cartella `wwww` presente nello spazio di storage FTP del tuo hosting Web.

Sono possibili due scenari:

- Se hai installato un "[CMS in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules)": questo file viene automaticamente eliminato dai nostri sistemi di installazione.
- Se il sito Web è stato installato manualmente, effettuare le seguenti operazioni:
    - Accedi allo [spazio di storage FTP](/pages/web_cloud/web_hosting/ftp_connection) del tuo hosting Web.
    - Una volta effettuato l’accesso allo spazio di storage FTP, scorri la cartella `www`.
    - Rinominare il file **index.html** in **index.html.old**. La pagina verrà disattivata in pochi minuti.

> [!success]
>
> Per maggiori informazioni, consulta queste guide:
>
> - [Accedi allo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_connection).
> - [Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password).
> - [Tutorial - Utilizzare FileZilla con il tuo hosting OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
> - [Tutorial - Utilizzare Cyberduck con un hosting Web](/pages/web_cloud/web_hosting/ftp_cyberduck_user_guide_on_mac).

///

/// details | In seguito alla sua creazione, il mio sito Web viene visualizzato con un indirizzo del tipo "xxxxx.clusterXXX.hosting.ovh.net". Cosa devo fare?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Il sito Web è stato creato con un [CMS in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules) utilizzando, durante l’installazione, l’indirizzo Web predefinito del tuo hosting Web "xxxxx.clusterXXX.hosting.ovh.net".

In questo caso è necessario eliminare il modulo in 1 click e reinstallarlo.

> [!warning]
>
> L'eliminazione di un [CMS in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules), così come quella di un database, è definitiva. Questa operazione comporta anche la **cancellazione dei backup** dei dati interessati. Prima di eliminare il sito Web dall’hosting Web, **assicurati di poterlo ricreare nella stessa maniera**. In caso di dubbi, contatta il tuo Webmaster o uno dei nostri [partner](/links/partner).
>
> Se necessario, consulta anche queste guide dettagliate:
>
> - [Ripristinare i dati dello spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export).

**Solo** dopo aver effettuato tutti i backup necessari, elimina il tuo [CMS in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules) effettuando le seguenti operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `CMS in 1 click`{.action}.
4. Nella tabella che appare, clicca sul pulsante `...`{.action} situato a destra nella riga del *modulo in 1 click* interessato e poi su `Elimina un modulo`{.action}.

L'eliminazione del *modulo in 1 click* può richiedere **diversi minuti**.

Elimina il database associato eseguendo le operazioni seguenti:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `Database`{.action}.
4. Nella tabella che appare, clicca sul pulsante `...`{.action} a destra nella riga del database in questione e poi su `Elimina il database`{.action}.

L'eliminazione del database associato può richiedere **diversi minuti**.

A operazione completata, reinstalla il tuo *modulo in 1 click*, assicurandoti di aver selezionato il dominio che preferisci.

> [!success]
>
> Trovi tutti i dettagli nella nostra guida "[Installare il tuo sito Web con un 'CMS in 1 click'](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

///

/// details | In seguito a una modifica, il mio sito Web viene visualizzato con un indirizzo del tipo "xxxxx.clusterXXX.hosting.ovh.net". Cosa devo fare?

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

In seguito a una modifica del [CMS in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules), il tuo sito Web viene visualizzato con l’indirizzo Web predefinito del tuo hosting Web, ad esempio "xxxxx.clusterXXX.hosting.ovh.net".

Se il sito Web viene visualizzato con questo URL in seguito a una modifica, la soluzione più rapida consiste nel ripristinare lo stato precedente in cui funzionava correttamente.

> [!alert]
>
> Il ripristino di un hosting Web comporta il ripristino di **tutti i siti Web** presenti.
>
> Durante un ripristino, il contenuto del tuo spazio di storage FTP o del tuo database viene sostituito in modo irreversibile da un backup. I dati presenti **prima dell’avvio del ripristino** sullo spazio di storage FTP o sul database da ripristinare saranno sovrascritti e persi definitivamente. Se necessario, accertarsi di aver recuperato un backup di questo contenuto. In caso di dubbi, contatta il tuo Webmaster o uno dei nostri [partner](/links/partner).
>
> Se necessario, consulta anche queste guide dettagliate:
>
> - [Ripristinare i dati dello spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export).

Per ripristinare il codice sorgente del sito Web, segui questi step:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `FTP - SSH`{.action}.
4. Nella nuova pagina clicca sul pulsante `Ripristina un backup`{.action}.
5. Nella nuova finestra, scegli la data del backup da ripristinare e continua fino all’avvio del ripristino.

Il ripristino dello spazio di storage FTP può richiedere **diversi minuti**.

Per ripristinare un backup del database, segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `Database`{.action}.
4. Nella tabella che appare, clicca sul pulsante `...`{.action} a destra nella riga del database in questione e poi su `Ripristina un backup`{.action}.
5. Nella nuova pagina, scegli il backup da ripristinare (**preferibilmente quello corrispondente alla data scelta per il ripristino del codice sorgente del tuo sito Web (vedi sopra)**).
6. Una volta scelto il backup, clicca sul pulsante `...`{.action} a destra del backup da ripristinare e poi su `Ripristina il backup`{.action}.

Il ripristino del backup di un database può richiedere **diversi minuti**.

> [!success]
>
> Trovi tutti i dettagli nelle guide seguenti:
>
> - [Ripristinare i dati dello spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Importare un backup nel database di un hosting Web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

///

/// details | Il tuo sito Web è reindirizzato all'interfaccia di connessione alla Webmail OVHcloud. Cosa devo fare?

![webmail-login-interface](/pages/assets/screens/website/webmail/webmail-login-interface.png){.thumbnail}

Questa situazione indica una configurazione errata a livello dei [server DNS](/pages/web_cloud/domains/dns_server_edit) o della [zona DNS](/pages/web_cloud/domains/dns_zone_edit) associati al dominio.

Il caso più comune è il seguente: il dominio è stato ordinato separatamente dall’hosting Web e non è quindi possibile collegarli automaticamente tra loro tramite la zona DNS del dominio.

Per risolvere il problema, eseguire la procedura seguente:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
3. Clicca sulla scheda `Server DNS`{.action}.
4. Annota i nomi dei server DNS indicati e clicca sulla scheda `Zona DNS`{.action} (a destra della scheda `Server DNS`{.action}).
5. Nella tabella (che rappresenta la zona DNS del nome di dominio) che appare, confronta i `Destinazione` dei record di tipo `NS` presenti nella zona DNS con i nomi dei server DNS recuperati precedentemente. Si possono verificare tre situazioni. Clicca sulle schede qui sotto per visualizzare in sequenza ogni **3** caso.

> [!tabs]
> **Caso n°1**
>>
>> I `Destinazioni` (server DNS) dei record di tipo `NS` dichiarati nella zona DNS del nome di dominio **sono identici** a quelli recuperati nella scheda `Server DNS`{.action}.
>>
>> In questo caso, significa che il tuo dominio (o il suo sottodominio in *www*) punta verso l'indirizzo IP del nostro server di reindirizzamento (213.186.33.5).
>>
>> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>> 2. Clicca sul menu `Domini`{.action} (o sul menu `Zone DNS`{.action} se utilizzi la versione beta dello Spazio Cliente OVHcloud) e seleziona il dominio interessato.
>> 3. Clicca sulla scheda `Zona DNS`{.action}.
>> 4. Nella tabella che appare (che rappresenta la zona DNS del dominio), identifica il record di tipo `A` la cui `Destinazione` è l’indirizzo IP `213.186.33.5`.
>> 5. Clicca sul pulsante `...`{.action} a destra della riga e poi su `Modifica il record`{.action}.
>> 6. Nella nuova finestra, sostituisci l’indirizzo IP `213.186.33.5` nel campo `Destinazione *` con l’indirizzo IP dell’hosting Web in cui si trova il sito Web.
>>
>> > [!success]
>> >
>> > Se necessario, consulta le guide dettagliate seguenti:
>> >
>> > - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>> > - [Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
>>
> **Caso n°2**
>>
>> I `Destinazioni` (server DNS) dei record di tipo `NS` dichiarati nella zona DNS del nome di dominio **non sono identici** a quelli recuperati nella scheda `Server DNS`{.action}. Tuttavia, i `Destinazione` (server DNS) hanno una delle forme seguenti:
>>
>> - `nsXX.ovh.net` e `dnsXX.ovh.net` **o** `nsXXX.ovh.net` e `dnsXXX.ovh.net` (dove ciascuna `X` rappresenta una cifra compresa tra **0** e **9**);
>> - `nsXX.ovh.ca` e `dnsXX.ovh.ca` **o** `nsXXX.ovh.ca` e `dnsXXX.ovh.ca` (dove ogni `X` indica una cifra compresa tra **0** e **9**);
>> - `ns200.anycast.me` e `dns200.anycast.me` (se avete attivato l’opzione [DNS anycast](/links/web/domains-options)).
>>
>> > [!primary]
>> >
>> > Se uno dei tuoi server DNS dichiarati nella scheda `Server DNS`{.action} ha la forma seguente: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXX.ovh.net` o `vpsXXXX.ovh.ca` (dove ogni `X` indica una cifra compresa tra **0** e **9**), consulta direttamente il **Caso n°3**.
>> > Si tratta di nomi di server DNS forniti da OVHcloud che permettono esclusivamente ai nostri clienti di ospitare la propria configurazione DNS direttamente sul proprio server (server dedicati, VPS, ecc...).
>>
>> In questo caso, significa che il dominio non utilizza i server DNS corretti di OVHcloud per applicare la configurazione della zona DNS presente nella scheda `Zona DNS`{.action}.
>>
>> Per risolvere il problema, attenersi alla procedura descritta di seguito.
>>
>> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>> 2. Clicca sul menu `Domini`{.action} e seleziona il dominio interessato.
>> 3. Clicca sulla scheda `Server DNS`{.action}.
>> 4. Clicca sul pulsante `Modifica i server DNS`{.action}.
>> 5. Nella nuova pagina, seleziona l’opzione `Utilizzare i DNS predefiniti di OVHcloud`{.action} e clicca sul pulsante `Applicare la configurazione`{.action}.
>>
>> La propagazione dell'aggiornamento dei server DNS applicati a un dominio può richiedere fino a **48** ore.
>>
>> > [!success]
>> >
>> > Trovi tutti i dettagli nella nostra guida "[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)".
>>
> **Caso n°3**
>>
>> I `Target` (server DNS) dei record di tipo `NS` dichiarati nella zona DNS del nome di dominio **non sono identici** a quelli recuperati nella scheda `Server DNS`{.action}. Inoltre, i nomi dei server DNS recuperati nella scheda `Server DNS`{.action} non hanno nessuna delle forme descritte nel **Caso n°2**, ad eccezione delle forme seguenti: `sdnsX.ovh.net`, `sdnsX.ovh.ca`, `vpsXXXX.ovh.net` o `vpsXXXXXX.ovh.ca` (in cui ogni `X` indica una cifra compresa tra **0** e **9**).
>>
>> In questo caso, significa che la zona DNS attiva applicata al dominio non è gestita direttamente da OVHcloud. Contatta il tuo Webmaster, il tuo provider di domini, il tuo provider DNS o uno dei nostri [partner](/links/partner).

///

/// details | Cosa fare se il mio sito web visualizza un errore "La pagina non si reindirizza correttamente"?

![the-page-isnt-redirecting-properly](/pages/assets/screens/other/browsers/errors/the-page-isnt-redirecting-properly.png){.thumbnail}

In questo caso, la soluzione più rapida sarà ripristinarlo allo stato precedente in cui funzionava correttamente.

> [!alert]
>
> Il ripristino di un hosting Web comporta il ripristino di **tutti i siti Web** presenti.
>
> Durante un ripristino, il contenuto del tuo spazio di storage FTP o del tuo database viene sostituito in modo irreversibile da un backup. I dati presenti **prima dell’avvio del ripristino** sullo spazio di storage FTP o sul database da ripristinare saranno sovrascritti e persi definitivamente. Prima di iniziare, assicurati di aver effettuato un backup di questo contenuto. In caso di dubbi, contatta il tuo Webmaster o uno dei nostri [partner](/links/partner).
>
> Consulta anche queste guide dettagliate:
>
> - [Ripristinare i dati dello spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Recuperare il backup del database di un hosting Web](/pages/web_cloud/web_hosting/sql_database_export).

Per ripristinare il codice sorgente del sito Web, segui questi step:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `FTP - SSH`{.action}.
4. Nella nuova pagina clicca sul pulsante `Ripristina un backup`{.action}.
5. Nella nuova finestra, scegli la data del backup da ripristinare e continua fino all’avvio del ripristino.

Il ripristino dello spazio di storage FTP può richiedere **diversi minuti**.

Per ripristinare un backup del database, segui questi passaggi:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
2. Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
3. Clicca sulla scheda `Database`{.action}.
4. Nella tabella che appare, clicca sul pulsante `...`{.action} a destra nella riga del database in questione e poi su `Ripristina un backup`{.action}.
5. Nella nuova pagina, scegli il backup da ripristinare (**preferibilmente quello corrispondente alla data scelta per il ripristino del codice sorgente del tuo sito Web (vedi sopra)**).
6. Una volta scelto il backup, clicca sul pulsante `...`{.action} a destra del backup da ripristinare e poi su `Ripristina il backup`{.action}.

Il ripristino del backup di un database può richiedere **diversi minuti**.

> [!success]
>
> Trovi tutti i dettagli nelle guide seguenti:
>
> - [Ripristinare i dati dello spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_save_and_backup).
> - [Importare un backup nel database di un hosting Web](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

Se i ripristini non permettono di ristabilire l’accesso al sito Web, contatta il tuo Webmaster o uno dei nostri [partner](/links/partner).

///

/// details | Cosa fare se il mio sito web visualizza un errore "503 error Backend fetch failed (Varnish cache)"?

![503_varnish](/pages/assets/screens/other/browsers/errors/http-503-backend-varnish.png){.thumbnail}

Se hai attivato [opzione CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn) del tuo hosting Web, disattiva la modalità *Maintenance* sul tuo sito WordPress o PrestaShop.

Se non hai attivato questa opzione o non hai utilizzato la modalità *Maintenance*, contatta il tuo Webmaster o uno dei nostri [partner](/links/partner).

Questo errore può verificarsi anche se sul tuo sito viene eseguita una richiesta HTTP con *timeout*.

> [!success]
>
> Se necessario, consulta anche queste guide dettagliate:
>
> - [Accelerare il mio sito web utilizzando la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).
> - [Risolvi gli errori più comuni relativi ai CMS/moduli in 1 click](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

///

/// details | Cosa fare se il mio sito web visualizza un errore "Your request has been blocked"?

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

Questo messaggio indica che il tipo di richiesta HTTP che si sta tentando di eseguire sul sito Web è vietato per un periodo di tempo limitato, in genere per motivi di sicurezza.

In questa situazione, sono necessarie diverse azioni:

- Analizza i [log](/pages/web_cloud/web_hosting/logs_and_statistics) del tuo sito web, per determinare quali richieste hanno provocato questo blocco.
- Utilizzando un software anti-virus o anti-spyware, verificare che i tuoi dispositivi (computer, smartphone, ecc.) non siano infettati da spyware o malware.
- verifica il codice sorgente del tuo sito Web (spazio di archiviazione FTP e database).

In caso di dubbi, contatta il tuo Webmaster o uno dei nostri [partner](/links/partner).

> [!success]
>
> Consulta le nostre guide dettagliate:
>
> - [Hosting Web - Consultare le statistiche e i log di un sito Web](/pages/web_cloud/web_hosting/logs_and_statistics).
> - [Casi d'uso - Consigli in seguito alla pirateria del tuo sito Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

///

/// details | Cosa fare se il mio sito web visualizza un errore "Your IP has been banned"?

![your-ip-has-been-banned](/pages/assets/screens/other/browsers/errors/your-ip-has-been-banned.png){.thumbnail}

Questo messaggio indica che l'indirizzo IP utilizzato per connettersi al sito Web viene bloccato per un periodo di tempo limitato, in genere per motivi di sicurezza.

In questa situazione, sono necessarie diverse azioni:

- Analizza i [log](/pages/web_cloud/web_hosting/logs_and_statistics) del tuo sito web, per determinare quali richieste hanno provocato questo blocco.
- Utilizzando un software anti-virus o anti-spyware, verificare che i vostri dispositivi (computer, smartphone, ecc.) non siano infettati da spyware o malware.
- verifica il codice sorgente del tuo sito Web (spazio di archiviazione FTP e database).

In caso di dubbi, contatta il tuo Webmaster o uno dei nostri [partner](/links/partner).

> [!success]
>
> Consulta le nostre guide dettagliate:
>
> - [Hosting Web - Consultare le statistiche e i log di un sito Web](/pages/web_cloud/web_hosting/logs_and_statistics).
> - [Casi d'uso - Consigli in seguito alla pirateria del tuo sito Web](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

///

/// details | Ho ordinato un dominio con accenti e si affigge in modo strano nel mio Spazio Cliente. Cosa devo fare?

![notebook_idn](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/idn-notation.png){.thumbnail}

Non c'è nulla da fare in questa situazione. Anche se il tuo dominio compare con [rating internazionale (IDN)](https://it.wikipedia.org/wiki/Nome_di_dominio_internazionalizzato){.external} nello Spazio Cliente, funzionerà e verrà visualizzato in modo del tutto normale. L'indirizzo Web del tuo sito verrà visualizzato come richiesto. I tuoi indirizzi email saranno visualizzati come desideri presso i tuoi interlocutori.

> [!alert]
>
> Non è consigliabile utilizzare un indirizzo email con un dominio IDN (Internationalized Domain Name) da un client di posta (Outlook, Mail di macOS, ecc...). Poiché alcuni client di posta non interpretano i domini con caratteri accentati, l'invio delle email è bloccato. Il mittente dell’email riceverà automaticamente un messaggio per informarti che il tuo indirizzo email non esiste.
>
> **Si raccomanda di prenotare, in aggiunta al dominio con caratteri accentati, lo stesso dominio senza questi accenti, per evitare qualsiasi incompatibilità a livello di scambi di email.**
>

///

## Per saperne di più <a name="go-further"></a>

[FAQ - Email condivise MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).