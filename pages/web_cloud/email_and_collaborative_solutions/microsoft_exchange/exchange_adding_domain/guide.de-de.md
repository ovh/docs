---
title: "Domainnamen zu Ihrem Exchange Dienst hinzufügen"
excerpt: "Erfahren Sie hier, wie Sie einen Domainnamen zu Exchange oder E-Mail Pro hinzufügen"
updated: 2025-04-28
---

<style>
.w-600 {
  max-width:600px !important;
}
.h-400 {
  max-height:400px !important;
}
</style>

## Ziel

Um die in Ihrer Exchange Lösung enthaltenen Accounts nutzen zu können, benötigen Sie einen Domainnamen. Es ist auch möglich, mehrere Domainnamen zu einer Exchange oder E-Mail Pro Dienstleistung hinzuzufügen.

**Diese Anleitung erklärt, wie Sie einen Domainnamen zu Ihrer Exchange oder E-Mail Pro Dienst hinzufügen.**

## Voraussetzungen

- Sie verfügen über einen [Exchange Dienst](/links/web/emails-hosted-exchange) oder [E-Mail Pro Dienst](/links/web/email-pro).
- Sie verfügen über einen oder mehrere Domainnamen.
- Sie haben administrativen Zugang zur Verwaltung der Domainkonfiguration (zum [Bearbeiten der DNS Zone](/pages/web_cloud/domains/dns_zone_edit)).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

### Zugang zur Verwaltung Ihrer Dienstleistung

> [!tabs]
> **Exchange**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. In der Rubrik `MICROSOFT`{.action}, klicken Sie auf `Exchange`{.action}.
>> 1. Wählen Sie den gewünschten Dienst aus.
>>
> **Email Pro**
>>
>> 1. Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein.
>> 1. Öffnen Sie den Bereich `Web Cloud`{.action}.
>> 1. Klicken Sie auf `E-Mail Pro`{.action}.
>> 1. Wählen Sie den gewünschten Dienst aus.
>>

### Eine Domain hinzufügen

1. Klicken Sie auf den Tab `Assoziierte Domains`{.action}.
1. Die Tabelle listet die Domainnamen auf, die aktuell mit Ihrer Dienstleistung verbunden sind.
1. Klicken Sie auf den Button `Domain hinzufügen`{.action}.

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail .w-600}

> [!warning]
>
> Standardmäßig sind alle E-Mail-Accounts eines Dienstes miteinander verbunden. Alle in Ihrem E-Mail-Dienst erstellten Adressen können alle Adressen dieses Dienstes im Verzeichnis anzeigen, einschließlich der Adressen mit einer anderen Domain. Um die Anzeige der Domains zu entkoppeln, ist es notwendig, für die betreffende Domain einen weiteren [Exchange oder Email Pro](/links/web/emails) Dienst zu bestellen.
>

Im Fenster zum Hinzufügen einer Domain:

- **Eine Domain aus der Liste auswählen**: In der Liste finden Sie die Domainnamen, für die Sie die vollständige Verwaltung (oder zumindest die Verwaltung der DNS-Zone) in Ihrem OVHcloud Kundencenter haben.

- **Einen Domainnamen eingeben, der nicht in Ihrem OVHcloud Kunden-Account verwaltet wird**: Sie müssen in der Lage sein, die Konfiguration der Domain zu ändern, insbesondere ihre DNS-Zone, damit der Dienst konfiguriert werden kann.

Wenn Sie Ihre Auswahl getroffen haben, klicken Sie auf den Button `Weiter`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail .w-600}

Das Fenster zeigt nun Informationen zur Konfiguration an.

- **Wenn Sie in der Liste eine von OVHcloud verwaltete Domain ausgewählt haben**: Sie haben die Wahl zwischen zwei Modussen.
    - **Empfohlene Konfiguration**: Ihre DNS-Zone wird automatisch konfiguriert. Passend, wenn Sie in Ihrer DNS-Zone keine spezifische Konfiguration für MX-, SPF-, DKIM- und SRV-Einträge haben.
    - **Personalisierte Konfiguration**: Wenn Sie bereits ein E-Mail-Angebot für Ihre Domain eingerichtet haben; Sie können die Elemente selbst auswählen.
        - Wenn Sie einen privaten oder externen E-Mail-Dienst von OVHcloud als Ergänzung zu diesem Dienst verwenden möchten, geben Sie den Hostnamen des E-Mail-Servers im Feld `URL des Ziel-E-Mail-Servers` ein.
        - *MX-Eintrag automatisch konfigurieren*: Ermöglicht die automatische Erfassung der Empfangsserver von OVHcloud (gilt für alle E-Mail-Angebote von OVHcloud).
        - *SPF-Eintrag automatisch konfigurieren*: Ermöglicht die automatische Eingabe des SPF-Eintrags, damit die OVHcloud Server Ihre E-Mails übertragen können. Diese Registrierung gilt für alle OVHcloud E-Mail-Angebote.
        - *DKIM-Eintrag automatisch konfigurieren*: Ermöglicht die automatische Eingabe der für die Authentifizierung des Mail-Versands erforderlichen Einträge.
        - *SRV-Eintrag automatisch konfigurieren*: Ermöglicht es E-Mail-Clients, Exchange-Konten automatisch für Ihre Domain zu konfigurieren.

![Add Domain](images/add_domain_exchange_step2-1b.png){.thumbnail .w-600}

- **Wenn Sie eine Domain angegeben haben, die nicht in Ihrem OVHcloud Account verwaltet wird**: Dies bedeutet, dass die Domain, insbesondere ihre DNS-Zone von einem anderen Kunden-Account oder extern verwaltet wird. In diesem Fall muss die Konfiguration unabhängig von der nächsten Auswahl im betreffenden Verwaltungsinterface vorgenommen werden.
    - **Empfohlene Konfiguration**: Geeignet, wenn Sie nur E-Mail-Dienste von OVHcloud verwenden.
    - **Personalisierte Konfiguration**: Wenn Sie einen eigenen oder externen E-Mail-Dienst zusätzlich verwenden möchten, geben Sie den Hostnamen des E-Mail-Servers im Feld `URL des Ziel-E-Mail-Servers` ein.

![Add Domain](images/add_domain_exchange_step2-2.png){.thumbnail .w-600}

Am Ende der Konfiguration werden Sie aufgefordert, die Eingaben zu überprüfen. Klicken Sie auf `Bestätigen`{.action}, um den Domainnamen hinzuzufügen.

### Domainnamen konfigurieren (DNS-Zone)

Nachdem die Domain als assoziierte Domain hinzugefügt wurde, überprüfen Sie in der angezeigten Tabelle, dass die Konfiguration korrekt ist. Ein grünes Feld zeigt an, dass die Domain korrekt konfiguriert ist.

Wenn Einträge in rot angezeigt werden:

- **Wenn Sie beim Hinzufügen der Domain die automatische Konfiguration gewählt haben**: Es kann einige Minuten dauern, bis die Anzeige im OVHcloud Kundencenter aktualisiert ist.

- **Wenn Sie einen Domainnamen angegeben haben, der nicht in Ihrem OVHcloud Kunden-Account verwaltet wird**:
    - Klicken Sie auf `MX`, `SRV`, `SPF` oder `DKIM`, um Details anzuzeigen. Verwendet diese Domain nicht die DNS-Server von OVHcloud, nehmen Sie die Änderungen über das Verwaltungsinterface Ihrer Domain vor.
    - Im Fall eines rot angezeigten `CNAME`, lesen Sie unsere Anleitung zur [Erstellung eines CNAME-Eintrags](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname).

![exchange](images/add_domain_exchange_step4.png){.thumbnail .w-600}

> [!primary]
>
> Die Änderung der Konfiguration einer Domain erfordert eine Propagationszeit von 4 bis 24 Stunden, bis sie voll wirksam ist.
>

Um zu überprüfen, dass die Konfiguration einer Domain korrekt ist, beachten Sie die Tabelle `Assoziierte Domains`{.action} Ihres Dienstes. Wenn der betroffene Eintrag nun grün angezeigt wird, ist die Domain korrekt konfiguriert. Andernfalls ist die Propagierung möglicherweise noch nicht abgeschlossen.

### Modus einer assoziierten Domain ändern

Sie können den Modus einer assoziierten Domain ändern. Dazu ist es notwendig, den Unterschied zwischen dem autoritativen und dem nicht-autoritativen Modus zu verstehen.

> [!primary]
>
> **Autoritativ / nicht-autoritativ**
>
> - Wenn Sie den **autoritativen Modus** Ihres E-Mail-Dienstes (*Server A*) auswählen, werden alle E-Mail-Adressen Ihrer Domain auf diesem Dienst gehostet.<br>Wenn Sie beispielsweise eine E-Mail an die Adresse *mary.johnson@mydomain.ovh* senden, sendet *Server A* eine Fehlermeldung an den Absender, da diese Adresse auf dem *Server A* nicht vorhanden ist.<br><br>
>
> - Der **nicht-autoritative** Modus Ihres E-Mail-Dienstes (*Server A*) erlaubt die Aufteilung der E-Mail-Adressen Ihres Domainnamens zwischen zwei E-Mail-Diensten (*Server A*, *Server B*).<br>Wenn Sie zum Beispiel eine E-Mail an die Adresse *mary.johnson@mydomain.ovh* senden, leitet *Server A* die E-Mail zur Zustellung an "*Server B*" weiter.<br>
>
> ![Authoritative](images/add_domain_exchange_authoritative.png){.thumbnail .w-600}

1. Klicken Sie auf den Tab `Assoziierte Domains`{.action}.
1. Klicken Sie auf den Button `...`{.action} in der Zeile der betreffenden Domain.
1. Klicken Sie auf `Konfiguration`{.action}.
1. Wählen Sie den gewünschten Modus.

> [!warning]
>
> Wenn Sie beim Hinzufügen Ihres Domainnamens zu Ihrer E-Mail-Dienst die Nachricht "**autoritative domain detected**" erhalten, bedeutet dies, dass dieser Domainname von einem anderen E-Mail-Dienst im **autoritativen** Modus deklariert ist. Sie müssen auf beiden Diensten in den **nicht-autoritativen** Modus wechseln, damit sie nebeneinander funktionieren können.

### Accounts konfigurieren und verwenden

Nachdem Sie Domainnamen zu Ihrem Dienst hinzugefügt haben, können Sie Ihre E-Mail-Accounts mit diesen konfigurieren. Gehen Sie hierzu in den Tab `E-Mail-Accounts`{.action}. Bei Bedarf können Sie weitere Accounts über den Button `Aktion`{.action} / `Accounts bestellen`{.action} oder `Einen Account hinzufügen`{.action} bestellen.

Zur Erinnerung: Alle für einen Dienst erstellten Adressen können im Adressbuch alle Adressen dieses Dienstes einsehen, auch die Adressen mit einem anderen Domainnamen.

Sobald die Accounts vollständig eingerichtet sind, können Sie mit deren Verwendung beginnen. Hierzu stellt Ihnen OVHcloud einen Zugang über **Webmail** zur Verfügung, auf den Sie [hier](/links/web/email) zugreifen können. Um Ihren Account mit einer E-Mail-Software zu verwenden, muss diese mit dem Dienst kompatibel sein.

Wenn Sie E-Mail-Accounts auf einem E-Mail-Client oder einem Peripheriegerät wie einem Smartphone oder Tablet einrichten möchten oder Hilfe bei den Funktionen Ihres E-Mail-Dienstes benötigen, lesen Sie unsere Dokumentation für [Exchange](/links/web/emails) oder [E-Mail Pro](/links/web/email-pro).

Sie können Outlook-Lizenzen im [OVHcloud Kundencenter](/links/manager) und Office 365-Lizenzen auf der Seite zu [Microsoft 365](/links/web/ms365) erwerben. Wir empfehlen Ihnen eine dieser Lösungen, wenn Sie Outlook E-Mail-Software oder weitere Software der Office Suite nutzen möchten.

### Einen Domainnamen von einem Dienst löschen

Wenn Sie einen Domainnamen entfernen möchten, der mit Ihrem Exchange oder E-Mail Pro Dienst verbunden ist, müssen Sie sicherstellen, dass dieser nicht mit E-Mail-Accounts, Aliassen, Ressourcen, geteilten Accounts (nur bei Exchange), Gruppen, externen Kontakten oder Fußzeilen verbunden ist, die noch konfiguriert sind. In diesem Fall müssen **diese Accounts mit einem anderen Domainnamen** des Dienstes verbunden oder **gelöscht** werden.

> [!warning]
>
> Bevor Sie E-Mail-Accounts löschen, stellen Sie sicher, dass diese nicht verwendet werden. Möglicherweise ist eine Sicherung dieser Accounts erforderlich. Lesen Sie bei Bedarf die Anleitung [E-Mail-Adresse manuell migrieren](/pages/web_cloud/email_and_collaborative_solutions/migrating/manual_email_migration), in der beschrieben wird, wie Sie die Daten eines Accounts über Ihr Kundencenter oder ein E-Mail-Programm exportieren.

Gehen Sie auf den Tab `Assoziierte Domains`{.action}. In der Tabelle zeigt die Spalte `Accounts` die Anzahl der Accounts an, die mit einem Domainnamen verbunden sind.

Wenn mit dem Domainnamen, den Sie abtrennen möchten, E-Mail-Accounts verbunden sind, haben Sie 2 Möglichkeiten:

**Die Accounts mit einem anderen Domainnamen verbinden**:

1. Gehen Sie in den Tab `E-Mail-Accounts`{.action}.
1. Klicken Sie rechts neben den zu ändernden Konten auf die Schaltfläche `...`{.action}.
1. Klicken Sie auf `Bearbeiten`{.action}.

![exchange](images/add_domain_exchange_step8.png){.thumbnail .w-600}

4\. Im Bearbeitungsfenster können Sie den mit dem Account verbundenen Domainnamen über das Dropdown-Menü ändern.

![exchange](images/add_domain_exchange_step9.png){.thumbnail .w-600}

**Accounts Ihres Dienstes löschen**:

1. Gehen Sie in den Tab `E-Mail-Konten`{.action}.
1. Klicken Sie rechts neben dem zu löschenden Account auf `...`{.action}.
1. Klicken Sie auf `Account zurücksetzen`{.action} oder `Zurücksetzen`{.action}.

![exchange](images/add_domain_exchange_step7.png){.thumbnail .w-600}

Sobald die Accounts einem anderen Domainnamen zugewiesen wurden oder nachdem sie zurückgesetzt wurden, kann der Domainname gelöscht werden.

Klicken Sie im Tab `Assoziierte Domains`{.action} Ihrer Dienst auf den Button `...`{.action} rechts neben der betreffenden Domain und dann auf `Diese Domain löschen`{.action}.

![exchange](images/add_domain_exchange_step10.png){.thumbnail .w-600}

## Weiterführende Informationen

[CNAME-Eintrag zu einer assoziierten Domain hinzufügen](/pages/web_cloud/email_and_collaborative_solutions/microsoft_exchange/exchange_dns_cname)

[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](/links/partner).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](/links/support).

Treten Sie unserer [User Community](/links/community) bei.
