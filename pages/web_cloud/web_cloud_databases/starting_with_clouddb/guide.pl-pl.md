---
title: 'Pierwsze kroki z usługą Web Cloud Databases'
excerpt: 'Dowiedz się, jak rozpocząć korzystanie z rozwiązania Web Cloud Databases'
updated: 2026-03-24
---

## Wprowadzenie

Rozwiązanie Web Cloud Databases udostępnia instancję baz danych z dedykowanymi i gwarantowanymi zasobami, zapewniając wydajność i elastyczność.
Domyślnie rozwiązanie Web Cloud Databases jest powiązane z siecią hostingów WWW OVHcloud. Możesz je również powiązać z dowolną inną siecią za pomocą listy autoryzowanych adresów IP.

**Dowiedz się, jak rozpocząć korzystanie z rozwiązania Web Cloud Databases.**

## Wymagania początkowe

- [Instancja Web Cloud Databases](/links/web/databases) (zawarta w ofercie [hostingu WWW Performance](/links/web/hosting)).

<!-- CP-NAV-START:web-cloud-databases -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wybierz usługę bazy danych

---
<!-- CP-NAV-END:web-cloud-databases -->

## W praktyce

### Aktywacja serwera Web Cloud Databases zawartego w ofercie hostingu WWW

Jeśli Twoja oferta hostingu obejmuje opcję Web Cloud Databases, kliknij poniższe karty, aby wyświetlić kolejne **3** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Hosting](/links/control-panel/web-hosting), następnie wybierz odpowiedni hosting WWW.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na karcie `Informacje ogólne`, w sekcji `Konfiguracja`, kliknij przycisk `...`{.action} po prawej stronie **Web Cloud Databases**. Następnie kliknij `Włącz`{.action}, aby rozpocząć proces aktywacji.
>>
>> ![Informacje ogólne](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/web-cloud-databases-enable.png){.thumbnail}
>>
> **Krok 3**
>>
>> Postępuj zgodnie z wyświetlonymi instrukcjami, aby określić typ i wersję serwera Web Cloud Databases. Będzie on następnie dostępny w lewej kolumnie, w sekcji `Web Cloud Databases`{.action}.

### Wyświetlanie informacji ogólnych instancji

Kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Nazwa usługi Web Cloud Databases w Panelu klienta OVHcloud zawiera część identyfikatora klienta i kończy się trzema cyframi (001 dla pierwszej zainstalowanej usługi Web Cloud Databases, 002 dla drugiej itd.).
>>
> **Krok 2**
>>
>> Upewnij się, że jesteś na karcie `Informacje ogólne`{.action}.
>>
>> Sprawdź, czy wyświetlane informacje są poprawne lub odpowiadają poniższym wskazówkom.
>>
>> |Informacja|Szczegóły|
>> |---|---|
>> |Stan usługi|Wskazuje, czy instancja jest uruchomiona, w trakcie restartu lub zawieszona. Instancja musi być uruchomiona, aby można było na niej wykonywać operacje.|
>> |Typ|Wskazuje system baz danych używany przez serwer.|
>> |Wersja|Wskazuje wersję systemu baz danych używaną przez serwer. Upewnij się, że Twoja strona WWW jest kompatybilna z wybraną wersją.|
>> |Nasycenie CPU|Wskazuje czas CPU spędzony w nasyceniu. Instancja Web Cloud Databases nie jest ograniczona pod względem CPU, ale należy uważać, aby jej nie przeciążyć.|
>> |RAM|Wskazuje pamięć RAM dostępną dla instancji oraz ewentualne przekroczenia pamięci. Instancja Web Cloud Databases dysponuje dedykowanymi i gwarantowanymi zasobami: pamięcią RAM. W razie potrzeby można ją rozszerzyć i otrzymywać powiadomienia o wykorzystaniu wszystkich zasobów pamięci instancji.|
>> |Infrastruktura|Wskazuje infrastrukturę używaną przez instancję. Jest to informacja związana z infrastrukturą OVHcloud.|
>> |Centrum danych|Wskazuje centrum danych, w którym instancja została utworzona.|
>> |Host|Wskazuje serwer OVHcloud, na którym instancja została utworzona. Jest to informacja związana z infrastrukturą OVHcloud i może być używana w komunikatach dotyczących [awarii OVHcloud](https://www.status-ovhcloud.com/).|
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/general-information/general-information.png){.thumbnail}

### Tworzenie bazy danych

> [!primary]
>
> Ten krok nie dotyczy systemu baz danych Redis.

Kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Bazy danych`{.action}.
>>
> **Krok 3**
>>
>> Kliknij `Dodaj bazę danych`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database.png){.thumbnail}
>>
>> > [!primary]
>> >
>> > Tworzenie schematów PostgreSQL jest obecnie niedostępne na serwerach Web Cloud Databases.
>>
> **Krok 4**
>>
>> Wypełnij pola zgodnie z podanymi kryteriami. Możesz bezpośrednio utworzyć użytkownika, zaznaczając pole **"Utwórz użytkownika"**:
>>
>> - **Nazwa bazy danych** (wymagane): to nazwa przyszłej bazy danych.
>> - **Nazwa użytkownika** (tylko jeśli pole `Utwórz użytkownika` jest zaznaczone): użytkownik, który będzie mógł się łączyć z bazą danych i wykonywać zapytania.
>> - **Uprawnienia** (tylko jeśli pole `Utwórz użytkownika` jest zaznaczone): uprawnienia przypisane do użytkownika w bazie danych. W przypadku standardowego użycia wybierz `Administrator`{.action}. Uprawnienia można zmienić w późniejszym czasie.
>> - **Hasło**/**Potwierdź hasło** (tylko jeśli pole `Utwórz użytkownika` jest zaznaczone): wybierz hasło, a następnie potwierdź je.
>>
>> Kliknij `Zatwierdź`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/add-database-confirmation.png){.thumbnail}

### Tworzenie użytkownika

> [!primary]
>
> Ten krok nie dotyczy systemu baz danych Redis.

Jeśli użytkownik został utworzony jednocześnie z bazą danych w poprzednim kroku, ten krok jest opcjonalny. Projekt może jednak wymagać kilku użytkowników z różnymi uprawnieniami (na przykład odczyt/zapis dla jednego i tylko odczyt dla drugiego).

Jeśli Twój projekt nie wymaga dodatkowego użytkownika, możesz przejść do kolejnego kroku. W przeciwnym razie kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij kartę `Użytkownicy i uprawnienia`{.action}.
>>
> **Krok 3**
>>
>> Kliknij `Dodaj użytkownika`{.action}.
>>
>> ![web-cloud-databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/users-and-rights/add-user.png){.thumbnail}
>>
> **Krok 4**
>>
>> Wpisz "nazwę użytkownika" i "hasło", następnie kliknij `Zatwierdź`{.action}.

Jeśli chcesz zmienić uprawnienia istniejącego użytkownika, zapoznaj się z przewodnikiem "[Web Cloud Databases - Zmiana uprawnień użytkownika](/pages/web_cloud/web_cloud_databases/modify_rights_for_users)".

### Import bazy danych

> [!primary]
>
> Ten krok dotyczy sytuacji, gdy chcesz zaimportować kopię zapasową istniejącej bazy danych. Jeśli tak nie jest, przejdź do kolejnego kroku.

Aby zaimportować bazę danych, zapoznaj się z przewodnikiem "[Przywracanie i importowanie bazy danych na serwer baz danych](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)".

Opisano tam kilka metod importu.

### Autoryzacja adresu IP

Aby instancja Web Cloud Databases działała, konieczne jest wskazanie adresów IP lub zakresów IP, które mogą łączyć się z bazami danych.

W tym celu kliknij poniższe karty, aby wyświetlić kolejne **4** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Na wyświetlonej stronie kliknij kartę `Autoryzowane adresy IP`{.action}.
>>
>> ![Autoryzowane adresy IP](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorised-ips.png){.thumbnail}
>>
> **Krok 3**
>>
>> Kliknij przycisk `Dodaj adres IP / maskę`{.action} nad tabelą.
>>
>> ![Interfejs autoryzowanych adresów IP](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/tab-0000-sftp-hosting-enabled.png){.thumbnail}
>>
>> > [!success]
>> >
>> > Jeśli chcesz zmienić już autoryzowany adres IP lub zakres adresów IP, kliknij przycisk `...`{.action} po prawej stronie odpowiedniego wiersza w tabeli, a następnie `Edytuj whitelist`{.action}.
>>
> **Krok 4**
>>
>> W oknie, które się otworzy, należy wypełnić kilka pól:
>>
>> ![Dodanie adresu IP lub maski](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/authorized-ips/add-an-ip-address-mask-confirmation.png){.thumbnail}
>>
>> - `IP / maska *`{.action}: Wpisz adres IP (np. `203.0.113.44`) lub zakres adresów IP (np. `203.0.113.0/24` obejmujący wszystkie adresy IP od `203.0.113.0` do `203.0.113.255`), które chcesz autoryzować w rozwiązaniu Web Cloud Databases.
>> - `Opis`{.action} (opcjonalnie): Możesz dodać informacje o roli danego adresu IP lub zakresu adresów IP.
>> - `Bazy danych`{.action}: Zaznacz to pole, aby adres IP lub zakres adresów IP mógł uzyskać dostęp do baz danych Twojego rozwiązania Web Cloud Databases.
>> - `SFTP`{.action}: Zaznacz to pole, aby adres IP lub zakres adresów IP mógł uzyskać dostęp do logów Twojego rozwiązania Web Cloud Databases.
>>
>> > [!warning]
>> >
>> > Zdecydowanie odradzamy zaznaczanie pola `Bazy danych`{.action} w celu autoryzacji zakresu adresów IP `0.0.0.0/0` do dostępu do baz danych.
>> >
>> > Umożliwiłoby to dostęp do baz danych dla wszystkich istniejących adresów IPv4.
>>
>> Po uzupełnieniu informacji kliknij przycisk `Zatwierdź`{.action}.

### Autoryzacja połączeń z hostingu WWW OVHcloud <a name="trustip"></a>

Domyślnie rozwiązanie Web Cloud Databases jest automatycznie powiązane z hostingami WWW OVHcloud. Jeśli chcesz, możesz wyłączyć dostęp hostingów WWW OVHcloud do Web Cloud Databases.

W tym celu zapoznaj się z przypadkami szczególnymi w przewodniku "[Web Cloud Databases - Jak autoryzować adres IP?](/pages/web_cloud/web_cloud_databases/authorise_IP)", aby włączyć lub wyłączyć dostęp hostingów WWW OVHcloud do Web Cloud Databases.

### Powiązanie strony WWW z bazą danych

Teraz, gdy baza danych jest utworzona, co najmniej jeden użytkownik ma uprawnienia do niej, a przynajmniej jeden adres IP lub hostingi WWW OVHcloud zostały autoryzowane w instancji Web Cloud Databases, pozostaje tylko powiązać stronę WWW z bazą danych. Ten krok można wykonać na kilka sposobów, w zależności od strony WWW lub systemu CMS (WordPress, Joomla! itp.) oraz etapu instalacji strony WWW.

Do tego potrzebne jest 5 następujących informacji:

|Informacja|Opis|
|---|---|
|Nazwa bazy danych|Nazwa zdefiniowana podczas tworzenia bazy danych.|
|Nazwa użytkownika|Nazwa użytkownika zdefiniowana podczas tworzenia bazy danych lub ewentualny dodatkowy użytkownik.|
|Hasło użytkownika|Hasło powiązane z użytkownikiem, zdefiniowane w poprzednich krokach.|
|Nazwa hosta serwera|Serwer, który należy podać, aby strona WWW mogła połączyć się z bazą danych.|
|Port serwera|Port połączenia z instancją Web Cloud Databases, aby strona WWW mogła połączyć się z bazą danych.|

Aby je znaleźć, kliknij poniższe karty, aby wyświetlić kolejne **2** kroki.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Pobierz następujące informacje o połączeniu:
>>
>> - **Serwer (nazwa hosta) i port:** widoczne na karcie `Informacje ogólne`{.action}, w sekcji `Informacje o połączeniu`.
>> - **Nazwa użytkownika:** widoczna na karcie `Użytkownicy i uprawnienia`{.action}.
>> - **Hasło:** hasło powiązane z użytkownikiem. Jeśli je zapomniałeś, przejdź do karty `Użytkownicy i uprawnienia`{.action}, kliknij `...`{.action} po prawej stronie odpowiedniego użytkownika, a następnie `Zmień hasło`{.action}.
>>
>> > [!warning]
>> >
>> > W przypadku zmiany hasła użytkownika bazy danych wszystkie aplikacje/strony WWW, które korzystają z tej bazy danych, muszą zostać odpowiednio zaktualizowane.

> [!warning]
>
> Pole `port`{.action} może nie być dostępne w konfiguracji Twojej strony WWW. Należy dodać to pole po nazwie hosta serwera, oddzielając je znakiem *:*.
>
> Na przykład, dla nazwy hosta `aaXXXXX-XXX.eu.clouddb.ovh.net` z portem SQL `12345` należy wpisać `aaXXXXX-XXX.eu.clouddb.ovh.net:12345` w polu "Host" / "Nazwa hosta".

### Pobieranie logów serwera Web Cloud Databases

Aby uzyskać dostęp do logów rozwiązania Web Cloud Databases, zapoznaj się z przewodnikiem "[Web Cloud Databases - Jak pobrać logi?](/pages/web_cloud/web_cloud_databases/retrieve-logs)".

## Sprawdź również

[Tworzenie baz danych i użytkowników na serwerze baz danych](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server)

[Logowanie do bazy danych serwera baz danych](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)

[Tworzenie kopii zapasowej i eksport bazy danych na serwerze baz danych](/pages/web_cloud/web_cloud_databases/save-export-on-database-server)

[Przywracanie i importowanie bazy danych na serwer baz danych](/pages/web_cloud/web_cloud_databases/restore-import-on-database-server)

[Konfiguracja serwera baz danych](/pages/web_cloud/web_cloud_databases/configure-database-server)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój itp.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz uzyskać wsparcie w zakresie użytkowania i konfiguracji Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
