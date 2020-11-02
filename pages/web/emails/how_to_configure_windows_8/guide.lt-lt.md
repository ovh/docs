---
deprecated: true
title: 'Svetainių talpinimo el. paštas: Konfigūravimas Windows 8 aplinkoje'
excerpt: ''
slug: svetainiu_talpinimo_el_pastas_konfiguravimas_windows_8_aplinkoje
legacy_guide_number: g1281
---


## 1 dalis: Paruošimas
Visų pirma atidarykite Windows 8 Mail programėlę pagrindiniame kompiuterio meniu.  

Paleidus programą pirmą kartą, kitoje sąsajoje nei pavaizduota iliustracijoje, reikės nurodyti el. pašto adresą ir slaptažodį.

Jeigu jau esate sukonfigūravę paskyrą, šio pranešimo nematysite.

Perkelkite kursorių į dešinę ir pasirinkite Settings.

![](images/img_1142.jpg){.thumbnail}


## 2 dalis: Paskyros
Spragtelėkite piktogramą Accounts, kad pradėtumėte OVH el. pašto paskyros kūrimą.

![](images/img_1143.jpg){.thumbnail}


## 3 dalis: Paskyros kūrimas
El. pašto adresas jau yra.

Kai paskyra sukurta, galima vienu spragtelėjimu pereiti prie paskyros nustatymų.

Spragtelėkite Add Account ir pereikite prie kito žingsnio.

![](images/img_1144.jpg){.thumbnail}


## 4 dalis: Paskyros tipas
Šiame žingsnyje reikia pasirinkti pridedamos paskyros tipą. Spragtelėkite Other account.

![](images/img_1145.jpg){.thumbnail}


## 5 dalis: Nustatymai
Atsidariusiame lange užpildykite laukus:

Email address: Visas OVH svetainių talpinimo plano el. pašto adresas.

Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager), kurdami paskyrą.

Spragtelėkite Connect, kad tęstumėte.

![](images/img_1146.jpg){.thumbnail}


## 6 dalis: Pažangūs nustatymai
Šioje sąsajoje užpildykite laukus:

Email Address: Jūsų el. pašto adresas

Username: Visas el. pašto adresas

Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager), kurdami paskyrą.

Incoming server (IMAP): serverio adresas yra SSL0.OVH.NET, o prievadas - 993.

Incoming email server requires SSL: Turi būti pažymėtas.

Outgoing server (SMTP): serverio adresas yra SSL0.OVH.NET, o prievadas - 465.

Outgoing email server requires SSL: Turi būti pažymėtas.

Outgoing email server requires authentication: Turi būti pažymėtas.

Use the same username and password as for incoming email: Turi būti pažymėta.

Spragtelėkite Connect, kad pereitumėte prie kito žingsnio.

![](images/img_1147.jpg){.thumbnail}

- Būtina įjungti išeinančių el. laiškų autentifikaciją, priešingu atveju el. laiškai nebus siunčiami per mūsų SMTP serverius.

- Jeigu autentifikacija nebus įjungta, automatiškai bus sukurtas gedimo kvitas Open SMTP ir jūs būsite informuoti, kad POP before SMTP mūsų sistemoje nepalaikoma. Norėdami siųsti el. laiškus, privalėsite įjungti išeinančių el. laiškų serverio autentifikaciją.




## 7 dalis: Pabaiga
Jūsų el. pašto paskyra sukonfigūruota su IMAP.

Iliustracijoje pateikiama pašto naudojimo sąsaja.

Dešinėje pusėje matysite el. pašto paskyros nustatymus ([žr. 3 gido konfigūravimo dalį](#configuration_protocole_imap_partie_3_ajouter_un_compte)).

![](images/img_1148.jpg){.thumbnail}


## POP konfigūravimas
Čia pateikiama informacija, kuria reiktų vadovautis konfigūruojant POP paskyrą.

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager), kurdami paskyrą.
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
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager), kurdami paskyrą.
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



