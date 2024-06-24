---
title: "Tutorial - Manuelle Installation von Grav"
excerpt: "Erfahren Sie hier, wie Sie das Grav CMS manuell auf einem OVHcloud Webhosting installieren"
updated: 2024-03-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Das **CMS** (**C**ontent **M**anagement **S**ystem) Grav ermöglicht die schnelle Entwicklung von Websites. Grav wurde für ein optimiertes Content-Management mithilfe von Markdown-Dateien entwickelt und eignet sich hervorragend für die Erstellung persönlicher Websites oder Projekte für kleine Unternehmen, ohne Kompromisse bei der Qualität oder Personalisierung einzugehen.

**Dieses Tutorial erklärt, wie Sie das Grav CMS manuell auf einem OVHcloud Webhosting installieren.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) Angebot.
- Sie besitzen eine [Domain](/links/web/domains).
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) eingeloggt.

## In der praktischen Anwendung

### Installation vorbereiten

Für die Installation des CMS **Grav** auf Ihrem [Webhosting](/links/web/hosting) sind einige Vorbereitungen erforderlich.

Folgen Sie **allen Schritten** in unserer Anleitung zur [manuellen Installation eines CMS](/pages/web_cloud/web_hosting/cms_manual_installation), bevor Sie zum nächsten Schritt übergehen.

### Manuelle Installation abschließen

> [!primary]
>
> Leeren Sie den Cache Ihres Internetbrowsers, bevor Sie mit der Installation fortfahren, um Fehler zu vermeiden.
>

#### Öffnen Sie Ihre Grav Website über Ihren Browser

Geben Sie Ihren Domainnamen in die Suchleiste Ihres Webbrowsers ein.

Wenn die Quelldateien von Grav korrekt in den Wurzelordner verschoben wurden, wird die Konfigurationsseiteeite `your-domain/admin` angezeigt:

![Grav installation](/pages/assets/screens/other/cms/grav/first_page_config.png){.thumbnail}

Füllen Sie das Formular aus, um einen Admin-Benutzer zu erstellen, und klicken Sie dann zur Bestätigung auf `Create User`{.action}.

Sobald Sie im Verwaltungsinterface von Grav eingeloggt sind, können Sie Ihre Website anpassen.

### Ihre Website personalisieren

Nachdem Sie sich als Administrator im Grav Dashboard angemeldet haben, können Sie auf eine Vielzahl von Optionen zugreifen, um Ihre Website zu konfigurieren und anzupassen.

#### Allgemeine Einstellungen der Website

##### Systemkonfiguration

Klicken Sie im Hauptmenü von Grav auf `Configuration`{.action}, und ändern Sie dann im Tab `Site`{.action} den Namen Ihrer Website, legen Sie die Standardsprache fest, oder konfigurieren Sie mehrere Einstellungen Ihrer Website.

Aktivieren Sie den Cache, um die Leistung Ihrer Website zu verbessern. Klicken Sie auf den Tab `System`{.action} und dann auf `Caching`{.action}. Identifizieren Sie die Zeile `Caching`{.action} und setzen Sie einen Haken bei `Yes`{.action}.

![Grav installation](/pages/assets/screens/other/cms/grav/activate_cache.png){.thumbnail}

##### Medienkonfiguration

Wählen Sie im Hauptmenü von Grav `Configuration`{.action} aus, und klicken Sie dann im Tab `System`{.action} auf `Media`{.action}. Legen Sie auf dieser Seite das Medienverhalten der Website fest, z.B. Bilder, Videos oder Dokumente.

#### Content Management

##### Seiten

Klicken Sie im Hauptmenü von Grav auf `Pages`{.action}, um eine Liste aller Seiten Ihrer Website anzuzeigen. Erstellen Sie neue Seiten, bearbeiten Sie vorhandene Seiten, und ordnen Sie die Struktur Ihrer Website an.

Um den Inhalt einer Seite anzuzeigen und zu bearbeiten, klicken Sie auf den Namen der Seite in der Liste. Klicken Sie beispielsweise auf `Home`{.action}, um den Titel und den Inhalt der Startseite Ihrer Website zu ändern.

![Grav installation](/pages/assets/screens/other/cms/grav/list_pages.png){.thumbnail}

##### Themes

Klicken Sie im Hauptmenü von Grav auf `Themes`{.action}, um das Aussehen Ihrer Website zu ändern. Installieren Sie neue Themes, oder wählen Sie ein bereits installiertes aus.

Um die aktuelle Anzeige zu ändern, klicken Sie auf das Theme mit der Bezeichnung `Active Theme`.

![Grav installation](/pages/assets/screens/other/cms/grav/theme_active.png){.thumbnail}

Passen Sie auf der angezeigten Seite Ihr aktives Theme an.

#### Backup und Update

##### Backup

Durch die Sicherung Ihrer Website kann diese im Falle einer Störung auf einen früheren Zustand zurückgesetzt werden.

Klicken Sie im Hauptmenü von Grav auf `Tools`{.action}, wählen Sie `Backup Now`{.action} in der rechten oberen Ecke der Anzeige und dann `Download Backup`{.action}, um das Backup Ihrer Website herunterzuladen. Wenn Sie die Seite `Backup` aktualisieren, wird Ihr Backup in der Liste `Backup History`{.action} angezeigt.

![Grav installation](/pages/assets/screens/other/cms/grav/backup_history.png){.thumbnail}

##### Update

Für die Sicherheit und Leistung Ihrer Website ist es entscheidend, Ihre Software auf dem neuesten Stand zu halten. Klicken Sie im Hauptmenü von Grav auf `Check for Updates`{.action}, um die verfügbaren Updates anzuzeigen.

### Fazit

Sie haben das CMS Grav manuell auf Ihrem OVHcloud Webhosting installiert. Nachdem Sie Ihre Website konfiguriert, personalisierte Inhalte hinzugefügt und das Theme angepasst haben, ist Ihre Grav Website über Ihren Domainnamen verfügbar.

## Weiterführende Informationen <a name="go-further"></a>

[Tutorial - Manuelle Installation von WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Manuelle Installation von Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Manuelle Installation von Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Manuelle Installation von PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Manuelle Installation von Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Manuelle Installation von Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Manuelle Installation von SPIP](/pages/web_cloud/web_hosting/cms_manual_installation_spip)

[Tutorial - Manuelle Installation eines CMS auf einem Webhosting](/pages/web_cloud/web_hosting/cms_manual_installation)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.
