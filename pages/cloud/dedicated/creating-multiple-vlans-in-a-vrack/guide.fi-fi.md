---
deprecated: true
title: 'Useiden VLAN-yhteyksien luominen virtuaaliräkissä'
slug: vlanin-luominen-vrack
excerpt: 'Katso, kuinka luodaan useita VLAN-yhteyksiä virtuaaliräkissä'
section: vRack
---

**Päivitetty 27.9.2018**

## Tavoite

[Virtuaaliräkin peruskonfiguraatio](https://docs.ovh.com/fi/dedicated/usean-dedikoidun-palvelimen-konfigurointi-vrack/){.external} mahdollistaa vain yhden VLAN-yhteyden luomisen. Tämä tarkoittaa sitä, että voit käyttää jokaista IP-osoitetta vain kerran. Virtuaaliräkin konfiguraation versiolla 2.0 voit kuitenkin luoda jopa 4000 paikallista virtuaaliverkkoa saman virtuaaliräkin sisällä. Tämä tarkoittaa sitä, että voit käyttää jokaista IP-osoitetta 4000 kertaa.

**Tässä ohjeessa kerrotaan, kuinka luodaan useita VLAN-yhteyksiä virtuaaliräkissä.**


## Edellytykset

- Yksi tai useampi virtuaaliräkin kanssa yhteensopiva [dedikoitu palvelin](https://www.ovh-hosting.fi/dedikoidut_palvelimet/){.external}.
- [vRack](https://www.ovh-hosting.fi/ratkaisut/vrack/){.external}-palvelu on aktivoituna.
- Pääsy valittuun yksityiseen IP-osoitealueeseen.
- Sinulla on SSH-yhteys pääkäyttäjän tunnuksella (Linux).
- Olet kirjautunut administraattorin tilillä (Windows).
- Olet viimeistellyt [virtuaaliräkin konfiguroinnin](https://docs.ovh.com/fi/dedicated/usean-dedikoidun-palvelimen-konfigurointi-vrack/){.external}.


## Käytännössä

### Linuxilla

> [!primary]
>
> Käytämme tässä esimerkissä verkkokäyttöliittymää `eth1`, VLAN etikettinä on **10** ja IP-osoitealueena **192.168.0.0/16. 
>
> Kaikkia komentoja on mukautettava käytetyn distribuution mukaan. Epäselvissä tapauksissa katso distribuutiosi virallista dokumentaatiota.
>

Ensiksi palvelimellesi on asennettava “VLAN”-paketti. Käytä sitä varten seuraavaa komentoa:

```sh
sudo apt-get install vlan
```

Seuraavaksi on luotava VLAN-tunniste, jonka avulla voit erottaa useita VLAN-yhteyksiä toisistaan:

```sh
vconfig add eth1 10

Added vlan with VID == 10 to IF -:eth1:-
```

Tämän jälkeen on varattava IP-osoitealue virtuaaliräkissä ja merkittävä se tunnisteellasi. Voit tehdä sen näppäilemällä seuraavan komennon:

```sh
ip addr add 192.168.0.0/16 dev eth1.10
```

Lopuksi jäljellä on verkkokäyttöliittymän konfiguraation muokkaaminen, jotta se osaa huomioida VLANin tunnisteen. Avaa tätä kohtaa varten verkkokäyttöliittymäsi konfigurointitiedosto ja muokkaa sitä alla näkyvällä tavalla:

```sh
sudo /etc/network/interfaces

auto eth1.10
iface eth1 inet static
address 192.168.0.50
netmask 255.255.0.0
broadcast 192.168.255.255
```

### Windows-käyttöjärjestelmässä

Kirjaudu palvelimellesi etätyöpöydän kautta ja avaa “Server Manager” -sovellus. Valitse sitten `Local Server`{.action}, klikkaa linkkiä `Disabled`{.action} kohdan **NIC Teaming** vieressä:

![Windows VLAN](images/vrack2-windows-01.png){.thumbnail}

Luo tämän jälkeen uusi ryhmä valitsemalla verkkokäyttöliittymä ja näpyttelemällä ryhmän nimi kenttään **Team name**. Kun olet valmis, vahvista painikkeella `OK`{.action}:

![Windows VLAN](images/vrack2-windows-02.png){.thumbnail}

Seuraavaksi on tarkennettava VLANin tunniste. “**Adapters and Interfaces**” -paneelissa **NIC Teaming** -osion näytöllä klikkaa hiiren oikeaa painiketta ryhmään lisäämäsi käyttöliittymän kohdalla ja klikkaa sitten `Properties`{.action}. Klikkaa nyt kohtaa `Specific VLAN`{.action} ja anna tunniste:

![Windows VLAN](images/vrack2-windows-03.png){.thumbnail}

Nyt on konfiguroitava VLANin IP-osoite. Klikkaa aloitusvalikon painiketta `Start`{.action} ja sitten `Control Panel`{.action}:

![Windows VLAN](images/vrack2-windows-04.png){.thumbnail}

Klikkaa kohtaa `Network and Internet`{.action}:

![Windows VLAN](images/vrack2-windows-05.png){.thumbnail}

Klikkaa sitten kohtaa `Network and Sharing Centre`{.action}:

![Windows VLAN](images/vrack2-windows-06.png){.thumbnail}

Klikkaa nyt `Muokkaa adaptorin asetuksia`{.action}:

![Windows VLAN](images/vrack2-windows-07.png){.thumbnail}

Klikkaa tämän jälkeen hiiren oikeaa painiketta VLAN-käyttöliittymän kohdalla ja klikkaa sitten `Properties`{.action}:

![Windows VLAN](images/vrack2-windows-08.png){.thumbnail}

Tee kaksoisklikkaus kohdassa `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}:

![Windows VLAN](images/vrack2-windows-09.png){.thumbnail}

Klikkaa seuraavassa kohdassa `Use the following IP address`{.action}. Syötä kohtaan “**IP address**” yksi sisäisen IP-alueesi osoitteista. Kohtaan “**Subnet mask**” naputtele “255.255.0.0”

![Windows VLAN](images/vrack2-windows-10.png){.thumbnail}

Klikkaa lopuksi painiketta `OK`{.action} muokkausten tallentamiseksi ja palvelimen uudelleenkäynnistämiseksi.

## Lue lisää aiheesta

[Usean dedikoidun palvelimen konfigurointi virtuaaliräkissä](https://docs.ovh.com/fi/dedicated/usean-dedikoidun-palvelimen-konfigurointi-vrack/){.external}

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://community.ovh.com/en/>.