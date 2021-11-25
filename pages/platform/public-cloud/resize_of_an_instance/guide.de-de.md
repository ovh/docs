---
title: Änderung der Größe einer Instanz
excerpt: Änderung der Größe einer Instanz in Horizon
slug: nderung_der_groe_einer_instanz
section: 'Horizon'
legacy_guide_number: g1778
order: 08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 23.11.2021**

## Ziel

Durch einen Anstieg der Last oder aufgrund neuer Anforderungen kann es mit der Zeit dazu kommen, dass die Ressourcen Ihrer Instanz nicht mehr ausreichen. Bei der Public Cloud können Sie in diesem Fall einfach mit einigen Klicks die Ressourcen Ihrer Instanz erhöhen.

**In dieser Anleitung wird die Vorgehensweise zur Änderung der Größe Ihrer Instanz über den OpenStack Horizon Manager beschrieben.**

> [!warning]
>
> Bei klassischen Modellen ist nur die Umstellung auf ein größeres Modell möglich.
> Darüber hinaus wird die Instanz während der Operation unterbrochen.
> 

> [!success]
>
> *Flex*-Instanzen erlauben die Anpassung auf höhere oder niedrigere Modelle aufgrund einer geschlossenen Größe einer einzelnen Disc.
> 

## Voraussetzungen

- Sie haben eine [Public Cloud Instanz](https://docs.ovh.com/de/public-cloud/public-cloud-erste-schritte/#schritt-3-instanz-erstellen) in Ihrem OVHcloud Account erstellt
- [Sie sind im Horizon-Interface eingeloggt](../erstellung_einer_instanz_in_horizon/)

## In der praktischen Anwendung

Greifen Sie auf das [Horizon-Interface](https://horizon.cloud.ovh.net/auth/login/) an und stellen Sie sicher, dass Sie sich in der richtigen Region befinden. Sie können dies in der oberen linken Ecke überprüfen.</br>
Klicken Sie links im Menü `Compute` {.action} und wählen Sie dann `Instances` {.action} aus. Wählen Sie `Resize Instance` {.action} im Drop-down-Menü rechts neben der betreffenden Instanz aus.

![Resize instance](images/resizeinstance2021.png){.thumbnail}

### Wahl des Templates (*Flavor Choice*)

Dieser Abschnitt zeigt die aktuelle Template (*old flavor*) an und erlaubt es Ihnen, eine neue Template (*new flavor*) für die Ressource der Instanz auszuwählen.

![public-cloud](images/flavorchoice.png){.thumbnail}

#### Details der Templates (*Flavor Details*)

In diesem Abschnitt werden die Ressourcen angezeigt, die der gewählten Template zugeordnet sind. 

#### Grenzen des Projekts (*Project Limits*)

Sehen Sie hier die belegten Ressourcen im Vergleich zu den gesamten Projektressourcen.

> [!warning]
> Bitte beachten Sie, dass Sie eine Instanz nur von einem Linux-Modell auf ein anderes Linux-Modell und von einem Windows-Modell auf ein anderes Windows-Modell anpassen können.
>

### Erweiterte Optionen (*Advanced Options*)

In diesem Bereich können Sie die Partitionierung der Festplatte (*Disk Partition*) und der Servergruppe (*Server Group*) verwalten.

![public-cloud](images/resize_advanced.png){.thumbnail}

Wenn die Konfiguration abgeschlossen ist, klicken Sie auf `Resize`{.action}.

### Änderung der Größe der Festplatte unter Windows

Achtung, bei einer Größenanpassung für eine Windows-Instanz wird die Größe der Partition nicht automatisch geupdatet, die Partition muss also über den Festplattenmanager **disk manager**:

- Klicken Sie mit der rechten Maustaste auf `Start`{.action} und starten Sie den Festplattenmanager, indem Sie auf `Disk Management`{.action}:

![public-cloud](images/2980.png){.thumbnail}

- Klicken Sie mit der rechten Maustaste auf die Hauptpartition und klicken Sie dann auf `Extend Volume`{.action}.

![public-cloud](images/2981a.png){.thumbnail}

- Klicken Sie auf `Next`{.action}, um auf `Extend Volume Wizard` zuzugreifen. Wählen Sie die Ressourcen der zu erweiternden Festplatte aus und klicken Sie auf `Next`{.action}. 

![public-cloud](images/2978a.png){.thumbnail}

Klicken Sie anschließend auf `Finish`{.action}, um Ihre Auswahl zu bestätigen.

![public-cloud](images/wizard2021.png){.thumbnail}

- DBestätigen Sie die Erweiterung der Partition:

![public-cloud](images/2979.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.