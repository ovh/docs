---
title: "MX Plan - Konfiguration eines E-Mail-Accounts in Gmail für Android"
excerpt: "Erfahren Sie hier, wie Sie einen MX Plan Account in Android über die Gmail-App einrichten"
updated: 2023-12-15
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

E-Mail-Accounts aus dem MX Plan Angebot können auf allen kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Versand und Empfang Ihrer E-Mails verwenden.

**Diese Anleitung erklärt, wie Sie einen MX Plan E-Mail-Account in Android über die Gmail-App einrichten.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](https://community.ovh.com/en/) zu richten. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben einen MX Plan E-Mail-Account (im MX Plan Angebot oder in einem [OVHcloud Webhosting Angebot](/links/web/hosting) enthalten).
- Die Gmail-App ist auf Ihrem Gerät installiert. Sie können diese über den Google Play Store installieren, wenn sie noch nicht vorhanden ist.
- Sie haben die Login-Daten des E-Mail-Accounts, den Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung wurde anhand eines Geräts mit Android Version 13 erstellt.
>

## In der praktischen Anwendung

### Hinzufügen des E-Mail-Accounts

Öffnen Sie auf Ihrem Gerät die App für `Gmail`{.action}.

![mxplan](images/mxplan-android-00.png){.thumbnail .w-400}

Das Einrichten eines Accounts erfolgt **wenn noch kein Account eingerichtet** anders als **wenn bereits ein Account eingerichtet** wurde. Wählen Sie daher den Tab für eine der beiden Situationen aus:

> [!tabs]
> **Erste Konfiguration**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-first.png){.thumbnail}|Wählen Sie `E-Mail-Account hinzufügen`{.action}.|
>>
> **Vorhandene Konfiguration**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-existing.png){.thumbnail}|1 . Gehen Sie zum Menü oben links auf dem Bildschirm.<br><br>2 . Wählen Sie `Einstellungen`{.action} aus.<br><br>3 . Wählen Sie `Konto hinzufügen`{.action}.|
>>

Folgen Sie den Anleitungsschritten indem Sie nacheinander die Tabs aufrufen:

>  [!tabs]
> **Schritt 1**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-01.png){.thumbnail}|Wählen Sie im Menü „E-Mail-Kontotypen“ die Option `Andere`{.action}.|
>>
> **Schritt 2**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-02.png){.thumbnail}|Geben Sie Ihre E-Mail-Adresse ein.|
>>
> **Schritt 3**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-03.png){.thumbnail}|Wählen Sie das Protokoll für den E-Mail-Empfang aus. Es wird empfohlen, `Personal (IMAP)`{.action} auszuwählen.<br><br>Am Ende dieser Anleitung finden Sie [weitere Informationen zu POP und IMAP](#popimap), um die Unterschiede zu verstehen.|
>>
> **Schritt 4**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-04.png){.thumbnail}|Geben Sie das Passwort Ihres E-Mail-Accounts ein. |
>>
> **Schritt 5**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-05.png){.thumbnail}|Füllen Sie die **Eingangsservereinstellungen** aus<br><br>- **Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **Passwort**: Das Passwort Ihres E-Mail-Accounts<br>- **Server**: Geben Sie **ssl0.ovh.net** ein. |
>>
> **Schritt 6**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-06.png){.thumbnail}|Füllen Sie die „**Einstellungen für Ausgangsserver**“ aus<br><br>- **Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **Passwort**: Das Passwort Ihres E-Mail-Accounts<br> - SMTP **Server**: Geben Sie **ssl0.ovh.net** ein.|
>>
> **Schritt 7**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-07.png){.thumbnail}|Wählen Sie aus, wie oft Ihre E-Mails synchronisiert werden sollen.|
>>
> **Schritt 8**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-08.png){.thumbnail}|Bestimmen Sie den Anzeigenamen Ihres E-Mail-Accounts in der Gmail-App und tippen Sie dann auf `Weiter`{.action}.|
>>

Wenn Ihr E-Mail-Account eingerichtet ist, können Sie ab sofort E-Mails über Ihre Gmail-App versenden und empfangen.

> [!success]
>
> Eine OVHcloud Webanwendung, mit der Sie über einen Webbrowser auf Ihren E-Mail-Account zugreifen können, ist verfügbar unter <https://www.ovhcloud.com/de/mail/>. Sie können sich mit den Login-Daten Ihres E-Mail-Accounts anmelden.

### POP-, IMAP- und SMTP-Einstellungen

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können auch **POP** auswählen. Wie diese funktionieren, erfahren Sie im Abschnitt [„POP oder IMAP, was ist der Unterschied?“](#popimap)

- **POP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein|
|POP-Server|ssl0.ovh.net|
|Port|995|
|Sicherheitstyp|SSL/TLS|

- **IMAP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein|
|POP-Server|ssl0.ovh.net|
|Port|993|
|Sicherheitstyp|SSL/TLS|

Wenn Sie die **SMTP**-Einstellungen für den E-Mail-Versand manuell in den Kontoeinstellungen eingeben müssen, verwenden Sie die folgenden Einstellungen:

- **SMTP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort des E-Mail-Accounts ein|
|POP-Server|ssl0.ovh.net|
|Port|465|
|Sicherheitstyp|SSL/TLS|

### POP oder IMAP, was ist der Unterschied? <a name="popimap"></a>

Wenn Sie Ihren E-Mail-Account manuell konfigurieren, werden Sie von Ihrem E-Mail-Client gefragt, ob Sie **POP** (**P**ost **O**ffice **P**rotocol) oder **IMAP** (**I**nternet **M**essage **A**ccess **P**rotocol) verwenden möchten. Lokalisieren Sie die POP- und IMAP-Protokolle in der Konfiguration Ihres E-Mail-Accounts.

Bei der Konfiguration Ihres E-Mail-Clients müssen Sie die Informationen des **eingehenden Servers** angeben, um E-Mails zu empfangen, und den **ausgehenden Server**, um E-Mails zu senden. Für den Versand von E-Mails gibt es keine Wahl, sondern es wird **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) verwendet. Für den Empfang haben Sie somit die Wahl zwischen **POP** oder **IMAP**.

![mxplan](images/mxplan-android-popimap-01.png){.thumbnail}

Um den Unterschied zwischen der Verwendung des POP- und IMAP-Protokolls zu verstehen, werden wir die Elemente aufteilen, aus denen die Verarbeitung Ihrer empfangenen E-Mails besteht:

1. **Ihr Gerät**: Ein Computer, Smartphone oder Tablet.

2. **Ihr E-Mail-Client**: Software zur Verwaltung Ihrer E-Mails.

3. **Empfangsprotokoll**: Wahl, wie E-Mails auf Ihrem Gerät abgerufen werden. Ihre Wahl wirkt sich auf andere Geräte aus, die denselben E-Mail-Account nutzen.
    - **IMAP**: Ihr E-Mail-Client fragt den E-Mail-Server ab und lädt die E-Mails auf Ihr Gerät herunter. Wenn Sie eine ungelesene E-Mail anzeigen, wird diese vom Server standardmäßig als „gelesen“ markiert. Andere IMAP-fähige Geräte können diesen Status sehen und die E-Mail besteht, bis sie auf einem der Geräte gelöscht wurde.
    - **POP**: Ihr E-Mail-Client fragt den E-Mail-Server ab und lädt die E-Mails auf Ihr Gerät herunter. Standardmäßig wird die Nachricht vom Server gelöscht, sobald sie auf Ihr Gerät heruntergeladen wurde. Daher können andere Geräte, die mit diesem E-Mail-Account verbunden sind, diese E-Mail nicht mehr anzeigen.

![mxplan](images/mxplan-android-popimap-02.png){.thumbnail}

> [!primary]
>
> Diese Beschreibung ist eine Zusammenfassung der Standardfunktionen beider Protokolle. Sie können auch **POP** so einstellen, dass E-Mails beim Abholen nicht gelöscht werden. Die Ausführungen ober dienen dazu, die native Funktionsweise dieser beiden Protokolle zu beschreiben und Ihren Aufwand zu minimieren.

## Weiterführende Informationen

[Konfiguration Ihres E-Mail Pro Accounts in Android über die Gmail-App](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android)

[Konfiguration Ihres Exchange Accounts in Android über die Gmail-App](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.