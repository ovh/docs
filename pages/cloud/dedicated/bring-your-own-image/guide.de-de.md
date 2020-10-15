---
title: Bring Your Own Image verwenden
excerpt: Erfahren Sie hier, wie Sie Ihre eigenen Images mit der OVHcloud APIv6 bereitstellen
slug: bringyourownimage
section: Fortgeschrittene Nutzung
---

**Stand 21.07.2020**

## Einleitung

Mithilfe der Funktion *Bring Your Own Image*  können Sie *cloudready* Images direkt auf Ihren Dedicated Servern einrichten. Somit können Sie Bare Metal Dienste als Ressource für Ihre Deployments verwenden.

**Diese Anleitung erklärt, wie Sie *Bring Your Own Image* über die OVHcloud APIv6 verwenden.**

## Voraussetzungen

- Sie verfügen über [einen dedizierten OVHcloud Server](https://www.ovhcloud.com/de/bare-metal/).
- Sie haben die [Credentials generiert, um die APIv6 zu verwenden](https://docs.ovh.com/gb/en/api/first-steps-with-ovh-api/).

> [!warning]
>
> Eine neue Installation von BringYourOwnImage wird alle auf dem Server vorhandenen Daten löschen.
>

## Beschreibung

### Technische Einschränkungen

Es gibt noch einige technische Einschränkungen bei der Verwendung physischer Produkte wie Dedicated Server.
Bitte beachten Sie die unten aufgeführten Anforderungen bei der Vorbereitung Ihres Deployments. Diese Liste ist nicht erschöpfend.

- Boot-Modus: **uefi** oder **legacy**
- Partitionstyp: **MBR** oder **GPT**
- Das Bildformat: **qcow**² oder **raw**

Wenn Ihr Server einen uefi-**Boot** hat, müssen Sie in Ihrem Image unbedingt eine **EFI**-Partition einrichten, wenn Sie möchten, dass Ihr Server bootet.

### Image deployen

Loggen Sie sich auf [https://api.ovh.com/](https://api.ovh.com/){.external} ein und gehen Sie dann in den Bereich `/dedicated/server`{.action}. Mit dem `Filter`-Feld können Sie nach "BringYourOwnImage"suchen.

Sie verfügen über drei API-Aufrufe zur BringYourOwnImage Funktion.

![calls API](images/apicalls.png){.thumbnail}

Um Ihr Image zu erstellen und zu deployen, verwenden Sie folgenden Aufruf und vervollständigen Sie die erforderlichen Felder:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/bringYourOwnImage
>


| Feld | Beschreibung |
|-|-|
| serviceName | Name Ihres Servers |
| URL | URL, wo Sie Ihr Image abrufen können. |
| checkSum | Die Prüfsumme Ihres Images. |
| checkSumType | Die Prüfsumme des zu implementierenden Images (md5, sha1, sha256, sha512). |
| enable (ConfigDrive)* | Die Erstellung der ConfigDrive Partition aktivieren (cloud-init) |
| hostname (ConfigDrive)* | Hostname Ihres Servers. |
| sshKey (ConfigDrive)* | Ihr öffentlicher SSH-Schlüssel. |
| userData (ConfigDrive)* | Ihr Post-Installations-Skript. |
| userMetadatas (ConfigDrive)* | Meta Datas, die von CloudInit zum Zeitpunkt des Boot verwendet werden. |
| | Name Ihres Images. |
| diskGroupId | Die Kennung der zu verwendenden Festplatte. |
| httpHeader | Nur wenn nötig, um das Image herunterzuladen. |
| | Typ/Format Ihres Images (qcow2, raw, ova). |

* Das ConfigDrive ist eine von Cloud-init beim ersten Boot Ihres Servers verwendete Partition, um die gewünschte Konfiguration festzulegen. Sie können auswählen, ob Sie diese Option aktivieren möchten.

![POST API Call](images/postapicall.png){.thumbnail}

Wenn die Felder ausgefüllt sind, starten Sie die Inbetriebnahme, indem Sie auf `Execute klicken`{.action}.

### Deployment überprüfen

Sie können die Bereitstellung Ihres Images über den unten stehenden API Aufruf oder über KVM / [IPMI verfolgen](../verwendung-ipmi-dedicated-server/).

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/bringYourOwnImage
>

In diesem Beispiel wird die Inbetriebnahme gestartet.

![GET API Call](images/getapicall.png){.thumbnail}

Die Inbetriebnahme kann etwa zehn Minuten dauern. Sobald die Operation abgeschlossen ist, wird der Status Ihrer Deployments auf "done" umgestellt, und Ihr Server wird auf der Festplatte neu gestartet.

#### Feedback-Beispiele

Hier einige Beispiele für Feedback:

| Nachricht | Bedeutung |
|-|-|
| Can't write qcow2 on disk. | Das Image qcow2 kann nicht auf die Festplatte geschrieben werden. |
| Could not download, qcow2 image is too big to download in memory. | Es gibt nicht genug RAM Speicherplatz, um das Image herunterzuladen. |
| Could not download image located: http://path/of/your/image | Das Image kann nicht heruntergeladen werden: http://chemin/de/votre/image |
| Bad format image, expected: qcow2, raw. | Das Bildformat ist nicht korrekt. |
| Bad checkSumType, expected: sha1, sha256, md5. | Der Prüftyp ist nicht korrekt. |
| bad checkSumType for downloaded file, got: 1234 "While Expecting 5678" | Die Prüfsumme ist nicht korrekt. |
| Can not move backup GPT data structures to the end of disk. | Das Festplattenformat ist nicht korrekt. |
| Could not create configdrive on disk. | Die konfigdrive Partition kann nicht auf dem Disk erstellt werden. |


### Deployment löschen

Sie können die Deployment-Option mit folgendem Anruf löschen:

> [!api]
>
> @api {DELETE} /dedicated/server/{serviceName}/bringYourOwnImage
>

Dadurch wird der Deployment-Status gelöscht und Ihr Server in den Rescue-Modus versetzt.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
