---
title: "Weiterleitung von bei OVHcloud verwalteten Domainnamen"
excerpt: "Erfahren Sie hier, wie Sie verschiedene Weiterleitungsarten für einen von OVHcloud verwalteten Domainnamen erstellen"
updated: 2026-03-27
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

Bei der Weiterleitung eines Domainnamens wird dieser auf ein neues Ziel umgeleitet. Es gibt verschiedene Arten von Weiterleitungen, die jeweils einem bestimmten Bedarf entsprechen.

**Diese Anleitung erklärt die verschiedenen Möglichkeiten zur Weiterleitung Ihres Domainnamens.**

## Voraussetzungen

- Ein [Domainname](/links/web/domains)
- Zugriff auf Ihr Webhosting (für eine Weiterleitung über eine [.htaccess](#htaccess_rewrite)-Datei)

<!-- CP-NAV-START:web-domains -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Domainnamen](/links/control-panel/web-domains)
- **Navigationspfad:** `Web Cloud`{.action} > `Domainnamen`{.action} > Wählen Sie Ihren Domainnamen aus

---
<!-- CP-NAV-END:web-domains -->

## In der praktischen Anwendung

### Domain-Weiterleitungen verstehen

Mit dieser Funktion können Sie einen Domainnamen/eine Subdomain umleiten auf:

- Einen anderen bereits bestehenden Domainnamen/eine Subdomain:
    - **Beispiel**: `domain.tld`
- Eine Website-URL (Uniform Resource Locator):
    - **Beispiele**: `http://www.domain.tld/welcome/` oder `https://www.domain.tld/welcome/` (wenn der Ziel-Domainname über ein kompatibles SSL-Zertifikat verfügt).

Diese Weiterleitungen können auf mehrere Arten eingerichtet werden:

- **Über das [OVHcloud Kundencenter](/links/manager)**, in dem ein Konfigurationsassistent Ihre Weiterleitung einrichten kann.
- **Über eine codebasierte Methode**: Sie müssen die Weiterleitung selbst in einer Datei erstellen (in der Regel [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> Die Einrichtung einer Weiterleitung kann Auswirkungen auf das SEO-Ranking Ihrer Website haben.
> Achten Sie auf die Änderungen, die Sie vornehmen, oder kontaktieren Sie bei Bedarf einen [spezialisierten Dienstleister](/links/partner) für SEO.
>
> Achtung: Eine über das [OVHcloud Kundencenter](/links/manager) erstellte Weiterleitung erlaubt nicht die Weiterleitung einer `https://`-URL auf einen anderen Domainnamen oder eine andere URL.
> Um diese Art von Weiterleitung zu erstellen, müssen Sie eine [URL-Umschreibung](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite) verwenden, zum Beispiel mithilfe einer ".htaccess"-Datei.
>

### Einen Domainnamen über das Kundencenter weiterleiten

Neben Weiterleitungen, die auf DNS-Einträge vom Typ A, AAAA und CNAME verweisen, sind über das [OVHcloud Kundencenter](/links/manager) 3 Weiterleitungsoptionen verfügbar.

Weitere Informationen finden Sie bei Bedarf in unserer Dokumentation zu [DNS-Einträgen](/pages/web_cloud/domains/dns_zone_records).

> [!warning]
>
> Um eine der 3 nachstehenden Optionen nutzen zu können, muss die aktive DNS-Zone Ihres Domainnamens in Ihrem OVHcloud Kundencenter verwaltet werden. Diese Weiterleitungsoptionen ändern Ihre DNS-Zonenkonfiguration, um zu funktionieren.
>
> Andernfalls funktionieren die Weiterleitungen nicht.

> [!primary]
>
> Unabhängig von der gewählten Weiterleitungsoption benötigt die Änderung eine Propagationszeit von 4 bis maximal 24 Stunden, bis sie voll wirksam ist.

**Klicken Sie auf die nachstehenden Optionen, um deren Inhalt anzuzeigen.**

/// details | Option 1 - Sichtbare permanente Weiterleitung auf eine Web-Adresse

Mit dieser Option wird nach Eingabe des weitergeleiteten Domainnamens der Ziel-Domainname in der Adresszeile Ihres Browsers angezeigt, anstelle des weitergeleiteten Domainnamens.

- **Beispiel**: Wenn Sie `domain1.tld` auf `domain2.tld` weiterleiten, wird `domain2.tld` in der Adresszeile Ihres Browsers angezeigt.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Diese "Standard-Weiterleitung" gibt einen HTTP 301 Code zurück.

Klicken Sie auf die unten stehenden Tabs, um die **7** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Weiterleitung`{.action}: Die Tabelle zeigt die aktiven Weiterleitungen für Ihren Domainnamen an. Klicken Sie dann auf `Weiterleitung hinzufügen`{.action}.
>>
>> ![Redirection menu overview](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im Fenster wird Ihr weiterzuleitender Domainname bereits angezeigt. Füllen Sie das Formular **nur dann** aus, wenn Sie eine *Subdomain* weiterleiten möchten.
>>
>> Die Option `Ebenfalls weiterleiten`{.action} kann aktiviert werden, um auch die Subdomain `www` auf dasselbe Ziel weiterzuleiten, das Sie für Ihren Domainnamen/Ihre Subdomain gewählt haben.
>>
>> ![Step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 4**
>>
>> Wählen Sie `Zu einer Web-Adresse`{.action} aus.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 5**
>>
>> Wählen Sie `Mit einer sichtbaren Weiterleitung`{.action} aus den beiden angezeigten Optionen.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 6**
>>
>> Wählen Sie `Permanent (301)`{.action} aus den beiden angezeigten Optionen und geben Sie den Ziel-Domainnamen oder die Ziel-URL Ihrer Weiterleitung im Feld `Web-Adresse`{.action} ein.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-permanent.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 7**
>>
>> Überprüfen Sie in diesem letzten Schritt, ob die angezeigten Informationen korrekt sind.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-permanent.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um Ihre Konfiguration zu bestätigen.
>>
>> > [!primary]
>> >
>> > Wenn die Meldung "*Es gibt Weiterleitungen von Domainnamen, die Sie weiterleiten möchten, die mit den Weiterleitungen, die Sie hinzufügen möchten, in Konflikt stehen*" angezeigt wird, können Sie die Option `Überschreiben der existierenden Weiterleitung bestätigen`{.action} aktivieren, um die Anwendung Ihrer Weiterleitung zu erzwingen.
>> >
>> > Achtung: Die alte Konfiguration wird daraufhin deaktiviert und gelöscht.
>> >
>>

///

/// details | Option 2 - Temporäre sichtbare Weiterleitung auf eine Web-Adresse

Wie bei Option 1 wird nach Eingabe des weitergeleiteten Domainnamens der Ziel-Domainname in der Adresszeile Ihres Browsers anstelle des weitergeleiteten Domainnamens angezeigt.

Diese Option sollte jedoch nur punktuell verwendet werden, zum Beispiel für temporäre Ereignisse.

Die Positionierung in Suchmaschinen ist weniger effizient als bei einer **sichtbaren permanenten** Weiterleitung vom Typ 301 (HTTP-Code).

- **Beispiel**: Wenn Sie `domain1.tld` auf `domain2.tld` weiterleiten, wird `domain2.tld` in der Adresszeile Ihres Browsers angezeigt.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Diese Weiterleitung gibt einen HTTP 302 Code zurück.

Klicken Sie auf die unten stehenden Tabs, um die **7** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Weiterleitung`{.action}: Die Tabelle zeigt die aktiven Weiterleitungen für Ihren Domainnamen an. Klicken Sie dann auf `Weiterleitung hinzufügen`{.action}.
>>
>> ![Redirection menu overview](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im Fenster wird Ihr weiterzuleitender Domainname bereits angezeigt. Füllen Sie das Formular **nur dann** aus, wenn Sie eine *Subdomain* weiterleiten möchten.
>>
>> Die Option `Ebenfalls weiterleiten`{.action} kann aktiviert werden, um auch die Subdomain `www` auf dasselbe Ziel weiterzuleiten, das Sie für Ihren Domainnamen/Ihre Subdomain gewählt haben.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 4**
>>
>> Wählen Sie `Zu einer Web-Adresse`{.action} aus.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 5**
>>
>> Wählen Sie `Mit einer sichtbaren Weiterleitung`{.action} aus den beiden angezeigten Optionen.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 6**
>>
>> Wählen Sie `Temporär (302)`{.action} aus den beiden angezeigten Optionen und geben Sie den Ziel-Domainnamen oder die Ziel-URL Ihrer Weiterleitung im Feld `Web-Adresse`{.action} ein.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-temporary.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 7**
>>
>> Überprüfen Sie in diesem letzten Schritt, ob die angezeigten Informationen korrekt sind.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-temporary.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um Ihre Konfiguration zu bestätigen.
>>
>> > [!primary]
>> >
>> > Wenn die Meldung "*Es gibt Weiterleitungen von Domainnamen, die Sie weiterleiten möchten, die mit den Weiterleitungen, die Sie hinzufügen möchten, in Konflikt stehen*" angezeigt wird, können Sie die Option `Überschreiben der existierenden Weiterleitung bestätigen`{.action} aktivieren, um die Anwendung Ihrer Weiterleitung zu erzwingen.
>> >
>> > Achtung: Die alte Konfiguration wird daraufhin deaktiviert und gelöscht.

///

/// details | Option 3 - Unsichtbare Weiterleitung auf eine Web-Adresse

Diese Weiterleitung erlaubt es, nach Eingabe des weitergeleiteten Domainnamens, diesen in der Adresszeile Ihres Browsers angezeigt zu lassen, anstatt ihn durch den Ziel-Domainnamen zu ersetzen.

**Achtung: Diese Aktion ist nicht mit allen Websites kompatibel und beeinträchtigt das SEO-Ranking Ihrer Website.**

- **Beispiel**: Wenn Sie `domain1.tld` auf `domain2.tld` weiterleiten, wird `domain1.tld` in der Adresszeile Ihres Browsers angezeigt.

![Gif2](/pages/assets/schemas/domains/invisible-redirection.gif){.thumbnail}

Die unsichtbare Weiterleitung funktioniert über ein *iFrame*-HTML-Tag. Damit kann Ihr weitergeleiteter Domainname den Inhalt der anderen Seite, die dem Ziel-Domainnamen entspricht, in seine eigene HTML-Seite integrieren.

Diese Einbettung verhindert, dass Besuchern Ihrer Website der Ziel-Domainname angezeigt wird.

> Diese Option gibt einen HTTP 200 Code zurück.

> [!warning]
>
> Achtung: Mit einem *iFrame*-Tag eingebettete Seiten werden möglicherweise auf Smartphones nicht korrekt dargestellt. Ihr Inhalt wird von Suchmaschinen in der Regel nicht für das SEO-Ranking und die Indexierung Ihrer Website berücksichtigt.

Klicken Sie auf die unten stehenden Tabs, um die **7** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Domainnamen](/links/control-panel/web-domains), und wählen Sie den betreffenden Domainnamen aus.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Weiterleitung`{.action}: Die Tabelle zeigt die aktiven Weiterleitungen für Ihren Domainnamen an. Klicken Sie dann auf `Weiterleitung hinzufügen`{.action}.
>>
>> ![Redirection menu overview](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im Fenster wird Ihr weiterzuleitender Domainname bereits angezeigt. Füllen Sie das Formular **nur dann** aus, wenn Sie eine *Subdomain* weiterleiten möchten.
>>
>> Die Option `Ebenfalls weiterleiten`{.action} kann aktiviert werden, um auch die Subdomain `www` auf dasselbe Ziel weiterzuleiten, das Sie für Ihren Domainnamen/Ihre Subdomain gewählt haben.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 4**
>>
>> Wählen Sie `Zu einer Web-Adresse`{.action} aus.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 5**
>>
>> Wählen Sie `Mit einer unsichtbaren Weiterleitung`{.action} aus den beiden angezeigten Optionen.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-with-an-invisible-redirection.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 6**
>>
>> Wählen Sie `Temporär (iframe)`{.action} aus den beiden angezeigten Optionen und geben Sie den Ziel-Domainnamen oder die Ziel-URL Ihrer Weiterleitung im Feld `Web-Adresse`{.action} ein.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-iframe.png){.thumbnail}
>>
>> In diesem Schritt stehen Ihnen drei optionale Einstellungen zur Verfügung:
>>
>> - **Titel**: Der Titel Ihrer Website. Er wird als Seitentitel im Browser-Tab angezeigt.
>> - **Schlüsselwörter**: Sie können von Suchmaschinen verwendet werden, um die Seite teilweise zu indexieren.
>> - **Beschreibung**: Eine Beschreibung Ihrer Website. Sie wird von Suchmaschinen in deren Ergebnissen verwendet.
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 7**
>>
>> Überprüfen Sie in diesem letzten Schritt, ob die angezeigten Informationen korrekt sind.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-iframe.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um Ihre Konfiguration zu bestätigen.
>>
>> > [!primary]
>> >
>> > Wenn die Meldung "*Es gibt Weiterleitungen von Domainnamen, die Sie weiterleiten möchten, die mit den Weiterleitungen, die Sie hinzufügen möchten, in Konflikt stehen*" angezeigt wird, können Sie die Option `Überschreiben der existierenden Weiterleitung bestätigen`{.action} aktivieren, um die Anwendung Ihrer Weiterleitung zu erzwingen.
>> >
>> > Achtung: Die alte Konfiguration wird daraufhin deaktiviert und gelöscht.

### Einen Domainnamen über eine ".htaccess"-Datei weiterleiten <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, wenn Sie Schwierigkeiten haben. Wir werden Ihnen bei den unten dokumentierten Schritten keine weitergehende Unterstützung anbieten können. Weitere Informationen finden Sie im Abschnitt [Weiterführende Informationen](#go-further) dieser Anleitung.
>

".htaccess"-Dateien sind Konfigurationsdateien, in denen Befehle angegeben werden können. Wenn der Webserver (Apache) den Code Ihrer Website ausführt, werden die Befehle interpretiert und ausgeführt.

Mit solchen Befehlen können Sie Weiterleitungen erstellen.

Eine fehlerhafte ".htaccess"-Datei kann Ihre Website unerreichbar machen. Kontaktieren Sie im Zweifelsfall einen [spezialisierten Dienstleister](/links/partner).

Unsere gesamte Dokumentation zu ".htaccess" finden Sie im Abschnitt [Weiterführende Informationen](#go-further) dieser Anleitung.

> [!success]
>
> Wir empfehlen Ihnen, **vor jeder Änderung eine Sicherung Ihrer .htaccess-Datei zu erstellen**. So können Sie im Fehlerfall die vorherige Version der Datei wiederherstellen.
>

Nachfolgend finden Sie 4 Variablen, um Weiterleitungen über die ".htaccess"-Datei einzurichten.

#### Variable 1 - "Redirect permanent"

Diese Variable erlaubt die Weiterleitung einer Website als Ganzes oder nur eines Teils auf eine andere Website oder einen anderen Teil. Besucher werden automatisch auf die korrekte Adresse/URL weitergeleitet, wenn sie versuchen, über die historische Adresse/URL auf Ihre Website zuzugreifen.

> [!tabs]
> Einzufügender Code in ".htaccess"
>>
>> Um eine ganze Website weiterzuleiten:
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> Um ein Verzeichnis auf ein anderes weiterzuleiten:
>>
>> ```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Um eine Datei auf eine andere weiterzuleiten:
>>
>> ```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> HTTP-Code
>>
>> Das Skript gibt einen HTTP 301 Code zurück. Dies signalisiert den Suchmaschinen-Bots, dass ihre Links auf die neue Adresse/URL aktualisiert werden müssen.
>>

#### Variable 2 - "Redirect gone"

Diese Variable ist für gelöschte Dateien nützlich. Sie ersetzt die Meldung *404 document not found* durch eine aussagekräftigere Meldung wie *410 document no longer exists*. Besucher Ihrer Website werden darüber informiert, dass die aufgerufene Datei nicht mehr existiert.

> [!tabs]
> Einzufügender Code in ".htaccess"
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> HTTP-Code
>>
>> Das Skript gibt einen HTTP 410 Code zurück.
>>

#### Variable 3 - "Redirect seeother"

Wenn Sie die Dateiendung ändern, ermöglicht die Variable *seeother* das Ändern des Dateityps. Besucher, die auf die alte Datei zugreifen möchten, werden automatisch auf die Datei mit der korrekten Endung weitergeleitet.

> [!tabs]
> Einzufügender Code in ".htaccess"
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> HTTP-Code
>>
>> Das Skript gibt einen HTTP 303 Code zurück.
>>

#### Variable 4 - "Redirect Temp"

Diese Variable kann verwendet werden, wenn Sie Dateien vorübergehend auf eine andere Website verschieben. Besucher, die über die historische Adresse/URL auf Ihre Website zugreifen möchten, werden automatisch auf die neue temporäre Adresse/URL weitergeleitet.

> [!tabs]
> Einzufügender Code in ".htaccess"
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> HTTP-Code
>>
>> Das Skript gibt einen HTTP 302 Code zurück.

///

## Weiterführende Informationen <a name="go-further"></a>

[Den Zugang zu Ihrer Website für bestimmte IP-Adressen über eine ".htaccess"-Datei sperren](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website).

[Den Adminbereich Ihrer Website mit einer ".htaccess"-Datei schützen](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).

[URLs mittels mod_rewrite umschreiben](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite).

[Weitere Operationen mit ".htaccess"-Dateien](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do).

[Wie bearbeite ich meine DNS-Zone?](/pages/web_cloud/domains/dns_zone_records)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
