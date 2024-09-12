---
title: 'DNS-Server eines OVHcloud Domainnamens ändern'
excerpt: 'Erfahren Sie hier, wie Sie DNS-Server im OVHcloud Kundencenter bearbeiten'
updated: 2024-09-16
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

**D**omain **N**ame **S**ystem bezeichnet einen Satz von Elementen (DNS-Server, DNS-Zonen, etc.), mit denen ein Domainname IP-Adressen zugeordnet werden kann.

Weitere Informationen finden Sie in unseren Anleitungen „[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)“ und „[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)“.

**Diese Anleitung erklärt, wie Sie die DNS-Server eines OVHcloud Domainnamens ändern.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über eine bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie verfügen über die [entsprechenden Berechtigungen](/pages/account_and_service_management/account_information/managing_contacts){.external} für die Verwaltung des Domainnamens über Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

> [!primary]
>
> Ein **Domainnamen-Registrar** ist ein Diensteanbieter, der authorisiert ist, Domainnamen zur Registrierung seitens Privatpersonen, Unternehmen oder sonstigen Organisationen anzubieten. OVHcloud gehört zu diesen **Registraren**.
>
> Wenn Ihre Domain nicht bei OVHcloud registriert ist, müssen Sie die DNS-Server bei dem **Registrar** ändern, bei dem Ihr Domainname derzeit verwaltet wird.
>

## In der praktischen Anwendung

> [!warning]
>
> **Wir raten zur Vorsicht, wenn Sie die DNS-Server einer Domainnamen ändern.** Fehlkonfigurationen können dazu führen, dass Ihre Website nicht mehr erreichbar ist, oder dass Ihre E-Mail-Adressen keine neuen E-Mails mehr empfangen können. Im Folgenden erklären wir die Auswirkungen von Konfigurationsänderungen, um Ihnen zu helfen, die Konsequenzen besser einzuschätzen.
>

Wenn Sie die DNS-Server Ihres Domainnamens ändern, ändern Sie dessen DNS-Konfiguration. Die neue DNS-Konfiguration liegt auf den neuen DNS-Servern und ersetzt die alte. Der Domainname verwendet dann eine neue DNS-Zone.

Beachten Sie:

- Wenn neue DNS-Server deklariert werden (beispielsweise wenn von externen Servern zu OVHcloud DNS-Server gewechselt wird), wird die alte DNS-Konfiguration nicht automatisch in die neue repliziert. Stellen Sie sicher, dass Ihre neue DNS-Zone alle DNS-Einträge enthält, die erforderlich sind, damit die Dienste Ihres Domainnamens korrekt funktionieren (z.B. Ihre Website und Ihre E-Mail-Adressen).

- Wenn Sie nur einzelne Elemente Ihrer aktuellen DNS-Konfiguration ändern möchten (also einen DNS-Eintrag), empfehlen wir stattdessen, unsere [Anleitung zur Änderung der DNS-Zone](/pages/web_cloud/domains/dns_zone_edit) zu befolgen.

- Vereinzelt haben die Organisationen, die Domainendungen verwalten (Registrys), besondere Anforderungen an die DNS-Server (Anzahl der Server, Vorgaben für Einträge, etc.). Überprüfen Sie im Zweifelsfall die Regeln der zuständigen Registry der Domainnamen-Endung.

Stellen Sie sicher, dass Ihr Domainname aufgrund der Änderungen nicht unerreichbar wird. Wenn Sie sich nicht sicher sind, kontaktieren Sie die Person, die Sie um Änderungen ersucht.

### Zugang zur Verwaltung der OVHcloud DNS-Server

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus. Gehen Sie dann auf den Tab `DNS-Server`{.action}.

Die Tabelle listet die DNS-Server auf, die derzeit von OVHcloud für Ihren Domainnamen definiert sind. Es werden üblicherweise mehrere DNS-Server angezeigt. Eine Tabellenzeile entspricht dabei jeweils einem Server.

> [!primary]
>
> Wenn Sie die regulären OVHcloud DNS-Server verwenden, haben die in den Servernamen enthaltenen Nummern keinen Bezug zu den von Ihnen verwendeten Diensten. Nur die Option [DNS Anycast](/links/web/domains-options) verwendet spezielle DNS-Server, die automatisch zugewiesen werden. 

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/tab.png){.thumbnail}

### DNS-Server ändern

Wenn Sie externe DNS-Server deklarieren möchten, müssen die aktuellen OVHcloud Server **ersetzt** werden, anstatt sie der Konfiguration hinzuzufügen.

Klicken Sie rechts auf `DNS-Server ändern`{.action}.

Ersetzen Sie in den Textfeldern die aktuellen Werte der DNS-Server mit den Namen der neuen Server, die Sie hinterlegen möchten. Um weitere Server zur Liste hinzuzufügen, klicken Sie rechts neben der letzten Tabellenzeile auf `+`{.action}. Es wird eine neue Tabellenzeile angefügt, in die Sie die entsprechenden Informationen eintragen können.

> [!warning]
>
> Achten Sie darauf, eine Gruppe von DNS-Servergruppe nicht mit einer anderen zu mischen. 
>
> Zum Beispiel entsprechen *dns19.ovh.net* und *ns19.ovh.net* einer Gruppe von OVHcloud DNS-Servern; diese werden synchronisiert. Wenn Sie externe DNS-Server zu OVHcloud Servern hinzufügen (oder die einer anderen Gruppe), erfolgt die DNS-Auflösung zufällig unter den OVHcloud DNS-Servern und den externen DNS-Servern.
>
> Bei OVHcloud können DNS-Servergruppen anhand der in den Servernamen angegebenen Nummer identifiziert werden, zum Beispiel gehören *dns19.ovh.net* und *ns19.ovh.net* zur selben Gruppe.
>

Wenn Sie die Server eingetragen haben, klicken Sie auf `Konfiguration anwenden`{.action}. Der Status der DNS-Server wird nun entsprechend der von Ihnen vorgenommenen Änderungen in der Tabelle aktualisiert.

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/edit-dns-servers.png){.thumbnail}

> [!success]
>
> Die Änderung der DNS-Server eines Domainnamens führt zu einer Propagationsverzögerung von **24** bis **48** Stunden, bis diese Änderung wirksam wird.
>

### Sonderfall: DNS-Server zurücksetzen 

Mit dem Button `DNS-Server zurücksetzen`{.action} kann die OVHcloud DNS-Konfiguration automatisch wiederhergestellt werden, indem die ursprünglich zugewiesenen OVHcloud DNS-Server eingetragen werden. Verwenden Sie diese Option **ausschließlich**, wenn Sie die OVHcloud DNS-Server (und die dazugehörige OVHcloud DNS-Zone) verwenden möchten.

![dns-server](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-servers/reset-the-dns-servers.png){.thumbnail}

Nachdem die Änderungen vorgenommen wurden, dauert es eine gewisse Zeit, bis diese effektiv sind. Dabei sind zwei aufeinanderfolgende Vorgänge zu beachten:

- Die bei OVHcloud vorgenommene Änderung muss von der Registry, die die Domainendung verwaltet, übernommen werden (z.B. der DENIC für *.de*). Sie können den Fortschritt dieser Operation in Ihrem [OVHcloud Kundencenter](/links/manager) nachverfolgen, indem Sie im Bereich `Domainnnamen`{.action} auf `Laufende Vorgänge`{.action} klicken.
- Nachdem die Registry Ihrer Domainendung die Änderung angenommen hat, ist eine Propagationszeit von maximal **48 Stunden** erforderlich, bis sie voll wirksam ist.

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.