---
title: Verbinden eines OVHcloud Domainnamens mit einem Wix Hosting
excerpt: Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem Wix Hosting zu verwenden
updated: 2024-04-17
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie haben bereits einen Domainnamenamen bei OVHcloud und möchten ihn mit einem Wix Hosting verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone bearbeiten, um die Konfiguration Ihres Wix Hostings zu ermöglichen.

**Erfahren Sie hier, wie Sie Ihren OVHcloud Domainnamen mit einem Wix Hosting verbinden.**

> [!warning]
>
> - Der Wix Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud Domainnamen und kann Sie deshalb nicht diesbezüglich beraten.
>
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den erforderlichen [Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens.
- Sie verfügen über ein Hosting bei Wix.
- Sie haben Zugriff auf die Verwaltung dieses Hostings bei Wix.

## In der praktischen Anwendung

Bevor Sie dieser Anleitung folgen, empfehlen wir, sich mit der Konfiguration von DNS-Zonen vertraut machen. Nutzen Sie dazu unsere Anleitung "[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits konfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem Wix Hosting konfigurieren. Einige müssen gelöscht werden, um Konflikte mit den erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur noch geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### 1. Ihr Wix Hosting konfigurieren

Wenn Sie ein Wix Hosting mit einem OVHcloud Domainnamen verwenden, müssen Sie zuerst Ihr Hosting gemäß den Anweisungen in **Schritt 1** auf [**dieser Seite der Wix Dokumentation**](https://support.wix.com/de/article/connecter-un-domaine-%C3%A0-wix-par-pointage-5727882) vorbereiten.

### DNS-Einträge in Ihrem OVHcloud Kunden-Account konfigurieren

> [!warning]
>
> Bevor Sie fortfahren:
>
> - Öffnen Sie einen Tab in Ihrem Webbrowser.
> - Öffnen Sie [**diese Seite der Wix-Dokumentation**](https://support.wix.com/de/article/connect-un-domain-%C3%A0-wix-par-pointing-5727882){.external}.
> - Gehen Sie zum Bereich "**Schritt 2 | Aktualisieren Sie die DNS-Einträge im Konto Ihres Domain-Hostings**" der Wix-Dokumentation.<br>
> Die folgenden Anweisungen helfen Ihnen bei der Konfiguration Ihrer OVHcloud DNS-Zone.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus. Gehen Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle listet alle DNS-Einträge des ausgewählten Domainnamens auf.

![dnszone](images/tab.png){.thumbnail}

Jeder DNS-Eintrag kann geändert werden, indem Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action} klicken.

Folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> **Schritt 1**
>> **A-Eintrag**<br><br>
>> Um die vorhandenen Einträge vom Typ A zu identifizieren, klicken Sie oben in der Tabelle mit den DNS-Einträgen auf das Filtermenü und wählen Sie `A` aus.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrem Domainnamen ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag bearbeiten`{.action}.
>> - Wenn ein Eintrag für die Subdomain "www" vorhanden ist (Beispiel: `www.mydomain.ovh.`), müssen Sie diesen löschen, damit er nicht mit dem in Schritt 4 angegebenen CNAME-Eintrag in Konflikt steht. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihren Domainnamen und für die Subdomain "www." und klicken Sie dann auf `Eintrag löschen`{.action}.
>> - Wenn Sie noch keinen A-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} rechts oben und wählen Sie `A`{.action}<br><br>
>> Lassen Sie das Feld **Subdomain** leer und geben Sie die IPv4-Adresse ein *aus Ihrem Wix Interface* im Feld **Ziel** ein.
>> Klicken Sie auf `Weiter`{.action}, bestätigen Sie Ihren A-Eintrag und fahren Sie mit Schritt 2 fort.
> **Schritt 2**
>> **AAAA-Eintrag**<br><br>
>>  Um vorhandene AAAA-Einträge zu identifizieren, klicken Sie oben in der Tabelle mit DNS-Einträgen auf das Filtermenü und wählen Sie `AAAA` aus.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Wenn AAAA-Einträge für den Domainnamen (Beispiel: `mydomain.ovh.`) und die Subdomain "www." (Beispiel: `www.mydomain.ovh.`) vorhanden sind, müssen diese gelöscht werden, damit sie nicht im Konflikt mit den CNAME-Einträgen stehen, die Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für den Domainnamen und die Subdomain "www." und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
> **Schritt 3**
>> **TXT-Eintrag**<br><br>
>>  Um vorhandene TXT-Einträge zu identifizieren, klicken Sie oben in der Tabelle mit DNS-Einträgen auf das Filtermenü und wählen `TXT` aus.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Wenn TXT-Einträge für den Domainnamen (Beispiel: `mydomain.ovh.`) und die Subdomain "www" (Beispiel: `www.mydomain.ovh.`) vorhanden sind, müssen diese gelöscht werden, damit sie nicht im Konflikt mit dem CNAME-Eintrag stehen, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihren Domainnamen mit der Subdomain "www" und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
> **Schritt 4**
>> **CNAME-Eintrag**<br><br>
>>  Um vorhandene CNAME-Einträge zu identifizieren, klicken Sie oben in der DNS-Tabelle auf das Filtermenü und wählen Sie `CNAME` aus.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile zu Ihrer Subdomain "www" (Beispiel: `mydomain.ovh.`) und klicken Sie dann auf `Eintrag bearbeiten`{.action}.
>> - Wenn Sie keinen existierenden CNAME-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} rechts oben und wählen Sie `CNAME`{.action}.
>> Vervollständigen Sie das Feld **Subdomain** mit dem Wert `www` und geben Sie den Wert aus Ihrem Wix Interface in das Feld **Ziel** ein.<br>
>> Klicken Sie auf `Weiter`{.action} und bestätigen Sie Ihren CNAME-Eintrag.

Die DNS-Zone ist nun zur Verwendung mit einem Wix Hosting konfiguriert.

> [!primary]
>
> Die Verifizierung Ihres Domainnamenamens kann bis zu 48 Stunden dauern.

Wenn Sie einen E-Mail-Dienst von OVHcloud nutzen oder eines [unserer E-Mail-Angebote](/links/web/emails) abonnieren möchten, müssen Sie auch Ihre DNS-Zone entsprechend konfigurieren. Lesen Sie dazu unsere Anleitung zur [Konfiguration eines MX-Eintrags](/pages/web_cloud/domains/dns_zone_mx).

## Weiterführende Informationen <a name="gofurther"></a>

[DNS-Server von OVHcloud Domainnamen ändern](/pages/web_cloud/domains/dns_server_edit)

[OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Um die Verwaltung Ihrer Domainnamen auf einen anderen OVHcloud Kunden-Account zu delegieren, folgen Sie der Anleitung zur [Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts)".

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
