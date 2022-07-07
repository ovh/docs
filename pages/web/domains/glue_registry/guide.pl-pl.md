---
title: 'Personalizacja serwerów DNS domeny w OVHcloud'
slug: glue_registry
excerpt: 'Dowiedz się, jak personalizować serwery DNS domeny OVHcloud'
legacy_guide_number: g1568
section: 'DNS i strefa DNS'
order: 7
---

**Ostatnia aktualizacja z dnia 10-10-2018**

## Wprowadzenie

Serwery DNS przechowują informacje o konfiguracji DNS domeny. Konfiguracja DNS, nazywana też strefą DNS, zawiera informacje techniczne w postaci rekordów. W przypadku klasycznego użycia rekordy te umożliwiają powiązanie domeny z serwerem lub serwerami hostującymi stronę WWW i konta e-mail.

W zależności od Twoich potrzeb możesz spersonalizować nazwy serwerów DNS Twojej domeny.

**Dowiedz się, jak ustawić własne nazwy serwerów DNS w domenie OVHcloud.**

## Wymagania początkowe

- Posiadanie domeny zarejestrowanej w OVHcloud
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, sekcja `Web Cloud`{.action}

## W praktyce

**Personalizacja serwerów DNS jest operacją wymagającą odpowiedniej wiedzy**: wprowadzenie omyłkowej zmiany mogłoby uniemożliwić dostęp do Twojej strony WWW lub odbiór nowych wiadomości e-mail. Radzimy postępować ściśle z instrukcjami podanymi w poniższych etapach lub poprosić o wsparcie, jeśli nie jesteś pewien, jak przeprowadzić operację.

### Etap 1: dodanie rekordów GLUE

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i przejdź do sekcji `Web Cloud`, kliknij `Domeny`{.action}, następnie wybierz domenę, dla której chcesz spersonalizować serwery DNS. Teraz przejdź do zakładki GLUE.

Pojawi się strona z tabelą wyświetlającą rekordy GLUE aktualnie skonfigurowane w OVHcloud dla Twojej domeny. Aby dodać nowy rekord GLUE, kliknij przycisk `Dodaj`{.action}.

![rekordy glue registry](images/customize-dns-servers-step1.png){.thumbnail}

W oknie, które się wyświetla, wprowadź wymagane informacje:

|Informacje|Szczegóły| 
|---|---|
|Nazwa hosta|Wprowadź nazwę hosta, którego chcesz użyć jako spersonalizowanego serwera DNS.|
|Docelowy adres IP|Wskaż adres lub adresy IP, z którymi powiązana będzie nazwa hosta. Chodzi o adres IP serwera DNS aktualnie używanego przez Twoją domenę. Jeśli domena używa serwerów DNS OVHcloud i nie znasz odpowiedniego adresu IP, użyj narzędzia [Dig](https://www.ovh.pl/pomoc/narzedzia/dig_domain.pl){.external}, aby ustalić adres. Pojawi się on w sekcji `ANSWER SECTION` obok „A”.|

Po uzupełnieniu informacji kliknij przycisk `Dodaj`{.action}, zapoznaj się z wyświetlanymi informacjami, a następnie kliknij `Zatwierdź`{.action}. Powtórz tę operację tyle razy, ile będzie to potrzebne, w zależności od liczby serwerów DNS używanych przez Twoją domenę.

![rekordy glue registry](images/customize-dns-servers-step2.png){.thumbnail}

### Etap 2: tworzenie rekordów A

Teraz utwórz rekordy A dla hostów, które określiłeś w poprzednim etapie. Każdy rekord A powinien mieć docelowy adres IP odpowiadający nazwie uprzednio utworzonego hosta.

Operacja ta powinna zostać przeprowadzona w interfejsie dostawcy zarządzającego konfiguracją DNS Twojej domeny. Istnieją dwie możliwości:

- **Twoja domena nie używa konfiguracji DNS OVHcloud**: zgłoś się do dostawcy zarządzającego konfiguracją Twojej domeny. Po przeprowadzeniu operacji przejdź do następnego etapu;

- **Twoja domena używa konfiguracji DNS OVHcloud**: przejdź do zakładki `Strefa DNS`{.action}, a następnie dodaj nowy rekord A, klikając przycisk `Dodaj rekord`{.action}. Zaznacz następnie, że chcesz dodać rekord typu A, po czym przejdź przez kolejne etapy aż do zakończenia operacji. Jeśli potrzebujesz bardziej szczegółowych informacji, skorzystaj z instrukcji podanych w naszej dokumentacji [Edycja strefy DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}. 

![rekordy glue registry](images/customize-dns-servers-step3.png){.thumbnail}

### Etap 3: modyfikacja serwerów DNS domeny

Zmodyfikuj serwery DNS Twojej domeny. W tym celu przejdź do zakładki `Serwery DNS`{.action}, następnie kliknij `Zmiana serwerów DNS`{.action}. Zastąp Twoje aktualne serwery DNS serwerami, których chcesz użyć. 

Zakończ ostatni etap i, jeśli potrzebujesz więcej informacji, skorzystaj z instrukcji zawartych w naszej dokumentacji [Zmiana serwerów DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_informacje_na_temat_serwerow_dns/){.external}.

Po zmodyfikowaniu serwerów DNS odczekaj, aż efekty tej operacji staną się widoczne. Czas propagacji wynosi maksymalnie 48 godzin. 

![rekordy glue registry](images/customize-dns-servers-step4.png){.thumbnail}

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.