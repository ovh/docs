---
title: Composer auf einem Webhosting installieren
slug: installieren-zusammenstellen-auf-den-shared-hostings
legacy_guide_number: 1894
excerpt: Hier erfahren Sie, wie Sie Ihre ersten Schritte auf Composer installieren und durchführen.
section: PHP
---

**Stand 30.11.2020**

## Ziel

[Komponieren](https://getcomposer.org/){.external} ist ein für PHP erstellter Abhängigkeitsmanager. Es erlaubt PHP-Entwicklern, externe Bibliotheken in ihre Programme aufzunehmen. "Komponieren" hat es PHP-Projekten ermöglicht, die Verteilung von Bibliotheken und die Wartung ihres Codes zu vereinfachen. Seit der Einführung dieses Tools wurden in der PHP-Community zahlreiche bewährte Entwicklungspraktiken angeboten und die Bibliotheken in der PHP-Community verbessert. Diese bewährten Verfahren werden in Form von [PSR dokumentiert](http://www.php-fig.org/){.external}.

**Hier erfahren Sie, wie Sie Ihre ersten Schritte auf Composer installieren und durchführen.**

> [!warning]
>
> OVH stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
> 

## Voraussetzungen

- Sie verfügen [über ein Webhosting](https://www.ovh.de/hosting/){.external} mit SSH-Zugang.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} angemeldet.


## In der praktischen Anwendung

Überprüfen Sie, ob Sie eine kompatible PHP-Version über die Kommandozeile verwenden:


```bash
php --version
```

Ist das nicht die richtige Version, können Sie ein Alias konfigurieren:


```bash
alias php='/usr/local/php8.0/bin/php'
```

Wir empfehlen Ihnen, im Wurzelverzeichnis Ihres Webhostings zu bleiben, damit die Dateien von "Composer" nicht öffentlich zugänglich sind. Führen Sie folgende Bestellung durch:


```bash
curl -sS https://getcomposer.org/installer | php
```

Herzlichen Glückwunsch, "Composer" ist ab sofort für Ihr Shared Hosting verfügbar!


### Nutzungsbeispiele

Wenn Sie Symfony 2 einfach installieren möchten, können Sie zum Beispiel folgenden Befehl ausführen:


```bash
php composer.phar create-project symfony/framework-standard-edition my_project_name "2.7.*"
```

Ebenso können Sie die OVH API über Ihr Hosting mit dem offiziellen Wrapper verwenden. Fügen Sie hierzu einfach eine Datei namens composer.json hinzu, die die Liste der Abhängigkeiten enthält, die Sie benötigen. Hier ein Beispiel dieser Datei mit dem OVHcloud API Wrapper:


```json
1. {
2.     "name": "Beispiel Anwendung"
3.     "Beschreibung" "This is an example of OVH APIs wrapper use",
4.     "require": {
5.         "ovh/ovh": "1.1.*"
6.     }
7. }
```

Um sie zu installieren müssen Sie folgenden Befehl nur noch im gleichen Ordner starten:


```bash
php compos.phar install
```

Um diese Library zu verwenden, können Sie sich auf die Dokumentation und den Code unter [Github](https://github.com/ovh/php-ovh){.external}


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
