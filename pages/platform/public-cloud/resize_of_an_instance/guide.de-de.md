---
title: Änderung der Größe einer Instanz mit Horizon
excerpt: Erfahren Sie hier, wie Sie die Größe einer Instanz in Horizon ändern
slug: nderung_der_groe_einer_instanz
section: 'Horizon'
order: 08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 23.11.2021**

## Ziel

Durch einen Anstieg der Last oder aufgrund neuer Anforderungen kann es mit der Zeit dazu kommen, dass die Ressourcen Ihrer Instanz nicht mehr ausreichen. Bei der Public Cloud können Sie in diesem Fall einfach mit einigen Klicks die Ressourcen Ihrer Instanz erhöhen.

**Diese Anleitung erklärt die Vorgehensweise zur Änderung der Größe Ihrer Instanz über den OpenStack Horizon Manager.**

> [!warning]
>
> Bei klassischen Modellen ist nur die Umstellung auf ein größeres Modell möglich.
> Beachten Sie weiterhin, dass der Betrieb der Instanz während der Operation unterbrochen wird.
> 

> [!success]
>
> *Flex*-Instanzen erlauben die Anpassung auf höhere oder niedrigere Modelle aufgrund einer festen Größe einer einzelnen Disk.
> 

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen) in Ihrem Kunden-Account.
- Sie haben Zugriff auf das [Horizon Interface](https://docs.ovh.com/de/public-cloud/horizon/).

## In der praktischen Anwendung

Loggen Sie sich ins [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) ein wählen Sie oben links die korrekte Region aus.</br>
Klicken Sie links im Menü auf `Compute`{.action} und wählen Sie dann `Instances`{.action} aus. Wählen Sie `Resize Instance`{.action} im Drop-down-Menü rechts neben der betreffenden Instanz aus.

![Resize instance](images/resizeinstance2021.png){.thumbnail}

### Wahl des Templates (*Flavor Choice*)

Dieser Abschnitt zeigt das aktuelle Template (*old flavor*) an und erlaubt es Ihnen, das neue Template (*new flavor*) für die Instanz auszuwählen.

![public-cloud](images/flavorchoice.png){.thumbnail}

#### Ressourcen für das Template (*Flavor Details*)

In diesem Abschnitt werden die Ressourcen angezeigt, die dem gewählten Modell zugeordnet sind. 

#### Limitierungen des Projekts (*Project Limits*)

Hier sehen Sie die belegten Ressourcen im Vergleich zur Gesamtverfügbarkeit.

> [!warning]
> Bitte beachten Sie, dass Sie nicht von einer Linux-Instanz auf ein Windows-Modell oder umgekehrt wechseln können.
>

### Erweiterte Optionen (*Advanced Options*)

In diesem Bereich können Sie die Partitionierung der Festplatte (*Disk Partition*) und die Servergruppe (*Server Group*) einrichten.

![public-cloud](images/resize_advanced.png){.thumbnail}

Wenn die Konfiguration abgeschlossen ist, klicken Sie auf `Resize`{.action}.

### Änderung der Größe einer Disk unter Windows

Achtung, bei einer Größenanpassung einer Windows-Instanz wird die Größe der Partition nicht automatisch geupdatet. Die Partition muss also über die Datenträgerverwaltung (**Disk Management**) angepasst werden.

- Klicken Sie mit der rechten Maustaste auf den Windows `Start`{.action} Button und öffnen Sie die Datenträgerverwaltung, indem Sie auf `Disk Management`{.action} klicken.

![public-cloud](images/2980.png){.thumbnail}

- Klicken Sie rechts auf die Hauptpartition und klicken Sie dann auf `Extend Volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

- Klicken Sie im `Extend Volume Wizard` auf `Next`{.action}. Wählen Sie dann die Ressourcen der zu erweiternden Disk aus und klicken Sie auf `Next`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Klicken Sie abschließend auf `Finish`{.action}, um die Änderung zu bestätigen.

![public-cloud](images/wizard2021.png){.thumbnail}

- Die neue Partitionsgröße wird nun in der Datenträgerverwaltung angezeigt.

![public-cloud](images/2979.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
