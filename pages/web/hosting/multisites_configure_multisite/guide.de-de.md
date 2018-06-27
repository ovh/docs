---
title: 'Mehrere Websites auf einem Webhosting einrichten'
slug: multisites-mehrere-websites-konfigurieren
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie mehrere Websites auf einem Hosting-Paket hosten.'
section: Webhosting-Konfiguration
order: 1
---

**Stand 27.06.2018**

## Einleitung

Sie können auf einem einzigen Webhosting mehrere Websites einrichten. Dies ist sowohl mit bei OVH registrierten Domains als auch mit Domains von anderen Anbietern möglich.

**So hosten Sie mehrere Websites auf einem Hosting-Paket.**

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot.
- Sie besitzen eine oder mehrere [Domains](https://www.ovh.de/domains/){.external}.
- Sie können die Konfiguration Ihrer Domain oder Domains (DNS-Zone) bearbeiten.
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

### Schritt 1: Zugang zur Multisite-Verwaltung

Loggen Sie sich zunächst in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das gewünschte Hosting aus. Gehen Sie dann auf den Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains auf, die Ihrem Hosting zugewiesen sind. Einige wurden bei der Installation des Hostings automatisch hinzugefügt.

> [!primary]
>
> Wenn Sie Ihre Website migrieren oder eine Unterbrechung des Dienstes vermeiden möchten, können Sie [Schritt 4: „Website online stellen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-4-website-online-stellen){.external} vorziehen und an zweiter Stelle vornehmen.
>

![Multisite](images/access-multisite-ovh.png){.thumbnail}

### Schritt 2: Domain oder Subdomain hinzufügen

Um Ihrem Hosting eine neue Domain hinzuzufügen, klicken Sie auf `Eine Domain oder Subdomain hinzufügen`{.action}. Es öffnet sich ein neues Fenster mit den folgenden Auswahlmöglichkeiten:

- **Eine bei OVH registrierte Domain hinzufügen**:
Es werden nur Domains angezeigt, die die OVH Konfiguration verwenden und mit Ihrer Kundenkennung verknüpft sind. Wählen Sie eine Domain aus der Liste aus und klicken Sie dann auf `Weiter`{.action}.
Sie können direkt zu [Schritt 3.1: „OVH Domain hinzufügen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-31-ovh-domain-hinzufügen){.external} übergehen.

- **Eine externe Domain hinzufügen**:
Klicken Sie auf `Weiter`{.action} und geben Sie im nächsten Schritt die betreffende Domain an. Um die Domain erfolgreich hinzuzufügen, benötigen Sie die Rechte für die Änderung der DNS-Konfiguration (die DNS-Zone der Domain).
Sie können direkt zu [Schritt 3.2: „Externe Domain hinzufügen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-32-externe-domain-hinzufügen){.external} übergehen.

![Multisite](images/add-multisite-step1.png){.thumbnail}

### Schritt 3.1: OVH Domain hinzufügen

> [!primary]
>
> Dieser Schritt ist nur dann vorzunehmen, wenn Sie „Eine bei OVH registrierte Domain hinzufügen“ ausgewählt haben. Wenn Sie eine externe Domain hinzufügen möchten, lesen Sie [Schritt 3.2: „Externe Domain hinzufügen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-32-externe-domain-hinzufügen){.external}.
>

Bleiben Sie im Tab `Multisite`{.action} in Ihrem Kundencenter in dem Bereich `Eine Domain oder Subdomain hinzufügen`{.action}. Nachdem Sie Ihre OVH Domain ausgewählt haben, passen Sie die Optionen zum Hinzufügen an. Entsprechend Ihrem [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot sind manche Optionen gegebenenfalls nicht verfügbar.

|Information|Beschreibung|
|---|---|
|Domain|Die ausgewählte Domain wird in der Standardeinstellung automatisch angezeigt. Sie können auch eine Subdomain der gewählten Domain angeben (Beispiel: blog.mypersonaldomain.ovh) und gleichzeitig die www-Subdomain erstellen (Beispiel: www.mypersonaldomain.ovh).|
|Wurzelverzeichnis|Dieses Verzeichnis wird verwendet, um die ausgewählte Domain auf Ihrem Speicherplatz zu hosten. Sollte das Verzeichnis nicht existieren, wird es automatisch erstellt.|
|IPv6 aktivieren|Hier können Sie für die angegebene Domain das IPv6-Protokoll aktivieren. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|
|SSL|Mit SSL können Sie für die ausgewählte Domain eine verschlüsselte Verbindung (HTTPS://) einrichten. Weitere Informationen finden Sie auf unserer Seite zu [SSL-Zertifikaten](https://www.ovh.de/ssl/){.external}. Wenn Sie SSL und CDN (Content Delivery Network) aktivieren, können Sie auch das **HTTP/2**-Protokoll verwenden.|
|CDN aktivieren|Hier können Sie für die ausgewählte Domain ein CDN aktivieren (Caching statischer Inhalte Ihrer Website, beispielsweise Bilder). Weitere Informationen finden Sie auf unserer Seite zum [Content Delivery Network](https://www.ovh.de/cdn/){.external}. Wenn Sie SSL und CDN aktivieren, können Sie auch das **HTTP/2**-Protokoll verwenden.|
|IP des Landes|Bei diesem Punkt können Sie für die ausgewählte Domain eine geolokalisierte IP-Adresse aus einer Länderliste auswählen. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|
|Firewall aktivieren|Hier können Sie für die ausgewählte Domain eine Firewall (Anfragenanalyse) aktivieren. Weitere Informationen finden Sie auf unserer Seite zu [ModSecurity](https://www.ovh.de/hosting/mod_security.xml){.external}.|
|Getrennte Logs|Sie können hier für die ausgewählte Domain einen neuen Bereich für separate Logs aktivieren. Wählen Sie aus einer Liste eine Domain aus, die als Zugangsname für den neuen Bereich verwendet wird. Weitere Informationen finden Sie auf unserer Seite zu den [detaillierten Statistiken](https://www.ovh.de/hosting/website_statistiken.xml){.external}.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}.

![Multisite](images/add-multisite-step2.png){.thumbnail}

Bitte überprüfen Sie die Informationen in der angezeigten Übersicht.

Wenn Sie eine OVH Domain ausgewählt haben, können Sie die DNS-Zone automatisch konfigurieren. Setzen Sie hierzu einen Haken in dem Feld `Automatische Konfiguration (empfohlen)`{.action}. Wenn Sie keinen Haken setzen, können Sie die Konfiguration zu einem späteren Zeitpunkt manuell durchführen. In diesem Fall werden Ihnen die notwendigen Änderungen angezeigt.

Klicken Sie auf `Bestätigen`{.action}, um die Domain hinzuzufügen. Lesen Sie für eine manuelle Konfiguration die Anleitung [*Bearbeiten der OVH DNS-Zone*](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}.

> [!primary]
>
> Die Domain zu Ihrem Webhosting hinzuzufügen, dauert maximal eine Stunde. Die Änderung der DNS-Konfiguration Ihrer Domain erfordert allerdings eine Propagationszeit von 4 bis 24 Stunden, bis sie voll wirksam ist.
>

Nachdem die Domain hinzugefügt wurde, gehen Sie weiter zu [Schritt 4: „Website online stellen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-4-website-online-stellen){.external}.

### Schritt 3.2: Externe Domain hinzufügen

> [!primary]
>
> Die folgenden Schritte sind nur dann vorzunehmen, wenn Sie „Eine externe Domain hinzufügen“ ausgewählt haben (d. h. eine Domain, die nicht bei OVH registriert ist und die Sie nicht über das OVH Kundencenter verwalten können). Wenn Sie eine OVH Domain hinzufügen möchten, lesen Sie [Schritt 3.1: „OVH Domain hinzufügen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-31-ovh-domain-hinzufügen){.external}.
>

Bleiben Sie in Ihrem Kundencenter im Tab `Multisite`{.action} in dem Bereich `Eine Domain oder Subdomain hinzufügen`{.action}. Nachdem Sie eine externe Domain ausgewählt haben, passen Sie die Optionen zum Hinzufügen an.
Einige Optionen Ihres [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebots können nicht sofort nach Hinzufügen der Domain aktiviert werden. Sie können die Optionen erst nach dem aktuellen Schritt aktivieren, indem Sie die Einstellungen der Domain ändern.

|Information|Beschreibung|
|---|---|
|Domain|Geben Sie die Domain ein, die Sie Ihrem Webhosting hinzufügen möchten. Sie können auch eine Subdomain der gewählten Domain angeben (Beispiel: blog.mypersonaldomain.ovh) und gleichzeitig die www-Subdomain erstellen (Beispiel: www.mypersonaldomain.ovh). Zur Erinnerung: Um die Domain hinzuzufügen, benötigen Sie die Rechte für die Änderung der DNS-Konfiguration.|
|Wurzelverzeichnis|Dieses Verzeichnis wird verwendet, um die ausgewählte Domain auf Ihrem Speicherplatz zu hosten. Sollte das Verzeichnis nicht existieren, wird es automatisch erstellt.|
|IPv6 aktivieren|Hier können Sie für die angegebene Domain das IPv6-Protokoll aktivieren. Weitere Informationen hierzu finden Sie auf unserer Seite zu [ IPs und Geolokalisierung](https://www.ovh.de/hosting/ip.xml){.external}.|

Nachdem Sie diese Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}.

![Multisite](images/add-multisite-external-step1.png){.thumbnail}

Bitte überprüfen Sie die Informationen in der angezeigten Übersicht.

Da Sie eine OVH externe Domain ausgewählt haben, erscheint eine Nachricht, die Sie auffordert, die Konfiguration zu bearbeiten. Überprüfen Sie die angezeigten Informationen (Sie können diese bei Bedarf später wieder aufrufen) und klicken Sie auf `Bestätigen`{.action}.

Zur Domainkonfiguration:

|Eintrag|Wo finde ich die Information?|Beschreibung|
|---|---|---|
|TXT|Tab `Multisite`{.action}, klicken Sie auf **Konfiguration des Tokens ovhcontrol**|Mit diesem TXT-Eintrag kann OVH sicherstellen, dass Sie die notwendigen Rechte haben, um die externe Domain hinzuzufügen. Achten Sie darauf, den Eintrag mit der Subdomain **ovhcontrol** zu erstellen (zum Beispiel: ovhcontrol.mypersonaldomain.ovh).|
|A und AAAA|Tab `Allgemeine Informationen`{.action}, neben **IPv4** und **IPv6**|Dank diesen beiden Einträgen kann Ihre Domain die Website anzeigen, die Sie auf Ihrem Webhosting online stellen.|

Wenn Sie den Vorgang bestätigen, wird die Domain vorübergehend hinzugefügt. Bearbeiten Sie nun die DNS-Konfiguration (die DNS-Zone) über das Interface des Anbieters Ihrer Domain. Nach der Bearbeitung ist mit einer Propagationszeit von 4 bis 24 Stunden zu rechnen, bis die Änderungen voll wirksam sind.

> [!warning]
>
> Die Änderungen sind unbedingt notwendig, damit die Domain erfolgreich hinzugefügt werden kann. Nehmen Sie die Änderungen nicht vor, wird das Hinzufügen der Domain abgebrochen.
>

Nachdem die Domain hinzugefügt wurde, gehen Sie weiter zu [Schritt 4: „Website online stellen“](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/#schritt-4-website-online-stellen){.external}.

### Schritt 4: Website online stellen

Sobald die Domain hinzugefügt wurde, muss nur noch die zugehörige Website online gestellt werden.

Um diesen Schritt zu vereinfachen, können Sie die 1-Klick-Module von OVH verwenden, die Ihnen eine gebrauchsfertige Websitestruktur bieten. Weitere Informationen zu den 1-Klick-Modulen finden Sie in unserer Anleitung [*„Installation Ihrer Website mit 1-Klick-Modulen“*](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}.

Wenn Sie weitere Websites zu Ihrem Hosting-Paket hinzufügen möchten, müssen die oben beschriebenen Schritte für jede einzeln wiederholt werden.

Achten Sie bitte darauf, wie viele Websites Sie auf einem Webhosting betreiben. Je mehr Websites Sie einrichten, umso mehr Ressourcen Ihres Hostings werden beansprucht. Auf unserer Produktseite zu den [Webhosting-Angeboten](https://www.ovh.de/hosting/){.external} können Sie nachlesen, wie viele Websites Sie auf Ihrem Hosting-Bereich hosten können.

## Weiterführende Informationen

[Installation einer Website anhand von 1-Klick Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}.

[Bearbeiten der OVH DNS-Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/){.external}

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.