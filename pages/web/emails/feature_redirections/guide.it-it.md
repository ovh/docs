---
title: 'Configura il reindirizzamento delle tue email'
excerpt: 'Come gestire il reindirizzamento delle tue email'
slug: servizio_email_configura_il_reindirizzamento_delle_tue_email
section: 'Funzionalità degli indirizzi email'
legacy_guide_number: g2001
---

**Ultimo aggiornamento: 22/01/2019**

## Obiettivo

In questa guida ti forniamo informazioni e suggerimenti su come configurare il reindirizzamento di email, ad esempio, per l’inoltro di email ricevute su un indirizzo A verso un indirizzo B.

## Informazioni generali

### Che cos’è un reindirizzamento email?

Un reindirizzamento email ti permette di inoltrare automaticamente un messaggio ricevuto su un account verso uno o più indirizzi email alternativi.

Ad esempio, se vuoi che l’invio di un’email su** tuoindirizzo@tuodominio.com**siano reindirizzati verso ** tuoaltroindirizzo@altrodominio.com**. In questo modo, puoi comunicare il tuo primo indirizzo al destinatario (**tuoindirizzo@tuodominio.com**) senza rendere pubblico il tuo secondo indirizzo (**tuoaltroindirizzo@altrodominio.com**).

Esistono due tipi di reindirizzamenti:  

- Il reindirizzamento semplice (schema 1): l’email viene inoltrata direttamente al secondo indirizzo e il destinatario non riceve il messaggio. 

- Il reindirizzamento con copia in locale (schema 2): l’email viene consegnata sia al destinatario che al secondo indirizzo.

![email](images/schema-redirect.png){.thumbnail}

> [!primary]
>
> È possibile reindirizzare i messaggi anche verso più indirizzi.

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Disporre di una soluzione MX Plan (il servizio è disponibile con un piano di [hosting Web OVH]({ovh_www}/hosting-web/){.external}, un [hosting gratuito Start 10M]({ovh_www}/domini/offerta_hosting_start10m.xml){.external} o una soluzione MX Plan ordinata separatamente)

## Procedura

In base alla data di attivazione della soluzione MXplan o in caso di [recente migrazione del servizio]({ovh_www}/mxplan-migration/){.external}, la versione disponibile sarà differente. Per verificare quella attiva 

accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione “Web” e seleziona il tuo servizio nella sezione `Email`{.action} del menu a sinistra. Prosegui nella lettura di questa guida in base alla versione di cui disponi.

|Vecchia versione della soluzione MX Plan|Nuova versione della soluzione MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy.png){.thumbnail}<br> Il servizio è indicato nel riquadro “Abbonamento”|![email](images/mxplan-starter-new.png){.thumbnail}<br>Il servizio è indicato nel riquadro “Riepilogo”, sotto la voce `Referenza server`|
|Consulta il paragrafo: [ Vecchia versione della soluzione MX Plan](./#vecchia-versione-della-soluzione-mx-plan)|Consulta il paragrafo: [Nuova versione della soluzione MX Plan](./#nuova-versione-della-soluzione-mx-plan_1)|

### Vecchia versione della soluzione MX Plan

#### Step 1: accedi all’interfaccia di gestione dei reindirizzamenti
Di default, ti trovi nella scheda `Informazioni generali`{.action} della tua soluzione MXPlan. Clicca sulla scheda `Email`{.action} e poi sul pulsante `Gestisci i reindirizzamenti`{.action} a destra.

![email](images/mxplan-legacy-1.png){.thumbnail}


#### Step 2: Aggiungi un reindirizzamento

Per eseguire questa operazione, clicca su `Aggiungi un reindirizzamento`{.action}, nella parte destra della pagina con la tabella dei reindirizzamenti attivi.

![email](images/mxplan-legacy-2.png){.thumbnail}

Inserisci le informazioni richieste:

|Campo|Descrizione| 
|---|---|  
|Dall'indirizzo: |inserisci l’indirizzo email su cui vuoi attivare il reindirizzamento.|  
|All'indirizzo:|inserisci l’indirizzo email su cui vuoi inoltrare automaticamente i tuoi messaggi.  Può essere uno dei tuoi indirizzi email OVHcloud o un account esterno.|
|Scegli una modalità di copia:|Scegli se vuoi: <br> - **Conservare una copia dell'email in OVH** (se vuoi conservare sul tuo indirizzo email i messaggi reindirizzati. In questo caso, le email saranno disponibili su entrambi gli account). <br> - **Non conservare una copia dell’email**(qualsiasi email in arrivo verrà inoltrata automaticamente su un’altra casella senza che l'indirizzo principale la riceva) <br> *cf. lo [schema illustrato ](./#informazioni-generali){.external}all’inizio di questa guida*.|

Clicca su `Conferma`{.action} per aggiungere il reindirizzamento.

![email](images/mxplan-legacy-3.png){.thumbnail}

> [!primary]
> Quando scegli l’opzione “**Conserva una copia dell'email in OVHcloud**”, viene automaticamente creato un reindirizzamento dell’indirizzo email verso sé stesso nella lista dei reindirizzamenti attivi,
> conservando una copia dei messaggi inoltrati.
> 

### Nuova versione della soluzione MX Plan

Nella nuova versione della soluzione MX Plan, la gestione dei reindirizzamenti non si effettua dallo Spazio Cliente, ma direttamente dalla Webmail dell’indirizzo interessato.

Accedi alla Webmail all’indirizzo [webmail](https://www.ovh.it/mail/){.external},  inserendo **indirizzo email** e **password**.
![email](images/webmail.png){.thumbnail}

#### Step 1: accedi alla gestione dei reindirizzamenti

Dopo aver effettuato l’accesso alla tua [webmail](https://www.ovh.it/mail/){.external}, clicca sull’icona a forma di ingranaggio in alto a destra e poi su `Opzioni`{.action}.

![email](images/mxplan-new-1.png){.thumbnail}
Dalla finestra**Opzioni** del menu a sinistra, vai alla categoria **Elaborazione automatica** della sezione **Posta**e clicca su `Regole Posta in arrivo e organizzazione`{.action}.  

![email](images/mxplan-new-2.png){.thumbnail}

Da questa finestra è possibile gestire i reindirizzamenti e applicare filtri su tutte le email in arrivo.

#### Step 2: aggiungi un reindirizzamento

Dalla pagina di gestione **Regole di Posta in arrivo**, clicca sul simbolo`+`{.action} in alto a sinistra.
![email](images/mxplan-new-3.png){.thumbnail}

Nella nuova pagina, puoi definire le regole necessarie per creare un reindirizzamento: 

|Campo|Descrizione| 
|---|---|  
|Nome |Definisci il nome del tuo reindirizzamento (riquadro 1).|  
|Quando il messaggio arriva e rispetta queste condizioni| Per applicare il reindirizzamento a tutti i messaggi, seleziona l’opzione, clicca su **\[Applica a tutti i messaggi]** (riquadro 2).|
|Operazioni da eseguire|Per applicare il reindirizzamento, seleziona **Sposta, inoltra o invia**, quindi **Inoltra il messaggio a...** (riquadro 3). Dopodiché inserisci l’indirizzo verso cui vuoi inoltrare l’email nel campo **Inoltra il messaggio a...**e poi clicca su`Salva`{.action} (riquadro 4) |


![email](images/mxplan-new-4.png){.thumbnail}

Nel nostro esempio, si tratta di un **reindirizzamento con copia in locale**(vedi lo [schema 2](./#informazioni-generali){.external} all’inizio di questa guida). Se questo è ciò di cui hai bisogno, clicca su `OK`{.action} (icona del floppy disk) in alto a sinistra e la regola diventa effettiva.  Altrimenti, passa allo step successivo.



Per applicare un **reindirizzamento semplice**([schema 1](./#informazioni-generali){.external}all’inizio di questa guida), aggiungi una regola aggiuntiva al tuo **reindirizzamento con copia in locale** da questa finestra. Clicca su `Aggiungi un’azione`{.action}(riquadro 1) e poi su **Sposta, copia o elimina e infine su **Elimina il messaggio**. Questa regola sposta il messaggio direttamente nel cestino, dopo averlo inoltrato all’altro indirizzo.

![email](images/mxplan-new-5.png){.thumbnail}

Una volta completati tutti i campi, clicca su `OK`{.action} (icona del floppy disk) in alto a sinistra.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.