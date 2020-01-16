---
title: 'So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation in Windows Server 2019'
slug: ola-w2k19
excerpt: 'Die OVHcloud Link Aggregation auf Ihrem „Windows Server 2019“-Server aktivieren'
section: 'Fortgeschrittene Nutzung'
---

**Letzte Aktualisierung am 24\. Oktober 2019**

## Ziel

Die OVHcloud Link Aggregation (OLA)-Technologie wurde von unseren Teams entwickelt, um die Verfügbarkeit Ihres Servers zu erhöhen und die Effizienz Ihrer Netzwerkverbindungen zu steigern. Mit nur wenigen Klicks können Sie Ihre Netzwerkkarten aggregieren und Ihre Netzwerkverbindungen überflüssig machen. Wenn also eine Verbindung ausfällt, wird der Datenverkehr automatisch auf eine andere verfügbare Verbindung umgeleitet. In diesem Artikel wird erläutert, wie Sie Ihre Netzwerkkarten verbinden, um sie für OLA in Windows Server 2019 zu verwenden.

## Anforderungen

[So konfigurieren Sie Ihre Netzwerkkarte für die OVHcloud Link Aggregation im OVH-Manager](https://docs.ovh.com/de/dedicated/ola-manager){.external}

## Anleitung

Da wir eine privat-private Konfiguration für unsere NICs in OLA verwenden, können wir kein RDP auf unseren Server übertragen. Daher müssen wir das IPMI-Tool für den Zugriff nutzen. Melden Sie sich dazu zuerst im [OVH-Manager](https://www.ovh.com/manager/){.external} an.  Wählen Sie dann in der linken Seitenleiste den Server aus, den Sie konfigurieren möchten, und klicken Sie auf die Registerkarte **IPMI**.

![Remote-KVM](images/remote_kvm.png){.thumbnail}

Klicken Sie anschließend auf die Schaltfläche **Aus einem Java-Applet (KVM)**. Ein JNLP-Programm wird heruntergeladen. Öffnen Sie das Programm, sobald der Vorgang abgeschlossen ist, um das IPMI aufzurufen.  Melden Sie sich mit gültigen Anmeldeinformationen für den Server an.

Sobald Sie auf dem Server sind, öffnen Sie den Server-Manager. Wenn er nicht bereits standardmäßig geöffnet wird, wird er an das Start-Menü angeheftet.

![Server-Manager](images/local_server.png){.thumbnail}

Klicken Sie nach dem Öffnen des Server-Managers in der linken Seitenleiste auf die Registerkarte **Lokaler Server**. Klicken Sie anschließend neben „NIC-Teaming“ auf die Schaltfläche **Deaktiviert**.

![Lokaler Server](images/server_manager.png){.thumbnail}

Klicken Sie im NIC-Teaming-Popup im Dropdown-Menü **AUFGABEN** im Abschnitt „TEAMS“ auf die Schaltfläche **Neues Team**.

![NIC-Teaming](images/nic_teaming.png){.thumbnail}

Geben Sie Ihrem Team einen Namen und überprüfen Sie die NICs, die Sie mit OLA verwenden möchten. Klicken Sie auf den Dropdown-Pfeil neben „Weitere Objekte“ und ändern Sie den „Teaming-Modus“ in LACP. Klicken Sie auf **OK**, sobald Sie die Richtigkeit der Informationen bestätigt haben.

![Neues Team](images/new_team.png){.thumbnail}

Es kann einige Minuten dauern, bis das NIC-Team online ist. Sobald Sie fertig sind, klicken Sie auf das Netzwerkverbindungssymbol in der rechten unteren Ecke.  Klicken Sie anschließend auf die Schaltfläche **Netzwerk- und Interneteinstellungen**.  Dann klicken Sie auf die **Ethernet**- Taste auf der linken Seitenleiste des folgenden Popups.

![Netzwerkschaltfläche](images/network_button.png){.thumbnail}

Klicken Sie auf die Schaltfläche **Adapteroptionen ändern**. 

![Ethernet](images/ethernet.png){.thumbnail}

Klicken Sie anschließend mit der rechten Maustaste auf Ihr NIC-Team und wählen Sie im Dropdown-Menü **Eigenschaften** aus.

![Eigenschaften](images/properties.png){.thumbnail}

Doppelklicken Sie im folgenden Popup-Fenster auf die Schaltfläche **Internetprotokoll Version 4 (TCP / IPv4)**.

![ipv4](images/ipv4.png){.thumbnail}

Klicken Sie auf die Schaltfläche neben „Die folgende IP-Adresse verwenden“ und fügen Sie Ihre gewählte private IP und das Subnetz hinzu. Klicken Sie auf die Schaltfläche **OK**, sobald Sie die Richtigkeit Ihrer Einstellungen bestätigt haben. 

![ipv42](images/ipv42.png){.thumbnail}

Um zu testen, ob unser NIC-Team funktioniert, senden Sie einen Ping-Befehl an einen anderen Server im selben vRack.  Wenn es funktioniert, sind Sie bereit. Ist dies nicht der Fall, überprüfen Sie Ihre Einstellungen oder starten Sie den Server neu.

## Fazit

OVHcloud bietet unseren Kunden die Freiheit und Flexibilität, ihre Hardware so einzusetzen, wie es ihren Bedürfnissen am besten entspricht. Nachdem Sie diesen Artikel gelesen haben, sollten Sie in der Lage sein, OVHcloud Link Aggregation (OLA) in Windows Server 2019 zu konfigurieren, um beide Ihrer NICs als verbundene private Schnittstellen zu verwenden. 