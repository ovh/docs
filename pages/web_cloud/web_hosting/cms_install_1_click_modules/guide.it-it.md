---
title: "Installare il tuo sito Web con un 'CMS in 1 click'"
excerpt: "Questa guida ti mostra come creare il tuo sito Web con i nostri 'moduli in 1 click'"
updated: 2026-05-04
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

## Obiettivo

I "moduli in 1 click" permettono l'installazione semplice e rapida di un sito Web (senza competenze tecniche specifiche). I "moduli in 1 click" sono in realtà **C**ontent **M**anagement **S**ystem **(CMS)**. Per questo motivo, OVHcloud propone l'installazione dei CMS più utilizzati: *WordPress*, *Joomla!*, *Drupal* e *PrestaShop*.

**Questa guida ti mostra come installare il tuo sito utilizzando i nostri moduli in 1 click.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Prerequisiti

- Disporre di una soluzione di [hosting Web OVHcloud](/links/web/hosting) che includa almeno un database.
- Utilizzare una versione recente di PHP e un ambiente di esecuzione compatibile sul tuo hosting Web OVHcloud. Scopri lo stato delle diverse versioni disponibili in questa [pagina](https://webhosting-infos.hosting.ovh.net/). Se necessario, consulta la nostra [guida](/pages/web_cloud/web_hosting/configure_your_web_hosting) sull'argomento per modificare rapidamente questa configurazione.
- Un file "[.ovhconfig](/pages/web_cloud/web_hosting/configure_your_web_hosting)" configurato deve essere presente nella root FTP del tuo hosting Web.
- La directory (cartella di root) in cui sarà installato il tuo "modulo in 1 click" deve essere vuota o al momento inesistente.
- Il dominio (con sottodominio, se desiderato) che verrà utilizzato per il tuo sito web deve essere dichiarato nella scheda [I miei siti](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website) del tuo hosting web.

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

> [!primary]
>
> In caso di difficoltà durante l'esecuzione di uno degli step descritti qui sotto, consulta la nostra documentazione specifica sugli [errori più frequenti associati ai "moduli in 1 click"](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic). 

### 1 - Scegli correttamente il CMS

Un CMS permette di progettare un sito Web tramite un'interfaccia di facile utilizzo. Esistono diversi tipi di CMS, alcuni preprogettati per creare un sito di e-commerce, altri per creare un sito vetrina, un blog, ecc... per usufruire di una struttura pronta all'uso e personalizzabile (tema, estensioni, testi, ecc...) a tua discrezione.

Tra tutti i CMS, OVHcloud ne propone 4 per l'installazione automatica con i "moduli in 1 click". 

Utilizzando questa soluzione, dovrai scegliere tra i 4 CMS citati sopra. Se hai già scelto OVHcloud, prosegui nella lettura degli step di questa guida. In caso contrario, consulta la nostra pagina [comparativa dei CMS](/links/web/hosting-cms-comparison) per effettuare la tua scelta.

Per installare un CMS non disponibile tramite i nostri "moduli in 1 click", è possibile installarlo manualmente sul tuo hosting. Questo CMS è compatibile con le nostre soluzioni di [hosting Web OVHcloud](/links/web/hosting).

![Logo dei CMS](/pages/assets/screens/other/cms/cms-logos.png){.thumbnail}

### 2 - Aggiungi un "modulo in 1 click"

Sono disponibili due metodi di installazione:

- Installazione **rapida** (selezionata di default): OVHcloud realizza l'installazione del CMS e comunica le credenziali di accesso al tuo indirizzo email di contatto OVHcloud. È il modo più semplice e veloce per installare un "modulo in 1 click".
- Installazione **avanzata**: permette di personalizzare la configurazione da applicare per l'installazione del CMS. Inserisci tutte le informazioni necessarie al corretto funzionamento del CMS: 
    - informazioni di connessione al tuo database (server, nome utente, porta, password, ecc...)
    - percorso di installazione nello spazio di storage FTP del tuo hosting
    - lingua del CMS
    - identificativi amministratore (Nome dell'amministratore, password, indirizzo email, ecc...)

> [!warning]
>
> La directory di installazione del tuo "modulo in 1 click" deve essere vuota e, affinché l'installazione possa essere effettuata, è necessario disporre di almeno un database disponibile in creazione sul tuo hosting Web OVHcloud.
>
> Per un'installazione rapida, non creare il database prima, il robot di installazione se ne occuperà.

**Clicca su uno dei 2 metodi di installazione per visualizzare il contenuto.**

/// details | Installazione rapida di un "modulo in 1 click"

Clicca sulle schede qui sotto per visualizzare ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella pagina che si apre, clicca sulla scheda `CMS in 1 click`{.action}. Qui sono elencati gli eventuali "moduli in 1 click" già installati. È possibile gestire i "moduli in 1 click" e installarne di nuovi.
>>
>> ![Accesso alla sezione Moduli in 1 click](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/tab.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella scheda `CMS in 1 click`{.action} del tuo hosting, clicca su `Aggiungi un modulo`{.action}.
>>
>> Nella nuova finestra, scegli il CMS e seleziona il dominio con cui vuoi installare il tuo sito Web:
>>
>> ![Scelta del modulo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-select-module-and-domain.png){.thumbnail}
>>
>> Se il tuo dominio non è presente nell'elenco, vai alla scheda `I miei siti`{.action} per aggiungerlo. Consulta la nostra guida "[Come associare un nome a dominio a un sito web esistente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)", se necessario.
>>
>> > [!primary]
>> >
>> > Verifica, proprio sotto il modulo che permette di selezionare un dominio (o un sottodominio), che `La directory di installazione predefinita è` sia quella in cui vuoi installare il tuo "modulo in 1 click".
>> >
>> > Ti ricordiamo che questa directory deve essere completamente vuota.
>> >
>> > Se necessario, consulta la nostra guida "[Come condividere il tuo hosting Web tra più siti](/pages/web_cloud/web_hosting/multisites_configure_multisite)" per modificare la directory di destinazione del tuo dominio.
>>
>> Una volta aggiunto correttamente il dominio, prova di nuovo ad aggiungere un "modulo in 1 click".
>>
> **Passaggio 4**
>>
>> Scegli il dominio del tuo CMS, controlla la directory di destinazione che appare automaticamente dopo la scelta del dominio e verifica che la casella `Installazione avanzata`{.action} non sia selezionata. Clicca direttamente su `Installa`{.action}.
>>
>> ![Installazione rapida di un modulo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-quick-mod-step-1-b.png){.thumbnail}
>>
>> Una volta completata l'installazione, riceverai un'email con le informazioni di connessione all'interfaccia amministratore (*back office*) del tuo CMS. Accedi alla pagina per personalizzare il tuo sito Web.
>>

> [!primary]
>
> L'installazione e la ricezione dell'email possono richiedere fino a 15 minuti a partire dal momento in cui hai cliccato sul pulsante `Installa`{.action} nel tuo [Spazio Cliente OVHcloud](/links/manager).

///

/// details | Installazione avanzata di un "modulo in 1 click"

Clicca sulle schede qui sotto per visualizzare ciascuno dei **8** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting) e seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella pagina che si apre, clicca sulla scheda `CMS in 1 click`{.action}. Qui sono elencati gli eventuali "moduli in 1 click" già installati. È possibile gestire i "moduli in 1 click" e installarne di nuovi.
>>
>> ![Accesso alla sezione Moduli in 1 click](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/tab.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella scheda `CMS in 1 click`{.action} del tuo hosting, clicca su `Aggiungi un modulo`{.action}.
>>
>> Nella nuova finestra, scegli il CMS e seleziona il dominio con cui vuoi installare il tuo sito Web:
>>
>> ![Scelta del modulo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-select-module-and-domain.png){.thumbnail}
>>
>> Se il tuo dominio non è presente nell'elenco, vai alla scheda `I miei siti`{.action} per aggiungerlo. Consulta la nostra guida "[Come associare un nome a dominio a un sito web esistente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)", se necessario.
>>
>> > [!primary]
>> >
>> > Verifica, proprio sotto il modulo che permette di selezionare un dominio (o un sottodominio), che `La directory di installazione predefinita è` sia quella in cui vuoi installare il tuo "modulo in 1 click".
>> >
>> > Ti ricordiamo che questa directory deve essere completamente vuota.
>> >
>> > Se necessario, consulta la nostra guida "[Come condividere il tuo hosting Web tra più siti](/pages/web_cloud/web_hosting/multisites_configure_multisite)" per modificare la directory di destinazione del tuo dominio.
>>
>> Una volta aggiunto correttamente il dominio, prova di nuovo ad aggiungere un "modulo in 1 click".
>>
> **Passaggio 4**
>>
>> Assicurati che la casella `Installazione avanzata`{.action} sia selezionata e clicca su `Continua`{.action}.
>>
>> ![Installazione avanzata di un modulo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-1.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Inserisci le informazioni di connessione al tuo database.
>>
>> > [!warning]
>> >
>> > Se le informazioni fornite non sono corrette, l'installazione non verrà completata. Per evitare questo problema, ti consigliamo di testare la connessione al tuo database.
>> >
>> > Per recuperare le credenziali di accesso al tuo database incluso nel tuo hosting Web, consulta la nostra guida "[Creare un database su un hosting Web](/pages/web_cloud/web_hosting/sql_create_database)".
>> >
>> > Per recuperare le credenziali di accesso al database creato su un'istanza Web Cloud Databases, consulta la nostra guida "[Iniziare a utilizzare Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> ![Database per l'installazione avanzata](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-3.png){.thumbnail}
>>
>> Esistono diverse possibilità:
>>
>> - Il database è già stato creato sul tuo hosting Web: selezionala nel menu a tendina `Seleziona il database`{.action} e inserisci le informazioni richieste.
>> - Il database non è ancora stato creato sul tuo hosting Web: [Crea il tuo database incluso con il tuo hosting](/pages/web_cloud/web_hosting/sql_create_database), torna al menu a tendina `Seleziona il database`{.action} e inserisci le informazioni richieste.
>> - Il database è [creato sulla tua istanza Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server): nel menu a tendina `Seleziona il database`{.action}, seleziona `Database esterno al tuo hosting Web`{.action} e inserisci le informazioni richieste. L'istanza e l'hosting Web devono essere ospitati nello stesso datacenter.
>> - Il database è stato creato su un altro hosting Web OVHcloud: nel menu a tendina `Seleziona il database`{.action}, seleziona `Database esterno al tuo hosting Web`{.action} e inserisci le informazioni richieste. Il database e l'hosting Web devono essere ospitati nello stesso datacenter.
>>
> **Passaggio 6**
>>
>> Inserisci le restanti informazioni richieste per il database:
>>
>> - *Indirizzo del server*: inserisci il nome del server del database presente nell'email di installazione o nello Spazio Cliente OVHcloud.
>>
>> > [!primary]
>> >
>> > - Il nome del server di un database incluso nella tua offerta di hosting Web ha questa forma: `NameOfYourDatabase.mysql.db`
>> >
>> > - Il nome del server di un database Web Cloud Database inizia con il tuo identificativo cliente OVHcloud e viene mostrato come segue: `OVHID(without-ovh)-XXX.eu.clouddb.ovh.net`, dove i **"X"** sono sostituiti dal riferimento del tuo servizio Web Cloud Databases.
>> >
>>
>> - *Nome del database*: questo nome è stato definito durante la creazione del database nello [Spazio Cliente OVHcloud](/links/manager).
>>
>> - *Porta*: inserisci sistematicamente il numero **3306** (porta di default) per un database incluso con il tuo hosting Web. Per creare un database su un'istanza Web Cloud Databases, consulta la nostra guida "[Iniziare a utilizzare Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> - *Username*: è identico al nome del database se utilizzi un database incluso con il tuo hosting Web. Per i database creati su un'offerta Web Cloud Databases, consulta le informazioni indicate nella nostra guida "[Iniziare a utilizzare Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> - *Password*: ti è stato inviato via email durante la creazione del database. È possibile che tu l'abbia modificata nel frattempo.
>>
>> Una volta inseriti tutti i dati, clicca su `Continua`{.action}.
>>
> **Passaggio 7**
>>
>> Per configurare il modulo, inserisci queste informazioni:
>>
>> - *Nome o email dell'amministratore:* identificativo che utilizzerai per accedere all'interfaccia di gestione del tuo CMS (Back Office).
>> - *Password:* password per accedere all'interfaccia di gestione del tuo CMS.
>> - *Dominio:* dominio con cui vuoi installare il tuo CMS. Se necessario, consulta la guida su "[Come associare un nome a dominio a un sito web esistente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
>> - *Lingua:* lingua in cui sarà installato il CMS.
>> - *Percorso di installazione:* è inserito automaticamente nella selezione del dominio. Completalo con sottocartelle (per utenti esperti).
>>
>> > [!primary]
>> >
>> > Verifica, per il modulo `Percorso di installazione`, che la directory precompilata sia quella in cui vuoi installare il tuo "modulo in 1 click" con il tuo dominio.
>> >
>> > Ti ricordiamo che questa directory deve essere completamente vuota.
>> >
>> > Inoltre, se inserisci una sottodirectory nel `Percorso di installazione`, questa comparirà nell'URL di accesso al tuo "modulo in 1 click".
>> > Ad esempio, se inserisci nel modulo una sottodirectory *test*, l'URL di accesso al tuo "modulo in 1 click" avrà questo formato: **http://domain.tld/test/**.
>> >
>> > Se necessario, consulta la nostra guida "[Come condividere il tuo hosting Web tra più siti](/pages/web_cloud/web_hosting/multisites_configure_multisite)" per modificare la directory di destinazione del tuo dominio.
>>
>> Una volta inseriti tutti i dati, clicca su `Continua`{.action}:
>>
>> > [!warning]
>> >
>> > La cartella finale indicata nel percorso di installazione inserito deve essere obbligatoriamente e completamente vuota affinché l'installazione possa essere completata.
>>
>> ![Configurazione del modulo per installazione avanzata](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-2.png){.thumbnail}
>>
> **Passaggio 8**
>>
>> Verifica le informazioni visualizzate e clicca su `Conferma`{.action} se tutto è in ordine:
>>
>> ![Conferma dell'installazione in modalità avanzata](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-4.png){.thumbnail}
>>

///

### 3 - Personalizza il tuo sito

L'installazione può richiedere una decina di minuti.

Una volta completata l'operazione riceverai un'email di conferma della corretta installazione del CMS. Questa email ti inviterà a connetterti all'interfaccia di gestione del tuo CMS. In questo modo è possibile modificare il tema del tuo sito Web e pubblicare i primi contenuti.

> [!warning]
>
> Il supporto OVHcloud non supporta l'utilizzo dei CMS. Le soluzioni sono disponibili solo in installazione **in 1 click**

Per maggiori informazioni sulle funzionalità del tuo CMS, contatta il produttore del CMS installato. Se hai bisogno di aiuto per realizzare il tuo progetto, consulta la documentazione disponibile.

|CMS|Documentazione Ufficiale|
|---|---|
|WordPress|[Primi passi con WordPress](https://codex.wordpress.org/it:Primi_passi_con_WordPress)|
|PrestaShop|[Guida introduttiva di PrestaShop](https://docs.prestashop-project.org/1.7-documentation/getting-started+introduttiva+di+PrestaShop+1.7)|
|Joomla!|[Documentazione Joomla!](https://docs.joomla.org/Joomla_info_page/it-IT)|
|Drupal|[Documentazione Drupal](http://www.drupal.it/home-documentazione)|

## Per saperne di più

[Scegli il CMS per il tuo sito Web](/links/web/hosting-cms-comparison).

[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gestire un database da un hosting condiviso](/pages/web_cloud/web_hosting/sql_create_database).

[Gestire il vostro CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

[Disinstallare il tuo CMS](/pages/web_cloud/web_hosting/cms_manage_1_click_module#step-3-elimina-il-tuo-modulo).

Per mantenere il pieno controllo sull'installazione del CMS è possibile [installare manualmente un CMS sull'hosting Web OVHcloud](/pages/web_cloud/web_hosting/cms_manual_installation).

Scopri la nostra soluzione [Web Cloud Database](/links/web/databases).

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
