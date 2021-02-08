---
title: 'Mehrere dedizierte Server im vRack konfigurieren'
slug: mehrere-dedizierte-server-im-vrack-konfigurieren
excerpt: 'Hier erfahren Sie, wie Sie mehrere dedizierte Server im vRack konfigurieren.'
section: vRack
---

**Stand 17.08.2018**

## Einleitung

Die vRack (Virtual Rack) Technologie erlaubt es, mehrere Server unabhängig von deren Anzahl und physischem Standort in unseren Datacentern virtuell zusammenzufassen und diese über einen virtuellen Switch im gleichen privaten Netzwerk miteinander zu verbinden. Ihre Server können so privat und gesichert in einem dedizierten VLAN untereinander kommunizieren.

**In dieser Anleitung erfahren Sie, wie Sie mehrere dedizierte Server im vRack konfigurieren.**


## Voraussetzungen

- Sie besitzen ein [vRack](https://www.ovh.de/loesungen/vrack/){.external}.
- Ihnen stehen mindestens zwei [mit vRack kompatible Server](https://www.ovh.de/dedicated_server/){.external} zur Verfügung.
- Sie sind via SSH (oder über Ihre grafische Benutzeroberfläche) auf Ihrem Linux-Server eingeloggt (Root-Zugriff).
- Sie sind in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} eingeloggt.
- Sie haben einen privaten IP-Adressbereich.


## Vorgehensweise

### Server dem vRack hinzufügen

1. Nachdem das vRack Ihrem Account hinzugefügt wurde, gehen Sie in Ihrem [OVH Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} in den Bereich `Cloud`{.action}.
2. Klicken Sie dann im Menü auf der linken Seite auf `vRack`{.action}.
3. Wählen Sie anschließend in der angezeigten Liste Ihr vRack aus.
4. Wählen Sie nun in der Liste der möglichen Dienste die Server aus, die Sie dem vRack hinzufügen möchten und klicken Sie dann auf `Hinzufügen`{.action}.

![Auswahl vRack](images/vrack_selection.png){.thumbnail}

### Netzwerkinterfaces konfigurieren

Als Beispiel verwenden wir für diese Anleitung den internen IP-Adressbereich *192.168.0.0/16*.

Für das sekundäre Netzwerkinterface verwenden wir außerdem die Namen **eth1** und **eno4**. Ihre Server verwenden möglicherweise eine andere Namenskonvention. Überprüfen Sie diese bitte über die nachstehenden Befehle.

Geben Sie für eine Auflistung der Netzwerkinterfaces folgenden Befehl ein:

```sh
ifconfig -a | grep eth | awk '{print $ 1}'
```

Das erste Interface in der Liste gehört zu Ihrer Hauptnetzwerkverbindung. Um zu überprüfen, ob dieses aktiv ist, geben Sie folgenden Befehl ein:

```sh
ifconfig eth1 up
```

```sh
ethtool eth1 | grep "Link detected"
```

Wenn Sie als Antwort auf diesen Befehl `Link detected: no` erhalten, handelt es sich um das richtige Netzwerkinterface für die Konfiguration des vRack. Geben Sie nun zunächst folgenden Befehl ein:

```sh
ifconfig eth1 down
```

#### CentOS 6 et 7

Öffnen Sie die Konfigurationsdatei des Netzwerkinterfaces mit folgendem Befehl:

```sh
vi /etc/sysconfig/network-scripts/ifcfg-eth1
```

Drücken Sie auf die Taste `I` Ihrer Tastatur, um in den Einfügemodus zu wechseln.

Konfigurieren Sie das sekundäre Netzwerkinterface wie folgt:

```sh
DEVICE=eth1
BOOTPROTO=static
IPADDR=192.168.0.1
NETMASK=255.255.0.0
ONBOOT=yes
TYPE=Ethernet
```

Im oben aufgeführten Beispiel können Sie jeden beliebigen privaten IP-Bereich und aus diesem jede beliebige Adresse auswählen.

1. Drücken Sie `ESC`.
2. Drücken Sie gleichzeitig auf `SHIFT` und die *Doppelpunkt*-Taste, um den Editor zu öffnen.
3. Geben Sie `wq` ein.
4. Drücken Sie auf `Enter`.
5. Starten Sie Ihren Server neu.
6. Wiederholen Sie für alle weiteren Server die oben aufgeführten Schritte und weisen Sie ihnen eine einmalige IP-Adresse aus Ihrem IP-Bereich zu. Ihre Server können dann im privaten Netzwerk untereinander kommunizieren.


#### Debian 7 und 8

Öffnen Sie die Konfigurationsdatei des Netzwerkinterfaces mit folgendem Befehl:

```sh
nano /etc/network/interfaces
```

Konfigurieren Sie das sekundäre Netzwerkinterface wie folgt:

```sh
auto eth1:1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Im oben aufgeführten Beispiel können Sie jeden beliebigen privaten IP-Bereich und aus diesem jede beliebige Adresse auswählen.


1. Drücken Sie `STRG + X`, um die Netzwerkkonfigurationsdatei zu verlassen.
2. Betätigen Sie die Taste `Y`, um Ihre Änderungen zu speichern und bestätigen Sie dann mit `Enter`.
3. Starten Sie Ihren Server neu.
4. Wiederholen Sie für alle weiteren Server die oben aufgeführten Schritte und weisen Sie ihnen eine einmalige IP-Adresse aus Ihrem IP-Bereich zu. Ihre Server können dann im privaten Netzwerk untereinander kommunizieren.


#### Debian 9

Öffnen Sie die Konfigurationsdatei des Netzwerkinterfaces mit folgendem Befehl:

```sh
nano /etc/network/interfaces
```

Konfigurieren Sie das sekundäre Netzwerkinterface wie folgt:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Im oben aufgeführten Beispiel können Sie jeden beliebigen privaten IP-Bereich und aus diesem jede beliebige Adresse auswählen.

1. Drücken Sie `STRG + X`, um die Netzwerkkonfigurationsdatei zu verlassen.
2. Betätigen Sie die Taste `Y`, um Ihre Änderungen zu speichern und bestätigen Sie dann mit `Enter`.
3. Starten Sie Ihren Server neu.
4. Wiederholen Sie für alle weiteren Server die oben aufgeführten Schritte und weisen Sie ihnen eine einmalige IP-Adresse aus Ihrem IP-Bereich zu. Ihre Server können dann im privaten Netzwerk untereinander kommunizieren.


#### Ubuntu Server 16

Öffnen Sie die Konfigurationsdatei des Netzwerkinterfaces mit folgendem Befehl:

```sh
vi /etc/network/interfaces
```

Drücken Sie auf die Taste `I` Ihrer Tastatur, um in den Einfügemodus zu wechseln.

Konfigurieren Sie das sekundäre Netzwerkinterface wie folgt:

```sh
auto eth1:1
iface eth1 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Im oben aufgeführten Beispiel können Sie jeden beliebigen privaten IP-Bereich und aus diesem jede beliebige Adresse auswählen.

1. Drücken Sie `ESC`.
2. Drücken Sie gleichzeitig auf `SHIFT` und die *Doppelpunkt*-Taste, um den Editor zu öffnen.
3. Geben Sie `wq` ein.
4. Drücken Sie auf `Enter`.
5. Starten Sie Ihren Server neu.
6. Wiederholen Sie für alle weiteren Server die oben aufgeführten Schritte und weisen Sie ihnen eine einmalige IP-Adresse aus Ihrem IP-Bereich zu. Ihre Server können dann im privaten Netzwerk untereinander kommunizieren.


#### Ubuntu Server 17

Öffnen Sie die Konfigurationsdatei des Netzwerkinterfaces mit folgendem Befehl:

```sh
nano /etc/network/interfaces
```

Konfigurieren Sie das sekundäre Netzwerkinterface wie folgt:

```sh
auto eno4
iface eno4 inet static
address 192.168.0.1
netmask 255.255.0.0
```

Im oben aufgeführten Beispiel können Sie jeden beliebigen privaten IP-Bereich und aus diesem jede beliebige Adresse auswählen.

1. Drücken Sie `STRG + X`, um die Netzwerkkonfigurationsdatei zu verlassen.
2. Betätigen Sie die Taste `Y`, um Ihre Änderungen zu speichern und bestätigen Sie dann mit `Enter`.
3. Starten Sie Ihren Server neu.
4. Wiederholen Sie für alle weiteren Server die oben aufgeführten Schritte und weisen Sie ihnen eine einmalige IP-Adresse aus Ihrem IP-Bereich zu. Ihre Server können dann im privaten Netzwerk untereinander kommunizieren.


#### Windows

Als Beispiel verwenden wir für diese Anleitung den internen IP-Bereich *192.168.0.0/16*.

Gehen Sie wie folgt vor:

- Verbinden Sie sich über Ihren Remotedesktop mit Ihrem Windows Server.
- Klicken Sie auf den `Start`{.action}-Button.
- Klicken Sie auf `Control Panel`{.action}.

![Windows Control Panel](images/windows_control_panel.png){.thumbnail}

- Klicken Sie auf `Network and Internet`{.action}.

![Network and Internet](images/windows_network_and_internet.png){.thumbnail}

- Klicken Sie auf `Network and Sharing Centre`{.action}.

![Network and Sharing Centre](images/windows_network_and_sharing_centre.png){.thumbnail}

- Klicken Sie auf `Change Adapter Settings`{.action}.

![Change Adapter Settings](images/windows_change_adapter_settings.png){.thumbnail}

- Machen Sie einen Rechtsklick auf das sekundäre Netzwerkinterface.

- Klicken Sie auf `Properties`{.action}.

![Windows Properties](images/windows_properties_button.png){.thumbnail}

- Doppelklicken Sie auf `Internet Protocol Version 4 (TCP/IP/IPv4)`{.action}.

![Internet Protocol Version 4 (TCP/IP/IPv4)](images/windows_ipv4.png){.thumbnail}

- Klicken Sie auf `Use the following IP address`:

    - Geben Sie in das Feld `IP address` eine IP-Adresse aus Ihrem internen IP-Bereich ein.
    - Geben Sie in das Feld `Subnet mask` die Subnetzmaske 255.255.0.0 ein.

![Use the following IP address](images/windows_use_following_ip_address.png){.thumbnail}

-  Bestätigen Sie mit dem `OK`{.action}-Button, um die Änderungen zu speichern.
- Starten Sie Ihren Server neu.
- Wiederholen Sie für alle weiteren Server die oben aufgeführten Schritte und weisen Sie ihnen eine einmalige IP-Adresse aus Ihrem IP-Bereich zu. Ihre Server können dann im privaten Netzwerk untereinander kommunizieren.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.