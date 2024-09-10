---
title: Zusätzliche SSH-Schlüssel für eine Instanz konfigurieren
excerpt: Erfahren Sie hier, wie Sie zusätzliche SSH-Schlüssel für Benutzer-Accounts konfigurieren und zu Ihrer Public Cloud Instanz hinzufügen
updated: 2024-09-09
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel
 
Bei der Erstellung einer Instanz in Ihrem Kundencenter können Sie nur einen SSH-Schlüssel für den vorkonfigurierten Benutzer-Account hinzufügen. Um sich mit anderen Benutzer-Accounts auf Ihrer Instanz einzuloggen, können Sie weitere Schlüssel erstellen und diese in wenigen Schritten zur Instanz hinzufügen.

**Diese Anleitung erklärt, wie Sie zusätzliche SSH-Schlüssel für Verbindungen zu Ihrer Instanz konfigurieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung genereller Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten, wenn Sie bei der Administration Ihres Systems Hilfe benötigen. 
>

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](/links/public-cloud/public-cloud) in Ihrem OVHcloud Kunden-Account.
- Sie haben [administrativen Zugriff auf Ihre Instanz über SSH](/pages/public_cloud/compute/creating-ssh-keys-pci#login-linux).  

## In der praktischen Anwendung

> [!primary]
>
> Derzeit unterstützen wir die folgenden SSH-Schlüsselformate: **RSA**, **ECDSA** und **ED25519**.
>
> Beachten Sie, dass die folgenden Anweisungen eine allgemeine Verwendung beschreiben, basierend auf einem Ubuntu-Serverbetriebssystem. Für einige Befehle können je nach Distribution oder Betriebssystem Anpassungen erforderlich sein.
>

### Schritt 1: Neues SSH-Schlüsselpaar erstellen

Verwenden Sie bei Bedarf unsere [Anleitung zu SSH-Schlüsseln](/pages/public_cloud/compute/creating-ssh-keys-pci), um ein neues SSH-Schlüsselpaar zu erstellen.  
Sie finden dort auch Informationen zur [Verwaltung mehrerer Schlüssel](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) auf Ihrem lokalen Gerät, falls Ihre Umgebung dies erfordert.

### Schritt 2: Neuen Benutzer-Account einrichten

[Verbinden Sie sich mit Ihrer Instanz](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) und verwenden Sie die folgenden Befehle, um einen neuen Benutzer-Account und den Ordner `.ssh` zu erstellen:

```bash
sudo adduser user2
```

```console
info: Adding user `user2' ...
info: Selecting UID/GID from range 1000 to 59999 ...
info: Adding new group `user2' (1003) ...
info: Adding new user `user2' (1003) with group `user2 (1003)' ...
info: Creating home directory `/home/user2' ...
info: Copying files from `/etc/skel' ...
New password: 
Retype new password:
passwd: password updated successfully
Changing the user information for user2
Enter the new value, or press ENTER for the default
        Full Name []:
        Room Number []:
        Work Phone []: 
        Home Phone []: 
        Other []: 
Is the information correct? [Y/n] y
info: Adding new user `user2' to supplemental / extra groups `users' ...
info: Adding user `user2' to group `users' ...
```

```bash
sudo mkdir /home/user2/.ssh/
```

Ohne weitere Schritte verfügt der Benutzer-Account `user2` in diesem Beispiel über keine erweiterten Berechtigungen. Wenn Sie diesem Account erhöhte Berechtigungen (`root privileges`) für Ihre Instanz gewähren müssen, fügen Sie ihn zur `sudo group` hinzu:

```bash
sudo usermod -aG sudo user2
```

Weitere Informationen zu Benutzerberechtigungen und verwandten Themen finden Sie in unserer [Benutzer-Account-Anleitung](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds).

### Schritt 3: Den öffentlichen SSH-Schlüssel zu Ihrer Instanz hinzufügen

#### Transfer von öffentlichen Schlüsseln (nur wenn erstellt auf Systemen basierend auf GNU/Linux, MacOS oder BSD)

Wenn Sie Ihre SSH-Schlüsselpaare auf einem System basierend auf GNU/Linux MacOS oder BSD erzeugt haben, können Sie den Befehl `ssh-copy-id` verwenden, um die öffentlichen Schlüssel zu Ihrem Server hinzuzufügen.

Das Tool `ssh-copy-id` kopiert die öffentlichen Schlüssel in die Datei `~/.ssh/authorized_keys` auf dem angegebenen Remoteserver und erstellt die Datei bei Bedarf auch automatisch in diesem Verzeichnis

```bash
ssh-copy-id username@IP_ADDRESS
```

Ohne weitere Angaben versucht `ssh-copy-id`, alle öffentlichen Schlüssel in das Verzeichnis `~/.ssh` des lokalen Benutzers zu übertragen. Um nur einen öffentlichen Schlüssel hinzuzufügen, können Sie diese Schlüsseldatei mit der Option `-i` und dem Dateipfad angeben:

```bash
ssh-copy-id -i ~/.ssh/KeyFileName username@IP_ADDRESS
```

Beispiel:

```bash
ssh-copy-id -i ~/.ssh/myInstance_rsa.pub user2@203.0.113.102
```

Sie werden nach dem Passwort des Benutzers gefragt. Sie erhalten eine Bestätigung wie die folgende:

```console
Number of key(s) added: 1

Now try logging into the machine, with:   "ssh 'user@server-ip'"
and check to make sure that only the key(s) you wanted were added.
```
  
Wenn stattdessen eine Fehlermeldung angezeigt wird, können Sie die öffentlichen Schlüssel manuell hinzufügen, indem Sie die nachfolgenden Schritte ausführen.

> [!primary]
>
> Aus Sicherheitsgründen sollte ein Schlüsselpaar nicht von mehreren Benutzern verwendet werden. Da jeder Benutzer auf GNU/Linux-Systemen über eine eigene `authorized_keys` Datei in `~/.ssh/` verfügt, können Sie den Befehl `ssh-copy-id` wie oben beschrieben verwenden und dabei `KeyFileName` und `user` jeweils anpassen, nachdem [das Schlüsselpaar erzeugt wurde](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key).
>

#### Manuelles Hinzufügen öffentlicher Schlüssel zur Instanz

[Verbinden Sie sich mit Ihrer Instanz](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) und öffnen Sie die Datei `authorized_keys` im persönlichen Ordner des neuen Benutzers mit Ihrem bevorzugten Texteditor (`nano` wird in diesem Beispiel verwendet):

```bash
sudo nano /home/user2/.ssh/authorized_keys
```

Fügen Sie die **Zeichenfolge des öffentlichen Schlüssels** in diese Datei ein. Speichern Sie die Datei und schließen Sie den Editor.  
Starten Sie Ihre Instanz neu (`sudo reboot`) oder starten Sie nur den OpenSSH-Dienst neu, mit einem der folgenden Befehle (der passende Befehl kann je nach Betriebssystem variieren):

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Der neue Benutzer kann sich nun von dem Gerät aus, das den entsprechenden privaten SSH-Schlüssel speichert, bei der Instanz anmelden:

```bash
ssh username@IP_ADDRESS
```

Beispiel:

```bash
ssh user2@203.0.113.102
```

Weitere Informationen zur Verwendung von SSH-Schlüsseln mit Public Cloud-Instanzen finden Sie in der [Anleitung zu SSH-Schlüsseln](/pages/public_cloud/compute/creating-ssh-keys-pci).

## Weiterführende Informationen

[Public Cloud Instanzen erstellen](/pages/public_cloud/compute/public-cloud-first-steps)

[So ersetzen Sie ein SSH-Schlüsselpaar auf einer Public Cloud-Instanz durch den Rescue-Modus](/pages/public_cloud/compute/replacing_lost_ssh_key)

Treten Sie unserer [User Community](/links/community) bei.