---
title: "Häufige Fehler beim Schutz Ihrer Website mit SSL"
excerpt: "Erfahren Sie hier, wie Sie häufige Fehler beim Absichern Ihrer Website mit SSL vermeiden können"
updated: 2024-01-11
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>
 
## Ziel

In dieser Anleitung finden Sie einige Beispiele für mögliche Problemsituationen wenn Sie Ihre Website mit SSL absichern.

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Wenn Sie Schwierigkeiten haben, die Schritte in diesem Tutorial durchzuführen, empfehlen wir, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

**Diese Anleitung erklärt, wie Sie häufige Fehler bei der Sicherung Ihrer Website mit SSL vermeiden.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting){.external}.
- Sie haben mindestens einen [Domainnamen](/links/web/domains){.external} registriert.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager) im Bereich "Web Cloud".

## In der praktischen Anwendung

### Mixed Content (Gemischter Inhalt)

Ihre Website lädt keine externen Elemente wie Schaltflächen für *Facebook* und *X/Twitter*? Interaktionen auf Ihren Webseiten funktionieren nicht wie beim Zugriff auf Ihre Webseite per HTTP? Das liegt wahrscheinlich daran, dass die Website gemischte Inhalte enthält. 

Seit einiger Zeit verhindern Browser wie *Google Chrome*, *Mozilla Firefox* und *Microsoft Edge/Internet Explorer* das Laden von Seitenelementen, wenn sie über eine HTTP-URL aufgerufen werden können. Dadurch wird sichergestellt, dass die durch das HTTPS-Protokoll gewährte Sicherheit nicht durch ein als HTTP geladenes Element beeinträchtigt wird. 

In den meisten Fällen handelt es sich dabei um externe Skripte von anderen Websites wie Social Media. In diesem Fall genügt es, die URLs in HTTP durch die URLs in HTTPS in Ihren Skripten zu ersetzen, um diese Skripte laden zu können.

> [!primary]
>
> Einige Websites verwenden ein [Content Delivery Network (CDN)](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn), um beispielsweise *JavaScript*-Bibliotheken (wie *JQuery*) zu hosten. 
> Wenn das CDN die Bibliotheken mit einer HTTP-URL liefert, kann Ihre Website von **Mixed Content** betroffen sein. 
>

Wie kann ich feststellen, ob meine Seite betroffen ist?

Die von *Mozilla Firefox* und *Google Chrome* bereitgestellten Tools können anzeigen, ob Ihre Website Elemente enthält, die aufgrund von gemischten Inhalten blockiert wurden. Die im [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external} verfügbare Dokumentation erläutert die Verwendung dieser Tools zur Erkennung gemischter Inhalte.

### Duplicate Content (Duplizierter Inhalt)

Duplicate Content bedeutet, dass der gleiche Inhalt über verschiedene URLs vorhanden ist. Suchmaschinen sehen dies als Versuch, SEO zu verbessern. Deshalb werden Websites mit duplizierten Inhalten benachteiligt.

Um dies zu vermeiden, empfehlen wir, bei einer korrekten Funktion Ihrer Website mit HTTPS alle URLs auf HTTPS umzuschreiben. So können Ihre Besucher automatisch auf die HTTPS-Adresse Ihres Webinhalts weitergeleitet werden, und es ist nur eine Adresse für den gleichen Inhalt verfügbar.

Hier ein Beispiel für eine Weiterleitung, die Sie in die Datei „[.htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)“ im Wurzelverzeichnis Ihrer Website einfügen können (ersetzen Sie die URL *https://www.yourdomain.tld* durch Ihre eigene):

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.tld/$1 [R,L]
```

## Weiterführende Informationen <a name="go-further"></a>
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
  
Treten Sie unserer [User Community](/links/community) bei.
