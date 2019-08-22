---
title: 'Mehrere Websites auf einem Webhosting einrichten'
slug: multisites-mehrere-websites-konfigurieren
excerpt: 'So hosten Sie mehrere Websites auf einem Webhosting'
section: 'Erste Schritte'
order: 1
---

**Stand 08.07.2019**

## Einleitung

Sie können auf einem einzigen Webhosting mehrere Websites einrichten. Dies ist sowohl mit bei OVH registrierten Domains als auch mit Domains von anderen Anbietern möglich.

**In dieser Anleitung erfahren Sie, wie Sie mehrere Websites auf einem Webhosting hosten.**

## Voraussetzungen

- Sie verfügen über ein kompatibles [Webhosting](https://www.ovh.de/hosting/){.external}.
- Sie besitzen eine oder mehrere [Domains](https://www.ovh.de/domains/){.external}.
- Sie können die Konfiguration Ihrer Domain oder Domains (DNS-Zone) bearbeiten.
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

### Schritt 1: Auf die Multisite-Verwaltung zugreifen

Loggen Sie sich zunächst in Ihr [Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein. Klicken Sie im linken Menü auf `Hosting-Pakete`{.action}, wählen Sie das betreffende Angebot aus und gehen Sie zum Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains auf, die Ihrem Webhosting zugewiesen sind. Einige wurden bei der Installation Ihres Hostings automatisch hinzugefügt.

> [!primary]
>
> Wenn Sie Ihre Website migrieren und eine Dienstunterbrechung vermeiden möchten, können Sie [Schritt 3: „Website online stellen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-3-website-online-stellen){.external} vorziehen und an zweiter Stelle vornehmen.
>

![Multisite](images/access-multisite-ovh.png){.thumbnail}

### Schritt 2: Eine Domain oder Subdomain hinzufügen

Um Ihrem Webhosting eine neue Domain hinzuzufügen, klicken Sie auf `Domain oder Subdomain hinzufügen`{.action}. Es öffnet sich ein neues Fenster mit den folgenden Auswahlmöglichkeiten:

- **Eine bei OVH registrierte Domain hinzufügen**:

Es werden nur Domains angezeigt, die die OVH Konfiguration verwenden und mit Ihrer Kundenkennung verknüpft sind. Wählen Sie eine Domain aus der Liste aus und klicken Sie dann auf `Weiter`{.action}. Sie können direkt zu [Schritt 2.1: „OVH Domain hinzufügen“ übergehen](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-21-ovh-domain-hinzufugen){.external}.

- **Eine externe Domain hinzufügen**:

Wenn die Domain nicht in der Liste steht, handelt es sich um eine externe Domain (d. h. diese ist OVH extern oder nicht mit Ihrer Kundenkennung registriert). Ist das der Fall, wählen Sie `Eine externe Domain hinzufügen`{.action} und klicken Sie dann auf `Weiter`{.action}. Gehen Sie dann zu [Schritt 2.2: „Externe Domain hinzufügen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-22-externe-domain-hinzufugen){.external}.

![Multisite](images/add-multisite-step1.png){.thumbnail}

#### Schritt 2.1: OVH Domain hinzufügen

> [!primary]
>
> Dieser Schritt ist nur dann vorzunehmen, wenn Sie „Eine bei OVH registrierte Domain hinzufügen“ ausgewählt haben. Wenn Sie eine externe Domain hinzufügen möchten, lesen Sie [Schritt 2.2: „Externe Domain hinzufügen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-22-externe-domain-hinzufugen){.external}.
>

Passen Sie nun die Optionen zum Hinzufügen der Domain an. Je nach Ihrem [Webhosting](https://www.ovh.de/hosting/){.external} Angebot sind manche Optionen gegebenenfalls nicht verfügbar.

|Information|Beschreibung|
|---|---|
|Domains|Die ausgewählte Domain wird in der Standardeinstellung automatisch angezeigt. Sie können auch eine Subdomain Domain hinzufügen (Beispiel: blog.mypersonaldomain.ovh) und gleichzeitig die zugehörige www-Subdomain erstellen (Beispiel: www.mypersonaldomain.ovh). Diese Domain ist die Internetadresse der Website, die Sie online stellen möchten.|
|Wurzelverzeichnis|Legen Sie hier das Verzeichnis fest, in dem die Domain auf Ihrem Speicherplatz gehostet wird. Die Dateien der Website müssen in diesem Bereich online gestellt werden. So kann zum Beispiel für blog.mypersonaldomain.ovh das Verzeichnis „blog“ angelegt werden. Sollte das Verzeichnis nicht existieren, wird es automatisch erstellt.|
|IPv6 aktivieren|Hier können Sie für die angegebene Domain das IPv6-Protokoll aktivieren. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|
|SSL|Mit SSL können Sie für die ausgewählte Domain eine verschlüsselte Verbindung (HTTPS://) einrichten. Weitere Informationen finden Sie auf unserer Seite zu [SSL-Zertifikaten](https://www.ovh.de/ssl/){.external}. Wenn Sie SSL und CDN (Content Delivery Network) aktivieren, können Sie auch das **HTTP/2**-Protokoll verwenden (letzteres ist standardmäßig in unserem Rechenzentrum in Gravelines aktiviert).|
|CDN aktivieren|Hier können Sie für die ausgewählte Domain ein CDN aktivieren (Caching statischer Inhalte Ihrer Website, beispielsweise Bilder). Weitere Informationen finden Sie auf unserer Seite zum [Content Delivery Network](https://www.ovh.de/hosting/cdn.xml){.external}. Wenn Sie SSL und CDN aktivieren, können Sie auch das **HTTP/2**-Protokoll verwenden (letzteres ist standardmäßig in unserem Rechenzentrum in Gravelines aktiviert).|
|IP des Landes|Bei diesem Punkt können Sie für die ausgewählte Domain eine geolokalisierte IP-Adresse aus einer Länderliste auswählen. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|
|Firewall aktivieren|Hier können Sie für die ausgewählte Domain eine Firewall (Anfragenanalyse) aktivieren. Weitere Informationen finden Sie auf unserer Seite zu [ModSecurity](https://www.ovh.de/hosting/mod_security.xml){.external}.|
|Getrennte Logs|Sie können hier für die ausgewählte Domain einen neuen Bereich für separate Logs aktivieren. Wählen Sie aus einer Liste eine Domain aus, die als Zugangsname für den neuen Bereich verwendet wird. Weitere Informationen finden Sie auf unserer Seite zu den [detaillierten Statistiken](https://www.ovh.de/hosting/website_statistiken.xml){.external}.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Überprüfen Sie die angezeigte Zusammenfassung.

![Multisite](images/add-multisite-step2.png){.thumbnail}

Wenn Sie eine OVH Domain ausgewählt haben, können Sie die DNS-Konfiguration automatisch oder manuell konfigurieren.

- **automatische DNS-Konfiguration**: Setzen Sie einen Haken im Feld `Automatische Konfiguration (empfohlen)`{.action}.
- **manuelle DNS-Konfiguration**: Entfernen Sie den Haken im Feld `Automatische Konfiguration (empfohlen)`{.action} und notieren Sie sich die angezeigten Informationen. Wenn Sie die Konfiguration selbst vornehmen möchten, lesen Sie die zugehörige Dokumentation [„Bearbeiten der OVH DNS-Zone“](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}.

Klicken Sie auf `Bestätigen`{.action}, um die Domain hinzuzufügen. Dies kann bis zu einer Stunde dauern. Die Änderung der DNS-Konfiguration Ihrer Domain erfordert zusätzlich eine Propagationszeit von 4 bis 24 Stunden, bis sie voll wirksam ist.

Nachdem die Domain hinzugefügt wurde, gehen Sie weiter zu [Schritt 3: „Website online stellen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-3-website-online-stellen){.external}.

#### Schritt 2.2: Externe Domain hinzufügen

> [!primary]
>
> Dieser Schritt ist nur dann vorzunehmen, wenn Sie „Eine externe Domain hinzufügen“ ausgewählt haben (d. h. eine Domain, die nicht bei OVH registriert ist und die Sie nicht über das OVH Kundencenter verwalten können). Wenn Sie eine OVH Domain hinzufügen möchten, lesen Sie [Schritt 2.1: „OVH Domain hinzufügen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-21-ovh-domain-hinzufugen){.external}.
>

Passen Sie nun die Optionen zum Hinzufügen der Domain an. Einige Optionen Ihres [Webhosting](https://www.ovh.de/hosting/){.external} Angebots können nicht direkt beim Hinzufügen der Domain aktiviert werden. Sie können die Optionen erst im Anschluss verwenden, indem Sie die Multisite-Einstellungen ändern, nachdem die Domain hinzugefügt wurde.

|Information|Beschreibung|
|---|---|
|Domain|Geben Sie hier die Domain ein, die Sie verwenden möchten. Sie können gegebenenfalls auch eine Subdomain hinzufügen (Beispiel: blog.mypersonaldomain.ovh) und gleichzeitig die zugehörige www-Subdomain erstellen (Beispiel: www.mypersonaldomain.ovh). Diese Domain entspricht der Internetadresse der Website, die Sie online stellen möchten. Bitte beachten Sie, dass Sie die Rechte für die Änderung der DNS-Konfiguration benötigen, um die Domain hinzuzufügen.|
|Wurzelverzeichnis|Legen Sie hier das Verzeichnis fest, in dem die Domain auf Ihrem Speicherplatz gehostet wird. Die Dateien der Website müssen in diesem Bereich online gestellt werden. So kann zum Beispiel für blog.mypersonaldomain.ovh das Verzeichnis „blog“ angelegt werden. Sollte das Verzeichnis nicht existieren, wird es automatisch erstellt.|
|IPv6 aktivieren|Hier können Sie für die angegebene Domain das IPv6-Protokoll aktivieren. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}. Überprüfen Sie die angezeigte Zusammenfassung.

![Multisite](images/add-multisite-external-step1.png){.thumbnail}

Da Sie eine OVH externe Domain ausgewählt haben, ist zunächst ein Bestätigungsschritt erforderlich, damit wir sichergehen können, dass Sie tatsächlich die notwendigen Rechte zum Hinzufügen der Domain besitzen. Daher wird eine Nachricht angezeigt, die Sie auffordert, die DNS-Konfiguration dieser Domain zu bearbeiten. 

Überprüfen Sie die angezeigten Informationen und klicken Sie dann auf den Button `Bestätigen`{.action}. Die Domain wird nun vorübergehend hinzugefügt, damit Sie die DNS-Konfiguration entsprechend bearbeiten können.

> [!warning]
>
> Die Änderungen sind unbedingt notwendig, damit die Domain erfolgreich hinzugefügt werden kann. Nehmen Sie die Änderungen nicht vor, wird das Hinzufügen der Domain abgebrochen.
>

Bearbeiten Sie die Konfiguration der Domain (ihre DNS-Zone) über das Interface des Anbieters, der die Domain verwaltet. Ist der Anbieter OVH, lesen Sie die zugehörige Dokumentation [„Bearbeiten der OVH DNS-Zone“](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}. Nach der Bearbeitung ist mit einer Propagationszeit von 4 bis 24 Stunden zu rechnen, bis die Änderungen voll wirksam sind.

Die Elemente, die in der DNS-Konfiguration anzupassen sind, finden Sie hier:

|Eintrag|Wo finde ich die Information?|Beschreibung|
|---|---|---|
|TXT|Tab `Multisite`{.action}, klicken Sie auf **Konfiguration des Tokens ovhcontrol**|Mit diesem TXT-Eintrag kann OVH sicherstellen, dass Sie die notwendigen Rechte haben, um die externe Domain hinzuzufügen. Erstellen Sie hierzu das TXT-Feld mit der Subdomain ovhcontrol (zum Beispiel: ovhcontrol.mypersonaldomain.ovh). Es muss nur die Hauptdomain bestätigt werden, die Subdomains sind nicht erforderlich.|
|A und AAAA|Tab `Allgemeine Informationen`{.action}, neben **IPv4** und **IPv6**|Dank diesen beiden Einträgen kann Ihre Domain die Website anzeigen, die Sie auf Ihrem Webhosting online stellen.|

### Schritt 3: Website online stellen

Sobald die Domain hinzugefügt wurde, muss nur noch die zugehörige Website online gestellt werden. Zur Erinnerung: Nehmen Sie diese Änderung in dem Wurzelverzeichnis vor, das Sie im vorherigen Schritt festgelegt haben.

Um diesen Schritt zu vereinfachen, können Sie die 1-Klick-Module von OVH verwenden, die Ihnen eine gebrauchsfertige Websitestruktur bieten. Die Website wird dann automatisch im zuvor konfigurierten Wurzelverzeichnis installiert. Weitere Informationen zu den 1-Klick-Modulen finden Sie in unserer Anleitung [„Installation Ihrer Website mit 1-Klick-Modulen“](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}. 

Möchten Sie Ihre Website hingegen manuell installieren, tragen Sie alle zugehörigen Dateien zusammen und stellen Sie diese im entsprechenden Wurzelverzeichnis auf Ihrem Speicherplatz online. Weitere Informationen zur manuellen Installation Ihrer Website finden Sie in unserer Anleitung [„Meine Seite online stellen“](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/){.external}.

> [!primary]
>
> Wenn Sie weitere Websites zu Ihrem Webhosting hinzufügen möchten, muss dieser Schritt für jede einzeln wiederholt werden.
>
> Achten Sie bitte darauf, wie viele Websites Sie auf einem Webhosting betreiben. Je mehr Websites Sie einrichten, umso mehr Ressourcen Ihres Hostings werden beansprucht. Auf unserer Produktseite zu den [Webhosting Angeboten](https://www.ovh.de/hosting/){.external} können Sie nachlesen, wie viele Websites Sie auf Ihrem Hosting-Bereich hosten können.
>



## Weiterführende Informationen

[Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}

[Bearbeiten der OVH DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}

[Eine Website auf Ihrem Webhosting online stellen](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.