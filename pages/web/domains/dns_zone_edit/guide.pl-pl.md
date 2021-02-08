---
title: 'Modyfikacja strefy DNS'
slug: hosting_www_jak_edytowac_strefe_dns
excerpt: 'Dowiedz się, jak edytować strefę DNS w Panelu klienta'
section: 'DNS i strefa DNS'
order: 3
---

**Ostatnia aktualizacja dnia 2018-04-09**

## Wprowadzenie

Strefa Domain Name System (DNS) to plik konfiguracyjny domeny. Zawiera on informacje techniczne nazywane rekordami. W przypadku klasycznego użycia rekordy te umożliwiają powiązanie domeny z serwerem lub serwerami hostującymi stronę WWW i konta e-mail. 

**Dowiedz się, jak w prosty sposób zmodyfikować strefę DNS w Panelu klienta.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Dostęp do [Panelu klienta OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Używanie przez domenę konfiguracji OVH (serwerów DNS OVH) 

> [!warning]
>
> - Jeśli Twoja domena nie używa konfiguracji OVH, przeprowadź zmianę w interfejsie dostawcy zarządzającego konfiguracją Twojej domeny. 
>
> - Jeśli domena jest zarejestrowana w OVH, możesz sprawdzić, czy używa konfiguracji OVH. Po wybraniu domeny w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przejdź do zakładki `Serwery DNS`{.action}.
>

## W praktyce

**Edycja strefy DNS jest operacją wymagającą odpowiedniej wiedzy**: wprowadzenie omyłkowej zmiany mogłoby na przykład uniemożliwić dostęp do Twojej strony WWW lub odbiór nowych wiadomości e-mail.

Poznanie poszczególnych rekordów będzie pomocne w lepszym zrozumieniu zmian, które wprowadzisz w strefie DNS Twojej domeny. Dlatego zalecamy zapoznanie się z poniższą tabelą, w której zostały opisane wszystkie rekordy DNS. 

|Typ rekordu|Opis| 
|---|---|
|A|Umożliwia powiązanie domeny z adresem IP (IPv4), na przykład z adresem IP serwera, na którym hostowana jest Twoja strona WWW.|
|AAAA|Umożliwia powiązanie domeny z adresem IP (IPv6), na przykład z adresem IP serwera, na którym hostowana jest Twoja strona WWW.|
|CNAME|Umożliwia używanie przez domenę adresu lub adresów IP innej domeny poprzez ich wzajemne powiązanie zgodnie z zasadą tworzenia aliasów domen. Przykładowo, jeśli *www.mypersonaldomain.ovh* jest aliasem*mypersonaldomain.ovh*, domena *www.mypersonaldomain.ovh* użyje adresu lub adresów IP domeny *mypersonaldomain.ovh*.|
|MX|Umożliwia powiązanie domeny z serwerem poczty elektronicznej, na przykład adresem IP serwera, na którym hostowane jest Twoje konto e-mail. Jest prawdopodobne, że dostawca dysponuje kilkoma serwerami poczty e-mail. W takiej sytuacji należy utworzyć kilka pól MX.|
|SRV|Umożliwia wskazanie adresu serwera zarządzającego usługą. Rekord ten może na przykład wskazywać adres serwera SIP lub adres serwera umożliwiającego programowi pocztowemu automatyczną konfigurację tzw. „autodiscover”.|
|TXT|Umożliwia dodanie do parametrów DNS Twojej domeny dowolnej wartości (w formacie tekstowym). Rekord ten jest często używany podczas procesu weryfikacji.|
|SPF|Pozwala zapobiegać przypadkom podszywania się pod adresy e-mail używające Twojej domeny. Rekord ten może na przykład wskazywać, że jedynie serwer dostawcy Twojego rozwiązania poczty elektronicznej może być identyfikowany jako legalne źródło wysyłki e-maili. Dowiedz się więcej w [dokumentacji OVH dotyczącej rekordu SPF](https://docs.ovh.com/pl/domains/uslugi_www_pole_spf/){.external}.|
|CAA|Umożliwia wyświetlenie listy organizacji upoważnionych do wydawania certyfikatów SSL dla domeny.|

### Etap 1: dostęp do interfejsu zarządzania strefą DNS

Zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Domeny`{.action} na pasku usług po lewej stronie, następnie wybierz domenę. Teraz przejdź do zakładki `Strefa DNS`{.action}.

W tabeli, która się wyświetli znajdziesz konfigurację Twojej domeny w OVH. Na konfigurację składają się rekordy DNS, każdy zaznaczony w oddzielnym wierszu tabeli. Możesz sortować zawartość tabeli według typu rekordu lub nazwy domeny. 

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### Etap 2: edycja strefy DNS 

Możesz zmodyfikować strefę DNS domeny, dodając, zmieniając lub usuwając rekord DNS. Aby to zrobić, możesz skorzystać z jednej z dwóch metod:

- **Ręczna modyfikacja strefy w trybie tekstowym**

Zalecana tylko dla zaawansowanych użytkowników. W zakładce `Strefa DNS`{.action} kliknij `Modyfikacja w trybie tekstowym`{.action}, następnie postępuj zgodnie z kolejnymi instrukcjami, które będą się wyświetlały.

- **Skorzystanie z asystenta konfiguracji**

Od tego momentu niniejszy przewodnik opisuje jedynie konfigurację przy użyciu asystenta.

> [!primary]
>
> Przygotuj informacje, które chcesz zmienić w strefie DNS. Jeśli przeprowadzasz modyfikację na prośbę dostawcy usługi, dostawca powinien przesłać Ci listę elementów do zmiany. 
>

- **Dodanie nowego rekordu DNS**

Aby dodać nowy rekord DNS, kliknij przycisk `Dodaj rekord`{.action} po prawej stronie tabeli w zakładce `Strefa DNS`{.action} w Panelu klienta. Wybierz typ pola DNS, następnie postępuj zgodnie z instrukcjami.

Zalecamy uprzednie sprawdzenie, czy dany rekord już nie istnieje, i czy nie wskazuje na inny serwer. W tym celu włącz sortowanie zawartości tabeli według typu rekordu i nazwy domeny. Jeśli rekord już istnieje, rekomendujemy jego modyfikację zgodnie z procedurą opisaną poniżej.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

- **Modyfikacja istniejącego rekordu DNS**

Aby zmodyfikować rekord DNS, kliknij ikonkę koła zębatego w tabeli po prawej stronie wybranego rekordu (zakładka `Strefa DNS`{.action} w Panelu klienta). Następnie kliknij `Zmień rekord`{.action}, po czym postępuj zgodnie z kolejnymi instrukcjami, które będą się wyświetlały. 

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

- **Usunięcie rekordu DNS**

Aby usunąć rekord DNS, kliknij ikonkę koła zębatego w tabeli po prawej stronie wybranego rekordu (zakładka `Strefa DNS`{.action} w Panelu klienta). Następnie kliknij `Usuń rekord`{.action}, po czym postępuj zgodnie z instrukcjami.

Możesz usunąć kilka rekordów za jednym razem, zaznaczając je wcześniej w lewej części tabeli i naciskając przycisk `Usuń`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

### Etap 3: czas potrzebny na propagację

Czas propagacji wprowadzonych w strefie DNS zmian wynosi maksymalnie 24 godziny.

Jeśli chcesz skrócić czas propagacji w przypadku kolejnych modyfikacji strefy DNS, możesz uczynić to, do pewnego stopnia, zmieniając TTL (*Time To Live*), który zostanie zastosowany do wszystkich rekordów strefy DNS.
W tym celu kliknij przycisk `Domyślny TTL`{.action} w zakładce `Strefa DNS`{.action} w Panelu klienta, a następnie postępuj zgodnie z kolejnymi instrukcjami.

Możliwa jest również modyfikacja TTL rekordu DNS. Operacja ta może zostać jednak przeprowadzona tylko rekord po rekordzie, poprzez modyfikację każdego z nich lub podczas dodawania rekordów. 

## Sprawdź również

[Informacje na temat serwerów DNS](https://docs.ovh.com/pl/domains/hosting_www_informacje_na_temat_serwerow_dns/){.external}

[Konfiguracja rekordu SPF w strefie DNS](https://docs.ovh.com/pl/domains/uslugi_www_pole_spf/){.external}

[Zabezpieczenie domeny przed Cache Poisoning za pomocą DNSSEC](https://www.ovh.pl/domeny/usluga_dnssec.xml){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.