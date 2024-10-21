---
title: 'Bearbeiten der OVHcloud DNS-Zone'
excerpt: 'Erfahren Sie hier, wie Sie eine DNS-Zone über Ihr Kundencenter bearbeiten'
updated: 2024-06-17
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

**D**omain **N**ame **S**ystem bezeichnet einen Satz von Elementen (DNS-Server, DNS-Zonen, etc.), mit denen ein Domainname IP-Adressen zugeordnet werden kann.

Weitere Informationen finden Sie in unseren Anleitungen „[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)“ und „[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)“

**Diese Anleitung erklärt, wie Sie Ihre OVHcloud DNS-Zone über Ihr Kundencenter bearbeiten.**

## Voraussetzungen

- Sie haben über Ihr [OVHcloud Kundencenter](/links/manager) ausreichende Berechtigungen zur Verwaltung der betreffenden Domain.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- OVHcloud DNS-Server sind in Verwendung für die betreffende Domain.

> [!warning]
>
> - Wenn Ihre Domain nicht die DNS-Server von OVHcloud verwendet, muss die Änderung über das Interface des Anbieters vorgenommen werden, der die DNS-Konfiguration Ihrer Domain verwaltet.
> 
> - Wenn Ihre Domain bei OVHcloud registriert ist, können Sie überprüfen, ob sie unsere Konfiguration verwendet. Gehen Sie hierzu in Ihrem [OVHcloud Kundencenter](/links/manager) in den Tab `DNS-Server`{.action} der betreffenden Domain. Bei Bedarf lesen Sie unsere Anleitung „[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)“.
>
> Seien Sie in jedem Fall vorsichtig, wenn Sie Ihre DNS-Server ändern. Die alte Konfiguration wird deaktiviert, wenn Sie die neue DNS-Zone bei OVHcloud aktivieren und nicht zuvor neu konfiguriert und bearbeitet haben.<br>
> Sie können nur eine aktive DNS-Zone pro Domainname nutzen.
>

## In der praktischen Anwendung

### Zugang zur Verwaltung einer OVHcloud DNS-Zone

> [!primary]
>
> Im Gegensatz zum Domainnamen gibt es für eine DNS-Zone keinen Inhaber, lediglich die Kontaktverwaltung bei OVHcloud. Wenn Sie die Verwaltung Ihrer DNS-Zone auf einen anderen OVHcloud Kunden-Account übertragen möchten, folgen Sie unserer Anleitung [Die Kontakte Ihrer Dienste verwalten](/pages/account_and_service_management/account_information/managing_contacts).

So greifen Sie auf die Verwaltung einer OVHcloud DNS-Zone zu:

1. Loggen Sie sich im [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Domainnamen`{.action}.
4. Wählen Sie die betreffende Domain oder DNS-Zone aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Zone`{.action}.

Die Tabelle zeigt für jede Zeile einen DNS-Eintrag zu Ihrer Domain bei OVHCloud an. Sie können die Einträge nach dem Eintragstyp oder der zugehörigen Domain filtern.

![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/tab.png){.thumbnail}

### Bearbeiten der OVHcloud DNS-Zone Ihrer Domain

**Die Bearbeitung einer DNS-Zone ist kritisch**: Bei fehlerhaften Änderungen kann es sein, dass Ihre Website nicht mehr erreichbar ist oder Ihre E-Mail-Adressen keine Nachrichten mehr empfangen können.

Ein genaueres Verständnis der verschiedenen Einträge ermöglicht es Ihnen, die notwendigen Änderungen der DNS-Zone Ihrer Domain zu bestimmen.

> [!success]
>
> Lesen Sie unsere Anleitung zu [DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records), um sich ein besseres Bild von Ihren DNS-Einstellungen zu machen.
>
> Weitere Informationen finden Sie in unserer Anleitung zu [Subdomains](/pages/web_cloud/domains/domain_create_subdomains).
>

Sie können die OVHcloud DNS-Zone Ihrer Domain bearbeiten, indem Sie einen DNS-Eintrag hinzufügen, bearbeiten oder löschen.<br>
Dazu können Sie entweder die Zone im Textmodus manuell bearbeiten oder unsere Konfigurationsassistenten verwenden.

#### Zone manuell im Textmodus bearbeiten <a name="txtmod"></a>

> [!warning]
>
> Nur für erfahrene Benutzer. Achten Sie auch sehr auf die Syntax, wenn Sie Änderungen vornehmen.
>

So bearbeiten Sie eine OVHcloud DNS-Zone im Textmodus:

1. Loggen Sie sich im [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Domainnamen`{.action}.
4. Wählen Sie die betreffende Domain oder DNS-Zone aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Zone`{.action}.
6. Klicken Sie rechts oder unterhalb der Tabelle auf `Im Textmodus bearbeiten`{.action}, und folgen Sie den angezeigten Schritten.

> [!warning]
>
> Verwenden Sie nicht den Button `Im Textmodus bearbeiten`{.action} zum Ändern der DNS-Einträge Ihrer DNS-Zone zu Gunsten von DNS-Servern außerhalb von OVHcloud. Diese DNS-Zone funktioniert **nur** mit OVHcloud DNS-Servern.

#### Den Konfigurationsassistenten verwenden

Im Folgenden werden nur noch die Konfigurationen über unsere Assistenten beschrieben.

> [!primary]
>
> Halten Sie die Informationen bereit, die Sie in Ihrer OVHcloud DNS-Zone ändern möchten. Wenn Sie diese Änderung auf Anfrage eines Diensteanbieters vornehmen, muss dieser Ihnen die Liste der zu ändernden Elemente übermitteln.
>

> [!tabs]
> **Neuen DNS-Eintrag hinzufügen**
>>
>> Gehen Sie wie folgt vor, um einen neuen DNS-Eintrag hinzuzufügen:
>>
>> 1. Loggen Sie sich im [OVHcloud Kundencenter](/links/manager) ein.
>> 2. Klicken Sie in der Zeile oben im Kundencenter auf den Tab `Web Cloud`{.action}.
>> 3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Domainnamen`{.action}.
>> 4. Wählen Sie die betreffende Domain oder DNS-Zone aus.
>> 5. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Zone`{.action}.
>> 6. Klicken Sie rechts oder unterhalb der Tabelle auf `Eintrag hinzufügen`{.action} und folgen Sie den angezeigten Schritten.
>>
>> Überprüfen Sie zunächst, ob dieser Eintrag bereits vorhanden ist und auf ein anderes Ziel verweist. Filtern Sie hierzu den Inhalt der Tabelle nach Eintragstyp oder Domainname. Wenn der Eintrag bereits existiert, können Sie ihn mit den nachstehenden Angaben bearbeiten.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/add-an-entry.png){.thumbnail}
>>
>> > Wenn das Ziel Ihrer Aufzeichnung eine URL ist, denken Sie daran, diese zu punktieren. Wenn Sie dies nicht tun, wird Ihr Domainname automatisch am Ende Ihres Ziels hinzugefügt.
>> >
>> > **Beispiel**: Sie möchten einen CNAME-Eintrag von `test.mydomain.ovh` auf `mydomain.ovh` erstellen.
>> >
>> > Sie müssen dann als Ziel `mydomain.ovh.` haben, anstatt `mydomain.ovh` ohne **.** am Ende.
>>
> **Existierenden DNS-Eintrag bearbeiten**
>>
>> Gehen Sie wie folgt vor, um einen DNS-Eintrag zu bearbeiten:
>>
>> 1. Loggen Sie sich im [OVHcloud Kundencenter](/links/manager) ein.
>> 2. Klicken Sie in der Zeile oben im Kundencenter auf den Tab `Web Cloud`{.action}.
>> 3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Domainnamen`{.action}.
>> 4. Wählen Sie die betreffende Domain oder DNS-Zone aus.
>> 5. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Zone`{.action}.
>> 6. Klicken Sie in der Tabelle auf das Symbol `...`{.action} rechts neben dem betreffenden Eintrag.
>> 7. Klicken Sie dann auf `Eintrag bearbeiten`{.action} und folgen Sie den angezeigten Schritten.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-record.png){.thumbnail}
>>
> **DNS-Eintrag löschen**
>>
>> Gehen Sie wie folgt vor, um einen DNS-Eintrag zu löschen:
>>
>> 1. Loggen Sie sich im [OVHcloud Kundencenter](/links/manager) ein.
>> 2. Klicken Sie in der Zeile oben im Kundencenter auf den Tab `Web Cloud`{.action}.
>> 3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Domainnamen`{.action}.
>> 4. Wählen Sie die betreffende Domain oder DNS-Zone aus.
>> 5. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Zone`{.action}.
>> 6. Klicken Sie in der Tabelle auf das Symbol `...`{.action} rechts neben dem betreffenden Eintrag.
>> 7. Klicken Sie dann auf `Eintrag löschen`{.action} und folgen Sie den angezeigten Schritten.
>>
>> Sie können mehrere Einträge auf einmal löschen, indem Sie links in der Tabelle einen Haken setzen und dann auf den Button `Löschen`{.action} klicken.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/delete-record.png){.thumbnail}
>>
> **DNS-Zone zurücksetzen**
>>
>> Durch das Zurücksetzen Ihrer DNS-Zone können Sie zu einer minimalen Konfiguration zurückkehren. Dabei werden die Standardeinträge von OVHcloud oder Ihrer Dienste verwendet. Sie können Ihren Domainnamen auch eigene E-Mail- und Webhosting-Dienste zuordnen.
>>
>> > [!alert]
>> >
>> > Bevor Sie Ihre DNS-Zone zurücksetzen, vergewissern Sie sich, dass Ihr Domainname nicht mit anderen Diensten wie Websites oder E-Mail-Adressen verbunden ist.
>> >
>>
>> Gehen Sie wie folgt vor, um Ihre DNS-Zone zurückzusetzen:
>>
>> 1. Loggen Sie sich im [OVHcloud Kundencenter](/links/manager) ein.
>> 2. Klicken Sie in der Zeile oben im Kundencenter auf den Tab `Web Cloud`{.action}.
>> 3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Domainnamen`{.action}.
>> 4. Wählen Sie die betreffende Domain oder DNS-Zone aus.
>> 5. Klicken Sie auf der angezeigten Seite auf den Tab `DNS Zone`{.action}.
>> 6. Klicken Sie rechts oder unterhalb der Tabelle auf `Meine DNS-Zone zurücksetzen`{.action} und folgen Sie den 2 angezeigten Schritten.
>>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/reset-my-dns-zone.png){.thumbnail}
>>
>> **Schritt 1**
>>
>> Beantworten Sie die Frage `Möchten Sie die minimalen Einträge beim Zurücksetzen Ihrer DNS-Zone aktivieren?`. Die Festlegung von Minimaleinträgen in einer DNS-Zone verhindert Fehlerantworten bei der Abfrage des Domainnamens.
>>
>> - `Ja, ich möchte meine DNS Zone mit den minimalen Einträgen zurücksetzen`
>> - `Nein, aber ich möchte meine DNS Zone zurücksetzen`
>>
>> **Schritt 2**
>>
>> Unabhängig davon, welche Option Sie in Schritt 1 gewählt haben, müssen Werte für Abfragen an Ihren Domainnamen gesetzt werden, um fehlerhafte DNS-Antworten zu verhindern.
>>
>> Klicken Sie auf die Tabs, um die Details der verfügbaren Optionen anzuzeigen:
>>
>> **IP-Adresse Ihres Hostings**
>>
>> - `Weiterleitung`: Ihr Domainname verweist auf den Weiterleitungsserver von OVHcloud, der es ermöglicht, eine OVHcloud Startseite anzuzeigen und so einen DNS-Fehler zu vermeiden.<br>
>> - `OVHcloud Webhosting`: Ihr Domainname verweist auf die IP-Adresse des Webhostings, das mit dem Domainnamen verbunden ist.<br>
>> - `Benutzerdefiniert`: Legen Sie die IPv4-Adresse ([A-Eintrag](/pages/web_cloud/domains/dns_zone_records#pointer-records)) des Webhostings fest, auf das verwiesen werden soll. <br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-01.png){.thumbnail}
>>
>> **Adresse Ihres Mailservers**
>>
>> - `Weiterleitung`: Ihr Domainname verweist auf Weiterleitungsserver für E-Mails. Dies ist besonders nützlich, wenn Sie keine E-Mail-Dienste nutzen, aber E-Mails an eine oder mehrere E-Mail-Adressen außerhalb Ihres Domainnamens weiterleiten möchten.<br>
>> - `OVHcloud E-Mail-Server`: Zu verwenden, wenn Sie ein Webhosting-E-Mail-Angebot nutzen.<br>
>> - `Benutzerdefiniert`: Legen Sie die URL und die Priorität des E-Mail-Servers ([MX-Eintrag](/pages/web_cloud/domains/dns_zone_records#mail-records)) fest, auf den verwiesen werden soll.<br><br>
>> ![dnszone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/dns-zone-reset-02.png){.thumbnail}
>>

### Propagationszeit

Nach der Änderung der DNS-Zone Ihrer Domain ist eine Propagationszeit von maximal 24 Stunden erforderlich, bis die Änderungen wirksam sind.

Wenn Sie die Verzögerung für die nächste Bearbeitung Ihrer OVHcloud DNS-Zone verkürzen möchten, können Sie diese bis zu einem gewissen Grad beeinflussen, indem Sie die TTL (*Time To Live*) anpassen, die für alle Einträge in der DNS-Zone gilt.

1. Loggen Sie sich im [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie oben im Kundencenter auf den Tab `Web Cloud`{.action}.
3. Klicken Sie in der linken Spalte auf das Dropdown-Menü `Domainnamen`{.action}.
4. Wählen Sie die betreffende Domain oder DNS-Zone aus.
5. Klicken Sie auf der angezeigten Seite auf den Tab `DNS-Zone`{.action}.
6. Klicken Sie rechts oder unterhalb der Tabelle auf die Schaltfläche `Standardmäßige TTL ändern`{.action}, und folgen Sie den angezeigten Schritten.

Sie können auch die TTL eines DNS-Eintrags ändern. Dies kann jedoch nur einzeln bei Hinzufügen oder Bearbeiten eines Eintrages erfolgen.

## Weiterführende Informationen

[Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)

[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

[Einen SPF-Eintrag hinzufügen](/pages/web_cloud/domains/dns_zone_spf)

[DNSSEC](/pages/web_cloud/domains/dns_dnssec)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
