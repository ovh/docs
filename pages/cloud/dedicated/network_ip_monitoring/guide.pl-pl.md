---
title: Jakie są adresy IP monitoringu OVHcloud?
slug: monitoring-ip-ovh
excerpt: W tej sekcji odnajdziesz adresy IP, które mają zostać wpisane podczas uruchamiania firewalla. Dzięki temu monitoring OVHcloud będzie nadal działać na Twoim serwerze.
section: Sieć & IP
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 13-12-2022**

## Wprowadzenie

Usługa monitoringu pozwala na monitorowanie stanu maszyny i na automatyczne poinformowanie o problemie technika w centrum danych.

Wszystkie serwery klientów OVHcloud oraz cała sieć są monitorowane przez zespoły techniczne OVHcloud w godzinach 24/24 i 7/7.

OVHcloud rozpoczyna interwencję, gdy tylko pojawi się alert (brak odpowiedzi na pingi), aby ograniczyć do minimum czas niedostępności serwerów i sieci.

Aby wdrożyć restrykcyjny firewall, zwłaszcza w zakresie ICMP i nadal korzystać z monitoringu OVHcloud, należy zezwolić na poniższe adresy IP.

## Wymagania początkowe

- Produkt OVHcloud, na którym zainstalowałeś Firewall.
- Dostęp do reguł firewalla

## W praktyce

### Adresy IP, które chcesz autoryzować

|Rewers|IP|Protokół|
|---|---|---|
|mrtg-rbx-100|37.187.231.251|icmp|
|mrtg-sbg-100|37.187.231.251|icmp|
|mrtg-gra-100|37.187.231.251|icmp|
|mrtg-bhs-100|37.187.231.251|icmp|
|mrtg-rbx-101|151.80.231.244|icmp|
|mrtg-rbx-102|151.80.231.245|icmp|
|mrtg-rbx-103|151.80.231.246|icmp|
|mrtg-gra-101|151.80.231.247|icmp|
|a2.ovh.net|213.186.33.62|icmp|
|---|---|---|
|netmon-rbx-probe|92.222.184.0/24|icmp|
|netmon-sbg-probe|92.222.185.0/24|icmp|
|netmon-gra-probe|92.222.186.0/24|icmp|
|netmon-bhs-probe|167.114.37.0/24|icmp|
|netmon-sgp-probe|139.99.1.144/28|icmp|
|---|---|---|
|proxy.p19.ovh.net|213.186.45.4|icmp|
|proxy.rbx.ovh.net|213.251.184.9|icmp|
|proxy.sbg.ovh.net|37.59.0.235|icmp|
|proxy.bhs.ovh.net|8.33.137.2|icmp|
|ping.ovh.net|213.186.33.13|icmp|
|proxy.ovh.net|213.186.50.98|icmp|
|---|---|---|
||xxx.xxx.xxx.xxx.250 (z adresem IP serwera xxx.xxx.xxx.aaa)|icmp|
||xxx.xxx.xxx.xxx.251 (z adresem IP serwera xxx.xxx.xxx.aaa)|icmp + port monitorowany przez dział monitoringu|

**Komunikacja między usługą RTM a Twoim serwerem wymaga również, aby zezwolić na połączenia przychodzące i wychodzące na portach UDP 6100-6200.**

> [!primary]
>
> Jeśli Twój serwer znajduje się w Roubaix 3, pobierz najnowszy adres IP przez tcpdump.
>
> ```
> tcpdump host stały.adres.ip.serwera | grep ICMP
> ```
>

### Włącz lub wyłącz monitoring

Po pierwsze, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz kartę `Bare Metal Cloud`{.action}. Wybierz odpowiedni serwer z rozwijanego menu `Serwery dedykowane`{.action}.

Możesz włączyć lub wyłączyć monitoring serwera dedykowanego w zakładce `Informacje ogólne`{.action}. Wariant ten znajduje się w sekcji `Status usług`.

![Monitoring](images/monitoring-server.png){.thumbnail}

Kliknij przycisk `Skonfiguruj`{.action}. W oknie, które się pojawi, masz trzy opcje dotyczące zachowania inwigilacji:

- **Wyłączone**: Ta opcja wyłącza komunikaty ostrzegawcze i interwencje OVHcloud. Wybierz tę opcję, jeśli wykonasz odpowiednie operacje administracyjne na serwerze, które uniemożliwiają odpowiedź ICMP.
- **Aktywny z aktywną interwencją**: Jeśli serwer przestanie odpowiadać, otrzymasz wiadomość e-mail z alertem. Serwer zostanie zweryfikowany przez technika.
- **Aktywny bez aktywnej interwencji**: Otrzymasz e-mail z komunikatem ostrzegawczym, jeśli serwer przestanie odpowiadać. Aby rozpocząć interwencję, należy utworzyć wniosek o pomoc.

![Monitoring](images/monitoring-server2.png){.thumbnail}

Kliknij na `Zatwierdź`{.action}, aby zaktualizować konfigurację monitorowania.

### Włącz monitoring konkretnych usług

Poza standardowym monitoringiem możesz zezwolić OVHcloud na monitorowanie określonych usług, takich jak HTTP, SSH i inne protokoły.

W tym celu w zakładce `Informacje ogólne`{.action}, a następnie w ramce **Stan usług** kliknij przycisk `...`{.action} obok przycisku "Monitorowane usługi". Kliknij na `Konfiguruj monitoring`{.action}.

![monitoring](images/monitoring02.png){.thumbnail}

Zostaniesz przekierowany na poniższy ekran. Kliknij `Monitoruj usługę`{.action}, a następnie podaj adres IP, protokół, numer portu, odpowiedź serwera i czas pomiędzy weryfikacjami usługi. Kliknij symbol zatwierdzenia (**V**), aby potwierdzić zmiany.

![monitoring](images/monitoring3.png){.thumbnail}

## Sprawdź również

[Konfiguracja zapory sieciowej Network Firewall](../network-firewall/)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
