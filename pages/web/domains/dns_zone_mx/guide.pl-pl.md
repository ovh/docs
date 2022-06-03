---
title: 'Dodanie rekordu MX w konfiguracji domeny'
slug: hosting_www_konfiguracja_serwerow_mx_w_strefie_dns_ovh
excerpt: 'Dowiedz się, jak dodać rekord MX do strefy DNs domeny'
section: 'DNS i strefa DNS'
order: 4
---

**Ostatnia aktualizacja dnia 2018-04-03**

## Wprowadzenie

Pole MX umożliwia powiązanie domeny z serwerem poczty elektronicznej. Dzięki temu serwery poczty wychodzącej kierują wiadomości e-mail do odpowiednich adresów pocztowych. Istnieje prawdopodobieństwo, że dostawca Twoich usług dysponuje kilkoma serwerami poczty elektronicznej. W takim przypadku należy utworzyć kilka rekordów MX.

**Dowiedz się, jak dodać rekord MX do konfiguracji domeny OVHcloud.**

## Wymagania początkowe

- Dostęp do interfejsu zarządzania domeną w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}
- Wybrana domena powinna używać konfiguracji OVHcloud (serwerów DNS OVHcloud)

> [!warning]
>
> - Jeśli Twoja domena nie używa serwerów DNS OVHcloud, zmodyfikuj rekordy MX w interfejsie dostawcy zarządzającego konfiguracją Twojej domeny.
>
> - Jeśli Twoja domena jest zarejestrowana w OVHcloud, możesz sprawdzić w [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, w zakładce [Serwery DNS](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}, czy używa ona konfiguracji OVHcloud.
>

## W praktyce

### Etap 1: podstawowe informacje o rekordzie MX

Rekord MX służy do powiązania Twojej domeny z serwerem dostarczonym przez dostawcę rozwiązania poczty elektronicznej, np. OVHcloud. Kiedy osoba, z którą korespondujesz wysyła do Ciebie wiadomość e-mail, rekord MX wskazuje serwerowi poczty wychodzącej do jakiego serwera powinien ją skierować.

Istnieje możliwość konfiguracji kilku rekordów MX dla jednej domeny. Każdemu z nich należy nadać priorytet. Dzięki temu serwery poczty wychodzącej będą otrzymywały informacje, do których serwerów mają wysyłać wiadomości w pierwszej kolejności. Pamiętaj, że możesz dodawać jedynie rekordy MX należące do tego samego zestawu i od tego samego dostawcy usługi.

**Zmiana rekordów MX domeny jest operacją wymagającą wiedzy**: pomyłka w modyfikacji może uniemożliwić spływanie wiadomości e-mail na Twoje konta e-mail. Zalecamy w związku z tym dużą ostrożność podczas wykonywania tej operacji.

### Etap 2: znajomość konfiguracji MX OVHcloud

Zapoznaj się z przedstawioną poniżej konfiguracją MX OVHcloud przewidzianą dla rozwiązań MX Plan (występującą samodzielnie lub włączoną do oferty [hostingu](https://www.ovhcloud.com/pl/web-hosting//){.external} oraz [Exchange](https://www.ovhcloud.com/pl/emails/){.external}. Na serwerach poczty elektronicznej OVHcloud zainstalowane jest oprogramowanie antyspamowe i antywirusowe.

|Domena|TTL|Typ rekordu|Priorytet|Adres docelowy|
|---|---|---|---|---|
|*pozostaw puste*|3600 |MX|1|mx0.mail.ovh.net.|
|*pozostaw puste*|3600 |MX|5|mx1.mail.ovh.net.|
|*pozostaw puste*|3600 |MX|50 |mx2.mail.ovh.net.|
|*pozostaw puste*|3600 |MX|100|mx3.mail.ovh.net.|
|*pozostaw puste*|3600 |MX|200|mx4.mail.ovh.net.|

Teraz zastosuj rekordy MX w konfiguracji DNS Twojej domeny. Operacja ta została opisana w kolejnym etapie. 

### Etap 3: modyfikacja konfiguracji rekordu MX OVHcloud

Aby zmodyfikować rekordy MX w konfiguracji OVHcloud Twojej domeny, zaloguj się do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}. Kliknij `Domeny`{.action}, następnie wybierz domenę i przejdź do zakładki `Strefa DNS`{.action}.

W tabeli, która się wyświetli znajdziesz konfigurację Twojej domeny OVHcloud. Każdy wiersz odpowiada jednemu rekordowi DNS. Zalecamy sprawdzenie w pierwszym kroku, czy jakieś rekordy MX zostały już wcześniej dodane do konfiguracji DNS Twojej domeny. Możesz posłużyć się w tym celu oknem filtrowania.

![dnsmxrecord](images/mx-records-dns-zone.png){.thumbnail}

Jeśli w konfiguracji są już zapisane rekordy MX i chcesz je zastąpić, kliknij ikonkę koła zębatego po prawej stronie każdego wiersza w tabeli odpowiadającego rekordowi, a następnie kliknij `Usuń rekord`{.action}. Jednocześnie zadbaj, aby domena cały czas posiadała co najmniej jeden rekord MX.

Kliknij przycisk `Dodaj rekord`{.action}, następnie wybierz `MX`{.action}. Wpisz wymagane informacje w zależności od wybranego rozwiązania poczty elektronicznej:

- **jeśli używasz rozwiązania poczty elektronicznej OVHcloud**: wykorzystaj informacje opisane w [etapie 2: znajomość konfiguracji MX OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_konfiguracja_serwerow_mx_w_strefie_dns_ovh/#etap-2-znajomosc-konfiguracji-mx-ovh){.external};

- **jeśli używasz innego rozwiązania**: wykorzystaj informacje podane przez dostawcę Twojej usługi.

Po wpisaniu informacji zakończ ostatni etap, następnie kliknij `Zatwierdź`{.action}.

> [!primary]
>
> W związku z wprowadzoną zmianą, należy wziąć pod uwagę czas propagacji, który wynosi od 4 do 24 godzin maksimum. Po tym czasie zmiana będzie aktywna.
>

## Sprawdź również

[Informacje na temat serwerów DNS](https://docs.ovh.com/pl/domains/hosting_www_informacje_na_temat_serwerow_dns/){.external}

[Modyfikacja strefy DNS OVHcloud](https://docs.ovh.com/pl/domains/hosting_www_jak_edytowac_strefe_dns/){.external}

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.