---
title: "Jak reagować na wykrytą niezwykłą aktywność na Twoim hostingu webowym"
excerpt: "Dowiedz się, jakie kroki należy podjąć, gdy wykryto niezwykłą aktywność na Twoim hostingu webowym OVHcloud"
updated: 2025-10-02
---

## Wprowadzenie

Ten przewodnik wyjaśnia, dlaczego może zostać wykryta **niezwykła aktywność** na Twoim hostingu webowym, jakie są jej **tymczasowe konsekwencje** (blokady bezpieczeństwa) oraz **jak przywrócić** funkcje po rozwiązaniu problemu.

**Dowiedz się, jak reagować na niezwykłą aktywność na Twoim hostingu OVHcloud.**

## Wymagania początkowe

- Posiadanie oferty [hostingu webowego OVHcloud](/links/web/hosting).
- Zalogowanie się do swojego [Panelu klienta OVHcloud](/links/manager).

## W praktyce

> [!primary]
> Aby chronić Twój witrynę internetową i jej odwiedzających, automatycznie aktywujemy środki bezpieczeństwa, gdy wykryjemy niezwykłą aktywność na Twoim hostingu webowym. Nie zawsze chodzi o atak: przyczyną może być np. złe skonfigurowanie witryny, skrypt trzeciej strony lub awaryjny rozszerzenie.

### Dlaczego pojawiła się ta wiadomość?

Wykryliśmy niezwykłą aktywność, która może wpłynąć na Twój serwis:

- Przypadek 1 – **Wykryto malware**: prawdopodobna obecność **szkodliwych plików**.
- Przypadek 2 – **Nieprzewidywalna liczba wysyłanych e-maili przez PHP** (skrypty/aplikacje).
- Przypadek 3 – **Nieprzewidywalna liczba zapytań wychodzących** (połączenia z zewnątrz).

Z powodów bezpieczeństwa i w zależności od sytuacji, niektóre funkcje mogą zostać tymczasowo zablokowane:

- **Dostęp do witryny internetowej** (przypadek 1)
- **Wysyłanie e-maili przez PHP** (przypadek 1 i 2).
- **Zapytania wychodzące (TCP OUT)** (przypadek 1 i 3).

### Jakie są konsekwencje dla mojej witryny internetowej?

- W zależności od wykrytej niezwykłej aktywności, Twoja **witryna internetowa może przestać być online** i niedostępna dla odwiedzających.
- **Wysyłanie e-maili przez PHP** (formularze, powiadomienia itp.) i/lub **połączenia wychodzące** (zewnętrzne API, webhooks, aktualizacje przez HTTP itp.) mogą zostać **tymczasowo wyłączone**, w zależności od przypadku.

### Kolejne kroki do rozwiązania sytuacji

#### Przypadek 1 — Wykryto malware

Twój hosting zawiera prawdopodobnie szkodliwe pliki. Aby zrozumieć i rozwiązać te anomalie, skorzystaj z naszego przewodnika [Przypadek użycia — Porady po ataku na Twój witrynę internetową](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

**Po zakończeniu czyszczenia**, przejdź do sekcji [Uniknięcie środków bezpieczeństwa](#lift-security-measures) poniżej.

#### Przypadek 2 — Nieprzewidywalna liczba wysyłanych e-maili przez PHP

Twój witryn internetowy wysłał większą liczbę e-maili przez PHP niż normalnie. Może to być **uzasadnione** (kampania, moduł newslettera) lub **niepożądane** (abuzujące użycie formularza, źle skonfigurowany skrypt, kompromitowane rozszerzenie). Aby zrozumieć i rozwiązać te anomalie, skorzystaj z naszego przewodnika [Śledzenie i zarządzanie automatyzowanymi e-mailami na Twoim hostingu webowym](/pages/web_cloud/web_hosting/mail_function_script_records).

**Po normalizacji sytuacji**, przejdź do sekcji [Uniknięcie środków bezpieczeństwa](#lift-security-measures).

> [!primary]
>
> Ta procedura nie dotyczy **wysyłania wiadomości z Twojego adresu e-mail** (przez webmail lub klienta poczty). Dotyczy wyłącznie **e-maili wysyłanych z Twoich skryptów** (funkcja `mail()` PHP lub wysyłka SMTP uruchomiona przez aplikację z Twojego hostingu webowego).

#### Przypadek 3 — Nieprzewidywalna liczba zapytań wychodzących (TCP OUT)

Twój witryn internetowy tworzy wiele połączeń zewnętrznych (API, aktualizacje, wywołania HTTP itp.). Może to wskazywać na awarię. Aby zrozumieć i rozwiązać te anomalie, skorzystaj z naszego przewodnika [Przypadek użycia — Porady po ataku na Twój witrynę internetową](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

**Po zakończeniu czyszczenia**, przejdź do sekcji [Uniknięcie środków bezpieczeństwa](#lift-security-measures) poniżej.

### Uniknięcie środków bezpieczeństwa <a name="lift-security-measures"></a>

> [!warning]
>
> Wykonaj ten krok **tylko po zastosowaniu powyższych rekomendacji** (diagnostyka, poprawki/aktualizacje, bezpieczeństwo). Jeśli niezwykła aktywność zostanie ponownie wykryta podczas następnego skanu, **środki bezpieczeństwa zostaną automatycznie ponownie aktywowane**. Otrzymasz nową wiadomość i blokady pozostaną w mocy do momentu **definitywnego rozwiązania** sytuacji.

1. Zaloguj się do swojego [Panelu klienta OVHcloud](/links/manager), przejdź do `Web Cloud`{.action} i kliknij swój hosting webowy.
2. Pojawia się **okno ostrzeżenia**: `Niezwykła aktywność na Twoim hostingu`. Jeśli klikniesz przycisk `Później`{.action}, **baner ostrzeżenia** `Wykryto niezwykłą aktywność` pojawia się na górze strony. Kliknij `Dowiedz się więcej`{.action}, aby ponownie otworzyć okno ostrzeżenia.
3. **Zaznacz** pole: `Potwierdzam, że wykonałem wszystkie niezbędne działania, aby rozwiązać problem`.
4. Kliknij `Uniknięcie środków bezpieczeństwa`{.action}.
5. Pojawia się **baner potwierdzenia** na górze strony: `Twój hosting jest analizowany, aby uniknąć środków bezpieczeństwa.` Śledź postęp klikając w link `Zobacz bieżące zadania`{.action} lub bezpośrednio z zakładki `Bieżące zadania`{.action}.

> [!warning]
>
> Upewnij się, że Twój serwis jest **uprawniony do automatycznego odblokowania** (niektóre stany nie pozwalają natychmiastowo unikać środków).

## Sprawdź również <a name="go-further"></a>

[Jak zabezpieczyć witrynę internetową?](/pages/web_cloud/web_hosting/secure_your_website)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).