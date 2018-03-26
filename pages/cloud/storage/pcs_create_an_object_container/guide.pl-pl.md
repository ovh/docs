---
title: Tworzenie kontenera obiektów
excerpt: Tworzenie kontenera obiektów
slug: tworzenie_kontenera_obiektow
legacy_guide_number: g1921
section: Object Storage
---


## 
Pierwszy Étapem w przypadku chęci korzystania z rozwiązania przestrzeni dyskowej proponowanej przez Public Cloud jest utworzenie kontenera, na którym będzie można umieszczać pliki. 
Przewodnik ten wyjaśnia, jak utworzyć kontener w interfejsie Horizon.


## Wstępne wymagania

- [Dostęp do interfejsu Horizon]({legacy}1773)




## 

- Zaloguj się do interfejsu Horizon.
- Wybierz "Object Storage" z lewej strony.



![](images/img_2935.jpg){.thumbnail}

- Kliknij na "Create Container".


Pojawi się nowe okno.

![](images/img_2937.jpg){.thumbnail}
Możesz tutaj:

- Nazwać kontener
- Wybrać typ kontenera

|Publiczny|Dostępny dla wszystkich|
|---|
|Publiczny|Dostępny dla wszystkich|
|Prywatny|Dostępny tylko po zalogowaniu|


Po wykonaniu tych czynności kontener pojawi się i będą dostępne nowe operacje:

![](images/img_2938.jpg){.thumbnail}
Możesz:

- Zobaczyć szczegółowe informacje na temat swojego kontenera
- Nadać mu status publicznego lub prywatnego
- Usunąć kontener


Klikając na nazwę kontenera możesz również:

- Utworzyć pseudo katalog


Dane umieszczane na Object Storage nie są przechowywane według klasycznego drzewa katalogów (katalog > podkatalog...). 
Wszystkie dane są przechowywane na tym samym poziomie, co zmniejsza czas dostępu do plików. 
Pseudo-katalogi będą widoczne w formie prefiksu i pozwolą na różne zarządzanie danymi.

- Wysyłanie plików
- Usuwanie plików i pseudo-katalogów
- Pobieranie plików
- Kopiowanie plików
- Wyświetlanie informacji o plikach




## 
[Przewodniki Cloud]({legacy}1785)

