---
title: Pierwsze kroki z hostingiem OVH
slug: pierwsze-kroki-hosting
excerpt: Zobacz, jak właściwie rozpocząć korzystanie z hostingu
section: Pierwsze kroki
order: 02
---

**Ostatnia aktualizacja dnia 2018-01-16**

## Wprowadzenie 

Właśnie kupiłeś hosting, aby stworzyć swoją stronę internetową. Umożliwia on zbudowanie strony opartej na gotowych rozwiązaniach (WordPress, PrestaShop, Joomla!, Drupal) lub własnej strony WWW działającej na stale dostępnych serwerach OVH. Dziękujemy za zaufanie. Przewodnik, który dla Ciebie udostępniamy, zawiera informacje, jak w prosty sposób stworzyć własną stronę internetową.

**Zobacz, jak właściwie rozpocząć korzystanie z hostingu.**

## Wymagania początkowe

- Zakupienie [hostingu OVH](https://www.ovhcloud.com/pl/web-hosting/){.external}.
- Otrzymanie wiadomości e-mail potwierdzającej uruchomienie usługi.
- Posiadanie [nazwy domeny](https://www.ovhcloud.com/pl/domains/){.external}, czyli adresu, pod którym dostępna będzie Twoja strona.
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

### Etap 1: Wybór projektu WWW
Chcesz stworzyć blog czy sklep internetowy? Dzielić się swoją pasją czy promować w Internecie własny biznes? A może chcesz przenieść istniejącą już stronę na serwer OVH? Aby z sukcesem zrealizować projekt, należy jasno określić swój cel.

Dzięki hostingowi OVH, możesz stworzyć nową stronę internetową lub przenieść istniejącą już stronę.

- **Tworzenie nowej strony internetowej**

Jeżeli posiadasz odpowiednią wiedzę w zakresie programowania, możesz sam stworzyć stronę internetową lub skorzystać z gotowych rozwiązań CMS (Content Management System). Pierwsze z podanych rozwiązań wymaga umiejętności technicznych, jednak daje możliwość stworzenia unikalnej strony WWW. Drugie rozwiązanie umożliwia skorzystanie z gotowego projektu strony bez konieczności posiadania umiejętności technicznych.

OVH udostępnia w Panelu klienta narzędzia umożliwiające automatyczną instalację wybranego systemu CMS: WordPress, PrestaShop, Drupal lub Joomla!. Jeżeli nie wiesz, który z systemów CMS wybrać, poniższe [zestawienie](https://www.ovhcloud.com/pl/web-hosting/uc-cms-comparison/){.external} pomoże Ci podjąć decyzję. Jeżeli OVH nie ma w swojej ofercie systemu CMS, który chcesz wykorzystać, możesz zainstalować go ręcznie na hostingu.

- **Przenoszenie istniejącej już strony na serwer OVH**

Przenoszenie strony może okazać się trudne, zwłaszcza jeżeli dotyczy ono świadczonych aktualnie usług, których przerwanie nie jest możliwe. Niniejszy przewodnik opisuje jedynie niektóre z etapów, które należy przeprowadzić w ramach przenoszenia usług. Aby zapoznać się z całym procesem przenoszenia strony internetowej zapraszamy do przeczytania przewodnika zatytułowanego [Przenoszenie strony internetowej na serwer OVH](https://docs.ovh.com/pl/hosting/przeniesienie-strony-www-do-ovh/){.external}.

### Etap 2: instalacja strony internetowej

Gdy projekt został już dokładnie określony, jedyne co pozostaje, to umieszczenie go na hostingu. Kolejny etap polega więc na umieszczeniu Twojej strony internetowej w sieci. W tym celu możesz skorzystać z trzech możliwości w zależności od czasu i umiejętności technicznych, którymi dysponujesz w tym zakresie.

#### W pełni automatyczna instalacja bez tworzenia bazy danych, dla osób nie posiadających wymaganych umiejętności technicznych

Rozwiązanie to wykorzystuje pre-instalowane moduły OVH dostępne w Panelu klienta. Jest to narzędzie umożliwiające prostą i szybką instalację systemu CMS. OVH przeprowadza instalację strony, a następnie przekazuje klientowi dane do logowania.

Aby instalacja modułu OVH była możliwa, upewnij się, że katalog instalacyjny modułu jest pusty (co ma miejsce, jeżeli nie zalogowałeś się jeszcze do Twojej przestrzeni dyskowej). Aby dokonać szybkiej instalacji modułu, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Wybierz sekcję `Hosting`{.action}, a następnie nazwę hostingu, który zakupiłeś. W zakładce `Moduły`{.action} wybierz opcję `Dodaj moduł`{.action}.

![Dostęp do modułów](images/access_to_the_1_click_modules_section.png){/thumbnail}

Aby rozpocząć instalację modułu, wybierz CMS, który chcesz zainstalować i upewnij się, że pole `Instalacja w trybie zaawansowanym`{.action} nie jest zaznaczone. Następnie kliknij `Instalacja`{.action}.

Teraz należy jedynie czekać na wiadomość e-mail z potwierdzeniem zainstalowania modułu i informacjami dotyczącymi logowania się na stronę. Następnie możesz przeprowadzić poniższe etapy.

Jeżeli chcesz uzyskać więcej informacji dotyczących modułów OVH dostępnych z automatyczną instalacją, zapoznaj się z dokumentacją: [Instalacja strony za pomocą modułów](https://docs.ovh.com/pl/hosting/hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/){.external}.

#### W pełni automatyczna instalacja z przygotowywaniem bazy danych, dla osób nie posiadających wymaganych umiejętności technicznych

Rozwiązanie to wykorzystuje moduły OVH — narzędzie umożliwiające prostą instalację systemu CMS. OVH instaluje stronę dzięki spersonalizowanym informacjom dostarczanym przez klienta (np. personalizacja danych do logowania do CMS). Rozwiązanie to wymaga, aby hosting posiadał co najmniej jedną bazę danych.

Aby instalacja modułu OVH była możliwa, koniecznie upewnij się, że:

- katalog instalacyjny modułu jest pusty (co ma miejsce, jeżeli nie zalogowałeś się jeszcze do Twojej przestrzeni dyskowej);
- baza danych została już utworzona na Twoim hostingu (w tym celu wybierz zakładkę `Bazy danych`{.action}, a następnie opcję `Stwórz bazę danych`{.action}).

Aby utworzyć bazę danych, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.Wybierz sekcję `Hosting`{.action}, a następnie nazwę hostingu, który zakupiłeś. W zakładce `Bazy danych`{.action} wybierz opcję `Stwórz bazę danych`{.action}. Uzupełnij wymagane informacje, a następnie zaczekaj na zakończenie instalacji.

![Dostęp do modułów OVH ](images/create_a_database.png){/thumbnail}

Gdy baza danych została już utworzona, wybierz zakładkę `Moduły`{.action}, by przeprowadzić instalację modułu, a następnie wybierz opcję `Dodaj moduł`{.action}. Wybierz CMS, który chcesz zainstalować i upewnij się, że pole `Instalacja w trybie zaawansowanym`{.action} nie jest zaznaczone, następnie wybierz opcję `Instalacja`{.action}.

![Dostęp do modułów OVH](images/access_to_the_1_click_modules_section.png){/thumbnail}

Wpisz wymagane informacje aż do rozpoczęcia instalacji modułu. Teraz należy jedynie czekać na wiadomość e-mail z potwierdzeniem instalacji, a następnie przeprowadzić wskazane poniżej etapy.

Jeżeli chcesz uzyskać więcej informacji dotyczących modułów OVH dostępnych za pomocą 1 kliknięcia, zapoznaj się z dokumentacją: [Instalacja strony za pomocą modułów](https://docs.ovh.com/pl/hosting/hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/){.external}.

#### Konfiguracja ręczna, wymagane umiejętności techniczne

Rozwiązanie to stosowane jest w przypadku tworzenia lub przenoszenia strony internetowej bez wykorzystywania modułów OVH. Konieczne jest posiadanie plików strony internetowej, którą chcesz zainstalować. Należy zalogować się ręcznie do przestrzeni dyskowej, aby wgrać pliki strony internetowej, a następnie, o ile to możliwe, połączyć ją z uprzednio utworzoną bazą danych.

Biorąc pod uwagę, że strony internetowe mogą się w znaczącym stopniu od siebie różnić, nie ma uniwersalnego sposobu postępowania, jednak możemy pokierować Cię w zakresie hostingu OVH przy użyciu naszej dokumentacji: [Umieszczanie strony w sieci](https://docs.ovh.com/pl/hosting/hosting_www_umieszczenie_strony_w_internecie/){.external} oraz [Przenoszenie strony na serwer OVH](https://docs.ovh.com/pl/hosting/przeniesienie-strony-www-do-ovh/){.external}, o ile jest on wykorzystywany. Gdy strona zostanie już ręcznie zainstalowana na hostingu, przeprowadź wskazane poniżej etapy.

### Etap 3: tworzenie adresów e-mail

Możesz pominąć ten etap, jeżeli nie chcesz korzystać z adresów e-mail wchodzących w skład Twojego [pakietu hostingowego](https://www.ovhcloud.com/pl/web-hosting/){.external}. Aby stworzyć jeden lub kilka adresów e-mail, upewnij się najpierw, że jesteś zalogowany do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.Wybierz sekcję `E-maile`{.action}, a następnie nazwę hostingu, który zakupiłeś. Następnie w zakładce `E-maile`{.action} wybierz opcję `Załóż adres e-mail`{.action}.

![Załóż adres e-mail](images/create_an_email_address.png){/thumbnail}

Wpisz wymagane informacje aż do utworzenia adresu e-mail. Powtórz ten etap, aby utworzyć większą liczbę adresów. Jeżeli jesteś w trakcie przenoszenia Twoich adresów e-mail na serwer OVH, skorzystaj z naszego narzędzia [OVH Mail Migrator] (https://omm.ovh.net/){.external}, które pomoże Ci wykonać wszystkie kroki. 

Jeżeli chcesz otrzymać więcej informacji dotyczących tworzenia adresu e-mail lub przenoszenia usług do OVH, zapoznaj się z dokumentacją: [Tworzenie konta e-mail](https://docs.ovh.com/pl/emails/przewodnik_na_temat_zakladania_adresu_e-mail/){.external} oraz [Przenoszenie strony na serwer OVH](https://docs.ovh.com/pl/hosting/przeniesienie-strony-www-do-ovh/){.external}, o ile jest on wykorzystywany.

### Etap 4: weryfikacja lub modyfikacja konfiguracji domeny

Na tym etapie hosting OVH powinien być już zainstalowany, a adresy e-mail utworzone. Możliwe, że adresy te nie są jeszcze funkcjonalne, jeżeli konfiguracja nazwy domeny nie jest prawidłowa. Konfiguracja ta powiązana jest z rekordami DNS, które gwarantują dostępność strony internetowej i odbiór wiadomości wysyłanych na Twoje adresy e-mail w nazwie domeny.

Na przykład osoby odwiedzające Twoją stronę internetową wpisują do przeglądarki adres Twojej strony (Twoją nazwę domeny). W tym momencie następuje rozpoznawanie nazw DNS. Jest to proces umożliwiający przypisanie nazwy domeny do serwera, na którym znajduje się Twoja strona internetowa. Korelacja ta możliwa jest dzięki informacjom wskazanym w strefie DNS: jest to rodzaj katalogu, w którym zarejestrowana została konfiguracja Twojej domeny.

Jeżeli zakupiłeś nazwę domeny wraz z hostingiem OVH i nie dokonałeś żadnej modyfikacji w strefie DNS z Panelu klienta OVH, możesz przejść do kolejnego etapu. W przeciwnym wypadku, lub jeżeli nie masz całkowitej pewności co do wykonywanych działań, zalecamy pozostanie na obecnym etapie.

#### Typy rekordów DNS w OVH 

Istnieje wiele rekordów DNS dostępnych w OVH. Skupimy się w szczególności na dwóch z nich — tych, które zagwarantują dostępność Twojej strony internetowej i otrzymywanie wiadomości wysłanych na Twoje adresy e-mail.

- **Rekord A, dla strony internetowej**

Aby sprawdzić rekord A, którego należy użyć w strefie DNS Twojej domeny, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.Wybierz sekcję `Hosting`{.action}, a następnie nazwę hostingu, który zakupiłeś. Następnie w zakładce `Informacje ogólne`{.action} odszukaj adres IP, który znajduje się obok `IPv4`{.action}.

![Zmień rekord A](images/know_the_OVH_A_records.png){/thumbnail}

- **Rekordy MX, dla adresów e-mail**

Aby sprawdzić rekordy MX, których należy użyć w strefie Twojej domeny, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.Wybierz sekcję `E-maile`{.action}, a następnie nazwę hostingu, który zakupiłeś. Następnie w zakładce `Informacje ogólne`{.action} odszukaj informacje, które znajdują się obok `Rekordów MX`{.action}. Rekordy te mogą różnić się w zależności od filtra DNS, który postanowiłeś zastosować.

![Zmień rekordy MX](images/know_the_OVH_MX_records.png){/thumbnail}

#### Sprawdzanie lub modyfikowanie rekordów DNS

Teraz, gdy znasz już typy rekordów powiązane z Twoim hostingiem OVH, należy je sprawdzić lub zmienić, jeżeli to konieczne. Czynności, które należy przeprowadzić zależą od projektu, który realizujesz.

- **Zakup domeny wraz z hostingiem OVH**

Konfiguracja Twojej domeny jest już prawidłowa. Przejdź do następnego etapu. Jeżeli natomiast dokonałeś zmian w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} w strefie DNS Twojej domeny, może okazać się, że konfiguracja jest nieprawidłowa.
 
Aby uzyskać dostęp do strefy DNS Twojej domeny OVH wybierz sekcję `Domeny`{.action} Kliknij nazwę danej domeny. Następnie w zakładce `Strefa DNS`{.action} sprawdź i zmodyfikuj niezbędne informacje.

- **Domena nie korzystająca ze strefy DNS OVH**
 
Sprawdź strefę DNS Twojej domeny u usługodawcy, który nią zarządza. Jeżeli to konieczne, zmodyfikuje niezbędne informacje.


- **Przenoszenie usług (stron internetowych i adresów e-mail) na serwer OVH**

W takim przypadku zmiany wprowadzone w DNS mogą spowodować brak dostępności usług, jeżeli są przeprowadzane w nieodpowiednim momencie. Zgodnie z różnymi etapami opisanymi w dokumentacji [Przenoszenie strony na serwer OVH](https://docs.ovh.com/pl/hosting/przeniesienie-strony-www-do-ovh/){.external}, zmiana serwerów DNS domeny powinna odbywać się na końcu procesu.

> [!primary]
>
> Zmiana w strefie DNS staje się widoczna po czasie wynoszącym od 4 do maksymalnie 24 godzin.
>

### Etap 5: personalizacja strony internetowej

Twoja strona jest już dostępna. Możesz pominąć ten etap, jeżeli przeniosłeś istniejącą stronę, która została już spersonalizowana! Jednak w przypadku gdy zainstalowałeś nową stronę internetową, na przykład za pomocą naszych modułów, możesz ją spersonalizować zmieniając jej tytuł i publikując Twoje pierwsze treści.

Jeżeli chcesz otrzymać pomoc w zakresie funkcjonalności Twojej strony, zachęcamy do zapoznania się ze stroną jej wydawcy, na której znajdziesz przydatną dokumentację.

### Etap 6: korzystanie z adresów e-mail

Możesz już korzystać z adresów e-mail. W tym celu OVH udostępnia aplikację internetową (Webmail): RoundCube. Jest ona dostępna pod adresem <https://mail.ovh.net/>, gdzie uzyskasz informacje dotyczące danych do logowania na pocztę e-mail utworzoną na serwerze.
Jeżeli chcesz otrzymać więcej informacji odnośnie korzystania z RoundCube, zapoznaj się z naszym przewodnikiem: [Korzystanie z RoundCube](https://docs.ovh.com/pl/emails/webmail_przewodnik_dotyczacy_interfejsu_roundcube/){.external}. Jeżeli chcesz skonfigurować adres e-mail na komputerze lub urządzeniu mobilnym (np. na smartphonie lub tablecie), zapoznaj się z dokumentacją dostępną na poniższej stronie: <https://docs.ovh.com/pl/emails/>.

## Sprawdź również

[Przenoszenie strony na serwer OVH](https://docs.ovh.com/pl/hosting/przeniesienie-strony-www-do-ovh/){.external}

[Umieszczanie strony w sieci](https://docs.ovh.com/pl/hosting/hosting_www_umieszczenie_strony_w_internecie/){.external}

[Instalacja strony z modułu OVH](https://docs.ovh.com/pl/hosting/hosting_www_przewodniki_dotyczace_modulow_na_hostingu_www/){.external}

[Tworzenie konta e-mail](https://docs.ovh.com/pl/emails/przewodnik_na_temat_zakladania_adresu_e-mail/){.external}

[Korzystanie z RoundCube](https://docs.ovh.com/pl/emails/webmail_przewodnik_dotyczacy_interfejsu_roundcube/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.