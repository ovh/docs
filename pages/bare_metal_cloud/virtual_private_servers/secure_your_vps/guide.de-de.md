---
title: "Einen VPS absichern"
excerpt: "Erfahren Sie hier, wie Sie grundsätzliche Sicherheitsmaßnahmen anwenden, um Ihren VPS vor Angriffen und unbefugtem Zugriff zu schützen"
updated: 2024-02-20
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Wenn Sie Ihren VPS bestellen, können Sie eine Distribution oder ein Betriebssystem auswählen, das Sie vorinstallieren möchten. Der Server kann also nach der Lieferung direkt verwendet werden. Es ist jedoch Ihre Aufgabe als Administrator, Maßnahmen umzusetzen, die die Sicherheit und Stabilität Ihres Systems gewährleisten.

**In dieser Anleitung werden allgemeine Hinweise zur Absicherung eines GNU/Linux-basierten Servers erläutert.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben. 
>

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben administrativen Zugriff (sudo) auf Ihren VPS über SSH.

## In der praktischen Anwendung

> [!primary]
>
> Beachten Sie, dass dies eine allgemeine Anleitung ist, basierend auf einer Ubuntu Distribution. Einige Befehle müssen an die von Ihnen verwendete Distribution oder das Betriebssystem angepasst werden. Wir empfehlen gelegentlich die Verwendung externer Tools. Wenn Sie dazu Hilfe benötigen, lesen Sie die offizielle Dokumentation dieser Anwendungen.
>
> Wenn Sie Ihren ersten OVHcloud VPS konfigurieren, empfehlen wir, zum Einstieg unsere Anleitung zur [Ersteinrichtung eines VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) zu nutzen.
>

Die folgenden Beispiele setzen voraus, dass Sie als [Benutzer mit erhöhten Berechtigungen](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) eingeloggt sind.

### Systemupdate

Entwickler von Distributionen und Betriebssystemen veröffentlichen häufig Softwarepaket-Updates, sehr oft aus Sicherheitsgründen.<br>
Regelmäßige Aktualisierung Ihrer Distribution oder Ihres Betriebssystems mittels Herunterladen und Installation von Updates ist somit ein wichtiger Punkt, um Ihren VPS zu sichern. 

Dieses Update wird in zwei Schritten durchgeführt.

- Aktualisierung der Paketliste:

```bash
sudo apt update
```

- Aktualisierung der Pakete:

```bash
sudo apt upgrade
```

Dieser Vorgang muss regelmäßig durchgeführt werden, um ein System auf dem neuesten Stand zu halten.

### Standard-SSH-Listening-Port ändern <a name="changesshport"></a>

Eine der ersten Aktionen auf Ihrem Server sollte die Konfiguration des Listening-Ports des SSH-Dienstes sein. Er ist standardmäßig auf **Port 22** eingestellt, deshalb zielen Hacking-Attacken von Bots auf diesen Port. Die Änderung dieser Einstellung zu einem individuellen Port ist eine einfache Maßnahme, um den Schutz Ihres Servers vor automatisierten Angriffen zu verbessern.

Ändern Sie hierzu die Konfigurationsdatei des Dienstes mit einem Texteditor Ihrer Wahl (`nano` wird in diesem Beispiel verwendet):

```bash
sudo nano /etc/ssh/sshd_config
```

Sie sollten diese oder ähnliche Zeilen vorfinden:

```console
#Port 22
#AddressFamily any
#ListenAddress 0.0.0.0
```

Ersetzen Sie die Nummer **22** mit der Port-Nummer Ihrer Wahl.<br>
**Geben Sie keine bereits auf Ihrem System verwendete Port-Nummer ein**. Um sicher zu gehen, verwenden Sie eine Zahl zwischen 49152 und 65535. <br>Speichern und schließen Sie die Konfigurationsdatei.

Wenn die Zeile "auskommentiert" ist (d. h. wenn ihr ein "#" vorangestellt ist) wie im Beispiel oben zu sehen, achten Sie darauf, das "#" vor dem Speichern der Datei zu entfernen, damit die Änderung wirksam wird. Beispiel:

```console
Port 49152
#AddressFamily any
#ListenAddress 0.0.0.0
```

Starten Sie den Dienst neu:

```bash
systemctl restart sshd
```

Dies sollte ausreichen, um die Änderungen umzusetzen. Sie können alternativ den VPS neu starten (`sudo reboot`).

**Für Ubuntu 23.04 und höher**

Für die neuesten Ubuntu Versionen wird die SSH-Konfiguration nun in der Datei `ssh.socket` verwaltet.

Um den SSH-Port zu aktualisieren, bearbeiten Sie die Zeile `Listenstream` in der Konfigurationsdatei mit einem Texteditor Ihrer Wahl (`nano` in diesem Beispiel verwendet):

```console
[Socket]
ListenStream=49152
Accept=no
```

Speichern Sie die Änderungen, und führen Sie die folgenden Befehle aus:

```bash
sudo systemctl daemon-reload
```

```bash
sudo systemctl restart ssh.service
```

Wenn Sie die Betriebssystemfirewall aktiviert haben, stellen Sie sicher, dass der neue Port in den Firewallregeln zugelassen ist.

Denken Sie daran, dass Sie nun den neuen Port immer angeben müssen, wenn Sie eine [SSH-Verbindung mit Ihrem Server aufbauen](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction):

```bash
username@IPv4_VPS -p PortNummer
```

Beispiel:

```bash
ssh ubuntu@203.0.113.100 -p 49152
```

### Erstellen eines Benutzers mit eingeschränkten Rechten <a name="createuser"></a>

Im Allgemeinen sollten Aufgaben, die keine Root-Rechte erfordern, über einen Standardbenutzer ausgeführt werden. Weitere Informationen finden Sie in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Konfiguration der internen Firewall (iptables)

GNU/Linux Distributionen werden mit einem Firewall-Dienst bereitgestellt, der als *iptables* bezeichnet wird. Er hat standardmäßig keine aktiven Regeln. Sie können dies überprüfen, indem Sie den folgenden Befehl eingeben:

```bash
iptables -L
```

Weitere Informationen zu *iptables* finden Sie in unserer [Anleitung](/pages/bare_metal_cloud/virtual_private_servers/firewall-Linux-iptable).

Wir empfehlen Ihnen, Regeln für diese Firewall zu erstellen und an Ihre Nutzung anzupassen. Weitere Informationen zu den möglichen Einstellungen finden Sie in der offiziellen Dokumentation der verwendeten Distribution.

### Fail2ban installieren

Fail2ban ist ein Sicherheitsframework zur Prävention unbefugter Zugriffe. Es dient dazu, IP-Adressen zu blockieren, von denen aus Bots oder Angreifer versuchen, in Ihr System einzudringen.<br>
Dieses Paket wird empfohlen und ist in einigen Fällen sogar unerlässlich, um Ihren Server vor Angriffen der Typen *Brute Force* oder *Denial of Service* zu schützen.

Um das Softwarepaket zu installieren verwenden Sie folgenden Befehl:

```bash
sudo apt install fail2ban
```

Sie können die Fail2ban-Konfigurationsdateien personalisieren, um Dienste, die dem öffentlichen Internet ausgesetzt sind, vor wiederholten Verbindungsversuchen zu schützen.

Wie von Fail2ban empfohlen, erstellen Sie eine lokale Konfigurationsdatei für Ihre Dienste, indem Sie die Datei "jail.conf" kopieren:

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Öffnen Sie anschließend die Datei mit einem Texteditor:

```bash
sudo nano /etc/fail2ban/jail.local
```

Beachten Sie auf jeden Fall die Informationen am Dateianfang, insbesondere die Kommentare unter `[DEFAULT]`.

Die Parameter von `[DEFAULT]` sind global und gelten daher für alle Dienste, die in dieser Datei aktiviert sind (`enabled = true`). 

Es ist wichtig zu wissen, dass die globalen Parameter nur dann berücksichtigt werden, wenn in den Abschnitten weiter unten in der Datei (`JAILS`) keine davon abweichenden Werte definiert sind.

Betrachten Sie etwa diese Zeilen unter `[DEFAULT]`:

```console
bantime  = 10m
maxretry = 5
enabled = false
```

Dies bedeutet, dass eine IP-Adresse, von der aus sich ein Host zu verbinden versucht, nach dem fünften gescheiterten Verbindungsversuch für 10 Minuten gesperrt wird.<br>
Allerdings bleiben alle durch `[DEFAULT]` und in den darauf folgenden Abschnitten spezifizierten Parameter deaktiviert, es sei denn, die Zeile `enabled = true` wird für einen Dienst hinzugefügt (aufgelistet unter `# JAILS`).

Anwendungsbeispiel: Die folgenden Zeilen im Abschnitt `[sshd]` aktivieren Einschränkungen ausschließlich für den Dienst OpenSSH:

```console
[sshd]
enabled = true
port = ssh
filter = sshd
maxretry = 3
findtime = 5m
bantime  = 30m
```

In diesem Fall wird jeglicher Verbindungsversuch über SSH, der innerhalb von fünf Minuten dreimal fehlschlägt, zu einer Sperrzeit von 30 Minuten für die betroffene IP-Adresse führen.

Sie können "ssh" mit Ihrer SSH-Portnummer ersetzen, falls Sie diese geändert haben.

Der beste Ansatz besteht darin, Fail2ban nur für die Dienste zu aktivieren, die tatsächlich auf dem Server ausgeführt werden. Jeder unter `# JAILS` hinzugefügte individuelle Parameter hat dann Vorrang vor den Standardwerten `[DEFAULT]`.

Sobald Ihre Bearbeitungen abgeschlossen sind, speichern Sie die Datei und schließen Sie den Editor.

Starten Sie den Dienst neu, um sicherzustellen, dass er mit den individualisierten Änderungen ausgeführt wird:

```bash
sudo service fail2ban restart
```

Fail2ban verfügt über zahlreiche Einstellungen und Filter für die Individualisierung sowie vordefinierte Optionen, zum Beispiel wenn Sie einem Nginx Webserver eine zusätzliche Sicherheitsebene hinzufügen möchten.

Weitere Informationen und Empfehlungen zu Fail2ban finden Sie in der [offiziellen Dokumentation](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} dieses Tools.

### Konfiguration der OVHcloud Network Firewall

Bei OVHcloud Diensten besteht die Möglichkeit, am Eingangspunkt der Infrastruktur die so genannte Network Firewall zu aktivieren. Eine korrekte Konfiguration dieser Firewall ermöglicht es, Verbindungen zu blockieren, bevor diese überhaupt auf Ihrem Server ankommen.

Wenn Sie die OVHcloud Network Firewall aktivieren möchten, folgen Sie [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/firewall_network).

### Ihr System und Ihre Daten sichern

Das Sicherheitskonzept beschränkt sich nicht auf den Schutz eines Systems vor Angriffen.

Die Sicherung Ihrer Daten ist ebenso essenziell, deshalb bietet Ihnen OVHcloud mehrere Backup-Optionen als Zusatzdienste:

- Mit der `Snapshot` Option können Sie manuelle Snapshots erstellen.
- `Automatische Backups` ermöglichen es, regelmäßige Backups Ihres VPS zu speichern (mit Ausnahme zusätzlicher Disks).

Alle Informationen zu den für Ihren Dienst verfügbaren Backup-Lösungen finden Sie auf der [Produktseite](https://www.ovhcloud.com/de/vps/options/) und in den [zugehörigen Anleitungen](/products/bare-metal-cloud-virtual-private-servers).

## Weiterführende Informationen

[Erste Schritte mit einem VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps) 

[Firewall auf einem Windows Server konfigurieren](/pages/bare_metal_cloud/virtual_private_servers/activate-port-firewall-soft-win)

[Konfiguration der Linux Firewall mit iptables](/pages/bare_metal_cloud/virtual_private_servers/firewall-Linux-iptable)

[Network Firewall](/pages/bare_metal_cloud/dedicated_servers/firewall_network)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>
