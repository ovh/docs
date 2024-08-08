---
title: "Was tun, wenn Ihre Website nicht erreichbar ist?"
excerpt: Diagnose der Ursachen für die Unverfügbarkeit Ihrer Website
updated: 2022-08-02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Wenn Ihre Website nicht erreichbar ist, können in Ihrem Browser mehrere Fehlermeldungen angezeigt werden. Die folgenden Beispiele zeigen eine fehlerhafte Konfiguration Ihrer [DNS-Server](/pages/web_cloud/domains/dns_server_edit), Ihrer [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) oder einer gesperrten Domäne (wenn auf Ihrer Website eine der hier beschriebenen Fehlermeldungen nicht angezeigt wird, finden Sie weitere Informationen im Abschnitt [Weiterführende Informationen](#go-further):

|Browser|Betreffende Fehlermeldung|
|-|---|
|Chrome:<br>"Die Website ist nicht erreichbar"|![cantbereached_chrome](/pages/assets/screens/other/browsers/errors/cant-be-reached-chrome.png){.thumbnail}|
|Firefox:<br>"Seite wurde nicht gefunden"|![cantbereached_firefox](/pages/assets/screens/other/browsers/errors/cant-be-reached-firefox.png){.thumbnail}|
|Edge:<br>"Hmmm...diese Seite ist leider nicht erreichbar"|![cantbereached_edge](/pages/assets/screens/other/browsers/errors/cant-be-reached-edge.png){.thumbnail}|
|Safari:<br>"Safari kann keine Verbindung zum Server aufbauen"|![cantbereached_safari](/pages/assets/screens/other/browsers/errors/cant-be-reached-safari.png){.thumbnail}|

**Diese Anleitung erklärt, wie Sie Fehler der Art "Website nicht erreichbar" beheben.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den erforderlichen Berechtigungen zum Verwalten der Domain bzw. der [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) sowie der DNS-Server.
- Sie haben keine ausstehenden [Zahlungen](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) und [Verlängerungen](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).

## In der praktischen Anwendung

### Schritt 1: Die Gültigkeit Ihrer Domain überprüfen

> [!warning]
>
> Die Verlängerung Ihrer Dienste liegt in Ihrer alleinigen Verantwortung.<br>
> OVHcloud ist als Hosting-Anbieter verpflichtet, Dienste (Domains, Hosting-Pakete, E-Mail-Accounts etc.), die nicht rechtzeitig verlängert wurden, sowie alle darin enthaltenen Daten unwiderruflich zu löschen.
>
> Daher empfehlen wir Ihnen dringend, die [automatische Verlängerung](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#in-der-praktischen-anwendung) für alle Ihre OVHcloud Abonnements zu aktivieren.
>

Um die Gültigkeit des Abonnements für Ihre Domain zu überprüfen, klicken Sie oben rechts in Ihrem [OVHcloud Kundencenter](/links/manager) auf Ihren Namen, um das Kontextmenü anzuzeigen, und dann auf `Produkte und Dienstleistungen`{.action}.

![control-panel](/pages/assets/screens/control_panel/product-selection/right-column/right-menu-product-and-services.png){.thumbnail}

Wenn nötig verlängern Sie Ihre Domain mit Klick auf den Button `...`{.action} rechts und dann auf `Dienst verlängern`{.action}.

![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}

Nach dieser Verlängerung ist Ihre Website innerhalb von maximal 48 Stunden verfügbar.

### Schritt 2: DNS Server überprüfen

Um die Gültigkeit Ihrer [DNS Server](/pages/web_cloud/domains/dns_server_edit) zu überprüfen, klicken Sie in Ihrem [OVHcloud Kundencenter](/links/manager) auf `Domainnamen`{.action} und dann auf die Domain Ihrer Website.

#### Szenario 1: keine Anomalien bei den DNS Servern

Überprüfen Sie die im Tab `DNS-Server`{.action} angezeigten Informationen:

![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}

Wenn die Servernamen mit den Zielen der `NS`-Einträge in der `DNS-Zone`{.action} identisch sind, gehen Sie zu [Schritt 3](#step3).

![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

#### Szenario 2: eine Warnung erscheint über der DNS Zone

Eine Warnung im Tab `DNS-Zone`{.action} zeigt an, dass die von Ihrer Domain verwendeten DNS Server nicht in Ihrer Zone hinterlegt sind. Hier sind zwei Szenarien möglich.

- Unter "Sie verwenden derzeit folgende DNS-Server:" sind die angegebenen Server vom Typ "ns **?** .ovh.net" und "dns **?** .ovh.net" (wobei "**?**" für eine zweistellige Zahl steht):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Ändern Sie die DNS Server entsprechend den Anweisungen in dieser [Anleitung](/pages/web_cloud/domains/dns_server_edit), damit diese mit den Zielen der Einträge vom Typ `NS` in der `DNS-Zone`{.action} identisch sind.

Ihre Website wird dann innerhalb von maximal 48 Stunden verfügbar sein.

- Unter "Sie verwenden derzeit folgende DNS-Server:" sind die angegebenen Server nicht vom Typ "ns **?** .ovh.net" und "dns **?** .ovh.net":

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> Kontaktieren Sie in diesem Fall den Hoster Ihrer DNS Zone, Ihren Webmaster oder die [OVHcloud Partner](/links/partner), bevor Sie die Änderung vornehmen.
>
> Es ist möglich, dass die von Ihrer Domain verwendeten DNS Server funktionieren und dass das Problem beim Zugriff auf Ihre Website auf einen fehlenden oder fehlerhaften Eintrag in der [DNS Zone](/pages/web_cloud/domains/dns_zone_general_information) zurückzuführen ist. Jede Änderung der DNS Server kann dazu führen, dass Ihre E-Mail Adressen oder andere Online-Anwendungen nicht mehr verfügbar sind.
>

#### Szenario 3: In der DNS Zone wird kein Eintrag des Typs "NS" angezeigt

Die `DNS-Zone`{.action} Ihrer Domain enthält keinen Eintrag vom Typ `NS`:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Erstellen Sie ein Backup der aktuellen DNS Zone, indem Sie rechts im Menü auf den Button `Im Textmodus bearbeiten`{.action} klicken:

![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}

Kopieren Sie anschließend den Inhalt Ihrer `DNS-Zone`{.action} in ein Textdokument. Speichern Sie diese Datei lokal ab.

Klicken Sie anschließend auf `Meine DNS-Zone zurücksetzen`{.action} und wählen Sie `Nein, aber ich möchte meine DNS-Zone zurücksetzen.`{.action}, wählen Sie Ihre E-Mail- und Hosting-Server aus und klicken Sie auf `Bestätigen`{.action}.

![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}

Ihre Website wird dann innerhalb von maximal 24 Stunden verfügbar sein.

### Schritt 3: Die DNS Zone überprüfen <a name="step3"></a>

In diesem Schritt ermitteln Sie die IP-Adresse Ihres Hostings und fügen sie zu Ihrer `DNS-Zone`{.action} hinzu.

Wenn Ihre Website nicht auf der OVHcloud Infrastruktur gehostet ist oder von einem anderen Anbieter verwaltet wird, kontaktieren Sie bitte den zuständigen Support.

Wenn Ihre Website auf einem unserer [Hosting-Angebote](/links/web/hosting) gehostet wird, wählen Sie aus `Hosting-Pakete`{.action} den entsprechenden Dienst aus.

Kopieren Sie im Tab `Allgemeine Informationen`{.action} die IPv4- und/oder IPv6-Adresse Ihrer Domain.

![find-ipv4-and-ipv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}

Tragen Sie diese dann in die [DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) Ihrer Domain ein, indem Sie einen oder mehrere Einträge vom Typ `A` bearbeiten oder erstellen.

![ipv4-DNSzone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-a.png){.thumbnail}

Ihre Website wird dann innerhalb von maximal 24 Stunden verfügbar sein.

## Weiterführende Informationen <a name="go-further"></a>

[Fehler "Seite nicht installiert" beheben](/pages/web_cloud/web_hosting/multisites_website_not_installed)

[Beheben des Fehlers "500 Internal Server Error"](/pages/web_cloud/web_hosting/diagnostic_fix_500_internal_server_error)

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.