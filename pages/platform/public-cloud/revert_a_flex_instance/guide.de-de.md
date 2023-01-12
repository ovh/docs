---
title: Revertierung einer Flex-Instanz
slug: revertieren-einer-flex-instanz
excerpt: Erfahren Sie hier, wie Sie eine Flex-Instanz über OpenStack Horizon zurücksetzen können
section: Horizon
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 10.12.2021**

## Ziel

Eine Flex-Instanz beruht auf einer Single-Size-Disk (50GB), die einen schnelleren Prozess für Snapshots bietet. Das ermöglicht ein Wechseln auf ein höheres oder niedrigeres Modell mit festem Speicherplatz, während reguläre Instanzen nur auf ein höheres Modell skaliert werden können.

Wenn sich Ihre Infrastruktur weiterentwickelt, müssen Sie unter Umständen den Speicherplatz Ihrer Instanz erhöhen. In diesem Fall kann eine Flex-Instanz auf ein klassisches Modell zurückgesetzt werden (Revertierung). Diese Aktion kann nur über das Horizon Interface durchgeführt werden.

**Diese Anleitung erklärt, wie Sie eine Flex-Instanz über das OpenStack Horizon Interface zurücksetzen und ihre Größe verändern können.**

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen) mit der Flex-Option.
- Sie haben Zugriff auf das [Horizon Interface](https://docs.ovh.com/de/public-cloud/horizon/).

## In der praktischen Anwendung

Loggen Sie sich ins [Horizon Interface](https://horizon.cloud.ovh.net/auth/login/) ein wählen Sie oben links die korrekte Region aus.

![Region selection](images/region2021.png){.thumbnail}

Klicken Sie links im Menü auf `Compute`{.action} und wählen Sie dann `Instances`{.action} aus. Wählen Sie `Resize Instance`{.action} im Drop-down-Menü rechts neben der betreffenden Instanz aus. 

![Resize instance](images/resizeinstance2021.png){.thumbnail}

**Wahl des Templates (*Flavor Choice*)** <a name="flavorchoice"></a>

Dieser Abschnitt zeigt das aktuelle Template (*old flavor*) an und erlaubt es Ihnen, das neue Template (*new flavor*) für die Instanz auszuwählen.

In diesem Beispiel ist der *flavor* "b2-15-flex". Sie können dann entweder auf "b2-15" zurücksetzen oder zu "b2-30" upgraden. Hier wird die Instanz auf das klassische Modell "b2-30" aktualisiert.

![choose new flavor](images/confirmflavor.png){.thumbnail}

> [!warning]
> - Sie können nicht von einem Linux-Modell auf ein Windows-Modell oder umgekehrt wechseln.
>
> - Die Flex-Option ist nicht für alle Modelle verfügbar.
>

**Erweiterte Optionen (*Advanced Options*)**

In diesem Bereich können Sie die Partitionierung der Disk (*Disk Partition*) und die Servergruppe (*Server Group*) einrichten.

![public-cloud](images/resize_advanced.png){.thumbnail}

Wenn die Konfiguration abgeschlossen ist, klicken Sie auf `Resize`{.action}.

Mit dem Abschluss der Prozedur ist die Instanz in ein klassisches Modell mit einem größeren Speicherplatz umgewandelt.

![Neuer Geschmack](images/newflavor.png){.thumbnail}

Falls Sie wieder zu einem Flex-Modell wechseln möchten, können Sie dies tun, indem Sie die gleichen Schritte wie [oben](#flavorchoice) ausführen und ein Flex-Modell anstelle eines klassischen Modells auswählen. 

Alternativ können Sie auch im OVHcloud Kundencenter [die Konfiguration der Instanz bearbeiten](https://docs.ovh.com/de/public-cloud/die_ersten_schritte_mit_ihrer_public_cloud_instanz/#die-konfiguration-einer-instanz-bearbeiten).

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
