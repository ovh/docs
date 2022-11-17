---
title: "Moja strona jest powolny. Co robić? " 
excerpt: "Dowiedz się, skąd pochodzą opóźnienia Twojej strony WWW i jak je rozwiązać"
slug: slow-website-fix
section: Diagnostyka
order: 01
---

**Ostatnia aktualizacja z dnia 17-11-2022**
 
> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

## Wprowadzenie

Spowolnienie na Twojej stronie WWW spowodowane jest nadmiernie długim obciążeniem, dzięki któremu będziesz mógł wyświetlić wszystkie lub niektóre jej części. 

Jeśli załadowanie jest zbyt długie, zapytanie wykonane przy użyciu przeglądarki może osiągnąć maksymalny czas wykonywania operacji dozwolony przez serwer, na którym znajduje się Twój hosting. W tym przypadku serwer zwraca kod "**504 Gateway Timeout**", aby poinformować odwiedzającego, że osiągnięto zmienną "max_execution_time", co również zatrzymuje wykonanie żądanego zapytania.

Powolności mają dwa źródła:

- przeciążenie infrastruktury hostingowej, na której hostowana jest Twoja strona;
- zbyt długie lub zbyt ciężkie zapytanie do wykonania na infrastrukturze współdzielonej, na której jest zainstalowana Twoja strona. 

Ogromna większość powolnego czasu powstaje na stronie WWW, a nie na hostingu. Stworzyliśmy ten przewodnik, aby jak najlepiej pomóc Ci w tej sytuacji.

W rzadkich przypadkach informacje o powolnym wyświetlaczu mogą pochodzić od Twojego dostawcy internetu lub ze zbyt niskiej przepustowości łącza internetowego. Sprawdź połączenie sieciowe **przed**, aby kontynuować diagnostykę.

**Dowiedz się, jak zdiagnozować przyczyny opóźnienia Twojej strony WWW i podjąć odpowiednie działania.**

> [!primary]
>
> **Po zakończeniu wszystkich testów opisanych w tym przewodniku**, jeśli spowolnienie wynika z infrastruktury hostingowej OVH, przypominamy, że jest współdzielone między kilku użytkowników.
>
> Użytkownicy dzielą się zasobami infrastruktury hostingu współdzielonego i zarządzają swoimi stronami www. Jeśli któraś z nich nadmiernie wypytuje infrastrukturę wirtualną, może to mieć wpływ na inne hostingi znajdujące się na tej samej infrastrukturze.
>
> Nasza oferta hostingu współdzielonego nie dysponuje "Service Level Agreement" (SLA). 
>
> Jeśli potrzebujesz usługi ze współczynnikiem dostępności SLA większym niż 99%, zalecamy rozważenie korzystania z [Prywatnego Serwera Wirtualnego (VPS)](https://www.ovhcloud.com/pl/vps/) lub [Serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/).
>
> Ponadto wydajność infrastruktury hostingu współdzielonego OVHcloud jest monitorowana 24 godziny na 24 i 7 dni na 7. W celu zapewnienia wysokiego poziomu dostępności oraz, w razie potrzeby, szybkiego przywrócenia usług w przypadku stwierdzonego przeciążenia.*
>

## Wymagania początkowe

- Posiadanie strony internetowej zainstalowanej w ramach jednej z naszych ofert[hosting OVHcloud](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/). Niestety nie będziemy w stanie udzielić Ci wsparcia **w przypadku, gdy infrastruktura, na której hostowana jest Twoja oferta hostingu współdzielonego, nie jest istotna**. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

> [!success]
>
> W tym przewodniku zalecamy zapoznanie się z wynikami diagnostyki. Wyniki te będą bardzo przydatne w rozwiązywaniu Twojej sytuacji, niezależnie od źródła powolnego tempa.
>

### Zrozumieć pojęcie Time To First Byte (TTFB)

*Time To First Byte* (TTFB) to czas, jaki hosting www będzie pobierał, aby przenieść pierwszy bajt danych do przeglądarki internetowej w odpowiedzi na zapytanie przeglądarki internetowej dotyczące wyświetlania strony.

Jeśli nie występuje przeciążenie infrastruktury hostingu współdzielonego i Twoja strona WWW jest maksymalnie zoptymalizowana, TTFB nie obsługuje 800 ms.

**Wysoki TTFB nie oznacza automatycznie, że opóźnienia wynikają z hostingu.**

Do obsługi Content Managment System (CMS), takich jak WordPress, Joomla!, PrestaShop lub Drupal, strona, do której używasz z przeglądarki internetowej, może generować wewnętrzne dodatkowe zapytania na hostingu. Twój hosting nie będzie odsyłał do przeglądarki, dopóki wszystkie zapytania wewnętrzne nie zostaną ukończone.

> **Przykład**:
>
> W przeglądarce internetowej możesz wyświetlić stronę główną Twojej strony WWW. Zapytanie wywoła domyślnie plik "**index.php**" Twojej strony WWW.
>
> Po wpłynięciu zapytania na plik "**index.php**" jest on uruchamiany przez serwer www hostingu. 
>
>W trakcie wykonywania pliku "**index.php**" pobiera informacje z innych plików tworzących Twoją stronę WWW lub z elementów znajdujących się w bazie danych. 
>
>Każde z tych żądań generuje wewnętrzne zapytanie dotyczące Twojej usługi hostingowej. 
>
>Plik "**index.php**" będzie czekał na wynik wszystkich żądań wewnętrznych **przed**, aby przesłać pierwszy bajt danych do przeglądarki internetowej.
>
>Jeśli Twój plik "**index.php**" generuje "powolne" lub ciężkie zapytania do wykonania, TTFB będzie wówczas wysoki, a Twoja strona będzie wyświetlać się kilka sekund. Wydajność Twojego hostingu nie jest zatem istotna.

Narzędzia diagnostyczne online pozwalają pobrać TTFB z Twojego hostingu. Jednak większość z nich działa jak przeglądarki internetowe, więc ich wyniki są relatywistyczne.<br>
Narzędzia te nie są bowiem w stanie uwzględnić żądań wewnętrznych, o które wystąpił plik wywoływany przez przeglądarkę, jak w powyższym przykładzie z plikiem "**index.php***".

### Etap 1 - Sprawdź, czy opóźnienia wynikają z hostingu lub strony WWW

W tym pierwszym kroku sprawdzisz, czy powstały opóźnienia:

- lub
- infrastrukturą hostingu, na której znajduje się Twoja strona.

Wszystkie diagnozy z etapu 1 muszą być wykonane **bez wyjątku**, aby określić, czy spowolnienie wynika z usług hostingu lub strony WWW hostowanej na hostingu.

#### 1.1 - Sprawdź stan usług OVHcloud

Aby mieć pewność, że Twoje usługi (hosting współdzielony **i** baza danych) nie podlegają konserwacji lub awarii, pobierz informacje o klastrze i przędz z hostingu współdzielonego oraz ogólne informacje dotyczące bazy danych. Następnie możesz sprawdzić ich status na stronie [status.ovhcloud.com](https://web-cloud.status-ovhcloud.com/).

Aby dowiedzieć się, gdzie znajduje się Twój hosting, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Web Cloud`{.action}, kliknij przycisk `Hosting`{.action} i wybierz odpowiedni hosting. W zakładce `Informacje ogólne`{.action} znajdziesz `centrum` danych hostingu współdzielonego oraz `filer`, w którym znajduje się ono.

![Pobierz Filer](images/DropFilerCluster1.png){.thumbnail}

Następnie kliknij zakładkę `MultiSite{.action}, aby pobrać numer klastra, na którym znajduje się Twój hosting.

![Pobranie klastra](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> Jeśli problem lub konserwacja są zgłaszane w infrastrukturze, na której znajduje się Twój hosting, postępuj zgodnie z instrukcjami podanymi w tym dokumencie przez naszych administratorów. **Nie musisz wykonywać żadnych innych operacji na Twoim poziomie**.
>
> Możesz się zarejestrować na swój adres e-mail w celu zgłoszenia awarii lub utrzymania, aby otrzymać e-mail z powiadomieniem o postępach operacji.
>
> Po oznaczeniu statusu zdarzenia lub jego konserwacji jako **rozwiązany**, ustabilizowanie nagromadzonego obciążenia może wymagać czasu **3 godzin** maksymalnie po powiadomieniu o rozwiązaniu problemu, aby w pełni się wycofać.
>

Jeśli nie zgłoszono żadnego problemu lub nie zgłoszono żadnych prac konserwacyjnych, kontynuuj diagnostykę.

#### 1.2 - Przetestuj stronę WWW na kilku urządzeniach

Przetestuj Twoją stronę WWW za pomocą innego urządzenia/komputera, a następnie z innego punktu dostępu do Internetu. Przy każdej próbie opróżniania pamięci podręcznej przeglądarki, aby strona WWW była ładowana bezpośrednio z poziomu hostingu.

#### 1.3 - Przetestuj hosting przy użyciu pliku niezależnego od Twojej strony WWW

Umieść w katalogu głównym Twojej strony WWW[przestrzeń dyskowa FTP Twojego hostingu](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/) plik, który nazwiesz `phpinfo.php`.

W tym pliku wpisz następujący kod:

```bash
<?php
phpinfo();
?>
```

> [!warning]
>
> W niektórych przypadkach pliki "**.htaccess**" znajdujące się w katalogach/folderach znajdujących się na górze lub na tym samym poziomie, w jakim umieściłeś plik "**phpinfo.php**" mogą mieć wpływ na wyświetlanie w przeglądarce internetowej "**phpinfo.php***". 
>
> Operacje na pliku "**.htaccess**" mogą mieć wpływ na wyświetlanie strony. W przypadku trudności z realizacją tego zadania, należy skontaktować się z [wyspecjalizowanym dostawcą] (https://partner.ovhcloud.com/pl/).
>
> Jeśli nie wyświetla się i **tylko dla zaawansowanych użytkowników**, należy zmienić nazwę plików "**.htaccess**" na "**.htaccess_OLD***", aby serwer nie wykonywał już testu. Zmień nazwę poprawnie po zakończeniu diagnostyki.
>

**Przykład**: jeśli nazwa domeny umożliwiająca dostęp do Twojej strony WWW to "domain.tld", a plik "**phpinfo.php**" został umieszczony na katalogu głównym Twojej strony WWW, będzie on dostępny pod linkiem: `http://domain.tld/phpinfo.php\` (lub `https://domain.tld/phpinfo.php`)

> [!primary]
>
> Jeśli wywołanie pliku "**phpinfo.php**" wyświetla **natychmiast** tabelę konfiguracyjną, oznacza to, że zwolnienia nie pochodzą z hostingu współdzielonego, na którym znajduje się Twoja strona WWW. W przeciwnym razie plik ten wyświetlałby się tak wolno, jak inne strony. 
>
> Oznacza to, że jeśli powolne tempo jest obecne tylko na niektórych stronach lub zawartości strony www, oznacza to, że hosting **nie jest przyczyną powolnego działania** na Twojej stronie WWW.
>

#### 1.4 - Przetestuj połączenie z bazą danych:

Zaloguj się do bazy danych, postępując zgodnie z **etap 3** w przewodniku [dotyczącym tworzenia wspólnej bazy danych](https://docs.ovh.com/pl/hosting/tworzenie-bazy-danych/).

Jeśli korzystasz z bazy danych w ofercie **CloudDB**, zapoznaj się z naszym przewodnikiem [dotyczącym połączenia z bazą danych w usłudze Cloud DB](https://docs.ovh.com/pl/clouddb/polaczenie-bazy-danych-serwer-bdd/).

Jeśli logowanie się powiodło się, otrzymasz następujący interfejs:

![PHPMyAdmin](images/pma.png){.thumbnail}

> [!warning]
>
> Jeśli wystąpi błąd, zapoznaj się z naszą dokumentacją dotyczącą [błędów występujących w bazie danych](https://docs.ovh.com/pl/hosting/blad-baz-danych/). Następnie skorzystaj z powyższego przewodnika, aby poprawić Twoją sytuację, po czym spróbuj ponownie zalogować się do bazy danych.
>

#### 1.5 - Interpretacja wykonanych diagnoz

**Przypadek nr 1**

Do Twojej sytuacji stosuje się następujące stwierdzenia **wszystkie**:

- co najmniej jedna strona, skrypt lub plik (w tym plik "**phpinfo.php**") szybko załadowała się podczas testów w etapie 1;
- połączenie z Twoją bazą danych zostało poprawnie wykonane podczas testów opisanych w etapie 1.

> Oznacza to, że powolne działania pochodzą bezpośrednio ze skryptów tworzących Twoją stronę WWW. Możesz przejść bezpośrednio do [etap 2](#step2) i postępować zgodnie z instrukcjami optymalizacyjnymi, aby rozwiązać Twoją sytuację.

**Przypadek nr 2**

Do Twojej sytuacji stosuje się następujące stwierdzenia **wszystkie**:

- **nie zgłoszono żadnych awarii i prac konserwacyjnych** ani nie zgłoszono ich jako **usunięto je** przed upływem trzech godzin w przypadku usług hostingowych na naszej stronie [status-ovhcloud.com](https://web-cloud.status-ovhcloud.com/);
- **cas nr 1** nie odpowiada Twojej konfiguracji.

> Konieczne będzie przeprowadzenie dochodzenia po stronie OVHcloud. Skontaktuj się z naszymi usługami wsparcia w zakresie rozwiązań internetowych, aby potwierdzić z Tobą przyczyny spowolnień, które napotykasz.

### Etap 2 - podaj źródło (źródła), które generuje powolne tempo na stronie internetowej <a name="step2"></a>

Na tym etapie już wiesz, że spowolnienia są generowane przez strony/skrypty/pliki, które tworzą Twoją stronę WWW.

> [!warning]
>
> Jeśli masz trudności z wykonaniem kolejnych działań, możesz skontaktować się z naszym [wyspecjalizowanym usługodawcą](https://partner.ovhcloud.com/pl/). OVHcloud nie będzie wspierać rozwoju i/lub optymalizacji zawartości Twojej strony WWW.
>

Poniżej znajdziesz działania, które należy przeprowadzić, aby zidentyfikować źródło(-a) powolnego czasu i zoptymalizować Twoją stronę WWW.

#### 2.1 - Sprawdź konfigurację hostingu

Sprawdź framework PHP, wersję PHP i środowisko wykonawcze używane na Twoim hostingu. Zapoznaj się z naszym przewodnikiem dotyczącym [konfiguracji Twojego hostingu](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/).

Jeśli korzystasz z przestarzałej wersji PHP na Twoim hostingu, silnik "**PHP CGI**" i/lub środowisko "**legacy**" i **jeśli Twoja strona WWW jest kompatybilna**, skorzystaj z silnika "**PHP**" (PHP FPM), środowisko "**stable**" lub "**stable64**" z najnowsza wersja PHP.

Aby porównać dostępne wersje PHP w zależności od używanego środowiska uruchomieniowego, sprawdź **etap 2** w przewodniku dotyczącym [konfiguracji wersji PHP na Twoim hostingu](https://docs.ovh.com/pl/hosting/konfiguracja_php_na_hostingu_www_ovh_2014/).

Korzystanie z najnowszej wersji PHP, środowisko uruchomieniowe "**stable**" lub "**stable64**" z silnikiem "**PHP**" (PHP FPM) sprawi, że Twoja strona będzie płynniejsza i szybsza. Do wykonywania swoich zadań silnik "**PHP**" (PHP FPM) może być nawet 50 razy wydajniejszy od silnika "**PHP CGI**".

#### 2.2 - Analizuj połączenia wychodzące / połączenia TCP zrealizowane przez Twój hosting

Połączenia wychodzące są bardzo energochłonne pod względem zasobów. Jeśli te połączenia są liczne, nie są poprawne lub są aktywne zbyt długo, monopolizują one tak wiele zasobów na poziomie hostingu, że pozostaje ich wystarczająco dużo, aby reszta Twojej strony WWW działała w normalnych warunkach. 

Prowadzi to do spowolnień lub nawet do kodów "504 gateway timeout".

Aby przeanalizować połączenia wychodzące z Twojego hostingu, sprawdź logi **OUT** tego hostingu. Zapoznaj się z naszą dokumentacją dotyczącą [sprawdzanie logów hostingu](https://docs.ovh.com/pl/hosting/hosting_statystyki_i_logi_strony/).

Jeśli zauważysz, że na Twoim hostingu istnieje wiele połączeń wychodzących, porównaj logi **OUT** z Twoimi logami **WEB** za pomocą znacznika czasu tych logów. Dzięki temu możesz zidentyfikować skrypt lub skrypty odpowiedzialne za tę sytuację.

Jeśli korzystasz z Content Management System (CMS) takiego jak WordPress, Joomla!, PrestaShop lub Drupal, podaj wtyczkę (wtyczki) i/lub temat generujący ten strumień połączeń wychodzących.

#### 2.3 - Analizuj strumień zapytań HTTP wykonanych na Twoim hostingu:

Aby przeprowadzić tę operację, zapoznaj się z logami **WEB** Twojego hostingu w dokumentacji dotyczącej hostingu [sprawdź logi](https://docs.ovh.com/pl/hosting/hosting_statystyki_i_logi_strony/).

Największe zapytania w zakresie zasobów to zapytania HTTP typu **POST**, a następnie zapytania typu **PUT**. Te ostatnie dokonują odpowiednio zmian i wstawiania.

Zapytania HTTP typu **GET** pobierają tylko elementy zainstalowane na hostingu, aby wyświetlić je w przeglądarce internetowej. Są one zwykle mało zużyte pod względem zasobów. Mogą one jednak powodować spowolnienia, jeżeli kilkaset z nich jest wymaganych co sekundę w ciągu kilku minut.

Jeśli w Twoich logach pojawi się jedna z poniższych sytuacji:

- zapytania typu **POST** lub **PUT** są wykonywane kilka razy na minutę i na stałe;
- zapytania **POST** lub **PUT** są wykonywane kilka razy na minutę na tym samym pliku.

Zidentyfikuj i zoptymalizuj odpowiedni skrypt/plik, aby zmniejszyć strumień zapytań HTTP.

Im mniejsza liczba zapytań, tym mniej zasobów przypisanych do hostingu.

> [!success]
>
> Do identyfikacji elementów długich, które można załadować na jednej ze stron Twojej strony WWW, można na przykład przeprowadzić analizę sieci za pomocą przeglądarki **Firefox**. 
>
> W tym celu naciśnij klawisz `F12`, gdy jesteś w przeglądarce Firefox, a następnie wybierz kartę `Sieć`. Przeładuj swoją stronę www za pomocą klawiszy `Ctrl + Maj + R`, aby narzędzie wyświetlało zapytania wykonane w celu załadowania strony. Wyszukaj najdłuższe elementy do załadowania i następnie zoptymalizuj.
>
>![Analiza sieci Firefox](images/F12.png){.thumbnail}
>

Aby zmniejszyć przepływ zapytań do każdego załadowania strony, możesz również uruchomić usługę Content Delivery Network (CDN). Pozwoli to na umieszczenie w pamięci cache statycznej zawartości Twojej strony WWW. Twój hosting WWW będzie mniej obciążony i będzie dysponował większą liczbą zasobów do obsługi pozostałych zapytań, które nie mogą być zapisane w pamięci cache.

> [!primary]
>
> OVHcloud oferuje kilka [oferty CDN](https://www.ovhcloud.com/pl/web-hosting/options/). Jeśli chcesz korzystać z tej usługi lub ją włączyć dla Twojego hostingu, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), a następnie zapoznaj się z naszym przewodnikiem dotyczącym [korzystania z usługi CDN OVHcloud](https://docs.ovh.com/pl/hosting/przewodnik_dotyczacy_uslugi_geocache_na_hostingu_www/).
>

#### 2.4 - zoptymalizuj bazę danych

> [!warning]
>
> Operacje, które wykonujesz w bazie danych mogą mieć nieodwracalne konsekwencje, jeśli nie są przeprowadzane metodycznie i prawidłowo. Skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/), jeśli nie masz pewności co do działań, jakie należy przeprowadzić. 
>

Sprawdź, czy do Twojej bazy danych wykonywana jest znaczna liczba zapytań.<br>
Sytuacja ta może spowodować nadmierne obciążenie i doprowadzić do spowolnienia, a nawet do powstania kodów "504 Gateway Timeout".

Sprawdź również rozmiar tabel znajdujących się w Twojej bazie danych.<br>
Jeśli tabela jest regularnie wywoływana i jest obszerna, ładowanie tabeli może odbywać się wolniej i generować powolne zapytania.<br>
Nagromadzenie tych powolnych zapytań może spowodować spowolnienie dostępu do obiektu lub nawet kod "504 Gateway Timeout".

Jeśli korzystasz z dużych tabel lub strumieni zapytań do bazy danych, zoptymalizuj tabele i wprowadź rozwiązania pozwalające na zmniejszenie przepływu zapytań do bazy danych.

Jeśli zauważysz, że w Twojej bazie danych są niewykorzystane lub przestarzałe dane, usuń bazę, aby na co dzień poprawić wydajność.

#### 2.5 - Optymalizacja obrazów

Jeśli na przykład Twoja strona WWW wyświetla obraz w rozdzielczości "1000x2000" i wyświetla się on maksymalnie w rozdzielczości 100x200 pikseli na stronie WWW, powoduje to konieczność zwiększenia zasobów po stronie hostingu, co może zostać zoptymalizowane.

Serwer będzie musiał wykonać operację zmiany rozmiaru obrazu i wyświetlić go na stronie internetowej w wymaganym rozmiarze.

Jeśli Twoja strona WWW zawiera dużo obrazów, może to oznaczać zużycie zasobów serwera dedykowanego.

Zmień rozmiar wszystkich obrazów, aby zminimalizować zużycie zasobów.

#### 2.6 - Zoptymalizuj pozostałą część Twojej strony WWW

Zapoznaj się z naszym przewodnikiem dotyczącym [optymalizacji wydajności dla Twojej strony internetowej](https://docs.ovh.com/pl/hosting/hosting_www_przewodnik_dotyczacy_optymalizacji_wydajnosci_strony/).

Możesz sprawdzić ścieżki optymalizacji dla Twojej strony, analizując ją na stronie [gtmetrix.com](https://gtmetrix.com){.external} (strona ta nie jest powiązana z OVHcloud).

> [!success]
>
> Bez względu na powolne tempo rozwoju Twojej strony WWW zostanie zoptymalizowane, tym lepsze będzie jej naturalne pozycjonowanie w wyszukiwarkach.
>

### Podsumowanie

Jeśli Twój hosting WWW i baza danych **nie są przedmiotem dyskusji** i Twoja strona WWW będzie się powoli rozwijać, pomimo realizacji **wszystkich etapów** tego przewodnika, prawdopodobnie oznacza to, że oferta, której używasz do hostowania Twojej strony WWW nie jest lub jest bardziej odpowiednia dla Twojego projektu. 

Możesz rozważyć ofertę [hostingu współdzielonego](https://www.ovhcloud.com/pl/web-hosting/) lub infrastrukturę dedykowaną, taką jak [Serwer Wirtualny Prywatny (VPS)](https://www.ovhcloud.com/pl/vps/) lub [Serwer dedykowany](https://www.ovhcloud.com/pl/bare-metal/). 

## Sprawdź również <a name="go-further"></a>

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 
