---
deprecated: true
title: Domeno zonos tikrinimas
excerpt: 'Šiame gide paaiškinama, kaip atlikti domeno zonos tikrinimą (Zone check).'
slug: domeno_zonos_tikrinimas
section: DNS and DNS zone
order: 8
---


## Reikiamų laukų užpildymas
AFNIC [Zone Check](https://zonemaster.fr/) įrankis yra skirtas pirminio ir antrinių DNS serverių konfigūracijos tikrinimui.

Įrankis naudojamas ZoneMaster svetainėje, pasiekiamoje[spragtelėjus čia](https://zonemaster.fr/).

Pasirinkite Domain check, ir užpildykite laukus:


- Domain name: įveskite tikrinamą domeną.
- Advanced options: spragtelėkite, jei norite plėsti ar siaurinti tikrinimą. Spragtelėjus bus galima rinktis IPv4, IPv6 ar abi konfigūracijas.
- Spragtelėkite Run test ir zona bus patikrinta.



![](images/img_3213.jpg){.thumbnail}


## Rezultatas
Kai tikrinimas bus baigtas, matysite rezultatą.


- Jeigu viskas žymima žalia spalva: zona teisinga. Jokių taisymų atlikti nereikia.

- Jeigu matote elementus, pažymėtus raudonai: peržiūrėkite detales, kad žinotumėte, kur reikia atlikti taisymus.


Dėmesio, jei nepašalinsite raudonai pažymėtų elementų, išliks rizika, kad kai kurios su domenu susijusios funkcijos neveiks.

![](images/img_3211.jpg){.thumbnail}


## Naudinga informacija
Jeigu kils klausimų dėl įrankio naudojimo, skaitykite ZoneMaster D.U.K.

![](images/img_3212.jpg){.thumbnail}

