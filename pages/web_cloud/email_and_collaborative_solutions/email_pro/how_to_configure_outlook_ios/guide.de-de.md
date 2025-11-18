---
title: "E-Mail Pro - Konfiguration eines E-Mail-Accounts in Outlook für iOS"
excerpt: "Erfahren Sie hier, wie Sie einen E-Mail Pro Account in der Outlook App für iOS einrichten"
updated: 2025-04-28
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

E-Mail Pro Accounts können auf verschiedenen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden. Die Microsoft Outlook App für iOS ist kostenlos im Apple App Store verfügbar.

**Diese Anleitung erklärt, wie Sie einen E-Mail Pro Account in der Outlook App für iOS konfigurieren**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Hinweise finden Sie im Teil [Weiterführende Informationen](#gofurther) dieser Anleitung.

## Voraussetzungen

- Sie verfügen über einen [E-Mail Pro Account](/links/web/email-pro).
- Microsoft Outlook ist auf Ihrem [iOS Gerät](https://apps.apple.com/app/microsoft-outlook/id951937596) installiert.
- Sie verfügen über die Login-Daten für den E-Mail-Account, den Sie konfigurieren möchten.

## In der praktischen Anwendung

### Account hinzufügen <a name="add-account"></a>

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro?.mail.ovh.net. Das "?" muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](/links/manager), wenn Sie den betreffenden `E-Mail Pro`{.action} Dienst auswählen. Der Servername wird im Bereich **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

- **Wenn die Anwendung zum ersten Mal gestartet wird**: Ein Konfigurationsassistent wird angezeigt. Tippen Sie auf `Account hinzufügen`{.action}.

![Outlook iOS](images/outlook-app-ios-add01.png){.thumbnail .w-400 .h-600}

- **Wenn bereits ein Account eingerichtet wurde**:
    1. Tippen Sie auf den Kreis mit den Initialen des E-Mail-Accounts oder das Home Icon "&#8962;" oben links auf dem Bildschirm.
    2. Tippen Sie das Zahnrad "&#9881;" unten links auf dem Bildschirm.
    3. Tippen Sie im Menü **Einstellungen** auf `Konten`{.action}.
    4. Tippen Sie auf `Konto hinzufügen`{.action}.
    5. Tippen Sie `E-Mail-Konto`{.action}.

![Outlook iOS](images/outlook-app-ios-add02.png){.thumbnail .w-400 .h-600}

Folgen Sie den Installationsschritten, indem Sie auf die Tabs klicken:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie Ihre E-Mail-Adresse ein und tippen Sie auf `Account hinzufügen`{.action}.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step01.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 2**
>>
>> Sie haben zwei Möglichkeiten:
>
>> - Wenn am oberen Seitenrand "**IMAP**" steht, fahren Sie mit Schritt 3 fort.
>> - Wenn im Fenster für die Kontoeinstellungen oben "**Exchange**" angezeigt wird, Tippen Sie die Schaltfläche `?` in der rechten oberen Ecke des Bildschirms **(1)** und wählen Sie `Kontoanbieter wechseln`{.action} **(2)**. Wählen Sie nun `IMAP`**(3)** aus und fahren Sie mit Schritt 3 fort.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step02.png){.thumbnail .w-400 .h-600}
>>
> **Schritt 3**
>>
>> Aktivieren Sie im folgenden Fenster `Erweiterte Einstellungen`{.action} und geben Sie die folgenden Informationen ein:
>>
>> - **E-Mail-Adresse**
>> - **Anzeigename**: Geben Sie Ihre vollständige E-Mail-Adresse ein.
>> - **Beschreibung**
>> - **IMAP-Posteingangsserver**:<br>- **IMAP-Hostname**: Geben Sie pro?.mail.ovh.net ein (ersetzen Sie "?" mit der Nummer Ihres Servers).<br>- **IMAP-Port**: 993<br>- **IMAP-Benutzername**: Ihre vollständige E-Mail-Adresse.<br>- **IMAP-Passwort**: Passwort Ihres E-Mail-Accounts.<br>- **Portsicherheit**: SSL
>> - **SMTP-Postausgangsserver**:<br>- **SMTP-Hostname**: Geben Sie pro?.mail.ovh.net ein (ersetzen Sie "?" mit der Nummer Ihres Servers).<br>- **SMTP-Port**: 587<br>- **SMTP-Benutzername**: Ihre vollständige E-Mail-Adresse.<br>- **SMTP-Passwort**: Passwort Ihres E-Mail-Accounts.<br>- **Portsicherheit**: STARTTLS
>>
>> Um die Konfiguration abzuschließen, drücken Sie `Verbinden`{.action}.
>>
>> ![Outlook iOS](images/outlook-app-ios-add-step03-imap-emailpro.png){.thumbnail .w-400 .h-600}
>>

> [!warning]
>
> Wenn Sie nach dem Befolgen der obigen Konfigurationsschritte einen Fehler beim Senden oder Empfangen feststellen, lesen Sie den Abschnitt „[Vorhandene Einstellungen ändern](#modify-settings)“.

### E-Mail-Account verwenden

Nach der Konfiguration des E-Mail-Accounts können Sie diese verwenden! Sie können ab sofort Nachrichten senden und empfangen.

OVHcloud bietet Ihnen außerdem eine Webanwendung, mit der Sie über einen Webbrowser auf Ihren E-Mail-Account zugreifen können. Diese ist über [Webmail](/links/web/email) verfügbar. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden. Bei Fragen zur Verwendung lesen Sie unsere [Anleitung zur Verwendung von OWA Webmail](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/email_owa).

### Vorhandene Einstellungen ändern <a name="modify-settings"></a>

1. Tippen Sie auf den Kreis mit den Initialen des E-Mail-Accounts oder das Home Icon "&#8962;" oben links auf dem Bildschirm.
2. Tippen Sie das Zahnrad "&#9881;" unten links auf dem Bildschirm.
3. Tippen Sie im Menü **Einstellungen** auf `Konten`{.action}.
4. Wählen Sie das entsprechende Konto aus.
5. Tippen Sie auf `Anmeldeinformationen bearbeiten`{.action}.

![Outlook iOS](images/outlook-app-ios-modify-account-01.png){.thumbnail .w-400 .h-600}

Die Einstellungen finden Sie in **Schritt 3** unter [Account hinzufügen](#add-account).

### E-Mail-Account löschen <a name="delete"></a>

1. Tippen Sie auf den Kreis mit den Initialen des E-Mail-Accounts oder das Home Icon "&#8962;" oben links auf dem Bildschirm.
2. Tippen Sie das Zahnrad "&#9881;" unten links auf dem Bildschirm.
3. Tippen Sie im Menü **Einstellungen** auf `Konten`{.action}.
4. Wählen Sie das entsprechende Konto aus.
5. Tippen Sie `Account löschen`{.action}.

![Outlook iOS](images/outlook-app-ios-modify-delete-01.png){.thumbnail .w-400 .h-600}

### POP-, IMAP- und SMTP-Einstellungen  <a name="popimap-settings"></a>

#### IMAP und POP - Empfang

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können aber auch **POP** auswählen..

Folgen Sie den Installationsschritten, indem Sie auf die Tabs klicken:

> [!tabs]
> **IMAP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **Server (eingehend)**: pro?.mail.ovh.net
>> - **Port**: 993
>> - **Sicherheitstyp**: SSL/TLS
>>
> **POP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **Server (eingehend)**: pro?.mail.ovh.net
>> - **Port**: 995
>> - **Sicherheitstyp**: SSL/TLS

#### SMTP - Senden

Wenn Sie zum Senden von E-Mails die **SMTP**-Einstellungen in den Kontoeinstellungen manuell eingeben müssen, verwenden Sie die folgenden Einstellungen:

**SMTP-Konfiguration**

- **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
- **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
- **Server (eingehend)**: pro?.mail.ovh.net
- **Port**: 587
- **Sicherheitstyp**: SSL/TLS

## Weiterführende Informationen <a name="gofurther"></a>

> [!primary]
>
> Weitere Informationen zum Einrichten einer E-Mail-Adresse über die Outlook-App auf iOS finden Sie im [Microsoft Help Center](https://support.microsoft.com/office/set-up-the-outlook-app-for-ios-b2de2161-cc1d-49ef-9ef9-81acd1c8e234).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
