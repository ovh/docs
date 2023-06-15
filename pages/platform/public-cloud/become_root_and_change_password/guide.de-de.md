---
title: 'Root-Rechte erlangen und Passwort festlegen'
slug: root-rechte_erlangen_und_passwort_festlegen
excerpt: 'Erfahren Sie hier, wie Sie Root-Rechte erlangen und ein Passwort vergeben'
section: 'Erste Schritte'
order: 08
updated: 2022-03-24
---

**Letzte Aktualisierung am 24.03.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Um bestimmte Verwaltungsfunktionen auf Ihrer Instanz auszuführen (zum Beispiel die Installation von Paketen), benötigen Sie eine höhere Berechtigungsstufe. Auf Linux-Servern wird dieser Zugang als "Root" bezeichnet.

**Diese Anleitung erklärt, wie Sie zum Root-Benutzer wechseln und ein Passwort für den Root-Account erstellen.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen) erstellt.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Festlegen des Root-Passworts <a name="settingtherootpassword"></a>

Stellen Sie zunächst eine [SSH-Verbindung](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-4-mit-ihrer-instanz-verbinden) zu Ihrer Instanz her.

Geben Sie auf der Kommandozeile ein Passwort für den root-Benutzer ein (aus Sicherheitsgründen wird das Passwort beim Eingeben nicht angezeigt):

```bash
~$ sudo passwd root
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

### ystem aktualisieren (Debian/Ubuntu)

Um die auf Ihrem Server installierten Softwarepakete zu aktualisieren, geben Sie folgenden Befehl in der Kommandozeile ein:

```bash
~$ sudo apt update && sudo apt upgrade -y
```

### System aktualisieren (CentOS/Fedora)

Um das Betriebssystem Ihres Servers zu aktualisieren, geben Sie folgenden Befehl in der Kommandozeile ein:

```bash
~$ sudo yum update
```

### Zum Root-Benutzer wechseln

Geben Sie folgenden Befehl ein, um Root zu werden:

```bash
~$ sudo su -
~#
```

Geben Sie anschließend das Passwort für den Root-Account ein.


### Root-Login und Authentifizierung mit Passwort aktivieren

#### Für Verbindungen über die im OVHcloud Kundencenter integrierte VNC-Konsole

Nachdem [das Root-Passwort erstellt wurde](#settingtherootpassword), gehen Sie zur VNC-Konsole:

Klicken Sie auf den `...`{.action} rechts von Ihrer Instanz und dann auf `Instanz-Details`{.action}. 

![access instance](images/instancedetails.png){.thumbnail} 

Wechseln Sie zum Tab `VNC-Konsole`{.action}. Geben Sie an der Eingabeaufforderung als Login **root** ein und anschließend Ihr Passwort.

![vnc](images/vnc.png){.thumbnail} 

#### Für Verbindungen mit Linux-Endgeräten

Nachdem [das Root-Passwort erstellt wurde](#settingtherootpassword), aktivieren Sie den Root-Login und die Kennwortauthentifizierung in der Datei **sshd_config**:

```bash
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

Starten Sie den SSH-Dienst neu:

```bash
~$ service sshd restart
```

Sobald die Operation abgeschlossen ist, sollten Sie mit Root-Benutzer und Passwort auf Ihren Server zugreifen können.

#### Für Putty-Verbindungen

Nachdem [das Root-Passwort erstellt wurde](#settingtherootpassword), aktivieren Sie den Root-Login und die Kennwortauthentifizierung in der Datei **sshd_config**:

```bash
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

Starten Sie den SSH-Dienst neu:

```bash
~$ service sshd restart
```

Löschen Sie im Putty Authentifizierungsagent (*pageant key list*) Ihren privaten SSH-Schlüssel.

![remove private key](images/pageantkeylist.png){.thumbnail}

Sobald die Operation abgeschlossen ist, sollten Sie mit Root-Benutzer und Passwort auf Ihren Server zugreifen können.

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
