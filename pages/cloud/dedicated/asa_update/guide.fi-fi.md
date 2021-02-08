---
deprecated: true
title: CISCO ASA -palomuurin päivittäminen
excerpt: Katso, kuinka CISCO ASA -palomuuri päivitetään
slug: paivitys-cisco-asa-palomuuri
section: Edistynyt käyttö
---

**Päivitetty 20.2.2018**

## Tavoite

Jotta palomuurisi CISCO Adaptive Security Appliance (ASA) voi suojata järjestelmääsi ihanteellisesti, täytyy sen hyödyntää viimeisimpiä päivityspaketteja. Niiden avulla voidaan korjata mahdollisia tietoturvaheikkouksia.

**Tässä ohjeessa kerrotaan, kuinka voit päivittää CISCO ASA -palomuurisi.**

## Edellytykset

- Käyttöoikeudet [OVH:n hallintapaneeliin](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external}.


## Käytännössä

### ASAn poistaminen käytöstä hallintapaneelissa

Päivitysprosessin aikana vaaditaan useita uudelleenkäynnistyksiä. Suosittelemme siis poistamaan ASAn käytöstä, jottei palvelimen käyttö esty päivityksen aikana.

Mene [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osioon `Dedikoidut tuotteet`{.action}. Valitse seuraavaksi dedikoitu palvelimesi ja sitten `Firewall Cisco ASA`{.action}. Klikkaa lopuksi oikealla `Deaktivoi ASA-palomuuri`{.action}

![ASAn deaktivointi](images/customer_panel_asa_disable.png){.thumbnail}

### Tallenna konfiguraatio

#### Ensimmäinen tapa ASDM:n kautta

Kirjaudu Cisco Adaptive Security Device Manageriin (tai ASDM), valitse sitten `File`{.action} ja `Save Running Configuration to Flash`{.action}:

![Konfiguroinnin tallentaminen ASDM:n kautta](images/asa1.jpg){.thumbnail}

#### Toinen tapa SSH-yhteydellä

Kirjaudu SSH-yhteydellä ASAan:

```sh
user@desk:~$ ssh adminovh@IP_ASA

adminovh@IP_ASAs password:
Type help or '?' for a list of available commands.

asa12345> en
Password: ********
```

Näpyttele sitten seuraava komento:

```sh
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```


### Varmuuskopioi konfiguraatio

Luo paikallinen tiedosto esimerkiksi `backupAsa.txt`. Kirjaudu sitten ASDM:ään ja mene kohtaan `Tools`{.action} ja sitten `Backup Configurations`{.action}.

![Varmuuskopioi konfiguraatio ASDM 1:n kautta](images/asa2.jpg){.thumbnail}

Valitse avautuvassa pikavalikossa paikallinen tiedosto, jonka loit aiemmin (`Browse Local...`{.action}) ja varmuuskopioi konfiguraatio klikkaamalla `Backup`{.action}.

![Varmuuskopioi konfiguraatio ASDM 2:n kautta](images/asa3.jpg){.thumbnail}


### ASAn uudelleenkäynnistäminen

Tämä vaihe on tärkeä, koska on tarpeen varmistaa ASAn toimivuus ja käytettävyys yksinkertaisen uudelleenkäynnistyksen jälkeen.

#### Ensimmäinen tapa ASDM:n kautta

Kirjaudu Cisco Adaptive Security Device Manageriin, valitse `Tools`{.action} ja sitten `System Reload...`{.action}:

![ASAn uudelleenkäynnistäminen ASDM:n kautta](images/asa5.jpg){.thumbnail}

Valitse näkyviin tulleessa ikkunassa välitöntä uudelleenkäynnistystä varten `Reload Start Time` > `Now`{.action} >`Schedule Reload`{.action}.

![ASAn uudelleenkäynnistäminen ASDM 2:n kautta](images/asa6.jpg){.thumbnail}

![ASAn uudelleenkäynnistäminen ASDM 3:n kautta](images/asa7.jpg){.thumbnail}


#### Toinen tapa SSH-yhteydellä

Kirjaudu SSH-yhteydellä ASAan ja syötä komento `reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

Uudelleenkäynnistys konfiguraation lataamiseksi vie joitakin minuutteja.


### ASAn uudelleenaktivointi hallintapaneelissa

Kuten ensimmäisessä vaiheessa, mene [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osioon `Dedikoidut-tuotteet`{.action}. Valitse seuraavaksi dedikoitu palvelimesi ja sitten `Firewall Cisco ASA`{.action}. Klikkaa lopuksi oikealta `Aktivoi ASA-palomuuri`{.action}.

![ASAn aktivointi](images/customer_panel_asa_enable.png){.thumbnail}


Kun ASA on toiminnassa uudelleenkäynnistyksen jälkeen, varmista, että kaikki palvelimesi palvelut toimivat. Jos kaikki toimii, siirry seuraavaan vaiheeseen. Jos kohtaat esteitä, tee tarvittavat tarkistukset häiriöiden korjaamiseksi ennen siirtymistä seuraaviin vaiheisiin.


### Poista ASA uudelleen käytöstä hallintapaneelissa

ASA täytyy poistaa jälleen käytöstä kuten ensimmäisessä vaiheessa.

Mene [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osioon `Dedikoidut tuotteet`{.action}. Valitse seuraavaksi dedikoitu palvelimesi ja sitten `Firewall Cisco ASA`{.action}. Klikkaa lopuksi oikealla `Deaktivoi ASA-palomuuri`{.action}.

![ASAn deaktivointi](images/customer_panel_asa_disable.png){.thumbnail}


### Tarkista tällä hetkellä käytetty binääritiedosto

#### Ensimmäinen tapa ASDM:n kautta

Kirjaudu Cisco Adaptive Security Device Manageriin, mene kohtaan `Device Information`{.action} ja sitten `General`{.action}. Täältä löydät ASA- ja ASDM-versiosi. Suosittelemme kirjoittamaan versiot muistiin ja säilyttämään ne.

![Binääritiedoston tarkistus ASDM:llä](images/asa9.jpg){.thumbnail}


#### Toinen tapa SSH-yhteydellä

Kirjaudu SSH-yhteydellä ja syötä seuraava komento:


```sh
asa12345# sh run | i bin

boot system disk0:/asa847-30-k8.bin
asdm image disk0:/asdm-771.bin
```

- *boot system*\: ASA-versio
- *asdm image*\: ASDM-versio


### Tarkista, mitä binääritiedostoa on käytettävä

Mene binääritiedoston löytämiseksi seuraavaan taulukkoon:

|Nykyinen ASA-versio|Versio, johon päivitetään ensimmäiseksi|Seuraavaksi päivitettävä|
|---|---|---|
|8.2(x) ja aiemmat|8.4(6)|9.1(3) ja seuraavat|
|8.3(x)|8.4(6)|9.1(3) ja seuraavat|
|8.4(1) - 8.4(4)|8.4(6) tai 9.0(2+)|9.1(3) ja seuraavat|
|8.4(5+)|Ei mikään|9.1(3) ja seuraavat|
|8.5(1)|9.0(2+)|9.1(3) ja seuraavat|
|8.6(1)|9.0(2+)|9.1(3) ja seuraavat|
|9.0(1)|9.0(2+)|9.1(3) ja seuraavat|
|9.0(2+)|Ei mikään|9.1(3) ja seuraavat|
|9.1(1)|9.1(2)|9.1(3) ja seuraavat|
|9.1(2+)|Ei mikään|9.1(3) ja seuraavat|
|9.2(x)|Ei mikään|9.2(2) ja seuraavat|

Esimerkiksi, jos ASA-versiosi on versio 8.4(2), järjestelmä täytyy päivittää ensin versioon 8.4(6) ja vasta sitten versioon 8.4(7+) tai 9.2+.


Lisätietoa löydät [Ciscon dokumentaatiosta](https://www.cisco.com/c/en/us/td/docs/security/asa/migration/upgrade/upgrade.html){.external}.

> [!primary]
>
> Suosittelemme päivittämään Cisco ASA -palomuurit, joissa on 256 MB muistia pelkästään versioon 8.4(x). Versiot 9.1(x) ja 9.2(x) käyttävät käytännössä koko 256 MB olematta tuotannossa.
>

Voit tarkista versiosi jommallakummalla seuraavista vaihtoehdoista:

- SSH-yhteydellä komennolla:

```
asa12345# sh ver| i RAM

Hardware: ASA5505, 512 MB RAM, CPU CPU Geode 500 MHz
```

- ASDM:n osiossa `Tools`{.action} ja sitten `Command Line Interface...`{.action}:

![Binääriversion tarkistaminen ASDM 1](images/asa10.jpg){.thumbnail}

![Binääriversion tarkistaminen ASDM 2](images/asa11.jpg){.thumbnail}


### Käyttämättömien binääritiedostojen poistaminen

Ennen uusien binääritiedostojen lisäämistä on poistettava vanhat.

#### Ensimmäinen tapa ASDM:n kautta
Kirjaudu Cisco Adaptive Security Device Manageriin. Mene siellä kohtaan `Tools`{.action} ja sitten `File Management...`{.action}.

![Käyttämättömien binääritiedostojen poistaminen ASDM 1](images/asa12.jpg){.thumbnail}

Poista sitten käyttämättömät binääritiedostot (*.bin*). Nyt tarvitaan enää tiedostot ASAa ja ASDN:ää varten levylle.

![Käyttämättömien binääritiedostojen poistaminen ASDM 2](images/asa13.jpg){.thumbnail}


#### Toinen tapa SSH-yhteydellä

Kirjaudu SSH-yhteydellä ASAan ja poista tiedostot listattuasi ne ensin:

```sh
asa12345# sh flash: | i bin

128 26995116 Apr 18 2017 23:55:52 asdm-771.bin
144 23016144 Dec 12 2016 14:35:07 asdm-721-150.bin
138 25214976 Nov 18 2017 23:29:54 asa847-30-k8.bin
```

```sh
asa12345# delete flash:asdm-781-150.bin

Delete filename [asdm-721-150.bin]?
Delete disk0:/asdm-721-150.bin? [confirm]
```

### ASDM-binääritiedostojen lisääminen ja poistaminen

#### Ensimmäinen tapa ASDM:n kautta

Kirjaudu Cisco Adaptive Security Device Manageriin. Mene sitten kohtaan `Tools`{.action} ja klikkaa `Upgrade Software from Local Computer...`{.action}.

![ASDM-binääritiedostojen lisääminen ja poistaminen ASDM 1](images/asa14.jpg){.thumbnail}

Valitse seuraavalla näytöllä:

- *Image to upload*: ASDM
- *Local File Patch*\: näpyttele `Browse Local Files`{.action} ja valitse ASDM-binääritiedostosi versio.

Vahvista valintasi klikkaamalla `Upload image`{.action}, sitten `Yes`{.action}, jotta vahvistat, että imagesta on tultava käynnistysimage:

![ASDM-binääritiedostojen lisääminen ja poistaminen ASDM 2:lla](images/asa15.jpg){.thumbnail}

![ASDM-binääritiedostojen lisääminen ja poistaminen ASDM 3:lla](images/asa16.jpg){.thumbnail}


#### Toinen tapa SSH-yhteydellä

Binääritiedosto on asetettava etukäteen FTP-palvelimelle ja ASA on konfiguroitava SSH-yhteydellä, jotta sitä voidaan käyttää ja konfiguraatio voidaan varmuuskopioida.

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin flash:asdm-781.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asdm-781.bin]?

Destination filename [asdm-781.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asdm-781.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asdm-781.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
25025404 bytes copied in 41.690 secs (610375 bytes/sec)
```

```sh
asa12345# conf t

asa12345(config)# asdm image disk0:/asdm-781.bin
asa12345(config)# end

asa12345# write memory
```

### Uusien ASDM-binääritiedostojen lisääminen ja asentaminen

#### Ensimmäinen tapa ASDM:n kautta

Kirjaudu Cisco Adaptive Security Device Manageriin. Mene kohtaan `Tools`{.action} ja klikkaa `Upgrade Software from Local Computer...`{.action}.

![ASDM-binääritiedostojen lisääminen ja asentaminen ASDM 1:llä](images/asa14.jpg){.thumbnail}

Valitse seuraavalla näytöllä:

- *Image to upload*: ASA
- *Local File Patch*\: näpyttele `Browse Local Files`{.action} ja valitse ASA-binääritiedostosi versio.

 
Vahvista valintasi klikkaamalla `Upload image`{.action}, sitten `Yes`{.action}, jotta vahvistat, että imagesta on tultava käynnistysimage:

![ASA-binääritiedostojen lisääminen ja asentaminen ASDM 2:lla](images/asa18.jpg){.thumbnail}

![ASA-binääritiedostojen lisääminen ja asentaminen ASDM 3:lla](images/asa20.jpg){.thumbnail}


#### Toinen tapa SSH-yhteydellä

Kirjaudu SSH-yhteydellä ja syötä seuraavat komennot:

```sh
asa12345# copy ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin flash:asa-924.bin

Address or name of remote host [FTP_IP]?

Source username [USER]?

Source password [PASSWORD]?

Source filename [asa-924.bin]?

Destination filename [asa-924.bin]?

Accessing ftp://USER:PASSWORD@FTP_IP/FOLDER/asa-924.bin...!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Writing file disk0:/asa-924.bin...
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
28057462 bytes copied in 46.270 secs (609345 bytes/sec)

asa12345# conf t

asa12345(config)# asdm image disk0:/asa-924.bin

asa12345(config)# end

asa12345# write memory
```
 

### ASAn uudelleenkäynnistäminen

Tämä vaihe on tärkeä, koska ASAn toimivuuden ja käytettävyyden varmistaminen yksinkertaisen uudelleenkäynnistyksen jälkeen on välttämätöntä.

#### Ensimmäinen tapa ASDM:n kautta

Kirjaudu Cisco Adaptive Security Device Manageriin. Valitse sitten `Tools`{.action} ja sitten `System Reload...`{.action}:

![ASAn uudelleenkäynnistäminen ASDM:n kautta](images/asa5.jpg){.thumbnail}

Valitse välitöntä uudelleenkäynnistystä varten näkyviin tulleessa ikkunassa `Reload Start Time`: `Now`{.action}, klikkaa sitten `Schedule Reload`{.action}:

![ASAn uudelleenkäynnistäminen ASDM 2:n kautta](images/asa6.jpg){.thumbnail}

![ASAn uudelleenkäynnistäminen ASDM 3:n kautta](images/asa7.jpg){.thumbnail}


#### Toinen tapa SSH-yhteydellä

Kirjaudu SSH-yhteydellä ASAan ja syötä komento `reload`:

```sh
asa12345# reload

Proceed with reload? [confirm]
***
*** --- START GRACEFUL SHUTDOWN ---
Shutting down isakmp
Shutting down File system

***
*** --- SHUTDOWN NOW ---
```

Uudelleenkäynnistys konfiguraation lataamiseksi vie joitakin minuutteja.

 

> [!warning]
>
> Jos et tässä vaiheessa onnistu lisäämään ASA-binääritiedostoa, uudelleenkäynnistä ASDM ja poista sitten käyttämätön ASDM-tiedosto tilan vapauttamiseksi.
> 
> Päivitä sitten ASA-binääritiedosto alla kuvatun menettelyn mukaisesti.
>

 

### Konfiguraation korjaus

Kun ASAa päivitetään vanhemmista versioista versioon 8.4.6, löydät uuden konfiguraation uudelleenkäynnistyksen jälkeen:

```sh
asa12345# sh run | i permit-

no arp permit-nonconnected
```


Konfiguraatiota on korjattava seuraavasti:

```sh
asa12345# conf t
asa12345(config)# aarp permit-nonconnected
asa12345(config)# end
asa12345# write memory

Building configuration...
Cryptochecksum: 4b86b1e4 2e731d6b 9d1fc491 a5eae0f3
6854 bytes copied in 1.20 secs (6854 bytes/sec)
[OK]
```

![Päivitetty Firewall Cisco ASA](images/asa10.jpg){.thumbnail}

![Päivitetty Firewall Cisco ASA](images/asa23.jpg){.thumbnail}



### ASAn uudelleenaktivointi hallintapaneelissa

Kuten ensimmäisessä vaiheessa, mene [hallintapaneelisi](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie){.external} osioon `Dedikoidut-tuotteet`{.action}. Valitse seuraavaksi dedikoitu palvelimesi ja sitten `Firewall Cisco ASA`{.action}. Klikkaa lopuksi oikealta `Aktivoi ASA-palomuuri`{.action}.

![ASAn aktivointi](images/customer_panel_asa_enable.png){.thumbnail}



ASA on nyt päivitetty.

![Päivitetty Firewall Cisco ASA](images/asa22.jpg){.thumbnail}



## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.