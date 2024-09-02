---
title: "Wiederherstellen des Serverzugriffs bei Passwortverlust"
excerpt: "Erfahren Sie hier, wie Sie mit dem OVHcloud Rescue-Modus ein neues Passwort für einen Benutzer-Account auf einem GNU/Linux-Betriebssystem einrichten"
updated: 2024-02-19
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Ohne eine alternative Authentifizierungsmethode oder einen anderen Benutzer-Account bedeutet der Verlust Ihres Passworts, dass Sie sich nicht mehr auf regulärem Weg bei Ihrem Server einloggen können.

In diesem Fall können Sie sich über den OVHcloud Rescue-Modus mit Ihrem Server verbinden, der es Ihnen erlaubt, sich mit einem temporären Passwort anzumelden und Ihre Dateien zu bearbeiten.

**Diese Anleitung erklärt, wie Sie das Passwort Ihres Benutzer-Accounts zurücksetzen, wenn Sie keinen Zugriff mehr auf Ihren Server haben.**

> [!primary]
>
> Um den Zugang zu einem Server wiederherzustellen, auf dem Sie sich mit einem SSH-Schlüssel einloggen, folgen Sie stattdessen unserer Anleitung "[Austauschen eines SSH-Schlüsselpaars](/pages/bare_metal_cloud/dedicated_servers/replacing-lost-ssh-key)".
>

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) oder einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!primary]
>
> Diese Anleitung gilt nicht für Installationen von **Windows** Server. Folgen Sie stattdessen unserer Anleitung zum [Ändern des Administratorpassworts auf einem Windows Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rcw-changing-admin-password-on-windows) oder [Ändern des Administratorpassworts auf einem Windows VPS](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password).
>

## In der praktischen Anwendung

Lesen Sie ggf. auch unsere Anleitung zu den ersten Schritten für Ihren Dienst:

- Für einen [Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)
- Für einen [Dedicated Server der Reihe **Eco**](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server-eco)
- Für einen [VPS](/pages/bare_metal_cloud/virtual_private_servers/starting_with_a_vps)


> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
>

<a name="step1"></a>

### Schritt 1: Server im Rescue-Modus neu starten

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

### Schritt 2: Benutzer-Passwort zurücksetzen

Hinweis: Bei einer GNU/Linux-Distribution **zeigt eine Passworteingabeaufforderung keine Tastatureingaben an**.

Ändern Sie das Passwort des Benutzers mit folgendem Befehl (ersetzen Sie `username` durch den Namen des Benutzer-Accounts):

```bash
passwd username
```

```text
New password: 
Retype new password:
passwd: password updated successfully
```

Denken Sie daran, den regulären Startmodus zu verwenden, wenn Sie Ihren Server im [OVHcloud Kundencenter](/links/manager) neu starten.

Folgen Sie bei Bedarf der passenden [Anleitung zum Rescue-Modus](#step1).

Sie haben nun mit Ihrem neuen Passwort Zugriff auf den Server.

## Weiterführende Informationen

[SSH-Schlüssel erstellen und verwenden](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated)

[Rescue-Modus für Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[Rescue-Modus für VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)

[Konfigurieren von Benutzer-Accounts und Root-Zugriff auf einem Server](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.