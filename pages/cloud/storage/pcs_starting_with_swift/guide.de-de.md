---
title: Erste Schritte mit der Swift API
excerpt: Erfahren Sie hier, wie Sie die Swift API verwenden
slug: die_ersten_schritte_mit_der_swift_api
legacy_guide_number: g1916
section: Object Storage Standard (Swift)
order: 010
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 25.05.2021**

## Ziel

Um Ihre Operationen für die Public Cloud zu automatisieren, können Sie die OpenStack APIs für die Erstellung verschiedener Skripte verwenden.

Der OpenStack *swiftclient* ermöglicht Ihnen dabei die Verwaltung Ihrer Container und Objekte. So können Sie beispielsweise Dateien zu Backup-Zwecken regelmäßig in Ihre Container hochladen.

**Diese Anleitung erklärt, wie Sie die OpenStack API nutzen, um Ihre Object Container mit dem *python-swiftclient* zu verwalten.**

## Voraussetzungen

- [Vorbereitung der Umgebung für die Verwendung der OpenStack API](../../public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/) durch Installation des *python-swiftclient*
- [Laden der OpenStack Umgebungsvariablen](../../public-cloud/die-variablen-der-umgebung-openstack-laden/)


## In der praktischen Anwendung

> [!primary]
>
Bitte beachten Sie, dass sich die folgenden Anweisungen ausschließlich auf das Kommandozeileninterface einer GNU/Linux-Distribution beziehen, nachdem die oben aufgeführten Voraussetzungen umgesetzt wurden.
>

### Swift Dokumentation

Alle existierenden Befehle können Sie der Dokumentation zum Client entnehmen:

```
admin@server-1:~$ swift --help
```

Hier die wichtigsten Befehle im Überblick:

|Befehl|Beschreibung|
|---|---|
|**delete**|Container oder im Container enthaltene Objekte löschen.|
|**download**|Dateien aus einem Container herunterladen.|
|**list**|Container eines Accounts oder Objekte in einem Container auflisten.|
|**post**|Metadaten des Accounts, Containers oder Objekts aktualisieren. Erstellt den Container, falls er nicht gefunden wird.|
|**stat**|Informationen zum Account, Container oder Objekt anzeigen.|
|**upload**|Dateien oder Ordner in den Container laden.|
|**capabilities**|Eigenschaften des Proxy auflisten.|
|**tempurl**|Temporäre URL für ein Swift-Objekt erstellen.|

Sie können die Erklärung zu einem speziellen Swift-Befehl aufrufen, indem Sie `--help` anhängen:

```
admin@server-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
[container] Name of container to post to.
[object] Name of object to post. Specify multiple times
for multiple objects.
[...]
```

Sie können auch die Dokumentation zum Swift-Client auf der [OpenStack-Webseite](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html) einsehen.

### Erstellung eines öffentlichen Objekt-Containers

- Erstellung des Containers "container1":

```
admin@server-1:~$ swift post container1
```

- Konfiguration der Zugriffsrechte, um ihn öffentlich zugänglich zu machen:

```
admin@server-1:~$ swift post --header "X-Container-Read: .r:*" container1
```

- Überprüfung der Container-Konfiguration:

```
admin@server-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objects: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```

### Upload von Dateien in einen Container

- Upload des Inhalts eines lokalen Ordners in einen Container:

```
admin@server-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```

Wenn Sie einen vollständigen Ordner anstatt einer einzelnen Datei hochladen, wird den Dateien automatisch ein Präfix hinzugefügt.

- Dateien des Containers auflisten:

```
admin@server-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```

Sie können sich mithilfe von `--prefix` alle Dateien mit einem bestimmten Präfix anzeigen lassen:

```
admin@server-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

Da der Container so konfiguriert wurde, dass er öffentlich zugänglich ist, kann auf die Dateien auch über eine URL zugegriffen werden:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```

Diese URL besteht einem API-Zugriffspunkt, den Sie im [Horizon Interface](../../public-cloud/zugriff_und_sicherheit_in_horizon/) abrufen können, sowie aus dem Namen des Containers und des gewünschten Objekts (einschließlich Präfix).


### Download von Dateien

- Eine Datei herunterladen:

```
admin@server-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```

Sie können mehrere Dateien mit demselben Präfix gleichzeitig herunterladen. Verwenden Sie dafür folgenden Befehl:

```
admin@server-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```

### Löschen von Containern oder Objekten

-Eine Datei löschen:

```
admin@server-1:~$ swift delete container1 text1.txt

text1.txt
```

Ebenso wie beim Download können Sie mehrere Dateien mit demselben Präfix gleichzeitig löschen. Verwenden Sie dafür folgenden Befehl:

```
admin@server-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

- Einen Container löschen:

```
admin@server-1:~$ swift delete container1

text2.txt
text3.txt
```

Damit werden auch alle im Container enthaltenen Dateien gelöscht.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
