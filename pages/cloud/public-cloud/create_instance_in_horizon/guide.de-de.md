---
title: Erstellung einer Instanz in Horizon
excerpt: Erstellung einer Instanz in Horizon
slug: erstellung_einer_instanz_in_horizon
legacy_guide_number: g1772
---


## 
In dieser Hilfe wird die Erstellung einer Instanz im OpenStack Horizon Manager beschrieben. So können Sie zum Beispiel auch mehrere Instanzen gleichzeitig erstellen oder bestimmte Sicherheitsgruppen für Ihre Instanzen konfigurieren.


## 
Um eine Instanz zu erstellen gehen Sie wie folgt vor:


- Verbinden Sie sich mit Horizon
- Klicken Sie in dem Menü auf der linken Seite auf Instanzen
- Klicken Sie auf Instanz starten
- Füllen Sie das Formular aus:



## Rubrik "Details"
Verwenden Sie folgende Angaben:

|Verfügbarkeitszone|Lassen Sie "nova" eingestellt (Standardeinstellung)|
|Instanzname|Geben Sie den gewünschten Namen für die zu erstellende Instanz an|
|VAriante|Wählen Sie den Typ der zu erstellenden Instanz aus|
|Instanzenanzahl|Geben Sie die Anzahl der zu erstellenden Instanzen an|
|Boot-Quelle der Instanz|Wählen Sie die Quelle für die Erstellung der Instanz aus (Start von einem Image /Abbild oder Start von einem Snapshot / Speicherauszug)|
|Instanzname|Wählen Sie das Image der Instanz aus (bei einem Start von einem Image aus)|
|Instanzspeicherauszug|Wählen Sie den Speicherauszug (Snapshot) einer Instanz aus (bei einem Start von einem Speicherauszug aus)|



## Rubrik "Zugriff und Sicherheit"
In dieser Rubrik können Sie einen SSH Schlüssel angeben und die Sicherheitsgruppe der Instanz auswählen.

|Schlüsselpaar|Wählen Sie einen SSH Schlüssel für die Verbindung mit der Instanz aus (mit einem Klick auf das "+" Symbol können Sie einen Schlüssel erstellen)|
|Sicherheitsgruppen|Wählen Sie die Sicherheitsgruppe für die Instanz aus (Erlaubnis zum Öffnen von Ports)|



## Rubrik "Netzwerk"
In dieser Rubrik können Sie angeben, mit welchen Netzwerken die Instanz verbunden wird.

|Ausgewählte Netzwerke|Wählen Sie für die zu erstellende Instanz das oder die Netzwerke aus der Liste der verfügbaren Netzwerke aus|



## Rubrik "Nach Erstellung"
In dieser Rubrik können Sie eine Instanz nach deren Erstellung personalisieren.

|Anpassungsskript Quelle|Direkteingabe oder Datei|
|Skript-Daten|Geben Sie den Skriptcode in das Eingabefeld ein (maximal 16 Kb)|
|Skript-Datei|Klicken Sie auf "Durchsuchen" und wählen Sie das Post-Installationsskript  aus|



## Rubrik "Weitergehende Optionen"
In dieser Rubrik können Sie die Partitionierung der Instanz verwalten.

|Festplattenpartition|Automatisch oder Manuell|
|Konfigurationslaufwerk|Mit dieser Option kann OpenStack so konfiguriert werden, dass die Metadaten auf eine bestimmte Konfigurationsfestplatte geschrieben werden, die beim Start an die Instanz angehängt wird|




## 
[Zurück zum Index der Cloud Hilfen]({legacy}1785)

