---
title: SSO-Verbindungen zu Ihrem OVHcloud Account über Google Workspace aktivieren
excerpt: "Erfahren Sie hier, wie Sie Google Workspace über SAML 2.0 mit Ihrem OVHcloud Account verbinden"
updated: 2023-06-01
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

**Letzte Aktualisierung am 01.06.2023**

## Ziel

Sie können die Authentifizierungsmethode **Single Sign-On** (SSO) verwenden, um sich in Ihren OVHcloud Kunden-Account einzuloggen. Um diese Verbindungen zu aktivieren, müssen Ihr Account und Ihr Google Workspace mithilfe von SAML-Authentifizierungen (*Security Serving Markup Language*) konfiguriert werden.

**Diese Anleitung erklärt, wie Sie Ihren OVHcloud Kunden-Account mit einem externen Google Workspace verbinden.**

## Voraussetzungen

- Sie sind Administrator eines Google Workspace.
- Sie verfügen über einen [OVHcloud Kunden-Account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!primary]
>
> Damit ein Service Provider (Ihr OVHcloud Account) eine SSO-Verbindung zu einem Identity Provider (Ihrem Google Workspace) herstellen kann, ist es notwendig, das gegenseitige Vertrauensverhältnis zu konfigurieren (*Party Trust*).
>


### OVHcloud im Google Workspace registrieren

Ihr Google Workspace fungiert als Identity Provider. Authentifizierungsanfragen für Ihren OVHcloud Account werden nur dann akzeptiert, wenn Sie diesen zuerst als vertrauenswürdig deklariert haben.

Das bedeutet in diesem Fall, dass er zu `Web and mobile apps` hinzugefügt werden muss.

Loggen Sie sich mit Ihrem Administrator-Account in das Verwaltungsinterface von [Google Workspace](https://admin.google.com) ein.

Gehen Sie auf `Apps`{.action} und dann zu `Web and mobile apps`{.action}.

![Web and mobile apps](images/google_workspace_web_mobile_add_saml_app.png){.thumbnail}

Klicken Sie auf `Add app`{.action} und dann auf `Add custom SAML app`{.action}.

Fügen Sie im Schritt "App Details" einen Namen für diese Verbindung hinzu, etwa **OVHcloud**. Klicken Sie auf `Continue`{.action}.

![Eine SAML Anwendung hinzufügen, Schritt 1](images/google_workspace_web_mobile_add_saml_app_step1.png){.thumbnail}

Im Schritt "Google Identity Provider Details" laden Sie die Metadatendatei herunter, indem Sie auf `Download metadata`{.action} und dann auf `Continue`{.action} klicken.

![Eine SAML Anwendung hinzufügen, Schritt 2](images/google_workspace_web_mobile_add_saml_app_step2.png){.thumbnail}

Tragen Sie im Schritt "Service provider details" in die Felder `ACS URL` und `Entity ID` die Werte für Ihre Region ein:

 - EU-Region: **ACS URL**: `https://www.ovhcloud.com/eu/auth/saml/acs` und **Entity ID**: `https://www.ovhcloud.com/eu/auth/`
 - CA-Region: **ACS URL**: `https://www.ovhcloud.com/ca/auth/saml/acs` und **Entity ID**: `https://www.ovhcloud.com/ca/auth/`

Klicken Sie auf `Weiter`{.action}.

![Eine SAML Anwendung hinzufügen, Schritt 3](images/google_workspace_web_mobile_add_saml_app_step3.png){.thumbnail}

Fügen Sie im Schritt "Attribute mapping" folgendes Schema hinzu:

- **First Name**: Name
- **Last Name**: Surname
- **Primary email**: E-mail Address

Klicken Sie auf `Finish`{.action}.

![Eine SAML Anwendung hinzufügen, Schritt 4](images/google_workspace_web_mobile_add_saml_app_step4.png){.thumbnail}

Aktivieren Sie den Zugang zu dieser App, indem Sie auf `OFF for everyone`{.action} im Bereich "User Access" klicken. Klicken Sie auf `ON for everyone`{.action} und dann auf den Button `SAVE `{.action}.

![Die Anwendung für alle Benutzer aktivieren](images/google_workspace_web_mobile_enable_app1.png){.thumbnail}

![Die Anwendung für alle Benutzer aktivieren](images/google_workspace_web_mobile_enable_app2.png){.thumbnail}

> [!primary]
>
> Es kann einige Stunden dauern, bis ein Anwendungszugang für Benutzer hinzugefügt wurde.
>

Ihr Google Workspace vertraut nun OVHcloud als Service Provider. Stellen Sie anschließend sicher, dass der OVHcloud Account Ihrem Google Workspace als Identity Provider vertraut.

### Das Vertrauen zum OVHcloud Account und die Verbindung konfigurieren

Das Hinzufügen Ihres Google Workspace als vertrauenswürdiger Identity Provider erfolgt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), in dem Sie die Metadaten des Identity Providers hinterlegen können.

Wenn Sie eingeloggt sind, klicken Sie oben rechts auf Ihren Account-Namen.

![OVHcloud Top Menü](images/ovhcloud_top_menu.png){.thumbnail}

Klicken Sie auf die Initialen, um auf die Verwaltungsseite Ihres Accounts zuzugreifen.

![OVHcloud Benutzerinformationen](images/ovhcloud_user_infos.png){.thumbnail}

Öffnen Sie den Tab `Verwaltung der Nutzer`{.action}.

![OVHcloud Menüprofil](images/ovhcloud_profile_menu.png){.thumbnail}

Klicken Sie auf den Button `SSO-Verbindung`{.action}.

![OVHcloud SSO-Verbindung Schritt 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Geben Sie die XML-Metadaten Ihres Google Workspace ein. Geben Sie im Feld “Group Attribute Name” den Wert `Group` ein und klicken Sie auf `Bestätigen`{.action}.

![OVHcloud SSO-Verbindung Schritt 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Sie sollten nun Ihren Google Workspace als Identity Provider sowie die Standardgruppen sehen können.

![OVHcloud SSO-Verbindung Schritt 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Für weitere Informationen klicken Sie auf den Link unter der `URL des SSO Dienstes`.

![OVHcloud SSO-Verbindung Schritt 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

Mit dem Button `...`{.action} können Sie den SSO aktualisieren oder löschen und die Details einsehen.

![OVHcloud SSO-Verbindung Schritt 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Ihr Google Workspace gilt nun als vertrauenswürdiger Identity Provider. Dennoch müssen im OVHcloud Account Gruppen hinzugefügt werden.

> [!warning]
> Wenn Sie sich in diesem Schritt über SSO verbinden, wird wahrscheinlich eine Fehlermeldung `Not in valid groups` angezeigt.
>
> Ihr OVHcloud Account überprüft, ob der authentifizierende Benutzer zu einer bestehenden Gruppe auf dem Account gehört.
>

Um dies zu erreichen, müssen die Gruppen, die vom Google Workspace zu OVHcloud übermittelt werden, zugelassen werden. Diese Gruppen entsprechen denjenigen, die zur Kategorisierung Ihrer Benutzer verwendet werden.

Loggen Sie sich mit Ihrem Administrator-Account in das Verwaltungsinterface von [Google Workspace](https://admin.google.com) ein.

Gehen Sie auf `Apps`{.action} und dann zu `Web and mobile apps`{.action}.

![Web- und Mobilapplikationen verwalten](images/google_workspace_web_mobile_add_saml_app.png){.thumbnail}

Klicken Sie auf die Zeile der Anwendung, die Sie zuvor hinzugefügt haben.

![Liste der Mobil- und Web-Anwendungen](images/google_workspace_web_mobile_list_app.png){.thumbnail}

Klicken Sie auf `SAML attribute mapping`{.action} um das Mapping der zwischen Google Workspace und OVHcloud geteilten Daten zu bearbeiten.

![Details der SAML Anwendung](images/google_workspace_web_mobile_show_app.png){.thumbnail}

Fügen Sie im Bereich "Group membership (optional)" alle Gruppen hinzu, denen Sie die Verbindung zu OVHcloud erlauben möchten. Geben Sie im Feld "App attribute" den Wert `Group` ein.

Weisen Sie dann diesen Benutzergruppen bei OVHcloud **Rollen** zu. Andernfalls kann Ihr OVHcloud Account nicht feststellen, welche Rechte der Benutzer hat.

![Konfiguration der Benutzergruppen](images/google_workspace_web_mobile_setup_groups.png){.thumbnail}

Fügen Sie über Ihr OVHcloud Kundencenter eine Gruppe hinzu, indem Sie auf den Button `Gruppe deklarieren`{.action} klicken und die Felder ausfüllen:

 - **Name der Gruppe**: Name der Gruppe in Google Workspace
 - **Rolle**: Berechtigungsstufe für diese Gruppe

![Benutzer-Verwaltungsgruppen Google Workspace](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![Benutzer-Verwaltungsgruppen Google Workspace](images/ovhcloud_user_management_groups_2.png){.thumbnail}

Anschließend können Sie überprüfen, ob die Gruppe zu Ihrem OVHcloud Account im Bereich `Gruppen` hinzugefügt wurde:

![Benutzer-Verwaltungsgruppen Google Workspace](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Wenn sich später ein Benutzer aus der Gruppe **Intern** einloggt, erkennt Ihr OVHcloud Account, dass der Benutzer die von seiner Gruppe definierte Rolle "UNPRIVILEGED" hat.

Anschließend können Sie sich von Ihrem Account ausloggen und sich mit Ihrem Google Workspace als Identity Provider neu verbinden.

### Verbindung via SSO

Geben Sie auf der [OVHcloud Login-Seite](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) Ihre [Kundenkennung](/pages/account_and_service_management/account_information/ovhcloud-account-creation#was-ist-meine-kundenkennung) ein, gefolgt von **/idp***. Klicken Sie ohne ein Passwort einzugeben auf `Login`{.action}.

![Verbindung zu OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

Sie werden dann auf die Loginseite von Google Workspace weitergeleitet. Geben Sie Login und Passwort eines Benutzers Ihres Google Workspace ein und klicken Sie dann auf den Button `Sign in`{.action}.

![OVHcloud Federation Redirection Google Workspace](images/ovhcloud_federation_login_2.png){.thumbnail}

Sie sind nun mit derselben Kundenkennung eingeloggt, jedoch über Ihr Google Workspace.

![OVHcloud User Info](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Weiterführende Informationen

[OVHcloud Kunden-Account erstellen](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[OVHcloud Kunden-Account absichern und persönliche Informationen verwalten](/pages/account_and_service_management/account_information/all_about_username)

[Das Passwort Ihres Kunden-Accounts anlegen und verwalten ](/pages/account_and_service_management/account_information/manage-ovh-password)

[Den OVHcloud Kunden-Account mit der Zwei-Faktor-Authentifizierung absichern](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.