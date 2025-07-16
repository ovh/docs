---
title: SFTP zum Übertragen von Dateien verwenden
excerpt: Erfahren Sie hier, wie Sie mit FileZilla Dateien übertragen
updated: 2025-02-21
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Es gibt verschiedene Optionen zum Übertragen von Dateien zwischen einem lokalen Gerät und einem entfernten Host. Um die Sicherheit der Übertragung zu gewährleisten, wird für die meisten Anwendungsfälle empfohlen, eine Client-Software zu verwenden, die mit dem Secure File Transfer Protocol (SFTP) kompatibel ist.

**Dieses Tutorial erklärt, wie Sie FileZilla zum Übertragen von Dateien über SFTP verwenden.**

> [!warning]
> In diesem Tutorial erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Möglicherweise müssen Sie bestimmte Anweisungen an das Betriebssystem Ihres lokalen Systems oder Ihres Servers anpassen.
>
> Wir empfehlen Ihnen, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner) zu wenden oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten.

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) oder einen [VPS](/links/bare-metal/vps) in Ihrem Kunden-Account, auf dem eine GNU/Linux Distribution installiert ist.
- Sie haben einen FTP-Client installiert, der SFTP-Verbindungen unterstützt (zum Beispiel [FileZilla](https://filezilla-project.org/)).
- Sie haben administrativen Zugriff über SSH auf Ihren Server.

## In der praktischen Anwendung

Sie benötigen die IP-Adresse Ihres Servers, die Sie in Ihrem [OVHcloud Kundencenter](/links/manager) finden, sowie den Namen des für die SSH-Verbindung zu verwendenden Benutzer-Accounts. Weitere Informationen zu diesem Thema finden Sie in unseren Anleitungen:

- [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- [Dedicated Server der Reihe **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

Die folgenden Beispiele basieren auf [FileZilla](https://filezilla-project.org/). Wenn Sie einen anderen FTP-Client verwenden, folgen Sie der Benutzeranleitung Ihrer Anwendung.

Wenn Ihr Server in den **Rescue-Modus** gebootet wurde, sind möglicherweise zusätzliche Schritte erforderlich. Öffnen Sie je nach Status Ihres Servers den entsprechenden Abschnitt unten.

### Verbindung über SFTP-Client zu einem Server

/// details | Diesen Abschnitt erweitern

Geben Sie im FileZilla Client-Interface die IP-Adresse Ihres Servers in das Feld `Host` ein und Ihren Benutzernamen und Ihr Passwort in die entsprechenden Felder. Geben Sie "22" in das Feld `Port` ein, sofern Sie den Port nicht geändert haben, auf dem der SSH-Dienst Ihres Servers lauscht.

Klicken Sie auf `Quickconnect`{.action}.

> [!warning]
> Um auf Ordner zuzugreifen, die dem Benutzer-Account `root` Ihres Betriebssystems gehören, müssen Sie die Zugangsdaten des `root`-Benutzers verwenden, um die SFTP-Verbindung herzustellen. Dieser Account hat nur dann ein Passwort wenn es manuell erstellt wurde.  
> Wenn Sie sicher sind, dass Sie über SFTP auf die Dateien des Benutzers `root` zugreifen müssen, verwenden Sie unsere [Anleitung](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds), um diese Verbindung zu ermöglichen.
>

///

### Verbindung über SFTP-Client zu einem Server im Rescue-Modus

/// details | Diesen Abschnitt erweitern

Wenn Sie nicht bereits die notwendigen Aktionen durchgeführt haben, um auf Ihre Dateien im Rescue-Modus zuzugreifen, verwenden Sie die zugehörige Anleitung, um sich mit Ihrem Server zu verbinden und Ihre Partitionen zu mounten:

- [Rescue-Modus für Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Rescue-Modus für VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Geben Sie im FileZilla Client-Interface die IP-Adresse Ihres Servers in das Feld `Host` und "22" in das Feld `Port` ein. Geben Sie "root" in das Feld `Username` und das Passwort, das Sie per E-Mail für den Zugang im Rescue-Modus erhalten haben, in das Feld `Password` ein.

Klicken Sie auf `Quickconnect`{.action}.

Das Dateisystem des Servers befindet sich in dem Verzeichnis, das Sie als Bereitstellungspunkt im Rescue-Modus festgelegt haben ("/mnt" in diesem Beispiel).

![SFTP Rescue-Modus Remote-Site](images/sftp_sd_03.png){.thumbnail}

///

### Verwenden des FileZilla-Interface zum Übertragen Ihrer Dateien

Sobald die Verbindung hergestellt ist, wird eine Ordnerstruktur der Serverdateien im Bereich `Remote Site` angezeigt.

![Remote-SFTP-Site](images/sftp_sd_01.png){.thumbnail}

Der zentrale Teil des FileZilla-Interface fungiert als Datei-Explorer. Sie können mehrere Dateien oder Ordner auswählen, löschen, diese von einer Seite zur anderen ziehen und ablegen, etc. Die Details bei der Nutzung der Oberfläche können je nach Softwareversion und Ihrem lokalen Betriebssystem unterschiedlich sein. Weitere Informationen finden Sie in der Dokumentation zu [FileZilla](https://filezilla-project.org/).

Um beispielsweise Dateien aus dem Ordner "/home/data" auf dem Server herunterzuladen, öffnen Sie diesen Ordner im rechten Bereich (`Remote Site`). Selektieren Sie die relevanten Dateien oder Ordner, und ziehen Sie sie in den linken Bereich (`Local Site`) in einen Ordner auf dem lokalen Gerät.

Der Fortschritt der Datenübertragung wird dann unten in der Warteschlange angezeigt.

![Fortschritt der SFTP-Übertragung](images/sftp_sd_02.png){.thumbnail}

## Weiterführende Informationen

[Einführung in SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Konfiguration von Benutzerkonten und Root-Zugriff auf einem Server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.