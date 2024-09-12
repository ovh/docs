---
Titel: "DNS-Server einer OVHcloud Domain ändern"
excerpt: "Diese Anleitung erklärt, wie Sie die DNS-Server Ihres bei OVHcloud registrierten Domainnamens ändern können"
updated: 2024-09-16
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Die Abkürzung **DNS** (**D**omain **N**ame **S**ystem) ist ein Satz von Elementen (DNS-Server, DNS-Zonen usw.), mit denen ein Domainname einer IP-Adresse zugeordnet werden kann.

Weitere Informationen finden Sie in unseren Anleitungen „[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)“ und „[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)“.

**Diese Anleitung erklärt, wie Sie die DNS-Server für Ihren OVHcloud-Domainnamen in 3 Schritten ändern können.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie besitzen eine bei OVHcloud registrierte [Domain](/links/web/domains).
- Sie verfügen über die [entsprechenden Berechtigungen](/pages/account_and_service_management/account_information/managing_contacts), um den Domainnamen über Ihr [OVHcloud Kundencenter](/links/manager) zu verwalten.
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt.

> [!primary]
>
> Ein **Registrar** ist eine Organisation, die Domainnamen verkaufen darf. OVHcloud ist einer dieser **Registrare**.
>
> Wenn Ihre Domain nicht bei OVHcloud registriert ist, müssen Sie die DNS-Server bei dem **Registrar** ändern, bei dem Ihre Domain derzeit registriert ist.
>

## In der praktischen Anwendung

> [!alert]
>
> **Seien Sie vorsichtig, wenn Sie die DNS-Server einer Domain ändern.**
>
> Ein Fehler bei der Bearbeitung kann dazu führen, dass Ihre Website nicht mehr erreichbar ist oder Ihre E-Mail-Adressen keine neuen E-Mails mehr empfangen können. Ein genaueres Verständnis der Konsequenzen einer solchen Änderung ermöglicht es Ihnen, die vorgenommenen Änderungen besser zu verstehen.

Wenn Sie die DNS-Server Ihrer Domain ändern, ändern Sie deren DNS-Konfiguration. Die neue DNS-Konfiguration ersetzt die alte und wird auf den neu definierten DNS-Servern gespeichert. Technisch gesehen verwendet die Domain dann eine neue DNS-Zone.

Dabei ist jedoch Folgendes zu berücksichtigen:

- Bei einem Wechsel des DNS-Servers (zum Beispiel ein externes DNS durch ein OVHcloud DNS) wird der Inhalt der alten Konfiguration / DNS-Zone nicht automatisch in die neue repliziert. Stellen Sie sicher, dass die neue DNS-Zone alle DNS-Einträge enthält, die für das einwandfreie Funktionieren der mit Ihrer Domain verbundenen Dienste erforderlich sind (z. B. Ihre Website und E-Mail-Adressen).
- Wenn Sie die DNS-Server nicht ändern möchten, sondern nur einen oder mehrere Einträge Ihrer aktuellen DNS-Konfiguration / -Zone bearbeiten möchten, lesen Sie unsere Anleitung: „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“.
- Einige Organisationen, Registrys, die Domainendungen verwalten, haben besondere Anforderungen an DNS-Server (Anzahl der Namensserver, Wert der Einträge usw.). Im Zweifelsfall wenden Sie sich an die für die Domain zuständige Registry.

### Schritt 1 - Auf die Verwaltung der OVHcloud DNS-Server zugreifen <a name="access-dns-servers"></a>

Gehen Sie hierzu wie folgt vor:

1. Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager).
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Domainnamen`{.action}.
4. Wählen Sie die betreffende Domain aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Server`{.action}.

Die angezeigte Tabelle enthält die derzeit von OVHcloud für Ihre Domain definierten DNS-Server. Es können mehrere DNS-Server mit jeweils eigener Zeile in der Tabelle aufgeführt werden.

> [!primary]
>
> Wenn Sie die OVHcloud DNS-Server verwenden, haben die in den Servernamen enthaltenen Nummern keinen Bezug zu den von Ihnen verwendeten Diensten. Nur die Option [DNS anycast](/links/web/domains-options) verwendet bestimmte DNS-Server (`ns200.anycast.me` und `dns200.anycast.me`). Wenn sie abonniert werden, werden sie Ihnen automatisch zugewiesen.

![DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### Schritt 2 - DNS Server ändern <a name="modify-dns-servers"></a>

> [!primary]
>
> Alle unten beschriebenen Funktionen werden über den Tab `DNS-Server`{.action} ausgeführt, der in [Schritt 1](#access-dns-servers) dieser Anleitung erwähnt wird.
>

Um die DNS Server zu ändern, klicken Sie rechts in der Tabelle „DNS Server“ auf `DNS-Server ändern`{.action}. Je nach Bildschirmauflösung befindet sich die Schaltfläche möglicherweise unter der Tabelle.

Es wird eine neue Seite angezeigt, und Sie haben drei Bearbeitungsoptionen.

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers.png){.thumbnail}

#### Option 1 - Die standardmäßigen DNS von OVHcloud verwenden

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1.png){.thumbnail}

Mit dieser Option wird die bestehende DNS-Zonenkonfiguration von OVHcloud automatisch auf Ihre Domain angewendet. Stellen Sie zunächst sicher, dass bei OVHcloud eine DNS-Zone für Ihre Domain vorhanden ist.

> [!primary]
>
> Lesen Sie bei Bedarf die Anleitungen „[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)“ und/oder „[OVHcloud DNS-Zone für eine Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)“, um zu überprüfen, ob eine OVHcloud DNS-Zone für Ihre Domain vorhanden ist.

Um die standardmäßigen DNS-Server von OVHcloud zu verwenden, klicken Sie auf `Konfiguration anwenden`{.action}. Das folgende Fenster wird angezeigt:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-1-apply-configuration.png){.thumbnail}

Sie fasst die Namen der 2 DNS-Server zusammen, die für Ihre Domain verwendet werden. Sie müssen eine der folgenden drei Formen haben:

- `nsXX.ovh.net` und `dnsXX.ovh.net` oder, `nsXXX.ovh.net` und `dnsXXX.ovh.net` (wobei jedes `X` eine Ziffer zwischen **0** und **9** darstellt)
- `nsXX.ovh.ca` und `dnsXX.ovh.ca` oder, `nsXXX.ovh.ca` und `dnsXXX.ovh.ca` (wobei jedes `X` eine Ziffer zwischen **0** und **9** darstellt)
- `ns200.anycast.me` und `dns200.anycast.me` (wenn Sie die Option [DNS anycast](/links/web/domains-options))

Wenn sie mit den gewünschten übereinstimmen, klicken Sie auf `Anwenden`{.action}.

So werden die 2 deklarierten DNS-Server (in den DNS-Einträgen der OVHcloud DNS-Zone) für Ihren Domainnamen verwendet.

Die alten deklarierten DNS-Server und die von ihnen angewendete DNS-Konfiguration werden für Ihren Domainnamen deaktiviert. Die OVHcloud DNS-Zone wird zur aktiven DNS-Zone für Ihre Domain.

#### Option 2 - Eigene DNS verwenden

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2.png){.thumbnail}

Mit dieser Option können Sie die DNS-Server einer nicht verwalteten DNS-Zone über das OVHcloud Kundencenter deklarieren.

Dies kann zum Beispiel sein:

- externe DNS-Server, die von einem unserer Wettbewerber bereitgestellt werden;
- Ihre eigenen DNS Server, wenn Sie Ihre DNS Zone auf einem Ihrer Server hosten. Diese DNS Server können auch auf einer OVHcloud Infrastruktur gehostet werden (Dedicated Server, VPS...).

> [!success]
>
> Stellen Sie vor dem Hinzufügen eines DNS-Servers sicher, dass dieser **erreichbar ist** und eine DNS-Zone für Ihre Domain enthält. Stellen Sie außerdem sicher, dass diese DNS-Zone alle DNS-Einträge vom Typ „NS“ auf allen DNS-Servern enthält, die Sie für Ihre Domain deklarieren möchten.
>
> Zum Beispiel: Sie möchten die DNS-Server *ns1.dns-server.tld*, *ns2.dns-server.tld* und *ns3.dns-server.tld* für Ihre Domain deklarieren. Überprüfen Sie, ob die folgenden drei Einträge vom Typ „NS“ in den 3 DNS-Zonen vorhanden sind, die auf diesen 3 DNS-Servern gehostet werden:
>
> - „Your own domain (or just an @)“ IN NS ns1.dns-server.tld.
> - „Your own domain (or just an @)“ IN NS ns2.dns-server.tld.
> - „Your own domain (or just an @)“ IN NS ns3.dns-server.tld.
>

Um einen Ihrer eigenen DNS Server anzugeben, füllen Sie die 2 Formulare in der Box wie folgt aus:

- `DNS-Server`: Der Name des DNS-Servers, der auf Ihren Domainnamen angewendet werden soll.
- `Zugeordnete IP (optional)`: Die IP-Adresse (IPv4 oder IPv6) des angegebenen DNS-Servers. In diesem Formular kann nur eine **IP-Adresse** angegeben werden.

> [!warning]
>
> Jeder Eingabeframe (sichtbar im vorherigen Bildschirmfoto) darf jeweils nur ****einen** DNS-Server enthalten. Ein DNS-Server entspricht also einem Kästchen.
>
> Ein Informationshinweis auf blauem Hintergrund über dem ersten Kasten zeigt den Bereich der DNS-Server an, die Sie für Ihren Domainnamen deklarieren können. Diese Werte variieren je nach Domainendung.

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf den Button `+`{.action} rechts neben den 2 Formularen. Hier können Sie den DNS-Server hinzufügen und ein neues Eingabefeld unter dem vorherigen wird angezeigt.

Wiederholen Sie diesen Vorgang so oft, wie Sie DNS-Server hinzufügen möchten, und beachten Sie dabei die im Informationshinweis angegebenen Grenzwerte.
Klicken Sie auf den Button `+`{.action} für jeden DNS-Server, um dessen Eingabe und Hinzufügen zu bestätigen.

Sobald alle eigenen DNS Server hinzugefügt wurden, klicken Sie auf `Konfiguration anwenden`{.action}. Das folgende Fenster wird angezeigt:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-2-apply-configuration.png){.thumbnail}

Sie fasst die Namen der DNS-Server zusammen, die für Ihre Domain verwendet werden.
Wenn sie mit den gewünschten übereinstimmen, klicken Sie auf `Anwenden`{.action}.

Die alten deklarierten DNS-Server und die von ihnen angewendete DNS-Konfiguration werden für Ihren Domainnamen deaktiviert. Die auf Ihren eigenen DNS-Servern deklarierte DNS-Zone wird die aktive DNS-Zone für Ihre Domain.

#### Option 3 - OVHcloud DNS und meine eigenen DNS verwenden

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3.png){.thumbnail}

Diese Option erlaubt es, die Verwendung Ihrer eigenen DNS-Server zu kombinieren und gleichzeitig die OVHcloud DNS-Server für Ihre Domain aktiv zu halten. Diese Kombination erlaubt es zum Beispiel, den Zugang zu den verschiedenen mit Ihrer Domain verbundenen Dienstleistungen (Webhosting, E-Mail-Server etc.) zusätzlich zu sichern. Wenn eine Gruppe von DNS-Servern für einige Minuten nicht verfügbar ist, können die anderen deklarierten DNS-Server den Betrieb übernehmen.

Stellen Sie jedoch sicher, dass die Konfigurationen der DNS-Zonen auf den verschiedenen betroffenen DNS-Servern korrekt konfiguriert sind, damit sie alle zusammen funktionieren. In den meisten Fällen sind alle DNS-Server einsatzbereit. Sie alle werden in der Lage sein, auf zufällige Anfragen über das DNS-Netzwerk zu reagieren.

> [!warning]
>
> 1. Seien Sie vorsichtig, wenn Sie sich für letzteres entscheiden. Dafür sind fortgeschrittene Kenntnisse über die Funktionsweise des DNS-Netzwerks, der DNS-Server und der DNS-Zonen erforderlich.<br>
> 2. Die Option [DNSSEC](/pages/web_cloud/domains/dns_dnssec) muss deaktiviert werden, um die Verwendung Ihrer eigenen DNS-Server mit den DNS von OVHcloud zu kombinieren.<br>
> 3. Achten Sie darauf, eine OVHcloud-DNS-Servergruppe nicht mit einer anderen OVHcloud-DNS-Servergruppe zu mischen. Zum Beispiel entsprechen *dns19.ovh.net* und *ns19.ovh.net* einer Gruppe von OVHcloud DNS-Servern. Sie werden zusammen verwendet und synchronisiert. Bei OVHcloud können DNS-Servergruppen anhand der in den Servernamen angegebenen Nummer identifiziert werden. Zwei OVHcloud DNS-Server gehören derselben DNS-Servergruppe an, wenn sie dieselbe Nummer verwenden. Zum Beispiel *dns19.ovh.net* und *ns19.ovh.net*.

> [!success]
>
> Stellen Sie vor dem Hinzufügen eines DNS-Servers sicher, dass dieser **erreichbar ist** und eine DNS-Zone für Ihre Domain enthält. Stellen Sie außerdem sicher, dass diese DNS-Zone alle DNS-Einträge vom Typ „NS“ auf allen DNS-Servern enthält, die Sie für Ihre Domain deklarieren möchten.
>
> Zum Beispiel: Sie möchten die DNS-Server *ns1.dns-server.tld*, *dnsXX.ovh.net* und *nsXX.ovh.net* für Ihre Domain deklarieren. Überprüfen Sie, ob die folgenden drei Einträge vom Typ „NS“ in den 3 DNS-Zonen vorhanden sind, die auf diesen 3 DNS-Servern gehostet werden:
>
> - „Your own domain (or just an @)“ IN NS ns1.dns-server.tld.
> - „Your own domain (or just an @)“ IN NS dnsXX.ovh.net.
> - „Your own domain (or just an @)“ IN NS nsXX.ovh.net.
>

Um einen Ihrer eigenen DNS Server anzugeben, füllen Sie die 2 Formulare in der Box wie folgt aus:

- `DNS-Server`: Der Name des DNS-Servers, der auf Ihren Domainnamen angewendet werden soll.
- `Zugeordnete IP (optional)`: Die IP-Adresse (IPv4 oder IPv6) des angegebenen DNS-Servers. In diesem Formular kann nur eine **IP-Adresse** angegeben werden.

> [!warning]
>
> Jeder Eingabeframe (sichtbar im vorherigen Bildschirmfoto) darf jeweils nur **einen** DNS-Server enthalten. Ein DNS-Server entspricht also einem Kästchen.
>
> Ein Informationshinweis auf blauem Hintergrund über dem ersten Kasten zeigt den Bereich der DNS-Server an, die Sie für Ihren Domainnamen deklarieren können. Diese Werte variieren je nach Domainendung.

Wenn Sie alle Informationen eingegeben haben, klicken Sie auf den Button `+`{.action} rechts neben den 2 Formularen. Hier können Sie den DNS-Server hinzufügen und ein neues Eingabefeld unter dem vorherigen wird angezeigt.

Wiederholen Sie diesen Vorgang so oft, wie Sie DNS-Server hinzufügen möchten, und beachten Sie dabei die im Informationshinweis angegebenen Grenzwerte.
Klicken Sie auf den Button `+`{.action} für jeden DNS-Server, um dessen Eingabe und Hinzufügen zu bestätigen.

Sobald alle eigenen DNS Server hinzugefügt wurden, klicken Sie auf `Konfiguration anwenden`{.action}. Das folgende Fenster wird angezeigt:

![Modify DNS servers](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/modify-my-dns-servers-3-apply-configuration.png){.thumbnail}

Sie fasst die Namen der DNS-Server zusammen, die für Ihre Domain verwendet werden.
Wenn sie mit den gewünschten übereinstimmen, klicken Sie auf `Anwenden`{.action}.

Die alten deklarierten DNS-Server und die von ihnen angewendete DNS-Konfiguration werden für Ihren Domainnamen deaktiviert. Die DNS-Zonen auf Ihren eigenen DNS-Servern und den DNS-Servern von OVHcloud werden zu den aktiven Zonen für Ihre Domain.

### Schritt 3 - Änderung der DNS Server wird durchgeführt

Nachdem Sie Ihre Änderungen vorgenommen haben, müssen zwei aufeinanderfolgende Zeiträume berücksichtigt werden:

- Die *.fr* Registry, die Ihre Domainendung verwaltet (zum Beispiel die *.fr* Registry) muss über die von OVHcloud vorgenommene DNS-Änderung informiert werden. Verfolgen Sie den Fortschritt in Ihrem [OVHcloud Kundencenter](/links/manager). Gehen Sie hierzu in den Bereich `Web Cloud`{.action}, gehen Sie in der linken Spalte in den Bereich `Domainnamen`{.action} und klicken Sie dann auf `Laufende Vorgänge`{.action}.
- Warten Sie bis zu **48 Stunden** ab, nachdem die **Registry*-Informationen aktualisiert wurden, damit die Änderungen vollständig propagiert und wirksam werden.

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.