---
title: 'Configurare il servizio Email Pro'
slug: prima-configurazione
excerpt: 'Come configurare Email Pro'
section: Generale
---

**Ultimo aggiornamento: 13/12/2018**

## Obiettivo

Con la soluzione Email Pro che hai appena acquistato potrai usufruire di un servizio di posta elettronica professionale a un prezzo molto competitivo, per sostenere o avviare la tua attività.

**Questa guida ti mostra come configurare il tuo servizio Email Pro.**

## Prerequisiti

- Disporre di una soluzione [Email Pro](https://www.ovh.it/emails/email-pro/){.external}
- Aver ricevuto l’email di conferma dell’installazione di Email Pro
- Disporre di un dominio
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

### Step 1: accedi all’interfaccia di gestione del tuo servizio

Puoi gestire Email Pro attraverso lo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

cliccando su `Email Pro`{.action} nel menu a sinistra e scegliendo il servizio interessato. 

> [!primary]
>
> Il nome dei servizi Email Pro nello Spazio Cliente OVH inizia sempre con *emailpro-*, dopodiché contiene una parte del tuo identificativo cliente e termina con una cifra (1 per il primo servizio Email Pro installato, 2 per il secondo, ecc...).
>

### Step 2: aggiungi il tuo dominio

Se hai appena ordinato il servizio Email Pro, comparirà automaticamente la finestra `Aggiungi un dominio`{.action}. Se non appare, clicca su `Domini associati`{.action} e successivamente sul pulsante `Aggiungi un dominio`{.action}.

Poi scegli una delle seguenti opzioni:

- **seleziona un dominio nella lista**\: appaiono soltanto i domini configurati con OVH e associati al tuo identificativo cliente
- **inserisci un dominio non gestito dal tuo account OVH**\: accertati di poter modificare la configurazione del dominio (la zona DNS) affinché il servizio Email Pro possa funzionare correttamente

Una volta effettuata la scelta, clicca sul pulsante `Seguente`{.action}. 

![emailpro](images/first_config_email_pro_add_domain.png){.thumbnail}

La finestra mostra a questo punto le informazioni relative alla configurazione della modalità del dominio:

- **se hai inserito un dominio non gestito da OVH**, la modalità non-autoritativa verrà configurata come predefinita
- **se hai selezionato nella lista un dominio gestito da OVH**, sarà necessario scegliere tra le due modalità

|Modalità |Descrizione|
|---|---|
|Autoritativa|È vantaggiosa se utilizzi la soluzione Email Pro esclusivamente con il tuo dominio. Non consente l’utilizzo di un’altra soluzione di posta elettronica con il servizio Email Pro. |
|Non-autoritativa|È vantaggiosa se, per il tuo dominio, utilizzi contemporaneamente la soluzione Email Pro e un’altra soluzione di posta elettronica. | 

> [!primary]
>
> La scelta di una modalità non è definitiva, può essere modificata in seguito attraverso lo Spazio Cliente OVH.
>

Clicca sul pulsante `Seguente`{.action} per continuare con l’aggiunta del dominio.

![emailpro](images/first_config_email_pro_add_domain_step2.png){.thumbnail}

**Se hai selezionato nella lista un dominio gestito da OVH**, verrà configurato automaticamente: basta spuntare le caselle e cliccare sul pulsante `Seguente`{.action} per proseguire con l’aggiunta del dominio. 

**Se hai inserito un dominio non gestito da OVH**, la configurazione verrà completata nello step successivo.

![emailpro](images/first_config_email_pro_add_domain_step3.png){.thumbnail}

Alla fine del processo di configurazione, verifica il riepilogo delle informazioni e poi clicca sul pulsante `Conferma`{.action} per iniziare ad aggiungere il dominio.

### Step 3: configura il tuo dominio

Una volta che il dominio aggiunto sarà associato, assicurati che la configurazione sia avvenuta correttamente con l’aiuto della tabella riepilogativa.

La colonna `Diagnostica`{.action} ti permette di vedere se la configurazione del dominio è corretta. Se vedi una casellina rossa, è necessario modificare la configurazione.

- **Se hai scelto una configurazione automatica durante l’aggiunta del dominio**, potrai visualizzarla nello Spazio Cliente OVH dopo qualche ora.
- **Se hai inserito un nome di dominio non gestito da OVH**, clicca sulla casellina rossa per visualizzare le modifiche da apportare. Se invece le hai appena apportate, sarà possibile visualizzarle nello Spazio Clienti OVH dopo qualche ora.

![emailpro](images/first_config_email_pro_configure_domain.png){.thumbnail}

Anche se opzionale, è possibile aggiungere un record SRV alla configurazione del tuo dominio per consentire a un client di posta o a un altro dispositivo, come uno _smartphone_ o un tablet, di recuperare automaticamente gli elementi necessari per configurare il tuo account Email Pro (server, porte e protocolli di sicurezza).

Se non sei interessato, passa direttamente allo step successivo. In caso contrario, aggiungi il record SRV attraverso l’interfaccia del provider che gestisce la configurazione DNS del tuo dominio. Se il tuo provider è OVH, segui la procedura descritta nella guida [Modificare una zona DNS di OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external} utilizzando i seguenti elementi:

|Dominio|Record|Priorità|Peso|Porta|Destinazione|
|---|---|---|---|---|
|\_autodiscover._tcp.*mypersonaldomain.ovh*|SRV|0|0|443|autodiscover.mail.ovh.net.|

Non dimenticare di sostituire l’informazione generica “mypersonaldomain.ovh” con il tuo dominio.

### Step 4: configura gli account Email Pro 

Per configurare i tuoi indirizzi email, accedi a `Account email`{.action}.  La tabella mostra gli account che hai ordinato nel formato “*@configureme.me*”.

Per procedere con la configurazione, clicca sull’icona a forma di matita.

![emailpro](images/first_config_email_pro_configure_email_accounts.png){.thumbnail}

Completa con le informazioni richieste.

|Informazione|Descrizione|
|---|---|
|Account email|Inserisci il nome che vuoi dare al tuo indirizzo email (ad esempio nome.cognome) e seleziona il dominio nella lista|
|Nome|Inserisci un nome|
|Cognome|Inserisci un cognome|
|Nome visualizzato|Indica il nome che comparirà come mittente delle email inviate da questo indirizzo|
|Password e conferma|Crea una password e confermala| 

Una volta inseriti tutti i dati, clicca sul pulsante `Seguente`{.action} e, dopo aver verificato che le informazioni siano corrette, clicca su `Conferma`{.action} per avviare la configurazione dell’account.

> [!primary]
>
> Ripeti questo step tutte le volte necessarie, in base al numero di account a tua disposizione.  Puoi ordinare account aggiuntivi cliccando sul pulsante `Ordina account`{.action}.
>

![emailpro](images/first_config_email_pro_configure_email_accounts_step2.png){.thumbnail}

### Step 5: utilizza i tuoi indirizzi email

Una volta configurati gli account, non rimane che utilizzarli! OVH ti fornisce un’applicazione online (una *webapp*) alla quale puoi accedere tramite l’indirizzo <https://pro1.mail.ovh.net>, inserendo le credenziali associate al tuo account email creato in OVH.

Per configurare l’account email su un client di posta o un dispositivo (ad esempio, smartphone o tablet), consulta la documentazione disponibile in questa pagina: <https://docs.ovh.com/it/emails-pro/>. Di seguito trovi i parametri necessari per configurare il tuo account Email Pro:

|Tipo di server |Nome del server|Tipo di sicurezza|Porta|
|---|---|---|---|
|In entrata|pro1.mail.ovh.net|SSL/TLS|993|
|In uscita|pro1.mail.ovh.net|STARTTLS|587|

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.
