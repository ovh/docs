---
title: 'Servizio Email: guida alla configurazione di Outlook 2011 su Mac'
excerpt: In questa guida ti mostriamo come configurare Outlook 2011 sull'email di Mac
slug: servizio_email_guida_alla_configurazione_di_outlook_2011_su_mac
legacy_guide_number: g1345
hidden: true
---


## Parte 1: avvio
Apri il tuo programma Microsoft Outlook 2011 sul tuo Mac.

In questa guida configuriamo il nostro client in IMAP, con protocollo SSL attivato.

Per configurare il tuo client in POP, utilizza le informazioni alla fine di questa guida.

Per la nostra configurazione, utilizziamo la versione 10.9.1 di Mac e la versione 14.0.0 di Outlook 2011.

![](images/img_1492.jpg){.thumbnail}


## Parte 2: strumenti-account
Clicca su Strumenti e poi su Account.

Al momento sul nostro client non è configurato nessun account.

![](images/img_1493.jpg){.thumbnail}


## Parte 3: aggiungi un account
Nella nuova interfaccia visualizzata, seleziona l'icona Account di posta per aggiungere un account email POP o IMAP.

![](images/img_1494.jpg){.thumbnail}


## Parte 4: informazioni account
Nella nuova interfaccia visualizzata, inserisci:

Indirizzo email: il tuo indirizzo email completo

Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/manager/)

Nome utente: il tuo indirizzo email completo

Tipo: seleziona IMAP (per eseguire la configuzione in POP, utilizza le informazioni alla fine di questa guida)

Server di posta in entrata: SSL0.OVH.NET

Porta del server in entrata: 993

Seleziona le opzioni "Utilizza la porta di default" e "Utilizza l'SSL per accedere (consigliato)".

Server di posta in uscita:  SSL0.OVH.NET

Porta del server in uscita: 465

Seleziona le opzioni "Utilizza la porta di default" e "Utilizza l'SSL per accedere (consigliato)".

Se ti viene richiesto, memorizza la password in modo da non doverla inserire di nuovo in futuro.

Clicca su Aggiungi un account per registrarlo.

![](images/img_1495.jpg){.thumbnail}


## Parte 5: finalizzazione
Il tuo account email è stato aggiunto nell'interfaccia di Outlook 2011.

Consulta, scrivi o elimina le tue email.

![](images/img_1496.jpg){.thumbnail}


## Strumenti - Account
Clicca su Strumenti e poi su Account.

Seleziona l'account che vuoi modificare.

Clicca su Altre opzioni nel menu a tendina e seleziona Autenticazione -> Utilizza le informazioni del server in entrata.

A questo livello puoi modificare le informazioni di configurazione del tuo account email, tranne il tipo di account (POP o IMAP)

Controlliamo le opzioni disponibili in Avanzato.

![](images/img_2138.jpg){.thumbnail}

- L'autenticazione per il server in uscita è un parametro indispensabile per inviare email utilizzando i nostri server SMTP.

- Se l'autenticazione non è attiva, un ticket incidente Open SMTP ti informa che l'autenticazione "POP before SMTP" non è supportata. Per inviare messaggi di posta, è necessario attivare l'autenticazione del server in uscita.




## Server
Ecco i parametri che puoi modificare nel tab "Server" delle opzioni avanzate del tuo account.

![](images/img_1498.jpg){.thumbnail}
Per il corretto funzionamento della configurazione, ti invitiamo a inserire il file INBOX nel campo Cartella IMAP.


## Cartelle
Ecco i parametri che puoi modificare nel tab "Cartelle" delle opzioni avanzate del tuo account.

![](images/img_1499.jpg){.thumbnail}


## Sicurezza
Ecco i parametri che puoi modificare nel tab "Sicurezza" delle opzioni avanzate del tuo account.

![](images/img_1500.jpg){.thumbnail}


## Configurazione POP
Ecco le informazioni necessarie alla configurazione di un account email POP.

Configurazione POP con protocollo SSL attivato o disattivato:

Indirizzo Email: il tuo indirizzo email completo.

Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/manager/).
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di posta in arrivo, SSL0.OVH.NET.
Porta del server in entrata:995 o 110
Server in uscita: il server di posta in uscita, SSL0.OVH.NET
Porta del server in uscita:465 o 587

Se utilizzi le porte 110 e 587, il protocollo SSL è disattivato.
Se utilizzi le porte 995 e 465, il protocollo SSL è attivato.


- Ricordati che è necessario attivare [l'autenticazione](#modifica_il_tuo_account_email_su_outlook_2011_mac_strumenti_-_account) del server di posta in uscita SMTP.


|Porte|SSLattivato|SSLdisattivato|
|In entrata|995|110|
|In uscita|465|587|




## Configurazione IMAP
Ecco le informazioni necessarie alla configurazione di un account email IMAP.

Configurazione IMAP con protocollo SSL attivato o disattivato:

Indirizzo email: il tuo indirizzo email completo.
Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/manager/).
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di posta in arrivo, SSL0.OVH.NET.
Porta del server in entrata:993 o 143.
Server in uscita: il server di posta in uscita, SSL0.OVH.NET.
Porta del server in uscita:465 o 587.

Se utilizzi le porte 143 e 587, il protocollo SSL è disattivato.
Se utilizzi le porte 993 e 465, il protocollo SSL è attivato.


- Ricordati che è necessario attivare [l'autenticazione](#modifica_il_tuo_account_email_su_outlook_2011_mac_strumenti_-_account) del server di posta in uscita SMTP.


|Porte|SSLattivato|SSLdisattivato|
|In entrata|993|143|
|In uscita|465|587|



