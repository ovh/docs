---
title: Die häufigsten Fehler bei 1-Klick-Modulen beheben
slug: frequenzfehler-bei-1-klick-modulen
excerpt: Diagnose der häufigsten Fehler bei der Erstellung von 1-Klick-Modulen
section: Diagnose
---

> [!primary]
>
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 03.06.21**

## Ziel

Die Erstellung eines [1-Klick-Moduls](../webhosting_installation_von_webhosting-modulen/) im einfachen oder fortgeschrittenen Modus kann verschiedene Anomalien verursachen.

**Hier erfahren Sie, wie Sie die häufigsten Fehler bei der Erstellung von 1-Klick-Modulen diagnostizieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Bei Schwierigkeiten kontaktieren Sie bitte einen spezialisierten Dienstleister und/oder stellen Ihre Fragen in der OVHcloud Community unter [https://community.ovh.com/en/](https://community.ovh.com/en/) (Englisch). Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten.
>

## Voraussetzungen

- Sie verfügen über ein kompatibles [Webhosting Angebot](https://www.ovh.de/hosting/).
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.
- Sie haben die [1-Klick-Module](../webhosting_installation_von_webhosting-modulen/) Funktion verwendet, um eine neue Website zu erstellen.

## In der praktischen Anwendung

> [!primary]
>
> Wir weisen hier auf die häufigsten Fehler hin. Falls Sie weitere Probleme haben, ziehen Sie unsere [FAQ auf den Webhosting Angeboten](../webhosting-faq/) zu Rate.
>

### “Beim Laden der Informationen ist ein Fehler aufgetreten. (You need at least one free database)“

![1 freeDB](images/1freeDB.png){.thumbnail}

Wenn diese Nachricht erscheint, wenn Sie die Installation Ihres Moduls starten, dann ist es nicht möglich, eine neue Datenbank auf Ihrem Hosting zu erstellen.

#### Lösung Nr. 1: Ihr Webhosting-Angebot bearbeiten

> [!primary]
>
> Hier finden Sie den Vergleich [unserer verschiedenen Webhosting Angebote](https://www.ovh.de/hosting/).
>

Klicken Sie in [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf `Web Cloud`{.action} und dann auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und klicken Sie dann im Bereich `Abo` - `Angebot`, dann auf `...` und `Upgraden`.

![upgrade_hosting](images/upgrade_hosting.png){.thumbnail}

Mit den [Pro 2014](https://www.ovh.de/hosting/hosting-pro.xml) und [Performance](https://www.ovh.de/hosting/performance-hosting.xml) Angeboten können Sie bis zu drei zusätzliche 1-Klick-Module erstellen. Mit den Performance Angeboten können Sie auch kostenlos einen [SQL Private Server](https://www.ovh.de/hosting/sql-optionen.xml) aktivieren.

#### Lösung Nr. 2: eine nicht verwendete Datenbank löschen <a name="deleteDB"></a>

> [!warning]
>
> Die Löschung einer Datenbank ist endgültig. Sie führt auch zur Löschung der Backups der betreffenden Datenbank. Wenn Sie sich nicht sicher sind, welche Änderungen notwendig sind, kontaktieren Sie Ihren Webmaster oder einen unserer [Partner](https://partner.ovhcloud.com/de/directory/).
>

Um eine Datenbank aus Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) zu entfernen, klicken Sie auf `Web Cloud`{.action}, dann auf `Hosting-Pakete`{.action} und dann auf `Datenbanken`{.action} Tab. Löschen Sie die gewünschte Datenbank:

![delete_a_database](images/delete_a_database.png){.thumbnail}

#### Lösung Nr. 3: neue Datenbanken bestellen

Klicken Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) auf `Web Cloud`{.action} und dann auf `Hosting-Pakete`{.action}. In `Datenbanken`{.action} Tab, klicken Sie auf `Aktionen`{.action}:

![order_a_database](images/order_a_database.png){.thumbnail}

> [!primary]
>
> Hier finden Sie den Vergleich unserer [Datenbankangebote](https://www.ovh.de/hosting/sql-optionen.xml)
>

#### Lösung Nr. 4: Ihr Modul auf einer bereits genutzten Datenbank installieren

Um Ihr Modul auf einer bereits genutzten Datenbank zu installieren, [verwenden](../modules-en-1-clic/#installation-avancee-dun-module) Sie den fortgeschrittenen 1-Klick-**Modus**.

Um die Login-Daten Ihrer Datenbank zu finden, lesen Sie unsere [FAQ](https://www.ovh.com/fr/hebergement-web/faq/).

### “Das Installationsverzeichnis ist nicht leer“

![folder_not_empty](images/folder_not_empty.png){.thumbnail}

Nachdem Sie mit der Erstellung Ihres Moduls begonnen haben, erhalten Sie eine E-Mail, in der angegeben ist, dass das Installationsverzeichnis Ihres Moduls nicht leer ist.

Diese Nachricht bedeutet, dass das **Wurzelverzeichnis**, an das Ihre Domain gebunden ist, eine oder mehrere Dateien oder Ordner enthält.

Um Ihre Domain mit einem anderen Verzeichnis zu verbinden, klicken Sie auf `Domain`{.action} im Tab `Multisite`{.action} ändern und geben Sie dann den Namen eines neuen **Wurzelverzeichnisses** ein (auf Ihrem Hosting wird automatisch ein leeres Verzeichnis erstellt).

![modify_root_folder](images/modify_root_folder.png){.thumbnail}

Sie können sich auch via [FTP](../connexion-espace-stockage-ftp-hebergement-web/) mit Ihrem Hosting verbinden und den Inhalt des Ordners löschen oder verschieben, nachdem Sie ihn gespeichert haben.

### “Keine Verbindung zur Datenbank“ <a name="deleteModule"></a>

![wrong_id_database](images/wrong_id_database.png){.thumbnail}

Nachdem Sie die Installation Ihres Moduls im Experten-Modus gestartet haben, erhalten Sie eine E-Mail, die anzeigt, dass Ihr Modul sich nicht mit der angegebenen Datenbank verbinden kann. 

Überprüfen Sie deshalb die Login-Daten Ihrer Datenbank. Um sie zu finden, ziehen Sie unsere [FAQ zu Rate](https://www.ovh.com/fr/hebergement-web/faq/).

Löschen Sie anschließend Ihr Modul über den Tab `1 Klick Module`{.action}:

![delete_a_module](images/delete_a_module.png){.thumbnail}

Starten Sie anschließend die Installation eines neuen Moduls neu.

### Ihr Domainname wird bei der Erstellung des Moduls nicht angeboten

![domainenotproposed](images/domainenotproposed.png){.thumbnail}

Klicken Sie auf den Tab `Multisite`{.action} und führen Sie folgende Überprüfungen durch:

|Szenario|Erforderliche Maßnahme|
|---|---|
|Die Domain oder Subdomain der Website, die Sie erstellen möchten, erscheint nicht in der `Multisite`{.action}.|Fügen Sie Ihre Domain entsprechend [diesen Angaben hinzu](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-2-ajouter-un-domaine-ou-un-sous-domaine).|
|Die Domain wurde ohne Aktion Ihrerseits aus der Multisite gelöscht.|Wenn Ihre Domain oder die [DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) Zone nicht über Ihren OVHcloud Account verwaltet werden, fügen Sie Ihre Domain zur `Multisite`{.action} gemäß dieser [Anleitung hinzu](../multisites-configurer-un-multisite-sur-mon-hebergement-web/#etape-22-ajouter-un-nom-de-domaine-externe).|

### Ihr Modul wird auf einer Webadresse vom Typ "xxxxx.cluster0xx.hosting.ovh.net"angezeigt

![url-cluster](images/url-cluster.png){.thumbnail}

Nachdem Sie alle notwendigen Backups durchgeführt haben, [löschen Sie](#supprimer-le-module) Ihr Modul und [anschließend dessen Datenbank](#supprimer-la-base). Setzen Sie dann die Installation auf der gewünschten Domain erneut ein.

### Ihre alte Website wird weiterhin angezeigt

Diese Anomalie kann mehrere Ursachen haben: 

- Sie haben kürzlich eine Änderung Ihrer DNS Zone oder Ihrer [DNS](../../domains/editer-ma-zone-dns/#comprendre-la-notion-de-dns) Server [oder einen Transfer Ihrer Domain durchgeführt](../../domains/transferer-mon-domaine-generique/). Warten Sie, bis diese Operationen abgeschlossen sind (48 Stunden bei Änderungen an Ihren DNS). Denken Sie auch daran, Ihre Geräte (PC, Smartphone, Box usw.) neu zu starten und den Cache Ihres Browsers zu leeren.

- Ihre Domain ist immer mit Ihrem alten Hosting verbunden. Ändern Sie in diesem Fall Ihre [DNS](../../domains/editer-ma-zone-dns/#editer-la-zone-dns-ovhcloud-de-votre-nom-domaine_1) Zone oder [Ihre DNS](../../domains/generalites-serveurs-dns/#modifier-les-serveurs-dns) Server oder kontaktieren Sie Ihren bisherigen Hosting-Anbieter.

## Mehr <a name="aller-plus-loin"></a>

[Diagnose und Korrektur bei einer weißen Seite](../comment-diagnostiquer-page-blanche/)

[Antwortcodes eines HTTP-Servers](../mutualise-les-codes-de-reponse-dun-serveur-http/)

Kontaktieren Sie für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) [die OVHcloud Partner](https://partner.ovhcloud.com/fr/)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, können Sie unsere Support-Angebote [einsehen](https://www.ovhcloud.com/fr/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com>.
