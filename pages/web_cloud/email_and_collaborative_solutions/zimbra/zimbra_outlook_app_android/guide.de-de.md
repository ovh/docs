---
title: "Zimbra Pro - Konfiguration Ihres E-Mail-Accounts mit ActiveSync auf Outlook für Android"
excerpt: "Erfahren Sie, wie Sie Ihre Zimbra Pro E-Mail-Adresse über das ActiveSync-Protokoll auf der mobilen Outlook-App für Android konfigurieren"
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

Zimbra Pro Accounts können auf einem Android-Mobiltelefon mithilfe des ActiveSync-Protokolls konfiguriert werden. So können Sie alle kollaborativen Funktionen Ihrer E-Mail-Adresse in einem Schritt konfigurieren. Die Microsoft Outlook-App für Android ist kostenlos im Google Play Store verfügbar.

**Diese Anleitung erklärt, wie Sie Ihre Zimbra Pro E-Mail-Adresse über das ActiveSync-Protokoll auf der mobilen Outlook-App für Android konfigurieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung genereller Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Partner](/links/partner) oder den Herausgeber des Dienstes zu kontaktieren, wenn Sie bei der Administration Ihrer Dienste Hilfe benötigen. Weitere Informationen finden Sie am „[Ende dieser Anleitung](#go-further)“.
>

## Voraussetzungen

- Sie haben einen E-Mail-Account auf der OVHcloud [Zimbra Pro E-Mail-Lösung](/links/web/emails-zimbra) abonniert.
- Sie haben die [Outlook-App](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=de) auf Ihrem mobilen Android-Gerät.
- Sie haben die Login-Daten des E-Mail-Accounts, den Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung wurde für Geräte mit Android Version 14 erstellt.

## In der praktischen Anwendung

### Konto hinzufügen<a name="add-account"></a>

- **Beim ersten Start der Outlook-Anwendung** wird ein Konfigurationsassistent angezeigt:
    - Tippen Sie auf `Account hinzufügen`{.action}.

  ![Outlook-Android](images/outlook-app-android-add01.png){.thumbnail .h-500}

- **Wenn bereits ein Account für die Outlook-App eingerichtet ist**:
    - Tippen Sie auf den Umschlag (`✉`{.action}) in der oberen linken Ecke des Bildschirms.
    - Drücken Sie dann den Button `+`{.action} in der vertikalen Leiste links.
    - Tippen Sie auf `Account hinzufügen`{.action}.

  ![Outlook-Android](images/outlook-app-android-add02.png){.thumbnail .h-500}

Folgen Sie den Installationsschritten, indem Sie auf die Tabs klicken:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie Ihre E-Mail-Adresse ein und drücken Sie `Weiter`{.action}.
>>
>> ![Outlook-Android](images/outlook-app-android-add-step01.png){.thumbnail .h-500}
>>
> **Schritt 2**
>>
>> ![Outlook Android](images/zimbra-activesync-outlook-android03.png){.thumbnail .h-500}
>>
>> - Wählen Sie **Exchange** aus der Liste der Kontotypen aus.
>> - **Oder** wenn Sie in einem Fenster zur Auswahl des **IMAP** oder **POP3**-Protokolls aufgefordert werden, drücken Sie die eine oder andere Taste. Tippen Sie im nächsten Fenster auf den Button `?`{.action} in der rechten oberen Ecke des Bildschirms und wählen Sie `Account Provider wechseln`{.action}. Wählen Sie dann `Exchange` aus.
>>
>> ![Outlook-Android](images/outlook-app-android-add-step021.png){.thumbnail .h-500}
>>
> **Schritt 3**
>>
>> Aktivieren Sie im folgenden Fenster `Erweiterte Einstellungen`{.action} und geben Sie die folgenden Informationen ein:
>>
>> - **E-Mail-Adresse**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>> - **Description**: Geben Sie einen Namen ein, mit dem dieses Konto unter Ihren anderen in Outlook registrierten E-Mail-Konten identifiziert werden kann.
>> - **Server**: Geben Sie „zimbra1.mail.ovh.net“ ein.
>> - **Domain**: Lassen Sie dieses Feld leer.
>> - **Benutzername**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>>
>> Zum Abschließen der Konfiguration drücken Sie „&#10003;“.
>>
>> ![Outlook-Android](images/outlook-app-android-add-step03.png){.thumbnail .h-500}
>>

### E-Mail-Adresse verwenden

Sobald die E-Mail-Adresse eingerichtet ist, können Sie sie verwenden! Sie können ab sofort Nachrichten senden und empfangen sowie Ihre Kalender und Aufgaben verwalten.

OVHcloud bietet Ihnen außerdem eine Webanwendung, mit der Sie über einen Webbrowser auf Ihren E-Mail-Account zugreifen können. Diese ist über[Webmail](/links/web/email) verfügbar. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden. Wenn Sie Fragen zur Verwendung haben, lesen Sie unsere Anleitung „[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)“.

### Wie kann ich vorhandene Einstellungen ändern? <a name="modify-settings"></a>

Die Outlook-Anwendung erlaubt es nicht, die Servereinstellungen Ihres E-Mail-Kontos zu ändern.

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie seine Einstellungen ändern möchten, müssen Sie ihn löschen und neu erstellen:

1. Tippen Sie auf den Umschlag (`✉`{.action}) in der oberen linken Ecke des Bildschirms.
2. Tippen Sie unten in der linken Spalte auf das Einstellungssymbol (`⛭`{.action}).
3. Tippen Sie im Bereich „Allgemein“ auf `Accounts`, um alle in der App konfigurierten E-Mail-Adressen anzuzeigen.

  ![Outlook-Android](images/outlook-app-android-delete-account-01.png){.thumbnail .h-500}

4. Wählen Sie den betreffenden E-Mail-Account aus.
5. Drücken Sie `Account löschen`{.action}.
6. Drücken Sie `Löschen`{.action}, wenn die Frage „Möchten Sie den Account löschen?“ angezeigt wird.

  ![Outlook-Android](images/outlook-app-android-delete-account-02.png){.thumbnail .h-500}

> [!success]
>
> Nachdem Sie Ihren E-Mail-Account gelöscht haben, folgen Sie den Installationsschritten im Abschnitt „[Account hinzufügen](#add-account)“ in dieser Anleitung.

## Weitere Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Konfigurieren einer E-Mail-Adresse in der Outlook-App auf Android finden Sie im [Microsoft Help Center](https://support.microsoft.com/de-de/office/einrichten-von-e-mail-in-der-outlook-f%C3%BCr-android-app-886db551-8dfa-4fd5-b835-f8e532091872).


Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
