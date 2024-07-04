---
title: 'Tworzenie kopii zapasowej instancji'
excerpt: 'Dowiedz się, jak utworzyć kopię zapasową instancji Public Cloud w Panelu klienta OVHcloud'
updated: 2024-07-03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Możesz utworzyć kopię zapasową instancji lub skonfigurować harmonogram, aby zautomatyzować tworzenie kopii zapasowych instancji. Kopie zapasowe mogą być używane do przywrócenia instancji do wcześniejszego stanu lub do utworzenia nowej identycznej instancji.

**Niniejszy przewodnik wyjaśnia, jak tworzyć ręczne i automatyczne kopie zapasowe instancji Public Cloud.**

## Wymagania początkowe

- Posiadanie instancji [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/) na Twoim koncie OVHcloud
- Dostęp do [Panelu client OVHcloud](/links/manager)

## W praktyce

### Tworzenie kopii zapasowej instancji

> [!warning]
> Ta opcja jest dostępna tylko przez **Cold Snapshot** dla instancji Metal. Instancja Metal przejdzie do trybu Rescue. Po wykonaniu kopii zapasowej instancja zostanie zrestartowana w trybie normalnym.
>

Zaloguj się do [Panelu client OVHcloud](/links/manager) i otwórz swój projekt `Public Cloud`{.action}. Następnie kliknij `Instances`{.action} w menu po lewej stronie.

Kliknij przycisk `...`{.action} po prawej stronie instancji i wybierz `Utwórz kopię zapasową`{.action}.

![public-cloud-instance-backup](images/createbackup1.png){.thumbnail}

Wpisz nazwę kopii zapasowej na następnej stronie. Zapoznaj się z informacjami dotyczącymi cennika i kliknij na `Zatwierdź`{.action}.

![public-cloud-instance-backup](images/createbackup2.png){.thumbnail}

Nie jest możliwe monitorowanie postępu tworzenia kopii zapasowej w czasie rzeczywistym. Jednak w sekcji `Instance Backup`{.action} pod `Storage`{.action} w menu po lewej stronie, status `Trwa tworzenie kopii` będzie wyświetlany podczas procesu.

![public-cloud-instance-backup](images/backup_in_progress.png){.thumbnail}

Po utworzeniu kopii zapasowej będzie ona dostępna w sekcji `Instance Backup`{.action} pod `Storage`{.action} w menu po lewej stronie.

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

Planowanie może zostać utworzone i usunięte w sekcji `Workflow Management`{.action}, która znajduje się pod `Storage`{.action} w menu po lewej stronie.

![public-cloud-instance-backup](images/createbackup9.png){.thumbnail}

Kopie zapasowe instancji są zarządzane w sekcji `Instance Backup`{.action}, która znajduje się pod rubryką `Storage`{.action} w menu po lewej stronie.

![public-cloud-instance-backup](images/createbackup10.png){.thumbnail}

> [!warning]
> Opcja kopii zapasowej instancji musi zostać usunięta oddzielnie, jeśli nie chcesz już ponosić za nią opłat. Usunięcie instancji nie powoduje usunięcia powiązanych z nią opcji.
>

> [!warning]
> **Nie można usunąć kopii instancji, jeśli instancja uruchomiona z tej kopii zapasowej jest uruchomiona w czasie wykonywania akcji usuwania.**

Dowiedz się, jak w [tym przewodniku](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup) wykorzystać kopie zapasowe do klonowania lub przywracania instancji.

## Sprawdź również

[Tworzenie/ przywracanie serwera wirtualnego na podstawie kopii zapasowej](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.