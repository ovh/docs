---
deprecated: true
title: VM importavimas į jūsų Dedicated Cloud HyperV
excerpt: 'Šiame gide yra aiškinama, kaip įkelti turimas VM į HyperV Dedicated Cloud'
slug: vm_importavimas_i_jusu_dedicated_cloud_hyperv
legacy_guide_number: g1450
---


## Eksportuokite savo VM
Mes negalime aprašyti, kaip reikia atlikti VM eksportavimą, nes tai priklauso nuo jūsų naudojamo sprendimo. Tačiau jums reikia ieškoti disko išsaugojimo funkcijos į su Hyper-V suderinamu formatu: vhdx ar vmdk (vmware).

Jeigu išsisaugoję diską formatu vhdx:
Žiūrėkite toliau importavimo skyrių.

Jeigu išsisaugoję diską formatu vmdk:
Būtina konvertuoti vmdk į vhdx, kad ji būtų suderinama su HyperV. Šiam tikslui galite naudoti vieną šių priemonių:

- Microsoft Virtual Machine Converter Solution Accelerator
- 2Tware Convert VHD

Galima naudoti ir kitokius įrankius. Tačiau OVH neneša jokios atsakomybės už visus įrankius, sukurtus kitų gamintojų.


## Prisijungimas prie bibliotekos per FTPS
Išsaugoję diską galite jį įkelti į savo VMM atvaizdų biblioteką, iš kurios galėsite kurti VM. Prisijungti per FTP ir įkelti diską galite taip, kaip nurodyta šiame gide: []({legacy}1425).
Nepamirškite, kad diską reikia įkelti į aplanką "Data".

![](images/img_1995.jpg){.thumbnail}


## Patikrinkite, ar diskas yra VMM
Gali prireikti atnaujinti dialogo langą, kad diskas būtų matomas VMM. Gali būti, kad reikės truputi palaukti, kol diskas atsiras VMM.

![](images/img_1996.jpg){.thumbnail}


## Šablono kūrimas iš disko.
Jūs galite iš šio disko sukurti šabloną, kurį galėsite naudoti kituose projektuose. Kaip tai atlikti paaiškinta šiame gide:  []({legacy}1436)


## VM kūrimas iš disko
Jeigu nieko nenorite keisti, tuomet galite sukurti VM iš disko. Kaip tai padaryti paaiškinta šiame gide: []({legacy}1426)

