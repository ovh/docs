---
deprecated: true
title: 'Webhotellit: UKK - Migraatio uusimpiin PHP-versioihin'
excerpt: 'Webhotellit: UKK - Migraatio uusimpiin PHP-versioihin'
id: '1758'
slug: webhotellit_ukk_-_migraatio_uusimpiin_php-versioihin
legacy_guide_number: g1758
---


## PHP
Mikä on PHP?
PHP on avoimen lähdekoodin ohjelmointikieli, jota käytetään erityisesti Web-palvelinympäristöissä dynaamisten web-sivujen luonnissa.
Se on nykyään Internetin käytetyin ohjelmointikieli, jolle useat sisällönhallintajärjestelmät kuten Wordpress, Joomla ja Drupal perustuvat.
Minkä vuoksi OVH poistaa jotkin PHP-versiot käytöstä?
Kuten kaikki ohjelmointikielet, myös PHP kehittyy jatkuvasti. Siihen lisätään uusia toimintoja ja korjataan bugeja. Vanhempia versioita ylläpidetään niille kullekin etukäteen määritellyn elinkaaren ajan, jonka jälkeen tuki päättyy.
Vanhat versiot, joita ei enää ylläpidetä, aiheuttavat tietoturvariskejä sekä OVH:lle että asiakkaille, minkä vuoksi ne on poistettava käytöstä.
Mitä etua on käyttäjälle uuteen PHP-versioon siirtymisestä?
Kun sivusto siirretään uudelle, ylläpidetylle, PHP-versiolle, se vähentää tietomurtojen mahdollisuutta merkittävästi ja tuo mukanaan uusia toimintoja.
OVH:lta saa myös ilmaiseksi PHP-FPM-optimoinnin suorituskyvyn parantamiseksi versiosta 5.3 eteenpäin. Lisätietoja [tästä ohjeesta](https://www.ovh-hosting.fi/webhotelli/php_fpm_optimointi.xml).
Mistä versioista on kyse ja milloin ne poistetaan käytöstä?

|Versio|Tuki virallisesti päättynyt|EOL (End of Life)|
|4.X|7.8.2008|6 vuotta ja 8 kk|
|5.2|6.1.2011|4 vuotta ja 3 kk|
|5.3|14.8.2014|8 kk|


Source : http://php.net/eol.php

Nämä versiot poistetaan käytöstä 24.9.2015. Seuraa tilannetta teknisestä tiedotteesta: [http://travaux.ovh.net/?do=details&id=12795](http://travaux.ovh.net/?do=details&id=12795)
Mitä webhotelleja tämä koskee?
Kaikki Linux-webhotellien sopimuksia paitsi 60Free ja Demo1G.
Sivustoni tai osa siitä käyttää vanhaa PHP-versiota, mitä teen?
Sivustot ja ajastetut tehtävät (CRON) siirtyvät PHP 5.6:een.
Suosittelemme testaamaan sivustojen ja ajastettujen tehtävien toimintakyvyn uusilla versioilla hyvissä ajoin. Lisätietoja testeistä alla.
Miksi OVH ei siirrä asiakkaiden skriptejä automaattisesti?
Voit muuttaa webhotellin PHP-versiota hallintapaneelin kautta. Katso ohje: []({legacy}1999)

OVH ei pysty mukautumaan jokaisen asiakkaan uniikkiin sivustoon, minkä vuoksi asiakkaan on tehtävä toimenpide itse.


## VAIHE 1: Sivuston yhteensopivuuden varmistaminen
A) Mikäli käytössä on sisällönhallintajärjestelmä kuten Wordpress, Joomla tai Dotclear PHPBB on ensimmäisenä päivitettävä verkkosivu seuraamalla virallista ohjetta:

- Wordpress: [https://codex.wordpress.org/Updating_WordPress](https://codex.wordpress.org/Updating_WordPress)
- Joomla: [https://docs.joomla.org/Portal:Upgrading_Versions](https://docs.joomla.org/Portal:Upgrading_Versions)
- Drupal: [https://www.drupal.org/node/1494290r](https://www.drupal.org/node/1494290)
- Prestashop: [url="http://doc.prestashop.com/display/PS15/Updating+PrestaShop"]http://doc.prestashop.com/display/PS15/Updating+PrestaShop[/url]
- ...

B) Jos sivusto perustuu kustomoituun ratkaisuun, seuraa virallista PHP-migraatio-ohjetta: [http://php.net/manual/en/appendices.php](http://php.net/manual/en/appendices.php)
Jos et ole sivuston kehittäjä, ota yhteys webmasteriin.


## VAIHE 2: Webhotellin PHP-version asetusten määritteleminen
Kaksi mahdollisuutta
PHP-version muuttaminen hallintapaneelissa

Katso ohje: []({legacy}1999)
Version muuttaminen käsin:
Mene sivustosi juureen FTP:llä. Tarvittaessa katso ohje: [ici](https://www.ovh-hosting.fi/g1380.filezilla)


- Jos käytössäsi ei ole .ovhconfig-tiedostoa, se on ensin luotava. Käytä jotain tekstieditoria ja syötä seuraavat neljä tekstiriviä tyhjään tiedostoon (versio 5.6 on esimerkki):


```
app.engine=php
app.engine.version=5.6
http.firewall=none
environment=production
```



Tallenna tiedosto nimellä ".ovhconfig" ja siirrä se webhotellin juureen.


- Jos webhotellissa on jo .ovhconfig-tiedosto, sitä voi muokata käyttäen jotain tekstieditoria ja tarkastamalla sen sisältö.


Lisätietoja tiedoston asetuksista, katso [ohje](https://www.ovh-hosting.fi/g1207.configurer-php-web).


## Käyttöesimerkkejä
Mistä tietää, mikä PHP-versio on käytössä?
Lataa oheinen tiedosto (oikeanpuoleinen hiiren näppäin ja "Tallenna sivu nimellä...":
[info.php](https://www.ovh.com/fr/documents/info.php)
Tiedoston voi luoda itse avaamalla uuden tekstitiedoston ja syöttämällä siihen:
<?php phpinfo(); ?>
Sitten tallenna tiedosto .php-muodossa ja antamalla sen nimeksi info.php

Julkaise tiedosto FTP-yhteydellä websivuston juurihakemistoon (tai sivustojen, mikäli on useita aliverkkotunnuksia käytössä). Esimerkiksi /www/mywordpress/
Sitten omalla webselaimella mene info-php:hen. Esimerkiksi www.my-site.com/mywordpress/info.php

![](images/img_2601.jpg){.thumbnail}
Lisäksi OVH on lähettänyt maalis-huhtikuussa 2015 sähköpostin, jossa listattiin asiakkaan käyttämät PHP-versiot.
Omistan aliverkkotunnuksia ja/tai moniverkkotunnuksia, voinko aktivoida eri PHP-versioita?
Kyllä voit. OVH sallii eri PHP-versioiden käytön eri aliverkkotunnuksille (moniverkkotunnuksia pidetään aliverkkotunnuksina).
Tämän tekemiseksi on luotava .ovhconfig-tiedosto kyseisen aliverkkotunnuksen juureen ja tiedosto ladataan seuraavasti:


- Tiedosto avataan kyselyn verkkotunnuksen juuresta. Esimerkiksi www.example.com osoittaa hakemistoon /www ja beta.example.com osoittaa hakemistoon /beta, tiedosto /www/.ovhconfig otetaan huomioon kyselyssä http://www.example.com/index.php, kun taas tiedosto /beta/.ovhconfig vastaa kyselystä kohteeseen http://beta.example.com/index.php.
- Jos vaiheessa 1 aliverkkotunnuksen omaa .ovhconfig-tiedostoa ei löydy, ladataan tiedosto /.ovhconfig
- Mikäli kumpaakaan ylläolevaa tiedostoa ei löydy, käytetään tilin oletusarvoa (FPM:n kanssa PHP 5.6)


Olen konfiguroinut .htaccess-tiedoston pakottaakseni tietyn PHP-version, mitä silloin tapahtuu?
Oletuksena sivustot siirtyvät PHP-versioon 5.6. Jos haluat käyttää uudempaa versiota (esimerkiksi 7.0), asetuksen voi muuttaa .ovhconfig-tiedostolla (FTP:ssä oleva tiedosto).
Jos .htaccess-tiedostossa on toisia määräyksiä (mm. URL rewriting tai uudelleenohjaus) ne pysyvät edelleen aktiivisina.
Voinko käyttää PHP:n 7 versiota?
PHP:n versio 7 on käytettävissä webhotelleissa.
Migraatiossa on ongelmia, mitä voin tehdä?
Asiakaspalvelumme ei voi tehdä migraatiota asiakkaiden puolesta. Voimme kuitenkin auttaa PHP-version päivityksessä (.ovhconfig-tiedoston kautta). Asiakaspalvelumme ei ole vastuussa mahdollisista toimintahäiriöistä.

