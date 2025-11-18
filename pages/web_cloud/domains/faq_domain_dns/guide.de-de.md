---
title: "FAQ zu Domainnamen & DNS"
excerpt: "Hier finden Sie Antworten auf die wichtigsten Fragen zu Domainnamen, DNS-Servern und DNS-Zonen"
updated: 2025-10-10
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

**Klicken Sie auf die unten stehenden Fragen, um die Erklärungen anzuzeigen.**

## Bestellung eines Domainnamens

/// details | Wie kann ich einen Domainnamen bei OVHcloud bestellen?

Folgen Sie diesen Schritten:

1. Öffnen Sie die [OVHcloud Website](/links/website).
2. Auf der angezeigten Seite und im dafür vorgesehenen Feld geben Sie den Domainnamen ein, den Sie reservieren möchten (z. B. `domain.tld`), und klicken Sie auf die Schaltfläche `Suchen`{.action}.
3. Auf der neuen Seite wird Ihnen unser Interface mitteilen, ob der ausgewählte Domainname zum Kauf verfügbar ist oder nicht. Wenn er bereits mit der eingegebenen Syntax reserviert ist, ändern Sie ihn und starten Sie eine neue Verfügbarkeitsabfrage.
4. Sobald Sie einen verfügbaren Domainnamen gefunden haben, klicken Sie auf die Schaltfläche `Kaufen`{.action}, und dann auf die Schaltfläche `Mit der Bestellung fortfahren`{.action} in der rechten Spalte.
5. Wählen Sie gegebenenfalls zusätzliche Optionen oder Dienste aus und klicken Sie auf `Weiter`{.action}, bis Sie zur Login-Seite gelangen oder einen OVHcloud Kunden-Account erstellen.
6. Sobald Sie sich mit Ihrem OVHcloud Kunden-Account angemeldet haben, können Sie die Kontaktinformationen (Inhaber, Administrator, Technik) für Ihren Domainnamen anpassen. Klicken Sie anschließend auf die Schaltfläche `Weiter`{.action}, um zum Bestellzusammenfassung zu gelangen.
7. Auf der Seite `Zusammenfassung Ihrer Bestellung` und falls erforderlich, können Sie die DNS-Konfiguration ändern, die auf Ihren Domainnamen angewendet wird, indem Sie auf den Link `Konfiguration ändern`{.action} klicken. Sobald Ihre Änderungen abgeschlossen sind, klicken Sie auf die Schaltfläche `Bezahlen`{.action}, um zur letzten Bestellphase zu gelangen.

Zahlen Sie anschließend Ihre Bestellung, um die Reservierung Ihres Domainnamens sowie die Installation der Dienste und Optionen zu starten.

Einige Minuten später erhalten Sie eine Bestätigungsmail für Ihre Bestellung.
Sie können anschließend Ihren Domainnamen verwalten, indem Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) einloggen.

Zögern Sie nicht, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu erstellen, falls erforderlich.

///

/// details | Wie kann ich einen Domainnamen am Sekundärmarkt erwerben?

Der Kauf eines Domainnamens am Sekundärmarkt erfolgt auf dieselbe Weise wie die Bestellung eines gleichnamigen Domainnamens.

Folgen Sie diesen Schritten:

1. Öffnen Sie die [OVHcloud Website](/links/website).
2. Auf der angezeigten Seite und im dafür vorgesehenen Feld geben Sie den Domainnamen ein, den Sie reservieren möchten (z. B. `domain.tld`), und klicken Sie auf die Schaltfläche `Suchen`{.action}.
3. Auf der neuen Seite wird Ihnen unser Interface mitteilen, ob der ausgewählte Domainname zum Kauf verfügbar ist oder nicht. Wenn er bereits mit der eingegebenen Syntax reserviert ist, ändern Sie ihn und starten Sie eine neue Verfügbarkeitsabfrage.
4. Sobald Sie einen verfügbaren Domainnamen gefunden haben, klicken Sie auf die Schaltfläche `Kaufen`{.action}, und dann auf die Schaltfläche `Mit der Bestellung fortfahren`{.action} in der rechten Spalte.
5. Wählen Sie gegebenenfalls Optionen oder Dienste aus, zu denen Sie sich zusätzlich zu Ihrem Domainnamen anmelden möchten, und klicken Sie auf `Weiter`{.action}, bis Sie zur Login-Seite gelangen oder einen OVHcloud Kunden-Account erstellen.
6. Sobald Sie sich mit Ihrem OVHcloud Kunden-Account angemeldet haben, können Sie die Kontaktinformationen (Inhaber, Administrator, Technik) für Ihren Domainnamen anpassen. Klicken Sie anschließend auf die Schaltfläche `Weiter`{.action}, um zum Bestellzusammenfassung zu gelangen.
7. Auf der Seite `Zusammenfassung Ihrer Bestellung` und falls erforderlich, können Sie die DNS-Konfiguration ändern, die auf Ihren Domainnamen angewendet wird, indem Sie auf den Link `Konfiguration ändern`{.action} klicken. Sobald Ihre Änderungen abgeschlossen sind, klicken Sie auf die Schaltfläche `Bezahlen`{.action}, um zur letzten Bestellphase zu gelangen.

Zahlen Sie anschließend Ihre Bestellung, um die Reservierung Ihres Domainnamens sowie die Installation der Dienste und Optionen zu starten.

Einige Minuten später erhalten Sie eine Bestätigungsmail für Ihre Bestellung.
Sie können anschließend Ihren Domainnamen verwalten, indem Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) einloggen.

Zögern Sie nicht, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu erstellen, falls erforderlich. 

///

## Verwaltung eines Domainnamens

/// details | Wie kann ich feststellen, ob mein Domainname bei OVHcloud registriert ist?

Dazu können Sie eine [WHOIS](/links/web/domains-whois)-Abfrage durchführen, um zu erfahren, wo Ihr Domainname registriert ist und um zu überprüfen, ob Sie als Inhaber des Domainnamens angegeben sind.

Jeder Registrar (z. B. OVHcloud) hat die Möglichkeit, zu wählen, wie die Informationen zu einem Domainnamen im WHOIS angezeigt werden.

Nachdem Sie die WHOIS-Abfrage durchgeführt haben, suchen Sie im Ergebnis mindestens eine der folgenden Zeilen:

- Domain Name: ovhcloud.com
- Registrar WHOIS Server: whois.ovh.com
- Registrar URL: https://ovh.com
- Registrar: OVH sas

Wenn Sie mindestens eine dieser Zeilen im Ergebnis finden, ist Ihr Domainname bei OVHcloud registriert.

Andernfalls ist Ihr Domainname bei einem anderen Registrar registriert. Suchen Sie dann nach den Zeilen, die sich auf den `Registrar` beziehen, um den Registrar zu identifizieren, bei dem Ihr Domainname registriert ist.

///

/// details | Wie kann ich das Ablaufdatum eines Domainnamens ermitteln?

Die schnellste Lösung besteht darin, eine [WHOIS](/links/web/domains-whois)-Abfrage für den Domainnamen durchzuführen. Nach Abschluss der Abfrage suchen Sie im Ergebnis die Zeile, die das Ablaufdatum angibt (z. B. `Expiry Date: 2025-09-22T08:00:00Z`, `Registry Expiry Date: 2025-09-22T08:00:00Z`, etc.).

Wenn Ihr Domainname bei OVHcloud registriert ist, können Sie auch folgende Schritte ausführen:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie auf Ihren Namen in der oberen rechten Ecke und wählen Sie `Meine Angebote und Dienste`{.action}.
3. Im angezeigten Tabelle suchen Sie die Zeile, die Ihrem Domainnamen entspricht, und beachten Sie das Datum in der Spalte `Datum des Inkrafttretens`. Dieses Datum entspricht dem Ablaufdatum Ihres Domainnamens.

///

/// details | Wie kann ich das jährliche Ablaufdatum eines Domainnamens ändern?

Das jährliche Ablaufdatum eines Domainnamens (z. B. der 24. September) ist voreingestellt und hängt von dem Datum der Registrierung (Erstellung) des Domainnamens ab.

In der Regel ist das jährliche Ablaufdatum eines Domainnamens dasselbe Datum, an dem Sie den Domainnamen registriert haben.

Daher ist es nicht möglich, das jährliche Ablaufdatum eines Domainnamens zu ändern.

///

<br>

/// details | Wie kann ich einen Tippfehler in meinem Domainnamen korrigieren?

Sobald ein Domainname bestellt wurde, wird er anhand der von Ihnen bei der Bestellung definierten Zeichen registriert. Die Registrierung erfolgt bei der Registry der Erweiterung Ihres Domainnamens (z. B. das Registrar für *.com*) und es gelten Gebühren für die Reservierung auf der Seite des Registrars (z. B. OVHcloud).

Ein Domainname ist eine eindeutige Adresse im Internet, z. B. `ovhcloud.com`.  
Jede Änderung in diesem Namen, sei es ein einzelnes Zeichen oder eine Erweiterung (.com, .fr, .net etc.), macht ihn zu einem völlig anderen Domainnamen.

Daher kann ein Tippfehler bei Ihrer Bestellung nicht korrigiert werden. Sie müssen einen neuen Domainnamen unabhängig vom vorherigen bestellen (vorausgesetzt, dass die neue gewünschte Schreibweise noch nicht von jemand anderem reserviert ist).

Domainnamen gelten als personalisierte Produkte, da sie spezifisch für einen Inhaber registriert und für andere blockiert werden, sobald sie bestellt werden. Aus diesem Grund können sie nach der Registrierung nicht erstattet werden.

///

/// details | Wie kann ich einen bereits bestellten Domainnamen ändern?

Sobald ein Domainname bestellt wurde, wird er anhand der von Ihnen bei der Bestellung definierten Zeichen registriert. Die Registrierung erfolgt bei der Registry der Erweiterung Ihres Domainnamens (z. B. das Registrar für *.com*) und es gelten Gebühren für die Reservierung auf der Seite des Registrars (z. B. OVHcloud).

Ein Domainname ist eine eindeutige Adresse im Internet, z. B. `ovhcloud.com`.  
Jede Änderung in diesem Namen, sei es ein einzelnes Zeichen oder eine Erweiterung (.com, .fr, .net etc.), macht ihn zu einem völlig anderen Domainnamen.

Daher kann ein Tippfehler bei Ihrer Bestellung nicht korrigiert werden. Sie müssen einen neuen Domainnamen unabhängig vom vorherigen bestellen (vorausgesetzt, dass die neue gewünschte Schreibweise noch nicht von jemand anderem reserviert ist).

Domainnamen gelten als personalisierte Produkte, da sie spezifisch für einen Inhaber registriert und für andere blockiert werden, sobald sie bestellt werden. Aus diesem Grund können sie nach der Registrierung nicht erstattet werden.

///

/// details | Wie kann ich einen Domainnamen löschen?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein.
2. Klicken Sie auf Ihren Namen in der oberen rechten Ecke und wählen Sie `Meine Angebote und Dienste`{.action}.
3. Im angezeigten Tabelle suchen Sie die Zeile, die Ihrem Domainnamen entspricht, klicken Sie auf die Schaltfläche `...`{.action} rechts und dann auf `Meinen Dienst kündigen`{.action}.
4. Auf der angezeigten Seite wählen Sie den Stornierungsmodus (sofort oder zum Ablaufdatum des Dienstes) und klicken Sie unten auf die Schaltfläche `Ja, kündigen`{.action}.

Ihr Domainname wird dann an seinem Ablaufdatum ausgesetzt und danach innerhalb von maximal 60 Tagen **endgültig** gelöscht. Dieser Zeitraum ist durch die **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) festgelegt, damit ein Domainname vollständig gelöscht und erneut für einen anderen Inhaber verfügbar ist.

> [!primary]
>
> Nachdem Sie die Kündigung angefordert haben, können Sie die Löschung beschleunigen, indem Sie ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) erstellen. Dafür müssen Sie entsprechende Nachweise bereitstellen. 

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Kündigen von OVHcloud Diensten](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_cancel_services)".

///

/// details | Ich habe eine E-Mail bezüglich der Validierung der Informationen des Inhabers meines Domainnamens erhalten, was soll ich tun?

Wenn Sie Zweifel an der Legitimität der erhaltenen E-Mail haben, konsultieren Sie unsere Anleitung "[Betrug erkennen − So schützen Sie sich vor Phishing und betrügerischen E-Mails](/pages/account_and_service_management/account_information/phishing_care)".

Gemäß einer Direktive der **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) vom 01.09.2014 sind Registrare (z. B. OVHcloud) verpflichtet, die Gültigkeit der Kontaktdaten der Inhaber/Rechteinhaber von Domainnamen zu prüfen. OVHcloud sendet daher eine E-Mail an die Inhaber/Rechteinhaber des Domainnamens, die an die bei OVHcloud angegebene E-Mail-Adresse gesendet wird.

Sie erhalten diese E-Mail, wenn Sie eine der folgenden Aktionen durchführen:

- Registrierung eines neuen Domainnamens
- Übertragung eines Domainnamens
- Änderung der mit Ihrem Domainnamen verknüpften Kontaktdaten

Diese E-Mail enthält einen Link, um Ihre Kontaktdaten als rechtmäßiger Inhaber/Rechteinhaber des Domainnamens schnell zu verifizieren.

Achtung: Diese Verifikation muss innerhalb von 15 Tagen erfolgen. Danach wird der Domainname technisch gesperrt. Er bleibt zwar vertraglich unter Ihrem Namen, ist aber nicht mehr im Internet zugänglich. Besucher Ihrer Website erhalten eine Fehlermeldung.

Sie können in den ersten 15 Tagen folgende E-Mails erhalten:

- **Tag 0**: Sofort nach der Bestellung des Domainnamens oder der Änderung seiner Kontaktdaten erhalten Sie (oder die bei Ihnen als Inhaber/Rechteinhaber registrierte Person) die erste E-Mail mit einem Verifikationslink.
- **Tage 4, 9 und 13 (Erinnerungsmails)**: Wenn Sie den Domainnamen noch nicht verifiziert haben, erhalten Sie die E-Mail erneut.
- **Tag 14**: Wenn Sie den Domainnamen immer noch nicht verifiziert haben, wird die E-Mail erneut gesendet. Zudem wird eine E-Mail an die E-Mail-Adresse des Administrators/Rechteinhabers gesendet, um ihn zu informieren, dass die Kontaktdaten nicht bestätigt wurden.
- **Tag 15**: Wenn der Inhaber/Rechteinhaber des Domainnamens immer noch nicht reagiert hat, senden wir eine E-Mail an den Administrator des Domainnamens, um ihn über die Situation und die Deaktivierung des Domainnamens zu informieren.

Nach diesen 15 Tagen sendet das System zusätzliche E-Mails (bis zu 9 E-Mails), bevor Ihr Domainname gelöscht wird. Diese Löschung erfolgt nach 60 Tagen ab Tag 0.

> [!warning]
>
> Abhängig von der Erweiterung des Domainnamens (z. B. *.com*, *.net*, etc.) können einige der oben genannten Fristen variieren. Wir empfehlen Ihnen, sich bei der Registry der Erweiterung Ihres Domainnamens über den Verifikationsprozess der Kontaktdaten zu informieren.

///

/// details | Ich habe die E-Mail zur Validierung der Informationen des Inhabers meines Domainnamens nicht erhalten und dieser ist gesperrt, was soll ich tun?

Wenn Sie die Validierungsmail für den Inhaber Ihres Domainnamens nicht erhalten haben, prüfen Sie die folgenden Punkte:

1. Die bei OVHcloud angegebene E-Mail-Adresse des Domaininhabers ist gültig und funktioniert.
2. Die Validierungsmail befindet sich nicht im Spam-Ordner.

Nachdem Sie die beiden oben genannten Punkte überprüft und bestätigt haben, und Sie immer noch nicht in der Lage sind, die Validierungsmail zu finden, empfehlen wir Ihnen, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu öffnen, um die erneute Zusendung dieser E-Mail anzufordern.

///

/// details | Was ist ein Domainname im IDN-Format?

Ursprünglich konnten Domainnamen nur spezifische **ASCII**-Zeichen enthalten (darunter die 26 Buchstaben des lateinischen Alphabets). Ein **I**nternationalized **D**omain **N**ame (**IDN**) ermöglicht es, Sonderzeichen oder Akzente zu verwenden, sogar andere Alphabete (z. B. das *kyrillische* Alphabet).

Bei OVHcloud ist es möglich, IDNs zu bestellen und sie wie reguläre Domainnamen mit unseren anderen Diensten (Webhosting, DNS-Zone etc.<sup>1</sup>) zu nutzen.

Nach der Bestellung erscheinen IDNs in Ihrem [OVHcloud Kundencenter](/links/manager) im Format **xn--**.

Selbst wenn Ihr Domainname in Ihrem [OVHcloud Kundencenter](/links/manager) im [internationalisierten Format (IDN)](https://de.wikipedia.org/wiki/Internationalisierter_Domainname) angezeigt wird, funktioniert und wird er an anderen Stellen normal angezeigt. Die Adresse Ihres Webauftritts wird so angezeigt, wie Sie sie angefordert haben. Ihre E-Mail-Adressen werden ebenfalls so angezeigt, wie Sie es wünschen.

> [!alert]
>
> <sup>1</sup> : Es wird nicht empfohlen, eine E-Mail-Adresse mit einem IDN-Domainnamen über einen E-Mail-Client (Outlook, macOS-Mail etc.) zu verwenden. Tatsächlich interpretieren einige E-Mail-Clients noch nicht die Domainnamen mit Akzentzeichen, was die Übertragung der E-Mails blockiert. Wenn ein Absender Ihnen eine E-Mail sendet, erhält er eine automatische Nachricht, die besagt, dass Ihre E-Mail-Adresse nicht existiert.
>
> **Wir empfehlen, zusätzlich zu Ihrem Domainnamen mit Akzentzeichen den gleichen Domainnamen ohne diese Akzente zu reservieren, um bei der Kommunikation per E-Mail keine Kompatibilitätsprobleme zu haben.**

///

/// details | Wie kann ich einen Domainnamen im IDN-Format korrigieren?

Genauso wie reguläre Domainnamen wird ein IDN (Internationalized Domain Name) nach der Bestellung anhand der von Ihnen definierten Zeichen registriert.

Folglich kann ein Tippfehler bei der Bestellung nicht korrigiert werden. Sie müssen einen neuen Domainnamen unabhängig vom vorherigen bestellen (vorausgesetzt, dass die neue gewünschte Schreibweise noch nicht von jemand anderem reserviert ist).

///

/// details | Wie kann ich einen einzelnen Domainnamen in einem Alldom-Paket erneuern?

Dazu müssen Sie mindestens als [Rechnungskontakt](/pages/account_and_service_management/account_information/managing_contacts) des betreffenden Domainnamens angegeben sein. Anschließend müssen Sie den Erneuerungsmodus des Domainnamens auf **automatische Verlängerung** ändern.

Folgen Sie dazu diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager).
2. Klicken Sie auf Ihren Namen in der oberen rechten Ecke und wählen Sie `Meine Angebote und Dienste`{.action}.
3. Im angezeigten Tabelle und rechts neben dem betreffenden Domainnamen klicken Sie auf die Schaltfläche `...`{.action} in der Spalte `Aktionen`, dann auf `Verlängerung konfigurieren`{.action}. Sie können anschließend die Verlängerung dieses Domainnamens auf **automatische Verlängerung** konfigurieren.

> [!primary]
>
> Falls Sie über ein altes Webhosting Angebot verfügen, das einen kostenlosen Domainnamen beinhaltet, und Sie dieses Angebot ändern, kann dies in einigen Fällen die Kostenfreiheit des Domainnamens aufheben.
>
> Bei Unsicherheiten empfehlen wir Ihnen, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu öffnen und den betreffenden Domainnamen sowie das Webhosting dort anzugeben.

> [!success]  
>
> Alle Details finden Sie in unserer Anleitung "[Wie verlängere ich meine OVHcloud Dienste?](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal)".

///

## Transfer eines Domainnamens

/// details | Ist mein Domainname nach einem Inhaberwechsel transferierbar?

Die **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) hat Sicherheitsmaßnahmen eingeführt, um unbefugte oder missbräuchliche Transfers oder Inhaberwechsel von Domainnamen zu verhindern.

Die ICANN hat insbesondere eine **unveränderliche Frist von 60 Tagen** zwischen jeder Operation festgelegt, die auf einem Domainnamen durchgeführt werden kann (Erstellung, Inhaberwechsel, Transfer).

Die von der ICANN festgelegten Regeln müssen von den Registraren (z. B. OVHcloud) strikt eingehalten werden.

Sie haben daher keine andere Wahl, als bis zum Ende der 60-Tage-Frist zu warten, um Ihren Domainnamen nach einem Inhaberwechsel zu übertragen.

///

/// details | Mein Domainname ist 60 Tage gegen Transfers gesperrt, was soll ich tun?

Die **I**nternet **C**orporation for **A**ssigned **N**ames and **N**umbers (**ICANN**) hat Sicherheitsmaßnahmen eingeführt, um unbefugte oder missbräuchliche Transfers oder Inhaberwechsel von Domainnamen zu verhindern.

Die ICANN hat insbesondere eine **unveränderliche Frist von 60 Tagen** zwischen jeder Operation festgelegt, die auf einem Domainnamen durchgeführt werden kann (Erstellung, Inhaberwechsel, Übertragung).

Die von der ICANN festgelegten Regeln müssen von den Registraren (z. B. OVHcloud) strikt eingehalten werden.

Sie haben daher keine andere Wahl, als bis zum Ende der 60-Tage-Frist zu warten, um eine neue Operation (Inhaberwechsel oder Übertragung) auf Ihrem Domainnamen durchzuführen.

///

/// details | Ich finde meinen Domainnamen in meinem Kunden-Account nicht, was soll ich tun?

Zunächst führen Sie eine [WHOIS](/links/web/domains-whois)-Abfrage durch, um zu erfahren, wo Ihr Domainname registriert ist und um zu überprüfen, ob Sie als Inhaber des Domainnamens angegeben sind.

**Fall 1.A** – Ihr Domainname ist bei OVHcloud registriert und Sie sind als Inhaber angegeben:

Führen Sie eine [Kontaktwiederherstellung](/links/transversal/procedure-contact-change) durch, damit Ihr Domainname vollständig in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird. Auf diese Weise müssen Sie die Person, die Ihren Domainnamen zuvor verwaltete, nicht mehr kontaktieren.

**Fall 1.B** – Ihr Domainname ist bei OVHcloud registriert, Sie sind jedoch nicht als Inhaber angegeben:

Gemäß der **Datenschutz-Grundverordnung (DSGVO)** kann OVHcloud keine Informationen über die Person oder Organisation bereitstellen, die den Domainnamen bei OVHcloud verwaltet.

Allerdings können Sie versuchen, die Person oder Organisation zu kontaktieren, indem Sie die Anweisungen in [diesem Formular](/links/web/contact-domain-owner) befolgen.

**Fall 2** – Ihr Domainname ist nicht bei OVHcloud registriert:

Kontaktieren Sie direkt den Registrar (angegeben in den Zeilen, die mit dem Begriff `Registrar` beginnen), um Ihre Suche fortzusetzen. Wenn der Domainname nicht bei OVHcloud registriert ist, können wir Ihnen in diesem Thema nicht weiterhelfen.

///

/// details | Ich kann die Person, die meinen Domainnamen verwaltet, nicht kontaktieren, was soll ich tun?

Zunächst führen Sie eine [WHOIS](/links/web/domains-whois)-Abfrage durch, um zu überprüfen, ob Sie als Inhaber des Domainnamens angegeben sind.

**Fall 1** – Sie sind als Inhaber des Domainnamens angegeben:

Führen Sie eine [Kontaktwiederherstellung](/links/transversal/procedure-contact-change) durch, damit Ihr Domainname vollständig in Ihrem [OVHcloud Kundencenter](/links/manager) verwaltet wird. Auf diese Weise müssen Sie die Person, die Ihren Domainnamen zuvor verwaltete, nicht mehr kontaktieren.

**Fall 2** – Sie sind nicht als Inhaber des Domainnamens angegeben:

Gemäß der **Datenschutz-Grundverordnung (DSGVO)** kann OVHcloud keine Informationen über die Person oder Organisation bereitstellen, die den Domainnamen bei OVHcloud verwaltet.

Allerdings können Sie versuchen, die Person oder Organisation zu kontaktieren, indem Sie die Anweisungen in [diesem Formular](/links/web/contact-domain-owner) befolgen.

///

/// details | Kann ich meinen Domainnamen verkaufen?

Derzeit unterstützt OVHcloud den Verkaufsprozess bereits registrierter Domainnamen nicht direkt. Wir bieten diesen Dienst nicht an.

Allerdings können Sie Ihren Domainnamen auf einem Sekundärmarkt verkaufen, indem Sie einen unserer Partner kontaktieren:

- [Afternic](https://www.afternic.com)
- [Sedo](https://sedo.com)

Wenn Sie Ihren Domainnamen verkaufen möchten, können Sie ihn auf diesen Plattformen hinzufügen. Sobald er hinzugefügt wurde, bieten autorisierte Anbieter Ihren Domainnamen zum Preis an, den Sie auf einer der oben genannten Plattformen festgelegt haben.

///

## DNS-Zone

> [!primary]
>
> Die Änderung einer DNS-Zone ist eine sensible Manipulation und kann zu einer Unterbrechung der Dienste führen, die mit Ihrem Domainnamen verknüpft sind (Webhosting, E-Mail etc.). Falls Sie unsicher sind, zögern Sie nicht, einen [spezialisierten Anbieter](/links/partner) zu kontaktieren.

/// details | Was ist eine DNS-Zone?

Die DNS-Zone eines Domainnamens enthält eine Konfiguration, die für diesen Domainnamen gilt. Sie besteht aus technischen Informationen, sogenannten *DNS-Einträgen*. Die DNS-Zone fungiert wie ein Weichensteller, der den Datenverkehr zu den richtigen Diensten des Domains leitet.

Sie können beispielsweise Folgendes angeben:

- Die IP-Adresse (DNS-Einträge vom Typ *A* und *AAAA*) Ihres Webhostings, um Ihre Website mit Ihrem Domainnamen anzuzeigen.
- Die E-Mail-Server (DNS-Einträge vom Typ *MX*), zu denen Ihr Domainname E-Mails weiterleiten soll.
- Informationen zur Sicherheit/Authentifizierung Ihrer Dienste (Webhosting, Webserver, E-Mail-Server etc.), die mit Ihrem Domainnamen verknüpft sind (DNS-Einträge vom Typ *SPF*, *DKIM*, *DMARC* etc.).

Eine DNS-Zone wird auf **DNS-Servern** gehostet. Diese **DNS-Server** müssen beim Registrar des Domainnamens angegeben werden, um die von ihnen gehostete DNS-Zone nutzen zu können.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Alle Informationen zu DNS-Zonen](/pages/web_cloud/domains/dns_zone_general_information)".

///

/// details | Was ist ein DNS-Eintrag?

DNS-Einträge werden unter anderem verwendet, um:

- Einen Domainnamen mit einer IP-Adresse zu verknüpfen, sodass Benutzer auf eine Website oder einen entfernten Server zugreifen können.
- Einen Domainnamen mit anderen Online-Ressourcen verknüpfen, indem ein leichter zu merkender Domainname anstelle einer IP-Adresse verwendet wird.
- Konfigurationen für Zuordnungen oder Sicherheit zu validieren, insbesondere für E-Mail-Dienste und Shared Hosting.

Es gibt zahlreiche DNS-Einträge. Jeder hat einen spezifischen Zweck bei der DNS-Auflösung. Bei OVHcloud werden sie in drei Kategorien unterteilt:

- **Verweiseinträge**: `A`, `AAAA`, `NS`, `CNAME` und `DNAME`.
- **Erweiterte Einträge**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP` und `TLSA`.
- **Mail-Einträge**: `MX`, `SPF`, `DKIM` und `DMARC`.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - Allgemeine Informationen:
>     - [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)
> - DNS-Verweiseinträge:
>     - [DNS-A-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [DNS-AAAA-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [DNS-CNAME-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Erweiterte DNS-Einträge:
>     - [DNS-TXT-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - E-Mail-DNS-Einträge:
>     - [MX-Eintrag für die E-Mail-Verwaltung konfigurieren](/pages/web_cloud/domains/dns_zone_mx)
>     - [E-Mail-Sicherheit durch SPF-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_spf)
>     - [E-Mail-Sicherheit durch DKIM-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dkim)
>     - [E-Mail-Sicherheit durch DMARC-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Welche DNS-Einträge sind in einer OVHcloud DNS-Zone verfügbar?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Rechts oder unterhalb der Tabelle klicken Sie auf `Eintrag hinzufügen`{.action}.

An dieser Stelle sehen Sie alle DNS-Einträge, die Sie über den OVHcloud Konfigurationsassistenten hinzufügen können.

Mit diesem Assistenten können Sie folgende DNS-Eintrag-Typen hinzufügen:

- **Verweiseinträge**: `A`, `AAAA`, `NS`, `CNAME` und `DNAME`.
- **Erweiterte Einträge**: `CAA`, `TXT`, `NAPTR`, `SRV`, `LOC`, `SSHFP` und `TLSA`.
- **E-Mail-Einträge**: `MX`, `SPF`, `DKIM` und `DMARC`.

> [!primary]
>
> Wenn Sie einen DNS-Eintrag hinzufügen möchten, der nicht in der Liste enthalten ist, schließen Sie das Fenster, das nach dem Klicken auf `Eintrag hinzufügen`{.action} geöffnet wurde, und klicken Sie auf den Button `Im Textmodus bearbeiten`{.action}, der rechts oder unterhalb der Tabelle angezeigt wird.
>
> Auf diese Weise können Sie manuell den gewünschten DNS-Eintrag hinzufügen.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - Allgemeine Informationen:
>     - [Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)
> - DNS-Verweiseinträge:
>     - [DNS-A-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_a_record_creation)
>     - [DNS-AAAA-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
>     - [DNS-CNAME-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_cname_record_creation)
> - Erweiterte DNS-Einträge:
>     - [DNS-TXT-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_txt_record_creation)
> - E-Mail-DNS-Einträge:
>     - [MX-Eintrag für die E-Mail-Verwaltung konfigurieren](/pages/web_cloud/domains/dns_zone_mx)
>     - [E-Mail-Sicherheit durch SPF-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_spf)
>     - [E-Mail-Sicherheit durch DKIM-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dkim)
>     - [E-Mail-Sicherheit durch DMARC-Eintrag verbessern](/pages/web_cloud/domains/dns_zone_dmarc)

///

/// details | Kann ich die in meiner OVHcloud DNS-Zone deklarierten DNS-Server ändern?

Die manuelle Änderung von DNS-Einträgen vom Typ NS eines Domainnamens in einer OVHcloud DNS-Zone wird nicht empfohlen, da dies die DNS-Auflösung der entsprechenden DNS-Zone verhindern würde.

Wenn Sie die Konfiguration der DNS-Einträge vom Typ NS für Ihren Domainnamen ändern möchten, ist dies wahrscheinlich, weil Sie die für diesen Domainnamen deklarierten DNS-Server ändern möchten.

> [!primary]
>
> Um die DNS-Server Ihres Domainnamens bei OVHcloud zu ändern, muss bereits eine DNS-Zone auf den neuen gewünschten DNS-Servern existieren.
> Darüber hinaus müssen Sie in dieser DNS-Zone überprüfen, dass die DNS-Einträge vom Typ NS tatsächlich den entsprechenden DNS-Servern entsprechen.

Folgen Sie dazu diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie den Domainnamen aus.
3. Wählen Sie den Tab `DNS-Server`{.action}, sobald Sie sich auf den betreffenden Domainnamen befinden.
4. Um die DNS-Server zu ändern, klicken Sie auf die Schaltfläche `DNS-Server ändern`{.action} rechts neben der Tabelle `DNS-Server`. Abhängig von der Auflösung Ihres Bildschirms kann sich die Schaltfläche auch unterhalb der Tabelle befinden.

Sie können die DNS-Server für Ihren Domainnamen auf der angezeigten Seite ändern.

> [!primary]
>
> Die Browser der Änderung der für einen Domainnamen deklarierten DNS-Server kann bis zu **48** Stunden dauern.

Falls ein Fehler auftritt, empfehlen wir Ihnen, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu öffnen und folgende Informationen anzugeben:

- Die Namen der DNS-Server, die Sie konfigurieren möchten.
- Die aufgetretene Fehlermeldung.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Was ist der Unterschied zwischen einem DNS-Eintrag vom Typ A (IPv4) und AAAA (IPv6)?

Das Internet-Netzwerk funktioniert seit Anfang der 1990er-Jahre nach der IPv4-Norm. Diese Norm ermöglicht es, jedem Gerät, das mit dem Internet-Netzwerk verbunden ist (Server, Computer, Smartphones, Tablets etc.), eine IP-Adresse im Format X.X.X.X (wobei "X" eine Zahl zwischen 0 und 255 ist) zuzuweisen. Allerdings begrenzt diese Norm die Anzahl der mit dem Internet-Netzwerk verbundenen Geräte auf etwa 4 Milliarden.

Daraufhin wurde das IPv6-Protokoll eingeführt, um bis zu 340 Sextillionen Geräte mit dem Internet-Netzwerk verbinden zu können.

Da IPv4-Adressen mittlerweile weniger verfügbar sind, ist es schwieriger, neue Geräte mit dem Internet-Netzwerk über die IPv4-Norm zu verbinden. Allerdings sind IPv6-Verbindungen nur dann nützlich, wenn beispielsweise auch Ihre Website mit diesem Protokoll verfügbar ist.

DNS-Einträge vom Typ A und AAAA sind zwei Arten von Ressourceneinträgen, die verwendet werden, um einen Domainnamen mit einer IP-Adresse zu verknüpfen.

Ihr Hauptunterschied liegt in der Art der IP-Adresse, die sie verwenden:

- **Eintrag A** ("host record"): Verknüpft einen Domainnamen mit einer IPv4-Adresse (z. B. 213.0.113.0). IPv4-Adressen sind 32-Bit-Adressen, normalerweise in Dezimalnotation mit Punkten geschrieben.
- **Eintrag AAAA** ("quad A record"): Verknüpft einen Domainnamen mit einer IPv6-Adresse (z. B. 2001:db8:1:1b00:213:0:113:0). IPv6-Adressen sind 128-Bit-Adressen, normalerweise in Hexadezimalnotation geschrieben.

Zusammenfassend werden A-Einträge für IPv4-Adressen verwendet, während AAAA-Einträge für IPv6-Adressen verwendet werden. Beide Eintragstypen werden verwendet, um den Datenverkehr zu einer bestimmten IP-Adresse zu leiten, aber sie dienen verschiedenen Versionen des Internet-Protokolls.

Zu beachten ist, dass ein Domainname sowohl A- als auch AAAA-Einträge haben kann, was es ermöglicht, über IPv4- und IPv6-Netzwerke zugänglich zu sein. Dies wird als "dual stack" bezeichnet, eine gängige Praxis für Websites und Dienste, die Benutzern auf IPv4- und IPv6-Netzwerken zugänglich sein sollen.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - [DNS-A-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_a_record_creation)
> - [DNS-AAAA-Eintrag für einen Domainnamen hinzufügen](/pages/web_cloud/domains/dns_zone_aaaa_record_creation)
> - [IPv6 für Ihre Website konfigurieren](/pages/web_cloud/web_hosting/configure_ipv6)

///

/// details | Wie konfiguriere ich einen PTR-Eintrag für meine externe IP-Adresse bei OVHcloud?

Bei OVHcloud können Konfigurationen von **P**oin**T**er **R**ecord (**PTR**) nicht direkt in unseren DNS-Zonen verwaltet werden.

Um einen Reverse/PTR-Eintrag für eine externe IP-Adresse zu konfigurieren, wenden Sie sich an Ihren Internetzugangsanbieter (**ISP**), da dieser für die Verwaltung der Reverse-DNS-Einträge der von ihm zugewiesenen IP-Adressen verantwortlich ist.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Alle Informationen zu DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records)".

///

/// details | Wie ändere ich den Standard-TTL in meiner OVHcloud DNS-Zone?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Rechts oder unterhalb der Tabelle klicken Sie auf `Standardmäßige TTL ändern`{.action}.
4. In dem sich öffnenden Fenster passen Sie den Wert unter der Bezeichnung `Standard-TTL` entsprechend Ihren Bedürfnissen an und klicken Sie auf `Ändern`{.action}.

> [!primary]
>
> Die Browser der Änderung einer DNS-Zone kann bis zu **24** Stunden dauern.

///

/// details | Was ist ein DNS-Eintrag vom Typ SOA?

Der DNS-Eintrag vom Typ **S**tart **O**f **A**uthority (**SOA**) stellt eine Reihe von Elementen bereit, die die DNS-Konfiguration eines Domainnamens betreffen.

Unten ist das Ergebnis einer SOA-Abfrage für den Domainnamen `domain.tld` dargestellt.

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

|Element im Ergebnis|Beschreibung|Zuordnung im obigen Beispiel|
|---|---|---|
|**NS (Name Server)**|Haupt-DNS-Server, der für den Domainnamen `domain.tld` deklariert ist.|`dns200.anycast.me.`|
|**Email address**|E-Mail-Adresse der Person, die für die DNS-Zone verantwortlich ist.|`tech.ovh.net.` (der Punkt zwischen `tech` und `ovh` muss durch ein `@` ersetzt werden)|
|**Serial number**|Einzigartige Nummer, die sich bei jeder Änderung der DNS-Zone erhöht.<br> Sie besteht in der Regel aus dem Datum der Aktualisierung im Format `YYYYMMDD`, gefolgt von der Anzahl der Aktualisierungen am Tag.|`2025091801`: Hier wurden 2 Aktualisierungen (`00` für 1, `01` für 2 etc.) am 18.09.2025 durchgeführt.|
|**Refresh time**|Zeitintervall (in Sekunden) zwischen den Aktualisierungen der sekundären DNS-Server (Bestandteil des DNS-Netzwerks) mit dem primären DNS-Server.|`86400` (24 Stunden)|
|**Retry time**|Zeitintervall (in Sekunden) zwischen den erneuten Aktualisierungsversuchen der sekundären DNS-Server (Bestandteil des DNS-Netzwerks) mit dem primären DNS-Server, wenn dieser nicht antwortet oder nicht verfügbar ist.|`3600` (1 Stunde)|
|**Expire time**|Zeit (in Sekunden), nach der die sekundären DNS-Server (Bestandteil des DNS-Netzwerks) keine DNS-Anfragen mehr beantworten, wenn der primäre DNS-Server nicht mehr mit ihnen synchronisiert.|`3600000` (1000 Stunden, 41,67 Tage)|
|**Minimum TTL**|Minimale Lebensdauer (in Sekunden), für die die DNS-Einträge der DNS-Zone auf den sekundären DNS-Servern (Bestandteil des DNS-Netzwerks) zwischengespeichert werden.|`300` (5 Minuten)|

///

<br>

/// details | Wie kann ich die Konfiguration meiner DNS-Zone überprüfen?

Hier sind verschiedene Lösungen, um die Konfiguration einer DNS-Zone zu überprüfen:

- **Ein Online-Überprüfungstool**: Es gibt mehrere Online-Tools, die die Konfiguration Ihrer DNS-Zone überprüfen können. Sie können sie direkt über einen Webbrowser (Chrome, Edge, Firefox, Safari etc.) aufrufen, indem Sie die entsprechenden Schlüsselwörter (z. B. "DNS-Propagation prüfen") in eine Suchmaschine eingeben.

- **Der Befehl "dig"**: Wenn Sie Zugriff auf einen *Terminal* über ein Linux- oder macOS-System haben, können Sie den Befehl `dig` verwenden, um die Konfiguration Ihrer DNS-Zone im DNS-Netzwerk zu überprüfen.

- **Der Befehl "nslookup"**: Der Befehl `nslookup` ist auf den meisten Betriebssystemen verfügbar und kann ebenfalls verwendet werden, um die Konfiguration Ihrer DNS-Zone zu überprüfen.

- **Über Ihr OVHcloud Kundencenter**: Dazu folgen Sie diesen Schritten (sofern die aktive DNS-Zone Ihres Domainnamens bei OVHcloud verwaltet wird):  
    1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
    2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
    3. In der Tabelle der angezeigten Seite können Sie alle für Ihren Domainnamen deklarierten DNS-Einträge einsehen.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Wie kann ich die Browser der Änderungen in meiner DNS-Zone überprüfen?

> [!primary]
>
> Vorab wissen Sie:
>
> - Die Browser einer Änderung in einer DNS-Zone kann bis zu **24** Stunden dauern.
> - Die Browser einer Änderung der DNS-Server für einen Domainnamen kann bis zu **48** Stunden dauern.

Sie können jedoch die korrekte Browser der DNS-Änderungen mithilfe des DNS-Eintrags vom Typ **S**tart **O**f **A**uthority (**SOA**) überprüfen.

Zunächst öffnen Sie ein kompatibles Terminal auf Ihrem Computer und führen Sie den folgenden Befehl aus (ersetzen Sie `domain.tld` durch Ihren eigenen Domainnamen):

```bash
dig domain.tld soa
```

> [!primary]
>
> Linux- und macOS-Betriebssysteme verfügen standardmäßig über ein kompatibles Terminal, um solche Befehle auszuführen. Wenn Sie ein anderes Betriebssystem verwenden, z. B. Windows, müssen Sie vorher ein kompatibles Terminal installieren, um den Befehl auszuführen.
>
> Außerdem gibt es auch Online-Tools, die zur Überprüfung der DNS-Propagation verwendet werden können.

Nach der Ausführung des Befehls erhalten Sie ein Ergebnis wie folgt:

```bash
              ;; ANSWER SECTION:                                                                                                     

domain.tld.           3600    IN      SOA     dns200.anycast.me. tech.ovh.net. 2025091801 86400 3600 3600000 300   
```

In diesem Ergebnis extrahieren Sie die **Seriennummer** (im Beispiel: `2025091801`).

Sie hat folgende Form: `YYYYMMDDRR`, wobei:

- `YYYYMMDD`: Das Datum (Jahr, Monat und Tag) der letzten propagierten DNS-Aktualisierung für den Domainnamen darstellt.
- `RR`: Die Anzahl der Aktualisierungen, die am angegebenen Tag durchgeführt wurden. Wenn beispielsweise nur eine Aktualisierung am Tag durchgeführt wurde, hat sie den Wert `00`. Wenn 2 Aktualisierungen am gleichen Tag durchgeführt wurden, hat sie den Wert `01` etc.

Nachdem Sie die Seriennummer extrahiert haben, folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Rechts oder unterhalb der Tabelle klicken Sie auf `Im Textmodus bearbeiten`{.action}.
4. In dem sich öffnenden Fenster identifizieren Sie die zweite Zeile, die in unserem Beispiel wie folgt aussähe: `@	IN SOA dns200.anycast.me. tech.ovh.net. (2025091801 86400 3600 3600000 60)`.
5. Vergleichen Sie die Seriennummer, die Sie über das Terminal extrahiert haben, mit der Seriennummer, die in Ihrem OVHcloud Kundencenter angezeigt wird.

**Fall 1** – Die beiden Seriennummern stimmen überein:

Dies bedeutet, dass die DNS-Propagation ordnungsgemäß erfolgt. Sie müssen nichts weiter tun.

**Fall 2** – Die beiden Seriennummern sind unterschiedlich:

Dies bedeutet entweder:

- Die DNS-Propagation Ihrer Änderungen ist noch nicht vollständig abgeschlossen (Sie befinden sich noch im Standardzeitraum der DNS-Propagation). In diesem Fall warten Sie, bis die DNS-Propagation vollständig abgeschlossen ist (**24** Stunden für eine Änderung der DNS-Zone und **48** Stunden für eine Änderung der DNS-Server), und wiederholen Sie dann den Vorgang.
- Die DNS-Propagation erfolgt nicht ordnungsgemäß. In diesem Fall klicken Sie direkt im Fenster `Im Textmodus bearbeiten`{.action}, das sich im Schritt **4** geöffnet hat, ohne Änderungen vorzunehmen, auf die Schaltfläche `Weiter`{.action} und dann auf `Bestätigen`{.action}. Eine neue DNS-Propagation wird dann initiiert.

///

/// details | Wie kann ich eine DNS-Zone wiederherstellen?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Rechts oder unterhalb der Tabelle klicken Sie auf `Den Verlauf meiner DNS-Zone einsehen`{.action}.
4. In der Tabelle der angezeigten Seite identifizieren Sie die Zeile, die der Sicherung der DNS-Zone entspricht, die Sie wiederherstellen möchten, und klicken Sie auf das Symbol in der Spalte `Wiederherstellen`{.action}. Die aktuelle Konfiguration der DNS-Zone wird durch die ausgewählte Sicherung ersetzt.

> [!primary]
>
> Die Browser der Änderung einer DNS-Zone kann bis zu **24** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Den Versionsverlauf einer DNS-Zone verwalten](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Wie kann ich eine Kopie meiner DNS-Zone abrufen?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Rechts oder unterhalb der Tabelle klicken Sie auf `Den Verlauf meiner DNS-Zone einsehen`{.action}.
4. In der Tabelle der angezeigten Seite identifizieren Sie die Zeile, die der Sicherung der DNS-Zone entspricht, die Sie herunterladen möchten, und klicken Sie auf das Symbol in der Spalte `Herunterladen`{.action}. Die Kopie der DNS-Zone wird im Format *.txt* heruntergeladen.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Den Versionsverlauf einer DNS-Zone verwalten](/pages/web_cloud/domains/dns_zone_history)".

///

/// details | Kann ich eine DNS-Zone für einen Subdomainnamen erstellen?

Sie können eine DNS-Zone für einen Subdomainnamen erstellen.

Dazu folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und klicken Sie auf die Schaltfläche `Bestellen`{.action} oben rechts der angezeigten Tabelle.
3. Auf der angezeigten Seite geben Sie den Subdomainnamen (z. B. *www.domain.tld*) ein, für den Sie eine OVHcloud DNS-Zone erstellen möchten. Warten Sie einige Sekunden, während das Tool den Subdomainnamen überprüft.
4. Sobald die Überprüfung erfolgreich ist, wählen Sie aus, ob Sie die minimalen Einträge für die zu erstellende DNS-Zone aktivieren möchten. Diese Wahl ist nicht endgültig, da Sie die [Einträge der DNS-Zone später immer noch bearbeiten können](/pages/web_cloud/domains/dns_zone_edit).
5. Nachdem Sie Ihre Wahl getroffen haben, führen Sie die Schritte bis zur Erstellung der DNS-Zone fort.

Diese DNS-Zone wird auf 2 OVHcloud DNS-Servern installiert. Sie müssen die Namen dieser beiden Server in der aktiven DNS-Zone des Domainnamens deklarieren, unter dem Ihr Subdomainname liegt (z. B. *www.domain.tld* ist ein Subdomainname des Domainnamens *domain.tld*).

Um die Namen der beiden DNS-Server abzurufen, folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Oben links auf der angezeigten Seite rufen Sie die beiden Namen der DNS-Server ab, die unter der Bezeichnung `Name Servers` angezeigt werden. Diese haben eine der folgenden beiden Formen:

- `dnsXXX.ovh.net` und `nsXXX.ovh.net` **oder** `dnsXXX.ovh.ca` und `nsXXX.ovh.ca` (wobei jeder `X` eine Zahl zwischen `0` und `9` darstellt).
- `dns200.ovh.me` und `ns200.anycast.me`.

Deklarieren Sie die beiden DNS-Server mithilfe von zwei Einträgen vom Typ NS in der aktiven DNS-Zone des Domainnamens, aus dem Ihr Subdomainname stammt.

**Fall 1** – Die aktive DNS-Zone des Domainnamens, aus dem Ihr Subdomainname stammt, ist bei OVHcloud:

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Rechts oder unterhalb der Tabelle klicken Sie auf `Eintrag hinzufügen`{.action}, dann wählen Sie den Eintragstyp `NS`{.action}, um einen DNS-Server zu deklarieren.
4. In dem sich öffnenden Fenster geben Sie den betreffenden Subdomainnamen in das Feld `Subdomain *`{.action} ein (z. B. geben Sie **ausschließlich** *www* ein, wenn Ihr Domainname *domain.tld* ist und Ihr vollständiger Subdomainname *www.domain.tld* ist). Geben Sie **nur einen** der beiden DNS-Server in das Feld `Ziel *`{.action} ein.
5. Klicken Sie auf `Weiter`{.action}, dann auf `Bestätigen`{.action}.

Wiederholen Sie den Vorgang für den zweiten DNS-Server, der noch deklariert werden muss.

**Fall 2** – Die aktive DNS-Zone des Domainnamens, aus dem Ihr Subdomainname stammt, ist nicht bei OVHcloud:

Sie müssen die beiden DNS-Server für Ihren Subdomainname direkt beim DNS-Anbieter Ihres Domainnamens (aus dem Ihr Subdomainname stammt) deklarieren.

> [!primary]
>
> In beiden Fällen kann die Browser der Änderung einer DNS-Zone bis zu **24** Stunden dauern.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - [OVHcloud DNS-Zone für eine Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

///

/// details | Wie kann ich alle Subdomainnamen eines Domainnamens auf dieselbe IP-Adresse weiterleiten?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Rechts oder unterhalb der Tabelle klicken Sie auf `Eintrag hinzufügen`{.action}, dann wählen Sie den Eintragstyp `A`{.action} für IPv4 (z. B. `203.0.113.0`) oder `AAAA`{.action} für IPv6 (z. B. `2001:db8:1:1b00:203:0:113:0`).
4. In dem sich öffnenden Fenster füllen Sie im Feld `Subdomain *`{.action} den Wert `*` aus. Das Asteriskzeichen `*` steht für alle Subdomainnamen (z. B. `www.domain.tld` oder `ovhcloud.domain.tld`) Ihres Domainnamens. Füllen Sie das Feld `Ziel *`{.action} mit der gewünschten IP-Adresse aus.
5. Klicken Sie auf `Weiter`{.action}, dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Browser der Änderung einer DNS-Zone kann bis zu **24** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

///

/// details | Kann ich in meiner DNS-Zone Wildcards einrichten?

Es ist möglich, Wildcards in einer OVHcloud DNS-Zone einzurichten.

Dazu folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und wählen Sie den Domainnamen aus.
3. Rechts oder unterhalb der Tabelle klicken Sie auf `Eintrag hinzufügen`{.action}, dann wählen Sie den Eintragstyp aus, für den Sie einen Wildcard einrichten möchten.
4. In dem sich öffnenden Fenster füllen Sie im Feld `Subdomain *`{.action} den Wert `*` aus. Das Asteriskzeichen `*` steht für alle Subdomainnamen (z. B. `www.domain.tld` oder `ovhcloud.domain.tld`) Ihres Domainnamens. Füllen Sie die anderen Felder mit den gewünschten Werten aus.
5. Klicken Sie auf `Weiter`{.action}, dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Browser der Änderung einer DNS-Zone kann bis zu **24** Stunden dauern.

> [!success]
>
> Alle Details finden Sie in unserer Anleitung "[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)".

///

<br>

/// details | Ich habe versehentlich meine DNS-Zone gelöscht und möchte sie wiederherstellen, was soll ich tun?

OVHcloud sendet eine E-Mail mit einer Textkopie der DNS-Zone, sobald Ihre DNS-Zone gelöscht wird, damit Sie sie später wiederherstellen können, falls erforderlich.  
Diese E-Mail wird an die E-Mail-Adresse gesendet, die mit Ihrem OVHcloud Kunden-Account verknüpft ist.

> [!success]
>
> Wenn Sie diese E-Mail nicht erhalten haben, prüfen Sie Ihren Spam-Ordner oder folgen Sie diesen Schritten:  
>
> 1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an, klicken Sie auf Ihren Namen oben rechts und dann auf `Zu meinem Account`{.action}.  
> 2. Auf der angezeigten Seite klicken Sie auf den Tab `Empfangene E-Mails`{.action}.  
> 3. In der Tabelle, die angezeigt wird, und in der Liste der empfangenen E-Mails, klicken Sie auf die betreffende E-Mail, um ihren Inhalt anzuzeigen.  

Um Ihre DNS-Zone wiederherzustellen, folgen Sie diesen Schritten:  

1. Laden Sie die Datei herunter, die die DNS-Zone enthält, aus der empfangenen E-Mail.
2. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an und gehen Sie in den Bereich `Web Cloud`{.action}.
3. Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie den betreffenden Domainnamen.
4. Wählen Sie den Tab `DNS-Zone`{.action} aus, sobald Sie sich auf den betreffenden Domainnamen befinden. **Falls die DNS-Zone inaktiv ist, aktivieren Sie sie über diesen Tab.**
5. Rechts oder unterhalb der Tabelle klicken Sie auf `Im Textmodus bearbeiten`{.action}.
6. In dem sich öffnenden Fenster ersetzen Sie den gesamten angezeigten Inhalt durch die Kopie der gelöschten DNS-Zone. Klicken Sie anschließend auf `Weiter`{.action} und dann auf `Bestätigen`{.action}.

> [!primary]
>
> Die Browser der Änderung einer DNS-Zone kann bis zu **24** Stunden dauern.

> [!success]
>
> Weitere Informationen finden Sie in den folgenden Anleitungen:
>
> - [OVHcloud DNS-Zone für eine Domainnamen erstellen](/pages/web_cloud/domains/dns_zone_create)
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
> - [Den Versionsverlauf einer DNS-Zone verwalten](/pages/web_cloud/domains/dns_zone_history)

///

/// details | Wie kann ich eine Löschanfrage meiner DNS-Zone stornieren?

Bei jeder Löschanfrage eines Dienstes wird eine E-Mail an die E-Mail-Adresse gesendet, die mit Ihrem OVHcloud Kunden-Account verknüpft ist, um die Löschung zu bestätigen.

Wenn Sie nicht auf den Bestätigungslink in dieser E-Mail geklickt haben, wird Ihre DNS-Zone nicht gelöscht.

Sobald die Löschung über den Link bestätigt wurde, kann sie nicht mehr storniert werden. Die Löschungsvorgang kann bis zu 3 Tage dauern, bevor Sie eine neue OVHcloud DNS-Zone für Ihren Domainnamen erstellen können.

///

/// details | Ich kann keine DNS-Zone für meinen Domainnamen aktivieren, was soll ich tun?

Diese Situation tritt auf, wenn bereits eine DNS-Zone für Ihren Domainnamen bei OVHcloud existiert.

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `DNS-Zone`{.action} und prüfen Sie, ob der betreffende Domainname angezeigt wird.

**Fall 1** – Der betreffende Domainname wird in der Liste angezeigt:

Dies bedeutet, dass die DNS-Zone des Domainnamens bereits in Ihrem [OVHcloud Kundencenter](/links/manager) vorhanden ist. Sie können sie direkt an dieser Stelle verwalten.

**Fall 2** – Der betreffende Domainname wird in der Liste nicht angezeigt:

Dies bedeutet, dass die DNS-Zone des Domainnamens von einem anderen OVHcloud Kunden-Account verwaltet wird.

Gemäß der **Datenschutz-Grundverordnung (DSGVO)** bleibt der Kunden-Account, auf dem sich die DNS-Zone befindet, vertraulich.

In dieser Situation und wenn Sie diesen Kunden-Account nicht kennen, empfehlen wir Ihnen, ein Support-Ticket über das [Help Center](https://help.ovhcloud.com/csm?id=csm_get_help) zu öffnen, um die Verwaltung der DNS-Zone zu übernehmen.

///

/// details | Warum ist der Tab GLUE in meinem OVHcloud Kundencenter nicht sichtbar?

Die Funktion ist nicht für alle Domain-Erweiterungen verfügbar.
Wenn der Tab nicht in Ihrem [OVHcloud Kundencenter](/links/manager) angezeigt wird, bedeutet dies, dass die Option `GLUE` für Ihren Domainnamen nicht verfügbar ist.

> [!success]
>
> Weitere Einzelheiten finden Sie in unserer Anleitung "[DNS-Server von Domainnamen individualisieren (Glue Records)](/pages/web_cloud/domains/glue_registry)".

///

## DNS-Server

> [!primary]
>
> Die Änderung der DNS-Server ist eine sensible Aktion und kann zu Unterbrechungen der Dienste führen, die mit Ihrem Domainnamen verbunden sind (Webhosting, E-Mail etc.). Falls Sie unsicher sind, zögern Sie nicht, einen [spezialisierten Anbieter](/links/partner) zu kontaktieren.

/// details | Wie kann ich meine DNS-Server ändern?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie den Domainnamen aus.
3. Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf den betreffenden Domainnamen befinden.
4. Um die DNS-Server zu ändern, klicken Sie auf den Button `DNS-Server ändern`{.action} rechts neben der Tabelle "DNS-Server". Abhängig von der Auflösung Ihres Bildschirms kann sich der Button unterhalb der Tabelle befinden.

Sie können die DNS-Server für Ihren Domainnamen auf der angezeigten Seite ändern.

> [!primary]
>
> Die Browser der Änderung der angegebenen DNS-Server für einen Domainnamen kann bis zu **48** Stunden dauern.

> [!success]
>
> Weitere Einzelheiten finden Sie in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Wie kann ich meine DNS-Server anpassen?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie den Domainnamen aus.
3. Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf den betreffenden Domainnamen befinden.
4. Um die DNS-Server zu ändern, klicken Sie auf den Button `DNS-Server ändern`{.action} rechts neben der Tabelle "DNS-Server". Abhängig von der Auflösung Ihres Bildschirms kann sich der Button unterhalb der Tabelle befinden.

Sie können die DNS-Server für Ihren Domainnamen auf der angezeigten Seite anpassen.

> [!primary]
>
> Die Browser der Änderung der angegebenen DNS-Server für einen Domainnamen kann bis zu **48** Stunden dauern.

> [!success]
>
> Weitere Einzelheiten finden Sie in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | Wie kann ich meine DNS-Server durch die von OVHcloud ersetzen?

Folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Domainnamen`{.action} und wählen Sie den Domainnamen aus.
3. Wählen Sie den Tab `DNS-Server`{.action} aus, sobald Sie sich auf den betreffenden Domainnamen befinden.
4. Um die DNS-Server zu ändern, klicken Sie auf den Button `DNS-Server ändern`{.action} rechts neben der Tabelle "DNS-Server". Abhängig von der Auflösung Ihres Bildschirms kann sich der Button unterhalb der Tabelle befinden.

Sie können die DNS-Server für Ihren Domainnamen durch die von OVHcloud ersetzen, auf der angezeigten Seite.

> [!primary]
>
> Die Browser der Änderung der angegebenen DNS-Server für einen Domainnamen kann bis zu **48** Stunden dauern.

> [!success]
>
> Weitere Einzelheiten finden Sie in unserer Anleitung "[DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)".

///

/// details | In meinem Kundencenter erhalte ich eine Fehlermeldung, die besagt, dass ich die DNS-Server von OVHcloud für meinen Domainnamen nicht verwende. Was soll ich tun?

In Ihrem [OVHcloud Kundencenter](/links/manager) zeigt diese Nachricht nur an, dass die für Ihren Domainnamen erstellte DNS-Zone nicht die aktive DNS-Zone ist.

Das bedeutet, dass die in dieser DNS-Zone vorhandene Konfiguration nicht die ist, die aktuell auf Ihren Domainnamen angewandt wird.

Überprüfen Sie jedoch, ob die in der Meldung angezeigten DNS-Server tatsächlich die sind, die Sie für Ihren Domainnamen anwenden möchten. Überprüfen Sie anschließend die Konfiguration der DNS-Zone, die auf diesen DNS-Servern bei Ihrem DNS-Anbieter deklariert ist.

Wenn Sie die DNS-Server von OVHcloud für Ihren Domainnamen verwenden möchten, können Sie die DNS-Konfiguration der bei OVHcloud vorhandenen DNS-Zone entsprechend Ihren Anforderungen vorbereiten und diese dann für Ihren Domainnamen aktivieren.

> [!success]
>
> Weitere Einzelheiten finden Sie in den folgenden Anleitungen:
>
> - [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)
> - [DNS-Server eines OVHcloud Domainnamens ändern](/pages/web_cloud/domains/dns_server_edit)

///

/// details | Ich kann die DNS-Server eines Domainnamens in meinem OVHcloud Kundencenter nicht ändern. Was soll ich tun?

Das bedeutet, dass Sie nur die Verwaltung der DNS-Zone des Domainnamens haben, nicht aber die des Domainnamens selbst.

Um dies zu überprüfen, folgen Sie diesen Schritten:

1. Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein und gehen Sie dann in den Bereich `Web Cloud`{.action}.
2. Klicken Sie auf das Menü `Domainnamen`{.action}, und überprüfen Sie, ob der betreffende Domainname in der Liste angezeigt wird.

Fall 1 - Der Domainname wird in der Liste nicht angezeigt:

Das bedeutet, dass der Domainname nicht über Ihr [OVHcloud Kundencenter](/links/manager) verwaltet wird. Führen Sie eine [WHOIS](/links/web/domains-whois)-Abfrage durch, um zu erfahren, wo er registriert ist.

Sie können anschließend eine der folgenden Aktionen durchführen (sofern Sie der im WHOIS als Inhaber deklarierte Nutzer sind):

- Der Domainname ist bei OVHcloud registriert: Sie können eine [Prozedur zur Wiederherstellung der Kontakte](/links/transversal/procedure-contact-change) durchführen, damit Ihr Domainname über Ihr [OVHcloud Kundencenter](/links/manager) verwaltet wird.
- Der Domainname ist nicht bei OVHcloud registriert: Sie können einen [Domaintransfer](/pages/web_cloud/domains/transfer_incoming_generic_domain) durchführen, damit Ihr Domainname über Ihr [OVHcloud Kundencenter](/links/manager) verwaltet wird.

Fall 2 - Der Domainname wird in der Liste angezeigt:

Das bedeutet, dass Sie nicht über ausreichende Rechte verfügen, um den Domainnamen über Ihr [OVHcloud Kundencenter](/links/manager) zu verwalten. Führen Sie eine [WHOIS](/links/web/domains-whois)-Abfrage durch, um zu überprüfen, ob Sie als Inhaber des Domainnamens deklariert sind.

Sie können anschließend eine [Prozedur zur Wiederherstellung der Kontakte](/links/transversal/procedure-contact-change) durchführen, damit Ihr Domainname vollständig über Ihr [OVHcloud Kundencenter](/links/manager) verwaltet wird.

///

## Weiterführende Informationen <a name="go-further"></a>

[FAQ OVHcloud E-Mails](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

[FAQ Webhosting](/pages/web_cloud/web_hosting/faq-web_hosting)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
