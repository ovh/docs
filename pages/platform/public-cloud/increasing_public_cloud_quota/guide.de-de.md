---
title: 'Public Cloud Quote erhöhen'
excerpt: 'Erfahren Sie hier, wie Sie eine Erhöhung Ihrer Kontingente für Public Cloud beantragen'
slug: increase-public-cloud-quota
legacy_guide_number: 1904
section: Projektverwaltung
order: 6
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 25.10.2021**

## Ziel

Standardmäßig ist die Anzahl der Ressourcen (RAM, CPU, Speicherplatz, Anzahl der Instanzen, etc.) und der Projekte, die Sie erstellen können, begrenzt.

Um zusätzliche Ressourcen und Instanzen nutzen zu können, müssen deren Quotas erhöht werden.

**Diese Anleitung erklärt, wie Sie über Ihr OVHcloud Kundencenter eine Erhöhung von Public Cloud Quotas anfordern.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben eine [gültige Zahlungsart](../../billing/zahlungsarten-verwalten/) in Ihrem OVHcloud Kundencenter hinterlegt.

## In der praktischen Anwendung

### Erhöhung der Ressourcenquote

Gemäß interner Kriterien (Dienstalter, bezahlte Rechnungen usw.) können Sie direkt vom OVHcloud Kundencenter aus Quotenerhöhungen für Ihre Public Cloud-Projekte beantragen.

Sie können Ihre Ressourcenquote manuell oder automatisch erhöhen.

#### Manuelle Erhöhung der Ressourcenquote

Dieses Verfahren ermöglicht Ihnen, eine Quotenerhöhung manuell anzufordern und mit einer Vorauszahlung (Public Cloud Credit) zu bestätigen.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie Ihr `Public Cloud`{.action} Projekt aus.

Klicken Sie im linken Menü auf `Quota and Regions`{.action}.

![access quota](images/raisepciquota2021.png){.thumbnail}

Diese Seite bietet einen Überblick über die Regionen und ihre verfügbaren Ressourcen. Eine Warnung wird neben einer Ressource angezeigt, sobald 80 % ihrer derzeitigen Quote erreicht sind.

Um eine Quota-Erhöhung zu beantragen, klicken Sie auf `Quota erhöhen`{.action}.

![raise-pci-quota](images/raisepciquota2021b.png){.thumbnail}

Klicken Sie dann auf den Dropdown-Pfeil neben "Wählen Sie die Menge aus", um die Liste der derzeit verfügbaren Kontingente anzuzeigen, auf die Sie Ihre Ressourcen aktualisieren können. In diesem Abschnitt wird auch der fällige Betrag angezeigt, um diese Ressourcen nutzen zu können.

![select quota](images/selectquotas.png){.thumbnail}

Die nachstehende Tabelle zeigt die Ressourcen, die Sie für jedes Kontingent erhalten:

|Quota|Instanzen|CPU/Cores|RAM|Größe Disk|Anzahl Disk|Snapshots|
|---|---|---|---|---|---|---|
|10 VMs|10|20|40GB|20TB|20|20|
|20 VMs|20|40|240GB|20TB|40|40|
|50 VMs|50|64|496GB|20TB|100|100|
|100 VMs|100|128|992GB|39TB|200|200|
|200 VMs|200|512|3.9TB|78TB|400|400|

Klicken Sie nach Auswahl der gewünschten Kapazität auf `Bestätigen`{.action}. Ihre Zahlung wird so schnell wie möglich bearbeitet.

> [!warning]
> Bitte beachten Sie, dass die Rechnungsstellung sofort erfolgt.
>
> Wenn Sie auf die Schaltfläche `Bestätigen`{.action} klicken, wird die Bestellung automatisch erstellt und Ihr Guthaben-Konto entsprechend belastet.
>

#### Automatisches Erhöhen der Ressourcenquote durch die Funktion "Quota Autoscaling"

Mit dieser Option können Sie eine automatische und schrittweise Erhöhung Ihrer Ressourcenquote anfordern. Ihre Quote wird abhängig von Ihrer Nutzung und auf der Grundlage einer Reihe interner Kriterien erhöht.

Dies ist kein sofortiger Prozess; die Ressourcenquote wird im Laufe der Zeit erhöht.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wechseln Sie zum Bereich `Public Cloud`{.action}.

Klicken Sie im linken Menü auf `Quota and Regions`{.action}.

Sie können auf den Button `?`{.action} klicken, um weitere Informationen zu dieser Funktion anzuzeigen. Klicken Sie dann auf den `Schieberegler`{.action}, um den Status auf "**Aktiviert**" zu setzen.

![auto scaling](images/autoscaling.png){.thumbnail}

Nach Abschluss des Vorgangs wird *Autoscaling* für Ihr Projekt aktiviert und Ihre Ressourcenquote wird im Laufe der Zeit erhöht.

### Erhöhung der Quote Ihrer Public Cloud-Projekte

Wenn Sie die maximale Anzahl an Public Cloud-Projekten in Ihrem Kunden-Account erreicht haben und weitere Projekte erstellen möchten, senden Sie bitte eine Anfrage an unsere Support-Teams.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
