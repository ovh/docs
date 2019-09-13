---
title: 'Cloud Web Runtime Engines verwalten'
slug: cloud-web-runtime-engines-verwalten
excerpt: 'Hier erfahren Sie, wie Sie die Runtime Engines Ihres Hostings verwalten, um Ihre Projekte erfolgreich umzusetzen.'
section: Webhosting-Konfiguration
---

**Stand 30.08.2019**

## Einleitung

Bei Cloud Web stehen für Ihr Projekt verschiedene Entwicklungssprachen zur Verfügung. Um Ihr Projekt erfolgreich abzuschließen, benötigen Sie möglicherweise eine bestimmte Runtime Engine.

**In dieser Anleitung erfahren Sie, wie Sie die Runtime Engines Ihres Hostings verwalten.**

## Voraussetzungen

- Sie verfügen über ein [Cloud Web Hosting](https://www.ovh.de/hosting/cloud-web.xml) Angebot.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager) eingeloggt und befinden sich im Bereich `Web`{.action}.

## Beschreibung

Bei Cloud Web können Sie je nach Projekt eine oder mehrere Runtime Engines auswählen. Die Entscheidung, welche Runtime Engine Sie verwenden sollten, hängt davon ab, was Sie einrichten möchten. 

Falls Sie dies noch nicht getan haben, **vergewissern Sie sich jetzt, dass Ihr Projekt mit Ihrem Cloud Web Hosting kompatibel ist**. Die verfügbaren Programmiersprachen sind auf <https://www.ovh.de/hosting/cloud-web.xml> aufgeführt. 

Wenn Sie ermittelt haben, welche Runtime Engine(s) Sie verwenden möchten, können Sie mit den nachstehenden Schritten beginnen.

### Schritt 1: Auf die Verwaltung der Runtime Engines zugreifen

Um auf die Runtime Engines Ihres Cloud Web Hostings zuzugreifen, loggen Sie sich zunächst in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein. Klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Cloud Hosting aus. Gehen Sie dann auf den Tab `Runtime Engines`{.action}.

Es wird eine Tabelle angezeigt, die alle aktuell zu Ihrem Cloud Web Hosting hinzugefügten Runtime Engines enthält. Bitte beachten Sie, dass bei der Installation Ihres Hostings automatisch eine Engine erstellt wird.

![Cloud Web](images/cloud-web-runtime-step1.png){.thumbnail}

### Schritt 2: Runtime Engines verwalten

Es gibt verschiedene Möglichkeiten, um die Runtime Engines Ihres Cloud Web Hostings zu verwalten. Sie können:

- [eine Runtime Engine hinzufügen oder ändern](./#21-runtime-engine-hinzufugen-oder-andern){.external} (die maximale Anzahl der Runtime Engines ist abhängig vom gewählten Hosting Angebot)
- eine Engine als Standardauswahl festlegen
- eine Runtime Engine löschen

#### 2.1 Runtime Engine hinzufügen oder ändern

> [!primary]
>
> Bevor Sie eine Runtime Engine ändern, stellen Sie sicher, dass dadurch keine Website oder Anwendung, die diese Engine verwendet, beeinträchtigt wird. Die Anzahl der auf Ihren Runtime Engines basierenden Multisites finden Sie in der Spalte `Anzahl der verbundenen Multisites`. Im Tab `Multisite`{.action} können Sie in der Spalte `Runtime Engines` die von jeder Domain verwendete Runtime Engine ermitteln.
> 

Um eine Runtime Engine hinzuzufügen oder zu ändern, gehen Sie in den Tab `Runtime Engine`{.action} des betreffenden Cloud Web Hostings. Dann:

- **Wenn Sie eine Engine hinzufügen möchten**\: Klicken Sie unter der Tabelle auf `Aktionen`{.action} und dann auf `Runtime Engine hinzufügen`{.action}.
- **Wenn Sie die vorhandene Engine ändern möchten**\: Klicken Sie rechtes neben der betreffenden Engine auf den Button `...`{.action} und dann auf `Ändern`{.action}.

![Cloud Web](images/cloud-web-runtime-step2.png){.thumbnail}

Geben Sie im angezeigten Fenster die notwendigen Informationen ein. Fahren Sie entsprechend der ausgewählten Engine fort:

- [PHP](./#php){.external}
- [Node.js](./#nodejs){.external}

##### PHP

|Information|Beschreibung| 
|---|---| 
|Angepasster Name|Geben Sie einen Namen für diese Engine ein, damit Sie sie später von anderen Engines in Ihrem Kundencenter unterscheiden können.|  
|Runtime Engine|Wählen Sie die neue Runtime Engine aus.|  

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Bestätigen`{.action}. Stellen Sie sicher, dass die Runtime Engine von den gewünschten Multisites verwendet wird. Gehen Sie hierzu zu Schritt 3 „[Runtime Engine mit einer Multisite verbinden](./#schritt-3-runtime-engine-mit-einer-multisite-verbinden_2){.external}“.

![Cloud Web](images/cloud-web-runtime-step3.png){.thumbnail}

##### Node.js

|Information|Beschreibung| 
|---|---| 
|Angepasster Name|Geben Sie einen Namen für diese Engine ein, damit Sie sie später von anderen Engines in Ihrem Kundencenter unterscheiden können.|
|Runtime Engine|Wählen Sie die neue Runtime Engine aus.|
|Zugriffspfad zum öffentlichen Verzeichnis|Geben Sie das Verzeichnis an, in dem der statische Content gehostet wird (die Engine führt diese Inhalte nicht aus).|
|Anwendungsumgebung|Geben Sie an, ob es sich um eine „Produktions-“, „Test-“ oder „Entwicklungs“-Umgebung handelt. Bitte beachten Sie, dass sich Entwicklungsumgebungen anders verhalten als Produktions- und Testumgebungen und Fehler direkt im Webinterface anzeigen.|
|Startskript der Anwendung|Geben Sie das Skript an, das die Node.js-Technologie aufrufen soll.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Bestätigen`{.action}. Stellen Sie sicher, dass die Runtime Engine von den gewünschten Multisites verwendet wird. Gehen Sie hierzu zu Schritt 3 „[Runtime Engine mit einer Multisite verbinden](./#schritt-3-runtime-engine-mit-einer-multisite-verbinden_2){.external}“.

![Cloud Web](images/cloud-web-runtime-step3-2.png){.thumbnail}

### Schritt 3: Runtime Engine mit einer Multisite verbinden

Wenn Sie über die für Ihr Projekt notwendigen Runtime Engines verfügen, vergewissern Sie sich, dass diese korrekt mit Ihren Multisites verbunden sind. Gehen Sie hierzu in den Tab `Multisite`{.action} des betreffenden Cloud Web Hostings. 

Überprüfen Sie in der Tabelle, dass für die betreffenden Domains in der Spalte `Runtime Engine` die richtige Engine angezeigt wird. Die angezeigten Namen entsprechen den „angepassten Namen“, die Sie zuvor festgelegt haben.

![Cloud Web](images/cloud-web-runtime-step4.png){.thumbnail}

Wenn Sie eine mit einer Multisite verbundene Engine ändern möchten, klicken Sie rechts neben der betreffenden Domain auf das Zahnrad-Symbol und dann auf `Ändern`{.action}.

![Cloud Web](images/cloud-web-runtime-step5.png){.thumbnail}

Wählen Sie dann im angezeigten Fenster neben `Runtime Engine` die richtige Engine aus. Zur Erinnerung: Die angezeigten Namen entsprechen den „angepassten Namen“, die Sie zuvor festgelegt haben. Es ist wichtig, dass die Website oder Anwendung, die über die betreffende Domain erreichbar ist, mit der gewählten Engine kompatibel ist. 

Wenn Sie die Engine ausgewählt haben, folgen Sie den angezeigten Schritten, bis der Vorgang abgeschlossen ist.

![Cloud Web](images/cloud-web-runtime-step6.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.