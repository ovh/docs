---
title: Wysyłanie wiadomości SMS za pomocą interfejsu API OVHcloud w Node.js
excerpt: Dowiedz się, jak wysyłać wiadomości SMS za pomocą interfejsu API OVHcloud RESTful w Node.js
updated: 2020-06-18
---


## Wprowadzenie

Wiadomości SMS są szeroko wykorzystywane do rozpowszechniania praktycznych informacji, śledzenia statusu zamówienia lub procesu transakcyjnego, powiadamiania o nietypowych zdarzeniach lub przypominania o spotkaniach. W tym przewodniku szczegółowo opisano sposób wysłania pierwszej wiadomości SMS przy użyciu interfejsu API OVHcloud w Node.js.

**Dowiedz się, jak wysyłać wiadomości SMS za pomocą interfejsu API OVHcloud RESTful w Node.js**

## Wymagania początkowe


- Posiadanie konta SMS OVHcloud z zasileniami SMS
- Posiadanie serwera Node.js i npm. Przykład na Ubuntu:

```
$ sudo apt-get install nodejs npm
```

Więcej informacji na temat [projektu GitHub](https://github.com/ovh/node-ovh).


## W praktyce

Najszybszym sposobem na pobranie wrappera NodeJs dla interfejsu API OVHcloud jest wykorzystanie npm do dodania modułu OVH:

```
$ npm install ovh
```

Należy przejść do katalogu ./node_modules/ovh/...

### Etap 1: utworzenie identyfikatorów

Identyfikatory są niezbędne do korzystania z interfejsu API SMS. Identyfikatory te tworzy się jednorazowo w celu określenia aplikacji, która będzie wysyłać wiadomości SMS. Czas ważności tych identyfikatorów można skonfigurować.

Utwórz identyfikatory skryptu (all keys at once) na tej stronie:
[https://api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/index.cgi?GET=/sms&GET=/sms/*/jobs/&POST=/sms/*/jobs/) (ten adres URL automatycznie zapewni Ci odpowiednie uprawnienia na potrzeby kroków opisanych w tym przewodniku).

![tworzenie tokenów](images/img_2462.jpg){.thumbnail}

W tym prostym przykładzie uzyskujemy uprawnienia dostępu do informacji o koncie, możliwość przeglądania wiadomości oczekujących oraz wysyłania wiadomości SMS.

- GET /sms/
- GET/sms/\*/jobs/
- POST /sms/\*/jobs/


Gwiazdka (\*) aktywuje wywołania tych metod dla wszystkich Twoich kont SMS. Możesz również ograniczyć wywołania do jednego konta, jeśli zarządzasz kilkoma kontami SMS na Twoim koncie OVHcloud, zamieniając ciąg „/sms” na „/sms/NAZWA-KONTA” oraz „/sms/\*/” na „/sms/NAZWA-KONTA/”.

W ten sposób uzyskasz identyfikatory dla Twojego skryptu:

- Application Key (określa Twoją aplikację)
- Application Secret (uwierzytelnia Twoją aplikację)
- Consumer Key (udziela aplikacji zezwolenia na dostęp do wybranych metod)


![pozyskiwanie tokenów](images/img_2463.jpg){.thumbnail}

Środowisko jest gotowe, identyfikatory zostały utworzone, a Ty możesz już tworzyć kod Twojego skryptu Node.js.


### Etap 2: pozyskanie nazwy serviceName i wysyłka pierwszej wiadomości SMS

Teraz pozyskamy nazwę serviceName (posiadane przez Ciebie konto SMS; zakładamy, że posiadasz tylko jedno konto SMS, w przeciwnym razie należy zrealizować tę część). Następnie wyślemy wiadomość SMS przy użyciu pozyskanego konta przez pierwsze wywołanie WebService:

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


Uruchom skrypt, aby wysłać pierwszą wiadomość SMS.

```
$ nodejs sms.js
my account SMS sms-XXXXXXX-1
{ totalCreditsRemoved: 1,
  invalidReceivers: [],
  ids: [ 2700042‡ ],
  validReceivers: [ '+33600000000' ] }
```


Pozyskujemy konto SMS (serviceName), otrzymujemy jedną odpowiedź, która zużywa 1 zasilenie na jeden ważny numer.

## Sprawdź również

W konsoli API ([https://api.ovh.com/console/#/sms](https://api.ovh.com/console/#/sms)) możesz odkryć inne metody ułatwiające integrację usług SMS, takie jak: wiadomości SMS pozwalające na odpowiedź (dotyczy wyłącznie kont OVHcloud we Francji), masowa wysyłka przy użyciu pliku CSV, wysyłki reklamowe, monitorowanie potwierdzeń odbioru itd.


Przyłącz się do społeczności naszych użytkowników na stronie [https://community.ovh.com/en/](https://community.ovh.com/en/)
