---
title: 'Exchange 2013/2016: configurazione di Thunderbird'
excerpt: ''
slug: exchange_20132016_configurazione_di_thunderbird
legacy_guide_number: g1278
---


## Parte 1: avvio
Accedi a Thunderbird.

Se non hai account configurati, si apre questa interfaccia, altrimenti accedi al menu per aggiungere un nuovo account.

Seleziona Posta elettronica per continuare.

![](images/img_1127.jpg){.thumbnail}


## Parte 2: avvio
Per proseguire nell'installazione di un indirizzo mail, seleziona  Vai avanti e utilizza un indirizzo esistente.

![](images/img_1128.jpg){.thumbnail}


## Parte 3: creazione dell'account
Compila i campi:

Nome e cognome: inserisci il nome che vuoi che venga visualizzato.

Indirizzo mail: il tuo indirizzo email.

Password: password che hai scelto nel tuo [Spazio Cliente OVH](https://www.ovh.com/manager/web/login.html) per questo account Exchange.
La password deve contenere minimo 8 caratteri di cui almeno 1 numero, 1 lettera e 1 speciale.

Ricorda la password: seleziona questa opzione.

Clicca su Continua per continuare l'installazione.

![](images/img_1129.jpg){.thumbnail}


## Parte 4: configurazione avanzata
Per gli ordini effettuati dal 26/04/2016, per il server Exchange per un'offerta Hosted è: ex2.mail.ovh.net.
Clicca su Configurazione manuale.

Verifica che questi campi siano compilati correttamente:

Server in entrata: IMAP:
per un account di tipo Hosted
nome host del server: ex.mail.ovh.net.
Porta: 143.
Cifratura: STARTTLS.
Autenticazione: password normale.

Server in uscita: SMTP:
per un account di tipo Hosted
nome host del server: ex.mail.ovh.net.
Porta: 587.
Cifratura: STARTTLS.
Autenticazione: password normale.

Identificativo: il tuo indirizzo email completo.

Per gli account di tipo Private, inserisci il nome del server che hai scelto durante l'installazione dell'offerta Exchange 2013.

Se l'autenticazione "Password normale" non funziona, puoi inserire anche "NTLM"..
Clicca su Termina per continuare l'installazione.

![](images/img_2309.jpg){.thumbnail}


## Parte 5: finalizzazione
Il tuo account Exchange è configurato correttamente in IMAP.

![](images/img_1134.jpg){.thumbnail}


## Impostazione di account sul server in entrata
Ecco una sintesi delle impostazioni degli account.

Per il server in entrata

![](images/img_1132.jpg){.thumbnail}


## Impostazione di account sul server in uscita
Per il server in uscita

![](images/img_1133.jpg){.thumbnail}

