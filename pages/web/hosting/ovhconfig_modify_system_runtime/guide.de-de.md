---
title: Die Laufzeitumgebung meines Webhostings ändern
excerpt: Die Laufzeitumgebung meines Webhostings ändern
slug: die_laufzeitumgebung_meines_webhostings_andern
legacy_guide_number: g2149
---

## Wie ändere ich die Laufzeitumgebung meines Hostings?

## Über Ihr OVH Kundencenter
Begeben Sie sich auf die Seite des betreffenden Hostings und klicken Sie rechts neben "Globale PHP Version" auf "Die Konfiguration ändern".

![](images/4127.png){.thumbnail}

Im nächsten Schritt können Sie die Konfiguration anpassen.

![](images/4128.png){.thumbnail}

Wählen Sie aus der Liste der verfügbaren Ausführungsumgebungen die gewünschte aus.

![](images/4129.png){.thumbnail}

## Über die Datei .ovhconfig
Sie können die Änderung ebenfalls in der Datei .ovhconfig im Stammverzeichnis Ihres Hosting vornehmen.
Eine Anpassung der Laufzeitumgebung ist also entweder über Ihr Kundencenter oder direkt in der Datei .ovhconfig möglich.

## Die verschiedenen Ausführungsumgebungen

## "Legacy"
Dies ist die traditionelle Umgebung für Webhostings. Früher war es sogar die einzig verfügbare Konfiguration.

- Diese Umgebung wird immer noch unterstützt. Allerdings ist es ratsam, auf eine "stabile" Umgebung zu wechseln, um im Anschluss automatisch die neuesten stabilen Updates zu bekommen. Die Umgebung "Legacy" kann für alte Webseiten mit älteren PHP-Versionen oder veralteter Software nützlich sein (z. B. veraltete MySQL-Datenbanken).

Fügen Sie hierfür folgende Zeile in Ihrer Datei .ovhconfig* hinzu:

```
container.image=legacy
```

## "Stable"
Mit dieser Umgebung bekommen Sie immer automatisch die neuesten stabilen Updates.

Fügen Sie hierfür folgende Zeile in Ihrer Datei .ovhconfig* hinzu:

```
container.image=stable
```

## "Jessie.i386"
Mit dieser Umgebung nutzen Sie Debian Jessie.

- Derzeit wird diese Version angeboten, wenn Sie sich für die Umgebung "Stable" entscheiden.

Fügen Sie hierfür folgende Zeile in Ihrer Datei .ovhconfig* hinzu:

```
container.image=jessie.i386
```

Es ist nicht unbedingt ratsam, Jessie.i386 als Alternative zu Stable zu wählen; allerdings stellt dieses Vorgehen sicher, dass bei einer Änderung der Umgebung "Stable" Ihre Webseite weiterhin funktioniert: Eigene Skripte werden nach einer Änderung der Laufzeitumgebung möglicherweise nicht mehr funktionieren.

## "Testing"
Mit dieser Umgebung profitieren Sie schon vor dem offiziellen Release von Patches, neuen Images, neuen Technologien - aber immer ohne Gewähr!

Fügen Sie hierfür folgende Zeile in Ihrer Datei .ovhconfig* hinzu:

```
container.image=testing
```

* Hierbei handelt es sich um die Datei .ovhconfig im Wurzelverzeichnis Ihres Webhostings "/".

## Unterschiede zwischen den Umgebungen

|Umgebungen|Legacy|Stable|Testing|Jessie.i386|
|---|---|---|---|---|
|Umgebungen|Legacy|Stable|Testing|Jessie.i386|
|Verwendete Version|Legacy|Jessie.i386|Jessie.i386|Jessie.i386|
|PHP-Version mindestens|4.4|5.3|5.3|5.3|
|OpenSSL|0.9.8o|1.0.1k (TLS1.2 kompatibel)|1.0.1k (TLS1.2 kompatibel)|1.0.1k (TLS1.2 kompatibel)|
|Erweiterung php imagick||x|x|x|
|Erweiterung php memcache|x|x|x|x|
|Erweiterung php memcached||x|x|x|
|Erweiterung php mongo (PHP 5.4, 5.5, 5.6)||x|x|x|
|Erweiterung mysqlnd (nur bei utf-8)||x|x|x|
|Erweiterung redis||x|x|x|
|Opcache**|x|x|x|x|
|Python|2.6|2.7 et 3.4|2.7 et 3.4|2.7 et 3.4|
|Ruby|1.8.7|2.1.5|2.1.5|2.1.5|
|Rails|2.3.5|4.1.8|4.1.8|4.1.8|
|Perl|5.10|5.20|5.20|5.20|
|git|1.7.2.5|2.1.4|2.1.4|2.1.4|

** Hierfür is die Aktivierung von PHP-FPM notwendig: [https://docs.ovh.com/de/hosting/die_php-optimierung_beim_ovh_webhosting_aktivieren/](https://docs.ovh.com/de/hosting/die_php-optimierung_beim_ovh_webhosting_aktivieren/)

## Betrifft die Änderung der Laufzeitumgebung mein gesamtes Hosting?
In der Tat wirkt sich die Änderung der Laufzeitumgebung auf Ihr komplettes Hosting aus.
Es ist nicht möglich, zwei verschiedene Ausführungsumgebungen gleichzeitig zu verwenden.

## Bei welchen Angeboten kann ich die Laufzeitumgebung ändern?
Eine Änderung der Laufzeitumgebung ist bei allen OVH Webhosting-Angeboten möglich.

## Werden bei einer Änderung der Umgebung die PHP-Sessions beibehalten?
Bei einer Änderung der Laufzeitumgebung werden die PHP-Sessions automatisch zurückgesetzt.