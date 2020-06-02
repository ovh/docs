---
title: 'Sending SMS messages with the OVHcloud API in Java'
excerpt: 'Find out how to send SMS messages with the OVHcloud RESTful API in Java'
slug: send_sms_with_ovhcloud_api_in_java
section: 'Sending SMS messages'
---

**Last updated 01st June 2020**

## Objective

SMS messages are widely used to share practical information, track the status of an order or transactional process, send alerts for unusual events, and send appointment reminders. This guide details the method for sending a first SMS message via the OVHcloud RESTful API. 

**Find out how to send SMS messages with the OVHcloud API in Java**

## Requirements

- a Java development environment
- an OVHcloud SMS account with SMS credits

## Instructions

### Calls to the API

Java Wrappers no longer exist. The call to the web service will then be implemented directly in the code, without adding a complementary library. To add simplicity and readability, the resource usage part of the API is not factorised, or fully implemented (json deserialisation, etc.). 

In this guide, two methods will be called:

- List of active SMS services [https://eu.api.ovh.com/1.0/sms/](https://api.ovh.com/console/#/sms#GET)
- Sending SMS messages [https://eu.api.ovh.com/1.0/sms/{ServiceName}/jobs/](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

### Step 1: Create your credentials.

Credentials are required to use the SMS API. These credentials are created once, to identify the application that will be sending SMS messages. The lifespan of these credentials can be configured.

Create your script credentials (all keys at once) on this page: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/?GET=/sms/&GET=/sms/*/jobs&POST=/sms/*/jobs) (this URL will automatically give you the correct rights for the steps described in this guide).

![create tokens](images/img_2479.jpg){.thumbnail}

In this basic example, we retrieve the rights to access information on the account, the right to view pending SMS messages, and the right to send SMS messages. 

- GET /sms/
- GET/sms/\*/jobs
- POST /sms/\*/jobs


The asterisk (\*) enables calls to these methods for all of your SMS accounts. You can also limit calls to one account only, if you generate several SMS accounts on a single OVHcloud account. You can do this by replacing “/sms”  with “/sms/ACCOUNT-NAME”, and  “/sms/\*/” with “/sms/ACCOUNT-NAME”.

You can then retrieve the credentials for your script:

- Application Key (identifies your application)
- Application Secret (authenticates your application)
- Consumer Key (authorises the application to access the methods chosen)



![retrieving tokens](images/img_2480.jpg){.thumbnail}

The environment is ready, the credentials have been created, and you are now ready to code your first API call.


### Step 2: A basic connection to the API — retrieve an SMS account.

You can now test the API connection, by getting the serviceName to display:

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

            //Signature creation
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
            	//Retrieving the result of a call
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
     
            //Displaying the result
            System.out.println(response.toString());

        } catch (MalformedURLException e) {
            final String errmsg = "MalformedURLException: " + e;
        } catch (IOException e) {
            final String errmsg = "IOException: " + e;
        }
    }

	//Calculating SHA1
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


When this Java application launches, you should retrieve the list of your SMS accounts.

```
["sms-XX0000-1"]
```



### Step 3: Send your first SMS message.

To send SMS messages, use the POST jobs method: [https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

> [!primary]
>
> **For OVHcloud accounts in France only:**
> 
> With the senderForResponse setting, you can use a short number, which enables you to send SMS messages directly without needing to create an alpha-numeric sender (e.g. your name).
> 
> Short numbers also mean you are able to receive replies from recipients of your SMS messages, which may be useful for satisfaction surveys, voting applications, games, and more.
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

            //Signature creation
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
            	//Retrieving the result of a call
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
     
            //Displaying the result     
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


This is the kind of response to expect:

```
{"totalCreditsRemoved":1,"invalidReceivers":[],"ids":[27814656],"validReceivers":["+33600000000"]}
```


You get a response with 1 credit used for a valid number. 

By default, the message includes the word STOP, which can be used by recipients who want to stop receiving SMS messages. 

If your SMS is not an advertising message, you can disable the STOP clause via the noStopClause setting.

If your SMS is an advertising message, you can only send SMS messages between 08:00 and 20:00, Monday - Saturday.


## Go further

With the API console ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)), you can explore other methods for using SMS services, such as: SMS messages with the ability to send replies (for OVHcloud accounts in France only), mass-sending a CSV file, advertising mail, acknowledgements of receipt, etc.


Join our community of users on [https://community.ovh.com/en/](https://community.ovh.com/en/).
