---
title: 'Die Zwei-Faktor-Authentifizierung für einen Exchange Account konfigurieren'
excerpt: 'Erfahren Sie hier, wie Sie die Zwei-Faktor-Authentifizierung für einen Exchange Account einrichten'
updated: 2020-03-11
---

## Ziel

Wenn Sie die Sicherheit Ihres Accounts erhöhen möchten, können Sie die Zwei-Faktor-Authentifizierung (2FA) aktivieren. Auf diese Weise können Sie zusätzlich zu Ihrem Passwort einen individuellen Code generieren, der bei jeder Verbindung eingegeben werden muss. Dieser Code wird über eine OTP-App (*one-time password*) erzeugt, die auf Ihrem Smartphone oder Tablet installiert werden muss.

**Diese Anleitung erläutert die Einrichtung der Sicherheitsfunktion "Zwei-Faktor-Authentifizierung" für Ihren Exchange Account.**

## Voraussetzungen

- Sie haben bereits einen [OVHcloud Exchange](https://www.ovhcloud.com/de/emails/) Dienst eingerichtet.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben eine OTP-Applikation auf einem Smartphone oder Tablet mit Android oder iOS installiert.

> [!primary]
>**Die OTP-Applikationen**
>
> Es gibt zahlreiche OTP-Apps für Mobilgeräte. Die folgenden stehen kostenfrei zur Verfügung:
> 
> - für Android: *Free OTP*.
> - für iOS: *OTP Auth*.
> 

## In der praktischen Anwendung

### Erste Konfiguration

#### Schritt 1: Die Zwei-Faktor-Authentifizierung auf der Plattform aktivieren 

Bei der ersten Einrichtung muss die Zwei-Faktor-Authentifizierung zunächst für den Exchange Dienst aktiviert werden, bevor sie für dessen Accounts aktiviert werden kann.

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie unter `Microsoft`{.action} und `Exchange`{.action} Ihren Exchange Dienst aus. Gehen Sie dann auf den Tab `Sicherheit`{.action}.

Klicken Sie unter „Zwei-Faktor-Authentifizierung“ auf `Aktiviert`{.action}. Zum Abschluss scrollen Sie nach unten zum Ende der Seite und klicken Sie auf `Änderungen speichern`{.action}.

![2fa-exchange](images/2fa-exchange.gif){.thumbnail}

#### Schritt 2: Die Zwei-Faktor-Authentifizierung auf einem Account aktivieren

Nachdem Sie die Zwei-Faktor-Authentifizierung für den Dienst aktiviert haben, können Sie sie für jedes Ihrer Konten einrichten.

Wechseln Sie zu Tab `E-Mail-Accounts`{.action}. Klicken Sie auf `...`{.action} rechts des Accounts, auf dem Sie die Zwei-Faktor-Authentifizierung einrichten möchten, und klicken Sie danach auf `Die Zwei-Faktor-Authentifizierung aktivieren`{.action}.

![2fa-exchange](images/2fa-exchange-01.png){.thumbnail}

Um Ihr Konto mit Ihrer OTP-App zu verknüpfen, loggen Sie sich in den betreffenden Account über [Webmail](https://www.ovh.de/mail/) ein.

Während dieses ersten Logins wird ein QR-Code angezeigt. Verwenden Sie Ihre OTP-App, um ihn zu scannen, und geben Sie dann den von der App generierten Zahlencode ein, um die Verbindung herzustellen.

![2fa-exchange](images/2fa-exchange-02.png){.thumbnail}

Bei Ihren nachfolgenden Verbindungen werden Sie nur noch nach dem von Ihrer OTP-App generierten Code gefragt.

### Die Zwei-Faktor-Authentifizierung deaktivieren

Die Zwei-Faktor-Authentifizierung Ihres Exchange Accounts kann auf drei Arten deaktiviert werden.

Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wählen Sie unter `Microsoft`{.action} und `Exchange`{.action} Ihren Exchange Dienst aus.

Vom Tab `E-Mail-Accounts`{.action} aus, klicken Sie auf `...`{.action} rechts des Accounts, auf dem die Zwei-Faktor-Authentifizierung bereits aktiv ist.

![2fa-exchange](images/2fa-exchange-04.png){.thumbnail}

Wählen Sie die Option, die Ihren Anforderungen entspricht, gemäß der folgenden Tabelle aus:

| Nummer                 	| Funktion    | Beschreibung                                                                                                        	
|----------------------------------	|------------------|------------------|
| 1. | „Die Zwei-Faktor-Authentifizierung deaktivieren“ | Ermöglicht die Aussetzung der Zwei-Faktor-Authentifizierung für einen in Stunden definierten Zeitraum. Nach Ablauf der Frist wird die Zwei-Faktor-Authentifizierung reaktiviert. <br> *Beispiel: Ein Benutzer hat sein Smartphone vergessen und kann sich nicht über die OTP-App authentifizieren.*   |
| 2. | „Die Zwei-Faktor-Authentifizierung zurücksetzen“ | Ermöglicht das Zurücksetzen des QR-Codes, der beim ersten Herstellen einer Verbindung zum Webmail generiert wurde.<br> *Beispiel: Ein Benutzer hat sein Smartphone gewechselt und muss seine OTP-App neu konfigurieren.* |
| 3. | „Die Zwei-Faktor-Authentifizierung löschen“ | Deaktiviert die Zwei-Faktor-Authentifizierung des Accounts vollständig. | 

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
