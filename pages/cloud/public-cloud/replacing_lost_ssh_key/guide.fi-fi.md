---
title: Kadonneen SSH-avaimen vaihtaminen
excerpt: Kadonneen SSH-avaimen vaihtaminen
slug: kadonneen_ssh-avaimen_vaihtaminen
legacy_guide_number: g2069
---


## 
Mikäli SSH-avain katoaa, on mahdollista ettet pääse enää kirjautumaan instanssiisi, jos et ole konfiguroinut mitään vaihtoehtoista kirjautumistapaa.

Jotta voit taas kirjautua, on mahdollista käyttää rescue-tilaa, jonka avulla voit kirjautua salasanalla ja sitten muuttaa tiedostot.

Tässä ohjeessa kerrotaan kuinka adminkäyttäjän tiedoston authorized_keys voi konfiguroida niin että voit lisätä uuden SSH-avaimen ja palauttaa pääsyoikeutesi instanssiisi.


## Vaatimukset

- [SSH-Avaimen luominen]({legacy}1769)
- [Instannsin laittaminen pelastustilaan]({legacy}2029)




## 
Kun olet alustanut instanssisi levyn rescue-tilaan, voit päästä kaikkiin tiedostoihisi.

SSH-avaimen sisältävä tiedosto on:


```
/home/NOM_UTILISATEUR/.ssh/authorized_keys
```


Mikäli haluat lisätä uuden SSH-avaimen, täytyy vain muokata tiedostoa ja lisätä sinne uusi avain:

ssh-rsa 1111111111122222222222333333333333444444444555555555556666666666
777777777778888888888999999900000000000000000000000000== old@sshkey
ssh-rsa AAAAAAAAABBBBBBBBBBBCCCCCCCCCCCCCCCCDDDDDDDDDDDDDDDDDDDEEEEEEEEE
EEFFFFFFFFFFFFFGGGGGGGGGGGGGhhhhhhhhhhhhhhhhhhhhhhhhhh== new@sshkey
[/code]

## Tietoa:
Oletuskäyttäjän SSH-avaimen muokkaamiseksi riittää, että menet yksinkertaisesi käyttäjän henkilökohtaiseen kansioon.

Esimerkiksi käyttäjän admin tiedosto löytyy kansiosta:


```
/home/admin/.ssh/authorized_keys
```


Ubuntu 15.10 instanssissa oletuskäyttäjä on ubuntu ja tiedosto on siis kansiossa:



```
/home/ubuntu/.ssh/authorized_keys
```



## Hyvä tietää:
Oletuskäyttäjän salasanaa voi myös muokata käyttämällä rescue-tilaa ja seuraavia komentoja (silloin kun käyttäjä on admin):


- Juurihakemistoa muutetaan, jotta siirrytään suoraan instanssin levylle:


```
root@instance:/home/admin# mount /dev/vdb1 /mnt/
root@instance:/home/admin# chroot /mnt/
```



- admin Salasana muutetaan: 
```
root@instance:/# passwd admin
```




Kun muutos on tehty ja tallennettu, täytyy enää käynnistää levyn instanssi uudestaan. Tämän jälkeen voit kirjautua instanssiin uudella SSH-avaimella.


## 

- [Ylimääräisten SSH-avainten konfigurointi]({legacy}1924)
- [Root ja salasanan määrittäminen]({legacy}1786)




## 
[Palaa Cloud-ohjeiden hakemistoon]({legacy}1785)

