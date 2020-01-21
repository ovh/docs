---
title: 'Daten von einem dedizierten Server auf einen anderen mit rsync kopieren'
slug: "kopieren-Daten-Server-rsync"
excerpt: 'Kopieren Sie mit rsync ganz einfach die Daten von Ihrem dedizierten Server auf einen anderen'
section: Anleitung
---

## Einleitung

Bei einer Migration oder einem Sichern kann es erforderlich werden, Daten von einem dedizierten Server auf einen anderen zu kopieren oder zu transferieren. 

Rsync (für Fernsynchronisierung) wird unter der GNU GPL vertrieben und ist ein freies Programm zur Dateiensynchronisierung. Es ist in der Lage, eine Synchronisierung in eine Richtung vorzunehmen, d.h. Dateien vom Quellserver auf den Zielserver zu kopieren. 

**Diese Anleitung wird Ihnen demonstrieren, wie Dateien mit rsync von einem dedizierten OVH Server auf einen anderen kopiert werden.**

> [!warning]
>
In diesem Tutorial zeigen wir Ihnen die Verwendung einer oder mehrerer OVH Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen. Bei Schwierigkeiten kontaktieren Sie bitte einen spezialisierten Dienstleister und/oder stellen Ihre Fragen in der OVH Community unter <https://community.ovh.com/> (Englisch). Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.
>

## Voraussetzungen


### Erforderliche Kenntnisse

*     Sie kennen die Grundlagen der Linux-Administration.
*     Sie können neue Softwarepakete installieren. 
*     Sie wissen, wie Sie sich via SSH verbinden.


### Sie benötigen:

*     Sie haben mindestens zwei dedizierte OVH Server, die mit GNU/Linux laufen.
*     Sie haben Zugang zu*root* auf dem Quellapparat.
*     Sie haben *SSH* Zugang auf dem Zielapparat.

## In der Praxis angewendet


### Schritt 1: Installieren Sie rsync.

Der Quellserver in dieser Anleitung läuft mit Debian 9.4. Da diese Ausstattung ohnehin rsync in ihren Speichern hat, muss dieses nicht erst hinzugefügt werden, und Sie können rsync direkt installieren.

Dazu verbinden Sie sich als Superuser (oder root) über SSH mit Ihrer Quellmaschine, und installieren dann rsync mit folgendem Befehl:

```sh
apt-get update && apt-get install rsync
```

### Schritt 2: Beginnen Sie mit dem Transfer


#### Sie wollen kein Verzeichnis vom Kopiervorgang ausschließen

Mit rsync können alle Verzeichnisse, Unterverzeichnisse und Dateien auf dem angegebenen Pfad komplett auf ein anderes Gerät kopiert werden.

Dazu ist der allgemeine Aufbau des in dieser Anleitung verwendeten Befehls von dieser Art: `rsync -av source/ destination/`  

Rsync verwendet das Protokoll SSH für die Verbindung zum Zielgerät, jedoch müssen die notwendigen Kennungen hinzugefügt werden. Der Aufbau des Befehls wird demnach wie folgt vervollständigt: `rsync -av *YourLocalFolder*/ login@server:/*DestinationFolder*/`

Falls Sie den SSH-Port auf einen anderen Port als Port 22 gelegt haben, muss die Nummer des zu verwendenden Ports angegeben werden, um die SSH-Verbindung herzustellen, indem Sie` -e 'ssh -p X' ` Ihrem Befehl hinzufügen, wobei „X“ der zu verwendende SSH-Port ist.

Der Befehl, um Ihre Daten mit rsync von einem Server auf einen anderen zu kopieren ist also:

```sh
rsync -av -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
```

> [!primary]
>
> Standardmäßig ermöglicht es kein Indikator, den Verlauf des Kopiervorgangs feinzujustieren.
> Um einfach (mit detaillierten Statistiken und Angaben in MB, GB, usw.)  und in Echtzeit den Fortschritt des Transfers zu verfolgen, wird empfohlen, den Parameter `-P --stats --human-readable` dem Befehl hinzuzufügen. Dieser sieht dann wie folgt aus:
>
> ```sh
> rsync -av -P --stats --human-readable -e 'ssh -p X' YourLocalFolder/ login@server:/DestinationFolder/
> ```


#### Sie möchten ein oder mehrere Verzeichnisse nicht kopieren

Wenn rsync es auch ermöglicht, alle Verzeichnisse eines Gerätes zu kopieren, möchten Sie vielleicht einzelne Verzeichnisse und Unterverzeichnisse nicht kopieren. In diesem Falle, listen Sie diese und ihren Namen auf Ihrem Server auf.

Im Allgemeinen wird empfohlen, die Caches und temporären Systemdateien des Quellservers auszusparen, um Konflikten auf dem Zielserver vorzubeugen. 

Hier eine unvollständige Liste einiger Verzeichnisse, die auf einem Server mit GNU/Linux diese Art von Dateien enthalten können: 

* /dev/*
* /proc/* 
* /sys/*
* /tmp/*
* /run/*
* /media/*
* /lost+found
 
Ist die Liste der nicht zu kopierenden (Unter)Verzeichnisse erstellt, kann der Parameter `--exclude` rsync anzeigen, dass diese beim Kopiervorgang ausgelassen werden sollen. 
 
Dieser Parameter muss so oft wiederholt werden, wie es Verzeichnisse oder Unterverzeichnisse auszusparen gilt, und ans Ende des Befehls gesetzt werden. Der allgemeine Aufbau eines solchen Befehls ist also`rsync --exclude="Folder_Name" --exclude="Other_Folder_name" source/ destination/`

> [!primary]
>
Bitte beachten Sie, dass der Speicherort des Verzeichnisses in seinem relativen Speicherort ausgedrückt werden muss, da Rsync keine absoluten Pfade berücksichtigt. Befindet sich also ein nicht zu kopierendes Verzeichnis in «/home/user/test» und Sie befinden sich gerade in «/test», so sollte präzisiert werden: «--exclude="test"» (relativer Pfad) und nicht «--exclude="/home/user/test"» (absoluter Pfad). 
>


Unter Berücksichtigung des bereits Erklärten ist der Befehl zum Transfer demnach folgender:
 	
```sh
rsync -av -P --stats --human-readable -e 'ssh -p X' --exclude="Folder_Name" --exclude="Other_Folder_name" YourLocalFolder/ login@server:/DestinationFolder/
```

## Schluss

Nun können Sie die Daten von Ihrem dedizierten Server auf einen anderen mit rsync kopieren.

Um noch mehr zu erfahren, können Sie sich mit unserer User Community auf <https://community.ovh.com/> austauschen.