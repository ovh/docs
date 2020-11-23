---
deprecated: true
title: Asenna VMware Tools
excerpt: ''
slug: asenna_vmware_tools
legacy_guide_number: g621
---


## 
Sinun täytyy käyttää vSphere-clienttia joko omalta tietokoneeltasi tai vaihtoehtoisesti käyttämällä esikonfiguroitua RDP-yhteyttä jonka tarjoamme kun aktivoit PCC:si.


## 
Mounttaa VMware Tools -levy virtuaalikoneessasi valitsemalla "Install/Upgrade VMware Tools" -vaihtoehto:

![](images/img_142.jpg){.thumbnail}
Tämän jälkeen sinun täytyy mountata aktivoitu asema seuraavalla komennolla:


```
# mount /dev/cdrom /mnt
```


Pura Tools-paketti. Tämän teemme hakemistossa /home:


```
#cd /home (for example)
#tar xvf /mnt/VmareTools-8.3.2-257589.tar.gz
#cd /home/VMWare-tools-distrib
#./VMWare-install.pl default
```


Kun asennus on suoritettu loppuun, Tool-levy otetaan automaattisesti pois käytöstä. #SECTION Asenna VMware Tools Linuxiin.


## 
Levyn mounttaamisen ja "Install/Upgrade VMware Tools" -valinnan jälkeen löydät levyn virtuaalikoneesi työpöydältä. Tuplaklikkaa sitä Tool-asennuksen suorittaaksesi:

![](images/img_143.jpg){.thumbnail}
Asennusvelho kysyy lisenssiehtojen hyväksymistä ja asennustavan valintaa (suosittelemme täyttä asennusta, "full installation").
Kun asennus on valmis, sinun täytyy bootata virtuaalikoneesi ottaaksesi käyttöön modifikaatiot.

