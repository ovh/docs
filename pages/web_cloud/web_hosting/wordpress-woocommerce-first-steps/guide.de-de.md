---
title: "Tutorial - WooCommerce mit WordPress verwenden"
excerpt: "Erfahren Sie hier, wie Sie WooCommerce mit dem CMS WordPress verwenden"
updated: 2023-03-07
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Dieses Tutorial erklärt, wie Sie einen Onlineshop mit der Open-Source-Anwendung **WooCommerce** für das Content Management System (CMS) **WordPress** einrichten. 

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der [WordPress Community](https://wordpress.com/support/){.external} oder dem [Herausgeber von WooCommerce](https://woocommerce.com/){.external} zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie verfügen über ein [Webhosting](/links/web/hosting), das mindestens eine Datenbank enthält.
- Sie verfügen über einen [Domainnamen](/links/web/domains).
- Sie haben [WordPress installiert](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

Falls nicht bereits vorhanden, installieren Sie ein [SSL-Zertifikat](/pages/web_cloud/web_hosting/ssl-activate-https-website#schritt-1-ssl-zertifikat-fur-das-hosting-aktivieren) für den zu Ihrer Website gehörenden Domainnamen.
  
## In der praktischen Anwendung
  
**WooCommerce** ist ein Plugin für **WordPress**, installierbar wie jede andere Erweiterung.

### Installation

Loggen Sie sich in Ihren Administrationsbereich ein, indem Sie in der Adresszeile die URL Ihres Domainnamens gefolgt von `/wp-admin` oder `/wp-login` eingeben (die Weiterleitung erfolgt automatisch).

![Admin page of WordPress](/pages/assets/screens/other/cms/wordpress/woocommerce/admin-login.png){.thumbnail}

Gehen Sie im linken Menü in den Bereich `Plugins`{.action} und klicken Sie auf den Button `Installieren`{.action}:

![Dashboard, Plugins, Add new](/pages/assets/screens/other/cms/wordpress/woocommerce/plugins.png){.thumbnail}

Auf der neuen Seite `Installierte Plugins`{.action}, geben Sie "woocommerce" oben rechts in die Suchleiste ein und klicken Sie dann auf `Jetzt installieren`{.action} im Feld für **WooCommerce**.

![Install WooCommerce](/pages/assets/screens/other/cms/wordpress/woocommerce/add-plugin-woocommerce-install-now.png){.thumbnail}

Klicken Sie auf `Aktivieren`{.action}.

![WooCommerce Activate](/pages/assets/screens/other/cms/wordpress/woocommerce/add-plugin-woocommerce-activate.png){.thumbnail}

### Konfiguration 

#### Methode 1: Verwendung des Konfigurationsassistenten

Wenn Sie das Plugin für **WooCommerce** noch nicht eingerichtet haben, hilft Ihnen ein Konfigurationsassistent, die Informationen Ihres Online-Shops einzugeben. Füllen Sie das Formular aus und klicken Sie auf `Weiter`{.action}.   

![Setup Wizard - Store Details](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-store-details.png){.thumbnail}

Wählen Sie dann einen oder mehrere Geschäftsbereiche aus.

![Setup Wizard - Industry](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-industry.png){.thumbnail}

Wählen Sie die Produktart aus, die Sie auf Ihrer Website anbieten möchten (einige Optionen sind kostenpflichtig).

![Setup Wizard - Product Typen](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-product-types.png){.thumbnail}

Geben Sie anschließend den Typ Ihrer Geschäftstätigkeit an.

![Setup Wizard - Business Details](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-business-details.png){.thumbnail}

Fügen Sie optionale (und kostenlose) Funktionen hinzu, wenn Sie möchten.

![Setup Wizard - Business Details, free features](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-business-details-2.png){.thumbnail}

Wählen Sie aus den angebotenen Themes eines aus.

![Setup Wizard - Choose a theme](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-theme.png){.thumbnail}

**WooCommerce** fordert Sie nun auf, ein Konto zu erstellen, um die Erweiterung **Jetpack** zu nutzen, die zusätzlich zu **WooCommerce** automatisch installiert wird. Die Erstellung eines Accounts ist optional. Sie haben Zugriff auf die eingeschränkten Funktionen von **Jetpack**, ohne sich authentifizieren zu müssen.

Ihr Webshop ist nun mit den allgemeinen Einstellungen konfiguriert.

#### Methode 2: Manuelle Konfiguration

Gehen Sie im linken Menü in den Bereich `Plugins`{.action} und dann auf `Installierte Plugins`. Die Liste Ihrer Plugins wird angezeigt. Klicken Sie auf `Einstellungen`{.action} im Modul **WooCommerce**:

![Setup Wizard - Extension, WooCommerce, Settings](/pages/assets/screens/other/cms/wordpress/woocommerce/plugins-woocommerce.png){.thumbnail}

Sie haben auch Zugriff auf diese Einstellungen, indem Sie direkt auf `WooCommerce`{.action} und dann auf `Einstellungen`{.action} klicken:

![Setup Wizard - WooCommerce, Settings](/pages/assets/screens/other/cms/wordpress/woocommerce/dashboard-woocommerce-settings.png){.thumbnail}

### Einstellungen

Die Seite mit den Einstellungen enthält mehrere Tabs:

![Setup Wizard - WooCommerce, Settings, Tabs](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-general.png){.thumbnail}

#### General

In diesem Tab können Sie folgende Elemente festlegen:

- Anschrift des Unternehmens
- Verkaufs- und Liefergebiete
- Standardlokalisierung des Kunden (optional)
- Aktivierung/Deaktivierung von Steuern
- Gutscheine
- Monetäre Daten (Währung der Website, Anzeige)

![Setup Wizard - WooCommerce, Settings, General tab](/pages/assets/screens/other/cms/wordpress/woocommerce/woocommerce-general-currency.png){.thumbnail}

#### Produkte

Die Verwaltung der Produkte erfolgt über eine Reihe von Unterkategorien:

- **Allgemein**: Zum Festlegen von Elementen wie z.B. Startseiten (Shop, Rechtshinweise, Warenkorb usw.), Maßeinheiten, und Kommentarfunktionen zu den Produkten.
- **Iventar**: Dient dazu, die Verwaltung Ihres Bestands und das Verhalten der Website zu konfigurieren (veränderter Bestand, wenn ein Objekt im Warenkorb ist, Warnschwellen, Anzeige nicht mehr verfügbarer Produkte im Shop).
- **Download-Produkte**: Betrifft die Fälle, in denen Dokumente von Nutzern heruntergeladen werden.
- **Genehmigte Download-Verzeichnisse**: Gibt das Verzeichnis oder die Verzeichnisse zum Hochladen von Dateien auf dem Server an.
- **Fortgeschritten**: Zur feineren Konfiguration der Produktattribute.

#### Shipping

Wenn Sie bei der Installation die kostenlosen Erweiterungen aktiviert haben, verfügen Sie bereits über [WooCommerce Shipping](https://woocommerce.com/de-de/woocommerce-shipping/){.external}. Ist das nicht der Fall, können Sie die Installation in dem Menü `Erweiterungen`{.action} durchführen.

- **Versandgebiete**: Ermöglicht die Festlegung und Konfiguration von Liefergebieten.
- **Lieferoptionen**: Zur Verwaltung der Anwendung von Versandkosten.
- **Versandklassen**: Können dazu verwendet werden, ähnliche Waren nach Versandart zusammenzufassen.

#### Zahlungen

Dieser Tab dient zur Aktivierung/Deaktivierung der auf Ihrer Website verfügbaren Zahlungsarten. Zur Konfiguration Ihrer Zahlungsarten lesen Sie die [offizielle Dokumentation](https://woocommerce.com/document/payments/).

#### Konten und Datenschutz

Dieser Bereich umfasst alle Funktionen zur Verwaltung von Accounts und persönlichen Daten.

#### E-Mails

Erlaubt die Konfiguration der von der Anwendung versendeten *Standardmails* (Anmeldung, Bestellungen, Stornierungen etc.).

#### Integration

Um Ihre Kunden anhand ihrer IP-Adressen zu geolokalisieren, können Sie in diesem Unterbereich den Lizenzschlüssel für [MaxMind](https://www.maxmind.com/){.external} hinterlegen, ein kostenpflichtiger Geolokalisierungsdienst.

#### Fortgeschritten

- **Installation von Seiten**: Nützlich, um die Seiten zu ändern, auf die Benutzer während des Bestellvorgangs weitergeleitet werden.
- **REST API**: Bereich zur Konfiguration von Zugriffen auf WooCommerce via REST API.
- **Webhook**: Verwaltung von *HTTP callback* Funktionen.
- **Ancient API**: Die veraltete WooCommerce API reaktivieren (standardmäßig deaktiviert).
- **WooCommerce.com**: Aktivierung/Deaktivierung von WooCommerce Tracking der Verkaufsaktivitäten Ihres Shops, Vorschläge für dedizierte Erweiterungen (die Mehrheit ist kostenpflichtig).
- **Features**: Seite mit derzeit auf WooCommerce getesteten oder kürzlich hinzugefügten Funktionen.
  
## Weiterführende Informationen <a name="go-further"></a>

Nützliche Links:

- [Offizielle WordPress-Website](https://wordpress.org){.external}
- [Jetpack Erweiterung](https://jetpack.com/){.external} 
- [WooCommerce](https://woocommerce.com/){.external}
- [WooCommerce Shop für Erweiterungen](https://woocommerce.com/products/){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.