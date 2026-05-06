---
title: "VPS - Windows-Startprotokolle aktivieren"
excerpt: "Erfahren Sie, wie Sie Windows-Startprotokolle aktivieren, um bei der Diagnose und Fehlerbehebung von Startproblemen Ihres VPS zu helfen"
updated: 2026-01-21
---

## Ziel

Windows-Startprotokolle ermöglichen es Ihnen, die während des Systemstarts geladenen Treiber und Dienste zu identifizieren.  
Sie sind besonders nützlich für die **Diagnose von Startproblemen**, **blaue Bildschirme** oder **Systemabstürze**.

**Dieses Handbuch erklärt, wie Sie Windows-Startprotokolle auf einem Server aktivieren, um die Analyse und Fehlerbehebung Ihres VPS zu unterstützen.**

## Voraussetzungen

- Ein aktives [VPS](/links/bare-metal/vps)-Angebot in Ihrem OVHcloud Kundencenter.

## In der praktischen Anwendung

### Aktivieren von Windows-Startprotokollen

Windows-Startprotokolle können bei der Diagnose von Serverfehlern hilfreich sein.

Um sie zu aktivieren, gehen Sie wie folgt vor, indem Sie durch die Registerkarten navigieren:

> [!tabs]
> 1. **Mit dem Server verbinden**
>>
>> Verbinden Sie sich mit Ihrem Server über eine Remote-Desktop-Verbindung oder eine [KVM-Sitzung](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps).
>>
> 2. **Das Run-Tool öffnen**
>>
>> Öffnen Sie das Windows `Start`-Menü und klicken Sie auf `Run`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_start_run.png){.thumbnail}
>>
> 3. **`msconfig` öffnen**
>>
>> Geben Sie `msconfig` ein und klicken Sie auf `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_msconfig.png){.thumbnail}
>>
> 4. **Protokolle aktivieren**
>>
>> Im neuen Fenster aktivieren Sie die Protokolloption neben `Boot log`. Klicken Sie anschließend auf `OK`{.action}.
>>
>> ![KVM](/pages/assets/screens/other/windows/windows_log.png){.thumbnail}
>>

Beim nächsten Serverstart werden die Protokolle in einer `.txt`-Datei gespeichert. Der Dateipfad lautet: `C:\Windows\ntbtlog.txt`.

Um die Protokolldatei im Rettungsmodus zu öffnen, folgen Sie den Anweisungen im Handbuch "[Rescue-Modus für einen VPS aktivieren und verwenden](/pages/bare_metal_cloud/virtual_private_servers/rescue)".

## Weiterführende Informationen

[Administrator-Passwort auf einem Windows-Server ändern](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[VPS FAQ](/pages/bare_metal_cloud/virtual_private_servers/vps-faq)

[SSH-Einführung](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction)

[Einen VPS sichern](/pages/bare_metal_cloud/virtual_private_servers/secure_your_vps)

[So rufen Sie den Server wieder auf, wenn Sie das Benutzerpasswort verloren haben](/pages/bare_metal_cloud/dedicated_servers/replacing-user-password)

Treten Sie unserer [User Community](/links/community) bei.