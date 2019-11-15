---
title: 'Envoyer des SMS avec l’API OVH en c#'
slug: envoyer_des_sms_avec_lapi_ovh_en_c
excerpt: 'Découvrez comment envoyer des SMS avec l’api OVHcloud en c#'
legacy_guide_number: g1654
section: 'Envoyer des SMS'
---

Vous aurez besoin d’un environnement de développement c#, d’un compte OVH avec des crédits SMS.

## Appels vers l'API
Il n'existe pas encore de Wrapper c#, nous implémenterons donc l'appel au Webservice directement dans le code. Dans un but de lisibilité et de simplicité, la partie de consommation de l'API n'est pas factorisée ni implémentée complètement (deserialisation json, etc.).

Pour l'implémentation de l'appel au Webservice nous vous conseillons de lire le [Premiers Pas avec l'API OVH](http://www.ovh.com/fr/g934.premiers-pas-avec-l-api).

Dans ce guide nous appellerons deux méthodes :

- Liste des services SMS actifs [https://eu.api.ovh.com/1.0/sms/](https://api.ovh.com/console/#/sms#GET)
- Envoyer des SMS [https://eu.api.ovh.com/1.0/sms/{ServiceName}/jobs](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)




## Création des identifiants
Nous sommes dans le cas où nous avons besoin d’identifiants pour consommer l’API SMS, ces identifiants sont créés une fois pour identifier l’application qui va envoyer des SMS. La durée de vie de ces identifiants est paramétrable.
Créez vos identifiants de Script (all keys at once) sur cette page: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/) (cette url vous permet d'avoir automatiquement les bons droits pour ce guide : https://eu.api.ovh.com/createToken/?GET=/sms/&GET=/sms/*/jobs&POST=/sms/*/jobs ).

![création des tokens](images/img_2466.jpg){.thumbnail}
Dans cet exemple simple, nous récupérons les droits pour avoir accès aux informations sur le compte, à la possibilité de voir les envois en attente et à la possibilité d’envoyer des SMS.

- GET /sms/
- GET/sms/*/jobs
- POST /sms/*/jobs


L’étoile (*) active les appels à ces méthodes pour tous vos comptes SMS, vous pouvez restreindre les appels à un seul compte si vous gérez plusieurs comptes SMS sur votre compte OVH.

Vous récupérez vos identifiants pour votre script :

- Application Key (identifie votre application)
- Application Secret (authentifie votre application)
- Consumer Key (autorise l'application à accéder aux méthodes choisies)



![récupération des tokens](images/img_2467.jpg){.thumbnail}
L'environnement est prêt, les identifiants sont créés, vous êtes prêt pour coder votre premier appel à l'API.


## Connexion basique à l'API : récupération du compte SMS
Nous allons maintenant tester la bonne connexion à l’API en affichant simplement le nom du serviceName :

```
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Net;
using System.Security.Cryptography;
using System.IO;

namespace ConsoleApplication1
{
    class Program
    {
        static void Main(string[] args)
        {
            getSmsAccount();
        }

        //calcul du SHA1
        public static string HashSHA1(string sInputString)
        {
            SHA1 sha = new SHA1.Create();
            byte[] bHash = sha.ComputeHash(Encoding.UTF8.GetBytes(sInputString));
            StringBuilder sBuilder = new StringBuilder();

            for (int i = 0; i < bHash.Length; i++)
            {
                sBuilder.Append(bHash[i].ToString("x2"));
            }

            return sBuilder.ToString();
        }

        private static void getSmsAccount()
        {
            String AK = "your_app_key";
            String AS = "your_app_secret";
            String CK = "your_consumer_key";
            
            //Paramètres de la méthode appellée
            String METHOD = "GET";
            String QUERY = "https://eu.api.ovh.com/1.0/sms/";
            String BODY = "";

            Int32 unixTimestamp = (Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
            String TSTAMP = (unixTimestamp).ToString();

            //calcul de la signature
            String signature = "$1$" + HashSHA1(AS + "+" + CK + "+" + METHOD + "+" + QUERY + "+" + BODY + "+" + TSTAMP);
            Console.WriteLine(signature);

            //Création de la requete
            HttpWebRequest req = (HttpWebRequest)HttpWebRequest.Create(QUERY);
            req.Method = METHOD;
            req.ContentType = "application/json";
            req.Headers.Add("X-Ovh-Application:" + AK);
            req.Headers.Add("X-Ovh-Consumer:" + CK);
            req.Headers.Add("X-Ovh-Signature:" + signature);
            req.Headers.Add("X-Ovh-Timestamp:" + TSTAMP);

            try
            {
                //Récupération du résultat de l'appel
                HttpWebResponse myHttpWebResponse = (HttpWebResponse)req.GetResponse();
                using (var respStream = myHttpWebResponse.GetResponseStream())
                {
                    var reader = new StreamReader(respStream);
                    String result = reader.ReadToEnd().Trim();
                    Console.WriteLine(result);

                }
                myHttpWebResponse.Close();

            }
            //Gestion des exceptions
            catch (WebException e)
            {
                Console.WriteLine("Error : ");
                using (WebResponse response = e.Response)
                using (Stream data = ((HttpWebResponse)response).GetResponseStream())
                using (var reader = new StreamReader(data))
                {                
                     Console.WriteLine(reader.ReadToEnd());
                }
            }
        }
    }
}
```


Vous devriez récupérer au lancement de cette application c# la liste de vos comptes SMS. Nous affichons aussi en premier la signature de la requête calculée.

```
$1$c190e3e8d22399d11dcba599f782f9e11a016727
["sms-XX0000-1"]
```




## Envoi du premier SMS
Pour envoyer des SMS, nous utilisons la méthode POST jobs : [https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST](https://api.ovh.com/console/#/sms/{serviceName}/jobs#POST)

Le paramètre senderForResponse va permettre d’utiliser un numéro court ce qui nous permet d’envoyer directement des SMS sans devoir créer un expéditeur (ex : votre nom).
Les numéros courts permettent aussi de recevoir des réponses de la part des personnes ayant reçu le SMS, ce qui peut être utile pour une enquête de satisfaction, une application de vote, un jeu...


```
private void sendSms()
        {
            String AK = "your_app_key";
            String AS = "your_app_secret";
            String CK = "your_consumer_key";

            //Paramètres de la méthode appellée
            String ServiceName = "sms-XX00000-1";
            String METHOD = "POST";
            String QUERY = "https://eu.api.ovh.com/1.0/sms/"+ServiceName+"/jobs";
            String BODY =@"{ ""charset"": ""UTF-8"", ""receivers"": [ ""+33660000000"" ], ""message"": ""Test SMS OVH"", ""priority"": ""high"",  ""senderForResponse"": true}";

            Int32 unixTimestamp = (Int32)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
            String TSTAMP = (unixTimestamp).ToString();
            

            String signature = "$1$" + HashSHA1(AS + "+" + CK + "+" + METHOD + "+" + QUERY + "+" + BODY + "+" + TSTAMP);
            Console.WriteLine(signature);

            //Création de la requete
            HttpWebRequest req = (HttpWebRequest)HttpWebRequest.Create(QUERY);
            req.Method = METHOD;
            req.ContentType = "application/json";
            req.Headers.Add("X-Ovh-Application:"+ AK);
            req.Headers.Add("X-Ovh-Consumer:" + CK);
            req.Headers.Add("X-Ovh-Signature:"+ signature);
            req.Headers.Add("X-Ovh-Timestamp:" + TSTAMP);
       
            //Ecriture des paramètres BODY
            using (System.IO.Stream s = req.GetRequestStream())
            {
                using (System.IO.StreamWriter sw = new System.IO.StreamWriter(s))
                    sw.Write(BODY);
            }

            try
            {
                //Récupération du résultat de l'appel
                HttpWebResponse myHttpWebResponse = (HttpWebResponse)req.GetResponse();
                String[] l = null;
                using (var respStream = myHttpWebResponse.GetResponseStream())
                {
                    var reader = new StreamReader(respStream);
                    String result = reader.ReadToEnd().Trim();
                    Console.WriteLine(result);
                                  
                } 
                myHttpWebResponse.Close();
                
            }
            catch (WebException e)
            {
                Console.WriteLine("Error : ");
                Console.WriteLine("Error : ");
                using (WebResponse response = e.Response)
                using (Stream data = ((HttpWebResponse)response).GetResponseStream())
                using (var reader = new StreamReader(data))
                {                
                     Console.WriteLine(reader.ReadToEnd());
                }
            }
        }
```


Voici le type de réponse attendue :

```
$1$e591c367cebc15b1fe7f9a50d792602824a52e78
{"totalCreditsRemoved":1,"invalidReceivers":[],"ids":[27814656],"validReceivers":["+33600000000"]}
```


On obtient une réponse avec 1 crédit consommé pour un numéro valide. Le message par défaut intègre le message STOP permettant aux destinataires de se désabonner, vous pouvez via le paramètre noStopClause désactiver le STOP. A noter qu'avec le STOP vous ne pouvez envoyer de SMS de 20h à 8h du matin.


## 
Ce guide vous a permis d'envoyer votre premier SMS en API RESTful d'OVH. Vous pouvez maintenant poursuivre l'intégration du SMS dans votre application. La console d'API vous permettra de découvrir d'autres méthodes ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) pour faciliter l'intégration de services tels que : SMS réponses, envoi en masse avec fichier CSV, publipostage, suivi des accusés de réception...
Les SMS sont largement utilisés pour diffuser des informations pratiques, suivre l'état d'une commande ou d'un processus transactionnel, être alerté d'un évènement inhabituel ou encore rappeler des rendez-vous.

