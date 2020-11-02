---
deprecated: true
title: 'Svetainių talpinimas: El. pašto konfigūravimas Windows Mail'
excerpt: ''
slug: svetainiu_talpinimas_el_pasto_konfiguravimas_windows_mail
legacy_guide_number: g1300
---


## 1 dalis: El. pašto paskyros sukūrimas
Paleiskite Windows Mail, po to sukurkite naują paskyrą.

Įveskite reikiamą informaciją ir spragtelėkite "Toliau".

![](images/img_1268.jpg){.thumbnail}


## 2 dalis: Paskyros nustatymai
Atsidariusiame lange įveskite reikiamą informaciją.

Įeinančių laiškų serveris yra: POP3

Įeinančių laiškų serveris:ns0.ovh.net
Prievadas:110

Prisijungimo vardas: Visas el. pašto adresas

Išeinančio serverio informacija:ns0.ovh.net
Prievadas:587

Pažymėkite "Serveris reikalauja prisijungimo".

Būtina naudoti 587 SMTP prievadą ir pažymėti, kad serveris reikalauja prisijungimo.
Šį prievadą leidžia naudoti visi IPT. 

Spragtelėkite "Toliau", kad užbaigtumėte kūrimą.

Paskyra bus sukonfigūruota.

![](images/img_1269.jpg){.thumbnail}

- Būtina įjungti "išeinančių laiškų autentifikaciją", priešingu atveju laiškai nebus siunčiami per mūsų SMTP serverius.

- Jeigu autentifikacija nebus įjungta, automatiškai bus sukurtas gedimo kvitas Open SMTP ir jūs būsite informuoti, kad "POP before SMTP" mūsų sistemoje nepalaikoma. Norėdami siųsti laiškus, privalėsite įjungti išeinančio serverio autentifikaciją.




## POP konfigūravimas
Čia pateikiama informacija, kuria reiktų vadovautis konfigūruojant POP paskyrą.

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.lt/managerv3/), kurdami paskyrą.
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




## IMAP konfigūravimas
Čia pateikiama informacija, kuria reiktų vadovautis konfigūruojant IMAP paskyrą.

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.lt/managerv3/), kurdami paskyrą.
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
|Iįeinantis|465|587|




## Bendra informacija
Jeigu pageidaujate, mes galime sukonfigūruoti jūsų pašto programą. Tai atliekama užsakius mokamą intervenciją. OVH taip pat gali atlikti kitas su el. paštu susijusias mokamas intervencijas.

OVH atliekamų mokamų intervencijų informacija pateikiama šiame gide:


- []({legacy}1683)


Norėdami užsakyti intervenciją, sekite gide nurodytus žingsnius.

![](images/img_2508.jpg){.thumbnail}

