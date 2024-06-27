---
title: FAQ OVHcloud E-Mails
updated: 2024-06-27
---

## E-Mails FAQ

### Was tun, wenn ich keine E-Mails versenden/empfangen kann?

Ist der Versand/Empfang von E-Mails nicht möglich, hängt das meistens mit der Konfiguration Ihrer Adresse auf Ihrem E-Mail-Client zusammen. Um dies zu überprüfen, loggen Sie sich in Ihrem [Webmail](/links/web/email) ein und führen Sie einen Versand- bzw. Empfangstest für Ihre Adresse durch.

- Wenn dies normal funktioniert, hängt das Problem mit Ihrer Softwarekonfiguration zusammen. 
- Ist der Versand bzw. Empfang hingegen weiterhin nicht möglich, stehen Ihnen andere Optionen für die Lösung des Problems zur Verfügung.

Erhalten Sie nach dem Versand einer E-Mail auf Ihrem E-Mail-Account eine Fehlermeldung? Wenn ja, notieren Sie die Fehlermeldung. Diese kann Ihnen beim Ermitteln der Ursache helfen (voller Posteingang, Posteingang nicht vorhanden, ...).

Darüber hinaus können Sie überprüfen, ob Ihre Domain die E-Mails an den richtigen Ort liefert. Begeben Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager), wählen Sie die DNS-Zone Ihrer Domain aus und sehen Sie sich die eingerichteten MX-Einträge an. Diese Einträge müssen in der Form „mx**X**.mail.ovh.net.“ eingegeben sein (ersetzen Sie **X** mit jeweils den Ziffern zwischen 0 und 3).
Wenn die MX-Einträge abweichen, verwenden Sie möglicherweise ein E-Mail-Angebot eines anderen Anbieters.

**Tipps und Tricks**: Wenn Sie sich nicht in Ihrem Webmail einloggen können, ist Ihr Passwort möglicherweise fehlerhaft. Überprüfen Sie Ihr Passwort, ändern Sie es bei Bedarf über Ihr [OVHcloud Kundencenter](/links/manager) und versuchen Sie erneut, sich einzuloggen. Weitere Informationen zur Passwortänderungen finden Sie in [unserer Dokumentation](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password).

### Wie kann ich meine E-Mail-Adresse einrichten und mit dem Webmail verwenden?

Sie können Ihre E-Mail-Adresse auf einem E-Mail-Client wie Outlook, Thunderbird, Mac Mail etc. einrichten.
Hierzu stellen wir Ihnen Anleitungen zur Einrichtung Ihrer E-Mail-Adresse zur Verfügung. Diese finden Sie [hier](/products/web-cloud-email-collaborative-solutions-mx-plan).

Dank [Webmail](/links/web/email) können Sie jederzeit und von jedem beliebigen Gerät aus auf Ihren E-Mail-Dienst zugreifen. Nachdem Sie Ihren E-Mail-Account erstellt haben, können Sie sich hier einloggen, um auf diesen zuzugreifen.

**Tipps und Tricks**: Wenn Sie Ihren E-Mail-Account auf einem E-Mail-Client einrichten, empfehlen wir Ihnen, hierzu das IMAP-Protokoll zu verwenden. So werden die E-Mails weiterhin auf dem Server gespeichert und Sie können sie von überall aus über das [Webmail](/links/web/email) einsehen. Weitere Informationen hierzu finden Sie in [unserer Dokumentation](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities).

### Wie kann ich meine E-Mail-Dienste verwalten?

Alle Ihre E-Mail-Adressen werden über Ihr [OVHcloud Kundencenter](/links/manager) verwaltet. Gehen Sie hierzu nach dem Login zum betreffenden Produkt. So können Sie das Passwort Ihrer E-Mail-Adressen ändern, ihren Speicherplatz überprüfen, neue E-Mail-Adressen erstellen oder vorhandene Adressen löschen.

**Tipps und Tricks**: Bei MX Plan Angeboten können Sie die Verwaltung eines E-Mail-Accounts auf einen anderen OVHcloud Account übertragen und behalten dabei weiterhin die Kontrolle über diesen Account. Richten Sie hierzu einfach eine Delegation über Ihr [OVHcloud Kundencenter](/links/manager) ein: Loggen Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `E-Mail` und wählen Sie die betreffende Domain aus. Gehen Sie anschließend in den Tab `E-Mail`{.action} und wählen Sie eine Option aus:

- `Freigaben für alle E-Mail-Adressen verwalten`{.action} im rechten Menü, um die Delegation für alle Mailaccounts zu verwalten
- `Delegationsverwaltung`{.action} um einen einzelnen Account zu delegieren (nach Klick auf `...`{.action} neben dem gewünschten Account)  

Bitte beachten Sie, dass eine OVHcloud Kundenkennung für beide Varianten benötigt wird.

### Was müssen Sie wissen, bevor Sie eine E-Mail-Adresse erstellen?

Das Erstellen einer E-Mail-Adresse ist kein komplexer Vorgang, aber Sie müssen bestimmte Regeln einhalten, um den **Namen Ihrer E-Mail-Adresse** und das **Passwort** festzulegen.

Der **Name Ihrer E-Mail-Adresse** muss folgenden Regeln entsprechen:

- Mindestens 2 Zeichen
- Maximal 32 Zeichen
- Keine Zeichen mit Akzent
- Keine Sonderzeichen mit Ausnahme der folgenden Zeichen: `.`, `,`, `-` und `_`

Das **Passwort** muss folgende Bedingungen erfüllen:

- Mindestens 9 Zeichen
- Maximal 30 Zeichen
- Keine Zeichen mit Akzent

> [!warning]
> Aus Sicherheitsgründen empfehlen wir Ihnen, nicht zweimal das gleiche Passwort zu verwenden, sondern ein Passwort auszuwählen, das keinen Bezug zu Ihren persönlichen Daten hat (vermeiden Sie beispielsweise Ihren Namen, Vornamen und Ihr Geburtsdatum) und dieses regelmäßig zu erneuern.

### Wie erhalte ich mein vergessenes Passwort zurück?

Aus Gründen der Sicherheit und der Vertraulichkeit ist es nicht möglich, ein Passwort **wiederherzustellen**. Wie in der [Anleitung zum Ändern eines E-Mail-Account-Passworts](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_change_password)“ beschrieben, muss Ihr Passwort zurückgesetzt werden, wenn Sie es nicht mehr kennen.

> [!primary]
>
> Wenn Sie ein Kennwort speichern möchten, sollten Sie einen Kennwort-Manager verwenden, z. B. **Keepass**.

### Wie kann ich die Anzahl der empfangenen Spam-Mails reduzieren?

Um den Empfang von Spam-Mails einzuschränken, können Sie Eingangsregeln für Ihre E-Mails einrichten (bei MX Plan als „Filter“ bezeichnet). Ihr Ziel ist es, E-Mails bei Empfang in den Spam-Ordner zu verschieben oder direkt zu löschen.
Loggen Sie sich hierzu in Ihrem [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `E-Mail` und wählen Sie die betreffende Domain aus. Gehen Sie anschließend in den Tab `E-Mail`{.action}, dann in die Spalte `Filter`{.action} und klicken Sie auf den Aktionsbutton.

Wird in Ihrem Kundencenter keine `Filter`{.action}-Spalte angezeigt, müssen zunächst im [Webmail](/links/web/email) über die Verwaltungsregeln des Posteingangs Filter erstellt werden. Lesen Sie die folgende Anleitung für mehr Informationen: [Posteingangsregeln in OWA erstellen](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan).

**Tipps und Tricks**: Wenn Sie einen Filter für den Empfang von Spam-Mails festlegen, kann es vorkommen, das erwünschte E-Mails als Spam eingeordnet werden. Man spricht hierbei von falsch positiven Ergebnissen. Ist das bei Ihnen der Fall, können Sie über Ihr [OVHcloud Kundencenter](/links/manager) eine Support-Anfrage erstellen, um uns darüber zu informieren. So können wir die notwendigen Schritte durchführen, damit die erwünschten E-Mails nicht länger als Spam eingeordnet werden.

### Mein E-Mail-Accounts ist voll, ich habe keinen Speicherplatz mehr. Was kann ich tun?

Wenn Sie [eines der E-Mail-Angebote von OVHcloud](/links/web/emails) abonniert haben und einer Ihrer E-Mail-Accounts voll ist, lesen Sie unsere Anleitung „[Speicherplatz eines E-Mail-Accounts verwalten](/pages/web_cloud/email_and_collaborative_solutions/troubleshooting/email_manage_quota)“. In dieser Anleitung erfahren Sie, ob Sie den vorhandenen Speicherplatz optimieren können oder ob Sie das E-Mail-Angebot wechseln müssen, um die Speicherkapazität zu erhöhen.

### Ich möchte das E-Mail-Angebot meiner E-Mail-Adresse ändern. Wie kann ich dies tun und den Inhalt beibehalte?

Sie möchten zu einem anderen [E-Mail-Angebot](/links/web/emails) wechseln, um mehr Speicherplatz und Funktionen nutzen zu können, möchten aber den Inhalt Ihres bestehenden Accounts beibehalten. Folgen Sie hierzu der passenden Migrationsanleitung:

- [MX Plan E-Mail-Account auf E-Mail Pro oder Exchange Account migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [E-Mail-Accounts von einer OVHcloud-E-Mail-Plattform auf eine andere migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)
- [E-Mail-Accounts manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)
- [E-Mail-Accounts über OVH Mail Migrator migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)
- [Einen Google Mail-Account über den OVH Mail Migrator auf einen OVHcloud-E-Mail-Account migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/security_gmail)

### Beinhaltet das Office 365 Pro Plus Angebot eine Skype-Lizenz?

Das Office 365 Pro Plus Angebot beinhaltet keine Skype-Lizenz. Nur die Skype for Business Software ist inklusive.

### Wie übertrage ich meine E-Mails, Websites, Datenbanken und Domains ohne Dienstunterbrechung auf die Server von OVHcloud?

Lesen Sie die Anleitung "[Website und zugehörige Dienste zu OVHcloud migrieren](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)" finden Sie alle notwendigen Schritte.

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
