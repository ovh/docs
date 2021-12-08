---
title: Installieren Sie Ihr NAS auf Windows Server über CIFS
slug: nas/nas-cifs
excerpt: Diese Anleitung zeigt Ihnen, wie Sie Ihr NAS unter Windows Server über CIFS mounten können.
section: NAS
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 08.12.2021**

## Ziel

Konfigurieren und mounten Sie einen OVHclou HA-NAS-Speicherraum auf Ihrem Windows Server mit CIFS.

## Voraussetzungen

- einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) **oder** einen [VPS](https://www.ovhcloud.com/de/vps/) **oder** eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/) mit einer Windows-Distribution
- eine [HA-NAS](https://www.ovh.de/nas/) Lösung

### Einstellungen

- **Windows Server 2008**: Klicken Sie auf das Menü `Start`{.action} > `All the programs`{.action} > `Accessories`{.action} > `Command prompt`{.action}.
- **Windows Server 2012**: Klicken Sie auf das Symbol `Windows PowerShell`{.action} am unteren Bildschirmrand in der Taskleiste.
- **Windows Server 2016**: Klicken Sie auf das Menü `Start`{.action} und dann auf das Symbol `Windows PowerShell`{.action}.
- **Windows Server 2019**: Klicken Sie auf das Menü `Start`{.action} und dann auf das Symbol `Windows PowerShell`{.action}.

Führen Sie dann den folgenden Befehl aus:

```bash
net use z: \\CIFS_SERVER_IP\CIFS_PATH
```

### Beispiele

- CIFS-Montage für eine Mini-Nas:

```bash
net use z: \\10.16.100.10\nas-000041_mininas-000212
```

- CIFS-Montage für NAS oder NAS-HA:

```bash
net use z: \\10.16.101.8\zpool-000206\partition1
```

> [!alert]
>
> Der SMB/CIFS Benutzer ist `nobody`. Das Ändern von Berechtigungen mit diesem Benutzer kann Konflikte mit bestehenden NFS-Berechtigungen verursachen.
> 

## Weiterführende Informationen

[Häufig gestellte Fragen zu NAS](https://docs.ovh.com/de/storage/faq-nas/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.