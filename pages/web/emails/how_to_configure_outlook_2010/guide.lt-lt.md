---
deprecated: true
title: 'Svetainių talpinimas: El. pašto konfigūravimas Outlook 2010'
excerpt: ''
slug: svetainiu_talpinimas_el_pasto_konfiguravimas_outlook_2010
legacy_guide_number: g1299
---


## Paskyros kūrimas (1 dalis)
Norėdami sukurti Outlook 2010 paskyrą, pereikite į skyrių "Paskyros nustatymai...", kaip pavaizduota iliustracijoje.

![](images/img_1245.jpg){.thumbnail}


## Paskyros kūrimas (2 dalis)
Po to spragtelėkite Nauja....

Dabar galėsite rinktis [rankinį](#MANU) ar [automatinį](#AUTO) nustatymą.

![](images/img_1246.jpg){.thumbnail}


## 1 dalis: Konfigūravimo pasirinkimas
Pažymėkite Rankinis serverio parametrų arba papildomų serverių tipų konfigūravimas ir spragtelėkite Toliau >.

![](images/img_1247.jpg){.thumbnail}


## 2 dalis: Paslaugos pasirinkimas
Pažymėkite Interneto pranešimai, po to spragtelėkite Toliau >.

![](images/img_1248.jpg){.thumbnail}


## 3 dalis: Pranešimų siuntimo parametrai
Atsidariusiame lange įveskite tokią informaciją:

1.Vardas: Įveskite vardą, kuris bus matomas siunčiamuose laiškuose;
2.El. pašto adresas: Visas el. pašto adresas;

3.Paskyros tipas:POP3 (jeigu norite konfigūruoti IMAP, žr. [POP - IMAP parametrus](#RAPPEL));
4.Gautų laiškų serveris: SSL0.OVH.NET
5.Siunčiamų laiškų serveris (SMTP): SSL0.OVH.NET

6.Vartotojo vardas: Jūsų el. pašto adresas;
7.Slaptažodis: El. pašto dėžutės slaptažodis.

![](images/img_1249.jpg){.thumbnail}


## 4 dalis: Bendri nustatymai
1. Spragtelėkite Kiti nustatymai....
Čia galėsite įvesti kitą paskyros pavadinimą. Pagal nutylėjimą, tai yra el. pašto adresas. Pavyzdyje pavadinimą pakeitėme į Support OVH.
Šis pavadinimas bus matomas Outlook paskyrų valdyme.

2. Spragtelėkite kortelę Siunčiamų laiškų serveris.

![](images/img_1250.jpg){.thumbnail}


## 5 dalis: Siunčiamų laiškų serveris ir išsamūs nustatymai
Kortelėje Siunčiamų laiškų serveris pažymėkite "Mano siunčiamų laiškų serveris (SMTP) reikalauja prisijungimo", po to pažymėkite Naudoti tą patį prisijungimo vardą kaip ir gaunamų laiškų serveryje.

Būtina naudoti 587 SMTP serverio prievadą ir pažymėti laukelį, kad serveris reikalauja prisijungimo. 
Šį prievadą leidžia naudoti visi IPT.

- Būtina įjungti "išeinančių laiškų autentifikaciją", priešingu atveju laiškai nebus siunčiami per mūsų SMTP serverius.

- Jeigu autentifikacija nebus įjungta, automatiškai bus sukurtas gedimo kvitas Open SMTP ir jūs būsite informuoti, kad "POP before SMTP" mūsų sistemoje nepalaikoma. Norėdami siųsti laiškus, privalėsite įjungti išeinančio serverio autentifikaciją.


Kortelėje Išsamūs nustatymai įveskite šiuos parametrus:

Gautų laiškų serveris (POP3): Turi būti 110.

Laukelis Šis serveris reikalauja šifruoto sujungimo (SSL) turi būti nepažymėtas.

Siunčiamų laiškų serveris (SMTP): Turi būti 587.

Laukelio Naudoti šifruotą sujungimą parinktis turi būti Jokio.

Spragtelėkite OK, kad tęstumėte.

Čia taip pat galite nustatyti, ar trinti laiškus iš serverio bei po kurio laiko laiškai turi būti trinami.

![](images/img_1251.jpg){.thumbnail}


## 6 dalis: Nustatymų tikrinimas
Šiame žingsnyje galite spragtelėti "Tikrinti paskyros nustatymą..." ir patikrinti, ar viską nustatėte teisingai.

![](images/img_1267.jpg){.thumbnail}


## 7 dalis: Konfigūracijos pabaiga
1. Kai patikrinsite nustatymus, spragtelėkite Toliau >.
2. Paskutiniame žingsnyje nustatymai bus patikrinti dar kartą. Po to spragtelėkite Uždaryti.

![](images/img_1266.jpg){.thumbnail}


## 8 dalis: Sveikiname!
El. pašto dėžutė sėkmingai sukonfigūruota programoje Outlook 2010. Spragtelėkite Baigti.

![](images/img_1254.jpg){.thumbnail}


## 1. Įveskite informaciją
1.Vardas: Vardas, kuris bus matomas išsiųstuose laiškuose;
2.El. pašto adresas: Visas el. pašto adresas;
3.Slaptažodis: Jūsų el. pašto dėžutės slaptažodis. Jį reikia įvesti į du laukelius.

Po to spragtelėkite Toliau >.

![](images/img_1264.jpg){.thumbnail}


## 2. Autorizacija
Programa Outlook tikrins domeno elementus, kad galėtų automatiškai užbaigti konfigūravimą. 
Jeigu tikrinimas pavyks, matysite pavaizduotą pranešimą.

Turite daugiau su šiuo domenu susietų el. pašto adresų? Pažymėkite "Don't ask about this website again".
Taip išvengsite to paties mygtuko paspaudimo įtraukiant kiekvieną el. pašto paskyrą.

Po to spragtelėkite "Allow".

Jeigu nematote tokio pranešimo, pabandykite prisijungti per [Webmail](http://webmail.ovh.net) sąsają, kad patikrintumėte, ar teisingi prisijungimo duomenys. Jeigu prisijungti pavyks, tuomet tikrinkite DNS nustatymus ir pabandykite surasti šiuos 3 įrašus:


```
_submission._tcp.votredomaine SRV 0 0 465 SSL0.OVH.NET
_imaps._tcp.votredomaine SRV 0 0 993 SSL0.OVH.NET
_autodiscover._tcp.votredomaine SRV 0 0 443 mailconfig.ovh.net.
```


DNS tikrinimą galite atlikti [Kliento Sąsajoje](https://www.ovh.com/manager/web), prisijungę spragtelėkite savo domeną, po to spragtelėkite DNS zona ir, dešinėje pusėje, Suvestinė. Jeigu nematote pastarojo mygtuko, spragtelėkite Eksperto režimas (viršutiniame dešiniajame kampe).

![](images/img_1265.jpg){.thumbnail}


## 3. Konfigūravimas baigtas
Programa Outlook sėkmingai sukonfigūruos paskyrą. Spragtelėkite Baigti.

![](images/img_1263.jpg){.thumbnail}


## POP nustatymai
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




## IMAP nustatymai
Čia pateikiama informacija, kuria reiktų vadovautis konfigūruojant el. pašto paskyrą su IMAP.

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




## Bendra informacija
Jeigu pageidaujate, mes galime sukonfigūruoti jūsų pašto programą. Tai atliekama užsakius mokamą intervenciją. OVH taip pat gali atlikti kitas su el. paštu susijusias mokamas intervencijas.

OVH atliekamų mokamų intervencijų informacija pateikiama šiame gide:


- []({legacy}1683)


Norėdami užsakyti intervenciją, sekite gide nurodytus žingsnius.

![](images/img_2503.jpg){.thumbnail}

