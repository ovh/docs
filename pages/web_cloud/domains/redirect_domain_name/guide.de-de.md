---
title: "Weiterleitung von bei OVHcloud verwalteten Domainnamen"
excerpt: "Erfahren Sie hier, wie Sie verschiedene Weiterleitungsarten für einen von OVHcloud verwalteten Domainnamen erstellen"
updated: 2024-03-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Bei der Weiterleitung eines Domainnamens wird dieser auf ein neues Ziel umgeleitet. Es gibt verschiedene Arten von Weiterleitungen, die jeweils einem bestimmten Bedarf entsprechen.

**Diese Anleitung erklärt, wie Sie verschiedene Arten der Weiterleitung Ihres Domainnamens einsetzen.**

## Voraussetzungen

- Sie verfügen über einen bei OVHcloud registrierten [Domainnamen](/links/web/domains).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie verfügen über die erforderlichen Informationen, um sich auf Ihrem Webhosting-Speicherplatz einzuloggen (optional, für Weiterleitungen über eine [.htaccess Datei](#htaccess_rewrite)).

## In der praktischen Anwendung

### Domain-Weiterleitungen verstehen

Mit dieser Funktion können Sie eine Domain/Subdomain umleiten:

- Auf eine andere bereits bestehende Domain/Subdomain.
    - **Beispiel**: `domain.tld`
- Auf eine URL (Uniform Resource Locator) für eine Website.
    - **Beispiele**: `http://www.domain.tld/welcome/` oder `https://www.domain.tld/welcome/` (wenn die Zieldomain über ein kompatibles SSL-Zertifikat verfügt)

Diese Weiterleitungen können auf mehrere Arten erreicht werden:

- **Über das [OVHcloud Kundencenter](/links/manager)**, in dem ein Konfigurationsassistent Ihre Weiterleitung einrichten kann.
- **Über eine codegestüzte Methode**, indem Sie die Weiterleitung manuell in einer Datei hinterlegen (in der Regel [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> Die Einrichtung einer Weiterleitung kann Auswirkungen auf das Suchmaschinen-Ranking haben. 
> Achten Sie auf die Änderungen, die Sie vornehmen, oder kontaktieren Sie bei Bedarf einen [spezialisierten Dienstleister](/links/partner) für SEO.
>
> Achtung: Eine über das [OVHcloud Kundencenter](/links/manager) erstellte Weiterleitung erlaubt nicht die Weiterleitung einer URL als `https://` auf eine andere Domain oder URL. 
> Um diese Weiterleitungsart zu erstellen, müssen Sie "URL Rewrite" verwenden, zum Beispiel mithilfe der ".htaccess"-Datei.
>

### Eine Domain über das Kundencenter weiterleiten

Loggen Sie sich in das [OVHcloud Kundencenter](/links/manager){.external} ein, gehen Sie in den Bereich `Web Cloud`{.action}, wählen Sie die umzuleitende Domain unter `Domainnamen`{.action} aus, und klicken Sie dann auf den Tab `Weiterleitung`{.action}.

Die Tabelle zeigt die für Ihre Domain aktiven Weiterleitungen an. Sie können Ihre existierenden Weiterleitungen mit dem Button `...`{.action} rechts in den Zeilen verwalten.

Klicken Sie auf den Button `Weiterleitung hinzufügen`{.action}.

![Vorstellung des Menüs zur Weiterleitung](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}

Über das [OVHcloud Kundencenter](/links/manager) sind drei Weiterleitungsoptionen verfügbar, von denen jede aus **fünf aufeinander folgenden Schritten** besteht. 

> Der Tab `Weiterleitung`{.action} zeigt eine vierte Option, die Ihre Domain auf DNS-Einträge vom Typ A, AAAA und CNAME zeigen lassen kann.<br>
> Da es sich hierbei nicht um eine "Weiterleitung" im engeren Sinn handelt, wird diese Option hier nicht näher erläutert.
>
> Mehr Informationen zu DNS-Einträgen finden Sie in unserer Dokumentation zum [Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_records).
>

Nachfolgend finden Sie die drei Arten der Weiterleitung Schritt für Schritt erläutert.

> [!primary]
>
> Unabhängig von der gewählten Weiterleitungsoption benötigt die Änderung eine Propagationszeit von 4 bis maximal 24 Stunden, bis sie voll wirksam ist.
>

#### Option 1: Sichtbare permanente Weiterleitung auf eine Web-Adresse

Mit dieser Option wird nach Aufruf der weitergeleiteten Domain die Zieldomain in der Adresszeile Ihres Browsers angezeigt, anstelle der weitergeleiteten Domain.

- **Beispiel**: Wenn Sie `domain1.tld` auf `domain2.tld` weiterleiten, wird die in der Adresszeile `domain2.tld` angezeigt.

![GIF1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Diese "Standard-Weiterleitung" wird einen HTTP 301 Code zurückgeben.

> [!success]
> Klicken Sie auf die nachstehenden Tabs, um alle 5 Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Im Assistenten-Fenster wird Ihre umzuleitende Domain bereits angezeigt. Füllen Sie das Eingabefeld **nur dann** aus, wenn Sie eine *Subdomain* weiterleiten möchten.
>>
>> Die Option `Ebenfalls weiterleiten`{.action} kann angehakt werden, um auch die Subdomain `www` Ihrer Domain/Subdomain weiterzuleiten.
>>
>> ![Schritt 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 2 überzugehen.
>>
> **Schritt 2**
>>
>> Wählen Sie `Zu einer Web-Adresse`{.action} aus.
>>
>> ![Schritt 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 3 überzugehen.
>>
> **Schritt 3**
>>
>> Wählen Sie `Mit einer sichtbaren Weiterleitung`{.action} aus den beiden Optionen.
>>
>> ![Schritt 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 4 überzugehen.
>>
> **Schritt 4**
>>
>> Wählen Sie `Permanent (301)`{.action} aus den beiden Auswahlmöglichkeiten und geben Sie die Zieldomain oder -URL Ihrer Weiterleitung im Feld `Web-Adresse`{.action} ein.
>>
>> ![Schritt 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-permanent.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 5 überzugehen.
>>
> **Schritt 5**
>>
>> Überprüfen Sie im letzten Schritt, ob die angezeigten Informationen korrekt sind.
>>
>> ![Schritt 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-permanent.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um Ihre Konfiguration zu validieren.
> >
>> > [!primary]
>> >
>> > Wenn die Nachricht "*Es gibt Weiterleitungen von Domains, die mit den Weiterleitungen, die Sie hinzufügen möchten in Konflikt stehen*" angezeigt wird, können Sie die Option `Überschreiben der existierenden Weiterleitung bestätigen`{.action} aktivieren, um die Anwendung Ihrer Weiterleitung zu erzwingen.
>> >
>> > Achtung, die alte Konfiguration wird daraufhin deaktiviert und gelöscht.
>> >
>>

#### Option 2: Temporäre sichtbare Weiterleitung auf eine Web-Adresse

Wie bei Option 1 wird nach Aufruf der weitergeleiteten Domain die Zieldomain in der Adresszeile Ihres Browsers anstatt der weitergeleiteten Domain angezeigt.

Diese ist jedoch punktuell zu verwenden, zum Beispiel für kurzfristige Ereignisse.<br>
Die Positionierung in Suchmaschinen ist weniger effizient als bei einer **sichtbaren permanenten** Weiterleitung vom Typ 301 (HTTP-Code).

- **Beispiel**: Wenn Sie `domain1.tld` auf `domain2.tld` weiterleiten, wird die in der Adresszeile `domain2.tld` angezeigt.

![GIF1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Diese Weiterleitung wird einen HTTP 302 Code zurückgeben.

> [!success]
> Klicken Sie auf die nachstehenden Tabs, um alle 5 Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Im Assistenten-Fenster wird Ihre umzuleitende Domain bereits angezeigt. Füllen Sie das Eingabefeld **nur dann** aus, wenn Sie eine *Subdomain* weiterleiten möchten.
>>
>> Die Option `Ebenfalls weiterleiten`{.action} kann angehakt werden, um auch die Subdomain `www` Ihrer Domain/Subdomain weiterzuleiten.
>>
>> ![Schritt 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 2 überzugehen.
>>
> **Schritt 2**
>>
>> Wählen Sie `Zu einer Web-Adresse`{.action}.
>>
>> ![Schritt 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 3 überzugehen.
>>
> **Schritt 3**
>>
>> Wählen Sie `Mit einer sichtbaren Weiterleitung`{.action} aus den beiden Optionen.
>>
>> ![Schritt 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 4 überzugehen.
>>
> **Schritt 4**
>>
>> Wählen Sie `Temporär (302)`{.action} aus den beiden Auswahlmöglichkeiten und geben Sie die Zieldomain oder -URL Ihrer Weiterleitung im Feld `Web-Adresse`{.action} ein.
>>
>> ![Schritt 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-temporary.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 5 überzugehen.
>>
> **Schritt 5**
>>
>> Überprüfen Sie im letzten Schritt, ob die angezeigten Informationen korrekt sind.
>>
>> ![Schritt 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-temporary.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um Ihre Konfiguration zu validieren.
>>
>> > [!primary]
>> >
>> > Wenn die Nachricht "*Es gibt Weiterleitungen von Domains, die mit den Weiterleitungen, die Sie hinzufügen möchten in Konflikt stehen*" angezeigt wird, können Sie die Option `Überschreiben der existierenden Weiterleitung bestätigen`{.action} aktivieren, um die Anwendung Ihrer Weiterleitung zu erzwingen.
>> >
>> > Achtung, die alte Konfiguration wird daraufhin deaktiviert und gelöscht.
>> >
>>

#### Option 3: Unsichtbare Weiterleitung auf eine Web-Adresse

Diese Weiterleitung erlaubt es, nach der Eingabe der weitergeleiteten Domain, diese in der Adresszeile Ihres Browsers angezeigt zu lassen, anstatt sie durch die Zieldomain zu ersetzen<br>.
**Achtung, diese Aktion ist nicht mit allen Seiten kompatibel und beeinträchtigt das Ranking Ihrer Website.**

- **Beispiel**: Wenn Sie `domain1.tld` auf `domain2.tld` weiterleiten, wird `domain1.tld` in der Adresszeile Ihres Browsers angezeigt.

![GIF2](/pages/assets/schemas/domains/invisible-redirection.gif){.thumbnail}

Die unsichtbare Weiterleitung funktioniert über einen *iFrame* `HTML tag`. Damit kann Ihre weitergeleitete Domain den Inhalt der Zieldomain-Webseite in ihre eigene HTML-Seite integrieren.

Diese Einbettung von Inhalten verhindert, dass Besuchern Ihrer Website die Zieldomain angezeigt wird.

> Diese Option führt zu einem HTTP 200 Code.

> [!warning]
>
> Achtung: Mit *iFrame* eingebettete Seiten werden möglicherweise nicht auf Smartphones gelesen. Derartige Inhalte werden von Suchmaschinen im Allgemeinen nicht für die Indexierung Ihrer Seite berücksichtigt.
>

> [!success]
> Klicken Sie auf die nachstehenden Tabs, um alle 5 Schritte anzuzeigen.
>

> [!tabs]
> **Schritt 1**
>>
>> Im Assistenten-Fenster wird Ihre umzuleitende Domain bereits angezeigt. Füllen Sie das Eingabefeld **nur dann** aus, wenn Sie eine *Subdomain* weiterleiten möchten.
>>
>> Die Option `Ebenfalls weiterleiten`{.action} kann angehakt werden, um auch die Subdomain `www` Ihrer Domain/Subdomain weiterzuleiten.
>>
>> ![Schritt 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 2 überzugehen.
>>
> **Schritt 2**
>>
>> Wählen Sie `Zu einer Web-Adresse`{.action} aus.
>>
>> ![Schritt 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 3 überzugehen.
>>
> **Schritt 3**
>>
>> Wählen Sie `Mit einer unsichtbaren Weiterleitung`{.action} aus den beiden angegebenen Optionen.
>>
>> ![Schritt 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-with-an-invisible-redirection.png){.thumbnail}
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 4 überzugehen.
>>
> **Schritt 4**
>>
>> Wählen Sie `Temporär (302)`{.action} aus den beiden Auswahlmöglichkeiten und geben Sie die Zieldomain oder -URL Ihrer Weiterleitung im Feld `Web-Adresse`{.action} ein.
>>
>> ![Schritt 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-iframe.png){.thumbnail}
>>
>> Für diesen Schritt stehen Ihnen drei optionale Einstellungen zur Verfügung:
>>
>> - **Titel**: Ihr Seitentitel, der im Tab des Webbrowsers angezeigt wird.<br>
>> - **Schlüsselwörter**: Sie können von Suchmaschinen verwendet werden, um die Seite teilweise zu referenzieren.<br>
>> - **Beschreibung**: Eine Webseiten-Beschreibung, die von Suchmaschinen in deren Ergebnissen verwendet wird.
>>
>> Klicken Sie auf `Weiter`{.action}, um zu Schritt 5 überzugehen.
>>
> **Schritt 5**
>>
>> Überprüfen Sie im letzten Schritt, ob die angezeigten Informationen korrekt sind.
>>
>> ![Schritt 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-iframe.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um Ihre Konfiguration zu validieren.
>>
>> > [!primary]
>> >
>> > Wenn die Nachricht "*Es gibt Weiterleitungen von Domains, die mit den Weiterleitungen, die Sie hinzufügen möchten in Konflikt stehen*" angezeigt wird, können Sie die Option `Überschreiben der existierenden Weiterleitung bestätigen`{.action} aktivieren, um die Anwendung Ihrer Weiterleitung zu erzwingen.
>> >
>> > Achtung, die alte Konfiguration wird daraufhin deaktiviert und gelöscht.
>> >
>>

#### Eine Domain über eine .htaccess Datei weiterleiten <a name="htaccess_rewrite"></a>

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

Dateien mit dem Dateinamen ".htaccess" sind Konfigurationsdateien, in denen Befehle spezifiziert werden können. Wenn der Webserver (Apache) den Code Ihrer Website verarbeitet, werden die Befehle interpretiert und ausgeführt.<br>
Sie können solche Befehle verwenden, um Weiterleitungen zu erstellen.

Eine fehlerhafte ".htaccess" Datei kann Ihre Website unerreichbar machen. Kontaktieren Sie im Zweifelsfall einen [spezialisierten Dienstleister](/links/partner) .

Unsere Dokumentation zum Thema ".htaccess" finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.

> [!success]
>
> Wir empfehlen Ihnen, **vor der Bearbeitung eine Sicherung Ihrer ".htaccess" Datei durchzuführen**. So können Sie im Falle eines Fehlers die vorherige Version der Datei wiederherstellen.
>

Nachfolgend finden Sie 4 Variablen, um Weiterleitungen über die Datei ".htaccess" durchzuführen.

#### Variable 1 - "Redirect permanent"

Diese Variable erlaubt die Weiterleitung einer Website als Ganzes, oder nur eines Teils einer Website, auf eine andere Website oder einen anderen Teil einer Website. Die Besucher werden dann automatisch auf die richtige Adresse/URL weitergeleitet, wenn sie versuchen, über die historische Adresse/URL auf Ihre Website zuzugreifen.

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
>>```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Um eine Datei auf eine andere weiterzuleiten:
>>
>>```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> HTTP-Code
>>
>> Das Skript sendet einen HTTP 301 Code. Dies warnt die Roboter der Suchmaschinen, dass ihre Links zur neuen Adresse/URL aktualisiert werden müssen.
>>

#### Variable 2 - "Redirect gone"

Diese Variable ist für gelöschte Dateien nützlich. Sie ersetzt die Nachricht *404 document not found* durch eine deutlichere Nachricht vom Typ *410 document no longer exists*. Besucher Ihrer Seite werden somit informiert, dass die angeforderte Datei nicht mehr existiert.

> [!tabs]
> Einzufügender Code in ".htaccess" 
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> HTTP-Code
>>
>> Das Skript wird einen HTTP 410 Code zurückgeben.
>>

#### Variable 3 - "Redirect seeother"

Wenn Sie die Dateiendung ändern, kann mit *seeother* der Dateityp geändert werden. Wenn Besucher auf die alte Datei zugreifen, wird automatisch auf die Datei mit der richtigen Endung weitergeleitet.

> [!tabs]
> Einzufügender Code in ".htaccess" 
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> HTTP-Code
>>
>> Das Skript wird einen HTTP 303 Code zurückgeben.
>>

#### Variable 4 - "Redirect temp"

Diese Variable kann verwendet werden, wenn Sie Dateien vorübergehend auf eine andere Seite verschieben. Besucher, die über die historische URL/Adresse auf Ihre Website zugreifen möchten, werden automatisch auf die neue temporäre URL weitergeleitet.

> [!tabs]
> Einzufügender Code in ".htaccess" 
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> HTTP-Code
>>
>> Das Skript wird einen HTTP 302 Code zurückgeben.
>>

## Weiterführende Informationen <a name="go-further"></a>

[Tutorial - Wie kann ich den Zugang zu meiner Website für bestimmte IP-Adressen über eine .htaccess Datei sperren?](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website).

[Den Adminbereich Ihrer Website mit einer .htaccess Datei schützen](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).

[Fortgeschrittene Operationen mit .htaccess Dateien](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do).

[Bearbeiten der OVHcloud DNS-Zone](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.