---
deprecated: true
title: Automatinis rezervinis kopijavimas
excerpt: ''
slug: automatinis_rezervinis_kopijavimas
legacy_guide_number: g1486
hidden: true
---


## 
Norint naudotis šia paslauga būtina:


- Turėti VPS Cloud virtualų serverį
- Žinoti savo kliento ID
- Turėti prieigą prie serverio (SSH ar RDP)




## Iš tvarkytuvo
Pirmiausia jums reikės prisijungti prie OVH paslaugų valdymo sąsajos: [Tvarkytuvas](https://www.ovh.com/manager/web/)

![](images/img_2080.jpg){.thumbnail}

- Nurodykite savo kliento ID

- Įveskite OVH paskyros slaptažodį


Kairėje pasirinkite VPS:

![](images/img_2023.jpg){.thumbnail}
Pagrindiniame meniu pasirinkite "Automatinės atsarginės kopijos":

![](images/img_2026.jpg){.thumbnail}
Spragtelėkite piktogramą "Aktyvuoti automatines atsargines kopijas"

![](images/img_2027.jpg){.thumbnail}
Tuomet spauskite "atsiskaityti" ir pamatysite užsakymą:

![](images/img_2028.jpg){.thumbnail}
Jums atlikus mokėjimą, atsarginių kopijų paslauga bus jums automatiškai įdiegta.


## Iš tvarkytuvo
Jums reikia prisijungti prie tvarkytuvo ir pasirinkti VPS taip, kaip nurodyta šio gido pradžioje.
Pagrindiniame meniu pasirinkite "Automatinės atsarginės kopijos" ir matysite sąrašą galimų rezervinių kopijų:

![](images/img_2021.jpg){.thumbnail}
Spragtelėkite "Atstatymas":

![](images/img_2025.jpg){.thumbnail}
Patvirtinus operaciją, bus sukurta atkūrimo užduotis (trukmė: nuo 30 min. iki 1 val., priklausomai nuo pasirinkto VPS modelio).

Atlikus atkūrimą, el. paštu gausite prisijungimo prie VPS duomenis: 


```
PRIEIGOS PARAMETRAI:

VPS IPv4 adresas: Jūsų IPv4
VPS IPv6 adresas: Jūsų IPv6

VPS pavadinimas: vpsXXXXX.ovh.net

Jūsų VPS slaptažodis buvo suteiktas 2014-06-24 02:37:16.
```




## Iš tvarkytuvo
Prisijungus prie tvarkytuvo (kaip aprašyta aukščiau), VPS meniu, spauskite "Automatinis rezervinis kopijavimas" ir pasirinkite pageidaujamą prijungimo tašką:

![](images/img_2022.jpg){.thumbnail}
Patvirtinkite užklausą norėdami el. paštu gauti prieigos duomenis, reikalingus jūsų atsarginės kopijos prijungimui prie VPS.

El. paštu gausite komandas, reikalingas jūsų atsarginės kopijos prijungimui per NFS ar CIFS:


```
Jūs galite prijungti savo atsarginę kopiją Linux aplinkoje, naudojant šias komandas:

mount -t nfs -o ro,vers=3 IP.IP.IP.IP:/mnt/veeam/vpsXXXXX /mnt

Jums gali prireikti įdiegti nfs-common paketą, jei naudojate Debian ir Ubuntu, ir/ar nfs-utils ir nfs-utils-lib paketus, jei naudojate CentOS.

mount -t cifs -o username=vpsXXXXX,password=YYYYYY //IP.IP.IP.IP/VPSXXXXX /mnt

Jums gali prireikti įdiegti cifs-utils paketa, jei naudojate Debian, Ubuntu ir CentOS.
```



