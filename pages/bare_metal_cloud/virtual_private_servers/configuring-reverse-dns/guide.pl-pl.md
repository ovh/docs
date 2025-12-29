---
title: "Jak skonfigurować rewers DNS Twojego serwera (rekord PTR)"
excerpt: Dowiedz się, jak skonfigurować odwrotną rozpoznawalność DNS dla swojego adresu IP w Panelu klienta OVHcloud
updated: 2025-12-22
---

## Wprowadzenie

Rewers DNS (*rDNS*) jest uzupełnieniem rozpoznawania DNS "*forward*", który pozwala na rozpoznawanie nazw domen na adresy IP. Dzięki rewersowi DNS adres IP może zostać rozpoznany jako domena (lub nazwa hosta), z którą jest powiązany. Oznacza to, że zapytania DNS skojarzonego adresu IP zwrócą tę domenę.

Konfiguracja rewersu DNS serwera jest szczególnie użyteczna podczas wysyłania e-maili. Weryfikacja serwera e-mail przez systemy ochrony antyspamowej będzie lepsza, jeśli zapytanie DNS adresu IP zostanie poprawnie rozwiązane.

**Niniejszy przewodnik wyjaśnia, jak skonfigurować rewers DNS Twojego adresu IP w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Adres IP przypisany do usługi na koncie OVHcloud
- Nazwa domeny z rekordem `A` przypisanym do Twojej usługi
- Dostęp do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](/links/manager), kliknij `Sieć`{.action} w menu po lewej stronie ekranu, a następnie `Publiczne adresy IP`{.action}.

Menu rozwijane pod pozycją **Moje publiczne adresy IP i usługi powiązane** umożliwia filtrowanie usług według kategorii. Można również wyszukać konkretny adres IP w pasku wyszukiwania po lewej stronie menu rozwijanego.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/filterip_new.png){.thumbnail}

Kliknij przycisk `⁝`{.action} w wierszu odpowiedniego adresu IP i wybierz opcję `Skonfiguruj rewers DNS`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/modifyreverse_new.png){.thumbnail}

W nowym oknie wprowadź swoją ścieżkę odwrotną i kliknij `Zatwierdź`{.action}.

![Reverse DNS](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/enterreverse_new.png){.thumbnail}

Możesz również edytować ścieżkę odwrotną bezpośrednio za pomocą ikony `ołówek`{.action} w kolumnie **Rewers DNS** tabeli.

> [!warning]
> Gdy wprowadzisz nazwę domeny w odwrotnym DNS, natychmiast sprawdzana jest, czy rekord `A` odnosi się z powrotem do tego samego adresu IP. Jest to wykorzystywane w procedurach antyspamowych, więc Twój rekord A musi być prawidłowo skonfigurowany i rozpropagowany. Istnieją pewne zasady, które należy przestrzegać podczas wprowadzania odwrotnej ścieżki:
>
>  - rewers nie może się rozpocząć od `-`
>  - rewers nie może zawierać więcej niż 63 znaków
>  - rewers nie może zawierać wielkich liter
>  - rewers musi się kończyć znakiem `.`
>
> Przykład: "domain.tld" w polu rewers byłoby `domain.tld.`.

> [!primary]
>
> Jeśli modyfikacja nie działa zgodnie z oczekiwaniami, sprawdź, czy rekord `A` jest poprawnie skonfigurowany w strefie DNS Twojej domeny. Pamiętaj, że zmiany w strefie DNS mogą zacząć obowiązywać dopiero po upływie 24 godzin, jeśli rekord `A` został edytowany niedawno.
>
> Jeśli domena jest zarządzana przez OVHcloud jako operator **i korzysta z serwerów DNS OVHcloud**, zapoznaj się z [tym przewodnikiem](/pages/web_cloud/domains/dns_zone_edit).

## Sprawdź również

[Edycja strefy DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Zmień serwery DNS domeny OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Dołącz do [grona naszych użytkowników](/links/community).