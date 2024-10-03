---
title: "Verbinden eines OVHcloud Domainnamens mit einem Google Site"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem Google Site zu verwenden"
updated: 2024-10-01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie haben bereits einen Domainnamenamen bei OVHcloud und möchten ihn mit einem Google Site verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone bearbeiten, um die Konfiguration Ihres Google Sites zu ermöglichen.

**Erfahren Sie hier, wie Sie Ihren OVHcloud Domainnamen mit einem Google Site verbinden.**

> [!warning]
>
> - Der Google Site Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud Domainnamen und kann Sie deshalb nicht diesbezüglich beraten.
>
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den erforderlichen [Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens.
- Sie verfügen über eine Google Site und sind deren Inhaber.

## In der praktischen Anwendung

Bevor Sie dieser Anleitung folgen, empfehlen wir, sich mit der Konfiguration von DNS-Zonen vertraut machen. Nutzen Sie dazu unsere Anleitung "[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits konfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem Google Site konfigurieren. Einige müssen gelöscht werden, um Konflikte mit den erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur noch geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### Schritt 1 - Ihre Google Site konfigurieren

> [!warning]
>
> Nur der Inhaber einer Google-Website kann diese mit einem Domainnamen verbinden. Falls nötig, erfahren Sie hier, wie Sie den [Inhaber der Google-Website ändern](https://support.google.com/sites/answer/97934).

Wenn Sie eine Google-Website mit einem OVHcloud-Domainnamen verwenden, bereiten Sie Ihr Hosting zunächst vor, indem Sie die Anweisungen im Abschnitt **Eine personalisierte Domain konfigurieren** von [**dieser Seite des Google-Supports**](https://support.google.com/sites/answer/9068867?hl=de#zippy=) aus befolgen.

### DNS-Einträge in Ihrem OVHcloud Kunden-Account konfigurieren

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus. Gehen Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle listet alle DNS-Einträge des ausgewählten Domainnamens auf.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab-mydomain-anycast.png){.thumbnail}

Jeder DNS-Eintrag kann geändert werden, indem Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action} klicken.

Folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> **Schritt 1**
>> **A-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü und wählen Sie `A` aus, um die vorhandenen A-Einträge zu identifizieren.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}
>>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrer Domain ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain „www“ vorhanden ist (Beispiel: `www.mydomain.ovh.`), löschen Sie diesen, damit er nicht in Konflikt mit dem CNAME-Eintrag steht, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihre Subdomain in „www“ und dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie keinen „A“-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} oben rechts auf Ihrem Bildschirm und wählen Sie das „Zeigerfeld“ `A`{.action}<br><br>
>> Erstellen Sie nacheinander 4 „A“-Einträge, um die 4 IPv4-Adressen für die Google-Website anzugeben.
>> Lassen Sie das Feld **Subdomain** leer und geben Sie die erste IPv4-Adresse von Google Site `216.239.32.21` in das Feld **Ziel** ein.
>> Klicken Sie auf `Weiter`{.action} und bestätigen Sie Ihren „A“ Eintrag. Wiederholen Sie diesen Vorgang für die drei anderen IPv4-Adressen `216.239.34.21`, `216.239.36.21` und `216.239.38.21`, und fahren Sie dann mit Schritt 2 fort. Da sich die Werte dieser IP-Adressen ändern können, lesen Sie die offizielle Dokumentation [A-Eintragswert](https://support.google.com/a/answer/2579934?hl=de&ref_topic=2721296&sjid=1037374977980680534-EU).
>>
> **Schritt 2**
>> **AAAA-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü und wählen Sie `AAAA` aus, um die vorhandenen „AAAA“-Einträge zu identifizieren.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile Ihrer Domain ohne Subdomain (Beispiel: `mydomain.ovh.`) und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain „www“ vorhanden ist (Beispiel: `www.mydomain.ovh.`), löschen Sie diesen ebenfalls, damit er nicht in Konflikt mit dem CNAME-Eintrag steht, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihre Subdomain in „www“ und dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie keinen existierenden „AAAA“-Eintrag haben, fahren Sie mit Schritt 3 fort.
>>
> **Schritt 3**
>> **TXT-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü und wählen Sie `TXT` aus, um vorhandene „TXT“-Einträge zu identifizieren.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-txt.png){.thumbnail}
>>
>> - Wenn nur für den Domainnamen (Beispiel: `mydomain.ovh.`) und für dessen Subdomain „www“ (Beispiel: `www.mydomain.ovh.`) TXT-Einträge vorhanden sind, löschen Sie diese, damit sie nicht in Konflikt mit dem CNAME-Eintrag stehen, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihre Subdomain in „www“ und dann auf `Eintrag löschen`{.action}.<br>
>> - Sie müssen einen Datensatz vom Typ „TXT“ erstellen. Klicken Sie auf den Button `Eintrag hinzufügen`{.action} oben rechts auf Ihrem Bildschirm und wählen Sie das „Daraufzeigefeld“ `TXT`{.action}.
>> Füllen Sie die Felder **Subdomain** und **Ziel** mit den Informationen auf der Seite „[Werte der TXT-Einträge](https://support.google.com/a/answer/2716802?hl=de&ref_topic=2716886&sjid=305281029857921755-EU)“ der offiziellen Dokumentation aus. In der Regel ist der Wert im Feld **Subdomain** leer, und der Wert im Feld **Ziel** ist vom Typ `google-site-verification=XXXXXXXXXXXX`.<br>
>> Klicken Sie auf `Weiter`{.action}, um Ihren „TXT“ Eintrag zu bestätigen und mit Schritt 4 fortzufahren.
>>
> **Schritt 4**
>> **CNAME-Eintrag**<br><br>
>> Klicken Sie oben in der Tabelle mit den DNS-Einträgen auf das Filtermenü und wählen Sie `CNAME` aus, um die vorhandenen „CNAME“-Einträge zu identifizieren.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-cname.png){.thumbnail}
>>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile Ihrer Subdomain in „www“ (Beispiel: `www.mydomain.ovh.`) und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn Sie keinen existierenden „CNAME“ Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} oben rechts auf Ihrem Bildschirm und wählen Sie das „Daraufzeigefeld“ `CNAME`{.action}.
>>
>> Vervollständigen Sie das Feld **Subdomain** mit dem Wert `www` und geben Sie `ghs.googlehosted.com.` in das Feld **Ziel** ein. Da sich diese Werte ändern, überprüfen Sie sie auf der Seite „[CNAME-Eintragswerte](https://support.google.com/a/answer/112038?sjid=3052810298579211755-EU)“ der offiziellen Dokumentation<br>
>> Klicken Sie auf `Weiter`{.action}, um Ihren „CNAME“ Eintrag zu bestätigen.

Die DNS-Zone ist nun zur Verwendung mit einem Gogle Site konfiguriert.

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