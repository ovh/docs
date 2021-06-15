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

**Letzte Aktualisierung am 28.05.2021**

## Ziel

Fehler auf den Exchange E-Mail-Accounts können zahlreiche Ursachen haben. Eine automatische Diagnose der Funktionen des Accounts reduziert diese Anzahl an Ursachen. Die Testergebnisse sind auch nützlich, wenn Sie Hilfe für Ihren Exchange Dienst anfordern.

**Diese Anleitung erklärt, wie Sie eine Exchange Diagnose starten und deren Ergebnisse interpretieren.**

## Voraussetzungen

- Sie verfügen über eine [OVHcloud Exchange](https://www.ovh.de/emails/hosted-exchange/) Lösung
- Sie verfügen über die Login-Daten für den zu überprüfenden Exchange Account
- Sie sind im OVHcloud [Kundencenter eingeloggt](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)

## In der praktischen Anwendung

### Diagnose durchführen

Loggen Sie sich in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und gehen Sie in den Bereich `Web Cloud`{.action}. Wählen Sie `Microsoft`{.action} im linken Menü aus, klicken Sie dann auf `Exchange`{.action} und wählen Sie Ihre Dienstleistung aus.

![Exchange-Diagnose](images/img_4450.png){.thumbnail}

Klicken Sie auf den Tab `Diagnosen`{.action} und wählen Sie im Drop-down-Menü den betreffenden Exchange Account aus. Geben Sie das Passwort des Accounts im dafür vorgesehenen Feld ein und klicken Sie dann auf `Diagnose starten`{.action}.

![Exchange-Diagnose](images/img_4451.png){.thumbnail}

Der Diagnosevorgang dauert etwa 3 bis 10 Minuten. Hier ein Beispiel für die Ergebnisse:

![Exchange-Diagnose](images/img_4471.png){.thumbnail}

Auf der Ergebnisseite finden Sie zwei Aktionen, um fortzufahren:

- `Neue Diagnose`{.action}: eine andere Diagnose starten.

- `Support-Anfrage erstellen`{.action}: erlaubt es Ihnen, ein Ticket bei unserem technischen Support zu erstellen. Das Ticket enthält die Ergebnisse der Diagnose.

### Erläuterungen zu Fehlern

Lesen Sie die folgende Zusammenfassung der möglichen Fehler, um die schnellste Lösung zu finden.

### Der Account wurde wegen Spam-Versand blockiert <a name="blocked"></a>

Ein gesperrter Account empfängt immer E-Mails, der Versand wurde jedoch durch das automatische Spam-Schutzsystem deaktiviert.

Überprüfen Sie dies im Tab E-`Mail-Accounts`{.action} Ihres Exchange Dienstes. Der Account wird in der Spalte "Status"`der` Tabelle mit einem SPAM-Vermerk versehen.

Bitte lesen Sie unsere [Anleitung Was tun bei einem gesperrten Spam-Account?](../blocked-wegen-spam/) damit unsere Sicherheitsteams den Account wieder aktivieren können.

### Das Abonnement des Accounts ist abgelaufen <a name="expired"></a>

Da Ihr Abonnement nicht mehr aktiv ist, wurden Versand und Empfang deaktiviert. Sie können [den Abrechnungsstatus der Dienstleistung](../exchange-abrechnung-verwalten/) im OVHcloud Kundencenter überprüfen und [ ](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)verlängern, um den Account wieder zu aktivieren.

### Der Account wurde aus Sicherheitsgründen blockiert

Wenn im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eine Sicherheitseinstellungen aktiviert sind, kann der Account vorübergehend gesperrt werden.

Sie können zum Beispiel festlegen, dass der Account nach mehreren fehlgeschlagenen Verbindungsversuchen für einen von Ihnen bestimmten Zeitraum gesperrt wird.

In diesem Fall können Sie warten, bis der Account wieder verfügbar ist, oder unseren Exchange Teams kontaktieren, indem Sie eine Support-Anfrage erstellen.

Weitere Informationen zu dieser Funktion finden Sie [in unserer Anleitung zur Sicherheitseinstellungen](../passwort-sicherheitseinstellungen-verwalten/).

### Die Authentifizierung ist fehlgeschlagen <a name="password"></a>

Dies kann durch die Eingabe eines falschen Account-Passworts verursacht werden. Überprüfen Sie zuerst, ob das Passwort korrekt ist, indem Sie sich mit dem Webmail [verbinden](../exchange_2016_verwendung_der_outlook_web_app/), und starten Sie die Diagnose neu.

Wenn nötig können Sie das Passwort des betreffenden Accounts im Tab `E-Mail-Accounts`{.action} in Ihrem [OVHcloud Kundencenter ändern](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de). Wenn das Problem weiterhin besteht, erstellen Sie eine Support-Anfrage.

### Der MX-Eintrag der Domain ist ungültig

Dieser Fehler zeigt an, dass die E-Mails nicht empfangen werden können, und steht in Zusammenhang mit dem Fehler "**ACHTUNG: Die Test-E-Mail wurde nicht empfangen.** "

Je nach Verwendung Ihres Exchange Dienstes sind die folgenden MX Server gültig:

- Exchange allein: mx0.mail.ovh.net, mx2.mail.ovh.net, mx3.mail.ovh.net und mx4.mail.ovh.net
- Exchange + bei OVHcloud gehostete POP/IMAP-E-Mails: mx0.mail.ovh.net, mx2.mail.ovh.net, mx3.mail.ovh.net und mx4.mail.ovh.net
- Exchange + nicht bei OVHcloud gehostete POP/IMAP-E-Mails: ex<b>?</b>.mail.ovh.net

<a name="hostname"></a>

> [!warning]
> In unseren Anleitungen verwenden wir als Servernamen: ex<b>?</b>.mail.ovh.net. Ersetzen Sie das "? " durch die dem Server Ihres Exchange Dienstes entsprechende Nummer.<br>
> Diese Informationen finden Sie im OVHcloud Kundencenter im Bereich `Web`{.action}.  Öffnen Sie `Microsoft`{.action} im Menü links, dann `Exchange`{.action} und wählen Sie Ihre Dienstleistung aus. Der Name des Servers wird im Bereich **Verbindung** im Tab `Allgemeine Informationen`{.action} angezeigt.
>

### Der SRV-Eintrag der Domain ist ungültig

Der SRV-Eintrag dient der automatischen Konfiguration Ihres Exchange Accounts mit einem kompatiblen E-Mail-Programm wie Microsoft Outlook.

Sie können diese Einstellungen in der [DNS Zone Ihrer Domain überprüfen](../../domains/webhosting_bearbeiten_der_dns_zone/).

Hier die Werte für einen Exchange Dienst:

Feld | Wert
------------ | -------------
Priorität | 0
Gewichtung | 0
Port | 443
Ziel | [ex<b>?</b>.mail.ovh.net](#hostname) (ersetzen Sie die "?" durch die entsprechende Nummer Ihres Exchange Servers)

### Die Test-E-Mail konnte nicht über den Account versendet werden

Dieser Fehler zeigt an, dass der Versand von E-Mails generell nicht möglich ist und mehrere Ursachen haben kann:

- [Ihr Account wurde geschlossen](#expired)
- [Das eingegebene Passwort ist nicht korrekt](#password)
- [Ihr Account wurde wegen Spam-Mails blockiert](#blocked)
- [Auf der Infrastruktur ist eine Störung aufgetreten](http://travaux.ovh.net/?project=31&status=all&perpage=50)

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
