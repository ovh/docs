---
title: '.ovhconfig-Datei Ihres Webhostings konfigurieren'
slug: ovhconfig-datei-konfigurieren
excerpt: 'In dieser Anleitung erfahren Sie, wozu die .ovhconfig-Datei verwendet wird und wie Sie diese bearbeiten.'
section: 'Webhosting-Konfiguration'
order: 03
---

**Stand 03.01.2019** 

## Einleitung

Es gibt mehrere Gründe, um die Konfiguration Ihres [Webhostings](https://www.ovhcloud.com/de/web-hosting/){.external} zu bearbeiten. Aus diesem Grund hat OVH eine Datei erstellt, über die bestimmte Einstellungen geändert werden können: **.ovhconfig**.

**Hier erfahren Sie, wozu die .ovhconfig-Datei verwendet wird und wie Sie diese bearbeiten.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot (ausgenommen Cloud Web).
- Sie haben das Passwort des FTP-Benutzers, um auf Ihren Speicherplatz zuzugreifen. 

## Beschreibung

Wenn Sie die .ovhconfig-Datei Ihres Webhostings ändern, ändern Sie auch dessen Konfiguration und somit die Konfiguration Ihrer Website. Wenn Sie eine falsche Änderung vornehmen, kann es daher sein, dass Ihre Website nicht mehr erreichbar ist. Achten Sie also darauf, dass die in der .ovhconfig-Datei angegebene Konfiguration mit Ihrer Website technisch kompatibel ist.

Sie können die .ovhconfig-Datei auf zwei Arten ändern:

- **indem Sie die .ovhconfig-Datei manuell bearbeiten**: Diese Option ist technisch anspruchsvoller und setzt voraus, dass Sie auf Ihrem Speicherplatz eingeloggt sind. In der vorliegenden Anleitung beschreiben wir ausschließlich diese Methode.

- **über einen Konfigurationsassistenten in Ihrem OVHcloud Kundencenter**: Diese Option ist weniger technisch anspruchsvoll und setzt voraus, dass Sie in Ihrem OVHcloud Kundencenter eingeloggt sind, um dort die gewünschten Änderungen auszuwählen. Befolgen Sie hierzu die Anleitung [„Konfiguration Ihres Webhostings bearbeiten“](../die_laufzeitumgebung_meines_webhostings_andern/){.external}

Folgen Sie den Schritten der vorliegenden Anleitung, wenn Sie die .ovhconfig-Datei manuell bearbeiten möchten. 

### Die .ovhconfig-Datei bearbeiten

#### Schritt 1: In den Speicherplatz einloggen

Halten Sie Ihren Haupt-FTP-Benutzer, das zugehörige Passwort sowie die FTP-Serveradresse bereit. Wenn Sie alle notwendigen Login-Daten haben, loggen Sie sich in Ihrem Speicherplatz ein. Weitere Informationen hierzu finden Sie in der Anleitung [„In den Speicherplatz einloggen“](https://docs.ovh.com/de/hosting/webhosting_meine_seite_online_stellen/#2-in-den-speicherplatz-einloggen){.external}.

**Wenn Sie nicht mehr im Besitz dieser Informationen sind**, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und klicken Sie auf `Hosting-Pakete`{.action}. Wählen Sie das gewünschte Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. Dort finden Sie die erforderlichen Informationen, um sich im Speicherplatz einzuloggen. Um das Passwort des FTP-Benutzers zu erhalten, folgen Sie wenn nötig den entsprechenden Schritten in der Anleitung [„Passwort eines FTP-Benutzers ändern“](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/){.external}.

![ovhconfig](images/ovhconfig-step1.png){.thumbnail}

#### Schritt 2: .ovhconfig-Datei abrufen oder erstellen

Wenn Sie sich in Ihrem Speicherplatz eingeloggt haben, können Sie alle aktuell auf ihm gespeicherten Dateien anzeigen. Bleiben Sie auf dem Wurzelverzeichnis Ihres Webhostings (das mit „ / „ angegeben werden kann). Dort finden Sie die .ovhconfig-Datei.

![ovhconfig](images/ovhconfig-step2.png){.thumbnail}

Nun gibt es zwei Möglichkeiten:

- **die .ovhconfig-Datei ist vorhanden**: Laden Sie die Datei auf Ihren eigenen Rechner. Wir empfehlen Ihnen, eine Kopie zu speichern, bevor Sie die Datei bearbeiten. So können Sie die .ovhconfig-Datei wenn nötig in ihren Originalzustand zurückversetzen.
- **die .ovhconfi-Datei ist nicht vorhanden**: Da die Datei nicht existiert, erstellen Sie eine eigene auf Ihrem Rechner und speichern Sie sie unter „.ovhconfig“.

#### Schritt 3: .ovhconfig-Datei bearbeiten

Nun, da Sie Ihre .ovhconfig-Datei haben, können Sie sie bearbeiten. Verwenden Sie hierzu ein Programm wie beispielsweise einen Texteditor. Ihre .ovhconfig-Datei enthält einen Code, der in etwa wie folgt aussieht:

```php
app.engine=php
app.engine.version=8.0

http.firewall=none
environment=production

container.image=stable64
```

Passen Sie die Werte der Variablen entsprechend der Konfiguration an, die Sie für Ihr Webhosting verwenden möchten. 

|Variable|Beschreibung|
|---|---|
|app.engine|Hier können Sie die von Ihrem Webhosting verwendete PHP-Engine ändern. Geben Sie „php“ ein, um den PHP-FPM-Beschleuniger zu verwenden, oder „phpcgi“, um diesen zu deaktivieren.|
|app.engine.version|Hier können Sie die vom Webhosting verwendete PHP-Version aus den [von OVH angebotenen Versionen](https://www.ovhcloud.com/de/web-hosting/uc-programming-language/){.external} auswählen. Geben Sie Ihre bevorzugte Version ein.|
|http.firewall|Hier können Sie die [mit den OVH Webhostings angebotene Firewall](https://www.ovh.com/de/hosting/mod_security.xml){.external} aktivieren oder deaktivieren. Geben Sie „security“ ein, um diese zu aktivieren, oder „none“, um sie zu deaktivieren.|
|environment|Hier können Sie festlegen, wie die statischen Dateien Ihrer Website gecacht werden sowie die PHP-Fehlerbehandlung einstellen. Geben Sie „production“ ein, um das Caching zu maximieren und PHP-Fehler zu verbergen, oder „development“, um das Caching abzustellen und PHP-Fehler anzuzeigen.|
|container.image|Hier können Sie die von Ihrem Webhosting verwendete Ausführungsumgebung ändern. Geben Sie die gewünschte Engine ein. Die möglichen Konfigurationen finden Sie in unserer Dokumentation: [„Verfügbare Konfigurationen“](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#verfugbare-konfigurationen_1){.external}|

> [!warning]
>
> Wenn Sie die Ausführungsumgebung "stable64"auswählen, überprüfen Sie, ob Ihre Website mit der 64 Bit Umgebung kompatibel ist.

Nachstehend finden Sie die vollständigen Anwendungsdetails der .ovhconfig-Datei.

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

#### Schritt 4: .ovhconfig-Datei auf Ihren Speicherplatz hochladen

Nachdem Sie die .ovhconfig-Datei bearbeitet haben, muss diese nur noch auf Ihren Speicherplatz hochgeladen werden. Bleiben Sie eingeloggt und auf dem Wurzelverzeichnis Ihres Webhostings (das mit „ / „ angegeben werden kann) und laden Sie die .ovhconfig-Datei hoch. Wenn bereits eine .ovhconfig-Datei existiert, ersetzen Sie diese.

### Fortgeschrittene Nutzung der .ovhconfig-Dateien

Sollten Sie über Ihr Webhosting mehrere Websites betreiben, haben Sie mit Sicherheit mehrere Multisites angelegt. Es kann aus verschiedenen Gründen nützlich sein, für einzelne Multisites eine andere PHP-Version zu verwenden.

Erstellen Sie hierzu für die jeweilige Multisite (oder Multisites) eine .ovhconfig-Datei mit der gewünschten PHP-Version. Befolgen Sie die entsprechenden Schritte im Abschnitt [„Die .ovhconfig-Datei bearbeiten“](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/#die-ovhconfig-datei-bearbeiten){.external} in der vorliegenden Anleitung. Wenn Sie die .ovhconfig-Datei auf Ihren Speicherplatz hochladen, stellen Sie sicher, dass Sie diese im Wurzelverzeichnis der entsprechenden Multisite hochladen. Sie finden das Wurzelverzeichnis Ihrer Multisites über Ihr Kundencenter in dem Tab `Multisite`{.action} des jeweiligen Webhostings.

> [!warning]
>
> Sie können keine zweite Ausführungsumgebung festlegen. Es wird nur die Umgebung verwendet, die in der .ovhconfig-Datei im Wurzelverzeichnis Ihres Speicherplatzes angegeben ist.
> 

![ovhconfig](images/ovhconfig-step3.png){.thumbnail}

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
