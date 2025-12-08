---
title: "Exchange - Konfiguration von E-Mail-Accounts in Google Mail für Android"
excerpt: "Erfahren Sie hier, wie Sie Ihren Exchange Account in Android über die Gmail-App einrichten"
updated: 2025-04-28
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

## Ziel

Exchange E-Mail-Accounts können auf verschiedenen, kompatiblen E-Mail-Clients konfiguriert werden. So können Sie Ihr bevorzugtes Gerät für Versand und Empfang Ihrer E-Mails verwenden. In dieser Anleitung erfahren Sie, wie Sie einen Exchange E-Mail-Account über die Gmail-App auf Android-Geräten konfigurieren.

**Diese Anleitung erklärt, wie Sie Ihren Exchange Account in Android über die Gmail-App einrichten.**

> [!warning]
> In diesem Tutorial erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
> Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](/links/partner) zu wenden oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.

## Voraussetzungen

- Sie haben einen [OVHcloud Exchange](/links/web/emails) Dienst eingerichtet.
- Die Gmail-App ist auf Ihrem Gerät installiert. Sie können diese über den Google Play Store installieren.
- Sie verfügen über Anmeldeinformationen für den zu konfigurierenden E-Mail-Account

> [!primary]
>
> Die Anweisungen in dieser Anleitung basieren auf einem Gerät mit Android Version 13.
>

## In der praktischen Anwendung

### E-Mail-Account hinzufügen <a name="addaccount"></a>

> [!primary]
>
> In dieser Anleitung verwenden wir den Servernamen: ex?.mail.ovh.net. Das "?" muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Exchange Dienst ersetzt werden.
>
> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
> 1. In der Rubrik `MICROSOFT`{.action}, klicken Sie auf `Exchange`{.action}.
> 1. Wählen Sie den gewünschten Dienst aus.
> 1. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

Öffnen Sie auf Ihrem Gerät die App `Gmail`{.action}.

![Exchange Android](images/exchange-android-00.png){.thumbnail .h-600 .w-600}

Das Hinzufügen eines Accounts erfolgt anders, je nachdem ob **noch kein Account eingerichtet** oder **bereits ein Account eingerichtet** ist. Wählen Sie den für Sie passenden Tab aus:

> [!tabs]
> **Erste Konfiguration**
>>
>> Wählen Sie `E-Mail-Adresse hinzufügen aus`{.action}.<br><br>
>> ![Exchange Android](images/android-first.png){.thumbnail .h-600 .w-600}
>>
> **Vorhandene Konfiguration**
>>
>> 1. Gehen Sie zum Menü oben links auf dem Bildschirm.<br><br>
>> 2. Wählen Sie `Einstellungen aus`{.action}.<br><br>
>> 3. Wählen Sie `Konto hinzufügen aus`{.action}.<br><br>
>> ![Exchange Android](images/android-existing.png){.thumbnail .h-600 .w-600}

Folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> **Schritt 1**
>> Wählen Sie im Menü E-Mail-Kontotypen die Option `Exchange und Office`{.action} aus.<br><br>
>> ![Exchange Android](images/exchange-android-01.png){.thumbnail .h-600 .w-600}
>>
> **Schritt 2**
>> Geben Sie Ihre E-Mail-Adresse ein und tippen Sie dann auf `Weiter`{.action}.<br><br>
>> ![Exchange Android](images/exchange-android-02.png){.thumbnail .h-600 .w-600}
>>
> **Schritt 3**
>> Geben Sie das Passwort Ihres E-Mail-Accounts ein und tippen Sie dann auf `Weiter`{.action}.<br><br>
>> ![Exchange Android](images/exchange-android-03.png){.thumbnail .h-600 .w-600}
>>
> **Schritt 4**
>> Vervollständigen Sie die Seite "**Adresskonfiguration**"<br><br>- **E-Mail**: Ihre vollständige E-Mail-Adresse<br>- **Passwort**: Passwort des E-Mail-Accounts<br>- **Zertifikat**: "Keines"<br>- **Domain\Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **Server**: **ex?.mail.ovh.net** (ersetzen Sie **?** mit der [Nummer Ihres Exchange Servers](#addaccount))<br>- **Port**: 443<br>- **Sicherheitstyp**: SSL/TLS<br><br>Tippen Sie auf `Weiter`{.action}, um die Konfiguration zu bestätigen.<br><br>
>> ![Exchange Android](images/exchange-android-04.png){.thumbnail .h-600 .w-600}
>>
> **Schritt 5**
>> Die Meldung "Sie können Ihr Konto jetzt verwenden" sollte angezeigt werden. Tippen Sie auf `OK`{.action}, um die Konfiguration abzuschließen.<br><br>
>> ![Exchange Android](images/exchange-android-05.png){.thumbnail .h-600 .w-600}

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können E-Mails über Ihre Gmail-App versenden und empfangen.

> [!success]
>
> Eine OVHcloud Webanwendung, mit der Sie über einen Browser auf Ihre E-Mail-Accounts zugreifen können, ist verfügbar unter [Webmail](/links/web/email). Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden.

## Weiterführende Informationen <a name="go-further"></a>

> [!primary]
>
> Weitere Informationen zum Einrichten einer E-Mail-Adresse über die Gmail-App auf Android finden Sie im [Google Help Center](https://support.google.com/mail/answer/6078445?hl=de-CA&co=GENIE.Platform%3DAndroid#zippy=%2Ca-a-account).

[MX Plan - Konfiguration eines E-Mail-Accounts in Gmail für Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).

[E-Mail Pro - Konfiguration eines E-Mail-Accounts in Gmail für Android](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.