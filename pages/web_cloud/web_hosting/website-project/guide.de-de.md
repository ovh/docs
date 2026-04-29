---
title: "Erstellen Ihrer Website - So setzen Sie Ihr Projekt in 5 Schritten um"
excerpt: "Erfahren Sie hier, wie Sie Ihr Projekt definieren, Ihre Website veröffentlichen und E-Mail-Adressen mit Ihrer Webhosting-Lösung erstellen"
updated: 2026-05-04
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

OVHcloud bietet mehrere [Webhostings](/links/web/hosting) an. Sie sind für verschiedene Einsatzzwecke konzipiert:

- Erste Schritte im Web.
- Schnelles Erstellen einer Website (professionell oder nicht), eines Blogs, eines **C**ontent **M**anagement **S**ystem (**CMS**) wie *WordPress*, *Joomla!*, *PrestaShop* oder *Drupal* oder eines Onlineshops.
- Personalisieren von E-Mail-Adressen mit dem Domainnamen, den Sie für Ihre Website verwenden möchten.
- Verwaltung mehrerer Websites auf einem einzigen Webhosting.
- Verwaltung von Datenbanken ([bei einigen unserer Webhostings inklusive](/links/web/hosting)).
- Etc.

Diese Angebote ersparen Ihnen die Verwaltung der Wartung, der Updates und der Sicherheit einer Webhosting-Infrastruktur.  
So sparen Sie Zeit bei der Administration und können sich etwa auf Folgendes konzentrieren:

- Entwicklung, Aktualisierung und Sicherheit einer Website, eines Blogs, eines CMS oder eines Webshops
- Sicherheit und Optimierung einer oder mehrerer Datenbanken, wenn Ihr Angebot über solche verfügt
- Konfiguration und Verwaltung Ihrer E-Mail-Accounts inklusive bei Ihrem Webhosting

**Diese Anleitung erklärt, wie Sie Ihre Website online stellen und E-Mail-Adressen mit Ihrer Webhosting-Lösung erstellen.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben die E-Mail zur Installation Ihres Webhostings erhalten.
- Sie haben einen [Domainnamen](/links/web/domains).


## In der praktischen Anwendung

Ziel dieser Anleitung ist es, Ihnen die wichtigsten Aktionen aufzuzeigen, die mit unseren [Webhosting](/links/web/hosting) Lösungen durchgeführt werden können.  
Jede dieser Aktionen wird durch einen oder mehrere Links zu spezifischen Leitfäden (im Zusammenhang mit der jeweiligen Aktion) begleitet.

Sie können diese Anleitung als Einstieg für alle Webhosting-Aktionen verwenden, bevor und während Sie Ihr [Webhosting](/links/web/hosting) verwenden.

> [!primary]
> 
> Die Bezeichnung "Website" in dieser Anleitung bezieht sich auf alle Arten von Websites (Websites, Blogs, CMS, Webshops usw.), die weiter oben erwähnt werden.
>

**Inhaltsübersicht**

- [Schritt 1 - Projekt abgrenzen](#project-delimitation)
- [Schritt 2 - Website installieren](#website-installation)
- [Schritt 3 - E-Mail-Adressen erstellen (optional)](#email-creation)
- [Schritt 4 - Konfiguration Ihrer Domain überprüfen und/oder ändern](#domain-configuration)
- [Schritt 5 - Weitere Optionen für Webhostings](#other-options)

### Schritt 1 - Projekt abgrenzen <a name="project-delimitation"></a>

Bevor Sie beginnen, ist es wichtig, Ihre Bedürfnisse klar zu identifizieren und abzugrenzen, indem Sie sich folgende Fragen stellen: 

- Muss ich meine Website **erstellen** oder **migrieren** (von einem anderen Hosting-Anbieter)?
- Benötige ich eine oder mehrere Datenbanken, um meine Website zu betreiben?
- Benötige ich eine oder mehrere personalisierte E-Mail-Adressen mit meinem Domainnamen?

Je nach Ihren Antworten überprüfen Sie, ob Ihr [Webhosting](/links/web/hosting) Angebot Ihren Anforderungen entspricht, bevor Sie fortfahren.

Andernfalls nutzen Sie unsere Anleitung „[Webhosting: Wie kann ich mein Angebot wechseln?](/pages/web_cloud/web_hosting/how_to_upgrade_web_hosting_offer)“.

### Schritt 2 - Website installieren <a name="website-installation"></a>

Nachdem Sie das Projekt genau definiert haben, können Sie mit der Installation Ihrer Website beginnen.

Es gibt zwei Möglichkeiten: **Migrieren** einer vorhandenen Website oder **Erstellen** einer neuen Website.

**Klicken Sie die Optionen, um Erläuterungen anzuzeigen.**

/// details | Website migrieren

Wenn Sie eine Website von einem anderen Hosting-Anbieter migrieren möchten, lesen Sie unsere Anleitung „[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“. Dort finden Sie alle wesentlichen Schritte für eine unterbrechungsfreie Migration aller Ihrer Dienstleistungen (Domainname, Website, E-Mail-Adresse(n) etc.).

///

/// details | Erstellen einer neuen Website

Sie können Ihre Website vollständig selbst erstellen oder ein [CMS (Content Management System)](/links/web/hosting-cms-comparison) wie WordPress, PrestaShop, Joomla! oder Drupal verwenden. Klicken Sie je nach Ihrer Auswahl auf die Tabs:

> [!tabs]
> **Ein CMS verwenden**
>>
>> OVHcloud stellt Ihnen die Option „1-Klick-Module“ zur Verfügung.  
Wenn Sie in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt sind, können Sie mit dieser Option schnell die CMS *WordPress*, *Joomla!*, *PrestaShop* und *Drupal* auf dem Hosting installieren.
>>
>> Um diese Option zu verwenden, lesen Sie unsere Anleitung „[Installation Ihrer Website mit 1-Klick-Modulen (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)“.
>>
>> > [!primary]
>> >
>> > Wenn Sie Ihr CMS manuell installieren möchten, ohne die Option „1-Klick-Module“, lesen Sie unsere Dokumentation „[Manuelle Installation eines CMS auf einem Webhosting](/pages/web_cloud/web_hosting/cms_manual_installation)“.
>>
> **Selbst entwickelte Website veröffentlichen**
>>
>> Folgen Sie in diesem Fall unserer Anleitung „[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)“.  Sie finden dort alle notwendigen Schritte:
>>
>> - Platzieren Ihrer Website auf dem FTP-Speicherplatz Ihres Webhostings
>> - Ihrem Webhosting zugeordnete Datenbank erstellen
>> - Platzieren Ihrer lokalen Datenbank in der zu Ihrem Webhosting gehörenden Datenbank
>> - Ihre Datenbank mit der Website auf Ihrem Webhosting verbinden
>>

///

### Schritt 3 - E-Mail-Accounts erstellen (optional) <a name="email-creation"></a>

Ihr [Webhosting](/links/web/hosting) enthält eine oder mehrere E-Mail-Accounts, die Sie aktivieren können.

Befolgen Sie zunächst unsere Anleitung „[Die in Ihrem Webhosting inklusiven E-Mail-Accounts aktivieren](/pages/web_cloud/web_hosting/activate-email-hosting)“.

Wenn die Option aktiviert ist, lesen Sie unsere Anleitung „[E-Mail-Accounts mit MX Plan erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)“, um eine oder mehrere E-Mail-Adressen mit Ihrem Domainnamen zu personalisieren.

**Klicken Sie auf den unten stehenden Link, um die Erläuterungen anzuzeigen.**

/// details | Sonderfälle:
>
> - Wenn Sie eine Website migrieren und/oder es sich um E-Mail-Adressen handelt, die mit dem Domainnamen Ihrer Website verknüpft sind, lesen Sie unsere Anleitung „[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“. Dort finden Sie alle wesentlichen Schritte für eine unterbrechungsfreie Migration aller Ihrer Dienstleistungen (Domainname, Website, E-Mail-Adresse(n) etc.).
>
> - Wenn Sie bei der Bestellung Ihres Webhostings keinen Domainnamen hinzugefügt haben und die Option „E-Mail-Adresse(n) bei Ihrem Webhosting inklusive“ nutzen möchten, müssen Sie die Operation manuell über Ihr [OVHcloud Kundencenter](/links/manager) durchführen.

///

### Schritt 4 - Konfiguration Ihrer Domain überprüfen und/oder ändern <a name="domain-configuration"></a>

Ihre Website muss nun auf Ihrem Webhosting installiert sein, und Ihre E-Mail-Adressen müssen erstellt sein. Solange die Konfiguration Ihrer Domain mit den neuen Diensten unvollständig ist, funktionieren diese Elemente möglicherweise noch nicht.

Die Verbindung zwischen Ihrem Domainnamen und Ihren Diensten (Webhosting, E-Mail-Server, etc.) erfolgt im Wesentlichen über die aktive DNS-Zone Ihrer Domain und die darin enthaltenen DNS-Einträge.

> [!primary]
>
> Beachten Sie, dass eine Änderung in einer DNS-Zone eine Propagationszeit von 4 bis 24 Stunden erfordert, bevor sie voll wirksam ist.
>

**Klicken Sie auf den unten stehenden Link, um die Erläuterungen anzuzeigen.**

/// details |Sonderfälle:
>
> Wenn Sie eine Website und/oder E-Mail-Adressen migrieren, die dem Domainnamen Ihrer Website zugeordnet sind, lesen Sie unsere Anleitung „[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“. Dort finden Sie alle wesentlichen Schritte für eine unterbrechungsfreie Migration aller Ihrer Dienstleistungen (Domainname, Website, E-Mail-Adresse(n), etc.).

///

Um die Verbindung zwischen Ihrem Domainnamen und Ihrer Website auf Ihrem Webhosting zu prüfen oder zu ändern, **nutzen Sie unsere Anleitungen in dieser Reihenfolge:**

- [Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP): Hier finden Sie alle IP-Adressen unserer Webhosting-Infrastruktur. Diese Anleitung hilft Ihnen insbesondere bei Domainnamen, deren aktive DNS-Zone nicht bei OVHcloud verwaltet wird (oder die über einen anderen OVHcloud Kunden-Account verwaltet wird).
- [Wie verbinde ich einen Domainnamen mit einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website): Diese Anleitung erklärt, wie Sie einen Domainnamen zu einer Website hinzufügen, die auf Ihrem Webhosting vorhanden ist. Sie kann Ihnen auch dabei helfen, sicherzustellen, dass die Angabe Ihres Domainnamens auf der Website auf Ihrem Webhosting korrekt ist. Falls erforderlich, können Sie diese dann anpassen und anschließend die notwendigen Änderungen in der aktiven DNS-Zone Ihres Domainnamens vornehmen.
- [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit): In dieser Anleitung erfahren Sie, wie Sie eine bei OVHcloud vorhandene DNS-Zone bearbeiten. Sie wird verwendet, wenn die aktive DNS-Zone Ihrer Domain auf einem anderen OVHcloud Kunden-Account als Ihrem eingerichtet ist. Sie können damit auch auf die OVHcloud DNS-Zone Ihrer Domain zugreifen, um zu überprüfen, dass die für Ihre Domain in der DNS-Zone deklarierte IP-Adresse (Eintrag vom Typ *A* und/oder *AAAA*) mit der IP-Adresse Ihres Webhostings übereinstimmt.

Um die Verbindung zwischen Ihrem Domainnamen und Ihrem OVHcloud E-Mail-Angebot zu überprüfen und/oder zu ändern, lesen Sie die Anleitung „[MX-Eintrag für die E-Mail-Verwaltung konfigurieren](/pages/web_cloud/domains/dns_zone_mx)“: Dort finden Sie die Namen der OVHcloud E-Mail-Server sowie die Vorgehensweise, um Ihren Domainnamen auf diese Server verweisen zu lassen.

> [!primary]
>
> Wenn die aktive DNS-Zone für Ihre Domain nicht bei OVHcloud verwaltet wird:
> 
> - **Für die Verbindung zwischen Ihrem Domainnamen und Ihrem Webhosting**: Verwenden Sie die Anleitungen "[Verzeichnis von IP-Adressen für die Webhosting Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)" und "[Wie verbinde ich einen Domainnamen mit einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)", um die IP-Adresse Ihres Webhostings zu ermitteln und Ihren Domainnamen korrekt auf der Website auf Ihrem Webhosting zu deklarieren. Kontaktieren Sie anschließend den Anbieter, der die aktive DNS-Zone Ihres Domainnamens verwaltet, um diesen für Ihr Webhosting zu konfigurieren.
>
> - **Für die Verbindung zwischen Ihrem Domainnamen und Ihrem OVHcloud E-Mail-Dienst**: Sie benötigen nur die Anleitung „[MX-Eintrag für die E-Mail-Verwaltung konfigurieren](/pages/web_cloud/domains/dns_zone_mx)“, um die Namen der OVHcloud E-Mail-Server abzurufen, die in der aktiven DNS-Zone Ihrer Domain angegeben werden müssen. Wenden Sie sich anschließend an den Anbieter, der die aktive DNS-Zone Ihrer Domain verwaltet, damit diese auf die OVHcloud E-Mail-Server verweist.

### Schritt 5 - Weitere Optionen für Webhostings <a name="other-options"></a>

Abhängig von Ihrem [Webhosting Angebot](/links/web/hosting) sind zusätzliche Optionen / Angebote / Funktionen kostenlos verfügbar.

**Klicken Sie auf die unten stehenden Optionen, um Erläuterungen anzuzeigen.**

/// details | SSL Zertifikate

Mit SSL-Zertifikaten wird Ihre Website über HTTPS erreichbar gemacht. Dieses Protokoll verschlüsselt die Kommunikation zwischen Ihrem Webhosting und Besuchern Ihrer Website.

Sie können ein kostenloses SSL-Zertifikat von **Let's Encrypt** für jedes [Webhosting](/links/web/hosting) aktivieren.

Weitere Informationen zu den SSL-Zertifikaten (kostenlos oder kostenpflichtig), die auf Webhostings angeboten werden, finden Sie in unserer Anleitung „[SSL-Zertifikate auf Webhostings](/pages/web_cloud/web_hosting/ssl_on_webhosting)“.

///

/// details | Die CDN-Angebote

Alle unsere CDN-Angebote erlauben es, einen Teil Ihrer Website in den Cache zu legen. Dadurch verkürzen sich die Ladezeiten der Seiten, aus denen Ihre Website besteht, insbesondere für Besucher, die geografisch weit vom Rechenzentrum entfernt sind, in dem Ihr Webhosting betrieben wird.

Für Webhostings bietet OVHcloud 3 CDN-Varianten:

- **CDN Basic**
- **CDN Security**
- **CDN Advanced**

Weitere Informationen zum CDN finden Sie in unserer Anleitung „[Ihre Webseiten mit CDN beschleunigen](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)“.

> [!primary]
>
> Das Angebot **CDN Basic** ist nur bei **Performance** Webhostings kostenlos inklusive.
>
> Sie können nicht mehrere CDN-Varianten auf demselben Webhosting zusammenfassen.

///

/// details | Die Web Cloud Databases Datenbankserver

Wenn Sie über ein Webhosting **Performance** verfügen, können Sie kostenlos einen [Web Cloud Databases](/links/web/databases) Datenbankserver aktivieren.

Weitere Informationen zur Verwendung finden Sie in unserer Dokumentation „[Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)“.

///

/// details | E-Mails von Ihrer Website aus versenden

Alle unsere [Webhostings](/links/web/hosting) ermöglichen den kostenlosen Versand von E-Mails von Ihrer Website oder einem bestimmten Skript aus.

Weitere Informationen zu dieser Funktion finden Sie in unserer Anleitung „[Automatische E-Mails eines Webhostings verwalten](/pages/web_cloud/web_hosting/mail_function_script_records)“.

///

/// details | Geplante Tasks (CRON)

Mit CRON Tasks können Sie automatisch Skripte ausführen, die auf Ihrem Webhosting gehostet werden.

Wenn Ihr [Webhosting](/links/web/hosting) über diese Option verfügt, lesen Sie unsere Anleitung „[Automatische Tasks mit einem Webhosting verwendenn](/pages/web_cloud/web_hosting/cron_tasks)“ für weitere Informationen.

///

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Website online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Eine E-Mail-Adresse erstellen](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_creation)

[SSL-Zertifikate auf Webhostings](/pages/web_cloud/web_hosting/ssl_on_webhosting)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
