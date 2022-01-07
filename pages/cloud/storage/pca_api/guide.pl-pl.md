---
title: Funkcje API
slug: pca/api
excerpt: Funkcje API Openstack Swift w ramach usugi OVH Public Cloud Archive
section: Public Cloud Archive
order: 120
---


## Operacje na kontenerach
W tej części opisujemy funkcje wprowadzone przez OVH w ramach operacji na kontenerach.


### GET Container inventory
**Opis**

Pobiera zawartość kontenera.

**Parametry polecenia**

|Parametr|Typ|Opis|Wymagany|
|---|---|---|---|
|policy_extra|Logiczny|Zawiera pola z dodatkową informacją związaną z polityką przechowywania danych w treści odpowiedzi, jeśli wymaganym formatem jest json.|Nie|

**Treść odpowiedzi**

|Pole|Typ|Opis|
|---|---|---|
|policy_retrieval_delay|Liczba całkowita|Czas pobierania obiektu w sekundach, jeśli status to *unsealing*.|
|policy_retrieval_state|Linia|Status pobieranego obiektu. Możliwe wartości to: *sealed*, *unsealing*, *unsealed*.|


## Operacje na obiektach
W tej części opisujemy funkcje wprowadzone przez OVH w ramach operacji na obiektach.


### GET Object
**Opis**

Pobiera obiekt.

**Kody błędów**

|Kod|Opis|
|---|---|
|429|Operacja w trakcie dla odblokowywanego obiektu.|

**Nagłówki odpowiedzi**

|Nazwa|Typ|Opis|Wymagany|
|---|---|---|---|
|Retry-After|Liczba całkowita|Czas pobierania obiektu w sekundach, jeśli odpowiedzią jest kod błędu 429.|Nie|