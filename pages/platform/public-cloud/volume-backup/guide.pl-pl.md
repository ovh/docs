---
title: "Tworzenie kopii zapasowej wolumenu"
excerpt: "Dowiedz się, jak utworzyć kopię zapasową wolumenu Block Storage w Panelu klienta"
updated: 2023-03-29
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 29-03-2023**

## Wprowadzenie

Jeśli przywiązujesz dużą wagę do danych przechowywanych w wolumenach Block Storage, zorganizuj ich kopię zapasową, aby ograniczyć potencjalny wpływ problemów na dane, czy to z powodu błędu występującego u człowieka, czy z powodu incydentu na poziomie klastra.

Snapshot **wolumenu** to punkt odzysku przechowywany w tym samym klastrze przestrzeni dyskowej, co oryginalny wolumen. Operacje tworzenia i przywracania są szybkie, ale w przypadku awarii na klastrze, wolumen i wolumen Snapshot mogą być niedostępne.<br>
Tworzenie wolumenu Snapshot nie wymaga odłączenia wolumenu od instancji.

Backup **wolumenu** to obraz utworzony na podstawie wolumenu. Wolumen jest przechowywany w klastrze Object Storage w lokalizacji oryginalnego wolumenu.
Ten poziom odporności jest idealny i pozwala na szybką reakcję na każdy problem z wolumenem tworząc kolejny wolumen z kopii zapasowej.<br>
Tworzenie kopii zapasowej wolumenu wymaga odłączenia wolumenu od instancji.

Wolumen Snapshot oraz Backup Wolumenu pozwalają na:

- tworzenie kopii zapasowych wolumenu przy pomocy kilku kliknięć i przechowywanie ich tak długo, jak będzie to konieczne;
- korzystać z kopii zapasowych, aby przywrócić stan wolumenu;
- Użyj kopii zapasowych jako szablonu do tworzenia identycznych wolumenów.

**Niniejszy przewodnik wyjaśnia, jak utworzyć kopię zapasową wolumenu Block Storage w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Zalogowanie do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Wolumen [Block storage](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance) utworzony w Twoim projekcie [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/)

## W praktyce

Zaloguj się do Panelu [klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud.

Następnie otwórz menu `Block Storage`{.action} na pasku nawigacji po lewej stronie w **usłudze Storage**.

Po prawej stronie wybranego wolumenu kliknij przycisk `...`{.action} a następnie `Utwórz kopię zapasową`{.action}. Nie ma potrzeby odłączania najpierw wolumenu od instancji. Jeśli jednak chcesz odłączyć wolumen od instancji, sprawdź tę [sekcję](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance#linux) odpowiedniego przewodnika dla systemu Linux i tę [sekcję](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance#windows) dla systemu Windows.

![Backup - tworzenie](images/volumebackup01.png){.thumbnail}

Jeśli wybrałeś opcję Block Storage, należy podać odpowiedni wolumen. W przeciwnym razie wybierz wolumen, który chcesz zapisać.

Wybierz rodzaj kopii zapasowej, którą chcesz utworzyć: **Snapshot wolumenu** lub **Backup** wolumenu.

- Wybierając **Volume Snapshot**, będziesz mógł zmienić nazwę wolumenu Snapshot, który chcesz utworzyć przed zatwierdzeniem za pomocą przycisku `Utwórz kopię zapasową`{.action}.
- Wybierając **Volume Backup** zostaniesz poproszony o odłączenie wolumenu od instancji, aby móc kontynuować. Przed zatwierdzeniem operacji za pomocą przycisku `Utwórz kopię zapasową`{.action}, będziesz mógł zmienić nazwę utworzonego wolumenu.

![Backup lub Snapshot - tworzenie](images/volumebackup02.png){.thumbnail}

Czas tworzenia kopii zapasowej, niezależnie od tego, czy jest to wolumen Snapshot, czy Backup Wolumenu, może zająć kilka godzin, w zależności od ilości danych zapisanych na woluminie, wykorzystania zasobów instancji do wolumenu Snapshot oraz innych czynników specyficznych dla hosta.

> [!primary]
>
> **Dobre praktyki:**
>
> - wykonuj kopie zapasowe wolumenu poza godzinami produkcji;
> - unikaj tworzenia snapshotów w godzinach szczytu (od 04:00 do 22:00 czasu paryskiego);
> - zainstaluj agenta qemu-guest, jeśli nie jest to zrobione lub spróbuj go wyłączyć, jeśli to konieczne;
> - spróbuj nie przeciągać serwera zbyt dużo w fazie tworzenia snapshota (ograniczenie I/O, zużycie pamięci RAM, itp.).
> - nawet jeśli opcja ta nie jest obowiązkowa, wolałbyś odłączyć wolumen podczas tworzenia wolumenu Snapshot;
> - regularnie sprawdzaj, czy jesteś w stanie odzyskać dane z wolumenu Snapshot lub z kopii zapasowej wolumenu.
>

Snapshot wolumenu lub Backup wolumen to klon całego dysku. Będzie on miał maksymalny rozmiar oryginalnego wolumenu, bez względu na rzeczywistą alokację przestrzeni dyskowej.

Listę kopii zapasowych wolumenu Snapshot znajdziesz w sekcji `Volume Snapshot`{.action} na pasku po lewej stronie.
Po utworzeniu wolumenu Snapshot zostanie wyświetlony na tej liście.

![Snapshot - lista](images/volumebackup03.png){.thumbnail}

Listę kopii zapasowych wolumenu znajdziesz w sekcji `Volume Backup`{.action} na pasku po lewej stronie.
Po otrzymaniu wniosku o utworzenie wolumenu Backup zostaje on dodany do listy.

![Kopia zapasowa - lista](images/volumebackup04.png){.thumbnail}

Kliknij przycisk `...`{.action}, aby `usun`{.action} lub `Utwórz wolumen`{.action} na podstawie wolumenu Snapshot lub odpowiedniego wolumenu Backup.

Więcej informacji na ten temat znajdziesz w [naszym przewodniku dotyczącym tworzenia wolumenu z kopii zapasowej](/pages/platform/public-cloud/create-volume-from-snapshot).

![Tworzenie wolumenu z kopii zapasowej](images/volumebackup05.png){.thumbnail}

## Sprawdź również

[Tworzenie wolumenu z kopii zapasowej](/pages/platform/public-cloud/create-volume-from-snapshot)

[Tworzenie i konfigurowanie dodatkowego dysku dla instancji](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance)

[Zwiększ rozmiar dodatkowego dysku](/pages/platform/public-cloud/create_and_configure_an_additional_disk_on_an_instance)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
