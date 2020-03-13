---
title: 'Optymalizacja wydajności witryny internetowej'
excerpt: 'Dowiedz się, jak analizować opóźnienia w witrynie internetowej i ulepszyć jej działanie'
slug: hosting_www_przewodnik_dotyczacy_optymalizacji_wydajnosci_strony
section: 'Przekierowania i uprawnienia dostępu'
legacy_guide_number: g1396
---

**Ostatnia aktualizacja dnia 2020-02-05**

## Wprowadzenie
Ten przewodnik jest przeznaczony dla klientów, którzy chcą poprawić wydajność witryny internetowej.
Zawiera podstawowe informacje o tym, co wpływa na wydajność witryn internetowych.

**Dowiedz się, jak poprawić wydajność witryny internetowej.**

> [!warning]
> W tym przykładzie zastosowania opisano korzystanie z rozwiązań OVHcloud wraz z narzędziami zewnętrznymi oraz działania do wykonania w konkretnym kontekście. Działania te trzeba dostosować do poszczególnych sytuacji. W przypadku trudności z wykonaniem działań należy się skontaktować z dostawcą konkretnych usług i/lub omówić problem ze społecznością na stronie <https://community.ovh.com/en/>. OVHcloud nie może zapewnić wsparcia technicznego w tym zakresie.

## Wymagania początkowe
- [plan hostingu WWW OVHcloud](https://www.ovh.pl/hosting/){.external}
- e-mail potwierdzający skonfigurowanie planu hostingu WWW
- [nazwa domeny](https://www.ovh.pl/domeny/){.external} umożliwiająca dostęp do witryny internetowej
- dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}

## W praktyce

### Krok 1: zdefiniowanie zakresu

#### Pytania, które należy sobie zadać:
Jeśli witryna internetowa działa powoli, odpowiedzi na poniższe pytania pomogą zawęzić zakres poszukiwania przyczyn.

1. **Kiedy witryna internetowa zaczęła działać powoli?**
Odpowiedź pomoże w ustaleniu, czy opóźnienie jest spowodowane niedawną modyfikacją strony internetowej. na przykład nieprawidłową optymalizacją nowej wtyczki lub nową kompozycją, która mogłoby powodować wysyłanie wielu zapytań wychodzących i spowalniać działanie witryny.
2. **Czy problem pojawia się od czasu do czasu, czy też występuje stałe spowolnienie?**
Warto sprawdzić, o jakiej porze dnia witryna internetowa działa wolniej, a następnie określić, czy jest to związane z dużym ruchem na witrynie lub wykonywaniem innych zadań hostingu w tym samym czasie.
3. **Czy problem dotyczy całej witryny internetowej, czy tylko jej części?**
Jeśli nie cała witryna, ale tylko jedna strona internetowa działa powoli, warto przeanalizować tę konkretną stronę i sprawdzić, które żądania lub skrypty mogą powodować opóźnienia.
4. **Czy pojawia się komunikat o błędzie? Jeśli tak, jakiego typu?**
Sprawdź, czy pojawiają się błędy. Umożliwi to identyfikację źródła opóźnienia. Aby dowiedzieć się więcej o występujących błędach w hostingu, zajrzyj do logów.

Odpowiedzi na te pytania pomogą skoncentrować się na konkretnych kwestiach i określić obszary do ulepszenia.

Do korzystania z systemów zarządzania treścią (CMS), takich jak WordPress, PrestaShop, Joomla! czy Drupal, jest potrzebnych wiele bibliotek, aby jedna strona internetowa mogła obsłużyć wiele elementów.
Przeglądarki internetowe muszą załadować i odczytać te wszystkie elementy.
Na [stronie produktu](https://www.ovh.pl/hosting/){.external} przestawiamy oferty hostingu WWW zalecane do wskazanych powyżej systemów CMS.

Więcej informacji na temat wyboru właściwego planu znajdziesz na [tej stronie](https://www.ovh.pl/hosting/jaki_hosting_wybrac.xml){.external}.


### Krok 2: sprawdzenie wersji PHP
Na wydajność witryny internetowej znacząco może wpłynąć korzystanie ze zgodnej z nią, najnowszej wersji języka PHP.
Aby sprawdzić, czy witryna jest kompatybilna z najnowszą wersją PHP, zapoznaj się z [oficjalną dokumentacją języka PHP](https://php.net/eol.php){.external}.

**PHP-FPM**

Aby przyspieszyć odpowiedzi PHP i radykalnie zmniejszyć obciążenie procesora, dostosowaliśmy moduł PHP-FPM do naszej infrastruktury WWW.
Testy wykazały, że wydajność zwiększyła się nawet **siedmiokrotnie** w porównaniu ze starszym mechanizmem.

W przypadku korzystania z mechanizmu PHP-FPM zmieniają się niektóre zmienne serwerów:

|Zmienna|bez PHP-FPM|z PHP-FPM|
| ------------- |:-------------:| -----:|
|max_execution_time|120 s|300 s|
|max_input_vars|2000|16000|
|memory_limit|128M|512M|

Informacje o aktualizacji wersji PHP zawiera [ten przewodnik](https://docs.ovh.com/pl/hosting/konfiguracja_php_na_hostingu_www_ovh_2014/){.external}.

Aby zmienić wersję PHP-FPM na _stabilną_ lub uzyskać szczegółowe informacje o bardziej zaawansowanych opcjach hostingu WWW, zapoznaj się z [tym przewodnikiem](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/){.external}.

Plik _.ovhconfig_ działa w katalogu głównym hostingu albo w podkatalogu poziomu 1 (na przykład: _/www/_), ale nie w katalogach poziomu drugiego lub wyższego (na przykład: _/www/test/_, _/www/test/test2/_).


### Krok 3: sprawdzenie treści multimedialnej
Podczas korzystania z witryny internetowej cała jej treść musi zostać pobrana przez przeglądarkę.

Może to stanowić szczególny problem w przypadku witryn internetowych, które nie są zoptymalizowane pod kątem urządzeń mobilnych.

Dobrym sposobem na skrócenie czasu ładowania strony jest używanie skompresowanych obrazów i plików wideo.
Treść można zoptymalizować przy użyciu różnych algorytmów i narzędzi. Istnieją też wtyczki do najpopularniejszych systemów CMS.
Można więc wybrać sposób, który najlepiej zaspokoi konkretne potrzeby.

Więcej informacji na ten temat zawiera poniższy krok 5.

### Krok 4: optymalizacja skryptów
Aby znaleźć źródło opóźnień, przejrzyj wykresy wykorzystania zasobów hostingu (więcej informacji poniżej). Następnie sprawdź w logach wpisy z okresów, w których wystąpiło szczytowe wykorzystanie.

Logi, statystyki i wykresy są dostępne bezpośrednio w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}.

Dostęp do logów:
\- Kliknij domenę w sekcji `Hosting`{.action}.
\- Kliknij kartę `Więcej +`{.action}, a następnie wybierz pozycję `Statystyki i logi`{.action}.
\- Kliknij wyświetlone linki, aby uzyskać dostęp do _statystyk odwiedzin witryny internetowej_ lub _logów_.
![logs](images/logs_highlighted.png){.thumbnail}


Dostęp do wykresów:
\- Kliknij domenę w sekcji `Hosting`{.action}.
\- W sekcji `Informacje ogólne`{.action} przewiń do dołu strony, gdzie znajdują się wykresy wykorzystania hostingu.
\- Wybierz typ informacji i zakres dat, dla których chcesz wyświetlić dane.
![graphs](images/graphs_highlighted.png){.thumbnail}

Jakie typy informacji można wyświetlić?

- **Żądania HTTP**: wskazują średnią liczbę zapytań na witrynie internetowej. Zapytania są klasyfikowane według statusu HTTP — jako kody 2xx/3xx/4xx/5xx.

- **Średni czas odpowiedzi**: dotyczy średniego czasu odpowiedzi strony. Rozróżniane są strony dynamiczne i statyczne.

- **Przekroczenie progu zasobów**: wykres pokazuje użycie procesów worker PHP. Stanowi wskazówkę, czy byłaby potrzebna inna oferta hostingu WWW. Korzystając z mechanizmu PHP-FPM, można ograniczyć użycie procesów PHP worker.

- **Użycie procesora**: pokazuje użycie procesora witryny internetowej. Pomaga w wykryciu potencjalnego przeciążenia procesora.

- **Połączenia wychodzące**: umożliwia sprawdzenie wychodzących żądań TCP realizowanych przez serwera. Jeśli na przykład dostęp do witryny internetowej uzyskają hakerzy, serwer może im posłużyć do atakowania innych witryn zewnętrznych. Sprawdzić można też wywołania zewnętrzne innych modułów, takich jak Facebook, Twitter itp. Zmniejszenie liczby wychodzących żądań TCP wpływa na skrócenie czasu ładowania, ponieważ jeśli odpowiedzi serwera na żądania pobrania treści zajmują czas, załadowanie witryny trwa dłużej.

- **Polecenia FTP**: pokazuje różne polecenia FTP używane w hostingu, Na przykład udane i nieudane próby zalogowania, pobranie, przesłanie lub usunięcie plików.

Poniższe dwie kategorie są widoczne tylko wtedy, gdy w ramach oferty hostingu korzystasz z bazy danych.
Aby je wyświetlić, wybierz nazwę bazy danych i okres.

- **Czas odpowiedzi SQL**: wyświetla czas odpowiedzi na zapytania.

- **Żądania SQL**: wyświetla liczbę żądań.

### Krok 5: sprawdzenie żądań sieciowych
Użytecznym narzędziem do analizy jest [Network Monitor](https://developer.mozilla.org/en-US/docs/Tools/Network_Monitor){.external}. Narzędzie jest zintegrowane z przeglądarką Mozilla Firefox i umożliwia szczegółowe analizowane czasu ładowania strony internetowej.

Dzięki niemu możesz sprawdzić, które elementy witryny internetowej ładują się najwolniej i stanowią największe obciążenie.
Ułatwia to wykrycie, które obrazy i elementy treści powodują zwiększenie czasu ładowania witryny, a tym samym określenie priorytetów optymalizacji.

Aby uzyskać dostęp do narzędzia, naciśnij klawisz F12 na klawiaturze (korzystając z przeglądarki Firefox lub Chrome).

Zmniejszenie liczby wychodzących żądań TCP również wpływa na skrócenie czasu ładowania, ponieważ jeśli odpowiedzi serwera na żądania pobrania treści zajmują czas, załadowanie strony trwa dłużej.

**CDN**

Aby usprawnić dostęp do witryny internetowej i pobieranie oraz uzyskać optymalizację naturalnego pozycjonowania, skorzystaj z oferty OVHcloud CDN (Content Delivery Network). Dzięki temu pliki, aplikacje i witryny internetowe będą bliżej użytkowników końcowych.

Efektem będzie skrócenie czasów odpowiedzi dla wszystkich odwiedzających na całym świecie, ponieważ elementy statyczne witryny będą pobierane bezpośrednio z miejsca, które znajduje się najbliżej nich.

Poznaj [nasze rozwiązanie CDN](https://www.ovh.pl/cdn/){.external}.


### Krok 6: sprawdzenie używanego System zarządzania treścią (CMS) i wtyczek

_Ten krok jest opcjonalny, jeśli nie korzystasz z systemu CMS._

Aby mieć pewność, że korzystasz z oferty hostingu dopasowanej do potrzeb Twojego systemu CMS, zapoznaj się z porównaniem usług na [stronie produktu](https://www.ovh.pl/hosting/){.external}.

- **Korzystanie z wtyczki pamięci podręcznej:** Korzystanie z systemów zarządzania treścią (CMS) wiąże się z odwołaniami do wielu bibliotek, aby na jednej stronie internetowej mogło działać mnóstwo elementów. W celu optymalizacji systemu CMS zaleca się korzystanie z wtyczek pamięci podręcznej. Dzięki temu treść witryny internetowej nie musi być ponownie generowana przy każdym ładowaniu strony. Zalecamy wyszukanie wskazówek dotyczących wtyczek pamięci podręcznej w witrynach społeczności używanego systemu CMS (PrestaShop, WordPress, Joomla!). Pozwoli to uniknąć ponownego generowania całej treści witryny przy każdym załadowaniu strony internetowej.

- **Dezaktywacja nieużywanych wtyczek:** Aby poprawić wydajność witryny internetowej, warto zdezaktywować lub nawet usunąć nieużywane wtyczki. Dzięki temu nie będą pobierane niepotrzebne elementy.

### Krok 7: optymalizacja bazy danych

_Ten krok jest opcjonalny, jeśli nie korzystasz z bazy danych._
Dostęp do bazy danych umożliwia narzędzie PHPMyAdmin. Instrukcja korzystania z narzędzia PHPMyAdmin wykracza poza zakres tego przewodnika, więc to zagadnienie nie zostanie rozwinięte.
Szczegółowe informacje można znaleźć w wielu przewodnikach zewnętrznych.

**Dostęp do bazy danych za pośrednictwem narzędzia phpMyAdmin:** Aby uzyskać dostęp do bazy danych za pomocą narzędzia phpMyAdmin, skorzystaj z[Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}:

- Kliknij domenę w sekcji `Hosting`{.action}.
- Przejdź do karty `Baza danych`{.action}.
- Aby uzyskać dostęp do narzędzia phpMyAdmin, kliknij ikonę z trzema kropkami `...`{.action} po prawej stronie bazy danych.

**Dlaczego warto zoptymalizować bazę danych?** Aby baza danych dobrze działała, należy ją konserwować. Innymi słowy, informacje zawarte w bazie danych powinny być zwracane do żądającego ich skryptu możliwie jak najszybciej. Aby to uzyskać, baza danych powinna być dobrze zorganizowana i zoptymalizowana. Sprawdźmy, jak zoptymalizować bazę danych.

#### W bazie danych

- **Indeksowanie bazy danych:** Aby zwiększyć szybkość wyszukiwania podczas zapytań, należy indeksować pola, które są używane w klauzulach WHERE. Przykład: Często wyszukujesz osoby według miejscowości. Musisz więc utworzyć indeks pola „town” przy użyciu następującego żądania:

```
ALTER TABLE `test` ADD INDEX (`town`);
```

- **Oczyszczanie bazy danych:** Jeśli masz dane, których już nie używasz, warto je zarchiwizować. Tabele nie będą przepełnione, a zapytanie do bazy danych zajmie mniej czasu.

#### W skryptach

- **Limit wyświetlania:** ogranicz liczbę wyświetlanych rekordów (np. 10 na stronę) przy użyciu klauzuli LIMIT w zapytaniu SQL.


- **Porządkowanie żądań:** pogrupuj żądania na początku skryptu w ten sposób:

```
open_connection
request1
request2
...
close_connection

Display...
Treat data
Loop through data...
Display...
...
```

Zamknięcie połączenia po żądaniu powoduje, że serwer bazy danych jest natychmiast dostępny dla innych żądań. Zapobiega to też występowaniu błędu typu „Użytkownik już ma ponad 'maks._liczba_połączeń_użytkownika’ aktywnych połączeń”.

#### Optymalizacja bazy danych przy użyciu pamięci podręcznej

- Jeśli baza danych zawiera elementy, które się nie zmieniają, umieść je w pamięci podręcznej. Skorzystanie z tej wskazówki pozwoli radykalnie zmniejszyć liczbę zapytań do bazy danych i skróci czas ładowania się witryny.

- Możesz też skorzystać z pamięci podręcznej sesji, co oznacza umieszczenie wyników zapytań w zmiennej sesji. Dzięki temu nie trzeba kolejny raz wykonywać takiego samego zapytania, wystarczy pobrać zmienne sesji.

- Pobieranie tylko używanych danych: w żądaniach SQL wybieraj tylko potrzebne dane i nie zapominaj o połączeniach między tabelami.

Przykład:

```
(where table1.champs = table2.champs2)
```

#### Unikaj opcji wykorzystujących dużo zasobów:
Na przykład klauzuli „HAVING”, która może spowolnić zapytania. Nie używaj też klauzuli „GROUP BY”, o ile nie jest naprawdę niezbędna.


#### Prywatna baza SQL
Jeśli pomimo wprowadzonych zmian i optymalizacji baza danych działa powoli, albo jeśli liczba zapytań do bazy danych jest bardzo duża, możesz skorzystać z oferty prywatnej bazy danych SQL — Private SQL. Będziesz mieć do dyspozycji więcej zasobów.
Porównanie ofert znajdziesz na [stronie produktu](https://www.ovh.pl/hosting/opcje-sql.xml){.external}.

## Sprawdź również

[Zmiana konfiguracji hostingu WWW](https://docs.ovh.com/pl/hosting/zmiana_srodowiska_uruchomieniowego_dla_hostingu_www/){.external}

[Zarządzanie bazą danych w hostingu WWW](https://docs.ovh.com/pl/hosting/zarzadzanie-baza-danych-na-hostingu-www/){.external}

[Pierwsze kroki z usługą Private SQL](https://docs.ovh.com/pl/hosting/pierwsze-kroki-private-sql/){.external}

Dołącz do naszej społeczności użytkowników: <https://community.ovh.com/en/>.