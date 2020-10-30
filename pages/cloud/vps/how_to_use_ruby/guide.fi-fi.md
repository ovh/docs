---
title: Rubyn käyttö
excerpt: Yleistä tietoa Ruby-distribuutiosta
slug: rubyn_kaytto
legacy_guide_number: g1370
hidden: true
---


## 
Ruby-distribuution luomisen aikana halusimme pysytellä niin lähellä alkuperäistä asennusta kuin mahdollista. Voit sen ansiosta vapaasti muokata virtuaalipalvelintasi.
Asensimme kirjastot mitä tarvitset asennukseen/kääntämiseen rybygemsillä ja RybyOnRailsin kanssa.

VPS sisältää seuraavat ominaisuudet:

- Debian Wheezy
- Rbenv (mahdollistaa haluamasi Ruby-version käytön)
- Passenger (Apache tai Nginx)
- Tietokantapalvelin (MySQL, PostgreSQL tai MongoDB)




## 
root: yleisiin hallintatehtäviin (päivitykset, tietokantojen luomiset, jne...).
webmaster: sovellusten hallintaa varten (Rybun asennus, ohjelmistokehitys, jne...)


## 
Haluamasi Ruby-versio asennetaan rbenv-sovelluksen kautta käyttäjälle 'webmaster' ja 'Passenger'. Muu osa järjestelmää käyttää Debian Wheezyn mukana toimitettavaa Rubyä (versio 1.9.3p194 tämän ohjeen kirjoittamisen aikaan).

Ruby-version muuttaminen tapahtuu kirjautumalla webmasterina ja syöttämällä seuraavat komennot:

```
rbenv update (päivittää rbenv:n ja sen lisäosat)
rbenv install --list (tällä näet käytettävät Ruby-versiot)
rbenv install
rbenv global
```




## 
Passenger asennettiin Phusionin virallisista pakettivarastoista. Käytössäsi on siis viimeinen vakaa versio Phusion Passenger -sovelluksesta. Se käyttää webmasterin kanssa samaa Rubyn versiota.

VPS toimitetaan oletuksena VirtualHost-oletusnimellä (vpsXXXXX.ovh.net).
Voit käyttää sitä suoraan sijoittamalla sovellukset hakemiston /var/www/vpsXXXXXX.ovh.net alle.

Voit toki myös muokata palvelinta tarpeidesi mukaan.

Passengerin tilan ja muistin käytön näet seuraavilla komennoilla:

```
passenger-status (root)
passenger-memory-stats (root)
```




## 
Apachen konfigurointitiedostot löytyvät hakemistosta /etc/apache2/sites-enabled/vpsXXXXX.ovh.net.

Uudelleenkäynnistääksesi Apachen, syötä seuraava komento root-käyttäjänä: 
```
service apache2 restart
```

Uudelleenkännistääksesi vain sovelluksen, syötä seuraava komento webmaster-käyttäjänä: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt
```


Passengerin lisätiedot löydät
[tämän linkin](http://www.modrails.com/documentation/Users%20guide%20Apache.html) kautta.


## 
Sovelluksen asetukset sijaitsevat seuraavassa hakemistossa:

/etc/nginx/sites-enabled/vpsXXXXX.ovh.net

Uudelleenkäynnistääksesi Nvingxin, syötä seuraava komento root-käyttäjänä: 
```
service nginx restart
```

Uudelleenkäynnistääksesi ainoastaan sovelluksen, syötä seuraava komento webmaster-käyttäjänä: 
```
touch /var/www/vpsXXXXX.ovh.net/tmp/restart.txt
```


NginXin lisätiedot löydät [tämän linkin](http://www.modrails.com/documentation/Users%20guide%20Nginx.html) kautta.


## 
Tietokantasi asennettiin oletusasetuksin ja on konfiguroitu käytettäväksi ainoastaan virtuaalipalvelimeltasi.

