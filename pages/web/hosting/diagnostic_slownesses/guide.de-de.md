---
title: "Meine Website ist langsam. Was soll ich tun?" 
excerpt: "Ermitteln Sie den Ursprung der Langsamkeit Ihrer Website und erfahren Sie, wie Sie diese Situation lösen"
slug: slow-website-fix
Abschnitt: Diagnose
order: 01
---

**Letzte Aktualisierung am 17.11.2022**

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>
  
## Ziel

Eine Verlangsamung Ihrer Website ist das Ergebnis einer zu langen Ladezeit, um alle oder einige Teile Ihrer Website anzuzeigen. 

Ist die Last zu lang, kann die von Ihrem Browser aus angeforderte Anfrage die maximale Ausführungsdauer erreichen, die der Server, auf dem sich Ihr Hosting befindet, autorisiert hat. In diesem Fall gibt der Server den Code "**504 Gateway Timeout**" zurück, um den Besucher darauf hinzuweisen, dass die Variable "max_execution_time"erreicht wurde, was auch die Ausführung der angeforderten Anfrage stoppt.

Die Langsamkeit hat zwei Ursachen:

- Überlastung der Shared Hosting Infrastruktur, auf der Ihre Website gehostet ist
- eine Anfrage, die zu lang oder zu schwer ist, um auf der Shared Hosting Infrastruktur Ihrer Website ausgeführt zu werden. 

Die überwiegende Mehrheit der Langsamen stammt eigentlich von der Website und nicht von ihrem Shared Hosting. Wir haben diese Anleitung erstellt, um Ihnen in dieser Situation bestmöglich zu helfen.

In seltenen Fällen können die Verzögerungen bei der Anzeige auch von Ihrem Internetprovider oder mit einer zu geringen Bandbreite der Internetverbindung herrühren. Überprüfen Sie Ihre Netzwerkkonnektivität **bevor** Sie Ihre Diagnosen fortsetzen.

**Diese Anleitung erklärt, wie Sie die Ursache der Verzögerungen auf Ihrer Website feststellen und entsprechend handeln.**

> [!primary]
>
> **Nach Abschluss aller in dieser Anleitung aufgeführten Diagnosen**, falls sich herausstellt, dass die Verlangsamung von unserer Hosting-Infrastruktur herrührt, möchten wir Sie daran erinnern, dass sie zwischen mehreren Benutzern geteilt wird.
>
> Die Nutzer teilen sich die Ressourcen der Shared Hosting Infrastruktur, um ihre Websites betreiben zu können. Wenn einer von ihnen die Shared Hosting Infrastruktur überfordert, kann dies Auswirkungen auf andere Hosting-Pakete auf derselben Infrastruktur haben.
>
> Unsere Shared Hosting Angebote verfügen nicht über ein "Service Level Agreement"(SLA). 
>
> Wenn Sie einen Dienst mit einer SLA Verfügbarkeit von mehr als 99% benötigen, empfehlen wir die Verwendung eines [Virtual Private Server (VPS)](https://www.ovhcloud.com/de/vps/) oder eines [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).
>
> Darüber hinaus werden die Performance der Shared Hosting Infrastruktur von OVHcloud 24 Stunden am Tag und 7 Tage an 7 Tagen überwacht. So können Sie eine hohe Verfügbarkeit und gegebenenfalls eine schnelle Wiederherstellung Ihrer Dienste im Falle einer festgestellten Überlastung sicherstellen.*
>

## Voraussetzungen

- Sie verfügen über eine auf einem unserer [OVHcloud Shared Hosting](https://www.ovhcloud.com/de/web-hosting/) Angebote gehostete Website
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eingeloggt

## Voraussetzungen

> [!warning]
>
> OVHcloud stellt Ihnen Dienste zur Verfügung, deren Konfiguration, Verwaltung und Verantwortung Ihnen obliegen. Es liegt daher an Ihnen, dafür zu sorgen, dass sie ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Sie bei alltäglichen Aufgaben bestmöglich zu unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/) zu kontaktieren. Wir werden Ihnen keinen Support zur Verfügung stellen können **Wenn die Infrastruktur, in der Ihr Shared Hosting Angebot vorhanden ist, nicht in Frage kommt**. Weitere Informationen finden Sie im Abschnitt ["Weiterführende Informationen"](#go-further) dieser Anleitung.
>

> [!success]
>
> Wir empfehlen Ihnen, die Ergebnisse Ihrer Diagnosen zu notieren, sobald Sie Fortschritte in dieser Anleitung erzielen. Diese Ergebnisse werden für die Lösung Ihrer Situation von großem Nutzen sein, unabhängig von der Ursache der Langsamkeit.
>

### Verständnis des Konzepts der Time To First Byte (TTFB)

Die *Time To First Byte* (TTFB) ist die Dauer, die Ihr Webhosting benötigt, um das erste Datenbyte nach einer Anfrage an Ihren Webbrowser weiterzuleiten, um Ihre Website anzuzeigen.

Wenn es keine Überlastung der Shared Hosting Infrastruktur gibt und Ihre Website maximal optimiert ist, endet die TTFB nicht innerhalb von 800 ms.

**Hohe TTFB bedeutet nicht automatisch, dass Ihre Langsamkeit von Ihrem Shared Hosting ausgeht.**

Für Content Managment System (CMS) wie WordPress, Joomla!, PrestaShop oder Drupal kann die Seite, die Sie über Ihren Webbrowser anrufen, intern zusätzliche Anfragen auf Ihrem Hosting erstellen. Ihr Webhosting sendet Ihrem Browser nichts, bis diese internen Anfragen selbst abgeschlossen sind.

> **Beispiel**:
>
> Sie bitten über Ihren Webbrowser, die Startseite Ihrer Website anzuzeigen. Die Anfrage wird daher standardmäßig die Datei "**index.php**"Ihrer Website aufrufen.
>
> Sobald die Anfrage auf die Datei "**index.php**" eingeht, wird diese von dem Webserver Ihres Webhostings ausgeführt. 
>
>Bei der Ausführung muss die Datei "**index.php**" Informationen aus anderen Dateien Ihrer Website oder sogar aus Elementen Ihrer Datenbank abrufen. 
>
>Jede dieser Anfragen generiert eine interne Anfrage zu Ihrem Hosting-Dienst. 
>
>Die Datei "**index.php**"wartet ab, bis alle internen Anfragen, die er angefordert hat **vor***, vorliegen, um das erste Datenbyte an Ihren Webbrowser weiterzuleiten.
>
>Wenn Ihre Datei "**index.php**" langsam oder schwerfällig durchzuführende Anfragen generiert, wird die TTFB hoch sein und Ihre Website wird mehrere Sekunden lang angezeigt. Die Performance Ihres Webhosting-Angebots ist somit nicht in Frage gestellt.

Mit Online-Diagnosewerkzeugen können Sie die TTFB Ihres Hostings abrufen. Die meisten von ihnen agieren jedoch als Webbrowser, sodass die Ergebnisse relativiert werden müssen.<br>
Diese Tools sind nämlich nicht in der Lage, die internen Anfragen zu berücksichtigen, die von der Datei, die Sie über Ihren Browser aufgerufen haben, angefordert wurden, wie im obigen Beispiel mit der Datei "**index.php**".

### Schritt 1 - Ermitteln Sie, ob die Langsamkeit vom Hosting oder von Ihrer Website ausgeht

In diesem ersten Schritt können Sie feststellen, ob die Langsamkeit zurückzuführen ist:

- entweder Ihrer Website, aufgrund ihrer internen Funktionsweise
- oder der Shared Hosting Infrastruktur, auf der sich Ihre Website befindet.

Alle Diagnosen in Schritt 1 sind **ausnahmslos** durchzuführen, um festzustellen, ob die Verlangsamungen von Ihren Webhosting-Diensten oder der Website, auf der Sie gehostet werden, herrühren.

#### 1.1 - Überprüfen Sie den Zustand Ihrer OVHcloud Dienste

Um sicherzustellen, dass Ihre Dienste (Shared Hosting **und*** Datenbank) nicht gewartet oder beeinträchtigt werden, holen Sie die Cluster-Informationen und Datenbankdaten auf und verschwinden Sie von Ihrem Shared Hosting sowie die allgemeinen Informationen zu Ihrer Datenbank. Anschließend können Sie ihren Status auf [status.ovhcloud.com](https://web-cloud.status-ovhcloud.com/) überprüfen.

Um den Cluster zu sehen und zu verfolgen, wo sich Ihr Shared Hosting befindet, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Im Tab `Allgemeine Informationen`{.action} können Sie den entsprechenden `Rechenzentrum` Ihres Shared Hostings analysieren und dort den entsprechenden `filer` durchsuchen.

![Filer abrufen](images/DropFilerCluster1.png){.thumbnail}

Klicken Sie anschließend auf den Tab `Multisites`{.action}, um die Cluster-Nummer zu ermitteln, in der sich Ihr Shared Hosting befindet.

![Cluster abrufen](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> Wenn auf der Infrastruktur Ihres Shared Hostings eine Störung oder Wartung gemeldet wird, folgen Sie diesen bis zur Behebung durch unsere Administratoren. **Auf Ihrer Ebene sind keine weiteren Aktionen erforderlich**.
>
> Sie können sich bei Ihrer E-Mail-Adresse in der Störungs- oder Wartungsmeldung anmelden, um per E-Mail über den Fortschritt des Vorgangs benachrichtigt zu werden.
>
> Sobald der Störungs- oder Wartungsstatus als **behoben** gekennzeichnet ist, kann es zur Stabilisierung der akkumulierten Last nach der Abwicklungsbenachrichtigung bis zu **3 Stunden** dauern, bis die Störung vollständig behoben ist.
>

Wenn keine Störungen oder Wartungsarbeiten gemeldet werden, gehen Sie mit Ihrer Diagnose fort.

#### 1.2 - Testen Sie die Seite auf mehreren Geräten

Testen Sie Ihre Website mit einem anderen Gerät/Computer und anschließend über einen anderen Internetzugangspunkt. Bei jedem Versuch leeren Sie den Cache Ihres Browsers, damit Ihre Website direkt über das Webhosting geladen wird.

#### 1.3 - Testen Sie das Hosting mit einer von Ihrer Webseite unabhängigen Datei

Legen Sie im Wurzelverzeichnis Ihrer Website im[FTP-Speicherplatz Ihres Shared Hostings](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) eine Datei mit dem Namen phpinfo.php` auf.

Geben Sie in diese Datei folgenden Code ein:

```bash
<?php
phpinfo();
>
```

> [!warning]
>
> In bestimmten Fällen können die Dateien "**.htaccess**"in Verzeichnissen/Ordnern, die vor oder auf derselben Ebene wie der Ort, an dem Sie Ihre Datei "**phpinfo.php**"angelegt haben, die Anzeige des "**phpinfo.php**"im Webbrowser beeinflussen. 
>
> Änderungen an einer Datei "**.htaccess**" können Auswirkungen auf die Anzeige Ihrer Website haben. Wenden Sie sich an [spezialisierter Dienstleister](https://partner.ovhcloud.com/de/), wenn Sie Schwierigkeiten haben, Folgendes zu tun.
>
> Wenn er nicht angezeigt wird und **nur für erfahrene Benutzer**, benennen Sie Ihre Dateien "**.htaccess**" in "***.htaccess_OLD**", damit der Server sie nicht mehr während Ihres Tests ausführt. Benennen Sie diese nach Ihrer Diagnose korrekt.
>

**Beispiel**: Wenn der Domainname für den Zugang zu Ihrer Website "domain.tld"ist und die Datei "**phpinfo.php**"auf der Wurzel Ihrer Website platziert wurde, dann ist diese über folgende URL verfügbar: `http://domain.tld/phpinfo.php` (oder: `https://domain.tld/phpinfo.php`)

> [!primary]
>
> Wenn der Aufruf der Datei "**phpinfo.php**" eine Konfigurationstabelle **augenblicklich** anzeigt, bedeutet dies, dass die Verzögerungen nicht vom Shared Hosting Ihrer Website herrühren. Andernfalls wird diese Datei genauso langsam wie Ihre anderen Seiten angezeigt. 
>
> Mit anderen Worten: Wenn Langsamkeit nur auf einem Teil der Seiten oder des Inhalts Ihrer Website auftritt, bedeutet dies, dass das Shared Hosting **nicht die Ursache für Langsamkeit** auf Ihrer Website ist.
>

#### 1.4 - Testen Sie die Konnektivität Ihrer Datenbank:

Loggen Sie sich in Ihrer Datenbank ein und folgen Sie **Schritt 3** unserer Anleitung zur [Erstellung einer Shared Hosting Datenbank](https://docs.ovh.com/de/hosting/datenbank-erstellen/).

Wenn Sie eine Datenbank für ein Angebot **CloudDB** verwenden, lesen Sie unsere Anleitung zu [Verbindung zu Ihrer Datenbank auf einem Cloud DB Angebot](https://docs.ovh.com/de/clouddb/datenbank-verbindung-auf-bdd/).

Wenn die Verbindung erfolgreich ist, gehen Sie auf folgendes Interface:

![PHPMyAdmin](images/pma.png){.thumbnail}

> [!warning]
>
> Falls Sie einen Fehler feststellen, lesen Sie unsere Anleitung zu [aktuellen Datenbankabfällen](https://docs.ovh.com/de/hosting/datenbanken-fehler-beheben/). Loggen Sie sich mithilfe der obigen Anleitung ein, um Ihre Situation zu korrigieren, und versuchen Sie dann, sich erneut mit Ihrer Datenbank zu verbinden.
>

#### 1.5 - Auswertung der durchgeführten Diagnosen

**Fall Nr. 1**

Folgende Angaben gelten für Ihre Situation **alle**:

- mindestens eine Seite, ein Skript oder eine Datei (einschließlich der Datei "**phpinfo.php**") wurde bei den Tests in Schritt 1 schnell geladen;
- Die Verbindung zu Ihrer Datenbank wurde bei den Tests in Schritt 1 korrekt hergestellt.

> Das bedeutet, dass die Langsamkeit, mit der Sie konfrontiert sind, direkt aus den Skripten Ihrer Website herrührt. Sie können direkt zu [Schritt 2](#step2) wechseln, um den Optimierungsratschlägen zur Lösung Ihrer Situation zu folgen.

**Fall Nr. 2**

Folgende Angaben gelten für Ihre Situation **alle**:

- **Es werden vor weniger als drei Stunden keine Störungen und Wartungsarbeiten** gemeldet oder als **resolus*** gemeldet, für Ihre Webhosting-Dienste auf unserer Website [status-ovhcloud.com](https://web-cloud.status-ovhcloud.com/).
- Das unten aufgeführte **Fall Nr. 1*** entspricht nicht Ihrer Konfiguration.

> OVHcloud Untersuchungen sind erforderlich. Kontaktieren Sie unsere Support-Dienste für Web-Lösungen, damit diese mit Ihnen den Ursprung der Verlangsamungen, auf die Sie stoßen, bestätigen.

### Schritt 2 - identifizieren Sie die Quelle(n), die Verzögerungen auf Ihrer Webseite <a name="step2"></a> erzeugt

An diesem Punkt wissen Sie jetzt, dass Verlangsamungen durch die Seiten/Skripte/Dateien verursacht werden, aus denen Ihre Website besteht.

> [!warning]
>
> Wenn Sie Schwierigkeiten haben, die folgenden Aktionen durchzuführen, können Sie einen unserer [Fachdienstleister](https://partner.ovhcloud.com/de/) kontaktieren. OVHcloud wird keine Unterstützung bei der Entwicklung und/oder Optimierung des Inhalts Ihrer Website bieten.
>

Im Folgenden finden Sie die notwendigen Aktionen, um die Quelle(n) der Langsamkeit zu ermitteln und Ihre Website zu optimieren.

#### 2.1 - Überprüfen Sie die Konfiguration Ihres Webhostings

Überprüfen Sie die auf Ihrem Webhosting verwendete PHP-Engine, PHP-Version und Ausführungsumgebung. Lesen Sie hierzu unsere Anleitung zur [Konfiguration Ihres Webhostings](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/).

Wenn Sie auf Ihrem Webhosting eine überholte PHP-Version verwenden, die Engine "**PHP CGI**" und/oder die Umgebung "**legacy**" und **Wenn Ihre Website kompatibel ist**, bevorzugen Sie die Verwendung der Engine "**PHP**"(PHP FPM) "**stable64**" mit der aktuellsten PHP-Version.

Um die verfügbaren PHP-Versionen je nach verwendeter Ausführungsumgebung zu vergleichen, lesen Sie **Schritt 2** der Anleitung zur [Konfiguration der PHP-Version auf Ihrem Hosting](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/).

Die Verwendung einer aktuellen PHP-Version, die Ausführungsumgebung "**stable**" oder "**stable64**" mit der Engine "**PHP**" (PHP FPM) macht Ihre Website viel flüssiger und schneller. Zur Information: Der Motor "**PHP**" (PHP FPM) kann bis zu 50 Mal leistungsfähiger sein als der Motor "**PHP CGI**", um seine Aufgaben auszuführen.

#### 2.2 - Analysieren Sie die ausgehenden Verbindungen / TCP Verbindungen, die von Ihrem Webhosting erstellt wurden

Ausgehende Verbindungen sind sehr ressourcenintensiv. Wenn diese Kenntnisse zahlreich sind, wenn sie nicht korrekt ausgeführt werden oder wenn sie zu lange aktiv sind, monopolistisch an Ihrem Webhosting, dass es nicht mehr genügend Ressourcen gibt, um den Rest Ihrer Website normal zu betreiben. 

Dies führt zu Verlangsamungen oder sogar zu "504 gateway timeout"-Codes.

Um die ausgehenden Verbindungen Ihres Hostings zu analysieren, lesen Sie dessen Logs **OUT**. Weitere Informationen finden Sie in unserer Dokumentation zu [Logs Ihres Hostings einsehen](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/).

Wenn Sie feststellen, dass viele ausgehende Verbindungen auf Ihrem Hosting vorhanden sind, vergleichen Sie Ihre Logs **OUT** mit Ihren Logs **WEB** mithilfe des Zeitstempels dieser Logs. So können Sie das Skript/die Skripte identifizieren, die für diese Situation verantwortlich sind.

Wenn Sie ein Content Management System (CMS) wie WordPress, Joomla!, PrestaShop oder Drupal verwenden, identifizieren Sie die Plugin(s) und/oder das Thema, das diesen ausgehenden Verbindungsfluss erzeugt.

#### 2.3 - Analysieren Sie den Fluss der HTTP Anfragen zu Ihrem Webhosting:

Lesen Sie hierzu die Logs **WEB** Ihres Webhostings unter Verwendung unserer Anleitung auf [Die Logs Ihres Webhostings einsehen](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/).

Die ressourcenintensivsten Anfragen sind HTTP-Anfragen vom Typ **POST** und danach die vom Typ **PUT**. Diese führen jeweils Änderungen und Einfügungen durch.

HTTP-Anfragen vom Typ **GET** laden Sie lediglich die Elemente auf Ihrem Hosting herunter, um sie in Ihrem Webbrowser anzuzeigen. Sie sind in der Regel ressourcenschonend. Sie können jedoch Verlangsamungen verursachen, wenn mehrere Hundert davon pro Sekunde über mehrere Minuten angefordert werden.

Wenn Sie in Ihren Logs eine der folgenden Situationen feststellen:

- Anfragen vom Typ **POST** oder **PUT** werden mehrmals pro Minute und permanent durchgeführt.
- Anfragen **POST** oder **PUT** werden mehrmals pro Minute in einer einzigen Datei ausgeführt.

Identifizieren und optimieren Sie das betreffende Skript/die betreffende Datei, um den HTTP-Abfragestrom zu reduzieren.

Je weniger Anfragen es gibt, desto weniger werden die Ressourcen für Ihr Shared Hosting beansprucht.

> [!success]
>
> Um die langen Elemente zu identifizieren, die auf einer Seite Ihrer Website geladen werden müssen, können Sie zum Beispiel eine Netzwerkanalyse mit dem Browser durchführen **Firefox**. 
>
> Klicken Sie hierzu auf die Taste `F12`, wenn Sie sich in Ihrem Firefox Browser befinden, und wählen Sie dann den Tab `Netzwerk` aus. Laden Sie Ihre Webseite mithilfe der ermittelten `Ctrl + Maj + R` Tasten neu, damit das Tool die für das Laden Ihrer Seite durchgeführten Anfragen anzeigt. Identifizieren Sie die längsten Elemente, die geladen werden müssen, um diese anschließend zu optimieren.
>
>![Firefox Netzwerk-Analyse](images/F12.png){.thumbnail}
>

Um den Abfragefluss für jedes Ladesystem Ihrer Seiten zu reduzieren, können Sie auch ein Content Delivery Network (CDN) einrichten. So können Sie den statischen Inhalt Ihrer Website in den Cache legen. Ihr Webhosting wird weniger beansprucht und verfügt über mehr Ressourcen für die Bearbeitung der übrigen Anfragen, die nicht in den Cache gelegt werden können.

> [!primary]
>
> OVHcloud bietet mehrere [CDN Angebote](https://www.ovhcloud.com/de/web-hosting/options/). Wenn Sie eine für Ihr Webhosting aktivieren möchten, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und lesen Sie unsere Anleitung zu [Verwendung des OVHcloud CDN](https://docs.ovh.com/de/hosting/verwendung_des_geocache_boosters_auf_einem_webhosting/).
>

#### 2.4 - Optimieren Sie Ihre Datenbank

> [!warning]
>
> Die Aktionen, die Sie in Ihrer Datenbank durchführen, können irreversible Folgen haben, wenn sie nicht systematisch und korrekt durchgeführt werden. Wenden Sie sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/), wenn Sie sich nicht sicher sind, welche Maßnahmen ergriffen werden sollen. 
>

Überprüfen Sie, ob eine große Anzahl an Anfragen an Ihre Datenbank durchgeführt wird.<br>
Diese Situation kann zu einer Überbeanspruchung führen und zu Verzögerungen oder sogar zu "504 Gateway Timeout"-Codes führen.

Überprüfen Sie auch die Größe Ihrer Tabellen in Ihrer Datenbank.<br>
Wenn ein Tisch regelmäßig aufgerufen wird und umfangreich ist, kann die Ladung des Tisches langsamer erfolgen und zu langsamen Abfragen führen.<br>
Die Akkumulation dieser langsamen Anfragen kann zu einer Verlangsamung des Zugriffs auf die Website oder sogar zu einem "504 Gateway Timeout"-Code führen.

Wenn Sie umfangreiche Tabellen oder Abfrageströme auf der Basis von Datenbankdaten haben, optimieren Sie Ihre Tabellen und stellen Sie Lösungen zur Reduzierung der Abfrageströme zu Ihrer Datenbank bereit.

Wenn Sie feststellen, dass ungenutzte oder veraltete Daten in Ihrer Datenbank vorhanden sind, reinigen Sie diese, um die tägliche Performance zu verbessern.

#### 2.5 - Optimieren Sie Ihre Images

Wenn beispielsweise auf Ihrer Website ein Bild in der Auflösung "1000x2000"vorhanden ist und diese maximal 100x200 Pixel auf der Seite Ihrer Website anzeigt, führt dies zu einem Ressourcenverbrauch auf der Hosting-Seite, der optimiert werden kann.

Der Server muss das Image skalieren, um es dann auf der gewünschten Größe auf der Website anzuzeigen.

Wenn Ihre Website viele Images enthält, kann dies einen beträchtlichen Ressourcenverbrauch auf der Ebene der Ihrem Hosting zugewiesenen Ressourcen bedeuten.

Passen Sie alle Ihre Images an, um den Ressourcenverbrauch möglichst gering zu halten.

#### 2.6 - Optimieren Sie den Rest Ihrer Webseite

Lesen Sie unsere Anleitung zur [Optimierung der Performance für Ihre Website](https://docs.ovh.com/de/hosting/webhosting_optimierung_der_performance_ihrer_webseite/).

Sie können Optimierungsmöglichkeiten für Ihre Website finden, indem Sie diese auf [gtmetrix.com](https://gtmetrix.com){.external} analysieren (diese Website ist nicht bei OVHcloud verfügbar).

> [!success]
>
> Unabhängig von den Verzögerungen wird Ihre Website umso besser optimiert, je besser auch ihre natürliche Referenzierung in den Suchmaschinen erfolgt.

### Fazit

Wenn Ihr Webhosting und Ihre Datenbank ** nicht betroffen sind und Ihre Website trotz der Umsetzung von **alle Schritte** in dieser Anleitung weiterhin langsam ist, bedeutet dies wahrscheinlich, dass das Angebot, das Sie für das Hosting Ihrer Website verwenden, nicht oder nicht mehr Ihren Bedürfnissen entspricht. 

Sie können eine höhere [Shared Hosting Angebot](https://www.ovhcloud.com/de/web-hosting/) oder eine dedizierte Infrastruktur wie einen [Virtual Private Server (VPS)](https://www.ovhcloud.com/de/vps/) oder einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Betracht ziehen. 

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
