---
title: Przeniesienie strony WWW i kont e-mail do OVH
slug: przeniesienie-strony-www-do-ovh
excerpt: "Dowiedz się, jak migrować Twoją stronę WWW, konta e-mail i domenę do OVHcloud bez przerwy w dostępności usług"
section: Pierwsze kroki
order: 08
---

**Ostatnia aktualizacja z dnia 2022-11-24**

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

## Wprowadzenie

Niniejszy przewodnik prezentuje działania, które należy przeprowadzić, aby przenieść całą stronę WWW, domenę i konta e-mail do OVHcloud bez przerwy w dostępności usług.

> [!warning]
>
> OVHcloud oddaje do Twojej dyspozycji usługi, których konfiguracja, zarządzanie i odpowiedzialność spoczywa na Ciebie. W związku z tym należy zapewnić ich prawidłowe funkcjonowanie.
> 
> Oddajemy w Twojej ręce niniejszy przewodnik, którego celem jest pomoc w jak najlepszym wykonywaniu bieżących zadań. W przypadku trudności zalecamy skorzystanie z pomocy [wyspecjalizowanego usługodawcy](https://partner.ovhcloud.com/fr/). Niestety firma OVHcloud nie będzie mogła udzielić wsparcia w tym zakresie. Więcej informacji znajduje się w sekcji ["Idź dalej"](#go-further) niniejszego przewodnika.
>

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną (domena musi istnieć ponad 60 dni).
- Dostęp do strefy DNS (Domain Name System) domeny
- Dostęp do plików i bazy danych na Twojej stronie WWW u Twojego aktualnego dostawcy.
- Posiadanie danych dostępowych (użytkownika, hasła, serwera) dla aktualnych adresów e-mail
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr)

## W praktyce

> [!success]
>
> Instrukcje zawarte w tym przewodniku odnoszą się do kilku produktów z usług WWW Cloud. Zalecamy zapoznanie się z poniższymi krokami **przed**, aby rozpocząć migrację Twoich usług.
>

Przeniesienie strony WWW i kont e-mail do OVHcloud **bez przerwy w działaniu usługi** wymaga zastosowania określonej procedury w 10 krokach:

- [Etap 1: zamów hosting i konta e-mail w OVHcloud](#step1)
- [Etap 2: utworzyć i wstępnie skonfigurować strefę DNS dla Twojej domeny w OVHcloud](#step2)
- [Etap 3: pobrać pełną kopię zapasową Twojej strony WWW](#step3)
- [Etap 4: importować kopię zapasową Twojej strony WWW do Twojego hostingu OVHcloud](#step4)
- [Etap 5: stwórz konta e-mail w serwisie OVHcloud](#step5)
- [Etap 6: zadeklarować serwery e-mail OVHcloud w strefie DNS domeny](#step6)
- [Etap 7: przeniesienie zawartości poprzednich kont e-mail na nowe konta OVHcloud](#step7)
- [Etap 8: ponownie skonfiguruj oprogramowanie poczty elektronicznej](#step8)
- [Etap 9: zastąpienie aktywnych serwerów DNS Twojej domeny serwerami OVHcloud](#step9)
- [Etap 10: przenieść domenę do OVHcloud](#step10)

Zgodnie z tymi 10 krokami **w kolejności**, nie będziesz miał przerwy w dostępie do Twojej strony WWW ani do otrzymywania nowych wiadomości e-mail.

W zależności od operatora, dostawcy hostingu lub dostawcy usług e-mail, możliwe jest jednak, że odcinają oni dostęp do Twoich starych usług, jeśli stwierdzą, że Twoja domena nie jest już skonfigurowana w ramach infrastruktury.<br>
W takim przypadku może wystąpić przerwa w działaniu usługi.

W przypadku wystąpienia takiej przerwy przewodnik ten jest tak skonstruowany, aby zminimalizować czas jej trwania.

### Etap 1: zamów hosting i konta e-mail w OVHcloud <a name="step1"></a>

Kilka ofert hostingu OVHcloud zawiera ofertę e-mail "MX Plan". Ta oferta e-mail pozwala na tworzenie kont e-mail z przestrzenią dyskową do 5 GB dla każdego konta. Wybierz spośród poniższych pakietów hostingowych w zależności od wersji PHP, wersji SQL, liczby kont e-mail, których potrzebujesz oraz rozmiaru Twojej strony, którą chcesz przenieść:

- Hosting [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/) z **10 adresów e-mail** "MX Plan"
- Hosting [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/) z **100 adresów e-mail** "MX Plan"
- Hosting [Performance](https://www.ovhcloud.com/fr/web-hosting/performance-offer/) z **1000 adresów e-mail** "MX Plan". Oferta jest podzielona na 4 "podoferty".
- Hosting [Cloud Web](https://www.ovhcloud.com/fr/web-hosting/cloud-web-offer/) z **200 adresów e-mail** "MX Plan". Ta oferta jest używana przez programistów aplikacji.

Po wybraniu oferty hostingu, jeśli nie jesteś jeszcze klientem OVHcloud, kliknij przycisk `Zamów`{.action} na powyższych stronach handlowych. Postępuj zgodnie z kolejnymi poleceniami **bez konieczności przenoszenia domeny*.

Zamówienie można złożyć w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr). Po zalogowaniu kliknij pozycję `Web Cloud`{.action}, następnie kliknij przycisk `Zamów`{.action} w lewym górnym rogu, a następnie kliknij `Hosting`{.action}. Przejdź przez kolejne etapy zamówienia **bez konieczności transferu domeny**.

Po zatwierdzeniu płatności rozpocznie się instalacja hostingu. Na adres e-mail do kontaktu zostanie wysłana wiadomość. Identyfikatory dostępu do przestrzeni dyskowej FTP (File Transfert Protocol) Twojego hostingu WWW.

> [!primary]
>
> OVHcloud poza ofertą "MX Plan" proponuje również inne usługi e-mail. Możesz na przykład połączyć konta e-mail "MX Plan" z adresami ["Email-Pro"](https://www.ovhcloud.com/fr/emails/email-pro/) i/lub kontami ["Exchange"](https://www.ovhcloud.com/fr/emails/hosted-exchange/).
>

### Etap 2: utworzyć i wstępnie skonfigurować strefę DNS dla Twojej domeny w OVHcloud <a name="step2"></a>

Po utworzeniu hostingu zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr), następnie utwórz strefę DNS dla Twojej domeny **bez wpisywania jej na listę "www"**. Zapoznaj się z naszym przewodnikiem [dotyczącym tworzenia strefy DNS w OVHcloud](https://docs.ovh.com/fr/domains/creer-une-zone-dns-pour-un-domaine-externe/).

Po utworzeniu strefy DNS zaloguj się do jej zarządzania, korzystając z naszego przewodnika "[Edycja strefy DNS OVHcloud](https://docs.ovh.com/fr/domains/editer-ma-zone-dns/)". Jeśli nie są obecne, wprowadź następujące wpisy:

- Twoja domena bez "www", do celu typu "MX": "mx1.mail.ovh.net.".
- Twoja domena bez "www", do celu typu "MX": "mx2.mail.ovh.net.".
- Twoja domena bez "www", do celu typu "MX": "mx3.mail.ovh.net.".
- Twoja domena bez "www" na adres IP "A" na hostingu OVHcloud. Aby uzyskać poprawny adres IP, zapoznaj się z naszym przewodnikiem dotyczącym adresów IP [IP różnych klastrów hostingowych](https://docs.ovh.com/fr/hosting/liste-des-adresses-ip-des-clusters-et-hebergements-web/).
- Twoja domena **z** z "www", do Twojej domeny bez "www", przy użyciu wpisu typu "CNAME".

**Przykład**: W przypadku domeny "domain.tld" należy podać następujący tekst:

![hosting](images/DNSzone.png){.thumbnail}

> [!success]
>
> Zapisz dwie wartości docelowe pierwszych dwóch wpisów typu "NS". Zostaną one wykorzystane podczas [etap 9](#step9) niniejszego przewodnika.
>
> Wartości te odpowiadają serwerom DNS przypisanym do tej strefy DNS dla Twojej domeny.
>

### Etap 3: pobrać pełną kopię zapasową Twojej strony WWW <a name="step3"></a>

Pobierz zawartość przestrzeni dyskowej FTP Twojego aktualnego hostingu, a także kopię zapasową bazy danych, jeśli Twoja strona WWW używa bazy.

Operacje te wykonywane są wyłącznie na dotychczasowym hostingu. Skontaktuj się z nim, jeśli masz trudności z pobraniem pełnej kopii zapasowej Twojej strony WWW.

### Etap 4: zaimportować kopię zapasową Twojej strony WWW do hostingu OVHcloud <a name="step4"></a>

Aby zaimportować kopię zapasową przestrzeni dyskowej FTP poprzedniego dostawcy, [zaloguj się do przestrzeni FTP Twojego hostingu OVHcloud](https://docs.ovh.com/fr/hosting/connexion-espace-stockage-ftp-hebergement-web/) i przesłać kopię zapasową do katalogu głównego "www" (lub innego katalogu głównego, który wcześniej utworzyłeś).

Zalecamy użycie programu [FileZilla](https://docs.ovh.com/fr/hosting/mutualise-guide-utilisation-filezilla/) do pobrania kopii zapasowej FTP z Twojego hostingu.

Jeśli Twój plik kopii zapasowej jest skompresowany (zaznaczony), rozpakuj go na komputerze przed przesłaniem plików na hosting OVHcloud.

Do tworzenia kopii zapasowej bazy danych [utwórz nową bazę danych](https://docs.ovh.com/fr/hosting/creer-base-de-donnees/), a następnie [zaimportuj kopię zapasową do nowej bazy danych](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/).

> [!primary]
>
> OVHcloud oferuje serwery baz danych CloudDB. Jeśli chcesz korzystać z tej oferty na swojej stronie internetowej, zapoznaj się z naszą dokumentacją dotyczącą tego produktu na naszej stronie <https://docs.ovh.com/fr/clouddb/>.
>

Połącz następnie bazę danych OVHcloud z plikiem konfiguracyjnym Twojej strony WWW dostępnym w przestrzeni dyskowej FTP Twojego hostingu OVHcloud.
W tym celu zastąp dane do logowania do starej bazy danych informacjami pochodzącymi z nowej bazy danych OVHcloud. Dane te znajdują się w pliku "konfiguracja/połączenie z bazą danych" Twojej strony WWW.

> [!success]
>
> Aby połączyć nową bazę danych, jeśli korzystasz z Content Management System (CMS), takiego jak WordPress, Joomla!, Drupal lub PrestaShop, znajdziesz informacje dotyczące plików konfiguracyjnych w pliku konfiguracyjnym w **etap 4** w przewodniku ["zmiana hasła do bazy danych"](https://docs.ovh.com/fr/hosting/modifier-mot-de-passe-base-de-donnees/).
>

Zarządzaj zewnętrzną domeną na hostingu OVHcloud za pomocą naszego przewodnika "[zarządzanie stronami podpiętymi w opcji MultiSite](https://docs.ovh.com/fr/hosting/multisites-configurer-un-multisite-sur-mon-hebergement-web/)". Proszę podać nazwę katalogu głównego wybranego na początku [etap 4](#step4). Przypominamy, że jest to folder, w którym umieściłeś pliki na przestrzeni FTP.

> [!warning]
>
> **Realizacja tej operacji jest kluczowa**, Twoja strona WWW nie będzie się wyświetlała, dopóki nie podasz odpowiednich informacji. Przestrzegaj w szczególności składni wpisu DNS "TXT".
>
> Ponieważ Twoja domena nie jest jeszcze zarejestrowana w OVHcloud, dodaj wpis DNS typu "TXT" z "tokenem OVHcontrol" i zmień wskazanie typu "A" Twojej domeny. Dotyczy to bezpośrednio w strefie DNS, która aktywuje Twoją domenę u obecnego operatora.
>
> Zrób to samo dla subdomeny z www.
>
> Skontaktuj się z aktualnym menedżerem strefy DNS, aby przeprowadzić operację.
>

**Przykład**: dla domeny "domain.tld":

![hosting](images/DNSmultisite.png){.thumbnail}

**Zmiana wpisów DNS "A", "CNAME" i "TXT" musi zostać wykonana przez aktualnego dostawcę DNS Twojej domeny. Czas propagacji wynosi maksymalnie 4-24 godzin, zanim stanie się w pełni skuteczny.**

Po propagacji DNS stroną, która będzie się wyświetlać z Twoją domeną, będzie strona zainstalowana w OVHcloud.

### Etap 5: stwórz konta e-mail w identyczny sposób w OVHcloud <a name="step5"></a>

Skorzystaj z naszego przewodnika dotyczącego [tworzenia kont e-mail "MX Plan"](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/) i przypisz do konta e-mail hostowane u Twojego dostawcy.

Jeśli wybrałeś rozwiązanie "Email Pro" lub "Exchange", zapoznaj się z naszą dokumentacją dotyczącą tworzenia kont e-mail:

- Dla "Email-Pro": <https://docs.ovh.com/fr/emails-pro/premiere-configuration/>
- W przypadku "Exchange": <https://docs.ovh.com/fr/microsoft-collaborative-solutions/premiere-configuration-exchange/>

### Etap 6: zadeklarować serwery e-mail OVHcloud w strefie DNS domeny <a name="step6"></a>

Etap ten polega na zmianie serwerów e-mail "MX" w strefie DNS domeny.
W rezultacie otrzymasz nowe e-maile z nowych adresów e-mail OVHcloud.

Zastąp (bez pozostawiania starych wpisów), u Twojego dostawcy, stare wpisy "MX" następującymi trzema wpisami:

- Twoja domena (bez "www") do celu typu "MX": "mx1.mail.ovh.net. ".
- Twoja domena (bez "www") do celu typu "MX": "mx2.mail.ovh.net. ".
- Twoja domena (bez "www") do celu typu "MX": "mx3.mail.ovh.net. ".

Zmiana serwerów "MX" realizowana jest u aktualnego operatora DNS Twojej domeny. Czas **propagacji wynosi od 4 do 24 godzin**, zanim zostanie w pełni zrealizowana.<br>
Oznacza to, że podczas propagacji DNS zmiany Twoje e-maile będą odejmowane coraz częściej na dotychczasowych kontach e-mail i coraz częściej na nowych kontach e-mail OVHcloud.<br>
Po zakończeniu propagacji wszystkie nowe e-maile zostaną odebrane na Twoje konta e-mail OVHcloud.

Zalecamy zmianę wpisów "MX" **przed**, aby wykonać migrację zawartości kont e-mail.
Dzięki tej metodzie unikasz ponownej migracji niektórych e-maili otrzymanych na poprzednich kontach e-mail podczas propagacji DNS.

### Etap 7: przenieść zawartość poprzednich kont e-mail do nowych adresów e-mail OVHcloud <a name="step7"></a>

Po propagacji DNS, wszystkie nowe e-maile są otrzymywane z nowych adresów e-mail. Twoje stare e e-maile są zawsze zapisane na Twoim starym serwerze e-mail.

Aby przenieść zawartość poprzednich kont, masz do wyboru dwie opcje.

**Wariant 1**: użyj naszego narzędzia [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external}, które pozwala na skopiowanie zawartości kont e-mail zarejestrowanych u dotychczasowego operatora do kont stworzonych w OVHcloud. Zapoznaj się z naszym przewodnikiem "[Przeniesienie kont e-mail poprzez OVH Mail Migrator](https://docs.ovh.com/fr/microsoft-collaborative-solutions/exchange-migration-de-comptes-e-mail-ovh-mail-migrator/)".

Zalecamy nie używać `Typ serwera`{.action} **POP** w części `Konto źródłowe`{.action}. Protokół usuwa e-maile ze starego serwera i wysyła je do docelowego serwera OVHcloud. Nie będziesz już mógł porównać zawartości starego adresu i nowego konta e-mail.

W części `Konto docelowe`{.action} wprowadź tylko adres e-mail OVHcloud i przypisane do niego hasło. Pozostawiając `Typ serwera`{.action} w `Hosted by OVH (Autodetect)`{.action}.

Po zakończeniu migracji zaloguj się na Twój adres e-mail OVHcloud przy użyciu [webmail OVHcloud](https://www.ovhcloud.com/fr/mail/), aby sprawdzić, czy wszystkie Twoje e-maile są obecne w nowym koncie.

Powtórz operację dla wszystkich Twoich kont e-mail.

> [!primary]
>
> Musisz posiadać identyfikatory dostępu dla wszystkich Twoich starych kont e-mail oraz nazwę serwera e-mail dotychczasowego operatora, aby móc przeprowadzić tę operację.
>
> Jeśli Twoje adresy e-mail są skonfigurowane w POP bez zatrzymywania kopii e-maili na starym serwerze e-mail lub jeśli posiadasz na swoich urządzeniach wiadomości e-mail zapisane "lokalnie", będzie można zrealizować tylko **opcja 2**.
>

**Wariant 2**: wykonaj kopię zapasową zawartości Twoich kont e-mail przy użyciu programu pocztowego (Outlook, Mail firmy Mac,...), ponownie skonfiguruj program pocztowy i zaimportuj kopię zapasową na nowy adres e-mail OVHcloud.

### Etap 8: konfiguruj ponownie programy pocztowe <a name="step8"></a>

Po zakończeniu migracji Twoich poprzednich kont e-mail do OVHcloud możesz ponownie skonfigurować Twoje oprogramowanie poczty elektronicznej, korzystając ze wszystkich naszych przewodników.

#### Dla kont e-mail "MX Plan": 

- Wszystkie parametry konfiguracji znajdziesz w naszym przewodniku "[Informacje ogólne na temat e-maili MX Plan](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/#2-utiliser-le-logiciel-de-votre-choix)". Znajdziesz tam również linki do przewodników dotyczących konfiguracji dla głównych programów pocztowych.

#### Dla kont "Email-Pro":

- Wszystkie nasze przewodniki dotyczące konfiguracji znajdują się w sekcjach `Konfiguracja na komputerze` i `Konfiguracja na smartphonie` [dokumentacja dotycząca oferty Email-Pro](https://docs.ovh.com/fr/emails-pro/).

#### Dla kont e-mail "Exchange":

- Wszystkie nasze przewodniki dotyczące konfiguracji znajdują się w sekcjach `Konfiguracja Exchange na komputerze` oraz `Konfiguracja Exchange na smartphonie` [dokumentacja dotycząca oferty Exchange](https://docs.ovh.com/fr/microsoft-collaborative-solutions/).

### Etap 9: zastąpienie aktywnych serwerów DNS Twojej domeny serwerami OVHcloud <a name="step9"></a>

Strefa DNS wstępnie skonfigurowana podczas [etap 2](#step2) nie została jeszcze zastosowana do Twojej domeny.

Zastąp aktualne serwery DNS Twojej domeny dwoma serwerami DNS zadeklarowanymi w strefie DNS OVHcloud.

> [!warning]
>
> Zmiana serwerów DNS musi zostać wykonana z aktualnego operatora domeny. Czas **propagacji wynosi od 24 do 48 godzin**, zanim zostanie w pełni wykonana.
>

### Etap 10: przenieść domenę do OVHcloud <a name="step10"></a>

Po zakończeniu propagacji DNS przetestuj Twoją stronę WWW i sprawdź wysyłkę i odbiór e-maili z Twoich kont e-mail.
Jeśli wszystko jest w porządku, odblokuj domenę i pobierz jej "kod transferu", "EPP" lub "AuthCode" z dotychczasowego operatora.

Przenieś domenę w naszym przewodniku dotyczącym [transferu domeny do OVHcloud](https://docs.ovh.com/fr/domains/transferer-mon-domaine-generique/).

Po zakończeniu transferu danych i usług zrezygnuj ze starych usług u poprzedniego dostawcy.

## Sprawdź również <a name="go-further"></a>

[Informacje ogólne na temat e-maili na hostingu](https://docs.ovh.com/fr/emails/generalites-sur-les-emails-mutualises/).

[Informacje ogólne na temat serwerów DNS](https://docs.ovh.com/fr/domains/generalites-serveurs-dns/).

[Tworzenie konta e-mail na hostingu](https://docs.ovh.com/fr/emails/creation-dune-adresse-e-mail/).

[Import bazy danych MySQL](https://docs.ovh.com/fr/hosting/mutualise-guide-importation-dune-base-de-donnees-mysql/)

[Zarządzanie bazą danych na hostingu](https://docs.ovh.com/fr/hosting/gestion-dune-base-de-donnees-depuis-un-hebergement-mutualise/).

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 
