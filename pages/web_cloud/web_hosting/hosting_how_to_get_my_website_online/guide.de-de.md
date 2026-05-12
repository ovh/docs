---
title: "Eine Website auf Ihrem Webhosting online stellen"
excerpt: "So stellen Sie eine Website auf Ihrem OVHcloud Webhosting online"
updated: 2026-05-04
---

## Ziel 

Im Internet gibt es viele verschiedene Websites. Egal ob Sie einen Blog einrichten oder einen Onlineshop eröffnen, mit anderen Ihr Hobby teilen oder Ihr Unternehmen darstellen und am Markt platzieren möchten: Sie können die gewünschte Website auf Ihrem [OVHcloud Webhosting](/links/web/hosting) hosten, solange diese mit der [Konfiguration unserer Infrastrukturen](https://webhosting-infos.hosting.ovh.net) kompatibel ist.

**Hier erfahren Sie, wie Sie eine Website auf Ihrem OVHcloud Webhosting online stellen.**

## Voraussetzungen

- Sie haben ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben die E-Mail zur Installation Ihres Webhostings erhalten.
- Sie verfügen über einen [Domainnamen](/links/web/domains), über den Ihre Website erreichbar sein wird.
- Sie haben keine ausstehenden [Zahlungen](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) und [Verlängerungen](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) der dazugehörigen Dienstleistungen (Domainname und Webhosting).

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

### 1 - Ihr Projekt definieren

Um Ihr Vorhaben erfolgreich umzusetzen, ist es wichtig, dass Sie Ihr Ziel klar vor Augen haben. Was ist der Zweck Ihrer Website? Wie soll Sie online gestellt werden? Über Ihr OVHcloud Webhosting Angebot stehen Ihnen mehrere Möglichkeiten für Ihr Website-Projekt zur Verfügung.

- **Website mithilfe von 1-Klick-Modulen online stellen**: Sie können auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Themes, Inhalte, etc.). OVHcloud bietet Ihnen vier verschiedene, mit unserer Infrastruktur kompatible 1-Klick-Module, die auf unserer Seite „[Wie erstelle ich eine Website?](/links/web/hosting-website)" vorgestellt werden. Beachten Sie dazu auch die Anleitung „[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules)“.

- **Website über gebrauchsfertige Vorlage manuell installieren**: Sie können auf einer gebrauchsfertigen Websitestruktur aufbauen und diese nach Belieben anpassen (Themes, Texte usw.). Die Vorlage installieren Sie selbst auf Ihrem OVHcloud Webhosting.

- **Website selbst erstellen**: Hier sind sowohl technische als auch Programmierkenntnisse erforderlich. Aber Sie haben auch die größte Gestaltungsfreiheit für eine Website ganz nach Ihren Vorstellungen.

- **Bestehende Website zu OVHcloud migrieren**: Die Migration einer Website kann sich als schwierig erweisen, wenn dabei eine Unterbrechung des Dienstes vermieden werden soll. Um Ihnen bei diesem Vorgang zu helfen, empfehlen wir Ihnen, vorab diese Dokumentation zu konsultieren: „[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)“.

Nachdem Sie eine der Möglichkeiten ausgewählt haben, ergeben sich die folgenden zwei Optionen:

- **Sie möchten Ihre Website mithilfe von 1-Klick-Modulen online stellen**: Lesen Sie die zugehörige Anleitung „[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules)“.

- **Sie möchten keine 1-Klick-Module verwenden**: Stellen Sie Ihre Website manuell auf Ihrem Hosting online. In dieser Anleitung geben wir Ihnen einige Informationen, die Ihnen hierbei helfen. Sie ersetzen jedoch nicht die Unterstützung eines Webmasters.
 
> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, falls Sie Hilfe brauchen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber des Dienstes zu kontaktieren. Für externe Dienstleistungen bietet OVHcloud leider keine Unterstützung. Genauere Informationen finden Sie im Teil „Weiterführende Informationen" dieser Anleitung.

### 2 - Websitedateien im Speicherplatz online stellen

Um eine Website manuell auf einem Webhosting online zu stellen, sind mehrere Schritte notwendig. Je nach der zu installierenden Website sind manche Schritte optional und die Vorgehensweise kann ebenfalls unterschiedlich sein. Dennoch sind für die meisten gängigen Website-Projekte zwei hauptsächliche Schritte auszuführen, um eine Website online zu stellen − und als Erstes müssen die Dateien der Seite auf den Speicherplatz hochgeladen werden.

Hierfür sind wiederum verschiedene Zwischenschritte nötig.

#### 2.1. Websitedateien zusammentragen

Vergewissern Sie sich, dass Sie alle Dateien der Website haben, die Sie online stellen möchten. Wenn Sie eine bereits bestehende Website migrieren möchten, erhalten Sie die Dateien bei Ihrem bisherigen Hosting-Anbieter.

#### 2.2. In den Speicherplatz einloggen

Um sich mit Ihrem Speicherplatz zu verbinden, benötigen Sie die folgenden Elemente:

- Einen aktiven FTP- oder SSH-Benutzer
- Das Passwort für den FTP- bzw. SSH-Benutzer
- Die Serveradresse
- Den Verbindungsport des Servers

Diese Informationen wurden Ihnen per E-Mail bei der Installation Ihres Webhostings mitgeteilt. Wenn Sie nicht mehr im Besitz dieser Daten sind, klicken Sie auf die Tabs, um die **3** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `FTP - SSH`{.action}.
>>
>> ![FTP - SSH](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Es werden nun die Informationen Ihres Speicherplatzes angezeigt. Sie sollten hier alle Elemente zum Einloggen in Ihren FTP-Speicherplatz finden.
>>
>> ![FTP - SSH tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ftp-ssh/tab-pro.png){.thumbnail}
>>
>> Falls nötig, konsultieren Sie unsere Anleitung: [Mit dem Speicherplatz eines Webhostings verbinden](/pages/web_cloud/web_hosting/ftp_connection).
>>
>> Wenn Sie das Passwort nicht kennen, nutzen Sie die Anleitung [Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password).

Wenn Sie alle nötigen Informationen haben, können Sie sich in Ihren Speicherplatz einloggen. Hierfür haben Sie zwei Möglichkeiten:

- **FTP- oder SFTP-kompatibles Programm verwenden**: Installieren Sie einen FTP-Client auf Ihrem Computer (zum Beispiel FileZilla). Bitte kontaktieren Sie den Herausgeber der installierten Software, wenn Sie für deren Verwendung Hilfe brauchen, da sie nicht von OVHcloud entwickelt wurde.

- **SSH-Zugang verwenden**: Um auf Ihren Speicherplatz zuzugreifen, müssen die entsprechenden Befehle in einem Terminal ausgeführt werden. Für diesen Zugriffstyp sind fortgeschrittene Kenntnisse sowie ein passendes [OVHcloud Webhosting](/links/web/hosting) Angebot erforderlich.

#### 2.3. Dateien auf Ihren Speicherplatz hochladen

> [success]
>
> Wenn Sie in Ihrem [OVHcloud Kundencenter](/links/manager) noch keinen Website-Name auf Ihrem Webhosting deklariert haben, konsultieren Sie [dieses Handbuch](/pages/web_cloud/web_hosting/multisites_configure_multisite).
>
> Wenn Sie in Ihrem [OVHcloud Kundencenter](/links/manager) noch keinen Domainnamen mit einer Website auf Ihrem Webhosting verknüpft haben, konsultieren Sie [dieses Handbuch](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

Nachdem Sie sich bei Ihrem Speicherbereich angemeldet haben, müssen Sie lediglich noch die Dateien Ihrer Website hochladen. **Wir möchten Sie besonders darauf hinweisen, auf welchen Ordner Sie die Dateien hochladen**, insbesondere wenn Sie mehrere Websites auf Ihrem Webhosting deklariert haben.

Um den Ordner zu prüfen, in den die Website veröffentlicht werden muss, klicken Sie auf die folgenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Navigieren Sie zum Tab `Meine Seiten`{.action}. Im angezeigten Tabellenansicht für die gewünschte Website, prüfen Sie den `Wurzelverzeichnis`{.action}, der angezeigt wird.
>>
>> ![website installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/root-folders.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Veröffentlichen Sie anschließend die Dateien der Website in diesem Ordner.

Es kann vorkommen, dass Sie auf Ihrem Speicherbereich eine Datei namens „index.html“ finden. Diese kann von OVHcloud bei der Installation Ihres Webhostings erstellt worden sein, um eine Standardseite auf Ihrer Website anzuzeigen. Falls dies der Fall ist, vergessen Sie nicht, sie zu löschen, wenn Sie Ihre Dateien hochladen.

> [!primary]
>
> Eine „index.php“-Datei hat immer Vorrang vor einer „index.html“-Datei. Wenn beide vorhanden sind, wird daher nur „index.php“ aufgerufen.

### 3 - Website mit einer Datenbank verbinden

> [!primary]
>
> Dieser Schritt ist optional, wenn Ihre Website nicht mit einer Datenbank verbunden werden muss.

Heute verwenden die meisten Content Management Systeme (CMS), wie z. B. WordPress oder Joomla!, eine Datenbank, um dynamische Elemente wie Kommentare oder Artikel zu speichern. Eine Verbindung zwischen den Dateien der Website und der Datenbank ist daher unerlässlich, damit die Website ordnungsgemäß funktioniert. Dazu gibt es eine Konfigurationsdatei, die die Informationen der Datenbank enthält, um diese Verbindung herzustellen.

Je nach verwendetem Website-Typ muss dieser Link manuell erstellt werden oder über eine von der Website selbst generierte Oberfläche. Dieser Vorgang besteht aus mehreren Unterphasen, von denen einige optional sein können.

#### 3.1. Bestehende Datenbank übertragen 

Wenn Sie gerade eine Website migrieren, rufen Sie die vorhandene Datenbank bei Ihrem alten Hoster ab. Wenn es sich um eine neue Website handelt, fahren Sie mit dem nächsten Schritt fort.

#### 3.2. Datenbank bei OVHcloud erstellen 

Wenn Sie bereits eine Datenbank besitzen, die Sie verwenden möchten (beispielsweise aus einem [OVHcloud Webhosting](/links/web/hosting) Angebot oder einer [Web Cloud Databases](/links/web/databases) Lösung), halten Sie bitte folgende Informationen bereit: Benutzername, zugehöriges Passwort, Name der Datenbank sowie die Serveradresse. Gehen Sie nun zum nächsten Schritt über.

Wenn Sie eine neue Datenbank bei OVHcloud erstellen möchten, klicken Sie auf die folgenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Gehen Sie auf den Tab `Datenbanken`{.action}.
>>
>> ![Databases](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `Datenbank erstellen`{.action} oder, wenn der Button nicht angezeigt wird, auf `Aktionen`{.action} und dann auf `Datenbank erstellen`{.action}. Folgen Sie den angezeigten Informationen.
>>
>> ![website installation](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/databases/tab.png){.thumbnail}

#### 3.3. Bestehende Datenbank importieren

Wenn Sie eine bereits bestehende Website migrieren, importieren Sie die bestehende Datenbank in die neu erstellte Datenbank. Wenn Sie eine neue Website erstellen, können Sie direkt zum nächsten Schritt übergehen.

Für den Import gibt es mehrere Möglichkeiten, OVHcloud bietet einen solchen über sein Kundencenter an. Klicken Sie auf die folgenden Tabs, um die **3** Schritte nacheinander anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting) und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Gehen Sie auf den Tab `Datenbanken`{.action}.
>>
> **Schritt 3**
>>
>> Klicken Sie auf den Button `...`{.action} rechts von Ihrer Datenbank und dann auf `Datei importieren`{.action}.

#### 3.4. Website mit der Datenbank verbinden

Nun, da die Datenbank verfügbar ist und Sie die Dateien in den Speicherplatz hochgeladenen haben, müssen diese nur noch miteinander verbunden werden. Vergewissern Sie sich, dass Sie über die Login-Daten der Datenbank verfügen: Benutzername, das zugehörige Passwort, Name der Datenbank und Serveradresse.

Wie Website und Datenbank miteinander verbunden werden, hängt von der Website ab, die Sie online stellen möchten. Die Vorgehensweise variiert je nach Konfiguration Ihrer Website und hat nichts mit OVHcloud zu tun. Wir empfehlen Ihnen deshalb, den Herausgeber Ihrer Website oder einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, falls Sie weitere Hilfe benötigen.

### 4 - Auf Ihre Website zugreifen

Nachdem Sie die Dateien auf den Speicherplatz hochgeladen und die Datenbank mit Ihrem Speicherplatz verbunden haben (falls Ihre Seite eine Datenbank nutzt), können Sie auf Ihre Website zugreifen. Sie sollte nun korrekt in Ihrem Webbrowser angezeigt werden.

Ist das nicht der Fall, empfehlen wir Ihnen Folgendes:

- **Prüfung der Domain-Konfiguration**: Es kann sein, dass die DNS-Konfiguration der Domain nicht erlaubt, dass diese die Website anzeigt, die Sie soeben auf Ihrem OVHcloud Webhosting heruntergeladen haben. Stellen Sie sicher, dass der aktuell in der DNS-Zone Ihrer Domain konfigurierte A-Eintrag tatsächlich der IP-Adresse Ihres OVHcloud Webhostings entspricht.

- **Stellen Sie sicher, dass keine Dateien fehlen**: Es kann vorkommen, dass Sie beim Hochladen der Dateien auf Ihr OVHcloud Webhosting Dateien vergessen haben oder ein Fehler aufgetreten ist. Seien Sie dennoch vorsichtig bei Ihren Handlungen, um den Link zwischen den Dateien der Website und der Datenbank (sofern diese verwendet wird) nicht zu zerstören.

- **Überprüfen Sie, ob der Website-Code Fehler enthält**: Diese Prüfung ist vermutlich die technischste. Es kann sein, dass die von Ihnen heruntergeladenen Dateien Fehler enthalten und der Server Ihre Website nicht ordnungsgemäß, oder sogar gar nicht, anzeigt.

Sollten Sie bei der Veröffentlichung Ihrer Website Schwierigkeiten haben, empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) und/oder den Herausgeber des Dienstes (zum Beispiel des installierten CMS) zu kontaktieren.

## Weiterführende Informationen

[Migration Ihrer Website und E-Mails zu OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

[Installation Ihrer Website mit 1-Klick-Modulen](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Passwort eines FTP-Benutzers ändern](/pages/web_cloud/web_hosting/ftp_change_password)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
