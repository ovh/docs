---
deprecated: true
title: 'IP-osoitteen konfigurointi aliaksena'
slug: network-ipaliasing
excerpt: 'Fail-over IP -osoitteiden lisääminen konfiguraatioon'
section: 'Verkko & IP'
---

**Päivitetty 07.09.2017**

## Tavoite


IP-osoitteen alias (englanniksi IP aliasing) on dedikoidun palvelimesi verkon erikoiskonfiguraatio. Sen avulla voidaan liittää useita IP-osoitteita yhteen verkkokäyttöliittymään.

**Tässä ohjeessa kerrotaan, kuinka tämä lisäys tehdään.**

## Edellytykset

- Sinulla on dedikoitu palvelin (VPS, dedikoitu palvelin tai Public Cloud -instanssi).
- Sinulla on yksi tai useampi Fail-over IP -osoite.
- Olet kirjautunut palvelimeesi SSH-yhteydellä (pääkäyttäjä).


## Käytännössä

Tässä konfiguraatiot tärkeimmille distribuutioille.


### Debian 6/7/8 ja johdannaiset

#### 1. vaihe: Luo lähdetiedosto

Aivan ensiksi on otettava kopio lähdetiedostosta, jotta siihen voidaan palata takaisin milloin tahansa:

```sh
cp /etc/network/interfaces /etc/network/interfaces.bak
```

#### 2. vaihe: Lähdetiedoston muokkaus

Voit nyt muokata lähdetiedostoa:

```sh
editor /etc/network/interfaces
```

Lisää seuraavaksi toissijainen käyttöliittymä:

```bash
auto eth0:0 iface eth0:0 inet static address IP_FAILOVER netmask 255.255.255.255
```

Varmistaaksesi, että toissijainen käyttöliittymä on aktivoitunut samalla kuin käyttöliittymä `eth0`, liitä seuraava rivi eth0-käyttöliittymän konfiguraatioon:

```bash
post-up /sbin/ifconfig eth0:0 IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER pre-down /sbin/ifconfig eth0:0 down
```

Jos sinulla on kaksi Fail-over IP -osoitetta konfiguroitavana, tiedoston /etc/network/interfaces tulee näyttää tältä:

```bash
auto eth0
iface eth0 inet static
address SERVER_IP
netmask 255.255.255.0
broadcast xxx.xxx.xxx.255
gateway xxx.xxx.xxx.254

auto eth0:0
iface eth0:0 inet static
address IP_FAILOVER1
netmask 255.255.255.255

auto eth0:1
iface eth0:1 inet static
address IP_FAILOVER2 netmask 255.255.255.255
```

```
# IPFO 1
post-up /sbin/ifconfig eth0:0 IP_FAILOVER1 netmask 255.255.255.255 broadcast IP_FAILOVER1 pre-down /sbin/ifconfig eth0:0 down

# IPFO 2
post-up /sbin/ifconfig eth0:1 IP_FAILOVER2 netmask 255.255.255.255 broadcast IP_FAILOVER2 pre-down /sbin/ifconfig eth0:1 down \`\`\`
```

#### 3. vaihe: Käyttöliittymän käynnistäminen uudelleen

Nyt on jäljellä enää käyttöliittymän uudelleenkäynnistäminen.

```sh
/etc/init.d/networking restart
```

### Debian 9+, Ubuntu 17+, Fedora 26+ ja Arch Linux

Näissä distribuutioissa käyttöliittymiä ei enää nimetä muodossa eth0, eth1 jne. vaan käytämme nyt yleisemmin `systemd-network`-järjestelmää.

#### 1. vaihe: Luo lähdetiedosto

Aivan ensiksi on otettava kopio lähdetiedostosta, jotta siihen voidaan palata takaisin milloin tahansa:

```sh
cp /etc/systemd/network/50-default.network /etc/systemd/network/50-default.network.bak
```

#### 2. vaihe: Lähdetiedoston muokkaus

Voit nyt lisätä lähdetiedostoon Fail-over IP -osoitteesi seuraavasti:

```sh
nano /etc/systemd/network/50-default.network
```

```sh
[Address]
Address=22.33.44.55/32
Label=failover1 # optional
```

Kohta “label” on valinnainen, sitä käytetään eri Fail-over IP -osoitteidesi jaottelussa.

#### 3. vaihe: Käyttöliittymän käynnistäminen uudelleen

Nyt on jäljellä enää käyttöliittymän uudelleenkäynnistäminen.

```sh
systemctl restart systemd-networkd
```


### CentOS ja Fedora (25 ja sitä aiemmat)

#### 1. vaihe: Luo lähdetiedosto

Aivan ensiksi on otettava kopio lähdetiedostosta, jotta siihen voidaan palata takaisin milloin tahansa:

```sh
cp /etc/sysconfig/network-scripts/ifcfg-eth0 /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

#### 2. vaihe: Lähdetiedoston muokkaus

Voit nyt muokata tiedostoa eth0:0 IP-osoitteen korvaamista varten:

```sh
editor /etc/sysconfig/network-scripts/ifcfg-eth0:0
```

Korvaa ensin laitteen nimi `Device` ja sitten olemassa oleva IP-osoite saamallasi Fail-over IP -osoitteella:

```bash
DEVICE="eth0:0" 
ONBOOT="yes" 
BOOTPROTO="none" # For CentOS use "static"
IPADDR="IP_FAILOVER" 
NETMASK="255.255.255.255" 
BROADCAST="IP_FAILOVER"
```

#### 3. vaihe: Käyttöliittymän käynnistäminen uudelleen

Nyt on jäljellä enää käyttöliittymän uudelleenkäynnistäminen.

```sh
ifup eth0:0
```


### Gentoo

#### 1. vaihe: Luo lähdetiedosto

Aivan ensiksi on otettava kopio lähdetiedostosta, jotta siihen voidaan palata takaisin milloin tahansa:

```sh
cp /etc/conf.d/net /etc/conf.d/net.bak
```

#### 2. vaihe: Lähdetiedoston muokkaus

Tiedostoa täytyy nyt muokata Fail-over IP -osoitteen lisäämistä varten. Gentoo-järjestelmässä alias lisätään automaattisesti eht0-käyttöliittymään. Emme luo eth0:0-käyttöliittymää kuten Red Hat - tai CentOS-järjestelmissä.

> [!warning]
>
> Palvelimen oletuksena olevan IP-osoitteen on pysyttävä samalla rivillä kuin config\_eth0=. Tämä takaa tiettyjen OVH:n menettelyjen hyvän toiminnan.
> 

Sinun täytyy vain palata kohdan netmask **255.255.255.0** jälkeiselle riville ja lisätä sinne Fail-over IP -osoitteesi (SERVER\_IP on korvattava palvelimesi pääasiallisella IP-osoitteella).

```sh
editor /etc/conf.d/net
```

Lisää sitten tämä:

```bash
config_eth0=( "SERVER_IP netmask 255.255.255.0" "IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" )
```

Tiedoston /etc/conf.d/net tulee sisältää seuraavaa:


```bash
#This blank configuration will automatically use DHCP for any net.
# scripts in /etc/init.d. To create a more complete configuration,
# please review /etc/conf.d/net.example and save your configuration
# in /etc/conf.d/net (this file :]!).
config\_eth0=( "SERVER\_IP netmask 255.255.255.0"
"IP_FAILOVER netmask 255.255.255.255 brd IP_FAILOVER" )
routes\_eth0=( "default gw SERVER\_IP.254" )
```

Tehdäksesi ping-testin Fail-over IP -osoitteellesi sinun tarvitsee vain käynnistää käyttöliittymä uudelleen.


#### 3. vaihe: Käyttöliittymän käynnistäminen uudelleen

Nyt on jäljellä enää käyttöliittymän uudelleenkäynnistäminen.

```sh
/etc/init.d/net.eth0 restart
```


### openSUSE

#### 1. vaihe: Luo lähdetiedosto

Aivan ensiksi on otettava kopio lähdetiedostosta, jotta siihen voidaan palata takaisin milloin tahansa:

```sh
cp /etc/sysconfig/network/ifcfg-ens32 /etc/sysconfig/network/ifcfg-ens32.bak
```

#### 2. vaihe: Lähdetiedoston muokkaus

Seuraavaksi tiedostoa /etc/sysconfig/network/ifcfg-ens32 on muokattava näin:

```bash
IPADDR_1=IP_FAILOVER NETMASK_1=255.255.255.255 LABEL_1=ens32:0
```


### cPanel

#### 1. vaihe: Luo lähdetiedosto

Aivan ensiksi on otettava kopio lähdetiedostosta, jotta siihen voidaan palata takaisin milloin tahansa:

```sh
cp /etc/ips /etc/ips.bak
```

#### 2. vaihe: Lähdetiedoston muokkaus

Seuraavaksi täytyy muokata tiedostoa /etc/ips:

```sh
editor /etc/ips
```

Lisää sitten Fail-over IP -osoite tiedostoon:

```bash
IP_FAILOVER:255.255.255.255:IP_FAILOVER
```

ja lisää sitten IP-osoite kohtaan `/etc/ipaddrpool`:

```bash
IP_FAILOVER
```

#### 3. vaihe: Palvelun uudelleenkäynnistäminen

Nyt on jäljellä enää käyttöliittymän uudelleenkäynnistäminen.

```sh
/etc/init.d/ipaliases restart
```

### Windows Server

Windows-palvelimet ovat usein verkkokonfiguraation tasolla DHCP-protokollassa. Jos olet jo määrittänyt Fail-over IP -osoitteen tai vaihtanut konfiguraatioon kiinteällä IP-osoitteella, voit hypätä suoraan seuraavaan vaiheeseen.

Jos näin ei ole, täytyy ensin vaihtaa verkon tasolla olevasta DHCP-konfiguraatiosta kiinteään IP-konfiguraatioon.

Avaa komentorivi `cmd`{.action} tai `powershell`{.action} ja naputtele sitten seuraava komento:

```sh
ipconfig /all
```

Saat vastaukseksi esimerkiksi seuraavaa:

![Result of "ipconfig /all" command](images/guides-network-ipaliasing-windows-2008-1.png){.thumbnail}

Poimi ja merkitse muistiin nyt IPv4-osoitteesi, aliverkon peite, oletuskäytävä sekä verkkokortin nimi. 

Esimerkissämme palvelimen IP-osoite on: **94.23.229.151**


Voit suorittaa seuraavat vaiheet komentorivin kautta tai graafisessa käyttöliittymässä:

#### Komentorivillä (suositeltu):

Alla olevissa komennoissa on korvattava:

|Komento|Arvo|
|---|---|
|NETWORK_ADAPTER| Verkkokortin nimi (esimerkissämme Local Area Connection)|
|IP_ADDRESS| Palvelimen IP-osoite (esimerkissämme 94.23.229.151)|
|SUBNET_MASK| Aliverkon peite (esimerkissämme 255.255.255.0)|
|GATEWAY| Oletuskäytävä (esimerkissämme 94.23.229.254)|
|IP_ADDRESS_FAILOVER| Fail-over IP -osoite, jonka haluat lisätä|

> [!warning]
>
> Huomio, palvelimelle ei enää pääse, jos annetut tiedot ovat virheellisiä. Tällöin sinun on tehtävä korjaukset Winrescue-tilassa tai KVM-konsolin kautta.
> 

Komentorivillä:

1. Siirry kiinteään IP-osoitteeseen

```sh
netsh interface ipv4 set address name="NETWORK_ADAPTER" static IP_ADDRESS SUBNET_MASK GATEWAY
```
 
2. Määritä nimipalvelin

```sh
netsh interface ipv4 set dns name="NETWORK_ADAPTER" static 213.186.33.99
``` 

3. Lisää Fail-over IP -osoite

```sh
netsh interface ipv4 add address "NETWORK_ADAPTER" IP_ADDRESS_FAILOVER 255.255.255.255
```

Fail-over IP -osoitteesi on nyt toiminnassa.


#### Graafisen käyttöliittymän kautta

1. Mene valikkoon `Käynnistä`{.action} > `Ohjauspaneeli`{.action} > `Verkko ja Internet`{.action} > `Verkkokeskus ja Jakaminen`{.action} > `Muokkaa kortin asetuksia`{.action} (vasemmalla olevassa valikossa).
2. Klikkaa hiiren oikeaa näppäintä kohdassa `Paikallisverkkoyhteys`{.action}.
3. Klikkaa kohtaa `Ominaisuudet`{.action}.
4. Valitse `Internet Protokolla Versio 4 (TCP/IPv4)`{.action} ja klikkaa sitten `Ominaisuudet`{.action}.
5. Klikkaa `Käytä seuraavaa IP-osoitetta`{.action} ja syötä palvelimesi pääasiallinen IP-osoite, aliverkon peite ja oletuskäytävä, jotka sait käyttämällä yllä olevaa `ipconfig`{.action}-komentoa. (Syötä halutuksi nimipalvelimeksi 213.186.33.99.)

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}


> [!warning]
>
> Huomio, palvelimelle ei enää pääse, jos annetut tiedot ovat virheellisiä. Tällöin sinun on tehtävä korjaukset Winrescue-tilassa tai KVM-konsolin kautta.
> 

Klikkaa sitten kohtaa `Edistynyt`{.action} (edelleen kohdassa `TCP/IP-asetukset`{.action\`).

![Internet Protocol Version 4 (TCP/IPv4) Properties](images/guides-network-ipaliasing-windows-2008-2.png){.thumbnail}

Klikkaa osiossa `IP-osoite`{.action} kohtaa `Lisää`{.action}:

![Advanced TCP/IPv4 Settings](images/guides-network-ipaliasing-windows-2008-3.png){.thumbnail}

Syötä nyt Fail-over IP -osoitteesi sekä aliverkon peite **255.255.255.255**.

![TCP/IP Address](images/guides-network-ipaliasing-windows-2008-4.png){.thumbnail}

Klikkaa kohtaa `Lisää`{.action}.

Fail-over IP -osoitteesi on nyt toiminnassa.


### FreeBSD

#### 1. vaihe: Käyttöliittymän määritys

Määritä pääasiallisen verkkokäyttöliittymäsi nimi. Voit käyttää tähän toimenpiteeseen komentoa `ifconfig`{.action}:

```sh
ifconfig
```

Saat tuloksesi seuraavan:

```sh
ifconfig
>>> nfe0: flags=8843 metric 0 mtu 1500
>>> options=10b
>>> ether 00:24:8c:d7:ba:11 
>>> inet 94.23.196.18 netmask 0xffffff00 broadcast 94.23.196.255
>>> inet 87.98.129.74 netmask 0xffffffff broadcast 87.98.129.74
>>> media: Ethernet autoselect (100baseTX )
>>> status: active 
>>> lo0: flags=8049 metric 0 mtu 16384 
>>> options=3 
>>> inet6 fe80::1%lo0 prefixlen 64 scopeid 0x2 
>>> inet6 ::1 prefixlen 128 inet 127.0.0.1 netmask 0xff000000 v comsdvt#
```

Käyttöliittymän nimi on siis **nfe0** tässä esimerkissä.


#### 2. vaihe: Lähdetiedoston luominen 

Aivan ensiksi on otettava kopio lähdetiedostosta, jotta siihen voidaan palata takaisin milloin tahansa:

```sh
cp /etc/rc.conf /etc/rc.conf.bak
```

#### 3. vaihe: Lähdetiedoston muokkaus 

Muokkaa tiedostoa /etc/rc.conf :

```sh
editor /etc/rc.conf
```

Lisää sitten tämä rivi tiedoston loppuun: ifconfig\_INTERFACE\_alias0=`inet IP_FAILOVER netmask 255.255.255.255 broadcast IP_FAILOVER`.

Korvaa samoin **INTERFAXW** ja **IP_FAILOVER** käyttöliittymäsi nimellä (tunnistettu ensimmäisessä vaiheessa) sekä Fail-over IP -osoitteellasi. Tässä esimerkki:


```bash
ifconfig_nfe0_alias0="inet 87.98.129.74 netmask 255.255.255.255 broadcast 87.98.129.74"
```

#### 4. vaihe: Käyttöliittymän käynnistäminen uudelleen

Nyt on jäljellä enää käyttöliittymän uudelleenkäynnistäminen.

```sh
/etc/rc.d/netif restart && /etc/rc.d/routing restart
```

### Solaris

#### 1. vaihe: Käyttöliittymän määritys

Määritä pääasiallisen verkkokäyttöliittymäsi nimi. Voit käyttää tähän toimenpiteeseen komentoa `ifconfig`{.action}:

```sh
ifconfig -a
```

Saat tuloksesi seuraavan:

```sh ifconfig -a
>>> lo0: flags=2001000849 mtu 8232 index 1 inet 127.0.0.1 netmask ff000000 e1000g0: flags=1000843 mtu 1500
index 2 inet 94.23.41.167 netmask ffffff00 broadcast 94.23.41.255 ether 0:1c:c0:f2:be:42
```

Käyttöliittymän nimi on siis tässä esimerkissä **e1000g0**.


#### 2. vaihe: Lähdetiedoston luominen 

Aivan ensiksi on otettava kopio lähdetiedostosta, jotta siihen voidaan palata takaisin milloin tahansa:

```sh
editor /etc/hostname.e1000g0:1
```

#### 3. vaihe: Lähdetiedoston muokkaus 

Syötä tähän tiedostoon seuraavasti: **IP_FAILOVER/32 up**, jossa **IP_FAILOVER** vastaa Fail-over IP -osoitettasi. Esimerkiksi:

```bash
188.165.171.40/32 up
```

#### 4. vaihe: Käyttöliittymän käynnistäminen uudelleen

Nyt on jäljellä enää käyttöliittymän uudelleenkäynnistäminen.

```sh
svcadm restart svc:/network/physical:default 
```

## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.