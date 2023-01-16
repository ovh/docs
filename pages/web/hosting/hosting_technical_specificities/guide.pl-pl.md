---
title: 'Informacje techniczne związane z hostingiem współdzielonym'
slug: hosting_www_informacje_techniczne_zwiazane_z_hostingiem_www
excerpt: 'Zapoznaj się z różnego rodzaju informacjami technicznymi dotyczącymi hostingu współdzielonego'
section: 'Konfiguracja hostingu'
order: 05
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 21-11-2022**

## Wprowadzenie 

**Niniejszy przewodnik zawiera szczegółowe informacje techniczne dotyczące infrastruktury hostingu WWW OVHcloud, zebrane na podstawie najczęściej zadawanych pytań**

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu WWW](https://www.ovhcloud.com/pl/web-hosting/){.external}
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
> 

### FTP

- Błąd dostępu („Uwierzytelnienie połączenia 530 zakończyło się niepowodzeniem”): Upewnij się, że informacje dotyczące dostępu do Twojej przestrzeni FTP są poprawne, sprawdzając je w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w karcie `FTP - SSH`. Hasła nigdy nie są wyświetlane, ale można je zmieniać. Zapoznaj się z [przewodnikami dotyczącymi FTP](../logowanie-przestrzen-dyskowa-ftp-hosting-web//).

- Połączenia FTP muszą korzystać z **trybu pasywnego**. Upewnij się, że Twój skrypt lub klient FTP jest odpowiednio skonfigurowany.

### E-maili <a name="emails"></a>

Aby zagwarantować dobrą jakość usługi dla wszystkich i uprościć wysyłkę e-maili do odbiorców, my ustalamy limity dotyczące naszych usług hostingowych.

W ciągu 3600 sekund (czyli 1 godzina) Twoja oferta hostingowa pozwoli Ci na wysłanie następujących kont e-mail:

|Oferty|Start 10M|Perso|Pro|Performance|
|---|---|---|---|---|
|Maksymalna ilość wysyłki e-maili na godzinę i na usługę|10|100|200|2000|

- Poza podejrzeniem spamu lub phishingu, wysyłka e-maili może zostać odroczona. Twoje e-maile będą przechowywane w kolejce do momentu, aż liczba e-maili wysłanych w ciągu ostatniej godziny nie przekroczy limitu.
- W przypadku stwierdzonego nadużycia lub ryzyka Twoja usługa zostanie zawieszona i otrzymasz e-mail z powiadomieniem o zawieszeniu usługi. Co zrobić w przypadku konta zablokowanego z powodu spamu? Sprawdź [nasz przewodnik](https://docs.ovh.com/pl/microsoft-collaborative-solutions/blokada-za-spam/).

### Baza danych / SQL

### Jednoczesne połączenia z bazą danych

- Oferty hostingu WWW (współdzielone bazy danych) są objęte ograniczeniem do 30 jednoczesnych połączeń z każdą bazą danych (200 z bazą danych Web Cloud Databases). Sprawdź [szczegóły naszych ofert hostingu](https://www.ovhcloud.com/pl/web-hosting/), aby poznać dostępne opcje w każdym planie hostingu WWW.

- Możesz również zamówić dodatkowe bazy danych **Web Cloud Databases**, które mają opcje personalizacji:

    - *max_connections*: domyślnie 100, z możliwością zwiększenia do 200

    - *max_user_connections*: domyślnie 50, z możliwością zwiększenia do 200

Aby uzyskać więcej informacji, zapoznaj się ze szczegółami naszych [ofert hostingu](https://www.ovhcloud.com/pl/web-hosting/) i [przewodnikiem](https://docs.ovh.com/pl/clouddb/pierwsze-kroki-z-clouddb/).

#### Połączenia z serwera zewnętrznego

- Ze względów bezpieczeństwa z bazą danych w hostingu WWW OVHcloud (ani współdzieloną, ani prywatną bazą danych SQL) nie można połączyć się z serwera zewnętrznego. Z serwerami baz danych mogą się połączyć tylko serwery OVHcloud Web Hosting. Każda inna próba połączenia będzie skutkować następującym błędem:

```bash
Warning: MySQL Connection Failed: Host ip.your.connection is not allowed to connect ...
```


#### Zmienne współdzielonego serwera SQL

- Zaloguj się do interfejsu PhpMyAdmin, a następnie wprowadź komendę **show variables**, aby sprawdzić zmienne serwera MySQL.

- Wersji MySQL nie można modyfikować w przypadku baz danych zintegrowanych z hostingiem WWW.

Aby uzyskać więcej informacji na temat zarządzania bazami danych, zapoznaj się z przewodnikiem [Tworzenie bazy danych w hostingu OVHcloud](../tworzenie-bazy-danych//).

### PHP

- Zapoznaj się z przewodnikiem po [ofertach hostingu WWW](https://www.ovhcloud.com/pl/web-hosting/uc-programming-language/), aby upewnić się, że plan hostingu, który chcesz zamówić, odpowiada Twoim potrzebom.

> [!warning]
>
> Zmiana pliku **php.ini** jest niedostępna w ofercie hostingu współdzielonego. Wynika to z faktu, że konfiguracja PHP jest globalna dla całej infrastruktury współdzielonej.
>

- Możesz sprawdzić szczegóły konfiguracji Twojego hostingu. W tym celu sprawdź rubrykę [„Informacje techniczne o Twoim hostingu”](./#informacje-techniczne-o-twoim-hostingu) na dole niniejszego przewodnika. 

- Wersję PHP hostingu możesz zmienić w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) („**Konfiguracja**”) lub modyfikując plik .ovhconfig. W przypadku tego drugiego rozwiązania możliwe są również konfiguracje mieszane. Szczegółowe instrukcje znajdują się w przewodnikach:

[Konfiguracja pliku .ovhconfig w hostingu](../konfiguracja-pliku-ovhconfig/)  
[Zmiana konfiguracji hostingu](../zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/)


> [!primary]
> Plik .ovhconfig znajduje się w katalogu głównym hostingu lub w podfolderze pierwszego poziomu (zwykle _/www/_). Jedynym sposobem na zastąpienie parametrów głównych pliku .ovhconfig jest wykorzystanie innego pliku .ovhconfig w podfolderze.
> Umieszczenie pliku głębiej w strukturze katalogu nie będzie miało żadnego wpływu (np. _/www/test/_, _/www/test/test2/_). Upewnij się, że plik może zostać odczytany przez CMS (CHMOD 604 lub 644).


#### PHP-FPM

PHP-FPM jest aktywowany domyślnie w infrastrukturze hostingu, aby przyspieszyć odpowiedzi PHP. Pamiętaj, że może nie być aktywny, jeśli korzystasz ze starej, niezaktualizowanej wersji hostingu (usługi zamawiane przed 2014 r.).

*Niektóre zmienne są inne bez PHP-FPM:*

|Zmienna|Bez PHP-FPM|Z PHP-FPM|
|---|---|---|
|max_execution_time|120 s|165 s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|


#### Skrypty PHP

Po zalogowaniu się do hostingu przez SSH ruch wychodzący zostanie zablokowany ze względów bezpieczeństwa. Zalecamy więc korzystanie ze skryptów PHP. Aby uzyskać więcej informacji, zapoznaj się z naszym [przewodnikiem dotyczącym SSH](../hosting_www_ssh_na_hostingu/). Zapoznaj się z oficjalnym [podręcznikiem PHP](https://www.php.net/manual/en/function.system.php) dotyczącym wykonywania poleceń.

Możesz na przykład użyć funkcji *gethostbyaddr()*, aby pobrać nazwę hosta:

```php
1. <?php
2. echo gethostbyaddr($_SERVER["REMOTE_ADDR"]);
3. ?>
```


> [!warning]
> OVHcloud nie wymusza aktualizacji PHP. Klienci ponoszą pełną odpowiedzialność za bezpieczeństwo ich usług i regularną aktualizację zainstalowanych programów.
>


#### Informacje techniczne dotyczące Twojego hostingu

Zapoznaj się z odpowiednimi stronami informacyjnymi, aby sprawdzić, które biblioteki są dostępne dla Twojego hostingu.

Różne informacje na temat Twojego klastra znajdziesz pod tym linkiem: <https://webhosting-infos.hosting.ovh.net>

Zamień klaster wskazany w adresie URL na Twój klaster. Aby dowiedzieć się, na jakim klastrze hostingu znajduje się Twoja usługa, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz pozycję `Web Cloud`{.action}. Kliknij `Hosting`{.action}, po czym wybierz odpowiedni hosting. Następnie kliknij kartę `FTP - SSH`{.action}. Adres URL dostępu FTP do Twojego hostingu wskazuje numer klastra.

Aby poznać informacje techniczne dotyczące oferty Cloud Web, przejdź bezpośrednio na stronę <https://cloudweb-infos.hosting.ovh.net/>.

### Informacje o automatycznych kopiach zapasowych <a name="backup"></a>

> [!warning]
>
> OVHcloud zobowiązuje się do świadczenia usługi automatycznego tworzenia kopii zapasowych danych oraz udostępniania tych kopii zapasowych. Twoja odpowiedzialność spoczywa jednak na wdrożeniu własnej polityki przywracania i na określeniu punktów przywracania, kiedy uważasz to za stosowne.

#### przestrzeni dyskowej

Wszystkie nasze pakiety hostingowe są zainstalowane:

- w Gravelines (GRA) we Francji dysponują automatycznymi kopiami zapasowymi w dniu 1 / D-2 / D-3 / D-7 / D-14. Kopie te są również przechowywane w centrum danych w Roubaix (RBX) we Francji.

- w Beauharnois (BHS) w Kanadzie, dysponują automatycznymi kopiami zapasowymi w dniu 1 / D-2 / D-3 / D-7 / D-14. Kopie te są również przechowywane w centrum danych w Beauharnois (BHS) w Kanadzie.

Dowiedz się, jak [zalogować się do przestrzeni dyskowej](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/) lub [przywrócić przestrzeń dyskową hostingu](https://docs.ovh.com/pl/hosting/hosting_przywrocenie_kopii_zawartosci_ftp_w_aplikacji_filezilla/) w dokumentacji OVHcloud.

#### Baza danych / SQL

W przypadku baz danych na hostingu (zawartych w ofercie hostingu www) lub serwerów baz danych (Web Cloud Databases) dostępnych w Gravelines (GRA), we Francji i Beauharnois (BHS) w Kanadzie kopia zapasowa baz danych jest wykonywana codziennie. Kopie te są dostępne (poprzez [Panel klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} lub poprzez [API OVHcloud](https://api.ovh.com/). Kopie zapasowe są również przechowywane na innej infrastrukturze. Dane te są kopiowane w 3 różnych miejscach we Francji: Roubaix (RBX), Strasburg (SBG) i Gravelines (GRA). Polityka przechowywania kopii zapasowych wynosi 30 dni.

Dowiedz się, jak [Pobierz kopię zapasową bazy danych hostingu WWW](https://docs.ovh.com/pl/hosting/eksport-bazy-danych/) w naszej dokumentacji.

#### E-mail

Dla kont e-mail na hostingu (zawartych w ofercie hostingu WWW) wykonywana jest codzienna kopia automatyczna do innego centrum danych.

## Polityka wykorzystywania plików cookie

**Pliki cookie i elementy śledzące wykorzystywane w ramach świadczenia usługi hostingu współdzielonego**

Aby zapewnić prawidłowe funkcjonowanie witryn internetowych hostowanych na serwerze współdzielonym, na urządzeniach osób odwiedzających te witryny umieszczany jest plik cookie „SERVER ID”. Plik cookie „SERVER ID” zapewnia usługę równoważenia obciążenia ruchu przychodzącego między różnymi infrastrukturami wykorzystywanymi do hostowania witryny internetowej (OVHcloud Load Balancer). Umożliwia użytkownikowi pozostanie na tym samym serwerze przez całą sesję, co przekłada się na utrzymanie i zachowanie spójności doświadczeń użytkownika.

Plik cookie „SERVER ID” to plik zapisany na urządzeniu użytkownika, który wskazuje na instancję (serwer) infrastruktury, z którą użytkownik wchodzi w interakcję. Plik cookie jest anonimowy, to znaczy, że nie są wykorzystywane żadne dane osobowe użytkownika.

Plik cookie „SERVER ID” jest umieszczany na urządzeniu użytkownika na czas krótszy niż 24 godziny.

Ponieważ ten plik cookie jest anonimowy i niezbędny do działania usługi hostingu współdzielonego, nie wymaga on uprzedniego uzyskania zgody osoby odwiedzającej witrynę internetową w rozumieniu ogólnego rozporządzenia o ochronie danych osobowych (RODO). 

## Informacje dotyczące narzędzi statystycznych

**OVHcloud Web Statistics**

OVHcloud udostępnia klientom statystyki odwiedzin i pomiary odwiedzin witryn internetowych hostowanych w ramach usługi hostingu współdzielonego (dalej zwane „OVHcloud Web Statistics”). Narzędzie OVHcloud Web Statistics umożliwia przede wszystkim określenie strefy geograficznej osób odwiedzających witryny internetowe hostowane na serwerze współdzielonym, cechy ich urządzeń, odwiedzanych stron i kodów HTTP. Narzędzie OVHcloud Web Statistics jest domyślnie aktywowane w ramach usługi hostingu współdzielonego i można je dezaktywować na żądanie, kontaktując się z obsługą klienta. OVHcloud przetwarza dane, by móc udostępniać narzędzie „OVHcloud Web Statistics”.

Raporty z narzędzia OVHcloud Web Statistics są sporządzane na podstawie anonimizowanych danych o ruchu, takich jak adres IP i logi użytkowników hostowanych witryn internetowych w ramach usługi hostingu współdzielonego, adres URL zapytania, czas trwania zapytania i „useragent”.

Aby wspomniane wyżej dane mogły być wykorzystywane w ramach narzędzia OVHcloud Web Statistics, są one anonimizowane i grupowane za pomocą algorytmów obsługiwanych przez OVHcloud na własnej infrastrukturze. Szczególnie adres IP osoby odwiedzającej witrynę, obecny w danych o ruchu, jest pobierany w formie zanonimizowanej w celu jego przetworzenia i przeanalizowania do określenia jego geolokalizacji (ograniczonej do regionu). W związku z tym w narzędziu OVHcloud Web Statistics nie są przechowywane żadne dane osobowe umożliwiające bezpośrednią lub pośrednią identyfikację wyżej wymienionych osób odwiedzających.  

## Sprawdź również

[Logowanie do przestrzeni dyskowej hostingu](../logowanie-przestrzen-dyskowa-ftp-hosting-web//)

[Aktywacja protokołu HTTPS na stronie WWW za pomocą certyfikatu SSL](../aktywacja-https-ssl-na-stronie-WWW)

[Optymalizacja wydajności strony](../hosting_www_przewodnik_dotyczacy_optymalizacji_wydajnosci_strony/)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
