---
title: "Mettere online un sito Internet su un hosting Web"
excerpt: "Questa guide ti mostra come pubblicare un sito su un hosting Web OVHcloud"
updated: 2025-10-16
---

## Obiettivo

I siti Internet presenti in rete sono di tanti tipi diversi: blog, e-commerce, spazi dove condividere una passione o promuovere un’attività professionale... gli [hosting Web OVHcloud](/links/web/hosting) permettono di ospitare qualsiasi tipologia di sito Web, purché compatibile con la [configurazione delle nostre infrastrutture](https://webhosting-infos.hosting.ovh.net).

**Questa guida ti mostra le operazioni da eseguire per mettere online un sito su un hosting Web OVHcloud.** 

## Prerequisiti

- Disporre di un piano di [hosting Web](/links/web/hosting) attivo
- Aver ricevuto l'email di conferma dell'installazione del tuo hosting Web 
- Disporre di un [dominio](/links/web/domains) attivo, che corrisponderà all’indirizzo del sito
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Essere aggiornato nei [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei servizi associati (dominio e hosting web)

## Procedura

### 1 - Definisci il tuo progetto

Per realizzare al meglio il tuo progetto, è importante avere una visione chiara dell’obiettivo da raggiungere. Cosa fare con il sito Web? Come pubblicarlo? Gli hosting OVHcloud offrono numerose opzioni: 

- **creare un sito chiavi in mano con i moduli in 1 click**: questa soluzione permette di utilizzare una struttura pronta all’uso e personalizzabile (tema, contenuti, ecc...). OVHcloud propone quattro moduli compatibili con le nostre infrastrutture in 1 click, disponibili nella pagina Web OVHcloud ["Creare un sito Internet con i moduli in 1 click"](/links/web/hosting-website). Per maggiori informazioni, consulta la guida ["Installare il proprio sito con i moduli in 1 click"](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

- **creare un sito chiavi in mano da installare manualmente**: questa soluzione permette di utilizzare una struttura pronta all’uso e personalizzabile (tema, contenuti, ecc...) da installare sul proprio hosting Web OVHcloud.

- **creare un sito Web in autonomia**: questa soluzione è più tecnica e richiede competenze di programmazione, ma offre la possibilità di realizzare un progetto totalmente personalizzato.

- **migrare in OVHcloud un sito Web esistente**: questa soluzione può risultare un’operazione delicata, soprattutto se eseguita su servizi in produzione per cui non è possibile un’interruzione di servizio. Per conoscere il processo completo, consulta la guida [Migrare un sito e un servizio di posta in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

In base all’opzione scelta, hai quindi due possibilità: 

- **utilizzare i nostri moduli in 1 click**: per maggiori informazioni, consulta la guida [Installare i moduli in 1 click OVHcloud](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

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

Se hai necessità di recuperarli, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina clicca sulla scheda `FTP - SSH`{.action}.
>>
>> ![FTP -SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Visualizzi le informazioni associate allo spazio di storage. le informazioni di accesso allo spazio di storage.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> In caso di necessità, consulta la guida [Accedere allo spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Se hai smarrito la password, segui la procedura descritta nella guida [Modificare la password di un utente FTP](/pages/web_cloud/web_hosting/ftp_change_password).

Una volta recuperati i dati potrai connetterti allo spazio di storage in due modi diversi, utilizzando: 

- **software compatibile con il protocollo FTP**: sarà necessario installare sul tuo computer un software compatibile con il protocollo FTP (ad esempio, FileZilla). Per informazioni sul suo utilizzo, contatta l’editor del software scelto.

- **accesso SSH**: questa opzione prevede l’utilizzo di comandi da un terminale per interagire con lo spazio di storage. Questo tipo di accesso richiede conoscenze avanzate e una soluzione di [hosting Web OVHcloud](/links/web/hosting) attiva.

#### 2.3. Caricare i file

Una volta connesso allo spazio di storage, non resta che mettere online i file del tuo sito. **Ti ricordiamo che un sito Internet funziona e viene visualizzato correttamente solo se è inserito nella giusta directory**, che in genere è la cartella “www”. Se utilizzi l’hosting per ospitare più siti internet, hai sicuramente attivato l’opzione multisito. 

Per conoscere la cartella in cui pubblicare il sito, accedi alla scheda `Multisito`{.action} del tuo Spazio Cliente OVHcloud e verifica nella tabella la `Cartella di root`{.action} relativa al dominio interessato. 

È possibile che nel tuo spazio di storage sia presente il file <b>index.html</b>, che può essere stato creato da OVHcloud durante l'installazione del tuo hosting per visualizzare una pagina predefinita sul tuo sito Internet. In questo caso, ricordati di eliminarlo prima della pubblicazione dei tuoi file in rete.

> [!primary]
>
> Un file "index.php" sostituirà sempre il file "index.html". Pertanto, quando entrambi sono presenti, sarà chiamato solo "index.php".

![Installazione sito](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

### 3 - Associa il sito Web a un database

> [!primary]
>
> Se il tuo sito Internet non ha un database associato, salta questo passaggio.
>

Oggi quasi tutti i CMS utilizzano un database per archiviare gli elementi detti “dinamici”, ad esempio commenti o articoli. Per il corretto funzionamento del sito è necessaria una connessione tra il server Web e il database. Questa connessione viene stabilita grazie a un file di configurazione contenente le informazioni del database. 

In base alla tipologia di sito installato, la configurazione deve essere realizzata manualmente o tramite un’interfaccia generata dal sito stesso. Questa operazione prevede vari passaggi, alcuni dei quali opzionali. 

#### 3.1. Recuperare il database esistente  

Se stai migrando un sito, contatta il tuo precedente provider per recuperare il database esistente. Se invece si tratta di un nuovo sito Web, passa allo step successivo.

#### 3.2. Creare il database in OVHcloud 

Se disponi già di un database (incluso, ad esempio, in una soluzione di [hosting OVHcloud](/links/web/hosting) o [Web Cloud Databases](/links/web/databases)) recupera nome utente, password, nome del database e indirizzo del server e poi passa allo step successivo.

Per creare un nuovo database accedi allo [Spazio Cliente OVHcloud](/links/manager), seleziona il tuo servizio nella sezione `Hosting`{.action}, clicca sulla scheda `Database`{.action} e poi sul pulsante `Crea un database`{.action}. 

![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}

Se non compare, clicca su `Azioni`{.action} > `Crea un database`{.action}.
Inserisci le informazioni richieste.

![Installazione sito](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

#### 3.3. Importare il database esistente 

Se stai migrando un sito, importa il database esistente in quello appena creato. Se invece si tratta di un nuovo sito Web, passa allo step successivo.

L’importazione può essere effettuata in diversi modi. OVHcloud ne propone una direttamente dallo Spazio Cliente. Accedi allo Spazio Cliente OVHcloud, clicca sui tre puntini in corrispondenza del tuo servizio e seleziona `...`{.action} in corrispondenza del tuo database e poi su `Importa un file`{.action}.

#### 3.4. Associare il sito al database

Una volta che il database è disponibile e i file caricati nello spazio di storage, è necessario associarli. Assicurati di avere a disposizione tutti i dati necessari: nome utente, password, nome del database e indirizzo del server.

La creazione della connessione non è legata ai servizi OVHcloud ma dipende esclusivamente dalla configurazione del sito internet da pubblicare: se hai bisogno di aiuto per effettuare l’operazione ti consigliamo quindi di rivolgerti a uno specialista del settore. 

### 4 - Accedi al sito Web

Dopo aver caricato i file sullo spazio di storage e associato l’eventuale database, il tuo sito dovrebbe essere correttamente raggiungibile tramite browser. 

Se riscontri problemi di visualizzazione, ti consigliamo di:

- **verificare la configurazione del dominio**: è possibile che la configurazione DNS del dominio non consenta a quest’ultimo di mostrare il sito caricato sul tuo hosting Web OVHcloud. Accertati che il record A impostato nella zona DNS del dominio corrisponda all’indirizzo IP dell’hosting. 

- **verifica che non manchino file**: è possibile che durante l’upload dei file nel tuo hosting, ne abbia dimenticato alcuni o si sia verificato un errore. È comunque importante prestare la massima attenzione durante queste operazioni in modo da evitare problemi di interazione tra il sito e l’eventuale database utilizzato; 

- **verifica che il codice del sito non contenga errori**: questa operazione è più tecnica, ma è possibile che i file caricati contengano errori e non consentano al server di visualizzare correttamente il sito. 

In caso di difficoltà durante la pubblicazione del tuo sito Internet, ti consigliamo di rivolgerti a uno specialista del settore o contattare il fornitore del servizio (ad esempio, del CMS installato). 

## Per saperne di più

[Migrare un sito e un servizio di posta in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Installare i moduli in 1 click OVHcloud](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Accedere allo spazio di storage di un hosting Web](/pages/web_cloud/web_hosting/ftp_connection)

[Modificare la password di un utente FTP ](/pages/web_cloud/web_hosting/ftp_change_password)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).