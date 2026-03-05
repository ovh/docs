---
title: "Eine Public Cloud Instanz erstellen und darauf zugreifen"
excerpt: "Erfahren Sie hier, wie Sie Public Cloud Instanzen in Ihrem OVHcloud Kundencenter konfigurieren, sowie die ersten Schritte mit Instanzen"
updated: 2026-02-24
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Ziel

Public Cloud Instanzen sind einfach einzurichten und zu verwalten. Als Teil des OVHcloud Public Cloud Ökosystems bieten Instanzen jedoch zahlreiche Konfigurationsoptionen und können für verschiedene Anwendungsfälle angepasst werden. Die folgenden Anweisungen enthalten alle notwendigen und optionalen Schritte, um eine Instanz im OVHcloud Kundencenter zu erstellen und darauf zuzugreifen.  
Danach können Sie Ihr Public Cloud Projekt weiter spezialisieren, je nach Ihren Bedürfnissen.

**Diese Anleitung erklärt die ersten Schritte mit einer Public Cloud Instanz.**


## Voraussetzungen

- Sie verfügen über ein [Public Cloud Projekt](/links/public-cloud/public-cloud) in Ihrem OVHcloud Kunden-Account.

<!-- CP-NAV-START:publiccloud-projects -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direkter Link:** [Public Cloud Projekte](/links/control-panel/publiccloud-projects)
- **Navigationspfad:** `Public Cloud`{.action} > Wählen Sie Ihr Projekt aus

---
<!-- CP-NAV-END:publiccloud-projects -->

> [!success]
> Profitieren Sie von reduzierten Preisen, indem Sie sich für einen Zeitraum von 1 bis 36 Monaten für Ihre Public Cloud Ressourcen verpflichten. Weitere Informationen finden Sie auf unserer Seite zu [Savings Plans](/links/public-cloud/savings-plan).

## In der praktischen Anwendung

> [!primary]
>
> Wenn Sie noch kein Public Cloud Projekt erstellt haben, beginnen Sie mit unserer [Anleitung zum Erstellen eines Projekts](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
>
> Wichtige **technische Details** zur OVHcloud Public Cloud finden Sie auf [dieser Seite](/pages/public_cloud/public_cloud_cross_functional/00-essential-info-to-get-started-on-public-cloud).
>

### Inhaltsübersicht

- [Ziel](#ziel)
- [Voraussetzungen](#voraussetzungen)
- [In der praktischen Anwendung](#in-der-praktischen-anwendung)
  - [Inhaltsübersicht](#inhaltsubersicht)
  - [Schritt 1: SSH-Schlüsselpaar erstellen](#schritt-1-ssh-schlusselpaar-erstellen)
  - [Schritt 2: SSH-Schlüssel importieren](#schritt-2-ssh-schlussel-importieren)
  - [Schritt 3: Netzwerkkonfiguration vorbereiten](#schritt-3-netzwerkkonfiguration-vorbereiten)
  - [Schritt 4: Instanz erstellen](#schritt-4-instanz-erstellen)
    - [Schritt 4.1: Name der Instanz](#schritt-41-name-der-instanz)
    - [Schritt 4.2: Standort auswählen](#schritt-42-standort-auswahlen)
    - [Schritt 4.3: Modell auswählen](#schritt-43-modell-auswahlen)
      - [Weitere Informationen](#weitere-informationen)
    - [Schritt 4.4: Image auswählen](#schritt-44-image-auswahlen)
    - [Schritt 4.5: SSH-Schlüssel auswählen (nicht für Windows-Instanzen)](#schritt-45-ssh-schlussel-auswahlen-nicht-fur-windows-instanzen)
    - [Schritt 4.6: Backup-Einstellungen konfigurieren](#schritt-46-backup-einstellungen-konfigurieren)
    - [Schritt 4.7: Netzwerk konfigurieren](#schritt-47-netzwerk-konfigurieren)
    - [Schritt 4.8: Abrechnungszeitraum auswählen](#schritt-48-abrechnungszeitraum-auswahlen)
    - [Schritt 4.9: Erweiterte Einstellungen konfigurieren](#schritt-49-erweiterte-einstellungen-konfigurieren)
      - [Flexible Instanz](#flexible-instanz)
      - [Post-Installations-Skript](#post-installations-skript)
    - [Schritt 4.10: Instanz abschließen](#schritt-410-instanz-abschliessen)
  - [Schritt 5: Verbindung mit der Instanz herstellen](#schritt-5-verbindung-mit-der-instanz-herstellen)
    - [5.1: Status der Instanz im OVHcloud Kundencenter überprüfen](#51-status-der-instanz-im-ovhcloud-kundencenter-uberprufen)
    - [5.2: Erste Verbindung mit einer Instanz unter GNU/Linux](#52-erste-verbindung-mit-einer-instanz-unter-gnulinux)
    - [5.3: Windows-Instanzen](#53-windows-instanzen)
      - [5.3.1: Installation der Windows-Instanz abschließen](#531-installation-der-windows-instanz-abschliessen)
      - [5.3.2: Remoteverbindung von Windows aus](#532-remoteverbindung-von-windows-aus)
      - [5.3.3: Remoteverbindung von einem anderen Betriebssystem aus](#533-remoteverbindung-von-einem-anderen-betriebssystem-aus)
    - [5.4: VNC-Konsolenzugriff](#54-vnc-konsolenzugriff)
  - [Schritt 6: Erste Schritte mit einer neuen Instanz](#schritt-6-erste-schritte-mit-einer-neuen-instanz)
    - [6.1: Benutzerverwaltung](#61-benutzerverwaltung)
      - [6.1.1: Passwort für den aktuellen Benutzer-Account festlegen](#611-passwort-fur-den-aktuellen-benutzer-account-festlegen)
      - [6.1.2: Remote-Logins mit Passwort aktivieren (optional)](#612-remote-logins-mit-passwort-aktivieren-optional)
    - [6.2: Zusätzliche SSH-Schlüssel](#62-zusatzliche-ssh-schlussel)
- [Weiterführende Informationen](#weiterfuhrende-informationen)


> [!primary]
>
> **Sie müssen einen öffentlichen SSH-Schlüssel angeben, wenn Sie Public Cloud Instanzen in Ihrem Kundencenter erstellen.** Sobald die Instanz erstellt wurde können Sie Ihren Remote-Zugriff nach eigenem Ermessen konfigurieren.
>
> **Ausnahme**: Die Anmeldeauthentifizierung für Windows-Instanzen erfordert einen Benutzernamen und ein Passwort, da Windows RDP verwendet (**R**emote **D**esktop **P**rotocol).
>

### Schritt 1: SSH-Schlüsselpaar erstellen

Wenn Sie bereits über ein einsatzbereites SSH-Schlüsselpaar verfügen, können Sie diesen Schritt überspringen.

Das [SSH-Protokoll](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) ermöglicht eine verschlüsselte Client-Server-Kommunikation. Ein **SSH-Schlüsselpaar** besteht aus einem öffentlichen und einem privaten Schlüssel.

- Der **öffentliche Schlüssel** wird Ihrer Public Cloud Instanz hinzugefügt (und kann auch [im OVHcloud Kundencenter gespeichert werden](#schritt-2-ssh-schlussel-importieren)).
- Der **private Schlüssel** wird auf Ihrem lokalen Gerät gespeichert und muss vor unbefugtem Zugriff geschützt werden. Nur Clientgeräte mit dem passenden privaten Schlüssel können auf Ihre Instanz zugreifen. Für die Verbindung ist kein Passwort erforderlich.

Sie haben 2 Möglichkeiten, um Ihre SSH-Schlüssel zu erstellen und zu verwalten:

- Das Kommandozeileninterface Ihres Betriebssystems (einfacher **OpenSSH** Client)
- Zusätzliche Software (kompatibel mit dem **OpenSSH** Protokoll) mit Befehlszeilen- oder grafischer Oberfläche

Die meisten aktuellen Desktop-Betriebssysteme enthalten nativ einen **OpenSSH** Client, auf den über die Befehlszeilenanwendung des Systems zugegriffen werden kann (`cmd`, `Powershell`, `Terminal`, etc.). Wenn Sie nicht mit der Verwendung von SSH-Schlüsseln als Authentifizierungsmethode vertraut sind, können Sie die Anweisungen in [dieser Anleitung](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key) verwenden, um Ihr Schlüsselpaar zu erstellen.

Wenn Sie eine andere Software verwenden, folgen Sie der zugehörigen Benutzerdokumentation. Ein Anwendungsbeispiel für die Open-Source-Lösung `PuTTY` finden Sie in unserer Anleitung: [PuTTY verwenden](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).


### Schritt 2: SSH-Schlüssel importieren

Sie können Ihre öffentlichen SSH-Schlüssel im Bereich `Public Cloud`{.action} des [OVHcloud Kundencenters](/links/manager) speichern. Dies ist nicht zwingend erforderlich, macht die Erstellung einer Instanz jedoch komfortabler.

> [!primary]
>
> Mit gespeicherten SSH-Schlüsseln können Sie Ihre Instanzen schneller im OVHcloud Kundencenter erstellen. Informationen zum Austauschen von Schlüsselpaaren und Hinzufügen von Benutzern nach der Erstellung einer Instanz finden Sie in der Anleitung zu [zusätzlichen SSH-Schlüsseln](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Die in Ihrem OVHcloud Kundencenter hinzugefügten öffentlichen SSH-Schlüssel sind für Public Cloud Dienste in allen [Regionen](/links/public-cloud/regions-pci) verfügbar. Sie können Schlüssel mit **RSA**-, **ECDSA**- und **ED25519**-Verschlüsselung speichern.
>

Öffnen Sie `SSH-Schlüssel`{.action} im linken Menü unter **Einstellungen**. Klicken Sie auf den Button `SSH-Schlüssel hinzufügen`{.action}.

![SSH-Schlüssel](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

Geben Sie im neuen Fenster einen Namen für den Schlüssel ein. Füllen Sie das Feld `Schlüssel` mit der Zeichenfolge Ihres öffentlichen Schlüssels aus, beispielsweise dem in [Schritt 1](#schritt-1-ssh-schlusselpaar-erstellen) erstellten. Bestätigen Sie, indem Sie auf `Hinzufügen`{.action} klicken.

![Schlüssel hinzufügen](images/24-addkey.png){.thumbnail}

Sie können diesen Schlüssel nun in [Schritt 4](#schritt-4-instanz-erstellen) auswählen, um ihn einer neuen Instanz hinzuzufügen.

### Schritt 3: Netzwerkkonfiguration vorbereiten

Bevor Sie Ihre Instanz erstellen, empfehlen wir, zu überprüfen, wie die Instanz in Bezug auf Networking verwendet werden soll.

- Wenn Sie die Instanz derzeit nicht mit einem privaten Netzwerk konfigurieren müssen, können Sie mit [Schritt 4](#schritt-4-instanz-erstellen) fortfahren. Sie können eine Instanz erstellen, die über das öffentliche Internet erreichbar ist (vgl. **Public Mode** [unten](#networking-modes)).
- Wenn die Instanz mit einem neuen privaten Netzwerk (OVHcloud [vRack](/links/network/vrack)) verbunden werden soll, beachten Sie, dass das vRack bei der Erstellung Ihres Public Cloud Projekts automatisch erstellt wird. Es ist daher keine vorherige Aktion erforderlich. Weitere Informationen finden Sie in der [Anleitung zum Public Cloud vRack](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modi

**Public Mode**

Instanzen im *Public Mode* werden direkt über IPv4/IPv6 dem öffentlichen Internet zugänglich gemacht. IP-Adressen können nicht geändert werden, aber Sie können Instanzen mit [Additional IP-Adressen](/links/network/additional-ip) ausstatten ([einschließlich Ihrer eigenen Adressen](/links/network/byoip)) sowie mit einem [vRack](/links/network/vrack) verbinden.

**Private Mode**

Instanzen im privaten Modus können nur über einen [Gateway Dienst](/links/public-cloud/gateway) oder [Load Balancer](/links/public-cloud/load-balancer), sowie  [Floating IP-Adressen](/links/public-cloud/floating-ip) dem öffentlichen Internet zugänglich gemacht werden.

Weitere Informationen finden Sie in unseren Anleitungen im Bereich [Public Cloud Network Services](/products/public-cloud-network). Unsere [Seite mit Erläuterungen](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) bietet eine Einführung in das Thema Public Cloud Networking.

**Local Private Mode**

Der Local Private Mode ist nur verfügbar, wenn Sie eine Instanz in einer **Local Zone** erstellen. Instanzen können direkt über IPv4/IPv6 dem öffentlichen Internet zugänglich gemacht werden. Nur Instanzen derselben Local Zone können über private Netzwerke verbunden werden. Local Zones sind nicht mit dem [vRack](/links/network/vrack) kompatibel. In diesem Modus stellt DHCP Ihren Instanzen automatisch IP-Adressen zur Verfügung.

Weitere Informationen finden Sie auf der [Webseite zu Local Zones](/links/public-cloud/local-zones).

///

### Schritt 4: Instanz erstellen

> [!primary]
>
> Zum Erstellen einer Instanz im OVHcloud Kundencenter ist ein öffentlicher SSH-Schlüssel erforderlich (ausgenommen Windows-Instanzen).
>
> Wenn Sie keine einsatzbereiten SSH-Schlüssel haben, lesen Sie [Schritt 1](#schritt-1-ssh-schlusselpaar-erstellen) und [Schritt 2](#schritt-2-ssh-schlussel-importieren) dieser Anleitung.
>

Klicken Sie auf der **Startseite** auf `Instanz erstellen`{.action}.

#### Schritt 4.1: Name der Instanz

Geben Sie einen vollständigen Namen für Ihre Instanz ein. Der Standardwert ist die kommerzielle Referenz des Instanzmodells. Bei Bedarf können Sie auch die Region und das Datum hinzufügen, um die Identifizierung und Verwaltung Ihrer Instanzen zu erleichtern.

#### Schritt 4.2: Standort auswählen

Wählen Sie einen [Standort](/links/public-cloud/regions-pci) aus, der Ihren Benutzern oder Kunden am nächsten liegt. Beachten Sie, dass bei Auswahl einer **Local Zone** in diesem Schritt Netzwerkbeschränkungen für die Instanz gelten (siehe [Schritt 3](#networking-modes)).

Weitere Informationen finden Sie auf der [Webseite zu Local Zones](/links/public-cloud/local-zones) und in der [Dokumentation zur Dienstverfügbarkeit für Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

Die Wahl der Region bestimmt die Bereitstellungsart Ihrer Instanz (1-AZ, 3-AZ oder Local Zones). Informationen zu den Unterschieden in Bezug auf Resilienz, Verfügbarkeit und Architektur finden Sie in unserer Anleitung [Vergleich der Bereitstellungsmodi und Resilienz – 3-AZ / 1-AZ / Local Zones verstehen](/pages/public_cloud/public_cloud_cross_functional/deployment_modes_comparison_resilience_details).

#### Schritt 4.3: Modell auswählen

In diesem Schritt wählen Sie das Instanzmodell (auch als Flavor bezeichnet), das die Ihrer Instanz zugewiesenen Ressourcen bestimmt: Prozessor, Arbeitsspeicher und zugehörige Kapazitäten. Öffnen Sie die Dropdown-Liste `Instanzmodell` und wählen Sie den Modelltyp aus, der am besten zu Ihrem Anwendungsfall passt, um auf unsere optimierten Instanzen zuzugreifen.

Der Modelltyp `Discovery` umfasst Instanzen mit geteilten Ressourcen zu günstigen Preisen. Sie eignen sich besonders gut zum Einstieg in die OVHcloud Public Cloud, zum Durchführen von Tests oder zum Hosting leichter Workloads wie Web-Anwendungen.

`Metal Instances`-Modelle bieten vollständig dedizierte physische Ressourcen, die konsistente Leistung und maximale Isolation für die anspruchsvollsten Workloads gewährleisten.

> [!primary]
>
> Ihre gesamten Public Cloud Ressourcen werden zunächst aus Gründen der Kostenkontrolle und Sicherheit begrenzt. Sie können diese Quotas überprüfen, indem Sie in der linken Navigationsleiste unter **Einstellungen** auf `Quota und Regionen`{.action} klicken. Weitere Informationen finden Sie in der [zugehörigen Dokumentation](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota).
>
> Beachten Sie, dass Sie nach der Erstellung ein **Upgrade** Ihrer Instanz durchführen können, um mehr Ressourcen zur Verfügung zu haben. Ein Downgrade auf ein kleineres Modell ist bei einer regulären Instanz jedoch nicht möglich. Weitere Informationen zu diesem Thema finden Sie im nachfolgenden **Schritt 4.9**.
>

##### Weitere Informationen

/// details | Instanz-Modellkategorien

| Typ | Garantierte Ressourcen | Verwendungshinweise |
| :---         |     :---:      |          :--- |
| Best Sellers   | ✓     | Beliebteste Modelle    |
| General Purpose   | ✓     | Entwicklungsserver, Web- oder Geschäftsanwendungen    |
| Compute Optimized     | ✓       | Videokodierung oder anderes High Performance Computing      |
| Memory Optimized    | ✓     | Datenbanken, Analysen und In-Memory-Berechnungen    |
| GPU     | ✓       | Massive parallele Rechenleistung für spezialisierte Anwendungen (Rendering, Big Data, Deep Learning, etc.)       |
| Discovery    | -       | Auf geteilten Ressourcen gehostet, für Test- und Entwicklungsumgebungen      |
| Storage Optimized   | ✓     | Optimiert für Disk-Datentransfer    |
| Metal Instances | ✓ | Dedizierte Ressourcen mit direktem Zugriff auf Rechen-, Speicher- und Netzwerkressourcen|

///

/// details | Regionen und Local Zones

**Regionen**

Eine **Region** ist ein Standort in der Welt, der aus einem oder mehreren Rechenzentren besteht, in denen OVHcloud Dienste gehostet werden. Weitere Informationen zu Regionen, der geografischen Verteilung und der Verfügbarkeit von Diensten finden Sie auf unserer [Webseite zu Regionen](/links/public-cloud/regions-pci) und der [Webseite zur OVHcloud Infrastruktur](/links/infrareg).

**Local Zones**

Local Zones sind eine Erweiterung von **Regionen**, die OVHcloud Dienste näher an bestimmten Standorten platzieren, was zu reduzierten Latenzen und einer verbesserten Anwendungsleistung führt. Weitere Informationen finden Sie auf der [Webseite zu Local Zones](/links/public-cloud/local-zones) und in der [Dokumentation zur Dienstverfügbarkeit für Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

#### Schritt 4.4: Image auswählen

Öffnen Sie die Dropdown-Liste `Distributionstyp`, wählen Sie die Kategorie aus, die Ihren Anforderungen entspricht, und wählen Sie dann über das Dropdown-Menü `Image-Version` das Betriebssystem aus, das auf Ihrer Instanz installiert werden soll.

Welche Images in diesem Schritt verfügbar sind, hängt von den in den vorherigen Schritten getroffenen Entscheidungen ab, also der Kompatibilität mit dem Instanz-Modell und der regionalen Verfügbarkeit. Wenn Sie beispielsweise ein Windows-Betriebssystem auswählen möchten und auf dem Tab für Windows keine Optionen verfügbar sind, müssen Sie die Auswahl in den vorherigen Schritten ändern.

> [!primary]
>
> Wenn Sie sich für ein Betriebssystem entscheiden, für das eine kostenpflichtige Lizenz erforderlich ist, werden diese Kosten automatisch in der Projektabrechnung berücksichtigt.
>

#### Schritt 4.5: SSH-Schlüssel auswählen (ausgenommen Windows-Instanzen)

Mit Ausnahme von Windows-Instanzen erfordert die Konfiguration Ihrer Instanz auch das **Hinzufügen eines öffentlichen SSH-Schlüssels**. Sie haben zwei Möglichkeiten:

- Einen bereits im OVHcloud Kundencenter gespeicherten öffentlichen Schlüssel verwenden
- Einen öffentlichen Schlüssel direkt eingeben

Klicken Sie auf die nachfolgenden Tabs, um die Erläuterungen anzuzeigen:

> [!tabs]
> **Gespeicherten Schlüssel verwenden**
>>
>> Um einen in Ihrem OVHcloud Kundencenter gespeicherten Schlüssel hinzuzufügen (siehe [Schritt 2](#schritt-2-ssh-schlussel-importieren)), wählen Sie ihn aus der Liste aus.
>>
> **Schlüssel direkt eingeben**
>>
>> Um einen öffentlichen Schlüssel durch Einfügen der Schlüsselzeichenfolge hinzuzufügen, klicken Sie auf den Button `Neuen SSH-Schlüssel erstellen`{.action}.
>>
>> Geben Sie einen Namen für den Schlüssel und die Schlüsselzeichenfolge in die entsprechenden Felder ein. Klicken Sie dann auf `Schlüssel bestätigen`{.action}.
>>

#### Schritt 4.6: Backup-Einstellungen konfigurieren

[Automatische Backups](/pages/public_cloud/compute/save_an_instance) sind standardmäßig aktiviert. Überprüfen Sie die Preisinformationen und weitere Details, bevor Sie fortfahren.

Wählen Sie anschließend den Rotationstyp aus, d.h. die maximale Anzahl der im Verlauf aufbewahrten Backups: 7 oder 14 Tage.

#### Schritt 4.7: Netzwerk konfigurieren

In diesem Schritt konfigurieren Sie das Netzwerk Ihrer Instanz.

**Privates Netzwerk**

Sie können Ihre Instanz mit einem [privaten Netzwerk](#networking-modes) verbinden und ihr eine [Floating IP](/links/public-cloud/floating-ip) zuweisen.

Durch Klicken auf `Privates Netzwerk erstellen`{.action} können Sie direkt eines erstellen:

- Benennen Sie das Netzwerk.
- **VLAN-ID auswählen:** Kennung zur Verbindung mehrerer Dienste und Ressourcen innerhalb desselben privaten Netzwerks über eine gemeinsame Netzwerksegmentierungsnummer.
- **CIDR definieren:** IP-Adressbereich für das Netzwerk.
- **DHCP durch Aktivieren des entsprechenden Kontrollkästchens einschalten, falls erforderlich:** Aktivieren Sie diese Option, wenn IP-Adressen automatisch zugewiesen werden sollen.

> [!primary]
>
> Die Instanz kann vollständig privat bleiben, wenn Sie ihr keine öffentliche IP-Adresse zuweisen.
>

**Gateway**

Sie können die Option zur Zuweisung eines Gateways zu Ihrem Netzwerk aktivieren. Das Gateway hat standardmäßig die Größe S, Sie können die Größe jedoch später in den Einstellungen anpassen.

**Öffentliche Konnektivität zuweisen**

Sie können diese Funktion nach Bedarf aktivieren oder deaktivieren. Wenn Sie sie aktivieren, stehen Ihnen zwei Optionen zur Verfügung:

- **Basic Public IP:** eine temporäre öffentliche IP-Adresse, die über die Lebensdauer der Instanz hinaus nicht bestehen bleibt. Beachten Sie, dass die Verwendung einer Basic Public IP nicht mit einem Gateway kompatibel ist.
- **Floating IP:** Sie können eine neue Floating IP erstellen oder eine bestehende Adresse wiederverwenden, um eine persistente öffentliche IP-Adresse zu erhalten, die von der Instanz getrennt werden kann.

#### Schritt 4.8: Abrechnungszeitraum auswählen

> [!primary]
>
> Beachten Sie, dass je nach gewähltem Instanz-Modell die **stündliche** Abrechnung als einzige Auswahl erscheinen kann. Dies ist eine vorübergehende Einschränkung; neue Abrechnungsoptionen für die Public Cloud werden demnächst verfügbar sein.
>

> [!tabs]
> **Monatliche Abrechnung**
>>
>> Die monatliche Abrechnung führt langfristig zu niedrigeren Kosten, kann jedoch nach der Erstellung der Instanz **nicht** auf stündliche Abrechnung umgestellt werden.
>>
> **Stündliche Abrechnung**
>>
>> Die stündliche Abrechnung ist die beste Wahl, wenn die Dauer der Nutzung nicht exakt abschätzbar ist. Wenn Sie sich später entscheiden, die Instanz langfristig zu nutzen, können Sie jederzeit [auf ein monatliches Abonnement umstellen](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).
>>
>> Die Instanz wird in Rechnung gestellt, solange sie **nicht gelöscht** wird, unabhängig von der produktiven Nutzung der Instanz.
>>

Details hierzu finden Sie in unserer Abrechnungsdokumentation:

- [Public Cloud Abrechnung](/pages/public_cloud/public_cloud_cross_functional/analyze_billing)
- [FAQ zur monatlichen Abrechnung](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Wenn die Konfiguration Ihrer Instanz abgeschlossen ist, können Sie auf den Button `Instanz starten`{.action} klicken oder erweiterte Einstellungen konfigurieren (siehe unten). Die Bereitstellung Ihres Dienstes kann einige Minuten dauern.

#### Schritt 4.9: Erweiterte Einstellungen konfigurieren

##### Flexible Instanz

Eine Flex-Instanz ist eine Instanz mit einer 50-GB-Disk, die eine schnellere Snapshot-Erstellung und -Wiederherstellung ermöglicht.

Sie erlaubt die Größenänderung auf höhere oder niedrigere Modelle bei gleichbleibendem Speicherplatz. Klassische Modelle erlauben dagegen nur die Größenänderung auf höhere Modelle.

##### Post-Installation-Skript

Sie können [Ihr Post-Installation-Skript](/pages/public_cloud/compute/launching_script_when_creating_instance) in diesem Feld hinzufügen.

#### Schritt 4.10: Instanz abschließen

Auf der rechten Seite finden Sie eine Zusammenfassung Ihrer Konfiguration. In diesem Bereich können Sie die Anzahl der zu erstellenden Instanzen konfigurieren. Sie können mehrere Instanzen auf der Grundlage der in den Erstellungsschritten getroffenen Auswahl erstellen; es gelten jedoch [Ressourcenkontingentsgrenzen](/pages/public_cloud/public_cloud_cross_functional/increasing_public_cloud_quota).

Wenn die Konfiguration Ihrer Instanz abgeschlossen ist, klicken Sie auf den Button `Instanz starten`{.action}. Die Bereitstellung Ihres Dienstes kann einige Minuten dauern.

### Schritt 5: Verbindung mit der Instanz herstellen

Die Anweisungen in diesem Abschnitt beziehen sich auf Remoteverbindungen mittels der Protokolle **OpenSSH** und **RDP** über ein öffentliches Netzwerk (Internet).

Beachten Sie, dass wir alternative Zugriffsmöglichkeiten (hauptsächlich zur Fehlerbehebung) anbieten, die nur über Ihr OVHcloud Kundencenter verfügbar sind:

- [VNC-Konsole](#54-vnc-konsolenzugriff)
- [Rescue-Modus](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Wenn Sie ein **Betriebssystem mit Anwendung** installiert haben, beachten Sie unsere [Anleitung zu den ersten Schritten mit Anwendungen](/pages/public_cloud/compute/apps_first_steps) sowie die offizielle Dokumentation des entsprechenden Herausgebers.
>

#### 5.1: Status der Instanz im OVHcloud Kundencenter überprüfen

Wählen Sie `Instanzen`{.action} in der linken Navigationsleiste unter **Compute** aus. Ihre Instanz ist bereit, wenn der Status in der Tabelle `Aktiviert` anzeigt. Wenn die Instanz kürzlich erstellt wurde und einen anderen Status hat, klicken Sie auf den Button „Aktualisieren" neben dem Suchfilter.

![Seite Instanzen](images/24-instance-connect01.png){.thumbnail}

Klicken Sie auf den Instanznamen in dieser Tabelle, um das `Dashboard`{.action} zu öffnen, auf dem Sie alle Informationen zur Instanz finden. Weitere Informationen zu den auf dieser Seite verfügbaren Funktionen finden Sie in unserer Anleitung zur [Verwaltung von Instanzen im Kundencenter](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Ein **Benutzer mit erhöhten Rechten (*sudo*) wird automatisch auf der Instanz erstellt**. Der Benutzername entspricht dem installierten Image, z.B. „ubuntu", „debian", „fedora", etc. Sie können dies auf der rechten Seite des `Dashboard`{.action} im Abschnitt **Netzwerke** überprüfen.

![Seite Instanzen](images/24-instance-connect02.png){.thumbnail}

Wenn Ihr [SSH-Schlüsselpaar korrekt konfiguriert](#schritt-1-ssh-schlusselpaar-erstellen) ist, können Sie sich jetzt mit dem vorkonfigurierten Benutzer und Ihrem SSH-Schlüssel bei der Instanz anmelden. Detailliertere Anweisungen finden Sie in den folgenden Abschnitten.

> [!primary]
>
> Der Zugriff über die **VNC-Konsole** auf eine neue, im Kundencenter erstellte GNU/Linux-Instanz muss zunächst wie im [nachfolgenden Abschnitt](#54-vnc-konsolenzugriff) beschrieben aktiviert werden.
>
> Diese Anleitung behandelt nicht die Konfiguration privater Netzwerke für Instanzen. Informationen hierzu finden Sie in unserer Dokumentation zu [Public Cloud Network Services](/products/public-cloud-network).
>

#### 5.2: Erste Verbindung mit einer Instanz unter GNU/Linux

> [!primary]
>
> Wenn Sie Fehlermeldungen bezüglich Ihrer **SSH-Schlüssel** erhalten, überprüfen Sie mithilfe der Informationen in [dieser Anleitung](/pages/public_cloud/compute/creating-ssh-keys-pci#create-ssh-key), ob Ihr lokales Gerät über einen korrekt konfigurierten privaten SSH-Schlüssel verfügt.<br>
> Wenn Sie weiterhin auf Fehler stoßen, können Sie das Schlüsselpaar mithilfe [dieser Anleitung](/pages/public_cloud/compute/replacing_lost_ssh_key) ersetzen.
>
> Wenn Sie eine Instanz ohne SSH-Schlüssel über die [OVHcloud API](/pages/manage_and_operate/api/first-steps) oder das [OpenStack Horizon Interface](/pages/public_cloud/compute/create_instance_in_horizon) erstellt haben, können Sie Ihrer Instanz nur über den [Rescue-Modus](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) einen SSH-Schlüssel hinzufügen, indem Sie den Anweisungen in [dieser Anleitung](/pages/public_cloud/compute/replacing_lost_ssh_key) folgen.
>

Sie können direkt nach der Erstellung über das Kommandozeileninterface Ihres lokalen Geräts (`Terminal`, `Powershell`, etc.) per SSH auf Ihre Instanz zugreifen.

```bash
ssh username@IPv4_instance
```

Beispiel:

```bash
ssh ubuntu@203.0.113.101
```

[Abhängig von Ihrer Konfiguration](#schritt-1-ssh-schlusselpaar-erstellen) müssen Sie eine Passphrase eingeben, die Ihren privaten Schlüssel schützt, oder den Pfad zu Ihrer Schlüsseldatei angeben. Weitere Informationen finden Sie in unserer [Anleitung zu SSH-Schlüsseln](/pages/public_cloud/compute/creating-ssh-keys-pci#multiplekeys).

Wenn Sie eine andere SSH-Client-Software verwenden, folgen Sie deren Benutzerdokumentation. Ein Anwendungsbeispiel für die Open-Source-Lösung `PuTTY` finden Sie in [dieser Anleitung](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows).

Fahren Sie mit [Schritt 6 unten](#schritt-6-erste-schritte-mit-einer-neuen-instanz) fort.

#### 5.3: Windows-Instanzen

##### 5.3.1: Installation der Windows-Instanz abschließen

Nachdem Sie überprüft haben, dass die Windows-Instanz [installiert](#51-status-der-instanz-im-ovhcloud-kundencenter-uberprufen) ist, öffnen Sie den Tab `VNC-Konsole`{.action} in Ihrem [OVHcloud Kundencenter](/links/manager).

Anschließend müssen Sie die Erstkonfiguration Ihres Windows-Betriebssystems abschließen. Folgen Sie den nachfolgenden Schritten in den Tabs:

> [!tabs]
> 1. **Lokale Einstellungen**
>>
>> Konfigurieren Sie **Land/Region**, die bevorzugte **Windows-Sprache** und Ihr **Tastaturlayout**. Klicken Sie dann unten rechts auf `Next`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Administratorpasswort**
>>
>> Geben Sie ein Passwort für den Windows-Account `Administrator` ein und bestätigen Sie. Klicken Sie dann auf `Finish`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Anmeldebildschirm**
>>
>> Windows wendet Ihre Einstellungen an und zeigt dann den Anmeldebildschirm an. Klicken Sie oben rechts auf `Send CtrlAltDel`{.action}, um sich anzumelden.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Administrator-Login**
>>
>> Geben Sie das im vorherigen Schritt erstellte Passwort des Accounts `Administrator` ein und klicken Sie auf den `Pfeil`.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

##### 5.3.2: Remoteverbindung von Windows aus

Auf Ihrem lokalen Windows-Gerät können Sie sich über die Client-Anwendung `Remote Desktop Connection` mit Ihrer Instanz verbinden.

![RDP-Verbindung](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Geben Sie die IPv4-Adresse Ihrer Instanz sowie Ihren Benutzernamen und Ihr Passwort ein. In der Regel wird eine Warnmeldung angezeigt, die Sie auffordert, die Verbindung aufgrund eines unbekannten Zertifikats zu bestätigen. Klicken Sie auf `Ja`{.action}, um sich anzumelden.

> [!primary]
>
> Wenn bei diesem Verfahren Probleme auftreten, überprüfen Sie, ob Remoteverbindungen (RDP) auf Ihrem Gerät zugelassen sind, indem Sie die Systemeinstellungen, Firewallregeln und mögliche Netzwerkeinschränkungen prüfen.
>

##### 5.3.3: Remoteverbindung von einem anderen Betriebssystem aus

Für Verbindungen von einem anderen Desktop-Betriebssystem als Windows ist in der Regel eine Client-Software erforderlich, die mit dem `Remote Desktop Protocol` (RDP) kompatibel ist. Einige Desktop-Umgebungen und Betriebssysteme verfügen möglicherweise über einen integrierten nativen Client.

Unabhängig davon, welchen Client Sie verwenden, benötigen Sie nur die IP-Adresse Ihrer Instanz und das Passwort des `Administrator`-Accounts zur Anmeldung.

**Anwendungsbeispiel**

Die freie Open-Source-Software `Remmina Remote Desktop Client` ist für viele GNU/Linux Desktop-Distributionen verfügbar. Wenn Sie Remmina nicht im Software-Manager Ihrer Desktop-Umgebung finden, können Sie die Anwendung von der [offiziellen Website](https://remmina.org/) beziehen.

![Linux Remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Verbindung**
>>
>> Öffnen Sie Remmina und stellen Sie sicher, dass das Verbindungsprotokoll auf „RDP" eingestellt ist. Geben Sie die IPv4-Adresse Ihrer Public Cloud Instanz ein und drücken Sie `Enter`.<br><br>
>>![Linux Remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Authentifizierung**
>>
>> Wenn eine Zertifikatwarnung angezeigt wird, klicken Sie auf `Yes`{.action}. Geben Sie den Benutzernamen und Ihr Passwort für Windows ein und klicken Sie auf `OK`{.action}, um die Verbindung herzustellen.<br><br>
>>![Linux Remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Einstellungen**
>>
>> Sie finden einige nützliche Einstellungsoptionen in der linken Symbolleiste. Klicken Sie beispielsweise auf das Symbol `Toggle Dynamic Resolution Update`{.action}, um die Auflösung des Remote-Fensters zu verbessern.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

#### 5.4: VNC-Konsolenzugriff

Mit der VNC-Konsole können Sie sich mit Ihren Instanzen verbinden, auch wenn keine anderen Zugriffsmöglichkeiten verfügbar sind.

Wählen Sie `Instanzen`{.action} in der linken Navigationsleiste unter **Compute** aus. Klicken Sie auf den Instanznamen und öffnen Sie den Tab `VNC-Konsole`{.action}.

![VNC-Konsole](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Instanz mit GNU/Linux Betriebssystem**
>>
>> Für die Verwendung der VNC-Konsole muss auf der Instanz ein **Benutzerkonto mit Passwort** konfiguriert sein. Um ein Passwort für das vorkonfigurierte Konto festzulegen, folgen Sie den Schritten in [Abschnitt 6.1.1 unten](#611-passwort-fur-den-aktuellen-benutzer-account-festlegen).
>>
> **Windows-Instanz**
>>
>> Melden Sie sich mit Ihren Logindaten der Windows-Instanz an. Bei einer aktiven Sitzung haben Sie unmittelbar Zugriff. Es besteht eine deutliche Latenz im Vergleich zu einer RDP-Verbindung.
>>

### Schritt 6: Erste Schritte mit einer neuen Instanz

> [!primary]
>
> **Windows-Instanzen**
>
> Für Instanzen, auf denen ein Windows-Betriebssystem installiert ist, sind keine weiteren Schritte erforderlich.
>
> Weitere Informationen finden Sie unten im Abschnitt [Weiterführende Informationen](#weiterfuhrende-informationen).
>

#### 6.1: Benutzerverwaltung

> [!primary]
>
> Beim Konfigurieren von Benutzer-Accounts und Berechtigungsstufen auf einer Instanz empfehlen wir, die Informationen in unserer Anleitung zu [Benutzer-Accounts](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) zu verwenden.
>

##### 6.1.1: Passwort für den aktuellen Benutzer-Account festlegen

Wenn Sie [auf Ihrer Instanz eingeloggt sind](#schritt-6-erste-schritte-mit-einer-neuen-instanz), vergeben Sie ein Passwort für den aktuellen Benutzer, indem Sie folgenden Befehl eingeben:

```bash
sudo passwd
```

Geben Sie eine Passphrase ein, bestätigen Sie mit `Enter` und wiederholen Sie den Vorgang.

```console
New password:
Retype new password:
passwd: password updated successfully
```

**Dies reicht aus, um Logins über die [VNC-Konsole](#54-vnc-konsolenzugriff) in Ihrem [OVHcloud Kundencenter](/links/manager) zu aktivieren**. Remote-SSH-Logins mit diesem Passwort sind jedoch weiterhin standardmäßig **deaktiviert**.

##### 6.1.2: Remote-Logins mit Passwort aktivieren (optional)

> [!warning]
>
> Dieser Schritt ist nicht notwendig und sollte nur ausgeführt werden, wenn Sie einen triftigen Grund haben, diesen Zugriffsweg zu aktivieren; zum Beispiel, wenn Sie sich vorübergehend von einem Gerät aus bei der Instanz anmelden müssen, auf dem Ihr privater SSH-Schlüssel nicht gespeichert ist.
>
> Das folgende Beispiel zeigt eine temporäre Lösung auf einer Instanz, auf der Ubuntu installiert ist. Beachten Sie, dass die Befehle möglicherweise an Ihr Betriebssystem angepasst werden müssen. Es wird nicht empfohlen, diese Konfiguration dauerhaft beizubehalten, da sie ein potenzielles Sicherheitsrisiko bedeutet, indem das System für SSH-basierte Angriffe geöffnet wird.
>

Öffnen Sie nach dem [Einloggen auf Ihrer Instanz](#schritt-6-erste-schritte-mit-einer-neuen-instanz) die betreffende Konfigurationsdatei mit einem Texteditor. Beispiel:

```bash
sudo nano /etc/ssh/sshd_config
```

Bearbeiten Sie die Zeile `#PasswordAuthentication yes` wie folgt:

```console
PasswordAuthentication yes
```

Ändern Sie die Zeile `Include /etc/ssh/sshd_config.d/*.conf` wie folgt:

```console
#Include /etc/ssh/sshd_config.d/*.conf
```

Speichern Sie die Datei und schließen Sie den Editor.

Starten Sie den SSH-Dienst mit einem der folgenden Befehle neu:

```bash
sudo systemctl restart ssh
```

```bash
sudo systemctl restart sshd
```

Sie können sich nun via SSH auch mit Benutzername und Passwort anmelden.

Machen Sie diese Änderungen rückgängig, um zur schlüsselbasierten Anmeldung zurückzukehren.

#### 6.2: Zusätzliche SSH-Schlüssel

Wenn Sie weiteren Benutzer-Accounts den Zugriff auf die Instanz erlauben möchten, gehen Sie wie folgt vor:

- Erstellen Sie den Account auf der Instanz.
- Erzeugen Sie ein neues SSH-Schlüsselpaar auf dem Gerät des Benutzers.
- Fügen Sie der Instanz den öffentlichen Schlüssel hinzu.

Eine detaillierte Erklärung dieser Schritte finden Sie in unserer [zugehörigen Anleitung](/pages/public_cloud/compute/configuring_additional_ssh_keys).

## Weiterführende Informationen

[Aktivieren einer Windows-Lizenz für eine Instanz im privaten Modus](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Zurücksetzen des Windows-Administratorpassworts](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Verwaltung von Instanzen im Kundencenter](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Erste Schritte mit OpenStack](/pages/public_cloud/public_cloud_cross_functional/prepare_the_environment_for_using_the_openstack_api)

[Erste Schritte mit Horizon](/pages/public_cloud/public_cloud_cross_functional/introducing_horizon)


Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.
