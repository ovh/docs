---
title: Importowanie wirtualnej maszyny na usługę Dedicated Cloud
excerpt: Przewodnik wyjaśniający procedurę importowania istniejących wirtualnych maszyn na usługę Dedicated Cloud HyperV
slug: importowanie_wirtualnej_maszyny_na_usluge_dedicated_cloud
---


## Eksport wirtualnej maszyny
Nie możemy opisać tu eksportu, ponieważ zależy on od infrastruktury, na której działa wirtualna maszyna. Skorzystaj z funkcji do pobrania wirtualnej maszyny. Najważniejsza jest możliwość pobrania dysku wirtualnej maszyny. W przypadku Hyper-V : vhdx, w przypadku vmware: vmdk.


- Pobieram vhdx:

W tym przypadku możesz przejść bezpośrednio do sekcji import. 


- Pobieram vmdk:

Najpierw należy skonwertować vmdk do vhdx, aby dane były kompatybilne z Hyperv. Do konwersji możesz użyć jednego z tych narzędzi:

- Microsoft Virtual Machine Converter Solution Accelerator
- 2Tware Convert VHD

Możesz skorzystać z innego narzędzia. OVH nie zapewnia obsługi narzędzi udostępnionych przez innych producentów.


## Logowanie do biblioteki poprzez FTPS
Po pobraniu dysku należy ten dysk wdrożyć do biblioteki VMM, aby następnie móc wdrożyć VM z tego dysku. Zapoznaj się z przewodnikiem na temat logowania do usługi FTPs i wgrywania dysku: []({legacy}1425).
Dysk należy wgrać do katalogu "Data".

![](images/img_1995.jpg){.thumbnail}


## Sprawdzenie obecności importowanego dysku na VMM
Aby dysk był widoczny w VMM, biblioteka powinna się odświeżyć. Biblioteka odświeża się co godzinę. Należy więc poczekać, aby dysk stał się widoczny.

![](images/img_1996.jpg){.thumbnail}


## Tworzenie szablonu z dysku
Możesz utworzyć szablon z tego dysku. Możesz skorzystać z opcji personalizacji do wdrażania kolejnych VM z dysku. Jest to opisane w tym przewodniku: []({legacy}1436)


## Tworzenie wirtualnej maszyny z dysku
Jeśli nie chcesz skorzystać z personalizacji, możesz wdrożyć VM bezpośrednio z dysku. Opis znajduje się w tym przewodniku: []({legacy}1426)

