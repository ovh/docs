---
title: Tworzenie migawki
slug: tworzenie-migawki
excerpt: Przywróć maszyny wirtualne do wcześniejszego stanu za pomocą migawek
legacy_guide_number: '7766547'
section: Zarządzanie maszynami wirtualnymi
order: 08
---

**Ostatnia aktualizacja z dnia 25-06-2020**

## Wprowadzenie 

Możesz wykonać kopię migawkową maszyny wirtualnej, aby przywrócić ją do najnowszej migawki lub też go usunąć.

**Niniejszy przewodnik wyjaśnia działanie migawek**

## Wymagania początkowe

- Posiadanie usługi [Hosted Private Cloud](https://www.ovhcloud.com/pl/enterprise/products/hosted-private-cloud/){.external}.
- Połączenie z klientem vSphere HTML

## W praktyce

Migawki są przydatne, gdy musisz wielokrotnie przywracać maszynę wirtualną do tego samego stanu, lecz nie chcesz tworzyć wielu jej kopii. Funkcja ta pozwala tworzyć punkty przywracania. 

Dzięki temu możesz zachować pierwotny stan maszyny wirtualnej przed zmianą jej sposobu działania. 

Mimo że migawki tworzą tylko „chwilowy” obraz dysku, zaleca się regularne usuwanie migawek. Przechowywanie licznych migawek zajmuje dużo przestrzeni dyskowej, powodując spadek wydajności maszyny wirtualnej.

> [!primary]
> 
> Odradza się używania migawek jako metody tworzenia kopii zapasowych maszyny wirtualnej.
> 

Migawka umożliwia zapisanie stanu maszyny wirtualnej z momentu uruchomienia tej opcji. Migawka zawiera (w zależności od wyboru):

- Stan wszystkich dysków maszyny wirtualnej.
- Zawartość pamięci maszyny wirtualnej.

> [!warning]
> 
> Nie można zmieniać wielkości dysku podczas wykonywania kopii migawkowej maszyny wirtualnej.
> 

### Wykonywanie migawki

Naciśnij prawym przyciskiem myszy Twoją maszynę wirtualną, wybierz opcję `Migawki`{.action}, a następnie `Wykonaj migawkę...`{.action}:

![creer snapshot](images/snapshot01.png){.thumbnail}

Możesz teraz nazwać tę migawkę, dodać do niego opis oraz określić, czy chcesz dołączyć do migawki także pamięć maszyny wirtualnej.

Możesz teraz wykonać migawkę z pamięcią RAM lub bez pamięci RAM wykorzystywanej przez maszynę wirtualną. Jeśli wybierzesz opcję z pamięcią RAM, czas wykonania zadania będzie dłuższy, ale nie trzeba będzie wykonywać restartu podczas przywracania kopii. 

W drugim przypadku (bez kopii pamięci RAM) zadanie zostanie wykonane szybciej, ale konieczny będzie restart maszyny wirtualnej w przypadku przywracania danych.

![configurer snapshot](images/snapshot02.png){.thumbnail}

### Zarządzanie migawkami

Wszystkie migawki są dostępne w managerze kopii migawkowych. Naciśnij prawym przyciskiem myszy swoją maszynę wirtualną, wybierz opcję `Migawki`{.action}, a następnie `Zarządzaj migawkami`{.action}:

![gerer snapshots](images/snapshot03.png){.thumbnail}

### Usuwanie migawki

W managerze migawek wybierz migawkę, którą chcesz usunąć, a następnie kliknij `Usuń`{.action}.

Można usunąć wszystkie migawki maszyny wirtualnej za pomocą jednej operacji, klikając przycisk `Usuń wszystko`{.action}.

### Przywracanie migawki

W managerze migawek wybierz migawkę, którą chcesz przywrócić, a następnie kliknij `Przywróć`{.action}.

### Konsolidowanie migawek

Obecność nadmiarowych dysków może obniżać wydajność maszyn wirtualnych.

Konsolidacja migawek jest przydatną funkcją, gdy dyski migawek nie mogą się skompresować po operacji usunięcia. Po konsolidacji nadmiarowe dyski są usuwane, co poprawia wydajność maszyn wirtualnych i pozwala oszczędzić przestrzeń dyskową.

Aby przeprowadzić konsolidację, naciśnij prawym przyciskiem myszy maszynę wirtualną, wybierz opcję `Migawki`{.action}, a następnie `Konsoliduj`{.action}:

![consolidate snapshots](images/consolidate.png){.thumbnail}

Więcej informacji na ten temat znajdziesz w [dokumentacji VMware](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-2F4A6D8B-33FF-4C6B-9B02-C984D151F0D5.html){.external}.

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com>.
