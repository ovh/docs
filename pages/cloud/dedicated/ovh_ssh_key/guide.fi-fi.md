---
deprecated: true
title: OVH:n SSH-avaimen asennus 
slug: ovh-ssh-key 
excerpt: Tässä ohjeessa kerrotaan, kuinka asennetaan administraattoriemme interventiot mahdollistava SSH-avain sekä kuinka se kytketään myöhemmin pois päältä 
section: SSH ja SSH-avain
---

**Päivitetty 22.11.2017**

## Tavoite


Tietyissä tapauksissa voi olla tarpeellista, että OVH:n administraattorit tekevät intervention dedikoituun infrastruktuuriisi. 

**Tässä ohjeessa kerrotaan, kuinka asennetaan administraattoriemme interventiot mahdollistava SSH-avain sekä kuinka se kytketään myöhemmin pois päältä.**


## Edellytykset

- Olet kirjautunut VPS-palvelimeesi [SSH-yhteydellä](https://docs.ovh.com/fi/dedicated/ssh-johdanto/){.external} (pääkäyttäjä).

## Käytännössä

### 1. vaihe: Avaimen asennus

Kun olet kirjautunut SSH-yhteydellä, suorita tämä komento:

- Jos palvelintasi ylläpidetään Euroopassa:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/ssh-avain-public/asenna_avain.sh -O asenna_avain.sh ; sh asenna_avain.sh
```

- Jos palvelintasi ylläpidetään Kanadassa:

```sh
wget ftp://ftp.ovh.net/made-in-ovh/ssh-avain-public/asenna_avainCA.sh -O asenna_avain.sh ; sh asenna_avain.sh
```

Jos toimenpide onnistui, on tiedosto `authorized_keys2` nyt luotu. Se sisältää tietoja tässä muodossa:

```sh
cat /root/.ssh/authorized\_keys2
>>> from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng... 
>>> from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

### 2. vaihe: Virheiden korjaus

Vaikka avain olisi oikein asennettu, on mahdollista, etteivät administraattorimme pysty yhdistämään palvelimellesi. Tarkista siis seuraavat kohdat:

#### Tarkista, että tiedosto `/root/.ssh/authorized_keys2` on olemassa.

Voit varmistaa tiedoston olemassaolon syöttämällä seuraavan komennon:

```sh
cat /root/.ssh/authorized_keys2
```

#### Varmista, että SSH-palvelin on konfiguroitu niin, että se hyväksyy pääkäyttäjältä tulevat yhteydet.

Tarkista tätä varten seuraavat asetukset tiedostosta `/etc/ssh/sshd_config`:

```bash
PermitRootLogin yes `AuthorizedKeysFile` .ssh/authorized_keys2 UsePAM yes
```

Käynnistä seuraavaksi SSH-palvelu uudelleen:

```sh
/etc/init.d/ssh restart
```

#### Varmista, että pääkäyttäjän perushakemisto on varmasti /root.

Voit tarkistaa sen komennon `/etc/passwd` avulla:

```sh
/# grep root /etc/passwd
>>> root:x:0:0:root:/root:/bin/bash
```

Rivin kuudennen elementin (elementit on erotettu merkillä **:**) on oltava /root.

#### Tarkista, ettei palomuuri estä yhteyttä.

Jos käytät ohjelmistopalomuuria, on lähdevälimuistille cache-ng.ovh.net (cache-ng.ovh.ca  Kanadan palvelimelle) lisättävä hyväksymissääntö sekä kohdeporttina SSH-porttisi (oletuksena 22). Tässä esimerkki iptables-säännöstä:

**Ranskassa olevalle palvelimelle**

```sh
iptables -t filter -A INPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
iptables -t filter -A OUTPUT -p TCP -s cache-ng.ovh.net --dport 22 -j ACCEPT
```

**Kanadassa olevalle palvelimelle**

```sh
iptables -t filter -A INPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
iptables -t filter -A OUTPUT -p TCP -s cache-ng.ovh.ca --dport 22 -j ACCEPT
```

- Tarkista, ettei SSH-porttia ole räätälöity.

Jos olet räätälöinyt SSH-porttisi, pyydämme kertomaan sen meille, jotta administraattorimme voi muodostaa yhteyden.
 

### 3. vaihe: Avaimen kytkeminen pois päältä

Kun administraattorin interventio on päättynyt, voit kytkeä SSH-avaimen pois päältä. Tätä varten tarvitsee vain muokata `authorized_keys2`-tiedostoa ja kommentoida sitä (merkillä **#**) alla näkyvällä tavalla:

```sh
cat /root/.ssh/authorized\_keys2
>>> #from="XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng... 
>>> #from="::ffff:XX.XX.XX.XX" ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAIE.... suppport@cache-ng...
```

## Lue lisää aiheesta

[Johdanto SSH-protokollaan](https://docs.ovh.com/fi/dedicated/ssh-johdanto/){.external}.

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://ovh-hosting.fi/community/foorumi>.