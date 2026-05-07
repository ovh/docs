---
title: 'Einen Ethereum-Node auf einer Public Cloud Instanz betreiben'
excerpt: 'Einen vollständigen Ethereum-Node mit Nethermind (EL) und Lighthouse (CL) auf einer OVHcloud Public Cloud Instanz mit Block Storage für Blockchain-Daten bereitstellen'
updated: 2026-03-12
---

## Ziel

Ethereum ist eines der am weitesten verbreiteten Blockchain-Netzwerke und bildet die Grundlage für Smart Contracts in den Bereichen dezentrale Finanzen (DeFi) und NFT-Ökosysteme. Der Betrieb eines eigenen Ethereum-Nodes ermöglicht es Ihnen, direkt mit dem Netzwerk zu interagieren, ohne auf Dienste von Drittanbietern angewiesen zu sein.

Ein voll funktionsfähiger Ethereum-Node erfordert zwei zentrale Softwarekomponenten, die koordiniert arbeiten:

1. **Execution Client (EL)** — verantwortlich für die Verarbeitung von Transaktionen und die Pflege des Ethereum-Zustands.
2. **Consensus Client (CL)** — verantwortlich für die Konsensbildung mit dem restlichen Netzwerk über das Ethereum Proof-of-Stake-Protokoll.

Diese beiden Komponenten müssen parallel laufen und sicher miteinander kommunizieren, um die Synchronisation mit dem Ethereum Mainnet aufrechtzuerhalten.

Das Ethereum-Ökosystem unterstützt mehrere Client-Implementierungen, die jeweils unabhängig entwickelt werden, aber der Ethereum-Spezifikation entsprechen. Zu den am häufigsten verwendeten Optionen gehören:

**Execution Clients (EL):**

- Geth
- Nethermind
- Reth
- Besu
- Erigon

**Consensus Clients (CL):**

- Lighthouse
- Prysm
- Teku
- Nimbus
- Lodestar

In diesem Tutorial verwenden wir die folgende Kombination:

- **Execution Client**: Nethermind
- **Consensus Client**: Lighthouse

**Dieses Tutorial führt Sie durch die Bereitstellung eines voll funktionsfähigen Ethereum-Nodes auf einer OVHcloud Public Cloud Instanz.**

> [!warning]
>
> Die Sicherheitshärtung und die betrieblichen Best Practices, die zum vollständigen Schutz eines Ethereum-Nodes erforderlich sind, gehen über den Rahmen dieses Tutorials hinaus. Es wird dringend empfohlen, zusätzliche Sicherheitsmaßnahmen zu implementieren — wie Firewall-Konfiguration, Schlüsselverwaltung und Monitoring — entsprechend Ihren organisatorischen Anforderungen und branchenüblichen Best Practices.
>

## Voraussetzungen

- Sie verfügen über ein [Public Cloud Projekt](/pages/public_cloud/compute/create_a_public_cloud_project) in Ihrem OVHcloud Kunden-Account.
- Sie verfügen über eine [Public Cloud Instanz](/pages/public_cloud/compute/public-cloud-first-steps) mit mindestens 2 vCores und 30 GB RAM (z.B. R2-30), auf der **Ubuntu 24.04 LTS** läuft.
- Sie verfügen über ein [Block Storage Volume](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) von mindestens 2 TB mit dem Typ **High-Speed Gen2**, das an Ihre Instanz angehängt ist.
- Sie haben administrativen Zugriff (sudo) auf die Instanz via SSH.

> [!primary]
>
> Laut der Dokumentation der Ethereum Foundation benötigt ein Ethereum-Node mindestens:
>
> - **Execution Client**: 2 CPU-Kerne, 16 GB RAM und 1 TB schnellen SSD-Speicher
> - **Consensus Client**: 2 CPU-Kerne, 8 GB RAM und Zugang zum selben Speicher
>
> Für Produktionsumgebungen und langfristige Stabilität werden höhere Spezifikationen dringend empfohlen.
>

## In der praktischen Anwendung

### Schritt 1 - Block Storage Volume mounten

Sobald Sie Ihr [Block Storage Volume erstellt und an Ihre Instanz angehängt](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance) haben, verbinden Sie sich per SSH mit Ihrer Instanz:

```bash
ssh -i <Pfad-zum-privaten-Schluessel> ubuntu@<IP_Adresse>
```

Listen Sie alle verfügbaren Blockgeräte auf, um Ihr angehängtes Volume zu identifizieren:

```bash
lsblk
```

![lsblk-Ausgabe mit dem angehängten Volume](images/lsblk_output.png){.thumbnail}

Dies zeigt eine Baumansicht aller Speichergeräte an. Identifizieren Sie das Gerät (z.B. `/dev/sdb`), das Ihrem 2-TB-Volume entspricht. Es wird formatiert und gemountet, um die Ethereum-Blockchain-Daten zu speichern.

Erstellen Sie eine Partition auf dem neu angehängten Volume. Ersetzen Sie `/dev/sdb` durch den im vorherigen Schritt identifizierten Gerätenamen, falls dieser abweicht:

```bash
sudo fdisk /dev/sdb
```

![fdisk-Partitionierung](images/fdisk_partition.png){.thumbnail}

Dies öffnet das Partitionierungswerkzeug für das ausgewählte Blockgerät. Erstellen Sie eine neue primäre Partition, die die gesamte Festplatte umfasst, und schreiben Sie die Änderungen. Nach Abschluss ist die Partition in der Regel als `/dev/sdb1` verfügbar.

Formatieren Sie die neue Partition mit dem ext4-Dateisystem, das eine stabile und weit verbreitete Wahl für die Speicherung von Ethereum-Blockchain-Daten ist:

```bash
sudo mkfs.ext4 /dev/sdb1
```

![ext4-Formatierung](images/mkfs_ext4.png){.thumbnail}

Erstellen Sie ein dediziertes Verzeichnis als Mountpunkt für das formatierte Volume, mounten Sie es und überprüfen Sie, ob es erfolgreich an das Dateisystem angehängt wurde:

```bash
sudo mkdir -p /mnt/chaindata
sudo mount /dev/sdb1 /mnt/chaindata
df -h
```

- `mkdir -p /mnt/chaindata` erstellt das Mount-Verzeichnis (`-p` stellt sicher, dass kein Fehler auftritt, wenn übergeordnete Verzeichnisse fehlen).
- `mount /dev/sdb1 /mnt/chaindata` mountet die formatierte Partition in das Verzeichnis.
- `df -h` zeigt alle gemounteten Dateisysteme in einem lesbaren Format an, sodass Sie bestätigen können, dass `/dev/sdb1` korrekt unter `/mnt/chaindata` mit der erwarteten Kapazität (ca. 2 TB) gemountet ist.

![Mount überprüfen](images/mount_verify.png){.thumbnail}

Ihre Festplatte ist jetzt gemountet, aber die Konfiguration ist **nicht persistent**: Wenn der Server neu startet, muss das Volume manuell gemountet werden. Um es beim Systemstart automatisch zu mounten, fügen Sie einen Eintrag in `/etc/fstab` hinzu.

Rufen Sie die **UUID (Universally Unique Identifier)** Ihres Volumes ab:

```bash
sudo blkid
```

![blkid-Ausgabe](images/blkid_output.png){.thumbnail}

Dieser Befehl listet alle Blockgeräte und ihre zugehörigen Attribute auf. Identifizieren Sie den Eintrag, der Ihrer neuen Partition entspricht (z.B. `/dev/sdb1`), und kopieren Sie den Wert des `UUID`-Feldes.

Bearbeiten Sie die Datei `/etc/fstab`, um den automatischen Mount zu konfigurieren:

```bash
sudo nano /etc/fstab
```

```text
UUID=<Ihre-UUID-hier> /mnt/chaindata ext4 nofail 0 0
```

Die Option `nofail` ermöglicht es dem System, den Bootvorgang fortzusetzen, auch wenn das Gerät nicht verfügbar ist.

### Schritt 2 - Dedizierten Benutzer erstellen

Erstellen Sie ein **dediziertes Benutzerkonto**, um alle Ethereum-Node-Operationen zu verwalten. Diese Vorgehensweise verbessert die Sicherheit, indem Node-Prozesse vom Standard-Systembenutzer getrennt werden.

```bash
sudo useradd -s /bin/bash -d /home/node_admin/ -m -G sudo node_admin
```

- `useradd` erstellt einen neuen Benutzer namens `node_admin` mit einem Home-Verzeichnis, einer Bash-Shell und Mitgliedschaft in der `sudo`-Gruppe.

Legen Sie ein Passwort für den neuen Benutzer fest (ersetzen Sie es durch ein sicheres Passwort oder konfigurieren Sie eine schlüsselbasierte Anmeldung):

```bash
echo 'node_admin:<sicheres_passwort>' | sudo chpasswd
```

Konfigurieren Sie die **SSH-Schlüssel-Authentifizierung** für den neuen Benutzer, indem Sie Ihren öffentlichen SSH-Schlüssel zur Datei `authorized_keys` hinzufügen. Ersetzen Sie den Platzhalter durch Ihren tatsächlichen öffentlichen Schlüssel:

```bash
sudo mkdir -p /home/node_admin/.ssh
sudo sh -c "echo '<Ihr-oeffentlicher-SSH-Schluessel>' > /home/node_admin/.ssh/authorized_keys"
```

Dies erstellt die Datei `authorized_keys` unter `/home/node_admin/.ssh/` und schreibt Ihren öffentlichen Schlüssel hinein, was eine sichere, passwortlose Anmeldung als Benutzer `node_admin` ermöglicht.

### Schritt 3 - Nethermind (Execution Client) installieren

Nethermind ist ein Ethereum Execution Client, der für die Verarbeitung von Transaktionen und die Pflege des Ethereum-Zustands verantwortlich ist.

Fügen Sie das offizielle Nethermind APT-Repository hinzu:

```bash
sudo apt-get install software-properties-common -y
sudo add-apt-repository ppa:nethermindeth/nethermind
```

![Nethermind-Repository hinzufügen](images/nethermind_add_repo.png){.thumbnail}

Aktualisieren Sie den Paketindex:

```bash
sudo apt-get update
```

![Pakete aktualisieren](images/nethermind_apt_update.png){.thumbnail}

Installieren Sie Nethermind:

```bash
sudo apt-get install nethermind -y
```

![Nethermind installieren](images/nethermind_install.png){.thumbnail}

### Schritt 4 - Lighthouse (Consensus Client) installieren

Lighthouse ist ein Ethereum Consensus Client, der für die Konsensbildung über das Proof-of-Stake-Protokoll verantwortlich ist.

Laden Sie die neueste stabile Version von der [Lighthouse GitHub Releases-Seite](https://github.com/sigp/lighthouse/releases) herunter:

```bash
curl -LO https://github.com/sigp/lighthouse/releases/download/v8.1.3/lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Lighthouse herunterladen](images/lighthouse_download.png){.thumbnail}

Entpacken Sie das Archiv:

```bash
tar -xvf lighthouse-v8.1.3-x86_64-unknown-linux-gnu.tar.gz
```

![Lighthouse entpacken](images/lighthouse_extract.png){.thumbnail}

Überprüfen Sie die Binärdatei und verschieben Sie sie an einen systemweiten Speicherort:

```bash
./lighthouse --version
sudo cp lighthouse /usr/bin
```

![Lighthouse-Version](images/lighthouse_version.png){.thumbnail}

### Schritt 5 - JWT-Geheimdatei erstellen

Ein gemeinsames JWT-Geheimnis ist für die sichere Kommunikation zwischen dem Execution Client und dem Consensus Client erforderlich.

```bash
sudo mkdir -p /secrets
openssl rand -hex 32 | tr -d "\n" | sudo tee /secrets/jwt.hex > /dev/null
```

![JWT-Geheimnis erstellt](images/jwt_secret.png){.thumbnail}

### Schritt 6 - screen für Sitzungspersistenz installieren

Auf einem Remote-Server werden laufende Prozesse beim Trennen der SSH-Verbindung beendet. `screen` hält sie unabhängig von Ihrer Sitzung im Hintergrund am Laufen.

```bash
screen --version
```

![screen-Version](images/screen_version.png){.thumbnail}

Falls noch nicht installiert:

```bash
sudo apt-get install screen -y
```

### Schritt 7 - Verzeichnis-Eigentümerschaft festlegen

Die Ethereum-Clients benötigen Schreibzugriff auf das Datenverzeichnis. Weisen Sie Ihrem aktuellen Benutzer die Eigentümerschaft des Mountpunkts zu:

```bash
sudo chown $USER:$USER /mnt/chaindata
```

Dies gewährt Ihrem Benutzer die volle Eigentümerschaft über `/mnt/chaindata`, sodass die Ethereum-Clients dort Daten lesen und schreiben können.

### Schritt 8 - Nethermind starten

Erstellen Sie eine screen-Sitzung und starten Sie Nethermind:

```bash
screen -S nethermind
```

```bash
nethermind -c mainnet \
  --data-dir /mnt/chaindata/nethermind \
  --JsonRpc.Enabled true \
  --HealthChecks.Enabled true \
  --HealthChecks.UIEnabled true \
  --JsonRpc.EngineHost 127.0.0.1 \
  --JsonRpc.EnginePort 8551 \
  --JsonRpc.JwtSecretFile /secrets/jwt.hex
```

Sie sollten Logeinträge sehen, die anzeigen, dass der Client läuft. Schließlich wird die folgende Nachricht erscheinen:

```text
Waiting for Forkchoice message from Consensus Layer
```

Dies zeigt an, dass der Execution Client darauf wartet, sich mit dem Consensus Client zu verbinden.

![Nethermind läuft](images/nethermind_running.png){.thumbnail}

Trennen Sie die Sitzung, indem Sie `Ctrl+A` und dann `D` drücken, um zur Haupt-Shell zurückzukehren.

Sie können aktive Sitzungen mit `screen -ls` auflisten und sich später mit `screen -r nethermind` erneut verbinden.

![screen-Sitzungen](images/screen_list.png){.thumbnail}

### Schritt 9 - Lighthouse starten

Erstellen Sie eine neue screen-Sitzung und starten Sie Lighthouse:

```bash
screen -S lighthouse
```

```bash
lighthouse bn \
  --network mainnet \
  --execution-endpoint http://127.0.0.1:8551 \
  --execution-jwt /secrets/jwt.hex \
  --checkpoint-sync-url https://mainnet.checkpoint.sigp.io \
  --http \
  --datadir /mnt/chaindata/lighthouse
```

![Lighthouse startet](images/lighthouse_start.png){.thumbnail}

Nach der Ersteinrichtung sollte Lighthouse mit der Synchronisation mit dem Netzwerk beginnen.

![Lighthouse synchronisiert](images/lighthouse_syncing.png){.thumbnail}

Trennen Sie die Sitzung, indem Sie `Ctrl+A` und dann `D` drücken.

### Schritt 10 - Synchronisation überprüfen

Zu diesem Zeitpunkt sollten sowohl der **Execution Client** (Nethermind) als auch der **Consensus Client** (Lighthouse) in separaten screen-Sitzungen laufen. Um zu bestätigen, dass sie korrekt verbunden sind und die Synchronisation läuft, verbinden Sie sich erneut mit der Nethermind-Sitzung und überprüfen Sie die Logeinträge:

```bash
screen -r nethermind
```

Wenn Lighthouse korrekt verbunden ist, sollte die Nachricht "Waiting for Forkchoice" verschwinden. Stattdessen sollten Sie **Engine API**-Kommunikation und Block-Verarbeitungslogs sehen:

```text
Received ForkChoice: ...
Syncing...
```

![EL- und CL-Synchronisation](images/el_cl_sync.png){.thumbnail}

Diese Logeinträge bestätigen, dass Nethermind Block-Vorschläge und Fork-Choice-Updates von Lighthouse empfängt und dass der Node mit dem Ethereum Mainnet synchronisiert.

Während sich dieses Tutorial auf die technische Bereitstellung konzentrierte, ist es wichtig, die Einrichtung durch geeignete Sicherheitshärtung, Monitoring und Wartungspraktiken zu ergänzen, um langfristige Stabilität zu gewährleisten. Mit der nun geschaffenen Grundlage können Sie die Funktionalität Ihres Nodes erweitern, ihn in größere Infrastrukturen integrieren oder als Basis für Forschung, Entwicklung und Staking-Operationen verwenden.

## Weiterführende Informationen

- [Ethereum Foundation - Run a node](https://ethereum.org/en/run-a-node/)
- [Nethermind-Dokumentation](https://docs.nethermind.io/)
- [Lighthouse-Dokumentation](https://lighthouse-book.sigmaprime.io/)

[Eine Public Cloud Instanz erstellen](/pages/public_cloud/compute/public-cloud-first-steps)

[Zusätzliche Festplatte auf einer Instanz erstellen und konfigurieren](/pages/public_cloud/compute/create_and_configure_an_additional_disk_on_an_instance)

Treten Sie unserer [User Community](/links/community) bei.
