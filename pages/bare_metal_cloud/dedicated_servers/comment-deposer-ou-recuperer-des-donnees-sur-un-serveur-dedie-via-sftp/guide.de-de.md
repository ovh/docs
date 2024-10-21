---
title: "Daten via SFTP auf einem Dedicated Server ablegen oder herunterladen"
excerpt: "Erfahren Sie hier, wie Sie SFTP zur Datenübertragung verwenden"
updated: 2024-02-23
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Bei einer Migration kann es erforderlich werden, eine große Datenmenge von einem Dedicated Server auf einen anderen zu übertragen. Hierfür gibt es mehrere Vorgehensweisen. Mit dem Protokoll SFTP (Secure File Transfer Protocol) können Daten einfach und schnell über eine gesicherte SSH-Verbindung übertragen werden.

**Dieses Tutorial erklärt, wie Sie Daten via SFTP auf einen dedizierten Server übertragen oder von diesem herunterladen.**

> [!warning]
> In diesem Tutorial erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
> Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account, auf dem eine GNU/Linux Distribution installiert ist.
- Ein FTP-Client, der SFTP-Verbindungen unterstützt (diese Anleitung dokumentiert die Verwendung von [FileZilla](https://filezilla-project.org/){.external}).
- Sie haben administrativen Zugriff über SSH auf Ihren Server.

## In der praktischen Anwendung

### FileZilla für das Übertragen Ihrer Daten verwenden

Das SFTP Protokoll kann verwendet werden, um Dateien über eine gesicherte Verbindung (SSH) zu übertragen. Für dieses Szenario gibt es zwei Möglichkeiten: entweder haben Sie normalen Zugriff auf Ihren Server oder verbinden sich im [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Standardmäßig erhält ein Server, der ein GNU/Linux-Betriebssystem verwendet, über Port 22 SSH-Zugriff. Möglicherweise haben Sie diesen Port jedoch bereits geändert (zum Beispiel anhand unserer [Anleitung zur Sicherung eines Dedicated Servers](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)).

#### **Wenn Sie Zugriff auf Ihren Server haben**

Tragen Sie im FileZilla-Interface die IP-Adresse Ihres Servers ins `Host`-Feld sowie Ihren Benutzernamen und Ihr Passwort in die jeweiligen Feldern ein. Geben Sie als den `Port` "22" bzw. die Portnummer ein, die Ihr SSH-Dienst verwendet.

> [!warning]
> Beachten Sie, dass der Zugriff auf den Ordner des Benutzers `root` über SFTP nur mit den Login-Daten dieses Benutzer-Accounts möglich ist. Wenn Sie sicher sind, dass Sie remote auf diesen Ordner zugreifen müssen, finden Sie weitere Informationen zur Aktivierung dieser Verbindung in unserer [Anleitung zur Verwaltung von Benutzer-Accounts](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

Sobald die Verbindung hergestellt ist, wird im Bereich `Remote Site` eine Ordnerstruktur Ihrer Dateien angezeigt.

![SFTP Remote-Verzeichnis](images/sftp_sd_01.png){.thumbnail}

In diesem Beispiel befinden sich die Daten im Ordner "/home/data". Sie können die Dateien, die Sie herunterladen möchten, per Drag-and-Drop aus dem rechten Fensterbereich (`Remote`) in den linken Fensterbereich (`Local`) ziehen, um sie auf Ihrem lokalen Gerät zu speichern.

Um Dateien auf dem Server abzulegen, ziehen Sie diese von Ihrem lokalen Ordner zum Remote-Zielordner im rechten Bereich.

Der Fortschritt der Datenübertragung wird dann unten im FileZilla-Interface angezeigt.

![Fortschritt des SFTP Transfers](images/sftp_sd_02.png){.thumbnail}

#### **Wenn Ihr Server im Rescue-Modus ist**

Im Rescue-Modus müssen Sie zuerst Ihre Partition mounten. Folgen Sie hierzu den Anweisungen in dieser [Anleitung](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

Wenn die Partition gemountet ist, verwenden Sie den FileZilla-Client wie oben beschrieben, und nutzen Sie Port 22 für die Verbindung zu Ihrem Server.

> [!primary]
>
> Die in diesem Fall zu verwendenden Login-Daten werden Ihnen per E-Mail zugesandt, sobald Sie den Rescue-Modus auf Ihrem Server aktivieren.
>

Wenn Sie den Mount korrekt erstellt haben, befinden sich die Daten im Verzeichnis "/mnt" ("/mnt/home/data" in diesem Beispiel).

![Rescue-Modus - SFTP des Remote-Standorts](images/sftp_sd_03.png){.thumbnail}

## Weiterführende Informationen

[Rescue-Modus aktivieren und verwenden](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Einen dedizierten Server sichern](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
