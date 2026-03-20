---
title: Instanzgröße über das OVHcloud Kundencenter ändern
excerpt: "Erfahren Sie, wie Sie eine Public Cloud Instanz über das OVHcloud Kundencenter skalieren"
updated: 2026-03-04
---

## Ziel

Wenn Ihre Instanz aufgrund erhöhter Aktivität oder neuer Anforderungen nicht mehr über ausreichende Ressourcen verfügt, können Sie diese mit wenigen Klicks über die Public Cloud erhöhen.

**Diese Anleitung erklärt, wie Sie die Größe Ihrer Instanz über das OVHcloud Kundencenter ändern.**

> [!warning]
>
> Bei klassischen Modellen ist nur die Umstellung auf ein größeres Modell möglich.
> Beachten Sie, dass die Instanz während der Operation unterbrochen wird.
>

> [!success]
>
> *Flex*-Instanzen erlauben die Anpassung auf höhere oder niedrigere Modelle aufgrund einer festen Einzeldiskgröße.
>

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](/links/public-cloud/public-cloud) in Ihrem OVHcloud Account.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public Cloud Projekte](/links/control-panel/publiccloud-projects)
- **Navigationspfad:** `Public Cloud`{.action} > Wählen Sie Ihr Projekt aus

---
<!-- CP-NAV-END:publiccloud-projects -->

## In der praktischen Anwendung

Klicken Sie im linken Menü auf `Instanzen`{.action}.

Klicken Sie auf `...`{.action} rechts neben der Instanz und wählen Sie `Bearbeiten`{.action}. Sie können auch über die Instanzdetails auf diese Aktion zugreifen, indem Sie auf den Namen der Instanz und dann auf `Modell ändern`{.action} klicken.

Scrollen Sie im neuen Tab zum Abschnitt **Modell**, um das gewünschte Modell auszuwählen.

> [!primary]
>
> Bei klassischen Modellen können Sie auf jedes Modell mit gleicher oder größerer Disk umstellen. Sie können nicht auf ein Modell mit kleinerer Disk wechseln.<br/>
>
> Nur **flexible Instanzen** können auf ein höheres oder niedrigeres Modell umgestellt werden, wobei eine feste Diskgröße von 50 GB beibehalten wird.
>

Wenn Ihre Disk 50 GB oder weniger beträgt, können Sie bei Bedarf auf eine `Flexible Instanz`{.action} wechseln.

> [!warning]
> Wenn Sie eine Instanz vom Typ *Flex* bearbeiten, ist es nicht möglich, über das Kundencenter auf eine klassische Instanz zurückzuwechseln. Weitere Informationen finden Sie in unserer Anleitung [Eine Flex-Instanz auf eine klassische Instanz zurücksetzen](/pages/public_cloud/compute/revert_a_flex_instance).
>

Klicken Sie nach der Auswahl auf `Modell ändern`{.action}, um Ihre Auswahl zu bestätigen.

### Änderung der Diskgröße unter Windows

Bei einer Größenanpassung einer Windows-Instanz wird die Partitionsgröße nicht automatisch aktualisiert. Sie müssen diese über die **Datenträgerverwaltung** erweitern:

- Klicken Sie mit der rechten Maustaste auf das Menü `Start`{.action} und öffnen Sie die Datenträgerverwaltung, indem Sie auf `Disk Management`{.action} klicken:

![Kontextmenü des Startmenüs mit der Option Datenträgerverwaltung](images/2980.png){.thumbnail}

- Klicken Sie mit der rechten Maustaste auf die Hauptpartition und dann auf `Extend Volume`{.action}.

![Rechtsklick auf die Hauptpartition zum Erweitern des Volumes](images/2981a.png){.thumbnail}

- Klicken Sie im `Extend Volume Wizard` auf `Next`{.action}. Wählen Sie die Ressourcen der zu erweiternden Disk aus und klicken Sie auf `Next`{.action}.

![Extend Volume Wizard mit Auswahl der Diskressourcen](images/2978a.png){.thumbnail}

Klicken Sie abschließend auf `Finish`{.action}, um die Änderung zu bestätigen.

![Abschlussschritt des Extend Volume Wizard](images/wizard2021.png){.thumbnail}

- Die neue Diskgröße wird in der Datenträgerverwaltung angezeigt.

![Datenträgerverwaltung mit der neuen Diskgröße](images/2979.png){.thumbnail}

## Weiterführende Informationen

Treten Sie unserer [User Community](/links/community) bei.