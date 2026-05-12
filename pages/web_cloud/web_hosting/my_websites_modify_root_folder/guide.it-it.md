---
title: "Come modificare la cartella root di un sito web esistente?"
excerpt: "Scopri come modificare la cartella root dichiarata per un sito web già esistente sul tuo hosting web dallo Spazio Cliente OVHcloud"
updated: 2026-05-04
---

## Obiettivo

È possibile ospitare più siti web su uno stesso piano di hosting web, anche se i domini non sono registrati presso OVHcloud. Inoltre, è possibile associare uno o più domini o sottodomini a uno stesso sito web.

Utilizzando i tuoi servizi, potresti aver bisogno di:

- Sostituire l'intero contenuto di un sito web esistente, senza rimuoverlo dal tuo hosting web. Il tutto senza interruzione dell'accesso e in totale trasparenza per i visitatori del tuo sito web.
- Installare un [modulo in 1 clic](/pages/web_cloud/web_hosting/cms_install_1_click_modules) o un [altro CMS](/pages/web_cloud/web_hosting/cms_manual_installation) per sostituire il contenuto di un sito web esistente, senza eliminare il vecchio contenuto dal tuo hosting web. In questo caso specifico, dovrai poi costruire le diverse pagine del tuo nuovo sito web tramite il tuo browser Internet.
- Riorganizzare i nomi delle cartelle root dei tuoi siti web nello spazio di storage del tuo hosting web senza interrompere l'accesso ai tuoi diversi siti web.

**Scopri come modificare la cartella root dichiarata per un sito web già esistente sul tuo hosting web dallo Spazio Cliente OVHcloud.**

> [!primary]
> Questa procedura si applica alla [nuova versione dello Spazio Cliente OVHcloud](/links/control-panel-ovhcloud), attualmente disponibile in beta. Per seguirla, passa a questa interfaccia dal tuo Spazio Cliente abituale.
>
> Se non hai ancora creato il sito web interessato sul tuo hosting web, consulta **direttamente** [questa guida](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Se il tuo sito web dispone di una configurazione con Git, consulta preventivamente la nostra guida "[Configurare e utilizzare Git con un hosting Web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)" per rimuovere l'associazione con Git **prima** di proseguire. La modifica della cartella root dichiarata per un sito web non è disponibile se il tuo sito web è configurato con Git. In tal caso, la modifica della cartella root comprometterebbe l'associazione con Git.

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](/links/web/hosting-multisite) compatibile.
- Disporre di uno o più [domini](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting-sites)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > `Siti`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

> [!warning]
> Questa guida descrive esclusivamente le operazioni da eseguire dal tuo [Spazio Cliente OVHcloud](/links/manager).
>
> Ad eccezione del caso in cui si desideri installare un modulo in 1 clic per costruire il sito web progressivamente, sarà necessario preliminarmente:
>
> - Creare la nuova cartella root nello [spazio di storage](/pages/web_cloud/web_hosting/ftp_connection) del tuo hosting web.
> - Inserire l'intero nuovo contenuto del tuo sito web all'interno di questa nuova cartella.
> - Se il nuovo contenuto del tuo sito web funziona con un database, sarà necessario anche [creare un database](/pages/web_cloud/web_hosting/sql_create_database), e poi [importare il contenuto relativo a questo database](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
> - Inserire le credenziali di accesso al database nel file contenente le informazioni di connessione al database. Questo file deve essere già presente nella nuova cartella root.
>
> **Senza queste operazioni, la visualizzazione del tuo sito web verrà interrotta**.
>
> Questa guida descrive unicamente la procedura per modificare, dallo Spazio Cliente OVHcloud, la cartella root inizialmente definita per il tuo sito web. Questa azione è necessaria affinché il sito web mostri il contenuto della nuova cartella, in sostituzione della precedente.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting-sites) e seleziona l'hosting web interessato.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-sites.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella pagina visualizzata, clicca sulla scheda `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-sites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella tabella che compare, clicca sul pulsante `⁝`{.action} situato a destra del sito web interessato, poi su `Modifica sito`{.action}.
>>
>> ![Opzioni del sito](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella finestra che si apre, nel formulario **Cartella root**, sostituisci la vecchia cartella root con quella nuova.
>>
>> ![Modifica cartella root](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/edit-site-folder.png){.thumbnail}
>>
>> Clicca quindi su `Conferma`{.action}.
>>

## Per saperne di più

[Mettere online il tuo sito Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
