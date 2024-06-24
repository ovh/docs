---
title: "Tworzenie automatycznych zadań (CRON) na Twoim hostingu"
excerpt: "Dowiedz się, jak utworzyć zadania CRON do automatyzacji zaplanowanych zadań na hostingu"
updated: 2024-05-16
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłoś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie 

Na Twoim hostingu OVHcloud możesz użyć skryptów do automatyzacji niektórych operacji. Utworzenie zaplanowanego zadania ("zadanie CRON") to najprostszy sposób, aby upewnić się, że Twoje skrypty są wykonywane w określonych momentach, bez konieczności podejmowania dalszych działań. 

**Dowiedz się, jak tworzyć zadania CRON do automatyzacji zaplanowanych zadań na hostingu.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Jesteś tym samym odpowiedzialny za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [„Sprawdź również”](#go-further). 
>

## Wymagania początkowe

- Posiadanie [hostingu WWW](/links/web/hosting).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

Przejdź do Panelu [klienta OVHcloud](/links/manager){.external}. Kliknij kartę `Web Cloud`{.action}, a następnie `Hosting`{.action}.

Wybierz odpowiedni hosting, kliknij zakładkę `Więcej`{.action}, a następnie `Cron`{.action}.

W tej sekcji znajdziesz przegląd zaplanowanych zadań i ich parametrów.

![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/schedule-jobs.png){.thumbnail}

### Tworzenie zautomatyzowanego zadania

#### Etap 1: Definicja parametrów ogólnych

Aby utworzyć zadanie CRON, kliknij przycisk `Dodaj harmonogram`{.action} po prawej stronie. W nowym oknie możesz spersonalizować ustawienia zadania.

![adding scheduling](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-1.png){.thumbnail}

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
|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.png){.thumbnail}|

> [!primary]
>
> Formularz `Dni`{.action} pozwala na zdefiniowanie częstotliwości wykonywania w cyklu miesięcznym.
>
> Formularz `Dni tygodnia`{.action} pozwala na zdefiniowanie dodatkowych częstotliwości wykonywania, ale w cyklu tygodniowym.
>

|Tryb zaawansowany| 
|---|
|Wprowadź wartości liczbowe jak w *crontab*. Gwiazdki wskazują każdą wartość okresu, co oznacza, że zadanie będzie wykonywane stale **raz na godzinę każdego dnia** w tym przykładzie.|
|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-expert-mod-step-2.png){.thumbnail}|

Możesz przełączyć między dwoma trybami podczas konfiguracji, aby wyświetlić odpowiednie zmiany. Pamiętaj również o [ograniczeniach podczas planowania zadania na hostingu WWW](./#ograniczenia-zaplanowanych-zadan-na-twoim-hostingu).

![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.gif){.thumbnail}

#### Etap 3: Koniec instalacji

Podsumowanie zawiera informacje o skonfigurowanych parametrach, w tym *o ratingu crontab* częstotliwości wykonywania. Jeśli są poprawne, kliknij `Zatwierdź`{.action}.

![cron](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-3.png){.thumbnail}

Zadanie będzie gotowe za kilka minut. Możesz zmienić wszystkie parametry lub usunąć zadanie klikając na `...`{.action} w tabeli prezentacji Twojego panelu konfiguracyjnego OVHcloud.

### Zmień lub usuń zaplanowane zadanie

W tym celu wykonaj następujące czynności:

1. Zaloguj się do [Panelu klienta OVHcloud](/links/manager).
2. W wierszu u góry Panelu klienta kliknij zakładkę `Web Cloud`{.action}.
3. W lewej kolumnie kliknij menu rozwijane `Hosting`{.action}.
4. Wybierz odpowiedni hosting.
5. Na stronie, która się wyświetli kliknij zakładkę `Więcej`{.action}, a następnie `Cron`{.action}.
6. W tabeli, która się wyświetli kliknij przycisk `...`{.action} po prawej stronie planowanego zadania.
7. Wybierz przycisk `Zmień`{.action} lub `Usuń`{.action} w zależności od czynności, którą chcesz wykonać w odniesieniu do zaplanowanego zadania.

### Ograniczenia zaplanowanych zadań na Twoim hostingu

|Funkcjonalność|Opis|
|---|---|
|Planowanie godzinowe|Zauważysz, że pole "Minuty" jest wyłączone w interfejsie (zdefiniowane przez "?" z widokiem na *crontab*). Zadanie może być wykonywane tylko raz na godzinę, jest to najniższa częstotliwość powtarzania, jaką można określić.|
|Czas trwania|Czas wykonywania zadania to 60 minut. Jeśli skrypt przekracza ten czas, zostanie automatycznie zatrzymany przez system.|
|Zmienna|Możesz zdefiniować tylko zmienne w skrypcie. Dodanie ich do adresu URL wywołującego skrypt nie będzie działać (Przykład: www/jobs/cron.php?zmienna=value).|
|Limit danych|Zadanie może generować tylko 5 MB danych (*stdin/stderr*). Na przykład, jeśli skrypt zapisuje dane w pliku .txt, wykonywanie automatycznie kończy się, gdy plik osiągnie 5 MB.|
|Skrypty powodujące błędy|Jeśli skrypt jest uszkodzony, zostanie automatycznie wyłączony po 10 nieudanych próbach. Raport o błędach zostanie wysłany dopiero po 10 próbach zakończonych niepowodzeniem.</br>Popraw skrypt na podstawie otrzymanego raportu o błędzie, a następnie ponownie włącz "zadanie CRON" w panelu sterowania (kliknij opcję `...`{.action}, a następnie `Zmień`{.action}).|
|Sprawozdania z realizacji|Raporty będą wysyłane na wybrany adres e-mail tylko raz dziennie (w godzinach nocnych).|

### Naprawa

#### Test skryptu przy użyciu przeglądarki internetowej

Prosty test, aby sprawdzić, czy Twój skrypt spowoduje błąd, to uruchomienie go w przeglądarce internetowej. Na przykład, jeśli ścieżka dostępu do skryptu to "www/cron.php", a domeną hostingu jest "mypersonaldomain.ovh", powinieneś użyć adresu "http://<i></i>mypersonaldomain.ovh/cron.php". Jeśli nie wyświetla się błąd, ale skrypt nie działa zgodnie z planem, postępuj zgodnie z poniższymi sugestiami.

#### Sprawdzanie wykorzystania ścieżek bezwzględnych

Zawsze korzystaj z bezwzględnych ścieżek dostępu do plików skryptów. Stała "DIR", na przykład, może pomóc otrzymać bieżącą ścieżkę w skryptach PHP ([dokumentacja PHP](https://www.php.net/manual/en/language.constants.predefined.php)).
 
#### Weryfikacja logów wykonawczych

W \[logach] Twojego hostingu WWW, które są dostępne w [Panelu klienta OVHcloud](/links/manager){.external}, zobaczysz kategorię logów zatytułowaną "CRON".

Więcej informacji znajdziesz w przewodniku ["Sprawdź statystyki i logi strony zainstalowanej na hostingu"](/pages/web_cloud/web_hosting/logs_and_statistics).

##### **Przykład logów**

- Przykład poprawnie wykonanego końca skryptu 

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2023-08-11 00:36:01] 
[2023-08-11 00:36:01] ## OVH ## END - 2023-08-10 22:39:44.086166 exitcode: 0
</code></pre>

- Przykład niepowodzenia z powodu przekroczenia czasu wykonywania

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2023-08-11 01:36:01] # OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maksymalna permitted (3600 seconds)
[2023-08-11 01:36:01] ## OVH ## END - 2023-08-11 01:36:01.086166 exitcode: 0
</code></pre>

- Przykład awarii, ponieważ plik skryptu nie może zostać znaleziony w określonej ścieżce dostępu

<pre class="bgwhite"><code>
[2023-08-11 00:36:01] ## OVH ## START - 2023-08-11 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2023-08-11 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2023-08-11 00:36:01] ## OVH ## END - 2023-08-11 00:36:01.086166 exitcode: 255
</code></pre>

- Przykład niepowodzenia z powodu błędu autoryzacji (chmod) lub nieprawidłowej konfiguracji pliku .ovhconfig

<pre class="bgwhite"><code>
[2023-08-11 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2023-08-11 18:07:10]
[2023-08-11 18:07:10] ## OVH ## END - 2023-08-11 18:07:10.969840 exitcode: 255
</code></pre>

## Sprawdź również <a name="go-further"></a>

[Konfiguracja pliku .ovhconfig w hostingu](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[Korzystanie z dostępu SSH do hostingu](/pages/web_cloud/web_hosting/ssh_on_webhosting)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).