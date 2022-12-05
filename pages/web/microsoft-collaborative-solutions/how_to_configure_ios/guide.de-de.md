---
title: 'Konfiguration von Exchange auf iPhone oder iPad'
excerpt: 'Erfahren Sie hier, wie Sie Ihren Exchange Account via Mail App auf einem iPhone oder iPad einrichten'
slug: exchange_20132016_automatische_konfiguration_in_ios_iphone_-_ipad
routes:
    canonical: 'https://docs.ovh.com/de/emails/mail-konfiguration-iphone-ios-91/'
legacy_guide_number: g1272
section: Konfiguration von Exchange auf kompatiblen Smartphones/Tablets
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 21.05.2020**

## Ziel

Exchange Accounts können auf verschiedenen, kompatiblen E-Mail-Clients eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Ihre E-Mail-Adressen verwenden.

**Diese Anleitung erklärt, wie Sie Ihren Exchange Account über die Mail App auf einem iPhone oder iPad einrichten.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben so weit wie möglich unterstützen. Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/).
>

## Voraussetzungen

- Sie verfügen über einen [Exchange E-Mail Account](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external}.
- Die Mail App ist auf Ihrem iOS Gerät installiert.
- Sie verfügen über Anmeldeinformationen für die E-Mail-Adresse, die Sie konfigurieren möchten.

## In der praktischen Anwendung

### Account hinzufügen <a name="addaccount"></a>

> [!primary]
>
> In unserem Beispiel verwenden wir als Serverbezeichnung: ex**?**.mail.ovh.net. Das "?" muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Email Pro Dienst ersetzt werden.
>
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), wenn Sie unter `Microsoft`{.action} und `Exchange`{.action} den Dienst auswählen: Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
>

Klicken Sie vom Homescreen des Geräts aus auf `Einstellungen`{.action} (Zahnradsymbol). Je nach Ihrer iOS-Version erfolgt das Hinzufügen eines Accounts auf verschiedene Weise:

- **iOS 7, 8, 9 und 10**: Tippen Sie auf `Mail, Kontakte, Kalender`{.action} und dann auf `Account hinzufügen`{.action}. Als Accounttyp wählen Sie `Andere`{.action}, und klicken anschließend auf `Mail-Account hinzufügen`{.action}. Gehen Sie dann zu Schritt 5 der nachfolgenden Tabelle.

- **iOS 11**: Tippen Sie `auf Accounts und Passwörter`{.action} und dann auf `Account hinzufügen`{.action}. Als Accounttyp wählen Sie `Andere`{.action}, und klicken anschließend auf `Mail-Account hinzufügen`{.action}. Gehen Sie dann zu Schritt 5 der nachfolgenden Tabelle.

- **Für die aktuellen Versionen**: Folgen Sie den Anweisungen in der nachfolgenden Tabelle.

| | |
|---|---|
|![iPhone](images/configuration-mailex-ios-step01.gif){.thumbnail}|1. In `Einstellungen` gehen Sie auf `Mail`. <br><br> 2. Tippen Sie auf `Accounts`.<br><br> 3. Tippen Sie auf `Account hinzufügen`.<br><br> 4. Wählen Sie `Microsoft Exchange`.|
|5. Geben Sie Ihre **E-Mail-Adresse** und eine **Beschreibung** Ihres Accounts ein und tippen Sie auf `Weiter`.<br><br>6. Wählen Sie `Manuelle Konfiguration` aus.<br><br>|![iPhone](images/configuration-mailex-ios-step02.png){.thumbnail}|
|![iPhone](images/configuration-mailex-ios-step03.png){.thumbnail}|7. Geben Sie an: <br>- Server **ex?.mail.ovh.net** (ersetzen Sie **?** mit der [Nummer Ihres Exchange Servers](#addaccount))<br>- Ihre vollständige **E-Mail-Adresse** als Benutzername <br>- das Passwort Ihrer E-Mail-Adresse|
|8. Stellen Sie sicher, dass Sie `Mail`{.action} aktiviert lassen, damit die Anwendung diesen Account verwenden kann. Die anderen Apps (wie *Kalender* und *Notizen*) können einige der kollaborativen Funktionen von Exchange ebenfalls nutzen.<br><br>9. Tippen Sie auf `Speichern`, um das Hinzufügen Ihres Exchange Accounts abzuschließen.|![Exchange](images/configuration-mailex-ios-step04.png){.thumbnail}|

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

### E-Mail-Adresse verwenden

Sobald Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung mit [kollaborativen Exchange-Funktionen](https://www.ovhcloud.com/de/emails/){.external} an, unter <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

> [!primary]
>
> Bei Schwierigkeiten beim Empfang oder beim Versand von E-Mails konsultieren Sie bitte unsere [FAQ zu den OVHcloud E-Mail-Diensten](../../emails/e-mails-faq/).
>

## Weiterführende Informationen

[Konfiguration Ihrer MX Plan E-Mail-Adresse auf iPhone oder iPad](../../emails/mail-konfiguration-iphone-ios-91/)

[Konfiguration von E-Mail Pro auf iPhone oder iPad](../../emails-pro/iphone-konfiguration/)

[E-Mails FAQ](../../emails/e-mails-faq/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
