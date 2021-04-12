---
deprecated: true
title: OVH:n SSH-avaimen asennus 
slug: ovh-ssh-key 
excerpt: Tässä ohjeessa kerrotaan, kuinka asennetaan administraattoriemme interventiot mahdollistava SSH-avain sekä kuinka se kytketään myöhemmin pois päältä 
section: SSH ja SSH-avain
---

**Päivitetty 12.04.2021**

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
echo 'from="178.33.222.162,217.182.145.216,217.182.145.217,217.182.145.218,217.182.145.219,217.182.145.220,217.182.145.221,217.182.145.222,217.182.145.223" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQDRpA0gxYQAL4HnRrFDlKsfjy6nEihOBsg6dgwR+mYee7nhTaCUqKXIlh3aJaRsiZcx4Uapq8f8NiU0g+SGWxCSbv7v4wbHfTX+brSJ+28bSUXp3B08iIcAiZgXIOBS+r++W1yJYUJRuMV934rmAvbyRhkr6rqZLp0Mr73AKnKlxR/UzN0VyA5JCXQPLAoYkm505WbwCjLKZowDobwpjx0968zkctYCpCxvJ3Wr8f0qEVtwMHawsgv1wmJuIF7689LA7U0i2yXaPrtwPdjWZsrc5YSUZL8JQTDW4PnQLiYild+YKcMMHp12bQKNvJgBStHsLlxx0hCRYoiYdMFuN0f951Vc16EmHH+7qgwCIGeeD7npyhdUevwxlY2IAEka3udOBM0t2koQlGIGckBJlAgL/W2flrvz1noSwIii6HX836lLj80djm4W0LhXu8M+nlQvDE7549srqB3+rDJ18po79+btEHirH/vfkB+X9rFd6hyHX27cygs2TpHIt+OmKkt9UB8gQy6tHX/OK2BR5v9ToBprPNAs2d/iH/K2mpJ0jHFI3FrCg9sqkz/lPwAl8bjCPZiUKU5+o+0O81MSNwqbQBl042n0Sqq9LxWP9TzxHT1GyE4LoV9NR4VHppkn+P22JO3o6B12Q5//pUgrw+VtpArwDdonc7SLQ26uR9nabw== support@cache-ng' >> /root/.ssh/authorized_keys2
```

- Jos palvelintasi ylläpidetään Kanadassa:

```sh
echo 'from="8.33.137.120,149.56.85.250" ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAACAQCeVpuVqIrd2HNadlwPmZ0LkWYVaR7WRQgTWXiv2XMJJE1VRW75KiVpUzBpBDN/yorzG6bhzAdo46aNi0aD5OqFJJnj66ZWULRDIErpxXx5gJpbMJlaGNpiwJgbyahFFSpttu5vleGSkQNcNQ6r7tsdNYA4aSkGKiJ7QeCXF/26rwPTpgEI/Dv6z0sX73r2Yojlm4eX328XieSxzOCoMbPnK4hUbJMffTiVDj48LjLVUHA303tF6cSuVkuzlId67i/Y0KHkevO7vuycTNTvzZHD70IRlmFVo3cV5yTENhGgYwHK8CWavGI/HIOlxeS/HQ0nV+dUoZXqZTJi0MFIEFF3LPQbu9PNLGhjhKddZceGGmDkmendVjIwvq4qGMsWhlqcEbbRUEqDNUG+ZQK9QLuePWRe7P5jV0ubpZ9ndguOpY2hUZqUjORQk9+gdaPkVwBOMGvOE61LaTsRW3FXEaEiRWKqaqM6Xfn4qVi8Y2DVQU3ue8EKDmTT95rOCR1KxhdSPbcDAmvUSRaEoYa1zFKo22rUUn6IVLVfR/22V6r3Dtj/J2ILj0bAPmeeR7jpIZS5CjDl3F0bIUwm8LJNuEPJG/ZRmMT4GEUUG1enpyWiZuAHHrE2Dz0kzIkFPd/WTldjthHvkVWW1iukT2iTuqdnV9H9XDVVfcl6eOiPflYXvw== support@cache-ng-ca' >> /root/.ssh/authorized_keys2

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
