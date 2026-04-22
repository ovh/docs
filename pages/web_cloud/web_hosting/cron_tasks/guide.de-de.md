---
title: "Automatische Tasks mit einem Webhosting verwenden"
excerpt: "Erfahren Sie hier, wie Sie automatisierte Tasks auf Ihrem Webhosting konfigurieren"
updated: 2026-03-31
---

<style>
 pre {
     font-size: 14px !important;
 }
 pre.bgwhite {
   background-color: #fff !important;
   color: #000 !important;
   font-family: monospace !important;
   padding: 5px !important;
   margin-bottom: 5px !important;
 }
 pre.bgwhite code {
   background-color: #fff !important;
   border: solid 0px transparent !important;
   font-family: monospace !important;
   font-size: 0.90em !important;
   color: #000 !important;
 }
 .small {
     font-size: 0.90em !important;
 }
</style>

## Ziel

Auf Ihrem OVHcloud Webhosting können Sie Skripte verwenden, um bestimmte Operationen zu automatisieren. Ein geplanter Task ("CRON Job") ermöglicht es, dass Ihre Skripte zu bestimmten Zeiten ausgeführt werden, ohne dass weitere Aktionen Ihrerseits erforderlich sind.

**Hier erfahren Sie, wie Sie CRON-Tasks erstellen, um Ihre geplanten Tasks auf einem Webhosting zu automatisieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten. Leider können wir Ihnen für administrative Aufgaben keine weitergehende technische Unterstützung anbieten. Weitere Informationen finden Sie am [Ende dieser Anleitung](#go-further).
>

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting) in Ihrem Kunden-Account.

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

### Erstellung eines automatisierten Tasks

<!-- CP-STEPS-START:create-cron-task -->
Klicken Sie auf die Tabs, um die **5** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Mehr`{.action} und dann auf `Cron`{.action}. Sie erhalten einen Überblick über Ihre geplanten Tasks und deren Einstellungen.
>>
>> ![cron control panel](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/schedule-jobs.png){.thumbnail}
>>
>> Um einen CRON-Task zu erstellen, klicken Sie rechts auf den Button `Zeitplan hinzufügen`{.action}.
>>
> **Schritt 3**
>>
>> Passen Sie die Task-Einstellungen im angezeigten Fenster an.
>>
>> ![adding scheduling](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-1.png){.thumbnail}
>>
>> |Option|Beschreibung|
>> |---|---|
>> |Auszuführender Befehl|Legen Sie den Zugriffspfad zur Datei mit Ihrem Skript fest. Beispiel: *www/jobs/cron.php*|
>> |Sprache|Wählen Sie die vom Skript verwendete PHP-Version aus.|
>> |Aktivierung|Wählen Sie aus, ob der Task nach seiner Erstellung aktiv sein soll oder später aktiviert wird.|
>> |Logs per E-Mail|Wenn nötig wählen Sie einen Kontakt (Administrator oder Technischer) aus, an den im Falle eines Ausführungsfehlers ein Bericht versendet wird. Sie können auch eine andere E-Mail-Adresse angeben.|
>> |Beschreibung|Geben Sie eine Beschreibung ein, um Ihre Tasks zu dokumentieren.|
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 4**
>>
>> Das Interface bietet zwei Wege, um die Frequenz Ihres Tasks zu konfigurieren:
>>
>> - **Einfacher Modus**: Verwenden Sie die Auswahlmenüs, um die Uhrzeit, die Tage eines Monats, die Wochentage und die Monate der Ausführung anzugeben.
>> - **Experten-Modus**: Geben Sie numerische Werte ein wie in einem *crontab*.
>>
>> |Einfacher Modus|Experten-Modus|
>> |---|---|
>> |Verwenden Sie die Auswahlmenüs, um die Uhrzeit, die Tage eines Monats, die Wochentage und die Monate der Ausführung anzugeben.|Geben Sie numerische Werte ein wie in einem *crontab*. Die Sterne stehen für "jeden Wert" des Zeitraums, was bedeutet, dass die Aufgabe in diesem Beispiel **einmal pro Stunde täglich** kontinuierlich ausgeführt würde.|
>> |![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-basic-mod-step-2.png){.thumbnail}|![cron frequency](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-expert-mod-step-2.png){.thumbnail}|
>>
>> > [!primary]
>> >
>> > Mit der Auswahl `Tage`{.action} können Sie die Ausführungsfrequenz für einen monatlichen Zyklus festlegen.
>> >
>> > Mit der Auswahl `Wochentage`{.action} können Sie zusätzliche Ausführungszeitpunkte festlegen, jedoch in einem wöchentlichen Zyklus.
>>
>> Sie können während der Konfiguration zwischen den beiden Ansichten wechseln. Beachten Sie auch die [Einschränkungen bei der Task-Planung auf einem Webhosting](./#einschrankungen-bei-geplanten-tasks-auf-ihrem-webhosting).
>>
>> Klicken Sie auf `Weiter`{.action}.
>>
> **Schritt 5**
>>
>> Die Zusammenfassung listet alle Ihre Einstellungen auf, einschließlich der *crontab*-Notation der Ausführungsfrequenz. Wenn alles korrekt ist, klicken Sie auf `Bestätigen`{.action}.
>>
>> ![cron confirmation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/cron/add-scheduling-step-3.png){.thumbnail}
>>
>> Der Task wird in einigen Minuten bereit sein. Sie können dann alle Einstellungen ändern oder den Task löschen, indem Sie auf `...`{.action} in der Task-Übersichtstabelle im OVHcloud Kundencenter klicken.
<!-- CP-STEPS-END:create-cron-task -->

### Task bearbeiten oder löschen

<!-- CP-STEPS-START:modify-delete-cron-task -->
Klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf auf den Tab `Mehr`{.action} und dann auf `Cron`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie in der hier angezeigten Tabelle auf den Button `...`{.action} rechts neben dem Task.
>>
>> Klicken Sie auf den Button `Bearbeiten`{.action} oder `Löschen`{.action}, je nachdem, welche Aktion Sie für den Task ausführen möchten.
<!-- CP-STEPS-END:modify-delete-cron-task -->

### Einschränkungen bei geplanten Tasks auf Ihrem Webhosting

|Funktion|Beschreibung|
|---|---|
|Zeitplanung|Sie werden bemerken, dass das Feld "Minuten" im Interface deaktiviert ist (angezeigt als "?" in *crontab*). Ein Task kann nur einmal pro Stunde ausgeführt werden, wobei die Ausführungsminute nicht spezifiziert werden kann.|
|Laufzeit|Die Ausführungsdauer eines Tasks beträgt 60 Minuten. Wenn ein Skript diese Ausführungsdauer überschreitet, wird es automatisch vom System angehalten.|
|Variable|Sie können Variablen nur in einem Skript definieren. Sie zur URL hinzuzufügen, die das Skript anruft, funktioniert nicht (Beispiel: *www/jobs/cron.php?variable=value*).|
|Datenlimit|Ein Task kann nur 5 MB an Daten generieren (*stdin/stderr*). Wenn beispielsweise ein Skript Daten in eine .txt-Datei schreibt, endet die Ausführung automatisch, sobald die Datei 5 MB erreicht.|
|Fehlergenerierende Skripte|Wenn ein Skript fehlerhaft ist, wird es nach 10 fehlgeschlagenen Ausführungsversuchen automatisch deaktiviert. Der Fehlerbericht wird erst gesendet, wenn alle 10 Versuche fehlgeschlagen sind.<br>Korrigieren Sie Ihr Skript auf der Grundlage des erhaltenen Fehlerberichts und reaktivieren Sie dann den Task im Kundencenter (klicken Sie auf `...`{.action} und dann auf `Ändern`{.action}.)|
|Ausführungsberichte|Die Berichte werden nur einmal täglich (während der Nachtstunden) an die ausgewählte E-Mail-Adresse versandt.|

### Fehlerdiagnose

#### Test Ihres Skripts mit einem Webbrowser

Ein einfacher Test, um zu sehen, ob Ihr Skript einen Fehler verursacht, ist, es in einem Webbrowser auszuführen. Wenn zum Beispiel der Zugriffspfad auf Ihr Skript "www/cron.php" ist und Ihre Domain "mypersonaldomain.ovh" ist, verwenden Sie die URL "http://<i></i>mypersonaldomain.ovh/cron.php". Wenn kein Fehler auftritt, das Skript aber nicht wie geplant funktioniert, folgen Sie den nachstehenden Empfehlungen.

#### Überprüfung der Nutzung absoluter Pfade

Achten Sie immer darauf, absolute Zugriffspfade zu den Dateien Ihrer Skripte zu verwenden. Die Konstante "DIR" kann beispielsweise dazu dienen, den aktuellen Pfad in PHP-Skripten zu erhalten ([PHP-Dokumentation](https://www.php.net/manual/de/language.constants.predefined.php)).

#### Überprüfung der Ausführungsprotokolle

In den Logs Ihres Webhostings, einsehbar im [OVHcloud Kundencenter](/links/manager), finden Sie die Log-Kategorie "cron".

Weitere Informationen finden Sie in unserer Anleitung zu [Statistiken und Logs](/pages/web_cloud/web_hosting/logs_and_statistics).

##### **Beispiel-Logs**

- Beispiel für ein erfolgreich ausgeführtes Skript

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/myscript.sh
[2026-03-30 00:36:01]
[2026-03-30 00:36:01] ## OVH ## END - 2023-08-10 22:39:44.086166 exitcode: 0
</code></pre>

- Beispiel für einen Fehlschlag aufgrund einer Überschreitung der Ausführungsdauer

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/sleep.sh

[2026-03-30 01:36:01] ## OVH ## ERROR - CRON TASK INTERRUPTED BY OVH - reason: your script duration exceeded the maximum permitted (3600 seconds)
[2026-03-30 01:36:01] ## OVH ## END - 2026-03-30 01:36:01.086166 exitcode: 0
</code></pre>

- Beispiel eines Fehlers, da die Skriptdatei im angegebenen Zugriffspfad nicht gefunden werden kann

<pre class="bgwhite"><code>
[2026-03-30 00:36:01] ## OVH ## START - 2026-03-30 00:36:01.524384 executing: /usr/local/php7.2/bin/php /homez.161/myftpusername/www/noscript.sh

[2026-03-30 00:36:01] ## OVH ## ERROR command '/homez.161/myftpusername/www/noscript.sh' not found
[2026-03-30 00:36:01] ## OVH ## END - 2026-03-30 00:36:01.086166 exitcode: 255
</code></pre>

- Beispiel eines Fehlers wegen Zugriffsrechten (chmod) oder einer fehlerhaften Konfiguration der .ovhconfig-Datei

<pre class="bgwhite"><code>
[2026-03-30 18:07:10] ## OVH ## Your job could not be initiated for an unknown reason.
[2026-03-30 18:07:10]
[2026-03-30 18:07:10] ## OVH ## END - 2026-03-30 18:07:10.969840 exitcode: 255
</code></pre>

## Weiterführende Informationen <a name="go-further"></a>

[.ovhconfig-Datei Ihres Webhostings konfigurieren](/pages/web_cloud/web_hosting/configure_your_web_hosting)

[SSH-Zugang Ihres Webhostings verwenden](/pages/web_cloud/web_hosting/ssh_on_webhosting)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
