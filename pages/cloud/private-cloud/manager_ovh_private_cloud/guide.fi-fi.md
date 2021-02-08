---
deprecated: true
title: OVH:n Private Cloud -hallintapaneelin esittely
slug: hallintapaneeli-ovh-private-cloud
excerpt: Tutustu Private Cloud -hallintapaneelin mahdollisuuksiin
section: Aluksi
---

**Päivitetty 15.01.2018**

## Tavoite

OVH:n hallintapaneeli tarjoaa lukuisia vaihtoehtoja Private Cloud -infrastruktuurisi asetusten määrittämiseen.

**Tässä ohjeessa voit tutustua näihin moniin vaihtoehtoihin.**

## Edellytykset

- Olet kirjautuneena [hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osiossa `Dedikoidut`{.action}, sitten `Private Cloud`{.action}.
- Sinulla on [Private Cloud](https://www.ovh-hosting.fi/private-cloud/){.external} -tuote.


## Käytännössä

### Yleinen välilehti

Kun olet [hallintapaneeliisi osiossa](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} `Dedikoidut`{.action} ja siellä `Private Cloud`{.action}, pääset Private Cloud -tuotteesi yleisnäkymään:

![Yleiset tiedot](images/manager_general.png){.thumbnail}

Aivan ylhäältä, `kuvassa numero 1`, löytyy Private Cloud -tuotteesi nimi ja kuvaus. Voit vapaasti räätälöidä sitä, sillä tämä voi olla erittäin hyödyllistä useita infrastruktuureja omistettaessa. 

Oikealla, `kuvassa numero 2`, löydät useita painikkeita:

- IP-lohkon tilaus, joka uudelleenohjaa `IP`{.action}-välilehdelle.
- Lisenssien tilaus (cPanel, Plesk jne.), joka uudelleenohjaa `Lisenssit`{.action}-välilehdelle.
- Kaikkien resurssiesi siirto kuukausimaksullisiksi (jos ne ovat jo sitä, mitään ei tule näkyviin).
- Liittyminen Private Cloud -postituslistalle.
- Palvelun irtisanomispyyntö: sinulle lähetetään sähköpostiviesti pyynnön vahvistusta varten.


### Yleiset tiedot

Ensimmäisestä osasta löytyvät Private Cloud -tuotteen yleiset tiedot.

![Yleiset tiedot](images/general_information.png){.thumbnail}


- Private Cloudin versio.
- OVH:n tuotereferenssi.
- Konesali ja tarkempi alue, johon infrastruktuurisi on asennettu.
- Infrastruktuuriisi kirjautumisen suojaus (`Avoin` tai `Rajoitettu`) lähde IP -osoitteiden rajoituksilla.
- Taattu kaistanleveys. Tämä ominaisuus on pian saatavilla.
- Virtuaalikonesalien lukumäärä infrastruktuurissasi.
- IP-lohkojen määrä.


### Lisäpalvelut

Näet seuraavaksi näkymän NSX- ja vRops-lisäpalveluiden tilasta.

![Lisäpalvelut](images/options.png){.thumbnail}

Tässä esimerkissä NSX- ja vRops-lisäpalvelut on aktivoitu ja sinulla on mahdollisuus kytkeä ne pois päältä, mikäli sinulla ei ole niille (enää) tarvetta.

Lisäpalvelun aktivoimiseksi riittää, että klikkaat sitä vastaavaa painiketta.

![Lisäpalveluiden aktivointi](images/options_activation.png){.thumbnail}

Klikkaamalla `Tutustu lisäpalveluun`{.action}, löydät jokaista palvelua koskevan ohjeen.


### Konesalit

Tästä kuvakkeesta löytyy lyhyt tiivistelmä virtuaalikonesaleista, jotka ovat Private Cloud -tuotteessasi.

![Konesali](images/datacenter.png){.thumbnail}

Näet alempana kaikki tiedot koskien konesaleja.

> [!primary]
>
> Tällä sivulla voit lisätä toisen konesalin, tästä ei aiheudu lisäkuluja.
> 



### Käyttäjät

Kaikki käyttäjät, jotka voivat kirjautua vSphereen, näkyvät tässä osassa:

![Käyttäjät](images/users.png){.thumbnail}

Voit luoda käyttäjän klikkaamalla oikealla olevaa painiketta `Luo käyttäjä`{.action}.

Jokaisesta käyttäjästä löytyvät seuraavat tiedot:

- käyttäjätunnus
- sähköpostiosoite (ei pakollinen)
- puhelinnumero (ei pakollinen)
- vahvistustunniste
- tila

Tässä osassa näkyvät oikeudet määritellään eri käyttäjille. Niiden avulla saadaan hallinta `OVH network`{.action}-välilehdelle ensimmäiselle käyttäjälle ja hallinta samalla välilehdellä, mutta Fail-over IP -osoitteet toiselle.
Klikkaamalla taulukon oikealla puolella olevaa hammasratasta tulee näkyviin useita vaihtoehtoja:

- muokkaa taulukon kenttiä
- katso ja muokkaa tämän käyttäjän oikeuksia konesalikohtaisesti
- vaihda käyttäjän salasana
- poista käyttäjä

Katsotaan tarkemmin oikeuksien muokkausta konesalikohtaisesti:

![Käyttäjien konesalikohtaiset oikeudet](images/rights_user_datacenters.png){.thumbnail}

- `Kirjautuminen vSphereen`{.action} \- tässä tarkoitetaan yleisiä vSpheren käyttöoikeuksia:

|Oikeudet|Kuvaus|
|---|---|
|none|Ei oikeutta|
|read only|Vain lukuoikeus|
|read/write|Luku- ja kirjoitusoikeus|
|provider|OVH:n administraattoreille varattu oikeus|

- `Resurssien lisäys`{.action} - tällä painikkeella voidaan myöntää oikeus ylimääräisten resurssien lisäykseen OVH-liitännäisen kautta vSphere-asiakasohjelmassa.

- `Kirjautuminen VM Network -verkkoon`{.action} - julkista verkkoa koskevan osan oikeuksien hallinta (nimeltään `VM Network` vSphere-käyttöliittymässä):

|Oikeudet|Kuvaus|
|---|---|
|none|Ei oikeutta|
|read only|Vain lukuoikeus|
|provider|Mahdollistaa virtuaalikoneiden (VM) konfiguroinnin julkisessa verkossa|

- `Kirjautuminen V(X)LANiin`{.action} - yksityistä verkkoa koskevan osan oikeuksien hallinta, VXLAN Dedicatec Cloud -sarjassa tai VLAN SDDC-sarjan tuotteissa:

|Oikeudet|Kuvaus|
|---|---|
none|Ei oikeutta|
|read only|Vain lukuoikeus|
|provider|Mahdollistaa virtuaalikoneiden (VM) konfiguroinnin yksityisessä verkossa|
|administrator|Mahdollistaa virtuaalikytkimen porttiryhmien hallinnan (luominen, muokkaus, poistaminen...)|

> [!warning]
>
> Oikeuksia muotoillaan parhaillaan uudelleen, tässä näkyvät tiedot saattavat muuttua.
> 


### Tietoturva

Tässä kuvakkeessa voit muokata vCenterin kirjautumiskäytäntöjä:

![Tietoturva-asetukset](images/security.png){.thumbnail}

Voit konfiguroida yllä olevia sekä taulukon elementtejä oikealta löytyvillä painikkeilla. On mahdollista konfiguroida:

- rajoitus kirjautumisistunnolle
- suurin sallittu samanaikaisten yhteyksien määrä
- kirjautumiskäytännöt, rajoitettu tai ei, sallitulla lähde IP -osoitteella. IP-osoitteet näkyvät taulukossa.

Uloskirjautumista koskeva käytäntö tarkoittaa joko ensimmäisen tai viimeisenä kirjautuneen käyttäjän uloskirjaamista.
Tässä esimerkissä jos kirjautuneena on 50 käyttäjää ja kun 51\. käyttäjä kirjautuu, ensimmäisenä yhteyden muodostanut käyttäjä kirjataan ulos.
Jos asetat kirjautumiskäytännöt rajoitetuksi etkä syötä yhtään IP-osoitetta, kukaan ei voi kirjautua vShpere-asiakasohjelmaan. Virtuaalikoneet pysyvät kuitenkin yhä käytettävissä.


### Operaatiot

Tässä kuvakkeessa näet infrastruktuurissasi käynnissä olevat operaatiot:

![Operaatiot](images/operations.png){.thumbnail}

Voit tarkistaa, onko operaatio virhetilassa tai onko huoltotoimenpiteitä suunniteltu.

Jos et voi kirjautua vSphere-asiakasohjelmaan, on mahdollista, että huoltotoimenpide on käynnissä. Voit tarkistaa sen tältä välilehdeltä.


### Konesalinäkymä

Private Cloud -tuotteessa sinulla voi olla useita konesaleja. Löydät ne klikkaamalla Private Cloud -tuotettasi:

![Konesalinäkymä](images/datacenter_view.png){.thumbnail}

Voit räätälöidä konesalisi nimen klikkaamalla kynää sekä lisäämällä personoidun kuvauksen.
Näet ensimmäiset konesalisi tiedot, sen sarjan (SDDC tai DC), isäntäpalvelinten sekä datasäilöjen lukumäärän.
Samassa Private Cloud -tuotteessa on mahdollista hyödyntää useita konesaleja Dedicated Cloud - ja Software Defined Datacenter -sarjoilla.


### Isäntäpalvelimet

Tässä ovat konesalisi isäntäpalvelimet:

![Isäntäpalvelimet](images/hosts.png){.thumbnail}

Tästä osasta löydät:

- isäntäpalvelinten nimen
- profiilin (M, L, L+ jne.)
- laskutusmuodon: jos isäntäpalvelimesi laskutus tapahtuu tuntiperusteisesti, sinulla on mahdollisuus siirtyä kuukausilaskutukseen
- isäntäpalvelimen tilan
- käytettyjen tuntien määrän (ainoastaan tuntiperusteisissa resursseissa).

Tämän kuvan oikealla puolella on painike uuden isäntäpalvelimen tilaamiseksi kuukausilaskutuksella.


### Datasäilöt

Datasäilö-taulukko muistuttaa isäntäpalvelinten taulukkoa:

![Datasäilöt](images/datastores.png){.thumbnail}

Tästä osasta löydät:

- datasäilöjen nimet
- tiedot niiden koosta
- laskutusmuoto
- datasäilön tila
- käytettyjen tuntien määrän (ainoastaan tuntiperusteisissa resursseissa).

Tämän kuvan oikealla puolella on painike uuden datasäilön tilaamiseksi kuukausilaskutuksella.


### Varmuuskopiot

Varmuuskopiot-välilehdellä voit aktivoida `Veeam backup` -ratkaisun klikkaamalla painiketta `Aktivoi varmuuskopiot`{.action}:

![Varmuuskopiot](images/backup.png){.thumbnail}

Lisätietoa tästä lisäpalvelusta saat tästä [ohjeesta](https://www.ovh-hosting.fi/private-cloud/lisapalvelut/veeam.xml){.external}.


### Windows-lisenssi

Välilehdellä `Windows-lisenssi`{.action} voit aktivoida SPLA Windows -lisenssejä konesaliisi klikkaamalla oikealla olevaa painiketta:

![SPLA Windows -lisenssi](images/windows_licence.png){.thumbnail}

Löydät hinnaston [tästä](https://www.ovh-hosting.fi/private-cloud/lisapalvelut/kuvat-lisenssit.xml){.external}.


## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.