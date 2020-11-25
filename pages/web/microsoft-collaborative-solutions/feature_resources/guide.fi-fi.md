---
deprecated: true
title: 'Exchange 2013/2016: Resurssitilien käyttö'
excerpt: Tämä ohje neuvoo resurssitilien käytössä.
slug: exchange_20132016_resurssitilien_kaytto
legacy_guide_number: g1325
---


## Resurssitilin lisäys: vaihe 1
Luodaksesi resurssisi, mene [Web-hallintapaneeliin](https://www.ovh.com/manager/web/login.html).

Valitse Exchange -palvelu klikkaamalla ”Alustat”.

Valitse ”Resurssitilit jonka jälkeen ”Lisää resurssitili”.

Sinulla täytyy olla valittuna ”Expert-tila” hallintapaneelissa.

![](images/img_1346.jpg){.thumbnail}


## Resurssitilin lisäys: vaihe 2
Täytä vaaditut kentät:

Resurssin nimi: määrittele haluamasi näyttönimi resurssille.

Resurssisähköpostiosoite: valitse sähköpostiosoite resurssille. Sen täytyy olla osoite, joka ei ole olemassa vielä.

Koko: määrittele resurssin tila.

Salli ristiriidat: Mikäli tämä laatikko on valittuna, käyttäjä ei saa virheilmoituksia kun käyttäjä koittaa varata salin tai laitteiston, joka on jo käytössä.

Resurssin tyyppi: valittavana on kahden tyyppisiä resursseja: ”Sali” tai ”Laitteisto”.

Klikkaa ”Seuraava” jatkaaksesi vaiheeseen 2 ja varmistaaksesi operaation klikkaamalla ”Luo”.

![](images/img_1347.jpg){.thumbnail}


## Resurssitilin lisäys: vaihe 3
Kun resurssisi on luotu, voit muokata tai poistaa niitä.

Käytössäsi on yhteenveto jossa on seuraavat tiedot: nimi, resurssin tyyppi (huone tai välineistö) ja resurssiin liitetty sähköpostiosoite.

Resurssitilit on nyt aktivoitu ja näet myöhemmin tässä ohjeessa kuinka käyttää niitä.

![](images/img_1348.jpg){.thumbnail}


## Resurssin kalenteri: vaihe 1
Tämän avulla voit tarkastella resurssikalenteria OWAn kautta.

Siirtyäksesi OWA-selainpostiin, klikkaa [tästä](https://ex.mail.ovh.net/owa/).

Kirjaudu sisään käyttäen käyttäjänimenä koko sähköpostiosoitettasi ja osoitteelle määriteltyä salasanaa.

Tämän jälkeen valitse ”Kalenteri”, klikkaa hiiren oikealla napilla ”MUUT KALENTERIT” ja valitse ”Avaa kalenteri”.

![](images/img_1349.jpg){.thumbnail}


## Resurssin kalenteri: vaihe 2
Syötä resurssin nimi. Exchange -palvelin löytää sen automaattisesti koska se on osa GAL-järjestelmää (Global Address List).

Valitse ”Avaa” viimeistelläksesi operaation.

![](images/img_1350.jpg){.thumbnail}


## Resurssin kalenteri: vaihe 3
Luotu resurssikalenteri näkyy nyt OWA-käyttöliittymässä.

Huomaa ylävasemmalla oleva ”uusi tapahtuma”-painike. Klikkaa tätä luodaksesi uuden tapahtumamerkinnän alaisillesi/yhteistyökumppaneillesi.

![](images/img_1351.jpg){.thumbnail}


## Resurssin hallinta: vaihe 1
Tässä vaiheessa luodaan tapahtuma käyttäen edellisessä vaiheessa luotua resurssitiliä.

Tämän tehdäksesi, klikkaa ”Kalenteri” ja valitse ”uusi tapahtuma”.

Käyttöliittymä aukeaa alhaalle.

Täytä vaaditut kentät:

Tapahtuma: haluamasi nimi tapahtumalle.

Sijainti: tällä valinnalla voit lisätä resurssihuonetyypin.

Osallistujat: tässä kohdassa voit lisätä osallistujat ja ns. laitteistoresurssit.

Käynnistä määrittele tapahtuman aloitusaika.

Kesto: määrittele tapahtuman kesto.

Näytä muodossa: tässä voit määritellä tilan jonka haluat näkyvän kalenterissa.

Muistutus: valinta jolla on mahdollista määritellä tapahtumaan liittyvän muistutuksen näyttö.

Toista: määrittelee tapahtuman toistuvuustiheyden.

Valitse yläreunasta ”TALLENNA” viimeistelläksesi tapahtuman.

![](images/img_1352.jpg){.thumbnail}


## Resurssin hallinta: vaihe 2
Tapahtuma ”tapaaminen” hyväksyttiin saliresurssityypin ”omahuone1” ja laitteistoresurssin ”laitteisto1” toimesta.

![](images/img_1356.jpg){.thumbnail}


## Resurssin hallinta: vaihe 3
Voit tarkastella kalenterinäkymästä käsin resurssien tilaa.

Resurssin tila on tällä hetkellä, tapahtuman lisäyksen jälkeen, tilassa ”Varattu”.

![](images/img_1357.jpg){.thumbnail}


## Resurssin hallinta: vaihe 4
Uusi tapahtuma on lisätty samalle päivämäärälle kuin edellinenkin tapahtuma.

Tämän jälkeen näytölle tulee tieto tapahtuman hyväksymisestä tai hylkäämisestä.

Toinen tapahtuma hylättiin resurssien ”puhe” ja ”omahuone1” toimesta ristiriitojen takia.
Tapahtuma on jo merkitty kyseiselle päivämäärälle ja sille ei ole sallittu resurssia ristiriitojen takia, joten se hylkää tapahtumapyynnön.

Resurssi ”laitteisto1” hyväksyi pyynnön.
Tapahtuma on jo merkitty kyseiselle päivämäärälle mutta ristiriitojen havainnointi on pois päältä tällä resurssilla, joten se hyväksyy tapahtumapyynnön.

![](images/img_1358.jpg){.thumbnail}

