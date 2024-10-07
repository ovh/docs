---
title: 'SSL Gateway bestellen'
excerpt: 'Erfahren Sie hier, wie Sie Verbindungen zu Ihrer Website sichern'
updated: 2024-10-01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Das Angebot SSL Gateway wurde entwickelt, um Ihnen ein SSL Zertifikat für Ihren Domainnamen und Ihren Hosting-Dienst (VPS, Mailserver, Dedicated Server etc.) zur Verfügung zu stellen.

> [!warning]
>
> Die SSL Gateways sind nicht mit den [OVHcloud Shared Hosting](/links/web/hosting) Angeboten kompatibel. Wenn Sie ein SSL-Zertifikat für dieses Angebot nutzen möchten, lesen Sie unsere Anleitung „[SSL-Zertifikat auf einem Webhosting verwalten](/pages/web_cloud/web_hosting/ssl_on_webhosting)“.
>

**Diese Anleitung erklärt, wie Sie ein SSL Gateway bestellen.**

## Voraussetzungen

- Sie haben einen aktiven [Domainnamen](/links/web/domains) (oder Subdomain).
- Sie haben Zugriff auf die DNS-Zone.

## In der praktischen Anwendung

### Bestellung

Um unser SSL Gateway Angebot zu bestellen, [klicken Sie hier](/links/web/ssl-gateway).

Wählen Sie Ihr Angebot aus und klicken Sie auf `Jetzt bestellen`{.action}.

![order ssl gateway](/pages/assets/screens/website/order/configure-my-ssl-gateway.png){.thumbnail}

Geben Sie auf der neuen Seite im Formular `Domainnamen suchen`{.action} den betreffende Domainnamen oder Subdomain ein und klicken Sie dann auf das Lupensymbol rechts.

> [!warning]
>
> - Kostenlos: Es sind nur Domainnamen bis zum 3. Level (www.domain.tld) erlaubt.
>
> - Erweitert: Domainnamen mit Level 4 und mehr (blog.www.domain.tld) sind erlaubt.
>

Unser System erkennt dann automatisch die IP-Adressen Ihrer Website, die für Ihren Domainnamen oder Subdomain konfiguriert sind. Wenn Sie über mehrere IPs verfügen, wählen Sie eine aus.

> [!warning]
>
> - Auch wenn Sie mehrere IP-Adressen für Ihre Website haben, können Sie bei der Bestellung nur eine IP auswählen.
> - Wenn Sie das Erweiterte Angebot nutzen, können Sie später über Ihr [OVHcloud Kundencenter](/links/manager) bis zu 2 zusätzliche IPs hinzufügen.
>

Wählen Sie anschließend den Standort des Rechenzentrums, in dem Sie das SSL Gateway installieren möchten aus.

Falls gewünscht und bei der Bestellung verfügbar, aktivieren Sie die Option `Ich verwalte die DNS-Zone dieser Domain und autorisiere OVHcloud, den erforderlichen DNS-Eintrag automatisch zu ändern`{.action}. Die Ihrem Domainnamen oder Ihrer Subdomain zugeordnete DNS Zone wird dann automatisch mit der IP-Adresse des SSL Gateways aktualisiert.

> [!warning]
>
> Aufgrund der Caches von ISPs kann es bis zu 24 Stunden dauern, bis Änderungen an Ihrer DNS-Zone wirksam werden.
>

Stellen Sie sicher, dass alle Ihre Angaben auf der Bestellseite korrekt sind, und klicken Sie dann auf `Weiter`{.action}.

Lassen Sie sich zum Abschluss zur Validierung / Zahlung Ihres Bestellscheins führen.

### Konfiguration Ihrer DNS Zone

Wenn Sie nach der Validierung Ihres Bestellscheins die Option `Ich verwalte die DNS-Zone dieser Domain und autorisiere OVHcloud, den erforderlichen DNS-Eintrag automatisch zu ändern`{.action}, erhalten Sie eine E-Mail mit der Aufforderung, Ihren Domainnamen oder Ihre Subdomain innerhalb von 3 Tagen auf die OVHcloud Infrastruktur verweisen zu lassen.

> [!warning]
>
> Ohne Änderung Ihrer DNS-Zone innerhalb von 3 Tagen wird Ihre Bestellung storniert.
>

> [!faq]
>
> Fall 1: Ihre DNS Zone wird von den Shared DNS Servern von OVHcloud verwaltet.
>>
>> - Wenn Ihre Kundenkennung ein *Administrator* oder *technischer* Kontakt dieser DNS-Zone ist, müssen Sie diese in Ihrem [OVHcloud Kundencenter](/links/manager) ändern.
>> - Wenn Sie kein *Administrator* oder *technischer* Kontakt für diese DNS-Zone sind, wenden Sie sich an den zuständigen DNS-Zonenadministrator, um die Zone zu ändern.
>>
>> Befolgen Sie bei Bedarf die Anweisungen in der Anleitung „[OVHcloud DNS-Zone für eine Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)“.
>>
>
> Fall 2: Ihre DNS Zone wird nicht von den Shared DNS Servern von OVHcloud verwaltet.
>>
>> - In diesem Fall ändern Sie die IP in Ihrer DNS Zone über das Interface Ihres Anbieters oder konfigurieren Sie Ihren zuständigen DNS-Server.
>>
>

Sobald Ihre Änderung von unserer Infrastruktur übernommen wurde, erhalten Sie eine E-Mail-Bestätigung.

> [!warning]
>
>  Aufgrund der Caches von ISPs kann es bis zu 24 Stunden dauern, bis Änderungen an Ihrer DNS-Zone wirksam werden.
>

## Weiterführende Informationen
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
