---
title: "Tutorial - Erste Schritte mit WordPress"
slug: wordpress-first-steps
excerpt: "Erfahren Sie hier, wie Sie eine Website mit dem CMS WordPress erstellen"
section: Tutorials
order: 020
updated: 2023-02-17
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>


**Letzte Aktualisierung am 17.02.2023**

## Ziel

Mithilfe dieser Anleitung können Sie Ihre ersten Inhalte erstellen, organisieren, online stellen und das Thema Ihrer Website mit dem Content Management System (CMS) **WordPress** ändern. Sie können Ihre Website ohne besondere Kenntnisse in Programmierung erstellen, mit einer breiten Palette an Themes wie Unternehmens-Website, Blog oder Website, um Ihre Aktivitäten oder Leidenschaften bekannt zu machen.


> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Dieses Tutorial soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der [WordPress Community](https://wordpress.com/support/){.external} zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

**Dieses Tutorial erklärt, wie Sie eine Website mit dem CMS WordPress erstellen.**

## Voraussetzungen

- Sie verfügen über ein [Webhosting](https://www.ovhcloud.com/de/web-hosting/), das mindestens eine Datenbank enthält.
- Sie verfügen über einen [Domainnamen](https://www.ovhcloud.com/de/domains/).
- Sie haben [WordPress installiert](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Falls nicht bereits vorhanden, installieren Sie ein [SSL-Zertifikat](https://docs.ovh.com/de/hosting/website-umstellen-https-ssl/#schritt-1-ssl-zertifikat-fur-das-hosting-aktivieren) für den zu Ihrer Website gehörenden Domainnamen.

Bei der Installation Ihres CMS als 1-Klick Modul erhalten Sie eine E-Mail mit den notwendigen Informationen zur Weiterführung dieses Tutorials:
 
- Link zur Administrationsoberfläche
- Administrator-Benutzername
- Link zum Abrufen des Administratorpassworts

### Mit der Verwaltungsoberfläche verbinden

Klicken Sie auf den Zugangslink zur Verwaltungsoberfläche, der bei der Installation des CMS per E-Mail übermittelt wurde. Diese URL endet mit auf `wp-admin`. Wenn Sie nicht eingeloggt sind, wird **WordPress** Sie automatisch auf eine URL umleiten, die mit einem `wp-login` endet:

![WordPress - Admin Login](images/wordpress_first_steps_1.png){.thumbnail}

> [!primary]
> 
> Auf dieser Startseite haben Sie die Möglichkeit, die Standardsprache des Interface von **WordPress** zu ändern. Öffnen Sie das Drop-down-Menü am Seitenende, wählen Sie Ihre Sprach aus und bestätigen Sie mit dem Button `Change`{.action}. Die Sprache kann jederzeit geändert werden.
> 

Geben Sie den Login (Username) ein, der Ihnen per E-Mail gesendet wurde, sowie das in derselben E-Mail angegebene WordPress-Passwort. So gelangen Sie auf Ihr Dashboard:

![WordPress - Dashboard](images/wordpress_first_steps_2.png){.thumbnail}

### Das Layout Ihrer Website ändern

**WordPress Themes** sind Konfigurationsdateien, mit denen das Aussehen Ihrer Website ohne Änderung des Inhalts angepasst werden kann. Es gibt viele Themes, die im Web verfügbar sind, kostenfrei und für unterschiedlichen Zwecke (Websites, Blogs, E-Commerce, Online-Presse, etc.).

Um Ihr *Theme* zu ändern, klicken Sie im linken Menü Ihres Dashboards auf `Design`{.action} und dann auf `Themes`{.action}:

![WordPress - Appearance/Themes](images/wordpress_first_steps_3.png){.thumbnail}

Wählen Sie aus den angebotenen *Themes* eines aus und klicken Sie auf `Aktivieren`{.action}:

![WordPress - Appearance/Themes](images/wordpress_first_steps_4.png){.thumbnail}

Sie können sich das Ergebnis anzeigen lassen, indem Sie den Domainnamen Ihrer Website im Browser aufrufen.

### Artikel verfassen

Mit WordPress können Sie Inhalte erstellen, ohne über Kenntnisse in der Webentwicklung zu verfügen.

Um einen Artikel zu erstellen, gehen Sie in den Bereich `Beiträge`{.action} im Menü links und klicken Sie dann auf `Erstellen`{.action}:

![WordPress - Posts/Add New](images/wordpress_first_steps_5.png){.thumbnail}

Seit Version 5 bietet **WordPress** ein Interface an, um die Erstellung und Bearbeitung von Artikeln zu vereinfachen: **Gutenberg**. Es handelt sich um einen WYSIWYG-Editor ("*what you see is what you get*"). Sie können damit Ihre Seite konstruieren, indem Sie Elemente wie Titel, Absätze, Listen, Bilder usw. hinzufügen.

![WordPress - Gutenberg](images/wordpress_first_steps_6.png){.thumbnail}

Klicken Sie auf `Titel hier eingeben`{.action} ein, um einen Titel zu Ihrer Seite hinzuzufügen:

![WordPress - Gutenberg, add title](images/wordpress_first_steps_7.png){.thumbnail}

Um Inhalte hinzuzufügen, klicken Sie auf `+`{.action} und wählen Sie aus, was Sie einfügen möchten:

![WordPress - Gutenberg, add block](images/wordpress_first_steps_8.png){.thumbnail}

Rechts auf der Seite können Sie über drei Links folgende Aktionen ausführen:

- `Entwurf speichern`{.action}, eine Aktion, die auch mit der Tastkombination `Strg` + `S` funktioniert (oder `cmd` + `S` mit macOS)
- `Vorschau`{.action} anzeigen
- `Veröffentlichen`{.action} auf Ihrer Website

Klicken Sie auf `Vorschau`{.action} und dann auf `Vorshau in neuem Tab`{.action}. Wählen Sie den Gerätetyp aus, für den die Vorschau durchgeführt werden soll (PC, Tablet oder Smartphone):

![WordPress - Preview](images/wordpress_first_steps_10.png){.thumbnail}

Um zum Verwaltungsinterface von **WordPress** zurückzukehren klicken Sie oben links auf das Icon.

### Die Kategorien verwalten

**WordPress** erlaubt es, Kategorien zu definieren und Ihre Artikel mit einer oder mehreren Kategorien zu verbinden. Um die Kategorien Ihrer Website zu verwalten, gehen Sie in den Bereich `Beiträge`{.action} und dann in den Bereich `Kategorien`{.action}:

![WordPress - Kategorien](images/wordpress_first_steps_11.png){.thumbnail}

Geben Sie nun das Formular ein, um eine neue Kategorie hinzuzufügen:

- **Name**: Name Ihrer Kategorie, die auf Ihrer Website angezeigt wird.
- **Slug**: Element, das am Ende Ihrer URL erscheint (nützlich, um SEO zu verbessern).
- **Parent category**: Erlaubt die Hierarchisierung Ihrer Kategorien (Kategorien können Unterkategorien einer bestehenden Kategorie sein).
- **Description**: Die Beschreibung Ihrer Kategorie ist standardmäßig nicht sichtbar, kann aber in anderen *Themes* sichtbar sein.

![WordPress - Categories filled](images/wordpress_first_steps_12.png){.thumbnail}

Wenn Sie diese Informationen eingegeben haben, klicken Sie auf den Button `Neue Kategorie erstellen`{.action}:

![WordPress - Added Categories](images/wordpress_first_steps_13.png){.thumbnail}

Sie können die Hierarchie Ihrer Kategorien verwalten. Eine neue Kategorie kann mit einer bestehenden Kategorie verknüpft werden:

![WordPress - Sub-Categorie added](images/wordpress_first_steps_14.png){.thumbnail}

### Eine Kategorie einem Artikel zuweisen

Um einen Artikel einer oder mehreren Kategorien zuzuweisen klicken Sie auf `Beiträge`{.action}. Sie erhalten die Liste mit allen Artikeln und deren Status. Navigieren Sie über den Titel des Artikels, den Sie klassifizieren möchten, und klicken Sie auf `QuickEdit`{.action}:

![WordPress - Categorize a post](images/wordpress_first_steps_15.png){.thumbnail}

Ändern Sie die Kategorien, indem Sie die in `Kategorien`{.action} aufgeführten Elemente ankreuzen oder entfernen:

![WordPress - Set new categories to an existing post](images/wordpress_first_steps_16.png){.thumbnail}

> [!warning]
>
> Die Auswahl einer Unterkategorie führt nicht zur automatischen Auswahl der Elternkategorie.
>

### Seiten erstellen

Seiten sind von Artikeln zu unterscheiden. Sie dienen hauptsächlich dazu, statische Inhalte zu veröffentlichen, die sich im Laufe der Zeit nicht oder nur wenig verändern werden, wie z.B. AGBs oder Seiteninformationen.

Gehen Sie auf `Seiten`{.action}:

![WordPress - GB to Pages](images/wordpress_first_steps_17.png){.thumbnail}

> [!primary]
>
> Die Standardseite, die bei der Installation von **WordPress** erstellt wird, ist aus Gründen der Lesbarkeit aus dem Beispiel entfernt.
>

Klicken Sie auf `Erstellen`{.action}; dies öffnet den Gutenberg-Editor:

![WordPress - Pages, Gutenberg page builder](images/wordpress_first_steps_18.png){.thumbnail}

Erstellen Sie den Inhalt Ihrer Seite und veröffentlichen Sie ihn:

![WordPress - Seiten, content](images/wordpress_first_steps_19.png){.thumbnail}

Wenn Sie zur Startseite Ihrer Website zurückkehren, sehen Sie den Link zu Ihrer neuen Seite:

![WordPress - Home page with new page link](images/wordpress_first_steps_20.png){.thumbnail}

### Permalinks verbessern

Die Links zu Ihren in **WordPress** veröffentlichten Webseiten werden mit einer Syntax vom Typ `parameter=wert` erzeugt, wobei der `Wert` aus Zahlen ohne explizite Bedeutung besteht. Die Änderung der Permalink-Schreibweise ermöglicht es, URLs in einem lesbaren Format zu erstellen. Ihre URLs werden damit bezüglich der Seiteninhalte einfacher zu deuten, was gleichzeitig zur SEO Ihrer Website beiträgt.

Gehen Sie auf der Startseite des Dashboards auf den Bereich `Einstellungen`{.action} und dann auf `Permalinks`{.action}:

![WordPress - Settings/Permalinks](images/wordpress_first_steps_21.png){.thumbnail}

Sie haben dann die Wahl zwischen verschiedenen Permalink-Typen. Wählen Sie den "Publication title" und bestätigen Sie am Ende der Seite:

![WordPress - Settings/Permalinks, select post name pattern](images/wordpress_first_steps_22.png){.thumbnail}

Ihre Links werden auf dem *Slug* basierend erstellt, der zuvor beim Editieren Ihrer Artikel und Seiten angegeben wurde.

## Weiterführende Informationen <a name="go-further"></a>

- Speichern Sie Ihre Zugangsdaten in einem Passwortmanager wie [KeePass](https://keepass.info/){.external}.
- Testen Sie den Standardeditor [Gutenberg](https://wordpress.org/gutenberg/){.external} online.
- Einige Ressourcen, um **WordPress** *Themes* zu finden:
    - [WordPress Themes](https://wordpress.com/themes){.external}
    - [TemplaMonster](https://www.templatemonster.com/wordpress-themes.php){.external}
    - [Elegant Themes](https://www.elegantthemes.com/){.external}
    - [Elementor](https://elementor.com/){.external}
- Finden Sie mehr Informationen auf der offiziellen Website von [WordPress](https://wordpress.org/){.external}.

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
