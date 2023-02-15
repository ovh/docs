---
title: Inviare SMS con l’API OVHcloud in Java
excerpt: Come inviare SMS con l’API OVHcloud RESTful in Java
slug: inviare_sms_con_lapi_ovh_in_java
section: Inviare SMS
updated: 2020-06-01
---

**Ultimo aggiornamento: 18/05/2020**

## Obiettivo

Gli SMS sono ampiamente utilizzati per inviare informazioni pratiche, per seguire lo stato di un ordine o di un processo transazionale, essere avvisati di un evento insolito o come promemoria di appuntamenti. Questa guida espone in dettaglio il metodo di invio di un primo SMS con l'API RESTful di OVHcloud. 

**Impara come inviare SMS con l’API OVHcloud in Java**

## Prerequisiti

- Disporre di un ambiente di sviluppo Java
- Disporre di un account SMS OVHcloud con saldo SMS

## Procedura

### Chiamate verso l’API

Non esiste ancora un wrapper Java. La chiamata al Webservice verrà effettuata direttamente nella codifica e senza aggiunta della libreria complementare. Per motivi di leggibilità e di semplicità, la parte di consumo dell’API non viene scomposta in fattori né implementata completamente (deserializzazione json, ecc.).

In questa guida i metodi saranno due:

- Elenco dei servizi di SMS attivi [https://eu.api.ovh.com/1.0/sms/](https://api.ovh.com/console/#/sms#GET)
- Inviare SMS [https://eu.api.ovh.com/1.0/sms/{ServiceName}/jobs/](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

### Step 1: Creazione degli identificativi

Per utilizzare l’API SMS sono necessari degli identificativi. Questi identificativi vengono creati una sola volta per individuare l’applicazione che invierà gli SMS. La loro durata di vita è configurabile.

Crea i tuoi identificativi di Script (tutte le chiavi in una sola volta) su questa pagina: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/?GET=/sms/&GET=/sms/*/jobs&POST=/sms/*/jobs) (questo URL permette di avere automaticamente le autorizzazioni per gli step descritti in questa guida).

![creazione di token](images/img_2479.jpg){.thumbnail}

In questo semplice esempio, recuperiamo le autorizzazioni per avere accesso alle informazioni sull’account, la possibilità di vedere i messaggi in uscita e di inviare SMS.

- GET /sms/
- GET/sms/\*/jobs
- POST /sms/\*/jobs


L’asterisco (\*) attiva le chiamate a questi metodi per tutti i tuoi account di SMS. Puoi ugualmente limitare le chiamate a un solo account, se gestisci diversi account SMS sul tuo account OVHcloud, sostituendo «/sms» con «/sms/NOME-ACCOUNT» e «/sms/\*/» con «/sms/NOME-ACCOUNT/».

In questo modo recuperai i tuoi identificativi per il tuo script:

- Application Key (identifica la tua applicazione)
- Application Secret (autentica la tua applicazione)
- Consumer Key (autorizza l’applicazione ad accedere ai metodi scelti)



![recupero dei token](images/img_2480.jpg){.thumbnail}

L’ambiente è pronto, gli identificativi sono creati, ora puoi codificare la tua prima chiamata all’API.


### Step 2: Connessione base all’API: recupero dell’account SMS

A questo punto è possibile verificare se la connessione all’API è buona visualizzando semplicemente il nome del serviceName:

```
import java.net.*;
import java.io.*;
import java.util.Date;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class Program {

    public static void main (String[] args)
    {
        getSmsAccount();
    }

    private static void getSmsAccount()
    {
        String AK = "your_app_key";
        String AS = "your_app_secret";
        String CK = "your_consumer_key";

        String METHOD = "GET";
        try {
            URL    QUERY  = new URL("https://eu.api.ovh.com/1.0/sms/");
            String BODY   = "";

            long TSTAMP  = new Date().getTime()/1000;

            //Creazione della firma
            String toSign    = AS + "+" + CK + "+" + METHOD + "+" + QUERY + "+" + BODY + "+" + TSTAMP;
            String signature = "$1$" + HashSHA1(toSign);

            HttpURLConnection req = (HttpURLConnection)QUERY.openConnection();
            req.setRequestMethod(METHOD);
            req.setRequestProperty("Content-Type",      "application/json");
            req.setRequestProperty("X-Ovh-Application", AK);
            req.setRequestProperty("X-Ovh-Consumer",    CK);
            req.setRequestProperty("X-Ovh-Signature",   signature);
            req.setRequestProperty("X-Ovh-Timestamp",   "" + TSTAMP);

            String inputLine;
            BufferedReader in;
            int responseCode = req.getResponseCode();
            if ( responseCode == 200 )
            {
            	//Recupero dell’esito chiamata
                in = new BufferedReader(new InputStreamReader(req.getInputStream()));
            }
            else
            {
                in = new BufferedReader(new InputStreamReader(req.getErrorStream()));
            }
            StringBuffer response   = new StringBuffer();
     
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
     
            //Visualizzazione dell’esito
            System.out.println(response.toString());

        } catch (MalformedURLException e) {
            final String errmsg = "MalformedURLException: " + e;
        } catch (IOException e) {
            final String errmsg = "IOException: " + e;
        }
    }

	//calcolo di SHA1
    public static String HashSHA1(String text) 
    {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("SHA-1");
            byte[] sha1hash = new byte[40];
            md.update(text.getBytes("iso-8859-1"), 0, text.length());
            sha1hash = md.digest();
            return convertToHex(sha1hash);
        } catch (NoSuchAlgorithmException e) {
            final String errmsg = "NoSuchAlgorithmException: " + text + " " + e;
            return errmsg;
        } catch (UnsupportedEncodingException e) {
            final String errmsg = "UnsupportedEncodingException: " + text + " " + e;
            return errmsg;
        }
    }
    
    private static String convertToHex(byte[] data)
    { 
        StringBuffer buf = new StringBuffer();
        for (int i = 0; i < data.length; i++) { 
            int halfbyte = (data[i] >>> 4) & 0x0F;
            int two_halfs = 0;
            do { 
                if ((0 <= halfbyte) && (halfbyte <= 9)) 
                    buf.append((char) ('0' + halfbyte));
                else 
                    buf.append((char) ('a' + (halfbyte - 10)));
                halfbyte = data[i] & 0x0F;
            } while(two_halfs++ < 1);
        } 
        return buf.toString();
    }
}
```


All’avvio di questo script dovresti recuperare l’elenco dei tuoi account SMS.

```
["sms-XX0000-1"]
```



### 3. Invio del primo SMS

Per inviare degli SMS, utilizza il metodo POST jobs: [https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

> [!primary]
>
> **Unicamente per gli account OVHcloud in Francia:**
> 
> Il parametro senderForResponse permetterà di utilizzare un numero breve, il che consente di inviare direttamente degli SMS senza dover creare un mittente alfanumerico (ad esempio: il tuo cognome).
> 
> I numeri brevi permettono anche di ricevere delle risposte da parte dei destinatari dei tuoi SMS, il che può essere utile per un sondaggio sulla soddisfazione, un’applicazione di voto, un gioco,...
>
>



```
import java.net.*;
import java.io.*;
import java.util.Date;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class ProgramSendSms {

    public static void main (String[] args)
    {
        sendSms();
    }

    private static void sendSms()
    {
        String AK = "your_app_key";
        String AS = "your_app_secret";
        String CK = "your_consumer_key";

        String ServiceName = "sms-xx000000-1";
        String METHOD = "POST";
        try {
            URL    QUERY  = new URL("https://eu.api.ovh.com/1.0/sms/"+ServiceName+"/jobs");
            String BODY   = "{\"receivers\":[\"+33612345678\"],\"message\":\"Test SMS OVH\",\"priority\":\"high\",\"senderForResponse\":true}";

            long TSTAMP  = new Date().getTime()/1000;

            //Creazione della firma
            String toSign    = AS + "+" + CK + "+" + METHOD + "+" + QUERY + "+" + BODY + "+" + TSTAMP;
            String signature = "$1$" + HashSHA1(toSign);
            System.out.println(signature);

            HttpURLConnection req = (HttpURLConnection)QUERY.openConnection();
            req.setRequestMethod(METHOD);
            req.setRequestProperty("Content-Type",      "application/json");
            req.setRequestProperty("X-Ovh-Application", AK);
            req.setRequestProperty("X-Ovh-Consumer",    CK);
            req.setRequestProperty("X-Ovh-Signature",   signature);
            req.setRequestProperty("X-Ovh-Timestamp",   "" + TSTAMP);

            if(!BODY.isEmpty())
            {
                req.setDoOutput(true);
                DataOutputStream wr = new DataOutputStream(req.getOutputStream());
                wr.writeBytes(BODY);
                wr.flush();
                wr.close();
            }

            String inputLine;
            BufferedReader in;
            int responseCode = req.getResponseCode();
            if ( responseCode == 200 )
            {
            	//Recupero dell’esito chiamata
                in = new BufferedReader(new InputStreamReader(req.getInputStream()));
            }
            else
            {
                in = new BufferedReader(new InputStreamReader(req.getErrorStream()));
            }
            StringBuffer response   = new StringBuffer();
     
            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();
     
            //Visualizzazione dell’esito     
            System.out.println(response.toString());

        } catch (MalformedURLException e) {
            final String errmsg = "MalformedURLException: " + e;
        } catch (IOException e) {
            final String errmsg = "IOException: " + e;
        }
    }

    public static String HashSHA1(String text) 
    {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("SHA-1");
            byte[] sha1hash = new byte[40];
            md.update(text.getBytes("iso-8859-1"), 0, text.length());
            sha1hash = md.digest();
            return convertToHex(sha1hash);
        } catch (NoSuchAlgorithmException e) {
            final String errmsg = "NoSuchAlgorithmException: " + text + " " + e;
            return errmsg;
        } catch (UnsupportedEncodingException e) {
            final String errmsg = "UnsupportedEncodingException: " + text + " " + e;
            return errmsg;
        }
    }
    
    private static String convertToHex(byte[] data)
    { 
        StringBuffer buf = new StringBuffer();
        for (int i = 0; i < data.length; i++) { 
            int halfbyte = (data[i] >>> 4) & 0x0F;
            int two_halfs = 0;
            do { 
                if ((0 <= halfbyte) && (halfbyte <= 9)) 
                    buf.append((char) ('0' + halfbyte));
                else 
                    buf.append((char) ('a' + (halfbyte - 10)));
                halfbyte = data[i] & 0x0F;
            } while(two_halfs++ < 1);
        } 
        return buf.toString();
    }
}
```


Ecco il tipo di risposta prevista:

```
{"totalCreditsRemoved":1,"invalidReceivers":[],"ids":[27814656],"validReceivers":["+33600000000"]}
```


Si ottiene una risposta con 1 credito consumato per un numero valido. 

Il messaggio predefinito include la dicitura STOP, che permette ai destinatari di disdire l’abbonamento del tuo invio di SMS. 

Se il tuo SMS non ha carattere pubblicitario, puoi, mediante il parametro noStopClause, disattivare la dicitura STOP.

Se il tuo SMS ha carattere pubblicitario, puoi inviare SMS solamente dalle 8:00 alle 20:00, dal lunedì al venerdì.


## Per saperne di più

La console di API ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) ti permetterà di scoprire altri metodi per facilitare l’integrazione di servizi SMS quali: SMS che permettono la risposta (unicamente per gli account OVHcloud in Francia), invio in massa con file CSV, mailing o con conferma di ricezione...


Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en](https://community.ovh.com/en/)
