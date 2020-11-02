---
deprecated: true
title: 'Webhotelli: salasanojen hallinta ja löytäminen'
excerpt: 'Webhotelli: salasanojen hallinta?'
id: '1909'
slug: webhotelli_salasanojen_hallinta_ja_loytaminen
legacy_guide_number: g1909
---


## Kirjautuminen OVH:n hallintapaneeliin
Tässä tarkoitetaan salasanaa, joka liittyy OVH tunnukseesi*. Tunnuksesi on muotoa "ab12345-ovh". Se luodaan automaattisesti rekisteröitymisesi yhteydessä sivulla [OVH](http://www.ovh-hosting.fi).



*OVH:n tunnusta kutsutaan myös nimellä nic-handle tai nic.
Määrität itse tähän tunnukseen liittyvän salasanan. Turvallisuussyistä sitä ei lähetetä sinulle sähköpostitse. Hallintapaneelista voit hallita kaikkia palveluitasi (luominen, poistaminen, muokkaus).
Jos olet unohtanut salasanasi [hallintapaneeliin](http://www.ovh.com/manager/web)kirjautumista varten, voit muokata sitä hallintapaneelin kirjautumissivulla.

![](images/img_2847.jpg){.thumbnail}
Sinua pyydetään syöttämään seuraavaksi asiakastunnuksesi (esim:"ab12345-ovh")ja klikkaamaan "lähetä".

![](images/img_2848.jpg){.thumbnail}
Rekisteröitymisessä käyttämääsi sähköpostiosoitteeseen lähetetään nyt viesti. On tärkeää, että sähköpostiosoite on voimassa. Mikäli näin ei ole, täytyy tehdä toimenpide [sähköpostiosoitteen muokkaamiseksi](https://www.ovh.com/fr/cgi-bin/fr/procedure/procedureChangeEmail.cgi) ennen kuin salasanaa voi muokata.
Mikäli sinulla ei ole asikastunnustasi, eikä sähköpostiosoitteesi ole voimassa, on otettava yhteyttä tukeen. Tällöin kysymme kolme tunnistuskysymystä. Jos pystyt vastaamaan näihin, lähettämme sinulle tunnukset.


## FTP-yhteys
Jotta voit käyttää FTP-protokollaa(File Tansfert Protocol), täytyy sinulla olla webhotellituote.
Webhotellin asennuksen yhteydessä sinulle on lähetetty sähköpostiviesti, joka sisältää FTP-tunnuksesi (login) ja salasanan.

Voit etsiä tämän viestin milloin tahansa hallintapaneelin osasta "Avustus" ja siellä kohdasta "sähköpostihistoria".

![](images/img_2849.jpg){.thumbnail}
Kaikki OVH:n välittämät sähköpostiviestit tallennetaan tälle tasolle ilman aikarajoituksia.
Mikäli olet personoinut salasansi, vain sinä tiedät sen. Tällöin et voi löytää sitä hallintapaneelista, sillä tällaisia tietoja ei säilytetä siellä. Salasanaa täytyy silloin muokata hallintapaneelissa. Menettely on kuvailtu tässä [oppaassa](https://www.ovh-hosting.fi/g1374.sivusto-internetiin#tiedostojen_siirto_ftplla_ftp-kirjautumistietojen_hakeminen).


## SQL-salasana (tietokanta)
Ilmainen webhotellituote Start10M ei sisällä tietokantaa.
Tietokantaa ei luoda automaattisesti webhotellin tilauksen yhteydessä. Sinun täytyy luoda se itse, kun tuote on ensin asennettu.
Tietokannan luominen selitetään tässä [ohjeessa](https://www.ovh-hosting.fi/g1374.sivusto-internetiin#tietokanta_luominen).
Salasana personoidaan heti luomisen jälkeen, eikä se ole luomisen yhteydessä lähetettävässä vahvistussähköpostissa.

Jos unohdat tietokantasi salasanan:


- sivusi on verkossa ja käyttää tietokantaa: tässä tapauksessa tietokannan salasana mainitaan FTP-tilassa olevassa tiedostossa (esim.WordPressissä tiedoston nimi on: wp-config.php).

- sinulla ei ole yhtään tietokantaa käyttävää sivua, tai haluat vain muuttaa tietokannan salasanaa: tässä tapauksessa salasanaa on muutettava hallintapaneelissa. Ohjeet tietokannan salasanan muuttamiseen löytyvät tästä[](https://www.ovh-hosting.fi/g1374.sivusto-internetiin#tietokanta_sql-tunnukset)


Huomio: tietokannan salasanan muuttaminen ei ole mitätön toimenpide. Muutos voi aiheuttaa katkoksen sivulla tai tietokantaa käyttävissä palveluissa.


Konfiguraatiotiedosto on hyvä pitää ajan tasalla, jotta se kirjautuu uudella salasanalla tietokantaan, jos jokin webhotellin sivu on aktiivinen muutoshetkellä.


## Kirjautuminen Webmailiin
Kun luot sähköpostiosoitteen, personoit heti salasanan. Kirjautuminen [webmailiin](https://ssl0.ovh.net) vaatii täydellisen sähköpostiosoitteen sekä salasanan.
Mikäli olet unohtanut sähköpostiosoitteesi salasanan, voit muokata sitä suoraan hallintapaneelissa.
Ohjeet muokkaamiseen löytyvät tästä: [](https://www.ovh-hosting.fi/g1343.sivusto-internetiin#ohje_miten_vaihtaa_sahkopostilaatikon_salasana).
Sähköpostilaatikon salasananvaihtaminen vaatii myös sähköpostiohjelman päivityksen.


## SSH-yhteys
Jotta voit kirjautua SSH-yhteydellä Secure Shell) tarvitset PROtasoisen tai paremman webhotellin. Yhdistäminen tapahtuu samoilla tunnuksilla, joita käytetään FTP-kirjautumiseen.

Tuotteet jotka mahdollistavat SSH-yhteyden löydät tästä[](https://www.ovh-hosting.fi/webhotelli/)


## Helppokäyttömoduulit
Helppokäyttömoduulin asennuksessa personoit itse administraattorin salasanan. Sitä ei lähetetä sinulle sähköpostitse.
Mikäli unohdat salasanan, voit luoda uuden moduulin kirjautumissivulta. Siellä on linkki salasanojen unohtamistapauksia varten. 

Esimerkki WordPress-moduulissa:

![](images/img_2851.jpg){.thumbnail}
Jos moduuli on asennettu uudessa hallintapaneelissa, on salasanaa mahdollista muokata myös siellä.

Kun olet kirjautunut hallintapaneeliin, valitse kyseinen webhotelli osassa Webhotellit.

![](images/img_2855.jpg){.thumbnail}
Valitse sitten osa Helppokäyttömoduulit ja klikkaa sitten oikealla olevaa hammasratasta ja 
muokkaa salasanaa

![](images/img_2854.jpg){.thumbnail}

