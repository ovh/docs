---
deprecated: true
title: Miten käyttöjärjestelmään lisätyn levytilan voi nähdä?
excerpt: ''
slug: miten_kayttojarjestelmaan_lisatyn_levytilan_voi_nahda
legacy_guide_number: g615
---


## 
Ennen tämän operaation suorittamista, suosittelemme ottamaan varmuuskopion datastasi tai kloonaamaan virtuaalikoneesi.


## Linuxille
Erillisen partitiointisovelluksen käyttäminen on tarpeen Linuxilla. Alla listattuna eri sovelluksia:


- [7tools Partition Manager](http://www.7tools.com/pm/index.htm)
- [DFSee](http://www.dfsee.com/dfsee/index.php)
- [EASEUS Partition Manager](http://www.partition-tool.com)
- [GParted LiveCD](http://gparted.sourceforge.net/livecd.php)
- [Partition Logic](http://partitionlogic.org.uk)
- [Paragon Partition Manager](http://www.partition-manager.com)
- [Ranish Partition Manager](http://www.ranish.com/part)
- [System Rescue CD](http://www.sysresccd.org/Main_Page)


Tässä ohjeessa olemme valinneet GPartedin jonka ISO-levykuva-asennusmallista.

Sinulla on kolme tapaa käynnistää virtuaalikone GParted Live CD:ltä.

- Käynnistäessäsi virtuaalikoneen, paina VMwaren latauspalkin aikana ESC-näppäintä mennäksesi käynnistysjärjestukseen ja valitse ”CD-Rom”.
- Saadaksesi tämän valinnan joka kerta, voit muuttaa VMwaren latauspalkin näkyvyysaikaa kohdassa ”Options” –> ”Boot Option” ja sieltä kasvattamalla arvoa ”Power On Boot Delay” virtuaalikoneesi asetuksissa.
- Asetuksissa (”Options” –> ”Boot Options”) ollessasi, tarkista että ”Force BIOS setup”-valinta on valittuna. Kun olet vahvistanut tämän, uudelleenkäynnistä virtuaalikoneesi. Levyn päivittämisen jälkeen, mene virtuaalikoneesi CD-asema-asetuksiin ja valitse ISO-GParted-tiedosto.

Myös ”Connect at power on”-valinta täytyy olla käytössä.
Kun olet BIOS-asetuksissa kohdassa ”Boot”, käytä nuolinäppäimiä mennäksesi CD-aseman kohdalle ja näppäintä ”+” valitaksesi kovalevyn. Täten virtuaalikoneesi uudelleenkäynnistyy käyttäen GParted-CD-levyä:

![](images/img_126.jpg){.thumbnail}
Nyt mene kohtaan ”Exit”, valitse ”Exit Saving Changes” ja vahvista valinta:

![](images/img_127.jpg){.thumbnail}
Olet nyt GPartedin käynnistysosiossa. Vahvista GParted Live -valinta:

![](images/img_128.jpg){.thumbnail}
Valitse näppäimistö ja kieli jota käytät:

![](images/img_129.jpg){.thumbnail}
Olet nyt GPartedin graafisessa käyttöliittymässä:

![](images/img_130.jpg){.thumbnail}
Ensin sinun täytyy siirtää swap-tiedosto. Klikkaa sitä ja valitse "resize". Sen jälkeen kirjoita ”0” (nolla) kohtaan ”Free space following (MB)”. Tämän jälkeen valitse levyosio jota haluat kasvattaa ja klikkaa ”resize”. Kasvata osion kokoa käyttämällä nuolinäppäimiä kunnes olet saavuttanut halutun koon.
Tähän mennessä mikään levylläsi ei ole muuttunut vaan sinun täytyykin ottaa asetukset voimaan klikkaamalla ”Apply”. Kaikki tähän asti määritellyt muutokset ovat nyt päivitetty/käytössä.
Voit nyt vahvistaa operaatioiden päättymisen ja suorittaa virtuaalikoneesi uudelleenkäynnistyksen tuplaklikkaamalla ”Exit”.
Palvelimesi uudelleenkäynnistyy ja käyttöjärjestelmä käyttää kaiken vapaan tilan jonka olet kohdentanut sille.


## Windowsilla
Sinun täytyy käyttää Windowsin levyhallintatyökalua. Siirry palvelimella kohtaan ”Server Manager” –> ”Storage” –> ”Disk Management”.
Levyllämme 0 C-asemalla, levytilaa on saatavilla 20 GB. Klikkaa oikealla C-asemaa ja valitse ”Extend Volume ...”.
Määrittele nyt levytila jonka haluat lisätä. Esimerkissämme määrittelemme kaiken saatavilla olevan tilan. Tämän jälkeen vahvista operaatio.
Kaikki levytila on nyt määritelty C-asemallesi.

## VAROITUS!
OVH ei ota mitään vastuuta vahingosta joka saattaa ilmeentyä datan toimivuudelle, näytä työkaluja käyttämällä.

