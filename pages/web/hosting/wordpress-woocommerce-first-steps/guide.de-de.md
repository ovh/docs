---
title: "Tutorial - WooCommerce mit dem CMS WordPress verwenden"
slug: wordpress-woocommerce-first-steps
excerpt: "Diese Anleitung erklärt, wie Sie WooCommerce Lösung mit dem CMS WordPress verwenden"
section: "Tutorials"
order: 023
updated: 2023-02-23
---

**Letzte Aktualisierung am 12.02.2023**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>
  
## Ziel

Hier erfahren Sie, wie Sie einen Onlineshop mit der Open-Source-Endung **WooCommerce** mit dem Content Management System (CMS) **WordPress** erstellen. 

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen dieses Tutorial zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, bei [dem Herausgeber des CMS WordPress](https://wordpress.com/support/){.external} oder [dem Herausgeber von WooCommerce](https://woocommerce.com/){.external} einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren, falls Sie Schwierigkeiten haben. Wir werden Ihnen leider keine Unterstützung anbieten können. Mehr Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>
  
## Voraussetzungen

- Sie verfügen über ein [Hosting-Pakete](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Sie verfügen über eine [Domainname](https://www.ovhcloud.com/de/domains/).
- Sie haben zuvor [WordPress](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/) auf Ihrem Webhosting installiert.

Ist das nicht bereits der Fall, empfehlen wir Ihnen, Ihre Website auf HTTPS umzustellen, bevor Sie mit diesem Tutorial fortfahren: "[Website über SSL auf HTTPS umstellen](https://docs.ovh.com/de/hosting/website-umstellen-https-ssl/)".
  
## In der praktischen Anwendung
  
**wooCommerce** ist eine Erweiterung um **WordPress**. Sie installiert sich wie jede andere Endung.

### Installation

Loggen Sie sich in Ihr Administrations-Interface ein, indem Sie in Ihrer Suchleiste nach der URL Ihrer Domain mit der Marke `/wp-admin` oder `/wp-login`nach der URL eingeben (die Weiterleitung erfolgt automatisch):

![Admin page of WordPress](images/wordpress-woocommerce-first-steps_1.png){.thumbnail}

Gehen Sie im linken Menü in den Bereich `Plugins`{.action} und klicken Sie auf den Button `Installieren`{.action}:

![Dashboard, Plugins, Add new](images/wordpress-woocommerce-first-steps_2.png){.thumbnail}

Auf der neuen Seite `Installiert plugins`{.action}, geben Sie "woocommerce" oben rechts in die Suchleiste ein und klicken Sie dann auf `Installieren jetzt`{.action} im zugehörigen Kasten **WooCommerce**:

![Install WooCommerce](images/wordpress-woocommerce-first-steps_3.png){.thumbnail}

Klicken Sie jetzt auf `Aktivieren`{.action}:

![WooCommerce Activate](images/wordpress-woocommerce-first-steps_4.png){.thumbnail}

### Konfiguration 

#### Methode Nr. 1 - Verwendung des Konfigurationsassistenten

Wenn Sie Ihre Domainendung noch nicht eingerichtet haben **WooCommerce**, hilft Ihnen ein Konfigurationsassistent, die Informationen zu Ihrer Online-Verkaufsstelle einzugeben. Geben Sie das Formular ein und klicken Sie auf `Weiter`{.action}:

![Setup Wizard - Store Details](images/wordpress-woocommerce-first-steps_5.png){.thumbnail}

Wählen Sie dann Ihre Aktivitätsdomain(s) aus:

![Setup Wizard - Industry](images/wordpress-woocommerce-first-steps_6.png){.thumbnail}

Wählen Sie die Produktart aus, die Sie auf Ihrer Website verkaufen möchten (einige Optionen sind kostenpflichtig):

![Setup Wizard - Product Typen](images/wordpress-woocommerce-first-steps_7.png){.thumbnail}

Geben Sie anschließend die Art Ihrer Tätigkeit an:

![Setup Wizard - Business Details](images/wordpress-woocommerce-first-steps_8.png){.thumbnail}

Fügen Sie optionale (und kostenlose) Funktionen hinzu, wenn Sie möchten:

![Setup Wizard - Business Details, free features](images/wordpress-woocommerce-first-steps_9.png){.thumbnail}

Wählen Sie aus den angebotenen Thesen ein Thema aus:

![Setup Wizard - Choose a theme](images/wordpress-woocommerce-first-steps_10.png){.thumbnail}

**WooCommerce** ersucht Sie in diesem Fall, ein Konto zu erstellen, um die Domainendung **Jetpack** zu verwenden, die zusätzlich zu der Domainendung automatisch installiert wird **WooCommerce**. Die Erstellung eines Accounts ist optional. Sie haben Zugriff auf die eingeschränkten Funktionen von **Jetpack**, ohne sich authentifizieren zu müssen.

Ihr Webshop ist nun mit den allgemeinen Einstellungen konfiguriert.

#### Methode Nr. 2 - manuelle Konfiguration

Klicken Sie auf `Plugins`{.action}, um die installierten Erweiterungen aufzulisten und dann auf `Installiert plugins`. Die Liste Ihrer Domainendungen wird angezeigt. Klicken Sie auf `Einstellungen`{.action} im Modul **WooCommerce**:

![Setup Wizard - Extension, WooCommerce, Settings](images/wordpress-woocommerce-first-steps_11.png){.thumbnail}

Sie haben auch Zugriff auf diese Einstellungen, indem Sie direkt auf den `WooCommerce`{.action} und dann auf die `Einstellungen`{.action} klicken:

![Setup Wizard - WooCommerce, Settings](images/wordpress-woocommerce-first-steps_12.png){.thumbnail}

### Einstellungen

Die Seite mit den Einstellungen enthält mehrere Tabs:

![Setup Wizard - WooCommerce, Settings, Tabs](images/wordpress-woocommerce-first-steps_13.png){.thumbnail}

#### General

In diesem Tab können Sie folgende Elemente festlegen:

- Anschrift des Unternehmens
- Verkaufs- und Lieferzonen
- Standardlokalisierung des Kunden (optional)
- Aktivierung/Deaktivierung von Steuern
- Coupons
- monetäre Daten (Währung der Website, Anzeige)

![Setup Wizard - WooCommerce, Settings, General tab](images/wordpress-woocommerce-first-steps_14.png){.thumbnail}

#### Produkte

Die Verwaltung der Produkte erfolgt über eine Reihe von Unterrubriken:

- **General**: verwendet werden, um Elemente wie die standardmäßig anzuzeigende Startseite (Webshop, Rechtshinweise, Warenkorb usw.), die Maßeinheiten, die Möglichkeit, Kommentare zu den Produkten oder Notizen abzugeben, zu definieren.
- **Bestandsaufnahme**: dient dazu, die Verwaltung Ihres Bestands zu konfigurieren und das Verhalten der Website zu konfigurieren (dekrementierter Bestand, wenn ein Objekt im Warenkorb ist, Warnschwellen, Möglichkeit, nicht mehr auf Lager befindliche Produkte zu verschleiern).
- **Download-Produkte**: betrifft die Fälle, in denen Dokumente von Nutzern heruntergeladen werden.
- **Genehmigte Download-Verzeichnisse**: gibt das Verzeichnis oder die Verzeichnisse auf dem Server an, auf den die Dateien hochgeladen werden.
- **Fortgeschritten**: zur feineren Konfiguration der Produktattribute.

#### Expedition

Wenn Sie die bei der Installation kostenlos verfügbaren Standarddomainendungen aktiviert haben, verfügen Sie über die [WooCommerce Shipping](https://woocommerce.com/de-de/woocommerce-shipping/){.external} Erweiterung. Ist das nicht der Fall, können Sie die Installation in dem Menü `Plugins`{.action} durchführen.

- **Versandgebiete**: ermöglicht die Festlegung und Konfiguration von Versandzonen.
- **Lieferoptionen**: zur Verwaltung der Anwendung für alle Versandkosten.
- **Versandklassen**: können dazu verwendet werden, ähnliche Waren nach Art der Sendung zusammenzufassen.

#### Zahlungen

Dieser Tab dient zur Aktivierung/Deaktivierung der auf Ihrer Website verfügbaren Zahlungsmittel. Zur Konfiguration Ihrer Zahlungsart(en) lesen Sie die [offizielle Dokumentation](https://woocommerce.com/document/payments/).

#### Konten und Vertraulichkeit

Diese Rubrik umfasst alle Funktionen zur Verwaltung von Accounts und persönlichen Daten.

#### E-Mails

Erlaubt die Konfiguration der *von der App* versandten Standard-E-Mails (Anmeldung, Befehle, Bestellungen usw.).

#### Integration

Um Ihre Kunden anhand ihrer IP-Adresse zu geolokalisieren, können Sie in diesem Unterabschnitt den Lizenzschlüssel von [MaxMind](https://www.maxmind.com/){.external}, einem kostenpflichtigen Geolokalisierungsdienst, angeben.

#### Fortgeschritten

- **Installation der Seiten**: nützlich, um die Seiten zu ändern, auf die die Benutzer während des Bestellvorgangs weitergeleitet werden.
- **API REST**: Rubrik zur Konfiguration und Konfiguration der Zugriffe auf WooCommerce über seine REST API.
- **Webhook**: Verwaltung Ihrer HTTP-Rückrufaktionen.
- **Alte API**: Die alte WooCommerce API reaktivieren (standardmäßig deaktiviert).
- **wooCommerce.com**: WooCommerce hat das Tracking der Aktivität Ihrer Webseiten aktiviert oder deaktiviert. Sie haben Vorschläge für dedizierte Domainendungen (die Mehrheit ist kostenpflichtig).
- **Funktionen**: Seite mit den auf WooCommerce getesteten oder neu hinzugefügten Funktionen.
  
## Weiterführende Informationen <a name="go-further"></a>

Einige nützliche Links :

- Die [offizielle WordPress-Website](https://wordpress.org){.external}.
- Die [Jetpack](https://jetpack.com/){.external} Erweiterung.
- Die [WooCommerce]-Website(https://woocommerce.com/){.external}
- Der Shop für [WooCommerce-Erweiterungen](https://woocommerce.com/products/){.external}

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.