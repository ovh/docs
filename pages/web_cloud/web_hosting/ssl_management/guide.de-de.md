---
title: "Webhosting - Neue Verwaltung der SSL-Zertifikate"
excerpt: "Erfahren Sie hier, wie Sie mit unserem neuen Verwaltungsinterface ein SSL-Zertifikat auf Ihrem OVHcloud Webhosting verwalten"
updated: 2025-10-01
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

Secure Socket Layer (SSL) Zertifikate erlauben es, Verbindungen von und zu Ihrer Website zu verschlüsseln. So wird verhindert, dass unbefugte Personen oder Bots auf ausgehende und eingehende Anfragen von Ihrer Website zugreifen können.

OVHcloud bietet verschiedene Arten von SSL-Zertifikaten für die [Webhostings](/links/web/hosting) an. Sie werden nachfolgend in dieser Anleitung beschrieben. SSL-Zertifikate sind für die Sicherheit Ihrer Website unerlässlich.

Es gibt drei Arten von SSL-Zertifikaten:

- Domain Validation (DV)
- Organization Validation (OV)
- Extended Validation (EV)

Die SSL-Verschlüsselungsstufen sind bei diesen drei Zertifikatstypen identisch.

Der Hauptunterschied besteht in den Überprüfungen, mit denen die ausstellende Zertifikatsstelle (CA) die Legitimität verifiziert.

Sie benötigen ein SSL-Zertifikat für Ihre Website, um es über HTTPS zu verwenden.

**Diese Anleitung erklärt, wie Sie mit unserem neuen Verwaltungsinterface ein SSL-Zertifikat auf Ihrem OVHcloud Webhosting verwalten.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben mindestens eine [Domain](/links/web/domains) registriert.

> [!warning]
>
> Bevor Sie fortfahren, **überprüfen Sie, dass Domainname und Subdomain**, die von Ihrem zukünftigen SSL-Zertifikat betroffen sind:
>
> - Auf die IP-Adresse Ihres Webhostings verweisen.
> - Auf Ihrem Webhosting als Multisite deklariert sind.
>
> Um dies zu überprüfen, lesen Sie unsere Anleitungen:
>
> - [Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)
> - [Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

## In der praktischen Anwendung

### Zugriff auf die Verwaltung der SSL-Zertifikate von Ihrem Webhosting aus

> [!primary]
>
> **Informationen zur Migration auf das neue SSL-Zertifikat-Verwaltungsinterface:**
>
> Diese Anleitung richtet sich an Kunden, deren Webhosting-Dienste bereits auf das neue Verwaltungsinterface für SSL-Zertifikate migriert sind.  
> Gehen Sie in Ihrem OVHcloud Kundencenter auf Ihr Webhosting und überprüfen Sie den Tab `SSL-Zertifikate`, um festzustellen, ob diese Migration durchgeführt wurde.  
> Wenn der Tab `SSL-Zertifikate` fehlt, wurde Ihr Dienst noch nicht zum neuen Verwaltungsinterface migriert. In diesem Fall konsultieren Sie [diese Anleitung](/pages/web_cloud/web_hosting/ssl_on_webhosting), um Ihr SSL-Zertifikat zu verwalten.
>
> Aus technischen Gründen können nicht alle Webhosting-Dienste unserer Kunden auf einmal migriert werden. Diese Migration erfolgt automatisch über mehrere Wochen, ohne dass die Funktionsweise Ihrer Webhosting-Dienste beeinträchtigt wird oder dass dazu weitere Eingriffe oder Aktionen Ihrerseits erforderlich sind.
>
> Im Laufe der Zeit werden alle Webhosting-Dienste mit dem neuen Verwaltungsinterface für SSL-Zertifikate funktionieren.

Um über Ihr Webhosting auf die Verwaltung der SSL-Zertifikate zuzugreifen, klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen:

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
>> Klicken Sie auf der angezeigten Seite auf den Tab `SSL-Zertifikate`{.action}.
>>
>> ![SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}

Hier können Sie Ihre SSL-Zertifikate für alle Domains und Subdomains Ihres Webhostings verwalten.

### SSL-Zertifikat auf seinem Webhosting aktivieren <a name="ssl-enable"></a>

OVHcloud bietet 4 Lösungen zur Installation eines SSL-Zertifikats auf einem Webhosting.

**Klicken Sie unten auf das SSL-Zertifikat Ihrer Wahl, um die Erklärungen anzuzeigen.**

/// details | SSL-Zertifikat für Let's Encrypt (DV) aktivieren

Das kostenlose SSL-Zertifikat von Let's Encrypt (DV) kann bis zu **99** Domainnamen und Subdomains enthalten, die auf einem Webhosting deklariert sind.

Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen:

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
>> Klicken Sie auf der angezeigten Seite auf den Tab `SSL-Zertifikate`{.action}.
>>
>> ![SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Wenn der Inhalt der Registerkarte angezeigt wird, wählen Sie die Domain oder Subdomain aus, für die Sie das kostenlose SSL-Zertifikat Let's Encrypt (DV) aktivieren möchten, und klicken Sie auf den Link `SSL-Zertifikat aktivieren`.
>>
>> ![SSL Let's Encrypt](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/enable-ssl-lets-encrypt.png){.thumbnail}
>>
>> Klicken Sie dann auf den Button `SSL Let's Encrypt aktivieren`{.action}.

> [!success]
>
> Für jeden Domainnamen und jede Subdomain, die kürzlich auf Ihrem Webhosting als Multisite deklariert wurde, wird automatisch ein Let's Encrypt SSL-Zertifikat generiert. Um dies zu überprüfen, überprüfen Sie, dass Ihr Domainname und/oder Ihre Subdomain in der Tabelle unten auf der Seite `SSL-Zertifikate`{.action} angezeigt werden.

///

/// details | SSL-Zertifikat für Sectigo (DV) aktivieren

Das kostenpflichtige SSL-Zertifikat von Sectigo (DV) gilt nur für einen Domainnamen und dessen Subdomain "www" (zum Beispiel: `domain.tld` und `www.domain.tld`) oder **nur** für eine Subdomain (zum Beispiel: `sub.domain.tld`).

Klicken Sie auf die Tabs, um die **5** Schritte anzuzeigen:

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
>> Klicken Sie auf der angezeigten Seite auf den Tab `SSL-Zertifikate`{.action}.
>>
>> ![SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Wenn der Inhalt der Registerkarte angezeigt wird, klicken Sie auf `Sectigo-SSL-Zertifikat bestellen`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Wählen Sie im neu geöffneten Fenster über das Dropdown-Menü die betreffende Domain oder Subdomain aus und klicken Sie auf `Bestätigen`{.action}, um zum Bestellschein für Ihr Sectigo DV SSL-Zertifikat weitergeleitet zu werden.
>>
>> ![SSL Sectigo Domainauswahl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
>> Folgen Sie der Bestellung bis zur Zahlung, um die Anfrage zur Erstellung des Sectigo DV SSL-Zertifikats für Ihre Domain und/oder Subdomain auf Ihrem Webhosting zu bestätigen.

> [!alert]
>
> Sobald die Bestellung bestätigt wurde, wird die SSL-Zertifikatanforderung an die Sectigo-Zertifizierungsstelle gesendet.
>
> Ab diesem Zeitpunkt ist keine Rückerstattung des Sectigo DV SSL-Zertifikats möglich.

///

/// details | SSL-Zertifikat für Sectigo (EV) kostenpflichtig aktivieren

Das kostenpflichtige SSL-Zertifikat von Sectigo (EV) gilt nur für einen Domainnamen und dessen Subdomain "www" (zum Beispiel: `domain.tld` und `www.domain.tld`) oder **nur** für eine Subdomain (zum Beispiel: `sub.domain.tld`).

> [!warning]
>
> Das kostenpflichtige SSL-Zertifikat von Sectigo (EV) hat spezifische Bedingungen:
>
> - Sie bestellen oder verfügen über einen [Domainnamen](/links/web/domains) und dessen exklusive Nutzungsrechte. Der Domainname darf nicht bereits mit einem SSL-Zertifikat verbunden sein.
> - Sie vertreten eine Organisation (Unternehmen, Regierungsbehörde, etc.), die in einem amtlichen Register eingetragen ist.
> - Sie haben die Genehmigung Ihrer Organisation, ein Sectigo EV SSL-Zertifikat zu bestellen.
> - Sie sind in der Lage, Kontaktdaten und weitere Auskünfte zu Ihrer Organisation korrekt anzugeben.
>
> Sie können über [diese Adresse](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} prüfen, ob Sie für die Bestellung eines Sectigo EV SSL-Zertifikats infrage kommen.

Klicken Sie auf die Tabs, um die **6** Schritte anzuzeigen:

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
>> Klicken Sie auf der angezeigten Seite auf den Tab `SSL-Zertifikate`{.action}.
>>
>> ![SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Wenn der Inhalt der Registerkarte angezeigt wird, klicken Sie auf `Sectigo-SSL-Zertifikat bestellen`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Wählen Sie im neu geöffneten Fenster über das Dropdown-Menü die betreffende Domain oder Subdomain aus und klicken Sie auf `Bestätigen`{.action}, um zum Bestellschein für Ihr Sectigo EV SSL-Zertifikat weitergeleitet zu werden.
>>
>> ![SSL Sectigo Domainauswahl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Schritt 6**
>>
>> Wählen Sie das **Sectigo EV SSL-Zertifikat** aus und fahren Sie mit der Bestellung fort.
>>
>> Geben Sie die von **Sectigo** angeforderten Informationen ein, bevor Ihnen das Sectigo EV SSL-Zertifikat ausgestellt wird. 
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Klicken Sie auf `Fortfahren`{.action}, sobald **alle Elemente** korrekt eingegeben sind.
>>
>> Führen Sie die Bestellung bis zur Zahlung durch, um die Anfrage zur Erstellung des SSL-Zertifikats zu bestätigen.

> [!alert]
>
> Sobald die Bestellung validiert wurde, wird die Anfrage für ein Sectigo EV SSL-Zertifikat an die Zertifizierungsstelle **Sectigo** übermittelt.
>
> Vergewissern Sie sich, dass Sie für die Bestellung eines Sectigo EV SSL-Zertifikats infrage kommen, **bevor Sie das Zertifikat bezahlen**.
>
> Eine Erstattung des Sectigo EV SSL-Zertifikats ist nicht möglich, **auch wenn das Prüfverfahren bei Sectigo nicht erfolgreich verläuft**.

///

/// details | Benutzerdefiniertes SSL-Zertifikat installieren

Diese Lösung erlaubt es, Ihr eigenes SSL-Zertifikat für Ihre Domain zu installieren, wenn keine der drei Lösungen Ihren Bedürfnissen entspricht und Sie ein SSL-Zertifikat verwenden möchten, das Sie bereits besitzen.

Klicken Sie auf die Tabs, um die **5** Schritte anzuzeigen:

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
>> Klicken Sie auf der angezeigten Seite auf den Tab `SSL-Zertifikate`{.action}.
>>
>> ![SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Wenn der Inhalt des Tab angezeigt wird, klicken Sie auf `Import Ihres eigenen SSL-Zertifikats`{.action}.
>>
>> ![Personalisiertes SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Im folgenden Fenster wird ein Formular mit 3 auszufüllenden Feldern angezeigt:
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window.png){.thumbnail}
>>
>> - `Inhalt Ihres Zertifikats kopieren (nur RSA)`{.action}: Geben Sie den Inhalt der Datei **certificate.crt** ein, die von Ihrem SSL-Anbieter bereitgestellt wurde, einschließlich `-----BEGIN CERTIFICATE-----` und `-----END CERTIFICATE-----` (oder entsprechender Zeilen). Die RSA-Verschlüsselung ist die Standardmethode für SSL-Zertifikate.
>> - `Inhalt Ihres Private Key kopieren (nicht verschlüsselt)`{.action}: Geben Sie den Inhalt der von Ihrem SSL-Anbieter bereitgestellten **private.key** Datei ein, einschließlich `-----BEGIN RSA PRIVATE KEY-----` und `-----END RSA PRIVATE KEY-----` (oder entsprechender Zeilen). *Unverschlüsselt* bedeutet, dass der private Schlüssel nicht durch ein Kennwort oder eine Passphrase geschützt sein darf. Andernfalls schlägt die Installation des Zertifikats fehl.
>> - `Inhalt Ihrer Zertifikatskette kopieren`{.action}: Geben Sie den Inhalt der Datei **ca_bundle.crt** Ihres SSL-Anbieters ein, einschließlich `-----BEGIN CERTIFICATE-----` und `-----END CERTIFICATE-----` (oder Entsprechungen).
>>
>> ![Order an SSL certificate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/import-your-own-ssl-certificate-window-completed.png){.thumbnail}
>>
>> Wenn Sie alle 3 Formulare ausgefüllt haben, klicken Sie auf `Bestätigen`{.action}, um den Import des personalisierten SSL-Zertifikats auf Ihr Webhosting abzuschließen.

> [!success]
>
> Um die in den 3 Feldern anzugebenden Informationen zu finden, folgen Sie nur den Schritten **1** und **2** unserer Anleitung „[Webhosting - Eigenes SSL-Zertifikat installieren](/pages/web_cloud/web_hosting/ssl_custom)“.

///

### SSL-Zertifikat auf einem Webhosting deaktivieren <a name="delete-ssl"></a>

> [!warning]
>
> Wenn Sie ein SSL-Zertifikat von Ihrem Webhosting löschen möchten und stellen Sie sicher, dass durch das Löschen des SSL-Zertifikats Ihre Websites nicht unzugänglich werden, **bevor Sie fortfahren**. In diesem Fall erhalten Ihre Benutzer eine Sicherheitswarnung, wenn sie versuchen, auf Ihre Website über HTTPS zuzugreifen.

Da diese Überprüfung von den Einstellungen Ihrer Website abhängig ist, empfehlen wir Ihnen, nötigenfalls einen spezialisierten Dienstleister zu kontaktieren. Wir können Ihnen in dieser Hinsicht keine Unterstützung bieten.

So entfernen Sie das auf Ihrem Webhosting installierte SSL-Zertifikat, klicken Sie auf die Tabs, um die **5** Schritte anzuzeigen:

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
>> Klicken Sie auf der angezeigten Seite auf den Tab `SSL-Zertifikate`{.action}.
>>
>> ![SSL-Zertifikate](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Klicken Sie in der Tabelle am unteren Rand der neu angezeigten Seite auf den Button `⁝`{.action} rechts neben der Zeile für die betreffende Domain und dann auf `SSL deaktivieren`{.action}.
>>
>> ![SSL deaktivieren](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/disable-ssl.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Bestätigen Sie im angezeigten Fenster die Deaktivierung, indem Sie auf `Bestätigen`{.action} klicken.
>>
>> ![SSL löschen](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/ssl-deletion.png){.thumbnail}

Die Deaktivierung des SSL-Zertifikats wird spätestens in einigen Stunden wirksam.

> [!warning]
>
> Die Löschung eines kostenpflichtigen SSL-Zertifikats von **Sectigo** (DV oder EV) ist endgültig, auch wenn das Zertifikat noch nicht abgelaufen ist. Für die verbleibende Zeit können keine anteiligen Rückerstattungen vorgenommen werden. Wenn Sie ein **Sectigo** SSL-Zertifikat (DV oder EV) neu installieren möchten, müssen Sie eine neue Bestellung aufgeben und das neue abonnierte SSL-Zertifikat vollständig bezahlen.

## Weiterführende Informationen

[Webhosting - Website auf HTTPS umstellen](/pages/web_cloud/web_hosting/ssl-activate-https-website).

[Häufige Fehler beim Schutz Ihrer Website mit SSL](/pages/web_cloud/web_hosting/ssl_avoid_common_pitfalls_of_making_website_secure).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.