---
title: "E-Mail Pro - Konfiguration Ihrer E-Mail-Adressen in Outlook für Android"
excerpt: "Erfahren Sie hier, wie Sie Ihren E-Mail Pro Account auf Android mit der Microsoft Outlook App einrichten"
updated: 2025-08-18
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Ziel

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihre E-Mail-Adresse von dem Gerät Ihrer Wahl aus verwenden. Die Microsoft Outlook-App für Android ist kostenlos im Google Play Store verfügbar.

**Diese Anleitung erklärt, wie Sie einen E-Mail Pro Account auf Android mit der Microsoft Outlook App einrichten.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber des Dienstes zu kontaktieren. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.

## Voraussetzungen

- Sie haben einen [E-Mail Pro](/links/web/email-pro) Dienst in Ihrem Kunden-Account.
- Outlook-App auf Ihrem mobilen Gerät [Android](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=de).
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

## In der praktischen Anwendung

### Konto hinzufügen <a name="add-account"></a>

> [!warning]
>
> In unseren Beispielen verwenden wir den Servernamen: pro?.mail.ovh.net. Ersetzen Sie “?“ durch die Zahl des Servers Ihres E-Mail Pro Dienstes.
>
> Diese Zahl finden Sie in Ihrem [OVHcloud Kundencenter](/links/manager) in der Rubrik `Web Cloud`{.action} und `E-Mail Pro`{.action}. Der Servername wird im Feld **Verbindung** im Tab `Allgemeine Informationen`{.action} angezeigt.

- **Wenn die Anwendung zum ersten Mal gestartet wird**: Ein Konfigurationsassistent wird angezeigt. Tippen Sie auf `Account hinzufügen`{.action}.

![Outlook-Android-E-Mail Pro](images/outlook-app-android-add01.png){.thumbnail .w-400 .h-600}

- **Wenn bereits ein Account eingerichtet wurde**:
    - Tippen Sie auf den Umschlag „&#9993;“ oben links auf Ihrem Bildschirm.
    - Drücken Sie dann den Button `+`{.action} in der vertikalen Leiste links.
    - Tippen Sie auf `Account hinzufügen`{.action}.

![Outlook-Android-E-Mail Pro](images/outlook-app-android-add02.png){.thumbnail .w-400 .h-600}

Folgen Sie den Installationsschritten, indem Sie unten auf die Registerkarten klicken:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie Ihre E-Mail-Adresse ein und drücken Sie `Weiter`{.action}.
>>
>> ![outlook android email pro](images/outlook-app-android-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 2**
>>
>> Wählen Sie das Empfangsprotokoll aus, **IMAP** (empfohlen) oder **POP3**.
>>
>> ![outlook android email pro](images/outlook-app-android-add-step02.png){.thumbnail .w-400 .h-600}
>>
>> > [!warning]
>> >
>> > Wenn das Fenster zur Protokollauswahl nicht angezeigt wird, drücken Sie `?` in der rechten oberen Ecke des Bildschirms und wählen Sie `Kontoanbieter wechseln`{.action}. Wählen Sie dann `IMAP` (empfohlen) oder `POP3`.<br>
>> > ![outlook android email pro](images/outlook-app-android-add-step021.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 3 - IMAP**
>>
>> Aktivieren Sie im folgenden Fenster `Erweiterte Einstellungen`{.action} und geben Sie die folgenden Informationen ein:
>>
>> - **E-Mail-Adresse**
>> - **Anzeigename**: Geben Sie Ihre vollständige E-Mail-Adresse ein
>> - **Beschreibung**
>> - **Eingehender E-Mail-Server IMAP**:<br>- **IMAP-Hostname**: Geben Sie pro?.mail.ovh.net ein (ersetzen Sie “?“ durch die Nummer Ihres Servers).<br>- **Port**: 993<br>- **Sicherheitstyp**: SSL/TLS<br>- **IMAP-Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **IMAP-Passwort**: das Passwort Ihrer E-Mail-Adresse
>> - **SMTP Server für ausgehende E-Mails**:<br>- **SMTP-Hostname**: Geben Sie pro?.mail.ovh.net ein (ersetzen Sie “?“ durch die Nummer Ihres Servers).<br>- **Port**: 587<br>- **Sicherheitstyp**: STARTTLS<br>- **SMTP-Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **SMTP-Passwort**: das Passwort Ihrer E-Mail-Adresse
>>
>> Klicken Sie auf „&#10003;“, um die Konfiguration abzuschließen.
>>
>> ![outlook android email pro](images/outlook-app-android-add-step03-imap-emailpro.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 3 - POP3**
>>
>> Aktivieren Sie im folgenden Fenster `Erweiterte Einstellungen`{.action} und geben Sie die folgenden Informationen ein:
>>
>> - **E-Mail-Adresse**
>> - **Anzeigename**: Geben Sie Ihre vollständige E-Mail-Adresse ein
>> - **Beschreibung**
>> - **Posteingangsserver POP3**:<br>- **POP3-Hostname**: Geben Sie pro?.mail.ovh.net ein (ersetzen Sie “?“ durch die Nummer Ihres Servers).<br>- **Port**: 995<br>- **Sicherheitstyp**: SSL/TLS<br>- **POP3-Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **POP3-Passwort**: das Passwort Ihrer E-Mail-Adresse
>> - **SMTP Server für ausgehende E-Mails**:<br>- **SMTP-Hostname**: Geben Sie pro?.mail.ovh.net ein (ersetzen Sie “?“ durch die Nummer Ihres Servers).<br>- **Port**: 587<br>- **Sicherheitstyp**: STARTTLS<br>- **SMTP-Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **SMTP-Passwort**: das Passwort Ihrer E-Mail-Adresse
>>
>> Klicken Sie auf „&#10003;“, um die Konfiguration abzuschließen.
>>
>>![Outlook-Android-E-Mail Pro](images/outlook-app-android-add-step03-pop-emailpro.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Wenn Sie nach dem Befolgen der obigen Konfigurationsschritte einen Fehler beim Senden oder Empfangen feststellen, lesen Sie den Abschnitt „[Vorhandene Einstellungen ändern](#modify-settings)“.

### E-Mail-Adresse verwenden

Nach der Konfiguration der E-Mail-Adresse können Sie diese verwenden! Sie können ab sofort Nachrichten senden und empfangen.

OVHcloud bietet auch eine Web-App, mit der Sie über einen Webbrowser auf Ihre E-Mail-Adresse zugreifen können. Sie können über folgenden Link darauf zugreifen: [Webmail](/links/web/email). Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden. Wenn Sie Fragen zur Verwendung haben, lesen Sie unsere Anleitung [Konto über das OWA-Interface einsehen](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Vorhandene Einstellungen ändern <a name="modify-settings"></a>

Die Outlook-Anwendung erlaubt es nicht, die Servereinstellungen Ihres E-Mail-Kontos zu ändern.

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie ihn erneut einrichten möchten, müssen Sie ihn löschen und neu erstellen:

1. Tippen Sie auf den Umschlag „&#9993;“ oben links auf Ihrem Bildschirm.
2. Tippen Sie unten in der linken Spalte auf das Einstellungssymbol „&#9965;“.
3. Tippen Sie im Bereich „Allgemein“ auf `Accounts`, um alle in der App konfigurierten E-Mail-Adressen anzuzeigen.

![outlook android email pro](images/outlook-app-android-delete-account-01.png){.thumbnail .w-400 .h-600}

- Wählen Sie den betreffenden E-Mail-Account aus.
- Drücken Sie `Account löschen`{.action}.
- Tippen Sie auf `Löschen`{.action} auf die Frage „Möchten Sie den Account löschen?“.

![outlook android email pro](images/outlook-app-android-delete-account-02.png){.thumbnail .w-400 .h-600}

> [!success]
>
> Wenn Sie Ihren E-Mail-Account gelöscht haben, folgen Sie den Anweisungen im Abschnitt „[Account hinzufügen](#add-account)“ in dieser Anleitung.

### POP-, IMAP- und SMTP-Einstellungen zurückrufen <a name="popimap-settings"></a>

#### IMAP- und POP-Empfangseinstellungen

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können jedoch **POP** auswählen.

Klicken Sie auf die Registerkarte für Ihr Empfangsprotokoll:

> [!tabs]
> **IMAP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die E-Mail-Adresse ein **vollständig**
>> - **Passwort**: Geben Sie das Passwort der E-Mail-Adresse ein
>> - **Server (eingehend)**: pro?.mail.ovh.net
>> - **Port**: 993
>> - **Sicherheitstyp**: SSL/TLS
>>
> **POP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die E-Mail-Adresse ein **vollständig**
>> - **Passwort**: Geben Sie das Passwort der E-Mail-Adresse ein
>> - **Server (eingehend)**: pro?.mail.ovh.net
>> - **Port**: 995
>> - **Sicherheitstyp**: SSL/TLS

#### SMTP-Sendeeinstellungen

Wenn Sie zum Senden von E-Mails die **SMTP**-Einstellungen in den Kontoeinstellungen manuell eingeben müssen, verwenden Sie die folgenden Einstellungen:

**SMTP-Konfiguration**

- **Benutzername**: Geben Sie die E-Mail-Adresse ein **vollständig**
- **Passwort**: Geben Sie das Passwort der E-Mail-Adresse ein
- **Server (eingehend)**: pro?.mail.ovh.net
- **Port**: 587
- **Sicherheitstyp**: STARTTLS

> [!primary]
>
> **Konfiguration ändern**
>
> Wenn Ihre E-Mail-Adresse mit **IMAP** konfiguriert ist und Sie diese Konfiguration in **POP** ändern möchten, müssen Sie den Account löschen und ihn anschließend mit **POP** neu erstellen. Lesen Sie das Kapitel „[Vorhandene Einstellungen ändern](#modify-settings)“ in dieser Anleitung.

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Einrichten einer E-Mail-Adresse über die Outlook-App auf Android finden Sie im [Microsoft Help Center](https://support.microsoft.com/de-de/office/einrichten-von-e-mail-in-der-outlook-f%C3%BCr-android-app-886db551-8dfa-4fd5-b835-f8e532091872).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
