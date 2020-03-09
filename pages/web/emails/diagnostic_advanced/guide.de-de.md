---
title: 'Die Statuscodes von SMTP-Servern'
excerpt: 'Details zu den Statuscodes von SMTP-Servern'
slug: die_statuscodes_von_smtp-servern
section: Diagnose
order: 1
legacy_guide_number: g2272
---

## SMTP-Befehle
SMTP-Befehle werden für den Versand von E-Mails benötigt.
Für eine Server-Abfrage muss mittels "Befehlen" eine Kommunikation eingeleitet werden. Der Server gibt dann eine entsprechende Antwort aus.


## Serverantworten
Die Antworten auf SMTP-Befehle sollen die Synchronisierung von Anfragen und Aktionen im E-Mailing-Prozess sicherstellen, damit der SMTP-Client zu jedem Zeitpunkt den Status des SMTP-Servers kennt.
Zu jedem Befehl muss eine Antwort generiert werden.

Eine SMTP-Antwort besteht aus einer dreistelligen Zahl, gefolgt von einem kurzen Text.
Die Zahl dient den Servern dazu, den nächsten Schritt bestimmen zu können. Der Text hingegen ist eine Information für den User.

Die drei Ziffern des Antwortcodes haben jeweils eine spezifische Bedeutung:

- Die erste Ziffer zeigt an, ob die Anfrage verarbeitet werden konnte, weitere Informationen benötigt werden oder die Bearbeitung der Anfrage fehlgeschlagen ist. Der SMTP-Client kann in Abhängigkeit von der ausgegebenen ersten Ziffer die nächste Aktion einleiten.

- Die zweite und dritte Ziffer liefern zusätzliche Informationen.


## Kurzüberblick: Serverantworten (erste Ziffer)
Folgende Werte sind als erste Ziffern im Antwortcode möglich:


- 2xx  Positive Antwort:

Die angeforderte Aktion wurde erfolgreich ausgeführt. Eine neue Anfrage kann unmittelbar gestartet werden.


- 3xx  Positive Antwort (Warten auf weitere Informationen):

Der Befehl wurde akzeptiert, zur Ausführung der Aktion werden aber weitere Informationen benötigt.
Der SMTP-Client muss eine neue Anfrage mit der benötigten Information senden. 


- 4xx  Negative Antwort (Temporärer Fehler):

Der Befehl wurde nicht akzeptiert und die angeforderte Aktion konnte nicht ausgeführt werden. Da es sich um einen temporären Fehler handelt, ist eine erneute Anfrage möglicherweise erfolgreich.


- 5xx  Negative Antwort:

Der Befehl wurde nicht akzeptiert und die angeforderte Aktion konnte nicht ausgeführt werden. Der SMTP-Client sollte dieselbe Anfrage nicht erneut schicken.


## Bedeutung und Fehlerbehebung
In dieser Liste finden Sie die gängigsten SMTP-Statuscodes:

|Statuscodes|Details|Was tun?|
|---|---|---|
|211|System-Status oder System-Hilfe|Auf diese Nachricht folgen weitere Informationen.|
|214|Hilfe|Enthält Informationen über Ihren Server und verweist in der Regel auf eine FAQ-Seite.|
|220|Server bereit|Mit dieser Nachricht wird Ihnen mitgeteilt, dass der Server bereit ist.|
|221|Server beendet Verbindung|Mit dieser Nachricht wird Ihnen mitgeteilt, dass der Server die Kommunikation nach erfolgreichem Abschluss beendet.|
|250|Befehl ausgeführt|Ihre E-Mail wurde verschickt.|
|251|Nutzer nicht auf dem Server, Weiterleitung|Mit dieser Nachricht wird Ihnen mitgeteilt, dass die Nachricht an einen anderen Server gesendet wird (Weiterleitung, anderer MX-Server, ...).|
|252|Überprüfung der Empfängeradresse nicht möglich, Weiterleitung wird versucht|Der Empfänger kann derzeit nicht verifiziert werden, aber die Nachricht wird sehr wahrscheinlich später zugestellt.|
|354|Absender- und Empfängeradresse korrekt empfangen|Der Server wartet aktuell auf den Inhalt der Nachricht, um sie zu versenden.|
|420|Zeitüberschreitung, Verbindungsproblem|Diese Fehlermeldung geben ausschließlich GroupWise Mailserver aus. Kontaktieren Sie den Administrator des Mailservers, an den die Nachricht versandt werden soll.|
|421|Service nicht verfügbar, Verbindung wird beendet|Unbekannte Fehlerursache; überprüfen Sie, ob der Versand an andere Domains möglich ist. Wenn dies der Fall ist, versuchen Sie es später erneut.|
|432|Empfang der E-Mail auf dem Exchange Server angehalten|Diese Fehlermeldung geben ausschließlich Microsoft Exchange Mailserver aus. Kontaktieren Sie den Administrator des Mailservers, an den die Nachricht versandt werden soll.|
|449|Routing-Fehler|Diese Fehlermeldung geben ausschließlich Microsoft Exchange Mailserver aus. Microsoft empfiehlt die Ausführung einer Diagnose mit dem Tool [WinRoute](https://support.microsoft.com/de-de/kb/281382).|
|450|Angeforderte Aktion nicht ausgeführt, Mailbox nicht verfügbar (zum Beispiel: Mailbox belegt, aus Sicherheitsgründen oder wegen Blacklisting temporär blockiert)|Überprüfen Sie, ob die IP-Adresse des Mailservers blacklisted ist ([SpamHaus](https://www.spamhaus.org/lookup/)); überprüfen Sie auch, ob die E-Mail Wörter enthält, die zu einer Einordnung als SPAM führen könnten.|
|451|Aktion abgebrochen: Fehler bei der lokalen Ausführung|Diese Fehlermeldung kann auf eine temporäre Überlastung oder einen Fehler im FTP Record zurückzuführen sein. Achten Sie auf weitere Servermeldung oder kontaktieren Sie den Administrator, wenn das Problem weiterhin besteht.|
|452|Aktion abgebrochen: unzureichender Systemspeicher. |Ihr Mailserver ist "überfüllt". Dieses Problem kann auch entstehen, wenn zu viele Nachrichten gleichzeitig verschickt werden sollen. Überprüfen Sie Ihren Postausgang und versuchen Sie es erneut.|
|455|Server kann die Parameter nicht empfangen|Warten Sie eine Zeit lang ab und versuchen Sie es dann erneut. Wenn der Versuch fehlschlägt, kontaktieren Sie den Administrator des Mailservers des Empängers.|
|500|Syntaxfehler, unbekannter Befehl (dies kann auch bedeuten, dass die Befehlszeile zu lang ist)|Dieser Fehler wird häufig durch Antivirus-Programme oder Firewalls des Absenders verursacht. Überprüfen Sie diese Punkte und versuchen Sie es erneut.|
|501|Syntaxfehler, falsche Parameter oder Argumente|Dieser Fehler wird häufig durch Fehler in der Empfängeradresse oder durch Antivirus-Programme oder Firewalls des Absenders verursacht. Überprüfen Sie die Empänger-Adresse sowie Ihre eigenen Antivirus-Programme oder Firewalls.|
|502|Befehl nicht implementiert|Die beim Versand der E-Mail mit Ihrem SMTP-Server verwendeten Parameter oder Optionen werden erkannt, wurden aber bei der Konfiguration deaktiviert. Kontaktieren Sie Ihren Service-Provider.|
|503|Falsche Reihenfolge der Befehle|Hier liegt in der Regel ein Authentifizierungsproblem vor. Überprüfen Sie in Ihrem Mail-Programm, ob Sie für den SMTP-Server korrekt authentifiziert sind.|
|504|Befehlsparameter nicht implementiert|Die beim Versand der E-Mail mit Ihrem SMTP-Server verwendeten Parameter oder Optionen werden erkannt, wurden aber bei der Konfiguration deaktiviert. Kontaktieren Sie Ihren Service-Provider.|
|550|Aktion abgebrochen: Mailbox nicht verfügbar|Der Zielserver konnte die verwendete E-Mail-Adresse nicht verifizieren. Meist wird dieser Fehler durch eine ungültige Empfängeradresse verursacht; es kann sich aber auch im Firewall- oder Connectivity-Probleme beim Zielserver handeln. Überprüfen Sie die Empfängeradresse und/oder versuchen Sie es erneut.|
|551|Nutzer nicht lokal|Hierbei handelt es sich in der Regel um eine Antispam-Strategie. Der Mail-Relay ist aus irgendeinem Grund nicht berechtigt, Ihre Nachricht an einen anderen Server als Ihren eigenen zu übermitteln. Kontaktieren Sie Ihren Service-Provider.|
|552|Aktion abgebrochen: nicht genügend Speicherplatz|Der Nutzer, den Sie kontaktieren möchten, verfügt leider nicht mehr über genügend Speicherplatz für den Empfang Ihrer Nachricht. Leider besteht hier die einzige Lösungsmöglichkeit darin, den Adressaten auf einem anderen Weg zu kontaktieren.|
|553|Aktion abgebrochen: E-Mail-Adresse nicht erlaubt|Dieser Fehler wird in der Regel dadurch verursacht, dass die Empfängeradresse nicht korrekt ist. Überprüfen Sie die betreffende E-Mail-Adresse.|
|554|Transaktion fehlgeschlagen: "kein SMTP-Service verfügbar")|Hier handelt es sich in der Regel um ein Blacklisting-Problem. Überprüfen Sie, ob die IP-Adresse des Mailservers blacklisted ist ([SpamHaus](https://www.spamhaus.org/lookup/)).|
|555|MAIL FROM / RCPT TO, Parameter nicht erkannt oder nicht umgesetzt|Der SMTP-Postausgangsserver registriert eine der verwendeten E-Mail-Adressen nicht korrekt ("Von" oder "An"). Überprüfen Sie, ob die angegebenen Adressen korrekt sind und ob Sie möglicherweise die von OVH festgesetzten Limits überschritten haben: 200 E-Mails / Stunde / Account und 300 E-Mails / Stunde / IP|