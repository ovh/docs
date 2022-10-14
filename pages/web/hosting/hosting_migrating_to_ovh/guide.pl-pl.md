---
title: Przeniesienie strony WWW i kont e-mail do OVHcloud
slug: przeniesienie-strony-www-do-ovh
excerpt: Dowiedz się, jak migrować stronę WWW oraz konta e-mail do OVHcloud bez przerwy dostępie do usług
section: Pierwsze kroki
order: 08
---

**Ostatnia aktualizacja dnia 2022-10-14**

## Wprowadzenie 

Niniejszy przewodnik prezentuje poszczególne etapy migracji strony WWW, jednej lub kilku baz danych oraz kont e-mail z dowolnej platformy do OVHcloud. Procedura migracji może być inna, jeśli chcesz dokonać migracji bez przerwy w dostępności wymienionych wyżej usług.

**Dowiedz się, jak migrować Twoją stronę WWW oraz konta e-mail do OVHcloud bez przerwy w dostępności tych usług.**

## Wymagania początkowe

- Możliwość zarządzania domeną
- Dostęp do plików strony WWW
- Dostęp do bazy danych strony WWW
- Posiadanie danych dostępowych umożliwiających zalogowanie się do aktualnych kont e-mail (nazwa użytkownika, hasło, serwery)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

## W praktyce

Przeniesienie strony WWW i kont e-mail do OVHcloud wymaga zastosowania odpowiedniej procedury. Procedura jest podzielona na kilka etapów.

|Etapy|Opis| 
|---|---| 
|Zamówienie hostingu|Hosting umożliwia umieszczenie Twojej strony WWW oraz kont e-mail na serwerze.| 
|Przeniesienie strony WWW|Po wykonaniu kopii zapasowej kompletnej strony WWW będziesz mógł ją przenieść na nowy hosting OVHcloud.| 
|Przeniesienie kont e-mail|Po założeniu Twoich kont e-mail na hostingu OVHcloud, z użyciem tych samych adresów co u dotychczasowego operatora, będziesz mógł przenieść ich zawartość do OVHcloud.| 
|Zmiana konfiguracji DNS domeny|Po zmianie konfiguracji domeny, domena będzie używała hostingu OVHcloud (dla Twojej strony WWW i kont e-mail) zamiast hostingu poprzedniego operatora.| 
|Transfer domeny|Jako rejestratora Twojej domeny wybierz OVHcloud.| 

Kolejność etapów wymienionych powyżej może się różnić w zależności od operatorem, u którego pierwotnie zarejestrowałeś Twoją domenę.

> [!warning]
>
> Niektórzy rejestratorzy usuwają konfigurację DNS domeny w momencie otrzymania wniosku o jej transfer do innego operatora.
> 
> W rezultacie Twoja domena staje się niedostępna, podobnie jak zależne od niej usługi, takie jak Twoja strona WWW oraz konta e-mail. Rekomendujemy, aby skontaktować się z operatorem, u którego zarejestrowana jest Twoja domena i sprawdzić, jaka jest jego polityka w przypadku transferu domeny. 
>

Biorąc pod uwagę prawdopodobieństwo wystąpienia opisanej powyżej sytuacji, dostępne są dwie możliwości:

- migracja bez przerwy w dostępności usług;
- migracja z możliwą przerwą w dostępności usług.

### Migracja bez przerwy w dostępności usług

#### Etap 1: zamówienie hostingu w OVHcloud

Zamów hosting na stronie [OVHcloud](https://ovh.pl/){.external}. W procesie zamówienia podaj nazwę domeny, która będzie korzystać z hostingu. Na tym etapie nie składaj zamówienia na transfer Twojej domeny, zrobisz to później. Po zaksięgowaniu Twojej płatności OVHcloud rozpocznie proces instalacji hostingu. Otrzymasz e-mail potwierdzający zakończenie instalacji. 

#### Etap 2: przeniesienie Twojej strony WWW

Etap ten obejmuje kilka kroków. 

|Kroki|Opis|Szczegóły|
|---|---|---|
|1|Wykonaj kopię zapasową strony WWW.|Kopia musi obejmować całość Twojej strony, łącznie z plikami i bazą danych. Kompletna kopia zapasowa jest kluczowa dla poprawnej migracji Twojej strony WWW do OVHcloud.|
|2|Opublikuj Twoją stronę WWW przeniesioną na hosting OVHcloud|Zaloguj się do przestrzeni FTP, aby importować do niej pliki z Twojej strony WWW. Umieść je w folderze **WWW**. Dane do logowania do FTP otrzymasz w e-mailu informującym o instalacji hostingu.|
|3|Utworzenie bazy danych OVHcloud|Jeśli Twoja strona działa w oparciu o bazę danych powinieneś [stworzyć nową bazę na hostingu OVHcloud](https://docs.ovh.com/pl/hosting/zarzadzanie-baza-danych-na-hostingu-www/){.external}, korzystając z [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.|
|4|Importuj dane z bazy|Importuj kopię Twojej bazy danych, korzystając z [narzędzia OVHcloud udostępnionego w Panelu klienta](https://docs.ovh.com/pl/hosting/hosting_www_importowanie_bazy_danych_mysql/){.external}.|
|5|Powiąż nową bazę ze stroną WWW|Dane dostępowe do starej bazy danych są w dalszym ciągu zawarte w pliku konfiguracyjnym Twojej strony WWW. Zmodyfikuj ten plik przez FTP OVHcloud, wprowadzając dane dostępowe do bazy danych utworzonej w OVHcloud.|

Ponieważ konfiguracja Twojej domeny nie została zmieniona, hosting używany do wyświetlania Twojej strony WWW to w dalszym ciągu hosting dotychczasowego operatora. 

#### Etap 3: odtworzenie adresów e-mail

Po przeniesieniu strony WWW [stwórz w OVHcloud konta e-mail, używając tych samych adresów](https://docs.ovh.com/pl/emails/przewodnik_na_temat_zakladania_adresu_e-mail/){.external}, z których korzystałeś u dotychczasowego operatora. Konta muszą mieć taką samą nazwę. W [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, wybierz sekcję `E-maile`{.action}, następnie wybierz hosting, który zamówiłeś (oznaczony taką samą nazwą, co Twoja domena). Przejdź kolejne etapy tworzenia kont, klikając na przycisk `Załóż adres e-mail`{.action}.

Ponieważ konfiguracja Twojej domeny nie została zmieniona, nowe wiadomości spływają w dalszym ciągu do skrzynki odbiorczej kont utworzonych u dotychczasowego operatora. W dalszym ciągu używaj ich do wysyłania e-maili.

#### Etap 4: zmiana konfiguracji Twojej domeny

Po przeprowadzeniu migracji strony WWW i odtworzeniu kont e-mail na hostingu OVHcloud należy zmodyfikować konfigurację Twojej domeny. Modyfikacja ta polega na zamianie serwerów DNS domeny na serwery OVHcloud (stosowna informacja jest wysłana e-mailem oraz zamieszczona w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}). Powyższe operacje mają dwa cele:

- **powiązanie Twojej domeny z rozwiązaniami OVHcloud**: Twój hosting OVHcloud będzie używany do wyświetlania Twojej strony WWW i nowe wiadomości e-mail będą spływały na konta utworzone w OVH;
- **brak przerwy w dostępności usług**: nawet jeśli dotychczasowy operator usuwa swoją konfigurację DNS, kiedy przenosisz domenę do OVHcloud, nie spowoduje to przerwy w dostępności usług, gdyż używasz już konfiguracji OVHcloud.

> [!warning]
>
> Zmiana serwerów DNS realizowana jest u dotychczasowego rejestratora domeny, a efekty tej zmiany staną się widoczne po upływie 24-48 godzin ze względu na niezbędny czas propagacji.
>

#### Etap 5: migracja zawartości Twoich kont e-mail

Etap ten obejmuje kilka kroków. 

|Kroki|Opis|Szczegóły|
|---|---|---|
|1|Przeprowadź migrację zawartości Twoich kont e-mail do OVHcloud|Skorzystaj z narzędzia [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external}, które pozwoli Ci skopiować zawartość kont e-mail posiadanych u dotychczasowego operatora i przenieść ją do kont stworzonych w OVHcloud.|
|2|Zacznij używać Twoich kont e-mail|OVHcloud oferuje dostęp do Twoich kont e-mail poprzez aplikację [Webmail](https://mail.ovh.net/){.external}. Jeśli korzystasz z klienta poczty typu Outlook, przeprowadź jego ponowną konfigurację, wskazując [serwery OVHcloud](https://docs.ovh.com/pl/emails/hosting_www_informacje_ogolne_o_kontach_e-mail_ovh/) zamiast serwerów poprzedniego operatora.|

#### Etap 6: migracja domeny do OVHcloud

Na koniec pozostaje Ci przeprowadzenie transferu domeny do OVHcloud. Etap ten obejmuje kilka kroków. 

|Kroki|Opis|Szczegóły|
|---|---|---|
|1|Odblokuj domenę.|Jeśli domena jest zablokowana, nie można jej przenieść do innego operatora. Dlatego konieczne jest jej wcześniejsze odblokowanie u dotychczasowego rejestratora.|
|2|Uzyskaj kod transferu|Kod transferu (authinfo) uzyskasz od dotychczasowego rejestratora po odblokowaniu Twojej domeny.|
|3|Zamów transfer domeny do OVHcloud.|Zamów transfer domeny, korzystając ze strony [OVHcloud](https://ovh.pl/){.external}. Konieczne jest podanie uzyskanego wcześniej kodu transferu.|
|4|Opłać zamówienie.|Po zaksięgowaniu Twojej wpłaty, OVHcloud rozpocznie transfer Twojej domeny.|
|5|Potwierdź lub zaczekaj na potwierdzenie transferu.| Etap ten może przebiegać różnie w zależności od rozszerzenia Twojej domeny. Jeśli wymagane jest potwierdzenie, otrzymasz stosowną wiadomość e-mailem. Będzie ona zawierała opis procedury, zgodnie z którą należy postępować. Kolejne etapy procedury doprowadzą Cię do potwierdzenia transferu.| 

Zakończenie procedury transferu oznacza, że Twoja strona WWW, Twoje konta e-mail oraz Twoja domena zostały przeniesione bez przerwy w dostępności usług.

### Migracja z prawdopodobną przerwą w dostępności usług

#### Etap 1: zamów transfer i hosting Twoich usług w OVHcloud

Etap ten obejmuje kilka kroków. 

|Kroki|Opis|Szczegóły|
|---|---|---|
|1|Odblokuj domenę.|Jeśli domena jest zablokowana, nie można jej przenieść do innego operatora. Dlatego konieczne jest jej wcześniejsze odblokowanie u dotychczasowego rejestratora.|
|2|Uzyskaj kod transferu|Kod transferu (authinfo) uzyskasz od dotychczasowego rejestratora po odblokowaniu Twojej domeny.|
|3|Złóż zamówienie w OVHcloud.|Złóż zamówienie na transfer domeny i hosting, korzystając ze strony [OVHcloud](https://ovh.pl/){.external}. Konieczne jest podanie uzyskanego wcześniej kodu transferu. Wybierając serwery DNS, wskaż serwery Twojego dotychczasowego operatora.|
|4|Opłać zamówienie.|Po zaksięgowaniu Twojej wpłaty OVHcloud rozpocznie transfer Twojej domeny oraz instalację Twojego hostingu. **W zależności od polityki prowadzonej przez dotychczasowego rejestratora Twojej domeny, konfiguracja DNS może zostać usunięta, co spowoduje niedostępność wszystkich usług powiązanych z domeną, w szczególności stron WWW i kont e-mail.**|
|5|Potwierdź lub zaczekaj na potwierdzenie transferu.|Etap ten może przebiegać różnie w zależności od rozszerzenia Twojej domeny. Jeśli wymagane jest potwierdzenie, otrzymasz stosowną wiadomość e-mailem. Będzie ona zawierała opis procedury, zgodnie z którą należy postępować. Kolejne etapy procedury doprowadzą Cię do potwierdzenia transferu.|

#### Etap 2: przeniesienie Twojej strony WWW

Etap ten obejmuje kilka kroków. 

|Kroki|Opis|Szczegóły|
|---|---|---|
|1|Wykonaj kopię zapasową strony WWW.|Kopia musi obejmować całość Twojej strony, łącznie z plikami i bazą danych. Kompletna kopia zapasowa jest kluczowa dla poprawnej migracji Twojej strony WWW do OVHcloud.|
|2|Opublikuj stronę WWW w sieci, korzystając z hostingu OVHcloud.|Zaloguj się do przestrzeni FTP, aby importować do niej pliki z Twojej strony WWW. Umieść je w folderze **WWW**. Dane do logowania do FTP otrzymasz w e-mailu informującym o instalacji hostingu.|
|3|Utworzenie bazy danych OVHcloud|Jeśli Twoja strona działa w oparciu o bazę danych powinieneś [stworzyć nową bazę na hostingu OVHcloud](https://docs.ovh.com/pl/hosting/zarzadzanie-baza-danych-na-hostingu-www/){.external}, korzystając z [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.|
|4|Importuj dane z bazy|Importuj kopię Twojej bazy danych, korzystając z [narzędzia OVHcloud udostępnionego w Panelu klienta](https://docs.ovh.com/pl/hosting/hosting_www_importowanie_bazy_danych_mysql/){.external}.|
|5|Powiąż nową bazę ze stroną WWW|Dane dostępowe do starej bazy danych są w dalszym ciągu zawarte w pliku konfiguracyjnym Twojej strony WWW. Zmodyfikuj ten plik przez FTP OVHcloud, wprowadzając dane dostępowe do bazy danych utworzonej w OVHcloud.|

Ponieważ konfiguracja Twojej domeny nie została zmieniona, hosting używany do wyświetlania Twojej strony WWW to w dalszym ciągu hosting dotychczasowego operatora, o ile konfiguracja DNS w wciąż jest aktywna. 

#### Etap 3: odtworzenie adresów e-mail

[Po zakończeniu transferu Twojej domeny](https://docs.ovh.com/pl/emails/przewodnik_na_temat_zakladania_adresu_e-mail/){.external} otrzymasz wiadomość e-mail z informacją, że konto e-mail powiązane z Twoim hostingiem zostało zainstalowane. Teraz [stwórz w OVHcloud konta e-mail, używając tych samych adresów](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, z których korzystałeś u dotychczasowego operatora (konta muszą mieć taką samą nazwę). W [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, wybierz sekcję `E-maile`{.action}, następnie wybierz hosting, który zamówiłeś (oznaczony taką samą nazwą, co Twoja domena). Przejdź kolejne etapy tworzenia kont, klikając na przycisk `Załóż adres e-mail`{.action}.

Ponieważ konfiguracja Twojej domeny nie została zmieniona, nowe e-maile spływają na konta e-mail utworzone u Twojego dotychczasowego operatora, o ile konfiguracja DNS jest wciąż aktywna. W dalszym ciągu używaj ich do wysyłania e-maili.

#### Etap 4: zmiana konfiguracji Twojej domeny

Po przeprowadzeniu migracji strony WWW, utworzeniu kont e-mail i przeniesieniu domeny do OVHcloud należy zmodyfikować konfigurację domeny. Modyfikacja ta polega na zamianie serwerów DNS Twojej domeny na serwery OVHcloud.

Modyfikacji dokonaj w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Pomocna w tym procesie może być dokumentacja *[Informacje na temat serwerów DNS](https://docs.ovh.com/pl/domains/hosting_www_informacje_na_temat_serwerow_dns/){.external}*.

Istnieje kilka możliwych efektów tej operacji:

- **powiązanie Twojej domeny z rozwiązaniami OVHcloud**: Twój hosting OVHcloud będzie używany do wyświetlania Twojej strony WWW i nowe wiadomości e-mail będą spływały na konta utworzone w OVH;
- **przywrócenie dostępności usług**: nawet jeśli dotychczasowy operator usunął swoją konfigurację DNS, kiedy przeniosłeś domenę do OVHcloud, po zmianie serwerów DNS usługi ponownie będą dostępne.

> [!warning]
>
> Efekty modyfikacji domeny staną się widoczne po upływie 24-48 godzin ze względu na niezbędny czas propagacji.
>

#### Etap 5: migracja zawartości Twoich kont e-mail

Etap ten obejmuje kilka kroków. 

|Kroki|Opis|Szczegóły|
|---|---|---|
|1|Przeprowadź migrację zawartości Twoich kont e-mail do OVHcloud|Skorzystaj z narzędzia [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external}, które pozwoli Ci skopiować zawartość kont e-mail zarejestrowanych u dotychczasowego operatora i przenieść ją do kont stworzonych w OVHcloud.|
|2|Zacznij używać Twoich kont e-mail|OVHcloud oferuje dostęp do Twoich kont e-mail poprzez aplikację [Webmail](https://mail.ovh.net/){.external}. Jeśli korzystasz z klienta poczty typu Outlook, przeprowadź jego ponowną konfigurację, wskazując [serwery OVHcloud](https://docs.ovh.com/pl/emails/hosting_www_informacje_ogolne_o_kontach_e-mail_ovh/) zamiast serwerów poprzedniego operatora.|

Twoja strona WWW, konta e-mail oraz domena zostały przeniesione do OVHcloud!

## Sprawdź również

[Informacje o kontach e-mail](https://docs.ovh.com/pl/emails/hosting_www_informacje_ogolne_o_kontach_e-mail_ovh/){.external}

[Informacje na temat serwerów DNS](https://docs.ovh.com/pl/domains/hosting_www_informacje_na_temat_serwerow_dns/){.external}

[Tworzenie kont e-mail](https://docs.ovh.com/pl/emails/przewodnik_na_temat_zakladania_adresu_e-mail/){.external}

[Importowanie bazy danych MySQL](https://docs.ovh.com/pl/hosting/hosting_www_importowanie_bazy_danych_mysql/){.external}

[Zarządzanie bazą danych z poziomu hostingu](https://docs.ovh.com/pl/hosting/zarzadzanie-baza-danych-na-hostingu-www/){.external}

W przypadku wyspecjalizowanych usług (pozycjonowanie, rozwój, etc.) skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, zapoznaj się z naszymi [ofertami pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>. 