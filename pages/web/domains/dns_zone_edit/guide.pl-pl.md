---
title: 'Hosting www: Jak edytować strefę DNS?'
excerpt: Jak edytować strefę DNS?
slug: hosting_www_jak_edytowac_strefe_dns
legacy_guide_number: g1604
---


## Definicja
DNS (Domain Name System) pozwala między innymi na przetłumaczenie domeny na adres IP, aby zapytania mogły być dostarczane do serwera docelowego.

![](images/img_3710.jpg){.thumbnail}


## Różnica między serwerami i strefą DNS

## Serwery DNS

- Serwery DNS to serwery zadeklarowane dla nazwy domeny. To serwery najpierw odpowiadają, zanim zostanie zinterpretowana strefa DNS, która jest do nich przypisana.



## Strefa DNS

- Strefa DNS to plik zawierający różne wpisy wskazujące między innymi adresy serwerów obsługujących stronę (A) lub e-maile (MX). Adresy te mogą mieć formę adresu IP lub nazwy hosta.




## Dlaczego trzeba edytować serwery lub strefę DNS?

## Serwery DNS
Może wystąpić sytuacja, w której trzeba będzie zmienić serwery DNS domeny (na przykład po zmianie operatora). Niektórzy dostawcy nie pozwalają na korzystanie ze swoich serwerów po przeniesieniu domeny do konkurencyjnego operatora. 
Być może posiadasz serwer dedykowany, który jest serwerem DNS i chcesz z niego korzystać. 

Przewodnik na temat serwerów DNS jest dostępny tutaj:

- []({legacy}2015).



## Strefa DNS
Gdy chcesz zmienić serwer obsługujący stronę www lub e-maile, na przykład po zmianie dostawcy usług, musisz zmodyfikować strefę DNS domeny. 
Po zaktualizowaniu strefy domena będzie wskazywać na nowe serwery.


## Czas propagacji

## Wpływ ustawień TTL
Time To Live (« czas życia » lub « długość życia »), czyli TTL, wskazuje okres, w którym informacja musi zostać zachowana w pamięci cache po modyfikacji.
W OVH w nowo utworzonych strefach parametr TTL to jedna godzina (TTL = 3600).


## Logowanie do panelu klienta

- Zaloguj się do [panelu klienta](https://www.ovh.com/manager/web) za pomocą identyfikatora klienta i hasła.

- Kliknij na"Login".



![](images/img_3711.jpg){.thumbnail}


## Wybór domeny

- W menu z lewej strony wybierz "Domeny" i "domenę", dla której chcesz dokonać zmiany.



![](images/img_3712.jpg){.thumbnail}


## Sprawdzenie strefy DNS
Kliknij na zakładkę "Strefa DNS", aby wyświetlić strefę DNS.
W tej sekcji możesz sprawdzić poszczególne pola dostępne w strefie DNS.
Możesz sortować wyświetlanie za pomocą rodzaju pola.

![](images/img_3714.jpg){.thumbnail}


## Zmiana wpisu
Aby zmodyfikować wpis, należy kliknąć na ikonkę ołówka, dokonać zmiany i kliknąć na "Dalej" i na "Zatwierdź".

![](images/img_3723.jpg){.thumbnail}


## Usunięcie wpisu
Aby usunąć wpis, należy kliknąć na ikonkę kosza i na zatwierdź.

![](images/img_3724.jpg){.thumbnail}


## Resetuj konfigurację
Przycisk ten pozwala na zresetowanie strefy DNS i przywrócenie domyślnych wpisów.

![](images/img_3715.jpg){.thumbnail}
Zaznacz typ strefy i kliknij na przycisk "Zatwierdź":


- Wpisy minimalne: Ten wybór dostarczy strefę z podstawowymi wpisami .

- Normalny reset: Ten wybór dostarczy dodatkowe wpisy, takie jak CNAME dla FTP, itp.



![](images/img_3716.jpg){.thumbnail}


## Dodaj wpis
Ten przycisk pozwala na dodanie nowego pola w strefie DNS.

![](images/img_3717.jpg){.thumbnail}
Wystarczy wybrać rodzaj wpisu i kliknąć na "Dalej".

![](images/img_3718.jpg){.thumbnail}


## Modyfikacja w trybie tekstowym
Przycisk ten pozwala na edytowanie strefy DNS w trybie tekstowym.
Tryb ten jest przeznaczony dla doświadczonych użytkowników, którzy chcą szybko dokonać zmian.

![](images/img_3719.jpg){.thumbnail}
Wystarczy dokonać zmian i zatwierdzić.

![](images/img_3720.jpg){.thumbnail}


## Domyślny TTL
Przycisk ten pozwala na zmodyfikowanie parametru TTL w strefie DNS i na zarządzanie czasem umieszczenia informacji w pamięci cache.

![](images/img_3721.jpg){.thumbnail}
Wybierz domyślny TTL i kliknij na "Zatwierdź".

![](images/img_3722.jpg){.thumbnail}


## Pole A
Wpis A to adres IPv4 hosta.
Nie można posiadać wpisu A i wpisu CNAME dla tego samego hosta.


## Pole MX
Wpis MX odnosi się do serwera mailowego, który obsługuje konta e-mail domeny.
Wpis ten musi mieć formę nazwy hosta, nie adresu IP.


## Pole CNAME
Wpis CNAME służy do utworzenia aliasu nazwy hosta i przekierowaniu go na inną nazwę hosta. Wpis ten musi mieć formę nazwy hosta, nie adresu IP.
Nie można posiadać wpisu A i wpisu CNAME dla tego samego hosta.


## Pole TXT
Wpis TXT pozwala na wprowadzenie tekstu do strefy DNS.


## Pole SPF
Wpis SPF pozwala na zadeklarowanie serwerów uprawnionych do wysyłania e-maili z Twojej domeny. 
Więcej informacji na ten temat znajduje się w tym przewodniku:

- []({legacy}2028).




## Zone Check
Narzędzie to pozwala na sprawdzenie, czy aktualizacja serwerów DNS przebiegła pomyślnie. 
Więcej informacji na ten temat znajduje się w tym przewodniku:

- []({legacy}1980).




## DNSSEC
Ta opcja pozwala na zabezpieczenie domeny przed Cache Poisoning.
Więcej informacji na ten temat znajduje się w tym przewodniku:

- []({legacy}609).




## Czas propagacji
Serwery DNS

- Zmiana serwerów DNS może trwać do 48 godzin.


Strefa DNS

- Zmiana wpisów w strefie DNS może trwać do 24 godzin.



