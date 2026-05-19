---
title: "Zimbra - E-Mail-Account auf einem E-Mail-Client konfigurieren"
excerpt: "Wählen Sie die passende Konfigurationsmethode für Ihr Zimbra Starter- oder Pro-Angebot und Ihren E-Mail-Client"
updated: 2026-05-04
---

## Ziel

Mit der Lösung Zimbra bietet Ihnen OVHcloud eine kollaborative Open-Source-Messaging-Plattform mit allen für eine professionelle Nutzung notwendigen Funktionen. Diese Anleitung hilft Ihnen, die passende Konfigurationsmethode für Ihr Zimbra-Angebot und Ihren E-Mail-Client auszuwählen.

**Erfahren Sie, welche Methode Sie wählen müssen, um Ihren Zimbra-E-Mail-Account auf dem E-Mail-Client Ihrer Wahl zu konfigurieren.**

## Voraussetzungen

- Sie verfügen über ein Abonnement für einen E-Mail-Account auf einer unserer [Zimbra-Lösungen](/links/web/emails-zimbra) (**Zimbra Starter** oder **Zimbra Pro**).
- Sie haben einen E-Mail-Client auf dem Gerät Ihrer Wahl installiert.
- Sie verfügen über die Zugangsdaten für die zu konfigurierende E-Mail-Adresse.

<!-- CP-NAV-START:web-zimbra -->
---

### Auf Ihr OVHcloud Kundencenter zugreifen

- **Direktzugriff:** [Zimbra](/links/control-panel/web-zimbra)
- **So greifen Sie auf Ihre Dienste zu:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## In der praktischen Anwendung

### Ihr Zimbra-Angebot identifizieren <a name="identifier-offre"></a>

Die zu verwendende Konfigurationsmethode hängt von Ihrem Zimbra-Angebot ab. Die beiden Angebote unterstützen nicht dieselben Protokolle.

| Angebot | Unterstützte Protokolle | Synchronisierte Funktionen |
|---|---|---|
| **Zimbra Starter** | IMAP, POP, SMTP | Nur E-Mails |
| **Zimbra Pro** | IMAP, POP, SMTP, **ActiveSync**, **EWS** | E-Mails, Kalender, Kontakte, Aufgaben |

> [!primary]
>
> Um Ihr Angebot zu identifizieren, melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an und gehen Sie zu `Web Cloud`{.action} und dann zu `Zimbra Mail`{.action}. Im Tab `E-Mail-Accounts`{.action} ist das Angebot in der Spalte **Angebot** für jeden Account angegeben.

### Einen Zimbra Pro-Account konfigurieren <a name="config-zimbra-pro"></a>

> [!success]
>
> Um die kollaborativen Funktionen von Zimbra Pro (Synchronisation von Kalender, Kontakten und Aufgaben) voll auszuschöpfen, verwenden Sie die Protokolle **ActiveSync** oder **EWS** über die unten aufgeführten Anleitungen. Eine IMAP/POP-Konfiguration ist weiterhin möglich, synchronisiert jedoch nur die E-Mails.

Klicken Sie auf den Tab für den von Ihnen verwendeten Gerätetyp:

> [!tabs]
> **Windows-PC**
>>
>> - [Klassisches Outlook über ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_windows)
>>
> **Apple Mac-Computer**
>>
>> - [Mail über EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_macos)
>> - [Outlook über EWS](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_macos)
>>
> **iPhone oder iPad**
>>
>> - [Mail über ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_app_ios)
>> - [Outlook über ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_ios)
>>
> **Android-Smartphone oder -Tablet**
>>
>> - [Gmail über ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_gmail_app_android)
>> - [Outlook über ActiveSync](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_outlook_app_android)
>>

### Einen Zimbra Starter-Account konfigurieren (oder einen Zimbra Pro-Account in IMAP/POP) <a name="mail-config"></a>

Verwenden Sie für das **Zimbra Starter**-Angebot oder bei Bevorzugung einer IMAP/POP-Konfiguration für Ihren **Zimbra Pro**-Account die nachfolgenden Anleitungen.

> [!primary]
>
> Die nachfolgenden Anleitungen werden mit dem MX Plan-Angebot geteilt, da die IMAP/POP/SMTP-Einstellungen für die beiden Angebote strikt identisch sind. Aus diesem Grund tragen die Links den Vermerk "MX Plan" im Titel.

Klicken Sie auf den Tab für den von Ihnen verwendeten Gerätetyp:

> [!tabs]
> **Windows-PC**
>>
>> - [Outlook für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016)
>> - [Thunderbird für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_windows)
>> - [Mail für Windows](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_windows_10)
>>
> **Apple Mac-Computer**
>>
>> - [Outlook für macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_outlook_2016_mac)
>> - [Mail für macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_mail_macos)
>> - [Thunderbird für macOS](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_thunderbird_mac)
>>
> **iPhone oder iPad**
>>
>> - [Mail für iPhone und iPad](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_ios)
>>
> **Android-Smartphone oder -Tablet**
>>
>> - [Gmail für Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android)
>>
> **Webinterface**
>>
>> - [Gmail-Webinterface](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_gmail)
>>

### Die mobile Zimbra-App verwenden <a name="config-zimbra-app"></a>

Die mobile Zimbra-App (Android und iOS) ist sowohl mit dem **Zimbra Starter**- als auch mit dem **Zimbra Pro**-Angebot kompatibel und ermöglicht den Zugriff auf Ihren Account über das native Zimbra-Protokoll.

- [Mobile Zimbra-App konfigurieren](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

### Referenzeinstellungen für IMAP, POP und SMTP <a name="popimap-settings"></a>

Falls Ihr E-Mail-Client eine manuelle Konfiguration erfordert, verwenden Sie die folgenden Einstellungen.

#### Eingangsserver

Für den Empfang von E-Mails empfehlen wir das Protokoll **IMAP**. Das Protokoll **POP** steht weiterhin zur Verfügung. Klicken Sie auf den Tab für das Protokoll Ihrer Wahl:

> [!tabs]
> **IMAP (empfohlen)**
>>
>> - **Benutzername**: **vollständige** E-Mail-Adresse
>> - **Passwort**: Passwort der E-Mail-Adresse
>> - **EUROPA-Server (eingehend)**: `imap.mail.ovh.net` **oder** `ssl0.ovh.net`
>> - **AMERIKA/ASIEN-PAZIFIK-Server (eingehend)**: `imap.mail.ovh.ca`
>> - **Port**: 993
>> - **Sicherheitstyp**: SSL/TLS
>>
> **POP**
>>
>> - **Benutzername**: **vollständige** E-Mail-Adresse
>> - **Passwort**: Passwort der E-Mail-Adresse
>> - **EUROPA-Server (eingehend)**: `pop.mail.ovh.net` **oder** `ssl0.ovh.net`
>> - **AMERIKA/ASIEN-PAZIFIK-Server (eingehend)**: `pop.mail.ovh.ca`
>> - **Port**: 995
>> - **Sicherheitstyp**: SSL/TLS
>>

#### Ausgangsserver

Verwenden Sie zum Senden von E-Mails die folgenden **SMTP**-Einstellungen:

- **Benutzername**: **vollständige** E-Mail-Adresse
- **Passwort**: Passwort der E-Mail-Adresse
- **EUROPA-Server (ausgehend)**: `smtp.mail.ovh.net` **oder** `ssl0.ovh.net`
- **AMERIKA/ASIEN-PAZIFIK-Server (ausgehend)**: `smtp.mail.ovh.ca`
- **Port**: 465
- **Sicherheitstyp**: SSL/TLS

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Mobile Zimbra-App konfigurieren](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios)

[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[FAQ zur OVHcloud Zimbra-Lösung](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Webentwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
