---
title: 'Utilizzare gli alias e i reindirizzamenti email'
excerpt: 'Come gestire gli alias e i reindirizzamenti email'
updated: 2024-06-10
---

<style>
.w-640 {
  max-width:640px !important;
}
</style>

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

In questa guida ti forniamo informazioni e suggerimenti sulla configurazione dei tuoi **reindirizzamenti** e **alias** email, ad esempio per inviare nuovamente email ricevute su un indirizzo A verso un indirizzo B.

![emails](images/schema-redirect00.png){.thumbnail}

**Come gestire gli alias e i reindirizzamenti email**

### Che cos’è un reindirizzamento email?

Un reindirizzamento permette di modificare il percorso iniziale di un'email verso uno o più indirizzi email.

Ad esempio, desiderate che all'invio di un'email su **contact@mydomain.ovh**, quest'ultima sia ugualmente rinviata verso **john.smith@otherdomain.ovh**. In questo modo è possibile inviare automaticamente un'email da **contact@mydomain.ovh** a **john.smith@otherdomain.ovh**.

### Cos'è un alias email?

Diversamente dal reindirizzamento, l'indirizzo email associato all'alias non è un indirizzo consultabile ma è una "maschera".

Creare un alias per il tuo indirizzo email ti permette di comunicare un indirizzo "mask" ai tuoi contatti, senza dover comunicare il tuo indirizzo email personale al mittente. Un indirizzo email può avere diversi alias.

Ad esempio, il tuo indirizzo email è **john.smith@mydomain.ovh** e il tuo alias **information@mydomain.ovh**. Puoi così comunicare ai tuoi contatti l'indirizzo **information@mydomain.ovh** e ricevere le tue email su **john.smith@mydomain.ovh**, senza che il mittente sia a conoscenza di **john.smith@mydomain.ovh**.

### Reindirizzamento e alias in immagine <a name="diagram"></a>

Fare clic sulle schede seguenti per illustrare il funzionamento di alias e reindirizzamenti.

- `From` è l’indirizzo del mittente
- `To` indica l’indirizzo del destinatario
- `Redirect to` indica l’indirizzo email di reindirizzamento configurato.

> [!tabs]
> **1. Reindirizzamento semplice**
>>
>> L’email viene reindirizzata direttamente verso l’indirizzo di reindirizzamento, il destinatario iniziale non riceve l’email.<br><br>
>> ![email](images/schema-redirect01.png){.thumbnail}
>>
> **2. Reindirizzamento con copia in locale**
>>
>> L’email viene trasmessa al destinatario iniziale e all’indirizzo di reindirizzamento.<br><br>
>> ![email](images/schema-redirect02.png){.thumbnail}
>>
> **3. Alias email**
>>
>> L'email è indirizzata all'alias che lo rinvia al destinatario sul quale l'alias è stato configurato. La voce `Received by` indica l’indirizzo email che riceve l’email.<br><br>
>> ![email](images/schema-redirect03.png){.thumbnail}
>>

> [!primary]
>
> Ti ricordiamo che è possibile configurare un reindirizzamento verso più indirizzi email. Questo implica tuttavia la creazione uno per uno dei reindirizzamenti verso ogni destinatario.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Disporre di una soluzione email OVHcloud configurata precedentemente (**MX Plan**, inclusa nelle nostre [soluzioni di hosting Web](/links/web/hosting), inclusa in un [Hosting gratuito 100M](/links/web/domains-free-hosting) o ordinata separatamente come soluzione autonoma, come [Hosted Exchange](/links/web/emails-hosted-exchange) o [Email Pro](/links/web/email-pro))

## Procedura

> [!warning]
>
>Le sezioni "[creare un reindirizzamento](#redirect)" e "[creare un alias](#alias)" riguardano tutte le nostre soluzioni di posta OVHcloud, **a meno che**:
>
> - se disponi della versione storica dell'offerta MXplan (per verificarla, consulta la riquadro qui sotto).
> - se hai un dominio registrato in OVHcloud senza un servizio email associato,
>
> Per entrambe le eccezioni, è possibile solo il reindirizzamento. Per maggiori informazioni, consulta il capitolo "[Creare un reindirizzamento o un alias su un'offerta MX Plan storico o un dominio senza offerta email](#mxplanlegacy)".
>

>
> In base alla data di attivazione della tua offerta MXplan o in caso di recente migrazione della soluzione, è possibile che tu disponga della versione storica o della nuova versione dell'offerta. Prima di proseguire, è necessario identificarla.<br>
>
> Accedi alla sezione `Web Cloud`{.action} dello [Spazio Cliente OVHcloud](/links/manager). Clicca su `Email`{.action} e seleziona il servizio MX Plan interessato. Prosegui nella lettura di questa guida in base alla versione di cui disponi:<br>
>
> |Vecchia versione della soluzione MX Plan|Nuova versione della soluzione MX Plan|
> |---|---|
> |![email](images/mxplan-starter-legacy.png){.thumbnail}<br> Il servizio è indicato nel riquadro “Abbonamento”|![email](images/mxplan-starter-new.png){.thumbnail}<br>Il servizio è indicato nel riquadro “Riepilogo”, sotto la voce `Referenza server`|
> |Continua la lettura alla sezione "[Versione storica dell'offerta MX Plan](#mxplanlegacy)"|Continua la lettura a [Creare un reindirizzamento](#redirect) o [Creare un alias](#alias)|

### Crea un reindirizzamento <a name="redirect"></a>

La gestione dei reindirizzamenti non avviene tramite lo Spazio Cliente, ma direttamente tramite la webmail dell'indirizzo email in questione.

Accedi alla [webmail](/links/web/email). Inserisci **l'indirizzo email** e la **password** per effettuare l'accesso.

![email](images/webmail.png){.thumbnail}

Nel nostro esempio, si tratta di un **reindirizzamento con copia in locale** (vedi lo [schema 2](#diagram) all’inizio di questa guida). Se questo è ciò di cui hai bisogno, clicca su `OK`{.action} (icona del floppy disk) in alto a sinistra e la regola diventa effettiva. Altrimenti, passa allo step successivo.

Per seguire gli step descritti, clicca su ciascuna scheda qui sotto:

> [!tabs]
> **Passo 1**
>>
>> Una volta connesso al tuo indirizzo email tramite la [webmail](/links/web/email), clicca sull'icona a forma di ingranaggio in alto a destra e poi su `Opzioni`{.action}.<br><br>
>> ![email](images/emails-all-01.png){.thumbnail}<br>
>>
> **Passo 2**
>> Dalla finestra **Opzioni**, nella colonna di sinistra, vai alla categoria **Elaborazione automatica** della sezione **Posta** e poi clicca su `Regole Posta in arrivo e posta`{.action}. <br><br>
>> ![email](images/emails-all-02.png){.thumbnail}<br><br>
>> Questa finestra permette di gestire i reindirizzamenti e applicare filtri su tutte le email in entrata.<br>
>>
> **Passo 3**
>>
>> Dalla pagina di gestione **Regole di Posta in arrivo**, clicca sul simbolo`+`{.action} in alto a sinistra.<br><br>
>> ![email](images/emails-all-03.png){.thumbnail}<br><br>
>>
> **Passo 4**
>>
>> **Nome**: definisci il nome del tuo reindirizzamento. <br>
>> **Quando il messaggio arriva e soddisfa tutte queste condizioni** : se il tuo reindirizzamento si applica a tutti i messaggi, seleziona `[Applica a tutti i messaggi]`{.action}.<br><br>
>> ![email](images/emails-all-04.png){.thumbnail .w-640}<br><br>
>>
> **Passo 5**
>>
>> **Esegui tutte le operazioni seguenti**: applica il reindirizzamento, seleziona `Trasferisci, reindirizza o invia`{.action}, quindi `Reindirizza il messaggio verso...`{.action}.<br><br>
>> ![email](images/emails-all-05.png){.thumbnail .w-640}<br><br>
>>
> **Passo 6**
>>
>> Dopodiché inserisci l'indirizzo verso cui vuoi reindirizzare l'email davanti a **Reindirizzare il messaggio verso...**. e poi clicca su `Salva`{.action}. Infine clicca su `OK`{.action} (icona del floppy disk) per completare il reindirizzamento.<br><br>
>> ![email](images/emails-all-06.png){.thumbnail .w-640}<br><br>
>>

> [!primary]
> Per applicare un **reindirizzamento semplice** (vedi [schema 1](#diagram) all'inizio di questa guida), aggiungi una regola aggiuntiva al tuo **reindirizzamento con copia in locale** da questa finestra. Clicca su `Aggiungi un'azione`{.action} (riquadro 1) e poi su `Sposta, copia o elimina`{.action} e infine clicca su `Elimina il messaggio`{.action}. Questa regola sposta il messaggio direttamente nel cestino, dopo averlo inoltrato all’altro indirizzo.<br><br>
> ![email](images/emails-all-07.png){.thumbnail .w-640}

### Elimina un reindirizzamento

Segui i passaggi descritti cliccando su ciascuna scheda qui sotto:

> [!tabs]
> **Step 1**
>> Una volta connesso al tuo indirizzo email tramite la [webmail](/links/web/email), clicca sull’icona a forma di ingranaggio in alto a destra e poi su `Opzioni`{.action}.<br><br><br>
>> ![email](images/owa-redirect-del-01.png){.thumbnail}<br>
>>
> **Step 2**
>> Dalla finestra **Opzioni**, nella colonna di sinistra, vai alla categoria **Elaborazione automatica** della sezione **Posta** e clicca su `Regole Posta in arrivo e organizzazione`{.action}. <br><br>
>> ![email](images/owa-redirect-del-01.png){.thumbnail}<br><br>
>> Troverai la finestra che ti consente di gestire i reindirizzamenti e i filtri.<br>
>>
> **Step 3**
>> Nella finestra di gestione dei **Regole Posta in arrivo**, fare clic sul reindirizzamento che si desidera eliminare, dovrebbe essere evidenziato. Clicca sull’icona del cestino<br><br>
>> ![email](images/owa-redirect-del-02.png){.thumbnail}<br><br>
>>

### Crea un alias <a name="alias"></a>

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`. Seleziona il menu in base al servizio di posta:

- **Exchange**: seleziona `Microsoft`{.action} e `Exchange`{.action}. Clicca sulla scheda `Account email`{.action}.

- **Email Pro**: in `Email Pro`{.action}, seleziona la piattaforma e clicca sulla scheda `Account email`{.action}.

- **Email** (MXplan): in `Email`{.action}, seleziona la piattaforma e clicca sulla scheda `Account email`{.action}.

Per aggiungere un alias al tuo account email, segui gli step descritti cliccando poi su ogni scheda qui sotto:

> [!tabs]
> **Passo 1**
>>
>> Visualizzi una tabella con la colonna `Alias`.<br><br>
>> ![email](images/email-alias012.png){.thumbnail}<br>
>>
> **Passo 2**
>>
>> Clicca sui tre puntini `...`{.action} e poi su `Configura gli alias`{.action} (o `Gestisci gli alias`{.action}).<br><br>
>> ![email](images/email-alias02.png){.thumbnail}<br>
>>
> **Passo 3**
>>
>> Clicca su `Aggiungi un alias`{.action} e inserisci l'indirizzo che hai scelto per il tuo alias e conferma la tua scelta.<br><br>
>> ![email](images/email-alias03.png){.thumbnail}<br>

### Elimina un alias

Dalla scheda `Account email`{.action}, clicca sul pulsante `...`{.action} a destra dell'indirizzo email in questione. Clicca su `Configura gli alias`{.action} (o `Gestisci gli alias`{.action}).

Clicca sui tre puntini `...`{.action} a destra dell'alias in questione nel menu di gestione degli alias. Infine clicca su `Elimina l'alias`{.action}

![email](images/email-alias04.png){.thumbnail}

### Creare un reindirizzamento o un alias su una soluzione MX Plan storica o un dominio senza offerta email <a name="mxplanlegacy"></a>

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla sezione `Web Cloud`. Clicca sulla sezione `Email`{.action}:

> [!warning]
>
> - Il metodo per creare un alias o un reindirizzamento è esattamente lo stesso.
> - è possibile creare fino a 2000 alias e reindirizzamenti, copie locali incluse.
>

Per seguire gli step descritti, clicca su ciascuna scheda qui sotto:

> [!tabs]
> **Passo 1**
>> Di default, ti trovi nella scheda `Informazioni generali`{.action} della tua soluzione MXPlan. Clicca sulla scheda `Email`{.action} e poi sul pulsante `Gestisci i reindirizzamenti`{.action} a destra.<br><br>
>> ![email](images/mxplan-legacy-1.png){.thumbnail}<br>
>>
> **Passo 2**
>>
>> Si apre la tabella dei reindirizzamenti già attivi. A destra, clicca su `Aggiungi un reindirizzamento`{.action}.<br><br>
>>
>> > [!primary]
>> >
>> > Per modificare o eliminare un reindirizzamento, clicca su `...`{.action}, a destra del reindirizzamento in questione.
>>
>> ![email](images/mxplan-legacy-2.png){.thumbnail}<br>
>>
> **Passo 3**
>>
>> **Dall'indirizzo**: inserisci qui l'indirizzo email che vuoi reindirizzare.<br><br>
>> **All'indirizzo**: inserisci qui l'indirizzo di destinazione del tuo reindirizzamento. Può essere uno dei tuoi indirizzi email OVHcloud o un account esterno.<br><br>
>> **Scegli una modalità di copia**: scegli se vuoi: <br> - **Conservare una copia dell'email in OVHcloud** (ricevere l'email sul tuo indirizzo principale e l'indirizzo di reindirizzamento)<br> *cf. lo [schema 2](#diagram) all'inizio di questa guida.*<br><br> - **Non conservare una copia dell'email** (inoltrare direttamente all'indirizzo di reindirizzamento senza che l'indirizzo principale lo riceva) <br> *cf. lo [schema 1](#diagram) all'inizio di questa guida.*<br><br>
>> Clicca su `Conferma`{.action} per aggiungere il reindirizzamento.<br><br>
>> ![email](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
>
> Quando scegli la modalità di copia "**Conserva una copia dell'email in OVHcloud**", viene automaticamente creato un reindirizzamento dell'indirizzo email verso se stesso nella lista dei reindirizzamenti, si materializza questa copia locale.
>

### Eliminare un reindirizzamento o un alias su una soluzione MX Plan storica o un dominio senza offerta email <a name="del-mxplanlegacy"></a>

Nella scheda `Email`{.action}, clicca su `Gestione dei reindirizzamenti`{.action} a destra della finestra.

Clicca sul pulsante `...`{.action} a destra del reindirizzamento in questione e poi clicca su `Elimina il reindirizzamento`{.action}.

> [!warning]
>
> Non è possibile modificare un reindirizzamento o un alias. È necessario eliminarla e quindi ricrearla.

![email](images/email-del-legacy-redirect01.png){.thumbnail}

## Per saperne di più <a name="go-further"></a>

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](https://community.ovh.com/en/).