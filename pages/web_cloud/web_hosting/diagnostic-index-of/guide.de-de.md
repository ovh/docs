---
title: Was tun, wenn eine “Index of“-Seite angezeigt wird?
excerpt: Erfahren Sie hier, wie Sie Ihre Website wieder online bringen, wenn eine “Index of“-Seite angezeigt wird
updated: 2026-05-04
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

## In der praktischen Anwendung

### Den Ursprung der "Index of"-Seite verstehen

Ihr Domainname ist so konfiguriert, dass er auf ein Wurzelverzeichnis (`root folder`) auf dem [FTP](/pages/web_cloud/web_hosting/ftp_connection)-Server Ihres Webhostings zugreifen kann. Informationen zur Zuordnung eines Domainnamens zu einem Webhosting finden Sie in unserer Anleitung "[Mehrere Websites auf einem Webhosting hosten](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

Die Seite "**Index of**" ist ein Anzeichen dafür, dass Ihr Verzeichnis keine Indexdatei, also **index.php** oder **index.html** enthält. Eine solche Datei repräsentiert die Startseite bzw. den Einstiegspunkt Ihrer Website. Der Name dieser Datei ist standardisiert.

Um Ihre Website anzuzeigen, müssen Sie sicherstellen, dass das `Wurzelverzeichnis`, für das Ihr Domainname deklariert ist, eine Datei **index.php** oder **index.html** enthält.

> [!primary]
>
> Wenn Sie Ihren Domainnamen temporär mit einem `Wurzelverzeichnis` verknüpfen möchten, das keine **index.php** oder **index.html** Datei enthält, können Sie verhindern, dass die Auflistung von Ordnern auf Ihrer Website angezeigt wird, indem Sie [diesem Tutorial](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do#verzeichnis-browsing-verhindern) folgen. Sie können auch den Zugang zu Ihren Ordnern [mit einem Passwort schützen](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).
>
> Wir empfehlen Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, falls Sie Schwierigkeiten haben, diese Konfiguration einzurichten. Unsere Support-Teams können keine Unterstützung bei Änderungen der internen Programmierung Ihrer Website anbieten.

### Die häufigste Ursache einer "Index of"-Seite beheben

Sie haben die Dateien Ihrer Website **domain.tld** in das Verzeichnis `www` über [FTP](/pages/web_cloud/web_hosting/ftp_connection) übertragen. Allerdings ist die Website, der Ihr Domainname zugeordnet ist, nicht mit diesem Ordner in der Spalte `Wurzelverzeichnis` verknüpft.

Sie müssen das ursprünglich für Ihre Website angegebene `Wurzelverzeichnis` über das [OVHcloud Kundencenter](/links/control-panel/web-hosting) ändern. Dazu konsultieren Sie bitte unseren Guide "[Wie ändere ich den Wurzelverzeichnis einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)“.

Wenn Ihre Website eine Konfiguration mit Git verwendet, konsultieren Sie vorab unseren Guide "[Git mit Ihrem OVHcloud Webhosting konfigurieren und nutzen](/pages/web_cloud/web_hosting/git_integration_webhosting)“, um die Verknüpfung mit Git **vor** Fortsetzung zu entfernen. Tatsächlich ist die Änderung des für eine Website deklarierten Stammordners nicht möglich, wenn Ihre Website mit Git konfiguriert ist.

Überprüfen Sie, ob Ihre Webseite korrekt angezeigt wird. Wenn dies nicht der Fall ist, starten Sie Ihr Gerät neu und leeren Sie den Cache Ihres Browsers.

Stellen Sie außerdem sicher, dass eine Datei namens **index.php** oder **index.html** in Ihrem Zielverzeichnis vorhanden ist.

## Weiterführende Informationen <a name=“go-further“></a>

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

[Fehler “Seite nicht installiert” beheben](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
