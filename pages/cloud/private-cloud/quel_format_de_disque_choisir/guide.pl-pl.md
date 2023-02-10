---
title: Jaki format dysku wybrać
slug: jaki-format-dysku-wybrac
excerpt: Poznaj różne rodzaje formatów dysku
section: Zarządzanie wirtualnymi maszynami
order: 04
updated: 2022-02-02
---

**Ostatnia aktualizacja z dnia 01-02-2022**

## Wprowadzenie

VMware oferuje 3 formaty dysków dla maszyn wirtualnych.

**Ten przewodnik wyjaśnia różnice między tymi formatami**

## W praktyce

### Thin provisioning

*Thin provisioning* to rodzaj formatu dysku, który wykorzystuje tylko tyle miejsca, ile potrzebuje na datastore i zwiększa się z czasem.

Można przydzielić dysk 1 TB, który zostanie rozpoznany przez system operacyjny maszyny wirtualnej jako 1 TB, ale będzie on zajmował na datastore tylko miejsce zarezerwowane dla *guest OS* (np. 20 GB). 

Oznacza to, że można przydzielić na datastore o pojemności 1,2 TB przestrzeń 50 TB (50 wirtualnych maszyn o przydzielonej pojemności 1 TB), ale zasoby będą zajmowały tylko 1 TB (w naszym przykładzie zajęte 20 GB / VM).

> [!warning]
>
> W tej sytuacji ważne jest, aby kontrolować zużycie zapisu wirtualnych maszyn, tak aby nie zwiększać zajętości poszczególnych dysków wirtualnych maszyn i nie zapełnić datastore, ponieważ
> zapełniony datastore uniemożliwi nowy zapis i może potencjalnie spowodować wyłączenie wirtualnych maszyn.
>

Nie można wykorzystać miejsca, które zostało zajęte. 

Przykład: jeśli na dysku Thin o pojemności 100 GB zajętych jest 40 GB, a 20 GB danych zostanie usuniętych z wirtualnej maszyny, miejsce zajmowane na datastore będzie nadal wynosić 40 GB, a przydzielone miejsce wynosić będzie 100 GB.

### Thick provisioning Eager zero

*Thick provisioning Eager zero* to rodzaj formatu dysku zajmującego całą przydzieloną przestrzeń na datastore. 

Wirtualna maszyna o przyznanej w trybie *thick* pojemności 100 GB zajmie 100 GB przestrzeni na datastore.

Dane na dysku wirtualnej maszyny są wyzerowane w momencie tworzenia dysku na wolumenie VMFS. 

### Thick provisioning Lazy zero

*Thick provisioning Lazy zero* to rodzaj formatu dysku zajmującego całą przydzieloną przestrzeń na datastore.

Wirtualna maszyna o przyznanej w trybie *thick* pojemności 100 GB zajmie 100 GB przestrzeni na datastore.

Przyznana przestrzeń zarezerwowana jest dla dysku wirtualnej maszyny, ale dane znajdujące się na fizycznym dysku są wyzerowane w momencie, kiedy wirtualna maszyna potrzebuje przestrzeni dyskowej. 

### Przykład

Przykład dla wirtualnych maszyn o pojemności 100 GB z *Guest OS* o pojemności 40 GB:

|Rodzaj dysku|Przydzielona przestrzeń|Block zeroed|Zajęta przestrzeń|
|---|---|---|---|
|Eager Zero|W momencie tworzenia wirtualnej maszyny|W momencie tworzenia wirtualnej maszyny|100 GB|
|Lazy Zero|W momencie tworzenia wirtualnej maszyny|Kiedy blok zostaje zapisany po raz pierwszy|100 GB|
|Thin|Kiedy blok zostaje zapisany po raz pierwszy|Kiedy blok zostaje zapisany po raz pierwszy|40 GB|

### Format dysku w OVHcloud

W infrastrukturze Hosted Private Cloud dostępny jest jedynie Thin provisioning*.

3 rodzaje formatów są jednak dostępne na przestrzeni dyskowej vSAN.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
