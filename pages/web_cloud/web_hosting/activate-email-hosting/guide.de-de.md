---
title: "Webhosting - Inklusiv-E-Mail-Adressen aktivieren"
excerpt: "Diese Anleitung erklärt, wie Sie die in Ihrem Webhosting inklusiven E-Mail-Adressen aktivieren können"
updated: 2024-12-12
---

## Ziel 

Wenn Sie ein Webhosting bestellt haben, ohne es direkt mit einem Domainnamen zu verbinden, müssen die im Angebot beinhalteten optionalen E-Mail-Adressen manuell aktiviert werden. Sie können diese mit einem Domainnamen Ihrer Wahl verbinden.

**Diese Anleitung erklärt, wie Sie die in Ihrem Webhosting inklusiven E-Mail-Adressen aktivieren können.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/oqWovkSP85A?si=1rnqBvhVLdhr2rI5" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## Voraussetzungen

- Sie verfügen über einen [Domainnamen](/links/web/domains) in Ihrem OVHcloud Kundencenter.
- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account (mit Ausnahme der Angebote: Kostenloses Hosting 100M und Start10m).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!warning]
>
> Wenn Sie die Option „E-Mail-Adresse(n) bei Ihrem Webhosting inklusive“ für einen externen (nicht bei OVHcloud registrierten) Domainnamen, **dessen Administrator Sie sind**, aktivieren möchten, müssen Sie (mindestens) eine DNS-Zone bei OVHcloud für Ihren externen Domainnamen erstellen. Lesen Sie bei Bedarf unsere Anleitung „[DNS-Zone bei OVHcloud erstellen](/pages/web_cloud/domains/dns_zone_create)“. So wird Ihr Domainname bei Aktivierung der Option in der Liste der verfügbaren Domainnamen angezeigt.
>
> Ist Ihr Domainname bereits bei OVHcloud registriert oder existiert bereits eine DNS-Zone in einem anderen [OVHcloud Kunden-Account](/links/manager), lesen Sie unsere Dokumentation „[Verwaltung der Kontakte](/pages/account_and_service_management/account_information/managing_contacts)“, um die Verwaltung des Domainnamens sicherzustellen.
>
> Wenn Ihr Domainname bereits mit der Option „E-Mail-Adresse(n) bei Ihrem Webhosting inklusive“ eines anderen Webhostings verbunden ist, können Sie ihn nicht direkt mit Ihrem eigenen Webhosting verbinden. Wenden Sie sich an den zuständigen Administrator.
>

## In der praktischen Anwendung

### Aktivierung Ihrer E-Mail-Adressen

Melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an, klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action} und wählen Sie das Webhosting mit den E-Mail-Adressen aus.

Im Feld `Konfiguration` sehen Sie `E-Mail-Adressen`. Klicken Sie rechts davon auf `...`{.action} und danach auf `Mein E-Mail Angebot aktivieren`{.action}.

![Aktivierung der E-Mail-Adressen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/enable-email-included-webhosting.png){.thumbnail}

Daraufhin öffnet sich das Aktivierungsfenster. Wählen Sie aus, welchen Domainnamen Sie mit Ihren E-Mail-Adressen verbinden möchten, und bestätigen Sie Ihre Auswahl.

![Aktivierung der E-Mail-Adressen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-activate-email-included-webhosting-step-1.png){.thumbnail}

> [!primary]
> Wenn Sie mehr inklusive E-Mail-Accounts nutzen möchten, können Sie ein leistungsfähigeres [Webhosting](/links/web/hosting) über unsere Webseite auswählen.
>
> Achtung: Die Aktivierung der Option E-Mail kann einige Minuten in Anspruch nehmen. Sie erhalten eine E-Mail, die die Installation und Aktivierung des Dienstes MX Plan bestätigt. Dies ist Voraussetzung zur Erstellung und Konfiguration Ihrer E-Mail-Accounts.
>

### Sichern Ihrer E-Mail-Accounts, bevor Ihr Webhosting endet

Wenn Ihr Hosting abläuft oder gelöscht werden muss, können Sie dennoch Ihre E-Mail-Accounts beibehalten.

Melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an, klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action} und wählen Sie das Webhosting aus.

Klicken Sie im Feld `Konfiguration` auf den Button `...`{.action} rechts neben `E-Mail-Adressen`. Klicken Sie dann auf `Meine E-Mail-Option abtrennen`{.action}.

![Aktivierung E-Mail](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/detach-email-included-webhosting.png){.thumbnail}

Eine passende MX Plan Lösung wird Ihnen dann zum Kauf angeboten. Sobald die Bestellung bezahlt ist, können Sie Ihre E-Mail-Accounts auch nach Ablauf des Webhostings nutzen.
 
### Beenden Ihrer E-Mail-Option in Verbindung mit dem Webhosting

Sie können die optionalen E-Mail-Accounts in Verbindung mit Ihrem Webhosting endgültig löschen.

> [!warning]
>
> Diese Aktion kann nicht rückgängig gemacht werden. Nach der Kündigung können Sie die optionalen E-Mail-Konten nicht wieder aktivieren.

Melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an, klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action} und wählen Sie das Webhosting aus.

Klicken Sie im Feld `Konfiguration` auf den Button `...`{.action} rechts neben `E-Mail-Adressen`. Klicken Sie dann auf `Die Option "E-Mail" kündigen`{.action}.

![Aktivierung der E-Mail-Adressen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/cancel-email-included-webhosting.png){.thumbnail}

> [!warning]
>
> Um die Löschung des mit Ihrem Webhosting verbundenen E-Mail-Angebots zu bestätigen, erhalten Sie per E-Mail einen Bestätigungslink. Sie müssen auf diesen Link klicken, damit der Löschvorgang gestartet wird.

#### Sonderfall - Löschung des mit Ihrem Webhosting verbundenen E-Mail-Dienstes um diesen mit einem anderen Domainnamen zu verbinden

Aus Sicherheitsgründen kann es mehrere Tage dauern, bis ein E-Mail-Angebot endgültig gelöscht wird, nachdem Sie auf den Link zur Bestätigung des Löschvorgangs geklickt haben.

Wenn Sie das mit Ihrem Webhosting verbundene E-Mail-Angebot löschen möchten, um es mit einem anderen Domainnamen zu verbinden, und **nur** in diesem Fall, müssen Sie Ihre Anfrage zur Beschleunigung der Löschung des Angebots schriftlich bestätigen.  
Kontaktieren Sie hierzu den Support, indem Sie in Ihrem [OVHcloud Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) ein Support-Ticket erstellen. Das Support-Ticket muss über die Kundenkennung erstellt werden, die den zu löschenden Dienst verwaltet.

Sobald die Anfrage bearbeitet wurde, können Sie das mit Ihrem Webhosting verbundene E-Mail-Angebot mit einem anderen Domainnamen verbinden.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.