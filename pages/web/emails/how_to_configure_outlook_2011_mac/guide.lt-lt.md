---
deprecated: true
title: 'Svetainių talpinimas: Mac Outlook 2011 konfigūravimas'
excerpt: Outlook 2011 versijos konfigūravimas Mac aplinkoje
slug: svetainiu_talpinimas_mac_outlook_2011_konfiguravimas
legacy_guide_number: g1345
---


## 1 dalis: pradžia
Paleiskite Mac skirtą Outlook 2011 versiją.

Pavyzdyje programą konfigūruosime per IMAP, su įjungta SSL apsauga.

Programą taip pat galima konfigūruoti su POP, informacija pateikiama gido pabaigoje.

Šiame gide naudojama Mac 10.9.1 versija ir Outlook 2011 14.0.0 versija.

![](images/img_1492.jpg){.thumbnail}


## 2 dalis: įrankiai - paskyros
Spragtelėkite Tools, po to Accounts....

Mūsų programoje nesukonfigūruota jokia paskyra.

![](images/img_1493.jpg){.thumbnail}


## 3 dalis: paskyros sukūrimas
Atsidarys naujas langas.

Spragtelėkite piktogramą El. pašto paskyra, kad sukurtumėte POP arba IMAP paskyrą.

![](images/img_1494.jpg){.thumbnail}


## 4 dalis: paskyros informacija
Atsidarys dar vienas langas.

Įveskite šią informaciją:

Email address: Jūsų el. pašto adresas.

Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager) kurdami paskyrą.

Username: Visas el. pašto adresas.

Type: Pasirinkite IMAP (taip pat galite rinktis POP, tokios paskyros informacija pateikiama gido pabaigoje).

Incoming server:SSL0.OVH.NET
Incoming server port:993

Pažymėkite laukelius "Use non default port" ir "Use SSL to connect (recommended)".

Outgoing server:SSL0.OVH.NET
Outgoing server port:465

Pažymėkite laukelius "Use non default port" ir "Use SSL to connect (recommended)".

Jeigu Mac sistema paprašys išsaugoti šifruotą slaptažodį, išsaugokite, kad ateityje nematytumėte panašių užklausų.

Spragtelėkite Add account, kad išsaugotumėte paskyrą.

![](images/img_1495.jpg){.thumbnail}


## 5 dalis: pabaiga
Jūsų el. pašto paskyra sukurta Outlook 2011 programoje.

Dabar galite skaityti, siųsti ar trinti el. laiškus.

![](images/img_1496.jpg){.thumbnail}


## Tools - Accounts
Spragtelėkite Tools, po to Accounts....

Pasirinkite paskyrą, kurią norite redaguoti.

Matysite tokį langą (žr. iliustraciją):

Spragtelėję iššokantį meniu More options... pasirinkite Authentication -> Use incoming server information[/ green].

Čia taip pat galima keisti paskyros informaciją, išskyrus paskyros tipą (POP ar IMAP).

Daugiau parinkčių ir nustatymų rasite skyriuje Advanced....

![](images/img_2138.jpg){.thumbnail}

- Būtina įjungti išeinančių el. laiškų autentifikaciją, priešingu atveju el. laiškai nebus siunčiami per mūsų SMTP serverius.

- Jeigu autentifikacija nebus įjungta, automatiškai bus sukurtas gedimo kvitas Open SMTP ir jūs būsite informuoti, kad POP before SMTP mūsų sistemoje nepalaikoma. Norėdami siųsti laiškus, privalėsite įjungti išeinančių el. laiškų serverio autentifikaciją.




## Server
Kortelėje „Server“ galimi išsamūs serverio nustatymai

![](images/img_1498.jpg){.thumbnail}
Kad veiktų visi nustatymai, rekomenduojame kataloge IMAP root folder sukurti katalogą INBOX.


## Folders
Kortelėje „Folders“ galimi išsamūs katalogų nustatymai

![](images/img_1499.jpg){.thumbnail}


## Security
Kortelėje „Security“ galimi išsamūs saugumo nustatymai

![](images/img_1500.jpg){.thumbnail}


## POP nustatymai
Čia pateikiama informacija, kuria reikėtų vadovautis konfigūruojant Outlook 2011 su POP.

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager) kurdami paskyrą.
Username: Visas el. pašto adresas
Incoming server:SSL0.OVH.NET
Incoming Server Port:995 arba 110
Outgoing server:SSL0.OVH.NET
Outgoing Server Port:465 arba 587

Prievadai 110 ir 587 atitinka SSL su išjungta apsauga.
Prievadai 995 ir 465 atitinka SSL su įjungta apsauga.


- Privaloma įjungti [išeinančio serverio (SMTP) ](#modification_du_compte_e-mail_sur_outlook_2011_mac_outils_-_comptes).


|Prievadai|SSLįjungta|SSLišjungta|
|Įeinantis|995|110|
|Išeinantis|465|587|




## IMAP nustatymai
Čia pateikiama informacija, kuria reikėtų vadovautis konfigūruojant Outlook 2011 su IMAP.

IMAP konfigūravimas su įjungta ar išjungta SSL apsauga:

Email Address: Jūsų el. pašto adresas
Password: Slaptažodis, kurį nurodėte [valdymo sąsajoje](https://www.ovh.com/auth/?action=gotomanager) kurdami paskyrą.
Username: Visas el. pašto adresas
Incoming server:SSL0.OVH.NET
Incoming Server Port:993 arba 143
Outgoing server:SSL0.OVH.NET
Outgoing Server Port:465 arba 587

Prievadai 143 ir 587 atitinka SSL su išjungta apsauga.
Prievadai 993 ir 465 atitinka SSL su įjungta apsauga.


- Privaloma įjungti [išeinančio serverio (SMTP) ](#modification_du_compte_e-mail_sur_outlook_2011_mac_outils_-_comptes).


|Prievadai|SSLįjungta|SSLišjungta|
|Įeinantis|995|110|
|Išeinantis|465|587|



