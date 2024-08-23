---
title: "Konfiguration und Nutzung von Git mit dem OVHcloud Webhosting"
excerpt: "In Ihrem OVHcloud Kundencenter erfahren Sie, wie Sie Git mit Ihrem Webhosting konfigurieren und verwenden"
updated: 2024-08-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

In der heutigen digitalen Landschaft sind die Gesellschaften dynamischer und innovativer geworden. Die Fähigkeit, den Code Ihrer Website effizient zu verwalten und einzusetzen, ist entscheidend, um die Wettbewerbsfähigkeit und Nachhaltigkeit Ihrer Marke zu erhalten. Git, das weltweit am häufigsten verwendete Versionsverwaltungssystem, erlaubt die Speicherung des Codes Ihrer Website auf Plattformen wie GitHub, was eine bessere Rückverfolgbarkeit von Änderungen sowie eine schnellere Automatisierung und Bereitstellung ermöglicht. Als OVHcloud Kunde verfügen Sie über eine robuste Infrastruktur für das Hosting Ihrer Website und können gleichzeitig die zahlreichen Vorteile von Git und GitHub für die Entwicklung und Evolution Ihrer Website nutzen.

**Diese Anleitung erklärt, wie Sie Git über Ihr OVHcloud Kundencenter konfigurieren und mit Ihrem Webhosting verwenden.**

## Voraussetzungen

- Sie verfügen über ein [OVHcloud Webhosting](/links/web/hosting) Angebot.
- Sie sind in Ihrem [OVHcloud Kundencenter](/links/manager) im Bereich Web Cloud eingeloggt.
- Sie haben einen [GitHub](https://github.com/){.external} Account und sind mit diesem verbunden.

## In der praktischen Anwendung

> [!primary]
>
> Für die Zuordnung und Konfiguration von Git müssen Sie Änderungen in Ihrem GitHub-Konto vornehmen. Bevor Sie mit dem Guide beginnen, loggen Sie sich in Ihrem GitHub-Konto ein.
>

### Verzeichnis mit Git verknüpfen <a name="associateGitRepo"></a>

> [!warning]
>
> Wenn Sie ein Verzeichnis mit Git verknüpfen, werden alle in diesem Verzeichnis vorhandenen Domänennamen ebenfalls mit Git verknüpft. Wenn beispielsweise das Verzeichnis für die Website, die Sie zuordnen, `www` ist, dann werden alle Domainnamen, die mit dem Verzeichnis `www` verbunden sind, ebenfalls mit Git verknüpft.
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
- Zweig des GitHub Repositorys
- Webhook (optional)

#### Einen SSH-Schlüssel mit GitHub verbinden <a name="linkSSHKey"></a>

> [!primary]
>
> Die Erstellung eines SSH-Schlüssels ist ein wichtiger Schritt, da er eine sichere und verschlüsselte Verbindung zwischen dem Verzeichnis Ihrer Website und dem GitHub-Repository herstellt. Dieser Schlüssel stellt sicher, dass Datenübertragungen und Codeänderungen sicher und authentifiziert erfolgen, um unbefugten Zugriff zu verhindern und die Codeintegrität zu gewährleisten.
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

Kopieren Sie die Adresse Ihres GitHub Repositorys. Diese muss im Format `https://github.com/<username>/<repository_name.git>`{.action} vorliegen. Kehren Sie zum Git-Zuordnungsformular zurück und fügen Sie die Adresse Ihres GitHub-Repositorys in das Feld `Repository`{.action} ein. Wenn das Adressformat nicht korrekt ist, wird die folgende Fehlermeldung angezeigt:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/error-wrong-git-repository-name.png){.thumbnail}

Legen Sie nun den Zweig Ihres GitHub Repositorys fest. Die Standardverzweigung ist `main`. Wenn Sie jedoch eine andere Verzweigung verwenden möchten, erstellen Sie eine auf GitHub, indem Sie die folgenden Schritte ausführen:

- Melden Sie sich bei Ihrem GitHub-Konto an.
- Klicken Sie oben rechts auf Ihr Profilbild und dann auf `Your repositories`{.action}.
- Gehen Sie zum betreffenden GitHub-Repository.
- Klicken Sie auf `Main`{.action} und dann auf `View all branches`{.action}, oder klicken Sie direkt auf den Tab `x branch`{.action}.
- Klicken Sie rechts auf dem Bildschirm auf `New branch`{.action}.
- Geben Sie den Namen der neuen Verzweigung an und bestätigen Sie dies durch Klicken auf `Create new branch`{.action}.

Kehren Sie zum Git-Zuordnungsformular in Ihrem OVHcloud Kundencenter zurück und geben Sie den Namen des gerade erstellten neuen Branches ein.

#### Automatische Bereitstellung konfigurieren

Am unteren Rand des Git-Zuordnungsformulars wird ein Abschnitt `Automatische Bereitstellung konfigurieren`{.action} mit der Webhook-URL angezeigt. Mit der Konfiguration eines Webhooks kann Ihr GitHub-Repository Ihr OVHcloud Webhosting automatisch über Ereignisse im GitHub-Repository benachrichtigen (neue Inbetriebnahme, Änderung des Codes usw.). Diese Funktion ist besonders nützlich, wenn Sie in einer Gruppe an demselben Projekt arbeiten und alle Änderungen am GitHub-Repository auf dem neuesten Stand halten möchten. Weitere Informationen finden Sie unter [Webhook auf GitHub einrichten](#configureWebhook).

#### Git-Zuordnung überprüfen

Bevor Sie das Git-Zuordnungsformular bestätigen, stellen Sie sicher, dass:

- Ihr SSH-Schlüssel wurde erfolgreich in Ihrem GitHub-Konto gespeichert.
- Die Adresse Ihres GitHub-Repositorys ist korrekt. Sie muss im Format `https://github.com/<username>/<repository_name.git>`{.action} vorliegen.
- Der Zweigname des GitHub-Repositorys ist korrekt.
- Das Installationsverzeichnis ist leer.

Um die Informationen im Git-Zuordnungsformular zu bestätigen, klicken Sie auf `Konfiguration anwenden`{.action}.

### Git-Zuordnung aktivieren

#### Git-Assoziierung - Erfolg

Nachdem Sie das Git-Zuordnungsformular bestätigt haben, werden Sie zum Tab Multisite weitergeleitet.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/banner-git-activation-ongoing.png){.thumbnail}

A green banner will show you that Git is being enabled. Follow the activation of Git by clicking on the `Current tasks`{.action} link.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ongoing-task-git-activation.png){.thumbnail}

The status `Running`{.action} indicates that the Git association is in progress. The process may take several minutes. When the task is complete, the status `Enabled`{.action} is displayed.

You can also track the progress of Git activation from the `Multisite`{.action} tab. In the table, identify the rows that correspond to the directory you want to associate with Git. For each of the rows concerned, in the `Git`{.action} column, the phrase `In progress`{.action} tells you that Git is being enabled.

When the Git association is complete, the status `Enabled`{.action} appears in the `Git`{.action} column for the rows concerned.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/success-git-activation.png){.thumbnail}

#### Git association errors

In the table in the `Multisite`{.action} tab, identify the rows corresponding to the directory you want to associate with Git. In the `Git` column, if the word `Error` appears, this means that at least one of the following errors has occurred:

- The SSH key has not been saved in your GitHub account.
- The installation directory is not empty.
- The GitHub repository address does not exist or is incorrect.
- The branch of the GitHub repository does not exist or its name is incorrect.

For the exact cause of the error, see the information from the last deployment. In the table, identify the row corresponding to the domain name for which you want to view the logs for the last deployment. To the right of the line, click on the `...`{.action} button, then on `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/info-last-deployment-button.png){.thumbnail}

Once you have identified the error(s), associate Git again. Retry the operation by clicking on the `...`{.action} button on the corresponding line, then on `Link Git`{.action}.

### Deploy your GitHub repository on your OVHcloud web hosting plan

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain name that you want to deploy with Git. Ensure that the status of the Git column is `Enabled`{.action}. Click the `...`{.action} button, then `Deploy Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/deploy-git-button.png){.thumbnail}

A confirmation message appears, along with a check box telling you that if there is a conflict during deployment, you can force remote (GitHub repository) changes on your local repository. Tick or untick the box depending on your choice, then click `Confirm`{.action} to validate the deployment.

> [!warning]
>
> To avoid losing your local changes, remember to save them before overwriting them with changes from the remote branch.
>

The new version of your website has been deployed on your OVHcloud hosting plan. If other people are working on the same project and they make changes on the GitHub repository, then you can [configure a webhook on GitHub](#configureWebhook) so that their changes are automatically deployed to your web hosting plan. This avoids having to deploy Git manually, and your web hosting plan will always be up-to-date.

### Modify a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain you want to modify. Click the `...`{.action} button, then `Modify domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}

Modify the information of your choice and click `Next`{.action}.

A second confirmation window will appear, with a summary of your changes.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Click `Confirm`{.action} to confirm your domain name changes.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before changing your domain name.

### Detach a domain name

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the line corresponding to the domain that you want to detach from your OVHcloud web hosting plan. Click the `...`{.action} button, then `Detach domain`{.action}. There are two possible scenarios:

#### The domain name is not the only one attached to the same directory

The following window will appear.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}

Click `Confirm`{.action} to confirm the detachment of your domain name.

#### The domain name is the only one attached to the directory

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}

As the message states, [delete your Git association](#deleteGitAssociation) first before detaching your domain name.

### Configure Git

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row corresponding to the directory you want to configure with Git. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

The following information is displayed:

- SSH key: If you have not already done so, [save your SSH key in your GitHub account](#linkSSHKey).
- Deposit: Address of your Git deposit. This field is grayed out because you cannot change the address of the Git repository. To change the Git repository URL, you must [remove Git association from your directory](#deleteGitAssociation) and then [associate directory to Git](#associateGitRepo) again.
- Branch: Name of the branch of the GitHub repository. You can edit this field.
- Webhook URL: If you want to optimise your deployments on Git, [configure the webhook on GitHub](#configureWebhook).

### Latest deployment information

Once you have deployed your GitHub repository on your web hosting plan, you can view information on the latest deployment, such as errors, tests and any useful information. 

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that appears, identify the row for the domain whose logs you want to view from the last deployment. To the right of the line, click the `...`{.action} button, then `Latest deployment information`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/informations-last-git-deployment-button.png){.thumbnail}

On this screen, you can view all the information related to the latest deployment.

### Delete Git <a name="deleteGitAssociation"></a> association

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row corresponding to the directory whose association with Git you want to remove. Click the `...`{.action} button, then `Delete Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-button.png){.thumbnail}

The following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup.png){.thumbnail}

The message informs you that the deletion will apply to all domain names attached to your directory. Tick the `Do you want to empty the contents of the <your_directory> directory?`{.action} option if you also want to delete the contents (folders and files) of the directory.

1\.	If you select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-with-folder-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory, as well as its contents.

2\.	If you do not select the check box, the following window appears:

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/delete-git-association-popup-confirm.png){.thumbnail}

Click `Confirm`{.action} to confirm the deletion of the Git association from your directory.

### Configure a webhook on GitHub

#### Retrieve the webhook URL

> [!primary]
>
> If you are already in the Git association form, copy the webhook URL and go to the step “[Configure the webhook](#configureWebhook)”.
>

Log in to your [OVHcloud Control Panel](/links/manager), go to the `Web Cloud`{.action} section, click `Hosting plans`{.action}, then choose the name of the web hosting plan concerned. Select the `Multisite`{.action} tab. In the table that opens, identify the row that corresponds to the directory where you want to configure a webhook. Click the `...`{.action} button, then `Configure Git`{.action}.

![Multisite](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/configure-git-button.png){.thumbnail}

At the bottom of the form that opens, identify the address of the `Webhook URL`{.action} field, and copy it. You will now need to save the URL and configure the webhook on your GitHub account.

#### Configure the <a name="configureWebhook"></a> webhook

Log in to your GitHub account, and go to the repository where you want to configure the webhook. Go to the `Settings`{.action} tab, then in the settings side menu, click `Webhooks`{.action}. Click the `Add webhook`{.action} button to access the form:

- **Payload URL**: Enter the URL provided in the Git association form (`Webhook URL`{.action}).
- **Content type**: Choose `application/json`{.action} as the content type for the data sent.
- **Secret**: The secret is optional. GitHub will use it to sign messages sent by the webhook, enhancing security.
- **SSL verification**: If your website supports HTTPS, leave this option enabled for increased security.
- **Which events would you like to trigger this webhook?**: Select the events that will trigger the webhook to be sent. For automatic deployment, `Just the push event`{.action} is often enough, but you can choose `Send me everything`{.action} to receive notifications for all events.
- **Active**: Make sure that the box is ticked to enable the webhook.

Click `Add webhook`{.action} to save and activate your new webhook.

#### Test your webhook

Once you have created your webhook in GitHub, go to the list of your webhooks and select the one you have just created, or click `Edit`{.action}.

On the screen that appears, click on the `Recent Deliveries`{.action} tab. To send a test event specifically, GitHub usually sends a `ping` event when creating the webhook, and you can use the `Redeliver`{.action} button next to this event to test it.

If the test has worked, the `Response`{.action} tab returns a code of 200. If an error code is returned (usually 500 or 400), this means that your webhook has been misconfigured. Return to the form for adding a webhook, and check the information, specifically the webhook URL provided by OVHcloud.

#### Webhook verwenden

Sobald Ihr Webhook eingerichtet ist, wird der Code Ihrer Website bei jeder Änderung im GitHub-Repository automatisch aktualisiert. Wenn zum Beispiel ein Kollege Änderungen am GitHub-Repository vornimmt, wird der Code Ihrer Website lokal aktualisiert (auf Ihrem OVHcloud-Hosting).

### Fazit

Sie haben soeben den Code Ihrer Website über Ihr GitHub-Repository mit Git verbunden. Sie können nun die am GitHub-Repository vorgenommenen Änderungen auf Ihrem Webhosting deployen oder sie mithilfe des Webhooks automatisiert deployen, die Logs Ihrer Deployments einsehen und zahlreiche Aktionen durchführen. All dies erfolgt mit nur wenigen Klicks über Ihr Kundencenter.

## Weiterführende Informationen

[Eine Website auf Ihrem Webhosting online stellen](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)
 
Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).
 
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).
 
Treten Sie unserer [User Community](/links/community) bei.