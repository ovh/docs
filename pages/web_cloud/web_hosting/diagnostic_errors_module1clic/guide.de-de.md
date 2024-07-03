---
title: "Die häufigsten Fehler bei 1-Klick-Modulen beheben"
excerpt: "Erfahren Sie hier, wie Sie die häufigsten Fehler bei der Erstellung von 1-Klick-Modulen beheben können"
updated: 2024-03-12
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit den OVHcloud [1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules) können Sie Ihre Website schnell erstellen. Mit dieser Technologie können Sie Ihre Website mit den bekanntesten **C**ontent **M**anagement **S**ystem (**CMS**) wie *WordPress*, *Joomla!*, *Drupal* oder *PrestaShop* erstellen.
Wenn diese jedoch nicht korrekt konfiguriert sind, kann die Installation des 1-Klick-Moduls fehlschlagen und/oder zu Fehlfunktionen führen.

**Diese Anleitung erklärt, wie Sie die häufigsten Fehler bei der Erstellung eines 1-Klick-Moduls diagnostizieren**


> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) oder den Herausgeber des Dienstes zu kontaktieren. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further
).
>

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](https://www.ovh.de/hosting/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben die Option [1-Klick-Modul](/pages/web_cloud/web_hosting/cms_install_1_click_modules) verwendet, um eine neue Website zu erstellen.

## In der praktischen Anwendung

> [!primary]
>
> Hier finden Sie die häufigsten Fehler. Wenn Sie eine andere Situation als die hier beschriebenen haben, lesen Sie unsere [Webhosting FAQ](/pages/web_cloud/web_hosting/faq-web_hosting).
>

### Ihr Domainname wird bei der Erstellung des 1 Klick Moduls nicht angeboten

![domainenotproposed](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/domain-unavailable.png){.thumbnail}

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager) und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das Webhosting aus, das installiert werden soll. Klicken Sie auf der angezeigten Seite auf den Tab `Multisite`{.action}, und führen Sie dann die folgenden Überprüfungen durch:

|Szenario|Lösung|
|---|---|
|Die Domain oder Subdomain, die mit der Website verknüpft ist, die Sie erstellen möchten, wird in der Tabelle auf der Registerkarte `Multisite`{.action} nicht angezeigt.|Fügen Sie Ihre Domain hinzu, indem Sie [dieser Anleitung](/pages/web_cloud/web_hosting/multisites_configure_multisite) folgen.|
|Der Domainname wurde ohne Aktion Ihrerseits aus der Multisite gelöscht.|Wenn Ihre Domain oder deren [DNS Zone](/pages/web_cloud/domains/dns_zone_edit) nicht über Ihren OVHcloud Kunden-Account verwaltet werden, fügen Sie Ihre Domain über den Tab `Multisite`{.action} hinzu, indem Sie [diese Anleitung](/pages/web_cloud/web_hosting/multisites_configure_multisite) folgen hinzufügen.|

### „Beim Laden der Informationen ist ein Fehler aufgetreten (You need at least one free database)“

![No databases available](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-no-db-available.png){.thumbnail}

Diese Meldung erscheint, wenn Sie die Installation Ihres 1-Klick-Moduls starten, wenn Sie nicht oder nicht mehr die Möglichkeit haben, eine neue Datenbank für Ihr Webhosting zu erstellen.

#### Lösung 1: Eine neue Datenbank bestellen

Wenn Sie keine Inklusiv-Datenbanken mehr in Ihrem Webhosting haben, können Sie eine neue [Start SQL Datenbank](/links/web/hosting-options-startsql) bestellen und mit Ihrem aktuellen Webhosting verbinden. Anschließend können Sie die Installation des 1-Klick-Moduls neu starten. Wenn Sie mehr Speicherplatz benötigen (mehr als 1 GB), empfehlen wir Ihnen stattdessen unseren Dienst [Web Cloud Databases](/links/web/databases).

Gehen Sie in Ihrem [OVHcloud Kundencenter](/links/manager) in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das Webhosting aus, für das Sie eine zusätzliche Datenbank hinzufügen möchten. Klicken Sie auf der angezeigten Seite auf den Tab `Datenbanken`{.action} und dann auf `Aktionen`{.action}, um eine zusätzliche Datenbank zu bestellen:

![order_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/order-a-db.png){.thumbnail}

Anschließend können Sie ein neues 1-Klick-Modul installieren.

> [!primary]
>
> Denken Sie daran, sich vorab über unsere Datenbankangebote [Start SQL](/links/web/hosting-options-startsql) und [Web Cloud Databases](/links/web/databases) zu informieren.
>

#### Lösung 2: Ihr Webhosting Angebot ändern

> [!primary]
>
> Vergleich unserer [Webhosting-Angebote](/links/web/hosting).
>

Klicken Sie in Ihrem [OVHcloud Kundencenter](/links/manager) auf `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der Seite im Bereich `Abo` - `Angebot` auf den Button `...`{.action} `Angebot wechseln`{.action}:

![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}

Die Angebote [Pro](/links/web/hosting-professional-offer) und [Performance](/links/web/hosting-performance-offer) ermöglichen Ihnen die Erstellung von bis zu drei zusätzlichen 1-Klick-Modulen mit einer unabhängigen Datenbank für jedes Modul. Mit den **Performance** Angeboten können Sie auch kostenlos einen [Web Cloud Databases](/links/web/databases) Server aktivieren.

Anschließend können Sie ein neues 1-Klick-Modul installieren.

#### Lösung 3: Löschen einer nicht verwendeten Datenbank <a name="delete-the-database"></a>

> [!warning]
>
> Das Löschen einer Datenbank ist endgültig. Außerdem werden die Backups der betreffenden Datenbank gelöscht. Im Zweifelsfall wenden Sie sich an Ihren Webmaster oder einen unserer [Partner](/links/partner).
>

Um eine Datenbank über Ihr [OVHcloud Kundencenter](/links/manager) zu löschen, gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.

Klicken Sie auf der angezeigten Seite auf den Tab `Datenbanken`{.action}. Klicken Sie in der angezeigten Tabelle auf den Button `...`{.action} in der Zeile mit der Datenbank, die Sie löschen möchten, und klicken Sie dann auf `Datenbank löschen`{.action}:

![delete_a_database](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/sharedsql-deletion.png){.thumbnail}

Anschließend können Sie ein neues 1-Klick-Modul installieren.

#### Lösung 4: Installation Ihres 1-Klick-Moduls auf einer bereits verwendeten Datenbank

Um Ihr 1-Klick-Modul auf einer bereits bestehenden Datenbank zu installieren, müssen Sie die Installationsfunktion im [erweiterten Modus](/pages/web_cloud/web_hosting/cms_install_1_click_modules) eines neuen 1-Klick-Moduls verwenden.

Die Login-Daten Ihrer Datenbank finden Sie mithilfe unserer Anleitung [Installation Ihrer Website mit 1-Klick-Modulen (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Wenn Sie über einen [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) Server verfügen, können Sie eine Datenbank Ihrer Wahl mit der gewünschten Größe und im Rahmen des zugewiesenen Speicherplatzes erstellen.

Anschließend können Sie ein neues 1-Klick-Modul installieren.

> [!primary]
>
> In dieser Situation können Sie die Daten einer Website mit einem [PHP-Skript oder einem SSH-Befehl](/pages/web_cloud/web_hosting/sql_database_export) sichern.
>
> Bei Fragen zu den durchzuführenden Aktionen wenden Sie sich bitte an die [OVHcloud Community](/links/community) oder einen unserer [Partner](/links/partner).<br>
> Wir können Ihnen in diesem Zusammenhang keine Unterstützung bieten.
>

### Ihr 1-Klick-Modul wird unter einer Webadresse vom Typ „xxxx.cluster0xx.hosting.ovh.net“ angezeigt

![url-cluster](/pages/assets/screens/other/browsers/urls/url-cluster.png){.thumbnail}

Nachdem Sie alle notwendigen Backups durchgeführt haben, [löschen Sie Ihr 1-Klick-Modul](#delete-the-module) und dann seine [Datenbank](#delete-the-database). Starten Sie anschließend die Installation Ihres 1-Klick-Moduls auf der gewünschten Domain neu.

### „Das Installationsverzeichnis ist nicht leer“

![folder_not_empty](/pages/assets/screens/control_panel/product-selection/web-cloud/email-sending-to-customer/webhosting/folder-not-empty.png){.thumbnail}

Nachdem Sie mit der Erstellung Ihres 1-Klick-Moduls begonnen haben, haben Sie eine E-Mail erhalten, die besagt, dass das Installationsverzeichnis Ihres 1-Klick-Moduls nicht leer ist.

Diese Nachricht bedeutet, dass das Ihrem Domainnamen zugeordnete **Wurzelverzeichnis** bereits eine oder mehrere Dateien oder Ordner enthält.

Um Ihre Domain mit einem anderen Verzeichnis zu verbinden, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der angezeigten Seite auf den Tab `Multisite`{.action}. Klicken Sie in der angezeigten Tabelle auf den Button `...`{.action} rechts neben der Zeile für Ihren Domainnamen und dann auf `Domain bearbeiten`{.action}. Geben Sie zum Schluss einen Namen für ein neues **Wurzelverzeichnis** ein (ein leeres Verzeichnis wird automatisch auf Ihrem Webhosting erstellt).

![modify_root_folder](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain.png){.thumbnail}

Sie können sich auch über das [FTP-Protokoll](/pages/web_cloud/web_hosting/ftp_connection) mit Ihrem Webhosting verbinden und den Inhalt des Ordners löschen, nachdem Sie es lokal gesichert haben oder nachdem Sie den gesamten Inhalt in ein anderes FTP-Verzeichnis verschoben haben.

### „Either no configuration (ovhConfig or runtime), or the current configuration is not valid (please, double check the module's requirement) (as a reminder, the global configuration is used for module).“

Diese Meldung zeigt an, dass die Datei “.ovhconfig“ nicht existiert oder ungültig ist, um Ihr 1-Klick-Modul installieren zu können. Diese Datei enthält die PHP-Version und die Ausführungsumgebung, die auf Ihr Webhosting angewendet wurden.

Es wird empfohlen, die aktuellste PHP-Version zu verwenden. **Bevor** Sie die Konfiguration der Datei “.ovhconfig“ ändern, stellen Sie bei Ihrem Webhosting sicher, dass die anderen Websites mit der neuen PHP-Version und/oder der neuen Ausführungsumgebung kompatibel sind, die Sie auf Ihrem Webhosting anwenden werden.

Um diese Konfiguration zu überprüfen, lesen Sie unsere Anleitung „[Webhosting-Konfiguration bearbeiten](/pages/web_cloud/web_hosting/configure_your_web_hosting)“.

### „Fehler beim Laden der Informationen (There is not enough space on your hosting (you need at least xxx MB))“

![not_enough_space](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/message-not-enough-ftp-space.png){.thumbnail}

Diese Meldung weist darauf hin, dass der [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) Ihres Webhostings zu viele Daten enthält. 

#### Lösung 1: Daten löschen, um FTP-Speicherplatz freizugeben

In diesem Fall löschen (oder verschieben) Sie Ihre Daten, um ein neues „[1-Klick-Modul](/pages/web_cloud/web_hosting/cms_install_1_click_modules)“ zu installieren.

In dieser Situation nutzen Sie [FTP](/pages/web_cloud/web_hosting/ftp_connection) um ein [lokales Backup](/pages/web_cloud/web_hosting/ftp_filezilla_user_guide) Ihrer Webhosting-Daten zu erstellen, und löschen Sie alle Dateien, die für den Betrieb Ihrer Website nicht erforderlich sind.

> [!primary]
>
> Wenn Sie Fragen zum Löschen von Daten haben, um die Datenmenge auf Ihrem Webhosting zu reduzieren, wenden Sie sich an unsere [User Community](/links/community) oder die [OVHcloud Partner](/links/partner).<br>
> Der OVHcloud Support ist nicht berechtigt, Sie bei diesen Fragen zu unterstützen.
>

#### Lösung 2: Ihr Webhosting Angebot ändern

> [!primary]
>
> Vergleich unserer [Webhosting-Angebote](/links/web/hosting).
>

Gehen Sie in Ihrem [OVHcloud Kundencenter](/links/manager) in den Bereich `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der Seite im Bereich `Abo` - `Angebot` auf den Button `...`{.action} `Angebot wechseln`{.action}:

![upgrade_hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/upgrade-perso.png){.thumbnail}

Die Angebote [Pro](/links/web/hosting-professional-offer) und [Performance](/links/web/hosting-performance-offer) ermöglichen Ihnen die Erstellung von bis zu drei zusätzlichen 1-Klick-Modulen mit einer unabhängigen Datenbank für jedes Modul. Mit den **Performance** Angeboten können Sie auch kostenlos einen [Web Cloud Databases](/links/web/databases) Server aktivieren.

### „Verbindung zur Datenbank kann nicht hergestellt werden“ <a name="delete-the-module"></a>

![wrong_id_database](/pages/assets/screens/control_panel/product-selection/web-cloud/email-sending-to-customer/databases/db-connection-failed.png){.thumbnail}

Nachdem Sie mit der Installation Ihres 1-Klick-Moduls im fortgeschrittenen Modus begonnen haben, haben Sie eine E-Mail erhalten, dass sich Ihr 1-Klick-Modul nicht mit der angegebenen Datenbank verbinden kann.

Überprüfen Sie die Login-Daten Ihrer Datenbank. Weitere Informationen finden Sie in [unserer Anleitung](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Löschen Sie anschließend Ihr 1-Klick-Modul. Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Klicken Sie auf der angezeigten Seite auf den Tab `1-Klick-Module`{.action}. Klicken Sie in der angezeigten Tabelle auf den Button `...`{.action} in der Zeile für Ihren Domainnamen und dann auf `Das Modul löschen`{.action}.

![delete_a_module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/delete-a-module-2.png){.thumbnail}

> [!warning]
>
> **Das Löschen von Elementen aus der Datenbank kann zu einer Unterbrechung der Website führen.**
>
> Achten Sie darauf, nur die zuletzt gestartete Installation zu entfernen. Stellen Sie hierzu sicher, dass es sich um das korrekte Verzeichnis in der Spalte `Path` (Pfad) handelt.
>

Starten Sie dann die Installation eines neuen 1-Klick-Moduls.

### „You have insufficient rights on this database.“

![insufficient_rights](/pages/assets/screens/control_panel/product-selection/web-cloud/email-sending-to-customer/databases/db-insufficient-rights.png){.thumbnail}

Diese Meldung erscheint nur bei der Installation eines 1-Klick-Moduls im **Erweiterten Modus**. Die Datenbank kann nicht mehr geändert werden, da die Datenmenge in der Datenbank den zulässigen Grenzwert überschreitet. In diesem Fall ist die Datenbank schreibgeschützt gesperrt.

Installieren Sie in dieser Situation Ihr 1-Klick-Modul über den [einfachen Modus](/pages/web_cloud/web_hosting/cms_install_1_click_modules) oder wählen Sie bei der Installation im Experten-Modus eine andere Datenbank. Bei Bedarf können Sie ein [Datenbank-Angebot](/links/web/hosting-options-startsql) bestellen.

Wenn Sie keine anderen Datenbanken haben und kein zusätzliches Angebot bestellen möchten, [exportieren Sie eine lokale Kopie Ihrer Datenbank](/pages/web_cloud/web_hosting/sql_database_export), und löschen Sie dann die nicht benötigten Daten.

> [!warning]
>
> **Das Löschen von Elementen aus der Datenbank kann zur Störung der Website führen.**
>
> Bei weiteren Fragen wenden Sie sich bitte an unsere [User Community](/links/community) oder an die [OVHcloud Partner](/links/partner).<br>
> Wir können Ihnen in diesem Zusammenhang keine Unterstützung bieten.
>

### „Can't connect to database 'xxxxxxxx' at 'xxxxxx-xxx.eu.clouddb.ovh.net'. The error is: Access denied for user 'xxxx'@'xxxxxxxx' (using password: YES)“

![cant_connect](/pages/assets/screens/control_panel/product-selection/web-cloud/email-sending-to-customer/databases/db-cant-connect-access-denied.png){.thumbnail}

Sie haben die Installation eines 1-Klick-Moduls im [erweiterten Modus](/pages/web_cloud/web_hosting/cms_install_1_click_modules) auf einer Datenbank auf einem [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) Server gestartet. Sie haben diese Fehlermeldung per E-Mail erhalten. Dies bedeutet, dass der bei der Installation angegebene Benutzer nicht über ausreichende Rechte für die Datenbank verfügt oder dass die angegebenen Anmeldeinformationen falsch sind.

Ändern Sie in dieser Situation zunächst die betreffenden [Benutzerrechte](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server), sodass sie über **Administrator**- oder **Lese-/Schreibzugriff**-Rechte für die Datenbank verfügen.

Überprüfen Sie auch die Login-Daten, indem Sie sich [direkt](/pages/web_cloud/web_cloud_databases/connecting-to-database-on-database-server) mit Ihrem Datenbankserver verbinden und die Installation Ihres 1 Klick Moduls neu starten.

### „Can't connect to database 'xxxxxxxx' at 'xxxxxxxx.mysql.db'. The error is: Unknown MySQL server host 'xxxxxxxx.mysql.db'“

![cant_connect_server](/pages/assets/screens/control_panel/product-selection/web-cloud/email-sending-to-customer/databases/db-cant-connect-server.png){.thumbnail}

Sie haben die Installation eines 1-Klick-Moduls im [erweiterten Modus](/pages/web_cloud/web_hosting/cms_install_1_click_modules) auf einer Datenbank auf einem [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) Server gestartet. Sie haben diese Fehlermeldung per E-Mail erhalten. Dies bedeutet, dass der eingegebene Name des Datenbankservers falsch ist.

Um den Namen Ihres Datenbankservers zu finden, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Web Cloud Databases`{.action} und wählen Sie den betreffenden Datenbankserver aus.

Auf der angezeigten Seite wird der Name des zu verwendenden Servers in der Randleiste `Verbindungsinformationen`, Unterabschnitt `SQL`, unter dem Begriff `Hostname` angezeigt.

### Ihre alte Website wird weiterhin angezeigt

Wenn Sie auf den Link Ihrer Website in der Spalte `Pfad` klicken im Tab `1-Klick-Module` des Webhostings klicken, öffnet ein neuer Tab mit Ihrer Website. Der Ihrer Installation zugewiesene Domainname wird in der Adresse Ihres Internetbrowsers angezeigt. Wenn Ihre Domain zum Beispiel „domain.tld“ ist, wird möglicherweise eine andere Domain oder eine OVHcloud-Standardseite angezeigt.

Diese Fehlfunktion kann mehrere Ursachen haben:

- Überprüfen Sie, ob der Domainname („domain.tld“), den Sie gerade aufgerufen haben, der Name ist, mit dem Sie das 1-Klick-Modul installiert haben.

- Wenn Sie kürzlich die [aktive DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)/[DNS-Server](/pages/web_cloud/domains/dns_server_edit) Ihres Domainnamens oder einen [Transfer eines Domainnamens](/pages/web_cloud/domains/transfer_incoming_generic_domain) geändert haben. Warten Sie, bis diese Vorgänge abgeschlossen sind (4-24 Stunden bei einer Änderung der DNS-Zone und 24-48 Stunden bei einer Änderung der DNS-Server). Denken Sie auch daran, Ihre Geräte (PC, Smartphone, Box usw.) neu zu starten und den Cache Ihres Internetbrowsers zu leeren.

- Ihr Domainname ist immer noch mit Ihrem alten Webhosting verbunden. Ändern Sie in diesem Fall die [aktive DNS-Zone](/pages/web_cloud/domains/dns_zone_edit), die mit Ihrem Domainnamen oder dessen [DNS-Servern](/pages/web_cloud/domains/dns_server_edit) verbunden ist. Wenn die aktive DNS-Zone Ihrer Domain nicht bei OVHcloud verwaltet wird, wenden Sie sich mit diesen Informationen an Ihren DNS-Anbieter.

### Das Passwort „Administrator“ für den Zugriff auf das „Verwaltungsinterface“ Ihres 1-Klick-Moduls funktioniert nicht <a name="adminpassword"></a>

Wenn Ihr aktuelles Passwort für den Zugriff auf das Verwaltungsinterface Ihres **C**ontent **M**anagement **S**ystem (**CMS**) abgelehnt wird, lesen Sie den Abschnitt „Ihr Modulpasswort ändern“ in unserer Anleitung zur [Verwaltung Ihres 1-Klick-Moduls](/pages/web_cloud/web_hosting/cms_manage_1_click_module).

### Das Tabellenpräfix Ihrer Datenbank wird bereits für Ihre Datenbank verwendet

Dieser Fehler betrifft nur die Installation von 1-Klick-Modulen im *erweiterten Modus*. 

Beim Versuch, das 1-Klick-Modul zu installieren, wurde ein Tabellenpräfix angegeben, das bereits für eine Datenbank verwendet wird. Die Installation wird abgebrochen. 

Wenn Sie eine solche Mail erhalten haben, führen Sie die Installation mit einem anderen Tabellenpräfix oder einer anderen Datenbank erneut aus, um das Problem zu beheben.

### DNS-Einträge der Domain verweisen nicht auf ein OVHcloud Webhosting

Dieser Fehler informiert Sie darüber, dass die DNS-Einträge der für Ihre Website verwendeten Domain nicht auf ein OVHcloud Webhosting verweisen. Es ist nicht möglich, ein 1-Klick-Modul auf einer Domain zu installieren, die nicht auf ein OVHcloud Hosting verweist.
Um diese Situation zu beheben, bearbeiten Sie Ihre DNS-Zone. Weitere Informationen zu den einzugebenden IP-Adressen finden Sie in der Anleitung [Liste der IP-Adressen von Clustern und Webhostings](/pages/web_cloud/web_cloud_databases/configure-database-server). Danach müssen Sie [Ihre DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit).
Wenn Ihre DNS-Zone nicht bei OVHcloud gehostet wird, wenden Sie sich an Ihren DNS-Anbieter, um die erforderlichen Schritte einzuleiten.

Wenn Sie damit fertig sind, starten Sie die Installation eines neuen 1-Klick-Moduls.

### Ihre Datenbank muss in der Version „X“ sein, diese ist jedoch derzeit in der Version „Y“ 

Diese E-Mail informiert Sie darüber, dass die Version Ihrer Datenbank zu alt für die Installation Ihres 1-Klick-Moduls ist. 

In derselben E-Mail finden Sie auch die Version, in der sich Ihre Datenbank befinden sollte. Sie haben drei Möglichkeiten:

- Update des **D**ata**B**ase **M**anagement **S**ystem (DBMS wie MySQL, PostgreSQL, MariaDB etc.) zur neueren Version.
- Installation einer neuen Datenbank für Ihr Webhosting. So stellen Sie sicher, dass das DBMS und die Version mit dem gewünschten 1-Klick-Modul kompatibel sind.
- Wenn Sie über einen [Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb) Server verfügen, überprüfen Sie, ob Ihr Server das richtige DBMS und die richtige Version verwendet, und erstellen Sie dann die Datenbank Ihrer Wahl.

Anschließend starten Sie die Installation eines neuen 1-Klick-Moduls.

## Weiterführende Informationen <a name="go-further"></a>

[Installation Ihrer Website mit 1-Klick-Modulen (CMS)](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Wiederkehrende Probleme bei der Verwendung von FTP-Software](/pages/web_cloud/web_hosting/ftp_recurring_ftp_problems)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.