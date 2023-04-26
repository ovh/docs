---
title: SSO-Verbindungen zu Ihrem OVHcloud Account über Azure AD aktivieren
slug: connect-saml-sso-azure-ad
excerpt: "Erfahren Sie hier, wie Sie Azure Active Directory über SAML 2.0 mit Ihrem OVHcloud Account verbinden"
section: Fortgeschrittene Nutzung
order: 02
updated: 2023-04-05
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 05.04.2023**

## Ziel

Sie können die Authentifizierungsmethode **Single Sign-On** (SSO) verwenden, um sich in Ihren OVHcloud Kunden-Account einzuloggen. Um diese Verbindungen zu aktivieren, müssen Ihr Account und Ihr Azure AD (Active Directory) mithilfe von SAML-Authentifizierungen (*Security Serving Markup Language*) konfiguriert werden.

**Diese Anleitung erklärt, wie Sie Ihren OVHcloud Kunden-Account mit einem externen AD Azure verbinden.**

## Voraussetzungen

- Sie haben Zugriff auf die Rollen **Application Administrator** und **User Administrator** eines Azure AD Dienstes.
- Sie verfügen über einen [OVHcloud Kunden-Account](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

> [!primary]
>
> Damit ein Service Provider (Ihr OVHcloud Account) eine SSO-Verbindung zu einem Identity Provider (Ihr Azure AD) herstellen kann, ist es notwendig, das gegenseitige Vertrauensverhältnis zu konfigurieren (*Party Trust*).
>

### Azure AD Benutzer und Gruppen

Ihr Azure AD fungiert als Identity Provider. Authentifizierungsanfragen für Ihren OVHcloud Account werden nur dann akzeptiert, wenn Sie diesen zuerst als vertrauenswürdig deklariert haben.

Konfigurieren Sie zunächst Identitäten auf der Seite des Identity Providers.

#### Azure AD Benutzer

Gehen Sie auf Ihr Azure AD Dashboard.

![Azure AD Dashboard](images/azure_ad_dashboard.png){.thumbnail}

Klicken Sie auf `Users`{.action} im linken Menü.

![Benutzer des Menüs Azure AD](images/azure_ad_menu_user.png){.thumbnail}

Erstellen Sie neue Benutzer oder überprüfen Sie Ihre vorhandenen Benutzer, indem Sie darauf klicken.

Für dieses Beispiel wird der Benutzer **John Smith** verwendet.

![User Azure AD](images/azure_ad_user.png){.thumbnail}

Bei Ausführung einer SSO-Authentifizierung wird die Identität von **John Smith** von Azure AD für den OVHcloud Account bereitgestellt. Diese Identität muss jedoch mindestens eine Gruppe enthalten. Wenn noch keine Gruppe existiert, fügen Sie den Benutzer **John Smith** wie folgt hinzu.

#### Azure-AD-Gruppen

Klicken Sie auf `Groups`{.action} im linken Menü.

![Gruppen von Azure AD](images/azure_ad_menu_groups.png){.thumbnail}

Klicken Sie oben auf `New group`{.action} und geben Sie alle notwendigen Daten ein.

Für dieses Beispiel wird die Gruppe **manager@ovhcloudsaml** verwendet.

![Azure AD Group Schritt 1](images/azure_ad_group_1.png){.thumbnail}

Klicken Sie auf den Button `Create`{.action}, um alle Informationen zu dieser Gruppe anzuzeigen.

![Azure AD Group Schritt 2](images/azure_ad_group_2.png){.thumbnail}

Alle Benutzer, die für die SSO-Authentifizierung verwendet werden sollen, müssen zu einer Gruppe hinzugefügt werden.

In diesem Beispiel gehört der Benutzer **John Smith** zur Gruppe **manager@ovhcloudsaml**.

Klicken Sie im Interface der ausgewählten Gruppe links auf `Members`{.action} und klicken Sie im oberen Menü auf `Add Members`{.action}.

![Azure AD Group User Assignment Schritt 1](images/azure_ad_group_user_assignment_1.png){.thumbnail}

Wählen Sie den Benutzer aus, der zu dieser Gruppe hinzugefügt werden soll, und klicken Sie dann auf den Button `Select`{.action}.

![Azure AD Group User Assignment Schritt 2](images/azure_ad_group_user_assignment_2.png){.thumbnail}

Damit ist der Benutzer der Gruppe zugewiesen.

Um SSO-Authentifizierungen durchzuführen, muss eine Azure AD Anwendung erstellt werden.

SSO muss für diese Anwendung konfiguriert werden.

### Azure AD Anwendungen

Erstellen Sie zunächst eine Anwendung, wenn diese noch nicht existiert.

#### Eine Azure AD Anwendung erstellen

Klicken Sie auf `Enterprise applications`{.action} im linken Menü.

![Azure AD Menüanwendungen](images/azure_ad_menu_applications.png){.thumbnail}

Klicken Sie oben auf `New application`{.action}.

![Azure AD Schritt 1 Anwendungen](images/azure_ad_applications_1.png){.thumbnail}

Klicken Sie oben auf `Create your own application`{.action}.

![Azure AD Schritt 2 Anwendungen](images/azure_ad_applications_2.png){.thumbnail}

Wählen Sie links `Non-gallery`{.action} aus und klicken Sie auf den Button `Create`{.action}.

![Azure AD Schritt 3 Anwendungen](images/azure_ad_applications_3.png){.thumbnail}

Die Anwendungsdetails werden angezeigt.

![Azure AD Schritt 4 Anwendungen](images/azure_ad_applications_4.png){.thumbnail}

Die Azure AD Anwendung wird nun erstellt. Benutzer, die SSO-Authentifizierungen über diese Anwendung durchführen sollen, müssen zur *Application* hinzugefügt werden.

#### Azure AD Anwendung - Zuweisung von Benutzern

> [!primary]
>
> Damit ein Benutzer eine SSO-Authentifizierung von einer Azure AD-Anwendung aus durchführen kann, muss er zu dieser Anwendung hinzugefügt werden. Nachfolgend wird beschrieben, wie Sie einen Benutzer zu einer Azure AD Anwendung hinzufügen.
>
> Wenn Sie über **Azure AD Premium** verfügen, ist es jedoch besser, eine Benutzergruppe statt Benutzern hinzuzufügen.
>

Öffnen Sie `Users and groups`{.action} im linken Menü und klicken Sie oben auf `Add user/group`{.action}.

Klicken Sie dann auf den Bereich `Users`{.action}, wählen Sie den Benutzer aus, der zur Anwendung hinzugefügt werden soll, und klicken Sie auf den Button `Select`{.action}.

![Azure AD Application User Assignment Schritt 1](images/azure_ad_application_user_assignment_1.png){.thumbnail}

![Azure AD Application User Assignment Schritt 2](images/azure_ad_application_user_assignment_2.png){.thumbnail}

Wenn die Anwendung erstellt und einem Benutzer zugewiesen wurde, kann SSO via SAML eingerichtet werden.

#### Azure AD Application SSO

Klicken Sie links auf den Button `Overview`{.action} und öffnen Sie den Bereich `Set up single sign on`{.action}.

![Azure AD SSO Schritt 1](images/azure_ad_sso_1.png){.thumbnail}

Klicken Sie auf `SAML`{.action}.

![Azure AD SSO Schritt 2](images/azure_ad_sso_2.png){.thumbnail}

Klicken Sie oben auf `Upload metadata file`{.action}.

![Azure AD SSO Schritt 3](images/azure_ad_sso_3.png){.thumbnail}

Klicken Sie auf das Icon `Select a file`{.action} und wählen Sie die Metadaten-Datei für den OVHcloud Service Provider aus. Klicken Sie auf den Button `Add`{.action}.

Sie erhalten die passende Metadatendatei über folgende Links:

- [Metadaten der EU-Region](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadaten der CA-Region](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Laden Sie die Metadatendatei herunter.

![Azure AD SSO Schritt 5](images/azure_ad_sso_5.png){.thumbnail}

Die SAML-Konfiguration wird angezeigt.

![Azure AD SSO Schritt 6](images/azure_ad_sso_6.png){.thumbnail}

Klicken Sie im Bereich `Attributes & Claims`{.action} auf den Button `Edit`{.action}.

![Azure AD SSO Schritt 9](images/azure_ad_sso_9.png){.thumbnail}

Klicken Sie oben auf `Add a group claim`{.action}.

![Azure AD SSO Schritt 10](images/azure_ad_sso_10.png){.thumbnail}

Wählen Sie `Security Groups`{.action} und **Group ID** aus `Source attribute`{.action} und klicken Sie dann auf `Save`{.action}.

![Azure AD SSO Schritt 11](images/azure_ad_sso_11.png){.thumbnail}

Der *Claim* **groups** sollte nun in der Liste erscheinen.

Kopieren und speichern Sie den Wert des **Claim name** (etwa in einem Texteditor), da er später benötigt wird.

![Azure AD SSO Schritt 12](images/azure_ad_sso_12.png){.thumbnail}

Kopieren Sie aus `SAML certificates`{.action} den Wert im Feld `App Federation Metadata Url`{.action}.

Verwenden Sie diesen Link zum Herunterladen der Metadaten-Datei der *Application* von Azure AD, um sie später im OVHcloud Kunden-Account zu verwenden.

![Azure AD SSO Schritt 8](images/azure_ad_sso_8.png){.thumbnail}

### Das Vertrauen zum OVHcloud Account und die Verbindung konfigurieren

Das Hinzufügen Ihres Google Workspace als vertrauenswürdiger Identity Provider erfolgt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), in dem Sie die Metadaten des Identity Providers hinterlegen können.

#### OVHcloud Vertrauen aufbauen

Wenn Sie eingeloggt sind, klicken Sie oben rechts auf Ihren Account-Namen.

![OVHcloud Top Menü](images/ovhcloud_top_menu.png){.thumbnail}

Klicken Sie auf die Initialen, um auf die Verwaltungsseite Ihres Accounts zuzugreifen.

![OVHcloud Benutzerinformationen](images/ovhcloud_user_infos.png){.thumbnail}

Öffnen Sie den Tab `Verwaltung der Nutzer`{.action}.

![OVHcloud Menüprofil](images/ovhcloud_profile_menu.png){.thumbnail}

Klicken Sie auf den Button `SSO-Verbindung`{.action}.

![OVHcloud verbindet SSO step 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Geben Sie im Feld **Group Attribute Name** den Wert des **Claim name** der Azure *Application*-Gruppe ein. Klicken Sie auf `Bestätigen`{.action}.

Geben Sie die XML-Metadaten der Azure *Application* aus der zuvor gespeicherten Datei ein.

Klicken Sie auf den Button `Bestätigen`{.action}.

![SSO Step 1](images/ovhcloud_sso_1.png){.thumbnail}

Ihre Azure AD *Application* gilt nun als vertrauenswürdiger Identity Provider. Dennoch müssen im OVHcloud Account Gruppen hinzugefügt werden.

> [!warning]
> Wenn Sie sich in diesem Schritt über SSO verbinden, wird wahrscheinlich eine Fehlermeldung `Not in valid groups` angezeigt.
>
> Ihr OVHcloud Account überprüft, ob der authentifizierende Benutzer zu einer bestehenden Gruppe auf dem Account gehört.
>

Um dies zu erreichen, überprüfen Sie das Attribut "Group", das von Ihrer Azure AD *Application* zurückgegeben wird: das Feld **Object Id**.

#### Deklaration von Gruppen für OVHcloud

![Azure AD Group Schritt 2](images/azure_ad_group_2.png){.thumbnail}

Klicken Sie auf den Button `Gruppe deklarieren`{.action}.

![OVHcloud User Management Gruppen Schritt 1](images/ovhcloud_sso_menu_1.png){.thumbnail}

Vervollständigen Sie die Felder und klicken Sie dann auf den Button `Bestätigen`{.action}.

![OVHcloud User Management Gruppen Schritt 2](images/ovhcloud_sso_menu_2.png){.thumbnail}

Die erstellte Gruppe sollte in der Liste erscheinen.

![OVHcloud User Management Gruppen Schritt 3](images/ovhcloud_sso_menu_3.png){.thumbnail}

### Verbindung via SSO

Geben Sie auf der [OVHcloud Login-Seite](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) Ihre [Kundenkennung](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/#was-ist-meine-kundenkennung) ein, gefolgt von **/idp***. Klicken Sie ohne ein Passwort einzugeben auf `Login`{.action}.

![SSO Login step 1](images/ovhcloud_sso_login_1.png){.thumbnail}

Sie werden dann auf die Loginseite Ihrer Azure AD Anwendung weitergeleitet. Wählen Sie `Use another account`{.action}.

![Azure AD Login Schritt 1](images/azure_ad_login_1.png){.thumbnail}

Geben Sie die E-Mail-Adresse des Benutzers der Azure AD Anwendung ein und klicken Sie dann auf den Button `Next`{.action}.

![Azure AD Login Schritt 2](images/azure_ad_login_2.png){.thumbnail}

Geben Sie das Passwort des Benutzers der Azure AD Anwendung ein und klicken Sie dann auf den Button `Sign In`{.action}.

![Azure AD Login Schritt 3](images/azure_ad_login_3.png){.thumbnail}

Sie sind nun mit derselben Kundenkennung eingeloggt, jedoch über Azure AD SSO und mit Ihrem Azure *Application* Benutzer.

![SSO Login step 2](images/ovhcloud_sso_login_2.png){.thumbnail}


## Weiterführende Informationen

[OVHcloud Kunden-Account erstellen](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/)

[OVHcloud Kunden-Account absichern und persönliche Informationen verwalten](https://docs.ovh.com/de/customer/alles_uber_ihre_ovh_kundenkennung/)

[Das Passwort Ihres Kunden-Accounts anlegen und verwalten ](https://docs.ovh.com/de/customer/Passwort-verwalten/)

[Den OVHcloud Kunden-Account mit der Zwei-Faktor-Authentifizierung absichern](https://docs.ovh.com/de/customer/Account-mit-2FA-absichern/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.