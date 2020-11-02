---
deprecated: true
title: 'Svetainių talpinimas: El. pašto konfigūravimo gidas Android 4.4 sistemose'
excerpt: Svetainių talpinimo el. pašto konfigūravimo gidas Android 4.4 sistemose
slug: svetainiu_talpinimas_el_pasto_konfiguravimo_gidas_android_44_sistemose
legacy_guide_number: g1347
---


## 1 dalis: Paskyros sukūrimas
Pirmiausiai pereikite prie nustatymų: spustelėkite "Settings".

Mūsų pavyzdyje konfigūruojama IMAP tipo paskyra, Nexus 5 su Android 4.4 versija įrenginyje.

Prieš pradėdami paskyros kūrimą, įsitikinkite, kad įjungtas 3G ar Wi-Fi ryšys.

Spustelėkite "Add account, kad pradėtumėte paskyros kūrimą.

![](images/img_1510.jpg){.thumbnail}


## 2 dalis: Paskyros tipas
Privalėsite nurodyti paskyros tipą. Rinkitės "IMAP".

Pastaba: Šioje vietoje taip pat galite pasirinkti "POP". Tokiu atveju reikės įvesti gido pabaigoje nurodytą informaciją.

![](images/img_1511.jpg){.thumbnail}


## 3 dalis: Rankinis konfigūravimas
Įveskite el. pašto adresą ir slaptažodį, kurį nurodėte [valdymo sąsajoje](https://www.ovh.lt/managerv3/), kurdami paskyrą.

Po to rinkitės "Manual configuration", kad pareitumėte prie rankinio konfigūravimo.

![](images/img_1512.jpg){.thumbnail}


## 4 dalis: El. pašto protokolas
Rinkitės "IMAP" protokolą.

Šioje vietoje taip pat galite rinktis "POP". POP konfigūravimo duomenys pateikiami gido pabaigoje.

![](images/img_1513.jpg){.thumbnail}


## 5 dalis: Paskyros konfigūravimas (1)
Įveskite reikiamus parametrus:

User name: Jūsų el. pašto adresas.

Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.lt/managerv3/), kurdami paskyrą.

Server:SSL0.OVH.NET

Port:993

Saugumo tipas:SSL/TLS (accept all certificates)

Kitokios konfigūracijos parametrai pateikiami gido pabaigoje.

Spragtelėkite "Next", kad pereitumėte prie kito žingsnio.

![](images/img_1514.jpg){.thumbnail}


## 6 dalis: Paskyros konfigūravimas (2)
Įveskite prašomus parametrus:

SMTP server:SSL0.OVH.NET

Port:465

Security type:SSL/TLS (accept all certificates)

Require login: turi būti pažymėta.

User name: Jūsų el. pašto adresas.

Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.lt/managerv3/), kurdami paskyrą.

Kitokios konfigūracijos parametrai pateikiami gido pabaigoje.

Spragtelėkite "Next", kad pereitumėte prie kito žingsnio.

![](images/img_1515.jpg){.thumbnail}

- Būtina įjungti "išeinančių laiškų autentifikaciją", priešingu atveju laiškai nebus siunčiami per mūsų SMTP serverius.

- Jeigu autentifikacija nebus įjungta, automatiškai bus sukurtas gedimo kvitas Open SMTP ir jūs būsite informuoti, kad "POP before SMTP" mūsų sistemoje nepalaikoma. Norėdami siųsti laiškus, privalėsite įjungti išeinančio serverio autentifikaciją.




## 7 dalis: Paskyros parametrai
Vienus parametrus reikia pasirinkti, kitus pažymėti.

Pasirinkite parametrus, kuriuos norite įjungti.

Spragtelėkite "Next", kad pereitumėte prie kito žingsnio.

![](images/img_1516.jpg){.thumbnail}


## Pabaiga
Paskyros kūrimą užbaigsite nurodę vardą, kuris bus matomas adresų knygelėje ir siunčiant laiškus.

Po to spragtelėkite "Next", kad užbaigtumėte kūrimą.

![](images/img_1517.jpg){.thumbnail}


## El. pašto paskyros rodymas
Norėdami peržiūrėti sukurtą paskyrą ar keisti jos parametrus, eikite į skyrių "Settings", po to "Accounts" ir pasirinkite "IMAP".

Atsidariusiame lange galėsite keisti paskyros nustatymus.

![](images/img_1518.jpg){.thumbnail}


## POP nustatymai
Čia pateikiama informacija, kuomet Android sistemose paskyra konfigūruojama su POP.

POP konfigūravimas su įjungta ir išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.lt/managerv3/), kurdami paskyrą.
Username: Visas el. pašto adresas
Incoming server:SSL0.OVH.NET
Incoming Server Port:995 arba 110
Outgoing server: The sending mail server: SSL0.OVH.NET
Outgoing Server Port:465 arba 587

Prievadai 110 ir 587 atitinka SSL su išjungta apsauga.
Prievadai 995 ir 465 atitinka SSL su įjungta apsauga.


- Privaloma įjungti [išeinančio serverio (SMTP) ](#configuration_protocole_imap_partie_6_parametres_avances).


|Prievadai|SSLįjungta|SSLišjungta|
|Įeinantis|995|110|
|Iįeinantis|465|587|




## IMAP nustatymai
Čia pateikiama informacija, kuria reiktų vadovautis konfigūruojant Outlook 2011 su IMAP.

IMAP konfigūravimas su įjungta ir išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.lt/managerv3/), kurdami paskyrą.
Username: Visas el. pašto adresas
Incoming server:SSL0.OVH.NET
Incoming Server Port:993 arba 143
Outgoing server: The sending mail server: SSL0.OVH.NET
Outgoing Server Port:465 arba 587

Prievadai 143 ir 587 atitinka SSL su išjungta apsauga.
Prievadai 993 ir 465 atitinka SSL su įjungta apsauga.


- Privaloma įjungti [išeinančio serverio (SMTP) ](#configuration_protocole_imap_partie_6_parametres_avances).


|Prievadai|SSLįjungta|SSLišjungta|
|Įeinantis|995|110|
|Iįeinantis|465|587|




## Samsung Galaxy Note 3
Jeigu matysite tokią klaida:


- Error: Authentification error


Pakeiskite vartotojo vardą į el_pasto_adresas%domenas.tld (% vietoje @).

