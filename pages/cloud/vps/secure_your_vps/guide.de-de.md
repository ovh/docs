---
title: 'VPS Sicherheit'
slug: vps-sicherheit
section: 'Erste Schritte'
---

**Stand 18.01.2018**

## Einleitung

Wenn Sie einen VPS bestellen, wird dieser mit einer vorinstallierten Distribution geliefert, aber ohne nativ eingerichtetes Sicherheitsprotokoll. Es liegt also an Ihnen, Ihren VPS zu sichern. OVHcloud kann in diesem Punkt nicht eingreifen.

**Zweck dieser Anleitung ist, Ihnen allgemeine Tipps zur Sicherung Ihres Servers zu geben.**
 
> [!warning]
>
> OVHcloud stellt Ihnen Maschinen zur Verfügung, für die Sie alleine die Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir keinerlei Administrator-Aufgaben auf diesen ausführen. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit Ihrer Anlage zu gewährleisten. Wir stellen Ihnen diesen Leitfaden zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Server-Verwaltungsaufgaben zu helfen.  Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben.  Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 

## Voraussetzungen

- Sie sind via SSH auf Ihrem VPS eingeloggt (Root-Zugriff). 


## Beschreibung

In dieser Anleitung finden Sie mehrere Ratschläge zum Thema Sicherheit Ihres VPS. Bitte beachten Sie, dass es sich hierbei um eine allgemeine Anleitung handelt. Manche der hier angegebenen Befehle müssen an die von Ihnen verwendete Distribution angepasst werden. Bitte beachten Sie die offizielle Dokumentation dieser Tools, sollten Sie bei deren Verwendung Hilfe benötigen.

### System-Update

Die Entwickler der verschiedenen Distributionen und Betriebssysteme bieten häufig Updates der Softwarepakete an, meistens aus Sicherheitsgründen. Regelmäßige Aktualisierung Ihrer Distribution durch Herunterladen und Installation von Updates ist somit ein wichtiger Punkt, um Ihren VPS zu sichern.

Diese Updates werden meist in zwei Schritten durchgeführt:

- Aktualisierung der Paketliste

```sh
apt-get update
```

- Aktualisierung der Pakete

```sh
apt-get upgrade
```

Wenn Sie diese beiden Schritte durchgeführt haben, ist Ihr System auf dem neuesten Stand. Dieser Vorgang muss regelmäßig durchgeführt werden.


### Den Standard-SSH-Listening-Port ändern

Eine der ersten Aktionen, die Sie auf dem Server ausführen sollten, ist die Änderung der Port-Nummer, auf der der SSH-Dienst Verbindungsanfragen empfängt (Standard-Listening-Port). Standardmäßig ist der Listening-Port auf **Port 22** eingestellt. Wir raten Ihnen deshalb, diese Standardeinstellung zu ändern und einen anderen Port anzugeben.  Tatsächlich werden die meisten Server Hacks von Robotern durchgeführt, die standardmäßig den Port 22 angreifen. Mit der Änderung dieser Einstellung machen Sie es Hackern etwas schwerer, Sie anzugreifen, und Ihr Server ist für unerwünschte Besucher schwieriger zu erreichen. 

Um die SSH-Konfigurationsdatei zu ändern, geben Sie folgenden Befehl ein:

```sh
nano /etc/ssh/sshd_config
```

> [!primary]
>
> Der Befehl `nano` dient als Beispiel. Sie können auch den Befehl `vim` verwenden oder einen anderen Befehl, um die sshd\_config Datei zu bearbeiten. 
>

Folgende Zeile müsste daraufhin eingeblendet werden: 

```sh
# What ports, IPs and protocols we listen for Port 22
```

Ersetzen Sie die Port-Nummer 22 mit einer anderen Port-Nummer, frei nach Ihrer Wahl.  **Achten Sie lediglich darauf, keine Port-Nummer zu verwenden, die bereits von Ihrem System genutzt wird**. Speichern Sie die Änderungen und schließen Sie die Konfigurationsdatei. 

Starten Sie anschließend den Dienst neu:

```sh
/etc/init.d/ssh restart
```

Geben Sie dann beim Aufbau einer SSH-Verbindung mit Ihrem VPS den neuen Port an:

```sh
ssh root@votrevps.ovh.net -p NeuerPort
```

### Passwort des Root-Benutzers ändern

Bei der Installation oder Neuinstallation einer Distribution wird automatisch ein Passwort für den Root-Zugang zugeteilt.  Wir empfehlen Ihnen dringend, dieses Passwort zu ändern und mit einem personalisierten Passwort zu ersetzen.  Dazu müssen Sie sich einloggen und folgenden Befehl eingeben: 

```sh
passwd root
```

Das System wird Sie daraufhin auffordern, Ihr neues Passwort einzugeben und erneut zu bestätigen.  Achtung, aus Sicherheitsgründen wird das neue Passwort bei der Eingabe **nicht angezeigt**. Sie können also die eingegebenen Zeichen nicht sehen. 

Nachdem Sie das neue Passwort festgelegt haben, müssen Sie es bei Ihrer nächsten Systemverbindung zum Einloggen verwenden. 

### Ein Benutzerkonto mit eingeschränkten Rechten anlegen und in das System mit Root-Rechten eingreifen. 

Das Anlegen eines neuen Benutzers erfolgt mit folgendem Befehl:

```sh
adduser NeuerBenutzername
```

Geben Sie dann die vom System angeforderten Informationen (Passwort, Name etc.) ein.

Dieser Benutzer kann sich in Ihrem System via SSH mit dem Kennwort einloggen, welches Sie bei der Erstellung angegeben haben.

Wenn Sie sich nun mit diesen Daten einloggen und in Ihrem System Operationen ausführen möchten, für die Root-Rechte nötig sind, geben Sie einfach den folgenden Befehl ein:

```sh
su root
```

Geben Sie anschließend das Passwort des Root-Benutzers ein, um die Operation zu bestätigen.

### Den Root-Zugang zum Server deaktivieren

Der Root-Benutzer wird standardmäßig auf UNIX-Systemen angelegt und hat die meisten Berechtigungen auf Ihrem System. Es ist nicht ratsam, ja sogar gefährlich, Ihren VPS nur über diesen Benutzer zugänglich zu machen, da dieser irreversible Operationen auf Ihrem Server durchführen kann. 

Es wird empfohlen, den direkten Zugriff über das SSH-Protokoll zu deaktivieren.

Ändern Sie hierzu die SSH-Konfigurationsdatei wie zuvor zur Änderung des SSH-Ports:

```sh
nano /etc/ssh/sshd_config
```

Suchen Sie dann den folgenden Abschnitt:

```sh
# Authentication: 
LoginGraceTime 120
PermitRootLogin yes 
StrictModes yes
```

Ersetzen Sie das **yes** mit **no** in der Zeile `PermitRootLogin`.

Damit diese Änderung wirksam wird, starten Sie den SSH-Dienst neu:

```sh
/etc/init.d/ssh restart
```

Um die Verbindung zu Ihrem System herzustellen, nutzen Sie die Identifikationsdaten, die Sie soeben angelegt haben. 


### Installation und Konfiguration des Fail2ban-Pakets

Fail2ban ist ein Sicherheits-Framework gegen unerlaubtes Eindringen, dessen Ziel es ist, unbekannte IP-Adressen zu blockieren, die versuchen, in Ihr System einzudringen.  Wir empfehlen Ihnen dringendst die Installation dieses Pakets, um sich gegen jede Art von Brute-Force-Angriff zu schützen. 

Die Installation dieses Pakets erfolgt mit dem folgenden Befehl:

```sh
apt-get install fail2ban
```

Sobald das Paket installiert ist, ändern Sie die Konfigurationsdatei, um diese an Ihre eigene Konfiguration anzupassen. Wir empfehlen Ihnen, bevor Sie irgendwelche Änderungen vornehmen, immer ein Backup dieser Datei durchzuführen, indem Sie den folgenden Befehl eingeben: 

```sh
cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.conf.backup
```

Dann ändern Sie die Datei:

```sh
nano /etc/fail2ban/jail.conf
```

Sobald Sie fertig sind, starten Sie den Dienst mit folgendem Befehl neu:

```sh
/etc/init.d/fail2ban restart
```

Für weitere Informationen bezüglich Fail2Ban konsultieren Sie bitte die [offizielle Dokumentation](https://www.fail2ban.org/wiki/index.php/Main_Page){.external} dieses Tools.

### Konfiguration der internen Firewall: Iptables

Die reine Basisdistribution wird mit einem Firewall-Dienst namens Iptables geliefert. Dieser hat standardmäßig keine aktive Regel. Sie können dies überprüfen, indem Sie den folgenden Befehl eingeben:

```sh
iptables -L
```

Es wird empfohlen, dass Sie die Regeln dieser Firewall erstellen und an Ihre Bedürfnisse anpassen. Für sämtliche Informationen über die verschiedenen möglichen Konfigurationen konsultieren Sie bitte das entsprechende Kapitel der offiziellen Dokumentation Ihrer Distribution.

### Konfiguration des OVHcloud Firewall Network

Mit Firewall Network bietet OVHcloud eine eigene Firewall direkt am Eingang Ihrer Infrastruktur an. Installation und Konfiguration von Firewall Network ermöglichen das Blockieren von Protokollen, bevor diese überhaupt auf Ihrem Server ankommen.

Unter [Firewall Network](https://docs.ovh.com/gb/en/dedicated/firewall-network/){.external} finden Sie die Anleitung für diese Firewall.

### Sicherung Ihres Systems und Ihrer Daten

Das Konzept der Sicherheit beschränkt sich nicht auf den Schutz eines Systems vor Angriffen. 

Die Datensicherung (Backup) ist ein wesentliches Element Ihrer Sicherheit, weshalb OVHcloud Ihnen drei Backup-Optionen anbietet:

- Die Option `Snapshot`, erlaubt Ihnen das manuelle Erstellen eines Schnappschusses (Snapshot) der virtuellen Maschine (erhältlich für VPS SSD, VPS Cloud und VPS Cloud RAM).
- Die Option `Automatisches Backup` ist ein täglich geplantes Backup Ihres VPS (zusätzliche Festplatten ausgenommen), das exportiert und dreifach repliziert wird, bevor es von Ihrem Kundencenter aus verfügbar ist (nur erhältlich für VPS Cloud und VPS Cloud RAM).
- Die Option `Backup Storage` ermöglicht Ihnen, auf einem dedizierten Speicherplatz manuell Dateien abzulegen und wiederherzustellen. Als Protokolle stehen FTP, NFS und CIFS zur Verfügung, um mit den Zugangsmethoden der Nutzer auf allen Betriebssystemen kompatibel zu sein.  Dies schützt Ihre Daten im Falle einer Service-Unterbrechung (nur erhältlich für VPS Cloud und VPS Cloud RAM).

Weitere Informationen zu unseren Storage-Angeboten für VPS: <https://www.ovhcloud.com/de/vps/>.

## Weiterführende Informationen

[Anleitung zu Firewall Network](https://docs.ovh.com/gb/en/dedicated/firewall-network/)

Für den Austausch mit unserer User Community besuchen Sie  <https://community.ovh.com/en/>.