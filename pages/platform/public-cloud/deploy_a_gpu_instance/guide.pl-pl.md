---
title: 'Uruchomienie instancji GPU'
slug: uruchomienie-instancji-gpu
excerpt: 'Dowiedz się, jak uruchomić instancję GPU z systemem Linux lub Windows'
section: 'Zarządzanie w Panelu klienta OVH'
---

**Ostatnia aktualizacja: 06-12-2019**

## Wprowadzenie

Instancje GPU są technicznie podobne do instancji z oferty 2017, ale mają też kartę graficzną (procesor graficzny, GPU — Graphic Processing Unit). Zastosowana technologia (*pci_passthrough*) umożliwia systemowi operacyjnemu instancji sterowanie procesorem graficznym dokładnie tak samo, jak w przypadku komputera fizycznego.

Oferowane procesory graficzne to NVIDIA Tesla V100. 

> [!warning]
>
> Obecnie instancje GPU są dostępne tylko w centrach danych GRA3, GRA5, GRA7 i BHS3. Może więc być konieczne utworzenie nowego projektu i wybranie nowej oferty 2017. [Dowiedz się więcej.](https://docs.ovh.com/gb/en/public-cloud/faq-how-to-understand-the-new-flavor-naming-rules-for-the-2017-range/)
> 

**Dowiedz się, jak uruchomić instancję GPU w systemie Linux lub Windows**

## Wymagania początkowe

- projekt Public Cloud z dostępem do regionów, w których są oferowane instancje GPU (GRA3, GRA5, GRA7 i BHS3)

## W praktyce

Poniżej znajdują się informacje niezbędne do uruchomienia instancji GPU w systemie Linux lub Windows.
Systemu operacyjnego instancji nie można zmienić z systemu Linux na Windows i odwrotnie. Dlatego należy utworzyć instancję z odpowiednim domyślnym systemem operacyjnym.


### On Linux

Wszystkich oferowanych obrazów można użyć w instancji GPU.

> [!primary]
>
> Jeśli ręczne skompilowanie modułu jądra stanowi problem, zalecamy użycie dystrybucji wspieranej przez firmę Nvidia, do której są udostępnione *gotowe* sterowniki: <https://developer.nvidia.com/cuda-downloads>.
> 

Po zalogowaniu do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} przejdź do projektu Public Cloud, kliknij przycisk `Utwórz instancję`{.action} i wybierz instancję GPU:

![public-cloud](images/gpu.png){.thumbnail}

Wybierz odpowiednią dystrybucję systemu Linux:

![public-cloud](images/linuxchoice.png){.thumbnail}

Instancja uruchomi się po kilku sekundach. Wówczas zaloguj się i sprawdź kartę graficzną: 

```ssh
lspci | grep -i nvidia
00:05.0 3D controller: NVIDIA Corporation GV100GL [Tesla V100 PCIe 16GB] (rev a1)
```

Karta graficzna jest dostępna, ale jeszcze nie można jej użyć. Aby to było możliwe, najpierw trzeba zainstalować sterownik NVIDIA. Lista pakietów jest dostępna pod tym adresem: [Lista dostępnych pakietów do systemu Linux](http://developer.download.nvidia.com/compute/cuda/repos/){.external}.

Wprowadź następujące polecenia:

```sh
wget URL_of_packet_to_download
sudo dpkg -i cuda-repo-XXXX-XXXXXX
sudo apt-get update
sudo apt-get upgrade
sudo apt-get install cuda
sudo reboot
```

> [!primary]
>
> Polecenia systemu Linux są różne w zależności od dystrybucji. W razie wątpliwości należy się zapoznać z przewodnikiem do danej wersji systemu Linux.
> 


Po restarcie instancji karta graficzna będzie widoczna w programie narzędziowym NVIDIA:

```sh
nvidia-smi
Fri Dec  6 12:32:25 2019       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 418.67       Driver Version: 418.67       CUDA Version: 10.1     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|===============================+======================+======================|
|   0  Tesla V100-PCIE...  On   | 00000000:00:05.0 Off |                    0 |
| N/A   26C    P0    35W / 250W |      0MiB / 16130MiB |      5%      Default |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                       GPU Memory |
|  GPU       PID   Type   Process name                             Usage      |
|=============================================================================|
|  No running processes found                                                 |
+-----------------------------------------------------------------------------+
```

Instancja GPU działa i jest gotowa do użycia.


### On Windows

Istnieją problemy ze zgodnością sterownika NVIDIA i rozwiązania wirtualizacji *KVM/pci_passthrough*. **Standardowe obrazy systemu Windows nie działają.**
Dlatego oferujemy specjalne obrazy oparte na wirtualnym systemie BIOS UEFI, które umożliwiają prawidłowe działanie sterownika (dotyczy tylko instancji G1, G2 i G3 z oferty 2017 oraz wcześniejszej).

Po zalogowaniu do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external} przejdź do projektu Public Cloud, kliknij przycisk `Utwórz instancję`{.action} i wybierz instancję GPU:

![public-cloud](images/gpu.png){.thumbnail}

Wybierz odpowiedni system Windows: 

![public-cloud](images/oschoice.png){.thumbnail}

Po uruchomieniu instancji GPU należy zainstalować sterownik NVIDIA z [oficjalnej strony internetowej](https://www.nvidia.com/Download/index.aspx){.external}.

Uruchom instancję przy użyciu jednego z dostępnych typów GPU (t1-45, t1-90, t1-180...). Powinno to zająć tylko kilka minut.

Następnie wystarczy zainstalować wymagany sterownik, który będzie widoczny tutaj:

![public-cloud](images/driverson.png){.thumbnail}

![public-cloud](images/devicemanager.png){.thumbnail}


## Sprawdź również

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.