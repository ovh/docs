---
title: Einen Object Container mit S3QL mounten
excerpt: Einen Object Container mit S3QL mounten
slug: einen_object_container_mit_s3ql_mounten
section: Object Storage
legacy_guide_number: g1908
---


## 
S3QL ist ein Dateisystem, das Ihnen die lokale Speicherung Ihrer Daten unter Verwendung von Cloud Storage Lösungen wie OVH Object Storage ermöglicht.

Es bietet zahlreiche Funktionen wie transparente Datenkompression, Verschlüsselung oder auch die Anfertigung von Snapshots. Damit ist es besonders gut geeignet für die Erstellung von Backups.

Weitere Informationen finden Sie direkt auf der [S3QL-Webseite](http://www.rath.org/s3ql-docs/).

In dieser Hilfe erfahren Sie, wie Sie einen Object Container als dateisystem mounten.


## Voraussetzungen

- [Erstellung eines Zugangs zu Horizon]({legacy}1773)
- [Hinzufügen von Storage-Bereichen]({legacy}1790)



## Achtung!
Die Verwendung eines Object Containers als Dateisystem kann die Performance Ihrer Oprationen beeinträchtigen.


## Erstellung des Dateisystems


- Erstellen Sie eine Datei mit den Verbindungsdaten:

```
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: TENANT_NAME:USERNAME
backend-password: PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```



Die Informationen wie TENANT_NAME und USERNAME finden Sie in Ihrer OpenRC-Datei.
Mehr dazu erfahren Sie in dieser Hilfe:

- [Zugriff und Sicherheit in Horizon]({legacy}1774)


Die Argumente REGION_NAME und CT_NAME müssen entsprechend dem Namen und Standort Ihres Object Containers angepasst werden.


- Zugangsberechtigungen zur Authentifizierungsdatei bearbeiten:

```
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```


- Object Container formatieren:

```
admin@serveur1:~$ sudo mkfs.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/GRA:CT_S3QL
```



Dann müssen Sie noch die Passphrase zu Ihrer Authentifizierungsdatei hinzufügen.

Wenn Sie keine Passphrase konfigurieren möchten, löschen Sie die Zeile "fs-passphrase: PASSPHRASE" aus der Authentifizierungsdatei, damit es beim Mounten des Dateisystems nicht zu einem Fehler kommt.


## Mounten des Dateisystems

- Erstellung des Mount-Punktes

```
admin@serveur1:~$ sudo mkdir /mnt/container
```


- Mounten des Object Containers

```
admin@serveur1:~$ sudo mount.s3ql --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/GRA:CT_S3QL /mnt/container/
```


- Überprüfung des Prozesses

```
admin@serveur1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/GRA:CT_S3QL 1.0T 0 1.0T 0% /mnt/container
```



Die Verwendung von S3QL im "Offline-Modus" ist nicht möglich.

Außerdem ist von einer Persistence-Konfiguration über die /etc/fstab-Datei abzuraten. Günstiger ist die Verwendung eines Skripts, das beim Hochfahren Ihres Servers gestartet wird.


## FAQ
Antworten auf zahlreiche Fragen finden Sie zweifellos in den [FAQ von S3QL](https://bitbucket.org/nikratio/s3ql/wiki/FAQ).


## 
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!

