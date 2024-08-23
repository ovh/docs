---
title: "Duplikuj zawartość jednej bazy danych do innej"
excerpt: "Dowiedz się, jak skopiować zawartość bazy danych OVHcloud do innej bazy danych OVHcloud"
updated: 2023-11-22
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Twoja baza danych jest kluczowym elementem w budowaniu dynamicznej strony WWW. W trakcie cyklu życia Twojej strony internetowej, ze względów praktycznych lub technicznych, możesz skopiować zawartość Twojej bazy danych do innej bazy danych [start SQL](/links/web/hosting-options-startsql) lub [Web Cloud Databases](/links/web/databases).

**Dowiedz się, jak skopiować zawartość bazy danych OVHcloud do innej bazy danych OVHcloud.**

> [!primary]
>
> Dzięki tej funkcji bazy danych nie są przenoszone, ale kopiowane. Oryginalna baza danych nie jest automatycznie usuwana, w przeciwieństwie do procesu migracji. Tylko zawartość źródłowej bazy danych jest zduplikowana i kopiowana do docelowej bazy danych.
>

## Wymagania początkowe

- Posiadanie ofert baz danych [start SQL](/links/web/hosting-options-startsql) i/lub [Web Cloud Databases](/links/web/databases). Obie bazy danych muszą zostać wcześniej utworzone, aby można było korzystać z narzędzia do powielania.
- Dostęp do [panelu klienta OVHcloud](/links/manager)
- Wystarczające uprawnienia do wszystkich odpowiednich usług bazodanowych. Więcej informacji znajdziesz w naszym przewodniku [Zarządzanie kontaktami dla usług OVHcloud](/pages/account_and_service_management/account_information/managing_contacts).

## W praktyce

Zanim rozpoczniesz, upewnij się, że:

- Twój **D**ata**b**ase **M**anagement **S**ystem (MySQL, PostgreSQL, etc.) jest taki sam dla obu baz danych (źródłowa i docelowa).
- Wersja DBMS jest taka sama dla obu baz (źródłowej i docelowej). Nawet jeśli kopiowanie może działać z różnymi wersjami, zaleca się korzystanie z tych samych wersji.
- Zawartość źródłowej bazy danych nie może przekraczać rozmiaru docelowej bazy danych.

### Identyfikacja źródłowej bazy danych

Funkcja ta jest dostępna do skopiowania: 

- bazy danych [Start SQL](/links/web/hosting-options-startsql) (zawartej w niektórych naszych [hostingach www](/links/web/hosting) lub [zamówionej oddzielnie](/links/web/hosting-options-startsql));
- bazy danych zainstalowanej na serwerze [Web Cloud Databases](/links/web/databases) (zawartej w ofercie [Hosting Performance](/links/web/hosting-performance-offer) lub [zamówionej oddzielnie](/links/web/databases)). 

W zależności od Twojego przypadku ścieżka dostępu do źródłowej bazy danych jest inna.

#### Baza danych Start SQL

[Panel klienta OVHcloud](/links/manager) wybierz `Web Cloud`{.action} w menu na górze interfejsu. W lewej kolumnie przejdź do zakładki `Hosting`{.action}, następnie kliknij hosting www, na którym znajduje się źródłowa baza danych, której zawartość ma zostać skopiowana.

![Lista hostingów](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/web-hosting-selection.png){.thumbnail}

Po kliknięciu na zakładkę `Bazy danych`{.action} wyświetli się lista Twoich baz danych Start SQL.

![Lista baz danych Start SQL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}

#### Web Cloud Databases

[Panel klienta OVHcloud](/links/manager) wybierz `Web Cloud`{.action} w menu na górze interfejsu. W kolumnie z lewej strony przejdź do zakładki `Web Cloud Databases`{.action}, następnie wybierz serwer Web Cloud Databases, na którym znajduje się Twoja źródłowa baza danych, której zawartość chcesz skopiować.

![Lista serwerów WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/wcdb-server-selection.png){.thumbnail}

Po kliknięciu na zakładkę `Bazy danych`{.action} wyświetli się lista baz danych obecnych na Twoim serwerze Web Cloud Databases.

![Lista baz danych WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}

### Kopiuj zawartość bazy danych

W zakładce `Bazy danych`{.action} i bez względu na ofertę, kliknij przycisk`...`{.action} po prawej stronie wiersza odpowiadającego bazie danych, której zawartość chcesz skopiować, a następnie wybierz `Kopiuj bazę danych`{.action}.

![CTA_copier_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}

Wyświetli się okno, w którym zidentyfikujesz docelową bazę danych.

![Interfejs kopiowania bazy danych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}

Jeśli nie posiadasz docelowej bazy danych i jak pokazuje poniższy zrzut ekranu, kliknij poniższe łącze, aby kupić nową bazę danych:

![Lista baz danych WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-link-to-buy-db.png){.thumbnail}

Możesz wybrać zakup usługi "[start SQL](/links/web/hosting-options-startsql)" lub serwera baz danych "[Web Cloud Databases](/links/web/databases)".

> [!primary]
>
> Gdy kupujesz nową bazę danych, nie jest ona włączona domyślnie. Nie zapomnij go aktywować. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager), a następnie przejdź do sekcji `Web Cloud`{.action}.
> 
> - W przypadku bazy danych "Shared SQL": zapoznaj się z przewodnikiem "[Tworzenie bazy danych na hostingu WWW OVHcloud](/pages/web_cloud/web_hosting/sql_create_database)";
> - W przypadku bazy danych, która będzie dostępna na serwerze "Web Cloud Databases": zapoznaj się z naszym przewodnikiem "[Tworzenie bazy danych na serwerze Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".
>

Jeśli posiadasz już docelową bazę danych, najpierw wybierz jej typ:

- `Skopiuj do bazy danych`{.action} : jeśli chcesz skopiować zawartość ze źródłowej bazy danych do bazy danych **Start SQL** (docelowa).
- `Skopiuj do Web Cloud Databases`{.action} : jeśli chcesz skopiować zawartość źródłowej bazy danych do bazy danych **Web Cloud Databas** (docelowa).

#### Wybór 1 - Skopiuj do bazy danych Start SQL

Właśnie wybrałeś `Skopiuj do bazy danych`{.action}. Pojawią się dwie listy rozwijane. Kliknij pierwszy z nich, a następnie wybierz hosting, na którym znajduje się docelowa baza danych Start SQL. Po wybraniu hostingu kliknij drugą listę rozwijaną, aby wybrać docelową bazę danych Start SQL.

Kliknij przycisk `Dalej`{.action}. Pojawi się następujący komunikat potwierdzający:

![Wiadomość potwierdzająca skopiuj bazy danych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Jeśli nie chcesz nadpisywać wybranej docelowej bazy danych, kliknij przycisk `Wstecz`{.action}, aby zmienić wybór lub kliknij przycisk `Anuluj`{.action}, aby anulować wszystkie operacje. W przeciwnym razie kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić duplikowanie zawartości źródłowej bazy danych do docelowej bazy danych.

Pojawi się następujący komunikat potwierdzający:

![Wiadomość o sukcesie bazy danych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-copied-successfull.png){.thumbnail}

Kopiowanie bazy danych może potrwać kilka minut. Aby upewnić się, że kopia została utworzona, przejdź do zakładki `Zadania w trakcie`{.action}. W tabeli pojawi się nowy wiersz odpowiadający kopii ze statusem "Zaplanowany". Po jej zakończeniu linia znika.

![Zadania w trakcie](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

#### Wybór 2 - Kopiuj do bazy danych dostępnej na serwerze Web Cloud Databases

Właśnie wybrałeś `Skopiuj do Web Cloud Databases`{.action}. Pojawią się dwie listy rozwijane. Kliknij pierwszą pozycję, a następnie wybierz ofertę Web Cloud Databases, na której znajduje się docelowa baza danych. Po wybraniu oferty Web Cloud Databases kliknij drugą rozwijaną listę, aby wybrać docelową bazę danych na Twoim serwerze Web Cloud Databases.

Kliknij przycisk `Dalej`{.action}. Pojawi się następujący komunikat potwierdzający:

![Wiadomość potwierdzająca skopiuj bazy danych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}

Jeśli nie chcesz nadpisywać wybranej docelowej bazy danych, kliknij przycisk `Wstecz`{.action}, aby zmienić wybór lub kliknij przycisk `Anuluj`{.action}, aby anulować wszystkie operacje. W przeciwnym razie kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić duplikowanie zawartości źródłowej bazy danych do docelowej bazy danych.

Kopiowanie bazy danych może potrwać kilka minut. Aby upewnić się, że kopia została utworzona, przejdź do zakładki `Zadania w trakcie`{.action}. W tabeli pojawi się nowy wiersz odpowiadający kopii ze statusem "Zaplanowany". Po jej zakończeniu linia znika.

![Zadania w trakcie](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

### Konfiguracja strony WWW z nową bazą danych

Jeśli chcesz użyć nowej bazy danych, po skopiowaniu źródłowej bazy danych wykonaj ostatnią czynność.

W zakładce `Zadania w trakcie`{.action} upewnij się, że kopia została ukończona (wiersz odpowiadający kopii zniknął).

Aby połączyć nową bazę danych ze stroną WWW, edytuj plik konfiguracyjny **C**ontent **M**mnagement **S**ystem (**CMS**) i wprowadź informacje dotyczące połączenia z nową bazą danych.

> [!warning]
>
> Zaleca się wykonanie kopii pliku konfiguracyjnego serwisu WWW przed jego modyfikacją. Jest to gwarancja możliwości zastąpienia nowej wersji pliku starą wersją w przypadku niepowodzenia konfiguracji.

Jeśli na przykład korzystasz z modułu WordPress, zmodyfikuj plik konfiguracyjny *wp-config.php* znajdujący się w katalogu głównym Twojego folderu WordPress na przestrzeni dyskowej (FTP) Twojego hostingu, a następnie zaktualizuj następujące pola:

- DB_NAME
- DB_USER
- DB_PASSWORD
- DB_HOST

Aby uzyskać więcej informacji lub skorzystać z innego CMS-a, zapoznaj się z naszym przewodnikiem [Zmiana hasła do bazy danych hostingu WWW](/pages/web_cloud/web_hosting/sql_change_password).

> [!primary]
>
> Kopia bazy danych nie jest migracją. Źródłowa baza danych nadal istnieje, dopóki jej nie usuniesz. Będziesz mógł wówczas ponownie skonfigurować Twoją stronę WWW, używając starej bazy danych.
>

### Przykłady zastosowania

Mogą wystąpić problemy podczas procesu kopiowania zawartości bazy danych.

#### Baza danych nie wyświetla się na liście

To powiadomienie oznacza, że posiadasz tylko jedną aktywną bazę danych. Do skopiowania źródłowej bazy danych potrzebna jest również aktywna docelowa baza danych. W tym celu możesz:

- Skonfiguruj nową bazę danych dostępną na Twoim hostingu;
- Skonfiguruj nową bazę danych na swoim serwerze [Web Cloud Databases](/links/web/databases);
- Zamów ofertę "[start SQL](/links/web/hosting-options-startsql)" lub serwer baz danych "[Web Cloud Databases](/links/web/databases)"

#### Trwa już wykonywanie operacji

Ten komunikat oznacza, że dla Twojej bazy danych trwa już wykonywanie zadania. Przejdź do karty `Zadania w trakcie`{.action} i sprawdź, czy wykonujesz już operację. Jeśli tak jest, poczekaj na jej zakończenie, aby w razie potrzeby przesłać kopię bazy danych ponownie.

#### Baza danych docelowa nie zawiera wystarczającej ilości miejsca

Docelowa baza danych nie zawiera wystarczającej ilości miejsca. Dostępne są dwa rozwiązania:

- Zamów nową bazę danych [start SQL](/links/web/hosting-options-startsql) dysponującą większą przestrzenią.
- Jeśli posiadasz serwer [Web Cloud Databases](/links/web/databases), zmień ofertę Web Cloud Databases dysponującą większą przestrzenią dyskową.

#### Źródłowa i docelowa baza danych są niezgodne

To powiadomienie oznacza, że **D**ata**b**ase **M**anagement **S**ystem (**DBMS**) w źródłowej bazie danych nie jest identyczny z systemem DBMS docelowej bazy danych.

Ten błąd może się pojawić na przykład podczas używania MySQL dla źródłowej bazy danych i PostgreSQL dla docelowej bazy danych.

## Sprawdź również

[Zaloguj się do Panelu klienta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Zapisz i wyeksportuj bazę danych na serwer baz danych](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Przywróć i zaimportuj bazę danych na serwer baz danych](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export)

[Importuj kopię zapasową do bazy danych hostingu WWW](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 