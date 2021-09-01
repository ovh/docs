---
title: 'Email condivisa: guida alla configurazione di Outlook 2010'
excerpt: ''
slug: email_condivisa_guida_alla_configurazione_di_outlook_2010
legacy_guide_number: g1299
hidden: true
---


## Aggiunta di un account: parte 1
Per aggiungere un account utilizzando Outlook 2010, accedi all'interfaccia "Parametri account", come vedi in figura.

![](images/img_1245.jpg){.thumbnail}


## Aggiunta di un account: parte 2
Clicca su Nuovo.

Scegli fra la configurazione [manuale](#MANU) o [automatica](#AUTO).

![](images/img_1246.jpg){.thumbnail}


## Parte 1: scelta della configurazione
Seleziona "Configurazione manuale o tipi di server supplementari", clicca su "Avanti" per continuare.

![](images/img_1247.jpg){.thumbnail}


## Parte 2: scelta del servizio
Seleziona Messaggistica Internet e clicca su "Avanti" per continuare.

![](images/img_1248.jpg){.thumbnail}


## Parte 3: impostazioni del servizio di posta
Inserisci le informazioni richieste

1. Nome: inserisci il nome da visualizzare sui messaggi in uscita
2. Indirizzo di posta: il tuo indirizzo email completo

3. Tipo di accountPOP3 (per IMAP cfr. [Reminder parametri POP - IMAP](#RAPPEL))
4. Server di posta in entrata: ssl0.ovh.net
5. Server di posta in uscita (SMTP): ssl0.ovh.net

6. Nome utente: il tuo indirizzo email completo
7. Password: password che hai definito per l'account email

![](images/img_1249.jpg){.thumbnail}


## Parte 4: generale
1. Clicca su Impostazioni supplementari.
Puoi inserire la referenza dell'account che vuoi. Di default è l'indirizzo email. In questo caso, l'abbiamo sostituito con Supporto OVH.
Questa referenza viene visualizzata nella gestione degli account email in Outlook.

2. Clicca sul menu Server in uscita.

![](images/img_1250.jpg){.thumbnail}


## Parte 5: server in uscita e opzioni avanzate
Nella sezione Server in uscita, seleziona la casella "Il server in uscita (SMTP) richiede l'autenticazione", seleziona Utilizza i parametri del server in entrata.


È necessario utilizzare la porta 587 in SMTP e selezionare la casella di autenticazione per la connessione del server in uscita.


- L'autenticazione per il server in uscita è un parametro indispensabile per inviare email sui nostri server SMTP.

- Se l'autenticazione non è attivata un ticket incidente Open SMTP può essere aperto automaticamente per informarti che l'autenticazione "POP before SMTP" non è supportata. Devi tassativamente attivare l'autenticazione del server in uscita per poter inviare email.


Nel menu Opzioni avanzate, inserisci

Server in entrata (POP3):  doit être le 110.

Il server richiede una connessione cifrata (SSL) deve essere deselezionata.

Server in uscita (SMTP): deve essere il 587.

Utilizza il tipo di connessione cifrata che segue  deve essere impostato su Nessuno

Clicca su OK per continuare.

In questo momento è possibile definire le mail che devono essere eliminate dal server di posta e il tempo che trascorre prima dell'eliminazione.

![](images/img_1251.jpg){.thumbnail}


## Parte 6: test delle impostazioni
Testa le tue impostazioni cliccando su "Testa le impostazioni dell'account".

![](images/img_1267.jpg){.thumbnail}


## Parte 7: termine della configurazione
1.  Dopo esserti assicurato che le imopostazioni sono corrette, clicca su Avanti>.
2.  Durante l'ultimo step viene effettuato un ultimo test. Clicca su Chiudi.

![](images/img_1266.jpg){.thumbnail}


## Parte 8: congratulazioni!
Hai configurato correttamente il tuo account per Outlook 2010. Clicca su Termina/green].

![](images/img_1254.jpg){.thumbnail}


## 1. Immissione delle informazioni
1. Nome: Inserisci il nome che deve essere visualizzato ai destinatari delle tue email
2. Indirizzo di posta: il tuo indirizzo email completo
3. Password: password associata al tuo account email 
Clicca su Avanti>.

![](images/img_1264.jpg){.thumbnail}


## 2. Autorizzazione
Outlook cerca gli elementi del tuo dominio di cui ha bisogno per completare la configurazione automatica.
Se tutto è corretto, un messaggio te lo confermerà.

Vuoi aggiungere altri indirizzi email al dominio in questione? Spunta Non chiedermelo più per questo sito, in questo modo eviterai di spuntare questa casella ogni volta che aggiungi un account email.

Clicca poi su Autorizza.

Se non visualizzi questo messaggio, verifica la tua password con la [Webmail](http://webmail.ovh.net). Se la tua password va bene, verifica che la tua zona DNS contenga queste 3 linee:


```
_submission._tcp.tuodominio SRV 0 0 465 SSL0.OVH.NET
_imaps._tcp.tuodominioSRV 0 0 993 SSL0.OVH.NET
_autodiscover._tcp.tuodominio SRV 0 0 443 mailconfig.ovh.net.
```


Per farlo, connettiti al tuo [Spazio Cliente OVH](https://www.ovh.com/manager/web), seleziona il tuo dominio nella colonna di sinistra e poi clicca sul tab Zona DNS. Accertati di essere 
in Modalità esperto (in alto a destra).

![](images/img_1265.jpg){.thumbnail}


## 3. Configurazione terminata
Outlook ha registrato correttamente la configurazione.

Clicca su Termina.

![](images/img_1263.jpg){.thumbnail}


## Configurazione POP
Queste sono le informazioni per configurare un account email POP su Outlook 2010.

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


- Devi tassativamente attivare [l'autenticazione](#configuration_manuelle_partie_5_serveur_sortant_amp_options_avancees) del server in uscita SMTP.


|Porte|SSLattivata|SSLdisattivata|
|In entrata|995|110|
|In uscita|465|587|




## Configurazione IMAP
Queste sono le informazioni per configurare un account email IMAP su Outlook 2010.

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



- Devi tassativamente attivare [l'autenticazione](#onfiguration_manuelle_partie_5_serveur_sortant_amp_options_avancees) del server in uscita SMTP.


|Porte|SSLattivata|SSLdisattivata|
|In entrata|993|143|
|In uscita|465|587|




## Informazioni generali
Se vuoi, possiamo occuparci di alcuni servizi relativi al tuo account email con interventi a pagamento.

Per informazioni contatta il [nostro supporto](http://www.ovh.it/supporto/).

![](images/img_2503.jpg){.thumbnail}

