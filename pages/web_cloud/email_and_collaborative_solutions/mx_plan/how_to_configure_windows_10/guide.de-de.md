---
title: "MX Plan / Zimbra Starter - Konfigurieren eines E-Mail-Accounts im neuen Outlook für Windows"
excerpt: "Erfahren Sie, wie Sie Ihre E-Mail-Adresse im neuen Outlook für Windows konfigurieren"
updated: 2026-01-09
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

Die E-Mail-Adressen der Angebote **MX Plan** und [Zimbra](/links/web/emails-zimbra) Starter können in einer kompatiblen E-Mail-Software konfiguriert werden. Dies ermöglicht das Senden und Empfangen von Nachrichten über die gewünschte Anwendung.

Das **neue Outlook** ersetzt die **Mail**-Anwendung in Windows seit dem 1. Januar 2025. Für weitere Informationen zu diesem Thema besuchen Sie die offizielle Microsoft-Seite: [Outlook für Windows: Die Zukunft von Mail, Kalender und Personen auf Windows 11](https://support.microsoft.com/de-de/office/outlook-for-windows-the-future-of-mail-calendar-and-people-on-windows-11-715fc27c-e0f4-4652-9174-47faa751b199).

**Diese Anleitung erklärt, wie Sie Ihre E-Mail-Adresse des MX Plans in der neuen Outlook-App für Windows konfigurieren.**

## Voraussetzungen

- Sie benötigen eine OVHcloud E-Mail-Lösung, wie:
    - **MX Plan**, angeboten mit unseren [Webhostings](/links/web/hosting) oder enthalten in [Kostenloses Hosting 100M](/links/web/domains-free-hosting).
    - [Zimbra](/links/web/emails-zimbra) Starter.
- Sie benötigen die [neue Outlook-Version](https://support.microsoft.com/de-de/office/getting-started-with-the-new-outlook-for-windows-656bb8d9-5a60-49b2-a98b-ba7822bc7627), installiert auf Ihrem Windows-System.
- Sie benötigen die Zugangsdaten für die E-Mail-Adresse, die Sie konfigurieren möchten.

/// details | Informationen zur Verwaltung und Konfiguration von OVHcloud Diensten

OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.

Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Wir empfehlen jedoch, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten, wenn Sie auf Schwierigkeiten stoßen. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).

///

## In der praktischen Anwendung

> [!warning]
>
> Diese Dokumentation gilt **ausschließlich** für die **neue Outlook**-Anwendung und nicht für "[klassischen Outlook](https://support.microsoft.com/de-de/office/installer-ou-r%C3%A9installer-outlook-classique-sur-un-pc-windows-5c94902b-31a5-4274-abb0-b07f4661edf5)", das in der Microsoft 365-Suite oder zuvor auf Ihrem Computer installiert ist.
>
> Um die beiden Outlook-Versionen zu unterscheiden, wenn beide installiert sind, geben Sie "Outlook" in der Windows-Suchleiste ein. Sie können dann den Unterschied wie unten erkennen. Die neue Outlook-Anwendung hat keine besondere Bezeichnung.
>
> ![outlook Windows](images/outlook-windows-identify01.png){.thumbnail .h-500}
>
> Um Ihre MX Plan- oder Zimbra Starter-E-Mail-Adresse auf klassischen Outlook zu konfigurieren, konsultieren Sie unsere Anleitung "[MX Plan / Zimbra Starter - Konfigurieren Sie Ihre E-Mail-Adresse auf klassischem Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)".

### E-Mail-Account hinzufügen <a name="add-account"></a>

> [!warning]
>
> Es ist erforderlich, den entsprechenden Tab in Schritt 3 auszuwählen, der Ihrer Standortauswahl entspricht (**EUROPA** oder **AMERIKA / ASIEN-PAZIFIK**), um die richtigen Werte zu erhalten.

Um Ihre E-Mail-Adresse zu konfigurieren, folgen Sie den unten stehenden Schritten, indem Sie auf die Tabs klicken.

> [!tabs]
> **Schritt 1**
>> - Öffnen Sie Outlook. Klicken Sie in der linken Spalte auf `Ein Account hinzufügen`{.action}, um die Konfiguration zu starten.
>>
>> ![outlook](images/configuration-newoutlook-windows-01.png){.thumbnail .w-600}
>>
> **Schritt 2**
>> - Geben Sie Ihre E-Mail-Adresse ein und klicken Sie auf `Weiter`{.action}.
>> - Geben Sie Ihr Passwort ein und klicken Sie auf den Button `Mehr anzeigen`{.action}.
>>
>> ![outlook](images/configuration-newoutlook-windows-02.png){.thumbnail .w-600}
>>
> **Schritt 3 EUROPA**
>> - Geben Sie die folgenden Parameter ein:
>>    - **IMAP-Eingangsserver**: imap.mail.ovh.net **oder** ssl0.ovh.net.
>>    - **Port**: 993
>>    - **Sicherheitstyp**: SSL/TLS
>>    - **SMTP-Benutzername**: Die E-Mail-Adresse, die Sie hinzufügen.
>>    - **SMTP-Ausgangsserver**: smtp.mail.ovh.net **oder** ssl0.ovh.net.
>>    - **Port**: 465
>>    - **Sicherheitstyp**: SSL/TLS
>>    - **Passwort**: Lassen Sie dieses Feld leer, das zuvor eingegebene Passwort wird verwendet.
>> - Klicken Sie auf `Weiter`{.action}, um die Konfiguration abzuschließen.
>>
>> ![outlook](images/configuration-newoutlook-windows-03.png){.thumbnail .w-600}
>>
> **Schritt 3 AMERIKA / ASIEN-PAZIFIK**
>> - Geben Sie die folgenden Parameter ein:
>>    - **IMAP-Eingangsserver**: imap.mail.ovh.ca
>>    - **Port**: 993
>>    - **Sicherheitstyp**: SSL/TLS
>>    - **SMTP-Benutzername**: Die E-Mail-Adresse, die Sie hinzufügen.
>>    - **SMTP-Ausgangsserver**: smtp.mail.ovh.ca
>>    - **Port**: 465
>>    - **Sicherheitstyp**: SSL/TLS
>>    - **Passwort**: Lassen Sie dieses Feld leer, das zuvor eingegebene Passwort wird verwendet.
>> - Klicken Sie auf `Weiter`{.action}, um die Konfiguration abzuschließen.
>>
>> ![outlook](images/configuration-newoutlook-windows-03ca.png){.thumbnail .w-600}

### E-Mail-Adresse verwenden <a name="use-account"></a>

Sobald die E-Mail-Adresse konfiguriert ist, können Sie sie sofort verwenden! Sie können nun Nachrichten senden und empfangen.

OVHcloud stellt außerdem eine Webanwendung bereit, mit der Sie Ihren E-Mail-Account über Ihren Webbrowser unter [Webmail](/links/web/email) nutzen können. Melden Sie sich mit den Zugangsdaten Ihres E-Mail-Accounts an.

### Vorhandene Einstellungen ändern <a name="modify-settings"></a>

Die Outlook Anwendung erlaubt nicht, die Servereinstellungen für Ihren E-Mail-Account zu ändern.

Wenn Ihr E-Mail-Account bereits konfiguriert ist und Sie ihn erneut konfigurieren möchten, müssen Sie ihn zuerst löschen und dann neu erstellen:

- Klicken Sie auf das Einstellungen-Symbol `⛭`{.action} am unteren Ende der linken Spalte.
- Im Bereich "Ihre Accounts" klicken Sie auf `Verwalten`{.action} rechts neben der betreffenden E-Mail-Adresse.

![outlook](images/configuration-newoutlook-windows-04.png){.thumbnail .w-600}

- Scrollen Sie nach unten.
- Klicken Sie auf `Löschen`{.action}, um den Löschvorgang zu starten.
- Entscheiden Sie, ob Sie es nur von diesem Gerät oder von allen Geräten, die Outlook nutzen, löschen möchten.

![outlook](images/configuration-newoutlook-windows-05.png){.thumbnail .w-600}

> [!success]
>
> Nachdem Sie den E-Mail-Account gelöscht haben, folgen Sie den Anweisungen im Abschnitt "[Account hinzufügen](#add-account)" dieser Dokumentation.

### Allgemeine Senden- und Empfangseinstellungen <a name="settings-account"></a>

#### Empfangseinstellungen IMAP und POP <a name="imap-pop"></a>

Für den Empfang von E-Mails empfehlen wir die Verwendung von **IMAP**. Sie können jedoch auch **POP** auswählen.

> [!warning]
>
> Es ist erforderlich, den richtigen Wert für Ihren Standort (**EUROPA** oder **AMERIKA / ASIEN-PAZIFIK**) einzugeben.

Wählen Sie den entsprechenden Tab je nach Konfigurationstyp:

> [!tabs]
> **IMAP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **EUROPE-Eingangsserver**: imap.mail.ovh.net **oder** ssl0.ovh.net.
>> - **AMERIKA/ASIEN-PACIFIK-Eingangsserver**: imap.mail.ovh.ca.
>> - **Port**: 993.
>> - **Sicherheitstyp**: SSL/TLS.
>>
> **POP-Konfiguration**
>>
>> - **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **EUROPE-Eingangsserver**: pop.mail.ovh.net **oder** ssl0.ovh.net.
>> - **AMERIKA/ASIEN-PACIFIK-Eingangsserver**: pop.mail.ovh.ca.
>> - **Port**: 995.
>> - **Sicherheitstyp**: SSL/TLS.

#### Senden von E-Mails (SMTP) <a name="smtp"></a>

Für den Versand von E-Mails verwenden Sie die folgenden **SMTP**-Parameter:

**SMTP-Konfiguration**

- **Benutzername**: Geben Sie die **vollständige** E-Mail-Adresse ein.
- **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
- **EUROPE-Ausgangsserver**: smtp.mail.ovh.net **oder** ssl0.ovh.net.
- **AMERIKA/ASIEN-PACIFIK-Ausgangsserver**: smtp.mail.ovh.ca.
- **Port**: 465.
- **Sicherheitstyp**: SSL/TLS.

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zur Konfiguration von Accounts im neuen Outlook Client für Windows finden Sie im [Help Center von Microsoft](https://support.microsoft.com/de-de/office/start-using-new-outlook-for-windows-4395454d-cb2f-4c16-bb24-fa4bb36650ae).

[Erste Schritte mit dem MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Erste Schritte mit dem Zimbra-Angebot](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.