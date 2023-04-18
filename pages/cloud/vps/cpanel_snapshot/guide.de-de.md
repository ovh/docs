---
title: 'Automatische Sicherung - Kernel Panic (cPanel)'
excerpt: 'Erfahren Sie, wie Sie Probleme mit der Blockierung von cPanel-Servern beim automatischen Backup von OVHcloud lösen.'
updated: 2021-03-09
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 09.03.2021**

## Ziel

Wenn Sie die Funktion "Automatische Backups" auf einem VPS verwenden, der cPanel ausführt, kann es dazu kommen, dass Ihr VPS im Backup-Zustand verbleibt und nicht mehr erreichbar ist. Die Ursache dafür ist der Jailed Shell Zugang für cPanel Benutzer, der ein *virtfs* System auf dem Dateisystem erzeugt.

Bei der Erstellung eines Backups Ihres VPS (Dienstoptionen "Automatische Backups" oder "Snapshots") kommuniziert der Hypervisor mit Ihrem VPS über den QEMU Guest Agent, um das Dateisystem auf dem VPS einzufrieren, bevor das Backup durchgeführt wird. Dieser Mechanismus bewirkt, dass während der Durchführung des Backups keine Schreibvorgänge auf Ihrer Festplatte ausgeführt werden, und gewährleistet somit die Konsistenz des Backups.

Wenn Sie jedoch den Jailed Shell Zugang aktiviert haben, erstellt cPanel ein *virtfs*, das nicht auf diese Weise eingefroren werden kann. Es wird sich daher sperren und Kernel Panic verursachen. Um dies zu vermeiden, gibt es drei Methoden:

1. QEMU Guest Agent deaktivieren
2. Jailed Shell nicht erlauben
3. Die Sicherheit der /tmp Partition deaktivieren (von cPanel nicht empfohlen, dies ist jedoch eine verfügbare Option)

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) (VPS Value, Essential, Comfort oder Elite) in Ihrem OVHcloud Account.
- cPanel ist auf dem Server installiert.

## In der praktischen Anwendung

Wählen Sie eine der drei Optionen aus und folgen Sie dem zugehörigen Abschnitt der Anleitung. Beachten Sie, dass alle Optionen Vor- und Nachteile haben.

### QEMU Guest Agent deaktivieren

Überprüfen Sie zunächst, ob QEMU Guest Agent auf Ihrem Server ausgeführt wird:

```
systemctl status qemu-guest-agent
```

Der Status des Dienstes wird neben "Active:" angegeben. Ist der Dienst aktiv oder wird er ausgeführt, so muss er gestoppt und deaktiviert werden, damit er sich in Zukunft nicht erneut aktivieren kann. Verwenden Sie hierzu folgende Befehle:

```
systemctl stop qemu-guest-agent
systemctl disable qemu-guest-agent
```

### Von Jailed Shell zu Normal Shell

Sie können [hier die Unterschiede zwischen Jailed Shell und Normal Shell](https://support.cpanel.net/hc/en-us/articles/360051992634-Differences-Between-Normal-and-Jailed-Shell) nachlesen.

Um eine Jailed Shell Umgebung für alle Benutzer zu deaktivieren, müssen Sie die "jailshell"-Option in den "WHM Tweak Settings" (WHM >> Home >> Server Tweak >> Settings Konfiguration) deaktivieren.

Mit dieser Einstellung können Sie die Verwendung einer Jailed Shell für bestehende Konten aktivieren und deaktivieren, sowie für Konten, die Sie in den folgenden Interfaces bearbeiten: 

1. Interface "WHM's Modify an Account" (WHM >> Home >> Account Functions >> Modify An Account)
2. Interface "WHM's Upgrade/Downgrade an Account" (WHM >> Home >> Account Functions >> Upgrade/Downgrade An Account)

Diese Einstellung beeinträchtigt nicht die Accounts, die bereits auf dem Server existieren, aber in diesen Interfaces nicht geändert wurden.

Um die Jailed Shell-Umgebung eines bestimmten Benutzers zu deaktivieren, verwenden Sie "Manage Shell Access" von WHM (WHM >> Home >> Account Functions >> Manage Shell Access).

### Die Sicherheit der /tmp Partition auf cPanel deaktivieren

Bitte beachten Sie, dass diese Methode von cPanel nicht empfohlen wird. Ihre Verwendung ist auf Ihr eigenes Risiko beschränkt. Wenn Sie mit dieser Option fortfahren möchten, können Sie die genauen Schritte aus der [cPanel Dokumentation](https://docs.cpanel.net/knowledge-base/security/tips-to-make-your-server-more-secure/#harden-your-tmp-partition) erfahren.

## Weiterführende Informationen

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
