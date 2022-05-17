---
title: Was tun, wenn eine “Index of“-Seite angezeigt wird?
excerpt: Erfahren Sie hier, wie Sie Ihre Website wieder online bringen, wenn eine “Index of“-Seite angezeigt wird
slug: diagnose-index-of
section: Diagnose
order: 6
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 10.05.2022**

## Ziel

Wenn eine `Multisite`-Konfiguration nicht korrekt eingerichtet ist, kann Ihre Website eine Seite **“Index of“** anzeigen.

![index_of](images/index_of.png){.thumbnail}

**Hier erfahren Sie, wie Sie die Anzeige einer Seite “Index of“ korrigieren.**

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#gofurther).
>

## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/)
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

### Den Ursprung der Seite “Index of“ verstehen

Ihre Domain ist über den `Multisite`{.action}-Bereich Ihres Hostings mit einem Verzeichnis (einem “`Wurzelverzeichnis`“) auf Ihrem [FTP-Server](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) verbunden.

Die Seite **Index of** gibt an, dass das betreffende Verzeichnis keine Datei **index.php** oder **index.html** enthält. Eine solche Datei ist der “*Einstiegspunkt*“ Ihrer Website.

Um Ihre Website anzuzeigen, müssen Sie Ihre Domain über den `Multisite`{.action}-Bereich Ihres Hostings mit dem `Wurzelverzeichnis` verbinden, das diese **index.php** oder **index.html**-Datei enthält.

> [!primary]
>
> Wenn Sie Ihre Domain temporär mit einem `Wurzelverzeichnis` verbinden möchten, das keine **index.php** oder **index.html** Datei enthält, können Sie die Anzeige der Liste der Verzeichnisse Ihrer Website in dieser [Anleitung](https://docs.ovh.com/de/hosting/webhosting_welche_anderen_operationen_sind_mit_htaccess-dateien_moglich/#verzeichnis-browsing-verhindern) verbieten. Sie können auch den Zugang zu Ihren Ordnern durch ein [Passwort](https://docs.ovh.com/de/hosting/hosting-htaccess-authentifizierung/) schützen.
>
> Wir empfehlen Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, falls Sie Schwierigkeiten haben, diese Konfiguration einzurichten. Unsere Support-Teams sind nicht in der Lage, Ihnen bei jeder Änderung der internen Programmierung Ihrer Website zu helfen.

### Den häufigsten Fall einer Seite “Index of“ beheben

Sie haben die Dateien Ihrer Website **mydomain.ovh** per [FTP](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) Ihres Hostings in den `www` importiert. Mit Ausnahme der Domain ist Ihr Domainname in der Spalte `Wurzelverzeichnis` Ihrer `Multisite`{.action} nicht mit diesem Ordner verbunden.

![index_multisite](images/index_of_multisite.png){.thumbnail}

Ändern Sie den `Wurzelverzeichnis`, indem Sie rechts neben der Tabelle auf den Button `...`{.action} klicken und dann auf `Domain bearbeiten`{.action}:

![modify_domain](images/modify_domain.png){.thumbnail}

Im angezeigten Fenster:

* Setzen Sie hier ein Häkchen `Auch die Subdomain www.mydomain.ovh ändern`{.action} (1);
* Geben Sie das Verzeichnis mit der **index.php** oder **index.html**-Datei Ihrer Website als `Wurzelverzeichnis` (2) an;
* Klicken Sie auf `Weiter` (3).

![change_root_folder](images/change_root_folder01.png){.thumbnail}

> [!primary]
>
> Das `www`-Verzeichnis als `Wurzelverzeichnis` zu verwenden ist in keinem Fall erforderlich. Sie können Ihre Website in einem anderen Ordner Ihres [FTP Servers](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) installieren.
>

Klicken Sie im folgenden Fenster auf `Bestätigen`{.action}.s

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

In wenigen Minuten (denken Sie daran, Ihren Browser zu aktualisieren) erhalten Sie folgendes Ergebnis:

![multisite_modified](images/multisite_modified.png){.thumbnail}

Überprüfen Sie, ob Ihre Website korrekt angezeigt wird. Wenn dies nicht der Fall ist, starten Sie Ihr Gerät neu und leeren Sie den Cache Ihres Browsers, wenn nötig.

## Weiterführende Informationen <a name=“gofurther“></a>

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](https://docs.ovh.com/de/hosting/fehler-bei-1-klick-modulen/)

[Fehler “Seite nicht installiert” beheben](https://docs.ovh.com/de/hosting/webhosting_fehler_-_webseite_ist_nicht_installiert/)

[Mehrere Websites auf einem Webhosting einrichten](https://docs.ovh.com/de/hosting/multisites-mehrere-websites-konfigurieren/)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.