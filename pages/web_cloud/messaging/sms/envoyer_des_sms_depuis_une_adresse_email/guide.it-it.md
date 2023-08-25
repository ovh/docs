---
title: Inviare degli SMS da un indirizzo e-mail
excerpt: Scopri come inviare SMS da un indirizzo email
updated: 2020-06-04
---


## Obiettivo

Grazie a un account SMS OVHcloud, hai la possibilità di inviare SMS dal tuo indirizzo e-mail, con qualunque mittente.

## Prerequisiti

- Disporre di un account SMS OVHcloud con saldo SMS.
- Disporre di un indirizzo e-mail, di qualunque provider.


## Procedura

Per questo metodo può essere utilizzato qualsiasi webmail o client di messaggistica.

L'indirizzo del destinatario della e-mail sarà: email2sms@ovh.net

L’oggetto deve includere l’identificante del tuo account SMS, oltre ai parametri dell’SMS, come il mittente il o i numeri di telefono del destinatario o dei destinatari.

Il corpo del testo deve contenere il messaggio da inviare per SMS. Non vi sono limiti per quanto riguarda il numero di caratteri. Tuttavia, 1 SMS è limitato a 160 caratteri in codifica a 7 bit.

Se il tuo SMS supera questo limite, il messaggio verrà diviso in diversi SMS:

- 1 SMS -> 160 caratteri totali (160 per SMS)
- 2 SMS -> 306 caratteri totali (153 per SMS)
- 3 SMS -> 459 caratteri totali (153 per SMS)

Prima di effettuare l’invio, assicurati di disporre di un numero di crediti SMS sufficiente.

> [!primary]
>
Se il tuo testo contiene 2 a capo (doppia /n) o se scrivi il parametro "--end", tutto quello che segue non viene preso in considerazione per l’invio.
Per inviare un SMS contenente questi elementi sarà necessario farlo nello Spazio Cliente o attraverso le API.
>

Per maggiori informazioni sui caratteri autorizzati in codifica a 7 bit, fai riferimento [all'allegato](./#allegato) in fondo a questa guida.

> [!warning]
>
> Per ottimizzare la presa in carico di determinati caratteri speciali, attiva la “modalità solo testo” nella tua client e-mail, come qui su Microsoft Outlook:
> 
>  ![email2sms](images/plaintext01.png){.thumbnail}
>

### Step 1: includere nella tua mail i campi obbligatori

Apri la tua webmail o il tuo client di posta e poi crea una e-mail. 

Digita il seguente indirizzo come destinatario: email2sms@ovh.net

L’oggetto deve avere la forma che segue: 


```
AccountSMS:UtenteSMS:Password:Mittente:Destinatario
```



- AccountSMS = Account SMS da utilizzare (es: sms-xx11111-1).

- UtenteSMS = Utente SMS da utilizzare sull’account associato.

- Password = Password dell’utente.

- Mittente = Uno dei mittenti specificati sul tuo account SMS.

- Destinatario = Numero di telefono del destinatario del messaggio.

Il risultato dovrebbe essere simile a quello dell’immagine qui di seguito. Per default, appena la mail viene inviata, immediatamente viene inviato anche l’SMS.


![email2sms](images/send-sms-through-email1.png){.thumbnail}

> [!primary]
>**Unicamente per gli account OVHcloud in Francia:**
>
Se desideri utilizzare un numero breve che consenta la risposta, digita senderForResponse=1 come mittente.
>

Puoi consultare la guida che segue per qualsiasi dettaglio sugli utenti SMS: [Tutte le informazioni sugli utenti SMS](/pages/web_cloud/messaging/sms/tout_savoir_sur_les_utilisateurs_sms)


### Step 2: aggiungere dei campi facoltativi

Puoi aggiungere campi supplementari nell’oggetto, quali:


```
AccountSMS:UtenteSMS:Password:Mittente:Destinatario1,Destinatario2:DataInvio:ClasseSMS:smsCoding:NoStop
```



- Destinatario1 = Numero di telefono del destinatario del messaggio; è possibile aggiungere destinatari di seguito, separati da una virgola ",".

- DataInvio = Per stabilire una data di invio differito, nel formato hhmmggMMAAAA (es.: 183019112019 per un invio il 19/11/2019 alle 18:30). 

- ClasseSMS = Tipo di classe dell’SMS, nel formato N = 1 cifra (vedere la prima nota informativa qui di seguito).

- smsCoding = Codifica dell’SMS, in formato N = 1 cifra (vedere la seconda nota informativa qui di seguito).

- NoStop = per non visualizzare "STOP al XXXXX" alla fine del messaggio per un SMS a carattere non pubblicitario, in formato N = 1 cifra (es : NoStop=1 per non visualizzarlo).

Ecco un esempio di e-mail che comprende del campi facoltativi:

![email2sms](images/send-sms-through-email3.png){.thumbnail}

È possibile specificare i diversi elementi che costituiscono l’oggetto in due modi diversi:

- Sia nell’ordine stabilito qui sopra, con i parametri separati da ":" o ";" tra due elementi.
- Oppure in qualsiasi ordine, ma specificando ogni elemento, separato dall’altro con un ":" o ";": Account=; Login=; Password=; From=; To=; Deferred=; Class=.

> [!primary]
>
> **Dettaglio delle possibilità per le *class***
> 
> *classe 0:* Il messaggio viene visualizzato direttamente dall’utente sullo schermo del dispositivo mobile, al ricevimento. Il messaggio non viene registrato né nella memoria del telefono né sulla scheda SIM. Viene cancellato non appena l’utente ne conferma la visualizzazione.
> 
> *classe 1:* Il messaggio viene registrato nella memoria del telefono e, se questa memoria è piena, sulla scheda SIM, in predefinito.
> 
> *classe 2:* Il messaggio viene registrato sulla scheda SIM.
> 
> *classe 3:* Il messaggio viene trasferito su un dispositivo esterno collegato al dispositivo mobile (PDA, PC portatile…).
>

> [!primary]
>
> **Dettaglio delle possibilità per l’*smsCoding***
> 
> *1* per la codifica a 7 bit
> 
> *2* per la codifica Unicode
> 
>Se si modifica la codifica su Unicode, l’SMS sarà al massimo di 70 caratteri rispetto ai 160 della codifica a 7 bit.
>

### Step 3: gestire i destinatari dell’SMS

Il o i destinatari del messaggio possono essere gestiti in diversi modi.


- Sia come visto in precedenza, scrivendolo/i nel formato internazionale nell’oggetto dell’e-mail inviata.

- Sia aggiungendo all’e-mail, come allegato, un file di testo (formato txt) nominato "contact" che contenga il/i numero/i di telefono del o dei destinatari, nel formato internazionale (esempio in Italia: +39xxxxxxxxx), nella misura di un numero per riga nel file.



### Step 4: analizzare il rapporto di invio

Una volta effettuato l’invio, riceverai via e-mail un rapporto di invio. Il rapporto di seguito indica che l’invio è stato completato:

![email2sms](images/send-sms-through-email4.png){.thumbnail}

Se durante l’invio hai riscontrato un errore, ti sarà notificato nel rapporto, come nell’esempio di seguito:

![email2sms](images/send-sms-through-email5.png){.thumbnail}

## Allegato

Le 2 tabelle qui sotto indicano i caratteri autorizzato in codifica a 7 bit. I caratteri della tabella “Estensioni” contano il doppio. 

La lunghezza massima di un SMS è di 160 caratteri con codifica a 7 bit (norma GSM 03.38).

L’utilizzo di caratteri non presenti in queste tabelle comporta il passaggio della codifica in Unicode e la riduzione della lunghezza massima di un SMS a 70 caratteri.

![Lista dei caratteri SMS](images/smsauthorizedcharacters.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>
