---
title: 'Montowanie przestrzeni dyskowej NAS przy użyciu protokołu NFS'
slug: nas-nfs
excerpt: 'Dowiedz się, jak zamontować NAS przy użyciu protokołu NFS'
section: NAS
order: 03
---

**Ostatnia aktualizacja z dnia 21-02-2022**

## Wymagania początkowe

Przewodnik wyjaśnia, jak zamontować NFS na najpopularniejszych dystrybucjach. Aby zamontować zasób NFS, potrzebne Ci będą następujące elementy:

- Posiadanie [Serwer dedykowany](https://www.ovhcloud.com/pl/bare-metal/), **lub**  [VPS](https://www.ovhcloud.com/pl/vps/) **lub** [instancja Public Cloud](https://www.ovhcloud.com/pl/public-cloud/).
- Posiadanie usługi [NAS-HA](https://www.ovh.pl/nas/).
- Dystrybucja kompatybilna z NFS.

## W praktyce

### Linux

Kompatybilność: Debian & Ubuntu

Aby zamontować zasób NFS pod Linuxem:

- Zaloguj się do serwera przez SSH
- Zainstaluj pakiet “nfs-client” przy użyciu polecenia:


```sh
aptitude install nfs-client
```

Następnie użyj polecenia:


```sh
mount -t nfs -o _netdev,mountproto=tcp IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE
```

|Argument|Opis |
|---|---|
|IP_NAS|Nazwa lub adres IP NAS|
|/CHEMIN_NFS|Ścieżka na serwerze NFS dla zasobu (np.: "nas-000YY/mapartition")|
|DOSSIER_MONTAGE|Katalog, w którym zainstalujesz zasób NFS na serwerze|


> [!primary]
>
> Przestrzeń NAS może być montowana automatycznie w momencie uruchamiania dystrybucji. W tym celu dodaj poniższe polecenie do pliku /etc/fstab:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw,_netdev,mountproto=tcp 0 0
> ```
>

*Przykład:*

```sh
mount -t nfs -o _netdev,mountproto=tcp 10.16.XXX.YYY:zpool-999888/PartitionName /media/NasHA -v
```

|Argument|Opis |
|---|---|
|IP_NAS|10.16.XXX.YYY|
|/CHEMIN_NFS|zpool-999888/PartitionName|
|DOSSIER_MONTAGE|/media/NasHA -v|

### CentOS

Aby zamontować zasób NFS pod CentOS:

- Zaloguj się do serwera przez SSH
- Zainstaluj pakiety "nfs-utils" i "rpcbind" przy użyciu polecenia:


```sh
yum install nfs-utils rpcbind
```

Następnie zrestartuj usługę `rpcbind` przy użyciu polecenia:


```sh
/etc/init.d/rpcbind start
```

Teraz zastosuj polecenie:

```sh
mount -t nfs -o _netdev,mountproto=tcp IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE
```

|Argument|Opis |
|---|---|
|IP_NAS|Nazwa lub adres IP NAS|
|/CHEMIN_NFS|Ścieżka na serwerze NFS dla zasobu (np.: "nas-000YY/mapartition")|
|DOSSIER_MONTAGE|Katalog, w którym zainstalujesz zasób NFS na serwerze|


> [!primary]
>
> Przestrzeń NAS może być montowana automatycznie w momencie uruchamiania dystrybucji. W tym celu dodaj poniższe polecenie do pliku /etc/fstab:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw,_netdev,mountproto=tcp 0 0
> ```
>

### Gentoo

Aby zamontować zasób NFS pod Gentoo:

- Zaloguj się do serwera przez SSH
- Zainstaluj pakiet “nfs-utils” przy użyciu polecenia:


```sh
emerge nfs-utils
```

Uruchom usługę NFS, wpisując polecenie:

```sh
/etc/init.d/nfs start
```

Następnie zastosuj polecenie:


```sh
mount -t nfs IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE
```

|Argument|Opis |
|---|---|
|IP_NAS|Nazwa lub adres IP NAS|
|/CHEMIN_NFS|Ścieżka na serwerze NFS dla zasobu (np.: "nas-000YY/mapartition")|
|DOSSIER_MONTAGE|Katalog, w którym zainstalujesz zasób NFS na serwerze|


> [!primary]
>
> Przestrzeń NAS może być montowana automatycznie w momencie uruchamiania dystrybucji. W tym celu dodaj poniższe polecenie do pliku /etc/fstab:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw 0 0
> ```
> 
> Następnie dodaj "nfsmount" do rozruchu serwera za pomocą następującego polecenia:
> 
> ```
> rc-update add nfsmount default
> ```
>

### Proxmox

Kompatybilność: Proxmox 3.X

Aby zamontować zasób NFS pod Proxmox:

- Zaloguj się do interfejsu administracyjnego Proxmox
- Kliknij zakładkę `Storage`{.action}.


![configuration](images/img_4647.jpg){.thumbnail}

- Kliknij `Dodaj`{.action} i wybierz `NFS`{.action}.


![configuration](images/img_4648.jpg){.thumbnail}


|Argument|Opis |
|---|---|
|ID|Nazwa wybrana dla Twojego zasobu NFS|
|Serwer|Nazwa NAS|
|Eksport|Ścieżka na serwerze NFS dla zasób|
|Zawartość|Rodzaj zawartości dla tego zasobu NFS (możliwa wartość: Images, ISO, Template, Backups, Containers)|


> [!primary]
>
> Przestrzeń NAS może być montowana automatycznie w momencie uruchamiania dystrybucji. W tym celu dodaj poniższe polecenie do pliku /etc/fstab:
> 
> ```
> IP_NAS:/CHEMIN_NFS /DOSSIER_MONTAGE nfs rw 0 0
> ```
>

### ESXI

Aby zamontować udział NFS pod ESXI:

- Zaloguj się do serwera przez vSphere
- W panelu administracyjnym kliknij `Inventory`{.action}: 


![configuration](images/esxi_1.jpg){.thumbnail}

- Przejdź do zakładki `Konfiguracja`{.action}.


![configuration](images/esxi_2.jpg){.thumbnail}

- Następnie kliknij `Storage`{.action} w menu po lewej stronie.


![configuration](images/esxi_3.jpg){.thumbnail}

Wypełnij formularz, który się wyświetli.


![configuration](images/esxi_4.jpg){.thumbnail}

|Argument|Opis |
|---|---|
|Serwer|Nazwa lub adres IP NAS|
|Folder|Ścieżka na serwerze NFS dla uzasobu (np.: "nas-000YY/mapartition")|
|Nazwa datastore|Nazwa, którą nadałeś datastorowi|


## Dodatkowe informacje


> [!alert]
>
> Użytkownik NFS posiada uprawnienia `root`, zmiany uprawnień tego użytkownika mogą powodować konflikty z istniejącymi uprawnieniami CIFS/SMB.
> 

## Sprawdź również

Przyłącz się do społeczności naszych użytkowników na stronie <https://community.ovh.com/en/>.