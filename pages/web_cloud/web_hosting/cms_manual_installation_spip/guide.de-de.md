---
title: "Tutorial - Manuelle Installation von SPIP"
excerpt: "Erfahren Sie hier, wie Sie das SPIP CMS manuell auf einem OVHcloud Webhosting installieren"
updated: 2024-03-28
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Das **CMS** (**C**ontent **M**anagement **S**ystem) SPIP ist eine Lösung für redaktionelle Websites wie Online-Magazine, Zeitungen oder institutionelle Websites. Dank der modularen Architektur und eines modifizierbaren Systems kann SPIP Webseiten mit großem Funktionsumfang erstellen und bietet dabei große Freiheit bei der Personalisierung.

**Diese Anleitung erklärt, wie Sie das CMS SPIP manuell auf Ihrem OVHcloud Webhosting installieren.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) Angebot mit mindestens einer Datenbank.
- Sie verfügen über einen [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Installation vorbereiten

Um das CMS **SPIP** auf Ihrem [Webhosting](/links/web/hosting) zu installieren, sind einige Vorbereitungen erforderlich.

Folgen Sie **allen Schritten** in unserer Anleitung zur [manuellen Installation eines CMS](/pages/web_cloud/web_hosting/cms_manual_installation), bevor Sie zum nächsten Schritt übergehen.

### Manuelle Installation abschließen

> [!primary]
>
> Leeren Sie vor der Installation den Cache Ihres Internetbrowsers, um Fehlfunktionen zu vermeiden.
>

#### Öffnen Sie Ihre SPIP Website über Ihren Browser

Geben Sie `your_domain/ecrire` in die Suchleiste Ihres Browsers ein, um die Installation Ihrer SPIP Website zu starten. Die folgende Seite wird angezeigt:

![SPIP installation](/pages/assets/screens/other/cms/spip/installation_first_step.png){.thumbnail}

Wählen Sie die Sprache Ihrer SPIP Website aus und klicken Sie zur Bestätigung auf `Next`{.action}. Der folgende Bildschirm wird angezeigt:

![SPIP installation](/pages/assets/screens/other/cms/spip/installation_second_step.png){.thumbnail}

Geben Sie die Login-Daten für Ihr DBMS ein (zum Beispiel MySQL). Nachdem Sie Ihre Datenbank verbunden haben, wird der folgende Bildschirm angezeigt:

![SPIP installation](/pages/assets/screens/other/cms/spip/installation_third_step.png){.thumbnail}

Wählen Sie die Datenbank aus, die Sie für Ihre Website verwenden möchten, oder [erstellen Sie eine neue](/pages/web_cloud/web_hosting/sql_create_database). Wählen Sie ein Präfix für die Tabellen in der Datenbank aus. Standardmäßig wird das Präfix `spip` verwendet. Klicken Sie auf `Next`{.action}, um die Informationen zu bestätigen. Der folgende Bildschirm wird angezeigt:

![SPIP installation](/pages/assets/screens/other/cms/spip/installation_fourth_step.png){.thumbnail}

Geben Sie die angeforderten Informationen ein, und klicken Sie zur Bestätigung auf `Next`{.action}. Der folgende Bildschirm wird angezeigt:

![SPIP installation](/pages/assets/screens/other/cms/spip/installation_fifth_step.png){.thumbnail}

In diesem Fenster werden die für Ihre Website verfügbaren Plugins aufgelistet und Sie darüber informiert, dass die Installation von SPIP erfolgreich war.

### Fazit

Sie haben das CMS SPIP manuell auf Ihrem OVHcloud Webhosting installiert. Ihre SPIP Website ist online über Ihren Domainnamen erreichbar. Um sich in den Administratorbereich Ihrer SPIP Website einzuloggen, geben Sie `your_domain/ecrire` in die Suchleiste Ihres Browsers ein.

## Weiterführende Informationen <a name="go-further"></a>

[Tutorial - Manuelle Installation von WordPress](/pages/web_cloud/web_hosting/cms_manual_installation_wordpress)

[Tutorial - Manuelle Installation von Joomla!](/pages/web_cloud/web_hosting/cms_manual_installation_joomla)

[Tutorial - Manuelle Installation von Drupal](/pages/web_cloud/web_hosting/cms_manual_installation_drupal)

[Tutorial - Manuelle Installation von PrestaShop](/pages/web_cloud/web_hosting/cms_manual_installation_prestashop)

[Tutorial - Manuelle Installation von Pico](/pages/web_cloud/web_hosting/cms_manual_installation_pico)

[Tutorial - Manuelle Installation von Typo3](/pages/web_cloud/web_hosting/cms_manual_installation_typo3)

[Tutorial - Manuelle Installation von Grav](/pages/web_cloud/web_hosting/cms_manual_installation_grav)

[Tutorial - Manuelle Installation eines CMS auf einem Webhosting](/pages/web_cloud/web_hosting/cms_manual_installation)

[Eine Datenbank auf Ihrem Webhosting erstellen](/pages/web_cloud/web_hosting/sql_create_database)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Treten Sie unserer [User Community](/links/community) bei.
