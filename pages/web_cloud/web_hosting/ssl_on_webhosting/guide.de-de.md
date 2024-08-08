---
title: "SSL-Zertifikat auf einem Webhosting verwalten"
excerpt: "Erfahren Sie hier, wie Sie ein SSL-Zertifikat auf Ihrem OVHcloud Webhosting verwalten"
updated: 2023-12-06
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Sie haben bei Ihrem Webhosting die Möglichkeit, ein SSL-Zertifikat einzurichten. Das Zertifikat können Sie entweder direkt bei OVHcloud bestellen oder eines auf Ihr Hosting importieren. Sobald das Zertifikat auf Ihrem Webhosting installiert und fertig eingerichtet ist, können Sie eine oder mehrere Ihrer Websites mit einer sicheren SSL-Verbindung und somit über HTTPS betreiben.

**In dieser Anleitung erfahren Sie alles über die Verwaltung eines SSL-Zertifikats auf einem OVHcloud Webhosting.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting){.external}.
- Sie haben mindestens eine [Domain](/links/web/domains){.external} registriert.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Es sind mehrere Schritte notwendig, um ein SSL-Zertifikat auf Ihrem OVHcloud-Webhosting zu erstellen. Wir empfehlen Ihnen, die 3 Schritte **in der folgenden Reihenfolge** durchzuführen.

[1. SSL-Zertifikat für eine Multisite aktivieren](#multisite): Wenn Ihre Lösung oder Ihr SSL-Zertifikat dies erlauben, können Sie mehrere Ihrer Multisites mit einer sicheren SSL-Verbindung ausstatten.

[2. SSL-Zertifikat auf Ihrem Webhosting aktivieren](#enablessl): Dieser Abschnitt hilft Ihnen, ein SSL-Zertifikat auf Ihrem Webhosting zu aktivieren. Dabei kann es sich um ein kostenloses oder kostenpflichtiges Zertifikat handeln, das bei OVHcloud bestellt wurde. Sie können auch Ihr eigenes, bei einem anderen Anbieter bestelltes SSL-Zertifikat importieren.

[3. SSL-Zertifikat auf einem Webhosting neu erstellen](#regeneratessl): Dieser Schitt ermöglicht es, ein SSL-Zertifikat von Let's Encrypt auf Ihrem Webhosting zu erstellen, wenn Sie SSL auf einer oder mehreren Multisites neu aktiviert haben.

Sie können auch [SSL-Zertifikat auf einem Webhosting löschen](#deletessl). **Bitte beachten Sie, dass dies Risiken bergen kann, wenn eine Ihrer Webseiten das Zertifikat verwendet, das Sie löschen möchten**.

### 1. SSL-Zertifikat für eine Multisite aktivieren <a name="multisite"></a>

Je nach Art des [SSL-Zertifikats](/links/web/hosting-options-ssl){.external}, das Sie bestellen möchten, können Sie eine sichere SSL-Verbindung für eine oder mehrere Ihrer Multisites aktivieren. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Multisite`{.action}.

Die angezeigte Tabelle listet alle Domains auf, die Ihrem Webhosting zugewiesen sind. Die Spalte "SSL" zeigt Ihnen den Aktivierungsstatus der gesicherten SSL-Verbindungen für Ihre Multisites.

![ssl verwalten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

Es können drei Zustände entstehen:

|Status|Beschreibung|
|---|---|
|Aktiviert|Es wurde bereits ein SSL-Zertifikat für diese Multisite aktiviert. Sollte Ihre Seite dennoch nicht via HTTPS verfügbar sein, lesen Sie unsere Anleitung "[Website mit SSL-Zertifikat auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website){.external}".|
|Zu erstellen|Es wurde ein SSL-Zertifikat für diese Multisite aktiviert, es ist aber noch nicht technisch aktiv. Erneuern Sie in diesem Fall das Zertifikat, damit es auch für die neuen Multisite-Domains funktioniert.|
|Deaktiviert|Es wurde noch kein SSL-Zertifikat für diese Multisite aktiviert. Um es zu aktivieren, folgen Sie den untenstehenden Anweisungen.|

Um SSL für eine Multisite zu aktivieren, klicken Sie rechts neben der betreffenden Multisite auf `...`{.action} und dann auf `Domain bearbeiten`{.action}. Setzen Sie im angezeigten Fenster einen Haken bei `SSL`{.action}. Sie können auch die Option anhaken, um die www-Subdomain gleichzeitig mit dem dazugehörigen Domainnamen zu aktivieren. Folgen Sie den Schritten, bis Sie die Änderung bestätigen.

> [!warning]
>
> Die Zuweisung eines SSL-Zertifikats für einen Multisite-Eintrag über die Multisite-Tabelle ist nur möglich, wenn Sie das kostenlose SSL-Zertifikat **Let's Encrypt** bei OVHcloud bestellt haben.
>
> Die kostenpflichtigen SSL-Zertifikate von **Sectigo** (DV und EV) gelten nur für einen Domainnamen (und dessen Subdomain *www*). Der Vermerk *Aktiviert* wird daher nicht für die anderen auf dem Webhosting deklarierten Multisites angezeigt.
>
> SSL-Zertifikate von externen Anbietern können für mehrere Domainnamen gleichzeitig gelten. Wenn Sie ein solches Zertifikat verwenden, erscheint *Aktiviert* auch nicht für alle Domainnamen, die in der Tabelle „Multisite“ deklariert sind. Ihr SSL Zertifikat ist dennoch gültig für alle Domainnamen für die es ausgestellt wurde.
>

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Sobald Sie die Aktivierungsanfrage eingereicht haben, sollte sich der Zustand der sicheren SSL-Verbindung für die betreffende Multisite innerhalb weniger Sekunden aktualisieren, wobei der Status auf "Zu erstellen" gesetzt wird. Falls Sie für weitere Multisites SSL aktivieren möchten, wiederholen Sie den Vorgang entsprechend.

> [!primary]
>
> In diesem Zustand können zwei Situationen auftreten:
>
> - **Sie haben kein Zertifikat.**
> Lesen Sie die Anweisungen unter "[SSL-Zertifikat auf Ihrem Webhosting aktivieren](#enablessl)" und wählen Sie "Kostenloses Zertifikat (Let's Encrypt)". Es unterstützt Multisite-Websites.
>
> - **Das SSL Zertifikat ist aktiv, Sie haben jedoch weitere Multisite-Webseiten hinzugefügt.**
> Folgen Sie dem Abschnitt "[SSL-Zertifikat auf einem Webhosting neu erstellen](#regeneratessl)" dieser Anleitung, um das SSL-Zertifikat für die zusätzlichen Multisites zu erneuern.
>

### 2. SSL-Zertifikat auf Ihrem Webhosting aktivieren <a name="enablessl"></a>

Vergewissern Sie sich, dass der vorherige Schritt der [Aktivierung eines SSL-Zertifikats für eine Multisite](#multisite) korrekt durchgeführt wurde. Mindestens eine Domain muss die SSL-Option `Aktiviert` oder den Status `Zu erstellen` haben, um das SSL-Zertifikat zu aktivieren.<br>
**Dieser Vorgang gilt nicht, falls Sie `Kostenpflichtiges Zertifikat`{.action} oder `Import Ihres SSL-Zertifikats`{.action} ausgewählt haben.**

> [!warning]
>
> Vergewissern Sie sich außerdem, dass die Multisite-Einträge, für die Sie die SSL Option aktivieren, auf die IP-Adresse des Webhostings zeigen. Diese Konfiguration wird Ihnen automatisch angeboten, wenn Sie einen Multisite-Eintrag hinzufügen oder ändern, muss aber manuell für eine Domain erfolgen, die nicht in Ihrem Kundencenter verwaltet wird.<br>
> - Die IP-Adresse Ihres Webhostings finden Sie im Tab `Allgemeine Informationen`{.action} unter dem Eintrag `IPv4`.
> ![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4.png){.thumbnail}
> - Konfigurieren Sie die DNS-Zone der unter Multisites hinzugefügten Domain im Bereich `Domains`{.action}, im Tab `DNS-Zone`{.action}. Erstellen Sie einen entsprechenden `A`-Eintrag für Ihren Multisite-Eintrag oder editieren Sie ihn und geben Sie die IP-Adresse Ihres Hostings als `Ziel` ein.
> ![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-an-entry.png){.thumbnail}
>
> Für weitere Informationen lesen Sie unsere Anleitungen zur [Konfiguration eines Multisite-Eintrags](/pages/web_cloud/web_hosting/multisites_configure_multisite) oder [zur Konfiguration einer DNS Zone](/pages/web_cloud/domains/dns_zone_edit).

Bei Ihrem OVHcloud Webhosting haben Sie für die Aktivierung eines [SSL-Zertifikats](https://www.ovh.de/ssl/){.external} mehrere Optionen:

- Das kostenfreie SSL-Zertifikat von Let's Encrypt, [das bei allen kompatiblen Webhosting Angeboten inklusive ist](https://www.ovh.de/ssl/){.external}
- Ein kostenpflichtiges SSL-Zertifikat [als optionale Zusatzleistung bei allen kompatiblen Webhosting Angeboten](https://www.ovh.de/ssl/){.external}
- Import eines Zertifikats, das bei einem anderen Anbieter erworben wurde

Um Ihr Zertifikat zu aktivieren, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Allgemeine Informationen`{.action}. Unter dem Tab "SSL-Zertifikat" sollte der Eintrag "Nein" erscheinen, aus dem hervorgeht, dass auf Ihrem Webhosting kein SSL-Zertifikat eingerichtet und installiert wurde.

Klicken Sie auf den Button `...`{.action} neben "SSL-Zertifikat" und dann auf `SSL-Zertifikat bestellen`{.action}.

Wenn das Wort "Ja" erscheint, bedeutet dies, dass bereits ein SSL-Zertifikat auf dem Webhosting installiert und konfiguriert wurde. Daher können Sie kein anderes Zertifikat bestellen, solange das bestehende Zertifikat aktiv ist.

![ssl verwalten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Wählen Sie in dem neuen Fenster das SSL-Zertifikat aus, das Sie bestellen möchten. Je nach Art Ihres [Webhostings](/links/web/hosting){.external} und dessen Konfiguration kann es sein, dass keine der nachstehend aufgeführten Lösungen verfügbar ist. Wenn Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![ssl verwalten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

Je nach gewählter Lösung können weitere Schritte notwendig sein:

- **Wenn Sie ein kostenloses SSL-Zertifikat ausgewählt haben:** Sie brauchen keine weiteren Aktionen durchzuführen, es sei denn, die Aktivierung des SSL-Zertifikats wird aus technischen Gründen blockiert (in diesem Fall erscheint eine Nachricht im OVHcloud Kundencenter, in der die zu überprüfenden Elemente aufgeführt sind) oder die Validierung Ihrer Domain für die Ausstellung des SSL-Zertifikats. In diesem Fall werden Sie benachrichtigt. Befolgen die Anweisungen, die Ihnen mitgeteilt werden.

- **Wenn Sie ein kostenpflichtiges SSL-Zertifikat ausgewählt haben:** Sie müssen den Bestellprozess abschließen, um ein Zertifikat zu erhalten. Für einige Arten von SSL-Zertifikaten ist ein spezifischer Validierungsprozess notwendig. Sie werden daher eine oder mehrere diesbezügliche E-Mails erhalten. Ist das der Fall, lesen Sie die darin enthaltenen Informationen und folgen Sie den Anweisungen zum Abschluss der Konfiguration.

- **Wenn Sie sich für den Import eines SSL Zertifikats entschieden haben:** Geben Sie in den angezeigten Feldern die Details des Zertifikats ein. Verwenden Sie hierfür die Informationen, die Sie beim Erwerb des Zertifikats von Ihrem Anbieter erhalten haben. In der Regel werden drei Dateien bereitgestellt: `certificate.crt`, `private.key` und `ca_bundle.crt`. Nachdem Sie `Import Ihres SSL Zertifikats`{.action} ausgewählt haben, klicken Sie auf `Weiter`{.action}. Fügen Sie im ersten Abschnitt "Inhalt Ihres Zertifikats kopieren (nur RSA)" den Inhalt der Datei "certificate.crt" ein. Fügen Sie im zweiten Abschnitt "Inhalt Ihres Private Key kopieren (nicht verschlüsselt)" den Inhalt der Datei "private.key" ein und im dritten Abschnitt "Inhalt Ihrer Zertifikatskette kopieren" den Inhalt der Datei `ca_bundle.crt`. Klicken Sie auf `Bestätigen`{.action}.

Je nach Art des gewählten Zertifikats kann die Konfiguration wenige Minuten bis hin zu mehreren Tagen dauern. Um zu überprüfen, ob das SSL-Zertifikat auf Ihrem Webhosting eingerichtet wurde, gehen Sie in Ihrem OVHcloud Kundencenter auf den Tab `Allgemeine Informationen`{.action}. Das Wort "Ja" wird dann unter "SSL-Zertifikat" erscheinen.

![ssl verwalten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

### 3. SSL-Zertifikat für das Webhosting erneuern <a name="regeneratessl"></a>

> [!primary]
>
> Dieser Vorgang gilt nur für kostenlose Let's Encrypt SSL-Zertifikate [inklusive bei einem kompatiblen Webhosting Angebot](/links/web/hosting-options-ssl), mit denen eine sichere SSL-Verbindung für mehrere Multisites aktiviert werden kann.
>

Wenn Sie eine gesicherte SSL-Verbindung für eine oder mehrere Ihrer Multisites aktiviert haben, zeigt der Status "Zu erstellen" an. Diese Neuerstellung ist unerlässlich, um die betreffenden Domainnamen zu Ihrem SSL-Zertifikat hinzufügen zu können.

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Allgemeine Informationen`{.action}. Klicken Sie dann auf den Button `...`{.action}. neben "SSL-Zertifikat" und dann auf `SSL-Zertifikat neu erstellen`{.action}.

![ssl verwalten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Lesen Sie die im neuen Fenster angezeigten Informationen und klicken Sie dann auf den Button `Bestätigen`{.action}. Warten Sie nun ab, bis die Erneuerung Ihres SSL-Zertifikats abgeschlossen ist. Dieser Vorgang kann mehrere Stunden dauern.

Bitte beachten Sie, dass Let's Encrypt – die Zertifizierungsstelle, die das in Ihrem Webhosting enthaltene kostenlose SSL-Zertifikat bereitstellt – [maximal fünf Erneuerungen pro Woche](https://letsencrypt.org/docs/rate-limits/){.external} zulässt. Wir raten Ihnen daher, auf dieses Limit zu achten, wenn Sie innerhalb kurzer Zeit mehrere Erneuerungen vornehmen, damit Sie nicht vorübergehend blockiert werden.

![ssl verwalten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

###  SSL-Zertifikat auf einem Webhosting löschen <a name="deletessl"></a>

Sie können auch ein auf Ihrem Webhosting installiertes SSL-Zertifikat löschen. Bevor Sie mit Änderungen beginnen, **empfehlen wir Ihnen dringend, sicherzustellen, dass Ihre Websites durch das Löschen des Zertifikats nicht unzugänglich werden**. Denken Sie daran, dass Ihre Benutzer auf einen Sicherheitsfehler stoßen, wenn sie versuchen, auf eine Website zuzugreifen, die mit HTTPS betrieben wird, aber über keine sichere SSL-Verbindung verfügt.

Da hierfür die Überprüfung Ihrer Website-Einstellungen erforderlich ist, empfehlen wir Ihnen, sich im Falle von Problemen mit einem [spezialisierten Dienstleister](/links/partner) in Verbindung zu setzen. Für externe Dienstleistungen können wir Ihnen leider keine Unterstützung anbieten.

Wenn Sie bereit sind, das SSL-Zertifikat zu löschen, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und wählen Sie `Web Cloud`{.action} aus. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Klicken Sie auf den Tab `Allgemeine Informationen`{.action}. Klicken Sie dann auf den Button `...`{.action}. neben "SSL-Zertifikat" und dann auf `SSL löschen`{.action}.

Bestätigen Sie im Popup-Fenster den Löschvorgang. Dieser dauert höchstens einige Stunden.

![ssl verwalten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

> [!warning]
>
> Die Löschung eines kostenpflichtigen SSL-Zertifikats von **Sectigo** (DV oder EV) ist endgültig, auch wenn das Zertifikat noch nicht abgelaufen ist. Für die verbleibende Zeit können keine anteiligen Rückerstattungen vorgenommen werden. Wenn Sie ein **Sectigo** SSL-Zertifikat (DV oder EV) neu installieren möchten, müssen Sie eine neue Bestellung aufgeben und das neue abonnierte SSL-Zertifikat vollständig bezahlen.
>

### Beheben häufig auftretender Fehler bei SSL-Zertifikaten auf Webhostings

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Diese Meldung zeigt an, dass Sie bereits Inhaber eines SSL-Zertifikats sind. Sie müssen also kein neues SSL-Zertifikat (Let's Encrypt) für Ihr Webhosting aktivieren.

Weitere Informationen finden Sie im Abschnitt "[Aktivierung eines SSL-Zertifikats auf einer Multisite-Website](#multisite)" dieser Anleitung.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

Diese Meldung kann in drei Fällen auftreten.

- 1: Der zu Ihrer Website gehörende Domainname verweist auf die IP-Adresse des CDN Ihres Webhostings. Auf Ihrem Webhosting sind keine CDN-Optionen aktiv.

Um diese Situation zu beheben, weisen Sie Ihrem Domainnamen über die aktive DNS-Zone die IP-Adresse des Webhostings ohne CDN zu.

Die IP-Adresse Ihres Webhostings finden Sie in unserer Anleitung "[Liste der IP-Adressen der Cluster und Webhostings](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Um die aktive DNS-Zone Ihrer Domain zu bearbeiten, lesen Sie unsere Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)".

- 2: Der Ihrer Website zugeordnete Domainname verweist nicht auf die IP-Adresse Ihres Webhostings.

Um diese Situation zu beheben, weisen Sie Ihrem Domainnamen über die aktive DNS-Zone die IP-Adresse des Webhostings zu.
Wenn Sie auf Ihrem Webhosting eine CDN-Option aktiviert haben, können Sie auch die IP-Adresse des Webhostings mit dem CDN verwenden.

Die IP-Adresse Ihres Webhostings finden Sie in unserer Anleitung "[Liste der IP-Adressen der Cluster und Webhostings](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Um die aktive DNS-Zone Ihrer Domain zu bearbeiten, lesen Sie unsere Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit).

- 3: Keiner der im Tab Multisite aufgeführten Domainnamen verfügt über eine aktive SSL Option.

Aktivieren Sie das SSL-Zertifikat für die Domain(n), um die Situation zu beheben. Wenn nötig, lesen Sie den Abschnitt "[Aktivierung eines SSL-Zertifikats auf einer Multisite-Website](#multisite)" in dieser Anleitung, um Ihre Aktionen fortzusetzen.

#### Das SSL-Zertifikat ist auf Ihrem Webhosting aktiv, aber auf Ihrer Website wird die Meldung "Your connection is not private" angezeigt

Diese Meldung wird in folgenden Fällen angezeigt:

- 1: Die Weiterleitungsregel Ihrer URL zu HTTPS ist falsch konfiguriert oder in der Datei ".htaccess" nicht vorhanden.

Um dies zu korrigieren, lesen Sie unsere Anleitung "[URL für den Zugriff auf meine Website mit mod_rewrite über die Datei .htaccess umschreiben](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" oder wenden Sie sich an einen [spezialisierten Dienstleister](/links/partner), wenn Sie Hilfe brauchen.

- 2: Einige Elemente der Webseite werden nicht korrekt auf mit HTTPS verschlüsselte Elemente umgeleitet.

Um dies zu korrigieren, müssen Sie sicherstellen, dass Ihre gesamte Website mithilfe des HTTPS Protokolls verschlüsselt ist.
Lesen Sie unsere Anleitung "[Webhosting: Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website)" oder wenden Sie sich an einen [spezialisierten Dienstleister](/links/partner), wenn Sie Hilfe brauchen.

> [!success]
>
> Die betroffenen Elemente auf der Webseite können direkt aus den SSL-Informationen des Webbrowsers in den *Zertifikatsdetails* eingesehen werden.
>

#### Sie haben Sectigo EV SSL zusammen mit Ihrem Webhosting bestellt, aber das Zertifikat ist noch nicht aktiv und das Webhosting funktioniert nicht korrekt

Diese Situation hängt mit den notwendigen Schritten zur Aktivierung von EV SSL auf Ihrem Webhosting zusammen.

Wenn nötig, lesen Sie unsere Anleitung "[Ein EV SSL-Zertifikat für Ihre Website verwenden](/pages/web_cloud/web_hosting/ssl_ev)", um diese Situation zu beheben.

> [!primary]
>
> Wenn das EV SSL-Zertifikat nicht vollständig aktiv ist, wird die Bestellung niemals abgeschlossen und es werden keine Rechnungen erstellt. Aus diesem Grund wird der Webhosting-Dienst nicht korrekt funktionieren.
>

#### Nach Ablauf des Sectigo SSL-Zertifikats (DV oder EV) erhalten Sie die Fehlermeldung „No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone“

Dieser Fehler tritt auf, wenn das Sectigo SSL-Zertifikat (direkt über das Webhosting aktiviert) abläuft und sich die IP-Adresse des Webhostings ändert. In diesem Fall muss die richtige IP-Adresse in der aktiven DNS-Zone des Domainnamens eingetragen werden (A-Eintrag).

Die IP-Adresse Ihres Webhostings finden Sie in unserer Anleitung "[Liste der IP-Adressen der Cluster und Webhostings](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Um die aktive DNS-Zone Ihrer Domain zu bearbeiten, lesen Sie unsere Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)".

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.