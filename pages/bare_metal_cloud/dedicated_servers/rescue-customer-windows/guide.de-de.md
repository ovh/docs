---
title: Windows Rescue-Modus aktivieren und verwenden
excerpt: Erfahren Sie, wie Sie den rescue-customer-windows modus von OVHcloud zur Fehlerbehebung bei Ihrem Dedicated Server verwenden
updated: 2024-05-21
---

## Ziel

Der *rescue-customer-windows* Modus ist ein von OVHcloud bereitgestelltes Tool, mit dem Sie auf einem temporären Betriebssystem starten können, um Probleme auf Ihrem Server zu diagnostizieren und zu beheben.

Der Rescue-Modus ist generell für folgende Aufgaben einzusetzen:

- [Administrator-Passwort zurücksetzen](/pages/bare_metal_cloud/dedicated_servers/changing-admin-password-on-windows)
- Reparatur eines beschädigten Betriebssystems
- Korrektur einer fehlerhaften Konfiguration einer Software-Firewall

> [!warning]
>
> Falls Sie nicht schon über aktuelle Backups verfügen, sollte der erste Schritt im Troubleshooting, auch im Rescue-Modus, immer darin bestehen, ein Backup Ihrer Daten zu erstellen.
>
> Wenn Sie Dienste auf Ihrem Dedicated Server im laufenden Betrieb haben, wird der Rescue-Modus diese Dienste unterbrechen, da er in das Hilfsbetriebssystem neu gestartet wird.
> 

**In dieser Anleitung erfahren Sie, wie Sie einen Server im Modus *rescue-customer-windows* neu starten.**

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](/links/bare-metal/bare-metal), der mit einer Version von Microsoft Windows installiert wurde.
- Der Server muss über mehr als 16 GB RAM verfügen.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## Funktionsinformationen

Der *rescue-customer-windows* läuft in einer virtuellen Maschine (VM), die vom *rescue* System (basierend auf Debian GNU/Linux) gestartet wird.<br>
Die Festplatten des Servers sind mit der VM per *Passthrough* verbunden, sodass Sie darauf zugreifen können.<br>
Auf die anderen Serverkomponenten (CPU, RAM, Netzwerkkarte, RAID-Karte) kann nicht zugegriffen werden.<br>
Das Netzwerk ist mit *Passthrough* gemountet, ohne direkten Zugriff auf die Netzwerkkarte. Dies bedeutet, dass die VM die IP-Adresse und die MAC-Adresse des Bare-Metal-Servers trägt.

> [!warning]
>
> Neustart/Ausschalten der VM des *rescue-customer-windows* führt nicht zu einem Neustart des Servers auf seinem ursprünglichen Betriebssystem.
> Um mit dem ursprünglichen Betriebssystem neu zu starten, lesen Sie bitte die unten stehende Dokumentation.

## In der praktischen Anwendung

Der Rescue-Modus kann nur über Ihr [OVHcloud Kundencenter](/links/manager) aktiviert werden. Wählen Sie Ihren Server aus, indem Sie in den Bereich `Bare Metal Cloud`{.action} gehen und dort `Dedicated Server`{.action} gehen.

Suchen Sie im Feld **Allgemeine Informationen** nach "Boot“, klicken Sie auf den Button `...`{.action} und dann auf `Bearbeiten`{.action}.

![Startmodus ändern](images/rescue-mode-001.png){.thumbnail}

Wählen Sie auf der nächsten Seite **Im Rescue-Modus booten** aus.

Wählen Sie `rescue-customer-windows`{.action}. Geben Sie eine andere E-Mail-Adresse an, wenn Sie **nicht** möchten, dass die Login-Daten an die Hauptadresse Ihres OVHcloud-Kontos gesendet werden.

Klicken Sie auf `Weiter`{.action} und `Bestätigen`{.action}.

![Rescue-Customer-Modus](images/Rescue-Manager-windows-menu.png){.thumbnail}

Wenn die Änderung abgeschlossen ist, klicken Sie auf den Button `...`{.action} rechts von "Status“ im Bereich **Status der Dienste**.

Klicken Sie auf `Neu starten`{.action} und der Server wird im Rescue-Modus neu gestartet. Dieser Vorgang kann einige Minuten dauern.

Sie können den Fortschritt auf der Registerkarte `Tasks`{.action} überprüfen. Sobald das Rescue-System verfügbar ist, erhalten Sie eine E-Mail mit den Login-Daten (einschließlich des Login-Passworts) des Benutzers "Administrator“ des Rescue-Modus.

![Server neu starten](images/rescue-mode-02.png){.thumbnail}

Denken Sie daran, nach Abschluss Ihrer Tasks im Rescue-Modus den Boot-Modus (netboot) auf `Von Festplatte booten`{.action} zurückzusetzen und Ihren Server neu zu starten.

### Anmeldung beim *rescue-customer-windows*

Sobald das Passwort abgerufen wurde haben Sie drei Möglichkeiten, sich mit dem Server zu verbinden:

- Remote Desktop Protocol (RDP)
- SSH (offizielle Komponente von Windows OpenSSH Server)
- KVM over IP (falls Ihr Server dies erlaubt)

> [!warning]
>
> In jedem Fall werden Sie nach dem Passwort gefragt.
>
> Der Benutzer, der sich anmeldet, ist `Administrator`.
>
> Das Passwort wird über einen Link `secret-as-a-service` übertragen.

#### Verwendung des KVM over IP

Sie können im KVM-Login-Bildschirm eine andere Tastatursprache auswählen.

![KVM Login Screen](images/rescue-kvm-login-screen.png){.thumbnail}

![KVM Language Screen](images/rescue-kvm-login-language.png){.thumbnail}

Sie können die Eingabehilfen ändern und die virtuelle Tastatur aktivieren:

![KVM accessibility screen](images/rescue-kvm-login-accessibility.png){.thumbnail}

![KVM-Keyboard-Screen](images/rescue-kvm-login-keyboard.png){.thumbnail}

### Festplatten mounten

Es ist möglich, dass angeschlossene Festplatten als `dynamische Volumes` angesehen werden. Weitere Informationen zu diesen Treibern finden Sie in der offiziellen Dokumentation von Microsoft (https://learn.microsoft.com/en-us/troubleshoot/windows-server/backup-and-storage/troubleshoot-disk-management#a-dynamic-disks-status-is-foreign).

### Empfohlene Dienstprogramme

> [!warning]
>
> Unten finden Sie eine Liste von empfohlenen Programmen für bestimmte Anwendungsfälle.
> Diese Software wird standardmäßig nicht auf dem *rescue* Image installiert und ist problemlos im Internet verfügbar.

| Software | Beschreibung |
| --- | --- |
| CrystalDiskInfo | Datenträgerdiagnosetool |
| 7zip | Archivverwaltungstool |
| FileZilla | Open Source FTP Client |

## Weiterführende Informationen

- [Rescue-Modus aktivieren und verwenden](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
