---
title: 'Konfiguracja OVHcloud Link Aggregation w Panelu klienta'
slug: ola-manager
excerpt: 'Dowiedz się, jak włączyć OVHcloud Link Aggregation w Panelu klienta'
section: 'Poziom zaawansowany'
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 18-05-2022**

## Wprowadzenie

Technologia OVHcloud Link Aggregation (OLA) została zaprojektowana przez nasze zespoły w celu zwiększenia dostępności serwera i wydajności połączeń sieciowych. Za pomocą kilku kliknięć możesz łączyć karty sieciowe i redundantować połączenia sieciowe. Oznacza to, że w przypadku awarii połączenia ruch jest automatycznie przekierowywany do innego dostępnego połączenia.<br>
Aggregacja oparta jest na technologii IEEE 802.3ad lub Link Aggregation Control Protocol (LACP).

**Dowiedz się, jak skonfigurować OLA w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego OVHcloud](https://www.ovhcloud.com/pl/bare-metal/)
- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- System operacyjny / Hypervisor obsługujący protokół 802.3ad (LACP)

## W praktyce

> [!warning]
>
> Konfiguracja OLA odbywa się na wszystkich interfejsach sieciowych. Stanowią one agregat typu "agregacja prywatna".
>
> Po wdrożeniu OLA publiczny adres IP nie będzie już dostępny.
>

### Konfiguracja OLA w Panelu klienta OVHcloud

Aby rozpocząć konfigurację OLA, zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external} i wybierz kartę `Bare Metal Cloud`{.action}. Kliknij `Serwery Dedykowane`{.action} i wybierz Twój serwer z listy.

![network interfaces](images/network_interfaces2022.png){.thumbnail}

W zakładce `Interfejsy sieciowe`{.action} (1) kliknij przycisk `...`{.action} (2) po prawej stronie "Tryb" w ramach **OLA: OVHcloud Link Aggregation**. Następnie kliknij `Skonfiguruj agregację prywatną`{.action} (2).

![interfejs select](images/interface_select2021.png){.thumbnail}

Upewnij się, czy Twoje dwa interfejsy, czyli grupy interfejsów, są właściwie wybrane i nadaj nazwę interfejsowi OLA. Kliknij na `Potwierdź`{.action} po zakończeniu weryfikacji.

Zakończenie operacji może potrwać kilka minut. Kolejny krok to powiązanie interfejsów w systemie operacyjnym. Szczegółowe informacje na temat konfiguracji znajdziesz w przewodnikach:

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 9](../ola-debian9/)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation CentOS 7](../ola-centos7/)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Windows Server 2019](../ola-w2k19/)

### Przywróć OLA do wartości domyślnych

Aby przywrócić OLA do wartości domyślnych, kliknij przycisk `...`{.action} po prawej stronie "Tryb" w ramce **OLA: OVHcloud Link Aggregation**. Następnie kliknij `Dekonfiguruj agregację prywatną`{.action}. Kliknij `Potwierdź`{.action} w menu kontekstowym.

![network interfaces](images/default_settings2021.png){.thumbnail}

Operacja może zająć kilka minut.

## Sprawdź również

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Debianie 9](../ola-debian9/)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation CentOS 7](../ola-centos7/)

[Konfiguracja karty sieciowej (NIC) dla OVHcloud Link Aggregation w Windows Server 2019](../ola-w2k19/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
