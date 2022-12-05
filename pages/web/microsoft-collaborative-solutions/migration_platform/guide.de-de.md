---
title: "Ihre E-Mail-Adressen von einer OVHcloud E-Mail-Plattform auf eine andere migrieren"
slug: migration-email-platform
excerpt: "Erfahren Sie hier, wie Sie E-Mail-Adressen von einem Exchange-Dienst oder einem E-Mail Pro-Dienst zu anderen Exchange-, E-Mail Pro- oder MX Plan-Diensten migrieren"
section: Account-Migration
order: 01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 21.10.2021**

## Ziel

Sie möchten Ihre E-Mail-Adressen von einer Exchange- oder E-Mail Pro-Plattform auf eine andere Exchange-, E-Mail Pro- oder MX Plan-Plattform migrieren. In dieser Anleitung wird ein  zweistufiger Migrationsprozess beschrieben:

1. **Konfigurieren der Zielplattform**
2. **Migration der E-Mail-Accounts** von der bestehenden Plattform auf die neue

![email-migration](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Um eine MX Plan Lösung nach Exchange oder E-Mail Pro zu migrieren, folgen Sie unserer Anleitung [Migration einer MX Plan E-Mail-Adresse auf einen E-Mail Pro oder Exchange Account](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-e-mail-adresse-auf-exchange/).
>

**Diese Anleitung erklärt, wie Sie E-Mail-Adressen von Exchange oder E-Mail Pro auf eine andere Exchange- oder E-Mail Pro-Plattform migrieren.**

## Voraussetzungen

- Sie haben eine "**Quell-Plattform**" mit bereits eingerichteten [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external} oder [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/){.external} Accounts.
- Sie verfügen über eine "**Ziel-Plattform**": [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/){.external}, [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/){.external} oder MX Plan (über das MX Plan Angebot oder in einem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} enthalten). Diese Plattform muss unkonfigurierte oder verfügbare Accounts haben, um die zu migrierenden E-Mail-Adressen zu empfangen.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

### Die Zielplattform konfigurieren

Wenn Sie Ihr neues E-Mail-Angebot bestellt haben, fügen Sie zuerst den Domainnamen zu Ihrer [E-Mail Pro](https://docs.ovh.com/de/emails-pro/erstkonfiguration/#schritt-2-ihre-domain-hinzufugen) oder [Exchange](https://docs.ovh.com/de/microsoft-collaborative-solutions/domain-zu-exchange-hinzufugen/) Plattform hinzu. Wenn Sie auf eine MX Plan Plattform migrieren, können Sie direkt zum [nächsten Schritt übergehen](#accountsmigration).

> Wählen Sie den Tab `Assoziierte Domains`{.action} auf Ihrer Plattform aus und klicken Sie dann auf `Eine Domain hinzufügen`{.action}. Konfigurieren Sie Ihre Domain als **nicht-autoritativ**. Vergewissern Sie sich, dass der Eintrag `OK` in der Spalte `Status` vorhanden ist.
>
> ![email-migration](images/migration_platform02.png){.thumbnail}
>
> Weitere Informationen zum Hinzufügen einer Domain finden Sie in der [E-Mail Pro](https://docs.ovh.com/de/emails-pro/erstkonfiguration/#schritt-2-ihre-domain-hinzufugen) oder [Exchange Hilfe](https://docs.ovh.com/de/microsoft-collaborative-solutions/domain-zu-exchange-hinzufugen/).

### E-Mail Accounts migrieren <a name="accountsmigration"></a>

Die Migration Ihrer E-Mail-Accounts erfolgt in 3 großen Schritten: **Umbenennen** des ursprünglichen E-Mail-Accounts, **Erstellen** des neuen E-Mail-Accounts und **Migration** von der ursprünglichen Plattform auf die neue.

![email-migration](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Sonderfälle:
>
> - Wenn Sie einen **Exchange** Account auf einen **E-Mail Pro** Account migrieren möchten, müssen Sie sicherstellen, dass Ihr E-Mail Account nicht mehr als 10 GB beanspruchen. Die kollaborativen Funktionen, die Synchronisation der Kalender und Kontakte sind auf E-Mail Pro nicht verfügbar und können nicht migriert werden.
> - Wenn Sie einen **Exchange oder E-Mail Pro** Account auf einen **MX Plan** Account migrieren möchten, müssen Sie sicherstellen, dass Ihr E-Mail-Account nicht mehr als 5 GB verwendet. Die kollaborativen Funktionen, die Synchronisation der Kalender und Kontakte sind auf MX Plan nicht vorhanden und können nicht migriert werden.

#### Schritt 1: Umbenennen

Geben Sie dem zu migrierenden E-Mail-Account einen temporären Namen (Beispiel: Um den E-Mail-Account *john.smith@mydomain.ovh* zu migrieren, benennen Sie diesen um zu *john.smith01@mydomain.ovh*.)

Klicken Sie dazu im Tab `E-Mail-Accounts`{.action} Ihres Dienstes auf den Button `...`{.action} und dann auf `Ändern`{.action}.

![email-migration](images/migration_platform04.png){.thumbnail}

#### Schritt 2: Erstellen

Erstellen Sie die E-Mail-Adresse neu als Account von E-Mail Pro, Exchange oder MX Plan (in diesem Beispiel wäre das *john.smith@mydomain.ovh* auf Ihrer Ziel-Plattform).

Klicken Sie im Tab `E-Mail-Accounts`{.action} Ihrer betreffenden Plattform auf `...`{.action} rechts neben dem Ziel-Account und dann auf `Ändern`{.action}.

![email-migration](images/migration_platform05.png){.thumbnail}

#### Schritt 3: Migrieren

> [!warning]
>
> Nur die Daten Ihrer E-Mail Accounts werden migriert (E-Mails, Kontakte, Kalender, Posteingangsregeln usw.). Die Funktionen Ihrer Plattform müssen auf der neuen Plattform neu aufgebaut werden:
>
> - [Alias](https://docs.ovh.com/de/microsoft-collaborative-solutions/email-alias/)
> - [Übertragung von Rechten](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_2013_send_as_versand_als/)
> - [Gruppen](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_verwendung_der_gruppen_mailinglisten/)
> - Externe Kontakte
> - [Fußzeile](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_automatische_signatur_-_disclaimer/)

Migrieren Sie den Quell-E-Mail-Account mithilfe unseres Tools [OMM](https://omm.ovh.net/) (OVH Mail Migrator) auf das Konto Ihrer neuen Plattform.

> Wenn Sie mehrere E-Mail-Accounts migrieren müssen, empfehlen wir Ihnen, den Modus [Projekt](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator/#project) über [OMM](https://omm.ovh.net/Project/Create) zu verwenden, damit Sie eine Tabelle im CSV-Format importieren können, die die Informationen der zu migrierenden E-Mail-Accounts enthält.

Weitere Informationen zu OMM finden Sie in unserer Anleitung "[E-Mail-Accounts über den OVH Mail Migrator migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator/)".

![email-migration](images/migration_platform06.png){.thumbnail}

Die Migrationsdauer hängt davon ab, wie viele Daten auf Ihren neuen Account migriert werden sollen. Dies kann von einigen Minuten bis zu mehreren Stunden variieren.

Überprüfen Sie nach der Migration, ob alle Ihre Elemente vorhanden sind, indem Sie sich im Webmail einloggen: <https://www.ovh.de/mail/>.

Nach der Migration können Sie den ursprünglichen Account mit dem geänderten Namen beibehalten oder löschen.

Um ihn zu löschen, gehen Sie zum Tab `E-Mail-Accounts`{.action} Ihrer Quell-Plattform, klicken Sie auf `...`{.action} und dann auf `Diesen Account zurücksetzen`{.action}.

### Die Konfiguration Ihrer Domain überprüfen oder ändern

Ihre E-Mail-Adressen sollten bereits migriert und funktionsfähig sein. Aus Sicherheitsgründen bitten wir Sie, die korrekte Konfiguration Ihrer Domain in Ihrem Kundencenter zu überprüfen.

Wählen Sie hierzu den betreffenden E-Mail Pro oder Exchange Dienst aus und gehen Sie dann auf den Tab `Assoziierte Domains`{.action}. In der angezeigten Tabelle können Sie in der Spalte `Diagnose` sehen, ob die DNS-Konfiguration korrekt ist: Eine rote Meldung erscheint, wenn die Konfiguration geändert werden muss.

> [!primary]
>
> Wenn Sie gerade die Migration durchgeführt oder einen DNS-Eintrag Ihrer Domain geändert haben, kann es noch einige Stunden dauern, bis die Anzeige im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} aktualisiert wird.
>

Um die Konfiguration zu ändern, klicken Sie auf das rote Feld und führen Sie die dort beschriebene Aktion durch. Der Vorgang benötigt eine Propagationszeit von 4 bis maximal 24 Stunden, bis die Änderung voll wirksam ist.

![email-migration](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Migrierte E-Mail-Adressen verwenden

Sie können nun Ihre migrierten E-Mail-Adressen verwenden. OVHcloud stellt dazu einen Web-Client (*Wep App*) zur Verfügung, der über <https://www.ovh.de/mail/> erreichbar ist. Geben Sie dort die Login-Daten für Ihre E-Mail-Adresse ein.

Wenn Sie einen der migrierten Accounts auf einem lokalen E-Mail-Client eingerichtet haben (Outlook, Thunderbird, etc.), muss er erneut konfiguriert werden. Die Verbindungsdaten zum OVHcloud Server haben sich nach der Migration geändert.
<br>Weitere Informationen finden Sie jeweils in den Anleitungen zu [E-Mail Pro](https://docs.ovh.com/de/emails-pro/) und [Hosted Exchange](https://docs.ovh.com/de/microsoft-collaborative-solutions/). Wenn Sie den Account nicht sofort neu konfigurieren können, gibt es stets die Möglichkeit, den Web-Client zu verwenden.

> [!primary]
>
> Sie können auch externe E-Mail-Adressen zu OVHcloud migrieren, indem Sie unseren [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} verwenden. Hierzu benötigen Sie die Login-Daten (Benutzer, Passwort, Server) der Quell- und Ziel-Accounts.
>

## Weiterführende Informationen

[Verwaltung der Kontakte Ihrer Dienste](https://docs.ovh.com/de/customer/verwaltung-der-kontakte/)

[E-Mail Pro Hilfen](https://docs.ovh.com/de/emails-pro/)

[Exchange Hilfen](https://docs.ovh.com/de/microsoft-collaborative-solutions/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
