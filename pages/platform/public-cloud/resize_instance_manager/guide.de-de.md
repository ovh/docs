---
title: Änderung der Größe einer Instanz
excerpt: Erfahren Sie hier, wie Sie die Größe einer Instanz in OVHcloud Kundencenter
slug: resize-an-instance-manager
section: Verwaltung im OVHcloud Kundencenter
order: 06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 25.08.2022**

## Ziel

Durch einen Anstieg der Last oder aufgrund neuer Anforderungen kann es mit der Zeit dazu kommen, dass die Ressourcen Ihrer Instanz nicht mehr ausreichen. Bei der Public Cloud können Sie in diesem Fall einfach mit einigen Klicks die Ressourcen Ihrer Instanz erhöhen.

**Diese Anleitung erklärt die Vorgehensweise zur Änderung der Größe Ihrer Instanz über den OVHcloud Kundencenter.**

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
- Sie haben Zugriff auf das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus. Klicken Sie im linken Menü auf `Instances`{.action}.

Klicken Sie in der Instanzenverwaltung auf `...`{.action} rechts neben der Instanz und wählen Sie `Bearbeiten`{.action}.

![public-cloud](images/editinstance.png){.thumbnail}

Scrollen Sie auf dem neuen Tab zum Abschnitt **Modell**, um die gewünschte Vorlage auszuwählen.

![public-cloud](images/template.png){.thumbnail}

> [!primary]
>
> Bei klassischen Modellen können Sie auf jedes Modell mit gleicher oder größerer Disk umstellen. Sie können nicht zu einem Modell mit einer kleineren Disk wechseln.<br/>
>
> Nur **flexible** Instanzen können aktualisiert und degradiert werden, wobei eine feste Größe von 50 GB beibehalten wird.
>

Wenn die Größe der Disk 50 GB oder weniger beträgt, können Sie auf eine `Flexible Instanz`{.action} wechseln, wenn Sie möchten.

> [!warning]
> Achtung, wenn Sie eine Instanz vom Typ *Flex* bearbeiten, können Sie nicht über das Kundencenter auf eine klassische Instanz umstellen. Weitere Informationen finden Sie in unserer Anleitung [Revertierung einer Flex-Instanz](https://docs.ovh.com/de/public-cloud/revertieren-einer-flex-instanz/).
>

Wenn Sie die Auswahl vorgenommen haben, klicken Sie auf `Modell ändern`{.action} um Ihre Auswahl zu bestätigen.

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
