---
title: Verwendung der Exchange Fehlerdiagnose
excerpt: 'Erfahren Sie hier, wie Sie eine automatische Fehlerdiagnose für Exchange Accounts durchführen'
slug: exchange_diagnose_was_tun_bei_fehlern
legacy_guide_number: g2277
section: Troubleshooting
order: 2
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 08.07.2022**

## Ziel

Da es eine Vielzahl von Gründen für mögliche Fehler bei Exchange-Accounts gibt, kann eine automatische Überprüfung der Kontofunktionen helfen, die Ursachen einzugrenzen. Die Prüfergebnisse sind daher hilfreich für eine Supportanfrage bei Problemen mit Ihrem Exchange-Dienst.

**Diese Anleitung erklärt, wie Sie eine Exchange Diagnose starten und deren Ergebnisse interpretieren.**

## Voraussetzungen

- Sie haben einen [OVHcloud Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/) Dienst eingerichtet.
- Sie verfügen über die Login-Daten für den zu überprüfenden Exchange Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben keine ausstehenden [Zahlungen](https://docs.ovh.com/de/billing/ovh-rechnungen-verwalten/#pay-bills) zu dieser Dienstleistung und der dazugehörigen Domain.


## In der praktischen Anwendung

### Diagnose durchführen

Loggen Sie sich in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und gehen Sie in den Bereich `Web Cloud`{.action}. Öffnen Sie `Microsoft`{.action} und dann `Exchange`{.action}, und wählen Sie Ihre Dienstleistung aus.

![Exchange-Diagnose](images/img_4450.png){.thumbnail}

Klicken Sie auf den Tab `Diagnosen`{.action} und wählen Sie im Drop-down-Menü den betreffenden Exchange Account aus. Geben Sie das Passwort des Accounts im dafür vorgesehenen Feld ein und klicken Sie dann auf `Diagnose starten`{.action}.

![Exchange-Diagnose](images/img_4451.png){.thumbnail}

Der Diagnosevorgang dauert etwa 3 bis 10 Minuten. Hier ein Beispiel für die Ergebnisse:

![Exchange-Diagnose](images/img_4471.png){.thumbnail}

Auf der Ergebnisseite finden Sie zwei Aktionen, um fortzufahren:

- `Neue Diagnose`{.action}: eine andere Diagnose starten.

- `Support-Anfrage erstellen`{.action}: ermöglicht es Ihnen, eine Anfrage an unseren technischen Support zu erstellen, die die Diagnoseergebnisse enthält. 

### Fehler-Erläuterungen

Schauen Sie in der folgenden Übersicht möglicher Fehler nach, um die schnellste Lösung zu finden.

### Der Account wurde wegen Spam-Versand blockiert <a name="blocked"></a>

Ein blockiertes Konto empfängt weiterhin E-Mails, aber der Versand wurde vom automatischen Spamschutzsystem deaktiviert.

Sie können dies im Tab `E-Mail-Accounts`{.action} Ihres Exchange-Dienstes überprüfen. Für den Account wird dann der Status `SPAM` in der Tabelle angezeigt.

Bitte folgen Sie den Anweisungen in [dieser Anleitung](../blocked-wegen-spam/), damit unsere Sicherheitsteams das Konto wieder freischalten können.

### Das Abonnement des Accounts ist abgelaufen <a name="expired"></a>

Da Ihr Abonnement nicht mehr aktiv ist, wurden Versand und Empfang deaktiviert.<br>
Um Ihr Abonnement wieder zu aktivieren genügt es, die [Abrechnungsfrequenz](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange-abrechnung-verwalten/#periodicity) im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) neu zu konfigurieren.

### Account aufgrund der Sicherheitsrichtlinien gesperrt

Wenn im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eine Sicherheitsrichtlinie aktiv ist, kann der Account vorübergehend gesperrt sein.

Sie können zum Beispiel festlegen, dass das Konto nach mehreren fehlgeschlagenen Anmeldeversuchen für eine von Ihnen festgelegte Zeitspanne gesperrt werden soll.

In diesem Fall können Sie entweder warten, bis das Konto wieder verfügbar ist, oder Sie können unsere Exchange-Teams kontaktieren, indem Sie eine Support-Anfrage erstellen.

Weitere Informationen zu dieser Funktion finden Sie in unserer [Anleitung zu Sicherheitsrichtlinien](../passwort-sicherheitseinstellungen-verwalten/).

### Webmail-Authentifizierung ist fehlgeschlagen <a name="password"></a>

Vergewissern Sie sich zunächst über eine Webmail-Anmeldung, dass das Passwort korrekt ist, und starten Sie dann die Diagnose neu.

Dies kann durch die Eingabe eines falschen Account-Passworts verursacht werden. Überprüfen Sie zunächst, ob das Passwort korrekt ist, indem Sie sich [über Webmail einloggen](../exchange_2016_verwendung_der_outlook_web_app/), und starten Sie dann die Diagnose neu.

Wenn nötig können Sie das Passwort des betroffenen Accounts im Tab `E-Mail-Accounts`{.action} in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ändern. Wenn das Problem weiterhin besteht, erstellen Sie eine Support-Anfrage.

### Der MX-Eintrag der Domain ist ungültig

Dieser Fehler zeigt an, dass E-Mails nicht empfangen werden können, und steht in Zusammenhang mit dem Fehler "**ACHTUNG: Die Test-E-Mail wurde nicht empfangen.** "

Je nach Verwendung Ihres Exchange Dienstes sind die folgenden MX Server gültig:

- Nur Exchange: mx0.mail.ovh.net, mx1.mail.ovh.net, mx2.mail.ovh.net, mx3.mail.ovh.net & mx4.mail.ovh.net
- Exchange und bei OVHcloud gehostete POP/IMAP-E-Mails: mx0.mail.ovh.net, mx1.mail.ovh.net, mx2.mail.ovh.net, mx3.mail.ovh.net & mx4.mail.ovh.net
- Exchange und nicht bei OVHcloud gehostete POP/IMAP-E-Mails: ex<b>?</b>.mail.ovh.net
<a name="hostname"></a>


> [!warning]
> In unseren Anleitungen verwenden wir als Servernamen: ex<b>?</b>.mail.ovh.net. Ersetzen Sie das "?" durch die dem Server Ihres Exchange Dienstes entsprechende Nummer.
>
> Diese Informationen finden Sie im OVHcloud Kundencenter im Bereich `Web Cloud`{.action}: Öffnen Sie `Microsoft`{.action}, dann `Exchange`{.action} im Menü links, und wählen Sie Ihre Dienstleistung aus. Der Servername wird im Bereich **Verbindung** im Tab `Allgemeine Informationen`{.action} angezeigt.
>

### Der SRV-Eintrag der Domain ist ungültig

Der SRV-Eintrag dient der automatischen Konfiguration Ihres Exchange Accounts mit einem kompatiblen E-Mail-Programm wie Microsoft Outlook.

Sie können diese Einstellungen in der [DNS Zone Ihrer Domain überprüfen](../../domains/webhosting_bearbeiten_der_dns_zone/).

Die folgende Tabelle enthält die Werte für einen Exchange Dienst:

Feld | Wert
------------ | -------------
Priorität | 0
Gewichtung | 0
Port | 443
Ziel | [ex<b>?</b>.mail.ovh.net](#hostname) (ersetzen Sie "?" durch die entsprechende Nummer Ihres Exchange Servers)

### Die Test-E-Mail konnte nicht über den Account versendet werden

Dieser Fehler zeigt an, dass der Versand von E-Mails generell nicht möglich, was mehrere Ursachen haben kann:

- [Ihr Account wurde geschlossen](#expired)
- [Das eingegebene Passwort ist nicht korrekt](#password)
- [Ihr Account wurde wegen Spam-Versand blockiert](#blocked)
- [Auf der Infrastruktur ist eine Störung aufgetreten](https://web-cloud.status-ovhcloud.com/)

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
