---
title: 'Web Cloud Databases - Jak zarządzać logami?'
excerpt: 'Dowiedz się, jak zarządzać logami baz danych hostowanych na serwerze Web Cloud Databases'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Wprowadzenie

Log odpowiada zdarzeniu, które wystąpiło w systemie informatycznym (serwer, komputer, aplikacja, strona internetowa, baza danych, sieć informatyczna itp.).
Log może na przykład rejestrować i zawierać jeden lub kilka z poniższych elementów:

- Znacznik czasu (data, godzina, minuta, sekunda itp.) zdarzenia.
- Charakter zdarzenia (połączenie, rozłączenie, błąd, pobieranie, przesyłanie, alert itp.).
- Dodatkowe informacje o zdarzeniu (odwiedzona strona lub plik, uruchomiona aplikacja, wywołany zdalny serwer, nazwa przesłanego lub pobranego pliku itp.)
- Pochodzenie zdarzenia (identyfikator użytkownika, źródłowy adres IP, program źródłowy itp.).
- Stan systemu, w którym występuje zdarzenie (dostępne zasoby, pozostała pamięć, użycie procesora itp.).

W większości przypadków logi są generowane bezpośrednio przez systemy informatyczne, w których zachodzą zdarzenia.
Są przechowywane w plikach tekstowych, zwanych również plikami logów.

Pliki logów umożliwiają wykonywanie następujących czynności:

- Analizowanie zachowania systemu informatycznego generującego logi.
- Identyfikowanie błędów, które wystąpiły w systemie informatycznym.
- Rozwiązywanie błędów napotkanych w systemie informatycznym.
- Optymalizowanie i poprawianie wydajności systemu informatycznego.

Twoja usługa [Web Cloud Databases](/links/web/databases) generuje własne logi.

W niektórych sytuacjach może zajść potrzeba przeglądania lub pobierania logów:

- Z serwera Web Cloud Databases.
- Dla jednej z baz danych hostowanych na serwerze Web Cloud Databases.

**Dowiedz się, jak wyświetlać logi usługi Web Cloud Databases i zarządzać nimi.**

## Wymagania początkowe

- Posiadanie [instancji Web Cloud Databases](/links/web/databases).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wybierz usługę bazy danych

---
<!-- CP-NAV-END:web-cloud-databases -->

## W praktyce

> [!warning]
>
> Udostępniamy ten tutorial, aby pomóc Ci w realizacji typowych zadań. Zalecamy jednak skontaktowanie się z [wyspecjalizowanym dostawcą usług](/links/partner) w przypadku trudności. Nie będziemy w stanie udzielić wsparcia w zakresie interpretacji logów dostępnych w ramach Twojej usługi Web Cloud Databases. Więcej informacji znajdziesz w sekcji [Sprawdź również](#go-further) tego przewodnika.
>

### Wyświetlanie logów w czasie rzeczywistym

Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Logi`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab.png){.thumbnail}
>>
>> W tej zintegrowanej konsoli znajdziesz logi Twojej usługi Web Cloud Databases w czasie rzeczywistym.
>>
>> > [!primary]
>> >
>> > Logi są dostępne tutaj wyłącznie w czasie rzeczywistym. Pojawią się tylko wtedy, gdy zostaną wygenerowane, gdy znajdujesz się na karcie `Logi`{.action}.
>> >
>> > Jeśli opuścisz kartę `Logi`{.action} i wrócisz do niej później, wcześniej wyświetlana historia zniknie.

### Pobieranie historii logów usługi Web Cloud Databases

Aby pobrać historię logów usługi Web Cloud Databases, musisz połączyć się przez SFTP.

> [!warning]
>
> Przed połączeniem upewnij się, że publiczny adres IP komputera, którego używasz, jest autoryzowany na serwerze Web Cloud Databases z aktywowaną opcją `SFTP`.
>
> Aby to sprawdzić, pobierz publiczny adres IP swojego punktu dostępu do Internetu, a następnie zapoznaj się z sekcją **Autoryzacja adresu IP** w [tym przewodniku](/pages/web_cloud/web_cloud_databases/starting_with_clouddb).
>

Aby uzyskać informacje o połączeniu SFTP z usługą Web Cloud Databases, kliknij na poniższe karty, aby wyświetlić kolejno każdy z **2** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na karcie `Informacje ogólne`{.action} znajdź sekcję **Dane do logowania**. Pod pozycją `SFTP`{.action} znajdziesz informacje wymagane do połączenia przez SFTP.
>>
>> > [!primary]
>> >
>> > Jeśli nie znasz `Hasła do serwera`, kliknij przycisk `...`{.action} po prawej stronie, aby je zmienić.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/sftp-login.png){.thumbnail}

Po uzyskaniu danych dostępowych SFTP połącz się za pośrednictwem klienta FTP (FileZilla, Cyberduck, WinSCP itp.).

W FileZilla przejdź w lewym górnym rogu do menu `Plik`{.action}, a następnie kliknij `Menedżer stron`{.action}.

Kliknij `Nowa strona`{.action} i wprowadź wcześniej uzyskane parametry.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/filezilla/site-manager.png){.thumbnail}

Plik logów o nazwie `stdout.log` znajduje się w katalogu głównym.

Pobierz go na swój komputer, aby go przejrzeć.

> [!primary]
>
> Dodatkowy plik logów o nazwie `slow-query.log` może pojawić się w katalogu głównym SFTP serwera Web Cloud Databases.
> Plik ten zawiera historię wolnych zapytań wykonanych na serwerze Web Cloud Databases.
>
> Domyślnie wartość jest ustawiona na 1 sekundę w usługach Web Cloud Databases w zmiennej **long_query_time**.
>
> Dzięki temu plikowi możesz zoptymalizować skrypty i zawartość baz danych, aby poprawić wydajność powiązanych usług.
>

### Subskrypcja logów usługi Web Cloud Databases w Logs Data Platform <a name="wcdb-ldp"></a>

[Logs Data Platform](/links/manage-operate/ldp) to platforma do zarządzania logami. Ułatwia agregację i zarządzanie logami, szczególnie w przypadku infrastruktur generujących dużą ilość logów.

Działa poprzez pobieranie logów generowanych przez Twoją infrastrukturę, strony internetowe lub aplikacje, na przykład w celu:

- przechowywania;
- wyświetlania w panelach monitorujących w czasie rzeczywistym;
- umożliwienia użytkownikom wykonywania złożonych zapytań;
- filtrowania według daty, aplikacji, typu lub zawartości.

Aby uzyskać więcej informacji na temat Logs Data Platform, zapoznaj się z naszym przewodnikiem [Wprowadzenie do Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN).

Ponieważ usługi [Web Cloud Databases](/links/web/databases) mogą być używane z wieloma usługami (hosting, VPS, serwery dedykowane itp.), mogą one, oprócz logów w czasie rzeczywistym, być subskrybowane za pośrednictwem strumienia danych w Logs Data Platform.

Aby subskrybować usługę Web Cloud Databases do strumienia danych w Logs Data Platform, mogą wystąpić dwa scenariusze.

**Kliknij każdy przypadek, aby wyświetlić jego zawartość.**

<a name="wcdb-ldp-case1"></a>

/// details | Przypadek 1 - Subskrypcja istniejącego strumienia danych w usłudze Logs Data Platform

Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **4** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Logi`{.action}, a następnie przycisk `Subskrybuj`{.action} po prawej stronie sekcji logów w czasie rzeczywistym.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Krok 3**
>>
>> Jeśli posiadasz kilka usług Logs Data Platform, wybierz żądane odniesienie z listy rozwijanej znajdującej się pod przyciskiem `Dodaj strumień danych`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Krok 4**
>>
>> Istniejący strumień danych jest wyświetlany w tabeli na dole strony. Kliknij przycisk `Subskrybuj`{.action} po prawej stronie odpowiedniego wiersza.
>>
>> Po kilku sekundach pojawi się komunikat potwierdzający utworzenie subskrypcji.

///

/// details | Przypadek 2 - Subskrypcja nowego strumienia danych w usłudze Logs Data Platform

Kliknij na poniższe karty, aby wyświetlić kolejno każdy z **5** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Logi`{.action}, a następnie przycisk `Subskrybuj`{.action} po prawej stronie sekcji logów w czasie rzeczywistym.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/tab-subscribe.png){.thumbnail}
>>
> **Krok 3**
>>
>> Jeśli posiadasz kilka usług Logs Data Platform, wybierz żądane odniesienie z listy rozwijanej znajdującej się pod przyciskiem `Dodaj strumień danych`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/logs/data-stream.png){.thumbnail}
>>
> **Krok 4**
>>
>> Ponieważ strumień danych jeszcze nie istnieje, kliknij przycisk `Dodaj strumień danych`{.action}. Zostaniesz przekierowany na stronę, na której możesz utworzyć nowy strumień danych w usłudze Logs Data Platform.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/logs-data-platform/data-stream/add-data-stream.png){.thumbnail}
>>
>> W razie potrzeby zapoznaj się z naszymi przewodnikami "[Wprowadzenie do Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP)" (EN) i "[Szybki start z Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start)" (EN).
>>
> **Krok 5**
>>
>> Po wypełnieniu formularzy kliknij `Zapisz`{.action}. Zostaniesz przekierowany na kartę `Strumień danych` usługi Logs Data Platform.
>>
>> Aby subskrybować usługę Web Cloud Databases do tego nowego strumienia, wróć na kartę `Logi`{.action} usługi Web Cloud Databases, a następnie postępuj zgodnie z [Przypadkiem 1](#wcdb-ldp-case1) opisanym powyżej.

///

## Sprawdź również <a name="go-further"></a>

[Pierwsze kroki z Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)

[Wprowadzenie do Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_introduction_to_LDP) (EN)

[Szybki start z Logs Data Platform](/pages/manage_and_operate/observability/logs_data_platform/getting_started_quick_start) (EN)

W przypadku wyspecjalizowanych usług (SEO, programowanie itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Dołącz do [grona naszych użytkowników](/links/community).
