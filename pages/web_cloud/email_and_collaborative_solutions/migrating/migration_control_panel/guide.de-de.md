---
title: 'E-Mail-Accounts von MX Plan zu E-Mail Pro, Exchange oder Zimbra migrieren'
excerpt: 'Erfahren Sie hier, wie Sie einen MX Plan E-Mail-Account zu E-Mail Pro oder Exchange umziehen'
updated: 2026-01-16
---

## Ziel

OVHcloud bietet verschiedene E-Mail-Lösungen an: MX Plan (autonom oder in einem Webhosting-Angebot inbegriffen), Zimbra, E-Mail Pro und Exchange. Diese verfügen über individuelle Funktionen und können sich an verschiedene Einsatzzwecke anpassen. Ihre Bedürfnisse ändern sich? OVHcloud stellt Ihnen ein Migrationswerkzeug zur Verfügung, mit dem Sie von einer Lösung zur anderen wechseln können.

**Diese Anleitung erklärt, wie Sie einen E-Mail-Account von MX Plan zu E-Mail Pro oder Exchange migrieren.**

> [!warning]
>
> [OVHcloud Mail Migrator](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) ermöglicht es Ihnen, Ihre Nachrichten von einem E-Mail-Server zu einem anderen zu migrieren.<br>
> Wenn Ihre E-Mails nur lokal gespeichert sind (POP-Konfiguration oder lokales Archiv), können Sie eine [Exportdatei aus Ihrem E-Mail-Client erstellen](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), und anschließend [die PST-Datei über OMM importieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm) oder [direkt aus Ihrem E-Mail-Client importieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration).

## Voraussetzungen

- Sie verfügen über einen MX Plan E-Mail-Account (als eigenständige Lösung oder als Teil eines [OVHcloud Webhosting Angebots](/links/web/hosting)).
- Sie verfügen über einen [Exchange](/links/web/emails-hosted-exchange), [E-Mail Pro](/links/web/email-pro) Dienst mit mindestens einem unkonfigurierten Account (dieser wird als "@configureme.me" angezeigt) oder [Zimbra](/links/web/zimbra).
- **Sie haben keine Weiterleitungen für die MX Plan E-Mail-Accounts aktiviert, die Sie migrieren möchten.**
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Schritt 1: Ihr Projekt definieren

Die E-Mail Pro und Exchange Lösungen verfügen über eine gemeinsame Basis für Funktionen. Je nach Verwendungszweck bestehen jedoch Unterschiede. Wenn Sie eine Exchange Account auswählen, verfügen Sie über alle kollaborativen Funktionen wie die Synchronisation des Kalenders und der Kontakte. Die E-Mail Pro Lösung bietet ebenfalls einige dieser Funktionen, diese sind jedoch auf die Verwendung über das Webmail beschränkt.

Bevor Sie fortfahren, ist es wichtig zu wissen, auf welches Angebot Sie Ihren MX Plan E-Mail-Account migrieren möchten. Um Ihnen bei dieser Auswahl zu helfen können Sie die [Produktseite](/links/web/emails) konsultieren, die einen detaillierten Vergleich der Angebote bietet. Sie haben die Möglichkeit, die Lösungen zu kombinieren, um unter einem Domainnamen Accounts in E-Mail Pro und Exchange zu nutzen. Wenn Sie mehrere Accounts migrieren, empfehlen wir Ihnen die Erstellung eines Migrationsplans.

### Schritt 2: E-Mail Pro oder Exchange Accounts bestellen

Dieser Schritt ist optional, wenn Sie bereits über einen Exchange oder E-Mail Pro Dienst verfügen, auf den Sie diese Migration durchführen.

Andernfalls loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und bestellen Sie E-Mail Pro oder Exchange. Folgen Sie den Konfigurationsschritten und warten Sie, bis der Dienst fertig installiert ist. Sie erhalten eine E-Mail, sobald der Vorgang abgeschlossen ist.

> [!primary]
>
> Sobald der Account bereit ist, belassen Sie ihn zunächst im Zustand "@configureme.me". Er wird bei der Migration umbenannt.

### Schritt 3: Migration durchführen

Bevor Sie mit der Migration beginnen, müssen Sie die Version des MX Plan identifizieren, von der aus Sie migrieren.

> [!primary]
>
> Die E-Mail-Technologie Ihrer MX Plan-Angebot kann je nach Aktivierungsdatum Ihres Angebots oder bei kürzlich erfolgter Migration variieren. Diese Technologie ist an der Oberfläche ihres Webmails zu erkennen. Um sie in Ihrem Kundencenter zu identifizieren, folgen Sie diesen Schritten:
>
> 1. Melden Sie sich in Ihrem [OVHcloud Kundencenter](/links/manager) an.
> 1. Gehen Sie in den Bereich `Web Cloud`{.action}.
> 1. Klicken Sie auf `MX Plan`{.action}.
> 1. Wählen Sie den betreffenden Domainnamen aus.
> 1. Der Tab `Allgemeine Informationen`{.action} ist standardmäßig ausgewählt.
> 1. Notieren Sie sich die genutzte Technologie unter der Bezeichnung **Webmail** im Feld `Abonnement`.
>
> ![MX plan](/pages/assets/schemas/emails/technology-email.png){.thumbnail .w-640}
>

#### 3.1 Manuelle Migration eines MX Plan-Angebots zu Exchange, E-Mail Pro oder Zimbra  <a name="all-mxplan"></a>

> [!warning]
>
> Dieser Abschnitt betrifft alle MX Plan-Dienste, die die Webmail-Technologie Roundcube, Zimbra oder OWA nutzen.
>
> Wenn Sie jedoch einen MX Plan-Dienst mit Roundcube Webmail zu einer OVHcloud E-Mail Pro- oder Exchange-Plattform migrieren möchten, folgen Sie dem Abschnitt [Automatische Migration eines MX Plan Roundcube Angebots zu Exchange oder E-Mail Pro](#roundcube-mxplan).

> [!warning]
>
> Wenn Sie Ihr neues E-Mail Angebot gerade erst bestellt haben, fügen Sie zuerst den Domainnamen zu Ihrem E-Mail-Dienst hinzu, bevor Sie mit der Migration beginnen. <br> - *Um beispielsweise den Account "myemail@mydomain.ovh" zu migrieren, müssen Sie die Domain "mydomain.ovh" zu Ihrem Dienst hinzufügen.*
>
> Wählen Sie den Tab `Zugeordnete Domains`{.action} oder `Domain`{.action} auf Ihrer Plattform aus und klicken Sie auf `Domain hinzufügen`{.action}. Sobald der Domainname hinzugefügt wurde, stellen Sie sicher, dass die Bezeichnung `OK` oder `Aktiv`{.action} in der Spalte `Status` angezeigt wird.
>
> ![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Weitere Informationen zum Hinzufügen eines Domainnamens finden Sie in den Hilfen zu [E-Mail Pro](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config), [Exchange](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_adding_domain) oder [Zimbra-Leitfaden](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).
.

Die Migration Ihres MX Plan erfolgt in 3 Schritten: **Umbenennen**, **Erstellen** und **Migrieren**.

![Exchange](images/mxplan-migration-configure-account.gif){.thumbnail}

1\. **Umbenennen** der zu migrierenden MX Plan-Accounts mit einem vorläufigen Namen (Beispiel: Um den Account *john.smith@mydomain.ovh* zu migrieren, ändern Sie diesen zu *john.smith01@mydomain.ovh*).

Klicken Sie im Tab `E-Mails`{.action} auf den Button `...`{.action} und dann auf `Account bearbeiten`{.action}.

![Exchange](images/mxplan-migration-configure-account01.png){.thumbnail}

> [!primary]
>
> Die Änderung des Accounts ist nicht sofort aktiv. Bitte warten Sie bis zum Abschluss der Operation, bevor Sie zum nächsten Schritt übergehen.

2\. **Erstellen** Ihres E-Mail-Adresse auf dem neuen Account Ihrer E-Mail Pro oder Exchange Plattform (Sie erstellen *john.smith@mydomain.ovh* auf Ihrer neuen Plattform).

Klicken Sie im Tab `E-Mail-Accounts`{.action} Ihrer E-Mail Pro oder Exchange Plattform auf den Button `...`{.action} und dann auf `Ändern`{.action}.

![Exchange](images/mxplan-migration-configure-account02.png){.thumbnail}

3\. **Migrieren** des Accounts mithilfe unseres OMM-Tools ([OVHcloud Mail Migrator](/links/web/omm)) auf das Konto Ihrer neuen Plattform.

Weitere Informationen zu OMM finden Sie in unserer Anleitung [E-Mail-Accounts über OVHcloud Mail Migrator migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm).

![Exchange](images/mxplan-migration-configure-account03.png){.thumbnail}

Die Migrationsdauer hängt davon ab, wie viele Inhalte auf Ihren neuen Account migriert werden sollen. Dieser kann von einigen Minuten bis zu mehreren Stunden variieren.

Überprüfen Sie nach der Migration, ob alle Elemente vorhanden sind, indem Sie sich im Webmail anmelden: [Webmail](/links/web/email).

Sie können den ursprünglichen Account nach dieser Migration mit dem vorläufigen Namen beibehalten oder löschen.

Wenn Sie ihn löschen möchten, gehen Sie in den Tab `E-Mails`{.action} Ihres MX Plans, klicken Sie auf `...`{.action} und dann auf `Konto löschen`{.action}.

#### 3.2 Automatische Migration eines MX Plan Roundcube Angebots zu Exchange oder E-Mail Pro <a name="roundcube-mxplan"></a>

> [!warning]
>
> Dieser Abschnitt betrifft ausschließlich MX Plan-Dienste, die die Webmail-Technologie Roundcube nutzen.

> [!primary]
>
> Ihr OVHcloud Kunden-Account muss als Administrator-Kontakt **und** technischer Kontakt des zu migrierenden MX Plans, **und** des E-Mail Pro oder Exchange Dienstes, auf den Sie migrieren, eingetragen sein.
>
> Weitere Informationen zu den Änderungen der Kontakte finden Sie in unserer Anleitung zur [Verwaltung der Kontakte Ihrer Dienstleistungen](/pages/account_and_service_management/account_information/managing_contacts).
>

Die Migration kann über zwei Interfaces durchgeführt werden:<br>

- **Der Konfigurationsassistent von Hosted Exchange**: Zu verwenden, wenn ein Hosted Exchange Dienst besteht, der noch unkonfiguriert ist.
- **Im Bereich für MX Plan**: Möglich, sobald Sie über einen E-Mail Pro oder Exchange Dienst (bereits konfiguriert oder nicht konfiguriert) und einen MX Plan Account verfügen, den Sie migrieren möchten.

> Zur Erinnerung: Vergewissern Sie sich vor Beginn der Migration, dass keine **Weiterleitung** oder **Auto-Antworten** für Ihren MX Plan eingerichtet sind.
>
> ![E-Mail](images/mxplan-legacy-redirect.png){.thumbnail}

Wenn Sie bereit sind, folgen Sie der Anleitung entsprechend dem gewählten Interface. Die Migrationsdauer hängt davon ab, wie viele Inhalte auf Ihren neuen Account migriert werden. Es kann sich daher um einige Minuten bis zu mehreren Stunden handeln.

> [!warning]
>
> Sobald die Migration gestartet wurde, können Sie weder auf Ihren alten MX Plan E-Mail-Account zugreifen, noch den Migrationsprozess abbrechen. Wir empfehlen, diesen Vorgang dementsprechend zu planen.
>
> Auch wenn Sie nicht mehr auf Ihre aktuelle E-Mail-Adresse zugreifen können, gehen existierende und neue Nachrichten nicht verloren. Sie werden von Ihrem neuen Account aus sofort verfügbar sein.
>

##### **Migration mit Exchange Konfigurationsassistent**

Wählen Sie im [OVHcloud Kundencenter](/links/manager) Ihren Exchange Dienst aus. Der Assistent sollte erscheinen, um Ihnen bei der Konfiguration Ihres neuen Exchange Dienstes zu helfen. Während dieses Vorgangs können Sie die zu migrierenden MX Plan E-Mail-Accounts auswählen.

Wenn der Konfigurationsassistent nicht startet, werden stattdessen die allgemeinen Informationen zum Exchange Dienst angezeigt. In diesem Fall müssen Sie Ihre Accounts über das MX Plan Interface migrieren.

##### **Migration über das MX Plan Interface**

Um die Migration über dieses Interface durchzuführen, gehen Sie im Bereich `E-Mails`{.action} zum Tab "E-Mails". Wählen Sie dann den Dienst mit dem Domainnamen Ihrer E-Mail-Adressen aus. Klicken Sie auf `...`{.action} in der Zeile des betreffenden E-Mail-Accounts (auch als Quell-Account bezeichnet) und dann auf `Account überführen`{.action}.

![Exchange](images/access_the_migration_tool.png){.thumbnail}

Wählen Sie im angezeigten Fenster den Zieldienst (den Dienst, auf den Sie den Account migrieren möchten) aus und klicken Sie dann auf `Weiter`{.action}. Wenn es mindestens einen "freien" Account (noch nicht konfiguriert) gibt, wird die Migration auf einen dieser Accounts durchgeführt. Lesen Sie die angezeigten Informationen, bestätigen Sie diese und klicken Sie anschließend auf `Weiter`{.action}, um mit der Änderung fortzufahren.

Wenn Sie keinen "freien" Account haben, erscheint ein Button zum Bestellen. Folgen Sie den Anweisungen und warten Sie, bis die Accounts installiert sind, um den Vorgang erneut durchzuführen.

Bestätigen Sie anschließend das Passwort des Quell-Accounts (die Adresse, die Sie migrieren möchten) und klicken Sie dann auf `Migrieren`{.action}. Dieser Vorgang ist so oft wie nötig zu wiederholen, um weitere Accounts zu migrieren.

![Exchange](images/account_migration_steps.png){.thumbnail}

### Schritt 4: Die Konfiguration Ihres Domainnamens überprüfen oder anpassen

In diesem Schritt müssen Ihre E-Mail-Accounts bereits migriert und funktionsfähig sein. Aus Sicherheitsgründen bitten wir Sie, die korrekte Konfiguration Ihres Domainnamens in Ihrem Kundencenter zu überprüfen.

Dazu wählen Sie den betreffenden E-Mail Pro-, Exchange- oder Zimbra-Dienst aus und gehen Sie auf den Tab `Zugeordnete Domains`{.action} oder `Domain`{.action} auf Ihrer Plattform. Überprüfen Sie den Abschnitt oder die Spalte `Diagnose`{.action}.

![exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

> [!primary]
>
> Wenn Sie gerade die Migration durchgeführt oder einen DNS-Eintrag Ihres Domainnamens geändert haben, kann es einige Stunden dauern, bis die [OVHcloud Kundencenter](/links/manager) aktualisiert wird.
>

Um die Konfiguration zu ändern, klicken Sie auf das rote Symbol und führen Sie den gewünschten Vorgang durch. Eine Propagationszeit von 4 bis maximal 24 Stunden ist abzuwarten, bis die Änderung voll wirksam ist.

### Schritt 5: Migrierte E-Mail-Accounts verwenden

Verwenden Sie nun Ihre migrierten E-Mail-Accounts. OVHcloud stellt dazu eine Online-Anwendung (*Web App*) zur Verfügung, die über [Webmail](/links/web/email) erreichbar ist. Geben Sie dort die Login-Daten für Ihre E-Mail-Adresse ein.

Wenn Sie einen der migrierten Accounts auf einem E-Mail-Client (wie Outlook) eingerichtet haben, müssen Sie diesen erneut konfigurieren. Die Verbindungsdaten zum OVHcloud Server haben sich nach der Migration geändert. Weitere Informationen finden Sie in den jeweiligen Anleitungen zu [E-Mail Pro](/products/web-cloud-email-collaborative-solutions-email-pro) und [Hosted Exchange](/products/web-cloud-email-collaborative-solutions-mx-plan). Auch wenn Sie den Account nicht sofort neu konfigurieren können, ist der Zugriff über die Online-Anwendung weiterhin möglich.

### Organisation der Inhalte Ihrer E-Mail-Accounts nach einer Migration <a name="content-after-migration"></a>

Wenn Sie sich zum ersten Mal in Ihrem neuen E-Mail-Account einloggen, können migrierte Inhalte teilweise verborgen sein. Um alle Elemente anzuzeigen, klicken Sie im Webmail auf den Pfeil neben `Posteingang`, um die Subordner freizugeben. Der migrierte Inhalt Ihres alten E-Mail-Accounts sollte erscheinen.

![exchange](images/owa_migrate_content.png){.thumbnail}

Standardordner wie "Gesendete Elemente" oder "Papierkorb" erscheinen in englischer Benennung ("Sent items" und "Trash"), mit Ausnahme der Ordner, die Sie selbst erstellt haben.

Nach einer Migration können Sie alle Ordner und Unterordner Ihres Accounts einsehen, um sicherzustellen, dass alle Elemente vorhanden sind.

### Manuell migrieren

Sie können auch Ihre E-Mail-Accounts manuell auf Ihr neues OVHcloud E-Mail-Angebot migrieren, indem Sie ausschließlich Ihr E-Mail-Programm verwenden. Lesen Sie unsere Anleitung [E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration). Wir empfehlen Ihnen jedoch, diese Methode nur dann anzuwenden, wenn die Hauptmethoden nicht möglich sind.

## Weiterführende Informationen

[Verwaltung der Kontakte Ihrer Dienste](/pages/account_and_service_management/account_information/managing_contacts)

[Erste Schritte mit dem E-Mail Pro-Angebot](/pages/web_cloud/email_and_collaborative_solutions/email_pro/first_config).

[Erste Schritte mit dem Exchange-Angebot](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_starting_hosted).

[Erste Schritte mit dem Zimbra-Angebot](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)

Treten Sie unserer [User Community](/links/community) bei.