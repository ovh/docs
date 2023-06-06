---
title: "Tutorial - installa manualmente WordPress"
excerpt: "Questa guida ti mostra come installare manualmente un CMS WordPress"
slug: cms_installa_manualmente_wordpress
section: CMS
order: 04
updated: 2023-06-04
---

**Ultimo aggiornamento: 06/04/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Questa guida ti mostra come installare manualmente il CMS (Content Management System) WordPress in pochi step.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/) o [l'amministratore del CMS WordPress](https://wordpress.com/it/support/){.external}. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più](#go-further) di questa guida.
>

> [!success]
>
> Per installare WordPress **automaticamente** dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), consulta la nostra guida sull'[installazione di un modulo "in un click"](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/).
>
> Per installare **manualmente un altro CMS** (Joomla!, Drupal, PrestaShop), consulta la nostra guida sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/).
>

**Questa guida ti mostra come installare manualmente un CMS WordPress.**

## Prerequisiti

- Disporre di un'offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/) che contiene almeno un database.
- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

### Step 1 - preparare l'installazione <a name="step1"></a>

Per installare il CMS **WordPress** sulla tua offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/), è necessario effettuare alcuni preparativi.

Segui **gli step** descritti nel nostro tutorial sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/) prima di proseguire allo Step 2.

### Step 2 - finalizzare l'installazione manuale <a name="step2"></a>

> [!success]
>
> Prima di continuare l'installazione, svuota la cache del tuo browser per evitare errori.
>

#### 2.1 - Accedi al tuo sito WordPress tramite il tuo browser

Inserisci il tuo dominio nella barra di ricerca del tuo browser Internet.

Se i file sorgente di WordPress sono stati inseriti correttamente nella tua cartella root, la pagina WordPress che permette di selezionare la lingua apparirà:

![hosting](images/WPselectlangue.png){.thumbnail}

Seleziona la lingua del sito e clicca su `Continue`{.action}.

#### 2.2 - Associa il tuo WordPress al tuo database

WordPress ti chiederà di recuperare le credenziali di accesso al tuo database:

![hosting](images/WPstart.png){.thumbnail}

Recupera gli identificativi del tuo database (se necessario, consulta **lo Step 1.4** del tutorial sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/)) e clicca su `Let's go !`{.action} per continuare.

Visualizzi questa pagina:

![hosting](images/WPdb.png){.thumbnail}

Inserisci le informazioni richieste relative al database:

- *Database Name*: questo nome è stato definito durante la creazione del database nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

- *Username*: è identico al nome del database se utilizzi un database incluso con il tuo hosting Web.
Per i database creati su un Web Cloud Databases, consulta le informazioni indicate nello **Step 1.4** del tutorial sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/)

- *Password*: ti è stato inviato via email durante la creazione del database. È possibile che l'abbiate modificato nel frattempo.

- *Database Host*: inserisci il nome del server del database presente nell'email di installazione o nello Spazio Cliente OVHcloud. 

> [!primary]
> 
> - Il nome del server di un database incluso nella tua offerta di hosting Web ha questa forma: `NameOfYourDatabase.mysql.db` 
>
> - Il nome del server di un database Web Cloud Databases inizia con il tuo identificativo cliente OVHcloud, nella forma seguente: `OVHID(without-ovh)-XXX.eu.cloudddb.ovh.net` dove i **"X"** sono da sostituire con il riferimento del tuo servizio Web Cloud Databases.
>

- *Table Prefix*: se l'installazione avviene con un nuovo database, inserisci il "prefisso" che preferisci. Se utilizzi un database già utilizzato da un altro sito, fai riferimento a **lo step 1.4** del tutorial sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/) per non inserire un "prefisso" di tavolo già utilizzato nel tuo database.

Clicca su `Submit`{.action} per confermare le informazioni di connessione al database.

Se tutto è andato bene, visualizzi la pagina seguente:

![hosting](images/WPafterDB.png){.thumbnail}

Clicca su `Run the installation`{.action}.

#### 2.3 - Definisci l'accesso Amministratore al back office del tuo WordPress e la tua email di contatto

Una volta completata l'installazione, WordPress ti chiederà informazioni sul tuo futuro sito, inclusa la creazione dell'identificativo Amministratore WordPress.

che permette di accedere allo spazio di amministrazione del CMS WordPress, comunemente chiamato "Back-office".

![hosting](images/WPafterDB2.png){.thumbnail}

Inserisci le informazioni richieste:

- *Site Title*: inserisci il titolo del tuo sito.
- *Username*: inserisci l'identificativo Amministratore del tuo CMS.
- Password: definisci una password per questo identificativo Amministratore.
- *Your Email*: inserisci un indirizzo email valido.
- *Search Engine Visibility*: deseleziona questa casella per far sì che i motori di ricerca facciano riferimento al tuo WordPress.

Clicca su `Install WordPress`{.action} non appena tutto è stato inserito correttamente.

#### 2.4 - Completare l'installazione manuale e testare l'accesso "Amministratore"

L'installazione viene terminata se visualizzi la pagina seguente:

![hosting](images/WPend.png){.thumbnail}

Clicca su `Log in`{.action} per testare l'accesso al tuo nuovo CMS WordPress utilizzando gli identificativi amministratore creati precedentemente allo Step 3.3.

> [!primary]
>
> I team OVHcloud non supportano soluzioni terze come WordPress e non possono quindi supportarti nell'utilizzo o nella configurazione del tuo CMS WordPress.
>
> Per questo tipo di supporto, utilizza i forum dedicati alla soluzione WordPress.
>

Una volta connesso, visualizzi la pagina seguente:

![hosting](images/WPadminInterface.png){.thumbnail}

> [!success]
>
> Puoi avviare la creazione dei contenuti del tuo sito WordPress!
>

## Per saperne di più <a name="go-further"></a>

[Sito ufficiale WordPress](https://wordpress.org)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.