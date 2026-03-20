---
title: 'Web Cloud Databases - Jak zarządzać logami?'
excerpt: 'Dowiedz się, jak zarządzać logami baz danych hostowanych na serwerze Web Cloud Databases'
updated: 2025-02-20
---

## Wprowadzenie

Log to zdarzenie, które nastąpiło w systemie informatycznym (serwer, komputer, aplikacja, strona internetowa, baza danych, sieć komputerowa, etc.).
Na przykład, log może zapisać i zawierać jeden lub więcej z następujących elementów:

- Sygnatura czasowa zdarzenia (data, godzina, minuta, sekunda, etc.).
- Rodzaj zdarzenia (połączenie, rozłączenie, błąd, download, upload, alert, itp.).
- Dodatkowe informacje o zdarzeniu (odwiedzana strona lub plik, uruchomiona aplikacja, wywołany serwer zdalny, nazwa pobranego lub pobranego pliku, etc.)
- Źródło zdarzenia (identyfikator użytkownika, źródłowy adres IP, program źródłowy, etc.).
- stan systemu, w którym odbywa się zdarzenie (dostępne zasoby, pozostała pamięć, wykorzystanie procesora, etc.).

Logi są zazwyczaj generowane bezpośrednio przez systemy komputerowe, w których realizowane są zdarzenia.
Są one przechowywane i zapisywane w plikach tekstowych, zwanych również plikami logów.

W rezultacie pliki logów pozwalają na wykonanie następujących czynności:

- Analiza zachowania systemu informatycznego generującego logi.
- Identyfikacja błędów, które wystąpiły w systemie informatycznym.
- Napraw błędy w systemie informatycznym.
- Optymalizacja i poprawa wydajności systemu informatycznego.

Twoja oferta [Web Cloud Databases](/links/web/databases) generuje zatem własne logi.

W niektórych sytuacjach możesz sprawdzić/pobrać logi:

- serwera Web Cloud Databases ;
- dla jednej z baz danych hostowanych na serwerze Web Cloud Databases.

**Dowiedz się, jak wyświetlać logi usługi Web Cloud Databases i zarządzać nimi.**

## Wymagania początkowe

- Posiadanie rozwiązania [Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wybierz usługę bazy danych

---
<!-- CP-NAV-END:web-cloud-databases -->

## W praktyce

> [!warning]
>
> Oddajemy w Twoje ręce tutorial, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Jeśli jednak napotkasz trudności, zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner). Niestety OVH nie jest w stanie udzielić Ci wsparcia w interpretacji logów dostępnych w ramach Twojego rozwiązania Web Cloud Databases. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)" tego tutoriala.
>

### Wyświetl logi Web Cloud Databases w czasie rzeczywistym

Aby w czasie rzeczywistym sprawdzać logi rozwiązania Web Cloud Databases, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu `Web Cloud Databases`{.action}.
4. Wybierz odpowiednią instancję Web Cloud Databases.
5. Na stronie, która się wyświetli kliknij zakładkę `Logi`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}

To na tej wbudowanej konsoli znajdują się, w czasie rzeczywistym, logi rozwiązania Web Cloud Databases.

> [!primary]
>
> Jak wspomniano powyżej, logi są dostępne tutaj tylko w czasie rzeczywistym. Oznacza to, że logi te nie pojawią się, dopóki nie zostaną wygenerowane w momencie, gdy będziesz w zakładce `Logi`{.action}. 
>
> Jeśli opuścisz zakładkę `Logi`{.action} i powrócisz do niej później, historia, która się wcześniej wyświetlała, zniknie.
>

### Historia logów usługi Web Cloud Databases

Aby pobrać historię logów rozwiązania Web Cloud Databases, należy połączyć się z nim za pomocą SFTP.

> [!warning]
>
> Przed zalogowaniem się upewnij się, że publiczny adres IP stacji, której używasz jest autoryzowany na Twoim serwerze Web Cloud Databases, zaznaczając opcję `SFTP`.
>
> Aby to sprawdzić, pobierz publiczny adres IP punktu dostępu do Internetu i sprawdź sekcję **Autoryzuj adres IP** w [tym przewodniku](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

Aby uzyskać informacje na temat logowania przez SFTP do rozwiązania Web Cloud Databases, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu `Web Cloud Databases`{.action}.
4. Wybierz odpowiednie rozwiązanie Web Cloud Databases.
5. Na stronie, która się wyświetli pozostań w zakładce `Informacje ogólne`{.action} i przejdź do rubryki zatytułowanej `Informacje na temat połączenia`{.action}.
6. Pod napisem `SFTP`{.action} znajdziesz wszystkie informacje niezbędne do logowania się przez SFTP.

> [!primary]
>
> Jeśli nie znasz `Hasło do serwera`, kliknij przycisk `...`{.action} po prawej stronie, aby je zmienić.
>

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Po pobraniu danych logowania SFTP zaloguj się za pomocą klienta FTP (FileZilla, Cyberduck, WinSCP, etc.).

W przypadku programu FileZilla przejdź do menu `file`{.action} w lewym górnym rogu i kliknij opcję `Site Manager`{.action}.

Kliknij `New site`{.action}, po czym wpisz wybrane wcześniej parametry.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

Plik logów o nazwie `stdout.log` znajduje się w katalogu głównym.

Możesz go pobrać na swoje stanowisko i sprawdzić.

> [!primary]
>
> Dodatkowy plik logów o nazwie `slow-query.log` może pojawić się w katalogu głównym SFTP Twojego serwera Web Cloud Databases.
> Ten plik zawiera historię powolnych zapytań uruchomionych na serwerze Web Cloud Databases. 
> 
> Domyślnie w przypadku rozwiązań Web Cloud Databases wartość ta jest ustawiona na 1 sekundę w zmiennej **long_query_time**.
> 
> Dzięki temu plikowi zoptymalizujesz skrypty i zawartość Twojej bazy (baz) danych, aby zwiększyć wydajność różnych przypisanych usług.
>

### Subskrybuj logi rozwiązania Web Cloud Databases dla Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) to platforma do zarządzania logami. Jest to przydatne, jeśli dysponujesz bardzo dużą infrastrukturą lub jeśli Twoje usługi generują dużą liczbę logów. Platforma ta ma pomóc w agregacji logów i zarządzaniu nimi.

Działa poprzez pobieranie logów generowanych przez Twoją infrastrukturę / strony WWW lub aplikacje, na przykład do:

- przechowywanie danych;
- wyświetlanie ich na dashboardach w czasie rzeczywistym;
- umożliwienie użytkownikom wykonywania złożonych zapytań;
- filtrować według daty, aplikacji, typu lub zawartości;

Więcej informacji na temat Logs Data Platform znajdziesz w przewodniku wprowadzającym[Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Ponieważ rozwiązania [Web Cloud Databases](/links/web/databases) mogą być wykorzystywane z wieloma usługami (hosting, VPS, serwery dedykowane, etc.), mogą one, w uzupełnieniu dostępnych logów w czasie rzeczywistym, być subskrybowane przez strumień danych Logs Data Platform.

Aby subskrybować rozwiązanie Web Cloud Databases ze strumieniem danych Logs Data Platform, wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. Kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu `Web Cloud Databases`{.action}.
4. Wybierz odpowiednią instancję Web Cloud Databases.
5. Na stronie, która się wyświetli kliknij zakładkę `Logi`{.action}.
6. Po prawej stronie ramki, w której wyświetlają się logi w czasie rzeczywistym, kliknij przycisk `Subskrybuj`{.action}.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}

Na nowo otwartej stronie, jeśli dysponujesz kilkoma rozwiązaniami Logs Data Platform w [Panelu klienta OVHcloud](/links/manager), z rozwijanej listy znajdującej się tuż pod przyciskiem `Dodaj strumień danych` wybierz Logs Data Platform, którą chcesz subskrybować.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}

Aby zasubskrybować rozwiązanie Web Cloud Databases, pojawiają się dwa scenariusze.

#### Przypadek nr 1 - Subskrybuj istniejący kanał informacyjny dotyczący Twojej usługi Logs Data Platform <a name="wcdb-ldp-case1"></a>

Jeśli dany strumień już istnieje, jest wyświetlany jako wiersz w tabeli na dole strony.
W tym przypadku i aby subskrybować rozwiązanie Web Cloud Databases dla tego istniejącego strumienia, wystarczy kliknąć przycisk `Subskrybuj`{.action} znajdujący się po prawej stronie linii odpowiadającej danemu strumieniowi.

Po kilku sekundach, jeśli pozostaniesz na tej samej stronie, w Panelu klienta pojawi się komunikat informujący, że subskrypcja została utworzona.

#### Przypadek nr 2 - Subskrybuj nowy strumień danych na Twojej usłudze Logs Data Platform

Jeśli dany strumień danych jeszcze nie istnieje, kliknij przycisk `Dodaj strumień danych`{.action}.
Nastąpi przekierowanie do nowej strony w Panelu klienta OVHcloud, na której będziesz mógł utworzyć i dodać nowy strumień danych do rozwiązania Logs Data Platform.

![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}

W razie potrzeby sprawdź przewodniki "[Wprowadzenie do Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)" (EN) i "[Szybkie uruchomienie z Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)" (EN), aby przeprowadzić te działania.

Po wypełnieniu poszczególnych formularzy i informacji, kliknij przycisk `Zapisz`{.action}.

Zostaniesz wówczas przekierowany do zakładki `Strumień danych` Twojego rozwiązania Logs Data Platform.

Subskrybuj Twoje rozwiązanie Web Cloud Databases do nowo utworzonego strumienia danych w Twoim rozwiązaniu Logs Data Platform.

Aby to zrobić i, jak wyjaśniono [wcześniej](#wcdb-ldp), powróć do zakładki `Logi`{.action} Twojego rozwiązania Web Cloud Databases, aby subskrybować nowy strumień danych, a następnie postępuj zgodnie z instrukcjami z [Sprawa nr 1](#wcdb-ldp-case1) opisanymi powyżej.

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Wprowadzenie do Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Szybkie uruchomienie z Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Dołącz do [grona naszych użytkowników](/links/community).