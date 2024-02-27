---
title: "Hosting: Statystyki i logi strony"
excerpt: "Dostęp do statystyk strony www"
updated: 2024-02-27
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie 

Dostęp do logów i statystyk Twojej strony WWW jest zawarty w ofercie hostingu WWW dostępnej w Panelu klienta OVHcloud.

**Dowiedz się, jak sprawdzić statystyki i logi Twojej strony WWW.**

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu](https://www.ovhcloud.com/pl/web-hosting/){.external}.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

Przejdź do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Kliknij kartę `Web Cloud`{.action}, a następnie `Hosting`{.action}.

W menu po lewej stronie wybierz odpowiedni hosting, następnie kliknij zakładkę `Statystyki i logi`{.action}

Ekran, który się wyświetla składa się z 4 sekcji:

- **Statystyki odwiedzin na stronie** : zawiera liczne statystyki dotyczące Twojego hostingu
- **Logi strony WWW**: Wyświetla logi hostingu
- **Statystyki dotyczące infrastruktury**: przedstawia statystyki graficzne (zapytania HTTP i SQL, polecenia FTP, etc.)
- **Zarządzanie użytkownikami**: Wyświetla użytkowników z uprawnieniami dostępu do statystyk

![hosting](images/tab.png){.thumbnail}

### Zarządzanie użytkownikami

Utworzenie użytkownika umożliwi osobie uzyskanie dostępu do statystyk hostingu bez dostępu do Panelu klienta OVHcloud. 

Kliknij przycisk `Utwórz nowego użytkownika`{.action} w sekcji `Administracja użytkownikami` i postępuj zgodnie z instrukcjami podanymi poniżej.  

![hosting](images/create-a-new-user.png){.thumbnail}

Aby uzyskać dostęp do statystyk Twojej strony WWW dla użytkownika, którego utworzyłeś, wpisz następujący adres zastępując `000` numerem klastra Twojego hostingu, `mydomain.ovh` nazwą domeny Twojej strony WWW (bez znaków "www"):

```bash
https://logs.cluster000.hosting.ovh.net/mydomain.ovh/
```

W sekcji `Statystyki i logi`{.action} kliknij `Wyświetl statystyki`{.action}.<br>
Z karty przeglądarki, która wyświetla okno statystyk, pobierz link, który będzie używany do łączenia się z jednym z utworzonych użytkowników.

![hosting](images/view-statistics.png){.thumbnail}

> [!warning] 
>
> Jeśli włączyłeś oddzielne logi w [pozycji MultiSite](/pages/web_cloud/web_hosting/multisites_configure_multisite#etap-2-dodanie-domeny-lub-subdomeny), użytkownicy utworzeni tutaj nie mogą uzyskać dostępu do statystyk dla tego wpisu MultiSite.
>

### Statystyki odwiedzin

Aby lepiej monitorować ruch na Twoich stronach WWW i zarządzać nim, masz do dyspozycji narzędzie do statystyki odwiedzin i pomiaru odwiedzin Twoich stron WWW hostowanych na hostingu **OVHcloud Web Statistics**.

![hosting](images/ows-presentation.gif){.thumbnail}

Dashboard OVHcloud Web Statistics zawiera 7 sekcji:

- Dashboard: wizualizacja ruchu na stronach hostingu.
- Browsers: ranking najpopularniejszych przeglądarek internetowych do przeglądania stron internetowych.
- Geolokalizacja:  odsetek odwiedzających w zależności od ich lokalizacji.
- Zapytania: ranking najczęściej odwiedzanych stron na Twoich stronach.
- Roboty: wizualizacja robotów przechodzących przez twoje strony.
- Status: statystyki niepowodzeń i sukcesów napotkanych na podstawie zwracanych kodów HTTP.
- FAQ: sekcja poświęcona najczęstszym pytaniom.

Pole `Period selection` w prawym górnym rogu umożliwia wybranie konkretnego okresu.

### Logi

Możesz wyświetlić logi brutto swojej strony z opóźnieniem wynoszącym około 5 minut.

![hosting](images/osl-statistics-board.png){.thumbnail}

Dostępne są różne typy logów:

- Logi WWW: znajdziesz tutaj różne logi przeglądania Twojej strony WWW oraz operacje wykonywane na Twojej stronie. Dzięki temu możesz na przykład wykryć próby popełnienia złośliwego czynu.
- Logi FTP: Połączenia FTP będą rejestrowane i przechowywane w tych logach.
- Logi błąd: różne błędy generowane przez Twoją stronę.
- Logi CGI: przeprowadzone wywołania skryptów cgi.bin.
- Logi out: statystyki hostingu w zakresie wywołań zewnętrznych.
- Logi SSH: te logi przedstawiają różne połączenia zrealizowane za pomocą protokołu SSH.
- Logi CRON: wynik wykonywania zaplanowanych zadań ([Zadania zautomatyzowane (CRON) na Twoim hostingu](/pages/web_cloud/web_hosting/cron_tasks)).

### Obciążenie hostingu

W tej sekcji znajdziesz opis działalności związanej z infrastrukturą Twojego hostingu, aby sprawdzić zużycie dostępnych zasobów.

Kliknij kartę `Informacje ogólne`{.action}, a następnie przejdź na dół strony.

![hosting](images/infrastructure-statistics-graph.png){.thumbnail}

Możesz wyświetlić różne rodzaje wykresów z menu rozwijanego w lewym górnym rogu:

- Połączenia wychodzące: zapytania wysyłane z Twojej strony WWW na zewnątrz.
- Wykorzystanie procesora: poziom zużycia procesora na instancji hostingowej.
- Przekroczenie pułapu zasobów: wskazuje chwile lub hosting przekracza jego limit zasobów.
- Zapytania SQL: ilość zapytań do baz danych Twojego hostingu.
- Czas odpowiedzi SQL: czas odpowiedzi zapytań wysyłanych do baz danych Twojego hostingu.

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.