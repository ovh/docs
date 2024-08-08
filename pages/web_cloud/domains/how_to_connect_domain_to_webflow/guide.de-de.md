---
title: Verbinden eines OVHcloud Domainnamens mit einem Webflow Hosting
excerpt: Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem Webflow Hosting zu verwenden
updated: 2024-06-13
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie haben bereits einen Domainnamenamen bei OVHcloud und möchten ihn mit einem Webflow Hosting verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone bearbeiten, um die Konfiguration Ihres Webflow Hostings zu ermöglichen.

**Erfahren Sie hier, wie Sie Ihren OVHcloud Domainnamen mit einem Webflow Hosting verbinden.**

> [!warning]
>
> - Der Webflow Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud Domainnamen und kann Sie deshalb nicht diesbezüglich beraten.
>
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den erforderlichen [Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens.
- Sie verfügen über ein Hosting bei Webflow.
- Sie haben Zugriff auf die Verwaltung dieses Hostings bei Webflow.

## In der praktischen Anwendung

Bevor Sie dieser Anleitung folgen, empfehlen wir, sich mit der Konfiguration von DNS-Zonen vertraut machen. Nutzen Sie dazu unsere Anleitung "[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits konfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem Webflow Hosting konfigurieren. Einige müssen gelöscht werden, um Konflikte mit den erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur noch geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### 1. Ihr Webflow Hosting konfigurieren

Wenn Sie ein Webflow-Hosting mit einem OVHcloud Domainnamen verwenden, müssen Sie Ihr Hosting zunächst gemäß den Anweisungen im Abschnitt **How to connect your custom domain** von [**dieser Seite der Webflow-Dokumentation**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export#how-to-connect-your-custom-domain) vorbereiten.

### 2. DNS-Einträge in Ihrem OVHcloud Kunden-Account konfigurieren

> [!warning]
>
> Bevor Sie fortfahren:
>
> - Öffnen Sie einen Tab in Ihrem Webbrowser.
> - Öffnen Sie [**diese Seite der Webflow-Dokumentation**](https://university.webflow.com/lesson/manually-connect-a-custom-domain?topics=hosting-code-export){.external}.
> - Gehen Sie zum Abschnitt "**How to set your DNS records**" der Webflow-Dokumentation.<br>
> Die folgenden Anweisungen helfen Ihnen bei der Konfiguration Ihrer OVHcloud DNS-Zone.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus. Gehen Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle listet alle DNS-Einträge des ausgewählten Domainnamens auf.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Jeder DNS-Eintrag kann geändert werden, indem Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action} klicken.

Folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> **Schritt 1**
>> **A-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü, und wählen Sie `A`.<br> aus, um die vorhandenen A-Einträge zu identifizieren
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrer Domain ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain "www" vorhanden ist (Beispiel: `www.mydomain.ovh.`), müssen Sie diesen löschen, damit er nicht in Konflikt mit dem CNAME-Eintrag steht, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} Tabellenzeile zu Ihrer Domain mit der Subdomain "www" und dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie keinen A-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} oben rechts und wählen Sie `A`{.action}.<br><br>
>> Sie müssen nacheinander zwei A-Einträge erstellen, um die zwei IPv4-Adressen von Webflow anzugeben.
>> Lassen Sie das Feld **Subdomain** leer und geben Sie die erste IPv4-Adresse `75.2.70.75` für Webflow in das Feld **Ziel** ein.
>> Klicken Sie auf `Weiter`{.action} und bestätigen Sie Ihren A-Eintrag. Wiederholen Sie den Vorgang für die zweite IPv4-Adresse `99.83.190.102`, und fahren Sie mit Schritt 2 fort.
> **Schritt 2**
>> **AAAA-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü, und wählen Sie `AAAA`.<br> aus, um die vorhandenen AAAA-Einträge zu identifizieren.
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrer Domain ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain "www" vorhanden ist (Beispiel: `www.mydomain.ovh.`), löschen Sie diesen ebenfalls, damit er nicht in Konflikt mit dem CNAME-Eintrag steht, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile Ihrer Domain mit der Subdomain "www" und dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie keinen existierenden AAAA-Eintrag haben, fahren Sie mit Schritt 3 fort.
> **Schritt 3**
>> **TXT-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü, und wählen Sie `TXT`.<br> aus, um vorhandene TXT-Einträge zu identifizieren.
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Sind für den Domainnamen (Beispiel: `mydomain.ovh.`) und für dessen Subdomain "www" (Beispiel: `www.mydomain.ovh.`) TXT-Einträge vorhanden, müssen diese gelöscht werden, damit sie nicht in Konflikt mit dem CNAME-Eintrag stehen, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in den Tabellenzeile für den Domainnamen und der Subdomain "www" und dann auf `Eintrag löschen`{.action}.<br>
>> - Sie müssen einen Eintrag vom Typ TXT erstellen. Klicken Sie auf den Button `Einen Eintrag hinzufügen`{.action} oben rechts und wählen Sie `TXT`{.action}.
>> Füllen Sie das Feld **Subdomain** mit dem Wert `_webflow` aus, und geben Sie den Wert im Feld **Ziel** im Bereich `Site settings > Publishing tab > Production`{.action} Ihres Webflow Accounts vom Typ `one-time-verification=XXXXXXXX` ein. Ersetzen Sie `XXXXXXXX` durch den Wert in Ihrem Webflow-Konto.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone-txt-webflow.png){.thumbnail}<br><br>
>> Klicken Sie auf `Weiter`{.action}, um Ihren TXT-Eintrag zu bestätigen und mit Schritt 4 fortzufahren.
> **Schritt 4**
>> **CNAME-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü und wählen Sie `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile der Subdomain "www" (Beispiel: `mydomain.ovh.`) und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn Sie keinen existierenden CNAME-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} oben rechts und wählen Sie `CNAME`{.action}.
>> Geben Sie im Feld **Subdomain** `www` ein und `proxy-ssl.webflow.com` im Feld **Ziel**.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry-to-the-dns-zone-cname-webflow.png){.thumbnail}<br><br>
>> Klicken Sie auf `Weiter`{.action}, um Ihren CNAME-Eintrag zu bestätigen.

Die DNS-Zone ist nun zur Verwendung mit einem Webflow Hosting konfiguriert.

> [!primary]
>
> Die Verifizierung Ihres Domainnamenamens kann bis zu 48 Stunden dauern.

Wenn Sie einen E-Mail-Dienst von OVHcloud nutzen oder eines [unserer E-Mail-Angebote](/links/web/emails) abonnieren möchten, müssen Sie auch Ihre DNS-Zone entsprechend konfigurieren. Lesen Sie dazu unsere Anleitung zur [Konfiguration eines MX-Eintrags](/pages/web_cloud/domains/dns_zone_mx).

## Weiterführende Informationen <a name="gofurther"></a>

[DNS-Server von OVHcloud Domainnamen ändern](/pages/web_cloud/domains/dns_server_general_information)

[OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Um die Verwaltung Ihrer Domainnamen auf einen anderen OVHcloud Kunden-Account zu delegieren, folgen Sie der Anleitung zur [Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts)".

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.