---
title: 'Implementatie van een GPU instance'
slug: implementatie-gpu-instance
excerpt: 'Ontdek hoe u een GPU instance op Linux of Windows kunt opzetten'
section: 'Vanaf OVH’s Control Panel'
---

** Laatste update 13-09-2018 **

## Introductie

GPU instances zijn technisch gezien vergelijkbaar met de instances uit de 2017-reeks, maar ze hebben ook een Graphic Processing Unit (GPU). Met de *pci_passthrough*-technologie kan het instance-besturingssysteem een GPU precies zo beheren als op een fysieke machine.

De aangeboden GPU opties zijn NVIDIA GeForce GTX 1060, GTX 1070, of GTX 1080Ti. 

> [!warning]
>
> Voorlopig zijn de GPU instances alleen beschikbaar in GRA3, GRA5, en BHS3. Mogelijk moet u een nieuw project aanmaken en de nieuwe 2017-reeks selecteren. Meer informatie vindt u [hier](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/). 
> 

**Deze handleiding behandelt de stappen voor het implementeren van een GPU instance op Linux of Windows**


## Vereisten

- U hebt een Public Cloud project gecreëerd met toegang tot de regio‘s waar de GPU beschikbaar is (GRA3, GRA5, en BHS3).

## Instructie

Hieronder volgt informatie over het gebruik van de GPU instance op Linux of Windows.


### Linux 

Alle aangeboden afbeeldingen kunnen worden gebruikt met GPU instances.

> [!primary]
>
> Als u niet vertrouwd bent met de handmatige compilatie van de kernelmodule, raden we u aan om een distributie te gebruiken die officieel wordt ondersteund door Nvidia, waarvoor zij verschillende kant-en-klare oplossingen leveren: <https://developer.nvidia.com/cuda-downloads>
> 

Wanneer u bent ingelogd op uw [OVH Control Panel](https://www.ovh.com/auth/?action=gotomanager){.external} in uw Public Cloud project, klikt u op `Een server toevoegen`{.action} en selecteert u de GPU instance:

![public-cloud](images/EN-Flavors.png){.thumbnail}

Enkele seconden later zal de instance opnieuw gestart zijn. U kunt zich vervolgens inloggen om de aanwezigheid van de grafische kaart te controleren: 

```ssh
lspci | grep -i nvidia
00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
```

Grafische kaart gevonden maar nog niet beschikbaar. U moet nu NVIDIA drivers installeren. U kunt pakkettenlijsten vinden op het volgende adres: [Beschikbare Linux pakketten](http://developer.download.nvidia.com/compute/cuda/repos/){.external}.

Vervolgens hoeft u alleen maar op de volgende commando’s te tikken:

```sh
wget URL_te_downloaden_pakket
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> Het Linux commando kan variëren afhankelijk van de distributie, controleer de officiële documentatie van uw Linux versie als iets niet duidelijk is.
> 


Nadat uw instances opnieuw zijn gestart, is de grafische kaart zichtbaar in de NVIDIA tool:

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

De GPU instance is nu volledig operationeel en klaar voor gebruik.


### Windows

De Nvidia driver en de virtualisatie-tool *KVM/pci_passthrough* zijn niet volledig compatibel. **De standaard Windows afbeeldingen werken niet.**

We leveren specifieke UEFI afbeeldingen op basis van het virtuele BIOS waarmee het stuurprogramma correct kan functioneren:

![public-cloud](images/EN-WindowsImages.png){.thumbnail}


> [!warning]
>
> We kunnen de functionaliteit van de oplossing niet garanderen met alle toekomstige NVIDIA stuurprogramma's.
>
> Het wordt ten zeerste aanbevolen een momentopname te maken voordat u uw NVIDIA stuurprogramma bijwerkt, zodat u deze indien nodig kunt retourneren.
>

Wanneer de GPU instance opnieuw is gestart, moet het NVIDIA stuurprogramma worden gestart op de officiële webpagina.

Draai de instance met een van de GPU types (win-g1-15, w in-g1-30 ...).

Na een paar seconden is de instance opnieuw gestart. Het blijft nodig om de benodigde driver te installeren, die hier verschijnt:


![public-cloud](images/WindowsDriverVersion.png){.thumbnail}

![public-cloud](images/WindowsDeviceManager.png){.thumbnail}


## Verder

Ga in gesprek met onze communitygebruikers via <https://community.ovh.com/en/>.