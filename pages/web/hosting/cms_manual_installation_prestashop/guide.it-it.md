---
title: "Tutorial - Installare manualmente PrestaShop"
excerpt: "Questa guida ti mostra come installare manualmente il tuo CMS PrestaShop"
slug: cms_installa_manualmente_prestashop
section: CMS
order: 07
updated: 2023-04-07
---

**Ultimo aggiornamento: 07/04/2023**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>
  
## Obiettivo

Qui trovi tutti gli elementi per installare manualmente il CMS (Content Management System) PrestaShop in pochi step.

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a un [provider specializzato](https://partner.ovhcloud.com/it/directory/) o [amministratore del CMS PrestaShop](https://www.prestashop.com/en/support){.external}. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

> [!success]
>
> Per installare PrestaShop **automaticamente** dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), consulta la nostra guida sull'[installazione di un modulo "in un click"](https://docs.ovh.com/it/hosting/hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/).
>
> Per installare **manualmente un altro CMS** (WordPress, Joomla!, Drupal), consulta la nostra guida sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/).
>

**Questa guida ti mostra come installare manualmente il tuo CMS PrestaShop**
  
## Prerequisiti

- Disporre di un'offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/) che contiene almeno un database.
- Disporre di un [dominio](https://www.ovhcloud.com/it/domains/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
  
## Procedura

### Step 1 - preparare l'installazione <a name="step1"></a>

Per installare il CMS **PrestaShop** sulla tua offerta di [hosting web](https://www.ovhcloud.com/it/web-hosting/), sono necessari alcuni preparativi.

Segui **gli step** descritti nel nostro tutorial sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/) prima di proseguire allo Step 2.

### Step 2 - finalizzare l'installazione manuale <a name="step2"></a>

> [!success]
>
> Prima di continuare l'installazione, svuota la cache del tuo browser per evitare errori.
>

Se non hai scaricato l'ultima versione disponibile di PrestaShop, visualizzi la pagina seguente:

![PrestaShop installation step 1](images/Prestashop-install-update-version.png){.thumbnail}

Clicca su `No thanks`{.action} per conservare la versione di PrestaShop appena caricata o su `Yes please!`{.action} per utilizzare la versione più recente del CMS.

#### 2.1 - Accedi al tuo sito PrestaShop tramite il tuo browser

Inserisci il tuo dominio nella barra di ricerca del tuo browser Internet.

Se i file sorgente del tuo PrestaShop sono stati inseriti correttamente nella cartella root, la pagina di PrestaShop che permette di selezionare la lingua apparirà:

![PrestaShop installation step 2](images/Prestashop-install-select-language.png){.thumbnail}

Seleziona la lingua del sito e clicca su `Next`{.action}.

#### 2.2 - Conferma le condizioni di utilizzo

Verifica le condizioni di utilizzo, seleziona la casella `I agree to the above terms and conditions`{.action} e clicca su `Next`{.action}.

![PrestaShop installation step 3](images/Prestashop-install-licence-agreement-3.png){.thumbnail}

#### 2.3 - Inserisci le informazioni del tuo e-commerce

PrestaShop ti chiederà una serie di informazioni sul tuo futuro negozio online:

![PrestaShop Installstep 4](images/Prestashop-install-store-infos-4.png){.thumbnail}

**Informazioni sul tuo ecommerce**

- *Shop name*: Inserisci il nome del tuo e-commerce
- *Main activity*: Seleziona il tuo settore di attività tra le proposte del menu a tendina
- *Country*: Seleziona il tuo Paese
- *Enable SSL*: Seleziona **Yes** per forzare la riscrittura del tuo URL in "https://". È necessario disporre di un certificato SSL attivo sul tuo hosting o dominio. Per maggiori informazioni su questo argomento, consulta la nostra guida su [gestione di un certificato SSL sul tuo hosting Web OVHcloud](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/).

**Il tuo account**

- *First name*: Inserisci il tuo nome
- *Last name*: Inserisci il tuo nome
- *E-mail address*: Inserisci il tuo indirizzo email
- *Shop password*: Scegli una password per accedere allo spazio di amministrazione del tuo e-commerce (backoffice)
- *Re-type to confirm*: Inserisci nuovamente la password

Verifica le informazioni inserite e clicca su `Next`{.action}.

#### 2.4 - Installare i contenuti predefiniti per il tuo e-commerce

PrestaShop ti permette di installare contenuti e moduli per il tuo futuro sito di e-commerce:

![PrestaShop Installstep 5](images/Prestashop-install-store-content-5.png){.thumbnail}

Scegli e clicca su `Next`{.action}.

#### 2.5 - Associa PrestaShop al tuo database OVHcloud

![PrestaShop Installstep 6](images/Prestashop-install-db-config-6.png){.thumbnail}

Recupera le credenziali del tuo database (se necessario, consulta **lo Step 1.4** della guida sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/)).

Inserisci le informazioni richieste relative al database:

-  *Database server address*: inserisci il nome del server del database presente nell'email di installazione o nello Spazio Cliente OVHcloud. 

> [!primary]
> 
> - Il nome del server di un database incluso con la tua offerta di hosting Web ha questa forma: `NameOfYourDatabase.mysql.db` 
>
> - Il nome del server di un database Web Cloud Database inizia con il tuo identificativo cliente OVHcloud e viene mostrato come segue: `aa00000-XXX.eu.clouddb.ovh.net`, **"aa0000"** corrisponde al tuo identificativo OVHcloud senza il **"-ovh"** e i **"X"** sono sostituiti dal resto del riferimento del tuo servizio Web Cloud Databases.
>

- *Database name*: questo nome è stato definito durante la creazione del database nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

- *Database login*: è identico al nome del database se utilizzi un database incluso con il tuo hosting Web.
Per i database creati su un servizio Web Cloud Databases, consulta le informazioni fornite nello **Step 1.4** della nostra guida sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/).

- *Database password*: l'hai definito tu stesso durante la creazione del tuo database. È possibile che tu l'abbia modificato nel frattempo.

- *Tables prefix*: se l'installazione avviene con un nuovo database, inserisci il "prefisso" che preferisci. Se utilizzi un database già utilizzato da un altro sito, consulta **lo Step 1.4** della nostra guida sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/) per non inserire un "prefisso" di tavolo già utilizzato nel tuo database.

- *Drop existing tables*: **Deseleziona questa casella se utilizzi già il tuo database con un altro sito Web**.

>[!alert]
>
> Se lasciate selezionare la casella **Drop existing tables**, eliminerete tutte le tabelle già presenti nel vostro database.
>

Clicca su `Test your database connection now!`{.action} per verificare le impostazioni inserite:

![PrestaShop Installstep 6-1](images/Prestashop-install-db-config-6-1.png){.thumbnail}

Se visualizzi il messaggio "Il tuo database è connesso", clicca su `Next`{.action}. Altrimenti, verifica le impostazioni fino al completamento dell'accesso. Se necessario, fai riferimento allo **Step 1.4** del tutorial sull'[installazione manuale di un CMS](https://docs.ovh.com/it/hosting/web_hosting_installa_manualmente_il_tuo_cms/).

#### 2.6 - Terminare l'installazione di PrestaShop

L'ultimo step corrisponde al riepilogo dell'installazione che hai appena realizzato:

![PrestaShop Installstep 7](images/Prestashop-install-resume-7.png){.thumbnail}

Recupera le credenziali di accesso del tuo PrestaShop prima di lasciare la pagina.

>[!warning]
>
> **Per motivi di sicurezza, ti consigliamo di eliminare la cartella di installazione presente sul tuo spazio FTP.**
>
> Per effettuare questa operazione, consulta la guida "Come connettersi allo spazio di storage FTP di un hosting Web OVHcloud" (https://docs.ovh.com/it/hosting/accedere-spazio-storage-ftp-hosting-web/) e clicca su [forum PrestaShop](https://www.prestashop.com/forums/){.external} per assicurarti di eliminare i file corretti.
>

> [!success]
>
> Puoi avviare la creazione del contenuto del tuo sito PrestaShop!
>
  
## Per saperne di più <a name="go-further"></a>

[Sito ufficiale PrestaShop](https://prestashop.com)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).
 
Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.