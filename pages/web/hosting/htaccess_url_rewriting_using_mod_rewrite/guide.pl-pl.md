---
title: "Tutorial - przepisz URL dostępu do mojej strony za pomocą mod_rewrite za pomocą pliku .htaccess"
excerpt: "Dowiedz się, jak zmienić adres URL dostępu do Twojej strony za pomocą mod_rewrite za pomocą pliku .htaccess"
slug: hosting_www_htaccess_-_generowanie_adresow_za_pomoca_mod_rewrite
section: 'Przekierowania i uprawnienia dostępu'
order: 03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 22-12-2022**
  
## Wprowadzenie

"**mod_rewrite**" jest jednym z modułów dostępnych na serwerze Web HTTP **Apache**. **Apache** jest zainstalowany na całej naszej infrastrukturze hostingu współdzielonego. Ten serwer umożliwia zarządzanie wszystkimi zapytaniami HTTP wysyłanymi do Twojego hostingu.

Na przykład Apache pobiera zapytania HTTP generowane przez przeglądarki internetowe od użytkowników Twojej strony i zwraca im treści żądane przez te same zapytania. Przeglądarki internetowe wyświetlają zawartość Twojej strony WWW.

"**mod_rewrite**" umożliwia na przykład przepisanie i przekierowanie:

- użytkownik, który wpisuje URL przez "HTTP" bezpośrednio na adres URL Twojej strony WWW za pomocą "HTTPS";
- wszystkie adresy URL używane na Twojej stronie WWW do konkretnego katalogu lub pliku;
- użytkownik, który wpisuje adres URL bez www bezpośrednio na adres strony www z www.

"**mod_rewrite**" oferuje nieskończoną ilość możliwości. Poniżej przedstawimy kilka najpopularniejszych przykładów użycia.

> [!success]
>
> Jeśli chcesz pogłębić swoją wiedzę na temat korzystania z Apache "**mod_rewrite**", lub jeśli przykładowy, którego szukasz, nie znajduje się w nadchodzącym tutorialu, zapoznaj się z [oficjalną dokumentacją Apache](https://httpd.apache.org/docs/2.4/en/mod/mod_rewrite.html).
>

**Dowiedz się, jak przepisać URL dostępu do Twojej strony WWW za pomocą mod_rewrite przy użyciu pliku .htaccess**
  
## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/)
  
## W praktyce

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#go-further) niniejszego przewodnika.
>
> Kolejne przykłady zostaną wprowadzone do pliku.htaccess. Uwaga, reguły, które określiłeś w tym pliku, mają bezpośrednie konsekwencje dla Twojej strony WWW. Sprawdź systematycznie dodawanie reguł przed ich wdrożeniem na Twojej stronie WWW.
>

Plik ".htaccess", w którym skonfigurujesz "**mod_rewrite**" Apache może być umieszczony w kilku różnych folderach. Należy przestrzegać wyłącznie zasady jednego **tylko** pliku ".htaccess" dla każdego katalogu lub podkatalogu.

Parametry określone w pliku ".htaccess" mają zastosowanie do katalogu, w którym jest on obecny, oraz do wszystkich jego podkatalogów.

Aby edytować (lub utworzyć) katalogi, zaloguj się do przestrzeni FTP Twojego hostingu. W razie potrzeby skorzystaj z przewodnika "[Dostęp do przestrzeni dyskowej](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/)".

Poniżej znajdziesz kilka najpopularniejszych przykładów użycia oprogramowania Apache "**mod_rewrite**". Niektóre z nich mogą również ułatwić pozycjonowanie SEO na Twojej stronie WWW.

### Przekieruj wszystkie zapytania HTTP na jeden plik strony

Edytuj plik ".htaccess" znajdujący się w katalogu zawierającym Twoją stronę WWW. Umieść w nim następujący kod (zastępując w naszym przykładzie **test.php** nazwą Twojego pliku):

```bash
RewriteEngine On
RewriteRule .* test.php
```

W naszym przykładzie wszystkie zapytania kierowane na Twoją stronę WWW są przekierowywane na plik **test.php**.

### Przekieruj część zapytań HTTP na jeden plik Twojej strony WWW

Edytuj plik ".htaccess" znajdujący się w katalogu zawierającym Twoją stronę WWW. Umieść w nim następujący kod (zastępując w naszym przykładzie wartości **thetest** i **/test_wslash/test.php** nazwy własnych plików):

```bash
RewriteEngine On
RewriteRule thetest /test_wslash/test.php
```

W naszym przykładzie wszystkie zapytania HTTP zawierające **/thetest** są przekierowywane do pliku **/test_wslash/test.php**.

### Przekieruj domenę na subdomenę z "www"

Reguła przepisywania zmusza adres/URL Twojej strony WWW do przepisania subdomeny na "www".

Edytuj plik ".htaccess" znajdujący się w katalogu zawierającym Twoją stronę WWW. Umieść w nim następujący kod (zastępując w naszym przykładzie **domain.tld** nazwą Twojej domeny):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld$
RewriteRule ^(.*) http://www.domain.tld/$1 [QSA,L,R=301]
```

Ten adres URL może ułatwić pozycjonowanie SEO Twojej strony WWW.

### Przekieruj zapytania do wybranego katalogu bez wyświetlania wybranego katalogu

Kiedy korzystasz z hostingu OVHcloud, Twoja domena (na przykład **domain.tld**) jest zgłaszana w `MultiSite`, aby wyświetlić zawartość folderu docelowego zwanego również `Katalog główny`. Możesz spersonalizować nazwę `Katalog główny`.

Zapoznaj się z naszym przewodnikiem dotyczącym [konfiguracji strony podpiętej w opcji MultiSite na hostingu](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/), jeśli chcesz uzyskać więcej informacji na ten temat.

Niektórzy użytkownicy nie umieszczają swojej strony internetowej bezpośrednio na podstawie `Katalog główny`. Następnie tworzą podfolder (np.: **MyWebsite**) w `Katalog główny`, aby umieścić na nim swoją stronę internetową.

W takim przypadku URL dostępu do strony będzie wyglądał następująco: **http://domain.tld/MyWebsite**

Jeśli Twoja strona WWW nie jest widoczna bezpośrednio w `Katalog główny` zadeklarowanym w opcji MultiSite i nie chcesz wyświetlać nazwy folderu w adresie URL Twojej strony, edytuj plik ".htaccess" w katalogu zawierającym Twoją stronę WWW. 

Umieść w nim następujący kod (zastępując w naszym przykładzie wartości **domain.tld** nazwą domeny i **MyWebsite** nazwą Twojego katalogu):

```bash
RewriteEngine on
RewriteCond %{HTTP_HOST} ^domain.tld
RewriteCond %{REQUEST_URI} !^/MyWebsite
RewriteRule ^(.*)$ /MyWebsite/
```

W naszym przykładzie adres Twojej strony internetowej musi być typu **http://domain.tld**, natomiast w rzeczywistości strona wywoływana jest **http://domain.tld/MyWebsite**.

### Automatyczne przekierowanie osoby odwiedzającej stronę przez HTTPS na stronę WWW podczas wyświetlania jej przez adres URL za pomocą HTTP

Certyfikaty SSL pozwalają na szyfrowanie informacji przesyłanych przez HTTP za pomocą Twojej strony WWW. Zapobiega to gromadzeniu przez osoby lub złośliwe roboty danych wymienianych między stroną i użytkownikiem, takich jak np. dane bankowe.

Jeśli nie posiadasz certyfikatu SSL, zapoznaj się z naszym przewodnikiem dotyczącym [zarządzania certyfikatem SSL na hostingu OVHcloud](https://docs.ovh.com/pl/hosting/certyfikaty-ssl-na-hostingu/).

Niektórzy z odwiedzających Twoją stronę mogą zapomnieć o wprowadzeniu adresu URL dostępu do Twojej witryny w **https://** : stanowi to istotne ryzyko dla wymiany danych między Twoją stroną WWW a przeglądarkami internetowymi.

Aby temu zapobiec, edytuj plik ".htaccess" w katalogu zawierającym Twoją stronę WWW. Umieść w nim następujący kod (zastępując w naszym przykładzie **domain.tld** nazwą Twojej domeny):

```bash
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.domain.tld/$1 [R,L]
```

W poniższym przykładzie wszystkie zapytania wykonane za pomocą adresu URL w "**http://**" zostaną automatycznie zapisane w "**https://**". W ten sposób internauci zostaną przekierowani do Twojej strony WWW w "**https://**".
  
## Sprawdź również <a name="go-further"></a>

[Zablokować dostęp do mojej strony www dla niektórych adresów IP przez plik .htaccess](https://docs.ovh.com/pl/hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Chroń interfejs administracyjny swojej strony plikiem .htaccess](https://docs.ovh.com/pl/hosting/hosting-htaccess-w-jaki-sposob-zabezpieczyc-dostep-dostepu-do-katalogu/)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 