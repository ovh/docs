---
title: "Erste Schritte mit einem Kimsufi, So You Start oder Rise Dedicated Server"
excerpt: "Erfahren Sie hier, wie Sie einen Kimsufi, So You Start oder Rise Dedicated Server in Ihrem OVHcloud Kundencenter verwalten und wie Sie mit der Konfiguration und Sicherung eines Servers starten"
updated: 2024-04-10
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Ein dedizierter Server ist ein physischer Server ("Bare Metal") in einem unserer Rechenzentren. Im Gegensatz zum Webhosting (auch "Shared Hosting" genannt), bei dem die technische Verwaltung von OVHcloud geleistet wird, sind Sie für die Verwaltung Ihres Servers allein verantwortlich.

**Diese Anleitung erläutert die Grundlagen zur Erstverwendung eines Kimsufi, So You Start oder Rise Dedicated Server.**

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) der Reihe Kimsufi, So You Start oder Rise in Ihrem Kunden-Account.
- Sie haben administrativen Zugriff auf Ihren Server über SSH oder RDP (Windows). 
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Inhaltsübersicht

- [Betriebssystem installieren oder reinstallieren](#install)
- [Einloggen auf dem Server](#connect)
- [Neustart Ihres Dedicated Servers](#reboot)
- [Absicherung Ihres Dedicated Servers](#secure)
- [OVHcloud Monitoring](#monitoring-server)
- [Netzwerkkonfiguration](#network)
- [Rescue-Modus](#rescue)
- [Zugang mit IPMI](#console)
- [Backup Storage](#backup)

<a name="install"></a>

### Betriebssystem installieren oder reinstallieren

> [!success]
>
> Weitere Informationen zu Server-Betriebssystemen finden Sie auf unserer [Webseite](https://www.ovhcloud.com/de/bare-metal/os/).
>

Sie können Ihren Server in wenigen Schritten in Ihrem [OVHcloud Kundencenter](/links/manager) reinstallieren oder ein anderes Betriebssystem auswählen. Klicken Sie im Tab `Allgemeine Informationen`{.action} auf `...`{.action} neben `System (OS)` und danach auf `Installieren`{.action}.

![Button Reinstallieren](images/reinstalling-your-server-01.png){.thumbnail}

Wählen Sie im Popup-Fenster eine der Installationsoptionen aus:

- `Installation mit einem OVHcloud Template`{.action}: Sie können das Betriebssystem auswählen und die Konfiguration Ihres Servers anpassen.
- `Installation mit einem Ihrer Templates`{.action}: Um eine personalisierte Vorlage verwenden zu können, müssen Sie zuvor mindestens eine Serverkonfiguration gespeichert haben. Aktivieren Sie dazu in Schritt 4 des Installationsprozesses die Option "Diese Installation speichern".
- `Installation auf Basis eines personalisierten Images`{.action}: Mit dieser Option können Sie ein externes Image auf dem Server installieren. Weitere Informationen zu dieser Option finden Sie in der Anleitung ["Bring Your Own Image verwenden"](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image)".

> [!primary]
>
> Einige proprietäre Betriebssysteme und Plattformen wie Plesk oder Windows benötigen Lizenzen, die zusätzliche Kosten verursachen. Sie können Lizenzen [bei OVHcloud](https://www.ovhcloud.com/de/bare-metal/os/) oder einem externen Reseller beziehen. Danach müssen Sie Ihre Lizenz im Betriebssystem selbst oder über Ihr [OVHcloud Kundencenter](/links/manager) hinzufügen.
>
> Sie können alle Ihre Lizenzen im Bereich `Bare Metal Cloud`{.action} unter `Lizenzen`{.action} verwalten. In diesem Abschnitt können Sie auch über den Button `Aktionen`{.action} Lizenzen bestellen oder bestehende Lizenzen hinzufügen.
>

Klicken Sie auf `Weiter`{.action}, um fortzufahren.

![Template-Auswahl](images/reinstalling-your-server-02.png){.thumbnail}

Nachdem Sie `Installation mit einem OVHcloud Template`{.action} ausgewählt haben, können Sie das gewünschte Betriebssystem in den Menüs auswählen.

![Operationelle Auswahl](images/reinstalling-your-server-03.png){.thumbnail}

Wenn Sie das Partitionsschema Ihres Betriebssystems ändern müssen, setzen Sie einen Haken in dem Feld "Konfiguration der Partitionen anpassen", bevor Sie auf `Weiter`{.action} klicken.

![Konfiguration anpassen](images/reinstalling-your-server-04.png){.thumbnail}

In diesem Schritt können Sie RAID- und Partitionierungsoptionen innerhalb der Grenzen der Serverhardware und des Betriebssystems einrichten.

Klicken Sie nach Abschluss der Anpassungen auf `Weiter`{.action}, um zur Zusammenfassung zu gelangen.

Dort finden Sie außerdem Optionen zu dem von Ihnen ausgewählten Betriebssystem.

Wenn Sie beispielsweise ein GNU/Linux-Betriebssystem installieren, können Sie Ihren SSH-Schlüssel hinzufügen.

Eine ausführliche Erläuterung zum Verwenden von SSH-Schlüsseln finden Sie in [unserer Anleitung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated).

![SSH-Konfiguration](images/reinstalling-your-server-05.png){.thumbnail}

Klicken Sie anschließend auf `Bestätigen`{.action}, um die Installation des Betriebssystems auf Ihrem Dedicated Server zu starten.

<a name="connect"></a>

### Einloggen auf dem Server

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
>

#### Linux

Wenn Sie ein OVHcloud Template als OS auf Ihrem Server installiert haben, wird automatisch ein Benutzer mit erhöhten Berechtigungen erstellt. Dieser Benutzer wird entsprechend dem Betriebssystem benannt, zum Beispiel "ubuntu" oder "rocky".

Sie erhalten dann eine E-Mail mit den Informationen, die für die Herstellung einer ersten SSH-Verbindung erforderlich sind. SSH ist ein sicheres Kommunikationsprotokoll, das zum Herstellen verschlüsselter Verbindungen zu einem Remote-Host verwendet wird. Weitere Informationen finden Sie in unserer Anleitung [Einführung in SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).

Die meisten aktuellen Betriebssysteme verfügen über einen nativ installierten **Open SSH** Client. Das bedeutet, dass Sie sich mit Ihren Zugangsdaten schnell und einfach über die jeweils verfügbare Befehlszeilenanwendung (`Terminal`, `Command prompt`, `Powershell`, etc.) mit Ihrem Server verbinden können. Geben Sie folgenden Befehl ein:

```bash
ssh username@IPv4
```

**Beispiel:**

```bash
ssh ubuntu@203.0.113.1
```

Sie können auch jede Anwendung eines Drittanbieters verwenden, die mit **Open SSH** kompatibel ist.

Nach der Anmeldung können Sie das vordefinierte Kennwort des aktuellen Benutzers mit folgendem Befehl zu einer Passphrase Iher Wahl ändern:

```bash
passwd
```

Bei einer GNU/Linux-Distribution werden **bei einer Passworteingabeaufforderung Ihre Tastatureingaben nicht angezeigt**.

Geben Sie Ihr aktuelles Kennwort ein, und drücken Sie `Enter`{.action}. Geben Sie die neue Passphrase ein, und geben Sie sie an der nächsten Eingabeaufforderung erneut ein, um sie zu bestätigen.

```console
Changing password for ubuntu.
Current password:
New password: 
Retype new password: 
passwd: password updated successfully
```

> [!warning]
> 
> **Aktivierung des Benutzer-Accounts "root"**
>
> Es ist nicht notwendig, den Benutzer-Account "root" zu verwenden, um mit der Administration Ihres Servers zu beginnen. Dieser Account muss zuerst im Serverbetriebssystem aktiviert werden, damit er verwendet werden kann. Aus Sicherheitsgründen sind außerdem SSH-Verbindungen mit dem Benutzer "root" standardmäßig **deaktiviert**.
> 
> Sofern nicht anders vermerkt, können alle in unserer Dokumentation beschriebenen administrativen Aktionen mit dem Standardbenutzer-Account durchgeführt werden, indem Sie `sudo` gefolgt von dem entsprechenden Befehl eingeben. Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung zum [Konfigurieren von Benutzerkonten und Root-Zugriff auf einem Server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).
>

SSH-Schlüssel können je nach Ihren Anforderungen in Bezug auf Sicherheit, Mobilität und Komfort als zusätzliche Verbindungsmethode verwendet werden oder gar die Identifizierung mittels Benutzername und Kennwort ersetzen. In unserer Anleitung zu [SSH-Schlüsseln](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated) erfahren Sie, wie Sie diese verwenden.

#### Windows

Nach Abschluss der Installation erhalten Sie eine E-Mail mit Ihren Windows-Anmeldeinformationen. Sie können sich dann über RDP (**R**emote **D**esktop **P**rotocol) mit Ihrem Server verbinden. Öffnen Sie dazu auf Ihrem lokalen Windows-Gerät die Anwendung `Remote Desktop Connection`.

![Windows Remote](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Geben Sie die IPv4-Adresse Ihres Servers und dann Ihre Kennung und Passphrase ein. In der Regel wird eine Warnmeldung angezeigt, in der Sie aufgefordert werden, die Verbindung aufgrund eines unbekannten Zertifikats zu bestätigen. Klicken Sie zum Login auf `Ja`{.action}.

Sie können auch jede RDP-kompatible Anwendung eines Drittanbieters verwenden. Dies ist notwendig, wenn Windows nicht auf Ihrem lokalen Gerät installiert ist.

> [!primary]
>
Wenn bei diesem Verfahren Probleme auftreten, überprüfen Sie, ob Remoteverbindungen (RDP) auf Ihrem Gerät zugelassen sind, indem Sie die Systemeinstellungen, Firewallregeln und mögliche Netzwerkeinschränkungen überprüfen.
>

Sie können auch die [IPMI-Konsole in Ihrem OVHcloud Kundencenter](#console) zur Verbindung mit dem Server nutzen.

#### Aktivieren der Windows Startprotokolle (optional)

Windows Boot Logs können bei der Diagnose von Serverstörungen hilfreich sein.

Um sie zu aktivieren, folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> 1. **Verbindung mit Server herstellen**
>>
>> Vebinden Sie sich mit Ihrem Server über RDP oder [IPMI](#console).<br>
>>
> 2. **Tool "Ausführen" öffnen**
>>
>> Öffnen Sie das Windows-Startmenü und klicken Sie auf `Run`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}<br>
>>
> 3. **"msconfig" öffnen**
>>
>> Geben Sie "msconfig" ein und klicken Sie auf `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}<br>
>>
> 4. **Logs aktivieren**
>>
>> Aktivieren Sie im neuen Fenster die Option `Boot log`. Klicken Sie auf `OK`{.action}.<br><br>
>>![IPMI](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}<br>
>>

Beim nächsten Hochfahren des Servers werden die Logs in einer Datei im Format `.txt` gespeichert. Der Dateipfad lautet: `C:\Windows\ntbtlog.txt`.

Um die in der Datei gespeicherten Protokolle im Rescue-Modus einzusehen, folgen Sie der [Anleitung zum Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

<a name="reboot"></a>

### Neustart Ihres Dedicated Servers

Ein Neustart kann notwendig sein, um aktualisierte Konfigurationen anzuwenden oder Fehler zu beheben. Wenn möglich, führen Sie über die Befehlszeile einen "Soft Reboot" des Servers durch:

```bash
reboot
```

Sie können jedoch jederzeit einen "Hard Reboot" in Ihrem [OVHcloud Kundencenter](/links/manager) ausführen. Klicken Sie im Tab `Allgemeine Informationen`{.action} auf `...`{.action} neben "Status" im Bereich **Dienststatus** und klicken Sie dann im Kontextmenü auf `Neu starten`{.action} und `Bestätigen`{.action}.

![Neustart](images/rebooting-your-server.png){.thumbnail}

<a name="secure"></a>

### Absicherung Ihres Dedicated Servers

Wie oben erläutert, sind Sie der Administrator Ihres dedizierten Servers. Als solcher sind Sie für Ihre Daten und deren Sicherheit verantwortlich. Mehr Informationen zur Sicherung Ihres Servers finden Sie in unserer Anleitung zur [Absicherung eines Servers](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server).

Wenn Sie Windows Server einsetzen, verwenden Sie [diese Anleitung](/pages/bare_metal_cloud/dedicated_servers/activate-port-firewall-soft-win).

<a name="monitoring-server"></a>

### OVHcloud Monitoring

Sie können den Monitoring-Status eines Servers im [OVHcloud Kundencenter](/links/manager) vom Tab `Allgemeine Informationen`{.action} aus einrichten (Abschnitt **Dienststatus**).

![Monitoring](images/monitoring-your-server.png){.thumbnail}

Klicken Sie auf den Button `Konfigurieren`{.action}. Im neu angezeigten Fenster haben Sie drei Optionen für das Überwachungsverhalten:

- **Deaktiviert**: Mit dieser Option werden Warnmeldungen und Eingriffe von OVHcloud gestoppt. Wählen Sie dies aus, wenn Sie auf dem Server relevante Administrationsmaßnahmen durchführen, die eine ICMP-Antwort verhindern.
- **Aktiviert mit proaktivem Eingriff**: Wenn der Server nicht mehr reagiert wird Ihnen eine Benachrichtigung per E-Mail gesendet und der Server von einem Techniker überprüft.
- **Aktiviert ohne proaktiven Eingriff**: Sie erhalten eine Benachrichtigung per E-Mail, wenn der Server nicht mehr reagiert. Um eine Intervention zu veranlassen, muss eine Support-Anfrage erstellt werden.

![Monitoring](images/monitoring-your-server2.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um Ihre Monitoring-Konfiguration zu aktualisieren.

Weitere Informationen zum OVHcloud Monitoring finden Sie in [unserer Anleitung](/pages/bare_metal_cloud/dedicated_servers/network_ip_monitoring).

<a name="network"></a>

### Netzwerkkonfiguration

> [!primary]
>
> Beachten Sie, dass [zusätzliche IP Adressen](https://www.ovhcloud.com/de/bare-metal/ip/) nicht mit der **Kimsufi** Reihe kompatibel sind.
>

#### IP-Bridge-Modus

Network Bridging bezeichnet die Aktion, die Netzwerkgeräte ausführen, um ein aggregiertes Netzwerk aus zwei oder mehr Kommunikationsnetzwerken oder zwei oder mehr Netzwerksegmenten zu erstellen. Bridging unterscheidet sich vom Routing insofern als die Netzwerke unabhängig kommunizieren können, während sie voneinander getrennt bleiben.

Diese Konfiguration wird vor allem in der Virtualisierung verwendet, damit jede virtuelle Maschine über eine eigene öffentliche IP-Adresse verfügt.

Weitere Informationen zum Bridge-Modus finden Sie in unserer Anleitung zum [IP-Bridge-Modus](/pages/bare_metal_cloud/dedicated_servers/network_bridging).

#### IP-Alias

Beim IP-Aliasing werden zwei oder mehr IP-Adressen mit demselben Netzwerkinterface verknüpft. So kann Ihr Server mehrere Verbindungen zu einem Netzwerk herstellen, die jeweils einen anderen Zweck erfüllen.

Detaillierte Anweisungen zur Konfiguration des IP-Alias finden Sie in der Anleitung zu [IP-Aliasing](/pages/bare_metal_cloud/dedicated_servers/network_ipaliasing).

#### IPv6 Konfiguration

> [!primary]
>
> Beachten Sie, dass Server der **Kimsufi** Reihe nur jeweils eine IPv4 Adresse und eine IPv6 Adresse haben. Diese werden bei der Installation des Betriebssystems automatisch eingerichtet.
>

OVHcloud Dedicated Server werden mit einem /64 IPv6 Block geliefert. Um die Adressen dieses Blocks zu verwenden müssen Sie die Konfiguration des Netzwerks anpassen. Lesen Sie dazu unsere Anleitung "[IPv6 auf einem Dedicated Server konfigurieren](/pages/bare_metal_cloud/dedicated_servers/network_ipv6)".

<a name="rescue"></a>

### Rescue-Modus

Der erste Schritt zur Fehlerbehebung besteht stets darin, Ihren Server in Ihrem [OVHcloud Kundencenter](/links/manager) im Rescue-Modus neu zu starten. Es ist wichtig, Serverfehler in diesem Modus zu identifizieren, um Probleme mit Software auszuschließen, bevor Sie unsere Support-Teams kontaktieren.

Folgen Sie unserer Anleitung zum [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode).

<a name="console"></a>

### Zugang mit IPMI

> [!primary]
>
> Beachten Sie, dass diese Option nicht für Server der **Kimsufi** Reihe verfügbar ist.
>

OVHcloud stattet Dedicated Server mit einer IPMI-Konsole (Intelligent Platform Management Interface) aus, die in Ihrem Browser oder über ein Java-Applet ausgeführt wird. Sie können sich direkt mit Ihrem Server verbinden, auch wenn dieser über keine Netzwerkverbindung verfügt. Sie ist deshalb ein nützliches Werkzeug, um Fehler zu beheben, die Ihren Server unerreichbar machen.

Weitere Informationen finden Sie in unserer Anleitung zur [Verwendung der IPMI-Konsole](/pages/bare_metal_cloud/dedicated_servers/using_ipmi_on_dedicated_servers).

<a name="backup"></a>

### Backup Storage

> [!primary]
>
> Beachten Sie, dass diese Option nicht für Server der **Kimsufi** Reihe verfügbar ist.
>

OVHcloud Dedicated Server verfügen über einen zugriffskontrollierten Speicherplatz als kostenlose Serviceoption. Er eignet sich am besten als ergänzende Backup-Option für den Fall, dass der Server selbst einen Datenverlust erleidet.

Zur Aktivierung und Nutzung des Backup Storage folgen Sie der [zugehörigen Anleitung](/pages/bare_metal_cloud/dedicated_servers/services_backup_storage).

## Weiterführende Informationen

[Konfigurieren von Benutzerkonten und Root-Zugriff auf einem Server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

[Dedicated Server absichern](/pages/bare_metal_cloud/dedicated_servers/securing-a-dedicated-server)

[Rescue-Modus aktivieren und verwenden](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[OVHcloud API & OS installation](/pages/bare_metal_cloud/dedicated_servers/api-os-installation) (EN)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
