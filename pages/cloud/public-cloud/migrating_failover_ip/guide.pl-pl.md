---
title: Przeniesienie adresu IP Fail Over
excerpt: Przeniesienie adresu IP Fail Over
slug: przeniesienie_adresu_ip_fail_over
legacy_guide_number: g1890
section: Zarządzanie w Panelu klienta OVH
---


## 
Przewodnik ten wyjaśnia, jak przenieść adres IP fail over z jednej instancji na inną instancję. Operacja ta może mieć wiele zastosowań pozwalających na ograniczenie lub usunięcie ewentualnych przypadków niedostępności usługi:

- przeniesienie na stronę w nowej wersji;
- prowadzenie działalności na zreplikowanym serwerze podczas wykonywania konserwacji, aktualizacji na serwerze produkcyjnym.




## Wstępne wymagania

- Co najmniej dwie uruchomione instancje Public Cloud
- Adres IP Fail Over




## 

- Początkowo IP jest routowane na serwer 1. Chcesz je przenieść na serwer 2.



![](images/img_3815.jpg){.thumbnail}

- Kliknij na opcję Zwiń/Rozwiń, i Zmień przypisany serwer.



![](images/img_3816.jpg){.thumbnail}

- Zaznacz pole wyboru przy serwerze docelowym.



![](images/img_3817.jpg){.thumbnail}

- Kliknij na Przypisz.


IP Fail Over może zostać skonfigurowane na serwerze docelowym przed wykonaniem przeniesienia lub po jego wykonaniu. Jeśli konfiguracja zostanie wykonana wcześniej, adres zacznie odpowiadać po zakończeniu operacji routowania.


## 
[Przewodniki Cloud]({legacy}1785)

