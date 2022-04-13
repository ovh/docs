---
title: 'Tworzenie kopii zapasowej instancji'
slug: kopia_zapasowa_instancji
excerpt: 'Dowiedz się, jak utworzyć kopię zapasową instancji Public Cloud w Panelu klienta OVHcloud'
section: 'Zarządzanie w Panelu klienta OVH'
order: 1
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 28-02-2022**

## Wprowadzenie

Możesz utworzyć kopię zapasową instancji lub skonfigurować harmonogram, aby zautomatyzować tworzenie kopii zapasowych instancji. Kopie zapasowe mogą być używane do przywrócenia instancji do wcześniejszego stanu lub do utworzenia nowej identycznej instancji.

**Niniejszy przewodnik wyjaśnia, jak tworzyć ręczne i automatyczne kopie zapasowe instancji Public Cloud.**

## Wymagania początkowe

- Posiadanie instancji [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce

### Tworzenie kopii zapasowej instancji

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i otwórz swój projekt `Public Cloud`{.action}. Następnie kliknij `Instances`{.action} w menu po lewej stronie.

Kliknij przycisk `...`{.action} po prawej stronie instancji i wybierz `Utwórz kopię zapasową`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Wpisz nazwę kopii zapasowej na następnej stronie. Zapoznaj się z informacjami dotyczącymi cennika i kliknij na `Zatwierdź`{.action}.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Po utworzeniu kopii zapasowej będzie ona dostępna w sekcji `Instance Backup`{.action}.

![public-cloud-instance-backup](images/createbackup3.png){.thumbnail}

### Tworzenie zautomatyzowanych kopii zapasowych instancji

Kliknij przycisk `...`{.action} po prawej stronie instancji i wybierz `Utwórz automatyczną`{.action} kopię zapasową.

![public-cloud-instance-backup](images/createbackup4.png){.thumbnail}

Następnie będziesz mógł skonfigurować następujące parametry kopii zapasowej:

#### **Workflow (Przepływ pracy)** 

Aktualnie istnieje tylko jeden przepływ pracy. Tworzy kopię zapasową instancji i jej głównego woluminu.

![public-cloud-instance-backup](images/createbackup5.png){.thumbnail}

#### **Zasoby** 

Możesz wybrać instancję do zapisania.

![public-cloud-instance-backup](images/createbackup6.png){.thumbnail}

#### **Harmonogram** 

Możesz zdefiniować spersonalizowane planowanie kopii zapasowych lub wybrać jedną z domyślnych częstotliwości:

- Codzienna kopia zapasowa z retencją ostatnich 7 kopii zapasowych
- Codzienna kopia zapasowa z retencją ostatnich 14 kopii zapasowych

![public-cloud-instance-backup](images/createbackup7.png){.thumbnail}

#### **Nazwa** 

Wprowadź nazwę do automatycznego planowania tworzenia kopii zapasowych. Zapoznaj się z informacjami na temat cennika i utwórz harmonogram, klikając przycisk `Utwórz`{.action}.
 
![public-cloud-instance-backup](images/createbackup8.png){.thumbnail}

### Zarządzanie kopiami zapasowymi i planami

Planowanie może zostać utworzone i usunięte w sekcji `Workflow Management`{.action} w Twoim Panelu klienta Public Cloud.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Kopie zapasowe instancji są zarządzane w sekcji `Instance Backup`{.action} w Panelu klienta Public Cloud.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

Dowiedz się, jak w [tym przewodniku](https://docs.ovh.com/pl/public-cloud/tworzenie_przywracanie_serwera_wirtualnego_na_podstawie_kopii_zapasowej/) wykorzystać kopie zapasowe do klonowania lub przywracania instancji.

## Sprawdź również

[Tworzenie/ przywracanie serwera wirtualnego na podstawie kopii zapasowej](https://docs.ovh.com/pl/public-cloud/tworzenie_przywracanie_serwera_wirtualnego_na_podstawie_kopii_zapasowej/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.