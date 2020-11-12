---
title: 'Storage-Backup auf einem dedizierten Server verwenden'
slug: dienste-storage-backup
excerpt: 'So aktivieren und verwenden Sie Ihr Storage-Backup'
section: Server Management
---

**Stand 18.12.2018**

## Einleitung

Alle [ OVH Dedicated Server](https://www.ovh.de/dedicated_server/){.external} Angebote enthalten einen 500 GB Backup-Speicher pro Server, auf dem Sie [Ihre Daten sichern](https://docs.ovh.com/de/dedicated/dedizierten-server-sichern/){.external} können.

**In dieser Anleitung erfahren Sie, wie Sie diesen Backup-Speicher aktivieren und verwenden.**


## Voraussetzungen

- Sie verfügen über einen [dedizierten Server](https://www.ovh.de/dedicated_server/){.external}.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt und befinden sich im Bereich `Bare Metal Cloud`{.action}.


## Beschreibung

### Backup-Speicher aktivieren

Loggen Sie sich in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und gehen Sie im Bereich `Bare Metal Cloud`{.action} auf die Seite Ihres Servers. Klicken Sie auf den Tab `Storage Backup`{.action}, klicken Sie dann auf den Button `Storage-Backup aktivieren`{.action} und bestätigen Sie.

![Backup-Speicher aktivieren](images/backup_storage_activation.png){.thumbnail}

Sie erhalten anschließend eine Bestätigungsmail für die Aktivierung und Ihr Storage-Backup ist in wenigen Minuten verfügbar.


### Zugangskontrolle konfigurieren

Der Zugang zu Ihrem Backup-Speicher ist auf bestimmte IP-Adressen beschränkt, die mithilfe einer Zugriffsliste, der sogenannten *Access Control List* (ACL), festgelegt werden. Für alle IP-Adressen Ihres Accounts ist standardmäßig ein FTP/FTPS-Zugang zum Backup-Speicher eingerichtet. Die anderen Protokolle (NFS und CIFS) haben standardmäßig keinen Zugriff. Um diesen Protokollen Zugriff auf Ihren Backup-Speicher zu erlauben, muss eine entsprechende ACL erstellt werden.


#### Zugang hinzufügen

Klicken Sie im Bereich `Storage-Backup`{.action} auf `Zugang hinzufügen`{.action}.

![Zugang zum Backup-Speicher hinzufügen](images/add_access.png){.thumbnail}

Wählen Sie zunächst den IP-Block und dann das Protokoll aus, für die Sie den Zugang aktivieren möchten. Klicken Sie dann auf `Weiter`{.action}.

> [!primary]
>
> Sie können den Zugang zum Backup-Speicher nur für in Ihrem OVH Account vorhandene IP-Blöcke aktivieren.
>

![Zugang zum Backup-Speicher hinzufügen](images/add_access_ip.png){.thumbnail}

Um den Vorgang zu bestätigen, klicken Sie auf `Beenden`{.action}.

![Zugang zum Backup-Speicher hinzufügen](images/add_access_confirmation.png){.thumbnail}

Sie können nun über den ausgewählten IP-Block auf das Storage-Backup Ihres Servers zugreifen.


#### Zugang bearbeiten

Um die Protokolle eines freigegebenen IP-Blocks zu ändern, klicken Sie in der Zeile des betreffenden Blocks auf den Button `...`{.action} und dann auf `Zugang bearbeiten`{.action}. Aktivieren oder deaktivieren Sie dann die gewünschten Protokolle. Bestätigen Sie Ihre Änderungen anschließend, indem Sie auf `Bestätigen`{.action} klicken.

![Zugang bearbeiten](images/modify_access.png){.thumbnail}


#### Zugang löschen

Um einen freigegebenen IP-Block zu sperren, klicken Sie in der Zeile des betreffenden Blocks auf den Button `...`{.action} und dann auf `Zugang löschen`{.action}.

![Zugang bearbeiten](images/delete_access.png){.thumbnail}

Bestätigen Sie abschließend, indem Sie auf `Bestätigen`{.action} klicken. Der Zugang zum Storage-Backup ist nun für den betreffenden IP-Block gesperrt.


### Passwort ändern

Klicken Sie im Tab `Storage Backup`{.action} auf `Haben Sie Ihre Passwort verloren?`{.action} und bestätigen Sie.

![Passwort ändern](images/forgotten_password.png){.thumbnail}

Eine E-Mail mit Informationen zur Wiederherstellung des Passworts wird an die E-Mail-Adresse versandt, die in Ihrem Administrator-Account gespeichert ist. Folgen Sie einfach den Anweisungen in der E-Mail, um Ihr Passwort zurückzusetzen.


### Storage-Backup löschen

Klicken Sie im Tab `Storage Backup`{.action} auf `Storage-Backup löschen`{.action} und bestätigen Sie.

![Storage-Backup löschen](images/backup_storage_delete.png){.thumbnail}

> [!warning]
> 
> Achtung: Das Löschen kann nicht rückgängig gemacht werden!
> 

Ihr Storage-Backup wird nach wenigen Minuten komplett gelöscht.


### Zusätzlichen Backup-Speicherplatz bestellen

Klicken Sie im Tab `Storage Backup`{.action} auf `Speicherplatz bestellen`{.action}. 

![Speicherplatz bestellen](images/additional_space_order.png){.thumbnail}

Wählen Sie die gewünschte Speicherkapazität aus und klicken Sie dann auf `Weiter`{.action}.

![Auswahl zusätzlicher Speicherplatz](images/additional_space_order_selection.png){.thumbnail}

Lesen und akzeptieren Sie nun die Allgemeinen Geschäftsbedingungen, indem Sie einen Haken im entsprechenden Feld setzen, und bestätigen Sie Ihre Bestellung über den Button `Bestätigen`{.action}.

Ein Bestellschein wird erstellt. Sobald die Zahlung durchgeführt wurde, steht Ihnen der zusätzliche Speicherplatz zur Verfügung.


### Storage-Backup nutzen

> [!primary]
>
> Storage-Backup erstellt keine automatischen Backups Ihrer Daten. Der Dienst stellt lediglich den Speicherplatz und die Übertragungsprotokolle zur Verfügung. Es liegt somit in Ihrer Verantwortung, eine angemessene Backup-Strategie mit den Tools Ihrer Wahl einzurichten. OVH ist für auf dem Backup-Speicher abgelegte Daten nicht verantwortlich.
>


#### FTP/FTPS

##### NcFTP (für Linux)

Geben Sie für das Backup einer einzelnen Datei folgenden Befehl ein:

```sh
ncftpput -u FtpUserName -p FtpPassword HostName /FolderLocation /File
```

**Das FTPS-Protokoll wird von diesem Befehl nicht unterstützt. Verwenden Sie für eine gesicherte Übertragung Ihrer Daten stattdessen den lftp-Client oder das cURL-Interface.**

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **FolderLocation**: Zugriffspfad zum Zielverzeichnis, in dem Sie die Datei speichern möchten
* **File**: Name der Datei, für die Sie ein Backup erstellen möchten

Um ein Backup für ein komplettes Verzeichnis zu erstellen, archivieren Sie dieses und übertragen Sie es dann mit folgendem Befehl in Ihren Backup-Bereich:

```sh
tar czf - /FolderName | ncftpput -u FtpUserName -p FtpPassword -c HostName ArchiveName.tar.gz
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FolderName**: Zugriffspfad zum Verzeichnis, für das Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **ArchiveName**: Name des Verzeichnisses, für das Sie ein Backup erstellen möchten

Um eine Archivdatei aus Ihrem Backup-Speicher herunterzuladen, können Sie folgenden Befehl verwenden:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **LocalFolder**: Zugriffspfad zum lokalen Verzeichnis, in dem Sie die Datei speichern möchten
* **File**: Zugriffspfad zur Datei, die Sie herunterladen möchten

##### cURL (für Linux)

> [!primary]
>
> Um das FTPS-Protokoll zu verwenden, muss der Name Ihres Storage-Backups geändert werden. Lautet der Name beispielsweise „ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net“, muss er zu „ftpback-rbxX-YYY.mybackup.ovh.net“ abgeändert werden. Fügen Sie außerdem dem untenstehenden Befehl ein `-ssl` Argument hinzu.
>

Geben Sie für das Backup einer einzelnen Datei folgenden Befehl ein:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **File**: Name der Datei, für die Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **FolderLocation**: Zugriffspfad zum Zielverzeichnis, in dem Sie die Datei speichern möchten

Um ein Backup für ein komplettes Verzeichnis zu erstellen, archivieren Sie dieses und übertragen Sie es dann mit folgendem Befehl in Ihren Backup-Bereich:

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FolderName**: Zugriffspfad zum Verzeichnis, für das Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **FolderLocation**: Zugriffspfad zum lokalen Verzeichnis, in dem Sie die Datei speichern möchten
* **ArchiveName**: Name des Verzeichnisses, für das Sie ein Backup erstellen möchten

Um eine Archivdatei aus Ihrem Backup-Speicher herunterzuladen, können Sie folgenden Befehl verwenden:

```sh
cd /LocalFolder
curl -u FtpUsername:FtpPassword ftp://HostName/File 
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **LocalFolder**: Name des lokalen Verzeichnisses, in dem Sie die Datei speichern möchten
* **File**: Zugriffspfad zur Datei, die Sie herunterladen möchten


##### lftp (für Linux)

> [!primary]
>
> lftp verwendet standardmäßig FTP+SSL/TLS. Ändern Sie deshalb den Namen Ihres Storage-Backups. Lautet dieser beispielsweise „ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net“, muss er zu „ftpback-rbxX-YYY.mybackup.ovh.net“ abgeändert werden.
>

Geben Sie für das Backup einer einzelnen Datei folgenden Befehl ein:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **File**: Name der Datei, für die Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **FolderLocation**: Zugriffspfad zum Zielverzeichnis, in dem Sie die Datei speichern möchten

Um ein Backup für ein komplettes Verzeichnis zu erstellen, archivieren Sie dieses und übertragen Sie es dann mit folgendem Befehl in Ihren Backup-Bereich:

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FolderName**: Zugriffspfad zum Verzeichnis, für das Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **FolderLocation**: Zugriffspfad zum lokalen Verzeichnis, in dem Sie die Datei speichern möchten
* **ArchiveName**: Name des Verzeichnisses, für das Sie ein Backup erstellen möchten

Um eine Archivdatei aus Ihrem Backup-Speicher herunterzuladen, können Sie folgenden Befehl verwenden:

```sh
cd /LocalFolder
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "get /File; quit"
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Storage-Backups
* **LocalFolder**: Name des lokalen Verzeichnisses, in dem Sie die Datei speichern möchten
* **File**: Zugriffspfad zur Datei, die Sie herunterladen möchten

##### FileZilla

Nachdem Sie FileZilla auf Ihrem Server installiert haben, können Sie die Software konfigurieren, um sich in Ihren Backup-Speicher einzuloggen. Verwenden Sie hierfür die FTP-Login-Daten, die Ihnen bei der Aktivierung Ihres Storage-Backups zugesandt wurden. Für den Login benötigen Sie den Benutzernamen und das zugehörige Passwort.


#### NFS

Vergewissern Sie sich zunächst, dass Ihre IP-Blöcke auf den Speicher zugreifen und das NFS-Protokoll verwenden können. Je nach dem von Ihnen verwendeten Linux-Betriebssystem kann es sein, dass der NFS-Client installiert und der NFS/portmap-Dienst gestartet werden muss.

Wenn Sie den NFS-Client installiert und den portmap-Dienst gestartet haben, können Sie die NFS-Freigabe wie eine normale Partition mit folgendem Befehl mounten:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **HostName**: Name Ihres Storage-Backups
* **ServiceName**: Name Ihres Servers (z. B.: ns0000000.ip-123-123-123.net)
* **FolderMount**: Verzeichnis, in das Sie die NFS-Freigabe mounten möchten

Wenn die Freigabe eingehängt ist, können Sie Befehle wie **cp** oder **rsync** wie bei einem normalen Verzeichnis nutzen.


#### CIFS

##### Windows

Verbinden Sie sich mit Ihrem Server, öffnen Sie die Eingabeaufforderung und geben Sie folgenden Befehl ein:

```sh
net use z: \\HostName\ServiceName
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **HostName**: Name Ihres Storage-Backups
* **ServiceName**: Name Ihres Servers (z. B.: ns0000000.ip-123-123-123.net)

##### Linux

Stellen Sie eine SSH-Verbindung zu Ihrem Server her und geben Sie den folgenden Befehl ein:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **HostName**: Name Ihres Storage-Backups
* **ServiceName**: Name Ihres Servers (z. B.: ns0000000.ip-123-123-123.net)
* **FolderMount**: Verzeichnis, in das Sie die Freigabe mounten möchten (es muss bereits existieren)


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
