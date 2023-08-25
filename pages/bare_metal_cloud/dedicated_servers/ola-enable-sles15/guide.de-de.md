---
title: "Konfigurieren der OVHcloud Link Aggregation in SLES 15"
excerpt: "Erfahren Sie hier, wie Sie OLA für Ihren SLES 15 Server aktivieren"
updated: 2023-03-07
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>


## Ziel

Die OVHcloud Link Aggregation (OLA) wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen redundant machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet.<br>


**Diese Anleitung erklärt, wie Sie Ihre NICs (Network Interface Controller) zusammenfassen, um sie mit OLA in SLES 15 zu verwenden.**

## Voraussetzungen

- Sie haben Ihre [Netzwerkkarte für die OVHcloud Link Aggregation im OVHcloud Kundencenter konfiguriert](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Da die NICs in OLA privat-zu-privat konfiguriert sind, ist es nicht möglich, sich via SSH mit dem Server zu verbinden. Verwenden Sie daher das IPMI-Tool, um auf den Server zuzugreifen.

Loggen Sie sich hierzu in Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein und wechseln Sie zum Bereich `Bare Metal Cloud`{.action}. Klicken Sie auf `Dedicated Server`{.action} und wählen Sie Ihren Server aus der Liste aus.

Klicken Sie anschließend auf den Tab `IPMI`{.action} (1) und dann auf den Button `Mit einem Java-Applet (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Ein JNLP-Applet wird heruntergeladen. Öffnen Sie es, um IPMI aufzurufen. Melden Sie sich mit gültigen Anmeldedaten für den Server an.

Bei Verwendung eines OVHcloud Templates werden die NICs standardmäßig mit *eth1* und *eth2* gekennzeichnet. Wenn Sie kein OVHcloud Template verwenden, können Sie die Namen Ihrer Schnittstellen mit dem folgenden Befehl ermitteln:

```bash
ip a
```

> [!primary]
>
> Mit diesem Befehl werden mehrere Interfaces ausgegeben. Wenn Sie Schwierigkeiten haben, die physischen NICs zu bestimmen: Die öffentliche IP-Adresse des Servers wird standardmäßig der ersten Schnittstelle zugeordnet.
>

Sobald die Namen Ihrer beiden Netzwerkkarten identifiziert sind, erstellen Sie die Netzwerkkartenbindung im Betriebssystem. Dazu muss ein *bond interface* konfiguriert werden. Erstellen Sie die Schnittstellendatei mit dem folgenden Befehl in einem Texteditor Ihrer Wahl:

```bash
vi /etc/sysconfig/network/ifcfg-bond0
```

Damit wird eine leere Textdatei geöffnet. Um die Aggregationsschnittstelle zu konfigurieren, fügen Sie folgende Zeilen in die Textdatei ein:

```bash
STARTMODE='onboot'
BOOTPROTO='static'
IPADDR='10.0.0.1/24'
BONDING_MASTER='yes'
BONDING_SLAVE_0='eth1'
BONDING_SLAVE_1='eth2'
BONDING_MODULE_OPTS='mode=802.3ad miimon=100 xmit_hash_policy=layer3+4'
```

> [!primary]
>
> Sie können jede gewünschte IP-Adresse privater Subnetze verwenden.
> Wenn Ihr Server über mehr als 2 Netzwerkschnittstellen verfügt, können Sie diese in die Konfiguration hinzufügen, indem Sie die Nummer des Parameters `BONDING_SLAVE_` erhöhen, zum Beispiel: `BONDING_SLAVE_2= eth3`.
>

Speichern und schließen Sie die Datei, sobald Sie bestätigt haben, dass die Informationen korrekt sind. Sie müssen nun beide physischen Interfaces konfigurieren. Standardmäßig existiert auf einem OVHcloud Server nur für *eth1* eine Konfigurationsdatei. Öffnen Sie ihn mit folgendem Befehl:

```bash
vi /etc/sysconfig/network/ifcfg-eth1
```

Standardmäßig wird die Datei folgenden Text anzeigen:

```bash
# Created by cloud-init on instance boot automatically, do not edit.
#
BOOTPROTO=dhcp4
IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE=auto
```

> [!warning]
>
> Die IP-Adressen sind für jeden Server verschieden.
>

Bearbeiten Sie den Dateiinhalt folgendermaßen:

```bash
BOOTPROTO='none'
#IPADDR6=2001:41d0:408:dd00::/56
LLADDR=10:70:fd:c5:14:00
STARTMODE='hotplug'
```

> [!primary]
>
> Die Hardware-Adresse (MAC-Adresse) der NIC kann mit dem zuvor verwendeten Befehl `ip a` gefunden werden. Es handelt sich um den Wert neben `link/ether` in der Ausgabe.
>

Ein *#* vor einer Zeile bedeutet, dass der Server diese Zeile beim Lesen der Datei überspringt. Ignorieren Sie daher diese Zeilen bei der Erstellung der Schnittstellendatei für *eth2*.

Erstellen Sie die Konfigurationsdatei für *eth2* mit folgendem Befehl:

```bash
vi /etc/sysconfig/network/ifcfg-eth2
```

Diese Datei ist leer. Fügen Sie folgenden Inhalt hinzu:

```bash
BOOTPROTO='none'
STARTMODE='hotplug'
LLADDR=0c:42:a1:a7:29:c2
```

Um den Vorgang abzuschließen, starten Sie den Netzwerkdienst mit folgendem Befehl neu:

```bash
wicked ifreload all
```

Um zu überprüfen, ob diese Aggregation funktioniert, pingen Sie einen anderen Server im gleichen vRack. Wenn das funktioniert, ist der Konfigurationsprozess abgeschlossen. Ist das nicht der Fall, überprüfen Sie Ihre Konfigurationen oder starten Sie den Server neu.

Sie können die über das Interface `ifcfg-bond0` verwendeten Einstellungen auch mit folgendem Befehl überprüfen:

```bash
/proc/net/bonding/bond0
```


## Weiterführende Informationen

[Konfiguration der OVHcloud Link Aggregation in Ihrem Kundencenter](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7](/pages/bare_metal_cloud/dedicated_servers/ola-enable-centos7)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019](/pages/bare_metal_cloud/dedicated_servers/ola-enable-w2k19)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
