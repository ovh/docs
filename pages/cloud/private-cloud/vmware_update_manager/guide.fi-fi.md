---
deprecated: true
title: Käytä VMware Update Manageria
excerpt: ''
slug: kayta_vmware_update_manageria
legacy_guide_number: g591
---


## Edellytykset
Annamme sinulle Update Manager pluginin vsphere Clientiin.

Sinulla täytyy olla olemassa oleva vSphere Client tietokoneellasi:

-[Asenna vSphere Client]({legacy}600)

## TÄRKEÄÄ!
Jos käytät RDP-yhteyttä jonka tiedot on annettu tunnustasi luodessa, Update Managerin asennus ei ole tarvittava.


## 
Asentaaksesi Update Managerin, sinun täytyy asentaa tähän liittyvät plugin vSphereesi:

![](images/img_156.jpg){.thumbnail}
Tämän jälkeen saat eteesi plugin-ikkunan ja Update Manager on ikkunan alalaidassa. Klikkaa "Download & install".

Kun asennus on suoritettu saat uuden välilehden joka näkyy klusterissa ja hosteissa:

![](images/img_66.jpg){.thumbnail}
Tämän kaiken jälkeen ainut mikä sinun täytyy tehdä, on klikata "Attach"-nappia ja valita päivitystyyppi:

![](images/img_67.jpg){.thumbnail}
Kun perusta on valittu ja kiinnitetty, voit suorittaa Patch & Upgrade -skannauksen:

![](images/img_68.jpg){.thumbnail}
Sitten saat eteesi taulukon jossa on lueteltu yhteenvetona päivitykset ja korjaukset ja päivitettyjen hostien statistiikka.
Jos haluat vain ladata päivitykset ilman asennusta, voit käyttää "Transfer"-nappia ja mikäli haluat asentaa ne, käytä "Correct"-nappia:

![](images/img_69.jpg){.thumbnail}

