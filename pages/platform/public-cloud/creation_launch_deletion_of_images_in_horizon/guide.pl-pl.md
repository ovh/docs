---
title: 'Tworzenie, uruchamianie i usuwanie obrazów w interfejsie Horizon'
excerpt: 'Tworzenie, uruchamianie i usuwanie obrazów w interfejsie Horizon'
slug: tworzenie_uruchamianie_i_usuwanie_obrazow_w_interfejsie_horizon
legacy_guide_number: g1784
section: 'Zarządzanie w interfejsie Horizon'
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 30/12/2021**

## Wprowadzenie

Dodawanie spersonalizowanych obrazów jest możliwe w interfejsie OpenStack Horizon. Dzięki temu będziesz mógł zaimportować obrazy starych wirtualnych maszyn na Public Cloud, pod warunkiem, że ich format będzie kompatybilny. 

**Niniejszy przewodnik wyjaśnia poszczególne etapy tworzenia, uruchamiania i usuwania obrazów w interfejsie Horizon, w którym zarządzasz usługami OVHcloud.**


## Wymagania początkowe

- [Dostep do interfejsu Horizon](https://docs.ovh.com/pl/public-cloud/tworzenie_dostepu_do_interfejsu_horizon/)
- Przejście do menu Obrazy w interfejsie OpenStack Horizon

![public-cloud](images/horizon_menu.png){.thumbnail}


## W praktyce

- Jeśli nie utworzono żadnego obrazu, pojawi się lista domyślnych obrazów publicznych:

![public-cloud](images/horizon_images.png){.thumbnail}

- Można uruchomić obraz z adresu URL lub utworzyć obraz klikając na przycisk `Create Image`{.action}. Otworzy się następujące menu:

![public-cloud](images/horizon_create_image.png){.thumbnail}

Należy wypełnić pola. Niektóre są obowiązkowe (*), inne opcjonalne:

- Image name (Nazwa obrazu) (*)
- Image description (Opis obrazu)
- Image file (Plik obrazu) (*) (wysyłka z lokalnego komputer)
- Image format (Format obrazu) (*) :

|||
|---|---|
|AKI|Amazon Kernel Image|
|AMI|Amazon Machine Image|
|ARI|Amazon Ramdisk Image|
|ISO|ISO 9660|
|QCOW2|QEMU Emulator|
|RAW|Raw Disk Image|
|VDI|VirtualBox format|
|VHD|Microsoft format|
|VMDK|VMware format|

- Architektura (Architecture): x86_64
- Minimalny dysk (w GB): domyślna wartość to 0.
- Minimalna ilość RAM (w MB): domyślna wartość to 0.

Można również zdefiniować, czy obraz będzie publiczny i czy jego usunięcie jest chronione.
Po zatwierdzeniu obraz jest umieszczany w kolejce oczekującej na utworzenie:

![public-cloud](images/horizon_image_saving.png){.thumbnail}

Klikając na nazwę obrazu, otrzymujemy szczegółowe informacje:

![public-cloud](images/horizon_image_details.png){.thumbnail}

W kolumnie **Actions** można:

- Uruchomić wybrany obraz, aby utworzyć instancję. Pojawia się menu:

![public-cloud](images/horizon_launch_image.png){.thumbnail}

- Edytować szczegóły dotyczące obrazu (tylko w przypadku obrazów, które utworzyłeś).
- Usuwać obrazy (tylko w przypadku obrazów, które utworzyłeś). Należy potwierdzić taką operację:

![public-cloud](images/horizon_delete_image.png){.thumbnail}

## Sprawdź również
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.