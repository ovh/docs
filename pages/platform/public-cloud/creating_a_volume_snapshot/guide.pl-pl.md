---
title: Snapshot wolumenu instancji Public Cloud
slug: migawka-wolumenu
excerpt: Dowiedz się, jak wykonać i usunąć migawkę (snapshot) wolumenu
section: Zarządzanie w Panelu klienta OVH
---

**Ostatnia aktualizacja dnia 2018-04-18**

## Wprowadzenie

Snapshot jest opcją dostępną w usłudze [Public Cloud](https://www.ovh.pl/public-cloud/instances/cennik/){.external} (przyjętą nazwą jest migawka). Snapshot służy do wykonywana kopii wolumenu, a nie tylko samych danych na nim umieszczonych - uzyskasz dokładną kopię dysku.

Jeśli na przykład używasz wolumenu jako dysku startowego dla instancji, może on posłużyć do utworzenia kolejnej instancji z tą samą konfiguracją i zawartymi na nim danymi.

Migawka wolumenu jest doskonałym narzędziem w przypadku, gdy:

- chcesz wprowadzić ważne zmiany i chcesz zabezpieczyć się na wypadek niepowodzenia, aby przywrócić dane sprzed zmian;
- prowadzisz szkolenia i potrzebujesz szablonów danych skonfigurowanych dokładnie według potrzeb celu szkolenia;
- dynamicznie zmieniające się dane umieszczone na wolumenie wymagają częstego backupu.


Snapshot wolumenu jest kopią całego dysku, niezależnie od ilości danych na nim umieszczonych.

Z wykorzystaniem narzędzi API OpenStack można zautomatyzować operacje wykonywania migawek. 

**W tym przewodniku dowiesz się, jak wykonać migawkę wolumenu.**


## Wymagania początkowe


- Dostęp do [Panelu klienta](https://www.ovh.com/auth/?action=gotomanager){.external}
- [Utworzony wolumen (dysk dodatkowy)](https://docs.ovh.com/pl/public-cloud/utworzenie_i_konfiguracja_dodatkowego_dysku_dla_instancji/){.external} 


## W praktyce


Zaloguj się do Panelu klienta i przejdź do sekcji Cloud.

W lewym menu w dziale `Serwery`{.action} wybierz projekt Public Cloud, gdzie znajduje się wolumen, którego migawkę chcesz wykonać.

Migawka zostanie udostępniona w Panelu klienta w zakładce `Snapshoty` i można wykorzystać ją do utworzenia kolejnego wolumenu, który będzie klonem pierwszego.

Domyślnie wykonywany jest snapshot wolumenu o rozmiarze równym rozmiarowi całego dysku, niezależnie miejsca od zajmowanego przez system i / lub dane.


### Wykonanie migawki wolumenu

Wykonanie migawki wolumenu nie wymaga odpięcia wolumenu od instancji.

Jeśli dysk nie jest połączony z żadną instancją znajdziesz go w polu nad instancjami.

Rozwiń menu wolumenu i wybierz opcję `Stwórz snapshot`{.action}. 

![menu wolumenu](images/1_volume_menu.png){.thumbnail}


W efekcie otworzy się okno, gdzie domyślnie nadawana jest migawce nazwa zawierająca informacje, kiedy dokładnie wykonano snapshot w formacie:

dd/mm/rrrr hh:mm

![nazwa migawki wolumenu](images/2_vol_snapshot_name.png){.thumbnail}


Możesz nadać migawce własną nazwę.

Znajdziesz tam również informacje o wielkości przygotowywanej migawki oraz cenie za przechowywanie za miesiąc za każdy GB. Szczegóły znajdziesz w [cenniku](https://www.ovh.pl/public-cloud/instances/cennik/){.external}.

Czas tworzenia gotowego obrazu zależy od ilości danych na wolumenie.

Snapshot wolumenu jest kopią całego dysku, niezależnie od ilości danych na nim umieszczonych.

Na przykład, jeśli posiadasz 50 GB dysk, zajęty w 30% to wykonana migawka będzie miała rozmiar 50 GB.


### Usunięcie migawki wolumenu

Wszystkie wykonane migawki znajdziesz w zakładce `Snapshoty`.

![Backup deletion](images/3_backups_deleting.png){.thumbnail}

Aby wyszukać migawki, które chcesz usunąć, możesz posłużyć się wyszukiwarką. Wpisz fragment nazwy migawki, albo określ czas jej wykonania.

Możesz też sortować zawartość tabeli po wartościach pokazanych w kolumnach tabeli, klikając na tytuły kolumn.

Aby usunąć dany snapshot wystarczy kliknąć na ikonę kosza w wierszu danego snapshotu i potwierdzić operację.


> [!alert]
>
> Usunięcie migawki jest nieodwracalne.
>



## Sprawdź również


[Interfejsy zarządzania dostępne w Public Cloud](https://docs.ovh.com/pl/public-cloud/interfejsy-zarzadzania-public-cloud/){.external}

[Zarządzanie adresami IP Failover](https://docs.ovh.com/pl/public-cloud/zarzadzanie_adresami-ip-failover/){.external}

[Połączenie instancji Public Cloud z innymi produktami OVH za pomocą vRack](https://docs.ovh.com/pl/public-cloud/polaczenie-vrack-public-cloud-inne-uslugi/){.external}


Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.