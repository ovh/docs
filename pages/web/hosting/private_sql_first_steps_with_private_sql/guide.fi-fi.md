---
deprecated: true
title: Private SQL -palvelun käytön aloitus
slug: private-sql-kayton-aloitus
excerpt: Katso kuinka Private SQL -palvelun käyttö aloitetaan
section: Private SQL
---

**Päivitetty 27.11.2017**

## Tavoite

Private SQL -palvelun avulla voidaan käyttää OVH:n webhotellin parina toimivaa SQL-instanssia ja saada taattuja sekä dedikoituja resursseja käyttöön. Tämä tarjoaa parempaa suorituskykyä ja joustavuutta saatavilla oleviin tietokantajärjestelmiin sekä niihin, joita on mahdollista luoda. Tämä palvelu on tarkoitettu pääasiassa asiakkaille, joilla on erityistarpeita.

**Katso kuinka Private SQL -palvelun käyttö aloitetaan.**

## Edellytykset

- Sinulla on Private SQL -instanssi (sisältyy [webhotellituotteeseen](https://www.ovh-hosting.fi/webhotelli/){.external} tai sen voi tilata [lisäpalveluna](https://www.ovh-hosting.fi/sql-optiot.xml){.external}).
- Sinulla on [webhotelli](https://www.ovh-hosting.fi/webhotelli){.external}, jonka ylläpito tapahtuu samassa konesalissa kuin Private SQL -instanssisi (tämä tieto on näkyvissä hallintapaneelissa).
- Olet kirjautunut [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager){.external}


## Käytännössä

### Katso instanssin yleiset tiedot

Mene [hallintapaneelin](https://www.ovh.com/auth/?action=gotomanager){.external} vasemmassa laidassa olevassa valikossa kohtaan `Tietokannat`{.action} ja sitten kyseessä olevaan SQL-instanssiin. Varmista, että olet kohdassa `Yleiset tiedot`{.action}.

> [!primary]
>
> Private SQL -palvelun nimi voi näkyä kahdella tavalla hallintapaneelissa:
>
> - se joko sisältää osan asiakastunnuksestasi ja päättyy kolmeen numeroon (001 ensimmäisenä asennetulla Private SQL -palvelulla, 002 toisella jne.)
> - tai se alkaa muodossa *sqlprive-* ja sisältää sitten osan asiakastunnuksestasi päättyen kolmeen numeroon (001 ensimmäisenä asennetulla Private SQL -palvelulla, 002 toisella jne.)
>

Voit tarkastella sieltä SQL-instanssiasi koskevia tärkeitä tietoja. Kehotamme varmistamaan huolellisesti, että tiedot ovat oikein ja vastaavat alla olevia esimerkkejä.

|Tieto|Yksityiskohdat|
|---|---|
|Palvelun tila|Näkyy erityisesti silloin, jos instanssi on käynnistetty, sitä ollaan käynnistämässä uudelleen tai jäädyttämässä. Instanssin on oltava käynnistettynä, jotta sillä voidaan tehdä toimintoja.|
|Tyyppi|Näyttää palvelimen käyttämän tietokantajärjestelmän. Jos et tiedä, onko käytössä oleva järjestelmä oikea, niin tiedäthän, että kaikkien yleisin on “MySQL”, mutta muitakin tyyppejä on olemassa (PostgreSQL, MariaDB). Esimerkiksi jos sivusi on WordPress-sivusto, MySQL-järjestelmä on silloin täydellisen sopiva.|
|Versio|Näyttää palvelimen käyttämän tietokantajärjestelmän version. Seuraa verkkosivusi yhteensopivuutta valitun version kanssa.|
|RAM|Näyttää instanssia varten saatavilla olevan keskusmuistin sekä mahdolliset muistin ylitykset. Private SQL -instanssisi sisältää dedikoituja ja taattuja resursseja: sen RAM-muistin. Mikäli on tarpeen, voit kehittää sitä ja saada ilmoituksia, mikäli kulutat kaikki instanssisi muistiresurssit.|
|Infrastruktuuri|Näyttää instanssisi käyttämän infrastruktuurin. Kyseessä on OVH:n infrastruktuurille ominainen tieto.|
|Konesali|Näyttää konesalin, jossa instanssi on luotu. Varmista, että instanssin konesali on sama kuin sivuasi ylläpitävän webhotellin nykyinen tai tuleva konesali.|
|Host|Näyttää OVH:n palvelimen, johon instanssi on luotu.  Kyseessä on OVH:n infrastruktuurille ominainen tieto, jota voidaan käyttää [häiriötilanteisiin](http://status.ovh.net/){.external} liittyvässä viestinnässä.|

![Yleiset tiedot](images/privatesql01-General-information.png){.thumbnail}


### Tietokannan luominen

Tähän varastoidaan kaikki verkkosivusi tiedot (esimerkiksi blogissa kommentit).

Luo ensimmäinen tietokanta klikkaamalla kuvaketta `Tietokannat`{.action} ja sitten painiketta `Lisää tietokanta`{.action}.

![Tietokannan lisäys](images/privatesql02-Adding-a-database.png){.thumbnail}

Avautuvassa ikkunassa voit luoda käyttäjän. Se on välttämätön, sillä käyttäjä voi kirjautua instanssiisi sekä tehdä tietokantakyselyjä saamillaan oikeuksilla (kuten luku, tietojen lisäys tai poisto).

On siis mahdollista luoda käyttäjä yhdessä tietokannan kanssa rastittamalla laatikko `Luo käyttäjä`{.action} tai suorittamalla toiminto erikseen ja jättämällä kohta rastittamatta. Rastita laatikko yksinkertaista ja nopeaa ratkaisua varten.

Halutessasi voit nyt täyttää pyydetyt tiedot seuraamalla tietokuplien ohjeita. Klikkaa sitten `Vahvista`{.action}.

- **Tietokannan nimi** (pakollinen): tämä on tulevan tietokantasi nimi.
- **Käyttäjänimi** (valinnainen, jos ruutua ei ole rasitettu): käyttäjä, joka voi kirjautua tietokantaasi ja tehdä siellä kyselyjä.
- **Oikeudet** (valinnainen, jos ruutua ei ole rastitettu): käyttäjälle myönnetyt tietokantaa koskevat oikeudet. Perinteisessä käytössä valitse `Administraattori`{.action}. Oikeuksia voidaan muokata myöhemmin.
- **Salasana** **Vahvista salasana** (valinnainen, jos ruutua ei ole rastitettu): valitse salasana ja vahvista se.

> [!warning]
>
> Turvallisuussyistä kehotamme noudattamaan tietojen rekisteröinnin yhteydessä ilmoitettuja ehtoja.
>


![Tietokannan lisäys](images/privatesql03-Adding-a-database-part2.png){.thumbnail}


### Käyttäjän luominen (valinnainen)

Tämä vaihe voi olla valinnainen, jos olet luonut käyttäjän tietokannan luonnin yhteydessä äskeisessä kohdassa. Perinteisessä käytössä yksi käyttäjä riittää varsin hyvin. Erityislaatuisessa projektissa voidaan kuitenkin tarvita useampia käyttäjiä, joilla on oikeudet päästä tietokantaan. Esimerkiksi yhdellä tietokannan käyttäjällä voi olla luku- ja kirjoitusoikeudet kun taas toisella on ainoastaan oikeudet lukemiseen.

Jos olet jo luonut ensimmäisen käyttäjäsi eikä projektisi tarvitse niitä enempää, voit siirtyä seuraavaan toimenpiteeseen. Valinnastasi riippuen voit klikata käyttäjän luomiseksi kuvaketta `Käyttäjät ja oikeudet`{.action} ja sitten painiketta `Lisää käyttäjä`{.action}.


![Käyttäjän lisäys](images/privatesql04-Adding-a-user.png){.thumbnail}


Täytä eteesi avautuvassa ikkunassa pyydetyt tiedot seuraamalla tietokuplien ohjeita. Klikkaa sitten `Vahvista`{.action}.

- **Käyttäjänimi**: käyttäjä, joka voi yhdistää instanssiisi. Voit myöntää hänelle oikeuksia tietokantaasi seuraavassa vaiheessa.
- **Salasana** **Vahvista salasana** : valitse salasana ja vahvista se.


> [!warning]
>
> Turvallisuussyistä kehotamme noudattamaan tietojen rekisteröinnin yhteydessä ilmoitettuja ehtoja.
>

![Käyttäjän lisäys](images/privatesql05-Adding-a-user-part2.png){.thumbnail}

Kun käyttäjä on luotu, on tarpeen myöntää sille oikeuksia toimintojensa toteuttamiseksi tietokannassasi (kuten luku, tietojen lisäys tai poisto). Klikkaa sitä varten hammasrattaan kuvaa ja sitten `Oikeuksien hallinta`{.action}.

![Oikeuden lisäys](images/privatesql06-Adding-a-right.png){.thumbnail}

Valitse uudella sivulla haluttu oikeus klikkaamalla sitä. Perinteisessä käytössä valitse `Administraattori`{.action}.

![Oikeuden lisäys](images/privatesql07-Adding-a-right-part2.png){.thumbnail}


### Tietokannan tuominen (valinnainen)

Tätä vaihetta tarvitaan ainoastaan silloin, jos haluat tuoda varmuuskopion jo olemassa olevasta tietokannasta (välttämätöntä, jos siirrät OVH:lla olevan verkkosivusi tai jos siirrät tietokantasi uuteen Private SQL -instanssiin.) Jos sinulla ei ole yhtään tuotavaa tietokantaa, voit siirtyä seuraavaan kohtaan.

Valinnastasi riippuen on olemassa useita tekniikoita tietokannan tuomiseen. Hallintapaneelissa on OVH:n tarjoama työkalu, jolla tämän voi tehdä. Keskitymme tässä ohjeessa erityisesti OVH:n työkaluun.

#### 1. vaihe: mene tietokannan tuontiin

Mene kuvakkeeseen `Tietokannat`{.action}, klikkaa hammasrattaan kuvaa ja sitten `Tuo tiedosto`{.action}.

![Tiedoston lisäys](images/privatesql08-import-a-file.png){.thumbnail}


Seuraavassa avautuvassa ikkunassa rastita kohta `Tuo uusi tiedosto`{.action} ja klikkaa sitten `Seuraava`{.action}.

![Tiedoston lisäys](images/privatesql09-import-a-file-part2.png){.thumbnail}



#### 2. vaihe: valitse ja lähetä varmuuskopiotiedosto

Anna tiedoston nimi (tämä mahdollistaa varmuuskopion tunnistamisen myöhemmin, jos haluat palauttaa sen uudestaan) ja valitse sitten kohdan **Tiedosto (.gz)** vierestä tietokoneellasi oleva tietokannan varmuuskopiotiedosto ja klikkaa sitten `Lähetä`{.action}.

Odota, että käyttöliittymä ilmoittaa lähetyksen onnistumisesta ja klikkaa sitten painiketta `Seuraava`{.action}.

![Tiedoston lisäys](images/privatesql10-import-a-file-part3.png){.thumbnail}


#### 3. vaihe: aloita tietokannan tuominen

Valitse lopuksi sovelletaanko näkyvissä olevia lisävalintoja vai ei:

- **Tyhjennä nykyinen tietokanta**: rastittamalla tämän ruudun tietokannan tämänhetkinen sisältö poistetaan kokonaan ja korvataan varmuuskopiolla. Esimerkkitapauksessa ja toimenpiteidemme loogisena seurauksena, tietokanta on tyhjä. Voit jättää kohdan tyhjäksi.
- **Lähetä sähköpostiviesti tuonnin päätyttyä**: rastittamalla tämän kohdan saat sähköpostitse ilmoituksen, kun tietokantasi tuominen on suoritettu.

![Tiedoston lisäys](images/privatesql11-import-a-file-part4.png){.thumbnail}

### Yhdistä sivusi tietokantaan

Nyt kun tietokantasi on luotu ja yhdellä tai useammalla käyttäjällä on siihen oikeudet, jäljellä on enää verkkosivusi liittäminen tietokantaan. Tämä vaihe voidaan toteuttaa monin tavoin, riippuen verkkosivustasi tai käyttämästäsi sisällönhallintajärjestelmästä tai vaiheesta, jossa olet verkkosivun asennusta toteuttaessa.

Jotta voit suorittaa tämä toimenpiteen oikein, sinulla täytyy olla hallussasi, mitä sitten tapahtuikin, nämä viisi tietoa:

- **Tietokannan nimi**: nimi, jonka määritit tietokannan luonnin yhteydessä.
- **Käyttäjänimi**: tietokannan luonnin yhteydessä määritetty käyttäjä tai mahdollinen luomasi ylimääräinen käyttäjä.
- **Käyttäjän salasana**: määrittämääsi käyttäjään liittyvä salasana.
- **Isäntäpalvelimen nimi**: annettava palvelin, jotta sivusi voi yhdistää tietokantaan. Tämä tieto löytyy hallintapaneeliin osiosta **Yhteydet** ja sieltä kuvakkeesta `Yleiset tiedot`{.action}.
- **palvelimen portti**: yhteysportti Private SQL -instanssiisi, jotta sivusi voi yhdistää tietokantaasi. Tämä tieto löytyy hallintapaneeliin osiosta **Yhteydet** ja sieltä kuvakkeesta `Yleiset tiedot`{.action}.

> [!warning]
>
> Harvinaisissa tapauksissa kenttää `portti`{.action} ei voida tarjota sivusi konfiguraatiossa. Mikäli näin on, täytyy tämä kenttä lisätä isäntäpalvelimen nimen perään ja erottaa ne merkillä *:* (esimerkiksi: isäntäpalvelimennimi:portti).
>


![SQL-yhteys](images/privatesql12-sql_connection.png){.thumbnail}

Voit nyt viimeistellä verkkosivusi asennuksen tai tietokantasi migraation uuteen SQL-instanssiin.


## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa [https://ovh-hosting.fi/community/foorumi](https://ovh-hosting.fi/community/foorumi).
