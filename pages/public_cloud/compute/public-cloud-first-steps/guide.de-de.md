---
title: "Eine Public Cloud Instanz erstellen und darauf zugreifen"
excerpt: "Erfahren Sie hier, wie Sie Public Cloud Instanzen in Ihrem OVHcloud Kundencenter konfigurieren, sowie die ersten Schritte mit Instanzen"
updated: 2024-08-21
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

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Public Cloud Instanzen sind einfach einzurichten und zu verwalten. Als Teil des OVHcloud Public Cloud Ökosystems bieten Instanzen jedoch zahlreiche Konfigurationsoptionen und können für verschiedene Anwendungsfälle angepasst werden. Die folgenden Anweisungen enthalten alle notwendigen und optionalen Schritte, um eine Instanz im OVHcloud Kundencenter zu erstellen und darauf zuzugreifen.  
Danach können Sie Ihr Public Cloud Projekt weiter spezialisieren, je nach Ihren Bedürfnissen.

**Diese Anleitung erklärt die ersten Schritte mit einer Public Cloud Instanz.**

## Voraussetzungen

- Sie haben ein [Public Cloud Projekt](/links/public-cloud/public-cloud) in Ihrem OVHcloud Kunden-Account.
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](/links/manager).

## In der praktischen Anwendung

> [!primary]
>
> Wenn Sie noch kein Public Cloud Projekt erstellt haben, starten Sie mit unserer [Anleitung zum Erstellen eines Projekts](/pages/public_cloud/compute/create_a_public_cloud_project).
> 
> Wichtige **technische Details** zur OVHcloud Public Cloud finden Sie auf [dieser Seite](/pages/public_cloud/compute/00-essential-info-to-get-started-on-public-cloud).
> 

### Inhaltsübersicht

- [**1** SSH-Schlüssel erstellen](#create-ssh)
- [**2** SSH-Schlüssel importieren](#import-ssh)
- [**3** Netzwerkkonfiguration vorbereiten](#network)
- [**4** Instanz erstellen](#create-instance)
    - [**4.1** Instanz-Modell auswählen](#model)
    - [**4.2** Region auswählen](#region)
    - [**4.3** Image auswählen](#image)
    - [**4.4** Instanz konfigurieren](#configuration)
    - [**4.5** Netzwerk konfigurieren](#network)
    - [**4.6** Abrechnungszeitraum auswählen](#billing)
- [**5** Verbindung mit der Instanz](#connect-instance)
    - [**5.1** Überprüfung der Instanz-Installation im OVHcloud Kundencenter](#verify-status)
    - [**5.2** Erster Login auf einer Instanz mit GNU/Linux Betriebssystem](#login-linux)
    - [**5.3** Windows-Instanzen](#windows)
        - [**5.3.1** Die Installation einer Windows-Instanz abschließen](#windows)
        - [**5.3.2** Remoteverbindung von Windows aus](#login-windows)
        - [**5.3.3** Remoteverbindung von einem anderen Betriebssystem aus](#login-other)
    - [**5.4** VNC-Konsolenzugriff](#vnc-console)
- [**6** Erste Schritte auf einer neuen Instanz](#manage-access)
    - [**6.1** Benutzerverwaltung](#user-mgmt)
        - [**6.1.1** Passwort für das aktuelle Benutzerkonto festlegen](#set-password)
        - [**6.1.2** Passwortbasierte Remoteverbindungen aktivieren](#remote-password)
    - [**6.2** Zusätzliche SSH-Schlüssel](#add-keys)

> [!primary]
>
> **Sie müssen einen öffentlichen SSH-Schlüssel angeben, wenn Sie Public Cloud Instanzen in Ihrem Kundencenter erstellen.** Sobald die Instanz erstellt wurde können Sie Ihren Remote-Zugriff nach eigenem Ermessen konfigurieren.
>
> **Ausnahme**: Die Anmeldeauthentifizierung für Windows-Instanzen erfordert einen Benutzernamen und ein Kennwort, da Windows RDP verwendet (**R**emote **D**esktop **P**rotocol).
> 

<a name="create-ssh"></a>

### Schritt 1: SSH-Schlüsselpaar erstellen

Wenn Sie bereits über ein SSH-Schlüsselpaar verfügen, können Sie diesen Schritt überspringen.

Das [SSH Protokoll](/pages/bare_metal_cloud/dedicated_servers/ssh_introduction) ermöglicht eine verschlüsselte Client-Server-Kommunikation. Ein **SSH-Schlüsselpaar** besteht aus einem öffentlichen und einem privaten Schlüssel.

- Der **öffentliche Schlüssel** wird Ihrer Public Cloud Instanz hinzugefügt (und kann auch [in Ihrem OVHcloud Kundencenter gespeichert werden](#import-ssh)).
- Der **private Schlüssel** wird auf Ihrem lokalen Gerät gespeichert und muss vor unbefugtem Zugriff geschützt werden. Nur Clientgeräte mit dem passenden privaten Schlüssel können auf Ihre Instanz zugreifen. Für die Anmeldung ist kein Benutzerkennwort erforderlich.

Sie haben 2 Optionen, um Ihre SSH-Schlüssel zu erstellen und zu verwalten:

- Das Kommandozeileninterface Ihres Betriebssystems (einfacher **Open SSH** Client).
- Zusätzliche Software (kompatibel mit **Open SSH**) mit Befehlszeilen- oder grafischer Oberfläche.

Die meisten zeitgemäßen Desktop-Betriebssysteme enthalten nativ einen **Open SSH** Client, auf den über die Befehlszeilenanwendung des Systems zugegriffen werden kann (`cmd`, `Powershell`, `Terminal`, etc.). Wenn Sie nicht mit der Verwendung von SSH-Schlüsseln als Authentifizierungsmethode vertraut sind, können Sie die Anweisungen in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key) verwenden, um Ihr Schlüsselpaar zu erstellen.

Wenn Sie eine andere Software verwenden, folgen Sie der zugehörigen Benutzerdokumentation. Anweisungen für die Open-Source-Lösung `PuTTY` finden Sie in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#useputty).

<a name="import-ssh"></a>

### Schritt 2: SSH-Schlüssel importieren

Sie können Ihre öffentlichen SSH-Schlüssel im Bereich `Public Cloud`{.action} Ihres [OVHcloud Kundencenters](/links/manager) speichern. Dies ist nicht zwingend erforderlich, macht die Erstellung einer Instanz jedoch bequemer.

> [!primary]
>
> Mit gespeicherten SSH-Schlüsseln können Sie Ihre Instanzen schneller im OVHcloud Kundencenter erstellen. Informationen zum Austauschen von Schlüsselpaaren und Hinzufügen von Benutzern nach der Erstellung einer Instanz finden Sie in der Anleitung zu [zusätzlichen SSH-Schlüsseln](/pages/public_cloud/compute/configuring_additional_ssh_keys).
>
> Die in Ihrem OVHcloud Kundencenter hinzugefügten öffentlichen SSH-Schlüssel sind für Public-Cloud-Dienste in allen [Regionen](/links/public-cloud/regions-pci) verfügbar. Sie können Schlüssel als **RSA**, **ECDSA** und **ED25519** importieren.
>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus.

![Control Panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Öffnen Sie `SSH Keys`{.action} im linken Menü unter **Project Management**. Klicken Sie auf `SSH-Schlüssel hinzufügen`{.action}.

![ssh keys](/pages/assets/screens/control_panel/product-selection/public-cloud/cp_pci_sshkeys.png){.thumbnail}

Geben Sie im neuen Fenster einen Namen für den Schlüssel ein. Füllen Sie das Feld `Schlüssel` mit der Zeichenfolge des öffentlichen Schlüssels aus, z.B. die in [Schritt 1](#create-ssh) erstellte. Bestätigen Sie, indem Sie auf `Hinzufügen`{.action} klicken.

![add key](images/24-addkey.png){.thumbnail}

Sie können diesen Schlüssel jetzt in [Schritt 4](#create-instance) auswählen, um ihn einer neuen Instanz hinzuzufügen.

<a name="network"></a>

### Schritt 3: Netzwerkkonfiguration vorbereiten

Bevor Sie Ihre Instanz erstellen, empfehlen wir, zu überprüfen, wie die Instanz in Bezug auf Networking verwendet werden soll.

- Wenn Sie die Instanz derzeit nicht mit einem privaten Netzwerk konfigurieren müssen, können Sie mit [Schritt 4](#create-instance) fortfahren. Sie können eine Instanz erstellen, die über das öffentliche Internet erreichbar ist (vgl. **Public Mode** [unten](#networking-modes).)
- Wenn die Instanz mit einem neuen privaten Netzwerk (OVHcloud [vRack](/links/network/vrack)) verbunden werden muss, **erstellen Sie zuerst Ihr vRack**, bevor Sie fortfahren. Weitere Informationen finden Sie in der [Anleitung zum Public Cloud vRack](/pages/public_cloud/public_cloud_network_services/getting-started-07-creating-vrack).

<a name="networking-modes"></a>

/// details | Public Cloud Networking - Modusse

**Public Mode**

Instanzen im *Public Mode* werden direkt über IPv4/IPv6 dem öffentlichen Internet zugänglich gemacht. IP-Adressen können nicht geändert werden, aber Sie können Instanzen mit [Additional IP-Adressen](/links/network/additional-ip) ausstatten ([einschließlich Ihrer eigenen Adressen](/links/network/byoip)) sowie mit einem [vRack](/links/network/vrack) verbinden.

**Private Mode**

Instanzen im privaten Modus können nur über einen [Gateway Dienst](/links/public-cloud/gateway) oder [Load Balancer](/links/public-cloud/load-balancer), sowie  [Floating IP-Adressen](/links/public-cloud/floating-ip) dem öffentlichen Internet zugänglich gemacht werden.

Weitere Informationen finden Sie in unseren Anleitungen im Bereich [Public Cloud Network Services](/products/public-cloud-network). Unsere [Seite mit Erläuterungen](/pages/public_cloud/public_cloud_network_services/concepts-01-public-cloud-networking-concepts) bietet eine Einführung in das Thema Public Cloud Networking.

**Local Private Mode**

Der lokale private Modus ist nur verfügbar, wenn Sie eine Instanz in einer **Local Zone** erstellen. Instanzen können direkt über IPv4/IPv6 dem öffentlichen Internet zugänglich gemacht werden. Nur Instanzen derselben Local Zone können über private Netzwerke verbunden werden. Local Zones sind nicht mit dem [vRack](/links/network/vrack) kompatibel. In diesem Modus stellt DHCP Ihren Instanzen automatisch IP-Adressen zur Verfügung.

Weitere Informationen finden Sie auf der [Webseite zu Local Zones](/links/public-cloud/local-zones).

///

<a name="create-instance"></a>

### Schritt 4: Instanz erstellen

> [!primary]
>
> Die Erstellung einer Instanz im OVHcloud Kundencenter erfordert einen öffentlichen SSH-Schlüssel (ausgenommen Windows-Instanzen).
>
> Starten Sie mit [Schritt 1](#create-ssh) und [Schritt 2](#import-ssh) dieser Anleitung, wenn Sie keine verfügbaren SSH-Schlüssel haben.
>

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus.

![Control Panel](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Klicken Sie in **Start** auf `Instanz erstellen`{.action}.

![instance creation](images/24-instance-creation01.png){.thumbnail}

<a name="model"></a>

#### Schritt 4.1: Modell auswählen

Im ersten Schritt wählen Sie ein Instanz-Modell (auch *Flavour* genannt), welches die Ressourcen der Instanz definiert. Klicken Sie auf den Tab mit der relevantesten Ressource für Ihre Bedürfnisse, um unsere optimierten Instanz-Modelle zu finden.

![instance model](images/24-instance-creation02.png){.thumbnail}

Im Bereich `Discovery`{.action} bieten wir Instanzen mit geteilten Ressourcen zu günstigen Preisen, ideal zum Einstieg in die Public Cloud oder etwa zum Testen einer Web-Anwendung.

Instanz-Modelle vom Typ `Metal`{.action} stellen dedizierte physische Ressourcen bereit.

> [!primary]
>
> Die Verfügbarkeit Ihrer Public Cloud Ressourcen wird anfänglich aus Gründen der Kostenkontrolle und Sicherheit begrenzt. Sie können diese Quotas überprüfen, indem Sie in der linken Navigationsleiste unter **Project Management** auf `Quota and Regions`{.action} klicken. Weitere Informationen finden Sie in der [dedizierten Dokumentation](/pages/public_cloud/compute/increasing_public_cloud_quota).
>
> Beachten Sie, dass Sie nach der Erstellung Ihrer Instanz ein **Upgrade** durchführen können, um mehr Ressourcen zur Verfügung zu stellen. Der Wechsel zu einem kleineren Modell ist mit einer regulären Variante jedoch nicht möglich. Weitere Informationen zu diesem Thema finden Sie im folgenden**Schritt 4.4**.
>

#### Weitere Informationen

/// Details | Instanz-Modellkategorien

| Typ | Garantierte Ressourcen | Verwendungshinweise |
| :---         |     :---:      |          :--- |
| General Purpose   | ✓     | Entwicklungsserver, Web- oder Geschäftsanwendungen    |
| Compute Optimized     | ✓       | Videokodierung oder anderes High Performance Computing      |
| Memory Optimized   | ✓     | Datenbanken, Analysen und In-Memory-Berechnungen    |
| GPU     | ✓       | Massive-Parallel-Processing-Leistung für spezialisierte Anwendungen (Rendering, Big Data, Deep Learning, etc.)       |
| Discovery    | -       | Auf geteilten Ressourcen gehostet, für Test- und Entwicklungsumgebungen      |
| Storage Optimized   | ✓     | Optimiert für Disk-Datentransfer   |
| Metal | ✓ | Dedizierte Ressourcen mit direktem Zugriff auf Rechen-, Speicher- und Netzwerkressourcen |

///

/// details | Regionen und Local Zones

**Regionen**

Eine **Region** wird definiert als ein Standort in der Welt, der aus einem oder mehreren Rechenzentren besteht, in denen Dienste von OVHcloud gehostet werden. Weitere Informationen zu Regionen, der geografischen Verteilung und der Verfügbarkeit von Diensten finden Sie auf unserer [dedizierten Webseite](/links/public-cloud/regions-pci) und der [Webseite zur OVHcloud Infrastruktur](/links/infrareg).

**Lokale Zonen**

Local Zones sind eine Erweiterung von **Regionen**, die OVHcloud Dienste näher an bestimmten Standorten platziert, was zu reduzierten Latenzen und einer verbesserten Anwendungsleistung führt. Weitere Informationen finden Sie auf der [Webseite zu Local Zones](/links/public-cloud/local-zones) und in der [Dokumentation zur Dienstverfügbarkeit für Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

///

<a name="region"></a>

#### Schritt 4.2: Standort auswählen

Wählen Sie eine [Region](/links/public-cloud/regions-pci) aus, die Ihren Benutzern oder Kunden am nächsten ist. Diese Option kann abhängig von der Modellauswahl in **Schritt 4.1** eingeschränkt sein. Wenn Sie in diesem Schritt eine **Local Zone** auswählen, gelten für die Instanz Netzwerkbeschränkungen (siehe [Schritt 3](#networking-modes)).

Weitere Informationen finden Sie auf der [Webseite zu Local Zones](/links/public-cloud/local-zones) und in der [Dokumentation zur Dienstverfügbarkeit für Local Zones](/pages/public_cloud/compute/local-zones-capabilities-limitations).

![Region auswählen](images/24-instance-creation03.png){.thumbnail}

<a name="image"></a>

#### Schritt 4.3: Image auswählen

Klicken Sie auf den passenden Tab und wählen Sie ein Betriebssystem für Ihre Instanz mithilfe der Dropdown-Menüs aus.

![image selection](images/24-instance-creation04.png){.thumbnail}

Welche Images in diesem Schritt verfügbar sind, hängt von den in den vorherigen Schritten getroffenen Entscheidungen ab, also der Kompatibilität mit dem Instanz-Modell und der regionalen Verfügbarkeit. Wenn Sie beispielsweise ein Windows-Betriebssystem auswählen möchten und auf dem Tab für Windows keine Optionen verfügbar sind, müssen Sie die Auswahl in den vorherigen Schritten ändern.

> [!primary]
>
> Wenn Sie sich für ein Betriebssystem entscheiden, für das eine kostenpflichtige Lizenz erforderlich ist, werden diese Kosten automatisch in der Abrechnung des Projekts berücksichtigt.
>

Dieser Schritt erfordert außerdem **einen öffentlichen SSH-Schlüssel** (ausgenommen Windows-Instanzen). Sie haben 2 Optionen:

- Einen öffentlichen Schlüssel verwenden, der bereits im OVHcloud Kundencenter gespeichert ist
- Einen öffentlichen Schlüssel direkt eingeben

Klicken Sie auf die Tabs, um die Erläuterungen anzuzeigen:

> [!tabs]
> **Gespeicherten Schlüssel verwenden**
>>
>> Um einen in Ihrem OVHcloud Kundencenter gespeicherten Schlüssel hinzuzufügen (siehe [Schritt 2](#import-ssh)), wählen Sie ihn in der Liste aus.<br><br>
>>![key selection](images/24-instance-creation05.png){.thumbnail}<br>
>>
> **Schlüssel direkt eingeben**
>>
>> Um einen öffentlichen Schlüssel durch manuelles Einfügen der Schlüsselzeichenfolge zu verwenden, klicken Sie auf `Schlüssel hinzufügen`{.action}.<br><br>
>>![key selection](images/24-instance-creation06.png){.thumbnail}<br>
>> Geben Sie einen Namen für den Schlüssel und die Schlüsselzeichenfolge in die entsprechenden Felder ein. Klicken Sie dann auf `Weiter`{.action}.<br><br>
>>![key selection](images/24-instance-creation07.png){.thumbnail}<br>
>> Bevor Sie auf `Weiter`{.action} klicken, können Sie optional den Button `Schlüssel hinzufügen`{.action} verwenden, um diesen Schlüssel im OVHcloud Kundencenter zu speichern (siehe [Schritt 2](#import-ssh)).
>>

<a name="configuration"></a>

#### Schritt 4.4: Konfigurieren der Instanz

![instance select](images/24-instance-creation08.png){.thumbnail}

Dieser Schritt umfasst mehrere Konfigurationsoptionen. Klicken Sie auf die Tabs, um Details anzuzeigen:

> [!tabs]
> **1: Anzahl der zu erstellenden Instanzen**
>>
>> Sie können mehrere Instanzen auf der Grundlage der in den Erstellungsschritten getroffenen Auswahl erstellen; es gelten jedoch [Ressourcenkontingentsgrenzen](/pages/public_cloud/compute/increasing_public_cloud_quota).<br>
>>
> **2: Flexible Instanz**
>>
>> Wenn das ausgewählte Modell kompatibel ist, können Sie eine **Flex-Instanz** erstellen. Mit dieser Option können Sie später auf ein kleineres Modell wechseln (und sogar eine andere Modellkategorie auswählen), aber die Instanz ist permanent auf **50 GB Speicherplatz** begrenzt, unabhängig von anderen Upgrades oder Downgrades.<br>
>>
> **3: Name der Instanz**
>>
>> Geben Sie einen Anzeigenamen für Ihre Instanz ein. Der Standardwert ist die kommerzielle Referenz des Instanz-Modells..<br>
>>
> **4: Post-Installation-Skript**
>>
>> Sie können [Ihr Skript](/pages/public_cloud/compute/launching_script_when_creating_instance) in diesem Feld hinzufügen.<br>
>>
> **5: Automatisches Backup der Instanz**
>>
>> Sie können [automatische Backups](/pages/public_cloud/compute/save_an_instance) aktivieren, indem Sie diese Option auswählen. Beachten Sie die angezeigten Kosteninformationen und weiteren Details hierzu.
>>

<a name="network"></a>

#### Schritt 4.5: Netzwerk konfigurieren

In diesem Schritt legen Sie den Public Cloud-Netzwerkmodus fest, den Sie basierend auf den Informationen in [Schritt 3](#network) ausgewählt haben. Ihre Optionen hängen von der [Auswahl des Standorts](#region) für die Instanz (**Region** oder **Local Zone**) ab.

##### Regionen

> [!tabs]
> **Private Mode**
>>
>> Die Instanz kann vollständig privat bleiben.<br><br>
>>![network type](images/24-instance-creation09.png){.thumbnail}<br>
>> Sie können die Instanz mit einem [privaten Netzwerk](#networking-modes) und einer [Floating IP](/links/public-cloud/floating-ip) verbinden. Es wird keine dedizierte öffentliche IP-Adresse angefügt.<br><br>
>>![network type](images/24-instance-creation10.png){.thumbnail}<br>
>> Wenn Sie auf `Neues privates Netzwerk erstellen`{.action} klicken, wird die Erstellung der Instanz unterbrochen und muss neu begonnen werden.<br>
>>
> **Public Mode**
>>
>> Die Instanz wird direkt über IPv4/IPv6 dem öffentlichen Internet zugänglich gemacht<br><br>
>>![network type](images/24-instance-creation11.png){.thumbnail}<br>
>> Sie können die Instanz zusätzlich über das Dropdown-Menü mit einem [privaten Netzwerk](#networking-modes) (vRack) verbinden.<br>
>> Wenn Sie auf `Neues privates Netzwerk erstellen`{.action} klicken, wird die Erstellung der Instanz unterbrochen und muss neu begonnen werden.
>>

Klicken Sie auf `Weiter`{.action}, um zum letzten Schritt zu gelangen.

##### Local Zones

Sie können die Instanz mit einem privaten Netzwerk verbinden, sie öffentlich zugänglich machen oder beides.

![network type](images/24-instance-creation12.png){.thumbnail}

> [!tabs]
> **Öffentliches Netzwerk**
>>
>> Mit Auswahl der Option `Öffentliches Netzwerk` wird die Instanz direkt über IPv4/IPv6 dem öffentlichen Internet zugänglich gemacht.<br>
>> Zusätzlich können Sie die Instanz mit einem [privaten Netzwerk](#networking-modes) (nicht kompatibel mit vRack) verbinden, indem Sie `Lokales privates Netzwerk kompatibel mit Local Zones` auswählen (siehe Tab **Lokales privates Netzwerk**).
>>
> **Lokales privates Netzwerk**
>>
>> Aktivieren Sie die Option `Lokales privates Netzwerk kompatibel mit Local Zones`. Wenn Sie **diese Option auswählen, ohne `Öffentliches Netzwerk` auszuwählen**, bleibt die Instanz vollständig privat und wird nur mit einem [privaten Netzwerk](#networking-modes) (nicht kompatibel mit vRack) verbunden. Wählen Sie ein bestehendes Netzwerk aus der Liste der Option `Vorhandenes privates Netzwerk zuweisen` oder erstellen Sie ein neues Netzwerk für die Local Zone, indem Sie `Ein lokales privates Netzwerk erstellen` auswählen (unterbricht nicht den Erstellungsprozess der Instanz).<br><br>
>>![network type](images/24-instance-creation13.png){.thumbnail}
>>

Klicken Sie auf `Weiter`{.action}, um zum letzten Schritt zu gelangen.

<a name="billing"></a>

#### Schritt 4.6: Abrechnungszeitraum auswählen

![Abrechnungsmodus](images/24-instance-creation14.png){.thumbnail}

> [!primary]
>
> Beachten Sie, dass je nach gewähltem Instanz-Modell die **stündliche** Abrechnung als einzige Auswahl erscheinen kann. Dies ist eine vorübergehende Einschränkung; neue Abrechnungsoptionen für die Public Cloud werden demnächst verfügbar sein.
>

> [!tabs]
> **Monatliche Abrechnung**
>>
>> Die monatliche Abrechnung führt auf Dauer zu geringeren Kosten, aber **kann nach der Erstellung der Instanz nicht auf die stündliche Abrechnung umgestellt werden**.<br>
>>
> **Stündliche Abrechnung**
>>
>> Die stündliche Abrechnung ist die beste Wahl, wenn die Dauer der Nutzung nicht exakt abschätzbar ist. Wenn Sie sich später entscheiden, die Instanz für eine längere Nutzung beizubehalten, können Sie jederzeit [auf ein monatliches Abonnement umstellen](/pages/account_and_service_management/managing_billing_payments_and_services/changing_hourly_monthly_billing).<br>
>> Die Instanz wird in Rechnung gestellt, solange sie **nicht gelöscht** wird, unabhängig von der produktiven Nutzung der Instanz.
>>

Details hierzu finden Sie in unserer dedizierten Abrechnungsdokumentation:

- [Public Cloud Abrechnung](/pages/public_cloud/compute/analyze_billing)
- [FAQ zur monatlichen Abrechnung](/pages/public_cloud/compute/faq_change_of_monthly_billing_method)

Wenn die Konfiguration Ihrer Instanz abgeschlossen ist, klicken Sie auf den Button `Instanz erstellen`{.action}. Die Bereitstellung des Dienstes kann einige Minuten in Anspruch nehmen.

<a name="connect-instance"></a>

### Schritt 5: Verbindung mit der Instanz herstellen

Die Anweisungen in diesem Abschnitt beziehen sich auf Remoteverbindungen mittels **Open SSH** und **RDP** über ein öffentliches Netzwerk (Internet).

Beachten Sie, dass wir alternative Zugriffsmöglichkeiten (hauptsächlich zur Fehlerbehebung) anbieten, die nur über Ihr OVHcloud Kundencenter verfügbar sind:

- [VNC-Konsole](#vnc-console)
- [Rescue-Modus](/pages/public_cloud/compute/put_an_instance_in_rescue_mode)

> [!primary]
>
> Wenn Sie ein **Betriebssystem mit Anwendung** ("Distribution + Apps") installiert haben, beachten Sie unsere [Anleitung zu den ersten Schritten](/pages/public_cloud/compute/apps_first_steps) sowie die offizielle Dokumentation des entsprechenden Herausgebers.
>

<a name="verify-status"></a>

#### 5.1: Überprüfen des Status der Instanz im Kundencenter

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus.

![Kundencenter](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Wählen Sie `Instances`{.action} in der linken Navigationsleiste unter **Compute** aus. Ihre Instanz ist bereit, wenn der Status in der Tabelle `Aktiviert` anzeigt. Wenn die Instanz vor kurzem erstellt wurde und einen anderen Status hat, klicken Sie auf den Button "Aktualisieren" links neben dem Suchfilter.

![Seite Instanzen](images/24-instance-connect01.png){.thumbnail}

Klicken Sie auf den Instanznamen in dieser Tabelle, um das `Dashboard`{.action} zu öffnen, auf der Sie alle Instanzdetails finden können. Weitere Informationen zu den auf dieser Seite verfügbaren Funktionen finden Sie in unserer Anleitung [Verwaltung von Instanzen im Kundencenter](/pages/public_cloud/compute/first_steps_with_public_cloud_instance).

Ein **Benutzer mit erhöhten Rechten (*sudo*) wird automatisch auf der Instanz erstellt**. Der Benutzername entspricht dem installierten Image, z.B. "ubuntu", "debian", "fedora", etc. Sie können den Benutzernamen auf der rechten Seite auf dem `Dashboard`{.action} im Abschnitt **Netzwerke** überprüfen.

![Seite Instanzen](images/24-instance-connect02.png){.thumbnail}

Wenn Ihr [SSH-Schlüsselpaar korrekt konfiguriert](#create-ssh) ist, können Sie sich nun mit dem vorkonfigurierten Benutzer und Ihrem SSH-Schlüssel bei der Instanz anmelden. Die einzelnen Schritte dazu finden Sie in den nachfolgenden Abschnitten.

> [!primary]
>
> Der Zugriff über die **VNC-Konsole** auf eine neue, im Kundencenter erstellte Instanz mit GNU/Linux OS muss zuerst aktiviert werden, wie [weiter unten in dieser Anleitung](#vnc-console) beschrieben.
>
> Diese Anleitung behandelt nicht die Konfiguration privater Netzwerke für Instanzen. Informationen hierzu finden Sie in unserer Dokumentation zu [Public Cloud Network Services](/products/public-cloud-network).
>

<a name="login-linux"></a>

#### 5.2: Erste Verbindung auf einer Instanz unter GNU/Linux Betriebssystem

> [!primary]
>
> Wenn Sie Fehlermeldungen bezüglich Ihrer **SSH-Schlüssel** erhalten, überprüfen Sie mithilfe der Informationen in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#create-ssh-key), ob Ihr lokales Gerät über einen korrekt konfigurierten privaten SSH-Schlüssel verfügt.  
> Wenn Sie weiterhin auf Fehler stoßen, können Sie das Schlüsselpaar mithilfe [dieser Anleitung](/pages/public_cloud/compute/replacing_lost_ssh_key) ersetzen.
>
> Wenn Sie eine Instanz ohne SSH-Schlüssel über die [OVHcloud API](/pages/manage_and_operate/api/first-steps) oder das [OpenStack Horizon Interface](/pages/public_cloud/compute/create_instance_in_horizon) erstellt haben, können Sie Ihrer Instanz nur über den [Rescue-Modus](/pages/public_cloud/compute/put_an_instance_in_rescue_mode) einen SSH-Schlüssel hinzufügen, indem Sie den Anweisungen in [dieser Anleitung](/pages/public_cloud/compute/replacing_lost_ssh_key) folgen.
>

Sie können direkt nach der Instanz-Erstellung über das Kommandozeileninterface Ihres lokalen Systems (`Terminal`, `Command prompt`, `Powershell`, etc.) über SSH auf Ihre Instanz zugreifen:

```bash
ssh username@IPv4_instance
```

Beispiel:

```bash
ssh ubuntu@203.0.113.101
```

[Abhängig von Ihrer Konfiguration](#create-ssh) müssen Sie eine Passphrase eingeben, die Ihren privaten Schlüssel schützt, oder den Pfad zu Ihrer Schlüsseldatei angeben. Weitere Informationen finden Sie in unserer [Anleitung zu SSH-Schlüsseln](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#multiplekeys).

Wenn Sie eine andere SSH-Client-Software verwenden, folgen Sie deren Benutzerdokumentation. Ein Beispiel für die Verwendung der Open-Source-Lösung `PuTTY` finden Sie in [dieser Anleitung](/pages/bare_metal_cloud/dedicated_servers/creating-ssh-keys-dedicated#useputty).

Fahren Sie mit [Schritt 6](#manage-access) dieser Anleitung fort.

<a name="windows"></a>

#### 5.3: Windows-Instanzen

##### 5.3.1: Installation einer Windows-Instanz abschließen

Nachdem Sie überprüft haben, dass die Windows-Instanz [installiert](#verify-status) ist, öffnen Sie den Tab `VNC-Konsole`{.action} in Ihrem [OVHcloud Kundencenter](/links/manager).

Anschließend müssen Sie die Erstkonfiguration Ihres Windows-Betriebssystems abschließen. Folgen Sie dazu den Schritten in den Tabs:

> [!tabs]
> 1. **Lokale Einstellungen**
>>
>> Konfigurieren Sie **Land/Region**, die bevorzugte **Windows-Sprache** und **Tastaturlayout**. Klicken Sie dann unten rechts auf `Next`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_locale.png){.thumbnail}<br>
>>
> 2. **Administratorpasswort**
>>
>> Geben Sie ein Passwort für den Windows-Account `Administrator` ein und bestätigen Sie. Klicken Sie dann auf `Finish`{.action}.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_admin.png){.thumbnail}<br>
>>
> 3. **Anmeldebildschirm**
>>
>> Die Einstellungen werden angewendet, und der Anmeldebildschirm wird angezeigt. Klicken Sie auf `Send CtrlAltDel`{.action} oben rechts, um sich einzuloggen.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_vnc.png){.thumbnail}<br>
>>
> 4. **Administrator-Login**
>>
>> Geben Sie das im vorherigen Schritt erstellte Passwort des Accounts `Administrator` ein und klicken Sie auf den `Pfeil`.<br><br>
>>![VNC](/pages/assets/screens/other/windows/windows_login.png){.thumbnail}
>>

<a name="login-windows"></a>

##### 5.3.2: Remote-Verbindung von Windows aus

Auf Ihrem lokalen Windows-Gerät können Sie sich über die Client-Anwendung `Remote Desktop Connection` mit Ihrer Instanz verbinden.

![RDP connection](/pages/assets/screens/other/windows/windows_rdp.png){.thumbnail}

Geben Sie die IPv4-Adresse Ihrer Instanz und dann Ihre Kennung und Ihre Passphrase ein. In der Regel wird eine Warnmeldung angezeigt, in der Sie aufgefordert werden, die Verbindung aufgrund eines unbekannten Zertifikats zu bestätigen. Klicken Sie auf `Ja`{.action}, um sich anzumelden.

> [!primary]
>
> Wenn bei diesem Verfahren Probleme auftreten, überprüfen Sie, ob Remoteverbindungen (RDP) auf Ihrem Gerät zugelassen sind, indem Sie die Systemeinstellungen, Firewallregeln und mögliche Netzwerkeinschränkungen überprüfen.
>

<a name="login-other"></a>

##### 5.3.3: Remote-Verbindung von einem anderen Betriebssystem aus

Für Verbindungen von einem anderen Desktop-Betriebssystem als Windows ist in der Regel eine Client-Software erforderlich, die mit dem `Remote Desktop Protocol` (RDP) kompatibel ist. Einige Desktop-Umgebungen und Betriebssysteme verfügen möglicherweise über einen integrierten nativen Client.

Unabhängig davon, welchen Client Sie verwenden, benötigen Sie nur die IP-Adresse Ihrer Instanz und das Passwort des `Administrator`-Accounts zur Anmeldung.

**Anwendungsbeispiel**

Die freie und Open Source Software `Remmina Remote Desktop Client` ist für viele GNU/Linux Desktop-Distributionen verfügbar. Wenn Sie Remmina nicht im Software-Manager Ihrer Desktop-Umgebung finden, können Sie die Anwendung von der [offiziellen Website](https://remmina.org/) beziehen.

![Linux Remote](images/24-rem-connect01.png){.thumbnail}<br>

> [!tabs]
> 1. **Verbindung**
>>
>> Öffnen Sie Remmina und stellen Sie sicher, dass das Verbindungsprotokoll auf "RDP" eingestellt ist. Geben Sie die IPv4-Adresse Ihrer Public Cloud Instanz ein und drücken Sie die Eingabetaste.<br><br>
>>![linux remote](images/24-rem-connect02.png){.thumbnail}<br>
>>
> 2. **Authentifizierung**
>>
>> Wenn eine Zertifikatwarnung angezeigt wird, klicken Sie auf `Yes`{.action}. Geben Sie den Benutzernamen und das Kennwort für Windows ein, und klicken Sie auf `OK`{.action}, um die Verbindung herzustellen.<br><br>
>>![linux remote](images/24-rem-connect03.png){.thumbnail}<br>
>>
> 3. **Einstellungen**
>>
>> Sie finden einige nützliche Einstellungsoptionen in der linken Symbolleiste. Klicken Sie beispielsweise auf das Symbol `Toggle Dynamic Resolution Update`{.action}, um die Auflösung des Remote-Fensters zu verbessern.<br><br>
>>![linux remote](images/24-rem-connect04.png){.thumbnail}
>>

<a name="vnc-console"></a>

#### 5.4: Zugriff auf die VNC-Konsole

Mit der VNC-Konsole können Sie sich auf Ihren Instanzen einloggen, auch wenn keine anderen Zugriffsmöglichkeiten verfügbar sind.

Loggen Sie sich in Ihr [OVHcloud Kundencenter](/links/manager) ein, gehen Sie in den Bereich `Public Cloud`{.action} und wählen Sie das betreffende Public Cloud Projekt aus.

![Kundencenter](/pages/assets/screens/control_panel/product-selection/public-cloud/tpl-pci-en.png){.thumbnail}

Wählen Sie `Instanzen`{.action} in der linken Navigationsleiste unter **Compute** aus. Klicken Sie auf den Instanznamen und öffnen Sie den Tab `VNC-Konsole`{.action}.

![VNC-Konsole](/pages/assets/screens/control_panel/product-selection/public-cloud/cp-pci-vnc-login.png){.thumbnail}

> [!tabs]
> **Instanz mit GNU/Linux Betriebssystem**
>>
>> Für die Verwendung der VNC-Konsole muss auf der Instanz ein **Benutzerkonto mit Passwort** konfiguriert sein. Um ein Passwort für das vorkonfigurierte Konto festzulegen, folgen Sie den Schritten in [Abschnitt 6.1.1 unten](#set-password).
>>
> ***Windows-Instanz**
>>
>> Melden Sie sich mit Ihren Logindaten der Windows-Instanz an. Bei einer aktiven Sitzung haben Sie unmittelbar Zugriff. Es besteht eine spürbare Latenz im Vergleich zu einer RDP-Verbindung.
>>

<a name="manage-access"></a>

### Schritt 6: Erste Schritte mit einer neuen Instanz

> [!primary]
>
>**Windows-Instanzen**
>
> Für Instanzen, auf denen ein Windows-Betriebssystem installiert ist, sind keine weiteren Schritte erforderlich.
>
> Weitere Informationen finden Sie unten im Abschnitt [Weiterführende Informationen](#go-further).
>

<a name="user-mgmt"></a>

#### 6.1: Benutzerverwaltung

<a name="set-password"></a>

> [!primary]
>
> Beim Konfigurieren von Benutzer-Accounts und Berechtigungsstufen für eine Instanz empfehlen wir, die Informationen in unserer Anleitung zu [Benutzer-Accounts](/pages/bare_metal_cloud/dedicated_servers/changing_root_password_linux_ds) zu verwenden.
>

##### 6.1.1: Ein Passwort für den aktuellen Benutzer-Account festlegen

Wenn Sie [auf der Instanz eingeloggt sind](#manage-access), vergeben Sie ein Passwort für den aktuellen Benutzer, indem Sie folgenden Befehl verwenden:

```bash
sudo passwd
```

Geben Sie eine Passphrase ein, bestätigen Sie mit `Enter` und wiederholen Sie den Vorgang.

```console
New password: 
Retype new password:
passwd: password updated successfully
```

**Dies reicht aus, um Logins über die [VNC-Konsole](#vnc-console) in Ihrem [OVHcloud Kundencenter](/links/manager) zu aktivieren**. Remote-Logins über SSH mit diesem Passwort sind jedoch weiterhin **deaktiviert**.

<a name="remote-password"></a>

#### 6.1.2: Aktivieren von Remote-Logins mit Passwort (optional)

> [!warning]
>
> Dieser Schritt ist nicht notwendig und sollte nur ausgeführt werden, wenn Sie einen triftigen Grund haben, diesen Zugriffsweg zu aktivieren; zum Beispiel, wenn Sie sich vorübergehend von einem Gerät aus auf der Instanz einloggen müssen, auf dem Ihr privater SSH-Schlüssel nicht gespeichert ist.
>
> Das folgende Beispiel zeigt eine temporäre Lösung anhand einer Instanz, auf der Ubuntu installiert ist. Beachten Sie, dass die Befehle möglicherweise an Ihr Betriebssystem angepasst werden müssen. Es wird nicht empfohlen, diese Konfiguration dauerhaft beizubehalten, weil das System damit für SSH-basierte Angriffe geöffnet wird und dies ein potenzielles Sicherheitsrisiko bedeutet.
>

Öffnen Sie nach dem [Einloggen auf Ihrer Instanz](#manage-access) die betreffende Konfigurationsdatei mit einem Texteditor. Beispiel:

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

Machen Sie diese Änderungen rückgängig, um zur schlüsselbasierten Login-Methode zurückzukehren.

<a name="add-keys"></a>

#### 6.2: Zusätzliche SSH-Schlüssel

Wenn Sie weiteren Benutzer-Accounts den Zugriff auf die Instanz erlauben möchten, gehen Sie wie folgt vor:

- Erstellen Sie den Account auf der Instanz.
- Erzuegen Sie ein neues SSH-Schlüsselpaar auf dem Gerät des Benutzers.
- Fügen Sie der Instanz den öffentlichen Schlüssel hinzu.

Eine detaillierte Erklärung dieser Schritte finden Sie in unserer [Anleitung](/pages/public_cloud/compute/configuring_additional_ssh_keys).

<a name="go-further"></a>

## Weiterführende Informationen

[Aktivieren einer Windows-Lizenz für eine Instanz im privaten Modus](/pages/public_cloud/compute/activate-windows-license-private-mode)

[Zurücksetzen des Windows-Administratorkennworts](/pages/bare_metal_cloud/virtual_private_servers/resetting_a_windows_password)

[Verwaltung von Instanzen im Kundencenter](/pages/public_cloud/compute/first_steps_with_public_cloud_instance)

[Erste Schritte mit OpenStack](/pages/public_cloud/compute/prepare_the_environment_for_using_the_openstack_api)

[Erste Schritte mit Horizon](/pages/public_cloud/compute/introducing_horizon)


Wenn Sie Schulungen oder technische Unterstützung bei der Implementierung unserer Lösungen benötigen, wenden Sie sich an Ihren Vertriebsmitarbeiter oder klicken Sie auf [diesen Link](/links/professional-services), um einen Kostenvoranschlag zu erhalten und eine persönliche Analyse Ihres Projekts durch unsere Experten des Professional Services Teams anzufordern.

Treten Sie unserer [User Community](/links/community) bei.