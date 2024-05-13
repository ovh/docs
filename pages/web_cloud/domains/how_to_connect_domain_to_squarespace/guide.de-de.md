---
title: "Verbinden eines OVHcloud Domainnamens mit einem SquareSpace Hosting"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem SquareSpace Hosting zu verwenden"
updated: 2024-05-13
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
>> ![dnszone](images/filter-a.png){.thumbnail}<br>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrem Domainnamen ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain "www" vorhanden ist (Beispiel: `www.mydomain.ovh.`), müssen Sie diesen löschen, damit er nicht mit dem in Schritt 4 angegebenen CNAME-Eintrag in Konflikt steht. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihren Domainnamen mit der Subdomain "www" und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie noch keinen A-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} rechts oben und wählen Sie `A`{.action}<br><br>
>> Sie müssen nacheinander 4 A-Einträge erstellen, um die 4 IPv4-Adressen für SquareSpace anzugeben.
>> Lassen Sie das Feld **Subdomain** leer und geben Sie die erste SquareSpace-IPv4-Adresse `198.185.159.144` in das Feld **Ziel** ein.
>> Klicken Sie auf `Weiter`{.action}, bestätigen Sie Ihren A-Eintrag, wiederholen Sie den Vorgang für die anderen 3 IPv4-Adressen `198.185.159.145`; `198.49.23.144`; `198.49.23.145` und fahren Sie mit Schritt 2 fort.
> **Schritt 2**
>> **AAAA-Eintrag**<br><br>
>>  Um vorhandene AAAA-Einträge zu identifizieren, klicken Sie oben in der Tabelle mit DNS-Einträgen auf das Filtermenü und wählen Sie `AAAA` aus.<br>
>> ![dnszone](images/filter-aaaa.png){.thumbnail}<br>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrer Domain ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain "www" vorhanden ist (Beispiel: `www.mydomain.ovh.`), löschen Sie diesen ebenfalls, damit er nicht in Konflikt mit dem CNAME-Eintrag steht, den Sie in Schritt 4 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile zu Ihrer Domain mit der Subdomain "www" und dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie keinen existierenden „AAAA“-Eintrag haben, fahren Sie mit Schritt 3 fort.
> **Schritt 3**
>> **TXT-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü, und wählen Sie `TXT`.<br> aus, um vorhandene TXT-Einträge zu identifizieren.
>>![dnszone](images/filter-txt.png){.thumbnail}<br>
>> - Wenn „TXT“-Einträge für die Domain alleine (Beispiel: `mydomain.ovh.`) und ihre Subdomain als "www" (Beispiel: `www.mydomain.ovh.`) vorhanden sind, müssen diese gelöscht werden, damit sie nicht in Konflikt mit dem CNAME-Eintrag stehen, den Sie in Schritt 3 eingeben. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihre Domain allein mit der Subdomain "www" und dann auf `Eintrag löschen`{.action}.<br>
> **Schritt 4**
>> **CNAME-Eintrag**<br><br>
>> Klicken Sie oben in der DNS-Eintragstabelle auf das Filtermenü und wählen Sie `CNAME`.<br>
>>![dnszone](images/filter-cname.png){.thumbnail}
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile Ihrer Subdomain in "www" (Beispiel: `mydomain.ovh.`) und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn Sie keinen existierenden "CNAME" Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} oben rechts auf Ihrem Bildschirm und wählen Sie das „Daraufzeigefeld“ `CNAME`{.action}.
>> Füllen Sie das Feld **Subdomain** mit dem Wert `www` aus und geben Sie `verify.squarespace.com.` in das Feld **Ziel**.<br>
>>![cname-entry](images/add-an-entry-to-the-dns-zone-cname-squarespace.png){.thumbnail}
>> Klicken Sie auf `Weiter`{.action} und bestätigen Sie Ihren "CNAME" Eintrag.
>> Fügen Sie den zweiten CNAME-Eintrag hinzu, indem Sie `ext-cust.squarespace.com.` in das Feld **Ziel**.<br>

Die DNS-Zone ist nun so konfiguriert, dass sie mit einem SquareSpace Hosting verbunden wird.

### Domainnamen mit SquareSpace verbinden

Die Schritte für diesen Schritt müssen im Verwaltungsbereich von SquareSpace ausgeführt werden.

> [!primary]
>
> - Sie können Ihre Domain mit einer Test- oder kostenpflichtigen SquareSpace-Website verbinden. Sie können keine Verbindung mit einer abgelaufenen Website herstellen.
> - Wenn Sie über einen E-Mail-Account verfügen, der mit Ihrer Domain verbunden ist, können Sie diesen auch nach der Anmeldung der Domain bei SquareSpace weiter verwenden. Bevor Sie sich mit Ihrem Domainnamen verbinden, empfehlen wir Ihnen, diese [SquareSpace-Anleitung](https://support.squarespace.com/hc/de/articles/217601877-Eine-E-Mail-Adresse-einer-eigenen-Domain-die-Sie-bereits-besitzen-mit-Squarespace-nutzen){.external} zu lesen.
> - Sie können mehrere benutzerdefinierte Domainnamen für Ihre Website verwenden. Sie können so viele Dateien verbinden oder speichern, wie Sie möchten.
> - Sie können keinen benutzerdefinierten Domänennamen mit SquareSpace verbinden, wenn der Domänenname das Wort „squarespace“ oder „sqsp“ enthält.

Führen Sie die folgenden Schritte aus, um zu beginnen:

1.	Melden Sie sich bei Ihrem SquareSpace-Konto an und gehen Sie in den Bereich `Domainnamen`{.action}.
2.	Klicken Sie auf `Ich habe bereits eine Domain`{.action} und dann auf `Domain eingeben`{.action}.
3.	Klicken Sie auf `Domain verbinden`{.action}.
4.	Wählen Sie im Dropdown-Menü **OVHcloud** aus. Wenn es in der Auswahl nicht angezeigt wird, klicken Sie auf `Andere`{.action}. Sie können Ihre Domain auch dann verbinden, wenn der Anbieter nicht auf der Liste steht.
5.	Klicken Sie auf `Domain verbinden`{.action} und dann auf `Weiter`{.action}.

> [!warning]
>
> Wenn Sie die Warnmeldung „This domain is already connected to another Squarespace site“ erhalten (Diese Domain ist bereits mit einer anderen Squarespace-Website verbunden), überprüfen Sie Ihre anderen Squarespace-Websites, um festzustellen, mit welcher Website die Domain verbunden ist. Trennen Sie dann die Verbindung zu dieser Website.

Gehen Sie für den weiteren Vorgang direkt zu Schritt 2 dieses [SquareSpace-Handbuchs](https://support.squarespace.com/hc/de/articles/205812378-Eine-Domain-eines-Drittanbieters-mit-deiner-Squarespace-Website-verbinden){.external}.

> [!primary]
>
> Die Überprüfung Ihres Domainnamens kann 24 bis 72 Stunden dauern, bis die Verbindung ordnungsgemäß funktioniert. In der Zwischenzeit werden Sie von SquareSpace aufgefordert, den Status der Verbindung und die Einstellungen für den Domainnamen im Bedienfeld `Domainübersicht`{.action} zu überprüfen. Gehen Sie hierzu zu Schritt 7 dieser [SquareSpace-Anleitung](https://support.squarespace.com/hc/de/articles/205812378-Eine-Domain-eines-Drittanbieters-mit-deiner-Squarespace-Website-verbinden){.external}.

Wenn Sie ein E-Mail-Angebot von OVHcloud verwenden oder eines unserer [E-Mail-Angebote](/links/web/emails) abonnieren möchten, bereiten Sie Ihre DNS-Zone entsprechend vor. Lesen Sie unsere Anleitung „[Konfiguration eines MX-Eintrags](/pages/web_cloud/domains/dns_zone_mx)“.

## Weiterführende Informationen <a name="go-further"></a>

[DNS-Server von OVHcloud Domainnamen ändern](/pages/web_cloud/domains/dns_server_general_information)

[OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Um die Verwaltung Ihrer Domainnamen auf einen anderen OVHcloud Kunden-Account zu delegieren, folgen Sie der Anleitung zur [Kontaktverwaltung](/pages/account_and_service_management/account_information/managing_contacts)".

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.