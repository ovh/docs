---
title: 'Mehrere Websites auf einem Webhosting einrichten'
slug: multisites-mehrere-websites-konfigurieren
excerpt: 'So hosten Sie mehrere Websites auf einem Webhosting'
section: 'Erste Schritte'
order: 3
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 19.01.2021**

## Ziel

Sie können mehrere Websites auf einem einzigen Webhosting-Angebot hosten, auch wenn die Domainnamen nicht bei OVHcloud registriert sind.

**In dieser Anleitung erfahren Sie, wie Sie mehrere Websites auf einem Webhosting hosten.**

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](https://www.ovh.de/hosting/){.external}  Angebot.
- Sie besitzen eine oder mehrere [Domains](https://www.ovh.de/domains/){.external}.
- Sie können die Konfiguration Ihrer Domains (die DNS-Zone) ändern.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} angemeldet.

## In der praktischen Anwendung

### Schritt 1: Auf die Multisite-Verwaltung zugreifen

Loggen Sie sich zunächst in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und wählen Sie `Web Cloud aus`{.action}. Klicken Sie im linken Menü auf `Hosting-Pakete`{.action}, wählen Sie das betreffende Angebot aus und gehen Sie zum Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains und Subdomains auf, die Ihrer Webhosting-Lösung hinzugefügt wurden. Einige wurden bei der Installation Ihres Hostings automatisch hinzugefügt.

> [!primary]
>
> Wenn Sie Ihre Website migrieren und Dienstunterbrechungen vermeiden möchten, folgen Sie [Schritt 3: Ihre Website online stellen](#site-online).
>

![Multisite](images/access-multisite-ovh.png){.thumbnail}

### Schritt 2: Eine Domain oder Subdomain hinzufügen

Um Ihrem Webhosting eine neue Domain oder Subdomain hinzuzufügen, klicken Sie auf den Button `Eine Domain oder Subdomain hinzufügen`{.action} und wählen Sie dann im angezeigten Fenster aus.

- **Eine bei OVHcloud registrierte Domain hinzufügen**:

Hier werden nur die Domainnamen von OVHcloud angezeigt, für die Sie als technischer [Kontakt und/oder Administrator in Ihrem Kundencenter tätig sind](../../customer/verwaltung-der-kontakte/). Wählen Sie eine aus der Liste aus und klicken Sie auf `Weiter`{.action}. Gehen Sie dann zu [Schritt 2.1: eine bei OVHcloud registrierte Domain hinzufügen](#add-ovhcloud-domain).

- **Eine externe Domain hinzufügen**:

Im Fall einer Domain außerhalb Ihres Kundenkontos (andere Kundenkennung) oder außerhalb von OVHcloud (Drittpartei-Domainanbieter) wählen Sie Eine externe Domain hinzufügen `und klicken Sie dann`{.action} auf `Weiter`{.action}. Gehen Sie dann zu [Schritt 2.2: „Externe Domain hinzufügen“](#add-external-domain).

![Multisite](images/add-multisite-step1.png){.thumbnail}

#### Schritt 2.1: eine bei OVHcloud registrierte Domain hinzufügen <a name="add-ovhcloud-domain"></a>

Dieser Schritt gilt nur, wenn Sie "Eine bei OVHcloud registrierte Domain hinzufügen"ausgewählt haben. Für externe Domainnamen gehen Sie zu [Schritt 2.2: eine externe Domain hinzufügen](#add-external-domain){.external}.

> [!primary]
> Um eine Subdomain hinzuzufügen, wählen Sie zuerst die Hauptdomain aus der Liste aus (Beispiel: mydomain.ovh). Im nächsten Schritt können Sie die Subdomain angeben (Beispiel: **blog**.mydomain.ovh).

Passen Sie nun das Hinzufügen der Domain oder Subdomain an. Je nach Ihrem [Webhosting](https://www.ovh.de/hosting/){.external} Angebot sind manche Optionen gegebenenfalls nicht verfügbar.

|Information|Beschreibung|
|---|---|
|Domains|Die ausgewählte Domain wird in der Standardeinstellung automatisch angezeigt. Sie können dort eine Subdomain hinzufügen (zum Beispiel **blog**.mydomain.ovh) und gleichzeitig die zugehörige www-Subdomain erstellen (zum Beispiel **www.blog**.mydomain.ovh). Diese Domain ist die Internetadresse der Website, die Sie online stellen möchten.|
|Wurzelverzeichnis|Legen Sie den Ordner auf Ihrem Speicherplatz fest, auf den die Domain verweist. Die Dateien der Website müssen in diesem Bereich online gestellt werden. Bei blog.mydomain.ovh zum Beispiel könnte der Wurzelverzeichnis "blog"sein. Sollte das Verzeichnis nicht existieren, wird es automatisch erstellt.|
|IPv6 aktivieren|Hier können Sie für die angegebene Domain das IPv6-Protokoll aktivieren. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|
|SSL|Mit SSL können Sie für die ausgewählte Domain eine verschlüsselte Verbindung (HTTPS://) einrichten. Weitere Informationen finden Sie auf unserer Seite zu [SSL-Zertifikaten](https://www.ovh.de/ssl/){.external}. Wenn Sie SSL und CDN (Content Delivery Network) aktivieren, können Sie auch das **HTTP/2** - Protokoll verwenden (letzteres ist standardmäßig in unserem Rechenzentrum in Gravelines aktiviert).|
|CDN aktivieren|Hier können Sie für die ausgewählte Domain ein CDN aktivieren (Caching statischer Inhalte Ihrer Website, beispielsweise Bilder). Weitere Informationen finden Sie auf unserer Seite zum [Content Delivery Network](https://www.ovh.de/hosting/cdn.xml){.external}. Wenn Sie SSL und CDN aktivieren, können Sie auch das **HTTP/2**-Protokoll verwenden (letzteres ist standardmäßig in unserem Rechenzentrum in Gravelines aktiviert).|
|IP des Landes|Bei diesem Punkt können Sie für die ausgewählte Domain eine geolokalisierte IP-Adresse aus einer Länderliste auswählen. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|
|Firewall aktivieren|Hier können Sie für die ausgewählte Domain eine Firewall (Anfragenanalyse) aktivieren. Weitere Informationen finden Sie auf unserer Seite zu [ModSecurity](https://www.ovh.de/hosting/mod_security.xml){.external}.|
|Getrennte Logs|Sie können hier für die ausgewählte Domain einen neuen Bereich für separate Logs aktivieren. Wählen Sie aus einer Liste eine Domain aus, die als Zugangsname für den neuen Bereich verwendet wird. Weitere Informationen finden Sie auf [unserer Seite zu detaillierten Statistiken](https://www.ovh.de/hosting/website_statistiken.xml){.external}.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Überprüfen Sie die angezeigte Zusammenfassung.

![Multisite](images/add-multisite-step2.png){.thumbnail}

Wenn Sie eine bei OVHcloud registrierte Domain ausgewählt haben, können Sie deren DNS-Konfiguration automatisch oder manuell ändern:

- **automatische DNS-Konfiguration**: Setzen Sie einen Haken im Feld `Automatische Konfiguration (empfohlen)`{.action}.
- **manuelle DNS-Konfiguration**: Entfernen Sie den Haken im Feld `Automatische Konfiguration (empfohlen)`{.action} und notieren Sie sich die angezeigten Informationen. Wenn Sie diese Einstellung vornehmen möchten, lesen Sie unsere Anleitung ["Bearbeiten der OVHcloud DNS-Zone"](../../domains/webhosting_bearbeiten_der_dns_zone/){.external}.

Klicken Sie auf `Bestätigen`{.action}, um die Domain hinzuzufügen. Dies kann bis zu einer Stunde dauern. Die Änderung der DNS-Konfiguration Ihrer Domain erfordert zusätzlich eine Propagationszeit von 4 bis 24 Stunden, bis sie voll wirksam ist.

Nachdem die Domain hinzugefügt wurde, gehen Sie zu [Schritt 3: Ihre Website online stellen](#site-online).

#### Schritt 2.2: eine externe Domain hinzufügen <a name="add-external-domain"></a>

 Dieser Schritt gilt nur, wenn Sie "Externe Domain hinzufügen"ausgewählt haben.
 
 Ihre Domain ist also nicht bei OVHcloud registriert **oder** nicht in Ihrem **OVHcloud** Account registriert. 

 > Bevor Sie fortfahren, ändern Sie lieber die DNS-Zone der externen Domain, bevor Sie den Multisite-Eintrag hinzufügen.
 >
 > Die Änderung der Konfiguration der externen Domain (die zugehörige DNS-Zone) muss über das Interface des Anbieters vorgenommen werden, der die externe Domain verwaltet. Wenn es sich um OVHcloud handelt, lesen Sie unsere Anleitung ["Bearbeiten der OVHcloud DNS-Zone"](../../domains/webhosting_bearbeiten_der_dns_zone/){.external}. Nach der Änderung ist eine Propagationszeit von 1 bis 24 Stunden erforderlich, bis sie voll wirksam ist.
>
> Im Folgenden finden Sie die 2 Elemente, die zur DNS-Konfiguration Ihrer externen Domain geändert werden müssen:
>
> |Feld|Wo finde ich die Information?|Durchzuführende Maßnahme|
> |---|---|---|
> |TXT|Tab `Multisite`{.action}, klicken Sie auf `Konfiguration des Tokens ovhcontrol`{.action}|OVHcloud stellt sicher, dass das Hinzufügen jeder externen Domain legitim ist. Achten Sie darauf, den TXT-Eintrag mit der Subdomain ovhcontrol (z. B. ovhcontrol.mydomainovh) zu erstellen. Es muss nur die Hauptdomain bestätigt werden, die Subdomains sind nicht erforderlich. Im Fall einer Zonenübertragung muss das Feld in die Zone, die die externe Domain autorisiert, eingefügt werden.|
>
> ![Multisite](images/add-multisite-external-step3.png){.thumbnail}
>
> |Feld|Wo finde ich die Information?|Durchzuführende Maßnahme|
> |---|---|---|
> |A und AAAA|Tab `Allgemeine Informationen`{.action}, neben **IPv4** und **IPv6**|Dank diesen beiden Einträgen kann Ihre Domain die Website anzeigen, die Sie auf Ihrem Webhosting online stellen. Weisen Sie Ihre Domain oder Subdomain der IP-Adresse Ihres Hostings zu.|
>
> ![Multisite](images/add-multisite-external-step4.png){.thumbnail}
>

 Passen Sie nun die Optionen zum Hinzufügen der Domain an. Einige Optionen Ihres [Webhosting](https://www.ovh.de/hosting/){.external} Angebots können nicht direkt beim Hinzufügen der Domain aktiviert werden. Sie können die Optionen erst im Anschluss verwenden, indem Sie die Multisite-Einstellungen ändern, nachdem die Domain hinzugefügt wurde.

|Information|Beschreibung|
|---|---|
|Domain|Geben Sie hier die Domain ein, die Sie verwenden möchten. Fügen Sie bei Bedarf eine Subdomain hinzu (**blog**.mydomain.ovh) und erstellen Sie gleichzeitig die zugehörige www-Subdomain (zum Beispiel **www.blog**.mydomain.ovh). Diese Domain entspricht der Internetadresse der Website, die Sie online stellen möchten. Bitte beachten Sie, dass Sie die Rechte für die Änderung der DNS-Konfiguration benötigen, um die Domain hinzuzufügen.|
|Wurzelverzeichnis| Legen Sie den Ordner auf Ihrem Speicherplatz fest, auf den die Domain verweist. Die Dateien der Website müssen in diesem Bereich online gestellt werden. Bei blog.mydomain.ovh zum Beispiel könnte der Wurzelverzeichnis "blog"sein. Sollte das Verzeichnis nicht existieren, wird es automatisch erstellt.|
|IPv6 aktivieren|Hier können Sie für die angegebene Domain das IPv6-Protokoll aktivieren. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Überprüfen Sie die angezeigte Zusammenfassung.

![Multisite](images/add-multisite-external-step1.png){.thumbnail}

Jedes Hinzufügen einer Domain außerhalb von OVHcloud erfordert eine zusätzliche Validierung. So können wir sicherstellen, dass das Hinzufügen der externen Domain legitim ist. In einer Nachricht werden Sie aufgefordert, die DNS-Konfiguration der Domain zu ändern.

![Multisite](images/add-multisite-external-step2.png){.thumbnail}

Überprüfen Sie die angezeigten Informationen und klicken Sie dann auf den Button `Bestätigen`{.action}. Die Domain wird daher temporär hinzugefügt, bis Sie die DNS-Konfiguration ändern können.

> [!warning]
>
> Sie müssen **diese** Änderungen schnell vornehmen, damit Ihre Domain korrekt hinzugefügt wird. Andernfalls wird das Hinzufügen Ihrer Domain abgebrochen.
>

### Schritt 3: Ihre Website online stellen <a name="site-online"></a>

Sobald die Domain hinzugefügt wurde, muss nur noch die zugehörige Website online gestellt werden. Zur Erinnerung: Nehmen Sie diese Änderung in dem Wurzelverzeichnis vor, das Sie im vorherigen Schritt festgelegt haben.

Um Ihnen dabei zu helfen, können Sie mithilfe der 1-Klick-Module von OVHcloud eine gebrauchsfertige Websitestruktur nutzen. Die Website wird dann automatisch im zuvor konfigurierten Wurzelverzeichnis installiert. Weitere Informationen zu den 1-Klick-Modulen finden Sie in unserer Anleitung [„Installation Ihrer Website mit 1-Klick-Modulen“](../webhosting_installation_von_webhosting-modulen/){.external}. 

Möchten Sie Ihre Website hingegen manuell installieren, tragen Sie alle zugehörigen Dateien zusammen und stellen Sie diese im entsprechenden Wurzelverzeichnis auf Ihrem Speicherplatz online. Weitere Informationen zur manuellen Installation Ihrer Website finden Sie in unserer Anleitung [„Eine Website auf Ihrem Webhosting online stellen“](../webhosting_meine_seite_online_stellen/){.external}.

> [!primary]
>
> Wenn Sie mehrere Websites hinzufügen möchten, müssen Sie diesen Schritt wiederholen.
>
> Achten Sie bitte darauf, wie viele Websites Sie auf einem Webhosting betreiben. Je mehr Websites Sie einrichten, umso mehr Ressourcen Ihres Hostings werden beansprucht. [Die Seite unserer Webhosting-Angebote zeigt](https://www.ovh.de/hosting/){.external} an, wie viele Websites Sie auf Ihrem Speicherplatz hosten können.
>

## Weiterführende Informationen

[Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}

[Bearbeiten der OVH DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}

[Eine Website auf Ihrem Webhosting online stellen](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.