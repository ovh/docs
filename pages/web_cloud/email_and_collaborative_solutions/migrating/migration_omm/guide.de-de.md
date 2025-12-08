---
title: "E-Mail-Accounts mit dem OVH Mail Migrator migrieren"
excerpt: "Erfahren Sie, wie Sie Ihre E-Mail-Accounts mit dem OVH Mail Migrator zu OVHcloud migrieren"
updated: 2025-11-25
---

<style>
.w-600 {
  max-width:600px !important;
}
.w-300 {
  max-width:300px !important;
}
</style>

## Ziel

[OVH Mail Migrator](/links/web/omm) ist ein von OVHcloud entwickeltes Tool, das den Bedarf nach Reversibilität abdeckt. Sie können damit E-Mail-Accounts auf Ihre OVHcloud E-Mail-Accounts oder einen externen E-Mail-Dienst migrieren. Dabei können verschiedene Inhalte wie E-Mails, Kontakte, Kalender und Aufgaben übertragen werden, sofern diese mit Ihren E-Mail-Accounts kompatibel sind.

**Diese Anleitung erklärt, wie Sie Ihre E-Mail--Accounts mit unserem OVH Mail Migrator-Tool zu OVHcloud migrieren können.**

## Voraussetzungen

- Sie haben einen externen E-Mail-Dienst oder einen Dienst von OVHcloud: [Zimbra](/links/web/zimbra), [Exchange](/links/web/emails), [E-Mail Pro](/links/web/email-pro) oder eine MX Plan Lösung (als MX Plan Angebot oder enthalten in einem [OVHcloud Webhosting Angebot](/links/web/hosting)).
- Sie verfügen über die Login-Daten für die Quell-Accounts, die Sie migrieren möchten.
- Sie verfügen über die Login-Daten der Ziel-Accounts.

## In der praktischen Anwendung

Um auf OMM zuzugreifen, verwenden Sie die Adresse: <omm.ovhcloud.com>

![omm](images/omm-01.png){.thumbnail .w-600}

### Projekt für Migration erstellen <a name="create-project"></a>

Bevor Sie eine Migration starten, müssen Sie ein Projekt erstellen. Dieses Projekt ermöglicht es Ihnen, eine oder mehrere Migrationen zu starten und diese zu verfolgen.

Klicken Sie auf `New migration`{.action}, um mit der Erstellung Ihres Projekts zu beginnen:

**E-Mail-Adresse des Projekt-Kontakts**: Geben Sie eine E-Mail-Adresse ein, die zur Empfangung der Zugangsdaten und der Benachrichtigungen zu Ihren Migrationen verwendet wird. Es wird nicht empfohlen, eine der E-Mail-Adressen einzugeben, die in Ihrem Projekt migriert werden.
**Projekt-Passwort**: Geben Sie ein Passwort ein, das zur Anmeldung in Ihr Projekt verwendet wird. Es muss mindestens 10 Zeichen enthalten, darunter mindestens 1 Sonderzeichen, 1 Zahl, 1 Großbuchstabe und 1 Kleinbuchstabe.

Klicken Sie auf `Create my project`{.action}, um die Erstellung des Projekts zu starten.

Auf die E-Mail-Adresse des Projekt-Kontakts erhalten Sie eine Bestätigungsmail, die die eindeutige Projekt-ID und einen Link enthält, um darauf zuzugreifen.

![omm](images/omm-create-project-01.png){.thumbnail .w-600}

> [!primary]
>
> Das Migrationsprojekt und die damit verbundenen Daten werden nach 60 Tagen Inaktivität automatisch gelöscht.

### Migration erstellen <a name="create-migration"></a>

Sobald Ihr Projekt erstellt ist, melden Sie sich wie folgt an:

- Klicken Sie auf `Track a migration`{.action}.
- Geben Sie die `Project ID` ein, die Sie per E-Mail erhalten haben.
- Geben Sie das `Project password` ein, das Sie bei der Erstellung festgelegt haben.
- Klicken Sie auf `Connect to project`{.action}, um abzuschließen.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Sie befinden sich nun auf der Startseite des Projekts, von der aus Sie Ihre erste Migration starten können.

- Klicken Sie auf `New migration`{.action} oben links in der Tabelle.

![omm](images/omm-create-migration-02.png){.thumbnail .w-600}

Eine neue Seite wird angezeigt, auf der Sie die Zugangsdaten für den Quell-Account und den Ziel-Accounts eingeben können, um die Migration zu planen oder direkt zu starten. Der Inhalt des **Source Account** wird zum **Destination Account** migriert.

Bevor Sie Ihre Migration starten, ist es wichtig, die 3 Arten von Accounts zu kennen, die migriert werden können und wohin Sie migrieren können:

- **OVHcloud**: Die `Auto detection` wird empfohlen, wenn Sie einen Account migrieren müssen, der auf einem E-Mail-Dienst bei OVHcloud gehostet wird. Wenn Sie viele OVHcloud E-Mail-Accounts haben, wählen Sie aus den Angeboten `MX Plan`, `E-mail Pro`, `Exchange` und `Zimbra`. Sie werden aufgefordert, sich zum Ihrem OVHcloud Kunden-Account anzumelden. Weitere Informationen finden Sie im Abschnitt "[Über eine Anmeldung beim OVHcloud Kunden-Account migrieren](#sso-migration)".
- **Others**: E-Mail-Dienste, die außerhalb von OVHcloud abgeschlossen wurden. Eine nicht erschöpfende Liste der von OMM unterstützten E-Mail-Dienste wird angezeigt. Wenn Ihr E-Mail-Account-Typ nicht aufgelistet ist, verwenden Sie die Protokolle `IMAP` oder `POP`, die mit den meisten E-Mail-Servern kompatibel sind.
- **Importing files**: Es ist möglich, den Inhalt von PST-, ICS-, CSV- und XML-Dateien über OMM zu einem Ziel-E-Mail-Account zu migrieren. Wenn diese Funktion ausgewählt wird, genügt es, Ihre Datei in das Feld zu ziehen oder über den Button `Browse your files`{.action} Ihre Dateien zu durchsuchen.

![omm](images/omm-create-migration-03.png){.thumbnail .w-600}

Füllen Sie die Informationen entsprechend des Accounttyps aus:

- **Source account**
    - **Account type**: Wählen Sie den Typ des Quell-Accounts.
    - **E-Mail**: Geben Sie die E-Mail-Adresse des Quell-Accounts ein.
    - **Password**: Geben Sie das Passwort des Quell-Accounts ein.
    - **Server URL** / **Server domain** *(je nach Typ)*: Geben Sie den Hostnamen des E-Mail-Servers ein, der mit dem zu migrierenden E-Mail-Account verbunden ist.
    - **OVHcloud Kunden-Account ID** *(je nach Typ)*: Dieses Feld wird automatisch ausgefüllt, wenn Sie sich in einen OVHcloud Kunden-Account angemeldet haben. Weitere Informationen finden Sie im Abschnitt "[Über eine Anmeldung beim OVHcloud Kunden-Account migrieren](#sso-migration)".
    - **Organization** *(je nach Typ)*: Wählen Sie die Organisation aus, die mit dem Quell-E-Mail-Account verbunden ist.
    - **Platform** *(je nach Typ)*: Wählen Sie die Plattform aus, die mit dem Quell-E-Mail-Account verbunden ist.
    - **Service** *(je nach Typ)*: Wählen Sie den Dienst aus, der mit dem Quell-E-Mail-Account verbunden ist.
    - **Advanced settings** > **Delegation account ID** *(je nach Typ)*: Wenn der zu migrierende E-Mail-Account ein geteilter Account ist, müssen Sie die E-Mail-Adresse des Administrator-Accounts des Delegation-Accounts eingeben.
- **Ziel-Accounts**
    - **Account type**: Wählen Sie den Typ des Ziel-Accounts.
    - **E-Mail**: Geben Sie die Ziel-E-Mail-Adresse ein.
    - **Password**: Geben Sie das Passwort ein, das mit dem Ziel-Account verbunden ist.
    - **Server URL** / **Server domain** *(je nach Typ)*: Geben Sie den Hostnamen des E-Mail-Servers ein, der mit dem Ziel-E-Mail-Account verbunden ist.
    - **OVHcloud Kunden-Account ID** *(je nach Typ)*: Dieses Feld wird automatisch ausgefüllt, wenn Sie sich in einen OVHcloud Kunden-Account angemeldet haben. Weitere Informationen finden Sie im Abschnitt "[Über eine Anmeldung beim OVHcloud Kunden-Account migrieren](#sso-migration)".
    - **Organization** *(je nach Typ)*: Wählen Sie die Organisation aus, die mit dem Ziel-E-Mail-Account verbunden ist.
    - **Platform** *(je nach Typ)*: Wählen Sie die Plattform aus, die mit dem Ziel-E-Mail-Account verbunden ist.
    - **Service** *(je nach Typ)*: Wählen Sie den Dienst aus, der mit dem Ziel-E-Mail-Account verbunden ist.
    - **Advanced settings** > **Delegation account ID** *(je nach Typ)*: Wenn der zu migrierende E-Mail-Account ein geteilter Account ist, müssen Sie die E-Mail-Adresse des Administrator-Accounts des Delegation-Accounts eingeben.
- **Start of Transfers**: Sie können die Migration unmittelbar über `Immediately` starten oder `Later` ankreuzen, um die Migration zu verschieben. Eine verschobene Migration ermöglicht es, Datum und Uhrzeit des Starts zu definieren.
- **Data to transfer**: Abhängig vom Typ des zu migrierenden E-Mail-Accounts und des Ziel-Accountss zeigt Ihnen dieser Abschnitt die verschiedenen Arten von Daten an, die bei der Migration unterstützt werden. Dies hängt vom Quell-Account und vom Ziel-Accounts ab.

![omm](images/omm-create-migration-04.png){.thumbnail .w-600}

> [!warning]
>
> Wenn Sie einen Account migrieren, der Funktionen hat, die der Ziel-Account nicht hat, müssen Sie die Elemente, die von OMM nicht migriert werden können, eigenständig sichern. Konsultieren Sie unsere Anleitung "[Manuelles Migrieren Ihrer E-Mail-Adresse](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)".

Sobald die Parameter der Quell- und Ziel-Accounts ausgefüllt sind, klicken Sie auf:

- `Migrate and add another account`{.action}, wenn Sie eine weitere Migration in die Liste Ihres Projekts hinzufügen möchten.
- `Migrate my account`{.action}, um die konfigurierte Migration zu starten und zur Startseite des Projekts zurückzukehren.

### Über eine Anmeldung beim OVHcloud Kunden-Account migrieren <a name="sso-migration"></a>

Bei einer Migration zu oder von einem OVHcloud Kunden-Account können Sie unserere Angebote `MX Plan`, `E-mail Pro`, `Exchange` und `Zimbra` auswählen.

![omm](images/omm-migration-sso-00.png){.thumbnail .w-300}

Wenn Sie eines dieser Angebote auswählen, folgen Sie den unten stehenden Schritten:

> [!tabs]
> **Schritt 1**
>>
>> - Klicken Sie auf `Login`{.action}, um das Anmeldefenster für den OVHcloud Kundencenter anzuzeigen.
>>
>> ![omm](images/omm-migration-sso-01.png){.thumbnail .w-600}
>>
> **Schritt 2**
>>
>> Melden Sie sich im OVHcloud Kundencenter an:
>>
>> - Geben Sie den Login bzw. die E-Mail-Adresse ein, die mit dem OVHcloud Kunden-Account verbunden ist. Geben Sie das dazugehörige Passwort ein und klicken Sie auf `Login`{.action}.
>> - Klicken Sie auf `Continue`{.action}, wenn Sie bereits eingeloggt sind.
>>
>> > [!primary]
>> >
>> > Der OVHcloud Kunden-Account muss mit dem E-Mail-Dienst verbunden sein, der Basis der Migration ist.
>>
>> ![omm](images/omm-migration-sso-02.png){.thumbnail .w-600}
>>
> **Schritt 3**
>>
>> - Ein neues Fenster wird angezeigt, das Ihnen ermöglicht, OMM die Berechtigung zu erteilen, auf die Funktionen Ihres OVHcloud Kundencenters zuzugreifen, die die verfügbaren Dienste und E-Mail-Accounts auflisten. Standardmäßig beträgt die Gültigkeit (Validity) dieser Berechtigungen 24 Stunden. Legen Sie die gewünschte zeitliche Gültigkeit fest und klicken Sie auf `Authorize`{.action}.
>>
>> ![omm](images/omm-migration-sso-03.png){.thumbnail .w-600}
>>
> **Schritt 4**
>>
>> - Sie können nun Ihre Dienste und -Accounts über Dropdown-Menüs auswählen, was die Suche nach Elementen erleichtert und Eingabefehler vermeidet. Es ist jedoch erforderlich, das Passwort des ausgewählten E-Mail-Accounts einzugeben.
>>
>> Beispiel mit einem Zimbra-Dienst:
>>
>> ![omm](images/omm-migration-sso-04.png){.thumbnail .w-600}

> [!warning]
>
> Sie können die aktiven Zugriffe zum OVHcloud Kundencenter durch Klicken auf `Log out`{.action} beenden. Klicken Sie dann bei `OVHcloud account ID` auf `Log out the account`{.action}.
>
> ![omm](images/omm-migration-sso-05.png){.thumbnail .w-300}

### Migrationsprojekt-Status verfolgen <a name="follow-migration"></a>

Es gibt zwei Möglichkeiten, den Status zu verfolgen:

- Über die E-Mail, die Sie beim Erstellen Ihres Projekts erhalten haben. Sie finden einen Link, der Ihnen den Zugang zur Projektseite mit der `Project ID` ermöglicht. Nur das `Project Password` muss eingegeben werden.
- Auf der Startseite von OMM klicken Sie auf `Track a migration`{.action}. Geben Sie Ihre `Project ID` und Ihr `Project Password` ein.

Klicken Sie anschließend auf `Connect to project`{.action}, um zur Startseite des Projekts zu gelangen und Ihre Migrationen zu verfolgen.

![omm](images/omm-create-migration-01.png){.thumbnail .w-600}

Auf dieser Seite finden Sie die Liste der laufenden oder geplanten Migrationen. Der Status des Projekts wird ebenfalls rechts angezeigt.

Klicken Sie auf den Button `⋮`{.action} rechts in der Zeile einer Migration, um die Optionen anzuzeigen:

- `See more details`{.action}: Sie werden zu einer Seite weitergeleitet, auf der Sie den Fortschritt einer Migration verfolgen können oder den Bericht lesen können, sobald diese abgeschlossen ist.
- `Cancel migration`{.action}: Ermöglicht es, die laufende Migration abzubrechen. Die bereits migrierten Elemente bleiben auf dem Ziel-Account.
- `Delete migration data (GDPR)`{.action}: Diese Option löst die Löschung aller Daten der Migration des Accounts. Sie behalten jedoch die Informationen zu den Ereignissen, die während der Migration stattgefunden haben.

![omm](images/omm-migration-follow-02.png){.thumbnail .w-600}

Beispiel für die Nachverfolgung einer Migration:

![omm](images/omm-migration-follow-03.png){.thumbnail .w-600}

> [!primary]
>
> Wenn während der Migration ein Fehler auftritt, wird Ihnen in dem Fenster `See more details`{.action} ein Link zum Fehlerprotokoll bereitgestellt.

## Weiterführende Informationen

[Mit E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration)

[E-Mail-Adresse MX Plan zu einem E-mail Pro- oder Exchange Account migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/migration_control_panel)

Für spezialisierte Dienstleistungen (Suchmaschinenoptimierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](/links/partner).

Wenn Sie Unterstützung bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen wünschen, können Sie unsere verschiedenen [Support-Angebote](/links/support) konsultieren.

Tauschen Sie sich mit unserer [Nutzercommunity](/links/community) aus.