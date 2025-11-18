---
title: "Jak zmienić zasoby serwera VPS?"
excerpt: "Dowiedz się, jak zmienić parametry pamięci RAM, vCPU i przestrzeni dyskowej w Panelu klienta"
updated: 2025-09-08
---

<style> details>summary { color:rgb(33, 153, 232) !important; cursor: pointer; } details>summary::before { content:'\25B6'; padding-right:1ch; } details[open]>summary::before { content:'\25BC'; } </style>

## Wprowadzenie

Usługi VPS od OVHcloud gwarantują elastyczność, niezawodność i wydajność w przypadku różnorodnych potrzeb hostingowych. Możesz przeprowadzić aktualizację pamięci RAM, vCPU lub przestrzeni dyskowej w [Panelu klienta OVHcloud](/links/manager).

**Dowiedz się, jak dodać vCores, pamięć i przestrzeń dyskową do usługi VPS.**

## Wymagania początkowe

- Posiadanie serwera [VPS](/links/bare-metal/vps) w Panelu klienta OVHcloud
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i wybierz Twój serwer w sekcji `Prywatne serwery wirtualne`{.action}.

> [!primary]
>
> Opcje aktualizacji dostępne w Panelu klienta zależą od gamy i modelu wybranego serwera VPS. Poniższe zrzuty ekranu mają charakter ilustracyjny i nie odnoszą się do konkretnego scenariusza modernizacji VPS.

Następnie możesz uaktualnić swoje vCores (`1`), pamięć (`2`) lub przestrzeń dyskową (`3`).

![Uaktualnij zasoby](images/vps_upgrade01.png){.thumbnail}

### 1. Aby dodać **vCores**

Na karcie **Strona główna** w panelu **Twoja konfiguracja** kliknij opcję `Dodaj vCores i zmień gamę na wyższą`{.action}.

Wybierz nowy model i kliknij na `Dalej`{.action}.

![Uaktualnij zasoby](images/vps_upgrade02.png){.thumbnail}

Wybierz opcje pamięci i przestrzeni dyskowej i kliknij na `Dalej`{.action}.

![Uaktualnij zasoby](images/vps_upgrade03.png){.thumbnail}

Zaakceptuj (`☑`{.action}) warunki **Regulaminy** i kliknij na `Dalej`{.action}.

![Uaktualnij zasoby](images/vps_upgrade04.png){.thumbnail}

Przejrzyj zmiany i kliknij na `Zamów`{.action}.

![Uaktualnij zasoby](images/vps_upgrade05.png){.thumbnail}

### 2. Aby uaktualnić **Pamięć**

Na karcie **Strona główna** w panelu **Konfiguracja** kliknij odpowiednią ilość pamięci. Dostępne opcje zależą od aktualnej gamy serwerów VPS.

W wyskakującym okienku kliknij przycisk `Zatwierdź i zapłać`{.action}, aby sfinalizować zamówienie.

![Uaktualnij zasoby](images/vps_upgrade06.png){.thumbnail}

### 3. Aby uaktualnić z **Storage**

Na karcie **Strona główna** w panelu **Twoja konfiguracja** kliknij wybraną ilość przestrzeni dyskowej. Dostępne opcje zależą od aktualnej gamy serwerów VPS.

W wyskakującym okienku kliknij przycisk `Zatwierdź i zapłać`{.action}, aby sfinalizować zamówienie.

![Uaktualnij zasoby](images/vps_upgrade07.png){.thumbnail}

Zapoznaj się z przewodnikiem dotyczącym następujących kroków: [Jak rozdzielić serwer VPS po aktualizacji pamięci masowej](/pages/bare_metal_cloud/virtual_private_servers/upsize_vps_partition)

## FAQ

/// details | Czy zachowam ten sam adres IP?

Tak, po aktualizacji VPS zachowasz ten sam adres IP.

///

/// details | Czy moje dane będą przechowywane na serwerze?

Tak, po uaktualnieniu zachowasz dane. Podczas uaktualniania dysku może być konieczne rozszerzenie partycji.

///

/// details | Co się stanie z kopią zapasową/snapshotem? Czy mogę korzystać z tej usługi na nowym serwerze VPS?

Tak. Po uaktualnieniach nadal będziesz mieć dostęp do kopii zapasowych i snapshotów.

///

/// details | Co się stanie z licencją na oprogramowanie na starym serwerze VPS? Czy mogę automatycznie przenieść ją na nowy VPS?

Jeśli posiadasz aktywną licencję, pozostanie ona przypisana do serwera VPS. Cena może ulec zmianie w zależności od umowy licencyjnej lub wymagań dostawcy.  
Jeśli w licencji zostaną wprowadzone zmiany, zostaną one wyjaśnione przed przeprowadzeniem aktualizacji serwera VPS.

///

/// details | Czy prędkość zmienia się?

W niektórych przypadkach prędkość może ulec zmianie, na przykład podczas przechodzenia VPS na niższy poziom.

///

/// details | Czy aktualizacja byłaby natychmiastowa, czy też miałbym czas na wykorzystanie obu jednocześnie (konfigurowanie, przesyłanie danych, itp.)?

Aktualizacja zostanie wykonana natychmiast, z zachowaniem wszystkich danych. Aktualizacja spowoduje zwiększenie zasobów istniejącego serwera VPS.

///

## Sprawdź również

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

Dołącz do [grona naszych użytkowników](/links/community).
