---
title: "Tutorial - Manuelle Installation von Pico"
excerpt: "Erfahren Sie hier, wie Sie das Pico CMS manuell auf einem OVHcloud Webhosting installieren"
updated: 2024-03-21
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Mit dem Pico **CMS** (**C**ontent **M**anagement **S**ystem) können Sie schnell Websites erstellen. Pico wurde für die einfache Erstellung und Verwaltung von Inhalten mithilfe von Markdown-Dateien entwickelt und ist ideal für die Erstellung von persönlichen Websites, Portfolios oder Projekten kleiner Unternehmen.

**Dieses Tutorial erklärt, wie Sie Ihr Pico CMS eigenständig installieren.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie verfügen über einen [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Installation vorbereiten

Für die Installation des CMS **Pico** auf Ihrem [Webhosting](/links/web/hosting) sind einige Vorbereitungen erforderlich.

Folgen Sie **allen Schritten** in unserer Anleitung zur [manuellen Installation eines CMS](/pages/web_cloud/web_hosting/cms_manual_installation), bevor Sie zum nächsten Schritt übergehen.

### Manuelle Installation abschließen

> [!primary]
>
> Leeren Sie den Cache Ihres Internetbrowsers, bevor Sie mit der Installation fortfahren, um Fehler zu vermeiden.
>

#### Besuchen Sie Ihre Pico Website über Ihren Browser

Geben Sie Ihren Domainnamen in die Suchleiste Ihres Webbrowsers ein.

Wenn die Quelldateien von Pico erfolgreich in den Wurzelordner verschoben wurden, wird die folgende Seite angezeigt:

![Pico installation](/pages/assets/screens/other/cms/pico/welcome_page.png){.thumbnail}

Pico ist ein dateibasiertes CMS, was bedeutet, dass die gesamte Konfiguration und Erstellung von Inhalten direkt durch die Bearbeitung der Dateien auf dem Server erfolgt. Gehen Sie wie folgt vor, um Ihre Pico Website einzurichten und anzupassen.

#### Die Ordnerstruktur von Pico verstehen

Nach der Installation finden Sie mehrere Ordner und Dateien im Hauptverzeichnis von Pico. Die wichtigsten sind:

- `content/`: Enthält die Markdown-Dateien Ihres Inhalts.
- `config/`: Enthält die Konfigurationsdatei `config.yml` von Pico.
- `themes/`: Enthält die Themes Ihrer Website.
- `assets/`: Enthält statische Ressourcen wie Bilder, CSS-Stylesheets, JavaScript, etc.
- `plugins/`: Enthält die Plugins, die Sie verwenden möchten.

#### Basiskonfiguration

**1. Website konfigurieren**: Öffnen Sie die Datei `config/config.yml` mit einem Texteditor. Konfigurieren Sie hier die grundlegenden Einstellungen für Ihre Website, wie Titel, Beschreibung, URL oder Designs.

**2. Den Titel und die Beschreibung Ihrer Website ändern**: Suchen Sie in der Datei `config/config.yml` nach den Zeilen für `site_title:` und `site_description:`, um den Titel und die Beschreibung Ihrer Website zu aktualisieren.

**3. Den Titel und die Beschreibung Ihrer Website ändern**: Wenn Sie über einen bestimmten Domainnamen verfügen, suchen Sie in der Datei `config/config.yml` nach der Zeile für `base_url:`, um den Domainnamen Ihrer Website zu aktualisieren. Andernfalls bleibt der Standardwert `~` erhalten.

#### Inhalt hinzufügen

**1. Seiten erstellen**: Um Ihrer Website eine neue Seite hinzuzufügen, erstellen Sie eine neue Markdown-Datei (.md) im Ordner `content/`. Der Dateiname bestimmt die URL der Seite. Beispielsweise ist `about.md` unter `http://yourdomain.tld/about` verfügbar.

**2. Inhalt schreiben**: Öffnen Sie die Markdown-Datei mit einem Texteditor und beginnen Sie mit dem Schreiben Ihres Inhalts. Verwenden Sie die Markdown-Syntax, um Ihren Text zu formatieren, Hyperlinks zu erstellen, Bilder einzufügen, etc. Wenn Sie beispielsweise die Hauptseite (home) Ihrer Website bearbeiten möchten, öffnen Sie die Datei `index.md` und fügen Sie den gewünschten Inhalt ein.

**3. Inhalt überprüfen**: Markdown-Dateien müssen einen gültigen YAML-Header aufweisen. Wenn der Header fehlt oder falsch formatiert ist, erkennt Pico ihn möglicherweise nicht als gültige Seite. Ein Beispiel für einen gültigen YAML-Header ist:

```console
---
title: About
---
Your content here
```

#### Design personalisieren

**1. Wählen Sie ein Thema aus**: Pico wird mit einem Standard-Design installiert. Sie können jedoch andere Themes von der [offiziellen Website von Pico](https://picocms.org/themes/) herunterladen oder Ihr eigenes erstellen.

**2. Design ändern**: Um das Design zu ändern, aktualisieren Sie den Abschnitt `theme:` in der Datei `config/config.yml` mit dem Namen des gewünschten Ordners.

**3. Theme anpassen**: Sie können die Dateien des Themes unter `themes/yourtheme/` bearbeiten, um das Erscheinungsbild Ihrer Website anzupassen. Dies kann die Bearbeitung von HTML Twig, CSS, und JavaScript umfassen.

#### Plugins hinzufügen

Pico erlaubt es, Funktionen mit Plugins zu erweitern.

**1. Plugins finden**: Die Liste der verfügbaren Plugins finden Sie auf der [offiziellen Website von Pico](https://picocms.org/plugins/).

**2. Plugin installieren**: Laden Sie das Plugin herunter und speichern Sie es im Ordner `plugins/` Ihrer Pico Installation.

**3. Plugin konfigurieren**: Einige Plugins erfordern eine zusätzliche Konfiguration in `config/config.yml`. Folgen Sie den Anweisungen, die mit dem Plugin geliefert werden.

### Fazit

Sie haben das CMS Pico manuell auf Ihrem OVHcloud Webhosting installiert. Nachdem Sie Ihre Website konfiguriert, personalisierte Inhalte hinzugefügt, das Theme angepasst und Plugins installiert haben, ist Ihre Pico Website online über Ihren Domainnamen verfügbar.

## Weiterführende Informationen <a name="go-further"></a>

[Tutorial - Manuelle Installation von WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Manuelle Installation von Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Manuelle Installation von Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Manuelle Installation von PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Manuelle Installation von Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Manuelle Installation von Grav](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutorial - Manuelle Installation von SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Manuelle Installation eines CMS auf einem Webhosting](/pages/web_cloud/web_hosting/cms_manual_installation)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.
