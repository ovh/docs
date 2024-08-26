---
title: "Konfiguration und Nutzung von Git mit OVHcloud Webhosting"
excerpt: "Erfahren Sie hier, wie Sie Git mit Ihrem Webhosting In Ihrem OVHcloud Kundencenter konfigurieren und verwenden"
updated: 2024-08-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In der heutigen digitalen Landschaft sind Unternehmen dynamischer und innovativer geworden. Die Fähigkeit, den Code Ihrer Website effizient zu verwalten und einzusetzen, ist entscheidend, um die Wettbewerbsfähigkeit und Nachhaltigkeit Ihrer Marke zu erhalten. Git, das weltweit am häufigsten verwendete Versionsverwaltungssystem, erlaubt die Speicherung des Codes Ihrer Website auf Plattformen wie GitHub, was eine bessere Rückverfolgbarkeit von Änderungen sowie eine schnellere Automatisierung und Bereitstellung ermöglicht. Als OVHcloud Kunde verfügen Sie über eine robuste Infrastruktur für das Hosting Ihrer Website und können gleichzeitig die zahlreichen Vorteile von Git und GitHub für die Entwicklung und Evolution Ihrer Website nutzen.

**Diese Anleitung erklärt, wie Sie Git über Ihr OVHcloud Kundencenter konfigurieren und mit Ihrem Webhosting verwenden.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager), im Bereich Web Cloud.
- Sie haben einen Account auf [GitHub](https://github.com/){.external} und sind eingeloggt.

## In der praktischen Anwendung

> [!primary]
>
> Für die Zuordnung und Konfiguration von Git müssen Sie Änderungen in Ihrem GitHub-Konto vornehmen. Bevor Sie beginnen, loggen Sie sich in Ihrem GitHub-Konto ein.
>

### Verzeichnis mit Git verknüpfen <a name="associateGitRepo"></a>

> [!warning]
>
> Wenn Sie ein Verzeichnis mit Git verknüpfen, werden alle mit diesem Verzeichnis vorhandenen Domainnamen ebenfalls mit Git verknüpft. Wenn beispielsweise das Verzeichnis für die Website, die Sie zuordnen, `www` ist, dann werden alle Domainnamen, die mit dem Verzeichnis `www` verbunden sind, ebenfalls mit Git verknüpft.
>

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager) und führen Sie die folgenden Aktionen aus:

- Gehen Sie zum Tab `Web Cloud`{.action}.
- Wählen Sie Ihr Hosting im Bereich `Hosting-Pakete`{.action} auf der linken Seite.
- Klicken Sie auf den Tab `Multisite`{.action}.
- Geben Sie in der angezeigten Tabelle die Zeile an, die dem Verzeichnis entspricht, das Sie mit Git verknüpfen möchten.
- Klicken Sie auf den Button `...`{.action} und wählen Sie `Git zuordnen`{.action} zuordnen.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/link-git.png){.thumbnail}

Das Git-Zuordnungsformular wird angezeigt. Mehrere Elemente müssen konfiguriert werden:

- SSH-Schlüssel
- GitHub-Repository
- Zweig des GitHub-Repositorys
- Webhook (optional)

#### Einen SSH-Schlüssel mit GitHub verbinden <a name="linkSSHKey"></a>

> [!primary]
>
> Die Erstellung eines SSH-Schlüssels ist ein wichtiger Schritt, da er eine sichere verschlüsselte Verbindung zwischen dem Verzeichnis Ihrer Website und dem GitHub-Repository herstellt. Dieser Schlüssel stellt sicher, dass Datenübertragungen und Codeänderungen sicher und authentifiziert erfolgen, um unbefugten Zugriff zu verhindern und die Codeintegrität zu gewährleisten.
>

Kopieren Sie den SSH-Schlüssel und speichern Sie ihn in Ihrem GitHub-Konto. So können Sie eine sichere Verbindung herstellen, ohne dass für jede Git-Operation ein Kennwort eingegeben werden muss.

- Melden Sie sich bei Ihrem GitHub-Konto an.
- Klicken Sie oben rechts auf Ihr Profilbild und dann auf `Settings`{.action}.
- Klicken Sie auf der neuen Seite in der linken Spalte auf `SSH and GPG keys`{.action}.
- Wählen Sie `New SSH key`{.action} oder `Add SSH key`{.action}.

Das Formular zum Hinzufügen eines neuen SSH-Schlüssels wird angezeigt:

- **Title**: Geben Sie eine Beschreibung für Ihren SSH-Schlüssel ein. Sie können diesen Schlüssel zum Beispiel „OVHcloud“ nennen.
- **Type of key**: Übernehmen Sie den Standardwert `authentication key`{.action}
- **Key**: Fügen Sie Ihren SSH-Schlüssel ein.

Um die Informationen zu bestätigen, klicken Sie auf `Add SSH key`{.action}. Wenn Sie dazu aufgefordert werden, bestätigen Sie den Zugriff auf Ihr Konto in GitHub.

#### GitHub-Repository definieren

Kehren Sie zum Git-Zuordnungsformular in Ihrem OVHcloud Kundencenter zurück. Sie müssen die Adresse Ihres GitHub-Repositorys angeben. Wenn Sie noch kein GitHub-Repository für Ihr Projekt haben, erstellen Sie eines.

So erstellen Sie ein neues Repository:

- Melden Sie sich bei Ihrem GitHub-Konto an.
- Klicken Sie oben rechts auf Ihr Profilbild und dann auf `Your repositories`{.action}.
- Klicken Sie auf der rechten Seite des Bildschirms auf `New`{.action}.

Legen Sie einen Namen für Ihr Repository fest und geben Sie die angeforderten Informationen ein.

> [!warning]
>
> Aktivieren Sie die Option `Add a README file`, damit GitHub Ihr Repository korrekt initialisiert.
>

Klicken Sie abschließend auf `Create Repository`{.action}.

Kopieren Sie die Adresse Ihres GitHub-Repositorys. Diese muss im Format `https://github.com/<username>/<repository_name.git>`{.action} vorliegen. Kehren Sie zum Git-Zuordnungsformular zurück und fügen Sie die Adresse Ihres GitHub-Repositorys in das Feld `Repository`{.action} ein. Wenn das Adressformat nicht korrekt ist, wird die folgende Fehlermeldung angezeigt:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-repository-name.png){.thumbnail}

Legen Sie nun den Zweig Ihres GitHub-Repositorys fest. Die Standardverzweigung ist `main`. Wenn Sie jedoch eine andere Verzweigung verwenden möchten, erstellen Sie eine auf GitHub, indem Sie die folgenden Schritte ausführen:

- Melden Sie sich bei Ihrem GitHub-Konto an.
- Klicken Sie oben rechts auf Ihr Profilbild und dann auf `Your repositories`{.action}.
- Gehen Sie zum betreffenden GitHub-Repository.
- Klicken Sie auf `Main`{.action} und dann auf `View all branches`{.action}, oder klicken Sie direkt auf den Tab `x branch`{.action}.
- Klicken Sie rechts auf dem Bildschirm auf `New branch`{.action}.
- Geben Sie den Namen der neuen Verzweigung an und bestätigen Sie dies durch Klicken auf `Create new branch`{.action}.

Kehren Sie zum Git-Zuordnungsformular in Ihrem OVHcloud Kundencenter zurück und geben Sie den Namen des gerade erstellten neuen Zweigs ein.

#### Automatische Bereitstellung konfigurieren

Am unteren Rand des Git-Zuordnungsformulars wird ein Abschnitt `Automatische Bereitstellung konfigurieren`{.action} mit der Webhook-URL angezeigt. Mit der Konfiguration eines Webhooks kann Ihr GitHub-Repository Ihr OVHcloud Webhosting automatisch über Ereignisse im GitHub-Repository benachrichtigen (neue Inbetriebnahme, Änderung des Codes usw.). Diese Funktion ist besonders nützlich, wenn Sie in einer Gruppe an demselben Projekt arbeiten und alle Änderungen am GitHub-Repository auf dem neuesten Stand halten möchten. Weitere Informationen finden Sie unter [Webhook auf GitHub einrichten](#configureWebhook).

#### Git-Zuordnung überprüfen

Bevor Sie das Git-Zuordnungsformular bestätigen, überprüfen Sie:

- Ihr SSH-Schlüssel wurde erfolgreich in Ihrem GitHub-Konto gespeichert.
- Die Adresse Ihres GitHub-Repositorys ist korrekt. Sie muss im Format `https://github.com/<username>/<repository_name.git>`{.action} vorliegen.
- Der Zweigname des GitHub-Repositorys ist korrekt.
- Das Installationsverzeichnis ist leer.

Um die Informationen im Git-Zuordnungsformular zu bestätigen, klicken Sie auf `Konfiguration anwenden`{.action}.

### Git-Zuordnung aktivieren

#### Git-Assoziierung - Erfolg

Nachdem Sie das Git-Zuordnungsformular bestätigt haben, werden Sie zum Tab Multisite weitergeleitet.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

Ein grünes Banner zeigt an, dass Git aktiviert wird. Verfolgen Sie die Aktivierung von Git, indem Sie auf `Aktuelle Tasks`{.action} klicken.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

Der Status `Wird ausgeführt`{.action} zeigt an, dass die Git-Zuordnung in Bearbeitung ist. Dieser Vorgang kann einige Minuten dauern. Wenn die Aufgabe abgeschlossen ist, wird der Status `Aktiviert`{.action} angezeigt.

Sie können den Fortschritt der Git-Aktivierung auch im Tab `Multisite`{.action} verfolgen. Suchen Sie in der Tabelle die Zeilen für das Verzeichnis, das Sie mit Git verknüpfen möchten. In der Spalte `Git`{.action} wird für jede der betroffenen Zeilen durch den Eintrag `Wird ausgeführt`{.action} angezeigt, dass Git aktiviert ist.

Wenn die Git-Zuordnung abgeschlossen ist, wird der Status `Aktiviert`{.action} in der Spalte `Git`{.action} für die betreffenden Zeilen angezeigt.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Fehler bei der Git-Zuordnung

Suchen Sie in der Tabelle in `Multisite`{.action} die Zeilen für das Verzeichnis, das Sie mit Git verknüpfen möchten. Wenn in der Spalte `Git` der Eintrag `Fehler` angezeigt wird, ist mindestens einer der folgenden Fehler aufgetreten:

- Der SSH-Schlüssel wurde nicht in Ihrem GitHub-Konto gespeichert.
- Das Installationsverzeichnis ist nicht leer.
- Die GitHub-Repository-Adresse ist nicht vorhanden oder falsch.
- Der Zweig des GitHub-Repositorys ist nicht vorhanden, oder der Name ist falsch.

Die genaue Fehlerursache finden Sie in den Informationen zur letzten Bereitstellung. Suchen Sie in der Tabelle die Zeile für den Domainnamen, dessen Logs Sie für die letzte Bereitstellung anzeigen möchten. Rechts in der Zeile klicken Sie auf den Button `...`{.action} und dann auf `Informationen zur lezten Bereitstellung`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/info-last-deployment-button.png){.thumbnail}

Wenn Sie den Fehler identifiziert haben, ordnen Sie Git erneut zu. Wiederholen Sie den Vorgang, indem Sie auf die Schaltfläche `...`{.action} in der entsprechenden Zeile und dann auf `Git zuordnen`{.action} klicken.

### Deployment Ihres GitHub-Repositorys auf Ihrem OVHcloud Webhosting

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Wählen Sie den Tab `Multisite`{.action}. Suchen Sie in der angezeigten Tabelle die Zeile für den Domainnamen, den Sie mit Git deployen möchten. Stellen Sie sicher, dass der Status der Git-Spalte `Aktiviert`{.action} ist. Klicken Sie auf den Button `...`{.action} und dann auf `Git deployen`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

Es wird eine Bestätigungsmeldung angezeigt, dass Sie bei einem Konflikt während der Bereitstellung Remote-Änderungen (aus dem GitHub-Repository) in Ihrem lokalen Repository erzwingen können. Aktivieren oder deaktivieren Sie die Option hierzu, und klicken Sie auf `Bestätigen`{.action}, um die Bereitstellung zu bestätigen.

> [!warning]
>
> Um den Verlust lokaler Änderungen zu vermeiden, sollten Sie diese speichern, bevor Sie die Änderungen in der Remote-Verzweigung überschreiben.
>

Die neue Version Ihrer Website wurde erfolgreich auf Ihrem OVHcloud Hosting bereitgestellt. Wenn andere Personen am gleichen Projekt arbeiten und Änderungen am GitHub-Repository vornehmen, dann können Sie [einen Webhook auf GitHub einrichten](#configureWebhook), damit die Änderungen automatisch auf Ihrem Webhosting bereitgestellt werden. So müssen Sie Git nicht manuell bereitstellen, und Ihr Webhosting bleibt immer auf dem neuesten Stand.

### Domainnamen bearbeiten

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Wählen Sie den Tab `Multisite`{.action}. Suchen Sie in der angezeigten Tabelle die Zeile für die Domain, die Sie ändern möchten. Klicken Sie auf den Button `...`{.action} und dann auf `Domain bearbeiten`{.action}. Es gibt zwei mögliche Szenarien:

#### Der Domainname ist nicht der einzige, der dem Verzeichnis zugeordnet ist

Das folgende Fenster wird angezeigt:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Bearbeiten Sie die gewünschten Informationen und klicken Sie auf `Weiter`{.action}.

Ein zweites Bestätigungsfenster mit einer Zusammenfassung Ihrer Änderungen wird angezeigt.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um die Änderungen Ihrer Domain zu bestätigen.

#### Der Domainname ist der einzige, der dem Verzeichnis zugeordnet ist

Das folgende Fenster wird angezeigt:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

Wie in der Nachricht erwähnt, [löschen Sie Ihre Git-Assoziation](#deleteGitAssociation), bevor Sie Ihren Domainnamen ändern.

### Trennen eines Domainnamens

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Wählen Sie den Tab `Multisite`{.action}. Identifizieren Sie in der angezeigten Tabelle die Zeile für die Domain, die Sie von Ihrem OVHcloud Webhosting trennen möchten. Klicken Sie auf den Button `...`{.action} und dann auf `Domain abtrennen`{.action}. Es gibt zwei mögliche Szenarien:

#### Der Domainname ist nicht der einzige, der dem Verzeichnis zugeordnet ist

Das folgende Fenster wird angezeigt.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um die Abtrennung Ihrer Domain zu bestätigen.

#### Der Domainname ist der einzige, der dem Verzeichnis zugeordnet ist

Das folgende Fenster wird angezeigt:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

Wie in der Nachricht erwähnt, [löschen Sie Ihre Ihre Git-Assoziation](#deleteGitAssociation), bevor Sie Ihren Domainnamen freigeben.

### Git konfigurieren

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Wählen Sie den Tab `Multisite`{.action}. Suchen Sie in der angezeigten Tabelle die Zeile für das Verzeichnis, das Sie mit Git konfigurieren möchten. Klicken Sie auf `...`{.action} und dann auf `Git konfigurieren`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Die folgenden Informationen werden angezeigt:

- SSH-Schlüssel: Wenn Sie dies noch nicht getan haben, [speichern Sie Ihren SSH-Schlüssel in Ihrem GitHub-Konto](#linkSSHKey).
- Repository: Die Adresse Ihres GitHub-Repositorys. Dieses Feld ist abgeblendet, da Sie die Adresse des GitHub-Repositorys nicht ändern können. Um die URL des GitHub-Repositorys zu ändern, müssen Sie [die Git-Zuordnung aus Ihrem Verzeichnis entfernen](#deleteGitAssociation) und anschließend [das Verzeichnis erneut Git zuordnen](#associateGitRepo).
- Verzweigung: Der Name der Verzweigung des GitHub-Repositorys. Sie können dieses Feld bearbeiten.
- Webhook-URL: Wenn Sie Ihre Bereitstellungen auf Git optimieren möchten, [konfigurieren Sie den Webhook auf GitHub](#configureWebhook).

### Informationen zur letzten Bereitstellung

Nachdem Sie Ihr GitHub-Repository auf Ihrem Webhosting eingerichtet haben, können Sie die Informationen zur letzten Bereitstellung wie Fehler, Tests oder andere nützliche Informationen einsehen.

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Wählen Sie den Tab `Multisite`{.action}. Geben Sie in der angezeigten Tabelle die Zeile für die Domain an, für die Sie die Logs der letzten Bereitstellung anzeigen möchten. Rechts in der Zeile klicken Sie auf den Button `...`{.action} und dann auf `Informationen zur lezten Bereitstellung`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/informations-last-git-deployment-button.png){.thumbnail}

Hier finden Sie alle Informationen zur letzten Bereitstellung.

### Zuordnung von Git entfernen <a name="deleteGitAssociation"></a>

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Wählen Sie den Tab `Multisite`{.action}. Geben Sie in der angezeigten Tabelle die Zeile an, die dem Verzeichnis entspricht, dessen Zuordnung zu Git Sie aufheben möchten. Klicken Sie auf den Button `...`{.action} und dann auf `Git löschen`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

Das folgende Fenster wird angezeigt:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

Die Meldung informiert Sie darüber, dass die Löschung für alle Domainnamen gilt, die mit Ihrem Verzeichnis verbunden sind. Aktivieren Sie die Option `Möchten Sie den Inhalt des Verzeichnisses <your_directory> leeren?`{.action}, wenn Sie auch den Inhalt (Ordner und Dateien) des Verzeichnisses löschen möchten.

1\.	Wenn Sie die Option aktivieren, wird das folgende Fenster angezeigt:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um das Löschen der Git-Zuordnung aus Ihrem Verzeichnis und deren Inhalt zu bestätigen.

2\.	Wenn Sie die Option nicht aktivieren, wird das folgende Fenster angezeigt:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Klicken Sie auf `Bestätigen`{.action}, um das Löschen der Git-Zuordnung aus Ihrem Verzeichnis zu bestätigen.

### Webhook auf GitHub konfigurieren

#### Webhook-URL abrufen

> [!primary]
>
> Wenn Sie sich bereits im Git-Zuordnungsformular befinden, kopieren Sie die Webhook-URL und fahren Sie mit „[Webhook konfigurieren](#configureWebhook)“ fort.
>

Verbinden Sie sich mit Ihrem [OVHcloud Kundencenter](/links/manager), gehen Sie in den Bereich `Web Cloud`{.action}, klicken Sie auf `Hosting-Pakete`{.action} und wählen Sie das betreffende Hosting aus. Wählen Sie den Tab `Multisite`{.action}. Geben Sie in der angezeigten Tabelle die Zeile an, die dem Verzeichnis entspricht, in dem Sie einen Webhook konfigurieren möchten. Klicken Sie auf `...`{.action} und dann auf `Git konfigurieren`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

Suchen Sie unten im angezeigten Formular die Adresse im Feld `Webhook-URL`{.action}, und kopieren Sie sie. Sie müssen nun die URL speichern und den Webhook in Ihrem GitHub-Konto konfigurieren.

#### Webhook konfigurieren <a name="configureWebhook"></a>

Melden Sie sich bei Ihrem GitHub-Konto an und greifen Sie auf das Repository zu, in dem Sie den Webhook konfigurieren möchten. Gehen Sie auf den Tab `Settings`{.action} und klicken Sie dann im Seitenmenü der Einstellungen auf `Webhooks`{.action}. Klicken Sie auf `Add webhook`{.action}, um auf das Formular zuzugreifen:

- **Payload URL**: Geben Sie die im Git-Zuordnungsformular angegebene URL ein (`Webhook-URL`{.action}).
- **Content type**: Wählen Sie `application/json`{.action} als Content-Typ für die gesendeten Daten.
- **Secret**: Dies ist optional. GitHub wird diese Funktion zum Signieren von Webhook-Nachrichten verwenden und so die Sicherheit erhöhen.
- **SSL Verification**: Wenn Ihre Website HTTPS unterstützt, lassen Sie diese Option aktiviert, um die Sicherheit zu erhöhen.
- **Which events would you like to trigger this webhook?**: Wählen Sie die Ereignisse aus, die den Versand des Webhooks auslösen. Für die automatische Bereitstellung ist `Just the Push event`{.action} (Nur das Push-Ereignis) oft ausreichend, aber Sie können `Send me everything`{.action} auswählen, um Benachrichtigungen für alle Ereignisse zu erhalten.
- **Active**: Vergewissern Sie sich, dass diese Option aktiviert ist, um den Webhook zu aktivieren.

Klicken Sie auf `Add webhook`{.action}, um Ihren neuen Webhook zu speichern und zu aktivieren.

#### Webhook testen

Nachdem Sie Ihren Webhook in GitHub erstellt haben, gehen Sie in die Liste Ihrer Webhooks und wählen Sie den soeben erstellten aus, oder klicken Sie auf `Edit`{.action}.

Klicken Sie auf den Tab `Recent Deliveries`{.action}. Um ein bestimmtes Testereignis zu senden, sendet GitHub normalerweise ein `ping`-Ereignis beim Erstellen des Webhooks, und Sie können die Schaltfläche `Redeliver`{.action} neben dem Ereignis verwenden, um es zu testen.

Wenn der Test erfolgreich war, gibt `Response`{.action} einen Code 200 zurück. Wenn ein Fehlercode zurückgegeben wird (normalerweise 500 oder 400), bedeutet dies, dass Ihr Webhook falsch konfiguriert wurde. Gehen Sie zurück zum Formular zum Hinzufügen eines Webhooks und überprüfen Sie die Informationen, insbesondere die von OVHcloud bereitgestellte Webhook-URL.

#### Webhook verwenden

Sobald Ihr Webhook eingerichtet ist, wird der Code Ihrer Website bei jeder Änderung im GitHub-Repository automatisch aktualisiert. Wenn zum Beispiel ein Kollege Änderungen am GitHub-Repository vornimmt, wird der Code Ihrer Website lokal aktualisiert (auf Ihrem OVHcloud Hosting).

### Fazit

Sie haben soeben den Code Ihrer Website über Ihr GitHub-Repository mit Git verbunden. Sie können nun die am GitHub-Repository vorgenommenen Änderungen auf Ihrem Webhosting deployen oder sie mithilfe des Webhooks automatisiert deployen, die Logs Ihrer Deployments einsehen und zahlreiche Aktionen durchführen. All dies erfolgt mit nur wenigen Klicks über Ihr Kundencenter.

## Weiterführende Informationen

[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
