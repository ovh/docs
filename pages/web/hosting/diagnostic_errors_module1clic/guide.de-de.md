---
title: Die häufigsten Fehler bei 1-Klick-Modulen beheben
slug: fehler-bei-1-klick-modulen
excerpt: Erfahren Sie hier, wie Sie die häufigsten Fehler bei der Erstellung von 1-Klick-Modulen beheben können
section: Diagnose
order: 02
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 08.11.2022**

## Ziel 

Die Erstellung eines [1-Klick-Moduls](../webhosting_installation_von_webhosting-modulen/) im einfachen oder fortgeschrittenen Modus kann verschiedene Anomalien verursachen.

**Hier erfahren Sie, wie Sie die häufigsten Fehler bei der Erstellung von 1-Klick-Modulen diagnostizieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren und/oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#gofurther).
>

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](https://www.ovh.de/hosting/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie haben die Option [1-Klick-Modul](../webhosting_installation_von_webhosting-modulen/) verwendet, um eine neue Website zu erstellen.

## In der praktischen Anwendung

> [!primary]
>
> Wir weisen hier auf die häufigsten Fehler hin. Falls Sie weitere Schwierigkeiten haben, ziehen Sie unsere [Webhosting FAQ](../webhosting-faq/) zu Rate.
>

### “Beim Laden der Informationen ist ein Fehler aufgetreten. (Sie benötigen mindestens eine freie Datenbank)“

![1freeDB](images/1freeDB.png){.thumbnail}

Diese Meldung kann erscheinen, wenn Sie versuchen, ein neues Modul automatisch zu erstellen. Jedes 1-Klick-Modul benötigt eine Datenbank, um zu funktionieren. Der Fehler tritt auf, wenn das Hosting derzeit keine unbenutzte Datenbank zur Verfügung hat. Die folgenden Lösungen können in Betracht gezogen werden:

#### Lösung Nr. 1: Ihr Webhosting-Angebot wechseln

> [!primary]
>
> Hier finden Sie die Übersicht unserer [Webhosting Angebote](https://www.ovh.de/hosting/).
>

Klicken Sie im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf `Web Cloud`{.action} und dann auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie dann im Bereich `Abo*` bei `Angebot` auf `...`{.action} und `Upgraden`{.action}.

![upgrade_hosting](images/upgrade_hosting.png){.thumbnail}

Mit den [Pro](https://www.ovh.de/hosting/hosting-pro.xml)- und [Performance](https://www.ovh.de/hosting/performance-hosting.xml)-Angeboten können Sie bis zu drei zusätzliche 1-Klick-Module erstellen. Bei einem Performance Webhosting können Sie auch kostenlos [CloudDB](https://www.ovh.de/cloud/cloud-databases/) aktivieren.

#### Lösung Nr. 2: Eine nicht verwendete Datenbank löschen <a name="deleteDB"></a>

> [!warning]
>
> Die Löschung einer Datenbank ist endgültig. Sie führt auch zur Löschung der Backups der betreffenden Datenbank. Wenn Sie nicht sicher sind, welche Änderungen notwendig sind, kontaktieren Sie Ihren Webmaster oder einen unserer [Partner](https://partner.ovhcloud.com/de/directory/).
>

Um eine Datenbank in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu löschen, klicken Sie auf `Web Cloud`{.action}, dann auf `Hosting-Pakete`{.action} und dann auf den `Datenbanken`{.action} Tab. Löschen Sie die gewünschte Datenbank über den Button `...`{.action}.

![delete_a_database](images/delete_a_database.png){.thumbnail}

#### Lösung Nr. 3: Neue Datenbanken bestellen

Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf `Web Cloud`{.action} und dann auf `Hosting-Pakete`{.action}. In `Datenbanken`{.action} Tab, klicken Sie auf `Aktionen`{.action}.

![order_a_database](images/order_a_database.png){.thumbnail}

> [!primary]
>
> Hier finden Sie den Vergleich unserer [Datenbank-Angebote](https://www.ovh.de/hosting/sql-optionen.xml).
>

#### Lösung Nr. 4: Ihr Modul auf einer bereits genutzten Datenbank installieren

Um Ihr Modul auf einer bereits genutzten Datenbank zu installieren, verwenden Sie den [fortgeschrittenen Modus](../webhosting_installation_von_webhosting-modulen/#erweiterte-installation-eines-moduls).

### “Das Installationsverzeichnis ist nicht leer“

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

Nachdem Sie mit der Erstellung Ihres Moduls gestartet haben, erhalten Sie eine E-Mail mit dem Hinweis, dass die Installation gescheitert ist, weil das Installationsverzeichnis Ihres Moduls nicht leer ist.

Diese Meldung bedeutet, dass der mit dem betreffenden Domainnamen verknüpfte Root-Ordner des Hosting-Speicherplatzes mindestens eine Datei oder einen Ordner enthält.

Um Ihren Domainnamen mit einem anderen Verzeichnis zu verbinden, klicken Sie auf `Domain bearbeiten`{.action} im Tab `Multisite`{.action} und geben Sie dann den Namen eines neuen **Wurzelverzeichnisses** ein (auf Ihrem Hosting wird automatisch ein leeres Verzeichnis erstellt).

![modify_root_folder](images/modify_root_folder.png){.thumbnail}

Sie können sich auch per [FTP](../verbindung-ftp-speicher-webhosting/) mit Ihrem Hosting verbinden und den Ordnerinhalt löschen oder verschieben, nachdem Sie ihn lokal gesichert haben.

### “Es ist ein Fehler beim Laden der Informationen aufgetreten. (Es ist nicht genügend Speicherplatz auf Ihrem Hosting vorhanden (Sie benötigen mindestens xxx MB))“

![not_enough_space](images/not_enough_space.png){.thumbnail}

Diese Nachricht zeigt an, dass der [Speicherplatz](../verbindung-ftp-speicher-webhosting/) Ihres Hostings zu viele Daten enthält. Sie müssen zuerst Dateien löschen oder verschieben, bevor Sie ein neues [1-Klick-Modul](../webhosting_installation_von_webhosting-modulen/) installieren können.

In diesem Fall verbinden Sie sich via [FTP mit Ihrem Hosting](../verbindung-ftp-speicher-webhosting/), [sichern Sie die Daten lokal](../webhosting_hilfe_zur_verwendung_von_filezilla/#ubertragen-von-dateien) und löschen Sie dann die Dateien, die für den Betrieb Ihrer Website nicht notwendig sind.

> [!primary]
>
> Falls Sie unsicher sind, welche Daten benötigt werden, kontaktieren Sie unsere [User Community](https://community.ovh.com/en/) oder einen der [OVHcloud Partner](https://partner.ovhcloud.com/de/).<br>
> Wir können Ihnen keine weitergehende Unterstützung anbieten.
>

### “Keine Verbindung zur Datenbank“ <a name="deleteModule"></a>

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

Nachdem Sie die Installation Ihres Moduls im Experten-Modus gestartet haben, erhalten Sie über E-Mail den Hinweis, dass Ihr Modul sich nicht mit der angegebenen Datenbank verbinden kann. 

Überprüfen Sie zunächst Ihre [Login-Daten](../webhosting_installation_von_webhosting-modulen/#datenbank-auswahlen) für die Datenbank.

Löschen Sie anschließend Ihr Modul über den Tab `1-Klick-Module`{.action}.

![delete_a_module](images/delete_a_module.png){.thumbnail}

Starten Sie anschließend die Installation eines neuen Moduls.

### “Sie haben keine ausreichenden Rechte auf dieser Datenbank.“

![insufficient_rights](images/insufficient_rights.png){.thumbnail}

Ihre Datenbank kann nicht mehr bearbeitet werden, da die darin enthaltene Datenmenge die maximale Schwelle überschreitet. Diese Nachricht wird bei der Installation eines 1-Klick-Moduls im [Experten-Modus](../webhosting_installation_von_webhosting-modulen/#erweiterte-installation-eines-moduls) angezeigt.

Installieren Sie in diesem Fall Ihr Modul über den [einfachen Modus](../webhosting_installation_von_webhosting-modulen/#einfache-installation-eines-moduls) oder wählen Sie bei der Installation im Experten-Modus eine andere Datenbank aus. Wenn nötig, bestellen Sie eine zusätzlichen [Datenbank-Dienst](https://www.ovh.de/hosting/sql-optionen.xml).

Wenn Sie nicht über weitere Datenbanken verfügen und kein zusätzliches Angebot verwenden möchten, [importieren Sie eine Kopie Ihrer Datenbank](../webhosting_hilfe_zum_export_von_datenbanken/#beschreibung) und löschen Sie anschließend unnötige Daten.

> [!warning]
>
> **Die Löschung von Elementen in Ihrer Datenbank kann zum Ausfall Ihrer Website führen.**
>
> Kontaktieren Sie im Zweifel unsere [User Community](https://community.ovh.com/en/) oder einen der [OVHcloud Partner](https://partner.ovhcloud.com/de/).<br>
> Wir können Ihnen keine weitergehende Unterstützung anbieten.
>

### “Verbindung nicht möglich zur Datenbank 'xxxxxxxx' auf 'xxxx-xxx.eu.clouddb.ovh.net'. Fehler: Zugriff verweigert für Benutzer 'xxxx'@'xxxxxxxx' (Passwort verwenden: JA)“

![cant_connect](images/cant_connect.png){.thumbnail}

Sie haben die Installation eines 1-Klick-Moduls im [Experten-Modus](../webhosting_installation_von_webhosting-modulen/#erweiterte-installation-eines-moduls) unter Angabe einer Datenbank auf einem [CloudDB Server](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/) gestartet. Sie erhalten diese Fehlermeldung per E-Mail, wenn der bei der Installation angegebene Benutzer nicht über ausreichende Datenbankrechte verfügt oder die angegebenen Kennungen nicht korrekt sind.

Ändern Sie in diesem Fall zunächst die betreffenden [Rechte des Benutzers](../datenbank-und-benutzer-erstellen/#verwaltung-der-benutzerrechte), damit dieser über die Rechte **Administrator** oder **Lesen/Schreiben** auf der Datenbank verfügt.

Überprüfen Sie auch die Zugangsdaten, indem Sie sich [mit Ihrem Datenbankserver verbinden](../datenbank-verbindung-auf-bdd/#in-der-praktischen-anwendung) und anschließend die Installation Ihres Moduls neu starten.

### “Verbindung nicht möglich zur Datenbank 'xxxxxxxx' auf 'xxxxxxxx.mysql.db'. Fehler: Unbekannter MySQL Server Host 'xxxxxx.mysql.db'“

![cant_connect_server](images/cant_connect_server.png){.thumbnail}

Sie haben die Installation eines 1-Klick-Moduls im [Experten-Modus](../webhosting_installation_von_webhosting-modulen/#erweiterte-installation-eines-moduls) unter Angabe einer Datenbank auf einem [CloudDB Server](https://docs.ovh.com/de/clouddb/erste-schritte-mit-clouddb/) gestartet. Sie erhalten diese Fehlermeldung per E-Mail, wenn der angegebene Name des Datenbankservers nicht korrekt ist.

Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf den Bereich `Web Cloud`{.action} und anschließend auf das Menü `Datenbanken`{.action}.

Klicken Sie anschließend auf den zugehörigen Dienst. Der zu verwendende Servername wird unter dem Eintrag `Hostname` im Bereich `SQL` in `Verbindungsinformationen` angegeben.

### Ihr Domainname wird bei der Erstellung des Moduls nicht zur Auswahl angeboten

![domainenotproposed](images/domainenotproposed.png){.thumbnail}

Klicken Sie auf den Tab `Multisite`{.action} und führen Sie folgende Schritte durch:

|Szenario|Erforderliche Maßnahme|
|---|---|
|Die Domain oder Subdomain der zu erstellenden Website erscheint nicht unter `Multisite`{.action}.|Fügen Sie Ihre Domain mithilfe [dieser Anleitung](../multisites-mehrere-websites-konfigurieren/#schritt-21-eine-bei-ovhcloud-registrierte-domain-hinzufugen) hinzu.|
|Die Domain wurde ohne Aktion Ihrerseits aus dem `Multisite`{.action} Bereich gelöscht.|Wenn Ihre Domain oder deren [DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) nicht über Ihren OVHcloud Kunden-Account verwaltet wird, fügen Sie Ihre Domain zur `Multisite`{.action} gemäß [dieser Anleitung](../multisites-mehrere-websites-konfigurieren/#schritt-22-eine-externe-domain-hinzufugen) hinzu.|

### Ihr Modul wird unter einer Webadresse der Art “xxxxx.cluster0xx.hosting.ovh.net“ angezeigt

![url-cluster](images/url-cluster.png){.thumbnail}

Nachdem Sie alle notwendigen Backups durchgeführt haben, [löschen Sie Ihr Modul](#deleteModule) und anschließend dessen [Datenbank](#deleteDB). Starten Sie dann eine neue Installation unter Auswahl der gewünschten Domain.

### Ihre alte Website wird weiterhin angezeigt

Dies kann mehrere Ursachen haben: 

- Sie haben kürzlich eine Änderung Ihrer [DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#dns-konzept-verstehen) oder DNS-Server durchgeführt, oder einen [Domain Transfer](../../domains/transfer-einer-generischen-domain/). Warten Sie, bis diese Operationen abgeschlossen sind (48 Stunden bei Änderungen an Ihren DNS-Servern). Denken Sie auch daran, Ihre Geräte (PC, Smartphone, Internetverbindung usw.) neuzustarten und den Cache Ihres Browsers zu leeren.

- Ihre Domain ist noch immer mit Ihrem alten Webhosting verbunden. Bearbeiten Sie in diesem Fall Ihre [DNS-Zone](../../domains/webhosting_bearbeiten_der_dns_zone/#bearbeiten-der-ovhcloud-dns-zone-ihrer-domain_1) oder Ihre [DNS-Server](../../domains/webhosting_allgemeine_informationen_zu_den_dns_servern/#dns-server-andern) oder kontaktieren Sie Ihren bisherigen Hosting-Anbieter, um diese Anpassung durchzuführen.

### Das Administrator-Passwort für den Zugriff auf das Backend Ihres 1-Klick-Moduls funktioniert nicht mehr <a name="adminpassword"></a>

Wenn das aktuelle Passwort für den Zugriff auf das Verwaltungsinterface Ihres CMS abgelehnt wird, lesen Sie den Abschnitt "Passwort Ihres Moduls ändern" in unserer Anleitung zur [Verwaltung Ihres 1-Klick-Moduls](https://docs.ovh.com/de/hosting/1-click-module-management/#password-change).


## Weiterführende Informationen <a name="gofurther"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
