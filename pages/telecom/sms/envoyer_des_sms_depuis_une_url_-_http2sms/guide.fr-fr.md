---
title: 'Envoyer des SMS depuis une URL - http2sms'
slug: envoyer_des_sms_depuis_une_url_-_http2sms
excerpt: 'Découvrez comment envoyer des SMS depuis une adresse http'
section: 'Envoyer des SMS'
---

**Dernière mise à jour le 18/05/2020** 

## Objectif

Différentes méthodes existent pour envoyer des SMS. L'une d'entre elles consiste à utiliser l'outil Wget, par exemple directement depuis la barre d'adresses de votre navigateur Internet.

**Apprenez comment envoyer des SMS grâce à l'outil Wget.**

## Prérequis
- Avoir créé un utilisateur SMS via l'espace client OVHcloud ou directement via les API. À cet effet, vous pouvez consulter le guide suivant : [Tout savoir sur les utilisateurs SMS](../tout_savoir_sur_les_utilisateurs_sms/)
- Disposer d'un compte SMS OVHcloud avec des crédits SMS


## En pratique

L'envoi d'un SMS se fait via une requête HTTPS avec ses champs obligatoires (et facultatifs, le cas échéant) à l'adresse suivante : <https://www.ovh.com/cgi-bin/sms/http2sms.cgi?>.

![http2sms](images/img_4011.jpg){.thumbnail}

### Étape 1 : Inclure les champs obligatoires

Votre URL devra avoir la forme suivante : 

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX&message=XXXXXXX
```


Les paramètres suivants doivent être séparés par des &. Remplacez les X par les informations ci-dessous:

|Paramètres|À remplacer par|
|---|---|
|account|Compte SMS à utiliser (ex : sms-ab1234-1)|
|login|Utilisateur SMS à utiliser sur le compte associé|
|password|Mot de passe de l'utilisateur|
|from|Un des expéditeurs déclarés sur votre compte SMS.|
|to|Numéro de téléphone du destinataire du message au **format international** (00336xxxx pour un numéro français). Il est possible d'ajouter des destinataires à la suite, séparés par une virgule ",".|
|message|Votre message. Ajouter %0d pour effectuer un saut de ligne dans le SMS envoyé|

Par défaut le message est envoyé immédiatement.

### Étape 2 : Ajouter des champs facultatifs


Vous pouvez ajouter des champs supplémentaires dans le sujet, tels que :

```
https://www.ovh.com/cgi-bin/sms/http2sms.cgi?&account=XXXXXXX&login=XXXXXXX&password=XXXXXXX&from=XXXXXXX&to=XXXXXXX1,XXXXXXX2&message=XXXXXXX&deferred=XXXXXXX&class=X&smsCoding=X&noStop=X
```

Remplacez les X par par les informations ci-dessous :

|Paramètres|À remplacer par|
|---|---|
|deferred|Pour définir une date d'envoi différé, au format hhmmjjMMAAAA (ex : 125025112019 pour un envoi le 25/11/2019 à 12h50)|
|class|Type de classe du SMS, au format N = 1 chiffre (voir la première note d'information ci-dessous)|
|noStop|1 pour ne pas afficher "STOP au XXXXX" à la fin du message pour un SMS à caractère non commercial|
|tag|Une chaîne de maximum 20 caractères vous permettant de marquer les messages envoyés|
|contentType|Vous pouvez choisir le type de la réponse. Elle peut être de type : text/xml, application/xml, text/json, application/json, text/plain, text/html (par défaut en text/plain)|
|smsCoding|Encodage du SMS, au format N = 1 chiffre (voir la seconde note d'information ci-dessous)|

> [!primary]
>
> **Détail des possibilités pour les *class***
> 
> *classe 0 :* Le message est directement affiché à l’utilisateur sur l’écran du mobile à la réception. Le message n’est enregistré ni dans la mémoire du téléphone, ni dans la carte SIM. Il est effacé dès que l’utilisateur a validé la visualisation.
> 
> *classe 1 :* Le message est enregistré dans la mémoire du téléphone et si cette mémoire est pleine, dans la carte SIM par défaut.
> 
> *classe 2 :* Le message est enregistré sur la carte SIM.
> 
> *classe 3 :* Le message est transféré sur un équipement externe connecté au mobile (PDA, PC portable…).
>

> [!primary]
>
> **Détail des possibilités pour le *smsCoding***
> 
> *1* pour l'encodage sur 7bit
> 
> *2* pour l'encodage Unicode
> 
>Si vous modifiez l’encodage pour l'encodage Unicode, votre SMS fera 70 caractères maximum contre 160 sur l'encodage 7bit.
>
>Pour plus d'informations sur les caractères autorisés en encodage 7bit, reportez-vous à [l'annexe](./#annexe_2) en bas de ce guide.
>

#### Taille des SMS à caractère commercial

Un SMS à caractère commercial devra obligatoirement inclure la mention STOP. Celle-ci contient 11 caractères et est automatiquement déduite des 160 caractères de base du 1er SMS.
Le tableau ci-dessous indique donc le nombre maximum de caractères autorisés pour les SMS à caractère commercial. 

Exemple : en encodage 7bits, si votre message fait plus de 149 caractères, il sera envoyé en 2 SMS et coûtera donc 2 crédits.

| Encodage | 1er SMS | 2ème SMS et suivants  |
|---|---|---|
| 7bits (norme GSM 03.38) | 149 caractères | 153 caractères |
| Unicode | 59 caractères | 70 caractères  |

### Étape 3 : Analyser les envois effectués

Une fois l'envoi effectué, un code de retour API vous indiquera si votre SMS a bien été envoyé ou s'il est en échec.
Un code supérieur à 100 et inférieur à 200 indique que le message a bien été envoyé.

Voici la liste des codes de retour de l'API :

- *100 ou 101 :* requête traitée.
- *201 :* un paramètre est manquant (exemples : Missing login, Missing password).
- *202 :* un paramètre est incorrect (exemples : Invalid tag: is too long, Invalid deferred time).
- *401 :* pas d'IP autorisée. Pour gérer les IP autorisées, vous pouvez appliquer des restrictions depuis votre espace-client.


Lors d'un échec, la cause est inscrite :
- dans le champ message pour le json ou le xml et 
- sur la deuxième ligne pour le html et le text/plain.

#### XML

- En cas de succès :

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>100</status><creditLeft>1987</creditLeft><smsIds><smsId>10867690</smsId></smsIds></response>
```

- En cas d'échec :

```xml
<?xml version="1.0" encoding="UTF-8" ?><response><status>201</status><message>Missing message. For more informations : http://guides.ovh.com/httpToSms</message></response>
```


#### json

- En cas de succès :

```json
{"status":100,"creditLeft":"1987","SmsIds":["10867690"]}
```

- En cas d'échec :

```json
{"status":201,"message":"Missing message. For more informations : http//:guides.ovh.com/httpToSms"}
```


#### HTML

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
1987<br>
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

#### Text/plain

- En cas de succès :

```
OK
1987
10867690
```

- En cas d'échec :

```
KO
Missing message. For more informations : http://guides.ovh.com/httpToSms
```

## Annexe

Les deux tableaux ci-dessous listent les caractères autorisés en encodage 7bit. Les caractères du tableau "Extensions" comptent double. 

La taille maximum d’un SMS est de 160 caractères en encodage 7bit (norme GSM 03.38).

L’utilisation de caractères ne figurant pas dans ces tableaux provoquera le basculement de l’encodage en Unicode et réduit à 70 caractères la taille maximale d’un SMS.

![Liste des caractères SMS](images/smsauthorizedcharacters.png){.thumbnail}

## Aller plus loin

Échangez avec notre communauté d'utilisateurs sur [https://community.ovh.com](https://community.ovh.com).