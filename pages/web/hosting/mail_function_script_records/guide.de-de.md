---
title: 'Automatische E-Mails eines Webhostings verwalten'
excerpt: 'Erfahren Sie hier, wie Sie über ein Webhosting versendete automatische E-Mails verwalten'
slug: webhosting_verwaltung_automatischer_e-mails
section: 'Diagnose'
order: 09
---

**Letzte Aktualisierung am 12.10.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Automatische E-Mails sind Nachrichten, die über Skripte versendet werden, gewöhnlich mithilfe der Funktion "mail()" von PHP. Sie werden beispielsweise für das Kontaktformular Ihrer Website verwendet, um es Besuchern zu ermöglichen, Ihnen Nachrichten zu schicken.

> [!primary]
>
> Diese Anleitung betrifft hauptsächlich E-Mails, die über Skripte auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) mit der "mail()"-Funktion von PHP versendet werden.
>
> Wenn Sie die E-Mail-Accounts Ihres MX Plans oder Ihres [OVHcloud Webhostings](https://www.ovhcloud.com/de/web-hosting/){.external} verwalten möchten, lesen Sie unsere Dokumentation zu [Hosted E-Mail - MX Plan](https://docs.ovh.com/de/emails/).
>

> [!success]
>
> Wir empfehlen die Verwendung der "mail()" Funktion von PHP. Sie können aber auch E-Mails von Ihrem Hosting aus über ein Skript mit dem [SMTP Protokoll](#SMTP) versenden.
>

**Diese Anleitung erklärt, wie Sie über Ihr OVHcloud Webhosting versendete automatische E-Mails überwachen und verwalten.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external}.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Die Überwachung und Verwaltung der automatisierten E-Mails Ihres OVHcloud Webhostings erfolgt über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Gehen Sie nach dem Login in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Mehr`{.action} und wählen Sie `E-Mail-Skripte`{.action}.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

Hier können Sie über Ihr [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) versendete automatische E-Mails verwalten.

### Informationen im Tab "E-Mail-Skripte"

![hosting](images/Interface.png){.thumbnail}

Diese Seite zeigt diverse Informationen zur Nachverfolgung des von Ihren Skripten generierten E-Mail-Versands:

- **Dienststatus**: Aktueller Status des Dienstes, der den automatischen Versand von E-Mails von Ihrem Webhosting aus durchführt:
    - Ein grüner Zustand (*"Aktiv"* oder *"Force"*) bedeutet, dass der Versand betriebsbereit ist.
    - Ein roter Zustand (*"Inaktiv"*, *"Bounce"* oder *"SPAM"*) bedeutet, dass keine E-Mails mehr gesendet werden. <br>

    Dieser Status hat Einfluss auf den Sendungsvorgang.

- **Fehlerbericht an**: Diese Option erlaubt es, täglich einen Statusbericht an die E-Mail-Adresse Ihrer Wahl zu erhalten. Aktivieren Sie ihn, indem Sie auf `Empfänger ändern`{.action} klicken. Dieser Bericht enthält versendete E-Mails, die bei OVHcloud eine Fehlermeldung zurückliefern. Mit dem Button `E-Mails im Fehlerstatus`{.action} rechts auf der Seite `E-Mail-Skripte`{.action} können Sie ebenfalls Fehlerberichte einsehen.
- **Gesamtzahl versandter E-Mails**: Bezieht sich auf die Anzahl der seit der Erstellung Ihres OVHcloud Webhostings versendeten automatischen E-Mails.
- **Heute versandte E-Mails**: Gesamtzahl der am aktuellen Tag gesendeten automatischen E-Mails.
- **Gesamtzahl E-Mails im Fehlerstatus**: Die Anzahl der seit Erstellung Ihres Webhostings versendeten automatischen E-Mails, die bei OVHcloud eine Fehlermeldung zurückgegeben haben.
- **History der versandten E-Mails**: Verlaufskurve der E-Mails, die in den letzten Tagen von Ihrem Webhosting aus gesendet wurden.

Rechts können Sie den Versand automatischer E-Mails über Ihr Webhosting verwalten. Je nach Zustand des Dienstes sind einige Optionen nicht verfügbar.

- **E-Mails bereinigen**: Löscht die in der Warteschleife befindlichen E-Mails und entsperrt den Versand von E-Mails.
- **E-Mails im Fehlerstatus**: Entsperrt den Versand automatischer E-Mails von Ihrem Webhosting. Die in der Warteschleife befindlichen E-Mails werden ebenfalls wieder für den Versand freigegeben.
- **Versand blockieren**: Sperrt den E-Mail-Versand Ihres Webhostings. E-Mails, die von Ihren Skripten nach der Sperrung generiert werden, werden nicht abgeschickt, sondern für maximal 72 Stunden in einer Warteschleife gespeichert.

Um die gewünschte Aktion durchzuführen, klicken Sie auf den Button und dann auf `Bestätigen`{.action}. In einigen Fällen kann es mehrere Minuten dauern, bis die Ausführung wirksam wird.

> [!primary]
>
> Wir empfehlen Ihnen dringend, ein Sicherheitssystem, etwa ein "Captcha" in den Formularen Ihrer Webseite einzurichten, die E-Mails versenden können (z.B. ein Kontaktformular), um den Missbrauch der automatisierten E-Mails Ihres Webhostings zu vermeiden.
>

Wenn Sie feststellen, dass die von Ihren Skripten generierten E-Mails nicht mehr versendet werden, obwohl der Status des Dienstes weiterhin den Versand erlaubt (*"Aktiv"* oder *"Force"*), unternehmen Sie zunächst die folgenden Schritte:

- **Versandskripte überprüfen**: Skripte können aufgrund eines Syntaxfehlers den Versand von E-Mails nicht erfolgreich abschließen. Überprüfen Sie den Inhalt Ihrer Skripte, korrigieren Sie diese bei Bedarf und führen Sie anschließend einen weiteren Versuch durch.

- **E-Mail-Versand über ein Testskript prüfen**: Erstellen Sie ein Testskript, um eine E-Mail an Ihre persönliche Adresse zu senden. Verwenden Sie folgenden Code:

```bash
<?php
$to = "Empfänger@Adresse.tld"; 
$subject = "Testmail PHP"; 
$content = "Body/Inhalt der Mail";
$headers = "From: Website <SenderEmail@Adresse.tld>\r\nReply-To: SenderEmail@Adresse.tld";

if (mail($to, $subject, $content, $headers))
echo "Erfolgreiche Sendung";
else
echo "Versand gescheitert";
?>
```

Geben Sie als Sender in `$headers` zweimal dieselbe E-Mail-Adresse ein.

Wenn Sie die Nachricht *Erfolgreiche Sendung* an die E-Mail-Adresse erhalten, die Sie in `$to` definiert haben, zeigt dies an, dass die Skripte, die Ihre E-Mails versenden, Fehler enthalten.

- **Stellen Sie sicher, dass der Versand keinen SMTP-Server verwendet**: Geben Sie in den Einstellungen Ihrer Skripte keinen SMTP-Server an, wenn Sie die PHP-Funktion "mail()" verwenden. Wenn Sie über ein Interface verfügen, um den E-Mail-Versand Ihrer Website zu verwalten, ändern Sie diese Einstellung in dessen Konfiguration.

- **Überprüfen Sie die Gesamtgröße Ihrer E-Mail**: Die E-Mail darf die Gesamtgröße von **10 MB** (Kapselung und Header inklusive) nicht überschreiten. Der Inhalt Ihrer E-Mail sollte daher nicht größer sein als **7-8 MB**.

### Die Zustände "Inaktiv", "Bounce" und "SPAM"

#### Der Zustand "Inaktiv"

Dieser Zustand tritt in den folgenden Fällen ein:

- Zu viele E-Mails wurden in schneller Folge gesendet.
- Zu viele E-Mails geben Fehlermeldungen zurück.
- Sie haben die Funktion selbst über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) deaktiviert.

Gehen Sie zum Entsperren in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Mehr`{.action} und wählen Sie `E-Mail-Skripte`{.action}.

Klicken Sie dann auf `E-Mails im Fehlerstatus`{.action} und warten Sie einige Minuten, bis der Versand-Dienst wieder aktiv ist.

#### Der Zustand "Bounce"

Dieser Zustand tritt ein, wenn ein bestimmter Prozentsatz Ihrer automatisch versandten E-Mails mit einem Fehler abgelehnt werden.

Gehen Sie zum Entsperren in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Mehr`{.action} und wählen Sie `E-Mail-Skripte`{.action}.

Es sind zwei Optionen möglich:

- Wenn Sie auf `E-Mails im Fehlerstatus`{.action} klicken, wird der Status der Dienstleistung auf *"Force"* geändert. Das zulässige Verhältnis von **E-Mails im Fehlerstatus zur Gesamtzahl versendeter E-Mails** bevor ein eine Sperrung erfolgt, wird verdoppelt. Der Versand wird einige Minuten nach der Entsperrung wieder betriebsbereit sein.
- Wenn Sie auf `E-Mails bereinigen`{.action} klicken, werden alle E-Mails in der Warteschleife gelöscht, und der Status des Dienstes wird wieder auf *"Aktiv"* verschoben, ohne dass sich das Verhältnis verdoppelt.

#### Der Zustand "SPAM"

Dieser Zustand tritt ein, wenn Ihr Hosting E-Mails sendet, die als SPAM eingestuft werden.

Normalerweise wird diese Sperrung begleitet von einer E-Mail der Art **"Missbrauch mit Ihrem Hosting domain.tld"**, die automatisch von unseren Sicherheitsrobotern generiert wird.

![hosting](images/AbuseMail.png){.thumbnail}

Drei Szenarien sind möglich:

- **Fall 1: Missbrauch eines Kontaktformulars durch Bots**

Um diesen Zustand zu beheben, sichern Sie alle Skripte, die über Ihr Hosting E-Mails senden, mit einem "Captcha" System ab.

Gehen Sie dann in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Mehr`{.action} und wählen Sie `E-Mail-Skripte`{.action}.

Klicken Sie auf `E-Mails bereinigen`{.action}, um alle E-Mails in der Warteschleife zu löschen. Der Status des Dienstes wird zu *"Aktiv"* geändert.

In diesem Fall ist ein Löschen erforderlich, um SPAM-Nachrichten, die noch auf Versand warten, zu löschen.

- **Fall 2: Injektion schädlicher Dateien in Ihr Hosting**

Um diesen Zustand zu beheben, müssen Sie mindestens folgende Aktionen ausführen:

- Analysieren Sie die [Logs Ihres Hostings](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/), um Sicherheitslücken und infizierte Dateien zu identifizieren.
- Löschen oder korrigieren Sie die Dateien mit Schadcode und betroffene Module.
- Aktualisieren Sie bei der Nutzung eines CMS (WordPress, Joomla, PrestaShop, Drupal etc.) die zugehörigen Plugins und das zugehörige Thema.
- Sichern Sie Ihre Kontaktformulare mit einem "Captcha" ab.

Wenn Sie ein CMS verwenden, installieren Sie nur "offizielle" Plugins und Themen.
Aktualisieren Sie das CMS, die dazugehörigen Plugins und Themes so regelmäßig wie möglich, um eine Neuinfektion zu vermeiden.

Gehen Sie nach der Sicherung Ihres Hostings in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Mehr`{.action} und wählen Sie `E-Mail-Skripte`{.action}.

Klicken Sie auf `E-Mails bereinigen`{.action}, um alle E-Mails in der Warteschleife zu löschen. Der Status des Dienstes wird zu *"Aktiv"* geändert.

In diesem Fall ist ein Löschen erforderlich, um SPAM-Nachrichten, die noch auf Versand warten, zu löschen.

- **Fall 3: Versand legitimer E-Mails, die als SPAM eingestuft werden**

Wenn Sie E-Mails versendet haben, die zu einer Sperrung geführt haben, finden Sie hier einige Beispiele **zu vermeidender Pratiken** beim Versand von E-Mails (damit sie nicht unmittelbar als SPAM angesehen werden):

- 3 oder mehr Wörter in Großbuchstaben im Betreff der E-Mail.
- E-Mails mit leerem Betreff oder Inhalt.
- Die E-Mail enthält nur ein Bild mit einer Größe von mehr als 1 MB und ein wenig Text.
- Der Betreff der E-Mail beginnt mit: Hi, FREE, BUY, BUYING etc.
- Die E-Mail enthält mehr als 70 % "weißen Raum" (exzessiver Gebrauch der Tasten "SPACE" oder "ENTER").
- Die in der E-Mail verwendete Schriftgröße ist extrem groß.
- Für Textfarbe und die Hintergrundfarbe sind identisch.
- Die Sender-IP-Adresse (z.B. IP-Adresse Ihres Internet-Zugangspunkts) hat eine negative Reputation bei Spamschutz-Diensten.
- Der Header der gesendeten E-Mail entspricht nicht den RFC-Standards für E-Mails.
- Links in der E-Mail sind nicht korrekt.
- Eine URL in der E-Mail ist nicht sicher. (Beispiel: Eine als `https://` geschriebene URL, wobei die URL tatsächlich nur als `http://` existiert.)
- Die E-Mail enthält Schagwörter pornografischen Charakters oder ähnelt diesen.
- Die E-Mail enthält ausführbare Dateien (EXE, BAT, PIF, XML, XLSX oder Dokumente mit Makros); das gilt auch für Dateien in komprimierten Archiven (.zip, .rar etc.).

Wenn der Status des Dienstes trotzdem wieder den Zustand *"SPAM"* erhält, beantworten Sie die E-Mail, die Sie erhalten haben, und erklären Sie, dass Sie angemessene Maßnahmen ergriffen haben.

Unser Anti-Spam-Dienst wird die Situation analysieren und unser Support kann Ihnen dann mit der Entsperrung weiterhelfen.

### Versand von E-Mails mit einem "SMTP" Skript <a name="SMTP"></a>

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) oder stellen Ihre Fragen in der OVHcloud Community. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

Wir empfehlen Ihnen dringend, die "mail()"-Funktion von PHP bevorzugt zu nutzen. Ein Webhosting erlaubt es Ihnen jedoch, E-Mails über ein Skript mit SMTP (Simple Mail Transfer Protocol) zu versenden. Die Gesamtgröße Ihrer E-Mail darf nicht größer sein als **10 MB** (d.h. **7-8 MB ohne Kapselung**).

> [!warning]
> 
> E-Mails, die über ein Skript mit SMTP-Konfiguration versendet werden, können nicht über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwaltet und verfolgt werden.
> 

Verwenden Sie hierzu folgendes Skript, indem Sie ausschließlich die Werte `Host`, `Username` und `Password` durch Ihre eigenen SMTP-Einstellungen ersetzen:

```bash
$mail->Host = "eigener.smtp.server";
$mail->SMTPAuth = true; 
$mail->SMTPSecure = "ssl";
$mail->Port = 465; 
$mail->Username = "email@adresse.tld"; 
$mail->Password = "IhrPasswort"; 
```

> [!primary]
>
> Nur unter Verwendung eines OVHcloud E-Mail-Accounts können Sie für `SMTPSecure` auch *"starttls"* oder *"tls"* mit dem `Port` **587** nutzen. `SMTPSecure` *"ssl"* mit dem `Port` **465** sollte aber bevorzugt werden.
> 

## Weiterführende Informationen <a name="go-further"></a> 

[Die Logs Ihres Hostings einsehen](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/)

[Fehler "403 Forbidden" einer Webseite korrigieren](https://docs.ovh.com/de/hosting/diagnose-403-forbidden/)

[FTP-Speicherplatz Ihres Hostings wiederherstellen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
