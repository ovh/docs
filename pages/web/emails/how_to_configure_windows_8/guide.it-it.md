---
title: 'Servizio Email: guida alla configurazione di Windows 8'
excerpt: ''
slug: servizio_email_guida_alla_configurazione_di_windows_8
legacy_guide_number: g1281
hidden: true
---


## Parte 1: avvio
Accedi all'applicazione Posta di Windows 8 sul desktop del tuo computer.

Al primo avvio, inserisci il tuo indirizzo di posta e la password associata.

Se hai già un account, dovresti visualizzare questa interfaccia.

Sulla destra, seleziona Impostazioni.

![](images/img_1142.jpg){.thumbnail}


## Parte 2: account
Clicca su Account per aggiungere il tuo account di posta OVH.

![](images/img_1143.jpg){.thumbnail}


## Parte 3: aggiungi un account
Sono già presenti alcuni indirizzi email. 

Dopo aver aggiunto un account email, cliccaci per accedere alle impostazioni.

Clicca su Aggiungi un account per continuare.

![](images/img_1144.jpg){.thumbnail}


## Parte 4: tipo di account
Seleziona il tipo di account che vuoi aggiungere.

Clicca su Altro account per continuare.

![](images/img_1145.jpg){.thumbnail}


## Parte 5: impostazioni
Nella finestra che appare, inserisci le informazioni richieste:

Indirizzo di posta: il tuo indirizzo email OVH completo

Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

Clicca su Connetti per continuare.

![](images/img_1146.jpg){.thumbnail}


## Parte 6: impostazioni avanzate
In questa interfaccia, compila i campi

"Indirizzo di posta": indirizzo email condivisa  completo
"Nome utente": indirizzo email condivisa  completo

"Password": password indicata nel [Manager](https://www.ovh.com/auth/?action=gotomanagerl) per questo account. 

"Server di posta in entrata (IMAP)":
l'indirizzo del server è SSL0.OVH.NET.
La "Porta" è la 993.

"Il server in entrata richiede l'SSL": deve essere selezionato.

"Server di posta in uscita (SMTP)":
l'indirizzo del server è SSL0.OVH.NET.
La "Porta" è la 465.

"Il server in uscita richiede l'SSL": deve essere selezionato.

"Il server in uscita richiede l'autenticazione": deve essere selezionato.

"Utilizza lo stesso nome utente e la stessa password per inviare e ricevere messaggi": deve essere selezionato.

Clicca su "Connetti" per continuare.

![](images/img_1147.jpg){.thumbnail}

- L'autenticazione per il server in uscita è un parametro indispensabile per inviare email utilizzando i nostri server SMTP.

- Se l'autenticazione non è attivata un ticket incidente Open SMTP ti informa che l'autenticazione "POP before SMTP" non è supportata. Per inviare messaggi di posta, è necessario attivare l'autenticazione del server in uscita.




## Parte 7: finalizzazione
Il tuo account email è configurato correttamente in IMAP!

Questa è l'interfaccia di utilizzo delle email.

Sulla destra trovi il menu delle impostazioni dell'account ([ritorna alla parte 3 di questa guida](#configurazione_protocollo_imap_parte_3_aggiungi_un_account)).

![](images/img_1148.jpg){.thumbnail}


## Configurazione POP
Ecco le informazioni necessarie alla configurazione di un account email POP.

Configurazione POP con protocollo SSL attivato o disattivato:

Indirizzo email: il tuo indirizzo email completo.
Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di posta in arrivo, SSL0.OVH.NET.
Porta del server in entrata: 995 o 110
Server in uscita: il server di posta in uscita, SSL0.OVH.NET.
Porta del server in uscita:465 o 587.

Se utilizzi le porte 110 e 587, il protocollo SSL è disattivato.
Se utilizzi le porte 995 e 465, il protocollo SSL è attivato.

Ricordati che è necessario attivare [l'autenticazione](#configurazione_parte_6_impostazioni_avanzate_del_server_in_uscita) del server di posta in uscita SMTP.

|Porte|SSLattivato|SSLdisattivato|
|In entrata|995|110|
|In uscita|465|587|




## Configurazione IMAP
Ecco le informazioni necessarie alla configurazione di un account email IMAP.

Configurazione IMAP con protocollo SSL attivato o disattivato:

Indirizzo email: il tuo indirizzo email completo.
Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di posta in arrivo, SSL0.OVH.NET.
Porta del server in entrata:993 o 143.
Server in uscita: il server di posta in uscita, SSL0.OVH.NET.
Porta del server in uscita:465 o 587.

Se utilizzi le porte 143 e 587, il protocollo SSL è disattivato.
Se utilizzi le porte 993 e 465, il protocollo SSL è attivato.

Ricordati che è necessario attivare [l'autenticazione](#configurazione_parte_6_impostazioni_avanzate_del_server_in_uscita) del server di posta in uscita SMTP.

|Porte|SSLattivato|SSLdisattivato|
|In entrata|993|143|
|In uscita|465|587|



