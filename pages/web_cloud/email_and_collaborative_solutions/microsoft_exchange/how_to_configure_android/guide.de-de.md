---
title: "Exchange - Konfiguration von E-Mail-Accounts in Google Mail für Android"
excerpt: "Erfahren Sie hier, wie Sie Ihren Exchange Account in Android über die Gmail-App einrichten"
updated: 2024-03-20
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-600 {
  max-height:600px !important;
}
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Exchange E-Mail-Accounts können auf verschiedenen, kompatiblen E-Mail-Clients konfiguriert werden. So können Sie Ihr bevorzugtes Gerät für Versand und Empfang Ihrer E-Mails verwenden. In dieser Anleitung erfahren Sie, wie Sie einen Exchange E-Mail-Account über die Gmail-App auf Android-Geräten konfigurieren.

**Diese Anleitung erklärt, wie Sie Ihren Exchange Account in Android über die Gmail-App einrichten.**

> [!warning]
> In diesem Tutorial erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
> Wir empfehlen Ihnen jedoch, sich bei Schwierigkeiten an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu wenden oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten.
>

## Voraussetzungen

- Sie haben einen [OVHcloud Exchange](https://www.ovhcloud.com/de/emails/) Dienst eingerichtet.
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
> In unseren Beispielen verwenden wir als Serverbezeichnung "ex?.mail.ovh.net". Das "?" muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Exchange Dienst ersetzt werden.
>
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Öffnen Sie im Bereich `Web Cloud`{.action} unter `Microsoft`{.action} den Eintrag `Exchange`{.action}. Der Servername wird im Abschnitt Verbindung auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

Öffnen Sie auf Ihrem Gerät die App `Gmail`{.action}.

![Exchange Android](images/exchange-android-00.png){.thumbnail .w-400}

Das Hinzufügen eines Accounts erfolgt anders, je nachdem ob **noch kein Account eingerichtet** oder **bereits ein Account eingerichtet** ist. Wählen Sie den für Sie passenden Tab aus:

> [!tabs]
> **Erste Konfiguration**
>>
>> Wählen Sie `E-Mail-Adresse hinzufügen aus`{.action}.<br><br>
>> ![Exchange Android](images/android-first.png){.thumbnail .h-600}
>>
> **Vorhandene Konfiguration**
>>
>> 1. Gehen Sie zum Menü oben links auf dem Bildschirm.<br><br>
>> 2. Wählen Sie `Einstellungen aus`{.action}.<br><br>
>> 3. Wählen Sie `Konto hinzufügen aus`{.action}.<br><br>
>> ![Exchange Android](images/android-existing.png){.thumbnail}
>>

Folgen Sie den in den Tabs aufgeführten Schritten:

> [!tabs]
> **Schritt 1**
>> Wählen Sie im Menü E-Mail-Kontotypen die Option `Exchange und Office`{.action} aus.<br><br>
>> ![Exchange Android](images/exchange-android-01.png){.thumbnail .h-600}
>>
> **Schritt 2**
>> Geben Sie Ihre E-Mail-Adresse ein und tippen Sie dann auf `Weiter`{.action}.<br><br>
>> ![Exchange Android](images/exchange-android-02.png){.thumbnail .h-600}
>>
> **Schritt 4**
>> Geben Sie das Passwort Ihres E-Mail-Accounts ein und tippen Sie dann auf `Weiter`{.action}.<br><br>
>> ![Exchange Android](images/exchange-android-03.png){.thumbnail .h-600}
>>
> **Schritt 5**
>> Vervollständigen Sie die Seite "**Adresskonfiguration**"<br><br>- **E-Mail**: Ihre vollständige E-Mail-Adresse<br>- **Passwort**: Passwort des E-Mail-Accounts<br>- **Zertifikat**: "Keines"<br>- **Domain\Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **Server**: **ex?.mail.ovh.net** (ersetzen Sie **?** mit der [Nummer Ihres Exchange Servers](#addaccount))<br>- **Port**: 443<br>- **Sicherheitstyp**: SSL/TLS<br><br>Tippen Sie auf `Weiter`{.action}, um die Konfiguration zu bestätigen.<br><br>
>> ![Exchange Android](images/exchange-android-04.png){.thumbnail .h-600}
>>
> **Schritt 6**
>> Die Meldung "Sie können Ihr Konto jetzt verwenden" sollte angezeigt werden. Tippen Sie auf `OK`{.action}, um die Konfiguration abzuschließen.<br><br>
>> ![Exchange Android](images/exchange-android-05.png){.thumbnail .h-600}
>>

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt E-Mails  über Ihre Gmail-App versenden und empfangen.

> [!success]
>
> Eine OVHcloud Webanwendung, mit der Sie über einen Browser auf Ihre E-Mail-Accounts zugreifen können, ist verfügbar unter <https://www.ovhcloud.com/de/mail/>. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden.

## Weiterführende Informationen <a name="go-further"></a>

[MX Plan - Konfiguration eines E-Mail-Accounts in Gmail für Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).

[E-Mail Pro - Konfiguration eines E-Mail-Accounts in Gmail für Android](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
