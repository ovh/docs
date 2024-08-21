---
title: "Erste Schritte mit Cloud Web Hosting"
excerpt: "Diese Anleitung erklärt, wie Sie richtig mit Ihrem Cloud Web Hosting starten"
updated: 2022-05-04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Unser Cloud Web Hosting Angebot kombiniert 20 Jahre Webhosting-Erfahrung mit der Power unserer Public Cloud. Wie bei unseren klassischen Webhostings werden Ihre Internetseiten auch bei Cloud Web auf einem rund um die Uhr verwalteten Dienst gehostet. Darüber hinaus haben Sie Zugriff auf zusätzliche Funktionen und profitieren von der höheren Performance unserer SSD-Festplatten.

**Diese Anleitung erklärt, wie Sie richtig mit Ihrem Cloud Web Hosting starten.**

## Voraussetzungen

- Sie verfügen über ein [Cloud Web Hosting](/links/web/hosting-cloud-web-offer) Angebot.
- Sie haben die Bestätigungs-E-Mail zur Installation Ihres Cloud Web Hostings erhalten.
- Sie besitzen eine [Domain](/links/web/domains), über die Ihre Website erreichbar sein wird.
- Sie sind in Ihrem [Kundencenter](/links/manager) eingeloggt.

## In der praktischen Anwendung

### Schritt 1: Ihr Projekt definieren

Cloud Web Hosting bietet mehr Konfigurationsmöglichkeiten als ein klassisches Webhosting, damit Sie Ihr Angebot möglichst genau an Ihr Projekt anpassen können. Um dieses erfolgreich umzusetzen, ist es wichtig, dass Sie Ihr Ziel klar vor Augen haben. Das sind unsere Empfehlungen:

- **Legen Sie fest, was Sie einrichten möchten**: Möchten Sie einen Blog oder einen Onlineshop erstellen? Ihre Leidenschaft mit anderen teilen oder die Internetpräsenz Ihres Unternehmens stärken? Bestimmen Sie die Einzelheiten Ihres Projekts, bevor Sie beginnen.

- **Ermitteln Sie die technischen Voraussetzungen für die Installation**: Möglicherweise müssen für Ihr Projekt bestimmte technische Voraussetzungen erfüllt sein. Überprüfen Sie diese am besten im Voraus.

- **Stellen Sie sicher, dass Ihr Projekt mit Cloud Web Hosting technisch kompatibel ist**: Benötigen Sie eine bestimmte Runtime Engine oder SQL-Sprache? Falls Sie das noch nicht getan haben, überprüfen Sie, dass alles, was Sie brauchen, bei Ihrem [Cloud Web](/links/web/hosting-cloud-web-offer) Hosting verfügbar ist.

Nachdem Sie sich die verschiedenen Optionen angesehen und Ihr Projekt genau definiert haben, können Sie mit der Umsetzung beginnen.

### Schritt 2: Runtime Engine auswählen

Bei Cloud Web stehen Ihnen für Ihr Projekt verschiedene Entwicklungssprachen zur Verfügung. Falls Sie eine andere Sprache als das standardmäßig ausgewählte PHP verwenden möchten, wählen Sie die entsprechende „Runtime Engine“ aus.

Aktuell sind folgende Programmiersprachen verfügbar:

- PHP
- Node.js
- Python
- Ruby

Um zu den Runtime Engines Ihres Cloud Web Hostings zu gelangen, loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Cloud Web Hosting aus. Gehen Sie dann auf den Tab `Runtime Engines`{.action}.

Bei der Installation Ihres Hostings wird automatisch eine Engine erstellt und als `Standardauswahl` in der zugehörigen Tabelle angezeigt. Um eine bereits eingerichtete Runtime Engine zu bearbeiten, klicken Sie auf die drei Punkte rechts daneben und anschließend auf `Bearbeiten`{.action}. 

Je nach [Cloud Web](/links/web/hosting-cloud-web-offer) Angebot können Sie auch zusätzliche Runtime Engines hinzufügen. Klicken Sie hierzu auf den Button `Aktionen`{.action} und anschließend auf `Runtime Engine hinzufügen`{.action}. Bitte beachten Sie, das die maximale Anzahl an Runtime Engines von dem von Ihnen bestellten Cloud Web Angebot abhängig ist.

Überprüfen Sie daher, bevor Sie fortfahren, dass Sie über die für Ihr Projekt notwendigen Runtime Engines verfügen.

![Cloud Web](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/runtime-software-application/edit-runtime.png){.thumbnail}

### Schritt 3: Umgebungsvariablen erstellen (optional)

Wenn Sie Ihr Projekt mehrfach in verschiedenen Umgebungen einrichten möchten (zum Beispiel: Entwicklung, Test oder Produktion), brauchen Sie Variablen, damit Ihr Code entsprechend reagiert. Hierfür können Sie mit Cloud Web verschiedene Umgebungsvariablen definieren, die über den Code Ihrer Website oder Webanwendung verfügbar sind.

Dadurch ist es zum Beispiel möglich, keine .env-Datei im PHP-Framework Laravel festzulegen, wie es in der zugehörigen Dokumentation beschrieben ist: <https://laravel.com/docs/5.6/configuration>.

Um eine Umgebungsvariable hinzuzufügen, gehen Sie zum betreffenden Cloud Web Hosting und klicken Sie anschließend auf `Umgebungsvariablen`{.action}. Es wird eine Tabelle mit den für Ihr Angebot erstellten Umgebungsvariablen angezeigt. Um eine neue Variable hinzuzufügen, klicken Sie auf den Button `Aktionen`{.action} und anschließend auf `Umgebungsvariable hinzufügen`{.action}. Folgen Sie nun den Anweisungen für die Variable, die Sie erstellen möchten.

![Cloud Web](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/environment-variables/add-an-environment-variable.png){.thumbnail}

Wenn Sie kein Entwicklungsframework mit Umgebungsvariablen verwenden oder überprüfen möchten, ob Ihre Umgebungsvariablen funktionieren, können Sie hierfür ein Skript erstellen. Im Folgenden finden Sie zwei Beispiele, um Ihnen bei diesem Vorgang zu helfen. Sie ersetzen allerdings nicht die Hilfe eines Webmasters.

- **Für PHP**:

```php
<?php echo "ENV: " . $_ENV['DB_DATABASE']; ?>
```

- **Für Node.js**:

```sh
var http = require('http');

http.createServer(function(request, response) {  
    response.writeHeader(200, {"Content-Type": "text/html"});  

    response.write( process.env.DB_DATABASE);

    response.end();  
}).listen(80);
```

Vergessen Sie nicht, die allgemeinen Angaben in diesen Skripten („DB_DATABASE“) durch die entsprechende Umgebungsvariable zu ersetzen.

### Schritt 4: Zusätzliche Domains und Multisite konfigurieren (optional)

Nun da die technische Umgebung Ihres Cloud Web Hostings fertig ist, können Sie zusätzliche Domains konfigurieren und als Multisite einrichten. So können Sie Ihren Bereich aufteilen und beispielsweise mehrere Websites darauf hosten. Wenn Sie dies für Ihr Projekt einrichten möchten, gehen Sie erneut zum entsprechenden Cloud Web Hosting und klicken Sie anschließend auf den Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains auf, die Ihrem Hosting zugewiesen sind. Einige wurden bei der Installation Ihres Hostings automatisch hinzugefügt. Um weitere hinzuzufügen, klicken Sie auf den Button `Eine Domain oder Subdomain hinzufügen`{.action} und folgen Sie den Anweisungen. Die Vorgehensweise kann variieren, je nachdem, ob Ihre Domain bei OVHcloud gehostet ist oder nicht. 

Füllen Sie die folgenden Informationen sorgfältig aus:

- **Wurzelverzeichnis**: Verzeichnis, in dem die angegebene Domain auf einem Speicherplatz Ihres Cloud Web Hostings gehostet sein muss. 

- **Runtime Engine**: Zuvor eingerichtete Runtime Engine, die für die Multisite verwendet wird, die Sie gerade erstellen.

> [!warning]
>
> Wenn Sie eine externe Domain hinzugefügt haben, muss zusätzlich ein TXT-Feld mit dem Namen **ovhcontrol** in der DNS-Konfiguration der Domain erstellt werden. Über dieses Feld kann OVHcloud überprüfen, dass die Domain tatsächlich hinzugefügt werden darf. Wurde kein TXT-Feld erstellt, wird der Vorgang abgebrochen.
>

Wiederholen Sie diesen Schritt, falls Sie mehrere Domains zu Ihrem Cloud Web Hosting hinzufügen möchten. Weitere Informationen zum Hinzufügen einer Domain als Multisite finden Sie in unserer Anleitung: [„Mehrere Websites auf einem Webhosting einrichten“](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external}.

![Cloud Web](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/multisite/add-domain-or-subdomain.png){.thumbnail}

### Schritt 5: Projekt auf Cloud Web Hosting einrichten

Es gibt zwei mögliche Vorgehensweisen, um Ihr Projekt einzurichten. Wenn Sie mehrere Projekte einrichten möchten, wiederholen Sie die gewählte Vorgehensweise sooft wie nötig.

#### 1. OVHcloud 1-Klick-Module verwenden

Mit dieser Lösung können Sie auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Themes, Texte usw.). OVHcloud stellt Ihnen 4 verschiedene 1-Klick-Module zur Verfügung. Nähere Informationen finden Sie auf der Webseite [„Erstellen Sie Ihre Website mit 1-Klick-Modulen“](/links/web/hosting-website){.external}.

Wenn Sie sich für die Verwendung eines unserer 1-Klick-Module entscheiden, klicken Sie bei dem entsprechenden Cloud Web Hosting auf den Tab `1 Klick Module`{.action} und anschließend auf `Ein Modul hinzufügen`{.action}. Nun können Sie auswählen, ob Sie eine „einfache“ (nicht personalisierbare) Installation oder die Installation „im Experten-Modus“ (mit anpassbaren Optionen) durchführen möchten.

Wenn Sie mehr über die 1-Klick-Module von OVHcloud wissen möchten, werfen Sie einen Blick in unsere Dokumentation: ["Installation Ihrer Website mit 1-Klick-Modulen"](/pages/web_cloud/web_hosting/cms_install_1_click_modules){.external}.

> [!primary]
>
> Wenn Sie 1-Klick-Module nutzen möchten, muss unbedingt die PHP-Runtime-Engine verwendet werden.
>

![Cloud Web](/pages/assets/screens/control_panel/product-selection/web-cloud/cloud-web/1-click-modules/add-a-module.png){.thumbnail}

#### 2. Projekt manuell einrichten

Die manuelle Einrichtung Ihres Projekts ist um einiges technischer und erfordert zusätzliche Kenntnisse Ihrerseits − egal ob Sie eine neue Website erstellen oder eine bereits existierende migrieren möchten. Deshalb empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber der Software zu kontaktieren. 

Wenn Sie sich für die manuelle Installation entschieden haben, benötigen Sie alle Dateien der Website oder Anwendung, die Sie einrichten möchten. Falls Sie zuvor eine Datenbank auf Ihrem Cloud Web Hosting angelegt haben, brauchen Sie außerdem die zugehörigen Angaben und Login-Daten. Wenn Sie eine Website migrieren, erstellen Sie zunächst ein komplettes Backup aller zugehörigen Daten.

Da nicht alle Projekte gleich sind, gibt es auch keine universelle Vorgehensweise. Unsere Anleitungen [„Webhosting: Meine Seite online stellen“](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external} und [„Migration Ihrer Website und E-Mails zu OVH“](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external} enthalten jedoch einige hilfreiche Informationen zum weiteren Vorgehen.

### Schritt 6: Konfiguration Ihrer Domain bearbeiten

Wenn Sie bei diesem Schritt angelangt sind, ist Ihr Projekt auf Ihrem Cloud Web Hosting installiert und Ihre E-Mail-Adressen sind eingerichtet. Sollten die E-Mail-Adressen noch nicht funktionieren, ist Ihre Domain möglicherweise nicht richtig konfiguriert. Ist das der Fall, oder sind Sie sich nicht sicher, ob Änderungen vorgenommen wurden, befolgen Sie den aktuellen Schritt.

Wenn Sie dabei sind, Ihre Dienste zu OVHcloud zu migrieren, beachten Sie bitte, dass diese möglicherweise nicht verfügbar sind, falls die Änderungen der DNS-Zone nicht im richtigen Moment durchgeführt wurden. Folgen Sie den entsprechenden Schritten unserer Anleitung [Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external} und bearbeiten Sie die DNS-Server Ihrer Domain erst am Ende des Prozesses.

#### 1. OVHcloud DNS-Einträge verstehen 

Es gibt mehrere zu OVHcloud gehörige DNS-Einträge. Wir interessieren uns an dieser Stelle für zwei Einträge, mit denen die Erreichbarkeit Ihrer Website und der Empfang von Nachrichten auf Ihren OVHcloud E-Mail-Adressen sichergestellt werden. Folgen Sie den nachstehenden Schritten, um die entsprechenden Einträge zu finden:

|DNS-Eintrag|Zugehöriger Dienst|Wo finde ich den Eintrag?|
|---|---|---|
|A|Für die Website|Begeben Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} im Bereich `Hosting-Pakete`{.action} zum betreffenden Cloud Web Hosting. Suchen Sie dann im Tab `Allgemeine Informationen`{.action} die IP-Adresse, die neben „IPv4“ steht.|
|MX|Für E-Mails|Begeben Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} im Bereich `E-Mails`{.action} zur betreffenden Domain. Dann suchen Sie in dem Tab `Allgemeine Informationen`{.action} die Angaben, die neben dem Punkt „MX Einträge“ stehen.|

#### 2. DNS-Einträge überprüfen oder bearbeiten

Nun, da Sie die DNS-Einträge für Ihr Cloud Web Hosting und Ihr OVHcloud E-Mail-Angebot kennen, können Sie deren Konfigurationen überprüfen und gegebenenfalls ändern. Beides geschieht bei dem Anbieter, der die DNS-Konfiguration (die DNS-Zone) Ihrer Domain verwaltet.

> [!warning]
>
> - Wenn Ihre Domain nicht die DNS-Konfiguration von OVHcloud verwendet, muss die Änderung über das Interface des Anbieters vorgenommen werden, bei dem die Konfiguration verwaltet wird.
> 
> - Wenn Ihre Domain bei OVHcloud registriert ist, können Sie überprüfen, ob sie unsere DNS-Konfiguration verwendet. Gehen Sie hierzu in Ihrem [OVHcloud Kundencenter](/links/manager){.external} zur betreffenden Domain und klicken Sie anschließend auf den Tab `DNS Server`{.action}.
>

Lesen Sie in der folgenden Tabelle, wo Sie die entsprechenden Änderungen vornehmen:

|Verwendete DNS-Konfiguration|Wo nehme ich die Änderungen vor?|
|---|---|
|OVHcloud|Begeben Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager){.external} im Bereich `Domains`{.action} zur betreffenden Domain. In dem Tab `DNS Zone`{.action} überprüfen Sie dann die Informationen und ändern diese gegebenenfalls ab. Wenn Sie weitere Hilfe benötigen, lesen Sie unsere Anleitung [„Bearbeiten der OVHcloud DNS-Zone“](/pages/web_cloud/domains/dns_zone_edit){.external}|
|Andere|Verwenden Sie das Interface des Anbieters, der die DNS-Konfiguration Ihrer Domain verwaltet. Bei Problemen wenden Sie sich bitte an Ihren Anbieter.|

Die Änderung der DNS-Konfiguration Ihrer Domain erfordert eine Propagationszeit von bis zu 24 Stunden, bis sie voll wirksam ist. Falls Sie mehrere Domains als Multisite mit Ihrem Cloud Web Hosting verbunden haben, müssen die notwendigen Änderungen für jede Domain einzeln durchgeführt werden. 

### Schritt 7: Website personalisieren

Dieser Schritt ist optional, wenn Sie eine Website migriert haben, die bereits angepasst wurde. Wenn Sie jedoch zum Beispiel gerade mithilfe unserer Module eine neue Website installiert haben, können Sie diese durch Anpassung des Themes und die Veröffentlichung erster Inhalte personalisieren.

Wenn Sie Hilfe bei der Nutzung spezieller Funktionen Ihrer Website benötigen, gehen Sie bitte auf die offizielle Website des jeweiligen Herausgebers. Dort finden Sie ergänzende Dokumentation zu Ihrer Unterstützung.

### Schritt 8: E-Mail-Adressen verwenden

Sie können nun auch Ihre E-Mail-Adressen verwenden. Dafür stellt OVHcloud Ihnen eine Webanwendung (Webmail) zur Verfügung: RoundCube. Diese App ist über die Adresse <https://www.ovh.de/mail/> erreichbar, auf der Sie die Login-Daten für Ihre von OVHcloud angelegte E-Mail-Adresse eingeben.

Wenn Sie mehr Informationen über die Verwendung von RoundCube benötigen, werfen Sie bitte einen Blick in unsere Anleitung: [Verwendung von RoundCube](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube){.external} Wenn Sie Ihre E-Mail-Adresse auf einem E-Mail-Client oder einem Gerät (beispielsweise einem Smartphone oder einem Tablet) einrichten möchten, werfen Sie bitte einen Blick in die jeweilige Anleitung unter </products/web-cloud-email-collaborative-solutions-mx-plan>.

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh){.external}

[Meine Seite online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external}

[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules){.external}

[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.