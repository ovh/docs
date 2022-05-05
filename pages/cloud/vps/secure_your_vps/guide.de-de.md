---
title: 'VPS absichern'
slug: vps-sicherheit
section: 'Erste Schritte'
excerpt: 'Erfahren Sie hier die Grundlagen zur Sicherheit Ihres VPS'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 15.01.2021**

## Ziel

Wenn Sie Ihren VPS bestellen, können Sie eine Distribution oder ein Betriebssystem auswählen, das Sie vorinstallieren möchten. Der Server kann also nach der Lieferung direkt verwendet werden. Es ist jedoch Ihre Aufgabe als Administrator, Maßnahmen umzusetzen, die die Sicherheit und Stabilität Ihres Systems gewährleisten.

**In dieser Anleitung erhalten Sie einige allgemeine Tipps zur Sicherung Ihres GNU/Linux-basierten Servers.**
 
> [!warning]
>Diese Anleitung soll Sie bei allgemeinen Aufgaben so weit wie möglich unterstützen. Bitte denken Sie daran, diese Aktionen nötigenfalls an Ihre Situation anzupassen.
>
Bei Schwierigkeiten kontaktieren Sie bitte einen spezialisierten Dienstleister und/oder stellen Ihre Fragen in der OVHcloud Community unter https://community.ovh.com/en/ (Englisch). Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. 
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

### Systemupdate

Entwickler von Distributionen und Betriebssystemen veröffentlichen häufig Softwarepaket-Updates, sehr oft aus Sicherheitsgründen. Regelmäßige Aktualisierung Ihrer Distribution oder Ihres Betriebssystems mittels Herunterladen und Installation von Updates ist somit ein wichtiger Punkt, um Ihren VPS zu sichern. 

Dieses Update wird in zwei Schritten durchgeführt.

- Aktualisierung der Paketliste

```sh
apt-get update
```

- Aktualisierung der Pakete selbst

```sh
apt-get upgrade
```

Dieser Vorgang muss regelmäßig durchgeführt werden, um ein System auf dem neuesten Stand zu halten.

### Standard-SSH-Listening-Port ändern

Eine der ersten Aktionen auf Ihrem Server sollte die Konfiguration des Listening-Ports des SSH-Dienstes sein. Er ist standardmäßig auf **Port 22** eingestellt, deshalb zielen Server-Hacking-Versuche von Robotern auf diesen Port. Daher werden Versuche, Server von Robotern zu hacken, auf diesen Port abzielen. Die Änderung dieser Einstellung mithilfe eines anderen Ports ist eine einfache Maßnahme, um den Schutz Ihres Servers vor automatisierten Angriffen zu verbessern.

Um die SSH-Konfigurationsdatei zu ändern, geben Sie folgenden Befehl ein:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Der Befehl `nano` wird beispielhaft verwendet. Sie können auch `vim` oder jegliche Befehle verwenden, die es erlauben, Konfigurationsdateien zu bearbeiten.
>

Sie sollten diese oder ähnliche Zeilen vorfinden:

```sh
# What Ports, IPs and Protocols we listen for
Port 22
```

Ersetzen Sie die Nummer **22** mit der Port-Nummer Ihrer Wahl. **Geben Sie keine bereits auf Ihrem System verwendete Port-Nummer ein**. Verwenden Sie aus Sicherheitsgründen eine Zahl zwischen 49152 und 65535. <br>Speichern und schließen Sie die Konfigurationsdatei.

Starten Sie den Dienst neu:

```sh
systemctl restart sshd
```

Dies sollte ausreichen, um die Änderungen umzusetzen. Sie können alternativ den VPS neu starten (`~$ reboot`).

Denken Sie daran, dass Sie nun den neuen Port immer angeben müssen, wenn Sie eine SSH-Verbindung mit Ihrem Server aufbauen, zum Beispiel:

```sh
username@IPv4_des_VPS -p PortNummer
```

### Passwort des Root-Benutzers ändern

Es wird dringend empfohlen, das Passwort des Root-Benutzers so abzuändern, dass es auf einem neuen System nicht im Defaultzustand verbleibt. Weitere Informationen finden Sie in dieser [Anleitung](../root-password/).

### Anlegen eines Benutzers mit eingeschränkten Rechten

Im Allgemeinen sollten Aufgaben, die keine Root-Rechte erfordern, über einen Standardbenutzer ausgeführt werden. Sie können einen Benutzer mit folgendem Befehl erstellen:

```sh
adduser Benutzername
```

Geben Sie dann die vom System angeforderten Informationen (Passwort, Name etc.) ein.

Der neue Benutzer kann sich via SSH einloggen. Verwenden Sie beim Login die eingegebenen Daten.

Wenn Sie mit diesen Login-Daten in Ihrem System eingeloggt sind, geben Sie folgenden Befehl ein, wenn Sie Operationen ausführen möchten, die Administrator-Rechte erfordern:

```sh
su root
```

Geben Sie das Passwort ein, wenn Sie dazu aufgefordert werden, und die aktive Verbindung wird auf den Root-Benutzer umgestellt.

### Deaktivierung des Serverzugangs als Root

Der Root-Benutzer wird standardmäßig auf GNU/Linux-Systemen eingerichtet. Root-Zugriff bedeutet, dass alle Berechtigungen für ein Betriebssystem vorliegen. Es wird nicht empfohlen und kann sogar gefährlich werden, Ihren VPS ausschließlich über den Root-Zugriff zugänglich zu machen, da dieser Account irreversible Operationen durchführen kann.

Wir empfehlen Ihnen, den direkten Benutzerzugang als Root über das SSH-Protokoll zu deaktivieren. Denken Sie daran, einen anderen Benutzer zu erstellen, bevor Sie die folgenden Schritte ausführen.

Öffnen Sie die SSH-Konfigurationsdatei zum Bearbeiten wie oben beschrieben:

```sh
nano /etc/ssh/sshd_config
```

Lokalisieren Sie folgenden Abschnitt:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Ersetzen Sie **yes** mit **no** in der Zeile `PermitRootLogin`.

Damit diese Änderung berücksichtigt wird, müssen Sie den SSH-Dienst neu starten:

```sh
systemctl restart sshd
```

Danach werden Verbindungsversuche zu Ihrem Server über den Root-Benutzer (`ssh root@IPv4_des_VPS`) abgelehnt.

### Fail2ban installieren

Fail2ban ist ein Sicherheitsframework zur Prävention unbefugter Zugriffe. Es blockiert unbekannte IP-Adressen, die versuchen, in Ihr System einzudringen. Diese Software wird dringend empfohlen, um Brute-Force-Angriffe auf Ihre Dienste zu verhindern.

Um das Softwarepaket zu installieren verwenden Sie folgenden Befehl:

```sh
apt-get install fail2ban
```

Wenn das Paket installiert ist, passen Sie die Konfigurationsdatei an Ihren Verwendungszweck an. Vor jeder Änderung wird empfohlen, die Konfigurationsdatei mit folgendem Befehl zu sichern:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Bearbeiten Sie anschließend die Datei:

```sh
nano /etc/fail2ban/jail.conf
```

Wenn Sie mit den Änderungen fertig sind, starten Sie den Dienst mit folgendem Befehl neu:

```sh
/etc/init.d/fail2ban restart
```

Sie finden die Anwendungsmöglichkeiten in der Dokumentation zu diesem Tool auf der [offiziellen Webseite](https://www.fail2ban.org/wiki/index.php/Main_Page){.external}.

### Konfiguration der internen Firewall (iptables)

GNU/Linux Distributionen werden mit einem Firewall-Dienst bereitgestellt, der als iptables bezeichnet wird. Er hat standardmäßig keine aktiven Regeln. Sie können dies überprüfen, indem Sie den folgenden Befehl eingeben:

```sh
iptables -L
```

Wir empfehlen Ihnen, Regeln für diese Firewall zu erstellen und an Ihre Nutzung anzupassen. Weitere Informationen zu den möglichen Einstellungen finden Sie in der offiziellen Dokumentation der verwendeten Distribution.

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
