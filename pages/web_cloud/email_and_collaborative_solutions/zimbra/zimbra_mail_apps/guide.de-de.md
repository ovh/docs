---
title: Zimbra-E-Mail-Adresse auf einem E-Mail-Client konfigurieren
excerpt: Erfahren Sie hier, wie Sie Ihren E-Mail-Client konfigurieren, um die E-Mails Ihres Zimbra-Kontos zu verwalten
updated: 2024-10-10
---

<style>
.w-400 {
max-width:400px!important;
}
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

> [!warning]
>
> **Wichtig**
>
> Das Zimbra Angebot befindet sich in der Beta-Phase.
>
> Es ist derzeit für Anwender verfügbar, die das [Beta-Anmeldeformular ausgefüllt haben](https://labs.ovhcloud.com/en/zimbra-beta/).


## Ziel

Mit dem Zimbra Dienst bietet Ihnen OVHcloud eine kollaborative Open Source Messaging Plattform mit allen für eine professionelle Nutzung notwendigen Funktionen.  
Auf dieser Seite finden Sie Informationen, die Sie benötigen, um Ihre Zimbra E-Mail-Accounts auf Ihrem bevorzugten E-Mail-Client einzurichten.

**Diese Anleitung erklärt, wie Sie Ihren E-Mail-Client konfigurieren, um E-Mails von Ihrem Zimbra-Konto abzurufen.**

## Voraussetzungen

- Sie haben einen E-Mail-Account auf der OVHcloud Zimbra E-Mail-Lösung abonniert.
- Sie haben ein E-Mail-Programm auf dem Gerät Ihrer Wahl installiert.

## In der praktischen Anwendung

### Konfiguration Ihres E-Mail-Accounts <a name="mail-config"></a>

Die Konfiguration Ihres Zimbra E-Mail-Accounts verwendet die gleichen Einstellungen wie unser E-Mail-Dienst MX Plan, der auch bei OVHcloud Webhostings inklusive ist. Aus diesem Grund beziehen sich die nachfolgend verlinkten Anleitungen auf "MX Plan".

Klicken Sie auf den Tab für Ihren zutreffenden Gerätetyp:

> [!tabs]
> **Windows**
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

### POP-, IMAP- und SMTP-Einstellungen <a name="popimap-settings"></a>

Für den Empfang von E-Mails empfehlen wir bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können sich aber auch für **POP** entscheiden.

- **POP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die **vollständige** E-Mail-Adresse ein. |
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein.|
|Server **EUROPA** (eingehend)|pop.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (eingehend)|pop.mail.ovh.ca|
|Port|995|
|Sicherheitstyp|SSL/TLS|

- **IMAP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die **vollständige** E-Mail-Adresse ein. |
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein.|
|Server **EUROPA** (eingehend)|imap.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (eingehend)|imap.mail.ovh.ca|
|Port|993|
|Sicherheitstyp|SSL/TLS|

Wenn Sie zum Senden von E-Mails die **SMTP**-Einstellungen in den Kontoeinstellungen manuell eingeben müssen, verwenden Sie die folgenden Einstellungen:

- **SMTP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Benutzername|Geben Sie die **vollständige** E-Mail-Adresse ein. |
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein.|
|Server **EUROPA** (eingehend)|smtp.mail.ovh.net **oder** ssl0.ovh.net|
|Server **AMERIKA / ASIEN-PAZIFIK** (eingehend)|smtp.mail.ovh.ca|
|Port|465|
|Sicherheitstyp|SSL/TLS|

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
