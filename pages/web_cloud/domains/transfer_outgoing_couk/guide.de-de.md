---
title: "Einen .uk-Domainnamen zu einem anderen Registrar transferieren"
excerpt: "Erfahren Sie hier, wie Sie Domainnamen mit UK-Ländercode zu einem anderen Provider transferieren"
updated: 2022-10-19
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

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
> Soll der betreffende Domainname bei OVHcloud registriert bleiben, aber hinsichtlich der Verwaltungs- oder Eigentumsverhältnisse bearbeitet werden, ist ein ausgehender Transfer der Domain nicht der geeignete Vorgang.
>
> Um die Verwaltung des Domainnamens einem anderen OVHcloud Kunden-Account zu übertragen, muss stattdessen eine **Änderung der Kontakte** durchgeführt werden. Die Vorgehensweise wird in [dieser Anleitung](/pages/account_and_service_management/account_information/managing_contacts) beschrieben.
>
> Wenn auch der **Inhaber des Domainnamens** geändert werden muss, sollte dies erfolgen, **bevor** Sie die Kontakte des Domainnamens ändern. Verwenden Sie dazu unsere Anleitung zum [Inhaberwechsel für Domainnamen](/pages/web_cloud/domains/trade_domain).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [.uk-Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den erforderlichen Berechtigungen zum Verwalten der Domain (Domainadministrator).
- Der Domainname muss noch aktiv sein, d.h. er ist nicht abgelaufen oder anderweitig seitens OVHcloud gesperrt.
- Der Domainname darf nicht Gegenstand eines laufenden Rechtsstreits bei der zuständigen Registry [Nominet](https://www.nominet.uk/) sein.

> [!primary]
>
> Wenn der Domainname seit **weniger als 90 Tagen** abgelaufen ist, kann er dennoch transferiert werden. Kontaktieren Sie in diesem Fall unsere Support Teams, indem Sie im OVHcloud Kundencenter eine Ticket-Anfrage zur Transferfreigabe erstellen.
>
> Wenn Sie der **Inhaber** der Domain sind, deren Verwaltung Ihnen im OVHcloud Kundencenter jedoch nicht möglich ist, weder über Ihren eigenen Zugang noch den Administrator-Kontakt der Domain, konsultieren Sie bitte [diese Anleitung](/pages/account_and_service_management/account_information/managing_contacts#sonderfall-bei-domaininhabern), bevor Sie fortfahren.
>

## In der praktischen Anwendung

Die betroffenen TLDs haben einen **TAG**, der stets einem Domainnamen-Registrar (wie OVHcloud) entspricht. Der Transferprozess wird eingeleitet, indem Sie den TAG zu demjenigen ändern, der Ihren neuen Registrar identifiziert.

Falls Sie den benötigten TAG noch nicht kennen, können Sie ihn bei Ihrem neuen Anbieter erfragen oder auf dieser [Nominet-Registrarliste](https://registrars.nominet.uk/uk-namespace/registrar-agreement/list-of-registrars/) nachsehen.

### Schritt 1: Überprüfung der erforderlichen Informationen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und wählen Sie im Bereich `Web Cloud`{.action} Ihren Domainnamen unter `Domainnamen`{.action} aus.

Denken Sie daran, dass Sie als Administrator-Kontakt eingeloggt sein müssen.

Im Tab `Allgemeine Informationen`{.action} können Sie überprüfen, ob die Voraussetzungen für den Transfer erfüllt sind.

### Schritt 2: Den TAG Ihrer Domain ändern

Klicken Sie im Bereich **Sicherheit** auf `Ausgehender Transfer-TAG`{.action}.

![ausgehender Transfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag.jpg){.thumbnail}

Geben Sie im neuen Fenster den TAG Ihres neuen Registrars ein und klicken Sie dann auf `Bestätigen`{.action}.

![ausgehender Transfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/outgoing-transfer-tag-confirmation.jpg){.thumbnail}

Falls es Ihnen nicht möglich ist, den TAG Ihres Domainnamens über Ihr Kundencenter zu ändern, können Sie dies auch direkt bei der Registrierungsstelle beantragen. Weitere Informationen finden Sie auf der offiziellen [Website von Nominet](https://www.nominet.uk/domain-support/).

### Schritt 3: Den Transfer bei Ihrem neuen Registrar verfolgen

Eine erfolgreiche Änderung des TAG startet den Transferprozess. Wenden Sie sich an Ihren neuen Anbieter, um Details und mögliche Folgefragen zu klären.

## Weiterführende Informationen

[Einen Domainnamen zu einem anderen Registrar transferieren](/pages/web_cloud/domains/transfer_outgoing_domain)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Treten Sie unserer [User Community](/links/community) bei.