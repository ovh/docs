---
title: "Was tun, wenn die Meldung „Your request has been blocked“ angezeigt wird?"
excerpt: "Erfahren Sie, wie Sie vorgehen, wenn Ihre Website die Seite „Your request has been blocked“ anzeigt"
updated: 2025-07-16
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Die Shared Hosting Infrastruktur, auf der sich die OVHcloud Webhostings befinden, verfügt über mehrere Sicherheitssysteme.  
Wenn Ihre Website die Seite „Your request has been blocked“ anzeigt, bedeutet dies, dass eine der Anfragen, die von Ihrer Website ausgeführt wird, von unseren Sicherheitssystemen blockiert wurde.

![your-request-has-been-blocked](/pages/assets/screens/other/browsers/errors/your-request-has-been-blocked.png){.thumbnail}

**Diese Anleitung erklärt, wie Sie vorgehen, wenn Ihre Website eine „Your request has been blocked“ Seite anzeigt.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting).
- Sie verfügen über die [Login-Daten](/pages/web_cloud/web_hosting/ftp_connection) für den FTP-Speicherplatz Ihres Hostings.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

Die Seite „Your request has been blocked“ kann aus verschiedenen Gründen angezeigt werden (nicht abschließende Liste):

- Die Anfrage wird über einen nicht aktualisierten Internetbrowser (Firefox, Chrome, Safari, Edge etc.) durchgeführt.
- Eine sehr große Zahl von Anfragen wird innerhalb einer äußerst kurzen Frist ausgeführt.
- Die Anfrage versucht, nicht autorisierte Aktionen auf der Shared Hosting Infrastruktur durchzuführen, auf der sich Ihr Webhosting befindet.

### 1 - Stellen Sie sicher, dass Ihr Internetbrowser auf dem neuesten Stand ist

Gehen Sie in die Einstellungen Ihres Internetbrowsers und überprüfen Sie, ob ein Update verfügbar ist.

/// details | Klicken Sie hier, um weitere Informationen zum Aktualisieren Ihres Internetbrowsers zu erhalten

Nachfolgend finden Sie die Verfahren zur Aktualisierung der gängigsten Internetbrowser (von den Herausgebern bereitgestellte Dokumentation):

- [Firefox](https://support.mozilla.org/de/kb/firefox-auf-die-letzte-version-aktualisieren)
- [Chrome](https://support.google.com/chrome/answer/95414?hl=de&co=GENIE.Platform%3DDesktop&oco=0)
- [Safari](https://support.apple.com/de-de/102665)
- [Edge](https://support.microsoft.com/de-de/topic/microsoft-edge-updateeinstellungen-af8aaca2-1b69-4870-94fe-18822dbb7ef1)

Wenn Ihr Internetbrowser nicht in der oben stehenden Liste aufgeführt ist, lesen Sie die zugehörige Onlinedokumentation, oder wenden Sie sich an den Support des Herausgebers.

///

Versuchen Sie erneut, auf Ihre Website zuzugreifen, sobald Ihr Internetbrowser auf dem neuesten Stand ist. Wenn die Situation weiterhin besteht, lesen Sie diese Anleitung weiter.

### 2 - Rufen Sie die Informationen auf der Seite „Your request has been blocked“ ab und kontaktieren Sie den Support

Das Sicherheitssystem, das Ihre Anfragen blockiert, befindet sich im Vorfeld Ihres Webhostings. Daher haben Sie über Ihr OVHcloud Kundencenter keinen Zugriff auf die Logs dieses Sicherheitssystems.

#### 2.1 - Informationen auf der Seite „Your request has been blocked“ 

Identifizieren Sie zunächst die folgenden Informationen, die auf der Seite „Your request has been blocked“ angezeigt werden:

- `IP address` (Beispiel: 203.0.113.0)
- `Date` (Beispiel: 2025-07-01T16:30:45:150Z)
- `Request ID` (Beispiel: AbCdEf-your-request-ID-GhIjKlM)

#### 2.2 - Support kontaktieren

Sobald diese Daten erfasst wurden, erstellen Sie ein [Support-Ticket](https://help.ovhcloud.com/csm?id=csm_get_help) im OVHcloud Help Center. Geben Sie dabei Folgendes an:

- Die auf der Seite angezeigte Meldung („Your request has been blocked“)
- Die drei zuvor abgerufenen Elemente (`IP address`, `Date` und `Request ID`)
- Die URL, unter der die Seite angezeigt wird (Beispiel: `https://www.domain.tld/index.php`)
- Der verwendete Browser

Der Support wird Sie schnellstmöglich kontaktieren und Ihnen den Grund für die Sperrung mitteilen.

## Weiterführende Informationen

[Anwendungsbeispiele - Ihre Website ist von einem Hack betroffen](/pages/web_cloud/web_hosting/cms_what_to_do_if_your_site_is_hacked)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
