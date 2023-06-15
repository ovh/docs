---
title: "Tutorial - Chroń katalog lub interfejs administracyjny Twojej strony internetowej za pomocą plików .htaccess i .htpasswd"
slug: hosting-htaccess-w-jaki-sposob-zabezpieczyc-dostep-dostepu-do-katalogu
excerpt: "Dowiedz się, jak zabezpieczyć katalog lub dostęp do administrowania stroną WWW za pomocą uwierzytelnienia za pomocą plików .htaccess i .htpasswd"
section: Przekierowania i uprawnienia dostępu
order: 02
updated: 2023-06-01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 01-06-2023**

## Wprowadzenie 

Tutorial wyjaśnia, jak wdrożyć uwierzytelnienie "użytkownik/hasło", aby uzyskać dostęp do całej lub części Twojej strony WWW za pomocą przeglądarki internetowej. 

Używając dwóch plików konfiguracyjnych (HTTP) Apache do umieszczenia w [przestrzeni FTP](/pages/web/hosting/ftp_connection) Twojego hostingu www: 

- "**.htaccess**": aby uzyskać więcej informacji na temat funkcjonalności tego pliku, zapoznaj się z naszym tutorial ["Operacje możliwe do wykonania za pomocą pliku ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do).
- "**.htpasswd**": oprócz tego tutoriala, zapoznaj się z [oficjalną dokumentacją Apache](https://httpd.apache.org/docs/2.4/en/programs/htpasswd.html) dotyczącą tego pliku.

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/) i/lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>
> Przykłady, które zostaną następnie wyświetlone, znajdują się w plikach o nazwie ".htaccess" i ".htpasswd". Uwaga, reguły, które określiłeś w tych plikach, mają bezpośrednie konsekwencje dla Twojej strony WWW. Sprawdź systematycznie dodawanie reguł przed ich wdrożeniem na Twojej stronie WWW. 
> 

**Dowiedz się, jak zabezpieczyć katalog lub dostęp do administratora Twojej strony WWW za pomocą uwierzytelnienia za pomocą plików ".htaccess" i ".htpasswd".**

## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Posiadanie danych do logowania do [przestrzeni FTP Twojego hostingu](/pages/web/hosting/ftp_connection)

## W praktyce

> [!primary]
>
> Rozwiązanie w zakresie bezpieczeństwa proponowane tutaj jest tylko jedną z możliwości technicznych. 
>
> Należy na przykład wiedzieć, że w przypadku korzystania z **C**ontent **M**anagement **S**ystem (**CMS**) dostępne są inne rozwiązania bezpieczeństwa.
>
> Jeśli korzystasz z CMS WordPress, OVHcloud udostępnia również tutorial, w jaki sposób [używać pliku htaccess przy użyciu WordPress](/pages/web/hosting/htaccess_how_to_protect_wordpress).
>
> W przypadku pytań związanych z tworzeniem, użytkowaniem lub programowaniem Twojej strony WWW, pomoc OVHcloud nie będzie w stanie udzielić Ci wsparcia w tym zakresie.
>
> W tym celu skontaktuj się z naszą [społecznością użytkowników](https://community.ovh.com/en/) lub naszymi [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).
>

Opiszemy 4 główne etapy, które należy wykonać, aby chronić dostęp do katalogu lub części Twojej strony WWW:

- Tworzenie plików "crypt.php", ".htaccess" i ".htpasswd";
- Wygeneruj zaszyfrowane hasła za pomocą pliku "crypt.php";
- Określenie użytkowników i haseł zaszyfrowanych za pomocą pliku ".htpasswd";
- Konfiguracja reguł w pliku ".htaccess" i usunięcie pliku "crypt.php".

> [!warning]
>
> Kolejne etapy optymalizują bezpieczeństwo przechowywanych danych.
> W związku z tym oraz w przypadku kompatybilności stron WWW z Twoimi usługami rekomendujemy użycie najnowszej wersji PHP.
> 
> Aby zmienić wersję PHP swoich stron www na Twoim hostingu, zapoznaj się z następującymi przewodnikami:
> 
> - [Zmień konfigurację hostingu](/pages/web/hosting/ovhconfig_modify_system_runtime)
> - [Zmień wersję PHP hostingu](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)
>
> Skrypty i informacje opisane poniżej w tym tutorialu działają jedynie w środowisku wykonawczym oraz w najnowszej wersji PHP.
> 
> W przeciwnym razie zalecamy zoptymalizowanie Twojej strony WWW, aby uczynić ją kompatybilną przed wdrożeniem tego, co nastąpi. Dzięki temu zmniejszy się ryzyko włamania się do Twoich danych z powodu luk w zabezpieczeniach.
>

### Etap 1: tworzenie plików "crypt.php", ".htaccess" i ".htpasswd"

Zaloguj się do [przestrzeni dyskowej FTP](/pages/web/hosting/ftp_connection) Twojego hostingu. Otwórz ["katalog główny"](/pages/web/hosting/multisites_configure_multisite), do którego wskazuje Twoja domena.

Utwórz plik "crypt.php" w tym katalogu głównym.

![root_folder](images/root_folder.png){.thumbnail}

Otwórz lub utwórz folder przeznaczony do ochrony Twojej strony WWW. W poniższym przykładzie będzie to folder "admin". Utwórz w tym katalogu plik ".htpasswd" oraz plik ".htaccess".

![folder_admin](images/folder_admin.png){.thumbnail}

Aby poprawnie korzystać z plików ".htaccess" i ".htpasswd", musisz znać i przestrzegać następujących zasad: 

- **tylko jeden** plik ".htaccess" i **tylko jeden** plik ".htpasswd" w katalogu lub podkatalogu, aby uniknąć konfliktów między różnymi plikami ".htaccess" i różnymi ".htpasswd";
- pliki ".htaccess" i ".htpasswd" są niewidoczne dla użytkowników odwiedzających Twoją stronę internetową;
- reguły zadeklarowane w pliku ".htaccess" mają zastosowanie do całego katalogu, w którym zainstalowany jest plik ".htaccess", oraz do wszystkich podkatalogów tego katalogu;
- pliki ".htpasswd" i ".htaccess" mogą być w różnych folderach. Tylko jeden plik ".htpasswd" może być używany dla kilku ".htaccess".

### Etap 2: uzupełnij plik "crypt.php"

Przejdź do katalogu głównego, w którym utworzyłeś plik "crypt.php". Kliknij polecenie `Edytuj`{.action} i umieść następujące wiersze:

```php
<?php
$string = password_hash("plain_text_password", PASSWORD_BCRYPT);

echo nl2br("$string");
 ?>
```

Zastąp wyłącznie hasłem `plain_text_password` **w języku niekodowanym**, które chcesz zaszyfrować.

**Możesz dostosować skrypt do liczby haseł, które chcesz zaszyfrować.**

- Przykład, w którym skrypt PHP zaszyfruje 3 haseł w jednej operacji:

```php
<?php
$string_1 = password_hash("plain_text_password1", PASSWORD_BCRYPT);
$string_2 = password_hash("plain_text_password2", PASSWORD_BCRYPT);
$string_3 = password_hash("plain_text_password3", PASSWORD_BCRYPT);

echo nl2br("$string_1 \n $string_2 \n $string_3");
 ?>
```

Zastąp wyłącznie `plain_text_password1`, `plain_text_password2` i `plain_text_password3` hasłami **w języku niekodowanym**"które chcesz zaszyfrować.

> [!primary]
>
> Oba powyższe skrypty wykorzystują w dniu dzisiejszym najbezpieczniejszą metodę szyfrowania za pomocą algorytmu **bcrypt** zalecanego przez Apache.
>
> Więcej informacji na ten temat znajdziesz w [oficjalnej dokumentacji Apache](https://httpd.apache.org/docs/2.4/en/misc/password_encryptions.html){.external}.
>

Jeśli dysponujesz hostingiem [Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/) lub [Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/), zaloguj się do hostingu za pomocą [SSH](/pages/web/hosting/ssh_on_webhosting). Przejdź do "**katalog główny**", w którym znajduje się Twój skrypt "crypt.php".

W tym celu użyj następującej komendy SSH:

```bash
cd Name_of_your_root_folder
```

Zastąp `Name_of_your_root_folder` nazwą Twojego "katalogu głównego" i zapisz, gdzie znajduje się skrypt "crypt.php".

Jeśli na przykład Twój plik "crypt.php" znajduje się w podfolderze Twojego "katalogu głównego", użyj następującej komendy SSH:

```bash
cd Name_of_your_root_folder/sub_folder
```

Zastąp `Name_of_your_root_folder` nazwą "głównego katalogu" i `sub_folder` podfolderem, w którym znajduje się Twój skrypt "crypt.php".

Gdy tylko znajdziesz się na poziomie skryptu "crypt.php", wprowadź następującą komendę:

```bash
php crypt.php
```

> [!warning]
>
> Ze względów bezpieczeństwa zaleca się korzystanie z SSH. Jeśli jednak dysponujesz usługą [Kimsufi Web](https://www.kimsufi.com/pl/hosting.xml) lub [Perso](https://www.ovhcloud.com/pl/web-hosting/personal-offer/), dla której SSH jest niedostępny, możesz również uruchomić plik "crypt.php" za pomocą przeglądarki internetowej.
>
> W tym celu wprowadź następujący adres URL: `https://domain.tld/crypt.php` poprzez modyfikację `domain.tld` przez Twoją własną domenę. Znajduje się to bezpośrednio na pasku adresowym przeglądarki internetowej.
>

Pobierz zaszyfrowane hasła **bez kopiowania** le "&#60;br />", jeśli wpiszesz komendę "*php crypt.php*" przez SSH:

```bash
encrypted_password1
encrypted_password2
encrypted_password3
```

Wartości `encrypted_password1`, `encrypted_password2` i `encrypted_password3` muszą na przykład wyglądać w formacie następującego wiersza:

```bash
$2y$10$8eO7Iq3rh.u3CXvhuhKq.Om.nQJN.Z1sBT2jvOqVKCGzP42T/4LBC
```

Sprawdź, czy Twoje zaszyfrowane hasło (hasła) zaczyna się `$2y$`. Potwierdzi to, że hasło a (i) zostało zaszyfrowane za pomocą zabezpieczonego algorytmu **bcrypt**.

### Etap 3: zdefiniować użytkowników i zaszyfrowane hasła z plikiem ".htpasswd"

Plik ".htpasswd" zawiera odpowiednie szyfrowane hasła dla każdego z użytkowników zadeklarowanych w pliku. Tylko ci użytkownicy będą mogli logować się do katalogu, który chcesz chronić dostęp.

W tym celu, dla **każdego użytkownika** w tym pliku, wpisz wiersz wskazujący jego identyfikator i zaszyfrowane hasło:

```bash
user1:encrypted_password1
user2:encrypted_password2
user3:encrypted_password3
```

Zastąp wartość `user1`, `user2` i `user3` naszego przykładu własnymi nazwiskami użytkowników.

Zastąp również `encrypted_password1`, `encrypted_password2` i `encrypted_password3` własnymi zaszyfrowanymi hasłami pobranymi wcześniej.

### Etap 4: skonfigurować reguły w pliku ".htaccess"

#### Zablokuj dostęp do kompletnego katalogu

W katalogu, który chcesz chronić, utwórz plik ".htaccess", używając następującego kodu:

```bash
AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user
```

W skrypcie powyżej zastąp następujące elementy własnymi wartościami:

- `"Indicates your login(s)"`\: odpowiada użytkownikowi (użytkownikom) uprawnionemu(ym) do dostępu do pełnego katalogu. Jeśli masz wielu użytkowników, możesz je rozdzielić tylko za pomocą *spacji*.
- `your_ftp_login`: login FTP, którego używasz do logowania się do przestrzeni dyskowej FTP. Aby pobrać login FTP, zapoznaj się z naszym przewodnikiem dotyczącym [logowania do przestrzeni FTP](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: ścieżka dostępu do katalogu z katalogu głównego FTP Twojego hostingu do pliku ".htpasswd", który ma być używany do uwierzytelniania użytkowników autoryzowanych przez regułę zawartą w pliku ".htaccess".

#### Zablokuj dostęp do jednego lub kilku plików

Aby zablokować dostęp do jednego lub kilku plików, dodaj [dyrektywa "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} do pliku ".htaccess":

```bash
<Files test.php>

AuthName "Indicates your login(s)"
AuthType Basic
AuthUserFile "/home/your_ftp_login/root_folder/admin/.htpasswd"
Require valid-user

</Files>
```

W skrypcie powyżej zastąp następujące elementy własnymi wartościami:

- `test.php` : nazwa określonego pliku lub grupa plików zawierająca w naszym przykładzie **test.php** (termin, w odniesieniu do którego należy stosować ograniczenie dostępu).
- `"Indicates your login(s)"`: odpowiada użytkownikowi (użytkownikom) uprawnionemu(-ym) do dostępu do plików, których nazwy zawierają **test.php**. Jeśli masz wielu użytkowników, możesz je rozdzielić na * przestrzeń*.
- `your_ftp_login`: login FTP, którego używasz do logowania się do przestrzeni dyskowej FTP. Aby pobrać login FTP, zapoznaj się z naszym przewodnikiem dotyczącym [logowania do przestrzeni FTP](/pages/web/hosting/ftp_connection).
- `root_folder/admin/.htpasswd`: ścieżka dostępu do katalogu z katalogu głównego FTP Twojego hostingu do pliku ".htpasswd", który ma być używany do uwierzytelniania użytkowników autoryzowanych przez dyrektywę pliku ".htaccess".

> [!warning]
>
> Należy podać [dyrektywa "Files"](https://httpd.apache.org/docs/2.4/en/mod/core.html#files){.external} dla **każdego pliku** do ochrony.
>
> Dyrektywy "Kolejki" mają zastosowanie do wszystkich plików o tej samej nazwie lub kończących się określoną nazwą. Pod warunkiem, że są one zawarte w tym samym katalogu co ".htaccess" lub w jednym z jego podkatalogów.
>
> W powyższej konfiguracji, tak jak "new_test.php" zawiera **test.php***, dyrektywa "Files" miałaby również zastosowanie do pliku "new_test.php" zawartego w podkatalogu folderu "admin".
>
> Ponadto, o ile użytkownik nie jest uwierzytelniony w celu uzyskania dostępu do plików objętych dyrektywą, mogą one nie pojawić się i nie mogą być "czytelne" za pomocą strony "index of".
>

> [!alert]
>
> Po zakończeniu uruchamiania plików ".htaccess" i ".htpasswd" usuń plik szyfrujący "crypt.php" z Twojego hostingu.
>

## Sprawdź również <a name="go-further"></a>

[Oficjalna dokumentacja Apache](https://httpd.apache.org/docs/2.4/){.external}

[Logowanie do przestrzeni FTP hostingu WWW](/pages/web/hosting/ftp_connection)

[Przewodnik - Operacje możliwe do wykonania za pomocą pliku ".htaccess"](/pages/web/hosting/htaccess_what_else_can_you_do)

[Zablokuj dostęp do mojej strony dla niektórych adresów IP przez plik .htaccess](/pages/web/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website)

[Prześlij link dostępowy do mojej strony za pomocą mod_rewrite za pomocą pliku .htaccess](/pages/web/hosting/htaccess_url_rewriting_using_mod_rewrite)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 