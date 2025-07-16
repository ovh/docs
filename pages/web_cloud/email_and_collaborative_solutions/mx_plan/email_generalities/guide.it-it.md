---
title: 'Iniziare a utilizzare la soluzione MX Plan'
excerpt: 'Come eseguire le prime operazioni sul servizio MX Plan'
updated: 2025-06-26
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
.w-500 {
  max-width:500px !important;
}
</style>

## Obiettivo

La soluzione MX Plan di OVHcloud con cui potrai inviare e ricevere messaggi dal dispositivo che preferisci.

**Questa guida ti mostra le operazioni di base da effettuare sul tuo servizio di posta elettronica MX Plan.**

## Prerequisiti

- Disporre di una soluzione MX Plan Puoi effettuare questa operazione tramite: un'offerta di [hosting Web](/links/web/hosting), l'[Hosting gratuito 100M](/links/web/domains-free-hosting) o la soluzione MX Plan da sola.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).

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
> - Nella scheda `Informazioni generali`{.action}, rileggi la tecnologia utilizzata sotto la dicitura **Webmail** presente nel riquadro `Abbonamento`{.action} o `Webmail`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

**Riepilogo**

- [Creare un indirizzo email](#create-email)
- [Utilizza i tuoi indirizzi email](#consult-emails)
    - [Utilizza la Webmail](#consult-emails-webmail)
    - [Utilizza un client di posta](#consult-emails-client)
        - [Impostazioni di ricezione IMAP e POP](#imap-pop)
        - [Impostazioni di invio SMTP](#smtp)
- [Reindirizzamenti e Alias](#redirection-alias)
- [Risposta automatica](#autoreply)

### Creare un indirizzo email <a name="create-email"></a>

Per maggiori informazioni sulla creazione di un indirizzo email, clicca sulla scheda corrispondente alla tecnologia utilizzata dal tuo servizio MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Per creare un indirizzo email clicca sulla scheda `Email`{.action}. Visualizzi una tabella con tutti gli account già creati. Per aggiungere un nuovo account email, clicca sul pulsante `Aggiungi account`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> Nella nuova finestra, inserisci le informazioni richieste:
>>
>> - **Nome account**: inserisci il tuo nuovo indirizzo email (ad esempio nome.cognome). Il dominio che compone l’indirizzo email è già preselezionato nella lista.
>> - **Descrizione dell’account**: Informazione sull’indirizzo email, disponibile nella tabella disponibile nella scheda `Email`{.action} del tuo servizio di posta.
>> - **Dimensione account**: determina la dimensione che vuoi attribuire all’account email.
>> - **Password**: [Definisci una password](/pages/account_and_service_management/account_information/manage-ovh-password) e confermala. Per motivi di sicurezza, vi consigliamo di non utilizzare due volte la stessa password, sceglierne una che non abbia alcun rapporto con le vostre informazioni personali (ad esempio, evitate di inserire il vostro cognome, nome e data di nascita) e di rinnovarla regolarmente.
>>
>> Una volta completati i campi clicca su `Seguente`{.action} e verifica le informazioni mostrate nel riepilogo. Se sono corrette, clicca su `Conferma`{.action}. Ripeti questa operazione per tutti gli account che vuoi creare, in base al numero a tua disposizione.
>>
>> ![email](images/mxplan-creation-new-step3-roundcube.png){.thumbnail .w-500}
>>
> **Zimbra e OWA**
>>
>> Per creare un indirizzo email clicca sulla scheda `Account email`{.action}. Visualizzi una lista degli account già disponibili e di quelli che è ancora possibile creare. Per aggiungere un nuovo account email, clicca sul pulsante `Aggiungi account`{.action}.
>>
>> ![email](images/mxplan-starter-new-step2.png){.thumbnail .w-500}
>>
>> Nella nuova finestra, inserisci le informazioni richieste:
>>
>> - **Account email**: nella casella di testo è già presente un nome provvisorio: rimuovilo e inserisci il tuo nuovo indirizzo email (ad esempio, il tuo nome.cognome). Il dominio che compone l’indirizzo email è già preselezionato nella lista.
>> - **Nome**: Inserisci un nome.
>> - **Cognome**: Inserisci un cognome.
>> - **Nome da visualizzare**: indica il nome che comparirà come mittente delle email inviate da questo indirizzo.
>> - **Password**: [Definisci una password](/pages/account_and_service_management/account_information/manage-ovh-password) e confermala. Per motivi di sicurezza, vi consigliamo di non utilizzare due volte la stessa password, sceglierne una che non abbia alcun rapporto con le vostre informazioni personali (ad esempio, evitate di inserire il vostro cognome, nome e data di nascita) e di rinnovarla regolarmente.
>> - **Quota**: determina la dimensione che vuoi attribuire all’account email.
>>
>> Una volta completati i campi clicca su `Seguente`{.action} e verifica le informazioni mostrate nel riepilogo. Se sono corrette, clicca su `Conferma`{.action}. Ripeti questa operazione per tutti gli account che vuoi creare, in base al numero a tua disposizione.
>>
>> ![email](images/mxplan-starter-new-step3.png){.thumbnail .w-500}
>>

### Utilizzare gli indirizzi email <a name="consult-emails"></a>

Una volta creati gli indirizzi email, è possibile iniziare a utilizzarli. Questa operazione può essere effettuata in due modi: utilizzando la Webmail da un browser Internet o utilizzando un client di posta.

#### Utilizza la Webmail <a name="consult-emails-webmail"></a>

Accedi alla pagina "[Accedi alla Webmail](/links/web/email)" e inserisci l’indirizzo email e la password. Clicca sul pulsante `Connessione`{.action}.

Seleziona la scheda corrispondente alla tecnologia email della tua soluzione MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Dovreste ottenere un'interfaccia simile all'immagine qui sotto con la dicitura "Rouncube" in alto a sinistra.
>> Per scoprire l'interfaccia Roundcube e il suo utilizzo, consulta la nostra guida "[Utilizzare il proprio indirizzo e-mail dalla webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)".
>>
>> ![email](images/mxplan-webmail-roundcube01.png){.thumbnail .w-500}
>>
> **Zimbra**
>>
>> Come nell'immagine qui sotto, si apre una finestra con la scritta "Zimbra" in alto a sinistra.
>> Per scoprire come utilizzare il tuo indirizzo email dalla Webmail Zimbra, consulta la nostra guida "[Utilizzare la Webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".
>>
>> ![email](images/mxplan-webmail-zimbra01.png){.thumbnail .w-500}
>>
> **OWA**
>>
>> La prima volta che ti connetti alla Webmail, ti verrà chiesto di specificare la lingua dell’interfaccia utente e il fuso orario in cui ti trovi. A questo punto viene visualizzata la cartella Posta in arrivo.
>>
>> Per scoprire come utilizzare il tuo indirizzo email dalla Webmail OWA, consulta la nostra guida "[Utilizzare il proprio indirizzo email dalla Webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)".
>>
>> ![email](images/mxplan-webmail-owa01.png){.thumbnail .w-500}
>>

#### Utilizza un client di posta <a name="consult-emails-client"></a>

Puoi configurare il tuo account email su un client di posta come Outlook, Thunderbird, Mail di Mac, ecc.

Consulta qui sotto i link delle guide di configurazione in base al tuo tipo di dispositivo:

> [!tabs]
> **Computer Windows**
>>
>> - [Outlook per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016).<br>
>> - [Thunderbird per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows).<br>
>> - [Posta per Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10).
>>
> **Computer Apple Mac**
>>
>> - [Outlook per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac).<br>
>> - [Mail per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos).<br>
>> - [Thunderbird per macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac).
>>
> **iPhone o iPad**
>>
>> - [Mail per iPhone e iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios).
>>
> **Smartphone o tablet Android**
>>
>> - [Gmail per Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).
>>

Di seguito trovi i parametri necessari per configurare il tuo indirizzo email.

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

### Reindirizzamenti e Alias <a name="redirection-alias"></a>

Vuoi reindirizzare le tue email verso un altro destinatario, creare un alias o copiare sistematicamente un altro indirizzo email?

Per effettuare questa operazione clicca sulla scheda corrispondente alla tua tecnologia di posta:

> [!tabs]
> **Roundcube**
>>
>> Per aggiungere un reindirizzamento o un alias, clicca sulla scheda `Email`{.action} del tuo servizio MX Plan e poi sul pulsante `Gestione dei reindirizzamenti`{.action} a destra.
>> Visualizzi la tabella dei reindirizzamenti già attivi. Clicca sul pulsante `Aggiungi un reindirizzamento`{.action} per avviare la creazione del reindirizzamento o dell’alias.
>>
>> - `Dall’indirizzo`: Inserisci qui l’indirizzo email che vuoi reindirizzare.<br>
>> - `Verso l’indirizzo`: Inserisci qui l’indirizzo di destinazione del reindirizzamento. Può trattarsi di uno dei tuoi indirizzi email OVHcloud o di un indirizzo email esterno.<br>
>> - `Scegli la modalità di copia`: scegli se conservare una copia dell’email ricevuta sull’indirizzo email di destinazione (`Dall’indirizzo`) o se reindirizzare direttamente all’indirizzo di reindirizzamento (`Verso l’indirizzo`) senza conservare una copia.
>>
>> Per comprendere l’utilizzo dei reindirizzamenti e degli alias sul tuo servizio MX Plan, consulta la nostra guida completa: "[Utilizzare i reindirizzamenti email](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)".
>>
> **OWA e Zimbra**
>>
>> Quando utilizzi una tecnologia **OWA** o **Zimbra**, puoi procedere in due modi:
>>
>> 1. **Crea il tuo reindirizzamento dalla Webmail**: tramite le regole della posta in arrivo o i filtri. Queste regole, applicate al momento della ricezione di un’email, permettono infatti di trasferire o reindirizzare un’email. Per effettuare questa operazione, consulta la nostra guida "[Regole della posta in arrivo dall’interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)" o il capitolo "Filtri" della nostra guida "[Utilizzare la webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)".
>>
>> 2. **Crea il tuo reindirizzamento e alias dal tuo Spazio Cliente OVHcloud**: per aggiungere un reindirizzamento o un alias, clicca sulla scheda `Reindirizzamenti`{.action}. Viene visualizzata la tabella dei reindirizzamenti già attivi. Clicca sul pulsante `Aggiungi un reindirizzamento`{.action}.
>>
>> - `Dall’indirizzo`: Inserisci qui l’indirizzo email che vuoi reindirizzare.<br>
>> - `Verso l’indirizzo`: Inserisci qui l’indirizzo di destinazione del reindirizzamento. Può trattarsi di uno dei tuoi indirizzi email OVHcloud o di un indirizzo email esterno.<br>
>> - `Scegli la modalità di copia`: scegli se conservare una copia dell’email ricevuta sull’indirizzo email di destinazione (`Dall’indirizzo`) o se reindirizzare direttamente all’indirizzo di reindirizzamento (`Verso l’indirizzo`) senza conservare una copia.
>>
>> Per comprendere l'utilizzo dei reindirizzamenti e degli alias sul tuo servizio MX Plan, consulta la nostra guida completa: "[Utilizzare i reindirizzamenti email](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)".

### Risposta automatica <a name="autoreply"></a>

Quando è necessario uscire, è importante poter impostare una risposta automatica per indicare che non è possibile consultare o elaborare le email.

Seleziona la scheda corrispondente alla tecnologia email della tua soluzione MX Plan:

> [!tabs]
> **Roundcube**
>>
>> Per aggiungere una risposta automatica a uno degli indirizzi email, clicca sulla scheda `Email`{.action} del tuo servizio MX Plan e poi sul pulsante `Gestione delle risposte automatiche`{.action} a destra.
>> Viene visualizzata la tabella delle risposte automatiche già attive. Clicca sul pulsante `Aggiungi una risposta automatica`{.action} a destra per avviare la creazione del reindirizzamento o dell’alias.
>>
>> Per maggiori dettagli sull’attivazione di una risposta automatica dal servizio MX Plan nello Spazio Cliente OVHcloud, consulta la nostra guida "[MX Plan - Creare una risposta automatica su un indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)".
>>
> **Zimbra**
>>
>> Per impostare una risposta automatica, accedi all’indirizzo email dalla Webmail. Per maggiori informazioni, consulta la nostra guida "[Utilizzare la webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)", seleziona "Risposte automatiche/Segreteria" nel sommario.
>>
> **OWA**
>>
>> Per impostare una risposta automatica, accedi all’indirizzo email dalla Webmail. Per maggiori informazioni, consulta la nostra guida "[Utilizzare il proprio indirizzo email dalla webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)", vai direttamente al capitolo "Aggiungere la risposta automatica".
>>

## Per saperne di più <a name="go-further"></a>

[Webmail Roundcube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube)

[Webmail Zimbra](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[Utilizzare la webmail Outlook Web App (OWA)](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa)

[Utilizza i reindirizzamenti email](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

[MX Plan - Crea risposta automatica su un indirizzo email](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_auto_responses)

[Utilizza i reindirizzamenti email](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/feature_redirections)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
