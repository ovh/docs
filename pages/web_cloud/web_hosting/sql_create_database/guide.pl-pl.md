---
title: "Tworzenie bazy danych na hostingu"
excerpt: "Dowiedz się, jak utworzyć bazę danych na hostingu OVHcloud"
updated: 2023-11-03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Baza danych (bazy danych) służy do przechowywania elementów dynamicznych (danych logowania, danych użytkowników, danych wyświetlanych, danych niezbędnych do prawidłowego działania Twojej strony WWW, etc.). Bazy danych są wykorzystywane w większości nowoczesnych systemów zarządzania treścią (CMS), takich jak *WordPress*, *Joomla!*, *Drupal* lub *PrestaShop*.

**Dowiedz się, jak utworzyć bazę danych na hostingu OVHcloud**

## Wymagania początkowe

- Posiadanie hostingu [OVHcloud](https://www.ovhcloud.com/pl/web-hosting/) zawierającego co najmniej jedną bazę danych.
- Posiadanie bazy danych dostępnej w opcji "create", spośród baz danych zawartych w Twojej usłudze hostingu.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) z [niezbędnymi uprawnieniami](/pages/account_and_service_management/account_information/managing_contacts) w celu zarządzania hostingiem.

## W praktyce

### Etap 1 - Dostęp do karty zarządzania bazami danych na hostingu WWW

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij pozycję `Hosting`{.action}, wybierz ofertę hostingu, na której chcesz utworzyć bazę danych, następnie kliknij zakładkę `Bazy danych`{.action}.

Tabela w tej sekcji zawiera wszystkie bazy danych utworzone w ramach Twojego hostingu.

![databasecreation](images/database-creation-step1.png){.thumbnail}

### Etap 2 - Tworzenie bazy danych

Istnieją dwa sposoby tworzenia nowej bazy danych:

- **Jeśli jeszcze nie utworzyłeś bazy danych** : kliknij przycisk `Tworzenie bazy danych`{.action}.

- **Jeśli już utworzyłeś bazę danych** : kliknij przycisk `Operacje`{.action}, a następnie `Tworzenie bazy danych`{.action}.

W wyświetlonym oknie wybierz następujące informacje:

![database-creation-step1](images/database-creation-1.png){.thumbnail}

|Informacje|Opis|  
|---|---| 
|**Wybierz typ bazy danych**|Wybierz rozmiar bazy danych. Rozmiar ten odnosi się do przestrzeni, na którą przeznaczona jest Twoja baza danych.|
|**Wybierz silnik dla bazy danych**|Wybierz silnik, którego ma używać baza danych. Bazy danych zawarte w [usłudze hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/) są dostępne tylko w silniku MySQL.|
|**Wybierz wersję bazy danych, którą chcesz dodać**|Wybierz wersję używaną przez silnik bazy danych. Upewnij się, że Twoja strona WWW jest zgodna z wybraną wersją.|

Następnie kliknij przycisk `Dalej`{.action}.

Pojawi się nowe okno:

![database-creation-step2](images/database-creation-2.png){.thumbnail}

|Informacje|Opis|
|---|---| 
|**Użytkownik**|Wpisz nazwę użytkownika, która zostanie skojarzona z Twoją bazą danych (maksymalnie 6 znaków poza już wprowadzonym prefiksem użytkownika).|
|**Hasło**|Wprowadź hasło dla tego użytkownika, spełniając podane poniżej *kryteria*.|
|**Wpisz ponownie hasło**|Wpisz ponownie hasło dla tego użytkownika.|

> [!primary]
>
> Ze względów bezpieczeństwa podczas tworzenia hasła postępuj zgodnie z wymaganiami.
>
> Zalecamy również:
>
> - zdefiniowanie innego hasła dla każdej usługi;
> - utwórz hasło, które nie zawiera żadnych danych osobowych (nazwisko, imię, data urodzenia, etc.);
> - regularnie odnawiaj hasło;
> - nie zachowuj zapisanych logów hasła i nie wysyłaj ich do innych osób (w tym za pośrednictwem Twojego konta e-mail);
> - nie zachowywać haseł w przeglądarce internetowej, nawet jeśli zostanie wyświetlona taka propozycja.
>

> [!warning]
>
> Pamiętaj, że po zmianie hasła do bazy danych wszystkie aplikacje uzyskujące dostęp do tej bazy danych muszą zostać odpowiednio zaktualizowane.
>

Uzupełnij wymagane informacje i kliknij na `Dalej`{.action}.

![database-creation-step3](images/database-creation-3.png){.thumbnail}

Sprawdź, czy wszystkie wyświetlane informacje są poprawne. Jeśli tak, kliknij przycisk `Zatwierdź`{.action}, aby uruchomić proces tworzenia bazy danych.

> [!primary]
>
> Po kliknięciu przycisku `Zatwierdź`{.action} utworzenie bazy danych może potrwać do **15 minut**. Odśwież stronę internetową [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), jeśli baza danych nie wyświetla się automatycznie w tabeli zawierającej listę Twoich baz danych.
>

Powtórz ten proces tyle razy, ile chcesz, aby utworzyć kilka baz danych (w ramach limitu baz danych dostępnych w Twojej ofercie).

### Etap 3 - Zarządzanie bazą danych <a name="step3"></a>

> [!warning]
>
> Ten przewodnik nie zastępuje pomocy technicznej dewelopera. W przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/) lub skontaktuj się z producentem oprogramowania. OVHcloud nie będzie w stanie udzielić wsparcia w tym zakresie. Więcej informacji znajdziesz w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

Teraz możesz korzystać z bazy danych. W tym celu potrzebujesz danych do logowania:

- *nazwa użytkownika* i *hasło*, które ustawiłeś,
- *nazwa bazy danych*, którą wskazałeś,
- *adres serwera*.

Informacje te są niezbędne, aby Twoja strona WWW mogła połączyć się z bazą danych.

W razie potrzeby, aby pobrać dane do logowania, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij przycisk `Hosting`{.action}, wybierz ofertę hostingu, dla której chcesz pobrać dane do połączenia z bazą danych, następnie kliknij zakładkę `Bazy danych`{.action}.

Wszystkie informacje dotyczące połączenia z bazą danych odnajdziesz w tabeli, która się wyświetli. Powyższe nie dotyczy *hasła* ze względów bezpieczeństwa.

> [!warning]
>
> Jeśli nie pamiętasz hasła do bazy danych, zapoznaj się z naszym przewodnikiem "[Zmiana hasła do bazy danych](/pages/web_cloud/web_hosting/sql_change_password)".
>

W zależności od używanego oprogramowania może być konieczne ręczne skonfigurowanie połączenia albo wystarczy interfejs wygenerowany przez interfejs konfiguracyjny strony WWW (backend). Ponieważ procedura ta dotyczy konfiguracji Twojej strony WWW, a nie Twojego hostingu OVHcloud, zalecamy skorzystanie z zasobów dostępnych online lub skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/).

#### Dostęp do interfejsu phpMyAdmin

OVHcloud udostępnia narzędzie online do zarządzania bazami danych "phpMyAdmin". Aby odnaleźć link dostępu do tej aplikacji, zaloguj się do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij przycisk `Hosting`{.action}, wybierz ofertę hostingu, dla której chcesz pobrać dane do połączenia z bazą danych, następnie kliknij zakładkę `Bazy danych`{.action}. W tabeli, która się wyświetli kliknij przycisk `...`{.action} po prawej stronie odpowiedniej bazy danych, a następnie z menu rozwijanego kliknij `Dostęp do phpMyAdmin`{.action}.

![phpMyAdmin Go Login](images/pma-interface-login.png){.thumbnail}

Wprowadź dane dostępowe do Twojej bazy danych, a następnie kliknij `Login`{.action}.

W razie potrzeby skorzystaj z [etapu 3](#step3) niniejszego przewodnika, aby uzyskać informacje na temat logowania do bazy danych.

#### Korzystanie z kopii zapasowych baz danych

W przypadku każdej bazy danych w ramach hostingu WWW codziennie będą automatycznie tworzone migawki (maksymalnie do 32 migawek). To oznacza, że można szybko przywrócić wcześniejszą wersję bazy danych z poziomu Panelu klienta OVHcloud.

Aby sprawdzić, czy są dostępne migawki oraz ich datę i godzinę utworzenia, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i przejdź do sekcji `Web Cloud`{.action}. W kolumnie po lewej stronie kliknij pozycję `Hosting`{.action}, wybierz ofertę hostingu, dla której chcesz sprawdzić snapshoty dostępne dla Twojej bazy danych, następnie kliknij zakładkę `Bazy danych`{.action}. W tabeli, która się wyświetli kliknij symbol obok zielonego kółka. Z tego miejsca można też pobrać kopię zapasową bazy danych. Więcej informacji na ten temat znajdziesz w naszym przewodniku "[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export)".

#### Zrozum typowe problemy

**Zbyt dużo połączeń**

Bazy danych w ramach hostingu są ograniczone do 30 jednoczesnych połączeń (zmienna systemowa *max_connections*). Aby zapobiec takim błędom, należy zoptymalizować żądania SQL. Jeżeli problemy nadal się utrzymują, należy rozważyć alternatywne środki. Możesz na przykład migrować Twoją bazę danych do bazy danych [Web Cloud Databases](https://www.ovhcloud.com/pl/web-cloud/databases/) lub przeprowadzić [aktualizację Twojej oferty hostingu](https://www.ovhcloud.com/pl/web-hosting/uc-best-web-hosting/).

**Błędy połączenia "nie można znaleźć"**

Zwykle pojawia się, gdy w pliku połączenia z bazą danych, na stronie WWW bazy danych nie jest używana rzeczywista nazwa bazy danych.

Najlepszą praktyką jest zawsze używanie rzeczywistej nazwy bazy danych dla skryptów i plików konfiguracyjnych zamiast adresów IP lub _localhost_.

**Przekroczenie limitu rozmiaru bazy danych**

Jeśli baza danych w ramach hostingu WWW przekroczy zalecane miejsce w przestrzeni dyskowej, zostanie automatycznie przełączona na tryb "tylko do odczytu" / "tylko wybór". Administrator otrzyma powiadomienie e-mail.

Po optymalizacji bazy danych (oczyszczeniu) należy ponownie obliczyć limit w Panelu klienta OVHcloud, aby ją odblokować. Więcej informacji na ten temat znajdziesz w naszym przewodniku "[Co zrobić w przypadku przekroczenia rozmiaru przestrzeni dyskowej bazy danych?](/pages/web_cloud/web_hosting/sql_overquota_database)"

## Sprawdź również <a name="go-further"></a>

[Zmień hasło do bazy danych hostingu WWW](/pages/web_cloud/web_hosting/sql_change_password)

[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export)

[Importuj kopię zapasową do bazy danych hostingu WWW](/pages/web_cloud/web_hosting/sql_importing_mysql_database)

[Optymalizacja wydajności witryny sieci Web](/pages/web_cloud/web_hosting/optimise_your_website_performance)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).
 
Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.