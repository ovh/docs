---
title: "Verbinden eines OVHcloud Domainnamens mit einem Google Site"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem Google Site zu verwenden"
updated: 2024-10-01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie haben bereits einen Domainnamenamen bei OVHcloud und möchten ihn mit einem Google Site verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone bearbeiten, um die Konfiguration Ihres Google Sites zu ermöglichen.

**Erfahren Sie hier, wie Sie Ihren OVHcloud Domainnamen mit einem Google Site verbinden.**

> [!warning]
>
> - Der Google Site Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud Domainnamen und kann Sie deshalb nicht diesbezüglich beraten.
>
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den erforderlichen [Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens.
- Sie verfügen über eine Google Site und sind deren Inhaber.

## In der praktischen Anwendung

Bevor Sie dieser Anleitung folgen, empfehlen wir, sich mit der Konfiguration von DNS-Zonen vertraut machen. Nutzen Sie dazu unsere Anleitung "[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits konfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem Google Site konfigurieren. Einige müssen gelöscht werden, um Konflikte mit den erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur noch geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### Schritt 1 - Ihre Google Site konfigurieren

> [!warning]
>
> Nur der Inhaber einer Google-Website kann diese mit einem Domainnamen verbinden. Falls nötig, erfahren Sie hier, wie Sie den [Inhaber der Google-Website ändern](https://support.google.com/sites/answer/97934).

Wenn Sie eine Google-Website mit einem OVHcloud-Domainnamen verwenden, bereiten Sie Ihr Hosting zunächst vor, indem Sie die Anweisungen im Abschnitt **Eine personalisierte Domain konfigurieren** von [**dieser Seite des Google-Supports**](https://support.google.com/sites/answer/9068867?hl=de#zippy=) aus befolgen.