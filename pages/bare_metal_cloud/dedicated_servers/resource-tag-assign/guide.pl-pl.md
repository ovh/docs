---
title: 'Jak przypisać tag do serwera bare metal'
excerpt: 'Dowiedz się, jak tworzyć i modyfikować tagi dla każdego serwera dedykowanego w panelu klienta OVHcloud'
updated: 2025-07-01
---

## Wprowadzenie

Tagi to etykiety, które można przypisać do Twoich zasobów. Dzięki temu możesz je organizować i zarządzać nimi w bardziej wydajny sposób.

Każda etykieta składa się z dwóch części:

- **Key**: Reprezentuje atrybut lub kategorię.
- **Value**: Odpowiada informacjom związanym z tym kluczem.

Możesz na przykład podzielić Twoje zasoby na kategorie według witryny, usługi lub poziomu bezpieczeństwa. Użycie tagów może ułatwić wyszukiwanie, organizację zasobów, zarządzanie powiązanymi kosztami i stosowanie zasad z pożądaną szczegółowością.

**Dowiedz się, jak utworzyć, przypisać i usunąć tagi dla każdego serwera dedykowanego w Panelu klienta OVHcloud.**

## Wymagania początkowe

- [Serwer dedykowany](/links/bare-metal/bare-metal) z poziomu Twojego konta OVHcloud.
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## Wskazówki

### Przypisz tag do serwera dedykowanego w Panelu klienta OVHcloud

Aby oznaczyć serwer:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Bare Metal Cloud`{.action}.
1. Kliknij na `Serwery dedykowane`{.action} i wybierz serwer z listy.

Domyślnie jesteś przekierowany do zakładki `Informacje ogólne`{.action}.

![Informacje ogólne](images/general_information.png){.thumbnail}

W polu **Znaczniki** kliknij przycisk `Dodaj tag`{.action}.

![Dodaj tag](images/add_a_tag.png){.thumbnail}

Zostaniesz automatycznie przekierowany do zakładki `Tagi`.

Kliknij przycisk `Przypisz tag`{.action}.

![Pusta lista znaczników](images/tag_list_empty.png){.thumbnail}

W oknie, które się wyświetli kliknij pole `Klucz`{.action}, aby otworzyć rozwijane menu, a następnie wybierz odpowiedni klucz.

![Przypisz tag](images/assign_tag.png){.thumbnail}

Następnie kliknij pole `Wartość`{.action} i wybierz odpowiednią wartość z rozwijanego menu.

![Przypisz tag - wypełniony](images/assign_tag_populated.png){.thumbnail}

> [!warning]
>
> **Jeśli chcesz użyć klucza lub wartości, która jeszcze nie istnieje**, możesz ją utworzyć, wprowadzając, a następnie klikając przycisk `Dodaj swoją-wartość`{.action}, gdzie "swoją-wartość" odpowiada wprowadzonemu tekstowi.
>

Na koniec kliknij przycisk `Dodaj`{.action} aby utworzyć znacznik, a następnie kliknij przycisk `Przypisz`{.action} w prawej dolnej części okna.

![Dodanie tagu](images/tag_added.png){.thumbnail}

Otrzymasz zielony komunikat potwierdzenia, a następnie wyświetl listę tagów zastosowanych na wybranym serwerze.

![Tagi - lista z przykładem](images/tag_list_with_example.png){.thumbnail}

### Usunięcie etykiety z serwera dedykowanego

Aby znaleźć listę tagów przypisanych do Twojego serwera:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
1. Przejdź do sekcji `Bare Metal Cloud`{.action}.
1. Kliknij na `Serwery dedykowane`{.action} i wybierz serwer z listy.
1. Przejdź do zakładki `Tags`{.action}.

Kliknij przycisk `...`{.action} po prawej stronie etykiety, którą chcesz usunąć z serwera.
Następnie kliknij `Usuń tag`{.action}.

![Usuwanie listy tagów](images/tag_list_remove.png){.thumbnail}

Zostanie wyświetlone okno potwierdzające. Kliknij przycisk `Zatwierdź`{.action}, aby anulować przypisanie etykiety.

![Usuń tag](images/remove_tag.png){.thumbnail}

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).