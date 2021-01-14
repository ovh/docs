---
title: 'Diagnostica Exchange: cosa fare in caso di errore?'
excerpt: 'Diagnostica Exchange: cosa fare in caso di errore?'
slug: diagnostica_exchange_cosa_fare_in_caso_di_errore
legacy_guide_number: g2277
---


## Esegui una diagnostica
Accedi al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager) e clicca sul tuo servizio Exchange nella sezione Microsoft della colonna a sinistra.

![](images/img_4450.jpg){.thumbnail}
Clicca sulla scheda Diagnostica, inserisci l'account email Exchange e la password associata e avvia la diagnostica.

Questa operazione può richiedere tra 3 e 10 minuti.

![](images/img_4451.jpg){.thumbnail}
Il risultato della diagnostica del tuo account email Exchange sarà di questo tipo:

A questo punto, le azioni disponibili sono due:


- Nuova diagnostica: permette di avviare una nuova diagnostica

- Crea una richiesta di supporto: permette di aprire un ticket al nostro supporto con il risultato della tua diagnostica



![](images/img_4471.jpg){.thumbnail}


## Errori nella tua diagnostica?
Ecco gli errori più frequenti e la loro possibile risoluzione:


- ATTENZIONE: l'account è bloccato per invio di Spam


L'invio di messaggi dal tuo account è stato disattivato temporaneamente, ma puoi continuare a ricevere messaggi.

In questo caso, il tuo account viene contrassegnato con il tag SPAM nella sezione Account email del tuo Spazio Cliente OVH. Clicca sul tag per essere reindirizzato all'email ricevuta in seguito al blocco.

Per sbloccare l'account, rispondi al messaggio.

![](images/img_4453.jpg){.thumbnail}

- ATTENZIONE: l'account è scaduto


Il tuo abbonamento non è più attivo e non è possibile ricevere e inviare messaggi. Per riattivare il servizio, contatta il supporto OVH.

- ATTENZIONE: le politiche di sicurezza hanno bloccato il tuo account


Definisci la politica di sicurezza direttamente dal tuo servizio Exchange. Questa operazione può comportare il blocco dell'account per la durata che hai scelto al momento della sua configurazione.

Ad esempio, puoi bloccare l'account dopo un certo numero di tentativi falliti di connessione.

Se il tuo account risulta bloccato, puoi attendere che si sblocchi automaticamente al termine della durata impostata o inviare una richiesta di assistenza al supporto OVH.

- ATTENZIONE: l'autenticazione alla Webmail è fallita


Questo errore può essere causato dall'utilizzo di una password errata all'avvio della diagnostica. In questo caso, ripeti l'operazione.

Puoi aggiornare la password anche dal tuo servizio Exchange, nella scheda Account email, e riavviare la diagnostica. Se il problema persiste, invia una richiesta di assistenza al supporto OVH.

- ATTENZIONE: il record MX del dominio non è valido


Questo errore indica l'impossibilità di ricevere email ed è associato anche all'errore: ATTENZIONE: L'email di test non è stata ricevuta.

Ecco i server MX validi per l'offerta Exchange:


- Exchange: mx1.mail.ovh.net
- Exchange + Email POP/IMAP ospitati da OVH: mx1.mail.ovh.net
- Exchange + Email POP/IMAP non ospitati da OVH: ex.mail.ovh.net o ex2.mail.ovh.net



- ATTENZIONE: il record SRV del dominio non è valido


Il record SRV è necessario per la configurazione automatica del tuo account Exchange su un client di posta compatibile come Outlook 2010, 2013 e 2016.

Puoi verificare il tuo record SRV nella zona DNS del tuo dominio.

Ecco il record SRV necessario per un'offerta Exchange:

|Priorità|0|
|Peso|0|
|Porta|443|
|Destinazione offerta Hosted| ex.mail.ovh.net o ex2.mail.ovh.net |
|Destinazione offerta Private| tuo-hostname|



- ATTENZIONE: impossibile inviare l'email di test da questo account


Questo errore indica l'impossibilità di inviare email dal tuo account e può verificarsi, ad esempio, se:


- il tuo account è sospeso
- la password inserita non è corretta
- il tuo account è stato bloccato per invio di Spam
- si è verificato un incidente sull'infrastruttura Exchange


In questo caso, segui le indicazioni qui sopra per correggere l'errore o invia una richiesta di supporto.

