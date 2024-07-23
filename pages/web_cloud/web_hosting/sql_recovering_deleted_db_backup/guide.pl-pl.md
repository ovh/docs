---
title: "Odzyskiwanie kopii usuniętej bazy danych"
excerpt: "Dowiedz się, jak odzyskać kopię zapasową bazy danych po jej usunięciu z Panelu klienta OVHcloud"
updated: 2024-07-23
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Większość naszych pakietów hostingowych [hosting](/links/web/hosting) zawiera bazy danych. Jeśli przypadkowo usuniesz bazę danych powiązaną z Twoim hostingiem, możesz spróbować pobrać jej kopię zapasową przez nasze API.

**Dowiedz się, jak odnaleźć, za pośrednictwem interfejsów API OVHcloud, kopię zapasową bazy danych po jej usunięciu z Panelu klienta OVHcloud.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jednak w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym usługodawcą](/links/partner). Niestety OVHcloud nie jest w stanie udzielić Ci dalszego wsparcia w zakresie API. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie aktywnego [hostingu OVHcloud](/links/web/hosting), który zawiera jedną (lub więcej) współdzieloną(e) bazę(e) danych OVHcloud.
- Usunięcie bazy danych musi nastąpić przed upływem 30 dni.

## W praktyce

Udostępniamy API OVHcloud, dzięki któremu programiści lub integratorzy mogą łączyć na przykład funkcje dostępne lub niedostępne w Panelu klienta OVHcloud bezpośrednio ze swoimi aplikacjami lub rozwiązaniami.

> [!warning]
>
> Kopie zapasowe hostingu współdzielonego i powiązanych z nim baz danych nie podlegają umowie. Oferujemy usługi dodatkowe, które pomogą Ci w sytuacjach awaryjnych. Zalecamy regularne wykonywanie własnych kopii zapasowych w celu uniknięcia ewentualnej utraty danych.
>
> Ponadto, jeśli baza danych zostanie usunięta przez użytkownika lub administratora, OVHcloud nie będzie mogło zagwarantować jej odzyskania z wyżej wymienionych powodów.
>

### Etap 1 - Uzyskanie nazwy hostingu, do którego przypisana była usunięta baza danych

Aby uzyskać nazwę hostingu, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na górze po lewej stronie, która się wyświetli, znajdź nazwę Twojego hostingu po prawej stronie pozycji `Hosting /`{.action}.

![API](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-webhosting-name.png){.thumbnail}

### Etap 2 - Logowanie do API OVHcloud i umożliwienie im dostępu do usług

W tym celu wykonaj następujące czynności:

- Przejdź do naszej strony [API OVHcloud](/links/api) (upewnij się, że jesteś na `https://eu.api.ovh.com` czy Twoje usługi są zainstalowane w Europie i na `https://ca.api.ovh.com` jeśli są zainstalowane poza Europą).
- Na stronie, która się wyświetli kliknij na środku `Explore the OVHcloud API`{.action}.
- Na nowej stronie, która się pojawi i w lewej części strony, przejdź do formularza znajdującego się po prawej stronie formularza `v1`{.action}, następnie wybierz/wpisz opcję `/hosting/web`.
- Na liście API, która wyświetla się poniżej w lewej kolumnie, wyszukaj i kliknij następujące API: **GET /hosting/web/{serviceName}/dump**. Możesz również kliknąć bezpośrednio na API, aby uzyskać dostęp do:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump
>

- Po prawej stronie wyświetla się API z różnymi formularzami do wypełnienia.
- Kliknij przycisk znajdujący się w prawym górnym rogu o nazwie `Authenticate`{.action}, a następnie przycisk `Login with OVHcloud SSO`{.action}.
- Otworzy się interfejs logowania do [Panelu klienta OVHcloud](/links/manager).
- Zaloguj się za pomocą identyfikatora klienta, następnie kliknij `Authorize`{.action}, aby korzystać z API OVHcloud wraz z usługami dostępnymi w Panelu klienta.
- Zostaniesz automatycznie przekierowany do poprzedniej strony API **GET /hosting/web/{serviceName}/dump** podczas logowania do Panelu klienta OVHcloud.

### Etap 3 - Sprawdź dostępność kopii zapasowych i pobierz ID ostatniej kopii zapasowej

W tym celu wypełnij poszczególne formularze, jak pokazano poniżej:

- Dla sekcji zatytułowanej `PATH PARAMETERS`:
- `serviceName`: Wpisz nazwę hostingu, który uzyskałeś podczas etapu 1 niniejszego przewodnika.

- Dla sekcji zatytułowanej `QUERY-STRING PARAMETERS`:
- `creationDate.from`: Pozostaw formularz pusty.
- `creationDate.to`: Pozostaw formularz pusty.
- `databaseName`: Wpisz nazwę bazy danych, która została przypadkowo usunięta. (przykład: **deletedDatabase.mysql.db**).
- `deletionDate.from`: Pozostaw formularz pusty.
- `deletionDate.to`: Pozostaw formularz pusty.
- `orphan`: Wpisz małymi literami wartość: `true`.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump.png){.thumbnail}

Po wypełnieniu poszczególnych formularzy kliknij niebieski przycisk `Try`{.action} na dole po prawej stronie dwóch wcześniej wypełnionych sekcji.

Jeśli wszystko zostało poprawnie wypełnione i kopie zapasowe są dostępne dla usuniętej bazy danych, lista numerów zapasowych ID pojawia się w oknie `RESPONSE`{.action}, gdy przechodzisz na stronę znajdującą się pod przyciskiem `Try`{.action}.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-response.png){.thumbnail}

Każdy z tych numerów odpowiada dostępnemu identyfikatorowi kopii zapasowej (ID). Te numery identyfikacyjne kopii zapasowej są wyświetlane od najnowszego do najstarszego. **Skopiuj najwyższy identyfikator z listy** (bez `,` na końcu), jeśli chcesz odzyskać (w etapie 4 niniejszego przewodnika) ostatnią kopię zapasową usuniętej bazy danych.

Jeśli w oknie nie wyświetla się żaden identyfikator, upewnij się, że zalogowałeś się jako właściwy identyfikator klienta OVHcloud (jeśli posiadasz kilka). Sprawdź również informacje podane w sekcjach **PATH PARAMETERS** i **QUERY-STRING PARAMETERS**. Następnie spróbuj ponownie wykonać operację.

Jeśli mimo to nie posiadasz identyfikatora, oznacza to, że nie ma lub nie ma więcej dostępnych kopii zapasowych dla bazy danych usuniętej z naszej infrastruktury.

### Etap 4 - Pobierz ostatnią kopię zapasową

Dzięki numerowi identyfikacyjnemu kopii zapasowej uzyskanemu podczas etapu 3 będziesz mógł pobrać za pomocą linku wygenerowanego przez API ostatnią kopię zapasową usuniętej bazy danych.

W tym celu wejdź na stronę [API OVHcloud](/links/api) i wykonaj następujące czynności:

- W lewej części strony przejdź do formularza znajdującego się po prawej stronie formularza `v1`{.action}, następnie wybierz/wpisz opcję `/hosting/web`{.action}.
- Na liście API, która wyświetla się poniżej w lewej kolumnie, wyszukaj i kliknij następujące API: **GET /hosting/web/{serviceName}/dump/{id}**. Możesz również kliknąć bezpośrednio na API, aby uzyskać dostęp do:

> [!api]
>
> @api {v1} /hosting/web GET /hosting/web/{serviceName}/dump/{id}
>

- Po prawej stronie wyświetla się API z różnymi formularzami do wypełnienia.

Wypełnij poszczególne formularze w części `PATH PARAMETERS` w następujący sposób:

- `id`: Skopiuj numer identyfikacyjny kopii zapasowej pobrany podczas wykonywania etapu 3. Jeśli nie jesteś odłączony od naszej strony API OVHcloud, interfejs może zaproponować Ci różne dostępne numery ID kopii zapasowej. Jeśli tak jest, możesz kliknąć pierwszy numer ID z listy znajdującej się tuż pod formularzem **id**.
- `serviceName`: Wpisz nazwę hostingu, który uzyskałeś podczas etapu 1 niniejszego przewodnika.

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id.png){.thumbnail}

Po wypełnieniu poszczególnych formularzy kliknij niebieski przycisk `Try`{.action} na dole po prawej stronie poprzednio wypełnionej sekcji.

Jeśli wszystko zostało poprawnie wpisane, następujący wynik pojawia się w oknie `RESPONSE`{.action}, gdy opuszczasz stronę pod przyciskiem `Try`{.action}:

![API](/pages/assets/screens/api/get-hosting-web-servicename-dump-id-response.png){.thumbnail}

```bash
{
  "taskId": null,
  "orphan": true,
  "status": "created",
  "deletionDate": "2024-07-18T20:02:00+02:00",
  "databaseName": "deleteDatabase.mysql.db",
  "url": "Find here the complete URL to download the deleted database backup",
  "type": "now",
  "creationDate": "2024-06-17T22:17:42+02:00",
  "id": 22XXXXX888
}
```

> [!warning]
>
> Linie w powyższym wyniku nie zawsze pojawiają się w tej kolejności.
>

Następnie skopiuj cały adres URL jako "HTTPS" **bez cudzysłowów**, który znajduje się po prawej stronie pozycji `"url":`, a następnie wklej go na pasku wyszukiwania przeglądarki internetowej, aby rozpocząć pobieranie kopii zapasowej.

### Etap 5 - Utwórz nową bazę danych, zaimportuj plik kopii zapasowej i przywróć połączenie między Twoją stroną www i nową bazą danych

Po odtworzeniu kopii zapasowej bazy danych należy utworzyć nową bazę danych. W tym celu zapoznaj się z przewodnikiem "[Tworzenie bazy danych na hostingu WWW OVH](/pages/web_cloud/web_hosting/sql_create_database)".

Po utworzeniu nowej bazy danych zaimportuj kopię zapasową, korzystając z naszego przewodnika "[Importuj kopię zapasową do bazy danych hostingu WWW](/pages/web_cloud/web_hosting/sql_importing_mysql_database)".

Na koniec połącz Twoją bazę danych OVHcloud z plikiem konfiguracyjnym Twojej strony WWW znajdującym się w [przestrzeni dyskowej FTP Twojego hostingu OVHcloud](/pages/web_cloud/web_hosting/ftp_connection).
W tym celu zastąp informacje o połączeniach z bazą danych przypadkowo usuniętą informacjami o nowych bazach danych OVHcloud. Informacje te znajdują się w pliku "konfiguracja/połączenie z bazą danych" Twojej strony WWW.

> [!success]
>
> Aby powiązać nową bazę danych, jeśli korzystasz z systemu zarządzania treścią (CMS), takiego jak WordPress, Joomla!, Drupal lub PrestaShop, informacje o ich plikach konfiguracyjnych znajdziesz w **etapie 2** przewodnika "[Zmiana hasła do bazy danych](/pages/web_cloud/web_hosting/sql_change_password)".
>

## Sprawdź również <a name="go-further"></a>

[Tworzenie bazy danych na hostingu](/pages/web_cloud/web_hosting/sql_create_database).

[Importuj kopię zapasową do bazy danych hostingu WWW](/pages/web_cloud/web_hosting/sql_importing_mysql_database).

[Zmień hasło do bazy danych](/pages/web_cloud/web_hosting/sql_change_password).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).