---
title: 'E-Mail-Accounts von MX Plan zu E-Mail Pro oder Exchange migrieren'
slug: migration-e-mail-adresse-auf-exchange
excerpt: 'Erfahren Sie hier, wie Sie einen MX Plan E-Mail-Account zu E-Mail Pro oder Exchange umziehen'
section: Account-Migration
order: 01
---

**Letzte Aktualisierung am 22.11.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

OVHcloud bietet verschiedene E-Mail-Lösungen an: MX Plan (autonom oder in einem Webhosting-Angebot inbegriffen), E-Mail Pro und Exchange. Diese verfügen über individuelle Funktionen und können sich an verschiedene Einsatzzwecke anpassen. Ihre Bedürfnisse ändern sich? OVHcloud stellt Ihnen ein Migrationswerkzeug zur Verfügung, mit dem Sie von einer Lösung zur anderen wechseln können.

**Diese Anleitung erklärt, wie Sie einen E-Mail-Account von MX Plan zu E-Mail Pro oder Exchange migrieren.**

## Voraussetzungen

- Sie verfügen über einen MX Plan E-Mail-Account (als eigenständige Lösung oder als Teil eines [OVHcloud Webhosting Angebots](https://www.ovhcloud.com/de/web-hosting/){.external}).
- Sie verfügen über einen [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external} oder [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/){.external} Dienst mit mindestens einem unkonfigurierten Account (dieser wird als "@configureme.me" angezeigt).
- **Sie haben keine Weiterleitungen für die MX Plan E-Mail-Accounts aktiviert, die Sie migrieren möchten.**
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).


## In der praktischen Anwendung

### Schritt 1: Ihr Projekt definieren

Die E-Mail Pro und Exchange Lösungen verfügen über eine gemeinsame Basis für Funktionen. Je nach Verwendungszweck bestehen jedoch Unterschiede. Wenn Sie eine Exchange Account auswählen, verfügen Sie über alle kollaborativen Funktionen wie die Synchronisation des Kalenders und der Kontakte. Die E-Mail Pro Lösung bietet ebenfalls einige dieser Funktionen, diese sind jedoch auf die Verwendung über das Webmail beschränkt.

Bevor Sie fortfahren, ist es wichtig zu wissen, auf welches Angebot Sie Ihren MX Plan E-Mail-Account migrieren möchten. Um Ihnen bei dieser Auswahl zu helfen können Sie die [Produktseite](https://www.ovhcloud.com/de/emails/) konsultieren, die einen detaillierten Vergleich der Angebote bietet. Sie haben die Möglichkeit, die Lösungen zu kombinieren, um unter einem Domainnamen Accounts in E-Mail Pro und Exchange zu nutzen. Wenn Sie mehrere Accounts migrieren, empfehlen wir Ihnen die Erstellung eines Migrationsplans.


### Schritt 2: E-Mail Pro oder Exchange Accounts bestellen

Dieser Schritt ist optional, wenn Sie bereits über einen Exchange oder E-Mail Pro Dienst verfügen, auf den Sie diese Migration durchführen.

Andernfalls loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und bestellen Sie E-Mail Pro oder Exchange. Folgen Sie den Konfigurationsschritten und warten Sie, bis der Dienst fertig installiert ist. Sie erhalten eine E-Mail, sobald der Vorgang abgeschlossen ist.

> [!primary]
>
> Sobald der Account bereit ist, belassen Sie ihn zunächst im Zustand "@configureme.me". Er wird bei der Migration umbenannt.
>

### Schritt 3: Migration durchführen

Bevor Sie mit der Migration beginnen, müssen Sie die Version des MX Plan identifizieren, von der aus Sie migrieren.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und klicken Sie im Bereich `Web Cloud`{.action} auf `E-Mails`{.action}. Wählen Sie Ihren Dienst aus.

|Legacy MX Plan Version|Neue MX Plan Version|
|---|---|
|![E-Mail](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Ihre Dienstbezeichnung befindet sich im Bereich "Abo".|![E-Mail](images/mxplan-starter-new-step1.png){.thumbnail}<br>Sie finden eine `Server-Referenz` im Rahmen "Zusammenfassung", beginnend mit "mxplan-".|
|Weiter zur [Legacy MX Plan Version](#LegacyMxplan)|Weiter zur [neuen MX Plan Version](#NewVersionMxplan)|

#### 3.1 Einen Legacy MX Plan migrieren <a name="LegacyMxplan"></a>

> [!primary]
>
> Ihr OVHcloud Kunden-Account muss als Administrator-Kontakt **und** technischer Kontakt des zu migrierenden MX Plans, **und** des E-Mail Pro oder Exchange Dienstes, auf den Sie migrieren, eingetragen sein.
>
> Weitere Informationen zu den Änderungen der Kontakte finden Sie in unserer Anleitung zur [Verwaltung der Kontakte Ihrer Dienstleistungen](../../customer/verwaltung-der-kontakte/).
>

Die Migration kann über zwei Interfaces durchgeführt werden:<br>

- **Der Konfigurationsassistent von Hosted Exchange**: Zu verwenden, wenn ein Hosted Exchange Dienst besteht, der noch unkonfiguriert ist.
- **Im Bereich für MX Plan**: Möglich, sobald Sie über einen E-Mail Pro oder Exchange Dienst (bereits konfiguriert oder nicht konfiguriert) und einen MX Plan Account verfügen, den Sie migrieren möchten.

> Zur Erinnerung: Vergewissern Sie sich vor Beginn der Migration, dass keine **Weiterleitung** oder **Auto-Antworten** für Ihren MX Plan eingerichtet sind.
> ![E-Mail](images/mxplan-legacy-redirect.png){.thumbnail}

Wenn Sie bereit sind, folgen Sie der Anleitung entsprechend dem gewählten Interface. Die Migrationsdauer hängt davon ab, wie viele Inhalte auf Ihren neuen Account migriert werden. Es kann sich daher um einige Minuten bis zu mehreren Stunden handeln.

> [!warning]
>
> Sobald die Migration gestartet wurde, können Sie weder auf Ihren alten MX Plan E-Mail-Account zugreifen, noch den Migrationsprozess abbrechen. Wir empfehlen, diesen Vorgang dementsprechend zu planen.
>
> Auch wenn Sie nicht mehr auf Ihre aktuelle E-Mail-Adresse zugreifen können, gehen existierende und neue Nachrichten nicht verloren. Sie werden von Ihrem neuen Account aus sofort verfügbar sein.
>

##### **Migration mit Exchange Konfigurationsassistent**

Wählen Sie im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} Ihren Exchange Dienst aus. Der Assistent sollte erscheinen, um Ihnen bei der Konfiguration Ihres neuen Exchange Dienstes zu helfen. Während dieses Vorgangs können Sie die zu migrierenden MX Plan E-Mail-Accounts auswählen.

Wenn der Konfigurationsassistent nicht startet, werden stattdessen die allgemeinen Informationen zum Exchange Dienst angezeigt. In diesem Fall müssen Sie Ihre Accounts über das MX Plan Interface migrieren.

##### **Migration über das MX Plan Interface**

Um die Migration über dieses Interface durchzuführen, gehen Sie im Bereich `E-Mails`{.action} zum Tab "E-Mails". Wählen Sie dann den Dienst mit dem Domainnamen Ihrer E-Mail-Adressen aus. Klicken Sie auf `...`{.action} in der Zeile des betreffenden E-Mail-Accounts (auch als Quell-Account bezeichnet) und dann auf `Account überführen`{.action}.

![Exchange](images/access_the_migration_tool.png){.thumbnail}

Wählen Sie im angezeigten Fenster den Zieldienst (den Dienst, auf den Sie den Account migrieren möchten) aus und klicken Sie dann auf `Weiter`{.action}. Wenn es mindestens einen "freien" Account (noch nicht konfiguriert) gibt, wird die Migration auf einen dieser Accounts durchgeführt. Lesen Sie die angezeigten Informationen, bestätigen Sie diese und klicken Sie anschließend auf `Weiter`{.action}, um mit der Änderung fortzufahren.

Wenn Sie keinen "freien" Account haben, erscheint ein Button zum Bestellen. Folgen Sie den Anweisungen und warten Sie, bis die Accounts installiert sind, um den Vorgang erneut durchzuführen.

Bestätigen Sie anschließend das Passwort des Quell-Accounts (die Adresse, die Sie migrieren möchten) und klicken Sie dann auf `Migrieren`{.action}. Dieser Vorgang ist so oft wie nötig zu wiederholen, um weitere Accounts zu migrieren.

![Exchange](images/account_migration_steps.png){.thumbnail}

#### 3.2 Die neue MX Plan Version migrieren <a name="NewVersionMxplan"></a>

> [!warning]
>
> Wenn Sie Ihr neues E-Mail Angebot gerade erst bestellt haben, fügen Sie zuerst den Domainnamen zu Ihrem E-Mail-Dienst hinzu, bevor Sie mit der Migration beginnen. <br> - *Um beispielsweise den Account "myemail@mydomain.ovh" zu migrieren, müssen Sie die Domain "mydomain.ovh" zu Ihrem Dienst hinzufügen.*
>
>Wählen Sie den Tab `Assoziierte Domains`{.action} Ihres Dienstes aus und klicken Sie dann auf `Eine Domain hinzufügen`{.action}. Sobald der Domainname hinzugefügt wurde, überprüfen Sie, dass der Eintrag `OK` in der Spalte `Status` angezeigt wird.
>
>![exchange](images/account_migration_adddomain.png){.thumbnail}
>
> Weitere Informationen zum Hinzufügen eines Domainnamens finden Sie in den Hilfen zu [E-Mail Pro](https://docs.ovh.com/de/emails-pro/erstkonfiguration/#schritt-2-ihre-domain-hinzufugen) und [Exchange](https://docs.ovh.com/de/microsoft-collaborative-solutions/domain-zu-exchange-hinzufugen/).

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

3\. **Migrieren** des Accounts mithilfe unseres OMM-Tools ([OVH Mail Migrator](https://omm.ovh.net/)) auf das Konto Ihrer neuen Plattform.

Weitere Informationen zu OMM finden Sie in unserer Anleitung [E-Mail-Accounts über OVH Mail Migrator migrieren](../exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator/).

![Exchange](images/mxplan-migration-configure-account03.png){.thumbnail}

Die Migrationsdauer hängt davon ab, wie viele Inhalte auf Ihren neuen Account migriert werden sollen. Dieser kann von einigen Minuten bis zu mehreren Stunden variieren.

Überprüfen Sie nach der Migration, ob alle Elemente vorhanden sind, indem Sie sich im Webmail anmelden: <https://www.ovh.com/de/mail/>.

Sie können den ursprünglichen Account nach dieser Migration mit dem vorläufigen Namen beibehalten oder löschen.

Wenn Sie ihn löschen möchten, gehen Sie in den Tab `E-Mails`{.action} Ihres MX Plans, klicken Sie auf `...`{.action} und dann auf `Konto löschen`{.action}.

### Schritt 4: Die Konfiguration Ihres Domainnamens überprüfen oder anpassen

In diesem Schritt müssen Ihre E-Mail-Accounts bereits migriert und funktionsfähig sein. Aus Sicherheitsgründen bitten wir Sie, die korrekte Konfiguration Ihres Domainnamens in Ihrem Kundencenter zu überprüfen.

Wählen Sie hierzu den betreffenden E-Mail Pro oder Exchange Dienst aus und gehen Sie dann auf den Tab `Assoziierte Domains`{.action}. In der angezeigten Tabelle können Sie in der Spalte "Diagnose" sehen, ob die DNS-Konfiguration korrekt ist: Ein rotes Kästchen erscheint, wenn die Konfiguration geändert werden sollte.

> [!primary]
>
> Wenn Sie gerade die Migration durchgeführt oder einen DNS-Eintrag Ihres Domainnamens geändert haben, kann es einige Stunden dauern, bis die [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} aktualisiert wird.
>

Um die Konfiguration zu ändern, klicken Sie auf das rote Kästchen und führen Sie den gewünschten Vorgang durch. Eine Propagationszeit von 4 bis maximal 24 Stunden ist abzuwarten, bis die Änderung voll wirksam ist.

![Exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Schritt 5: Migrierte E-Mail-Accounts verwenden

Verwenden Sie nun Ihre migrierten E-Mail-Accounts. OVHcloud stellt dazu eine Online-Anwendung (*Web App*) zur Verfügung, die über <https://www.ovh.com/de/mail/> erreichbar ist. Geben Sie dort die Login-Daten für Ihre E-Mail-Adresse ein.

Wenn Sie einen der migrierten Accounts auf einem E-Mail-Client (wie Outlook) eingerichtet haben, müssen Sie diesen erneut konfigurieren. Die Verbindungsdaten zum OVHcloud Server haben sich nach der Migration geändert. Weitere Informationen finden Sie in den jeweiligen Anleitungen zu [E-Mail Pro](../../emails-pro/) und [Hosted Exchange](../). Auch wenn Sie den Account nicht sofort neu konfigurieren können, ist der Zugriff über die Online-Anwendung weiterhin möglich.

### Organisation der Inhalte Ihrer E-Mail-Accounts nach einer Migration <a name="content-after-migration"></a>

Wenn Sie sich zum ersten Mal in Ihrem neuen E-Mail-Account einloggen, können migrierte Inhalte teilweise verborgen sein. Um alle Elemente anzuzeigen, klicken Sie im Webmail auf den Pfeil neben `Posteingang`, um die Subordner freizugeben. Der migrierte Inhalt Ihres alten E-Mail-Accounts sollte erscheinen.

![exchange](images/owa_migrate_content.png) {.thumbnail}

Standardordner wie "Gesendete Elemente" oder "Papierkorb" erscheinen in englischer Benennung ("Sent items" und "Trash"), im Gegensatz zu von Ihnen selbst erstellten Ordnern.

Nach einer Migration können Sie alle Ordner und Unterordner Ihres Accounts einsehen, um sicherzustellen, dass alle Elemente vorhanden sind.

### Manuell migrieren

Sie können auch Ihre E-Mail-Accounts manuell auf Ihr neues OVHcloud E-Mail-Angebot migrieren, indem Sie ausschließlich Ihr E-Mail-Programm verwenden. Lesen Sie unsere Anleitung [E-Mail-Adresse manuell migrieren](../../emails/email-adressen-manuell-migrieren/). Wir empfehlen Ihnen jedoch, diese Methode nur dann anzuwenden, wenn die Hauptmethoden nicht möglich sind.


## Weiterführende Informationen

[Verwaltung der Kontakte Ihrer Dienste](../../customer/verwaltung-der-kontakte/)

[E-Mail Pro Hilfen](https://docs.ovh.com/de/emails-pro/)

[Exchange Hilfen](https://docs.ovh.com/de/microsoft-collaborative-solutions/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
