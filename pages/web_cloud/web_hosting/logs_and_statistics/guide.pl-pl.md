---
title: "Hosting - sprawdzanie statystyk i logów strony www"
excerpt: "Dowiedz się, jak sprawdzić statystyki i logi Twojej strony WWW dzięki rozwiązaniu hostingowemu"
updated: 2024-02-27
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie 

Dostęp do logów i statystyk Twojej strony WWW jest zawarty w wybranej przez Ciebie ofercie hostingu WWW, dostępnej w Panelu klienta.

**Dowiedz się, jak sprawdzić statystyki i logi Twojej strony WWW dzięki rozwiązaniu hostingowemu.**

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu](/links/web/hosting){.external}.
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}.

## W praktyce

Aby uzyskać dostęp do różnych danych statystycznych i logów Twojego hostingu, wykonaj następujące czynności: 

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli kliknij zakładkę `Statystyki i logi`{.action}.

Ekran, który się wyświetla składa się z 4 sekcji:

- [Statystyki odwiedzin na stronie](#website-stats): przedstawia liczne statystyki dotyczące Twojego hostingu.
- [Logi strony WWW](#website-logs): Wyświetla logi hostingu www.
- [Statystyki dotyczące infrastruktury](#infra-stats): przedstawia statystyki graficzne (zapytania HTTP i SQL, polecenia FTP, wykorzystanie CPU, połączenia wychodzące, itp.)
- [Zarządzanie użytkownikami](#admin-user): Wyświetla użytkowników z uprawnieniami dostępu do statystyk

![statistics and logs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}

### Statystyki odwiedzin na stronie <a name="website-stats"></a>

Do lepszego monitorowania i zarządzania ruchem na Twoich stronach WWW służy **OVHcloud Web Statistics**, narzędzie do statystyki odwiedzin i pomiaru odwiedzin na stronach WWW zainstalowanych w ramach Twojego hostingu.

![ows dashboard](/pages/assets/screens/other/web-tools/logs/ows-presentation.gif){.thumbnail}

Dashboard'**OVHcloud Web Statistics** przedstawia 7 sekcji:

- **Dashboard**: Wizualizacja ruchu na stronach WWW.
- **Browsers**: Klasyfikacja najpopularniejszych przeglądarek internetowych służących do przeglądania Twoich stron WWW.
- **Geolocalization** : odsetek odwiedzających w zależności od ich lokalizacji.
- **Requests**: Klasyfikacja najczęściej odwiedzanych stron.
- **Robots** : wyświetlanie botów odwiedzających Twoje strony.
- **Status**: statystyki dotyczące nieudanych i udanych wejść na stronę na podstawie zwracanych kodów HTTP.
- **FAQ** : sekcja dotycząca najczęściej zadawanych pytań. Wyjaśnia również terminy techniczne, które można spotkać w narzędziu.

Pole `Period selection` w prawym górnym rogu umożliwia wybranie konkretnego okresu.

### Logi strony WWW <a name="website-logs"></a>

> [primary]
>
> Nie będziemy w stanie udzielić Ci wsparcia w interpretacji logów Twojego hostingu, ponieważ jest to wyłącznie kwestia rozwoju www, a nie hostingu.
>
> W przypadku trudności skontaktuj się z [wyspecjalizowanym dostawcą](/links/partner).
>

Możesz wyświetlać logi Twojej strony z około 5-minutowym opóźnieniem.

![osl statistiques dashboard](/pages/assets/screens/other/web-tools/logs/osl-statistics-board.png){.thumbnail}

Dostępne są różne rodzaje logów:

- **Logi WWW** : zawierają logi różnych użytkowników odwiedzających Twoją stronę WWW, a także różne operacje wykonywane na Twojej stronie WWW. Dzięki temu możesz wykryć np. próby złośliwych działań.
- **Logi FTP** : różne połączenia / polecenia FTP będą zachowywane w tych logach.
- **Logi błąd** : znajdziesz tutaj błędy generowane przez Twoją stronę WWW.
- **Logs CGI** : w tych logach są przechowywane wywołania skryptów cgi.bin, które zostały wykonane.
- **Logs out** : zawierają historię różnych zapytań zewnętrznych (połączenia wychodzące TCP) zrealizowanych z poziomu hostingu www do infrastruktur zdalnych.
- **Logs SSH** : te logi przedstawiają różne połączenia / polecenia zrealizowane za pomocą protokołu SSH.
- **Logs CRON** : znajdziesz tutaj wyniki wykonywania zaplanowanych zadań [(CRON)](/pages/web_cloud/web_hosting/cron_tasks) na Twoim hostingu.

### Statystyki dotyczące infrastruktury <a name="infra-stats"></a>

W tej sekcji dowiesz się, jak działa infrastruktura Twojego hostingu, aby sprawdzić zużycie udostępnionych Ci zasobów.

![infrastructure statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}

W lewym górnym rogu rozwijanego menu można wyświetlać różne typy wykresów:

- **Polecenia FTP**: wskazuje główne polecenia (upload, download, login, delete) utworzone za pomocą protokołu FTP na Twoim hostingu.
- **Zapytania HTTP**: wskazuje liczbę i kod zwrotny żądań HTTP wykonanych na Twoim hostingu. Rozróżnimy różne kody HTTP (2xx/3xx, 4xx i 5xx). W razie potrzeby możesz znaleźć listę kodów HTTP i ich znaczenie, wyszukując je bezpośrednio w wyszukiwarce (Google, Yahoo!, bing, itp.).
- **Połączenia wychodzące**: zapytania ze strony www do zewnętrznej witryny sieci Web.
- **Wykorzystanie zasobów procesora**: poziom zużycia procesora w instancji hostingu WWW.
- **Przekroczenie zasobów** : wskazuje, kiedy Twój hosting przekroczy limit zasobów.
- **Zapytania SQL**: liczba zapytań do baz danych Twojego hostingu.
- **Czas odpowiedzi SQL**: czas odpowiedzi zapytań wysłanych do baz danych Twojego hostingu.

### Zarządzanie użytkownikami <a name="admin-user"></a>

Utworzenie użytkownika umożliwi komuś dostęp do statystyk Twojego hostingu, bez konieczności posiadania dostępu do Panelu klienta OVHcloud.

W sekcji `Zarządzanie użytkownikami`{.action} kliknij `Utwórz nowego użytkownika`{.action}, następnie postępuj zgodnie z instrukcjami, aby dokończyć tworzenie nowego użytkownika.

![create a new user](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/create-a-new-user.png){.thumbnail}

Aby uzyskać dostęp do statystyk Twojej strony WWW dla użytkownika, którego utworzyłeś, wpisz następujący adres zastępując `000` numerem klastra Twojego hostingu, `domain.tld` nazwą domeny Twojej strony WWW (bez `www`):

```bash
https://logs.cluster000.hosting.ovh.net/domain.tld/
```

Link dostępowy do statystyk / logów możesz również sprawdzić bezpośrednio w Panelu klienta:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli kliknij zakładkę `Statystyki i logi`{.action}.
6. Przejdź do sekcji `Statystyki odwiedzin na stronie`{.action}.
7. Kliknij przycisk `Wyświetl statystyki`{.action}.

![website visit statistics](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-statistics.png){.thumbnail}

Na stronie, która się otworzy, pobierz adres URL z paska adresu przeglądarki internetowej.

> [!warning]
>
> Jeśli aktywowałeś oddzielne logi na [wpis MultiSite](/pages/web_cloud/web_hosting/multisites_configure_multisite), utworzeni tutaj użytkownicy nie mają dostępu do statystyk dla tego wpisu MultiSite.
>

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).