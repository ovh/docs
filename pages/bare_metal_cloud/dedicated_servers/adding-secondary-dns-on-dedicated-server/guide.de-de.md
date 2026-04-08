---
title: "OVHcloud Secondary DNS auf einem Dedicated Server"
excerpt: "Fügen Sie einen sekundären DNS-Server für Ihren Domainnamen auf einem OVHcloud Dedicated Server hinzu, um die DNS-Resilienz zu verbessern."
updated: 2021-01-08
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Wenn Sie Ihren dedizierten Server als DNS-Server konfigurieren, können Sie den sekundären OVHcloud DNS verwenden, um eine sekundäre Zone zu hosten. So bleibt das DNS Ihres Domainnamens auch dann verfügbar, wenn der primäre DNS-Server nicht mehr antwortet.

**Diese Anleitung erklärt, wie Sie Ihren Domainnamen zum OVHcloud Kundencenter hinzufügen, um einen sekundären DNS-Server zu verwenden.**

## Voraussetzungen

- Sie verfügen über einen [Dedicated Server](/links/bare-metal/bare-metal) in Ihrem Kunden-Account.
- Sie haben adminstrativen Zugriff auf einen [Domainnamen](/links/web/domains).

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Dedicated Server](/links/control-panel/baremetal-dedicated-servers)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Dedicated Server`{.action} > Wählen Sie Ihren Server aus

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

> [!warning]
>
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie die alleinige Verantwortung tragen. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
> 
> Wir stellen Ihnen diese Anleitung zur Verfügung, um Ihnen bei der Bewältigung alltäglicher Verwaltungsaufgaben zu helfen. Dennoch empfehlen wir Ihnen, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren, wenn Sie Schwierigkeiten oder Zweifel hinsichtlich der Verwaltung, Nutzung oder Implementierung der Dienste auf einem Server haben.
> 

## In der praktischen Anwendung

### Einen Domainnamen hinzufügen <a name="addingdomain"></a>

Wechseln Sie zum Tab `Sekundärer DNS`{.action} und klicken Sie auf den Button `Domain hinzufügen`{.action}.

![Tab "Sekundärer DNS" mit Schaltfläche Domain hinzufügen](images/cp-01.png){.thumbnail}

Geben Sie Ihre IP-Adresse und den hinzuzufügenden Domainnamen ein und klicken Sie dann auf `Weiter`{.action}.

![Formular Domain hinzufügen mit IP-Adresse und Domainname](images/cp-02.png){.thumbnail}

Wenn Sie in diesem Schritt auf `Weiter`{.action} klicken, wird die Prüfung der Domainauthorisierung angestoßen. Wenn Sie diese Bedingung noch nicht erfüllt haben, indem Sie einen TXT-Eintrag zu Ihrer DNS-Zone hinzufügen, folgen Sie zuerst den [Anweisungen unten in dieser Anleitung](#verifyingdomain). Klicken Sie andernfalls auf `Weiter`{.action}.

![Domainverifizierung mit TXT-Record-Anweisungen](images/cp-03.png){.thumbnail}

Nachdem Sie im letzten Fenster auf `Hinzufügen`{.action} geklickt haben, wird der Domainname zum sekundären DNS-Server von OVHcloud hinzugefügt.

Die hinzugefügten Domainnamen werden in diesem Tab aufgeführt und können gelöscht werden, indem Sie auf den `...`{.action} Button klicken. Der Name des sekundären DNS-Servers wird neben dem Domainnamen angezeigt.

![Liste der sekundären DNS-Domains mit Löschoption](images/cp-05.png){.thumbnail}

> [!primary]
>
> Weitere für die Konfiguration Ihres eigenen DNS für Ihren Domainnamen erforderliche Aktionen sind üblicherweise:
>
> - Konfiguration eines DNS-Dienstes (z.B. *BIND*)
> - Konfiguration von GLUE-Einträgen
> - Genehmigung von Zonentransfers
>
> Konsultieren Sie die entsprechenden Anleitungen und sonstige externe Wissensressourcen, wenn Sie zusätzliche Informationen zu diesen administrativen Aufgaben benötigen.

### Bestätigung der Domainauthorisierung <a name="verifyingdomain"></a>

Es ist erforderlich, Ihre Berechtigung zum Verwalten des Domainnamens zu überprüfen, bevor sie zum sekundären DNS von OVHcloud hinzugefügt werden kann. Dies erfolgt über eine automatisierte DNS-Abfrage auf die Subdomain *ownercheck.ihrdomainname*. Eine individuelle Zeichenkette wird hierzu generiert und in Ihrem OVHcloud Kundencenter angezeigt.

- Wenn der Domainname zu diesem Zeitpunkt von einem externen Registrar verwaltet wird **oder** externe DNS-Server verwendet, loggen Sie sich in die Verwaltungsoberfläche Ihres DNS-Anbieters ein und fügen Sie Ihrer Zone einen TXT-Eintrag mit der Subdomain "ownercheck" und dem Wert, den Sie in Schritt 2 des Dialogs ["Domain hinzufügen"](#addingdomain) erhalten haben, hinzu.

- Wenn der Domainname von OVHcloud als Registrar verwaltet wird **und** OVHcloud DNS-Server verwendet, klicken Sie in Schritt 2 des Dialogs zunächst auf `Abbrechen`{.action}. Folgen Sie anschließend den Anweisungen in [dieser Anleitung](/pages/web_cloud/domains/dns_zone_edit), um den TXT-Eintrag über Ihr [OVHcloud Kundencenter](/links/manager) hinzuzufügen.

![Dialog zur Inhaberverifizierung mit TXT-Record-Wert](images/cp-04.png){.thumbnail}

Nachdem Sie den TXT-Eintrag erfolgreich zur DNS-Zone des Domainnamens hinzugefügt haben, wiederholen Sie die [oben erklärten Schritte](#addingdomain) und schließen Sie den Vorgang ab.

## Weiterführende Informationen

[OVHcloud DNS-Zone bearbeiten](/pages/web_cloud/domains/dns_zone_edit)

- [Erste Schritte mit einem Dedicated Server](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server)

- [IPv6 auf einem Dedicated Server konfigurieren](/pages/bare_metal_cloud/dedicated_servers/network_ipv6)

Treten Sie unserer [User Community](/links/community) bei.
