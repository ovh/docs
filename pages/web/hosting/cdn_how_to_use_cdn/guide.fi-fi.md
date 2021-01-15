---
deprecated: true
title: Ohje GeoCache Kiihdytin -palvelun käyttöön webhotellissa
excerpt: Käyttöohje webhotellipalveluun sisältyvälle GeoCache Kiihdytin -palvelulle
id: '1290'
slug: ohje_geocache_kiihdytin_-palvelun_kayttoon_webhotellissa
legacy_guide_number: g1290
---


## 
Kirjaudu [OVH:n hallintapaneeliin](https://www.ovh.com/manager/) käyttäen OVH-asiakastunnustasi (muotoa ”xy12345-ovh”) ja sille määrittelemääsi salasanaa.

Valitse webhotellisi klikkaamalla verkkotunnusta osiossa ”Webhotellit”.

![](images/img_2904.jpg){.thumbnail}


## GeoCache Kiihdytin -välimuistin tyhjennys
TTL (Time To Live — aika, miten pitkään välimuistitettu tiedosto säilyy liikenteenvaihtopisteessä) on 5—60 minuuttia. (Tarkka aika valitaan liikenteenvaihtopisteen palvelinsovelluksen toimesta optimointitarkoitusta varten.) Tämän jälkeen välimuistitettu tiedosto poistetaan. Tämän jälkeen sivustolla käyvän seuraavan vierailijan toimesta tiedosto välimuistitetaan uudelleen liikenteenvaihtopisteessä.

Muokatessasi sivustoasi välimuistin tyhjennys on suositeltavaa, jotta kävijät saavat päivitetyn sivuston sisällön. Kun tämä on tehty, tiedostot välimuistitetaan uudelleen kunhan uusi käyttäjä pyytää niitä.

Tyhjentääksesi välimuistin käsin, klikkaa vain Tyhjennä CDN välimuisti”.

![](images/img_2957.jpg){.thumbnail}


## GeoCache Kiihdyttimen deaktivointi
Jos et halua käyttää webhotelliisi kuuluvaa GeoCache-palvelua, voit ottaa sen pois käytöstä seuraavin tavoin:


- Älä käytä GeoCachen IP-osoitetta (A-tietue) webhotellissasi.
- Muokkaa webhotellisi juurihakemistossa olevaa ”sääntö”-tiedostoa (lue lisää seuraavasta osiosta).


Ohessa ohjeet webhotellisi IP-osoitteen vaihtamiseksi. Tämä siis ohittaa GeoCache-palvelun.

Klikkaa hallintapaneelissa ollessa GeoCachea käyttävää verkkotunnustasi, sitten osiota ”Verkkotunnukset & DNS” ja lopuksi ”DNS-alue”.

DNS-alueessa on ns. A-tietue, johon liittyvä rivi on esimerkiksi seuraava: ”.luuri.eu  A  213.xxx.xxx.xxx” *.

* Tämä on webhotelliisi sisältyvän GeoCache Kiihdytin -palvelun IP-osoite. Ota kyseinen IP talteen, jotta voit tulevaisuudessa myöhemmin aktivoida GeoCachen takaisin käyttöön, mikäli tarvetta. IP-osoite on mainittuna myös alempana olevassa IP-osoitelistassa. Voit myös ottaa yhteyden asiakaspalveluun. 

Tämän jälkeen klikkaa A-rivin oikealla puolella olevaa pientä muokkaus-kuvaketta (kuvake, jossa paperi ja kynä).

Tämän jälkeen pääset uuteen osioon, jossa voit muuttaa seuraavat kentät:


- Aliverkkotunnus: oletuksena on valittuna 'A'-tietue (älä muuta tätä)
- Valitse IP-osoite: valitse ”Hosting”
- Valitse hosting: webhotellisi pääverkkotunnus
- Valitse maa: tästä kohdasta voit valita mihin maahan haluat IP-osoitteesi geolokalisoitavan hakukoneita ajatellen.


Vahvista tämän jälkeen valintasi klikkaamalla pudotusvalikkojen alapuolelta nappia ”Hyväksy”. Webhotellisi IP-osoite päivittyy valintojesi mukaan tämän jälkeen.

GeoCacheen liittyvä IP-osoitelistaus 3 tai 17 liikenteenvaihtopistettä, ns. ”PoP”) .

Hallintapaneelista näet mikä klusteri vastaa webhotelliasi osiossa "Hosting" ja "FTP" tai asennussähköpostissa, jonka sait tuotteen aktivoimisen jälkeen.

|Klusteri|Ei GeoCachea|3 PoP (Basic)|17 PoP (Business)|
|002|37.187.184.2|213.186.33.2 tai 213.186.33.68|213.186.33.69|
|003|37.187.184.4|213.186.33.4 tai 213.186.33.84|213.186.33.85|
|005|37.187.184.16|213.186.33.16 tai 213.186.33.94|213.186.33.95|
|006|37.187.184.17|213.186.33.17 tai 213.186.33.96|213.186.33.97|
|007|37.187.184.18|213.186.33.18 tai 213.186.33.104|213.186.33.105|
|010|37.187.184.19|213.186.33.19 tai 213.186.33.106|213.186.33.107|
|011|37.187.184.40|213.186.33.40 tai 213.186.33.150|213.186.33.151|
|012|37.187.184.48|213.186.33.48 tai 213.186.33.152|213.186.33.153|
|013|37.187.184.24|213.186.33.24 tai 213.186.33.82|213.186.33.83|
|014|37.187.184.87|213.186.33.87 tai 213.186.33.168|213.186.33.169|
|015|37.187.184.3|213.186.33.3 tai 213.186.33.170|213.186.33.171|
|017|37.187.184.50|213.186.33.50 tai 213.186.33.172|213.186.33.173|




## 
Päästäksesi muokkaamaan tarvittavaa tiedostoa, yhdistä webhotellitilaasi FTP-yhteydellä. 

Tätä varten voit käyttää FileZilla-nimistä FTP-asiakasohjelmaa.


## GeoCache Kiihdyttimen käytön aktivointi/deaktivointi
Kun olet muodostanut FTP-yhteyden webhotelliisi, oletuksena sinulle näytetään juurihakemisto. Listattuna on myös eri tiedostoja ja hakemistoja ml. tiedosto, joka on nimettynä muotoon ”.ovhconfig”.

Lataa tämä tiedosto tietokoneellesi (tuplaklikkauksen pitäisi toimia latausta varten) ja avaa tiedosto tekstieditorilla. Lopuksi muuta tiedoston nimeksi 'ovhconfig.txt' mikäli et pysty pitämään nimeä entisenä. Esimerkiksi Windowseissa pisteellä alkavia tiedostonimiä ei ole mahdollista käyttää.

Rivillä, joka alkaa sanalla ”environment”, voit korvata asetuksen ”production” asetuksella ”development”.

Tallenna tiedosto ja lähetä se takaisin webhotellisi juurihakemistoon korvaamalla aiemman tiedoston. Voit muuttaa tiedoston nimen takaisin muotoon .ovhconfig joko FTP-asiakasohjelmasi kautta tai vaikkapa SSH-yhteydellä. SSH-yhteys sisältyy Pro-webhotelliin ja muihin webhotelleihin siitä ylöspäin ja luonnollisesti kaikkiin Linux-palvelimiin, on palvelin sitten VPS Classic tai dedikoitu rautapalvelin.

Aktivoidaksesi GeoCachen käytön uudelleen, tee edellämainittu toimenpide uudelleen muuttamalla asetus "environment" asetukseksi "production".

![](images/img_1207.jpg){.thumbnail}
Voit myös lisätä seuraavan rivin .htaccess-tiedostoon: 
```
Header set Cache-Control "no-cache"
```



