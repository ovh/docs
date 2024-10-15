---
title: Zimbra-E-Mail-Adresse auf einem E-Mail-Client konfigurieren
excerpt: Hier erfahren Sie, wie Sie Ihren E-Mail-Client konfigurieren, um E-Mails von Ihrem Zimbra-Konto abzurufen
updated: 2024-10-10
---

<style>
.w-400 {
max-width:400px!important;
}
</style>

> [!warning]
>
> **Wichtig**
>
> Das Zimbra Angebot befindet sich in der Beta-Phase.
>
> Es ist derzeit für Anwender verfügbar, die das [Beta-Anmeldeformular ausgefüllt haben](https://labs.ovhcloud.com/en/zimbra-beta/).
>

## Ziel

Mit dem Zimbra Angebot bietet Ihnen OVHcloud eine kollaborative Open Source Messaging-Plattform mit allen für eine professionelle Nutzung notwendigen Funktionen. Auf dieser Seite finden Sie die Informationen, die Sie benötigen, um Ihre Zimbra E-Mail-Accounts auf Ihrem bevorzugten E-Mail-Client einzurichten.

**Erfahren Sie, wie Sie Ihren E-Mail-Client konfigurieren, um E-Mails von Ihrem Zimbra-Konto abzurufen**

## Voraussetzungen

- Sie haben einen E-Mail-Account auf unserer Zimbra E-Mail-Lösung von OVHcloud abonniert.
- Sie haben ein E-Mail-Programm auf dem Gerät Ihrer Wahl installiert.

## In der Praxis

### Konfiguration Ihres E-Mail-Accounts <a name="mail-config"></a>

Die Konfiguration Ihres Zimbra E-Mail-Accounts verwendet die gleichen Einstellungen wie das MX Plan Angebot, das bei den OVHcloud Webhostings inklusive ist oder nur eines bietet. Aus diesem Grund werden die unten stehenden Konfigurationslinks im Titel mit „MX Plan“ gekennzeichnet.

Klicken Sie auf die Registerkarte für den verwendeten Gerätetyp:

> [!tabs]
> **Windows-Computer**
>>
>> - [Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Mail for Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Apple Mac Computer**
>>
>> - [Outlook für macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail für macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird für macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone oder iPad**
>>
>> - [Mail für iPhone und iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Android Smartphone oder Tablet**
>>
>> - [Google Mail für Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Webinterface**
>>
>> - [Gmail-Webinterface](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### POP-, IMAP- und SMTP-Einstellungen zurückrufen <a name="popimap-settings"></a>

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können jedoch **POP** auswählen.

- **Für eine POP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die E-Mail-Adresse ein **vollständig**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|Server **EUROPE** (eingehend)|pop.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (eingehend)|pop.mail.ovh.ca|
|Port|995|
|Sicherheitstyp|SSL/TLS|

- **Für eine IMAP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die E-Mail-Adresse ein **vollständig**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|Server **EUROPE** (eingehend)|imap.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (eingehend)|imap.mail.ovh.ca|
|Port|993|
|Sicherheitstyp|SSL/TLS|

Wenn Sie zum Senden von E-Mails die **SMTP**-Einstellungen in den Kontoeinstellungen manuell eingeben müssen, verwenden Sie die folgenden Einstellungen:

- **SMTP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die E-Mail-Adresse ein **vollständig**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|Server **EUROPE** (eingehend)|smtp.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (eingehend)|smtp.mail.ovh.ca|
|Port|465|
|Sicherheitstyp|SSL/TLS|

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Für spezielle Dienstleistungen (Referenzierung, Entwicklung etc.) wenden Sie sich bitte an die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Verwendung und Konfiguration Ihrer OVHcloud Lösungen benötigen, empfehlen wir Ihnen unsere verschiedenen [Support-Angebote](/links/support).

Für den Austausch mit unserer [User Community](/links/community).