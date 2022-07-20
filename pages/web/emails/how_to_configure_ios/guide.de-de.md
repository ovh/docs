---
title: 'Konfiguration Ihrer E-Mail-Adresse auf iPhone oder iPad'
slug: mail-konfiguration-iphone-ios-91
excerpt: 'Erfahren Sie hier, wie Sie eine MX Plan Adresse auf iPhone oder iPad einrichten'
section: 'E-Mail Clients'
order: 7
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 20.07.2022**

## Ziel

E-Mail-Adressen aus dem MX Plan Angebot können auf verschiedenen, kompatiblen E-Mail-Clients und -Applikationen eingerichtet werden. So können Sie Ihr bevorzugtes Gerät für Versand und Empfang Ihrer E-Mails verwenden.

**In dieser Anleitung erfahren Sie, wie Sie eine MX Plan E-Mail-Adresse über die Mail App auf einem iPhone oder iPad einrichten.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben so weit wie möglich unterstützen. Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der [OVHcloud Community](https://community.ovh.com/en/).
>

## Voraussetzungen

- Sie verfügen über eine MX Plan E-Mail-Adresse (als MX Plan Dienst oder in einem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) enthalten).
- Sie haben keine ausstehenden [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) und [Verlängerungen](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).
- Die Mail App ist auf Ihrem iOS Gerät installiert.
- Sie verfügen über Anmeldeinformationen für die E-Mail-Adresse, die Sie konfigurieren möchten.

## In der praktischen Anwendung

### Account hinzufügen

Klicken Sie vom Homescreen des Geräts aus auf `Einstellungen`{.action} (Zahnradsymbol). Je nach Ihrer iOS-Version erfolgt das Hinzufügen eines Accounts auf verschiedene Weise:

- **iOS 7, 8, 9 und 10**: Tippen Sie auf `Mail, Kontakte, Kalender`{.action} und dann auf `Account hinzufügen`{.action}. Als Accounttyp wählen Sie `Andere`{.action}, und klicken anschließend auf `Mail-Account hinzufügen`{.action}. Gehen Sie dann zu Schritt 5 der nachfolgenden Tabelle.

- **iOS 11**: Tippen Sie auf `Accounts und Passwörter`{.action} und dann auf `Account hinzufügen`{.action}. Als Accounttyp wählen Sie `Andere`{.action}, und klicken anschließend auf `Mail-Account hinzufügen`{.action}. Gehen Sie dann zu Schritt 5 der nachfolgenden Tabelle.

- **Für die aktuellen Versionen**: Folgen Sie den Anweisungen in der nachfolgenden Tabelle.

| | |
|---|---|
|![iPhone](images/configuration-mail-ios-step01.gif){.thumbnail}|1. In `Einstellungen` gehen Sie auf `Mail`. <br><br> 2. Tippen Sie auf `Accounts`.<br><br> 3. Tippen Sie auf `Account hinzufügen`.<br><br> 4. Wählen Sie unten `Andere`.|
|5. Tippen Sie auf `Mail-Account hinzufügen`.<br><br>6. Geben Sie **Name**, **E-Mail-Adresse**, **Passwort** und eine **Beschreibung** Ihres Accounts ein.<br><br>7. Drücken Sie auf `Weiter`.|![iPhone](images/configuration-mail-ios-step02.png){.thumbnail}|
|![iPhone](images/configuration-mail-ios-step03.png){.thumbnail}|8. Wählen Sie `IMAP` (empfohlen) oder `POP` aus.<br><br>Geben Sie als `INCOMING` und `OUTGOING` (trotz der Angabe "optional") folgende Werte ein: <br>- Hostname **ssl0.ovh.net** <br>- Ihre vollständige **E-Mail-Adresse** als Benutzername <br>- das Passwort Ihres E-Mail-Accounts|

Stellen Sie am Ende der Konfiguration sicher, dass Sie `Mail`{.action} aktiviert lassen, damit die Anwendung diesen Account verwenden kann, und klicken Sie dann auf `Speichern`{.action}.

Sie können eine Test-E-Mail versenden, um zu überprüfen, ob der Account korrekt eingerichtet ist.

Wenn manuelle Änderungen in den Account-Einstellungen erforderlich sind, verwenden Sie die folgenden technischen Einstellungen für MX Plan E-Mail-Accounts:

- **IMAP-Konfiguration**

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|Ja|993|
|Ausgangsserver|ssl0.ovh.net|Ja|465|

- **POP-Konfiguration**

|Servertyp|Servername|SSL|Port|
|---|---|---|---|
|Eingangsserver|ssl0.ovh.net|Ja|995|
|Ausgangsserver|ssl0.ovh.net|Ja|465|

### E-Mail-Adresse verwenden

Sobald Ihre E-Mail-Adresse eingerichtet ist, können Sie sie verwenden. Sie können ab sofort E-Mails versenden und empfangen.

OVHcloud bietet auch eine Webanwendung an, mit der Sie über Ihren Webbrowser auf Ihre E-Mail-Adresse zugreifen können: <https://www.ovh.de/mail/>. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.

> [!primary]
>
> Bei Schwierigkeiten beim Empfang oder beim Versand von E-Mails konsultieren Sie bitte unsere [FAQ zu den OVHcloud E-Mail-Diensten](../e-mails-faq/).
>

## Weiterführende Informationen

[Konfiguration von Exchange auf iPhone oder iPad](../../microsoft-collaborative-solutions/exchange_20132016_automatische_konfiguration_in_ios_iphone_-_ipad/)

[Konfiguration von E-Mail Pro auf iPhone oder iPad](../../emails-pro/iphone-konfiguration/)

[E-Mails FAQ](../e-mails-faq/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
