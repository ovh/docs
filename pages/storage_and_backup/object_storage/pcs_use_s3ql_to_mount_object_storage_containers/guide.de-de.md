---
title: Object Storage Swift - Einen Object Container mit S3QL mounten
updated: 2021-10-27
---


## Ziel

S3QL ist ein Dateisystem, das Ihnen die lokale Speicherung Ihrer Daten unter Verwendung von Cloud Storage Lösungen wie OVH Object Storage ermöglicht.

Es bietet zahlreiche Funktionen wie transparente Datenkompression, Verschlüsselung oder auch die Anfertigung von Snapshots. Damit ist es besonders gut geeignet für die Erstellung von Backups.

Weitere Informationen finden Sie direkt auf der [S3QL-Webseite](http://www.rath.org/s3ql-docs/).

In dieser Hilfe erfahren Sie, wie Sie einen Object Container als dateisystem mounten.


## Voraussetzungen

- [Einen OpenStack User erstellen oder löschen](/pages/public_cloud/compute/create_and_delete_a_user)
- [Hinzufügen von Storage-Bereichen](/pages/storage_and_backup/object_storage/pcs_create_container)

## In der praktischen Anwendung

> [!primary]
>
> Die Verwendung eines Object Containers als Dateisystem kann die Performance Ihrer Oprationen beeinträchtigen.
>

### Erstellung des Dateisystems


- Erstellen Sie eine Datei mit den Verbindungsdaten:

```bash
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: TENANT_NAME:USERNAME
backend-password: PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```

Die Informationen wie TENANT_NAME und USERNAME finden Sie in Ihrer OpenRC-Datei.
Mehr dazu erfahren Sie in dieser Hilfe: [Zugriffs- und Sicherheitseinstellungen in Horizon](/pages/public_cloud/compute/access_and_security_in_horizon)

Die Argumente REGION_NAME und CT_NAME müssen entsprechend dem Namen und Standort Ihres Object Containers angepasst werden.

- Zugangsberechtigungen zur Authentifizierungsdatei bearbeiten:

```bash
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```

- Object Container formatieren:

```bash
admin@serveur1:~$ sudo mkfs.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
```

Dann müssen Sie noch die Passphrase zu Ihrer Authentifizierungsdatei hinzufügen.

Wenn Sie keine Passphrase konfigurieren möchten, löschen Sie die Zeile "fs-passphrase: PASSPHRASE" aus der Authentifizierungsdatei, damit es beim Mounten des Dateisystems nicht zu einem Fehler kommt.

### Mounten des Dateisystems

- Erstellung des Mount-Punktes

```bash
admin@serveur1:~$ sudo mkdir /mnt/container
```

- Mounten des Object Containers

```bash
admin@serveur1:~$ sudo mount.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME /mnt/container/
```

- Überprüfung des Prozesses

```bash
admin@serveur1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME 1.0T 0 1.0T 0% /mnt/container
```

Die Verwendung von S3QL im "Offline-Modus" ist nicht möglich.

Außerdem ist von einer Persistence-Konfiguration über die /etc/fstab-Datei abzuraten. Günstiger ist die Verwendung eines Skripts, das beim Hochfahren Ihres Servers gestartet wird.

## Weiterführende Informationen
 
Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
