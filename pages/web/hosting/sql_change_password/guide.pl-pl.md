---
title: Zmiana hasła do bazy danych na hostingu
slug: zmiana-hasla-do-bazy-danych
excerpt: Dowiedz się, jak zmienić hasło do bazy danych utworzonej w ramach pakietu hostingowego
section: Bazy danych
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 26/01/2022**

## Wprowadzenie

Większość stron internetowych używa **bazy danych** do przechowywania artykułów, komentarzy lub adresów e-mail użytkowników.

Połączenie z tą bazą danych jest możliwe za pomocą **pliku konfiguracyjnego** zawartego [w przestrzeni dyskowej plików](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/) Twojego hostingu. Zawiera on informacje umożliwiające Twojej stronie WWW identyfikację z jej **serwerem bazy danych**.

Zmiana hasła do bazy danych musi zatem zawsze być wykonywana:

- W [pliku konfiguracyjnym](https://docs.ovh.com/pl/hosting/1-click-module-management/#etap-1-zidentyfikowac-baze-danych-powiazana-z-modulem) Twojej strony WWW za [pomocą przestrzeni FTP Twojego hostingu](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/);

- **I** w serwerze zawierającym bazę danych w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

Dopóki zmiana nie zostanie dokonana **w tych dwóch miejscach**, Twoja strona WWW będzie wyświetlać "[błąd w logowaniu do bazy danych](https://docs.ovh.com/pl/hosting/blad-baz-danych/#blad-podczas-logowania-do-bazy-danych)".

Jeśli chcesz zmienić hasło do bazy danych, wykonaj **wszystkie operacje** opisane w tym przewodniku. W przypadku wątpliwości dotyczących sposobu postępowania skontaktuj się z webmasterem lub skontaktuj się z [wyspecjalizowanym](https://partner.ovhcloud.com/pl/directory/) dostawcą usług hostingowych.

Zmiana hasła do bazy danych składa się z czterech etapów:

- [Etap 1: zidentyfikować plik konfiguracyjny Twojej strony](#step1);
- [Etap 2: zidentyfikować bazę danych Twojej strony](#step2);
- [Etap 3: zmienić hasło do bazy danych Twojej strony WWW w pliku konfiguracyjnym](#step3);
- [Etap 4: zmienić hasło do bazy danych na serwerze baz danych](#step4).

**Dowiedz się, jak zmienić hasło do bazy danych w bezpieczny sposób.**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [hostingu WWW OVHcloud](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Korzystanie z [bazy danych powiązanej z hostingiem](https://www.ovhcloud.com/pl/web-hosting/options/start-sql/) lub z [CloudDB](https://www.ovh.pl/cloud/cloud-databases/).
- Posiadanie danych dostępowych FTP umożliwiających zalogowanie się do [przestrzeni dyskowej Twojego hostingu](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/).

## W praktyce

### Etap 1: zidentyfikować plik konfiguracyjny Twojej strony <a name="step1"></a>

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) kliknij pozycję `Web Cloud`{.action}, a następnie wybierz `Hosting`{.action}, a następnie nazwę odpowiedniego hostingu. Następnie przejdź do zakładki `MultiSite`{.action}. Zidentyfikuj nazwę `Katalog główny` Twojej strony (katalogu, w którym znajdują się pliki i katalogi).

![root_folder](images/root_folder.png){.thumbnail}

Następnie kliknij kartę `FTP-SSH`{.action}, a następnie przejdź do przestrzeni zawierającej pliki i foldery Twojej strony (*przestrzeń FTP*) klikając przycisk `FTP Explorer`{.action}.

> [!primary]
>
> Jeśli chcesz zmienić hasło do Twojej przestrzeni FTP, zapoznaj się z tym [przewodnikiem](https://docs.ovh.com/pl/hosting/zmiana-hasla-konto-ftp/).
>
> Jeśli chcesz zalogować się inną metodą, zapoznaj się z tym [przewodnikiem](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/).
>

Otwórz `Katalog główny`.

Wyszukaj i otwórz plik konfiguracyjny Twojej strony:

- W przypadku strony WORDPRESS chodzi o **"wp-config.php"**;
- W przypadku strony JOOMLA chodzi o **"configuration.php"**;
- W przypadku strony DRUPAL kliknij folder **"sites"**, a następnie **"default"**. Plik konfiguracyjny to **"settings.php"**;
- W przypadku strony PRESTASHOP kliknij folder **"app"**, a następnie **"config"**. Plik konfiguracyjny to **"parameters.php"**.

### Etap 2: zidentyfikować bazę danych twojej strony <a name="step2"></a>

Możliwe są dwa przypadki:

- Przypadek nr 1: baza danych twojej strony jest częścią Twojego hostingu;
- Przypadek nr 2: jest zawarta w ofercie *CloudDB*. W tym przypadku należy odnaleźć **nazwę serwera** i **nazwę użytkownika** bazy danych, aby zidentyfikować bazę danych bez ryzyka wystąpienia błędu.

Aby określić, który przypadek dotyczy Twojej strony WWW, w pliku konfiguracyjnym opisanym w [Etap 1](#step1), zapisz nazwę bazy danych:

- Dla WORDPRESS: nazwa pojawia się pod pozycją **"DB_NAME"**;
- Dla JOOMLA: nazwa pojawia się pod **"public $db"**;
- Dla DRUPAL: nazwa pojawia się pod **"database"**;
- Dla PRESTASHOP: nazwa pojawia się pod **"database_name"**.

Następnie wróć do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) w sekcji `Web Cloud`{.action}:

- Przejdź do sekcji `Hosting`{.action}, a następnie do odpowiedniego hostingu;
- Kliknij kartę `Bazy danych`{.action} **po prawej stronie** ekranu;
- Wyszukaj nazwę bazy danych znajdującej się wcześniej w kolumnie `Nazwa bazy`;

Jeśli w tej części Twojego Panelu klienta znalazłeś nazwę bazy znajdującej się w pliku konfiguracyjnym, przejdź do [Etap 3](#step3).

W przeciwnym razie baza danych Twojej strony WWW jest powiązana z ofertą [CloudDB](https://www.ovh.pl/cloud/cloud-databases/).

Należy więc powrócić do pliku konfiguracyjnego Twojej strony, aby zapisać *nazwę serwera* oraz *nazwę użytkownika* bazy danych:

- Dla WORDPRESS: *nazwa serwera* pojawia się pod nagłówkiem **"DB_HOST"** oraz *nazwa użytkownika* pod nagłówkiem **"DB_USER"**;
- Dla JOOMLA: *nazwa serwera* pojawia się pod **"public $host"** i *nazwa użytkownika* pod nagłówkiem **"public $user"**;
- Dla DRUPAL: *nazwa serwera* pojawia się pod **"host"** i *nazwa użytkownika* pod nagłówkiem **"username"**;
- Dla PRESTASHOP: *nazwa serwera* pojawia się pod **"database_host"** i *nazwa użytkownika* pod nagłówkiem **"database_user"**.

Następnie w części `Bazy danych`{.action} w sekcji `Web Cloud`{.action}. 

W zakładce `Informacje ogólne`{.action} podaj w ofercie [CloudDB](https://www.ovh.pl/cloud/cloud-databases/) nazwę serwera Twojej bazy danych, która zawiera `Nazwa hosta`{.action}.

W tej części Panelu klienta przejdź do zakładki `Użytkownik i uprawnienia`{.action}, aby również znaleźć `Nazwę użytkownika`{.action} Twojej bazy danych.

### Etap 3: zmiana hasła do bazy danych Twojej strony WWW w pliku konfiguracyjnym <a name="step3"></a>

> [!primary]
>
> Aby uzyskać więcej informacji na temat dobrych praktyk w zakresie zarządzania hasłami, zapoznaj się z instrukcjami zawartymi w tym [przewodniku](https://docs.ovh.com/pl/customer/zarzadzanie-haslem/).
>

Wybierz nowe hasło do bazy danych i zapisz je. Musi on spełniać następujące warunki:

- Minimum 8 znaki;
- Maksymalnie 30 znaków;
- Przynajmniej jedna wielka litera;
- Przynajmniej jedna mała litera;
- Przynajmniej jedną cyfrę;
- Składać się wyłącznie z cyfr i liter.

W ten sam sposób, jak w [Etap 1](#step1), powróć do przestrzeni dyskowej plików Twojego hostingu, a następnie otwórz w edycji plik konfiguracyjny Twojej strony.

**Przed wprowadzeniem jakichkolwiek zmian**, zapisz lokalnie zawartość tego pliku w dokumencie tekstowym, aby zachować kopię pliku w przypadku wystąpienia błędu podczas jego wykonywania.

Ręczna wymiana hasła do bazy danych **bez modyfikowania lub usuwania jakiegokolwiek innego elementu z pliku konfiguracyjnego** (w poniższych fragmentach należy zastąpić jedynie hasło "*0VhCloudPa55w0rdDB123*"):

- W pliku konfiguracyjnym strony WORDPRESS zmień **"DB_PASSWORD"**:

```php
//* MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'dbname123');
 
/** MySQL database username */
define('DB_USER', 'dbname123');
 
/** MySQL database password */
define('DB_PASSWORD', '0VhCloudPa55w0rdDB123');
 
/* MySQL hostname */
define('DB_HOST', 'dbname123.mysql.db:3306');
```

- W pliku konfiguracyjnym strony JOOMLA zmień **"public $password"** (na końcu pliku konfiguracyjnego):

```php
public $host = 'dbname123.mysql.db:3306';
public $user = 'dbname123';
public $password = '0VhCloudPa55w0rdDB123';
public $db = 'dbname123';
```

- W pliku konfiguracyjnym strony DRUPAL zmień **"password"**:

```php
$databases['default']['default'] = array (
  'database' => 'dbname123',
  'username' => 'dbname123',
  'password' => '0VhCloudPa55w0rdDB123',
  'prefix' => 'prefix123_',
  'host' => 'dbname123.mysql.db',
  'port' => '3306',
```

- W pliku konfiguracyjnym strony PRESTASHOP zmień **"database_password"**:

```php
'database_host' => 'dbname123.mysql.db',
'database_port' => '3306',
'database_name' => 'dbname123',
'database_user' => 'dbname123',
'database_password' => '0VhCloudPa55w0rdDB123',
```

Zapisz tę zmianę.

### Etap 4: Zmiana hasła do bazy danych na serwerze baz danych <a name="step4"></a>

> [!primary]
>
> Operacja ta zajmie kilka minut. Po uruchomieniu tej operacji sprawdź jej stan w zakładce  ou `Zadania w realizacji`{.action} `Zadania w trakcie`{.action}.
>

Ponownie, możliwe są dwa przypadki: 

- Jeśli Twoja baza danych znajduje się w części [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) poświęconej [hostingowi](https://www.ovhcloud.com/pl/web-hosting/), postępuj zgodnie z tymi [instrukcjami](#case1).

- Jeśli Twoja baza danych znajduje się w części [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) poświęconej ofertom [CloudDB](https://docs.ovh.com/pl/clouddb/), postępuj zgodnie z tymi [instrukcjami](#case2).

#### Przypadek nr 1: baza danych twojej strony jest częścią twojej oferty hostingowej <a name="case1"></a>

W części `Hosting`{.action} w Panelu klienta przejdź do zakładki `Bazy danych`{.action} po prawej stronie ekranu:

![database-password-step1](images/database-password-step1.png){.thumbnail}

Kliknij trzy kropki po prawej stronie bazy danych, a następnie `Zmień hasło`{.action}.

![database-password-step2](images/database-password-step2.png){.thumbnail}

W oknie, które się wyświetla wprowadź nowe hasło do Twojej bazy danych (zdefiniowane w [Etap 3](#step3)), potwierdź je, następnie kliknij przycisk `Zatwierdź`{.action}.

![database-password-step3](images/database-password-step3.png){.thumbnail}

#### Przypadek nr 2: baza danych strony jest częścią oferty CloudDB <a name="case2"></a>

Przejdź do części `Bazy danych`{.action} w Panelu klienta i na odpowiedni serwer, kliknij zakładkę `Użytkownicy i uprawnienia`{.action}:

![userDBpassword-step1](images/userDBpassword-step1.png){.thumbnail}

Aby zmienić hasło do bazy danych, kliknij trzy kropki po prawej stronie `nazwy użytkownika`{.action} zidentyfikowanej w [Etap 2](#step2), a następnie `Zmień hasło`{.action}.

![userDBpassword-step2](images/userDBpassword-step2.png){.thumbnail}

W oknie, które się wyświetla wprowadź nowe hasło do Twojej bazy danych (zdefiniowane w [Etap 3](#step3)), potwierdź je, następnie kliknij przycisk `Zatwierdź`{.action}.

![userDBpassword-step3](images/userDBpassword-step3.png){.thumbnail}

## Sprawdź <a name="gofurther"></a>

[Przewodnik dotyczący korzystania z programu FileZilla](https://docs.ovh.com/pl/hosting/hosting_www_przewodnik_dotyczacy_korzystania_z_programu_filezilla/)

[Tworzenie i zarządzanie hasłem do konta](https://docs.ovh.com/pl/customer/zarzadzanie-haslem/)

[Rozwiąż najczęstsze błędy związane z bazami danych](https://docs.ovh.com/pl/hosting/blad-baz-danych/)

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.