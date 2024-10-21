---
title: Ustalenie, czy funkcja wirtualnych adresów MAC jest obsługiwana na serwerze dedykowanym
excerpt: Dowiedz się, jak sprawdzić, czy działanie wirtualnych adresów MAC jest obsługiwane na serwerze dedykowanym przez API OVHcloud
updated: 2021-12-09
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
>

## Wprowadzenie

Aby korzystać z funkcjonalności wirtualnych adresów MAC (VMAC) na serwerze dedykowanym, należy najpierw ustalić, czy serwer ten wspiera tę funkcjonalność.

Wsparcie dla tej funkcji jest warunkiem wstępnym wszystkich operacji dotyczących wirtualnych maszyn MAC.

**Dowiedz się, jak sprawdzić, czy Twój serwer dedykowany obsługuje funkcje wirtualnych adresów MAC.**

## Wymagania początkowe

- Posiadanie [serwera dedykowanego](https://www.ovhcloud.com/pl/bare-metal/){.external}
- Dostęp do [API OVHcloud](https://api.ovh.com/){.external}.

> [!primary]
> Jeśli nie wiesz, jak korzystać z API OVHcloud, zapoznaj się z naszym przewodnikiem "[Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)".

## W praktyce

Należy zastosować następujące wywołanie API:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/specifications/network
>

Wprowadź nazwę Twojego serwera w polu `serviceName`, następnie kliknij `Execute`{.action}.

![SVMAC](images/support_virtual_mac_02.png){.thumbnail}

Otrzymasz wówczas listę z wpisem "vmac / supported", który będzie dostępny na "true" lub "false" (wartość boolejska).

![SVMAC](images/support_virtual_mac_04.png){.thumbnail}

> [!primary]
> **Interpretacja wyniku**
>
> - **false**: nie możesz korzystać z funkcji związanych z wirtualnymi adresami MAC na tym serwerze.
>
> - **true**: na tym serwerze możesz korzystać z funkcji związanych z wirtualnymi adresami MAC.
>

## Sprawdź również

[Pierwsze kroki z API OVHcloud](/pages/manage_and_operate/api/first-steps)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.