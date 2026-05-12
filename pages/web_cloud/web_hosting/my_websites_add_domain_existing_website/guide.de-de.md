---
title: "Wie kann ich einen Domainnamen mit einer bestehenden Website verknüpfen?"
excerpt: "Erfahren Sie, wie Sie einen Domainnamen oder eine Unterdomain mit einer bereits bestehenden Website auf Ihrem Webhosting verknüpfen können"
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

Sie können mehrere Websites auf einem Webhosting-Plan hosten, selbst wenn die Domainnamen nicht bei OVHcloud registriert sind. Zudem können Sie einen oder mehrere Domainnamen oder Unterdomänen mit derselben Website verknüpfen.

> [!primary]
> Falls Sie die betreffende Website noch nicht auf Ihrem Webhosting erstellt haben, konsultieren Sie **direkt** [dieses Handbuch](/pages/web_cloud/web_hosting/multisites_configure_multisite).

**Erfahren Sie, wie Sie einen Domainnamen oder eine Unterdomain mit einer bereits bestehenden Website auf Ihrem Webhosting verknüpfen können.**

## Voraussetzungen

- Ein kompatibler [OVHcloud Webhosting-Plan](/links/web/hosting-multisite) besitzen.
- Einen oder mehrere [Domainnamen](/links/web/domains) besitzen.
- Die Konfiguration Ihrer Domainnamen über deren [DNS-Zonen](/pages/web_cloud/domains/dns_zone_edit) anpassen können.

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

### Einen Domainnamen oder eine Unterdomain zu einer bestehenden Website hinzufügen

**Klicken Sie auf einen der untenstehenden Titel, um die Erklärungen anzuzeigen.**

<a name="add-domain-ovhcloud"></a>

/// details | Einen Domainnamen hinzufügen, der über Ihr OVHcloud Kundencenter verwaltet wird

Dieser Abschnitt gilt nur, wenn Ihr Domainname und/oder seine aktive DNS-Zone **in Ihrem OVHcloud Kundencenter** verwaltet wird.

Klicken Sie auf die Tabs, um die **6** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben der betreffenden Website und anschließend auf `Eine Domain hinzufügen`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Aktivieren Sie die Option `Einen bestehenden OVHcloud-Domain zuordnen`{.action} und klicken Sie auf `Weiter`{.action}.
>>
>> Wählen Sie anschließend den zu verknüpfenden Domainnamen im Dropdown-Menü **Domainname - erforderlich** aus, das darunter angezeigt wird.
>>
>> > [!primary]
>> > Um eine Unterdomain hinzuzufügen, wählen Sie zunächst den Domainnamen aus der Liste aus (z. B. domain.tld). Aktivieren Sie anschließend das Feld `Subdomain erstellen`{.action}. Ein Eingabefeld wird angezeigt, in das Sie die Unterdomain eingeben können (z. B. **sub**.domain.tld).
>> >
>> > **Besonderheit**: Unterdomänen mit `www` (z. B. **www**.domain.tld) werden automatisch ergänzt. Daher ist es nicht notwendig, diese spezielle Unterdomain im Eingabefeld anzugeben.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}
>>
>> Wenn Sie eine der **erweiterten Optionen** nutzen möchten, aktivieren Sie den Button `Erweiterte Konfiguration`{.action} und springen Sie direkt zu **Schritt 7**. Andernfalls fahren Sie mit **Schritt 6** fort.
>>
> **Schritt 5**
>>
>> Stellen Sie sicher, dass alle vorher eingegebenen Informationen korrekt sind, und klicken Sie auf `Weiter`{.action}, um die Verknüpfung Ihres Domainnamens oder Ihrer Unterdomain mit Ihrer Website abzuschließen.
>>
>> Dieser Vorgang kann bis zu eine Stunde dauern.
>>
>> Die DNS-Konfiguration wird automatisch durchgeführt, sofern die aktive DNS-Zone Ihres Domainnamens in Ihrem OVHcloud Kundencenter verwaltet wird.
>>
>> Andernfalls konsultieren Sie die folgenden Handbücher, um Ihre DNS-Zone manuell zu konfigurieren:
>>
>> - [Webhosting - Liste der IP-Adressen pro Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > Die Änderung der DNS-Konfiguration Ihres Domainnamens benötigt eine Ausbreitungszeit, die bis zu 24 Stunden dauern kann, bis sie vollständig wirksam ist.
>>
> **Schritt 6**
>>
>> > [!primary]
>> >
>> > Dieser Schritt ist **optional**. Er richtet sich ausschließlich an Kunden, die bestimmte Funktionen über den Button `Erweiterte Konfiguration`{.action} aktivieren möchten.
>> >
>> > **Alle diese Funktionen können auch später aktiviert werden, nachdem der Domainname zu Ihrer Website hinzugefügt wurde.** In diesem Fall konsultieren Sie direkt [dieses Handbuch](/pages/web_cloud/web_hosting/multisites_modify_domain).
>> >
>> > Untenstehend finden Sie eine Beschreibung dieser Optionen.
>> >
>> > Abhängig von Ihrem [Webhosting-Plan](/links/web/hosting) können einige der angebotenen Optionen nicht ausgewählt werden.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Option|Beschreibung|
>> |---|---|
>> |IP des Landes|Ermöglicht Ihnen, eine geolokalisierte IP-Adresse (aus einer Liste von Ländern) für den ausgewählten Domainnamen zu nutzen.<br> Erfahren Sie mehr auf [dieser Seite](/links/web/hosting-options).|
>> |Firewall|Ermöglicht Ihnen, eine Firewall (Filterung und Analyse von Anfragen) für den ausgewählten Domainnamen zu aktivieren.<br> Erfahren Sie mehr auf [dieser Seite](/links/web/hosting-options).|
>> |CDN|Ermöglicht Ihnen, das CDN (Caching von statischen Elementen Ihrer Website, wie z. B. Bilder) für den ausgewählten Domainnamen zu aktivieren.<br> Erfahren Sie mehr auf [unserer CDN-Seite](/links/web/hosting-options-CDN).<br> Durch Aktivierung von SSL und CDN können Sie zudem auch vom Protokoll **HTTP/2** profitieren (dieses Protokoll ist standardmäßig in unserem Gravelines-Datencenter aktiviert).|
>>
>> Nachdem Sie den Button `Erweiterte Konfiguration`{.action} aktiviert haben, können Sie auch den DNS-Konfigurationsmodus für Ihren Domainnamen auswählen:
>>
>> - **Für eine automatische DNS-Konfiguration**: Lassen Sie das Feld `Automatische Konfiguration (Empfohlen)`{.action} aktiviert.
>> - **Für eine manuelle DNS-Konfiguration**: Aktivieren Sie das Feld `Manuelle Konfiguration`{.action}. Um anschließend die Konfiguration durchzuführen, konsultieren Sie die folgenden Handbücher:
>>     - [Webhosting - Liste der IP-Adressen pro Cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
>>
>> Nachdem Sie Ihre Auswahl getroffen haben, klicken Sie auf den Button `Weiter`{.action}, um die Verknüpfung Ihres Domainnamens oder Ihrer Unterdomain mit Ihrer Website abzuschließen. Dieser Vorgang kann bis zu eine Stunde dauern.
>>
>> Allerdings benötigt die Änderung der DNS-Konfiguration Ihres Domainnamens eine Ausbreitungszeit, die bis zu 24 Stunden dauern kann, bis sie vollständig wirksam ist.

///

/// details | Einen externen Domainnamen hinzufügen

Dieser Abschnitt gilt nur, wenn Ihr Domainname nicht in Ihrem OVHcloud-Konto vorhanden ist.

Klicken Sie auf die Tabs, um die **6** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben der betreffenden Website und anschließend auf `Eine Domain hinzufügen`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Aktivieren Sie die Option `Einen externen Domain zuordnen`{.action} und klicken Sie auf `Weiter`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Geben Sie den Domainnamen (z. B. domain.tld) oder die Unterdomain (z. B. **sub**.domain.tld) in das Feld **Domainname - erforderlich** ein, das darunter angezeigt wird.
>>
>> > [!success]
>> >
>> > **Besonderheit**: Unterdomänen mit `www` (z. B. **www**.domain.tld) werden automatisch ergänzt. Daher ist es nicht notwendig, diese spezielle Unterdomain im Eingabefeld anzugeben.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}
>>
>> Nachdem Sie die Informationen eingegeben haben, klicken Sie auf den Button `Weiter`{.action}.
>>
>> > [!primary]
>> >
>> > Im Gegensatz zu Domainnamen, die direkt über Ihr OVHcloud Kundencenter verwaltet werden, sind die **erweiterten Optionen** nicht direkt verfügbar, wenn Sie einen externen Domainnamen oder eine externe Unterdomain zu Ihrer Website hinzufügen.
>> >
>> > Allerdings können **alle diese Funktionen später aktiviert werden, nachdem der externe Domainname oder die externe Unterdomain zu Ihrer Website hinzugefügt wurde.** Dazu konsultieren Sie direkt [dieses Handbuch](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
> **Schritt 6**
>>
>> Jede externe Domain, die bei OVHcloud hinzugefügt wird, erfordert eine obligatorische zusätzliche Validierung. Dies ermöglicht uns, sicherzustellen, dass die Hinzufügung des externen Domainnamens legitim ist. Sie erhalten daher eine Nachricht, in der Sie aufgefordert werden, die DNS-Konfiguration des Domainnamens zu ändern.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Notieren Sie sich die angezeigten Elemente und klicken Sie auf den Button `Weiter`{.action}. Danach wird der Domainname vorübergehend hinzugefügt, bis Sie seine DNS-Konfiguration ändern können.
>>
>> > [!warning]
>> >
>> > Sie müssen diese Änderungen **schnell vornehmen**, damit Ihr Domainname korrekt hinzugefügt wird. Andernfalls wird die Hinzufügung Ihres Domainnamens storniert.
>> >
>> > Die DNS-Einträge des Typs **A** und **TXT** müssen obligatorisch in der aktiven DNS-Zone Ihres Domainnamens platziert werden, damit er zu Ihrer Website hinzugefügt wird. Nur die DNS-Einträge des Typs **AAAA** sind optional.
>> >
>> > Beachten Sie, dass wenn Sie `sub.domain.tld` hinzufügen möchten, Sie den TXT-Eintrag `ovhcontrol.domain.tld` erstellen müssen und nicht den Eintrag `ovhcontrol.sub.domain.tld`.
>> >
>> > Um die aktive DNS-Zone Ihres Domainnamens zu finden, konsultieren Sie die [DNS-Server](/pages/web_cloud/domains/dns_server_edit), an die dieser Domainname angeschlossen ist. Sie müssen nur den Domainnamen mit dem Feld **TXT** validieren, nicht alle seine Unterdomänen.|

///

/// details | Einen neuen Domainnamen hinzufügen, der noch nicht registriert wurde

Dieser Abschnitt gilt nur, wenn Ihr Domainname noch nicht registriert wurde, weder bei OVHcloud noch bei einem anderen Registrierungsamt. Mit anderen Worten, er betrifft Domainnamen, die noch nicht abgeschlossen wurden.

Klicken Sie auf die Tabs, um die **5** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben der betreffenden Website und anschließend auf `Eine Domain hinzufügen`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Aktivieren Sie die Option `Eine neue Domain bestellen`{.action} und klicken Sie auf `Weiter`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Sie werden dann zu unserer kommerziellen Bestellseite für Domainnamen weitergeleitet. Wählen Sie basierend auf der Marktfreiheit Ihren neuen Domainnamen aus und folgen Sie anschließend den Anweisungen im Bestellprozess bis zur Validierung Ihrer Bestellung.
>>
>> Sobald Ihre Bestellung bezahlt und validiert wurde, warten Sie einige Minuten, bis diese verarbeitet wird.
>>
>> > [!primary]
>> >
>> > Falls Ihr neuer Domainname nach einigen Stunden nicht korrekt mit Ihrer Website verknüpft ist, folgen Sie dem Abschnitt „[Einen Domainnamen hinzufügen, der über Ihr OVHcloud Kundencenter verwaltet wird](#add-domain-ovhcloud)“ dieses Leitfadens.

///

### E-Mail-Angebot, das mit Ihrem Webhosting einhergeht

Die meisten Angebote für [OVHcloud Webhosting](/links/web/hosting) enthalten eine Option zur Erstellung von benutzerdefinierten E-Mail-Adressen mit Ihrem Domainnamen.

Diese E-Mail-Option kann für **einen einzigen** Domainnamen aktiviert werden. Das bedeutet, dass Sie diese Option nur für einen Ihrer Domainnamen aktivieren können, wenn Sie mehrere Webseiten mit verschiedenen Domainnamen auf Ihrem Webhosting einrichten.

Weitere Informationen zur Aktivierung dieser Option finden Sie in [unserem speziellen Leitfaden](/pages/web_cloud/web_hosting/activate-email-hosting).

## Weiterführende Informationen

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
