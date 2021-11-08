---
title: Rozwiąż najczęstsze błędy związane z modułami za pomocą 1 kliknięcia
slug: bledy-frameworki-moduly-za-1-kliknieciem
excerpt: Zdiagnozuj najczęstsze przypadki błędów związanych z modułami za pomocą 1 kliknięcia
section: Diagnostyka
order: 2
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 24/06/2021**

## Wprowadzenie

Utworzenie [modułu za pomocą 1 kliknięcia](../hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/) w trybie prostym lub zaawansowanym może spowodować różne nieprawidłowości.

**Dowiedz się, jak zdiagnozować najczęstsze przypadki błędów związanych z modułami za pomocą 1 kliknięcia**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie kompatybilnego [hostingu](https://www.ovhcloud.com/pl/web-hosting/).
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Korzystanie z funkcji [Module za 1 kliknięciem](../hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/), aby utworzyć nową stronę.

## W praktyce

> [!primary]
>
> Wyszczególniamy tutaj najczęstsze błędy. Jeśli zauważysz inną anomalię, zapoznaj się z naszym [FAQ dotyczący hostingu www](../web-hosting-faq/).
>

### "Wystąpił błąd podczas pobierania informacji. (You need at least one free database)"

![1freeDB](images/1freeDB.png){.thumbnail}

Jeśli pojawi się ta wiadomość po uruchomieniu instalacji modułu, nie można utworzyć nowej bazy danych na Twoim hostingu.

#### Rozdział 1: zmień ofertę hostingu

> [!primary]
>
> Zapoznaj się z porównaniem naszych [ofert hostingu](https://www.ovhcloud.com/pl/web-hosting/).
>

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) kliknij `Web Cloud`{.action}, a następnie `Hosting`{.action}. Wybierz odpowiedni hosting i kliknij `Zmień ofertę` w sekcji `Abonament` - `Oferta`:

![upgrade_hosting](images/upgrade_hosting.png){.thumbnail}

Dzięki ofercie [Hosting Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/) i [Hosting Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/) możesz utworzyć do trzech modułów za pomocą 1 kliknięcia. Wraz z pakietem **Hosting Performance** będziesz mógł włączyć za darmo prywatny [serwer SQL](https://www.ovhcloud.com/pl/web-hosting/options/start-sql/).

#### Rozdział 2: usuń niewykorzystaną bazę danych <a name="delete-database"></a>

> [!warning]
>
> Operacja usunięcia bazy danych jest ostateczna. Pociąga to również za sobą usunięcie kopii zapasowych odpowiedniej bazy danych. Jeśli nie masz pewności co do przeprowadzenia tych czynności, skontaktuj się z webmasterem lub jednym z naszych [partnerów](https://partner.ovhcloud.com/pl/directory/).
>

Aby usunąć bazę danych, w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) kliknij pozycję `Web Cloud`{.action}, następnie `Hosting`{.action} i wreszcie `Bazy danych`{.action}. Usuń wybraną bazę danych:

![delete_a_database](images/delete_a_database.png){.thumbnail}

#### Rozdział 3: zamów nowe bazy danych

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) kliknij `Web Cloud`{.action}, a następnie `Hosting`{.action}. W `Bazach danych`{.action} kliknij `Operacje`{.action}:

![order_a_database](images/order_a_database.png){.thumbnail}

> [!primary]
>
> Zapoznaj się z porównaniem naszych [ofert baz danych](https://www.ovhcloud.com/pl/web-hosting/options/start-sql/)
>

#### Rozdział 4: zainstalować moduł na bazie danych

Aby zainstalować moduł na bazie danych, której już używasz, [użyj zaawansowanego](../hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/#instalacja-w-trybie-zaawansowanym)trybu instalacji nowego **modułu za pomocą 1 kliknięcia**.

Aby odnaleźć dane do logowania do bazy danych, sprawdź nasz [FAQ](https://www.ovhcloud.com/pl/web-hosting/).

### "Katalog instalacji nie jest pusty"

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

Po utworzeniu modułu otrzymałeś e-mail z informacją, że katalog instalacyjny modułu nie jest pusty.

Wiadomość ta oznacza, że **Katalog główny** Twojej domeny zawiera jeden lub więcej plików lub katalogów.

Aby powiązać domenę z innym katalogiem, kliknij `Zmień domenę`{.action} w zakładce `MultiSite`{.action}, następnie podaj nazwę nowej **Katalogu głównego** (pusty katalog zostanie automatycznie utworzony na Twoim hostingu).

![modify_root_folder](images/modify_root_folder.png){.thumbnail}

Możesz również połączyć się z hostingiem przez [FTP](../logowanie-przestrzen-dyskowa-ftp-hosting-web/), a następnie usunąć lub przenieść zawartość folderu po jego zapisaniu.

### "Nie można połączyć się z bazą danych" <a name="delete-module"></a>

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

Po uruchomieniu instalacji modułu w trybie zaawansowanym otrzymałeś wiadomość e-mail z informacją, że moduł nie może się łączyć z wskazaną bazą danych. 

Należy więc sprawdzić dane dostępowe do bazy danych. Aby je znaleźć, sprawdź nasz [FAQ](https://www.ovhcloud.com/pl/web-hosting/).

Następnie usuń moduł w zakładce `Moduły za 1 kliknięciem`{.action}:

![delete_a_module](images/delete_a_module.png){.thumbnail}

Następnie uruchom ponownie instalację nowego modułu.

### Twoja domena nie jest dostępna podczas tworzenia modułu

![domainenotproposed](images/domainenotproposed.png){.thumbnail}

Kliknij kartę `MultiSite`{.action}, po czym przeprowadź następujące kontrole:

|Scenariusz|Co należy zrobić?|
|---|---|
|Domena lub subdomena przypisana do strony, którą chcesz utworzyć nie wyświetla się w opcji `MultiSite`{.action}.|Dodaj swoją domenę zgodnie z [tymi wskazówkami](../konfiguracja-multisite-na-hostingu/#etap-2-dodanie-domeny-lub-subdomeny).|
|Domena została usunięta z strony podpiętej w opcji MultiSite bez konieczności wykonywania przez Ciebie żadnych czynności.|Jeśli Twoja domena lub [Strefa DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/#zrozumienie-pojecia-dns) nie są zarządzane z poziomu konta OVHcloud, dodaj domenę do `MultiSite`{.action} zgodnie z [tym przewodnikiem](../konfiguracja-multisite-na-hostingu/#etap-22-dodaj-domene-zewnetrzna).|

### Twój moduł wyświetla się na koncie www typu "xxxxx.cluster0xx.hosting.ovh.net"

![url-cluster](images/url-cluster.png){.thumbnail}

Po wykonaniu wszystkich niezbędnych kopii zapasowych [usuń moduł](#delete-module), następnie jego [bazę danych](#delete-database). Następnie uruchom ponownie instalację dla wybranej domeny.

### Twoja stara strona wciąż się wyświetla

Ta nieprawidłowość może mieć kilka przyczyn:

- Dokonałeś ostatnio zmiany strefy lub serwerów [DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/#zrozumienie-pojecia-dns) lub [transferu domeny](../../domains/przeniesienie-domeny-globalnej/). Odczekaj, aż operacje te zostaną zakończone (48 godziny w przypadku zmiany serwerów DNS). Pamiętaj, aby zrestartować urządzenia (komputer, smartfon, box, etc.) i usunąć cache przeglądarki.

- Twoja domena jest zawsze powiązana z Twoim poprzednim hostingiem. W tym przypadku zmień [strefę DNS](../../domains/hosting_www_jak_edytowac_strefe_dns/#modyfikacja-strefy-dns-domeny_1) lub [serwery DNS](../../domains/hosting_www_informacje_na_temat_serwerow_dns/#zmien-serwery-dns) lub skontaktuj się z aktualnym dostawcą usług hostingowych.

## ## Sprawdź również <a name="gofurther"></a>

[Jak zdiagnozować białą stronę?](../hosting_www_jak_sprawdzic_przyczyne_wyswietlania_sie_bialej_strony/)

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/), jeśli chcesz wykonać specjalistyczne operacje (pozycjonowanie, rozwój, itp.)

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i korzystania z rozwiązań OVHcloud, sprawdź naszą [ofertę wsparcia](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
