---
title: Instalacja kilku stron WWW na jednym hostingu
slug: konfiguracja-multisite-na-hostingu
excerpt: Dowiedz się, jak zainstalować kilka stron WWW na hostingu
section: Pierwsze kroki
---

**Ostatnia aktualizacja dnia 2018-03-23**

## Wprowadzenie

Istnieje możliwość instalacji kilku stron WWW na jednym hostingu. Dotyczy to zarówno domen zarejestrowanych w OVH, jak i u innych operatorów.

**Dowiedz się, jak zainstalować kilka stron WWW na Twoim hostingu.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovh.pl/hosting/){.external}
- Zarejestrowana [domena lub kilka domen](https://www.ovh.pl/domeny/){.external}
- Możliwość modyfikacji konfiguracji Twojej domeny (strefy DNS)
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}

## W praktyce

### Etap 1: zarządzanie opcją MultiSite

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}, kliknij `Hosting`{.action} na pasku usług po lewej stronie, następnie wybierz odpowiednią nazwę hostingu. Przejdź do zakładki `MultiSite`{.action}.

Tabela, która się wyświetla zawiera wszystkie nazwy domen dodanych do Twojego hostingu. Niektóre z nich zostały utworzone automatycznie podczas instalacji Twojego hostingu.

> [!primary]
>
> Jeśli w przypadku migracji strony WWW chcesz zapobiec przerwaniu ciągłości usługi, możesz wykonać kroki z [etapu 4: umieszczenie strony WWW w internecie](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/#etap-4-umieszczenie-strony-www-w-internecie){.external} w miejsce kroków z etapu 2. 
>

![MultiSite](images/access-multisite-ovh.png){.thumbnail}

### Etap 2: dodanie domeny lub subdomeny

Aby dodać nową domenę do Twojego hostingu, kliknij przycisk `Dodaj domenę lub subdomenę`{.action}, następnie wybierz domenę w oknie, które się wyświetli.

- **Dodaj domenę zarejestrowaną w OVH**:
Wyświetlają się jedynie domeny skonfigurowane w OVH i którymi zarządzasz w ramach konta klienta. Wybierz jedną domenę z listy, po czym kliknij `Dalej`{.action}.
Jeśli zaznaczyłeś tę opcję, przejdź do [etapu 3.1: dodanie domeny zarejestrowanej w OVH](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu//#etap-31-dodanie-domeny-zarejestrowanej-w-ovh){.external}.

- **Dodaj domenę zewnętrzną**:
W kolejnym etapie zostaniesz poproszony o wprowadzenie nazwy domeny. Pamiętaj, że musisz mieć uprawnienia do modyfikacji konfiguracji domeny (jej strefy DNS), aby proces dodania domeny został ukończony.
Jeśli zaznaczyłeś tę opcję, przejdź do [etapu 3.2: dodanie domeny zewnętrznej](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/#etap-32-dodanie-domeny-zewnetrznej){.external}.

![MultiSite](images/add-multisite-step1.png){.thumbnail}

### Etap 3.1: dodanie domeny zarejestrowanej w OVH

> [!primary]
>
> Ten etap ma zastosowanie jedynie, jeśli zaznaczyłeś opcję Dodaj domenę zarejestrowaną w OVH. W przypadku domeny zewnętrznej przejdź do części przewodnika zatytułowanej [etap 3.2: dodanie domeny zewnętrznej](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/#etap-32-dodanie-domeny-zewnetrznej){.external}.
>

W Panelu klienta kliknij `MultiSite`{.action}, a następnie `Dodaj domenę lub subdomenę`{.action}. Po wybraniu domeny zarejestrowanej w OVH należy wykonać jej konfigurację. W zależności od wykupionego w OVH [hostingu](https://www.ovh.pl/hosting/){.external} niektóre z oferowanych elementów mogą być dostępne, inne zaś nie.

|Informacja|Opis |
|---|---|
|Domena|Nazwa wybranej domeny wprowadzana jest automatycznie. Możesz określić subdomenę (np. blog.mypersonaldomain.ovh) i jednocześnie utworzyć jej wersję wraz z WWW (np. www.mypersonaldomain.ovh).|
|Katalog główny|Jest to folder, w którym będziesz umieszczać pliki wybranej domeny w Twojej przestrzeni dyskowej. Jeśli folder nie istnieje, zostanie automatycznie utworzony.|
|Włącz obsługę IPv6|Umożliwia aktywację protokołu IPv6 dla danej domeny. Dowiedz się więcej na [naszej stronie IP](https://www.ovh.pl/hosting/ip.xml){.external}.|
|SSL|Umożliwia korzystanie z bezpiecznego połączenia (HTTPS: //) z wybraną nazwą domeny. Dowiedz się więcej na [naszej stronie SSL](https://www.ovh.pl/ssl/){.external}. Aktywując SSL i CDN (Content Delivery Network), możesz również użyć protokołu **HTTP2**.|
|Włącz CDN|Umożliwia aktywację CDN dla wybranej domeny (zapisywanie w pamięci podręcznej elementów statycznych Twojej strony WWW, takich jak obrazy). Dowiedz się więcej na [naszej stronie CDN](https://www.ovh.pl/hosting/cdn.xml){.external}. Aktywując SSL i CDN, możesz również użyć protokołu **HTTP2**.|
|Krajowy adres IP|Umożliwia korzystanie z geolokalizowanego adresu IP (w wymienionych krajach) dla wybranej domeny. Dowiedz się więcej na [naszej stronie IP](https://www.ovh.pl/hosting/ip.xml){.external}.|
|Włącz firewall|Umożliwia aktywację zapory (analiza zapytań) dla danej domeny. Dowiedz się więcej na [naszej stronie ModSecurity](https://www.ovh.pl/hosting/mod_security.xml){.external}.|
|Rozdzielone logi|Umożliwia wydzielenie logów dotyczących wybranej domeny.  Wybierz z listy nazwę domeny, która będzie stanowiła dostęp do wydzielonych logów. Dowiedz się więcej na [naszej stronie Szczegółowe statystyki](https://www.ovh.pl/hosting/statystyki_stron.xml){.external}.|

Po uzupełnieniu informacji kliknij przycisk `Dalej`{.action}.

![MultiSite](images/add-multisite-step2.png){.thumbnail}

Sprawdź informacje, które wyświetlają się w podsumowaniu.

Po wybraniu domeny zarejestrowanej w OVH możesz przeprowadzić automatyczną konfigurację DNS. W tym celu zaznacz kratkę `Konfiguracja automatyczna (zalecana)`{.action}. Operacja ta może zostać przeprowadzona ręcznie w późniejszym czasie (pozostaw kratkę niezaznaczoną). Wyświetlą się informacje, które należy zmodyfikować.

Kliknij przycisk `Zatwierdź`{.action}, aby rozpocząć dodawanie domeny. Jeśli wybrałeś konfigurację ręczną, dowiedz się więcej w dokumentacji zatytułowanej [*Modyfikacja strefy DNS*](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}.

> [!primary]
>
> Dodanie domeny do Twojego hostingu może potrwać maksymalnie godzinę. Efekty modyfikacji domeny staną się widoczne po upływie 4-24 godzin ze względu na niezbędny czas propagacji.
>

Kiedy domena zostanie już dodana, przejdź do części przewodnika zatytułowanej [Etap 4: umieszczenie strony WWW w internecie](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/#etap-4-umieszczenie-strony-www-w-internecie){.external}.

### Etap 3.2: dodanie domeny zewnętrznej

> [!primary]
>
> Ten etap ma zastosowanie jedynie, jeśli zaznaczyłeś opcję Doda domenę zewnętrzną (która nie jest zarejestrowana w OVH lub którą nie możesz zarządzać poprzez Panel klienta OVH). W przypadku domeny zarejestrowanej w OVH postępuj zgodnie z [Etapem 3.1: dodanie domeny zarejestrowanej w OVH](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu//#etap-31-dodanie-domeny-zarejestrowanej-w-ovh){.external}.
>

W Panelu klienta kliknij `MultiSite`{.action}, a następnie `Dodaj domenę lub subdomenę`{.action}. Po wybraniu domeny zewnętrznej przejdź do opcji personalizacji.
Niektóre opcje zawarte w Twojej usłudze [hostingu](https://www.ovh.pl/hosting/){.external} nie mogą być aktywowane od razu po dodaniu domeny. Aby móc je aktywować, modyfikując parametry domeny, najpierw należy zakończyć ten etap.

|Informacja|Opis|
|---|---|
|Domena|Wprowadź nazwę domeny, którą chcesz dodać do Twojego hostingu. Możesz określić subdomenę (np. blog.mypersonaldomain.ovh) i jednocześnie utworzyć jej wersję wraz z WWW (np. www.mypersonaldomain.ovh). Pamiętaj, że musisz mieć uprawnienia do modyfikacji konfiguracji domeny (jej strefy DNS), aby proces dodania domeny został ukończony.|
|Katalog główny|Jest to folder, w którym znajduje się wybrana domena hostowana w Twojej przestrzeni dyskowej. Jeśli folder nie istnieje, zostanie automatycznie utworzony.|
|Włącz obsługę IPv6|Umożliwia aktywację protokołu IPv6 dla danej domeny. Dowiedz się więcej na [naszej stronie IP](https://www.ovh.pl/hosting/ip.xml){.external}.|

Po uzupełnieniu informacji, kliknij przycisk `Dalej`{.action}.

![MultiSite](images/add-multisite-external-step1.png){.thumbnail}

Sprawdź informacje, które wyświetlają się w podsumowaniu.

Po wybraniu domeny zewnętrznej zostaniesz poproszony o modyfikację jej konfiguracji. Zanotuj informacje, które się wyświetlą (możesz je również odszukać w razie potrzeby później), następnie kliknij `Zatwierdź`{.action}.

Konfiguracja domeny:

|Pole|Gdzie znaleźć informację?|Opis|
|---|---|---|
|TXT|Zakładka `MultiSite`{.action}, następnie kliknij **Konfiguracja tokena ovhcontrol**|Umożliwia OVH sprawdzenie, czy dodanie każdej domeny zewnętrznej jest legalne. Utwórz pole TXT z subdomeną **ovhcontrol** (na przykład: ovhcontrol.mypersonaldomain.ovh).|
|A i AAAA|Zakładka `Informacje ogólne`{.action}, następnie **IPv4** i **IPv6**|Umożliwia Twojej domenie wyświetlanie strony WWW, którą zamieścisz w Internecie na Twoim hostingu.|

Po zatwierdzeniu domeny zostaje ona tymczasowo dodana. Teraz należy zmodyfikować jej konfigurację (jej strefę DNS), korzystając z interfejsu dostawcy, który nią zarządza.  Efekty modyfikacji domeny staną się widoczne po upływie 4-24 godzin ze względu na niezbędny czas propagacji.

> [!warning]
>
> Utworzenie subdomeny **ovhcontrol** jest niezbędne, aby dodanie domeny mogło zostać w pełni zrealizowane. Jeśli modyfikacja nie zostanie przeprowadzona, dodanie domeny zostanie anulowane.
>

Kiedy domena jest już dodana, a jej konfiguracja zmodyfikowana, przejdź do części przewodnika [Etap 4: umieszczenie strony WWW w Internecie](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/#etap-4-umieszczenie-strony-www-w-internecie){.external}.

### Etap 4: umieszczenie strony WWW w Internecie

Po dodaniu domeny wystarczy umieścić w Internecie powiązaną z nią stronę WWW.

Stronę WWW możesz zbudować w oparciu o gotowy szablon przy użyciu modułu dostarczanego przez OVH. O modułach dowiesz się więcej z przewodnika [*Automatyczna instalacja strony WWW za pomocą modułu CMS*](https://docs.ovh.com/pl/hosting/hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/){.external}.

Jeśli chcesz zainstalować kilka stron WWW na Twoim hostingu, wykonaj tę operację kilka razy.

Zalecamy nie instalować na jednym hostingu zbyt wielu stron. Im większa liczba zainstalowanych stron, tym większe zużycie przypisanych do danego hostingu zasobów. Na [stronie z ofertą](https://www.ovh.pl/hosting/){.external} usług hostingowych znajdziesz informację o liczbie stron WWW, które możesz zainstalować.

## Sprawdź również

[Automatyczna instalacja strony WWW za pomocą modułu CMS](https://docs.ovh.com/pl/hosting/hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/){.external}

[Modyfikacja strefy DNS ](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.