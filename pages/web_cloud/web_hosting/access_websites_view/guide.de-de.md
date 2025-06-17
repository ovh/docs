---
title: "Alle Ihre Websites im OVHcloud Kundencenter anzeigen und verwalten"
excerpt: "Erfahren Sie hier, wie Sie alle Ihre Websites über das OVHcloud Kundencenter anzeigen und verwalten"
updated: 2025-05-27
---

## Ziel

Die Ansicht `Websites` ermöglicht es Ihnen, alle Ihre Websites zentral anzuzeigen, unabhängig vom jeweiligen Hosting. Dieses Interface macht es einfach zu verfolgen, welche Funktionen für jede Website aktiviert sind, und gibt schnellen Zugriff auf wichtige Aktionen. Es ist besonders nützlich für Agenturen oder Web-Experten, die eine große Anzahl von Domainnamen verwalten, die über mehrere Hosting-Pakete verteilt sind.

**Diese Anleitung erklärt, wie Sie alle Ihre Websites anzeigen und verwalten.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).

## In der praktischen Anwendung

### Ansicht `Websites`

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie zum Bereich `Web Cloud`{.action}. Klicken Sie im linken Menü auf `Websites`{.action}. Eine Tabelle mit allen Websites und den wichtigsten Informationen wird angezeigt.

![website_Ansicht](images/website_view_tab.png){.thumbnail}

#### Domainname

Zeigt den primären Domainnamen der Website an, wie er in der Multisite-Verwaltung Ihres Hostings konfiguriert wurde.

Wenn Sie hier klicken, werden Sie auf den Tab `Multisite`{.action} für das betreffende Webhosting weitergeleitet.

#### Diagnose

Zeigt an, ob Ihr Domainname korrekt auf das zugehörige Webhosting verweist. Für jeden Domainnamen gibt es drei mögliche Diagnoseergebnisse:

- `A/AAAA` grün: Die A- und/oder AAAA-Einträge Ihrer Domain verweisen korrekt auf die IP-Adresse Ihres Webhostings.
- `A/AAAA` gelb: Die A- und/oder AAAA-Einträge für Ihren Domainnamen verweisen auf eine IP-Adresse, die sich von der IP-Adresse Ihres Webhostings unterscheidet.
- `A/AAAA` grau: Es ist kein A- oder AAAA-Eintrag konfiguriert. Ihr Domainname verweist auf keine IP-Adresse.

Wenn Sie hier klicken, werden Sie auf den Tab `Multisite`{.action} für das betreffende Webhosting weitergeleitet.

Weitere Informationen zur Diagnose finden Sie im Abschnitt "Diagnose Ihrer Domainnamen" in unserer Anleitung „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)“.

#### Wurzelverzeichnis

Gibt das Verzeichnis in Ihrem Webhosting an (zum Beispiel: www, app, public_html, etc.), auf das der Domainname verweist.

Wenn Sie hier klicken, werden Sie auf den Tab `Multisite`{.action} für das betreffende Webhosting weitergeleitet.

#### Name des Dienstes

Technischer Name des Webhosting-Dienstes, auf dem die Website konfiguriert ist, in der Form `abcdv.clusterXX.hosting.ovh.net`.

Wenn Sie hier klicken, werden Sie auf den Tab `Allgemeine Informationen`{.action} für das betreffende Webhosting weitergeleitet.

#### Anzeigename

Ein benutzerdefinierter Alias, der hilft, Dienste im Kundencenter besser zu identifizieren.

Wenn Sie hier klicken, werden Sie auf den Tab `Allgemeine Informationen`{.action} für das betreffende Webhosting weitergeleitet.

#### Angebot

Zeigt die Webhosting-Reihe an: Starter, Personal, Professional oder Performance.

Wenn Sie hier klicken, werden Sie auf den Tab `Allgemeine Informationen`{.action} für das betreffende Webhosting weitergeleitet.

#### Git

Zeigt den Status der Git-Integration auf der Website an:

- Aktiv: Das Git-Repository ist verbunden.
- Inaktiv: Das Git-Repository ist nicht aktiviert.
- In Bearbeitung: Das Git-Repository wird konfiguriert.
- Fehler: In der Konfiguration des Git-Repositorys wird ein Fehler erkannt.

Wenn Sie hier klicken, werden Sie auf den Tab `Multisite`{.action} für das betreffende Webhosting weitergeleitet.

#### Getrennte Logs

Gibt an, ob separate Logs für einen Domainnamen aktiviert sind.

Wenn Sie hier klicken, werden Sie auf den Tab `Multisite`{.action} für das betreffende Webhosting weitergeleitet.

Weitere Informationen finden Sie auf unserer Seite „[Verfolgen und analysieren Sie den Traffic auf Ihren Webseiten](/links/web/hosting-traffic-analysis)“.

> [!warning]
>
> Separate Logs können für einen externen Domainnamen nicht aktiviert werden. Diese Option steht nur für Domainnamen zur Verfügung, die bei OVHcloud registriert sind.
>

##### CDN

Zeigt den Status des CDN (**C**ontent **D**elivery **N**etwork) auf dem Domainnamen an:

- Aktiv: Das CDN funktioniert.
- Inaktiv: Das CDN ist deaktiviert.
- N/A: Nicht anwendbar (Angebot nicht kompatibel).

Wenn Sie hier klicken, werden Sie auf den Tab `Multisite`{.action} für das betreffende Webhosting weitergeleitet.

Mit dem CDN können Sie statische Elemente Ihrer Website, wie Bilder, zwischenspeichern. Weitere Informationen finden Sie auf unserer Seite „[Shared CDN](/links/web/hosting-options-cdn)“.

#### SSL

Gibt an, ob SSL für den betreffenden Domainnamen aktiviert ist.

Wenn Sie hier klicken, werden Sie auf den Tab `Multisite`{.action} für das betreffende Webhosting weitergeleitet.

Mit einem SSL-Zertifikat ermöglichen Sie eine sichere Verbindung (**https://**) für den ausgewählten Domainnamen. Besuchen Sie unsere Seite „[Effiziente Absicherung Ihrer OVHcloud Website mit einem Premium-SSL-Zertifikat](/links/web/hosting-options-ssl)“ für weitere Informationen.

#### Firewall

Gibt an, ob die Anwendungsfirewall für den Domainnamen aktiviert ist.

Wenn Sie hier klicken, werden Sie auf den Tab `Multisite`{.action} für das betreffende Webhosting weitergeleitet.

Weitere Informationen finden Sie auf unserer Seite „[Unverzichtbare Optionen für Ihr Webhosting](/links/web/hosting-options)“.

#### Boost

Gibt an, ob die Boost-Option in Ihrem Webhosting aktiviert ist. Mit der Boost-Option können Sie die CPU- und RAM-Ressourcen Ihres Webhostings vorübergehend erhöhen.

Wenn Sie hier klicken, werden Sie zum Tab `Mein Angebot boosten`{.action} für das betreffende Webhosting weitergeleitet.

Weitere Informationen zur Boost-Option finden Sie im Abschnitt „Ihr Performance Hosting vorübergehend boosten“ in unserer Anleitung „[Webhosting - Wie kann ich mein Angebot wechseln](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)“.

## Weiterführende Informationen <a name="go-further"></a>
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
