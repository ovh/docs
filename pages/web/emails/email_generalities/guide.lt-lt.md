---
deprecated: true
title: 'Svetainių talpinimas: bendra informacija apie el. pašto sprendimus'
excerpt: Bendra informacija apie OVH el. paštą
slug: svetainiu_talpinimas_bendra_informacija_apie_el_pasto_sprendimus
legacy_guide_number: g1474
---


## Windows

- [Windows 10](https://www.ovh.lt/g2284.konfiguravimas_windows_10)

- [Windows 8](https://www.ovh.lt/g1281.konfiguravimas-windows-8)

- [Windows Phone](https://www.ovh.lt/g1346.konfiguravimas-windows-phone)

- [Windows Mail](https://www.ovh.lt/g1300.el-pasto-konfiguravimas-windows-mail)




## Apple

- [Mail de Mac](https://www.ovh.lt/g1287.konfiguravimas-mac-mail)

- [Mavericks & Yosemite](https://www.ovh.lt/g1599.mavericks)

- [El Capitan](https://www.ovh.lt/g1965.el-capitan)

- [Thunderbird sur Mac](https://www.ovh.lt/g1911.thunderbird-mac-konfiguravimo-gidas)

- [iPad iOS 7](https://www.ovh.lt/g1348.konfiguravimas-ipad)

- [iPhone iOS 3](https://www.ovh.lt/g1296.konfiguravimas-iphone-ios-3)

- [iPhone iOS 9.1](https://www.ovh.lt/g2004.konfiguravimas-iphone-ios-9-1)




## Outlook

- [Outlook 2007](https://www.ovh.lt/g1298.konfiguravimas-outlook-2007)

- [Outlook 2010](https://www.ovh.lt/g1299.konfiguravimas-outlook-2010)

- [Outlook 2013](https://www.ovh.lt/g1286.konfiguravimas-outlook-2013)

- [Outlook 2011 sur Mac](https://www.ovh.lt/g1345.konfiguravimas-mac-outlook-2011)




## Kita

- [Thunderbird Windows](https://www.ovh.lt/g1297.konfiguravimas-thunderbird)

- [Konfigūravimas planšetiniuose kompiuteriuose su Android 4.1.2](https://www.ovh.lt/g1283.konfiguravimas-android-4-1-2)

- [Konfigūravimas Android 4.4 mobiliajame telefone](https://www.ovh.lt/g1347.konfiguravimas-android-4-4-sistemose)

- [Konfigūravimas Android 5.1 mobiliajame telefone](https://www.ovh.lt/g1912.konfiguravimas-android-5-1)

- [Konfigūravimas BlackBerry aplinkoje](https://www.ovh.lt/g1381.konfiguravimas-blacberry-aplinkoje)

- [Gmail](https://www.ovh.lt/g1408.konfiguravimas-gmail)




## Prieiga
Jūs galite siųsti savo el. laiškus ir juos gauti naudojant mūsų žiniatinklio pašto sąsają, prieinamą [šiuo adresu](http://webmail.ovh.net/).

Naudodamiesi [šiuo gidu](https://www.ovh.lt/g1302.roundcube-naudojimo-gidas) įvaldysite žiniatinklio paštą.

![](images/img_2007.jpg){.thumbnail}


## IMAP konfigūravimas (rekomenduojama)
Pateikiame išsamią informaciją, reikalingą konfigūruojant IMAP el. pašto paskyrą.

IMAP konfigūravimas su įjungta ar išjungta SSL apsauga: 

El. pašto adresas: visas jūsų el. pašto adresas
Slaptažodis: slaptažodis, kurį sukūrėte [kliento paskyroje](https://www.ovh.com/manager/web/login/).
Naudotojo vardas: visas jūsų el. pašto adresas
Gaunamų pranešimų serveris:SSL0.OVH.NET
Gaunamų pranešimų serverio prievadas:993 arba 143
Išsiunčiamų pranešimų serveris:SSL0.OVH.NET
Išsiunčiamų pranešimų serverio prievadas:465 arba 587

Prievadai 143 ir 587 žymi, kad SSL apsauga išjungta.

Prievadai 993 ir 465 žymi, kad SSL apsauga įjungta. 


- Jūs privalote įjungti SMTP autentifikavimą išsiunčiamiems pranešimams.


|Prievadai|SSL apsaugaįjungta|SSLišjungta|
|Gaunamiems pranešimams|993|143|
|Išsiunčiamiems pranešimams|465|587|




## POP konfigūravimas
Pateikiame išsamią informaciją, reikalingą konfigūruojant POP el. pašto paskyrą. 

POP konfigūravimas su įjungta ar išjungta SSL apsauga:

El. pašto adresas: visas jūsų el. pašto adresas
Slaptažodis: slaptažodis, kurį sukūrėte [kliento paskyroje](https://www.ovh.com/manager/web/login/)
Naudotojo vardas: visas jūsų el. pašto adresas
Gaunamų pranešimų serveris:SSL0.OVH.NET
Gaunamų pranešimų serverio prievadas:995 arba 110
Išsiunčiamų pranešimų serveris:SSL0.OVH.NET
Išsiunčiamų pranešimų serverio prievadas:465 arba 587

Prievadai 110 ir 587 žymi, kad SSL apsauga išjungta.

Prievadai 995 ir 465 žymi, kad SSL apsauga yra įjungta. 


- Jūs privalote įjungti SMTP autentifikavimą išsiunčiamiems pranešimams.


|Prievadai|SSL apsaugaįjungta|SSLišjungta|
|Gaunamiems pranešimams|995|110|
|Išsiunčiamiems pranešimams|465|587|




## Autentifikavimo priminimas
Siekiant be klaidų siųsti el. laiškus būtina autentifikuoti išsiunčiamų pranešimų serverį.

Priešingu atveju, matysite šią klaidą:


```
"553 sorry, that domain isn't allowed to be relayed thru this MTA (#5.7.1)"
```



- Savo el. pašto kliento programoje patikrinkite, kad būtų aktyvuotas SMTP autentifikavimas išsiunčiamiems pranešimams, kaip paaiškinta aukščiau.



