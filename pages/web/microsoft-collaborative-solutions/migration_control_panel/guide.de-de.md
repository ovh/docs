---
title: 'Eine MX Plan E-Mail-Adresse auf einen E-Mail Pro oder Exchange Account migrieren'
slug: migration-e-mail-adresse-auf-exchange
excerpt: 'Erfahren Sie, wie Sie eine MX Plan E-Mail-Adresse auf einen E-Mail Pro oder Exchange migrieren'
section: Account-Migration
order: 1
---

**Stand 09.12.2020**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

## Ziel

OVHcloud bietet mehrere E-Mail-Lösungen an: MX Plan (verkauft allein oder in einem Webhosting-Angebot inbegriffen), E-Mail Pro und Exchange. Diese verfügen über eigene Funktionen und können sich an verschiedene Einsatzzwecke anpassen. Ihre Bedürfnisse ändern sich? OVHcloud stellt Ihnen ein Migrationswerkzeug zur Verfügung, mit dem Sie von einer Lösung zur anderen wechseln können.

**Hier erfahren Sie, wie Sie eine MX Plan E-Mail-Adresse auf einen E-Mail Pro oder Exchange Account migrieren.**

## Voraussetzungen

- Sie verfügen über eine MX Plan E-Mail-Adresse (über das MX Plan Angebot oder in einem OVHcloud Webhosting [Angebot](https://www.ovh.de/hosting/){.external}).
- Sie verfügen über einen [Exchange](https://www.ovh.de/emails/hosted-exchange/){.external} oder [E-Mail Pro Dienst](https://www.ovh.de/emails/email-pro/){.external} mit mindestens einem nicht konfigurierten Account (dieser wird als "@konfigureme.me"angezeigt).
- Sie haben keine Weiterleitung für die MX Plan E-Mail-Adresse eingerichtet, die Sie migrieren möchten.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} angemeldet.


## In der praktischen Anwendung

### Schritt 1: Ihr Projekt definieren

Die E-Mail Pro und Exchange Lösungen verfügen über eine gemeinsame Basis für Funktionen. Je nach Verwendungszweck bestehen jedoch Unterschiede. Indem Sie eine Exchange Adresse auswählen verfügen Sie über alle kollaborativen Funktionen wie die Synchronisation des Kalenders und der Kontakte. Die E-Mail Pro Lösung bietet einige E-Mail-Adressen, diese sind jedoch auf die Verwendung über ein Webmail beschränkt.

Bevor Sie fortfahren, ist es wichtig zu wissen, auf welches Angebot Sie Ihre MX Plan E-Mail-Adressen migrieren möchten. Um Ihnen bei dieser Auswahl zu helfen, [lesen Sie die Seite der professionellen E-Mail-Lösungen von OVHcloud](https://www.ovh.de/emails/){.external}, die einen detaillierten Vergleich der Angebote bietet. Sie haben die Möglichkeit, die Lösungen zu kombinieren und so einen oder mehrere E-Mail Pro und Exchange Accounts für eine Domain zu verwenden. Wenn Sie mehrere Accounts migrieren müssen, empfehlen wir Ihnen die Erstellung eines Migrationsplans.


### Schritt 2: E-Mail Pro oder Exchange Accounts bestellen

Dieser Schritt ist optional, wenn Sie bereits über einen Exchange oder E-Mail Pro Dienst verfügen, auf den Sie diese Migration durchführen.

Ist dies nicht der Fall, loggen Sie sich in Ihrem [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager){.external} und klicken Sie links im Menü auf `Bestellen`{.action}. Wählen Sie dann den Dienst aus, den Sie bestellen möchten. Sie werden zur Bestellseite weitergeleitet. Folgen Sie den verschiedenen Schritten und warten Sie, bis der Dienst tatsächlich installiert ist. Sie erhalten eine E-Mail, sobald diese abgeschlossen ist.

> [!primary]
>
> Sobald der Account bestellt ist, lassen Sie ihn zunächst als "@konfigureme.me" fungieren. Es wird bei der Migration umbenannt.
>

### Schritt 3: Migration durchführen

Bevor Sie mit der Migration beginnen, müssen Sie die Version des MXPlan identifizieren, von der aus Sie migrieren.

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter ein](https://www.ovh.com/auth/?action=gotomanager){.external}, Teil `Web Cloud`{.action}. Klicken Sie im linken Menü auf `E-Mails`{.action} und wählen Sie den Namen Ihres Angebots aus. Folgen Sie Ihrer aktuellen Version und verwenden Sie die nachstehende Tabelle.

|Historische MX Plan Version|Neue MX Plan Version|
|---|---|
|![E-Mail](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Ihr Angebot befindet sich im Rahmen "Abo"|![E-Mail](images/mxplan-starter-new-step1.png){.thumbnail}<br>Sie finden eine `Server-Referenz` im Rahmen "Zusammenfassung", beginnend mit "mxplan-"|
|Weiter zur [historischen MX Plan Version](#VersionHistoriqueMxplan)|Weiter zur [neuen MX Plan Version](#NouvelleVersionMxplan)|

#### 3.1 Ein historisches MXPlan migrieren <a name="VersionHistoriqueMxplan"></a>

> [!primary]
>
> Ihr OVHcloud Account muss zuvor als Administrator- und technischer Kontakt für den E-Mail Pro oder Exchange-Dienst eingetragen sein, auf den Sie migrieren.
>
> Weitere Informationen zu den Änderungen der Kontakte finden Sie in unserer Anleitung [zur Verwaltung der Kontakte Ihrer Dienstleistungen](../../customer/verwaltung-der-kontakte/).
>

Die Migration kann über zwei Interfaces durchgeführt werden:<br>

- **den Konfigurationsassistenten Hosted Exchange**, nur wenn Sie einen Hosted Exchange Dienst bestellt haben und noch keine Einstellungen für diesen vorgenommen haben;
- **den des MX Plan**, sobald Sie über einen E-Mail Pro oder Exchange Dienst (bereits konfiguriert oder nicht konfiguriert) und eine MX Plan Adresse verfügen, die Sie migrieren möchten.

Wenn Sie bereit sind, folgen Sie der Anleitung entsprechend dem gewählten Interface. Wir möchten Sie daran erinnern, dass die Migrationsdauer davon abhängt, wie viele Inhalte auf Ihren neuen Account migriert werden. Dieser kann von einigen Minuten bis zu mehreren Stunden variieren.

> [!warning]
>
> Sobald die Migration bestätigt wurde, können Sie weder auf Ihre alte MX Plan E-Mail-Adresse zugreifen noch den Migrationsprozess abbrechen. Wir empfehlen Ihnen dringend, diese Operation rechtzeitig durchzuführen.
>
> Auch wenn Sie nicht mehr auf Ihre aktuelle E-Mail-Adresse zugreifen können, gehen bereits empfangene und empfangene Nachrichten nicht verloren. Alle werden von Ihrem neuen Account aus sofort verfügbar sein.
>

##### **Migration vom Exchange Konfigurationsassistenten**

Wählen Sie im OVHcloud [Kundencenter links im Menü](https://www.ovh.com/auth/?action=gotomanager){.external} den betreffenden Dienst aus. Der Assistent sollte erscheinen, um Ihnen bei der Konfiguration Ihres neuen Exchange Dienstes zu helfen. Während dieses Vorgangs können Sie die zu migrierenden MX Plan E-Mail-Accounts auswählen.

Wird der Konfigurationsassistent nicht angezeigt, werden stattdessen die allgemeinen Informationen zum Exchange Dienst angezeigt. In diesem Fall müssen Sie Ihre Accounts über das MX Plan Interface migrieren.

##### **Migration über das MX Plan Interface**

Um die Migration über dieses Interface durchzuführen, gehen Sie im Bereich `E-Mails`{.action} im linken Menü Ihres OVHcloud Kundencenters in den Bereich E-Mails. Wählen Sie dann den Dienst mit dem Domainnamen Ihrer E-Mail-Adressen aus. Klicken Sie auf das Zahnrad-Symbol auf der Zeile des betreffenden E-Mail-Accounts (auch als Quell-Account bezeichnet) und dann auf `Account migrieren`{.action}.

![Exchange](images/access_the_migration_tool.png){.thumbnail}

Wählen Sie im angezeigten Fenster den Zieldienst (den Dienst, auf den Sie die Adresse migrieren möchten) aus und klicken Sie dann auf `Weiter`{.action}. Wenn es mindestens einen "freien" Account (d. h. noch nicht eingerichtet) hat, wird die Migration auf einen dieser Accounts durchgeführt. Lesen Sie die angezeigten Informationen, bestätigen Sie diese und klicken Sie anschließend auf `Weiter`{.action}, um mit der Änderung fortzufahren.

Wenn Sie keinen "freien"Account haben, erscheint ein Button `Accounts`{.action} bestellen. Folgen Sie den Anweisungen und warten Sie, bis die Accounts installiert sind, um den Vorgang erneut durchzuführen.

Bestätigen Sie anschließend das Passwort der Quell-E-Mail-Adresse (die Adresse, die Sie migrieren möchten) und klicken Sie dann auf `Migrer`{.action}. Dieser Vorgang ist so oft wie nötig zu wiederholen, um andere Accounts zu migrieren.

![Exchange](images/account_migration_steps.png){.thumbnail}

#### 3.2 Die neue MXPlan-Version migrieren <a name="NouvelleVersionMxplan"></a>

Wenn Sie Ihr neues E-Mail-Angebot gerade bestellt haben, fügen Sie zuerst den Domainnamen zu Ihrer [E-Mail Pro oder](../../emails-pro/erstkonfiguration/#schritt-2-ihre-domain-hinzufugen)[Exchange](../domain-zu-exchange-hinzufugen/) Plattform hinzu.

Die Migration Ihres MXPlan erfolgt in 3 großen Schritten: **Umbenennen**, **Erstellen** und **Migrieren**.

![Exchange](images/mxplan-migration-configure-account.gif){.thumbnail}

1\. **Umbenennen** Sie den zu migrierenden MXPlan-Account mit einem vorläufigen Namen (Beispiel: Um den MX PLAN Account *john.smith@mydomain.ovh* zu migrieren, nennen Sie diesen in *john.smith01@mydomain.ovh*).

Klicken Sie im Tab `E-Mail`{.action}-Accounts Ihrer E-Mail Pro oder Exchange Plattform auf den Button `...`{.action} und dann auf `Ändern`{.action}.

![Exchange](images/mxplan-migration-configure-account01.png){.thumbnail}

> [!primary]
>
> Die Änderung des Accounts ist nicht sofort aktiv. Bitte warten Sie bis zum Abschluss der Operation, bevor Sie zum nächsten Schritt übergehen.

2\. **Erstellen** Sie Ihre E-Mail-Adresse auf dem neuen Account Ihrer E-Mail Pro oder Exchange Plattform (Sie verwenden das vorhergehende Beispiel und erstellen *john.smith@mydomain.ovh* auf Ihrer neuen Plattform).

Klicken Sie im Tab `E-Mail`{.action}-Accounts Ihrer E-Mail Pro oder Exchange Plattform auf den Button `...`{.action} und dann auf `Ändern`{.action}.

![Exchange](images/mxplan-migration-configure-account02.png){.thumbnail}

3\. **Migrieren** Sie den MXPlan Account mithilfe unseres OMM-Tools ([OVH Mail Migrator](https://omm.ovh.net/) ) auf das Konto Ihrer neuen Plattform.

Weitere Informationen zu OMM finden Sie in unserer Anleitung [E-Mail-Accounts über OVH Mail Migrator migrieren](../exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator/).

![Exchange](images/mxplan-migration-configure-account03.png){.thumbnail}

Die Migrationsdauer hängt davon ab, wie viele Inhalte auf Ihren neuen Account migriert werden sollen. Dieser kann von einigen Minuten bis zu mehreren Stunden variieren.

Überprüfen Sie nach der Migration, ob Sie Ihre Elemente finden, indem Sie sich mit dem Webmail mit der Adresse <https://www.ovh.com/de/mail/>

Sie können den ursprünglichen Account nach dieser Migration mit dem vorläufigen Namen beibehalten oder löschen.

Wenn Sie diese löschen möchten, gehen Sie in den Tab `E-Mail`{.action}-Accounts Ihres MXPlan, klicken Sie auf `...`{.action} und dann auf `Diesen Account zurücksetzen`{.action}.

### Schritt 4: Die Konfiguration Ihrer Domain überprüfen oder anpassen

In diesem Schritt müssen Ihre E-Mail-Adressen bereits migriert und funktionsfähig sein. Aus Sicherheitsgründen bitten wir Sie, die korrekte Konfiguration Ihrer Domain in Ihrem Kundencenter zu überprüfen.

Wählen Sie hierzu im linken Menü den betreffenden E-Mail Pro oder Exchange Dienst aus und gehen Sie dann auf den Tab `Assoziierte Domains`{.action}. In der angezeigten Tabelle können Sie in der Spalte "Diagnose"sehen, ob die DNS-Konfiguration korrekt ist: Ein rotes Kästchen erscheint, wenn die Konfiguration geändert werden soll.

> [!primary]
>
> Wenn Sie gerade die Migration durchgeführt oder einen DNS-Eintrag Ihrer Domain geändert haben, kann es einige Stunden dauern, bis die [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external}  aktualisiert werden kann.
>

Um die Konfiguration zu ändern, klicken Sie auf das rote Kästchen und führen Sie den gewünschten Vorgang durch. Diese benötigt eine Propagationszeit von 4 bis maximal 24 Stunden, bis sie voll wirksam ist.

![Exchange](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Schritt 5: Migrierte E-Mail-Adressen verwenden

Verwenden Sie nun Ihre migrierten E-Mail-Adressen. OVHcloud stellt dazu eine Online-Anwendung (_web app_) zur Verfügung, die über die <https://www.ovh.com/de/mail/> Adresse erreichbar ist. Geben Sie dort die Login-Daten für Ihre E-Mail-Adresse ein.

Wenn Sie einen der migrierten Accounts auf einem E-Mail-Client (wie Outlook) eingerichtet haben, müssen Sie diesen erneut konfigurieren. Die Verbindungsdaten zum OVHcloud Server haben sich nach der Migration geändert. Weitere Informationen finden Sie in unserer Anleitung zu [E-Mail Pro](../../emails-pro/) und [Hosted Exchange](../). Wenn Sie den Account nicht sofort neu konfigurieren können, ist der Zugriff über die Online-Anwendung weiterhin möglich.

### Manuell migrieren

Sie können auch Ihre E-Mail-Adressen manuell auf Ihr neues OVHcloud E-Mail-Angebot migrieren, indem Sie ausschließlich Ihr E-Mail-Programm verwenden. Lesen Sie unsere Anleitung [E-Mail-Adresse manuell migrieren](../../emails/email-adressen-manuell-migrieren/). Wir empfehlen Ihnen jedoch, diese Methode nur dann anzuwenden, wenn die Hauptmethoden nicht möglich sind.


## Weiterführende Informationen

[Verwaltung der Kontakte Ihrer Dienste](../../customer/verwaltung-der-kontakte/){.external}

[E-Mail Pro Hilfen](https://docs.ovh.com/de/emails-pro/){.external}.

[Exchange Hilfen](https://docs.ovh.com/de/microsoft-collaborative-solutions/){.external}.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
