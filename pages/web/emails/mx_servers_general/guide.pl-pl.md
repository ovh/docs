---
title: 'Hosting www: Serwery MX'
excerpt: 'Hosting www: Serwery MX'
slug: hosting_www_serwery_mx
legacy_guide_number: g2003
---


## Czym jest serwer MX?
Serwery MX to serwery e-mail, które definiuje się w strefie DNS domeny. 
Serwery te odbierają e-maile dla danej domeny.

Na przykład:

- Chcesz otrzymywać e-maile na adres moj_adres@moja_domena.com, który jest adresem w OVH. W strefie DNS domeny należy więc wskazać serwery MX OVH.


Dzięki temu zostanie nawiązane połączenie między domeną i serwerami e-mail.

Możliwe są różne konfiguracje. W tym przewodniku przedstawimy podstawowe konfiguracje oraz kilka przykładów konfiguracji zaawansowanych.

Schemat domeny, serwerów DNS i strefy DNS wygląda tak:

![](images/img_3414.jpg){.thumbnail}


## Wstępne wymagania

- Dostęp do [panelu klienta](https://www.ovh.com/manager/web/login/)

- Chęć korzystania z usług e-mail OVH




## Gdzie można skonfigurować serwery MX domeny?
Najpierw należy wiedzieć, gdzie zarejestrowana jest domena i z jakich serwerów DNS korzysta. 


- Serwery DNS domeny można wskazać wyłącznie u operatora, u którego jest zarejestrowana domena. 
- Na serwerach DNS używanych przez Twoją domenę znajduje się strefa DNS domeny.
- W strefie DNS domeny możesz zmienić wpisy MX, które określają serwery e-mail domeny.


Poniżej przykład strefy DNS w OVH. W środku znajdują się poszczególne pola (NS / MX /A / CNAME / TXT) a z prawej strony adres docelowy.

||NS|ns109.ovh.net.|
||NS|dns109.ovh.net.|
||MX 1|mx1.mail.ovh.net.|
||MX 5|mx2.mail.ovh.net.|
||MX 10|mx3.mail.ovh.net.|
||A|213.186.33.18|
||TXT|"v=spf1 include:mx.ovh.com ~all"|
|_autodiscover._tcp|SRV|0 0 443 mailconfig.ovh.net.|
|_imaps._tcp|SRV|0 0 993 ssl0.ovh.net.|
|_submission._tcp|SRV|0 0 465 ssl0.ovh.net.|
|autoconfig|CNAME|mailconfig.ovh.net.|
|ftp|CNAME|ftp.cluster017.ovh.net.|
|imap|CNAME|ssl0.ovh.net.|
|mail|CNAME|ssl0.ovh.net.|
|pop3|CNAME|ssl0.ovh.net.|
|smtp|CNAME|ssl0.ovh.net.|
|www|A|213.186.33.18|


W tej strefie DNS podane są poniższe serwery mailowe (MX):

```
MX 1 mx1.mail.ovh.net.
MX 5 mx2.mail.ovh.net.
MX 10 mx3.mail.ovh.net.
```


Liczba z prawej strony "MX" wskazuje na priorytet.

## Informacja:
Aktualnie stare serwery MX nadal działają dla usług e-mail utworzonych przed 23/05/2016.
Te pola należy zmienić, jeśli chcesz zmienić serwer mailowy.
Uwaga: Propagacja zmian w strefie DNS trwa około 24 godziny.


## Korzystasz ze strefy DNS OVH.
Skorzystaj z tego przewodnika: []({legacy}2012).


## Nie korzystasz ze strefy DNS OVH.
Skorzystaj z tego przewodnika: []({legacy}2011).

