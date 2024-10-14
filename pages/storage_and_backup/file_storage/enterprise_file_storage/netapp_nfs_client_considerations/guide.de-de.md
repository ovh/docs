---
title: "Enterprise File Storage - NFS Client konfigurieren"
excerpt: "Spezifische Einstellungen für die Enterprise File Storage Lösung"
updated: 2024-10-10
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

**Diese Anleitung erklärt, wie Sie den Lese-/Schreibzugriff auf Ihren Enterprise File Storage von bestimmten NFS-Clients aus aktivieren können.**

## Voraussetzungen

- Sie haben eine [Enterprise File Storage Lösung](/links/storage/enterprise-file-storage).

## In der praktischen Anwendung

### Microsoft Windows NFS-Clients

#### Sicherstellen, dass der Windows-Benutzer für den Zugriff auf Ihren Enterprise File Storage über ausreichende Rechte verfügt

Das UID/GID-Paar muss für den Zugriff auf 0 (Unix Root-Berechtigung) konfiguriert werden.

Wenn dies nicht der Fall ist, treten beim Zugriff auf den Enterprise File Storage Fehler auf, da bei der Autorisierung von NFS auf einem Windows-Computer ein UNIX-Benutzer mit der UID und der Standard-GID -2 (oder 4294967294) erstellt wird.

Als Behelfslösung können UID und GID 0 auf dem Windows-Computer, der auf Ihren Enterprise File Storage zugreift, erzwungen werden.

- Starten Sie den Registry-Editor auf dem Client-Computer.
- Suchen Sie `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\ClientForNFS\CurrentVersion\Default`.
- Erstellen Sie zwei DWORD-Werte: AnonymousUid und AnonymousGid.
- Legen Sie diese Werte für UID und GID auf 0 fest.
- Starten Sie den NFS-Dienst auf dem Client-Computer neu.

> [!primary]
>
> **Referenzdokumentation:**
>
> - <https://techcommunity.microsoft.com/t5/running-sap-applications-on-the/installation-configuration-of-windows-nfs-client-to-enable/ba-p/367084>
> - <https://learn.microsoft.com/en-gb/archive/blogs/msdn/sfu/can-i-set-up-user-name-mapping-in-windows-vista>
> - <https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc753302(v=ws.10)?redirectedfrom=MSDN>
> - <https://kb.netapp.com/on-prem/ontap/da/NAS/NAS-KBs/Unable_to_perform_write_operations_on_an_export_mounted_on_a_Windows_machine>

#### Unsichere Gastanmeldungen für SMB2- und SMB3-Protokolle zulassen

Möglicherweise müssen Sie Gastverbindungen für den Zugriff auf Ihren Enterprise File Storage aktivieren, da kein Benutzerkonto, sondern nur Gastzugriff bereitgestellt wird.

So ändern Sie die Sicherheitsrichtlinien entsprechend:

- Starten Sie `gpedit.msc` an einer Eingabeaufforderung, und wählen Sie `Edit group policy`.
- Gehen Sie im linken Bereich unter „Lokale Computerrichtlinie“ zu `Computer Configuration\Administrative Templates\Network\Lanman Workstation`.
- Öffnen Sie `Enable insecure guest logons`, wählen Sie `Enabled` und `OK`.

> [!primary]
>
> **Referenzdokumentation:**
>
> - <https://learn.microsoft.com/en-us/windows-server/storage/file-server/enable-insecure-guest-logons-smb2-and-smb3?tabs=group-policy>

#### Aktivierung der Funktion "showmount" über OVHcloud Support anfordern

Aus Sicherheitsgründen ist die Option "showmount" zum Auflisten der auf einem NFS-Server verfügbaren Freigaben deaktiviert.
Wenn Sie jedoch während bestimmter Schreibvorgänge Fehler wie "invalid device error" erhalten oder eine Anwendung verwenden, die diese Funktionbenötigt, öffnen Sie ein [OVHcloud Support-Ticket](https://help.ovhcloud.com/csm?id=csm_get_help), um die Funktion in Ausnahmefällen zu aktivieren.

> [!primary]
>
> **Referenzdokumentation:**
>
> - <https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/showmount>

## Weiterführende Informationen

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
