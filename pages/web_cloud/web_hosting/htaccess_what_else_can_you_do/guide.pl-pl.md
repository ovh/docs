---
title: "Tutorial - Operacje możliwe do wykonania z plikiem .htaccess"
excerpt: "Poznaj przykłady operacji, które można wykonać przy użyciu pliku .htaccess"
updated: 2023-05-23
---


> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zgłóś propozycję modyfikacji” na tej stronie.
>

## Wprowadzenie

Tutorial przedstawia główne funkcje pliku ".htaccess" dla Twojego hostingu.

Plik ".htaccess" to plik konfiguracyjny (HTTP) Apache wykonywany przez serwer www Twojego hostingu www. Pozwala on na zdefiniowanie szczególnych zasad dla katalogu i wszystkich jego podkatalogów. Możesz utworzyć kilka plików ".htaccess" w [przestrzeni FTP](/pages/web_cloud/web_hosting/ftp_connection/) Twojego hostingu. 

Jeśli Twoja przestrzeń FTP nie istnieje, możesz ją dodać dodając w katalogu, do którego chcesz zastosować jedną lub kilka reguł opisanych w tym tutorialu.

Aby poprawnie korzystać z pliku ".htaccess", musisz znać i przestrzegać następujących zasad: 

- **tylko jeden** plik ".htaccess" w katalogu lub podkatalogu, aby uniknąć konfliktów między różnymi plikami ".htaccess";
- plik ".htaccess" jest niewidoczny dla użytkowników odwiedzających Twoją stronę;
- reguły zadeklarowane w pliku ".htaccess" mają zastosowanie do całego katalogu, w którym zainstalowany jest plik ".htaccess", oraz do wszystkich podkatalogów tego katalogu.

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/) i/lub kontakt z producentem oprogramowania. Niestety firma OVH nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Idź dalej"](#go-further) niniejszego przewodnika.
>
> Przykłady, które będą następnie wyświetlane są wprowadzane do pliku ".htaccess". Uwaga, reguły, które określiłeś w tym pliku, mają bezpośrednie konsekwencje dla Twojej strony WWW. Sprawdź systematycznie dodawanie reguł przed ich wdrożeniem na Twojej stronie WWW. 
> 

**Poznaj najważniejsze operacje wykonywane za pomocą pliku ".htaccess".**

## Wymagania początkowe

- Posiadanie [hostingu OVHcloud](https://www.ovhcloud.com/pl/web-hosting/)

## W praktyce

### Umożliwienie lub ograniczenie dostępu do katalogu lub strony internetowej dla jednego lub kilku adresów IP

Funkcja ta jest bardzo przydatna i zwiększa bezpieczeństwo Twoich stron WWW. Może pomóc zmniejszyć ryzyko włamania na Twojej stronie WWW.

Aby uzyskać więcej informacji, zapoznaj się z przewodnikiem: ["Jak zablokować dostęp do mojej strony dla niektórych adresów IP za pomocą pliku .htaccess? "](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/).

### Zdefiniuj zaszyfrowane hasło dostępu do katalogu lub strony www

Za pomocą pliku ".htaccess" możesz wprowadzić zabezpieczony dostęp (hasłem) do danych znajdujących się na Twoim hostingu.

Aby uzyskać więcej informacji, zapoznaj się z naszym tutorialu ["Chroń interfejs administracyjny Twojej strony za pomocą pliku .htaccess"](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password/).

### Określ inny plik indeksu

Domyślnie plik **index** w katalogu jest *index.html*, *index.htm* lub *index.php*. Jeśli wolisz, aby był to inny plik, możesz dodać wiersz tego typu w swoim ".htaccess":

```bash
DirectoryIndex File_Name
```

Na przykład, jeśli chcesz użyć strony **home.html** jako strony indeksu, dodaj następujący wiersz:

```bash
DirectoryIndex home.html
```

### Uniemożliwienie wyświetlania zawartości katalogu

Aby zapobiec wyświetlaniu przez internautów wszystkich plików znajdujących się w katalogu bez pliku **index** (.cgi, .html, .php, itp.), utwórz plik "**.htaccess**" zawierający poniższy wiersz:

```bash
Options -Indexes
```

### Zmień adres URL

Dzięki modułowi **mod_rewrite** z wstępnie zainstalowanego serwera HTTP Apache na Twoim hostingu www, funkcja ta pozwala na przekierowanie:

- wszystkie zapytania HTTP do jednego pliku na Twojej stronie WWW;
- część zapytań HTTP do jednego pliku na Twojej stronie WWW;
- Twoja nazwa domeny do subdomeny z wpisem "www";
- zapytania do konkretnego folderu, bez wyświetlania danego folderu;
- automatycznie odwiedzający Twoją stronę przez HTTPS podczas wyświetlania jej zawartości poprzez HTTP.

Więcej informacji znajdziesz w przewodniku: ["Prześlij link dostępowy do mojej strony za pomocą mod_rewrite za pomocą pliku .htaccess"](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite/).

#### Przekieruj wiadomości z błędem

Aby spersonalizować i/lub przekierować wiadomości błędów na stronę WWW, utwórz plik "**.htaccess**" zawierający następujący wiersz kodu:

```bash
ErrorDocument Error_Code_Number Message_Or_Destination
```

Zastąp tylko "**Error_Code_Number**" odpowiednim kodem błędu HTTP Apache. 

Więcej informacji o tej funkcji znajdziesz w [oficjalnej dokumentacji Apache](https://httpd.apache.org/docs/trunk/en/custom-error.html){.external}.

Najpopularniejsze kody błędów HTTP to:

- 401: Authorization required: błąd ten jest generowany, gdy użytkownik wprowadza nieprawidłowe login/hasło podczas dostępu do chronionego pliku lub katalogu.
- 403: Access denied: błąd ten pojawia się podczas dostępu do katalogu, w którym brakuje pliku *index.html* (lub *index.cgi*, itp.), a konfiguracja serwera uniemożliwia wyświetlanie plików w katalogu.
- 404: Not Found: plik, który odwiedzający próbował zobaczyć, nie istnieje.
- 500: Internal Server Error: błąd ten pojawia się, gdy skrypt nie został prawidłowo wykonany lub skrypt lub uprawnienia skryptu są nieprawidłowe.

Zastąp **"Message_Or_Destination"** akcją do wykonania. Aby wyświetlić wiadomość bezpośrednio, wpisz odpowiednią wiadomość w cudzysłowie. Aby przekierować na określoną stronę, wprowadź ścieżkę dostępu do tej strony. 

Poniżej znajdują się dwa konkretne przykłady:

- Chcesz wskazać *"Przykro nam, nie masz prawa dostępu do tego pliku"*, jeśli osoba odwiedzająca zauważy błąd **403**. Dodaj poniższy wiersz do pliku ".htaccess":

```bash
ErrorDocument 403 "Przykro nam, nie masz prawa dostępu do tego pliku"
```

- Chcesz zwrócić błędy **404** na swoją własną stronę *404.html* (dla domeny: domain.tld). Dodaj poniższy wiersz do pliku ".htaccess":

```bash
ErrorDocument 404 http://domain.tld/404.html
```

Możesz również przekierować błąd na skrypt **C**ommon **G**ateway **I**interface (**CGI**). Możesz kodować skrypt w **CGI**, aby, na przykład, wykonać następujące operacje:
 
- wyświetl wiadomość;
- przekierowanie użytkownika na inny plik zgodnie z pierwotnie żądanym adresem URL (dostępny w zmiennej środowiskowej **REQUEST_URI**);
- wyślij e-mail.

Na przykład, aby przekierować błąd na skrypt **CGI**, dodaj poniższą linię do pliku ".htaccess":

```bash
ErrorDocument 404 /cgi-bin/błąd.cgi?type=404
```

Poniższa linia przekieruje osobę odwiedzającą, która ma błąd **404** na Twój skrypt *błąd.cgi*. Będzie on wykonywał zawarte w nim dyrektywy, w szczególności w odniesieniu do błędu **404**.

## Sprawdź również <a name="go-further"></a>

[Logowanie do przestrzeni FTP hostingu WWW](/pages/web_cloud/web_hosting/ftp_connection/)

[Zablokować dostęp do mojej strony dla niektórych adresów IP przez plik .htaccess?](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website/)

[Chroń interfejs administracyjny swojej strony plikiem .htaccess](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password/)

[Prześlij link dostępowy do mojej strony za pomocą mod_rewrite za pomocą pliku .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 

