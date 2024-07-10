---
title: "Verbinden eines OVHcloud Domainnamens mit einem SquareSpace Hosting"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem SquareSpace Hosting zu verwenden"
updated: 2024-05-15
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie haben bereits einen Domainnamenamen bei OVHcloud und möchten ihn mit einem SquareSpace Hosting verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone bearbeiten, um die Konfiguration Ihres SquareSpace Hostings zu ermöglichen.

**Erfahren Sie hier, wie Sie Ihren OVHcloud Domainnamen mit einem SquareSpace Hosting verbinden.**

> [!warning]
>
> - Der SquareSpace Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud Domainnamen und kann Sie deshalb nicht diesbezüglich beraten.
>
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den erforderlichen [Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens.
- Sie verfügen über ein Hosting bei SquareSpace.
- Sie haben Zugriff auf die Verwaltung dieses Hostings bei SquareSpace.

## In der praktischen Anwendung

Bevor Sie dieser Anleitung folgen, empfehlen wir, sich mit der Konfiguration von DNS-Zonen vertraut machen. Nutzen Sie dazu unsere Anleitung "[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits konfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem SquareSpace Hosting konfigurieren. Einige müssen gelöscht werden, um Konflikte mit den erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur noch geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### DNS-Einträge in Ihrem OVHcloud Kunden-Account konfigurieren

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus. Gehen Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle listet alle DNS-Einträge des ausgewählten Domainnamens auf.

![dnszone](images/tab.png){.thumbnail}

Jeder DNS-Eintrag kann geändert werden, indem Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action} klicken.

Folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> **Schritt 1**
>> **A-Eintrag**<br><br>
>> Um die vorhandenen Einträge vom Typ A zu identifizieren, klicken Sie oben in der Tabelle mit den DNS-Einträgen auf das Filtermenü und wählen Sie `A` aus.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-a.png){.thumbnail}<br>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrem Domainnamen ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain "www" vorhanden ist (Beispiel: `www.mydomain.ovh.`), müssen Sie diesen löschen, damit er nicht mit dem in Schritt 4 angegebenen CNAME-Eintrag in Konflikt steht. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihren Domainnamen mit der Subdomain "www" und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie noch keinen A-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} rechts oben und wählen Sie `A`{.action}<br><br>
>> Sie müssen nacheinander 4 A-Einträge erstellen, um die 4 IPv4-Adressen für SquareSpace anzugeben.
>> Lassen Sie das Feld **Subdomain** leer und geben Sie die erste SquareSpace-IPv4-Adresse `198.185.159.144` in das Feld **Ziel** ein.
>> Klicken Sie auf `Weiter`{.action}, bestätigen Sie Ihren A-Eintrag, und wiederholen Sie den Vorgang für die anderen 3 IPv4-Adressen: `198.185.159.145`, `198.49.23.144`, `198.49.23.145`. Fahren Sie mit Schritt 2 fort.
> **Schritt 2**
>> **AAAA-Eintrag**<br><br>
>>  Um vorhandene AAAA-Einträge zu identifizieren, klicken Sie oben in der Tabelle mit DNS-Einträgen auf das Filtermenü und wählen Sie `AAAA` aus.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrer Domain ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain "www" vorhanden ist (Beispiel: `www.mydomain.ovh.`), löschen Sie diesen ebenfalls, damit er nicht in Konflikt mit dem CNAME-Eintrag steht, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile zu Ihrer Domain mit der Subdomain "www" und dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie keinen existierenden AAAA-Eintrag haben, fahren Sie mit Schritt 3 fort.
> **Schritt 3**
>> **TXT-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü, und wählen Sie `TXT` aus, um vorhandene TXT-Einträge zu identifizieren.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}<br>
>> - Wenn TXT-Einträge für den Domainnamen (Beispiel: `mydomain.ovh.`) und die Subdomain "www" (Beispiel: `www.mydomain.ovh.`) vorhanden sind, müssen diese gelöscht werden, damit sie nicht im Konflikt mit dem CNAME-Eintrag stehen, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihren Domainnamen mit der Subdomain "www" und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
> **Schritt 4**
>> **CNAME-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü und wählen Sie `CNAME`.<br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/filter-aaaa.png){.thumbnail}
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile zu Ihrer Subdomain "www" (Beispiel: `mydomain.ovh.`) und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn Sie keinen existierenden CNAME-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} oben rechts und wählen Sie `CNAME`{.action} aus.
>> Füllen Sie das Feld **Subdomain** mit dem Wert `www` aus und geben Sie `verify.squarespace.com.` in das Feld **Ziel** ein.<br>
>> ![cname-entry](images/add-an-entry-to-the-dns-zone-cname-squarespace.png){.thumbnail}
>> Klicken Sie auf `Weiter`{.action} und bestätigen Sie Ihren CNAME-Eintrag.
>> Fügen Sie den zweiten CNAME-Eintrag hinzu, indem Sie `ext-cust.squarespace.com.` in das Feld **Ziel** eingeben.<br>

Die DNS-Zone ist nun zur Verwendung mit einem SquareSpace Hosting konfiguriert.

### Domainnamen mit SquareSpace verbinden

Diese Schritte müssen im Verwaltungsbereich von SquareSpace ausgeführt werden.

> [!primary]
>
> - Sie können Ihren Domainnamen mit einer Test- oder kostenpflichtigen SquareSpace-Website verbinden. Sie können keine Verbindung mit einer abgelaufenen Website herstellen.
> - Wenn Sie über einen E-Mail-Account verfügen, der mit Ihrem Domainnamen verbunden ist, können Sie diesen auch nach der Anmeldung der Domain bei SquareSpace weiter verwenden. Bevor Sie sich mit Ihrem Domainnamen verbinden, empfehlen wir Ihnen, diese [SquareSpace-Anleitung](https://support.squarespace.com/hc/de/articles/217601877-Eine-E-Mail-Adresse-einer-eigenen-Domain-die-Sie-bereits-besitzen-mit-Squarespace-nutzen){.external} zu lesen.
> - Sie können mehrere benutzerdefinierte Domainnamen für Ihre Website verwenden. Sie können so viele verbinden oder speichern, wie Sie möchten.
> - Sie können keinen benutzerdefinierten Domainnamen mit SquareSpace verbinden, wenn der Domainname „squarespace“ oder „sqsp“ enthält.

Befolgen Sie zunächst die in Schritt 1 der [SquareSpace-Anleitung](https://support.squarespace.com/hc/de/articles/12880712406797-Eine-OVHcloud-Domain-mit-deiner-Squarespace-Website-verbinden){.external} beschriebenen Schritte.

> [!warning]
>
> Wenn Sie die Warnmeldung „This domain is already connected to another Squarespace site“ erhalten (Diese Domain ist bereits mit einer anderen SquareSpace-Website verbunden), überprüfen Sie Ihre anderen SquareSpace-Websites, um festzustellen, mit welcher Website die Domain verbunden ist. Enfernen Sie dann die Verbindung zu dieser Website.

Um den Prozess fortzusetzen, gehen Sie direkt zu Schritt 2 in der [SquareSpace-Anleitung](https://support.squarespace.com/hc/de/articles/12880712406797-Eine-OVHcloud-Domain-mit-deiner-Squarespace-Website-verbinden){.external}.

Wenn Sie ein E-Mail-Angebot von OVHcloud verwenden oder eines unserer [E-Mail-Angebote](/links/web/emails) abonnieren möchten, bereiten Sie Ihre DNS-Zone entsprechend vor. Lesen Sie dazu unsere Anleitung „[Konfiguration eines MX-Eintrags](/pages/web_cloud/domains/dns_zone_mx)“.

## Weiterführende Informationen <a name="go-further"></a>

[DNS-Server von OVHcloud Domainnamen ändern](/pages/web_cloud/domains/dns_server_edit)

[OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Um die Verwaltung Ihrer Domainnamen auf einen anderen OVHcloud Kunden-Account zu delegieren, folgen Sie der Anleitung zur [Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts)".

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
