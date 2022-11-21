---
title: Tworzenie automatycznych zadań (CRON) na Twoim hostingu
excerpt: Dowiedz się, jak utworzyć zadania CRON do automatyzacji zaplanowanych zadań na hostingu
slug: hosting_www_automatyczne_zadania_cron
section: 'CRON -  automatyzacja zadań'
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 22-09-2020**

## Wprowadzenie 

Na Twoim hostingu OVHcloud możesz użyć skryptów do automatyzacji niektórych operacji. Utworzenie zaplanowanego zadania ("zadanie CRON") to najprostszy sposób, aby upewnić się, że Twoje skrypty są wykonywane w określonych momentach, bez konieczności podejmowania dalszych działań. 

**Dowiedz się, jak tworzyć zadania CRON do automatyzacji zaplanowanych zadań na hostingu.**

> [!warning]
>OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
>
>Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji „Sprawdź również”. 
>

## Wymagania początkowe

- Posiadanie [hostingu WWW](https://www.ovhcloud.com/pl/web-hosting/).
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

Przejdź do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Kliknij kartę `Web Cloud`{.action}, a następnie `Hosting`{.action}.

Wybierz odpowiedni hosting, kliknij zakładkę `Plus+`{.action}, a następnie `zaplanowane zadania - Cron`{.action}

W tej sekcji znajdziesz przegląd zaplanowanych zadań i ich parametrów.

![cron control panel](images/cron-jobs-1.png){.thumbnail}

### Tworzenie zautomatyzowanego zadania

#### Etap 1: Definicja parametrów ogólnych

Aby utworzyć zadanie CRON, kliknij przycisk `Dodaj harmonogram`{.action} po prawej stronie. W nowym oknie możesz spersonalizować ustawienia zadania.

![adding scheduling](images/cron-jobs-2.png){.thumbnail}

|Opcja|Opis|   
|---|---|   
|Zamówienie do wykonania|Zdefiniuj ścieżkę dostępu do pliku zawierającego Twój skrypt. Przykład: www/jobs/cron.php|   
|Język|Wybierz wersję PHP używaną przez skrypt.|
|Aktywacja|Wybierz, czy zadanie będzie aktywne po jego utworzeniu, czy też zostanie włączone w późniejszym terminie.| 
|Logi na e-mail|W razie potrzeby wybierz kontakt (administrator lub technik), do którego zostanie wysłany raport w przypadku błędu w wykonaniu. Możesz również podać inny adres poczty elektronicznej.| 
|Opis|Wpisz opis, aby śledzić wykonywanie zadań.| 

Kliknij `Dalej`{.action}, aby przejść do etapu 2.

#### Etap 2: Definicja częstotliwości

Interfejs pozwala na skonfigurowanie częstotliwości zadania w dwóch trybach. Użyj **Tryb Prosty** do wyboru opcji planowania uproszczonego dla początkujących. Jeśli wolisz wprowadzić bezpośrednio częstotliwość, podobna do formatu tabeli CRON (*crontab*), wybierz **Tryb eksperta**.

|Tryb prosty|
|---|
|Użyj rozwijanych menu, aby określić godzinę, dni miesiąca, dni tygodnia i miesiące zadania.|
|![cron frequency](images/cron-jobs-3.png){.thumbnail}|

|Tryb zaawansowany| 
|---|
|Wprowadź wartości liczbowe jak w *crontab*. Gwiazdki wskazują każdą wartość okresu, co oznacza, że zadanie będzie wykonywane stale **raz na godzinę każdego dnia** w tym przykładzie.|
|![cron frequency](images/cron-jobs-4.png){.thumbnail}|

Możesz przełączyć między dwoma trybami podczas konfiguracji, aby wyświetlić odpowiednie zmiany. Pamiętaj również o [ograniczeniach podczas planowania zadania na hostingu WWW](./#ograniczenia-zaplanowanych-zadan-na-twoim-hostingu_1).

![cron control panel](images/cron-jobs-5.gif){.thumbnail}

#### Etap 3: Koniec instalacji

Podsumowanie zawiera informacje o skonfigurowanych parametrach, w tym *o ratingu crontab* częstotliwości wykonywania. Jeśli są poprawne, kliknij `Zatwierdź`{.action}.

![cron](images/cron-jobs-6.png){.thumbnail}

Zadanie będzie gotowe za kilka minut. Możesz zmienić wszystkie parametry lub usunąć zadanie klikając na `...`{.action} w tabeli prezentacji Twojego panelu konfiguracyjnego OVHcloud.

### Ograniczenia zaplanowanych zadań na Twoim hostingu

|Funkcjonalność|Opis|
|---|---|
|Planowanie godzinowe|Zauważysz, że pole "Minuty" jest wyłączone w interfejsie (zdefiniowane przez "?" z widokiem na *crontab*). Zadanie może być wykonywane tylko raz na godzinę, jest to najniższa częstotliwość powtarzania, jaką można określić.|
|Czas trwania|Czas wykonywania zadania to 60 minut. Jeśli skrypt przekracza ten czas, zostanie automatycznie zatrzymany przez system.|
|Zmienna|Możesz zdefiniować tylko zmienne w skrypcie. Dodanie ich do adresu URL wywołującego skrypt nie będzie działać (Przykład: www/jobs/cron.php?zmienna=value).|
|Limit danych|Zadanie może generować tylko 5 MB danych (*stdin/stderr*). Na przykład, jeśli skrypt zapisuje dane w pliku .txt, wykonywanie automatycznie kończy się, gdy plik osiągnie 5 MB.|
|Skrypty powodujące błędy|Jeśli skrypt jest uszkodzony, zostanie automatycznie wyłączony po 10 próbach wykonania, które nie powiodły się. Włącz ją w Panelu konfiguracyjnym. (Kliknij `...`{.action}, a następnie `Zmień`{.action})|
|Sprawozdania z realizacji|Raporty będą wysyłane na wybrany adres e-mail tylko raz dziennie (w godzinach nocnych).|

### Naprawa

#### Test skryptu przy użyciu przeglądarki internetowej

Prosty test, aby sprawdzić, czy Twój skrypt spowoduje błąd, to uruchomienie go w przeglądarce internetowej. Na przykład, jeśli ścieżka dostępu do skryptu to "www/cron.php", a domeną hostingu jest "mypersonaldomain.ovh", powinieneś użyć adresu "http://<i></i>mypersonaldomain.ovh/cron.php". Jeśli nie wyświetla się błąd, ale skrypt nie działa zgodnie z planem, postępuj zgodnie z poniższymi sugestiami.

#### Sprawdzanie wykorzystania ścieżek bezwzględnych

Zawsze korzystaj z bezwzględnych ścieżek dostępu do plików skryptów. Stała "DIR", na przykład, może pomóc otrzymać bieżącą ścieżkę w skryptach PHP ([dokumentacja PHP](https://www.php.net/manual/en/language.constants.predefined.php)).
 
#### Weryfikacja logów wykonawczych

W \[logach] Twojego hostingu WWW, które są dostępne w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, zobaczysz kategorię logów zatytułowaną "CRON".

Więcej informacji znajdziesz w przewodniku ["Sprawdź statystyki i logi strony zainstalowanej na hostingu"](../hosting_statystyki_i_logi_strony/).

##### **Przykład logów**

- Przykład poprawnie wykonanego końca skryptu 

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2020-08-11 00:36:01] 
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-10 22:39:44.086166 exitcode: 0
```

- Przykład niepowodzenia z powodu przekroczenia czasu wykonywania

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2020-08-11 01:36:01] # OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maksymalna permitted (3600 seconds)
[2020-08-11 01:36:01] ## OVH ## END - 2020-08-11 01:36:01.086166 exitcode: 0
```

- Przykład awarii, ponieważ plik skryptu nie może zostać znaleziony w określonej ścieżce dostępu

```
[2020-08-11 00:36:01] ## OVH ## START - 2020-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2020-08-11 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2020-08-11 00:36:01] ## OVH ## END - 2020-08-11 00:36:01.086166 exitcode: 255
```

- Przykład niepowodzenia z powodu błędu autoryzacji (chmod) lub nieprawidłowej konfiguracji pliku .ovhconfig

```
[2020-08-11 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2020-08-11 18:07:10]
[2020-08-11 18:07:10] ## OVH ## END - 2020-08-11 18:07:10.969840 exitcode: 255
```


## Sprawdź również

[Konfiguracja pliku .ovhconfig w hostingu](../konfiguracja-pliku-ovhconfig/)

[Korzystanie z dostępu SSH do hostingu](../hosting_www_ssh_na_hostingu/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
