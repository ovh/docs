---
title: 'Aggiungere un dominio su Exchange'
slug: aggiungere-dominio-su-exchange
excerpt: 'Come aggiungere un dominio al servizio di posta Exchange'
section: 'Configurazione dell’offerta Exchange'
order: 4
---

**Ultimo aggiornamento: 28/01/2019**

## Obiettivo

Aggiungere uno o più domini su Exchange è un’operazione fondamentale per utilizzare gli account inclusi in questa soluzione.

**Questa guida ti mostra come aggiungere un dominio al tuo servizio Exchange.**

## Prerequisiti

- Disporre di una [soluzione Exchange](https://www.ovhcloud.com/it/emails/){.external}
- Aver registrato uno o più domini
- Poter modificare la configurazione del dominio (zona DNS)
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

### Step 1: accedi alla gestione del servizio

Una volta che il tuo Exchange è stato creato e risulta disponibile, è possibile gestirlo dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}:

nella colonna di sinistra, clicca su `Microsoft`{.action} > `Exchange`{.action} e seleziona il tuo servizio.

> [!primary]
>
> Nello Spazio Cliente OVH il nome dei servizi Exchange inizia con **hosted-** o **private-**, seguito da una parte del tuo identificativo cliente e una cifra (1 per il primo servizio installato, 2 per il secondo, ecc...).
>

### Step 2: aggiungi un dominio

Per aggiungere un dominio, clicca sulla scheda `Domini associati`{.action}, in cui viene mostrato l’elenco dei domini associati al tuo Exchange.  Clicca su `Aggiungi un dominio`{.action} e segui gli step indicati.

> [!warning]
>
> Tutti gli indirizzi creati sul servizio Exchange saranno all’interno della stessa directory degli altri indirizzi email, inclusi quelli con un dominio diverso. Se vuoi che alcuni domini non vengano visualizzati nella stessa directory, è necessario ordinare un’altra soluzione Exchange.
>

![Exchange](images/add_domain_exchange_step1.png){.thumbnail}

Scegli una delle opzioni disponibili:

- **Seleziona un dominio dalla lista**: vengono mostrati soltanto i domini che utilizzano la configurazione OVH e inseriti come contatti nel tuo identificativo cliente;

- **Inserisci un dominio non gestito dal tuo account OVH**: per il corretto funzionamento del servizio, assicurati di poter modificare la configurazione del dominio (zona DNS).

Clicca su `Seguente`{.action}. 

![Exchange](images/add_domain_exchange_step2.png){.thumbnail}

Compare un messaggio con le informazioni relative alla configurazione della modalità del dominio.

- **Hai inserito un dominio non gestito da OVH**: la modalità non-autoritativa verrà configurata di default

- **Hai selezionato nella lista un dominio gestito da OVH**: è necessario scegliere tra due modalità

|Modalità |Descrizione|
|---|---|
|Autoritativa|È la più indicata se con il tuo dominio utilizzi esclusivamente la soluzione Exchange: questa modalità non consente infatti di utilizzare contemporaneamente un account Exchange e un altro servizio di posta.|
|Non autoritativa|È la più indicata se con il tuo dominio utilizzi contemporaneamente la soluzione Exchange e un altro servizio di posta.  È necessario indicare il server dell’altra soluzione email.|

> [!primary]
>
> La scelta di una modalità non è definitiva e può essere modificata in un secondo momento dallo Spazio Cliente OVH.
>

Clicca sul pulsante `Seguente`{.action} per continuare.

![Exchange](images/add_domain_exchange_step3.png){.thumbnail}

**Se hai selezionato nella lista un dominio gestito da OVH**, potrai configurarlo automaticamente selezionando le caselle e cliccando su `Seguente`{.action}.

**Se hai inserito un dominio non gestito da OVH**, la configurazione sarà disponibile nello step successivo.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

A questo punto, verifica che le informazioni siano corrette e clicca su `Conferma`{.action} per aggiungere il dominio. Ripeti l’operazione per tutti i domini che vuoi aggiungere.

### Step 3: configura il dominio (DNS)

Una volta associato il dominio, assicurati che la sua configurazione sia corretta verificando la colonna “Diagnostica” nella tabella: se le caselle sono verdi significa il dominio è configurato correttamente. Se, invece, sono rosse:

- **Se hai scelto una configurazione automatica durante l’aggiunta del dominio** è possibile che le informazioni visualizzate nello Spazio Cliente OVH non siano ancora aggiornate.

- **Se hai inserito un dominio non gestito da OVH**, clicca sulla casella rossa per visualizzare le modifiche da apportare. Se il dominio non utilizza i server DNS OVH, è necessario effettuare le modifiche tramite l’interfaccia di gestione della configurazione del dominio. Per cambiare le impostazioni di un record CNAME, consulta la guida [Creare un record CNAME per aggiungere un dominio associato](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_aggiungi_un_record_di_tipo_cname/){.external}.

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 1 a 24 ore.
>

Per verificare la correttezza della configurazione di un dominio, controlla nuovamente la tabella nella scheda `Domini associati`{.action} dal tuo servizio Exchange. Se la casella è diventata verde, significa che il dominio è stato configurato correttamente. In caso contrario, è possibile che la propagazione delle modifiche non sia ancora terminata.

![Email Pro](images/add_domain_exchange_step5.png){.thumbnail}

### Step 4: configura e utilizza gli account 

Ora che i domini sono stati aggiunti al servizio Exchange, è possibile utilizzarli per configurare i tuoi account di posta. Per effettuare questa operazione, utilizza la scheda `Account email`{.action}. Se necessario, è possibile anche ordinare account aggiuntivi con il pulsante `Ordina account`{.action} o `Aggiungi un account`{.action}.

Ricordati che ogni indirizzo creato nella stessa directory del tuo Exchange potrà visualizzare tutti gli altri indirizzi email associati al servizio, inclusi quelli con un dominio diverso.

Una volta completata la configurazione, puoi iniziare a utilizzare i tuoi account. OVH mette a disposizione la webmail **Outlook Web Application (OWA)**, disponibile all’indirizzo [https://www.ovh.it/mail/](https://www.ovh.it/mail/){.external}. Per un utilizzo ottimale del tuo account Exchange, assicurati che il client di posta scelto sia compatibile con il servizio. Per configurare il tuo indirizzo email su un client di posta o un dispositivo come smartphone o tablet o se hai bisogno di assistenza sulle funzionalità di Exchange, consulta le nostre guide relative alle [soluzioni collaborative Microsoft](https://docs.ovh.com/it/microsoft-collaborative-solutions/){.external}.

Dal sito OVH è inoltre possibile acquistare licenze Outlook, direttamente nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, e licenze Office 365, disponibili alla pagina [https://www.ovhcloud.com/it/collaborative-tools/microsoft-365/](https://www.ovhcloud.com/it/collaborative-tools/microsoft-365/){.external}. Per utilizzare un client di posta Outlook o una o più applicazioni della suite Office, ti consigliamo di optare per una di queste soluzioni.

## Per saperne di più

[Creare un record CNAME per aggiungere un dominio associato](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_aggiungi_un_record_di_tipo_cname/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}