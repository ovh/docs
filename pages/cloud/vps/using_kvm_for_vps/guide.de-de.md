---
title: Verwendung der KVM-Konsole für VPS
excerpt: Erfahren Sie hier, wie Sie mit der KVM-Funktion auf Ihren VPS zugreifen können
slug: verwendung_von_kvm_fur_vps
section: Erste Schritte
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 05.09.2020**

## Ziel

Die KVM-Konsole ermöglicht eine direkte Verbindung zu Ihrem VPS, ohne externe Software (Terminal, Putty usw.) installieren zu müssen. Diese Konsole ist sowohl über unser OVHcloud Kundencenter als auch die OVHcloud API zugänglich.  

**Diese Anleitung erläutert die zwei Zugangsmethoden für KVM.**

## Voraussetzungen

- Sie haben einen [VPS](https://www.ovhcloud.com/de/vps/) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Verbindung zu KVM über das OVHcloud Kundencenter

#### Aktuelle VPS Reihe

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie unter `Virtual Private Server`{.action} Ihren Server aus. Klicken Sie auf dieser Seite auf `...`{.action} rechts neben dem Namen Ihres VPS im Abschnitt “Ihr VPS”.

![KVM](images/kvm-new1.png){.thumbnail}

#### Vorherige VPS Reihe

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Bare Metal Cloud`{.action} und wählen Sie unter `Virtual Private Server`{.action} Ihren Server aus. Klicken Sie hier auf den Shortcut `KVM`{.action}.

![KVM Shortcut](images/kvm-new2.png){.thumbnail}

### Verwendung der KVM-Konsole

Der Bildschirm der KVM-Konsole öffnet sich. Dies ist ein kleines Fenster, das die Verbindung mit Ihrem Server anzeigt. Da das Fenster recht klein ist, kann die Navigation im Interface Ihres Servers mithilfe der Scrollbalken schwierig sein. Wie empfehlen Ihnen daher, KVM in einem neuen Fenster in voller Bildschirmgröße zu öffnen. Nutzen Sie dazu den Button “In einem neuen Fenster öffnen” unten rechts im Dialogfenster.

> [!primary]
>
> Etwaige Probleme mit doppelter Erfassung können von der automatischen Einstellung des Bildschirms herrühren. Wie empfehlen Ihnen, KVM in einem neuen Fenster zu öffnen. Nutzen Sie dazu den Button “In einem neuen Fenster öffnen”.
>
> Wenn die Probleme mit dem Bildschirm andauern, löschen Sie aus der URL den Teil “auto”. Lautet die URL https://compute.sbg1.cloud.ovh.net:6080/vnc_auto.html?token=xxxxxxxxxxxx, muss sie also danach https://compute.sbg1.cloud.ovh.net:6080/vnc.html?token=xxxxxxxxxxxx sein. (Der Link kann für Sie anders aussehen. Hier wird nur am Beispiel verdeutlicht, welcher Teil der URL zu löschen ist.)
>

![Verbindung mit KVM](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> Die Tastaturbelegung kann von der Ihrigen abweichen. Bitte überprüfen Sie dies. Die Tastatur kann beispielsweise auf AZERTY statt QWERTY eingestellt sein.
>

### Verbindung mit der KVM-Konsole über die API

Es kann zu Problemen bei der Verbindung mit KVM über Ihr OVHcloud Kundencenter kommen, insbesondere wenn Sie ältere Versionen nutzen. In diesem Fall steht Ihnen die API als Lösung zur Verfügung. Verbinden Sie sich dazu zunächst über das [OVHcloud API](https://api.ovh.com/) Interface.

#### Auf einem VPS 2014

Wenn Sie einen VPS 2014 nutzen, stellen Sie vielleicht einen *Fehler 1006* fest. Das Problem kann umgangen werden, indem Sie die API mit folgenden Aufruf nutzen:

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>
> Parameter für den API Aufruf:
>
>> serviceName \*
>>> ID Ihres VPS. Sie sieht so aus: vpsxxxxx.ovh.net
>> Protokoll
>>> VNC

Trotz positiver Rückmeldung der API kann es vorkommen, dass der Aufbau der Verbindung ein bis zwei Minuten dauert, bis der Port auch tatsächlich geöffnet ist.

Wie empfehlen Ihnen, einen der folgenden Clients zu verwenden:

- [UltraVnc](https://www.uvnc.com/downloads/ultravnc.html){.external}
- [VNC Viewer](https://www.realvnc.com/en/connect/download/viewer/){.external}

Stellen Sie eine Remote-Verbindung mit dem VPS her. Nutzen Sie dafür die Informationen aus dem API Aufruf und einen der oben genannten Clients.

#### Auf einem VPS 2016

Bei Problemen mit der KVM-Konsole ist dies die empfohlene Verbindungsmethode:

> [!api]
>
> @api {POST} /vps/{serviceName}/getConsoleUrl
>
> Parameter für den API Aufruf:
>
>> serviceName \*
>>> ID Ihres VPS. Sie sieht so aus: vpsxxxxx.ovh.net
>

> [!primary]
>
> Wenn die Probleme mit dem Bildschirm andauern, löschen Sie aus der URL den Teil “auto”. Lautet die URL https://compute.sbg1.cloud.ovh.net:6080/vnc_auto.html?token=xxxxxxxxxxxx, muss sie also danach https://compute.sbg1.cloud.ovh.net:6080/vnc.html?token=xxxxxxxxxxxx sein. (Der Link kann für Sie anders aussehen. Hier wird nur am Beispiel verdeutlicht, welcher Teil der URL zu löschen ist.)
>

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
