---
title: Erste Schritte mit Ihrem Webhosting
slug: erste-schritte-mit-webhosting
excerpt: So starten Sie mit Ihrem Webhosting
section: 'Erste Schritte'
order: 02
---

**Stand 14.11.2022** 

## Einleitung

Sie haben vor Kurzem ein Webhosting bestellt, um Ihre eigene Website zu erstellen. Auf diesem Hosting können Sie eine gebrauchsfertige Lösung (z. B. WordPress, PrestaShop) installieren oder Ihre eigene Plattform auf den dauerhaft verfügbaren Servern entwickeln. Wir danken Ihnen für Ihr Vertrauen in OVHcloud und zeigen Ihnen in dieser Anleitung, wie Sie Ihre Website ganz einfach einrichten können.

**Hier erfahren Sie, wie Sie richtig mit Ihrem Webhosting starten.**

## Voraussetzungen

- Sie besitzen ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Sie haben die Bestätigungs-E-Mail zur Installation Ihres Webhostings erhalten.
- Sie besitzen eine [Domain](https://www.ovhcloud.com/de/domains/){.external}, über die Ihre Website erreichbar sein wird.
- Sie sind in Ihrem [Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

### Schritt 1: Ihr Projekt definieren

Möchten Sie einen Blog oder einen Onlineshop einrichten? Ihre Leidenschaft mit anderen teilen oder die Internetpräsenz Ihres Unternehmens stärken? Oder möchten Sie eine bestehende Website zu OVHcloud migrieren? Um Ihr Vorhaben erfolgreich umzusetzen, ist es wichtig, dass Sie Ihr Ziel klar vor Augen haben.

Mit Ihrem OVHcloud Webhosting Angebot können Sie eine neue Website erstellen oder eine bereits bestehende migrieren.

- **Eine neue Website einrichten**

 Sie können Ihre Website entweder manuell mithilfe Ihrer eigenen Programmierkenntnisse einrichten, oder gebrauchsfertige Lösungen wie Content Management Systeme (CMS) für die Erstellung Ihrer Website verwenden. Die erste Option erfordert ein gewisses Maß an technischer Kompetenz, ermöglicht jedoch ein maßgeschneidertes Ergebnis. Mit der zweiten Lösung profitieren Sie von einer direkt einsetzbaren Website, für deren Einrichtung keine technischen Fachkenntnisse notwendig sind.

Im Kundencenter stellt OVHcloud seinen Kunden ein Tool zur Verfügung, mit dem ein CMS mit nur einem Klick installiert werden kann. Zur Auswahl stehen WordPress, PrestaShop, Drupal und Joomla!. Wenn Sie noch auf der Suche nach dem richtigen CMS sind, kann Ihnen dieser [CMS Vergleich](https://www.ovhcloud.com/de/web-hosting/uc-cms-comparison/){.external} bei Ihrer Auswahl helfen. Wenn das gewünschte CMS von OVHcloud nicht angeboten wird, können Sie es manuell auf Ihrem Webhosting installieren.

- **Eine bestehende Website zu OVHcloud migrieren**

Die Migration einer Website kann sich als knifflig erweisen. Vor allem, wenn es sich um eine aktive Website handelt und Sie die Unterbrechung des Dienstes vermeiden möchten. Daher enthält die vorliegende Anleitung nur einige der Schritte, die für eine Migration erforderlich sind. Für den kompletten Migrationsprozess einer Website lesen Sie bitte die Anleitung [Migration Ihrer Website und E-Mails zu OVHcloud](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/){.external}.

### Schritt 2: Ihre Website installieren

Nachdem Sie Ihr Projekt genau definiert haben, können Sie es auf Ihrem Webhosting einrichten. Im folgenden Schritt zeigen wir Ihnen, wie Sie Ihre Website online stellen. Entsprechend Ihrer technischen Kenntnisse und der verfügbaren Zeit stehen Ihnen dazu drei Möglichkeiten zur Verfügung.

#### Die einfache 1-Klick-Lösung – keine technischen Kenntnisse erforderlich

Bei dieser Lösung kommen die OVHcloud 1-Klick-Module zum Einsatz, die eine einfache und schnelle Installation eines CMS ermöglichen. OVHcloud übernimmt die Installation der Website und teilt Ihnen anschließend Ihre Zugangsdaten zum Verwaltungsinterface mit.

Damit die Installation des OVHcloud Moduls erfolgreich ist, vergewissern Sie sich zunächst, dass das Verzeichnis, in dem das Modul installiert wird, vollständig leer ist (wenn Sie sich vorher noch nie mit Ihrem Storage verbunden haben, sollte das der Fall sein). Um die Installation des 1-Klick-Moduls durchzuführen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `1 Klick Module`{.action} und klicken Sie auf den Button `Ein Modul hinzufügen`{.action}.

![Zugriff auf die 1-Klick-Module](images/access_to_the_1_click_modules_section.png){/thumbnail}

Um die Installation des 1-Klick-Moduls zu starten, wählen Sie Ihr bevorzugtes CMS aus. Achten Sie darauf, dass im Feld `Installation im Experten-Modus`{.action} kein Haken gesetzt ist und klicken Sie anschließend auf `Installieren`{.action}.

Wenn die Installation erfolgreich durchgeführt wurde, erhalten Sie eine Bestätigungs-E-Mail mit den Zugangsdaten für die Verwaltung Ihrer Website. Sie können dann die nachfolgenden Schritte durchführen.

Wenn Sie mehr über die 1-Klick-Module von OVHcloud wissen möchten, werfen Sie einen Blick in unsere Dokumentation: [Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}.

#### Die schnelle Lösung in wenigen Klicks – keine technischen Kenntnisse erforderlich

Bei dieser Lösung kommen OVHcloud Module zum Einsatz, die eine einfache und schnelle Installation eines CMS ermöglichen. OVHcloud installiert Ihre Website mithilfe der von Ihnen eingegebenen, personalisierten Daten (z. B. personalisierte Zugangsdaten für den CMS-Login). Um diese Lösung zu nutzen, benötigen Sie mindestens eine Datenbank in Ihrem Webhosting-Paket.

Damit die Installation des OVHcloud Moduls erfolgreich ist, überprüfen Sie bitte, dass:

- das Verzeichnis, in dem das Modell installiert wird, vollständig leer ist (wenn Sie sich vorher noch nie mit Ihrem Storage verbunden haben, sollte das der Fall sein).
- auf Ihrem Webhosting bereits eine Datenbank angelegt wurde (gehen Sie in den Tab `Datenbanken`{.action} und anschließend auf `Eine Datenbank erstellen`{.action}, um eine Datenbank anzulegen).

Um eine Datenbank zu erstellen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `Datenbanken`{.action} und klicken Sie auf den Button `Eine Datenbank erstellen`{.action}. Füllen Sie die notwendigen Informationen aus und warten Sie, bis die Installation abgeschlossen ist.

![Zugriff auf die 1-Klick-Module](images/create_a_database.png){/thumbnail}

Nachdem die Datenbank angelegt wurde, gehen Sie für die Installation des 1-Klick-Moduls in den Tab `1 Klick Module`{.action} und klicken Sie anschließend auf den Button `Ein Modul hinzufügen`{.action}. Wählen Sie Ihr bevorzugtes CMS zur Installation aus, vergewissern Sie sich, dass in dem Feld `Installation im Experten-Modus`{.action} ein Haken gesetzt ist, und klicken Sie dann auf `Weiter`{.action}.

![Zugriff auf die 1-Klick-Module](images/access_to_the_1_click_modules_section.png){/thumbnail}

Geben Sie die erforderlichen Informationen ein, um die Installation des Moduls zu starten. Wenn Sie die E-Mail erhalten haben, mit der die Installation bestätigt wird, können Sie die nachfolgenden Schritte vornehmen.

Weitere Informationen zur Installation eines Moduls im Experten-Modus finden Sie in unserer Dokumentation: [Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}.

#### Die manuelle Lösung – technische Kenntnisse erforderlich

Verwenden Sie diese Lösung, wenn Sie eine Website ohne den Einsatz der OVHcloud Module erstellen oder migrieren möchten. Hierzu benötigen Sie die Dateien der Website, die Sie installieren möchten. Loggen Sie sich manuell in Ihren Storage ein, um dort die Dateien der Website hochzuladen und letztere anschließend, sofern möglich, mit einer vorher angelegten Datenbank zu verknüpfen.

Es gibt keine allgemeingültige Vorgehensweise, da Websites sehr unterschiedlich sein können. Anhand der folgenden Dokumentation können wir Ihnen jedoch die Aktionen aufzeigen, die in Ihrem OVHcloud Webhosting durchgeführt werden: [Webhosting: Meine Seite online stellen](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/){.external} und [Migration Ihrer Website und E-Mails zu OVHcloud](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/){.external}. Wenn Ihre Website manuell auf Ihrem Webhosting installiert wurde, können Sie die nachfolgenden Schritte durchführen.

### Schritt 3: Ihre E-Mail-Adressen anlegen

Dieser Schritt ist optional, wenn Sie die in Ihrem [Webhosting](https://www.ovhcloud.com/de/web-hosting/) enthaltenen E-Mail-Adressen nicht nutzen möchten. Um eine oder mehrere E-Mail-Adressen anzulegen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `E-Mails`{.action} das betreffende Hosting aus. Gehen Sie dann auf den Tab `E-Mails`{.action} und klicken Sie auf den Button `Eine E-Mail-Adresse erstellen`{.action}.

![Eine E-Mail-Adresse anlegen](images/create_an_email_address.png){/thumbnail}

Geben Sie die erforderlichen Informationen ein, um Ihre E-Mail-Adresse zu erstellen. Wiederholen Sie diesen Schritt, um mehrere E-Mail-Adressen anzulegen. Wenn Sie Ihre E-Mail-Adressen zu OVHcloud migrieren möchten, empfehlen wir Ihnen unser Tool [OVHcloud Mail Migrator](https://omm.ovh.net/){.external} zu verwenden, das Sie bei der Migration unterstützt. 

Weitere Informationen zum Anlegen einer E-Mail-Adresse oder über die Migration Ihrer Dienstleistungen zu OVHcloud finden Sie in den folgenden Dokumentationen: [Eine E-Mail-Adresse erstellen](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/){.external} und [Migration Ihrer Website und E-Mails zu OVHcloud](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/){.external}.

### Schritt 4: Die Konfiguration Ihrer Domain überprüfen oder anpassen

Wenn Sie bei diesem Schritt angelangt sind, ist Ihre Website auf Ihrem OVHcloud Webhosting installiert und Ihre E-Mail-Adressen sind eingerichtet. Es kann sein, dass die E-Mail-Adressen noch nicht funktionieren, wenn Ihre Domain nicht richtig konfiguriert ist. Das hängt dann mit den DNS-Einträgen zusammen, die für die Erreichbarkeit Ihrer Website sorgen und es Ihnen ermöglichen, Nachrichten an die E-Mail-Adressen zu empfangen, die Ihre Domain verwenden.

So gibt zum Beispiel ein Besucher Ihrer Website in seinem Browser die Adresse Ihrer Seite ein (sprich Ihre Domain). Daraufhin findet eine DNS-Auflösung statt. Über diesen Prozess erfolgt der Abgleich zwischen Ihrem Domainnamen und dem Server, auf dem Ihre Website gehostet wird. Diese Verknüpfung ist dank der in der sogenannten DNS-Zone eingegebenen Informationen möglich: einer Art Telefonbuch, in dem die Konfiguration Ihrer Domain eingetragen ist.

Wenn Sie Ihre Domain zusammen mit Ihrem OVHcloud Webhosting bestellt haben und über Ihr Kundencenter keine Änderungen an der DNS-Zone vorgenommen haben, können Sie sofort mit dem nächsten Schritt fortfahren. Ist das nicht der Fall, oder sind Sie sich nicht sicher, ob Änderungen vorgenommen wurden, befolgen Sie den aktuellen Schritt.

#### Die OVHcloud DNS-Einträge verstehen 

Es gibt mehrere zu OVHcloud gehörige DNS-Einträge. Wir interessieren uns an dieser Stelle für zwei DNS-Einträge, mit denen die Erreichbarkeit Ihrer Website und der Empfang von Nachrichten auf Ihren E-Mail-Adressen garantiert werden.

- **A-Eintrag für die Website**

Um den A-Eintrag zu überprüfen, den Sie für die DNS-Zone Ihrer Domain benötigen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Suchen Sie dann im Tab `Allgemeine Informationen`{.action} die IP-Adresse, die neben „IPv4“ steht.

![A-Eintrag bearbeiten](images/know_the_OVH_A_records.png){/thumbnail}

- **MX-Einträge für E-Mails**

Um die MX-Einträge zu überprüfen, die Sie für die Zone Ihrer Domain benötigen, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und wählen Sie im Bereich `Web Cloud`{.action} unter `Hosting-Pakete`{.action} das betreffende Hosting aus. Suchen Sie im Tab `Allgemeine Informationen`{.action} die Informationen, die neben dem Punkt „MX Einträge“ stehen. Diese können sich je nach Dienstleistung unterscheiden, je nachdem, welchen DNS-Filter Sie angewendet haben.

![MX-Einträge bearbeiten](images/know_the_OVH_MX_records.png){/thumbnail}

#### DNS-Einträge überprüfen oder bearbeiten

Jetzt, da Sie die DNS-Einträge für Ihr OVHcloud Webhosting kennen, können Sie diese überprüfen und gegebenenfalls ändern. Die Vorgehensweise hängt vom jeweiligen Projekt ab.

- **Eine Domain zusammen mit einem OVHcloud Webhosting bestellen**

Ihre Domain ist von vorneherein korrekt konfiguriert. Gehen Sie daher zum nächsten Schritt über. Wenn Sie jedoch Änderungen an der DNS-Zone in Ihrem [OVHcloud Kundencenter](https://ovh.com/auth/?action=gotomanager){.external} vorgenommen haben, stimmt diese Konfiguration möglicherweise nicht mehr.
    
Um auf die DNS-Zone Ihrer Domain zuzugreifen, gehen Sie zum Bereich `Domainnamen`{.action} und klicken Sie anschließend auf den jeweiligen Domainnamen. In dem Tab `DNS Zone`{.action} überprüfen Sie dann die Informationen und ändern diese gegebenenfalls ab.

- **Domains, die nicht die DNS-Zone von OVHcloud verwenden**
    
Überprüfen Sie die DNS-Zone Ihrer Domain bei dem Anbieter, der Ihre Domain verwaltet. Wenn nötig, passen Sie die Angaben entsprechend an.

- **Ihre Dienstleistungen (Websites und E-Mail-Adressen) zu OVHcloud migrieren**

In diesem Fall können Änderungen Ihrer DNS-Zone zu einer Nichtverfügbarkeit Ihrer Dienste führen, wenn diese Änderungen nicht zum richtigen Zeitpunkt durchgeführt werden. Folgen Sie hierzu den entsprechenden Schritten unserer Anleitung [Migration Ihrer Website und E-Mails zu OVHcloud](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/){.external} und bearbeiten Sie die DNS Server Ihrer Domain erst am Ende des Prozesses.

> [!primary]
>
> Eine Änderung in der DNS-Zone braucht zwischen 4 und maximal 24 Stunden, bis die Änderungen voll wirksam sind.
>

### Schritt 5: Ihre Website personalisieren

Ihre Website ist ab sofort erreichbar. Dieser Schritt ist optional, wenn Sie eine Website migriert haben, die bereits personalisiert wurde. Wenn Sie jedoch zum Beispiel mithilfe unserer Module gerade eine neue Website installiert haben, können Sie diese durch Anpassung des Themes und die Veröffentlichung erster Inhalte anpassen.

Wenn Sie Hilfe bei der Nutzung der Funktionalitäten Ihrer Website benötigen, gehen Sie bitte auf die offizielle Website des jeweiligen Herausgebers. Dort finden Sie ergänzende Dokumentation zu Ihrer Unterstützung.

### Schritt 6: Ihre E-Mail-Adressen verwenden

Sie können nun auch Ihre E-Mail-Adressen verwenden. Dafür stellt OVHcloud Ihnen eine Webanwendung (Webmail) zur Verfügung: RoundCube. Diese App ist über die Adresse <https://www.ovhcloud.com/de/mail/> erreichbar, auf der Sie die Login-Daten für Ihre von OVHcloud angelegte E-Mail-Adresse eingeben.

Wenn Sie mehr Informationen über die Verwendung von RoundCube benötigen, werfen Sie bitte einen Blick in unsere Anleitung: [Verwendung von RoundCube](https://docs.ovh.com/de/emails/webmail_verwendung_von_roundcube/){.external}. Wenn Sie Ihre E-Mail-Adresse auf einem E-Mail-Client oder einem Gerät (beispielsweise einem Smartphone oder einem Tablet) einrichten möchten, werfen Sie bitte einen Blick in die jeweilige Anleitung unter <https://docs.ovh.com/de/emails/>.

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVHcloud](../migration-ihrer-website-zu-ovh/){.external}

[Meine Seite online stellen](../webhosting_meine_seite_online_stellen/){.external}

[Installation Ihrer Website mit 1-Klick-Modulen](../webhosting_installation_von_webhosting-modulen/){.external}

[Eine E-Mail-Adresse erstellen](https://docs.ovh.com/de/emails/e-mail-adresse-erstellen/){.external}

[Verwendung von RoundCube](https://docs.ovh.com/de/emails/webmail_verwendung_von_roundcube/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
