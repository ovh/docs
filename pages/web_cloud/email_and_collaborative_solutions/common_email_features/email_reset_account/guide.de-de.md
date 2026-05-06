---
title: "Löschen eines E-Mail-Accounts"
excerpt: "Erfahren Sie hier, wie Sie einen Account Ihrer E-Mail-Lösung löschen oder zurücksetzen"
updated: 2026-02-19
---

## Ziel

Sie möchten:

- Einen E-Mail-Account löschen, den Sie nicht mehr verwenden.
- Einen E-Mail-Account zurücksetzen, um ihn mit einer neuen E-Mail-Adresse zu verwenden.
- Einen E-Mail-Account zurücksetzen, um ihn zu kündigen.

**Diese Anleitung erklärt, wie Sie einen Account Ihrer E-Mail-Lösung löschen oder zurücksetzen.**

## Voraussetzungen

- Sie verfügen über eine bereits konfigurierte OVHcloud E-Mail-Lösung:
    - **MX Plan** (enthalten in einem [Webhosting](/links/web/hosting) oder [Kostenloses Hosting 100M](/links/web/domains-free-hosting) oder separat bestellt).
    - [**Exchange**](/links/web/emails-exchange).
    - [**E-Mail Pro**](/links/web/email-pro).
    - [**Zimbra**](/links/web/zimbra).
- Sie sind der Admin-Kontakt des betreffenden E-Mail-Dienstes.
- Sie verfügen über Zugangsdaten für die betreffenden E-Mail-Accounts.

<!-- CP-NAV-START:web-mx-plan -->
<!-- CP-NAV-START:web-zimbra -->
<!-- CP-NAV-START:web-email-pro -->
<!-- CP-NAV-START:web-exchange -->
---

### Zugriff auf das OVHcloud Kundencenter

**MX Plan:**

- **Direkter Link:** [MX Plan](/links/control-panel/web-mx-plan)
- **Navigationspfad:** `Web Cloud`{.action} > `MX Plan`{.action} > Wählen Sie Ihren MX Plan Dienst aus

**Zimbra:**

- **Direkter Link:** [Zimbra](/links/control-panel/web-zimbra)
- **Navigationspfad:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

**E-Mail Pro:**

- **Direkter Link:** [E-Mail Pro](/links/control-panel/web-email-pro)
- **Navigationspfad:** `Web Cloud`{.action} > `E-Mail Pro`{.action} > Wählen Sie Ihre Plattform aus

**Exchange:**

- **Direkter Link:** [Exchange](/links/control-panel/web-exchange)
- **Navigationspfad:** `Web Cloud`{.action} > `Exchange`{.action} > Wählen Sie Ihre Plattform aus

---
<!-- CP-NAV-END:web-exchange -->
<!-- CP-NAV-END:web-email-pro -->
<!-- CP-NAV-END:web-zimbra -->
<!-- CP-NAV-END:web-mx-plan -->

<a name="whichmxplan"></a>

> [!primary]
>
> **Identifizierung der E-Mail-Technologie Ihres MX Plan Angebots.**
>
> Je nach Aktivierungsdatum Ihres MX Plan Angebots oder nach einer kürzlich erfolgten Migration kann die zugehörige E-Mail-Technologie abweichen. Diese Technologie zeichnet sich durch die Oberfläche ihres Webmails aus. Um sie zu identifizieren:
>
> - Notieren Sie sich im Tab `Allgemeine Informationen`{.action} die verwendete Technologie unter der Angabe **Webmail** im Rahmen `Abo`{.action}.
>
> ![MX plan](images/technology-email.png){.thumbnail .w-500}

## In der praktischen Anwendung <a name="instructions"></a>

OVHcloud bietet 4 E-Mail-Lösungen an. Das Konzept der Löschung von Accounts variiert je nach ausgewähltem Dienst.

- **E-Mail MX Plan**: Dieses Angebot enthält eine bestimmte Anzahl an E-Mail-Accounts als Gesamtpaket. Wenn Sie einen E-Mail-Account löschen, wird der "Slot" dieses Accounts freigegeben.
- **E-Mail Pro**, **Hosted Exchange** und **Zimbra**: Diese Angebote sind On-Demand. Sie bestellen ein individuelles Abonnement pro E-Mail-Account. Wenn Sie einen E-Mail-Account löschen möchten, müssen Sie diesen zuerst **zurücksetzen**. Wenn Sie Ihren E-Mail-Account zurückgesetzt haben, können Sie diesen erneut verwenden, um eine neue E-Mail-Adresse zu erstellen. Um diesen Account endgültig zu löschen, muss sein [Abonnement gekündigt werden](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange#accounts-entfernen).

### E-Mail-Account löschen oder zurücksetzen

Wählen Sie den Tab für Ihren E-Mail-Dienst aus:

> [!tabs]
> **MX Plan Roundcube**
>>
>> Um die E-Mail-Technologie Ihres MX Plan Dienstes zu identifizieren, lesen Sie den Abschnitt "[Identifizierung der E-Mail-Technologie Ihres MX Plan Angebots](#whichmxplan)" in dieser Anleitung.
>>
>> 1. Wechseln Sie zum Tab `E-Mails`{.action}. Im daraufhin angezeigten Fenster werden die vorhandenen E-Mail-Accounts angezeigt.
>> 1. Klicken Sie auf `...`{.action} rechts neben dem zu bearbeitenden Account, und klicken Sie dann auf `Account löschen`{.action}.
>>
>> ![E-Mail](images/email-mxplan-legacy-reset.png){.thumbnail}
>>
> **MX Plan Zimbra/OWA**
>>
>> Um die E-Mail-Technologie Ihres MX Plan Dienstes zu identifizieren, lesen Sie den Abschnitt "[Identifizierung der E-Mail-Technologie Ihres MX Plan Angebots](#whichmxplan)" in dieser Anleitung.
>>
>> 1. Wechseln Sie zum Tab `E-Mails`{.action}. Im daraufhin angezeigten Fenster werden die vorhandenen E-Mail-Accounts angezeigt.
>> 1. Klicken Sie auf `...`{.action} rechts neben dem zu bearbeitenden Account, und klicken Sie dann auf `Diesen Account zurücksetzen`{.action}.
>>
>> ![E-Mail](images/email-mxplan-new-reset.png){.thumbnail}
>>
> **E-Mail Pro**
>>
>> 1. Wechseln Sie zum Tab `E-Mail Accounts`{.action}. Im daraufhin angezeigten Fenster werden die vorhandenen E-Mail-Accounts angezeigt.
>> 1. Klicken Sie auf `...`{.action} rechts neben dem zu bearbeitenden Account, und klicken Sie dann auf `Diesen Account zurücksetzen`{.action}.
>>
>> Wenn Sie Ihren Account nach dem Zurücksetzen endgültig löschen möchten, müssen Sie ihn kündigen. Lesen Sie hierzu unsere Anleitung zur [Verwaltung der Abrechnung Ihrer E-Mail Pro Accounts](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro).
>>
>> ![E-Mail](images/emailpro-reset.png){.thumbnail}
>>
> **Exchange**
>>
>> 1. Wechseln Sie zum Tab `E-Mail Accounts`{.action}.
>> 1. Klicken Sie auf `...`{.action} rechts neben dem zu bearbeitenden Account, und klicken Sie dann auf `Zurücksetzen`{.action}.
>>
>> Wenn Sie Ihren Account nach dem Zurücksetzen endgültig löschen möchten, müssen Sie ihn kündigen. Lesen Sie hierzu unsere Anleitung zur [Verwaltung der Abrechnung Ihrer Exchange Accounts](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange).
>>
>> ![E-Mail](images/exchange-reset.png){.thumbnail}
>>
> **Zimbra STARTER/PRO**
>>
>> 1. Wechseln Sie zum Tab `E-Mail Account`{.action}. Im daraufhin angezeigten Fenster werden die vorhandenen E-Mail-Accounts angezeigt.
>> 1. Klicken Sie auf `⋮`{.action} rechts neben dem zu bearbeitenden Account, und klicken Sie dann auf `Löschen`{.action}.
>>
>> ![E-Mail](images/email-zimbra-reset.png){.thumbnail}
>>

## Weiterführende Informationen

[Erste Schritte mit MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Erste Schritte mit E-Mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

[Erste Schritte mit Hosted Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted)

[Erste Schritte mit Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Verwaltung der Abrechnung Ihrer E-Mail Pro Accounts](/pages/web_cloud/email_and_collaborative_solutions/email_pro/manage_billing_emailpro)

[Verwaltung der Abrechnung Ihrer Exchange Accounts](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/manage_billing_exchange)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere [Support-Angebote einsehen](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
