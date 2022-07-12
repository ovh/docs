---
title: Root-Passwort auf einem VPS ändern
slug: root-password
excerpt: Erfahren Sie hier, wie Sie das Passwort des administrativen Zugangs zu Ihrem VPS ändern
section: Diagnose & Rescue Modus
---

**Letzte Aktualisierung am 27.04.2021**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Es kann sein, dass Sie das Root-Passwort Ihres Linux-Betriebssystems ändern müssen. Es gibt dabei zwei mögliche Szenarien:

- Sie können sich noch via SSH verbinden
- Sie können sich nicht via SSH verbinden, da Sie Ihr Passwort verloren haben

**Diese Anleitung erklärt, wie Sie Ihr Administrator-Passwort je nach Ausgangssituation ändern.**

## Voraussetzungen

- Sie verfügen über einen [OVHcloud VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie verfügen über die Zugangsdaten, die Sie nach der Installation per E-Mail erhalten haben (sofern diese noch gültig sind).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) (um den Rescue-Modus zu verwenden).

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil “Weiterführende Informationen” dieser Anleitung.
>

## In der praktischen Anwendung

### Änderung des Passworts, wenn Sie noch Zugriff haben (als Root- oder *sudo*-Benutzer)

> [!primary]
>
> Weitere Informationen zur Verbindung mit Ihrem VPS finden Sie in unserer Anleitung [Erste Schritte mit einem VPS](../erste-schritte-mit-einem-vps/).
>

Verbinden Sie sich via SSH mit Ihrem VPS. Wenn nötig, wechseln Sie zum Root-Account:

```sh
~$ sudo su -
~#
```

Ändern Sie das Passwort des aktuellen Benutzers:

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

> [!primary]
>
> Bei einer Linux-Distribution wird das von Ihnen eingegebene Passwort **nicht angezeigt**.
>

Wenn Sie den Login als Root-Benutzer erlauben möchten, folgen Sie den Schritten in [diesem Abschnitt](#rooterlauben).

### Änderung des Passworts, wenn Sie es verloren haben

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Schritt 1: Starten Sie den VPS im Rescue-Modus neu

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und starten Sie den VPS im Rescue-Modus neu. Wenn Sie weitere Anweisungen zur Verwendung des Rescue-Modus mit einem VPS benötigen, lesen Sie die Anleitung zum [Rescue-Modus](../rescue/).

#### Schritt 2: Mountpoint identifizieren

Bei den alten VPS Reihen werden Ihre Partitionen automatisch im Rescue-Modus erstellt. Sie können folgende Befehle verwenden, um den Mountpunkt Ihrer Partition zu identifizieren:

##### **df -h**

```sh
~$ df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
tmpfs           5.8G     0  5.8G   0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

##### **lsblk**

```sh
~$ lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
sda       8:0    0  2.5G  0 disk
└─sda1    8:1    0  2.5G  0 part /
sdb       8:16   0   50G  0 disk
├─sdb1    8:17   0 49.9G  0 part /mnt/sdb1
├─sdb14   8:30   0    4M  0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

Das vorstehende Beispiel zeigt, dass die Systempartition auf **/mnt/sdb1** gemountet ist.

Wenn es sich um einen VPS aus einer aktuellen Produktreihe handelt, sollte die Spalte `MOUNTPOINT` leer sein. Erstellen Sie in diesem Fall zuerst die Partition:

```sh
~$ mkdir -p /mnt/sdb1
~$ mount /dev/sdb1 /mnt/sdb1
```

#### Schritt 3: CHROOT-Genehmigungen

Ändern Sie nun das Wurzelverzeichnis, um die Änderungen auf Ihr System anzuwenden. Verwenden Sie hierzu den `chroot` Befehl:

```sh
~$ chroot /mnt/sdb1/
```

Sie können eine Überprüfung durchführen, indem Sie den Befehl `ls -l` eingeben, der den im aktuellen Verzeichnis Ihres Systems vorhandenen Inhalt auflistet:

```sh
~$ ls -l
```

#### Schritt 4: Das (Root-)Passwort ändern

Ändern Sie im letzten Schritt Ihr Passwort mit dem Befehl `passwd`.

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

Wenn Ihr VPS aus der neueren Generation ist (Namensschema: *vps-xxxxx.vps.ovh.net*), haben Sie, statt für den "Root"-Account, Login-Daten für einen Benutzer mit erhöhten Berechtigungen erhalten. Darüber hinaus akzeptiert der SSH-Dienst Verbindungsanfragen nicht als Root.

Es ist daher erforderlich, dass Sie den tatsächlich verwendeten Login-Benutzernamen nach `passwd` eingeben:

```sh
~# passwd <username>
New password:
Retype new password:
passwd: password updated successfully
```

Damit wird sichergestellt, dass Sie sich nach dem Neustart auch wieder mit diesem Benutzernamen anmelden können, falls der Root-Login deaktiviert ist.

Starten Sie Ihren VPS schließlich über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) neu vom Systemlaufwerk.


### Root-Login aktivieren <a name="rooterlauben"></a>

Wenn Ihr VPS aus der neueren Generation ist (Namensschema: *vps-xxxxx.vps.ovh.net*), haben Sie, statt für den "Root"-Account, Login-Daten für einen Benutzer mit erhöhten Berechtigungen erhalten. Darüber hinaus akzeptiert der SSH-Dienst Verbindungsanfragen nicht als Root.

> [!warning]
>
> Die Aktivierung des Root-Logins wird in der Regel als Sicherheitslücke betrachtet und wird daher nicht empfohlen.
>
> Wir empfehlen Ihnen, zuerst Maßnahmen zur Sicherung Ihres VPS zu ergreifen. Weitere Informationen finden Sie in unserer [Anleitung zur Absicherung eines VPS](../vps-sicherheit/).
>

#### Schritt 1: Die sshd_config-Datei bearbeiten

Verwenden Sie einen Texteditor wie vim oder nano, um die Konfigurationsdatei zu bearbeiten:

```sh
~$ nano /etc/ssh/sshd_config
```

Fügen Sie die folgende Zeile hinzu.

```sh
PermitRootLogin yes
```

Suchen Sie diese Leitung und stellen Sie sicher, dass sie auskommentiert ist:

```sh
#PermitRootLogin prohibit-password
```

Speichern Sie die Datei und verlassen Sie den Editor.

#### Schritt 2: SSH-Dienst neu starten

```sh
~$ systemctl restart sshd
```

Dies sollte ausreichen, um die Änderungen anzuwenden. Sie können alternativ den VPS neu starten (```~$ reboot```).

### Troubleshooting

Falls Sie nach der Änderung Ihres Passworts und dem Neustart auf Probleme beim Booten stoßen:

- Verwenden Sie KVM, um herauszufinden, warum der VPS nicht starten kann. Ziehen Sie die [KVM-Anleitung](../verwendung_von_kvm_fur_vps) heran, um Hilfe bei der Verwendung dieser Funktion im OVHcloud Kundencenter zu erhalten.
- Wenn KVM den VPS im Bootvorgang anzeigt oder das Laufwerk nicht gefunden werden kann, überprüfen Sie, ob [Bootlogs aktiviert](../bootlog-in-kvm/) sind. Übermitteln Sie unseren Support-Teams die relevanten Logs, indem Sie eine Support-Anfrage in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erstellen, um die Ursache des Problems ermitteln zu können.

## Weiterführende Informationen

[SSH Einführung](../../dedicated/ssh-einfuehrung/)

[VPS Sicherheit](../vps-sicherheit/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
