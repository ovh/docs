---
title: Pääkäyttöoikeudet ja salasanan asetus
excerpt: Pääkäyttöoikeudet ja salasanan asetus
slug: paakayttooikeudet_ja_salasanan_asetus
legacy_guide_number: g1786
---


## 
Sinun täytyy kirjautua sisään pääkäyttäjänä (root) palvelimellesi, suorittaaksesi tiettyjä tehtäviä. Näitä ovat mm.:

- Sovellusten asennus.
- Salasanan asetus normaali- tai pääkäyttäjälle (Tämä on tarpeen erityisesti KVM-pääsyä varten).
- Muita ylläpitotöitä varten.




## Vaatimukset

- []({legacy}1775)
- Sinun täytyy olla kirjautunut sisään normaalikäyttäjänä (admin tai distribuution oletuskäyttäjätunnus).



## Tietoa
Tämä ohje perustuu periaatteeseen, että käyttäjän nimi on oletuksena admin]


## Salasanan määritys

- Määritä salasana admin-käyttäjälle (Salasanaa ei näytetä selvästi turvallisuussyistä):

```
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Määritä salasana pääkäyttäjälle (root) (Salasanaa ei näytetä selvästi turvallisuussyistä)

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
[/code]


## Muita esimerkkejä

- Päivitä pakettien (Debian/Ubuntu) välimuisti

```
~$ sudo apt-get update
```


- Päivitä järjestelmä (CentOS/Fedora)

```
~$ sudo yum update
```


- Muokkaa konfiguraatiotiedostoa:

```
~$ sudo vi /etc/hosts.allow
```





## 
Tule root-käyttäjäksi:

```
~$ sudo su -
~#
```



- Syötä root-salasana 

(kun sinusta on tullut pääkäyttäjä):

```
~# passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```



- Määritä salasana admin-käyttäjälle

-Define a password for
an admin user

```
~# passwd admin
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```




## 
[Paluu Cloud-tuotteiden ohjeiden hakemistoon]({legacy}1785)

