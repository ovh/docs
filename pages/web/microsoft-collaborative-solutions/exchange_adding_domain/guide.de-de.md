---
title: "Domainnamen zu Ihrem Exchange Dienst hinzufügen"
slug: domain-zu-exchange-hinzufugen
excerpt: "Erfahren Sie hier, wie Sie einen Domainnamen zu Ihrer Exchange Lösung hinzufügen"
section: 'Erste Schritte mit Exchange'
order: 04
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 07.10.2022**

## Ziel

Um die in Ihrer Exchange Lösung enthaltenen Accounts nutzen zu können, benötigen Sie einen Domainnamen. Es ist auch möglich, mehrere Domainnamen zu einer Exchange oder E-Mail Pro Dienstleistung hinzuzufügen.

**Diese Anleitung erklärt, wie Sie einen Domainnamen zu Ihrer Exchange oder E-Mail Pro Plattform hinzufügen.**

## Voraussetzungen

- Sie verfügen über einen [Exchange Dienst](https://www.ovhcloud.com/de/emails/hosted-exchange/) oder [E-Mail Pro Dienst](https://www.ovhcloud.com/de/emails/email-pro/).
- Sie verfügen über einen oder mehrere Domainnamen.
- Sie haben administrativen Zugang zur Verwaltung der Domainkonfiguration (zum [Bearbeiten der DNS Zone](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/)).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

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
> Alle auf Ihrem E-Mail-Dienst erstellten Adressen können alle Adressen dieses Dienstes im ihrem Verzeichnis sehen, auch solche mit einer anderen Domain. Um die Anzeige der Domains zu trennen, müssen Sie einen neuen [Exchange oder E-Mail Pro Dienst](https://www.ovhcloud.com/de/emails/) für die betreffende(n) Domain(s) bestellen.
>

![Add Domain](images/add_domain_exchange_step1.png){.thumbnail}

Im neuen Fenster zum Hinzufügen der Domain haben Sie folgende Auswahlmöglichkeiten:

- **Eine Domain in der Liste auswählen**: Es werden nur Domainnamen angezeigt, die die OVHcloud Konfiguration verwenden und in Ihrem Kunden-Account verwaltbar sind.

- **Eine Domain hinzufügen, die nicht in Ihrem OVHcloud Account verwaltet wird**: Die Konfiguration der Domain (die zugehörige DNS-Zone) muss angepasst werden, damit der Dienst korrekt funktioniert. In diesem Fall muss ein CNAME DNS-Eintrag hinzugefügt werden.

Nachdem Sie Ihre Auswahl vorgenommen haben, klicken Sie auf `Weiter`{.action}.

![Add Domain](images/add_domain_exchange_step2.png){.thumbnail}

Der Assistent zeigt nun Informationen zur Konfiguration der gewünschten Nutzungsmethode an.

- **Wenn Sie eine nicht von OVHcloud verwaltete Domain angegeben haben**: Der nicht-autoritative Modus wird automatisch ausgewählt.

- **Wenn Sie in der Liste eine von OVHcloud verwaltete Domain ausgewählt haben**: Sie können einen Modus auswählen.

|Modus|Beschreibung|
|---|---|
|Autoritativ|Empfiehlt sich, wenn Sie ausschließlich Ihre Exchange oder E-Mail Pro Lösung mit Ihrer Domain verwenden. Erlaubt nicht die Verwendung einer anderen E-Mail-Lösung mit Ihrem Dienst.|
|Nicht-autoritativ|Empfiehlt sich, wenn Sie die Domain Ihrer Exchange oder E-Mail Pro Lösung simultan mit einer anderen E-Mail-Lösung verwenden. Geben Sie dann Informationen zum Server Ihrer externen E-Mail-Lösung an.|

> [!primary]
>
> Die Wahl des Modus ist nicht endgültig und kann im Nachhinein über das OVHcloud Kundencenter geändert werden.
>

Klicken Sie auf `Weiter`{.action}, um die Domain hinzuzufügen.

![Add Domain](images/add_domain_exchange_step3.png){.thumbnail}

**Wenn Sie in der Liste eine von OVHcloud verwaltete Domain ausgewählt haben**, kann deren Konfiguration automatisch vorgenommen werden. Wählen Sie hierzu die entsprechende Option und klicken Sie dann auf `Weiter`{.action}, um mit dem Hinzufügen der Domain fortzufahren.

**Wenn Sie eine Domain angegeben haben, die nicht von OVHcloud verwaltet wird**, muss die Konfiguration im nächsten Schritt durchgeführt werden.

![emailpro](images/add_domain_exchange_step4.png){.thumbnail}

Am Ende der Konfiguration werden Sie aufgefordert, die angezeigten Informationen zu überprüfen und auf `Bestätigen`{.action} zu klicken, um das Hinzufügen der Domain zu veranlassen. Wiederholen Sie diesen Schritt so oft wie nötig, wenn Sie weitere Domains hinzuzufügen möchten.

### Die Domain konfigurieren (DNS)

Sobald die Domain als assoziierte Domain hinzugefügt ist, können Sie in der angezeigten Tabelle prüfen, ob die Konfiguration korrekt ist. Ein grünes Feld zeigt an, dass die Domain korrekt konfiguriert ist. Falls das Diagnosefeld rot ist, können weitere Schritte notwendig sein:

- **Wenn Sie beim Hinzufügen der Domain eine automatische Konfiguration gewählt haben**: Warten Sie einige Minuten, bis die Änderungen im OVHcloud Kundencenter übernommen sind.

- **Wenn Sie eine nicht von OVHcloud verwaltete Domain angegeben haben**: Klicken Sie auf das rote Diagnosefeld, um die notwendigen Änderungen anzuzeigen. Verwendet die Domain nicht die OVHcloud Konfiguration (die DNS-Server von OVHcloud), nehmen Sie die notwendigen Änderungen in dem Verwaltungsinterface vor, dass Sie für die Konfiguration Ihrer Domain verwenden. Zur Bearbeitung eines CNAME-Eintrags finden Sie weitere Informationen in [dieser Dokumentation](https://docs.ovh.com/de/microsoft-collaborative-solutions/exchange_20132016_einen_cname_eintrag_hinzufugen/){.external}.

> [!primary]
>
> Die Änderung der Konfiguration einer Domain erfordert eine Propagationszeit von 4 bis maximal 24 Stunden, bis sie voll wirksam ist.
>

Um zu überprüfen, ob die Konfiguration einer Domain korrekt ist, gehen Sie zurück zum Tab `Assoziierte Domains`{.action} Ihres Dienstes. Wird ein grünes Feld angezeigt, ist die Domain korrekt konfiguriert. Ist das nicht der Fall, kann es sein, dass die Propagationszeit noch nicht abgelaufen ist.

![emailpro](images/add_domain_exchange_step5.png){.thumbnail}

### Accounts konfigurieren und verwenden

Nun, da Sie die gewünschten Domains zu Ihrem Exchange Dienst hinzugefügt haben, können Sie Ihre Exchange Accounts mit diesen konfigurieren. Gehen Sie hierzu in den Tab `E-Mail-Accounts`{.action}. Nötigenfalls können Sie weitere Accounts über den Button `Accounts bestellen`{.action} oder über `Einen Account hinzufügen`{.action} ordern.

Zur Erinnerung: Alle für Ihren Dienst erstellten Adressen können alle Adressen dieses Dienstes im ihrem Verzeichnis anzeigen, auch solche mit einer anderen Domain.

Nachdem Sie Ihre Accounts fertig eingerichtet haben, können Sie diese nun verwenden. OVHcloud stellt Ihnen hierfür **Webmail** zur Verfügung, das über die Adresse <https://www.ovh.com/de/mail/> erreichbar ist. Wenn Sie einen Drittanbieter-Client für Ihre E-Mail-Accounts verwenden, stellen Sie sicher, dass die Software mit dem Dienst kompatibel ist.

Falls Sie Hilfe bei der Einrichtung Ihres E-Mail-Accounts in einem E-Mail-Client oder auf einem Gerät (Smartphone, Tablet) benötigen oder Fragen zu den Funktionen Ihres E-Mail-Dienstes haben, lesen Sie unsere Anleitungen zu [Exchange](https://docs.ovh.com/de/microsoft-collaborative-solutions/) oder [E-Mail Pro](https://docs.ovh.com/de/emails-pro/).

Sie können Outlook Lizenzen über Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} und Office 365 Lizenzen auf der Webseite <https://www.ovhcloud.com/de/collaborative-tools/microsoft-365/> erwerben. Wir empfehlen Ihnen, eine dieser Lösungen zu verwenden, falls Sie den Outlook E-Mail-Client oder andere Software der MS Office Suite nutzen möchten.

### Einen Domainnamen von einer Plattform löschen

Wenn Sie eine Domain aus Ihrem Exchange oder E-Mail Pro Dienst entfernen möchten, überprüfen Sie zuerst, dass sie nicht mit E-Mail-Accounts, Aliasen, Ressourcen, Shared-Accounts (nur für Exchange), Gruppen, externen Kontakten oder Footern verknüpft ist, die noch konfiguriert sind. Falls dies zutrifft, müssen diese Accounts **an einen anderen Domainnamen auf Ihres Dienstes gebunden** oder **gelöscht** werden.

> [!warning]
>
> Bevor Sie E-Mail-Accounts löschen, überprüfen Sie, dass diese nicht verwendet werden. Eine Sicherung dieser Accounts kann notwendig sein. Wenn nötig lesen Sie die Anleitung ["Ihre E-Mail-Adresse manuell migrieren"](https://docs.ovh.com/de/emails/email-adressen-manuell-migrieren/), in der beschrieben wird, wie Sie Daten eines Accounts über Ihr Kundencenter oder ein E-Mail-Programm exportieren.

Gehen Sie zum Tab `Assoziierte Domains`{.action} Ihres Dienstes. In der Tabelle gibt die `Spalte` Accounts die Anzahl der Accounts an, die Ihren Domainnamen zugewiesen sind.

![emailpro](images/add_domain_exchange_step6.png){.thumbnail}

Wenn E-Mail-Accounts die Domain verwenden, die Sie abtrennen möchten, haben Sie 2 Möglichkeiten:

- **Accounts mit einer anderen Domain verbinden**: Gehen Sie in den Tab `E-Mail Accounts`{.action}. Klicken Sie rechts neben den zu ändernden Accounts auf den Button `...`{.action} und dann `Ändern`{.action}.
    ![emailpro](images/add_domain_exchange_step8.png){.thumbnail}
    Im Bearbeitungsfenster können Sie die mit dem Account verbundene Domain über das Drop-down-Menü ändern.
    ![emailpro](images/add_domain_exchange_step9.png){.thumbnail}

- **Konten Ihres Dienstes löschen**: Gehen Sie in den Tab `E-Mail Accounts`{.action}. Klicken Sie rechts neben dem zu löschenden Account auf den Button `...`{.action} und dann `Diesen Account zurücksetzen`{.action} oder `Zurücksetzen`{.action}.
    ![emailpro](images/add_domain_exchange_step7.png){.thumbnail}

Sobald die Accounts einer anderen Domain zugewiesen wurden oder die Zurücksetzung abgeschlossen ist, kann die Domain gelöscht werden. 

Klicken Sie im Tab `Assoziierte Domains`{.action} Ihres Dienstes auf `...`{.action} rechts neben der betreffenden Domain und dann auf `Domain löschen`{.action}.

![emailpro](images/add_domain_exchange_step10.png){.thumbnail}

## Weiterführende Informationen

[CNAME-Eintrag zu einer assoziierten Domain hinzufügen](../exchange_20132016_einen_cname_eintrag_hinzufugen/)

[OVHcloud DNS-Zone bearbeiten](https://docs.ovh.com/de/domains/webhosting_bearbeiten_der_dns_zone/)

Kontaktieren Sie für spezialisierte Dienstleistungen (SEO, Web-Entwicklung etc.) die [OVHcloud Partner](https://partner.ovhcloud.com/de/directory/).

Wenn Sie Hilfe bei der Nutzung und Konfiguration Ihrer OVHcloud Lösungen benötigen, beachten Sie unsere [Support-Angebote](https://www.ovhcloud.com/de/support-levels/).

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
