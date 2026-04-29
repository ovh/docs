---
title: "Hosting - sprawdzanie statystyk i logów strony www"
excerpt: "Dowiedz się, jak sprawdzić statystyki i logi Twojej strony WWW dzięki rozwiązaniu hostingowemu"
updated: 2026-04-01
---

## Wprowadzenie 

Dostęp do logów i statystyk Twojej strony WWW jest zawarty w wybranej przez Ciebie ofercie hostingu WWW, dostępnej w Panelu klienta.

**Dowiedz się, jak sprawdzić statystyki i logi Twojej strony WWW dzięki rozwiązaniu hostingowemu.**

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu](/links/web/hosting).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

<!-- CP-STEPS-START:access-stats-and-logs -->
Aby uzyskać dostęp do różnych danych statystycznych i logów Twojego hostingu, kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Wybór hostingu WWW w Panelu klienta OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Statystyki i logi`{.action}.
>>
>> ![statistics-and-logs](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs.png){.thumbnail}
>>
> **Krok 3**
>>
>> Ekran, który się wyświetla składa się z 4 sekcji:
>>
>> - [Statystyki odwiedzin na stronie](#website-stats): Przedstawia liczne statystyki dotyczące Twojego hostingu.
>> - [Logi strony WWW](#website-logs): Wyświetla logi hostingu WWW.
>> - [Statystyki infrastruktury](#infra-stats): Przedstawia statystyki graficzne (zapytania HTTP i SQL, polecenia FTP, wykorzystanie CPU, połączenia wychodzące, itp.).
>> - [Zarządzanie użytkownikami](#admin-user): Wyświetla użytkowników z uprawnieniami dostępu do statystyk.
>>
>> ![statistics and logs interface](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/tab.png){.thumbnail}
<!-- CP-STEPS-END:access-stats-and-logs -->

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

> [!primary]
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

> [!success]
>
> Aby wyświetlić statystyki i/lub logi usługi CDN, zapoznaj się z naszym przewodnikiem: „[Hosting WWW - Sprawdzanie statystyk i logów CDN](/pages/web_cloud/web_hosting/cdn_statistics_and_logs)".

### Statystyki infrastruktury <a name="infra-stats"></a>

W tej sekcji dowiesz się, jak działa infrastruktura Twojego hostingu, aby sprawdzić zużycie udostępnionych Ci zasobów.

<!-- CP-STEPS-START:view-infra-stats -->
W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Wybór hostingu WWW w Panelu klienta OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Statystyki i logi`{.action}, a następnie przejdź do sekcji **Statystyki infrastruktury**.
>>
> **Krok 3**
>>
>> W lewym górnym rogu rozwijanego menu można wyświetlać różne typy wykresów:
>>
>> ![Statystyki infrastruktury hostingu WWW](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/infrastructure-statistics-graph.png){.thumbnail}
>>
>> - **Polecenia FTP**: wskazuje główne polecenia (upload, download, login, delete) utworzone za pomocą protokołu FTP na Twoim hostingu.
>> - **Zapytania HTTP**: wskazuje liczbę i kod zwrotny żądań HTTP wykonanych na Twoim hostingu, rozróżniając różne kody HTTP (2xx/3xx, 4xx i 5xx).
>> - **Połączenia wychodzące**: zapytania ze strony www do zewnętrznej witryny sieci Web.
>> - **Wykorzystanie zasobów procesora**: poziom zużycia procesora w instancji hostingu WWW.
>> - **Przekroczenie zasobów** : wskazuje, kiedy Twój hosting przekroczy limit zasobów.
>> - **Zapytania SQL**: liczba zapytań do baz danych Twojego hostingu.
>> - **Czas odpowiedzi SQL**: czas odpowiedzi zapytań wysłanych do baz danych Twojego hostingu.
<!-- CP-STEPS-END:view-infra-stats -->

### Zarządzanie użytkownikami <a name="admin-user"></a>

Utworzenie użytkownika umożliwi komuś dostęp do statystyk Twojego hostingu, bez konieczności posiadania dostępu do Panelu klienta OVHcloud.

<!-- CP-STEPS-START:create-stats-user -->
Aby utworzyć nowego użytkownika, kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Wybór hostingu WWW w Panelu klienta OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Statystyki i logi`{.action}, a następnie przejdź do sekcji **Administracja użytkownikami**.
>>
> **Krok 3**
>>
>> Kliknij `Utwórz nowego użytkownika`{.action}, następnie postępuj zgodnie z instrukcjami, aby dokończyć tworzenie.
>>
>> ![Tworzenie nowego użytkownika dla statystyk](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/create-a-new-user.png){.thumbnail}
<!-- CP-STEPS-END:create-stats-user -->

Aby uzyskać dostęp do statystyk Twojej strony WWW dla użytkownika, którego utworzyłeś, wpisz następujący adres zastępując `000` numerem klastra Twojego hostingu, `domain.tld` nazwą domeny Twojej strony WWW (bez `www`):

```bash
https://logs.cluster000.hosting.ovh.net/domain.tld/
```

<!-- CP-STEPS-START:retrieve-stats-link -->
Link dostępowy do statystyk / logów możesz również sprawdzić bezpośrednio w Panelu klienta. W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź do strony [Hosting](/links/control-panel/web-hosting) i wybierz odpowiedni hosting WWW.
>>
>> ![Wybór hostingu WWW w Panelu klienta OVHcloud](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Statystyki i logi`{.action}, a następnie przejdź do sekcji **Statystyki odwiedzin**.
>>
> **Krok 3**
>>
>> Kliknij przycisk `Zobacz statystyki`{.action}.
>>
>> ![Statystyki odwiedzin strony WWW](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/statistics-and-logs/view-statistics.png){.thumbnail}
>>
>> Na stronie, która się otworzy, pobierz adres URL z paska adresu przeglądarki internetowej.
<!-- CP-STEPS-END:retrieve-stats-link -->

> [!warning]
>
> Jeśli aktywowałeś oddzielne logi na jednej ze swoich [stron WWW](/pages/web_cloud/web_hosting/multisites_configure_multisite), utworzeni tutaj użytkownicy nie mają dostępu do statystyk dla tej konkretnej strony WWW.

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
