---
deprecated: true
title: 'Webhotellit: FileZilla käyttöohje'
excerpt: 'Ohjeessa neuvotaan, miten käytetään FileZilla FTP-ohjelmaa.'
id: '1380'
slug: webhotellit_filezilla_kayttoohje
legacy_guide_number: g1380
---


## Esittely
FileZilla on käytettävissä useissa käyttöjärjestelmissä kuten Windows, MacOS jne.

Sen avulla voidaan julkaista verkkosivusto yhdistämällä FTP-tilaan.

Lataa asiakasohjelmisto sivustolta: [filezilla.fr](http://filezilla.fr/)

![](images/img_2400.jpg){.thumbnail}


## Käyttöliittymä

## Mitä FileZillassa näkyy
Alueessa 1 näkyy tiedot yhteyden tilasta, siirroista, yhteysvirheistä jne.
Yleensä nämä tiedot eivät ole tarpeellisia aloittelijoille.

Alueessa 2 näkyy tiedostopolku verkkosivun kansioon (tai siirrettäviin tiedostoihin) omalla tietokoneella.

Alueessa 3 näkyy tiedostopolku palvelimella sijaitsevaan kansioon, jossa olet kyseisellä hetkellä.

Alueessa 4 listataan tietokoneella avattu hakemisto, jossa näkyy tiedostojen nimi, koko, tyyppi ja muokkauspäivä.

Alueessa 5 listataan palvelimella avattu hakemisto, jossa näkyy tiedostojen nimi, koko, tyyppi, muokkauspäivä, oikeudet ja omistajat.

Alueessa 6 listataan siirrettävien tiedostojen jonotuslista (tai joita parhaillaan siirretään) palvelimelle tai tietokoneelle.

Käyttöliittymän yläosassa (vihreän kehyksen alla) näkyy hostin nimi (palvelin, johon yhteys on otettu) ja FTP-käyttäjänimi, salasana ja käytetty portti.

![](images/img_1818.jpg){.thumbnail}

## Pääosio
Pääosiossa sijaitsee peruskuvakkeet ohjelmiston käyttämistä varten. Kaikkia ei tarvita tiedostonsiirtoon. Alla lyhyt kuvaus kuvakkeiden toiminnasta.
 Avaa sivustojen hallinta
 Näytä tai piilota tiedostojärjestelmän kirjaaminen (1)
 Näytä tai piilota paikallisten tiedostojen tiedostopolku (2)
 Näytä tai piilota etäkansioiden tiedostopolku (3)
 Näytä tai piilota jono (6)
 Päivitä tiedosto- ja kansiolista
 Käynnistä tai keskeytä jonon käsittely
 Peruuta käynnissä oleva operaatio
 Kirjaudu ulos tällä hetkellä näkyvästä palvelimesta
 Yhdistä uudelleen viimeiseen käytettyyn palvelimeen
 Näytä dialogi-ikkuna
 Aktivoi tai poista käytöstä tiedostovertailu
 Aktivoi tai poista käytöstä synkronoitu navigointi
 Tiedostojen rekursiivinen haku


## FTP-yhteys
Ylhäällä vihreässä kehyksessä kysytään yhteyden luomiseksi etäpalvelimelle:

- Hosti: ftp.oma-verkkotunnus.tld tai ftp.cluster0XX.ovh.net tai newftp.cluster0XX.ovh.net
- Käyttäjätunnus: FTP-käyttäjätunnus
- Salasana: FTP-käyttäjätunnukseen liittyvä salasana
- Portti: voidaan jättää tyhjäksi (tai syötä 21)


Kun kaikki on syötetty oikein, klikkaa Nopea yhteys yhteyden avaamiseksi palvelimelle.

![](images/img_1819.jpg){.thumbnail}


## SFTP-yhteys
SFTP-yhteys (SSH File Transfer Protocol) on FTP-yhteys porttiin 22 ja joka on suojattu yhteys. 
Huomio, suojattu yhteys on mahdollinen ainoastaan [Pro](https://www.ovh-hosting.fi/jaettu-hosting/)-tuotteesta alkaen. Sen ansiosta on esimerkiksi mahdollista muuttaa tiedosto-oikeuksia, mikä ei ole mahdollista FTP-yhteydellä porttiin 21.

Ylhäällä vihreässä kehyksessä kysytään yhteyden luomiseksi etäpalvelimelle:

- Palvelin: ftp.oma-verkkotunnus.tld tai ftp.cluster0XX.ovh.net tai newftp.cluster0XX.ovh.net
- Käyttäjätunnus: FTP-käyttäjätunnus
- Salasana: FTP-käyttäjätunnukseen liittyvä salasana
- Portti: 22


Kun klikataan Nopea yhteys, avautuu dialogi-ikkuna (katso oheista kuvaa), jossa varmistetaan mihin hostiin yhteys avataan. Kun yhdistetään OVH:n hostikoneeseen, voidaan rastittaa ruutu: "Luota aina tähän hostiin, lisää avain välimuistiin", jotta kysymystä ei esitetä myöhemmin uudelleen.

![](images/img_1834.jpg){.thumbnail}


## Yhteysvirheet
Ilmoitettu viesti merkitsee virhettä kirjautumisessa FTP-yhteydellä webhotelliin.

Tämän tyyppinen viesti aiheutuu kun käyttäjätunnus/salasana-parissa on virhe.

Varmista, että käyttäjätunnus ja salasana on oikein syötetty. Muussa tapauksessa webhotellin FTP-yhteyden salasanan voi muuttaa hallintapaneelin kautta.

Lue ohje webhotellin FTP-salasanan muuttamiseksi:[]({legacy}1374)

![](images/img_1820.jpg){.thumbnail}
Tässä tapauksessa virhe aiheutuu väärästä palvelinnimestä.

![](images/img_1824.jpg){.thumbnail}


## Tiedostonsiirto
Tiedostojen siirtämiseksi FTP-yhteydellä, valitse siirrettävät tiedostot ja raahaa/pudota ne vasemman puoleisesta ikkunasta (paikalliset tiedostot) oikean puoleiseen ikkunaan (webhotelli).


- Muista valita kohdekansio oikean puoleisessa ikkunassa.


Tämän jälkeen tiedostot siirtyvät automaattisesti jonoon, josta ne siirretään palvelimelle.

![](images/img_1821.jpg){.thumbnail}


## Jononäkymä
Jonottavia tiedostoja voi katsella.

Tässä näkyy:


- jonossa olevat tiedostot, jotka odottavat etäpalvelimelle siirtoa.

- tiedostot, joiden siirto on epäonnistunut.

- tiedostot, joiden siirto etäwebhotelliin on onnistunut.



![](images/img_1822.jpg){.thumbnail}


## Palvelimen valikko
Jos klikkaat hiiren oikeanpuoleisella painikkeella yhtä tiedoistoista (ks. alue 5)

Valikko avautuu, jossa useita vaihtoehtoja:

Lataa: Lataa tiedosto avoimeen paikalliseen tiedostoon.

Lisää tiedostoja jonoon: Lisää tiedoston jonoon, esimerkiksi voi eriaikaistaa tietojen latauksen.

Näytä/Muokkaa: Webhotellissa olevan tiedoston näyttäminen tai muokkaaminen, mitä varten kuitenkin on oltava ohjelmisto, joka pystyy lukemaan tietokoneen tiedostoja.

Luo tiedosto: Uuden kansion luonti suoraan etäwebhotelliin.

Päivitä: Päivittää näytetyt tiedot, jotta eri tiedostot näkyvät oikein.

Poista: Valitun tiedoston poisto.

Uudelleennimeä: Valitun tiedoston uudelleennimeäminen.

Kopioi osoite/osoitteet leikepöydälle: Kopioi automaattisesti valitun tiedoston suoran linkin.
Esimerkki generoitavasta URL-osoitteesta: ftp://loginftp@ftp.cluster0XX.ovh.net/www/kansio1/tiedosto.jpg

Tiedosto-oikeudet: Mahdollistaa tiedostojen oikeuksien muokkaamisen (CHMOD)

![](images/img_1830.jpg){.thumbnail}


## Tiedosto- ja hakemisto-oikeudet
Tähän käyttöliittymään pääsemiseksi, klikkaa hiiren oikeanpuoleisella painikkeella yhden palvelimella sijaitsevan tiedoston päällä ja valitse ”Tiedosto-oikeudet”.

Käyttöliittymässä voi muuttaa webhotellin tiedostojen ja hakemistojen oikeuksia (CHMOD).

Määritä haluamasi oikeudet ja CHMOD-arvo päivittyy automaattisesti.

On mahdollista rastittaa ruutu "Rekursio alikansioihin".

Se aiheuttaa tiedosto-oikeuksien muutoksen sekä kyseiseen tiedostoon että sillä sijaitseviin kansioihin ja tiedostoihin.

![](images/img_1831.jpg){.thumbnail}


## Sivuston uudelleenavaaminen
Avaa FileZilla, klikkaa "Palvelin" ja valitse "Syötä personoitu komento".

FileZillassa "Syötä personoitu komento" sijasta voi lukea "Syötä FTP-komento".

Syötä komento:


```
SITE CHMOD 705 /
```


Mikäli saat seuraavan virheen:

550 would not chance perms on /. not such file or directory

Käytä seuraavaa komentoa:


```
SITE CHMOD 705 .
```


Varmistaaksesi sivuston uudelleenavautuminen, testaa sille pääsyä Internet-selaimella.

Komentoa ei voi käyttää SFTP-yhteydellä.

![](images/img_1829.jpg){.thumbnail}
Huomio: testaa näyttöä enintään kolmen tunnin kuluttua. Robottimme tarkistavat tilan muutokset kolmen tunnin välein. Riippuen ajankohdasta, jolloin yllä mainittu toimenpide on tehty, sivusto voi tulla näkyviin hitaammin tai nopeammin. 

Jos kolme tuntia on kulunut eikä sivusto edelleenkään näy Internetissä, ota yhteys asiakaspalveluumme.


## Pankkitiedostojen siirto
Binäärityyppisiä tiedostoja, kuten CGI-tyyppisiä tiedostoja, varten voi olla kiinnostavaa valita, miten siirto tehdään.

Valitse "Siirto" päävalikosta ja sitten "Siirtotyyppi".

![](images/img_1832.jpg){.thumbnail}


## Hakemistovertailu
Tämä optio näyttää eri värejä alueessa 3 ja 4, jotta voi vertailla paikallisten ja palvelimen tiedostojen ja kansioiden eroja. 
Klikkaamalla kuvaketta  on mahdollista vaihtaa vertailutapaa. Option voi aktivoida tai ottaa pois päältä sekä:

- Verrata tiedostojen kokoa
- Verrata aikaleimaa
- Piilottaa identtiset tiedostot


Värit:

- Keltainen: tiedosto löytyy ainoastaan toiselta puolelta
- Vihreä: tiedosto on tuoreempi kuin toisella puolella oleva merkitsemätön tiedosto
- Punainen: tiedostot eivät ole saman kokoisia



![](images/img_1823.jpg){.thumbnail}


## Asetukset

## Yhdistäminen
Palvelimelle yhdistämiseksi tehtyjä asetuksia voi muuttaa.

Kannattaa huomioida, että eräät palvelimet voivat pitää tätä väärinkäyttönä ja kieltää IP-osoitteen.

Asetuksia voi muuttaa menemällä "Muokkaa" sitten "Asetukset" ja "Yhteys".

![](images/img_1825.jpg){.thumbnail}

## Siirrot
Olemassa olevalle tiedostolle tehtäviä oletustoimintoja voi muuttaa asetuksissa.

Asetuksia voi muuttaa menemällä "Muokkaa" sitten "Asetukset" ja "Siirrot".

![](images/img_1826.jpg){.thumbnail}


## Yhteyspalvelin
Joissain tapauksissa asiakaspalvelumme saattaa joutua tiedustelemaan, mille palvelimelle FileZilla yhdistää. 

Tämä saatetaan joutua tarkistamaan, mikä FTP-yhteydessä havaitaan hitautta tai epätavallista toimintaa. Palvelimen löytää:

- Mene käyttäjätunnuksen yläpuolella sijaitsevaan kehykseen
- Mene aivan lokitietojen alkuun
- Ota ylös webmXXX



![](images/img_2399.jpg){.thumbnail}

