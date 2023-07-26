---
title: "Ihren Domainnamen mit DNSSEC absichern"
excerpt: "Diese Anleitung erklärt, wie Sie Ihre Domain durch die Aktivierung von DNSSEC vor Cache Poisoning schützen können"
updated: 2023-07-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Auf einem DNS-Server wird mindestens eine DNS-Zone gehostet. Eine DNS-Zone enthält die DNS-Konfiguration einer Domain. Es ist diese Konfiguration, die Ihren Domainnamen mit den verschiedenen damit verbundenen Diensten verbindet (Hostserver für Ihre Website, Server für Ihre personalisierten E-Mail-Adressen mit Ihrem Domainnamen usw.).

In einigen Fällen können Datenströme, die über DNS-Server laufen, von Angreifern abgezweigt werden.
Zusammenfassend lässt sich sagen, dass diese Personen den Cache der DNS-Server mit der DNS-Konfiguration vergiften, die sie auf Ihren Domainnamen anwenden möchten: dies wird als „Cache Poisoning“ bezeichnet.
So können sie die eingehenden Datenströme Ihrer Domain auf ihre eigenen Websites und E-Mail-Adressen weiterleiten.

Die **D**omain **N**ame **S**ystem **SEC**urity extensions (**DNSSEC**) ermöglicht es, die DNS-Konfiguration Ihrer Domain durch Überprüfung und Authentifizierung der DNS-Antworten vor "Cache Poisoning" zu schützen.

**Diese Anleitung erklärt, wie Sie DNSSEC für Ihren Domainnamen aktivieren, um ihn vor Cache Poisoning zu schützen.**

Weitere Informationen zur Funktionsweise des **DNSSEC** finden Sie auf unserer Seite „[DNSSEC verstehen](https://www.ovhcloud.com/de/domains/dnssec/){.external}“.

Weitere Informationen zu diesen Themen finden Sie in unseren Anleitungen zu [den OVHcloud DNS-Servern](/pages/web/domains/dns_server_general_information) und zur [Bearbeitung einer OVHcloud DNS-Zone](/pages/web/domains/dns_zone_edit).

## Voraussetzungen

- Sie besitzen eine bei OVHcloud registrierte Domain.
- Die betreffende Domain hat eine mit DNSSEC kompatible Endung.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/de/&ovhSubsidiary=de){.external}, Teil `Web Cloud`{.action}.

## In der praktischen Anwendung

Die Aktivierung des **DNSSEC** ist in zwei Fällen möglich:

- **Ihre Domain verwendet die DNS-Server von OVHcloud**: Die Aktivierung erfolgt mit einem Klick über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} (sofern diese nicht bereits standardmäßig aktiviert ist).

- **Ihre Domain verwendet nicht die DNS-Server von OVHcloud**: Wenden Sie sich an den Anbieter, der die DNS-Konfiguration Ihrer Domain verwaltet, um dessen Einstellungen anzufordern. Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie die betreffende Domain aus der Liste aus.</br>
Wählen Sie die Registerkarte `DS-Einträge`{.action} aus, klicken Sie rechts auf `Bearbeiten`{.action} und dann auf die Schaltfläche `+`{.action}.</br>
Sie können nun die 4 Felder „Key Tag“, „Flag“, „Algorithmus“, „Öffentlicher Schlüssel (Base64-kodiert)“ mit den von Ihrem aktuellen Anbieter übermittelten Daten ausfüllen.

> [!PRIMARY]
>
> Um zu überprüfen, ob Ihre Domain die OVHcloud DNS-Konfiguration verwendet, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie die betreffende Domain aus der Liste aus. Wählen Sie den Tab `DNS-Server`{.action} aus, nachdem Sie sich in der betreffenden Domain befinden.
>
> Wenn die Namen der DNS-Server mit *ovh.net*, *ovh.ca* oder *anycast.me* enden, verwendet Ihre Domain die OVHcloud DNS-Server.
>

### Schritt 1: Auf die Verwaltung des Domainnamens zugreifen <a name=„step1“></a>

Um die **DNSSEC** Lösung für Ihre Domain zu aktivieren, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie die betreffende Domain aus der Liste aus.

Auf der angezeigten Seite werden die allgemeinen Informationen angezeigt. 

### Schritt 2: DNSSEC für ihre Domain verwalten

Im Tab `Allgemeine Informationen`{.action} können Sie nach dem [Schritt 1](#step1) den Aktivierungsstatus des **DNSSEC** für Ihre Domain überprüfen.

Überprüfen Sie hierzu im Feld „Sicherheit“ den Status neben „Sichere Delegation (DNSSEC)“.

![DNSSEC](images/activate-DNSSEC-step2.png){.thumbnail}

Über den Aktivierungsbutton oberhalb von `Sichere Delegation - DNSSEC`{.action} können Sie den **DNSSEC** für Ihre Domain aktivieren oder deaktivieren. Wenn Sie diese Aktion ausführen, erscheint ein neues Fenster, in dem Sie die Änderung bestätigen können.

![DNSSEC](images/activate-DNSSEC-step3.png){.thumbnail}

> [!PRIMARY]
>
> Die Aktivierung / Deaktivierung des **DNSSEC** dauert **24** Stunden.
>
> Wenn Sie zu einem späteren Zeitpunkt die Ihrem Domainnamen zugeordneten DNS-Server ändern möchten, wird die Änderung der DNS-Server auf Seiten von OVHcloud erst nach Deaktivierung des **DNSSEC** wirksam. Danach wird eine zusätzliche Verzögerung von **24** bis **48** Stunden für die DNS-Propagierung der Änderung erforderlich sein.
>
> Insgesamt wird die Änderung der DNS-Server einer Domain mit der aktiven **DNSSEC** Lösung nach **48** bis **72** Stunden voll wirksam.
>

## Weiterführende Informationen

[Allgemeine Informationen zu den OVHcloud DNS-Servern](/pages/web/domains/dns_server_general_information)

[OVHcloud DNS-Zone bearbeiten](/pages/web/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.