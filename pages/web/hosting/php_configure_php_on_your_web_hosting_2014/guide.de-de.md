---
title: "PHP Version eines Webhostings ändern"
slug: konfiguration_von_php_fur_ein_ovh_webhosting_2014
excerpt: "Erfahren Sie hier, wie Sie die PHP-Version Ihres OVHcloud Webhostings ändern"
section: PHP
order: 01
--- 

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 19.09.2022**

## Ziel

Im Web gibt es viele verschiedene Arten an Webseiten. Mit Ihrem [OVHcloud Webhosting](https://www.ovh.com/de/hosting/){.external} können Sie Ihre gewünschte Website hosten, solange diese mit der [Konfiguration unserer Infrastrukturen](https://webhosting-infos.hosting.ovh.net){.external} kompatibel ist. In diesem Zusammenhang kann es sein, dass Sie die von Ihrem Webhosting verwendete PHP-Version ändern möchten.

**Diese Anleitung erklärt, wie Sie die PHP-Version Ihres OVHcloud Webhostings ändern.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external}, mit Ausnahme eines Cloud Web Hostings.
- Sie haben Zugriff auf Ihr Webhosting über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder die erforderlichen Login-Daten für den [FTP Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) Ihres Hostings.

## In der praktischen Anwendung

Es existieren immer verschiedene Versionen der Programmiersprache PHP simultan. Gewöhnlich bringen weiterentwickelte Versionen Korrekturen sowie neu hinzugefügte oder entfernte Features mit sich. OVHcloud stellt Ihnen die neuesten PHP-Hauptversionen zur Verfügung; die zugehörige Liste finden Sie [hier](https://www.ovhcloud.com/en-gb/web-hosting/uc-programming-language/).

> [!primary]
>
> Da manche Features von neueren Versionen nicht mehr unterstützt werden, **stellen Sie unbedingt vor jeder Änderung sicher, dass die neue PHP-Version mit Ihrer Website kompatibel ist.**
>

### Schritt 1: Sicherstellen, dass Ihre Website kompatibel ist

Auch wenn OVHcloud für die Installation der neuesten PHP-Versionen auf den Hosting-Servern verantwortlich ist, liegt es in Ihrer Zuständigkeit als Webmaster, sicherzustellen, dass Ihre Website **immer auf dem neuesten Stand** und mit den neuesten PHP-Versionen kompatibel ist. Um dies zu überprüfen, gibt es entsprechend der von Ihnen verwendeten Website zwei Möglichkeiten:

**Fall 1: Eine "schlüsselfertige" Website wie etwa ein Content Management System (CMS)** (WordPress, Joomla!, PrestaShop, Drupal, etc.): 

- Lesen Sie die offizielle Dokumentation des Herausgebers des von Ihnen verwendeten CMS.
- Beachten Sie die Informationen zu den technischen Voraussetzungen für das Funktionieren Ihres CMS sowie zu dessen Aktualisierung.
- Wenn nötig, aktualisieren Sie Ihr CMS und stellen Sie sicher, dass die neue Version mit dem OVHcloud Hosting kompatibel ist.

**Fall 2: Eine Website basierend auf einer personalisierten Lösung**: 

- Kontaktieren Sie den Webmaster, der die Website erstellt hat.
- Lesen Sie die [offizielle PHP Dokumentation](http://php.net/manual/en/appendices.php){.external} zu näheren Informationen zur Versionsmigration.
- Falls nötig, aktualisieren Sie den Code Ihrer Website und stellen sicher, dass dieser mit dem OVHcloud Hosting kompatibel bleibt.

Nötigenfalls können Sie die aktuell von Ihrem Hosting verwendete PHP-Version auf zwei Arten einsehen:

- **Im OVHcloud Kundencenter**: Loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein und gehen Sie in den Bereich `Web Cloud`{.action}. Klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Im Tab `Allgemeine Informationen`{.action} finden Sie die Version unter *Globale PHP-Version*. 

![phpversion](images/change-php-version-step1.png) {.thumbnail}

> [!primary]
> Wird ein rundes blaues Symbol angezeigt, warten Sie einige Minuten, bis die Version aktualisiert ist.
>

- **Über ein Skript** Erstellen Sie eine Datei mit Endung **.php**, welche ausschließlich die Codezeile `<?php phpinfo(); ?>` enthält. Laden Sie die Datei auf Ihren [FTP Storage](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) hoch und rufen Sie das Skript unter Verwendung der vollständigen URL zur Datei auf.

Wenn Sie die Kompatibilität Ihrer Website mit der neuen PHP-Version nicht überprüfen können und **Auch wenn wir von dieser Methode ausdrücklich abraten**, können Sie versuchen, die aktuelle Version zu ändern und die Version zurückzudrehen. Dabei riskieren Sie jedoch eine mögliche Fehlfunktion auf Ihrer Website. Selbst wenn die Änderung immer nach der Änderung angezeigt wird, kann es sein, dass eine ihrer spezifischen Funktionen davon betroffen ist und nicht mehr funktioniert. 

Wenn Sie nicht sichergehen können, dass Ihre Website mit der neuen PHP-Version kompatibel ist, können Sie versuchen, die aktuelle Version zu ändern, indem Sie sie downgraden. **Wir raten von dieser Methode ausdrücklich ab**, da Sie hierbei technische Probleme auf Ihrer Seite riskieren. Selbst wenn die Website nach der Änderung zu funktionieren scheint, kann eine ihrer spezifischen Funktionen davon beeinträchtigt sein und Fehler verursachen.

Wenn Sie bereit sind, die Änderung vorzunehmen, gehen Sie zu Schritt 2 über.

## Schritt 2: PHP-Version Ihres Webhostings ändern

Es gibt zwei Möglichkeiten, die PHP-Version Ihres Webhostings zu ändern:

- **Mit dem Konfigurationsassistenten in Ihrem Kundencenter**: Wenn Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eingeloggt sind, können Sie die gewünschte neue PHP-Version in den Einstellungen auswählen. Lesen Sie hierzu die Anleitung ["Konfiguration Ihres Webhostings bearbeiten"](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/){.external}.

- **Indem Sie manuell eine Datei auf Ihrem Speicherplatz ändern**: Diese Lösung ist technisch anspruchsvoller. Sie müssen sich dazu auf Ihrem [FTP-Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) einloggen und die Datei `.ovhconfig` bearbeiten, wie in unserer Anleitung [".ovhconfig-Datei Ihres Webhostings konfigurieren"](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external} beschrieben.

> [!primary]
>
> Die Änderung der PHP-Version über eine ".htaccess" Datei ist bei den neueren [OVHcloud Webhostings](https://www.ovhcloud.com/de/web-hosting/){.external} nicht mehr möglich.<br>
> Der Befehl, der die PHP-Version in der Datei ".htaccess" ändert, erlaubt nicht die Verwendung der aktuellen PHP Versionen auf unseren Infrastrukturen.<br>
> Es muss hierzu die Datei `.ovhconfig` editiert werden, wie in unserer Anleitung [".ovhconfig-Datei Ihres Webhostings konfigurieren"](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external} erklärt.
>

Einige PHP Versionen funktionieren nur mit bestimmten Ausführungsumgebungen. Im Folgenden finden Sie die auf den Webhostings von OVHcloud verfügbaren PHP-Versionen und kompatiblen [Ausführungsumgebungen](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/):

|PHP Versionen|Kompatible Ausführungsumgebungen|
|---|---|
|5.4, 5.5, 5.6 and 7.0|Legacy, Stable|
|7.1, 7.2 and 7.3|Stable|
|7.4, 8.0 and 8.1 (beta)|stable64|

## Weiterführende Informationen

[Konfiguration Ihres Webhostings bearbeiten](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/){.external}

[.ovhconfig-Datei Ihres Webhostings konfigurieren](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}

[Mit dem Speicherplatz Ihres Webhostings verbinden](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
