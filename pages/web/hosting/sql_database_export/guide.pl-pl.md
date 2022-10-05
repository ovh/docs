---
title: 'Tworzenie i pobieranie kopii zapasowej bazy danych na hostingu WWW'
excerpt: 'Dowiedz się, jak pobrać kopię zapasową bazy danych Twojego hostingu WWW OVH'
slug: eksport-bazy-danych
section: 'Bazy danych'
order: 03
---

**Ostatnia aktualizacja dnia 2018-08-/07**

## Wprowadzenie 

Bazy danych, wykorzystywane obecnie przez niemal wszystkie systemy zarządzania treścią ( Content Management System lub CMS), na przykład WordPress czy Joomla!, umożliwiają przechowywanie elementów dynamicznych, takich jak komentarze czy artykuły. Mogą zaistnieć sytuacje, w których będziesz potrzebował wykonać kopię zapasową bazy danych w celu późniejszego odzyskania jej zawartości.

**Dowiedz się, jak pobrać kopię zapasową bazy danych Twojego hostingu WWW OVH.**

## Wymagania początkowe

- Posiadanie [hostingu OVH](https://www.ovhcloud.com/pl/web-hosting/){.external}
- Posiadanie bazy danych utworzonej w ramach pakietu [hostingowego WWW OVH](https://www.ovhcloud.com/pl/web-hosting/){.external}
- W zależności od metody tworzenia kopii zapasowej, jakiej użyjesz, posiadanie dostępu do interfejsu zarządzania usługą hostingu WWW w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} lub posiadanie informacji umożliwiających zalogowanie do bazy danych

## W praktyce

Przed rozpoczęciem operacji określ metodę, której użyjesz do pobrania kopii zapasowej bazy danych.  W zależności od Twoich kompetencji technicznych masz do wyboru kilka możliwości.

- **Użycie narzędzia OVH do eksportu kopii zapasowych**: rozwiązanie to umożliwia pobranie kopii zapasowych baz danych w [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Jest to bardzo przystępne rozwiązanie, nie wymaga zaawansowanych kompetencji technicznych.

- **Wykonanie kopii zapasowej w interfejsie phpMyAdmin**: przed operacją należy zalogować się do interfejsu phpMyAdmin. Konieczna jest zatem umiejętność korzystania z tego interfejsu.

- **Użycie skryptu do tworzenia kopii zapasowych**: rozwiązanie to, do wykonania kopii zapasowej, wymaga utworzenia skryptu zarejestrowanego na Twoim hostingu OVH. W przypadku tej metody konieczna jest odpowiednia wiedza umożliwiająca utworzenie skryptu. 

- **Wykonanie kopii zapasowej przy użyciu komendy SSH**: rozwiązanie to wymaga zalogowania się do przestrzeni dyskowej przez protokół SSH, a następnie zastosowania odpowiednich komend pozwalających połączyć się z bazą danych. Ten typ dostępu możliwy jest, jeśli posiadasz zaawansowane umiejętności oraz masz wykupioną usługę [hostingu OVH](https://www.ovhcloud.com/pl/web-hosting/){.external}.

Niektóre z powyższych metod nie są powiązane z interfejsem OVH. W takich przypadkach wykonaj operację, bazując na własnej wiedzy. Poniżej zamieszczamy kilka pomocnych informacji, nie zastąpią one jednak pomocy technicznej webmastera. 

Przejdź do metody tworzenia kopii zapasowej, która Cię interesuje opisanej w dalszej części dokumentacji.

> [!warning]
>
> OVH udostępnia różnorodne usługi, jednak ich konfiguracja, zarządzanie oraz utrzymanie należy do Ciebie.  Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”.
>

### Pobieranie kopii zapasowej za pomocą narzędzia OVH

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Hosting`{.action}, następnie wybierz odpowiednią nazwę hostingu. Teraz przejdź do zakładki `Bazy danych`{.action}.

Tabela, która się wyświetla zawiera listę wszystkich baz danych utworzonych w ramach Twojego pakietu hostingowego. Teraz możesz utworzyć nową kopię zapasową lub pobrać istniejącą, korzystając z jednej z dwóch dostępnych metod.

#### Etap 1: utwórz nową kopię zapasową bazy danych

W zakładce `Bazy danych`{.action} kliknij trzy kropki po prawej stronie bazy, której kopię chcesz utworzyć, a następnie kliknij `Utwórz kopię zapasową`{.action}.

![database dump](images/database-dump-step2.png){.thumbnail}

W oknie, które się pojawi, wybierz datę utworzenia kopii zapasowej, następnie kliknij przycisk `Dalej`{.action}. Upewnij się, że informacje w podsumowaniu są poprawne, następnie kliknij `Zatwierdź`{.action}, aby rozpocząć operację.

Odczekaj chwilę, aż kopia zapasowa zostanie utworzona. Kiedy kopia będzie już dostępna, będziesz mógł ją pobrać.

![database dump](images/database-dump-step3.png){.thumbnail}

#### Etap 2: przywracanie kopii bazy danych

W zakładce `Bazy danych`{.action} kliknij trzy kropki po prawej stronie bazy, której kopię chcesz pobrać, a następnie kliknij `Przywróć kopię zapasową`{.action}.

![database dump](images/database-dump-step4.png){.thumbnail}

Tabela, która się wyświetla zawiera wszystkie dostępne kopie zapasowe bazy danych.  Możesz wyświetlić dokładną datę utworzenia kopii zapasowych, a także datę, kiedy zostaną one usunięte z narzędzia OVH.

Aby pobrać kopię zapasową, kliknij trzy kropki po jej prawej stronie, a następnie `Pobierz kopię zapasową`{.action}. Pojawi się okno z prośbą, abyś zapisał ją na Twoim  komputerze. Zaakceptuj, po czym odczekaj, aż kopia zapasowa zostanie pobrana.

![database dump](images/database-dump-step5.png){.thumbnail}

### Pobieranie kopii zapasowej za pomocą interfejsu phpMyAdmin

W celu przeprowadzenia operacji zaloguj się do phpMyAdmin. Aby uzyskać link dostępowy do phpMyAdmin, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Hosting`{.action}, następnie wybierz odpowiednią nazwę hostingu. Teraz przejdź do zakładki `Bazy danych`{.action}.

Tabela, która się wyświetla zawiera listę wszystkich baz danych utworzonych w ramach Twojego pakietu hostingowego. Kliknij trzy kropki po prawej stronie odpowiedniej bazy danych, po czym kliknij `Dostęp do phpMyAdmin`{.action}.

![database dump](images/database-dump-step6.png){.thumbnail}

Po uzyskaniu dostępu do strony phpMyAdmin wprowadź informacje dotyczące bazy danych, po czym zaznacz na rozwijanym menu, czy chcesz wyświetlić aktualne dane czy dane dotyczące wcześniej wykonanej kopii zapasowej, następnie zaloguj się.  Po zalogowaniu przejdź do zakładki `Eksportuj`{.action}, gdzie dostępne są dwie metody eksportu:

- **metoda podstawowa**: możesz określić format eksportu kopii zapasowej. Najpopularniejszym formatem jest SQL, ale dostępne są również inne - zgodnie z Twoimi potrzebami;

- **metoda spersonalizowana**: możesz określić szczegółowe parametry eksportu kopii zapasowej.

> [!warning]
>
> Ponieważ interfejs phpMyAdmin nie został utworzony przez OVH, wykonaj operację, bazując na własnej wiedzy. W przypadku trudności zalecamy skorzystanie z pomocy specjalisty lub kontakt z producentem interfejsu. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie.
>

### Pobieranie kopii zapasowej za pomocą skryptu

Operacja składa się z kilku etapów.  Upewnij się, czy posiadasz informacje potrzebne do zalogowania się do bazy danych, której kopię zapasową chcesz utworzyć: nazwa użytkownika, hasło, nazwa bazy danych oraz adres serwera. 

> [!warning]
>
> Ta metoda wymaga umiejętności technicznych z zakresu programowania. Poniżej zamieszczamy kilka informacji dotyczących sposobu postępowania. Jednak w przypadku trudności zalecamy skorzystanie z pomocy specjalisty.  Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie.
>

#### Etap 1: utwórz skrypt kopii zapasowej

Pierwszy etap polega na utworzeniu skryptu, dzięki któremu będziesz mógł utworzyć kopię zapasową bazy danych. Poniżej przykład skryptu, który może być pomocny w przeprowadzanej przez Ciebie operacji, nie zastąpi on jednak pomocy technicznej webmastera.

```php
<?
system("mysqldump --host=adres_serwera --user=uzytkownik --password=haslo nazwa_bazy_danych > nazwa_pliku_kopii_zapasowej.sql");
?>
```

Pamiętaj, aby zastąpić informacje ogólne występujące w skrypcie informacjami dotyczącymi odpowiedniej bazy danych. Pomocne będą poniższe wskazówki. Po utworzeniu skryptu zalecamy nadać mu nazwę „kopia_zapasowa.php”.

|Informacje|Czym należy zastąpić|
|---|---|
|adres_serwera|Nazwa serwera odpowiedniej bazy danych.|
|uzytkownik|Nazwa użytkownika posiadającego dostęp do bazy danych.|
|haslo_uzytkownika|Hasło przypisane do uprzednio podanej nazwy użytkownika. |
|nazwa_bazy_danych|Nazwa wybranej bazy danych|
|nazwa_pliku_kopii_zapasowej|Nazwa nadana plikowi kopii zapasowej po jego utworzeniu.|

> [!primary]
>
> Możesz utworzyć kopię zapasową odnosząc się do wcześniejszej daty, dodając do skryptu port. W przypadku kopii zapasowej z datą dnia poprzedniego użyj portu „3307”. W przypadku kopii zapasowej sprzed 7 dni użyj portu „3317”. 
> 
> Pamiętaj, że użycie portu „3306” umożliwia utworzenie kopii zapasowej danych aktualnie występujących w bazie.
>

#### Etap 2: pobierz skrypt i wykonaj import do przestrzeni dyskowej

Po poprawnym utworzeniu skryptu, pobierz go do przestrzeni dyskowej Twojego hostingu. W tym celu zaloguj się do przestrzeni dyskowej. Jeśli nie potrafisz tego zrobić, zapoznaj się z informacjami zawartymi w opisie etapu 2 przewodnika [Logowanie do przestrzeni dyskowej](https://docs.ovh.com/pl/hosting/hosting_www_umieszczenie_strony_w_internecie/){.external}.

Aby móc przejść od kolejnych etapów, zapisz skrypt do katalogu „WWW”. **Zalecamy szczególną ostrożność podczas nadawania nazwy plikowi skryptu kopii zapasowej.** Sprawdź, czy zapisując skrypt, nie nadpisujesz istniejącego wcześniej na przestrzeni dyskowej pliku noszącego tę samą nazwę. Jeśli pojawi się tego typu komunikat ostrzegawczy, zmień nazwę nowo utworzonego skryptu, a następnie spróbuj ponownie go zapisać.

#### Etap 3: uruchamianie skryptu

Po zapisaniu skryptu na przestrzeni dyskowej, uruchom go. W tym celu wywołaj skrypt w przeglądarce.

Aby to uczynić, wpisz do przeglądarki internetowej pełny adres URL skryptu (na przykład: mypersonaldomain.ovh/kopia_zapasowa.php, jeśli nazwałeś skrypt „kopia_zapasowa.php”). Jeśli informacje wprowadzone do skryptu są prawidłowe, kopia zapasowa zostanie wykonana. Odczekaj chwilę, aż to nastąpi. Jeśli tak się nie stanie, sprawdź informacje zawarte w skrypcie, po czym spróbuj ponownie.

#### Etap 4: pobierz kopię zapasową z przestrzeni dyskowej

Po utworzeniu kopii zapasowej, możesz ją pobrać z katalogu, do którego zapisany został skrypt kopii zapasowej. Nazwa kopii zapasowej bazy danych musi brzmieć, jak nazwa wprowadzona wcześniej do skryptu. Teraz pobierz kopię zapasową na Twój komputer.

Zalecamy, abyś po pobieraniu pliku z kopią zapasową usunął z katalogu „WWW” pliki kopii zapasowej oraz skryptu.

> [!primary]
>
> Używając skryptu kopii zapasowej oraz narzędzia do planowania zadań („CRON”), będziesz mógł zautomatyzować tworzenie kopii zapasowych i wybrać częstotliwość ich tworzenia. Dowiedz się więcej o planowaniu zadań z dokumentacji: [Narzędzie do planowania zadań (CRON) na hostingu](https://docs.ovh.com/pl/hosting/hosting_www_automatyczne_zadania_cron/){.external}.
>

### Pobieranie kopii zapasowej przy użyciu komendy SSH

Aby przeprowadzić operację, wpisz odpowiednie komendy w terminalu i połącz się z przestrzenią dyskową.

> [!warning]
>
> Aby korzystać z tego typu dostępu, konieczna jest zaawansowana wiedza techniczna. Poniżej zamieszczamy kilka informacji dotyczących sposobu postępowania, jednak w przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/). Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie.
>

Po zalogowaniu się do przestrzeni dyskowej przy użyciu SSH wpisz komendę służącą do utworzenia kopii zapasowej bazy danych. Poniżej przykład komendy, która może być pomocna w przeprowadzanej przez Ciebie operacji. Pamiętaj, że kopia zapasowa zostanie zapisana w aktywnym katalogu w momencie, gdy wyślesz komendę do terminala. 

```sh
system("mysqldump --host=adres_serwera --user=uzytkownik --password=haslo nazwa_bazy_danych > nazwa_pliku_kopii_zapasowej.sql");
```

Pamiętaj, aby zastąpić informacje ogólne występujące w komendzie informacjami dotyczącymi odpowiedniej bazy danych. Teraz pobierz kopię zapasową na Twój komputer.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
