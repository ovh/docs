---
title: 'Webhotelli: Yleistä tietoa OVH:n jaetuista sähköposteista'
slug: webhotelli_yleista_tietoa_ovhn_jaetuista_sahkoposteista
routes:
    canonical: 'https://docs.ovh.com/fi/emails/'
excerpt: 'Yleistä OVH;n sähköposteista'
legacy_guide_number: g1474
---

## Windows

- [Windows 10](https://www.ovh-hosting.fi/g2284.konfigurointi-windows-10)

- [Windows 8](https://www.ovh-hosting.fi/g1281.konfigurointi-windows-8)


-[Windows Phone](https://www.ovh-hosting.fi/g1346.konfiguraatio-windows-phone)


- [Windows Mail](https://www.ovh-hosting.fi/g1300.konfigurointi-windows-mail)




## Apple

- [blue]](https://www.ovh-hosting.fi/g1287.konfigurointi-mail-macos)

- [Mavericks & Yosemite](https://www.ovh-hosting.fi/g1599.konfiguraatio-mail-macos-mavericks)

- [El Capitan](https://www.ovh-hosting.fi/guides/g1965.konfigurointi_mail-_el_capitan)

- [Thunderbird Mac-koneessa](https://www.ovh-hosting.fi/guides/g1911.mail_konfigurointi_thunderbird_mac)

- [iPad iOS 7](https://www.ovh-hosting.fi/g1348.konfigurointi-mail-macos)

- [iPhone iOS 3](https://www.ovh-hosting.fi/g1296.konfigurointi-iphone)

- [iPhone iOS 9.1](https://www.ovh-hosting.fi/g2004.konfigurointi-iphone)




## Outlook

- [Outlook 2007](https://www.ovh-hosting.fi/g1298.konfigurointi-outlook-2007)

- [Outlook 2010](https://www.ovh-hosting.fi/g1299.konfigurointi-outlook-2010)

- [Outlook 2013](https://www.ovh-hosting.fi/g1286.konfigurointi-outlook-2013)

- [Outlook 2011 Mac](https://www.ovh-hosting.fi/g1345.konfiguraatio-outlook-2011-mac)




## Muut

- [Konfigurointi Thunderbirdillä](https://www.ovh-hosting.fi/g1297.konfigurointi-thunderbird)

- [Android tabletilla](https://www.ovh-hosting.fi/g1283.konfigurointi-android-tabletti)

- [Android 4.4](https://www.ovh-hosting.fi/g1347.konfiguraatio-nexus-5-android-44)

- [Android 5.1](https://www.ovh.com/fr/hosting/guides/g1912.konfigurointi-android_-51)

- [BlackBerry](https://www.ovh-hosting.fi/g1381.konfigurointi-blackberry)

- [Gmail](https://www.ovh-hosting.fi/g1408.konfigurointi-gmail)




## Pääsy selainpostiin
Voit lukea ja lähettää sähköposteja aina myös webmail-selainpostin kautta, joka löytyy osoitteesta [johon pääset klikkaamalla ](http://webmail.ovh.net/).

Webmail-ohje sijaitsee 
[täällä]({legacy}1302).

![](images/img_2007.jpg){.thumbnail}


## IMAP-määrittely (Suositeltu)
Tässä tarkat tiedot IMAP-sähköpostitilin konfiguroimiseen.

Asetukset IMAP-tyyppisen postitilin käyttöön SSL-suojaus aktivoituna tai poistettuna käytöstä.

Sähköposti: koko sähköpostiosoitteesi.
Salasana:[hallintapaneelin kautta](https://www.ovh.com/manager/web/login/) postilaatikolle määrittelemäsi salasana.
Käyttäjätunnus: käyttäjätunnus l. koko sähköpostiosoitteesi.
Tuleva palvelin: tuleva postipalvelin l. SSL0.OVH.NET
Tuleva portti: tulevan postin portti, 993 tai 143
Lähtevä palvelin: lähtevä postipalvelin l. SSL0.OVH.NET
Lähtevä portti: lähtevän postin portti, 465 tai 587

Portit 143 ja 587 ovat postitilin käytölle ilman SSL-suojausta.
Portit 993 ja 465 ovat postitilin käytölle SSL-suojaus aktivoituna.


- Lähtevän postin SMTP-palvelimen autentikoinnin on oltava aktivoituna.


|Portit|SSLaktiivinen|SSLpois käytöstä|
|Saapuva|993|143|
|Lähtevä|465|587|




## POP-määrittely
Tässä tarkat tiedot POP-sähköpostitilin konfiguroimiseen.

Asetukset POP-tyyppisen postitilin käyttöön SSL-suojaus aktivoituna tai poistettuna käytöstä.

Sähköposti: koko sähköpostiosoitteesi.
Salasana:[hallintapaneelin](https://www.ovh.com/manager/web/login/) postilaatikolle määrittelemäsi salasana.
Käyttäjätunnus: koko sähköpostiosoitteesi.
Tuleva postipalvelin: tuleva postipalvelin l. SSL0.OVH.NET
Tulevan postin portti: tulevan postin portti, 995 tai 110
Lähtevä postipalvelin: lähtevä postipalvelin l. SSL0.OVH.NET
Lähtevän postin portti: lähtevän postin portti, 465 tai 587

Portit 110 ja 587 ovat postitilin käytölle ilman SSL-suojausta.
Portit 995 ja 465 ovat postitilin käytölle SSL-suojaus aktivoituna.


- Lähtevän postin SMTP-palvelimen autentikoinnin on oltava aktivoituna.


|Portit|SSLaktiivinen|SSLpois käytöstä|
|Saapuva|995|110|
|Lähtevä|465|587|




## Tunnistautumismuistutus
On olennaista, että lähtevän postin palvelin tunnistetaan, jotta sähköpostit lähtevät ongelmitta.

Muussa tapauksessa seuraava virhe voi ilmetä:


```
"553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)"
```



- Varmista, että sähköpostiohjelmassasi on päällä SMTP-tunnistautuminen lähteviä viestejä varten. Voit katsoa sitä varten tämän ohjeen yläosassa olevia oppaita.



