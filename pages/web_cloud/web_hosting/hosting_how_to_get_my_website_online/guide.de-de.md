---
title: "Eine Website auf Ihrem Webhosting online stellen"
excerpt: "So stellen Sie eine Website auf Ihrem OVHcloud Webhosting online"
updated: 2024-03-21
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel 

Im Internet gibt es viele verschiedene Websites. Egal ob Sie einen Blog einrichten oder einen Onlineshop eröffnen, mit anderen Ihr Hobby teilen oder Ihr Unternehmen darstellen und am Markt platzieren möchten: Sie können die gewünschte Website auf Ihrem [OVHcloud Webhosting](/links/web/hosting){.external} hosten, solange diese mit der [Konfiguration unserer Infrastrukturen](https://webhosting-infos.hosting.ovh.net){.external} kompatibel ist.

**Hier erfahren Sie, wie Sie eine Website auf Ihrem OVHcloud Webhosting online stellen.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting){.external}.
- Sie haben die E-Mail zur Installation Ihres Webhostings erhalten.
- Sie verfügen über einen [Domainnamen](/links/web/domains){.external}, über den Ihre Website erreichbar sein wird.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).
- Sie haben keine ausstehenden [Zahlungen](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) und [Verlängerungen](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).

## In der praktischen Anwendung

### Schritt 1: Ihr Projekt definieren

Um Ihr Vorhaben erfolgreich umzusetzen, ist es wichtig, dass Sie Ihr Ziel klar vor Augen haben. Was ist der Zweck Ihrer Website? Wie soll Sie online gestellt werden? Über Ihr OVHcloud Webhosting Angebot stehen Ihnen mehrere Möglichkeiten für Ihr Website-Projekt zur Verfügung.

- **Website mithilfe von 1-Klick-Modulen online stellen**: Sie können auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Themes, Inhalte, etc.). OVHcloud bietet Ihnen vier verschiedene, mit unserer Infrastruktur kompatible 1-Klick-Module, die auf unserer Seite "[Wie erstelle ich eine Website?](/links/web/hosting-website){.external}" vorgestellt werden. Beachten Sie dazu auch die Anleitung "[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".

- **Website über gebrauchsfertige Vorlage manuell installieren**: Sie können auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Themes, Texte usw.). Die Vorlage installieren Sie selbst auf Ihrem OVHcloud Webhosting.

- **Website selbst erstellen**: Hier sind sowohl technische als auch Programmierkenntnisse erforderlich. Aber Sie haben auch die größte Gestaltungsfreiheit für eine Website ganz nach Ihren Vorstellungen.

- **Bestehende Website zu OVHcloud migrieren**: Die Migration einer Website kann sich als schwierig erweisen, wenn dabei eine Unterbrechung des Dienstes vermieden werden soll. Um Ihnen bei diesem Vorgang zu helfen, haben wir die folgende Anleitung erstellt: [„Migration Ihrer Website und E-Mails zu OVHcloud“](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh).

Nachdem Sie eine der Möglichkeiten ausgewählt haben, ergeben sich die folgenden zwei Optionen:

- **Sie möchten Ihre Website mithilfe von 1-Klick-Modulen online stellen**: Lesen Sie die zugehörige Anleitung [„Installation Ihrer Website mit 1-Klick-Modulen“](/pages/web_cloud/web_hosting/cms_install_1_click_modules).

- **Sie möchten keine 1-Klick-Module verwenden**: Stellen Sie Ihre Website manuell auf Ihrem Hosting online. In dieser Anleitung geben wir Ihnen einige Informationen, die Ihnen hierbei helfen. Sie ersetzen jedoch nicht die Unterstützung eines Webmasters.
 
> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.
>

### Schritt 2: Websitedateien im Speicherplatz online stellen

Um eine Website manuell auf einem Webhosting online zu stellen, sind mehrere Schritte notwendig. Je nach der zu installierenden Website sind manche Schritte optional und die Vorgehensweise kann ebenfalls unterschiedlich sein. Dennoch sind für die meisten gängigen Website-Projekte zwei hauptsächliche Schritte auszuführen, um eine Website online zu stellen − und als Erstes müssen die Dateien der Seite auf den Speicherplatz hochgeladen werden.

Hierfür sind wiederum verschiedene Zwischenschritte nötig.

#### 1. Websitedateien zusammentragen

Vergewissern Sie sich, dass Sie alle Dateien der Website haben, die Sie online stellen möchten. Wenn Sie eine bereits bestehende Website migrieren möchten, erhalten Sie die Dateien bei Ihrem bisherigen Hosting-Anbieter.

#### 2. In den Speicherplatz einloggen

Um sich mit Ihrem Speicherplatz zu verbinden, benötigen Sie die folgenden Elemente:

- Einen aktiven FTP- oder SSH-Benutzer
- Das Passwort für den FTP- bzw. SSH-Benutzer
- Die Serveradresse
- Den Verbindungsport des Servers

Diese Informationen wurden Ihnen per E-Mail bei der Installation Ihres Webhostings mitgeteilt. Wenn Sie nicht mehr im Besitz dieser Daten sind, loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager){.external} ein und klicken Sie im Bereich `Web Cloud`{.action} auf `Hosting-Pakete`{.action}. Wählen Sie das betreffende Hosting aus und gehen Sie dann auf den Tab `FTP - SSH`{.action}. 

![website installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}

Es werden nun die Informationen für Ihren Speicherplatz angezeigt. Sie sollten hier alle Elemente finden, die Sie für die Verbindung mit Ihrem Speicherplatz brauchen. Falls nötig, lesen Sie unsere Anleitung: [„Mit dem Speicherplatz eines Webhostings verbinden“](/pages/web_cloud/web_hosting/ftp_connection). Wenn Sie kein Passwort besitzen, lesen Sie bitte die Anleitung [„Passwort eines FTP-Benutzers ändern“](/pages/web_cloud/web_hosting/ftp_change_password).

Wenn Sie alle nötigen Informationen haben, können Sie sich in Ihren Speicherplatz einloggen. Hierfür haben Sie drei Möglichkeiten:

- **OVHcloud FTP-Explorer verwenden**: Dieser ermöglicht es Ihnen, über einen Webbrowser auf Ihren Speicherplatz zuzugreifen. Bleiben Sie für diese Option im Tab `FTP - SSH`{.action} und klicken Sie auf den Button `FTP Explorer`{.action}.

- **FTP- oder SFTP-kompatibles Programm verwenden**: Installieren Sie einen FTP-Client auf Ihrem Computer (zum Beispiel FileZilla). Bitte kontaktieren Sie den Herausgeber der installierten Software, wenn Sie für deren Verwendung Hilfe brauchen, da sie nicht von OVHcloud entwickelt wurde.

- **SSH-Zugang verwenden**: Um auf Ihren Speicherplatz zuzugreifen, müssen die entsprechenden Befehle in einem Terminal ausgeführt werden. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein passendes [OVHcloud Webhosting](/links/web/hosting){.external} Angebot erforderlich.

#### 3. Dateien auf Ihren Speicherplatz hochladen

Nachdem Sie sich in Ihren Speicherplatz eingeloggt haben, können Sie die Dateien Ihrer Website hochladen. **Achten Sie bitte besonders darauf, in welches Verzeichnis Sie die Dateien hochladen.** Standardmäßig werden diese im „www“-Ordner abgelegt. Sollten Sie über Ihr Webhosting mehrere Websites betreiben, haben Sie mit Sicherheit mehrere **Multisites** angelegt.

Gehen Sie in Ihrem OVHcloud Kundencenter auf den Tab `Multisite`{.action}, um zu überprüfen, in welchem Ordner die neue Website veröffentlicht wird. Achten Sie in der angezeigten Tabelle auf das für die gewünschte Domain angegebene `Wurzelverzeichnis`{.action}. Veröffentlichen Sie die Dateien in diesem Verzeichnis.

Es kann sein, dass Sie auf Ihrem Speicherplatz eine Datei mit dem Namen „index.html“ finden. Diese wurde gegebenenfalls bei der Installation Ihres Hostings von OVHcloud erstellt, um für Ihre Domain zunächst eine Standardseite anzuzeigen. Vergessen Sie bitte nicht, diese Datei zu löschen, wenn Sie Ihre Dateien online stellen.

![website installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}

### Schritt 3: Website mit einer Datenbank verbinden

> [!primary]
>
> Dieser Schritt ist optional, wenn Ihre Website nicht mit einer Datenbank verbunden werden muss.
>

Heute verwenden praktisch alle Content Management Systeme (CMS) wie WordPress oder Joomla! eine Datenbank, um dynamische Elemente einer Website wie zum Beispiel Kommentare oder Artikel zu speichern. Die Websitedateien und die Datenbank müssen unbedingt miteinander verbunden werden, damit die Seite korrekt funktioniert. Die Verbindung wird mithilfe einer Konfigurationsdatei hergestellt, die Informationen zur Datenbank enthält.

Je nach Website wird die Verbindung manuell eingerichtet oder über ein Interface der Website hergestellt. Hierzu werden verschiedene Zwischenschritte durchgeführt, von denen einige optional sein können.

#### 1. Bestehende Datenbank übertragen 

Wenn Sie eine bereits bestehende Website migrieren, erhalten Sie die Datenbankdateien bei Ihrem bisherigen Hosting-Anbieter. Wenn Sie eine neue Website erstellen, können Sie direkt zum nächsten Schritt übergehen.

#### 2. Datenbank bei OVHcloud erstellen 

Wenn Sie bereits eine Datenbank besitzen, die Sie verwenden möchten (beispielsweise aus einem [OVHcloud Webhosting](/links/web/hosting){.external} Angebot oder einer [Web Cloud Databases](https://www.ovh.de/cloud/cloud-databases/){.external} Lösung), halten Sie bitte folgende Informationen bereit: Benutzername, zugehöriges Passwort, Name der Datenbank sowie die Serveradresse. Gehen Sie nun zum nächsten Schritt über.

Wenn Sie eine neue Datenbank bei OVHcloud erstellen möchten, loggen Sie sich im [OVHcloud Kundencenter](/links/manager){.external} ein und klicken Sie auf `Hosting-Pakete`{.action}. Wählen Sie das gewünschte Hosting aus und gehen Sie dann auf den Tab `Datenbanken`{.action}.

Klicken Sie nun auf den Button `Datenbank erstellen`{.action} oder, wenn der Button nicht angezeigt wird, auf `Aktionen`{.action} und dann auf `Datenbank erstellen`{.action}. Folgen Sie nun den angezeigten Informationen.

![website installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

#### 3. Bestehende Datenbank importieren

Wenn Sie eine bereits bestehende Website migrieren, importieren Sie die bestehende Datenbank in die neu erstellte Datenbank. Wenn Sie eine neue Website erstellen, können Sie direkt zum nächsten Schritt übergehen.

Für den Import gibt es mehrere Möglichkeiten, OVHcloud bietet einen solchen über sein Kundencenter an. Wenn Sie in Ihrem OVHcloud Kundencenter auf die Liste der Datenbanken, die für Ihren Dienst erstellt wurden, klicken Sie auf den Button `...`{.action} rechts von Ihrer Datenbank und dann auf `Datei importieren`{.action}.

#### 4. Website mit der Datenbank verbinden

Nun, da die Datenbank verfügbar ist und Sie die Dateien in den Speicherplatz hochgeladenen haben, müssen diese nur noch miteinander verbunden werden. Vergewissern Sie sich, dass Sie über die Login-Daten der Datenbank verfügen: Benutzername, das zugehörige Passwort, Name der Datenbank und Serveradresse.

Wie Website und Datenbank miteinander verbunden werden, hängt von der Website ab, die Sie online stellen möchten. Die Vorgehensweise variiert je nach Konfiguration Ihrer Website und hat nichts mit OVHcloud zu tun. Wir empfehlen Ihnen deshalb, den Herausgeber Ihrer Website oder einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, falls Sie weitere Hilfe benötigen.

### Schritt 4: Auf Ihre Website zugreifen

Nachdem Sie die Dateien auf den Speicherplatz hochgeladen und die Datenbank mit Ihrem Speicherplatz verbunden haben (falls Ihre Seite eine Datenbank nutzt), können Sie auf Ihre Website zugreifen. Sie sollte nun korrekt in Ihrem Webbrowser angezeigt werden.

Ist das nicht der Fall, empfehlen wir Ihnen Folgendes:

- **Überprüfen Sie die Konfiguration der Domain**: Eine fehlerhafte DNS-Konfiguration Ihrer Domain kann dazu führen, dass die gerade auf Ihr OVHcloud Webhosting hochgeladene Website nicht korrekt angezeigt wird. Vergewissern Sie sich, dass der A-Eintrag in der DNS-Zone Ihrer Domain mit der IP-Adresse Ihres OVHcloud Webhostings übereinstimmt.

- **Stellen Sie sicher, dass keine Dateien fehlen**: Es kann sein, dass Sie beim Hochladen der Dateien in Ihr OVHcloud Webhosting einige Dateien vergessen haben oder ein Fehler aufgetreten ist. Gehen Sie bei entsprechenden Änderungen bitte vorsichtig vor, um die Verbindung zwischen der Website und der Datenbank nicht zu unterbrechen (falls Ihre Seite eine Datenbank nutzt).

- **Überprüfen Sie den Code der Website auf Fehler**: Diese Überprüfung ist zwar technisch anspruchsvoll, aber es kann sein, dass die hochgeladenen Dateien Fehler enthalten und der Server die Website deshalb nicht korrekt oder überhaupt nicht anzeigen kann.

Sollten Sie bei der Veröffentlichung Ihrer Website Schwierigkeiten haben, empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber des Dienstes (zum Beispiel des installierten CMS) zu kontaktieren.

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
