---
title: 'Tworzenie / przywracanie serwera wirtualnego na podstawie kopii zapasowej'
excerpt: 'Dowiedz się, jak utworzyć lub przywrócić kopię zapasową instancji'
updated: 2025-10-15
---

## Wprowadzenie

Panel klienta OVHcloud pozwala na tworzenie [kopii zapasowych instancji](/pages/public_cloud/compute/save_an_instance) za pomocą kilku kliknięć i zautomatyzowanie tego procesu.
Może zajść konieczność przywrócenia instancji z kopii zapasowej, np. w przypadku błędu podczas konfigurowania Twojej instancji. Kopie zapasowe instancji mogą być używane z dwóch powodów:

- Utwórz instancję na podstawie kopii zapasowej, aby duplikować oryginalną instancję. Na przykład, jeśli skonfigurujesz infrastrukturę równoważenia obciążenia (load balancing).
- Przywracanie instancji z kopii zapasowej. Na przykład, jeśli ostatnie zmiany uszkodziły krytyczne konfiguracje dla instancji.

**Dowiedz się, jak używać kopii zapasowych do duplikowania lub przywracania instancji.**

## Wymagania początkowe

- Posiadanie kopii zapasowej [instancji Public Cloud](/links/public-cloud/instance-backup). Należy zapoznać się w tym celu z [instrukcją tworzenia kopii zapasowej](/pages/public_cloud/compute/save_an_instance).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## W praktyce

### Tworzenie instancji na podstawie kopii zapasowej

> [!tabs]
> Przez Panel klienta OVHcloud
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Public Cloud`{.action} i wybierz projekt Public Cloud.<br>
>> Następnie kliknij `Kopia zapasowa instancji`{.action} w lewym pasku nawigacyjnym pod **Compute**.
>>
>> ![public-cloud-instance-backup](images/restorebackup01.png){.thumbnail}
>>
>> Kliknij przycisk `...`{.action} w wierszu odpowiedniej kopii zapasowej, a następnie wybierz `Utwórz instancję`{.action}.
>>
>> Zobaczysz skróconą wersję strony tworzenia instancji, gdzie możesz określić niektóre opcje.
>>
>> ![public-cloud-instance-backup](images/restorebackup02.png){.thumbnail}
>>
>> Niektóre elementy są wstępnie zdefiniowane:
>>
>> - **Lokalizacja**: Twoja instancja zostanie utworzona w tym samym centrum danych, co kopia zapasowa.
>> - **Obraz**: Obraz będzie odpowiadać Twojej kopii zapasowej.
>> - **Model**: Dostępne są tylko modele kompatybilne z Twoim obrazem, w zależności od Twojej kwoty.
>>
>> ![public-cloud-instance-backup](images/restorebackup03.png){.thumbnail}
>>
>> Wybierz nazwę nowej instancji, klucz SSH, vRack i okres rozliczeniowy, a następnie kliknij przycisk `Utwórz instancję`{.action}.
>>
>> Aby uzyskać więcej informacji na temat tworzenia instancji, skorzystaj z [tego przewodnika](/pages/public_cloud/compute/public-cloud-first-steps).
>>
>> > [!primary]
>> >
>> > Aby utworzyć instancję w innym centrum danych, musisz najpierw przenieść kopię zapasową do odpowiedniej strefy. Skorzystaj z naszego przewodnika, aby [przenieść kopię zapasową instancji](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>> >
>>
> Przez OpenStack CLI
>>
>> Aby utworzyć instancję z kopii zapasowej, użyj identyfikatora kopii zapasowej jako obrazu z tym poleceniem:
>>
>> ```bash
>> $ openstack server create --key-name SSHKEY --flavor 98c1e679-5f2c-4069-b4da-4a4f7179b758 --image 0a3f5901-2314-438a-a7af-ae984dcbce5c Server1_from_snap
>> ```
>>
> Przez Horizon
>> W interfejsie Horizon kliknij `Compute`{.action} w lewym menu, a następnie `Images`{.action}. Znajdź odpowiedni obraz i kliknij przycisk `Launch`{.action} po prawej stronie wiersza obrazu.
>>
>> ![public-cloud-instance-backup-horizon](images/restorebackuphorizon1.png){.thumbnail}
>>
>> Nadaj instancji nazwę w odpowiednim polu i określ liczbę instancji do utworzenia. Następnie kliknij kartę `Flavor`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-2](images/restorebackuphorizon2.png){.thumbnail}
>>
>> Wybierz żądany model instancji, a następnie kliknij kartę `Networks`{.action}.
>>
>> > [!warning]
>> >
>> > Jeśli Twoja instancja to serwer Windows, musisz wybrać model typu win-xx-xx (np. win-b2-15) i mieć publiczny interfejs na sieci Ext-Net. Bez tych warunków uwierzytelnienie z OVHcloud KMS nie będzie możliwe, a Twój serwer pozostanie z [nieaktywowaną licencją](/pages/public_cloud/compute/activate-windows-license-private-mode). Może to prowadzić do ograniczeń, w tym braku aktualizacji. Zwróć uwagę, że nie można zmienić rozmiaru instancji Linux (np. b2-15) na instancję Windows (np. win-b2-15). Aby dokonać tej zmiany, musisz utworzyć nową instancję.
>> >
>>
>> ![public-cloud-instance-backup-horizon-3](images/restorebackuphorizon3.png){.thumbnail}
>>
>> Wybierz sieć, którą chcesz przypisać, a następnie kliknij przycisk `Launch Instance`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-4](images/restorebackuphorizon4.png){.thumbnail}
>>
>> Status nowej instancji możesz sprawdzić w `Compute`{.action} w lewym menu, a następnie klikając `Instances`{.action}.
>>
>> ![public-cloud-instance-backup-horizon-5](images/restorebackuphorizon5.png){.thumbnail}
>>
> Przez OVHcloud API <a name="createinstanceviaapi"></a>
>> > [!api]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance
>> >
>>
>> Wypełnij zmienne:
>>
>> - **serviceName** : ID projektu OVHcloud.
>> - **regionName** : Nazwa regionu, w którym zostanie umieszczona instancja.
>>
>> Przykład treści żądania:
>>
>> ```json
>> {
>>   "billingPeriod": "hourly",
>>   "bootFrom": {
>>     "imageId": "5cb8ea68-****-****-****-820be8346***"
>>   },
>>   "flavor": {
>>     "id": "e81b46f8-****-****-****-cad655e65***"
>>   },
>>   "name": "newInstance",
>>   "network": {
>>     "public": true
>>   },
>>   "sshKey": {
>>     "name": "MySSHKey"
>>   }
>> }
>> ```
>>

### Przywracanie instancji z kopii zapasowej

> [!tabs]
> Przez Panel klienta OVHcloud
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud.<br>
>> Następnie kliknij pozycję `Instancje`{.action} na lewym pasku nawigacyjnym w obszarze **Środowisko obliczeniowe**.
>>
>> ![public-cloud-instance-backup](images/restorebackup04.png){.thumbnail}
>>
>> Kliknij przycisk `...`{.action} w wierszu odpowiedniej instancji, a następnie wybierz `Edytuj`{.action}.
>>
>> Powoduje otwarcie strony do edycji instancji, w której można zmienić:
>>
>> - nazwa instancji;
>> - obraz instancji;
>> - model instancji;
>> - tryb rozliczenia dla instancji (tylko od "Godzinowe" do "Miesięczne").
>>
>> Jeśli potrzebujesz wykonać zmiany, przejdź do zakładki `Kopie zapasowe`{.action} w sekcji "Obraz".
>>
>> ![public-cloud-instance-backup](images/restorebackup05.png){.thumbnail}
>>
>> Wybierz z listy dostępnych kopii zapasowych. Kliknij na `Zmień obraz`{.action}, jeśli masz pewność, że chcesz zastąpić bieżący obraz kopią zapasową.
>>
>> Instancja będzie miała status `Reinstalacja` do czasu zakończenia procesu. Może być konieczne odświeżenie strony w przeglądarce, aby zobaczyć bieżący stan.
>>
>> > [!warning]
>> >
>> > Zgodnie z informacją zawartą w ostrzeżeniu, dane dodane po utworzeniu kopii zapasowej zostaną utracone.
>> >
>>
> Przez OVHcloud API
>> > [!API]
>> >
>> > @api {v1} /cloud POST /cloud/project/{serviceName}/region/{regionName}/instance/{instanceId}/reinstall
>> >
>>
>> Uzupełnij zmienne:
>>
>> - **serviceName** : ID projektu OVHcloud.
>> - **regionName** : Nazwa regionu, w którym znajduje się instancja źródłowa.
>> - **instanceId** : unikalny identyfikator instancji.
>>
>> Przykład treści zapytania:
>>
>> ```json
>> {
>>   "imageId": "5cb8ea68-****-****-****-820be8346***",
>>   "imageRegionName": "GRA11"
>> }
>> ```
>>

## Sprawdź również

[Tworzenie i logowanie do pierwszej instancji Public Cloud](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Tworzenie kopii zapasowej instancji](/pages/public_cloud/compute/save_an_instance)

Dołącz do [grona naszych użytkowników](/links/community).