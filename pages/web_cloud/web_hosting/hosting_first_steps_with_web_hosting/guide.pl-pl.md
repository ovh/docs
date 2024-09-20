---
title: "Hosting WWW - Jak rozpocząć korzystanie z usługi w kilku etapach"
excerpt: "Poznaj pierwsze kroki, które pozwolą Ci połączyć Twoją domenę, zamieścić w Internecie stronę WWW i utworzyć konta e-mail na Twoim hostingu"
updated: 2024-02-08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłoś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie 

OVHcloud oferuje [kilka ofert hostingu WWW](/links/web/hosting). Są one przeznaczone do różnych zastosowań:

- Rozpocznij działalność online.
- Szybkie tworzenie strony WWW (firmowej lub nie), bloga, **C**ontent **M**anagement **S**ystem (**CMS**), np. *WordPress*, *Joomla!*, *PrestaShop* lub *Drupal*, a także sklep internetowy.
- Spersonalizuj jeden lub więcej adresów e-mail powiązanych z nazwą domeny, której chcesz użyć na Twojej stronie WWW.
- Zarządzanie kilkoma stronami WWW w ramach jednego hostingu.
- Posiadanie jednej lub kilku baz danych [zawartych w niektórych pakietach hostingowych OVHcloud](/links/web/hosting)).
- itp.

Te oferty oszczędzają na zarządzaniu utrzymaniem, aktualizacjami i bezpieczeństwem infrastruktury hostingowej WWW.<br>
Pozwalają one zaoszczędzić czas potrzebny na "administrowanie serwerem" i skupić się wyłącznie na:

- rozwój, aktualizacja i bezpieczeństwo strony WWW, bloga, CMS'a lub sklepu internetowego;
- bezpieczeństwo i optymalizacja jednej lub kilku baz danych (baz), jeśli oferta dysponuje;
- Konfiguracja i zarządzanie adresami e-mail zawartymi w ofercie hostingu.

**Dowiedz się, jak powiązać domenę, zamieścić w Internecie stronę WWW i utworzyć jeden lub więcej kont e-mail za pomocą hostingu.**

## Wymagania początkowe

- Zakupienie [hostingu OVHcloud](/links/web/hosting).
- Otrzymanie wiadomości e-mail potwierdzającej uruchomienie usługi.
- Posiadanie [nazwy domeny](/links/web/domains).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

Celem niniejszego przewodnika jest wskazanie najważniejszych działań, jakie należy podjąć w związku z naszymi rozwiązaniami [hostingowymi web](/links/web/hosting). 
Każdemu z tych działań będzie towarzyszyć jedno lub więcej łączy do konkretnych przewodników (związanych z danym działaniem).

Możesz zatem używać tego przewodnika jako "repozytorium" możliwych działań od momentu subskrypcji Twojej oferty [hostingu web](/links/web/hosting) i w trakcie jej używania.

> [!primary]
> 
> Aby lepiej zrozumieć ten przewodnik, termin "strona internetowa" odnosi się obecnie do wszystkich rodzajów stron internetowych (strona internetowa, blog, CMS, sklep internetowy, itp.) wspomnianych powyżej w tym przewodniku.
>

**Podsumowanie:**

- [Etap 1 - Określenie rozmiaru projektu](#project-delimitation)
- [Etap 2 - instalacja strony www](#website-installation)
- [Etap 3 - Tworzenie kont e-mail (opcjonalnie)](#email-creation)
- [Etap 4 - Sprawdź i/lub zmodyfikuj konfigurację Twojej domeny](#domain-configuration)
- [Etap 5 - Inne opcje dostępne w ramach hostingu www](#other-options)

### Etap 1 - Określenie rozmiaru projektu <a name="project-delimitation"></a>

Zanim zaczniesz, koniecznie zidentyfikuj i jasno określ swoje potrzeby, zadając sobie następujące pytania: 

- Czy muszę **utworzyć** czy **migrować** (z innego dostawcy hostingu) moją stronę WWW?
- Czy potrzebuję jednej lub kilku baz danych(ów), aby uruchomić stronę WWW?
- Czy potrzebuję jednego lub kilku spersonalizowanych adresów (adresów) e-mail powiązanych z moją domeną?

W zależności od otrzymanych odpowiedzi sprawdź, czy oferta [hostingu](/links/web/hosting) odpowiada Twoim potrzebom, zanim przejdziesz dalej.

Jeśli nie znajdujesz, zapoznaj się z przewodnikiem "[Hosting: jak zmienić ofertę?](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)".

### Etap 2 - instalacja strony www <a name="website-installation"></a>

Po zdefiniowaniu Twojego projektu możesz rozpocząć instalację strony WWW.

Istnieją dwa możliwe scenariusze: **migruj** istniejącą stronę WWW lub **utwórz** nową stronę WWW.

#### Migracja Twojej strony WWW

Jeśli chcesz przenieść stronę WWW z innego dostawcy hostingu, zapoznaj się bezpośrednio z naszym przewodnikiem "[Przeniesienie strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". Znajdziesz tam wszystkie kluczowe etapy migracji bez przerwy w działaniu wszystkich Twoich usług (nazwa domeny, strona WWW, adres(y) e-mail, etc.).

#### Załóż nową stronę www

W takim przypadku masz do wyboru kilka rozwiązań.

##### Przypadek nr 1 - Umieszczenie w Internecie strony WWW zbudowanej lokalnie

W takim przypadku zachęcamy do zapoznania się bezpośrednio z naszym przewodnikiem "[Uruchomienie strony WWW na hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)". Znajdziesz tam wszystkie etapy do wykonania:

- umieszczenie strony WWW na przestrzeni dyskowej FTP Twojego hostingu;
- stworzyć bazę danych powiązaną z Twoim hostingiem ;
- umieszczenie lokalnej bazy danych w bazie danych powiązanej z Twoim hostingiem;
- powiązać bazę danych ze stroną WWW zainstalowaną na Twoim hostingu.

##### Przypadek nr 2 - Stwórz stronę WWW za pomocą systemu CMS

OVHcloud udostępnia opcję "Moduły za 1 kliknięciem".<br>
Po zalogowaniu się do [Panelu klienta OVHcloud](/links/manager) i za pomocą hostingu możesz szybko zainstalować systemy CMS *WordPress*, *Joomla!*, *PrestaShop* i *Drupal*.

Aby skorzystać z tej opcji, zapoznaj się z naszym przewodnikiem "[Instalacja strony WWW za pomocą 'modułu za 1 kliknięciem' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

> [!primary]
>
> Jeśli wolisz ręcznie zainstalować CMS bez korzystania z opcji "Moduły za 1 kliknięciem", zapoznaj się z naszą dokumentacją "[Ręczna instalacja CMS na hostingu](/pages/web_cloud/web_hosting/cms_manual_installation)".
>

### Etap 3 - Tworzenie kont e-mail (opcjonalnie) <a name="email-creation"></a>

Oferta [hostingu web](/links/web/hosting) zawiera co najmniej jeden adres e-mail, który możesz aktywować lub nie.

Najpierw zapoznaj się z naszym przewodnikiem "[Aktywacja kont e-mail zawartych w hostingu](/pages/web_cloud/web_hosting/activate-email-hosting)".

Po włączeniu tej opcji zapoznaj się z naszym przewodnikiem "[Tworzenie konta e-mail w ramach usługi MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)", aby spersonalizować jeden lub więcej adresów e-mail (e-mail) z Twoją domeną.

> **Przypadki Szczegółowe:**
>
> - Jeśli przenosisz stronę WWW i/lub jeśli są to adresy e-mail powiązane z nazwą domeny Twojej strony WWW, zapoznaj się z naszym przewodnikiem "[Przeniesienie strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". Znajdziesz tam wszystkie kluczowe etapy migracji bez przerwy w działaniu wszystkich Twoich usług (nazwa domeny, strona WWW, adres(y) e-mail, etc.).
>
> - Jeśli nie przypisałeś domeny podczas zamawiania hostingu i chcesz skorzystać z opcji "adres(y) e-mail zawarty(e) w Twoim hostingu", przeprowadź tę operację ręcznie w [Panelu klienta OVHcloud](/links/manager).

### Etap 4 - Sprawdź i/lub zmodyfikuj konfigurację Twojej domeny <a name="domain-configuration"></a>

Na tym etapie Twoja strona WWW musi być zainstalowana na hostingu, a Twoje konta e-mail utworzone. Elementy te mogą jeszcze nie działać, dopóki konfiguracja Twojej domeny z nowymi usługami nie zostanie zakończona.

Połączenie między Twoją domeną i usługami (hosting, serwer e-mail, etc.) jest realizowane przede wszystkim za pomocą aktywnej strefy DNS Twojej domeny oraz zawartych w niej wpisów DNS.

> [!primary]
>
> W pełni aktywna zmiana strefy DNS wymaga czasu propagacji, który wynosi od 4 do 24 godzin.
>

> **Przypadki Szczegółowe:**
>
> Jeśli migrujesz stronę WWW i/lub konta e-mail powiązane z nazwą domeny Twojej strony WWW, zapoznaj się z naszym przewodnikiem "[Przeniesienie strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)". Znajdziesz tam wszystkie kluczowe etapy migracji bez przerwy w działaniu wszystkich Twoich usług (nazwa domeny, strona WWW, adres(y) e-mail, etc.).

Aby sprawdzić i/lub zmienić połączenie między Twoją domeną i hostingiem, **zapoznaj się z następującymi przewodnikami w kolejności:**

- [Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) : znajdziesz w nim wszystkie adresy IP naszej infrastruktury hostingu. Niniejszy przewodnik jest szczególnie przydatny w przypadku domen, których aktywna strefa DNS nie jest zarządzana w OVHcloud (lub zarządzana na innym koncie klienta OVHcloud niż Twoje).
- [Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite): Ten przewodnik wyjaśnia, jak dodać kilka domen do hostingu. Może również pomóc w sprawdzeniu, czy w zakładce `MultiSite`{.action} Twojego hostingu masz poprawną nazwę domeny. Jeśli jest taka potrzeba, możesz ją zmienić i zrobić to, co konieczne, w strefie DNS aktywnej dla Twojej domeny.
- [Modyfikacja strefy DNS](/pages/web_cloud/domains/dns_zone_edit): Niniejszy przewodnik wyjaśnia, jak edytować strefę DNS obecną w OVHcloud. Będzie Ci on przydatny, jeśli aktywna strefa DNS Twojej domeny znajduje się na innym koncie klienta OVHcloud niż Twoje. Może również służyć do zalogowania się do strefy DNS OVHcloud Twojej domeny, w celu sprawdzenia, czy adres IP (rekord wejściowy(e) typu *A* i/lub *AAAA*) zadeklarowany dla Twojej domeny w strefie DNS odpowiada adresowi IP Twojego hostingu.

Aby zweryfikować i/lub zmodyfikować powiązanie między Twoją domeną i usługą e-mail OVHcloud, zapoznaj się z przewodnikiem "[Konfiguracja rekordu MX dla emaili](/pages/web_cloud/domains/dns_zone_mx)" : znajdziesz w nim nazwy serwerów e-mail OVHcloud, ale również procedurę przekierowywania domeny na te serwery.

> [!primary]
>
> Jeśli strefa DNS aktywna dla Twojej domeny nie jest zarządzana w OVHcloud:
> 
> - **W przypadku połączenia domeny z hostingiem** : zapoznaj się wyłącznie z przewodnikami "[Lista adresów IP klastrów i hostingów WWW](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)" i "[Instalacja kilku stron WWW na jednym hostingu](/pages/web_cloud/web_hosting/multisites_configure_multisite)", które zostały wymienione powyżej, aby uzyskać adres IP hostingu WWW, i potwierdź poprawność wpisywania domeny na hostingu WWW. Następnie skontaktuj się z organizacją zarządzającą aktywną strefą DNS Twojej domeny, aby przekierować ją na Twój hosting.
>
> - **W celu utworzenia powiązania między Twoją domeną i usługą e-mail OVHcloud** : zapoznaj się wyłącznie z przewodnikiem "[Konfiguracja rekordu MX dla emaili](/pages/web_cloud/domains/dns_zone_mx)", aby dowiedzieć się, jakie serwery e-mail OVHcloud należy wpisać w aktywnej strefie DNS Twojej domeny. Następnie skontaktuj się z organem zarządzającym aktywną strefą DNS Twojej domeny, aby przekierować ją na serwery e-mail OVHcloud.
>

### Etap 5 - Inne opcje dostępne w ramach hostingu www <a name="other-optionsn"></a>

W zależności od [pakietu hostingowego](/links/web/hosting) dodatkowe opcje / oferty / funkcje są dostępne bezpłatnie.

#### Certyfikaty SSL

Certyfikaty SSL umożliwiają dostęp do Twojej strony WWW przy użyciu protokołu HTTPS. Protokół ten szyfruje ruch między Twoim hostingiem a osobami odwiedzającymi Twoją stronę WWW.

Bez względu na [hosting web](/links/web/hosting) możesz aktywować bezpłatny certyfikat SSL **Let's encrypt**.

Więcej informacji o certyfikatach SSL (bezpłatnych lub płatnych) oferowanych na hostingu znajdziesz w przewodniku "[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

#### Oferty CDN

Wszystkie nasze oferty CDN pozwalają na umieszczenie w pamięci cache części Twojej strony WWW. Skraca to czas ładowania się stron WWW, zwłaszcza w przypadku użytkowników geograficznie oddalonych od centrum danych, w którym znajduje się Twój hosting.

W ramach hostingu OVHcloud oferuje 3 oferty CDN:

- **CDN Basic**
- **CDN Security**
- **CDN Advanced**

Więcej informacji na temat ofert CDN znajdziesz w przewodniku "[Przewodnik dotyczący usługi CDN na hostingu www](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

> [!primary]
>
> Oferta **CDN Basic** jest zawarta w cenie hostingu **Performance**.
>
> Nie można połączyć kilku usług CDN na tym samym hostingu.

#### Serwery baz danych Web Cloud Databases

Jeśli posiadasz hosting www **Performance**, możesz za darmo aktywować serwer bazy danych [Web Cloud Databases](/links/web/databases).

Więcej szczegółów na temat korzystania z tej usługi znajdziesz w przewodniku "[Pierwsze kroki z usługą Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Wysyłanie wiadomości z Twojej strony WWW

Wszystkie nasze [hostingi](/links/web/hosting) umożliwiają wysyłanie e-maili z Twojej strony WWW lub konkretnego skryptu za darmo.

Szczegółowe informacje na temat tej funkcji znajdziesz w przewodniku "[Monitoring i zarządzanie automatycznymi wiadomościami e-mail na Twoim hostingu](/pages/web_cloud/web_hosting/mail_function_script_records)".

#### Zaplanowane zadania "CRON"

Zadania "CRON" pozwalają na automatyczne wykonywanie skryptów zainstalowanych na Twoim hostingu.

Jeśli w Twojej ofercie [hostingu web](/links/web/hosting) taka opcja jest dostępna, zapoznaj się z naszym przewodnikiem "[Tworzenie automatycznych zadań (CRON) na Twoim hostingu](/pages/web_cloud/web_hosting/cron_tasks)", aby uzyskać więcej szczegółów.

## Sprawdź również

[Przeniesienie strony WWW i kont e-mail do OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Uruchomienie strony WWW na hostingu](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

[Instalacja strony WWW za pomocą 'modułu za 1 kliknięciem' (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Tworzenie konta e-mail w ramach usługi MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)

[Zarządzanie certyfikatem SSL na hostingu](/pages/web_cloud/web_hosting/ssl_on_webhosting)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).