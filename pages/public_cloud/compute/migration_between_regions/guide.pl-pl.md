---
title: 'Migracja instancji między różnymi regionami'
excerpt: 'Przewodnik opisuje, jak migrować instancję OVHcloud Public Cloud między dwoma regionami, 1AZ i 3AZ. Obejmuje kroki tworzenia kopii zapasowej, transferu i ponownego tworzenia, z instrukcjami za pomocą Managera, Horizon lub OpenStack CLI.'
updated: 2025-10-15
---

## Wprowadzenie

Ten przewodnik wyjaśnia, jak migrować instancję Public Cloud z jednego regionu do drugiego, z 1AZ do 3AZ lub odwrotnie. Skupia się na kluczowych krokach (kopia zapasowa, transfer i ponowne tworzenie) i przekierowuje do szczegółowych przewodników dla każdego elementu.

## Wymagania początkowe

- Posiadanie [instancji Public Cloud](/pages/public_cloud/compute/public-cloud-first-steps).
- Dostęp do [Panelu klienta OVHcloud](/links/manager).

## Instrukcje

> [!primary]
>
> Przed migracją instancji ważne jest, by zrozumieć różnice między typami wdrożeń oferowanymi w Public Cloud OVHcloud. Każdy tryb (1AZ, 3AZ lub Local Zones) ma bezpośredni wpływ na odporność, dostępność i projekt Twojej infrastruktury.
>
> Aby uzyskać więcej informacji, zapoznaj się z dokumentacją: [Comparison and resilience of Deployment Modes - Understanding 3-AZ / 1-AZ / Local Zones (EN)](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).
>

### Krok 1. Utwórz kopię zapasową instancji

Zacznij od utworzenia kopii zapasowej instancji, która ma zostać przeniesiona, lub użyj istniejącej, jeśli nadal jest ważna.

OVHcloud oferuje dwa typy kopii zapasowych, z różnymi zachowaniami w zależności od typu migracji:

- Lokalna kopia zapasowa: Wymaga ręcznego transferu, jeśli przenosisz ją do innego regionu lub AZ.
- Kopia zapasowa zdalna (**zalecana**): Automatycznie zarządzana przez OVHcloud, lokalna kopia zapasowa jest replikowana w wybranym regionie. Nie wymaga ręcznego transferu.

> [!primary]
>
> Jeśli Twoja lokalna kopia zapasowa została wykonana w regionie 3AZ i chcesz ponownie utworzyć instancję w innym AZ w tym samym regionie, nie jest wymagany transfer.
>
> Lokalne kopie zapasowe są dostępne ze wszystkich stref dostępności w regionie 3AZ. Możesz przejść bezpośrednio do etapu ponownego tworzenia instancji.
>
> Obecnie tworzenie odległej kopii zapasowej nie jest dostępne za pomocą Panelu klienta OVHcloud. Można to zrobić tylko za pomocą API OVHcloud lub OpenStack.
>

Instancję można zabezpieczyć:

- za pomocą Panelu klienta OVHcloud.
- za pomocą API OVHcloud.
- za pomocą OpenStack CLI.
- za pomocą Horizon.

Znajdź wszystkie szczegółowe informacje w sekcji **Tworzenie kopii zapasowej instancji** w naszym przewodniku "[Tworzenie kopii zapasowej instancji](/pages/public_cloud/compute/save_an_instance)".

### Krok 2. Przenieś kopię zapasową do innego regionu

> [!primary]
>
> Jeśli używasz kopii zapasowej zdalnej, możesz przejść bezpośrednio do [kroku 3. Przywróć instancję w nowym regionie](#step3recreateinstance).
>

> [!tabs]
> Przez Openstack CLI
>> Aby przenieść kopię zapasową z jednego AZ do drugiego za pomocą Openstack CLI, postępuj zgodnie z naszym przewodnikiem: [Pobieranie i przesyłanie kopii zapasowej instancji z jednego regionu OpenStack do innego](/pages/public_cloud/compute/transfer_instance_backup_from_one_datacentre_to_another).
>>

### Krok 3. Przywróć instancję w nowym regionie <a name="step3recreateinstance"></a>

Instancję można przywrócić w nowym regionie:

- za pomocą Panelu klienta OVHcloud.
- za pomocą API OVHcloud.
- za pomocą OpenStack CLI.
- za pomocą Horizon.

Znajdź wszystkie szczegółowe informacje w sekcji **Tworzenie instancji na podstawie kopii zapasowej** w naszym przewodniku "[Tworzenie / przywracanie serwera wirtualnego na podstawie kopii zapasowej](/pages/public_cloud/compute/create_restore_a_virtual_server_with_a_backup)".

## Sprawdź również

Dołącz do [grona naszych użytkowników](/links/community).