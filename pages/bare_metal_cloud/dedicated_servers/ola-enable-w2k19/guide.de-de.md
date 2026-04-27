---
title: "OVHcloud Link Aggregation auf einem Dedicated Server konfigurieren (Windows)"
excerpt: "Aktivieren Sie OVHcloud Link Aggregation auf Ihrem Dedicated Server mit Windows Server 2019."
updated: 2026-04-20
---

## Ziel

Die OVHcloud Link Aggregation (OLA) wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen redundant machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet. Die verfügbare Bandbreite wird durch Aggregation ebenfalls verdoppelt.
Die Aggregation basiert auf dem Standard IEEE 802.3ad, Link Aggregation Control Protocol (LACP).

**Diese Anleitung erklärt, wie Sie NIC Teaming für OLA in Windows Server 2019 konfigurieren.**

## Voraussetzungen

- [OVHcloud Link Aggregation im OVHcloud Kundencenter konfigurieren](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

<!-- CP-NAV-START:baremetal-dedicated-servers -->
---

### Zugriff auf das OVHcloud Kundencenter

- **Direktlink:** [Dedicated Server](/links/control-panel/baremetal-dedicated-servers)
- **Navigationspfad:** `Bare Metal Cloud`{.action} > `Dedicated Server`{.action} > Wählen Sie Ihren Server aus

---
<!-- CP-NAV-END:baremetal-dedicated-servers -->

## In der praktischen Anwendung

Da wir für unsere NICs in OLA eine privat-private Konfiguration haben, können wir keine SSH-Verbindung zum Server herstellen. Daher müssen wir das IPMI-Tool nutzen, um auf den Server zuzugreifen.
<br>Klicken Sie dazu auf den Tab `IPMI`{.action} (1).

Klicken Sie anschließend auf den Button `Mit einem Java-Applet (KVM)`{.action} (2).

![remote kvm](images/remote_kvm2022.png){.thumbnail}

Ein JNLP-Applet wird heruntergeladen. Öffnen Sie es, um IPMI aufzurufen. Melden Sie sich mit gültigen Anmeldeinformationen für den Server an.

Sobald Sie auf dem Server sind, öffnen Sie den Server-Manager. Wenn er nicht bereits standardmäßig geöffnet wird, wird er an das Start-Menü angeheftet.

![server manager](images/local_server.png){.thumbnail}

Klicken Sie nach dem Öffnen des Server-Managers in der linken Seitenleiste auf **Lokaler Server**. Klicken Sie anschließend neben "NIC Teaming" auf die Schaltfläche **Deaktiviert**.

![Lokaler Server](images/server_manager.png){.thumbnail}

Klicken Sie im NIC-Teaming-Popup im Dropdown-Menü **AUFGABEN** im Abschnitt "TEAMS" auf die Schaltfläche **Neues Team**.

![NIC-Teaming](images/nic_teaming.png){.thumbnail}

Geben Sie Ihrem Team einen Namen und überprüfen Sie die NICs, die Sie mit OLA verwenden möchten. Klicken Sie auf den Dropdown-Pfeil neben "Weitere Eigenschaften" und ändern Sie den "Teaming-Modus" zu LACP. Klicken Sie auf **OK**, sobald Sie die Richtigkeit der Informationen bestätigt haben.

![Neues Team](images/new_team.png){.thumbnail}

Es kann einige Minuten dauern, bis das NIC-Team online ist. Sobald es bereit ist, klicken Sie auf das Netzwerkverbindungssymbol in der rechten unteren Ecke.  Klicken Sie anschließend auf die Schaltfläche **Netzwerk- und Interneteinstellungen**. Dann klicken Sie auf **Ethernet** in der linken Seitenleiste des folgenden Popups.

![Netzwerkschaltfläche](images/network_button.png){.thumbnail}

Klicken Sie auf die Schaltfläche **Adaptereigenschaften ändern**.

![Ethernet](images/ethernet.png){.thumbnail}

Klicken Sie anschließend mit der rechten Maustaste auf Ihr NIC-Team und wählen Sie im Dropdown-Menü **Eigenschaften** aus.

![Eigenschaften](images/properties.png){.thumbnail}

Doppelklicken Sie im folgenden Popup-Fenster auf die Schaltfläche **Internetprotokoll Version 4 (TCP/IPv4)**.

![Eigenschaften von Internetprotokoll Version 4 (TCP/IPv4)](images/ipv4.png){.thumbnail}

Klicken Sie auf "Diese IP-Adresse verwenden" und fügen Sie Ihre gewählte private IP und das Subnetz hinzu. Klicken Sie auf die Schaltfläche **OK**, sobald Sie die Richtigkeit Ihrer Einstellungen bestätigt haben.

![ipv42](images/ipv42.png){.thumbnail}

Um zu testen, ob das NIC-Team funktioniert, senden Sie einen Ping an einen anderen Server im selben vRack. Wenn es funktioniert, sind Sie fertig. Wenn nicht, überprüfen Sie Ihre Konfigurationen oder versuchen Sie, den Server neu zu starten.

## Weiterführende Informationen

[OVHcloud Link Aggregation im OVHcloud Kundencenter konfigurieren](/pages/bare_metal_cloud/dedicated_servers/ola-enable-manager)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 12 oder Ubuntu 24.04 mit Netplan](/pages/bare_metal_cloud/dedicated_servers/lacp-enable-netplan)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9 bis 11](/pages/bare_metal_cloud/dedicated_servers/ola-enable-debian9)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in SLES 15](/pages/bare_metal_cloud/dedicated_servers/ola-enable-sles15)

Treten Sie unserer [User Community](/links/community) bei.
