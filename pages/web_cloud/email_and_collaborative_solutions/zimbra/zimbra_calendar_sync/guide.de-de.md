---
title: "Zimbra - CalDAV-Kalender in einer Anwendung synchronisieren"
excerpt: "Erfahren Sie hier, wie Sie einen Zimbra-Kalender über das CalDAV-Protokoll zu einer Anwendung hinzufügen"
updated: 2026-01-29
---

<style>
.w-400 {
  max-width:400px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Ziel

Zimbra-E-Mail-Accounts können auf verschiedenen E-Mail-Programmen eingerichtet werden. Damit können Sie Ihre E-Mail-Adresse von dem Gerät Ihrer Wahl nutzen. Zimbra enthält die Funktion des Online-Kalenders, der über ein mit dem CalDAV-Protokoll kompatibles Programm synchronisiert werden kann.

**Diese Anleitung erklärt, wie Sie über das CalDAV-Protokoll einen Zimbra-Kalender zu einer Anwendung hinzufügen.**

## Voraussetzungen

- Sie haben einen E-Mail-Account auf der OVHcloud Zimbra E-Mail-Lösung abonniert.
- Sie haben eine Anwendung installiert, die das CalDAV-Kalenderprotokoll unterstützt.
- Sie haben die Login-Daten des E-Mail-Accounts, dessen Kalender Sie einrichten möchten.

## In der praktischen Anwendung

### Was ist CalDAV?

CalDAV ist ein Protokoll zur Bearbeitung von Kalendern und Aufgaben im Internet. Zimbra-E-Mail-Adressen verfügen über Kalender, die das CalDAV-Protokoll nutzen.

Die Konfiguration des CalDAV-Kalenders entspricht der einer E-Mail-Adresse und erfordert eine Anwendung, die dieses Protokoll unterstützt.

### Kalender teilen

> [!warning]
>
> Dieses Kapitel gilt ausschließlich für die Angebote [Zimbra Starter und Pro](/links/web/emails), die die Funktion zum Teilen von Kalendern besitzen.

#### Öffentliches Teilen im ICS-Format

> [!primary]
>
> Das hier verwendete ICS-Dateiformat ist statisch: Die Version der Datei entspricht dem Zeitpunkt, zu dem der Benutzer den Link generiert. Das bedeutet, dass ein Ereignis, das nach der Generierung des Links zur ICS-Datei hinzugefügt wird, weder in der Datei noch im importierten Kalender erscheinen wird. Es gibt keine Synchronisation.

Um einen ICS-Datei-Link zu generieren, folgen Sie den unten stehenden Schritten:

- Melden Sie sich bei Ihrem Zimbra-E-Mail-Account über den [Webmail](/links/web/email) an.
- Gehen Sie zum Tab `Kalender`{.action}.
- Klicken Sie mit der rechten Maustaste auf den betreffenden Kalender und klicken Sie auf `Teilen...`{.action}.
- Klicken Sie auf den Tab `Öffentlich machen`{.action}.
- Aktivieren Sie das Feld `Öffentlichen Link generieren`{.action}, kopieren Sie den Link oder öffnen Sie ihn in einem neuen Tab und laden Sie die ICS-Datei herunter.

![zimbra_app](images/zimbra-calendar-webmail-01.png){.thumbnail .w-600 .h-600}

Die heruntergeladene ICS-Datei kann in einen vorhandenen oder neuen Kalender importiert werden.

#### Einladung per E-Mail zum Teilen

Im Gegensatz zum Teilen der ICS-Datei ermöglicht das Teilen per E-Mail-Einladung, einen Kalender dynamisch mit anderen E-Mail-Adressen desselben Domainnamens zu teilen. Ereignisse und Aktionen auf dem geteilten Kalender werden synchronisiert.

> [!warning]
>
> Nur E-Mail-Adressen desselben Domainnamens können diesen Art von Teilen empfangen.

Um das Teilen mit einer anderen E-Mail-Adresse zu starten:

- Melden Sie sich bei Ihrem Zimbra-E-Mail-Account über den [Webmail](/links/web/email) an.
- Gehen Sie zum Tab `Kalender`{.action}.
- Klicken Sie mit der rechten Maustaste auf den betreffenden Kalender und klicken Sie auf `Teilen...`{.action}.
- Klicken Sie auf den Tab `Per E-Mail einladen`{.action}.

![zimbra_app](images/zimbra-calendar-webmail-02.png){.thumbnail .w-600 .h-600}

Folgen Sie den unten stehenden Schritten, um einen Kalender mit einem oder mehreren E-Mail-Accounts zu teilen:

> [!tabs]
> **Schritt 1**
>>
>> Geben Sie die E-Mail-Adresse ein, mit der Sie den Kalender teilen möchten.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-03.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 2**
>>
>> Legen Sie die Berechtigungen des E-Mail-Accounts für den Kalender fest und klicken Sie auf `Hinzufügen`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-04.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 3**
>>
>> Wiederholen Sie Schritt 1 und 2, um den gleichen Kalender mit weiteren E-Mail-Adressen desselben Domainnamens zu teilen, und klicken Sie auf `Speichern`{.action}.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-05.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 4**
>>
>> Eine E-Mail wird an jeden Empfänger des Teilschritts gesendet und ermöglicht es, den geteilten Kalender anzunehmen oder abzulehnen. Sie enthält auch die auf diesen Kalender vergebenen Rechte.
>>
>> ![zimbra_app](images/zimbra-calendar-webmail-06.png){.thumbnail .w-600 .h-600}

> [!primary]
>
> Wenn Sie Ihren Kalender mit einem E-Mail-Account desselben Domainnamens teilen, das Roundcube (Angebot MX Plan) oder OWA (Angebote E-Mail Pro und Exchange) verwendet, erhält die Empfänger-E-Mail-Adresse einen Link zum Zimbra-Webmail, der es ermöglicht, ein "Gast"-Account zu erstellen, um den Kalender anzuzeigen.
>
> ![zimbra_app](images/zimbra-calendar-webmail-07.png){.thumbnail .w-600 .h-600}


### CalDAV-Kalender auf kompatibler Software konfigurieren

Wir haben stabile Anwendungen ausgewählt, die mit dem CalDAV-Protokoll kompatibel sind.

- **Für Windows**: Folgen Sie dem Abschnitt [Kalender auf Thunderbird hinzufügen](#thunderbird).
- **Für macOS**: Folgen Sie dem Abschnitt [Kalender auf macOS hinzufügen](#apple-macos) oder [Kalender auf Thunderbird hinzufügen](#thunderbird).
- **Für Linux**: Folgen Sie dem Abschnitt [Kalender auf Thunderbird hinzufügen](#thunderbird).
- **Für iPhone und iPad**: Folgen Sie dem Abschnitt [Kalender auf iOS und iPad hinzufügen](#apple-ios).
- **Für Android**: Folgen Sie der Anleitung [Konfiguration Ihres E-Mail-Accounts auf der Zimbra Mobil-App](/pages/web_cloud/email_and_collaborative_solutions/zimbra/mail_app_zimbra_for_android_ios).

> [!warning]
>
> Android-Geräte bieten derzeit keine native Unterstützung für das CalDAV-Protokoll, und es gibt derzeit auch keine stabile Drittanbieter-App, die Zimbra-Kalender für unsere Angebote synchronisieren kann.
>
> Nur die Zimbra-App, basierend auf dem Webmail, kann Online-Kalender auf einem Android-Gerät anzeigen.

#### Allgemeine Einstellungen für einen Zimbra CalDAV-Kalender <a name="general-settings"></a>

Wenn Sie eine Anwendung verwenden, die mit dem CalDAV-Protokoll kompatibel ist, beachten Sie die allgemeinen Einstellungen für einen Zimbra CalDAV-Kalender:

- **Server / Adresse / URL**: Geben Sie den Wert `zimbra1.mail.ovh.net` ein. Für manche Programme muss das Protokoll "https" zur Adresse hinzugefügt werden. Geben Sie den Wert `https://zimbra1.mail.ovh.net` ein.
- **Benutzername**: Geben Sie die vollständige E-Mail-Adresse für den Kalender ein.
- **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein, die mit dem Kalender verknüpft ist.

### Einen Kalender auf Thunderbird hinzufügen <a name="thunderbird"></a>

> [!primary]
>
> [Mozilla Thunderbird](https://www.thunderbird.net/) ist für Windows, macOS und Linux verfügbar. Die folgenden Installationsschritte wurden unter macOS ausgeführt, gelten jedoch für Windows und Linux gleichermaßen.

Öffnen Sie Thunderbird und klicken Sie auf das Symbol "Kalender" in der Spalte links.

Folgen Sie den Installationsschritten, indem Sie auf die Tabs klicken:

> [!tabs]
> **Schritt 1**
>>
>> - Klicken Sie auf `Neuer Kalender`{.action} am unteren Rand der Kalenderspalte, oder klicken Sie mit der rechten Maustaste auf einen vorhandenen Kalender, und wählen Sie `Neuer Kalender`{.action} aus dem Drop-down-Menü.
>> - Wählen Sie `Im Netzwerk` und klicken Sie auf `Weiter`{.action}.
>>
>> ![Zimbra_App](images/zimbra-calendar-thunderbird01.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 2**
>>
>> Geben Sie die Anmeldeinformationen für den Kalender ein:
>>
>> - **Benutzername**: Geben Sie die vollständige E-Mail-Adresse für den Kalender ein.
>> - **Adresse**: Geben Sie den Wert `zimbra1.mail.ovh.net` ein.
>> - **Diese Adresse fordert keine Login-Daten an**: Lassen Sie dieses Feld deaktiviert, werden Sie aufgefordert, das Passwort des oben angegebenen E-Mail-Accounts einzugeben.
>> - **Offlineunterstützung**: Sie können diese Option aktiviert lassen.
>>
>> Klicken Sie auf `Kalender suchen`{.action}, um die Kalendersynchronisierung zu starten. Geben Sie im angezeigten Fenster das Passwort des E-Mail-Accounts ein, die mit dem Benutzernamen verbunden ist, und bestätigen Sie Ihre Eingabe.
>>
>> ![Zimbra_App](images/zimbra-calendar-thunderbird02.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 3**
>>
>> Das folgende Fenster wird mit den CalDAV-Elementen angezeigt, die in einem Zimbra E-Mail-Account vorhanden sind. Markieren Sie die Elemente, die im Thunderbird-Kalender angezeigt werden sollen, und klicken Sie auf `Verbinden`{.action}, um die Konfiguration abzuschließen.
>>
>> ![Zimbra_App](images/zimbra-calendar-thunderbird03.png){.thumbnail .w-600 .h-600}
>>

### Einen Kalender auf iOS und iPadOS hinzufügen <a name="apple-ios"></a>

> [!warning]
>
> Die unten stehende Konfiguration wurde von einem iPhone durchgeführt, aber gilt auch für iPad.

Um einen CalDAV Kalender zur Apple `Kalender` App auf Ihrem iPhone oder iPad hinzuzufügen, folgen Sie den Installationsschritten und klicken Sie auf die Tabs unten:

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie zu den `Einstellungen`{.action} Ihres iPhones oder iPads. Gehen Sie zum Abschnitt `Kalender`{.action}, indem Sie im Menü einen Bildlauf durchführen oder "Kalender" in die Suchleiste der Einstellungen eingeben.
>>
>> ![Zimbra_App](images/zimbra-calendar-ios01.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 2**
>>
>> Gehen Sie zu `Kalender-Accounts`{.action} und wählen Sie `Account hinzufügen`{.action}.
>>
>> ![Zimbra_App](images/zimbra-calendar-ios02.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 3**
>>
>> Wählen Sie `Andere`{.action} und dann `CalDAV-Account hinzufügen`{.action} im Bereich "KALENDER".
>>
>> ![Zimbra_App](images/zimbra-calendar-ios03.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 4**
>>
>> Geben Sie die Anmeldeinformationen für den Kalender ein:
>>
>> - **Server**: Geben Sie den Wert `zimbra1.mail.ovh.net` ein.
>> - **Benutzername**: Geben Sie die vollständige E-Mail-Adresse für den Kalender ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **Description**: Fügen Sie dem Kalender eine Beschreibung hinzu.
>>
>> Bestätigen Sie mit der Schaltfläche `Weiter`{.action}.
>>
>> Wählen Sie die Anwendungen `Kalender` und `Erinnerung` aus, die die Zimbra-Kalenderinformationen verwenden.
>>
>> ![Zimbra_App](images/zimbra-calendar-ios04.png){.thumbnail .w-600 .h-600}
>>

### Einen Kalender auf macOS hinzufügen <a name="apple-macos"></a>

Um einen CalDAV Kalender zur Apple `Kalender` App auf Ihrem Mac hinzuzufügen, starten Sie die App und folgen Sie den Installationsschritten, indem Sie auf die Tabs klicken:

> [!tabs]
> **Schritt 1**
>>
>> Klicken Sie in der oberen Menüleiste auf `Kalender`{.action} und dann auf `Account hinzufügen`{.action}. Wählen Sie `CalDAV-Account hinzufügen` und klicken Sie auf `Weiter`{.action}.
>>
>> ![Zimbra_App](images/zimbra-calendar-macos01.png){.thumbnail .w-600 .h-600}
>>
> **Schritt 2**
>>
>> Geben Sie im Konfigurationsfenster die folgenden Informationen ein:
>>
>> - **Account-Typ**: Wählen Sie `Manuell` aus dem Drop-down-Menü.
>> - **Benutzername**: Geben Sie die vollständige E-Mail-Adresse für den Kalender ein.
>> - **Passwort**: Geben Sie das Passwort des E-Mail-Accounts ein.
>> - **Serveradresse**: Geben Sie den Wert `zimbra1.mail.ovh.net` ein.
>>
>> Klicken Sie abschließend auf `Anmelden`{.action}.
>>
>> ![Zimbra_App](images/zimbra-calendar-macos02.png){.thumbnail .w-600 .h-600}
>>

## Weiterführende Informationen <a name="go-further"></a>

[Erste Schritte mit Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

[Zimbra-E-Mail-Adresse auf einem E-Mail-Client konfigurieren](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

[Zimbra Webmail verwenden](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_zimbra)

[OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
