---
title: "Cloud Web Runtime Engines verwalten"
excerpt: "Erfahren Sie hier, wie Sie die Runtime Engines Ihres Hostings verwalten"
updated: 2022-07-27
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Bei Cloud Web stehen für Ihr Projekt verschiedene Entwicklungssprachen zur Verfügung. Um Ihr Projekt erfolgreich umzusetzen, benötigen Sie möglicherweise eine bestimmte Runtime Engine.

**Diese Anleitung erklärt, wie Sie die Runtime Engines Ihres Cloud Web Hostings im OVHcloud Kundencenter verwalten.**

## Voraussetzungen

- Sie haben ein [Cloud Web Hosting](/links/web/hosting-cloud-web-offer) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Bei Cloud Web können Sie je nach Projekt eine oder mehrere Runtime Engines auswählen. Die Entscheidung, welche Runtime Engine Sie verwenden sollten, hängt davon ab, was Sie einrichten möchten. 

Falls Sie dies noch nicht getan haben, **vergewissern Sie sich jetzt, dass Ihr Projekt mit Ihrem Cloud Web Hosting kompatibel ist**. Die verfügbaren Programmiersprachen sind auf [unserer Webseite](/links/web/hosting-cloud-web-offer) aufgeführt. 

Wenn Sie ermittelt haben, welche Runtime Engine(s) Sie verwenden möchten, können Sie mit den nachstehenden Schritten beginnen.

### Schritt 1: Auf die Verwaltung der Runtime Engines zugreifen

Um auf die Runtime Engines Ihres Cloud Web Hostings zuzugreifen, loggen Sie sich zunächst in Ihrem [OVHcloud Kundencenter](/links/manager) ein. Klicken Sie im Bereich `Web Cloud`{.action} links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `Runtime Engines`{.action}.

Es wird eine Tabelle angezeigt, die alle aktuell zu Ihrem Cloud Web Hosting hinzugefügten Runtime Engines enthält. Bitte beachten Sie, dass bei der Installation Ihres Hostings automatisch eine Engine erstellt wird.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/tab-phpfpm7-4.png){.thumbnail}

### Schritt 2: Runtime Engines verwalten

Es gibt verschiedene Möglichkeiten, um die Runtime Engines Ihres Cloud Web Hostings zu verwalten. Sie können:

- eine Runtime Engine hinzufügen oder ändern (die maximale Anzahl der Runtime Engines ist abhängig vom gewählten [Hosting Angebot](/links/web/hosting-cloud-web-offer)).
- eine Engine als Standardauswahl festlegen.
- eine Runtime Engine löschen.

#### 2.1 Runtime Engine hinzufügen oder ändern

> [!primary]
>
> Bevor Sie eine Runtime Engine ändern, stellen Sie sicher, dass dadurch keine Webseite oder Anwendung, die diese Engine verwendet, beeinträchtigt wird. Die Anzahl der auf Ihren Runtime Engines basierenden Multisites finden Sie in der Spalte `Anzahl der verbundenen Multisites`. Im Tab `Multisite`{.action} können Sie in der Spalte `Runtime Engines` die von jeder Domain verwendete Runtime Engine ermitteln.
> 
> Um die Löschung einer Runtime Engine zu ermöglichen, müssen Multisite-Einträge, die diese verwenden, gelöscht werden.

Um eine Runtime Engine hinzuzufügen oder zu ändern, gehen Sie in den Tab `Runtime Engine`{.action} des betreffenden Cloud Web Hostings:

- **Wenn Sie eine Engine hinzufügen möchten**\: Klicken Sie über der Tabelle auf `Aktionen`{.action} und dann auf `Runtime Engine hinzufügen`{.action}.
- **Wenn Sie die vorhandene Engine ändern möchten**\: Klicken Sie rechtes neben der betreffenden Engine auf `...`{.action} und dann auf `Ändern`{.action}.

Geben Sie im angezeigten Fenster die notwendigen Informationen ein. Fahren Sie entsprechend der ausgewählten Engine fort:

- [PHP](./#php){.external} 
- [Node.js](./#nodejs){.external}
- [Ruby](./#ruby){.external} 
- [Python](./#python){.external} 

##### **PHP**

|Information|Beschreibung| 
|---|---| 
|Angepasster Name|Geben Sie einen Namen für diese Engine ein, damit Sie sie später von anderen Engines in Ihrem OVHcloud Kundencenter unterscheiden können.|  
|Runtime Engine|Wählen Sie die neue Runtime Engine aus.|  

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Bestätigen`{.action}. Stellen Sie sicher, dass die Runtime Engine von den gewünschten Multisites verwendet wird. Gehen Sie hierzu zu Schritt 3: [Runtime Engine mit einer Multisite verbinden](./#schritt-3-runtime-engine-mit-einer-multisite-verbinden).

##### **Node.js**

|Information|Beschreibung| 
|---|---| 
|Angepasster Name|Geben Sie einen Namen für diese Engine ein, damit Sie sie später von anderen Engines in Ihrem OVHcloud Kundencenter unterscheiden können.|
|Runtime Engine|Wählen Sie die neue Runtime Engine aus.|
|Zugriffspfad zum öffentlichen Verzeichnis|Geben Sie das Verzeichnis an, in dem der statische Content gehostet wird (die Engine führt diese Inhalte nicht aus).|
|Anwendungsumgebung|Geben Sie an, ob es sich um eine „Produktions-“, „Test-“ oder „Entwicklungs“-Umgebung handelt. Bitte beachten Sie, dass sich Entwicklungsumgebungen anders verhalten als Produktions- und Testumgebungen und Fehler direkt im Webinterface anzeigen.|
|Startskript der Anwendung|Geben Sie das Skript an, das Node.js aufrufen wird.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Bestätigen`{.action}. Stellen Sie sicher, dass die Runtime Engine von den gewünschten Multisites verwendet wird. Gehen Sie hierzu zu Schritt 3: [Runtime Engine mit einer Multisite verbinden](./#schritt-3-runtime-engine-mit-einer-multisite-verbinden).

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-nodejs8.png){.thumbnail}

##### **Ruby**

|Information|Beschreibung| 
|---|---| 
|Angepasster Name|Geben Sie einen Namen für diese Engine ein, damit Sie sie später von anderen Engines in Ihrem OVHcloud Kundencenter unterscheiden können.|
|Runtime Engine|Wählen Sie die neue Runtime Engine aus.|
|Zugriffspfad zum öffentlichen Verzeichnis|Geben Sie das Verzeichnis an, in dem der statische Content gehostet wird (die Engine führt diese Inhalte nicht aus).|
|Anwendungsumgebung|Geben Sie an, ob es sich um eine „Produktions-“, „Test-“ oder „Entwicklungs“-Umgebung handelt. Bitte beachten Sie, dass sich Entwicklungsumgebungen anders verhalten als Produktions- und Testumgebungen und Fehler direkt im Webinterface anzeigen.|
|Startskript der Anwendung|Geben Sie das Skript an, das Ruby aufrufen wird.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Bestätigen`{.action}. Stellen Sie sicher, dass die Runtime Engine von den gewünschten Multisites verwendet wird. Gehen Sie hierzu zu Schritt 3: [Runtime Engine mit einer Multisite verbinden](./#schritt-3-runtime-engine-mit-einer-multisite-verbinden).

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-ruby2-6.png){.thumbnail}

##### **Python**

|Information|Beschreibung| 
|---|---| 
|Angepasster Name|Geben Sie einen Namen für diese Engine ein, damit Sie sie später von anderen Engines in Ihrem OVHcloud Kundencenter unterscheiden können.|
|Runtime Engine|Wählen Sie die neue Runtime Engine aus.|
|Zugriffspfad zum öffentlichen Verzeichnis|Geben Sie das Verzeichnis an, in dem der statische Content gehostet wird (die Engine führt diese Inhalte nicht aus).|
|Anwendungsumgebung|Geben Sie an, ob es sich um eine „Produktions-“, „Test-“ oder „Entwicklungs“-Umgebung handelt. Bitte beachten Sie, dass sich Entwicklungsumgebungen anders verhalten als Produktions- und Testumgebungen und Fehler direkt im Webinterface anzeigen.|
|Startskript der Anwendung|Geben Sie das Skript an, das Python aufrufen wird.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Bestätigen`{.action}. Stellen Sie sicher, dass die Runtime Engine von den gewünschten Multisites verwendet wird. Gehen Sie hierzu zu Schritt 3: [Runtime Engine mit einer Multisite verbinden](./#schritt-3-runtime-engine-mit-einer-multisite-verbinden).

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/modify-a-runtime-software-application-python3.png){.thumbnail}

### Schritt 3: Runtime Engine mit einer Multisite verbinden

> [!primary]
> In unserem Beispiel wurden nur die PHP- und Node.js-Engines erstellt. Möglicherweise verwenden Sie in Ihrem Projekt Ruby oder Python. In diesem Fall sind die unten beschriebenen Operationen ebenfalls anwendbar.
> 
> Die Verwendung von zwei parallelen Ausführungsmodulen auf Ihrem Cloud Web Hosting hängt von [Ihrem Angebot](/links/web/hosting-cloud-web-offer) ab.
> 

Wenn Sie über die für Ihr Projekt notwendigen Runtime Engines verfügen, vergewissern Sie sich, dass diese korrekt mit Ihren Multisites verbunden sind. Gehen Sie hierzu in den Tab `Multisite`{.action} des betreffenden Cloud Web Hostings. 

Überprüfen Sie in der Tabelle, dass für die betreffenden Domains in der Spalte `Runtime Engine` die richtige Engine angezeigt wird. Die angezeigten Namen entsprechen den „angepassten Namen“, die Sie zuvor festgelegt haben.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/runtime-software-applications.png){.thumbnail}

Wenn Sie eine mit einer Multisite verbundene Engine ändern möchten, klicken Sie rechts neben der betreffenden Domain auf das Zahnradsymbol und dann auf `Ändern`{.action}.

Wählen Sie dann im angezeigten Fenster neben `Runtime Engine` die richtige Engine aus. Zur Erinnerung: Die angezeigten Namen entsprechen den „angepassten Namen“, die Sie zuvor festgelegt haben. Es ist wichtig, dass die Webseite oder Anwendung, die über die betreffende Domain erreichbar ist, mit der gewählten Engine kompatibel ist. 

Wenn Sie die Engine ausgewählt haben, folgen Sie den angezeigten Schritten, bis der Vorgang abgeschlossen ist.

![cloudweb](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/multisite/modify-a-domain-step-1.png){.thumbnail}

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.