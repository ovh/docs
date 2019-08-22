---
title: 'Spuštění GPU instance'
slug: spusteni-gpu-instance
excerpt: 'Zjistěte, jak spustit GPU instanci s operačním systémem Linux nebo Windows'
section: 'Zákaznický prostor OVH'
---

**Poslední aktualizace 17/09/2018**

## Cíl

GPU instance se po technické stránce do značné míry podobají instancím z řady 2017, oproti nim však navíc disponují vlastním grafickým procesorem (GPU). Použitá technologie (*pci_passthrough*) umožňuje operačnímu systému instance ovládat GPU přesně tak, jako je tomu v případě fyzického stroje.

Instance GPU jsou k dispozici s grafickými kartami NVIDIA GeForce GTX 1060, GTX 1070 a GTX 1080Ti. 

> [!warning]
>
> GPU instance jsou v současné době dostupné pouze v rámci projektů vytvořených v datacentrech GRA3, GRA5 a BHS3. Z toho důvodu si možná budete muset vytvořit nový Public Cloud projekt v některém z výše uvedených regionů. Detailní informace naleznete [zde (EN)](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/).
> 

**Zjistěte, jak spustit GPU instanci s operačním systémem Linux nebo Windows.**


## Prerekvizity

- Public Cloud projekt v některém z datacenter GRA3, GRA5 a BHS3.

## Postup

Níže naleznete informace týkající se postupu pro spuštění GPU instance s operačním systémem Linux a Windows.


### Linux

Instance GPU jsou kompatibilní se všemi systémovými distribucemi nabízenými společností OVH.

> [!primary]
>
> Pokud nejste dostatečně obeznámeni s manuální kompilací kernelového modulu, doporučujeme nainstalovat distribuci, která je oficiálně podporována společností Nvidia a pro níž jsou dostupné *ovladače na klíč*: <https://developer.nvidia.com/cuda-downloads>.
> 

V [Zákaznickém prostoru OVH](https://www.ovh.com/auth/?action=gotomanager){.external} přejděte do administračního rozhraní svého Public Cloud projektu, klikněte na tlačítko `Akce > Přidat server`{.action} a zvolte GPU instanci (Vysoký výpočetní výkon).

![public-cloud](images/EN-Flavors.png){.thumbnail}

Instance bude spuštěna během několika sekund. Následně se k instanci můžete připojit a ověřit přítomnost grafické karty: 

```ssh
lspci | grep -i nvidia
00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
```

Grafická karta je přítomna. Než ji však budete moci začít používat, je zapotřebí nainstalovat NVIDIA ovladače. Seznam instalačních balíčků naleznete na následující adrese: [http://developer.download.nvidia.com/compute/cuda/repos/](http://developer.download.nvidia.com/compute/cuda/repos/){.external}.

Nyní stačí zadat následující příkazy:

```sh
wget URL_du_paquet_à_télécharger
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> Linuxové příkazy se mohou v závislosti na použité distribuci lišit. V případě pochybností se obraťte na oficiální dokumentaci Vámi používané verze operačního systému.
> 


Po restartu je grafická karta připravena k použití:

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

 


### Windows

Mezi NVIDIA ovladači a virtualizačním řešením *KVM/pci_passthrough* existuje jistá nekompatibilita. **Standardní obrazy operačního systému Windows proto v tomto případě nefungují.**

Z toho důvodu společnost OVH poskytuje speciálně upravené obrazy založené na virtuálním BIOS UEFI, které umožňují správnou funkčnost grafických ovladačů.

![public-cloud](images/EN-WindowsImages.png){.thumbnail}


> [!warning]
>
> Nelze zaručit, že řešení bude pracovat se všemi budoucími verzemi ovladačů NVIDIA.
>
> Z toho důvodu důrazně doporučujeme před každou aktualizací vytvořit snapshot instance, aby bylo v případě nutnosti instanci možné urychleně navrátit do předchozího stavu.
>

Po spuštění instance stáhněte a nainstalujte ovladače z oficiálních stránek společnosti NVIDIA.



Nainstalované ovladače se objeví zde: 


![public-cloud](images/WindowsDriverVersion.png){.thumbnail}

![public-cloud](images/WindowsDeviceManager.png){.thumbnail}


## Kam dál

Sdílejte své zkušenosti s uživatelskou komunitou na <https://community.ovh.com/en/>.