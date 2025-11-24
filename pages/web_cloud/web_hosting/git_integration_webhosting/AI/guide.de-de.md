35 71 

> **Schritt 4**
> 
>> Im angezeigten Tabelle klicken Sie auf die Schaltfläche `⁝`{.action} rechts neben dem betreffenden Webseiten, und dann auf `Git zuordnen`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>> 
> **Schritt 5**
>> 
>> Das Git-Zuordnungsformular wird angezeigt. Mehrere Elemente müssen konfiguriert werden:
>> 
>> - GitHub-Repository
>> - GitHub-Repository-Zweig
>> - SSH-Schlüssel (für ein privates GitHub-Repository)
>> - Webhook (optional)
>> 
>> Lesen Sie weiter in diesem Leitfaden, um die erforderlichen Informationen zu erhalten, um die erforderlichen Felder auszufüllen.

167

Nachdem Sie das Git-Zuordnungsformular bestätigt haben, werden Sie auf die Seite des Registers `Meine Webseiten`{.action} weitergeleitet.

177 179

Sie können auch den Fortschritt der Git-Aktivierung über das Register `Meine Webseiten`{.action} verfolgen. In der Spalte `Git`{.action} der Tabelle zeigt die Angabe `In Bearbeitung`{.action} in der Zeile der betreffenden Website an, dass Git aktiviert wird.

Wenn die Git-Zuordnung abgeschlossen ist, wird der Status `Aktiviert`{.action} in der Spalte `Git`{.action} für die betreffende Website angezeigt.

185

Im Tabellenregister `Meine Webseiten`{.action} identifizieren Sie die Zeilen, die dem Verzeichnis der Website entsprechen, die Sie mit Git verknüpfen möchten. In der Spalte `Git` wird die Angabe `Fehler` angezeigt, was bedeutet, dass mindestens einer der folgenden Fehler aufgetreten ist:

192 196

Um die genaue Ursache des Fehlers zu ermitteln, konsultieren Sie die Informationen des letzten Deployments. In der Tabelle klicken Sie auf die Schaltfläche `⁝`{.action} rechts neben der betreffenden Website, und dann auf `Informationen zum letzten Deployment`{.action}.

![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}

Sobald der/die Fehler identifiziert wurden, verknüpfen Sie Git erneut. Wiederholen Sie den Vorgang, indem Sie auf die Schaltfläche `⁝`{.action} rechts neben der betreffenden Website klicken und dann auf `Git zuordnen`{.action}.

200 235

> **Schritt 4**
>> 
>> In der angezeigten Tabelle klicken Sie auf die Schaltfläche `⁝`{.action} rechts neben der betreffenden Website, und dann auf `Git deployen`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Schritt 5**
>> 
>> Eine Bestätigungsmitteilung wird angezeigt, sowie ein Häkchen, das Ihnen mitteilt, dass Sie bei einem Konflikt während des Deployments die Änderungen des GitHub-Repositorys auf Ihr lokales Repository erzwingen können. Aktivieren Sie das Häkchen entsprechend Ihrer Wahl, und klicken Sie auf `Bestätigen`{.action}, um das Deployment zu bestätigen.
>> 
>> > [!warning]
>> > 
>> > Um Ihre lokalen Änderungen nicht zu verlieren, sollten Sie diese vor dem Überschreiben durch die Änderungen der Remote-Zweige sichern.
>> 
>> Die neue Version Ihrer Website wurde erfolgreich auf Ihrem OVHcloud Webhosting bereitgestellt. Wenn andere Personen am gleichen Projekt arbeiten und Änderungen am GitHub-Repository vornehmen, können Sie [einen Webhook auf GitHub konfigurieren](#configureWebhook), damit diese Änderungen automatisch auf Ihrem Webhosting bereitgestellt werden. Dies spart Ihnen das manuelle Deployment von Git, und Ihre Website bleibt immer auf dem neuesten Stand.

239 294

> **Schritt 4**
>> 
>> In der angezeigten Tabelle klicken Sie auf die Schaltfläche `>`{.action} links neben dem Namen der betreffenden Website, um die zugeordneten Domains oder Subdomains anzuzeigen.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>> 
>> Klicken Sie anschließend auf die Schaltfläche `⁝`{.action} rechts neben der betreffenden Domain oder Subdomain, und dann auf `Domain ändern`{.action}.
>> 
>> ![Optionen für zugeordnete Domains](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>> 
> **Schritt 5**
>> 
>> Zwei Szenarien sind möglich:
>> 
>> **1 - Eine oder mehrere weitere Domains sind an die Website angehängt**
>> 
>> Das folgende Fenster wird angezeigt:
>> 
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step1.png){.thumbnail}
>> 
>> Passen Sie die Informationen entsprechend Ihren Bedürfnissen an und klicken Sie auf `Weiter`{.action}.
>> 
>> Ein zweites Bestätigungsfenster wird angezeigt mit dem Überblick über Ihre Änderungen:
>> 
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}
>> 
>> Klicken Sie auf `Bestätigen`{.action}, um die Änderungen an Ihrer Domain zu bestätigen.
>> 
>> **2 - Nur eine Domain ist an die Website angehängt**
>> 
>> Das folgende Fenster wird angezeigt:
>> 
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-alone-domain-step1.png){.thumbnail}
>> 
>> Wie die Nachricht angibt, müssen Sie Ihre [Git-Zuordnung zuerst löschen](#deleteGitAssociation), bevor Sie Ihre Domain ändern.

298 347

> **Schritt 4**
>> 
>> In der angezeigten Tabelle klicken Sie auf die Schaltfläche `>`{.action} links neben dem Namen der betreffenden Website, um die zugeordneten Domains oder Subdomains anzuzeigen.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>> 
>> Klicken Sie anschließend auf die Schaltfläche `⁝`{.action} rechts neben der betreffenden Domain oder Subdomain, und dann auf `Domain trennen`{.action}.
>> 
>> ![Optionen für zugeordnete Domains](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>> 
> **Schritt 5**
>> 
>> Zwei Szenarien sind möglich:
>> 
>> **1 - Eine oder mehrere weitere Domains sind an die Website angehängt**
>> 
>> Das folgende Fenster wird angezeigt.
>> 
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>> 
>> Klicken Sie auf `Bestätigen`{.action}, um die Trennung Ihrer Domain zu bestätigen.
>> 
>> **2 - Nur eine Domain ist an die Website angehängt**
>> 
>> Das folgende Fenster wird angezeigt:
>> 
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> 
>> Wie die Nachricht angibt, müssen Sie Ihre [Git-Zuordnung zuerst löschen](#deleteGitAssociation), bevor Sie Ihre Domain trennen.

351 385

> **Schritt 4**
>> 
>> In der angezeigten Tabelle klicken Sie auf die Schaltfläche `⁝`{.action} rechts neben der betreffenden Website, und dann auf `Git konfigurieren`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Schritt 5**
>> 
>> Die folgenden Informationen werden angezeigt:
>> 
>> - SSH-Schlüssel: Falls Sie dies noch nicht getan haben, [registrieren Sie Ihren SSH-Schlüssel in Ihrem GitHub-Konto](#linkSSHKey).
>> - Repository: Adresse Ihres Git-Repositorys. Dieses Feld ist grau, da Sie die Adresse des Git-Repositorys nicht ändern können. Um die URL des Git-Repositorys zu ändern, müssen Sie [die Git-Zuordnung Ihres Verzeichnisses löschen](#deleteGitAssociation) und anschließend [das Verzeichnis erneut mit Git verknüpfen](#associateGitRepo).
>> - Zweig: Name des GitHub-Zweigs. Sie können dieses Feld bei Bedarf ändern.
>> - Webhook-URL: Wenn Sie Ihre Deployments auf Git optimieren möchten, [konfigurieren Sie den Webhook auf GitHub](#configureWebhook).

391 418

> **Schritt 4**
>> 
>> In der angezeigten Tabelle klicken Sie auf die Schaltfläche `⁝`{.action} rechts neben der betreffenden Website, und dann auf `Informationen zum letzten Deployment`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
>> Auf diesem Bildschirm finden Sie alle Informationen zum letzten Deployment.

422 467

Die Nachricht informiert Sie, dass die Löschung auf alle Domains angewendet wird, die an Ihre Website angehängt sind. Aktivieren Sie das Feld `Möchten Sie den Inhalt des Verzeichnisses <Ihr_Verzeichnis> leeren?`{.action}, wenn Sie auch den Inhalt (Ordner und Dateien) des Verzeichnisses löschen möchten.
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

477 506

Klicken Sie auf die Register unten, um nacheinander jede der **5** Schritte anzuzeigen.

> [!tabs]
> **Schritt 1**
>> 
>> Melden Sie sich bei Ihrem [OVHcloud Kundencenter](/links/manager) an, und navigieren Sie zu dem Bereich `Web Cloud`{.action}.
>> 
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>> 
> **Schritt 2**
>> 
>> Klicken Sie auf das Menü `Webhosting`{.action}, und wählen Sie das gewünschte Webhosting.
>> 
>> ![Webhosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>> 
> **Schritt 3**
>> 
>> Auf der angezeigten Seite klicken Sie auf das Register `Meine Webseiten`{.action}.
>> 
>> ![Meine Webseiten](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>> 
> **Schritt 4**
>> 
>> In der angezeigten Tabelle klicken Sie auf die Schaltfläche `⁝`{.action} rechts neben der betreffenden Website, und dann auf `Git konfigurieren`{.action}.
>> 
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options-git-enabled.png){.thumbnail}
>> 
> **Schritt 5**
>> 
>> Am unteren Rand des angezeigten Formulars kopieren Sie die Adresse, die sich im Feld `Webhook-URL`{.action} befindet. Sie müssen diese URL jetzt registrieren und den Webhook auf Ihrem GitHub-Konto konfigurieren.