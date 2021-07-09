---
title: "Betriebssystem aktualisieren"
slug: upgrade-os
excerpt: 'Hier erfahren Sie, wie Sie ein End-of-Life-Betriebssystem aktualisieren.'
section: 'Tutoriels'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Stand 09.07.2021**

## Ziel

In diesem Tutorial werden die Schritte beschrieben, die notwendig sind, um ein Betriebssystem am Ende der Lebensdauer auf eine neue Version zu aktualisieren.

> [!alert]
> Warnung: wie bei allen größeren Upgrades eines Betriebssystems besteht die Gefahr von Ausfall, Datenverlust oder Ausfall der Softwarekonfiguration.
> OVHcloud empfiehlt Ihnen daher dringend, bevor Sie dieses Tutorial [befolgen, Ihre Instanz](../ein_backup_einer_instanz_erstellen/) zu sichern und eingehende Tests an Ihren Anwendungen durchzuführen, um sicherzustellen, dass diese auf der neuen Version des Betriebssystems funktionieren.
>

> [!primary]
> Um die oben genannten Probleme zu vermeiden, wird empfohlen, eine neue Instanz mit dem neuen Betriebssystem zu installieren, auf das Sie das Update durchführen, und die Daten anschließend zu migrieren.
> Die Unterschiede in Ihrer Anwendung müssen möglicherweise noch untersucht werden, aber das Betriebssystem wird wahrscheinlich stabiler sein.
>

## Voraussetzungen

- Root-Zugriff [auf den Server](../root-rechte_erlangen_und_passwort_festlegen/)
- Sie haben [ein Backup Ihrer Instanz durchgeführt](../ein_backup_einer_instanz_erstellen/)

## In der praktischen Anwendung

### Ubuntu

Bevor Sie die größere Version Ihres Betriebssystems aktualisieren, überprüfen Sie bitte, dass Sie die neuesten Versionen aller auf der aktuellen Version installierten Pakete aktualisieren:

```sh
$ sudo apt-get update
```

Danach führen Sie ein Update Ihrer installierten Pakete auf deren aktuellste Versionen durch:

```sh
$ sudo apt get upgrade -y
```

Wenn Sie diese Operation abgeschlossen haben, *führen Sie ein* Dist-Upgrade durch, bei dem weitere Updates durchgeführt werden, die eventuell notwendig sind:

```sh
$ sudo apt-get dist upgrade -y
```

Die größere Version kann dann aktualisiert werden. Ubuntu stellt nun ein Tool *mit dem Namen do-release*-upgrade zur Verfügung, das das Update sicherer und einfacher macht. Starten Sie das Update mit folgendem Befehl:

```sh
$ sudo do do-release-upgrade
```

Folgen Sie den Anweisungen. Sie bestätigen vor allem, dass Sie das Update fortsetzen möchten.

Anmerkungen:

- Das Tool kann Sie bitten, Ihren Server vor dem Update neu zu starten. Geben Sie hierzu einfach "Reboot" (Neustart) ein und drücken Sie auf Eingehend.
- Es wird Ihnen mitgeteilt, dass die Durchführung dieser Operation über eine SSH-Verbindung nicht empfohlen wird. Da es keinen physischen Zugang zu dem Server gibt, ist die SSH-Verbindung die wichtigste Möglichkeit, auf Ihren Server zuzugreifen.
Ubuntu startet einen neuen SSH-Dienst an einem anderen Port, damit Sie im Fehlerfall einen anderen Zugang behalten. Außerdem können Sie über die Konsole immer auf den Server zugreifen, wenn Sie keinen Zugriff mehr per SSH haben.
- Bei der Aktualisierung werden Sie möglicherweise aufgefordert, die Löschung der nicht mehr unterstützten Pakete zu bestätigen. Bevor Sie fortfahren, überprüfen Sie, dass dies keine Auswirkungen auf Ihre Anwendungen hat.

Sobald das Update abgeschlossen ist, startet der Server einen Neustart und Sie verlieren die Verbindung, bis er neu gestartet ist.
Einige Minuten später sollten Sie sich einloggen und eine ähnliche Nachricht wie unten sehen können (die nächste Version ist verfügbar gegenüber Ihrer vorherigen Version):

```sh
$ Welcome to Ubuntu 18.04.5 LTS (GNU/Linux 4.15.0-147-generic x86_64)
```

> [!primary]
> Wenn Sie das Betriebssystem aktualisieren, anstatt es neu zu installieren, ist die neue Version Ihres Betriebssystems weder im Kundencenter / der OVHcloud API noch in der Horizon / OpenStack API angezeigt.
>

Überprüfen Sie, ob Ihre Anwendungen wie geplant funktionieren. Im Falle eines Problems empfehlen wir Ihnen, [das vor](../einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen/) dem Update durchgeführte Backup wiederherzustellen.

### Fedora

Bevor Sie mit der Aktualisierung der größeren Version des Betriebssystems beginnen, überprüfen Sie bitte, dass die neuesten Versionen aller auf der aktuellen Version installierten Pakete aktualisiert werden. Geben Sie folgenden Befehl ein:

```sh
$ sudo dnupgrade —refresh
```

Starten Sie anschließend den Server neu:

```sh
$ reboot
```

Wenn der Server neu gestartet ist, installieren Sie das Update-Paket:

```sh
$ sudo dnf install dnf-plugin-system-upgrade
```

Nachdem Sie das erforderliche Paket haben, können Sie das Update durchführen. Aktualisierungen des Systems werden nur in maximal 2 Versionen (z. B. von 32 bis 34) offiziell übernommen und getestet.
In diesem Beispiel steigen wir von Fedora 32 auf 33:

```sh
$ sudo dnf system-upgrade download --releasever=33
$ sudo dnf system-upgrade reboot
```

Sobald die Version heruntergeladen wurde und der Update-Prozess gestartet wurde, startet der Server neu, um das Update abzuschließen.
<br>Es kann einige Zeit dauern, bis Sie sich wieder mit dem Server verbinden können, da das Update einige Zeit in Anspruch nimmt.

Überprüfen Sie, dass Ihre Anwendungen wie geplant funktionieren. Im Falle eines Problems empfehlen wir Ihnen, [das vor](../einen-virtuellen-server-aus-einem-backup-erstellen-wiederherstellen/) dem Update durchgeführte Backup wiederherzustellen.

> [!primary]
> Bei Schwierigkeiten finden Sie auf der Webseite [Fedora Docs](https://docs.fedoraproject.org/en-US/quick-docs/dnf-system-upgrade/){.external} Antworten auf Ihre Fragen.
>

## Weiterführende Informationen
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
