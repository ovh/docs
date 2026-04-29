---
title: "Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia"
excerpt: "Dowiedz się, jak za pomocą 1 kliknięcia zdiagnozować najczęstsze przypadki błędów związane z tworzeniem modułów"
updated: 2026-05-04
---

<style>
 pre {
   background-color: #300A24
 }
 details > summary {
   color: var(--color-brand-blue-600);
   font-weight: 700;
 }
</style>

## Wprowadzenie

Moduły "[moduły za 1 kliknięciem](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" umożliwiają szybkie utworzenie strony WWW. Technologia ta pozwala na stworzenie strony internetowej przy użyciu najbardziej znanych **C**ontent **M**anagement **S**ystem (**CMS**), takich jak *WordPress*, *Joomla!*, *Drupal* lub *PrestaShop*.
Jeśli konfiguracja modułu nie zostanie przeprowadzona prawidłowo, instalacja "modułu za 1 kliknięciem" może się nie powieść i/lub spowodować błędy w działaniu.

**Dowiedz się, jak zdiagnozować najczęstsze przypadki błędów podczas tworzenia "modułu za 1 kliknięciem"**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) i/lub skontaktowanie się z dostawcą usługi. Niestety firma OVHcloud nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)" tego przewodnika.

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu](/links/web/hosting).
- Użycie funkcji "[Moduł za 1 kliknięciem](/pages/web_cloud/web_hosting/cms_install_1_click_modules)" w celu utworzenia nowej strony WWW.

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

> [!primary]
>
> Tutaj znajdziesz najczęściej występujące błędy. Jeśli Twoja sytuacja różni się od przedstawionej, sprawdź nasz [FAQ dotyczący hostingu WWW](/pages/web_cloud/web_hosting/faq-web_hosting).

**Kliknij na 15 poniższych tytułów, aby wyświetlić zawartość.**

/// details | Twoja domena nie jest proponowana podczas tworzenia "modułu za 1 kliknięciem"

<!-- CP-STEPS-START:check-module-status -->
![domainenotproposed](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/domain-unavailable.png){.thumbnail}

Kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy strony internetowej, aby wyświetlić przypisane domeny i poddomeny.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wykonaj poniższe sprawdzenia:
>>
>> |Scenariusz|Rozwiązanie|
>> |---|---|
>> |Domena lub poddomena powiązana ze stroną internetową, którą chcesz utworzyć, nie pojawia się w tabeli znajdującej się na karcie `Moje strony`{.action}.|Dodaj nazwę domeny, postępując zgodnie z [tymi instrukcjami](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).|
>> |Nazwa domeny została odłączona od strony internetowej bez Twojej interwencji.|Jeśli Twoja nazwa domeny lub jej [strefa DNS](/pages/web_cloud/domains/dns_zone_edit) nie jest zarządzana z poziomu Twojego konta OVHcloud, dodaj nazwę domeny z poziomu karty `Moje strony`{.action}, postępując zgodnie z [tym przewodnikiem](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).|
<!-- CP-STEPS-END:check-module-status -->

///

/// details | "Wystąpił błąd podczas pobierania informacji (You need at least one free database)"

<!-- CP-STEPS-START:change-root-folder -->
![No databases available](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-no-db-available.png){.thumbnail}

Ten komunikat pojawi się, gdy rozpoczniesz instalację "modułu za 1 kliknięciem", kiedy nie będziesz mógł lub przestanie mieć możliwości utworzenia nowej bazy danych przypisanej do Twojego hostingu.

#### Rozwiązanie nr 1: zamów nową bazę danych

Jeśli nie posiadasz już baz danych zawartych w Twoim hostingu, możesz zamówić nową [bazę danych Start SQL](/links/web/hosting-options-startsql), łącząc ją z Twoim aktualnym hostingiem. Następnie będziesz mógł wznowić instalację "modułu za pomocą 1 kliknięcia". Jeśli potrzebujesz więcej przestrzeni dyskowej (więcej niż 1 GB), zalecamy skorzystanie z naszej usługi [Web Cloud Databases](/links/web/databases).

Kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}, następnie `Działania`{.action}, aby zamówić dodatkową bazę danych:
>>
>> ![order_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/order-a-db.png){.thumbnail}
>>
<!-- CP-STEPS-END:change-root-folder -->

Po jego zakończeniu będziesz mógł zainstalować nowy "moduł za pomocą 1 kliknięcia".

> [!primary]
>
> Przypomnę, że zachęcamy do wcześniejszego zapoznania się z naszą ofertą baz danych [start SQL](/links/web/hosting-options-startsql) oraz ofertą [Web Cloud Databases](/links/web/databases).
>

#### Rozwiązanie nr 2: zmień ofertę hostingową

> [!primary]
>
> Zapoznaj się z porównaniem naszych ofert [pakiety hostingowe](/links/web/hosting).
>

<!-- CP-STEPS-START:find-admin-credentials -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W sekcji `Abonament` - `Oferta` kliknij przycisk `...`{.action} i następnie `Zmień ofertę`{.action}:
>>
>> ![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}
>>
<!-- CP-STEPS-END:find-admin-credentials -->

Oferty [Pro](/links/web/hosting-professional-offer) i [Performance](/links/web/hosting-performance-offer) pozwalają na utworzenie do trzech dodatkowych "modułów za 1 kliknięciem" z niezależną bazą danych dla każdego z nich. Oferty **Performance** pozwolą Ci również na bezpłatną aktywację serwera [Web Cloud Databases](/links/web/databases).

Po jego zakończeniu będziesz mógł zainstalować nowy "moduł za pomocą 1 kliknięcia".

#### Rozwiązanie nr 3: usuń nieużywaną bazę danych <a name="delete-the-database"></a>

> [!warning]
>
> Operacja usunięcia bazy danych jest definitywna. Wiąże się to również z usunięciem kopii zapasowych odpowiedniej bazy danych. W przypadku wątpliwości skontaktuj się z webmasterem lub jednym z naszych [partnerów](/links/partner).
>

<!-- CP-STEPS-START:diag-delete-database -->
Aby usunąć bazę danych, kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}. W tabeli, która się wyświetli kliknij przycisk `...`{.action} po prawej stronie wiersza odpowiadającego bazie danych, którą chcesz usunąć, a następnie kliknij `Usuń bazę danych`{.action}:
>>
>> ![delete_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-deletion.png){.thumbnail}
>>
<!-- CP-STEPS-END:diag-delete-database -->

Po jego zakończeniu będziesz mógł zainstalować nowy "moduł za pomocą 1 kliknięcia".

#### Rozwiązanie nr 4: zainstaluj "moduł za 1 kliknięciem" na bazie danych, która jest już używana

Aby zainstalować "moduł za 1 kliknięciem" na istniejącej bazie danych, należy użyć funkcji instalacji w [trybie zaawansowanym](/pages/web_cloud/web_hosting/cms_install_1_click_modules) nowego "modułu za pomocą 1 kliknięcia".

Aby odnaleźć dane do logowania do bazy danych, zapoznaj się z naszym przewodnikiem [Instalacja strony WWW za pomocą modułu 1 kliknięcia (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Jeśli posiadasz serwer [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), możesz utworzyć bazę danych o wybranym rozmiarze, w ramach przydzielonego miejsca na dysku.

Po jego zakończeniu będziesz mógł zainstalować nowy "moduł za pomocą 1 kliknięcia".

> [!primary]
>
> W takiej sytuacji można wykonać kopię zapasową danych pojedynczej strony WWW za pomocą [skryptu PHP lub komendy SSH](/pages/web_cloud/web_hosting/sql_database_export).
>
> W przypadku pytań dotyczących wymaganych czynności skontaktuj się z [społecznością OVHcloud](/links/community) lub jednym z [partnerów](/links/partner).<br>
> Nie będziemy w stanie udzielić Ci pomocy w tej sprawie.
>

///

/// details | Twój "moduł za 1 kliknięciem" wyświetla się na adresie www typu "xxxxx.cluster0xx.hosting.ovh.net"

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Po wykonaniu wszystkich niezbędnych kopii zapasowych [usuń moduł za pomocą 1 kliknięcia](#delete-the-module), a następnie jego [bazę danych](#delete-the-database). Następnie rozpocznij instalację "modułu za 1 kliknięciem" dla wybranej domeny.

///

/// details | "Katalog instalacyjny nie jest pusty"

![folder_not_empty](/pages/assets/screens/email-sending-to-customer/webhosting/folder-not-empty.png){.thumbnail}

Po uruchomieniu tworzenia "modułu za pomocą 1 kliknięcia" otrzymałeś wiadomość e-mail z informacją, że katalog instalacyjny "modułu za pomocą 1 kliknięcia" nie jest pusty.

To wiadomość oznacza, że **katalog główny** strony internetowej, do której jest przypisana Twoja nazwa domeny, zawiera już jeden lub więcej plików lub katalogów.

<!-- CP-STEPS-START:change-domain-root-folder -->
Aby połączyć swoją nazwę domeny ze stroną internetową (katalog główny), kliknij poniższe zakładki, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na stronie, która się wyświetli kliknij zakładkę `Moje strony`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W tabeli, która się pojawi, kliknij przycisk `>`{.action} po lewej stronie nazwy strony internetowej, aby wyświetlić przypisane domeny i poddomeny.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Następnie kliknij przycisk `⁝`{.action} po prawej stronie nazwy domeny lub poddomeny, a następnie kliknij `Odłącz domenę`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> Po odłączeniu nazwy domeny od strony internetowej, zapoznaj się z naszym przewodnikiem "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
<!-- CP-STEPS-END:change-domain-root-folder -->

Możesz również zalogować się do Twojego hostingu za pomocą protokołu [FTP](/pages/web_cloud/web_hosting/ftp_connection), a następnie usunąć zawartość folderu. Operacja ta została wykonana lokalnie lub po usunięciu pliku, poprzez przeniesienie całej jego zawartości do innego katalogu FTP.

///

/// details | "Either no configuration (ovhConfig or runtime), or the current configuration is not valid (please, double check the module's requirement) (as a reminder, the global configuration is used for module).".

Wyświetli się komunikat, że plik ".ovhconfig" nie istnieje lub jest nieprawidłowy. Wystarczy, że zainstalujesz "moduł za 1 kliknięciem". Plik ten zawiera wersję PHP oraz środowisko wykonawcze zastosowane do Twojego hostingu.

Zaleca się korzystanie z najnowszej możliwej wersji PHP. **Przed** zmianą konfiguracji pliku ".ovhconfig", jeśli posiadasz inne strony WWW na Twoim hostingu, upewnij się, że są one kompatybilne z nową wersją PHP i/lub nowym środowiskiem wykonawczym, które zastosujesz na Twoim hostingu.

Aby sprawdzić tę konfigurację, zapoznaj się z naszym przewodnikiem "[Zmień konfigurację hostingu WWW](/pages/web_cloud/web_hosting/configure_your_web_hosting)".

///

/// details | "Wystąpił błąd podczas pobierania informacji (There is not enough space on your hosting (you need at least xxx MB)"

<!-- CP-STEPS-START:check-database-credentials -->
![not_enough_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-not-enough-ftp-space.png){.thumbnail}

Ten komunikat oznacza, że [przestrzeń dyskowa FTP](/pages/web_cloud/web_hosting/ftp_connection) na Twoim hostingu zawiera zbyt dużą ilość danych. 

#### Rozwiązanie nr 1: usuń dane, aby zwolnić przestrzeń FTP

W takim przypadku usuń (lub przenieś) dane, aby zainstalować nowy "[moduł za 1 kliknięciem](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

W takiej sytuacji [zaloguj się przez FTP](/pages/web_cloud/web_hosting/ftp_connection) do Twojego hostingu, [wykonaj lokalnie kopię zapasową](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) danych, a następnie usuń pliki, które nie są niezbędne do działania Twojej strony WWW.

> [!primary]
>
> Jeśli masz pytania dotyczące usuwania danych, aby zmniejszyć ilość danych przechowywanych na Twoim hostingu, skontaktuj się z [społecznością użytkowników](/links/community) lub z [partnerami OVHcloud](/links/partner).<br>
> Pomoc OVHcloud nie jest upoważniona do udzielania wsparcia w tym zakresie.
>

#### Rozwiązanie nr 2: zmień ofertę hostingową

> [!primary]
>
> Zapoznaj się z porównaniem naszych ofert [pakiety hostingowe](/links/web/hosting).
>

Kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W sekcji `Abonament` - `Usługa` kliknij przycisk `...`{.action} i następnie `Zmień ofertę`{.action}:
>>
>> ![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}
>>
<!-- CP-STEPS-END:check-database-credentials -->

Oferty [Pro](/links/web/hosting-professional-offer) i [Performance](/links/web/hosting-performance-offer) pozwalają na utworzenie do trzech dodatkowych "modułów za 1 kliknięciem" z niezależną bazą danych dla każdego z nich. Oferty **Performance** pozwolą Ci również na bezpłatną aktywację serwera [Web Cloud Databases](/links/web/databases).

///

/// details | "Nie można połączyć się z bazą danych" <a name="delete-the-module"></a>

![wrong_id_database](/pages/assets/screens/email-sending-to-customer/databases/db-connection-failed.png){.thumbnail}

Po uruchomieniu instalacji "modułu za pomocą 1 kliknięcia" w trybie zaawansowanym otrzymałeś wiadomość e-mail z informacją, że Twój "moduł za pomocą 1 kliknięcia" nie może połączyć się z wskazaną bazą danych.

W związku z tym sprawdź dane dostępowe do bazy danych. Aby odnaleźć moduły, zapoznaj się z [przewodnikiem](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

<!-- CP-STEPS-START:diag-delete-module -->
Usuń następnie "moduł za 1 kliknięciem". W tym celu kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Moduły CMS`{.action}. W tabeli, która się wyświetli kliknij przycisk `...`{.action} po prawej stronie wiersza odpowiadającego nazwie Twojej domeny, następnie kliknij `Usuń moduł`{.action}.
>>
>> ![delete_a_module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/delete-a-module-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > **Usunięcie elementów z bazy danych może spowodować przerwę w działaniu witryny.**
>> >
>> > Upewnij się, że usuwasz tylko uruchomioną instalację. W tym celu sprawdź, czy jest to odpowiedni katalog w kolumnie `Path` (ścieżka).
>> >
>>
<!-- CP-STEPS-END:diag-delete-module -->

Następnie rozpocznij od nowa instalację "modułu za pomocą 1 kliknięcia".

///

/// details | "You have insufficient rights on this database.".

![insufficient_rights](/pages/assets/screens/email-sending-to-customer/databases/db-insufficient-rights.png){.thumbnail}

Ten komunikat pojawia się wyłącznie podczas instalacji "modułu za pomocą 1 kliknięcia" w **trybie zaawansowanym**. Nie można już edytować bazy danych, ponieważ ilość danych w bazie przekracza dozwolony limit. W takim przypadku baza danych zostanie zablokowana w trybie tylko do odczytu.

W takiej sytuacji zainstaluj moduł za pomocą 1 kliknięcia i przejdź do [trybu prostego](/pages/web_cloud/web_hosting/cms_install_1_click_modules) lub wybierz inną bazę danych podczas instalacji w trybie zaawansowanym. W razie potrzeby zamów [ofertę baz danych](/links/web/hosting-options-startsql).

Jeśli nie dysponujesz innymi bazami danych i nie chcesz zamówić pakietu dodatkowego, [importuj lokalnie kopię bazy](/pages/web_cloud/web_hosting/sql_database_export) i usuń zbędne dane.

> [!warning]
>
> **Usunięcie elementów z bazy danych może spowodować przerwę w działaniu witryny.**
>
> W przypadku dodatkowych pytań skontaktuj się z [społecznością użytkowników](/links/community) lub z [partnerami OVHcloud](/links/partner).<br>
> Nie będziemy w stanie udzielić Ci pomocy w tej sprawie.
>

///

/// details | "Can't connect to database 'xxxxxxxx' at 'xxxxxx-xxx.eu.clouddb.ovh.net'. The error is: Access denied for user 'xxxx'@'xxxxxxxx' (using password: YES)"

![cant_connect](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-access-denied.png){.thumbnail}

Rozpoczęto instalację "modułu za 1 kliknięciem" w [trybie zaawansowanym](/pages/web_cloud/web_hosting/cms_install_1_click_modules) w bazie danych znajdującej się na serwerze [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Ten komunikat o błędzie został wysłany na e-mail. Oznacza to, że użytkownik wskazany podczas instalacji nie ma wystarczających uprawnień do bazy danych lub że podane dane logowania są nieprawidłowe.

W tej sytuacji najpierw zmodyfikuj odpowiednie uprawnienia [użytkownika](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server), aby użytkownik dysponował uprawnieniami **Administrator** lub **Odczyt/zapis** dla bazy danych.

Sprawdź również dane logowania, logując się [bezpośrednio](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) do Twojego serwera baz danych, a następnie uruchom ponownie instalację "modułu za pomocą 1 kliknięcia".

///

/// details | "Can't connect to database 'xxxxxxxx' at 'xxxxxxxx.mysql.db'. The error is: Unknown MySQL server host 'xxxxxxxx.mysql.db'"

![cant_connect_server](/pages/assets/screens/email-sending-to-customer/databases/db-cant-connect-server.png){.thumbnail}

Rozpoczęto instalację "modułu za 1 kliknięciem" w [trybie zaawansowanym](/pages/web_cloud/web_hosting/cms_install_1_click_modules) w bazie danych znajdującej się na serwerze [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb). Ten komunikat o błędzie został wysłany na e-mail. Oznacza to, że podana nazwa serwera baz danych jest nieprawidłowa.

<!-- CP-STEPS-START:find-db-server-name -->
Aby odnaleźć nazwę Twojego serwera baz danych, kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiedni serwer baz danych.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Nazwa serwera, której chcesz użyć jest wyświetlana w ramce `Informacje na temat połączenia`, podsekcja `SQL`, pod słowem `Nazwa hosta`.
>>
<!-- CP-STEPS-END:find-db-server-name -->

///

/// details | Twoja stara strona WWW nadal się wyświetla

<!-- CP-STEPS-START:verify-db-connection -->
Kliknij poniższe zakładki, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> W zakładce `Moduły CMS`{.action}, kliknij na link Twojej strony WWW w kolumnie `Ścieżka`. Otworzy się nowa zakładka z Twoją stroną WWW. Nazwa domeny przypisanej do Twojej instalacji wyświetla się w adresie Twojej przeglądarki internetowej. Przykładowo, jeśli Twoja domena nosi nazwę "domena.tld", może pojawić się inna domena lub standardowa strona OVHcloud.
>>
<!-- CP-STEPS-END:verify-db-connection -->

Taka nieprawidłowość może mieć kilka przyczyn:

- Upewnij się, że odwiedzana przez Ciebie nazwa domeny ("domain.tld") jest nazwą domeny, dla której zainstalowałeś "moduł za 1 kliknięciem".

- Jeśli ostatnio nastąpiła zmiana w [aktywnej strefie DNS](/pages/web_cloud/domains/dns_zone_edit)/[serwery DNS](/pages/web_cloud/domains/dns_server_edit) Twojej domeny lub transfer [domeny](/pages/web_cloud/domains/transfer_incoming_generic_domain). Poczekaj, aż operacje zostaną zakończone (4-24 godziny na zmianę w strefie DNS i 24-48 godzin na zmianę serwerów DNS). Pamiętaj, aby również zrestartować swoje urządzenia (PC, smartphone, box, itp.) i wyczyścić pamięć podręczną przeglądarki internetowej.

- Twoja domena jest zawsze powiązana z Twoim starym hostingiem. W tym przypadku zmień [strefę DNS active](/pages/web_cloud/domains/dns_zone_edit) powiązaną z Twoją domeną lub jej [serwery DNS](/pages/web_cloud/domains/dns_server_edit). Jeśli aktywna strefa DNS Twojej domeny nie jest zarządzana w OVHcloud, skontaktuj się z dostawcą DNS w tej sprawie.

///

/// details | Hasło "Administrator" dostępu do "interfejsu administracyjnego" modułu za pomocą 1 kliknięcia nie działa <a name="adminpassword"></a>

W przypadku odrzucenia aktualnego hasła dostępu do interfejsu administracyjnego użytkownika **C**ontent **M**anagement **S**ystem (**CMS**), należy zapoznać się z sekcją "Zmiana hasła do modułu" w dokumentacji dotyczącej zarządzania [modułem za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

///

/// details | Prefiks tabel w bazie danych jest już używany w bazie danych

Ten błąd dotyczy tylko instalacji "modułów za 1 kliknięciem" w *trybie zaawansowanym*.

Informuje on, że przy próbie instalacji "modułu za 1 kliknięciem" wprowadziłeś prefiks tabel już używany w bazie danych wybranej wcześniej do instalacji "modułu za 1 kliknięciem". Instalacja zostaje anulowana. 

Uruchom ponownie instalację, używając innego prefiksu tabel lub bazy danych, aby naprawić sytuację.

///

/// details | Serwery DNS domeny nie wskazują na hosting WWW OVHcloud

Ten błąd informuje, że wpisy DNS domeny używanej przez Twoją stronę WWW nie wskazują na hosting WWW OVHcloud. Nie można zainstalować "modułu za 1 kliknięciem" dla domeny, która nie wskazuje na hosting OVHcloud.
Aby rozwiązać ten problem, edytuj strefę DNS. Aby dowiedzieć się więcej o adresach IP, które należy podać, zapoznaj się z przewodnikiem [Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_cloud_databases/configure-database-server). Następnie [Edytuj strefę DNS](/pages/web_cloud/domains/dns_zone_edit).
Jeśli Twoja strefa DNS nie jest hostowana w OVHcloud, skontaktuj się z dostawcą strefy DNS, aby wprowadził niezbędne zmiany.

Po zakończeniu rozpocznij ponownie instalację nowego "modułu za pomocą 1 kliknięcia".

///

/// details | Twoja baza danych musi być w wersji "X", a ta jest aktualnie w wersji "Y"

E-mail ten zawiera informację, że wersja bazy danych jest zbyt stara, aby zainstalować "moduł za 1 kliknięciem". 

W tym samym e-mailu znajdziesz wersję, w której powinna się znajdować Twoja baza danych. Masz do wyboru trzy opcje:

- Aktualizacja **D**ata**B**ase **M**anagement **S**ystem (DBMS, np. MySQL, PostgreSQL, MariaDB, etc.) w nowszej wersji.
- Instalacja nowej bazy danych przypisanej do Twojego hostingu. Upewniając się przy tym, że SGDB oraz wersja są kompatybilne z wybranym "modułem za 1 kliknięciem".
- Jeśli posiadasz serwer [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb), sprawdź, czy Twój serwer używa poprawnego systemu zarządzania bazami danych oraz poprawnej wersji, a następnie utwórz wybraną bazę danych.

Po zakończeniu rozpocznij ponownie instalację nowego "modułu za pomocą 1 kliknięcia".

///

## Sprawdź również <a name="go-further"></a>

[Instalacja strony za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Powtarzające się problemy z programem FTP](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems)
 
W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).
 
Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).
 
Dołącz do [grona naszych użytkowników](/links/community).
