---
title: 'Backup Storage auf einem Dedicated Server verwenden'
slug: dienste-storage-backup
excerpt: 'Erfahren Sie hier, wie Sie zusätzlichen Speicherplatz aktivieren und auf diesen zugreifen'
section: Server Management
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 15.03.2021**

## Ziel

Die dedizierten Server von OVHcloud inkludieren einen zusätzlichen Backup-Speicher für die Speicherung wichtiger Daten und Konfigurationsdateien. Dieser Bereich ist skalierbar, abgesichert und vom Hauptserver unabhängig.

**Diese Anleitung erklärt, wie Sie Ihren Backup-Speicherplatz aktivieren und verwenden.**

> [!primary]
> Für weitere Informationen empfehlen wir Ihnen, die [Produktseite](https://www.ovhcloud.com/de/bare-metal/backup-storage/) der Backup Storage Option einzusehen.
>
> Beachten Sie, dass diese Anleitung nicht für OVHcloud US Dienstleistungen gilt.
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

> [!warning]
> Diese Funktion kann nur eingeschränkt oder nicht verfügbar sein, falls ein Dedicated Server der [**Eco** Produktlinie](https://eco.ovhcloud.com/de/about/) eingesetzt wird.
>
> Weitere Informationen finden Sie auf der [Vergleichsseite](https://eco.ovhcloud.com/de/compare/).

## In der praktischen Anwendung

### Backup Storage aktivieren

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) 
ein. Wechseln Sie zum Bereich `Bare Metal Cloud`{.action} und wählen Sie dann Ihren Server unter `Dedicated Server`{.action} aus. Klicken Sie im Tab `Storage-Backup`{.action} auf den Button  `Storage-Backup aktivieren`{.action}.

![Backup Storage aktivieren](images/backup-storage01.png){.thumbnail}

Klicken Sie im angezeigten Kontextmenü auf `Bestätigen`{.action}.

![Backup Storage aktivieren](images/backup-storage02.png){.thumbnail}

Ihr Backup Storage wird innerhalb weniger Minuten konfiguriert. Sie erhalten eine Bestätigungsmail, sobald die Konfiguration abgeschlossen ist.

### ACL konfigurieren

Der Zugriff auf Ihren Speicherplatz ist per IP-Adresse mithilfe einer Zugriffskontrollliste (<i>Access Control List</i> oder ACL) geregelt. Auf den Speicher können nur die Ihrem Account zugehörigen IP-Adressen zugreifen, die der ACL hinzugefügt wurden. Die Zugriffsprotokolle (FTP, NFS und CIFS) sind standardmäßig nicht freigegeben, können aber beim Hinzufügen von IP-Adressen ausgewählt werden.

#### Zugang zum Backup Storage hinzufügen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Wechseln Sie zum Bereich `Bare Metal Cloud`{.action} und wählen Sie dann Ihren Server unter `Dedicated Server`{.action} aus. Klicken Sie im Tab `Storage-Backup`{.action} auf den Button `Storage-Backup löschen`{.action}.

![Zugang zum Backup-Speicher hinzufügen](images/backup-storage03.png){.thumbnail}

Wählen Sie den IP-Block aus, den Sie autorisieren möchten. Wählen Sie danach die freizugebenden Protokolle aus und klicken Sie auf `Weiter`{.action}.

> [!primary]
>
> Über Ihr Kundencenter können nur IP-Blöcke Ihres OVHcloud Kunden-Accounts zur ACL hinzugefügt werden.
>

![Zugang zum Backup-Speicher hinzufügen](images/backup-storage04.png){.thumbnail}

Bestätigen Sie, indem Sie auf `Beenden`{.action} klicken.

Sie können anschließend über den von Ihnen gewählten IP-Block auf den Backup Storage Ihres Servers zugreifen.

#### Zugang zum Backup Storage bearbeiten oder löschen

Sobald der Dienst aktiviert ist, wird Ihre ACL Tabelle im Tab `Storage-Backup`{.action} angezeigt. Klicken Sie auf `...`{.action}. rechts neben einem IP-Block, um das Zugangsmenü zu öffnen.

![Zugang zum Backup-Speicher hinzufügen](images/backup-storage05.png){.thumbnail}

Um die Protokolle für einen autorisierten IP-Block zu ändern, klicken Sie im Popup-Fenster auf `Zugang bearbeiten`{.action} und wählen Sie die Protokolle im angezeigten Menü aus. Speichern Sie die Änderungen, indem Sie auf `Bestätigen`{.action} klicken.

Um die Autorisierung für einen IP-Block zu widerrufen, klicken Sie auf `Zugang löschen`{.action} und dann auf `Bestätigen`{.action}. 

#### Zugriff auf den Backup Storage über eine IP außerhalb Ihres Kunden-Accounts <a name="accessbackup"></a>

Der Zugang zu Ihrem Backup Storage über Ihr OVHcloud Kundencenter ist auf Ihre damit verbundenen Dienste beschränkt.

Um weitere IP-Adressen verschiedener Dienste hinzuzufügen, können Sie die OVHcloud API verwenden.
Auf diese Weise können Sie Ihre gesicherten Daten von einem anderen Dienst aus abrufen.

> [!warning]
> Es können nur IP-Adressen von OVHcloud autorisiert werden.
>

Loggen Sie sich auf [api.ovh.com](https://api.ovh.com/) ein und verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/features/backupFTP/access
>

Geben Sie die Felder wie folgt ein:

- `serviceName`: der Name Ihres Dedicated Servers
- `cifs`: Anhaken, falls erforderlich
- `ftp`: Anhaken, falls erforderlich
- `ipBlock`: Geben Sie die zugreifende IP-Adresse ein, in der Form `1.2.3.4/32`
- `nfs`: Anhaken, falls erforderlich

![Apiacladdress](images/aclapi01.png){.thumbnail}

Um zu überprüfen, ob Ihre IP-Adresse autorisiert ist, verwenden Sie folgenden Aufruf:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/features/backupFTP/access
>

![Apiacladdress](images/aclapi02.png){.thumbnail}

### Passwort zurücksetzen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) 
ein. Wechseln Sie zum Bereich `Bare Metal Cloud`{.action} und wählen Sie dann Ihren Server unter `Dedicated Server`{.action} aus. Klicken Sie im Tab `Storage-Backup`{.action} auf den Button `Sie haben Ihr Passwort vergessen?`{.action}.

Nachdem Sie im angezeigten Fenster auf `Bestätigen`{.action} geklickt haben, wird eine E-Mail an die für Ihren Administrator-Kontakt eingetragene E-Mail-Adresse versandt. Folgen Sie den darin enthaltenen Anweisungen, um Ihr Passwort zurückzusetzen.

### Backup Storage löschen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) 
ein. Wechseln Sie zum Bereich `Bare Metal Cloud`{.action} und wählen Sie dann Ihren Server unter `Dedicated Server`{.action} aus. Klicken Sie im Tab `Storage-Backup`{.action} auf den Button `Storage-Backup löschen`{.action}.

Klicken Sie auf `Bestätigen`{.action}, um mit der Löschung fortzufahren. Ihr Backup Storage wird nach einigen Minuten abgeschaltet. Alle Daten des Speicherplatzes werden gelöscht.

### Zusätzlichen Speicherplatz bestellen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) 
ein. Wechseln Sie zum Bereich `Bare Metal Cloud`{.action} und wählen Sie dann Ihren Server unter `Dedicated Server`{.action} aus. Klicken Sie im Tab `Storage-Backup`{.action} auf den Button `Speicherplatz bestellen`{.action}.

![Zusätzlichen Backup-Speicherplatz bestellen](images/backup-storage06.png){.thumbnail}

Wählen Sie die Speicherkapazität aus, die Sie bestellen möchten, und klicken Sie dann auf `Weiter`{.action}.

Beachten Sie die Informationen zu den Preisen sowie den Verträgen und bestätigen Sie Ihre Bestellung, indem Sie auf `Bestätigen`{.action} klicken.
Es wird ein Bestellschein erzeugt und sobald Ihre Zahlung verbucht wurde, erhalten Sie eine Benachrichtigung über die erfolgreiche Erweiterung Ihres Speicherplatzes.

### Backup Storage verwenden

> [!primary]
>
> Der Backup Storage Dienst führt kein automatisches Backup Ihrer Daten durch. Der Dienst stellt lediglich den Speicherplatz und die Übertragungsprotokolle zur Verfügung. Es liegt somit in Ihrer Verantwortung, eine angemessene Backup-Strategie mit den Tools Ihrer Wahl einzurichten. OVHcloud kann nicht für die in diesen Bereichen enthaltenen Daten verantwortlich gemacht werden.
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
* **HostName**: Name Ihres Backup Storages
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
* **HostName**: Name Ihres Backup Storages
* **ArchiveName**: Name des Verzeichnisses, für das Sie ein Backup erstellen möchten

Um eine Archivdatei aus Ihrem Backup-Speicher herunterzuladen, können Sie folgenden Befehl verwenden:

```sh
ncftpget -v -u FtpUsername -p FtpPassword HostName /LocalFolder /File
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Backup Storages
* **LocalFolder**: Zugriffspfad zum lokalen Verzeichnis, in dem Sie die Datei speichern möchten
* **File**: Zugriffspfad zur Datei, die Sie herunterladen möchten

##### cURL (für Linux)

> [!primary]
>
> Um das FTPS-Protokoll zu verwenden, muss der Name Ihres Backup Storage geändert werden. Lautet der Name beispielsweise “ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, muss er zu “ftpback-rbxX-YYY.mybackup.ovh.net” abgeändert werden. Fügen Sie außerdem dem untenstehenden Befehl ein `-ssl` Argument hinzu.
>

Geben Sie für das Backup einer einzelnen Datei folgenden Befehl ein:

```sh
curl -aT File ftp://FtpUsername:FtpPassword@HostName/FolderLocation
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **File**: Name der Datei, für die Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Backup Storages
* **FolderLocation**: Zugriffspfad zum Zielverzeichnis, in dem Sie die Datei speichern möchten

Um ein Backup für ein komplettes Verzeichnis zu erstellen, archivieren Sie dieses und übertragen Sie es dann mit folgendem Befehl in Ihren Backup-Bereich:

```sh
tar czf - /FolderName | curl ftp://FtpUsername:FtpPassword@HostName/FolderLocation/ArchiveName-$(date +%Y%m%d%H%M).tar.gz -T -
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FolderName**: Zugriffspfad zum Verzeichnis, für das Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Backup Storages
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
* **HostName**: Name Ihres Backup Storages
* **LocalFolder**: Name des lokalen Verzeichnisses, in dem Sie die Datei speichern möchten
* **File**: Zugriffspfad zur Datei, die Sie herunterladen möchten


##### lftp (für Linux)

> [!primary]
>
> lftp verwendet standardmäßig FTP+SSL/TLS. Ändern Sie deshalb den Namen Ihres Backup Storages. Lautet dieser beispielsweise “ftpback-rbxX-YYY.ip-Z.Z.Z.Z.net”, muss er zu “ftpback-rbxX-YYY.mybackup.ovh.net” abgeändert werden.
>

Geben Sie für das Backup einer einzelnen Datei folgenden Befehl ein:

```sh
lftp ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put File; quit"
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **File**: Name der Datei, für die Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Backup Storages
* **FolderLocation**: Zugriffspfad zum Zielverzeichnis, in dem Sie die Datei speichern möchten

Um ein Backup für ein komplettes Verzeichnis zu erstellen, archivieren Sie dieses und übertragen Sie es dann mit folgendem Befehl in Ihren Backup-Bereich:

```sh
tar czf - /FolderName | ftp://FtpUsername:FtpPassword@HostName:21 -e "cd FolderLocation; put /dev/stdin -o ArchiveName-$(date +%Y%m%d%H%M).tar.gz;quit"
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **FolderName**: Zugriffspfad zum Verzeichnis, für das Sie ein Backup erstellen möchten
* **FtpUsername**: Ihr FTP-Benutzername
* **FtpPassword**: Ihr FTP-Passwort
* **HostName**: Name Ihres Backup Storages
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
* **HostName**: Name Ihres Backup Storages
* **LocalFolder**: Name des lokalen Verzeichnisses, in dem Sie die Datei speichern möchten
* **File**: Zugriffspfad zur Datei, die Sie herunterladen möchten

##### FileZilla

Nachdem Sie FileZilla auf Ihrem Server installiert haben, können Sie die Software konfigurieren, um sich in Ihren Backup-Speicher einzuloggen. Verwenden Sie hierfür die FTP-Login-Daten, die Ihnen bei der Aktivierung Ihres Backup Storages zugesandt wurden. Für den Login benötigen Sie den Benutzernamen und das zugehörige Passwort.


#### NFS

Vergewissern Sie sich zunächst, dass Ihre IP-Blöcke auf den Speicher zugreifen und das NFS-Protokoll verwenden können. Je nach dem von Ihnen verwendeten Linux-Betriebssystem kann es sein, dass der NFS-Client installiert und der NFS/portmap-Dienst gestartet werden muss.

Wenn Sie den NFS-Client installiert und den portmap-Dienst gestartet haben, können Sie die NFS-Freigabe wie eine normale Partition mit folgendem Befehl mounten:

```sh
mount -t nfs HostName:/export/ftpbackup/ServiceName /FolderMount
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **HostName**: Name Ihres Backup Storages
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

* **HostName**: Name Ihres Backup Storages
* **ServiceName**: Name Ihres Servers (z. B.: ns0000000.ip-123-123-123.net)

##### Linux

Stellen Sie eine SSH-Verbindung zu Ihrem Server her und geben Sie den folgenden Befehl ein:

```sh
mount -t cifs -o sec=ntlm,uid=root,gid=100,dir_mode=0700,username=root,password= //HostName/ServiceName /mnt/FolderMount
```

Ersetzen Sie die Variablen im obenstehenden Beispielbefehl mit Ihren eigenen Werten.

* **HostName**: Name Ihres Backup Storages
* **ServiceName**: Name Ihres Servers (z. B.: ns0000000.ip-123-123-123.net)
* **FolderMount**: Verzeichnis, in das Sie die Freigabe mounten möchten (es muss bereits existieren)


## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
