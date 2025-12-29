---
title: Mounten Sie Ihr HA-NAS über eine CIFS-Freigabe
excerpt: In dieser Anleitung erfahren Sie, wie Sie Ihr HA-NAS über das CIFS-Protokoll mounten können.
updated: 2025-10-23
---

## Ziel

**Diese Anleitung erklärt, wie Sie einen OVHcloud HA-NAS-Speicherplatz über das CIFS-Protokoll konfigurieren und mounten können.**

## Voraussetzungen

- Sie haben einen [Dedicated Server](/links/bare-metal/bare-metal) **oder** einen [VPS](/links/bare-metal/vps) **oder** eine [Public Cloud Instanz](/links/public-cloud/public-cloud).
- Sie verfügen über eine [HA-NAS Lösung](/links/storage/nas-ha).

## In der praktischen Anwendung

### Einstellungen für Microsoft Windows

- **Windows Server 2008**: Klicken Sie auf `Start`{.action}, `All the programs`{.action}, `Accessories`{.action}, `Command prompt`{.action}.
- **Windows Server 2012**: Klicken Sie auf das `Windows PowerShell`{.action} Icon am unteren Bildschirmrand in der Taskleiste.
- **Windows Server 2016/2019/2022/2025**: Klicken Sie auf `Start`{.action} und dann auf das `Windows PowerShell`{.action} Icon.


Führen Sie dann den folgenden Befehl aus:

```bash
net use z: \\CIFS_SERVER_IP\CIFS_PATH
```

#### Beispiele

- CIFS Mount für HA-NAS:

```bash
net use z: \\10.16.101.8\zpool-000206_PARTITION_NAME_1
```

> [!alert]
>
> Der SMB/CIFS Benutzer ist `nobody`. Das Ändern von Berechtigungen mit diesem Benutzer kann Konflikte mit bestehenden NFS-Berechtigungen verursachen.
>

Die folgenden Fehlermeldungen können angezeigt werden:

```console
System error 1272 has occurred.

You can't access this shared folder because your organization's security policies block unauthenticated guest access. These policies help protect your PC from unsafe or malicious devices on the network.
```

```console
System error 3227320323 has occurred.
```

> [!primary]
>
> Informationen zum Beheben dieser Fehler finden Sie in der offiziellen Microsoft-Dokumentation:<br> 
> [Aktivieren von unsicheren Gastanmeldungen in SMB2 und SMB3](https://learn.microsoft.com/de-de/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=powershell) 
> [Steuerung des SMB-Signierverhaltens](https://learn.microsoft.com/de-de/windows-server/storage/file-server/smb-signing?tabs=powershell).

### Einstellungen für Linux

Öffnen Sie eine SSH-Verbindung zu Ihrem Server und geben Sie den folgenden Befehl ein:

```sh
mount -t cifs -o uid=root,gid=100,dir_mode=0700,username=root,password= //IP_SERVEUR_CIFS/CHEMIN_CIFS /mnt/FolderMount
```

> [!warning]
>
> Um Freigaben über den Hostnamen (anstelle der IP-Adresse) zu mounten, ist das Dienstprogramm `mount.cifs` erforderlich. Es ist in der Regel Teil des Pakets `cifs-utils`.
>
> `mount.cifs` ist ein Wrapper, der Hostnamen auflöst und den Parameter `ip=` zu den an den Kernel übermittelten Mount-Parametern hinzufügt.
>
> Ohne `mount.cifs` führen Versuche, über den Hostnamen zu mounten, zu folgendem Fehler:
>
> ```text
> mount: /mnt/FolderMount: mount(2) system call failed: No route to host.
>        dmesg(1) may have more information after failed mount system call.
> ```
>

## Weiterführende Informationen

[Häufig gestellte Fragen zu HA-NAS](/pages/storage_and_backup/file_storage/ha_nas/nas_faq)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
