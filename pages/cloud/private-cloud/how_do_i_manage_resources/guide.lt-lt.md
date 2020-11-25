---
deprecated: true
title: Kaip valdyti resursus?
excerpt: ''
slug: kaip_valdyti_resursus
legacy_guide_number: g602
---


## 
Aptarsime, kaip galite kontroliuoti savo Private Cloud resursus.  
Naudokite vSphere klientinę programą, kurią galite įsidiegti lokaliai, arba RDP jungtį, kurią suteikėme PCC aktyvavimo metu.


## Mazguose
PCC mazgo skiltyje matysite globalią savo mazgo resursų apžvalgą:

![](images/img_98.jpg){.thumbnail}


## Klasteryje ar resursų banke (pool)
Visą informaciją apie PCC resursus galite matyti PCC skiltyje "Ressource Allocation".
Čia rasite informaciją apie visus prieinamus resursus: RAM, CPU, saugyklos vietą. Matydami visus resursus galėsite atskirti viename iš mazgų ar virtualių duomenų centrų pernelyg didelę apkrovą sukuriančią VM. Galėsite nustatyti disko prieigos (I/O) apribojimus savo saugykloms. Taip pat galėsite suteikti pirmenybes kiekvienai iš savo VM, taip pat valdyti VM resursų apribojimus, kad neleistumėte kai kurioms VM monopolizuoti per daug resursų ir pabloginti visą našumą. Be to, galėsite valdyti resursus VM resursų banke (pool).

![](images/img_96.jpg){.thumbnail}


## Resursų grafinis atvaizdavimas klasteriuose ar mazguose
Skiltyje "Performance" matysite savo klasterio ar mazgo naudojimo grafiką:

![](images/img_95.jpg){.thumbnail}
Norėdami personalizuoti visus grafinius atvaizdus, spauskite mygtuką "Advanced", vėliau "Chart Option...". 
Pasirinkite rodomą laiko intervalą ar grafinio atvaizdavimo tipą, kad galėtumėte atlikti tikslesnę šių duomenų analizę:

![](images/img_100.jpg){.thumbnail}
Grafinio atvaizdavimo personalizavimas:

![](images/img_101.jpg){.thumbnail}


## Jūsų saugyklose
Pasirinkę Duomenų centro skilties skirtuką "Duomenų saugykla" (ar Datastore), matysite visas savo saugyklas. Taip galėsite stebėti, kiek vietos panaudojama visoje jūsų infrastruktūroje:

![](images/img_102.jpg){.thumbnail}

