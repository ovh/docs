---
title: 'Konfiguration Ihrer E-Mail-Adresse im Gmail-Webinterface'
slug: konfiguration-einer-shared-e-mail-adresse-im-gmail-interface
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie eine MX Plan Adresse im Webinterface von Gmail einrichten.'
section: 'E-Mail Clients'
order: 8
---

**Stand 10.09.2018**

## Einleitung

E-Mail-Adressen aus dem MX Plan Angebot können auf verschiedenen, kompatiblen E-Mail-Clients und -Applikationen eingerichtet werden. So können Sie Ihr bevorzugtes Gerät oder Ihre bevorzugte App für Versand und Empfang Ihrer E-Mails verwenden.

**Hier erfahren Sie, wie Sie eine MX Plan Adresse im Webinterface von Gmail einrichten.**

> [!warning]
>
> OVH stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVH leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 

## Voraussetzungen

- Sie besitzen eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder in einem [Webhosting Angebot von OVH](https://www.ovh.de/hosting/){.external} enthalten).
- Sie haben die Login-Daten der OVH E-Mail-Adresse, die Sie einrichten möchten.
- Sie haben die Login-Daten des Gmail-Accounts, auf dem Sie die OVH Adresse einrichten möchten.


> [!primary]
>
> Diese Anleitung wurde anhand des neuen Gmail-Interface erstellt. Wenn sich die Abbildungen leicht von Ihrer Version unterscheiden, können Sie die Anweisungen dennoch befolgen.
>

## Beschreibung

### Schritt 1: OVH Account im Gmail-Interface hinzufügen

Gehen Sie zunächst über Ihren Webbrowser in das Gmail-Webinterface. Geben Sie dort die Login-Daten Ihres Gmail-Accounts ein, um sich mit diesem zu verbinden.

Wenn Sie im Interface eingeloggt sind, klicken Sie auf das Zahnrad-Symbol und anschließend auf `Einstellungen`{.action}. Klicken Sie im angezeigten Fenster auf den Tab `Konten und Import`{.action}. 

![mxplan](images/configuration-gmail-web-step1.png){.thumbnail}

Klicken Sie neben `Nachrichten von anderen Konten abrufen` auf `E-Mail-Konto hinzufügen`{.action}. Geben Sie im angezeigten Fenster Ihre OVH E-Mail-Adresse ein und klicken Sie dann auf `Weiter`{.action}. Wählen Sie `E-Mails von meinem anderen Konto (POP3) importieren`{.action} aus und klicken Sie anschließend auf `Weiter`{.action}.

![mxplan](images/configuration-gmail-web-step2.png){.thumbnail}

Geben Sie jetzt die Einstellungen des POP-Servers (Eingangsserver) Ihrer OVH E-Mail-Adresse ein:

|Information|Beschreibung| 
|---|---| 
|Nutzername|Geben Sie die **vollständige** E-Mail-Adresse ein.|  
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|
|POP-Server|Tragen Sie den Server „ssl0.ovh.net“ ein.|
|Port|Wählen Sie den Port „995“ aus.|

Sie können folgende Optionen auswählen:

- **„Kopie aller Nachrichten auf dem Server belassen“**: Setzen Sie hier einen Haken, falls Sie eine Kopie der Nachrichten, die Sie mit Ihrer OVH E-Mail-Adresse empfangen, auf unseren Servern speichern möchten.

- **„Beim Abrufen von E-Mails immer eine sichere Verbindung (SSL) verwenden“**: Vergewissern Sie sich, dass Sie hier einen Haken gesetzt haben, damit eine Verbindung mit Ihrer OVH E-Mail-Adresse hergestellt werden kann.

- **„Eingehende Nachrichten mit folgendem Label kennzeichnen“**: Mit dieser Option können Sie ein Label zu den Nachrichten hinzufügen, die von Ihrer OVH E-Mail-Adresse in Ihren Gmail-Account importiert werden.

- **„Eingehende Nachrichten archivieren (Posteingang überspringen)“**: Hier können Sie einstellen, dass die E-Mails, die von Ihrer OVH E-Mail-Adresse in Ihren Gmail-Account importiert werden, nicht in Ihrem Posteingang angezeigt werden.

Nachdem Sie alle Informationen eingegeben haben, klicken Sie auf `Konto hinzufügen`{.action}. Sind die Angaben korrekt, wird die Verbindung zu Ihrer E-Mail-Adresse hergestellt. 

![mxplan](images/configuration-gmail-web-step3.png){.thumbnail}

Wenn Sie über das Gmail-Interface auch E-Mails mit Ihrer OVH Adresse versenden möchten, setzen Sie nun einen Haken in dem Feld `Ja, ich möchte Nachrichten auch als xxxxxx@xxx.xx senden`{.action} und klicken Sie dann auf `Weiter`{.action}. 

Geben Sie nun den Namen des Absenders ein, der beim Versand mit der E-Mail-Adresse angezeigt wird, setzen Sie einen Haken bei `Als Alias behandeln`{.action} und klicken Sie anschließend auf den Button `Nächster Schritt`{.action}.

![mxplan](images/configuration-gmail-web-step4.png){.thumbnail}

Geben Sie jetzt die Einstellungen des SMTP-Servers (Ausgangsserver) Ihrer OVH E-Mail-Adresse ein:

|Information|Beschreibung| 
|---|---| 
|SMTP-Server|Tragen Sie den Server „ssl0.ovh.net“ ein.|
|Port|Wählen Sie den Port „587“ aus.|
|Nutzername|Geben Sie die **vollständige** E-Mail-Adresse ein.|  
|Passwort|Geben Sie das Passwort der E-Mail-Adresse ein.|

Nachdem Sie die Informationen ausgefüllt haben, setzen Sie einen Haken bei `Sichere Verbindung über TLS`{.action} und klicken Sie anschließend auf `Konto hinzufügen`{.action}. Sind die Angaben korrekt, wird die Verbindung zu Ihrer E-Mail-Adresse hergestellt. 

![mxplan](images/configuration-gmail-web-step5.png){.thumbnail}

Jetzt müssen Sie nur noch das Hinzufügen des Accounts bestätigen, indem Sie den Bestätigungscode eingeben, der an Ihre OVH E-Mail-Adresse versandt wurde. Loggen Sie sich hierzu wie gewohnt in unserem Webinterface ein: <https://www.ovh.de/mail/>. 

Nach der Bestätigung erscheint Ihre OVH E-Mail-Adresse im Tab `Konten und Import`{.action}, auf den Sie zu Beginn der Änderung zugegriffen haben.

### Schritt 2: E-Mail-Adresse über das Gmail-Interface verwenden

Ihre E-Mail-Adresse ist nun fertig konfiguriert und Sie können jetzt Nachrichten versenden und empfangen.

Um eine Nachricht mit Ihrer OVH E-Mail-Adresse über das Gmail-Interface zu versenden, wählen Sie diese einfach als Absender aus, wenn Sie eine neue Nachricht verfassen. Die Auswahl treffen Sie neben dem Feld `Von`{.action} im E-Mail-Eingabefenster.

![mxplan](images/configuration-gmail-web-step6.png){.thumbnail}

Natürlich können Sie auch weiterhin unser Webinterface unter <https://www.ovh.de/mail/> verwenden, um auf Ihre OVH E-Mail-Adresse zuzugreifen. Loggen Sie sich hierzu wie gewohnt mit Ihren zugehörigen Login-Daten ein.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.