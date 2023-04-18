---
title: Kompatybilność usługi vRack z usługą Hosted Private Cloud
excerpt: Przewodnik na temat kompatybilności między produktami vRack i Hosted Private Cloud
updated: 2021-12-31
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 31-12-2021**

## Wprowadzenie

Produkt [vRack](https://www.ovh.pl/rozwiazania/vrack/){.external} pozwala na połączenie kilku produktów OVHcloud i na połączenie ich ze sobą za pomocą 1 lub kilku sieci vlan. Niektóre konfiguracje nie są kompatybilne z rozwiązaniem Hosted Private Cloud.

**Niniejszy przewodnik wyjaśnia kompatybilność usługi Hosted Private Cloud z produktem vRack.**

## Wymagania początkowe

- Posiadanie statusu kontaktu administratora infrastruktury [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/), aby otrzymywać dane do logowania.
- Posiadanie aktywnego identyfikatora użytkownika [utworzonego w Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## Kontekst

W usłudze Hosted Private Cloud znajdują się 2 typy vRack:

- "VM Network", czyli vRack w ramach jednej sieci vlan, vlan natywny sieci publicznej Hosted Private Cloud. Ten vlan jest używany w usłudze Hosted Private Cloud do przekierowywania publicznych adresów IP. Znajduje się on w wykazie vSphere jako PortGroup w kategorii "Sieć", zwanej "VM Network". Ten vRack jest zatem podłączony do wirtualnego switcha zarządzanego przez OVHcloud.

- "Datacenter vRack", "vRack vDC" lub "dvs-vrack" to sieć vRack pozwalająca na posiadanie 4000 sieci vlan. Usługa vRack jest podłączona do wirtualnego switcha zarządzanego przez klienta za pomocą własnych dedykowanych kart sieciowych.

Pamiętaj, że niektóre gamy biznesowe, takie jak gamy hostów AMD, nie posiadają wirtualnego switcha zarządzanego przez klienta. W związku z tym dostępny jest tylko vRack typu "VM Network".

Poniżej zamieszczamy kontekst:

![template](images/template.png){.thumbnail}

## W praktyce

### Co możemy zrobić

**Połącz 2 vRack VM Network w różnych strefach geograficznych, w różnych infrastrukturach Hosted Private Cloud.**

![VM Network - VM Network różne strefy i PCC ](images/vmnetwork-vmnetwork-diff-geo-diff-pcc.png){.thumbnail}

**Połącz 1 vRack VM Network i 1 vRack vDC w różnych strefach geograficznych w ramach usługi Hosted Private Cloud.**

![VM Network - vDC różne strefy i PCC ](images/vmnetwork-vdc-diff-geo-diff-pcc.png){.thumbnail}

> [!primary]
>
> Aby wirtualne maszyny vRack VM Network i wirtualne maszyny vRack vDC mogły się ze sobą komunikować, wirtualne maszyny vRack vDC muszą być umieszczone na vlan natywny.
> 

**Połączenie 1 vRack vDC i 1 vRack vDC w różnych strefach geograficznych w ramach różnych usług Hosted Private Cloud.**

![vDC - vDC różne strefy i PCC ](images/vdc-vdc-diff-geo-diff-pcc.png){.thumbnail}

**Połączenie 1 vRack vDC i 1 vRack vDC w ramach tej samej usługi Hosted Private Cloud.**

![vDC - vDC, nawet PCC ](images/vdc-vdc-same-pcc.png){.thumbnail}

**Wszystkie sieci vDC należące do tej samej usługi Hosted Private Cloud dzielą ten sam vRack VM Network.**

![VM Network współdzielony na PCC](images/all-vdc-share-same-vmnetwork.png){.thumbnail}

**Połączenie 1 vRack vDC i 1 vRack vDC w ramach jednego obszaru geograficznego w różnych infrastrukturach Hosted Private Cloud.**

![vDC - vDC tej samej strefy i różnych PCC ](images/vdc-vdc-same-zone-diff-pcc.png){.thumbnail}

### Czego nie można zrobić

**Połącz 1 vRack VM Network i 1 vRack VM Network w tej samej strefie geograficznej, w różnych rozwiązaniach Hosted Private Cloud.**

![VM Network - VM Network ten sam obszar i różne PCC ](images/vmnetwork-vmnetwork-same-geo-diff-pcc.png){.thumbnail}

**Połącz 1 vRack VM Network i 1 vRack vDC w tej samej strefie geograficznej w różnych rozwiązaniach Hosted Private Cloud.**

![VM Network - vDC strefa i różne PCC ](images/vmnetwork-vdc-same-geo-diff-pcc.png){.thumbnail}

**Połączenie 1 vRack VM Network i 1 vRack vDC w tej samej strefie geograficznej, w tej samej infrastrukturze Hosted Private Cloud.**

![VM Network - vDC strefa i PCC ](images/vmnetwork-vdc-same-geo-same-pcc.png){.thumbnail}

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
