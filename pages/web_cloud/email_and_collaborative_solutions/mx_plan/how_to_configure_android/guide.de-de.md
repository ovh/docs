---
title: "MXplan - Konfiguration einer E-Mail-Adresse in Gmail für Android"
excerpt: "Hier erfahren Sie, wie Sie eine MX Plan Adresse in Android über die Gmail-App einrichten"
updated: 2023-12-15
---

<style>
.w-400 {
  max-width:400px !important;
}
</style>

## Ziel

E-Mail-Adressen aus dem MX Plan Angebot können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Versand und Empfang Ihrer E-Mails verwenden. In dieser Anleitung erfahren Sie, wie Sie eine MXplan-E-Mail-Adresse über die Gmail-App auf Android-Geräten einrichten.

**Hier erfahren Sie, wie Sie eine MX Plan E-Mail-Adresse in Android über die Gmail-App einrichten.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.

## Voraussetzungen

- Sie besitzen eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder in einem [OVHcloud Webhosting Angebot](https://www.ovhcloud.com/de/web-hosting/) enthalten).
- Die Gmail-App ist auf Ihrem Gerät installiert. Sie können diese über den Google Play Store installieren, wenn sie noch nicht vorhanden ist.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

> [!primary]
>
> Diese Anleitung wurde auf einem Gerät mit Android Version 13 erstellt.
>

## In der praktischen Anwendung

### So fügen Sie Ihren E-Mail-Account hinzu

Tippen Sie auf dem Bildschirm Ihres Geräts auf die `Gmail`{.action}-App.

![mxplan](images/mxplan-android-00.png){.thumbnail .w-400}

Das Hinzufügen eines Accounts erfolgt anders, **wenn noch kein Account eingerichtet** ist oder **wenn bereits ein Account eingerichtet** wurde. Wählen Sie die Registerkarte für eine der beiden Situationen aus:

> [!tabs]
> **Erste Konfiguration**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-first.png){.thumbnail}|Wählen Sie `E-Mail-Adresse hinzufügen aus`{.action}|
>>
> **Vorhandene Konfiguration**
>>
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-existing.png){.thumbnail}|1 . Gehen Sie zum Menü oben links auf dem Bildschirm<br><br>2 . Wählen Sie `Einstellungen aus`{.action}<br><br>3 . Wählen Sie `Konto hinzufügen aus`{.action}|
>>

Gehen Sie wie folgt vor, indem Sie die folgenden Registerkarten durchsuchen:

>  [!tabs]
> **Schritt 1**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-01.png){.thumbnail}|Wählen Sie im Menü „E-Mail-Kontotypen“ die Option „`Andere`{.action}“.|
>>
> **Schritt 2**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-02.png){.thumbnail}|Geben Sie Ihre E-Mail-Adresse ein.|
>>
> **Schritt 3**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-03.png){.thumbnail}|Wählen Sie das Protokoll für den E-Mail-Empfang aus. Es wird empfohlen, `Personal (IMAP) auszuwählen`{.action}<br><br>Am Ende dieser Anleitung finden Sie [weitere Informationen zu POP und IMAP](#popimap), um die Unterschiede zu verstehen.|
>>
> **Schritt 4**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-04.png){.thumbnail}|Geben Sie das Passwort Ihrer E-Mail-Adresse ein. |
>>
> **Schritt 5**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-05.png){.thumbnail}|Füllen Sie die „**Eingangsservereinstellungen**“ aus<br><br>- **Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **Passwort**: Das Passwort Ihrer E-Mail-Adresse<br>- **Server** : Geben Sie **ssl0.ovh.net** ein |
>>
> **Schritt 6**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-06.png){.thumbnail}|Füllen Sie die „**Einstellungen für Ausgangsserver**“ aus<br><br>- **Benutzername**: Ihre vollständige E-Mail-Adresse<br>- **Passwort**: Das Passwort Ihrer E-Mail-Adresse<br> - SMTP **Server** : Geben Sie **ssl0.ovh.net** ein|
>>
> **Schritt 7**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-07.png){.thumbnail}|Wählen Sie aus, wie oft Ihre E-Mails synchronisiert werden sollen.|
>>
> **Schritt 8**
>> | | |
>> |---|---|
>> |![mxplan](images/mxplan-android-08.png){.thumbnail}|Bestimmen Sie den Anzeigenamen Ihrer E-Mail-Adresse in der Gmail-App und tippen Sie dann auf `Weiter`{.action}|
>>

Wenn Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails über Ihre Gmail-App versenden und empfangen.

> [!success]
>
> Eine OVHcloud Webanwendung, mit der Sie über einen Webbrowser auf Ihre E-Mail-Adresse zugreifen können, ist verfügbar unter <https://www.ovh.com/de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

### POP-, IMAP- und SMTP-Einstellungen

Für den Empfang von E-Mails empfehlen wir Ihnen bei der Auswahl des Kontotyps die Verwendung von **IMAP**. Sie können auch **POP** auswählen. Um zu verstehen, wie diese funktionieren, lesen Sie unseren Abschnitt [„POP oder IMAP, was ist der Unterschied?“](#popimap)

- **POP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|POP-Server|ssl0.ovh.net|
|Port|995|
|Sicherheitstyp|SSL/TLS|

- **IMAP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|POP-Server|ssl0.ovh.net|
|Port|993|
|Sicherheitstyp|SSL/TLS|

Wenn Sie die **SMTP**-Einstellungen für den E-Mail-Versand manuell in den Kontoeinstellungen eingeben müssen, verwenden Sie die folgenden Einstellungen:

- **SMTP-Konfiguration**

|Information|Beschreibung|
|---|---|
|Nutzername|Geben Sie die **vollständige E-Mail-Adresse ein**|
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein|
|POP-Server|ssl0.ovh.net|
|Port|465|
|Sicherheitstyp|SSL/TLS|

### POP oder IMAP, was ist der Unterschied? <a name="popimap"></a>

Wenn Sie Ihre E-Mail-Adresse manuell konfigurieren, werden Sie von Ihrem E-Mail-Client gefragt, ob Sie **POP** (**P**ost **O**ffice **P**rotocol) oder **IMAP** (**I**nternet **M**essage **A**ccess **P**rotocol) verwenden möchten. Um dies zu verstehen, lokalisieren Sie die POP- und IMAP-Protokolle in der Konfiguration Ihrer E-Mail-Adresse.

Bei der Konfiguration Ihres E-Mail-Clients müssen Sie die Informationen des **eingehenden Servers** angeben, um E-Mails zu empfangen, und den **ausgehenden Server**, um E-Mails zu senden. Für den Versand von E-Mails gibt es keine Wahl, sondern es wird das **SMTP** (**S**imple **M**ail **T**ransfer **P**rotocol) verwendet. Für den Empfang haben Sie somit die Wahl zwischen **POP** oder **IMAP**.

![mxplan](images/mxplan-android-popimap-01.png){.thumbnail}

Um den Unterschied zwischen der Verwendung des POP- und IMAP-Protokolls zu verstehen, werden wir die Elemente aufteilen, aus denen die Verarbeitung Ihrer empfangenen E-Mails besteht:

1. **Ihr Gerät** : ein Computer, Smartphone oder Tablet. Dies ist Ihr Beratungsmedium.

2. **Ihr E-Mail-Client**: Software oder Applikation zur Verwaltung Ihrer E-Mails. Die Wahl der Option bestimmt, wie ergonomisch und funktional der E-Mail-Zugriff sein muss.

3. **Empfangsprotokoll** : Wahl, wie E-Mails auf Ihrem Gerät abgerufen werden. Ihre Wahl wirkt sich auf andere Geräte aus, die denselben E-Mail-Account nutzen.
    - **IMAP** : Ihr E-Mail-Client fragt den E-Mail-Server ab und lädt die E-Mails auf Ihr Gerät herunter. Wenn Sie eine ungelesene E-Mail anzeigen, wird diese vom Server standardmäßig als „gelesen“ markiert. Andere IMAP-fähige Geräte können diesen Status sehen und diese E-Mail sehen, bis sie auf einem der Geräte gelöscht wurde.
    - **POP** : Ihr E-Mail-Client fragt den E-Mail-Server ab und lädt die E-Mails auf Ihr Gerät herunter. Standardmäßig wird die Nachricht vom Server gelöscht, sobald sie auf Ihr Gerät heruntergeladen wurde. Daher können andere Geräte, die mit dieser E-Mail-Adresse verbunden sind, diese E-Mail nicht anzeigen.

![mxplan](images/mxplan-android-popimap-02.png){.thumbnail}

> [!primary]
>
> Diese Beschreibung ist eine Zusammenfassung, sie stellt die Standardfunktionen beider Protokolle dar. Sie können den POP so einstellen, dass E-Mails beim Abholen nicht gelöscht werden. Das Ziel hier ist es, die native Funktionsweise dieser beiden Protokolle zu beschreiben und zusätzliche Manipulationen zu vermeiden, um Ihren Anforderungen gerecht zu werden.

## Weiterführende Informationen

[Konfiguration Ihres E-Mail Pro Accounts in Android über die Gmail-App](/pages/web_cloud/email_and_collaborative_solutions/email_pro/how_to_configure_android)

[Konfiguration Ihres Exchange Accounts in Android über die Gmail-App](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/how_to_configure_android)
/
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.