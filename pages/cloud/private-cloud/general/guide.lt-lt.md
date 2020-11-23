---
deprecated: true
title: Bendra informacija
excerpt: ''
slug: bendra_informacija
legacy_guide_number: g597
---


## 
Išskirtinė šio produkto savybė ta, kad jį galima diegti tiesiogiai į techninę įrangą (kalbame apie hipervizorių "Bare Metal"). Norint įdiegti VMware Esxi mazgo OS diegti nebūtina. 
VMware ESXi - tai hipervizorius, leidžiantis tiksliai valdyti kiekvienos virtualios mašinos resursus ir našumą.
Iš tikrųjų virtuali mašina susideda iš daugybės failų saugyklų (filers).  
Šiai failų saugyklų sistemai būdingos įvairios savybės, svarbiausia - gebėjimas valdyti daugybę prisijungimų tuo pat metu. 
ESXi taip pat turi labai tikslius bendros atminties valdymo mechanizmus, pvz., nepanaudotos atminties atkūrimo, taip pat perkrauties failo (page file) dedublikacijos ir dekompresijos.


## 
Su šiuo įrankiu galite perkelti ESXi serverio virtualią mašiną į kitą "karštai", t.y. nepertraukiant paslaugos teikimo. Ši operacija gali būti atlikta tik tuomet, kai prieglobos (host) serveriuose naudojami suderinami mikroprocesoriai (OVH siūlomi mazgai yra suderinami), o virtualių mašinų failų saugyklų užimama erdvė bendrai naudojama SAN ar NAS.


## 
Su šiuo įrankiu galite skirstyti apkrovą tarp daugybės ESXi serverių.
Jums prieinama daugybė veikimo režimų. Pavyzdžiui, galite nustatyti, kad DRS automatiškai valdytų resursų paskirstymą tarp ESXi serverių.
DRS paremtas vMotion mechanizmu, leidžiančiu perkelti virtualias mašinas tarp įvairių ESXi serverių tame pačiame klasteryje. Taip pat galima sukurti ryšių taisykles, siekiant grupuoti ar atskirti VM viename ar keliuose ESXi serveriuose. (Pvz., pirminis ir antrinis AD).


## 
Ši vCenter parinktis kuria ESXi serverių klasterį juos susiedama. 
"vLockStep" technologija, kuria paremtas FT klasteris, leidžia antrinio serverio virtualiai mašinai tuo pat metu vykdyti pagrindinio serverio VM. Tik pagrindinis serveris atlieka rašymą į diską ar tinklą: antrinis serveris tuo pat metu vykdo tą pačią VM, nevykdant rašymo.
Pagrindinio serverio gedimo atveju, vCenter panaikina jo aktyvaciją. Tai leidžia antriniam serveriui perimti darbą siekiant užtikrinti šios VM veikimo nenutrūkstamumą.

## DĖMESIO!!!
Kol kas ši funkcija nepalaikoma Private Cloud.


## 
vCenter valdymo įrankis leidžia centralizuotai administruoti visas virtualias mašinas ir virtualios aplinkos fizinius mazgus. Šioje sąsajoje jūs taip pat galite valdyti:

- stebėjimo įspėjimus (CPU/RAM);
- šablonus (iš anksto sukonfigūruotas operacines sistemas);
- parinkčių naudojimą (HA, vMotion, DRS).



