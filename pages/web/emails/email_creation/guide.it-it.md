---
title: 'Creare un account email con MX Plan'
excerpt: 'Come aggiungere una casella di posta elettronica sulla soluzione MX Plan'
legacy_guide_number: g1343
updated: 2022-10-11
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 07/10/2022**

## Obiettivo

Una soluzione email MX Plan è stata appena creata per usufruire di indirizzi email associati a un dominio.

**Questa guida ti mostra come creare un indirizzo email con la soluzione MX Plan.**

## Prerequisiti

- Disporre di una soluzione MX Plan (il servizio è disponibile con un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external}, un [hosting gratuito Start 10M](https://www.ovhcloud.com/it/domains/free-web-hosting/){.external} o una soluzione MX Plan ordinata separatamente)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}.

> [!primary]
>
> **Casi particolari**
>
> - Se disponi di un hosting Start 10M, prima di creare un indirizzo email è necessario attivarlo. Questa operazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, selezionando il dominio interessato.
> - Prima di continuare la lettura di questa guida, è necessario attivare il servizio di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external}. Per farlo, consulta la guida [Attiva gli indirizzi email inclusi nel tuo hosting Web](/pages/web/hosting/activate-email-hosting).

## Procedura <a name="instructions"></a>

In base alla data di attivazione o in caso di [recente migrazione del servizio](https://www.ovhcloud.com/it/web-hosting/mxplan-migration/){.external}, la versione disponibile sarà differente. Prima di procedere, è necessario identificarla.

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}. Clicca su `Email`{.action} e poi seleziona il nome del servizio MX Plan. Prosegui nella lettura di questa guida in base alla versione di cui disponi.

|Vecchia versione della soluzione MX Plan|Nuova versione della soluzione MX Plan|
|---|---|
|![email](images/mxplan-creation-legacy-step1.png){.thumbnail}<br> Il servizio è indicato nel riquadro “Abbonamento”|![email](images/mxplan-creation-new-step1.png){.thumbnail}<br>Il servizio è indicato nel riquadro “Riepilogo”, sotto la voce `Referenza server`|
|Consulta il paragrafo [Vecchia versione della soluzione MX Plan](#mxplanlegacy).|Consulta il paragrafo [Nuova versione della soluzione MX Plan](#newmxplan)|

### Nuova versione della soluzione MX Plan <a name="newmxplan"></a>

#### Accedi alla gestione del servizio email

Se disponi della nuova versione del servizio, l’interfaccia visualizzata dovrebbe essere quella dell’immagine qui sotto. In caso contrario [torna al paragrafo precedente](#instructions) e assicurati di aver verificato correttamente la tua versione attiva.  

![email](images/mxplan-creation-new-step1.png){.thumbnail}

#### Crea un account email

Per creare un indirizzo email clicca sulla scheda `Account email`{.action}. Visualizzi una tabella con tutti gli account email già disponibili e quelli che è ancora possibile creare. Clicca sul pulsante `Aggiungi un account`{.action}.

![email](images/mxplan-creation-new-step2.png){.thumbnail}

Nella nuova finestra inserisci le informazioni richieste:

- **Account email**: Nella casella di testo è già stato inserito un nome temporaneo. Sostituiscilo con quello che vuoi per il tuo indirizzo email (ad esempio nome.cognome). Il dominio associato risulterà preselezionato nella lista.
- **Nome**: Inserisci un nome.
- **Nome**: Inserisci un cognome.
- **Nome da visualizzare**: Indica il nome che vuoi che venga visualizzato come mittente per i messaggi inviati da questo indirizzo.
- **Password**: Crea una password e confermala. Per motivi di sicurezza ti consigliamo di non utilizzare due volte la stessa password, scegliere una password che non contenga informazioni personali (ad esempio nome, cognome o data di nascita) e di modificarla regolarmente.


Dopo aver completato tutti i campi clicca su `Continua`{.action}. 

![email](images/mxplan-creation-new-step3.png){.thumbnail}

Verifica la correttezza delle informazioni inserite e poi clicca su Conferma. Il nuovo account comparirà nella tabella e sarà disponibile all’utilizzo entro pochi minuti.

Ripeti questa operazione per tutti gli account che vuoi creare, in base al numero a tua disposizione.

#### Consultare le email

Accedi alla [pagina di connessione](https://www.ovhcloud.com/it/mail/){.external}, inserisci le tue credenziali e clicca sul pulsante `Connessione`{.action}.

Se è la prima volta che esegui l’accesso da questo indirizzo email, ti verrà chiesto di selezionare la lingua dell’interfaccia utente e definire il fuso orario della tua area geografica. Quando effettui il login, si apre di default la casella della posta in arrivo. Per maggiori informazioni sull'utilizzo della Webmail Outlook on the web (OWA), consulta la guida all'utilizzo di un indirizzo [email dalla Webmail Outlook on the web](/pages/web/emails/email_owa){.external}.

![email](images/mxplan-creation-new-step5.png){.thumbnail}

Per consultare le tue email da un client di posta, consulta la sezione "[Consulta un account email da un dispositivo](#configdevices)".

#### Elimina un account email

Dalla nuova versione MXplan, si parla di *reinizializzazione dell'account* quando si deve eliminarlo.

> [!warning]
>
> Prima di eliminare account email, assicurati che non siano utilizzati. Potrebbe essere necessario eseguire un backup di questi account. Se necessario, consulta la guida [Migrare manualmente il tuo indirizzo email](/pages/web/emails/manual_email_migration) che ti descriverà come esportare i dati di un account dal tuo Spazio Cliente OVHcloud o da un client di posta.

Nella scheda `Account email`{.action}, clicca sui tre puntini `...`{.action} in corrispondenza dell'account da eliminare e poi clicca su `Reimposta questo account`{.action}.

![email](images/mxplan-new-reset.png){.thumbnail}

### Vecchia versione della soluzione MX Plan <a name="mxplanlegacy"></a>

#### Accedi alla gestione del servizio email

Se disponi della vecchia versione del servizio, l’interfaccia visualizzata dovrebbe essere quella dell’immagine qui sotto. In caso contrario [torna al paragrafo precedente](#instructions) e assicurati di aver verificato correttamente la tua versione attiva. 

![email](images/mxplan-creation-legacy-step1.png){.thumbnail}

#### Crea un account email

Per creare un indirizzo email clicca sulla scheda `Email`{.action}. Visualizzi una tabella con tutti gli account email creati sul tuo servizio MX Plan. Clicca sul pulsante `Crea un indirizzo email`{.action}.

![email](images/mxplan-creation-legacy-step2.png){.thumbnail}

Nella nuova finestra inserisci le informazioni richieste:

- **Nome dell'account**: Inserisci il nome che vuoi per il tuo indirizzo email (ad esempio nome.cognome). Il dominio in questione è già completato di default.|  
- **Descrizione dell'account**: Inserisci una breve descrizione che ti permetterà di riconoscere questo account tra quelli presenti nel tuo Spazio Cliente OVHcloud.|  
- **Dimensione dell'account**: Seleziona la dimensione del tuo account, cioè lo spazio a disposizione per archiviare i messaggi.  
- **Password**: Crea una password e confermala. Per motivi di sicurezza, ti consigliamo di non utilizzare due volte la stessa password, sceglierne una che non ha alcun rapporto con le tue informazioni personali (ad esempio, evita le menzioni a tuo nome, cognome e data di nascita) e rinnovarla regolarmente.|

Dopo aver completato tutti i campi clicca su `Continua`{.action}. 

![email](images/mxplan-creation-legacy-step3.png){.thumbnail}

Verifica la correttezza delle informazioni inserite e poi clicca su `Conferma`{.action} per avviare la creazione dell’indirizzo email: l’account sarà disponibile all’utilizzo entro pochi minuti.

Ripeti questa operazione per tutti gli account che vuoi creare, in base al numero a tua disposizione.

#### Consultare le email 

Accedi alla [pagina di connessione](https://www.ovhcloud.com/it/mail/){.external}, inserisci le tue credenziali e clicca sul pulsante `Connessione`{.action}.

Si apre di default la casella della posta in arrivo. Per maggiori informazioni consulta la guida all’[utilizzo di un account di posta da RoundCube](/pages/web/emails/email_roundcube){.external}.

![email](images/mxplan-creation-legacy-step4.png){.thumbnail}

Per consultare le tue email da un client di posta, consulta la sezione [Consultare un account email da un dispositivo](#configdevices)

#### Elimina un account email

> [!warning]
>
> Prima di eliminare account email, assicurati che non siano utilizzati. Potrebbe essere necessario eseguire un backup di questi account. Se necessario, consulta la guida [Migrare manualmente il tuo indirizzo email](/pages/web/emails/manual_email_migration) che ti descriverà come esportare i dati di un account dal tuo Spazio Cliente OVHcloud o da un client di posta.

Dalla scheda `Account email`{.action}, clicca sui tre puntini `...`{.action} a destra dell'account da eliminare e poi clicca su `Elimina l'account`{.action}

![email](images/mxplan-legacy-reset.png){.thumbnail}

### Consultare un account email da un dispositivo <a name="configdevices"></a>

Configura l’account email sul tuo dispositivo (ad esempio, smartphone o tablet) consultando, se necessario, le nostre guide disponibili online:

> [!tabs]
> **Windows**
>>
>> - [Posta su Windows 10](/pages/web/emails/how_to_configure_windows_10)
>> - [Outlook](/pages/web/emails/how_to_configure_outlook_2016)
>> - [Thunderbird](/pages/web/emails/how_to_configure_thunderbird_windows)
>>
> **Apple**
>>
>> - [Mail di macOS](/pages/web/emails/how_to_configure_mail_macos)
>> - [Mail per iPhone o iPad](/pages/web/emails/how_to_configure_ios)
>> - [Outlook Mac OS](/pages/web/emails/how_to_configure_outlook_2016-mac/)
>> - [Thunderbird](/pages/web/emails/how_to_configure_thunderbird_mac)
>>
> **Android**
>>
>> - [Android](/pages/web/emails/how_to_configure_android)
>>
> **Altro**
>>
>> - [Interfaccia Gmail](/pages/web/emails/how_to_configure_gmail)
>>

Se non conosci i parametri necessari alla configurazione dell’account email, ecco i valori da utilizzare:

> [!tabs]
> **Configurazione IMAP**
>>
>> |Tipo di server|Nome del server|Porta (con SSL)|Porta (senza SSL)|
>> |---|---|---|---|
>> |In entrata|SSL0.OVH.NET|993|143|
>> |In uscita|SSL0.OVH.NET|465|587|
>>
> **Configurazione POP**
>>
>> |Tipo di server|Nome del server|Porta (con SSL)|Porta (senza SSL)|
>> |---|---|---|---|
>> |In entrata|SSL0.OVH.NET|995|110|
>> |In uscita|SSL0.OVH.NET|465|587|
>>

> [!warning]
>
> In caso di difficoltà durante la configurazione dell’account email sul dispositivo, [consulta le nostre guide](/products/web-cloud-email-collaborative-solutions-mx-plan) o rivolgiti al fornitore del servizio.
>

## Per saperne di più
  
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.