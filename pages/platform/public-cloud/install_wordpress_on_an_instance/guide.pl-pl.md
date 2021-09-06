---
title: Zainstaluj moduł WordPress w instancji
excerpt: Dowiedz się, jak korzystać z instancji Public Cloud dla modułu WordPress
slug: instalacja_modulu_wordpress_na_instancji
section: Tutoriale
hidden: true
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 26-07-2021**

## Wprowadzenie

WordPress to system zarządzania treścią (CMS) umożliwiający szybką i prostą aktywację strony. Program nie wymaga specjalnych umiejętności w zakresie programowania do zarządzania.

Tutorial ten zawiera podstawowe etapy instalacji ręcznej, która wymaga konfiguracji serwera www. Możesz również skonfigurować wstępnie instancję, aby używać WordPress wybierając szablon WordPress (w systemie CentOS) podczas tworzenia instancji.

**Dowiedz się, jak zainstalować WordPress na instancji Public Cloud.**

## Wymagania początkowe

- Projekt [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud.
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Dostęp administratora (root) do Twojej instancji przez SSH.

## W praktyce

- W przypadku instalacji ręcznej, postępuj zgodnie z instrukcjami podanymi poniżej. (W razie potrzeby utwórz najpierw instancję; zapoznaj się z [przewodnikiem dotyczącym pierwszych kroków w rozwiązaniu Public Cloud](../public-cloud-pierwsze-kroki/).)
- W przypadku instalacji przy użyciu szablonu dla WordPress, postępuj zgodnie z [przewodnik tworzenia instancji](../public-cloud-pierwsze-kroki/) i wybierz `WordPress`{.action} w kroku 3 procesu, "Wybierz obraz". <br><br> ![wordpress](images/wp_instance.png){.thumbnail} <br> Z pomyślnie utworzoną instancją WordPressa, oprogramowanie jest już zainstalowane, ale nadal musisz skonfigurować bazę danych. Postępuj zgodnie z instrukcjami dla [konfiguracja MariaDB poniżej](#sqlconf).

### Zainstaluj serwer WWW

Najpierw należy przystąpić do instalacji serwera www na Twojej instancji Public Cloud.

W tym celu upewnij się, że Twoja instancja jest zaktualizowana:

- **Dla Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get update && sudo apt-get upgrade -y
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo yum update && sudo yum upgrade
```

Następnie możesz zainstalować wybrany serwer WWW. Przykład ten wykorzystuje serwer WWW Apache, zawierający następujące elementy:

- PHP
- PHP-MySQL
- Serwer MySQL lub MariaDB

> [!primary]
>
> Ponieważ pakiety oprogramowania są regularnie aktualizowane, może być konieczne dostosowanie poniższych instrukcji do najnowszych wersji.
>

- **Dla Debian/Ubuntu**

```bash
admin@instance:~$ sudo apt-get install apache2 php-mysql mysql-server -y
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo yum install httpd php php-mysqlnd mariadb-server -y
```

Zostanie wyświetlone hasło do konfiguracji konta "root" bazy danych MySQL. Zrestartuj serwer WWW, aby upewnić się, że został on zarejestrowany.

- **Dla Debian/Ubuntu**

```bash
admin@instance:~$ sudo systemctl restart apache2
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo systemctl restart httpd.service
```

### Pobierz WordPress

Przejdź do strony [WordPress](https://wordpress.org/download/){.external}, aby pobrać link do pobrania najnowszej wersji. Pobierz plik:

```bash
admin@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Odłącz pobrany archiwum:

```bash
admin@instance:~$ tar zxvf latest.tar.gz
```

Usuń domyślny katalog z serwera www:

```bash
admin@instance:~$ sudo rm -R /var/www/html/
```

Zastąp folder domyślnego serwera www folderem WordPress:

```bash
admin@instance:~$ sudo mv wordpress /var/www/html
```

Następnie możesz przyznać serwerowi WWW uprawnienia do zapisu w katalogu.

- **Dla Debian/Ubuntu**

```bash
admin@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

- **Pour Fedora/CentOS**

```bash
[admin@instance ~]$ sudo chown -R apache:apache /var/www/html/
```

### Konfiguracja MySQL <a name="sqlconf"></a>

W przeciwieństwie do MySQL-Server, który możesz zainstalować na systemie Debian/Ubuntu, MariaDB nie skonfiguruje Twojego hasła root podczas instalacji. Uruchom zatem serwer MariaDB i skonfiguruj hasło za pomocą poniższych poleceń.

Uruchom serwer bazy danych:

```bash
[admin@instance ~]$ sudo systemctl start mariadb.service
```

Skonfiguruj hasło "root":

```bash
[admin@instance ~]$ sudo /usr/bin/mysql_secure_installation
```

```bash
Set root password? [Y/n] Y
New password:
```

Zostaniesz również poproszony o potwierdzenie niektórych operacji związanych z bezpieczeństwem, takich jak usunięcie domyślnego użytkownika anonimowego i wyłączenie połączeń root.

Poniższe instrukcje są ważne dla MySQL i MariaDB.

Po uzyskaniu hasła "root" możesz zalogować się do serwera baz danych:

```bash
admin@instance:~$ sudo mysql -u root -p
```

Możesz zatem utworzyć nowego użytkownika, zdefiniować hasło i utworzyć bazę danych dla modułu Wordpress.

Utwórz użytkownika:

```sql
mysql> CREATE USER 'wordpress'@'localhost' IDENTIFIED BY 'hasło użytkownika';
```

Utwórz bazę danych:

```sql
mysql> CREATE DATABASE `wordpress`;
```

Nadaj wszystkie uprawnienia użytkownikowi "wordpress" w bazie danych "wordpress":

```sql
mysql> GRANT ALL PRIVILEGES ON `wordpress` . * TO 'wordpress'@'localhost';
```

Zamknij CLI bazy danych:

```sql
mysql> exit;
```

### Skonfiguruj WordPress

Po skonfigurowaniu bazy danych możesz uruchomić przeglądarkę i zalogować się do strony WordPress, wprowadzając adres IP Twojej instancji (lub nazwę domeny, jeśli [już do niej podłączyłeś](../../domains/hosting_www_jak_edytowac_strefe_dns/).

Asystent konfiguracji WordPress umożliwia skonfigurowanie dostępu do bazy danych. Wprowadź szczegóły, które zdefiniowałeś w poprzednich etapach.

![wordpress](images/wp_install1.png){.thumbnail}

Drugi etap polega na skonfigurowaniu ogólnych informacji dotyczących Twojej strony WWW oraz użytkownika programu WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Po potwierdzeniu możesz zalogować się do panelu administracyjnego Twojej strony, korzystając z utworzonego przez Ciebie użytkownika.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.