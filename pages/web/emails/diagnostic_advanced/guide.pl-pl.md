---
title: 'Wysyłanie lub otrzymywanie e-maili niemożliwe'
slug: zaawansowane_korzystanie_z_e-maili_ovh
legacy_guide_number: 2117
excerpt: "Dowiedz się, jak należy zareagować w przypadku problemów z wysyłaniem lub odbieraniem wiadomości e-mail do OVHcloud"
section: 'Diagnostyka'
order: 02
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 


**Ostatnia aktualizacja z dnia 21-07-2022**

## Wprowadzenie

Nie można odbierać ani wysyłać e-maili przy użyciu programu pocztowego lub webmaila?

**Dowiedz się, jak przeprowadzić diagnostykę błędu wysyłki lub odbioru w Twojej usłudze e-mail OVHcloud.**

> [!primary]
>
> Jeśli masz dodatkowe pytania, które nie są poruszone w tym przewodniku, zapoznaj się z naszym [FAQ E-mail](https://docs.ovh.com/pl/emails/faq-konta-email/).

## Wymagania początkowe

- Posiadanie usługi **MX Plan** lub usługi **E-mail Pro** lub usługi **Exchange**.
- Dostęp do [panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

### Czy moja oferta e-mail i/lub moje konta są aktywne?

Aby Twoje e-maile działały, musisz posiadać aktywną ofertę e-mail. Jeśli Twoja usługa e-mail jest przypisana do hostingu, sprawdź, czy oferta nie wygasła. Informacje te możesz sprawdzić bezpośrednio w Panelu klienta. Podobnie Twoja domena musi być aktywna.

Sprawdź, czy jesteś na bieżąco z [płatnościami](https://docs.ovh.com/pl/billing/zarzadzanie-fakturami-ovhcloud/#pay-bills) i [odnawianiem](https://docs.ovh.com/pl/billing/przewodnik_dotyczacy_opcji_automatycznego_odnawiania_uslug_w_ovh/#renewal-management) usług.

Sprawdź, czy Twoje usługi działają poprawnie:

- W przypadku **domeny** przejdź do sekcji `Web Cloud`{.action}, kliknij `Domeny`{.action} i wybierz Twoją domenę. Jeśli Twoja domena wygasła, zostanie to wyświetlone na górze strony.
- W przypadku **hostingu WWW** przejdź do sekcji `Web Cloud`{.action}, kliknij `Hosting`{.action}, a następnie wybierz Twój hosting. Data wygaśnięcia lub automatycznego odnowienia hostingu zostanie pokazana na górze strony.
- W przypadku oferty **MXplan** przejdź do sekcji `Web Cloud`{.action}, kliknij `E-maile`{.action}, a następnie wybierz odpowiednią nazwę domeny. Kliknij kartę `Konta e-mail`{.action}. Sprawdź status odpowiedniego konta e-mail w kolumnie `Status`.
- W przypadku oferty **E-mail Pro** przejdź do sekcji `Web Cloud`{.action} i kliknij `E-mail Pro`{.action}, a następnie wybierz Twoją platformę. Kliknij kartę `Konta e-mail`{.action}. Sprawdź status odpowiedniego konta e-mail w kolumnie `Status`.
- W przypadku oferty **Exchange** przejdź do sekcji `Web Cloud`{.action}, kliknij `Microsoft`{.action}, następnie kliknij `Exchange`{.action} i wybierz Twoją platformę. Kliknij kartę `Konta e-mail`{.action}. Sprawdź status odpowiedniego konta e-mail w kolumnie `Status`.

### Nie mogę wysyłać e-maili z programu pocztowego

Jeśli korzystasz z programu pocztowego na Twoim komputerze (Outlook, Mail firmy Mac, Thunderbird, itp.) lub na smartfonie (iOS, Android, etc.) i masz problemy z wysyłaniem lub odbieraniem wiadomości, sprawdź parametry konfiguracji zgodnie z Twoją ofertą e-mail oraz używanym oprogramowaniem poczty lub aplikacją.

- W przypadku oferty **MXplan** w sekcji [E-maile na hostingu - MX Plan](https://docs.ovh.com/pl/emails/) w przewodnikach **Web Cloud**.

- W przypadku oferty **E-mail Pro**, w sekcji [E-mail Pro](https://docs.ovh.com/pl/emails-pro/), przewodników **Web Cloud**, sprawdź konfigurację oprogramowania pocztowego w sekcji `Konfiguracja programu pocztowego`.

- W przypadku oferty **Exchange**, w sekcji [Rozwiązania do pracy zespołowej Microsoft](https://docs.ovh.com/pl/microsoft-collaborative-solutions/) w przewodnikach **Web Cloud** sprawdź konfigurację programu pocztowego w sekcji `Konfiguracja programu pocztowego Exchange` lub smartphonie w `Konfiguracja konta Exchange na smartfonie/tablecie`

### Czy e-maile działają w interfejsie Webmail?

Aby upewnić się, że problem nie jest związany z błędem konfiguracji, przeprowadź test wysyłki i odbioru bezpośrednio przez interfejs webmail OVHcloud. Jeśli wszystko działa poprawnie, sprawdź konfigurację oprogramowania w dostępnych przewodnikach.

Przejdź na adres z poziomu przeglądarki internetowej lub smartfona <https://www.ovh.pl/mail/>.

![webmail](images/webmail.png){.thumbnail}

### Nie mogę się zalogować do interfejsu Webmail

Upewnij się, że posiadasz właściwe hasło. W razie potrzeby możesz go zmienić. Sprawdź również, czy weryfikacja dwuetapowa jest aktywna ([tylko Exchange](https://www.ovhcloud.com/pl/emails/hosted-exchange/)).

W jaki sposób zmienić hasło do konta e-mail:

- W przypadku oferty **MXplan** zapoznaj się z naszym przewodnikiem [Zmiana hasła do konta e-mail MX Plan](https://docs.ovh.com/pl/emails/zmiana-hasla-do-konta-email/)

- W przypadku oferty **E-mail Pro** przejdź do sekcji `Web Cloud`{.action} i kliknij `E-mail Pro`{.action}, a następnie wybierz Twoją platformę. W zakładce `Konta e-mail`{.action} kliknij przycisk `...`{.action} a następnie `Zmień`{.action}, aby zmienić hasło.

- W przypadku oferty **Exchange** przejdź do sekcji `Web Cloud`{.action}, kliknij `Microsoft`{.action}, następnie kliknij `Exchange`{.action} i wybierz Twoją platformę. W zakładce `Konta e-mail`{.action} kliknij przycisk `...`{.action} a następnie `Zmień`{.action}, aby zmienić hasło. <br> Sprawdź, czy weryfikacja dwuetapowa jest włączona, sprawdzając nasz przewodnik [Konfiguracja weryfikacji dwuetapowej na koncie Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/konfiguracja-2fa-exchange/).

### Masz problem z utrzymaniem usługi?

Możesz sprawdzić różne zadania obecnie wykonywane prace na <https://web-cloud.status-ovhcloud.com/>.

- Aby **MXplan**, sprawdź w sekcji `E-maile`
- W przypadku **E-mail Pro** przejdź do sekcji `Microsoft`
- W przypadku **Exchange** przejdź do sekcji `Microsoft`

### Czy wskazanie domeny do mojej usługi e-mail jest poprawne?

Sprawdź, czy Twoja domena wskazuje poprawnie na serwery e-mail OVHcloud. W tym celu rekordy typu MX muszą być skonfigurowane w strefie DNS. <br>Zapoznaj się z naszym przewodnikiem [Dodaj pole MX do konfiguracji domeny](https://docs.ovh.com/pl/domains/hosting_www_konfiguracja_serwerow_mx_w_strefie_dns_ovh/).

![DNSzone](images/DNS.png){.thumbnail}

### Po wysłaniu wiadomości e-mail otrzymuję wiadomość informującą, że mój e-mail nie mógł zostać wysłany, w tym 3-cyfrowy kod

Jest to powrót błędu SMTP. Oznacza to, że nie można przeprowadzić prawidłowej wymiany między serwerem poczty wychodzącej a serwerem poczty wychodzącej. Kod służy do określenia rodzaju błędu, który wystąpił na serwerze. Zazwyczaj towarzyszy mu komunikat opisujący ten błąd.

Odpowiedź SMTP składa się z liczby trzycyfrowej. Wszystkie trzy cyfry odpowiedzi mają szczególne znaczenie:

- pierwsza cyfra wskazuje czy odpowiedź jest poprawna, zła czy niepełna. Klient SMTP będzie mógł określić swoją kolejną operację, sprawdzając ją;
- Druga i trzecia cyfra dostarczają dodatkowych informacji.

Istnieją cztery możliwe wartości dla pierwszej cyfry kodu odpowiedzi:

|Kod|Opis|  
|---|---|  
|2|Odpowiedź pozytywna: wymagane działanie zostało zrealizowane. Może zostać złożony nowy wniosek.|
|3|Tymczasowa pozytywna odpowiedź: zamówienie zostało zaakceptowane, ale wymagane działanie oczekuje na dalsze informacje. Klient SMTP powinien przesłać kolejne zamówienie, które opisuje te informacje.|
|4 xx|Negatywna odpowiedź na przejściowe zakończenie: zamówienie nie zostało zaakceptowane i nie mogło nastąpić wymagane działanie. Jednakże warunek błędu ma charakter tymczasowy i działanie może być wymagane ponownie.|
|5|Odpowiedź negatywna: zamówienie nie zostało zaakceptowane i nie mogło nastąpić wymagane działanie. Klient SMTP nie powinien powtarzać tego samego wniosku.|

Poniżej znajdziesz większość ujemnych kodów odpowiedzi SMTP używanych przez serwery:

|Kody odpowiedzi|Szczegóły|Działania|
|---|---|---|
|420|Przekroczony czas, problem z logowaniem|Ten komunikat błędu jest zwracany tylko przez serwery mail GroupWise. Skontaktuj się z administratorem docelowego serwera poczty elektronicznej|
|421|Usługa niedostępna, kanał transmisji w trakcie zamykania|Upewnij się, czy wysyłka wiadomości do innej domeny działa w wyniku błędu nieokreślonego. Jeśli tak, spróbuj ponownie później wysłać wiadomość|
|432|Otrzymanie wiadomości e-mail na zatrzymanym serwerze Exchange|Ten komunikat błędu jest zwracany tylko przez serwery pocztowe Microsoft Exchange. Skontaktuj się z administratorem docelowego serwera poczty elektronicznej|
|449|Błąd routingu|Ten komunikat błędu jest zwracany tylko przez serwery pocztowe Microsoft Exchange. Microsoft zaleca przeprowadzenie diagnostyki z ich narzędzie WinRoute|
|450|Nie wykonano operacji poczty elektronicznej: niedostępna skrzynka e-mail (np. okupowana lub czasowo zablokowana skrzynka e-mail ze względów bezpieczeństwa lub lista czarna)|Sprawdź, czy Twój adres IP na serwerze poczty elektronicznej nie jest wyświetlany czarno ([SpamHaus](https://check.spamhaus.org/){.external}) i sprawdź, czy Twój e-mail nie zawiera słów odnoszących się do SPAM.|
|451|Zrezygnowałeś z działania: Błąd podczas przetwarzania lokalnego|Może to być spowodowane chwilowym przeciążeniem lub weryfikacją SPF nieprawidłowej domeny nadającej. Skontaktuj się z administratorem serwera, jeśli taka wiadomość zostanie utrzymana|
|452|Operacja nie została wykonana: niewystarczający system przechowywania danych|Twój serwer poczty elektronicznej jest "przeciążony". Może to być również spowodowane zbyt dużą liczbę wiadomości, które próbują być wysyłane jednocześnie. Prosimy o sprawdzenie skrzynki pocztowej i spróbuj ponownie|
|455|Serwer, który nie może otrzymać parametrów|Odczekaj chwilę i spróbuj ponownie. W przypadku awarii, skontaktuj się z administratorem serwera poczty elektronicznej odbiorcy|
|500|Błąd składni, zamówienie nie rozpoznane (Może to obejmować błędy jako zbyt długi wiersz poleceń)|Jest to często spowodowane przez antywirus lub firewall nadawcy. Sprawdź to i spróbuj ponownie|
|501|Błąd składni w ustawieniach lub argumentach|Jest to często spowodowane przez błędny adres e-mail odbiorcy lub problem z antywirusowym lub firewall po stronie nadawcy. Sprawdź adres docelowy oraz antywirus lub firewall|
|502|Zamówienie nie zostało zrealizowane|Parametry lub opcje używane podczas wysyłki e-maila do serwera SMTP są rozpoznawane, ale są wyłączone w konfiguracji. Skontaktuj się z dostawcą usług|
|503|Serwer napotkał złą sekwencję poleceń|Powodem tego problemu jest problem z uwierzytelnianiem. Upewnij się, że jesteś uwierzytelniony na serwerze SMTP podczas konfiguracji programu pocztowego.|
|504|Parametr zamówienia nie został zrealizowany|Parametry lub opcje używane podczas wysyłki e-maila do serwera SMTP są rozpoznawane, ale są wyłączone w konfiguracji. Skontaktuj się z dostawcą usług|
|535|błąd podczas logowania|Informacje użytkownika/hasło są niewidoczne lub wysyłka jest potencjalnie zablokowana na Twoim koncie e-mail. Sprawdź stan Twojego konta e-mail w Panelu klienta OVHcloud. Zmiana hasła może odblokować wysyłkę, jeśli konto zostało zablokowane ze względu na spam, zapoznaj się z naszym przewodnikiem [Co zrobić, jeśli moje konto zostało zablokowane z powodu rozsyłania spamu?](https://docs.ovh.com/pl/microsoft-collaborative-solutions/blokada-za-spam/), aby uzyskać więcej informacji|
|550|Operacja nie została wykonana: skrzynka pocztowa niedostępna|Docelowy serwer poczty elektronicznej nie mógł sprawdzić używanego adresu e-mail. Jest to najczęściej spowodowane nieprawidłowym adresem e-mail docelowym, ale może również oznaczać, że docelowy serwer poczty elektronicznej ma problemy z zaporą lub połączeniem. Sprawdź adres e-mail odbiorcy i/lub spróbuj ponownie|
|551|Użytkownik nielokalny|Jest to powszechnie stosowane jako strategia zapobiegania spamowi. Wiadomo, że przekazywanie poczty nie jest dozwolone z jakiegokolwiek powodu, aby przekazać wiadomość do innego serwera niż twój. Skontaktuj się z dostawcą usług|
|552|Polecenie połączenia zostało przerwane: przekroczona przestrzeń dyskowa|Użytkownik, z którym próbowałeś się skontaktować, nie ma już dostępnej przestrzeni na otrzymywanie wiadomości. Niestety, jedynym rozwiązaniem jest kontakt z odbiorcą za pomocą innej metody|
|553|Operacja nie została wykonana: nieautoryzowany adres e-mail|Jest to zazwyczaj spowodowane przez nieprawidłowy adres e-mail docelowy. Sprawdź, czy dany adres e-mail jest poprawny|
|554|Transakcja nie powiodła się, "Brak usług SMTP tutaj")|To zazwyczaj problem czarnej plamki. Sprawdź, czy Twój adres IP serwera poczty elektronicznej nie jest czarna ([SpamHaus](https://check.spamhaus.org/){.external})|
|555|MAIL FROM / RCPT TO, ustawienia nie rozpoznane lub nie zostały wdrożone|Wychodzący serwer SMTP nie rejestruje poprawnie adresu e-mail używanego w ustawieniach "De" lub "A". Sprawdź, czy podane adresy e-mail są poprawne i sprawdź, czy nie przekroczyłeś limitu określonego przez OVHcloud: 200 e-maili /godzina /konto i 300 e-maili /godzina /ip|

## Sprawdź również

[FAQ E-mail](https://docs.ovh.com/pl/emails/faq-konta-email/)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
