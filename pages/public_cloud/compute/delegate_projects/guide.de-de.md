---
title: Projekte delegieren
excerpt: Erfahren Sie hier, wie Sie Zugriffsrechte auf ein Public Cloud Projekt anderen Kunden-Accounts übertragen
updated: 2022-04-04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Je nach Anwendungsbereich kann es sein, dass Sie anderen Nutzern Zugang zu Ihrem Projekt geben müssen, ohne diesen jedoch vollen Zugang zu Ihren Dienstleistungen zu gewähren.<br>
Zu diesem Zweck können Sie anderen OVHcloud Kunden-Accounts Lese- oder Schreibrechte für Ihre Projekte übertragen.

**Diese Anleitung erklärt, wie Sie Zugriffsrechte auf ein Public Cloud Projekt über Ihr Kundencenter vergeben.**

## Voraussetzungen

- Sie haben eine [Public Cloud](https://www.ovhcloud.com/de/public-cloud/) Instanz in Ihrem OVHcloud Account.
- Sie verfügen über ein Backup einer [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/instance-backup/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung 

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und öffnen Sie Ihr `Public Cloud`{.action} Projekt. Klicken Sie auf `Contacts and Rights`{.action} im Bereich **Project Management**.

Auf dieser Seite können Sie die zu Ihrem Projekt gehörenden Kontakte einsehen.

![public-cloud-delegate-projects](images/delegatingproject01.png){.thumbnail}

Sie können die `Ändern`{.action} Buttons verwenden, um die aktuellen Kontakte zu ändern. Folgen Sie den Anweisungen in unserer Anleitung "[Kontakte eines Projekts ändern](/pages/public_cloud/compute/change_project_contacts)", um den Prozess abzuschließen.

### Kontakte und Rechte hinzufügen

Klicken Sie auf die Schaltfläche `Hinzufügen`{.action}, um einen Benutzer hinzuzufügen und Rechte zuzuweisen. Geben Sie im angezeigten Fenster die Benutzerkennung (in der Form xx00000-ovh) ein und wählen Sie im Drop-down-Menü `Nur Lesen` oder `Lesen/Schreiben` aus.

![public-cloud-delegate-projects](images/delegatingproject02.png){.thumbnail}

> [!primary]
>
> Die Berechtigung `Lesen/Schreiben` erlaubt Änderungen am Projekt, die sich auf die zukünftige Abrechnung auswirken könnten.
>
 
Klicken Sie auf `Hinzufügen`{.action}, um die Zugriffsdelegation zu bestätigen. Sie und der neue Benutzer erhalten dann eine Bestätigungmail; jener kann das Projekt ab sofort im Bereich Public Cloud des Kundencenters öffnen.

Die hinzugefügten OVHcloud Kunden-Accounts und ihre jeweiligen Rechte werden nach einem Neuladen der Seite in der Tabelle aufgeführt.

![public-cloud-delegate-projects](images/delegatingproject03.png){.thumbnail}

Um einen Zugang zu widerrufen, klicken Sie auf den Button `...`{.action} und wählen Sie `Löschen`{.action}.

## Weiterführende Informationen

[Erste Schritte mit einer Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps)

[Informationen zu den Abrechnungsoptionen der Public Cloud](/pages/public_cloud/compute/analyze_billing)

[Zugriffs- und Sicherheitseinstellungen in Horizon](/pages/public_cloud/compute/access_and_security_in_horizon)

Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](https://www.ovhcloud.com/de/professional-services/), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.