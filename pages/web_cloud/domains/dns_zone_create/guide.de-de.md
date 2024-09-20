---
title: OVHcloud DNS-Zone für eine Domainnamen erstellen
excerpt: Erfahren Sie hier, wie Sie im OVHcloud Kundencenter eine DNS-Zone für Ihren Domainnamen erstellen
updated: 2024-06-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die **DNS**-Zone (**D**omain **N**ame **S**ystem) ist die Konfigurationsdatei eines Domainnamens. Sie besteht aus **DNS-Einträgen**, Datensätzen die dem Domainnamen verschiedenen Diensten und Funktionen zuordnen, zum Beispiel:

Weitere Informationen finden Sie in folgenden Anleitungen:

- [Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)
- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

Es gibt verschiedene Gründe für die Erstellung einer DNS-Zone bei OVHcloud für Ihren Domainnamen.

**Diese Anleitung erklärt, wie Sie im OVHcloud Kundencenter eine DNS-Zone bei OVHcloud für Ihren Domainnamen erstellen.**

## Voraussetzungen

- Sie haben administrativen Zugriff auf Ihren Domainnamen.
- Für den betreffenden Domainnamen besteht nicht bereits eine aktive oder inaktive OVHcloud DNS-Zone, noch ist er Gegenstand einer laufenden Operation oder einer Bestellung bei OVHcloud.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!warning]
>
> Sie können mehrere DNS-Zonen (bei verschiedenen DNS- oder Hosting-Providern) für einen Domainnamen erstellen. Sie können jedoch nur eine aktive DNS-Zone für Ihre Domainnamen verwenden. Diese Beschränkung dient der Vermeidung von *DNS-Konflikten*.
>
> Die Aktivierung/Deaktivierung einer DNS-Zone erfolgt, indem die zugehörigen **DNS-Server** für den Domainnamen deklariert werden. Um diese **DNS-Server** und damit die Konfiguration eines Domainnamens zu ändern müssen die entsprechenden Einstellungen bei der zuständigen Stelle vorgenommen werden: 
>
> - Der *Registrar*, bei dem der Domainname registriert ist.
> - Ihr DNS-Anbieter, falls Sie Ihren Domainnamen über einen spezialisierten Dienstleister verwalten.
>
> Indem Sie die **DNS-Server** eines Domainnamens ändern, deaktivieren Sie die Konfiguration der bestehenden DNS-Zone zugunsten der neuen DNS-Zone, die auf den zu deklarierenden **DNS-Servern** liegt.
>
> Überprüfen Sie daher, bevor Sie die für Ihrem Domainnamen angegebenen **DNS-Server** ändern, ob die Konfiguration der neuen DNS-Zone Ihren Erwartungen entspricht.
>

### Schritt 1: DNS-Zone über das OVHcloud Kundencenter erstellen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Bestellen`{.action} und dann auf `DNS-Zone`{.action}.

Geben Sie auf neuen Seite den Domainnamen ein (*domainname.tld*), für den Sie eine OVHcloud DNS-Zone erstellen möchten. Warten Sie einen Moment, bis das Tool die Überprüfung des Domainnamens durchgeführt hat.

Wenn eine Meldung erscheint, dass die DNS-Zone nicht erstellt werden kann, überprüfen Sie, ob der Domainname die notwendigen Voraussetzungen erfüllt, oder lassen Sie dies von der zuständigen Person prüfen. Wenn alles korrekt ist, versuchen Sie es erneut.

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone.png){.thumbnail}

Sobald die Überprüfung abgeschlossen ist, wählen Sie aus, ob Sie die minimalen Einträge für die DNS-Zone, die Sie erstellen möchten, aktivieren möchten. Diese Auswahl ist nicht endgültig, da Sie die [Einträge der DNS-Zone auch später noch bearbeiten können](/pages/web_cloud/domains/dns_zone_edit).

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/adding-a-dns-zone-step-2.png){.thumbnail}

|Die minimalen Einträge aktivieren?|Details|
|---|---|
|Ja|Wählen Sie diese Option, wenn Sie Ihre DNS-Zone später selbst anpassen möchten.</br>![Minimum-DNS-Zentries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-minimal-entries.png){.thumbnail}|
|Nein|	Wählen Sie diese Option, wenn Sie OVHcloud Dienste wie zum Beispiel ein [Webhosting](/links/web/hosting){.external} nutzen möchten. Die DNS-Zone ist hierfür bereits vorkonfiguriert.</br>![Minimum-dns-zentries](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-ovh-full-entries.png){.thumbnail}|

Wenn Sie Ihre Auswahl getroffen haben, folgen Sie den Schritten bis zur Erstellung der DNS-Zone.

### Schritt 2: DNS-Zone bearbeiten (optional)

Sobald die DNS-Zone für Ihren Domainnamen erstellt wurde, können Sie sie bearbeiten. Dieser Vorgang ist optional, kann aber notwendig sein, wenn Sie die Verfügbarkeit der mit dieser Domainnamen verbundenen Dienste (wie Websites und E-Mails) aufrechterhalten möchten.

Um die DNS-Zone zu bearbeiten, lesen Sie unsere Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!primary]
>
> Wenn Sie gerade die DNS-Zone erstellt haben und der Domainname noch nicht in der Liste Ihrer Dienstleistungen erscheint (unter `Domainnamen`{.action} im Bereich `Web Cloud`{.action} im OVHcloud Kundencenter), warten Sie ca. 20 Minuten und laden Sie die Seite neu.
>

### Schritt 3: DNS-Server des Domainnamens ändern

Sobald die OVHcloud DNS-Zone bereit ist, aktivieren Sie diese, indem Sie die neuen DNS-Server deklarieren. Ermitteln Sie hierfür zuerst die Namen der **DNS-Server** von OVHcloud, auf denen die OVHcloud DNS-Zone für Ihre Domainnamen erstellt wurde.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie die neu erstellte DNS-Zone aus. 

Im linken Menü sollte für den Domainnamen ein Globus-Symbol mit der Bezeichnung *DNS* angezeigt werden. 

> [!primary]
> Wenn Sie hier nur das Globus-Symbol sehen (ohne den Zusatz *DNS*), dann wird dieser Domainname bereits in Ihrem OVHcloud Kundencenter verwaltet.
>
> Wenn Sie der *Administrator* dieses Domainnamens sind, können Sie die **DNS-Server** selbst ändern. Verwenden Sie ggf. [unsere Anleitung](/pages/web_cloud/domains/dns_server_edit) zum Thema.
>
> Zur Erinnerung: Überprüfen Sie, bevor Sie die bei Ihrer Domainnamen angegebenen **DNS-Server** ändern, ob die Konfiguration der neuen DNS-Zone Ihren Erwartungen entspricht.
>

Auf der neuen Seite werden die DNS-Server, die mit Ihrer Domainnamen zur Aktivierung der OVHcloud DNS-Zone verwendet werden sollen, unter `Name Servers`{.action} aufgeführt.

![dnszonecreate](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/name-servers.png){.thumbnail}

Mit den Namen der DNS-Server können Sie nun **die DNS-Server Ihres Domainnamens im Interface Ihres DNS-Anbieters entsprechend abändern**. Nach dieser Bearbeitung ist eine maximale Propagationszeit von **48 Stunden** erforderlich, damit die Änderung voll wirksam ist.

> [!primary]
>
> Überprüfen Sie, bevor Sie die für Ihrem Domainnamen angegebenen **DNS-Server** ändern, ob die Konfiguration der neuen DNS-Zone Ihren Erwartungen entspricht.
>

> [!success]
>
> Wenn Sie die Namen der DNS-Server individualisieren möchten, die die aktive DNS-Zone Ihres Domainnamens bereitstellen, lesen Sie unsere Anleitung „[DNS-Server von Domainnamen individualisieren (Glue Records)](/pages/web_cloud/domains/glue_registry)“.
>

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.