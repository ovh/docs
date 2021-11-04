---
title: "Ihre E-Mail-Adressen von einer OVHcloud E-Mail-Plattform auf eine andere migrieren"
slug: migration-email-platform
excerpt: "Erfahren Sie, wie Sie E-Mail-Adressen von einer Exchange oder E-Mail Pro Plattform auf eine andere Exchange, E-Mail Pro oder MX Plan migrieren."
section: Account-Migration
order: 2
---

**Stand 21.10.2020**

## Ziel

Sie möchten Ihre E-Mail-Adressen auf einer Exchange oder E-Mail Pro Plattform auf eine andere Exchange, E-Mail Pro oder MX Plan Plattform migrieren. In dieser Anleitung finden Sie einen zweistufigen Migrationsprozess:

1. **Die Zielplattform konfigurieren**.
2. **E-Mail-Accounts** von Ihrer derzeitigen Plattform auf die neue migrieren.

![email-migration](images/migration_platform01.gif){.thumbnail}

> [!primary]
>
> Um eine MX Plan Lösung auf eine Exchange oder E-Mail Pro Plattform zu migrieren, folgen Sie unserer Anleitung [Migration einer MX Plan E-Mail-Adresse auf einen E-Mail Pro oder Exchange Account](https://docs.ovh.com/de/microsoft-collaborative-solutions/migration-e-mail-adresse-auf-exchange/).
>

**Hier erfahren Sie, wie Sie E-Mail-Adressen von einer Exchange oder E-Mail Pro Plattform auf eine andere Exchange oder E-Mail Pro Plattform migrieren.**

## Voraussetzungen

- Sie verfügen über eine "**Source"**-Plattform mit konfigurierten [Exchange](https://www.ovh.de/emails/hosted-exchange/){.external} oder [E-Mail Pro](https://www.ovh.de/emails/email-pro/){.external} Accounts.
- Sie verfügen über eine "**Ziel"**-Plattform mit [Exchange](https://www.ovh.de/emails/hosted-exchange/){.external}, [E-Mail Pro](https://www.ovh.de/emails/email-pro/){.external} oder MX Plan (über das MX Plan Angebot oder in einem [OVHcloud Webhosting](https://www.ovh.de/hosting/){.external}Angebot). Diese Plattform muss über nicht konfigurierte oder verfügbare Accounts verfügen, um die zu migrierenden E-Mail-Adressen zu empfangen.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.

## In der praktischen Anwendung

### Die Zielplattform konfigurieren

Wenn Sie Ihr neues E-Mail-Angebot bestellt haben, fügen Sie zuerst den Domainnamen zu Ihrer [E-Mail Pro](https://docs.ovh.com/de/emails-pro/erstkonfiguration/#schritt-2-ihre-domain-hinzufugen) oder [Exchange](https://docs.ovh.com/de/microsoft-collaborative-solutions/domain-zu-exchange-hinzufugen/) Plattform hinzu . Wenn Sie auf eine MX Plan Plattform migrieren, da der zugehörige Domainname "fest"ist, können Sie direkt zum nächsten [Schritt übergehen](#accountsmigration).

> Wählen Sie den Tab `Assoziierte Domains`{.action} auf Ihrer Plattform aus und klicken Sie dann auf `Eine Domain hinzufügen`{.action}. Konfigurieren Sie Ihre Domain **als nicht-autoritativ**. Vergewissern Sie sich, dass der Eintrag `OK` in der Spalte `Status` vorhanden ist.
>
> ![email-migration](images/migration_platform02.png){.thumbnail}
>
> Weitere Informationen zum Hinzufügen einer Domain finden Sie in der [E-Mail Pro](https://docs.ovh.com/de/emails-pro/erstkonfiguration/#schritt-2-ihre-domain-hinzufugen) oder [Exchange Hilfe](https://docs.ovh.com/de/microsoft-collaborative-solutions/domain-zu-exchange-hinzufugen/).

### E-Mail Accounts migrieren <a name="accountsmigration"></a>

Die Migration Ihrer E-Mail-Accounts erfolgt in 3 großen Schritten: **Umbenennen** des ursprünglichen E-Mail-Accounts, **Erstellen** des neuen E-Mail-Accounts und **Migration** von der ursprünglichen Plattform auf die neue.

![email-migration](images/migration_platform03.gif){.thumbnail}

> [!warning]
>
> Sonderfall:
>
> - Wenn Sie einen **Exchange** Account auf einen **E-Mail Pro** Account migrieren möchten, müssen Sie sicherstellen, dass Ihre E-Mail Accounts nicht mehr als 10 GB betragen. Die kollaborativen Funktionen, die Synchronisation der Kalender und Kontakte sind auf E-Mail Pro nicht verfügbar und können nicht migriert werden.
> - Wenn Sie einen **Exchange oder E-Mail Pro** Account auf einen **MX Plan** Account migrieren möchten, müssen Sie sicherstellen, dass Ihr E-Mail-Account nicht mehr als 5 GB beträgt. Die kollaborativen Funktionen, die Synchronisation der Kalender und Kontakte sind auf MX Plan nicht vorhanden und können nicht migriert werden.

#### Umbenennen

Umbenennen Sie den zu migrierenden E-Mail-Account mit einem vorläufigen Namen (Beispiel: Um den E-Mail-Account *john.smith@mydomain.ovh* zu migrieren, benennen Sie diesen als *john.smith01@mydomain.ovh*und.

Klicken Sie im Tab `E-Mail-Accounts`{.action} Ihrer E-Mail-Plattform auf den Button `...`{.action} und dann auf `Ändern`{.action}.

![email-migration](images/migration_platform04.png){.thumbnail}

#### Erstellen

Erstellen Sie Ihre E-Mail-Adresse auf dem neuen Account Ihrer E-Mail Pro, Exchange oder MX Plan Plattform (in diesem Fall erstellen Sie *john.smith@mydomain.ovh* auf Ihrer neuen Plattform)

Klicken Sie im Tab `E-Mail`{.action}-Accounts Ihrer Plattform auf `...`{.action} rechts neben dem Ziel-E-Mail-Account und dann auf `Ändern`{.action}.

![email-migration](images/migration_platform05.png){.thumbnail}

#### Migrieren

Migrieren Sie den Quell-E-Mail-Account mithilfe unseres [OMM](https://omm.ovh.net/)-Tools (OVH Mail Migrator) auf das Konto Ihrer neuen Plattform.

Weitere Informationen zu OMM finden Sie in unserer Anleitung [E-Mail-Accounts über den OVH Mail Migrator migrieren](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_migration_von_e-mail-accounts_-_ovh_mail_migrator/).

![email-migration](images/migration_platform06.png){.thumbnail}

Die Migrationsdauer hängt davon ab, wie viele Daten auf Ihren neuen Account migriert werden sollen. Dieser kann von einigen Minuten bis zu mehreren Stunden variieren.

Überprüfen Sie nach der Migration, ob Sie alle Ihre Elemente finden, indem Sie sich mit dem Webmail mit der Adresse verbinden <https://www.ovh.de/mail/>.

Nach der Migration können Sie den ursprünglichen Account mit dem vorläufigen Namen beibehalten oder löschen.

Wenn Sie diese löschen möchten, gehen Sie in den Tab `E-Mail-Accounts`{.action} Ihrer ursprünglichen E-Mail-Plattform, klicken Sie auf `...`{.action} und dann auf `Diesen Account zurücksetzen`{.action}.

### Die Konfiguration Ihrer Domain überprüfen oder ändern

In diesem Schritt müssen Ihre E-Mail-Adressen bereits migriert und funktionsfähig sein. Aus Sicherheitsgründen bitten wir Sie, die korrekte Konfiguration Ihrer Domain in Ihrem Kundencenter zu überprüfen.

Wählen Sie hierzu im linken Menü den betreffenden E-Mail Pro oder Exchange Dienst aus und gehen Sie dann auf den Tab `Assoziierte Domains`{.action}. In der angezeigten Tabelle können Sie in der Spalte "Diagnose" sehen, ob die DNS-Konfiguration korrekt ist: Ein rotes Kästchen erscheint, wenn die Konfiguration geändert werden soll.

> [!primary]
>
> Wenn Sie gerade die Migration durchgeführt oder einen DNS-Eintrag Ihrer Domain geändert haben, kann es einige Stunden dauern, bis die Anzeige im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} aktualisiert werden kann.
>

Um die Konfiguration zu ändern, klicken Sie auf das rote Kästchen und führen Sie den gewünschten Vorgang durch. Diese benötigt eine Propagationszeit von 4 bis maximal 24 Stunden, bis sie voll wirksam ist.

![email-migration](images/check_the_dns_records_associated_domains.png){.thumbnail}

### Migrierte E-Mail-Adressen verwenden

Verwenden Sie nun Ihre migrierten E-Mail-Adressen. OVHcloud stellt dazu eine Online-Anwendung (_web app_) zur Verfügung, die über die <https://www.ovh.de/mail/> Adresse erreichbar ist. Geben Sie dort die Login-Daten für Ihre E-Mail-Adresse ein.

Wenn Sie einen der migrierten Accounts auf einem E-Mail-Client eingerichtet haben (Beispiel: Outlook, Thunderbird), Sie müssen es erneut konfigurieren. Die Verbindungsdaten zum OVHcloud Server haben sich nach der Migration geändert.
<br>Weitere Informationen finden Sie in unserer Anleitung zu [E-Mail Pro](https://docs.ovh.com/de/emails-pro/){.external} und [Hosted Exchange](https://docs.ovh.com/de/microsoft-collaborative-solutions/){.external}. Wenn Sie den Account nicht sofort neu konfigurieren können, ist der Zugriff über die Online-Anwendung weiterhin möglich.

> [!primary]
>
> Sie können auch manuell E-Mail-Adressen zu OVHcloud migrieren, indem Sie unser [OVH Mail Migrator (OMM)](https://omm.ovh.net/){.external} verwenden. Hierzu benötigen Sie die Informationen (Benutzer, Passwort, Server) der Quell-E-Mail und der Ziel-E-Mail.
>

## Weiterführende Informationen

[Verwaltung der Kontakte Ihrer Dienste](https://docs.ovh.com/de/customer/verwaltung-der-kontakte/){.external}

[E-Mail Pro Hilfen](https://docs.ovh.com/de/emails-pro/){.external}.

[Exchange Hilfen](https://docs.ovh.com/de/microsoft-collaborative-solutions/){.external}.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
