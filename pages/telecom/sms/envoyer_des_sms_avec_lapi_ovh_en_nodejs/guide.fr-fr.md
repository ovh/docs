---
title: Envoyer des SMS avec l’API OVH en Node.js
excerpt: Comment envoyer des SMS avec l’api OVH RESTful en Node.js
slug: envoyer_des_sms_avec_lapi_ovh_en_nodejs
legacy_guide_number: g1651
section: Envoyer des SMS
---


## 
En pré-requis vous devez disposer d’un serveur Node.js et de npm, sinon installez les.
Exemple sur Ubuntu :

```
$ sudo apt-get install nodejs npm
```

Plus d'informations sur [le projet GitHub](https://github.com/ovh/node-ovh).

Le moyen le plus rapide pour récupérer le Wrapper NodeJs pour l’Api OVH est d’utiliser npm pour ajouter le module ovh :

```
$ npm install ovh
```


Vous devez récupérer un répertoire ./node_modules/ovh/...


## Création des identifiants
Nous sommes dans le cas où nous avons besoin d’identifiants pour consommer l’API SMS, ces identifiants sont créés une fois pour identifier l’application qui va envoyer des SMS. La durée de vie de ces identifiants est paramétrable.
Créez vos identifiants de Script (all keys at once) sur cette page: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/) (cette url vous permet d'avoir automatiquement les bons droits pour ce guide : https://eu.api.ovh.com/createToken/?GET=/sms/&GET=/sms/*/jobs/&POST=/sms/*/jobs/ ).

![création des tokens](images/img_2462.jpg){.thumbnail}
Dans cet exemple simple, nous récupérons les droits pour avoir accès aux informations sur le compte, à la possibilité de voir les envois en attente et à la possibilité d’envoyer des SMS.

- GET /sms/
- GET/sms/*/jobs/
- POST /sms/*/jobs/


L’étoile (*) active les appels à ces méthodes pour tous vos comptes SMS, vous pouvez restreindre les appels à un seul compte si vous gérez plusieurs comptes SMS sur votre compte OVH.

Vous récupérez vos identifiants pour votre script :

- Application Key (identifie votre application)
- Application Secret (authentifie votre application)
- Consumer Key (autorise l'application à accéder aux méthodes choisies)



![récupération des tokens](images/img_2463.jpg){.thumbnail}
L'environnement est prêt, les identifiants sont créés, vous êtes prêt pour coder votre script Node.js.


## 
Nous allons maintenant récupérer le nom du serviceName (compte SMS que vous possédez, nous supposons que vous n'avez qu'un seul compte SMS, sinon cette partie est à implémenter). Puis nous envoyons un SMS avec le compte récupéré par le premier appel WebService :

```
var ovh = require('ovh')({
  appKey: 'your_app_key',
  appSecret: 'your_app_secret',
  consumerKey: 'your_consumer_key'
});
 
 // Get the serviceName (name of your sms account)
ovh.request('GET', '/sms', function (err, serviceName) {
  if(err) {
    console.log(err, serviceName);
  }
  else {
    console.log("My account SMS is " + serviceName);
 
    // Send a simple SMS with a short number using your serviceName
    ovh.request('POST', '/sms/' + serviceName + '/jobs', {
      message: 'Hello World!',
      senderForResponse: true,
      receivers: ['0033600000000']
    }, function (errsend, result) {
      console.log(errsend, result);
    });
  }
});
```


Lancez votre script pour envoyer votre premier SMS.

```
$ nodejs sms.js
my account SMS sms-XXXXXXX-1
{ totalCreditsRemoved: 1,
  invalidReceivers: [],
  ids: [ 2700042‡ ],
  validReceivers: [ '+33600000000' ] }
```


On récupère bien le compte SMS (ServiceName), on obtient une réponse avec 1 crédit consommé pour un numéro valide.


## 
Ce guide vous a permis d'envoyer votre premier SMS en API RESTful d'OVH. Vous pouvez maintenant poursuivre l'intégration de ce service dans votre application. La console d'API vous permettra de découvrir d'autres méthodes ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) pour faciliter l'intégration de services tels que : SMS réponses, envoi en masse avec fichier CSV, publipostage, suivi des accusés de réception...

