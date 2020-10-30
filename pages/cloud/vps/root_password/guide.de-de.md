---
title: Root-Passwort auf einem VPS ändern
slug: root-password
excerpt: In dieser Anleitung erfahren Sie, wie Sie das Root-Passwort Ihres VPS ändern
section: Diagnose & Rescue Modus
---

**Stand 27.06.2018**

## Einleitung

Bei der Installation oder Neuinstallation einer Distribution wurde Ihnen ein Passwort für den Root-Zugriff zugeteilt.  Wie in unserer [Anleitung VPS Sicherheit](https://docs.ovh.com/de/vps/vps-sicherheit/){.external} erklärt, empfehlen wir Ihnen dringend, dieses zugeteilte Passwort zu ändern. Oder Sie haben Ihr Passwort vergessen und müssen es deshalb ändern. Folgen Sie in beiden Fällen dieser Anleitung.

## Voraussetzungen

- Sie sind via SSH auf Ihrem VPS eingeloggt (Root-Zugriff)
- [Neustart des VPS im Rescue-Modus](https://docs.ovh.com/de/vps/rescue/){.external}

<iframe width="560" height="315" src="https://www.youtube.com/embed/ua1qoTMq35g?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Beschreibung

### Änderung des Passworts vom Root-Account aus

Wenn Sie Ihr aktuelles Passwort kennen, loggen Sie sich einfach auf Ihrem Server ein und geben Sie den folgenden Befehl ein:

```sh
passwd
```

Geben Sie anschließend Ihr neues Passwort ein und bestätigen Sie erneut. Sie erhalten dann folgende Bestätigung:

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

> [!primary]
>
> Auf einer Linux-Distribution wird das neu eingegebene Passwort **nicht angezeigt**.
> 

### Vergessenes Passwort neu setzen

#### Schritt 1: Den Mount-Point ermitteln

Das Mounting geschieht bei VPS 2016 automatisch. Stellen Sie daher zunächst fest, wo Ihre Partition gemountet ist. Hierzu gibt es zwei mögliche Befehle:

##### df -h

```sh
root@rescue-pro:~# df -h
Size Used Avail Use% Mounted on
/dev/vda1 4.7G 1.3G 3.2G 29% /
udev 10M 0 10M 0% /dev
tmpfs 774M 8.4M 766M 2% /run
tmpfs 1.9G 0 1.9G 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 1.9G 0 1.9G 0% /sys/fs/cgroup
/dev/vdb1 20G 934M 18G 5% /mnt/vdb1
```

##### lsblk

```sh
root@rescue-pro:~# lsblk
NAME MAJ:MIN RM SIZE RO TYPE MOUNTPOINT
vda 254:0 0 4.9G 0 disk
└─vda1 254:1 0 4.9G 0 part /
vdb 254:16 0 20G 0 disk
└─vdb1 254:17 0 20G 0 part /mnt/vdb1
```

Wie Sie sehen, ist unsere Systempartition auf **/mnt/vdb1** gemountet.

#### Schritt 2: Chroot-Rechte

Passen Sie nun das Wurzelverzeichnis an, damit die Änderungen für Ihr System vorgenommen werden. Führen Sie hierzu einen `chroot`-Befehl aus:

```sh
root@rescue-pro:~# chroot /mnt/vdb1/
root@rescue-pro:/#
```

Sie können diesen Schritt überprüfen, indem Sie den Befehl `ls -l` eingeben und sich so den Inhalt des Wurzelverzeichnisses anzeigen lassen:

```sh
root@rescue-pro:/# ls -l
```

#### Schritt 3: Das Root-Passwort ändern

Ändern Sie nun das Passwort, indem Sie den Befehl `passwd` ausführen:

```sh
passwd
```

```sh
Enter new UNIX password:
Retype new UNIX password:
passwd: password updated successfully
```

Anschließend starten Sie über Ihr Kundencenter Ihren VPS von der Festplatte neu.

## Weiterführende Informationen

[SSH Einführung](https://docs.ovh.com/gb/en/dedicated/ssh-introduction/){.external}

[VPS Rescue-Modus](https://docs.ovh.com/de/vps/rescue/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.