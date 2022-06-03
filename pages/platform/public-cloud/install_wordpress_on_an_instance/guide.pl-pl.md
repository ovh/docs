---
title: Zainstaluj moduł WordPress w instancji
excerpt: Dowiedz się, jak korzystać z instancji Public Cloud do hostowania stron WordPress
slug: instalacja_modulu_wordpress_na_instancji
section: Tutoriale
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 15-10-2021**

## Wprowadzenie

WordPress to system zarządzania treścią (CMS) umożliwiający tworzenie stron WWW i zarządzanie nimi w wielu celach, bez potrzeby posiadania kompetencji w zakresie programowania.

Tutorial ten przedstawia podstawowe etapy ręcznej instalacji WordPressa na instancji Public Cloud: zainstalować serwer www, skonfigurować bazę danych, pobrać i uruchomić WordPress.

**Dowiedz się, jak zainstalować WordPress na instancji Public Cloud.**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, za które przejmujesz odpowiedzialność. Firma OVHcloud nie ma dostępu do Twoich serwerów, nie pełni funkcji administratora i w związku z tym nie będzie mogła udzielić Ci wsparcia. Zarządzanie oprogramowaniem i wdrażanie środków bezpieczeństwa należy do klienta.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku problemów z administrowaniem, użytkowaniem czy zabezpieczeniem serwera rekomendujemy skorzystanie z usług wyspecjalizowanej firmy. Więcej informacji znajduje się w sekcji “Sprawdź również”.
>

## Wymagania początkowe

- Projekt [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud
- Posiadanie zainstalowanej [instancji Public Cloud](../public-cloud-pierwsze-kroki/) z systemem Debian lub Ubuntu
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Dostęp administratora (root) do Twojej instancji przez SSH

## W praktyce

> [!primary]
>
> Poniższe instrukcje są sprawdzane dla dystrybucji Debian 11. Ubuntu opiera się na Debianie i dlatego tutorial powinien również działać dla bieżącej dystrybucji Ubuntu.
>

Aby uzyskać dostęp do Twojej instalacji za pomocą nazwy domeny, powiąż ją z Twoją instancją. W tym celu edytuj strefę DNS dostępną w [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), pod warunkiem, że OVHcloud jest Twoim operatorem, a nazwa domeny wykorzystuje serwery DNS OVHcloud.

Aby dowiedzieć się więcej, zapoznaj się z przewodnikiem [Modyfikacja strefy DNS](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/). Jeśli domena jest aktualnie używana, skonfiguruj DNS dopiero po zainstalowaniu nowego WordPress i uruchomieniu Twojej strony WWW.

### Etap 1: instalacja serwera www (LAMP)

Aby móc serwować dynamiczne strony internetowe za pomocą WordPressa, na instancji zostanie zainstalowany tak zwany *LAMP stack*. LAMP to **Linux**, **Apache**, **MariaDB** i **PHP**.

Po zalogowaniu się do instancji przez SSH upewnij się, że wszystkie pakiety są zaktualizowane:

```bash
debian@instance:~$ sudo apt update && sudo apt upgrade -y
```

> [!primary]
>
> Ponieważ pakiety oprogramowania są regularnie aktualizowane, może być konieczne dostosowanie poniższych instrukcji do najnowszych wersji.
>

Zainstaluj pakiety LAMP:

```bash
debian@instance:~$ sudo apt install apache2 mariadb-server php libapache2-mod-php php-mysql
```

### Etap 2: konfiguracja serwera bazy danych <a name="sqlconf"></a>

MariaDB zapewnia skrypt, który pomoże Ci w początkowej konfiguracji i zastosować niektóre parametry związane z bezpieczeństwem.

Aby go wykonać, wprowadź następującą komendę:

```bash
debian@instance:~$ sudo mysql_secure_installation
```

Potwierdź pierwszą prośbę, naciskając `Enter`{.action}.

Następnie wybierz metodę zabezpieczenia dostępu do serwera baz danych.

```console
Switch to unix_socket authinfo [Y/n]
```

Zaleca się stosowanie proponowanej metody uwierzytelniania zamiast dostępu za pomocą hasła root. Kliknij `y`{.action}, a następnie `Enter`{.action}. (Jeśli zdecydujesz się korzystać z dostępu użytkownika root, wpisz `n`{.action}, następnie zdefiniuj hasło root.)

Wpisz `n`{.action} na poniższy adres e-mail:

```console
Change the root password? [Y/n]
```

Poniższe zaproszenia dotyczące środków bezpieczeństwa, potwierdź je wszystkie za pomocą `y`{.action} do końca skryptu.

Jeśli skonfigurowałeś dostęp MariaDB w zalecany sposób (*unix_socket*), możesz uzyskać do niego automatyczny dostęp root za każdym razem, gdy jesteś zalogowany do instancji jako użytkownik z dużymi uprawnieniami.

Otwórz powłokę MariaDB:

```bash
debian@instance:~$ sudo mariadb
```
```mysql
MariaDB [(none)]> 
```

Utwórz bazę danych dla WordPress:

```mysql
MariaDB [(none)]> CREATE DATABASE wordpress;
```

Następnie nadaj nowemu użytkownikowi "wordpress" wszystkie uprawnienia do korzystania z tej bazy danych. Użytkownik ten będzie miał dostęp do bazy danych i wykonywać wszystkie operacje dla CMS WordPress. Zastąp `your_password` silnym hasłem dla tego użytkownika.

```mysql
MariaDB [(none)]> GRANT ALL ON wordpress.* TO 'wordpress'@'localhost' IDENTIFIED BY 'your_password' WITH GRANT OPTION;
```

> [!primary]
>
> Dane te będziesz potrzebował później podczas instalacji WordPress.
>

Baza danych jest teraz gotowa do użycia z WordPress. Upewnij się, że zmiany są stosowane w kolejnych krokach, a następnie opuść powłokę MariaDB:

```mysql
MariaDB [(none)]> FLUSH PRIVILEGES;
```
```mysql
MariaDB [(none)]> exit;
```

### Etap 3: skonfiguruj firewall

Konfiguracja zapory sieciowej (iptables* *) pozwala poprawić bezpieczeństwo Twojej instancji WordPress. Proces ten można uprościć, korzystając z front-endu "Uncomplicated Firewall" (UFW) oraz zestawu wstępnie zdefiniowanych profili. Zainstaluj UFW:

```bash
debian@instance:~$ sudo apt install ufw
```

Profile, o których mowa, zawierają wpis "WWW" na liście aplikacji:

```bash
debian@instance:~$ sudo ufw app list | grep WWW
  WWW
  WWW Cache
  WWW Full
  WWW Secure
```

Wybierając "WWW Full", dozwolone będą bezpieczne połączenia (port 443) i zapytania http (port 80) do serwera www.

Aby zobaczyć, które porty mają wpływ na określony profil, wprowadź ```sudo ufw app info "profil"```.

Za pomocą poniższego polecenia zostaną otwarte porty zdefiniowane przez profil "WWW Full":

```bash
debian@instance:~$ sudo ufw allow 'WWW Full'
```

Ponieważ wszystkie nieautoryzowane porty zostaną zablokowane po aktywacji firewalla, upewnij się, że zezwalasz również na połączenia SSH (port 22):

```bash
debian@instance:~$ sudo ufw allow 'SSH'
```

Sprawdź konfigurację i aktywuj reguły firewalla:

```bash
debian@instance:~$ sudo ufw status
```

```bash
debian@instance:~$ sudo ufw enable
```

Możesz pójść o krok dalej z UFW, na przykład, jeśli chcesz ograniczyć ataki "*denial of service*" (DOS) lub zapobiec zapytania przez niektóre zakresy adresów IP. Zapoznaj się z oficjalną dokumentacją UFW.

### Etap 4: instalacja WordPress

Przejdź do oficjalnej [strony WordPress](https://wordpress.org/download/), aby pobrać **URL pobierania** najnowszej wersji (w formacie "tar.gz"). Pobierz plik:

```bash
debian@instance:~$ wget https://wordpress.org/latest.tar.gz
```

Odłącz pobrany archiwum:

```bash
debian@instance:~$ tar zxvf latest.tar.gz
```

Twój serwer Apache musi być gotowy do działania w tym momencie. Możesz sprawdzić za pomocą polecenia:

```bash
debian@instance:~$ sudo systemctl status apache2
```

Można również otworzyć `http://IP_twojej_instancji` w przeglądarce internetowej. Należy wyświetlić stronę "Apache2 Debian Default Page".

Kolejne etapy instalacji WordPress zastępując domyślny folder Apache dla stron www.

Zamiast używać domyślnego folderu, możesz również utworzyć nowy *Virtual Host* do instalacji WordPress. Aplikacja ta jest przydatna do hostowania kilku stron WWW, co nie jest istotne dla tego tutoriala.

Usuń istniejący katalog:

```bash
debian@instance:~$ sudo rm -R /var/www/html/
```

Zastąp folder domyślnego serwera www folderem WordPress:

```bash
debian@instance:~$ sudo mv wordpress /var/www/html
```

Nadaj serwerowi www uprawnienia do zapisu (`write`) w katalogu:

```bash
debian@instance:~$ sudo chown -R www-data:www-data /var/www/html/
```

Serwer www jest teraz gotowy do wstępnej konfiguracji WordPress.

### Etap 5: skonfiguruj WordPress

Otwórz przeglądarkę internetową i zaloguj się do strony WordPress wprowadzając adres IP Twojej instancji (lub nazwę domeny, jeśli już [podłączyłeś ją do instancji](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/)). Wybierz język na pierwszej stronie.

Skorzystaj z asystenta konfiguracji WordPress, aby uzyskać dostęp do bazy danych. Wpisz informacje, które [wcześniej](#sqlconf) skonfigurowałeś.

![wordpress](images/wp_install1.png){.thumbnail}

Następny etap polega na wstępnej konfiguracji ogólnych informacji o Twojej stronie WWW, a następnie utworzeniu użytkownika administratora WordPress.

![wordpress](images/wp_install2.png){.thumbnail}

Po zatwierdzeniu będziesz mógł zalogować się do panelu administracyjnego Twojej strony, używając danych identyfikacyjnych zdefiniowanych w poprzednim etapie.

> [!primary]
>
> Aby zbudować bezpieczne połączenia (`https`), serwer www musi być zabezpieczony za pośrednictwem Organu Certyfikacyjnego, takiego jak [Let's Encrypt](https://letsencrypt.org/){.external}, który oferuje bezpłatne certyfikaty. Należy zainstalować narzędzie klienta (takie jak "Certbot") i skonfigurować Apache. W przeciwnym razie Twoja strona WWW będzie mogła przyjmować tylko zapytania `http`.
>

### Etap 6 (opcjonalnie): aktywuj bezpieczne połączenia z Let's Encrypt

Sprawdź najpierw, czy Twoja domena posiada dobre rekordy w strefie DNS, czyli wskazuje na adres IP Twojej instancji.

Zainstaluj pakiety niezbędne dla klienta Certbot:

```bash
debian@instance:~$ sudo apt install certbot python3-certbot-apache
```

Uzyskaj certyfikat domeny. (Możesz włączyć subdomenę "www" dodając `-d www.yourdomainname.ovh`.)

```bash
debian@instance:~$ sudo certbot --apache -d yourdomainname.ovh
```

Wprowadź poprawny adres e-mail i zaakceptuj warunki korzystania z usługi.

Certbot automatycznie odnawia certyfikaty. Nie jest wymagany żaden inny etap. Aby dowiedzieć się więcej o funkcjonalności Certbot, zapoznaj się z dostępnymi opcjami.

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.