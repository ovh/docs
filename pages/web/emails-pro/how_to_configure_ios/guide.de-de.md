---
title: 'Konfiguration von E-Mail Pro auf iPhone oder iPad'
slug: iphone-konfiguration
routes:
    canonical: 'https://docs.ovh.com/de/emails/mail-konfiguration-iphone-ios-91/'
excerpt: 'Erfahren Sie hier, wie Sie einen E-Mail Pro Account via Mail App auf einem iPhone oder iPad einrichten'
section: 'Konfiguration des E-Mail-Clients'
order: 3
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 21.05.2020**

## Ziel

E-Mail Pro Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden.

**In dieser Anleitung erfahren Sie, wie Sie einen E-Mail Pro Account via Mail App auf einem iPhone oder iPad einrichten.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>

## Voraussetzungen

- Sie verfügen über einen [E-Mail Pro Account](https://www.ovh.de/emails/email-pro/){.external}.
- Die Mail App ist auf Ihrem iOS Gerät installiert.
- Sie haben die Login-Daten der E-Mail-Adresse, die Sie einrichten möchten.

## Beschreibung

### Schritt 1: Account hinzufügen

> [!primary]
>
> In unserem Beispiel verwenden wir den Servernamen: pro**?**.mail.ovh.net Ersetzen Sie das "?" durch die Zahl für den Server Ihres E-Mail Pro Dienstes.
>
> Diese Zahl finden Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}  im Bereich `Web Cloud`{.action} und `E-Mail Pro`{.action} in der linken Spalte. Den Servernamen sehen Sie im Rahmen  **Verbindung** des Tabs `Allgemeine Informationen`{.action}.
>

Gehen Sie auf den Bildschirm Ihres Geräts und klicken Sie auf `Einstellungen`{.action} (Zahnradsymbol). Je nach Ihrer iOS-Version erfolgt das Hinzufügen eines Accounts auf verschiedene Arten:

- **iOS 7, 8, 9 und 10**: tippen Sie auf `Mail, Kontakte, Kalender`{.action} und dann `auf Account hinzufügen`{.action}. Als Accounttyp wählen Sie `Andere`{.action}, und klicken anschließend auf `Mail-Account hinzufügen`{.action}. Gehen Sie dann zu Schritt 5 der folgenden Tabelle.

- **iOS 11**: tippen Sie `auf Accounts und Passwörter`{.action} und dann auf `Account hinzufügen`{.action}. Als Accounttyp wählen Sie `Andere`{.action}, und klicken anschließend auf `Mail-Account hinzufügen`{.action}. Gehen Sie dann zu Schritt 5 der folgenden Tabelle.

- **Für die aktuellen Versionen**: Folgen Sie den Anweisungen in der folgenden Tabelle.

| | |
|---|---|
|![Exchange](images/configuration-mail-ios-step01.gif){.thumbnail}|1. In `Einstellungen` gehen Sie auf `Mail`. <br><br> 2. Tippen Sie auf `Accounts`.<br><br> 3. Tippen Sie auf `Account hinzufügen`.<br><br> 4. Wählen Sie unten `Anderes`.|
|5. Tippen Sie auf `Mail-Account hinzufügen`.<br><br>6. Geben Sie **Ihren** Namen, Ihre **E-Mail**-Adresse, Ihr **Passwort** und eine **Beschreibung** Ihres Accounts an.<br><br>7. Drücken Sie auf `Weiter`.|![Exchange](images/configuration-mailpro-ios-step02.png){.thumbnail}|
|![Exchange](images/configuration-mailpro-ios-step03.png){.thumbnail}|8. Wählen Sie den Typ des `IMAP`- oder `POP`-Empfangsservers.<br><br>Geben Sie in den Abschnitten `EMPFANGS SERVER` und `VERSENDER SERVER` trotz der Angabe "optional" folgende Angaben ein: <br>- Hostname pro**?**.mail.ovh.net( ersetzen **?** durch die Servernummer Ihrer E-Mail Pro) <br>- **Ihre vollständige** E-Mail-Adresse im Benutzernamen <br>- das Passwort Ihrer E-Mail-Adresse|

Am Ende der Konfiguration stellen Sie sicher, dass Sie `Mail`{.action} ausgewählt lassen, damit die Anwendung diesen Account verwenden kann, und klicken Sie dann auf `Speichern`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für unsere E-Mail Pro Lösung:

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Eingangsserver|pro**?**.mail.ovh.net|Ja|993|
|Ausgangsserver|pro**?**.mail.ovh.net|Ja|587|

### E-Mail-Adresse verwenden

Wenn Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung mit [kollaborativen Funktionen](https://www.ovh.de/emails/){.external}  unter <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

> [!primary]
>
> Bei Schwierigkeiten beim Empfang oder beim Versand von E-Mails konsultieren Sie bitte unsere [FAQ zu den OVHcloud E-Mail-Diensten](https://docs.ovh.com/de/emails/e-mails-faq/).
>

## Weiterführende Informationen

[Konfiguration Ihrer E-Mail-Adresse aus dem MX Plan Angebot oder aus einem Webhosting Angebot auf iPhone oder iPad](https://docs.ovh.com/de/emails/mail-konfiguration-iphone-ios-91/)

[Konfiguration von Exchange auf iPhone oder iPad](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_automatische_konfiguration_in_ios_iphone_-_ipad/)

[E-Mails FAQ](https://docs.ovh.com/de/emails/e-mails-faq/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.