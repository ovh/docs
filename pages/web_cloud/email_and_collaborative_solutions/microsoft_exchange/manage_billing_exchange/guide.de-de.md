---
title: 'Die Abrechnung für Ihre Exchange Accounts verwalten'
excerpt: 'Erfahren Sie hier, wie Sie die Abrechnung für OVHcloud Exchange im Kundencenter verwalten'
updated: 2025-09-22
---

## Ziel

Die Dienste Hosted Exchange und Private Exchange bieten hinsichtlich der Abrechnung einzelner Accounts eine flexible Verwaltung.

**Diese Anleitung erläutert alle Schritte zur Konfiguration der Laufzeit von Exchange Accounts über Ihr OVHcloud Kundencenter.**

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben bereits einen [OVHcloud Exchange](/links/web/emails-hosted-exchange) Dienst eingerichtet.

## In der praktischen Anwendung

1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
1. Öffnen Sie den Bereich `Web Cloud`{.action}.
1. In der Rubrik `MICROSOFT`{.action}, klicken Sie auf `Exchange`{.action}.
1. Wählen Sie den gewünschten Dienst aus.

### Hosted Exchange

#### Zusätzliche Accounts bestellen

Gehen Sie dann auf den Tab `E-Mail-Accounts`{.action}. Klicken Sie dann links auf den Button `Aktionen`{.action} und auf `Accounts bestellen`{.action}.

![billing_exchange](images/billing-exchange-00.png){.thumbnail}

#### Den Verlängerungszeitraum Ihrer Accounts ändern <a name="periodicity"></a>

Klicken Sie dann rechts oben auf den Button `Aktionen`{.action} und auf `Verlängerung konfigurieren`{.action}.

![billing_exchange](images/billing-exchange-01.png){.thumbnail}

Sie werden weitergeleitet zum Bereich „Meine Dienste“ Ihres Kundencenters. Sie werden feststellen, dass ein Filter angewendet wird, um nur den Exchange Dienst anzuzeigen, für den Sie die Änderung vornehmen.

Klicken Sie in der Tabelle auf `...`{.action} und danach auf `Abrechnung bearbeiten`{.action}.

![billing_exchange](images/billing-exchange-02.png){.thumbnail}

In der neuen Ansicht können Sie die Abrechnungsintervalle für jeden Ihrer Accounts anzeigen und ändern. Es ist möglich, Änderungen in der Spalte „**Verlängerung**“ bei einem oder mehreren Accounts gleichzeitig vorzunehmen. Jede Änderung an einem Account wird an dem Datum wirksam, das in der Spalte „**Ablaufdatum**“ angegeben ist.

Im folgenden Beispiel sind die notwendigen Schritte aufgeführt, um einen Acccount auf die monatliche Verlängerung einzustellen:

> Klicken Sie im ersten Schritt auf „**Monatlich**“ rechts vom Account Ihrer Wahl und danach weiter unten links auf `Weiter`{.action}.
>
> Im zweiten Schritt zeigt eine Zusammenfassung die durchzuführende Änderung an. Klicken Sie unten links auf `Absenden`{.action}.
>
> ![billing_exchange](images/billing-exchange-03.png){.thumbnail}

#### Accounts entfernen

Um einen Account von der Hosted Exchange Plattform zu löschen, müssen Sie ihn zunächst kündigen, indem Sie die Konfiguration für die Verlängerung auf „**Zum Ablaufdatum schließen**“ ändern. Informationen hierzu finden Sie im Abschnitt [Den Verlängerungszeitraum Ihrer Accounts ändern](#periodicity).

Hiernach wird der Account am Ablaufdatum gesperrt. Wenn Sie die vom Account verwendete E-Mail-Adresse vor dem Ablaufdatum löschen möchten (etwa, weil diese Adresse direkt weiter verwendet werden soll), setzen Sie noch den Account zurück.

Gehen Sie dann auf den Tab `E-Mail-Accounts`{.action}. Klicken Sie auf `...`{.action} rechts des betreffenden Accounts und schließlich auf `Zurücksetzen`{.action}. Nach dem Zurücksetzen bleibt das Konto leer, bis es abläuft.

### Private Exchange

> [!primary]
>
> Auf einer Private Exchange Plattform werden Accounts nur monatlich verlängert. Es muss keine Verlängerung konfiguriert werden.

#### Zusätzliche Accounts bestellen

Gehen Sie auf den Tab `E-Mail-Accounts`{.action}. Klicken Sie dann links auf den Button `Aktionen`{.action} und auf `Account hinzufügen`{.action}. Der Account wird für den aktuellen Monat in Rechnung gestellt.

![billing_exchange](images/billing-exchange-06.png){.thumbnail}

#### Accounts entfernen

> [!warning]
>
> Um einen E-Mail-Account auf einer Private Exchange Plattform löschen zu können, **muss dieser konfiguriert worden sein** (verbunden mit einem Domainnamen Ihrer Exchange Plattform). Ein unkonfigurierter Account kann nicht gelöscht werden.

Gehen Sie auf den Tab `E-Mail-Accounts`{.action}. Klicken Sie auf `...`{.action} rechts des betreffenden Accounts und schließlich auf `Löschen`{.action}. Der Account wird sofort von der Plattform gelöscht; es erfolgt keine Kündigung.

![billing_exchange](images/billing-exchange-07.png){.thumbnail}

### Plattform kündigen

Nachdem Sie die E-Mail-Accounts gelöscht haben, müssen Sie die Ihrer Exchange Plattform zugeordneten Domains löschen, bevor Sie diese kündigen können. Gehen Sie hierzu auf den Tab `Assoziierte Domains`{.action}. Klicken Sie auf den Button `...`{.action} in der Zeile des Domainnamens, den Sie löschen möchten, und klicken Sie dann auf `Diese Domain löschen`{.action}.

![billing_exchange](images/billing-exchange-del-dom.png){.thumbnail}

Klicken Sie im Verwaltungsfenster Ihrer Exchange-Plattform oben rechts auf `Aktionen`{.action} und dann auf `Kündigen`{.action}.

![billing_exchange](images/billing-exchange-08.png){.thumbnail}

> [!primary]
>
> Diese Aktion führt zur Aussetzung und anschließenden Löschung sämtlicher Accounts auf der Exchange Plattform am Ablaufdatum.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
