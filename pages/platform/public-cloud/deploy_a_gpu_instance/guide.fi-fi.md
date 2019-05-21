---
title: 'GPU-instanssin käyttöönotto'
slug: gpu-instanssin-kayttoonotto
excerpt: 'Katso, kuinka GPU-instanssia käytetään Linuxilla tai Windowsilla'
section: Hallintapaneelissa
---

**Päivitetty 25.9.2018**

## Tavoite

GPU-instanssit ovat teknisesti samanlaisia kuin 2017-sarjan instanssit, mutta niissä on tämän lisäksi grafiikkakortti (Graphic Processsing Unit tai GPU). Käytetyn teknologian (*pci_passthrough*) avulla instanssin käyttöjärjestelmä voi hallita grafiikkasuoritinta aivan kuin fyysisellä koneella.

Mahdolliset grafiikkasuorittimet ovat NVIDIA GeForce GTX 1060, GTX 1070 tai GTX 1080Ti. 

> [!warning]
> 
> GPU-instansseja on toistaiseksi saatavilla ainoastaan GRA3, GRA5 ja BHS3-konesaleissa. On mahdollisesti tarpeen luoda uusi projekti ja valita 2017-sarja. Lisätietoa [täällä](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/).
> 

**Tässä ohjeessa kerrotaan, kuinka GPU-instanssi otetaan käyttöön Linuxilla tai Windowsilla**.


## Edellytykset

- Olet luonut [Public Cloud -projektin](https://www.ovh-hosting.fi/public-cloud/instances/){.external}, jolla on pääsy alueille, joilla GPU on saatavilla (GRA3, GRA5 ja BHS3). 

## Käytännössä

Löydät alla tiedot GPU-instanssin käyttöönottoon Linuxilla tai Windowsin kautta.


### Linuxilla

Kaikkia tarjoamiamme imageja voidaan käyttää GPU-instansseilla.

> [!primary]
>
> Jos ydinmoduulin kokoaminen käsin tuntuu epämukavalta, suosittelemme käyttämään jotakin Nvidian virallisesti tukemaa distribuutiota. Nvidia toimittaa niihin erilaisia *avaimet-käteen-ratkaisuja*: <https://developer.nvidia.com/cuda-downloads>.
> 

Kun olet kirjautunut [hallintapaneeliisi](https://www.ovh.com/auth/?action=gotomanager){.external} ja Public Cloud -projektiisi, klikkaa kohtaa `Lisää palvelin`{.action} ja valitse GPU-instanssi: 

![public-cloud](images/EN-Flavors.png){.thumbnail}

Muutaman sekunnin kuluttua instanssi on käynnistetty. Voit tämän jälkeen kirjautua siihen ja tarkistaa grafiikkakortin läsnäolon:  

```ssh
lspci | grep -i nvidia
00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
```

Grafiikkakortti löytyy, mutta ei vielä käytettävissä. Nyt on asennettava NVIDIA-ajurit. Löydät pakettilistat seuraavasta osoitteesta: [Saatavilla oleva Linux-pakettilista](http://developer.download.nvidia.com/compute/cuda/repos/){.external}.

Seuraavaksi on vain näpyteltävä seuraavat komennot:

```sh
wget URL_ladattava_paketti
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> Linux-komento voi vaihdella distribuutiosta riippuen, epäselvissä tapauksissa tarkista Linux-versiosi virallisesta dokumentaatiosta.
> 


Kun instanssisi on uudelleenkäynnistetty, grafiikkakortti on näkyvissä NVIDIA-työkalussa:

```sh
nvidia-smi
Wed Apr 26 13:05:25 2017
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 375.51                 Driver Version: 375.51                    |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  GeForce GTX 106...  Off  | 0000:00:05.0     Off |                  N/A |
|  0%   22C    P0    26W / 120W |      0MiB /  6072MiB |      0%      Default |
+-------------------------------+----------------------+----------------------+

+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID  Type  Process name                               Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

GPU-instanssi on nyt täysin toiminnallinen ja käyttövalmis.


### Windows-käyttöjärjestelmässä

Nvidia-ajuri ja virtualisointiratkaisu *KVM/pci_passthrough* eivät ole täysin yhteensopivia. **Standardit Windows-imaget eivät toimi.**

Toimitamme erityisiä virtuaaliseen BIOS UEFI -standardiin perustuvia imageja, joiden ansiosta ajuri voi toimia oikein:

![public-cloud](images/EN-WindowsImages.png){.thumbnail}


> [!warning]
>
> Emme voi taata ratkaisun toimivuutta kaikkien tulevien NVIDIA-ajurien kanssa.
>
> Ennen NVIDIA-ajurin päivitystä on erittäin suositeltavaa ottaa tilannekuva, mikä mahdollistaa tarvittaessa palaamisen takaisin.
>

Kun GPU-instanssi on uudelleenkäynnistetty, on NVIDIA-ajuri käynnistettävä [virallisella verkkosivulla](https://www.nvidia.com/Download/index.aspx){.external}.

Käynnistä instanssi käyttäen jotakin GPU:n flavoreista (win-g1-15, win-g1-30...).

Muutaman sekunnin kuluttua instanssi on käynnistetty. Jäljellä on vielä tarvittavan ajurin asennus, jonka jälkeen se tulee näkyviin tänne:


![public-cloud](images/WindowsDriverVersion.png){.thumbnail}

![public-cloud](images/WindowsDeviceManager.png){.thumbnail}


## Lue lisää aiheesta

Viesti käyttäjäyhteisömme kanssa osoitteessa: <https://community.ovh.com/en/>.