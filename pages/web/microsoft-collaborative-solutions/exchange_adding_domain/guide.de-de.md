---
title: 'Eine Domain zu Ihrem Exchange Dienst hinzufügen'
slug: domain-zu-exchange-hinzufugen
excerpt: 'So fügen Sie eine Domain zu Ihrer Exchange Lösung hinzu'
section: 'Erste Schritte mit Exchange'
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Stand 09.09.2022**

## Ziel

Um die in Ihrem Exchange Angebot enthaltenen Accounts nutzen zu können, benötigen Sie eine entsprechende Domain. Es ist auch möglich, mehrere Domainnamen zu einer Exchange oder E-Mail Pro Dienstleistung hinzuzufügen.

**Hier erfahren Sie, wie Sie eine Domain zu Ihrer Exchange oder E-Mail Pro Plattform hinzufügen.**

## Voraussetzungen

- Sie verfügen über eine [Exchange](https://www.ovhcloud.com/de/emails/hosted-exchange/) oder [E-Mail Pro](https://www.ovhcloud.com/de/emails/email-pro/) Lösung.
- Sie besitzen eine oder mehrere Domains.
- Sie können die Konfiguration Ihrer Domain ändern ([DNS Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/)).
- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) angemeldet.

## Beschreibung

### Zugang zur Verwaltung Ihrer Dienstleistung

Sobald Ihr Exchange oder E-Mail Pro Dienst eingerichtet und verfügbar ist, können Sie ihn über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) verwalten.

Im Bereich `Web Cloud`{.action}:

- **Exchange**: Klicken Sie auf `Microsoft`{.action} und dann auf `Exchange`{.action}. 
- **E-Mail Pro**: Klicken Sie auf `E-Mail Pro`{.action}.

Wählen Sie anschließend den Namen des betreffenden Dienstes aus.

### Eine Domain hinzufügen

Um eine Domain hinzuzufügen, klicken Sie auf den Tab `Assoziierte Domains`{.action}. Die Tabelle zeigt die Domains an, die Ihnen Ihre Dienstleistung derzeit zugewiesen sind. Um eine neue Domain hinzuzufügen, klicken Sie auf den Button `Eine Domain hinzufügen`{.action}.

> [!warning]
>
> Alle auf Ihrem E-Mail-Dienst erstellten Adressen können alle Adressen dieses Dienstes im Verzeichnis anzeigen, auch solche mit einer anderen Domain. Um die Anzeige der Domains zu trennen, müssen Sie eine neue [Exchange oder E-Mail Pro](https://www.ovhcloud.com/de/emails/) Lösung für die betreffende(n) Domain(s) bestellen.
>

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail}

Im angezeigten Fenster zum Hinzufügen der Domain haben Sie folgende Auswahlmöglichkeiten:

- **Eine Domain aus der Liste auswählen**: Es werden nur Domainnamen angezeigt, die die OVHcloud-Konfiguration verwenden und als Kontakte in Ihrer Kundenkennung angegeben sind.

- **Eine Domain angeben, die nicht von Ihrem OVHcloud Account verwaltet wird**: Sie müssen die Konfiguration der Domain (die zugehörige DNS-Zone) ändern können, damit der Dienst korrekt funktioniert. In diesem Fall muss ein DNS CNAME Eintrag hinzugefügt werden.

Nachdem Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail}

Das Fenster zeigt dann die Informationen zur Konfiguration verschiedener Modi an.

- **Wenn Sie eine nicht von OVHcloud verwaltete Domain angegeben haben**: der nicht-autoritative Modus wird standardmäßig konfiguriert.

- **Wenn Sie in der Liste eine von OVHcloud verwaltete Domain ausgewählt haben**: Sie müssen zwischen zwei Modi wählen.

|Modus|Beschreibung|
|---|---|
|Autoritativ|Empfiehlt sich, wenn Sie ausschließlich Ihre Exchange oder E-Mail Pro Lösung mit Ihrer Domain verwenden. Erlaubt nicht die Verwendung einer anderen E-Mail-Lösung mit Ihrem Dienst.|
|Nicht-autoritativ|Empfiehlt sich, wenn Sie mit Ihrer Domain die Exchange oder E-Mail Pro Lösung zusammen mit einer anderen E-Mail-Lösung verwenden. Geben Sie hierzu den Server Ihrer anderen E-Mail-Lösung an.|

> [!primary]
>
> Die Wahl des Modus ist nicht endgültig und kann im Nachhinein über das OVHcloud Kundencenter geändert werden.
>

Klicken Sie auf `Weiter`{.action}, um die Domain hinzuzufügen.

![Add Domain](images/add_domain_exchange_step3.png){.thumbnail}

**Wenn Sie in der Liste eine von OVHcloud verwaltete Domain ausgewählt** haben, kann deren Konfiguration automatisch vorgenommen werden. Wählen Sie hierzu das entsprechende Kästchen und klicken Sie dann auf `Weiter`{.action}, um mit dem Hinzufügen der Domain fortzufahren.

**Wenn Sie eine Domain angegeben haben, die nicht von OVHcloud** verwaltet wird, muss die Konfiguration im nächsten Schritt durchgeführt werden.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

Am Ende der Konfiguration werden Sie aufgefordert, die angezeigten Informationen zu überprüfen und auf `Bestätigen`{.action} zu klicken, um das Hinzufügen der Domain zu veranlassen. Wiederholen Sie diesen Schritt so oft wie nötig, wenn Sie weitere Domains hinzuzufügen möchten.

### Die Domain (DNS) konfigurieren

Sobald die Domain als assoziierte Domain hinzugefügt ist, überprüfen Sie bitte in der angezeigten Tabelle, dass die Konfiguration korrekt ist. Ein grünes Kästchen zeigt an, dass die Domain korrekt konfiguriert ist. Falls das Kästchen rot ist:

- **wenn Sie beim Hinzufügen der Domain eine automatische Konfiguration gewählt haben**: Es kann einige Augenblicke dauern, bis die Anzeige im OVHcloud Kundencenter aktualisiert wird.
- **wenn Sie eine nicht von OVHcloud verwaltete Domain angegeben haben**: Klicken Sie auf das rote Kästchen, um die notwendigen Änderungen anzuzeigen. Verwendet die Domain nicht die OVH Konfiguration (d. h. die DNS-Server von OVH), nehmen Sie bitte die notwendigen Änderungen in dem Verwaltungsinterface vor, dass Sie für die Konfiguration Ihrer Domain verwenden. Zur Bearbeitung eines CNAME-Eintrags finden Sie weitere Informationen in der Dokumentation [CNAME-Eintrag zu einer assoziierten Domain hinzufügen](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_einen_cname_eintrag_hinzufugen/){.external}.

> [!primary]
>
> Die Änderung der Konfiguration einer Domain erfordert eine Propagationszeit von 4 bis maximal 24 Stunden, bis sie voll wirksam ist.
>

Um zu überprüfen, ob die Konfiguration einer Domain korrekt ist, gehen Sie zurück in die Tabelle `Assoziierte Domains`{.action} Ihres Dienstes. Wird ein grünes Kästchen angezeigt, ist die Domain korrekt konfiguriert. Ist das nicht der Fall, kann es sein, dass die Propagationszeit noch nicht abgelaufen ist.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Accounts konfigurieren und verwenden

Nun, da Sie die gewünschten Domains zu Ihrem Exchange Dienst hinzugefügt haben, können Sie Ihre Exchange Accounts mit diesen konfigurieren. Gehen Sie hierzu in den Tab `E-Mail-Accounts`{.action}. Wenn nötig können Sie weitere Accounts über den Button `Accounts bestellen`{.action} oder über `Einen Account hinzufügen`{.action} bestellen.

Zur Erinnerung: Alle für Ihren Dienst erstellten Adressen können alle Adressen dieses Dienstes im Verzeichnis anzeigen, auch solche mit einer anderen Domain.

Nachdem Sie Ihre Accounts fertig eingerichtet haben, können Sie diese nun verwenden. OVHcloud stellt Ihnen hierfür das **Webmail** zur Verfügung, das über die Adresse erreichbar <https://www.ovh.com/de/mail/>ist. Stellen Sie sicher, dass Ihre Adresse für eine optimale Nutzung in einer Software mit der Dienstleistung kompatibel ist. 

Wenn Sie Ihre E-Mail-Adresse auf einem E-Mail-Client oder einem Gerät wie einem Smartphone oder Tablet einrichten möchten oder Hilfe zu den Funktionen Ihres E-Mail-Dienstes erhalten möchten, lesen Sie unsere Anleitungen zu den Seiten [Exchange](https://docs.ovh.com/de/microsoft-collaborative-solutions/) und [E-Mail Pro](https://docs.ovh.com/de/emails-pro/).

Sie können Outlook Lizenzen über Ihr [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und Office 365 Lizenzen auf der Webseite <https://www.ovhcloud.com/de/collaborative-tools/microsoft-365/> erwerben. Wir empfehlen Ihnen, eine dieser Lösungen zu verwenden, wenn Sie den Outlook E-Mail-Client oder weitere Software der Office Suite nutzen möchten.

### Einen Domainnamen von einer Plattform löschen

Wenn Sie eine Domain aus Ihrem Exchange oder E-Mail Pro Dienst entfernen möchten, müssen Sie überprüfen, dass diese nicht mit E-Mail-, Alias-, Ressourcen-, Shared-Accounts (nur auf Exchange), Gruppen, externen Kontakten oder Seitenfüßen verbunden ist, die noch konfiguriert sind. In diesem Fall müssen diese Accounts **an einen anderen Domainnamen auf Ihrer Plattform** gebunden oder gelöscht **werden**.

> [!warning]
>
> Bevor Sie E-Mail-Accounts löschen, überprüfen Sie, dass diese nicht verwendet werden. Eine Sicherung dieser Accounts kann notwendig sein. Wenn nötig lesen Sie die Anleitung [Ihre E-Mail-Adresse manuell migrieren](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/), in der beschrieben wird, wie Sie Daten eines Accounts über Ihr Kundencenter oder ein E-Mail-Programm exportieren.

Gehen Sie zur Registerkarte `Assoziierte Domains`{.action} Ihrer Plattform. In der Tabelle gibt die `Spalte` Accounts die Anzahl der Accounts an, die Ihren Domainnamen zugewiesen sind.

![emailpro](images/add_domain_exchange_step6.png){.thumbnail}

Wenn E-Mail-Accounts mit der Domain verbunden sind, die Sie abtrennen möchten, haben Sie 2 Möglichkeiten:

- **Accounts mit einer anderen Domain verbinden**: Gehen Sie in den Tab `E-Mail Accounts`{.action}. Klicken Sie rechts neben den zu ändernden Accounts auf den Button `...`{.action} und dann `Ändern`{.action}.
    ![emailpro](images/add_domain_exchange_step8.png){.thumbnail}
    Im Änderungsfenster können Sie die mit dem Account verbundene Domain über das Drop-down-Menü ändern.
    ![emailpro](images/add_domain_exchange_step9.png){.thumbnail}

- **Konten auf Ihrer Plattform löschen**: Gehen Sie in den Tab `E-Mail Accounts`{.action}. Klicken Sie rechts neben dem zu löschenden Account auf den Button `...`{.action} und dann `Diesen Account zurücksetzen`{.action} oder `zurücksetzen`{.action}
    ![emailpro](images/add_domain_exchange_step7.png){.thumbnail}

Wenn die Accounts einer anderen Domain zugewiesen oder zurückgesetzt wurden, kann die Domain gelöscht werden. 

Klicken Sie im Tab `Assoziierte Domains`{.action} Ihrer Plattform auf `...`{.action} rechts neben der betreffenden Domain und dann auf `Domain löschen`{.action}.

![emailpro](images/add_domain_exchange_step10.png){.thumbnail}

## Weiterführende Informationen

[CNAME-Eintrag zu einer assoziierten Domain hinzufügen](../exchange_20132016_einen_cname_eintrag_hinzufugen/)

[OVHcloud DNS-Zone bearbeiten](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/)

Für spezialisierte Dienstleistungen (Referenzierung, Entwicklung etc.) kontaktieren Sie die [OVHcloud Partner](https://partner.ovhcloud.com/de/).
Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, empfehlen wir Ihnen unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.