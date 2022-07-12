---
title: VPS absichern
slug: vps-sicherheit
section: 'Erste Schritte'
excerpt: Erfahren Sie hier die Grundlagen zur Sicherheit Ihres VPS
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 05.05.2022**

## Ziel

Wenn Sie Ihren VPS bestellen, können Sie eine Distribution oder ein Betriebssystem auswählen, das Sie vorinstallieren möchten. Der Server kann also nach der Lieferung direkt verwendet werden. Es ist jedoch Ihre Aufgabe als Administrator, Maßnahmen umzusetzen, die die Sicherheit und Stabilität Ihres Systems gewährleisten.

**In dieser Anleitung erhalten Sie einige allgemeine Tipps zur Sicherung Ihres GNU/Linux-basierten Servers.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Datenzugriff auf Ihre Dienste haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Sie können sich auch jederzeit an unsere [Community](https://community.ovh.com/en/) wenden, um sich mit anderen Benutzern auszutauschen.
>

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben administrativen Zugriff (Root) auf Ihren VPS über SSH.

## In der praktischen Anwendung

> [!primary]
>
> Denken Sie daran, dass dies eine allgemeine Anleitung ist. Einige Befehle müssen an die von Ihnen verwendete Distribution oder das Betriebssystem angepasst werden. Wir empfehlen Ihnen manchmal, Tools Dritter zu verwenden. Wenn Sie Hilfe benötigen, lesen Sie die offizielle Dokumentation dieser Anwendungen.
>
> Wenn Sie Ihren ersten OVHcloud VPS konfigurieren, empfehlen wir Ihnen zunächst unsere Anleitung zur [Ersteinrichtung eines VPS](../erste-schritte-mit-einem-vps/).
>

Die folgenden Beispiele setzen voraus, dass Sie als Benutzer mit erhöhten Berechtigungen verbunden sind.

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

### Standard-SSH-Listening-Port ändern

Eine der ersten Aktionen auf Ihrem Server sollte die Konfiguration des Listening-Ports des SSH-Dienstes sein. Er ist standardmäßig auf **Port 22** eingestellt, deshalb zielen Server-Hacking-Versuche von Robotern auf diesen Port. Die Änderung dieser Einstellung mithilfe eines anderen Ports ist eine einfache Maßnahme, um den Schutz Ihres Servers vor automatisierten Angriffen zu verbessern.

Ändern Sie hierzu die Konfigurationsdatei des Dienstes mit einem Texteditor Ihrer Wahl (`nano` wird in diesem Beispiel verwendet):

```bash
~$ sudo nano /etc/ssh/sshd_config
```

Sie sollten diese oder ähnliche Zeilen vorfinden:

```console
# What Ports, IPs and Protocols we listen for
Port 22
```

Ersetzen Sie die Nummer **22** mit der Port-Nummer Ihrer Wahl.<br>
**Geben Sie keine bereits auf Ihrem System verwendete Port-Nummer ein**. Verwenden Sie aus Sicherheitsgründen eine Zahl zwischen 49152 und 65535. <br>Speichern und schließen Sie die Konfigurationsdatei.

Starten Sie den Dienst neu:

```bash
systemctl restart sshd
```

Dies sollte ausreichen, um die Änderungen umzusetzen. Sie können alternativ den VPS neu starten (`~$ sudo reboot`).

Denken Sie daran, dass Sie nun den neuen Port immer angeben müssen, wenn Sie eine SSH-Verbindung mit Ihrem Server aufbauen, zum Beispiel:

```bash
username@IPv4_des_VPS -p PortNummer
```

### Passwort des Root-Benutzers ändern

Es wird dringend empfohlen, das Passwort des Root-Benutzers so abzuändern, dass es auf einem neuen System nicht im Defaultzustand verbleibt. Weitere Informationen finden Sie in [dieser Anleitung](../root-password/).

### Anlegen eines Benutzers mit eingeschränkten Rechten

Im Allgemeinen sollten Aufgaben, die keine Root-Rechte erfordern, über einen Standardbenutzer ausgeführt werden. Sie können einen Benutzer mit folgendem Befehl erstellen:

```bash
sudo adduser Benutzername
```

Geben Sie dann die vom System angeforderten Informationen (Passwort, Name etc.) ein.

Der neue Benutzer kann sich via SSH einloggen. Verwenden Sie beim Login die eingegebenen Daten.

Wenn Sie mit diesen Login-Daten in Ihrem System eingeloggt sind, geben Sie folgenden Befehl ein, wenn Sie Operationen ausführen möchten, die Administrator-Rechte erfordern:

```bash
su root
```

Geben Sie das Passwort ein, wenn Sie dazu eingeladen sind, und die aktive Verbindung wird auf den Root-Benutzer umgestellt.

### Deaktivierung des Serverzugangs als Root

Der Root-Benutzer wird standardmäßig auf GNU/Linux-Systemen eingerichtet. Root-Zugriff bedeutet, dass alle Berechtigungen für ein Betriebssystem vorliegen. Es wird nicht empfohlen und kann sogar gefährlich werden, Ihren VPS ausschließlich über den Root-Zugriff zugänglich zu machen, da dieser Account irreversible Operationen durchführen kann.

Wir empfehlen Ihnen, den direkten Benutzerzugang als Root über das SSH-Protokoll zu deaktivieren. Denken Sie daran, einen anderen Benutzer zu erstellen, bevor Sie die folgenden Schritte ausführen.

Öffnen Sie die SSH-Konfigurationsdatei zum Bearbeiten wie oben beschrieben:

```bash
sudo nano /etc/ssh/sshd_config
```

Lokalisieren Sie folgenden Abschnitt:

```console
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Ersetzen Sie **yes** mit **no** in der Zeile `PermitRootLogin`.

Damit diese Änderung berücksichtigt wird, müssen Sie den SSH-Dienst neu starten:

```bash
systemctl restart sshd
```

Danach werden Verbindungsversuche zu Ihrem Server über den Root-Benutzer (`ssh root@IPv4_des_VPS`) abgelehnt.

### Konfiguration der internen Firewall (iptables)

GNU/Linux Distributionen werden mit einem Firewall-Dienst bereitgestellt, der als iptables bezeichnet wird. Er hat standardmäßig keine aktiven Regeln. Sie können dies überprüfen, indem Sie den folgenden Befehl eingeben:

```bash
iptables -L
```

Weitere Informationen zu Iptables finden Sie in unserer [Anleitung](../../dedicated/firewall-iptables/).

Wir empfehlen Ihnen, Regeln für diese Firewall zu erstellen und an Ihre Nutzung anzupassen. Weitere Informationen zu den möglichen Einstellungen finden Sie in der offiziellen Dokumentation der verwendeten Distribution.

### Fail2ban installieren

Fail2ban ist ein Sicherheitsframework zur Prävention unbefugter Zugriffe. Es dient dazu, IP-Adressen zu blockieren, von denen aus Bots oder Angreifer versuchen, in Ihr System einzudringen.<br>
Dieses Paket wird empfohlen und ist in einigen Fällen sogar unerlässlich, um Ihren Server vor Angriffen der Typen *Brute Force* oder *Denial of Service* zu schützen.

Um das Softwarepaket zu installieren verwenden Sie folgenden Befehl:

```bash
sudo apt install fail2ban
```

Sie können die Fail2ban-Konfigurationsdateien personalisieren, um Dienste, die dem öffentlichen Internet ausgesetzt sind, vor wiederholten Verbindungsversuchen zu schützen.

Wie von Fail2ban empofohlen, erstellen Sie eine lokale Konfigurationsdatei für Ihre Dienste, indem Sie die Datei "jail.conf" kopieren:

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

Fail2ban verfügt über zahlreiche Einstellungen und Filter für die Indvidualisierung sowie vordefinierte Optionen, zum Beispiel wenn Sie einem Nginx Webserver eine zusätzliche Sicherheitsebene hinzufügen möchten.

Weitere Informationen und Empfehlungen zu Fail2ban finden Sie in der [offiziellen Dokumentation](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} dieses Tools.

### Konfiguration der OVHcloud Network Firewall

Bei OVHcloud Diensten beseteht die Möglichkeit, am Eingangspunkt der Infrastruktur die so genannte Network Firewall zu aktivieren. Eine korrekte Konfiguration dieser Firewall ermöglicht es, Verbindungen zu blockieren, bevor diese überhaupt auf Ihrem Server ankommen.

Wenn Sie die OVHcloud Network Firewall aktivieren möchten, folgen Sie [dieser Anleitung](../../dedicated/firewall-network/).

### Ihr System und Ihre Daten sichern

Das Sicherheitskonzept beschränkt sich nicht auf den Schutz eines Systems vor Angriffen.

Die Sicherung Ihrer Daten ist ebenso essenziell, deshalb bietet Ihnen OVHcloud mehrere Backup-Optionen als Zusatzdienste:

- Mit der `Snapshot` Option können Sie manuelle Snapshots erstellen.
- `Automatische Backups` ermöglichen es, regelmäßige Backups Ihres VPS zu speichern (mit Ausnahme zusätzlicher Festplatten).

Alle Informationen zu den für Ihren Dienst verfügbaren Backup-Lösungen finden Sie auf der [Produktseite](https://www.ovhcloud.com/de/vps/options/) und in den [zugehörigen Anleitungen](../).

## Weiterführende Informationen

[Erste Schritte mit einem VPS](../erste-schritte-mit-einem-vps/) 

[Network Firewall](../../dedicated/firewall-network/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>
