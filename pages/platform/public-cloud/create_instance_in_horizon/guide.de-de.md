---
title: 'Eine Instanz über das Horizon-Interface erstellen'
excerpt: 'So erstellen Sie eine Instanz über das Horizon-Interface'
slug: erstellung_einer_instanz_in_horizon
section: 'Über das Horizon-Interface'
legacy_guide_number: g1772
---

**Stand 16.07.2019**

## Einleitung

Sie haben die Möglichkeit, Instanzen direkt über das Horizon-Interface zu erstellen. So können Sie beispielsweise mehrere Instanzen erstellen oder eine Sicherheitsgruppe für Ihre Instanzen einrichten.

**In dieser Anleitung erfahren Sie, wie Sie eine Instanz über das Horizon-Interface erstellen.**

## Voraussetzungen

- Sie haben ein [Public Cloud](https://www.ovh.de/public-cloud/){.external} Projekt über Ihren OVH Account erstellt.
- [Sie sind im Horizon-Interface eingeloggt](../erstellung_eines_zugangs_zu_horizon/){.external}. 

## Beschreibung

Um eine Instanz zu erstellen, loggen Sie sich zunächst im Horizon-Interface ein. Wenn Sie hierbei Hilfe brauchen, lesen Sie unsere Anleitung „[Auf das Horizon-Interface zugreifen](../erstellung_eines_zugangs_zu_horizon/){.external}“.

Klicken Sie dann im linken Menü auf `Compute`{.action} und anschließend auf `Instanzen`{.action}.

![Instanz erstellen](images/create-instance-step1.png){.thumbnail}

Auf der angezeigten Seite können Sie die bereits gestarteten Instanzen einsehen. Um eine neue Instanz zu starten, klicken Sie auf den Button `Instanz starten`{.action}.

![Instanz erstellen](images/create-instance-step2.png){.thumbnail}

Geben Sie dann die angeforderten Informationen ein. Falls Sie beim Ausfüllen der Felder Hilfe brauchen, lesen Sie die nachstehende Tabelle. Bitte beachten Sie, dass die Tabelle nicht vollständig ist. 

|Information|Details|
|---|---|
|Verfügbarkeitszone|Lassen Sie „nova“ stehen (Standardauswahl)|
|Instanzname|Geben Sie den gewünschten Namen der Instanz ein|
|Vorlage|Wählen Sie den Instanz-Typ aus|
|Anzahl|Geben Sie die Anzahl der zu erstellenden Instanzen ein|
|Boot-Quelle der Instanz|Wählen Sie die Quelle für die Erstellung der Instanz aus (zum Beispiel Start von einem Image/Abbild oder Start von einem Snapshot aus)|
|Abbildname|Wählen Sie das Image der Instanz aus (nur beim Start von einem Image/Abbild aus)|
|Instanz-Snapshot|Wählen Sie einen Snapshot einer Instanz aus (nur beim Start von einem Snapshot aus)|
|Schlüsselpaar|Wählen Sie einen SSH-Schlüssel für die Verbindung mit der Instanz aus (mit einem Klick auf das „+”-Symbol können Sie einen Schlüssel erstellen)|
|Sicherheitsgruppen|Geben Sie die Sicherheitsgruppe für die Instanz an (Berechtigung zum Öffnen von Ports)|
|Ausgewählte Netzwerke|Wählen Sie aus der Liste der verfügbaren Netzwerke das oder die Netzwerk(e) für die zu erstellende Instanz aus|
|Anpassungsskriptquelle|Geben Sie als Quelle „Direkteingabe“ oder „Datei“ an|
|Skript-Daten|Geben Sie den Skript-Code in das Eingabefeld ein (maximal 16 KB)|
|Skript-Datei|Klicken Sie auf „Durchsuchen” und wählen Sie das Post-Installationsskript aus|
|Festplattenpartition|Wählen Sie zwischen „Automatisch“ oder „Manuell“|
|Konfigurationslaufwerk|Hier können Sie OpenStack so konfigurieren, dass die Metadaten auf eine bestimmte Konfigurationsfestplatte geschrieben werden, die beim Start an die Instanz angehängt wird|

Sobald Sie bereit sind, um die gewünschten Instanzen zu starten, klicken Sie auf den Button `Starten`{.action}.

![Instanz erstellen](images/create-instance-step3.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.