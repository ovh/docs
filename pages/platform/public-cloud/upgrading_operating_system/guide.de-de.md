---
title: "Betriebssystem aktualisieren"
slug: upgrade-os
excerpt: 'Erfahren Sie hier, wie Sie ein End-of-Life-Betriebssystem aktualisieren'
section: 'Tutorials'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>

**Letzte Aktualisierung am 09.07.2021**

## Ziel

In diesem Tutorial werden die notwendigen Schritte beschrieben, um eine nicht mehr unterstützte Betriebssystemversion auf eine neuere Version zu aktualisieren.

> [!alert]
> Warnung: wie bei allen größeren Upgrades eines Betriebssystems besteht die Gefahr von Ausfall, Datenverlust oder Fehlschlagen der Softwarekonfiguration.
>
> OVHcloud empfiehlt Ihnen daher dringend, bevor Sie diesem Tutorial folgen, [Ihre Instanz zu sichern](../ein_backup_einer_instanz_erstellen/) und entsprechende Tests an Ihren Anwendungen durchzuführen, um sicherzustellen, dass diese auf der neuen Version des Betriebssystems funktionieren.
>

> [!primary]
> Um die oben genannten Probleme zu vermeiden, wird empfohlen, eine neue Instanz mit dem Betriebssystem zu installieren, auf das Sie das Update durchführen möchten, und die Daten anschließend zu migrieren.
>
> Die Unterschiede bei Ihren Anwendungen sollten dann noch überprüft werden, aber das Betriebssystem wird wahrscheinlich stabiler sein.
>

## Voraussetzungen

- Sie haben [Root-Zugriff auf den Server](../root-rechte_erlangen_und_passwort_festlegen/)
- Sie haben [ein Backup Ihrer Instanz durchgeführt](../ein_backup_einer_instanz_erstellen/)

## In der praktischen Anwendung

### Debian

Bevor Sie auf die höhere Version Ihres Betriebssystems aktualisieren, überprüfen Sie, dass Sie die neuesten Versionen aller auf der aktuellen Version installierten Pakete aktuell sind:

```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get full-upgrade
```

> [!alert]
> Der nächste Schritt ist optional.
> Sie sollten jedoch sorgfältig prüfen, welche Pakete für das System nicht mehr notwendig sind. Andernfalls kann der folgende Befehl das System beschädigen. 
>

```bash
$ sudo apt-get --purge autoremove
```

Einige Updates können einen Neustart erfordern. Bevor Sie mit dem Update beginnen, führen Sie einen Reboot aus:

```bash
$ sudo systemctl reboot
```

Aktualisieren Sie nach dem Neustart das Verzeichnis `/etc/apt/sources.list`, um die höhere Version anzusteuern (in diesem Beispiel wechseln wir von Buster nach Bullseye):

```bash
$ sudo cp -v /etc/apt/sources.list /root/
$ sudo cp -rv /etc/apt/sources.list.d/ /root/
$ sudo sed -i 's/buster/bullseye/g' /etc/apt/sources.list
$ sudo sed -i 's/bullseye\/updates/bullseye-security/g' /etc/apt/sources.list
```

Nachdem Sie die neueste Version als Ziel festgelegt haben, führen Sie das Upgrade durch und initiieren Sie abschließend einen Neustart:

> [!primary]
> Sie können während des Prozesses Aufforderungen erhalten, Dienste neu zu starten. Antworten Sie dann mit Ja.
>

```bash
$ sudo apt-get update
$ sudo apt-get upgrade
$ sudo apt-get full-upgrade
$ sudo systemctl reboot
```

Überprüfen Sie, ob das Update erfolgreich war:

```bash
$ uname -r
$ lsb_release -a
```

### Ubuntu

Bevor Sie auf die neuere Version Ihres Betriebssystems aktualisieren, überprüfen Sie, dass die Paketliste auf dem neuesten Stand ist:

```sh
$ sudo apt-get update
```

Danach führen Sie ein Update Ihrer installierten Pakete auf deren aktuellste Versionen durch:

```sh
$ sudo apt get upgrade -y
```

Wenn Sie diese Operation abgeschlossen haben, führen Sie ein Distributionsupgrade durch, bei dem weitere Aktualisierungen durchgeführt werden, die eventuell notwendig sind:

```sh
$ sudo apt-get dist upgrade -y
```

Die neue Version kann anschließend installiert werden. Ubuntu stellt ein Tool namens *do-release-upgrade* zur Verfügung, das dieses Update sicherer und einfacher macht. Starten Sie das Update mit folgendem Befehl:

```sh
$ sudo do-release-upgrade
```

Folgen Sie den Anweisungen. Hauptsächlich bestätigen Sie dabei, dass Sie mit bestimmten Aktionen fortfahren möchten.

Anmerkungen:

- Das Tool kann Sie bitten, Ihren Server vor dem Update neu zu starten. Geben Sie hierzu einfach "Reboot" ein und drücken Sie die Enter-Taste.
- Es wird Ihnen mitgeteilt, dass die Durchführung dieser Operation über eine SSH-Verbindung nicht empfohlen wird. Da es keinen physischen Zugang zu dem Server gibt, ist die SSH-Verbindung aber die relevante Methode, auf Ihren Server zuzugreifen.
- Ubuntu startet einen neuen SSH-Dienst auf einem anderen Port, damit Sie im Fehlerfall einen weiteren Zugang behalten. Außerdem können Sie über die Konsole immer noch auf den Server zugreifen, wenn Sie keinen Zugriff mehr per SSH haben.
- Bei der Aktualisierung werden Sie möglicherweise aufgefordert, die Löschung der nicht mehr unterstützten Pakete zu bestätigen. Bevor Sie fortfahren, überprüfen Sie, dass dies keine Auswirkungen auf Ihre Anwendungen hat.

Sobald das Update abgeschlossen ist, startet der Server neu und Sie verlieren die Verbindung, bis er neu gestartet ist.
Einige Minuten später sollten Sie sich einloggen und eine ähnliche Nachricht wie unten sehen können (die Version wird die neueste verfügbare im Vergleich zu Ihrer vorherigen Version sein):

```sh
$ Welcome to Ubuntu 18.04.5 LTS (GNU/Linux 4.15.0-147-generic x86_64)
```

> [!primary]
> Wenn Sie das Betriebssystem wie beschrieben aktualisieren, anstatt es neu zu installieren, wird die neue Version Ihres Betriebssystems weder im Kundencenter / der OVHcloud API, noch in der Horizon / OpenStack API angezeigt werden.
>

Überprüfen Sie, ob Ihre Anwendungen wie gewohnt funktionieren. Im Falle eines Problems empfehlen wir Ihnen, das vor dem Update [durchgeführte Backup](../einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen/) wiederherzustellen.

### Fedora

Bevor Sie auf die neuere Version Ihres Betriebssystems aktualisieren, überprüfen Sie, dass die Paketliste auf dem neuesten Stand ist:

```sh
$ sudo dnf upgrade --refresh
```

Starten Sie anschließend den Server neu:

```sh
$ reboot
```

Wenn der Server neu gestartet ist, installieren Sie das Update-Paket:

```sh
$ sudo dnf install dnf-plugin-system-upgrade
```

Nachdem Sie das erforderliche Paket haben, können Sie das Update durchführen. System-Upgrades werden offiziell nur über maximal 2 Releases unterstützt und getestet (z.B. von 32 auf 34)

In diesem Beispiel steigen wir von Fedora 32 auf 33 um:

```sh
$ sudo dnf system-upgrade download --releasever=33
$ sudo dnf system-upgrade reboot
```

Sobald die Version heruntergeladen wurde und der Update-Prozess gestartet wurde, startet der Server neu, um das Update abzuschließen.
<br>Es kann einige Zeit dauern, bis Sie sich wieder mit dem Server verbinden können, da das Update einige Zeit in Anspruch nimmt.

Überprüfen Sie, dass Ihre Anwendungen wie gewohnt funktionieren. Im Falle eines Problems empfehlen wir Ihnen, das vor dem Update [durchgeführte Backup](../einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen/) wiederherzustellen.

> [!primary]
> Bei Schwierigkeiten finden Sie möglicherweise Antworten auf Ihre Fragen in der [Fedora Dokumentation](https://docs.fedoraproject.org/en-US/quick-docs/dnf-system-upgrade/){.external}.
>

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
