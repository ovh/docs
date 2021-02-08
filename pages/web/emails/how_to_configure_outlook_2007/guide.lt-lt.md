---
deprecated: true
title: 'Svetainių talpinimas: El. pašto konfigūravimas Outlook 2007'
excerpt: ''
slug: svetainiu_talpinimas_el_pasto_konfiguravimas_outlook_2007
legacy_guide_number: g1298
---


## 1 dalis: Pradžia
Paleiskite programą Outlook 2007.

Spragtelėkite Įrankiai, po to Paskyros nustatymai....

Atsidariusiame lange spragtelėkite mygtuką Nauja ir pradėsite kūrimą.

![](images/img_1238.jpg){.thumbnail}


## 2 dalis: Kūrimas
Kairėje pusėje pažymėkite Rankinis serverio parametrų arba papildomų serverių tipų konfigūravimas.

Po to spragtelėkite Toliau.

![](images/img_1239.jpg){.thumbnail}


## 3 dalis: Paslaugos tipas
Pasirinkite Internetiniai pranešimai ir spragtelėkite Toliau.

![](images/img_1240.jpg){.thumbnail}


## 4 dalis: El. pašto dėžutės nustatymai
Atsidariusiame puslapyje įveskite tokią informaciją:

Vardas: Įveskite vardą, kuris bus matomas siunčiamuose el. laiškuose;
El. pašto adresas: Visas el. pašto adresas;

Paskyros tipas: POP3
Gautų laiškų serveris: SSL0.OVH.NET
Siunčiamų el. laiškų serveris (SMTP): SSL0.OVH.NET

Naudotojo vardas: Jūsų el. pašto adresas (pvz., test@ovh.net);
Slaptažodis: El. pašto dėžutės slaptažodis.

Įvedę reikiamus duomenis spragtelėkite mygtuką Kiti nustatymai.

![](images/img_1241.jpg){.thumbnail}


## 5 dalis: Siunčiamų el. laiškų serveris
Kortelėje „Siunčiamų el. laiškų serveris“ pažymėkite Mano siunčiamų el. laiškų serveris (SMTP) reikalauja prisijungimo, po to Jungtis naudojant:

Naudotojo vardas: Jūsų el. pašto adresas (pvz., test@ovh.net);
Slaptažodis: El. pašto dėžutės slaptažodis.

Būtina naudoti 587 SMTP serverio prievadą ir pažymėti laukelį, kad serveris reikalauja prisijungimo. 
Šį prievadą leidžia naudoti visi IPT.

![](images/img_1242.jpg){.thumbnail}

- Būtina įjungti išeinančių el. laiškų autentifikaciją, priešingu atveju el. laiškai nebus siunčiami per mūsų SMTP serverius.

- Jeigu autentifikacija nebus įjungta, automatiškai bus sukurtas gedimo kvitas Open SMTP ir jūs būsite informuoti, kad POP before SMTP mūsų sistemoje nepalaikoma. Norėdami siųsti laiškus, privalėsite įjungti išeinančių el. laiškų serverio autentifikaciją.




## 6 dalis: Išsamūs nustatymai
Kortelėje Išsamūs nustatymai įveskite šiuos nustatymus:

Gautų el. laiškų serveris (POP3):110.

Laukelis Šis serveris reikalauja šifruoto sujungimo (SSL) turi būti nepažymėtas.

Siunčiamų el. laiškų serveris (SMTP): Turi būti 587.

Laukelio Naudoti šifruotą sujungimą parinktis turi būti Jokio.

Spragtelėkite OK, kad tęstumėte.

Čia taip pat galite nustatyti, ar trinti el. laiškus iš serverio bei po kurio laiko el. laiškai turi būti trinami.

![](images/img_1243.jpg){.thumbnail}


## 7 dalis: Pabaiga
Jūsų paskyra sukonfigūruota

![](images/img_1244.jpg){.thumbnail}


## POP nustatymai
Čia pateikiama informacija, kuria reikėtų vadovautis konfigūruojant el. pašto paskyrą su IMAP.

IMAP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) kurdami paskyrą.
Username: Visas el. pašto adresas
Incoming server:SSL0.OVH.NET
Incoming Server Port:993 arba 143
Outgoing server:SSL0.OVH.NET
Outgoing Server Port:465 arba 587

Prievadai 143 ir 587 atitinka SSL su išjungta apsauga.
Prievadai 993 ir 465 atitinka SSL su įjungta apsauga.


- Privaloma įjungti [išeinančio serverio (SMTP) ](#configuration_protocole_imap_partie_6_parametres_avances).


|Prievadai|SSLįjungta|SSLišjungta|
|Įeinantis|995|110|
|Išeinantis|465|587|




## IMAP nustatymai
Čia pateikiama informacija, kuria reikėtų vadovautis konfigūruojant el. pašto paskyrą su POP.

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.ie/&ovhSubsidiary=ie) kurdami paskyrą.
Username: Visas el. pašto adresas
Incoming server:SSL0.OVH.NET
Incoming Server Port:995 arba 110
Outgoing server:SSL0.OVH.NET
Outgoing Server Port:465 arba 587

Prievadai 110 ir 587 atitinka SSL su išjungta apsauga.
Prievadai 995 ir 465 atitinka SSL su įjungta apsauga.


- Privaloma įjungti [išeinančio serverio (SMTP) ](#configuration_protocole_imap_partie_6_parametres_avances).


|Prievadai|SSLįjungta|SSLišjungta|
|Įeinantis|995|110|
|Išeinantis|465|587|



