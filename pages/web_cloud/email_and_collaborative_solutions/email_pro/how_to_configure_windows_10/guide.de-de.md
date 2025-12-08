---
title: "Email Pro - Konfigurieren Ihres Email Pro Accounts im neuen Outlook für Windows"
excerpt: "Erfahren Sie, wie Sie Ihre Email Pro Adresse im neuen Outlook für Windows konfigurieren"
updated: 2025-09-02
---

<style>
details>summary {
    color:rgb(255,165,0) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
.w-600 {
  max-width:600px !important;
}
</style>

## Ziel
 
Die E-Mail-Accounts des [Email Pro](/links/web/email-pro) Angebots können in einem kompatiblen E-Mail-Client konfiguriert werden. Dies ermöglicht es Ihnen, Nachrichten von der Anwendung Ihrer Wahl zu senden und zu empfangen.

Das **neue Outlook** ersetzt die **Mail**-Anwendung in Windows seit dem 1. Januar 2025. Für weitere Informationen zu diesem Thema besuchen Sie die offizielle Microsoft-Seite:  
[Outlook for Windows: The Future of Mail, Calendar, and People on Windows 11](https://support.microsoft.com/en-us/office/outlook-for-windows-the-future-of-mail-calendar-and-people-on-windows-11-715fc27c-e0f4-4652-9174-47faa751b199)

**Diese Anleitung erklärt, wie Sie Ihren Email Pro Account im neuen Outlook für Windows konfigurieren.**

## Voraussetzungen

- Sie haben einen [Email Pro](/links/web/email-pro) E-Mail-Account.
- Sie verwenden das neue [Outlook](https://support.microsoft.com/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627) für Windows.
- Sie haben Zugangsdaten für den zu konfigurierenden E-Mail-Account.

> [!warning]
>
> Diese Dokumentation gilt ausschließlich für das **Neue Outlook** und nicht für [Outlook Classic](https://support.microsoft.com/en-us/office/install-or-reinstall-classic-outlook-on-a-windows-pc-5c94902b-31a5-4274-abb0-b07f4661edf5), das in der Microsoft 365 Suite auf Ihrem Computer installiert ist.

/// details | Informationen zur Verwaltung und Konfiguration von OVHcloud Diensten

OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.

Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Wir empfehlen jedoch, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten, wenn Sie auf Schwierigkeiten stoßen.

///

## In der praktischen Anwendung

### E-Mail-Account hinzufügen <a name="add-account"></a>

> [!warning]
>
> In unserem Beispiel verwenden wir den Servernamen: `pro?.mail.ovh.net`. Sie müssen das `?` durch die Zahl ersetzen, die Ihrem Email Pro Server entspricht.
> 
> Diese Zahl finden Sie in Ihrem [OVHcloud Kundencenter](/links/manager), im Abschnitt `Web Cloud`{.action}, dann `Email Pro`{.action}. Der Servername ist im Bereich **Verbindung** des Tabs `Allgemeine Informationen`{.action} sichtbar.

> [!tabs]
> **Schritt 1**
>> - Öffnen Sie Outlook. Klicken Sie in der linken Spalte auf `Konto hinzufügen`{.action}, um die Konfiguration zu starten.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-400}
>>
> **Schritt 2**
>> - Geben Sie Ihre E-Mail-Adresse ein und klicken Sie auf `Weiter`{.action}.
>> - Geben Sie Ihr Passwort ein und klicken Sie auf den Button `Mehr anzeigen`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-400}
>>
> **Schritt 3**
>> - Geben Sie folgende Parameter ein:
>>    - **IMAP Empfangsserver**: pro?.mail.ovh.net
>>    - **Port**: 993
>>    - **Sicherer Verbindungstyp**: SSL/TLS
>>    - **SMTP Benutzername**: Die E-Mail-Adresse, die Sie hinzufügen.
>>    - **SMTP Ausgangsserver**: pro?.mail.ovh.net
>>    - **Port**: 587
>>    - **Sicherer Verbindungstyp**: STARTTLS
>>    - **Passwort**: Geben Sie nichts ein; das zuvor eingegebene Passwort wird verwendet.
>> - Klicken Sie auf `Weiter`{.action}, um die Konfiguration abzuschließen.
>>
>> ![outlook](images/configuration-newoutlook-windows-emp-03.png){.thumbnail .w-400}

### E-Mail-Adresse verwenden <a name="use-account"></a>

Sobald die E-Mail-Adresse konfiguriert ist, können Sie damit beginnen, sie zu nutzen! Sie können nun Nachrichten senden und empfangen.

OVHcloud stellt außerdem eine Webanwendung bereit, mit der Sie Ihren E-Mail-Account über Ihren Webbrowser unter [Webmail](/links/web/email) nutzen können. Melden Sie sich mit den Zugangsdaten Ihres E-Mail-Accounts an.

### Vorhandene Einstellungen ändern <a name="modify-settings"></a>

Die Outlook Anwendung erlaubt nicht, die Servereinstellungen für Ihren E-Mail-Account zu ändern.

Wenn Ihr E-Mail-Account bereits konfiguriert ist und Sie ihn erneut konfigurieren möchten, müssen Sie ihn zuerst löschen und dann neu erstellen:

- Klicken Sie auf das Einstellungen-Symbol (&#9965;) am unteren Rand der linken Spalte.
- Im Abschnitt "Ihre Konten" klicken Sie auf `Verwalten`{.action} rechts neben dem relevanten E-Mail-Account.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-400}

- Scrollen Sie nach unten.
- Klicken Sie auf `Löschen`{.action}, um den Löschvorgang zu starten.
- Entscheiden Sie, ob Sie es nur von diesem Gerät oder von allen Geräten, die Outlook nutzen, löschen möchten.

![outlook](images/configuration-newoutlook-windows-emp-05.png){.thumbnail .w-400}

> [!success]
>
> Sobald Ihr E-Mail-Account gelöscht ist, folgen Sie den Anweisungen im Abschnitt "[Konto hinzufügen](#add-account)" dieser Dokumentation.

### Allgemeine Einstellungen zum Senden und Empfangen <a name="settings-account"></a>

#### IMAP und POP Empfangseinstellungen <a name="imap-pop"></a>

Für den Empfang von E-Mails empfehlen wir, bei der Auswahl des Kontotyps **IMAP** zu wählen. Sie können jedoch auch **POP** auswählen.

Wählen Sie den Tab entsprechend Ihrer Konfiguration aus:

> [!tabs]
> **IMAP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **komplette** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort für den E-Mail-Account ein.
>> - **Empfangsserver**: pro?.mail.ovh.net (ersetzen Sie "?" durch Ihre Servernummer).
>> - **Port**: 993.
>> - **Sicherheitstyp**: SSL/TLS.
>>
> **POP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **komplette** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort für den E-Mail-Account ein.
>> - **Empfangsserver**: pro?.mail.ovh.net (ersetzen Sie "?" durch Ihre Servernummer).
>> - **Port**: 995.
>> - **Sicherheitstyp**: SSL/TLS.

#### SMTP Sendeeinstellungen <a name="smtp"></a>

Für das Senden von E-Mails finden Sie unten die **SMTP**-Einstellungen:

**SMTP-Konfiguration**

- **Benutzername**: Geben Sie die **komplette** E-Mail-Adresse ein.
- **Passwort**: Geben Sie das Passwort für den E-Mail-Account ein.
- **Ausgangsserver**: pro?.mail.ovh.net (ersetzen Sie "?" durch Ihre Servernummer).
- **Port**: 587.
- **Sicherheitstyp**: STARTTLS.

<a name="go-further"></a>

## Weiterführende Informationen

> [!primary]
>
> Weitere Informationen zur Konfiguration von Accounts im neuen Outlook Client für Windows finden Sie im [Hilfezentrum von Microsoft](https://support.microsoft.com/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Erste Schritte mit der Email Pro Lösung](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
