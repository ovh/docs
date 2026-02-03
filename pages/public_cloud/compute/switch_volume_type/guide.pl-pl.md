---
title: Zmień wolumen Block Storage
excerpt: "Dowiedz się, jak zmienić typ wolumenu block storage przy użyciu technologii Openstack"
updated: 2026-01-13
---

## Wprowadzenie

Celem niniejszego przewodnika jest pokazanie, jak zmienić rodzaj wolumenu Block Storage, z Classic lub High Speed na High Speed gen2.

## Wymagania początkowe

- Dostęp do [Panelu klienta OVHcloud](/links/manager) lub do [interfejsu Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon).
- Wolumen [Block Storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) utworzony w Twoim projekcie [Public Cloud](/links/public-cloud/public-cloud).

## W praktyce

W przypadku zmiany typu wolumenu Block Storage na wolumin "High speed gen2", polityka migracji musi zostać zmieniona z `Never` na `On Demand`.

Domyślnie polityka migracji jest ustawiona na `Never`, ponieważ wolumin pozostaje w tym samym klastrze CEPH. W przypadku "High speed gen2" wolumin musi zostać przeniesiony do nowego klastra.

Modyfikacja ta może zostać przeprowadzona za pośrednictwem interfejsu Horizon lub interfejsu wiersza polecenia OpenStack.

> [!warning]
>
> Jeśli wolumin Block Storage jest dołączone do instancji, musisz go najpierw odłączyć, zanim przejdziesz dalej. Aby uzyskać więcej informacji, zobacz sekcję **Odłącz wolumen** przewodnika "[Zarządzanie wolumenem instancji Public Cloud](/pages/public_cloud/Compute/create_and_configure_an_additional_disk_on_an_instance#detach-a-volume)".
>
> Zmiana typu woluminu (retypowanie) za pomocą Panelu klienta OVHcloud lub OVHcloud API jest możliwa tylko dla niezaszyfrowanych woluminów. Zaszyfrowane woluminy typu **-LUKS** nie mogą być retypowane za pomocą tych interfejsów.
>
> Retypowanie jest obsługiwane za pomocą OpenStack / Horizon tylko dla woluminów **-LUKS** do **-LUKS**. W takim przypadku, przywracanie woluminu po retypowaniu nie jest możliwe.
>
> Konwersje z **-LUKS** do **nie-LUKS** (lub odwrotnie) nie są obsługiwane, w tym za pomocą OpenStack / Horizon.
>

> [!tabs]
> Za pomocą Panelu klienta OVHcloud
>>
>> Zaloguj się do [Panelu klienta OVHcloud](/links/manager), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. Następnie kliknij `Block Storage`{.action} w lewym menu pod **Storage & Backup**.
>>
>> Znajdź odpowiedni wolumin na liście, a następnie kliknij przycisk `...`{.action} po prawej stronie. Wybierz `Zmień typ woluminu`{.action}.
>>
>> Otwiera się nowe okno, wyświetlane są dostępne typy woluminów. Wybierz żądany typ, a następnie potwierdź, klikając `Edytuj`{.action}.
>>
>> > [!primary]
>> >
>> > Zmiana typu woluminu (retypowanie) może zająć kilka minut.
>> >
>>
> Za pomocą interfejsu Horizon
>>
>> Zaloguj się do [interfejsu Horizon](https://horizon.cloud.ovh.net/auth/login/) i upewnij się, że jesteś w odpowiednim regionie. Możesz to sprawdzić w lewym górnym rogu. 
>>
>> ![Wybór regionu](images/region2021.png){.thumbnail}
>>
>> Następnie kliknij menu `Volumes`{.action} po lewej stronie i kliknij `Volumes`{.action}.
>> Kliknij strzałkę rozwijaną obok `Edit Volume`{.action} i wybierz `Change Volume Type`{.action}.
>>
>> ![Wybór opcji](images/selectoption.png){.thumbnail}
>>
>> W oknie dialogowym kliknij rozwijane menu pod `Type` i wybierz `high-speed-gen-2`{.action}. Następnie kliknij strzałkę rozwijaną pod ``Migration Policy`, i wybierz `On Demand`{.action}.
>>
>> Po wykonaniu kliknij `Change Volume Type`{.action}, aby potwierdzić zmianę.
>>
>> ![Wybór opcji](images/changevolume.png){.thumbnail}
>>
> Za pomocą OpenStack CLI
>>
>> Upewnij się, że zapoznałeś się z poniższym przewodnikiem przed kontynuowaniem:
>>
>> - [Przygotowanie środowiska do korzystania z API OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api).
>>
>> Najpierw wylistuj typy woluminów dostępne w Twoim regionie za pomocą poniższego polecenia:
>>
>> ```bash
>> #~$ openstack volume type list
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | ID                                   | Name                                               | Is Public |
>> +--------------------------------------+----------------------------------------------------+-----------+
>> | 27844ef7-1a9a-4944-be59-6e4eb19a71f6 | high-speed-gen2                                    | True      |
>> | 23f75fef-d4f6-416a-a884-95aa3fd45695 | classic                                            | True      |
>> | 2f78e8af-93c9-4e5c-b177-83c4a7ec456a | high-speed                                         | True      |
>> | 9c5b1e42-3d8f-4a67-a9d2-84f3b2e7c1aa | high-speed-gen2-luks                               | True      |
>> | f41d7c8e-6a2b-4b91-9e73-2d6c0a58e94f | classic-luks                                       | True      |
>> | c8e92a5d-0f6e-4e3b-b1a4-7a9d6f3c2e8b | high-speed-luks                                    | True      |
>> ---------------------------------------------------------------------------------------------------------
>> ```
>>
>> > [!warning]
>> >
>> > Zwróć uwagę, że jeśli typy woluminów "high-speed-gen2" lub **-LUKS** nie pojawiają się na liście, oznacza to, że nie są dostępne w tym regionie.
>> >
>> > Typy woluminów **-LUKS** są wyświetlane tylko wtedy, gdy są obsługiwane w regionie i kompatybilne z typem szyfrowania woluminu.
>> >
>>
>> Następnie zmień typ woluminu za pomocą poniższego polecenia:
>>
>> ```bash
>> $ openstack volume set --type <VOLUME_TYPE> --retype-policy on-demand <VOLUME_NAME_OR_ID>
>> ```
>>

## Sprawdź również

Aby dowiedzieć się, jak migrować wolumen Block Storage do zaszyfrowanego wolumenu LUKS, zapoznaj się z naszym przewodnikiem [Migrating a Block Storage volume to an encrypted LUKS volume](/pages/public_cloud/compute/migrating-non-encrypted-to-encrypted-volume) (EN).

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](/links/professional-services), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do [grona naszych użytkowników](/links/community).