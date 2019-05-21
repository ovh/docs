---
title: Verkrijg root toegang en stel een wachtwoord in
excerpt: Verkrijg root toegang en stel een wachtwoord in
slug: verkrijg_root_toegang_en_stel_een_wachtwoord_in
legacy_guide_number: g1786
---


## 
Om bepaalde taken uit te kunnen voeren is het soms nodig dat u de root wordt of toegang krijgt tot root voordelen, zoals:

- Installeren van packs
- Selecteren van een wachtwoord voor een gebruiker of root gebruiker (dit is nodig voor toegang tot KVM)
- Uitvoeren van bepaalde administratieve taken




## Vereisten

- []({legacy}1775)
- U dient ingelogd te zijn als de standaard gebruiker (admin of de distributienaam voor de meest recente afbeeldingen)



## Informatie
We gaan er in deze handleiding vanuit dat de standaard gebruiker admin als naam heeft.


## Een wachtwoord instellen

- Voer een wachtwoord in voor de admin gebruiker (het wachtwoord zal om veiligheidsredenen niet weergegeven worden als u het intypt): 

```
~$ sudo passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated 
successfully
```


- Voer een wachtwoord in voor de root gebruiker (het wachtwoord zal om veiligheidsredenen niet weergegeven worden als u het intypt):

```
~$ sudo passwd root
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## Andere voorbeelden

- De pakkettencache updaten (Debian/Ubuntu)

```
~$ sudo apt-get update
```


- Het systeem updaten (CentOS/Fedora)

```
~$ sudo yum update
```


- Een configuratiebestand bewerken:

```
~$ sudo vi /etc/hosts.allow
```





## 

- Als beheerder

```
~$ sudo su -
~#
```


- Stel een wachtwoord in voor de beheerder (als beheerder):

```
~# passwd
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```


- Stel een wachtwoord in voor de admin gebruiker

```
~# passwd admin
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```





## 
[Teruggaan naar de index van Cloud handleidingen]({legacy}1785)

