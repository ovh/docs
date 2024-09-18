---
title: "Jak skonfigurować rewers DNS Twojego serwera (rekord PTR)"
excerpt: Dowiedz się, jak skonfigurować rewers DNS dla adresu IP z poziomu Panelu klienta OVHcloud
updated: 2024-09-17
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Rewers DNS (*rDNS*) jest uzupełnieniem rozpoznawania DNS "*forward*", który pozwala na rozpoznawanie nazw domen na adresy IP. Dzięki rewersowi DNS adres IP może zostać rozpoznany jako domena (lub nazwa hosta), z którą jest powiązany. Oznacza to, że zapytania DNS skojarzonego adresu IP zwrócą tę domenę.

Konfiguracja rewersu DNS serwera jest szczególnie użyteczna podczas wysyłania e-maili. Weryfikacja serwera e-mail przez systemy ochrony antyspamowej będzie lepsza, jeśli zapytanie DNS adresu IP zostanie poprawnie rozwiązane.

**Niniejszy przewodnik wyjaśnia, jak skonfigurować rewers DNS Twojego adresu IP w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Adres IP przypisany do usługi Twojego konta OVHcloud
- Domena z jej rejestracją `A` powiązana z Twoją usługą
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Bare Metal Cloud`{.action} i otwórz `Network`{.action}. Następnie kliknij przycisk `IP`{.action}.

Menu rozwijane w sekcji **Moje publiczne adresy IP i usługi powiązane** umożliwiają filtrowanie elementów tabeli dla usług i szybkie znajdowanie wybranego adresu IP.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip.png){.thumbnail}

Kliknij `...`{.action} w linii danego adresu IP i wybierz `Zmień rewers`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse.png){.thumbnail}

W nowym oknie wpisz rewers i kliknij na `Zatwierdź`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse.png){.thumbnail}

Możesz również edytować rewers bezpośrednio za pomocą ikony pióra w kolumnie **Rewers DNS** tabeli.

> [!primary]
>
> Jeśli modyfikacja nie działa zgodnie z oczekiwaniami, sprawdź, czy rekord `A` jest poprawnie skonfigurowany w strefie DNS Twojej domeny. Wprowadzenie zmian w strefie DNS może potrwać do 24 godzin, w przypadku gdy właśnie zmieniłeś rekord `A`.
>
> Jeśli domena jest zarządzana przez OVHcloud jako operator **i korzysta z serwerów DNS OVHcloud**, zapoznaj się z [tym przewodnikiem](/pages/web_cloud/domains/dns_zone_edit).
>

## Sprawdź również

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Zmień serwery DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Dołącz do [grona naszych użytkowników](/links/community).