---
title: 'Iniziare a utilizzare la soluzione Email Pro'
slug: prima-configurazione
excerpt: 'Come eseguire le prime operazioni sul servizio Email Pro'
section: 'Per iniziare'
order: 1
---

**Ultimo aggiornamento: 09/04/2020**

## Obiettivo

La soluzione Email Pro permette di usufruire di un servizio di posta elettronica professionale a un prezzo competitivo, per supportare o avviare la tua attività.

**Questa guida ti mostra le operazioni di base da effettuare sul tuo servizio di posta elettronica Email Pro.**

## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovh.it/emails/email-pro/){.external}
- Aver ricevuto l’email di conferma dell’installazione di Email Pro
- Disporre di un dominio OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

### Step 1: accedi alla gestione del servizio

Per gestire la soluzione Email Pro accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} e seleziona il tuo servizio nella sezione `Email Pro`{.action} del menu a sinistra.

> [!primary]
>
> Nello Spazio Cliente OVHcloud il nome di questo servizio inizia per *emailpro-*, contiene una parte dell’identificativo cliente e termina con una cifra (1 per la prima soluzione Email Pro installata, 2 per la seconda, ecc...).
>

### Step 2: aggiungi il dominio

Se il servizio Email Pro è stato appena ordinato, si apre automaticamente la finestra `Aggiungi un dominio`{.action}. Se non compare, clicca sulla scheda `Domini associati`{.action} e poi sul pulsante `Aggiungi un dominio`{.action}.

A questo punto scegli una delle opzioni proposte:

- **Seleziona un dominio dalla lista**: nell’elenco vengono mostrati soltanto i domini che utilizzano una configurazione OVHcloud e associati al tuo identificativo cliente come contatto
- **Inserisci un dominio non gestito dal tuo account OVHcloud**: in questo caso accertati di poter modificare la zona DNS del dominio in modo che Email Pro possa funzionare correttamente

Una volta effettuata la scelta, clicca su `Continua`{.action}. 

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

La finestra successiva mostra le informazioni relative alla configurazione della modalità del dominio:

- **se il dominio inserito non è gestito da OVHcloud**, la modalità non autoritativa sarà attiva di default
- **se il dominio inserito è gestito da OVHcloud**, è possibile scegliere tra le due modalità

|Modalità |Descrizione|
|---|---|
|Autoritativa|È utile nel caso in cui Email Pro sia associato esclusivamente al proprio dominio, in quanto questa modalità non consente l’utilizzo simultaneo della soluzione e di  un altro servizio di posta elettronica.|
|Non autoritativa|È utile nel caso in cui Email Pro venga utilizzato contemporaneamente con un altro servizio di posta elettronica.| 

> [!primary]
>
> La scelta di una modalità non è un’operazione definitiva e può essere modificata in un secondo momento direttamente dallo Spazio Cliente OVHcloud.
>

Una volta effettuata la scelta, clicca su `Continua`{.action}. 

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Se il dominio selezionato dalla lista è gestito da OVHcloud**, è disponibile la configurazione automatica e per aggiungere il dominio sarà sufficiente spuntare le caselle e cliccare su `Continua`{.action}. 

**Se il dominio inserito non è gestito da OVHcloud**, la configurazione verrà eseguita nello step successivo.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

Alla fine del processo di configurazione, ti consigliamo di verificare il riepilogo. Se tutte le informazioni risultano corrette, clicca su `Conferma`{.action} per avviare l’operazione di aggiunta del dominio.

### Step 3: configura il dominio

A operazioni ultimata, il dominio aggiunto dovrebbe risultare come dominio associato: per verificarne i parametri, consulta la tabella presente nell’interfaccia.

Nella colonna `Diagnostica`{.action} è possibile assicurarsi della corretta configurazione del dominio. Se è presente una casellina rossa, significa che è necessario modificare alcuni parametri.

- **In caso di configurazione automatica**, l’aggiornamento nello Spazio Cliente OVHcloud potrebbe richiedere qualche ora.

- **Se il dominio inserito non è gestito da OVHcloud**, clicca sulla casellina rossa per visualizzare le modifiche da apportare. Nel caso sia necessario intervenire su un record di tipo CNAME, consulta la guida [Creare un record CNAME per aggiungere un dominio associato](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_aggiungi_un_record_di_tipo_cname/). Se invece è necessario modificare un record MX, consulta la guida [Aggiungere un record MX alla configurazione di un dominio](https://docs.ovh.com/it/domains/aggiungere-record-mx-configurazione-dominio/). Per visualizzare le modifiche apportate nello Spazio Cliente OVHcloud potrebbe essere necessaria qualche ora.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

### Step 4: configura gli account Email Pro 

Per procedere con la configurazione degli indirizzi email, seleziona la scheda `Account email`{.action}.  Visualizzi una tabella con tutti gli account ordinati, nel formato “*@configureme.me*”.

Clicca sui tre puntini in corrispondenza dell’account in questione e seleziona `Modifica`{.action}.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Completa con le informazioni richieste.

|Campo|Descrizione|
|---|---|
|Account email|Inserisci il nome che vuoi assegnare al tuo account email (ad esempio nome.cognome) e seleziona il dominio dalla lista.|
|Nome|Inserisci un nome.|
|Cognome|Inserisci un cognome.|
|Nome da visualizzare|Indica il nome che comparirà come mittente delle email inviate da questo indirizzo.|
|Password e Conferma|Crea una password e confermala.| 

Dopo aver completato tutti i campi clicca su `Continua`{.action}, verifica la correttezza delle informazioni inserite e poi clicca su `Conferma`{.action}.

> [!primary]
>
> Ripeti questa operazione per tutti gli account che vuoi creare, in base al numero a tua disposizione. Per ordinare account aggiuntivi, clicca sul pulsante `Ordina account`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Step 5: utilizza gli indirizzi email

Una volta creati gli account non ti resta che utilizzarli. Per accedervi OVHcloud mette a disposizione un’applicazione online (*Webapp*), accessibile dall’indirizzo [https://www.ovh.it/mail/](https://www.ovh.it/mail/){.external} tramite le credenziali associate al proprio account email.

Per configurare l’account su un altro client di posta o dispositivi come smartphone e tablet, è possibile trovare alcune informazioni [utili nelle nostre guide disponibili online](https://docs.ovh.com/it/emails-pro/){.external}. Se non conosci i parametri necessari alla configurazione dell’account email, ecco i valori da utilizzare:

|Tipo di server|Nome del server|Tipo di sicurezza|Porta|
|---|---|---|---|
|In entrata|pro**X**.mail.ovh.net|SSL/TLS|993|
|In uscita|pro**X**.mail.ovh.net|STARTTLS|587|

> [!primary]
>
> Nel nostro esempio abbiamo utilizzato come nome del server "pro**X**.mail.ovh.net", dove "X" dovrà essere sostituito con il numero che indica il server del servizio Email Pro.
>
> Questa informazione è disponibile nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}, selezionando `Email Pro`{.action} nella colonna a sinistra. Il nome del server è visibile nel riquadro Connessione della scheda `Informazioni generali`{.action}.
> 

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
