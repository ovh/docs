---
title: 'Die Verwaltung Ihrer E-Mail-Accounts einer anderen Person übertragen'
legacy_guide_number: 1933
slug: dereguer-emails-andere
excerpt: Erfahren Sie, wie Sie die Verwaltung der E-Mail-Accounts Ihres MX Plan Angebots delegieren
section: E-Mail Account Funktionen
order: 05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 11.10.2021**

## Ziel <a name="objective"></a>

Die Delegation gibt dem Benutzer eines E-Mail-Accounts die Möglichkeit, verschiedene Funktionen (insbesondere die Änderung des Passworts) selbst zu verwalten. Diese Funktionen hängen vom Typ der eingerichteten Übertragung ab:

- Alle **Ihre E-Mail-Accounts** einem oder mehreren OVHcloud Accounts übertragen. Diese Art der Übertragung ermöglicht es Kunden-Accounts, die Filter, E-Mail-Beantworter, Weiterleitungen/Alias sowie Mailinglisten zu verwalten.

- Einen **oder mehrere E-Mail**-Accounts und deren Filter einem einzigen OVHcloud-Account zuweisen. Diese Art der Übertragung erlaubt es den Empfängern nicht, die E-Mail Beantworter, Weiterleitungen oder Mailinglisten zu verwalten. Außerdem ist es den Empfängern nicht möglich, das oder die betreffenden E-Mail-Accounts zu löschen, E-Mails von einem anderen Account zu importieren oder Delegationen zu verwalten.

**Hier erfahren Sie, wie Sie die E-Mail-Accounts Ihres MX Plan Angebots delegieren.**

## Voraussetzungen

- Sie haben ein MX Plan Angebot, Diese ist verfügbar über: ein [Cloud Webhosting](https://www.ovh.de/hosting/) , ein [kostenloses-Start 10M](https://www.ovh.de/domains/angebot_hosting_start10m.xml)Hosting oder ein separat bestelltes MX Plan Angebot.
- Sie sind im OVHcloud [Kundencenter eingeloggt](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und befinden sich im `Bereich WebCloud`{.action}.

> [!warning]
>
> Die folgende Anleitung richtet sich an die Inhaber des MXplan Angebots "History". Für das neue Angebot gibt es keine Delegationen. Die Änderung des Passworts, die Filter und Auto-Antworten einer E-Mail-Adresse können direkt über das OWA Webmail (**O**utlook **W**eb **A**pplication) geändert werden. **Identifizieren Sie Ihr Angebot mit der nachstehenden Tabelle.**
>

|Historische MX Plan Version|Neue MX Plan Version|
|---|---|
|![E-Mail](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Ihr Angebot steht in der Box „Abo“.|![E-Mail](images/mxplan-starter-new-step1.png){.thumbnail}<br>Die "Server-Referenz"finden Sie in der Box "Zusammenfassung"|
|Lesen Sie diese Anleitung weiter unter "[In der Praxis](#oldmxplan)"|Lesen Sie unsere Anleitung "[Den Exchange Account über das OWA Interface einsehen](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_2016_verwendung_der_outlook_web_app/#passwort-andern)"|

## In der Praxis <a name="oldmxplan"></a>

> [!primary]
>
>Die Einrichtung einer Delegation auf einem E-Mail-Account zeigt diese im betreffenden [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)
an. In diesem Fall sind jedoch nur die im Abschnitt [Ziel](#objective) dieser Anleitung aufgeführten Änderungen möglich.
>

Loggen Sie sich in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und gehen Sie in den Bereich `Web Cloud`.

Klicken Sie im linken Menü auf `E-Mails`{.action} und wählen Sie den Namen Ihres MX Plan Angebots aus.

Um die Liste der E-Mail-Accounts Ihres MXplan Angebots anzuzeigen, klicken Sie auf den Tab `E-Mails`{.action}.

![Delegation](images/mxplan-delegation-01.png){.thumbnail}

### Alle Ihre E-Mail-Accounts einem oder mehreren OVHcloud-Accounts übertragen

Diese Art der Übertragung ermöglicht es dem Empfänger, Passwörter, Filter, E-Mail-Beantworter, Weiterleitungen/Alias sowie Mailinglisten zu verwalten.

Klicken Sie auf `Freigaben für alle E-Mail-Adressen verwalten`{.action}

![Delegation](images/mxplan-delegation-02.png){.thumbnail}

Es öffnet sich ein neues Fenster. Klicken Sie rechts `+`{.action} neben der Angabe Eine `Kennung hinzufügen `. Geben Sie die OVHcloud-Kennung an, die diese Berechtigung erhält, und bestätigen Sie Ihre Wahl.

![Delegation](images/mxplan-delegation-03.png){.thumbnail}

Sie können die Verwaltung Ihres MXplan Dienstes an mehrere OVHcloud-Kennungen delegieren.

### Einen oder mehrere E-Mail-Accounts mit einer

Mit dieser Delegation können Sie das Passwort des betreffenden E-Mail-Accounts ändern und dessen Filter verwalten.

Klicken Sie rechts neben dem E-Mail-Account, den Sie delegieren möchten, auf `...`{.action} und dann `auf Verwaltung der Delegation`{.action}.

![Delegation](images/mxplan-delegation-04.png){.thumbnail}

Geben Sie die OVHcloud-Kennung an, die von dieser Berechtigung profitieren wird, und bestätigen Sie Ihre Wahl.

![Delegation](images/mxplan-delegation-05.png){.thumbnail}

Um jede E-Mail-Adresse zu verwalten, können Sie mehrere OVHcloud-Login-Daten hinzufügen.

## Weiterführende Informationen

[Erste Schritte mit MX Plan](https://docs.ovh.com/de/emails/allgemeines-zu-shared-e-mails/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.