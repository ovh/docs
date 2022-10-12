---
title: 'Automatische E-Mails eines Webhostings verwalten'
excerpt: 'In dieser Anleitung erfahren Sie, wie Sie über ein Webhosting versendete automatische E-Mails verfolgen und verwalten'
slug: webhosting_verwaltung_automatischer_e-mails
section: 'Diagnose'
order: 09
---

**Letzte Aktualisierung am 12.10.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

Automatische E-Mails sind Nachrichten, die über Skripte versendet werden. In der Regel mithilfe der "mail()"-Funktion von PHP. Sie werden beispielsweise für das Kontaktformular Ihrer Website verwendet und ermöglichen es Ihren Besuchern, Ihnen Nachrichten zu versenden.

> [!primary]
>
> Diese Anleitung betrifft hauptsächlich E-Mails, die über Skripte auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) mit der "mail()"-Funktion von PHP versendet werden.
>
> Wenn Sie die E-Mail-Adressen Ihres MX Plan Angebots oder Ihres [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} verwalten möchten, lesen Sie unsere Dokumentation zu [Shared E-Mails - MX Plan](https://docs.ovh.com/de/emails/).
>

> [!success]
>
> Wir empfehlen Ihnen dringend die Verwendung der "mail()" Funktion von PHP. Sie können aber auch E-Mails von Ihrem Shared Hosting über ein Skript mit dem [SMTP Protokoll](#SMTP) versenden.
>

**Diese Anleitung erklärt, wie Sie über Ihr OVHcloud Webhosting versendete automatische E-Mails verfolgen und verwalten.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external}.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## In der praktischen Anwendung

Die Überwachung und Verwaltung der automatisierten E-Mails Ihres OVHcloud Webhostings erfolgt über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=dec){.external}. Gehen Sie nach dem Login in den Bereich `Web Cloud`{.action}, klicken Sie auf Hosting-Pakete`{.action} und wählen Sie das betreffende `Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Plus`{.action} und dann auf die `E-Mail-Skripte`{.action}.

![hosting](images/monitoring-automatic-emails-step1.png){.thumbnail}

Auf der angezeigten Seite können Sie die von Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) versendeten automatischen E-Mails verfolgen und verwalten.

### Vorstellung des Teils "E-Mail-Skripte"

![hosting](images/Interface.png){.thumbnail}

Auf der Seite werden mehrere Informationen angezeigt, die es Ihnen ermöglichen, die Aktivität des von Ihren Skripten generierten automatischen E-Mail-Versands nachzuverfolgen:

- **Stand der Dienstleistung**: aktueller Status des Dienstes, der den automatischen Versand von E-Mails von Ihrem Webhosting aus durchführt:
    - Wenn grün (*"Aktiviert"* oder *"Kraft"*), bedeutet dies, dass die Sendungen betriebsbereit sind. 
    - Wenn rot (*"deaktiviert"*, *"Bounce"* oder *"SPAM"*) ist, werden die E-Mails nicht mehr versendet. <br>

    Je nach Status unterscheidet sich die Verwaltung der Sendungen.

- **Fehlerbericht an**: erhalten Sie ihn täglich auf der E-Mail-Adresse Ihrer Wahl. Legen Sie diesen fest, indem Sie den Button `Den Empfänger ändern`{.action} klicken. Dieser Bericht enthält die von Ihrem Webhosting aus versandten E-Mails, die bei OVHcloud zu einer Fehlermeldung zurückkehren. Mit dem Button `E-Mails im Fehlerstatus`{.action} können Sie diese Berichte auch jederzeit rechts auf der Seite `E-Mail-Skripte`{.action} einsehen.
- **Gesamtzahl versandter E-Mails**: Gesamtzahl der seit der Erstellung Ihres OVHcloud Webhostings versendeten automatischen E-Mails.
- **Heute versandte E-Mails**: Gesamtzahl der heute ausschließlich gesendeten automatischen E-Mails.
- **Gesamtzahl fehlerhafter E-Mails**: Gesamtzahl der seit der Erstellung Ihres Webhostings versendeten automatischen E-Mails, die bei OVHcloud eine Fehlermeldung erhalten haben.
- **Versandte E-Mails**: grafisch mit der History der E-Mails, die in den letzten Tagen von Ihrem Webhosting aus versandt wurden.

Rechts können Sie den Versand automatischer E-Mails über Ihr Webhosting verwalten. Je nach Zustand des Dienstes sind einige nicht verfügbar.

- **Versand blockieren**: sperrt die Verteilung des E-Mail-Versands Ihres Webhostings. E-Mails, die von Ihren Skripten nach der Sperrung generiert werden, werden nicht versandt, sondern für maximal 72 Stunden in einer Warteschleife gespeichert.
- ** Versand entsperren**: entsperrt den Versand automatischer E-Mails von Ihrem Webhosting. Die in der Warteschleife befindlichen E-Mails werden ebenfalls wieder für den Versand freigegeben.
- **E-Mails löschen**: löscht die in der Warteschleife befindlichen E-Mails und entsperrt den Versand von E-Mails.

Um die gewünschte Aktion durchzuführen klicken Sie auf den `entsprechenden`{.action} Button und dann auf Bestätigen. In einigen Fällen kann es mehrere Dutzend Minuten dauern, bis die gewünschte Aktion voll wirksam ist.

> [!primary]
>
> Wir empfehlen Ihnen dringend, ein Sicherheitssystem wie ein "Captcha" in den Formularen Ihrer Webseite einzurichten, die E-Mails versenden (z. B. ein Kontaktformular), um eine unerwünschte Nutzung der automatisierten E-Mails Ihres Webhostings zu vermeiden.
>

Wenn Sie feststellen, dass die von Ihren Skripten generierten E-Mails nicht mehr versendet werden, obwohl der Status des Dienstes weiterhin den Versand erlaubt (*"Aktiviert"* oder *"Kraft"*), empfehlen wir Ihnen:

- **Versandskripte überprüfen**: Skripte können aufgrund eines Syntachfehler den Versand von E-Mails nicht erfolgreich abschließen. Überprüfen Sie den Inhalt Ihrer Skripte, korrigieren Sie diese bei Bedarf und führen Sie anschließend einen weiteren Versuch durch.

- **E-Mail-Versand über ein Testskript testen**: Erstellen Sie ein Testskript, um eine E-Mail an Ihre persönliche Adresse zu senden, und verwenden Sie folgenden Code:

```bash
<?php
$to = "RecipientEmail@adress.tld"; 
$subject = "Test mail PHP"; 
$content = "The body/content of the Email";
$headers = "From: Website <SendingEmail@address.tld>\r\nReply-To: SendingEmail@address.tld";

if (mail($to, $subject, $content, $headers))
echo "The email has been sent successfully!";
else
echo "Email did not leave correctly!";
?>
```

Geben Sie für den `$headers` zweimal die gleiche sendende E-Mail-Adresse ein.

Wenn Sie die E-Mail *The email has been sent successfully!* an die E-Mail-Adresse erhalten, die Sie in `$to` definiert haben, zeigt dies an, dass die Skripte, die Ihre E-Mails versenden, Fehler enthalten.

- **Stellen Sie sicher, dass der Versand keinen SMTP Server verwendet**: Geben Sie in den Einstellungen Ihrer Skripte keinen SMTP-Server an, wenn Sie die PHP-Funktion "mail()" verwenden. Wenn Sie über ein Interface verfügen, um den Versand von E-Mails von Ihrer Website aus zu verwalten, ändern Sie diese Einstellung in deren Konfiguration.

- **Überprüfen Sie die Gesamtgröße Ihrer E-Mail**: Die geprüfte E-Mail darf die Gesamtgröße von **10 MB** (Verkapselung und Header inklusive) nicht überschreiten. Der Inhalt Ihrer E-Mail sollte daher nicht größer sein als **7/8 MB**.

### Die Zustände "Deaktiviert", "Bounce" und "SPAM" verwalten

#### Der Zustand "deaktiviert"

Dieser Zustand tritt ein, wenn :

- zu viele E-Mails wurden sehr schnell versandt
- Zu viele E-Mails sind gescheitert.
- Sie haben die Funktion selbst über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=dec) deaktiviert.

Gehen Sie zum Entsperren in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Plus`{.action} und dann auf die `E-Mail-Skripte`{.action}.

Klicken Sie dann auf `Versand entsperren`{.action} und warten Sie einige Minuten, bis der Versand-Dienst wieder aktiv ist.

#### Der Zustand "Bounce"

Dieser Zustand tritt ein, wenn ein bestimmter Prozentsatz Ihrer automatisch versandten E-Mails zurückkehrt.

Gehen Sie zum Entsperren in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Plus`{.action} und dann auf die `E-Mail-Skripte`{.action}.

Es sind zwei Optionen möglich:

- Wenn Sie auf `Entsperren der Sendung`{.action} klicken, wird der Status der Dienstleistung auf *"Kraft"* geändert. Das Verhältnis **E-Mails, die im Fehlerstatus zurückgegeben wurden, / Gesamtzahl der vor einer Sperrung autorisierten versandten E-Mails** wird verdoppelt. Der Versand wird einige Minuten nach der Entsperrung wieder betriebsbereit sein.
- Wenn Sie auf `E-Mails bereinigen`{.action} klicken, werden alle E-Mails in der Warteschleife gelöscht, und der Status des Dienstes wird wieder auf *"aktiviert"* verschoben, ohne dass sich das Verhältnis verdoppelt.

#### Der Zustand "SPAM"

Dieser Zustand tritt ein, wenn E-Mails, die als SPAM angesehen werden, von Ihrem Hosting aus versandt wurden.

Im Allgemeinen wird diese Sperrung begleitet durch den Versand einer E-Mail mit dem Titel **"Missbrauch mit Ihrem Hosting domain.tld"**, die automatisch von unseren Sicherheitsrobotern generiert wird:

![hosting](images/AbuseMail.png){.thumbnail}

Drei Szenarien sind möglich:

- **Fall Nr. 1: Nutzung eines Kontaktformulars durch einen Roboter**:

Um diesen Zustand zu beheben, müssen Sie alle Skripte, die über die Möglichkeit verfügen, E-Mails von Ihrem Hosting aus zu senden, mit einem "Captcha" System absichern.

Gehen Sie dann in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Plus`{.action} und dann auf die `E-Mail-Skripte`{.action}.

Klicken Sie dann auf `E-Mails löschen`{.action}, dann werden alle E-Mails in der Warteschleife gelöscht, und der Status des Dienstes wird erneut auf *"Aktiviert"* geändert.

In diesem Fall ist ein Löschen erforderlich, um SPAM-Meldungen, die noch nicht versandt werden, zu löschen.

- **Fall Nr. 2: Injektion bösartiger Dateien in Ihr Hosting**:

Um diese Situation zu beheben, müssen Sie mindestens folgende Aktionen ausführen:

- Analysieren Sie die [Logs Ihres Hostings](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/), um Sicherheitslücken und infizierte Dateien zu identifizieren.
- Löschen oder korrigieren Sie die böswillige(n) Datei(en)/Modul(en).
- Aktualisieren Sie für CMS (WordPress, Joomla, PrestaShop, Drupal...) das/die zugehörige(n) Plugin(s) und das zugehörige Thema.
- Sichern Sie Ihre Kontaktformulare mit einem "captcha" ab.

Wenn Sie ein CMS verwenden, verwenden Sie bevorzugt "amtliches(s) Plugin(s)/Thema(e)".
Aktualisieren Sie das CMS, die dazugehörigen Plugins und Themes so regelmäßig wie möglich, um eine Wiederholung zu vermeiden.

Gehen Sie nach der Sicherung Ihres Hostings in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus der Liste aus. Klicken Sie anschließend auf den Tab `Plus`{.action} und dann auf die `E-Mail-Skripte`{.action}.

Klicken Sie dann auf `E-Mails löschen`{.action}, dann werden alle E-Mails in der Warteschleife gelöscht, und der Status des Dienstes wird erneut auf *"Aktiviert"* geändert.

In diesem Fall ist ein Löschen erforderlich, um SPAM-Meldungen, die noch nicht versandt werden, zu löschen.

- **Fall Nr. 3: Versand legitimer E-Mails, die als SPAM** eingestuft werden:

Wenn Sie E-Mails versendet haben, die zu einer Sperrung geführt haben, finden Sie hier einige Beispiele **für Anwendungen** beim Versand einer E-Mail (damit diese nicht zu einfach als SPAM angesehen wird):

- 3 oder mehr Großbuchstaben im Betreff der E-Mail.
- Kein Betreff/Text in der E-Mail angegeben.
- Die E-Mail enthält nur ein Image mit einer Größe von mehr als 1 MB und einige Wörter.
- Der Betreff der E-Mail beginnt mit: Hi, FREE, BUY, BUYING....
- Die E-Mail enthält mehr als 70 % Leerzeichen (Missbrauch der Taste "ESPACE"oder "TASTATUR").
- Die Schriftart, die für die Erstellung der E-Mail verwendet wird, ist extrem groß.
- Für die Erstellung der E-Mail sind die Schreibfarbe und die Hintergrundfarbe identisch.
- Die öffentliche IP-Adresse (z. B. IP-Adresse Ihres Internet-Zugangspunkts) wird bei angesehenen Organisationen aufgelistet.
- Der Header der versandten E-Mail entspricht nicht den RFCs "E-Mails"(Normen oder Normen für E-Mails).
- Die Links in der E-Mail sind nicht korrekt.
- Eine URL in der E-Mail ist nicht gesichert (Beispiel: angemeldet auf `https://`, während die URL nur auf `http://`)
- Die E-Mail enthält Begriffe pornografischen Charakters oder ähnelt diesen.
- Die E-Mail enthält eine ausführbare E-Mail (EXE, BAT, PIF, XML, XLSX oder Dokumente mit "Makros"), auch wenn sie "gezippt"ist.

Wenn der Status des Dienstes trotzdem wieder in den Zustand*"SPAM"* kommt, beantworten Sie die E-Mail, die Sie erhalten haben, und geben Sie an, dass Sie das Notwendige getan haben.

Unser Anti-Spam-Dienst analysiert die Situation und unser Support hilft Ihnen bei der Klärung des Verfahrens.

## Versand von E-Mails mit einem "SMTP" Skript <a name="SMTP"></a>

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen den folgenden Teil zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) zu kontaktieren. Wir werden Ihnen leider keine Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#go-further) dieser Anleitung.
>

Wir empfehlen Ihnen dringend, die Verwendung der "mail()"-Funktion von PHP bevorzugt zu nutzen. Das Shared Hosting erlaubt es Ihnen jedoch, E-Mails über ein Skript mit SMTP (Simple Mail Transfer Protocol) zu versenden. Die Gesamtgröße Ihrer E-Mail darf nicht größer sein als **10 MB** (d. h. **7/8 MB ohne Einkapselung**).

> [!warning]
> 
> E-Mails, die mit einem Skript unter Verwendung einer SMTP-Konfiguration versendet werden, können nicht über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=dec) verwaltet und verfolgt werden.
> 

Verwenden Sie hierzu folgendes Skript, indem Sie ausschließlich die Werte `Host`, Username` und `Password` durch Ihre eigenen SMTP Einstellungen ersetzen:

```bash
$mail->Host = "your.smtp.server";
$mail->SMTPAuth = true; 
$mail->SMTPSecure = "ssl";
$mail->Port = 465; 
$mail->Username = "e-mail@adress.tld"; 
$mail->Password = "YourEmailPassword"; 
```

> [!primary]
>
> Wenn Sie eine OVHcloud E-Mail-Adresse verwenden und nur in diesem Fall, können Sie auch den `SMTPSecure` *"starttls"* oder *"tls"* mit dem `Port` **587** verwenden. `SMTPSecure` *"ssl"* mit dem `Port` **465*** bleiben jedoch weiterhin bevorzugt.
> 

## Weiterführende Informationen <a name="go-further"></a> 

[Die Logs Ihres Hostings einsehen](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/)

[Die auf Ihrer Website angezeigte Seite "403 Forbidden"korrigieren](https://docs.ovh.com/de/hosting/diagnose-403-forbidden/)

[FTP-Speicherplatz Ihres Hostings wiederherstellen](https://docs.ovh.com/de/hosting/webhosting-speicherplatz-wiederherstellen/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere verschiedenen [Support-Angebote](https://www.ovhcloud.com/de/support-levels/) einsehen.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
