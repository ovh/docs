---
title: "E-Mail Pro - Konfiguration eines E-Mail-Accounts in Gmail für Android"
excerpt: "Erfahren Sie hier, wie Sie einen E-Mail Pro Account in Android über die Gmail-App einrichten"
updated: 2024-03-15
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

E-Mail-Accounts aus dem E-Mail Pro Angebot können auf allen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Versand und Empfang Ihrer E-Mails verwenden.

**Diese Anleitung erklärt, wie Sie einen E-Mail Pro Account in Android über die Gmail-App einrichten.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber der verwendeten Software zu kontaktieren, falls Sie auf Schwierigkeiten stoßen Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt "Weiterführende Informationen" dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über ein [E-Mail Pro](/links/web/email-pro) Angebot.
- Sie haben die Gmail-App auf Ihrem Gerät. Sie können diese über den Google Play Store installieren.
- Sie haben die Login-Daten des E-Mail-Accounts, den Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung wurde anhand eines Geräts mit Android Version 13 erstellt.

## In der praktischen Anwendung

### Hinzufügen des E-Mail-Accounts

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: pro**?**.mail.ovh.net. Das "?" muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](/links/manager), wenn Sie den betreffenden `E-Mail Pro`{.action} Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

Öffnen Sie die Anwendung `Gmail`{.action}.

![emailpro](images/emailpro-android-00.png){.thumbnail .w-400}

Das Einrichten eines Accounts erfolgt **wenn noch kein Account eingerichtet** anders als **wenn bereits ein Account eingerichtet** wurde. Wählen Sie daher den Tab für eine der beiden Situationen aus:

> [!tabs]
> **Erste Konfiguration**
>>
>> Wählen Sie `E-Mail-Adresse hinzufügen`{.action}<br><br>
>> ![EmailPro](images/android-first.png){.thumbnail .h-600}
>>
> **Vorhandene Konfiguration**
>>
>> 1. Gehen Sie zum Menü oben links auf dem Bildschirm.<br><br>
>> 2. Wählen Sie `Einstellungen`{.action}.<br><br>
>> 3. Wählen Sie `Account hinzufügen`{.action}.<br><br>
>> ![emailpro](images/android-existing.png){.thumbnail .h-600}
>>

Folgen Sie den Anleitungsschritten indem Sie nacheinander die Tabs aufrufen:

> [!tabs]
> **Schritt 1**
>> Wählen Sie im Menü E-Mail-Kontotypen die Option `Andere`{.action}.<br><br>
>> ![emailpro](images/emailpro-android-01.png){.thumbnail .h-600}
>>
> **Schritt 2**
>> Geben Sie Ihre E-Mail-Adresse ein.<br><br>
>> ![emailpro](images/emailpro-android-02.png){.thumbnail .h-600}
>>
> **Schritt 3**
>> Wählen Sie das Protokoll für den E-Mail-Empfang aus. Wählen Sie `Persönlich (IMAP)`{.action aus.}<br><br>Weitere Informationen zu [POP und IMAP](#popimap) finden Sie unten in dieser Anleitung.<br><br>
>> ![emailpro](images/emailpro-android-03.png){.thumbnail .h-600}
>>
> **Schritt 4**
>> Geben Sie das Passwort des E-Mail-Accounts ein.<br><br>
>> ![emailpro](images/emailpro-android-04.png){.thumbnail .h-600}
>>
> **Schritt 5**
>> Geben Sie die **Einstellungen des Eingangsservers** ein:<br><br>- **Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **Passwort**: Das Passwort des E-Mail-Accounts<br>- **Server**: Geben Sie **pro**?**.mail.ovh.net** ein (ersetzen Sie "**?**" mit der Nummer Ihres Servers). <br><br>
>> ![emailpro](images/emailpro-android-05.png){.thumbnail}
>>
> **Schritt 6**
>> Geben Sie die **Einstellungen des Ausgangsservers** ein:<br><br>- **Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **Passwort**: Das Passwort des E-Mail-Accounts<br>- **SMTP-Server**: Geben Sie **pro**?**.mail.ovh.net** ein (ersetzen Sie "**?**" mit der Nummer Ihres Servers). <br><br>
>> ![emailpro](images/emailpro-android-06.png){.thumbnail .h-600}
>>
> **Schritt 7**
>> Wählen Sie aus, wie oft Ihre E-Mails synchronisiert werden sollen.<br><br>
>> ![emailpro](images/emailpro-android-07.png){.thumbnail .h-600}
>>
> **Schritt 8**
>> Legen Sie den Anzeigenamen Ihrer E-Mail-Adresse in der Gmail-App fest und tippen Sie dann auf `Weiter`{.action}.<br><br>
>> ![emailpro](images/emailpro-android-08.png){.thumbnail .h-600}
>>

Wenn Ihr E-Mail-Account eingerichtet ist, können Sie ab sofort E-Mails über Ihre Gmail-App versenden und empfangen.

> [!success]
>
> Eine OVHcloud Webanwendung, mit der Sie über einen Webbrowser auf Ihren E-Mail-Account zugreifen können, ist verfügbar unter <https://www.ovhcloud.com/de/mail/>. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden.

### POP-, IMAP- und SMTP-Einstellungen

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können auch **POP** auswählen. Wie diese funktionieren, erfahren Sie im Abschnitt [„POP oder IMAP, was ist der Unterschied?“](#popimap).

- **POP-Konfiguration**

| Information | Beschreibung |
| --- | --- |
| Benutzername | Geben Sie die **vollständige** E-Mail-Adresse ein. |
| Passwort | Geben Sie das Passwort des E-Mail-Accounts ein. |
| Server | pro**?**.mail.ovh.net (ersetzen Sie "**?**" mit der Nummer Ihres Servers) |
| Port | 995 |
| Sicherheitstyp | SSL/TLS |

- **IMAP-Konfiguration**

| Information | Beschreibung |
| --- | --- |
| Benutzername | Geben Sie die **vollständige** E-Mail-Adresse ein. |
| Passwort | Geben Sie das Passwort des E-Mail-Accounts ein. |
| Server | pro**?**.mail.ovh.net (ersetzen Sie "**?**" mit der Nummer Ihres Servers) |
| Port | 993 |
| Sicherheitstyp | SSL/TLS |

Wenn Sie die **SMTP**-Einstellungen für den Versand von E-Mails manuell in den Kontoeinstellungen
eingeben müssen, verwenden Sie die folgenden Einstellungen:

- **SMTP-Konfiguration**

| Information | Beschreibung |
| --- | --- |
| Benutzername | Geben Sie die **vollständige** E-Mail-Adresse ein. |
| Passwort | Geben Sie das Passwort des E-Mail-Accounts ein. |
| Server | pro**?**.mail.ovh.net (ersetzen Sie "**?**" mit der Nummer Ihres Servers) |
| Port | 587 |
| Sicherheitstyp | STARTTLS |

### POP oder IMAP, was ist der Unterschied? <a name="popimap"></a>

Wenn Sie Ihren E-Mail-Account manuell konfigurieren, werden Sie von Ihrem E-Mail-Client gefragt, ob Sie **POP** (**P**ost **O**ffice **P**rotocol) oder **IMAP** (**I**nternet **M**essage **A**ccess **P**rotocol) verwenden möchten. Lokalisieren Sie die POP- und IMAP-Protokolle in der Konfiguration Ihres E-Mail-Accounts.

Bei der Konfiguration Ihres E-Mail-Clients müssen Sie die Informationen des **eingehenden Servers** angeben, um E-Mails zu empfangen, und den **ausgehenden Server**, um E-Mails zu senden. Für den Versand von E-Mails gibt es keine Wahl, sondern es wird **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) verwendet. Für den Empfang haben Sie somit die Wahl zwischen **POP** oder **IMAP**.

![emailpro](images/popimap-01.png){.thumbnail}

Um den Unterschied zwischen der Verwendung von POP- und IMAP-Protokoll zu verstehen, sind hier die einzelnen Elemente, die zur Verarbeitung eingehender E-Mails wichtig sind, erklärt:

1. **Ihr Gerät**: Ein Computer, Smartphone oder Tablet.

2. **Ihr E-Mail-Client**: Software zur Verwaltung Ihrer E-Mails.

3. **Empfangsprotokoll**: Entscheidet, wie E-Mails auf Ihrem Gerät abgerufen werden. Ihre Wahl wirkt sich auf andere Geräte aus, die denselben E-Mail-Account nutzen.
    - **IMAP**: Ihr E-Mail-Client fragt den E-Mail-Server ab und lädt die E-Mails auf Ihr Gerät. Wenn Sie eine ungelesene E-Mail anzeigen, wird diese vom Server standardmäßig als „gelesen“ markiert. Andere IMAP-fähige Geräte können diesen Status sehen und die E-Mail besteht, bis sie auf einem der Geräte gelöscht wurde.
    - **POP**: Ihr E-Mail-Client fragt den E-Mail-Server ab und lädt die E-Mails auf Ihr Gerät. Standardmäßig wird die Nachricht vom Server gelöscht, sobald sie auf Ihr Gerät heruntergeladen wurde. Daher können andere Geräte, die mit diesem E-Mail-Account verbunden sind, diese E-Mail nicht mehr anzeigen.

![emailpro](images/popimap-02.png){.thumbnail}

> [!primary]
>
> Diese Beschreibung ist eine Zusammenfassung der Standardfunktionen beider Protokolle. Sie können auch **POP** so einstellen, dass E-Mails beim Abholen nicht gelöscht werden. Die Ausführungen oben dienen dazu, die native Funktionsweise dieser beiden Protokolle zu beschreiben und Ihren Einrichtungsaufwand zu minimieren.

## Weiterführende Informationen

[MX Plan - Konfiguration eines E-Mail-Accounts in Gmail für Android](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/how_to_configure_android).

[Exchange - Konfiguration eines E-Mail-Accounts in Gmail für Android](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
