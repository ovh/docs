---
title: "Jak skonfigurować rewers DNS Twojego serwera (rekord PTR)"
excerpt: Dowiedz się, jak skonfigurować rewers DNS dla adresu IPv4 lub IPv6 z poziomu Panelu klienta OVHcloud
updated: 2026-02-23
---

## Wprowadzenie

Rewers DNS (*rDNS*) jest uzupełnieniem rozpoznawania DNS "*forward*", który pozwala na rozpoznawanie nazw domen na adresy IP. Dzięki rewersowi DNS adres IP może zostać rozpoznany jako domena (lub nazwa hosta), z którą jest powiązany. Oznacza to, że zapytania DNS skojarzonego adresu IP zwrócą tę domenę.

Konfiguracja rewersu DNS serwera jest szczególnie użyteczna podczas wysyłania e-maili. Weryfikacja serwera e-mail przez systemy ochrony antyspamowej będzie lepsza, jeśli zapytanie DNS adresu IP zostanie poprawnie rozwiązane.

**Niniejszy przewodnik wyjaśnia, jak skonfigurować rewers DNS Twojego adresu IP w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Adres IP przypisany do usługi Twojego konta OVHcloud
- Domena z jej rejestracją `A` lub `AAAA` powiązana z Twoją usługą

<!-- CP-NAV-START:network-public-ip -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Public IP](/links/control-panel/network-public-ip)
- **Ścieżka nawigacji:** `Network`{.action} > `Publiczne adresy IP`{.action}

---
<!-- CP-NAV-END:network-public-ip -->

## W praktyce
Menu rozwijane pod pozycją **Moje publiczne adresy IP i usługi powiązane** umożliwia filtrowanie usług według kategorii. Można również wyszukać konkretny adres IP w pasku wyszukiwania po lewej stronie menu rozwijanego.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Kliknij przycisk `⁝`{.action} w wierszu odpowiedniego adresu IP i wybierz opcję `Skonfiguruj rewers DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

W nowym oknie wprowadź swoją ścieżkę odwrotną i kliknij `Zatwierdź`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Możesz również edytować ścieżkę odwrotną bezpośrednio za pomocą ikony `ołówek`{.action} w kolumnie **Rewers DNS** tabeli.

> [!warning]
> Po wpisaniu domeny do rewers sprawdzi on natychmiast, czy rekordu `A` / `AAAA` odnosi się do tego samego IP. Jest to używane w procedurach antyspamowych, więc rekordu DNS musi być ważne i propagowane. Podczas wprowadzania rewers obowiązują następujące zasady:
>
>  - rewers nie może się rozpocząć od `-`
>  - rewers nie może zawierać więcej niż 63 znaków
>  - rewers nie może zawierać wielkich liter
>  - rewers musi się kończyć znakiem `.`
>
> Przykład: "domain.tld" w polu rewers byłoby `domain.tld.`.

> [!primary]
>
> Jeśli modyfikacja nie działa zgodnie z oczekiwaniami, sprawdź, czy rekord `A` / `AAAA` jest poprawnie skonfigurowany w strefie DNS Twojej domeny. Wprowadzenie zmian w strefie DNS może potrwać do 24 godzin, w przypadku gdy właśnie zmieniłeś rekord.
>
> Jeśli domena jest zarządzana przez OVHcloud jako operator **i korzysta z serwerów DNS OVHcloud**, zapoznaj się z [tym przewodnikiem](/pages/web_cloud/domains/dns_zone_edit).

## Sprawdź również

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Zmień serwery DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Dołącz do [grona naszych użytkowników](/links/community).