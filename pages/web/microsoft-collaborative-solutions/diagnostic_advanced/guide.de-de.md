---
title: 'Exchange Diagnose: Was tun bei Fehlern?'
excerpt: 'Exchange Diagnose: Was tun bei Fehlern?'
slug: exchange_diagnose_was_tun_bei_fehlern
legacy_guide_number: g2277
section: Troubleshooting
order: 2
---

## Diagnose durchführen

Loggen Sie sich in Ihr OVH Kundencenter ein:[OVH Kundencenter](https://www.ovh.com/manager/web/login/).

Wählen Sie dann im Menü links unter Microsoft Ihren Exchange Service aus.

![Diagnose](images/img_4450.jpg){.thumbnail}

Klicken Sie dann auf den Tab `Diagnosen`{.action}. Geben Sie den gewünschten Exchange Account und das zugehörige Passwort an, um die Diagnose zu starten. 

Die Exchange Diagnose kann zwischen 3 und 10 Minuten in Anspruch nehmen.

![](images/img_4451.jpg){.thumbnail}

Hier ein Beispiel für das Ergebnis einer Diagnose eines Exchange E-Mail-Accounts:

Mögliche Aktionen:

- Neue Diagnose: eine weitere Diagnose starten

- Eine Support-Anfrage erstellen: ein Support-Ticket mit dem Ergebnis der Diagnose erstellen



![](images/img_4471.jpg){.thumbnail}


## Bei der Diagnose wurden Fehler erkannt?
Nun werden wir im Einzelnen auf die möglichen Fehler eingehen, um Sie bei der Lösung des jeweiligen Problems zu unterstützen: 


- ACHTUNG: Das Konto wurde wegen Spamversand blockiert:


Dies bedeutet, dass der Versand von E-Mail von diesem Account vorübergehend deaktiviert wurde. Der Empfang von E-Mails wird hierdurch nicht beeinträchtigt.

Wenn Ihr Konto wegen Spamversand blockiert ist, sehen Sie das in Ihrem Exchange Service im Bereich E-Mail-Account. Es wird ein Tag SPAM angezeigt. Klicken Sie darauf, um auf die Benachrichtigungs-E-Mail zur Blockierung zu gelangen.

Damit Ihr Konto wieder freigeschaltet wird, müssen Sie auf diese E-Mail antworten.

![](images/img_4453.jpg){.thumbnail}

- ACHTUNG: Das Abonnement des Kontos ist abgelaufen:


In diesem Fall ist Ihr Abonnement nicht mehr aktiv. Eingang und Versand von E-Mails sind deaktiviert. Kontaktieren Sie unseren Exchange-Support, um Ihren Service erneut freizuschalten.

- ACHTUNG: Das Konto wurde aus Sicherheitsgründen blockiert:


Sie können für Ihren Exchange-Service eine Sicherheitspolitik definieren. Bei der Konfiguration dieser Politik kann es zu einer vorübergehenden Blockierung Ihres Kontos kommen.

Sie können selbst festlegen, dass der Account nach einer bestimmten Anzahl fehlgeschlagender Login-Versuche für einen bestimmten Zeitraum gesperrt wird.

Wenn Ihr Konto aus diesem Grund blockiert ist, können Sie entweder die angegebene Zeit abwarten oder aber unseren Exchange-Support kontaktieren.

- ACHTUNG: Die Authentifizierung ist fehlgeschlagen:


Diese Fehlermeldung kann erscheinen, wenn Sie ein falsches Passwort zum Start der Diagnose angegeben haben. In diesem Fall starten Sie einfach die Diagnose neu.

Sie können das Passwort auch über Ihren Exchange-Service aktualisieren (über den Tab E-Mail Accounts) und dann die Diagnose neu starten. Wenn das Problem weiterhin besteht, erstellen Sie eine Support-Anfrage.

- ACHTUNG: Der MX-Eintrag der Domain ist ungültig:


Diese Meldung zeigt an, dass keine E-Mails empfangen werden können. Sie steht in Verbindung mit dem Fehler ACHTUNG: Die Test-E-Mail konnte nicht zugestellt werden.

Hier als Übersicht die MX-Server für das Angebot Exchange:


- Nur Exchange: mx1.mail.ovh.net
- Exchange + E-Mail POP/IMAP von OVH: mx1.mail.ovh.net
- Exchange + E-mail POP/IMAP von einem Drittanbieter: ex**X**.mail.ovh.net



- ACHTUNG: Der SRV-Eintrag der Domain ist ungültig:


Den SRV-Eintrag brauchen Sie für die automatische Konfiguration Ihres Exchange-Kontos auf einem kompatiblen E-Mail-Programm, etwa Outlook 2010, 2013 et 2016.

Sie können die Werte in der DNS Zone Ihrer Domain überprüfen.

Hier im Überblick die korrekten Daten für Exchange:

|Beschreibung|Wert|
|---|---|
|Priorität|0|
|Gewicht|0|
|Port|443|
|Server bei Hosted|ex**X**.mail.ovh.net|
|Server bei Private|Ihr-Host-Name|



- ACHTUNG: Die Test-E-Mail konnte nicht über das Konto versendet werden:


Diese Meldung zeigt an, dass keine E-Mails versendet werden können.

Hierfür kann es verschiedene Ursachen geben:


- Ihr Konto wurde gesperrt.
- Das angegebene Passwort ist nicht korrekt.
- Das Konto wurde wegen Spamversand blockiert.
- Ein Vorfall auf der Exchange-Infrastruktur.


Sollten Ihnen die obigen Ausführungen zur Fehlerbehebung nicht weiterhelfen, erstellen Sie bitte eine Support-Anfrage.

