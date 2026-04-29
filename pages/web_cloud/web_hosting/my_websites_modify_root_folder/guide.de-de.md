---
title: "Wie ändere ich das Wurzelverzeichnis einer bestehenden Website?"
excerpt: "Erfahren Sie, wie Sie das für eine bestehende Website auf Ihrem Webhosting deklarierte Wurzelverzeichnis über Ihr OVHcloud Kundencenter ändern"
updated: 2026-05-04
---

## Ziel

Sie können mehrere Websites auf demselben Webhosting-Angebot hosten, auch wenn die Domainnamen nicht bei OVHcloud registriert sind. Darüber hinaus können Sie einen oder mehrere Domainnamen oder Subdomains mit derselben Website verknüpfen.

Bei der Nutzung Ihrer Dienste können Sie Folgendes benötigen:

- Den gesamten Inhalt einer bestehenden Website ersetzen, ohne sie von Ihrem Webhosting zu entfernen. Dies ohne Unterbrechung des Zugangs und in voller Transparenz für die Besucher Ihrer Website.
- Ein [1-Klick-Modul](/pages/web_cloud/web_hosting/cms_install_1_click_modules) oder ein [anderes CMS](/pages/web_cloud/web_hosting/cms_manual_installation) installieren, um den Inhalt einer bestehenden Website zu ersetzen, ohne den alten Inhalt von Ihrem Webhosting zu löschen. In diesem Fall müssen Sie anschließend die verschiedenen Seiten Ihrer neuen Website über Ihren Webbrowser erstellen.
- Die Namen der Wurzelverzeichnisse Ihrer Websites im Speicherplatz Ihres Webhostings neu organisieren, ohne den Zugang zu Ihren verschiedenen Websites zu unterbrechen.

**Erfahren Sie, wie Sie das für eine bestehende Website auf Ihrem Webhosting deklarierte Wurzelverzeichnis über Ihr OVHcloud Kundencenter ändern.**

> [!primary]
> Dieses Verfahren gilt für die [neue Version des OVHcloud Kundencenters](/links/control-panel-ovhcloud), die derzeit als Beta verfügbar ist. Um es durchzuführen, wechseln Sie aus Ihrem gewohnten Kundencenter zu dieser Oberfläche.
>
> Wenn Sie die betreffende Website noch nicht auf Ihrem Webhosting erstellt haben, lesen Sie **direkt** [diese Anleitung](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Wenn Ihre Website eine Git-Konfiguration verwendet, lesen Sie zunächst unsere Anleitung "[Git mit Ihrem OVHcloud Webhosting konfigurieren und verwenden](/pages/web_cloud/web_hosting/git_integration_webhosting)", um die Git-Verknüpfung **vor** dem Fortfahren zu entfernen. Die Änderung des Wurzelverzeichnisses ist nicht möglich, wenn Ihre Website mit Git konfiguriert ist. In diesem Fall würde die Änderung des Wurzelverzeichnisses die Git-Verknüpfung stören.

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](/links/web/hosting-multisite).
- Sie verfügen über einen oder mehrere [Domainnamen](/links/web/domains).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting-sites)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > `Websites`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

> [!warning]
> Diese Anleitung beschreibt ausschließlich die Aktionen, die über Ihr [OVHcloud Kundencenter](/links/manager) durchzuführen sind.
>
> Außer in dem Fall, dass Sie ein 1-Klick-Modul installieren möchten, um die Website schrittweise aufzubauen, müssen Sie vorab:
>
> - Das neue Wurzelverzeichnis im [Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) Ihres Webhostings erstellen.
> - Den gesamten neuen Inhalt Ihrer Website in dieses neue Verzeichnis einfügen.
> - Wenn der neue Inhalt Ihrer Website eine Datenbank verwendet, müssen Sie auch eine [Datenbank erstellen](/pages/web_cloud/web_hosting/sql_create_database) und den [Datenbankinhalt importieren](/pages/web_cloud/web_hosting/sql_importing_mysql_database).
> - Die Zugangsdaten für die Datenbank in die Datei mit den Verbindungsinformationen zur Datenbank einfügen. Diese Datei muss bereits im neuen Wurzelverzeichnis vorhanden sein.
>
> **Ohne diese Aktionen wird die Anzeige Ihrer Website unterbrochen**.
>
> Diese Anleitung beschreibt ausschließlich das Verfahren zur Änderung des ursprünglich für Ihre Website definierten Wurzelverzeichnisses über Ihr OVHcloud Kundencenter. Diese Aktion ist erforderlich, damit die Website den Inhalt des neuen Verzeichnisses anstelle des alten anzeigt.

<!-- CP-STEPS-START:modify-root-folder -->
Klicken Sie auf die nachstehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting-sites) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Hosting-Pakete](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-sites.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `Meine Seiten`{.action}.
>>
>> ![Meine Seiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-sites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie in der angezeigten Tabelle auf den Button `⁝`{.action} rechts neben der betreffenden Website und dann auf `Website bearbeiten`{.action}.
>>
>> ![Website-Optionen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Ersetzen Sie im sich öffnenden Fenster im Formular **Wurzelverzeichnis** das alte Wurzelverzeichnis durch das neue.
>>
>> ![Wurzelverzeichnis ändern](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/edit-site-folder.png){.thumbnail}
>>
>> Klicken Sie anschließend auf `Bestätigen`{.action}.
>>
<!-- CP-STEPS-END:modify-root-folder -->

## Weiterführende Informationen

[Meine Webseite online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
