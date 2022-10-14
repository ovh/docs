---
title: Migration Ihrer Website und E-Mails zu OVH
slug: migration-ihrer-website-zu-ovh
excerpt: So migrieren Sie Ihre Website und E-Mails ohne Unterbrechung zu OVHcloud
section: 'Erste Schritte'
order: 08
---

**Stand 14.10.2022**

## Ziel 

Diese Anleitung zeigt Ihnen die verschiedenen Schritte zur Migration einer Website, einer oder mehrerer Datenbanken sowie Ihrer E-Mail-Adressen über jede beliebige OVHcloud Plattform. Der genaue Vorgang kann variieren, wenn Sie Ihre Dienstleistungen ohne Unterbrechung migrieren möchten.

**Hier erfahren Sie, wie Sie Ihre Website und E-Mails ohne Dienstunterbrechung zu OVHcloud migrieren.**

## Voraussetzungen

- Sie verfügen über Administrator-Rechte für die betreffende Domain.
- Sie haben Zugriff auf die Dateien der Website.
- Sie haben, falls nötig, Zugriff auf die Datenbanken.
- Sie haben die notwendigen Informationen (Benutzer, Passwort, Server), um sich auf Ihren aktuellen E-Mail-Adressen einzuloggen.
- Sie sind in Ihrem [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.

## Beschreibung

Für die Migration Ihrer Website und E-Mails zu OVHcloud ist ein genauer Transferprozess einzuhalten. Dieser kann in mehrere Schritte aufgeteilt werden.

|Schritt|Beschreibung| 
|---|---| 
|Bestellung des Webhostings|Nach der Bestellung verfügen sie über ein OVHcloud Webhosting, auf dem Sie Ihre Website und E-Mails hosten können.| 
|Transfer der Website|Erstellen Sie ein vollständiges Backup Ihrer Website, um diese auf Ihr neues OVHcloud Webhosting zu übertragen.| 
|Transfer der E-Mail-Adressen|Indem Sie die gleichen E-Mail-Adressen bei OVHcloud erstellen, können Sie die Inhalte Ihrer E-Mails von Ihrem bisherigen Anbieter zu OVHcloud übertragen.| 
|Bearbeitung der DNS Konfiguration der Domain|Ändern Sie die Konfiguration Ihrer Domain, sodass diese das OVHcloud Webhosting verwendet (für Ihre Website und E-Mail-Adressen), und nicht länger die Dienste Ihres bisherigen Anbieters.| 
|Transfer der Domain|Wechseln Sie den Registrar Ihrer Domain und wählen Sie OVHcloud.| 

Je nachdem, bei welchem Registrar Ihre Domain aktuell eingetragen ist, kann die Reihenfolge der oben genannten Schritte variieren.

> [!warning]
>
> Einige Registrare unterbrechen die DNS Auflösung Ihrer Domain, sobald sie eine Transferanfrage einer bei ihnen eingerichteten Domain erhalten.
> In dem Fall sind Ihre Domain sowie alle mit ihr verbundenen Dienste nicht länger verfügbar, darunter auch Ihre Website und E-Mail-Adressen. Daher empfehlen wir Ihnen ausdrücklich, zuerst den Registrar Ihrer Domain zu kontaktieren und sich über seine Transferbestimmungen zu informieren.
>

Aus diesem Grund stellen wir Ihnen zwei verschiedene Migrationsprozesse zur Verfügung:

- Migration ohne Unterbrechung Ihrer Dienstleistungen
- Migration mit wahrscheinlicher Unterbrechung Ihrer Dienstleistungen

### Migration ohne Unterbrechung des Dienstes

#### Schritt 1: OVHcloud Webhosting bestellen

Bestellen Sie Ihr Webhosting auf der Website von [OVHcloud](https://www.ovhcloud.com/de/web-hosting/){.external}. Achten Sie darauf, den Transfer Ihrer Domain noch nicht zu veranlassen. Dieser wird in einem anderen Schritt durchgeführt. Sobald Ihre Zahlung eingegangen ist, wird Ihr Webhosting installiert. Im Anschluss erhalten Sie eine Bestätigungs-E-Mail zur abgeschlossenen Installation.

#### Schritt 2: Ihre Website transferieren

Hierzu sind mehrere Zwischenschritte notwendig.

|Zwischenschritt|Beschreibung|Details|
|---|---|---|
|1|Ein Backup der Website erstellen|Sie benötigen ein vollständiges Backup Ihrer Website, inklusive aller Dateien und Datenbanken (soweit vorhanden). Diese Sicherung ist absolut notwendig, um Ihre Website zu OVHcloud zu migrieren.|
|2|Ihre Website bei OVHcloud online stellen|Verbinden Sie sich mit Ihrem Storage (FTP), um die Dateien Ihrer Website dorthin zu importieren. Legen Sie diese im Ordner **„www“** ab, um sie online zu stellen. Ihre FTP-Login-Daten werden Ihnen per E-Mail zugesandt.|
|3|Eine OVHcloud Datenbank anlegen|Wenn Ihre Website eine Datenbank verwendet, muss über Ihr [Kundencenter](https://www.ovh.com/auth/){.external} eine [neue Datenbank bei OVHcloud eingerichtet](https://docs.ovh.com/de/hosting/verwaltung-einer-datenbank-in-ihrem-webhosting/){.external} werden.|
|4|Die Daten der Datenbank importieren|Importieren Sie das Backup Ihrer Datenbank mithilfe des [Tools, das Ihnen OVHcloud in Ihrem Kundencenter zu Verfügung stellt](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/){.external}.|
|5|Website mit einer neuen Datenbank verbinden|Die Konfigurationsdatei Ihrer Website enthält immer noch die Informationen Ihrer bisherigen Datenbank. Bearbeiten Sie diese Datei in Ihrem OVHcloud Storage und geben Sie die Daten der OVHcloud Datenbank an.|

Die Konfiguration Ihrer Domain bleibt unverändert und Ihre Website wird weiterhin über das Webhosting Ihres aktuellen Anbieters online gestellt.

#### Schritt 3: Ihre E-Mail-Adressen bei OVHcloud neu erstellen

Nachdem Ihre Website fertig transferiert ist, [erstellen Sie die gleichen E-Mail-Adressen bei OVHcloud](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/){.external}, die Sie bei Ihrem bisherigen Anbieter verwenden (sie müssen denselben Namen haben). In Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} in den Bereich `E-Mails`{.action} und klicken Sie anschließend auf das Webhosting Angebot, das Sie soeben bestellt haben (mit demselben Namen wie Ihre Domain). Klicken Sie auf den Button `Eine E-Mail-Adresse erstellen`{.action} und folgen Sie den Schritten des Assistenten.

Da die Konfiguration Ihrer Domain nicht verändert wurde, werden neue Nachrichten weiterhin über die E-Mail-Adressen bei Ihrem bisherigen Anbieter empfangen. Verwenden Sie diese auch weiterhin für den Versand Ihrer E-Mails.

#### Schritt 4: Die Konfiguration Ihrer Domain bearbeiten

Nun, da Ihre Website transferiert ist und Ihre E-Mail-Adressen bei OVHcloud neu angelegt sind, muss auch die Konfiguration Ihrer Domain angepasst werden. Ersetzen Sie hierzu die bisherigen DNS Server Ihrer Domain mit den OVHcloud DNS Servern (die Angaben wurden Ihnen per E-Mail zugesandt und Sie können sie außerdem in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} einsehen). Durch diese Änderung erreichen Sie zwei Dinge:

- **Ihre Domain ist nun mit den OVHcloud Lösungen verbunden**: Ihr OVHcloud Webhosting wird für die Anzeige Ihrer Website verwendet und der E-Mail-Empfang läuft ab sofort über Ihre OVHcloud E-Mail-Adressen.
- **Eine mögliche Dienstunterbrechung wird verhindert**: Wenn Ihr Registrar seine eigenen DNS Server sperrt, sobald Sie Ihre Domain transferieren, hat das keine Auswirkungen auf Ihren Dienst, wenn Sie bereits die OVHcloud Konfiguration verwenden.

> [!warning]
>
> Die Änderung der DNS Server wird beim aktuellen Registrar Ihrer Domain durchgeführt und die Propagation der DNS Einstellungen kann zwischen 24 und 48 Stunden in Anspruch nehmen.
>

#### Schritt 5: Inhalte Ihrer E-Mail-Adressen übertragen

Hierzu sind mehrere Zwischenschritte notwendig.

|Zwischenschritt|Beschreibung|Details|
|---|---|---|
|1|Inhalt Ihrer E-Mail-Adressen zu OVHcloud migrieren|Verwenden Sie das Tool [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external}, um die Inhalte der bei ihrem bisherigen Anbieter registrierten E-Mail-Adressen zu kopieren und zu OVHcloud zu übertragen.|
|2|Schritt 6: Ihre E-Mail-Adressen verwenden|Ihre OVHcloud E-Mail-Adressen sind über eine Webanwendung verfügbar ([Webmail](https://mail.ovh.net/){.external}). Falls Sie eine der Adressen auf einem E-Mail-Client wie Outlook konfiguriert hatten, richten Sie diese erneut ein und geben Sie die [OVHcloud Server](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/) anstelle der Server Ihres bisherigen Anbieters an.|

#### Schritt 6: Ihre Domain zu OVHcloud transferieren

Jetzt muss nur noch Ihre Domain zu OVHcloud transferiert werden. Hierzu sind mehrere Zwischenschritte notwendig.

|Zwischenschritt|Beschreibung|Details|
|---|---|---|
|1|Ihre Domain freigeben|Wenn eine Domain gesperrt ist, kann diese nicht zu einem anderen Registrar wie OVHcloud transferiert werden. Lassen Sie Ihre Domain daher schon vorher bei Ihrem aktuellen Registrar freigeben.|
|2|Transfer-Code anfordern|Sie erhalten den Transfer-Code von Ihrem aktuellen Registrar, sobald Sie Ihre Domain freigegeben haben.|
|3|Transfer-Bestellung bei OVHcloud durchführen|Führen Sie Ihre Transfer-Bestellung auf der [OVHcloud Website](https://www.ovh.de/order/domain/#/legacy/domain/search?domain=){.external} durch. Geben Sie den zuvor erhaltenen Transfer-Code ein.|
|4|Bestellung zahlen|Sobald Ihre Zahlung eingegangen ist, startet der Transfer Ihrer Domain.|
|5|Transfer bestätigen oder auf Bestätigung warten| Dieser Schritt variiert je nach Endung Ihrer Domain. Wenn eine Bestätigung benötigt wird, erhalten Sie in der Regel eine Bestätigungs-E-Mail mit den Angaben zur weiteren Vorgehensweise. Folgen Sie den Anweisungen, um den Transfer zu bestätigen.| 

Wenn der Transfer abgeschlossen ist, wurden Ihre Website, E-Mail-Adressen und Domain erfolgreich und ohne Dienstunterbrechung zu OVHcloud migriert.

### Migration mit wahrscheinlicher Unterbrechung Ihrer Dienstleistungen

#### Schritt 1: Transfer und Hosting Ihrer Dienstleistungen bei OVHcloud beantragen

Hierzu sind mehrere Zwischenschritte notwendig.

|Zwischenschritt|Beschreibung|Details|
|---|---|---|
|1|Ihre Domain freigeben|Wenn eine Domain gesperrt ist, kann diese nicht zu einem anderen Registrar wie OVHcloud transferiert werden. Lassen Sie Ihre Domain daher schon vorher bei Ihrem aktuellen Registrar freigeben.|
|2|Transfer-Code anfordern|Sie erhalten den Transfer-Code von Ihrem aktuellen Registrar, sobald Sie Ihre Domain freigegeben haben.|
|3|Bestellung bei OVHcloud durchführen|Führen Sie die Transfer-Bestellung Ihrer Domain und Ihres Webhostings auf der [OVHcloud Website](https://ovh.de){.external} durch. Geben Sie den zuvor erhaltenen Transfer-Code ein. Geben Sie bei der Auswahl der DNS Server die Server Ihres aktuellen Anbieters an.|
|4|Bestellung zahlen|Sobald Ihre Zahlung eingegangen ist, startet der Transfer Ihrer Domain und Ihr Webhosting wird eingerichtet. **In Abhängigkeit von den Transferbestimmungen Ihres aktuellen Registrars kann es vorkommen, dass die DNS Auflösung Ihrer Domain unterbrochen wird und alle verbundenen Dienste (insbesondere Websites und E-Mail-Adressen) somit nicht mehr verfügbar sind.**|
|5|Transfer bestätigen oder auf Bestätigung warten|Dieser Schritt variiert je nach Endung Ihrer Domain. Wenn eine Bestätigung benötigt wird, erhalten Sie in der Regel eine Bestätigungs-E-Mail mit den Angaben zur weiteren Vorgehensweise. Folgen Sie den Anweisungen, um den Transfer zu bestätigen.|

#### Schritt 2: Ihre Website transferieren

Hierzu sind mehrere Zwischenschritte notwendig.

|Zwischenschritt|Beschreibung|Details|
|---|---|---|
|1|Ein Backup der Website erstellen|Sie benötigen ein vollständiges Backup Ihrer Website, inklusive aller Dateien und Datenbanken (soweit vorhanden). Diese Sicherung ist absolut notwendig, um Ihre Website zu OVHcloud zu migrieren.|
|2|Ihre Website bei OVHcloud online stellen|Verbinden Sie sich mit Ihrem Storage (FTP), um die Dateien Ihrer Website dorthin zu importieren. Legen Sie diese im Ordner **„www“** ab, um sie online zu stellen. Ihre FTP-Login-Daten werden Ihnen per E-Mail zugesandt.|
|3|Eine OVHcloud Datenbank anlegen|Wenn Ihre Website eine Datenbank verwendet, muss über Ihr [Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eine [neue Datenbank bei OVHcloud eingerichtet](https://docs.ovh.com/de/hosting/verwaltung-einer-datenbank-in-ihrem-webhosting/){.external} werden.|
|4|Die Daten der Datenbank importieren|Importieren Sie das Backup Ihrer Datenbank mithilfe des [Tools, das Ihnen OVHcloud in Ihrem Kundencenter zu Verfügung stellt](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/){.external}.|
|5|Website mit einer neuen Datenbank verbinden|Die Konfigurationsdatei Ihrer Website enthält immer noch die Informationen Ihrer bisherigen Datenbank. Bearbeiten Sie diese Datei in Ihrem OVHcloud Storage und geben Sie die Daten der OVHcloud Datenbank an.|

Die Konfiguration Ihrer Domain bleibt unverändert und Ihre Website wird weiterhin über das Webhosting Ihres aktuellen Anbieters online gestellt, solange die DNS Auflösung aktiv ist.

#### Schritt 3: Ihre E-Mail-Adressen bei OVHcloud neu erstellen

**Sobald der Transfer Ihrer Domain abgeschlossen ist**, erhalten Sie eine E-Mail, die Sie darüber informiert, dass Ihr E-Mail-Dienst und Ihr Webhosting fertig installiert wurden. Anschließend erstellen Sie die gleichen E-Mail-Adressen bei OVHcloud, die Sie bei Ihrem bisherigen Anbieter verwenden (sie müssen denselben Namen haben). Gehen Sie in Ihrem OVHcloud Kundencenter in den Bereich [E-Mails](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und klicken Sie anschließend auf das Webhosting Angebot, das Sie soeben bestellt haben (mit demselben Namen wie Ihre Domain). Klicken Sie auf den Button `Eine E-Mail-Adresse erstellen`{.action} und folgen Sie den Schritten des Assistenten.

Da die Konfiguration Ihrer Domain nicht verändert wurde, werden neue Nachrichten weiterhin über die E-Mail-Adressen bei Ihrem bisherigen Anbieter empfangen, solange die DNS Auflösung aktiv ist. Verwenden Sie diese auch weiterhin für den Versand Ihrer E-Mails.

#### Schritt 4: Die Konfiguration Ihrer Domain bearbeiten

Nun, da Ihre Website transferiert ist, Ihre E-Mail-Adressen bei OVHcloud neu angelegt sind und auch Ihre Domain zu OVHcloud transferiert wurde, muss die Konfiguration Ihrer Domain angepasst werden. Ersetzen Sie hierzu die bisherigen DNS Server Ihrer Domain mit den OVHcloud DNS Servern.

Diese Änderung erfolgt über Ihre [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}. Hilfreiche Informationen hierzu finden Sie in der Anleitung *[Allgemeine Informationen zu den DNS Servern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/){.external}*.

Mit dieser Änderung können Sie folgendes erreichen:

- **Ihre Domain ist nun mit den OVHcloud Lösungen verbunden**: Ihr OVHcloud Webhosting wird für die Anzeige Ihrer Website verwendet und der E-Mail-Empfang läuft ab sofort über Ihre OVHcloud E-Mail-Adressen.
- **Eine mögliche Dienstunterbrechung wird behoben**: Wenn Ihr Registrar seine eigenen DNS Server beim Transfer Ihrer Domain gesperrt hat, wird diese durch die Änderung der Konfiguration wieder erreichbar.

> [!warning]
>
> Die Änderung der DNS Server einer Domain wird erst nach einer Propagationszeit von 24 bis 48 Stunden aktiv.
>

#### Schritt 5: Inhalte Ihrer E-Mail-Adressen übertragen

Hierzu sind mehrere Zwischenschritte notwendig.

|Zwischenschritt|Beschreibung|Details|
|---|---|---|
|1|Inhalt Ihrer E-Mail-Adressen zu OVHcloud migrieren|Verwenden Sie das Tool [OVHcloud Mail Migrator (OMM)](https://omm.ovh.net/){.external}, um die Inhalte der bei ihrem bisherigen Anbieter registrierten E-Mail-Adressen zu kopieren und zu OVHcloud zu übertragen.|
|2|Schritt 6: Ihre E-Mail-Adressen verwenden|Ihre OVHcloud E-Mail-Adressen sind über eine Webanwendung verfügbar ([Webmail](https://mail.ovh.net/){.external}). Falls Sie eine der Adressen auf einem E-Mail-Client wie Outlook konfiguriert hatten, richten Sie diese erneut ein und geben Sie die [OVHcloud Server](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/) anstelle der Server Ihres bisherigen Anbieters an.|

Ihre Website, E-Mail-Adressen und Domains wurden erfolgreich zu OVHcloud migriert!

## Weiterführende Informationen

[Shared Hosting: Übersicht zu den OVHcloud E-Mail-Lösungen](https://docs.ovh.com/gb/en/emails/web_hosting_an_overview_of_ovh_email/){.external}.

[Webhosting − Allgemeine Informationen zu den DNS Servern](https://docs.ovh.com/de/domains/webhosting_allgemeine_informationen_zu_den_dns_servern/){.external}.

[Wie lege ich eine E-Mail-Adresse an](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/){.external}

[Webhosting: Import einer MySQL-Datenbank](https://docs.ovh.com/de/hosting/webhosting_import_einer_mysql-datenbank/){.external}.

[Verwaltung einer Datenbank in Ihrem Webhosting](https://docs.ovh.com/de/hosting/verwaltung-einer-datenbank-in-ihrem-webhosting/){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
