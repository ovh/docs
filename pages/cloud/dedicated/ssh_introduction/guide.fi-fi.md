---
deprecated: true
title: Johdanto SSH-protokollaan
slug: ssh-johdanto
excerpt: Lue tästä kuinka voit käyttää SSH-palvelua palvelimelle kirjautumisessa.
section: SSH ja SSH-avain
order: 1
---

**Päivitetty 07.12.2017**

## Tavoite

Salattuun tietoliikenteeseen tarkoitettu SSH-protokolla (Secure Shell) on asennettuna natiivisti kaikkiin OVH:n palvelimiin (VPS, dedikoidut palvelimet ja Public Cloud -instanssit). 

**Lue tästä kuinka voit käyttää SSH-palvelua palvelimelle kirjautumisessa.**

## Edellytykset

- SSH on asennettuna kaikissa koneissa. Sen avulla voit kirjautua suojatusti palvelimellesi ja hallita sitä täysin.


## Käytännössä

### Yhteensopivat ohjelmistot

SSH-yhteyden sallivia ohjelmistoja on olemassa lukuisia. Tässä avuksi muutamia esimerkkejä.

#### Windows-käyttöjärjestelmässä

- [Putty](http://www.putty.org/){.external} (ilmainen)
- [MobaXterm](https://mobaxterm.mobatek.net/) (ilmainen ja maksullinen versio)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (maksullinen)

Viimeisimmissä Windows 10 ja Windows Server -versioissa on mahdollista yhdistää bash-konsoliin kehittäjätilan kautta. Tässä linkki Microsoftin dokumentaatioon: <https://msdn.microsoft.com/fi-fi/commandline/wsl/install-win10>.

#### Mac-käyttöjärjestelmässä

- `Terminal`{.action} -työkalu toimitetaan Mac OS X -järjestelmän mukana ja asennetaan systemaattisesti koneelle.


#### Linuxilla

- Natiivisti asennettuja `Console`{.action} - tai `Terminal`{.action} -työkaluja voidaan käyttää yhdistämiseen. 
- Useiden välilehtien hallintaan on mahdollista asentaa `Terminator`-paketti. Voit katsoa siitä esittelyn Ubuntun käyttöohjeessa: <http://manpages.ubuntu.com/manpages/zesty/man1/terminator.1.html>
- [OpenSSH](http://www.openssh.com){.external} (Ilmainen).


### SSH-yhdistämisen vaiheet

#### 1. vaihe: Ensimmäinen kirjautuminen

Tarvitset kaksi tietoa, jotta voit kirjautua koneelle SSH-yhteydellä:

- IPv4 tai koneen nimi
- koneen pääkäyttäjän salasana (saatu sähköpostitse asennuksen yhteydessä)


Yhdistäminen tapahtuu seuraavalla komennolla:


```sh
ssh root@palvelimen_IP
```

Tai: 

```sh
ssh root@palvelimen_nimi
```

Saat tällöin seuraavan viestin:

```sh
The authenticity of host servername (palvelimen_IP) cant be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername,palvelimen_IP (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

Kun yhdistät ensimmäistä kertaa, SSH-asiakasohjelma vastaanottaa RSA-salausavaimen, joka vastaa palvelinta, jolle olet kirjautumassa. Se tarkistetaan joka kirjautumiskerralla. Mikäli avain vaihtuu, saat siitä ilmoituksen ja se tarkoittaa, että jotakin on muuttunut:

- kone on uudelleenasennettu
- SSH-palvelin on uudelleenasennettu
- tai olet kirjautumassa toiselle koneelle.

Ensimmäisen kirjautumisen yhteydessä on hyväksyttävä avain, jonka SSH-asiakasohjelmasi tallentaa sitten työpisteellesi.


#### 2. vaihe: Ohjekirja

Linux-distribuutioissa saat ohjekirjan, jossa kerrotaan kaikki mahdolliset komennot sekä niiden argumentit.

```sh
man bash
```

#### 3. vaihe: Päivitys

SSH-asiakasohjelmasi on oltava aina ajan tasalla distribuutiosi kanssa. Voit tarkistaa asian näppäilemällä seuraavan komennon: 

```sh
ssh -V
```

Mikäli jotakin jäi epäselväksi käänny käyttämäsi SSH-asiakasohjelman dokumentaation puoleen.


## Lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa <https://ovh-hosting.fi/community/foorumi>.
