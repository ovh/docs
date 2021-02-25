---
deprecated: true
title: 'Svetainių talpinimo el. paštas: Konfigūravimas BlackBerry aplinkoje'
excerpt: Šiame gide aprašomas OVH el. pašto konfigūravimas BlackBerry aplinkoje
slug: svetainiu_talpinimo_el_pastas_konfiguravimas_blackberry_aplinkoje
legacy_guide_number: g1381
---


## 1 dalis: Nustatymai
Pirmiausiai spragtelėkite piktogramą Settings.

Pavyzdyje konfigūruosime IMAP protokolą, BlackBerry Z10 įrenginyje su 10.20.429 OS versija.

Prieš kurdami paskyrą įsitikinkite, kad aktyvus 3G ar Wi-Fi ryšys.

![](images/img_1747.jpg){.thumbnail}


## 2 dalis: Sistemos nustatymai
El. pašto paskyros konfigūravimą tęsite atidarę Accounts.

![](images/img_1748.jpg){.thumbnail}


## 3 dalis: Paskyros pridėjimas
Pasirinkite Add account ir galėsite pridėti OVH pašto paskyrą.

Atkreipkite dėmesį, kad šiame lygyje yra paruošti keli paskyrų kūrimo šablonai.

![](images/img_1749.jpg){.thumbnail}


## 4 dalis: El. pašto paskyros ir slaptažodžio įvedimas
Įveskite visą el. pašto adresą.

Kitus nustatymus keisite paspaudę Next.

![](images/img_1750.jpg){.thumbnail}
Įveskite slaptažodį, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) kurdami paskyrą.

Spauskite Next, kad patvirtintumėte slaptažodį.

![](images/img_1751.jpg){.thumbnail}
Programa ieškos prisijungimo parametrų. Palaukite, kol automatiškai atsidarys kitas žingsnis.

![](images/img_1752.jpg){.thumbnail}


## 5 dalis: El. pašto paskyros parametrai
Įveskite reikiamą informaciją:

Description: Pavadinimas, rodomas telefone.

Name: Vardas, matomas siunčiant pranešimus.

Username: Visas el. pašto adresas.

Email address: Visas el. pašto adresas.

Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) kurdami paskyrą.

Hostname: SSL0.OVH.NET

Port: 993

Encryption: SSL

IMAP prefix: palikite laukelį tuščią.

SMTP username: Visas el. pašto adresas.

SMTP password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) kurdami paskyrą.

SMTP hostname: SSL0.OVH.NET

SMTP port: 465

SMTP encryption: SSL

Use Push function if available: Išjunkite, Push funkcija nesuderinama su mūsų el. pašto planais.

Synchronisation interval: Pasirinkite kas kiek laiko el. paštas bus sinchronizuojamas su telefonu.

Initial recuperation amount: Čia nurodoma, kiek pirmą kartą sinchronizuoti el. laiškų su telefonu.

Patvirtinkite informaciją spragtelėdami Finish.

![](images/img_1753.jpg){.thumbnail}
Programa išsaugos ir patikrins parametrus. Palaukite, kol automatiškai pereisite prie kito žingsnio.

![](images/img_1754.jpg){.thumbnail}

- Būtina įjungti išeinančių el. laiškų autentifikaciją, priešingu atveju el. laiškai nebus siunčiami per mūsų SMTP serverius.

- Jeigu autentifikacija nebus įjungta, automatiškai bus sukurtas gedimo kvitas Open SMTP ir jūs būsite informuoti, kad POP before SMTP mūsų sistemoje nepalaikoma. Norėdami siųsti el. laiškus, privalėsite įjungti išeinančių el. laiškų serverio autentifikaciją.




## Baigimas
El. pašto paskyra sėkmingai sukonfigūruota!

El. paštą pasieksite per meniu (žr. iliustraciją).

![](images/img_1755.jpg){.thumbnail}

## El. laiškų peržiūra
Savo laiškus galėsite skaityti atsidarę Hub.

![](images/img_1756.jpg){.thumbnail}


## POP konfigūravimas
Čia pateikiama informacija, kuria reikėtų vadovautis konfigūruojant POP paskyrą.

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) kurdami paskyrą.
Username: Visas el. pašto adresas
Incoming server:SSL0.OVH.NET
Incoming Server Port:995 arba 110
Outgoing server: The sending mail server: SSL0.OVH.NET
Outgoing Server Port:465 arba 587

Prievadai 110 ir 587 atitinka išjungtą SSL apsaugą.
Prievadai 995 ir 465 atitinka įjungtą SSL apsaugą.- 


- Privaloma įjungti [išeinančio serverio (SMTP) ](#configuration_protocole_imap_partie_6_parametres_avances).


|Prievadai|SSLįjungta|SSLišjungta|
|Įeinantis|995|110|
|Išeinantis|465|587|




## IMAP konfigūravimas
Čia pateikiama informacija, kuria reikėtų vadovautis konfigūruojant IMAP paskyrą.

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) kurdami paskyrą.
Username: Visas el. pašto adresas
Incoming server:SSL0.OVH.NET
Incoming Server Port:993 arba 143
Outgoing server: The sending mail server: SSL0.OVH.NET
Outgoing Server Port:465 arba 587

Prievadai 143 ir 587 atitinka išjungtą SSL apsaugą.
Prievadai 993 ir 465 atitinka įjungtą SSL apsaugą.


- Privaloma įjungti [išeinančio serverio (SMTP) ](#configuration_protocole_imap_partie_6_parametres_avances).


|Prievadai|SSLįjungta|SSLišjungta|
|Įeinantis|995|110|
|Išeinantis|465|587|



