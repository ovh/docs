---
title: 'Kernel eines dedizierten Servers aktualisieren'
slug: kernel-eines-dedizierten-servers-aktualisieren
excerpt: 'Hier erfahren Sie, wie Sie den Kernel einer Distribution aktualisieren, wenn diese einen OVH Kernel verwendet.'
section: 'Fortgeschrittene Nutzung'
---

**Stand 03.09.2018**

## Einleitung

[OVH Dedicated Server](https://www.ovh.de/dedicated_server/){.external} können in einem Linux-Betriebssystem einfach mithilfe des Startmodus *netboot* mit einem aktualisiertem Kernel gestartet werden. Allerdings empfehlen wir Ihnen, das Kernel-Update auf der lokalen Maschine durchzuführen.

## Was ist ein Kernel?

Ein Kernel ist ein Low-Level-System, das für die Verbindung zwischen Betriebssystem und Anwendungen und der physischen Hardware des Servers zuständig ist. Darüber hinaus können über den Kernel Prozesse geteilt werden. 

**In dieser Anleitung erfahren Sie, wie Sie den Kernel einer Distribution aktualisieren, wenn diese einen OVH Kernel verwendet.**

> [!warning]
>
> Die für [OVH Dedicated Server](https://www.ovh.de/dedicated_server/){.external} angebotenen System-Images verwenden standardmäßig einen optimierten OVH Kernel. Wenn Sie diese Images durch Ihre eigene Distribution ersetzt haben, lesen Sie bitte deren offizielle Dokumentation.
>

> [!primary]
>
> OVH stellt Ihnen Maschinen zur Verfügung, für die Sie die alleinige Verantwortung tragen. Da wir keinen Zugriff auf diese Maschinen haben, können wir keinerlei Administrator-Aufgaben für diese Server übernehmen. Es liegt daher in Ihrer Verantwortung, das Softwaremanagement und die tägliche Sicherheit zu gewährleisten.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen beim Update zu helfen. Wir empfehlen Ihnen jedoch, sich an einen spezialisierten Dienstleister zu wenden, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Sicherheit eines Servers haben.
>

## Voraussetzungen

- Sie verfügen über einen OVH Dedicated Server.
- Sie sind via SSH als Root-Benutzer eingeloggt.
- Sie haben ein Datenbackup durchgeführt (halten Sie sich hierzu an die offizielle Dokumentation Ihrer Distribution).

## Beschreibung

> [!warning]
>
> Bitte beachten Sie, dass Ubuntu-Installationstemplates aus Copyright-Gründen nicht mehr mit OVH Kerneln geliefert werden. Die OVH Repositorys müssen daher zur Datei „/etc/apt/sources.list“ hinzugefügt werden.
>

### Kernel-Version ermitteln

Die Version Ihres Kernels finden Sie mit folgendem Befehl:

```sh
uname -r
```

Zum Beispiel:

```sh
uname -r

4.09.76-xxxx-std-ipv6-64
```

Hier ist die Kernel-Version **4.09.76-xxxx-std-ipv6-64**.


### Kernel mit OVH Paketen aktualisieren

Bei Debian- und RedHat-basierten Distributionen wird der Kernel mit dem Paketmanager aktualisiert.

#### Schritt 1: Kernel aktualisieren

Bei Debian-basierten Distributionen wird der Kernel mit folgendem Befehl aktualisiert:

```sh
apt-get update && apt-get dist-upgrade
```

Bei RedHat-basierten Distributionen wird der Kernel mit folgendem Befehl aktualisiert:

```sh
yum update
```

#### Schritt 2: Server neu starten

Damit die Änderung angewandt werden, muss der Server neu gestartet werden:

```sh
reboot
```


### Kernel ohne OVH Pakete aktualisieren

#### Schritt 1: Zum richtigen Verzeichnis navigieren

Das Kernel-Image muss im folgenden Verzeichnis abgelegt werden:

```sh
cd /boot
```

#### Schritt 2: Image herunterladen

Die gewünschte bzImage-Version (idealerweise die neueste Version) kann ganz einfach ohne Neukompilierung des Kernels heruntergeladen werden. Die Images finden Sie unter folgender Adresse: <https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/>. 

Die Kernel sind monolithisch, das heißt Kernel-Module wie CEPH, NBD, ZFS etc. werden nicht berücksichtigt. 

Zurück zu unserem Beispiel mit der Kernel-Version **4.09.76-xxxx-std-ipv6-64**.

In diesem Fall wird das Image mit folgendem Befehl heruntergeladen:

```sh
wget https://last-public-ovh-kernel.snap.mirrors.ovh.net/builds/4.9.118/313405/bzImage/4.9.118-xxxx-std-ipv6-64/bzImage-4.9.118-xxxx-std-ipv6-64
```

#### Schritt 3: Boot-Programm (GRUB) aktualisieren

Aktualisieren Sie das Boot-Programm mit folgendem Befehl:

```sh
update-grub
```

Sie erhalten folgende Ausgabe:

```sh
Generating grub configuration file ...
done
```

> [!primary]
>
> Vergewissern Sie sich, dass die folgende (für das Update erforderliche) Datei in Ihrer Konfiguration vorhanden ist: `06_OVHkernel`. Dies überprüfen Sie mit folgendem Befehl:
>
> `ls /etc/grub.d/`
>

#### Schritt 4: Server neu starten

Damit die Änderungen angewandt werden, muss der Server mit folgendem Befehl neu gestartet werden:

```sh
reboot
```

### Rollback

Falls die Änderung nicht korrekt durchgeführt wurde oder Sie eine Fehlermeldung erhalten, können Sie ein Rollback durchführen. Starten Sie den Server hierzu im [Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/){.external}. Mounten Sie anschließend Ihr System mit folgenden Befehlen:

```sh
mount /dev/md1 /mnt
```

> [!primary]
>
> In diesem Beispiel heißt die Wurzel (oder Slash `/`) *md1*. Der Name kann jedoch variieren. Um zu überprüfen, welcher Name für Ihre Wurzel verwendet wird, geben Sie folgenden Befehl ein:
>
> `fdisk` oder `lsblk`
>

```sh
mount -o rbind /dev /mnt/dev
```

```sh
mount -t proc proc /mnt/proc
```

```sh
mount -t sysfs sys /mnt/sys
```

```sh
chroot /mnt
```

Gehen Sie nun zum Verzeichnis `/boot` und löschen Sie die zuletzt installierten Dateien (`rm`-Befehl). In unserem Beispiel sieht dies wie folgt aus:

```sh
rm bzImage-4.9.118-xxxx-std-ipv6-64
```

Aktualisieren Sie nun erneut das Boot-System:

```sh
update-grub
```

Beenden Sie anschließend den Rescue-Modus (Neustart von der Festplatte) und führen Sie mit folgendem Befehl einen Soft Reboot aus:

```sh
reboot
```

### Kernel-Update überprüfen

Wenn das Update abgeschlossen ist, können Sie die neu installierte Kernel-Version mit folgendem Befehl überprüfen:

```sh
uname -r
```

> [!primary]
>
> Sie können auf der Website des Herausgebers Ihrer Distribution nachlesen, ob die neue Kernel-Version gepatcht wurde, um Sie gegen die Sicherheitslücken Meltdown und Spectre zu schützen.
>
> Falls nötig gibt es auch einige Tools (zum Beispiel <https://github.com/speed47/spectre-meltdown-checker>), mit denen Sie überprüfen können, ob der Kernel anfällig ist oder nicht.
>
> **OVH übernimmt keine Garantie für externe Tools. Die Nutzung erfolgt auf eigene Gefahr.**
>

## Weiterführende Informationen

[Rescue-Modus aktivieren und verwenden](https://docs.ovh.com/de/dedicated/ovh-rescue/){.external}

[Informationen zu den Sicherheitslücken Meltdown und Spectre (Englisch)](https://docs.ovh.com/fr/dedicated/information-about-meltdown-spectre-vulnerability-fixes/){.external}

[Patches für die Sicherheitslücken Meltdown und Spectre (Englisch)](https://docs.ovh.com/fr/dedicated/meltdown-spectre-kernel-update-per-operating-system/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.