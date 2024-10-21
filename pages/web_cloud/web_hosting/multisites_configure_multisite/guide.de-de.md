---
title: Mehrere Websites auf einem Webhosting einrichten
excerpt: Erfahren Sie hier, wie Sie ein Webhosting für mehrere Websites verwenden
updated: 2024-03-15
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie können mehrere Websites auf einem einzigen Webhosting-Angebot hosten, auch wenn die Domainnamen nicht bei OVHcloud registriert sind.

**Diese Anleitung erklärt, wie Sie mehrere Websites über ein Webhosting bereitstellen.**

### Inhaltsübersicht

- 1: [Auf die Multisite-Verwaltung zugreifen](#multisite-menu)
- 2: [Eine Domain oder Subdomain hinzufügen](#add-domain)
    - 2.1: [Eine bei OVHcloud registrierte Domain hinzufügen](#add-ovhcloud-domain)
    - 2.2: [Eine externe Domain hinzufügen](#add-external-domain)
- 3: [Ihre Website online stellen](#site-online)

## Voraussetzungen

- Sie haben ein kompatibles [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.
- Sie besitzen eine oder mehrere [Domainnamen](/links/web/domains){.external}.
- Sie sind berechtigt, die Konfiguration Ihrer Domainnamen (die [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)) zu ändern.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!primary]
>
> Die meisten Angebote der Reihe [OVHcloud Webhosting](/links/web/hosting){.external} inkludieren eine Option zur Erstellung von E-Mail-Accounts mit Adressen, die Ihren Domainnamen verwenden.
>
> Diese Option kann für **nur einen** Domainnamen aktiviert werden. Während *Multisite* mit mehreren verschiedenen Domainnamen funktioniert, können Sie die E-Mail-Option nur für einen Ihrer Domainnamen aktivieren.
>
> Weitere Informationen zur Aktivierung dieser Option finden Sie in unserer [Anleitung](/pages/web_cloud/web_hosting/activate-email-hosting).
>

### Schritt 1: Auf die Multisite-Verwaltung zugreifen <a name="multisite-menu"></a>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie `Web Cloud`{.action} aus. Klicken Sie auf `Hosting-Pakete`{.action}, wählen Sie den betreffenden Dienst aus und gehen Sie zum Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains und Subdomains auf, die Ihrer Webhosting-Lösung hinzugefügt wurden. Einige wurden bei der Installation Ihres Hostings automatisch hinzugefügt.

> [!primary]
>
> Wenn Sie Ihre Website migrieren und Dienstunterbrechungen vermeiden möchten, folgen Sie [Schritt 3: Ihre Website online stellen](#site-online).
>

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/tab.png){.thumbnail}

### Schritt 2: Eine Domain oder Subdomain hinzufügen <a name="add-domain"></a>

Um eine neue Domain oder Subdomain zu Ihrem Webhosting hinzuzufügen, klicken Sie links auf den Button `Aktionen`{.action}, dann auf `Eine Domain oder Subdomain hinzufügen`{.action} und wählen Sie den Domainnamen im angezeigten Fenster aus.

![Aktionen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/actions-menu.png){.thumbnail}

- **Eine bei OVHcloud registrierte Domain hinzufügen**:

Hier werden nur die Domainnamen bei OVHcloud angezeigt, für die Sie als [technischer Kontakt und/oder Administrator in Ihrem Kundencenter](/pages/account_and_service_management/account_information/managing_contacts) hinterlegt sind. Wählen Sie aus der Liste aus und klicken Sie auf `Weiter`{.action}. Gehen Sie dann zu [Schritt 2.1: Eine bei OVHcloud registrierte Domain hinzufügen](#add-ovhcloud-domain).

- **Eine externe Domain hinzufügen**:

Falls die Domain einem anderen Kunden-Account zugeordnet ist oder außerhalb von OVHcloud (externer Provider) registriert ist, wählen Sie `Eine externe Domain hinzufügen`{.action} und klicken Sie auf `Weiter`{.action}. Gehen Sie dann zu [Schritt 2.2: Externe Domain hinzufügen](#add-external-domain).

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}

#### Schritt 2.1: Eine bei OVHcloud registrierte Domain hinzufügen <a name="add-ovhcloud-domain"></a>

> [!warning]
> Dieser Schritt gilt nur, wenn Sie "Eine bei OVHcloud registrierte Domain hinzufügen" ausgewählt haben. Die Domain oder deren DNS-Zone muss sich **in Ihrem Kundencenter** befinden. Für externe Domainnamen gehen Sie zu [Schritt 2.2: eine externe Domain hinzufügen](#add-external-domain).

Konfigurieren Sie nun das Hinzufügen der Domain oder Subdomain. Je nach Ihrem [Webhosting-Angebot](/links/web/hosting){.external} können manche Optionen nicht verfügbar sein.

> [!primary]
> Um eine Subdomain hinzuzufügen, wählen Sie zuerst die Hauptdomain aus der Liste aus (Beispiel: domain.tld). Im nächsten Schritt können Sie die Subdomain angeben (Beispiel: **blog**.domain.tld).

![multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-ovh-step-2.png){.thumbnail}

|Information|Beschreibung|
|---|---|
|Domains|Die ausgewählte Domain wird in der Standardeinstellung automatisch angezeigt. Sie können dort eine Subdomain hinzufügen (zum Beispiel **blog**.domain.tld) und gleichzeitig die zugehörige www-Subdomain erstellen (zum Beispiel **www.blog**.domain.tld). Diese Domain ist die Internetadresse der Website, die Sie online stellen möchten.|
|Wurzelverzeichnis|Legen Sie den Ordner auf Ihrem Speicherplatz fest, auf den die Domain verweist. Die Dateien der Website müssen in diesem Ordner liegen. Bei blog.domain.tld zum Beispiel könnte das Wurzelverzeichnis "blog" sein. Sollte das Verzeichnis nicht existieren, wird es automatisch erstellt.|
|SSL|Mit SSL können Sie für die ausgewählte Domain eine verschlüsselte Verbindung (HTTPS://) einrichten. Weitere Informationen finden Sie auf unserer Seite zu [SSL-Zertifikaten](https://www.ovh.de/ssl/){.external}. Wenn Sie SSL und CDN (Content Delivery Network) aktivieren, können Sie auch das **HTTP/2**-Protokoll verwenden (letzteres ist standardmäßig in unserem Rechenzentrum in Gravelines aktiviert).|
|CDN aktivieren|Hier können Sie für die ausgewählte Domain ein CDN aktivieren (Caching statischer Inhalte Ihrer Website, beispielsweise Bilder). Weitere Informationen finden Sie auf unserer Seite zum [Content Delivery Network](/links/web/hosting-options-cdn){.external}. Wenn Sie SSL und CDN aktivieren, können Sie auch das **HTTP/2**-Protokoll verwenden (letzteres ist standardmäßig in unserem Rechenzentrum in Gravelines aktiviert).|
|IP des Landes|Bei diesem Punkt können Sie für die ausgewählte Domain eine geolokalisierte IP-Adresse aus einer Länderliste auswählen. Weitere Informationen hierzu finden Sie auf unserer Seite zu [IPs und Geolokalisierung](/links/web/hosting-options){.external}.|
|Firewall aktivieren|Hier können Sie für die ausgewählte Domain eine Firewall (Anfragenanalyse) aktivieren. Weitere Informationen finden Sie auf unserer Seite zu [ModSecurity](/links/web/hosting-options){.external}.|
|Getrennte Logs|Sie können hier für die ausgewählte Domain einen neuen Bereich für separate Logs aktivieren. Wählen Sie aus einer Liste eine Domain aus, die als Zugangsname für den neuen Bereich verwendet wird. Weitere Informationen finden Sie auf [unserer Seite zu detaillierten Statistiken](/links/web/hosting-traffic-analysis){.external}.|

> [!warning]
>
> Sie können die separaten Logs nicht für eine externe Domain aktivieren. Diese Option ist nur für bei OVHcloud registrierte Domains verfügbar.
>

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Überprüfen Sie die angezeigte Zusammenfassung.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-ovh-step-3.png){.thumbnail}

Wenn Sie eine bei OVHcloud registrierte Domain ausgewählt haben, können Sie deren DNS-Konfiguration automatisch oder manuell ändern.

- **Automatische DNS-Konfiguration**: Setzen Sie einen Haken im Feld `Automatische Konfiguration (empfohlen)`{.action}.
- **Manuelle DNS-Konfiguration**: Entfernen Sie den Haken im Feld `Automatische Konfiguration (empfohlen)`{.action} und notieren Sie sich die angezeigten Informationen. Wenn Sie diese Einstellung vornehmen möchten, lesen Sie unsere Anleitung ["Bearbeiten der OVHcloud DNS-Zone"](/pages/web_cloud/domains/dns_zone_edit){.external}.

Klicken Sie auf `Bestätigen`{.action}, um die Domain hinzuzufügen. Dies kann bis zu einer Stunde dauern. Die Änderung der DNS-Konfiguration Ihrer Domain erfordert zusätzlich eine Propagationszeit von 4 bis 24 Stunden, bis sie voll wirksam ist.

Nachdem die Domain hinzugefügt wurde, gehen Sie zu [Schritt 3: Ihre Website online stellen](#site-online).

#### Schritt 2.2: Eine externe Domain hinzufügen <a name="add-external-domain"></a>

 Dieser Schritt gilt nur, wenn Sie "Externe Domain hinzufügen" ausgewählt haben.
 
 Ihre Domain ist also nicht bei OVHcloud registriert **oder** nicht in **Ihrem** OVHcloud Kunden-Account registriert. 

 > Bevor Sie fortfahren, bearbeiten Sie am besten die DNS-Zone der externen Domain, bevor Sie den Multisite-Eintrag hinzufügen.
 >
 > Die Änderung der Konfiguration der externen Domain (die zugehörige DNS-Zone) muss über das Interface des Anbieters vorgenommen werden, der die externe Domain verwaltet. Wenn es sich um OVHcloud handelt, lesen Sie unsere Anleitung ["Bearbeiten der OVHcloud DNS-Zone"](/pages/web_cloud/domains/dns_zone_edit){.external}. Nach der Änderung ist eine Propagationszeit von 1 bis 24 Stunden erforderlich, bis sie voll wirksam ist.
>
> Im Folgenden finden Sie die 2 Elemente, die zur DNS-Konfiguration Ihrer externen Domain geändert werden müssen:
>
> |Feld|Wo finde ich die Information?|Durchzuführende Maßnahme|
> |---|---|---|
> |TXT|Tab `Multisite`{.action}, klicken Sie auf `Konfiguration des Tokens ovhcontrol`{.action}|OVHcloud stellt sicher, dass das Hinzufügen jeder externen Domain legitim ist. Achten Sie darauf, den TXT-Eintrag mit der Subdomain `ovhcontrol` (z.B. `ovhcontrol.domain.tld`) in der DNS-Zone zu erstellen, die für die hinzuzufügende Domain zuständig ist.<br></br>Bitte beachten Sie, wenn Sie `blog.domain.tld` hinzufügen möchten, dass der Eintrag für die Subdomain `ovhcontrol.domain.tld` sein muss, und nicht `ovhcontrol.blog.domain.tld`.<br></br> Um die relevante DNS-Zone zu bearbeiten, prüfen Sie, welche [DNS-Server](/pages/web_cloud/domains/dns_server_edit) Ihre Domain verwendet. Sie müssen nur die Hauptdomain validieren, nicht alle Subdomains.|
>
> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/find-token.png){.thumbnail}
>
> |Feld|Wo finde ich die Information?|Durchzuführende Maßnahme|
> |---|---|---|
> |A und AAAA|Tab `Allgemeine Informationen`{.action}, neben **IPv4** und **IPv6**|Dank diesen beiden Einträgen kann Ihre Domain die Website anzeigen, die Sie auf Ihrem Webhosting online stellen. Weisen Sie Ihre Domain oder Subdomain der IP-Adresse Ihres Hostings zu.|
>
> ![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>

 Passen Sie nun die Optionen zum Hinzufügen der Domain an. Einige Optionen Ihres [Webhostings](/links/web/hosting){.external} können nicht direkt beim Hinzufügen der Domain aktiviert werden. Sie können die Optionen erst im Anschluss verwenden, indem Sie die Multisite-Einstellungen ändern, nachdem die Domain hinzugefügt wurde.

|Information|Beschreibung|
|---|---|
|Domain|Geben Sie hier die Domain ein, die Sie verwenden möchten. Fügen Sie bei Bedarf eine Subdomain hinzu (**blog**.domain.tld) und erstellen Sie gleichzeitig die zugehörige www-Subdomain (zum Beispiel **www.blog**.domain.tld). Diese Domain entspricht der Internetadresse der Website, die Sie online stellen möchten. Bitte beachten Sie, dass Sie die Rechte für die Änderung der DNS-Konfiguration benötigen, um die Domain hinzuzufügen.|
|Wurzelverzeichnis| Legen Sie den Ordner auf Ihrem Speicherplatz fest, auf den die Domain verweist. Die Dateien der Website müssen in diesem Ordner liegen. Bei blog.domain.tld zum Beispiel könnte das Wurzelverzeichnis "blog" sein. Sollte das Verzeichnis nicht existieren, wird es automatisch erstellt.|
|IPv6 aktivieren|Hier können Sie für die angegebene Domain das IPv6-Protokoll aktivieren. Weitere Informationen hierzu finden Sie auf unserer Seite zu [IPs und Geolokalisierung](/links/web/hosting-options){.external}.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Überprüfen Sie die angezeigte Zusammenfassung.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}

Jedes Hinzufügen einer Domain außerhalb von OVHcloud erfordert eine zusätzliche Validierung. So können wir sicherstellen, dass das Hinzufügen der externen Domain legitim ist. In einer Nachricht werden Sie aufgefordert, die DNS-Konfiguration der Domain zu ändern.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}

Überprüfen Sie die angezeigten Informationen und klicken Sie dann auf den Button `Bestätigen`{.action}. Die Domain wird nun temporär hinzugefügt, bis Sie die DNS-Konfiguration ändern.

> [!warning]
>
> Sie müssen diese Änderungen **zeitnah** vornehmen, damit Ihre Domain korrekt hinzugefügt wird. Andernfalls wird das Hinzufügen Ihrer Domain abgebrochen.
>
> Die DNS-Einträge vom Typ **A** und **TXT** müssen zwingend in der aktiven DNS-Zone Ihres Domainnamens konfiguriert werden, damit er zu Ihrem Webhosting hinzugefügt werden kann. Nur DNS-Einträge vom Typ **AAAA** sind optional.
>

### Schritt 3: Ihre Website online stellen <a name="site-online"></a>

Sobald die Domain hinzugefügt wurde, muss nur noch die zugehörige Website online gestellt werden. Zur Erinnerung: Nehmen Sie diese Änderung in dem Wurzelverzeichnis vor, das Sie im vorherigen Schritt festgelegt haben.

Um Ihnen dabei zu helfen, können Sie mithilfe der 1-Klick-Module von OVHcloud eine gebrauchsfertige Websitestruktur nutzen. Die Website wird dann automatisch im zuvor konfigurierten Wurzelverzeichnis installiert. Weitere Informationen zu den 1-Klick-Modulen finden Sie in unserer Anleitung [„Installation Ihrer Website mit 1-Klick-Modulen“](/pages/web_cloud/web_hosting/cms_install_1_click_modules){.external}. 

Möchten Sie Ihre Website hingegen manuell installieren, tragen Sie alle zugehörigen Dateien zusammen und stellen Sie diese im entsprechenden Wurzelverzeichnis auf Ihrem Speicherplatz online. Weitere Informationen zur manuellen Installation Ihrer Website finden Sie in unserer Anleitung [„Eine Website auf Ihrem Webhosting online stellen“](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external}.

> [!primary]
>
> Wenn Sie mehrere Websites hinzufügen möchten, müssen Sie diese Schritte wiederholen.
>
> Achten Sie darauf, wie viele Websites Sie auf einem Webhosting betreiben. Je mehr Websites Sie einrichten, umso mehr Ressourcen Ihres Hostings werden beansprucht. Die [Webhosting-Vergleichsseite](/links/web/hosting){.external} gibt an, wie viele empfohlene Websites Sie auf Ihrem Speicherplatz hosten können.
>

## Weiterführende Informationen

[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules){.external}

[Bearbeiten der DNS-Zone](/pages/web_cloud/domains/dns_zone_edit){.external}

[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online){.external}

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie [hier unsere Support-Angebote einsehen](/links/support).

Treten Sie unserer [User Community](/links/community) bei.