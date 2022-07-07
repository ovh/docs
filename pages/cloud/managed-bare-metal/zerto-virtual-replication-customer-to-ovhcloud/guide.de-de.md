---
title: 'VPN für Ihren OVHcloud Zerto DRP einrichten'
slug: zerto-virtual-replication-customer-to-ovhcloud
routes:
    canonical: 'https://docs.ovh.com/de/private-cloud/zerto-virtual-replication-customer-to-ovhcloud/'
excerpt: 'So richten Sie einen VPN-Tunnel ein, um Ihre lokale Zerto-Plattform mit Ihrer OVHcloud Managed Bare Metal zu verbinden.'
section: 'OVHcloud Dienste und Optionen'
---

**Stand 18.11.2020**

## Einleitung
Ziel dieser Anleitung ist, Ihnen bei der Konfiguration Ihres virtuellen privaten Netzwerks (VPN) zu helfen, um Ihre lokale Plattform mit Ihrer OVHcloud Managed Bare Metal zu verbinden und die
Zerto Disaster-Recovery-Lösung einzurichten.
Zur Veranschaulichung der Konfiguration verwenden wir die VPN-Funktionen von OPNSense, einer Open-Source-Firewall/VPN-Plattform.
Der Einfachheit halber beschreiben wir die einfachste Konfiguration, bei der das VPN-Gateway über eine Verbindung zum Netzwerk des Zerto Virtual Managers (ZVM) verfügt. 

## Voraussetzungen

- Die Ziel-Managed-Bare-Metal muss über mindestens eine verfügbare öffentliche IP-Adresse für den VPN-Endpunkt verfügen.
- Der Kundenstandort muss über eine funktionsfähige Zerto-Installation verfügen.
- Die von Zerto für die Replikation verwendeten virtuellen Maschinen (VRA: Virtual Replication Appliance) sowohl auf Kundenseite als auch bei OVHcloud müssen sich über die TCP-Ports 4007 und 4008 miteinander austauschen können.
- Die Verwaltungsmaschinen von Zerto (ZVM: Zerto Virtual Manager) sowohl auf Kundenseite als auch bei OVHcloud müssen sich über den TCP-Port 9081 miteinander austauschen können.

## Beschreibung

### Übersicht der Lösungsarchitektur

![Zerto VPN](images/image-EN-1.png){.thumbnail}

**Definition der Parameter dieser Architektur:**

Auf Kundenseite:

- öffentliche IP-Adresse des VPN-Endpunkts (1)
- interne IP-Adresse des VPN-Endpunkts (2)
- interne IP-Adresse des ZVM (3)
- Adressierungsplan des ZVM-Netzwerks (4)

Auf Seite von OVHcloud:

- öffentliche IP-Adresse des VPN-Endpunkts (5)
- Adressierungsplan des ZVM-Netzwerks (6)
- IP-Adresse des ZVM (7)

> [!primary]
>
>Wählen Sie den Netzwerkbereich aus, in dem OVHcloud den Remote-ZVM deployen soll, um jeglichen Konflikt mit Ihren internen Adressen zu vermeiden. 
>
>Sie können auch einfach den Bereich verwenden, der Ihnen standardmäßig im Interface des Kundencenters vorgeschlagen wird, wenn dies für Sie passt.
>

### Schritt 1: Die Zerto-Funktion des Kunden zu OVHcloud aktivieren

Die Aktivierung geschieht einfach über OVHcloud Kundencenter. Wählen Sie zuerst das zur Managed Bare Metal gehörige Datacenter aus und klicken Sie dann auf den Tab `Disaster Recovery Plan (DRP)`{.action}.

![Zerto VPN](images/image-EN-2-nucp.png){.thumbnail}

Wählen Sie die Option `Zwischen Ihrer Infrastruktur und einer OVHcloud Managed Bare Metal`{.action} aus und klicken Sie anschließend auf `Zerto DRP aktivieren`{.action}.

![Zerto VPN](images/image-EN-3.png){.thumbnail}

Wählen Sie eine freie öffentliche IP-Adresse aus dem vorgeschlagenen IP-Bereich aus.

![Zerto VPN](images/image-EN-4.png){.thumbnail}

Geben Sie dann den gewünschten Netzwerkbereich für das Deployment des ZVM ein.

![Zerto VPN](images/image-EN-5.png){.thumbnail}

Klicken Sie anschließend auf `Installieren`{.action}.

![Zerto VPN](images/image-EN-6.png){.thumbnail}

### Schritt 2: IPSec-Dienst aktivieren

Gehen Sie über die OPNSense-Konsole links ins `VPN`{.action}-Menü, dann in den Bereich `IPSec`{.action} und wählen Sie `Tunnel Settings`{.action} aus.

![Zerto VPN](images/image-EN-7.png){.thumbnail}

Setzen Sie einen Haken bei `Enable IPsec`{.action}.

![Zerto VPN](images/image-EN-8.png){.thumbnail}

Speichern Sie die Einstellungen, indem Sie auf `Save`{.action} klicken.

### Schritt 3: IPSec-Tunnel einrichten

Für die Konfiguration des Tunnels werden zwei Parametergruppen namens **Phase 1** und **Phase 2** festgelegt.

#### 3.1 Phase 1 hinzufügen

Klicken Sie im `VPN`{.action}-Menü im Bereich `Tunnel Settings`{.action} rechts auf der Seite auf `+`{.action}.

![Zerto VPN](images/image-EN-9.png){.thumbnail}

##### 3.1.1 Phase 1: Allgemeine Informationen hinzufügen

![zerto vpn](images/image-EN-10.png){.thumbnail}

Sie können die standardmäßig angegebenen Werte beibehalten:

- Verbindungsmethode: Default
- Key-Exchange-Protokoll: V2
- Internet-Protokoll: IPv4
- Interface: WAN

Die IP des IPSec-Endpunkts von OVHcloud muss jedoch unbedingt im Feld `Remote gateway`{.action} angegeben werden.

##### 3.1.2 Phase 1: Authentifizierung

Auch hier können Sie die standardmäßig angegebenen Einstellungen beibehalten. Geben Sie nur den geteilten Schlüssel im Feld `Pre-Shared Key`{.action} ein.

![Zerto VPN](images/image-EN-11.png){.thumbnail}

##### 3.1.3 Phase 1:  Verschlüsselungsalgorithmen auswählen

![Zerto VPN](images/image-EN-12.png){.thumbnail}

Die unterstützten Parameterwerte sind:

- Verschlüsselungsalgorithmus: AES 256 bits
- Hash-Algorithmus: SHA256
- Diffie-Hellman-Schlüsselgruppe: 14 (2048 bits)
- Lebensdauer: 28800 Sekunden

Für die erweiterten Einstellungen können die standardmäßigen Werte beibehalten werden. Klicken Sie auf `Save`{.action} und dann auf `Apply changes`{.action}.

Phase 1 ist jetzt im Interface verfügbar.

![Zerto VPN](images/image-EN-13.png){.thumbnail}

#### 3.2 Phase-2-Eintrag hinzufügen

Klicken Sie auf den Button `Show Phase 2 entries`{.action}.

![Zerto VPN](images/image-EN-14.png){.thumbnail}

Da noch keine Phase 2 verfügbar ist, muss zunächst eine hinzugefügt werden:

![Zerto VPN](images/image-EN-15.png){.thumbnail}

Klicken Sie auf den Button `+`{.action}.

![Zerto VPN](images/image-EN-16.png){.thumbnail}

##### 3.2.1 Phase 2: Allgemeine Informationen

![Zerto VPN](images/image-EN-17.png){.thumbnail}

Überprüfen Sie, dass als Modus “Tunnel IPv4” ausgewählt ist.

##### 3.2.2 Phase 2: Lokales Netzwerk

![Zerto VPN](images/image-EN-18.png){.thumbnail}

Als lokaler Netzwerktyp muss “LAN subnet” ausgewählt sein.

##### 3.2.3 Phase 2: Remote-Netzwerk

An diesem Punkt muss der Adressierungsplan des Netzwerks, in dem sich der OVHcloud ZVM befindet, angegeben werden. 

Dieses ist immer ein /23-Netzwerk (512 IPs).

> [!warning]
>
> Überprüfen Sie alle Einstellungen genau. Wenn an diesem Punkt ein Fehler passiert, kann der VPN nicht funktionieren. 
>

![Zerto VPN](images/image-EN-19.png){.thumbnail}

##### 3.2.4 Phase 2: Key Exchange

Die unterstützten Parameter sind:

- Protokoll: ESP
- Verschlüsselungsalgorithmen: AES 256 bits
- Hash-Algorithmen: SHA256
- PFS: Off

![Zerto VPN](images/image-EN-20.png){.thumbnail}

Die erweiterten Optionen müssen nicht abgeändert werden. Klicken Sie auf `Save`{.action} und dann auf `Apply changes`{.action}.

#### 3.3. Überprüfen des VPN-Status

![Zerto VPN](images/image-EN-21.png){.thumbnail}

Klicken Sie rechts auf das orangefarbene Dreieck, um die Verbindung zu starten.

![Zerto VPN](images/image-EN-22.png){.thumbnail}

Sind alle Einstellungen korrekt, wird der Tunnel hergestellt. Es werden zwei neue Symbole angezeigt:

- Tunnel deaktivieren
- Informationen zum Tunnel-Status anzeigen

![Zerto VPN](images/image-EN-23.png){.thumbnail}

Klicken Sie auf das Informationssymbol.

![Zerto VPN](images/image-EN-24.png){.thumbnail}

Der Tunnel ist betriebsbereit. Denken Sie daran, an diesem Punkt gegebenenfalls eine Route auf Ihrem lokalen ZVM zum Netzwerk des OVHcloud ZVM hinzuzufügen.

**Troubleshooting**

Falls der Tunnel nicht hergestellt wird, überprüfen Sie, ob die folgenden Parameter korrekt angegeben wurden:

- der geteilte Schlüssel
- die IP des Remote-Endpunkts
- der IP-Bereich des Remote-Netzwerks

Überprüfen Sie außerdem, dass die Datenströme zwischen den beiden VPN-Endpunkten nicht durch eine Firewall blockiert werden.

Für weitere Informationen können Sie auch die IPSec-Log-Datei in /var/log/ipsec.log einsehen.

### Schritt 4: Firewall konfigurieren

Um das Pairing zwischen dem Kundenstandort und dem OVHcloud Standort zu ermöglichen, muss der Traffic für folgende Ports erlaubt sein:

- Port 9081 zwischen den ZVM
- Ports 4007 und 4008 zwischen den VRAs

#### 4.1 ZVM-Öffnung

Gehen Sie ins `Firewall`{.action}-Menü in den Bereich `Rules`{.action} und wählen Sie `IPSec`{.action} aus.

![Zerto VPN](images/image-EN-25.png){.thumbnail}

Klicken Sie auf `Add`{.action}, um eine neue Regel hinzuzufügen.

![Zerto VPN](images/image-EN-26.png){.thumbnail}

![Zerto VPN](images/image-EN-27.png){.thumbnail}

Diese Regel enthält folgende Parameter:

- Aktion: “Pass” (Traffic autorisieren)
- Interface: “IPsec” (vom VPN-Tunnel eingehenden Traffic autorisieren)
- Protokoll: “TCP”

Wählen Sie für die Bereiche “Source” und “Destination” den Typ “Single host or Network” aus und geben Sie jeweils die IP des OVHcloud ZVM bzw. die IP des Kunden-ZVM an.

![Zerto VPN](images/image-EN-28.png){.thumbnail}

Der autorisierte Ziel-TCP-Port ist der Port 9081.

Speichern Sie die Regel und wenden Sie sie an.

#### 4.2 Öffnung für VRAs

Die Öffnung der Firewall für VRA-Traffic ist etwas komplizierter, da es sowohl auf Kunden- wie auf OVHcloud Seite so viele VRAs wie ESXi-VMs gibt. 

Sie alle müssen sich über die Ports 4007 und 4008 austauschen können. 

Um die Situation zu vereinfachen, erlaubt OPNSense das Erstellen von Alias. Bei einem Alias handelt es sich um eine Gruppe von Objekten (IPs, Netzwerke, URLs etc.), die bei der Konfiguration von Firewall-Regeln verwendet werden können.

In unserem Fall benötigen wir 3 Alias:

- einen für die IPs der VRAs auf Kundenseite
- einen für die IPs der VRAs bei OVHcloud
- einen für die zu autorisierenden Ports

Die IPs der VRAs bei OVHcloud werden im vSphere Interface der Ziel-Managed-Bare-Metal angezeigt:

![Zerto VPN](images/image-EN-29.png){.thumbnail}

Erstellen Sie den Alias OVH_VRA für die VRAs bei OVHcloud:

![Zerto VPN](images/image-EN-30.png){.thumbnail}

Auf ähnliche Weise wird auch ein Alias für die Maschinen auf Kundenseite erstellt:

![Zerto VPN](images/image-EN-31.png){.thumbnail}

Jetzt muss nur noch ein Alias für die Ports erstellt werden:

![Zerto VPN](images/image-EN-32.png){.thumbnail}

Sie verfügen jetzt über alle erforderlichen Elemente für die Erstellung der Firewall-Regeln, die den Traffic von OVHcloud zur Kundenplattform autorisieren. Die Vorgehensweise ist die gleiche, es müssen nur die Alias in den Einstellungen verwendet werden:

![Zerto VPN](images/image-EN-33.png){.thumbnail}

Die VPN-Verbindung ist nun betriebsbereit und gesichert.

![Zerto VPN](images/image-EN-34.png){.thumbnail}

### Schritt 5: Pairing der ZVMs

Sobald der ZVM am Kundenstandort installiert ist, können Sie sich im Zerto Interface einloggen. 

Das folgende Fenster wird geöffnet:

![Zerto VPN](images/image-EN-35.png){.thumbnail}

Wählen Sie die Option `Pair to a site with a licence`{.action} aus, geben Sie die IP-Adresse der ZVM bei OVHcloud ein und klicken Sie anschließend auf `Start`{.action}.

Eine Meldung im Dashboard zeigt an, dass das Pairing gestartet wurde.

![Zerto VPN](images/image-EN-36.png){.thumbnail}

Wenn der Vorgang erfolgreich abgeschlossen wurde, wird folgende Nachricht angezeigt:

![Zerto VPN](images/image-EN-37.png){.thumbnail}

Sie können überprüfen, dass der Name Ihrer OVHcloud Managed Bare Metal im Tab `Sites`{.action} angezeigt wird.

![Zerto VPN](images/image-EN-38.png){.thumbnail}

Ihre Zerto-Lösung ist nun betriebsbereit und Sie können Virtual Protection Groups (VPGs) erstellen.

#### **Diagnose**:

Wenn die Kommunikation zwischen den ZVMs nicht möglich ist (insbesondere im Falle von Auslassungen in den Firewall-Regeln), wird die folgende Nachricht angezeigt:

![Zerto VPN](images/image-EN-39.png){.thumbnail}

Anschließend werden Sie zum Login-Bildschirm des ZVM weitergeleitet, wo folgende Fehlermeldung erscheint:

![Zerto VPN](images/image-EN-40.png){.thumbnail}

Die wahrscheinlichste Ursache ist, dass der OVHcloud ZVM den ZVM des Kunden nicht über den TCP-Port 9081 kontaktieren kann. Der OVHcloud ZVM muss dazu in der Lage sein, die Verbindung herzustellen.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
