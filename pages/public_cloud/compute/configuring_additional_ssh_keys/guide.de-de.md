---
title: 'Zusätzliche SSH-Schlüssel konfigurieren'
excerpt: Erfahren Sie hier, wie Sie zusätzliche SSH-Schlüssel für Ihre Public Cloud Instanz konfigurieren
updated: 2024-01-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel
 
Bei der Erstellung einer Instanz kann nur ein SSH-Schlüssel für den Erstzugriff konfiguriert werden. Sie können jedoch anderen Benutzern Zugriff erlauben, indem Sie die Datei "authorized_keys" Ihrer Instanz konfigurieren.

**Diese Anleitung erklärt, wie Sie zusätzliche SSH-Schlüssel für die Verbindungen zu Ihrer Instanz konfigurieren.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) in Ihrem OVHcloud Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben administrativen Zugriff (sudo) auf Ihre Instanz über SSH.  

## In der praktischen Anwendung

> [!primary]
>
Wir unterstützen derzeit die folgenden SSH-Schlüsselformate: **RSA**, **ECDSA** und **ED25519**.
>

### SSH-Schlüssel erstellen

Folgen Sie zunächst unserer Anleitung zu den [ersten Schritten](/pages/public_cloud/compute/public-cloud-first-steps#schritt-1-ssh-schlussel-erstellen), um einen SSH-Schlüssel zu erstellen.

### Einen neuen Benutzer konfigurieren

[Verbinden Sie sich über SSH](/pages/public_cloud/compute/public-cloud-first-steps#connect-to-instance) mit Ihrer Instanz und erstellen Sie mithilfe des folgenden Befehls einen neuen Benutzer:

```bash
~$ sudo adduser user2

Adding user `user2' ...
Adding new group `user2' (1001) ...
Adding new user `user2' (1001) with group `user2' ...
Creating home directory `/home/user2' ...
Copying files from `/etc/skel' ...

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
Full Name []:
Room Number []:
Work Phone []:
Home Phone []:
Other []:
Is the information correct? [Y/n] Y
```

Öffnen Sie die Datei "authorized_keys" im persönlichen Ordner des neuen Benutzers mit einem Texteditor:

```bash
~$ sudo nano /home/user2/.ssh/authorized_keys
```

Fügen Sie den im ersten Schritt erstellten öffentlichen Schlüssel zur Datei hinzu. Speichern und schließen Sie den Editor.

Wenn der Ordner .ssh noch nicht existiert, können Sie ihn mit folgendem Befehl erstellen:

```bash
~$ sudo mkdir /home/user2/.ssh/
```

Sie können mehrere SSH-Schlüssel konfigurieren, indem Sie diese zur Datei "authorized_keys" in den entsprechenden Benutzerordnern hinzufügen.

Ab sofort können Sie sich mit dem Benutzer und dem zuvor konfigurierten privaten Schlüssel einloggen:

```bash
~$ ssh user2@instance_IP
```
```console
Linux b2-7-de1 5.10.0-10-cloud-amd64 #1 SMP Debian 5.10.84-1 (2021-12-08) x86_64

user2@server:~$
```

## Weiterführende Informationen

[Public Cloud: Erste Schritte](/pages/public_cloud/compute/public-cloud-first-steps)

[Ersatz eines verlorenen SSH-Schlüsselpaares](/pages/public_cloud/compute/replacing_lost_ssh_key)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.