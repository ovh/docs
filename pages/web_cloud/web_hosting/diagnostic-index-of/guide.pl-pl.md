---
title: Co zrobić w przypadku strony "Index of"?
excerpt: Dowiedz się, jak przywrócić Twoją stronę WWW online, gdy wyświetla ona stronę "Index of"
updated: 2026-02-01
---

## Wprowadzenie 

Pojawi się strona **"Index of"** w przynajmniej jednym z następujących przypadków:

- Konfiguracja [Twojego nazwy domeny z Twoją stroną internetową](/pages/web_cloud/web_hosting/multisites_configure_multisite) nie jest poprawnie skonfigurowana do katalogu docelowego.
- Folder docelowy, do którego Twoja nazwa domeny nie zawiera plików **"index.html"** lub **"index.php"**

![indeks](/pages/assets/screens/other/browsers/errors/index-of.png){.thumbnail}

**Dowiedz się, jak naprawić wyświetlanie strony "Index of".**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](/links/partner) i lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) ten przewodnik.

## Wymagania początkowe

- Posiadanie [domeny](/links/web/domains)
- Posiadanie [hostingu](/links/web/hosting)
- Zalogowanie do [Panelu klienta OVHcloud](/links/manager)

## W praktyce

### Zrozumieć pochodzenie strony "Index of"

Twój domena została zadeklarowana, aby uzyskać dostęp do katalogu docelowego ("`Katalog główny`") na serwerze [FTP](/pages/web_cloud/web_hosting/ftp_connection) Twojego hostingu współdzielonego. W tym celu przejdź do karty [Moje strony](/pages/web_cloud/web_hosting/multisites_configure_multisite) w swoim hostingu internetowym, który znajduje się w Twoim [Panelu klienta OVHcloud](/links/manager).

Strona **Index of** wskazuje, że dany katalog docelowy nie zawiera pliku **index.php** lub **index.html**. Plik ten stanowi "*punkt wejścia*" Twojej strony WWW. Nazwa tego pliku jest znormalizowana.

Aby wyświetlić swoją stronę internetową, musisz więc, z karty `Moje strony`{.action} swojego hostingu internetowego, połączyć swoją domenę ze stroną internetową, której `Katalog główny` zawiera plik **index.php** lub **index.html**.

> [!primary]
>
> Aby tymczasowo powiązać domenę z `Katalogiem głównym` niezawierającym pliku **index.php** lub **index.html**, możesz zablokować wyświetlanie listy katalogów na swojej stronie internetowej zgodnie z tym [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#blokada-listowania-zawartosci-katalogu). Możesz również chronić dostęp do Twoich katalogów za pomocą [hasła](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Zalecamy, aby w przypadku trudności z ustawieniem tej konfiguracji skonsultować się z [specjalistycznym dostawcą usług](/links/partner). Nasz zespół wsparcia nie będzie mógł udzielić pomocy w przypadku każdej modyfikacji wewnętrznej programistycznej Twojej strony internetowej.

### Rozwiąż najczęstszy przypadek na stronie "Index of"

Zaimportowałeś pliki swojej strony **domain.tld** do katalogu `www` swojego hostingu za pomocą [FTP](/pages/web_cloud/web_hosting/ftp_connection). Jednak strona internetowa, do której jest przypisana Twoja domena, nie jest połączona z tym katalogiem w kolumnie `Katalog główny`.

![index_of_multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-empty.png){.thumbnail}

`Katalog główny` nie jest obecnie możliwy do zmiany po utworzeniu strony internetowej.

Musisz odłączyć swoją domenę od istniejącej strony internetowej z poziomu karty `Moje strony`{.action} swojego hostingu internetowego. Aby to zrobić, zapoznaj się z naszym przewodnikiem "[Jak odłączyć domenę od istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_detach_domain_existing_website)".

Następnie możesz dodać nową stronę internetową z użyciem swojej domeny, korzystając z naszego przewodnika "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)". Jeśli Twoja strona internetowa posiada konfigurację z użyciem Git, wcześniej zapoznaj się z naszym przewodnikiem "[Konfiguracja i korzystanie z Git na hostingu OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)", **przed** wykonaniem działania `Odłącz domenę`{.action}.

Sprawdź, czy Twoja strona wyświetla się poprawnie. W przeciwnym razie zrestartuj urządzenie i w razie potrzeby wyczyść cache przeglądarki.

Upewnij się również, czy w Twoim katalogu docelowym znajduje się plik **index.php** lub **index.html**.

## Sprawdź również <a name="go-further"></a>

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Usunięcie błędu "Strona nie została zainstalowana"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 