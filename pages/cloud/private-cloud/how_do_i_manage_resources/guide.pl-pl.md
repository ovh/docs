---
title: W jaki sposób zarządzać zasobami?
excerpt: ''
slug: w_jaki_sposob_zarzadzac_zasobami
legacy_guide_number: g602
---


## 
W przewodniku tym opisujemy monitorowanie zasobów usługi Private Cloud.
Należy zalogować się do vSphere (poprzez program lokalny lub za pomocą połączenia RDP dostarczonego podczas aktywacji usługi Private Cloud).


## Na hostach
W zakładce host możesz sprawdzić informacje na temat wszystkich swoich zasobów:

![](images/img_98.jpg){.thumbnail}


## Na klastrze lub puli zasobów
W zakładce « Ressource Allocation » znajdują się informacje na temat zasobów usługi PCC. 
Są tu informacje na temat wszystkich dostępnych zasobów: RAM, CPU, przestrzeń dyskowa. Sekcja ta pozwala na wykrycie ewentualnego nieprawidłowego obciążenia spowodowanego przez wirtualną maszynę na jednym z hostów lub na jednej z wirtualnych serwerowni. Możesz określić ograniczenia dostępu do dysku (I/O) dla przestrzeni dyskowej. Możesz również określić priorytety dla każdej VM, zarządzać ograniczeniami zasobów dla VM.

![](images/img_96.jpg){.thumbnail}


## Wykresy zasobów dla klastrów i hostów
W zakładce « Performance » odnajdziesz wykresy zużycia klastra i hosta:

![](images/img_95.jpg){.thumbnail}
Możesz skorzystać z przycisku « Advanced » i następnie « Chart Option... » , aby spersonalizować wykresy. Możesz wybrać zakres czasu do wyświetlania, rodzaj wykresu, aby korzystać z bardziej dokładnej analizy tych danych:

![](images/img_100.jpg){.thumbnail}
Personalizacja wykresów:

![](images/img_101.jpg){.thumbnail}


## Na przestrzeni dyskowej
W sekcji Datacenter, w zakładce Datastore znajdują się informacje o przestrzeni dyskowej. Dzięki temu możesz monitorować przestrzeń wykorzystaną na twojej infrastrukturze:

![](images/img_102.jpg){.thumbnail}

