---
title: 'Root-Passwort auf einem Linux Dedicated Server ändern'
slug: root-passwort-aendern-linux-dedicated-server
excerpt: 'So ändern Sie das Root-Passwort auf einem Linux Dedicated Server'
section: 'Server Management'
order: 1
---

**Stand 02.04.2019**

## Einleitung

Bei der Installation oder Neuinstallation einer Distribution oder eines Betriebssystems wurde Ihnen ein Passwort für den Root-Zugriff zugeteilt. Wie in unserer Anleitung „[Einen dedizierten Server sichern](https://docs.ovh.com/de/dedicated/dedizierten-server-sichern/){.external}“ erklärt, empfehlen wir Ihnen dringend, dieses zugeteilte Passwort zu ändern. Oder vielleicht haben Sie auch Ihr Passwort vergessen und müssen es deshalb ändern.

**In dieser Anleitung erfahren Sie, wie Sie das Root-Passwort Ihres Servers in beiden Fällen ändern.**


## Voraussetzungen

* Sie verfügen über einen [Dedicated Server](https://www.ovh.de/dedicated-server/){.external} mit installierter Linux-Distribution.
* Sie sind via SSH als Root-Benutzer eingeloggt (wenn Sie das aktuelle Passwort besitzen).
* Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.


## Beschreibung

### Passwort für Root-Zugriff ändern

Wenn Sie bereits mit Root-Zugriff über Ihr aktuelles Passwort eingeloggt sind und dieses ändern möchten, stellen Sie über die Befehlszeile eine SSH-Verbindung zum Server her und geben Sie den folgenden Befehl ein:

```sh
passwd
```

Geben Sie anschließend Ihr neues Passwort zweimal ein:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Bitte beachten Sie, dass bei Linux-Distributionen die Zeichen des Passworts **nicht angezeigt** werden, während Sie diese eingeben.
>

### Verlorenes oder vergessenes Passwort ändern

#### Schritt 1: Systempartition identifizieren

Nachdem Sie den [Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/){.external} auf Ihrem Server aktiviert haben, muss als nächstes die Systempartition ermittelt werden. Dies ist mit folgendem Befehl möglich:

```sh
fdisk -l

Disk /dev/hda 40.0 GB, 40020664320 bytes
255 heads, 63 sectors/track, 4865 cylinders, total 41943040 sectors
Units = cylinders of 16065 * 512 = 8225280 bytes

Device Boot Start End Blocks Id System
/dev/hda1 * 1 1305 10482381 83 Linux
/dev/hda2 1306 4800 28073587+ 83 Linux
/dev/hda3 4801 4865 522112+ 82 Linux swap / Solaris

Disk /dev/sda 8254 MB, 8254390272 bytes
16 heads, 32 sectors/track, 31488 cylinders, total 41943040 sectors
Units = cylinders of 512 * 512 = 262144 bytes

Device Boot Start End Blocks Id System
/dev/sda1 1 31488 8060912 c W95 FAT32 (LBA)
```

Im obenstehenden Beispiel ist die Systempartition `/dev/hda1/`. 

> [!primary]
>
> Wenn Ihr Server über eine Software-RAID-Konfiguration verfügt, muss Ihr RAID-Laufwerk gemountet werden (in der Regel `/dev/mdX/`). 
>

#### Schritt 2: Systempartition mounten

Nachdem Sie die Systempartition ermittelt haben, können Sie diese mit folgendem Befehl anhängen:

```sh
rescue:~# mount /dev/hda1 /mnt/
```

#### Schritt 3: Root-Partition bearbeiten

Die Systempartition ist standardmäßig gesperrt und kann nicht direkt bearbeitet werden. Sie muss zuerst mit Schreibzugriff geöffnet werden. Verwenden Sie hierzu folgenden Befehl:

```sh
chroot /mnt
```

#### Schritt 4: Root-Passwort ändern

Ändern Sie das Passwort im letzten Schritt mit folgendem Befehl:

```sh
passwd

Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Wenn Sie damit fertig sind, ändern Sie den Startmodus Ihres Servers, um `von der Festplatte zu booten`{.action}, und starten Sie ihn neu. Ihr Passwort wurde hiermit geändert.


## Weiterführende Informationen

[Rescue-Modus aktivieren und verwenden](https://docs.ovh.com/de/dedicated/ovh-rescue/){.external}

[Administrator-Passwort auf einem Windows Dedicated Server ändern](https://docs.ovh.com/de/dedicated/windows-admin-passwort-aendern/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
