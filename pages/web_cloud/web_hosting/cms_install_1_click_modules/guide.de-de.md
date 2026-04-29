---
title: "Installation Ihrer Website mit 1-Klick-Modulen (CMS)"
excerpt: "Erfahren Sie hier, wie Sie Ihre Website mithilfe unserer 1-Klick-Module installieren"
updated: 2026-05-04
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

1-Klick-Module ermöglichen die einfache und schnelle Installation einer Website, auch ohne technische Vorkenntnisse. Es handelt sich hierbei um ein **C**ontent **M**anagement **S**ystem (**CMS**). OVHcloud bietet einen vereinfachten Installationsprozess der populärsten CMS an: *WordPress*, *Joomla!*, *Drupal* und *PrestaShop*.

**Diese Anleitung erklärt, wie Sie Ihre Website mithilfe von 1-Klick-Modulen installieren.**

<iframe class="video" width="560" height="315" src="https://www.youtube.com/embed/ZrYmmPbMl4I?rel=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) mit mindestens einer Datenbank.
- Ihr OVHcloud Webhosting verwendet eine aktuelle PHP-Version und eine kompatible Ausführungsumgebung. Sie können den Stand der verschiedenen Versionen auf [dieser Seite](https://webhosting-infos.hosting.ovh.net/) überprüfen. Wenn nötig, nutzen Sie unsere [Anleitung](/pages/web_cloud/web_hosting/configure_your_web_hosting) zu diesem Thema, um diese Konfiguration schnell anpassen zu können.
- Im FTP-Wurzelverzeichnis Ihres Webhostings muss eine konfigurierte [.ovhconfig Datei](/pages/web_cloud/web_hosting/configure_your_web_hosting) vorhanden sein.
- Falls ein bereits vorhandenes Verzeichnis zur Installation des 1-Klick-Moduls verwendet werden soll, muss dieses leer sein.
- Der Domainname (mit Subdomain, falls gewünscht), der für Ihre Website verwendet werden soll, muss über den Tab [Meine Seiten](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website) Ihres Webhostings hinzugefügt werden.

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

> [!primary]
>
> Falls Sie auf Schwierigkeiten beim Ausführen der unten beschriebenen Schritte stoßen, finden Sie Lösungen in unserer [Dokumentation zu den häufigsten Fehlermeldungen bei 1-Klick-Modulen](/pages/web_cloud/web_hosting/diagnostic_errors_module1clic).

### 1 - Ein CMS auswählen

Mit einem CMS können Sie Ihre Website über ein einfach zu verwendendes Interface einrichten. Es gibt verschiedene Arten von CMS, von denen einige beispielsweise konzipiert sind, um eine E-Commerce Seite zu erstellen, andere für die Einrichtung strukturierter Seiten wie etwa Blogs. So können Sie auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Gestaltung, Erweiterungen, Text etc.).

OVHcloud bietet 4 CMS als automatische Installation über 1-Klick-Modul an.

Wählen Sie aus den oben aufgeführten 4 CMS aus und folgen dann den Schritten in dieser Anleitung. Sie können unsere [Übersichtsseite für CMS](/links/web/hosting-cms-comparison) verwenden, um Ihre Auswahl zu erleichtern.

Wenn Sie ein CMS installieren möchten, das nicht als OVHcloud 1-Klick-Modul angeboten wird, können Sie es manuell auf Ihrem Hosting installieren, sofern dieses CMS mit Ihrem [OVHcloud Webhosting](/links/web/hosting) kompatibel ist.

![CMS-Logos](/pages/assets/screens/other/cms/cms-logos.png){.thumbnail}

### 2 - 1-Klick-Modul hinzufügen

Es stehen zwei Installationsmethoden zur Verfügung:

- **Einfache Installation** (Standardeinstellung): OVHcloud führt die Installation des CMS durch und sendet Ihnen Ihre Zugangsdaten per E-Mail an Ihre OVHcloud Kontaktadresse. Dies ist die schnellste Art, ein 1-Klick-Modul zu installieren.
- **Installation im Experten-Modus**: Sie können die Installationseinstellungen anpassen. Geben Sie hierzu die Informationen ein, die für das korrekte Funktionieren des CMS mit Ihrer Datenbank notwendig sind:
    - Verbindungsinformationen zu Ihrer Datenbank (Server, Benutzername, Port, Passwort)
    - Installationspfad im FTP-Speicherplatz Ihres Hostings
    - Sprache des CMS
    - Administrationsdaten (Administratorname, Passwort, E-Mail-Adresse)

> [!warning]
>
> Das Installationsverzeichnis Ihres 1-Klick-Moduls muss leer sein und Ihr OVHcloud Webhosting muss über mindestens eine Datenbank verfügen, damit die Installation durchgeführt werden kann.
>
> Wenn Sie nicht den Experten-Modus verwenden, erstellen Sie die Datenbank nicht im Voraus, da der Installationsroboter dies ausführt.

**Klicken Sie auf eine der 2 Installationsmethoden, um den Inhalt anzuzeigen.**

/// details | Einfache Installation eines Moduls

<!-- CP-STEPS-START:install-basic-module -->
Klicken Sie auf die Tabs unten, um die **4** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Rufen Sie die Seite [Hosting-Pakete](/links/control-panel/web-hosting) auf und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `1-Klick-Module`{.action}. Hier können Sie die bereits installierten 1-Klick-Module verwalten und neue Module installieren.
>>
>> ![Zugang zur Verwaltung der 1-Klick-Module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/tab.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie im Tab `1-Klick-Module`{.action} Ihres Hostings auf den Button `Ein Modul hinzufügen`{.action}.
>>
>> Wählen Sie im neu angezeigten Fenster das gewünschte CMS aus und dann den Domainnamen, mit dem Sie Ihre Website installieren möchten:
>>
>> ![Modulauswahl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-select-module-and-domain.png){.thumbnail}
>>
>> Wenn der Domainname nicht in der Liste steht, gehen Sie zum Tab `Meine Seiten`{.action}, um ihn hinzuzufügen. Wenn nötig lesen Sie unsere Anleitung „[Wie verbinde ich einen Domainnamen mit einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
>>
>> > [!primary]
>> >
>> > Überprüfen Sie direkt unterhalb des Formulars zur Auswahl einer Domain (oder Subdomain), dass Ihr `Standard-Installationsverzeichnis` tatsächlich dem Verzeichnis entspricht, in dem Sie Ihr 1-Klick-Modul installieren möchten.
>> >
>> > Zur Erinnerung: Dieses Verzeichnis muss vollständig leer sein.
>> >
>> > Wenn nötig, lesen Sie unsere Anleitung „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)", um das Zielverzeichnis des Domainnamens zu ändern.
>>
>> Anschließend versuchen Sie erneut, ein Modul zu installieren.
>>
> **Schritt 4**
>>
>> Wählen Sie den Domainnamen für Ihr CMS aus. Überprüfen Sie das Zielverzeichnis, das nach der Wahl des Domainnamens automatisch erscheint, und stellen Sie sicher, dass bei `Installation im Experten-Modus`{.action} kein Haken gesetzt ist. Klicken Sie anschließend auf den Button `Installieren`{.action}.
>>
>> ![Einfache Installation eines Moduls](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-quick-mod-step-1-b.png){.thumbnail}
>>
>> Sobald die Installation abgeschlossen ist, erhalten Sie eine E-Mail mit Login-Daten. Damit können Sie sich in das Administrator-Interface (Backend) Ihres CMS einloggen.
>>
<!-- CP-STEPS-END:install-basic-module -->

> [!primary]
>
> Die Installation kann bis zu 15 Minuten dauern, nachdem Sie in Ihrem [OVHcloud Kundencenter](/links/manager) auf `Installieren`{.action} geklickt haben.

///

/// details | Erweiterte Installation eines Moduls

<!-- CP-STEPS-START:install-advanced-module -->
Klicken Sie auf die Tabs unten, um die **8** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Rufen Sie die Seite [Hosting-Pakete](/links/control-panel/web-hosting) auf und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf der angezeigten Seite auf den Tab `1-Klick-Module`{.action}. Hier können Sie die bereits installierten 1-Klick-Module verwalten und neue Module installieren.
>>
>> ![Zugang zur Verwaltung der 1-Klick-Module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/tab.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie im Tab `1-Klick-Module`{.action} Ihres Hostings auf den Button `Ein Modul hinzufügen`{.action}.
>>
>> Wählen Sie im neu angezeigten Fenster das gewünschte CMS aus und dann den Domainnamen, mit dem Sie Ihre Website installieren möchten:
>>
>> ![Modulauswahl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-select-module-and-domain.png){.thumbnail}
>>
>> Wenn der Domainname nicht in der Liste steht, gehen Sie zum Tab `Meine Seiten`{.action}, um ihn hinzuzufügen. Wenn nötig lesen Sie unsere Anleitung „[Wie verbinde ich einen Domainnamen mit einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
>>
>> > [!primary]
>> >
>> > Überprüfen Sie direkt unterhalb des Formulars zur Auswahl einer Domain (oder Subdomain), dass Ihr `Standard-Installationsverzeichnis` tatsächlich dem Verzeichnis entspricht, in dem Sie Ihr 1-Klick-Modul installieren möchten.
>> >
>> > Zur Erinnerung: Dieses Verzeichnis muss vollständig leer sein.
>> >
>> > Wenn nötig, lesen Sie unsere Anleitung „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)", um das Zielverzeichnis des Domainnamens zu ändern.
>>
>> Anschließend versuchen Sie erneut, ein Modul zu installieren.
>>
> **Schritt 4**
>>
>> Vergewissern Sie sich, dass im Feld `Installation im Experten-Modus`{.action} ein Haken gesetzt ist, und klicken Sie anschließend auf `Weiter`{.action}:
>>
>> ![Erweiterte Installation eines Moduls](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-1.png){.thumbnail}
>>
> **Schritt 5**
>>
>> Geben Sie die Verbindungsdaten zu Ihrer Datenbank ein.
>>
>> > [!warning]
>> >
>> > Wenn die von Ihnen angegebenen Informationen nicht korrekt sind, wird die Installation abgebrochen. Um dies zu vermeiden, testen Sie zunächst die Verbindung zu Ihrer Datenbank.
>> >
>> > Um die Login-Daten zu Ihrer Webhosting-Datenbank zu ermitteln, lesen Sie unsere Anleitung "[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)".
>> >
>> > Um die Login-Daten zu einer mit Web Cloud Databases erstellten Datenbank herauszufinden, lesen Sie unsere Anleitung "[Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> ![Datenbank für erweiterte Installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-3.png){.thumbnail}
>>
>> Es gibt mehrere Möglichkeiten:
>>
>> - Die Datenbank ist bereits auf Ihrem Webhosting erstellt: Wählen Sie Ihre Datenbank unter `Wählen Sie die Datenbank aus`{.action} und geben Sie die erforderlichen Informationen ein.
>> - Die Datenbank ist noch nicht auf Ihrem Webhosting erstellt: [Erstellen Sie Ihre Datenbank auf dem Hosting](/pages/web_cloud/web_hosting/sql_create_database), wählen Sie Ihre Datenbank unter `Wählen Sie die Datenbank aus`{.action} und geben Sie die erforderlichen Informationen ein.
>> - Die Datenbank befindet sich auf einer [Instanz von Web Cloud Databases](/pages/web_cloud/web_cloud_databases/create-db-and-user-on-db-server): Wählen Sie unter `Wählen Sie die Datenbank aus`{.action} die Option `Datenbank außerhalb Ihres Webhostings`{.action} und tragen Sie die Verbindungsdaten Ihrer Datenbank ein. Die Instanz und das Webhosting müssen im gleichen Rechenzentrum gehostet werden.
>> - Die Datenbank wurde auf einem anderen OVHcloud Webhosting eingerichtet: Wählen Sie unter `Wählen Sie die Datenbank aus`{.action} die Option `Datenbank außerhalb Ihres Webhostings`{.action} und tragen Sie die Verbindungsdaten Ihrer Datenbank ein. Die Datenbank und das Webhosting mit dem neuen Modul müssen im gleichen Rechenzentrum gehostet werden.
>>
> **Schritt 6**
>>
>> Geben Sie die übrigen Informationen für die Datenbank ein:
>>
>> - *Adresse des Servers*: Geben Sie den Servernamen Ihrer Datenbank ein, den Sie in der E-Mail zur Installation oder in Ihrem OVHcloud Kundencenter finden können.
>>
>> > [!primary]
>> >
>> > - Der Servername einer inklusiven Datenbank eines Webhostings hat im Allgemeinen folgende Form: `NameOfYourDatabase.mysql.db`.
>> >
>> > - Der Name des Servers einer Datenbank von Web Cloud Databases beginnt mit Ihrer OVHcloud Kundenkennung und hat folgende Form: `OVHID(ohne-ovh)-XXX.eu.clouddb.ovh.net` wobei **XXX** mit der Referenz Ihrer Datenbank zu ersetzen ist.
>>
>> - *Name der Datenbank*: Dieser Name wurde bei der Erstellung der Datenbank im [OVHcloud Kundencenter](/links/manager) festgelegt.
>>
>> - *Port*: Geben Sie die Nummer **3306** (Standard-Port) für eine Webhosting-Datenbank ein. Für Datenbanken auf einer Web Cloud Databases Instanz folgen Sie unserer Anleitung "[Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> - *Benutzername*: Er ist identisch für Datenbanken, die in einem Webhosting inklusive sind. Für Datenbanken, die mit Web Cloud Databases erstellt wurden, folgen Sie unserer Anleitung "[Erste Schritte mit Web Cloud Databases](/pages/web_cloud/web_cloud_databases/starting_with_clouddb)".
>>
>> - *Passwort*: Das Passwort wurde Ihnen bei der Erstellung der Datenbank per E-Mail gesendet. Möglicherweise haben Sie es inzwischen geändert.
>>
>> Wenn Sie alle Informationen eingegeben haben, klicken Sie auf den Button `Weiter`{.action}.
>>
> **Schritt 7**
>>
>> Geben Sie die folgenden Informationen ein, um das Modul zu konfigurieren:
>>
>> - *Name oder E-Mail-Adresse des Administrators:* Kennung, die Sie verwenden, um sich mit der Verwaltungsoberfläche Ihres CMS zu verbinden (Backend).
>> - *Passwort:* Passwort, das Sie verwenden, um sich mit der Verwaltungsoberfläche Ihres CMS zu verbinden.
>> - *Domain:* Domainname, mit dem Sie Ihr CMS installieren möchten. Lesen Sie unsere Anleitung „[Wie verbinde ich einen Domainnamen mit einer bestehenden Website?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)" um mehr zu erfahren.
>> - *Sprache:* Sprache, in der das CMS installiert wird.
>> - *Installationspfad:* Wird bei der Auswahl des Domainnamens automatisch ausgewählt. Ergänzen Sie ihn mit Unterverzeichnissen, falls gewünscht (für fortgeschrittene Benutzer).
>>
>> > [!primary]
>> >
>> > Überprüfen Sie für das Formular `Installationspfad`, dass das Verzeichnis, in dem Sie Ihr 1-Klick-Modul unter Ihrem Domainnamen installieren möchten, korrekt ausgefüllt ist.
>> >
>> > Zur Erinnerung: Dieses Verzeichnis muss vollständig leer sein.
>> >
>> > Wenn Sie zusätzlich ein Unterverzeichnis im `Installationspfad` eingeben, erscheint es in der URL unter der Ihr 1-Klick-Modul abrufbar sein wird.
>> > Wird also beispielsweise ein Verzeichnis namens *test* in das Formular eingetragen, erhält die URL für das 1-Klick-Modul die Form **http://domain.tld/test/**.
>> >
>> > Wenn nötig, lesen Sie unsere Anleitung „[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)", um das Zielverzeichnis Ihres Domainnamens zu ändern.
>>
>> Wenn Sie alle Informationen eingegeben haben, klicken Sie auf `Weiter`{.action}.
>>
>> > [!warning]
>> >
>> > Das Verzeichnis am Ende des Installationspfads muss leer sein, damit die Installation ausgeführt werden kann.
>>
>> ![Modulkonfiguration für die erweiterte Installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-2.png){.thumbnail}
>>
> **Schritt 8**
>>
>> Überprüfen Sie die eingegebenen Informationen und klicken Sie dann auf `Bestätigen`{.action}:
>>
>> ![Bestätigung der Installation im Experten-Modus](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/1-click-modules/add-a-module-advanced-mod-step-4.png){.thumbnail}
>>
<!-- CP-STEPS-END:install-advanced-module -->

///

### 3 - Ihre Website personalisieren

Die Installation kann etwa zehn Minuten dauern.

Nach Abschluss erhalten Sie eine E-Mail zur Bestätigung der Installation des CMS. Sie erhalten darin auch die Login-Daten, um sich mit dem Verwaltungsinterface Ihres CMS zu verbinden. Anschließend können Sie das Aussehen Ihrer Website ändern und Ihre ersten Inhalte veröffentlichen.

> [!warning]
>
> Der OVHcloud Support bietet keine Unterstützung bei der Verwendung von CMS. Die automatische Installation über die Module ist eine unverbindliche Komfort-Option.

Wenn Sie Hilfe zu den Funktionen Ihrer Website benötigen, gehen Sie auf die offizielle Website des CMS-Anbieters. Dort finden Sie zusätzliche Dokumentation und Hilfen, um Sie bei Ihrem Projekt zu unterstützen.

|CMS|Dokumentation|
|---|---|
|WordPress|[First steps with WordPress](https://wordpress.org/support/article/first-steps-with-wordpress/)|
|PrestaShop|[Getting started with PrestaShop](https://docs.prestashop-project.org/1.7-documentation/getting-started+Started)|
|Joomla!|[Getting started with Joomla!](https://www.joomla.org/about-joomla/getting-started.html)|
|Drupal|[Understanding Drupal](https://www.drupal.org/docs/7/understanding-drupal/overview)|

## Weiterführende Informationen

[Das passende CMS für Ihre Website finden](/links/web/hosting-cms-comparison)

[Mehrere Websites auf einem Webhosting einrichten](/pages/web_cloud/web_hosting/multisites_configure_multisite)

[Verwaltung einer Datenbank in Ihrem Webhosting](/pages/web_cloud/web_hosting/sql_create_database)

[Alles zu unseren Web Cloud Databases](/links/web/databases)

[CMS verwalten](/pages/web_cloud/web_hosting/cms_manage_1_click_module)

[CMS deinstallieren](/pages/web_cloud/web_hosting/cms_manage_1_click_module#schritt-3-ihr-modul-loschen)

Wenn Sie die volle Kontrolle über die Installation Ihres CMS behalten möchten, können Sie [ein CMS manuell auf Ihrem OVHcloud Webhosting installieren](/pages/web_cloud/web_hosting/cms_manual_installation).

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
