---
title: "FAQ zu Domainnamen & DNS"
excerpt: "Hier finden Sie die Antworten auf die häufigsten Fragen zu Domainnamen, DNS-Servern und DNS-Zonen"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
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

**Klicken Sie auf die Fragen unten, um die Erklärungen anzuzeigen.**

## Abonnement eines Domainnamens

/// details | Wie kann ich einen Domainnamen bei OVHcloud bestellen?

Folgen Sie diesen Schritten:

1. Öffnen Sie die [OVHcloud Website](/links/website).
2. Geben Sie auf der angezeigten Seite im dafür vorgesehenen Feld den Domainnamen ein, den Sie reservieren möchten (z.B. `domain.tld`), und klicken Sie auf die Schaltfläche `Suchen`{.action}.
3. Auf der neuen Seite zeigt unsere Oberfläche an, ob der gewählte Domainname zum Kauf verfügbar ist. Falls er bereits mit der eingegebenen Schreibweise reserviert ist, ändern Sie ihn und starten Sie eine neue Verfügbarkeitsprüfung.
4. Wenn Sie einen verfügbaren Domainnamen gefunden haben, klicken Sie auf `Kaufen`{.action} und dann in der rechten Spalte auf `Bestellung fortsetzen`{.action}.
5. Wählen Sie etwaige zusätzliche Optionen oder Dienste aus, die Sie zusammen mit Ihrem Domainnamen abonnieren möchten, und klicken Sie auf `Weiter`{.action}, bis der Bestellvorgang Sie auffordert, sich zu authentifizieren oder ein OVHcloud Kundenkonto zu erstellen.
6. Nach der Authentifizierung mit Ihrem OVHcloud Kundenkonto können Sie die Kontaktdaten (Inhaber, Administrator, Technik) Ihres Domainnamens anpassen. Klicken Sie auf `Weiter`{.action}, um zur Bestellübersicht zu gelangen.
7. Auf der Seite `Bestellübersicht` können Sie bei Bedarf die DNS-Konfiguration, die auf Ihren Domainnamen angewendet wird, ändern, indem Sie auf den Link `Konfiguration ändern`{.action} klicken. Sobald Ihre Änderungen abgeschlossen sind, klicken Sie auf `Bezahlen`{.action}, um zum letzten Schritt Ihrer Bestellung zu gelangen.

Bezahlen Sie Ihre Bestellung, um die Reservierung Ihres Domainnamens und die Einrichtung der abonnierten Dienste und Optionen zu starten.

Kurze Zeit später erhalten Sie eine Bestätigungs-E-Mail für Ihre Bestellung.
Sie können Ihren Domainnamen dann über Ihr [OVHcloud Kundencenter](/links/manager) verwalten.

Erstellen Sie bei Bedarf ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help).

///

/// details | Wie kann ich einen Domainnamen auf dem Sekundärmarkt kaufen?

Der Kauf eines Domainnamens auf dem Sekundärmarkt folgt dem gleichen Ablauf wie das Abonnieren eines Domainnamens.

Folgen Sie diesen Schritten:

1. Öffnen Sie die [OVHcloud Website](/links/website).
2. Geben Sie auf der angezeigten Seite im dafür vorgesehenen Feld den Domainnamen ein, den Sie reservieren möchten (z.B. `domain.tld`), und klicken Sie auf die Schaltfläche `Suchen`{.action}.
3. Auf der neuen Seite zeigt unsere Oberfläche an, ob der gewählte Domainname zum Kauf verfügbar ist. Falls er bereits mit der eingegebenen Schreibweise reserviert ist, ändern Sie ihn und starten Sie eine neue Verfügbarkeitsprüfung.
4. Wenn Sie einen verfügbaren Domainnamen gefunden haben, klicken Sie auf `Kaufen`{.action} und dann in der rechten Spalte auf `Bestellung fortsetzen`{.action}.
5. Wählen Sie etwaige zusätzliche Optionen oder Dienste aus, die Sie zusammen mit Ihrem Domainnamen abonnieren möchten, und klicken Sie auf `Weiter`{.action}, bis der Bestellvorgang Sie auffordert, sich zu authentifizieren oder ein OVHcloud Kundenkonto zu erstellen.
6. Nach der Authentifizierung mit Ihrem OVHcloud Kundenkonto können Sie die Kontaktdaten (Inhaber, Administrator, Technik) Ihres Domainnamens anpassen. Klicken Sie auf `Weiter`{.action}, um zur Bestellübersicht zu gelangen.
7. Auf der Seite `Bestellübersicht` können Sie bei Bedarf die DNS-Konfiguration, die auf Ihren Domainnamen angewendet wird, ändern, indem Sie auf den Link `Konfiguration ändern`{.action} klicken. Sobald Ihre Änderungen abgeschlossen sind, klicken Sie auf `Bezahlen`{.action}, um zum letzten Schritt Ihrer Bestellung zu gelangen.

Bezahlen Sie Ihre Bestellung, um die Reservierung Ihres Domainnamens und die Einrichtung der abonnierten Dienste und Optionen zu starten.

Kurze Zeit später erhalten Sie eine Bestätigungs-E-Mail für Ihre Bestellung.
Sie können Ihren Domainnamen dann über Ihr [OVHcloud Kundencenter](/links/manager) verwalten.

Erstellen Sie bei Bedarf ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help).

///

## Verwaltung eines Domainnamens

/// details | Wie kann ich feststellen, ob mein Domainname bei OVHcloud registriert ist?

Dazu können Sie eine [WHOIS](/links/web/domains-whois)-Abfrage durchführen, um herauszufinden, wo Ihr Domainname registriert ist, und um zu überprüfen, ob Sie als Inhaber des Domainnamens eingetragen sind.

Jeder Registrar (wie OVHcloud) kann selbst entscheiden, wie die Informationen zu einem Domainnamen im WHOIS angezeigt werden.

Suchen Sie nach Durchführung der WHOIS-Abfrage im Ergebnis nach mindestens einer der folgenden Zeilen:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Wenn Sie mindestens eine dieser Zeilen im Ergebnis sehen, ist Ihr Domainname bei OVHcloud registriert.

Andernfalls ist Ihr Domainname bei einem anderen Registrar registriert. Suchen Sie dann nach den Zeilen mit dem Begriff `Registrar`, um den Registrar zu identifizieren, bei dem Ihr Domainname registriert ist.

///

/// details | Wie kann ich das Ablaufdatum eines Domainnamens herausfinden?

Die schnellste Lösung ist eine [WHOIS](/links/web/domains-whois)-Abfrage für den Domainnamen. Suchen Sie nach Durchführung der Abfrage im Ergebnis nach der Zeile, die dem Ablaufdatum entspricht (z.B. `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, usw.).

Wenn Ihr Domainname bei OVHcloud registriert ist, klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Meine Angebote und Dienste](/links/control-panel/billing-services).
>>
> **Schritt 2**
>>
>> Suchen Sie in der angezeigten Tabelle die Zeile, die Ihrem Domainnamen entspricht, und notieren Sie das Datum in der Spalte `Wirkungsdatum`. Dieses Datum entspricht dem Ablaufdatum Ihres Domainnamens.

///

/// details | Wie kann ich das jährliche Ablaufdatum eines Domainnamens ändern?

Das jährliche Ablaufdatum eines Domainnamens (z.B. 24. September) wird auf der Grundlage des Registrierungsdatums (Erstellungsdatum) des Domainnamens festgelegt.

In der Regel ist das jährliche Ablaufdatum eines Domainnamens dasselbe wie das Datum, an dem Sie den Domainnamen registriert haben.

Daher ist es nicht möglich, das jährliche Ablaufdatum eines Domainnamens zu ändern.

///

<br>

/// details | Wie kann ich einen Tippfehler in meinem Domainnamen korrigieren?

Sobald ein Domainname bestellt wurde, wird er auf Basis der Zeichen registriert, die Sie bei Ihrer Bestellung angegeben haben. Die Registrierung wird von der Registry der Endung Ihres Domainnamens durchgeführt (z.B. die *.com*-Registry), und beim Registrar (wie OVHcloud) fallen Reservierungsgebühren an.

Ein Domainname ist eine einzigartige Adresse im Internet, zum Beispiel: `ovhcloud.com`.
Jede Änderung an diesem Namen, ob ein Zeichen oder eine Endung (.com, .fr, .net usw.), macht ihn zu einem völlig anderen Domainnamen.

Wenn Sie bei Ihrer Bestellung einen Tippfehler gemacht haben, kann dieser daher nicht geändert oder korrigiert werden. Sie müssen unabhängig vom vorherigen einen neuen Domainnamen bestellen (sofern die gewünschte neue Schreibweise nicht bereits von jemand anderem reserviert ist).

Domainnamen gelten als kundenspezifische Produkte, da sie speziell für einen Inhaber registriert und ab dem Zeitpunkt der Bestellung für andere gesperrt werden. Daher können sie nach der Registrierung nicht erstattet werden.

///

/// details | Wie kann ich einen bereits bestellten Domainnamen ändern?

Sobald ein Domainname bestellt wurde, wird er auf Basis der Zeichen registriert, die Sie bei Ihrer Bestellung angegeben haben. Die Registrierung wird von der Registry der Endung Ihres Domainnamens durchgeführt (z.B. die *.com*-Registry), und beim Registrar (wie OVHcloud) fallen Reservierungsgebühren an.

Ein Domainname ist eine einzigartige Adresse im Internet, zum Beispiel: `ovhcloud.com`.
Jede Änderung an diesem Namen, ob ein Zeichen oder eine Endung (.com, .fr, .net usw.), macht ihn zu einem völlig anderen Domainnamen.

Wenn Sie bei Ihrer Bestellung einen Tippfehler gemacht haben, kann dieser daher nicht geändert oder korrigiert werden. Sie müssen unabhängig vom vorherigen einen neuen Domainnamen bestellen (sofern die gewünschte neue Schreibweise nicht bereits von jemand anderem reserviert ist).

Domainnamen gelten als kundenspezifische Produkte, da sie speziell für einen Inhaber registriert und ab dem Zeitpunkt der Bestellung für andere gesperrt werden. Daher können sie nach der Registrierung nicht erstattet werden.

///

/// details | Wie kann ich einen Domainnamen löschen?

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Meine Angebote und Dienste](/links/control-panel/billing-services).
>>
> **Schritt 2**
>>
>> Suchen Sie in der angezeigten Tabelle die Zeile, die Ihrem Domainnamen entspricht, klicken Sie rechts auf `...`{.action} und dann auf `Mein Abonnement kündigen`{.action}.
>>
> **Schritt 3**
>>
>> Wählen Sie auf der angezeigten Seite den Kündigungsmodus (sofort oder zum Ablaufdatum des Dienstes) und klicken Sie unten auf die Schaltfläche `Ja, kündigen`{.action}.
>>
>> Ihr Domainname wird dann zum Ablaufdatum gesperrt. Nach diesem Datum wird er innerhalb von maximal 60 Tagen **endgültig** gelöscht. Diese Frist wird von der **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) festgelegt, um sicherzustellen, dass der Domainname vollständig gelöscht wird und für die Registrierung durch einen anderen Inhaber verfügbar wird.

> [!primary]
>
> Sobald die Kündigung beantragt wurde, können Sie die Löschung beschleunigen, indem Sie ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) erstellen. Zur Beschleunigung der Löschung müssen Belege vorgelegt werden.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Wie kündige ich meine OVHcloud Dienste](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///

/// details | Ich habe eine E-Mail zur Bestätigung der Inhaberinformationen meines Domainnamens erhalten. Was soll ich tun?

Wenn Sie Zweifel an der Echtheit der erhaltenen E-Mail haben, lesen Sie zunächst unsere Anleitung "[Vorsicht vor Betrug – Betrügerische E-Mails und Phishing erkennen](/pages/account_and_service_management/account_information/phishing_care)".

Gemäß einer Richtlinie der **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) vom 01.09.2014 sind Domain-Registrare (z.B. OVHcloud) verpflichtet, die Gültigkeit der Kontaktdaten der Inhaber von Domainnamen zu überprüfen. OVHcloud sendet dann eine E-Mail an den Inhaber des Domainnamens an die bei OVHcloud hinterlegte Kontakt-E-Mail-Adresse.

Sie erhalten diese E-Mail, wenn Sie eine der folgenden Aktionen durchführen:

- Registrierung eines neuen Domainnamens.
- Transfer eines Domainnamens.
- Änderung der Kontaktdaten Ihres Domainnamens.

Diese E-Mail enthält einen Link zur schnellen Bestätigung Ihrer Kontaktdaten als rechtmäßiger Inhaber des Domainnamens.

**Wichtig:** Diese Bestätigung muss innerhalb von 15 Tagen erfolgen. Andernfalls wird der Domainname technisch gesperrt. Er bleibt vertraglich auf Ihren Namen registriert, ist aber im Internet nicht mehr erreichbar. Besucher Ihrer Website sehen dann eine Fehlermeldung.

Sie können während der ersten 15 Tage folgende E-Mails erhalten:

- **Tag 0**: Unmittelbar nach der Bestellung des Domainnamens oder der Änderung seiner Kontaktdaten erhalten Sie (oder die als Inhaber registrierte Person) die erste E-Mail mit einem Bestätigungslink.
- **Tage 4, 9 und 13 (Erinnerungs-E-Mails)**: Wenn Sie den Domainnamen noch nicht bestätigt haben, erhalten Sie die E-Mail erneut.
- **Tag 14**: Wenn Sie den Domainnamen immer noch nicht bestätigt haben, wird die E-Mail ein letztes Mal gesendet. Außerdem wird eine E-Mail an die E-Mail-Adresse des Administrators gesendet, um darüber zu informieren, dass die Kontaktdaten nicht bestätigt wurden.
- **Tag 15**: Wenn der Inhaber des Domainnamens noch nicht geantwortet hat, senden wir eine E-Mail an den Administrator, um ihn über die Situation und die Deaktivierung des Domainnamens zu informieren.

Nach diesen 15 Tagen sendet das System weitere E-Mails (bis zu 9 E-Mails), bevor Ihr Domainname gelöscht wird. Diese Löschung erfolgt 60 Tage nach Tag 0.

> [!warning]
>
> Je nach Domainendung (z.B. *.com*, *.net* usw.) können einige der oben genannten Fristen variieren. Wir empfehlen dringend, die Bestätigung der Kontaktdaten bei der Registry Ihrer Domainendung durchzuführen.

///

/// details | Ich habe die E-Mail zur Bestätigung der Inhaberinformationen nicht erhalten und mein Domainname ist gesperrt. Was soll ich tun?

Wenn Sie die Bestätigungs-E-Mail für den Inhaber Ihres Domainnamens nicht erhalten haben, überprüfen Sie folgende Punkte:

1. Die für den Domaininhaber hinterlegte E-Mail-Adresse ist gültig und funktionsfähig.
2. Die Bestätigungs-E-Mail befindet sich nicht in Ihrem Spam-/Junk-Ordner.

Wenn Sie nach Überprüfung der beiden obigen Punkte die Bestätigungs-E-Mail immer noch nicht finden können, empfehlen wir, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu erstellen, um eine erneute Zustellung der E-Mail anzufordern.

///

/// details | Was ist ein IDN (Internationalized Domain Name)?

Ursprünglich konnten Domainnamen nur bestimmte **ASCII**-Zeichen enthalten (wie die 26 Buchstaben des lateinischen Alphabets). Ein **I**nternationalized **D**omain **N**ame (**IDN**) ermöglicht die Verwendung von Sonder- oder Akzentzeichen sowie anderen Alphabeten (z.B. *Kyrillisch*).

Bei OVHcloud können Sie IDNs bestellen und sie wie reguläre Domainnamen mit unseren anderen Diensten verwenden (Webhosting, DNS-Zonen usw.<sup>1</sup>).

Nach der Bestellung erscheinen IDNs in Ihrem [OVHcloud Kundencenter](/links/manager) im Format **xn--**.

Auch wenn Ihr Domainname in [internationalisierter Notation (IDN)](https://en.wikipedia.org/wiki/Internationalized_domain_name) in Ihrem [OVHcloud Kundencenter](/links/manager) angezeigt wird, funktioniert er anderswo normal und wird normal angezeigt. Ihre Website-Adresse wird wie gewünscht angezeigt. Ihre E-Mail-Adressen werden Ihren Kontakten ebenfalls wie gewünscht angezeigt.

> [!alert]
>
> <sup>1</sup>: Es wird nicht empfohlen, eine E-Mail-Adresse mit einem IDN-Domainnamen über einen E-Mail-Client (Outlook, macOS Mail usw.) zu verwenden. Einige E-Mail-Clients unterstützen noch keine Domainnamen mit Akzentzeichen, was die E-Mail-Übertragung blockiert. Wenn ein Absender versucht, Ihnen eine E-Mail zu senden, erhält er eine automatische Nachricht, dass Ihre E-Mail-Adresse nicht existiert.
>
> **Wir empfehlen, zusätzlich zu Ihrem Domainnamen mit Akzentzeichen denselben Domainnamen ohne Akzentzeichen zu reservieren, um E-Mail-Kompatibilitätsprobleme zu vermeiden.**

///

/// details | Wie kann ich einen IDN (Internationalized Domain Name) korrigieren?

Wie bei regulären Domainnamen wird ein Domainname oder IDN nach der Bestellung auf Basis der Zeichen registriert, die Sie bei Ihrer Bestellung angegeben haben.

Wenn Sie bei Ihrer Bestellung einen Tippfehler gemacht haben, kann dieser daher nicht korrigiert werden. Sie müssen unabhängig vom vorherigen einen neuen Domainnamen bestellen (sofern die gewünschte neue Schreibweise nicht bereits von jemand anderem reserviert ist).

///

/// details | Wie kann ich einen einzelnen Domainnamen in einem Alldom-Paket verlängern?

Dazu müssen Sie mindestens als ["Rechnungskontakt"](/pages/account_and_service_management/account_information/managing_contacts) für den betreffenden Domainnamen eingetragen sein. Anschließend müssen Sie den Verlängerungsmodus des Domainnamens auf **automatische Verlängerung** umstellen.

Klicken Sie dazu auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Meine Angebote und Dienste](/links/control-panel/billing-services).
>>
> **Schritt 2**
>>
>> Klicken Sie in der angezeigten Tabelle rechts neben dem betreffenden Domainnamen auf `...`{.action} in der Spalte `Aktionen` und dann auf `Verlängerung konfigurieren`{.action}. Sie können dann die Verlängerung dieses Domainnamens auf den Modus **automatische Verlängerung** einstellen.

> [!primary]
>
> Wenn Sie ein altes Webhosting-Paket mit einem kostenlosen Domainnamen haben und dieses Hosting-Paket ändern, kann dies in einigen Fällen den kostenlosen Status des Domainnamens aufheben.
>
> Erstellen Sie im Zweifelsfall ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help), in dem Sie den Domainnamen und das betreffende Webhosting angeben.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Verlängerung von OVHcloud Diensten](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///

## Transfer eines Domainnamens

/// details | Ist mein Domainname nach einem Inhaberwechsel übertragbar?

Die **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) hat Sicherheitsmaßnahmen eingeführt, um unbefugte oder missbräuchliche Transfers oder Inhaberwechsel von Domainnamen zu verhindern.

ICANN hat eine unverzichtbare Frist von **60** Tagen zwischen jeder Operation festgelegt, die an einem Domainnamen durchgeführt werden kann (Erstellung, Inhaberwechsel, Transfer).

Die von ICANN definierten Regeln müssen von den Registraren (wie OVHcloud) strikt eingehalten werden.

Sie haben daher keine andere Wahl, als das Ende der 60-tägigen Frist abzuwarten, um Ihren Domainnamen nach einem Inhaberwechsel zu transferieren.

///

/// details | Mein Domainname ist für 60 Tage gegen Transfer gesperrt. Was soll ich tun?

Die **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) hat Sicherheitsmaßnahmen eingeführt, um unbefugte oder missbräuchliche Transfers oder Inhaberwechsel von Domainnamen zu verhindern.

ICANN hat eine unverzichtbare Frist von **60** Tagen zwischen jeder Operation festgelegt, die an einem Domainnamen durchgeführt werden kann (Erstellung, Inhaberwechsel, Transfer).

Die von ICANN definierten Regeln müssen von den Registraren (wie OVHcloud) strikt eingehalten werden.

Sie haben daher keine andere Wahl, als das Ende der 60-tägigen Frist abzuwarten, um eine neue Operation (Inhaberwechsel oder Transfer) an Ihrem Domainnamen durchzuführen.

///

/// details | Ich kann meinen Domainnamen nicht in meinem Kundencenter finden. Was soll ich tun?

Führen Sie zunächst eine [WHOIS](/links/web/domains-whois)-Abfrage durch, um herauszufinden, wo Ihr Domainname registriert ist, und um zu überprüfen, ob Sie als Inhaber des Domainnamens eingetragen sind.

Fall 1.A – Ihr Domainname ist bei OVHcloud registriert und Sie sind als Inhaber eingetragen:

Führen Sie ein [Verfahren zur Kontaktwiederherstellung](/links/transversal/procedure-contact-change) durch, damit Ihr Domainname vollständig in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird. So müssen Sie die Person, die Ihren Domainnamen zuvor verwaltet hat, nicht mehr kontaktieren.

Fall 1.B – Ihr Domainname ist bei OVHcloud registriert und Sie sind nicht als Inhaber eingetragen:

Gemäß der **D**atenschutz-**G**rundverordnung (**DSGVO**) kann OVHcloud keine Informationen über die Person oder Organisation weitergeben, die den Domainnamen bei OVHcloud verwaltet.

Sie können jedoch versuchen, die Person oder Organisation über die Anweisungen in [diesem Formular](/links/web/contact-domain-owner) zu kontaktieren.

Fall 2 – Ihr Domainname ist nicht bei OVHcloud registriert:

Kontaktieren Sie direkt den Registrar (angegeben in den Zeilen, die mit dem Begriff `Registrar` beginnen) Ihres Domainnamens, um Ihre Suche fortzusetzen. Wenn der Domainname nicht bei OVHcloud registriert ist, können wir Ihnen zu diesem Thema nicht weiterhelfen.

///

/// details | Ich kann die Person, die meinen Domainnamen verwaltet, nicht kontaktieren. Was soll ich tun?

Führen Sie zunächst eine [WHOIS](/links/web/domains-whois)-Abfrage durch, um zu überprüfen, ob Sie als Inhaber des Domainnamens eingetragen sind.

Fall 1 – Sie sind als Inhaber des Domainnamens eingetragen:

Führen Sie ein [Verfahren zur Kontaktwiederherstellung](/links/transversal/procedure-contact-change) durch, damit Ihr Domainname vollständig in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird. So müssen Sie die Person, die Ihren Domainnamen zuvor verwaltet hat, nicht mehr kontaktieren.

Fall 2 – Sie sind nicht als Inhaber des Domainnamens eingetragen:

Gemäß der **D**atenschutz-**G**rundverordnung (**DSGVO**) kann OVHcloud keine Informationen über die Person oder Organisation weitergeben, die den Domainnamen bei OVHcloud verwaltet.

Sie können jedoch versuchen, die Person oder Organisation über die Anweisungen in [diesem Formular](/links/web/contact-domain-owner) zu kontaktieren.

///

/// details | Kann ich meinen Domainnamen verkaufen?

Derzeit unterstützt OVHcloud den Verkauf bereits registrierter Domainnamen nicht direkt. Wir bieten diesen Service nicht an.

Wenn Sie Ihren Domainnamen auf einem Sekundärmarkt zum Verkauf anbieten möchten, wenden Sie sich an einen unserer Partner:

- [Afternic](https://www.afternic.com).
- [Sedo](https://sedo.com).

Wenn Sie Ihren Domainnamen verkaufen möchten, können Sie ihn auf diesen Plattformen hinzufügen. Nach dem Hinzufügen bieten die autorisierten Anbieter Ihren Domainnamen zum von Ihnen festgelegten Preis auf einer der oben genannten Plattformen an.

///

## DNS-Zone

> [!primary]
>
> Die Änderung einer DNS-Zone ist ein sensibler Vorgang und kann zu Unterbrechungen der mit Ihrem Domainnamen verbundenen Dienste führen (Webhosting, E-Mail usw.). Kontaktieren Sie im Zweifelsfall einen [spezialisierten Dienstleister](/links/partner).

/// details | Was ist eine DNS-Zone?

Eine DNS-Zone für einen Domainnamen enthält eine darauf anwendbare Konfiguration. Sie besteht aus technischen Informationen, die *DNS-Einträge* genannt werden. Die DNS-Zone fungiert als Routing-Zentrale und leitet den Datenverkehr an die richtigen Dienste weiter, die dem Domainnamen zugeordnet sind.

Sie können beispielsweise Folgendes angeben:

- Die IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Webhostings, um Ihre Website unter Ihrem Domainnamen anzuzeigen.
- Die E-Mail-Server (DNS-Einträge vom Typ *MX*), an die Ihr Domainname die empfangenen E-Mails weiterleiten soll.
- Informationen zur Sicherheit/Authentifizierung Ihrer Dienste (Webhosting, Webserver, E-Mail-Server usw.), die mit Ihrem Domainnamen verknüpft sind (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC* usw.).

Eine DNS-Zone wird auf **DNS-Servern** gehostet/registriert. Diese **DNS-Server** müssen beim Registrar des Domainnamens deklariert werden, um die DNS-Zone zu verwenden, die sie hosten.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Alles über DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | Was ist ein DNS-Eintrag?

DNS-Einträge werden beispielsweise verwendet, um:

- Einen Domainnamen mit einer IP-Adresse zu verknüpfen, damit Benutzer eine Website oder einen Remote-Server erreichen können.
- Einen Domainnamen mit anderen Online-Ressourcen zu verknüpfen, wobei ein Domainname (leichter zu merken) anstelle einer IP-Adresse verwendet wird.
- Konfigurationen für die Verknüpfung oder Sicherheit zu validieren, insbesondere für E-Mail-Dienste und Shared Hosting.

Es gibt zahlreiche DNS-Einträge. Sie alle haben eine bestimmte Funktion bei der DNS-Auflösung. Bei OVHcloud werden sie in drei Kategorien unterteilt:

- **Pointer-Einträge**: `A`, `AAAA`, `NS`, `CNAME` und `DNAME`.
- **Erweiterte Einträge**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` und `HTTPS`.
- **E-Mail-Einträge**: `MX`, `SPF`, `DKIM` und `DMARC`.

> [!success]
>
> Weitere Details finden Sie in den folgenden Anleitungen:
>
> - Allgemeine Informationen:
>     - [Alles über DNS-Einträge](/pages/web_cloud/domains/dns_zone_records)
> - DNS-Pointer-Einträge:
>     - [Einen DNS-A-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Einen DNS-AAAA-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Einen DNS-CNAME-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Erweiterte DNS-Einträge:
>     - [Einen DNS-TXT-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - DNS-E-Mail-Einträge:
>     - [MX-Eintrag für die E-Mail-Verwaltung konfigurieren](/pages/web_cloud/domains/dns_zone_mx)
>     - [E-Mail-Sicherheit mit einem SPF-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_spf)
>     - [E-Mail-Sicherheit mit einem DKIM-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dkim)
>     - [E-Mail-Sicherheit mit einem DMARC-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Welche DNS-Einträge sind in einer OVHcloud DNS-Zone verfügbar?

Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Eintrag hinzufügen`{.action}.
>>
>> Sie sehen alle DNS-Einträge, die Sie über den OVHcloud Konfigurationsassistenten hinzufügen können:
>>
>> - **Pointer-Einträge**: `A`, `AAAA`, `NS`, `CNAME` und `DNAME`.
>> - **Erweiterte Einträge**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP`, `TLSA`, `RP`, `SVCB` und `HTTPS`.
>> - **E-Mail-Einträge**: `MX`, `SPF`, `DKIM` und `DMARC`.
>>
>> > [!primary]
>> >
>> > Wenn Sie einen DNS-Eintrag hinzufügen möchten, der nicht aufgelistet ist, schließen Sie das nach dem Klick auf `Eintrag hinzufügen`{.action} geöffnete Fenster und klicken Sie auf die Schaltfläche `Im Textmodus bearbeiten`{.action} rechts oder unterhalb der Tabelle.
>> >
>> > Sie können dann Ihren gewählten DNS-Eintrag manuell hinzufügen.

> [!success]
>
> Weitere Details finden Sie in den folgenden Anleitungen:
>
> - Allgemeine Informationen:
>     - [Alles über DNS-Einträge](/pages/web_cloud/domains/dns_zone_records)
> - DNS-Pointer-Einträge:
>     - [Einen DNS-A-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [Einen DNS-AAAA-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [Einen DNS-CNAME-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Erweiterte DNS-Einträge:
>     - [Einen DNS-TXT-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - DNS-E-Mail-Einträge:
>     - [MX-Eintrag für die E-Mail-Verwaltung konfigurieren](/pages/web_cloud/domains/dns_zone_mx)
>     - [E-Mail-Sicherheit mit einem SPF-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_spf)
>     - [E-Mail-Sicherheit mit einem DKIM-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dkim)
>     - [E-Mail-Sicherheit mit einem DMARC-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Kann ich die in meiner OVHcloud DNS-Zone deklarierten DNS-Server ändern?

Die manuelle Änderung von NS-DNS-Einträgen für einen Domainnamen in einer OVHcloud DNS-Zone wird nicht empfohlen, da dies die Auflösung der entsprechenden DNS-Zone verhindern würde.

Wenn Sie die Konfiguration der NS-DNS-Einträge für Ihren Domainnamen ändern möchten, liegt dies wahrscheinlich daran, dass Sie die deklarierten DNS-Server ändern möchten.

> [!primary]
>
> Um die DNS-Server für Ihren Domainnamen bei OVHcloud zu ändern, muss bereits eine DNS-Zone auf den gewünschten neuen DNS-Servern vorhanden sein.
> Außerdem müssen Sie in dieser DNS-Zone überprüfen, ob die NS-DNS-Einträge den entsprechenden DNS-Servern zugeordnet sind.

Klicken Sie dazu auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domainnamen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf dem betreffenden Domainnamen befinden.
>>
> **Schritt 3**
>>
>> Klicken Sie auf die Schaltfläche `DNS-Server ändern`{.action} rechts neben der Tabelle "DNS-Server". Je nach Bildschirmauflösung kann sich die Schaltfläche unterhalb der Tabelle befinden.
>>
>> Auf der angezeigten Seite können Sie die DNS-Server für Ihren Domainnamen ändern.

> [!primary]
>
> Die Propagation von Änderungen an den deklarierten DNS-Servern eines Domainnamens kann bis zu **48** Stunden dauern.

Wenn ein Fehler auftritt, empfehlen wir, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu erstellen, in dem Sie folgende Informationen angeben:

- Die Namen der DNS-Server, die Sie konfigurieren möchten.
- Die aufgetretene Fehlermeldung.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Was ist der Unterschied zwischen einem A-Eintrag (IPv4) und einem AAAA-Eintrag (IPv6)?

Das Internet arbeitet seit den frühen 1990er Jahren mit dem IPv4-Standard. Dieser Standard weist jedem mit dem Internet verbundenen Gerät (Server, Computer, Smartphones, Tablets usw.) eine IP-Adresse im Format X.X.X.X zu (wobei jedes "X" eine Zahl zwischen 0 und 255 ist). Dieser Standard begrenzt die Anzahl der verbundenen Geräte jedoch auf etwa 4 Milliarden.

Um diese Einschränkung zu beheben, wurde das IPv6-Protokoll eingeführt, das bis zu 340 Sextillionen Geräte mit dem Internet verbinden kann.

IPv4-Adressen sind mittlerweile weniger verfügbar, was es schwieriger macht, neue Geräte über IPv4 mit dem Internet zu verbinden. IPv6-Verbindungen sind jedoch nur dann nützlich, wenn beispielsweise Ihre Website auch über dieses Protokoll erreichbar ist.

A- und AAAA-DNS-Einträge sind zwei Arten von Ressourceneinträgen, mit denen ein Domainname mit einer IP-Adresse verknüpft wird.

Ihre Hauptunterschiede liegen in der Art der verwendeten IP-Adresse:

- **A-Eintrag** (auch "Host-Eintrag" genannt): Verknüpft einen Domainnamen mit einer IPv4-Adresse (z.B. 213.0.113.0). IPv4-Adressen sind 32-Bit-Adressen und werden üblicherweise in Punkt-Dezimal-Notation geschrieben.
- **AAAA-Eintrag** (auch "Quad-A-Eintrag" genannt): Verknüpft einen Domainnamen mit einer IPv6-Adresse (z.B. 2001:db8:1:1b00:213:0:113:0). IPv6-Adressen sind 128-Bit-Adressen und werden üblicherweise in Hexadezimal-Notation geschrieben.

A-Einträge werden also für IPv4-Adressen verwendet, während AAAA-Einträge für IPv6-Adressen verwendet werden. Beide Eintragstypen leiten den Datenverkehr an eine bestimmte IP-Adresse, werden aber für unterschiedliche Versionen des Internetprotokolls verwendet.

Beachten Sie, dass ein Domainname sowohl A- als auch AAAA-Einträge haben kann, sodass er sowohl über IPv4- als auch über IPv6-Netzwerke erreichbar ist. Dies wird als "Dual Stack" bezeichnet und ist gängige Praxis für Websites und Dienste, die sowohl über IPv4 als auch über IPv6 erreichbar sein sollen.

> [!success]
>
> Weitere Details finden Sie in den folgenden Anleitungen:
>
> - [Einen DNS-A-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [Einen DNS-AAAA-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [IPv6 für Ihre Website konfigurieren](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Wie kann ich einen PTR-Eintrag für meine externe IP bei OVHcloud konfigurieren?

Bei OVHcloud können **P**oin**T**er-**R**ecord-(**PTR**-)Konfigurationen nicht direkt in unseren DNS-Zonen verwaltet werden.

Um einen Reverse-/PTR-Eintrag für eine externe IP-Adresse zu konfigurieren, wenden Sie sich an Ihren **I**nternet **S**ervice **P**rovider (**ISP**), da dieser für die Verwaltung der Reverse-DNS-Einträge der von ihm zugewiesenen IP-Adressen verantwortlich ist.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Alles über DNS-Einträge](/pages/web_cloud/domains/dns_zone_records)".

///

/// details | Wie kann ich die Standard-TTL in meiner OVHcloud DNS-Zone ändern?

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Standard-TTL ändern`{.action}.
>>
> **Schritt 3**
>>
>> Passen Sie im geöffneten Fenster den Wert unter der Bezeichnung `Standard-TTL` Ihren Bedürfnissen an und klicken Sie dann auf `Ändern`{.action}.

> [!primary]
>
> Die Propagation einer Änderung der DNS-Zone kann bis zu **24** Stunden dauern.

///

/// details | Was ist ein SOA-DNS-Eintrag?

Der **S**tart **O**f **A**uthority-(**SOA**-)DNS-Eintrag enthält eine Reihe von Elementen zur DNS-Konfiguration eines Domainnamens.

Nachfolgend das Ergebnis einer SOA-Abfrage für den Domainnamen `domain.tld`.

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

|Element im Ergebnis|Beschreibung|Entsprechung im obigen Beispiel|
|---|---|---|
|**NS (Name Server)**|Primärer DNS-Server, der für den Domainnamen `domain.tld` deklariert ist.|`dns200.anycast.me.`|
|**E-Mail-Adresse**|E-Mail-Adresse des DNS-Zonen-Administrators.|`tech.ovh.net.` (der Punkt zwischen `tech` und `ovh` muss durch ein `@` ersetzt werden).|
|**Seriennummer**|Eindeutige Nummer, die bei jeder Änderung der DNS-Zone inkrementiert wird.<br>Sie besteht üblicherweise aus dem Aktualisierungsdatum im Format `JJJJMMTT`, gefolgt von der Anzahl der an diesem Tag vorgenommenen Aktualisierungen.|`2025091801`: Hier wurden 2 Aktualisierungen (`00` für 1, `01` für 2 usw.) am 18.09.2025 vorgenommen.|
|**Aktualisierungsintervall**|Intervall (in Sekunden) zwischen jeder Aktualisierung der sekundären DNS-Server (Teil des DNS-Netzwerks) mit dem primären DNS-Server.|`86400` (24 Stunden).|
|**Wiederholungsintervall**|Intervall (in Sekunden) zwischen jedem Wiederholungsversuch zur Aktualisierung der Einstellungen der sekundären DNS-Server (Teil des DNS-Netzwerks) mit dem primären DNS-Server, wenn dieser nicht antwortet oder nicht verfügbar ist.|`3600` (1 Stunde).|
|**Ablaufzeit**|Zeitraum (in Sekunden), nach dem die sekundären DNS-Server (Teil des DNS-Netzwerks) aufhören, auf DNS-Abfragen zu antworten, wenn der primäre DNS-Server sie nicht mehr aktualisiert.|`3600000` (1000 Stunden, 41,67 Tage).|
|**Minimale TTL**|Minimale Lebensdauer (in Sekunden), während der DNS-Einträge in der Zone auf den sekundären DNS-Servern (Teil des DNS-Netzwerks) zwischengespeichert werden.|`300` (5 Minuten).|

///

<br>

/// details | Wie kann ich die Konfiguration meiner DNS-Zone überprüfen?

Hier sind verschiedene Methoden zur Überprüfung Ihrer DNS-Zonen-Konfiguration:

- **Ein Online-Überprüfungstool**: Verschiedene Online-Tools können Ihre DNS-Zonen-Konfiguration überprüfen. Verwenden Sie einen Webbrowser (Chrome, Edge, Firefox, Safari usw.) und suchen Sie in einer Suchmaschine nach passenden Stichwörtern (z.B. "DNS-Propagation überprüfen").

- **Der Befehl "dig"**: Wenn Sie Zugriff auf ein *Terminal* unter Linux oder macOS haben, können Sie den Befehl `dig` verwenden, um Ihre DNS-Zonen-Konfiguration im DNS-Netzwerk zu überprüfen.

- **Der Befehl "nslookup"**: Der Befehl `nslookup` ist auf den meisten Betriebssystemen verfügbar und kann ebenfalls zur Überprüfung Ihrer DNS-Zonen-Konfiguration verwendet werden.

- **Über Ihr OVHcloud Kundencenter**: Wenn die aktive DNS-Zone für Ihren Domainnamen von OVHcloud verwaltet wird, gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), um alle für Ihren Domainnamen deklarierten DNS-Einträge anzuzeigen.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Wie kann ich die Propagation von Änderungen in meiner DNS-Zone überprüfen?

> [!primary]
>
> Beachten Sie vorab Folgendes:
>
> - Die Propagation einer Änderung in einer DNS-Zone kann bis zu **24** Stunden dauern.
> - Die Propagation einer DNS-Server-Änderung für einen Domainnamen kann bis zu **48** Stunden dauern.

Sie können die korrekte DNS-Propagation mithilfe des **S**tart **O**f **A**uthority-(**SOA**-)DNS-Eintrags überprüfen.

Öffnen Sie zunächst ein kompatibles Terminal auf Ihrem Computer und führen Sie den folgenden Befehl aus (ersetzen Sie `domain.tld` durch Ihren eigenen Domainnamen):

```bash
dig domain.tld soa
```

> [!primary]
>
> Linux- und macOS-Betriebssysteme unterstützen nativ ein kompatibles Terminal zur Ausführung dieses Befehls. Wenn Sie ein anderes Betriebssystem verwenden, z.B. Windows, müssen Sie zuvor ein kompatibles Terminal installieren, um den Befehl auszuführen.
>
> Beachten Sie außerdem, dass es auch Online-Tools zur Überprüfung der DNS-Propagation gibt.

Nach Ausführung des Befehls erhalten Sie ein Ergebnis ähnlich dem folgenden:

```bash
              ;; ANSWER SECTION:

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300
```

Entnehmen Sie aus diesem Ergebnis die **Seriennummer** (in unserem Beispiel: `2025091801`).

Sie folgt dem Format `JJJJMMTTRR`, wobei:

- `JJJJMMTT`: Das Datum (Jahr, Monat und Tag) der letzten propagierten DNS-Aktualisierung für den Domainnamen darstellt.
- `RR`: Die Anzahl der am angegebenen Datum vorgenommenen Aktualisierungen darstellt. Wenn beispielsweise nur eine Aktualisierung an einem Tag vorgenommen wurde, hat sie den Wert `00`. Wenn zwei Aktualisierungen am selben Tag vorgenommen wurden, hat sie den Wert `01`, und so weiter.

Klicken Sie nach Ermittlung der Seriennummer auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Im Textmodus bearbeiten`{.action}.
>>
> **Schritt 3**
>>
>> Suchen Sie im geöffneten Fenster die zweite Zeile, die in unserem Beispiel wie folgt lautet: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
>>
> **Schritt 4**
>>
>> Vergleichen Sie die über das Terminal ermittelte Seriennummer mit der in Ihrem OVHcloud Kundencenter angezeigten.
>>
>> **Fall 1** – Die beiden Seriennummern stimmen überein:
>>
>> Die DNS-Propagation erfolgt korrekt. Sie müssen nichts weiter tun.
>>
>> **Fall 2** – Die beiden Seriennummern sind unterschiedlich:
>>
>> Dies bedeutet entweder:
>>
>> - Die DNS-Propagation Ihrer Änderungen ist noch nicht abgeschlossen (Sie befinden sich noch im normalen Propagationszeitraum). Warten Sie in diesem Fall, bis die DNS-Propagation vollständig abgeschlossen ist (**24** Stunden für eine DNS-Zonen-Änderung und **48** Stunden für eine DNS-Server-Änderung), und wiederholen Sie dann den Vorgang.
>> - Die DNS-Propagation erfolgt nicht korrekt. Klicken Sie in diesem Fall im in Schritt **3** geöffneten Fenster `Im Textmodus bearbeiten`{.action} direkt **ohne Änderungen vorzunehmen** auf `Weiter`{.action} und dann auf `Bestätigen`{.action}. Eine neue DNS-Propagation wird dann gestartet.

///

/// details | Wie kann ich eine DNS-Zone wiederherstellen?

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Verlauf Ihrer DNS-Zone anzeigen`{.action}.
>>
> **Schritt 3**
>>
>> Identifizieren Sie in der Tabelle auf der angezeigten Seite die Zeile, die der wiederherzustellenden DNS-Zonen-Sicherung entspricht, und klicken Sie auf das Symbol in der Spalte `Wiederherstellen`{.action}. Die aktuelle Konfiguration der DNS-Zone wird durch die ausgewählte Sicherung ersetzt.

> [!primary]
>
> Die Propagation einer Änderung der DNS-Zone kann bis zu **24** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Verlauf einer DNS-Zone verwalten](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Wie kann ich eine Kopie meiner DNS-Zone abrufen?

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Verlauf Ihrer DNS-Zone anzeigen`{.action}.
>>
> **Schritt 3**
>>
>> Identifizieren Sie in der Tabelle auf der angezeigten Seite die Zeile, die der gewünschten DNS-Zonen-Sicherung entspricht, und klicken Sie auf das Symbol in der Spalte `Herunterladen`{.action}. Die Kopie der DNS-Zone wird im Format *.txt* heruntergeladen.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Verlauf einer DNS-Zone verwalten](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Kann ich eine DNS-Zone für eine Subdomain erstellen?

Sie können eine DNS-Zone für eine Subdomain erstellen.

Klicken Sie dazu auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und klicken Sie auf die Schaltfläche `Bestellen`{.action} oben rechts in der angezeigten Tabelle.
>>
> **Schritt 2**
>>
>> Geben Sie auf der angezeigten Seite die Subdomain ein (z.B. *www.domain.tld*), für die Sie eine OVHcloud DNS-Zone erstellen möchten. Warten Sie einen Moment, während das Tool die Subdomain überprüft.
>>
> **Schritt 3**
>>
>> Wählen Sie nach erfolgreicher Überprüfung, ob Sie die minimalen Einträge für die zu erstellende DNS-Zone aktivieren möchten. Diese Auswahl ist nicht endgültig, da Sie die [DNS-Zonen-Einträge jederzeit bearbeiten](/pages/web_cloud/domains/dns_zone_edit) können.
>>
> **Schritt 4**
>>
>> Sobald Ihre Auswahl getroffen ist, folgen Sie den Schritten bis zur Erstellung der DNS-Zone.

Diese DNS-Zone wird auf 2 OVHcloud DNS-Servern installiert. Sie müssen die Namen dieser beiden Server in der aktiven DNS-Zone des Domainnamens deklarieren, von dem Ihre Subdomain stammt (z.B. *www.domain.tld* ist eine Subdomain des Domainnamens *domain.tld*).

Um die Namen der 2 DNS-Server abzurufen, klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie die betreffende Subdomain aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Rufen Sie oben links auf der angezeigten Seite die 2 DNS-Server-Namen ab, die unter der Bezeichnung `Name Servers` aufgeführt sind. Diese haben eines der folgenden zwei Formate:
>>
>> - `dnsXXX.ovh.net` und `nsXXX.ovh.net` **oder** `dnsXXX.ovh.ca` und `nsXXX.ovh.ca` (wobei jedes `X` eine Ziffer zwischen `0` und `9` darstellt).
>> - `dns200.ovh.me` und `ns200.anycast.me`.

Sobald Sie die 2 DNS-Server haben, deklarieren Sie diese mit zwei NS-DNS-Einträgen in der aktiven DNS-Zone des Domainnamens, von dem Ihre Subdomain stammt.

Fall 1 – Die aktive DNS-Zone des Domainnamens, von dem Ihre Subdomain stammt, liegt bei OVHcloud:

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Eintrag hinzufügen`{.action} und wählen Sie den DNS-Eintragstyp `NS`{.action} aus, um einen DNS-Server zu deklarieren.
>>
> **Schritt 3**
>>
>> Geben Sie im geöffneten Fenster im Feld `Sub-domain *`{.action} die Subdomain ein (z.B. schreiben Sie **nur** *www*, wenn Ihr Domainname *domain.tld* ist und Ihre vollständige Subdomain *www.domain.tld* lautet). Geben Sie im Feld `Target *`{.action} **einen** der 2 DNS-Server ein.
>>
> **Schritt 4**
>>
>> Klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.
>>
>> Wiederholen Sie den Vorgang für den zweiten zu deklarierenden DNS-Server.

Fall 2 – Die aktive DNS-Zone des Domainnamens, von dem Ihre Subdomain stammt, liegt nicht bei OVHcloud:

Sie müssen die 2 DNS-Server für Ihre Subdomain direkt bei Ihrem DNS-Anbieter (von dem Ihre Subdomain stammt) deklarieren.

> [!primary]
>
> In beiden Fällen kann die Propagation einer DNS-Zonen-Änderung bis zu **24** Stunden dauern.

> [!success]
>
> Weitere Details finden Sie in den folgenden Anleitungen:
>
> - [OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)
> - [OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | Wie kann ich alle Subdomains desselben Domainnamens auf dieselbe IP-Adresse umleiten?

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Eintrag hinzufügen`{.action} und wählen Sie den DNS-Eintragstyp `A`{.action} für eine IPv4 (z.B. `203.0.113.0`) oder den DNS-Eintragstyp `AAAA`{.action} für eine IPv6 (z.B. `2001:db8:1:1b00:203:0:113:0`) aus.
>>
> **Schritt 3**
>>
>> Geben Sie im geöffneten Fenster im Feld `Sub-domain *`{.action} den Wert `*` ein. Das Sternchen `*` steht für alle Subdomains (z.B. `www.domain.tld` oder `ovhcloud.domain.tld`) Ihres Domainnamens. Vervollständigen Sie das Feld `Target *`{.action} mit der gewünschten IP-Adresse.
>>
> **Schritt 4**
>>
>> Klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Propagation einer Änderung der DNS-Zone kann bis zu **24** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Kann ich einen Wildcard in meiner DNS-Zone einrichten?

Es ist möglich, einen Wildcard in einer OVHcloud DNS-Zone einzurichten.

Klicken Sie dazu auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Eintrag hinzufügen`{.action} und wählen Sie den DNS-Eintragstyp aus, für den Sie einen Wildcard einrichten möchten.
>>
> **Schritt 3**
>>
>> Geben Sie im geöffneten Fenster im Feld `Sub-domain *`{.action} den Wert `*` ein. Das Sternchen `*` steht für alle Subdomains (z.B. `www.domain.tld` oder `ovhcloud.domain.tld`) Ihres Domainnamens. Vervollständigen Sie die anderen Felder mit den gewünschten Werten.
>>
> **Schritt 4**
>>
>> Klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Propagation einer Änderung der DNS-Zone kann bis zu **24** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)".

///

<br>

/// details | Ich habe versehentlich meine DNS-Zone gelöscht und möchte sie wiederherstellen. Was soll ich tun?

OVHcloud sendet eine E-Mail mit einer Textkopie der DNS-Zone, sobald Ihre DNS-Zone gelöscht wurde, damit Sie sie bei Bedarf später wiederherstellen können.
Diese E-Mail wird an die E-Mail-Adresse gesendet, die mit Ihrem OVHcloud Kundenkonto verknüpft ist.

> [!success]
>
> Wenn Sie diese E-Mail nicht erhalten haben, überprüfen Sie Ihren Spam-Ordner oder gehen Sie auf die Seite [Mein Account](/links/control-panel/account-dashboard), und klicken Sie auf den Tab `Empfangene E-Mails`{.action}.

Um Ihre DNS-Zone wiederherzustellen, laden Sie die Datei mit der DNS-Zone aus der erhaltenen E-Mail herunter.

Klicken Sie auf die unten stehenden Tabs, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domainnamen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Wählen Sie den Tab `DNS-Zone`{.action} aus, sobald Sie sich auf dem betreffenden Domainnamen befinden. **Wenn die DNS-Zone inaktiv ist, aktivieren Sie sie über diesen Tab.**
>>
> **Schritt 3**
>>
>> Klicken Sie rechts oder unterhalb der Tabelle auf `Im Textmodus bearbeiten`{.action}.
>>
> **Schritt 4**
>>
>> Ersetzen Sie im geöffneten Fenster den gesamten angezeigten Inhalt durch die Kopie der gelöschten DNS-Zone. Klicken Sie auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Propagation einer Änderung der DNS-Zone kann bis zu **24** Stunden dauern.

> [!success]
>
> Weitere Details finden Sie in den folgenden Anleitungen:
>
> - [OVHcloud DNS-Zone für einen Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)
> - [OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)
> - [Verlauf einer DNS-Zone verwalten](/pages/web_cloud/domains/dns_zone_history)

///

/// details | Wie kann ich eine Anfrage zur Löschung einer DNS-Zone stornieren?

Für jede Anfrage zur Löschung eines Dienstes wird eine E-Mail mit einer Bestätigungsanforderung an die E-Mail-Adresse gesendet, die mit Ihrem OVHcloud Kundenkonto verknüpft ist.

Wenn Sie den Bestätigungslink in dieser E-Mail nicht angeklickt haben, wird Ihre DNS-Zone nicht gelöscht.

Andernfalls wurde die Löschung eingeleitet und kann nicht mehr rückgängig gemacht werden. Der Löschvorgang kann bis zu 3 Tage dauern, bevor Sie eine OVHcloud DNS-Zone für Ihren Domainnamen neu erstellen können.

///

/// details | Ich kann keine DNS-Zone für meinen Domainnamen aktivieren. Was soll ich tun?

Diese Situation tritt auf, wenn bereits eine DNS-Zone für Ihren Domainnamen bei OVHcloud existiert.

Klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [DNS-Zone](/links/control-panel/web-dns-zone), und überprüfen Sie, ob der betreffende Domainname angezeigt wird.
>>
>> ![DNS-Zone](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Schritt 2**
>>
>> **Fall 1** – Der betreffende Domainname erscheint in der Liste:
>>
>> Die DNS-Zone für den Domainnamen existiert bereits in Ihrem OVHcloud Kundencenter. Sie können sie direkt von dort aus verwalten.
>>
>> **Fall 2** – Der betreffende Domainname erscheint nicht in der Liste:
>>
>> Die DNS-Zone für den Domainnamen wird von einem anderen OVHcloud Kundenkonto verwaltet.
>>
>> Gemäß der **D**atenschutz-**G**rundverordnung (**DSGVO**) bleibt die Kundenkennung des Kontos, in dem sich die DNS-Zone befindet, vertraulich.
>>
>> In diesem Fall empfehlen wir, wenn Sie diese andere Kundenkennung nicht kennen, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu erstellen, um die Verwaltung der DNS-Zone zurückzuerlangen.

///

/// details | Warum finde ich den Tab "GLUE" nicht in meinem OVHcloud Kundencenter?

Diese Funktion ist nicht für alle Domainendungen verfügbar.
Wenn der Tab in Ihrem [OVHcloud Kundencenter](/links/manager) nicht angezeigt wird, bedeutet dies, dass die Option "GLUE" für Ihren Domainnamen nicht verfügbar ist.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[DNS-Server eines Domainnamens anpassen (Glue Records)](/pages/web_cloud/domains/glue_registry)".

///

## DNS-Server

> [!primary]
>
> Die Änderung von DNS-Servern ist ein sensibler Vorgang und kann zu Unterbrechungen der mit Ihrem Domainnamen verbundenen Dienste führen (Webhosting, E-Mail usw.). Kontaktieren Sie im Zweifelsfall einen [spezialisierten Dienstleister](/links/partner).

/// details | Wie kann ich meine DNS-Server ändern?

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domainnamen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf dem betreffenden Domainnamen befinden.
>>
> **Schritt 3**
>>
>> Klicken Sie auf die Schaltfläche `DNS-Server ändern`{.action} rechts neben der Tabelle "DNS-Server". Je nach Bildschirmauflösung kann sich die Schaltfläche unterhalb der Tabelle befinden.
>>
>> Auf der angezeigten Seite können Sie die DNS-Server für Ihren Domainnamen ändern.

> [!primary]
>
> Die Propagation von Änderungen an den deklarierten DNS-Servern eines Domainnamens kann bis zu **48** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Wie kann ich meine DNS-Server anpassen?

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domainnamen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf dem betreffenden Domainnamen befinden.
>>
> **Schritt 3**
>>
>> Klicken Sie auf die Schaltfläche `DNS-Server ändern`{.action} rechts neben der Tabelle "DNS-Server". Je nach Bildschirmauflösung kann sich die Schaltfläche unterhalb der Tabelle befinden.
>>
>> Auf der angezeigten Seite können Sie die DNS-Server für Ihren Domainnamen anpassen.

> [!primary]
>
> Die Propagation von Änderungen an den deklarierten DNS-Servern eines Domainnamens kann bis zu **48** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Wie kann ich meine DNS-Server durch die von OVHcloud bereitgestellten ersetzen?

Klicken Sie auf die unten stehenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domainnamen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf dem betreffenden Domainnamen befinden.
>>
> **Schritt 3**
>>
>> Klicken Sie auf die Schaltfläche `DNS-Server ändern`{.action} rechts neben der Tabelle "DNS-Server". Je nach Bildschirmauflösung kann sich die Schaltfläche unterhalb der Tabelle befinden.
>>
>> Auf der angezeigten Seite können Sie die DNS-Server für Ihren Domainnamen durch die von OVHcloud bereitgestellten ersetzen.

> [!primary]
>
> Die Propagation von Änderungen an den deklarierten DNS-Servern eines Domainnamens kann bis zu **48** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | In meinem Kundencenter erscheint eine Fehlermeldung, dass ich nicht die OVHcloud DNS-Server für meinen Domainnamen verwende. Was soll ich tun?

In Ihrem [OVHcloud Kundencenter](/links/manager) zeigt diese Meldung lediglich an, dass die für Ihren Domainnamen erstellte DNS-Zone nicht dessen aktive DNS-Zone ist.

Mit anderen Worten bedeutet dies, dass die in dieser DNS-Zone vorhandene Konfiguration nicht die aktuell auf Ihren Domainnamen angewendete ist.

Stellen Sie jedoch sicher, dass die in der Fehlermeldung genannten DNS-Server tatsächlich diejenigen sind, die Sie auf Ihren Domainnamen anwenden möchten. Überprüfen Sie dann die Konfiguration der DNS-Zone, die auf diesen DNS-Servern deklariert ist, bei Ihrem DNS-Anbieter.

Wenn Sie die OVHcloud DNS-Server für Ihren Domainnamen verwenden möchten, können Sie die DNS-Konfiguration der bei OVHcloud vorhandenen DNS-Zone so vorbereiten, dass sie Ihren Anforderungen entspricht, und sie dann für Ihren Domainnamen aktivieren.

> [!success]
>
> Weitere Details finden Sie in den folgenden Anleitungen:
>
> - [OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)
> - [DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)

///

/// details | Ich kann die DNS-Server eines Domainnamens nicht über mein OVHcloud Kundencenter ändern. Was soll ich tun?

Das bedeutet, dass Sie nur die DNS-Zone des Domainnamens verwalten, aber nicht den Domainnamen selbst.

Um dies zu überprüfen, klicken Sie auf die unten stehenden Tabs, um die **2** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und überprüfen Sie, ob der betreffende Domainname angezeigt wird.
>>
>> ![Domainnamen](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> **Fall 1** – Der Domainname erscheint nicht in der Liste:
>>
>> Das bedeutet, dass der Domainname nicht über Ihr OVHcloud Kundencenter verwaltet wird. Führen Sie eine [WHOIS](/links/web/domains-whois)-Abfrage durch, um herauszufinden, wo er registriert ist.
>>
>> Sie können dann eine der folgenden Aktionen durchführen (wenn Sie der im WHOIS des Domainnamens deklarierte Inhaber sind):
>>
>> - Der Domainname ist bei OVHcloud registriert: Sie können ein [Verfahren zur Kontaktwiederherstellung](/links/transversal/procedure-contact-change) durchführen, damit Ihr Domainname in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird.
>> - Der Domainname ist nicht bei OVHcloud registriert: Sie können einen [eingehenden Transfer](/pages/web_cloud/domains/transfer_incoming_generic_domain) zu OVHcloud durchführen, damit Ihr Domainname in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird.
>>
>> **Fall 2** – Der Domainname erscheint in der Liste:
>>
>> Das bedeutet, dass Sie nicht über ausreichende Rechte verfügen, um den Domainnamen über Ihr OVHcloud Kundencenter zu verwalten. Führen Sie eine [WHOIS](/links/web/domains-whois)-Abfrage durch, um zu überprüfen, ob Sie als Inhaber des Domainnamens eingetragen sind.
>>
>> Sie können dann ein [Verfahren zur Kontaktwiederherstellung](/links/transversal/procedure-contact-change) durchführen, damit Ihr Domainname vollständig in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird.

///

## Weiterführende Informationen <a name="go-further"></a>

[FAQ zu OVHcloud E-Mails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[FAQ zum Webhosting](/pages/web_cloud/web_hosting/faq-web_hosting)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
