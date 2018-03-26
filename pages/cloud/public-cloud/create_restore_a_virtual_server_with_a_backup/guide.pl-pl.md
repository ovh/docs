---
title: Tworzenie / przywracanie serwera wirtualnego na podstawie kopii zapasowej
excerpt: Tworzenie / przywracanie serwera wirtualnego na podstawie kopii zapasowej
slug: tworzenie_przywracanie_serwera_wirtualnego_na_podstawie_kopii_zapasowej
legacy_guide_number: g1882
section: Zarządzanie w Panelu klienta OVH
---


## 
W niektórych sytuacjach będziesz musiał przywrócić instancję za pomocą wykonanej wcześniej kopii zapasowej  (na przykład w przypadku nieprawidłowej operacji wykonanej w konfiguracji instancji). 
Lub być może będziesz chciał utworzyć nową instancję na podstawie kopii zapasowej, ponieważ będziesz chciał zduplikować instancję, aby rozdzielić ruch lub uzyskać wysoką dostępność.

Przewodnik ten wyjaśnia, jak używać kopii zapasowych do odtwarzania, duplikowania i przywracania instancji.


## Wstępne wymagania

- Dysponowanie kopią zapasową instancji Public Cloud
- Dysponowanie już utworzonym serwerem wirtualnym




## 

- Zaloguj się do panelu klienta Public Cloud OVH.
- Kliknij na Kopie zapasowe.



![](images/img_2808.jpg){.thumbnail}

- Kliknij na ikonkę "utwórz serwera na podstawie tej kopii zapasowej" z prawej strony w linii backupu do przywrócenia. 
- Pojawi się takie okno:



![](images/img_2809.jpg){.thumbnail}

- Możesz tutaj spersonalizować nazwę serwera VPS.
- Możesz wybrać model.

Uwaga

Aktualnie w panelu klienta można przywrócić kopię tylko w centrum danych, z którego pochodzi kopia zapasowa. Aby przenieść tę kopię zapasową do innego centrum danych, należy skorzystać z api OpenStack.


- Wybierz klucz SSH.
- Wybierz tryb płatności.
- Kliknij na Uruchom teraz.
- Serwer wirtualny będzie dostępny po kilku sekundach.




## 

- Zaloguj się do panelu klienta Public Cloud OVH.
- Rozwiń następujące menu i kliknij na Edytuj:



![](images/img_2810.jpg){.thumbnail}

- Pojawi się takie okno:



![](images/img_2812.jpg){.thumbnail}

- Spersonalizuj nazwę serwera, jeśli chcesz.
- Wybierz model (parametry takie same lub wyższe niż aktualna wirtualna maszyna).
- Kliknij na dystrybucje.
- Pojawią się kopie zapasowe:



![](images/img_2815.jpg){.thumbnail}

- Kliknij na Moje kopie zapasowe:



![](images/img_2816.jpg){.thumbnail}

- Wybierz kopię zapasową do przywrócenia.
- Wybierz tryb płatności.
- Kliknij na Zastosuj zmiany.
- Serwer wirtualny będzie dostępny po kilku sekundach.


Instancja nie będzie zawierać danych zapisanych po utworzeniu tej kopii zapasowej.


## 
[Przewodniki Cloud]({legacy}1785)

