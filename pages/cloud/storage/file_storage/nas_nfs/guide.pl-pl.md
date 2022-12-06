---
title: "Montowanie NAS-HA przy użyciu zasobów NFS"
slug: nas/nfs
excerpt: "Dowiedz się, jak się zalogować do usługi NAS-HA przy użyciu protokołu NFS"
section: NAS-HA
order: 03
---

> [!primary]
> Tłumaczenie zostało wygenerowane automatycznie przez system naszego partnera SYSTRAN. W niektórych przypadkach mogą wystąpić nieprecyzyjne sformułowania, na przykład w tłumaczeniu nazw przycisków lub szczegółów technicznych. W przypadku jakichkolwiek wątpliwości zalecamy zapoznanie się z angielską/francuską wersją przewodnika. Jeśli chcesz przyczynić się do ulepszenia tłumaczenia, kliknij przycisk „Zaproponuj zmianę” na tej stronie.
> 

**Ostatnia aktualizacja z dnia 06-12-2022**

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
- [Utworzenie partycji dla Twojej usługi przy użyciu protokołu NFS](https://docs.ovh.com/pl/storage/file-storage/nas/get-started/#partition)
- [Posiadanie wpisu ACL dla adresu IP serwera](https://docs.ovh.com/pl/storage/file-storage/nas/get-started/#addaccess)
- Dostęp administracyjny (root) do serwera przez SSH lub GUI

## W praktyce

Poniższe sekcje zawierają przykłady konfiguracji dla najczęściej używanych dystrybucji/systemów operacyjnych. Pierwszy etap polega zawsze na zalogowaniu się do serwera przez SSH lub zalogowaniu się do interfejsu graficznego zainstalowanego systemu operacyjnego. Poniższe przykłady zakładają, że jesteś zalogowany jako użytkownik z dużymi uprawnieniami.

Potrzebna będzie również **nazwa wewnętrzna** oraz **adres IP** usługi NAS-HA, które można znaleźć w e-mailu otrzymanym po instalacji usługi lub w [Panelu client OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.pl/&ovhSubsidiary=pl).

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

## Sprawdź również

Dołącz do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.
