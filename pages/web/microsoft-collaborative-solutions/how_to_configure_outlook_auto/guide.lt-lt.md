---
deprecated: true
title: Rankinis konfigūravimas Outlook
excerpt: Jeigu negalite sukurti SRV lauko, reikalingo automatiniam Outlook konfigūravimui, sekite šio gido nurodymus, kad sukonfigūruotumėte Outlook patys
slug: rankinis_konfiguravimas_outlook
legacy_guide_number: g1358
---


## GUID Exchange Recovery
Prieš pradedant konfigūruoti Outlook rankiniu būdu, reikia sužinoti zonos GUID, kurį rasite adreso, kurį norite konfigūruoti, dešinėje pusėje.

Pridėkite GUID prie @domenas.tld.

Pavyzdžiui, tai gali būti:
45c94143-1a29-4ef8-a990-06b54f9d6ad7@support-exchange.eu

![](images/img_1568.jpg){.thumbnail}
Outlook 2016 versija neleidžia automatinio konfigūravimo per SRV tipo lauką. Automatinio konfigūravimo gidas prieinamas [čia](https://www.ovh.lt/g1245.automatinis-outlook-konfiguravimas).


## Valdymo skydas
Čia pateikiami veiksmai atliekami kompiuteryje su Windows operacine sistema.

Pirmiausiai atidarykite kompiuterio Valdymo skydą (Control panel).

Spragtelėkite rodyti mažas piktogramas, kad matytumėte piktogramas „El. paštas“ arba „El. paštas (32-bit)“.

Spragtelėkite El. paštas arba El. paštas (32-bit). Pastaba: tai galima atverti ir per Outlook.


Po to spragtelėkite El. pašto paskyros.

![](images/img_992.jpg){.thumbnail}


## 2 žingsnis: Naujų el. pašto paskyrų pridėjimas
Spragtelėkite Nauja, kad pridėtumėte Exchange el. pašto paskyrą.

![](images/img_1551.jpg){.thumbnail}


## 3 žingsnis: El. pašto paskyra
Spragtelėkite El. pašto paskyra, po to Toliau.

![](images/img_994.jpg){.thumbnail}


## 4 žingsnis: Paskyros konfigūravimas
Spragtelėkite Rankinis nustatymas arba papildomi serverių tipai.

Po to spragtelėkite Toliau.

![](images/img_1552.jpg){.thumbnail}


## 5 žingsnis: Pasirinkite paskyrą
Spragtelėkite Microsoft Exchange Server arba suderinama paslauga.

Po to spragtelėkite Toliau.

![](images/img_1553.jpg){.thumbnail}


## 6 žingsnis: Serverio nustatymai
Serveris: Šiame laukelyje nurodykite anksčiau gautą Exchange GUID su @domenas.tld.

Naudotojo vardas: Įveskite visą el. pašto adresą.

Po to spragtelėkite Daugiau nustatymų....

![](images/img_1554.jpg){.thumbnail}


## 7 žingsnis: Exchange Proxy nustatymai
Kortelėje Jungtys pažymėkite „Jungtis prie Microsoft Exchange per HTTP“.

Po to spragtelėkite Exchange Proxy nustatymai.

![](images/img_1555.jpg){.thumbnail}


## 8 žingsnis: Prisijungimo nustatymai
Laukelyje „Naudoti šį URL prisijungimui prie Exchange Proxy serverio“ įveskite ex.mail.ovh.net.

Tada pasirinkite „Jungtis tik naudojant SSL“ ir laukelyje „Jungtis tik prie tų Proxy serverių, kurie nurodyti sertifikate“ įveskite: msstd:ex.mail.ovh.net.

Taip pat pažymėkite „Naudojant spartų ryšį pirmiausiai jungtis per HTTP, po to TCP/IP“ ir „Naudojant lėtą ryšį pirmiausiai jungtis per HTTP, po to TCP/IP“.

Po to spragtelėkite OK.

![](images/img_1556.jpg){.thumbnail}
Jei naudojatės Private pasiūlymu, vietoje ex.mail.ovh.net serverio nurodykite savo serverio SSL sertifikato pavadinimą.

Migruodami Exchange individualiam naudojimui 2010 į Exchange 2013 (pirmajame žingsnyje), vietoje ex.mail.ovh.net serverio nurodykite prieigos prie savo žiniatinklio pašto nuorodą, pavyzdžiui: xc12.mail.ovh.net. Šią informaciją rasite savo kliento valdymo sąsajoje, meniu Microsoft, po to Exchange.
Jei jūsų užsakymas buvo patvirtintas po 2016-04-26, Hosted pasiūlymui priskirtas Exchange serveris yra: ex2.mail.ovh.net


## 9 žingsnis: Prisijungimas
Atsidarys prisijungimo prie Exchnage serverio langas. Įveskite visą el. pašto adresą ir slaptažodį.

Nepamirškite pažymėti „Įsiminti informaciją“.

Jūsų el. pašto dėžutė sukonfigūruota. Galite atidaryti Outlook ir pradėti naudotis paslauga.

![](images/img_1557.jpg){.thumbnail}

