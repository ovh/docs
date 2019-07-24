---
title: 'Zmiana strefy rozgłaszania bloku IP w sieci vRack'
slug: zmiana-rozglaszania-bloku-ip-vrack
excerpt: 'Dowiedz się, jak zmienić strefę rozgłaszania bloku IP w sieci vRack'
section: vRack
---

**Ostatnia aktualizacja z dnia 17-06-2019**

## Wprowadzenie

Rozwiązanie [vRack]({ovh_www}/rozwiazania/vrack/){.external} umożliwia konfigurację sieci między dwoma lub więcej [serwerami dedykowanymi]({ovh_www}/serwery_dedykowane/){.external} OVH.

**Dowiedz się, jak zmienić strefę rozgłaszania bloku IP w sieci vRack.**

## Wymagania początkowe

- Posiadanie usługi [vRack]({ovh_www}/rozwiazania/vrack/){.external}
- [Konfiguracja bloku adresów IP w sieci vRack](../dodawanie-lub-usuwanie-bloku-ip-vrack/)
- Posiadanie zaawansowanej wiedzy w zakresie sieci

## W praktyce

### Krok 1: weryfikacja aktualnej strefy rozgłaszania

Rozpocznij operację, sprawdzając aktualną strefę rozgłaszania odpowiedniego bloku IP. W tym celu wykonaj „traceroute” w adresie IP bloku. Przetestuj dowolnie wybrany przez Ciebie adres.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.443 ms  0.426 ms  0.411 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.394 ms  0.396 ms  0.391 ms
 4  po101.gra-z1g2-a75.fr.eu (92.222.60.119)  0.374 ms  0.356 ms po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.333 ms
 5  be120.gra-d1-a75.fr.eu (37.187.232.74)  0.327 ms be121.gra-d2-a75.fr.eu (37.187.232.80)  0.335 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.328 ms
 6  vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.850 ms vl1248.rbx-d2-a75.fr.eu (37.187.231.252)  1.874 ms vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.816 ms
 7  10.95.66.51 (10.95.66.51)  1.943 ms 10.95.66.53 (10.95.66.53)  1.872 ms 10.95.66.59 (10.95.66.59)  1.860 ms
 8  1.2.3.4  2.865 ms
```

Powyższy przykład pokazuje, że testowany adres IP jest obecnie rozgłaszany w **Roubaix.** Jest to widoczne w ostatnim zrealizowanym skoku: „vl1247.**rbx**-g1-a75.fr.eu (37.187.231.234) 1.816 ms”. Skorzystaj z naszej strony [Centra danych]({ovh_www}/onas/centra-danych.xml){.external}, aby zidentyfikować centrum danych, w którym są Twoje usługi.

### Etap 2: zmiana strefy rozgłaszania bloku IP

Kliknij link <https://api.ovh.com/console/> i zaloguj się za pomocą identyfikatora klienta OVH. Teraz użyj poniższych API, aby zmienić strefę rozgłaszania bloku IP.

> [!api]
>
> @api {GET} /vrack#GET
> 

To żądanie API jest używany do pobierania listy usług vRack. Jeśli nie możesz odnaleźć odpowiedniej usługi za pomocą wyświetlonych nazw, skorzystaj z [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, aby ją odszukać. W tym celu przejdź do sekcji „Cloud”, a następnie „vRack”.

> [!api]
>
> @api {POST} /vrack/{serviceName}/ip/{ip}/announceInZone#POST
> 

To zapytanie API umożliwia zmianę strefy rozgłaszania bloku IP. Wypełnij teraz wymagane pola:

|Pole|Opis |
|---|---|
|serviceName|Wprowadź nazwę odpowiedniej usługi vRack.|
|ip|Wprowadź nazwę odpowiedniego bloku IP. Pamiętaj, aby nie wpisywać adresu IP przetestowanego w poprzednim kroku, tylko odpowiedni blok IP. Przykład: `1.2.3.4/27`.|
|strefa|Wybierz nową strefę rozgłaszania bloku IP. Pamiętaj, aby nie wpisywać strefy pobranej na poprzednim etapie.|

Na koniec wykonaj zapytanie API, aby zmienić strefę rozgłaszania.

### Krok 3: sprawdzanie nowej strefy rozgłaszania

Po zmianie strefy rozgłaszania ponownie wykonaj "traceroute" na adresie IP używanym podczas etapu 1 w celu jego weryfikacji.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.396 ms  0.379 ms  0.372 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.360 ms  0.361 ms  0.354 ms
 4  po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.401 ms  0.396 ms  0.389 ms
 5  be121.gra-d1-a75.fr.eu (37.187.232.76)  0.346 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.318 ms be120.gra-d1-a75.fr.eu (37.187.232.74)  0.351 ms
 6  10.73.0.65 (10.73.0.65)  0.625 ms 10.73.0.69 (10.73.0.69)  0.729 ms 10.73.0.65 (10.73.0.65)  0.526 ms
 7  10.17.145.25 (10.17.145.25)  0.354 ms 10.17.145.29 (10.17.145.29)  0.426 ms 10.17.145.25 (10.17.145.25)  0.415 ms
 8  1.2.3.4  2.865 ms
```

Powyższy przykład pokazuje, że testowany adres IP jest obecnie rozgłaszany w **Gravelines** Jest to widoczne w ostatnim zrealizowanym skoku: „be120.**gra**-d1-a75.fr.eu (37.187.232.74) 0.351 ms”. Skorzystaj z naszej strony [Centra danych]({ovh_www}/onas/centra-danych.xml){.external}, aby zidentyfikować centrum danych, w którym są Twoje usługi.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.