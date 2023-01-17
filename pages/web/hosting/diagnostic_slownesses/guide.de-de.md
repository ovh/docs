---
title: "Meine Website lädt zu langsam. Was soll ich tun?" 
excerpt: "Ermitteln Sie den Ursprung der Ladezeiten Ihrer Website und erfahren Sie, wie Sie diese Situation verbessern"
slug: slow-website-fix
section: Diagnose
order: 01
---

**Letzte Aktualisierung am 01.03.2023**
 
> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>
  
## Ziel

Eine Verlangsamung Ihrer Website ist das Ergebnis einer zu langen Ladezeit, um alle oder einige Elemente Ihrer Website anzuzeigen. 

Ist die Ladezeit zu lang, kann die Browser-Anfrage die maximale Ausführungsdauer erreichen, die der Hosting-Server erlaubt. In diesem Fall gibt der Server den Code **504 Gateway Timeout** zurück, um den Besucher darauf hinzuweisen, dass die Variable `max_execution_time` erreicht wurde, was auch die Ausführung der angeforderten Anfrage stoppt.

Eine Verlangsamung hat zwei Ursachen:

- Überlastung der Shared Hosting Infrastruktur, auf der Ihre Website gehostet ist
- Eine Anfrage, die zu lang oder zu umfangreich ist, um auf der Shared Hosting Infrastruktur Ihrer Website ausgeführt zu werden. 

Die überwiegende Mehrheit an Geschwindigkeitsverlusten wird von der Website und nicht vom Webhosting verursacht. Wir haben diese Anleitung erstellt, um Ihnen in dieser Situation bestmöglich zu helfen.

In seltenen Fällen können die Verzögerungen bei der Anzeige auch mit Ihrem Internetprovider oder mit einer zu geringen Bandbreite der Internetverbindung zusammenhängen. Überprüfen Sie Ihre Netzwerkkonnektivität **bevor** Sie Ihre Diagnosen fortsetzen.

**Diese Anleitung erklärt, wie Sie die Ursache der Verzögerungen bei Ihrer Website feststellen und entsprechend handeln.**

> [!primary]
>
> Falls sich **nach Abschluss aller in dieser Anleitung aufgeführten Diagnosen** herausstellt, dass die Verlangsamung von unserer Hosting-Infrastruktur ausgeht, möchten wir Sie daran erinnern, dass diese von mehreren Benutzern gemeinsam verwendet wird.
>
> Die Nutzer teilen sich die Ressourcen der Hosting-Infrastruktur, um ihre Websites zu betreiben. Wenn eine davon die Infrastruktur überfordert, kann dies Auswirkungen auf andere Dienste auf derselben Infrastruktur haben.
>
> Unsere Webhostings verfügen nicht über ein "Service Level Agreement" (SLA).
>
> Wenn Sie einen Dienst mit einer Verfügbarkeitsgarantie von mehr als 99% benötigen, empfehlen wir die Verwendung eines [Virtual Private Server (VPS)](https://www.ovhcloud.com/de/vps/) oder eines [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).
>
> Darüber hinaus wird die Performance der Hosting-Infrastruktur von OVHcloud permanent überwacht. Damit wird eine generell hohe Verfügbarkeit und gegebenenfalls eine schnelle Wiederherstellung Ihrer Dienste im Falle einer Überlastung sichergestellt.
>

## Voraussetzungen

- Sie hosten eine Website auf einem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## Voraussetzungen

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren oder Ihre Fragen in der OVHcloud Community zu stellen. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten, sofern die **Ausfälle nicht auf Ebene der Hosting-Infrastruktur verursacht werden**. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>


> [!success]
>
> Wir empfehlen Ihnen, die Ergebnisse Ihrer Diagnosen festzuhalten, während Sie dieser Anleitung folgen. Diese Daten werden für Verbesserungsmaßnahmen nützlich sein, unabhängig von der Ursache der Langsamkeit.
>

### Verständnis des Konzepts "Time To First Byte" (TTFB)

Die *Time To First Byte* (TTFB) ist die Dauer, die Ihr Webhosting benötigt, um das erste Datenbyte nach einer Anfrage an Ihren Webbrowser zu übertragen, um Ihre Website anzuzeigen.

Wenn es keine Überlastung der Hosting-Infrastruktur gibt und Ihre Website maximal optimiert ist, beträgt die TTFB weniger als 800 ms.

**Hohe TTFB bedeutet nicht automatisch, dass die Verlangsamung von Ihrem Hosting Dienst ausgeht.**

Bei Content Managment System (CMS) wie WordPress, Joomla!, PrestaShop oder Drupal kann die im Webbrowser aufgerufene Seite intern zusätzliche Anfragen auf Ihrem Hosting erzeugen. Das Webhosting antwortet dem Browser nicht, bis diese internen Anfragen abgeschlossen sind.

> **Beispiel**:
>
> Ihr Webbrowser soll die Startseite Ihrer Website anzeigen. Die Anfrage wird daher standardmäßig die Datei **index.php** Ihrer Website aufrufen.
>
> Sobald die Anfrage bei der Datei **index.php** ankommt, wird sie vom Webserver Ihres Webhostings ausgeführt. 
>
> Bei der Ausführung muss die Datei **index.php** Informationen aus anderen Dateien Ihrer Website oder sogar aus Elementen Ihrer Datenbank abrufen. 
>
> Jede dieser Anfragen generiert interne Abfragen auf Ihrem Hosting-Dienst. 
>
> Die Datei **index.php** wartet ab, bis alle intern angeforderten Abfragen vorliegen, **bevor** das erste Datenbyte an Ihren Browser geliefert wird.
>
> Wenn die **index.php** langsame oder umfangreiche Anfragen generiert, wird die TTFB hoch sein und Ihre Website benötigt mehrere Sekunden, um angezeigt zu werden. Die Performance des Webhostings ist also nicht dafür verantwortlich.

Mit Online-Diagnosewerkzeugen können Sie die TTFB Ihres Hostings ermitteln. Die meisten von ihnen agieren jedoch als Webbrowser, sodass die Ergebnisse relativiert werden müssen.<br>
Diese Tools sind nicht in der Lage, die internen Anfragen zu berücksichtigen, die von der im Browser angefragten Datei ausgeführt werden, wie am Beispiel der **index.php** erklärt.

### Schritt 1 - Ermitteln, ob die Langsamkeit vom Hosting oder von Ihrer Website ausgeht

Im ersten Schritt können Sie feststellen, wo die Verzögerungen entstehen:

- Von der Website selbst, aufgrund ihrer internen Funktionsweise.
- Von der Hosting-Infrastruktur, auf der sich Ihre Website befindet.

Alle Diagnosen in Schritt 1 sind **ausnahmslos** durchzuführen, um festzustellen, ob die Verlangsamungen von Ihrem Webhosting oder von der Website stammen.

#### 1.1 - Überprüfen Sie den Zustand Ihrer OVHcloud Dienste

Um sicherzustellen, dass Ihre Dienste (Webhosting **und** Datenbank) derzeit von keiner Störung oder Wartung beeinträchtigt werden, benötigen Sie die Cluster- und Filer-Nummer des Hostings sowie die allgemeinen Daten zur entsprechenden Datenbank. Damit können Sie den Status auf [status.ovhcloud.com](https://web-cloud.status-ovhcloud.com/) überprüfen.

Um Cluster und Filer Ihres Webhostings zu ermitteln, loggen Sie sich in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein, gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Im Tab `Allgemeine Informationen`{.action} können Sie `Rechenzentrum` und `Filer` des Webhostings einsehen.

![Filer abrufen](images/DropFilerCluster1.png){.thumbnail}

Klicken Sie anschließend auf den Tab `Multisite`{.action}, um die Cluster-Nummer Ihres Hostings zu ermitteln.

![Cluster abrufen](images/DropFilerCluster2.png){.thumbnail}

> [!success]
>
> Wenn auf der Infrastruktur Ihres Webhostings eine Störung oder Wartung gemeldet wurde, warten Sie auf die Behebung durch unsere Administratoren. **Ihrerseits sind keine weiteren Aktionen erforderlich**.
>
> Sie können mit Ihrer E-Mail-Adresse die Update-Meldungen zur Störung oder Wartung abonnieren, um über den Fortschritt der Arbeiten benachrichtigt zu werden.
>
> Sobald der Störungs- oder Wartungsstatus als **resolved** gekennzeichnet ist, kann es bis zur Stabilisierung der akkumulierten Belastung maximal **3 Stunden** dauern.
>

Wenn keine Störungen oder Wartungsarbeiten aktiv sind, fahren Sie mit Ihrer Diagnose fort.

#### 1.2 - Testen Sie die Seite auf mehreren Geräten

Testen Sie Ihre Website mit einem anderen Gerät/Computer und anschließend über einen anderen Internetzugangspunkt. Bei jedem Versuch leeren Sie den Cache Ihres Browsers, damit Ihre Website direkt über das Webhosting geladen wird.

#### 1.3 - Testen Sie das Hosting mit einer von Ihrer Webseite unabhängigen Datei

Legen Sie im Wurzelverzeichnis Ihrer Website auf dem [FTP-Speicherplatz Ihres Webhostings](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/) eine Datei mit dem Namen **phpinfo.php** an.

Geben Sie folgenden Code in diese Datei ein:

```bash
<?php
phpinfo();
>
```

> [!warning]
>
> In manchen Fällen können **.htaccess** Dateien in Ordnern, die sich auf derselben Ebene oder höher wie Ihre **phpinfo.php** befinden, die Anzeige von **phpinfo.php** im Webbrowser beeinträchtigen. 
>
> Änderungen an einer **.htaccess** können Auswirkungen auf die korrekte Anzeige Ihrer Website haben. Wenden Sie sich an [spezialisierter Dienstleister](https://partner.ovhcloud.com/de/directory/), wenn Sie Schwierigkeiten haben, die folgenden Maßnahmen durchzuführen.
>
> **Als sachkundiger Nutzer** benennen Sie in diesem Fall Ihre **.htaccess** in **.htaccess_OLD** um, damit der Server sie nicht mehr während Ihres Tests ausführt. Benennen Sie die Datei(en) nach Ihrer Diagnose wieder korrekt.
>

**Beispiel**: Wenn der Domainname für den Zugang zu Ihrer Website "domain.tld" ist und die Datei **phpinfo.php** im Wurzelverzeichnis Ihrer Website (*document root*) platziert wurde, dann ist diese über folgende URL verfügbar: `http://domain.tld/phpinfo.php` (oder: `https://domain.tld/phpinfo.php`)

> [!primary]
>
> Wenn der Aufruf der Datei **phpinfo.php** die Konfigurationstabelle **unverzögert** anzeigt, bedeutet dies, dass die Verlangsamung nicht vom Hosting ausgeht. Andernfalls wird diese Datei genauso langsam wie Ihre anderen Seiten angezeigt.
>
> Mit anderen Worten: Wenn Langsamkeit nur auf einem Teil der Seiten oder des Inhalts Ihrer Website auftritt, bedeutet dies, dass das Hosting **nicht die Ursache für Verzögerungen** auf Ihrer Website ist.
>

#### 1.4 - Testen Sie die Konnektivität Ihrer Datenbank

Loggen Sie sich in Ihrer Datenbank ein, indem Sie **Schritt 3** unserer [Anleitung zu Webhosting-Datenbanken](https://docs.ovh.com/de/hosting/datenbank-erstellen/) befolgen.

Wenn Sie eine Datenbank mit **Web Cloud Databases** nutzen, lesen Sie unsere Anleitung zur [Datenbankverbindung mit Web Cloud Databases](https://docs.ovh.com/de/clouddb/datenbank-verbindung-auf-bdd/).

Wenn die Verbindung erfolgreich war, gelangen Sie auf folgendes Interface:

![PHPMyAdmin](images/pma.png){.thumbnail}

> [!warning]
>
> Falls Sie einen Fehler feststellen, lesen Sie unsere [Anleitung zur Behebung von Datenbankfehlern](https://docs.ovh.com/de/hosting/datenbanken-fehler-beheben/). Loggen Sie sich nach der Fehlerbehebung erneut ein.
>

#### 1.5 - Auswertung der durchgeführten Diagnosen

**Fall 1**

**Alle** nachfolgenden Angaben treffen zu:

- Mindestens eine Seite, ein Skript oder eine Datei (einschließlich der Datei **phpinfo.php**) wurde bei den Tests in Schritt 1 schnell geladen.
- Die Verbindung zu Ihrer Datenbank wurde bei den Tests in Schritt 1 korrekt hergestellt.

> Das bedeutet, dass die Verlangsamung direkt mit den Skripten Ihrer Website zusammnhängt. Sie können zu [Schritt 2](#step2) übergehen, um den Optimierungsratschlägen zur Verbesserung dieser Situation zu folgen.

**Fall 2**

**Alle** nachfolgenden Angaben treffen zu:

- Es gibt keine Meldungen auf [status-ovhcloud.com](https://web-cloud.status-ovhcloud.com/) über **Störungen oder Wartungsarbeiten** für Ihr Webhosting, aktiv oder innerhalb der letzten drei Stunden als *resolved* markiert.
- **Fall 1*** trifft auf Ihre Konfiguration nicht zu.

> Weitere Untersuchungen seitens OVHcloud sind erforderlich. Kontaktieren Sie unseren Support für Web Cloud, um die Verlangsamungen zu bestätigen.

### Schritt 2 - Identifizieren Sie die Quelle der Verzögerungen auf Ihrer Webseite <a name="step2"></a>

An dieser Stelle sollte eindeutig sein, dass Verlangsamungen von Seiten/Skripte/Dateien verursacht werden, aus denen Ihre Website besteht.

> [!warning]
>
> Wenn Sie Schwierigkeiten haben, die folgenden Aktionen durchzuführen, können Sie einen [sachverständigen Partner](https://partner.ovhcloud.com/de/directory/) kontaktieren. OVHcloud kann keine Unterstützung bei der Entwicklung oder Optimierung Ihrer Website anbieten.
>

Im Folgenden finden Sie die notwendigen Aktionen, um die Quelle(n) der Langsamkeit zu ermitteln und Ihre Website zu optimieren.

#### 2.1 - Überprüfen Sie die Konfiguration Ihres Webhostings

Überprüfen Sie die auf Ihrem Webhosting verwendete PHP-Engine, PHP-Version und Ausführungsumgebung. Lesen Sie hierzu unsere Anleitung zur [Konfiguration Ihres Webhostings](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/).

Wenn Sie auf Ihrem Webhosting eine überholte PHP-Version einsetzen, sowie die Engine **PHP CGI** und/oder die Umgebung **legacy** und **wenn Ihre Website kompatibel ist**, verwenden Sie die Engine **PHP** (PHP FPM) mit **stable64** und die aktuellste PHP-Version.

Um die verfügbaren PHP-Versionen je nach Ausführungsumgebung zu vergleichen, lesen Sie **Schritt 2** der Anleitung zur [Konfiguration der PHP-Version auf Ihrem Hosting](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/).

Die Verwendung einer aktuellen PHP-Version, die Ausführungsumgebung **stable** oder **stable64** mit der Engine **PHP** (PHP FPM) macht Ihre Website deutlich flüssiger und schneller. Zur Information: Die Engine **PHP** (PHP FPM) kann bis zu 50 Mal leistungsfähiger bei Auführungen sein als die Engine **PHP CGI**.

#### 2.2 - Analysieren Sie ausgehende Verbindungen / TCP Verbindungen von Ihrem Webhosting

Ausgehende Verbindungen sind sehr ressourcenintensiv. Wenn diese Verbindungen sich häufen, nicht korrekt ausgeführt werden oder wenn sie zu lange aktiv sind, beanspruchen sie so viele Ressourcen auf Ihrem Webhosting, dass es es für den Normalbetrieb Ihrer Website nicht mehr ausreicht. 

Dies führt zu Verlangsamungen oder sogar zu **504 Gateway Timeout** Codes.

Um die ausgehenden Verbindungen Ihres Hostings zu analysieren, analysieren Sie dessen Logs vom Typ **OUT**. Weitere Informationen finden Sie in unserer Dokumentation zur [Verwendung von Hosting-Logs](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/).

Wenn Sie feststellen, dass viele ausgehende Verbindungen auf Ihrem Hosting vorhanden sind, vergleichen Sie in den Logs **OUT** mit **WEB** anhand des Zeitstempels dieser Logs. So können Sie Skripte identifizieren, die für diese Situation verantwortlich sind.

Wenn Sie ein Content Management System (CMS) wie WordPress, Joomla!, PrestaShop oder Drupal verwenden, identifizieren Sie installierte Plugin(s) und das Theme, um herauszufinden, was die ausgehenden Verbindungen verursacht.

#### 2.3 - Analysieren Sie die eingehenden HTTP Anfragen Ihres Webhostings

Lesen Sie hierzu die Logs vom Typ **WEB** Ihres Webhostings unter Verwendung unserer Anleitung: [Die Logs Ihres Webhostings einsehen](https://docs.ovh.com/de/hosting/webhosting_die_statistiken_und_logs_meiner_website_einsehen/).

Die ressourcenintensivsten Anfragen sind HTTP-Anfragen vom Typ **POST**, gefolgt von **PUT**. Diese führen jeweils Änderungen und Einfügungen durch.

HTTP-Anfragen vom Typ **GET** laden lediglich Elemente auf Ihrem Hosting, um sie im Webbrowser anzuzeigen. Sie sind in der Regel nicht ressourcenintensiv. Sie können jedoch Verlangsamungen verursachen, wenn mehrere Hundert davon pro Sekunde über mehrere Minuten angefordert werden.

Achten Sie in Ihren Logs insbesondere auf folgende Situationen:

- Anfragen vom Typ **POST** oder **PUT** werden mehrmals pro Minute und permanent durchgeführt.
- Anfragen **POST** oder **PUT** werden mehrmals pro Minute für nur eine Datei ausgeführt.

Wenn eine dieser Auffälligkeiten zutrifft, identifizieren und optimieren Sie das betreffende Skript/die betreffende Datei, um die Flut von HTTP-Abfragen zu reduzieren.

Je weniger Anfragen es gibt, desto weniger werden die Ressourcen für Ihr Hosting beansprucht.

> [!success]
>
> Um Elemente zu identifizieren, die auf einer Seite Ihrer Website langsam geladen werden, können Sie zum Beispiel eine Netzwerkanalyse mit dem **Firefox** Browser durchführen. 
>
> Klicken Sie hierzu auf die Taste `F12` im Browserfenster und wählen Sie dann den Tab `Netzwerk` aus. Laden Sie Ihre Webseite neu idem Sie `Ctrl + Shift + R` drücken. Das Tool listet die beim Laden Ihrer Seite durchgeführten Anfragen auf. Identifizieren Sie die Elemente, deren Aufruf Ladezeit erzeugt, um diese anschließend zu optimieren.
>
>![Firefox Netzwerk-Analyse](images/F12.png){.thumbnail}
>

Um das Aufkommen an Abfragen für jeden Seitenaufbau zu reduzieren, können Sie auch ein Content Delivery Network (CDN) einsetzen. Es legt den statischen Inhalt Ihrer Website im Cache ab. Ihr Webhosting wird somit weniger beansprucht und verfügt über mehr Ressourcen für die Bearbeitung der übrigen Anfragen, die nicht für den Cache geeignet sind.

> [!primary]
>
> OVHcloud bietet mehrere [CDN-Optionen](https://www.ovhcloud.com/de/web-hosting/options/) an. Wenn Sie CDN für Ihr Webhosting aktivieren möchten, loggen Sie sich in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und folgen Sie unserer Anleitung zur [Verwendung des OVHcloud CDN](https://docs.ovh.com/de/hosting/verwendung_des_geocache_boosters_auf_einem_webhosting/).
>

#### 2.4 - Optimieren Sie Ihre Datenbank

> [!warning]
>
> Änderungen in Ihrer Datenbank können irreversible Folgen haben, wenn sie nicht systematisch und korrekt durchgeführt werden. Wenden Sie sich an einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/), falls Sie sich der geeigneten Maßnahmen nicht sicher sind. 
>

Überprüfen Sie, ob eine große Anzahl an Anfragen an Ihre Datenbank erfolgt.<br>
Diese Situation kann zu einer Überbeanspruchung führen und damit zu Verzögerungen oder sogar zum Fehler **504 Gateway Timeout**.

Überprüfen Sie auch die Größe der Tabellen in Ihrer Datenbank.<br>
Wenn eine Tabelle regelmäßig aufgerufen wird und umfangreich ist, kann der Aufruf langsamer erfolgen und zu langsamen Abfragen führen.<br>
Die Akkumulation dieser langsamen Anfragen kann zu einer Verzögerung beim Zugriff auf die Website oder sogar zu einem **504 Gateway Timeout** führen.

Wenn Sie umfangreiche Tabellen oder massenhafte Abfragen von Datenbankdaten haben, optimieren Sie Ihre Tabellen und ergreifen Sie Maßnahmen zur Reduzierung von Abfragen in Ihrer Datenbank.

Wenn Sie feststellen, dass ungenutzte oder veraltete Daten in Ihrer Datenbank vorhanden sind, bereinigen Sie diese, um die tägliche Performance zu verbessern.

#### 2.5 - Optimieren Sie Ihre Bilddateien

Wenn auf Ihrem Hosting beispielsweise ein Bild in der Auflösung 1000x2000 abgelegt ist und die Website es mit maximal 100x200 Pixeln auf der entsprechenden Seite anzeigt, führt dies zu einem Ressourcenverbrauch auf dem Hosting, der optimiert werden kann.

Der Server muss das Bild skalieren, um es dann auf der gewünschten Größe auf der Website anzuzeigen.

Wenn Ihre Website viele Bilder enthält, kann dies einen beträchtlichen Verbrauch der Ihrem Hosting zugewiesenen Ressourcen bedeuten.

Passen Sie alle Ihre Bilddateien an, um den Ressourcenverbrauch möglichst gering zu halten.

#### 2.6 - Optimieren Sie den Rest Ihrer Webseite

Lesen Sie auch unsere Anleitung zur [Optimierung der Performance Ihrer Website](https://docs.ovh.com/de/hosting/webhosting_optimierung_der_performance_ihrer_webseite/).

Sie können weitere Optimierungsmöglichkeiten für Ihre Website finden, indem Sie diese auf [gtmetrix.com](https://gtmetrix.com){.external} analysieren lassen. (Dieses externe Tool hat keine geschäftliche Verbindung zu OVHcloud).

> [!success]
>
> Unabhängig von der Ladegeschwindigkeit führt das Optimieren Ihrer Website zu einem verbesserten Ranking in Suchmaschinen (SEO).

### Fazit

Wenn Ihr Webhosting und Ihre Datenbank **nicht betroffen sind** und Ihre Website trotz der Umsetzung **aller Schritte** in dieser Anleitung weiterhin langsam ist, bedeutet dies wahrscheinlich, dass Ihr Webhosting Dienst den Ansprüchen Ihrer Website nicht oder nicht mehr genügt. 

Ziehen Sie in diesem Fall ein leistungsfähigeres [Webhosting](https://www.ovhcloud.com/de/web-hosting/) oder eine dedizierte Infrastruktur in Betracht, wie einen [Virtual Private Server (VPS)](https://www.ovhcloud.com/de/vps/) oder einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/).

## Weiterführende Informationen <a name="go-further"></a>

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
