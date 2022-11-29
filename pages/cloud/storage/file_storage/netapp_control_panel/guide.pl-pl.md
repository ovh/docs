---
title: "Enterprise File Storage - Zarządzanie w panelu klienta OVHcloud"
excerpt: Dowiedz się, jak zarządzać usługą Enterprise File Storage w Panelu klienta OVHcloud
slug: netapp/control-panel
section: Enterprise File Storage
order: 020
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 14-04-2022**

## Wprowadzenie

Usługi Enterprise File Storage mogą być zarządzane [za pośrednictwem API OVHcloud](https://docs.ovh.com/pl/storage/file-storage/netapp/quick-start/) lub w Panelu klienta OVHcloud.

**Dowiedz się, jak zarządzać wolumenami oraz migawkami do przechowywania plików firmowych w Panelu klienta.**

## Wymagania początkowe

- Posiadanie usługi Enterprise File Storage na Twoim koncie OVHcloud
- Dostęp do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl)

## W praktyce <a name="instructions"></a>

Zaloguj się do [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl) i wybierz `Bare Metal Cloud`{.action} na górnym pasku nawigacji. Otwórz `Storage i Backup`{.action}, a następnie `Enterprise File Storage`{.action} w menu po lewej stronie i wybierz Twoją usługę z listy.

![Informacje ogólne](images/manage_enterprise01.png){.thumbnail}

W zakładce `Informacje ogólne`{.action} znajdują się informacje techniczne dotyczące Twojej usługi, ogólne informacje o abonamencie oraz skrót, w celu [utworzenia wolumenu](#create_volume).

> [!primary]
> Zapoznaj się ze stroną [Concepts](https://docs.ovh.com/pl/storage/file-storage/netapp/concepts/), aby uzyskać szczegółowe informacje na temat właściwości technicznych rozwiązania Enterprise File Storage.
>

### Zarządzanie wolumenami <a name="manage_volume"></a>

Kliknij zakładkę `Wolumeny`{.action}. Tabela zawiera listę wszystkich wolumenów utworzonych dla wybranej usługi. Aby otworzyć [stronę zarządzania](#modify_volume), kliknij identyfikator wolumenu. 

![Wolumeny](images/manage_enterprise02.png){.thumbnail}

Możesz wykonać kilka operacji klikając przycisk...` `{.action} w każdym wierszu tabeli.

- **Zmień wolumen**: otwiera sekcję "[Informacje ogólne](#modify_volume)" wolumenu.
- **Utwórz snapshot**: otwiera sekcję "[Kopie](#snapshots) zapasowe", aby wykonać ręczny snapshot wolumenu.
- **Zarządzanie snapshotami**: otwiera sekcję "[Kopie zapasowe](#snapshots)" wolumenu.
- **Zarządzanie IP Access (ACL)**: otwiera sekcję "[ACL](#access_control)", która umożliwia zarządzanie kontrolą dostępu do wolumenu.
- **Usuń wolumen**: pozwala usunąć ten wolumen po potwierdzeniu działania w oknie, które się wyświetli.

#### Tworzenie wolumenu <a name="create_volume"></a>

Kliknij przycisk `Utwórz wolumen`{.action}. W nowym oknie, które się pojawi, wprowadź nazwę i opis wolumenu. Wybierz rozmiar w GB i kliknij na `Utwórz wolumen`{.action}, aby zatwierdzić utworzenie.

![Wolumen tworzenia](images/manage_enterprise03.png){.thumbnail}

Możesz usunąć wolumen, klikając przycisk `...`{.action} w tabeli, a następnie `Usuń wolumen`{.action}.

#### Zmiana wolumenu <a name="modify_volume"></a>

Kliknij ID wolumenu w tabeli, aby otworzyć stronę zarządzania tym wolumenem.

![Zarządzanie wolumenami](images/manage_enterprise04.png){.thumbnail}

W karcie `Informacje ogólne`{.action} wyświetlają się szczegóły wolumenu oraz szczegółowe instrukcje dotyczące połączenia z wolumenem, w tym parametry indywidualne.

#### Tworzenie i zarządzanie snapshotami wolumenu <a name="snapshots"></a>

W zakładce `Snapshoty`{.action} wyszczególnione są wszystkie snapshoty utworzone dla wybranego wolumenu.

![Snapshoty](images/manage_enterprise05.png){.thumbnail}

Aby ręcznie dodać nowy snapshot wolumenu do aktualnego stanu, kliknij przycisk `Operacje`{.action}, a następnie `Utwórz snapshot`{.action}.

W nowym oknie, które się wyświetli, możesz wpisać nazwę i opis. Kliknij przycisk `Utwórz snapshot`{.action}, aby rozpocząć tworzenie.

W tej samej zakładce możesz również wyświetlić wszystkie [polityki snapshotów](#snapshot_policy) utworzonych dla usługi i zastosować je w tym woluminie.

![Snapshoty](images/manage_enterprise06.png){.thumbnail}

Kliknij w linii odpowiedniej reguły, aby sprawdzić szczegóły planowania kopii zapasowych snapshot. Wybierz politykę za pomocą dedykowanego przycisku wyboru, po czym kliknij przycisk `Zastosuj politykę`{.action} pod tabelą.

Aby skonfigurować [politykę snapshotów](#snapshot_policy), wróć do sekcji [Zarządzanie wolumenami](#instructions) usługi i otwórz zakładkę `Snapshot policies`{.action}.

#### Lista snapshotów <a name="access_snapshots"></a>

W Panelu klienta nie możesz sprawdzić ani przywrócić wykonanych kopii zapasowych snapshot.

Aby uzyskać dostęp do snapshotów z punktu montowania, możesz użyć poleceń dostępnych w dokumentacji [NetApp](https://library.netapp.com/ecmdocs/ECMP1196991/html/GUID-36DC110C-C0FE-4313-BF53-1C12838F7BBD.html){.external}.

#### Zarządzanie ACL wolumenów <a name="access_control"></a>

Kontrola dostępu do wolumenów działa poprzez ograniczenia adresów IP. Ponieważ żadne ograniczenie nie jest domyślnie skonfigurowane, pierwszym krokiem podczas tworzenia wolumenów jest zdefiniowanie adresów IP lub zakresów, z których dostęp będzie dozwolony.

W zakładce `Kontrola dostępu (ACL)`{.action} kliknij przycisk `+ Dodaj nowy dostęp`{.action}.

![ACL](images/manage_enterprise07.png){.thumbnail}

Operacja ta tworzy nowy wiersz w tabeli, w której możesz wprowadzić adres IP lub blok adresu (CIDR). Wybierz `Odczyt` lub `Odczyt i zapis` jako typ dostępu w rozwijanym menu, następnie zaznacz ten wpis, aby dodać go do ACL.

Aby usunąć dostęp do wolumenu, kliknij ikonę kosza w tabeli.

### Zarządzanie polityką snapshotów <a name="snapshot_policy"></a>

Dodanie polityki pozwala zaplanować tworzenie snapshotów dla wszystkich wolumenów.

Kliknij kartę `Snapshot policies`{.action}. Tabela zawiera listę wszystkich polityk utworzonych dla wybranej usługi.

Domyślna polityka już istnieje i nie może zostać zmieniona. Aby dodać swój, kliknij przycisk `Utwórz nowy Snapshot policy`{.action}.

![Snapshoty](images/manage_enterprise08.png){.thumbnail}

Na stronie, która się wyświetli, wprowadź nazwę i opis polityki. Następnie użyj przycisku `+ Dodaj nową regułę`{.action}, aby dodać jedną lub kilka zasad do polityki.

![Snapshoty](images/manage_enterprise09.png){.thumbnail}

Wypełnij pola, aby określić kryteria częstotliwości tworzenia snapshota. Należy również podać prefiks dla snapshotów niezbędny do ich nazwy.

Więcej informacji o każdej wartości znajdziesz klikając na ikonę z jednym znakiem zapytania (`?`{.action}). Rozwijając sekcję `Przykład`{.action}, można wyświetlić dwa zestawy zasad polityki wraz z wyjaśnieniem ich wyniku.

Zaznacz nową regułę, aby ją dodać. Po dodaniu wszystkich reguł kliknij `Utwórz nowy Snapshot policy`{.action}.

[Wybierz wolumen](#manage_volume) i przejdź do zakładki `Snapshoty`{.action}, aby [stosować reguły](#snapshots).

Aby usunąć politykę, w tabeli kliknij odpowiednią ikonę kosza.

> [!primary]
>
> Snapshoty wykorzystują przestrzeń dyskową Twojego rozwiązania Enterprise File Storage. 5% rozmiaru wolumenu jest zawsze zarezerwowane dla snapshotów.
>

### Pierwsze kroki <a name="firststeps"></a>

Jeśli nie jesteś zaznajomiony z korzystaniem z rozwiązania Enterprise File Storage, możesz postępować zgodnie z poniższymi instrukcjami:

- [Utwórz wolumen](#create_volume)
- [Konfiguracja kontroli dostępu](#access_control)
- [Konfiguracja polityki snapshota](#snapshot_policy) (opcjonalnie)
- [Zastosowanie reguł snapshota dla wolumenu](#snapshots) (opcjonalnie)
- [Wyświetlanie i pobieranie snafonów](#access_snapshots) (opcjonalnie)
- [Zaloguj się do wolumenu zgodnie z instrukcjami w sekcji "Informacje ogólne"](#modify_volume)
- [Dowiedz się, jak korzystać z Enterprise File Storage poprzez API, sprawdź nasze przewodniki](#gofurther) (opcjonalnie)

## Sprawdź również <a name="gofurther"></a>

[Enterprise File Storage - API Quickstart](https://docs.ovh.com/pl/storage/file-storage/netapp/quick-start/)

[Enterprise File Storage - Zarządzanie wolumenami](https://docs.ovh.com/pl/storage/file-storage/netapp/volumes/)

[Enterprise File Storage - Zarządzanie ACL wolumenu](https://docs.ovh.com/pl/storage/file-storage/netapp/volume-acl/)

[Enterprise File Storage - Zarządzanie snapshotami wolumenów](https://docs.ovh.com/pl/storage/file-storage/netapp/volume-snapshots/)

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
