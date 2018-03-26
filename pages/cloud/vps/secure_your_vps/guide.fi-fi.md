---
title: VPS:n suojaaminen 
slug: tietoturvaohjeita-vps
section: Aluksi
---

**Päivitetty 21.11.2017**

## Tavoite


Kun tilaat VPS-palvelimen, se sisältää esiasennetun distribuution, mutta ei yhtään natiivisti käyttöön otettavaa tietoturvaprotokollaa. VPS:n suojaaminen kuuluu siis sinulle, OVH ei voi puuttua tähän.

**Tämä ohje sisältää yleisiä ohjeita palvelimesi suojaamiseen.**

 
> [!warning]
>
> Vaikka OVH antaa käyttöösi koneita, olet niistä itse vastuussa. Koska meillä ei ole minkäänlaisia käyttöoikeuksia koneisiin, emme ole niiden administraattoreja. Siksi sinun tehtävänäsi on varmistaa ohjelmistojen hallinta sekä suojaus päivittäin. Tämän ohjeen tarkoituksena on auttaa sinua yleisimmissä tehtävissä. Suosittelemme kuitenkin ottamaan yhteyttä erikoistuneeseen palveluntarjoajaan, mikäli sinulla on vaikeuksia tai epäselvyyksiä palvelimen hallintaan, käyttöön tai suojaamiseen liittyen. Lisätietoa tämän ohjeen kohdasta “Lisää aiheesta”.
> 



## Edellytykset

- Olet kirjautunut VPS-palvelimeesi SSH-yhteydellä (pääkäyttäjä).


## Käytännössä

Tämä ohje sisältää useita erilaisia vinkkejä. Huomaathan, että tämä ohje on yleistasoinen. Tiettyjä komentoja on mukautettava käyttämäsi käyttöjärjestelmän mukaan. Joissain kohdissa neuvotaan käyttämään kolmannen osapuolen tarjoamia työkaluja. Pyydämme tutustumaan kolmannen osapuolen tarjoamaan viralliseen dokumentaatioon, mikäli tarvitset apua.

### Järjestelmän päivitys

Käyttöjärjestelmien ja distribuutioiden kehittäjät tarjoavat säännöllisesti päivityspaketteja, hyvin usein tietoturvasyistä. Käyttöjärjestelmän pitäminen ajan tasalla onkin ratkaisevan tärkeää VPS-palvelimesi suojaamisessa.

Tämä päivitys tapahtuu kahdessa vaiheessa:

- Pakettilistojen päivitys: 

```sh 
apt-get update
```

- Itse pakettien päivitys:

```sh
apt-get upgrade
```

Kun tämä vaihe on saatu päätökseen, käyttöjärjestelmäsi on ajan tasalla. Tämä menettely on suoritettava säännöllisesti.


### Muokkaa SSH-palvelun oletuksena olevaa kuunteluporttia


Yksi ensimmäisistä palvelimella tehtävistä toimista on SSH-kuunteluportin konfiguroiminen. Kuuntelu on määritetty oletuksena **porttiin 22**. On siis suositeltavaa muokata sitä eikä jättää sitä tähän tilaan. Tämä johtuu siitä syystä, että suurin osa palvelinten hakkerointiyrityksistä on robottien hyökkäyksiä, jotka kohdistuvat oletuksena porttiin 22. Asetusten muokkaaminen vaikeuttaa robottien toimia ja tekee palvelimestasi vaikeamman saavuttaa.

Komento palvelun konfiguraation muokkaamiseen:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Komento `nano` on annettu tässä esimerkkinä. Voit käyttää `vim`-komentoa tai mitä tahansa muuta komentoa, jolla on mahdollista muokata sshd\_config-tiedostoa. 
>

Tämän jälkeen on tarkasteltava seuraavaa riviä:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Korvaa numero 22 valitsemallasi numerolla. **Älä kuitenkaan käytä sellaista portin numeroa, jota on jo käytetty järjestelmässäsi**. Tallenna ja sulje konfigurointitiedosto.

Tämän jälkeen palvelusi on käynnistettävä uudelleen:

```sh
/etc/init.d/ssh restart
```

Kun nyt pyydät SSH-yhteyttä koneeseesi, sinun on ilmoitettava uusi portti:

```sh
ssh root@votrevps.ovh.net -p UusiPortti
```

### Muokkaa pääkäyttäjän salasanaa

Käyttöjärjestelmää tai distribuutiota asennettaessa luodaan pääkäyttäjälle automaattisesti salasana. Tämän salasanan vaihtaminen on erittäin suositeltavaa. Se onnistuu näppäilemällä kirjautumisen jälkeen seuraava komento:

```sh
passwd root
```

Järjestelmäsi pyytää nyt syöttämään uuden salasanan kahdesti sen vahvistamista varten. Varoitus, turvallisuussyistä **salasanaa ei näytetä sen kirjoittamisen aikana**. Et voi siis nähdä syöttämiäsi merkkejä.

Kun toimenpide on suoritettu, uusi salasana on annettava, kun järjestelmään kirjaudutaan seuraavan kerran.

### Luo käyttäjä rajoitetuilla käyttöoikeuksilla ja puutu järjestelmiin, joilla on pääkäyttöoikeudet

Uuden käyttäjän luominen onnistuu seuraavalla komennolla:

```sh
adduser PersonoituKäyttäjänimi
```

Täytä sitten järjestelmän pyytämät tiedot (salasana, nimi, jne.) 

Tämä käyttäjä saa luvan yhdistää järjestelmääsi SSH-yhteydellä luomisen yhteydessä ilmoitetulla salasanalla.

Kun olet kirjautunut sillä järjestelmääsi, voit naputella seuraavan komennon, jos haluat suorittaa pääkäyttöoikeuksia vaativia toimenpiteitä:

```sh
su root
```

Sinun on ilmoitettava pääkäyttäjätunnukseen liittyvä salasana toimenpiteen vahvistamiseksi.

### Katkaise pääsy palvelimeen pääkäyttäjän kautta 

Pääkäyttäjä luodaan oletuksena UNIX-järjestelmissä ja tällä on hallussaan eniten järjestelmääsi koskevia oikeuksia. VPS:n jättäminen vain tämän käyttäjän kautta käytettäväksi ei ole suositeltavaa. Se on jopa vaarallista, sillä pääkäyttäjä voi tehdä peruuttamattomia toimenpiteitä palvelimellasi.

On suositeltavaa asettaa pois päältä sen suora käyttöoikeus SSH-protokollan kautta.

Tätä toimenpidettä varten täytyy muokata SSH-konfigurointitiedostoa, kuten aiemmin VPS:äsi portin muokkauksen yhteydessä tehtiin.

```sh
nano /etc/ssh/sshd_config
```

Kirjaa muistiin seuraava osio:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Korvaa rivin `PermitRootLogin` kohta **yes** kohdalla **no**. 

Jotta muokkaus rekisteröidään, SSH-palvelu on käynnistettävä uudelleen:

```sh
/etc/init.d/ssh restart
```

Nyt voit käyttää juuri luomaasi käyttäjää kirjautuaksesi käyttöjärjestelmään.


### Asenna ja konfiguroi Fail2ban-paketti

Fail2ban on kehyssovellus hyökkäyksenestoon. Sen tarkoituksena on estää tuntemattomat IP-osoitteet, jotka yrittävät tunkeutua järjestelmääsi. Tämä paketti on suositeltu, jopa välttämätön, jotta voit suojautua palveluihisi kohdistuvilta väsytysmenettelyä käyttäviltä hyökkäyksiltä.

Paketin asennus tapahtuu seuraavalla komennolla:

```sh
apt-get install fail2ban
```

Kun paketti on asennettu, täytyy sen konfigurointitiedostoa muokata, jotta se mukautuu omaasi. Ennen muokkausten tekoa on suositeltavaa ottaa tiedostosta varmuuskopio seuraavalla komennolla:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Tee sitten muokkaukset tiedostoon:

```sh
nano /etc/fail2ban/jail.conf
```

Kun toimenpide on päättynyt, palvelu on uudelleenkäynnistettävä seuraavan komennon avulla:

```sh
/etc/init.d/fail2ban restart
```

Fail2Bania koskeviin lisäkysymyksiin löydät vastaukset työkalun [virallisesta dokumentaatiosta](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.


### Konfiguroi sisäinen palomuuri: Iptables

Paljaassa distribuutiossa on palomuuripalvelu nimeltä Iptables. Palvelussa ei ole oletuksena yhtään aktiivista sääntöä. Voit havaita tämän näppäilemällä komennon:

```sh
iptables -L
```

On siis suositeltavaa luoda ja muokata käyttöösi sopivat säännöt palomuurille. Lisätietoa kaikista mahdollisista toiminnoista saat käyttämäsi distribuution virallisesta dokumentaatiosta kyseisen palvelun käyttöä koskevasta osiosta.


### Konfiguroi OVH:n Firewall Network

OVH tarjoaa infrastruktuurin suulla olevan palomuurin nimeltä Firewall Network. Sen käyttöönotto ja konfigurointi mahdollistavat protokollien estämisen jopa ennen niiden saapumista palvelimellesi.

Tässä [lnkki](https://docs.ovh.com/fi/dedicated/firewall-network/){.external} tätä palomuuria käsittelevään ohjeeseen.


### Varmuuskopioi järjestelmäsi ja tietosi

Termi tietoturva ei rajoitu ainoastaan järjestelmän suojaamiseen hyökkäyksiä vastaan.

Tietojen suojaus on olennaisen tärkeä osa sitä. Tästä syystä OVH tarjoaa kolme varmuuskopiointivaihtoehtoa:

- `Tilannekuva`(Snapshot) on käsin luotu kuva virtuaalikoneesi tilasta (saatavilla VPS SSD -, Cloud- ja Cloud RAM -tuotteissa)
- `Automatisoitu varmuuskopio` on päivittäin otettava varmuuskopio VPS:stäsi (pois lukien lisälevy), joka tuodaan ja replikoidaan kolmesti ennen kuin se on saatavilla hallintapaneelissa (saatavilla ainoastaan VPS Cloud ja Cloud RAM -tuotteissa)
- `Backup Storage` mahdollistaa tiedostojen asettamisen ja haun dedikoidusta levytilasta. Tätä varten käytettävissä olevat protokollat ovat FTP, NFS ja CIFS, jotka vastaavat kaikkien käyttöjärjestelmien käyttäjien kirjautumismenetelmiin. Voit näin siirtää tietosi turvaan palvelukatkoksen sattuessa (saatavilla ainoastaan VPS Cloud - ja Cloud RAM -tuotteissa).

Kaikki tiedot VPS:n datasäilötuotteista: <https://www.ovh-hosting.fi/vps/backup-vps.xml>.


## Lue lisää aiheesta

[Firewall Network -palomuurin ohje](https://docs.ovh.com/fi/dedicated/firewall-network/)

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.
