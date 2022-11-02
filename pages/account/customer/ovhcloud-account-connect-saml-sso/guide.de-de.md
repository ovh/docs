---
title: SSO-Verbindungen mit Ihrem OVHcloud Account aktivieren
slug: connect-saml-sso
excerpt: "Erfahren Sie, wie Sie Ihren ADFS Dienst über SAML 2.0 mit Ihrem OVHcloud Account verbinden"
section: Fortgeschrittene Nutzung
order: 02
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen“ auf dieser Seite.
>

**Letzte Aktualisierung am 13.10.2022**

## Ziel

Sie können die einzigartige SSO-Authentifizierung (*Single Sign-On*) **verwenden**, um sich mit Ihrem OVHcloud Account zu verbinden. Um diese Verbindungen zu aktivieren, müssen Ihr Account und Ihre ADFS-Dienste (*Active Directory Federation Services*) mithilfe der SAML-Authentifizierungen (*Security Serving Markup Language*) konfiguriert werden.

**In dieser Anleitung erfahren Sie, wie Sie Ihren OVHcloud Account mit einem externen Active Directory verbinden.**

## Voraussetzungen

- ADFS (Active Directory Federation Services) Dienstleistungen müssen auf Ihrem Server ausgeführt werden
- Sie verfügen über einen [OVHcloud Account](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/)
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## In der praktischen Anwendung

> [!primary]
>
> Damit ein Dienstleister (d. h. Ihr OVHcloud Account) eine SSO-Verbindung zu einem Identitätsanbieter (d. h. Ihrem ADFS-Dienst) herstellen kann, ist es von entscheidender Bedeutung, ein gegenseitiges Vertrauen aufzubauen.
>

### ADFS-Vertrauen aufbauen

Ihr ADFS fungiert als Identitätsanbieter. Die Authentifizierungsanfragen für Ihren OVHcloud Account werden nur akzeptiert, wenn Sie diesen zuerst als vertrauenswürdige Drittanbieter deklariert haben.

Im Zusammenhang mit Active Directory bedeutet dies, dass es als `Relying Party Trust` hinzugefügt werden muss.

Öffnen Sie im Server-Manager das `Tools`{.action}-Menü und wählen Sie `AD FS Management`{.action} aus.

![Menu Windows Server Werkzeuge](images/windows_server_tools_menu.png){.thumbnail}

Klicken Sie auf `Relying Party Trusts`{.action}.

![ADFS Menu](images/adfs_menu.png){.thumbnail}

Klicken Sie dann auf `Add Relying Party Trust...`{.action}.

![ADFS-Zulassungsmenü](images/adfs_relying_party_trusts_menu.png){.thumbnail}

Wählen Sie `Claims aware`{.action} aus und bestätigen Sie mit dem `Start`{.action} Button.

![ADFS eine Genehmigung hinzufügen - Schritt 1](images/adfs_add_relying_party_trust_1.png){.thumbnail}

Sie können die Informationen über den vertrauenswürdigen Drittanbieter manuell eingeben oder aus einer Metadatendatei importieren.

#### OVHcloud SP Metadaten importieren

Sie erhalten die passende Metadatendatei über folgende Links:

- [EU-Metadaten](https://www.ovh.com/auth/sso/saml/sp/metadata.xml)
- [Metadaten der CA-Region](https://ca.ovh.com/auth/sso/saml/sp/metadata.xml)

Wählen Sie `Import data about the relying party from a file`{.action} und Ihre Metadatendatei aus.

Klicken Sie anschließend auf den `Next`{.action}-Button.

![ADFS - Genehmigung hinzufügen - Schritt 2](images/adfs_add_relying_party_trust_2.png){.thumbnail}

Geben Sie einen Anzeigenamen für den vertrauenswürdigen Drittanbieter ein und klicken Sie auf den `Next`{.action} Button.

![ADFS - Genehmigung hinzufügen - Schritt 3](images/adfs_add_relying_party_trust_3.png){.thumbnail}

Klicken Sie im `Next`{.action} zur Zugriffskontrolle auf Next.

![ADFS - Genehmigung hinzufügen - Schritt 4](images/adfs_add_relying_party_trust_4.png){.thumbnail}

Klicken Sie erneut auf `Next`{.action}, um fortzufahren.

![ADFS - Genehmigung hinzufügen - Schritt 5](images/adfs_add_relying_party_trust_5.png){.thumbnail}

Klicken Sie im letzten Fenster auf den Button `Close`{.action}. Die Genehmigung von OVHcloud als vertrauenswürdiger Drittpartei wird nun zu Ihrem ADFS hinzugefügt.

![ADFS Zulassungen](images/adfs_relying_party_trusts.png){.thumbnail}

> [!primary]
>
> Mit OVHcloud als vertrauenswürdiger Drittanbieter sollten Sie sich bereits über eine SSO-Verbindung verbinden können. Alle Informationen zur Identität des Benutzers (als SAML-Aussage) bleiben jedoch nicht verfügbar, bis Sie eine Strategie konfigurieren, um die Felder LDAP Active Directory mit den Attributen der SAML-Aussage in Einklang zu bringen.
>

#### Zuordnung der Attribute LDAP zu den Attributen SAML

Klicken Sie auf den Eintrag zu OVHcloud im Bereich "Relying Party Trusts".

![ADFS-Zulassungsschema Schritt 1](images/adfs_relying_party_trusts_mapping_1.png){.thumbnail}

Klicken Sie anschließend auf `Edit Claim Issuance Policy ...`{.action}.

![ADFS-Zulassungsschema Schritt 2](images/adfs_relying_party_trusts_mapping_2.png){.thumbnail}

Klicken Sie auf den Button `Add Rule...`{.action}.

![ADFS-Zulassungsschema Schritt 3](images/adfs_relying_party_trusts_mapping_3.png){.thumbnail}

Klicken Sie auf `Next`{.action}.

Geben Sie einen Regelnamen ein und definieren Sie Ihre Entsprechungstabelle.

Wählen Sie `Active Directory` als `Attribute Store` aus.

> [!primary]
>
> Folgende Einstellungen können frei konfiguriert werden, damit der Diensteanbieter die LDAP Active Directory Daten korrekt lesen kann. Als Beispiel können Sie auf das unten stehende Bild verweisen.

Wenn Sie fertig sind, klicken Sie auf den Button `Finish`{.action}.

![ADFS-Zulassungsschema Schritt 4](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

![ADFS-Zulassungsschema Schritt 5](images/adfs_relying_party_trusts_mapping_5.png){.thumbnail}

Klicken Sie auf den Button `Apply`{.action} und bestätigen Sie mit `OK`{.action}.

![Zustimmungsschema Schritt 6](images/adfs_relying_party_trusts_mapping_6.png){.thumbnail}

Sobald die Entsprechungstabelle fertig ist, vertraut Ihr ADFS-Dienst nun OVHcloud als Dienstleister. Stellen Sie im nächsten Schritt sicher, dass der OVHcloud Account Ihrem ADFS als Identitätsanbieter vertraut.

### Das Vertrauen des OVHcloud Accounts aufbauen und die Verbindung konfigurieren

Das Hinzufügen Ihrer ADFS als vertrauenswürdiger Identitätsanbieter erfolgt im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de), in dem Sie die Metadaten des Identitätsanbieters bereitstellen können.

[Verbinden Sie sich](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) und klicken Sie oben rechts auf Ihr Profil.

![OVHcloud Top Menü](images/ovhcloud_top_menu.png){.thumbnail}

Klicken Sie auf Ihren Namen, um auf die Verwaltungsseite Ihres Profils zuzugreifen.

![OVHcloud Benutzerinformationen](images/ovhcloud_user_infos.png){.thumbnail}

Öffnen Sie den Tab `Benutzerverwaltung`{.action}.

![OVHcloud Menüprofil](images/ovhcloud_profile_menu.png){.thumbnail}

Klicken Sie auf den Button `SSO Login`{.action}.

![OVHcloud SSO-Verbindung Schritt 1](images/ovhcloud_user_management_connect_sso_1.png){.thumbnail}

Geben Sie die XML-Metadaten Ihres ADFS-Dienstes ein. In diesem Fall ist das `Feld Gruppenattributname` optional. Klicken Sie auf `Bestätigen`{.action}.

![OVHcloud SSO-Verbindung Schritt 2](images/ovhcloud_user_management_connect_sso_2.png){.thumbnail}

Sie müssen nun Ihren ADFS als Identitätsanbieter sowie die Standardgruppen finden.

![OVHcloud SSO-Verbindung Schritt 3](images/ovhcloud_user_management_connect_sso_3.png){.thumbnail}

Für weitere Informationen klicken Sie auf den Link unter der `URL des SSO Dienstes`.

![OVHcloud SSO-Verbindung Schritt 4](images/ovhcloud_user_management_connect_sso_4.png){.thumbnail}

![OVHcloud SSO-Verbindung Schritt 5](images/ovhcloud_user_management_connect_sso_5.png){.thumbnail}

Mit dem `...`{.action} Button können Sie das SSO aktualisieren oder löschen und die Details einsehen.

![OVHcloud SSO-Verbindung Schritt 6](images/ovhcloud_user_management_connect_sso_6.png){.thumbnail}

Ihr ADFS gilt nun als vertrauenswürdiger Identitätsanbieter. Dennoch müssen Sie Ihrem OVHcloud Account Gruppen hinzufügen.

> [!warning]
> Wenn Sie sich in diesem Schritt über SSO verbinden möchten, wird wahrscheinlich eine Fehlermeldung `Not in valid groups` angezeigt.
>
> Ihr OVHcloud Account überprüft, ob der authentifizierende Benutzer zu einer bestehenden Gruppe auf dem Account gehört.
>

Überprüfen Sie hierzu die Informationen, die dem von Ihrem ADFS-Dienst zurückgegebenen Attribut "Group"entsprechen.

Nehmen Sie zum Beispiel den Benutzer "John Doe" Ihres Active Directory, wie im folgenden Bild dargestellt.

![ADFS Benutzer](images/adfs_user.png){.thumbnail}

Überprüfen Sie die Entsprechungstabelle in ADFS:

![ADFS-Bestätigungsschema](images/adfs_relying_party_trusts_mapping_4.png){.thumbnail}

In diesem Beispiel ist das von der Active Directory für den Benutzer "John Doe" zurückgegebene Attribut "Gruppe" "title". Dies entspricht dem "job title", der `manager@<my-domain>.com` ist.

Sie können dies auch in der SAML Aussage überprüfen:

```xml
<AttributeStatement>
    <Attribute Name="http://schemas.xmlsoap.org/claims/Group">
        <AttributeValue>manager@<my-domain>.com</AttributeValue>
    </Attribute>
    ...
</AttributeStatement>
```

Das bedeutet, dass Sie die Gruppe ``manager@<my-domain>.com`` zu Ihrem OVHcloud Account hinzufügen müssen und dabei eine Rolle spielen. Andernfalls weiß Ihr OVHcloud Account nicht, was der Benutzer tun darf.

Fügen Sie diese hinzu, indem Sie auf den Button `Gruppe melden`{.action} und die Felder ausfüllen:

![ADFS Benutzer-Verwaltungsgruppen](images/ovhcloud_user_management_groups_1.png){.thumbnail}

![ADFS Benutzer-Verwaltungsgruppen](images/ovhcloud_user_management_groups_2.png){.thumbnail}

Anschließend können Sie überprüfen, ob die Gruppe zu Ihrem OVHcloud Account im Bereich `Gruppen` hinzugefügt wurde:

![ADFS Benutzer-Verwaltungsgruppen](images/ovhcloud_user_management_groups_3.png){.thumbnail}

Wenn Sie sich später mit dem Active Directory Benutzer "John Doe" verbinden, erkennt Ihr OVHcloud Account an, dass der Benutzer die von seiner Gruppe angegebene Rolle "REGULAR" hat.

Anschließend können Sie sich von Ihrem Account trennen und sich mit Ihrem ADFS als Identitätsanbieter neu verbinden.

### Verbindung via SSO

Geben Sie [auf der Login](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de)-Seite Ihre [Kundenkennung](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/#was-ist-meine-kundenkennung) ein, gefolgt von **/idp*** ohne Passwort und klicken Sie auf den `Login`{.action}-Button.

![Verbindung zum Verband OVHcloud](images/ovhcloud_federation_login_1.png){.thumbnail}

Sie werden dann auf Ihre ADFS-Verbindungsseite weitergeleitet. Geben Sie einen Login/Passwort eines Benutzers Ihres Active Directory LDAP ein und klicken Sie dann auf den Button `Sign in`{.action} .

![OVHcloud Federation Login Weiterleitung ADFS](images/ovhcloud_federation_login_2.png){.thumbnail}

Sie sind nun mit derselben Kundenkennung verbunden, aber über Ihren Active Directory Benutzer und Ihren SSO ADFS.

![OVHcloud User Info Föderation](images/ovhcloud_user_infos_federation.png){.thumbnail}

## Weiterführende Informationen

[OVHcloud Account erstellen](https://docs.ovh.com/de/customer/ovhcloud-account-erstellen/)

[Meinen OVHcloud Account absichern und meine persönlichen Informationen verwalten](https://docs.ovh.com/de/customer/alles_uber_ihre_ovh_kundenkennung/)

[Definition und Verwaltung des Passworts Ihres Accounts](https://docs.ovh.com/de/customer/Passwort-verwalten/)

[Den Account bei OVHcloud mit der Zwei-Faktor-Authentifizierung absichern](https://docs.ovh.com/de/customer/Account-mit-2FA-absichern/)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
