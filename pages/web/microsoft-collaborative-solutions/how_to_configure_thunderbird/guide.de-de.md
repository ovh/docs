---
title: 'Konfiguration des Exchange Accounts in Thunderbird für Windows'
slug: exchange_20132016_konfiguration_in_thunderbird
legacy_guide_number: g1278
excerpt: 'Erfahren Sie hier die Vorgehensweise zum Hinzufügen eines Exchange Accounts im Thunderbird Client'
section: 'Konfiguration des Exchange E-Mail-Clients'
order: 5
---

**Letzte Aktualisierung am 17.01.2020**

## Ziel

Exchange Accounts können auf diversen kompatiblen E-Mail-Clients eingerichtet werden. Thunderbird ist zwar nicht mit dem Exchange MAPI-Protokoll kompatibel, die Konfiguration kann jedoch mit POP oder IMAP erfolgen. In diesem Beispiel wird ein Hosted Exchange Account mit IMAP konfiguriert.

**Diese Anleitung erläutert, wie Sie einen Exchange Account in der E-Mail-Software Thunderbird unter Windows einrichten.**

> [!warning]
>OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
>Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Hinweise finden Sie im Teil „Weiterführende Informationen” dieser Anleitung.
> 

## Voraussetzungen

- Sie haben bereits einen [OVHcloud Exchange](https://www.ovh.de/emails/) Dienst eingerichtet.
- Die Thunderbird Anwendung ist auf Ihrem Gerät installiert.
- Sie verfügen über Anmeldeinformationen für die E-Mail-Adresse, die Sie konfigurieren möchten.

## In der praktischen Anwendung

### Schritt 1: Start

Wechseln Sie auf Ihrem Computer zu „Thunderbird“.

Ein neues Konto muss über das nachstehende Menü hinzugefügt werden. Um fortzufahren, wählen Sie `E-Mail`{.action} aus.

![emails](images/configuration-thunderbird-exchange-step1.png){.thumbnail}


### Schritt 2: Erstellung des Accounts

Füllen Sie die angezeigten Felder aus:

- Ihr Name: *Geben Sie hier den gewünschten Anzeigenamen ein.*
- E-Mail-Adresse: *Ihre vollständige E-Mail-Adresse.*
- Passwort: *Das Passwort, das in Ihrem [OVHcloud-Kundencenter](https://www.ovh.com/auth/?action=gotomanager) für den Exchange Account definiert wird.*
- Das Passwort speichern: *Aktivieren Sie diese Option.*

Klicken Sie auf `Manuelle Konfiguration`{.action}, um mit den Installationsschritten fortzufahren.


![emails](images/configuration-thunderbird-exchange-step2.png){.thumbnail}


### Schritt 3: Manuelle Konfiguration

> [!primary]
>
> In dieser Anleitung verwenden wir als Serverbezeichnung: ex**X**.mail.ovh.net. Das „X“ muss mit der jeweils passenden Nummer Ihres zuständigen Servers für den einzurichtenden Exchange Dienst ersetzt werden.
> 
> Sie finden diese Information im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager), wenn Sie im Bereich `Web`{.action} im Menü links unter `Exchange`{.action}
> den Dienst auswählen. Der Servername wird im Kasten **Verbindung** auf der Seite `Allgemeine Informationen`{.action} angezeigt.
> 

Überprüfen Sie nach dem Klicken auf `Manuelle Konfiguration`{.action}, ob diese Elemente korrekt ausgefüllt sind:

- Eingehend: **IMAP** 
- Name des Servers: *Tragen Sie hier den Server ein, auf dem Ihr Exchange Dienst gehostet ist.*
- Port:  **993**
- Verschlüsselungsmethode:   **SSL**
- Die Authentifizierung:  **Normales Passwort**
- Ausgehend: **SMTP**
- Name des Servers: *Tragen Sie hier den Server ein, auf dem Ihr Exchange-Dienst gehostet ist.* 
- Port:  **587** 
- Verschlüsselungsmethode:  **STARTTLS** 
- Authentifizierung:  **Normales Passwort** 
- Benutzer: *Ihre vollständige E-Mail-Adresse.*

> [!primary]
>
> Für Konten eines [Private Exchange](../exchange_die_ersten_schritte_mit_einem_private_server/) wird der einzutragende Servername bei der Bestellung des Dienstes definiert.
>

Wenn die Authentifizierung mit **Normales Passwort** nicht funktioniert, können Sie auch **NTLM** eingeben.

Klicken Sie auf `Fertigstellen`{.action}, um die Installation abzuschließen.


![emails](images/configuration-thunderbird-exchange-step3.png){.thumbnail}


### Schritt 4: Abschluss

Ihr Exchange Account ist damit korrekt konfiguriert. Sie können jetzt Ihre Nachrichten über IMAP senden und empfangen.

OVHcloud bietet auch einen [Webclient](https://www.ovh.de/mail) an. Sie können sich mit den Login-Daten Ihrer E-Mail-Adresse anmelden.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.