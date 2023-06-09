---
title: Wykupienie adresu Additional IP
excerpt: "Dowiedz się, jak zamawiać adresy Additional IP dla swoich instancji"
updated: 2023-01-04
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 04-01-2023**

> [!primary]
>
> Od 6 października 2022 nasze rozwiązanie "Failover IP" nazywa się teraz [Additional IP](https://www.ovhcloud.com/pl/network/additional-ip/). To nie ma wpływu na jego funkcje.
>

## Wprowadzenie

Potrzeba skonfigurowania adresu Additional IP na swoich instancjach może zajść z różnych powodów:

- Masz kilka stron na swojej instancji.
- Hostujesz projekty międzynarodowe.

Aby spełnić te potrzeby, możesz wykupić adres Additional IP dla swoich instancji Public Cloud.

Te adresy Additional IP można migrować tylko do instancji tego samego projektu.

**Z tego przewodnika dowiesz się, jak wykupić adres Additional IP na potrzeby projektu Public Cloud OVHcloud.**

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Posiadanie co najmniej jednej instancji. W tym celu zapoznaj się z [przewodnikiem dotyczącym tworzenia instancji w Panelu klienta](/pages/platform/public-cloud/public-cloud-first-steps#krok-3-tworzenie-instancji/).

> [!warning]
> Ta funkcja nie jest aktualnie dostępna dla instancji Metal.
>

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud.

W menu po lewej stronie otwórz `Public IPs`{.action} w `Network`.

Otwórz kartę `Additional IP`{.action} i kliknij przycisk `Operacje`{.action}. Wybierz `Dodaj nowy adres IP`{.action}.

![Dodaj IP](images/buyaddIP_01.png){.thumbnail}

W etapie 1 zamówienia kliknij `Dalej`{.action}.

![Dodaj IP](images/buyaddIP_02.png){.thumbnail}

Etap 2 umożliwia wybór kraju dla nowego adresu IP.

![Dodaj IP](images/buyaddIP_03.png){.thumbnail}

Dla geolokalizacji IP dostępne są następujące kraje:

|          |          |          |           |                |
|:--------:|:--------:|:--------:|:---------:|:--------------:|
| Belgia  | Finlandia  | Francja   | Niemcy   | Czechy |
| Irlandia  |  Włochy   | Litwa | Niderlandy | Wielka Brytania    |
| Portugalia |  Hiszpania   |  Polska |  Szwajcaria |                 |

> [!primary] **Dostępność**
> 
> Niektóre z tych krajów mogą nie być wymienione w zależności od dostępności obecnie adresów IPv4.
> 

> [!primary] **Dzierżawa**
>
> Geolokalizacja IP opiera się wyłącznie na organizacjach referencyjnych.
> 
> Na przykład [RIPE NCC](https://www.ripe.net/){.external} obsługuje Europę jako regionalny rejestr internetowy.
>
> Jeśli chcesz sprawdzić geolokalizację w inny sposób, skontaktuj się bezpośrednio z odpowiednimi organizacjami. OVHcloud nie będzie mógł udzielić Ci wsparcia w tym zakresie.

Po wybraniu kraju kliknij `Dalej`{.action}.

Na ostatnim etapie wybierz instancję z rozwijanego menu. Następnie kliknij `Wygeneruj zamówienie`{.action}.

![Dodaj IP](images/buyaddIP_04.png){.thumbnail}

Zamówienie zostanie automatycznie otwarte, aby sfinalizować zamówienie.

Więcej informacji znajdziesz w przewodniku dotyczącym [zarządzania zamówieniami OVHcloud](/pages/account/billing/managing_ovh_orders).

Możesz również wyświetlić zamówienie w Panelu klienta, sekcja `Dashboard`{.action}, klikając `Pokaż moje zamówienia`{.action}.

Następnym krokiem jest konfiguracja IP w systemie operacyjnym. Zapoznaj się [z przewodnikiem dotyczącym tej konfiguracji](/pages/platform/network-services/getting-started-04-configure-additional-ip-to-instance).

## Sprawdź również

[Konfiguracja Additional IP](/pages/platform/network-services/getting-started-04-configure-additional-ip-to-instance)

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.

