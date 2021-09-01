---
title: Servizio Email guida alla configurazione su Windows Phone
excerpt: In questa guida ti mostriamo come configurare il tuo account email sul tuo Windows Phone
slug: servizio_email_guida_alla_configurazione_su_windows_phone
legacy_guide_number: g1346
hidden: true
---


## Parte 1: impostazioni
Apri il menu Impostazioni.

Nel nostro esempio, configuriamo in POP un account email su un Nokia Lumia 625 con Windows Phone 8.0.

Quando aggiungi un account, verifica che la tua connessione 3G o Wifi sia attiva.

![](images/img_1501.jpg){.thumbnail}


## Parte 2: sistema
Per aggiungere un account, seleziona e-mail e account.

![](images/img_1502.jpg){.thumbnail}


## Parte 3: aggiungi un account
Seleziona Aggiungi un account per aggiungere un account email condiviso OVH.

A questo livello trovi altri tipi di account preconfigurati.

![](images/img_1503.jpg){.thumbnail}


## Parte 4: tipi di account
Scegli il tipo di account. Selezionando Altro account per aggiungere un account POP o IMAP.

![](images/img_1504.jpg){.thumbnail}


## Parte 5: configurazione account
Nel primo campo, inserisci il tuo indirizzo email completo.

Inserisci poi la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/manager/) per il tuo account OVH.

A questo punto, compare un avviso che ti segnala che le impostazioni relative ai dati dell’account non sono state trovate.

Per continuare la configurazione dell'account, clicca su Riprova e poi Avanzate.

![](images/img_1505.jpg){.thumbnail}


## Parte 6: configurazione avanzata
Per accedere alle impostazioni avanzate dell'account email e continuare la configurazione POP o IMAP, seleziona E-mail Internet.

![](images/img_1506.jpg){.thumbnail}


## Parte 7: impostazioni account email
Inserisci le informazioni richieste:

Nome dell'account: nome dell'account che verrà visualizzato sul telefono

Il tuo nome: nome che verrà visualizzato nei messaggi inviati

Server della posta in arrivo: SSL0.OVH.NET

Tipo di account: POP3 (puoi anche effettuare la configurazione in IMAP, utilizzando le informazioni che trovi in fondo a questa guida).

Nome utente: il tuo indirizzo email completo

Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) per il tuo account OVH

Server della posta in uscita (SMTP): SSL0.OVH.NET

Spunta le due opzioni "Il server di posta in uscita richiede l'autenticazione" e "Usa le stesse credenziali per inviare email"

Clicca su Accedi per continuare.

![](images/img_2401.jpg){.thumbnail}

- L'autenticazione per il server in uscita è un parametro indispensabile per inviare email utilizzando i nostri server SMTP.

- Se l'autenticazione non è attiva, un ticket incidente Open SMTP ti informa che l'autenticazione "POP before SMTP" non è supportata. Per inviare messaggi di posta, è necessario attivare l'autenticazione del server in uscita.




## Parte 8: finalizzazione
Il tuo account email è configurato correttamente e viene visualizzato nell'interfaccia del tuo telefono.

![](images/img_1508.jpg){.thumbnail}


## Accesso ai messaggi
Le tue email sono accessibili dalla homepage del tuo smartphone.

![](images/img_1509.jpg){.thumbnail}


## Configurazione POP
Ecco le informazioni necessarie alla configurazione di un account email POP.

Configurazione POP con protocollo SSL attivato o disattivato:

Indirizzo Email: il tuo indirizzo email completo.
Password: la password che hai definito nel tuo [Spazio Cliente OVH](https://www.ovh.com/manager/)
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di posta in arrivo, SSL0.OVH.NET.
Porta del server in entrata:995 o 110
Server in uscita: il server di posta in uscita, SSL0.OVH.NET
Porta del server in uscita:465 o 587

Se utilizzi le porte 110 e 587, il protocollo SSL è disattivato.
Se utilizzi le porte 995 e 465, il protocollo SSL è attivato. 


- Ricordati che è necessario attivare [l'autenticazione](#configurazione_account_di_posta_condivisa_con_windows_phone_8_partie_7_impostazioni_account_email) del server di posta in uscita SMTP.


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



