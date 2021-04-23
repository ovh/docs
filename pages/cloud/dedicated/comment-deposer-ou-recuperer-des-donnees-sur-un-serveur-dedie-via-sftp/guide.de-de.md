---
title: 'Daten via SFTP auf einem dedizierten Server ablegen oder herunterladen'
slug: daten-via-sftp-exportieren-und-ablegen
excerpt: 'Hier erfahren Sie, wie Sie Daten ganz einfach von Ihrem Server auf Ihren PC übertragen oder umgekehrt.'
section: Tutorial
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 22.04.2021**

## Ziel

Bei einer Migration kann es erforderlich werden, Daten von einem dedizierten Server herunterzuladen, um sie anschließend auf einer anderen Maschine abzulegen. Hierfür gibt es mehrere mögliche Vorgehensweisen. Mit dem Protokoll SFTP (Secure File Transfer Protocol) können Daten einfach und schnell über eine gesicherte SSH-Verbindung übertragen werden.

**In dieser Anleitung erfahren Sie, wie Sie Daten via SFTP auf einen dedizierten Server übertragen oder von diesem herunterladen.**

> [!warning]
>
> In diesem Tutorial zeigen wir Ihnen die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen. Bei Schwierigkeiten kontaktieren Sie bitte einen spezialisierten Dienstleister und/oder stellen Ihre Fragen in der OVHcloud Community unter <https://community.ovh.com/en/> (Englisch). Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.
>

## Voraussetzungen

- Ein [dedizierter](https://www.ovhcloud.com/de/bare-metal/){.external} Server, auf dem eine GNU/Linux Distribution installiert ist.
- FTP-Client, der die SFTP-Verbindungen unterstützt (diese Anleitung dokumentiert die Verwendung von [FileZilla](https://filezilla-project.org/){.external}).
- Administrativer Zugang via SSH zu Ihrem Server.

## In der praktischen Anwendung

### FileZilla für den Abruf und die Speicherung Ihrer Daten verwenden

Das SFTP Protokoll kann verwendet werden, um Dateien über eine gesicherte Verbindung (SSH) zu übertragen. Für dieses Szenario gibt es zwei Möglichkeiten: entweder haben Sie normalen Zugriff auf Ihren Server oder verbinden sich im Rescue-[Modus damit](../ovh-rescue/).

Standardmäßig erhält ein Server, der ein GNU/Linux-Betriebssystem verwendet, über Port 22 SSH-Zugriff. Möglicherweise haben Sie diesen Port jedoch bereits geändert (zum Beispiel in unserer [Anleitung zur Sicherung eines Dedicated Servers](../dedizierten-server-sichern/)).

#### Wenn Sie Zugriff auf Ihren Server haben

Geben Sie im grafischen FileZilla-Interface die IP-Adresse Ihres Servers im `Host`-Feld sowie Ihren Benutzernamen und Ihr Passwort in den jeweiligen Feldern ein. Geben Sie für den `Port`-Eintrag "22"oder den Port ein, den Ihr SSH-Dienst hört, wenn Sie ihn geändert haben.

Sobald die Verbindung hergestellt ist, wird im Bereich Remote Site eine Ordnerstruktur Ihrer Dateien `angezeigt`.

![SFTP Remote-Verzeichnis](images/sftp_ds_01.png){.thumbnail}

In unserem Beispiel befinden sich die Daten im Ordner "/home/data". Sie können Dateien, die von der rechten Seite (`Remote`) auf die linke Seite (`Local`) heruntergeladen werden, per Drag and Drop ablegen, um sie auf Ihrem lokalen Gerät zu speichern.

Um Dateien auf dem Server abzulegen, dragen Sie Ihre Dateien von Ihrem lokalen Ordner zum entfernten Zielordner im rechten Bereich.

Der Fortschritt der Datenübertragung wird dann unten im FileZilla-Interface angezeigt.

![Fortschritt des SFTP Transfers](images/sftp_ds_02.png){.thumbnail}

#### Wenn Ihr Server im Rescue-Modus ist

Im Rescue-Modus müssen Sie zuerst Ihre Partition mounten. Folgen Sie hierzu den Anweisungen in dieser [Anleitung](../ovh-rescue/).

Wenn die Partition gemountet ist, verwenden Sie den FileZilla-Client wie oben beschrieben, und verwenden Sie Port 22 für die Verbindung zu Ihrem Server.

> [!primary]
>
> Die von Ihnen zu verwendenden Login-Daten werden Ihnen per E-Mail zugesandt, wenn Sie den Rescue-Modus auf Ihrem Server aktivieren.
>

Wenn Sie den Mountpunkt korrekt erstellt haben, befinden sich die Daten im Verzeichnis "/mnt" ("/mnt/data" in diesem Beispiel).

![Rescue-Modus - SFTP des Remote-Standorts](images/sftp_ds_03.png){.thumbnail}

## Weiterführende Informationen

[Rescue-Modus](../ovh-rescue/)

[Einen dedizierten Server sichern](../dedizierten-server-sichern/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
