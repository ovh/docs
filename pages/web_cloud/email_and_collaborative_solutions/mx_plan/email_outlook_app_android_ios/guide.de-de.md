---
title: "MX Plan - Konfiguration Ihres E-Mail-Accounts in Outlook für Android"
excerpt: "Erfahren Sie hier, wie Sie Ihre MX Plan E-Mail-Adresse auf der mobilen Outlook App für Android einrichten"
updated: 2024-11-26
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

MX Plan Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihre E-Mail-Adresse von dem Gerät Ihrer Wahl aus verwenden. Die Microsoft Outlook App für Android ist kostenlos im Google Play Store verfügbar.

**Diese Anleitung erklärt, wie Sie Ihre MX Plan E-Mail-Adresse mit der Outlook App für Android verwenden.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung genereller Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Partner](https://marketplace.ovhcloud.com/c/support-collaboration) oder den Herausgeber des Dienstes zu kontaktieren, wenn Sie bei der Administration Ihrer Dienste Hilfe benötigen. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über einen MX Plan, als E-Mail-Dienst enthalten in einem [OVHcloud Webhosting-Angebot](/links/web/hosting) oder als eigenständige Lösung.
- Sie haben die Outlook App auf Ihrem [Android-Gerät](https://play.google.com/store/apps/details?id=com.microsoft.office.outlook&hl=de) installiert.
- Sie verfügen über Anmeldeinformationen für den zu konfigurierenden E-Mail-Account.

## In der praktischen Anwendung

### Account hinzufügen <a name="add-account"></a>

- **Wenn die Anwendung zum ersten Mal gestartet wird**: Ein Konfigurationsassistent wird angezeigt. Tippen Sie auf `Account hinzufügen`{.action}.

![Outlook-Android](images/outlook-app-android-add01.png){.thumbnail .w-400 .h-600}

- **Wenn bereits ein Account eingerichtet wurde**:
    - Tippen Sie auf den Umschlag &#9993; oben links auf Ihrem Bildschirm.
    - Drücken Sie dann den Button `+`{.action} in der vertikalen Leiste links.
    - Tippen Sie auf `Account hinzufügen`{.action}.

![Outlook-Android](images/outlook-app-android-add02.png){.thumbnail .w-400 .h-600}

Folgen Sie den Installationsschritten, indem Sie unten auf die Registerkarten klicken:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie Ihre E-Mail-Adresse ein und drücken Sie `Weiter`{.action}.
>>
>> ![Outlook-Android](images/outlook-app-android-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 2**
>>
>> Wählen Sie das Empfangsprotokoll aus, **IMAP** (empfohlen) oder **POP3**.
>>
>> ![Outlook-Android](images/outlook-app-android-add-step02.png){.thumbnail .w-400 .h-600}
>>
>> > [!warning]
>> >
>> > Wenn das Fenster zur Protokollauswahl nicht angezeigt wird, drücken Sie `?` in der rechten oberen Ecke des Bildschirms und wählen Sie `Kontoanbieter wechseln`{.action}. Wählen Sie dann `IMAP` (empfohlen) oder `POP3`.<br>
>> > ![Outlook-Android](images/outlook-app-android-add-step021.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 3 - IMAP**
>>
>> Aktivieren Sie im folgenden Fenster `Erweiterte Einstellungen`{.action} und geben Sie die folgenden Informationen ein:
>>
>> - **E-Mail-Adresse**
>> - **Anzeigename**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>> - **Beschreibung**
>> - **IMAP-Posteingangsserver**:<br>- **IMAP-Hostname**: Geben Sie für **EUROPA** ein: `imap.mail.ovh.net` oder `ssl0.ovh.net`. Geben Sie für **AMERIKA/ASIEN** ein: `imap.mail.ovh.ca`<br>- **Port**: 993<br>- **Sicherheitstyp**: SSL/TLS<br>- **IMAP-Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **IMAP-Passwort**: Passwort Ihres E-Mail-Accounts
>> - **SMTP-Posteingangsserver**:<br>- **SMTP-Hostname**: Geben Sie für **EUROPA** ein: `smtp.mail.ovh.net` oder `ssl0.ovh.net`. Geben Sie für **AMERIKA/ASIEN** ein: `smtp.mail.ovh.ca`<br>- **Port**: 465<br>- **Sicherheitstyp**: SSL/TLS<br>- **SMTP-Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **SMTP-Passwort**: Passwort Ihres E-Mail-Accounts
>>
>> Klicken Sie auf das Symbol &#10003;, um die Konfiguration abzuschließen
>>
>> ![Outlook-Android](images/outlook-app-android-add-step03-imap-eu.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 3 - POP3**
>>
>> Aktivieren Sie im folgenden Fenster `Erweiterte Einstellungen`{.action} und geben Sie die folgenden Informationen ein:
>>
>> - **E-Mail-Adresse**
>> - **Anzeigename**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>> - **Beschreibung**
>> - **Posteingangsserver POP3**:<br>- **POP3-Hostname**: Geben Sie für **EUROPA** ein: `pop.mail.ovh.net` oder `ssl0.ovh.net`. Geben Sie für **AMERIKA/ASIEN** ein: `pop.mail.ovh.ca`<br>- **Port**: 995<br>- **Sicherheitstyp**: SSL/TLS<br>- **POP3-Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **POP3-Passwort**: Passwort Ihres E-Mail-Accounts
>> - **SMTP-Posteingangsserver**:<br>- **SMTP-Hostname**: Geben Sie für **EUROPA** ein: `smtp.mail.ovh.net` oder `ssl0.ovh.net`. Geben Sie für **AMERIKA/ASIEN** ein: `smtp.mail.ovh.ca`<br>- **Port**: 465<br>- **Sicherheitstyp**: SSL/TLS<br>- **SMTP-Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **SMTP-Passwort**: Passwort Ihres E-Mail-Accounts
>>
>> Klicken Sie das Symbol &#10003;, um die Konfiguration abzuschließen
>>
>> ![Outlook-Android](images/outlook-app-android-add-step03-pop-eu.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Wenn Sie nach dem Befolgen der obigen Konfigurationsschritte einen Fehler beim Senden oder Empfangen feststellen, lesen Sie den Abschnitt "[Vorhandene Einstellungen ändern](#modify-settings)".

### E-Mail-Account verwenden

Nach der Konfiguration des E-Mail-Accounts können Sie diese verwenden! Sie können ab sofort Nachrichten senden und empfangen.

OVHcloud bietet auch eine Webanwendung an, mit der Sie über Ihren Webbrowser auf Ihren E-Mail-Account zugreifen können: [Webmail](/links/web/email). Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden. Bei Fragen zu dessen Verwendung können Sie unsere Anleitungen zur [Outlook Web App](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa) oder [RoundCube Webmail](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_roundcube) nutzen.

### Vorhandene Einstellungen ändern <a name="modify-settings"></a>

Die Outlook App erlaubt es nicht, die Servereinstellungen Ihres E-Mail-Accounts zu ändern.

Wenn Ihr E-Mail-Account bereits eingerichtet ist und Sie ihn erneut einrichten möchten, müssen Sie ihn löschen und neu erstellen:

1. Tippen Sie auf den Umschlag &#9993; oben links auf Ihrem Bildschirm.
2. Tippen Sie auf das Symbol &#9965; unten in der linken Spalte.
3. Tippen Sie im Bereich "Allgemein" auf `Accounts`, um alle in der App konfigurierten E-Mail-Accounts anzuzeigen.

![Outlook-Android](images/outlook-app-android-delete-account-01.png){.thumbnail .w-400 .h-600}

- Wählen Sie den betreffenden E-Mail-Account aus.
- Drücken Sie `Account löschen`{.action}.
- Tippen Sie auf `Löschen`{.action} bei "Möchten Sie den Account löschen?".

![Outlook-Android](images/outlook-app-android-delete-account-02.png){.thumbnail .w-400 .h-600}

> [!success]
>
> Wenn Sie Ihren E-Mail-Account entfernt haben, folgen Sie den Anweisungen im Abschnitt "[Account hinzufügen](#add-account)" in dieser Anleitung.

### POP-, IMAP- und SMTP-Einstellungen <a name="popimap-settings"></a>

#### IMAP- und POP-Empfangseinstellungen

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können auch **POP** auswählen.

> [!warning]
>
> Es ist notwendig, die Ihrem Standort entsprechenden Werte zu verwenden (**EUROPA** oder **AMERIKA/ASIEN-PAZIFIK**).

Folgen Sie den Installationsschritten, indem Sie auf die Tabs klicken:

> [!tabs]
> **IMAP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die E-Mail-Adresse **vollständig** ein.
>> - **Passwort**: Geben Sie das Passwort Ihres E-Mail-Accounts ein.
>> - **EUROPA Server (eingehend)**: imap.mail.ovh.net **oder** ssl0.ovh.net
>> - **SERVER AMERIKA/ASIEN-PAZIFIK (eingehend)**: imap.mail.ovh.ca
>> - **Port**: 993
>> - **Sicherheitstyp**: SSL/TLS
>>
> **POP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die E-Mail-Adresse **vollständig** ein.
>> - **Passwort**: Geben Sie das Passwort Ihres E-Mail-Accounts ein.
>> - **EUROPA Server (eingehend)**: pop.mail.ovh.net **oder** ssl0.ovh.net
>> - **SERVER AMERIKA/ASIEN-PAZIFIK (eingehend)**: pop.mail.ovh.ca
>> - **Port**: 995
>> - **Sicherheitstyp**: SSL/TLS

#### SMTP-Sendeeinstellungen

Wenn Sie zum Senden von E-Mails die **SMTP**-Einstellungen in den Kontoeinstellungen manuell eingeben müssen, verwenden Sie die folgenden Einstellungen:

**SMTP-Konfiguration**

- **Benutzername**: Geben Sie die E-Mail-Adresse **vollständig** ein.
- **Passwort**: Geben Sie das Passwort Ihres E-Mail-Accounts ein.
- **EUROPA Server (eingehend)**: pop.mail.ovh.net **oder** ssl0.ovh.net
- **SERVER AMERIKA/ASIEN-PAZIFIK (eingehend)**: pop.mail.ovh.ca
- **Port**: 995
- **Sicherheitstyp**: SSL/TLS

> [!primary]
>
> **Konfiguration ändern**
>
> Wenn Ihr E-Mail-Account mit **IMAP** konfiguriert ist und Sie diese Konfiguration in **POP** ändern möchten, müssen Sie den Account entfernen und ihn anschließend mit **POP** neu erstellen. Siehe "[Vorhandene Einstellungen ändern](#modify-settings)" in dieser Anleitung.

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Konfigurieren eines E-Mail-Accounts über die Outlook-App auf Android finden Sie im [Microsoft Help Center](https://support.microsoft.com/de-de/office/einrichten-von-e-mail-in-der-outlook-f%C3%BCr-android-app-886db551-8dfa-4fd5-b835-f8e5320918722).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.