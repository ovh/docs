---
title: ZoneCheck domeny
excerpt: 'W przewodniku tym wyjaśniamy, jak wykonać Zone Check domeny.'
slug: zonecheck_domeny
legacy_guide_number: g1980
---


## Wypełnienie wymaganych pól
Narzędzie [Zone Check](https://zonemaster.fr/) udostępniane przez AFNIC służy do weryfikowania konfiguracji serwerów DNS, które chcesz zadeklarować. 

Przejdź na stronę ZoneMaster [klikając tutaj](https://zonemaster.fr/). Następnie kliknij na "Pre-delegated domain" i wypełnij poniższe pola:


- Domain name: Podaj nazwę domeny, dla której chcesz wykonać test.
- Nameservers: Kliknij na + w zależności od liczby serwerów DNS do przetestowania. Wpisz serwery DNS oraz ich adresy IP. 
- Kliknij na przycisk "Run test", aby otrzymać wynik



![](images/img_3213.jpg){.thumbnail}


## Wynik
Pojawi się wynik:


- Jeśli wynik jest oznaczony na zielono: Strefa jest prawidłowa. Możesz zmienić serwery DNS w panelu klienta. 

- Jeśli pojawiły się elementy w kolorze czerwonym: Wskazane w wyniku informacje pozwolą Ci na wprowadzenie niezbędnych poprawek. 

W takiej sytuacji nie należy aktualizować serwerów DNS bez wprowadzenia odpowiednich poprawek, ponieważ operacja taka może spowodować problem z działaniem usług.

![](images/img_3211.jpg){.thumbnail}


## Użyteczne informacje
Jeśli masz pytania dotyczące tego narzędzia i jego funkcjonalności, przejdź do sekcji "FAQ" na stronie ZoneMaster.

![](images/img_3212.jpg){.thumbnail}

