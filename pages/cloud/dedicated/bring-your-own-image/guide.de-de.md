---
title: Bring Your Own Image verwenden
excerpt: Erfahren Sie hier, wie Sie Ihre eigenen Images mit der OVHcloud APIv6 bereitstellen
slug: bringyourownimage
section: Fortgeschrittene Nutzung
---

**Letzte Aktualisierung am 25.02.2021**

## Ziel

Mithilfe der Funktion *Bring Your Own Image* (BYOI) können Sie *cloudready* Images direkt auf Ihren Dedicated Servern einrichten. Somit können Sie Bare Metal Dienste als Ressource für Ihre Deployments verwenden.

**Was bedeutet *cloudready*?**
<br>In einem Satz agnostisch zu sein von der Infrastruktur, auf der das Bild beginnt.
Zusätzlich zu den unten genannten Voraussetzungen und Einschränkungen muss sichergestellt werden, dass das (gewonnene, erstellte) Image die technischen Anforderungen eines Cloudready-Images erfüllt. Das Image muss in der Lage sein, unabhängig von der Servertypologie, von der es ausgeht, einen korrekten Booster zu erstellen. Im Falle der Verwendung eines Config Drive muss es auch den Cloud Init Dienst einbeziehen. Schließlich müssen die Systemkonfigurationen es ermöglichen, das Betriebssystem, insbesondere die Netzwerkkonfigurationen, vollständig in Gang setzen zu lassen.

**Diese Anleitung erklärt, wie Sie *Bring Your Own Image* über die OVHcloud APIv6 verwenden.**

## Voraussetzungen

- Sie verfügen über [einen dedizierten OVHcloud Server](https://www.ovh.com/fr/serveurs_dedies/).
- Sie sind in Ihrem [OVHcloud Kundencenter ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) eingeloggt und erhalten in dieser Anleitung den Bereich  ["Deployment überKundencenter"](#viacontrolpanel) .
- Sie sind mit den [OVHcloud APIs](https://api.ovh.com/){.external} für den Teil ["Deployment via API"](#viaapi)dieser Anleitung verbunden.
- Sie haben die [Credentials generiert, um die APIv](../../api/api-premiers-pas/) für den Teil ["Deployment via API"](#viaapi) dieser Anleitung zu verwenden.

> [!warning]
>
> Eine neue Installation mittels BYOI wird alle auf dem Server vorhandenen Daten löschen.
>

## In der praktischen Anwendung

**Technische Einschränkungen**

Es gibt noch einige technische Einschränkungen bei der Verwendung physischer Dienste wie Dedicated Server.
Bitte beachten Sie die unten aufgeführten Anforderungen bei der Vorbereitung Ihres Deployments. Diese Liste ist nicht erschöpfend.

- Boot-Modus: **uefi** oder **legacy**
- Partitionstyp: **MBR** oder **GPT**
- Das Bildformat: **qcow2** oder **raw**

Wenn Ihr Server über **uefi** Boot verfügt, müssen Sie in Ihrem Image unbedingt eine **EFI**-Partition hinzufügen.

**Deployment-Methoden**

- [Inbetriebnahme über das Kundencenter](#viacontrolpanel): ermöglicht es Ihnen, Ihr Image schnell und einfach über Ihr OVHcloud Kundencenter zu deployen.
- [Deployment via API](#viaapi): Sie können die OVHcloud APIs verwenden, um sie in Ihre eigenen Skripte zu integrieren, um die Inbetriebnahme zu automatisieren.

### Ihr Image über das OVHcloud Kundencenter deployen <a name="viacontrolpanel"></a>

Wählen Sie [in Ihrem OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr) Kundencenter im Bereich `Bare Metal Cloud`{.action} und `Dedicated Server`{.action} Ihren Server aus.

Klicken Sie im `Rahmen` Allgemeine Informationen auf `...`{.action} vor `Allgemeine Informationen`. Klicken Sie anschließend auf `Installieren`{.action}.

![Bring Your Ownimage](images/byoi-controlpanel01.png){.thumbnail}

Wählen Sie im angezeigten Fenster `Anhand eines personalisierten Bildes installieren`{.action} und klicken Sie dann auf `Installieren`{.action}.

![Bring Your Ownimage](images/byoi-controlpanel02.png){.thumbnail}

Sie werden auf die Konfigurationsseite weitergeleitet. Vergewissern Sie sich, dass die URL Ihres Images im geeigneten Format vorliegt. Vervollständigen Sie die übrigen erforderlichen Felder auf dieser Seite. Wenn Sie bestätigt haben, dass die Informationen korrekt sind, klicken Sie auf `System installieren`{.action}.

Weitere Informationen zu den Optionen finden Sie [im Abschnitt "Optionstabellen"](#options) dieser Anleitung. 

Weitere Informationen zur Aktivierung von `ConfigDrive` finden Sie auf [dieser Seite](https://cloudinit.readthedocs.io/en/latest/topics/datasources/configdrive.html).

![Bring Your Ownimage](images/byoi-controlpanel03.png){.thumbnail}

### Image über die APIs deployen <a name="viaapi"></a>

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
| enable (ConfigDrive) | Die Erstellung der ConfigDrive Partition aktivieren (_cloud-init_). |
| hostname (ConfigDrive) | Hostname Ihres Servers. |
| sshKey (ConfigDrive) | Ihr öffentlicher SSH-Schlüssel. |
| userData (ConfigDrive) | Ihr Post-Installationsskript. |
| userMetadatas (ConfigDrive) | Metadaten, die von _cloud-init_ zum Zeitpunkt des Boot verwendet werden. |
| description | Bezeichnung für Ihr Image. |
| diskGroupId | Die Kennung (ID) der zu verwendenden Festplatte. |
| httpHeader | Nur anzugeben, wenn nötig, um das Image herunterzuladen. |
| type | Typ/Format Ihres Images (qcow2, raw, ova). |

„ConfigDrive“ ist eine von _cloud-init_ beim ersten Boot Ihres Servers verwendete Partition, um die gewünschte Konfiguration festzulegen. Sie können auswählen, ob Sie diese Option aktivieren möchten.

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
| Could not download image located: `http://path/of/your/image` | Das Image kann nicht heruntergeladen werden von `http://path/of/your/image` |
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
