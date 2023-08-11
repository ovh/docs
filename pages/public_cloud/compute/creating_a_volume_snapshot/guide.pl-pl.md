---
title: Snapshot wolumenu instancji Public Cloud
excerpt: Dowiedz się, jak utworzyć snapshot dodatkowego dysku Public Cloud
updated: 2023-04-21
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

**Ostatnia aktualizacja z dnia 21-04-2023**

## Wprowadzenie

Snapshot **wolumenu** to punkt odzysku przechowywany w tym samym klastrze przestrzeni dyskowej, co oryginalny wolumen. Operacje tworzenia i przywracania są szybkie, ale w przypadku awarii na klastrze, wolumen i wolumen Snapshot mogą być niedostępne.<br>
Tworzenie wolumenu Snapshot nie wymaga odłączenia wolumenu od instancji.

Nie należy tego mylić z Backup **wolumenu** to obraz utworzony na podstawie wolumenu. Wolumen jest przechowywany w klastrze Object Storage w lokalizacji oryginalnego wolumenu.
Ten poziom odporności jest idealny i pozwala na szybką reakcję na każdy problem z wolumenem tworząc kolejny wolumen z kopii zapasowej.<br>
Tworzenie kopii zapasowej wolumenu wymaga odłączenia wolumenu od instancji. Więcej informacji na temat tej opcji można znaleźć w tym [przewodniku](/pages/public_cloud/compute/volume-backup).

Tworzenie snapshota dodatkowego wolumenu zwykle odpowiada dwóm celom:

- wykonywanie kopii zapasowych za pomocą kilku kliknięć i zachowanie czasu potrzebnego do wykonania;
- użyć snapshota jako szablonu dla tych samych wolumenów.

**Niniejszy przewodnik wyjaśnia, jak utworzyć w Panelu klienta snapshot wolumenu.**

## Wymagania początkowe

- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Wolumen [Block storage](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) utworzony w Twoim projekcie [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/)

## W praktyce

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. Następnie kliknij `Block Storage`{.action} na pasku nawigacji po lewej stronie w **Storage**.

![Snapshoty wolumenów](images/volume_snapshot01.png){.thumbnail}

Po prawej stronie wybranego wolumenu kliknij `...`{.action} a następnie `Utwórz snapshot`{.action} (nie ma potrzeby odłączania wolumenu od instancji.) Jeśli jednak chcesz odłączyć wolumen, zapoznaj się z [tą sekcją](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#linux_1) odpowiedniego przewodnika dla systemu Linux i [tą sekcją](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance#windows_1) dla systemu Windows.

![Snapshoty wolumenów](images/volume_snapshot02.png){.thumbnail}

W oknie, które się pojawi możesz nadać inną nazwę snapshotowi. Zapoznaj się z informacjami dotyczącymi cennika, następnie kliknij `Utwórz snapshot`{.action}.

Czas tworzenia snapshota zależy od ilości danych zawartych w woluminie, wykorzystania zasobów instancji w momencie wykonania snapshota oraz innych czynników specyficznych dla hosta.

Zalecamy zatem wykonywanie kopii zapasowych snapshot poza godzinami produkcji.

Oto kilka innych dobrych praktyk:

- unikaj tworzenia snapshotów w godzinach szczytu (od 04:00 do 22:00 czasu paryskiego);
- zainstaluj agenta qemu-guest, jeśli nie jest to zrobione lub spróbuj go wyłączyć, jeśli to konieczne;
- staraj się nie przesadzać z serwerem podczas fazy tworzenia snapshota (ograniczenie I/O, zużycie pamięci RAM, itp.).

Ponieważ snapshot wolumenu jest klonem całego dysku, będzie miał maksymalny rozmiar oryginalnego wolumenu, niezależnie od rzeczywistego przydziału przestrzeni dyskowej.

![Snapshoty wolumenów](images/volume_snapshot03.png){.thumbnail}

Otwórz sekcję `Volume Snapshot`{.action} na pasku nawigacyjnym po lewej stronie. Po utworzeniu snapshota zostanie on dodany do tej tabeli.

Kliknij przycisk `...`{.action}, aby usunąć snapshot lub Utwórz wolumen z odpowiedniego snapshota. Więcej informacji znajdziesz w [tym przewodniku](/pages/public_cloud/compute/create-volume-from-snapshot).

## Sprawdź również

[Tworzenie kopii zapasowej wolumenu](/pages/public_cloud/compute/volume-backup)

[Tworzenie wolumenu z kopii zapasowej](/pages/public_cloud/compute/create-volume-from-snapshot)

[Zarządzanie wolumenem instancji Public Cloud](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

[Zwiększenie rozmiaru dodatkowego dysku](/pages/public_cloud/compute/increase_the_size_of_an_additional_disk)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.