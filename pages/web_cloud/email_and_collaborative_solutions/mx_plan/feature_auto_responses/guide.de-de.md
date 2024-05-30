---
title: 'MXplan - Automatische Antwort auf eine E-Mail-Adresse erstelle'
excerpt: 'Erfahren Sie, wie Sie eine automatische Antwort auf eine E-Mail-Adresse einrichten'
updated: 2024-05-24
---

## Ziel

Wenn Sie abwesend sind und Ihre E-Mail-Adresse nicht einsehen können, können Sie eine automatische Antwort (oder einen Beantworter) einrichten, die eine E-Mail an die Gesprächspartner sendet, die Ihnen eine E-Mail senden.

**So richten Sie eine automatische Antwort auf eine E-Mail-Adresse ein.**

## Voraussetzungen

- Sie verfügen über ein MX Plan Angebot. Diese ist verfügbar über : ein [Webhosting](/links/web/hosting) Angebot, das [Gratis-Hosting 100M](/links/web/domains-free-hosting) Angebot inklusive mit einem Domainnamen (im Vorfeld aktiviert) oder das separat bestellte MX Plan Angebot.
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt.

## In der Praxis

> [!PRIMARY]
>
> Wenn Ihre E-Mail-Adresse auf einem [**Exchange**](/links/web/emails-hosted-exchange/), [**Email Pro**](/links/web/emails-email-pro/) Angebot steht oder es keinen Abschnitt `Verwaltung der automatischen Beantworter`{.action} in Ihrem MXplan gibt, dann erstellen Sie eine automatische Antwort von Ihrem Webmail aus anhand der Dokumentation ["Eine automatische Antwort über das OWA-Interface einrichten"](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies).

### Automatische Antwort erstellen

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager). Wählen Sie die betreffende Domain im Bereich `E-Mails`{.action} aus. Klicken Sie oben auf `E-Mails`{.action} und dann auf `Verwaltung der automatischen Antworten`{.action}.

Sie werden zum Fenster `Verwaltung der automatischen Antworten` weitergeleitet, in dem alle für Ihr E-Mail-Angebot verfügbaren automatischen Antworten angezeigt werden.

Klicken Sie auf `Eine Auto-Antwort hinzufügen`{.action}

![Hosting](images/email_responder01.png){.thumbnail}

Das Fenster „Hinzufügen“ wird angezeigt. Sie können diese Angaben wie folgt ergänzen.

- `Beantwortertyp`:

**An eine E-Mail-Adresse gebunden**: zu verwenden, wenn es sich um eine bestehende E-Mail-Adresse auf Ihrem E-Mail-Angebot handelt.
**Frei**: Zur Verwendung mit einem Alias. Es ist also nicht an eine existierende Adresse gebunden.

- `Mailbox` oder `Name des Beantworters`: die E-Mail-Adresse oder der Alias, auf die bzw. den sich die automatische Antwort bezieht.
- `Dauer der automatischen Antwort`:
    - **Temporär**: Legen Sie ein Start- und Enddatum fest, das für die Funktion Ihrer automatischen Antwort berücksichtigt werden soll (nützlich, wenn Sie z.B. Urlaub nehmen).
    - **Permanent**: Die automatische Antwort funktioniert so lange, bis Sie sie deaktivieren.
- `Eine Kopie versenden` oder `Nachrichten auf dem Server ablegen`: erlaubt es, die während Ihrer Abwesenheit empfangenen Nachrichten an die Adresse Ihrer Wahl weiterzuleiten oder auf der E-Mail-Adresse zu speichern.

> [!warning]
>
> Wenn Sie dieses Kontrollkästchen deaktivieren, werden während Ihrer Abwesenheit empfangene Nachrichten automatisch gelöscht.

- `Adresse in Kopie` (nur im freien Modus): Wählen Sie bei einem Alias die E-Mail-Adresse aus, die die an den Alias gesendeten E-Mails empfängt.
- `Nachricht`: Dies ist die Nachricht, die Ihre Gesprächspartner erhalten, wenn sie Ihnen eine E-Mail senden.

Klicken Sie anschließend auf `Bestätigen`{.action}, um die Konfiguration Ihrer automatischen Antwort abzuschließen.

> [!success]
>
> Wenn Sie die Verwaltung einer automatischen Antwort für eine E-Mail-Adresse delegieren möchten, lesen Sie unsere Anleitung ["Die Verwaltung Ihrer E-Mail-Accounts an eine andere Person delegieren"](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation)

### Automatische Antwort bearbeiten oder löschen

Nachdem Ihre automatische Antwort erstellt wurde, wird sie in der Liste im Bereich `Verwaltung der automatischen Antworten`{.action} Ihres E-Mail-Angebots angezeigt. Sie können sie löschen oder ändern, indem Sie auf `...`{.action} rechts davon klicken.

![Hosting](images/email_responder02.png){.thumbnail}

## Weiterführende Informationen

[E-Mail FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email-faq)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>
