---
title: Sich per SFTP verbinden
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/verbindung_per_sftp/'
excerpt: Sehen Sie hier, wie Sie sich per SFTP mit Ihrer Managed Bare Metal verbinden können
slug: verbindung_per_sftp
section: Erste Schritte
order: 3
---


**Stand 18.11.2020**

## Einleitung

Die Verbindung mit Ihren Datastores per SFTP (Secure File Transfert Protocol) ermöglicht es Ihnen, Ihrer Infrastruktur lokal gespeicherte Dateien hinzuzufügen. Sie können sich über ein graphisches Interface mit Programmen wie FileZilla verbinden, verfügbar für Windows und Mac. Außerdem können Sie unter Linux die Kommandozeile zur Verbindung nutzen.

Dieses System lässt Sie nur auf den Ordner “upload-vpn” Ihrer Datastores zugreifen. Auf diesem Wege kann nicht auf Dateien außerhalb dieses Ordners zugegriffen werden.

**Diese Anleitung erklärt, wie Sie sich per SFTP und ein graphisches Interface oder die Kommandozeile verbinden.**

## Voraussetzungen

- Sie verfügen über einen aktiven Nutzeraccount im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.

## Praktische Anwendung

### Verbindung mit graphischem Interface

Geben Sie in Ihrem FTP Client (im Beispiel ist dies FileZilla) folgende Werte ein:

```
Host: [sftp://pcc-xxx-xxx-xxx-xxx.ovh.com] / Username: user / Password: password
```

![SFTP Verbindung](images/connection_sftp_filezilla_log.png){.thumbnail}

Nach hergestellter Verbindung sehen Sie links Ihren lokalen Terminal und rechts Ihre Datastores:

![Verbindung per SFTP mit FileZilla](images/connection_sftp_filezilla.png){.thumbnail}

### Verbindung von einem Terminal aus

Überprüfen Sie in einem Terminal, dass der Befehl `sftp` installiert ist. Schreiben Sie dazu:

```sh
sftp
```

Der Befehl zur Herstellung der Verbindung ist folgender:

```sh
sftp user@pcc-xxx-xxx-xxx-xxx.ovh.com
```

Nun werden Sie nach dem Nutzerpasswort gefragt. Wenn Sie verbunden sind, können Sie mit dem Befehl `ls` Ihre Datastores auflisten:

```sh
sftp> ls pcc-000714
```

Durchsuchen Sie die Liste der gefundenen Datastores mit dem genannten Befehl:

```sh
sftp> pcc-000714
```

Mit dem Befehl `put` können Sie Dateien aus Ihrem Datastore auf Ihren lokalen Terminal exportieren.

```sh
sftp> put /home/ubuntu-18.04-server-amd64.iso
/datastore/pcc-000714/ubuntu-18.04-server-amd64.iso  
```

Mit dem Befehl `get` können Sie Dateien von Ihrem lokalen Terminal auf ihren Datastore importieren.

```sh
sftp> get /datastore/pcc-00714/ubuntu-18.04-server-amd64.iso /home/
```

Mit dem Befehl `exit` trennen Sie die Verbindung.

### Ansicht in vSphere

In Ihrem vSphere Interface können Sie einsehen, was Sie gerade gesandt haben, indem Sie Ihren Datastore durchsuchen. Klicken Sie dazu im Ordner “upload-vpn” auf den jeweiligen Datastore:

![SFTP Verbindung per vSphere](images/sftpconnection.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.

