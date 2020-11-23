---
title: vScope
excerpt: 'Dowiedz się, jak korzystać z vScope'
slug: korzystanie_z_vscope
section: 'Usługi i opcje OVHcloud'
legacy_guide_number: g718
---

## Dostęp
vScope jest dostępny pod poniższym adresem (do dostosowania w zależności od usługi Dedicated Cloud):

https://pcc-178-32-194-8.ovh.com/vScope (uwaga na wielką literę S)

![](images/img_368.jpg){.thumbnail}
Należy podać login i hasło. Wystarczy podać login admin, którego używasz do połączenia z vSphere Client. Po zalogowaniu przejdziesz do interfejsu monitorowania jednego ze swoich datacenter:

![](images/img_364.jpg){.thumbnail}


## Filer
Z lewej strony odnajdziesz listę przestrzeni dyskowych i statystyki ich wykorzystania.


## Hosty
W tej sekcji znajduje się lista hostów z informacją o liczbie rdzeni, VM, CPU, wykorzystanej pamięci RAM i ruchu sieciowym na kartach hosta (TX = upload i RX = download).
Jeśli klikniesz dwa razy na host, uzyskasz dostęp do innej zakładki z wykresami ilustrującymi wykorzystanie zasobów (RAM, CPU, Network, itp...):

![](images/img_366.jpg){.thumbnail}
Możesz sprawdzać wykresy z wybranego okresu klikając na lewy przycisk myszy i wybierając dany okres na wykresie:

![](images/img_367.jpg){.thumbnail}
Możesz wybrać okres, dla którego chcesz wyświetlić wykres (dzień, tydzień, miesiąc, rok) w górnej części strony w menu rozwijalnym.


## Virtual Machine
W tej części znajdują się statystyki wirtualnych maszyn z informacjami takimi jak:

- ich nazwy
- przestrzeń, na której znajduje się vmdk oraz wykorzystana i przyznana przestrzeń na datastore
- liczba snapshotów dostępnych dla maszyny (wykonanych przez  snapshot manager)
- host, na którym zarejestrowana jest VM
- ich stan (power on,off,pause)
- wykorzystanie CPU i pamięci RAM
- informacje na temat dysków (statystyki przepustowości, I/O, czas odpowiedzi)


Podwójne kliknięcie pozwala na uzyskanie dostępu do wykresu wirtualnej maszyny.

