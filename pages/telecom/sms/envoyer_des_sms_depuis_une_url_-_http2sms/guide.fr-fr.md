---
title: Envoyer des SMS depuis une URL - http2sms
excerpt: Envoyer des SMS depuis une adresse http
slug: envoyer_des_sms_depuis_une_url_-_http2sms
section: Envoyer des SMS
---

## 

Si vous possédez un compte SMS chez OVH, vous pouvez émettre des SMS depuis votre navigateur web préféré, directement depuis l'url, à l'aide de wget.
Pour envoyer un SMS par cette méthode il vous faudra créer un utilisateur en API ou depuis l'espace client.
Vous pouvez consulter le guide suivant pour toute précision sur les utilisateurs : [Tout savoir sur les utilisateurs SMS]({https://docs.ovh.com/fr/sms/tout_savoir_sur_les_utilisateurs_sms/).


Pour envoyer un SMS, c'est simple et rapide, il suffit d'envoyer une requête HTTPS avec ses paramètres à l'adresse suivante : <https://www.ovh.com/cgi-bin/sms/http2sms.cgi?>.

![](images/img_4011.jpg){.thumbnail}

## Champs obligatoires

Votre URL devra avoir la forme suivante : 

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX&message=XXXXXXX
```


Les paramètres suivants doivent être séparés par des &. Remplacez les X par :

|Paramètres|À remplacer par|
|---|---|
|account|Compte SMS à utiliser (ex : sms-ab1234-1)|
|login|Utilisateur SMS à utiliser sur le compte associé|
|password|Mot de passe de l'utilisateur|
|from|Un des expéditeurs déclarés sur votre compte SMS.|
|to|Numéro de téléphone du destinataire du message au **format international** (00336xxxx pour un numéro français). Il est possible d'ajouter des destinataires à la suite, séparés par une virgule ",".|
|message|Votre message. Ajouter %0d pour effectuer un saut de ligne dans le SMS envoyé|

Par défaut le message est envoyé immédiatement.


## Champs facultatifs

Vous pouvez ajouter des champs supplémentaires dans le sujet, tels que :

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX1,XXXXXXX2&message=XXXXXXX&deferred=XXXXXXX&class=X&smsCoding=X&noStop=X
```

Remplacez les X par :

|Paramètres|À remplacer par|
|---|---|
|deferred|Pour définir une date d'envoi différé, au format hhmmjjMMAAAA (ex : 125025112017 pour un envoi le 28/11/2017 à 12h50)|
|class|Type de classe su SMS, au format N = 1 chiffre (voir la note d'information ci-dessous)|
|noStop|1 pour ne pas afficher "STOP au XXXXX" à la fin du message pour un SMS à caractère non commercial|
|tag|Une chaîne de maximum 20 caractères vous permettant de marquer les messages envoyés|
|contentType|Vous pouvez choisir le type de la réponse. Elle peut être de type : text/xml, application/xml, text/json, application/json, text/plain, text/html (par défaut en text/plain)|
|smsCoding|Encodage du SMS, au format N = 1 chiffre (voir la note d'information ci-dessous)|

> [!primary]
>
> Voici le détail des possibilités pour les *class*
> *classe 0 :* Le message est directement affiché à l’utilisateur sur l’écran du mobile à la réception. Le message n’est enregistré ni dans la mémoire du téléphone ni dans la carte SIM. Il est effacé dès que l’utilisateur a validé la visualisation.
> *classe 1 :* Le message est enregistré dans la mémoire du téléphone et si cette mémoire est pleine, dans la carte SIM par défaut.
> *classe 2 :* Le message est enregistré sur la carte SIM.
> *classe 3 :* Le message est transféré sur un équipement externe connecté au mobile (PDA, PC portable…).
>

> [!primary]
>
> Voici le détail des possibilités pour le *smsCoding*
> *1* pour l'encodage sur 7bit
> *2* pour l'encodage sur 8bit (UTF8)
> 
>Si vous modifiez l’encodage pour l'UTF8, votre SMS fera 70 caractères maximum contre 160 sur l'encodage 7bit.
> 


## 
Un status supérieur à 100 et inférieur à 200 indique que le message a bien été envoyé.
Lors d'un échec, la cause est inscrite dans le champs message pour le json ou le xml et sur la deuxième ligne pour le html et le text/plain.


## XML

- En cas de succès :

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>100</status><creditLeft>1007</creditLeft><smsIds><smsId>10867690</smsId></smsIds></response>
```

- En cas d'échec :

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>201</status><message>Missing message. For more informations : http://guides.ovh.com/httpToSms</message></response>
```


## json

- En cas de succès :

```json
{"status":100,"creditLeft":"1007","SmsIds":["10867690"]}
```

- En cas d'échec :

```json
{"status":201,"message":"Missing message. For more informations : http//:guides.ovh.com/httpToSms"}
```


## HTML

- En cas de succès :

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>HTTP2SMS</title>
</HEAD>
<BODY>
OK<br>
1007<br>
10867690<br>
</BODY>
</HTML>
```

- En cas d'échec :

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<HTML>
<HEAD>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>HTTP2SMS</title>
</HEAD>
<BODY>
KO<br>Missing message. For more informations : http://guides.ovh.com/httpToSms<br>
</BODY>
</HTML>
```

## Text/plain

- En cas de succès :

```
OK
1007
10867690
```

- En cas d'échec :

```
KO
Missing message. For more informations : http://guides.ovh.com/httpToSms
```


## 
Pour gérer les IP autorisées, vous pouvez appliquer des restrictions depuis votre espace client.

## 
Voici la liste des codes de retour de l'API :

- *100 ou 101 :* requête traitée.
- *201 :* un paramètre est manquant (exemples : Missing login. Missing password).
- *202 :* un paramètre est incorrect (exemples : Invalid tag: is too long, Invalid deferred time).
- *401 :* pas d'IP autorisée.

