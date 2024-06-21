---
title: "Informacje techniczne związane z hostingiem współdzielonym"
excerpt: "Zapoznaj się z różnego rodzaju informacjami technicznymi dotyczącymi hostingu WWW"
updated: 2023-12-08
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Pakiety hostingowe OVHcloud są współdzielone. W związku z tym konfiguracja tych ofert zawiera pewne cechy techniczne. Zalecamy zapoznanie się z treścią niniejszej dokumentacji *przed* rozpoczęciem korzystania z hostingu WWW OVHcloud.

**Zapoznaj się z różnego rodzaju informacjami technicznymi dotyczącymi hostingu WWW.**

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu WWW](/links/web/hosting){.external}
- Dostęp do [Panelu klienta OVHcloud](/links/manager){.external}.

## W praktyce

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najbardziej optymalnym wykonywaniu bieżących zadań. Niemniej jednak, w przypadku trudności zalecamy skontaktowanie się z [wyspecjalizowanym dostawcą](/links/partner) i/lub skontaktowanie się z dostawcą usługi. Niestety firma OVHcloud nie jest w stanie udzielić Ci wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji "[Sprawdź również](#go-further)" tego przewodnika.
>

### FTP

- Użyj pasywnego **trybu** dla połączeń FTP. Upewnij się, że Twój skrypt lub klient FTP jest odpowiednio skonfigurowany.

- Jeśli napotkasz błąd dostępu "Uwierzytelnienie połączenia 530 się nie powiodło" podczas logowania do przestrzeni dyskowej FTP: Upewnij się, że informacje dotyczące dostępu do przestrzeni FTP są poprawne. W tym celu zaloguj się do [Panelu klienta OVHcloud](/links/manager) i przejdź do sekcji `Web Cloud`{.action}. W lewej kolumnie kliknij `Hosting`{.action}, a następnie wybierz odpowiedni hosting. Na stronie, która się wyświetli kliknij zakładkę `FTP - SSH`{.action}.

Znajdziesz tam wszystkie informacje dotyczące logowania do Twojej przestrzeni dyskowej FTP z wyjątkiem hasła.

Dzieje się tak, ponieważ hasła nigdy nie są wyświetlane, ale można je zmieniać.

Więcej informacji na ten temat znajdziesz w naszym przewodniku "[Logowanie do przestrzeni dyskowej FTP hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection)".

### Emaile <a name="emails"></a>

Aby zagwarantować wysoką jakość usługi na całej infrastrukturze współdzielonej i tym samym usprawnić wysyłkę e-maili do odbiorców, stosujemy limity wysyłki w naszych usługach hostingowych.

W okresie 3600 sekund (1 godzina) z oferty hostingu możesz wysyłać następujące limity e-maili:

|Oferty|Darmowy hosting 100M|Starter|Perso|Pro|Performance|
|---|---|---|---|---|---|
|Maksymalna liczba wysyłanych wiadomości na godzinę i na usługę|10|20|100|200|2000|

> [!primary]
>
> Ograniczenia te dotyczą **tylko** wiadomości e-mail wysyłanych przy użyciu funkcji *mail()* PHP i nie dotyczą innych ofert e-mail (wysyłka SMTP).
>

Wysyłka e-maili może zostać opóźniona, z wyjątkiem podejrzeń o spam lub phishing. Twoje e-maile będą przechowywane w kolejce, dopóki liczba e-maili wysłanych w ciągu ostatniej godziny nie spadnie poniżej limitu.

W przypadku nadużycia lub włamania, część lub całość Twojej usługi może zostać zawieszona (zgodnie z OWU/OWU i Warunkami szczegółowymi Twojej oferty). Otrzymasz e-mail informujący o zawieszeniu hostingu. W takim przypadku skorzystaj z następujących przewodników:

- [Monitorowanie i zarządzanie automatycznymi wiadomościami e-mail na Twoim hostingu](/pages/web_cloud/web_hosting/mail_function_script_records);
- [Przykłady zastosowania - Porady w związku z włamaniem na Twojej stronie WWW](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked).

### Baza danych / SQL

#### Jednoczesne połączenia z bazą danych

Oferty hostingu WWW (współdzielone bazy danych) są objęte ograniczeniem do 30 jednoczesnych połączeń z każdą bazą danych (limit ten wzrasta do 200, jeśli korzystasz z oferty [Web Cloud Databases](/links/web/databases)). Zapoznaj się z [szczegółami naszych ofert hostingu WWW](/links/web/hosting), aby poznać opcje dostępne w każdej ofercie hostingu WWW.

Możesz również zamówić dodatkowe pakiety [Web Cloud Databases](/links/web/databases), które mają opcje personalizacji:

- *max_connections*: domyślnie 100 z możliwością zwiększenia do 200;
- *max_user_connections*: domyślnie 50 z możliwością zwiększenia do 200.

Aby uzyskać więcej informacji, zapoznaj się ze szczegółami naszych [ofert hostingu WWW](/links/web/hosting) oraz przewodnikiem "[Pierwsze kroki z Twoją ofertą Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Połączenia z serwera zewnętrznego

Ze względów bezpieczeństwa nie jest możliwe połączenie się z serwera zewnętrznego z bazą danych zawartą w ofercie hostingu WWW OVHcloud. Z udostępnionymi serwerami baz danych mogą się łączyć tylko serwery zawierające hosting WWW OVHcloud. Każda inna próba połączenia będzie skutkować następującym błędem:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```

Tylko serwery baz danych [Web Cloud Databases](/links/web/databases) umożliwiają łączenie się z nimi serwerom zewnętrznym. Autoryzacja adresu IP zewnętrznego serwera na serwerze baz danych. W razie potrzeby sprawdź przewodnik "[Pierwsze kroki z usługą Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".

#### Zmienne współdzielonego serwera SQL

Aby poznać jej zmienne, zaloguj się do bazy danych za pomocą interfejsu *PhpMyAdmin*. Po zalogowaniu kliknij zakładkę `SQL` w górnej części strony, następnie wprowadź następujące zapytanie do centralnego formularza, aby sprawdzić zmienne serwera MySQL:

```bash
SHOW VARIABLES;
``` 

> [!primary]
>
> Wersji MySQL nie można modyfikować w przypadku baz danych zintegrowanych z hostingiem WWW.
>

Aby uzyskać więcej informacji na temat zarządzania bazami danych i łączenia się z interfejsem *phpMyAdmin*, zapoznaj się z przewodnikiem "[Tworzenie bazy danych na hostingu www OVHcloud](/pages/web_cloud/web_hosting/sql_create_database)".

### PHP

Zapoznaj się z [Pakietami hostingu WWW](/links/web/hosting-programming-language), aby upewnić się, czy oferta hostingu, którą chcesz zamówić, odpowiada Twoim potrzebom.

> [!warning]
>
> Modyfikacja pliku **php.ini** nie jest dostępna w ofercie hostingu. Wynika to z faktu, że konfiguracja PHP jest globalna dla całej infrastruktury współdzielonej.
>
> Możesz zmodyfikować niektóre elementy, takie jak *framework PHP*,*środowisko uruchomieniowe* lub *wersja PHP* na Twoim hostingu.
>
> Więcej szczegółów na ten temat znajdziesz w przewodniku "[Hosting WWW: środowisko, wersja PHP, ".ovhconfig"](/pages/web_cloud/web_hosting/configure_your_web_hosting)"
>

Możesz również sprawdzić szczegóły konfiguracji Twojego hostingu. W tym celu sprawdź rubrykę "[Informacje techniczne o Twoim hostingu](#technical-infos-web-hosting)" na dole niniejszego przewodnika.

#### PHP-FPM

PHP-FPM jest aktywowany domyślnie w infrastrukturze hostingu, aby przyspieszyć odpowiedzi PHP. Pamiętaj, że może nie być aktywny, jeśli korzystasz ze starej, niezaktualizowanej wersji hostingu (usługi zamówione przed 2014 r.).

*Niektóre zmienne są inne bez PHP-FPM:*

|Zmienna|Bez PHP-FPM|Z PHP-FPM|
|---|---|---|
|max_execution_time|120s|165s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

#### skryptów PHP

Po zalogowaniu się do hostingu przez SSH ruch wychodzący zostanie zablokowany ze względów bezpieczeństwa. Zalecamy więc korzystanie ze skryptów PHP. Aby uzyskać więcej informacji, zapoznaj się z [przewodnikiem SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting). Instrukcja "[PHP manual](https://www.php.net/manual/en/function.system.php)" zawiera informacje dotyczące wykonywania poleceń.

Na przykład, aby pobrać nazwę hosta, można użyć funkcji *gethostbyaddr()*:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```

> [!warning]
>
> OVHcloud nie zmienia automatycznie wersji PHP na Twoim hostingu po wdrożeniu nowej wersji. Zarządzasz bezpieczeństwem treści i usług oraz ich regularną aktualizacją.
>

### Informacje techniczne dotyczące Twojego hostingu <a name="technical-infos-web-hosting"></a>

Znajdź i sprawdź biblioteki, języki i wersje dostępne dla Twojego hostingu na tej stronie: <https://webhosting-infos.hosting.ovh.net>

Aby zapoznać się ze szczegółami technicznymi usługi Cloud Web, przejdź na stronę: <https://cloudweb-infos.hosting.ovh.net/>.

### Informacje o automatycznych kopiach zapasowych <a name="backup"></a>

> [!warning]
>
> OVHcloud dostarcza usługę automatycznego tworzenia kopii zapasowych danych oraz udostępnienia tych kopii. Pozostaje jednak *poza umową* i jest obecny jako uzupełnienie Twoich usług. Twoim obowiązkiem jest wdrożenie własnej polityki gastronomicznej i wskazanie punktów przywracania usług w chwilach, które uznasz za stosowne.
>

#### Przestrzeni dyskowej / FTP

Wszystkie nasze oferty hostingu znajdują się:

- w Gravelines (GRA), we Francji, dostępne są automatyczne kopie zapasowe D-1 / D-2 / D-3 / D-7 / D-14. Kopie zapasowe są również przechowywane w centrum danych w Roubaix (RBX) we Francji;

- w Beauharnois (BHS), w Kanadzie, dostępne są automatyczne kopie zapasowe D-1 / D-2 / D-3 / D-7 / D-14. Kopie zapasowe są również przechowywane w centrum danych w Beauharnois (BHS) w Kanadzie.

Dowiedz się, jak [zalogować się do przestrzeni dyskowej FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_connection) lub [przywrócić przestrzeń dyskową FTP Twojego hostingu](/pages/web_cloud/web_hosting/ftp_save_and_backup) w naszej dokumentacji.

#### Baza danych / SQL

> [!warning]
>
> OVHcloud dostarcza usługę automatycznego tworzenia kopii zapasowych danych oraz udostępnienia tych kopii. Pozostaje jednak *poza umową* i jest obecny jako uzupełnienie Twoich usług. Twoim obowiązkiem jest wdrożenie własnej polityki gastronomicznej i wskazanie punktów przywracania usług w chwilach, które uznasz za stosowne.
>

W przypadku baz danych współdzielonych (zawartych w Twojej ofercie hostingu WWW) lub serwerów baz danych (Web Cloud Databases), oferowanych w Gravelines (GRA), we Francji i Beauharnois (BHS) w Kanadzie, tworzenie kopii zapasowych baz jest wykonywane codziennie. Kopie zapasowe są dostępne (w [Panelu klienta OVHcloud](/links/manager){.external} lub [API OVHcloud](https://api.ovh.com/)). Kopie zapasowe są również przechowywane na innej infrastrukturze. Dane są kopiowane w centrum danych zlokalizowanym w Strasburgu (SBG). Czas przechowywania kopii zapasowych to 30 dni.

Dowiedz się, jak [Pobrać kopię zapasową bazy danych hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export) znaleźć w naszej dokumentacji.

#### E-mail

> [!warning]
>
> OVHcloud dostarcza usługę automatycznego tworzenia kopii zapasowych danych. Pozostaje jednak *poza umową* i jest obecny jako uzupełnienie Twoich usług. Twoim obowiązkiem jest wdrożenie własnej polityki gastronomicznej i wskazanie punktów przywracania usług w chwilach, które uznasz za stosowne.
>

W przypadku kont e-mail współdzielonych (zawartych w Twojej usłudze hostingu) codziennie wykonywane są automatyczne kopie zapasowe i kopiowane do innego centrum danych.

### Polityka wykorzystywania plików cookie

**Pliki cookie i elementy śledzące wykorzystywane w ramach świadczenia usługi hostingu współdzielonego.**

Aby zapewnić prawidłowe funkcjonowanie witryn internetowych hostowanych na serwerze współdzielonym, na urządzeniach osób odwiedzających te witryny umieszczany jest plik cookie "SERVER ID". Plik cookie "SERVER ID" zapewnia usługę równoważenia obciążenia ruchu przychodzącego między różnymi infrastrukturami wykorzystywanymi do hostowania strony internetowej (OVHcloud Load Balancer). Umożliwia on użytkownikowi pozostanie na tym samym serwerze hosta przez całą sesję. 

> [!success]
>
> W języku komputerowym, "sesja" oznacza okres, w którym urządzenie (komputer, smartfon, itp.) wchodzi w interakcję z serwerem.
>

co przekłada się na utrzymanie i zachowanie spójności doświadczeń użytkownika.

Plik cookie "SERVER ID" to zapis na urządzeniu użytkownika wskazujący instancję (serwer) infrastruktury, z którą użytkownik wchodzi w interakcję. Plik cookie jest anonimowy, to znaczy, że nie są wykorzystywane żadne dane osobowe użytkownika.

Plik cookie "SERVER ID" jest umieszczany na urządzeniu użytkownika na czas krótszy niż 24 godziny.

Dotyczy pliku cookie:

 - 1: niezbędny do działania usługi hostingu współdzielonego;
 - 2: anonimowy.

Nie wymaga on uprzedniego uzyskania zgody osoby odwiedzającej stronę internetową w rozumieniu ogólnego rozporządzenia o ochronie danych osobowych (RODO).

### Informacje o narzędziach statystycznych

**OVHcloud Web Statistics**

OVHcloud udostępnia klientowi statystyki odwiedzin i pomiaru odwiedzin na stronie(ach) internetowej(-ach) hostowanej(-ych) w ramach usługi hostingu współdzielonego. (zwane dalej "OVHcloud Web Statistics"). "OVHcloud Web Statistics" pozwala w szczególności na identyfikację geograficznej strefy osób odwiedzających strony internetowe hostowane(e) w ramach usługi hostingu współdzielonego, charakterystyki ich terminali, odwiedzanych stron i kodów HTTP. Narzędzie "OVHcloud Web Statistics" jest domyślnie aktywowane w ramach usługi hostingu współdzielonego i można je dezaktywować na żądanie, kontaktując się z pomocą techniczną. OVHcloud przetwarza dane, by móc udostępniać narzędzie "OVHcloud Web Statistics".

Raporty "OVHcloud Web Statistics" są tworzone na podstawie zanonimizowanych danych o ruchu, takich jak adres IP i logi użytkowników stron internetowych hostowanych(ych) w ramach oferty hostingowej, adres URL zapytania, czas trwania zapytania i "użytkownik".

Aby wspomniane wyżej dane mogły być wykorzystywane w ramach narzędzia "OVHcloud Web Statistics", są one anonimizowane i grupowane za pomocą algorytmów obsługiwanych przez OVHcloud na własnej infrastrukturze. Szczególnie adres IP osoby odwiedzającej witrynę, obecny w danych o ruchu, jest pobierany w formie zanonimizowanej w celu jego przetworzenia i przeanalizowania do określenia jego geolokalizacji (ograniczonej do poziomu regionalnego). W związku z tym w narzędziu "OVHcloud Web Statistics" nie są przechowywane żadne dane osobowe umożliwiające bezpośrednią lub pośrednią identyfikację wyżej wymienionych osób odwiedzających.  

## Sprawdź również <a name="go-further"></a>

[Logowanie do przestrzeni dyskowej FTP hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection)

[Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website)

[Optymalizacja wydajności strony](/pages/web_cloud/web_hosting/optimise_your_website_performance)

[Przywracanie przestrzeni dyskowej FTP na hostingu WWW](/pages/web_cloud/web_hosting/ftp_save_and_backup)

[Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW](/pages/web_cloud/web_hosting/sql_database_export)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).