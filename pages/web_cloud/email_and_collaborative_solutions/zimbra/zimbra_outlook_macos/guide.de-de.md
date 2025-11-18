---
title: "Zimbra Pro - Konfiguration Ihres E-Mail-Accounts via EWS auf Outlook für Mac"
excerpt: "Erfahren Sie, wie Sie Ihre Zimbra Pro E-Mail-Adresse auf Outlook für macOS über das EWS-Protokoll konfigurieren"
updated: 2025-07-03
---

<style>
.h-500 {
  max-height:500px !important;
}
</style>

## Ziel

> [!primary]
> Diese Anleitung richtet sich an Kunden, die über das E-Mail-Angebot [Zimbra Pro](/links/web/emails-zimbra) verfügen. Diese Dienstleistung wird ab Juli 2025 als Beta verfügbar sein.

Zimbra Pro Accounts können auf einem Mac mit dem EWS Protokoll konfiguriert werden (**E**xchange **W**eb **S**ervices). So können Sie alle kollaborativen Funktionen Ihrer E-Mail-Adresse in einem Schritt konfigurieren. Die App [Outlook auf macOS](https://apps.apple.com/de/app/microsoft-outlook/id985367838?mt=12) ist im Apple App Store verfügbar.

**Diese Anleitung erklärt, wie Sie Ihre Zimbra Pro E-Mail-Adresse auf Outlook für macOS über das EWS-Protokoll konfigurieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung genereller Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Partner](/links/partner) oder den Herausgeber des Dienstes zu kontaktieren, wenn Sie bei der Administration Ihrer Dienste Hilfe benötigen. Weitere Informationen finden Sie am „[Ende dieser Anleitung](#go-further)“.
>

## Voraussetzungen

- Sie haben einen E-Mail-Account auf der OVHcloud [Zimbra Pro E-Mail-Lösung](/links/web/emails-zimbra) abonniert.
- Sie haben die App [Outlook auf macOS](https://apps.apple.com/de/app/microsoft-outlook/id985367838?mt=12).
- Sie haben die Login-Daten des E-Mail-Accounts, den Sie einrichten möchten.

## In der praktischen Anwendung

### Konto <a name="add-account"></a> hinzufügen

- **Beim ersten Start der Outlook-Anwendung**: Ein Konfigurationsassistent erscheint direkt und fordert Sie zur Eingabe der ersten E-Mail-Adresse auf, die Sie hinzufügen möchten.

- **Wenn bereits ein Account für die Outlook-App eingerichtet ist**:
    1. Klicken Sie in der Menüleiste oben auf `Extras`{.action}.
    2. Klicken Sie auf `Konten`{.action}.
    3. Klicken Sie im angezeigten Fenster „Accounts“ unten links auf `+`{.action} und dann auf `Neuer Account`{.action}.

![mail macOS](images/outlook-macos-add-step00.png){.thumbnail .h-500}

Folgen Sie den Installationsschritten, indem Sie auf die Tabs klicken:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie Ihre E-Mail-Adresse unter „E-Mail-Adresse“ ein und klicken Sie auf `Weiter`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step01.png){.thumbnail .h-500}
>>
> **Schritt 2**
>>
>> Zwei Szenarien sind möglich:
>>
>> - **Wenn das Fenster „IMAP/POP“ angezeigt wird** : Klicken Sie auf `Dies ist kein POP/IMAP-Konto`{.action} und wählen Sie `Exchange`{.action} aus dem Fenster „Anbieter auswählen“.
>> - **Wenn Sie direkt auf „Anbieter auswählen“** treffen, wählen Sie `Exchange`{.action}.
>>
>> ![mail macos](images/outlook-macos-add-step02.png){.thumbnail .h-500}
>>
> **Schritt 3**
>>
>> Überprüfen und vervollständigen Sie die folgenden Informationen:
>>
>> - **Methode**: Wählen Sie `Benutzername und Passwort`.
>> - **E-Mail-Adresse**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>> - **DOMAIN\Benutzername oder E-Mail-Adresse**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort Ihrer E-Mail-Adresse ein.
>> - **Server**: Geben Sie „zimbra1.mail.ovh.net“ ein.
>>
>> Um die Konfiguration abzuschließen, tippen Sie auf `Konto hinzufügen`{.action} und wählen Sie die Funktionen aus, die Sie auf Ihrem Mac verwenden möchten.
>>
>> ![mail macos](images/outlook-macos-add-step03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Wenn Sie nach dem Befolgen der oben genannten Konfigurationsschritte einen Fehler beim Senden oder Empfangen feststellen, lesen Sie den Abschnitt „[Vorhandene Einstellungen ändern](#modify-settings)“ in dieser Anleitung.

### E-Mail-Adresse verwenden

Sobald die E-Mail-Adresse eingerichtet ist, können Sie sie verwenden! Sie können ab sofort Nachrichten senden und empfangen sowie Ihre Kalender und Aufgaben verwalten.

OVHcloud bietet Ihnen außerdem eine Webanwendung, mit der Sie über einen Webbrowser auf Ihren E-Mail-Account zugreifen können. Diese ist über [Webmail](/links/web/email) verfügbar. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden. Wenn Sie Fragen zur Verwendung haben, lesen Sie unsere Anleitung „[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)“.

### Wie kann ich vorhandene Einstellungen ändern? <a name="modify-settings"></a>

Um die Einstellungen eines bereits konfigurierten E-Mail-Accounts zu ändern, befolgen Sie die folgenden Anweisungen:

1. Klicken Sie in der Menüleiste oben auf `Extras`{.action}.
1. Klicken Sie auf `Konten`{.action}.
1. Wählen Sie in der linken Spalte Ihr Konto aus.
1. Klicken Sie auf `Erweitert...`{.action} unten rechts.

![Outlook macos](images/outlook-macos-modify-01.png){.thumbnail .h-500}

Die Einstellungen finden Sie in **Schritt 3** im Kapitel „[Account hinzufügen](#add-account)“.

### Wie lösche ich einen E-Mail-Account? <a name="delete-account"></a>

1. Klicken Sie in der Menüleiste oben auf `Extras`{.action}.
1. Klicken Sie auf `Konten`{.action}.
1. Wählen Sie in der linken Spalte Ihr Konto aus.
1. Klicken Sie unten links auf `-`{.action}

![Outlook macos](images/outlook-macos-delete-01.png){.thumbnail .h-500}

## Weitere Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Einrichten einer E-Mail-Adresse in der Mail App auf macOS finden Sie im [Apple Help Center](https://support.apple.com/de-de/102619).

Für spezielle Dienstleistungen (Referenzierung, Entwicklung usw.) wenden Sie sich bitte an die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Verwendung und Konfiguration Ihrer OVHcloud Lösungen benötigen, empfehlen wir Ihnen unsere verschiedenen [Support-Angebote](/links/support).

Für den Austausch mit unserer [User Community](/links/community).
