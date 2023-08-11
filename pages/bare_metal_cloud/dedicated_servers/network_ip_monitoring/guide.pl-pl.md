---
title: Jakie są adresy IP monitoringu OVHcloud?
excerpt: W tej sekcji odnajdziesz adresy IP, które mają zostać wpisane podczas uruchamiania firewalla. Dzięki temu monitoring OVHcloud będzie nadal działać na Twoim serwerze.
updated: 2023-07-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>


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
|netmon-rbx-probe|92.222.184.0/24|icmp|
|netmon-sbg-probe|92.222.185.0/24|icmp|
|netmon-gra-probe|92.222.186.0/24|icmp|
|netmon-bhs-probe|167.114.37.0/24|icmp|
|netmon-sgp-probe|139.99.1.144/28|icmp|
|ping.ovh.net|213.186.33.13|icmp|
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

[Konfiguracja zapory sieciowej Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
