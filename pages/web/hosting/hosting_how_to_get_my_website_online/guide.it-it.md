---
title: 'Mettere online un sito Internet su un hosting Web'
slug: hosting_condiviso_come_mettere_online_il_tuo_sito
excerpt: 'Come pubblicare un sito su un hosting Web OVHcloud'
section: 'Per iniziare'
order: 06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 21/07/2022**

## Obiettivo

I siti Internet presenti in rete sono di tanti tipi diversi: blog, e-commerce, spazi dove condividere una passione o promuovere un’attività professionale... gli [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} permettono di ospitare qualsiasi tipologia di sito Web, purché compatibile con la [configurazione delle nostre infrastrutture](https://webhosting-infos.hosting.ovh.net){.external}.

**Questa guida ti mostra le operazioni da eseguire per mettere online un sito su un hosting Web OVHcloud.** 

## Prerequisiti

- Disporre di un piano di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} attivo
- Aver ricevuto l'email di conferma dell'installazione del tuo hosting Web 
- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/){.external} attivo, che corrisponderà all’indirizzo del sito
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Essere aggiornato nei [pagamenti](https://docs.ovh.com/it/billing/gestire-fatture-ovhcloud/#pay-bills) e [rinnovi](https://docs.ovh.com/it/billing/imposta_il_rinnovo_automatico_dei_tuoi_servizi_ovh/#renewal-management) dei servizi associati (dominio e hosting web)

## Procedura

### Step 1: definisci il tuo progetto

Per realizzare al meglio il tuo progetto, è importante avere una visione chiara dell’obiettivo da raggiungere. Cosa fare con il sito Web? Come pubblicarlo? Gli hosting OVHcloud offrono numerose opzioni: 

- **creare un sito chiavi in mano con i moduli in 1 click**: questa soluzione permette di utilizzare una struttura pronta all’uso e personalizzabile (tema, contenuti, ecc...). Con i moduli in 1 click sono infatti disponibili 4 CMS già compatibili con le infrastrutture OVHcloud. Per maggiori informazioni, consulta [questa pagina](https://www.ovhcloud.com/it/web-hosting/uc-website/){.external}.

- **creare un sito chiavi in mano da installare manualmente**: questa soluzione permette di utilizzare una struttura pronta all’uso e personalizzabile (tema, contenuti, ecc...) da installare sul proprio hosting Web OVHcloud.

- **creare un sito Web in autonomia**: questa soluzione è più tecnica e richiede competenze di programmazione, ma offre la possibilità di realizzare un progetto totalmente personalizzato.

- **migrare in OVHcloud un sito Web esistente**: questa soluzione può risultare un’operazione delicata, soprattutto se eseguita su servizi in produzione per cui non è possibile un’interruzione di servizio. Per conoscere il processo completo, consulta la guida [Migrare un sito e un servizio di posta in OVHcloud](https://docs.ovh.com/it/hosting/migrare-un-sito-in-ovh/){.external}.

In base all’opzione scelta, hai quindi due possibilità: 

- **utilizzare i nostri moduli in 1 click**: per maggiori informazioni, consulta la guida [Installare i moduli in 1 click OVHcloud](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/){.external}

- **non utilizzare i nostri moduli in 1 click**: in questo caso, l’installazione del sito deve essere eseguita manualmente sull’hosting. Questa guida contiene informazioni utili per effettuare questa operazione ma, in caso di necessità, ti consigliamo di rivolgerti a un webmaster.
 
> [!warning]
>
> OVHcloud mette a disposizione i servizi ma non si occupa della loro configurazione e gestione; garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente. 
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla pubblicazione dei tuoi contenuti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato.  Per maggiori informazioni consulta la sezione “Per saperne di più”.
>

### Step 2: carica i file del sito nello spazio di storage

Per pubblicare manualmente un sito su un hosting è necessario effettuare diverse operazioni, alcune delle quali possono essere realizzate in diversi modi e, a seconda del sito da installare, essere facoltative. Per la maggior parte dei progetti, i principali step per la pubblicazione di un sito sono due. Il primo consiste nel caricare i file del sito sullo spazio di storage e si realizza in diversi passaggi:

#### 1. Recuperare i file del sito

Prima di iniziare, assicurati di avere a disposizione i file del sito da installare. In caso di migrazione di un sito già esistente, contatta il tuo precedente provider per recuperali.

#### 2. Connettersi allo spazio di storage 

Per accedere allo spazio di storage sono necessari:

- utente FTP o SSH attivo
- password associata all’utente FTP o SSH
- indirizzo del server
- porta di connessione al server

Questi dati sono indicati nell’email di conferma dell’installazione dell'hosting Web.

Se hai necessità di recuperarli, accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action} e clicca sulla scheda `FTP - SSH`{.action}. 

![Installazione sito](images/get-website-online-step1.png){.thumbnail}

In questa interfaccia sono disponibili le informazioni di accesso allo spazio di storage. In caso di necessità, consulta la guida [Accedere allo spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/){.external}.

Se hai smarrito la password, segui la procedura descritta nella guida [Modificare la password di un utente FTP](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}.

Una volta recuperati i dati potrai connetterti allo spazio di storage in tre modi diversi, utilizzando: 

- **FTP Explorer di OVHcloud**: ti consente di effettuare l’accesso direttamente dal browser. Per utilizzarlo, clicca sul pulsante `FTP Explorer`{.action} nella scheda `FTP - SSH`{.action}.

- **software compatibile con il protocollo FTP**: sarà necessario installare sul tuo computer un software compatibile con il protocollo FTP (ad esempio, FileZilla). Per informazioni sul suo utilizzo, contatta l’editor del software scelto.

- **accesso SSH**: questa opzione prevede l’utilizzo di comandi da un terminale per interagire con lo spazio di storage. Questo tipo di accesso richiede conoscenze avanzate e una soluzione di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} attiva.

#### 3. Caricare i file

Una volta connesso allo spazio di storage, non resta che mettere online i file del tuo sito. **Ti ricordiamo che un sito Internet funziona e viene visualizzato correttamente solo se è inserito nella giusta directory**, che in genere è la cartella “www”. Se utilizzi l’hosting per ospitare più siti internet, hai sicuramente attivato l’opzione multisito. 

Per conoscere la cartella in cui pubblicare il sito, accedi alla scheda `Multisito`{.action} del tuo Spazio Cliente OVHcloud e verifica nella tabella la `Cartella di root`{.action} relativa al dominio interessato. 

È possibile che nel tuo spazio di storage sia presente il file <b>index.html</b>, che può essere stato creato da OVHcloud durante l'installazione del tuo hosting per visualizzare una pagina predefinita sul tuo sito Internet. In questo caso, ricordati di eliminarlo prima della pubblicazione dei tuoi file in rete.

> [!primary]
>
> Un file "index.php" sostituirà sempre il file "index.html". Pertanto, quando entrambi sono presenti, sarà chiamato solo "index.php".

![Installazione sito](images/get-website-online-step2.png){.thumbnail}

### Step 3: associa il sito Web a un database

> [!primary]
>
> Se il tuo sito Internet non ha un database associato, salta questo passaggio.
>

Oggi quasi tutti i CMS utilizzano un database per archiviare gli elementi detti “dinamici”, ad esempio commenti o articoli. Per il corretto funzionamento del sito è necessaria una connessione tra il server Web e il database. Questa connessione viene stabilita grazie a un file di configurazione contenente le informazioni del database. 

In base alla tipologia di sito installato, la configurazione deve essere realizzata manualmente o tramite un’interfaccia generata dal sito stesso. Questa operazione prevede vari passaggi, alcuni dei quali opzionali. 

#### 1. Recuperare il database esistente  

Se stai migrando un sito, contatta il tuo precedente provider per recuperare il database esistente. Se invece si tratta di un nuovo sito Web, passa allo step successivo.

#### 2. Creare il database in OVHcloud 

Se disponi già di un database (incluso, ad esempio, in una soluzione di [hosting OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} o [Cloud DB](https://www.ovh.it/cloud/cloud-databases/){.external}) recupera nome utente, password, nome del database e indirizzo del server e poi passa allo step successivo.

Per creare un nuovo database accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, seleziona il tuo servizio nella sezione `Hosting`{.action}, clicca sulla scheda `Database`{.action} e poi sul pulsante `Crea un database`{.action}. Se non compare, clicca su `Azioni`{.action} > `Crea un database`{.action}.
Inserisci le informazioni richieste.

![Installazione sito](images/get-website-online-step3.png){.thumbnail}

#### 3. Importare il database esistente 

Se stai migrando un sito, importa il database esistente in quello appena creato. Se invece si tratta di un nuovo sito Web, passa allo step successivo.

L’importazione può essere effettuata in diversi modi. OVHcloud ne propone una direttamente dallo Spazio Cliente. Accedi allo Spazio Cliente OVHcloud, clicca sui tre puntini in corrispondenza del tuo servizio e seleziona `...`{.action} in corrispondenza del tuo database e poi su `Importa un file`{.action}.

#### 4. Associare il sito al database

Una volta che il database è disponibile e i file caricati nello spazio di storage, è necessario associarli. Assicurati di avere a disposizione tutti i dati necessari: nome utente, password, nome del database e indirizzo del server.

La creazione della connessione non è legata ai servizi OVHcloud ma dipende esclusivamente dalla configurazione del sito internet da pubblicare: se hai bisogno di aiuto per effettuare l’operazione ti consigliamo quindi di rivolgerti a uno specialista del settore. 

### Step 4: accedi al sito Web

Dopo aver caricato i file sullo spazio di storage e associato l’eventuale database, il tuo sito dovrebbe essere correttamente raggiungibile tramite browser. 

Se riscontri problemi di visualizzazione, ti consigliamo di:

- **verificare la configurazione del dominio**: è possibile che la configurazione DNS del dominio non consenta a quest’ultimo di mostrare il sito caricato sul tuo hosting Web OVHcloud. Accertati che il record A impostato nella zona DNS del dominio corrisponda all’indirizzo IP dell’hosting. 

- **verifica che non manchino file**: è possibile che durante l’upload dei file nel tuo hosting, ne abbia dimenticato alcuni o si sia verificato un errore. È comunque importante prestare la massima attenzione durante queste operazioni in modo da evitare problemi di interazione tra il sito e l’eventuale database utilizzato; 

- **verifica che il codice del sito non contenga errori**: questa operazione è più tecnica, ma è possibile che i file caricati contengano errori e non consentano al server di visualizzare correttamente il sito. 

In caso di difficoltà durante la pubblicazione del tuo sito Internet, ti consigliamo di rivolgerti a uno specialista del settore o contattare il fornitore del servizio (ad esempio, del CMS installato). 

## Per saperne di più

[Migrare un sito e un servizio di posta in OVHcloud](https://docs.ovh.com/it/hosting/migrare-un-sito-in-ovh/){.external}

[Installare i moduli in 1 click OVHcloud](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/){.external}

[Accedere allo spazio di storage di un hosting Web](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/){.external}

[Modificare la password di un utente FTP ](https://docs.ovh.com/it/hosting/modificare-la-password-utente-ftp/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>