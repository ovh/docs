---
title: Co zrobić w przypadku strony "Index of"?
excerpt: Dowiedz się, jak przywrócić Twoją stronę WWW online, gdy wyświetla ona stronę "Index of"
updated: 2026-05-04
---

## Wprowadzenie

Pojawi się strona **"Index of"** w przynajmniej jednym z następujących przypadków:

- Konfiguracja [Twojej nazwy domeny z Twoją stroną internetową](/pages/web_cloud/web_hosting/multisites_configure_multisite) nie jest poprawnie skonfigurowana do katalogu docelowego.
- Folder docelowy, na który wskazuje Twoja nazwa domeny, nie zawiera plików **"index.html"** lub **"index.php"**

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

## W praktyce

### Zrozumieć pochodzenie strony "Index of"

Twoja domena została zadeklarowana, aby uzyskać dostęp do katalogu docelowego ("`Katalog główny`") na serwerze [FTP](/pages/web_cloud/web_hosting/ftp_connection) Twojego hostingu współdzielonego. Więcej informacji na temat powiązania nazwy domeny z hostingiem znajdziesz w naszym przewodniku "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

Strona **Index of** wskazuje, że dany katalog docelowy nie zawiera pliku **index.php** lub **index.html**. Plik ten stanowi "*punkt wejścia*" Twojej strony WWW. Nazwa tego pliku jest znormalizowana.

Aby wyświetlić swoją stronę internetową, upewnij się, że `Katalog główny`, dla którego Twoja domena jest zadeklarowana, zawiera plik **index.php** lub **index.html**.

> [!primary]
>
> Aby tymczasowo powiązać domenę z `Katalogiem głównym` niezawierającym pliku **index.php** lub **index.html**, możesz zablokować wyświetlanie listy katalogów na swojej stronie internetowej zgodnie z tym [tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#blokada-listowania-zawartosci-katalogu). Możesz również chronić dostęp do Twoich katalogów za pomocą [hasła](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Zalecamy, aby w przypadku trudności z ustawieniem tej konfiguracji skonsultować się z [specjalistycznym dostawcą usług](/links/partner). Nasz zespół wsparcia nie będzie mógł udzielić pomocy w przypadku każdej modyfikacji wewnętrznej programistycznej Twojej strony internetowej.

### Rozwiąż najczęstszy przypadek na stronie "Index of"

Zaimportowałeś pliki swojej strony **domain.tld** do katalogu `www` swojego hostingu za pomocą [FTP](/pages/web_cloud/web_hosting/ftp_connection). Jednak strona internetowa, do której jest przypisana Twoja domena, nie jest połączona z tym katalogiem w kolumnie `Katalog główny`.

Będziesz musiał zmienić pierwotnie zadeklarowany `Katalog główny` dla swojej strony internetowej w [Panelu klienta OVHcloud](/links/control-panel/web-hosting). Aby to zrobić, zapoznaj się z naszym przewodnikiem "[Jak zmienić katalog główny istniejącej strony internetowej?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

Jeśli Twoja strona internetowa została skonfigurowana z użyciem Git, **przed** kontynuowaniem zapoznaj się z naszym przewodnikiem „[Konfiguracja i korzystanie z Git na hostingu OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)”, aby usunąć powiązanie z Git. Wynika to z faktu, że zmiana zadeklarowanego folderu głównego dla strony internetowej nie jest możliwa, jeśli Twoja strona internetowa została skonfigurowana z użyciem Git.

Sprawdź, czy Twoja strona wyświetla się poprawnie. W przeciwnym razie zrestartuj urządzenie i w razie potrzeby wyczyść cache przeglądarki.

Upewnij się również, czy w Twoim katalogu docelowym znajduje się plik **index.php** lub **index.html**.

## Sprawdź również <a name="go-further"></a>

[Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Usunięcie błędu "Strona nie została zainstalowana"](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community). 
