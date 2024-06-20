---
title: 'MX Plan - Einrichten von Auto-Antworten für E-Mails'
excerpt: 'Erfahren Sie hier, wie Sie E-Mail-Responder für E-Mail-Adressen einrichten'
updated: 2024-05-24
---

## Ziel

Mit diesem OVHcloud Feature können Sie einen E-Mail-Responder einrichten, der automatisch Nachrichten an alle sendet, die in Ihrer Abwesenheit versuchen, Sie per E-Mail zu kontaktieren.

**Diese Anleitung erklärt, wie Sie E-Mail-Responder für Ihre Adressen einrichten.**

## Voraussetzungen

- Sie verfügen über einen MX Plan, als E-Mail-Dienst enthalten in einem [OVHcloud Webhosting-Angebot](/links/web/hosting) oder [Kostenloses Hosting 100M](/links/web/domains-free-hosting), oder als eigenständige Lösung bestellbar.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!primary]
>
> Wenn Ihre E-Mail-Adresse in [**Exchange**](/links/web/emails-hosted-exchange) oder [**Email Pro**](/links/web/email-pro) eingerichtet ist oder der Bereich für Auto-Antworten `Verwaltung der Auto-Antworten`{.action} in Ihrem Kundencenter fehlt, können Sie automatische Antworten stattdessen über Ihr OWA-Webmail erstellen, indem Sie die Anleitung zum [Einrichten einer automatischen Antwort in OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/owa_automatic_replies) befolgen.
> 

### Automatische Antwort erstellen

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein. Wechseln Sie zum Bereich `Web Cloud`{.action} und wählen Sie dann Ihre Domain unter `E-Mails`{.action} aus. Klicken Sie dann im Tab `E-Mails`{.action} auf den Button `Verwaltung der Auto-Antworten`{.action}.

Sie werden zum Fenster `Verwaltung der Auto-Antworten` weitergeleitet, in dem alle für Ihr E-Mail-Angebot verfügbaren automatischen Antworten angezeigt werden.

Klicken Sie auf `Eine Auto-Antwort hinzufügen`{.action}.

![Hosting](images/email_responder01.png){.thumbnail}

Das Fenster "Eine Auto-Antwort hinzufügen" wird angezeigt. Füllen Sie das Formular gemäß den folgenden Angaben aus:

- `Art der Auto-Antwort`:

**An eine Mailbox gebunden**: Zu verwenden, wenn es sich um einen bestehenden E-Mail-Account Ihres E-Mail-Dienstes handelt.</br>
**Frei**: Für eine Alias-Adresse zu verwenden. Ein Alias ist nicht mit einem bestehenden Account verknüpft.

- `Mailbox` oder `Name der Auto-Antwort`: Wählen Sie den vom Responder betroffenen E-Mail-Account oder geben Sie die Alias-Adresse ein.
- `Dauer der automatischen Antwort`:
    - **Temporär**: Legen Sie ein Start- und Enddatum für den Responder fest, z.B. wenn Sie eine Abwesenheit planen.
    - **Permanent**: Die automatischen Antworten bleiben aktiv, bis Sie den Responder löschen oder ändern.
- `Eine Kopie versenden` oder `Die Nachrichten auf dem Server belassen`: Wählen Sie hier, ob während Ihrer Abwesenheit empfangene E-Mails gelöscht oder aufbewahrt werden sollen.

> [!warning]
>
> Wenn Sie diese Option deaktivieren, werden während Ihrer Abwesenheit empfangene Nachrichten automatisch gelöscht.

- `Adresse in Kopie` (nur "Frei"-Modus): Wenn die Empfangsadresse ein Alias ist, müssen Sie den E-Mail-Account auswählen, in dem eingehende Nachrichten gespeichert werden.
- `Nachricht`: Dies ist der Antwort-Text für eingehende Mails, solange der Responder aktiv ist.

Wenn alle Pflichtfelder ausgefüllt sind, klicken Sie auf `Bestätigen`{.action}, um den Responder zu erstellen.

> [!success]
>
> Wenn Sie die Verwaltung einer automatischen Antwort für einen E-Mail-Account delegieren möchten, lesen Sie unsere Anleitung ["Die Verwaltung Ihrer E-Mail-Accounts einer anderen Person übertragen"](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/feature_delegation)

### Automatische Antwort bearbeiten oder löschen

Nachdem Ihre automatische Antwort erstellt wurde, wird sie in der Tabelle im Bereich `Verwaltung der Auto-Antworten`{.action} Ihres E-Mail-Dienstes angezeigt. Sie können einen Responder löschen oder ändern, indem Sie auf `...`{.action} rechts davon klicken.

![Hosting](images/email_responder02.png){.thumbnail}

## Weiterführende Informationen

[E-Mail FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-emails)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
