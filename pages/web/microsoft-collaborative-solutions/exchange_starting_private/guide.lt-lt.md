---
deprecated: true
title: 'Exchange: pirmi žingsniai su Private serveriu'
excerpt: Pirmi žingsniai su Private serveriu
slug: exchange_pirmi_zingsniai_su_private_serveriu
legacy_guide_number: g2074
---


## 1 žingsnis: el. pranešimas apie jūsų serverio konfigūravimą
Iškart po užsakymo apmokėjimo jums el. paštu bus išsiųstas pranešimas apie jūsų Private serverio įdiegimą.
Šis el. laiškas išsiųstas jūsų el. pašto adresu, nurodytu jūsų kliento paskyroje, ir taip pat prieinamas jūsų valdymo sąsajoje.
Norėdami peržiūrėti šį el. laišką valdymo sąsajoje:


- spragtelėkite savo kliento ID (viršutiniame dešiniajame kampe, pvz., ab12345-ovh) ir „Mano paskyra“



![](images/img_4047.jpg){.thumbnail}

- Gauti el. laiškai



![](images/img_4050.jpg){.thumbnail}
Šiame žingsnyje rasite jums išsiųstą el. laišką ir galėsite sukonfigūruoti savo Private Exchange serverį:


- el. laiško tema:

Jūsų Exchange 2016v1 paslauga yra suteikiama!


![](images/img_4051.jpg){.thumbnail}
Išsami informacija apie gautą el. laišką:


```
Gerbiamas kliente,

Šiuo metu jūsų Private Exchange 2016v1 el. pašto paslauga yra suteikiama. 

Jūs galėsite naudotis Private Exchange 2016v1 po kelių žingsnių:

- Personalizuokite savo prieigos prie žiniatinklio pašto nuorodą (dedikuotą SSL sertifikatą);
- Įveskite korespondencijos el. pašto adresą norėdami patvirtinti savo sertifikatą (dėmesio: šis el. pašto adresas turi būti veikiantis ir jums pasiekiamas).

Norėdami atlikti šiuos veiksmus spauskite nuorodą:

https://www.ovh.com/fr/emails/commande/?orderId=5035xxxx&orderPassword=nqiJ#/serverConfig

Prisijunkite su savo kliento ID (ab12345-ovh) ir slaptažodžiu.

SVARBU: po šių veiksmų liks paskutinis žingsnis: pasirinkto subdomeno nukreipimas į jūsų serverio IP adresą (IP adresas bus nurodytas antrame el. laiške).

Reikia pagalbos?
Atraskite visus mūsų Exchange gidus:

https://www.ovh.lt/El_pastas/hosted-exchange/gidai/

Nuoširdžiai,

OVH pagalba
```




## 2 žingsnis: Automatinis DNS zonos konfigūravimas
Spauskite gautame el. laiške esančią nuorodą ir būsite nukreipti į serverio konfigūravimo puslapį.

![](images/img_4052.jpg){.thumbnail}

- Jūsų serverio pavadinimas: jūs turite apibrėžti savo serverio pavadinimą arba prieigos prie žiniatinklio pašto nuorodą. Jūs galėsite rinktis iš kelių galimų sprendimų.


Pavyzdžiui:


- mail
- exchange
- exchange2016


Pasirinkę subdomeną nurodykite galiojantį domeną. Prieigos prie žiniatinklio pašto (owa) nuoroda bus, pavyzdžiui:
exchange2016.jusudomenas.lt
Antrame žinsgnyje pasirinkite el. pašto adresą, kuriuo pageidausite gauti el. pranešimą apie SSL sertifikato patvirtinimą. Šis el. pašto adresas turi būti galiojantis. Priešingu atveju, nebegalėsite patvirtinti savo SSL sertifikato.

Siūlomame sąraše yra bendriniai el. pašto adresai, pavyzdžiui:


- postmaster@jusudomenas.lt
- administratorius@jusudomenas.lt
- admin@jusudomenas.lt


Jeigu jūsų domenas talpinamas OVH ir neturite el. pranešimų siuntimo paslaugos, jūsų galite sukurti el. pašto adreso adresas@jusudomenas nukreipimą (alias) į kitą veikiantį adresą, tiesiai valdymo sąsajoje.

Jūs taip pat galite sukurti el. pašto peradresavimą į kitą veikiantį el. pašto adresą.
DNS Assist parinktis: ši parinktis leidžia automatiškai konfigūruoti jūsų DNS zoną (kurti IPv4 tipo lauką priklausomai nuo pasirinkto subdomeno).
Jūsų domeno administratoriaus kontaktas turi sutapti su Private serverio užsakymą pateikusio kontakto identifikatoriumi. Priešingu atveju, DNS zonos konfigūravimą reikės atlikti rankiniu būdu.
Mūsų pavyzdyje naudojama DNS Assist parinktis. Po to galėsite patvirtinti konfigūraciją. Jeigu naudojatės DNS Assist parinktimi, nebūtina atlikti 3 žingsnio.


## 3 žinsgnis: DNS zonos konfigūravimas rankiniu būdu
Jeigu jūsų domeno administratoriaus kontaktas nesutampa su Private serverio administratoriaus kontaktu arba domenas nėra talpinamas OVH, jums bus išsiųstas antras el. laiškas, kuriame bus pateikta informacija apie būtinus atlikti veiksmus norint pakeisti DNS zoną.

El. laiško turinys:


```
Tema: [OVH-EXCHANGE] Jūsų Exchange serveris beveik paruoštas!

Sveiki,

Norėdami užsakyti SSL sertifikatą savo serveriui, jūs turėtumėte sukurti adresą savo DNS zonoje.  

Jūsų pasirinktas el. pašto adresas yra: exchange2016.testinterne.ovh
Jūsų serverio IP adresas yra: 149.202.xxx.103

Prašome sukurti A įrašą.

Nuoširdžiai,

OVH pagalba
```


Šiuo atveju, būtina sukurti A tipo įrašą, atitinkantį:


- exchange2016.testinterne.ovh A 149.202.xxx.103




## 4 žingsnis: jūsų SSL sertifikato patvirtinimas
Po DNS zonos konfigūravimo automatinėmis priemonėmis ar rankiniu būdu jūs gausite patvirtinimą el. pašto adresu, kurį nurodėte savo prieigos prie žiniatinklio pašto nuorodos personalizavimo metu.
Šio el. laiško siuntimas gali užtrukti iki 4 valandų.
Gauto el. laiško turinys:

![](images/img_4059.jpg){.thumbnail}
Po to spauskite nuorodą ir patvirtinkite savo SSL sertifikatą.
Po to būsite nukreipti į Global Sign sąsają, kurioje galėsite patvirtinti savo SSL sertifikatą. Patvirtinimui reikės paspausti I APPROVE.

![](images/img_4054.jpg){.thumbnail}


## Baigiamasis etapas
Po SSL sertifikato patvirtinimo galutinis paslaugos suteikimas gali užtrukti iki 4 valandų. Visuose šiuose etapuose jūsų Private Exchange serveris nėra matomas jūsų valdymo sąsajoje.

Kai jūsų serveris bus paruoštas ir prieinamas, jums bus išsiųstas patvirtinimas el. paštu. Jį galėsite matyti valdymo sąsajoje.

El. laiško tema: Jūsų Private Exchange 2016 paslauga yra paruošta!

Norėdami atlikti savo pranešimų siuntimo paslaugos konfigūravimą, vadovaukitės [šiuo gidu](https://www.ovh.lt/g1311.exchange-paslaugos-konfiguravimas).

