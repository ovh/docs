---
title: FAQ OVHcloud E-Mails
slug: e-mails-faq
section: 'Erste Schritte'
order: 07
---

**Stand 24.08.2020**

## E-Mails FAQ

### Was tun, wenn ich keine E-Mails versenden/empfangen kann? 

Ist der Versand/Empfang von E-Mails nicht möglich, hängt das meistens mit der Konfiguration Ihrer Adresse auf Ihrem E-Mail-Client zusammen. Um dies zu überprüfen, loggen Sie sich in Ihrem [Webmail](https://www.ovh.com/de/mail/){.external} ein und führen Sie einen Versand- bzw. Empfangstest für Ihre Adresse durch.

- Wenn dies normal funktioniert, hängt das Problem mit Ihrer Softwarekonfiguration zusammen. 
- Ist der Versand bzw. Empfang hingegen weiterhin nicht möglich, stehen Ihnen andere Optionen für die Lösung des Problems zur Verfügung.

Erhalten Sie nach dem Versand einer E-Mail auf Ihrem E-Mail-Account eine Fehlermeldung? Wenn ja, notieren Sie die Fehlermeldung. Diese kann Ihnen beim Ermitteln der Ursache helfen (voller Posteingang, Posteingang nicht vorhanden, ...).

Darüber hinaus können Sie überprüfen, ob Ihre Domain die E-Mails an den richtigen Ort liefert. Begeben Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, wählen Sie die DNS-Zone Ihrer Domain aus und sehen Sie sich die eingerichteten MX-Einträge an. Diese Einträge müssen in der Form „mx**X**.mail.ovh.net.“ eingegeben sein (ersetzen Sie **X** mit jeweils den Ziffern zwischen 0 und 3).
Wenn die MX-Einträge abweichen, verwenden Sie möglicherweise ein E-Mail-Angebot eines anderen Anbieters.

**Tipps und Tricks**: Wenn Sie sich nicht in Ihrem Webmail einloggen können, ist Ihr Passwort möglicherweise fehlerhaft. Überprüfen Sie Ihr Passwort, ändern Sie es bei Bedarf über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und versuchen Sie erneut, sich einzuloggen. Weitere Informationen zur Passwortänderungen finden Sie in [unserer Dokumentation](../passwort-e-mail-adresse-aendern/).

### Wie kann ich meine E-Mail-Adresse einrichten und mit dem Webmail verwenden? 

Sie können Ihre E-Mail-Adresse auf einem E-Mail-Client wie Outlook, Thunderbird, Mac Mail etc. einrichten.
Hierzu stellen wir Ihnen Anleitungen zur Einrichtung Ihrer E-Mail-Adresse zur Verfügung. Diese finden Sie [hier](../).

Dank [Webmail](https://www.ovh.com/de/mail/){.external} können Sie jederzeit und von jedem beliebigen Gerät aus auf Ihren E-Mail-Dienst zugreifen. Nachdem Sie Ihren E-Mail-Account erstellt haben, können Sie sich hier einloggen, um auf diesen zuzugreifen.

**Tipps und Tricks**: Wenn Sie Ihren E-Mail-Account auf einem E-Mail-Client einrichten, empfehlen wir Ihnen, hierzu das IMAP-Protokoll zu verwenden. So werden die E-Mails weiterhin auf dem Server gespeichert und Sie können sie von überall aus über das [Webmail](https://www.ovh.com/de/mail/){.external} einsehen. Weitere Informationen hierzu finden Sie in [unserer Dokumentation](../allgemeines-zu-shared-e-mails/).

### Wie kann ich meine E-Mail-Dienste verwalten? 

Alle Ihre E-Mail-Adressen werden über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} verwaltet. Gehen Sie hierzu nach dem Login zum betreffenden Produkt. So können Sie das Passwort Ihrer E-Mail-Adressen ändern, ihren Speicherplatz überprüfen, neue E-Mail-Adressen erstellen oder vorhandene Adressen löschen.

**Tipps und Tricks**: Bei MX Plan Angeboten können Sie die Verwaltung eines E-Mail-Accounts auf einen anderen OVHcloud Account übertragen und behalten dabei weiterhin die Kontrolle über diesen Account. Richten Sie hierzu einfach eine Delegation über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein: Loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, gehen Sie in den Bereich `E-Mail` und wählen Sie die betreffende Domain aus. Gehen Sie anschließend in den Tab `E-Mail`{.action} und wählen Sie eine Option aus:

- `Freigaben für alle E-Mail-Adressen verwalten`{.action} im rechten Menü, um die Delegation für alle Mailaccounts zu verwalten
- `Delegationsverwaltung`{.action} um einen einzelnen Account zu delegieren (nach Klick auf `...`{.action} neben dem gewünschten Account)  

Bitte beachten Sie, dass eine OVHcloud Kundenkennung für beide Varianten benötigt wird.

### Wie kann ich die Anzahl der empfangenen Spam-Mails reduzieren? 

Um den Empfang von Spam-Mails einzuschränken, können Sie Eingangsregeln für Ihre E-Mails einrichten (bei MX Plan als „Filter“ bezeichnet). Ihr Ziel ist es, E-Mails bei Empfang in den Spam-Ordner zu verschieben oder direkt zu löschen.
Loggen Sie sich hierzu in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, gehen Sie in den Bereich `E-Mail` und wählen Sie die betreffende Domain aus. Gehen Sie anschließend in den Tab `E-Mail`{.action}, dann in die Spalte `Filter`{.action} und klicken Sie auf den Aktionsbutton.

Wird in Ihrem Kundencenter keine `Filter`{.action}-Spalte angezeigt, müssen zunächst im [Webmail](https://www.ovh.com/de/mail/){.external} über die Verwaltungsregeln des Posteingangs Filter erstellt werden. Lesen Sie die folgende Anleitung für mehr Informationen: [Posteingangsregeln in OWA erstellen](../../microsoft-collaborative-solutions/posteingangsregeln-in-owa-erstellen/#beispiel-2-unerwunschte-e-mails-spam-filtern).

**Tipps und Tricks**: Wenn Sie einen Filter für den Empfang von Spam-Mails festlegen, kann es vorkommen, das erwünschte E-Mails als Spam eingeordnet werden. Man spricht hierbei von falsch positiven Ergebnissen. Ist das bei Ihnen der Fall, können Sie über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eine Support-Anfrage erstellen, um uns darüber zu informieren. So können wir die notwendigen Schritte durchführen, damit die erwünschten E-Mails nicht länger als Spam eingeordnet werden.

### Beinhaltet das Office 365 Pro Plus Angebot eine Skype-Lizenz? 

Das Office 365 Pro Plus Angebot beinhaltet keine Skype-Lizenz. Nur die Skype for Business Software ist inklusive. 

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
