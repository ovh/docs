---
title: Die ersten Schritte mit der Swift API
excerpt: Die ersten Schritte mit der Swift API
slug: die_ersten_schritte_mit_der_swift_api
legacy_guide_number: g1916
---


## 
Um Ihre Operationen auf der Public Cloud zu automatisieren, können Sie die OpenStack APIs für die Erstellung verschiedener Skripte verwenden.

Der Client Swift von OpenStack ermöglicht Ihnen dabei die Verwaltung Ihrer Container und Objekte.

So können Sie beispielsweise Dateien zu Backup-Zwecken regelmäßig auf Ihre Container laden.

In dieser Anleitung lernen Sie mit den OpenStack APIs umzugehen, um Ihre Object Container künftig ganz leicht mit dem Python Swift Client zu verwalten.


## Voraussetzungen

- [Vorbereitung der Umgebung für die Verwendung der OpenStack API]({legacy}1851) durch Installation des Python-Swiftclient
- [Laden der OpenStack Umgebungsvariablen]({legacy}1852)




## Swift Dokumentation
Alle existierenden Befehle können Sie der Dokumentation zum Client entnehmen:


```
admin@serveur-1:~$ swift --help
```


Hier die wichtigsten Befehle für Sie im Überblick:

|delete|Container oder im Container enthaltene Objekte löschen|
|---|
|delete|Container oder im Container enthaltene Objekte löschen|
|download|Dateien aus einem Container herunterladen|
|list|Container eines Accounts oder Objekte in einem Container auflisten|
|post|Metadaten des Accounts, Containers oder Objekts aktualisieren. Nötigenfalls einen Container erstellen|
|stat|Informationen zum Account, Container oder Objekt anzeigen|
|upload|Dateien oder Ordner auf den Container hochladen|
|capabilities|Einsatzmöglichkeiten der Swift Umgebung auflisten|
|tempurl|Temporäre URL erstellen|


Darüber hinaus können Sie auch die Hilfe zu einem speziellen Befehl aufrufen, indem Sie ab den Befehl "--help" anhängen:


```
admin@serveur-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
[container] Name of container to post to.
[object] Name of object to post. Specify multiple times
for multiple objects.
[...]
```


Sie können die Dokumentation zum Client Swift auch direkt auf der [Openstack Webseite](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html) einsehen.


## Erstellung eines öffentlichen Projekt-Containers

- Erstellung des Containers "container1"


```
admin@serveur-1:~$ swift post container1
```


- Konfiguration der Zugriffsrechte, um ihn öffentlich zugänglich zu machen


```
admin@serveur-1:~$ swift post --header "X-Container-Read: .r:*" container1
```


- Überprüfung der Container-Konfiguration


```
admin@serveur-1:~$ swift stat container1

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





## Upload von Dateien auf einen Container

- Upload des Inhalts eines lokalen Ordners auf einen Container


```
admin@serveur-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```



Wenn Sie einen vollständigen Ordner anstatt einer einzelnen Datei hochladen, wird den Dateien automatisch ein Präfix hinzugefügt.

- Dateien des Containers auflisten


```
admin@serveur-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```



Sie können sich mithilfe von "--prefix" alle Dateien mit einem bestimmten Präfix anzeigen lassen:


```
admin@serveur-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```


Da der Container so konfiguriert wurde, dass er öffentlich zugänglich ist, kann auf die Dateien auch über eine URL zugegriffen werden:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```


Diese URL besteht ganz einfach aus dem API-Zugriffspunkt des Object Storage, den Sie im Menü [Zugriff und Sicherheit in Horizon]({legacy}1774) abrufen können, sowie aus dem Namen des Containers und des gewünschten Objekts (einschließlich Präfix).


## Download von Dateien

- Datei herunterladen: 


```
admin@serveur-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```



Sie können mehrere Dateien mit demselben Präfix gleichzeitig herunterladen. Verwenden Sie dafür folgenden Befehl:


```
admin@serveur-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```




## Löschen von Containern oder Objekten

- Datei löschen:


```
admin@serveur-1:~$ swift delete container1 text1.txt

text1.txt
```



Ebenso wie beim Download können Sie mehrere Dateien mit demselben Präfix gleichzeitig löschen. Verwenden Sie dafür folgenden Befehl:


```
admin@serveur-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```



- Container löschen:


```
admin@serveur-1:~$ swift delete container1

text2.txt
text3.txt
```



Hierduch werden auch alle im Container enthaltenen Dateien gelöscht.


## 
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!

