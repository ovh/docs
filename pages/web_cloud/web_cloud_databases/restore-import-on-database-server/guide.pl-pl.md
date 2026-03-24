---
title: 'Przywracanie i importowanie bazy danych na serwer baz danych'
excerpt: 'Dowiedz się, jak przywrócić i importować bazę danych na serwerze Web Cloud Databases z poziomu Panelu klienta OVHcloud lub przez phpMyAdmin'
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

W wyniku błędu bazy danych musisz mieć możliwość przywrócenia kopii zapasowej lub importu lokalnej bazy danych.

**Dowiedz się, jak przywrócić i zaimportować bazę danych na serwer baz danych.**

## Wymagania początkowe

- Posiadanie [instancji Web Cloud Databases](/links/web/databases) (zawartej w ofercie [hostingu www Performance](/links/web/hosting))

<!-- CP-NAV-START:web-cloud-databases -->
---

### Dostęp do Panelu klienta OVHcloud

- **Link bezpośredni:** [Web Cloud Databases](/links/control-panel/web-cloud-databases)
- **Ścieżka nawigacji:** `Web Cloud`{.action} > `Web Cloud Databases`{.action} > Wybierz usługę bazy danych

---
<!-- CP-NAV-END:web-cloud-databases -->

## W praktyce

> [!primary]
>
> Rozwiązania [Web Cloud Databases](/links/web/databases) nie dają dostępu do systemu zarządzania bazami danych, ale do baz danych na nim hostowanych.
>
> - Nie ma dostępu superużytkownika „root".
> - Ogólne polecenia SQL działają normalnie, a oprogramowanie takie jak HeidiSQL, SQuirreL SQL lub Adminer jest w pełni kompatybilne.

### Przywracanie i importowanie bazy danych w Panelu klienta

#### Przywrócenie istniejącej kopii zapasowej

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
>> Kliknij kartę `Bazy danych`{.action}.
>>
>> W kolumnie **„Kopie zapasowe"** liczba odpowiada liczbie kopii zapasowych dostępnych dla Twojej bazy danych.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie bazy danych, a następnie `Wyświetl kopie zapasowe`{.action}.
>>
> **Krok 4**
>>
>> Wyświetli się lista dostępnych kopii zapasowych. Kliknij przycisk `...`{.action} po prawej stronie wybranej kopii zapasowej, a następnie `Przywróć kopię zapasową`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/restore-the-backup.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Przywrócenie bazy danych wiąże się z nadpisaniem jej zawartości, a tym samym z potencjalną utratą danych. Jeśli nie masz pewności, co robisz, zalecamy uprzednie wykonanie kopii zapasowej.

#### Import lokalnej kopii zapasowej

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
>> Kliknij kartę `Bazy danych`{.action}.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie bazy danych, a następnie `Importuj plik`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/import-file.png){.thumbnail}
>>
> **Krok 4**
>>
>> ***Masz dwie możliwości:***
>>
>> **1 - Import nowego pliku**
>>
>> Kliknij **„Importuj nowy plik"**, a następnie `Dalej`{.action}.
>>
>> Wpisz nazwę importowanego pliku, kliknij `Przeglądaj`{.action}, aby go wybrać, następnie `Wyślij`{.action}, a na koniec `Dalej`{.action}.
>>
>> > [!warning]
>> >
>> > Plik musi być w formacie „.sql", „.txt" lub „.gz".
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-new-file-step-2.png){.thumbnail}
>>
>> Zaznacz, jeśli chcesz, **„Wyczyść aktualną bazę danych"** przed importem i **„Wyślij e-mail po zakończeniu importu"**, aby otrzymać informację o zakończeniu operacji na głównym adresie e-mail Twojego konta OVHcloud, po czym kliknij `Zatwierdź`{.action}.
>>
>> **2 - Użycie istniejącego pliku**
>>
>> Jeśli wcześniej importowałeś plik, możesz wybrać opcję **„Importuj istniejący plik"**.
>>
>> Wybierz plik z menu rozwijanego i kliknij `Dalej`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/database-import-existing-file-step-2.png){.thumbnail}
>>
>> Zaznacz, jeśli chcesz, **„Wyczyść aktualną bazę danych"** przed importem i **„Wyślij e-mail po zakończeniu importu"**, aby otrzymać informację o zakończeniu operacji na głównym adresie e-mail Twojego konta OVHcloud, po czym kliknij `Zatwierdź`{.action}.

### Import bazy danych poza Panelem klienta

W niektórych przypadkach pamięć RAM dostępna na serwerze baz danych nie pozwala na zrealizowanie żądanego importu poza Panelem klienta. W takim przypadku zalecamy użycie narzędzia OVHcloud w Panelu klienta. Przejdź do sekcji [„Przywracanie i importowanie bazy danych w Panelu klienta"](./#przywracanie-i-importowanie-bazy-danych-w-panelu-klienta) niniejszego przewodnika.

**Kliknij wybraną metodę importu, aby wyświetlić jej zawartość.**

/// details | Import bazy MySQL lub MariaDB z poziomu phpMyAdmin

Aby zaimportować bazę danych bezpośrednio z phpMyAdmin, należy się najpierw zalogować. W tym celu zapoznaj się z sekcją [„Logowanie do bazy danych MySQL lub MariaDB"](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server#logowanie-do-bazy-danych-mysql-lub-mariadb).

Po zalogowaniu się do phpMyAdmin wybierz bazę danych, klikając na jej nazwę.

Następnie kliknij kartę `Importuj`{.action}.

Wybierz plik kopii zapasowej, klikając `Przeglądaj`{.action} (plik nie może przekroczyć 100 MB).

> [!primary]
>
> Zalecamy podzielenie bazy danych na kilka plików, jeśli przekracza ona 100 MB, i wykonanie kilku importów z poziomu phpMyAdmin.
> Import plików o rozmiarze większym niż 100 MB można wykonać z poziomu Panelu klienta, postępując zgodnie z instrukcjami w sekcji [„Przywracanie i importowanie bazy danych w Panelu klienta"](./#przywracanie-i-importowanie-bazy-danych-w-panelu-klienta).

Pozostaw domyślne opcje i kliknij `Uruchom`{.action}, aby rozpocząć import.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-upload-backup-web-cloud-db.png){.thumbnail}

///

/// details | Import bazy MySQL lub MariaDB za pomocą wiersza poleceń

Operacja ta jest możliwa tylko przez [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) z poziomu hostingu współdzielonego OVHcloud.

```bash
cat nazwa_bazy.sql | mysql --host=serwer --user=uzytkownik --port=port --password=haslo nazwa_bazy
```

///

/// details | Import bazy MySQL lub MariaDB z pliku PHP

```php
1. <?php
2. echo "Twoja baza danych jest w trakcie przywracania.......<br>";
3. system("cat nazwa_bazy.sql | mysql --host=serwer --user=uzytkownik --port=port --password=haslo nazwa_bazy");
4. echo "Zakończono. Twoja baza danych jest zainstalowana na tym hostingu.";
5. ?>
```

> [!warning]
>
> - Aby uniknąć dostępu osób trzecich do tego pliku zawierającego wrażliwe dane, zabezpiecz dostęp do niego, korzystając z przewodnika: [Jak chronić dostęp do katalogu hasłem?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Operacja ta jest możliwa tylko z poziomu hostingu współdzielonego OVHcloud.

///

/// details | Import bazy PostgreSQL za pomocą wiersza poleceń

Operacja ta jest możliwa wyłącznie przez [SSH](/pages/web_cloud/web_hosting/ssh_on_webhosting) z poziomu hostingu współdzielonego OVHcloud w wersji stabilnej lub wyższej.

```bash
psql --host=serwer --port=port --user=uzytkownik --password=haslo nazwa_bazy < nazwa_bazy.sql
```

///

/// details | Import bazy PostgreSQL z pliku PHP

```php
1. <?php
2. echo "Twoja baza danych jest w trakcie przywracania.......<br>";
3. system("PGPASSWORD=haslo psql --host=serwer --port=port --user=uzytkownik --password=haslo nazwa_bazy < nazwa_bazy.sql");
4. echo "Zakończono. Twoja baza danych jest zainstalowana na tym hostingu.";
5. ?>
```

> [!warning]
>
> - Aby uniknąć dostępu osób trzecich do tego pliku zawierającego wrażliwe dane, zabezpiecz dostęp do niego, korzystając z przewodnika: [Jak chronić dostęp do katalogu hasłem?](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)
> - Operacja ta jest możliwa tylko z poziomu hostingu współdzielonego OVHcloud.

///

## Sprawdź również

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
