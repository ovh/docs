---
title: Pierwsze kroki z usługą NAS HA OVHcloud
slug: nas/pierwsze-kroki
excerpt: Dowiedz się, jak zarządzać usługą NAS-HA w Panelu klienta OVHcloud
section: NAS
order: 01
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk “Zaproponuj zmianę” na tej stronie.
>

**Ostatnia aktualizacja z dnia 22-08-2022**

## Wprowadzenie

Network Attached Storage (NAS) jest serwerem plików podłączonym do sieci, którego główną funkcją jest przechowywanie danych w scentralizowanym woluminie dla niejednorodnych klientów sieciowych.
Usługę NAS HA możesz zarządzać poprzez [API OVHcloud](https://docs.ovh.com/pl/storage/nas/nas-quickapi/) lub w Panelu klienta.

**Niniejszy przewodnik wyjaśnia, jak zarządzać partycjami i snapshotami NAS-HA w Panelu klienta OVHcloud.**

## Wymagania początkowe

- Posiadanie usługi [NAS-HA OVHcloud](https://www.ovh.pl/nas/)
- Posiadanie adresu IP powiązanego z usługą OVHcloud (Hosted Private Cloud, Serwer dedykowany, VPS, Instancja Public Cloud, itp.)
- Dostęp do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl){.external}.

## W praktyce

Zaloguj się do [Panelu klienta OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl), przejdź do sekcji `Bare Metal Cloud`{.action} i otwórz `NAS i CDN`{.action}.<br>
Kliknij Twoją usługę, aby przejść do zakładki `Informacje ogólne`{.action}.

![Informacje ogólne](images/nas-ha01.png){.thumbnail}

W zakładce `Informacje ogólne`{.action} wyświetlają się informacje techniczne, `Limit` usługi, szczegóły subskrypcji i skróty, aby [utworzyć partycję](#create_partition).

> [!primary]
> Przejdź do strony [FAQ](../faq-nas/), aby poznać właściwości techniczne usługi NAS-HA.
>

### Zarządzanie partycjami <a name="manage_partition"></a>

Przejdź do zakładki `Partycje`{.action}. Tabela zawiera listę wszystkich partycji utworzonych dla wybranej usługi. Aby otworzyć stronę zarządzania, kliknij nazwę partycji. 

![Partycje](images/nas-ha02.png){.thumbnail}

W sekcji **Metryki ogólne** podano ilość dostępnej przestrzeni dyskowej wykorzystywanej przez dane i snapshoty (`Pojemność całkowita`). Odsetek przestrzeni zajmowanej obecnie przez snapshoty jest oznaczony kolorem żółtym. Domyślnie wykonywany jest snapshot co godzinę.

Usługa NAS-HA dysponuje wystarczającą ilością przestrzeni do przechowywania kopii zapasowych snapshot. Przestrzeń ta odpowiada 20% początkowego rozmiaru wolumenu. Jeśli przekroczysz tę granicę, poniższe snapshoty będą używać Twojej głównej przestrzeni dyskowej.

Możesz aktywować opcję `Powiadomienie o wykorzystaniu przestrzeni`{.action}, aby otrzymywać ostrzeżenia przez e-mail, gdy osiągnięto limit wykorzystania wynoszący 90%.

Możesz wykonać kilka operacji klikając przycisk `...`{.action} w każdym wierszu tabeli.

- **Edytuj / wyświetl**: Otwórz sekcję "Informacje ogólne" na partycji.
- **Zarządzanie snapshotami**: Otwórz sekcję [Reguły dotyczące snapshotów](#snapshots) na partycji.
- **Zarządzanie dostępami**: Otwiera sekcję [Kontrola dostępu (ACL)](#access_control), w której możesz zarządzać prawami dostępu do adresów IP dla partycji.
- **Zmień rozmiar**: Otwórz okno, aby [zmienić rozmiar](#modify_partition) partycji.
- **Ustawienia Z File System (ZFS)**: Otwiera okno, które umożliwia [zmianę parametrów systemu ZFS](#zfs).
- **Usuń**: Otwórz okno, aby [usunąć tę partycję](#deletion).

#### Tworzenie partycji <a name="create_partition"></a>

Aby dodać nową partycję, kliknij przycisk `+ Utwórz partycję`{.action} nad tabelą.

![Partycje](images/nas-ha03.png){.thumbnail}

Wprowadź **nazwę** partycji, określ jej **rozmiar** w GB i wybierz **protokoły** dostępu (NFS, CIFS lub oba), które chcesz autoryzować.

W razie potrzeby podaj opis i kliknij `Utwórz partycję`{.action}.

#### Zmień rozmiar partycji <a name="modify_partition"></a>

Aby zmienić rozmiar partycji, kliknij przycisk `...`{.action} po prawej stronie odpowiedniej partycji, po czym wybierz `Zmień rozmiar`{.action}.

![Partycje](images/nas-ha04.png){.thumbnail}

Wpisz nowy rozmiar, po czym kliknij `Zmień rozmiar`{.action}.

#### Tworzenie snapshotów i zarządzanie nimi <a name="snapshots"></a>

Kliknij przycisk `...`{.action} po prawej stronie odpowiedniej partycji, po czym wybierz `Zarządzanie snapshotami`{.action}.

Snapshot danych wykonywany jest automatycznie co godzinę i zapisywany jest na NAS-HA. Reguła ta wyświetla się w tabeli w zakładce `Reguły dotyczące snapshotów`{.action}.

![Snapshoty](images/nas-ha05.png){.thumbnail}

Możesz aktywować inne reguły snapshotów, które utworzą snapshoty o określonej częstotliwości, klikając przycisk rozwijany pod `Opcje`. Wybierz częstotliwość i kliknij przycisk `Zaznacz`{.action} po prawej stronie.

![Snapshoty](images/nas-ha06.png){.thumbnail}

W oknie, które się pojawi odczekaj, aż proces się zakończy, następnie kliknij `Zamknij`{.action}. Dodatkowe snapshoty będą również przechowywane na NAS-HA.

##### **Tworzenie ręcznego snapshota**

Poza snapshotami wykonywanymi automatycznie, w każdej chwili możesz utworzyć ręczny snapshot partycji. Kliknij przycisk `Ręczne tworzenie snapshota`{.action} nad tabelą.

![Snapshoty](images/nas-ha07.png){.thumbnail}

Snapshot zostanie dodany do tabeli. Wpisz nazwę snapshota po prefiksie, po czym kliknij przycisk `Zaznacz`{.action} po prawej stronie.

##### **Listowanie i przywracanie snapshotów**

W Panelu klienta nie są dostępne funkcje przywracania kopii zapasowych snapshot. Są one przechowywane w trybie tylko do odczytu na partycji.

Aby uzyskać dostęp do snapshotów z punktu montowania, należy uzyskać dostęp do katalogu `.zfs/snapshot` partycji.

Na przykład w ramach usługi z ID `zpool-123456` istnieje partycja o nazwie `partition1`, którą utworzyłeś snapshot o nazwie `snap-snapshot01`. Możesz odnaleźć snapshot, wprowadzając następujące polecenie:

```bash
ls -al /zpool-123456/partition1/.zfs/snapshot/snap-snapshot01/
```

Aby przywrócić snapshot, skopiuj go ze ścieżki dostępu pliku `.zfs` do nowego katalogu, w którym chcesz przywrócić snapshot. Możesz użyć narzędzia takiego jak *rsync*, które umożliwia przywrócenie danych.

Więcej informacji znajdziesz w sekcji [Sprawdź](#gofurther) ten przewodnik.

#### Zarządzanie ACL partycji <a name="access_control"></a>

Kontrola dostępu do partycji działa poprzez ograniczenie adresów IP. Ponieważ żadne ograniczenie nie jest domyślnie skonfigurowane, pierwszym etapem konfiguracji dla każdej partycji jest zdefiniowanie adresów IP lub zakresów, z których dostęp będzie dozwolony.

> [!primary]
>
> Tylko adresy IP przypisane do usług OVHcloud mogą mieć dostęp do NAS-HA (np.: Serwer dedykowany, VPS, instancja Public Cloud, itp.).
>

##### **Dodanie dostępu**

Kliknij przycisk `+ Dodaj nowy dostęp`{.action}.

![Access](images/nas-ha08.png){.thumbnail}

Tworzy to nowy wiersz w tabeli, w której możesz wybrać adres IP lub blok adresu (CIDR). Wybierz `Odczyt` (RO) lub `Odczyt/zapis` (RW) jako typ dostępu w rozwijanym menu i kliknij przycisk `Zaznacz`{.action}, aby dodać ten wpis do ACL.

W oknie, które się pojawi odczekaj, aż proces się zakończy, następnie kliknij `Zamknij`{.action}.

##### **Usuwanie dostępu**

Aby usunąć dostęp do partycji, kliknij ikonę `kosza`{.action} w tabeli.

![Access](images/nas-ha09.png){.thumbnail}

W oknie, które się wyświetli kliknij `Usuń dostęp`{.action}, po czym zaczekaj, aż proces się zakończy. Kliknij `Zamknij`{.action}.

### Parametry ZFS <a name="zfs"></a>

> [!warning]
>
> Wszystkie domyślne ustawienia systemu plików Z są zoptymalizowane. Chociaż zalecamy odradzanie tych parametrów, menu to pozwala na dostosowanie ZFS używanego przez NAS-HA.
>

Aby zmienić ustawienia ZFS dla partycji, kliknij przycisk `...`{.action} po prawej stronie odpowiedniej partycji, a następnie wybierz `Ustawienia Z File System (ZFS)`{.action}. 

![zfs](images/nas-ha10.png){.thumbnail}

- **Wyłącz aktualizację czasu dostępu (*atime*)**: Wyłączenie *atime* oznacza, że jądro nie będzie aktualizować znacznika czasu systemu plików przy każdym dostępie do pliku. Może to być przydatne w przyspieszaniu częstych operacji odczytu, np. na statycznych stronach WWW. Nie zaleca się jednak dezaktywacji tej opcji dla aplikacji krytycznych pod względem spójności, takich jak bazy danych.
- **ZFS recordsize**: Ta właściwość zmienia maksymalny rozmiar bloku w systemie plików ZFS. Pamiętaj, że ZFS będzie nadal używać mniejszy rozmiar bloku, jeśli plik jest mniejszy niż maksymalny rozmiar. Na przykład plik o rozmiarze 16 KB użyje bloku o rozmiarze 16 KB (plus metadane), aby nie zmarnować przestrzeni dyskowej. W związku z tym nie zalecamy modyfikacji ZFS *recordsize*.
- **Sync**: Ten parametr zmienia zachowanie transakcji w systemie plików ZFS w odniesieniu do zapisu danych RAM i zapisu danych na dysku. Nie zalecamy modyfikacji tej właściwości, chyba że jest to powód szczególny.

### Usuwanie partycji <a name="deletion"></a>

> [!warning]
>
> Usunięcie partycji spowoduje trwałe usunięcie wszystkich zawartych w niej danych.
>

Aby usunąć partycję, kliknij przycisk `...`{.action} po prawej stronie odpowiedniej partycji i wybierz `Usuń`{.action}.

![Usuwanie](images/nas-ha11.png){.thumbnail}

Potwierdź operację w oknie, które się wyświetli, klikając `Usuń partycję`{.action}. Odczekaj, aż proces się zakończy, następnie kliknij `Zamknij`{.action}.

## Sprawdź <a name="gofurther"></a>

[Zarządzanie partycjami przez API](https://docs.ovh.com/pl/storage/nas/nas-partitions-api/)

[Zarządzanie ACL partycji przez API](https://docs.ovh.com/pl/storage/nas/nas-manage-acls/)

[Zarządzanie snapshotami przez API](https://docs.ovh.com/pl/storage/nas/nas-snapshots-api/)

[Montowanie przestrzeni dyskowej NAS przy użyciu protokołu NFS](../nas-nfs/)

[Montowanie usługi NAS na systemie Windows Server przy użyciu CIFS](../nas-cifs/)

Dołącz do społeczności naszych użytkowników na stronie<https://community.ovh.com/en/>.
