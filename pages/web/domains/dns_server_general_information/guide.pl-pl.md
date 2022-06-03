---
title: 'Zmiana serwerów DNS domeny w OVHcloud'
slug: hosting_www_informacje_na_temat_serwerow_dns
excerpt: 'Dowiedz się, jak zmodyfikować serwery DNS Twojej domeny w OVHcloud'
section: 'DNS i strefa DNS'
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 18 lutego 2021 r**

## Wprowadzenie

### Zrozumienie pojęcia DNS 

Symbol DNS, oznaczający **D**omain **D**ame **S**ystem, to zbiór elementów pozwalających na powiązanie domeny z adresem IP.

Pełne wyjaśnienie znajduje się w przewodniku "[Modyfikacja strefy DNS OVHcloud](../hosting_www_jak_edytowac_strefe_dns/#understanddns)".

### Serwery DNS 

Serwery **DNS** zawierają pliki konfiguracyjne DNS domeny nazywane **strefami DNS**.

![DNS](images/dnsserver.png){.thumbnail}

Serwery DNS są zwykle używane w grupach po dwa (podstawowy i wtórny), w celu uzyskania redundancji w przypadku awarii jednego z serwerów DNS.

**Dowiedz się, jak modyfikować serwery DNS Twojej domeny OVHcloud.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wymagania początkowe

- Posiadanie [domeny](https://www.ovhcloud.com/pl/domains/) zarejestrowanej w OVHcloud
- Posiadanie [odpowiednich uprawnień do zarządzania](../../customer/zarzadzanie_kontaktami/){.external} domeną w Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

> [!primary]
>
> Jeśli Twoja domena nie jest zarejestrowana w OVHcloud, zmodyfikuj serwery DNS za pomocą interfejsu dostarczonego przez dostawcę usług, który nią zarządza.
>

## W praktyce

> [!warning]
>
> **Zalecamy ostrożność podczas modyfikowania serwerów DNS domeny.** Błąd podczas wykonywania czynności może uniemożliwić dostęp do Twojej strony WWW lub odbiór nowych wiadomości e-mail. Świadomość możliwych konsekwencji modyfikacji pozwoli Ci lepiej zrozumieć wprowadzane zmiany.
>

Kiedy modyfikujesz serwery DNS Twojej domeny, zmieniasz również konfigurację DNS. Nowa konfiguracja DNS zastępuje poprzednią i jest przechowywana na nowo zdefiniowanych serwerach DNS. Z technicznego punktu widzenia domena używa nowej strefy DNS.

Pamiętaj, że:

- Podczas zmiany serwera DNS (e.g) DNS zewnętrzny przez DNS OVHCloud), zawartość poprzedniej konfiguracji DNS nie jest automatycznie kopiowana do nowej konfiguracji. Upewnij się, czy nowa strefa DNS zawiera wszystkie rekordy DNS wymagane do prawidłowego działania usług powiązanych z Twoją domeną (np. strona WWW i konta e-mail).

- Jeśli chcesz zmienić tylko jeden element aktualnej konfiguracji DNS (np. rekord DNS), zalecamy edycję strefy DNS zgodnie z instrukcją: "[Edycja strefy DNS OVHcloud](../hosting_www_jak_edytowac_strefe_dns/){.external}".

- Niektóre organizacje, rejestry zarządzające rozszerzeniami domen, mają specjalne wymagania dotyczące serwerów DNS (liczba serwerów nazw, wartość rekordów, etc.). W przypadku wątpliwości sprawdź w rejestrze odpowiedzialnym za domenę.

Upewnij się, czy wprowadzone modyfikacje nie uniemożliwią dostępu do Twojej domeny. Jeśli nie jesteś tego pewien, skontaktuj się z osobą, która poprosi Cię o wprowadzenie tych zmian.

### Dostęp do interfejsu zarządzania serwerami DNS

Przed rozpoczęciem operacji zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, kliknij `Domeny`{.action}, następnie wybierz odpowiednią domenę. Przejdź do zakładki `Serwery DNS`{.action}.

Pojawi się tabela wyszczególniająca serwery DNS aktualnie zdefiniowane przez OVHcloud dla Twojej domeny. Może pojawić się kilka serwerów DNS, przy czym jeden serwer odpowiada jednej linii w tabeli. 

> [!primary]
>
> Jeśli używasz serwerów DNS OVHcloud, numery serwerów nie mają żadnego związku z Twoją usługą lub usługami. Tylko opcja [DNS anycast](https://www.ovhcloud.com/pl/domains/options/dns-anycast/) wykorzystuje przydzielone automatycznie serwery DNS.

![dnsserver](images/edit-dns-server-ovh-step1.png){.thumbnail}

### Zmień serwery DNS

Jeśli chcesz korzystać z zewnętrznych serwerów DNS, zastąp je serwerami DNS OVHcloud, a nie dodaj je do serwerów DNS.

Kliknij `Zmień serwery DNS`{.action} po prawej stronie.

W polach tekstowych **zastąp** aktualne wartości serwerów DNS informacjami o nowych serwerach, które chcesz zdefiniować. Aby dodać inne serwery do aktywnej listy, kliknij przycisk `+`{.action} znajdujący się po prawej stronie ostatniego wiersza tabeli. Pojawi się wówczas dodatkowa linia w tabeli z polami do uzupełnienia.

> [!warning]
>
> Nie mieszaj jednej grupy serwerów DNS z inną.
> Na przykład, *dns19.ovh.net* i *ns19.ovh.net* odpowiadają grupie serwerów DNS OVHcloud, są one identyczne i zsynchronizowane. Jeśli dodasz zewnętrzne serwery DNS do OVHcloud (lub innej grupy OVHcloud), konfiguracja DNS będzie losowo działać między serwerami DNS OVHcloud a zewnętrznymi serwerami DNS wprowadzonymi.

Po wprowadzeniu tych informacji kliknij przycisk `Zastosuj konfigurację`{.action}. Statusy serwerów DNS w tabeli są aktualizowane zgodnie z nowymi ustawieniami. 

![dnsserver](images/edit-dns-server-ovh-step2.png){.thumbnail}

### Zresetuj serwery DNS 

Po kliknięciu przycisku `Zresetuj serwery DNS`{.action} możesz zresetować obecne serwery DNS, zastępując je automatycznie oryginalnymi serwerami DNS OVHcloud. Zalecamy użycie tej opcji tylko wtedy, gdy chcesz ponownie korzystać z serwerów DNS OVHcloud. 

![dnsserver](images/edit-dns-server-ovh-step3.png){.thumbnail}

Po zakończeniu operacji należy odczekać określony czas, zanim zmiany staną się widoczne. Na czas oczekiwania składają się dwa czynniki:

- zmiana wprowadzona w OVHcloud musi zostać uwzględniona przez registry zarządzające rozszerzeniem Twojej domeny. Możesz śledzić postęp tej operacji w [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, przechodząc do sekcji `Domeny`{.action}, następnie `Operacje w toku`{.action};
- po uwzględnieniu zmiany przez organizację zarządzającą rozszerzeniem domeny konieczny jest następnie czas propagacji wynoszący maksymalnie 48 godzin, aby modyfikacje stały się w pełni widoczne.

## Sprawdź również

[ Zmiana strefy](../hosting_www_jak_edytowac_strefe_dns/){.external} DNS OVHcloud.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
