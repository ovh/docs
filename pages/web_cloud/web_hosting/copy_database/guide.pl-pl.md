---
title: "Duplikuj zawartość jednej bazy danych do innej"
excerpt: "Dowiedz się, jak skopiować zawartość bazy danych OVHcloud do innej bazy danych OVHcloud"
updated: 2026-03-31
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Twoja baza danych jest kluczowym elementem w budowaniu dynamicznej strony WWW. W trakcie cyklu życia Twojej strony internetowej, ze względów praktycznych lub technicznych, możesz skopiować zawartość Twojej bazy danych do innej bazy danych [start SQL](/links/web/hosting-options-startsql) lub [Web Cloud Databases](/links/web/databases).

**Dowiedz się, jak skopiować zawartość bazy danych OVHcloud do innej bazy danych OVHcloud.**

> [!primary]
>
> Dzięki tej funkcji bazy danych nie są przenoszone, ale kopiowane. Oryginalna baza danych nie jest automatycznie usuwana, w przeciwieństwie do procesu migracji. Tylko zawartość źródłowej bazy danych jest zduplikowana i kopiowana do docelowej bazy danych.
>

## Wymagania początkowe

- Posiadanie ofert baz danych [start SQL](/links/web/hosting-options-startsql) i/lub [Web Cloud Databases](/links/web/databases). Obie bazy danych muszą zostać wcześniej utworzone, aby można było korzystać z narzędzia do powielania.
- Wystarczające uprawnienia do wszystkich odpowiednich usług bazodanowych. Więcej informacji znajdziesz w naszym przewodniku [Zarządzanie kontaktami dla usług OVHcloud](/pages/account_and_service_management/account_information/managing_contacts).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

Zanim rozpoczniesz, upewnij się, że:

- Twój **D**ata**b**ase **M**anagement **S**ystem (MySQL, PostgreSQL, etc.) jest taki sam dla obu baz danych (źródłowa i docelowa).
- Wersja DBMS jest taka sama dla obu baz (źródłowej i docelowej). Nawet jeśli kopiowanie może działać z różnymi wersjami, zaleca się korzystanie z tych samych wersji.
- Zawartość źródłowej bazy danych nie może przekraczać rozmiaru docelowej bazy danych.

### Kopiuj zawartość bazy danych

Funkcja ta jest dostępna do skopiowania:

- bazy danych [Start SQL](/links/web/hosting-options-startsql) (zawartej w niektórych naszych [hostingach www](/links/web/hosting) lub [zamówionej oddzielnie](/links/web/hosting-options-startsql));
- bazy danych zainstalowanej na serwerze [Web Cloud Databases](/links/web/databases) (zawartej w ofercie [Hosting Performance](/links/web/hosting-performance-offer) lub [zamówionej oddzielnie](/links/web/databases)).

W zależności od Twojego przypadku ścieżka dostępu do źródłowej bazy danych jest inna.

**Kliknij na odpowiednią sytuację, aby wyświetlić zawartość.**

<!-- CP-STEPS-START:copy-from-startsql -->
/// details | Z bazy danych Start SQL

Kliknij poniższe zakładki, aby wyświetlić kolejne **6** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}. Tabela zawiera listę baz danych utworzonych na Twoim hostingu.
>>
>> ![Lista baz danych Start SQL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-dashboard-db-list.png){.thumbnail}
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie wiersza odpowiadającego bazie danych, której zawartość chcesz skopiować, a następnie wybierz `Kopiuj bazę danych`{.action}.
>>
>> ![CTA_copier_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wyświetli się okno, w którym wybierzesz docelową bazę danych.
>>
>> ![Interfejs kopiowania bazy danych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Jeśli nie posiadasz docelowej bazy danych, kliknij link w oknie, aby kupić nową bazę danych. Pamiętaj o jej aktywacji:
>> >
>> > - W przypadku bazy danych Shared SQL: zapoznaj się z przewodnikiem "[Tworzenie bazy danych na hostingu WWW OVHcloud](/pages/web_cloud/web_hosting/sql_create_database)".
>> > - W przypadku bazy danych na serwerze Web Cloud Databases: zapoznaj się z naszym przewodnikiem "[Tworzenie bazy danych na serwerze Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".
>>
>> - **Wybór 1 - Skopiuj do bazy danych Start SQL**: wybierz `Skopiuj do bazy danych`{.action}, a następnie wybierz docelową bazę danych z listy rozwijanej.
>> - **Wybór 2 - Skopiuj do serwera Web Cloud Databases**: wybierz `Skopiuj do Web Cloud Databases`{.action}. Pojawią się dwie listy rozwijane. Kliknij pierwszą, aby wybrać ofertę Web Cloud Databases, a następnie drugą, aby wybrać docelową bazę danych.
>>
> **Krok 5**
>>
>> Kliknij przycisk `Dalej`{.action}. Pojawi się następujący komunikat potwierdzający:
>>
>> ![Wiadomość potwierdzająca skopiuj bazy danych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}
>>
>> Jeśli nie chcesz nadpisywać wybranej docelowej bazy danych, kliknij przycisk `Wstecz`{.action}, aby zmienić wybór lub kliknij przycisk `Anuluj`{.action}, aby anulować wszystkie operacje. W przeciwnym razie kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić duplikowanie.
>>
> **Krok 6**
>>
>> Kopiowanie bazy danych może potrwać kilka minut. W zakładce `Zadania w toku`{.action} pojawi się nowy wiersz odpowiadający kopii ze statusem "Zaplanowany". Po jej zakończeniu wiersz znika.
>>
>> ![Zadania w trakcie](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

///
<!-- CP-STEPS-END:copy-from-startsql -->

<!-- CP-STEPS-START:copy-from-wcdb -->
/// details | Z serwera Web Cloud Databases

Kliknij poniższe zakładki, aby wyświetlić kolejne **6** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}. Wyświetli się lista baz danych obecnych na Twoim serwerze Web Cloud Databases.
>>
>> ![Lista baz danych WCD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/wcdb-dashboard-db-list.png){.thumbnail}
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie wiersza odpowiadającego bazie danych, której zawartość chcesz skopiować, a następnie wybierz `Kopiuj bazę danych`{.action}.
>>
>> ![CTA_copier_BDD](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/copy-db-tool.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wyświetli się okno, w którym wybierzesz docelową bazę danych.
>>
>> ![Interfejs kopiowania bazy danych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-1.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Jeśli nie posiadasz docelowej bazy danych, kliknij link w oknie, aby kupić nową bazę danych. Pamiętaj o jej aktywacji:
>> >
>> > - W przypadku bazy danych Shared SQL: zapoznaj się z przewodnikiem "[Tworzenie bazy danych na hostingu WWW OVHcloud](/pages/web_cloud/web_hosting/sql_create_database)".
>> > - W przypadku bazy danych na serwerze Web Cloud Databases: zapoznaj się z naszym przewodnikiem "[Tworzenie bazy danych na serwerze Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)".
>>
>> - **Wybór 1 - Skopiuj do bazy danych Start SQL**: wybierz `Skopiuj do bazy danych`{.action}, a następnie wybierz docelową bazę danych z listy rozwijanej.
>> - **Wybór 2 - Skopiuj do serwera Web Cloud Databases**: wybierz `Skopiuj do Web Cloud Databases`{.action}. Pojawią się dwie listy rozwijane. Kliknij pierwszą, aby wybrać ofertę Web Cloud Databases, a następnie drugą, aby wybrać docelową bazę danych.
>>
> **Krok 5**
>>
>> Kliknij przycisk `Dalej`{.action}. Pojawi się następujący komunikat potwierdzający:
>>
>> ![Wiadomość potwierdzająca skopiuj bazy danych](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-step-2.png){.thumbnail}
>>
>> Jeśli nie chcesz nadpisywać wybranej docelowej bazy danych, kliknij przycisk `Wstecz`{.action}, aby zmienić wybór lub kliknij przycisk `Anuluj`{.action}, aby anulować wszystkie operacje. W przeciwnym razie kliknij przycisk `Zatwierdź`{.action}, aby potwierdzić duplikowanie.
>>
> **Krok 6**
>>
>> Kopiowanie bazy danych może potrwać kilka minut. W zakładce `Zadania w toku`{.action} pojawi się nowy wiersz odpowiadający kopii ze statusem "Zaplanowany". Po jej zakończeniu wiersz znika.
>>
>> ![Zadania w trakcie](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/copy-db-tool-ongoing-tasks.png){.thumbnail}

///
<!-- CP-STEPS-END:copy-from-wcdb -->

### Konfiguracja strony WWW z nową bazą danych

Jeśli chcesz użyć nowej bazy danych, po skopiowaniu źródłowej bazy danych wykonaj ostatnią czynność.

W zakładce `Zadania w toku`{.action} upewnij się, że kopia została ukończona (wiersz odpowiadający kopii zniknął).

Aby połączyć nową bazę danych ze stroną WWW, edytuj plik konfiguracyjny **C**ontent **M**anagement **S**ystem (**CMS**) i wprowadź informacje dotyczące połączenia z nową bazą danych.

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

**Kliknij na odpowiednią sytuację, aby wyświetlić zawartość.**

/// details | Baza danych nie wyświetla się na liście

To powiadomienie oznacza, że posiadasz tylko jedną aktywną bazę danych. Do skopiowania źródłowej bazy danych potrzebna jest również aktywna docelowa baza danych. W tym celu możesz:

- Skonfigurować nową bazę danych dostępną na Twoim hostingu.
- Skonfigurować nową bazę danych na swoim serwerze [Web Cloud Databases](/links/web/databases).
- Zamówić ofertę [start SQL](/links/web/hosting-options-startsql) lub serwer baz danych [Web Cloud Databases](/links/web/databases).

///

/// details | Trwa już wykonywanie operacji

Ten komunikat oznacza, że dla Twojej bazy danych trwa już wykonywanie zadania. Przejdź do karty `Zadania w toku`{.action} i sprawdź, czy wykonujesz już operację. Jeśli tak jest, poczekaj na jej zakończenie, aby w razie potrzeby przesłać kopię bazy danych ponownie.

///

/// details | Baza danych docelowa nie zawiera wystarczającej ilości miejsca

Docelowa baza danych nie zawiera wystarczającej ilości miejsca. Dostępne są dwa rozwiązania:

- Zamów nową bazę danych [start SQL](/links/web/hosting-options-startsql) dysponującą większą przestrzenią.
- Jeśli posiadasz serwer [Web Cloud Databases](/links/web/databases), zmień ofertę Web Cloud Databases dysponującą większą przestrzenią dyskową.

///

/// details | Źródłowa i docelowa baza danych są niezgodne

To powiadomienie oznacza, że **D**ata**b**ase **M**anagement **S**ystem (**DBMS**) w źródłowej bazie danych nie jest identyczny z systemem DBMS docelowej bazy danych.

Ten błąd może się pojawić na przykład podczas używania MySQL dla źródłowej bazy danych i PostgreSQL dla docelowej bazy danych.

///

## Sprawdź również

[Zaloguj się do Panelu klienta OVHcloud](/pages/account_and_service_management/account_information/ovhcloud-account-login)

[Zapisz i wyeksportuj bazę danych na serwer baz danych](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Przywróć i zaimportuj bazę danych na serwer baz danych](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server/)

[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export)

[Importuj kopię zapasową do bazy danych hostingu WWW](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
