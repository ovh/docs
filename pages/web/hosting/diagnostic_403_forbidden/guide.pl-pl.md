---
title: Co zrobić w przypadku strony "403 forbidden"?
excerpt: Dowiedz się, jak przywrócić Twoją stronę WWW online, gdy wyświetla ona stronę "403 forbidden"
updated: 2022-06-16
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

**Ostatnia aktualizacja z dnia 16/06/2022**

## Wprowadzenie 

Modyfikacje dotyczące uprawnień dostępu do plików strony, pliku **.htaccess** lub instalacji wtyczki bezpieczeństwa mogą czasem skutkować stroną **"403 forbidden"**.

Może się również zdarzyć, że po wykryciu anomalii nasze roboty związane z bezpieczeństwem zostaną tymczasowo zablokowane dostęp do plików na Twoim hostingu. Ten rodzaj automatycznego blokowania ma na celu zapobieganie wysyłaniu złośliwego kodu do innych podmiotów oraz ochronę prawną.

![403error](images/403error.png){.thumbnail}

**Dowiedz się, jak odblokować dostęp do Twojej strony w przypadku wyświetlenia "403 forbidden".**

> [!warning]
>
> OVHcloud udostępnia różnorodne usługi, jednak to Ty odpowiadasz za ich konfigurację i zarządzanie nimi. Ponosisz więc odpowiedzialność za ich prawidłowe funkcjonowanie.
>
> Oddajemy w Twoje ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [[wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/)](https://partner.ovhcloud.com/pl/directory/) i/lub kontakt z producentem oprogramowania. Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji [Sprawdź również](#gofurther) ten przewodnik.
>

## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/) OVHcloud
- Posiadanie [danych do logowania](/pages/web/hosting/ftp_connection#etap-1-pobranie-informacji-niezbednych-do-logowania) do przestrzeni dyskowej Twojego hostingu
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

### Etap 1: analiza sytuacji

Jeśli strona **"403 forbidden"** pojawiła się w wyniku nieprawidłowej modyfikacji strony WWW, [przywróć całość lub część przestrzeni dyskowej hostingu](/pages/web/hosting/ftp_save_and_backup) z wcześniejszą datą.

Jeśli dostępne kopie zapasowe nie pozwolą Ci przywrócić dostępu do Twojej strony WWW, skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/).

Jeśli strona **"403 forbidden"** nie pojawiła się po zmianie strony, sprawdź swoją skrzynkę pocztową. Jeśli otrzymałeś e-mail z naszych usług informujący o zamknięciu Twojego hostingu ze względów bezpieczeństwa, przejdź [do etapu drugiego](#step2).

Jeśli pojawi się strona **"403 forbidden"** bez podjęcia przez Ciebie działań i nie otrzymałeś e-maili od naszych usług w tym zakresie, skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/).

### Etap 2: zabezpiecz swoje rozwiązania <a name="step2"></a>

Sprawdź bezpieczeństwo Twojej poczty lub stacji:

- Wykonaj aktualizacje dotyczące bezpieczeństwa;
- Upewnij się również, czy zainstalowany jest antywirus, zaktualizuj go i uruchom pełny skan. Jeśli nie posiadasz domeny w OVHcloud, przed instalacją skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/) usług hostingowych;
- Zmień wszystkie Twoje lokalne hasła, zwłaszcza te przypisane do Twoich kont e-mail, przestrzegając tych [dobrych praktyk](/pages/account/customer/manage-ovh-password#generowanie-hasla);
- Zmień hasła do wszystkich usług OVHcloud, w szczególności do [bazy danych](../zmiana-hasla-do-bazy-danych/) i do [przestrzeni dyskowej FTP](/pages/web/hosting/ftp_change_password).

> [!warning]
>
> Przed zmianą hasła do bazy danych na Twojej stronie WWW z poziomu Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) zaktualizuj plik konfiguracyjny Twojej strony, aby połączył się z bazą danych przy użyciu nowego hasła.
>
> W przeciwnym razie zmiana hasła do Twojej bazy danych spowoduje wyłączenie strony WWW lub jej usług.
>
> W przypadku wątpliwości dotyczących sposobu postępowania skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/).
>

### Etap 3: interweniować na Twoim hostingu

Najpierw zapisz datę wysłania wiadomości e-mail OVHcloud informującej o wyłączeniu hostingu, a także folder lub foldery, które zawierają przykłady nielegalnych plików.

#### Przypadek nr 1: Twój hosting został wyłączony mniej niż dwa tygodnie temu

Jeśli Twój hosting został zamknięty mniej niż dwa tygodnie temu i zawiera tylko jedną stronę, przywracaj przestrzeń dyskową zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web/hosting/ftp_save_and_backup#przywracanie-przestrzeni-dyskowej-w-panelu-klienta).

Jeśli Twój hosting został zamknięty mniej niż dwa tygodnie temu i zawiera kilka stron WWW, przywracaj tylko folder lub katalogi zawierające nieprawidłowe pliki zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web/hosting/ftp_save_and_backup#przywracanie-pliku-za-pomoca-programu-lub-interfejsu).

> [!warning]
>
> Sam powrót do przestrzeni dyskowej nie wystarczy, aby usunąć ewentualne luki bezpieczeństwa, które pojawiły się na Twojej stronie WWW.
> W celu identyfikacji luk w zabezpieczeniach, możesz przeanalizować ["logi WWW"](/pages/web/hosting/logs_and_statistics#logi) Twojego hostingu lub skorzystać z pomocy [[wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/pl/directory/)](https://partner.ovhcloud.com/pl/directory/) aby przeprowadzić audyt bezpieczeństwa Twoich rozwiązań.
>

#### Przypadek nr 2: Twój hosting został wyłączony dwa tygodnie temu

Jeśli Twój hosting został zamknięty dwa tygodnie temu, skontaktuj się z [wyspecjalizowanym dostawcą](https://partner.ovhcloud.com/pl/directory/) usług hostingowych w celu przeprowadzenia audytu bezpieczeństwa swoich rozwiązań. 

### Etap 4: reaktywacja hostingu <a name="reactivate-web-hosting"></a>

> [!warning]
>
> Zalecamy przeprowadzenie audytu bezpieczeństwa **przed** ponownym otwarciem hostingu. Wysyłanie złośliwego kodu z Twojego hostingu może wiązać się z Twoją odpowiedzialnością prawną.
>

#### Reaktywuj Twój hosting za pomocą FileZilla

> [!primary]
>
> Jeśli chcesz zainstalować program **FileZilla** do zarządzania plikami Twojej strony, postępuj zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web/hosting/ftp_filezilla_user_guide).
>

Otwórz program FileZilla i zaloguj się do Twojej przestrzeni dyskowej. Następnie kliknij `Serwer`{.action} na pasku menu, po czym kliknij `Wprowadź dowolne polecenie`{.action} (nazwa może być nieco inna w zależności od wersji FileZilla, której używasz):

![command_filezilla1](images/command_filezilla1.png){.thumbnail}

W oknie, które się wyświetla wprowadź poniższe polecenie i zatwierdź je:

```
SITE CHMOD 705 /
```

![command_filezilla2](images/command_filezilla2.png){.thumbnail}

Odpowiedź **"200 Permissions changed on /"** potwierdza, że operacja została prawidłowo wykonana. Aby to sprawdzić, spróbuj ponownie wejść na Twoją stronę.

#### Włącz ponownie hosting FTP Explorer "net2ftp"

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) przejdź do sekcji `Web Cloud`{.action}, następnie `Hosting`{.action} i kliknij zakładkę `FTP-SSH`{.action} odpowiedniego hostingu.

Następnie kliknij przycisk `FTP Explorer`{.action} i zaloguj się do przestrzeni dyskowej, postępując zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web/hosting/ftp_connection#1-logowanie-przez-ftp-explorer). Kliknij przycisk `Zaawansowane`{.action}, a następnie przycisk `Go`{.action} obok przycisku "Send arbitrary FTP commands to the FTP server".

![net2ftp](images/net2ftp.png){.thumbnail}

W górnej części strony wprowadź poniższe polecenie, a następnie kliknij zielony przycisk "V".

![result_command_on_net2ftp](images/result_command_on_net2ftp.png){.thumbnail}

Odpowiedź **"200 Permissions changed on /"** potwierdza, że operacja została prawidłowo wykonana. Aby to sprawdzić, spróbuj ponownie wejść na Twoją stronę.

## Sprawdź również <a name="gofurther"></a>

[Włamanie na stronę z modułem WordPress: porady i przykłady zastosowania](/pages/web/hosting/cms_what_to_do_if_your_site_is_hacked)

[Aktywacja zapory systemowej](/pages/web/hosting/multisites_activating_application_firewall)

[Zmiana wersji PHP na hostingu](/pages/web/hosting/php_configure_php_on_your_web_hosting_2014)

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, sprawdź naszą [ofertę pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.