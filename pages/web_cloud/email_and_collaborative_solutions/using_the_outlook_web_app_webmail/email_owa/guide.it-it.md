---
title: 'Utilizzare il proprio indirizzo e-mail dalla webmail Outlook Web App (OWA)'
excerpt: 'Scopri come utilizzare il tuo indirizzo e-mail dalla webmail OWA'
updated: 2026-05-04
---

## Obiettivo

Con le soluzioni e-mail OVHcloud, puoi inviare e ricevere le tue e-mail da un dispositivo e da un client di tua scelta. OVHcloud fornisce un servizio di posta elettronica online chiamato Outlook Web App (OWA) che consente, tramite un browser web, di accedere a un account da qualsiasi luogo. Tutti gli account di posta attivi su MX Plan, Email Pro e Hosted Exchange dispongono di un unico punto di accesso all'interfaccia OWA corrispondente: la nostra pagina di [accesso alla webmail](/links/web/email).

**Questa guida illustra come eseguire le azioni più comuni con il tuo indirizzo e-mail dall'interfaccia OWA.**

## Prerequisiti

- Disporre di una soluzione e-mail OVHcloud preconfigurata, tra le seguenti offerte:
    - [**MX Plan**](/links/web/hosting), proposta con le nostre offerte di hosting web, inclusa nell'[hosting gratuito 100M](/links/web/domains-free-hosting) o ordinata come soluzione autonoma;
    - [**Hosted Exchange**](/links/web/emails-hosted-exchange);
    - [**Email Pro**](/links/web/email-pro).
- Conoscere le credenziali di accesso dell'indirizzo e-mail da utilizzare.

## Procedura

Questa guida ti permette di comprendere meglio le attività più comuni disponibili in un account di posta su OWA. Tuttavia, poiché questa interfaccia non è stata creata originariamente da OVHcloud, non possiamo fornire istruzioni specifiche su parametri non trattati in questa guida.

Per quanto riguarda le funzionalità specifiche di Exchange, puoi consultare alcune guide aggiuntive nella sezione [Per saperne di più](./#per-saperne-di-piu) in fondo a questa guida.

> [!primary]
>
> Dopo aver effettuato l'accesso e preso confidenza con l'interfaccia, non è necessario seguire le istruzioni nell'ordine indicato.

### Connettersi a OWA

Per connetterti a OWA con il tuo indirizzo e-mail, apri la pagina di [accesso alla webmail](/links/web/email). Inserisci l'indirizzo e-mail completo e la password. Quindi, clicca su `Connessione`{.action}.

![useowa](images/use-owa-step1.png){.thumbnail}

> [!warning]
>
> Se vieni reindirizzato su un'interfaccia **Roundcube**, significa che ti trovi sulla versione storica dell'offerta MX Plan. Per maggiori informazioni sulla tua offerta MX Plan, consulta la nostra pagina [Iniziare a utilizzare la soluzione MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).
>
> Per familiarizzare con l'interfaccia **Roundcube**, consulta la nostra guida [Utilizzare il proprio indirizzo e-mail dalla webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

Se è la prima volta che ti connetti a OWA con questo indirizzo e-mail, ti verrà chiesto di impostare la lingua dell'interfaccia e il fuso orario. Quindi, clicca su `Salva`{.action} per continuare.

> [!primary]
>
> I fusi orari sono elencati secondo [la norma UTC (tempo coordinato universale)](https://it.wikipedia.org/wiki/Tempo_coordinato_universale), e non in ordine alfabetico delle città.
>
> **Esempio**: per l'Europa occidentale si tratta di UTC +1 (Bruxelles, Copenaghen, Madrid, Parigi).

![useowa](images/use-owa-step2.png){.thumbnail}

D'ora in poi, la tua casella di posta in arrivo apparirà come impostazione predefinita non appena effettui l'accesso.

![useowa](images/use-owa-step3.png){.thumbnail}

### Comprendere la visualizzazione di OWA

L'interfaccia OWA è composta da diverse sezioni. Fai riferimento alla tabella e all'immagine seguenti per familiarizzare con essa.

|Sezioni|Descrizione|  
|---|---|  
|Sezione superiore (1)|Comprende due barre di schede: la prima consente di accedere alle impostazioni generali (come la [sezione Opzioni](./#accedere-alla-sezione-opzioni)). La seconda barra può essere utilizzata per azioni specifiche con il tuo indirizzo (come l'invio o la risposta alle e-mail).|  
|Lato sinistro (2)|Visualizza l'elenco delle cartelle del tuo indirizzo e-mail. Queste cartelle si presentano sotto forma di una struttura ad albero che puoi espandere o nascondere.|
|Sezione centrale (3)|Visualizza l'elenco dei messaggi (letti e non letti) della cartella selezionata nel menu a sinistra. Questa sezione può anche visualizzare i risultati delle ricerche.|
|Lato destro (4)|Visualizza il riquadro di lettura quando viene selezionata un'e-mail.|

![useowa](images/use-owa-step4.png){.thumbnail}

Nota che puoi modificare le dimensioni delle sezioni verticali cliccando e trascinando le linee dei loro bordi.

### Visualizzare le e-mail

Per consultare le tue e-mail, seleziona una cartella sul lato sinistro. Le e-mail in arrivo che non vengono elaborate dalle regole di posta vengono visualizzate nella cartella "Posta in arrivo". Per sapere se hai ricevuto nuove e-mail, controlla se appare un numero accanto alla cartella corrispondente.

![useowa](images/use-owa-step5.png){.thumbnail}

Per leggere un'e-mail, seleziona la sua cartella se necessario. Quindi clicca sull'e-mail per visualizzarne il contenuto nel riquadro di lettura. I messaggi non letti appaiono in grassetto per distinguerli da quelli già letti.

![useowa](images/use-owa-step6.png){.thumbnail}

### Ordinare e filtrare le e-mail

In alto a destra dell'elenco dei messaggi, il pulsante `Filtro`{.action} apre un menu che raggruppa tutte le opzioni di visualizzazione della cartella selezionata.

- **Filtra per categoria**: seleziona una voce per visualizzare solo una selezione di e-mail tra `Tutto`{.action}, `Non letto`{.action}, `A me`{.action} (e-mail indirizzate direttamente al tuo indirizzo), `Con contrassegno`{.action} (e-mail contrassegnate per il completamento) o `Menzioni`{.action} (e-mail in cui è menzionato il tuo indirizzo).

- **Ordina per**: passa il cursore sulla voce `Ordina per`{.action} per scegliere il criterio di ordinamento delle e-mail: **Data**, **Da**, **A**, **Oggetto**, **Allegati**, **Importanza** o **Dimensioni**. La freccia a sinistra del criterio indica l'ordine corrente; clicca nuovamente sullo stesso criterio per invertirlo.

- **Visualizza come**: passa il cursore sulla voce `Visualizza come`{.action} per passare dalla visualizzazione **Messaggi** (un'e-mail per riga) a **Conversazioni** (e-mail raggruppate per conversazione).

### Inviare e rispondere

Per **inviare un nuovo messaggio**, clicca sull'icona `Nuovo`{.action} in alto nell'interfaccia OWA. Il riquadro di composizione apparirà sul lato destro. Compila i campi della tua e-mail (destinatari, oggetto, corpo del messaggio, allegati). Clicca su `Invia`{.action} una volta redatta l'e-mail.

![useowa](images/use-owa-step7.png){.thumbnail}

Per **rispondere a un messaggio**, cliccaci prima sopra per visualizzarlo. Quindi clicca su `Rispondi a tutti`{.action} per rispondere a tutti i destinatari. Utilizza il pulsante con la freccia verso il basso se desideri rispondere solo al mittente dell'e-mail (escludendo eventuali destinatari in copia), clicca su `Rispondi`{.action}.

![useowa](images/use-owa-step8.png){.thumbnail}

Quando scegli di rispondere, l'editor di risposta rapida apparirà sopra l'e-mail. Componi qui la tua risposta e, non appena sei pronto a inviare il messaggio, clicca su `Invia`{.action}. Nota che per ciascuna opzione di risposta (come l'aggiunta di una firma) è necessario prima estenderla all'intero pannello di composizione cliccando sul simbolo della doppia freccia.

![useowa](images/use-owa-step9.png){.thumbnail}

### Organizzare la propria casella di posta

OWA propone diverse modalità per organizzare la tua casella di posta. Puoi:

- [creare cartelle e sottocartelle](./#creare-una-cartella),
- [spostare le e-mail](./#spostare-le-e-mail),
- [definire regole](./#creare-regole-di-gestione-della-posta) per eseguire automaticamente azioni alla ricezione di una nuova e-mail,
- [bloccare un mittente](./#bloccare-un-mittente) per non ricevere più i suoi messaggi.

#### Creare una cartella

Per creare una nuova cartella, fai clic con il tasto destro sul nome del tuo indirizzo e-mail nella struttura ad albero delle cartelle, quindi scegli `Crea nuova cartella`{.action}. Puoi creare una sottocartella in cartelle esistenti allo stesso modo cliccando su `Crea nuova sottocartella`{.action}.

![useowa](images/use-owa-step10.png){.thumbnail}

#### Spostare le e-mail

Per **spostare un'e-mail**, puoi semplicemente trascinarla nella cartella di destinazione oppure fare clic con il tasto destro e selezionare `Sposta`{.action}.
Per **spostare più e-mail** contemporaneamente, selezionale tutte tramite la relativa casella di controllo. Quindi clicca su `Sposta`{.action} (sul lato destro) o su `Sposta in`{.action} (nella sezione superiore). Scegli quindi la cartella di destinazione.

![useowa](images/use-owa-step11.png){.thumbnail}

#### Creare regole di gestione della posta

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4?start=48" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Per creare e gestire le regole, clicca prima sull'icona a forma di ingranaggio in alto, quindi su `Opzioni`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Nella nuova pagina che si apre, clicca su `Regole della posta in arrivo e di archiviazione`{.action} che si trova nel menu a sinistra. Nella struttura ad albero "Opzioni" puoi trovare questa funzionalità in "Posta", sotto "Elaborazione automatica". Da qui puoi creare, modificare e spostare le regole nell'elenco.

Per aggiungere una nuova regola, clicca sul pulsante `+`{.action}.

![useowa](images/use-owa-step13.png){.thumbnail}

Inserisci le informazioni richieste in base all'attività che vuoi eseguire con questa regola. Quindi clicca su `OK`{.action}.

![useowa](images/use-owa-step14.png){.thumbnail}

Per istruzioni più dettagliate sulla creazione di regole di gestione della posta, consulta la nostra guida: [Creazione di regole di gestione della posta su OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

#### Bloccare un mittente

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/Ivad4FgJ2No" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Clicca sull'icona dell'ingranaggio in alto a destra, quindi clicca su `Opzioni`{.action}. Sempre nella colonna di sinistra, sfoglia la struttura ad albero "Posta" sotto "Account", quindi "Blocca o autorizza".

Nella sezione "**Mittenti bloccati**", digita un indirizzo e-mail o un nome di dominio da bloccare, quindi clicca sul pulsante `+`{.action} per aggiungerlo all'elenco.

![useowa](images/owa_exchange_block.png){.thumbnail}

### Gestire i contatti

Per gestire i tuoi contatti, clicca prima sul pulsante blu di avvio applicazioni in alto a sinistra della pagina (che dà accesso anche al calendario, alle attività e ad altri moduli), quindi su `Contatti`{.action}.

![useowa](images/use-owa-step15.png){.thumbnail}

Nella nuova pagina puoi aggiungere un nuovo contatto, creare un elenco di contatti ed eliminare contatti esistenti.

#### Aggiungere un contatto

Clicca su `Nuovo`{.action}, quindi inserisci i dati del contatto da aggiungere. Una volta fatto, clicca su `Salva`{.action}.

![useowa](images/use-owa-step16.png){.thumbnail}

#### Creare un elenco di contatti

Clicca sulla freccia verso il basso accanto a `Nuovo`{.action}, quindi su `Elenco contatti`{.action}. Assegna un nome, aggiungi i contatti e clicca su `Salva`{.action}.

![useowa](images/use-owa-step17.png){.thumbnail}

### Modificare la password

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/z1D2wc7XWX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Puoi modificare la password del tuo account quando sei connesso a OWA. Per farlo, clicca sull'icona a forma di ingranaggio in alto, quindi clicca su `Opzioni`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Nella nuova pagina, espandi la scheda "Generale" nella struttura ad albero a sinistra, quindi clicca su `Il mio account`{.action}. Infine, clicca su `Modifica password`{.action}.

![useowa](images/use-owa-step18.png){.thumbnail}

Nella nuova finestra che si apre, inserisci la tua password attuale. Inserisci poi una nuova password, quindi confermala digitandola di nuovo. Clicca su `Salva`{.action} per salvare la nuova password.

> [!primary]
>
> Non dimenticare di inserire la tua nuova password su tutti i dispositivi utilizzati per accedere a questo account (ad esempio nel client di posta). In caso di difficoltà con la tua password, contatta l'amministratore dei servizi.

![useowa](images/use-owa-step19.png){.thumbnail}

### Aggiungere la risposta automatica

Su OWA puoi creare un risponditore automatico nella tua casella di posta per non lasciare le e-mail senza risposta durante le tue assenze. Per farlo, clicca sull'icona dell'ingranaggio in alto, quindi clicca su `Risposte automatiche`{.action}.

![useowa](images/use-owa-step20.png){.thumbnail}

Nella finestra che si apre, seleziona l'opzione "Invia risposte automatiche". Puoi quindi configurare il risponditore automatico in modo che risponda a diversi criteri, ad esempio:

- inviare e-mail di risposta automatica per un intervallo di tempo prestabilito, oppure in modo continuo finché non viene disattivato manualmente
- definire i mittenti che riceveranno le e-mail di risposta automatica (solo mittenti interni, oppure includendo i mittenti esterni)

Inserisci le informazioni richieste in base all'attività che vuoi eseguire grazie a questa regola. Una volta fatto, clicca su `OK`{.action}.

![useowa](images/use-owa-step21.png){.thumbnail}

Per istruzioni più dettagliate sulla creazione di risposte automatiche, consulta la nostra guida: [Creare un risponditore automatico su OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Aggiungere una firma

Per aggiungere una firma elettronica, clicca sull'icona dell'ingranaggio in alto, quindi clicca su `Opzioni`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Sul lato sinistro della nuova pagina, clicca su `Firma di posta elettronica`{.action}. Nelle opzioni della struttura ad albero, questo elemento si trova sotto "Posta" e "Layout". Da qui puoi attivare, disattivare e modificare la firma.

![useowa](images/use-owa-step22.png){.thumbnail}

Componi la tua firma elettronica nel riquadro dell'editor. Puoi specificare se desideri includere la firma predefinita solo nelle nuove e-mail oppure anche nelle risposte e nelle e-mail inoltrate. Una volta terminato, clicca su `Salva`{.action} per confermare.

Per istruzioni sulla creazione di firme automatiche utilizzando modelli per l'intero dominio, consulta la nostra guida: [Creare firme automatiche](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_footers).

### Accedere alla sezione Opzioni

Per accedere a tutte le tue impostazioni, clicca sull'icona a forma di ingranaggio in alto, quindi clicca su `Opzioni`{.action}.

![useowa](images/use-owa-step12.png){.thumbnail}

Puoi quindi navigare nella struttura ad albero "Opzioni" sul lato sinistro della pagina. Da questa pagina è possibile effettuare ulteriori regolazioni alla presentazione e al comportamento del tuo account di posta. Nota che, per motivi di sicurezza, alcune opzioni dell'account possono essere disattivate da OVHcloud.

![useowa](images/use-owa-step23.png){.thumbnail}

### Gestione dei cookie

La webmail utilizzata per le nostre offerte e-mail si basa sul software Microsoft Outlook Web App. È quindi suscettibile di scambiare metadati con i server di Microsoft, sotto forma di cookie denominati `appsforoffice.microsoft.com`.

Se desideri disattivare questi scambi, puoi utilizzare sul tuo browser un'estensione di tipo bloccatore di contenuti (come uBlock Origin o Ghostery).
La disattivazione di questi cookie può tuttavia compromettere la stabilità della tua webmail.

## Per saperne di più

[Creare risposte automatiche su OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies)

[Condividere una cartella dall'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_directory_sharing)

[Condividere calendari tramite l'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_calendar_sharing)

[Creare un gruppo di contatti](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/feature_groups)

Contatta la nostra [Community di utenti](/links/community).
