---
title: 'Einen dedizierten Server sichern'
slug: dedizierten-server-sichern
excerpt: 'In dieser Anleitung erhalten Sie einige Tipps zur Sicherung Ihres dedizierten Servers.'
section: 'Erste Schritte'
order: 2
---

**Stand 22.08.2018**

## Einleitung

Wenn Sie einen dedizierten Server bestellen, ist auf diesem noch kein Sicherheitsprotokoll eingerichtet. Es liegt also an Ihnen, Ihren Server zu sichern. OVHcloud ist nicht verantwortlich für eventuelle Sicherheitslücken Ihrer Maschine.

**Hier erhalten Sie einige Ratschläge zum Thema Sicherheit Ihres dedizierten Servers.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir hierfür keinerlei Administrator-Aufgaben übernehmen oder sonstige Hilfeleistung anbieten. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit Ihrer Anlage zu gewährleisten.
>
> Wir stellen Ihnen diesen Leitfaden zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Server-Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil "Weiterführende Informationen" dieser Anleitung.
>


## Voraussetzungen

- Sie verfügen über einen [dedizierten Server](https://www.ovh.de/dedicated_server/){.external}.
- Sie sind unter Linux via SSH (Root-Zugriff) oder unter Windows als Administrator mit Ihrem Server verbunden.


## Beschreibung

> [!primary]
>
> Dies ist eine allgemeine Anleitung. Es kann sein, dass aufgrund der Distribution und/oder des Betriebssystems, das Sie verwenden, einige Befehle entsprechend angepasst werden müssen. In manchen Tipps wird Ihnen geraten, ein Tool eines Dritten zu verwenden. Bei Fragen zur Nutzung eines solchen Tools lesen Sie bitte die offizielle Dokumentation des jeweiligen Herausgebers.  
>

### Ihr System aktualisieren

Die Entwickler von Distributionen und Betriebssystemen bieten häufig Updates der Softwarepakete an, meistens aus Sicherheitsgründen. **Deswegen ist es für die Sicherheit Ihres Servers äußerst wichtig, Ihre Distribution oder Ihr Betriebssystem immer auf dem neuesten Stand zu halten.**

Hierzu sind zwei Schritte notwendig, wobei sowohl die Liste der Pakete (d. h. die Liste der installierten Softwareanwendungen) als auch die Pakete selbst aktualisiert werden.

#### Paketliste aktualisieren

Um die Liste der Pakete auf Ihrem Server zu aktualisieren, gehen Sie wie folgt vor:

```sh
apt-get update
```

#### Pakete aktualisieren

Anschließend aktualisieren Sie die Pakete auf Ihrem Server wie folgt:

```sh
apt-get upgrade
```

Wenn diese Updates abgeschlossen sind, ist Ihr System auf dem neuesten Stand. Dieser Vorgang muss regelmäßig durchgeführt werden.


### Standard-SSH-Listening-Port ändern

Eine der ersten Aktionen, die Sie auf dem Server ausführen sollten, ist die Änderung der Port-Nummer, auf der der SSH-Dienst Verbindungsanfragen empfängt (Standard-Listening-Port). Standardmäßig ist der Listening-Port auf Port 22 eingestellt. Wir empfehlen Ihnen, den Standardwert zu ändern. Tatsächlich werden die meisten Server-Hackversuche von Robotern durchgeführt, die hauptsächlich den Port 22 angreifen. Indem Sie diese Einstellung ändern, wird Ihr Server für Hacker folglich schwieriger zu erreichen.

> [!primary]
>
> In den folgenden beiden Beispielen verwenden wir den Texteditor **Nano** von Linux. Sie können jedoch jeden beliebigen Texteditor verwenden, mit dem Sie die Konfigurationsdatei bearbeiten können.
>

Um die SSH-Konfigurationsdatei zu ändern, geben Sie folgenden Befehl ein:

```sh
nano /etc/ssh/sshd_config
```

Gehen Sie danach in der Datei zur folgenden Zeile:

```sh
# What ports, IPs and protocols we listen for Port 22
```

Ersetzen Sie die Port-Nummer **22** mit einer von Ihnen gewählten Port-Nummer, speichern Sie die Änderungen und schließen Sie die Konfigurationsdatei. **Achten Sie darauf, keine Port-Nummer zu verwenden, die bereits genutzt wird.** Starten Sie anschließend den Server neu.

Wenn Sie nun eine SSH-Verbindung zu Ihrem Server herstellen wollen, muss der neue Port angegeben werden.

```sh
ssh root@ihrserver.ovh.net -p NeuerPort
```

> [!warning]
>
> Bitte beachten Sie, dass die Änderung des Standardports von SSH oder einem anderen Protokoll ein mögliches Risiko darstellt. Es kann vorkommen, dass bestimmte Dienste nicht ohne Standardport konfiguriert werden können und nicht mehr funktionieren, wenn der Port bearbeitet wird.
>


### Passwort des Root-Benutzers ändern

Bei der Installation einer Distribution oder eines Betriebssystems wird automatisch ein Passwort für den Root-Zugriff erstellt. Wir empfehlen Ihnen dringend, dieses Passwort zu ändern und ein personalisiertes Passwort zu verwenden. Stellen Sie hierzu eine SSH-Verbindung mit Ihrem Server her und geben Sie den folgenden Befehl ein:

```sh
passwd root
```

Geben Sie anschließend Ihr neues Passwort zweimal ein. Beachten Sie, dass aus Sicherheitsgründen **das neue Passwort bei der Eingabe nicht angezeigt wird**. Sie können also die eingegebenen Zeichen nicht sehen.

Nachdem Sie das neue Passwort festgelegt haben, muss dieses ab Ihrer nächsten Systemverbindung zum Einloggen verwendet werden.


### Benutzer mit eingeschränkten Rechten anlegen

Wir empfehlen Ihnen, für den täglichen Gebrauch ein Benutzerkonto mit eingeschränktem Zugriff auf Ihren Server einzurichten. Sie können mit folgendem Befehl einen neuen Benutzer anlegen:

```sh
adduser Name_Benutzer_Personalisiert
```

Geben Sie dann die vom System angeforderten Informationen (Passwort, Name etc.) ein.

Dieser Benutzer kann sich in Ihrem System via SSH mit dem Kennwort einloggen, das Sie bei der Erstellung des Benutzerkontos angegeben haben. Wenn Sie sich nun mit diesen Daten einloggen und in Ihrem System Operationen ausführen möchten, für die Administrator-Rechte nötig sind, geben Sie einfach den folgenden Befehl ein:

```sh
su root
```

Geben Sie anschließend das Passwort des Root-Benutzers ein, um die Operation zu bestätigen.


### Root-Zugriff zum Server deaktivieren

Der Root-Benutzer wird standardmäßig auf UNIX-Systemen wie Linux oder macOS angelegt. Er verfügt über alle Administrationsrechte auf Ihrem System. Es ist nicht ratsam, ja sogar gefährlich, Ihren dedizierten Server nur über diesen Benutzer zugänglich zu machen, da dieser irreversible Operationen auf Ihrem Server durchführen kann.

Wir empfehlen Ihnen dringend, den direkten Zugriff der Root-Benutzer über das SSH-Protokoll zu deaktivieren. Ändern Sie hierzu die SSH-Konfigurationsdatei wie zuvor zur Änderung des SSH-Ports.

Stellen Sie eine SSH-Verbindung mit Ihrem Server her und geben Sie den folgenden Befehl ein:

```sh
nano /etc/ssh/sshd_config
```

Suchen Sie anschließend den folgenden Abschnitt und ersetzen Sie “yes” mit “no” in der Zeile `PermitRootLogin`:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Nachdem Sie die Konfigurationsdatei gespeichert und geschlossen haben, starten Sie den SSH-Dienst mit folgendem Befehl neu, um die Änderungen anzuwenden:

```sh
/etc/init.d/ssh restart
```

### Fail2ban-Paket installieren und konfigurieren

Fail2ban ist ein Sicherheits-Framework gegen unerlaubtes Eindringen, dessen Ziel es ist, unbekannte IP-Adressen zu blockieren, die versuchen, auf Ihr System zuzugreifen. Wir empfehlen Ihnen, dieses Paket zu installieren, um sich gegen jede Art von Brute-Force-Angriff zu schützen.

Um Fail2ban zu installieren, verwenden Sie folgenden Befehl:

```sh
apt-get install fail2ban
```

Sobald das Paket installiert ist, bearbeiten Sie die zugehörige Konfigurationsdatei, um sie an Ihre eigene Konfiguration anzupassen. Wir empfehlen, bevor Sie irgendwelche Änderungen vornehmen, immer ein Backup der Konfigurationsdatei durchzuführen, indem Sie den folgenden Befehl eingeben:

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Ändern Sie anschließend die Datei:

```sh
nano /etc/fail2ban/jail.conf
```

Wenn Sie mit den Änderungen fertig sind, starten Sie den Dienst mit folgendem Befehl neu:

```sh
/etc/init.d/fail2ban restart
```

Für weitere Informationen bezüglich Fail2Ban lesen Sie bitte die [offizielle Dokumentation](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} des Tools.


### Interne Firewall konfigurieren: Iptables

Die reine Basisdistribution wird mit einem Firewall-Dienst namens Iptables geliefert. Dieser hat standardmäßig keine aktive Regel. Sie können dies überprüfen, indem Sie den folgenden Befehl eingeben:

```sh
iptables -L
```

Es wird empfohlen, die Regeln dieser Firewall zu erstellen und an Ihre Bedürfnisse anzupassen. Für weitere Informationen zur Konfiguration von Iptables lesen Sie bitte die offizielle Dokumentation Ihrer Linux-Distribution.


### OVHcloud Network Firewall konfigurieren

OVHcloud Server sind mit Network Firewall, einer eigenen Firewall direkt am Eingang der Infrastruktur, ausgestattet. Installation und Konfiguration von Network Firewall ermöglichen das Blockieren von Protokollen, bevor diese überhaupt auf Ihrem Server ankommen.

[Hier](https://docs.ovh.com/de/dedicated/firewall-network/){.external} finden Sie die Anleitung, um Network Firewall zu konfigurieren.


### Ihr System und Ihre Daten sichern

Das Konzept der Sicherheit ist nicht auf den Schutz eines Systems vor Angriffen beschränkt. Die Sicherung Ihrer Daten ist ebenfalls ein wesentlicher Bestandteil, weshalb OVHcloud Ihnen kostenlos 500 GB Backup-Speicherplatz für Ihren Server anbietet. Sie können den Backup-Speicher in Ihrem Kundencenter aktivieren und dort über folgende Protokolle auf ihn zugreifen.

- FTP
- FTPS
- NFS
- CIFS

Außerdem benötigen Sie eine zusätzliche Backup-Lösung, um Ihre Daten zu replizieren und auf Ihren Backup-Speicher zu übertragen.

Für weitere Informationen zu unseren Storage-Angeboten lesen Sie unsere [Anleitung](https://docs.ovh.com/gb/en/dedicated/services-backup-storage/){.external} zum Thema (Englisch).


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.