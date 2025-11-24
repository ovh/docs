---
title: Was tun, wenn eine “Index of“-Seite angezeigt wird?
excerpt: Erfahren Sie hier, wie Sie Ihre Website wieder online bringen, wenn eine “Index of“-Seite angezeigt wird
updated: 2025-11-27
---

## Ziel 

Eine **Index of**-Seite erscheint in mindestens einem der folgenden Fälle:

- Die [Einrichtung Ihres Domainnamens mit Ihrer Website](/pages/web_cloud/web_hosting/multisites_configure_multisite) ist nicht korrekt auf Ihr Zielverzeichnis eingestellt.
- Das Zielverzeichnis, auf das Ihr Domainname verweist, enthält keine Datei namens **index.html** oder **index.php**.

![index_of](/pages/assets/screens/other/browsers/errors/index-of.png){.thumbnail}

**Diese Anleitung erklärt, wie Sie die Anzeige einer "Index of"-Seite korrigieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über einen [Domainnamen](/links/web/domains).
- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Den Ursprung der "Index of"-Seite verstehen

Ihr Domainname ist so konfiguriert, dass er auf ein Wurzelverzeichnis (`root folder`) auf dem [FTP](/pages/web_cloud/web_hosting/ftp_connection)-Server Ihres Webhostings zugreifen kann. Dies geschieht über den Tab [Meine Seiten](/pages/web_cloud/web_hosting/multisites_configure_multisite) Ihres Webhostings, der sich in Ihrem [OVHcloud Kundencenter](/links/manager) befindet.

Die Seite "**Index of**" ist ein Anzeichen dafür, dass Ihr Verzeichnis keine Indexdatei, also **index.php** oder **index.html** enthält. Eine solche Datei repräsentiert die Startseite bzw. den Einstiegspunkt Ihrer Website. Der Name dieser Datei ist standardisiert.

Um Ihre Website anzuzeigen, müssen Sie also von dem Tab `Meine Seiten`{.action} Ihres Webhostings aus Ihren Domainnamen mit der Website verknüpfen, deren `Wurzelverzeichnis` die Datei **index.php** oder **index.html** enthält.

> [!primary]
>
> Wenn Sie Ihren Domainnamen temporär mit einem `Wurzelverzeichnis` verknüpfen möchten, das keine **index.php** oder **index.html** Datei enthält, können Sie verhindern, dass die Auflistung von Ordnern auf Ihrer Website angezeigt wird, indem Sie [diesem Tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#verzeichnis-browsing-verhindern) folgen. Sie können auch den Zugang zu Ihren Ordnern [mit einem Passwort schützen](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Wir empfehlen Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, falls Sie Schwierigkeiten haben, diese Konfiguration einzurichten. Unsere Support-Teams können keine Unterstützung bei Änderungen der internen Programmierung Ihrer Website anbieten.

### Die häufigste Ursache einer "Index of"-Seite beheben

Sie haben die Dateien Ihrer Website **mydomain.ovh** in das Verzeichnis `www` über [FTP](/pages/web_cloud/web_hosting/ftp_connection) übertragen. Allerdings ist die Website, der Ihr Domainname zugeordnet ist, nicht mit diesem Ordner in der Spalte `Wurzelverzeichnis` verknüpft.

![index_multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders-empty.png){.thumbnail}

Das `Wurzelverzeichnis` ist nicht mehr änderbar, nachdem die Website erstellt wurde.

Sie müssen Ihren Domainnamen von der bestehenden Website trennen, indem Sie den Tab `Meine Seiten`{.action} Ihres Webhostings öffnen. Dazu konsultieren Sie die Anleitung „[Wie trenne ich einen Domainnamen von einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_detach_domain_existing_website)“.

Anschließend können Sie mithilfe dera Anleitung „[Teilen Sie Ihr Webhosting zwischen mehreren Websites auf](/pages/web_cloud/web_hosting/multisites_configure_multisite)“ eine neue Website mit Ihrem Domainnamen hinzufügen. Falls Ihre Website eine Konfiguration mit Git verwendet, konsultieren Sie vorher die Anleitung „[Git mit Ihrem OVHcloud Webhosting konfigurieren und nutzen](/pages/web_cloud/web_hosting/git_integration_webhosting)“ **vor** dem Klick auf `Domain abtrennen`{.action}.

Überprüfen Sie, ob Ihre Webseite korrekt angezeigt wird. Wenn dies nicht der Fall ist, starten Sie Ihr Gerät neu und leeren Sie den Cache Ihres Browsers.

Stellen Sie außerdem sicher, dass eine Datei namens **index.php** oder **index.html** in Ihrem Zielverzeichnis vorhanden ist.

## Weiterführende Informationen <a name=“go-further“></a>

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Fehler “Seite nicht installiert” beheben](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.