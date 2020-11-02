---
deprecated: true
title: Windows Server konfiguravimas pirma karta
slug: windows-first-config
excerpt: Siame gide suzinosite, kaip sukonfiguruoti prieiga prie nuotolinio darbalaukio per KVM, jeigu ji isjungta.
---


## Butinosios salygos
Įdiegus Windows Server 2012, 2012 R2 ar 2016 į VPS, yra tikimybė, kad prieiga prie nuotolinio darbalaukio išjungta, kaip ir ICMP protokolas. Šiame gide aprašoma, kaip įjungti prieigą.

Šiam tikslui būtina turėti:

- VPS su Windows Server 2012, 2012 R2 ar 2016.
- Prieigą prie OVH valdymo sąsajos.


## Procedura

### 1 zingsnis&#58; Prisijungimas per KVM
Prisijungimui prie KVM reikia prisijungti prie `OVH valdymo sąsajos`{.action}, tuomet skiltyje `Dedicated`{.action} pasirinkti VPS.

Po to dešinėje pusėje viršuje spauskite mygtuką `KVM`{.action}.


![KVM](images/windowsvps.png){.thumbnail}

Taip jūs prisijungsite prie VPS per KVM.


### 2 zingsnis&#58; pirmasis Windows konfiguravimas
Prisijungę per KVM matysite Windows darbalaukį, kuriame galėsite keisti klaviatūros kalbos nustatymus ar **Administrator** vartotojo slaptažodį.


![Langue](images/windows2.png){.thumbnail}


![Mdp](images/windows3.png){.thumbnail}


### 3 zingsnis&#58; Windows ugniasienes konfiguravimas
Junkitės prie skilties Windows `Administration tools`{.action}, po to `Windows Firewall with Advanced Security`{.action}.


![Admin](images/windows4.png){.thumbnail}

Tuomet jūs turėtumėte aktyvuoti ICMP ir prieigą prie Remote desktop *(dešinysis mygtukas -> Authorize)*.


![Active](images/windows5.png){.thumbnail}