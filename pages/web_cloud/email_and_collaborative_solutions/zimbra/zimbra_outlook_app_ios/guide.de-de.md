---
title: "Zimbra Pro - Konfiguration Ihres E-Mail-Accounts mit ActiveSync auf Outlook für iOS"
excerpt: "Erfahren Sie, wie Sie Ihre Zimbra Pro E-Mail-Adresse über das ActiveSync-Protokoll auf der mobilen Outlook für iOS-App konfigurieren"
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

Zimbra Pro Accounts können auf einem iPhone mithilfe des ActiveSync Protokolls konfiguriert werden. So können Sie alle kollaborativen Funktionen Ihrer E-Mail-Adresse in einem Schritt konfigurieren. Die Microsoft Outlook-App für iOS ist kostenlos im App Store von Apple verfügbar.

**Diese Anleitung erklärt, wie Sie Ihre Zimbra Pro E-Mail-Adresse über das ActiveSync-Protokoll auf der mobilen Outlook für iOS-App konfigurieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung genereller Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Partner](/links/partner) oder den Herausgeber des Dienstes zu kontaktieren, wenn Sie bei der Administration Ihrer Dienste Hilfe benötigen. Weitere Informationen finden Sie am „[Ende dieser Anleitung](#go-further)“.
>

## Voraussetzungen

- Sie haben einen E-Mail-Account auf der OVHcloud [Zimbra Pro E-Mail-Lösung](/links/web/emails-zimbra) abonniert.
- Sie haben die App [Outlook für iOS](https://apps.apple.com/app/microsoft-outlook/id951937596).
- Sie haben die Login-Daten des E-Mail-Accounts, den Sie einrichten möchten.

## In der praktischen Anwendung

### Konto hinzufügen <a name="add-account"></a>

- **Beim ersten Start der Outlook-Anwendung** wird ein Konfigurationsassistent angezeigt:
    - Tippen Sie auf `Account hinzufügen`{.action}.

  ![Outlook iOS](images/outlook-app-ios-add-01.png){.thumbnail .h-500}

- **Wenn bereits ein Account für die Outlook-App eingerichtet ist**:
    1. Tippen Sie auf den Kreis, der die Initialen des angezeigten E-Mail-Accounts enthält, oder auf das Haussymbol (`⌂`{.action}) oben links auf Ihrem Bildschirm.
    2. Drücken Sie das Zahnrad (`⛭`{.action}) unten links auf dem Bildschirm.
    3. Tippen Sie anschließend im Menü **Einstellungen** auf `Konten`{.action}.
    4. Tippen Sie auf `Konto hinzufügen`{.action}.
    5. Drücken Sie `E-Mail-Konto`{.action}.

  ![Outlook iOS](images/outlook-app-ios-add-02.png){.thumbnail .h-500}

Folgen Sie den Installationsschritten, indem Sie auf die Tabs klicken:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie Ihre E-Mail-Adresse ein und tippen Sie auf `Account hinzufügen`{.action}.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step-01.png){.thumbnail .h-500}
>>
> **Schritt 2**
>>
>> Zwei Szenarien sind möglich:
>>
>> - Wenn „**IMAP**“ am oberen Seitenrand angezeigt wird: Tippen Sie auf die Schaltfläche `?` in der oberen rechten Ecke des Bildschirms **(1)** und wählen Sie dann `Kontoanbieter wechseln`{.action} **(2)**. Wählen Sie nun `Exchange` **(3)** aus und fahren Sie mit Schritt 3 fort.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step-02.png){.thumbnail .h-500}
>>
>> - Wenn Sie direkt zur Auswahl des Kontotyps weitergeleitet werden, wählen Sie `Exchange` aus.
>>
> **Schritt 3**
>>
>> Aktivieren Sie im folgenden Fenster `Erweiterte Einstellungen`{.action} und geben Sie die folgenden Informationen ein:
>>
>> - **E-Mail-Adresse**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort Ihrer E-Mail-Adresse ein.
>> - **Description**: Geben Sie einen Namen ein, mit dem dieses Konto unter Ihren anderen in Outlook registrierten E-Mail-Konten identifiziert werden kann.
>> - **Server**: Geben Sie „zimbra1.mail.ovh.net“ ein.
>> - **Domain**: Lassen Sie dieses Feld leer.
>> - **Benutzername**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>>
>> Um die Konfiguration abzuschließen, drücken Sie `Verbinden`{.action}.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step-03.png){.thumbnail .h-500}
>>

> [!warning]
>
> Wenn Sie nach dem Befolgen der oben genannten Konfigurationsschritte einen Fehler beim Senden oder Empfangen feststellen, lesen Sie den Abschnitt „[Vorhandene Einstellungen ändern](#modify-settings)“ in dieser Anleitung.

### E-Mail-Adresse verwenden

Sobald die E-Mail-Adresse eingerichtet ist, können Sie sie verwenden! Sie können ab sofort Nachrichten senden und empfangen sowie Ihre Kalender und Aufgaben verwalten.

OVHcloud bietet Ihnen außerdem eine Webanwendung, mit der Sie über einen Webbrowser auf Ihren E-Mail-Account zugreifen können. Diese ist über[Webmail](/links/web/email) verfügbar. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden. Wenn Sie Fragen zur Verwendung haben, lesen Sie unsere Anleitung „[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)“.

### Wie ändere ich vorhandene Einstellungen? <a name="modify-settings"></a>

1. Tippen Sie oben links auf dem Bildschirm auf den Kreis, der die Initialen des angezeigten E-Mail-Accounts oder das Haussymbol (`⌂`{.action}) enthält.
1. Drücken Sie das Zahnrad (`⛭`{.action}) unten links auf dem Bildschirm.
1. Tippen Sie anschließend im Menü **Einstellungen** auf `Konten`{.action}.
1. Wählen Sie das entsprechende Konto aus.
1. Drücken Sie `Anmeldeinformationen bearbeiten`{.action}.

![Outlook iOS](images/outlook-app-ios-modify-01.png){.thumbnail .h-500}

Die Einstellungen finden Sie in **Schritt 3** im Kapitel „[Account hinzufügen](#add-account)“.

### Wie lösche ich einen E-Mail-Account? <a name="delete-account"></a>

1. Tippen Sie oben links auf dem Bildschirm auf den Kreis, der die Initialen des angezeigten E-Mail-Accounts oder das Haussymbol (`⌂`{.action}) enthält.
1. Drücken Sie das Zahnrad (`⛭`{.action}) unten links auf dem Bildschirm.
1. Tippen Sie anschließend im Menü **Einstellungen** auf `Konten`{.action}.
1. Wählen Sie das entsprechende Konto aus.
1. Drücken Sie `Account löschen`{.action}.

![Outlook iOS](images/outlook-app-ios-delete-01.png){.thumbnail .h-500}


## Weitere Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Konfigurieren einer E-Mail-Adresse über die Outlook-Anwendung auf iOS finden Sie im [Microsoft Help Center](https://support.microsoft.com/de-de/office/configurer-l-application-outlook-pour-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
