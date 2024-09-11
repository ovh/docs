---
title: Administratorpasswort auf einem Windows-Server ändern
excerpt: Erfahren Sie hier, wie Sie das Passwort Ihres Administrator-Accounts von Windows auf einem VPS oder einer Public Cloud Instanz mithilfe des OVHcloud Rescue-Modus  zurücksetzen
updated: 2023-10-12
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Bei der Installation oder Neuinstallation eines Windows Server-Betriebssystems erhalten Sie ein Passwort für den administrativen Zugang (*Administrator*-Account).

Wenn Sie Ihr Administrator-Passwort nicht mehr haben, können Sie es über den OVHcloud Rescue-Modus zurücksetzen.

**Diese Anleitung erklärt, wie Sie das Passwort des Administrator-Accounts eines Windows Server Betriebssystems über den OVHcloud Rescue-Modus zurücksetzen.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) oder eine Public Cloud Instanz(https://www.ovhcloud.com/de/public-cloud/) in Ihrem OVHcloud Account
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) angemeldet.

## In der praktischen Anwendung

### Schritt 1: Server im Rescue-Modus neu starten

Der Rescue-Modus muss aktiviert sein, bevor das Administratorkennwort geändert werden kann.

Folgen Sie der Anleitung für Ihren Dienst, um ihn im Rescue-Modus neu zu starten:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Public Cloud Instanz](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Schritt 2: Systempartition mounten

Verbinden Sie sich via SSH mit Ihrem Server. (Lesen Sie bei Bedarf unsere [Einführung zu SSH](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction).)

Sie können die Verbindung zum Server auch über [KVM (VPS)](/pages/bare_metal_cloud/virtual_private_servers/using_kvm_for_vps) oder die [VNC-Konsole (Public Cloud Instanz)](/pages/public_cloud/compute/first_steps_with_public_cloud_instance#accessvnc) herstellen.

Geben Sie die folgenden Befehle ein, um das Windows-Dateisystem bereitzustellen:

```bash
ntfsfix /dev/sdb2
```

```bash
mount -t ntfs-3g /dev/sdb2 /mnt
```

### Schritt 3: Aktuelles Passwort löschen

In diesem Schritt wird die *SAM*-Datei mit einem Rescue-Modus-Tool bearbeitet. Listen Sie die Windows-Benutzer auf mit folgendem Befehl:

```bash
chntpw -l /mnt/Windows/System32/config/SAM
```

```text
| RID -|---------- Username ------------| Admin? |- Lock? --|
| 01f4 | Administrator                  | ADMIN  | dis/lock |
| 01f7 | DefaultAccount                 |        | dis/lock |
| 01f5 | Guest                          |        | dis/lock |
| 01f8 | WDAGUtilityAccount             |        | dis/lock |
```

In dieser Beispielausgabe ist `Administrator` der lokale Administrator-Account. Starten Sie den Reset-Vorgang mit folgendem Befehl. (Verwenden Sie `admin`, wenn `Administrator` nicht vorhanden ist.)

```bash
chntpw -u Administrator /mnt/Windows/System32/config/SAM
```

```text
RID     : 0500 [01f4]
Username: Administrator
fullname:
comment : Built-in account for administering the computer/domain
homedir :

00000220 = Administrators (which has 1 members)

Account bits: 0x0010 =
[ ] Disabled        | [ ] Homedir req.    | [ ] Passwd not req. |
[ ] Temp. duplicate | [X] Normal account  | [ ] NMS account     |
[ ] Domain trust ac | [ ] Wks trust act.  | [ ] Srv trust act   |
[ ] Pwd don't expir | [ ] Auto lockout    | [ ] (unknown 0x08)  |
[ ] (unknown 0x10)  | [ ] (unknown 0x20)  | [ ] (unknown 0x40)  |

Failed login count: 47034, while max tries is: 0
Total  login count: 5

- - - - User Edit Menu:
 1 - Clear (blank) user password
 2 - Unlock and enable user account [probably locked now]
 3 - Promote user (make user an administrator)
 4 - Add user to a group
 5 - Remove user from a group
 q - Quit editing user, back to user select
Select: [q] >
```

Geben Sie "1" ein, und drücken Sie die Eingabetaste. (Verwenden Sie zuerst die Option 2, wenn neben "Deaktiviert" ein "X" steht.)

```text
Select: [q] > 1
Password cleared!
```

Geben Sie "q" ein und drücken Sie die Eingabetaste, um das Tool zu verlassen. Wenn Sie dazu aufgefordert werden, geben Sie "y" ein und drücken Sie die Eingabetaste.

```text
Select: [q] > q
 
Hives that have changed:
 #  Name
 0  </mnt/Windows/System32/config/SAM>
Write hive files? (y/n) [n] : y
 0  </mnt/Windows/System32/config/SAM> - OK
```

### Schritt 4: Server neu starten

Sie können nun den Rescue-Modus beenden und den Server neu starten. Wenn nmötig, folgen Sie der zugehörigen Anleitung:

- [VPS](/pages/bare_metal_cloud/virtual_private_servers/rescue)
- [Instance Public Cloud](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

### Schritt 5: Neues Passwort festlegen (KVM / VNC)

> [!warning]
>
> Überspringen Sie diesen Schritt nicht. Ein ungeschützter Administrator-Account ist ein erhebliches Sicherheitsrisiko.
>

Verbinden Sie sich mit Ihrem Server und geben Sie `cmd` in die Suchleiste ein, um die Eingabeaufforderung zu öffnen.

Legen Sie das Passwort des aktuellen Benutzers ("Administrator") fest:

```powershell
net user Administrator *
```

![AdministratorPW](images/adminpw_win.png){.thumbnail}

Sie können sich nun als "Administrator" mit diesem neuen Passwort anmelden.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
