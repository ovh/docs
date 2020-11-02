---
deprecated: true
title: 'Dedikoidun palvelimen suojaaminen'
slug: dedikoidun-palvelimen-suojaaminen
excerpt: 'Opi suojaamaan dedikoitu palvelimesi muutamien vinkkien avulla'
section: Aluksi
order: 2
---

**Päivitetty 24.8.2018**

## Tavoite

Kun tilaat dedikoidun palvelimen, mitään suojausprotokollaa ei oteta natiivisti käyttöön. Palvelimen suojaaminen kuuluu siis sinulle. OVH:ta ei näin voida pitää vastuussa koneesi puutteellisesta tietoturvasta.

**Opi suojaamaan dedikoitu palvelimesi muutamien vinkkien avulla.**

> [!warning]
>
> OVH tarjoaa käyttöösi palveluja, jotka ovat sinun vastuullasi. Koska meillä ei ole minkäänlaisia käyttöoikeuksia koneisiin, emme ole niiden administraattoreja emmekä voi avustaa niiden käytössä. Siksi sinun tehtävänäsi on varmistaa ohjelmistojen hallinta sekä suojaus päivittäin.
>
> Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme kuitenkin ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli sinulla on vaikeuksia tai epäselvyyksiä palvelimen hallintaan, käyttöön tai suojaamiseen liittyen. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
>


## Edellytykset

- Omistat [dedikoidun palvelimen](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external}.
- Olet kirjautunut SSH-yhteydellä (pääkäyttäjänä) Linuxilla tai administraattorina Windowsilla. 


## Käytännössä

> [!primary]
>
> Tämä ohje on yleiseen käyttöön. On mahdollista, että joudut mukauttamaan joitakin komentoja käyttämäsi distribuution ja/tai käyttöjärjestelmän mukaan. Tietyt neuvot voivat viitata kolmannen osapuolen työkalun käyttämiseen. Niiden käyttöön liittyvissä kysymyksissä voit tutustua kyseisen työkalun viralliseen dokumentaatioon.  
>

### Järjestelmäsi päivitys

Käyttöjärjestelmien ja distribuutioiden kehittäjät tarjoavat säännöllisesti ohjelmistopäivityksiä, erittäin usein tietoturvasyistä. **Distribuutiosi tai käyttöjärjestelmäsi pitäminen ajan tasalla on ratkaisevan tärkeää palvelimesi suojauksen kannalta.**

Kyse on kaksiosaisesta prosessista, jossa pakettilistat (asennettujen sovellusten luettelo) sekä itse paketit päivitetään.

#### Pakettilistan päivitys

Päivitä pakettilista palvelimellasi seuraavasti:

```sh
apt-get update
```

#### Pakettien päivitys

Päivitä sitten paketit palvelimellasi oheisella tavalla:

```sh
apt-get upgrade
```

Kun päivitykset ovat päättyneet, järjestelmäsi on täysin ajan tasalla. Tämä toimenpide on toteutettava säännöllisesti.


### Muokkaa SSH-palvelun oletuksena olevaa kuunteluporttia

Yksi ensimmäisistä palvelimellasi tehtävistä toimista on SSH-palvelun konfigurointi muuttamalla sen kuunteluporttia. Kuuntelu on oletuksena määritetty porttiin 22. Suosittelemme muokkaamaan sen oletusarvoa. Hakkerointiyritysten takana on useimmissa tapauksissa robotti, joka ottaa kohteekseen ensisijaisesti portin 22. Muokkaamalla tätä asetusta palvelimestasi tulee siis vaikeammin saavutettava.

> [!primary]
>
> Seuraavissa esimerkeissä käytämme Linuxin tekstieditoria nimeltä **Nano**. Voit kuitenkin käyttää mitä tahansa muuta tekstieditoria, jolla on mahdollista muokata konfigurointitiedostoa.
>

Tässä komento palvelun konfigurointitiedoston muokkaamiseen:

```sh
nano /etc/ssh/sshd_config
```

Määritä sitten seuraava rivi tiedostossa:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Korvaa numero **22** haluamallasi numerolla, tallenna ja poistu konfigurointitiedostosta. **Varmista, ettet syötä jo käytetyn portin numeroa**. Tämän jälkeen palvelin on käynnistettävä uudelleen.

Kun pyydät nyt SSH-yhteyttä koneeseesi, on ilmoitettava uusi portti:

```sh
ssh root@VotreServeur.ovh.net -p UusiPortti
```

> [!warning]
>
> Huomaa, että SSH:n tai minkä tahansa muun protokollan oletusportin muokkaukseen liittyy mahdollinen riski. Voit huomata, ettei tiettyjä palveluja voi konfiguroida käytettäväksi ei-standardeilla porteilla eivätkä ne toimi, mikäli oletusporttia on muokattu.
>


### Pääkäyttäjän salasanan muokkaaminen

Kun käyttöjärjestelmä tai distribuutio on asennettu, luodaan pääkäyttäjälle automaattisesti salasana. Suosittelemme vahvasti personoimaan sitä muokkaamalla. Avaa sitä varten SSH-yhteys palvelimeesi ja naputtele seuraava komento:

```sh
passwd root
```

Tämän jälkeen uusi salasanasi on syötettävä kahteen kertaan. On myös huomattava, että turvallisuussyistä **salasanaa ei näytetä kirjoittamisen aikana**. Et voi siis nähdä syötettyjä merkkejä.

Kun toimenpide on suoritettu, täytyy uusi salasana antaa kirjauduttaessa järjestelmään seuraavan kerran.


### Luo käyttäjä rajoitetuilla oikeuksilla

Suosittelemme luomaan päivittäistä käyttöä varten käyttäjätilin, jolla on rajoitetut oikeudet palvelimeesi. Voit luoda uuden käyttäjän seuraavalla komennolla:

```sh
adduser Personoitu_Käyttäjä_Nimi
```

Täytä sitten järjestelmän pyytämät tiedot (salasana, nimi, jne.)

Tällä käyttäjällä on lupa kirjautua SSH-yhteydellä järjestelmääsi tilin luomisen yhteydessä ilmoitetulla salasanalla. Kun olet kirjautunut järjestelmään näillä tiedoilla, voit halutessasi tehdä administraattorin oikeuksia vaativia toimenpiteitä syöttämällä komennon:

```sh
su root
```

Tämän jälkeen on syötettävä pääkäyttäjän salasana toimenpiteen vahvistamiseksi.


### Poista käytöstä yhteys palvelimeen pääkäyttäjän kautta

Pääkäyttäjä luodaan oletuksena UNIX-järjestelmissä kuten Linuxissa tai MAC OS:ssä. Pääkäyttäjällä on kaikki järjestelmänvalvojan oikeudet järjestelmääsi. Ei ole suositeltavaa, ja voi olla jopa vaarallista, jättää palvelin käytettäväksi ainoastaan tämän käyttäjän kautta. Tämä tili voi tehdä peruuttamattomia toimenpiteitä palvelimellasi.

Suosittelemme vahvasti poistamaan käytöstä pääkäyttäjien suoran pääsyoikeuden SSH-protokollan kautta. Tämän toimenpiteen suorittamiseksi on muokattava SSH-konfigurointitiedostoa samalla tavoin kuin aiemmassa kohdassa muokattiin palvelimen porttia.

Aloita avaamalla SSH-yhteys palvelimeesi ja naputtele seuraava komento:

```sh
nano /etc/ssh/sshd_config
```

Määritä sitten seuraava osio ja korvaa rivin `PermitRootLogin` “yes” sanalla “no” , alla näkyvällä tavalla:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Kun olet tallentanut ja sulkenut konfigurointitiedoston, käynnistä SSH-palvelu uudestaan muokkausten käyttöön ottamiseksi seuraavaa komentoa käyttämällä:

```sh
/etc/init.d/ssh restart
```

### Asenna ja konfiguroi Fail2ban-paketti

Fail2ban on ohjelmistokehys hyökkäysten estoon, jonka tarkoitus on estää tuntemattomia IP-osoitteita tunkeutumasta järjestelmään. Tätä pakettia suositellaan suojaksi kaikkia palvelimeesi kohdistuvia brute force -hyökkäyksiä vastaan.

Asenna Fail2ban käyttämällä seuraavaa komentoa:

```sh
apt-get install fail2ban
```

Kun paketti on asennettu, muokkaa sen konfigurointitiedostoa mukauttaaksesi se järjestelmääsi vastaavaksi. Ennen muokkausten tekoa suosittelemme varmuuskopioimaan konfigurointitiedoston naputtelemalla seuraavan komennon:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Tee sitten muokkauksesi tiedostoon:

```sh
nano /etc/fail2ban/jail.conf
```

Kun muokkaukset ovat päättyneet, käynnistä palvelimesi uudelleen seuraavalla komennolla:

```sh
/etc/init.d/fail2ban restart
```

Fail2Bania koskevissa lisäkysymyksissä voit katsoa työkalun [virallista dokumentaatiota](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.


### Sisäisen palomuurin konfigurointi: iptables

Paljaassa distribuutiossa on palomuuripalvelu nimeltä iptables. Tässä palvelussa ei ole oletuksena yhtään sääntöä aktivoituna. Voit todeta tämän naputtamalla seuraavan komennon:

```sh
iptables -L
```

On siis suositeltavaa luoda ja muokata tämän palomuurin sääntöjä oman käyttösi mukaisesti. Lisätietoa iptables-palvelujen konfiguroinnista löydät Linux-distribuutiosi virallisesta dokumentaatiosta.


### Firewall Network -palomuurin konfigurointi

OVH:n palvelimissa on infrastruktuurin tulokohdassa palomuuri, jota kutsutaan nimellä Firewall Network. Sen käyttöönotto ja konfigurointi mahdollistavat protokollien estämisen jo ennen niiden saapumista palvelimellesi.

Lisäksi meillä on [ohje](https://docs.ovh.com/fi/dedicated/firewall-network/){.external} Firewall Network -palomuurin konfiguroimiseen.


### Varmuuskopioi järjestelmäsi ja tietosi

Tietoturvan käsite ei rajoitu ainoastaan järjestelmäsi suojaamiseen hyökkäyksiltä. Tietojesi suojaus on ensisijaisen tärkeä elementti. Tästä syystä OVH tarjoaa palvelimesi mukana 500 GB maksutonta tallennustilaa. Voit aktivoida tämän varmuuskopioiden säilytystilan hallintapaneelistasi ja kirjautua sinne seuraavilla protokollilla:

* FTP
* FTPS
* NFS
* CIFS

Tarvitset kolmannen osapuolen varmuuskopioratkaisua tietojesi replikointiin ja siirtoon varmuuskopioiden säilytystilaan.

Lisätietoa varmuuskopioiden säilytysratkaisuista löydät tästä [ohjeesta](https://docs.ovh.com/fi/dedicated/palvelut-backup-storage/){.external}.


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.