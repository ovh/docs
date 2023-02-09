---
title: Inviare SMS con l’API OVHcloud in Node.js
excerpt: Come inviare SMS con l’API OVHcloud RESTful in Node.js
slug: inviare_sms_con_lapi_ovh_in_nodejs
section: 'Inviare SMS'
updated: 2020-06-18
---

**Ultimo aggiornamento: 18/05/2020**

## Obiettivo

Gli SMS sono ampiamente utilizzati per inviare informazioni pratiche, per seguire lo stato di un ordine o di un processo transazionale, essere avvisati di un evento insolito o come promemoria di appuntamenti. Questa guida espone in dettaglio il metodo di invio di un primo SMS con l'API OVHcloud in Node.js.

**Come inviare SMS con l’API OVHcloud RESTful in Node.js**

## Prerequisiti

- Disporre di un account SMS OVHcloud con saldo SMS
- Disporre di un server Node.js e di npm. Esempio su Ubuntu:

```
$ sudo apt-get install nodejs npm
```

Maggiori informazioni sul [progetto GitHub](https://github.com/ovh/node-ovh).


## Procedura

Il mezzo più rapido per recuperare il Wrapper NodeJs per l’API OVHcloud è di utilizzare npm per aggiungere il modulo ovh:

```
$ npm install ovh
```

È necessario recuperare la directory ./node_modules/ovh/...

### Step 1: Creazione degli identificativi

Per utilizzare l’API SMS sono necessari degli identificativi. Questi identificativi vengono creati una sola volta per individuare l’applicazione che invierà gli SMS. La loro durata di vita è configurabile.

Crea i tuoi identificativi di Script (tutte le chiavi per volta) su questa pagina:
[https://api.ovh.com/createToken](https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs/&POST=/sms/*/jobs/) (questo URL permette di avere automaticamente le autorizzazioni per gli step descritti in questa guida).

![creazione dei token](images/img_2462.jpg){.thumbnail}

In questo semplice esempio, recuperiamo le autorizzazioni per avere accesso alle informazioni sull’account, alla possibilità di vedere i messaggi in uscita e di inviare SMS.

- GET /sms/
- GET/sms/\*/jobs/
- POST /sms/\*/jobs/


L’asterisco (\*) attiva le chiamate a questi metodi per tutti i tuoi account di SMS. Puoi ugualmente limitare le chiamate a un solo account, se gestisci diversi account SMS sul tuo account OVHcloud, sostituendo «/sms» con «/sms/NOME-ACCOUNT» e «/sms/\*/» con «/sms/NOME-ACCOUNT/».

In questo modo recupererai gli identificativi per il tuo script:

- Application Key (identifica la tua applicazione)
- Application Secret (autentica la tua applicazione)
- Consumer Key (autorizza l’applicazione ad accedere ai metodi scelti)


![recupero dei token](images/img_2463.jpg){.thumbnail}

L’ambiente è pronto, gli identificativi sono creati, ora puoi codificare il tuo script Node.js.


### Step 2: Recupero del serviceName e invio del primo SMS

Recuperiamo ora il nome del serviceName (l’account SMS che possiedi; supponiamo che tu ne abbia uno solo, in caso contrario questa parte è da implementare). Quindi inviamo un SMS con l’account recuperato dalla prima chiamata WebService:

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


Lancia il tuo script per inviare il primo SMS.

```
$ nodejs sms.js
my account SMS sms-XXXXXXX-1
{ totalCreditsRemoved: 1,
  invalidReceivers: [],
  ids: [ 2700042‡ ],
  validReceivers: [ '+33600000000' ] }
```


Si recupera effettivamente l’account SMS (ServiceName), si ottiene una risposta con 1 credito consumato per un numero valido.

## Per saperne di più

La console di API ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) ti permetterà di scoprire altri metodi per facilitare l’integrazione di servizi SMS quali: SMS che permettono la risposta (unicamente per gli account OVHcloud in Francia), invio massivo con file CSV, mailing o con conferma di ricezione...


Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en](https://community.ovh.com/en/)
