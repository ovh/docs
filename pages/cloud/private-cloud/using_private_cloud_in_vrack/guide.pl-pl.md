---
title: Korzystanie z usługi Hosted Private Cloud w ramach usługi vRack
slug: hosted-private-cloud-vrack
excerpt: Dowiedz się, jak korzystać z usługi vRack w ramach usługi Hosted Private Cloud
section: Usługi i opcje OVHcloud
order: 02
updated: 2022-03-28
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 28-03-2022**

## Wprowadzenie

vRack umożliwia podłączenie różnych usług cloud OVHcloud w ramach jednej lub kilku zabezpieczonych prywatnych sieci (VLAN).

**Niniejszy przewodnik wyjaśnia, jak go uruchomić**

## Wymagania początkowe

- Posiadanie usługi [vRack](https://www.ovh.pl/rozwiazania/vrack/) na Twoim koncie lub zamówienie usługi.
- Posiadanie statusu kontaktu administratora infrastruktury [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymywać dane do logowania.
- Posiadanie aktywnego identyfikatora użytkownika [utworzonego w Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

## W praktyce

### Panel klienta

Podczas dostarczania usługi [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/) część *datacenter* jest już w sieci vRack. Aby uzyskać dostęp do sekcji vRack,
przejdź do sekcji `Bare Metal Cloud`{.action}, kliknij `Network`{.action}, następnie kliknij `vRack`{.action}. Wybierz vRack z listy, aby wyświetlić zawartość.

![Centrum danych](images/vRackDatacenter.PNG){.thumbnail}

Możesz przenieść *centrum danych* usługi Hosted Private Cloud do innego rozwiązania vRack klikając na przycisk `Przenieś`{.action}

### Klient vSphere

W panelu klienta vSphere możesz odnaleźć kompatybilne sieci *VLANs* vRack w rozproszonym wirtualnym switchu (vds), który znajduje się w katalogu **vrack**.

> [!success]
>
> OVHcloud dostarcza domyślnie infrastrukturę z 11 sieciami VLAN (VLAN10-VLAN20).
>

![vlan](images/vRackVsphere.png){.thumbnail}

Możesz zmienić lub utworzyć nowe parametry, postępując zgodnie z instrukcjami dotyczącymi [tworzenia sieci VxLAN](../tworzenie-vlan-vxlan/).

Następnie będziesz mógł przypisać te *grupy* serwerów do interfejsów sieciowych Twoich wirtualnych maszyn.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.