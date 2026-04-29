---
title: "Jak zmienić katalog główny istniejącej strony WWW?"
excerpt: "Dowiedz się, jak zmienić katalog główny zadeklarowany dla istniejącej strony WWW na hostingu za pomocą Panelu klienta OVHcloud"
updated: 2026-05-04
---

## Wprowadzenie

Na jednym hostingu możesz hostować kilka stron WWW, nawet jeśli nazwy domen nie są zarejestrowane w OVHcloud. Możesz też przypisać jedną lub kilka nazw domen lub subdomen do tej samej strony WWW.

Korzystając z usług, możesz potrzebować:

- Zastąpić całą zawartość istniejącej strony WWW, bez usuwania jej z hostingu. Wszystko to bez przerw w dostępie i w sposób przezroczysty dla odwiedzających Twoją stronę.
- Zainstalować [moduł za 1 kliknięciem](/pages/web_cloud/web_hosting/cms_install_1_click_modules) lub [inny CMS](/pages/web_cloud/web_hosting/cms_manual_installation), aby zastąpić zawartość istniejącej strony WWW, bez usuwania starej zawartości z hostingu. W tym przypadku musisz następnie zbudować poszczególne strony nowej witryny za pomocą przeglądarki internetowej.
- Zmienić nazwy katalogów głównych stron WWW w przestrzeni dyskowej hostingu bez przerywania dostępu do poszczególnych stron.

**Dowiedz się, jak zmienić katalog główny zadeklarowany dla istniejącej strony WWW na hostingu za pomocą Panelu klienta OVHcloud.**

> [!primary]
> Ta procedura dotyczy [nowej wersji Panelu klienta OVHcloud](/links/control-panel-ovhcloud), obecnie dostępnej w wersji beta. Aby ją wykonać, przełącz się na ten interfejs z poziomu swojego zwykłego Panelu klienta.
>
> Jeśli nie utworzyłeś jeszcze danej strony WWW na hostingu, zapoznaj się **bezpośrednio** z [tym przewodnikiem](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Jeśli Twoja strona WWW jest skonfigurowana z Git, zapoznaj się najpierw z naszym przewodnikiem "[Konfiguracja i korzystanie z Git na hostingu OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)", aby usunąć powiązanie z Git **przed** kontynuowaniem. Zmiana katalogu głównego jest niedostępna, jeśli Twoja strona WWW jest skonfigurowana z Git. W przeciwnym razie zmiana katalogu głównego zakłóciłaby powiązanie z Git.

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu OVHcloud](/links/web/hosting-multisite).
- Posiadanie jednej lub kilku [nazw domen](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Hosting](/links/control-panel/web-hosting-sites)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Hosting`{.action} > `Strony`{.action} > Wybierz hosting WWW

---
<!-- CP-NAV-END:web-hosting -->

## W praktyce

> [!warning]
> Ten przewodnik opisuje wyłącznie działania do wykonania z poziomu [Panelu klienta OVHcloud](/links/manager).
>
> Z wyjątkiem sytuacji, w której chcesz zainstalować moduł za 1 kliknięciem, aby budować stronę stopniowo, musisz wcześniej:
>
> - Utworzyć nowy katalog główny w [przestrzeni dyskowej](/pages/web_cloud/web_hosting/ftp_connection) hostingu.
> - Umieścić całą nową zawartość strony WWW wewnątrz tego nowego katalogu.
> - Jeśli nowa zawartość Twojej strony WWW korzysta z bazy danych, musisz również [utworzyć bazę danych](/pages/web_cloud/web_hosting/sql_create_database), a następnie [zaimportować zawartość powiązaną z tą bazą danych](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
> - Umieścić dane dostępowe do bazy danych w pliku zawierającym informacje o połączeniu z bazą danych. Ten plik musi być już obecny w nowym katalogu głównym.
>
> **Bez tych działań wyświetlanie Twojej strony WWW zostanie przerwane**.
>
> Ten przewodnik opisuje wyłącznie procedurę zmiany, z poziomu Panelu klienta OVHcloud, katalogu głównego pierwotnie zdefiniowanego dla Twojej strony WWW. Ta czynność jest niezbędna, aby strona WWW wyświetlała zawartość nowego katalogu zamiast starego.

<!-- CP-STEPS-START:modify-root-folder -->
Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **4** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting-sites) i wybierz odpowiedni hosting.
>>
>> ![Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-sites.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na wyświetlonej stronie kliknij zakładkę `Moje strony`{.action}.
>>
>> ![Moje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-sites.png){.thumbnail}
>>
> **Krok 3**
>>
>> W wyświetlonej tabeli kliknij przycisk `⁝`{.action} po prawej stronie odpowiedniej strony WWW, a następnie `Edytuj stronę`{.action}.
>>
>> ![Opcje strony](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Krok 4**
>>
>> W otwartym oknie, w formularzu **Katalog główny**, zastąp stary katalog główny nowym.
>>
>> ![Zmiana katalogu głównego](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/edit-site-folder.png){.thumbnail}
>>
>> Następnie kliknij `Potwierdź`{.action}.
>>
<!-- CP-STEPS-END:modify-root-folder -->

## Sprawdź również

[Umieszczenie strony WWW w Internecie](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
