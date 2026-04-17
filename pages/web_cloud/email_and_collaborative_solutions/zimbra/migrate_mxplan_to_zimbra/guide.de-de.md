---
title: 'MX Plan E-Mail-Adresse auf einen OVHcloud Zimbra Account migrieren'
excerpt: 'Erfahren Sie hier, wie Sie eine MX Plan E-Mail-Adresse auf einen OVHcloud Zimbra Account migrieren'
updated: 2026-04-10
---

## Ziel

Wenn Sie Ihr MX Plan E-Mail-Angebot auf ein [OVHcloud Zimbra](/links/web/zimbra) Angebot umstellen möchten, können Sie das [**O**VH **M**ail **M**igrator](/links/web/omm) Tool für Ihre Migration verwenden.

**Erfahren Sie hier, wie Sie eine MX Plan E-Mail-Adresse auf einen OVHcloud Zimbra Account migrieren.**

## Voraussetzungen

- Sie verfügen über eine MX Plan E-Mail-Adresse (im MX Plan Angebot oder einem [OVHcloud Webhosting](/links/web/hosting) enthalten).
- Sie verfügen über einen OVHcloud Zimbra E-Mail-Account.
- **Für die MX Plan E-Mail-Adresse, die Sie migrieren möchten, ist keine Weiterleitung eingerichtet**.

<!-- CP-NAV-START:web-zimbra -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Zimbra](/links/control-panel/web-zimbra)
- **Navigationspfad:** `Web Cloud`{.action} > `Zimbra Mail`{.action}

---
<!-- CP-NAV-END:web-zimbra -->

## In der praktischen Anwendung

> [!warning]
>
> Wenn Ihr E-Mail-Account vertrauliche Informationen verwaltet oder Sie bei der Migration auf Probleme stoßen, empfehlen wir, auf die Einrichtung des Automatisierungstools im OVHcloud Kundencenter zu warten.

Die Migration eines MX Plan E-Mail-Accounts auf einen Zimbra E-Mail-Account erfolgt in 2 Schritten. Um zu vermeiden, dass der Empfang an der ursprünglichen E-Mail-Adresse unterbrochen wird, müssen Sie den folgenden Vorgang einhalten:

1. **[Den Inhalt des MX Plan Accounts auf einen Zimbra Account übertragen](#step1)**
    - [1.1 - Erstellung einer Zimbra E-Mail-Adresse](#step11)
    - [1.2 - E-Mail-Migration mit dem OVHcloud Mail Migrator](#step12)
    - [1.3 - Sicherung der E-Mails des Quell-Accounts (optional)](#step13)
2. **[Den ursprünglichen MX Plan Account löschen und seine Adresse dem Zimbra Account zuweisen](#step2)**
    - [2.1 - Löschen der alten MX Plan E-Mail-Adresse](#step21)
    - [2.2 - Zimbra E-Mail-Adresse umbenennen](#step22)

Im folgenden Beispiel migrieren wir die Adresse `contact@mydomain.ovh`. Dazu erstellen wir den Zimbra Account unter dem Namen `contact2@mydomain.ovh`.

![zimbra](images/zimbra_migration_mxplan.png){.thumbnail}

### 1 - Den Inhalt des MX Plan Accounts auf einen Zimbra Account übertragen <a name="step1"></a>

#### 1.1 - Erstellung einer Zimbra E-Mail-Adresse <a name="step11"></a>

> [!primary]
>
> Wenn Sie bereits über eine Zimbra E-Mail-Adresse verfügen, fahren Sie fort mit der [Migration der E-Mails mit dem OVHcloud Mail Migrator](#step12).

Erstellen Sie zunächst eine E-Mail-Adresse mit einem vorläufigen Namen. Sie können zum Beispiel die Adresse `contact2@mydomain.ovh` erstellen, wenn Sie die Adresse `contact@mydomain.ovh` migrieren möchten.

Um eine Zimbra E-Mail-Adresse zu erstellen, lesen Sie den Abschnitt "Einen E-Mail-Account erstellen" in unserer Anleitung [Erste Schritte mit Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra).

#### 1.2 - E-Mail-Migration mit dem OVHcloud Mail Migrator <a name="step12"></a>

Verwenden Sie das Migrationstool [**O**VH **M**ail **M**igrator](/links/web/omm) (**OMM**), um den Inhalt des ursprünglichen MX Plan Accounts auf den neuen Zimbra Ziel-Account zu übertragen. Verwenden Sie dabei das oben im Diagramm dargestellte Beispiel als Referenz.

Die Migration mit OMM erfolgt in 3 Schritten: Erstellen eines Projekts, Konfigurieren der Migration und anschließendes Verfolgen des Fortschritts. Klicken Sie auf jeden Tab, um die entsprechenden Anweisungen anzuzeigen.

> [!tabs]
> **Schritt 1**
>>
>> **Migrationsprojekt erstellen**
>>
>> Rufen Sie <https://omm.ovhcloud.com/> auf und klicken Sie auf `Neue Migration`{.action}.
>>
>> ![zimbra](images/omm-01.png){.thumbnail}
>>
>> - **Kontakt-E-Mail-Adresse des Projekts**: Geben Sie eine E-Mail-Adresse ein, die die Zugangsdaten und Tracking-Benachrichtigungen erhält. Verwenden Sie keine Adresse, die in diesem Projekt migriert werden soll.
>> - **Projektpasswort**: Legen Sie ein Passwort fest (mindestens 10 Zeichen, mit mindestens 1 Sonderzeichen, 1 Zahl, 1 Großbuchstaben und 1 Kleinbuchstaben).
>>
>> Klicken Sie auf `Mein Projekt erstellen`{.action}. Sie erhalten eine Bestätigungs-E-Mail mit der eindeutigen Projekt-ID.
>>
> **Schritt 2**
>>
>> **Am Projekt anmelden und Migration erstellen**
>>
>> Klicken Sie auf der Startseite von [OMM](/links/web/omm) auf `Eine Migration verfolgen`{.action}, geben Sie die `Projekt-ID` und das `Projektpasswort` ein und klicken Sie anschließend auf `Am Projekt anmelden`{.action}.
>>
>> Klicken Sie dann auf `Neue Migration`{.action}, um Ihre Migration zu konfigurieren:
>>
>> ![zimbra](images/omm-create-migration.png){.thumbnail}
>>
>> - **Quell-Account**:
>>     - **Account-Typ**: Wählen Sie `OVHcloud` und dann `MX Plan` oder `Automatische Erkennung`. Klicken Sie auf `Anmelden`{.action}, um sich mit Ihrem OVHcloud Account zu identifizieren und den Dienst sowie die zu migrierende Adresse automatisch auszuwählen (Beispiel: `john.smith@mydomain.ovh`). Geben Sie dann das Passwort für diesen E-Mail-Account ein.
>> - **Ziel-Account**:
>>     - **Account-Typ**: Wählen Sie `OVHcloud` und dann `Zimbra`. Klicken Sie auf `Anmelden`{.action}, um sich mit Ihrem OVHcloud Account zu identifizieren und den Zimbra-Dienst sowie die Zieladresse auszuwählen (Beispiel: `zimbra2@mydomain.ovh`). Geben Sie dann das Passwort für diesen E-Mail-Account ein.
>> - **Zu übertragende Daten**: Überprüfen Sie die unterstützten Datentypen und deaktivieren Sie diejenigen, die Sie nicht migrieren möchten.
>> - **Übertragungsbeginn**: Wählen Sie `Sofort` oder aktivieren Sie `Später`, um die Migration zu einem bestimmten Datum und einer bestimmten Uhrzeit zu planen.
>>
>> Klicken Sie auf `Meinen Account migrieren`{.action}, um die Migration zu starten.
>>
>> ![zimbra](images/omm-zimbra-01.png){.thumbnail}
>>
> **Schritt 3**
>>
>> **Migration verfolgen**
>>
>> Es gibt zwei Möglichkeiten, den Fortschritt Ihres Migrationsprojekts zu verfolgen:
>>
>> - Über die beim Erstellen des Projekts erhaltene E-Mail, über den angegebenen Link (die Projekt-ID ist bereits vorausgefüllt).
>> - Über die Startseite von [OMM](/links/web/omm): Klicken Sie auf `Eine Migration verfolgen`{.action}, geben Sie Ihre `Projekt-ID` und Ihr `Projektpasswort` ein und klicken Sie dann auf `Am Projekt anmelden`{.action}.
>>
>> Klicken Sie auf der Projektseite rechts neben Ihrer Migrationszeile auf die Schaltfläche `⋮`{.action}, um die Optionen anzuzeigen:
>>
>> - `Weitere Details anzeigen`{.action}: Verfolgen Sie den Migrationsfortschritt und rufen Sie den Bericht nach Abschluss ab.
>> - `Migration abbrechen`{.action}: Bricht die laufende Migration ab. Bereits migrierte Elemente werden im Ziel-Account beibehalten.
>> - `Meine Migrationsdaten löschen (DSGVO)`{.action}: Löst das Löschen aller migrationsbezogenen Daten aus. Informationen zu Migrationsereignissen bleiben erhalten.
>>
>> ![zimbra](images/omm-migration-follow.png){.thumbnail}

Weitere Informationen zur Verwendung von OMM finden Sie in unserer Anleitung "[E-Mail-Accounts über OVHcloud Mail Migrator migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_omm)".

> [!primary]
>
> Die Migrationsdauer variiert je nach Datenmenge und kann zwischen wenigen Minuten und mehreren Stunden liegen. Überprüfen Sie nach Abschluss der Migration, ob alle E-Mails erfolgreich migriert wurden.

#### 1.3 - Sicherung der E-Mails des Quell-Accounts (optional) <a name="step13"></a>

> [!warning]
>
> Bevor Sie Ihren MX Plan Account löschen, **sichern Sie Ihre E-Mails**, um Datenverlust zu vermeiden.

Verwenden Sie die Exportoptionen Ihres E-Mail-Clients. In unserer Anleitung "[E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)" finden Sie Details zum manuellen Export einer E-Mail-Adresse aus einem E-Mail-Client.

### 2 - Den ursprünglichen MX Plan Account löschen und seine Adresse dem Zimbra Account zuweisen <a name="step2"></a>

#### 2.1 - Löschen der alten MX Plan E-Mail-Adresse <a name="step21"></a>

Um die MX Plan E-Mail-Adresse zu löschen (Beispiel: `contact@mydomain.ovh`), folgen Sie unserer Anleitung "[E-Mail-Account löschen](/pages/web_cloud/email_and_collaborative_solutions/common_email_features/email_reset_account)".

> [!warning]
>
> Wenn Sie von einem MX Plan Account migrieren, der Zimbra Webmail verwendet, warten Sie 5 Minuten, bis der Löschvorgang wirksam ist, bevor Sie den zweiten E-Mail-Account umbenennen.

#### 2.2 - Zimbra E-Mail-Adresse umbenennen <a name="step22"></a>

Greifen Sie in Ihrem OVHcloud Kundencenter auf Ihren Zimbra-Dienst zu und benennen Sie die vorläufige Zimbra E-Mail-Adresse in die migrierte MX Plan-Adresse um. Anhand des Beispiels aus Schritt 2 von Kapitel 1.2 wird die vorläufige Adresse `zimbra2@mydomain.ovh` in `john.smith@mydomain.ovh` umbenannt, also die tatsächlich verwendete E-Mail-Adresse.

### Ergebnis <a name="conclusion"></a>

Ihr E-Mail-Account wurde auf Zimbra migriert. Um die Konfiguration abzuschließen, lesen Sie die folgenden Anleitungen:

- [Erste Schritte mit Zimbra](/pages/web_cloud/email_and_collaborative_solutions/zimbra/getting_started_zimbra)
- [Zimbra E-Mail-Adresse in einem E-Mail-Client konfigurieren](/pages/web_cloud/email_and_collaborative_solutions/zimbra/zimbra_mail_apps)

## Weiterführende Informationen <a name="go-further"></a>

[OVHcloud Zimbra FAQ](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/faq-zimbra)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
