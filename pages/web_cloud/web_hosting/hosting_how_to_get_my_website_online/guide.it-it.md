---
title: "Mettere online un sito Internet su un hosting Web"
excerpt: "Questa guide ti mostra come pubblicare un sito su un hosting Web OVHcloud"
updated: 2026-05-04
---

## Obiettivo

I siti Internet presenti in rete sono di tanti tipi diversi: blog, e-commerce, spazi dove condividere una passione o promuovere un’attività professionale... gli [hosting Web OVHcloud](/links/web/hosting) permettono di ospitare qualsiasi tipologia di sito Web, purché compatibile con la [configurazione delle nostre infrastrutture](https://webhosting-infos.hosting.ovh.net).

**Questa guida ti mostra le operazioni da eseguire per mettere online un sito su un hosting Web OVHcloud.** 

## Prerequisiti

- Disporre di un piano di [hosting Web](/links/web/hosting) attivo
- Aver ricevuto l'email di conferma dell'installazione del tuo hosting Web 
- Disporre di un [dominio](/links/web/domains) attivo, che corrisponderà all’indirizzo del sito
- Essere aggiornato nei [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei servizi associati (dominio e hosting web)

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### 1 - Definisci il tuo progetto

Per realizzare al meglio il tuo progetto, è importante avere una visione chiara dell’obiettivo da raggiungere. Cosa fare con il sito Web? Come pubblicarlo? Gli hosting OVHcloud offrono numerose opzioni: 

- **creare un sito chiavi in mano con i moduli in 1 click**: questa soluzione permette di utilizzare una struttura pronta all’uso e personalizzabile (tema, contenuti, ecc...). OVHcloud propone quattro moduli compatibili con le nostre infrastrutture in 1 click, disponibili nella pagina Web OVHcloud "[Creare un sito Internet con i moduli in 1 click](/links/web/hosting-website)". Per maggiori informazioni, consulta la guida "[Installare il proprio sito con i moduli in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

- **creare un sito chiavi in mano da installare manualmente**: questa soluzione permette di utilizzare una struttura pronta all’uso e personalizzabile (tema, contenuti, ecc...) da installare sul proprio hosting Web OVHcloud.

- **creare un sito Web in autonomia**: questa soluzione è più tecnica e richiede competenze di programmazione, ma offre la possibilità di realizzare un progetto totalmente personalizzato.

- **migrare in OVHcloud un sito Web esistente**: questa soluzione può risultare un’operazione delicata, soprattutto se eseguita su servizi in produzione per cui non è possibile un’interruzione di servizio. Per aiutarti in questa procedura, ti invitiamo a consultare in anticipo questa documentazione: [Migrare un sito e un servizio di posta in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

In base all’opzione scelta, hai quindi due possibilità: 

- **utilizzare i nostri moduli in 1 click**: per maggiori informazioni, consulta la guida "[Installare i moduli in 1 click OVHcloud](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

- **non utilizzare i nostri moduli in 1 click**: in questo caso, l’installazione del sito deve essere eseguita manualmente sull’hosting. Questa guida contiene informazioni utili per effettuare questa operazione ma, in caso di necessità, ti consigliamo di rivolgerti a un webmaster.
 
> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente. 
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla pubblicazione dei tuoi contenuti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato.  Per maggiori informazioni consulta la sezione “Per saperne di più”.

### 2 - Carica i file del sito nello spazio di storage

Per pubblicare manualmente un sito su un hosting è necessario effettuare diverse operazioni, alcune delle quali possono essere realizzate in diversi modi e, a seconda del sito da installare, essere facoltative. Per la maggior parte dei progetti, i principali step per la pubblicazione di un sito sono due. Il primo consiste nel caricare i file del sito sullo spazio di storage e si realizza in diversi passaggi:

#### 2.1. Recuperare i file del sito

Prima di iniziare, assicurati di avere a disposizione i file del sito da installare. In caso di migrazione di un sito già esistente, contatta il tuo precedente provider per recuperali.

#### 2.2. Connettersi allo spazio di storage 

Per accedere allo spazio di storage sono necessari:

- utente FTP o SSH attivo
- password associata all’utente FTP o SSH
- indirizzo del server
- porta di connessione al server

Questi dati sono indicati nell’email di conferma dell’installazione dell'hosting Web.

<!-- CP-STEPS-START:get-online-retrieve-ftp-credentials -->
Se hai necessità di recuperarli, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **3** passi.

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
<!-- CP-STEPS-END:get-online-retrieve-ftp-credentials -->

Una volta recuperati i dati potrai connetterti allo spazio di storage in due modi diversi, utilizzando: 

- **software compatibile con il protocollo FTP**: sarà necessario installare sul tuo computer un software compatibile con il protocollo FTP (ad esempio, FileZilla). Per informazioni sul suo utilizzo, contatta l’editor del software scelto.

- **accesso SSH**: questa opzione prevede l’utilizzo di comandi da un terminale per interagire con lo spazio di storage. Questo tipo di accesso richiede conoscenze avanzate e una soluzione di [hosting Web OVHcloud](/links/web/hosting) attiva.

#### 2.3. Caricare i file

> [success]
>
> Se, dal tuo [Spazio Cliente OVHcloud](/links/manager), non hai ancora dichiarato il tuo sito web sull'hosting web, consulta [questa guida](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Se, dal tuo [Spazio Cliente OVHcloud](/links/manager), non hai ancora associato il tuo nome di dominio a un sito web presente sull'hosting web, consulta [questa guida](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

Una volta connesso al tuo spazio di archiviazione, ti rimane solo da caricare i file del tuo sito. **Ti invitiamo a essere particolarmente attento al directory su cui intendi caricare i file**, soprattutto se hai dichiarato più siti web sull'hosting web.

<!-- CP-STEPS-START:get-online-find-root-folder -->
Per verificare la cartella in cui deve essere pubblicato il sito web, clicca sulle schede qui sotto per visualizzare successivamente i **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Seleziona la scheda `I miei siti`{.action}. Nella tabella che appare, per il sito web desiderato, guarda la `Cartella di root`{.action} che appare.
>>
>> ![Installazione sito](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Pubblica quindi i file del sito web in quest'ultimo.
<!-- CP-STEPS-END:get-online-find-root-folder -->

Potrebbe capitare che tu trovi sul tuo spazio di archiviazione un file intitolato "index.html". Quest'ultimo può essere stato creato da OVHcloud all'installazione del tuo hosting web per visualizzare una pagina predefinita sul tuo sito web. Se è così, non dimenticarti di eliminarlo quando carichi i tuoi file.

> [!primary]
>
> Un file "index.php" sostituirà sempre il file "index.html". Pertanto, quando entrambi sono presenti, sarà chiamato solo "index.php".

### 3 - Associa il sito Web a un database

> [!primary]
>
> Se il tuo sito Internet non ha un database associato, salta questo passaggio.

Oggi, la maggior parte dei sistemi di gestione del contenuto (CMS), come WordPress e Joomla!, utilizza un database per memorizzare elementi detti dinamici, come commenti o articoli. Una connessione tra i file del sito web e il database è quindi essenziale affinché il sito web possa funzionare correttamente. Per farlo, esiste un file di configurazione che contiene le informazioni del database che permette questa connessione.

A seconda del sito web utilizzato, questo collegamento deve essere creato manualmente o tramite un'interfaccia generata dal sito web stesso. Viene realizzato in diverse sottotappe, alcune delle quali possono essere opzionali.

#### 3.1. Recuperare il database esistente  

Se stai migrando un sito web, recupera il database esistente presso il tuo vecchio host. Se si tratta di un nuovo sito web, passa al passo successivo.

#### 3.2. Creare il database in OVHcloud 

Se disponi già di un database (incluso, ad esempio, in una soluzione di [hosting OVHcloud](/links/web/hosting) o [Web Cloud Databases](/links/web/databases)) recupera nome utente, password, nome del database e indirizzo del server e poi passa allo step successivo.

<!-- CP-STEPS-START:find-db-credentials -->
Per creare un nuovo database in OVHcloud, clicca sulle schede qui sotto per visualizzare successivamente i **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Seleziona la scheda `Database`{.action}.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Clicca su `Crea un database`{.action} o, se non compare, su `Azioni`{.action} > `Crea un database`{.action}. Inserisci le informazioni richieste.
>>
>> ![Installazione sito](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}
<!-- CP-STEPS-END:find-db-credentials -->

#### 3.3. Importare il database esistente 

Se stai migrando un sito, importa il database esistente in quello appena creato. Se invece si tratta di un nuovo sito Web, passa allo step successivo.

<!-- CP-STEPS-START:get-online-find-db-server -->
L’importazione può essere effettuata in diversi modi. OVHcloud ne propone una direttamente dallo Spazio Cliente. Clicca sulle schede qui sotto per visualizzare successivamente i **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Seleziona la scheda `Database`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca su `...`{.action} in corrispondenza del tuo database e poi su `Importa un file`{.action}.
<!-- CP-STEPS-END:get-online-find-db-server -->

#### 3.4. Collegare il sito web al database

Una volta che il database è disponibile e i file caricati nello spazio di storage, è necessario associarli. Assicurati di avere a disposizione tutti i dati necessari: nome utente, password, nome del database e indirizzo del server.

La creazione della connessione non è legata ai servizi OVHcloud ma dipende esclusivamente dalla configurazione del sito internet da pubblicare: se hai bisogno di aiuto per effettuare l’operazione ti consigliamo quindi di rivolgerti a uno specialista del settore. 

### 4 - Accedi al sito Web

Dopo aver caricato i file sullo spazio di storage e associato l’eventuale database, il tuo sito dovrebbe essere correttamente raggiungibile tramite browser. 

Se riscontri problemi di visualizzazione, ti consigliamo di:

- **verificare la configurazione del nome di dominio**: è possibile che la configurazione DNS del nome di dominio non permetta a quest'ultimo di visualizzare il sito web che hai appena scaricato sull'hosting web OVHcloud. Assicurati che l'attuale record DNS di tipo A configurato nella zona DNS del tuo nome di dominio corrisponda effettivamente all'indirizzo IP del tuo hosting web OVHcloud.

- **assicurarsi che nessun file manchi**: è possibile che durante il caricamento dei file verso il tuo hosting web OVHcloud tu abbia dimenticato alcuni file o che si sia verificato un errore. Rimani comunque attento durante le tue operazioni per non rompere il collegamento tra i file del sito e il database (se lo utilizza).

- **verificare che il codice del sito web non presenti errori**: questa verifica è probabilmente la più tecnica, ma è possibile che i file che hai scaricato contengano errori e non permettano al server di visualizzare correttamente, se non addirittura affatto, il tuo sito web.

In caso di difficoltà durante la pubblicazione del tuo sito Internet, ti consigliamo di rivolgerti a uno specialista del settore o contattare il fornitore del servizio (ad esempio, del CMS installato). 

## Per saperne di più

[Migrare un sito e un servizio di posta in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Installare i moduli in 1 click OVHcloud](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Accedere allo spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_connection)

[Modificare la password di un utente FTP ](/pages/web_cloud/web_hosting/ftp_change_password)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
