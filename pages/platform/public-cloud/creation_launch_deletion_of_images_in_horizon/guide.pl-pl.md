---
title: 'Tworzenie, uruchamianie i usuwanie obrazów w interfejsie Horizon'
excerpt: 'Tworzenie, uruchamianie i usuwanie obrazów w interfejsie Horizon'
slug: tworzenie_uruchamianie_i_usuwanie_obrazow_w_interfejsie_horizon
legacy_guide_number: g1784
section: 'Zarządzanie w interfejsie Horizon'
---

## 
Dodawanie spersonalizowanych obrazów jest możliwe w interfejsie OpenStack Horizon. Dzięki temu będziesz mógł zaimportować obrazy starych wirtualnych maszyn na Public Cloud, pod warunkiem, że ich format będzie kompatybilny. 

Przewodnik ten wyjaśnia poszczególne etapy tworzenia, uruchamiania i usuwania obrazów w interfejsie Horizon.


## Wstępne wymagania

- [Dostep do interfejsu Horizon]({legacy}1773)
- Przejście do menu Obrazy w interfejsie OpenStack Horizon



![Dostep do interfejsu Horizon](images/img_2661.jpg){.thumbnail}


## 

- Jeśli nie utworzono żadnego obrazu, pojawi się lista domyślnych obrazów publicznych:



![Dostep do interfejsu Horizon](images/img_2662.jpg){.thumbnail}

- Można uruchomić obraz z adresu URL lub utworzyć obraz klikając na przycisk Utwórz obraz. Otworzy się następujące menu:



![Dostep do interfejsu Horizon](images/img_2720.jpg){.thumbnail}

## Należy wypełnić pola. Niektóre są obowiązkowe (*), inne opcjonalne:

- Nazwa (*)
- Opis
- Plik obrazu (*) (wysyłka z lokalnego komputer)
- Format (*) :

|AKI|Amazon Kernel Image|
|AMI|Amazon Machine Image|
|ARI|Amazon Ramdisk Image|
|ISO|ISO 9660|
|QCOW2|Emulator QEMU|
|RAW|
|VDI|
|VHD|
|VMDK|



- Architektura: x86_64
- Minimalny dysk (w GB): domyślna wartość to 0.
- Minimalna ilość RAM (w MB): domyślna wartość to 0.


Można również zdefiniować, czy obraz będzie publiczny i czy jego usunięcie jest chronione.
Po zatwierdzeniu obraz jest umieszczany w kolejce oczekującej na utworzenie:

![Dostep do interfejsu Horizon](images/img_2664.jpg){.thumbnail}
Klikając na nazwę obrazu, otrzymujemy szczegółowe informacje:

![Dostep do interfejsu Horizon](images/img_2665.jpg){.thumbnail}
W kolumnie Czynności można:

- Uruchomić wybrany obraz, aby utworzyć instancję. Pojawia się menu:



![Dostep do interfejsu Horizon](images/img_2666.jpg){.thumbnail}

- Edytować szczegóły dotyczące obrazu (tylko w przypadku obrazów, które utworzyłeś).
- Usuwać obrazy (tylko w przypadku obrazów, które utworzyłeś). Należy potwierdzić taką operację:



![Dostep do interfejsu Horizon](images/img_2667.jpg){.thumbnail}


## 
[Przewodniki Cloud]({legacy}1785)

