---
title: "Wiederherstellen des Serverzugriffs bei Passwortverlust"
excerpt: "Erfahren Sie hier, wie Sie mit dem OVHcloud Rescue-Modus ein neues Passwort für einen Benutzer-Account auf einem GNU/Linux-Betriebssystem einrichten"
updated: 2025-10-02
---

## Ziel

Ohne eine alternative Authentifizierungsmethode oder einen anderen Benutzer-Account bedeutet der Verlust Ihres Passworts, dass Sie sich nicht mehr auf regulärem Weg bei Ihrem Server einloggen können.

In diesem Fall können Sie sich über den OVHcloud Rescue-Modus mit Ihrem Server verbinden, der es Ihnen erlaubt, sich mit einem temporären Passwort anzumelden und Ihre Dateien zu bearbeiten.

**Diese Anleitung erklärt, wie Sie das Passwort Ihres Benutzer-Accounts zurücksetzen, wenn Sie keinen Zugriff mehr auf Ihren Server haben.**

> [!primary]
>
> Um den Zugang zu einem Server wiederherzustellen, auf dem Sie sich mit einem SSH-Schlüssel einloggen, folgen Sie stattdessen unserer Anleitung "[Austauschen eines SSH-Schlüsselpaars](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)".
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) oder einen [VPS](/links/bare-metal/vps) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!primary]
>
> Diese Anleitung gilt nicht für Installationen von **Windows** Server. Folgen Sie stattdessen unserer Anleitung zum [Ändern des Administrator-Passworts auf einem Windows Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows) oder [Ändern des Administrator-Passworts auf einem Windows VPS](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password).
>

## In der praktischen Anwendung

Lesen Sie ggf. auch unsere Anleitung zu den ersten Schritten für Ihren Dienst:

- Für einen [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Für einen [Dedicated Server der Reihe **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Für einen [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
>

<a name="step1"></a>

### Schritt 1 - Server im Rescue-Modus neu starten

Folgen Sie den Schritten unserer Anleitungen zum Rescue-Modus, um sich mit Ihrem Server zu verbinden und Ihre Partitionen zu mounten:

- [Rescue-Modus auf einem dedizierten Server verwenden](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)
- [Rescue-Modus auf einem VPS verwenden](/pages/bare_metal_cloud/virtual_private_servers/rescue)

Die Systempartition muss gemountet sein, und Sie müssen über Schreibzugriff auf das Dateisystem verfügen, um den Vorgang fortsetzen zu können.

Dies bedeutet, dass Sie bereits eine Variante des folgenden Befehls in die Shell des Rescue-Modus eingegeben haben:

```bash
chroot path/to/partition/mountpoint/
```

Der exakte Befehl hängt vom verwendeten Mountpunkt ab. Wenn Sie Ihre Partition beispielsweise auf `/mnt` gemountet haben, lautet der Befehl wie folgt:

```bash
chroot /mnt/
```

### Schritt 2 - Identifizieren der Benutzer-Accounts und Zurücksetzen des Passworts

Nachdem Sie die Partition gemountet und `chroot /mnt` (oder den entsprechenden Befehl) ausgeführt haben, verfügen Sie über **root**-Berechtigungen auf dem System.

Ermitteln Sie ggf. alle relevanten Benutzer-Accounts mithilfe des folgenden Befehls:

```bash
cat /etc/passwd
```

Beispielausgabe (gekürzt):

```console
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
sys:x:3:3:sys:/dev:/usr/sbin/nologin
.
nobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin
systemd-network:x:998:998:systemd Network Management:/:/usr/sbin/nologin
syslog:x:102:102::/nonexistent:/usr/sbin/nologin
sshd:x:105:65534::/run/sshd:/usr/sbin/nologin
.
user1:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
```

Finden Sie Ihre(n) zu bearbeitenden Benutzernamen in der Liste der Accounts.

Geben Sie folgenden Befehl ein, um das Kennwort für einen bestimmten Account zu ändern (z. B. **user1**):

```bash
passwd user1
```

Geben Sie das neue Kennwort zweimal ein und bestätigen Sie:

```console
# New password:
# Retype new password:
# passwd: password updated successfully
```

Bei einer GNU/Linux-Distribution zeigt **die Eingabeaufforderung für Passwörter Ihre Tastatureingabe nicht an**.

> [!primary]
>
> Vermeiden Sie es, den Befehl `passwd` ohne Argumente auszuführen: Dieser Befehl ändert das Passwort des aktuellen Kontos (**root** nach der Ausführung von `chroot` ist).  
> Verwenden Sie deshalb `passwd <Benutzer>`.

Denken Sie daran, den regulären Startmodus zu aktivieren, bevor Sie Ihren Server im [OVHcloud Kundencenter](/links/manager) neu starten.

Folgen Sie bei Bedarf der passenden [Anleitung zum Rescue-Modus](#step1).

Der bearbeitete Benutzer-Account hat nun Zugriff auf den Server mit dem neuen Passwort.

## Weiterführende Informationen

[SSH-Schlüssel erstellen und verwenden](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Rescue-Modus für Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Rescue-Modus für VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[Konfigurieren von Benutzer-Accounts und Root-Zugriff auf einem Server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
