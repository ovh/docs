---
title: "Zmiana oferty hostingowej"
excerpt: "Dowiedz się, jak zmienić formułę subskrypcji hostingu OVHcloud"
slug: how_to_change_hosting_offer
section: Optymalizacja strony WWW
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 22-06-2022**

## Wprowadzenie 

W [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) pozwala na zwiększenie pojemności [ofert hostingu www](https://www.ovhcloud.com/pl/web-hosting/), aby uzyskać wydajniejszy hosting, więcej przestrzeni dyskowej, baz danych, adresów e-mail lub dodatkowych funkcji, takich jak [listy mailingowe](https://docs.ovh.com/pl/emails/hosting_www_listy_mailingowe/) (począwszy od [oferta Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/)) lub usługa [Prywatny SQL](https://www.ovhcloud.com/pl/web-hosting/options/private-sql/) (zawarty w ofertach [gama Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/)).

**Dowiedz się, jak zmienić ofertę hostingu OVHcloud bez przerwy w działaniu.**

## Wymagania początkowe

- Posiadanie [hostingu](https://www.ovhcloud.com/pl/web-hosting/)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

> [!warning]
>
> **Przed** wprowadzeniem jakichkolwiek zmian w dotychczasowym abonamencie sprawdź, czy masz do czynienia z którymkolwiek z poniższych pytań:
>
> - [Jak zmienić ofertę bezpłatnego Start 10M na ofertę hostingu?](#start10m)
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

#### 1 - Liczba stron

Oferta [Kimsufi Web](https://www.ovhcloud.com/pl/web-hosting/old-web-hosting-offers/) nie pozwala na posiadanie więcej niż jednej domeny na [MultiSite](https://docs.ovh.com/pl/hosting/konfiguracja-multisite-na-hostingu/) na Twoim hostingu.

Przed przejściem z oferty [Perso](https://www.ovhcloud.com/pl/web-hosting/personal-offer/) na ofertę [Kimsufi Web](https://www.ovhcloud.com/pl/web-hosting/old-web-hosting-offers/) sprawdź, czy hosting zawiera tylko jedną stronę.

#### 2 - Bazy danych Start SQL

Przed przejściem na niższą ofertę upewnij się, że nowa oferta zawiera wystarczającą ilość [baz danych](https://www.ovhcloud.com/pl/web-hosting/options/start-sql/). Sprawdź również, czy są wystarczająco duże.

Jeśli tak się nie stanie, usuń nieużywane bazy danych i zmniejsz w razie potrzeby ilość danych, które zawierają. Ilość ta nie może przekroczyć maksymalnego rozmiaru baz danych w nowej ofercie (w przypadku prośby o pomoc w zakresie wykonywanych operacji, skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/)).

Po usunięciu danych z baz danych pamiętaj o przeliczeniu rozmiaru używanego w zakładce `Bazy danych`{.action} w części `Hosting`{.action} w Panelu klienta. Kliknij przycisk `...`{.action} po prawej stronie wybranej bazy, a następnie na `Przelicz rozmiar bazy`{.action}.

![quota](images/quota.png){.thumbnail}

#### 3 - Web Cloud Databases

Jeśli korzystasz z oferty [Web Cloud Databases](https://docs.ovh.com/pl/hosting/pierwsze-kroki-z-clouddb/#wlaczenie-prywatnego-clouddb-zawartego-w-ofercie-hostingu) zawartej w ofercie hostingu [Performance](https://www.ovhcloud.com/pl/web-hosting/performance-offer/) i chcesz przejść na ofertę hostingu [Pro](https://www.ovhcloud.com/pl/web-hosting/professional-offer/), przejdź do części 'Hosting{.action} w Twoim panelu klienta.<br>
Kliknij przycisk `...`{.action} w części `Prywatna baza danych`{.action} a następnie na `Odłącz`{.action}.

![Web Cloud Databases](images/clouddb.png){.thumbnail}

Czynność ta pozwoli Ci na zamówienie usługi Web Cloud Databases niezależnej od Twojego abonamentu *Performance*. Dane przechowywane na serwerze zostaną zachowane.

Jeśli nie chcesz przechowywać tych danych, możesz również usunąć prywatny serwer SQL przed przejściem na ofertę *Pro*: 

1. Przechowuj swoje dane zgodnie z instrukcjami zawartymi w tym [przewodniku](https://docs.ovh.com/pl/hosting/kopia-zapasowa-eksportowa-bazy-danych/).<br>
2. Usuń serwer Web Cloud Databases z [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl). W tym celu w prawym górnym rogu kliknij Twoją nazwę, a następnie `Zarządzanie usługami`{.action}. Następnie kliknij przycisk `...`{.action} po prawej stronie odpowiedniej linii, po czym kliknij `Usuń serwer Private SQL`{.action}.

#### 4 - Przestrzeni FTP

Przed przejściem na niższą ofertę upewnij się, że nowa oferta jest wystarczająco dużo [przestrzeni dyskowej FTP](https://docs.ovh.com/pl/hosting/logowanie-przestrzen-dyskowa-ftp-hosting-web/), aby import plików z obecnego hostingu był możliwy.

Limit używany na Twoim hostingu FTP jest widoczny w części `Hosting`{.action} w Twoim Panelu klienta. Kliknij kartę `Informacje ogólne`{.action}, otrzymasz limit `Przestrzeń dyskowa`.

![ftp](images/ftp.png){.thumbnail}

#### 5 - Adresy e-mail

Sprawdź również, czy nowa oferta zawiera wystarczającą liczbę dostępnych adresów e-mail. W przeciwnym razie usuń zbędne adresy po ich wykonaniu [kopia zapasowa](https://docs.ovh.com/pl/emails/przenoszenie-kont-e-mail/).

Jeśli chcesz zachować tę samą liczbę kont e-mail, zanim przejdziesz na niższą ofertę hostingu, możesz również zamówić nową usługę poczty elektronicznej **MX Plan**. W części `E-maile`{.action} w Panelu klienta kliknij odpowiednią ofertę, a następnie przycisk `...`{.action} po prawej stronie `Usługa`. Na koniec kliknij polecenie `Zmień ofertę`{.action}.

![mxplan](images/mxplan.png){.thumbnail}

#### 6 - Listów mailingowych

Funkcja [Listy mailingowe](https://docs.ovh.com/pl/emails/hosting_www_listy_mailingowe/) jest opcjonalna dla hostingu [Perso](https://www.ovhcloud.com/pl/web-hosting/personal-offer/) i [Kimsufi Web](https://www.ovhcloud.com/pl/web-hosting/old-web-hosting-offers/).

Aby zmienić dotychczasowy hosting na ofertę [Perso](https://www.ovhcloud.com/pl/web-hosting/personal-offer/), należy najpierw usunąć listy mailingowe lub zamówić ofertę pocztową zawierającą tę funkcję (**MX Plan 100** lub **MX Plan Full**) w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

W części `E-maile`{.action} w Panelu klienta wybierz odpowiednią ofertę, a następnie kliknij `...`{.action} po prawej stronie `Usługa`{.action}. Na koniec kliknij polecenie `Zmień ofertę`{.action}.

#### Zakończenie

Po sprawdzeniu 6 elementów możesz wykonać [zmianę oferty](#modify).

### Szczególne przypadki

#### Posiadasz ofertę Start 10M <a name="start10m"></a>

W związku ze zmianą oferty [Start10M](https://docs.ovh.com/fr/hosting/activer-start10m/) zaproponowana zostanie tylko [oferta Perso](https://www.ovhcloud.com/fr/web-hosting/personal-offer/). Niemniej jednak, po zmianie oferty Perso, będziesz mógł ją zmienić na wszystkie nasze [pakiety hostingowe](https://www.ovhcloud.com/fr/web-hosting/).

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

[Sprawdź statystyki i logi strony zainstalowanej na hostingu](https://docs.ovh.com/pl/hosting/hosting_statystyki_i_logi_strony/)

[Optymalizacja wydajności strony](https://docs.ovh.com/pl/hosting/hosting_www_przewodnik_dotyczacy_optymalizacji_wydajnosci_strony/)

Skontaktuj się z [partnerami OVHcloud](https://partner.ovhcloud.com/pl/), jeśli szukasz zaawansowanych rozwiązań (indeksowanie, rozwój, etc).

Jeśli chcesz otrzymywać wsparcie w zakresie konfiguracji i użytkowania Twoich rozwiązań OVHcloud, sprawdź naszą [ofertę pomocy](https://www.ovhcloud.com/pl/support-levels/).

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
