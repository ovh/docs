---
deprecated: true
title: VM paskirstymo tarp mazgų optimizavimas
excerpt: 'Kaip paskirstyti VM tarp mazgų, tam kad optimizuoti resursus?'
slug: vm_paskirstymo_tarp_mazgu_optimizavimas
legacy_guide_number: g1442
---


## OVH siūloma konfigūracija
PRO sudėtyje yra funkcija Dynamic Optimization, kuri padeda automatiškai paskirstyti klasterio apkrovą tarp skirtingų mazgų.
OVH siūloma PRO konfigūracija pagal nutylėjimą:

![](images/img_1991.jpg){.thumbnail}
Kas 20 minučių Dynamic Optimization automatiškai migruos VM tarp mazgų, kad atitiktų aukščiau pateiktus nustatymus.


## VM neįtraukimas į PRO
Jeigu jūs norite, kad VM nemigruotų automatiškai per PRO, jūs galite išjungti šią funkciją VM parinkčių lange:

![](images/img_1992.jpg){.thumbnail}


## Anti-affinity taisyklės
VMM yra galima kiekvienai VM sukurti Anti-affinity taisykles, kuriomis galima nurodyti, kurios VM vienu metu negali būti tame pačiame mazge.

Tai turite atlikti VM parinkčių puslapyje, skyriuje Hardware Configuration, Availability, Availability Sets:

![](images/img_1993.jpg){.thumbnail}
Sukurkite savybę ir pridėkite ją į skyrių "Assigned Properties":

![](images/img_1994.jpg){.thumbnail}
Atlikite tai kituose VM, kuriuos norite atskirti.

