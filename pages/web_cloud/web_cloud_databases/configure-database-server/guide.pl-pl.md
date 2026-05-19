---
title: 'Konfiguracja serwera baz danych'
excerpt: 'Dowiedz się, jak skonfigurować i zoptymalizować serwer bazy danych'
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

Za pomocą serwerów baz Web Cloud Databases możesz wpłynąć na globalne parametry serwera. Możesz również wyświetlić aktywność swojego serwera.

**Dowiedz się, jak skonfigurować i zoptymalizować serwer baz danych.**

## Wymagania początkowe

- Posiadanie [instancji Web Cloud Databases](/links/web/databases) (zawartej w ofercie [hostingu www Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wybierz usługę bazy danych

---
<!-- CP-NAV-END:web-cloud-databases -->

## W praktyce

### Wyświetlanie ogólnych informacji o serwerze baz danych

<!-- CP-STEPS-START:visionner-informations-generales -->
Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Upewnij się, że jesteś na karcie `Informacje ogólne`{.action}.
>>
>> W zakładce tej znajdziesz ważne informacje dotyczące Twojej instancji SQL. Prosimy o poświęcenie kilku minut na sprawdzenie, czy wyświetlane informacje są poprawne i zgodne z poniższymi wskazówkami.
>>
>> |Informacja|Szczegóły|
>> |---|---|
>> |Status usługi|Pokazuje, czy instancja jest uruchomiona, w trakcie restartu lub zawieszona. Twoja instancja musi być uruchomiona, abyś mógł przeprowadzać na niej działania.|
>> |Typ|Pokazuje system baz danych używany przez serwer. Jeśli nie masz pewności, czy stosowany typ jest prawidłowy, wiedz, że najczęściej wybieranym jest "MySQL", ale istnieją również inne (PostgreSQL, MariaDB). Na przykład, jeśli Twoja strona WWW korzysta z modułu WordPress, system MySQL jest do tego najlepiej dopasowany.|
>> |Wersja|Pokazuje wersję systemu baz danych używaną przez serwer. Upewnij się, czy Twoja strona WWW jest kompatybilna z wybraną wersją.|
>> |Saturacja CPU|Wyświetla czas procesora spędzony w stanie wysycenia w ciągu ostatnich 24 godzin.|
>> |RAM|Pokazuje pamięć operacyjną dostępną dla Twojej instancji oraz ewentualne przekroczenia pamięci. Serwer baz danych posiada dedykowane i gwarantowane zasoby: pamięć RAM. W razie potrzeby możesz ją zwiększyć. Otrzymasz również ostrzeżenie, jeśli zużyjesz wszystkie zasoby pamięci RAM Twojej instancji.|
>> |Infrastruktura|Pokazuje infrastrukturę używaną przez Twoją instancję. Jest to wewnętrzne oznaczenie infrastruktury OVHcloud.|
>> |Centrum danych|Pokazuje centrum danych, w którym została uruchomiona instancja. Upewnij się, czy centrum danych Twojej instancji jest takie samo, jak centrum danych hostingu OVHcloud, na którym Twoja strona WWW jest lub będzie hostowana.|
>> |Host|Pokazuje serwer OVHcloud, na którym utworzona jest Twoja instancja. Jest to wewnętrzne oznaczenie infrastruktury OVHcloud i może być wykorzystywane w komunikatach dotyczących [incydentów OVHcloud](https://web-cloud.status-ovhcloud.com/).|
>>
>> ![Informacje ogólne](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

<!-- CP-STEPS-END:visionner-informations-generales -->

### Zarządzanie dostępami

Usługa Web Cloud Databases jest dostępna z poziomu hostingów OVHcloud lub/i z sieci publicznej.

**Kliknij każdy tytuł, aby wyświetlić jego zawartość.**

<!-- CP-STEPS-START:autoryzuj-ip -->
/// details | Autoryzacja adresu IP

Aby uzyskać dostęp do instancji Web Cloud Databases, należy wskazać adresy IP lub zakresy adresów IP, które mogą się łączyć z Twoimi bazami danych.

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Autoryzowane adresy IP`{.action}, a następnie przycisk `Dodaj adres IP / maskę`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask.png){.thumbnail}
>>
> **Krok 3**
>>
>> W oknie, które się wyświetli, wskaż adres IP lub maskę, którą chcesz autoryzować w `IP / maska`{.action}, a następnie dodaj opis, jeśli chcesz. Zdecyduj, czy chcesz udzielić dostępu wyłącznie do baz danych, czy również do SFTP. Na koniec kliknij `Zatwierdź`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}

///
<!-- CP-STEPS-END:autoryzuj-ip -->

<!-- CP-STEPS-START:autoryzuj-hosting -->
/// details | Autoryzacja połączeń z hostingami OVHcloud

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Autoryzowane adresy IP`{.action}.
>>
> **Krok 3**
>>
>> Zaznacz opcję `Zezwól hostingowi OVHcloud na dostęp do bazy danych`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-empty.png){.thumbnail}

///
<!-- CP-STEPS-END:autoryzuj-hosting -->

### Zmiana oferty Web Cloud Databases <a name="modify-ram-web-cloud-db"></a>

<!-- CP-STEPS-START:modifier-offre -->
> [!warning]
>
> Jeśli Twoja usługa Web Cloud Databases jest powiązana z hostingiem **Performance**, musisz wcześniej odłączyć ofertę Web Cloud Databases od hostingu **Performance**, aby przejść na wyższą ofertę.
>
> Aby odłączyć usługę Web Cloud Databases od hostingu **Performance**, zapoznaj się z naszym przewodnikiem "[Odłączenie rozwiązania Web Cloud Databases od hostingu WWW](/pages/web_cloud/web_cloud_databases/detach-from-web-hosting)".
>
> **Operacja ta jest nieodwracalna, a usługa Web Cloud Databases będzie fakturowana niezależnie od hostingu Performance.**
>

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na karcie **Informacje ogólne** wyświetlanej domyślnie kliknij `...`{.action} po prawej stronie słowa "RAM", a następnie `Zmień ilość pamięci RAM`{.action}, aby przejść do zamówienia tej zmiany.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/change-the-amount-of-ram.png){.thumbnail}
>>
> **Krok 3**
>>
>> Wybierz żądaną ilość pamięci RAM i kliknij `Dalej`{.action}. Następnie możesz wybrać żądany okres.
>>
>> > [!primary]
>> >
>> > Pozostały okres do wygaśnięcia zostanie naliczony proporcjonalnie. Naliczenie proporcjonalne będzie oparte na dacie wygaśnięcia instancji Web Cloud Databases, a nie na dacie złożenia zamówienia.
>>
>> Po zatwierdzeniu regulaminów zostaniesz przekierowany do zamówienia, aby opłacić tę zmianę. Zmiana zostanie zastosowana w ciągu kilku godzin.
>>
>> > [!warning]
>> >
>> > Jeśli aktualnie posiadasz darmową usługę Web Cloud Databases powiązaną z hostingiem Performance, zmiana oferty oznacza utratę jej bezpłatności.

<!-- CP-STEPS-END:modifier-offre -->

### Zmiana konfiguracji serwera baz danych

**Kliknij każdy tytuł, aby wyświetlić jego zawartość.**

<!-- CP-STEPS-START:konfiguruj-mysql-mariadb -->
/// details | Instancja MySQL i MariaDB

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Konfiguracja`{.action}.
>>
> **Krok 3**
>>
>> W polu **Ogólna konfiguracja MySQL** znajdziesz konfigurację aktualnie zdefiniowaną dla Twojej bazy danych. Możesz ją bezpośrednio zmienić, a następnie kliknąć `Wyślij`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-mysql.png){.thumbnail}
>>
>> - **MaxAllowedPacket**: Maksymalny rozmiar pakietu.
>> - **Max_user_connections**: Liczba jednoczesnych połączeń autoryzowanych na użytkownika.
>> - **AutoCommit**: Określa, czy zapytania są automatycznie zatwierdzane (committed), czy nie.
>> - **Interactive_timeout**: Czas (w sekundach), przez który serwer czeka na działanie w połączeniu interaktywnym przed jego zamknięciem.
>> - **InnodbBufferPoolSize**: Wybrany rozmiar pamięci buforowej.
>> - **MaxConnections:** Liczba jednoczesnych połączeń autoryzowanych na serwerze baz danych.
>> - **Wait_timeout**: Czas (w sekundach), przez który serwer czeka na działanie w połączeniu nieinteraktywnym przed jego zamknięciem.
>> - **Event_scheduler**: Uruchamia wykonywanie zapytań zaprogramowanych bezpośrednio na serwerze MySQL.
>> - **sql_mode**: Opcja **sql_mode** wpływa na obsługiwaną składnię SQL oraz sprawdzanie poprawności danych przez MySQL/MariaDB.
>>
>> > [!primary]
>> > Jeśli na Twojej stronie pojawi się błąd wskazujący **"Too many connections"**, jest to spowodowane przekroczeniem liczby jednoczesnych połączeń do serwera baz danych. Możesz wówczas zwiększyć zmienną **"MaxConnections"**, jeśli nie osiągnęła jeszcze wartości maksymalnej.
>>
>> > [!primary]
>> >
>> > <b>sql_mode</b>:
>> >
>> > &emsp;&emsp;Tryb domyślny dla MariaDB 10.1:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION,NO_AUTO_CREATE_USER</code></pre>
>> >
>> > &emsp;&emsp;Tryb domyślny dla MariaDB 10.2 i nowszych wersji:
>> > <pre class="highlight language-console"><code class="language-console">STRICT_TRANS_TABLES,ERROR_FOR_DIVISION_BY_ZERO,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Tryb domyślny dla MySQL 5.6:
>> > <pre class="highlight language-console"><code class="language-console">NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > &emsp;&emsp;Tryb domyślny dla MySQL 5.7 i nowszych wersji:
>> > <pre class="highlight language-console"><code class="language-console">ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION</code></pre>
>> >
>> > Zalecamy, aby zawsze używać trybu domyślnego, chyba że baza danych została zaktualizowana z wersji mającej inny tryb domyślny niż bieżąca wersja.
>>
>> Wprowadź niezbędne zmiany i kliknij `Zatwierdź`{.action}.

> [!warning]
>
> Każda zmiana wymaga restartu serwera baz danych.
>

///
<!-- CP-STEPS-END:konfiguruj-mysql-mariadb -->

<!-- CP-STEPS-START:konfiguruj-postgresql -->
/// details | Instancja PostgreSQL

Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Konfiguracja`{.action}.
>>
> **Krok 3**
>>
>> W polu **Ogólna konfiguracja PostgreSQL** znajdziesz konfigurację aktualnie zdefiniowaną dla Twojej bazy danych. Możesz ją bezpośrednio zmienić, a następnie kliknąć `Wyślij`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/configuration/general-configuration-of-postgresql.png){.thumbnail}
>>
>> - **log_min_messages**: Określa poziomy wiadomości rejestrowanych w logach serwera. Poziomy dostępne dla rozwiązania Web Cloud Databases to:
>>     - **"WARNING"**: Dostarcza komunikaty ostrzegawcze o potencjalnych problemach.
>>     - **"ERROR"**: Wysyła błąd, który spowodował anulowanie bieżącego polecenia.
>>     - **"LOG"**: Rejestruje informacje dla administratorów serwera.
>>     - **"FATAL"**: Wysyła błąd, który spowodował zakończenie bieżącej sesji.
>>     - **"PANIC"**: Wysyła błąd, który spowodował zakończenie wszystkich sesji.
>>
>> Każdy poziom obejmuje wszystkie następne poziomy. Im wyższy poziom, tym mniej wiadomości jest rejestrowanych w logach serwera.
>>
>> Domyślnie jest ustawiona wartość **"WARNING"**, ponieważ zawiera wartości **"ERROR"**, **"LOG"**, **"FATAL"** i **"PANIC"**.
>>
>> Możesz również włączyć rozszerzenia dla swoich baz danych. W tym celu kliknij kartę `Bazy danych`{.action}, a następnie ikonę tabeli dla Twojej bazy danych w kolumnie **"Rozszerzenia"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/extensions.png){.thumbnail}

///
<!-- CP-STEPS-END:konfiguruj-postgresql -->

### Zmiana wersji MySQL, PostgreSQL lub MariaDB serwera baz danych

<!-- CP-STEPS-START:changer-version -->
Kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na karcie **Informacje ogólne** aktualna wersja pojawia się w wierszu **Wersja**.
>>
> **Krok 3**
>>
>> Aby zmienić tę wersję, kliknij `Zmień wersję`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/postgre-12-update-version.png){.thumbnail}

/// details | Jak poznać dokładną wersję PostgreSQL, której używam?

Wprowadź poniższe polecenie w phpPgAdmin, klikając na **Twoją bazę danych** w sekcji **"SQL"**, a następnie kliknij `Uruchom`{.action}:

```sql
select version();
```

///

/// details | Jak poznać dokładną wersję MySQL lub MariaDB, której używam?

Wprowadź poniższe polecenie w phpMyAdmin, w sekcji **"SQL"**, a następnie kliknij `Wykonaj`{.action}:

```sql
show variables like "version";
```

///

> [!primary]
>
> - Przed migracją do wyższej wersji upewnij się, że Twoja baza danych jest kompatybilna z wybraną wersją.
> - Zmiana zostanie zastosowana w ciągu kilku minut.
>

> [!warning]
>
> Nie można przejść bezpośrednio ze starszej wersji do najnowszej.
> Korzystanie ze wszystkich wersji pośrednich jest obowiązkowe.
>

<!-- CP-STEPS-END:changer-version -->

### Logi i metryki

**Kliknij każdy tytuł, aby wyświetlić jego zawartość.**

/// details | Dostęp do logów

Aby uzyskać dostęp do logów rozwiązania Web Cloud Databases, zapoznaj się z naszym przewodnikiem "[Web Cloud Databases - Jak pobrać logi](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

///

<!-- CP-STEPS-START:monitoruj-ram -->
/// details | Monitorowanie zużycia pamięci RAM

Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Metryki`{.action}. Znajdziesz tam wykres **"Statystyki zużycia pamięci RAM"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/ram-memory-usage-statistics.png){.thumbnail}

///
<!-- CP-STEPS-END:monitoruj-ram -->

<!-- CP-STEPS-START:monitoruj-polaczenia -->
/// details | Monitorowanie liczby połączeń na minutę

Wykres ten pozwala na śledzenie, w ciągu ostatnich 24 godzin, obciążenia połączeniami na minutę na serwerze baz danych.

Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Metryki`{.action}. Znajdziesz tam wykres **"Statystyki całkowitej liczby połączeń na minutę"**.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/metrics/statistics-for-total-connections-per-minute.png){.thumbnail}

///
<!-- CP-STEPS-END:monitoruj-polaczenia -->

### Optymalizacja baz danych

Utrzymuj bazę danych w dobrym stanie, aby zapewnić jej wysoką wydajność i szybkie zwracanie informacji do skryptów. Wymaga to ustrukturyzowanej i zoptymalizowanej bazy danych.

**Kliknij każdy tytuł, aby wyświetlić jego zawartość.**

/// details | Indeksowanie bazy danych

Aby przyspieszyć wyszukiwanie podczas zapytania, należy dodać indeks do pól używanych w klauzulach WHERE.

Przykład: regularnie wyszukujesz osoby w danym mieście. Zaindeksuj pole "city" za pomocą następującego zapytania:

```sql
ALTER TABLE 'test' ADD INDEX ('city')
```

///

/// details | Czyszczenie bazy danych

Niektóre z Twoich danych nie są już używane? Archiwizując je, zmniejszysz rozmiar tabel, a wyszukiwania będą szybsze.

///

/// details | Ograniczenie wyświetlania

Ogranicz wyświetlanie rekordów do ustalonej liczby (np. 10 na stronę), korzystając z części LIMIT zapytania SQL.

///

/// details | Grupowanie zapytań

Zbierz wszystkie zapytania na początku skryptu w poniższy sposób:

```bash
open_connection
request1
request2
...
close_connection
Display...
Process data
Loop through data...
Display...
...
```

///

/// details | Pobieranie tylko niezbędnych danych

W zapytaniach SQL upewnij się, że wybierasz tylko to, czego potrzebujesz, i nie zapominaj o połączeniach między tabelami.

Przykład:

```sql
(where table1.champs = table2.champs2)
```

///

/// details | Unikanie opcji zużywających zbyt dużo zasobów

Unikaj na przykład stosowania **"HAVING"**. Zwiększa to obciążenie zapytań. Podobnie unikaj korzystania z **"GROUP BY"**, chyba że jest to bezwzględnie konieczne.

///

## Sprawdź również

[Lista adresów IP klastrów i hostingów](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
