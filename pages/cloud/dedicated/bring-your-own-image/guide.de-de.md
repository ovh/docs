---
title: Bring Your Own Image verwenden
excerpt: Erfahren Sie hier, wie Sie Ihre eigenen Images mit der OVHcloud APIv6 bereitstellen
slug: bringyourownimage
section: Fortgeschrittene Nutzung
---

**Letzte Aktualisierung am 21.07.2020**

## Ziel

Mithilfe der Funktion *Bring Your Own Image* (BYOI) können Sie *cloudready* Images direkt auf Ihren Dedicated Servern einrichten. Somit können Sie Bare Metal Dienste als Ressource für Ihre Deployments verwenden.

**Diese Anleitung erklärt, wie Sie *Bring Your Own Image* über die OVHcloud APIv6 verwenden.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal) in Ihrem Kunden-Account.
- Sie haben die [Credentials generiert, um die APIv6 zu verwenden](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/).

> [!warning]
>
> Eine neue Installation mittels BYOI wird alle auf dem Server vorhandenen Daten löschen.
>

## In der praktischen Anwendung

### Technische Einschränkungen

Es gibt noch einige technische Einschränkungen bei der Verwendung physischer Dienste wie Dedicated Server.
Bitte beachten Sie die unten aufgeführten Anforderungen bei der Vorbereitung Ihres Deployments. Diese Liste ist nicht erschöpfend.

- Boot-Modus: **uefi** oder **legacy**
- Partitionstyp: **MBR** oder **GPT**
- Das Bildformat: **qcow2** oder **raw**

Wenn Ihr Server über **uefi** Boot verfügt, müssen Sie in Ihrem Image unbedingt eine **EFI**-Partition hinzufügen.

### Image deployen

Loggen Sie sich auf [https://api.ovh.com/](https://api.ovh.com/) ein und gehen Sie dann in den Bereich `/dedicated/server`{.action}. Mit dem `Filter`-Feld können Sie nach „BringYourOwnImage“ suchen.

Die BYOI Funktion nutzt drei API-Aufrufe.

![calls API](images/apicalls.png){.thumbnail}

Um Ihr Image zu deployen, verwenden Sie folgenden Aufruf und vervollständigen Sie die erforderlichen Felder:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Feld | Beschreibung |
|-|-|
| serviceName | Name Ihres Servers. |
| URL | URL, unter der Ihr Image abgerufen wird. |
| checkSum | Die Prüfsumme Ihres Images. |
| checkSumType | Prüfsummentyp Ihres Images (md5, sha1, sha256, sha512). |
| enable (ConfigDrive)* | Die Erstellung der ConfigDrive Partition aktivieren (_cloud-init_). |
| hostname (ConfigDrive)* | Hostname Ihres Servers. |
| sshKey (ConfigDrive)* | Ihr öffentlicher SSH-Schlüssel. |
| userData (ConfigDrive)* | Ihr Post-Installationsskript. |
| userMetadatas (ConfigDrive)* | Metadaten, die von _cloud-init_ zum Zeitpunkt des Boot verwendet werden. |
| description | Bezeichnung für Ihr Image. |
| diskGroupId | Die Kennung (ID) der zu verwendenden Festplatte. |
| httpHeader | Nur anzugeben, wenn nötig, um das Image herunterzuladen. |
| type | Typ/Format Ihres Images (qcow2, raw, ova). |

* „ConfigDrive“ ist eine von _cloud-init_ beim ersten Boot Ihres Servers verwendete Partition, um die gewünschte Konfiguration festzulegen. Sie können auswählen, ob Sie diese Option aktivieren möchten.

![POST API Call](images/postapicall.png){.thumbnail}

Wenn die Felder ausgefüllt sind, starten Sie die Bereitstellung, indem Sie auf `Execute`{.action} klicken.

### Deployment überprüfen

Sie können die Bereitstellung Ihres Images über den unten stehenden API Aufruf oder über KVM / [IPMI](../verwendung-ipmi-dedicated-server/) verfolgen.

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

In diesem Beispiel wird die Bereitstellung gestartet.

![GET API Call](images/getapicall.png){.thumbnail}

Die Bereitstellung kann etwa zehn Minuten dauern. Sobald die Operation abgeschlossen ist, wird der Status Ihrer Deployments auf „done“ umgestellt, und Ihr Server wird von der Festplatte neu gestartet.

#### Ausgabe-Beispiele

Hier einige Beispiele für Meldungen:

| Nachricht | Bedeutung |
|-|-|
| Can't write qcow2 on disk. | Das Image qcow2 kann nicht auf die Festplatte geschrieben werden. |
| Could not download, qcow2 image is too big to download in memory. | Es gibt nicht genug RAM, um das Image zu speichern. |
| Could not download image located: http://path/of/your/image | Das Image kann nicht heruntergeladen werden von http://path/of/your/image |
| Bad format image, expected: qcow2, raw. | Das Bildformat ist nicht korrekt. |
| Bad checkSumType, expected: sha1, sha256, md5. | Der Prüfsummentyp ist nicht korrekt. |
| bad checkSumType for downloaded file, got: 1234 "While Expecting 5678" | Die Prüfsumme ist nicht korrekt. |
| Can not move backup GPT data structures to the end of disk. | Das Festplattenformat ist nicht korrekt. |
| Could not create configdrive on disk. | Die „ConfigDrive“ Partition kann nicht erstellt werden. |


### Deployment löschen

Sie können die Deployment-Option mit folgendem Aufruf löschen:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

Dadurch wird der Deployment-Status gelöscht und Ihr Server in den Rescue-Modus versetzt.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
