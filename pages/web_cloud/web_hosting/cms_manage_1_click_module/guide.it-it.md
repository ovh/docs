---
title: "Come gestire il tuo modulo in 1 click?"
excerpt: "Questa guida ti mostra come gestire il tuo modulo in 1 click dallo Spazio Cliente OVHcloud"
updated: 2026-05-04
---

## Obiettivo

I moduli in 1 click permettono di installare facilmente e rapidamente un software online di supporto alla creazione di siti Internet (comunemente chiamato "CMS"). OVHcloud ti propone i più conosciuti: WordPress, PrestaShop, Drupal e Joomla!.

**Questa guida ti mostra come gestire il tuo modulo in 1 click dallo Spazio Cliente OVHcloud.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell'utente.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l'amministratore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) su questa guida.
>

## Prerequisiti

- Disporre di un'[offerta di hosting Web Cloud](/links/web/hosting) che consenta l'installazione di un modulo in 1 click
- Aver creato un modulo in 1 click sul tuo hosting (Se non l'hai ancora installato, segui la nostra guida "[Installare il tuo sito Web con un CMS in 1 click](/pages/web_cloud/web_hosting/cms_install_1_click_modules)").

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### Accedi al tuo sito

<!-- CP-STEPS-START:access-module -->
Clicca sulle schede seguenti per visualizzare uno alla volta i **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona il tuo hosting web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Clicca sulla scheda `CMS in 1 click`{.action}.
>>
> **Passaggio 2**
>>
>> Clicca sui tre puntini `...`{.action} a destra della riga relativa al tuo modulo e poi su `Accedi al modulo`{.action}.
>>
<!-- CP-STEPS-END:access-module -->

> [!primary]
>
> Se il tuo sito non appare correttamente a seguito di questa operazione, consulta le guide OVHcloud relative agli hosting condivisi nella sezione [Diagnostica](/products/web-cloud-hosting).
>

### Accedi all'interfaccia amministratore

<!-- CP-STEPS-START:access-admin-interface -->
Clicca sulle schede seguenti per visualizzare uno alla volta i **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona il tuo hosting web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Clicca sulla scheda `CMS in 1 click`{.action}.
>>
> **Passaggio 2**
>>
>> Clicca sui tre puntini `...`{.action} a destra della linea relativa al tuo modulo e poi su `Accedi all'interfaccia di amministrazione del modulo`{.action}.
>>
<!-- CP-STEPS-END:access-admin-interface -->

### Trova l'identificativo amministratore

<!-- CP-STEPS-START:find-admin-login -->
Clicca sulle schede seguenti per visualizzare uno alla volta i **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona il tuo hosting web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `CMS in 1 click`{.action}. L'identificativo amministratore del tuo modulo è visibile nella colonna `Login`.
>>
> **Passaggio 3**
>>
>> Puoi anche ricercare l'email ricevuta durante la creazione del tuo modulo. Nel tuo [Spazio Cliente OVHcloud](/links/manager), clicca sul tuo nome in alto a destra e poi su `Email di servizio`{.action}.
>>
<!-- CP-STEPS-END:find-admin-login -->

### Modifica la password del tuo modulo <a name="password-change"></a>

> [!primary]
>
> Consulta la documentazione ufficiale dei diversi CMS disponibili sull'hosting condiviso:
>
> - WordPress : <https://wordpress.org/support/article/resetting-your-password/>
> - Joomla! : <https://docs.joomla.org/How_do_you_recover_or_reset_your_admin_password%3F>
> - Drupal : L'editor di questo software non offre, alla data, la documentazione per modificare la password di accesso all'interfaccia di amministrazione di Drupal. Ti invitiamo a contattare direttamente l'editor su questo argomento. Per maggiori informazioni, consulta la pagina ufficiale [drupal.org](https://www.drupal.org/).
> - PrestaShop : L'editor di questo software non offre, alla data, la documentazione necessaria per modificare la password di accesso all'interfaccia di amministrazione di PrestaShop. Ti invitiamo a contattare direttamente l'editor su questo argomento. Per maggiori informazioni, consulta la [pagina ufficiale di PrestaShop](https://www.prestashop.com).
>
Puoi inoltre modificare la password di accesso all'interfaccia di gestione del tuo CMS direttamente dal tuo database.

Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di eseguire l'operazione utilizzando la documentazione proposta dal tuo CMS o di rivolgerti a uno [specialista del settore](/links/partner). OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.

### Elimina il tuo modulo

> [!warning]
>
> Il backup dei tuoi dati è una delle operazioni principali per la [sicurezza dei tuoi siti](/pages/web_cloud/web_hosting/secure_your_website). Ti consigliamo di importare regolarmente e **prima di eliminare** il backup dei tuoi dati su un supporto locale, come una chiavetta USB o un hard disk esterno, seguendo le istruzioni della nostra guida "[Esporta il tuo sito Web](/pages/web_cloud/web_hosting/exporter-son-site-web)".
>

#### 1 - Identifica il database associato al tuo modulo <a name="step1"></a>

Per eliminare il tuo modulo in 1 click, è necessario iniziare ad identificarne il database in modo **sicuro**.

<!-- CP-STEPS-START:find-db-password -->
Clicca sulle schede seguenti per visualizzare uno alla volta i **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona il tuo hosting web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Clicca sulla scheda `Database`{.action}.
>>
> **Passaggio 2**
>>
>> Se disponi di un solo database in questa parte del tuo Spazio Cliente e non disponi di soluzioni [Web Cloud Databases](/links/web/databases), puoi considerare che si tratta di quello del tuo sito.
>>
> **Passaggio 3**
>>
>> In caso contrario, vai alla scheda `I miei siti`{.action}. Annota il nome della `Cartella di root` presente sulla riga del sito web interessato: si tratta della directory in cui si trovano i file che costituiscono il tuo modulo in 1 click sul server FTP.
>>
<!-- CP-STEPS-END:find-db-password -->

Accedi allo [spazio FTP del tuo hosting](/pages/web_cloud/web_hosting/ftp_connection). Apri la `Cartella di root` trovata precedentemente nella scheda `I miei siti`{.action} e cerca il file di configurazione del tuo modulo:

- Per WordPress : **"wp-config.php"** (il nome del database compare con la dicitura **"DB_NAME"**).
- Per Joomla! : **"configuration.php"** (il nome del database compare con la dicitura **"public $db"**).
- Per Drupal : **"settings.php"** (Per ritrovarlo, accedi alla cartella **"site"** e **"default"**. Il nome del database compare con la dicitura **"database"**).
- Per PrestaShop : **"parameters.php"** (Per ritrovarlo, accedi alla cartella **"app"** e **"config"**. Il nome del database del tuo modulo compare con la dicitura **"database_name"**).

#### 2 - Salvare il tuo modulo

Per effettuare il backup del tuo sito, segui le istruzioni della nostra guida "[Esporta il tuo sito Web](/pages/web_cloud/web_hosting/exporter-son-site-web)" per recuperare sia i file sullo spazio FTP del tuo hosting che i database.

#### 3 - Elimina il tuo modulo

> [!alert]
>
> L'eliminazione del tuo modulo in 1 click e del suo database comporta anche la cancellazione di **tutti i backup**. I dati eliminati non potranno essere recuperati in seguito.
>

<!-- CP-STEPS-START:delete-module -->
Clicca sulle schede seguenti per visualizzare uno alla volta i **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona il tuo hosting web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sulla scheda `CMS in 1 click`{.action}.
>>
> **Passaggio 3**
>>
>> Clicca sui tre puntini `...`{.action} a destra della linea che indica il tuo modulo e poi sul comando `Elimina il modulo`{.action}.
>>
>> > [!success]
>> > Non trovi il pulsante `Elimina il modulo`{.action}? O vuoi solo eliminare dei file sul tuo modulo?
>> >
>> > Consulta le nostre guide:
>> >
>> > - [Accedi allo spazio di storage FTP del tuo hosting Web](/pages/web_cloud/web_hosting/ftp_connection).
>> > - [Tutorial - Utilizzare FileZilla con il tuo hosting OVHcloud](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide).
>> >
>> > <iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/LHpsuvyNFtQ?si=4655K8lQQpkE2YNG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
>> >
>>
<!-- CP-STEPS-END:delete-module -->

> [!warning]
>
> L'eliminazione del modulo 1 click **non comporta automaticamente l'eliminazione del database**. Se avvii l'installazione di un nuovo CMS senza aver prima eliminato il database del precedente (e il tuo hosting non consente la creazione automatica di un nuovo database), il messaggio "[Si è verificato un errore durante il caricamento delle informazioni (You need at least one free database)](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic#si-e-verificato-un-errore-durante-il-caricamento-delle-informazioni-you-need-at-least-one-free-database)" comparirà sul tuo Spazio Cliente.
>
> Se disponi di un abbonamento [Personale](/links/web/hosting-personal-offer) o hai già creato quattro database sul tuo hosting [Pro](/links/web/hosting-professional-offer) o [Performance](/links/web/hosting-performance-offer), dovrai eliminare il database identificato nella [parte 1](#step1) **PRIMA** di poter creare un nuovo modulo in 1 click.
>

<!-- CP-STEPS-START:delete-database -->
Per completare l'eliminazione del tuo modulo, clicca sulle schede seguenti per visualizzare uno alla volta i **3** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona il tuo hosting web.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
>> Clicca sulla scheda `Database`{.action}.
>>
> **Passaggio 2**
>>
>> Clicca su `...`{.action} a destra della linea che designa il database e poi sul pulsante `Elimina il database`{.action}.
>>
> **Passaggio 3**
>>
>> Prima di riavviare l'installazione di un nuovo modulo, verifica che le operazioni di eliminazione richieste in precedenza siano state completate tramite la scheda `Operazioni in corso`{.action}.
>>
<!-- CP-STEPS-END:delete-database -->

### Buone prassi

Rendi sicuro il tuo sito seguendo le istruzioni della nostra guida "[Come proteggere il tuo sito Web?](/pages/web_cloud/web_hosting/secure_your_website)".

Aggiungi strumenti di test del tipo CAPTCHA ai moduli del tuo sito.

Non installate sul vostro sito plugin o template che non sono stati consigliati dalle comunità ufficiali del vostro CMS: 

- [WordPress](https://wordpress.org/)
- [Joomla!](https://community.joomla.org/)
- [Drupal](https://www.drupal.org/community)
- [PrestaShop](https://www.prestashop.com/it)

## Per saperne di più <a name="go-further"></a>

[Risolvere gli errori più frequenti associati ai moduli in 1 click](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
