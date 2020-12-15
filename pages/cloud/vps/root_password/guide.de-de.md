---
title: Root-Passwort auf einem VPS ändern
slug: root-password
excerpt: In dieser Anleitung erfahren Sie, wie Sie das Root-Passwort Ihres VPS ändern
section: Diagnose & Rescue Modus
---

**Letzte Aktualisierung am 10 November 2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


## Ziel

Es kann sein, dass Sie das Root-Passwort Ihres Linux-Betriebssystems ändern müssen. Es gibt zwei mögliche Szenarien:

- Sie können sich jederzeit via SSH verbinden
- Sie können sich nicht via SSH verbinden, da Sie Ihr Passwort verloren haben

**In dieser Anleitung erfahren Sie, wie Sie Ihr Administrator-Passwort je nach Situation ändern.**

## Voraussetzungen

- Ihr OVHcloud [VPS ist](https://www.ovhcloud.com/de/vps/){.external} bereits konfiguriert
- Sie verfügen über die Zugangsdaten, die Sie nach der Installation per E-Mail erhalten haben (sofern diese noch gültig sind)
- Sie sind in Ihrem [OVHcloud Kundencenter eingeloggt](https://www.ovh.com/auth/?action=gotomanager){.external} (um den Rescue-Modus zu verwenden)

> [!warning]
>
> OVHcloud stellt Ihnen Maschinen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir keinerlei Administrator-Aufgaben für diese Server übernehmen. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit Ihrer Anlage zu gewährleisten. Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 

## In der praktischen Anwendung

### Änderung des Passworts, wenn Sie noch Zugriff haben (sudo oder root)

> [!primary]
>
> Weitere Informationen zur Verbindung mit Ihrem VPS finden Sie in unserer Anleitung [Mit einem VPS starten](../erste-schritte-mit-einem-vps/).
>

Verbinden Sie sich via SSH mit Ihrem VPS. Wenn nötig, wechseln Sie zum Root-Benutzer:

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
> Bei einer Linux-Distribution wird das von Ihnen eingegebene **Passwort nicht angezeigt**.
>

Wenn Sie die Verbindung als Root-Benutzer erlauben möchten, folgen Sie den Schritten in [diesem Abschnitt](./#root-passwort-aktivieren_1).

### Änderung des Passworts, wenn Sie es verloren haben

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

#### Schritt 1: Starten Sie den VPS im Rescue-Modus neu.

Loggen Sie sich in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager) und starten Sie den VPS im Rescue-Modus neu. Wenn Sie weitere Anweisungen zur Verwendung des Rescue-Modus mit einem VPS benötigen, lesen Sie die [Anleitung zum Rescue-Modus](../rescue/).

#### Schritt 2: Mountpunkt identifizieren

Die Montage wird automatisch erstellt. Verwenden Sie folgende Befehle, um den Mountort Ihrer Partition zu identifizieren:

##### **df -h**

```sh
df -h
Filesystem      Size  Used Avail Use% Mounted on
udev            5.8G     0  5.8G   0% /dev
tmpfs           1.2G   17M  1.2G   2% /run
/dev/sda1       2.4G  1.5G  788M  66% /
tmpfs           5.8G     0  5.8G   0% /dev/shm
tmpfs           5.0M     0  5.0M   0% /run/lock
5.8G 0 5.8G 0% /sys/fs/cgroup
/dev/sdb1        49G  1.2G   48G   3% /mnt/sdb1
/dev/sdb15      105M  3.6M  101M   4% /mnt/sdb15
```

##### **lsblk**

```sh
lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
sda 8:0 0 2.5G 0 disk
└─ sda1 8:1 0 2.5G 0 part /
sdb 8:16 0 50G 0 disk
├ sdb1 8:17 0 49.9G 0 part /mnt/sdb1
├ ─ sdb14 8:30 0 4M 0 part
└─sdb15   8:31   0  106M  0 part /mnt/sdb15
```

Das vorstehende Beispiel zeigt, dass die Systempartition auf/mnt/sdb** montiert ist**.

#### Schritt 3: CHROOT-Genehmigungen

Ändern Sie nun das Wurzelverzeichnis, um die Änderungen auf Ihr System anzuwenden. Verwenden Sie hierzu den `chroot` Befehl:

```sh
chroot /mnt/sdb1/
```

Sie können eine Überprüfung durchführen, indem Sie den Befehl `ls -l` eingeben, der den im aktuellen Verzeichnis Ihres Systems gespeicherten Inhalt auflistet:

```sh
ls -l
```

#### Schritt 4: Passwort ändern (root)

Ändern Sie im letzten Schritt Ihr Passwort mit dem Befehl passwd``.

```sh
~# passwd
New password:
Retype new password:
passwd: password updated successfully
```

Wenn Ihr VPS die neueste Generation hat (sein Name ist: *vps-xxxxx.vps.ovh.net*), Sie haben ursprünglich Login-Daten für einen Benutzer mit wichtigen Rechten erhalten, anstatt standardmäßig "root"-Account. Darüber hinaus akzeptiert der SSH-Dienst Verbindungsanfragen nicht als Root.

Geben Sie daher den Benutzernamen an, den Sie verwenden, um sich nach passwd `einzuloggen`:

```sh
~# passwd <username>
New password:
Retype new password:
passwd: password updated successfully
```

So können Sie sich nach dem Neustart erneut mit diesem Benutzernamen verbinden, falls die Root-Verbindung deaktiviert ist.

Starten Sie Ihren VPS über Ihr OVHcloud [Kundencenter neu auf seiner Festplatte](https://www.ovh.com/auth/?action=gotomanager).


### Root-Passwort aktivieren

Wenn Ihr VPS die neueste Generation hat (sein Name ist: *vps-xxxxx.vps.ovh.net*), Sie haben statt des standardmäßigen "Root"-Accounts Login-Daten für einen Benutzer mit wichtigen Rechten erhalten. Darüber hinaus akzeptiert der SSH-Dienst Verbindungsanfragen nicht als Root.

> [!warning]
>
> Die Aktivierung des Root-Passworts wird in der Regel als Sicherheitslücke betrachtet und wird daher nicht empfohlen.
>
> Wir empfehlen Ihnen, zuerst Maßnahmen zur Sicherung Ihres VPS zu ergreifen. Weitere Informationen finden Sie in unserer [Anleitung zur Absicherung eines VPS](../vps-sicherheit/).
>

#### Schritt 1: Die sshd_config-Datei ändern

Verwenden Sie einen Texteditor wie VIM oder Nano, um die Konfigurationsdatei zu bearbeiten:

```sh
nano /etc/ssh/sshd_config
```

Fügen Sie die folgende Zeile hinzu.

```sh
PermitRootLogin yes
```

Suchen Sie diese Leitung und stellen Sie sicher, dass sie kommentiert wird:

```sh
#PermitRootLogin prohibit-password
```

Speichern Sie die Datei und verlassen Sie den Editor.

#### Schritt 2: SSH-Dienst neu starten

```sh
systemctl restart sshd
```

Dies sollte ausreichen, um die Änderungen umzusetzen. Sie können auch den VPS neu starten (```~$ reboot```).

### Störung

Wenn Sie nach der Änderung Ihres Passworts und dem Neustart Probleme beim Start haben:

- Ziehen Sie die KVM zu Rate, um zu erfahren, warum der VPS nicht starten kann. Lesen Sie [die KVM](../verwendung_von_kvm_fur_vps)-Anleitung, um Hilfe bei der Verwendung dieser Funktion im OVHcloud Kundencenter zu erhalten.
- Wenn der KVM den Start des VPS anzeigt oder die Festplatte nicht gefunden werden kann, überprüfen Sie bitte, dass [bootlog aktiviert ist](../displaying-boot-log-in-the-kvm/). Übermitteln Sie unseren Support-Teams die relevanten Logs, indem Sie eine Support-Anfrage in Ihrem [OVHcloud Kundencenter erstellen](https://www.ovh.com/manager/dedicated/#/support/tickets/new) , um mehr Informationen zu erhalten.

## Weiterführende Informationen

[SSH Einführung](../../dedicated/ssh-einfuehrung/)

[VPS Sicherheit](../vps-sicherheit/)

Für den Austausch mit unserer User Community gehen Sie auf  <https://community.ovh.com/en/>
