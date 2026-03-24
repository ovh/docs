---
title: "Fehler bei Domainnamen-Operationen beheben"
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232);
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Bei der Erstellung, dem Transfer oder dem Inhaberwechsel eines Domainnamens können Fehler auftreten, die ein Eingreifen Ihrerseits erfordern.

**Erfahren Sie, wie Sie vorgehen, wenn ein Fehler bei einem Domainnamen auftritt.**

## Voraussetzungen

- Sie sind Inhaber eines oder mehrerer [Domainnamen](/links/web/domains).
- Ihre [Zahlungen](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) und [Verlängerungen](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) für Ihre Domainnamen sind auf dem aktuellen Stand.

<!-- CP-NAV-START:web-ongoing-operations -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Laufende Vorgänge](/links/control-panel/web-ongoing-operations)
- **Navigationspfad:** `Web Cloud`{.action} > `Laufende Vorgänge`{.action} > Wählen Sie den Tab `Domain`{.action} oder `DNS`{.action} aus.

---
<!-- CP-NAV-END:web-ongoing-operations -->

## In der praktischen Anwendung

### Übersicht der Verwaltungsoberfläche für laufende Vorgänge

Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Öffnen Sie die Seite [Laufende Vorgänge](/links/control-panel/web-ongoing-operations).
>>
> **Schritt 2**
>>
>> Eine Tabelle listet alle Vorgänge im Zusammenhang mit den Domainnamen in Ihrem Kundencenter auf.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}
>>
>> - `Domain`: Der von der Operation betroffene Domainname.
>> - `Operation`: Die laufende Operation für den Domainnamen.
>> - `Kommentar`: Details zum laufenden Vorgang. Anweisungen.
>> - `Bearbeitungsdatum`: Datum der Erstellung der Operation.
>> - `Datum des Updates`: Zeitstempel der Aktualisierung der laufenden Operation.
>> - `Enddatum`: Das Enddatum der Operation.
>> - `Status`: Der aktuelle Status der Operation.

Nicht alle in dieser Tabelle aufgeführten Operationen erfordern Ihren Eingriff, damit sie ordnungsgemäß durchgeführt werden.

Diese Anleitung behandelt **fehlerhafte** Operationen anhand wiederkehrender Situationen.

### Situationen

> [!primary]
>
> Die nachstehende Liste der Situationen ist nicht erschöpfend. Falls Sie einen Fehler feststellen, der in dieser Anleitung nicht im Einzelnen beschrieben ist:
>
> - Stellen Sie sicher, dass Ihre [Zahlungen](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) und [Verlängerungen](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) der Domainnamen auf dem aktuellen Stand sind.
> - Überprüfen Sie, ob eine Aktion verfügbar ist, indem Sie die Optionen rechts neben der betreffenden Operation aufrufen.
> - Lesen Sie die beschreibende Nachricht und überprüfen Sie, ob sie Ihnen bei der Behebung des Fehlers hilft.
>
> Sollten Sie den Fehler trotz dieser Überprüfungen nicht beheben können, [erstellen Sie ein Support-Ticket](/links/support) über Ihr Kundencenter.

**Klicken Sie auf die Situation Ihrer Wahl, um den Inhalt anzuzeigen.**

/// details | Dokumentenanfrage

Bestimmte Domainendungen erfordern, dass Sie ihre Registrierung durch die Vorlage von Dokumenten begründen. Ist dies der Fall, müssen Sie die Dokumente über Ihr OVHcloud Kundencenter übermitteln.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Öffnen Sie die Seite [Laufende Vorgänge](/links/control-panel/web-ongoing-operations).
>>
> **Schritt 2**
>>
>> Suchen Sie die fehlerhafte Operation in der Tabelle.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie rechts neben der betreffenden Operation auf den Button `...`{.action}.
>>
> **Schritt 4**
>>
>> Das folgende Fenster wird angezeigt. Im Bereich "Description" erhalten Sie Informationen zum erforderlichen Dokument sowie einen Button zum Hochladen Ihrer Datei.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

///

/// details | Fehlende Informationen

Wenn Sie Ihren Domainnamen registrieren, müssen die Kontaktdaten manchmal vervollständigt werden. Wenn diese nicht den Kriterien für den Domainnamen entsprechen, kann der folgende Fehler auftreten.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Öffnen Sie die Seite [Laufende Vorgänge](/links/control-panel/web-ongoing-operations).
>>
> **Schritt 2**
>>
>> Suchen Sie die fehlerhafte Operation in der Tabelle.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie rechts neben der betreffenden Operation auf den Button `...`{.action}.
>>
> **Schritt 4**
>>
>> Das folgende Fenster wird angezeigt. Füllen Sie die Felder mit den Kontaktinformationen aus.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

///

/// details | Falscher Transfer-Code

Wenn Sie Ihren Domainnamen zu OVHcloud transferieren, müssen Sie bei der Bestellung einen Transfer-Code (**authInfo** / **AuthCode**) eingeben. Ist dieser Code falsch, wird die Operation ausgesetzt. Sie können den Vorgang mit dem korrekten Code neu starten.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Öffnen Sie die Seite [Laufende Vorgänge](/links/control-panel/web-ongoing-operations).
>>
> **Schritt 2**
>>
>> Suchen Sie die fehlerhafte Operation in der Tabelle.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie rechts neben der betreffenden Operation auf den Button `...`{.action}.
>>
> **Schritt 4**
>>
>> Das folgende Fenster wird angezeigt. Geben Sie den Transfer-Code (**authInfo** / **AuthCode**) ein und starten Sie den Vorgang neu.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

///

/// details | DNS-Server-Fehler

Ein Fehler kann auftreten, wenn die DNS-Server, die Sie einem Domainnamen zuweisen, nicht funktionieren.
In der folgenden Situation antwortet die IP-Adresse des DNS-Servers nicht.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Öffnen Sie die Seite [Laufende Vorgänge](/links/control-panel/web-ongoing-operations).
>>
> **Schritt 2**
>>
>> Suchen Sie die fehlerhafte Operation in der Tabelle.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Wählen Sie im Bereich `Domainnamen`{.action} den betreffenden Domainnamen aus und klicken Sie dann auf den Tab `DNS-Server`{.action}.
>>
> **Schritt 4**
>>
>> In diesem Tab können Sie [Ihre DNS-Server bearbeiten](/pages/web_cloud/domains/dns_server_edit).

///

/// details | Fehler bei einer Domain mit der Endung .ie, .de oder .it nach einem DNS-Update

Wenn Sie Ihre DNS-Server ändern, kann die Registry die neuen DNS-Server und die zugehörige DNS-Zone überprüfen und den Domainnamen sperren, falls die Konfiguration nicht konform ist.

> [!warning]
>
> Diese Art der Sperrung wird von der Registry und nicht von OVHcloud initiiert. Selbst wenn der Domainname von der Registry gesperrt wird, erscheinen seine DNS-Server als `Aktiv` in Ihrem OVHcloud Kundencenter.

Um zu überprüfen, ob Ihr Domainname gesperrt ist, klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Öffnen Sie die Seite [Laufende Vorgänge](/links/control-panel/web-ongoing-operations).
>>
> **Schritt 2**
>>
>> Suchen Sie die fehlerhafte Operation in der Tabelle.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Um Ihren Domainnamen zu überprüfen, empfehlen wir die Verwendung des von der Registry bereitgestellten Prüftools:
>>
>> - Für eine **.de**-Domain: <https://nast.denic.de/>.
>> - Für eine **.it**-Domain: <https://dns-check.nic.it/>.
>>
>> > [!primary]
>> >
>> > Wenn Ihre Registry kein Tool zur Überprüfung von DNS-Servern bereitstellt, können Sie Ihre neuen DNS-Server mit dem Befehl `nslookup` in der Windows-Eingabeaufforderung oder mit dem Befehl `dig` in einem Linux- oder macOS-Terminal abfragen.
>> >
>> > Wenn Ihre DNS-Server erreichbar sind, gibt das Tool eine IP-Adresse zurück.
>> >
>> > Vergewissern Sie sich in jedem Fall beim Administrator des DNS-Servers, dass dieser korrekt konfiguriert ist, um die DNS-Zone Ihres Domainnamens zu hosten.
>>
> **Schritt 4**
>>
>> Wenn Sie die Fehlerursache identifiziert und behoben haben, klicken Sie rechts neben der betreffenden Operation auf den Button `...`{.action} und starten Sie die DNS-Verifizierungsoperation neu.

///

/// details | Interner OVHcloud-Fehler

Sie können einen Fehler mit dem Kommentar "internal error" feststellen.

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Öffnen Sie die Seite [Laufende Vorgänge](/links/control-panel/web-ongoing-operations).
>>
> **Schritt 2**
>>
>> Suchen Sie die fehlerhafte Operation in der Tabelle.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Dieser Fehler erlaubt keine Aktion Ihrerseits über das OVHcloud Kundencenter.
>>
>> Überprüfen Sie zunächst, ob Ihr Domainname und seine DNS-Server aktiv sind.
>>
>> Wenn Sie eine Anomalie feststellen, die nicht mit der Konfiguration der DNS-Server oder der DNS-Zone zusammenhängt, [kontaktieren Sie den OVHcloud Support](/links/support), um die Ursache der Störung zu ermitteln.

///

## Weiterführende Informationen

[Einen Domainnamen zu OVHcloud transferieren](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Einen Domainnamen zu einem anderen Registrar transferieren](/pages/web_cloud/domains/transfer_outgoing_domain)

[DNS-Server einer OVHcloud Domain bearbeiten](/pages/web_cloud/domains/dns_server_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
