---
title: 'Eine Instanz über das Horizon-Interface erstellen'
excerpt: 'Erfahren Sie hier, wie Sie eine Instanz über das Horizon-Interface erstellen'
slug: erstellung_einer_instanz_in_horizon
section: 'Horizon'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 02.08.2022**

## Ziel

Sie haben die Möglichkeit, Instanzen direkt über das Horizon-Interface zu erstellen. So können Sie beispielsweise mehrere Instanzen erzeugen oder eine Sicherheitsgruppe für Ihre Instanzen einrichten.

**Diese Anleitung erklärt, wie Sie eine Instanz über das Horizon-Interface erstellen.**

## Voraussetzungen

- Sie haben ein [Public Cloud](https://www.ovhcloud.com/de/public-cloud/){.external} Projekt in Ihrem OVHcloud Kunden-Account erstellt.
- Sie haben Zugang zum [Horizon-Interface](../horizon/). 

## In der praktischen Anwendung

Um eine Instanz zu erstellen, loggen Sie sich zunächst im Horizon-Interface ein. Wenn Sie hierbei Hilfe brauchen, lesen Sie unsere [Anleitung](../horizon/).

Klicken Sie dann im linken Menü auf `Compute`{.action} und anschließend auf `Instances`{.action}.

![Instanz erstellen](images/create-instance-step1.png){.thumbnail}

Auf der angezeigten Seite können Sie die bereits gestarteten Instanzen einsehen. Um eine neue Instanz zu starten, klicken Sie auf den Button `Launch Instance`{.action}.

![Instanz erstellen](images/create-instance-step2.png){.thumbnail}

Geben Sie dann die angeforderten Informationen ein. Falls Sie beim Ausfüllen der Felder Hilfe brauchen, verwenden Sie die nachstehende Tabelle. Bitte beachten Sie, dass die Tabelle nicht vollständig ist. 

|Information|Details|
|---|---|
|Availability Zone|Lassen Sie “nova” stehen (Standardauswahl)|
|Instance Name|Geben Sie den gewünschten Namen der Instanz ein|
|Flavor|Wählen Sie den Instanz-Typ aus|
|Count|Geben Sie die Anzahl der zu erstellenden Instanzen ein|
|Select Boot Source|Wählen Sie die Quelle für die Erstellung der Instanz aus (zum Beispiel Start von einem Image oder Start von einem Snapshot aus)|
|Device Name|Wählen Sie das Image der Instanz aus (nur beim Start von einem Image aus)|
|Instance Snapshot|Wählen Sie einen Snapshot einer Instanz aus (nur beim Start von einem Snapshot aus)|
|Key Pair|Wählen Sie einen SSH-Schlüssel für die Verbindung mit der Instanz aus (mit einem Klick auf das “+”-Symbol können Sie einen Schlüssel erstellen)|
|Security Groups|Geben Sie die Sicherheitsgruppe für die Instanz an (Berechtigung zum Öffnen von Ports)|
|Networks|Wählen Sie aus der Liste der verfügbaren Netzwerke das oder die Netzwerk(e) für die zu erstellende Instanz aus|
|Configuration|Geben Sie als Quelle “Direkteingabe” oder “Datei” an|
|Customization Script|Geben Sie den Skript-Code in das Eingabefeld ein (maximal 16 KB)|
|Load Customization Script from a file|Klicken Sie auf “Durchsuchen” und wählen Sie das Post-Installationsskript aus|
|Disk Partition|Wählen Sie zwischen “Automatisch” oder “Manuell”|
|Configuration Drive|Hier können Sie OpenStack so konfigurieren, dass die Metadaten auf eine bestimmte Konfigurationsfestplatte geschrieben werden, die beim Start an die Instanz angehängt wird|

> [!warning] 
>
> Obwohl das Feld "Key Pair" bei der Erstellung einer Instanz im Horizon-Interface nicht obligatorisch ist, ist die Speicherung eines SSH-Schlüssels notwendig, um sich mit einer Instanz verbinden zu können. Ohne SSH-Schlüssel müssen Sie die Instanz im Rescue-Modus neu starten, um ein Passwort zu erstellen oder einen SSH-Schlüssel in der entsprechenden Datei hinzuzufügen (Für weitere Informationen lesen Sie die Anleitung [Änderung des SSH-Schlüssels bei Verlust](../nderung_des_ssh_schlussels_bei_verlust/#in-der-praktischen-anwendung)).
>

Um die gewünschten Instanzen zu starten, klicken Sie auf den Button `Launch Instance`{.action}.

![Instanz erstellen](images/create-instance-step3.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
