---
title: "Tutorial - Installare manualmente Joomla!"
excerpt: "Questa guida ti mostra come installare manualmente il tuo CMS Joomla!"
updated: 2023-04-07
---

**Ultimo aggiornamento: 07/04/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>
  
## Obiettivo

Qui trovi tutti gli elementi per installare manualmente il CMS (Content Management System) Joomla! in pochi step.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Mettiamo a tua disposizione questo tutorial per supportarti nelle operazioni più frequenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/) o [amministratore del CMS Joomla!](https://www.joomla.org/){.external}. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni, consulta la sezione ["Per saperne di più"](#go-further) di questo tutorial.
>

> [!success]
>
Per installare Joomla! **automaticamente** dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), consulta la nostra guida sull'[installazione di un modulo in un click](/pages/web/hosting/cms_install_1_click_modules).
>
> Per installare **manualmente un altro CMS** (WordPress, Drupal, PrestaShop), consulta la nostra guida sull'[installazione manuale di un CMS](/pages/web/hosting/cms_manual_installation).
>

**Questa guida ti mostra come installare manualmente il tuo CMS Joomla!**
  
## Prerequisiti

- Disporre di un'offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/) che contiene almeno un database.
- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
  
## Procedura

### Step 1 - preparare l'installazione <a name="step1"></a>

Per installare il CMS **Joomla!** sulla tua offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/), sono necessari alcuni preparativi.

Segui **gli step** descritti nel nostro tutorial sull'[installazione manuale di un CMS](/pages/web/hosting/cms_manual_installation) prima di proseguire allo Step 2.

### Step 2 - finalizzare l'installazione manuale <a name="step2"></a>

> [!success]
>
> Prima di continuare l'installazione, svuota la cache del tuo browser per evitare errori.
>

#### 2.1 - Visualizza il tuo sito Joomla! attraverso il vostro browser

Inserisci il dominio nella barra di ricerca del browser

Se i file sorgente di Joomla! sono stati inseriti correttamente nella cartella root, la pagina di selezione della lingua per Joomla! compare:

![Joomla Installstep 1](images/Joomla-install-select-language-1.png){.thumbnail}

Seleziona la lingua, inserisci il nome del tuo sito Web e clicca su `Setup Login Data`{.action}.

#### 2.2 - Configura i dati di connessione al tuo Joomla!

Definisci gli accessi al tuo spazio di amministrazione (*Back Office*) Joomla! :

![Joomla Installstep 2](images/Joomla-install-define-admin-2.png){.thumbnail}

> [!primary]
>
> Per "Super User" si intende la persona che amministra il CMS.

- *Enter the real name of your Super User*: inserisci il tuo nome reale.
- *Set password for your Super User account*: scegli un nome utente che ti permetterà di accedere al tuo spazio di amministrazione Joomla!
- *Set password for your Super User account*: scegli una password con un minimo di **12 caratteri**.
- *Enter the email address of the website Super User*: inserisci un indirizzo email valido. che servirà a ricevere le notifiche inviate da Joomla!

Verifica le informazioni inserite e clicca su `Setup Database Connection`{.action}.

#### 2.3 - Collega il tuo database con il tuo Joomla!

Inserisci le informazioni richieste relative al database:

![Joomla Installstep 3](images/Joomla-install-db-connect-3.png){.thumbnail}

Per completare i campi seguenti, consulta le informazioni indicate nello **Step 1.4** del tutorial sull'[installazione manuale di un CMS](/pages/web/hosting/cms_manual_installation).

- *Select the database type*: scegli il tipo del tuo database tra i tipi disponibili per Joomla! Se utilizzi un database condiviso OVHcloud, puoi lasciare di default il valore **MySQLi**.

- *Enter the host name, usually "localhost" or a name provided by your host*: inserisci il nome del server del database presente nell'email di installazione o nello Spazio Cliente OVHcloud.

> [!primary]
> 
> - Il nome del server di un database incluso con la tua offerta di hosting Web ha questa forma: `NameOfYourDatabase.mysql.db` 
>
> - Il nome del server di un database Web Cloud Database inizia con il tuo identificativo cliente OVHcloud e viene mostrato come segue: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa0000"** corrisponde al tuo identificativo OVHcloud senza il **"-ovh"** e i **"X"** sono sostituiti dal resto del riferimento del tuo servizio Web Cloud Databases.
>

- *Either a username you created or a username provided by your host*: è identico al nome del database se utilizzi un database incluso con il tuo hosting Web.
Per i database creati su un Web Cloud Databases, consulta le informazioni indicate nello **Step 1.4** della guida sull'[installazione manuale di un CMS](/pages/web/hosting/cms_manual_installation).

- *Either a password you created or a password provided by your host*: l'hai definito tu stesso durante la creazione del tuo database. Se nel frattempo è possibile che tu l'abbia modificato, ti consigliamo di verificarlo.

- *Enter the database name*: questo nome è stato definito durante la creazione del database nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Se utilizzi un database incluso con il tuo hosting Web, è lo stesso nome utente del database.

- *Enter a table prefix or use the randomly generated one*: se l'installazione avviene con un nuovo database, inserisci il "prefisso" che preferisci. Se utilizzi un database già utilizzato da un altro sito, consulta **lo Step 1.4** della guida sull'[installazione manuale di un CMS](/pages/web/hosting/cms_manual_installation) per non inserire un "prefisso" di tavolo già utilizzato nel tuo database.

- **Connection Encryption**: lascia il valore **Default**

Clicca su `Install Joomla`{.action}.

Visualizzi questo messaggio:

![Joomla Installstep 3-1](images/Joomla-install-db-connect-3-1.png){.thumbnail}

Se utilizzi un database presente al di fuori di un hosting locale, dovrai eliminare il *token* generato casualmente durante l'installazione del tuo Joomla!.

Questo file da eliminare si trova nel tuo [spazio di archiviazione FTP](/pages/web/hosting/ftp_connection).

Una volta connesso, accedi alla cartella **installazione** del tuo Joomla! poi elimina solo il *token* indicato dal messaggio di alert. è presente come file*.txt**.

Clicca su `Install Joomla`{.action}. e poi torna al browser.

#### 2.4 - Terminare l'installazione

Una volta completata l'installazione, visualizzi la pagina seguente:

![Joomla Installstep 4](images/Joomla-install-ending-4.png){.thumbnail}

L'installazione è completata ma, se necessario, è possibile aggiungere altre lingue al CMS.

>[!success]
>
Congratulazioni, Joomla! è pronto per essere utilizzato e somministrato.
>
  
## Per saperne di più <a name="go-further"></a>

[Oficjalna strona Joomla!](https://joomla.org){.external}
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).
 
Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.