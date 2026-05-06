---
title: "Was tun, wenn Ihre Website nicht erreichbar ist?"
excerpt: Diagnose der Ursachen für die Unverfügbarkeit Ihrer Website
updated: 2026-03-31
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

- Sie haben keine ausstehenden [Zahlungen](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) und [Verlängerungen](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

### 1 - Die Gültigkeit Ihrer Domain überprüfen

> [!warning]
>
> Die Verlängerung Ihrer Dienste liegt in Ihrer alleinigen Verantwortung.<br>
> OVHcloud ist als Hosting-Anbieter verpflichtet, Dienste (Domains, Hosting-Pakete, E-Mail-Accounts etc.), die nicht rechtzeitig verlängert wurden, sowie alle darin enthaltenen Daten unwiderruflich zu löschen.
>
> Daher empfehlen wir Ihnen dringend, die [automatische Verlängerung](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#in-der-praktischen-anwendung) für alle Ihre OVHcloud Abonnements zu aktivieren.
>

<!-- CP-STEPS-START:check-domain-renewal -->
Um die Gültigkeit des Abonnements für Ihre Domain zu überprüfen, klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Meine Angebote und Dienste](/links/control-panel/billing-services).
>>
> **Schritt 2**
>>
>> Wenn nötig verlängern Sie Ihre Domain mit Klick auf den Button `...`{.action}, dann auf `Dienst verlängern`{.action}.
>>
>> ![renew-service-button](/pages/assets/screens/control_panel/product-selection/web-cloud/order/renew-service-button.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Nach dieser Verlängerung ist Ihre Website innerhalb von maximal 48 Stunden verfügbar.
<!-- CP-STEPS-END:check-domain-renewal -->

### 2 - DNS Server überprüfen

Um die Gültigkeit Ihrer [DNS Server](/pages/web_cloud/domains/dns_server_edit) zu überprüfen, gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.

**Klicken Sie auf das Szenario, das Ihrer Situation entspricht, um den Inhalt anzuzeigen.**

<!-- CP-STEPS-START:check-dns-servers-scenario1 -->
/// details | Szenario 1 - Keine Anomalien bei den DNS Servern

Um die deklarierten DNS Server zu überprüfen, klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domain Names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Überprüfen Sie die im Tab `DNS-Server`{.action} angezeigten Informationen:
>>
>> ![srv-dns-ok2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/name-dns-server.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wenn die Servernamen mit den Zielen der `NS`-Einträge in der **DNS-Zone** identisch sind, gehen Sie zu [Teil 3](#step3):
>>
>> ![srv-dns-ok](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns.png){.thumbnail}

///
<!-- CP-STEPS-END:check-dns-servers-scenario1 -->

/// details | Szenario 2 - Eine Warnung erscheint über der DNS Zone

Eine Warnung im Tab **DNS-Zone** zeigt an, dass die von Ihrer Domain verwendeten DNS Server nicht in Ihrer Zone hinterlegt sind. Hier sind zwei Szenarien möglich.

- Unter "Sie verwenden derzeit folgende DNS-Server:" sind die angegebenen Server vom Typ "ns **?** .ovh.net" und "dns **?** .ovh.net" (wobei "**?**" für eine zweistellige Zahl steht):

![warning_other_ovh_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-other-ovh-dns-servers.png){.thumbnail}

Ändern Sie die DNS Server entsprechend den Anweisungen in dieser [Anleitung](/pages/web_cloud/domains/dns_server_edit), damit diese mit den Zielen der Einträge vom Typ `NS` in der **DNS-Zone** identisch sind.

Ihre Website wird dann innerhalb von maximal 48 Stunden verfügbar sein.

- Unter "Sie verwenden derzeit folgende DNS-Server:" sind die angegebenen Server nicht vom Typ "ns **?** .ovh.net" und "dns **?** .ovh.net":

![warning_external_dns_srv](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/message-external-dns-servers.png){.thumbnail}

> [!warning]
>
> Kontaktieren Sie in diesem Fall den Hoster Ihrer DNS Zone, Ihren Webmaster oder die [OVHcloud Partner](/links/partner), bevor Sie die Änderung vornehmen.
>
> Es ist möglich, dass die von Ihrer Domain verwendeten DNS Server funktionieren und dass das Problem beim Zugriff auf Ihre Website auf einen fehlenden oder fehlerhaften Eintrag in der [DNS Zone](/pages/web_cloud/domains/dns_zone_general_information) zurückzuführen ist. Jede Änderung der DNS Server kann dazu führen, dass Ihre E-Mail Adressen oder andere Online-Anwendungen nicht mehr verfügbar sind.

///

<!-- CP-STEPS-START:fix-missing-ns-records -->
/// details | Szenario 3 - In der DNS Zone wird kein Eintrag des Typs "NS" angezeigt

Die **DNS-Zone** Ihrer Domain enthält keinen Eintrag vom Typ `NS`:

![srv_dns_missing](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dashboard-entry-ns-missing.png){.thumbnail}

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Erstellen Sie ein Backup der aktuellen DNS Zone, indem Sie auf den Button `Im Textmodus bearbeiten`{.action} klicken:
>>
>> ![change_DNS_zone_change_text_format](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/change-in-text-format.png){.thumbnail}
>>
>> Kopieren Sie den Inhalt Ihrer **DNS-Zone** in ein Textdokument. Speichern Sie diese Datei lokal ab.
>>
> **Schritt 3**
>>
>> Klicken Sie auf `Meine DNS-Zone zurücksetzen`{.action} und wählen Sie `Nein, aber ich möchte meine DNS-Zone zurücksetzen.`{.action}.
>>
>> Wählen Sie Ihre E-Mail- und Hosting-Server aus und klicken Sie auf `Bestätigen`{.action}.
>>
>> ![change_DNS_zone_reset](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Ihre Website wird dann innerhalb von maximal 24 Stunden verfügbar sein.

///
<!-- CP-STEPS-END:fix-missing-ns-records -->

### 3 - Die DNS Zone überprüfen <a name="step3"></a>

In diesem Schritt ermitteln Sie die IP-Adresse Ihres Hostings und fügen sie zu Ihrer **DNS-Zone** hinzu.

Wenn Ihre Website nicht auf der OVHcloud Infrastruktur gehostet ist oder von einem anderen Anbieter verwaltet wird, kontaktieren Sie bitte den zuständigen Support.

<!-- CP-STEPS-START:check-hosting-ip-for-dns -->
Wenn Ihre Website auf einem unserer [Hosting-Angebote](/links/web/hosting) gehostet wird, klicken Sie auf die Tabs, um die **2** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Im Feld **Allgemeine Informationen** finden Sie die Adressen unter **IPv4** und **IPv6**.
>>
>> ![IPv4-IPv6](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4-and-ipv6.png){.thumbnail}
>>
>> Kopieren Sie die IPv4- und/oder IPv6-Adresse Ihrer Domain.
<!-- CP-STEPS-END:check-hosting-ip-for-dns -->

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
