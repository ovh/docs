---
title: "DNS-Server eines OVHcloud Domainnamens ändern"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Server Ihres bei OVHcloud registrierten Domainnamens ändern können"
updated: 2026-03-27
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

Die Abkürzung **DNS** (**D**omain **N**ame **S**ystem) bezeichnet einen Satz von Elementen (DNS-Server, DNS-Zonen, etc.), mit denen ein Domainname einer IP-Adresse zugeordnet werden kann.

Weitere Informationen finden Sie in unseren Anleitungen "[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)" und "[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)".

**Diese Anleitung erklärt, wie Sie die DNS-Server Ihres OVHcloud Domainnamens in 3 Schritten ändern.**

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie verfügen über die [entsprechenden Berechtigungen](/pages/account_and_service_management/account_information/managing_contacts) für die Verwaltung des Domainnamens.

<!-- CP-NAV-START:web-domains -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Domainnamen](/links/control-panel/web-domains)
- **Navigationspfad:** `Web Cloud`{.action} > `Domainnamen`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Ein **Domainnamen-Registrar** ist ein Diensteanbieter, der autorisiert ist, Domainnamen zur Registrierung anzubieten. OVHcloud gehört zu diesen **Registraren**.
>
> Wenn Ihr Domainname nicht bei OVHcloud registriert ist, müssen Sie die DNS-Server bei dem **Registrar** ändern, bei dem Ihr Domainname derzeit registriert ist.

## In der praktischen Anwendung

> [!alert]
>
> **Wir raten zur Vorsicht, wenn Sie die DNS-Server eines Domainnamens ändern.**
>
> Ein Fehler bei der Konfiguration kann dazu führen, dass Ihre Website nicht mehr erreichbar ist oder Ihre E-Mail-Adressen keine neuen E-Mails mehr empfangen können. Ein genaueres Verständnis der Konsequenzen einer solchen Änderung ermöglicht es Ihnen, die vorgenommenen Änderungen besser nachzuvollziehen.

Wenn Sie die DNS-Server Ihres Domainnamens ändern, ändern Sie dessen DNS-Konfiguration. Die neue DNS-Konfiguration ersetzt die alte und wird auf den neu definierten DNS-Servern gespeichert. Technisch gesehen verwendet der Domainname dann eine neue DNS-Zone.

Dabei ist jedoch Folgendes zu berücksichtigen:

- Beim Wechsel der DNS-Server (z.B. von einem externen DNS zu einem OVHcloud DNS) wird der Inhalt der alten Konfiguration/DNS-Zone nicht automatisch in die neue repliziert. Stellen Sie sicher, dass Ihre neue DNS-Zone alle DNS-Einträge enthält, die für das ordnungsgemäße Funktionieren der mit Ihrem Domainnamen verbundenen Dienste erforderlich sind (z.B. Ihre Website und Ihre E-Mail-Adressen).
- Wenn Sie die DNS-Server nicht ändern möchten, sondern nur einzelne Einträge Ihrer aktuellen DNS-Konfiguration/Zone bearbeiten möchten, lesen Sie unsere Anleitung: "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".
- Vereinzelt haben die Organisationen (Registrys), die Domainendungen verwalten, besondere Anforderungen an die DNS-Server (Anzahl der Nameserver, Vorgaben für Einträge, etc.). Überprüfen Sie im Zweifelsfall die Regeln der zuständigen Registry der Domainnamen-Endung.

### 1 - DNS-Server ändern <a name="modify-dns-servers"></a>

Sie müssen die DNS-Server Ihres Domainnamens möglicherweise in folgenden Situationen ändern:

- Sie möchten die von OVHcloud bereitgestellten DNS-Server verwenden.
- Sie möchten eigene DNS-Server (oder die eines externen DNS-Anbieters) verwenden.
- Sie möchten die von OVHcloud bereitgestellten DNS-Server mit Ihren eigenen DNS-Servern kombinieren.

> [!primary]
>
> Wenn Sie OVHcloud DNS-Server verwenden, haben die Nummern in den Servernamen keinen Bezug zu den von Ihnen verwendeten Diensten. Nur die Option [DNS Anycast](/links/web/domains-options) verwendet spezielle DNS-Server (`ns200.anycast.me` und `dns200.anycast.me`). Bei Abonnement werden diese automatisch zugewiesen.

<!-- CP-STEPS-START:modify-dns-option1-ovhcloud-standard -->
**Klicken Sie auf die Optionen unten, um den Inhalt anzuzeigen.**

/// details | Option 1 - OVHcloud Standard-DNS-Server verwenden

Diese Option wendet die bestehende OVHcloud DNS-Zonenkonfiguration automatisch auf Ihren Domainnamen an. Stellen Sie zunächst sicher, dass bei OVHcloud eine DNS-Zone für Ihren Domainnamen vorhanden ist.

> [!primary]
>
> Lesen Sie bei Bedarf die Anleitungen "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)" und/oder "[OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)", um zu überprüfen, ob eine OVHcloud DNS-Zone für Ihren Domainnamen vorhanden ist.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf der Seite des Domainnamens befinden.
>>
> **Schritt 3**
>>
>> Die angezeigte Tabelle enthält die derzeit von OVHcloud für Ihren Domainnamen definierten DNS-Server. Es können mehrere DNS-Server mit jeweils eigener Zeile in der Tabelle aufgeführt werden.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Klicken Sie rechts neben der Tabelle "DNS-Server" auf den Button `DNS-Server ändern`{.action}. Je nach Bildschirmauflösung befindet sich der Button möglicherweise unterhalb der Tabelle.
>>
> **Schritt 4**
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}
>>
>> Um die OVHcloud Standard-DNS-Server zu verwenden, klicken Sie auf `Konfiguration anwenden`{.action}. Das folgende Fenster wird angezeigt:
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}
>>
>> Es enthält die Namen der 2 DNS-Server, die auf Ihren Domainnamen angewendet werden. Diese haben eines der folgenden 3 Formate:
>>
>> - `nsXX.ovh.net` und `dnsXX.ovh.net` oder `nsXXX.ovh.net` und `dnsXXX.ovh.net` (wobei jedes `X` eine Ziffer zwischen **0** und **9** darstellt)
>> - `nsXX.ovh.ca` und `dnsXX.ovh.ca` oder `nsXXX.ovh.ca` und `dnsXXX.ovh.ca` (wobei jedes `X` eine Ziffer zwischen **0** und **9** darstellt)
>> - `ns200.anycast.me` und `dns200.anycast.me` (wenn Sie die Option [DNS Anycast](/links/web/domains-options) abonniert haben)
>>
>> Wenn diese den gewünschten Servern entsprechen, klicken Sie auf `Anwenden`{.action}.
>>
>> Die 2 deklarierten DNS-Server (in den NS-Einträgen der OVHcloud DNS-Zone) werden dann für Ihren Domainnamen verwendet.

Die bisher deklarierten DNS-Server und deren DNS-Konfiguration werden für Ihren Domainnamen deaktiviert. Die OVHcloud DNS-Zone wird zur aktiven DNS-Zone für Ihren Domainnamen.

///
<!-- CP-STEPS-END:modify-dns-option1-ovhcloud-standard -->

<!-- CP-STEPS-START:modify-dns-option2-own-servers -->
/// details | Option 2 - Eigene DNS-Server verwenden

Mit dieser Option können Sie die DNS-Server einer DNS-Zone deklarieren, die nicht über das OVHcloud Kundencenter verwaltet wird.

Dies können zum Beispiel sein:

- Externe DNS-Server, die von einem anderen Anbieter bereitgestellt werden.
- Ihre eigenen DNS-Server, wenn Sie Ihre DNS-Zone auf einem Ihrer Server hosten. Diese DNS-Server können auch auf einer OVHcloud Infrastruktur gehostet werden (Dedicated Server, VPS, etc.).

> [!success]
>
> Stellen Sie vor dem Hinzufügen eines DNS-Servers sicher, dass dieser **erreichbar ist** und eine DNS-Zone für Ihren Domainnamen enthält. Stellen Sie außerdem sicher, dass diese DNS-Zone alle NS-Einträge für alle DNS-Server enthält, die Sie für Ihren Domainnamen deklarieren möchten.
>
> Beispiel: Sie möchten die DNS-Server *ns1.dns-server.tld*, *ns2.dns-server.tld* und *ns3.dns-server.tld* für Ihren Domainnamen deklarieren. Überprüfen Sie, ob die folgenden drei NS-Einträge in den 3 DNS-Zonen vorhanden sind, die auf diesen 3 DNS-Servern gehostet werden:
>
> - "Ihr Domainname (oder nur ein @)" IN NS ns1.dns-server.tld.
> - "Ihr Domainname (oder nur ein @)" IN NS ns2.dns-server.tld.
> - "Ihr Domainname (oder nur ein @)" IN NS ns3.dns-server.tld.

Klicken Sie auf die unten stehenden Tabs, um die **5** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf der Seite des Domainnamens befinden.
>>
> **Schritt 3**
>>
>> Die angezeigte Tabelle enthält die derzeit von OVHcloud für Ihren Domainnamen definierten DNS-Server. Es können mehrere DNS-Server mit jeweils eigener Zeile in der Tabelle aufgeführt werden.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Klicken Sie rechts neben der Tabelle "DNS-Server" auf den Button `DNS-Server ändern`{.action}. Je nach Bildschirmauflösung befindet sich der Button möglicherweise unterhalb der Tabelle.
>>
> **Schritt 4**
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}
>>
>> Um einen Ihrer eigenen DNS-Server anzugeben, füllen Sie die 2 Formularfelder in der Box wie folgt aus:
>>
>> - `DNS-Server`: Name des DNS-Servers, der auf Ihren Domainnamen angewendet werden soll.
>> - `Zugeordnete IP (optional)`: IP-Adresse (IPv4 oder IPv6) des angegebenen DNS-Servers. In diesem Formular kann nur **eine IP-Adresse** angegeben werden.
>>
>> > [!warning]
>> >
>> > Jedes Eingabefeld (im vorherigen Screenshot zu sehen) kann jeweils nur **einen** DNS-Server beinhalten. Ein DNS-Server entspricht somit einem Eingabefeld.
>> >
>> > Darüber hinaus gibt ein blauer Informationshinweis oberhalb des ersten Feldes den Bereich der DNS-Server an, die Sie für Ihren Domainnamen deklarieren können. Diese Werte variieren je nach Domainendung.
>>
> **Schritt 5**
>>
>> Wenn Sie die Informationen eingegeben haben, klicken Sie auf den Button `+`{.action} rechts neben den 2 Formularfeldern. Dadurch wird der DNS-Server hinzugefügt und ein neues Eingabefeld unterhalb des vorherigen angezeigt.
>>
>> Wiederholen Sie diesen Vorgang für jeden weiteren DNS-Server und beachten Sie dabei die im Informationshinweis angegebenen Grenzen.
>> Klicken Sie für jeden DNS-Server auf den Button `+`{.action}, um dessen Eingabe und Hinzufügung zu bestätigen.
>>
>> Sobald alle Ihre eigenen DNS-Server hinzugefügt wurden, klicken Sie auf `Konfiguration anwenden`{.action}. Das folgende Fenster wird angezeigt:
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}
>>
>> Es enthält die Namen der DNS-Server, die auf Ihren Domainnamen angewendet werden.
>> Wenn diese den gewünschten Servern entsprechen, klicken Sie auf `Anwenden`{.action}.

Die bisher deklarierten DNS-Server und deren DNS-Konfiguration werden für Ihren Domainnamen deaktiviert. Die auf Ihren eigenen DNS-Servern deklarierte DNS-Zone wird zur aktiven DNS-Zone für Ihren Domainnamen.

///
<!-- CP-STEPS-END:modify-dns-option2-own-servers -->

<!-- CP-STEPS-START:modify-dns-option3-combined -->
/// details | Option 3 - OVHcloud DNS-Server und eigene DNS-Server gemeinsam verwenden

Mit dieser Option können Sie Ihre eigenen DNS-Server mit den OVHcloud DNS-Servern für Ihren Domainnamen kombinieren. Diese Kombination ermöglicht beispielsweise eine höhere Verfügbarkeit der verschiedenen mit Ihrem Domainnamen verbundenen Dienste (Webhosting, E-Mail-Server, etc.). Wenn eine Gruppe von DNS-Servern für einige Minuten nicht verfügbar ist, können die anderen deklarierten DNS-Server den Betrieb übernehmen.

Stellen Sie jedoch sicher, dass die DNS-Zonenkonfigurationen auf allen betreffenden DNS-Servern korrekt eingerichtet sind, damit sie zusammen funktionieren. In den meisten Fällen sind alle DNS-Server einsatzbereit. Sie können alle auf die über das DNS-Netzwerk zufällig an sie gerichteten Anfragen antworten.

> [!warning]
>
> 1. Seien Sie vorsichtig, wenn Sie sich für diese Option entscheiden. Für deren Nutzung sind fortgeschrittene Kenntnisse über die Funktionsweise des DNS-Netzwerks, der DNS-Server und der DNS-Zonen erforderlich.
> 2. Die Option [DNSSEC](/pages/web_cloud/domains/dns_dnssec) muss deaktiviert werden, um die Verwendung Ihrer eigenen DNS-Server mit denen von OVHcloud zu kombinieren.
> 3. Achten Sie darauf, verschiedene Gruppen von OVHcloud DNS-Servern nicht zu mischen. Zum Beispiel bilden *dns19.ovh.net* und *ns19.ovh.net* eine Gruppe von OVHcloud DNS-Servern; sie gehören zusammen und werden synchronisiert. Bei OVHcloud können DNS-Servergruppen anhand der Nummer in den Servernamen identifiziert werden. Zwei OVHcloud DNS-Server gehören derselben Gruppe an, wenn sie dieselbe Nummer verwenden. Zum Beispiel: *dns19.ovh.net* und *ns19.ovh.net*.

> [!success]
>
> Stellen Sie vor dem Hinzufügen eines DNS-Servers sicher, dass dieser **erreichbar ist** und eine DNS-Zone für Ihren Domainnamen enthält. Stellen Sie außerdem sicher, dass diese DNS-Zone alle NS-Einträge für alle DNS-Server enthält, die Sie für Ihren Domainnamen deklarieren möchten.
>
> Beispiel: Sie möchten die DNS-Server *ns1.dns-server.tld*, *dnsXX.ovh.net* und *nsXX.ovh.net* für Ihren Domainnamen deklarieren. Überprüfen Sie, ob die folgenden drei NS-Einträge in den 3 DNS-Zonen vorhanden sind, die auf diesen 3 DNS-Servern gehostet werden:
>
> - "Ihr Domainname (oder nur ein @)" IN NS ns1.dns-server.tld.
> - "Ihr Domainname (oder nur ein @)" IN NS dnsXX.ovh.net.
> - "Ihr Domainname (oder nur ein @)" IN NS nsXX.ovh.net.

Klicken Sie auf die unten stehenden Tabs, um die **5** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf der Seite des Domainnamens befinden.
>>
> **Schritt 3**
>>
>> Die angezeigte Tabelle enthält die derzeit von OVHcloud für Ihren Domainnamen definierten DNS-Server. Es können mehrere DNS-Server mit jeweils eigener Zeile in der Tabelle aufgeführt werden.
>>
>> ![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}
>>
>> Klicken Sie rechts neben der Tabelle "DNS-Server" auf den Button `DNS-Server ändern`{.action}. Je nach Bildschirmauflösung befindet sich der Button möglicherweise unterhalb der Tabelle.
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Um einen Ihrer eigenen DNS-Server anzugeben, füllen Sie die 2 Formularfelder in der Box wie folgt aus:
>>
>> - `DNS-Server`: Name des DNS-Servers, der auf Ihren Domainnamen angewendet werden soll.
>> - `Zugeordnete IP (optional)`: IP-Adresse (IPv4 oder IPv6) des angegebenen DNS-Servers. In diesem Formular kann nur **eine IP-Adresse** angegeben werden.
>>
>> > [!warning]
>> >
>> > Jedes Eingabefeld (im vorherigen Screenshot zu sehen) kann jeweils nur **einen** DNS-Server beinhalten. Ein DNS-Server entspricht somit einem Eingabefeld.
>> >
>> > Darüber hinaus gibt ein blauer Informationshinweis oberhalb des ersten Feldes den Bereich der DNS-Server an, die Sie für Ihren Domainnamen deklarieren können. Diese Werte variieren je nach Domainendung.
>>
>> Wenn Sie die Informationen eingegeben haben, klicken Sie auf den Button `+`{.action} rechts neben den 2 Formularfeldern. Dadurch wird der DNS-Server hinzugefügt und ein neues Eingabefeld unterhalb des vorherigen angezeigt.
>>
>> Wiederholen Sie diesen Vorgang für jeden weiteren DNS-Server und beachten Sie dabei die im Informationshinweis angegebenen Grenzen.
>> Klicken Sie für jeden DNS-Server auf den Button `+`{.action}, um dessen Eingabe und Hinzufügung zu bestätigen.
>>
> **Schritt 5**
>>
>> Sobald alle Ihre DNS-Server hinzugefügt wurden, klicken Sie auf `Konfiguration anwenden`{.action}. Das folgende Fenster wird angezeigt:
>>
>> ![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}
>>
>> Es enthält die Namen der DNS-Server, die auf Ihren Domainnamen angewendet werden.
>> Wenn diese den gewünschten Servern entsprechen, klicken Sie auf `Anwenden`{.action}.

Die bisher deklarierten DNS-Server und deren DNS-Konfiguration werden für Ihren Domainnamen deaktiviert. Die DNS-Zonen auf Ihren eigenen DNS-Servern und den OVHcloud DNS-Servern werden zu den aktiven Zonen für Ihren Domainnamen.

///
<!-- CP-STEPS-END:modify-dns-option3-combined -->

### 2 - Propagation der DNS-Server-Änderung

Nachdem Sie Ihre Änderungen vorgenommen haben, müssen zwei aufeinanderfolgende Zeiträume berücksichtigt werden:

- Die *Registry*, die Ihre Domainendung verwaltet (z.B. die für *.fr*-Endungen zuständige Registry), muss über die bei OVHcloud vorgenommene DNS-Änderung informiert werden. Verfolgen Sie den Fortschritt auf der Seite [Laufende Vorgänge](/links/control-panel/web-ongoing-operations).
- Warten Sie nach der Aktualisierung der *Registry*-Informationen maximal **48 Stunden**, damit die Änderungen vollständig propagiert und wirksam werden.

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
