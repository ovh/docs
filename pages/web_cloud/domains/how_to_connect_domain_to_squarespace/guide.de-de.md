---
title: "Verbinden eines OVHcloud Domainnamens mit einem SquareSpace Hosting"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem SquareSpace Hosting zu verwenden"
updated: 2026-03-18
---

## Ziel

Sie sind Inhaber eines Domainnamens bei OVHcloud und möchten diesen mit einem SquareSpace Hosting verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone bearbeiten, um die Konfiguration Ihres SquareSpace Hostings zu ermöglichen.

**Erfahren Sie hier, wie Sie Ihren OVHcloud Domainnamen mit einem SquareSpace Hosting verbinden.**

> [!warning]
>
> - Der SquareSpace Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud Domainnamen und kann Sie deshalb nicht diesbezüglich beraten.
>
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie verfügen über die [erforderlichen Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens.
- Sie verfügen über ein SquareSpace Hosting.
- Sie haben Zugriff auf die Verwaltung dieses Hostings bei SquareSpace.

<!-- CP-NAV-START:web-dns-zone -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [DNS-Zone](/links/control-panel/web-dns-zone)
- **Navigationspfad:** `Web Cloud`{.action} > `DNS-Zone`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-dns-zone -->

## In der praktischen Anwendung

Bevor Sie die Schritte dieser Anleitung durchführen, empfehlen wir Ihnen, sich mit der Konfiguration von DNS-Zonen vertraut zu machen, indem Sie unsere Anleitung "[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)" lesen.

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits vorkonfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem SquareSpace Hosting konfigurieren. Einige Einträge müssen gelöscht werden, um Konflikte mit den in dieser Konfiguration erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### DNS-Einträge in Ihrem OVHcloud Account konfigurieren

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
>> **2 - Löschung:** Löschen Sie alle vorhandenen "A"-Einträge für die Subdomain "www". Wenn mehr als 4 "A"-Einträge für den Domainnamen allein vorhanden sind, löschen Sie die überzähligen Einträge, sodass nur 4 übrig bleiben. Klicken Sie für jeden zu löschenden Eintrag auf den Button `...`{.action} rechts in der entsprechenden Zeile und dann auf `Eintrag löschen`{.action}.
>>
>> **3 - Änderung:** Ändern Sie jeden verbleibenden "A"-Eintrag für den Domainnamen allein, indem Sie auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action} klicken. Ersetzen Sie das Ziel durch eine der 4 SquareSpace IPv4-Adressen (eine andere Adresse pro Eintrag):
>>
>> - `198.185.159.144`
>> - `198.185.159.145`
>> - `198.49.23.144`
>> - `198.49.23.145`
>>
>> Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
>>
>> **4 - Hinzufügen:** Wenn weniger als 4 "A"-Einträge vorhanden waren, erstellen Sie die fehlenden Einträge. Klicken Sie oben rechts auf `Eintrag hinzufügen`{.action}, wählen Sie den Eintragstyp `A`{.action}, lassen Sie das Feld **Subdomain** leer und geben Sie im Feld **Ziel** jede noch nicht zugewiesene IPv4-Adresse ein. Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
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
>> **Löschung der TXT-Einträge**
>>
>> **1 - Identifikation:** Filtern Sie die DNS-Einträge, indem Sie oben rechts in der Tabelle im Filtermenü den Typ `TXT` auswählen.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> Identifizieren Sie alle vorhandenen "TXT"-Einträge für Ihren Domainnamen allein (z.B. `mydomain.ovh.`) und für die Subdomain "www" (z.B. `www.mydomain.ovh.`).
>>
>> **2 - Löschung:** Löschen Sie alle identifizierten "TXT"-Einträge (Domainname allein und Subdomain "www"), um Konflikte mit den neuen DNS-Einträgen zu vermeiden. Klicken Sie für jeden Eintrag auf den Button `...`{.action} rechts in der entsprechenden Zeile und dann auf `Eintrag löschen`{.action}.
>>
>> Wenn keine "TXT"-Einträge vorhanden sind, fahren Sie mit Schritt 5 fort.
>>
> **Schritt 5**
>>
>> **Konfiguration der CNAME-Einträge**
>>
>> **1 - Identifikation:** Filtern Sie die DNS-Einträge, indem Sie oben rechts in der Tabelle im Filtermenü den Typ `CNAME` auswählen.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> Identifizieren Sie alle vorhandenen "CNAME"-Einträge für die Subdomain "www" (z.B. `www.mydomain.ovh.`).
>>
>> **2 - Löschung:** Wenn mehrere "CNAME"-Einträge für die Subdomain "www" vorhanden sind, löschen Sie alle bis auf einen. Klicken Sie für jeden zu löschenden Eintrag auf den Button `...`{.action} rechts in der entsprechenden Zeile und dann auf `Eintrag löschen`{.action}.
>>
>> **3 - Änderung:** Wenn ein "CNAME"-Eintrag für die Subdomain "www" vorhanden ist, klicken Sie auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action}. Ersetzen Sie nur das **Ziel** durch `ext-cust.squarespace.com.`. Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
>>
>> Wenn kein "CNAME"-Eintrag für die Subdomain "www" vorhanden ist, klicken Sie oben rechts auf `Eintrag hinzufügen`{.action}, wählen Sie den Eintragstyp `CNAME`{.action}, geben Sie `www` im Feld **Subdomain** und `ext-cust.squarespace.com.` im Feld **Ziel** ein. Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
>>
>> **4 - Hinzufügen:** Erstellen Sie einen Verifizierungs-CNAME-Eintrag, indem Sie Ihren `von SquareSpace erhaltenen eindeutigen Code` im Feld **Subdomain** eingeben und dann `verify.squarespace.com.` im Feld **Ziel**. Klicken Sie auf `Weiter`{.action} und bestätigen Sie.
<!-- CP-STEPS-END:configure-dns-records -->

Die DNS-Zone ist nun so konfiguriert, dass sie auf Ihr SquareSpace Hosting verweist.

### Domainnamen mit SquareSpace verbinden

Die folgenden Schritte müssen im Verwaltungsbereich von SquareSpace ausgeführt werden.

> [!primary]
>
> - Sie können Ihren Domainnamen mit einer Test- oder kostenpflichtigen SquareSpace-Website verbinden. Eine Verbindung mit einer abgelaufenen Website ist nicht möglich.
> - Wenn Sie über einen E-Mail-Account verfügen, der mit Ihrem Domainnamen verbunden ist, können Sie diesen nach der Verbindung der Domain mit SquareSpace weiterhin verwenden. Bevor Sie Ihren Domainnamen verbinden, empfehlen wir Ihnen, diese [SquareSpace-Anleitung](https://support.squarespace.com/hc/de/articles/217601877-Eine-E-Mail-Adresse-einer-eigenen-Domain-die-Sie-bereits-besitzen-mit-Squarespace-nutzen) zu lesen.
> - Sie können mehrere benutzerdefinierte Domainnamen für Ihre Website verwenden. Sie können beliebig viele verbinden oder registrieren.
> - Sie können keinen benutzerdefinierten Domainnamen mit SquareSpace verbinden, wenn der Domainname das Wort "squarespace" oder "sqsp" enthält.

Befolgen Sie zunächst die Verbindungsschritte in Schritt 1 dieser [SquareSpace-Anleitung](https://support.squarespace.com/hc/de/articles/12880712406797-Eine-OVHcloud-Domain-mit-deiner-Squarespace-Website-verbinden).

> [!warning]
>
> Wenn Sie die Warnmeldung "This domain is already connected to another Squarespace site" erhalten, überprüfen Sie Ihre anderen SquareSpace-Websites, um festzustellen, mit welcher Website der Domainname verbunden ist. Trennen Sie dann die Verbindung zu dieser Website.

Fahren Sie mit Schritt 2 dieser [SquareSpace-Anleitung](https://support.squarespace.com/hc/de/articles/12880712406797-Eine-OVHcloud-Domain-mit-deiner-Squarespace-Website-verbinden) fort.

Wenn Sie einen E-Mail-Dienst von OVHcloud nutzen oder eines [unserer E-Mail-Angebote](/links/web/emails) abonnieren möchten, müssen Sie auch Ihre DNS-Zone entsprechend konfigurieren. Lesen Sie dazu unsere Anleitung zur [Konfiguration eines MX-Eintrags](/pages/web_cloud/domains/dns_zone_mx).

## Weiterführende Informationen <a name="go-further"></a>

[DNS-Server von OVHcloud Domainnamen ändern](/pages/web_cloud/domains/dns_server_edit)

[OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Um die Verwaltung Ihrer Domainnamen auf einen anderen OVHcloud Kunden-Account zu delegieren, folgen Sie der Anleitung zur [Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
