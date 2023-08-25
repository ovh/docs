---
title: "Ihren Domainnamen mit DNSSEC absichern"
excerpt: "Erfahren Sie hier, wie Sie Ihre Domainnamen durch die Aktivierung von DNSSEC vor Cache Poisoning schützen können"
updated: 2023-07-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

DNS-Server hosten DNS-Zonen, die die DNS-Konfiguration von Domainnamen enthalten. Über diese Konfigurationen wird Ihr Domainname mit den zugehörigen Diensten verknüpft (Hosting-Server Ihrer Website, E-Mail-Server für Ihren Domainnamen, etc.).

In einigen Fällen können Daten, die über DNS-Server laufen, von Hackern abgefangen werden. Das Ziel ist, eingehenden Traffic für den betroffenen Domainnamen an ihre Websites und E-Mail-Adressen umzuleiten. Dazu wird der Cache des DNS-Servers manipuliert, um eine abweichende DNS-Konfiguration auf Ihren Domainnamen anzuwenden. Dies wird als "Cache Poisoning" bezeichnet. 

Die **D**omain **N**ame **S**ystem **SEC**urity Extensions (**DNSSEC**) ermöglichen es, die DNS-Konfiguration Ihres Domainnamens durch Überprüfung und Authentifizierung der DNS-Antworten vor "Cache Poisoning" zu schützen.

**Diese Anleitung erklärt, wie Sie DNSSEC für Ihren Domainnamen aktivieren, um ihn vor "Cache Poisoning" zu schützen.**

Weitere Informationen zur Funktionsweise von **DNSSEC** finden Sie auf unserer Seite "[DNSSEC verstehen](https://www.ovhcloud.com/de/domains/dnssec/){.external}".

Lesen SIe dazu auch unsere Anleitungen zu [OVHcloud DNS-Servern](/pages/web_cloud/domains/dns_server_general_information) und zur [Bearbeitung von OVHcloud DNS-Zonen](/pages/web_cloud/domains/dns_zone_edit).

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten Domainnamen.
- Der Domainname hat eine mit DNSSEC kompatible Endung.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Die Aktivierung von **DNSSEC** ist auf zwei Arten möglich:

- **Ihr Domainname verwendet die DNS-Server von OVHcloud**: Die Aktivierung erfolgt mit einem Klick über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} (sofern nicht bereits aktiviert).

- **Ihr Domainname verwendet nicht die DNS-Server von OVHcloud**: Wenden Sie sich an den Anbieter, der die DNS-Konfiguration Ihrer Domain verwaltet, um dessen Einstellungen anzufordern. Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus.</br>
Wählen Sie den Tab `DS-Einträge`{.action} aus, klicken Sie rechts auf `Bearbeiten`{.action} und dann auf den Button `+`{.action}.</br>
Sie können nun die 4 Felder "Key Tag", "Flag", "Algorithmus", "Öffentlicher Schlüssel (Base64-kodiert)" mit den von Ihrem aktuellen Anbieter übermittelten Daten ausfüllen.

> [!primary]
>
> Um zu überprüfen, ob Ihr Domainname die OVHcloud DNS-Konfiguration verwendet, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus. Öffnen Sie dann den Tab `DNS-Server`{.action}.
>
> Wenn die Namen der DNS-Server mit *ovh.net*, *ovh.ca* oder *anycast.me* enden, verwendet Ihr Domainname die OVHcloud DNS-Server.
>

### Schritt 1: Auf die Verwaltung des Domainnamens zugreifen <a name="step1"></a>

Um die **DNSSEC** Lösung für Ihre Domainname zu aktivieren, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie den Domainnamen aus der Liste aus.

Auf dieser Seite werden die allgemeinen Informationen angezeigt. 

### Schritt 2: DNSSEC für den Domainnamen verwalten

Im Tab `Allgemeine Informationen`{.action} können Sie nach [Schritt 1](#step1) den Aktivierungsstatus von **DNSSEC** für Ihren Domainnamen überprüfen.

Überprüfen Sie hierzu im Feld "Sicherheit" den Status neben "Sichere Delegation (DNSSEC)".

![DNSSEC](images/activate-dnssec-step2.png){.thumbnail}

Über den Aktivierungsbutton oberhalb von `Sichere Delegation - DNSSEC`{.action} können Sie den **DNSSEC** für Ihren Domainnamen aktivieren oder deaktivieren. Wenn Sie diese Aktion ausführen, erscheint ein neues Fenster, in dem Sie die Änderung bestätigen können.

![DNSSEC](images/activate-dnssec-step3.png){.thumbnail}

> [!primary]
>
> Die Aktivierung / Deaktivierung von **DNSSEC** dauert **24** Stunden.
>
> Wenn Sie die Ihrem Domainnamen zugeordneten DNS-Server ändern möchten, wird diese Änderung auf Seiten von OVHcloud erst nach der Deaktivierung von **DNSSEC** wirksam. Danach wird eine zusätzliche Verzögerung von **24** bis **48** Stunden für die DNS-Propagation der Änderung erforderlich sein.
>
> Insgesamt wird eine Änderung der DNS-Server eines Domainnamens mit aktivem **DNSSEC** nach **48** bis **72** Stunden wirksam sein.
>

## Weiterführende Informationen

[Allgemeine Informationen zu den OVHcloud DNS-Servern](/pages/web_cloud/domains/dns_server_general_information)

[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
