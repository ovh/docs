---
title: 'Uruchomienie instancji GPU'
slug: uruchomienie-instancji-gpu
excerpt: 'Dowiedz się, jak uruchomić instancję GPU z systemem Linux lub Windows'
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja z dnia 27-09-2018**

## Wprowadzenie

Instancje GPU są podobne pod względem technicznym do instancji z gamy 2017, jednak różnią się tym, że posiadają kartę graficzną (GPU - Graphic Processing Unit). Zastosowana w nich technologia (*pci_passthrough*) umożliwia systemowi operacyjnemu instancji kontrolowanie GPU dokładnie tak, jak na maszynie fizycznej.

Oferowane przez OVH GPU to NVIDIA GeForce GTX 1060, GTX 1070 lub GTX 1080Ti. 

> [!warning]
>
> Instancje GPU są w chwili obecnej dostępne wyłącznie w centrach danych GRA3, GRA5 i BHS3. Możesz utworzyć w jednym z nich nowy projekt i wybrać gamę 2017. Więcej informacji [tutaj](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/).
> 

**Dowiedz się, jak uruchomić instancję GPU z systemem Linux lub Windows.**


## Wymagania początkowe

- Utworzenie projektu Public Cloud w jednym z centrów danych GRA3, GRA5 lub BHS3, gdzie dostępne jest rozwiązanie GPU

## W praktyce

Poniżej znajdziesz instrukcje dotyczące uruchomienia instancji GPU z systemem Linux lub Windows. 


### Linux

Wszystkie oferowane przez OVH obrazy dystrybucji są kompatybilne z instancją GPU.

> [!primary]
>
> Jeśli nie chcesz ręcznie kompilować modułu jądra, zalecamy użycie dystrybucji wspieranej przez Nvidia, dla której dostępne są gotowe sterowniki: <https://developer.nvidia.com/cuda-downloads>.
> 

Po zalogowaniu się do [Panelu klienta]( https://www.ovh.com/auth/?action=gotomanager){.external} i wybraniu Twojego projektu Public Cloud, kliknij `Dodaj serwer`{.action} i wybierz instancję GPU:

![public cloud](images/EN-Flavors.png){.thumbnail}

Po kilku sekundach instancja zostanie uruchomiona. Możesz następnie zalogować się do niej i sprawdzić, czy zainstalowana jest karta graficzna:

```ssh
lspci | grep -i nvidia
00:05.0 VGA compatible controller: NVIDIA Corporation Device 1c03 (rev a1)
00:06.0 Audio device: NVIDIA Corporation Device 10f1 (rev a1)
```

Karta graficzna jest zainstalowana, ale nie jest jeszcze gotowa do użycia, należy teraz zainstalować sterowniki NVIDIA. Listę pakietów znajdziesz pod linkiem: [Lista dostępnych pakietów Linux](http://developer.download.nvidia.com/compute/cuda/repos/){.external}.

Następnie wpisz polecenia:

```sh
wget URL_pakietu_do_pobrania
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> Polecenie Linux może być różne w zależności od dystrybucji, której używasz. W przypadku wątpliwości sprawdź dokumentację dotyczącą używanej przez Ciebie wersji Linux.
> 


Po zrestartowaniu instancji karta graficzna pojawi się w narzędziu NVIDIA:

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

Instancja GPU jest od tej pory w pełni funkcjonalna i gotowa do użytku.


### Windows

Sterownik Nvidia nie jest kompatybilny ze środowiskiem wirtualizacyjnym KVM/pci_passthrough. **Standardowe obrazy Windows nie będą działać.**

OVH dostarcza specjalne obrazy BIOS UEFI, dzięki którym sterownik może poprawnie funkcjonować:

![public cloud](images/EN-WindowsImages.png){.thumbnail}


> [!warning]
>
> OVH nie może zagwarantować, że rozwiązanie będzie działało ze wszystkimi przyszłymi wersjami sterownika NVIDIA.
>
> Przed przystąpieniem do aktualizacji sterownika NVIDIA zalecane jest wykonanie zrzutu instancji (snapshot), aby w razie potrzeby wrócić do poprzedniego stanu. 
>

Po zrestartowaniu instancji GPU pobierz sterownik NVIDIA z [oficjalnej strony](http://www.nvidia.fr/Download/index.aspx){.external} i zainstaluj go.

Uruchom instancję, korzystając z jednego z modeli GPU (win-g1-15, win-g1-30 itp.).

Po kilku minutach instancja zostanie uruchomiona. Na koniec zainstaluj niezbędny sterownik, który pojawi się tutaj:


![public cloud](images/WindowsDriverVersion.png){.thumbnail}

![public cloud](images/WindowsDeviceManager.png){.thumbnail}


## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.