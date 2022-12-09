---
title: 'Konfiguration Ihres Webhostings bearbeiten'
slug: die_laufzeitumgebung_meines_webhostings_andern
excerpt: 'Hier erfahren Sie, wie Sie die Konfiguration Ihres OVHcloud Webhostings bearbeiten.'
section: 'Webhosting-Konfiguration'
order: 02
---

**Letzte Aktualisierung am 09.12.2022**

## Ziel 

Im Internet gibt es viele verschiedene Websites. Egal ob Sie einen Blog einrichten oder einen Onlineshop eröffnen, mit anderen Ihr Hobby teilen oder Ihr Unternehmen darstellen und am Markt platzieren möchten: Sie können die gewünschte Website auf Ihrem [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} hosten, solange diese mit der [Konfiguration unserer Infrastrukturen](https://webhosting-infos.hosting.ovh.net){.external} kompatibel ist.

**In dieser Anleitung erfahren Sie, wie Sie die Konfiguration Ihres OVHcloud Webhostings über Ihr Kundencenter bearbeiten.**

## Voraussetzungen

- Sie verfügen über ein kompatibles [OVHcloud Webhosting](https://www.ovhcloud.com/de/web-hosting/){.external} Angebot.
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) eingeloggt.

## Beschreibung

**Seien Sie besonders vorsichtig, wenn Sie die Konfiguration Ihres Webhostings bearbeiten**: Wenn Sie eine falsche Änderung vornehmen, kann es sein, dass Ihre Website nicht mehr erreichbar ist. Im Folgenden erklären wir Ihnen die Auswirkungen einer solchen Bearbeitung, um Ihnen zu helfen, die Konsequenzen besser einzuschätzen.

Wenn Sie die Konfiguration Ihres Hostings ändern, ändern Sie auch die Konfiguration Ihrer Website. Über unsere Infrastrukturen sind zwar verschiedene Konfigurationen verfügbar, achten Sie jedoch darauf, dass diese mit Ihrer Website technisch kompatibel sind.

> [!warning]
>
> Vergewissern Sie sich, bevor Sie Änderungen vornehmen, dass Ihre Website auch mit den neuen Einstellungen weiterhin erreichbar bleibt. Falls Sie sich nicht sicher sind und Hilfe benötigen, empfehlen wir Ihnen, einen [spezialisierten Dienstleister](https://partner.ovhcloud.com/de/directory/) zu kontaktieren. Leider können wir Ihnen für externe Dienstleistungen keine weitergehende Unterstützung anbieten. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung. 
> 

### Webhosting-Konfiguration über das Kundencenter bearbeiten

#### Schritt 1: Auf die Webhosting-Konfiguration zugreifen

Um zu beginnen, loggen Sie sich zunächst in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} ein, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Webhosting aus. Vergewissern Sie sich, dass Sie sich im Tab `Allgemeine Informationen`{.action} befinden. Klicken Sie rechts von `Globale PHP-Version`{.action} im Bereich `Konfiguration`{.action} auf `...`{.action} und anschließend auf den Button `Konfiguration ändern`{.action}.

![hosting konfiguration](images/change-hosting-configuration-step1.png){.thumbnail}

> [!primary]
>Ist der Button `Konfiguration ändern`{.action} ausgegraut, läuft möglicherweise gerade eine Überprüfung der **globalen PHP-Version**. Ist das der Fall, erscheint ein blaues, rundes Symbol neben der Version, um die laufende Überprüfung anzuzeigen. Warten Sie einige Minuten, bis der Button `Konfiguration ändern`{.action} wieder verfügbar ist.
>
> Wenn die Option `Globale PHP-Version`{.action} nicht in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) erscheint, überprüfen Sie anhand [unserer Anleitung](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/) ob die Datei ".ovhconfig" im FTP-Wurzelverzeichnis Ihres OVHcloud Webhostings existiert. 
>

#### Schritt 2: Webhosting-Konfiguration bearbeiten

Im angezeigten Fenster werden Ihnen zwei Optionen angezeigt. Wählen Sie die Option aus, die Sie vornehmen möchten, und klicken Sie auf `Weiter`{.action}.

|Option|Detail|
|---|---|
|„Zurück zur vorherigen Konfiguration“|Wenn Sie diese Option ausgewählt haben, wählen Sie anschließend neben `Ursprüngliche Wahl` die frühere Konfiguration aus, die Sie wiederherstellen möchten. Diese Option steht gegebenenfalls nicht zur Verfügung, wenn bisher noch keine Konfigurationsänderungen vorgenommen wurden.|
|„Aktuelle Konfiguration ändern“|Wenn Sie diese Option ausgewählt haben, wählen Sie die auszuführenden Konfigurationsänderungen in den angezeigten Feldern aus. Wenn nötig, können Sie diese im Abschnitt [„Verfügbare Konfigurationen“](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#verfugbare-konfigurationen_1){.external} in dieser Anleitung nachlesen.|

> [!primary]
>
> Eine Änderung der Ausführungsumgebung Ihres Webhostings setzt automatisch die PHP-Sessions zurück.
> 

Wenn Sie fertig sind, klicken Sie auf `Bestätigen`{.action}, um die Änderung durchzuführen. Warten Sie einen Moment, bis sie fertig ausgeführt ist.

![hosting konfiguration](images/change-hosting-configuration-step3.png){.thumbnail}

### Verfügbare Konfigurationen

Wenn Sie die Konfiguration eines Webhostings bearbeiten, können Sie aus verschiedenen möglichen Konfigurationen wählen. Lesen Sie die entsprechenden Abschnitte in dieser Anleitung, um weitere Informationen zur gewünschten Konfigurationsoption zu erhalten.

- [Ausführungsumgebung](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#ausfuhrungsumgebung){.external}
- [PHP-Version](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#php-version){.external}
- [PHP-Engine](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#php-engine){.external}
- [Modus](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#modus){.external}

#### Ausführungsumgebung

Indem Sie die Ausführungsumgebung ändern, können Sie auch einige technische Werte Ihres Webhostings ändern. **Bevor Sie Änderungen vornehmen, überprüfen Sie, dass die von Ihnen gewählte Umgebung mit Ihrer Website kompatibel ist.** 

|Umgebungen|Legacy|Stable |Stable64|
|---|---|---|---|
|Architektur|32 Bit|32 Bit|64 Bit|
|Minimale PHP-Version|5.4|5.4|7.4|
|Openssl|1.0.1t|1.0.1t|1.1.1n|
|Python|2.7 und 3.4|2.7 und 3.7|2.7 und 3.7|
|Ruby|2.1|2.1|2.5|
|Rails|4.1|4.1|5.2|
|Perl|5.20|5.20|5.28|
|git|2.1|2.1|2.20|

> [!primary]
>
> Die „Legacy“-Umgebung kann für ältere Websites nützlich sein, die noch ältere PHP-Versionen verwenden. Wir empfehlen Ihnen jedoch dringend, die „Stable64“-Umgebung zu verwenden, um von den neuesten Updates zu profitieren. **Bevor Sie Änderungen vornehmen, stellen Sie sicher, dass Ihre Website mit diesen kompatibel ist.**
> 

Wenn Sie Ihre Wahl getroffen haben, haben Sie zwei Optionen, um die Änderung auszuführen:

- **über Ihr Kundencenter**: Folgen Sie den Anweisungen im Abschnitt [„Webhosting-Konfiguration über das Kundencenter bearbeiten“](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#webhosting-konfiguration-uber-das-kundencenter-bearbeiten){.external} in dieser Anleitung.
- **indem Sie die Datei „.ovhconfig“ manuell bearbeiten**: Diese Option ist technisch anspruchsvoller und setzt voraus, dass Sie auf Ihrem Speicherplatz eingeloggt sind. Wenn Sie die Datei „**.ovhconfig**“ bearbeiten möchten, folgen Sie den Anweisungen in unserer Anleitung [„.ovhconfig-Datei Ihres Webhostings konfigurieren“](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}.

#### PHP-Version

Es existieren zurzeit verschiedene Versionen der Programmiersprache PHP. Wie gewöhnlich bringen weiterentwickelte Versionen verschiedene Korrekturen sowie neu hinzugefügte oder entfernte Features. OVHcloud stellt Ihnen die neuesten PHP-Hauptversionen zur Verfügung; die zugehörige Liste finden Sie hier: <https://www.ovhcloud.com/de/web-hosting/uc-programming-language/>. 

Da manche Features von neueren Versionen nicht mehr unterstützt werden, **stellen Sie unbedingt vor jeder Änderung sicher, dass die neue PHP-Version mit Ihrer Website kompatibel ist.**

Sie haben verschiedene Möglichkeiten, um die PHP-Version Ihres Webhostings zu ändern:

- **über Ihr Kundencenter**: Folgen Sie den Anweisungen im Abschnitt [„Webhosting-Konfiguration über das Kundencenter bearbeiten“](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#webhosting-konfiguration-uber-das-kundencenter-bearbeiten){.external} in dieser Anleitung.
- **indem Sie manuell eine Datei auf Ihrem Speicherplatz bearbeiten**: Diese Option ist technisch anspruchsvoller und setzt voraus, dass Sie auf Ihrem Speicherplatz eingeloggt sind. 

Wenn Sie ganz allgemein mehr Informationen zur Änderung der PHP-Version erhalten möchten, lesen Sie unsere Anleitung [„PHP-Version eines OVHcloud Webhostings ändern“](https://docs.ovh.com/de/hosting/konfiguration_von_php_fur_ein_ovh_webhosting_2014/){.external}.

#### PHP-Engine

Je nach Wahl der PHP-Engine können Sie den PHP-Beschleuniger („PHP-FPM“) aktivieren oder deaktivieren. PHP-FPM wurde an unsere Infrastruktur angepasst, um die Ausführungsgeschwindigkeit der PHP-Skripte zu beschleunigen. Verglichen mit der Engine „phpcgi“, liefert der PHP-Beschleuniger („PHP-FPM“) eine bis zu sieben mal höhere Leistung. 

Um die PHP-Engine Ihres Webhostings zu ändern, haben Sie zwei Optionen:

- **über Ihr Kundencenter**: Folgen Sie den Anweisungen im Abschnitt [„Webhosting-Konfiguration über das Kundencenter bearbeiten“](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#webhosting-konfiguration-uber-das-kundencenter-bearbeiten){.external} in dieser Anleitung. Um den PHP-Beschleuniger („PHP-FPM“) zu aktivieren, wählen Sie „php“ als Engine aus. Um den Beschleuniger zu deaktivieren, wählen Sie „phpcgi“.
- **indem Sie die Datei „.ovhconfig“ manuell bearbeiten**: Diese Option ist technisch anspruchsvoller und setzt voraus, dass Sie auf Ihrem Speicherplatz eingeloggt sind. Wenn Sie die Datei „**.ovhconfig**“ bearbeiten möchten, folgen Sie den Anweisungen in unserer Anleitung [„.ovhconfig-Datei Ihres Webhostings konfigurieren“](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}.

#### Modus

Indem Sie den Modus wählen, können Sie festlegen, wie die statischen Dateien (z. B. Images) Ihrer Website gecacht und wie PHP-Fehler behandelt werden (das ist beispielsweise nützlich, wenn Ihre Website eine leere Seite anzeigt). Sie können zwei verschiedene Modi aktivieren:

|Modus|Caching statischer Dateien|PHP-Fehlerbehebung|
|---|---|---|
|*Produktivbetrieb*|Maximiert Caching statischer Dateien in den Webbrowsern.|PHP-Fehler werden auf Ihrer Website nicht angezeigt.|
|*Entwicklung*|Es wird kein Caching durchgeführt.|PHP-Fehler werden auf Ihrer Website angezeigt.|

> [!primary]
>
> Bei den PHP-Versionen 7.1 und höher werden die Fehler auf der Website angezeigt, egal, welcher Modus verwendet wird. 
>

Um den von Ihrem Webhosting verwendeten Modus zu ändern, haben Sie zwei Optionen:

- **über Ihr Kundencenter**: Folgen Sie den Anweisungen im Abschnitt [„Webhosting-Konfiguration über das Kundencenter bearbeiten“](https://docs.ovh.com/de/hosting/die_laufzeitumgebung_meines_webhostings_andern/#webhosting-konfiguration-uber-das-kundencenter-bearbeiten){.external} in dieser Anleitung.
- **indem Sie die Datei „.ovhconfig“ manuell bearbeiten**: Diese Option ist technisch anspruchsvoller und setzt voraus, dass Sie auf Ihrem Speicherplatz eingeloggt sind. Wenn Sie die Datei „**.ovhconfig**“ bearbeiten möchten, folgen Sie den Anweisungen in unserer Anleitung [„.ovhconfig-Datei Ihres Webhostings konfigurieren“](https://docs.ovh.com/de/hosting/ovhconfig-datei-konfigurieren/){.external}.

## Weiterführende Informationen

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
