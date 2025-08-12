---
title: 'Utilizzare gli alias e i reindirizzamenti email'
excerpt: 'Come gestire gli alias e i reindirizzamenti email'
updated: 2025-06-03
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

## Obiettivo

In questa guida ti forniamo informazioni e suggerimenti sulla configurazione dei tuoi **reindirizzamenti** e **alias** email, ad esempio per inviare nuovamente email ricevute su un indirizzo A verso un indirizzo B.

![emails](images/schema-redirect00.png){.thumbnail}

**Come gestire gli alias e i reindirizzamenti email.**

/// details | Che cos’è un reindirizzamento email?

Un reindirizzamento permette di modificare il percorso iniziale di un'email verso uno o più indirizzi email.

Ad esempi: desiderate che all'invio di un'email su **contact@mydomain.ovh**, quest'ultima sia ugualmente rinviata verso **john.smith@otherdomain.ovh**. In questo modo è possibile inviare automaticamente un'email da **contact@mydomain.ovh** a **john.smith@otherdomain.ovh**.

///

/// details | Cos'è un alias email?

Diversamente dal reindirizzamento, l'indirizzo email associato all'alias non è un indirizzo consultabile ma è una "maschera".

Creare un alias per il tuo indirizzo email ti permette di comunicare un indirizzo "mask" ai tuoi contatti, senza dover comunicare il tuo indirizzo email personale al mittente. Un indirizzo email può avere diversi alias.

Ad esempio: il tuo indirizzo email è **john.smith@mydomain.ovh** e il tuo alias **information@mydomain.ovh**. Puoi così comunicare ai tuoi contatti l'indirizzo **information@mydomain.ovh** e ricevere le tue email su **john.smith@mydomain.ovh**, senza che il mittente sia a conoscenza di **john.smith@mydomain.ovh**.

///

/// details | Reindirizzamento e alias in immagine <a name="diagram"></a>

Fare clic sulle schede seguenti per illustrare il funzionamento di alias e reindirizzamenti.

- `From`: È l’indirizzo del mittente.
- `To`: Indica l’indirizzo del destinatario.
- `Redirect to`: Indica l’indirizzo email di reindirizzamento configurato.

> [!tabs]
> **1. Reindirizzamento semplice**
>>
>> L’email viene reindirizzata direttamente verso l’indirizzo di reindirizzamento, il destinatario iniziale non riceve l’email.
>>
>> ![email](images/schema-redirect01.png){.thumbnail}
>>
> **2. Reindirizzamento con copia in locale**
>>
>> L’email viene trasmessa al destinatario iniziale e all’indirizzo di reindirizzamento.
>>
>> ![email](images/schema-redirect02.png){.thumbnail}
>>
> **3. Alias email**
>>
>> L'email è indirizzata all'alias che lo rinvia al destinatario sul quale l'alias è stato configurato. La dicitura `Received by` indica l’indirizzo email che riceve l’email.
>>
>> ![email](images/schema-redirect03.png){.thumbnail}
>>

> [!primary]
>
> Ti ricordiamo che è possibile configurare un reindirizzamento verso più indirizzi email. Questo implica tuttavia la creazione uno per uno dei reindirizzamenti verso ogni destinatario.

///

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Disporre di una soluzione email OVHcloud precedentemente configurata, tra le seguenti:
    - **MX Plan** proposta con le nostre [offerte di hosting Web](/links/web/hosting) o inclusa in un [hosting gratuito 100M](/links/web/domains-free-hosting).
    - [Exchange](/links/web/emails).
    - [Email Pro](/links/web/email-pro).
    - [Zimbra](/links/web/emails-zimbra).

## Procedura

Questa guida si applica a tutte le nostre offerte di posta elettronica. La gestione degli alias e dei reindirizzamenti può essere effettuata dallo Spazio Cliente OVHcloud o dalla Webmail, in base all’offerta. Per maggiore chiarezza, indichiamo i tipi di offerte email interessate in ogni capitolo di questa guida. Ecco i diversi tipi di offerte di posta elettronica OVHcloud:

- **MX Plan Roundcube**: Corrisponde alla soluzione MX Plan che utilizza la webmail Roundcube.
- **MX Plan Zimbra**: Corrisponde alla soluzione MX Plan che utilizza la webmail Zimbra.
- **MX Plan OWA**: Corrisponde alla soluzione MX Plan che utilizza la webmail Outlook Web App (OWA).
- **Exchange**: Si applica alle offerte **Hosted**, **Private** e **Dedicated** Exchange utilizzando la webmail Outlook Web App (OWA).
- **Email Pro**: Offerta Email basata su Exchange con webmail Outlook Web App (OWA).
- **Zimbra**: Offerta dedicata che utilizza la Webmail Zimbra.
- **Redirect**: Quest'offerta gratuita è automaticamente disponibile se hai un dominio nel tuo Spazio Cliente senza offerta email associata. Permette di creare reindirizzamenti email.

> [!primary]
>
> La tecnologia di posta del servizio MX Plan può variare in base alla data di attivazione del servizio o in caso di una recente migrazione. Questa tecnologia si distingue soprattutto per l'interfaccia della sua Webmail. Per identificarlo dallo Spazio Cliente, segui questa procedura:
>
> 1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
> 1. Accedi alla sezione `Web Cloud`{.action}.
> 1. Clicca su `MX Plan`{.action}.
> 1. Seleziona il dominio interessato.
> 1. La scheda `Informazioni generali`{.action} è selezionata di default.
> 1. Prendi nota della tecnologia utilizzata sotto la voce **Webmail** nel riquadro `Abbonamento`.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-640}
>

**Riepilogo**

- [Creare un reindirizzamento](#redirect)
    - [Dallo Spazio Cliente OVH](#redirect-manager)
        - [MX Plan / redirect](#redirect-manager-mxplan)
     - [Dalla webmail](#redirect-webmail)
        - [Outlook Web App (OWA)](#redirect-webmail-owa)
        - [Zimbra](#redirect-webmail-zimbra)
- [Elimina un reindirizzamento](#redirect-delete)
    - [MX Plan dallo Spazio Cliente OVH](#redirect-delete)
    - [Outlook Web App (OWA)](#redirect-delete-owa)
    - [Zimbra](#redirect-delete-zimbra)
- [Crea un alias](#alias)
    - [Exchange / Email Pro / MX Plan](#alias-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-mxplan-roundcube)
    - [Zimbra](#alias-mxplan-roundcube)
- [Elimina un alias](#alias-delete)
    - [Exchange / Email Pro / MX Plan](#alias-delete-exchange-emp-mxplan)
    - [MX Plan Roundcube](#alias-delete-mxplan-roundcube)
    - [Zimbra](#alias-delete-zimbra)

### Creare un reindirizzamento <a name="redirect"></a>

#### Dallo Spazio Cliente <a name="redirect-manager"></a>

Al momento, solo le offerte **MX plan** e **Redirect** dispongono di un’interfaccia di gestione dei reindirizzamenti tramite lo Spazio Cliente OVHcloud.

##### MX Plan / redirect <a name="redirect-manager-mxplan"></a>

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
1. Accedi alla sezione `Web Cloud`{.action}.
1. Clicca su `MX Plan`{.action}.
1. Seleziona il dominio interessato.

Nel nostro esempio, si tratta di un **reindirizzamento con copia in locale** (vedi lo [schema 2](#diagram) all'inizio di questa guida). Se ciò corrisponde alle tue necessità, segui gli step indicati qui sotto nella scheda corrispondente alla tecnologia Webmail utilizzata dal tuo MX Plan:

> [!tabs]
> **MX Plan Roundcube/MX Plan Outlook Web App/Redirect**
>>
>> Di default, ti trovi nella scheda `Informazioni generali`{.action} del tuo MX Plan. Clicca sulla scheda `Email`{.action} e poi sul pulsante `Gestisci i reindirizzamenti`{.action} a destra.
>>
>> ![email](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> Visualizzi la tabella dei reindirizzamenti già attivi. Clicca sul pulsante `Aggiungi un reindirizzamento`{.action}.
>>
>> ![email](images/mxplan-legacy-2.png){.thumbnail .w-640}
>>
>> Nel modulo `Crea un reindirizzamento`, completa gli elementi seguenti:
>>
>> - **Dall'indirizzo**: Inserisci qui l'indirizzo email che vuoi reindirizzare.
>> - **All'indirizzo**: Inserisci qui l'indirizzo di destinazione del tuo reindirizzamento. Può trattarsi di uno dei tuoi indirizzi email OVHcloud o di un indirizzo email esterno.
>> - **Scegli una modalità di copia**: Scegli se vuoi:
>>      - **Conservare una copia dell’email in OVHcloud**: Ricevi l’email sul tuo indirizzo principale e l’indirizzo di reindirizzamento (vedi lo [schema 2](#diagram) all’inizio di questa guida).
>>      - **Non conservare una copia delle email**: Reindirizzare direttamente verso l'indirizzo di reindirizzamento senza che l'indirizzo principale lo riceva (vedi lo [schema 1](#diagram) all'inizio di questa guida).
>>
>> Clicca su `Conferma`{.action} per aggiungere il reindirizzamento.
>>
>> ![email](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>
>> > [!primary]
>> >
>> > Per modificare l'indirizzo di destinazione o eliminare un reindirizzamento, clicca su `...`{.action}, a destra del reindirizzamento in questione.
>>
> **MX Plan Zimbra**
>>
>> Di default, ti trovi nella scheda `Informazioni generali`{.action} del tuo MX Plan. Clicca sulla scheda `Reindirizzamenti`{.action}.
>>
>> Visualizzi la tabella dei reindirizzamenti già attivi. Clicca sul pulsante `Aggiungi un reindirizzamento`{.action}.
>>
>> ![email](images/mxplan-zimbra-1.png){.thumbnail .w-640}
>>
>> Nel modulo `Crea reindirizzamento`, completa gli elementi seguenti:
>>
>> - **Dall'indirizzo**: Inserisci qui l'indirizzo email che vuoi reindirizzare.
>> - **All'indirizzo**: Inserisci qui l'indirizzo di destinazione del tuo reindirizzamento. Può trattarsi di uno dei tuoi indirizzi email OVHcloud o di un indirizzo email esterno.
>> - **Scegli una modalità di copia**: Scegli se vuoi:
>>      - **Conserva una copia dell’email in OVHcloud**: Ricevi l’email sul tuo indirizzo principale e l’indirizzo di reindirizzamento (vedi lo [schema 2](#diagram) all’inizio di questa guida).
>>      - **Non conservare una copia delle email**: Reindirizzare direttamente verso l'indirizzo di reindirizzamento senza che l'indirizzo principale lo riceva (vedi lo [schema 1](#diagram) all'inizio di questa guida).
>>
>> Clicca su `Conferma`{.action} per aggiungere il reindirizzamento.
>>
>> ![email](images/mxplan-legacy-3.png){.thumbnail .w-640}
>>

> [!primary]
>
> Quando scegli la modalità di copia "**Conserva una copia dell’email in OVHcloud**", nell’elenco dei reindirizzamenti viene automaticamente creato un reindirizzamento dell’indirizzo email verso sé stesso che materializza la copia locale.
>

#### Dalla webmail <a name="redirect-webmail"></a>

Accedi alla [webmail](/links/web/email). Inserisci **l'indirizzo email** e la **password** per effettuare l'accesso.

![email](images/webmail.png){.thumbnail}

Per creare un reindirizzamento, è possibile utilizzare le regole della posta in arrivo, chiamate anche "filtri" nella Webmail. Queste regole, applicate al momento della ricezione di un’email, permettono di trasferire o reindirizzare un’email in entrata.

##### Outlook Web App (OWA) <a name="redirect-webmail-owa"></a>

> [!success]
>
> Il presente capitolo si riferisce alle seguenti offerte:
>
> - **MX Plan OWA**.
> - **Exchange**.
> - **Email Pro**.
>

Outlook Web App è un'interfaccia utilizzata per le nostre offerte **Exchange**, **Email Pro** e una parte degli account **MX Plan**.

Sfoglia le schede qui sotto per impostare il reindirizzamento tramite Outlook Web App:

> [!tabs]
> **Step 1**
>>
>> Una volta connesso al tuo indirizzo email tramite la [webmail](/links/web/email), clicca sull’icona a forma di ingranaggio in alto a destra e poi su `Opzioni`{.action}.
>>
>> ![email](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Dalla finestra **Opzioni**, nella colonna di sinistra, vai alla categoria **Elaborazione automatica** della sezione **Posta** e clicca su `Regole Posta in arrivo e organizzazione`{.action}.
>>
>> ![email](images/emails-all-02.png){.thumbnail .w-640}
>>
>> Questa finestra permette di gestire i reindirizzamenti e di applicare filtri su tutte le email in arrivo.
>>
> **Step 3**
>>
>> Nella finestra di gestione dei **Regole Posta in arrivo**, clicca sull’icona `+`{.action} in alto a sinistra.
>>
>> ![email](images/emails-all-03.png){.thumbnail .w-640}
>>
> **Step 4**
>>
>> Nella nuova finestra, completa i campi:
>> - **Nome**: Definisci il nome del tuo reindirizzamento.
>> - **Quando il messaggio arriva e soddisfa tutte queste condizioni**: Se il reindirizzamento si applica a tutti i messaggi, seleziona `[Applica a tutti i messaggi]`{.action}.
>>
>> ![email](images/emails-all-04.png){.thumbnail .w-640}
>>
> **Step 5**
>>
>> In seguito, nella stessa finestra:
>>
>> **Esegui tutte le operazioni seguenti**: Applica il reindirizzamento. Seleziona `Trasferisci, reindirizza o invia`{.action} poi `Reindirizza il messaggio verso...`{.action}.
>>
>> ![email](images/emails-all-05.png){.thumbnail .w-640}
>>
> **Step 6**
>>
>> Inserisci l’indirizzo verso cui vuoi reindirizzare l’email davanti a "**Reindirizza il messaggio verso..**" e clicca su `Salva`{.action}. Clicca su `OK`{.action} (icona del floppy disk) per completare il reindirizzamento.
>>
>> ![email](images/emails-all-06.png){.thumbnail .w-640}
>>

> [!primary]
>
> Per applicare un **reindirizzamento semplice** (vedi lo [schema 1](#diagram) all'inizio di questa guida), aggiungi una regola supplementare al tuo **reindirizzamento con copia locale** da questa finestra. Clicca su `Aggiungi un'azione`{.action} (riquadro 1), su `Sposta, copia o elimina`{.action} e infine clicca su `elimina il messaggio`{.action}. Questa regola sposta il messaggio direttamente nel cestino, dopo averlo reindirizzato all'indirizzo di reindirizzamento.
>
> ![email](images/emails-all-07.png){.thumbnail .w-640}
>

##### Zimbra <a name="redirect-webmail-zimbra"></a>

> [!success]
>
> Il presente capitolo si riferisce alle seguenti offerte:
>
> - **MX Plan** con la dicitura zimbra per la webmail.
> - **Zimbra**.
>

Per reindirizzare le email dal tuo account Zimbra verso un altro indirizzo email, applicheremo una regola di trasferimento.

> [!primary]
>
> Nel nostro esempio qui sotto, abbiamo scelto di reindirizzare tutte le email in arrivo verso un altro indirizzo email. Per comprendere l’esempio negli screenshot, siamo collegati all’indirizzo **zimbra@mydomain.ovh** e desideriamo reindirizzare le email di questo account verso l’indirizzo **address@example.com**.
>

Per impostare il reindirizzamento, segui le indicazioni riportate di seguito.

> [!tabs]
> **Step 1**
>>
>> Clicca sul pulsante &#9881; in alto a destra della tua finestra di webmail, poi clicca su `Impostazioni`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Clicca sulla sezione `Filtri`{.action} dalla finestra delle impostazioni e poi sul pulsante `Aggiungi un filtro`{.action}.
>>
>> ![zimbra](images/zimbra_redirection02.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> - Per impostare questa regola, fare clic su <u>Modalità avanzata</u> in alto a destra.
>> - Assegna un nome al filtro nella casella `Nome filtro`.
>> - Lascia il menu a tendina su `tutte` nella frase "Se un messaggio in arrivo soddisfa ... di queste condizioni".
>> - Nel primo menu a tendina delle regole, seleziona `A` (To), lascia `contiene` (contains), quindi inserisci l’indirizzo email a cui sei connesso nella casella a destra.
>> - Sotto la voce "Allora" (Then), seleziona `Trasferisci a` (Forward to) nel menu a tendina, poi inserisci l’indirizzo email di destinazione.
>> - Clicca su `+ Aggiungi azione`{.action} (Add an action) in basso e seleziona `Sposta nella cartella Posta in arrivo` (Keep in Inbox).
>> - Clicca su `Salva`{.action} dalla finestra del tuo filtro e anche da quella delle impostazioni.
>>
>> ![zimbra](images/zimbra_redirection03.png){.thumbnail .w-640}
>>

Per maggiori informazioni sull’utilizzo della webmail Zimbra, consulta la nostra guida "[Utilizzare la webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".

#### Elimina un reindirizzamento <a name="redirect-delete"></a>

##### MX Plan dallo Spazio Cliente <a name="redirect-delete-mxplan"></a>

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
1. Accedi alla sezione `Web Cloud`{.action}.
1. Clicca su `MX Plan`{.action}.
1. Seleziona il dominio interessato.

Seleziona qui sotto la scheda corrispondente alla tecnologia email utilizzata dal tuo servizio MX Plan:

> [!tabs]
> **MX Plan Roundcube/MX Plan OWA/Redirect**
>>
>> - Di default, ti trovi nella scheda `Informazioni generali`{.action} del tuo MX Plan.
>> - Clicca sulla scheda `Email`{.action} e poi a destra sul pulsante `Gestione dei reindirizzamenti`{.action}.
>>
>>    ![email](images/mxplan-legacy-1.png){.thumbnail .w-640}
>>
>> - Clicca su `...`{.action}, a destra del reindirizzamento interessato, poi su `Elimina il reindirizzamento`{.action}.
>>
>>    ![email](images/mxplan-redirect-delete01.png){.thumbnail .w-640}
>>
> **MX Plan Zimbra**
>>
>> - Di default, ti trovi nella scheda `Informazioni generali`{.action} del tuo MX Plan.
>> - Clicca sulla scheda `Reindirizzamenti`{.action}.
>> - Clicca su `...`{.action}, a destra del reindirizzamento interessato, poi su `Elimina il reindirizzamento`{.action}.
>>
>>    ![email](images/mxplan-redirect-delete02.png){.thumbnail .w-640}
>>

##### Outlook Web App (OWA) <a name="redirect-delete-owa"></a>

Accedi alla [webmail](/links/web/email). Inserisci **l'indirizzo email** e la **password** per effettuare l'accesso. Dall’interfaccia della Webmail OWA, segui gli step cliccando sulle schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Una volta connesso all’interfaccia della Webmail OWA, clicca sull’icona a forma di ingranaggio in alto a destra e poi su `Opzioni`{.action}.
>>
>> ![email](images/emails-all-01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Dalla finestra **Opzioni**, nella colonna di sinistra, vai alla categoria **Elaborazione automatica** della sezione **Posta** e clicca su `Regole Posta in arrivo e organizzazione`{.action}.
>>
>> ![email](images/owa-redirect-del-01.png){.thumbnail .w-640}
>>
>> Troverai la finestra che ti permette di gestire i reindirizzamenti e i filtri.
>>
> **Step 3**
>>
>> Nella finestra di gestione dei **Regole Posta in arrivo**, fare clic sul reindirizzamento che si desidera eliminare, dovrebbe essere evidenziato. Clicca sull’icona del cestino.
>>
>> ![email](images/owa-redirect-del-02.png){.thumbnail .w-640}
>>

##### Zimbra <a name="redirect-delete-zimbra"></a>

Accedi alla [webmail](/links/web/email). Inserisci **l'indirizzo email** e la **password** per effettuare l'accesso. Dall’interfaccia della Webmail Zimbra, segui gli step cliccando sulle schede qui sotto:

> [!tabs]
> **Step 1**
>>
>> Una volta connesso all’interfaccia della webmail Zimbra, clicca sul pulsante &#9881; in alto a destra della tua finestra di webmail, poi clicca su `Impostazioni`{.action}.
>>
>> ![zimbra](images/zimbra_settings01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Clicca sulla sezione `Filtri`{.action} dalla finestra dei parametri.
>>
>> ![zimbra](images/zimbra_redirect-del-01.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> Clicca sul pulsante `...`{.action} a destra del filtro interessato e poi clicca su `Elimina`{.action}.
>>
>> ![zimbra](images/zimbra_redirect-del-02.png){.thumbnail .w-640}
>>

### Creare un alias <a name="alias"></a>

La creazione di un alias per l’indirizzo email permette di comunicare un indirizzo "nascosto" ai propri contatti, senza dover comunicare il proprio indirizzo email personale al mittente.

#### Exchange / Email Pro / MX Plan <a name="alias-exchange-emp-mxplan"></a>

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`. In seguito seleziona il menu in base al tuo servizio di posta:

- **Exchange**: Accedi alla sezione `Microsoft`{.action}, clicca su `Exchange`{.action} e seleziona la piattaforma interessata. Clicca sulla scheda `Account email`{.action}.

- **Email Pro**: Accedi alla sezione `Email Pro`{.action}, seleziona il servizio interessato e clicca sulla scheda `Account email`{.action}.

- **MX Plan**: Accedi alla sezione `MX Plan`{.action}, seleziona il servizio interessato e clicca sulla scheda `Account email`{.action}.

Per aggiungere un alias al tuo account email, segui la procedura descritta cliccando su ciascuna scheda qui sotto:

> [!tabs]
> **Step 1**
>>
>> Nella tabella che appare, troverai una colonna `Alias`.
>>
>> ![email](images/email-alias012.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Clicca sul pulsante `...`{.action} e poi su `Configura alias`{.action} (o `Gestisci alias`{.action}).
>>
>> ![email](images/email-alias02.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> Clicca su `Aggiungi un alias`{.action} poi inserisci l’indirizzo che hai scelto per il tuo alias e conferma la tua scelta.
>>
>> ![email](images/email-alias03.png){.thumbnail .w-640}

#### MX Plan Roundcube <a name="alias-mxplan-roundcube"></a>

Per creare un alias su un account email MX Plan Roundcube, è necessario farlo allo stesso modo di un reindirizzamento. È sufficiente determinare un indirizzo email che non esiste sul tuo dominio e puntare verso un indirizzo esistente. Segui il capitolo [MX Plan / MX redirect](#redirect-manager-mxplan) nella sezione "Creare un reindirizzamento" di questa guida.

#### Zimbra <a name="alias-mxplan-roundcube"></a>

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
1. Accedi alla sezione `Web Cloud`{.action}.
1. Clicca su `Zimbra Mail`{.action}.
1. Clicca sulla scheda `Account email`{.action} del servizio Zimbra.

> [!tabs]
> **Step 1**
>>
>> - clicca sul pulsante `⁝`{.action} in corrispondenza dell’account email interessato.
>> - Clicca su `Modifica`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Visualizzi la finestra di configurazione del tuo account email, clicca sulla scheda `Alias`{.action} più in alto.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> La finestra successiva conterrà l’elenco degli alias che puoi associare all’account interessato. Clicca sul pulsante `Crea un Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>
> **Step 4**
>>
>> Determina l'indirizzo dell'alias e seleziona uno dei domini associati al servizio Zimbra.
>>
>> ![zimbra](images/zimbra_alias04.png){.thumbnail .w-640}
>>

### Elimina un alias <a name="alias-delete"></a>

#### Exchange / Email Pro / MX Plan <a name="alias-delete-exchange-emp-mxplan"></a>

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. In seguito seleziona il menu in base al tuo servizio di posta:

- **Exchange**: Accedi alla sezione `Microsoft`{.action}, clicca su `Exchange`{.action} e seleziona la piattaforma interessata. Clicca sulla scheda `Account email`{.action}.

- **Email Pro**: Accedi alla sezione `Email Pro`{.action}, seleziona il servizio interessato e clicca sulla scheda `Account email`{.action}.

- **MX Plan**: Accedi alla sezione `MX Plan`{.action}, seleziona il servizio interessato e clicca sulla scheda `Account email`{.action}.

Nella scheda `Account email`{.action}, clicca sul pulsante `...`{.action} a destra dell’indirizzo email interessato. Clicca su `Configura gli alias`{.action} (o `Gestisci gli alias`{.action}).

Clicca sul pulsante `...`{.action} in corrispondenza dell’alias interessato, nel menu di gestione degli alias. Infine clicca su `Elimina l’alias`{.action}

![email](images/email-alias04.png){.thumbnail .w-640}

#### MX Plan Roundcube <a name="alias-delete-mxplan-roundcube"></a>

Per eliminare un alias da un account email MX Plan Roundcube, è necessario utilizzare lo stesso metodo utilizzato per il reindirizzamento. ed è quindi necessario effettuare una selezione per gestire i reindirizzamenti del servizio MX Plan.

Nella scheda `Email`{.action}, clicca su `Gestione dei reindirizzamenti`{.action} a destra della finestra.

Clicca sul pulsante `...`{.action} a destra del reindirizzamento in questione e poi clicca su `Elimina il reindirizzamento`{.action}.

> [!warning]
>
> Non è possibile modificare un reindirizzamento o un alias. È necessario eliminarla e quindi ricrearla.
>

![email](images/email-del-legacy-redirect01.png){.thumbnail .w-640}

#### Zimbra <a name="alias-delete-zimbra"></a>

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
1. Accedi alla sezione `Web Cloud`{.action}.
1. Clicca su `Zimbra Mail`{.action}.
1. Clicca sulla scheda `Account email`{.action} del servizio Zimbra.

> [!tabs]
> **Step 1**
>>
>> - Clicca sul pulsante `⁝`{.action} in corrispondenza dell’account email interessato.
>> - Clicca su `Modifica`{.action}.
>>
>> ![zimbra](images/zimbra_alias01.png){.thumbnail .w-640}
>>
> **Step 2**
>>
>> Visualizzi la finestra di configurazione del tuo account email, clicca sulla scheda `Alias`{.action} più in alto.
>>
>> ![zimbra](images/zimbra_alias02.png){.thumbnail .w-640}
>>
> **Step 3**
>>
>> La finestra successiva contiene l'elenco degli alias che è possibile associare all'account. Clicca sul pulsante `Crea un Alias`{.action}.
>>
>> ![zimbra](images/zimbra_alias03.png){.thumbnail .w-640}
>>
## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare il servizio MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Iniziare a utilizzare Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Iniziare a utilizzare il servizio Private Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_private)

[Iniziare a utilizzare Email Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Iniziare a utilizzare il servizio Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).