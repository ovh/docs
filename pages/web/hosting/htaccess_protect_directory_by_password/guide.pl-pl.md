---
title: "Chroń interfejs administracyjny Twojej strony za pomocą pliku .htaccess"
slug: hosting-htaccess-w-jaki-sposob-zabezpieczyc-dostep-dostepu-do-katalogu
excerpt: "Dowiedz się, jak zabezpieczyć dostęp do strony WWW za pomocą pliku .htaccess"
section: Przekierowania i uprawnienia dostępu
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 20/09/2021**

## Wprowadzenie 

Czasami konieczne może okazać się zabezpieczenie dostępu do części Twojej strony za pomocą identyfikatorów. W szczególności możesz uruchomić plik ".htaccess", aby chronić dostęp do interfejsu administracyjnego.

**Dowiedz się, jak zabezpieczyć dostęp do strony administratora za pomocą pliku ".htaccess".**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy wyspecjalizowanego webmastera lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/).
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).
- Posiadanie danych dostępowych umożliwiających zalogowanie się [do przestrzeni dyskowej Twojego hostingu](../logowanie-przestrzen-dyskowa-ftp-hosting-web/).

## W praktyce

> [!primary]
>
> Proponowane tutaj rozwiązanie to tylko jedna z możliwości technicznych, aby stworzyć przestrzeń administracyjną na Twojej stronie WWW. Możesz również korzystać z funkcji [Moduł za pomocą 1 kliknięcia](../hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/) zaproponowanej przez [OVHcloud](https://www.ovhcloud.com/pl/).
>
> W przypadku pytań dotyczących tworzenia lub programowania Twojej strony, skontaktuj się z naszą [społecznością użytkowników](https://community.ovh.com/en/) lub [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie.
>

### Etap 1: utwórz drzewo

Zaloguj się do [przestrzeni dyskowej](../logowanie-przestrzen-dyskowa-ftp-hosting-web/) Twojego hostingu. Otwórz ["Katalog główny"](../konfiguracja-multisite-na-hostingu/#etap-21-dodaj-domene-zarejestrowana-w-ovhcloud) Twojej strony WWW.<br>
Utwórz plik "crypter.php".

![root_folder](images/root_folder.png){.thumbnail}

Otwórz lub utwórz folder, który ma zawierać część "admin" Twojej strony WWW. Utwórz w tym katalogu plik ".htpasswd" oraz plik ".htaccess".

![folder_admin](images/folder_admin.png){.thumbnail}

> [!primary]
>
> Pliki ".htpasswd" i ".htaccess" mogą być przechowywane w różnych folderach. Tylko jeden plik ".htpasswd" może być używany dla kilku ".htaccess".
>
> Parametry określone przez plik ".htaccess" mają zastosowanie do katalogu, w którym jest zainstalowany, oraz do wszystkich jego podkatalogów.
>

### Etap 2: uzupełnij plik "crypter.php"

Wpisz w utworzonym wcześniej pliku "crypter.php" następujące wiersze (powtarzane w zależności od liczby haseł do wygenerowania):

```php
<?php
$string_1 = crypt('niezaszyfrowane_hasło_1');
$string_2 = crypt('niezaszyfrowane_hasło_2');
$string_3 = crypt('niezaszyfrowane_hasło_3');
echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Jeśli dysponujesz hostingiem [Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/) lub [Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/), zaloguj się do Twojego hostingu za pomocą [SSH](../hosting_www_ssh_na_hostingu/). Wprowadź następujące polecenie:

```bash
php crypter.php
```

> [!warning]
>
> Ze względów bezpieczeństwa zaleca się korzystanie z SSH. Jeśli jednak dysponujesz usługą [Kimsufi Web](https://www.kimsufi.com/pl/) lub [Perso](https://www.ovhcloud.com/pl/web-hosting/personal-offer/) i nie chcesz przejść na ofertę [Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/) lub [Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/), możesz również uruchomić plik "crypter.php" za pośrednictwem przeglądarki internetowej (Przechodząc na adres URL https://twoja-domena.ovh/crypter.php).
>
> W przypadku dodatkowych pytań dotyczących metody szyfrowania haseł, skontaktuj się z naszą [społecznością użytkowników](https://community.ovh.com/en/) lub [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/). Nie będziemy w stanie udzielić wsparcia w tym zakresie.
>

Pobierz zaszyfrowane hasła (Nie kopiuj "&#60;br />", jeśli wpiszesz komendę "php crypter.php" przez SSH):

```bash
zaszyfrowane_hasło_1
zaszyfrowane_hasło_2
zaszyfrowane_hasło_3
```

### Etap 3: uzupełnij plik ".htpasswd"

Plik ".htpasswd" zawiera listę użytkowników upoważnionych do łączenia się z interfejsem administracyjnym Twojej strony i ich zaszyfrowane hasło.

W tym pliku dla **każdego użytkownika** wpisz wiersz wskazujący jego identyfikator i zaszyfrowane hasło:

```bash
użytkownik1:zaszyfrowane_hasło_1
użytkownik2:zaszyfrowane_hasło_2
użytkownik3:zaszyfrowane_hasło_3
```

### Etap 4: uzupełnij plik ".htaccess"

#### Zablokuj dostęp do kompletnego katalogu

W katalogu, który chcesz chronić, utwórz plik ".htaccess", używając następującego kodu:

```bash
AuthName "Wpisz identyfikator administratora i hasło"
AuthType Basic
AuthUserFile "/home/login_ftp/katalog_główny/admin/.htpasswd"
Require walid-user
```

> [!warning]
>
> W tym przykładzie "login_ftp" należy zastąpić [identyfikatorem FTP](../logowanie-przestrzen-dyskowa-ftp-hosting-web/#etap-1-pobranie-informacji-niezbednych-do-logowania). W sekcji `Hosting`{.action} znajdziesz go w zakładce `FTP-SSH`{.action} odpowiedniego hostingu.
>
> W razie potrzeby w poniższym przykładzie "katalog_główny" zastąp nazwę [folderu zawierającego pliki Twojej strony](../konfiguracja-multisite-na-hostingu/#etap-21-dodaj-domene-zarejestrowana-w-ovhcloud).
>

#### Zablokuj dostęp do jednego lub kilku plików

Aby zablokować dostęp do określonego pliku lub plików, dodaj [dyrektywę "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} do pliku ".htaccess":

```bash
<Files test.php>

AuthName "Wpisz dane dostępowe"
AuthType Basic
AuthUserFile "/home/login_ftp/katalog_główny/admin/.htpasswd"
Require walid-user

</Files>
```

> [!warning]
>
> Należy podać [dyrektywę "Kolejki"](https://httpd.apache.org/docs/2.4/fr/mod/core.html#files){.external} dla **każdego pliku**, który ma być chroniony.
>
> Dyrektywy "Files" mają zastosowanie do wszystkich plików o tej samej nazwie lub kończących się określoną nazwą. Pod warunkiem, że są one zawarte w tym samym katalogu co ".htaccess" lub w jednym z jego podkatalogów (W konfiguracji wskazanej tutaj dyrektywa "Files" miałaby zastosowanie na przykład do pliku "nowy_test.php" zawartego w podkatalogu folderu "admin").
>

## Sprawdź również <a name="gofurther"></a>

[Plik .htaccess na hostingu](../hosting_www_plik_htaccess/)

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
