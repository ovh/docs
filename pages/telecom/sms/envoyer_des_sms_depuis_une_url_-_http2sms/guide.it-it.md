---
title: Inviare SMS da un URL - http2sms
slug: inviare_sms_da_un_url_http2sms
excerpt: Scopri come inviare SMS da un indirizzo http
section: Inviare SMS
updated: 2020-05-20
---

**Ultimo aggiornamento: 19/05/2020** 

## Obiettivo

Per inviare SMS esistono metodi diversi. Tra questi, vi è l’utilizzo dello strumento Wget, ad esempio, direttamente dalla barra degli indirizzi del tuo browser.

**Come inviare SMS mediante lo strumento Wget.**

## Prerequisiti
- Creare un utente SMS attraverso lo Spazio Cliente OVHcloud o direttamente attraverso le API. A questo proposito, è possibile consultare la guida che segue: [Tutte le informazioni sugli utenti SMS](../tutto_sugli_utenti_sms/)
- Disporre di un account SMS OVHcloud con saldo SMS

## Procedura

L'invio di un SMS avviene mediante una richiesta HTTPS con campi obbligatori (e eventualmente facoltativi) all’indirizzo seguente: <https://www.ovh.com/cgi-bin/sms/http2sms.cgi?>.

![http2sms](images/img_4011.jpg){.thumbnail}

### Step 1: Includere i campi obbligatori

Il tuo URL deve avere la forma che segue: 

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX&message=XXXXXXX
```


I parametri che seguono devono essere separati da &. Sostituisci le X con le informazioni qui di seguito:

|Impostazioni|Sostituire con...|
|---|---|
|account|Account SMS da utilizzare (es: sms-xx11111-1).|
|login|Utente SMS da utilizzare sull’account associato|
|password|Password dell’utente|
|from:|Uno dei mittenti specificati sul tuo account SMS|
|to|Numero di telefono del destinatario con il **formato internazionale** (0039xxxx per un numero italiano). È possibile aggiungere destinatari di seguito, separandoli con una virgola (",").|
|message|Il tuo messaggio Aggiungi %0d per effettuare un a capo nell’SMS inviato.|

Per default, il messaggio viene inviato immediatamente.

### Step 2: aggiungere campi facoltativi


Puoi aggiungere campi supplementari nell’oggetto, quali:

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX1,XXXXXXX2&message=XXXXXXX&deferred=XXXXXXX&class=X&smsCoding=X
```

Sostituisci le X con le informazioni qui di seguito:

|Impostazioni|Sostituire con...|
|---|---|
|deferred|Per stabilire una data di invio differito, nel formato hhmmggMMAAAA (es.: 125025112019 per un invio il 25/11/2019 alle 12:50).|
|class|Tipo di classe dell’SMS, nel formato N = 1 cifra (vedere la prima nota informativa qui di seguito).|
|tag|Una stringa lunga al massimo 20 caratteri permette di contrassegnare i messaggi inviati|
|contentType|Puoi scegliere il tipo di risposta. Può essere dei seguenti tipi: text/xml, application/xml, text/json, application/json, text/plain, text/html (par défaut en text/plain)|
|smsCoding|Codifica dell’SMS, in formato N = 1 cifra (vedere la seconda nota informativa qui di seguito).|

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
>Per maggiori informazioni sui caratteri autorizzati in codifica a 7 bit, fai riferimento [all'allegato](./#allegato) in fondo a questa guida.
>


### Step 3: Analizzare gli invii effettuati

Dopo aver effettato l’invio, un codice di ritorno API indicherà se l’SMS è stato effettivamente inviato o se l’invio non è riuscito.
Un codice superiore a 100 e inferiore a 200 indica che il messaggio è stato effettivamente inviato.

Ecco l’elenco dei codici di ritorno dell’API:

- *100 o 101:* richiesta elaborata.
- *201:* un parametro mancante (esempi: Missing login, Missing password).
- *202:* un parametro non corretto (esempi: Invalid tag: is too long, Invalid deferred time).
- *401:* nessun IP autorizzato. Per gestire gli IP autorizzati, è possibile applicare delle restrizioni a partire dal tuo Spazio Cliente.


In caso di fallimento, la causa è specificata;
- nel campo message per il json o l’xml e
- sulla seconda riga per l’html e il text/plain.

#### XML

- In caso di riuscita:

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>100</status><creditLeft>1987</creditLeft><smsIds><smsId>10867690</smsId></smsIds></response>
```

- In caso di fallimento:

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>201</status><message>Missing message. Per maggiori informazioni visitare la pagina: http://guides.ovh.com/httpToSms</message></response>
```


#### json

- In caso di riuscita:

```json
{"status":100,"creditLeft":"1987","SmsIds":["10867690"]}
```

- In caso di fallimento:

```json
{"status":201,"message":"Missing message. Per maggiori informazioni visitare la pagina: http://guides.ovh.com/httpToSms”}
```


#### HTML

- In caso di riuscita:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>HTTP2SMS</title>
</HEAD>
<BODY>
OK<br>
1987<br>
10867690<br>
</BODY>
</HTML>
```

- In caso di fallimento:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>HTTP2SMS</title>
</HEAD>
<BODY>
KO<br>Missing message. Per maggiori informazioni visitare la pagina: http://guides.ovh.com/httpToSms<br>
</BODY>
</HTML>
```

#### Text/plain

- In caso di riuscita:

```
OK
1987
10867690
```

- In caso di fallimento:

```
KO
Missing message. Per maggiori informazioni visitare la pagina: http://guides.ovh.com/httpToSms”
```

## Allegato

Le 2 tabelle qui sotto indicano i caratteri autorizzati in codifica a 7 bit. I caratteri della tabella “Estensioni” contano il doppio. 

La lunghezza massima di un SMS è di 160 caratteri con codifica a 7 bit (norma GSM 03.38).

L’utilizzo di caratteri non presenti in queste tabelle comporta il passaggio della codifica in Unicode e la riduzione della lunghezza massima di un SMS a 70 caratteri.

![Lista dei caratteri SMS](images/smsauthorizedcharacters.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en/](https://community.ovh.com/en/).
