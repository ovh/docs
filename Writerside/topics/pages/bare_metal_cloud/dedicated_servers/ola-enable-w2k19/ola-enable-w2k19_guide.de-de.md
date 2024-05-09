---
title: 'Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019'
excerpt: 'Erfahren Sie hier, wie Sie OLA auf Ihrem Windows Server 2019 Server aktivieren'
updated: 2021-03-25
---

## Ziel

Die OVHcloud Link Aggregation (OLA) wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen redundant machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet.

## Voraussetzungen

- [Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation im OVHcloud Kundencenter](ola-enable-manager1.).
- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).

## In der praktischen Anwendung

Da wir für unsere NICs in OLA eine privat-private Konfiguration haben, können wir keine SSH-Verbindung zum Server herstellen. Daher müssen wir das IPMI-Tool nutzen, um auf den Server zuzugreifen.
<br>Loggen Sie sich hierzu in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) ein. Klicken Sie im Bereich `Bare Metal Cloud`{.action} Ihren Server aus `Dedicated Server`{.action}, aus und klicken Sie dann auf den Tab `IPMI`{.action} (1).

Klicken Sie anschließend auf die Schaltfläche `Mit einem Java-Applet (KVM)`{.action} (2).

![remote_kvm](ola-enable-w2k19_images_remote_kvm2022.png){.thumbnail}

Ein JNLP-Applet wird heruntergeladen. Öffnen Sie es, um IPMI aufzurufen. Melden Sie sich mit gültigen Anmeldeinformationen für den Server an.

Sobald Sie auf dem Server sind, öffnen Sie den Server-Manager. Wenn er nicht bereits standardmäßig geöffnet wird, wird er an das Start-Menü angeheftet.

![Server-Manager](local_server.png){.thumbnail}

Klicken Sie nach dem Öffnen des Server-Managers in der linken Seitenleiste auf **Lokaler Server**. Klicken Sie anschließend neben “NIC Teaming” auf die Schaltfläche **Deaktiviert**.

![Lokaler Server](server_manager.png){.thumbnail}

Klicken Sie im NIC-Teaming-Popup im Dropdown-Menü **AUFGABEN** im Abschnitt “TEAMS” auf die Schaltfläche **Neues Team**.

![NIC-Teaming](nic_teaming.png){.thumbnail}

Geben Sie Ihrem Team einen Namen und überprüfen Sie die NICs, die Sie mit OLA verwenden möchten. Klicken Sie auf den Dropdown-Pfeil neben “Weitere Eigenschaften” und ändern Sie den “Teaming-Modus” zu LACP. Klicken Sie auf **OK**, sobald Sie die Richtigkeit der Informationen bestätigt haben.

![Neues Team](new_team.png){.thumbnail}

Es kann einige Minuten dauern, bis das NIC-Team online ist. Sobald es bereit ist, klicken Sie auf das Netzwerkverbindungssymbol in der rechten unteren Ecke.  Klicken Sie anschließend auf die Schaltfläche **Netzwerk- und Interneteinstellungen**. Dann klicken Sie auf **Ethernet** in der linken Seitenleiste des folgenden Popups.

![Netzwerkschaltfläche](network_button.png){.thumbnail}

Klicken Sie auf die Schaltfläche **Adaptereigenschaften ändern**.

![Ethernet](ethernet.png){.thumbnail}

Klicken Sie anschließend mit der rechten Maustaste auf Ihr NIC-Team und wählen Sie im Dropdown-Menü **Eigenschaften** aus.

![Eigenschaften](properties.png){.thumbnail}

Doppelklicken Sie im folgenden Popup-Fenster auf die Schaltfläche **Internetprotokoll Version 4 (TCP/IPv4)**.

![ipv4](ipv4.png){.thumbnail}

Klicken Sie auf "Diese IP-Adresse verwenden" und fügen Sie Ihre gewählte private IP und das Subnetz hinzu. Klicken Sie auf die Schaltfläche **OK**, sobald Sie die Richtigkeit Ihrer Einstellungen bestätigt haben.

![ipv42](ipv42.png){.thumbnail}

Um zu testen, ob unser NIC Team funktioniert, senden Sie einen Ping-Befehl an einen anderen Server im selben vRack. Wenn es funktioniert, sind Sie bereit. Ist dies nicht der Fall, überprüfen Sie Ihre Einstellungen oder starten Sie den Server neu.

## Weiterführende Informationen

[Konfigurieren der OVHcloud Link Aggregation im OVHcloud Kundencenter](ola-enable-manager1.)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in Debian 9](ola-enable-debian91.)

[Konfigurieren Ihrer Netzwerkkarte für die OVHcloud Link Aggregation in CentOS 7](ola-enable-centos71.)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
