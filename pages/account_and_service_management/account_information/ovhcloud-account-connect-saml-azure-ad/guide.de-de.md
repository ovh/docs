---
title: SSO-Verbindungen zu Ihrem OVHcloud Account über Entra ID aktivieren
excerpt: "Erfahren Sie hier, wie Sie Entra ID (vormals Azure Active Directory) über SAML 2.0 mit Ihrem OVHcloud Account verbinden"
updated: 2024-07-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie können die Authentifizierungsmethode **Single Sign-On** (SSO) verwenden, um sich in Ihren OVHcloud Kunden-Account einzuloggen. Um diese Verbindungen zu aktivieren, müssen Ihr Account und Ihr Entra ID (vormals Azure Active Directory) mithilfe von SAML-Authentifizierungen (*Security Serving Markup Language*) konfiguriert werden.

**Diese Anleitung erklärt, wie Sie Ihren OVHcloud Kunden-Account mit einem externen AD Azure verbinden.**

## Voraussetzungen

- Sie haben Zugriff auf die Rollen **Application Administrator** und **User Administrator** eines Entra ID Dienstes.
- Sie verfügen über einen [OVHcloud Kunden-Account](/pages/account_and_service_management/account_information/ovhcloud-account-creation).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!primary]
>
> Damit ein Service Provider (Ihr OVHcloud Account) eine SSO-Verbindung zu einem Identity Provider (Ihr Entra ID) herstellen kann, ist es notwendig, das gegenseitige Vertrauensverhältnis zu konfigurieren (*Party Trust*).
>

### Entra ID Benutzer und Gruppen

Ihr Entra ID fungiert als Identity Provider. Authentifizierungsanfragen für Ihren OVHcloud Account werden nur dann akzeptiert, wenn Sie diesen zuerst als vertrauenswürdig deklariert haben.

Konfigurieren Sie zunächst Identitäten auf der Seite des Identity Providers.

#### Entra ID Benutzer

Gehen Sie auf Ihr Entra ID Dashboard.

![Entra ID Dashboard](images/azure_ad_dashboard.png){.thumbnail}

Klicken Sie auf `Users`{.action} im linken Menü.

![Benutzer des Menüs Entra ID](images/azure_ad_menu_user.png){.thumbnail}

Erstellen Sie neue Benutzer oder überprüfen Sie Ihre vorhandenen Benutzer, indem Sie darauf klicken.

Für dieses Beispiel wird der Benutzer **John Smith** verwendet.

![User Entra ID](images/azure_ad_user.png){.thumbnail}

Bei Ausführung einer SSO-Authentifizierung wird die Identität von **John Smith** von Entra ID für den OVHcloud Account bereitgestellt. Diese Identität muss jedoch mindestens eine Gruppe enthalten. Wenn noch keine Gruppe existiert, fügen Sie den Benutzer **John Smith** wie folgt hinzu.

#### Azure-AD-Gruppen

Klicken Sie auf `Groups`{.action} im linken Menü.

![Gruppen von Entra ID](images/azure_ad_menu_groups.png){.thumbnail}

Klicken Sie oben auf `New group`{.action} und geben Sie alle notwendigen Daten ein.

Für dieses Beispiel wird die Gruppe **manager@ovhcloudsaml** verwendet.

![Entra ID Group Schritt 1](images/azure_ad_group_1.png){.thumbnail}

Klicken Sie auf den Button `Create`{.action}, um alle Informationen zu dieser Gruppe anzuzeigen.

![Entra ID Group Schritt 2](images/azure_ad_group_2.png){.thumbnail}

Alle Benutzer, die für die SSO-Authentifizierung verwendet werden sollen, müssen zu einer Gruppe hinzugefügt werden.

In diesem Beispiel gehört der Benutzer **John Smith** zur Gruppe **manager@ovhcloudsaml**.

Klicken Sie im Interface der ausgewählten Gruppe links auf `Members`{.action} und klicken Sie im oberen Menü auf `Add Members`{.action}.

![Entra ID Group User Assignment Schritt 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Wählen Sie den Benutzer aus, der zu dieser Gruppe hinzugefügt werden soll, und klicken Sie dann auf den Button `Select`{.action}.

![Entra ID Group User Assignment Schritt 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Damit ist der Benutzer der Gruppe zugewiesen.

Um SSO-Authentifizierungen durchzuführen, muss eine Entra ID Anwendung erstellt werden.

SSO muss für diese Anwendung konfiguriert werden.

### Entra ID Anwendungen

Erstellen Sie zunächst eine Anwendung, wenn diese noch nicht existiert.

#### Eine Entra ID Anwendung erstellen

Klicken Sie auf `Enterprise applications`{.action} im linken Menü.

![Entra ID Menüanwendungen](images/azure_ad_menu_applications.png){.thumbnail}

Klicken Sie oben auf `New application`{.action}.

![Entra ID Schritt 1 Anwendungen](images/azure_ad_applications_1.png){.thumbnail}

Klicken Sie oben auf `Create your own application`{.action}.

![Entra ID Schritt 2 Anwendungen](images/azure_ad_applications_2.png){.thumbnail}

Wählen Sie links `Non-gallery`{.action} aus und klicken Sie auf den Button `Create`{.action}.

![Entra ID Schritt 3 Anwendungen](images/azure_ad_applications_3.png){.thumbnail}

Die Anwendungsdetails werden angezeigt.

![Entra ID Schritt 4 Anwendungen](images/azure_ad_applications_4.png){.thumbnail}

Die Entra ID Anwendung wird nun erstellt. Benutzer, die SSO-Authentifizierungen über diese Anwendung durchführen sollen, müssen zur *Application* hinzugefügt werden.

#### Entra ID Anwendung - Zuweisung von Benutzern

> [!primary]
>
> Damit ein Benutzer eine SSO-Authentifizierung von einer Entra ID-Anwendung aus durchführen kann, muss er zu dieser Anwendung hinzugefügt werden. Nachfolgend wird beschrieben, wie Sie einen Benutzer zu einer Entra ID Anwendung hinzufügen.
>
> Wenn Sie über **Entra ID Premium** verfügen, ist es jedoch besser, eine Benutzergruppe statt Benutzern hinzuzufügen.
>

Öffnen Sie `Users and groups`{.action} im linken Menü und klicken Sie oben auf `Add user/group`{.action}.

Klicken Sie dann auf den Bereich `Users`{.action}, wählen Sie den Benutzer aus, der zur Anwendung hinzugefügt werden soll, und klicken Sie auf den Button `Select`{.action}.

![Entra ID Application User Assignment Schritt 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Entra ID Application User Assignment Schritt 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

Wenn die Anwendung erstellt und einem Benutzer zugewiesen wurde, kann SSO via SAML eingerichtet werden.

#### Entra ID Application SSO

Klicken Sie links auf den Button `Overview`{.action} und öffnen Sie den Bereich `Set up single sign on`{.action}.

![Entra ID SSO Schritt 1](images/azure_ad_sso_1.png){.thumbnail}

Klicken Sie auf `SAML`{.action}.

![Entra ID SSO Schritt 2](images/azure_ad_sso_2.png){.thumbnail}

Klicken Sie oben auf `Upload metadata file`{.action}.

![Entra ID SSO Schritt 3](images/azure_ad_sso_3.png){.thumbnail}

Klicken Sie auf das Icon `Select a file`{.action} und wählen Sie die Metadaten-Datei für den OVHcloud Service Provider aus. Klicken Sie auf den Button `Add`{.action}.

Sie erhalten die passende Metadatendatei über folgende Links:

- [Metadaten der EU-Region](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadaten der CA-Region](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Laden Sie die Metadatendatei herunter.

![Entra ID SSO Schritt 5](images/azure_ad_sso_5.png){.thumbnail}

Die SAML-Konfiguration wird angezeigt.

![Entra ID SSO Schritt 6](images/azure_ad_sso_6.png){.thumbnail}

Klicken Sie im Bereich `Attributes & Claims`{.action} auf den Button `Edit`{.action}.

![Entra ID SSO Schritt 9](images/azure_ad_sso_9.png){.thumbnail}

Fügen Sie das UPN-Attribut (User Principal Name) zu den SAML-Informationen hinzu, um OVHcloud über die E-Mail des Benutzers zu informieren. Dies ist ein notwendiger Schritt.

Klicken Sie im oberen Menü auf `Add a new claim`{.action}.

Geben Sie im Feld `Name`{.action} den Wert `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/upn` ein.

Geben Sie im Feld `Source attribute`{.action} `user.mail`{.action} ein.

Ihr Interface sollte dann dem folgenden Screenshot sehr ähnlich sein:

![Entra ID SSO UPN-Eintrag](images/azure_ad_sso_9bis.png){.thumbnail}

Klicken Sie auf `Save`{.action}

Deklarieren Sie jetzt das Attribut, das für die Gruppe des Benutzers verwendet wird.

Klicken Sie oben auf `Add a group claim`{.action}.

![Entra ID SSO Schritt 10](images/azure_ad_sso_10.png){.thumbnail}

Wählen Sie `Security Groups`{.action} und **Group ID** aus `Source attribute`{.action} und klicken Sie dann auf `Save`{.action}.

![Entra ID SSO Schritt 11](images/azure_ad_sso_11.png){.thumbnail}

Der *Claim* **groups** sollte nun in der Liste erscheinen.

Kopieren und speichern Sie den Wert des **Claim name** (etwa in einem Texteditor), da er später benötigt wird.

![Entra ID SSO Schritt 12](images/azure_ad_sso_12.png){.thumbnail}

Kopieren Sie aus `SAML certificates`{.action} den Wert im Feld `App Federation Metadata Url`{.action}.

Verwenden Sie diesen Link zum Herunterladen der Metadaten-Datei der Entra ID *Application*, um sie später im OVHcloud Kunden-Account zu verwenden.

![Entra ID SSO Schritt 8](images/azure_ad_sso_8.png){.thumbnail}

### Das Vertrauen zum OVHcloud Account und die Verbindung konfigurieren

Das Hinzufügen Ihrer Entra ID *Application* als vertrauenswürdiger Identity Provider erfolgt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), in dem Sie die Metadaten des Identity Providers hinterlegen können.

#### OVHcloud Vertrauen aufbauen

Klicken Sie oben rechts auf den Namen Ihres Accounts und dann erneut in der Seitenleiste auf Ihren Namen.

![IAM-Menüzugriff](images/access_to_the_IAM_menu_01.png){.thumbnail}

Sie können das IAM-Menü über den dedizierten Eintrag in Ihrem Kundencenter aufrufen.

![IAM-Menüzugriff](images/access_to_the_IAM_menu_02.png){.thumbnail}

Klicken Sie dann auf den Tab `Identitäten`{.action}, um auf die Verwaltung der lokalen Benutzer zuzugreifen.

![IAM-Menüzugriff](images/access_to_the_IAM_menu_03.png){.thumbnail}

Klicken Sie auf den Button `SSO-Verbindung`{.action}.

![OVHcloud SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Geben Sie im Feld **Nutzerattributname** den **UPN** der Entra ID *Application* ein und im Feld **Name des Gruppenattributs** den zuvor gespeicherten Wert des *Claim name* für **groups**.

Geben Sie die XML-Metadaten der Entra ID *Application* aus der zuvor gespeicherten Datei ein.

Sie können die lokalen Benutzer beibehalten, indem Sie die Option `Aktive OVHcloud User beibehalten` aktivieren.

Klicken Sie auf den Button `Bestätigen`{.action}.

![SSO Step 1](images/ovhcloud_sso_1.png){.thumbnail}

Ihre Entra ID *Application* gilt nun als vertrauenswürdiger Identity Provider. Dennoch müssen im OVHcloud Account Gruppen hinzugefügt werden.

> [!warning]
> Wenn Sie sich in diesem Schritt über SSO verbinden, wird wahrscheinlich eine Fehlermeldung `Not in valid groups` angezeigt.
>
> Ihr OVHcloud Account überprüft, ob der authentifizierende Benutzer zu einer bestehenden Gruppe auf dem Account gehört.
>

Um dies zu erreichen, überprüfen Sie das Attribut "Group", das von Ihrer Entra ID *Application* zurückgegeben wird: das Feld **Object Id**.

#### Deklaration von Gruppen für OVHcloud

![Entra ID Group Schritt 2](images/azure_ad_group_2.png){.thumbnail}

Klicken Sie auf den Button `Gruppe deklarieren`{.action}.

![OVHcloud User Management Gruppen Schritt 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Vervollständigen Sie die Felder und klicken Sie dann auf den Button `Bestätigen`{.action}.

![OVHcloud User Management Gruppen Schritt 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

Die erstellte Gruppe sollte in der Liste erscheinen.

![OVHcloud User Management Gruppen Schritt 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

Achtung, wenn Sie die Berechtigung `Keine` erteilen, müssen Sie dieser Gruppe Rechte über die [IAM-Richtlinien](/pages/account_and_service_management/account_information/iam-policy-ui) zuweisen.

### Verbindung via SSO

Geben Sie auf der [OVHcloud Login-Seite](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) Ihre [Kundenkennung](/pages/account_and_service_management/account_information/ovhcloud-account-creation#was-ist-meine-kundenkennung) ein, gefolgt von **/idp***. Klicken Sie ohne ein Passwort einzugeben auf `Login`{.action}.

![SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

Sie werden dann auf die Loginseite Ihrer Entra ID Anwendung weitergeleitet. Wählen Sie `Use another account`{.action}.

![Entra ID Login Schritt 1](images/azure_ad_login_1.png){.thumbnail}

Geben Sie die E-Mail-Adresse des Benutzers der Entra ID Anwendung ein und klicken Sie dann auf den Button `Next`{.action}.

![Entra ID Login Schritt 2](images/azure_ad_login_2.png){.thumbnail}

Geben Sie das Passwort des Benutzers der Entra ID Anwendung ein und klicken Sie dann auf den Button `Sign In`{.action}.

![Entra ID Login Schritt 3](images/azure_ad_login_3.png){.thumbnail}

Sie sind nun mit derselben Kundenkennung eingeloggt, jedoch über Entra ID SSO und mit Ihrem Azure *Application* Benutzer.

![SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}

Wenn Ihre E-Mail nicht unterhalb von `Connected via SSO` angezeigt wird, haben Sie das **UPN**-Attribut nicht korrekt konfiguriert, sodass einige Funktionen möglicherweise nicht funktionieren.

## Weiterführende Informationen

[OVHcloud Kunden-Account erstellen](/pages/account_and_service_management/account_information/ovhcloud-account-creation)

[OVHcloud Kunden-Account absichern und persönliche Informationen verwalten](/pages/account_and_service_management/account_information/all_about_username)

[Das Passwort Ihres Kunden-Accounts anlegen und verwalten](/pages/account_and_service_management/account_information/manage-ovh-password)

[Den OVHcloud Kunden-Account mit der Zwei-Faktor-Authentifizierung absichern](/pages/account_and_service_management/account_information/secure-ovhcloud-account-with-2fa)

[Verwendung von IAM-Richtlinie über Ihr Kundencenter](/pages/account_and_service_management/account_information/iam-policy-ui).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
