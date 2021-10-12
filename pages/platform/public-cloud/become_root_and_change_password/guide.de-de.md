---
title: 'Root-Rechte erlangen und Passwort festlegen'
excerpt: 'Root-Rechte erlangen und Passwort festlegen'
slug: root-rechte_erlangen_und_passwort_festlegen
legacy_guide_number: g1786
section: 'Erste Schritte'
order: 5
---

**Letzte Aktualisierung am 12.10.2021**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

## Ziel

Um bestimmte Verwaltungsfunktionen auf Ihrem Server auszuführen (zum Beispiel die Installation von Paketen), benötigen Sie einen hohen Benutzerzugriff. Auf Linux-Servern wird dieser Zugang "root" genannt.

**Diese Anleitung zeigt Ihnen, wie Sie root-Benutzer werden und ein Passwort für das root-Konto erstellen.**

## Voraussetzungen

* eine [Public Cloud](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen)Instanz in Ihrem OVHcloud Account
* Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}.

## In der praktischen Anwendung

> [!primary]
>
> In dieser Hilfe gehen wir von dem Standardbenutzer "admin" aus.
>

### Festlegen des Root-Passworts <a name="settingtherootpassword"></a>

Stellen Sie zunächst eine [SSH](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-4-mit-ihrer-instanz-verbinden)-Verbindung zu Ihrem Server her.

Geben Sie auf der Kommandozeile ein Passwort für den root-Benutzer ein (aus Sicherheitsgründen wird das Passwort beim Eingeben nicht angezeigt):

```bash
~$ sudo passwd root
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated 
successfully
```

### Repositorys aktualisieren (Debian/Ubuntu)

Um die auf Ihrem Server installierten Softwarepakete zu aktualisieren, geben Sie folgenden Befehl in der Kommandozeile ein:

```bash
~$ sudo apt-get update
```

### System aktualisieren (CentOS/Fedora)

Um das Betriebssystem Ihres Servers zu aktualisieren, geben Sie folgenden Befehl in der Kommandozeile ein:

```bash
~$ sudo yum update
```

### Bearbeiten einer Konfigurationsdatei

```bash
~$ sudo vi /etc/hosts.allow
```

### Wurzel "root"

Geben Sie folgenden Befehl ein, um Root-Benutzer zu werden:

```bash
~$ sudo su -
~#
```

Geben Sie anschließend das Wurzelpasswort ein.


### Wurzelverbindung und Authentifizierung per Passwort aktivieren

#### Für Verbindungen über die im OVHcloud Kundencenter integrierte VNC-Konsole

Erstens, [das Root-Passwort festzulegen](#settingtherootpassword)

Gehen Sie dann auf die VNC-Konsole:

Klicken Sie auf den `...`{.action} rechts von Ihrer Instanz und dann auf `Instanz-Details`{.action}. 

![access instance](images/instancedetails.png){.thumbnail} 

Wechseln Sie zum Tab `VNC-Konsole`{.action}. Geben Sie an der Eingabeaufforderung Ihr Login als **root** ein und geben Sie dann Ihr Passwort ein.

![vnc](images/vnc.png){.thumbnail} 

#### Für Verbindungen mit Linux-Endgeräten

Erstens, [das Root-Passwort festzulegen](#settingtherootpassword)

Aktivieren Sie als Nächstes die root-Anmeldung und die Kennwortauthentifizierung in Ihrer **sshd_config**-Datei:

```bash
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

SSH-Dienst neu starten:

```bash
~$ service sshd restart
```

Sobald die Operation abgeschlossen ist, sollten Sie mit dem Root-Benutzer und dem Passwort auf Ihren Server zugreifen können.

#### Für Putty-Verbindungen

Erstens, [das Root-Passwort festzulegen](#settingtherootpassword)

Aktivieren Sie als Nächstes die root-Anmeldung und die Kennwortauthentifizierung in Ihrer **sshd_config**-Datei:

```bash
~$ sudo sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/g' /etc/ssh/sshd_config

~$ sudo sed -i 's/PasswordAuthentication no/PasswordAuthentication yes/g' /etc/ssh/sshd_config
```

SSH-Dienst neu starten:

```bash
~$ service sshd restart
```

Löschen Sie im Putty Authentifizierungsagent (pageant key list) Ihren privaten SSH-Schlüssel.

![remove private key](images/pageantkeylist.png){.thumbnail}

Sobald die Operation abgeschlossen ist, sollten Sie mit dem Root-Benutzer und dem Passwort auf Ihren Server zugreifen können.

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
