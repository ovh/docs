---
title: "Zmiana oferty hostingowej"
excerpt: "Dowiedz się, jak zmienić formułę subskrypcji hostingu OVHcloud"
updated: 2023-07-16
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie 

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) pozwala na zwiększenie pojemności [ofert hostingu www](https://www.ovhcloud.com/pl/web-hosting/), aby uzyskać wydajniejszy hosting, więcej przestrzeni dyskowej, baz danych, adresów e-mail lub dodatkowych funkcji, takich jak [listy mailingowe](/pages/web/emails/feature_mailing_list) (począwszy od [oferta Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/)) lub usługa [Prywatny SQL](https://www.ovhcloud.com/pl/web-hosting/options/private-sql/) (zawarty w ofertach [gama Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/)).

**Dowiedz się, jak zmienić ofertę hostingu OVHcloud bez przerwy w działaniu.**

## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

> [!warning]
>
> **Przed** wprowadzeniem jakichkolwiek zmian w dotychczasowym abonamencie sprawdź, czy masz do czynienia z którymkolwiek z poniższych pytań:
>
> - [Jak zmienić ofertę bezpłatnego Darmowy hosting 100M na ofertę hostingu?](#start10m)
> - [Jak mogę skorzystać z tymczasowej wydajności w mojej ofercie hostingu Performance?](#boost)
> - [Czy będę tracił czas pozostały na aktualnej usłudze hostingu podczas zmiany oferty?](#billing)
> - [Czy mogę zmienić moją obecną ofertę na niższą?](#checks)
>

> [!success]
> 
> **Potrzebujesz tymczasowo zwiększyć parametry hostingu?**
>
> Korzystając z [opcji Boost](https://www.ovhcloud.com/pl/web-hosting/options/boost/), dostępnej w ofercie OVHcloud *Performance*, możesz tymczasowo zwiększyć zasoby hostingu, aby obsłużyć tymczasowy wzrost ruchu. Jeśli wzrost ten trwa dłużej, możesz przejść na wyższy poziom, aby na stałe dysponować większą ilością zasobów.
>

### Ważne - Płatność w przypadku zmiany oferty

Kiedy zmieniasz ofertę w trakcie subskrypcji, na nowej ofercie obowiązuje *odroczenie*. To odroczenie odpowiada pozostałemu okresowi abonamentu na aktualną ofertę.

**Przykład:**<br>
Przechodzisz z oferty [Perso](https://www.ovhcloud.com/pl/web-hosting/personal-offer/) na ofertę [Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/), podczas gdy abonament w trakcie nie został zakończony.<br>
W związku z tym pozostały okres abonamentu zostanie automatycznie dodany **dodany** pro rata temporis **Pro**.<br>
W związku z tym będzie on trwał **nieco dłużej niż rok**, aż do kolejnego odnowienia.

### Zmień ofertę hostingu <a name="modify"></a>

Aby zmienić subskrypcję, przejdź do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) w części `Web Cloud`{.action}. Kliknij polecenie `Hosting`{.action} i wybierz odpowiedni hosting.

W polu `Abonament` kliknij przycisk `...`{.action} po prawej stronie `Usługa`, a następnie kliknij `Zmień ofertę`{.action}.

![change_plan](images/change_plan.png){.thumbnail}

Następnie wybierz Twój nowy abonament oraz czas jego trwania. Zatwierdź odpowiednie regulaminy i kliknij `Wyślij`{.action}.

### Sprawdź, czy Twój hosting jest kompatybilny z mniejszą ofertą <a name="checks"></a>

> [!warning]
>
> Zmiana subskrypcji dla oferty zapewniającej mniej zasobów jest możliwa tylko w przypadku oferty **natychmiast niższej**. 
> Na przykład nie można przejść z formuły *Performance 2* na formułę *Pro* w jednej operacji.
> Należy **najpierw** zmienić ofertę hostingu z poziomu oferty *Performance 2* na ofertę *Performance 1* **następnie** na ofertę *Pro*.
>

Przed przejściem na niższą ofertę, sprawdź 6 poniższe elementy:

#### 1 - Bazy danych Start SQL

Przed przejściem na niższą ofertę upewnij się, że nowa oferta zawiera wystarczającą ilość [baz danych](https://www.ovhcloud.com/pl/web-hosting/options/start-sql/). Sprawdź również, czy są wystarczająco duże.

Jeśli tak się nie stanie, usuń nieużywane bazy danych i zmniejsz w razie potrzeby ilość danych, które zawierają. Ilość ta nie może przekroczyć maksymalnego rozmiaru baz danych w nowej ofercie (w przypadku prośby o pomoc w zakresie wykonywanych operacji, skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/)).

Po usunięciu danych z baz danych pamiętaj o przeliczeniu rozmiaru używanego w zakładce `Bazy danych`{.action} w części `Hosting`{.action} w Panelu klienta. Kliknij przycisk `...`{.action} po prawej stronie wybranej bazy, a następnie na `Przelicz rozmiar bazy`{.action}.

![quota](images/quota.png){.thumbnail}

#### 2 - Web Cloud Databases

Jeśli korzystasz z oferty [Web Cloud Databases](/pages/web/clouddb/starting_with_clouddb#wlaczenie-prywatnego-clouddb-zawartego-w-ofercie-hostingu) zawartej w ofercie hostingu [Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/) i chcesz przejść na ofertę hostingu [Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/), przejdź do części 'Hosting{.action} w Twoim panelu klienta.<br>
Kliknij przycisk `...`{.action} w części `Prywatna baza danych`{.action} a następnie na `Odłącz`{.action}.

![Web Cloud Databases](images/clouddb.png){.thumbnail}

Czynność ta pozwoli Ci na zamówienie usługi Web Cloud Databases niezależnej od Twojego abonamentu *Performance*. Dane przechowywane na serwerze zostaną zachowane.

Jeśli nie chcesz przechowywać tych danych, możesz również usunąć prywatny serwer SQL przed przejściem na ofertę *Pro*: 

1. Przechowuj swoje dane zgodnie z instrukcjami zawartymi w tym [przewodniku](/pages/web/clouddb/save-export-on-database-server).<br>
2. Usuń serwer Web Cloud Databases z [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). W tym celu w prawym górnym rogu kliknij Twoją nazwę, a następnie `Zarządzanie usługami`{.action}. Następnie kliknij przycisk `...`{.action} po prawej stronie odpowiedniej linii, po czym kliknij `Usuń serwer Private SQL`{.action}.

#### 3 - Przestrzeni FTP

Przed przejściem na niższą ofertę upewnij się, że nowa oferta jest wystarczająco dużo [przestrzeni dyskowej FTP](/pages/web/hosting/ftp_connection), aby import plików z obecnego hostingu był możliwy.

Limit używany na Twoim hostingu FTP jest widoczny w części `Hosting`{.action} w Twoim Panelu klienta. Kliknij kartę `Informacje ogólne`{.action}, otrzymasz limit `Przestrzeń dyskowa`.

![ftp](images/ftp.png){.thumbnail}

#### 4 - Adresy e-mail

Sprawdź również, czy nowa oferta zawiera wystarczającą liczbę dostępnych adresów e-mail. W przeciwnym razie usuń zbędne adresy po ich wykonaniu [kopia zapasowa](/pages/web/emails/manual_email_migration).

Jeśli chcesz zachować tę samą liczbę kont e-mail, zanim przejdziesz na niższą ofertę hostingu, możesz również zamówić nową usługę poczty elektronicznej **MX Plan**. W części `E-maile`{.action} w Panelu klienta kliknij odpowiednią ofertę, a następnie przycisk `...`{.action} po prawej stronie `Usługa`. Na koniec kliknij polecenie `Zmień ofertę`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### 5 - Listów mailingowych

Funkcja [Listy mailingowe](/pages/web/emails/feature_mailing_list) jest opcjonalna dla hostingu [Perso](https://www.ovhcloud.com/pl/web-hosting/personal-offer/).

Aby zmienić dotychczasowy hosting na ofertę [Perso](https://www.ovhcloud.com/pl/web-hosting/personal-offer/), należy najpierw usunąć listy mailingowe lub zamówić ofertę pocztową zawierającą tę funkcję (**MX Plan 100** lub **MX Plan Full**) w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

W części `E-maile`{.action} w Panelu klienta wybierz odpowiednią ofertę, a następnie kliknij `...`{.action} po prawej stronie `Usługa`{.action}. Na koniec kliknij polecenie `Zmień ofertę`{.action}.

#### 6 - Użytkownicy FTP

Przed przełączeniem hostingu na niższą ofertę, upewnij się, że nowa oferta zawiera wystarczającą liczbę użytkowników FTP.

Liczba użytkowników FTP jest widoczna w Twoim Panelu klienta OVHcloud. Przejdź do sekcji `Web Cloud`{.action} i wybierz odpowiedni hosting w sekcji `Hosting`{.action} po lewej stronie. Na stronie, która się wyświetla kliknij zakładkę `FTP-SSH`{.action}. W dolnej części następnej strony, tabela zawiera listę wszystkich użytkowników FTP utworzonych dla Twojego hostingu.

Aby usunąć użytkowników FTP, kliknij przycisk `...`{.action} po prawej stronie użytkownika FTP, który chcesz usunąć, a następnie kliknij na `Usuń`{.action}.

[user FTP deletion](images/userFTP.png){.thumbnail}

#### Zakończenie

Po sprawdzeniu 7 elementów możesz wykonać [zmianę oferty](#modify).

### Szczególne przypadki

#### Posiadasz ofertę Darmowy hosting 100M <a name="start10m"></a>

W związku ze zmianą oferty [Darmowy hosting 100M](/pages/web/hosting/activate_start10m) zaproponowana zostanie tylko [oferta Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/). Niemniej jednak, po zmianie oferty Perso, będziesz mógł ją zmienić na wszystkie nasze [pakiety hostingowe](https://www.ovhcloud.com/fr/web-hosting/).

Postępuj zgodnie [z instrukcjami](#modify), aby zmienić ofertę.

#### Tymczasowe zwiększenie oferty hostingu Performance <a name="boost"></a>

Dzięki [opcji Boost](https://www.ovhcloud.com/fr/web-hosting/options/boost/), dostępnej w ofercie *Performance*, możesz tymczasowo zwiększyć zasoby procesora i pamięci RAM hostingu, aby obsłużyć tymczasowy wzrost ruchu. Jeśli wzrost ten trwa w czasie, możesz również [przejść na ofertę Performance na najwyższym](#modify) poziomie, aby na stałe korzystać z tych zasobów.

> [!warning]
>
> Jeśli zdecydujesz się włączyć opcję Boost, pozostaje ona aktywna i odpłatna **tak długo, jak nie została ona wyłączona**.

Jeśli opcja **Boost** jest odpowiednia dla Twojego hostingu, poniżej znajdziesz instrukcje dotyczące **aktywacji** lub **dezaktywacji** tej opcji.

> [!tabs]
> **Włącz opcję Boost**
>>
>> W sekcji `Informacje ogólne` dotyczące hostingu kliknij przycisk `...`{.action} po prawej stronie `Boost`, a następnie `Skorzystaj z opcji Boost`{.action}.<br><br>
>> ![boost](images/enable_boost.png){.thumbnail}<br>
>>
> **Wyłącz opcję Boost**
>>
>> W zakładce `Więcej` Twojego hostingu kliknij `Skorzystaj z opcji Boost`{.action}.<br>
>> Pojawi się tabela wykorzystania opcji Boost, kliknij `Wyłącz ofertę Boost`{.action}.<br><br>
>> ![boost](images/disable_boost.png){.thumbnail}<br>

#### Płatności w przypadku zmiany oferty <a name="billing"></a>

Kiedy zmieniasz Twoją ofertę początkową na wyższą, będziesz mógł liczyć *prorata temporis* aż do następnego dnia odnowienia tej pierwszej subskrypcji.
Obliczenie to odpowiada różnicy w cenie między Twoją ofertą początkową a nową ofertą.

> **Przykład:**<br>
>
> Od 1 stycznia 2022 r. opłaciłeś abonament [Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/).
>
> W dniu 31 października 2022 r. zmieniasz ofertę **Perso** na abonament [Pro](https://www.ovhcloud.com/fr/web-hosting/professional-offer/).<br>
>
> W związku z tym kwota odpowiadająca pozostałemu okresowi abonamentu **Perso** (2 miesięcy, od dnia 1 listopada 2022 r. do dnia 1 stycznia 2023 r.) jest automatycznie odejmowana od kosztów nowego subskrypcji **Pro** do dnia 1 stycznia 2023 r. Płacisz tylko za różnicę.
> Od 1 stycznia 2023 abonament Pro jest fakturowany według aktualnej ceny.

Postępuj zgodnie [z instrukcjami](#modify), aby zmienić ofertę.

## Sprawdź również <a name="gofurther"></a>

[Sprawdź statystyki i logi strony zainstalowanej na hostingu](/pages/web/hosting/logs_and_statistics)

[Optymalizacja wydajności strony](/pages/web/hosting/optimise_your_website_performance)

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/directory/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, sprawdź naszą [ofertę pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
