---
title: Informacje ogólne
excerpt: ''
slug: informacje_ogolne
legacy_guide_number: g597
---


## 
Szczególną cechą tego produktu w porównaniu z innymi jest to, że jest on instalowany bezpośrednio na powłoce sprzętowej (mówimy wtedy o hypervisorze Bare Metal). Nie trzeba instalować systemu operacyjnego, aby zainstalować VMware ESXi.
VMware ESXi to hypervisor, który pozwala na precyzyjne zarządzanie zasobami każdej wirtualnej maszyny. 
Wirtualna maszyna to zbiór wielu plików. 
Jedną z cech charakterystycznych tego systemu plików jest możliwość zarządzania wieloma konkurencyjnymi połączeniami.  
ESXi dysponuje również dokładnymi mechanizmami zarządzania współdzieloną pamięcią, jak na przykład odzyskiwanie nieużywanej pamięci, de-duplikacja czy też dekompresja stron pamięci.


## 
Narzędzie to pozwala na przeniesienie wirtualnej maszyny z jednego serwera ESXi na drugi bez przerwy w działaniu usługi. Operacja ta jest możliwa, gdy serwery hosty korzystają z kompatybilnych mikroprocesorów (hosty proponowane przez OVH są kompatybilne) i gdy przestrzeń dyskowa plików wirtualnych maszyn znajduje się na przestrzeni SAN lub NAS.


## 
Narzędzie to pozwala na rozdzielenie obciążenia pomiędzy kilkoma serwerami ESXi.
Dostępne są różne tryby działania. DRS może na przykład automatycznie zarządzać przydzielaniem zasobów miedzy serwerami ESXi.
DRS opiera się na mechanizmach vMotion w zakresie przenoszenia wirtualnych maszyn między różnymi serwerami ESXi na tym samym klastrze. Można również utworzyć specjalne reguły do grupowania lub rozdzielania wirtualnych maszyn na jednym lub kilku serwerach ESXi.


## 
Ta opcja tworzy klaster serwerów ESXi i łączy je. 
Technologia « vLockStep », na której opiera się klaster FT, pozwala wirtualnej maszynie serwera drugiego na równoczesne wykonanie wirtualnej maszyny serwera głównego. Tylko serwer główny wykonuje operacje zapisu do dysku lub do sieci: drugi serwer wykonuje tą samą VM, ale bez operacji zapisu. 
W przypadku awarii serwera głównego, vCenter zajmuje się jego wyłączeniem. Dzięki temu drugi serwer może przejąć jego zadania i zapewnić ciągłość działania tej wirtualnej maszyny.

## UWAGA!!
Ta funkcja nie jest jeszcze obsługiwana na Private Cloud.


## 
vCenter to narzędzie do zarządzania wszystkimi wirtualnymi maszynami i fizycznymi hostami środowiska wirtualnego. W interfejsie tym można zarządzać również:

- alarmami (CPU/RAM);
- szablonami (wstępnie skonfigurowane szablony systemów operacyjnych);
- opcjami (HA, vMotion, DRS).



