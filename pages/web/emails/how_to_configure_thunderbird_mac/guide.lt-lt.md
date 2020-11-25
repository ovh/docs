---
deprecated: true
title: 'Svetainių talpinimas: Thunderbird Mac konfigūravimo gidas'
excerpt: ''
slug: svetainiu_talpinimas_thunderbird_mac_konfiguravimo_gidas
legacy_guide_number: g1911
---


## 1 dalis: Pradžia
Pirmiausiai į Mac kompiuterį reikia įsidiegti Thunderbird programą.

Iliustracijoje pateikiamas programos langas be sukonfigūruotų paskyrų. Jeigu bent viena paskyra jau sukonfigūruota, atidarykite naujos paskyros pridėjimo langą.

Pasirinkite Praleisti šį žingsnį ir naudoti egzistuojantį adresą, kad pridėtumėte naują dėžutę.

![](images/img_2856.jpg){.thumbnail}


## 2 dalis: Paskyros kūrimas
Vardas ir pavardė: Paskyros bei laiškų siuntėjo vardas ir pavardė.

El. pašto adresas: Visas el. pašto adresas.

Slaptažodis: El. pašto dėžutės slaptažodis, kurį nurodėte valdymo sąsajoje, kurdami paskyrą.

Įsiminti slaptažodį: Rekomenduojame pažymėti šį laukelį.


Spragtelėkite Baigti ir diegimas bus baigtas.

![](images/img_2857.jpg){.thumbnail}


## 3 dalis: Paskyros kūrimas (tęsinys)
Thunderbird nuskaitys el. pašto dėžutės parametrus ir pasiūlys du galimus konfigūracijos tipus: IMAP ir POP3.

Pavyzdyje konfigūruosime IMAP paskyrą, tačiau galite rinktis ir POP. Jeigu norite konfigūruoti kitaip, skaitykite papildomą informaciją, pateikiamą gido pabaigoje.

Pastaba: Thunderbird taip pat suteikia galimybę patiems konfigūruoti paskyrą.

Spragtelėkite Rankinis konfigūravimas, kad pereitumėte prie laisviau konfigūruojamų parametrų.

![](images/img_2858.jpg){.thumbnail}


## 4 dalis: Serverio nustatymai
Patikrinkite, ar teisingai nurodyti šie parametrai:
Gaunamų laiškų serverio nustatymai:
Gaunamų laiškų serveris: IMAP
Serverio adresas: SSL0.OVH.NET
Prievadas: 993
SSL: SSL/TLS
Autentifikacija: Normalus slaptažodis

![](images/img_2859.jpg){.thumbnail}
Siunčiamų laiškų serveris:
Siunčiamų laiškų serveris: SMTP
Serverio adresas: SSL0.OVH.NET
Prievadas: 465
SSL: SSL/TLS
Autentifikacija: Normalus slaptažodis
Laiškų siuntimo ir gavimo serverių autentifikacija: visas el. pašto adresas
Spragtelėkite „Baigti“ ir diegimas bus baigtas.


## 5 dalis: Serverio nustatymai ir siunčiamų laiškų serveris (SMTP)
Paskyra sukurta, dabar galite keisti kitus serverio parametrus.

Spragtelėkite Siunčiamų laiškų serveris ir patikrinkite jo parametrus.

![](images/img_2860.jpg){.thumbnail}


## 6 dalis: Serverio nustatymai ir siunčiamų laiškų serveris (SMTP, tęsinys)
SMTP serverio parametrai
Serverio adresas: SSL0.OVH.NET
Prievadas: 465
SSL: SSL/TLS
Autentifikacija: Normalus slaptažodis
Vartotojo vardas: visas el. pašto adresas

Spragtelėkite OK, kad patvirtintumėte SMTP informaciją.

![](images/img_2861.jpg){.thumbnail}


## POP nustatymai
Čia pateikiama informacija, kuria reiktų vadovautis konfigūruojant POP paskyrą.

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/manager/web/login/), kurdami paskyrą.
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
|Iįeinantis|465|587|




## IMAP nustatymai
Čia pateikiama informacija, kuria reiktų vadovautis konfigūruojant el. pašto paskyrą su IMAP.

IMAP konfigūravimas su įjungta ir išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/manager/web/login/), kurdami paskyrą.
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



