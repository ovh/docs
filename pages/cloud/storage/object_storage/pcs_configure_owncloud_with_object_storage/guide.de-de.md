---
title: Object Storage Swift - Konfiguration von ownCloud mit Object Storage
excerpt: Konfiguration von ownCloud mit Object Storage
slug: pcs/configure-owncloud-with-object-storage
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g2000
order: 170
---


##
[ownCloud](https://owncloud.org/) ist eine Applikation für Online-Storage und Ordner-Verwaltung.

Sie bietet Funktionen wie die Synchronisierung zwischen verschiedenen Peripheriegeräten

Außerdem können Sie auch externen Speicherplatz hinzufügen, insbesondere OpenStack Object Storage.

In dieser Hilfe erfahren Sie alles über die Konfiguration von ownCloud mit Object Storage.


## Voraussetzungen

- Download der OpenRC-Datei über Ihr OVHcloud Kundencenter oder Horizon
- [Hinzufügen von Storage-Bereichen](https://docs.ovh.com/de/public-cloud/hinzufugen_von_storage-bereichen/) zu Owncloud




## Installation
Installieren Sie zunächst ownCloud:


```
root@instance:~$ apt-get install owncloud
```



## Achtung!
Verwenden Sie das richtige Verzeichnis, um die jüngste ownCloud Version zu installieren.
Anschließend können Sie MySQL installieren, damit Sie über die für ownCloud benötigte Datenbank verfügen:


```
root@instance:~$ apt-get install mysql-server
```




## Konfiguration
Wenn die Installation abgeschlossen ist, können Sie mit der Konfiguration der Datenbank für ownCloud beginnen.

Stellen Sie dafür eine Verbindung mit dem MySQL-Server unter Verwendung des bei der Installation festgelegten Root-Passworts her:


```
root@instance:~$ mysql -u root -p
```


Anschließend können Sie einen neuen Nutzer und eine Datenbank für OwnCloud erstellen:


```
**** Erstellen des Benutzers *****
mysql> CREATE USER 'owncloud'@'localhost' IDENTIFIED BY 'P@ssw0rd';

***** Erstellung der Datenbank *****
mysql> CREATE DATABASE `owncloud` ;

***** Erteilung aller Rechte an den Benutzer "owncloud" für die Datenbank "owncloud"
mysql> GRANT ALL PRIVILEGES ON `owncloud` . * TO 'owncloud'@'localhost';
```


Danach können Sie sich mithilfe eines Browsers mit dem ownCloud Interface verbinden: http://I.P.des.servers/owncloud:

![](images/img_3325.jpg){.thumbnail}

Über dieses Interface müssen Sie dann:

- einen Administrator-Account erstellen,
- das Verzeichnis angeben (fakultativ, wenn Sie nur den Object Storage verwenden wollen; in diesem Fall belassen Sie die Standard-Einstellung) und
- Login und Passwort Ihrer Datenbank angeben.


Nach Bestätigung können Sie auf Ihr ownCloud Interface zugreifen.

Hierüber kann man dann den "External Storage Support" aktivieren.

Klicken Sie dafür auf den Button "Dateien" links oben und wählen Sie "Applikationen" aus:

![](images/img_3327.jpg){.thumbnail}

Aktivieren Sie anschließend die Applikation "External storage support" über das Menü der "Deaktivierten" Applikationen:

![](images/img_3328.jpg){.thumbnail}

Nun können Sie diese Applikation konfigurieren. Klicken Sie hierfür rechts oben auf Ihren Benutzernamen und anschließend auf "Administration":

![](images/img_3326.jpg){.thumbnail}

Wählen Sie den Bereich "Externer Storage" aus und fügen Sie "OpenStack Object Storage" hinzu:

![](images/img_3329.jpg){.thumbnail}

Hier müssen Sie verschiedene Informationen aus der "OpenRC"-Datei angeben:

- den Namen des Horizon Nutzers (Feld "OS_USERNAME" in der "OpenRC"-Datei);
- den Namen des Containers, den Sie zuvor für ownCloud erstellt haben;
- den Namen der Region, in der sich Ihr Container befindet (Feld "OS_REGION_NAME");
- den Namen des Besitzers ("OS_TENANT_NAME");
- das Passwort des Horizon Nutzers;
- den Namen des Service ("swift");
- die Adresse des Zugriffspunkts (Feld "OS_AUTH_URL" oder "https://auth.cloud.ovh.net/v3").


Der "API Key" und die "Maximale Wartezeit" sind fakultativ.

## Zur Erinnerung:
Der von Ihnen erstellte Container muss ownCloud dediziert sein, denn es werden spezifische Metadaten auf Ihrem Container konfiguriert.
Wenn alle Angaben korrekt gemacht sind, wird das rote Quadrat vor dem Namen Ihres Ordners grün. Dieser steht Ihnen dann über Ihre Homepage, Bereich "Externer Storage" zur Verfügung.

![](images/img_3330.jpg){.thumbnail}


##
... lesen Sie auch unsere anderen Hilfen zum Thema Cloud!
