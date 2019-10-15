---
title: 'PHP-Version Ihres Webhostings ändern'
slug: konfiguration_von_php_fur_ein_ovh_webhosting_2014
excerpt: 'So ändern Sie die PHP-Version Ihres OVH Webhostings'
section: PHP
order: 1
---

**Stand 08.10.2018**

## Einleitung

Im Internet gibt es viele verschiedene Websites. Mit Ihrem [OVH Webhosting](https://www.ovh.com/de/hosting/){.external} können Sie Ihre eigene Seite ins Internet stellen, sofern diese mit der [Konfiguration unserer Infrastrukturen](https://cluster028.hosting.ovh.net/infos/){.external} kompatibel ist. Daher kann es sein, dass Sie die von Ihrem Webhosting verwendete PHP-Version ändern möchten.

**In dieser Anleitung erfahren Sie, wie Sie die PHP-Version Ihres OVH Webhostings ändern.**

## Voraussetzungen

- Sie verfügen über ein [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot (ausgenommen Cloud Web).
- Je nach der verwendeten Methode benötigen Sie Zugriff auf die Verwaltung des Webhosting Angebots über das [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager) oder die nötigen Login-Daten, um sich mit Ihrem Speicherplatz zu verbinden. 

## Beschreibung

Es existieren zurzeit verschiedene Versionen der Programmiersprache PHP. Wie gewöhnlich bringen weiterentwickelte Versionen verschiedene Korrekturen sowie neu hinzugefügte oder entfernte Features. OVH stellt Ihnen die neuesten PHP-Hauptversionen zur Verfügung; die zugehörige Liste finden Sie hier: <https://www.ovh.de/hosting/php.xml>. 

Da manche Features von neueren Versionen nicht mehr unterstützt werden, **stellen Sie unbedingt vor jeder Änderung sicher, dass die neue PHP-Version mit Ihrer Website kompatibel ist.**

### Schritt 1: Sicherstellen, dass Ihre Website kompatibel ist

Auch wenn OVH für die Installation der neuesten PHP-Versionen auf seinen Servern verantwortlich ist, liegt es in Ihrer Verantwortung als Webmaster, sicherzustellen, dass Ihre Website immer auf dem neuesten Stand und mit den neuesten PHP-Versionen kompatibel ist. Um dies zu überprüfen, gibt es entsprechend der von Ihnen verwendeten Website zwei Möglichkeiten.

**Ich verwende eine gebrauchsfertige Website, beispielsweise ein Content Management System (CMS)** wie WordPress oder Joomla!: 

- Halten Sie sich an die offizielle Dokumentation des Herausgebers Ihres CMS. 
- Suchen Sie dort die Informationen zu den technischen Voraussetzungen, die für das korrekte Funktionieren Ihres CMS notwendig sind, sowie zur Vorgehensweise, um das CMS zu aktualisieren.
- Falls nötig aktualisieren Sie Ihr CMS und achten Sie darauf, dass die neue Version mit dem OVH Webhosting kompatibel ist.

**Ich verwende eine Website, die auf einer angepassten Lösung basiert**: 

- Kontaktieren Sie den Webmaster, der die Website erstellt hat.
- Halten Sie sich an die offizielle PHP-Dokumentation. Dort finden Sie weitere Informationen zu den Migrationen auf andere PHP-Versionen: <http://php.net/manual/en/appendices.php>.
- Falls nötig aktualisieren Sie den Code Ihrer Website und achten Sie darauf, dass dieser mit dem OVH Webhosting kompatibel ist.

Außerdem können Sie die aktuell von Ihrem Webhosting verwendete PHP-Version auf zwei verschiedene Arten einsehen: 

|Methode|Beschreibung|
|---|---|
|Über das Kundencenter|Loggen Sie sich in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein, klicken Sie links im Menü auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Im Tab `Allgemeine Informationen`{.action} finden Sie die aktuelle Version unter „**Globale PHP Version**“. Erscheint ein blaues, rundes Symbol neben der Version, warten Sie einen Moment ab, bis die Versionsanzeige aktualisiert ist.|
|Über ein Skript|Erstellen Sie ein **.php**-Skript, das ausschließlich den Code `<?php phpinfo(); ?>` enthält. Stellen Sie das Skript auf Ihrem Speicherplatz online und rufen Sie es auf, indem Sie auf die vollständige URL zugreifen.|

![php version](images/change-php-version-step1.png){.thumbnail}

Sollten Sie nicht überprüfen können, ob Ihre Website mit der neuen PHP-Version kompatibel ist, können Sie, **auch wenn wir Ihnen nachdrücklich von dieser Methode abraten**, die aktuelle Version ändern und wenn nötig anschließend wieder zur ursprünglichen Version zurückkehren. Hierbei besteht jedoch das Risiko einer späteren Fehlfunktion Ihrer Website. Außerdem kann es vorkommen, dass ein bestimmtes Feature nach der Änderung nicht mehr korrekt funktioniert, auch wenn es weiterhin angezeigt wird. 

Wenn Sie bereit sind, um die Änderung vorzunehmen, gehen Sie zum nächsten Schritt über.

### Schritt 2: PHP-Version Ihres OVH Webhostings ändern

Sie haben zwei Möglichkeiten, um die PHP-Version Ihres Webhostings zu ändern:

- **über einen Konfigurationsassistenten in Ihrem Kundencenter**: Diese Option ist weniger technisch anspruchsvoll und setzt voraus, dass Sie in Ihrem OVH Kundencenter eingeloggt sind, um dort die gewünschten PHP-Version auszuwählen. Befolgen Sie hierzu die Anweisungen in der Anleitung [„Konfiguration Ihres Webhostings bearbeiten“](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/){.external}.

- **indem Sie manuell eine Datei auf Ihrem Speicherplatz bearbeiten**: Diese Option ist technisch anspruchsvoller und setzt voraus, dass Sie auf Ihrem Speicherplatz eingeloggt sind, um dort die Datei „.ovhconfig“ zu bearbeiten. Befolgen Sie hierzu die Anweisungen in der Anleitung [„.ovhconfig-Datei Ihres Webhostings konfigurieren“](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}.

Für Nutzer mit fortgeschrittenen technischen Kenntnissen ist es seit den neuesten [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angeboten nicht länger möglich, die PHP-Version über eine .htaccess-Datei zu ändern. Die PHP-Version über Einstellungen in der .htaccess-Datei zu beeinflussen, wird von unseren Infrastrukturen nicht mehr unterstützt. Es ist absolut notwendig, dass Sie hierzu die Datei „.ovhconfig“ verwenden. Die entsprechende Vorgehensweise können Sie in der Anleitung [„.ovhconfig-Datei Ihres Webhostings konfigurieren“](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external} nachlesen.

## Weiterführende Informationen

[Konfiguration Ihres Webhostings bearbeiten](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/){.external}

[.ovhconfig-Datei Ihres Webhostings konfigurieren](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.