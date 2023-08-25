---
title: 'Wysyłanie wiadomości SMS za pomocą interfejsu API OVHcloud w Javie'
excerpt: 'Dowiedz się, jak wysyłać wiadomości SMS za pomocą interfejsu API OVHcloud RESTful w Javie'
legacy_guide_number: g1670
updated: 2020-06-01
---


## Wprowadzenie

Wiadomości SMS są szeroko wykorzystywane do rozpowszechniania praktycznych informacji, śledzenia statusu zamówienia lub procesu transakcyjnego, powiadamiania o nietypowych zdarzeniach lub przypominania o spotkaniach. W niniejszym przewodniku szczegółowo opisano sposób wysłania pierwszej wiadomości SMS w interfejsie API RESTful OVHcloud. 

**Dowiedz się, jak wysyłać wiadomości SMS za pomocą interfejsu API OVHcloud w Javie**

## Wymagania początkowe

- Dostęp do środowiska deweloperskiego Java
- Posiadanie konta SMS OVHcloud z zasileniami SMS

## W praktyce

### Wywołania interfejsu API

Nie istnieje jeszcze wrapper Javy. Wywołanie WebService będzie zatem realizowane bezpośrednio w kodzie i bez dodawania dodatkowej biblioteki. Aby zapewnić czytelność i prostotę, konsumpcyjna część API nie jest faktoryzowana ani w pełni wdrożona (deserializacja json itp.).

W tym przewodniku wykorzystane zostaną dwie metody:

- Lista aktywnych usług SMS [https://eu.api.ovh.com/1.0/sms/](https://api.ovh.com/console/#/sms#GET)
- Wysyłanie wiadomości SMS [https://eu.api.ovh.com/1.0/sms/{ServiceName}/jobs/](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

### Etap 1: utworzenie identyfikatorów

Identyfikatory są niezbędne do korzystania z interfejsu API SMS. Identyfikatory te tworzy się jednorazowo w celu określenia aplikacji, która będzie wysyłać wiadomości SMS. Czas ważności tych identyfikatorów można skonfigurować.

Utwórz identyfikatory skryptu (all keys at once) na tej stronie: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/?GET=/sms/&GET=/sms/*/jobs&POST=/sms/*/jobs) (ten adres URL automatycznie zapewni Ci odpowiednie uprawnienia na potrzeby kroków opisanych w tym przewodniku).

![tworzenie tokenów](images/img_2479.jpg){.thumbnail}

W tym prostym przykładzie uzyskujemy uprawnienia dostępu do informacji o koncie, możliwość przeglądania wiadomości oczekujących oraz wysyłania wiadomości SMS.

- GET /sms/
- GET/sms/\*/jobs
- POST /sms/\*/jobs


Gwiazdka (\*) aktywuje wywołania tych metod dla wszystkich Twoich kont SMS. Możesz również ograniczyć wywołania do jednego konta, jeśli zarządzasz więcej niż jednym kontem SMS na Twoim koncie OVHcloud, zamieniając ciąg „/sms” na „/sms/NAZWA-KONTA” oraz „/sms/\*/” na „/sms/NAZWA-KONTA/”.

W ten sposób uzyskasz identyfikatory dla Twojego skryptu:

- Application Key (określa Twoją aplikację)
- Application Secret (uwierzytelnia Twoją aplikację)
- Consumer Key (udziela aplikacji zezwolenia na dostęp do wybranych metod)



![pozyskiwanie tokenów](images/img_2480.jpg){.thumbnail}

Środowisko jest gotowe, identyfikatory został utworzone, a Ty możesz już tworzyć kod pierwszego wywołania API.


### Etap 2: podstawowe połączenie z API: pozyskanie konta SMS

Teraz możesz przetestować połączenie z API, wyświetlając po prostu nazwę serviceName:

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

            //Tworzenie podpisu
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
            	//Pozyskiwanie rezultatu wywołania
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
     
            //Wyświetlanie rezultatu
            System.out.println(response.toString());

        } catch (MalformedURLException e) {
            final String errmsg = "MalformedURLException: " + e;
        } catch (IOException e) {
            final String errmsg = "IOException: " + e;
        }
    }

	//Obliczanie SHA1
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


Po uruchomieniu tej aplikacji Java uzyskasz listę Twoich kont SMS.

```
["sms-XX0000-1"]
```



### Etap 3: wysłanie pierwszej wiadomości SMS

Aby wysłać wiadomość SMS, wykorzystaj metodę POST jobs: [https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

> [!primary]
>
> **Dotyczy tylko kont OVHcloud we Francji:**
> 
> Parametr senderForResponse umożliwi wykorzystanie numeru skróconego, co pozwoli na wysyłanie wiadomości SMS bezpośrednio, bez konieczności tworzenia nadawcy alfanumerycznego (na przykład Twoja nazwa).
> 
> Numery skrócone umożliwiają również otrzymywanie odpowiedzi od adresatów Twoich wiadomości SMS, co może być przydatne w przypadku badania zadowolenia, aplikacji do głosowania, gry itp.
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

            //Tworzenie podpisu
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
            	//Pozyskiwanie rezultatu wywołania
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
     
            //Wyświetlanie rezultatu     
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


Oto przykład oczekiwanej odpowiedzi:

```
{"totalCreditsRemoved":1,"invalidReceivers":[],"ids":[27814656],"validReceivers":["+33600000000"]}
```


Otrzymujemy jedną odpowiedź, która zużywa jedno zasilenie na jeden ważny numer. 

Domyślna wiadomość zawiera opcję STOP, która umożliwia adresatom wypisanie się z listy dystrybucyjnej wiadomości SMS. 

Jeśli Twoja wiadomość SMS nie ma charakteru reklamowego, za pośrednictwem parametru noStopClause możesz wyłączyć opcję STOP.

Jeśli Twoje wiadomości SMS mają charakter reklamowy, możesz je wysyłać wyłącznie od poniedziałku do soboty, od 8:00 do 20:00.


## Sprawdź również

W konsoli API ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) możesz odkryć inne metody ułatwiające integrację usług SMS, takie jak: wiadomości SMS umożliwiające otrzymanie odpowiedzi (dotyczy wyłącznie kont OVHcloud we Francji), masowa wysyłka przy użyciu pliku CSV, wysyłki reklamowe, monitorowanie potwierdzeń odbioru itd.


Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/)
