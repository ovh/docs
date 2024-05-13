---
title: "Verbinden eines OVHcloud Domainnamens mit einem SquareSpace Hosting"
excerpt: "Erfahren Sie hier, wie Sie die DNS-Zone Ihres OVHcloud Domainnamens konfigurieren, um sie mit einem SquareSpace Hosting zu verwenden"
updated: 2024-05-13
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie haben bereits einen Domainnamenamen bei OVHcloud und möchten ihn mit einem SquareSpace Hosting verbinden. In dieser Anleitung erfahren Sie, wie Sie die OVHcloud DNS-Zone bearbeiten, um die Konfiguration Ihres SquareSpace Hostings zu ermöglichen.

**Erfahren Sie hier, wie Sie Ihren OVHcloud Domainnamen mit einem SquareSpace Hosting verbinden.**

> [!warning]
>
> - Der SquareSpace Support hat keinen Zugriff auf die Einstellungen Ihrer OVHcloud Domainnamen und kann Sie deshalb nicht diesbezüglich beraten.
>
> - OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.<br><br> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen. Leider können wir Ihnen keine weitergehende technische Unterstützung hierzu anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) mit den erforderlichen [Berechtigungen zur Verwaltung](/pages/account_and_service_management/account_information/managing_contacts) des Domainnamens.
- Sie verfügen über ein Hosting bei SquareSpace.
- Sie haben Zugriff auf die Verwaltung dieses Hostings bei SquareSpace.

## In der praktischen Anwendung

Bevor Sie dieser Anleitung folgen, empfehlen wir, sich mit der Konfiguration von DNS-Zonen vertraut machen. Nutzen Sie dazu unsere Anleitung "[Bearbeiten einer OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

> [!warning]
>
> Ihre DNS-Zone ist möglicherweise bereits konfiguriert oder mit einem Hosting verbunden. In dieser Anleitung erfahren Sie, wie Sie die DNS-Einträge zur Verbindung mit Ihrem SquareSpace Hosting konfigurieren. Einige müssen gelöscht werden, um Konflikte mit den erforderlichen DNS-Einträgen zu vermeiden. Andere müssen nur noch geändert oder neu erstellt werden. Für ein besseres Verständnis verwenden wir als Beispiel den Domainnamen "**mydomain.ovh**". Ersetzen Sie ihn bei der Konfiguration durch Ihren Domainnamen.

### DNS-Einträge in Ihrem OVHcloud Kunden-Account konfigurieren

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus. Gehen Sie dann auf den Tab `DNS-Zone`{.action}.

Die Tabelle listet alle DNS-Einträge des ausgewählten Domainnamens auf.

![dnszone](images/tab.png){.thumbnail}

Jeder DNS-Eintrag kann geändert werden, indem Sie rechts in der Zeile auf den Button `...`{.action} und dann auf `Eintrag bearbeiten`{.action} klicken.

Folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> **Schritt 1**
>> **A-Eintrag**<br><br>
>> Um die vorhandenen Einträge vom Typ A zu identifizieren, klicken Sie oben in der Tabelle mit den DNS-Einträgen auf das Filtermenü und wählen Sie `A` aus.<br>
>> ![dnszone](images/filter-a.png){.thumbnail}<br>
>> - Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile, die Ihrem Domainnamen ohne Subdomain entspricht (Beispiel: `mydomain.ovh.`), und klicken Sie dann auf `Eintrag bearbeiten`{.action}.<br>
>> - Wenn ein Eintrag für die Subdomain "www" vorhanden ist (Beispiel: `www.mydomain.ovh.`), müssen Sie diesen löschen, damit er nicht mit dem in Schritt 4 angegebenen CNAME-Eintrag in Konflikt steht. Klicken Sie auf den Button `...`{.action} rechts in der Tabellenzeile für Ihren Domainnamen mit der Subdomain "www." und klicken Sie dann auf `Eintrag löschen`{.action}.<br>
>> - Wenn Sie noch keinen A-Eintrag haben, klicken Sie auf den Button `Eintrag hinzufügen`{.action} rechts oben und wählen Sie `A`{.action}<br><br>
>> Sie müssen nacheinander 4 A-Einträge erstellen, um die 4 IPv4-Adressen für SquareSpace anzugeben.
>> Lassen Sie das Feld **Subdomain** leer und geben Sie die erste SquareSpace-IPv4-Adresse `198.185.159.144` in das Feld **Ziel** ein.
>> Klicken Sie auf `Weiter`{.action}, bestätigen Sie Ihren A-Eintrag, wiederholen Sie den Vorgang für die anderen 3 IPv4-Adressen `198.185.159.145`; `198.49.23.144`; `198.49.23.145` und fahren Sie mit Schritt 2 fort.