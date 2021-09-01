---
title: 'Email condivisa: guida alla configurazione su tablet Android 4.1.2'
excerpt: Guida alla configurazione su tablet Android 4.1.2
slug: email_condivisa_guida_alla_configurazione_su_tablet_android_412
legacy_guide_number: g1283
hidden: true
---


## Parte 1: email
Clicca sull'icona "E-mail".

Nel nostro esempio, l'account email condiviso è configurato in POP su un Samsung Tab GT p7510 con Android 4.1.2

Verifica che la connessione 3G o Wifi sia attiva.

![](images/img_1161.jpg){.thumbnail}


## Parte 2: configurazione account email
Inserisci il tuo indirizzo email completo e la password definita nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) per il tuo account email.

Clicca su "Configurazione manuale" per continuare.

![](images/img_1162.jpg){.thumbnail}


## Parte 3: tipo di account email
Seleziona "Account POP3" per continuare la configurazione dell'account.

Se vuoi configurarlo in IMAP, utilizza le impostazioni che trovi in fondo a questa guida.

![](images/img_1163.jpg){.thumbnail}


## Parte 4: parametri del server in entrata
Inserisci le informazioni del tuo account per proseguire

"Nome utente": il tuo indirizzo email completo

"Password": password che hai definito nel tuo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

"Server POP3": inserisci SSL0.OVH.NET

"Tipo di sicurezza": seleziona "SSL (accetta tutti i certificati)".

"Porta": inserisci la porta 995.

Clicca su "Avanti" per continuare.

![](images/img_1164.jpg){.thumbnail}


## Parte 5: impostazioni del server in uscita
Inserisci le informazioni del tuo account email condiviso per il server in uscita

"Server SMTP": inserisci SSL0.OVH.NET

"Tipo di sicurezza": seleziona "SSL (accetta tutti i certificati)"

"Porta": inserisci la porta 465

"Connessione richiesta": deve essere selezionato 

"Nome utente": indirizzo email completo

"Password": password inserita nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

Clicca su "Avanti" per continuare.

![](images/img_1165.jpg){.thumbnail}

- Avere una connessione per il server in uscita è un parametro fondamentale per l'invio di email con i nostri server SMTP.

- Se la connessione non è attiva, può essere aperto un ticket incidente Open SMTP che indica che l'autenticazione "POP before SMTP" non è supportata. Devi tassativamente attivare una connessione per il server in uscita per inviare le email.




## Parte 6: opzioni account
Definisci qui alcune opzioni di configurazione per l'indirizzo email condiviso.

Clicca su "Avanti" per continuare dopo aver definito i tuoi parametri.

![](images/img_1166.jpg){.thumbnail}


## Parte 7: finalizzazione
Rinomina il tuo account di posta e scegli il nome da visualizzare nei messaggi in uscita.

Clicca su "OK" per completare l'installazione del tuo account.

![](images/img_1167.jpg){.thumbnail}


## Interfaccia email
Questa è l'interfaccia pronta da utilizzare, clicca sull'icona in alto a destra per accedere alle impostazioni.

![](images/img_1168.jpg){.thumbnail}


## Informazioni sulla configurazione IMAP
Queste sono le informazioni da inserire nella configurazione IMAP per il tuo server in entrata

"Nome utente": il tuo indirizzo mail completo

"Password": password definita nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

"Server IMAP": inserisci SSL0.OVH.NET

"Tipo di sicurezza": seleziona "SSL (accetta tutti i certificati)"

"Porta": inserisci la porta 993.

Queste sono le informazioni di configurazione IMAP per il server in uscita. 

"Server SMTP": inserisci SSL0.OVH.NET

"Tipo di sicurezza": seleziona "SSL (accetta tutti i certificati)"

"Porta": inserisci la porta 465.

"Connessione richiesta": deve essere selezionato.

"Nome utente": il tuo indirizzo email completo.

"Password": password definita nel [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).


## Configurazione POP
Ecco le informazioni che devi avere per configurare un indirizzo email POP.

Configurazione POP con protocollo SSL attivato o disattivato: 

Indirizzo Email: il tuo indirizzo email completo.
Password: la password che hai indicato nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di ricezione delle email: SSL0.OVH.NET
Porta server in entrata: La porta del server in entrata: 995 o 110
Server in uscita: il server di invio delle emails: SSL0.OVH.NET
Porta server in uscita: La porta del server in uscita: 465 o 587

Le porte 110 e 587 corrispondono al protocollo SSL disattivato.
Le porte 995 e 465 corrispondono al protocollo SSL attivato.


- Devi tassativamente attivare [l'autenticazione](#configuration_protocole_pop_partie_5_parametres_du_serveur_sortant) del server in uscita SMTP.


|Porte|SSLattivate|SSLdisattivate|
|In entrata|995|110|
|In uscita|465|587|




## Configurazione IMAP
Ecco le informazioni che devi avere per configurare un indirizzo email IMAP.

Configurazione IMAP con protocollo SSL attivato o disattivato: 

Indirizzo Email: il tuo indirizzo email completo.
Password: la password che hai indicato nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
Nome utente: il tuo indirizzo email completo.
Server in entrata: il server di ricezione delle email: SSL0.OVH.NET
Porta server in entrata: La porta del server in entrata: 993 o 143
Server in uscita: il server di invio delle emails: SSL0.OVH.NET
Porta server in uscita: La porta del server in uscita: 465 o 587

Le porte 143 e 587 corrispondono al protocollo SSL disattivato.
Le porte 993 e 465 corrispondono al protocollo SSL attivato.


- Devi tassativamente attivare [l'autenticazione](#configuration_protocole_pop_partie_5_parametres_du_serveur_sortant) del server in uscita SMTP.


|Porte|SSLattivate|SSLdisattivate|
|In entrata|993|143|
|In uscita|465|587|



