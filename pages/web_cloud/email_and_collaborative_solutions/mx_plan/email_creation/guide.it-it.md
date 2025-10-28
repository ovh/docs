---
title: 'Creare un account email con MX Plan'
excerpt: 'Questa guide ti mostra come aggiungere una casella di posta elettronica sulla soluzione MX Plan'
updated: 2025-08-26
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Obiettivo

Una soluzione email MX Plan è stata appena creata per usufruire di indirizzi email associati a un dominio.

**Questa guida ti mostra come creare un indirizzo email con la soluzione MX Plan.**

## Prerequisiti

- Disporre di una soluzione MX Plan. Questa offerta è disponibile via:
    - un piano di [hosting Web](/links/web/hosting).
    - [hosting gratuito 100M](/links/web/domains-free-hosting) incluso con un dominio (attivato in precedenza).
    - Offerta MX Plan ordinata separatamente.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}.

> [!primary]
>
> **Casi particolari**
>
> - Se disponi di un Hosting gratuito 100M, prima di creare un indirizzo email è necessario attivarlo. Questa operazione è disponibile nello [Spazio Cliente OVHcloud](/links/manager), selezionando il dominio interessato.
> - Prima di continuare la lettura di questa guida, è necessario attivare il servizio di [hosting Web](/links/web/hosting). Per farlo, consulta la guida [Attiva gli indirizzi email inclusi nel tuo hosting Web](/pages/web_cloud/web_hosting/activate-email-hosting).

## Procedura <a name="instructions"></a>

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
1. Accedi alla sezione `Web Cloud`{.action}.
1. Clicca su `MX Plan`{.action}.
1. Seleziona il dominio.
1. **Prosegui nella lettura di questa guida in base alla tecnologia utilizzata dal tuo servizio MX Plan**.

> [!primary]
>
> **Identificare la tecnologia di posta elettronica della soluzione MX Plan.**
>
> In base alla data di attivazione del servizio MX Plan o a una migrazione recente, la tecnologia di posta associata potrebbe variare. Questa versione è caratterizzata dall'interfaccia della sua Webmail. Per identificarlo:
>
> - Nella scheda `Informazioni generali`{.action}, indica la tecnologia utilizzata sotto la voce **Webmail** presente nel riquadro `Abbonamento`{.action} sotto `Webmail`{.action}.
>
>![MX plan](images/technology-email.png){.thumbnail .w-400}

### OWA e Zimbra

Questa sezione documenta le offerte MX Plan che utilizzano la tecnologia webmail **OWA** e **Zimbra**.

#### Crea un account email

Per creare un indirizzo email clicca sulla scheda `Account email`{.action}. Visualizzi una tabella con tutti gli account email già disponibili e quelli che è ancora possibile creare. Clicca sul pulsante `Aggiungi un account`{.action}.

![email](images/mxplan-creation-new-step2.png){.thumbnail .w-400}

Nella nuova finestra inserisci le informazioni richieste:

- **Account email**: Nella casella di testo è già stato inserito un nome temporaneo. Sostituiscilo con quello che vuoi per il tuo indirizzo email (ad esempio nome.cognome). Il dominio associato risulterà preselezionato nella lista.

> [!warning]
>
> La scelta del nome dell’indirizzo email deve rispettare queste condizioni:
>
> - Minimo 2 caratteri
> - Massimo 32 caratteri
> - Nessun carattere accentato
> - Nessun carattere speciale eccetto i seguenti: `.`, `,`, `-` e `_`

- **Nome**: Inserisci un nome.
- **Nome**: Inserisci un cognome.
- **Nome da visualizzare**: Indica il nome che vuoi che venga visualizzato come mittente per i messaggi inviati da questo indirizzo.
- **Password**: Crea una password e confermala. Per motivi di sicurezza ti consigliamo di non utilizzare due volte la stessa password, scegliere una password che non contenga informazioni personali (ad esempio nome, cognome o data di nascita) e di modificarla regolarmente.

> [!warning]
>
> La scelta della password deve rispettare queste condizioni:
>
> - Minimo 9 caratteri
> - Massimo 30 caratteri
> - Nessun carattere accentato

Dopo aver completato tutti i campi clicca su `Continua`{.action}. 

![email](images/mxplan-creation-new-step3.png){.thumbnail .w-400}

Verifica le informazioni inserite e, se sono corrette, clicca su `Conferma`{.action}. Il nuovo account comparirà nella tabella. Attendi qualche istante fino a quando l'account sarà disponibile.

Ripeti questa operazione per tutti gli account che vuoi creare, in base al numero a tua disposizione.

#### Consultare le email

Accedi alla [pagina di connessione](/links/web/email), inserisci le tue credenziali e clicca sul pulsante `Connessione`{.action}.

Seleziona la scheda corrispondente alla tecnologia email della tua soluzione MX Plan:

> [!tabs]
> **Zimbra**
>>
>> Quando siete connessi alla webmail Zimbra, ottenete l'interfaccia qui sotto. Per maggiori informazioni sull’utilizzo della Webmail Zimbra, consulta la nostra guida "[Utilizzare la Webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".
>>
>> ![Zimbra - interface](images/zimbra-01.png){.thumbnail .w-400}
>>
> **OWA**
>>
>> Se è la prima volta che esegui l’accesso da questo indirizzo email, ti verrà chiesto di selezionare la lingua dell’interfaccia utente e definire il fuso orario della tua area geografica. Quando effettui il login, si apre di default la casella della posta in arrivo. Per maggiori informazioni sull'utilizzo della Webmail Outlook on the web (OWA), consulta la guida all'utilizzo di un indirizzo [email dalla Webmail Outlook on the web](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).
>>
>> ![email](images/mxplan-creation-new-step5.png){.thumbnail .w-400}

Per consultare le tue email da un client di posta, consulta la sezione "[Consulta un account email da un dispositivo](#configdevices)".

#### Elimina un account email

Dalla nuova versione MX Plan, si parla di *reinizializzazione dell'account* quando si deve eliminarlo.

> [!warning]
>
> Prima di eliminare account email, assicurati che non siano utilizzati. Potrebbe essere necessario eseguire un backup di questi account. Se necessario, consulta la guida [Migrare manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) che ti descriverà come esportare i dati di un account dal tuo Spazio Cliente OVHcloud o da un client di posta.

Nella scheda `Account email`{.action}, clicca sui tre puntini `...`{.action} in corrispondenza dell'account da eliminare e poi clicca su `Reimposta questo account`{.action}.

![email](images/mxplan-new-reset.png){.thumbnail .w-400}

### MX Plan Roundcube

Questa sezione è dedicata alle offerte MX Plan con tecnologia Webmail **Roundcube**.

#### Crea un account email

Per creare un indirizzo email clicca sulla scheda `Email`{.action}. Visualizzi una tabella con tutti gli account email creati sul tuo servizio MX Plan. Clicca sul pulsante `Crea un indirizzo email`{.action}.

![email](images/mxplan-creation-legacy-step2.png){.thumbnail .w-400}

Nella nuova finestra inserisci le informazioni richieste:

- **Nome dell'account**: Inserisci il nome che vuoi per il tuo indirizzo email (ad esempio nome.cognome). Il dominio in questione è già completato di default.|  
- **Descrizione dell'account**: Inserisci una breve descrizione che ti permetterà di riconoscere questo account tra quelli presenti nel tuo Spazio Cliente OVHcloud.|  
- **Dimensione dell'account**: Seleziona la dimensione del tuo account, cioè lo spazio a disposizione per archiviare i messaggi.  
- **Password**: Crea una password e confermala. Per motivi di sicurezza, ti consigliamo di non utilizzare due volte la stessa password, sceglierne una che non ha alcun rapporto con le tue informazioni personali (ad esempio, evita le menzioni a tuo nome, cognome e data di nascita) e rinnovarla regolarmente.|

Dopo aver completato tutti i campi clicca su `Continua`{.action}. 

![email](images/mxplan-creation-legacy-step3.png){.thumbnail .w-400}

Verifica le informazioni inserite e, se sono corrette, clicca di nuovo su `Avanti`{.action}. Infine seleziona `Conferma`{.action} per avviare la creazione dell’indirizzo email. l’account sarà disponibile all’utilizzo entro pochi minuti.

Ripeti questa operazione per tutti gli account che vuoi creare, in base al numero a tua disposizione.

#### Consultare le email 

Accedi alla [pagina di connessione](/links/web/email), inserisci le tue credenziali e clicca sul pulsante `Connessione`{.action}.

Si apre di default la casella della posta in arrivo. Per maggiori informazioni consulta la guida all’[utilizzo di un account di posta da RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube).

![email](images/mxplan-creation-legacy-step4.png){.thumbnail .w-400}

Per consultare le tue email da un client di posta, consulta la sezione [Consultare un account email da un dispositivo](#configdevices)

#### Elimina un account email

> [!warning]
>
> Prima di eliminare account email, assicurati che non siano utilizzati. Potrebbe essere necessario eseguire un backup di questi account. Se necessario, consulta la guida [Migrare manualmente il tuo indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration) che ti descriverà come esportare i dati di un account dal tuo Spazio Cliente OVHcloud o da un client di posta.

Dalla scheda `Account email`{.action}, clicca sui tre puntini `...`{.action} a destra dell'account da eliminare e poi clicca su `Elimina l'account`{.action}

![email](images/mxplan-legacy-reset.png){.thumbnail .w-400}

### Consultare un account email da un dispositivo <a name="configdevices"></a>

Configura l’account email sul tuo dispositivo (ad esempio, smartphone o tablet) consultando, se necessario, le nostre guide disponibili online:

> [!tabs]
> **Windows**
>>
>> - [Posta su Windows 10](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>> - [Outlook](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>>
> **Apple**
>>
>> - [Mail di macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Mail per iPhone o iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>> - [Outlook Mac OS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Thunderbird](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **Android**
>>
>> - [Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Altro**
>>
>> - [Interfaccia Gmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

Se non conosci i parametri necessari alla configurazione dell’account email, ecco i valori da utilizzare.

##### Parametri di ricezione IMAP e POP <a name="imap-pop"></a>

Per la ricezione delle email, durante la scelta del tipo di account, ti consigliamo di utilizzare il **IMAP**. Tuttavia, è possibile selezionare **POP**.

> [!warning]
>
> È necessario rilevare il valore corrispondente alla tua localizzazione (**EUROPA** o **AMERICA/ASIA PACIFICA**).

Seleziona la scheda corrispondente al tuo tipo di configurazione:

> [!tabs]
> **Configurazione IMAP**
>>
>> - **Nome utente**: Inserisci l'indirizzo email **completo**.
>> - **Password**: Inserisci la password dell’indirizzo email.
>> - **Server EUROPA (in entrata)**: imap.mail.ovh.net **o** ssl0.ovh.net.
>> - **Server AMERICA/ASIA PACIFICA (in entrata)**: imap.mail.ovh.ca.
>> - **Porta**: 993.
>> - **Tipo di sicurezza**: SSL/TLS.
>>
> **Configurazione POP**
>>
>> - **Nome utente**: Inserisci l'indirizzo email **completo**.
>> - **Password**: Inserisci la password dell’indirizzo email.
>> - **Server EUROPA (in entrata)**: pop.mail.ovh.net **o** ssl0.ovh.net.
>> - **Server AMERICA/ASIA PACIFICA (in entrata)**: pop.mail.ovh.ca.
>> - **Porta**: 995.
>> - **Tipo di sicurezza**: SSL/TLS.

##### Parametri di invio SMTP <a name="smtp"></a>

Di seguito sono riportati i parametri **SMTP** da utilizzare per l’invio delle email:

**Configurazione SMTP**

- **Nome utente**: Inserisci l'indirizzo email **completo**.
- **Password**: Inserisci la password dell’indirizzo email.
- **Server EUROPE (in uscita)**: smtp.mail.ovh.net **o** ssl0.ovh.net.
- **Server AMERICA/ASIA PACIFICA (in uscita)**: smtp.mail.ovh.ca.
- **Porta**: 465.
- **Tipo di sicurezza**: SSL/TLS.

### Casi d'uso

**Hai utilizzato tutti gli indirizzi inclusi nella tua offerta?**

- Consulta le domande della [nostra FAQ e-mail](pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails).
- Consulta tutte le nostre soluzioni email [Zimbra](/links/web/emails-zimbra) o [Exchange](/links/web/emails) per completare la soluzione MX Plan sullo stesso dominio.

## Per saperne di più <a name="go-further"></a>

[Webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Utilizzare la webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).