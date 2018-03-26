---
title: 'Hosting www: Informacje na temat serwerów DNS'
excerpt: 'Hosting www: Informacje na temat serwerów DNS'
slug: hosting_www_informacje_na_temat_serwerow_dns
legacy_guide_number: g2015
---


## Definicja
DNS (Domain Name System) pozwala między innymi na przetłumaczenie domeny na adres IP, aby zapytania mogły być dostarczane do serwera docelowego.

![](images/img_3413.jpg){.thumbnail}


## Różnica między serwerami i strefą DNS

## Serwery DNS

- Serwery DNS to serwery zadeklarowane dla nazwy domeny. To serwery najpierw odpowiadają, zanim zostanie zinterpretowana strefa DNS, która jest do nich przypisana.



## Strefa DNS

- Strefa DNS to plik zawierający różne wpisy wskazujące między innymi adresy serwerów obsługujących stronę (A) lub e-maile (MX). Adresy te mogą mieć formę adresu IP lub nazwy hosta.




## Dlaczego trzeba edytować serwery lub strefę DNS?

## Serwery DNS
Może wystąpić sytuacja, w której trzeba będzie zmienić serwery DNS domeny (na przykład po zmianie operatora). Niektórzy dostawcy nie pozwalają na korzystanie ze swoich serwerów po przeniesieniu domeny do konkurencyjnego operatora. 
Być może posiadasz serwer dedykowany, który jest serwerem DNS i chcesz z niego korzystać.

## Strefa DNS
Gdy chcesz zmienić serwer obsługujący stronę www lub e-maile, na przykład po zmianie dostawcy usług, musisz zmodyfikować strefę DNS domeny. 
Po zaktualizowaniu strefy domena będzie wskazywać na nowe serwery.

Przewodnik na temat strefy DNS jest dostępny tutaj:

- []({legacy}2015).




## Logowanie do panelu klienta

- Zaloguj się do [panelu klienta](https://www.ovh.com/manager/web) za pomocą identyfikatora klienta i hasła.

- Kliknij na"Login".



![](images/img_3411.jpg){.thumbnail}


## Wybór domeny

- W menu z lewej strony wybierz "Domeny" i "domenę", dla której chcesz dokonać zmiany.



![](images/img_3405.jpg){.thumbnail}


## Dodawanie nowych serwerów DNS

- Przejdź do sekcji "Zarządzanie DNS" i wybierz "Dodaj serwer DNS".



![](images/img_3406.jpg){.thumbnail}

- Wskaż pierwszy serwer DNS i zatwierdź operację. Następnie wykonaj to samo z drugim serwerem DNS.



![](images/img_3407.jpg){.thumbnail}


## Usuwanie starych serwerów DNS

- Kliknij na ikonkę "kosza" na poziomie 2 starych serwerów DNS i zatwierdź.



![](images/img_3408.jpg){.thumbnail}

- Trwa usuwanie.



![](images/img_3409.jpg){.thumbnail}

- Operacja trwa kilka minut.



![](images/img_3410.jpg){.thumbnail}


## Resetowanie domyślnych serwerów DNS
W przypadku wprowadzenia nieprawidłowej konfiguracji, można przywrócić domyślne serwery DNS.


- Przejdź do sekcji "Zarządzanie DNS" i wybierz "Zresetuj domyślne serwery DNS".



![](images/img_3416.jpg){.thumbnail}

- Kliknij na "Zatwierdź", aby potwierdzić operację.



![](images/img_3417.jpg){.thumbnail}


## Jak sprawdzić serwery DNS przyznane przez OVH
Aby sprawdzić, jakie serwery DNS zostały przyznane przez OVH, kliknij na "Strefa DNS". Są to 2 "wpisy NS" widoczne w strefie.

![](images/img_3418.jpg){.thumbnail}


## Zaawansowane zarządzanie serwerami DNS za pomocą Glue Registry
Aby utworzyć własne Glue Registry, zapoznaj się z tym przewodnikiem:
[]({legacy}1568)


## Czas propagacji zmian
Serwery DNS

- Zmiana serwerów DNS może trwać do 48 godzin.

Strefa DNS
- Zmiana wpisów w strefie DNS może trwać do 24 godzin.



