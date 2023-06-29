---
title: Co zrobić w przypadku strony "403 forbidden"?
excerpt: Dowiedz się, jak przywrócić Twoją stronę WWW online, gdy wyświetla ona stronę "403 forbidden"
updated: 2023-06-09
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 09/06/2023**

## Wprowadzenie 

Strona **"403 forbidden"** może pojawić się, gdy:

- uprawnienia dostępu FTP (CHMOD) są niewystarczające lub ograniczone. Dostęp do pliku/katalogu/strony WWW, do której chcesz uzyskać dostęp za pośrednictwem przeglądarki internetowej, jest odrzucony przez serwer WWW hostingu;

- plik **.htaccess** zawiera regułę ograniczenia dostępu;

- wtyczka bezpieczeństwa chroni dostęp do plików/katalogów/stron internetowych za pośrednictwem przeglądarki internetowej;

- zapora aplikacyjna jest włączona.

Po wykryciu podejrzanego działania nasze roboty związane z bezpieczeństwem mogą tymczasowo zablokować dostęp do plików na Twoim hostingu. Urządzenie to zapobiega:

- postępów w zakresie ewentualnego włamania danych znajdujących się na hostingu;

- wysyłanie złośliwego kodu do innych podmiotów/stron internetowych, co może prowadzić do ich włamania;

- prowadzenie nielegalnych operacji.
 
 System ten ma również na celu prawną ochronę Twoich stron przed potencjalnym włamaniem się do hostingu, kierowanym do innych organizacji/stron WWW. 
 
 *Jeśli dotyczy Cię ten rodzaj blokady, na adres e-mail kontaktu administratora Twojego hostingu otrzymasz powiadomienie*

![403error](images/403error.png){.thumbnail}

**Dowiedz się, jak odblokować dostęp do Twojej strony w przypadku wyświetlenia "403 forbidden".**

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywają na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/) i/lub kontakt z [społecznością użytkowników](https://community.ovh.com/en/). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Sprawdź również"](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/) OVHcloud
- Posiadanie [danych do logowania](/pages/web/hosting/ftp_connection) do przestrzeni dyskowej FTP Twojego hostingu
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

### Etap 1: analiza sytuacji

Jeśli strona **"403 forbidden"** pojawiła się po zmianie strony WWW, [przywróć całą lub część przestrzeni dyskowej FTP Twojego hostingu](/pages/web/hosting/ftp_save_and_backup) do wcześniejszej daty.

Jeśli dostępne kopie zapasowe nie pozwolą Ci przywrócić dostępu do Twojej strony WWW, skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/).

Jeśli strona **"403 forbidden"** nie pojawiła się po zmianie strony, sprawdź swoją skrzynkę pocztową. Jeśli otrzymałeś e-mail z naszych usług wskazujący na zamknięcie Twojego hostingu ze względów bezpieczeństwa, przejdź bezpośrednio do [etap 2](#step-2) niniejszego przewodnika.

Jeśli strona **"403 forbidden"** pojawiła się bez podjęcia przez Ciebie działań i nie otrzymałeś e-maila od naszych usług w tym zakresie, sprawdź prawa dostępu FTP (CHMOD) do Twoich plików/folderów oraz kod zawarty w pliku(-ach) **.htaccess**. Sprawdź również, czy ta sytuacja nie jest generowana przez wtyczkę bezpieczeństwa lub zaporę aplikacyjną. W razie potrzeby należy skontaktować się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/).

### Etap 2: zabezpiecz swoje rozwiązania <a name="step-2"></a>

Sprawdź najpierw bezpieczeństwo swoich stacji/urządzeń:

- Wykonaj aktualizacje dotyczące bezpieczeństwa urządzeń.

- Sprawdzić, czy zainstalowany jest antywirus, zaktualizuj go i uruchom pełny skan. Jeśli nie posiadasz żadnego z nich, przed rozpoczęciem instalacji należy skonsultować się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/).

- Zmień wszystkie Twoje lokalne hasła, w szczególności Twoje konta e-mail, zgodnie z **dobrymi praktykami** określonymi w [tym przewodniku](/pages/account/customer/manage-ovh-password).

- Zmień hasła do wszystkich usług OVHcloud, zwłaszcza do [bazy danych](/pages/web/hosting/sql_change_password) i do [przestrzeni dyskowej FTP](/pages/web/hosting/ftp_change_password).

> [!warning]
>
> Przed zmianą hasła do bazy danych na Twojej stronie WWW z poziomu [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), zaktualizuj plik konfiguracyjny Twojej strony WWW, aby połączył się z bazą danych za pomocą nowego hasła.
>
> W przeciwnym razie zmiana hasła do Twojej bazy danych spowoduje zablokowanie dostępu do Twojej strony WWW lub do Twoich usług/klientów, którzy jej używają.
>
> W przypadku wątpliwości dotyczących sposobu postępowania skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).
>

### Etap 3: interweniować na Twoim hostingu

Najpierw zapisz datę wysłania wiadomości e-mail OVHcloud informującej o wyłączeniu hostingu WWW, a także folder lub foldery zawierające przykłady niezgodnych z prawem plików.

> [!primary]
>
> Roboty bezpieczeństwa mogą zastosować dwa poziomy dezaktywacji na Twoim hostingu: 
>
> - dezaktywacja przy użyciu "**CHMOD 700**" w katalogu głównym FTP Twojego hostingu;
> - dezaktywacja przy użyciu "**CHMOD 000**" w katalogu głównym FTP Twojego hostingu.
>
> W przypadku dezaktywacji przez ograniczenie dostępu do FTP z "**CHMOD 000**" należy skontaktować się z naszymi [zespołami pomocy](https://www.ovhcloud.com/pl/support-levels/), aby dokonać podsumowania sytuacji przed kontynuowaniem kroków opisanych w tym przewodniku. 
>
> W zależności od Twojej sytuacji, domeny będą stosować niższe ograniczenia, zmieniając "**CHMOD 000**" na "**CHMOD 700**", dzięki czemu będziesz mógł działać na przestrzeni FTP Twojego hostingu.
>

#### Przypadek nr 1: Twój hosting został wyłączony mniej niż dwa tygodnie temu

Jeśli Twój hosting został zamknięty mniej niż dwa tygodnie temu i zawiera tylko jedną stronę WWW, przywracaj przestrzeń dyskową FTP. Jeśli zawiera kilka stron WWW, możesz przywrócić tylko katalogi zawierające nieuprawnione pliki.

Aby przywrócić całą lub część Twojej przestrzeni dyskowej FTP, zapoznaj się z [naszym przewodnikiem](/pages/web/hosting/ftp_save_and_backup) w tej sprawie.

> [!warning]
>
> Sam powrót do przestrzeni dyskowej FTP nie wystarcza do usunięcia potencjalnych luk bezpieczeństwa, które pojawiły się na Twojej stronie WWW.
> Aby zidentyfikować luki w zabezpieczeniach, przeanalizuj ["logi www"](/pages/web/hosting/logs_and_statistics) Twojego hostingu lub skorzystaj z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/) w celu przeprowadzenia audytu bezpieczeństwa Twoich stron WWW.
>

#### Przypadek nr 2: Twój hosting został wyłączony dwa tygodnie temu

Jeśli Twój hosting został zamknięty ponad dwa tygodnie temu, skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/) w celu przeprowadzenia audytu bezpieczeństwa swoich stron www. 

> [!success]
>
> Jeśli potrzebujesz więcej informacji na temat [etapów 2 i 3](#step-2), zapoznaj się z naszym tutorial [działań, które należy wykonać w przypadku włamania na Twojej stronie internetowej](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked).
> 

### Etap 4: reaktywacja hostingu <a name="reactivate-web-hosting"></a>

> [!warning]
>
> Zalecamy przeprowadzenie audytu bezpieczeństwa **przed** ponownym otwarciem hostingu. Każda złośliwa operacja wykonywana z poziomu Twojego hostingu może wiązać się z Twoją odpowiedzialnością prawną.
>

#### Reaktywuj Twój hosting za pomocą FileZilla

> [!primary]
>
> Aby zainstalować oprogramowanie **FileZilla**, aby manipulować plikami Twojej strony WWW, postępuj zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web/hosting/ftp_filezilla_user_guide).
>

Otwórz program FileZilla, a następnie [zaloguj się do przestrzeni dyskowej FTP](/pages/web/hosting/ftp_connection). Następnie kliknij `Serwer`{.action} na pasku menu, następnie kliknij `Wprowadź dowolne polecenie`{.action} (nazwa może być różna w zależności od wersji FileZilla, której używasz):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

W oknie, które się wyświetla wprowadź poniższe polecenie i zatwierdź je:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Odpowiedź **"200 Permissions changed on /"** potwierdza, że operacja została prawidłowo wykonana. Aby to sprawdzić, spróbuj ponownie wejść na Twoją stronę.

> [warning]
>
> Modyfikacja może trwać kilka minut (maksymalnie 20 minut) i być widoczna w przeglądarce internetowej.
>
> W zależności od Twojej strony WWW konieczne może być również usunięcie pamięci podręcznej przeglądarki.
>

Jeśli powyższe polecenie nie działa, możesz spróbować tego innego polecenia:

```
STRONA CHMOD 705.
```

#### Włącz ponownie hosting FTP Explorer "net2ftp"

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) przejdź do sekcji `Web Cloud`{.action}, następnie `Hosting`{.action} i kliknij zakładkę `FTP-SSH`{.action} odpowiedniego hostingu.

Naciśnij przycisk `FTP Explorer`{.action} i zaloguj się do [przestrzeni dyskowej FTP](/pages/web/hosting/ftp_connection).

Kliknij przycisk `Zaawansowane`{.action}, a następnie przycisk `Go`{.action} obok przycisku "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

W górnej części strony wprowadź poniższe polecenie:

```
SITE CHMOD 705 /
```

Następnie kliknij zielony przycisk "V".


![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Odpowiedź **"200 Permissions changed on /"** potwierdza, że operacja została prawidłowo wykonana. Aby to sprawdzić, spróbuj ponownie wejść na Twoją stronę.

> [warning]
>
> Modyfikacja może trwać kilka minut (maksymalnie 20 minut) i być widoczna w przeglądarce internetowej.
>
> W zależności od Twojej strony WWW konieczne może być również usunięcie pamięci podręcznej przeglądarki.
>

## Sprawdź również <a name="go-further"></a>

[Włamanie na stronę z modułem WordPress: porady i przykłady zastosowania](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked)

[Aktywacja zapory systemowej](/pages/web/hosting/multisites_activating_application_firewall)

[Zmiana wersji PHP na hostingu](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 