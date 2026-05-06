---
title: "Wie lösche ich eine OVHcloud DNS-Zone?"
excerpt: "Diese Anleitung erklärt, wie Sie eine DNS-Zone für Ihre Domain über Ihr OVHcloud Kundencenter"
updated: 2026-03-11
---

## Ziel

Die **DNS**-Zone (**D**omain **N**ame **S**ystem) ist die Konfigurationsdatei eines Domainnamens. Sie besteht aus **DNS-Einträgen**, Datensätzen die dem Domainnamen verschiedenen Diensten und Funktionen zuordnen.

Weitere Informationen zu DNS-Zonen und DNS-Servern finden Sie in den folgenden Anleitungen: 

- [Alle Informationen zu DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)
- [Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)
- [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)

So kann es beispielsweise vorkommen, dass Sie eine DNS-Zone für Ihren Domainnamen bei OVHcloud löschen müssen (nicht abschließende Liste):

- Sie verwenden eine aktive DNS-Zone für Ihre Domain bei einem anderen Anbieter als OVHcloud.
- Sie verwenden den Domainnamen nicht mehr, der mit der bei OVHcloud vorhandenen DNS-Zone verbunden ist.
- Sie haben Ihre Dienste zu einem anderen Anbieter migriert und möchten Ihre Dienste bei OVHcloud kündigen.

> [!primary]
>
> Die Erstellung / Änderung / Löschung einer DNS-Zone in Ihrem [OVHcloud Kundencenter](/links/control-panel/web-dns-zone) ist kostenlos.

**Diese Anleitung erklärt, wie Sie im OVHcloud Kundencenter eine OVHcloud DNS-Zone für Ihren Domainnamen löschen.**

## Voraussetzungen

- Sie haben eine DNS-Zone in Ihrem OVHcloud Kundencenter.
- Sie verfügen über ausreichende Rechte für die zu löschende DNS-Zone. Weitere Informationen finden Sie in unserer Anleitung „[Verwaltung der Kontakte](/pages/account_and_service_management/account_information/managing_contacts)“.

<!-- CP-NAV-START:billing-services -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Meine Angebote und Dienste](/links/control-panel/billing-services)
- **Navigationspfad:** Klicken Sie oben rechts auf Ihren Namen > `Meine Angebote und Dienste`{.action}

---
<!-- CP-NAV-END:billing-services -->

> [!primary]
>
> DNS-Zone löschen löscht nicht den zugehörigen Domainnamen. Sie verlieren Ihren Domainnamen also nicht, wenn Sie dessen DNS-Zone löschen.

## In der praktischen Anwendung

> [!warning]
>
> Stellen Sie sicher, dass die DNS-Zone, die Sie löschen möchten, nicht mehr von Ihrer Domain verwendet wird, bevor Sie fortfahren.
>
> Wenn Sie die aktive DNS-Zone für Ihre Domain löschen, werden Ihre Online-Dienste (Website, E-Mail-Adressen usw.) unterbrochen.
>
> Überprüfen Sie mithilfe einer [WHOIS](/links/web/domains-whois)-Abfrage, ob die aktive DNS-Zone Ihrer Domain bei OVHcloud liegt.
>
> Wenn die aktive DNS-Zone für Ihre Domain bei OVHcloud liegt und Sie diese durch eine an einem anderen Standort gehostete DNS-Zone ersetzen möchten, lesen Sie unsere Anleitung „[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)“, bevor Sie die Löschung der DNS-Zone vornehmen.

<!-- CP-STEPS-START:delete-dns-zone -->
Klicken Sie jeweils auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Meine Angebote und Dienste](/links/control-panel/billing-services) und dann auf den Button `...`{.action} rechts neben der DNS-Zone, die Sie kündigen möchten, und dann auf `Meinen Dienst kündigen`{.action}.
>>
>> ![Kündigung](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-cancel-my-subscription.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Auf der neuen Seite geben Sie den Grund für Ihre Kündigung und Ihr Vorhaben an und klicken Sie dann auf `Bestätigen`{.action}.
>>
>> ![Dienst kündigen](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-delete-your-service.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Die Kündigung Ihres Dienstes erfolgt am **Datum des Inkrafttretens**, das in der Tabelle "Meine Angebote und Dienste" angezeigt wird. Falls der Status "Kündigung geplant" nicht angezeigt wird, aktualisieren Sie die Seite.
>>
>> > [!primary]
>> >
>> > Wenn Sie eine DNS-Zone sofort aus Ihrem OVHcloud Kundencenter löschen möchten, führen Sie die 3 Schritte aus, um die Kündigung zum Datum des Inkrafttretens zu beantragen, und kontaktieren Sie anschließend den OVHcloud Support, indem Sie ein Support-Ticket über das [Help Center](/links/support-contact) erstellen.
>> > Geben Sie im Ticket die betroffene DNS-Zone an und erklären Sie ausdrücklich, dass Sie diese sofort löschen möchten, ohne auf das Datum des Inkrafttretens zu warten.
<!-- CP-STEPS-END:delete-dns-zone -->

## Weiterführende Informationen

[Verwaltung der Kontakte](/pages/account_and_service_management/account_information/managing_contacts)

[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)

[OVHcloud DNS-Zone erstellen](/pages/web_cloud/domains/dns_zone_create)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
