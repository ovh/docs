---
title: 'Die Statuscodes von SMTP-Servern'
excerpt: 'Details zu den Statuscodes von SMTP-Servern'
slug: die_statuscodes_von_smtp-servern
section: Diagnose
order: 1
legacy_guide_number: g2272
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


**Stand 04.06.2021**

## Ziel

Sie können Ihre E-Mails nicht über Ihr E-Mail-Programm oder über das Webmail-Interface empfangen oder versenden?

**Hier erfahren Sie, wie Sie bei Ihrem OVHcloud E-Mail-Angebot einen Fehler beim Versand oder Empfang diagnostizieren.**

> [!primary]
>
> Wenn Sie weitere Fragen haben, die nicht in dieser Anleitung behandelt werden, lesen Sie bitte unsere [E-Mail FAQ](https://docs.ovh.com/de/emails/e-mails-faq/).

## Voraussetzungen

- Sie besitzen ein **MX Plan** Angebot oder **E-Mail Pro** oder **Exchange** Angebot.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

### Sind mein E-Mail Angebot und/oder meine Accounts aktiv?

Damit Ihre E-Mails funktionieren, benötigen Sie ein aktives E-Mail-Angebot. Wenn Ihr E-Mail-Angebot mit einem Webhosting-Angebot verbunden ist, überprüfen Sie, dass dieses nicht abgelaufen ist. Sie können diese Information direkt im Kundencenter überprüfen. Ebenso muss auch Ihre Domain aktiv sein.

Hier überprüfen Sie, ob Ihre Dienstleistungen korrekt funktionieren:

- Gehen Sie **für** Ihre Domain in den Bereich `Web Cloud`{.action}, klicken Sie in der linken Spalte auf `Domainnamen`{.action} und wählen Sie Ihre Domain aus. Wenn Ihre Domain abgelaufen ist, wird dies am oberen Ende der Seite angezeigt.
- Für **Ihr Webhosting** gehen Sie in den Bereich `Cloud`{.action}, klicken Sie in der linken Spalte auf `Hosting`{.action} und wählen Sie Ihr Hosting aus. Das Ablaufdatum oder das Datum der automatischen Verlängerung Ihres Webhostings wird oben angegeben.
- Für ein **MXplan** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie in der linken Spalte auf `E-Mails`{.action} und wählen Sie die betreffende Domain aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}. Überprüfen Sie in der Spalte Status den Status des betreffenden `E-Mail-Accounts`.
- Für ein **E-Mail Pro** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie in der linken Spalte auf `E-Mail Pro`{.action} und wählen Sie Ihre Plattform aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}. Überprüfen Sie in der Spalte Status den Status des betreffenden `E-Mail-Accounts`.
- Für ein **Exchange** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie in der linken Spalte auf `Microsoft`{.action}, klicken Sie dann auf `Exchange`{.action} und wählen Sie Ihre Plattform aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}. Überprüfen Sie in der Spalte Status den Status des betreffenden `E-Mail-Accounts`.

### Ich kann keine E-Mails von meinem E-Mail-Programm aus versenden

Wenn Sie ein E-Mail-Programm auf Ihrem Computer (Outlook, Mail von Mac, Thunderbird etc.) oder Ihrem Smartphone (iOS, Android etc.) verwenden und bei Versand oder Empfang Probleme haben, überprüfen Sie die Konfigurationseinstellungen nach Ihrem E-Mail-Angebot und dem verwendeten E-Programm.

- Überprüfen Sie bei einem **MXplan** Angebot im Bereich [Hosted E-Mail - MX Plan](https://docs.ovh.com/de/emails/) unserer **Web Cloud**-Anleitungen die Konfiguration Ihres E-Mail-Programms im Abschnitt `E-Mail-Clients` .

- Überprüfen Sie bei einem **E-Mail Pro** Angebot im Bereich [E-Mail Pro](https://docs.ovh.com/de/emails-pro/) unserer **Web Cloud**-Anleitungen die Konfiguration Ihres E-Mail-Programms im Abschnitt `Konfiguration des E-Mail-Clients`.

- Für ein **Exchange** Angebot überprüfen Sie im Bereich [Microsoft Collaborative Solutions](https://docs.ovh.com/de/microsoft-collaborative-solutions/)  unserer **Web Cloud** die Konfiguration Ihres E-Mail-Programms im Bereich `Konfiguration des Exchange E-Mail-Clients` oder Ihres Smartphones in `Konfiguration von Exchange auf kompatiblen Smartphones/Tablets`

### Sind die E-Mails über das Webmail-Interface funktionsfähig?

Um sicherzustellen, dass die Fehlfunktion nicht auf einen Konfigurationsfehler zurückzuführen ist, führen Sie direkt über das Webmail von OVHcloud einen Test zum Senden und Empfangen durch. Wenn alles korrekt funktioniert, überprüfen Sie die Konfiguration Ihrer Software mithilfe der Anleitungen, die Ihnen zur Verfügung stehen.

Gehen Sie über den Browser Ihres Computers oder ein Smartphone auf die Adresse <https://www.ovh.com/de/mail/>.

![webmail](images/webmail.png){.thumbnail}

### Ich kann mich nicht mit dem Webmail verbinden

Stellen Sie sicher, dass Sie das richtige Passwort haben. Wenn nötig können Sie es ändern. Überprüfen Sie auch, ob die Zwei-Faktor-Authentifizierung aktiviert ist ([nur](https://www.ovh.com/fr/emails/hosted-exchange/) Exchange).

So ändern Sie das Passwort einer E-Mail-Adresse:

- Für ein **MXplan** Angebot lesen Sie unsere [Anleitung Passwort einer MX Plan E-Mail-Adresse ändern](https://docs.ovh.com/de/emails/passwort-e-mail-adresse-aendern/)

- Für ein **E-Mail Pro** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie in der linken Spalte auf `E-Mail Pro`{.action} und wählen Sie Ihre Plattform aus. Klicken Sie im Tab `E-Mail`{.action}-Accounts auf `...`{.action} und dann auf `Passwort`{.action} ändern.

- Für ein **Exchange** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie in der linken Spalte auf `Microsoft`{.action}, klicken Sie dann auf `Exchange`{.action} und wählen Sie Ihre Plattform aus. Klicken Sie im Tab `E-Mail`{.action}-Accounts auf `...`{.action} und dann auf `Passwort`{.action} ändern. <br> Überprüfen Sie, ob die Zwei-Faktor-Authentifizierung aktiviert ist, indem Sie unsere Anleitung [Die Zwei-Faktor-Authentifizierung auf einem Exchange Account konfigurieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/2fa-exchange-konfigurieren/).

### Ist eine Störung oder Wartung bei meinem Dienst im Gange?

Sie können die verschiedenen Tasks überprüfen, die derzeit auf <http://travaux.ovh.net/> dem

- Für **MXplan** überprüfen Sie im Bereich `E-Mails`
- Für **E-Mail Pro** gehen Sie in den Bereich `Microsoft`
- Für **Exchange**, gehen Sie in den Bereich `Microsoft`

### Ist der Verweis der Domain auf meinen E-Mail-Dienst korrekt?

Überprüfen Sie, ob Ihre Domain korrekt auf die OVHcloud E-Mail-Server verweist. Hierzu müssen MX-Einträge in Ihrer DNS-Zone konfiguriert werden. <br>Lesen Sie unsere Anleitung [Einen MX-Eintrag zur Konfiguration Ihrer Domain hinzufügen](https://docs.ovh.com/de/domains/webhosting_e-mail_mx-konfiguration_mit_dns_zone_von_ovh/).

![DNS Zone](images/DNS.png){.thumbnail}

### Nach dem Versand einer E-Mail erhält ich eine Nachricht, aus der hervorgeht, dass meine E-Mail nicht versandt werden konnte, einschließlich eines 3-stelligen Codes

Dies ist eine SMTP-Fehlerrückmeldung. Dies bedeutet, dass der Austausch zwischen dem Versand-Server und dem E-Mail-Server für den Empfang nicht korrekt durchgeführt werden konnte. Der Code dient zur Bestimmung der Art des Fehlers, auf den der Server gestoßen ist. In der Regel wird eine Nachricht übermittelt, in der dieser Fehler im Einzelnen dargestellt wird.

Eine SMTP-Antwort besteht aus einer dreistelligen Zahl. Die drei Ziffern der Antwort haben jeweils eine besondere Bedeutung:

- Die erste Ziffer gibt an, ob die Antwort richtig, falsch oder unvollständig ist. Ein SMTP-Client wird in der Lage sein, seine nächste Aktion anhand dieser ersten Zahl zu bestimmen.
- Die zweite und die dritte Ziffer liefern zusätzliche Informationen.

Für die erste Ziffer des Antwortcodes sind vier Werte möglich:

|Code|Beschreibung|  
|---|---|  
|2 xx|Positive Antwort: die angeforderte Aktion wurde erfolgreich durchgeführt. Es kann eine neue Anfrage gestartet werden.|
|3 xx|Temporäre positive Antwort: Die Bestellung wurde angenommen, die angeforderte Aktion wartet jedoch auf weitere Informationen. Der SMTP-Client sollte eine weitere Bestellung senden, in der diese Information angegeben ist.|
|4 xx|Negative Antwort auf den vorübergehenden Abschluss: die Bestellung wurde nicht angenommen, und die beantragte Aktion konnte nicht durchgeführt werden. Die Fehlerbedingung ist jedoch vorübergehend und kann erneut beantragt werden.|
|5 xx|Negative Antwort: die Bestellung wurde nicht angenommen, und die beantragte Aktion konnte nicht durchgeführt werden. Der SMTP-Client sollte diese Anfrage nicht wiederholen.|

Im Folgenden finden Sie die Mehrzahl der von den Servern verwendeten negativen SMTP-Antwortcodes:

|Antwort-Codes|Beschreibung|Aktionen|
|---|---|---|
|420|Verspätung, Verbindungsproblem|Diese Fehlermeldung wird ausschließlich von den GroupWise Mailservern zurückgegeben. Kontaktieren Sie den Administrator des Ziel-E-Mail-Servers|
|421|Dienst nicht verfügbar, Übertragungskanal wird geschlossen|Herkunft des unbestimmten Fehlers, vergewissern Sie sich, dass der Versand an eine andere Domain funktioniert. Wenn ja, versuchen Sie den ursprünglichen Versand später erneut|
|432|Empfang der E-Mail auf dem Exchange Server angehalten|Diese Fehlermeldung wird ausschließlich für die Microsoft Exchange Mailserver versandt. Kontaktieren Sie den Administrator des Ziel-E-Mail-Servers|
|449|Ein Routing-Fehler|Diese Fehlermeldung wird ausschließlich von den Microsoft Exchange Mailservern zurückgegeben. Microsoft empfiehlt, eine Diagnose mit ihrem WinRoute Tool durchzuführen|
|450|Angeforderte E-Mail-Aktion nicht ausgeführt: Mailbox nicht verfügbar (z. B. Mailbox besetzt oder aus Sicherheitsgründen vorübergehend gesperrt)|Überprüfen Sie, ob Ihre IP-Adresse des Mailservers nicht geblockt ist ([SpamHaus](https://www.spamhaus.org/lookup/){.external}), und überprüfen Sie auch, ob Ihre E-Mail keine Wörter für SPAM enthält.|
|451|Zurückgegebene Pflichtmaßnahme: Lokaler Verarbeitungsfehler|Dies kann durch eine vorübergehende Überlastung oder eine Überprüfung des SPF der Senderdomain verursacht werden. Lesen Sie die Zusatznachricht des Servers oder kontaktieren Sie dessen Administrator, falls dies weiterhin der Fall ist|
|452|Angeforderte Aktion nicht ausgeführt: unzureichendes Speichersystem|Ihr E-Mail-Server ist "überladen". Das könnte auch durch zu viele Botschaften verursacht werden, die gleichzeitig zu senden versuchen. Bitte überprüfen Sie Ihren Posteingang und versuchen Sie es erneut|
|455|Server nicht in der Lage, die Einstellungen zu erhalten|Warten Sie eine Weile und versuchen Sie es erneut. Im Falle eines Fehlschlags kontaktieren Sie den Administrator des E-Mail-Servers des Empfängers|
|250|Syntafehler, nicht erkannte Bestellung (Dies kann Fehler wie eine zu lange Befehlszeile einschließen)|Dies wird häufig durch das Antivirus oder die Firewall des Absenders verursacht. Überprüfen Sie das und versuchen Sie es erneut|
|501|Syntafehler in den Parametern oder Argumenten|Dies wird häufig durch eine fehlerhafte E-Mail-Adresse eines Empfängers oder durch ein Antivirus-Problem oder Firewall auf der Absenderseite verursacht. Bitte überprüfen Sie die Ziel-Adresse sowie Ihr Antivirus oder Firewall|
|502|Bestellung nicht implementiert|Die beim Versand der E-Mail mit Ihrem SMTP-Server verwendeten Einstellungen oder Optionen werden erkannt, in der Konfiguration jedoch deaktiviert. Bitte kontaktieren Sie Ihren Dienstleister|
|503|Der Server hat eine falsche Bestellreihenfolge|Dies ist gewöhnlich auf ein Problem mit der Authentifizierung zurückzuführen. Vergewissern Sie sich, dass Sie sich bei der Konfiguration Ihres E-Mail-Programms auf dem SMTP-Server korrekt authentifiziert haben|
|504|Steuerparameter nicht implementiert|Die beim Versand der E-Mail mit Ihrem SMTP-Server verwendeten Einstellungen oder Optionen werden erkannt, in der Konfiguration jedoch deaktiviert. Bitte kontaktieren Sie Ihren Dienstleister|
|550|Angeforderte Aktion nicht ausgeführt: Mailbox nicht verfügbar|Der Ziel-E-Mail-Server konnte die verwendete E-Mail-Adresse nicht überprüfen. Dies wird meist durch eine ungültige Ziel-E-Mail-Adresse verursacht, kann aber auch bedeuten, dass der Ziel-E-Mail-Server Probleme mit der Firewall oder der Konnektivität hat. Die E-Mail-Adresse des Empfängers überprüfen und/oder erneut versuchen|
|551|Nicht lokaler Benutzer|Dies wird üblicherweise als Präventionsstrategie gegen Spam eingesetzt. Es wird angegeben, dass der Mail-Relay aus irgendeinem Grund nicht erlaubt ist, Ihre Nachricht auf einen anderen Server als Ihren zu übertragen. Bitte kontaktieren Sie Ihren Dienstleister|
|552|Angeforderte E-Mail-Aktion unterbrochen: Speicherplatz überschritten|Der Benutzer, den Sie kontaktieren möchten, hat keinen Speicherplatz mehr für den Empfang von Nachrichten. Leider besteht die einzige Lösung darin, den Empfänger über eine andere Methode zu kontaktieren|
|553|Angeforderte Aktion nicht ausgeführt: nicht autorisierte E-Mail-Adresse|Dies wird in der Regel durch eine falsche Ziel-E-Mail-Adresse verursacht. Bitte überprüfen Sie, dass die betreffende E-Mail-Adresse korrekt ist|
|554|Transaktion fehlgeschlagen, "Keine SMTP-Dienste hier vorhanden")|Das ist im Allgemeinen ein Blacklist-Problem. Überprüfen Sie, ob Ihre IP-Adresse des Mailservers nicht geblockt ist ([SpamHaus](https://www.spamhaus.org/lookup/){.external})|
|555|MAIL FROM / RCPT TO, Einstellungen nicht erkannt oder nicht umgesetzt|Der ausgehende SMTP-Server speichert die verwendete E-Mail-Adresse entweder in den Einstellungen "De"oder "A" nicht korrekt. Bitte überprüfen Sie, dass die angegebenen E-Mail-Adressen korrekt sind, und überprüfen Sie, dass Sie die von OVHcloud festgelegte Grenze nicht überschritten haben: 200 Mails / Stunde / Account / 300 Mails / Stunde / IP|

## Weiterführende Informationen

[E-Mail FAQ](https://docs.ovh.com/de/emails/e-mails-faq/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
