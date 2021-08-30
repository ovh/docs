---
title: 'Email condivisa: guida alla configurazione di Thundebird'
excerpt: ''
slug: email_condivisa_guida_alla_configurazione_di_thundebird
legacy_guide_number: g1297
section: Configurazione su computer
order: 04
---


## Parte 1: avvio
Accedi all'applicazione "Thunderbird".

Questa è l'interfaccia che appare di default se non ci sono account email configurati. Altrimenti accedi al menu per aggiungere un nuovo account.

Seleziona "Posta elettronica" per continuare.

![](images/img_1227.jpg){.thumbnail}


## Parte 2: avvio (seguito)
Per continuare l'installazione dell'account email, seleziona "Salta questo step e utilizza il mio indirizzo esistente" per continuare.

![](images/img_1228.jpg){.thumbnail}


## Parte 3: creazione account
Compila questi campi

"Nome e cognome": inserisci il nome che vuoi che sia visualizzato

"Indirizzo email": il tuo indirizzo email completo

"Password": password definita nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanagerl) per l'account condiviso

"Ricorda la password": seleziona questa opzione

Thunderbird recupera i parametri dell'indirizzo email e ti propone due configurazioni: IMAP ou POP3.

Nel nostro esempio, configuriamo l'account in IMAP. È possibile configurarlo in POP, con le informazioni alla fine di questa guida, per un account POP3.

Thunderbird ti consente di eseguire una configurazione manuale, ti spieghiamo come nella sezione "Configurazione Manuale" della nostra guida.

Clicca su "Completato" per finalizzare l'installazione.

![](images/img_1229.jpg){.thumbnail}


## Parte 4: finalizzazione
A questo livello, il tuo indirizzo email è stato aggiunto automaticamente e funziona.

Analizziamo le diverse configurazioni dell'account. 
Seleziona "Visualizza i parametri di questo account" dopo aver cliccato sull'indirizzo mail.

![](images/img_1230.jpg){.thumbnail}


## Parametri dell'account
Qui trovi le informazioni generali sul tuo account email.

Puoi aggiungere una firma o definire un indirizzo a cui rispondano le persone che ti hanno scritto.

Puoi anche consultare e modificare il server SMTP utilizzato per l'account email.

![](images/img_1231.jpg){.thumbnail}


## Impostazioni del server in entrata
In questa finestra trovi le informazioni sul server di posta in entrata. 

Imposta l'intervallo di tempo fra un aggiornamento e l'altro o la politica di eliminazione delle mail.

![](images/img_1232.jpg){.thumbnail}


## Copie e cartelle
Gestisci le impostazioni delle cartelle, dell'invio dei messaggi e degli archivi.

![](images/img_1233.jpg){.thumbnail}


## Sincronizzazione e spazio disco
Scegli come sincronizzare le tue mail, definisci i parametri di eliminazione dei messaggi.

![](images/img_1234.jpg){.thumbnail}


## Impostazione del server in uscita SMTP
Aggiungi o modifica i server SMTP configurati sul tuo client.

![](images/img_1235.jpg){.thumbnail}


## Impostazione del server in uscita SMTP: parte 2
Trovi qui i parametri che puoi modificare, che vengono visualizzati dopo aver selezionato il tuo server SMTP e cliccato su "Modifica".


- Devi tassativamente attivare l'autenticazione[/url] del server in uscita SMTP.


Seleziona per metodo di autenticazione Password normale

![](images/img_1236.jpg){.thumbnail}

- L'autenticazione con Password è un parametro indispensabile per inviare email sui nostri server SMTP.

- Se l'autenticazione non è attivata un ticket incidente Open SMTP può essere aperto automaticamente per informarti che l'autenticazione "POP before SMTP" non è supportata. Devi tassativamente attivare l'autenticazione del server in uscita per poter inviare email.




## Aggiungi manualmente un account
Dopo aver cliccato su "Configurazione manuale" (Cf. parte 3).

Definisci i tuoi parametri di configurazione dell'account email.

![](images/img_1237.jpg){.thumbnail}


## Configurazione POP
Queste sono le informazioni per configurare un account email POP.

Configurazione POP con sicurezza SSL attivata o disattivata:

Indirizzo email: il tuo indirizzo di mail condivisa completo
Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
Nome utente: il tuo indirizzo di mail condivisa completo
Server di posta in entrata, il server che riceve i messaggi: ssl0.ovh.net
Porta del server in entrata, la porta del server in entrata: 995 o 110
Server di posta in uscita, il server di invio delle mail: ssl0.ovh.net
Porta del server in uscita, la porta del server in uscita: 465 o 587

Le porte110 e 587 corrispondono alla securizzazione SSL disattivata.
Le porte995 e 465 corrispondono alla securizzazione SSL attivata.


- Devi tassativamente attivare [l'autenticazione](#configuration_partie_7_parametres_avances_du_serveur_denvoi) del server in uscita SMTP.


|Porte|SSLattivata|SSLdisattivata|
|---|---|---|
|In entrata|995|110|
|In uscita|465|587|




## Configurazione IMAP
Queste sono le informazioni per configurare un account email IMAP.

Configurazione IMAP con sicurezza SSL attivata o disattivata:

Indirizzo email: il tuo indirizzo di mail condivisa completo

Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

Nome utente: il tuo indirizzo di mail condivisa completo
Server di posta in entrata, il server che riceve i messaggi: ssl0.ovh.net
Porta del server in entrata, la porta del server in entrata: 993 o 143
Server di posta in uscita, il server di invio delle mail: ssl0.ovh.net
Porta del server in uscita, la porta del server in uscita: 465 o 587

Le porte143 e 587 corrispondono alla securizzazione SSL disattivata.
Le porte993 e 465 corrispondono alla securizzazione SSL attivata.


- Devi tassativamente attivare [l'autenticazione](#activer_lauthentification_smtp_sous_ios_-_iphone_-_ipad) del server in uscita SMTP.


|Porte|SSLattivata|SSLdisattivata|
|---|---|---|
|In entrata|993|143|
|In uscita|465|587|
