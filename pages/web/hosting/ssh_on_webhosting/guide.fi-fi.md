---
deprecated: true
title: 'Webhotellit: SSH webhotellissa'
excerpt: 'Webhotellit: SSH webhotellissa'
id: '1962'
slug: webhotellit_ssh_webhotellissa
legacy_guide_number: g1962
---


## Mikä on SSH ja mitkä ovat sen käytön hyödyt?
SSH- yhteyden käyttäminen on mahdollista Pro-webhotelleissa ja sitä ylemmissä webhotelleissa (vanhoissa tuotteissa[/url]mahdollisuus on Plan-ryhmän tuotteissa.

HUOM: Vanhoissa tuotteissa yhteys on mahdollinen ainoastaan pää FTP-tilillä. Tämä tarkoittaa sitä, että ylimääräisillä FTP-käyttäjillä ei ole SSH-yhteyttä.

SSH-yhteyden avulla voit kirjautua webhotelliisi ja muokata tiedostoja (kuten FTP:ssä).
Lisätietoja SSH-protokollasta löydät tästä[](https://fi.wikipedia.org/wiki/SSH).


## Käytön edellytykset

- SSH on saatavilla:

Webhotelleihin, jotka ovat vähintään tasoa [](https://www.ovh-hosting.fi/webhotelli/webhotelli-pro.xml)PRO.


- Ohjelmisto, joka mahdollistaa SSH-yhteyden

- Palomuurissa ja reitittimessä portti 22 avoinna




## Aktivoi/deaktivoi käyttäjän SSH
Voit hallita SSH-kirjautumisia hallintapaneelista. Kilkkaa vain webhotellisi nimeä vasemmanpuoleisessa sarakkeessa ja tule kuvakkeeseen "FTP - SSH".

Kun luot uusia FTP-käyttäjiä, myös SSH-yhteys aktivoituu kyseiselle käyttäjälle.

![](images/img_3945.jpg){.thumbnail}
Voit katkaista käyttäjän SSH-yhteyden klikkaamalla oikealla olevaa hammasratasta ja sitten "Muokkaa".


-  Muutos tulee voimaan muutaman minuutin kuluttua.



![](images/img_3946.jpg){.thumbnail}


## Tilauspyyntö
Linuxilla:

- KDE: Avaa päävalikko (oletuksen näytön alaosassa vasemmalla), klikkaa sitten hakukenttää ja kirjoita "konsole". Klikkaa sitten ensimmäistä hakutulosta.

Mac-järjestelmässä:
- Klikkaa kovalevyäsi, sitten sovellusluetteloa ja hyötyluetteloa ja lopuksi sovellusta "Terminal"


Windosissa:


- Windows ei sisällä SSH-asiakasohjelmistoa, minkä takia sinun täytyy ladata erillinen sovellus. Suosittelemme Kittyn käyttöä, jonka voit ladata [täältä](http://www.9bis.net/kitty/).




## Yhdistäminen SSH-yhteydellä
Linuxissa ja Macissa

- Jotta voit kirjautua webhotelliin SSH-yhteydellä, avaa tilauspyyntösi kuten alla ja syötä:SSH OmaFtplogin@Ftppalvelimesi



Voit löytää FTP-tunnuksesi tämän oppaan[](https://www.ovh-hosting.fi/g1909.webhotelli_salasanojen_hallinta_ja_loytaminen) avulla.

![](images/img_3093.jpg){.thumbnail}
Windosissa:

- Suosittelemme seuraamaan ohjetta
[Kittyn](https://www.ovh-hosting.fi/g1964.webhotelli) käyttämiseen.



## Yleisimmät komennot
Korvaa vain termi arg luettelon tai tiedoston nimella, jossa haluat toimia.

|Syötettävä komento|Käännös (englanniksi)|Selitys|
|pwd|print working directory|Näytä työhakemisto|
|cd arg|change directory|Muuta työhakemistoa; arg vastaa uutta hakemistoa. Komento cd ilman arg lisäämistä sijoittuu hakemistoon home.|
|cd ..|change directory to ..|Muuta työhakemistoa nostamalla sen tasoa hakemistojen rakenteessa.|
|ls arg|list|Listaa sisällön argjos se on hakemisto. Ilman arg, ls listaa työhakemistoluettelon.|

| ll arg | long list | Näyttää yksityiskohtaisia tietoja tiedostosta arg. 
|
|ls -a arg|list all|Näyttää kaikki tiedostot arg, myös ne jotka alkavat .., jos kyseessä on hakemisto. Vaihtoehdot voivat olla ls yhdistelmiä: ls -al.|
|chmod droit arg|muuta oikeuksia|Muuta tiedoston oikeuksia arg, oikeuden mukaisesti.|
|mkdir arg|make directory|Luo hakemisto arg.|
|rmdir arg|remove directory|Poista hakemisto argjos se on tyhjä.|
|rm arg|remove|Poista viittaus arg.|
|rm -r arg|remove recursively|Poista arg ja kaikki sen sisältämät tiedostot.|

| mv arg1 arg2 | move | Nimeä uudelleen tai siirrä arg1 muotoon arg2. 
|
|touch arg|touch|Luo tyhjä tiedosto nimeltä arg jos sitä ei ole olemassa, muutoin päivitä kuluvalla päivällä, päivänä jolloin sitä on muokattu edellisen kerran.|




## Skriptin käsittely tiettyä PHP-versiota käyttäen
Ajaaksesi PHP-skriptejä SSH-yhteydellä tietyllä PHP-versiolla, voit hyödyntää alla olevaa listaa.


|Komento|Versio|
|php.ORIG.4 (cgi)|4.4.9|
|php.ORIG.5_2 (cgi)|5.2.17|
|php.ORIG.5_3 (cgi-fcgi)|5.3.29|
|/usr/local/php5.3/bin/php (cli)|5.3.29|
|php.ORIG.5_4 (cgi-fcgi)|5.4.38|
|/usr/local/php5.4/bin/php (cli)|5.4.38|
|/usr/local/php5.5/bin/php (cli)|5.5.22|
|/usr/local/php5.6/bin/php (cli)|5.6.6|


Esimerkiksi skriptin "monScript.php" ajamiseksi PHP 5.3 versiossa täytyy tehdä komento: 
```
php.ORIG.5_3 monScript.php
```


Ennen skriptin nimea täytyy myös ilmoittaa sen sijainti.
Esimerkiksi jos tiedostosi "Skriptini.php" on kansiossa "WWW", ja haluat ajaa sen PHP-versiossa 5.3, on annettava seuraava komento:


```
php.ORIG.5_3 www/Skriptini.php
tai
php.ORIG.5_3 /www/Skriptini.php
```




## OVH:n julkiset SSH-avaimet
Kun kirjaudut ensimmäistä kertaa palvelimeen, sinua pyydetään vahvistamaan julkinen avain.

