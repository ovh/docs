---
title: "Alle Ihre Websites im OVHcloud Kundencenter anzeigen und verwalten"
excerpt: "Erfahren Sie hier, wie Sie alle Ihre Websites über das OVHcloud Kundencenter anzeigen und verwalten"
updated: 2026-05-04
---

## Ziel

Das in dieser Anleitung vorgestellte Interface ermöglicht es Ihnen, alle Ihre Websites zentral anzuzeigen, unabhängig vom jeweiligen Hosting. Dieses Interface macht es einfach zu verfolgen, welche Funktionen für jede Website aktiviert sind, und gibt schnellen Zugriff auf wichtige Aktionen. Es ist besonders nützlich für Agenturen oder Web-Experten, die eine große Anzahl von Domainnamen verwalten, die über mehrere Hosting-Pakete verteilt sind.

**Diese Anleitung erklärt, wie Sie alle Ihre Websites anzeigen und verwalten.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).

<!-- CP-NAV-START:web-website-view -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Websites](/links/control-panel/web-website-view)
- **Navigationspfad:** `Web Cloud`{.action} > `Websites`{.action} > Wählen Sie Ihre Website aus

---
<!-- CP-NAV-END:web-website-view -->

## In der praktischen Anwendung

<!-- CP-STEPS-START:view-websites -->
Klicken Sie auf die nachfolgenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Websites](/links/control-panel/web-website-view). Eine Tabelle wird angezeigt, die alle Ihre Websites und ihre wichtigsten Informationen enthält.
>>
>> ![website_Ansicht](images/website_view_tab.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Die Tabelle enthält folgende Spalten:
>>
>> - **Domainname**: zeigt den Hauptdomainnamen der Website an, wie er in dem Tab „Meine Seiten” Ihres Hostings konfiguriert ist.
>> - **Diagnose**: zeigt an, ob Ihr Domainname korrekt auf das zugehörige Webhosting verweist. Weitere Details finden Sie in unserer Anleitung „[Wie prüfe ich die Zuordnung „Domain / Website”?](/pages/web_cloud/web_hosting/my_websites_diagnosis)”.
>> - **Wurzelverzeichnis**: gibt das Verzeichnis in Ihrem Webhosting an (www, app, public_html, etc.), auf das der Domainname verweist.
>> - **Name des Dienstes**: technischer Name des Dienstes in der Form `FTPlogin.clusterXXX.hosting.ovh.net`.
>> - **Anzeigename**: benutzerdefinierter Alias zur Identifizierung Ihres Dienstes im Kundencenter.
>> - **Angebot**: zeigt die Webhosting-Reihe an: Starter, Personal, Professional oder Performance.
>> - **Git**: zeigt den Status der Git-Integration auf der Website an. Weitere Details finden Sie in unserer Anleitung „[Git auf Ihrem OVHcloud Webhosting konfigurieren und verwenden](/pages/web_cloud/web_hosting/git_integration_webhosting)”.
>> - **Getrennte Logs**: gibt an, ob ein Log-Bereich für die Domain aktiviert ist (nur OVHcloud-Domainnamen). Weitere Informationen finden Sie auf unserer Seite „[Verfolgen und analysieren Sie den Traffic auf Ihren Webseiten](/links/web/hosting-traffic-analysis)”.
>> - **CDN**: zeigt den CDN-Status an: Aktiv / Inaktiv / N/A (Angebot nicht kompatibel). Weitere Informationen finden Sie auf unserer Seite „[Shared CDN](/links/web/hosting-options-cdn)”.
>> - **SSL**: gibt an, ob SSL aktiviert ist und eine sichere Verbindung (**https://**) ermöglicht. Weitere Informationen finden Sie auf unserer Seite „[Effiziente Absicherung Ihrer OVHcloud Website mit einem Premium-SSL-Zertifikat](/links/web/hosting-options-ssl)”.
>> - **Firewall**: gibt an, ob die Anwendungsfirewall für den Domainnamen aktiviert ist. Weitere Informationen finden Sie auf unserer Seite „[Unverzichtbare Optionen für Ihr Webhosting](/links/web/hosting-options)”.
>> - **Boost**: gibt an, ob die Boost-Option aktiviert ist, um vorübergehend die CPU- und RAM-Ressourcen zu erhöhen. Weitere Details finden Sie in unserer Anleitung „[Webhosting - Wie kann ich mein Angebot wechseln](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)”.
>>
>> Wenn Sie auf ein Element in der Tabelle klicken, werden Sie zum entsprechenden [Webhosting](/links/control-panel/web-hosting) weitergeleitet. Im Detail:
>>
>> - Die Spalten **Domainname**, **Diagnose**, **Wurzelverzeichnis**, **Git**, **Getrennte Logs**, **CDN**, **SSL** und **Firewall** leiten zum Tab `Meine Seiten`{.action} weiter.
>> - Die Spalten **Name des Dienstes**, **Anzeigename** und **Angebot** leiten zum Tab `Allgemeine Informationen`{.action} weiter.
>> - Die Spalte **Boost** leitet zum Tab `Mein Angebot boosten`{.action} weiter.
>>
>> > [!warning]
>> > Separate Logs können für einen externen Domainnamen nicht aktiviert werden. Diese Option steht nur für Domainnamen zur Verfügung, die bei OVHcloud registriert sind.
>>
<!-- CP-STEPS-END:view-websites -->

## Weiterführende Informationen <a name="go-further"></a>
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
