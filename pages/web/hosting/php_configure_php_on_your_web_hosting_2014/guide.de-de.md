---
title: "PHP-Version eines Webhostings ändern"
slug: konfiguration_von_php_fur_ein_ovh_webhosting_2014
excerpt: "So ändern Sie die PHP-Version Ihres OVH Webhostings"
section: 'PHP'
order: 01
---

**Stand 19.09.2022**

## Einleitung

Im Internet gibt es viele verschiedene Websites. Mit Ihrem [OVHcloud Webhosting](https://www.ovh.com/de/hosting/){.external} können Sie die gewünschte Website hosten, solange diese mit der [Konfiguration unserer Infrastrukturen](https://webhosting-infos.hosting.ovh.net){.external} kompatibel ist. Daher kann es sein, dass Sie die von Ihrem Webhosting verwendete PHP-Version ändern möchten.

**In dieser Anleitung erfahren Sie, wie Sie die PHP-Version Ihres OVH Webhostings ändern.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external}, mit Ausnahme eines Cloud Web Hostings.
- Sie haben Zugriff auf Ihr Webhosting-Angebot über das [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder die Informationen, die Sie benötigen, um sich mit dem [FTP Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) zu verbinden.

## Beschreibung

Es existieren zurzeit verschiedene Versionen der Programmiersprache PHP. Wie gewöhnlich bringen weiterentwickelte Versionen verschiedene Korrekturen sowie neu hinzugefügte oder entfernte Features. OVH stellt Ihnen die neuesten PHP-Hauptversionen zur Verfügung; die zugehörige Liste finden Sie hier: <>. 

Es gibt mehrere Versionen der PHP Programmiersprache. Die Evolutionen der Versionen bringen verschiedene Korrekturen sowie das Hinzufügen oder Anhalten von Funktionen. OVHcloud bietet die neuesten großen PHP-Versionen, die Sie in der Liste finden können [hier](https://www.ovhcloud.com/de/web-hosting/uc-programming-language/). 

> [!primary]
>
> Da manche Features von neueren Versionen nicht mehr unterstützt werden, **stellen Sie unbedingt vor jeder Änderung sicher, dass die neue PHP-Version mit Ihrer Website kompatibel ist.**
>

### Schritt 1: Sicherstellen, dass Ihre Website kompatibel ist

Auch wenn OVHcloud für die Installation der neuesten PHP-Versionen auf seinen Servern verantwortlich ist, liegt es in Ihrer Verantwortung als Webmaster, sicherzustellen, dass Ihre Website **immer auf dem neuesten Stand** und mit den neuesten PHP-Versionen kompatibel ist. Um dies zu überprüfen, gibt es entsprechend der von Ihnen verwendeten Website zwei Möglichkeiten:

**Fall Nr. 1: Sie verwenden eine "schlüsselfertige" Website wie ein Content Management System (CMS)** wie WordPress, Joomla!, PrestaShop oder Drupal: 

- Lesen Sie die offizielle Dokumentation des Herausgebers des von Ihnen verwendeten CMS.
- Beachten Sie die Informationen zu den technischen Voraussetzungen für das Funktionieren Ihres CMS sowie zu dessen Aktualisierung.
- Wenn nötig, aktualisieren Sie Ihr CMS und stellen Sie sicher, dass die neue Version mit dem OVHcloud Hosting kompatibel ist.

**Fall Nr. 2: Sie verwenden eine Website, die auf einer personalisierten Lösung basiert**: 

- Gehen Sie näher zum Webmaster, der die Website erstellt hat.
- Lesen Sie die [offizielle PHP Dokumentation](http://php.net/manual/en/appendices.php){.external} mit weiteren Informationen zur Versionsmigration.
- Falls nötig aktualisieren Sie den Code Ihrer Website und stellen sicher, dass dieser mit dem OVHcloud Hosting kompatibel bleibt.

Wenn nötig können Sie die aktuell von Ihrem Hosting verwendete PHP-Version auf zwei Arten einsehen:

- **über das OVHcloud Kundencenter**: Loggen Sie sich in [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, gehen Sie in den entsprechenden `Bereich Web Cloud`{.action}, klicken Sie auf `Webhosting`{.action} und wählen Sie das betreffende Webhosting aus. Im Tab `Allgemeine Informationen`{.action} finden Sie die Version unter *Globale PHP-Version*. 

![phpversion](images/change-php-version-step1.png) {.thumbnail}

> [!primary]
> Ist ein blaues rundes Symbol vorhanden, warten Sie einige Minuten, bis die Version aktualisiert wird.
>

- **über ein Skript** Erstellen Sie ein Skript **.php**, das ausschließlich den Code `<?php phpinfo(); ?>` enthält. Stellen Sie es dann auf Ihren [FTP Storage](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) online und rufen Sie es unter der Adresse/vollständigen URL an.|

Wenn Sie die Kompatibilität Ihrer Website mit der neuen PHP-Version nicht überprüfen können und **Auch wenn wir von dieser Methode ausdrücklich abraten**, können Sie versuchen, die aktuelle Version zu ändern und die Version zurückzudrehen. Dabei riskieren Sie jedoch eine mögliche Fehlfunktion auf Ihrer Website. Selbst wenn die Änderung immer nach der Änderung angezeigt wird, kann es sein, dass eine ihrer spezifischen Funktionen davon betroffen ist und nicht mehr funktioniert. 

Wenn Sie bereit sind, die Änderung vorzunehmen, gehen Sie zu Schritt 2 über.

## Schritt 2: PHP-Version Ihres Webhostings ändern

Es gibt zwei Möglichkeiten, die PHP-Version Ihres Webhostings zu ändern:

- **über einen Konfigurationsassistenten in Ihrem Kundencenter**: Wenn Sie in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eingeloggt sind, können Sie die gewünschte neue PHP-Version aus anderen Einstellungen auswählen. Lesen Sie hierzu die Anleitung ["Konfiguration Ihres Webhostings bearbeiten"](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/){.external}.

- **Indem Sie manuell eine Datei auf Ihrem Speicherplatz ändern**: Diese Lösung ist technisch anspruchsvoller und setzt voraus, dass Sie mit Ihrem [FTP-Speicherplatz](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) verbunden sind, in dem Sie die Datei `.ovhconfig` bearbeiten müssen. Lesen Sie hierzu die Anleitung in der Anleitung [".ovhconfig-Datei Ihres Webhostings konfigurieren"](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}.

> [!primary]
>
> Die Änderung der PHP-Version über eine ".htaccess" Datei ist bei den letzten [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} nicht mehr möglich.<br>
> Der Befehl, die PHP-Version in der Datei ".htaccess"zu ändern, erlaubt nicht die Verwendung der aktuellen PHP Versionen auf unseren Infrastrukturen.<br>
> Verwenden Sie hierzu zwingend die Kfz-Zulassungsdatei `.ovhconfig` und verwenden Sie hierfür die zugehörige Dokumentation [".ovhconfig-Datei Ihres Webhostings konfigurieren"](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}.
>

Einige PHP Versionen funktionieren nur mit bestimmten Ausführungsumgebungen. Im Folgenden finden Sie die auf den Shared Hosting Paketen von OVHcloud verfügbaren PHP-Versionen und [Ausführungsumgebungen](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/) kompatibel:

|PHP Versionen|Kompatible Ausführungsumgebungen|
|---|---|
|5.4, 5.5, 5.6 et 7.0|Legacy, Stable|
|7.1, 7.2 et 7.3|Stable|
|7.4, 8.0 et 8.1 (bêta)|stable64|

## Weiterführende Informationen

[Konfiguration Ihres Webhostings bearbeiten](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/){.external}

[.ovhconfig-Datei Ihres Webhostings konfigurieren](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}

[Mit dem Speicherplatz Ihres Webhostings verbinden](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
