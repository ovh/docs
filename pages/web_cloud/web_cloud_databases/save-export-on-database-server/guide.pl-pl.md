---
title: 'Tworzenie i eksportowanie kopii zapasowej bazy danych na serwerze baz danych'
excerpt: 'Dowiedz się, jak tworzyć kopie zapasowe i eksportować bazę danych na serwerze Web Cloud Databases z poziomu Panelu klienta OVHcloud lub przez phpMyAdmin'
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

Baza danych może zawierać dużą liczbę informacji niezbędnych dla Twojej strony WWW. Dlatego ważne jest, aby móc ją zapisać lub wyeksportować.

**Dowiedz się, jak tworzyć kopie zapasowe i eksportować bazę danych z serwera baz danych.**

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

> [!primary]
>
> Rozwiązania [Web Cloud Databases](/links/web/databases) nie dają dostępu do systemu zarządzania bazami danych, ale do baz danych na nim hostowanych.
>
> - Brak dostępu superużytkownika "root".
> - Ogólne polecenia SQL działają normalnie, a oprogramowanie takie jak HeidiSQL, SQuirreL SQL lub Adminer jest w pełni kompatybilne.
>

### Tworzenie kopii zapasowych i eksportowanie bazy danych w Panelu klienta

> [!primary]
>
> - Kopie zapasowe są wykonywane automatycznie raz dziennie
> na wszystkich Twoich bazach danych.
> - Automatyczne i ręczne kopie zapasowe są przechowywane przez 30 dni.
> Po tym czasie zostaną automatycznie usunięte.

#### Wykonanie ręcznej kopii zapasowej

Kliknij poniższe zakładki, aby wyświetlić kolejno każdy z **3** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}.
>>
>> W kolumnie **Kopie zapasowe** liczba odpowiada liczbie kopii zapasowych dostępnych dla Twojej bazy danych.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie bazy danych, a następnie `Zapisz teraz`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/back-up-now.png){.thumbnail}

#### Eksport kopii zapasowej

Kliknij poniższe zakładki, aby wyświetlić kolejno każdy z **4** kroków.

> [!tabs]
> **Krok 1**
>>
>> Przejdź na stronę [Web Cloud Databases](/links/control-panel/web-cloud-databases), następnie wybierz odpowiednie rozwiązanie.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases.png){.thumbnail}
>>
> **Krok 2**
>>
>> Kliknij zakładkę `Bazy danych`{.action}.
>>
>> W kolumnie **Kopie zapasowe** liczba odpowiada liczbie kopii zapasowych dostępnych dla Twojej bazy danych.
>>
> **Krok 3**
>>
>> Kliknij przycisk `...`{.action} po prawej stronie bazy danych, a następnie `Wyświetl kopie zapasowe`{.action}.
>>
>> ![Web Cloud Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-cloud-databases/databases/show-backups.png){.thumbnail}
>>
> **Krok 4**
>>
>> Pojawi się lista dostępnych kopii zapasowych. Kliknij przycisk `...`{.action} po prawej stronie wybranej kopii zapasowej, a następnie `Pobierz kopię zapasową`{.action}.

### Tworzenie kopii zapasowych i eksportowanie bazy danych poza Panelem klienta

Jeśli dostępna pamięć RAM na serwerze nie pozwala na przeprowadzenie pożądanego eksportu, skorzystaj z narzędzia OVHcloud dostępnego w Panelu klienta, które wykorzystuje zasoby zewnętrzne. Zapoznaj się z sekcją "[Tworzenie kopii zapasowych i eksportowanie bazy danych w Panelu klienta](./#tworzenie-kopii-zapasowych-i-eksportowanie-bazy-danych-w-panelu-klienta)" niniejszego przewodnika.

**Kliknij wybraną metodę eksportu, aby wyświetlić jej zawartość.**

/// details | Eksport bazy MySQL lub MariaDB z poziomu phpMyAdmin OVHcloud

Aby wyeksportować bazę danych bezpośrednio z phpMyAdmin, należy najpierw się zalogować. W tym celu zapoznaj się z przewodnikiem "[Łączenie się z bazą danych](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server)".

Po zalogowaniu się do phpMyAdmin kliknij nazwę bazy danych, którą chcesz wyeksportować, a następnie zakładkę `Eksportuj`{.action} u góry.

Dostępne są dwa tryby eksportu. Jeśli nie masz szczególnych wymagań, zalecamy użycie trybu **szybkiego** w formacie **SQL**.

![Web Cloud Databases](/pages/assets/screens/other/web-tools/phpmyadmin/pma-export-backup-web-cloud-db.png){.thumbnail}

///

/// details | Eksport bazy MySQL lub MariaDB z wiersza poleceń

```bash
mysqldump --host=serwer --user=użytkownik --port=port --password=hasło nazwa_bazy > nazwa_bazy.sql
```

///

/// details | Eksport bazy MySQL lub MariaDB ze skryptu PHP

```php
1. <?php echo "Trwa tworzenie kopii zapasowej bazy danych.......";
2. system("mysqldump --host=serwer --user=użytkownik --port=port --password=hasło nazwa_bazy > nazwa_bazy.sql");
3. echo "Zakończono. Możesz pobrać bazę danych przez FTP.";
4. ?>
```

> [!warning]
>
> - Aby uniemożliwić osobom trzecim dostęp do pliku zawierającego wrażliwe dane, zabezpiecz go za pomocą przewodnika: [Ochrona katalogu hasłem za pomocą .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Operacja ta jest możliwa tylko z poziomu hostingu współdzielonego OVHcloud.

///

/// details | Eksport bazy PostgreSQL z wiersza poleceń

```bash
pg_dump --host=serwer --port=port --user=użytkownik --password=hasło nazwa_bazy > nazwa_bazy.sql
```

///

/// details | Eksport bazy PostgreSQL ze skryptu PHP

```php
1. <?php echo "Trwa tworzenie kopii zapasowej bazy danych.......";
2. system("PGPASSWORD=hasło pg_dump --host=serwer --port=port --user=użytkownik --password=hasło nazwa_bazy > nazwa_bazy.sql");
3. echo "Zakończono. Możesz pobrać bazę danych przez FTP.";
4. ?>
```

> [!warning]
>
> - Aby uniemożliwić osobom trzecim dostęp do pliku zawierającego wrażliwe dane, zabezpiecz go za pomocą przewodnika: [Ochrona katalogu hasłem za pomocą .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
> - Operacja ta jest możliwa tylko z poziomu hostingu współdzielonego OVHcloud.

///

## Sprawdź również

[Tworzenie kopii zapasowych i eksportowanie bazy danych w Panelu klienta](./#tworzenie-kopii-zapasowych-i-eksportowanie-bazy-danych-w-panelu-klienta)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](/links/partner).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](/links/support).

Dołącz do [grona naszych użytkowników](/links/community).
