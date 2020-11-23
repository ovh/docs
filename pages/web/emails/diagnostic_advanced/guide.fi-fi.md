---
deprecated: true
title: 'OVH:n sähköpostiohjelmien edistynyt käyttö'
excerpt: 'OVH:n sähköpostiohjelmien edistynyt käyttö'
slug: ovhn_sahkopostiohjelmien_edistynyt_kaytto
legacy_guide_number: g2117
---

## Mitä kannattaa tarkistaa sähköpostin ongelmatapauksessa?

Mikäli sähköpostin lähettämisessä tai vastaanottamisessa on ongelmia, kannattaa seuraavat kohdat tarkistaa:


- Onko sähköpostituotteeni aktiivinen? Jotta sähköpostit toimivat, on sinulla oltava aktiivinen sähköpostituote. Mikäli sinulla on webhotelliin liitetty sähköposti, tarkista ettei webhotelli ole vanhentunut. Voit nähdä tiedot helposti hallintapaneelissa. Myös verkkotunnuksesi on oltava voimassa.

- Toimivatko sähköpostit webmailin kautta? Jotta varmistut, ettei kyse ole konfiguraatiovirheestä, testaa viestin lähetys ja vastaanotto OVH:n webmaililla. Jos kaikki toimii moitteettomasti, tarkista ohjelmiston konfiguraatio saamiesi ohjeiden avulla.


- Ongelmia webmailiin kirjautumisessa?Tarkista, että salasanasi on oikein, tarvittaessa sitä voi myös muokata. Katso tämän ohjeen aiemmat kysymykset aiheeseen liittyen.

- Suoritetaanko palvelussani huoltotoimenpidettä?Voit tarkistaa käynnissä olevat huoltotoimenpiteet [tältä sivulta](http://status.ovh-hosting.fi/).

- Osoittaako verkkotunnukseni oikealle palvelimelle? Tarkista, että verkkotunnuksesi käytää OVH:n sähköpostituoteen sähköpostipalvelimia (MX-tyypin rekisteröinti) oikein. Voit lukea lisää [tästä ohjeesta](https://www.ovh-hosting.fi/g2003.MxPlan-tuote-sahkopostiratkaisu).

## SMTP-palvelimen vastauskoodit

### SMTP-komennot

SMTP-komentoja käytetään sähköpostin siirtämiseen. Kommunikointi SMTP-palvelimen kanssa edellyttää keskustelua, joka tapahtuu lähettämällä sille "Komentoja".
Kun palvelin on saanut komennon, se lähettää SMTP-vastauksen takaisin.

### SMTP-vastaukset

SMTP-komentojen vastaukset varmistavat pyyntöjen synkronoinin ja toiminnan viestin välitysprosessissa. Tämä takaa, että SMTP-asiakasohjelma tietää aina SMTP-palvelimen tilan. Jokaisesta komennosta täytyy tulla vastaus. 

SMTP-vastaus koostuu kolminumeroisesta[/lue] luvusta ja sitä seuraavasta tekstistä. Numero on tarkoitettu palvelimille seuraavan vaiheen määrittelyyn. Teksti on hyödyllinen ainoastaan ihmiskäyttäjälle.

Vastauksen kolmella numerolla on kullakin oma erityismerkityksensä:

 - ensimmäinen numero ilmoittaa, onko vastaus hyvä, huono vai epätäydellinen. SMTP-asiakasohjelma pystyy määrittämään ensimmäisen toiminnon tarkastelemalla juuri ensimmäistä lukua.

- toinen ja kolmas luku sisältävät lisätietoja.

### SMTP-vastausten pika-analyysi

Vastauskoodin ensimmäiselle numerolle on olemassa neljä mahdollista arvoa:

- 2xx  Postiviinen vastaus:

Pyydetty toiminto onnistui. Uusi pyyntö voidaan antaa.

- 3xx  Väliaikainen positiivinen vastaus: 

Komento hyväksyttiin, mutta pyydetty toiminto odottaa täydentäviä tietoja. 
SMTP-asiakasohjelman täytyy lähettää uusi komento, jossa tiedot kerrotaan.

- 4xx  Negatiivinen vastaus tilapäisestä epäonnistumisesta:

Komentoa ei hyväksytty, eikä pyydettyä toimintoa voitu suorittaa. Virheen syy on kuitenkin tilapäinen, ja toimintoa voidaan pyytää uudestaan.

- 5xx  Negatiivinen vastaus:

Komentoa ei hyväksytty, eikä pyydettyä toimintoa voitu suorittaa. SMTP-asiakasohjelman ei pitäisi toistaa samaa komentoa.


### Selitys

Alla on lista yleisimmistä palvelinten käyttämistä SMTP-vastauskoodeista:

|Vastauskoodi|Yksityiskohdat|Toiminnot|
|211|Viesti järjestelmän tilasta tai vastaus avunpyyntöön Viestiä seuraa lisätietoja|
|214|Avunpyyntöviesti  Sisältää tietoja palvelimestasi ja uudelleenohjaa tavallisesti UKK sivulle|
|220| Palvelin on valmis|Kyse on viestistä, jossa ilmoitetaan palvelimen olevan valmis|
|221|Välityskanava on suljettu|Tämä tarkoittaa, että palvelin sulkee yhteyden onnistuneen kommunikoinnin johdosta|
|250|Viestin välitys on päättynyt|Sähköpostiviestisi on välitetty eteenpäin|
|251| Loppukäyttäjä ei ole palvelimella, mutta viesti tullaan välittämään Tämä tarkoittaa, että viesti lähetetään toiselle palvelimelle (uudelleenohjaus, muu MX-palvelin..)|
|252|Palvelin ei voi todentaa loppukäyttäjää, mutta yritää lähettäää viestin|

Loppukäyttäjää ei voida tarkistaa tällä hetkellä, mutta viesti lähetetään todennäkoisesti myöhemmin|
|354| Palvein on vastaanottanut lähetysosoitteet ja vastaanotto-osoitteet
|420|Toimitusaika ylittyi, yhteysongelma|Tämä virheilmoitus palautuu ainoastaan GroupWise-postipalvelimilta. Ota yhteyttä vastaanottavan postipalvelun administraattoriin|
|421|Palvelu ei saatavilla, viestikanava sulkeutumassa|Johtuu määrittelemättömästä virheestä, varmista että lähetys toiseen verkkotunnukseen toimii. Jos näin on yritä lähetystä myöhemmin uudelleen|
|432|Postin vastaanotto Exchange-palvelimella katkaistu|Tämä virheilmoitus tulee ainoastaan Microsoft Exchange -palvelimilta. Ota yhteyttä vastaanottavan postipalvelun adminstraattoriin|
|449|Reititysvirhe|Tämä virheilmoitus tulee ainoastaan Microsoft Exchange -palvelimilta. Microsoft suosittelee suorittamaan diagnostiikan [WinRoute-työkalulla](https://support.microsoft.com/fr-fr/kb/281382)|
|450|Pyydettyä toimintoa ei suoritettu: sähköpostilaatikko ei ole saatavilla (esim. postilaatikko on varattu tai tilapäisesti estetty turvallisuussyistä tai kielletyn listan vuoksi)|Tarkista, että postipalvelimesi IP.osoite ei ole kielletyllä listalla ([SpamHaus](https://www.spamhaus.org/lookup/)), ja että viestisi ei sisällä sanoja, jotka viittaavat roskapostiin (SPAM).|
|451|Vaaditty toiminto hylättiin: Paikallinen käsittelyvirhe|Tämä voi jothua hetkellisestä ylikuormituksesta tai virheellisestä verkkotunnuksen SPF-varmennuksesta. Katso palvelimen lähettämää täydentävää viestä tai ongelman jatkuessa ota yhteyttä  palvelimen administraattoriin.|
|452|Pyydettyä toimintoa ei suoritettu: riittämäton tallennustila|Postipalvelimesi on "ylikuormittunut". Tämä voi johtua myös liian suuresta määrästä viestejä, joita yritetään lähettää kerralla. Tarkista lähtevä postilaatikkosia ja yritä uudelleen|
|455|Palvelin ei pysty vastaanottamaan asetuksia|Odota hetken ajan ja kokeile uudestaan. Jos epäonnistut uudestaan, ota yhteyttä vastaanottajan postipalvelimen administraattoriin|
|500|Syntaksivirhe, komentoa ei tunnistettu (Tämä voi sisältää virheitä kuten liian pitkän komentorivin)|Tämän virheen aiheuttaa usein virustorjunta tai lähettäjän palomuuri. Tarkista nämä ja yritä uudelleen|
|501|Syntaksivirhe asetuksissa tai argumenteissa|Tässä on usein kyse vastaanottjan virheellisestä sähköpostiosoitteesta  tai virustorjunnan tai palomuurin ongelmasta lähettäjällä. Tarkista vastaanottajan sähköpostiosoite sekä virustorjunta ja palomuuri|
|502|Komentoa ei toteutettu|Sähköpostin lähetyksessä SMTP-palvelimella käytetyt asetukset tai valinnat on huomioitu, mutta deaktivoitu konfiguroinnissa. Ota yheyttä palveluntarjoajaasi|
|503|Palvelin kohtasi huonon komentoketjun|Tämä johtuu yleensä tunnistautumisongelmasta. Varmista, että olet tunnistaunut oikein SMTP-palvelimelle sähköpostiohjelmistosi konfiguraatiossa|
|504|Komentoasetusta ei toteutettu|Sähköpostin lähetyksessä SMTP-palvelimella käytetyt asetukset tai valinnat on huomioitu, mutta deaktivoitu konfiguroinnissa. Ota yheyttä palveluntarjoajaasi|
|550|Pyydettyä toimintoa ei toteutettu: sähköpostilaatikko ei saatavilla|Vastaanottajan sähköpostipalvelin ei voinut varmistaa käytettyä sähköpostiosoitetta. Tämä johtuu usein vihreellisestä vastaanottajan sähköpostiosoitteesta, mutta voi myös merkitä ongelmia vastaanottajan sähköpostipalvelimen palomuurissa tai yhteydessä. Tarkista vastaanottajan sähköpostiosoite ja/tai yritä uudelleen|
|551|Ei paikallinen käyttäjä|Tätä käytetään yleensä suojautumisstrategiana roskapostia vastaan. Ilmoitetaan, että postirele ei ole jostain syystä autorisoitu välittämään viestiäsi toiselle palvelimelle. Ota yhteyttä palveuntarjoajaasi|
|552|Pyydetty toiminto keskeytyi: tallennustila täynnä|Käyttäjällä, jota yritit tavoittaa, ei ole enää yhtään tilaa sähköpostiviestin vastaanottamiseen. Valitettavasti ainoa ratkaisu on ottaa yhteyttää vastaanottajaan jollakin toisella tavalla|
|553|Pyydettyä toimintoa ei suoritettu: sähköpostiosoitetta ei hyväksytty|Tämä johtuu yleensä virheellisestä sähköpostiosoitteesta. Tarkista, että sähköpostiosoite on oikein|
|554|Viestin toimitus epäonnistui, "Ei yhtään SMTP-palvelua")|Tässä on kyse usein kielletystä listasta. Tarkista, että postipalvelimesi IP-osoite ei ole joutunut kielletylle listalle ([SpamHaus](https://www.spamhaus.org/lookup/))|
|555|MAIL FROM / RCPT TO, asetuksia ei tunnistettu tai ei otettu käyttöön| Lähtevä SMTP-palvelin ei rekisteröi oikein käytettyä sähköpostiosoitetta tai asetuksia "Keneltä" ja "Kenelle". Tarkista, että ilmoitetut sähköpostiosoitteet ovat oikein ja varmista lisäksi, ettet ole ylittänyt OVH:n pysyvää rajaa: 200viestiä/tunti/tili ja 300viestiä/tunti/ip|