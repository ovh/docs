---
title: 'Gestire la politica di sicurezza di un servizio Exchange'
slug: gestire-politica-di-sicurezza-password
excerpt: 'Come configurare la politica di sicurezza del tuo servizio Exchange'
section: 'Iniziare a utilizzare Exchange'
order: 6
---

**Ultimo aggiornamento: 25/11/2019**

## Obiettivo

Il servizio di posta Exchange permette di usufruire di indirizzi email professionali con numerose funzionalità in grado di facilitare il lavoro collaborativo. Per preservare l’ambiente di lavoro è possibile, ad esempio, gestire i parametri generali relativi alla sicurezza dei propri account.

**Questa guida ti mostra come definire la politica di sicurezza del tuo servizio Exchange.**

## Prerequisiti

- Disporre di una soluzione [Exchange](https://www.ovh.it/emails/){.external}
- Avere accesso alla sezione `Web`{.action} dello `Spazio Cliente OVH`{.action}

## Procedura

Il servizio di posta Exchange permette di configurare la politica di sicurezza in modo da consentire le seguenti azioni:

- aumentare la sicurezza degli account Exchange quando gli utenti tentano di effettuare l’accesso
- rendere più complesse le password associate agli account del servizio Exchange
- rafforzare la verifica dei messaggi in entrata sui nostri server e destinati ai tuoi indirizzi Exchange
- definire la modalità di visualizzazione dei messaggi indesiderati negli account Exchange

Per accedere alla politica di sicurezza del tuo servizio Exchange accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager), sezione `Web`. Seleziona il tuo servizio cliccando su `Microsoft`{.action} > `Exchange`{.action} nel menu a sinistra.

Nella nuova pagina clicca sulla scheda `Altre opzioni`{.action} e seleziona `Gestisci la politica di sicurezza`{.action}.

![exchangesecurity](images/exchange-security-step1.png){.external}

Prosegui nella lettura di questa guida consultando la sezione corrispondente all’azione che vuoi effettuare:

|Azione|Descrizione| 
|---|---| 
|[Aumentare la sicurezza della connessione](./#aumentare-la-sicurezza-della-connessione){.external}|Permette di definire se gli account devono essere bloccati dopo un certo numero di tentativi di connessione non andati a buon fine.|
|[Rendere la password più complessa](./#rendere-la-password-piu-complessa){.external}|Permette di stabilire i requisiti di complessità e le regole relative alla modifica della password.|
|[Rafforzare il controllo dei messaggi in entrata](./#rafforzare-il-controllo-dei-messaggi-in-entrata){.external}|Permette di indicare se i server OVH devono verificare che i messaggi ricevuti provengano da una sorgente legittima (verifiche DKIM e SPF).|
|[Definire la visualizzazione dei messaggi indesiderati](./#definire-la-visualizzazione-dei-messaggi-indesiderati){.external}|Permette di indicare se assegnare ai messaggi indesiderati un tag che consenta di identificarli o spostarli automaticamente nel cestino.|

### Aumentare la sicurezza della connessione

Questa azione permette di definire se gli account Exchange devono essere bloccati dopo un certo numero di tentativi di connessione non andati a buon fine.

Per effettuare questa modifica completa i campi seguendo le indicazioni della tabella:

|Campo|Descrizione| 
|---|---| 
|Limite di blocco|Imposta il numero di tentativi di connessione non riusciti tollerati prima di bloccare l’account. Se il valore inserito è “0”, non viene applicato nessun limite di blocco.|
|Tempo di attesa prima della reinizializzazione|Questo campo compare soltanto se viene impostato un limite di blocco. Indica l’intervallo di tempo che deve trascorrere prima che il contatore dei tentativi di connessione non riusciti venga azzerato.|
|Durata del blocco|Questo campo compare soltanto se viene impostato un limite di blocco. Indica l’intervallo di tempo in cui l’account Exchange resterà bloccato in caso di raggiungimento del limite di blocco.|

Una volta completate le informazioni, clicca su `Seguente`{.action} >`Conferma`{.action} per applicare le modifiche e infine prosegui con lo step successivo.

### Rendere la password più complessa

Questa azione stabilire i requisiti di complessità e le regole relative alla modifica della password.

Per effettuare questa modifica completa li campi seguendo le indicazioni della tabella:

|Campo|Descrizione| 
|---|---| 
|Requisiti di complessità|Permette di impostare le regole relative alla complessità delle password:<br> \- non deve contenere interamente o in parte il nome dell’account utente<br> \- deve contenere almeno 6 caratteri<br> \- deve contenere lettere maiuscole, minuscole, caratteri speciali (come “!” o “$”) e numeri|
|Impedisci la modifica della password|Consente di definire la durata di vita minima delle password associate agli account Exchange: gli utenti dovranno attendere un certo numero di giorni prima di poter modificare la password impostata.|
|Durata di validità massima della password|Consente di definire la durata di vita massima delle password associate agli account Exchange: il sistema richiederà all’utente di modificare la password alla scadenza dell’intervallo di tempo impostato.|
|Conserva lo storico delle password|Questo campo compare soltanto se è stata impostata una durata di vita massima. Indica se le precedenti password possono essere riutilizzate e, in questo caso, entro quanto tempo.|
|Lunghezza minima della password|Consente di impostare una numero minimo di caratteri per la password.|

Una volta completate le informazioni, clicca su `Seguente`{.action} >`Conferma`{.action} per applicare le modifiche e infine prosegui con lo step successivo.

### Rafforzare il controllo dei messaggi in entrata

Questa azione permette di indicare se i server OVH devono verificare che i messaggi ricevuti provengano da una sorgente legittima (verifiche DKIM e SPF).

Per effettuare questa modifica completa i campi seguendo le indicazioni della tabella:

|Campo|Descrizione| 
|---|---| 
|Attiva la verifica della firma DKIM|Indica se i server OVH devono verificare la firma DKIM dei messaggi ricevuti sugli account Exchange. Questa azione garantisce l’autenticità del dominio del mittente e l’integrità del messaggio. Consente inoltre di identificare invii non legittimi, che verranno contrassegnati come Spam.|
|Attiva la verifica della protezione SPF|Indica se i server OVH devono verificare che la sorgente dei messaggi ricevuti sia presente nel record SPF del dominio mittente. Questa verifica consente di identificare invii non legittimi, che verranno contrassegnati come Spam.|

Una volta completate le informazioni, clicca su `Seguente`{.action} >`Conferma`{.action} per applicare le modifiche e infine prosegui con lo step successivo.

### Definire la visualizzazione dei messaggi indesiderati

Questa azione permette di indicare se assegnare ai messaggi indesiderati un tag che consenta di identificarli o spostarli automaticamente nel cestino.

Per effettuare questa modifica completa i campi seguendo le indicazioni della tabella:

|Campo|Descrizione| 
|---|---| 
|Identifica i messaggi indesiderati|Indica se i server OVH devono aggiungere un tag per identificare la posta indesiderata come Spam.|
|Sposta la posta indesiderata nel cestino|Indica se i server OVH devono spostare automaticamente la posta indesiderata nel cestino.|

Una volta completate le informazioni, clicca su `Seguente`{.action} > `Conferma`{.action} per applicare le modifiche.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.