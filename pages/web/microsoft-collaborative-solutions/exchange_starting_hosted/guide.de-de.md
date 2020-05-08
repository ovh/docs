---
title: 'Erste Schritte mit Hosted Exchange'
excerpt: 'In dieser Anleitung wird beschrieben, wie Sie Ihren Hosted Exchange Dienst konfigurieren'
slug: exchange_20132016_konfiguration_der_dienstleistung
section: 'Erste Schritte mit Exchange'
order: 1
---

**Stand 22.03.2018**

## Einleitung

Mit Hosted Exchange verfügen Sie über professionelle E-Mail-Adressen mit erweiterten Funktionen für kollaboratives Arbeiten wie der Synchronisation von Kalendern und Kontakten.

**In dieser Anleitung erfahren Sie, wie Sie Ihren Hosted Exchange Dienst einrichten.**

## Voraussetzungen

- Sie haben ein [Hosted Exchange](https://www.ovh.de/emails/hosted-exchange/) Angebot.
- Sie haben die E-Mail mit der Installationsbestätigung für Ihr Hosted Exchange Angebot erhalten.
- Sie besitzen eine Domain.
- Sie sind in Ihrem [Kundencenter](https://ovh.com/auth/?action=gotomanager) eingeloggt.

## Beschreibung

### Schritt 1: Auf Ihre Dienstleistung zugreifen

Wenn Ihr Hosted Exchange Angebot eingerichtet und verfügbar ist, können Sie es über Ihr [OVH Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} verwalten.

Gehen Sie hierzu in Ihrem Kundencenter im linken Menü auf `Microsoft`{.action} und anschließend auf `Exchange`{.action}. Klicken Sie dann auf den Namen des entsprechenden Hosted Exchange Dienstes.

> [!primary]
>
> Der Name Ihres Hosted Exchange Angebots im OVH Kundencenter beginnt mit **hosted-**, enthält anschließend einen Teil Ihrer Kundenkennung und endet mit einer Zahl (1 für den ersten installierten Hosted Exchange Dienst, 2 für den zweiten etc.).
>

### Schritt 2: Erstkonfiguration Ihrer Dienstleistung

Bevor Sie Ihr Hosted Exchange verwenden können, muss der Dienst eingerichtet werden. Nach der Erstkonfigurationen können Sie Ihre neuen Exchange E-Mail-Adressen nutzen.

Wenn Sie das Verwaltungsinterface Ihres Hosted Exchange zum ersten Mal aufrufen, öffnet sich zunächst ein Konfigurationsassistent. Um zu beginnen, klicken Sie auf den Button `Starten`{.action}.

Im Konfigurationsassistenten können Sie mehrere Einstellungen vornehmen. Je nachdem, wie Sie Ihren Exchange Dienst verwenden möchten, sind manche Schritte in dieser Anleitung optional.

|Einstellung|Beschreibung|
|---|---|
|Wahl der Domain|Legen Sie die Domain fest, die für Ihre Exchange E-Mail-Adressen verwendet wird. Diese ist Teil Ihrer E-Mail-Adresse (zum Beispiel kontakt@meinepersönlichedomain.ovh).|
|Konfiguration Ihrer Domain|Die von Ihnen eingegebene Domain wird automatisch konfiguriert, wenn diese von OVH unter derselben Kundenkennung (NIC-Handle) verwaltet wird wie Ihr Hosted Exchange. Ist dies nicht der Fall, konfigurieren Sie die Domain manuell selbst.|
|Konfiguration der Exchange Accounts|Legen Sie den Namen Ihrer Exchange E-Mail-Adressen fest und fügen Sie zusätzliche Informationen hinzu.|
|Datenmigration (falls zutreffend)|Wenn Sie Ihre E-Mail-Adressen von einer anderen OVH E-Mail-Lösung (MX Plan oder E-Mail Pro) auf Hosted Exchange migrieren möchten, können Sie den Migrationsvorgang über diesen Assistenten starten. Wenn Sie einen E-Mail-Client verwenden, müssen Ihre Accounts außerdem erneut konfiguriert werden.|

### Schritt 3: Domains hinzufügen (optional)

Nachdem die Erstkonfiguration Ihrer Domain abgeschlossen ist, können Sie, wenn Sie möchten, weitere Domains einrichten (wenn Sie das nicht schon im Konfigurationsassistenten getan haben).

> [!warning]
>
> Alle für Ihren Exchange Dienst erstellten Adressen können sich die übrigen Adressen im Adressbuch anzeigen lassen, darunter auch die Adressen mit einer anderen Domain. Wenn Sie nicht möchten, dass bestimmte Domains im Adressbuch angezeigt werden, benötigen Sie ein neues Hosted Exchange Angebot für die betreffenden Domains.
>

Um eine neue Domain hinzuzufügen, wählen Sie das entsprechende Hosted Exchange Angebot in Ihrem [OVH Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} und klicken Sie auf den Tab `Assoziierte Domains`{.action}. Die Tabelle zeigt die Domains an, die aktuell für Ihre Dienstleistung konfiguriert sind oder gerade eingerichtet werden. Um eine weitere Domain hinzuzufügen, klicken Sie auf den Button `Eine Domain hinzufügen`{.action} und folgen Sie dem Assistenten.

Für weitere Informationen, lesen Sie bitte die Anleitung [Eine Domain zu Ihrem Exchange Dienst hinzufügen](https://docs.ovh.com/de/microsoft-collaborative-solutions/domain-zu-exchange-hinzufugen/){.external}.

> [!primary]
>
> Wenn für die Konfiguration einer Domain eine besondere Aktion erforderlich ist, erscheint in der Tabelle ein rotes Kästchen in der Spalte `Diagnose`{.action}. Klicken Sie auf dieses Kästchen, um die notwendigen Aktionen anzuzeigen. Verwendet die Domain nicht die OVH Konfiguration (d. h. die DNS-Server von OVH), nehmen Sie bitte die notwendigen Änderungen in dem Verwaltungsinterface vor, dass Sie für die Konfiguration Ihrer Domain verwenden. 
>

![Eine Domain hinzufügen](images/first-steps-hosted-exchange-add-domain.png){.external}

### Schritt 4: Zusätzliche Exchange Accounts einrichten (optional)

Wenn Sie möchten, können Sie weitere E-Mail-Accounts einrichten (wenn Sie das nicht schon im Konfigurationsassistenten getan haben).

Klicken Sie hierzu in Ihrem [OVH Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} auf den entsprechenden Hosted Exchange Dienst und anschließend auf den Tab `E-Mail-Accounts`{.action}. Die Tabelle zeigt die E-Mail-Accounts an, die aktuell für Ihre Dienstleistung konfiguriert sind oder gerade eingerichtet werden.

Die Accounts, deren Konfiguration in Bearbeitung ist, werden in der Tabelle mit der Endung „*@configure.me*“ angezeigt. Um die Accounts zu konfigurieren, klicken Sie auf das Bleistift-Symbol und folgen Sie den angezeigten Schritten.

> [!primary]
>
> Führen Sie diesen Schritt aus, sooft dies notwendig ist (je nach Anzahl Ihrer Accounts). Sie können weitere Accounts bestellen, indem Sie auf den Button `Accounts bestellen`{.action} klicken.
>

![Einen Account hinzufügen](images/first-steps-hosted-exchange-add-account.png){.external}

### Schritt 5: Ihre E-Mail-Adressen verwenden

Nachdem Sie Ihre Accounts fertig eingerichtet haben, können Sie diese nun verwenden. Hierfür steht Ihnen die **Outlook Web Application** (OWA), das Webmail-Interface von OVH, zur Verfügung. Sie können sich über folgenden Link einloggen: [https://www.ovh.cz/mail/](https://www.ovh.de/mail/){.external}. Geben Sie hierzu die Zugangsdaten zu Ihrer E-Mail-Adresse ein. Weitere Anleitungen zur Verwendung von OWA finden Sie in unserer Dokumentation unter folgendem Link: [https://docs.ovh.com/de/microsoft-collaborative-solutions/](https://docs.ovh.com/de/microsoft-collaborative-solutions/){.external}.

Wenn Sie Ihre E-Mail-Adresse auf einem E-Mail-Client oder auf einem Gerät (beispielsweise einem Smartphone oder einem Tablet) einrichten möchten, finden Sie die entsprechende Dokumentation unter [https://docs.ovh.com/de/microsoft-collaborative-solutions/](https://docs.ovh.com/de/microsoft-collaborative-solutions/){.external}. Vergewissern Sie sich, dass der E-Mail-Client mit Ihrer Dienstleistung kompatibel ist, damit Ihre Exchange Adresse optimal funktioniert.

OVH bietet Ihnen Outlook Lizenzen über Ihr [OVH Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} sowie Office 365 Lizenzen auf der Webseite [https://www.ovh.de/office-365/](https://www.ovh.de/office-365/){.external}. Wir empfehlen Ihnen, eine dieser Lösungen zu verwenden, wenn Sie den Outlook E-Mail-Client oder weitere Software der Office Suite nutzen möchten.

> [!primary]
>
> Mit Exchange können Sie alle Einstellungen (Filter, Signaturen, Ordner etc.), die Sie in einer kompatiblen Webanwendung oder einem kompatiblen E-Mail-Client verwenden, synchronisieren.
> So sind alle Ihre Daten stets verfügbar, egal ob Sie Exchange nun auf drei Geräten und über verschiedene Zugänge (Webmail, kompatible E-Mail-Clients oder -Programme) verwenden.
>

### Schritt 6: Konfiguration der kollaborativen Funktionen (optional)

Nachdem Sie Ihren Hosted Exchange Dienst fertig eingerichtet haben, können Sie die kollaborativen Funktionen in Ihrem [OVH Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} konfigurieren. Mithilfe dieser Funktionen können Sie unter anderem Ressourcen anlegen (Räume, Equipment etc.) und Gruppen erstellen.

Um die Funktionen zu aktivieren, klicken Sie auf den entsprechenden Hosted Exchange Dienst in Ihrem [OVH Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} und wählen Sie anschließend den Tab aus, der der gewünschten Aktion entspricht.

Weitere Anleitungen zu den Funktionen finden Sie in unserer Dokumentation unter [https://docs.ovh.com/de/microsoft-collaborative-solutions/](https://docs.ovh.com/de/microsoft-collaborative-solutions/){.external}.

![Kollaborative Funktionen](images/first-steps-hosted-exchange-intro-to-functions.png){.external}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf [https://community.ovh.com/en/](https://community.ovh.com/en/){.external}.
