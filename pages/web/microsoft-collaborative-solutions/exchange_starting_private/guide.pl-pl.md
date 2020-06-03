---
title: 'Exchange: Pierwsze kroki z serwerem Private Exchange'
excerpt: 'Pierwsza konfiguracja serwera Private Exchange'
slug: exchange_pierwsze_kroki_na_serwerze_private
section: 'Konfiguracja usługi Exchange'
legacy_guide_number: g2074
---

**Ostatnia aktualizacja z dnia 25-03-2020**

## Wprowadzenie

Właśnie złożyłeś zamówienie na platformę Private Exchange. Niniejszy przewodnik opisuje kroki do wykonania podczas pierwszej konfiguracji.

**Odkryj, jak skonfigurować swoją platformę Private Exchange**

## Wymagania początkowe

- Zamówienie [rozwiązania Private Exchange OVHcloud](https://www.ovh.pl/emaile/){.external}.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager).

## W praktyce

### Etap 1: odbiór e-maila z informacjami dotyczącymi konfiguracji platformy.

Po realizacji zamówienia otrzymasz na adres e-mail podany w Panelu klienta informacje umożliwiające skonfigurowanie platformy Private Exchange. 

Aby przeczytać ten e-mail w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager), kliknij swój profil w prawym górnym rogu, a następnie wybierz `Moje konto`{.action}. Przejdź do karty `Wiadomości odebrane`{.action} i wyszukaj e-mail z następującym tematem:

> **[xx-11111-ovh] Trwa instalowanie usługi Exchange 20_xxx_**


![first-use-private-exchange](images/first-use-private-exchange-01.png){.thumbnail}

Wiadomość zawiera link pozwalający ukończyć dwa etapy konfiguracji platformy:

- personalizacja linku dostępu do poczty webmail (dedykowany certyfikat SSL);
- podanie adresu e-mail do korespondencji, aby zatwierdzić posiadany certyfikat (uwaga: musi to być istniejący adres, ponieważ konieczny będzie dostęp do niego).

Kliknij link w wiadomości e-mail, a następnie przejdź do poniższego [etapu 2 ](./#etap-2-uruchomienie-platformy){.external}.

### Etap 2: uruchomienie platformy

Po kliknięciu linka w e-mailu w [etapie 1](./#etap-1-odbior-e-maila-z-informacjami-dotyczacymi-konfiguracji-platformy){.external} zaloguj się na wyświetlonej stronie.

Zostaniesz wówczas przekierowany na następującą stronę konfiguracji:
![first-use-private-exchange](images/first-use-private-exchange-02.png){.thumbnail}

Podaj wymagane dane zgodnie z informacjami z poniższej tabeli.

| Informacja          	| Opis                                                                                                                                                                                                                             	|
|----------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Nazwa serwera 	| W rozwijanym menu wybierz subdomenę powiązaną z Twoją nazwą domeny.  <br> W wolnym polu wpisz nazwę domeny, którą chcesz powiązać.                                                                   	|
| E-mail               	| Wybierz adres e-mail z listy propozycji. Otrzymasz na niego e-mail weryfikujący certyfikat SSL dla Twojej platformy. Dlatego też adres musi być prawidłowy lub też przekierowywać na prawidłowy adres e-mail, aby móc otrzymać wiadomość.
| DNS Assist           	| Zaznaczając to pole, wyrażasz zgodę na automatyczną konfigurację Twojej strefy DNS dla nazwy domeny Twojej platformy. Domena musi być zarządzana z poziomu tego samego konta OVHcloud co Twoja platforma. W razie braku zaznaczenia tego pola, otrzymasz e-mail z informacjami dotyczącymi konfiguracji Twojej strefy DNS. 	|

Po zatwierdzeniu tego etapu otrzymasz wiadomość z informacją o ukończeniu konfiguracji. Dla przypomnienia będzie ona zawierać również adres e-mail służący do walidacji certyfikatu SSL i adres dostępowy do poczty webmail Twojej platformy.

### Etap 3: ręczna konfiguracja strefy DNS dla nazwy domeny Twojej platformy

> [!primary]
>
> Ten etap jest opcjonalny, jeśli zaznaczyłeś opcję „**DNS Assist**” w [etapu 2 ](./#etap-2-uruchomienie-platformy){.external}.
> 

Jeśli Twoja nazwa domeny nie jest zarządzana z poziomu tego samego konta klienta lub też jest utrzymywana poza OVHcloud, otrzymasz drugi e-mail zawierający informacje niezbędne do ręcznej konfiguracji strefy DNS.

E-mail zawiera adresy IPv4 i IPv6 Twojej platformy. Podaj te adresy w strefie DNS subdomeny prawdopodobnie utworzonej uprzednio w [etapu 2 ](./#etap-2-uruchomienie-platformy){.external} w formie wpisu typu „A” lub „AAAA”. W przypadku nazwy domeny w OVHCloud  zapoznaj się z naszym przewodnikiem [„Modyfikowanie strefy DNS”](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns//).



### Etap 4: walidacja certyfikatu SSL

Po ukończeniu [etapu 2 ](./#etap-2-uruchomienie-platformy){.external} otrzymasz e-mail na adres wskazany jako służący do walidacji certyfikatu SSL.

E-mail ten zostanie wysłany przez instytucję wydającą certyfikat SSL. Temat wiadomości będzie wyglądał następująco:

> **ORDER #1111111 - Domain Control Validation for exchange.twojadomena.com**

Skopiuj kod znajdujący się w wiadomości i kliknij link służący do walidacji certyfikatu SSL.

Kiedy pojawi się poniższe okienko, wklej kod i kliknij `Next`{.action}.

![first-use-private-exchange](images/first-use-private-exchange-03.png){.thumbnail}

Zobaczysz komunikat informujący, że podany kod jest prawidłowy. Należy wtedy nacisnąć przycisk `Close window`{.action}.

### Zakończenie

Po walidacji certyfikatu SSL konieczne może okazać się odczekanie 4 godzin na uruchomienie usługi. Twoja platforma Private Exchange nie będzie wówczas widoczna w Twoim Panelu klienta.

Kiedy tylko Twój serwer będzie gotowy i dostępny, otrzymasz wiadomość e-mail z potwierdzeniem. Temat wiadomości będzie wyglądał następująco:

> **[xx-11111-ovh] Twoja usługa Private Exchange 20_xxx_ jest gotowa!**

Aby dodać pierwszą nazwę domeny do platformy i rozpocząć konfigurowanie kont, zapoznaj się z naszym przewodnikiem [„Dodanie domeny do usługi Exchange”](https://docs.ovh.com/pl/microsoft-collaborative-solutions/dodanie-domeny-exchange/) 

## Sprawdź również

[Edycja strefy DNS OVH](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/).

[Dodanie domeny do usługi Exchange](https://docs.ovh.com/pl/microsoft-collaborative-solutions/dodanie-domeny-exchange/) 

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en>.
