---
title: 'Webhotellin sähköposti: Yleistä MX-palvelimista'
excerpt: 'Webhotellin sähköposti: Yleistä MX-palvelimista'
slug: webhotellin_sahkoposti_yleista_mx-palvelimista
legacy_guide_number: g2003
---


## Mikä on MX-palvelin?
MX-palvelimet ovat palvelimia, jotka määrität verkkotunnuksesi DNS-alueella.
Nämä palvelimet vastaanottavat verkkotunnuksen sähköpostit.

Esimerkiksi:

- Haluat vastaanottaa sähköposteja oikein osoitteessa osoitteeni@verkkotunnukseni.com, joka on OVH;N sähköpostitili. Verkkotunnuksen DNS-alueella käyttämien MX-kenttien on oltava OVH:N.


Näin saadaan aikaan yhdyslinkki verkkotunnuksen ja postipalvelinten välillä.

On olemassa monenlaisia yhdistelmiä ja konfiguraatioita, joista tässä ohjeessa käsitellään perusmalleja sekä muutamia esimerkkejä edistyneempään käyttöön.


Verkkotunnukset, nimipalvelimet ja DNS-alueen voidaan havainnollistaa seuraavasti:

![](images/img_3414.jpg){.thumbnail}


## Vaatimukset

- Pääsy
[hallintapaneeliin](https://www.ovh.com/manager/web/login/). 

Mikäli et pääse enää hallintapaneeliisi, voit katsoa neuvoja seuraavasta ohjeesta[](https://www.ovh-hosting.fi/g1909.sivusto-internetiin#tietokanta_luominen).


- Haluat käyttää OVH:N sähköpostipalveluja




## Missä konfiguroidaan verkkotunnuksen MX-palvelimet?

- Ensiksi sinun on tiedettävä, mihin olet rekisteröinyt verkkotunnuksesi ja mitä nimipalvelimia se käyttää.

- Verkkotunnuksen nimipalvelimet voi valita ainoastaan rekisterinpitäjä, jonka rekisteriin verkkotunnuksesi on rekisteröity.
- Näissä verkkotunnuksesi käyttämissä nimipalvelimissa on verkkotunnuksesi DNS-alue
- Tässä DNS-alueessa voit muokata MX-kenttiä, jotka määrittävät verkkotunnuksen postipalvelimet.


Tässä esimerkki DNS-alueesta OVH:lla. Huomaa keskellä olevat erityyppiset kentät ( NS / MX /A / CNAME / TXT ). 
Ja oikealla niiden juuret.

||NS|ns109.ovh.net.|
||NS|dns109.ovh.net.|
||MX 1 |

mx1.mail.ovh.net.|
||

MX 5| 
mx2.mail.ovh.net.|
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


Tässä DNS-alueessa verkkotunnuksen postipalvelimet (MX) ovat siis:

```
|www |MX 1| mx1.ovh.net.|
|www |MX 100| mxb.ovh.net.|
|www |MX 5| mx2.ovh.net.|
```


Luku kohdan "MX" vieressä kertoo sen prioriteetin.

## Ilmoitus:
Vanhat MX-palvelimet ovat toistaiseksi vielä toiminnallisia ennen 23.05.2016 luoduille postipalveluille, suosittelemme kuitenkin käyttämään ylläolevia palvelimia pysyäksesi ajan tasalla.
Näitä kenttiä tulee siis muokata, jos halutaan muuttaa postipalvelinta.
Huomio: Voi kestää jopa 24 tuntia ennen kuin kaikki DNS-alueen muutokset ovat astuneet voimaan.


## Käytät OVH:n DNS-aluetta
Tässä tapauksessa katso ohjetta: []({legacy}2012).


## Et käytä OVH:n DNS-aluetta
Tässä tapauksessa katso ohjetta: []({legacy}2011).

