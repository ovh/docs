---
title: 'NAS via NFS-Freigabe einhängen'
slug: nas-nfs
excerpt: 'Hier erfahren Sie, wie Sie einen NAS via NFS-Freigabe mounten.'
section: NAS
---

**Stand 16.07.2019**

## Voraussetzungen

In dieser Anleitung erfahren Sie, wie Sie auf den gängigsten Distributionen einen NFS-Mount durchführen. Um eine NFS-Freigabe zu mounten, benötigen Sie:

- einen OVH NAS
- eine Maschine im OVH Netzwerk (Dedicated Server, VPS, Instanz, ...)
- eine NFS-kompatible Distribution


### Linux

Kompatibilität: Debian 6/7/8 & Ubuntu 12/13/14

Voraussetzungen zum Mounten einer NFS-Freigabe unter Linux:

- Sie sind via SSH auf Ihrem Server eingeloggt.
- Sie haben das Paket „nfs-client“ über folgenden Befehl installiert:


```sh
aptitude install nfs-client
```

Verwenden Sie anschließend folgenden Mount-Befehl:


```sh
mount -t nfs -o _netdev,mountproto=tcp IP_NAS:/NFS_PATH /MOUNTING_FOLDER
```

|Argument|Beschreibung|
|---|---|
|IP_NAS|Name oder IP des NAS|
|NFS_PATH|Pfad auf dem NFS-Server für die Freigabe (z. B. „nas-000YY/meinepartition“)|
|MOUNTING_FOLDER|Der Ordner, in dem Sie Ihre NFS-Freigabe auf dem Server mounten werden|


> [!primary]
>
> Um den NAS-Mount beim Start Ihrer Distribution zu automatisieren, fügen Sie die folgende Zeile zur Datei /etc/fstab hinzu:
> 
> ```
> IP_NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw,_netdev,mountproto=tcp 0 0
> ```
>

*Beispiel:*

```sh
mount -t nfs -o _netdev,mountproto=tcp 10.16.XXX.YYY:zpool-999888/PartitionName /media/NasHA -v
```

|Argument|Beschreibung|
|---|---|
|IP_NAS|10.16.XXX.YYY|
|NFS_PATH|zpool-999888/PartitionName|
|MOUNTING_FOLDER|/media/NasHA -v|

### CentOS

Kompatibilität: CentOS 6

Voraussetzungen zum Mounten einer NFS-Freigabe unter CentOS 6:

- Sie sind via SSH auf Ihrem Server eingeloggt.
- Sie haben die Pakete „nfs-utils“ und „rpcbind“ mit folgendem Befehl installiert:


```sh
yum install nfs-utils rpcbind
```

Starten Sie anschließend den Dienst `rpcbind` mit folgendem Befehl neu:


```sh
/etc/init.d/rpcbind start
```

Verwenden Sie anschließend folgenden Mount-Befehl:

```sh
mount -t nfs -o _netdev,mountproto=tcp IP_NAS:/NFS_PATH /MOUNTING_FOLDER
```

|Argument|Beschreibung|
|---|---|
|IP_NAS|Name oder IP des NAS|
|NFS_PATH|Pfad auf dem NFS-Server für die Freigabe (z. B. „nas-000YY/meinepartition“)|
|MOUNTING_FOLDER|Der Ordner, in dem Sie Ihre NFS-Freigabe auf dem Server mounten werden|


> [!primary]
>
> Um den NAS-Mount beim Start Ihrer Distribution zu automatisieren, fügen Sie die folgende Zeile zur Datei /etc/fstab hinzu:
> 
> ```
> IP_NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw,_netdev,mountproto=tcp 0 0
> ```
>

### Gentoo

Voraussetzungen zum Mounten einer NFS-Freigabe unter Gentoo:

- Sie sind via SSH auf Ihrem Server eingeloggt.
- Sie haben das Paket „nfs-utils“ mit folgendem Befehl installiert:


```sh
emerge nfs-utils
```

Starten Sie anschließend den NFS-Dienst mit folgendem Befehl:

```sh
/etc/init.d/nfs start
```

Verwenden Sie anschließend folgenden Mount-Befehl:


```sh
mount -t nfs IP_NAS:/NFS_PATH /MOUNTING_FOLDER
```

|Argument|Beschreibung|
|---|---|
|IP_NAS|Name oder IP des NAS|
|NFS_PATH|Pfad auf dem NFS-Server für die Freigabe (z. B. „nas-000YY/meinepartition“)|
|MOUNTING_FOLDER|Der Ordner, in dem Sie Ihre NFS-Freigabe auf dem Server mounten werden|


> [!primary]
>
> Um den NAS-Mount beim Start Ihrer Distribution zu automatisieren, fügen Sie die folgende Zeile zur Datei /etc/fstab hinzu:
> 
> ```
> IP_NAS:/NFS_PATH /MOUNTING_FOLDER nfs rw 0 0
> ```
> 
> Fügen Sie anschließend mit folgendem Befehl den Dienst „nfsmount" zum Start Ihres Servers hinzu:
> 
> ```
> rc-update add nfsmount default
> ```
>

### Proxmox

Kompatibilität: Proxmox 3.X

Voraussetzungen zum Mounten einer NFS-Freigabe unter Proxmox:

- Sie sind mit dem Verwaltungsinterface von Proxmox verbunden.
- Sie befinden sich im Tab `Storage`{.action}.


![Konfiguration](images/img_4647.jpg){.thumbnail}

- Klicken Sie auf `Hinzufügen`{.action} und wählen Sie `NFS`{.action} aus.


![Konfiguration](images/img_4648.jpg){.thumbnail}


|Argument|Beschreibung|
|---|---|
|ID|Name für Ihre NFS-Freigabe|
|Server|Name oder IP des NAS|
|Export|Pfad auf dem NFS-Server für die Freigabe|
|Inhalt|Inhaltstyp für diese NFS-Freigabe (mögliche Werte: Images, ISO, Template, Backups, Containers)|


> [!primary]
>
> Um den NAS-Mount beim Start Ihrer Distribution zu automatisieren, fügen Sie die folgende Zeile zur Datei /etc/fstab hinzu:
> 
> ```
> IP_NAS:/CNFS_PATH /MOUNTING_FOLDER nfs rw 0 0
> ```
>

### ESXi

Voraussetzungen zum Mounten einer NFS-Freigabe unter ESXi:

- Sie können via vSphere auf Ihren Server zugreifen.
- Sie befinden sich im Verwaltungspanel im Tab `Inventory`{.action}. 


![Konfiguration](images/esxi_1.jpg){.thumbnail}

- Gehen Sie zum Tab `Configuration`{.action}.


![Konfiguration](images/esxi_2.jpg){.thumbnail}

- Klicken Sie im linken Menü auf `Storage`{.action}.


![Konfiguration](images/esxi_3.jpg){.thumbnail}

Füllen Sie das nun angezeigte Formular aus:


![Konfiguration](images/esxi_4.jpg){.thumbnail}

|Argument|Beschreibung|
|---|---|
|Server|Name oder IP des NAS|
|Folder|Pfad auf dem NFS-Server für die Freigabe (z. B. „/nas-000YY/meinepartition“)|
|Datastore Name|Der von Ihnen gewählte Name für den Datastore|


## Weitere Informationen


> [!alert]
>
> Der NFS-Benutzer ist `root`-Benutzer. Rechteänderungen mit diesem Benutzer können daher Konflikte mit vorhandenen CIFS/SMB-Rechten verursachen.
> 