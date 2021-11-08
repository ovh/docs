---
title: Optymalizacja wysyłki do Object Storage
excerpt: Optymalizacja wysyłki do Object Storage
slug: optymalizacja_wysylki_do_object_storage
section: Object Storage Standard (Swift)
legacy_guide_number: g1951
---


##
Podczas wysyłania dużych plików na Object Storage (na przykład filmów czy obrazów dysków) można korzystać z klienta OpenStack Swift, w celu zoptymalizowania transferu poprzez segmentowanie tych plików.
Przewodnik ten wyjaśnia, jak zwiększyć prędkość wysyłki na Object Storage, dzięki tej funkcjonalności.


## Wstępne wymagania

- [Przygotowanie środowiska do korzystania z API OpenStack]({legacy}1851) za pomoca klienta python-swiftclient
- [Pobieranie zmiennych środowiskowych OpenStack]({legacy}1852)




##
OpenStack Swift pozwala na przechowywanie plików bez ograniczenia rozmiaru dzieląc pliki na kilka segmentów.

Gdy klient Swift jest wykorzystywany do wysyłania plików, węzeł przestrzeni dyskowej jest określany przez proxy Swift poprzez wykorzystanie haszowania nazwy obiektu.
Możliwe, że segmenty będą przechowywane w różnych węzłach przestrzeni dyskowej, co pozwoli na zapisywanie danych z większą prędkością.

Można więc wysłać plik 10GB w 100 segmentach o rozmiarze 100MB:


```
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```


|Argument|Opis|
|---|---|
|--segment-size|Rozmiar segmentów w bajtach|
|--segment-threads|Liczba segmentów|


Można zmierzyć prędkość wysyłki wykorzystując programy takie jak iftop.


##
[Przewodniki Cloud]({legacy}1785)
