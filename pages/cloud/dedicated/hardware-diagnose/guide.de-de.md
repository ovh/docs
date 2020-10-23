---
title: 'Hardwarefehler auf einem dedizierten Server erkennen'
slug: diagnose-hardwarefehler-dedicated-server
excerpt: 'So ermitteln Sie Hardwarefehler auf Ihrem Server'
section: Diagnose & Rescue Modus
---

**Stand 12.09.2018**

## Einleitung


Mit der Zeit kann es bei Ihrem Server zu Hardwarefehlern kommen, die Fehlfunktionen verursachen. Aus diesem Grund ist Ihr Server mit verschiedenen Diagnose-Tools ausgestattet, um beschädigte Hardwarekomponenten zu ermitteln.

**In dieser Anleitung erfahren Sie, wie Sie Hardwarefehler auf Ihrem Server erkennen.**


## Voraussetzungen

* Sie verfügen über einen [dedizierten Server](https://www.ovh.de/dedicated_server/){.external}.
* Sie haben den Server im [Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/){.external} neu gestartet.


## Beschreibung

### Das Webinterface verwenden

Nachdem Sie Ihren Server im [Rescue-Modus](https://docs.ovh.com/de/dedicated/ovh-rescue/) neu gestartet haben, erhalten Sie eine E-Mail mit den zugehörigen Login-Daten. Die E-Mail enthält außerdem einen Link zum Webinterface des Rescue-Modus. Dieser sieht ungefähr so aus: *https://IP_des_servers:444*.

Wenn Sie auf den Link geklickt haben, werden Sie zum Webinterface weitergeleitet (siehe Grafik).

![Webinterface](images/rescue-mode-04.png){.thumbnail}


### Hardwaretests durchführen

Klicken Sie im Webinterface auf den Button `Alle Tests starten`{.action}, um gleichzeitig alle verfügbaren Hardwaretests durchzuführen.

![Alle Tests starten](images/rescue-mode-042.png){.thumbnail}


### Verschiedene Hardwaretests durchführen

Sie können über das Webinterface spezielle Tests für die folgenden Komponenten vornehmen:

- Prozessoren
- Netzwerkverbindung
- RAM
- Festplattenpartitionen

Sie können sich auch die SMART-Logs Ihrer Server anzeigen lassen, die detaillierte Informationen zu den Festplatten enthalten.

 
#### Prozessoren

Der Prozessortest überprüft, ob der Prozessor Ihres Servers korrekt funktioniert und benötigt etwa 30 Minuten, bis er abgeschlossen ist. Wenn der Server während des Tests abstürzt, ist der Prozessor beschädigt.

Um diesen Test zu starten, klicken Sie auf den entsprechenden Button `Test starten`{.action} (siehe Abbildung).

![Test des Prozessors](images/processors.png){.thumbnail}

#### Netzwerkverbindung

Der Netzwerktest überprüft Ihre interne und externe Bandbreite. Um diesen Test zu starten, klicken Sie auf den entsprechenden Button `Test starten`{.action} (siehe Abbildung).

![Netzwerktest](images/network-connection.png){.thumbnail}

#### RAM

Der Arbeitsspeichertest überprüft alle RAM-Module Ihres Servers. Wenn der Server während des Tests abstürzt, ist mindestens ein RAM-Modul beschädigt.

Um diesen Test zu starten, klicken Sie auf den entsprechenden Button `Test starten`{.action} (siehe Abbildung).

![Arbeitsspeichertest](images/memory.png){.thumbnail}

#### Festplattenpartitionen

Der Partitionstest umfasst einen Zugriffstest der Festplatte und überprüft das Dateisystem. Der Zugriffstest prüft, ob das System mit den Festplatten Ihres Server kommunizieren kann. Die Überprüfung des Dateisystems führt den Befehl `fsck -fy` aus.

> [!warning]
>
> Die Überprüfung des Dateisystems auf einer beschädigten Festplatte kann zu Datenverlust führen.
>

![Festplattentest](images/partitions.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
