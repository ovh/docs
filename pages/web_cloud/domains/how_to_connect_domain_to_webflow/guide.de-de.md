---
title: "Verbinden eines OVHcloud Domainnamens mit einem Webflow Hosting"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem Webflow Hosting zu verwenden"
updated: 2026-03-18
---

## Ziel

Sie sind Inhaber eines Domainnamens bei OVHcloud und möchten diesen mit einem Webflow Hosting verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone bearbeiten, um die Konfiguration Ihres Webflow Hostings zu ermöglichen.

**Erfahren Sie hier, wie Sie Ihren OVHcloud Domainnamen mit einem Webflow Hosting verbinden.**

> [!warning]
>
> - Der Webflow Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud Domainnamen und kann Sie deshalb nicht diesbezüglich beraten.
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie verfügen über die [erforderlichen Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens.
- Sie verfügen über ein Webflow Hosting.
- Sie haben Zugriff auf die Verwaltung dieses Hostings bei Webflow.

<!-- CP-NAV-START:web-dns-zone -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [DNS-Zone](/links/control-panel/web-dns-zone)
- **Navigationspfad:** `Web Cloud`{.action} > `DNS-Zone`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-dns-zone -->

## In der praktischen Anwendung

Bevor Sie die Schritte dieser Anleitung durchführen, empfehlen wir Ihnen, unsere Anleitung "[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)" zu lesen.

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits vorkonfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem Webflow Hosting konfigurieren. Einige Einträge müssen gelöscht werden, um Konflikte mit den in dieser Konfiguration erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### 1. Ihr Webflow Hosting konfigurieren

Bereiten Sie zunächst Ihr Webflow Hosting vor, indem Sie den Anweisungen im Abschnitt **How to connect your custom domain** auf [**dieser Seite der Webflow-Dokumentation**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain) folgen.

### 2. DNS-Einträge in Ihrem OVHcloud Account konfigurieren

> [!warning]
>
> Bevor Sie fortfahren:
>
> - Öffnen Sie einen Tab in Ihrem Webbrowser.
> - Öffnen Sie [**diese Seite der Webflow-Dokumentation**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export).
> - Gehen Sie zum Abschnitt "**How to set your DNS records**" der Webflow-Dokumentation.<br>
> Die folgenden Anweisungen helfen Ihnen bei der Konfiguration Ihrer OVHcloud DNS-Zone.

<!-- CP-STEPS-START:configure-dns-records -->
Klicken Sie auf die nachstehenden Tabs, um die **5** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
>> Die angezeigte Tabelle listet alle DNS-Einträge des ausgewählten Domainnamens auf.
>>
> **Schritt 2**
>>
>> **Konfiguration der A-Einträge**
>>
>> **1 - Identifikation:** Filtern Sie die DNS-Einträge, indem Sie oben rechts in der Tabelle im Filtermenü den Typ `A` auswählen.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> Identifizieren Sie alle vorhandenen "A"-Einträge für Ihren Domainnamen allein (z.B. `mydomain.ovh.`) und für die Subdomain "www" (z.B. `www.mydomain.ovh.`).
>>
>> **2 - Löschung:** Löschen Sie alle vorhandenen "A"-Einträge für die Subdomain "www". Wenn mehr als 2 "A"-Einträge für den Domainnamen allein vorhanden sind, löschen Sie die überzähligen Einträge, sodass nur 2 übrig bleiben. Klicken Sie für jeden zu löschenden Eintrag auf den Button `...`{.action} rechts in der entsprechenden Zeile und dann auf `Eintrag löschen`{.action}.
>>
>> **3 - Änderung:** Ändern Sie jeden verbleibenden "A"-Eintrag für den Domainnamen allein, indem Sie auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action} klicken. Ersetzen Sie das Ziel durch eine der 2 Webflow IPv4-Adressen (eine andere Adresse pro Eintrag):
>>
>> - `75.2.70.75`
>> - `99.83.190.102`
>>
>> Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
>>
>> **4 - Hinzufügen:** Wenn weniger als 2 "A"-Einträge vorhanden waren, erstellen Sie die fehlenden Einträge. Klicken Sie oben rechts auf `Eintrag hinzufügen`{.action}, wählen Sie den Eintragstyp `A`{.action}, lassen Sie das Feld **Subdomain** leer und geben Sie im Feld **Ziel** jede noch nicht zugewiesene IPv4-Adresse ein. Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
>>
>> Fahren Sie dann mit Schritt 3 fort.
>>
> **Schritt 3**
>>
>> **Löschung der AAAA-Einträge**
>>
>> **1 - Identifikation:** Filtern Sie die DNS-Einträge, indem Sie oben rechts in der Tabelle im Filtermenü den Typ `AAAA` auswählen.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> Identifizieren Sie alle vorhandenen "AAAA"-Einträge für Ihren Domainnamen allein (z.B. `mydomain.ovh.`) und für die Subdomain "www" (z.B. `www.mydomain.ovh.`).
>>
>> **2 - Löschung:** Löschen Sie alle identifizierten "AAAA"-Einträge (Domainname allein und Subdomain "www"), um Konflikte mit den neuen DNS-Einträgen zu vermeiden. Klicken Sie für jeden Eintrag auf den Button `...`{.action} rechts in der entsprechenden Zeile und dann auf `Eintrag löschen`{.action}.
>>
>> Wenn keine "AAAA"-Einträge vorhanden sind, fahren Sie mit Schritt 4 fort.
>>
> **Schritt 4**
>>
>> **Konfiguration des TXT-Eintrags**
>>
>> **1 - Identifikation:** Filtern Sie die DNS-Einträge, indem Sie oben rechts in der Tabelle im Filtermenü den Typ `TXT` auswählen.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Identifizieren Sie alle vorhandenen "TXT"-Einträge für Ihren Domainnamen allein (z.B. `mydomain.ovh.`) und für die Subdomain "www" (z.B. `www.mydomain.ovh.`).
>>
>> **2 - Löschung:** Löschen Sie alle identifizierten "TXT"-Einträge (Domainname allein und Subdomain "www"), um Konflikte mit den neuen DNS-Einträgen zu vermeiden. Klicken Sie für jeden Eintrag auf den Button `...`{.action} rechts in der entsprechenden Zeile und dann auf `Eintrag löschen`{.action}.
>>
>> **3 - Hinzufügen:** Erstellen Sie einen TXT-Verifizierungseintrag. Klicken Sie oben rechts auf `Eintrag hinzufügen`{.action}, wählen Sie den Eintragstyp `TXT`{.action}, geben Sie `_webflow` im Feld **Subdomain** und im Feld **Ziel** den Wert vom Typ `one-time-verification=XXXXXXXX` ein, den Sie im Bereich `Site settings > Publishing tab > Production`{.action} Ihres Webflow Accounts finden. Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
>>
>> Fahren Sie dann mit Schritt 5 fort.
>>
> **Schritt 5**
>>
>> **Konfiguration des CNAME-Eintrags**
>>
>> **1 - Identifikation:** Filtern Sie die DNS-Einträge, indem Sie oben rechts in der Tabelle im Filtermenü den Typ `CNAME` auswählen.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Identifizieren Sie alle vorhandenen "CNAME"-Einträge für die Subdomain "www" (z.B. `www.mydomain.ovh.`).
>>
>> **2 - Löschung:** Wenn mehrere "CNAME"-Einträge für die Subdomain "www" vorhanden sind, löschen Sie alle bis auf einen. Klicken Sie für jeden zu löschenden Eintrag auf den Button `...`{.action} rechts in der entsprechenden Zeile und dann auf `Eintrag löschen`{.action}.
>>
>> **3 - Änderung:** Wenn ein "CNAME"-Eintrag für die Subdomain "www" vorhanden ist, klicken Sie auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action}. Ersetzen Sie nur das **Ziel** durch `proxy-ssl.webflow.com.`. Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
>>
>> Wenn kein "CNAME"-Eintrag für die Subdomain "www" vorhanden ist, klicken Sie oben rechts auf `Eintrag hinzufügen`{.action}, wählen Sie den Eintragstyp `CNAME`{.action}, geben Sie `www` im Feld **Subdomain** und `proxy-ssl.webflow.com.` im Feld **Ziel** ein. Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
<!-- CP-STEPS-END:configure-dns-records -->

Die DNS-Zone ist nun so konfiguriert, dass sie auf Ihr Webflow Hosting verweist.

> [!primary]
>
> Die Verifizierung Ihres Domainnamens kann bis zu 48 Stunden dauern.

Wenn Sie einen E-Mail-Dienst von OVHcloud nutzen oder eines [unserer E-Mail-Angebote](/links/web/emails) abonnieren möchten, müssen Sie auch Ihre DNS-Zone entsprechend konfigurieren. Lesen Sie dazu unsere Anleitung zur [Konfiguration eines MX-Eintrags](/pages/web_cloud/domains/dns_zone_mx).

## Weiterführende Informationen <a name="go-further"></a>

[DNS-Server von OVHcloud Domainnamen ändern](/pages/web_cloud/domains/dns_server_general_information)

[OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Um die Verwaltung Ihrer Domainnamen auf einen anderen OVHcloud Kunden-Account zu delegieren, folgen Sie der Anleitung zur [Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
