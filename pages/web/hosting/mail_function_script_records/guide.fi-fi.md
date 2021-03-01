---
deprecated: true
title: 'Webhotellin automatisoitujen sähköpostien seuranta ja hallinta'
slug: webhotellista_lahetettyjen_sahkopostien_seuranta
excerpt: 'Opi seuraamaan OVH:n webhotellin lähettämiä automatisoituja sähköpostiviestejä'
section: Vianhaku
---

**Päivitetty 11.5.2018**

## Tavoite

Automatisoidut sähköpostit ovat skriptien kautta lähetettyjä viestejä. Niitä käytetään esimerkiksi verkkosivusi yhteydenottokaavakkeessa ja niiden avulla vierailijasi voivat lähettää sinulle sähköpostiviestejä.

**Opi seuraamaan OVH:n webhotellin lähettämiä automatisoituja sähköpostiviestejä.**

## Edellytykset

- Sinulla on [webhotellituote](https://www.ovh-hosting.fi/webhotelli/){.external}.
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.

> [!primary]
>
> Tämä ohje keskittyy ainoastaan OVH:n webhotellissasi sijaitsevista skripteistä lähetettyihin viesteihin.
>
> Haluatko hallita MX Plan -tuotteeseesi tai [OVH:n webhotelliisi](https://www.ovh-hosting.fi/webhotelli/){.external} sisältyviä sähköpostiosoitteita? Mene [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osioon `Sähköpostit`{.action}.
>

## Käytännössä

Webhotellisi automatisoitujen sähköpostien seuranta ja hallinnointi tapahtuu [hallintapaneelissa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}. Kirjaudu hallintapaneeliin, klikkaa kohtaa `Webhotellit`{.action} vasemman reunan valikossa ja valitse sitten kyseessä olevan webhotellin nimi. Klikkaa sitten välilehteä `Enemmän +`{.action} ja sitten `Sähköpostien skriptit`{.action}.

Näkyviin tulevalla sivulla voit seurata ja hallita OVH:n webhotellin lähettämiä automatisoituja sähköpostiviestejä.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

### Automatisoitujen sähköpostien lähetyksen seuranta

Pysy edelleen osiossa `Sähköpostien skriptit`{.action}. Sivulla näkyy useita tietoja, joiden avulla voit nähdä yhdellä silmäyksellä skriptiesi generoimien automatisoitujen sähköpostien lähetyksen.

|Tieto|Yksityiskohdat|
|---|---|
|Palvelun tila|Näyttää webhotellisi automatisoituja sähköpostiviestejä lähettävän palvelun nykyisen tilan. Vihreässä ruudussa näkyvä tila merkitsee toiminnassa olevia lähetyksiä, kun taas punainen merkitsee sitä, ettei lähetyksiä toteuteta enää. Lähetysten hallinnointi vaihtelee tilasta riippuen, katso [“Automatisoitujen sähköpostien lähetyksen hallinnointi”](https://docs.ovh.com/fi/hosting/webhotellista_lahetettyjen_sahkopostien_seuranta/#automatisoitujen-sahkopostien-lahetyksen-hallinnointi){.external}.|
|Virheviesti osoitteeseen|Virheraportti lähetetään valitsemaasi sähköpostiosoitteeseen. Voit määrittää sen painikkeella `Vaihda vastaanottajaa`{.action}. Tämä raportti sisältää webhotellistasi lähetetyt sähköpostiviestit, jotka ovat palautuneet OVH:lle virhetilassa, koska niitä ei voitu toimittaa eteenpäin. Painike `Virhetilassa olevat sähköpostit`{.action} mahdollistaa näiden raporttien tarkastelun milloin tahansa hallintapaneelissa.|
|Lähetetyt viestit yhteensä|Näyttää lähetettyjen automatisoitujen sähköpostiviestien kokonaismäärän webhotellisi luomisesta alkaen.|
|Tänään lähetetyt viestit|Näyttää ainoastaan tänään lähetettyjen automatisoitujen viestien kokonaismäärän.|
|Virhetilassa olevat sähköspotit yhteensä|Näyttää virhetilassa olevien automatisoitujen sähköpostiviestin lukumäärän webhotellisi luomisesta alkaen. Ne ovat palautuneet OVH:lle, sillä niitä ei ole voitu toimittaa.|
|Lähetettyjen sähköpostien historia|Näyttää kaavion, joka esittää webhotellistasi lähetettyjen sähköpostien historiatietoja edellisiltä päiviltä.|

> [!primary]
>
> Webhotellin automatisoitujen sähköpostien epätoivotun käytön ehkäisemiseksi suosittelemme vahvasti luomaan turvajärjestelmän, kuten captcha-kentän lomakkeeseen verkkosivulle, josta viestejä lähetetään (esim. yhteydenottokaavake).
>

![hosting](images/monitoring-automatic-emails-step2.png){.thumbnail}

Jos havaitset, ettei skriptiesi generoimia sähköpostiviestejä lähetetä, vaikka palvelun tila mahdollistaa lähetykset edelleen, suosittelemme:

- **tarkistamaan skriptit toteuttamalla lähetyksiä**: skriptit eivät onnistu lähettämään sähköpostiviestejä syntaksivirheen takia. Tarkista skriptien sisältö, kokeile sitten uudestaan.

- **testaamaan sähköpostin lähetys testiskriptillä**: luo testiskripti, joka lähettää sähköpostin omaan osoitteeseesi. Jos vastaanotat viestin oikein, tarkoittaa se sitä, että viestien lähetyksestä vastaavat skriptit sisältävät virheitä. Osaamisestasi riippuen, testiskriptit voidaan löytää internetistä.

- **toteuttamaan lähetyksesi SMTP-palvelinta käyttämällä**: älä määritä SMTP-palvelinta skriptiesi asetuksissa. Jos sinulla on käyttöliittymä verkkosivultasi tapahtuvaa sähköpostien lähetystä varten, tätä asetusta tulee voida muokata verkkosivun konfiguraatiossa.

### Automatisoitujen sähköpostien lähetyksen hallinnointi

Pysy edelleen osiossa `Sähköpostien skriptit`{.action}. Useiden painikkeiden avulla on mahdollista hallita automatisoitujen sähköpostien lähetystä webhotellistasi. Palvelun tilasta riippuen jotkut eivät välttämättä ole käytettävissä.

|Toiminto|Yksityiskohdat|
|---|---|
|Estä lähetys|Mahdollistaa automatisoitujen sähköpostien lähetyksen estämisen webhotellistasi. Skriptiesi generoimia sähköpostiviestejä ei lähetetä enää eston jälkeen, mutta ne säilytetään jonossa odottamassa enintään 72 tunnin ajan.|
|Salli lähetys|Mahdollistaa automatisoitujen sähköpostien lähetyksen webhotellistasi. Myös jonossa odottavat viestit lähetetään.|
|Siivoa sähköpostit|Pyyhkii jonossa odottavat viestit ja estää niiden lähetyksen.|

Tee haluttu toiminto klikkaamalla kyseessä olevaa painiketta ja sitten `Vahvista`{.action}. Tietyissä tapauksissa halutun toiminnon toteutuminen kokonaisuudessaan saattaa vaatia useita minuutteja.

![hosting](images/monitoring-automatic-emails-step3.png){.thumbnail}

## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.