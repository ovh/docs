---
title: "Einen .uk-Domainnamen zu einem anderen Registrar transferieren"
excerpt: "Erfahren Sie hier, wie Sie Domainnamen mit UK-Ländercode zu einem anderen Provider transferieren"
updated: 2026-03-13
---

## Ziel

Der Transferprozess für Top Level Domains (TLDs) des Ländercodes **UK** (**.uk**) unterscheidet sich von dem, der in unserer [Anleitung zu generischen TLDs](/pages/web_cloud/domains/transfer_outgoing_domain) erklärt wird. Die nachfolgenden Anweisungen betreffen diese Endungen:

- .uk
- .co.uk
- .ac.uk
- .gov.uk
- .me.uk
- .net.uk
- .org.uk
- .plc.uk
- .sch.uk

**Diese Anleitung erklärt, wie Sie einen ausgehenden Transfer für .uk-TLDs über Ihr OVHcloud Kundencenter starten.**

> [!warning]
>
> Soll der betreffende Domainname bei OVHcloud registriert bleiben, aber hinsichtlich der Verwaltungs- oder Inhaber-Verhältnisse bearbeitet werden, ist ein ausgehender Transfer der Domain nicht der geeignete Vorgang.
>
> Um die Verwaltung des Domainnamens einem anderen OVHcloud Kunden-Account zu übertragen, muss stattdessen eine **Änderung der Kontakte** durchgeführt werden. Die Vorgehensweise wird in [dieser Anleitung](/pages/account_and_service_management/account_information/managing_contacts) beschrieben.
>
> Wenn auch der **Inhaber des Domainnamens** geändert werden muss, sollte dies erfolgen, **bevor** Sie die Kontakte des Domainnamens ändern. Verwenden Sie dazu unsere Anleitung zum [Inhaberwechsel für Domainnamen](/pages/web_cloud/domains/trade_domain).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [.uk-Domainnamen](/links/web/domains).
- Der Domainname muss noch aktiv sein, d.h. er ist nicht abgelaufen oder anderweitig seitens OVHcloud gesperrt.
- Der Domainname darf nicht Gegenstand eines laufenden Rechtsstreits bei der zuständigen Registry [Nominet](https://www.nominet.uk/) sein.

<!-- CP-NAV-START:web-domains -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Domainnamen](/links/control-panel/web-domains)
- **Navigationspfad:** `Web Cloud`{.action} > `Domainnamen`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-domains -->


> [!primary]
>
> Wenn der Domainname seit **weniger als 90 Tagen** abgelaufen ist, kann er dennoch transferiert werden. Kontaktieren Sie in diesem Fall unsere Support Teams, indem Sie im OVHcloud Kundencenter eine Ticket-Anfrage zur Transferfreigabe erstellen.
>
> Wenn Sie der **Inhaber** der Domain sind, diese aber nicht im OVHcloud Kundencenter verwalten können, weder über Ihren eigenen Zugang noch über den Administrator-Kontakt, konsultieren Sie bitte [diese Anleitung](/pages/account_and_service_management/account_information/managing_contacts), bevor Sie fortfahren.
>

## In der praktischen Anwendung

Die betroffenen TLDs haben einen **TAG**, der stets einem Domainnamen-Registrar (wie OVHcloud) entspricht. Der Transferprozess wird eingeleitet, indem Sie den TAG zu demjenigen ändern, der Ihren neuen Registrar identifiziert.

Falls Sie den benötigten TAG noch nicht kennen, können Sie ihn bei Ihrem neuen Anbieter erfragen oder auf dieser [Nominet-Registrarliste](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/) nachsehen.

### 1 - Den TAG Ihrer Domain ändern, um den Transfer zu einem anderen Registrar einzuleiten

> [!primary]
>
> Sie müssen als [Administrator](/pages/account_and_service_management/account_information/managing_contacts) eingeloggt sein, um diese Aktionen durchzuführen.

<!-- CP-STEPS-START:change-outgoing-tag -->
Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den Domainnamen aus.
>>
>> ![OVHcloud-Kundencenter - Liste der Domainnamen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie im Bereich **Konfiguration** auf den Link `Ausgehender Transfer-TAG`{.action}.
>>
>> ![ausgehender Transfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Geben Sie im neuen Fenster den TAG Ihres neuen Registrars ein und klicken Sie dann auf `Bestätigen`{.action}.
>>
>> ![ausgehender Transfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.png){.thumbnail}
<!-- CP-STEPS-END:change-outgoing-tag -->

Falls es Ihnen nicht möglich ist, den TAG Ihres Domainnamens über Ihr Kundencenter zu ändern, können Sie dies auch direkt bei der Registrierungsstelle beantragen. Weitere Informationen finden Sie auf der offiziellen [Website von Nominet](https://www.nominet.uk/domain-support/).

### 2 - Den Transfer bei Ihrem neuen Registrar verfolgen

Eine erfolgreiche Änderung des TAG startet den Transferprozess.

Wenden Sie sich an Ihren neuen Anbieter, um Details und mögliche Folgefragen zu klären.

## Weiterführende Informationen

[Einen Domainnamen zu einem anderen Registrar transferieren](/pages/web_cloud/domains/transfer_outgoing_domain)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Treten Sie unserer [User Community](/links/community) bei.
