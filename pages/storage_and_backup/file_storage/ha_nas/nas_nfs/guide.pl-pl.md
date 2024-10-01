---
title: "Montowanie NAS-HA przy użyciu zasobów NFS"
excerpt: "Dowiedz się, jak się zalogować do usługi NAS-HA przy użyciu protokołu NFS"
updated: 2024-09-18
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk "Zgłóś propozycję modyfikacji" na tej stronie.
> 

## Wprowadzenie

Usługa NAS-HA OVHcloud pozwala na zarządzanie przestrzenią dyskową plików dostępną z poziomu sieci.

**Dowiedz się, jak uzyskać dostęp do usługi NAS-HA poprzez NFS na najpopularniejszych systemach operacyjnych.**

> [!warning]
> OVHcloud oferuje szereg usług, których konfiguracja i zarządzanie należy do Ciebie. To Ty musisz upewnić się, że działają poprawnie.
>
> Niniejszy przewodnik ułatwi Ci realizację bieżących zadań. W przypadku trudności lub wątpliwości związanych z administrowaniem, użytkowaniem lub wdrażaniem usług na serwerze zalecamy skorzystanie z pomocy wyspecjalizowanego [usługodawcy](https://partner.ovhcloud.com/pl/directory/) lub zbliżenie się do [naszej społeczności](https://community.ovh.com/en/).
>

## Wymagania początkowe

- Posiadanie oferty [NAS-HA OVHcloud](https://www.ovhcloud.com/pl/storage-solutions/nas-ha/)
- Posiadanie usługi OVHcloud, do której przypisany jest publiczny adres IP (Hosted Private Cloud, serwer dedykowany, VPS, instancja Public Cloud, etc.)
- Posiadanie systemu operacyjnego kompatybilnego z NFS zainstalowanego na Twoim serwerze
- [Utworzenie partycji dla Twojej usługi przy użyciu protokołu NFS](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#partition)
- [Posiadanie wpisu ACL dla adresu IP serwera](/pages/storage_and_backup/file_storage/ha_nas/nas_get_started#addaccess)
- Dostęp administracyjny (sudo) do serwera przez SSH lub GUI

## W praktyce

Poniższe sekcje zawierają przykłady konfiguracji dla najczęściej używanych dystrybucji/systemów operacyjnych. Pierwszy etap polega zawsze na zalogowaniu się do serwera przez SSH lub zalogowaniu się do interfejsu graficznego zainstalowanego systemu operacyjnego. Poniższe przykłady zakładają, że jesteś zalogowany jako użytkownik z dużymi uprawnieniami.

Potrzebna będzie również **nazwa wewnętrzna** oraz **adres IP** usługi NAS-HA, które można znaleźć w e-mailu otrzymanym po instalacji usługi lub w [Panelu client OVHcloud](/links/manager).

Następujące ratingi są używane jako argumenty w poniższych sekcjach wiersza poleceń. Zastąp je odpowiednimi wartościami podczas wprowadzania poleceń.

|Argument|Opis|
|---|---|
|IP_HA-NAS|Adres IP NAS-HA (np. `10.1.1.1`)|
|NFS_PATH|ścieżka dostępu do partycji NAS-HA, którą chcesz zamontować, zawierająca nazwę usługi i nazwę partycji (Przykład: `zpool-123456/partition01`)|
|MOUNTING_FOLDER|Katalog lokalny dla zamontowanej partycji|

> [!warning]
>
> Użytkownik NFS to `root`, zmiany uprawnień dla tego użytkownika mogą powodować konflikty z istniejącymi uprawnieniami CIFS/SMB.
>

### Dystrybucje oparte na Debianie

Zainstaluj pakiet `nfs-common`:

```bash
ubuntu@server:~$ sudo apt install nfs-common
```

Następnie użyj polecenia:

```bash
ubuntu@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Przykład:**

```bash
ubuntu@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Teraz możesz przejść do partycji zamontowanej w określonym folderze.

> [!primary]
>
> Aby zautomatyzować proces montowania serwera przy każdym uruchomieniu serwera, dodaj następującą linię do pliku `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### CentOS 7 / AlmaLinux / Rocky Linux

Sprawdź, czy zainstalowane są najnowsze wersje pakietów `nfs-utils` i `rpcbind`:

```bash
centos@server:~$ sudo yum install nfs-utils rpcbind
```

W razie potrzeby uruchom ponownie usługę `rpcbind`, wprowadzając następujące polecenie:

```bash
centos@server:~$ sudo systemctl restart rpcbind
```

Aby zamontować partycję, użyj następującego polecenia:

```bash
centos@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Przykład:**

```bash
centos@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Teraz możesz przejść do partycji zamontowanej w określonym folderze.

> [!primary]
>
> Aby zautomatyzować proces montowania serwera przy każdym uruchomieniu serwera, dodaj następującą linię do pliku `/etc/fstab`:
>
> `IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0`
>

### Fedora

Zainstaluj pakiet `nfs-utils`:

```bash
fedora@server:~$ sudo dnf -y install nfs-utils
```

Następnie użyj polecenia:

```bash
fedora@server:~$ sudo mount -t nfs IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

**Przykład:**

```bash
fedora@server:~$ sudo mount -t nfs 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Teraz możesz przejść do partycji zamontowanej w określonym folderze.

### Proxmox

W interfejsie administracyjnym Proxmox kliknij `Storage`{.action} w menu pionowym.

![proxmox](images/proxmox1.png){.thumbnail}

Kliknij przycisk `Add`{.action} i wybierz `NFS`{.action}.

W oknie, które się pojawi, wprowadź następujące informacje.

|Szczegóły|Opis|
|---|---|
|ID|Identyfikator konta zasobów współdzielonych|
|Server|Adres IP NAS-HA (Przykład: `10.1.1.1`)|
|Export|Ścieżka do partycji NAS-HA (musi być wykryta przez automatyczne skanowanie: wybierz go z listy.)|
|Content|Rodzaje treści dla tego zasobu NFS (Disk image, ISO image, Container template, VZDump backup file, Container, Snippets)|

![proxmox](images/proxmox2.png){.thumbnail}

Kliknij `Add`{.action}, aby zamontować partycję.

### VMware ESXI

W interfejsie VMware ESXI kliknij `Storage`{.action} w menu po lewej stronie.

Następnie kliknij przycisk `New datastore`{.action}, aby otworzyć asystenta.

![ESXI](images/esxi1.png){.thumbnail}

W nowym oknie wybierz `Mount NFS datastore`{.action} i kliknij `Next`{.action}.

![ESXI](images/esxi2.png){.thumbnail}

Wypełnij formularz następującymi szczegółami.

|Szczegóły|Opis|
|---|---|
|Name|Identyfikator konta zasobów współdzielonych|
|NFS server|Adres IP NAS-HA (Przykład: `10.1.1.1`)|
|NFS share|Ścieżka do partycji NAS-HA do zamontowania (Przykład: `zpool-123456/partition01`)|

![ESXI](images/esxi3.png){.thumbnail}

Następnie kliknij `Next`{.action}. Kliknij `Finish`{.action} w ostatnim etapie.

Partycja NAS-HA jest teraz zamontowana w datastore.

![ESXI](images/esxi4.png){.thumbnail}

### NFSv3/NFSv4

Oferta NAS-HA obsługuje protokoły NFSv3 i NFSv4. Szczegóły ich wykorzystania.

**Co się stanie, jeśli nie podasz wersji podczas składania zamówienia NFS?**

W takim przypadku klient NFS spróbuje połączyć się bezpośrednio z najwyższą wspieraną przez niego wersją.
Możesz również wybrać, czy chcesz korzystać z NFSv3 lub NFSv4:

Aby wymusić korzystanie z NFSv3, wpisz następujące polecenie:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Przykład:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=3 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Aby wymusić korzystanie z NFSv4, wpisz następujące polecenie:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Przykład:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Możesz również użyć następującego polecenia, aby określić wersję użytą przez aktualny montaż:

```bash
ubuntu@server:~$ nfsstat -m
```

W powrocie parametr `vers=3` lub `vers=4` wskazuje, który protokół jest używany.

Korzystanie z poleceń będzie podobne dla CentOS i Fedora.

**Czy można wprowadzić wersję przeznaczoną do użycia przez NFSv4?**

Podobnie jak poprzednio, klient NFS będzie próbował połączyć się bezpośrednio z najwyższą wersją, do której ma dostęp.
Możesz wybrać NFSv4.1 lub NFSv4.2

Aby wymusić użycie NFSv4.1, użyj następującego polecenia:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Przykład:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.1 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Aby wymusić użycie NFSv4.2, użyj następującego polecenia:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 IP_HA-NAS:/NFS_PATH /MOUNTING_FOLDER
```

- Przykład:

```bash
ubuntu@server:~$ sudo mount -t nfs -o vers=4.2 10.1.1.1:/zpool-123456/partition01 /mount/ha_nas
```

Za pomocą tego polecenia możesz sprawdzić wersję aktualnego pakietu:

```bash
ubuntu@server:~$ nfsstat -m
```

## Wskazówki dotyczące optymalizacji wydajności i/lub stabilności połączenia NFS

W większości przypadków domyślne opcje montowania skonfigurowane w klientach Linux są wystarczające, aby uzyskać akceptowalną wydajność. Jednak w niektórych sytuacjach włączanie lub wyłączanie niektórych opcji może być przydatne, aby uzyskać lepszą ogólną wydajność.

Ponadto, aby uzyskać optymalną wydajność i uniknąć różnych błędów zidentyfikowanych w kliencie NFS, zalecamy użycie jak najnowszego jądra systemu Linux.

Poniżej znajdziesz kilka elementów, które mogą być pomocne w konfiguracji klienta NFS.

### Kilka opcji montażu do rozważenia

Możesz sprawdzić opcje montowania zastosowane przez Twojego klienta Linux za pomocą polecenia `mount -l`.

Przykład zwrotu polecenia:

```bash
XX.XX.XX.XX:/zpool-XXXXXX/DIR on /mnt type nfs4 (rw,relatime,vers=4.2,rsize=131072,wsize=131072,namlen=255,hard,proto=tcp,timeo=600,retrans=2,...)
```

- `rsize=1048576`: Ustawia maksymalną liczbę bajtów danych, które klient NFS może odebrać dla każdego żądania ODCZYTU sieciowego. Ta wartość jest stosowana podczas odczytywania danych z pliku w systemie plików NFS. Największy możliwy rozmiar (do 1048576) gwarantuje najlepszą wydajność.
- `wsize=1048576`: Ustawia maksymalną liczbę bajtów danych, które klient NFS może wysłać dla każdego żądania zapisu w sieci. Ta wartość jest stosowana podczas zapisywania danych do pliku w systemie plików NFS. Największy możliwy rozmiar (do 1048576) gwarantuje najlepszą wydajność.
- `hard`: Ustawia zachowanie odzyskiwania klienta NFS po wygaśnięciu zapytania, tak aby zapytania były ponownie uruchamiane na czas nieokreślony, dopóki serwer NAS-HA nie odpowie. Ta opcja gwarantuje integralność danych.
- `timeo=150`: Ustawia wartość limitu czasu, który klient NFS używa do oczekiwania na odpowiedź przed ponownym uruchomieniem żądania NFS. Użyj wartości co najmniej 150, co odpowiada 15 sekundom, aby uniknąć spadku wydajności.
- `retrans=2`: Ustawia na 2 liczbę powtórzeń żądania klienta NFS przed podjęciem próby wykonania akcji odzyskiwania.
- `tcp`: aby przyspieszyć montowanie systemu plików w NFS v3 (nie jest wymagane dla NFSv4.x, który używa tylko TCP).
-`_netdev`: gdy ta opcja jest obecna w pliku /etc/fstab, uniemożliwia ona systemowi plików klienta podjęcie próby zainstalowania systemu plików NFS, dopóki sieć nie zostanie włączona.
- `nofail`: Jeśli system operacyjny klienta powinien być uruchamiany niezależnie od stanu systemu plików NFS, dodaj opcję `nofail`.
- `actimeo=30`: specyfikacja `actimeo` ustawia wszystkie parametry `acregmin`, `acregmax`, `acdirmin` i `acdirmax` na tę samą wartość. Użycie wartości mniejszej niż 30 sekund może spowodować obniżenie poziomu wydajności, ponieważ pamięć podręczna atrybutów plików i katalogów wygasa zbyt szybko.
- `nfsvers`: jeśli to możliwe, należy unikać korzystania z NFS w wersji 4.0. Zamiast tego użyj wersji 3, 4.1 lub 4.2 (jeśli to możliwe, użyj tej samej wersji NFS dla wszystkich klientów podłączonych do tego samego udziału NFS).
- `nordirplus`: W niektórych środowiskach z wieloma katalogami, w których klient NFSv3 używa tylko informacji z niewielkiego podzbioru wpisów katalogów, READDIRPLUS może powodować zmniejszenie wydajności. Opcja nordirplus umożliwia wyłączenie tej funkcji

### Wymuś użycie NFSv3 w niektórych przypadkach

- Ponieważ NFSv3 jest bezstanowy, wydajność z NFSv3 może być znacznie lepsza w przypadku niektórych obciążeń, zwłaszcza dla obciążeń, które wykonują wiele wywołań typu OPEN, CLOSE, SETATTR i GETATTR.
- Jeśli na udziale NFS zainstalowana jest baza danych, należy pamiętać, że w przypadku rozłączenia sieci specyficzny mechanizm blokowania NFS v4.x może spowodować wyłączenie aplikacji (więcej informacji można znaleźć w rfc: <https://datatracker.ietf.org/doc/rfc3530/>).
- Jeśli instalujesz wirtualne maszyny VMware na swoim koncie zasobów NFS, pamiętaj, że mechanizm blokowania zintegrowany z wersją NFSv4.x nie jest kompatybilny z trybem klastrowania zaimplementowanym na NAS-HA (klaster w trybie aktywnym/pasywnym, wyjaśniony na [tej stronie](/links/storage/nas-ha)). Konieczne jest zatem użycie protokołu NFSv3, ponieważ w przeciwnym razie dojdzie do utraty dostępu do datastore w przypadku incydentu dotykającego serwer główny lub w przypadku planowanych prac konserwacyjnych.

### Popraw wydajność odczytu, modyfikując atrybut read_ahead_kb

Niektóre jądra systemu Linux używają domyślnej wartości `read_ahead_kb` wynoszącej 128 KB. Zalecamy zwiększenie tej wartości do 15 MB w przypadku problemów z wydajnością odczytu. Więcej informacji można znaleźć [na stronie](https://docs.kernel.org/admin-guide/abi-stable.html?highlight=read_ahead_kb#abi-sys-block-disk-queue-read-ahead-kb).

## Sprawdź również

Jeśli potrzebujesz szkolenia lub pomocy technicznej w celu wdrożenia naszych rozwiązań, skontaktuj się z przedstawicielem handlowym lub kliknij [ten link](https://www.ovhcloud.com/pl/professional-services/), aby uzyskać wycenę i poprosić o spersonalizowaną analizę projektu od naszych ekspertów z zespołu Professional Services.

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
