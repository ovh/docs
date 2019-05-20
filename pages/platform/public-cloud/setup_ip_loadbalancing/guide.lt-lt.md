---
title: IP LoadBalancing konfigūravimas
excerpt: IP LoadBalancing konfigūravimas
slug: ip_loadbalancing_konfiguravimas
legacy_guide_number: g1927
---


## 
Jeigu kuriate aukšto pasiekiamumo infrastruktūrą ar norite paskirstyti apkrovą, tikriausiai pagalvojote apie IP LoadBalancing naudojimą.

Ši paslauga jau suderinama su Public Cloud VM.

Šiame gide paaiškinama, kaip konfigūruoti IP LoadBalancing (IP LB) Public Cloud serveriuose.


## Reikalavimai

- 2 VM (instances)
- 1 IP LoadBalancing




## Backend IP adresų pridėjimas

- Virtualių mašinų pridėjimas kaip Backend



![](images/img_2967.jpg){.thumbnail}

- Pereikite į OVH valdymo sąsajos skyrių „Dedicated“



![](images/img_2968.jpg){.thumbnail}

- Kairiajame meniu spragtelėkite „IP“, po to „IP LoadBalancing“



![](images/img_2969.jpg){.thumbnail}

- Spragtelėkite „Pridėti backend“, po to pasirinkit savo VM (instance) IP adresą



![](images/img_2970.jpg){.thumbnail}
Jeigu neturite Kelių duomenų centrų parinkties, matysite tik suderinamus IP adresus.


## Kiti veiksmai
Kai pridėsite IP adresus, jie bus matomi valdymo sąsajoje.

![](images/img_2971.jpg){.thumbnail}
Su nurodytais IP adresais galėsite atlikti papildomus veiksmus:

- Keisti svarbą
- Keisti protokolą
- Nustatyti atsarginį BackEnd
- Ištrinti BackEnd



![](images/img_2972.jpg){.thumbnail}


## 
[Grįžti į Cloud gidų sąrašą]({legacy}1785)

