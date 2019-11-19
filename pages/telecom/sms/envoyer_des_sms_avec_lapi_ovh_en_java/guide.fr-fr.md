---
title: 'Envoyer des SMS avec l’API OVHcloud en Java'
excerpt: 'Comment envoyer des SMS avec l’api OVHcloud RESTful en Java'
slug: envoyer_des_sms_avec_lapi_ovh_en_java
legacy_guide_number: g1670
section: 'Envoyer des SMS'
---

**Dernière mise à jour le 04/11/2019**

## Objectif

Les SMS sont largement utilisés pour diffuser des informations pratiques, suivre l'état d'une commande ou d'un processus transactionnel, être alerté d'un évènement inhabituel ou encore rappeler des rendez-vous. Ce guide détaille la méthode d'envoi d'un premier SMS en API RESTful d'OVHcloud. 

**Apprenez comment envoyer des SMS avec l'API OVHcloud en Java**

## Prérequis

- Disposer d’un environnement de développement Java
- Disposer d'un compte SMS OVHcloud avec des crédits SMS

## En pratique

### Appels vers l'API

Il n'existe pas encore de Wrapper Java. L'appel au Webservice sera donc implémenté directement dans le code et sans ajout de librairie complémentaire. Dans un but de lisibilité et de simplicité, la partie de consommation de l'API n'est pas factorisée ni implémentée complètement (deserialisation json, etc.).

Dans ce guide, deux méthodes seront appelées :

- Liste des services SMS actifs [https://eu.api.ovh.com/1.0/sms/](https://api.ovh.com/console/#/sms#GET)
- Envoyer des SMS [https://eu.api.ovh.com/1.0/sms/{ServiceName}/jobs/](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

### Étape 1 : Création des identifiants

Des identifiants sont nécessaires pour consommer l’API SMS. Ces identifiants sont créés une fois pour identifier l’application qui va envoyer des SMS. La durée de vie de ces identifiants est paramétrable.

Créez vos identifiants de Script (all keys at once) sur cette page: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/?GET=/sms/&GET=/sms/*/jobs&POST=/sms/*/jobs) (Cette URL vous permet d'avoir automatiquement les bons droits pour les étapes décrites dans ce guide).

![création des tokens](images/img_2479.jpg){.thumbnail}

Dans cet exemple simple, nous récupérons les droits pour avoir accès aux informations sur le compte, à la possibilité de voir les envois en attente et à la possibilité d’envoyer des SMS.

- GET /sms/
- GET/sms/\*/jobs
- POST /sms/\*/jobs


L’étoile (\*) active les appels à ces méthodes pour tous vos comptes SMS. Vous pouvez également restreindre les appels à un seul compte, si vous gérez plusieurs comptes SMS sur votre compte OVHcloud, en remplaçant « /sms » par « /sms/NOM-DU-COMPTE » et « /sms/\*/ » par «/sms/NOM-DU-COMPTE/».

Vous récupérez alors vos identifiants pour votre script :

- Application Key (identifie votre application)
- Application Secret (authentifie votre application)
- Consumer Key (autorise l'application à accéder aux méthodes choisies)



![récupération des tokens](images/img_2480.jpg){.thumbnail}

L'environnement est prêt, les identifiants sont créés, vous êtes prêt pour coder votre premier appel à l'API.


### Étape 2 : Connexion basique à l'API : récupération du compte SMS

Vous pouvez maintenant tester la bonne connexion à l’API en affichant simplement le nom du serviceName :

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

            //Création de la signature
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
            	//Récupération du résultat de l'appel
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
     
            //Affichage du résultat
            System.out.println(response.toString());

        } catch (MalformedURLException e) {
            final String errmsg = "MalformedURLException: " + e;
        } catch (IOException e) {
            final String errmsg = "IOException: " + e;
        }
    }

	//calcul du SHA1
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


Vous devriez récupérer au lancement de cette application Java la liste de vos comptes SMS.

```
["sms-XX0000-1"]
```



### Étape 3 : Envoi du premier SMS

Pour envoyer des SMS, utilisez la méthode POST jobs : [https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

> [!primary]
>
> **Uniquement pour les comptes OVHcloud en France :**
> 
> Le paramètre senderForResponse va permettre d’utiliser un numéro court, ce qui vous permet d’envoyer directement des SMS sans devoir créer un expéditeur alphanumérique (par exemple: votre nom).
> 
> Les numéros courts permettent aussi de recevoir des réponses de la part des destinataires de votre SMS, ce qui peut être utile pour une enquête de satisfaction, une application de vote, un jeu...
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

            //Création de la signature
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
            	//Récupération du résultat de l'appel
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
     
            //Affichage du résultat     
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


Voici le type de réponse attendue :

```
{"totalCreditsRemoved":1,"invalidReceivers":[],"ids":[27814656],"validReceivers":["+33600000000"]}
```


On obtient une réponse avec 1 crédit consommé pour un numéro valide. 

Le message par défaut intègre la mention STOP permettant aux destinataires de se désabonner de votre diffusion de SMS. 

Si votre SMS n'est pas à caractère publicitaire, vous pouvez, via le paramètre noStopClause, désactiver la mention STOP.

Si votre SMS est à caractère publicitaire, vous ne pouvez envoyer de SMS que de 08h00 à 20h00 du lundi au samedi.


## Aller plus loin

La console d'API ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) vous permettra de découvrir d'autres méthodes pour faciliter l'intégration de services SMS tels que : SMS permettant la réponse (uniquement pour les comptes OVHcloud en France), envoi en masse avec fichier CSV, publipostage, suivi des accusés de réception...


Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).
