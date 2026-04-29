---
title: "Konfiguration und Nutzung von Git mit OVHcloud Webhosting"
excerpt: "Erfahren Sie hier, wie Sie Git mit Ihrem Webhosting In Ihrem OVHcloud Kundencenter konfigurieren und verwenden"
updated: 2026-05-04
---

## Ziel

In der heutigen digitalen Landschaft sind Unternehmen dynamischer und innovativer geworden. Die Fähigkeit, den Code Ihrer Website effizient zu verwalten und einzusetzen, ist entscheidend, um die Wettbewerbsfähigkeit und Nachhaltigkeit Ihrer Marke zu erhalten. Git, das weltweit am häufigsten verwendete Versionsverwaltungssystem, erlaubt die Speicherung des Codes Ihrer Website auf Plattformen wie GitHub, was eine bessere Rückverfolgbarkeit von Änderungen sowie eine schnellere Automatisierung und Bereitstellung ermöglicht. Als OVHcloud Kunde verfügen Sie über eine robuste Infrastruktur für das Hosting Ihrer Website und können gleichzeitig die zahlreichen Vorteile von Git und GitHub für die Entwicklung und Evolution Ihrer Website nutzen.

**Diese Anleitung erklärt, wie Sie Git über Ihr OVHcloud Kundencenter konfigurieren und mit Ihrem Webhosting verwenden.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting).
- Sie haben einen Account auf [GitHub](https://github.com/) und sind eingeloggt.

> [!primary]
>
> Bis dato wird nur die GitHub-Plattform für die Verwendung mit OVHcloud Webhosting-Diensten unterstützt.

<!-- CP-NAV-START:web-hosting -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Hosting-Pakete](/links/control-panel/web-hosting)
- **Navigationspfad:** `Web Cloud`{.action} > `Hosting-Pakete`{.action} > Wählen Sie Ihr Webhosting aus

---
<!-- CP-NAV-END:web-hosting -->

## In der praktischen Anwendung

> [!primary]
>
> Für die Zuordnung und Konfiguration von Git müssen Sie Änderungen in Ihrem GitHub-Account vornehmen. Bevor Sie beginnen, loggen Sie sich in Ihrem GitHub-Account ein.

### Verzeichnis mit Git verknüpfen <a name="associateGitRepo"></a>

> [!warning]
>
> Wenn Sie ein Verzeichnis mit Git verknüpfen, werden alle mit diesem Verzeichnis vorhandenen Domainnamen ebenfalls mit Git verknüpft. Wenn beispielsweise das Verzeichnis für die Website, die Sie zuordnen, `www` ist, dann werden alle Domainnamen, die mit dem Verzeichnis `www` verbunden sind, ebenfalls mit Git verknüpft.

<!-- CP-STEPS-START:associate-git-repo -->
Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben dem gewünschten Website, und dann auf `Git zuordnen`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Das Git-Verknüpfungsformular wird angezeigt. Mehrere Elemente müssen konfiguriert werden:
>>
>> - GitHub-Repository
>> - Zweig des GitHub-Repositorys
>> - SSH-Schlüssel (für ein privates GitHub-Repository)
>> - Webhook (optional)
>>
>> Lesen Sie weiter in dieser Anleitung, um die erforderlichen Informationen zu erhalten, um die erforderlichen Felder auszufüllen.
<!-- CP-STEPS-END:associate-git-repo -->

<!-- CP-STEPS-START:git-association-form -->
#### GitHub-Repository definieren

Geben Sie die Adresse Ihres GitHub-Repositorys ein. Wenn Sie noch kein GitHub-Repository für Ihr Projekt haben, erstellen Sie eines.

So erstellen Sie ein neues Repository:

- Melden Sie sich bei Ihrem GitHub-Account an.
- Klicken Sie oben rechts auf Ihr Profilbild und dann auf `Your repositories`{.action}.
- Klicken Sie auf der rechten Seite des Bildschirms auf `New`{.action}.

Legen Sie einen Namen für Ihr Repository fest und geben Sie die angeforderten Informationen ein.

> [!warning]
>
> Aktivieren Sie die Option `Add a README file`, damit GitHub Ihr Repository korrekt initialisiert.

Klicken Sie abschließend auf `Create Repository`{.action}.

Kopieren Sie die Adresse Ihres GitHub-Repositorys. Diese muss folgende Form haben:

- `https://github.com/<username>/<repository_name>.git` für ein öffentliches Repository.
- `git@github.com:<username>/<repository_name>.git` für ein privates Repository.

Kehren Sie zum Git-Zuordnungsformular zurück und fügen Sie die Adresse Ihres GitHub-Repositorys in das Feld `Repository`{.action} ein. Wenn das Adressformat nicht korrekt ist, wird die folgende Fehlermeldung angezeigt:

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-repository-name.png){.thumbnail}

Legen Sie nun den Zweig Ihres GitHub-Repositorys fest. Die Standardverzweigung ist `main`. Wenn Sie jedoch eine andere Verzweigung verwenden möchten, erstellen Sie eine auf GitHub, indem Sie die folgenden Schritte ausführen:

- Melden Sie sich bei Ihrem GitHub-Account an.
- Klicken Sie oben rechts auf Ihr Profilbild und dann auf `Your repositories`{.action}.
- Gehen Sie zum betreffenden GitHub-Repository.
- Klicken Sie auf `Main`{.action} und dann auf `View all branches`{.action}, oder klicken Sie direkt auf den Tab `x branch`{.action}.
- Klicken Sie rechts auf dem Bildschirm auf `New branch`{.action}.
- Geben Sie den Namen der neuen Verzweigung an und bestätigen Sie dies durch Klicken auf `Create new branch`{.action}.

Kehren Sie zum Git-Zuordnungsformular in Ihrem OVHcloud Kundencenter zurück und geben Sie den Namen des gerade erstellten neuen Zweigs ein.

Wenn Sie die Adresse eines privaten GitHub-Repositorys (Typ `git@github.com:<username>/<repository_name>.git`) eingeben, wird unterhalb des Felds `Branch` ein `SSH key` (SSH-Schlüssel) angezeigt.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key.png){.thumbnail}

Um Ihren SSH-Schlüssel zu konfigurieren, folgen Sie dem Schritt "Einen SSH-Schlüssel mit GitHub verbinden (nur für private GitHub-Repositorys)".
<!-- CP-STEPS-END:git-association-form -->

### Einen SSH-Schlüssel mit GitHub verbinden (nur für private GitHub-Repositorys) <a name="linkSSHKey"></a>

<!-- CP-STEPS-START:git-activation-status -->
> [!primary]
>
> **Warum wird der SSH-Schlüssel nur für ein privates Repository benötigt?**
>
> Wenn Ihr GitHub-Repository öffentlich ist, können die Dateien ohne Authentifizierung abgerufen werden, was bedeutet, dass Git den Code klonen und aktualisieren kann, ohne einen SSH-Schlüssel zu benötigen. Wenn Ihr Repository jedoch privat ist, verlangt GitHub eine Authentifizierung, um darauf zuzugreifen. Der SSH-Schlüssel stellt dann diese sichere Verbindung her und gewährleistet, dass nur autorisierte Benutzer mit dem Repository interagieren können.

> [!primary]
>
> Die Erstellung eines SSH-Schlüssels ist ein wichtiger Schritt, da er eine sichere verschlüsselte Verbindung zwischen dem Verzeichnis Ihrer Website und dem GitHub-Repository herstellt. Dieser Schlüssel stellt sicher, dass Datenübertragungen und Codeänderungen sicher und authentifiziert erfolgen, um unbefugten Zugriff zu verhindern und die Codeintegrität zu gewährleisten.

Kopieren Sie Ihren SSH-Schlüssel, indem Sie rechts auf den Button klicken.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/field-ssh-key-copy.png){.thumbnail}

Speichern Sie den SSH-Schlüssel in Ihrem GitHub-Account:

- Melden Sie sich bei Ihrem GitHub-Account an.
- Klicken Sie oben rechts auf Ihr Profilbild und dann auf `Settings`{.action}.
- Klicken Sie auf der neuen Seite in der linken Spalte auf `SSH and GPG keys`{.action}.
- Wählen Sie `New SSH key`{.action} oder `Add SSH key`{.action}.

Das Formular zum Hinzufügen eines neuen SSH-Schlüssels wird angezeigt:

- **Title**: Geben Sie eine Beschreibung für Ihren SSH-Schlüssel ein. Sie können diesen Schlüssel zum Beispiel "OVHcloud" nennen.
- **Type of key**: Übernehmen Sie den Standardwert `authentication key`{.action}
- **Key**: Fügen Sie Ihren SSH-Schlüssel ein.

Um die Informationen zu bestätigen, klicken Sie auf `Add SSH key`{.action}. Wenn Sie dazu aufgefordert werden, bestätigen Sie den Zugriff auf Ihren Account in GitHub.

#### Automatische Bereitstellung konfigurieren

Am unteren Rand des Git-Zuordnungsformulars wird ein Abschnitt `Automatische Bereitstellung konfigurieren`{.action} mit der Webhook-URL angezeigt. Mit der Konfiguration eines Webhooks kann Ihr GitHub-Repository Ihr OVHcloud Webhosting automatisch über Ereignisse im GitHub-Repository benachrichtigen (neue Inbetriebnahme, Änderung des Codes etc.). Diese Funktion ist besonders nützlich, wenn Sie in einer Gruppe an demselben Projekt arbeiten und alle Änderungen am GitHub-Repository auf dem neuesten Stand halten möchten. Weitere Informationen finden Sie unter [Webhook auf GitHub einrichten](#configureWebhook).

#### Git-Zuordnung überprüfen

Bevor Sie das Git-Zuordnungsformular bestätigen, überprüfen Sie:

- Ihr SSH-Schlüssel wurde erfolgreich in Ihrem GitHub-Account gespeichert.
- Die Adresse Ihres GitHub-Repositorys ist korrekt. Sie muss im Format `https://github.com/<username>/<repository_name>.git` vorliegen.
- Der Zweigname des GitHub-Repositorys ist korrekt.
- Das Installationsverzeichnis ist leer.

Um die Informationen im Git-Zuordnungsformular zu bestätigen, klicken Sie auf `Konfiguration anwenden`{.action}.
<!-- CP-STEPS-END:git-activation-status -->

### Git-Zuordnung aktivieren

#### Git-Assoziierung - Erfolg

Nachdem Sie das Git-Verknüpfungsformular bestätigt haben, werden Sie auf den Tab `Meine Seiten`{.action} weitergeleitet.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/git-activation-ongoing.png){.thumbnail}

Ein grünes Banner zeigt an, dass Git aktiviert wird. Verfolgen Sie die Aktivierung von Git, indem Sie auf `Aktuelle Tasks`{.action} klicken.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ongoing-tasks/ongoing-task-git-activation.png){.thumbnail}

Der Status `Wird ausgeführt`{.action} zeigt an, dass die Git-Zuordnung in Bearbeitung ist. Dieser Vorgang kann einige Minuten dauern. Wenn die Aufgabe abgeschlossen ist, wird der Status `Aktiviert`{.action} angezeigt.

Sie können auch den Fortschritt der Git-Aktivierung über den Tab `Meine Seiten`{.action} verfolgen. In der Spalte `Git`{.action} der Tabelle zeigt der Hinweis `Wird ausgeführt`{.action} an, dass Git aktiviert wird.

Wenn die Git-Verknüpfung abgeschlossen ist, wird der Status `Aktiviert`{.action} in der Spalte `Git`{.action} für die betroffene Website angezeigt.

![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Fehler bei der Git-Zuordnung

Im Tabellenbereich des Tabs `Meine Seiten`{.action} identifizieren Sie die Zeilen, die dem Verzeichnis der Website entsprechen, die Sie mit Git verknüpfen möchten. In der Spalte `Git` wird der Hinweis `Fehler` angezeigt, was bedeutet, dass mindestens eine der folgenden Fehler aufgetreten ist:

- Der SSH-Schlüssel wurde nicht in Ihrem GitHub-Account gespeichert.
- Das Installationsverzeichnis ist nicht leer.
- Die GitHub-Repository-Adresse ist nicht vorhanden oder falsch.
- Der Zweig des GitHub-Repositorys ist nicht vorhanden, oder der Name ist falsch.

Um die genaue Ursache des Fehlers zu ermitteln, konsultieren Sie die Informationen des letzten Deployments. Klicken Sie in der Tabelle auf den Button `⁝`{.action} rechts neben der betroffenen Website und dann auf `Informationen zur lezten Bereitstellung`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Wenn Sie den Fehler identifiziert haben, ordnen Sie Git erneut zu. Wiederholen Sie den Vorgang, indem Sie auf den Button `⁝`{.action} rechts neben der betroffenen Website klicken und dann auf `Git zuordnen`{.action}.

### Deployment Ihres GitHub-Repositorys auf Ihrem OVHcloud Webhosting

<!-- CP-STEPS-START:deploy-github-repo -->
Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben der betroffenen Website und dann auf `Git deployen`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Es wird eine Bestätigungsmeldung angezeigt, dass Sie bei einem Konflikt während der Bereitstellung Remote-Änderungen (aus dem GitHub-Repository) in Ihrem lokalen Repository erzwingen können. Aktivieren oder deaktivieren Sie die Option hierzu, und klicken Sie auf `Bestätigen`{.action}, um die Bereitstellung zu bestätigen.
>>
>> > [!warning]
>> >
>> > Um Ihre lokalen Änderungen nicht zu verlieren, sollten Sie diese vor dem Überschreiben durch die Änderungen des entfernten Zweigs sichern.
>>
>> Die neue Version Ihrer Website wurde erfolgreich auf Ihrem OVHcloud Webhosting bereitgestellt. Wenn andere Personen am gleichen Projekt arbeiten und Änderungen an das GitHub-Repository vornehmen, können Sie [einen Webhook auf GitHub konfigurieren](#configureWebhook), damit diese Änderungen automatisch auf Ihrem Webhosting bereitgestellt werden. So müssen Sie Git nicht manuell bereitstellen, und Ihr Webhosting bleibt immer auf dem neuesten Stand.
<!-- CP-STEPS-END:deploy-github-repo -->

### Domainnamen bearbeiten

<!-- CP-STEPS-START:modify-domain-name -->
Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `>`{.action} links neben dem Namen der Website, um die zugehörigen Domainnamen oder Subdomains anzuzeigen.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Klicken Sie anschließend auf den Button `⁝`{.action} rechts neben dem gewünschten Domainnamen oder Subdomain und dann auf `Domain bearbeiten`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Es gibt zwei mögliche Szenarien:
>>
>> **1 - Ein oder mehrere andere Domainnamen sind an die Website angehängt**
>>
>> Das folgende Fenster wird angezeigt:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>>
>> Passen Sie die Informationen nach Ihren Wünschen an und klicken Sie auf `Weiter`{.action}.
>>
>> Ein zweites Bestätigungsfenster wird angezeigt mit einem Zusammenfassung Ihrer Änderungen:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um die Änderungen an Ihrem Domainnamen zu bestätigen.
>>
>> **2 - Nur ein Domainname ist an die Website angehängt**
>>
>> Das folgende Fenster wird angezeigt:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>>
>> Wie in der Nachricht erwähnt, [löschen Sie Ihre Git-Assoziation](#deleteGitAssociation), bevor Sie Ihren Domainnamen ändern.
<!-- CP-STEPS-END:modify-domain-name -->

### Abtrennen eines Domainnamens

<!-- CP-STEPS-START:detach-domain-name -->
Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `>`{.action} links neben dem Namen der Website, um die zugehörigen Domainnamen oder Subdomains anzuzeigen.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Klicken Sie anschließend auf den Button `⁝`{.action} rechts neben dem gewünschten Domainnamen oder Subdomain und dann auf `Domain abtrennen`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Es gibt zwei mögliche Szenarien:
>>
>> **1 - Ein oder mehrere andere Domainnamen sind an die Website angehängt**
>>
>> Das folgende Fenster wird angezeigt.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> Klicken Sie auf `Bestätigen`{.action}, um das Abtrennen Ihres Domainnamens zu bestätigen.
>>
>> **2 - Nur ein Domainnamen ist an die Website angehängt**
>>
>> Das folgende Fenster wird angezeigt:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>>
>> Wie in der Nachricht erwähnt, [löschen Sie Ihre Ihre Git-Assoziation](#deleteGitAssociation), bevor Sie Ihren Domainnamen freigeben.
<!-- CP-STEPS-END:detach-domain-name -->

### Git konfigurieren

<!-- CP-STEPS-START:configure-git -->
Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben der betroffenen Website und dann auf `Git konfigurieren`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Die folgenden Informationen werden angezeigt:
>>
>> - SSH-Schlüssel: Falls Sie dies noch nicht getan haben, [registrieren Sie Ihren SSH-Schlüssel in Ihrem GitHub-Account](#linkSSHKey).
>> - Repository: Adresse Ihres Git-Repositorys. Dieses Feld ist grau, da Sie die Adresse des Git-Repositorys nicht ändern können. Um die URL des Git-Repositorys zu ändern, müssen Sie [die Git-Verknüpfung Ihres Verzeichnisses entfernen](#deleteGitAssociation) und anschließend [das Verzeichnis erneut mit Git verknüpfen](#associateGitRepo).
>> - Zweig: Name des GitHub-Repository-Zweigs. Sie können dieses Feld ggf. ändern.
>> - Webhook-URL: Falls Sie Ihre Deployments auf Git optimieren möchten, [konfigurieren Sie den Webhook auf GitHub](#configureWebhook).
<!-- CP-STEPS-END:configure-git -->

### Informationen zur letzten Bereitstellung

Nachdem Sie Ihr GitHub-Repository auf Ihrem Webhosting eingerichtet haben, können Sie die Informationen zur letzten Bereitstellung wie Fehler, Tests oder andere nützliche Informationen einsehen.

<!-- CP-STEPS-START:latest-deployment-info -->
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
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben der betroffenen Website und dann auf `Informationen zur lezten Bereitstellung`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
>> Auf diesem Bildschirm finden Sie alle Informationen zum letzten Deployment.
<!-- CP-STEPS-END:latest-deployment-info -->

### Zuordnung von Git entfernen <a name="deleteGitAssociation"></a>

<!-- CP-STEPS-START:delete-git-association -->
Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben der betroffenen Website und dann auf `Git löschen`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>>
> **Schritt 4**
>>
>> Das folgende Fenster wird angezeigt:
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}
>>
>> Die Meldung informiert Sie darüber, dass die Löschung auf alle Domains angewendet wird, die an Ihre Website angehängt sind. Aktivieren Sie die Option `Möchten Sie den Inhalt des Verzeichnisses <your_directory> leeren?`{.action}, wenn Sie auch den Inhalt (Ordner und Dateien) des Verzeichnisses löschen möchten.
>> 
>> 1\.	Wenn Sie das Feld aktivieren, wird das folgende Fenster angezeigt:
>> 
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}
>> 
>> Klicken Sie auf `Bestätigen`{.action}, um die Löschung der Git-Zuordnung Ihres Verzeichnisses sowie seines Inhalts zu bestätigen.
>> 
>> 2\.	Wenn Sie das Feld nicht aktivieren, wird das folgende Fenster angezeigt:
>> 
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}
>> 
>> Klicken Sie auf `Bestätigen`{.action}, um die Löschung der Git-Zuordnung Ihres Verzeichnisses zu bestätigen.
<!-- CP-STEPS-END:delete-git-association -->

### Webhook auf GitHub konfigurieren

#### Webhook-URL abrufen

> [!primary]
>
> Wenn Sie sich bereits im Git-Zuordnungsformular befinden, kopieren Sie die Webhook-URL und fahren Sie mit "[Webhook konfigurieren](#configureWebhook)" fort.

<!-- CP-STEPS-START:configure-webhook -->
Klicken Sie auf die Tabs, um die **4** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> Gehen Sie auf die Seite [Hosting-Pakete](/links/control-panel/web-hosting), und wählen Sie das betreffende Webhosting aus.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Schritt 2**
>>
>> Klicken Sie auf den Tab `Meine Seiten`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Schritt 3**
>>
>> Im angezeigten Tabelle klicken Sie auf den Button `⁝`{.action} rechts neben der betroffenen Website und dann auf `Git konfigurieren`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Schritt 4**
>> 
>> Am unteren Rand des angezeigten Formulars kopieren Sie die Adresse, die sich im Feld `Webhook-URL`{.action} befindet. Sie müssen diese URL registrieren und den Webhook auf Ihrem GitHub-Account konfigurieren.
<!-- CP-STEPS-END:configure-webhook -->

#### Webhook konfigurieren <a name="configureWebhook"></a>

Melden Sie sich bei Ihrem GitHub-Account an und greifen Sie auf das Repository zu, in dem Sie den Webhook konfigurieren möchten. Gehen Sie auf den Tab `Settings`{.action} und klicken Sie dann im Seitenmenü der Einstellungen auf `Webhooks`{.action}. Klicken Sie auf `Add webhook`{.action}, um auf das Formular zuzugreifen:

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

Sie haben den Code Ihrer Website über Ihr GitHub-Repository mit Git verbunden. Sie können nun die am GitHub-Repository vorgenommenen Änderungen auf Ihrem Webhosting deployen oder sie mithilfe des Webhooks automatisiert deployen, die Logs Ihrer Deployments einsehen und zahlreiche Aktionen durchführen. All dies erfolgt mit nur wenigen Klicks über Ihr Kundencenter.

## Weiterführende Informationen

[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.
