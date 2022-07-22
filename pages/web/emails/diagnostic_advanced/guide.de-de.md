---
title: 'E-Mails können nicht gesendet oder empfangen werden'
excerpt: 'Erfahren Sie hier die Vorgehensweise, wenn Sende- oder Empfangsprobleme über OVHcloud auftreten'
slug: die_statuscodes_von_smtp-servern
section: Diagnose
order: 02
legacy_guide_number: g2272
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


**Letzte Aktualisierung am 21.07.2022**

## Ziel

Sie können Ihre E-Mails nicht über Ihr E-Mail-Programm oder über das Webmail-Interface empfangen oder versenden?

**Diese Anleitung erklärt, wie Sie bei Ihrem OVHcloud E-Mail-Angebot Fehler beim Versand oder Empfang diagnostizieren.**

> [!primary]
>
> Wenn Sie weitere Fragen haben, die nicht in dieser Anleitung behandelt werden, lesen Sie bitte unsere [E-Mail FAQ](../e-mails-faq/).

## Voraussetzungen

- Sie haben bereits einen OVHcloud E-Mail-Dienst eingerichtet (**MX Plan**, **E-Mail Pro** oder **Exchange**).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Sind mein E-Mail Angebot und/oder meine Accounts aktiv? 

Damit Ihre E-Mails funktionieren, benötigen Sie ein aktives E-Mail-Angebot. Wenn Ihre E-Mail-Accounts Teil eines Webhosting-Angebots sind, überprüfen Sie, dass es nicht abgelaufen ist. Sie können das direkt im Kundencenter überprüfen. Die zugehörige Domain muss ebenfalls aktiv sein.

Überprüfen Sie zunächst, dass Sie keine ausstehenden [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) und [Verlängerungen](https://docs.ovh.com/de/billing/anleitung_zur_nutzung_der_automatischen_verlangerung_bei_ovh/#renewal-management) Ihrer Dienstleistungen haben.

Befolgen Sie diese Schritte, um sicherzustellen, dass Ihre relevanten Dienste in Betrieb sind:

- Gehen Sie für Ihre **Domain** in den Bereich `Web Cloud`{.action}, klicken Sie auf `Domainnamen`{.action} und wählen Sie Ihre Domain aus. Wenn Ihre Domain abgelaufen ist, wird dies am oberen Ende der Seite angezeigt.
- Für ein **Webhosting** gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie Ihr Hosting aus. Das Ablaufdatum oder das Datum der automatischen Verlängerung Ihres Webhostings wird oben angegeben.
- Für ein **MXplan** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `E-Mails`{.action} und wählen Sie die betreffende Domain aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}. Überprüfen Sie in der Spalte `Status` den Status des betreffenden E-Mail-Accounts.
- Für ein **E-Mail Pro** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `E-Mail Pro`{.action} und wählen Sie Ihre Plattform aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}. Überprüfen Sie in der Spalte `Status` den Status des betreffenden E-Mail-Accounts.
- Für ein **Exchange** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Microsoft`{.action}, klicken Sie dann auf `Exchange`{.action} und wählen Sie Ihren Dienst aus. Klicken Sie auf den Tab `E-Mail-Accounts`{.action}. Überprüfen Sie in der Spalte `Status` den Status des betreffenden E-Mail-Accounts.

### Ich kann keine E-Mails von meinem E-Mail-Programm aus versenden

Wenn Sie ein E-Mail-Programm auf Ihrem Computer (Outlook, Mac Mail, Thunderbird etc.) oder Ihrem Smartphone (iOS, Android etc.) verwenden und bei Versand oder Empfang Probleme haben, überprüfen Sie die Konfigurationseinstellungen je nach Ihrem E-Mail-Angebot und dem verwendeten E-Programm.

- Überprüfen Sie bei einem **MXplan** Angebot im Bereich [Hosted E-Mail - MX Plan](https://docs.ovh.com/de/emails/) unserer **Web Cloud**-Anleitungen die Konfiguration Ihres E-Mail-Programms im Abschnitt `E-Mail-Clients` .

- Überprüfen Sie bei einem **E-Mail Pro** Angebot im Bereich [E-Mail Pro](https://docs.ovh.com/de/emails-pro/) unserer **Web Cloud**-Anleitungen die Konfiguration Ihres E-Mail-Programms im Abschnitt `Konfiguration des E-Mail-Clients`.

- Für ein **Exchange** Angebot überprüfen Sie im Bereich [Microsoft Collaborative Solutions](https://docs.ovh.com/de/microsoft-collaborative-solutions/) unserer **Web Cloud**-Anleitungen die Konfiguration Ihres E-Mail-Programms im Bereich `Konfiguration des Exchange E-Mail-Clients` oder Ihres Smartphones in `Konfiguration von Exchange auf kompatiblen Smartphones/Tablets`

### Sind die E-Mails über das Webmail-Interface funktionsfähig?

Um sicherzustellen, dass die Fehlfunktion nicht auf einen Konfigurationsfehler zurückzuführen ist, führen Sie über OVHcloud Webmail einen Test zum Senden und Empfangen durch. Wenn alles korrekt funktioniert, überprüfen Sie die Konfiguration Ihrer Software mithilfe unserer Anleitungen.

Gehen Sie dazu über einen Webbrowser auf die Adresse <https://www.ovh.com/de/mail/>.

![webmail](images/webmail.png){.thumbnail}

### Ich kann mich nicht mit dem Webmail verbinden

Stellen Sie sicher, dass Sie das richtige Passwort haben. Sie können es nötignfalls immer im Kundencenter ändern. Überprüfen Sie auch, ob die Zwei-Faktor-Authentifizierung aktiviert ist (nur[Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/)).

So ändern Sie das Passwort einer E-Mail-Adresse:

- Für ein **MXplan** Angebot lesen Sie unsere [Anleitung Passwort einer MX Plan E-Mail-Adresse ändern](../passwort-e-mail-adresse-aendern/)

- Für ein **E-Mail Pro** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `E-Mail Pro`{.action} und wählen Sie Ihren Dienst aus. Klicken Sie im Tab `E-Mail-Accounts`{.action} auf `...`{.action} und dann auf `Passwort ändern`{.action}.

- Für ein **Exchange** Angebot gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Microsoft`{.action}, klicken Sie dann auf `Exchange`{.action} und wählen Sie Ihren Dienst aus. Klicken Sie im Tab `E-Mail-Accounts`{.action} auf `...`{.action} und dann auf `Passwort ändern`{.action}. <br> Überprüfen Sie, ob die Zwei-Faktor-Authentifizierung aktiviert ist mithilfe unserer Anleitung zur [Zwei-Faktor-Authentifizierung für Exchange](../../microsoft-collaborative-solutions/2fa-exchange-konfigurieren/).

### Ist mein Dienst von einer Störung oder Wartung betroffen?

Sie können alle aktuellen Tasks auf <https://web-cloud.status-ovhcloud.com/> überprüfen:

- Für **MXplan** überprüfen Sie im Bereich `E-Mails`
- Für **E-Mail Pro** gehen Sie in den Bereich `Microsoft`
- Für **Exchange**, gehen Sie in den Bereich `Microsoft`

### Ist die Domain korrekt mit meinem E-Mail-Dienst verbunden?

Überprüfen Sie, ob Ihre Domain korrekt auf die OVHcloud E-Mail-Server verweist. Hierzu müssen MX-Einträge in Ihrer DNS-Zone konfiguriert werden. <br>Lesen Sie dazu unsere Anleitung "[Einen MX-Eintrag zur Konfiguration Ihrer Domain hinzufügen](../../domains/webhosting_e-mail_mx-konfiguration_mit_dns_zone_von_ovh/)".

![DNS Zone](images/DNS.png){.thumbnail}

### Nach dem Senden einer E-Mail erhalte ich eine Meldung, dass meine E-Mail nicht gesendet werden konnte, einschließlich eines 3-stelligen Codes

Dies ist eine SMTP-Fehlerrückmeldung. Es bedeutet, dass der Austausch zwischen dem ausgehenden Server und dem eingehenden E-Mail-Server nicht korrekt abgeschlossen werden konnte. Der Code dient zur Bestimmung der Art des Fehlers, auf den der Server gestoßen ist. In der Regel wird eine Nachricht übermittelt, die diesen Fehler detaillierter beschreibt.

Eine SMTP-Antwort besteht aus einer dreistelligen Zahl. Die drei Ziffern der Antwort haben jeweils eine spezielle Bedeutung:

- Die erste Ziffer gibt an, ob die Antwort positiv, negativ oder unvollständig ist. Ein SMTP-Client wird in der Lage sein, seine nächste Aktion anhand dieser ersten Zahl zu bestimmen.
- Die zweite und die dritte Ziffer liefern zusätzliche Informationen.

Für die erste Ziffer des Antwortcodes sind vier Werte möglich:

|Code|Beschreibung|  
|---|---|  
|2 xx|Positive Antwort: die angeforderte Aktion wurde erfolgreich durchgeführt. Es kann eine neue Anfrage gestartet werden.|
|3 xx|Temporäre positive Antwort: Der Befehl wurde angenommen, die angeforderte Aktion wartet jedoch auf weitere Informationen. Der SMTP-Client sollte einen weiteren Befehl senden, der diese Informationen angibt.|
|4 xx|Dauerhafter transienter Fehler: Der Befehl wurde nicht akzeptiert und die angeforderte Aktion nicht erfüllt. Der Fehlerzustand ist jedoch vorübergehend und die Aktion kann erneut angefordert werden.|
|5 xx|Negative Antwort: der Befehl wurde nicht akzeptiert und die angeforderte Aktion nicht erfüllt. Der SMTP-Client sollte die gleiche Anfrage nicht wiederholen.|

Im Folgenden finden Sie von Servern häufig verwendete negative SMTP-Antwortcodes:

|Antwort-Code|Beschreibung|Aktionen|
|---|---|---|
|420|Timeout connection problem|Diese Fehlermeldung wird ausschließlich von den GroupWise Mailservern zurückgegeben. Kontaktieren Sie den Administrator des Empfänger-Mailservers.|
|421|Service not available, transmission channel being closed|Unbestimmte Herkunft; vergewissern Sie sich, dass der Versand an eine andere Domain funktioniert. Wenn ja, versuchen Sie den Versand später erneut.|
|432|The recipient’s Exchange Server incoming mail queue has been stopped|Diese Fehlermeldung wird nur von Microsoft Exchange Servern zurückgegeben. Wenden Sie sich an den Administrator des Empfänger-Mailservers.|
|449|Routing error|Diese Fehlermeldung wird nur von Microsoft Exchange Servern zurückgegeben. Microsoft empfiehlt, eine Diagnose mit dem Tool WinRoute durchzuführen.|
|450|Requested action not taken – The user’s mailbox is unavailable (z. B. Mailbox unerreichbar oder aus Sicherheitsgründen vorübergehend gesperrt)|Überprüfen Sie, ob die IP-Adresse des ausgehenden Mailservers geblockt ist ([SpamHaus](https://check.spamhaus.org/){.external}), und überprüfen Sie auch, ob Ihre E-Mail SPAM-relevante Wörter enthält.|
|451|Requested action aborted – Local error in processing|Dies kann durch eine vorübergehende Überlastung oder eine negative SPF-Prüfung der Senderdomain verursacht werden. Lesen Sie die Zusatznachricht des Servers oder kontaktieren Sie dessen Administrator, falls dies weiterhin der Fall ist.|
|452|The command has been aborted because the server has insufficient system storage|Der E-Mail-Server ist 'überladen'. Dies könnte von zu vielen ausgehenden Nachrichten gleichzeitig verursacht werden. Bitte überprüfen Sie Ihren Postausgang und versuchen Sie es erneut.|
|455|Server unable to deal with the command at this time.|Warten Sie eine Weile und versuchen Sie es erneut. Im Falle eines Fehlschlags kontaktieren Sie den Administrator des Empfänger-Mailservers.|
|250|Syntax error: the server could not recognise the command (Dies kann Fehler wie eine zu lange Befehlszeile einschließen)|Dies wird häufig von Antivirus- oder Firewalleinstellungen des Absenders verursacht. Überprüfen Sie das und versuchen Sie es erneut.|
|501|Syntax error in parameters or arguments|Dies wird oft durch eine falsche Empfänger-E-Mail-Adresse oder ein absenderseitiges Antiviren- oder Firewall-Problem verursacht. Bitte überprüfen Sie die Zieladresse und sowie Ihre Antivirus- oder Firewalleinstellungen.|
|502|Command not implemented|Die beim Versand der E-Mail mit Ihrem SMTP-Server verwendeten Einstellungen oder Optionen werden erkannt, in der Konfiguration jedoch deaktiviert. Bitte kontaktieren Sie Ihren Dienstleister.|
|503|Server encountered bad sequence of commands|Dies ist in der Regel auf ein Authentifizierungsproblem zurückzuführen. Vergewissern Sie sich, dass Sie in Bezug auf die Konfiguration Ihrer E-Mail-Software am SMTP-Server authentifiziert sind.|
|504|Command parameter not implemented|Die beim Versand der E-Mail mit Ihrem SMTP-Server verwendeten Einstellungen oder Optionen werden erkannt, sind in der Konfiguration jedoch deaktiviert. Bitte kontaktieren Sie Ihren Dienstleister.|
|535|Authentication failed|Die Benutzer-/Passwort-Informationen sind falsch oder der Versand von dieser E-Mail-Adresse ist blockiert. Überprüfen Sie den Zustand Ihrer E-Mail-Adresse über Ihr OVHcloud Kundencenter. Wenn der Account wegen Spam gesperrt wurde, können Sie den Versand durch eine Passwortänderung wieder entsperren. Weitere Informationen finden Sie in unserer Anleitung [Was tun, wenn ein Account aufgrund Spamversands gesperrt wurde?](https://docs.ovh.com/de/microsoft-collaborative-solutions/blocked-wegen-spam/).
|550|Requested action not performed: mailbox unavailable|Der Empfänger-Server konnte die verwendete E-Mail-Adresse nicht überprüfen. Dies wird meist durch eine ungültige Ziel-E-Mail-Adresse verursacht, kann aber auch bedeuten, dass der Server Probleme mit der Firewall oder der Konnektivität hat. Überprüfen Sie die E-Mail-Adresse des Empfängers, und/oder versuchen Sie es erneut.|
|551|User not local or invalid address – Relay denied|Dies wird typischerweise als Strategie zur Vermeidung von Spam verwendet. Es besagt, dass das Mail-Relay aus irgendeinem Grund nicht berechtigt ist, Ihre Nachricht an einen anderen Server als den Ihren weiterzuleiten. Bitte kontaktieren Sie Ihren Dienstleister.|
|552|Requested mail actions aborted – Exceeded storage allocation|Der Empfängeraccount hat keinen Speicherplatz mehr für den Empfang von Nachrichten. Leider besteht die einzige Lösung darin, den Empfänger über eine andere Methode zu kontaktieren.|
|553|Requested action not taken – Mailbox name invalid|Dies wird in der Regel durch eine falsche Empfänger-E-Mail-Adresse verursacht. Bitte überprüfen Sie, dass die betroffene E-Mail-Adresse korrekt ist.|
|554|Transaction failed, "No SMTP service here")|Das ist üblicherweise ein Blacklist-Problem. Überprüfen Sie, ob die IP-Adresse des ausgehenden Mailservers nicht geblockt ist ([SpamHaus](https://check.spamhaus.org/){.external}).|
|555|MAIL FROM / RCPT TO, unrecognised or unimplemented arguments|Der ausgehende SMTP-Server kann die E-Mail-Adresse, die Sie in den Feldern "Von" oder "An" verwendet haben, nicht deuten. Bitte prüfen Sie, ob die eingegebenen E-Mail-Adressen korrekt sind, und überprüfen Sie, dass Sie die von OVHcloud festgelegte Grenze nicht überschritten haben: 200 Mails / Stunde / Account / 300 Mails / Stunde / IP.|

## Weiterführende Informationen

[E-Mail FAQ](../e-mails-faq/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
