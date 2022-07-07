---
title: 'Utworzenie strefy DNS dla domeny'
excerpt: 'Dowiedz się, jak utworzyć strefę DNS w OVHcloud dla Twojej domeny, korzystając z Panelu klienta'
slug: utworzenie_strefy_dns_dla_zewnetrznej_domeny
section: 'DNS i strefa DNS'
order: 2
legacy_guide_number: g2229
---

**Ostatnia aktualizacja dnia 2018-08-07**

## Wprowadzenie

Strefa Domain Name System (DNS) to plik konfiguracyjny domeny. Zawiera on informacje techniczne nazywane rekordami. W przypadku klasycznego użycia rekordy te umożliwiają powiązanie domeny z serwerem lub serwerami hostującymi stronę WWW i konta e-mail. 

**Dowiedz się, jak utworzyć strefę DNS w OVHcloud dla Twojej domeny, korzystając z Panelu klienta.**

## Wymagania początkowe

- Zarejestrowana domena
- Domena nie może mieć strefy DNS OVHcloud i nie może być przedmiotem trwającej operacji lub zamówienia w OVHcloud
- Prawidłowa konfiguracja techniczna domeny (status, SOA, etc.)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}

## W praktyce

### Etap 1: utworzenie strefy DNS w Panelu klienta

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Zamów`{.action}, następnie kliknij `Strefa DNS`{.action}. 

Na stronie, która się pojawi, wpisz nazwę domeny, dla której chcesz utworzyć strefę DNS. Odczekaj chwilę, aż narzędzie OVHcloud dokona weryfikacji domeny.

Jeśli pojawi się komunikat informujący, że strefa DNS nie może być utworzona, sprawdź, czy domena spełnia niezbędne wymagania lub poproś, aby zrobiła to osoba zarządzająca domeną.  Po zweryfikowaniu ustawień spróbuj ponownie.

![dodanie domeny do dns](images/dns-zone-create-step1.png){.thumbnail}

Wybierz, czy chcesz aktywować wersję minimum dla tworzonej strefy DNS. Wybór ten nie jest ostateczny, ponieważ możesz edytować rekordy strefy DNS po jej utworzeniu.

|Czy chcesz aktywować wersję minimalną?|Szczegóły|
|---|---|
|Tak|Wybierz tę opcję, jeśli chcesz następnie spersonalizować strefę DNS.|
|Nie|Wybierz tę opcję, jeśli zamierzasz korzystać z domeny wraz z [hostingiem OVHcloud](https://www.ovhcloud.com/pl/web-hosting/){.external}. Strefa DNS jest w tym przypadku wstępnie skonfigurowana.|

![dodanie domeny do dns](images/dns-zone-create-step2.png){.thumbnail}

Po wybraniu odpowiedniej opcji postępuj zgodnie z instrukcjami podanymi w kolejnych etapach, aż do utworzenia strefy DNS.

### Etap 2: edycja strefy DNS (opcjonalnie)

Po utworzeniu strefy DNS Twojej domeny możesz ją edytować. Operacja ta jest opcjonalna, jednak może okazać się niezbędna, jeśli chcesz zapewnić nieprzerwaną dostępność usług powiązanych z tą domeną (takich jak strona WWW i konta e-mail).

Aby edytować strefę DNS, pozostań zalogowany do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Domeny`{.action}, następnie wybierz odpowiednią domenę. Teraz przejdź do zakładki `Strefa DNS`{.action}.

> [!primary]
>
> Jeśli właśnie utworzyłeś strefę DNS i nazwa domeny jeszcze się nie wyświetla na liście Twoich usług `Domeny`{.action}, odczekaj chwilę, po czym odśwież stronę.
>

Następnie, przeprowadź niezbędne operacje. Więcej informacji o edycji strefy DNS znajdziesz w przewodniku [Modyfikacja strefy DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}. Czas propagacji wprowadzonych w strefie DNS zmian wynosi od 4 do 24 godzin.

### Etap 3: zmiana serwerów DNS domeny

Kiedy strefa DNS jest gotowa do użytku, powiąż ja z Twoją domeną. Aby to zrobić, w pierwszym kroku pobierz serwery DNS OVHcloud aktywowane dla Twojej domeny w Panelu klienta. Nazwy serwerów wyświetlają się pod `Name Servers`, w zakładce `Strefa DNS`{.action}.

![dodanie domeny do dns](images/dns-zone-create-step3.png){.thumbnail}

Następnie **zmodyfikuj serwery DNS domeny za pośrednictwem interfejsu administratora domeny.** Od momentu zmiany konfiguracji DNS muszą upłynąć 48 godziny, aby modyfikacja stała się efektywna.

## Sprawdź również

[Modyfikacja strefy DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}.

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.