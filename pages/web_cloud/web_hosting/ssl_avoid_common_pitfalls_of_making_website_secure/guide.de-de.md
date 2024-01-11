---
title: "Häufige Fehler beim Schutz Ihrer Website mit SSL"
excerpt: "Erfahren Sie, wie Sie häufige Fehler beim Sichern Ihrer Website mit SSL vermeiden können"
updated: 2024-01-11
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>
 
## Ziel

In dieser Anleitung finden Sie einige Beispiele für Situationen, in denen Sie Ihre Website mit SSL schützen müssen.

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, für deren Konfiguration, Verwaltung und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit in Ihrer Verantwortung, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei gängigen Aufgaben bestmöglich zu begleiten. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Für externe Dienstleistungen bieten wir leider keine Unterstützung. Weitere Informationen finden Sie im Abschnitt [„Weiterführende Informationen“](#go-further) dieser Anleitung.
>

**Diese Anleitung erklärt, wie Sie häufige Fehler bei der Sicherung Ihrer Website mit SSL**

## Voraussetzungen

- Sie besitzen ein [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external}.
- Sie haben mindestens eine [Domain](https://www.ovhcloud.com/de/domains/){.external} registriert.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external}, Teil „Web“.

## In der praktischen Anwendung

### Gemischter Inhalt (mixed content)

Ihre Website lädt keine externen Elemente wie die Schaltflächen *Facebook* und *Twitter*? Interaktionen auf Ihren Webseiten funktionieren nicht wie beim Zugriff auf Ihre Webseite per „HTTP“? Das liegt wahrscheinlich daran, dass die Website gemischte Inhalte enthält. 

Seit einigen Jahren verhindern Browser wie *Google Chrome*, *Mozilla Firefox* und *Internet Explorer* das Laden von Seitenelementen, wenn sie über eine „HTTP“-URL aufgerufen werden können. Dadurch wird sichergestellt, dass der durch das „HTTPS“-Protokoll gewährte Datenschutz nicht durch ein als „HTTP“ geladenes Element beeinträchtigt wird. 

In den meisten Fällen handelt es sich dabei um externe Skripte von anderen Websites wie Social Media. In diesem Fall genügt es, die URLs in „HTTP“ durch die URLs in „HTTPS“ in Ihren Skripten zu ersetzen, um diese Skripte laden zu können.

> [!primary]
>
> Einige Websites verwenden [Content Delivery Network (CDN)](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn), um beispielsweise *JavaScript*-Bibliotheken (wie *JQuery*) zu hosten. 
> Wenn das CDN die Buchhandlung mit einer „HTTP“ URL liefert, kann Ihre Website vom **mixed content** betroffen sein. 
>

Wie kann ich feststellen, ob meine Seite betroffen ist?

Die von *Mozilla Firefox* und *Google Chrome* bereitgestellten Debugtools können Ihnen mitteilen, ob Ihre Website Elemente enthält, die aufgrund von gemischten Inhalten blockiert wurden. Die im [Mozilla Developer Network](https://developer.mozilla.org/en-us/docs/Web/Security/Mixed_content){.external} verfügbare Dokumentation erläutert die Verwendung dieser Tools zur Erkennung gemischter Inhalte.

### Duplizierter Inhalt (duplicate content)

„Inhalt duplizieren“ bedeutet, dass der gleiche Inhalt an mehreren verschiedenen URLs vorhanden ist. Suchmaschinen sehen dies als Versuch, die Referenzierung zu verbessern (SEO). Dadurch werden Websites mit duplizierten Inhalten benachteiligt.

Um dies zu vermeiden, empfehlen wir Ihnen, bei einer korrekten Funktion Ihrer Website mit „HTTPS“ den Inhalt „HTTP“ auf „HTTPS“ umzuleiten. So können Ihre Besucher automatisch auf die Adresse Ihres Webinhalts in „HTTPS“ weitergeleitet werden, und es ist nur eine Adresse für den gleichen Inhalt verfügbar. 

Hier ein Beispiel für eine Weiterleitung, die Sie in eine Datei „[.htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)“ im Wurzelverzeichnis Ihrer Website einfügen können (ersetzen Sie die URL *https://www.yourdomain.tld* durch Ihre eigene):

```
RewriteEngine On
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://www.yourdomain.tld/$1 [R,L]
```

## Weiterführende Informationen <a name="go-further"></a>
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).
  
Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.