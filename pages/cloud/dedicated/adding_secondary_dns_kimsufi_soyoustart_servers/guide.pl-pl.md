---
title: Dodanie DNS Secondary dla serwerów Kimsufi i So you Start
excerpt: Dodanie DNS Secondary dla serwerów Kimsufi i So you Start
slug: dodanie_dns_secondary_dla_serwerow_kimsufi_i_so_you_start
legacy_guide_number: g2183
---


## Dodawanie domeny do DNS secondary
Aby dodać domenę do DNS secondary dla serwera Kimsufi lub So you Start, należy:

- Zalogować się do panelu klienta Kimsufi lub So you Start.
- Kliknąć na zakładkę DNS.



![](images/img_4078.jpg){.thumbnail}
Następnie kliknij na Dodaj DNS secondary.

![](images/img_4081.jpg){.thumbnail}
W przypadku serwerów Kimsufi serwer DNS secondary to ns.kimsufi.com.
Teraz należy podać nazwę domeny i wybrać adres IP, do którego jest ona przypisana.

![](images/img_4077.jpg){.thumbnail}
Pojawi się komunikat wskazujący, że w strefie dns należy dodać subdomenę ownercheck z określoną wartością. 

Po dodaniu subdomeny, wznowieniu usługi BIND i propagacji strefy DNS (24-48 godzin), będziesz mógł dodać domenę do DNS secondary.


## Usuwanie domeny z DNS secondary
Aby usunąć domenę z DNS secondary, należy:

- Zalogować się do panelu klienta Kimsufi lub So you Start.
- Kliknąć na zakładkę DNS.
- Kliknij na zakładkę Zarządzaj DNS secondary.
- Kliknij na przycisk Usuń i potwierdź.



![](images/img_4082.jpg){.thumbnail}

