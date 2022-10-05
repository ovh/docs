---
title: Composer auf einem Webhosting installieren
slug: composer-installieren-hosting
excerpt: Erfahren Sie hier, wie Composer installieren und erste Schritte ausführen
section: PHP
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 30.11.2020**

## Ziel

[Composer](https://getcomposer.org/){.external} ist ein für PHP erstellter Dependency Manager. PHP-Entwickler können externe Bibliotheken in ihre Programme einbinden. Composer vereinfacht die Verteilung von Bibliotheken und die Wartung des Codes von PHP-Projekten . Seit der Veröffentlichung dieses Tools wurden zahlreiche Best Practices für die Entwickliung vorgeschlagen und somit die Bibliotheken der PHP-Community verbessert. Diese bewährten Verfahren werden in der Form [SRP](http://www.php-fig.org/){.external} dokumentiert.

**Diese Anleitung erklärt, wie Sie Composer installieren und gibt ein Anwendungsbeispiel.**

> [!warning]
>In dieser Anleitung erläutern wir die Verwendung einer oder mehrerer OVHcloud Lösungen mit externen Tools. Die durchgeführten Aktionen werden in einem bestimmten Kontext beschrieben. Denken Sie daran, diese an Ihre Situation anzupassen.
>
Bei Schwierigkeiten kontaktieren Sie bitte einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) und/oder stellen Ihre Fragen in der OVHcloud Community unter https://community.ovh.com/. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. 
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/) mit SSH-Zugang in Ihrem Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).


## In der praktischen Anwendung

Verwenden Sie die Kommandozeile, um zu überprüfen, ob die PHP-Version kompatibel ist:

```bash
php --version
```

Wenn es sich nicht um eine korrekte Version handelt, können Sie einen Alias konfigurieren:


```bash
alias php='/usr/local/php8.0/bin/php'
```

Wir empfehlen Ihnen, im Wurzelverzeichnis Ihres Webhostings zu bleiben, um den öffentlichen Zugang zu Ihren Composer-Dateien zu verhindern. Führen Sie diesen Befehl zur Installation von Composer aus:


```bash
curl -sS https://getcomposer.org/installer | php
```

Composer ist damit auf Ihrem Webhosting verfügbar.


### Anwendungsbeispiel

Wenn Sie beispielsweise Symfony 2 auf einfache Weise installieren möchten, können Sie folgenden Befehl ausführen:


```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```

Ebenso können Sie die OVHcloud API über Ihr Webhosting mit dem offiziellen Wrapper verwenden. Legen Sie hierzu einfach eine Datei namens `composer.json` mit einer Dependency-Liste an. Hier ein Beispiel dieser Datei mit dem OVHcloud API Wrapper:

```json
1. {
2.     "name": "Example Application",
3.     "description": "This is an example of OVHcloud APIs wrapper usage",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Zur Installation verwenden Sie folgenden Befehl vom selben Ordner aus:


```bash
php compos.phar install
```

Um diese Library zu verwenden, können Sie die Dokumentation und den Code auf [GitHub](https://github.com/ovh/php-ovh){.external} zu Rate ziehen.


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
