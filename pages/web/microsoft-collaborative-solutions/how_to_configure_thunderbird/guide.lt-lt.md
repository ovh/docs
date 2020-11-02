---
deprecated: true
title: 'Exchange 2013/2016: Thunderbird konfigūravimas'
excerpt: ''
slug: exchange_20132016_thunderbird_konfiguravimas
legacy_guide_number: g1278
---


## 1 dalis: Pradžia
Pirmiausiai paleiskite Thunderbird programą, įdiegtą jūsų kompiuteryje.

Tokį langą matysite, jeigu nesate sukonfigūravę jokios el. pašto paskyros. Jeigu paskyra jau sukonfigūruota, meniu paleiskite naujos paskyros pridėjimą.

Pasirinkite El. paštas ir pereikite prie kito žingsnio.

![](images/img_1127.jpg){.thumbnail}


## 2 dalis: Pradžia (tęsinys)
Norėdami pradėti el. pašto diegimą, pasirinkite Praleisti šį žingsnį ir naudoti egzistuojantį adresą.

![](images/img_1128.jpg){.thumbnail}


## 3 dalis: Paskyros kūrimas
Užpildykite šiuos laukus:

Vardas ir pavardė: Įveskite norimą paskelbti vardą.

El. pašto adresas: Visas el. pašto adresas.

Slaptažodis: Slaptažodis, kurį įvedėte [kliento sąsajoje](https://www.ovh.com/manager/web/login.html), kai kūrėte Exchange paskyrą.

Įsiminti slaptažodį: Pažymėkite šį laukelį.

Spragtelėkite Tęsti ir pereikite prie kito žingsnio.

![](images/img_1129.jpg){.thumbnail}


## 4 dalis: Pažangus konfigūravimas
Jei jūsų užsakymas buvo patvirtintas po 2016-04-26, Hosted pasiūlymui priskirtas Exchange serveris yra: ex2.mail.ovh.net
Spragtelėję Konfigūravimas rankiniu būdu matysite tokį langą.

Patikrinkite, ar įvesti šie elementai:

Gautų el. laiškų serveris: IMAP:
Hosted tipo paskyroms
Serverio pavadinimas: ex.mail.ovh.net.
Prievadas: 993.
Šifravimo protokolas: SSL.
Prisijungimas: Naudoti slaptažodį.

Siunčiamų el. laiškų serveris: SMTP:
Hosted tipo paskyroms
Serverio pavadinimas: ex.mail.ovh.net.
Prievadas: 587.
Šifravimo protokolas: STARTTLS.
Prisijungimas : Naudoti slaptažodį.

Prisijungimo vardas: Visas el. pašto adresas.

Jeigu norite pridėti Private tipo paskyrą, serverio laukelyje nurodykite Exchange užsakymo metu įvestą serverio pavadinimą.

Jeigu negalėsite naudoti įprasto slaptažodžio parinkties, galite rinktis „NTLM“.

Spragtelėkite Baigti, kad baigtumėte diegimą.

![](images/img_2309.jpg){.thumbnail}


## 5 dalis: Pabaiga
Jūsų Exchange paskyra sukonfigūruota su IMAP protokolu.

Tokią sąsają matysite naudojimo metu.

![](images/img_1134.jpg){.thumbnail}


## Gaunamų el. laiškų serverio nustatymai
Paveikslėlyje pateiktas paskyros parametrų pavyzdys.

Gaunamų el. laiškų serveriui

![](images/img_1132.jpg){.thumbnail}


## Siųstų laiškų serverio nustatymai
Siunčiamų el. laiškų serverio nustatymai

![](images/img_1133.jpg){.thumbnail}

