---
title: "Alle Informationen zu DNS-Servern"
excerpt: "Erfahren Sie hier, welche Rolle DNS-Server spielen, was sie enthalten und wie sie mit einem Domainnamen funktionieren"
updated: 2024-06-17
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

**D**omain **N**ame **S**ystem bezeichnet einen Satz von Elementen (DNS-Server, DNS-Zonen, etc.), mit denen ein Domainname IP-Adressen zugeordnet werden kann.

**Diese Anleitung erklärt die Rolle der DNS-Server, was sie enthalten und wie sie mit einem Domainnamen zusammenarbeiten.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## In der praktischen Anwendung

### Funktion der DNS-Server

Alle **DNS-Server** bilden zusammen das sogenannte DNS-Netzwerk.

Dieses DNS-Netzwerk erleichtert den Benutzern den Zugriff auf das Internet und die verschiedenen damit verbundenen Dienste (Websites, Online-Messaging-Dienste, etc.).

Sie ermöglichen insbesondere die Verwendung von [Domainnamen](/links/web/domains), um auf Websites zuzugreifen, ohne dass Sie sich die IP-Adresse des Servers merken müssen, auf dem diese Website gehostet ist.

![DNS-Auflösung](/pages/assets/schemas/dns/dns-resolution.png){.thumbnail}

Es gibt 4 Arten von DNS-Servern.

Unten finden Sie eine Tabelle, in der diese 4 Arten von DNS-Servern und ihre Interaktionen dargestellt werden. Die Beispiele in der Tabelle basieren auf einer DNS-Abfrage, die von einem Webbrowser gesendet wird, um die IP-Adresse von *domain.tld* zu ermitteln.

|DNS-Servertyp|Beschreibung|Beispiel|
|---|---|---|
|DNS-Resolver (DNS Resolver oder DNS Recursive)|Der erste Server, der die DNS-Abfrage von einem Client (Webbrowser, E-Mail-Programm usw.) empfängt. Dieser Schritt wird durch den **1**-Schritt im obigen Diagramm dargestellt. Dieser Server überbrückt den Client mit dem Rest des DNS-Netzwerks. Er fragt die anderen drei DNS-Servertypen ab, bis er die von der DNS-Abfrage angeforderte IP-Adresse vom autorisierenden DNS-Server abruft. Der Client sendet die DNS-Abfrage, um die IP-Adresse der Domain *domain.tld* zu ermitteln. |Der Webbrowser sendet eine DNS-Anfrage, um die IP-Adresse der Domain *domain.tld* zu ermitteln. So sehen Sie den Server, auf dem die mit der Domain *domain.tld* verbundene Website gehostet wird.|
|Root-DNS-Server (DNS Root)|Enthält ein Verzeichnis für alle TLDs (Top Level Domains wie *.com*, *.net*, *.de*, etc.). Der DNS-Resolver teilt dem DNS-Resolver die Adresse des DNS-TLD-Servers mit, die der Erweiterung entspricht, die in der vom Client angeforderten DNS-Abfrage enthalten ist (Schritte **2** und **3** des obigen Schemas).|Der DNS-Resolver übergibt die für *domain.tld* empfangene DNS-Abfrage an den Root-DNS-Server und empfängt als Antwort die Adresse des DNS-TLD-Servers, der die Erweiterung *.tld* verwaltet.|
|DNS-Server mit Erweiterungen/Domainnamen der obersten Ebene (DNS TLD)|Enthält ein Domainnamenverzeichnis für eine bestimmte Erweiterung. Der DNS-Resolver teilt dem DNS-Resolver die Adresse des autorisierenden DNS-Servers mit, die dem Domainnamen entspricht, der in der vom Client angeforderten DNS-Abfrage enthalten ist (Schritte **4** und **5** des obigen Schemas).|Der DNS-Resolver sendet dann die empfangene DNS-Abfrage für *domain.tld* an den DNS TLD-Server, der die Erweiterungen in *.tld* verwaltet, und empfängt als Antwort die Adresse des autorisierenden DNS-Servers, der die DNS-Zone der Domäne *domain.tld* verwaltet.|
|Reference DNS-Server (Authoritative DNS)|Der letzte vom DNS-Resolver abgefragte DNS-Server (Schritte **6** und **7** im obigen Schema). Es enthält die aktive DNS-Zone für den Domainnamen, der in der vom Client angeforderten DNS-Abfrage vorhanden ist. Dies ist der Inhalt dieses DNS-Servers, den wir im Folgenden näher beschreiben.|Der DNS-Resolver sendet dann die DNS-Abfrage, die er für *domain.tld* erhalten hat, an den autorisierenden DNS-Server, der die DNS-Zone der Domain *domain.tld* verwaltet, und empfängt als Antwort die IP-Adresse (Beispiel: 203.0.113.0) des Servers, der die Website der Domain *domain.tld* hostet.|

Sobald der DNS-Resolver die IP-Adresse des Servers abgerufen hat, nach der über die vom Client angeforderte DNS-Abfrage gesucht wurde, sendet er diese IP-Adresse an den Client zurück (Schritt **8** des obigen Schemas).

Anschließend sendet der Client eine weitere Anfrage direkt an den Server, der der IP-Adresse zugeordnet ist, die er mithilfe der DNS-Auflösung abgerufen hat (Schritt **9** des obigen Schemas). Dies ermöglicht es ihm, eine Verbindung mit dieser zweiten Abfrage herzustellen oder die Elemente abzurufen, die er zum Auflösen dieser zweiten Abfrage benötigt (Schritt **10** im obigen Schema). In unserem Beispiel fragt der Client (Webbrowser) den Server mit der IP-Adresse 203.0.113.0 ab, um den Inhalt abzurufen, der für die Webseite *domain.tld* angezeigt werden soll.

Lesen Sie unsere Anleitung „[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)“, wenn Sie diese Aktion für einen bei OVHcloud registrierten Domainnamen durchführen möchten.

### Inhalt eines DNS-Servers (Authoritative)

Ein **DNS-Server (Authoritative)** enthält ein Verzeichnis von Domainnamen, die verschiedene Domainendungen (TLDs) haben können.

Jedem im Verzeichnis enthaltenen Domainnamen ist eine **DNS-Zone** zugeordnet, die die DNS-Konfiguration enthält, die auf den Domainnamen angewendet werden soll.

Eine DNS-Zone enthält technische Informationen, die als *DNS-Einträge* bezeichnet werden.

> [!success]
>
> - Weitere Informationen zu DNS-Zonen finden Sie in unserer Anleitung „[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)“.
> - Lesen Sie anschließend unsere Anleitung zu [DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records), um einen besseren Überblick zu erhalten.
>

Aus diesem Grund müssen **DNS-Server (Authoritative)** bei der zuständigen Domainnamen-Registry angemeldet werden, um die von ihnen gehostete DNS-Zone zu verwenden.

![DNS](/pages/assets/schemas/dns/dns-server.png){.thumbnail}

### Funktionsweise eines DNS-Servers (Authoritative) mit einem Domainnamen

#### Anmeldung der DNS-Server bei der Registry einer Domain

Damit die DNS-Zone, die einem Domainnamen im Verzeichnis eines DNS-Servers zugeordnet ist, aktiv ist, muss dieser DNS-Server bei der Domainnamen-Registrierungsstelle angemeldet sein.

Als Vorsichtsmaßnahme werden mindestens 2 **DNS-Server (Authoritative)** (ein primärer und ein sekundärer DNS-Server) beim Registrar einer Domain angemeldet. Beide funktionieren auf identische Weise. Wenn jedoch einer der beiden schneller reagiert, wird er von den DNS-Resolvern abgefragt. Wenn einer der Server nicht oder nicht mehr antwortet, wird der andere DNS-Server die DNS-Abfrage beantworten.

Manchmal bieten DNS-Anbieter mehr als 2 **DNS-Server (Authoritative)** an, die für Ihren Domainnamen deklariert werden müssen. Geben Sie in diesem Fall alle von Ihrem DNS-Anbieter angebotenen DNS-Server ein.

## Weiterführende Informationen

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)

[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
