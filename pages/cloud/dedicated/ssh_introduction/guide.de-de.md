---
title: SSH Einführung
slug: ssh-einfuehrung
excerpt: Hier erfahren Sie, wie Sie den SSH-Dienst zum Zugriff auf Ihren Server verwenden
section: Erste Schritte
order: 1
---

**Stand 21.11.2017**

## Einleitung

Das Kommunikationsprotokoll SSH (Secure Shell) ist nativ auf allen OVH Servern installiert (VPS, Dedicated Server, Public Cloud Instanzen).

**Hier erfahren Sie, wie Sie den SSH-Dienst zum Zugriff auf Ihren Server verwenden.**

## Voraussetzungen

- SSH ist auf allen Maschinen installiert. Es ermöglicht den Aufbau einer sicheren Verbindung sowie vollständige Kontrolle über die Verbindung.


## Beschreibung

### Kompatible Programme

Es gibt sehr viele Programme, die eine SSH-Verbindung ermöglichen. Hier ein paar Beispiele.

#### Auf Windows

- [PuTTY](http://www.putty.org/){.external} (kostenlos)
- [MobaXterm](https://mobaxterm.mobatek.net/) (erhältlich als kostenlose und kostenpflichtige Version)
- [SecureCRT](http://www.vandyke.com/products/securecrt/){.external} (kostenpflichtig)

Seit den neuesten Versionen von Windows 10 und Windows Server ermöglicht der Developer-Modus den Zugriff auf eine Bash-Konsole. Nachfolgend ein Link zur entsprechenden Microsoft-Dokumentation: <https://docs.microsoft.com/de-de/windows/wsl/install-win10>.

#### Auf Mac OS

- Das Tool `Terminal`{.action} wird standardmäßig mit Mac OS X geliefert und systematisch auf allen Maschinen installiert.


#### Auf Linux

- Das Tool `Konsole`{.action} oder `Terminal`{.action} ist nativ installiert und kann zum Einloggen verwendet werden.
- Für die Verwaltung mehrerer Tabs kann das Software-Paket `Terminator` installiert werden. Weitere Informationen finden Sie in der Dokumentation von Ubuntu: <https://wiki.ubuntuusers.de/Terminator/>.
- [OpenSSH](http://www.openssh.com){.external} (kostenlos).


### Schritte für die Verbindung via SSH

#### Schritt 1: Erstmalige Verbindung

Um sich über SSH mit der Maschine zu verbinden, benötigen Sie zwei Informationen:

- Die IPv4-Adresse oder den Namen der Maschine
- Das Root-Passwort der Maschine (das Passwort haben Sie bei Installation per E-Mail erhalten)


Die Verbindung wird mit folgendem Befehl hergestellt:

```sh
ssh root@Server-IP
```

Alternativ:

```sh
ssh root@servername
```

Anschließend erhalten Sie folgende Mitteilung:

```sh
The authenticity of host servername (Server_IP) can‘t be established.
RSA key fingerprint is a9:bb:55:35:86:xx:xx:00:xx:00:2b:2c:79:10:96:3c.
Are you sure you want to continue connecting (yes/no)? YES
Warning: Permanently added servername, server_IP (RSA) to the list of known hosts.
Password:
root@vps12345:~#
```

Bei der erstmaligen Verbindung wird in Ihrem SSH-Client ein Fingerprint des RSA-Schlüssels hinterlegt, der wiederum ein Fingerprint des Servers ist, mit dem Sie sich verbinden. Dieser Fingerprint wird bei jeder neuen Verbindung überprüft. Wenn er sich ändert, werden Sie darüber informiert, was bedeutet, dass etwas auf dem Server verändert wurde. Zum Beispiel:

- Die Maschine wurde neu installiert
- Der SSH-Server wurde neu installiert
- Sie verbinden sich auf einer anderen Maschine

Stimmen Sie bei der erstmaligen Verbindung der Speicherung des Fingerprints zu, damit Ihr SSH-Client diesen auf Ihrem Arbeitsplatz speichern kann.


#### Schritt 2: Dokumentation

Bei Linux-Distributionen steht Ihnen eine Dokumentation zur Verfügung, in der alle verfügbaren Befehle und die dazugehörigen Argumente aufgelistet sind.

```sh
man bash
```

#### Schritt 3: Update

Es ist wichtig, dass Ihr SSH-Client und Ihre Distribution immer auf dem aktuellsten Stand sind. Mit folgendem Befehl können Sie dies überprüfen:

```sh
ssh -V
```

Im Zweifelsfall lesen Sie bitte die Dokumentation des von Ihnen verwendeten SSH-Clients.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
