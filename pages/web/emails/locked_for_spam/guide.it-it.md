---
title: 'Che fare in caso di account bloccato per invio di Spam ?'
excerpt: 'Cosa fare se il tuo indirizzo email è bloccato per invio di Spam'
updated: 2023-06-07
---

## Obiettivo

Quando il tuo indirizzo email è bloccato per SPAM, significa che sono state rilevate attività sospette nell'invio di email da questo indirizzo. In questo caso, non puoi più inviare email da questo indirizzo email. Devi quindi capire perché è stata rilevata un'attività sospetta e agire per evitare che si ripeta.

**Questa guida ti mostra le operazioni da effettuare se il tuo indirizzo email è bloccato per invio di Spam.**

## Prerequisiti

- Disporre di un [servizio di posta elettronica OVHcloud](https://www.ovhcloud.com/it/emails/){.external}.
- Avere accesso alla sezione [Web](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Procedura <a name="instructions"></a>

Prima di proseguire e se il blocco si riferisce a un indirizzo email di tipo MXplan, identifica la versione di cui disponi per seguire il corretto processo di sblocco. Per distinguere le due versioni, utilizza la tabella qui sotto.

|Versione storica dell'offerta MX Plan|Nuova versione dell'offerta MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Ripeti l'offerta nel riquadro "Abbonamento"|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Inserisci il "Riferimento server" nel riquadro "Riassunto"|

### Step 1: perché il tuo indirizzo email è bloccato per SPAM? <a name="step1"></a>

Quando viene rilevata un'attività sospetta a livello di invio delle email, l'indirizzo interessato viene automaticamente bloccato. In questo caso, non è possibile inviare email da questo indirizzo.

Per prima cosa, assicurati presso gli utenti dell’indirizzo email bloccato che non sia (non siano) direttamente all’origine del blocco, in seguito ad un utilizzo insolito dell’indirizzo email (ad esempio in seguito alla realizzazione di invii massivi di email). In questo caso, è necessario correggere la situazione prima di sbloccare l'indirizzo.

Se l’attività sospetta rilevata dall’anti-spam non è stata avviata dal(i) legittimo(i) utente(i) dell’indirizzo email, adotti le misure necessarie e dettagliate di seguito:

- Esegui una scansione antivirus di ogni postazione che utilizza l’indirizzo email bloccato per SPAM e applica una patch in caso di virus.

- Controlla tutti i software che utilizzano le credenziali dell’indirizzo email bloccato per SPAM (ad esempio: fax, software aziendale, software di messaggeria).

### Step 2: verifica lo stato dell’indirizzo email e accedi al ticket di assistenza associato

Seleziona il servizio di posta nelle schede seguenti:

> [!tabs]
> **Exchange**
>>
>> Accedi alla sezione `Webcloud`{.action} dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Seleziona il tuo servizio cliccando su `Microsoft`{.action} > `Exchange`{.action}.
>> 
>> Clicca sulla scheda `Account email`{.action} della tua piattaforma. Se la colonna “stato” dell’indirizzo email interessato indica “bloccato”, clicca sui tre puntini `...`{.action} a destra in corrispondenza dell’account e poi su `Sblocca`{.action}. Lo sblocco dell'indirizzo email non avviene automaticamente. Per rispondere alle 3 domande poste, contatta il supporto sul ticket di assistenza.<br>
>> Passare allo [step 3](#step3) della guida.
>>
>> ![spam](images/blocked-for-SPAM-01-01.png){.thumbnail}
>>
> **E-mail Pro**
>>
>> Accedi alla sezione `Webcloud`{.action} dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Email Pro`{.action} e seleziona la piattaforma Email Pro.
>>
>> Accedi alla scheda `Account email`{.action} della tua piattaforma. Se la colonna "stato" a destra dell'indirizzo email interessato indica "Spam", clicca su questa voce e poi su `Rispondi al ticket`{.action}. Lo sblocco dell'indirizzo email non avviene automaticamente. È necessario contattare il supporto, sul ticket di assistenza, rispondendo alle 3 domande poste. <br>
>> Passare allo [step 3](#step3) della guida.
>>
>> ![spam](images/blocked-for-SPAM-01-02.png){.thumbnail}
>>
> **MX plan - Nuova versione**
>>
>> Accedi alla sezione `Web Cloud`{.action} dello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Email`{.action} e seleziona il dominio interessato.
>>
>> Accedi alla scheda `Account email`{.action} della tua piattaforma. Se la colonna "stato" a destra dell'indirizzo email interessato indica "Spam", clicca su questa voce e poi su `Rispondi al ticket`{.action}. Lo sblocco dell'indirizzo email non avviene automaticamente. Per rispondere alle 3 domande poste, contatta il supporto sul ticket di assistenza.<br>
>> Passare allo [step 3](#step3) della guida.
>>
>> ![spam](images/blocked-for-SPAM-01-03.png){.thumbnail}
>>
> **MX plan - Storico**
>>
>> Se il blocco riguarda un indirizzo email [MXplan versione storica](#instructions), non ci sono ticket di assistenza. Consulta lo [step 1](#step1) di questa guida prima di seguire queste istruzioni.
>>
>> Accedi alla sezione `Web Cloud`{.action} dello Spazio Cliente OVHcloud(https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Email`{.action} e seleziona il dominio interessato.
>>
>> Accedi alla scheda `Email`{.action} della tua piattaforma. Se la colonna "Bloccato per SPAM" indica "Sì", clicca su questa voce e poi su `Modifica la password`{.action}. Il tuo indirizzo email è sbloccato, non è necessario seguire lo [step 3](#step3).
>>
>> ![spam](images/blocked-for-SPAM-01-04.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > In rari casi, la colonna "Bloccato per SPAM" può indicare "No" nonostante il blocco dell'indirizzo email. Se hai fatto tutto il necessario per proteggere l'indirizzo email, la soluzione resta la stessa di cui sopra.


### Step 3: accedi al ticket di assistenza <a name="step3"></a>

Una volta completato lo Step 1, sarai reindirizzato verso la finestra “Le tue richieste di assistenza”. Clicca sui tre puntini `...`{.action} a destra del ticket con oggetto: “Account locked for spam”, quindi clicca su `Mostra dettagli`{.action}. 

![spam](images/blocked-for-SPAM-02.png){.thumbnail}

A questo punto visualizzi l’email che ti è stata inviata e che, a sua volta, ha aperto un ticket di assistenza al nostro supporto.

Il ticket di assistenza è di questo tipo:

> 
> Gentile Cliente,
>
> Il nostro sistema ha rilevato che l’indirizzo **youraddress@domain.com** ospitato sui nostri sistemi sotto il servizio **servicename** è fonte di invio di messaggi indesiderati (spam).
> Pertanto, l’invio di email è stato temporaneamente disattivato.
>
> Abbiamo rilevato **X** messaggio/i sospetto/i.
>
> Per consentirci di riattivare l’invio di email per l’indirizzo: **address@domain.com**,
> rispondi a questa email fornendo le seguenti informazioni:
>
> - Sei tu il mittente dell’email in questione (vedi l’intestazione qui di seguito)?
>
> - Disponi di una regola di reindirizzamento verso un altro indirizzo email?
>
> - Hai risposto a un messaggio Spam?
> 
> Queste risposte ci consentiranno di riattivare rapidamente il tuo account.
> <br>
> <br>
> 

Oltre a questo messaggio, ti abbiamo inviato un esempio di intestazioni delle email inviate,

per aiutarti a individuare il percorso e l’origine dei messaggi inviati. 

## Per saperne di più <a name="go-further"></a>
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/directory/).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).
 
Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.