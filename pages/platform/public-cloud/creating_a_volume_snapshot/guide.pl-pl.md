---
title: Snapshot wolumenu instancji Public Cloud
slug: migawka-wolumenu
excerpt: Dowiedz się, jak utworzyć snapshot dodatkowego dysku Public Cloud
section: Przestrzeń dyskowa
order: 2
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 13-01-2023**

## Wprowadzenie

Tworzenie snapshota dodatkowego wolumenu zwykle odpowiada dwóm celom:

- wykonywanie kopii zapasowych za pomocą kilku kliknięć i zachowanie czasu potrzebnego do wykonania;
- użyć snapshota jako szablonu dla tych samych wolumenów.

**Niniejszy przewodnik wyjaśnia, jak utworzyć w Panelu klienta snapshot wolumenu.**

## Wymagania początkowe

- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)
- Wolumen [Block storage](../utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji/) utworzony w Twoim projekcie [Public Cloud](https://www.ovhcloud.com/pl/public-cloud/)

## W praktyce

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Public Cloud`{.action} i wybierz odpowiedni projekt Public Cloud. Następnie kliknij `Block Storage`{.action} na pasku nawigacji po lewej stronie w **Storage**.

![Snapshoty wolumenów](images/volume_snapshot01.png){.thumbnail}

Po prawej stronie wybranego wolumenu kliknij `...`{.action} a następnie `Utwórz snapshot`{.action} (nie ma potrzeby odłączania wolumenu od instancji.)

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

Kliknij przycisk `...`{.action}, aby usunąć snapshot lub Utwórz wolumen z odpowiedniego snapshota. Więcej informacji znajdziesz w [tym przewodniku](../create-volume-from-backup/).

## Sprawdź również

[Tworzenie wolumenu z kopii zapasowej](../create-volume-from-backup/)

[Zarządzanie wolumenem instancji Public Cloud](../utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji/)

[Zwiększenie rozmiaru dodatkowego dysku](../zwiekszenie_rozmiaru_dodatkowego_dysku/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.