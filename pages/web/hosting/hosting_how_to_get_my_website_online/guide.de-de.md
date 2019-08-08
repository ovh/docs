---
title: 'Eine Website auf Ihrem Webhosting online stellen'
slug: webhosting_meine_seite_online_stellen
legacy_guide_number: g1374
excerpt: 'So stellen Sie eine Website auf Ihrem OVH Webhosting online'
section: 'Erste Schritte'
order: 2
---

**Stand 23.07.2019**

## Einleitung

Im Internet gibt es viele verschiedene Websites. Egal ob Sie einen Blog einrichten oder einen Onlineshop eröffnen, mit anderen Ihr Hobby teilen oder Ihr Unternehmen darstellen und am Markt platzieren möchten: Sie können die gewünschte Website auf Ihrem [OVH Webhosting](https://www.ovh.de/hosting/){.external} hosten, solange diese mit der [Konfiguration unserer Infrastrukturen](http://pro.ovh.net/infos/){.external} kompatibel ist.

**Hier erfahren Sie, wie Sie eine Website auf Ihrem OVH Webhosting online stellen.**

## Voraussetzungen

- Sie besitzen ein [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot.
- Sie haben die Bestätigungs-E-Mail zur Installation Ihres Webhostings erhalten.
- Sie besitzen eine [Domain](https://www.ovh.de/domains/){.external}, über die Ihre Website erreichbar sein wird.
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} eingeloggt.

## Beschreibung

### Schritt 1: Ihr Projekt definieren

Um Ihr Vorhaben erfolgreich umzusetzen, ist es wichtig, dass Sie Ihr Ziel klar vor Augen haben. Was ist der Zweck Ihrer Website? Wie soll Sie online gestellt werden? Über Ihr OVH Webhosting Angebot stehen Ihnen mehrere Möglichkeiten für Ihr Website-Projekt zur Verfügung.

- **Website mithilfe von 1-Klick-Modulen online stellen**: Sie können auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Themes, Texte usw.). OVH stellt Ihnen 4 verschiedene 1-Klick-Module zur Verfügung, die mit unseren Infrastrukturen kompatibel sind. Nähere Informationen finden Sie in der Anleitung [„Installation Ihrer Website mit 1-Klick-Modulen“](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}.

- **Website über gebrauchsfertige Vorlage manuell installieren**: Sie können auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Themes, Texte usw.). Die Vorlage installieren Sie selbst auf Ihrem OVH Webhosting.

- **Website selbst erstellen**: Hier sind sowohl technische als auch Programmierkenntnisse erforderlich. Aber Sie haben auch die größte Gestaltungsfreiheit für eine Website ganz nach Ihren Vorstellungen.

- **Bestehende Website zu OVH migrieren**: Die Migration einer Website kann sich als schwierig erweisen, wenn dabei eine Unterbrechung des Dienstes vermieden werden soll. Um Ihnen bei diesem Vorgang zu helfen, haben wir die folgende Anleitung erstellt: [„Migration Ihrer Website und E-Mails zu OVH“](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/){.external}.


Nachdem Sie eine der Möglichkeiten ausgewählt haben, ergeben sich die folgenden zwei Optionen:

- **Sie möchten Ihre Website mithilfe von 1-Klick-Modulen online stellen**: Lesen Sie die zugehörige Anleitung [„Installation Ihrer Website mit 1-Klick-Modulen“](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}.

- **Sie möchten keine 1-Klick-Module verwenden**: Stellen Sie Ihre Website manuell auf Ihrem Hosting online. In dieser Anleitung geben wir Ihnen einige Informationen, die Ihnen hierbei helfen. Sie ersetzen jedoch nicht die Unterstützung eines Webmasters.
 
> [!warning]
>
> OVH stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVH leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>

### Schritt 2: Websitedateien im Speicherplatz online stellen

Um eine Website manuell auf einem Webhosting online zu stellen, sind mehrere Schritte notwendig. Je nach der zu installierenden Website sind manche Schritte optional und die Vorgehensweise kann ebenfalls unterschiedlich sein. Dennoch sind für die meisten gängigen Website-Projekte zwei hauptsächliche Schritte auszuführen, um eine Website online zu stellen − und als Erstes müssen die Dateien der Seite auf den Speicherplatz hochgeladen werden.

Hierfür sind wiederum verschiedene Zwischenschritte nötig.

#### 1. Websitedateien zusammentragen

Vergewissern Sie sich, dass Sie alle Dateien der Website haben, die Sie online stellen möchten. Wenn Sie eine bereits bestehende Website migrieren möchten, erhalten Sie die Dateien bei Ihrem bisherigen Hosting-Anbieter.

#### 2. In den Speicherplatz einloggen

Um sich mit Ihrem Speicherplatz zu verbinden, benötigen Sie die folgenden Elemente:

- einen aktiven FTP- oder SSH-Benutzer
- das Passwort für den FTP- bzw. SSH-Benutzer
- die Serveradresse
- den Verbindungsport des Servers

Diese Informationen wurden Ihnen per E-Mail bei der Installation Ihres Webhostings mitgeteilt. Wenn Sie nicht mehr im Besitz dieser Daten sind, loggen Sie sich in Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und klicken Sie im Bereich „Web“ links in der Menüleiste auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. 

![website installation](images/get-website-online-step1.png){.thumbnail}

Es werden nun die Informationen für Ihren Speicherplatz angezeigt. Sie sollten hier alle Elemente finden, die Sie für die Verbindung mit Ihrem Speicherplatz brauchen. Falls nötig, lesen Sie unsere Anleitung: [„Mit dem Speicherplatz eines Webhostings verbinden“](https://docs.ovh.com/de/hosting/verbindung-ftp-speicher-webhosting/){.external}. Wenn Sie kein Passwort besitzen, lesen Sie bitte die Anleitung [„Passwort eines FTP-Benutzers ändern“](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/){.external}.

Wenn Sie alle nötigen Informationen haben, können Sie sich in Ihren Speicherplatz einloggen. Hierfür haben Sie drei Möglichkeiten:

- **OVH FTP-Explorer verwenden**: Dieser ermöglicht es Ihnen, über einen Webbrowser auf Ihren Speicherplatz zuzugreifen. Bleiben Sie für diese Option im Tab `FTP - SSH`{.action} und klicken Sie auf den Button `FTP Explorer`{.action}.

- **FTP- oder SFTP-kompatibles Programm verwenden**: Installieren Sie einen FTP-Client auf Ihrem Computer (zum Beispiel FileZilla). Bitte kontaktieren Sie den Herausgeber der installierten Software, wenn Sie für deren Verwendung Hilfe brauchen, da sie nicht von OVH entwickelt wurde.

- **SSH-Zugang verwenden**: Um auf Ihren Speicherplatz zuzugreifen, müssen die entsprechenden Befehle in einem Terminal ausgeführt werden. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein passendes [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot erforderlich.

#### 3. Dateien auf Ihren Speicherplatz hochladen

Nachdem Sie sich in Ihren Speicherplatz eingeloggt haben, können Sie die Dateien Ihrer Website hochladen. **Achten Sie bitte besonders darauf, in welches Verzeichnis Sie die Dateien hochladen.** Standardmäßig werden diese im „www“-Ordner abgelegt. Sollten Sie über Ihr Webhosting mehrere Websites betreiben, haben Sie mit Sicherheit mehrere **Multisites** angelegt.

Gehen Sie in Ihrem OVH Kundencenter auf den Tab `Multisite`{.action}, um zu überprüfen, in welchem Ordner die neue Website veröffentlicht wird. Achten Sie in der angezeigten Tabelle auf das für die gewünschte Domain angegebene `Wurzelverzeichnis`{.action}. Veröffentlichen Sie die Dateien in diesem Verzeichnis.

Es kann sein, dass Sie auf Ihrem Speicherplatz eine Datei mit dem Namen „index.html“ finden. Diese wurde gegebenenfalls bei der Installation Ihres Hostings von OVH erstellt, um für Ihre Domain zunächst eine Standardseite anzuzeigen. Vergessen Sie bitte nicht, diese Datei zu löschen, wenn Sie Ihre Dateien online stellen.

![website installation](images/get-website-online-step2.png){.thumbnail}

### Schritt 3: Website mit einer Datenbank verbinden

> [!primary]
>
> Dieser Schritt ist optional, wenn Ihre Website nicht mit einer Datenbank verbunden werden muss.
>

Heute verwenden praktisch alle Content Management Systeme (CMS) wie WordPress oder Joomla! eine Datenbank, um dynamische Elemente einer Website wie zum Beispiel Kommentare oder Artikel zu speichern. Die Websitedateien und die Datenbank müssen unbedingt miteinander verbunden werden, damit die Seite korrekt funktioniert. Die Verbindung wird mithilfe einer Konfigurationsdatei hergestellt, die Informationen zur Datenbank enthält.

Je nach Website wird die Verbindung manuell eingerichtet oder über ein Interface der Website hergestellt. Hierzu werden verschiedene Zwischenschritte durchgeführt, von denen einige optional sein können.

#### 1. Bestehende Datenbank übertragen (optional)

Wenn Sie eine bereits bestehende Website migrieren, erhalten Sie die Datenbankdateien bei Ihrem bisherigen Hosting-Anbieter. Wenn Sie eine neue Website erstellen, können Sie direkt zum nächsten Schritt übergehen.

#### 2. Datenbank bei OVH erstellen (optional)

Wenn Sie bereits eine Datenbank besitzen, die Sie verwenden möchten (beispielsweise aus einem [OVH Webhosting](https://www.ovh.de/hosting/){.external} Angebot oder einer [SQL Private](https://www.ovh.de/hosting/sql-optionen.xml){.external} oder [Cloud DB](https://www.ovh.de/cloud/cloud-databases/){.external} Lösung), halten Sie bitte folgende Informationen bereit: Benutzername, zugehöriges Passwort, Name der Datenbank sowie die Serveradresse. Gehen Sie nun zum nächsten Schritt über.

Wenn Sie eine neue Datenbank bei OVH erstellen möchten, loggen Sie sich im [ OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager){.external} ein und klicken Sie links im Menü auf `Hosting-Pakete`{.action}. Wählen Sie das gewünschte Hosting aus und gehen Sie dann auf den Tab `Datenbanken`{.action}.

Klicken Sie nun auf den Button `Datenbank erstellen`{.action} oder, wenn der Button nicht angezeigt wird, auf `Aktionen`{.action} und dann auf `Datenbank erstellen`{.action}. Folgen Sie nun den angezeigten Informationen.

![website installation](images/get-website-online-step3.png){.thumbnail}


#### 3. Bestehende Datenbank importieren (optional)

Wenn Sie eine bereits bestehende Website migrieren, importieren Sie die bestehende Datenbank in die neu erstellte Datenbank. Wenn Sie eine neue Website erstellen, können Sie direkt zum nächsten Schritt übergehen.

Für den Import gibt es mehrere Möglichkeiten, beispielsweise über das OVH Kundencenter. Gehen Sie hierzu in Ihrem OVH Kundencenter zur Liste der Datenbanken, die für Ihren Dienst erstellt wurden, klicken Sie auf die drei Punkte rechts neben der neu erstellten Datenbank und dann auf `Datei importieren`{.action}. Folgen Sie nun den angezeigten Informationen.

![website installation](images/get-website-online-step4.png){.thumbnail}

#### 4. Website mit der Datenbank verbinden

Nun, da die Datenbank verfügbar ist und Sie die Dateien in den Speicherplatz hochgeladenen haben, müssen diese nur noch miteinander verbunden werden. Vergewissern Sie sich, dass Sie über die Login-Daten der Datenbank verfügen: Benutzername, das zugehörige Passwort, Name der Datenbank und Serveradresse.

Wie Website und Datenbank miteinander verbunden werden, hängt von der Website ab, die Sie online stellen möchten. Die Vorgehensweise variiert je nach Konfiguration Ihrer Website und hat nichts mit OVH zu tun. Wir empfehlen Ihnen deshalb, den Herausgeber Ihrer Website oder einen spezialisierten Dienstleister zu kontaktieren, falls Sie weitere Hilfe benötigen.

### Schritt 4: Auf Ihre Website zugreifen

Nachdem Sie die Dateien auf den Speicherplatz hochgeladen und die Datenbank mit Ihrem Speicherplatz verbunden haben (falls Ihre Seite eine Datenbank nutzt), können Sie auf Ihre Website zugreifen. Sie sollte nun korrekt in Ihrem Webbrowser angezeigt werden.

Ist das nicht der Fall, empfehlen wir Ihnen Folgendes:

- **Überprüfen Sie die Konfiguration der Domain**: Eine fehlerhafte DNS-Konfiguration Ihrer Domain kann dazu führen, dass die gerade auf Ihr OVH Webhosting hochgeladene Website nicht korrekt angezeigt wird. Vergewissern Sie sich, dass der A-Eintrag in der DNS-Zone Ihrer Domain mit der IP-Adresse Ihres OVH Webhostings übereinstimmt.

- **Stellen Sie sicher, dass keine Dateien fehlen**: Es kann sein, dass Sie beim Hochladen der Dateien in Ihr OVH Webhosting einige Dateien vergessen haben oder ein Fehler aufgetreten ist. Gehen Sie bei entsprechenden Änderungen bitte vorsichtig vor, um die Verbindung zwischen der Website und der Datenbank nicht zu unterbrechen (falls Ihre Seite eine Datenbank nutzt).

- **Überprüfen Sie den Code der Website auf Fehler**: Diese Überprüfung ist zwar technisch anspruchsvoll, aber es kann sein, dass die hochgeladenen Dateien Fehler enthalten und der Server die Website deshalb nicht korrekt oder überhaupt nicht anzeigen kann.

Sollten Sie bei der Veröffentlichung Ihrer Website Schwierigkeiten haben, empfehlen wir Ihnen, einen spezialisierten Dienstleister und/oder den Herausgeber des Dienstes (zum Beispiel des installierten CMS) zu kontaktieren.

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVH](https://docs.ovh.com/de/hosting/migration-ihrer-website-zu-ovh/){.external}

[Installation Ihrer Website mit 1-Klick-Modulen](https://docs.ovh.com/de/hosting/webhosting_installation_von_webhosting-modulen/){.external}

[Passwort eines FTP-Benutzers ändern](https://docs.ovh.com/de/hosting/ftp-benutzer-passwort-aendern/){.external}

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.