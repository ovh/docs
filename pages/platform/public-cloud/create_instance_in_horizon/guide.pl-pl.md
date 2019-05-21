---
title: Tworzenie instancji w interfejsie Horizon
excerpt: Jak utworzyć instancję w interfejsie Horizon.
slug: tworzenie_instancji_w_interfejsie_horizon
legacy_guide_number: g1772
section: Zarządzanie w interfejsie Horizon
---


## 
Przewodnik ten wyjaśnia, jak tworzyć instancje z poziomu interfejsu Horizon.


## 
Aby utworzyć instancję, należy:


- Zalogować się do interfejsu Horizon.
- Kliknąć na Instancje w menu z lewej strony.
- Kliknąć na przycisk Uruchom instancję
- Wypełnić formularz:



## Zakładka Szczegóły
Należy dostarczyć poniższe informacje:

|Strefa dostępności|pozostaw nova (wybór domyślny)|
|Nazwa instancji|wskaż nazwę instancji|
|Odmiana|Wybierz typ instancji|
|Ilość instancji|Wskaż liczbę instancji|
|Źródło uruchamiania instancji|Wybierz źródło utworzenia instancji: (Uruchom z obrazu lub  Uruchom z migawki)|
|Nazwa obrazu|Wybierz obraz (tylko w przypadku uruchamiania z obrazu)|
|Migawka instancji|Wybierz migawkę (tylko w przypadku uruchamiania z migawki)|



## Zakładka Dostęp i bezpieczeństwo
W tej sekcji można określić klucz ssh i grupę zabezpieczeń dla instancji.

|Para kluczy|Wybierz klucz ssh do logowania do instancji (klucz można utworzyć klikając na znak "+"|
|Grupy zabezpieczeń|Wybierz grupę zabezpieczeń dla instancji (zezwolenie na otwieranie portów)|



## Zakładka Sieć
W tej sekcji można określić, do jakich sieci będzie podłączona instancja. 

|Wybrane sieci|Wybierz dla instancji sieć lub sieci z listy dostępnych sieci|



## Zakładka Po uruchomieniu
W tej sekcji można spersonalizować instancję po jej utworzeniu.

|Źródło skryptu dostosowującego|Bezpośrednio lub Plik|
|Dane skryptu|Wpisz kod skryptu w dostępnym polu - maksymalnie 16KB)|
|Plik skryptu|Kliknij i wybierz skrypt|



## Ustawienia zaawansowane
W tej sekcji można zarządzać partycjonowaniem instancji.

|Partycjonowanie dysku|Automatyczne lub Ręczne|
|Dysk konfiguracyjny|Skonfiguruj OpenStack do zapisywania metadanych na dysku konfiguracyjnym, który zostanie przypisany do instancji w momencie uruchamiania.|




## 
[Przewodniki Cloud]({legacy}1785)

