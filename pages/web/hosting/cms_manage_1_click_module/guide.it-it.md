---
title: Come gestire il tuo modulo in 1 click?
excerpt: Come gestire il tuo modulo in 1 click dallo Spazio Cliente OVHcloud
slug: 1-click-module-management
section: CMS
order: 2
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 21/12/2021**

## Obiettivo

I moduli in 1 click permettono di installare facilmente e rapidamente un software online di supporto alla creazione di siti Internet (comunemente chiamato "CMS"). OVHcloud ti propone i più conosciuti: WordPress, PrestaShop, Drupal e Joomla!.

**Questa guida ti mostra come gestire il tuo modulo in 1 click dallo Spazio Cliente OVHcloud.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) su questa guida.
>

## Prerequisiti

- Disporre di un'[offerta di hosting Web Cloud](https://www.ovhcloud.com/it/web-hosting/) che consenta l'installazione di un modulo in 1 click
- Aver creato un modulo in 1 click sul tuo hosting (Se non l'hai ancora installato, segui questa [guida](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/)).
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura

### Accedi al tuo sito

Per accedere alla sezione pubblica del tuo sito in seguito all'installazione di un modulo in 1 click, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action}, `Hosting`{.action}, sul tuo hosting e poi sulla scheda `CMS in 1 click`{.action}.

Clicca sui tre puntini `...`{.action} a destra della riga relativa al tuo modulo e poi su `Accedi al modulo`{.action}.

> [!primary]
>
> Se il tuo sito non appare correttamente a seguito di questa operazione, consulta le guide OVHCLOUD relative agli hosting condivisi nella sezione [Diagnostica](https://docs.ovh.com/it/hosting/).
>

### Accedi all'interfaccia amministratore

Accedi alla sezione riservata agli amministratori del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action}, `Hosting`{.action}, sul tuo hosting e poi sulla scheda `CMS in 1 click`{.action}.

Clicca sui tre puntini `...`{.action} a destra della linea relativa al tuo modulo e poi su `Accedi all'interfaccia di amministrazione del modulo`{.action}.

### Trova l'identificativo amministratore

Clicca sulla scheda `Moduli in 1 click`{.action} nella sezione `Hosting`{.action} dello Spazio Cliente. Nella colonna `Login`, l'identificativo amministratore del tuo modulo è visibile:

Puoi anche ricercare l'email ricevuta durante la creazione del tuo modulo dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it): clicca sul tuo nome in alto a destra e poi su `Email di servizio`{.action}.

### Modifica la password del tuo modulo

È possibile modificare la password del modulo dallo Spazio Cliente OVHcloud o accedendo direttamente alla pagina di connessione allo Spazio Cliente.
In entrambi i casi, riceverai un'email di reimpostazione della password.

> [!primary]
>
> **Cosa fare se non hai ricevuto l'email di reimpostazione della password amministratore del tuo sito?**
>
> Nella casella di posta corrispondente, controlla le cartelle `Spam`{.action} e `Corbeille`{.action}.
>
> Tutte le email inviate dai nostri servizi sono disponibili nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it): clicca sul nome in alto a destra dello schermo e, nel menu contestuale a destra dello schermo, clicca su `Email di servizio`{.action}.
>
> **Durata di validità dei collegamenti:**
>
> - Dopo aver ricevuto l'email di modifica della password, il link di reimpostazione resterà valido per 48 ore. 
> - Dopo aver cliccato sul link, questo è valido solo per 30 minuti.
>

Per modificare la password di accesso all'interfaccia di gestione del tuo sito **attraverso lo Spazio Cliente OVHcloud**, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action}, `Hosting`{.action}, sul tuo hosting e poi sulla scheda `CMS in 1 click`{.action}.

Clicca sui tre puntini `...`{.action} a destra della riga relativa al tuo modulo e poi su `Modifica la password`{.action}. Clicca su `Conferma`{.action}. Riceverai entro pochi minuti un link per reimpostare la password.

### Elimina il tuo modulo

> [!warning]
>
> Il backup dei tuoi dati è una delle operazioni principali per la [sicurezza dei tuoi siti](https://docs.ovh.com/it/hosting/secure-website/). Ti consigliamo di importare regolarmente e **prima di eliminare** il backup dei tuoi dati su un supporto locale, come una chiavetta USB o un hard disk esterno, seguendo le istruzioni di questa [guida](https://docs.ovh.com/gb/en/hosting/export-a-website/).
>

#### Step 1: identifica il database associato al tuo modulo <a name="step1"></a>

Per eliminare il tuo modulo in 1 click, è necessario iniziare ad identificarne il database in modo **sicuro**. Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Web Cloud`{.action}, `Hosting`{.action}, sul tuo hosting e poi sulla scheda `Database`{.action}.

Se disponi di un solo database in questa parte del tuo Spazio Cliente e non disponi di soluzioni [CloudDB](https://www.ovh.it/cloud/cloud-databases/), puoi considerare che si tratta di quello del tuo sito.

In caso contrario, clicca sulla scheda `Multisito`{.action}. Annota il nome della `Cartella di root`: è la directory in cui sono presenti i file che costituiscono il tuo modulo in 1 click sul server FTP.

Accedi allo [spazio FTP del tuo hosting](https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/). Apri la `Cartella di root` trovata precedentemente nella scheda `Multisito`{.action} e cerca il file di configurazione del tuo modulo:

- Per *WordPress* : **"wp-config.php"** (il nome del database compare con la dicitura **"DB_NAME"**).
- Per *Joomla!* : **"configuration.php"** (il nome del database compare con la dicitura **"public $db"**).
- Per *Drupal*: **"settings.php"** (Per ritrovarlo, accedi alla cartella **"site"** e **"default"**. Il nome del database compare con la dicitura **"database"**.
- Per *PrestaShop* : **"parameters.php"** (Per ritrovarlo, accedi alla cartella **"app"** e **"config"**. Il nome del database del tuo modulo compare con la dicitura **"database_name"**).

#### Step 2: salvare il tuo modulo (facoltativo)

Per effettuare il backup del tuo sito, segui le istruzioni di questa [guida](https://docs.ovh.com/gb/en/hosting/export-a-website/) per recuperare sia i file sullo spazio FTP del tuo hosting che i database.

#### Step 3: elimina il tuo modulo

> [!alert]
>
> L'eliminazione del tuo modulo in 1 click e del suo database comporta anche la cancellazione di **tutti i backup**. I dati eliminati non potranno essere recuperati in seguito.
>

Per eliminare il tuo modulo in 1 click, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Web Cloud`{.action}, `hosting`{.action}, sul tuo hosting e poi su `CMS in 1 click`{.action}.

Clicca sui tre puntini `...`{.action} a destra della linea che indica il tuo modulo e poi sul comando `Elimina il modulo`{.action}.

> [!warning]
>
> L'eliminazione del modulo 1 click **non comporta automaticamente l'eliminazione del database**. Se avvii l'installazione di un nuovo CMS senza aver prima eliminato il database del precedente (e il tuo hosting non consente la creazione automatica di un nuovo database), il messaggio "[Si è verificato un errore durante il caricamento delle informazioni (You need at least one free database)](hhttps://docs.ovh.com/it/hosting/errori-frequenti-moduli-in-1-click/#si-e-verificato-un-errore-durante-il-caricamento-delle-informazioni-you-need-at-least-one-free-database)" comparirà sul tuo Spazio Cliente.
>
> Se disponi di un abbonamento [Personale](https://www.ovhcloud.com/it/web-hosting/personal-offer/) o hai già creato quattro database sul tuo hosting [Pro](https://www.ovhcloud.com/it/web-hosting/professional-offer/) o [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/), dovrai eliminare il database identificato nello [Step 1](#step1) **PRIMA** di poter creare un nuovo modulo in 1 click.
>

Per completare l'eliminazione del tuo modulo, clicca sulla scheda `Database`{.action}, sempre nella sezione `Web Cloud`{.action}, `Hosting`{.action} e sull'hosting interessato sul tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e clicca su `...`{.action} a destra della linea che designa il database e sul pulsante `Elimina il database`{.action} di dati.

Prima di riavviare l'installazione di un nuovo modulo, verifica che le operazioni di eliminazione richieste in precedenza siano state completate tramite la scheda `Operazioni in corso`{.action}.

### Buone prassi

Rendi sicuro il tuo sito seguendo le istruzioni di questa [guida](https://docs.ovh.com/it/hosting/secure-website/).

Aggiungi strumenti di test del tipo CAPTCHA ai moduli del tuo sito.

Non installate sul vostro sito plugin o template che non sono stati consigliati dalle comunità ufficiali del vostro CMS: 

- [WordPress](https://wordpress.org/){.external}
- [Joomla](https://community.joomla.org/){.external}
- [Drupal](https://www.drupal.org/community){.external}
- [PrestaShop](https://www.prestashop.com/it){.external}

## Spingiti oltre <a name="go-further"></a>

[Risolvere gli errori più frequenti associati ai moduli in 1 click](https://docs.ovh.com/it/hosting/errori-frequenti-moduli-in-1-click/).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.