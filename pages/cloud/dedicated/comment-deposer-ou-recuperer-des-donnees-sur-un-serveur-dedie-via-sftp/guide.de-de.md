---
title: 'Daten via SFTP auf einem dedizierten Server ablegen oder herunterladen'
slug: daten-via-sftp-exportieren-und-ablegen
excerpt: 'Hier erfahren Sie, wie Sie Daten ganz einfach von Ihrem Server auf Ihren PC übertragen oder umgekehrt.'
section: Tutorial
---

**Stand: 05.04.2019**

## Einleitung

Bei einer Migration kann es erforderlich werden, Daten von einem dedizierten Server herunterzuladen, um sie anschließend auf einer anderen Maschine abzulegen. Hierfür gibt es mehrere mögliche Vorgehensweisen. Mit dem Protokoll SFTP (Secure File Transfer Protocol) können Daten einfach und schnell über eine gesicherte SSH-Verbindung übertragen werden.

**In dieser Anleitung erfahren Sie, wie Sie Daten via SFTP auf einen dedizierten Server übertragen oder von diesem herunterladen.**

> [!warning]
>
In diesem Tutorial zeigen wir Ihnen die Verwendung einer oder mehrerer OVH Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen. Bei Schwierigkeiten kontaktieren Sie bitte einen spezialisierten Dienstleister und/oder stellen Ihre Fragen in der OVH Community unter <https://community.ovh.com/en/> (Englisch). Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.
>


## Voraussetzungen


### Erforderliche Kenntnisse

*     Sie kennen die Grundlagen der Linux-Administration.
*     Sie wissen, wie Sie sich via SSH verbinden.
*     Sie können eine Distribution installieren (im vorliegenden Beispiel Debian 9.4).


### Sie benötigen

*     mindestens einen OVH Dedicated Server
*     einen Client, der SFTP unterstützt (in diesem Tutorial verwenden wir [FileZilla](https://filezilla-project.org/))


## Beschreibung


### Schritt 1: Daten exportieren

Server, die auf einem Linux-System installiert wurden, verfügen standardmäßig über SSH-Zugriff via Port „22“.

Mit dem Protokoll SFTP (Secure File Transfer Protocol) können Daten über eine gesicherte SSH-Verbindung übertragen werden. Wir zeigen Ihnen, wie Sie das Protokoll in zwei verschiedenen Situationen verwenden: wenn Sie Zugriff auf Ihren Server haben, und wenn sich der Server im Rescue-Modus befindet.


#### Sie haben Zugriff auf Ihren Server

Geben Sie in FileZilla Ihre IP im Feld „Host“ an. Geben Sie dann Ihren Root-Benutzer und Ihr Passwort ein. Geben Sie als Port entweder „22“ oder den Port ein, den Sie für Ihren SSH-Dienst verwenden.

Die Verbindung wurde nun hergestellt und die Ordnerstruktur wird im Bereich „Server“ angezeigt.

 
![SFTP Remote-Verzeichnis](images/sftp_ds_01.png)
 

Sie können Dateien, die Sie vom Server exportieren möchten, über Drag-and-drop vom rechten Fenster (`Server`) zum linken Fenster ziehen (`Lokal`), um Sie auf Ihrem PC zu speichern. In unserem Beispiel sind die Dateien im Verzeichnis „/home/data“ im rechten Fenster (`Server`)  zu sehen.

Der Fortschritt der Übertragung wird im unteren Teil Ihres FileZilla-Fensters angezeigt.

 
![Fortschritt SFTP-Transfer](images/sftp_ds_02.png)


#### Ihr Server befindet sich im Rescue-Modus 

Im Rescue-Modus muss zuerst die Partition gemountet werden. Folgen Sie hierzu den Anweisungen in dieser [Anleitung](https://docs.ovh.com/de/dedicated/ovh-rescue/).

Wenn Ihre Partition gemountet ist, verbinden Sie sich erneut mit Ihrem Programm (hier FileZilla) über den Port 22.


> [!primary]
>
> Verwenden Sie hierzu die Verbindungsinformationen, die Sie beim Start des Rescue-Modus per E-Mail erhalten haben.
>


Wenn die Partition korrekt gemountet wurde, sind die Daten im Verzeichnis „/mnt“ (in unserem Beispiel „mnt/data/“) verfügbar.

 ![Remote-Server SFTP Rescue-Modus](images/sftp_ds_03.png)

 
### Schritt 2: Daten auf Ihren Server übertragen

Die Vorgehensweise zum Herstellen der Verbindung ist die gleiche wie zuvor: Verwenden Sie wie obenstehend beschrieben den Port 22 für eine SFTP-Verbindung mit Ihrem Root-Benutzer.

Wenn Sie mit dem gewünschten Server verbunden sind, können Sie die Daten ebenfalls per Drag-und-drop übertragen. Verschieben Sie sie in diesem Fall vom linken Fenster (`Lokal`) in das rechte Fenster (`Server`), um die Daten von Ihrem PC auf den Server zu übertragen.

## Fazit

Sie haben nun erfahren, wie Sie Daten via SFTP auf einen dedizierten Server übertragen oder von diesem herunterladen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
