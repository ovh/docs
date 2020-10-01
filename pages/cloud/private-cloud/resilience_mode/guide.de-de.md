---
title: 'Resilienz-Modus verwenden'
slug: resilienz-modus
excerpt: 'Erfahren Sie hier, wie Sie den Resilienz-Modus von OVHcloud verwenden'
legacy_guide_number: '7766742'
section: OVHcloud Funktionen
---

**Letzte Aktualisierung am 09.01.2019**

## Ziel

Der Resilienz-Modus ist ein von OVHcloud entwickeltes Tool, das eine Störung auf Ihren Host-Servern (_Hosts_) simuliert. So können Sie überprüfen, dass ein *High-Availability-* (HA) oder *Fault-Tolerance-* (FA) System in Ihrem Cluster in der **Entwicklungsumgebung** korrekt funktioniert.

**Diese Anleitung erklärt, wie der Resilienz-Modus funktioniert.**

## Voraussetzungen

- Sie verfügen über eine [Hosted Private Cloud](https://www.ovhcloud.com/de/enterprise/products/hosted-private-cloud/) Infrastruktur.
- Sie haben Zugriff auf das vSphere-Verwaltungsinterface.


## In der praktischen Anwendung

Stellen Sie zunächst sicher, dass die folgenden Voraussetzungen erfüllt sind:

- Der Host-Server ist Teil eines Clusters.
- Die *High-Availability-*Option ist aktiviert.
- Ein weiterer Host-Server ist im Cluster verfügbar und funktionsfähig.

> [!warning]
>
> Hierbei handelt es sich um einen Test für eine **Entwicklungsumgebung**. Führen Sie diesen Vorgang nicht in einer **Produktionsumgebung** durch.
> 


### Resilienz-Modus aktivieren

Nachdem Sie sich im vSphere-Interface eingeloggt haben, gehen Sie zum Inventar Ihrer Host-Server und Cluster. Wählen Sie den betreffenden Host-Server mit einem Rechtsklick aus. Klicken Sie dann auf `OVH Private Cloud`{.action} und anschließend auf `Resilience`{.action}.

![Rechtsklick zur Aktivierung des Resilienz-Modus](images/resilience_01.png){.thumbnail}

Wenn Sie überprüft haben, dass alle Voraussetzungen erfüllt sind, klicken Sie auf den Button `Next`{.action}.

![Überprüfen der Voraussetzungen und Bestätigung](images/resilience_02.png){.thumbnail}

Um den Test zu starten, müssen zunächst die Nutzungsbedingen akzeptiert werden. Nachdem Sie einen Haken im Feld `I accept the terms of the failure simulation agreement`{.action} gesetzt haben, klicken Sie auf den Button `Next`{.action}.

![Akzeptieren der Nutzungsbedingungen](images/resilience_03.png){.thumbnail}

Ihre Aktivierungsanfrage wurde registriert und wird nun ausgeführt.

![Aktivierung des Resilienz-Modus wird ausgeführt](images/resilience_04.png){.thumbnail}

In ein paar Minuten ist der Host-Server nicht länger verfügbar.

![Host nicht verfügbar](images/resilience_05.png){.thumbnail}


### Resilienz-Modus deaktivieren

Um die Simulation zu beenden, klicken Sie erneut auf den Resilienz-Modus.

![Simulation beenden](images/resilience_06.png){.thumbnail}

Ihre Deaktivierungsanfrage wurde registriert und wird nun ausgeführt.

![Deaktivierung des Resilienz-Modus wird ausgeführt](images/resilience_07.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
