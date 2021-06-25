---
title: Was ist im Falle einer Seite des Index zu tun?
excerpt: Erfahren Sie, wie Sie Ihre Website online stellen, wenn sie eine Seite “Index of“ zeigt
slug: diagnose-index-of
section: Diagnose
---

**Letzte Aktualisierung am 25.06.2021**
 
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

- Sie verfügen über [ein Webhosting](https://www.ovh.de/hosting/)
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

### Den Ursprung der Seite “Index of“ verstehen

Ihre Domain ist über den `Multisite`-Bereich Ihres Hostings mit einem Verzeichnis (einem “`Wurzelverzeichnis`“) auf Ihrem [FTP-Server verbunden](../verbindung-ftp-speicher-webhosting/).

Die Seite **“Index of“** gibt an, dass das betreffende Verzeichnis keine Datei **index.php** oder **index.html** enthält. Eine solche Datei ist der “Einstiegspunkt“ Ihrer Website.

Um Ihre Website anzuzeigen, müssen Sie Ihre Domain über den `Multisite`-Bereich Ihres Hostings mit dem `Wurzelverzeichnis` verbinden, das diese **index.php** oder **index.html**-Datei enthält.

> [!primary]
>
> Wenn Sie Ihre Domain temporär mit einem `Wurzelverzeichnis` verbinden möchten, das keine **index.php** oder **index.html** Datei enthält, können Sie die Anzeige der Liste der Verzeichnisse Ihrer Website in dieser [Anleitung](../webhosting_welche_anderen_operationen_sind_mit_htaccess-dateien_moglich/#verzeichnis-browsing-verhindern) verbieten. Sie können auch den Zugang zu Ihren Ordnern durch ein [Passwort](../how_to_password_protect_a_directory_on_your_website/) schützen.
>
> Wir empfehlen Ihnen, einen spezialisierten [Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, falls Sie Schwierigkeiten haben, diese Konfiguration einzurichten. Unsere Support-Teams sind nicht in der Lage, Ihnen bei jeder Änderung der internen Programmierung Ihrer Website zu helfen.

### Den häufigsten Fall einer Seite “Index of“ beheben

Sie haben die Dateien Ihrer Website **mydomain.ovh** per [FTP](../verbindung-ftp-speicher-webhosting/) in den `www` Ihres Hostings importiert. Mit Ausnahme der Domain ist Ihr Domainname in der Spalte `Wurzelverzeichnis` Ihrer `Multisite` nicht mit diesem Ordner verbunden.

![index_of_multisite](images/index_of_multisite.png){.thumbnail}

Ändern Sie den `Wurzelverzeichnis`, indem Sie rechts neben der Tabelle auf den Button `...`{.action} dann auf `Domain bearbeiten`{.action} klicken:

![modify_domain](images/modify_domain.png){.thumbnail}

Setzen Sie einen Haken `Auch die Subdomain www.mydomain.ovh ändern` auch bearbeiten und geben Sie das Verzeichnis mit der **index.php** oder **index.html** Ihrer Website als `Wurzelverzeichnis` ein.

> [!primary]
>
> Das `www` Verzeichnis als `Wurzelverzeichnis` zu verwenden ist in keinem Fall erforderlich. Sie können Ihre Website in einem anderen Ordner Ihres [FTP Servers](verbindung-ftp-speicher-webhosting/) installieren.

Klicken Sie anschließend auf `Weiter`.

![change_root_folder](images/change_root_folder.png){.thumbnail}

Klicken Sie dann auf `Bestätigen`{.action}.

![modify_root_folder_confirm](images/modify_root_folder_confirm.png){.thumbnail}

Sie erhalten folgendes Ergebnis:

![multisite_modified](images/multisite_modified.png){.thumbnail}

## Weiterführende Informationen <a name="gofurther"></a>

[Die häufigsten Fehler bei 1-Klick-Modulen beheben](../fehler-bei-1-klick-modulen/)

[Fehler “Seite nicht installiert“ beheben](../webhosting_fehler_-_webseite_ist_nicht_installiert/)

[Mehrere Websites auf einem Webhosting einrichten](../multisites-mehrere-websites-konfigurieren/)

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, lesen Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
