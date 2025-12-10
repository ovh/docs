---
title: 'Webhosting mit mehreren Webseiten teilen'
excerpt: "Erfahren Sie, wie Sie verschiedene Webseiten auf Ihrem Webhosting-Plan hosten können"
updated: 2025-12-11
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Sie können mehrere Webseiten auf einem Webhosting-Plan hosten, selbst wenn die Domänennamen nicht bei OVHcloud registriert sind.

Möchten Sie eine neue Website auf Ihrem Webhosting-Plan hinzufügen?

**Erfahren Sie, wie Sie verschiedene Webseiten auf Ihrem Webhosting-Plan hosten können.**

> [!primary]
> Wenn Sie bereits eine Website auf Ihrem Webhosting-Plan erstellt haben und diese mit einem neuen Domänennamen oder Subdomain verknüpfen möchten, besuchen Sie direkt [diesen Leitfaden](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

## Voraussetzungen

- Ein kompatibler [OVHcloud Webhosting-Plan](/links/web/hosting-multisite) besitzen.
- Einen oder mehrere [Domänennamen](/links/web/domains) besitzen.
- Die Konfiguration Ihrer Domänen von der [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) aus ändern können.
- Angemeldet sein bei Ihrem [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### 1 - Fügen Sie eine Website zu Ihrem Webhosting-Plan hinzu

**Klicken Sie auf einen der untenstehenden Titel, um die Erklärungen anzuzeigen.**

<a name="add-domain-ovhcloud"></a>

/// details | Fügen Sie eine Website mit einem Domänennamen hinzu, der in Ihrem OVHcloud Kundencenter verwaltet wird

Dieser Abschnitt gilt nur, wenn der Domänennamen (und/oder seine aktive DNS-Zone), mit dem Sie Ihre Website erstellen möchten, **in Ihrem OVHcloud Kundencenter** vorhanden ist.

Klicken Sie auf die nachfolgenden Tabs, um die **8** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Klicken Sie oben links in der Tabelle auf die Schaltfläche `Eine Seite hinzufügen`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Aktivieren Sie die Option `Einen bestehenden OVHcloud-Domain zuordnen`{.action} und klicken Sie auf `Weiter`{.action}.
>>
>> Geben Sie im Feld **Seitenname** den Namen ein, den Sie für Ihre Website verwenden möchten. Dieser Name wird nur in der Registerkarte `Meine Seiten`{.action} Ihres Webhosting-Plans angezeigt.
>>
>> Wählen Sie anschließend den zu verknüpfenden Domänennamen im Dropdown-Feld **Domainname - erforderlich** aus, das darunter erscheint.
>>
>> > [!primary]
>> > Um eine Subdomain hinzuzufügen, wählen Sie zunächst den Domänennamen aus der Liste (z. B. domain.tld) aus. Aktivieren Sie anschließend das Feld `Subdomain erstellen`{.action}. Ein Eingabefeld wird angezeigt, in das Sie die Subdomain eingeben können (z. B. **sub**.domain.tld).
>> >
>> > **Besonderheit**: Subdomains im Format `www` (z. B. **www**.domain.tld) werden automatisch hinzugefügt. Daher ist es nicht notwendig, diese spezielle Subdomain im Eingabefeld zu erwähnen.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Standardmäßig wird der **Wurzelverzeichnis** Ihrer Website automatisch erstellt, sobald Sie diese zu Ihrem Webhosting-Plan hinzufügen. Dieser **Wurzelverzeichnis** wird ebenfalls im Speicherbereich Ihres Webhosting-Plans (über FTP, SFTP oder SSH, je nach Angebot) erstellt.
>> >
>> > Wenn Sie den Namen des **Wurzelverzeichnis** anpassen möchten, insbesondere wenn der Inhalt Ihrer Website bereits in einem bestimmten Ordner Ihres Speicherbereichs vorhanden ist, können Sie dies tun, indem Sie die Schaltfläche `Erweiterte Konfiguration`{.action} aktivieren.
>> >
>> > **Der Name des Wurzelverzeichnisses kann nur zum Zeitpunkt des Hinzufügens der Website zu Ihrem Webhosting-Plan angepasst werden.** Das bedeutet, dass Sie den Namen des Root-Ordners nach der Erstellung und dem Hinzufügen der Website zu Ihrem Webhosting-Plan **nicht mehr ändern können**.
>>
>> Wenn Sie den Namen des Root-Ordners anpassen oder eine der **erweiterten Optionen** nutzen möchten, aktivieren Sie die Schaltfläche `Erweiterte Konfiguration`{.action} und wechseln Sie zu **Schritt 6**. Andernfalls können Sie direkt zu **Schritt 7** wechseln.
>>
> **Schritt 6**
>>
>> > [!primary]
>> >
>> > Dieser Schritt ist **optional**. Er richtet sich ausschließlich an Kunden, die den Root-Ordner anpassen oder bestimmte Funktionen über die Schaltfläche `Erweiterte Konfiguration`{.action} aktivieren möchten.
>> >
>> > **Mit Ausnahme der Anpassung des Wurzelverzeichnisses können alle diese Funktionen später aktiviert werden, sobald der Domänennamen zu Ihrer Website hinzugefügt wurde.** Dazu können Sie direkt [diesen Leitfaden](/pages/web_cloud/web_hosting/multisites_modify_domain) konsultieren.
>>
>> Um den Namen des Root-Ordners anzupassen, der mit Ihrer Website verknüpft und deren Dateien enthalten wird, geben Sie den gewünschten Namen im Feld **Wurzelverzeichnis** ein.
>>
>> Untenstehend finden Sie eine Beschreibung der weiteren Optionen. 
>> Abhängig von Ihrem [Webhosting-Plan](/links/web/hosting) können einige der untenstehenden Optionen nicht ausgewählt werden.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Option|Beschreibung|
>> |---|---|
>> |IP des Landes|Ermöglicht das Nutzen einer geolokalisierten IP-Adresse (aus einer Liste von Ländern) für den ausgewählten Domänennamen.<br> Weitere Informationen finden Sie auf [dieser Seite](/links/web/hosting-options).|
>> |Firewall|Ermöglicht die Aktivierung eines Firewalls (Filterung und Analyse von Anfragen) für den ausgewählten Domänennamen.<br> Weitere Informationen finden Sie auf [dieser Seite](/links/web/hosting-options).|
>> |CDN|Ermöglicht die Aktivierung des CDNs (Caching von statischen Elementen Ihrer Website, wie z. B. Bilder) für den ausgewählten Domänennamen.<br> Weitere Informationen finden Sie auf [dieser Seite](/links/web/hosting-options-CDN).<br> Durch die Aktivierung von SSL und CDN können Sie außerdem vom Protokoll **HTTP/2** profitieren (dieses Protokoll ist standardmäßig in unserem Datacenter in Gravelines aktiviert).|
>>
>> Sobald die Schaltfläche `Erweiterte Konfiguration`{.action} aktiviert ist, können Sie auch die DNS-Konfigurationsmethode für Ihren Domänennamen auswählen:
>>
>> - **Für eine automatische DNS-Konfiguration** lassen Sie das Feld `Automatische Konfiguration (Empfohlen)`{.action} aktiviert.
>> - **Für eine manuelle DNS-Konfiguration** aktivieren Sie das Feld `Manuelle Konfiguration`{.action}. Um anschließend die Konfiguration Ihrer DNS-Zone vorzunehmen, konsultieren Sie die folgenden Leitfäden:
>>     - [Webhosting - Liste der IP-Adressen nach Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [DNS-Zone von OVHcloud bearbeiten](/pages/web_cloud/domains/dns_zone_edit)
>>
> **Schritt 7**
>>
>> OVHcloud stellt die Module WordPress, Joomla!, PrestaShop und Drupal bereit. Sie ermöglichen es, eine sofort einsatzbereite Website-Struktur automatisch im zuvor konfigurierten Root-Ordner zu installieren. Weitere Informationen finden Sie in unserer Dokumentation „[Installation Ihrer Website mit 1-Klick-Modulen (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)“.
>>
>> Wenn Sie ein 1-Klick-Modul installieren möchten, wählen Sie das gewünschte Modul am unteren Rand der Seite aus und gehen Sie zum nächsten Schritt über.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Falls Sie Ihre Website stattdessen manuell installieren möchten, laden Sie ihre Dateien herunter und übertragen Sie sie in den entsprechenden Root-Ordner auf dem Speicherplatz Ihres Webhostings. Weitere Informationen finden Sie in unserer Dokumentation „[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)“.
>>
> **Schritt 8**
>>
>> Stellen Sie sicher, dass alle zuvor eingegebenen Informationen korrekt sind, und klicken Sie auf `Weiter`{.action}, um den Domänennamen oder die Subdomain zu Ihrer Website hinzuzufügen.
>>
>> Dieser Vorgang kann bis zu eine Stunde dauern.
>>
>> Wenn Sie die Option `Manuelle Konfiguration`{.action} in der Registerkarte `Erweiterte Konfiguration`{.action} nicht ausgewählt haben, erfolgt die DNS-Konfiguration automatisch, sofern die aktive DNS-Zone Ihres Domänennamens in Ihrem OVHcloud Kundencenter verwaltet wird.
>>
>> Andernfalls konsultieren Sie die folgenden Leitfäden, um Ihre DNS-Zone manuell zu konfigurieren:
>>
>> - [Webhosting - Liste der IP-Adressen nach Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [DNS-Zone von OVHcloud bearbeiten](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > Die Änderung der DNS-Konfiguration Ihres Domänennamens benötigt eine Ausbreitungszeit, die bis zu 24 Stunden dauern kann, bevor sie vollständig wirksam ist.

///

/// details | Fügen Sie eine Website mit einem Domänennamen hinzu, der nicht in Ihrem OVHcloud Kundencenter verwaltet wird

Dieser Abschnitt gilt nur, wenn Sie eine Website mit einem Domänennamen hinzufügen möchten, der nicht in Ihrem OVHcloud-Konto vorhanden ist. Dies kann ein Domänennamen sein, der in einem anderen OVHcloud-Konto vorhanden ist oder bei einem anderen Anbieter registriert ist.

Klicken Sie auf die nachfolgenden Tabs, um die **8** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Klicken Sie oben links in der Tabelle auf die Schaltfläche `Eine Seite hinzufügen`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Aktivieren Sie die Option `Einen externen Domain zuordnen`{.action} und klicken Sie auf `Weiter`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Schritt 6**
>>
>> Geben Sie im Feld **Seitenname** den Namen ein, den Sie für Ihre Website verwenden möchten. Dieser Name wird nur in der Registerkarte `Meine Seiten`{.action} Ihres Webhosting-Plans angezeigt.
>>
>> Geben Sie anschließend den Domänennamen (z. B. domain.tld) oder die Subdomain (z. B. **sub**.domain.tld) ein, die Sie verknüpfen möchten, in das Feld **Domainname - erforderlich**, das darunter erscheint.
>>
>> > [!success]
>> >
>> > **Besonderheit**: Subdomains im Format `www` (z. B. **www**.domain.tld) werden automatisch hinzugefügt. Daher ist es nicht notwendig, diese spezielle Subdomain im Eingabefeld zu erwähnen.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-site-external-step-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Standardmäßig wird der **Wurzelverzeichnis** Ihrer Website automatisch erstellt, sobald Sie diese zu Ihrem Webhosting-Plan hinzufügen. Dieser **Wurzelverzeichnis** wird ebenfalls im Speicherbereich Ihres Webhosting-Plans (über FTP, SFTP oder SSH, je nach Angebot) erstellt.
>> >
>> > **Der Name des Wurzelverzeichnisses kann nur zum Zeitpunkt des Hinzufügens der Website zu Ihrem Webhosting-Plan angepasst werden.** Das bedeutet, dass Sie den Namen des Root-Ordners nach der Erstellung und dem Hinzufügen der Website zu Ihrem Webhosting-Plan **nicht mehr ändern können**.
>>
>> Um den Namen des Root-Ordners anzupassen, der mit Ihrer Website verknüpft und deren Dateien enthalten wird, geben Sie den gewünschten Namen im Feld **Wurzelverzeichnis** ein. Wenn Sie dies nicht tun möchten, lassen Sie das Feld leer.
>>
>> Klicken Sie anschließend auf die Schaltfläche `Weiter`{.action}.
>>
> **Schritt 7**
>>
>> > [!primary]
>> >
>> > Im Gegensatz zu Domänennamen, die direkt in Ihrem OVHcloud Kundencenter verwaltet werden, sind die **erweiterten Optionen** nicht direkt verfügbar, wenn Sie eine Website mit einem Domänennamen oder einer Subdomain hinzufügen, die nicht in Ihrem OVHcloud-Konto verwaltet wird.
>> >
>> > Mit Ausnahme des Root-Ordners können **alle diese Funktionen später aktiviert oder geändert werden, sobald der Domänennamen oder die externe Subdomain zu Ihrer Website hinzugefügt wurde.** Dazu können Sie direkt [diesen Leitfaden](/pages/web_cloud/web_hosting/multisites_modify_domain) konsultieren.
>>
>> Die Hinzufügung einer Website mit einem Domänennamen, der nicht bei OVHcloud ist, erfordert eine obligatorische zusätzliche Validierung. Dies ermöglicht uns, sicherzustellen, dass die Hinzufügung des externen Domänennamens legitim ist. Sie werden daher aufgefordert, die DNS-Konfiguration des Domänennamens zu ändern.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Merken Sie sich die angezeigten Elemente und klicken Sie auf die Schaltfläche `Weiter`{.action}. Danach wird der Domänennamen vorübergehend hinzugefügt, bis Sie seine DNS-Konfiguration ändern können.
>>
>> > [!warning]
>> >
>> > Sie müssen diese Änderungen **sofort vornehmen**, damit Ihr Domänennamen ordnungsgemäß mit Ihrer Website verknüpft wird. Ohne diese Aktion wird die Hinzufügung Ihres Domänennamens storniert und Ihre neu erstellte Website wird nicht zugänglich sein.
>> >
>> > Die DNS-Einträge vom Typ **A** und **TXT** müssen zwingend in der aktiven DNS-Zone Ihres Domain-Namens platziert sein, damit dieser mit Ihrer Website verknüpft wird. Nur die DNS-Einträge vom Typ **AAAA** sind optional.
>> >
>> > Achten Sie darauf, dass Sie, wenn Sie `sub.domain.tld` verknüpfen möchten, den TXT-Eintrag `ovhcontrol.domain.tld` und nicht den Eintrag `ovhcontrol.sub.domain.tld` erstellen.
>> >
>> > Um die aktive DNS-Zone Ihres Domain-Namens zu finden, identifizieren Sie die [DNS-Server](/pages/web_cloud/domains/dns_server_edit), an die diese Domain angeschlossen ist. Sie müssen nur den Domain-Namen mithilfe des Feldes **TXT** bestätigen, nicht jedoch alle Unterdomänen.
>>
> **Schritt 8**
>>
>> OVHcloud stellt die Module WordPress, Joomla!, PrestaShop und Drupal bereit. Sie ermöglichen es, eine sofort einsatzbereite Website-Struktur automatisch im zuvor konfigurierten Root-Ordner zu installieren. Weitere Informationen finden Sie in unserer Dokumentation „[Installation Ihrer Website mit 1-Klick-Modulen (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)“.
>>
>> Wenn Sie ein 1-Klick-Modul installieren möchten, wählen Sie das gewünschte Modul am unteren Rand der Seite aus und klicken Sie auf `Weiter`{.action}, um die Anfrage zur Installation Ihrer Website auf Ihrem Webhosting abzuschließen.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Falls Sie Ihre Website stattdessen manuell installieren möchten, laden Sie ihre Dateien herunter und übertragen Sie sie in den entsprechenden Root-Ordner auf dem Speicherplatz Ihres Webhostings. Weitere Informationen finden Sie in unserer Dokumentation „[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)“.

///

/// details | Fügen Sie eine Website mit einem neuen Domain-Namen hinzu, der noch nicht registriert wurde

Dieser Abschnitt gilt ausschließlich, wenn Sie eine Website mit einem Domain-Namen hinzufügen möchten, der noch nicht registriert wurde, weder bei OVHcloud noch bei einem anderen Registrar. Mit anderen Worten, es geht um Domain-Namen, die noch nicht abgeschlossen wurden.

Klicken Sie auf die nachfolgenden Tabs, um die **6** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf das Menü `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Klicken Sie links oben in der Tabelle auf die Schaltfläche `Eine Seite hinzufügen`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Aktivieren Sie die Option `Eine neue Domain bestellen`{.action} und klicken Sie auf `Weiter`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-subdomain-new-step-1.png){.thumbnail}
>>
> **Schritt 6**
>>
>> Sie werden dann zu unserer kommerziellen Seite für die Registrierung eines Domain-Namens weitergeleitet. Wählen Sie Ihren neuen Domain-Namen basierend auf der Marktabverfügbarkeit aus. Folgen Sie anschließend den Anweisungen im Bestellprozess bis zur Validierung der Bestellung. Dies geschieht ohne zusätzliche Registrierung eines neuen Webhosting-Plans.
>>
>> Nachdem Ihre Bestellung bezahlt und validiert wurde, warten Sie einige Minuten, bis diese verarbeitet wird.
>>
>> > [!primary]
>> >
>> > Sobald Ihr Domain-Name in Ihrem OVHcloud Kundencenter angezeigt wird, folgen Sie dem Abschnitt "[Fügen Sie eine Website zu Ihrem Webhosting-Plan hinzu](#add-domain-ovhcloud)" dieses Leitfadens, um Ihre Website Ihrem Webhosting hinzuzufügen.

///

### 2 - Ihre Website online stellen <a name="site-online"></a>

Sobald Ihre Website mit Ihrem Domain-Namen auf Ihrem Webhosting registriert ist, können Sie den Inhalt Ihrer Website online stellen. Erinnern Sie sich daran, dass Sie diese Aktion im **Wurzelverzeichnis** durchführen müssen, das Sie bei der Hinzufügung der Website in Ihrem OVHcloud Kundencenter festgelegt haben.

> [!primary]
>
> Wenn Sie mehrere Websites hinzufügen möchten, wiederholen Sie die in diesem Leitfaden beschriebenen Aktionen.
>
> Wir empfehlen Ihnen, aufmerksam zu sein, wie viele Websites auf Ihrem Webhosting vorhanden sind. Je mehr Websites vorhanden sind, desto mehr Ressourcen Ihres Webhostings werden beansprucht. [Die Seite mit unseren Webhosting-Angeboten](/links/web/hosting) gibt an, wie viele Websites Sie auf Ihrem Webhosting empfohlenweise hosten können.

## Weiterführende Informationen

[Installation Ihrer Website mit 1-Klick-Modulen (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.