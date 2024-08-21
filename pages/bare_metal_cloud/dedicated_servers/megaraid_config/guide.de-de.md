---
title: MegaRAID mit RAID 0 konfigurieren
excerpt: "Erfahren Sie hier, wie Sie RAID 0 einrichten, um den gesamten Speicherplatz Ihres Servers zu verwenden"
updated: 2022-07-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

 
## Ziel

RAID (Redundant Array of Independent Disks) ist eine Kombination von Techniken, die Datenverluste auf einem Server reduzieren, indem Daten auf mehreren Disks repliziert werden.

Der Standard-RAID-Level der OVHcloud Server ist RAID 1. Dieser verdoppelt das Volumen Ihrer Daten und reduziert so den verfügbaren Speicherplatz.

**Diese Anleitung erklärt, wie Sie die Disks Ihres Servers im RAID 0 Modus konfigurieren, um den maximal nutzbaren Speicherplatz zu verwenden.**

> [!warning]
> 
> Achtung: RAID 0 bietet weder **Fehlertoleranz** noch **Datenredundanz**. Dadurch ist es sehr wahrscheinlich, dass bei einem Ausfall Daten verloren gehen.
> 

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) mit Hardware-RAID.
- Sie haben administrativen Zugriff (sudo) auf Ihren Server über SSH

## In der praktischen Anwendung

### Ihr OVHcloud Kundencenter verwenden

Wählen Sie in Ihrem [OVHcloud Kundencenter](/links/manager) Ihren Server aus, indem Sie `Dedicated Server`{.action} im Bereich `Bare Metal Cloud`{.action} öffnen.

Klicken Sie im Tab `Allgemeine Informationen`{.action} auf `...`{.action} neben `System (OS)` und danach auf `Installieren`{.action}.

Wählen Sie **Mit einem OVHcloud Template installieren** und klicken Sie dann auf `Weiter`{.action}.

![MegaRAID](images/server_installation_raid0_1.png){.thumbnail}

Wählen Sie das gewünschte Betriebssystem aus und klicken Sie auf `Weiter`{.action}.

Setzen Sie einen Haken bei **Hardware-RAID-Konfiguration anpassen** und **Konfiguration der Partitionen anpassen** und klicken Sie auf `Weiter`{.action}.

![MegaRAID](images/server_installation_raid0_2.png){.thumbnail}

Wählen Sie `raid0` aus der Drop-down-Liste aus und klicken Sie auf `Weiter`{.action}.

![MegaRAID](images/server_installation_raid0_3.png){.thumbnail}

Konfigurieren Sie die Partitionen nach Bedarf und klicken Sie dann auf `Weiter`{.action}.

![MegaRAID](images/server_installation_raid0_4.png){.thumbnail}

Klicken Sie schließlich auf `Bestätigen`{.action}.

![MegaRAID](images/server_installation_raid0_5.png){.thumbnail}

Überprüfen Sie nach der Konfiguration Ihres Servers die Größe der Partitionen, indem Sie sich via SSH mit diesem verbinden und folgenden Befehl ausführen:

```sh
df -h
```

### Rescue-Modus verwenden

Wählen Sie in Ihrem [OVHcloud Kundencenter](/links/manager) Ihren Server aus, indem Sie `Dedicated Server`{.action} im Bereich `Bare Metal Cloud`{.action} öffnen.

Klicken Sie im Bereich **Allgemeine Informationen** auf `...`{.action} neben `Boot`. Wählen Sie dann `Bearbeiten`{.action}, um den Startmodus zu ändern.

![MegaRAID](images/rescue_mode_raid0_1.png){.thumbnail}

Klicken Sie auf `Im Rescue-Modus booten`{.action} und wählen Sie `rescue-customer`{.action} aus.

Geben Sie eine alternative E-Mail-Adresse an, wenn Sie *nicht* möchten, dass die Login-Daten an die Hauptadresse Ihres OVHcloud Kunden-Accounts gesendet werden.

![MegaRAID](images/rescue_mode_raid0_2.png){.thumbnail}

Klicken Sie auf `Weiter`{.action} um fortzufahren, und dann auf `Bestätigen`{.action}.

![MegaRAID](images/rescue_mode_raid0_3.png){.thumbnail}

Wenn die Änderung abgeschlossen ist, klicken Sie auf `...`{.action} rechts neben `Status` im Bereich **Dienststatus**.

Wählen Sie `Neu starten`{.action} aus, um den Server im Rescue-Modus zu starten. Die Durchführung dieser Operation kann einige Minuten dauern. 

![MegaRAID](images/server_installation_raid0_6.png){.thumbnail}

Sobald Ihr Server neu gestartet wurde, loggen Sie sich via SSH unter Verwendung Ihrer Zugangsdaten zum Rescue-Modus ein. Diese wurden Ihnen an die Haupt-E-Mail-Adresse des Kunden-Accounts oder gegebenenfalls an die zuvor angegebene E-Mail-Adresse gesendet.

Geben Sie in der Kommandozeile die folgenden Befehle ein, um die bestehenden RAID-Einstellungen zu löschen. Alle RAID-Daten werden gelöscht.

```sh
MegaCli -CfgLdDel -L0 -a0
MegaCli -CfgLdDel -Lall -aAll
```

Geben Sie folgenden Befehl ein, um die Standortdaten Ihrer Disks abzurufen:

```sh
MegaCli -PdList -aALL | egrep "Slot|Device ID"
```

Geben Sie folgenden Befehl ein, um RAID 0 zu konfigurieren:

```sh
MegaCli -CfgLDAdd -R0[252:0,252:1] -a0
```

In diesem Beispiel ist 252 die Kennung des Plattengehäuses.

Nachdem Sie den neuen RAID-Level festgelegt haben, können Sie die Einstellungen mit folgendem Befehl überprüfen:

```sh
MegaCli -LDInfo -Lall -a0 | grep -i size
```

## Weiterführende Informationen

[Hot Swap - RAID Hard](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_hard)

[Hot Swap - RAID Soft](/pages/bare_metal_cloud/dedicated_servers/hotswap_raid_soft)

[Hardware-RAID verwalten](/pages/bare_metal_cloud/dedicated_servers/raid_hard)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.