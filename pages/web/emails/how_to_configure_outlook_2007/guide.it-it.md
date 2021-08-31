---
title: 'Servizio Email: guida alla configurazione di Outlook 2007'
excerpt: ''
slug: servizio_email_guida_alla_configurazione_di_outlook_2007
legacy_guide_number: g1298
hidden: true
---


## Parte 1: avvio
Apri Outlook 2007, clicca su Strumenti e su Impostazioni dell'account.

Nella nuova interfaccia che si apre, clicca su Nuovo per inserire una nuova casella email.

![](images/img_1238.jpg){.thumbnail}


## Parte 2: aggiunta
Seleziona la casella Configura manualmente i parametri del server o i tipi di server aggiuntivi in basso a sinistra e clicca su Avanti.

![](images/img_1239.jpg){.thumbnail}


## Parte 3: tipo di servizio
Seleziona Messaggistica Internet e clicca su Avanti.

![](images/img_1240.jpg){.thumbnail}


## Parte 4: impostazioni messaggi
Inserisci le informazioni richieste:

Nome: nome del tuo account email
Indirizzo di posta: il tuo indirizzo email completo
Tipo di account: POP3
Server di posta in entrata: SSL0.OVH.NET
Server di posta in uscita: SSL0.OVH.NET

Nome utente: il tuo indirizzo email completo (esempio: test@ovh.net)
Password: password di questo account email

Clicca su Impostazioni aggiuntive per continuare.

![](images/img_1241.jpg){.thumbnail}


## Parte 5: server in uscita
Nella nuova finestra che appare, seleziona Il server in uscita richiede un'autenticazione per connettersi e poi Accedi utilizzando:

Nome utente: il tuo indirizzo email completo
Password: password di questo account email.


È necessario utilizzare la porta 587 in SMTP e accettare l'autenticaizone per connettersi al server in uscita. È la porta autenticata da tutti gli Internet provider. 

![](images/img_1242.jpg){.thumbnail}

- L'autenticazione per il server in uscita è un parametro indispensabile per inviare email sui nostri server SMTP.

- Se l'autenticazione non è attivata un ticket incidente Open SMTP può essere aperto automaticamente per informarti che l'autenticazione "POP before SMTP" non è supportata. Devi tassativamente attivare l'autenticazione del server in uscita per poter inviare email.




## Parte 6: opzioni avanzate
Nella sezione Opzioni avanzate, compila i campi:


Server in entrata (POP3):  110

Questo server richiede che la connessione cifrata (SSL) sia deselezionata

Server in uscita (SMTP):  587.

Utilizza questo tipo di connessione cifrata:[ seleziona Nessuno

Clicca su OK per continuare.

In questo momento puoi definire se le email devono essere eliminate o meno dal server di posta.

![](images/img_1243.jpg){.thumbnail}


## Parte 7: finalizzazione
Il tuo account è configurato correttamente

![](images/img_1244.jpg){.thumbnail}


## Configurazione POP
Queste sono le informazioni per configurare un account email POP.

Configurazione POP con sicurezza SSL attivata o disattivata:

Indirizzo email: il tuo indirizzo di email condivisa completo

Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

Nome utente: il tuo indirizzo di mail condivisa completo
Server di posta in entrata: il server che riceve i messaggi, ssl0.ovh.net
Porta del server in entrata: la porta del server in entrata, 995 o 110
Server di posta in uscita: il server di invio delle email, ssl0.ovh.net
Porta del server in uscita: la porta del server in uscita, 465 o 587

Le porte 110 e 587 corrispondono alla securizzazione SSL disattivata.
Le porte 995 e 465 corrispondono alla securizzazione SSL attivata.


- Devi tassativamente attivare [l'autenticazione](#configuration_manuelle_partie_5_serveur_sortant) del server in uscita SMTP.


|Porte|SSLattivata|SSLdisattivata|
|In entrata|995|110|
|In uscita|465|587|




## Configurazione IMAP
Queste sono le informazioni per configurare un account email IMAP su Outlook 2007.

Configurazione IMAP con sicurezza SSL attivata o disattivata:

Indirizzo email: il tuo indirizzo di mail condivisa completo
Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
Nome utente: il tuo indirizzo di mail condivisa completo
Server di posta in entrata, il server che riceve i messaggi: ssl0.ovh.net
Porta del server in entrata, la porta del server in entrata: 993 o 143
Server di posta in uscita, il server di invio delle email: ssl0.ovh.net
Porta del server in uscita, la porta del server in uscita: 465 o 587

Le porte143 e 587 corrispondono alla securizzazione SSL disattivata.
Le porte993 e 465 corrispondono alla securizzazione SSL attivata.


- Devi tassativamente attivare [l'autenticazione](#configuration_manuelle_partie_5_serveur_sortant) del server in uscita SMTP.


|Porte|SSLattivata|SSLdisattivata|
|In entrata|993|143|
|In uscita|465|587|



