---
title: "Webhosting: Laufzeitumgebung, PHP-Version, .ovhconfig"
excerpt: "Erfahren Sie hier, wie Sie die Einstellungen von Laufzeitumgebung, PHP-Version, Firewall, Engine, Modus und .ovhconfig ändern"
updated: 2024-07-16
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

[OVHcloud Webhostings](/links/web/hosting){.external} erlauben das Hosten von Websites aller Art, solange sie mit der [Konfiguration unserer Shared Hosting Infrastrukturen](https://webhosting-infos.hosting.ovh.net){.external} kompatibel sind.

Sie können jedoch die folgenden Einstellungen für Ihr Webhosting ändern:

- [Laufzeitumgebung](#runtime-environment)
- [PHP-Version](#php-versions)
- [PHP Laufzeitumgebung](#php-runtime)
- [Application Firewall](#firewall)
- [Runtime-Modus](#runtime-mod)

Diese Konfigurationseinstellungen können auf zwei Arten geändert werden:

- Im [OVHcloud Kundencenter](/links/manager)
- Im FTP-Speicherplatz Ihres OVHcloud Webhostings mithilfe einer Datei mit dem Namen “.ovhconfig“.

> [!primary]
>
> Die “.ovhconfig“-Dateien sind Serverkonfigurationsdateien und werden von der Hosting Infrastruktur automatisch gelesen.
> Sie sind nativ im FTP-Wurzelverzeichnis (*root*) des FTP-Speicherplatzes Ihres Webhostings vorhanden.
> Sie enthalten Werte für die oben genannten Elemente.
>

Änderungen der Konfiguration Ihres Webhostings sind über das [OVHcloud Kundencenter](/links/manager) oder direkt in der Datei “.ovhconfig“ möglich. Beide Wege haben denselben Effekt.

### Inhaltsübersicht

- [1 - Beschreibung der auf OVHcloud Webhostings verfügbaren Konfigurationseinstellungen](#all-parameters)
- [2 - Methode 1: Webhosting-Konfiguration über das OVHcloud Kundencenter ändern](#setting-ovh-manager)
- [3 - Methode 2: Webhosting-Konfiguration über die Datei “.ovhconfig“ ändern](#setting-ovhconfig)
- [4 - Fortgeschrittene Verwendung der “.ovhconfig“ Dateien](#ovhconfig-more)

**Diese Anleitung erklärt, wie Sie die Laufzeitumgebung, die PHP-Version, die Anwendungsfirewall, die Engine, den Modus und die Datei “.ovhconfig“ eines Webhostings ändern.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/X31MNMLw064" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting){.external}, mit Ausnahme von [Cloud Web Hosting](/links/web/hosting-cloud-web-offer).
- Sie haben über das [OVHcloud Kundencenter](/links/manager) oder [FTP-Login](/pages/web_cloud/web_hosting/ftp_connection) Zugriff auf Ihr Webhosting.

## In der praktischen Anwendung

### 1 - Beschreibung der auf OVHcloud Webhostings verfügbaren Konfigurationseinstellungen <a name="all-parameters"></a>

Sie finden hier vorab die technische Beschreibung der verfügbaren Einstellungen eines OVHcloud Webhostings.

> [!warning]
>
> Das Ändern von mindestens einem dieser Elemente kann sich auf die Anzeige oder das ordnungsgemäße Funktionieren Ihrer Website auswirken. **Stellen Sie im Vorfeld sicher, dass Ihre Website mit den Änderungen kompatibel ist, die Sie an der Konfiguration Ihres Webhostings vornehmen möchten**. Bei Zweifeln oder Schwierigkeiten wenden Sie sich an einen [spezialisierten Dienstleister](/links/partner).
>

#### 1.1 - Laufzeitumgebungen <a name="runtime-environment"></a>

Laufzeitumgebungen enthalten Programmiersprachen in verschiedenen Versionen. Der Zweck dieser Umgebungen ist, Ihre Webseiten-Dateien korrekt auszuführen zu können und das Hosting an Ihre technischen Anforderungen anzupassen.

OVHcloud Webhostings bieten **3** Laufzeitumgebungen: *Legacy*, *Stable* und *Stable64*.
Nachfolgend finden Sie die jeweils verfügbaren Elemente:

|Umgebung|Legacy|Stable|Stable64|
|---|---|---|---|
|Architektur|32 bits|32 bits|64 bits|
|Minimale PHP-Version|5.4|5.4|7.4|
|OpenSSL|1.0.1t|1.0.1t|1.1.1n|
|Python|2.7 und 3.4|2.7 und 3.7|2.7 und 3.7|
|Ruby|2.1|2.1|2.5|
|Rails|4.1|4.1|5.2|
|Perl|5.20|5.20|5.28|
|Git|2.1|2.1|2.20|

> [!primary]
>
> Die Umgebung *Legacy* kann für ältere Websites nützlich sein, die veraltete PHP-Versionen verwenden. Wir empfehlen Ihnen jedoch dringend, die Umgebung *Stable64* zu verwenden, die von den neuesten Updates profitiert. **Stellen Sie jedoch sicher, dass Ihre Website kompatibel ist, bevor Sie Änderungen vornehmen.**
> 

#### 1.2 - PHP-Versionen <a name="php-versions"></a>

PHP ist eine dynamische Programmiersprache, die zur Erstellung von Websites verwendet wird. Für Ihre Website kann es erforderlich sein, dass Sie abhängig von deren Alter, durchgeführten Updates oder bestimmten für das reibungslose Funktionieren der Website erforderlichen Variablen die verwendete PHP-Version ändern.

Verschiedene Versionen von PHP sind in Verwendung. Versionsaktualiserungen wenden Korrekturen an und fügen Features hinzu oder entfernen diese. OVHcloud bietet die neuesten PHP-Hauptversionen an, deren Liste Sie [hier](/links/web/hosting-programming-language) einsehen können.

Einige PHP-Versionen funktionieren nur in bestimmten Laufzeitumgebungen. Nachfolgend finden Sie die mit den OVHcloud Webhostings und den kompatiblen [Laufzeitumgebungen](#runtime-environment) verfügbaren PHP-Versionen:

|PHP-Versionen|Kompatible Laufzeitumgebungen|
|---|---|
|5.4, 5.5, 5.6 und 7.0|Legacy, Stable|
|7.1, 7.2 und 7.3|Stable|
|7.4, 8.0, 8.1 und 8.2|Stable64|

> [!primary]
>
> Da manche Funktionen von neueren Versionen nicht mehr unterstützt werden, **stellen Sie vor jeder Änderung sicher, dass die neue PHP-Version mit Ihrer Website kompatibel ist.**
>

Während OVHcloud die Installation der neuesten PHP-Versionen auf den Hosting-Servern verwaltet, obliegt es Ihnen, sicherzustellen, dass Ihre Website **immer auf dem neuesten Stand** und mit den neuesten PHP-Versionen kompatibel ist. Je nach Website, die Sie verwenden, gibt es zwei Möglichkeiten, dies zu überprüfen:

**Fall 1 - Sie verwenden ein Content Management System (CMS)** wie *WordPress*, *Joomla!*, *PrestaShop* oder *Drupal*:

- Lesen Sie die offizielle Dokumentation des Herausgebers Ihres CMS.
- Notieren Sie sich die Informationen zu den technischen Voraussetzungen für den Betrieb Ihres CMS sowie die Vorgehensweise, um es zu aktualisieren.
- Falls nötig, aktualisieren Sie Ihr CMS und stellen Sie sicher, dass die neue Version mit dem OVHcloud Webhosting kompatibel ist.

**Fall 2 - Sie verwenden eine Website, die auf einer personalisierten Lösung basiert**:

- Wenden Sie sich an den Webmaster, der die Website erstellt hat.
- Weitere Informationen zu Versionsmigrationen finden Sie in der [offiziellen PHP-Dokumentation](http://php.net/manual/en/appendices.php){.external}.
- Aktualisieren Sie bei Bedarf den Code Ihrer Website und stellen Sie sicher, dass diese weiterhin mit dem OVHcloud Webhosting kompatibel ist.

Falls nötig, gibt es zwei Möglichkeiten, die aktuell von Ihrem Webhosting verwendete PHP-Version zu ermitteln:

- **Im OVHcloud Kundencenter**: Verbinden Sie sich mit dem [OVHcloud Kundencenter](/links/manager){.external} und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Im Tab `Allgemeine Informationen`{.action} finden Sie die Version unter *Globale PHP-Version*. 

![phpversion](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/change-php-version-step1.png){.thumbnail}

> [!primary]
> Wenn ein blaues rundes Symbol zu sehen ist, warten Sie einige Minuten, bis die Version aktualisiert wurde.
>

- **Über ein Skript**: Erstellen Sie ein **.php** Skript, das nur den folgenden Code enthält:

```php
<?php phpinfo(); ?>
```

Stellen Sie es anschließend auf Ihrem [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) online, und rufen Sie es auf, indem Sie dessen vollständige Adresse/URL öffnen.

> [!warning]
>
> Die Änderung der PHP-Version über eine “.htaccess“-Datei ist bei den aktuellen [OVHcloud Webhosting Angeboten](/links/web/hosting) nicht mehr möglich.<br>
> Mit dem Befehl zur Änderung der PHP-Version in der Datei “.htaccess“ können auch keine aktuellen PHP-Versionen auf unseren Infrastrukturen verwendet werden.
> Die Datei “.ovhconfig“ muss verwendet werden.
>

#### 1.3 - PHP Runtime Engines <a name="php-runtime"></a>

PHP Runtime Engines sind Programme, mit denen Aktionen auf dem Webserver auf eine bestimmte Weise ausgeführt werden können. In der Regel wird diese Einstellung geändert, um die Ausführungsgeschwindigkeit der von den Besuchern Ihrer Website generierten Abfragen zu beeinflussen.

Auf OVHcloud Webhostings bieten wir **2** PHP Runtime Engines: *php* (PHP-FPM) und *phpcgi*.

Durch die Wahl der *php* Engine können Sie den PHP-Beschleuniger (PHP-FPM) aktivieren oder deaktivieren. Dieses wurde an unsere Infrastruktur angepasst, um die Ausführungsgeschwindigkeit der PHP Skripte zu beschleunigen. 

Die *phpcgi* Engine führt die Anfragen *seriell* aus, im Gegensatz zur *php* (PHP-FPM) Engine, die diese Anfragen *parallel* ausführt.

Im Vergleich dazu bietet der PHP-Beschleuniger (PHP-FPM) eine bis zu siebenmal höhere Leistung als die *phpcgi* Engine. 

#### 1.4 - Application Firewall <a name="firewall"></a>

Die Firewall filtert eingehende Anfragen Ihres Webhostings als SIicherheitsmaßnahme. Bei unseren Webhostings funktioniert ist diese Konfigurationseinstellung nur **aktivierbar** oder **deaktivierbar**. Die Firewall-Regeln können nicht geändert werden.

Weitere Informationen zu diesem Thema finden Sie in unserer Anleitung „[Application Firewall aktivieren](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)“.

> [!warning]
>
> Wenn Sie Zahlungsmodule verwenden, kann die Aktivierung der Firewall unter Umständen zu Störungen bei der Kommunikation zwischen dem Zahlungsmodul und Zahlungsdienstleistern führen. Deaktivieren Sie in diesem Fall die Option.
>

#### 1.5 - Ausführungsmodus <a name="runtime-mod"></a>

Mit dem Ändern des Ausführungsmodus können Sie das Cacheverhalten statischer Dateien (z.B. Bilder) Ihrer Website sowie die PHP-Fehlerbehandlung (nützlich, wenn Ihre Website eine leere Seite anzeigt) steuern.

Sie können **2** Modus aktivieren: *Produktion* und *Entwicklung*.

|Modus|Statischer Dateicache|PHP-Fehlerbehandlung|
|---|---|---|
|*Production*|Maximiert das Zwischenspeichern statischer Dateien in Webbrowsern.|PHP-Fehler werden auf Ihrer Website nicht angezeigt.|
|*Development*|Kein Cache angewendet.|PHP-Fehler werden auf Ihrer Website angezeigt.|

> [!primary]
>
> Bei PHP-Versionen 7.1 und höher werden die Fehler auf der Website angezeigt, unabhängig vom verwendeten Modus.
> 

Mit Kenntnis dieser bearbeitbaren Einstellungen für Ihr OVHcloud Webhosting können Sie nun entscheiden ob und welche Einstellungen zu ändern sind.

### 2 - Methode 1: Webhosting-Konfiguration über das OVHcloud Kundencenter ändern <a name="setting-ovh-manager"></a>

> [!warning]
>
> Änderungen dieser Elemente haben mögliche Auswirkungen auf die Darstellung oder das ordnungsgemäße Funktionieren Ihrer Website. **Stellen Sie im Vorfeld sicher, dass Ihre Website mit den Änderungen kompatibel ist, die Sie an der Konfiguration Ihres Webhostings vornehmen möchten.** Wenden Sie sich im Zweifelsfall oder bei Schwierigkeiten an einen [spezialisierten Anbieter](/links/partner).
>

#### 2.1 - Zugang zur Verwaltung der Webhosting-Konfiguration

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager){.external} und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus.
Im Tab `Allgemeine Informationen`{.action} klicken Sie bei `Globale PHP-Version`{.action} auf `...`{.action} und dann auf `Konfiguration ändern`{.action}.

![hostingConfiguration](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration.png){.thumbnail}

> [!PRIMARY]
>
> Wenn die Schaltfläche `Konfiguration ändern`{.action} ausgegraut ist, wird möglicherweise eine Überprüfung der **PHP-Version** durchgeführt. Ist das der Fall, erscheint neben der Version ein blaues Symbol, das dies anzeigt. Warten Sie einige Minuten, bis der Button `Konfiguration ändern`{.action} wieder verfügbar ist.
>
> Wenn die Option `Globale PHP-Version`{.action} in Ihrem [OVHcloud Kundencenter](/links/manager) nicht angezeigt wird, überprüfen Sie, ob die *.ovhconfig*-Datei im FTP-Wurzelverzeichnis Ihres Webhostings vorhanden ist.
>
> Alle Informationen zur Datei *.ovhconfig* finden Sie im dritten Teil „[Methode 2: Webhosting-Konfiguration über die Datei “.ovhconfig“](#setting-ovhconfig)“ dieser Anleitung.
>

#### 2.2 - Webhosting-Konfiguration ändern

Im Konfigurationsfenster haben Sie zwei Möglichkeiten. Wählen Sie die Aktion aus, die Sie durchführen möchten, und klicken Sie auf `Weiter`{.action}.

|Auswahl|Detail|
|---|---|
|`Zurück zur vorherigen Konfiguration`|Wählen Sie nach Auswahl dieser Option die wiederherzustellende Konfiguration neben `Historische Auswahl` aus. Diese Option steht möglicherweise nicht zur Verfügung, wenn Sie in der Vergangenheit keine Änderungen vorgenommen haben.|
|`Aktuelle Konfiguration ändern`|Wählen Sie nach Auswahl dieser Option die gewünschten Konfigurationsänderungen in den Feldern aus. Bei Bedarf lesen Sie im ersten Teil „[Beschreibung der auf den OVHcloud Webhostings verfügbaren Konfigurationseinstellungen](#all-parameters)“ dieser Anleitung nach.|

> [!primary]
>
> Durch das Ändern der Laufzeitumgebung Ihres Webhostings werden *PHP Sessions* automatisch zurückgesetzt.
> 

Wenn Sie bereit sind, klicken Sie auf `Bestätigen`{.action}, um die Änderung zu übernehmen. Warten Sie einen Moment, bis die Operation abgeschlossen ist.

![hostingConfiguration](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/modify-hosting-configuration-step-1-and-2.png){.thumbnail}

### 3 - Methode 2: Webhosting-Konfiguration in der Datei “.ovhconfig“ ändern <a name="setting-ovhconfig"></a>

#### 3.1 - Verbindung mit dem FTP-Speicherplatz Ihres Webhostings

Sie benötigen den primären FTP-Benutzer, das zugehörige Passwort sowie die Adresse des FTP-Servers.

Loggen Sie sich hierzu in Ihrem [OVHcloud Kundencenter](/links/manager){.external} ein und gehen Sie dann in den Bereich `Web Cloud`{.action}. Klicken Sie in der linken Spalte auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Gehen Sie dann auf den Tab `FTP - SSH`{.action}. Dort finden Sie die notwendigen Informationen, um sich einzuloggen. 

Bezüglich des Passworts des FTP-Benutzers folgen Sie bei Bedarf den Anweisungen in unserer Dokumentation [„Passwort eines FTP-Benutzers ändern“](/pages/web_cloud/web_hosting/ftp_change_password).

![ovhconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-perso.png){.thumbnail}

#### 3.2 - Datei “.ovhconfig“ abrufen oder erstellen

Wenn Sie sich in Ihrem [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) eingeloggt haben, sehen Sie alle Dateien, die derzeit auf diesem gespeichert sind. Bleiben Sie auf dem Wurzelverzeichnis Ihres Hostings (das mit „/“ angegeben werden kann). Dort finden Sie die Datei “.ovhconfig“.

![ovhconfig](/pages/assets/screens/other/web-tools/net2ftp/ovhconfig-file.png){.thumbnail}

Es gibt daher zwei Möglichkeiten:

- **Die Datei “.ovhconfig“ ist vorhanden**: Laden Sie sie auf Ihr lokales Gerät herunter. Erstellen Sie eine Kopie, bevor Sie Änderungen vornehmen. Bei Bedarf können Sie die Originaldatei wiederherstellen.
- **Die Datei “.ovhconfig“ ist nicht vorhanden**: Erstellen Sie eine neue lokale Datei mit dem Dateinamen “.ovhconfig“.

#### 3.3 - Den Inhalt der Datei “.ovhconfig“ <a name="update-ovhconfig"></a> ändern

Bearbeiten Sie Ihre Datei “.ovhconfig“ mit einem gewöhnlichen Texteditor. Der Inhalt “.ovhconfig“-Datei muss dem Codeformat des folgenden Beispiels entsprechen:

```php
app.engine=php
app.engine.version=8.0

http.firewall=none
environment=production

container.image=stable64
```

> [!success]
>
> Wenn Sie eine neue “.ovhconfig“ erstellt haben, kopieren Sie einfach den oben stehenden Code in Ihre Datei und folgen Sie dieser Anleitung weiter.
>

Passen Sie die Werte der Variablen entsprechend der Konfiguration an, die Sie mit Ihrem Webhosting verwenden möchten.

|Variablen|Detail|
|---|---|
|app.engine|Ermöglicht das Ändern der [PHP-Engine](#php-runtime), die vom Hosting verwendet wird. Geben Sie **php** ein, um den PHP-FPM Booster zu aktivieren, und **phpcgi**, um ihn zu deaktivieren.|
|app.engine.version|Definiert die vom Hosting verwendete [PHP-Version](#php-versions) unter [den von OVHcloud angebotenen Versionen](/links/web/hosting-programming-language){.external}. Geben Sie die gewünschte Version ein (die der ausgewählten Laufzeitumgebung entspricht).|
|http.firewall|Hier können Sie die [OVHcloud Webhosting Firewall](/links/web/hosting-options){.external} aktivieren oder deaktivieren. Geben Sie **security** zum Aktivieren oder **none** zum Deaktivieren ein.|
|environment|Ermöglicht die Verwaltung des Cacheverhaltens der statischen Dateien Ihrer Website sowie der PHP-Fehlerbehandlung. Dies entspricht dem [Runtime-Modus](#runtime-mod). Geben Sie **production** ein, um das Caching zu maximieren und PHP-Fehler zu verbergen. Mit **development** wird kein Cache angewendet und PHP-Fehler werden angezeigt.|
|container.image|Ermöglicht das Ändern der [Laufzeitumgebung](#runtime-environment), die vom Hosting verwendet wird. Geben Sie die gewünschte Laufzeitumgebung ein (**legacy**,**stable** oder **stable64**). Wenn Sie die Laufzeitumgebung **stable64** wählen, überprüfen Sie, ob Ihre Website mit der 64-Bit-Architektur kompatibel ist.|

Bei Bedarf lesen Sie im ersten Teil „[Beschreibung der auf den OVHcloud Webhostings verfügbaren Konfigurationseinstellungen](#all-parameters)“ nach.

Nachfolgend finden Sie die detaillierte technische Beschreibung der Datei “.ovhconfig“:

```php
; ovhconfig
;
; this file must be placed in $HOME/.ovhconfig or in $DOCUMENT_ROOT/.ovhconfig

; __app.engine__
;
; values: php (php engine + opcache accelerator)
; notice: if php, a phpcgi engine will be activated as fallback (if previous engine crash)
;
;   php:
;       IMPORTANT: register_globals and magic_quotes_gpc are off for security
;       php optiones .htaccess (like php version) are ignored
;   phpcgi:
;       IMPORTANT this is a fallback to previous system
;       in this case __app.engine.version__ will be considerated as AUTO and php version will be old system
;       (meaning depending .htaccess or .phpX extension)
;
app.engine=php

; __app.engine.version__ specify version of your engine
;
; for php:
;   default: 8.0
; for phpcgi:
;   this options is ignored (= fallback in AUTO)
;
app.engine.version=8.0

; __http.firewall__ used to add application firewall  (filter http requests)
;
; values: none | security
; default: none
;
http.firewall=none

; __environment__
;
; values: production | development
;
;   production:
;       apache will maximise local cache
;       mod_expires will grow up TTL of js, css, pdf, images, video, audio
;       you can override it changing expiration explicitly in your .htaccess
;       feel free to look on our guide.
;   development:
;       no expiration is added, files are not locally in cache,
;       will speed up tests but decrease performances
;
; choosen environment will also be available in your variable ENVIRONMENT unix env
;
; default: production
;
environment=production

; __container.image__
;
; values: legacy | stable | stable64
;
container.image=stable64
```

#### 3.4 - Datei “.ovhconfig“ hochladen

Nachdem Sie die Datei “.ovhconfig“ bearbeitet haben, laden Sie sie auf Ihren [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) hoch. Verbinden Sie sich hierzu erneut mit Ihrem [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) und öffnen Sie dessen Wurzelverzeichnis (entspricht der Ebene `/`). Plazieren Sie die soeben bearbeitete “.ovhconfig“ an dieser Stelle in Ihrem [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection). Wenn die Datei bereits vorhanden ist, ersetzen Sie sie.

### 4 - Fortgeschrittene Verwendung der “.ovhconfig“ Dateien <a name="ovhconfig-more"></a>

Wenn Sie Ihr Webhosting für das Hosting mehrerer Websites verwenden (*Multisites*), kann es mehrere Gründe geben, warum Sie für einige Ihrer *Multisites* eine andere PHP-Version verwenden möchten.

Erstellen Sie eine “.ovhconfig“ Datei, die die gewünschte PHP-Version für die betreffenden *Multisites* enthält. Befolgen Sie die Schritte im Abschnitt „[3.3 - Inhalt der Datei “.ovhconfig“](#update-ovhconfig)“ in dieser Anleitung, falls erforderlich. Wenn Sie die Datei “.ovhconfig“ auf Ihren [FTP-Speicherplatz](/pages/web_cloud/web_hosting/ftp_connection) hochladen, tun Sie dies im Wurzelverzeichnis, in dem sich die Dateien der betroffenen *Multisites*-Website befinden. Das Wurzelverzeichnis Ihrer *Multisites* finden Sie in Ihrem [OVHcloud Kundencenter](/links/manager) Ihres Webhostings im Tab `Multisite`{.action}.

Lesen Sie bei Bedarf unsere Anleitung „[Multisites auf Ihrem Webhosting konfigurieren](/pages/web_cloud/web_hosting/multisites_configure_multisite)“.

> [!warning]
>
> **Es ist nicht möglich, eine zweite [Laufzeitumgebung](#runtime-environment), einen zweiten [Entwicklungsmodus](#runtime-mod) und/oder eine zweite [PHP-Engine](#php-runtime)** auf demselben Webhosting einzurichten. Es werden nur die Werte berücksichtigt, die in der Datei “.ovhconfig“ im Wurzelverzeichnis Ihres [FTP-Speicherplatzes](/pages/web_cloud/web_hosting/ftp_connection) angegeben sind.
>

![ovhconfig](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

## Weiterführende Informationen

[Mit dem Speicherplatz Ihres Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
