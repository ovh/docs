---
title: 'Eine Instanz über das Horizon-Interface erstellen'
excerpt: 'Erfahren Sie hier, wie Sie eine Instanz über das Horizon-Interface erstellen'
updated: 2024-08-30
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Sie haben die Möglichkeit, Instanzen direkt über das Horizon-Interface zu erstellen. So können Sie beispielsweise mehrere Instanzen erzeugen oder eine Sicherheitsgruppe für Ihre Instanzen einrichten.

**Diese Anleitung erklärt, wie Sie eine Instanz über das Horizon-Interface erstellen.**

## Voraussetzungen

- Sie haben ein [Public Cloud](/pages/public_cloud/compute/create_a_public_cloud_project), Projekt in Ihrem OVHcloud Kunden-Account erstellt.
- Sie haben Zugang zum [Horizon-Interface](/pages/public_cloud/compute/introducing_horizon). 

## In der praktischen Anwendung

### Ein privates Netzwerk erstellen

Im Allgemeinen empfehlen wir Ihnen, vor der Erstellung einer Instanz ein privates Netzwerk zu erstellen. Sie können dieses Netzwerk später mit Ihrer Instanz verbinden.

Loggen Sie sich zunächst im Horizon-Interface ein. Wenn Sie hierbei Hilfe brauchen, lesen Sie unsere [Anleitung](/pages/public_cloud/compute/introducing_horizon).

Klicken Sie dann im linken Menü auf `Network`{.action} und anschließend auf `Networks`{.action}.

![network](images/create-network.png){.thumbnail}

Klicken Sie auf `Create Network`{.action}

![network](images/create-network-1.png){.thumbnail}


> [!tabs]
> 1. **Network (Netzwerk)**
>>
>> **Network Name:** Geben Sie einen Namen für Ihr Netzwerk ein.<br>
>> **Enable Admin State:** Lassen Sie diese Option aktiviert, um das Netzwerk zu aktivieren.<br>
>> **Create Subnet:** Lassen Sie diese Option aktiviert, um das Subnetz zu erstellen.<br>
>> **Availability Zone Hints:** Behalten Sie die Standardoption bei.<br><br>
>>![network](images/network_information.png){.thumbnail}<br>
>>
> 2. **Subnet (Subnetz)**
>>
>> **Subnet Name:** Geben Sie einen Namen für Ihr Subnetz ein.<br>
>> **Network Address:** Wählen Sie einen privaten Netzwerkbereich aus. Beispiel: `192.168.0.0/24`.<br>
>> **IP Version:** Überlassen Sie diesen Wert IPv4.<br>
>> **Gateway IP:** Optional. Wenn diese Option nicht aktiviert ist, wird automatisch eine IP-Gateway-Adresse ausgewählt.<br>
>> **Disable Gateway:** Lassen Sie diese Option deaktiviert.<br><br>
>>![subnet](images/subnet_information.png){.thumbnail}<br>
>>
> 3. **Subnet Details (Subnetzdetails)**
>>
>> **Enable DHCP:** Lassen Sie diese Option aktiviert.<br>
>> **Allocation Pools:** Optional. Sie können den Bereich angeben, in dem IP-Adressen ausgewählt werden.<br>
>> **DNS Name Servers:** Optional. Sie können einen beliebigen DNS-Namenserver angeben.<br>
>> **Host Routes:** Optional. Sie können eine beliebige Hostroute angeben.<br><br>
>>![KVM](images/subnetdetails_information.png){.thumbnail}<br>
>>


### Instanz erstellen

Klicken Sie dann im linken Menü auf `Compute`{.action} und anschließend auf `Instances`{.action}.

![Instanz erstellen](images/create-instance-step1.png){.thumbnail}

Auf der angezeigten Seite können Sie die bereits gestarteten Instanzen einsehen. Um eine neue Instanz zu starten, klicken Sie auf den Button `Launch Instance`{.action}.

![Instanz erstellen](images/create-instance-step2.png){.thumbnail}

Geben Sie dann die angeforderten Informationen ein. Bitte beachten Sie, dass die Tabelle nicht vollständig ist.

**Details**

![createInstance](images/create-instance-step3.png){.thumbnail}

|Informationen|Details|
|---|---|
|Instance name|Geben Sie den gewünschten Namen für die Instanz an, die gestartet wird.|
|Description|Optional. Fügen Sie bei Bedarf eine Beschreibung hinzu.|
|Availability zone|Lassen Sie “nova” stehen (Standardauswahl).|
|Count|Geben Sie die Anzahl der zu erstellenden Instanzen ein|

**Source**

![createInstance](images/create-instance-step4.png){.thumbnail}


|Information|Details|
|---|---|
|Boot Source|Klicken Sie auf den Dropdownpfeil, um die Startquelle einer Instanz auszuwählen (z. B. *Image* oder *Instance Snapshot*).|
|Create New Volume|Aktivieren Sie diese Option, wenn Sie ein Volume erstellen möchten, auf das das angegebene Betriebssystemabbild kopiert wird.|
|Volume size (GB)|Wenn Sie ein Volume erstellen möchten, überlassen Sie die Größe dem System.|
|Delete Volume on Instance Delete|Sie können die Standardoption **No** beibehalten. Wenn **Yes** ausgewählt ist, wird beim Löschen der Instanz auch das Volume gelöscht.|
|Image name|Wählen Sie das Image der Instanz aus (nur beim Start von einem Image aus), indem Sie auf den Pfeil nach oben neben dem gewünschten Image klicken. In unserem Beispiel verwenden wir eine Auswahl von CentOS 7.|
|Instance Snapshot|Wählen Sie einen Snapshot einer Instanz aus (nur beim Start von einem Snapshot aus), indem Sie auf den Pfeil nach oben neben dem gewünschten Instanz-Snapshot-Image klicken.|

**Flavor**

![createInstance](images/create-instance-step5.png){.thumbnail}

Für Sie sind vorgefertigte *flavors* verfügbar. Wählen Sie im Tab `Available` die *flavor* Ihrer Wahl aus.

**Networks**

|Information|Details|
|---|---|
|Network|Wählen Sie in der Liste der verfügbaren Netzwerke das Netzwerk(e) für die Instanz aus, die Sie erstellen möchten |
|Ext-Net|Stellt das öffentliche Netzwerk dar.|
|Mynewnetwork|Stellt das private Netzwerk dar, das am Anfang dieser Anleitung erstellt wurde.|

**Security Groups (Sicherheitsgruppen)**

![createInstance](images/create-instance-step7.png){.thumbnail}

Weitere Informationen finden Sie in [dieser Anleitung](/pages/public_cloud/compute/setup_security_group).

**Key Pairs**

> [!warning] 
>
> Obwohl das Feld "Key Pair" bei der Erstellung einer Instanz im Horizon-Interface nicht obligatorisch ist, ist die Speicherung eines SSH-Schlüssels notwendig, um sich mit einer Instanz verbinden zu können. Ohne SSH-Schlüssel müssen Sie die Instanz im Rescue-Modus neu starten, um ein Passwort zu erstellen oder einen SSH-Schlüssel in der entsprechenden Datei hinzuzufügen (Für weitere Informationen lesen Sie die Anleitung [Änderung des SSH-Schlüssels bei Verlust](/pages/public_cloud/compute/replacing_lost_ssh_key#in-der-praktischen-anwendung)).
>

![createInstance](images/create-instance-step8.png){.thumbnail}

In diesem Abschnitt können Sie ein Schlüsselpaar erstellen, ein Schlüsselpaar importieren oder ein vorhandenes Schlüsselpaar verwenden.

Weitere Informationen zum Erstellen eines SSH-Schlüssels finden Sie in [dieser Anleitung](/pages/public_cloud/compute/public-cloud-first-steps#create-ssh).


> [!tabs]
> **+ Create Key Pair**
>>
>> Klicken Sie auf die Schaltfläche `+ Create Key Pair`{.action}, um ein Schlüsselpaar zu erstellen. Bitte beachten Sie, dass bei dieser Option zusätzliche Schritte notwendig sind, bevor Sie sich mit der Instanz verbinden können, insbesondere wenn Sie die Putty-Software verwenden, um sich mit Ihrer Instanz zu verbinden. Lesen Sie [diesen Abschnitt](/pages/public_cloud/compute/public-cloud-first-steps#connect-instance) der entsprechenden Anleitung.
>>
>> **Key Pair Name:** Geben Sie einen Namen für Ihren Schlüssel ein.<br>
>> **Key Type:** Klicken Sie auf den `Dropdownpfeil` und wählen Sie `SSH Key`.<br>
>> Klicken Sie anschließend auf `Create Keypair`{.action}, um mit der Erstellung des Schlüssels zu beginnen.<br>
>>
>> Nachdem das Schlüsselpaar erstellt wurde, klicken Sie auf `Copy Private Key to Clipboard`{.action} und dann auf `Done`{.action}.<br><br>
>>![SSH-Schlüssel erstellen](images/create-ssh-key-1.png){.thumbnail}<br>
>>
>> Danach wird der neu erstellte Schlüssel automatisch ausgewählt. Klicken Sie auf `Launch Instance`{.action}, um mit der Erstellung Ihrer Instanz zu beginnen.<br><br>
>>
>>![Create Instance](images/launch-instance.png){.thumbnail}<br>
>>
> **Import Key Pair (Schlüsselpaar importieren)**
>>
>> Wenn Sie einen zuvor erstellten SSH-Schlüssel importieren möchten, klicken Sie auf `Import Key Pair`{.action}.
>>
>> **Key Pair Name:** Geben Sie einen Namen für Ihren Schlüssel ein.<br>
>> **Key Type:** Klicken Sie auf den `Dropdownpfeil` und wählen Sie `SSH Key`.<br>
>> **Load Public Key from a file (Öffentlichen Schlüssel aus Datei laden):** Klicken Sie auf `Browse`{.action}, um den Speicherort des öffentlichen Schlüssels auf Ihrem Computer anzugeben.<br>
>> **Public Key:** Kopieren Sie Ihren öffentlichen Schlüssel, und fügen Sie ihn hier ein.<br>
>> Klicken Sie auf `Import Key Pair`{.action}, um den Schlüssel zu importieren.<br><br>
>>![Import-Key-gerade](images/import-ssh-key.png){.thumbnail}<br>
>>
>> Nach Abschluss des Vorgangs wird der importierte Schlüssel automatisch ausgewählt. Klicken Sie auf `Launch Instance`{.action}, um mit der Erstellung Ihrer Instanz zu beginnen.<br><br>
>>
>>![Create Instance](images/launch-instance.png){.thumbnail}<br>

**Weitere Optionen**

Achtung, diese Optionen sind für die Erstellung einer Basisinstanz nicht zwingend erforderlich. Weitere Informationen zu diesen Optionen finden Sie in der [offiziellen OpenStack-Dokumentation](https://docs.openstack.org/horizon/latest/user/launch-instances.html){.external}.


|Information|Details|
|---|---|
|Custom script source|Geben Sie die Quelle in einen "direct entry" oder eine "file" ein.|
|Script data|Geben Sie den Skriptcode in das Eingabefeld ein (maximal 16 KB).|
|Script file|Klicken Sie auf `Browse`{.action}, um das Post-Installations-Skript auszuwählen.|
|Disk Partitioning|Wählen Sie zwischen "automatic" und "manual".|
|Configuration disk|Konfigurieren Sie OpenStack so, dass Metadaten auf einen bestimmten Konfigurationsdatenträger geschrieben werden, der beim Start an die Instanz angehängt wird.|

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
