---
title: 'Prometheus Agent auf einer Public Cloud Instanz installieren'
excerpt: 'Erfahren Sie, wie Sie den Prometheus Node Exporter- oder Windows Exporter-Agent auf einer OVHcloud Public Cloud Instanz installieren, um Metriken zu sammeln'
updated: 2026-01-28
---

## Ziel

Prometheus ist ein Monitoring-System und eine Zeitreihendatenbank. Sie können den Agenten auf einer OVHcloud Public Cloud Instanz installieren und verwenden, um Metriken von Ihren Servern und Anwendungen zu sammeln.

**Diese Anleitung erklärt, wie Sie den Prometheus Node Exporter- oder Windows Exporter-Agent auf einer OVHcloud Public Cloud Instanz installieren.**

> [!warning]
> OVHcloud stellt Ihnen Dienstleistungen zur Verfügung, für deren Konfiguration und Verwaltung Sie verantwortlich sind. Es liegt somit bei Ihnen, sicherzustellen, dass diese ordnungsgemäß funktionieren.
>
> Diese Anleitung soll Sie bei allgemeinen Aufgaben bestmöglich unterstützen. Wir empfehlen jedoch, einen [spezialisierten Dienstleister](/links/partner) zu kontaktieren oder Ihre Fragen an die [OVHcloud Community](/links/community) zu richten, wenn Sie auf Schwierigkeiten stoßen.
>

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](/pages/public_cloud/public_cloud_cross_functional/create_a_public_cloud_project).
- Sie haben [administrativen Zugriff auf die Instanz](/pages/public_cloud/compute/public-cloud-first-steps).
- Sie haben einen Prometheus-Server, der von der Instanz aus erreichbar ist.

## In der praktischen Anwendung

Folgen Sie diesen Schritten, um den Prometheus Node Exporter- oder Windows Exporter-Agent auf Ihrer OVHcloud Public Cloud Instanz zu installieren, um Metriken zu sammeln.

### Schritt 1: Verbindung mit Ihrer Instanz herstellen

Stellen Sie über SSH eine Verbindung zu Ihrer Instanz her:

```bash
ssh root@<INSTANCE_IP>
```

Ersetzen Sie `<INSTANCE_IP>` durch die öffentliche IP-Adresse Ihrer Instanz.

> [!primary]
>
> Auf Windows können Sie PowerShell mit SSH oder einen SSH-Client wie [PuTTY](/pages/web_cloud/web_hosting/ssh_using_putty_on_windows) verwenden, wenn Sie eine Befehlszeile bevorzugen.
>
> Bei Windows Server mit GUI können Sie auch RDP (Remote Desktop) verwenden.
>

### Schritt 2: System aktualisieren

Stellen Sie sicher, dass Ihre Systempakete auf dem neuesten Stand sind:

> [!tabs]
> Für Debian/Ubuntu
>>
>> ```bash
>> sudo apt update && sudo apt upgrade -y
>> ```
>>
> Für CentOS/RHEL
>>
>> ```bash
>> sudo yum update -y
>> ```
>>
> Für Windows
>>
>> Keine spezifische Systemaktualisierung ist für Windows Exporter erforderlich. Optional können Sie sicherstellen, dass Ihr System über Windows Update auf dem neuesten Stand ist.
>>

### Schritt 3: Prometheus-Benutzer erstellen (optional)

Die Erstellung eines dedizierten Benutzers für Node Exporter verbessert die Sicherheit unter Linux, ist aber für Windows Exporter unter Windows optional.

> [!tabs]
> Für Linux
>>
>> ```bash
>> sudo useradd --no-create-home --shell /bin/false prometheus
>> ```
>>
>> - Dies erstellt einen Benutzer mit eingeschränkten Berechtigungen, um Node Exporter auszuführen.
>> - Empfohlen für die Produktion, um Sicherheitsrisiken zu reduzieren.
>> - Sie können Node Exporter anschließend unter diesem Benutzer über systemd starten.
>>
> Für Windows
>>
>> > [!primary]
>> >
>> > **Hinweis**: Führen Sie diese PowerShell-Befehle innerhalb der VM über SSH aus.
>> >
>>
>> ```powershell
>> New-LocalUser "prometheus" -NoPassword -Description "User for Node Exporter"
>>
>> Add-LocalGroupMember -Group "Users" -Member "prometheus"
>> ```
>>
>> **Hinweis**: Windows Exporter kann unter dem aktuellen Benutzer laufen. Die Erstellung eines dedizierten Benutzers ist optional, um den Zugriff strikt zu kontrollieren.
>>

### Schritt 4: Node Exporter / Windows Exporter herunterladen

> [!tabs]
> Für Linux
>>
>> ```bash
>> # Ersetzen Sie VERSION durch die neueste Version, z. B. 1.10.2
>> VERSION="1.10.2"
>> wget https://github.com/prometheus/node_exporter/releases/download/v$VERSION/node_exporter-$VERSION.linux-amd64.tar.gz
>> tar xvf node_exporter-$VERSION.linux-amd64.tar.gz
>> cd node_exporter-$VERSION.linux-amd64
>> ```
>>
> Für Windows (über SSH/PowerShell in der VM)
>>
>> > [!primary]
>> >
>> > `Invoke-WebRequest` erfordert PowerShell 3.0 oder neuer.
>> >
>>
>> ```powershell
>> mkdir C:\windows_exporter
>> cd C:\windows_exporter
>>
>> Invoke-WebRequest -Uri "https://github.com/prometheus-community/windows_exporter/releases/download/v0.31.3/windows_exporter-0.31.3-amd64.msi" -OutFile "windows_exporter.msi"
>> ```
>>
>> Alles wird direkt innerhalb der VM durchgeführt, es ist kein Dateitransfer von Ihrem lokalen Rechner erforderlich.
>>

### Schritt 5: Node Exporter / Windows Exporter ausführen

> [!tabs]
> Für Linux
>>
>> ```bash
>> ./node_exporter
>> ```
>>
>> - **Optional**: Richten Sie einen systemd-Dienst ein, um Node Exporter automatisch auszuführen.
>> - Wenn Sie den dedizierten prometheus-Benutzer verwenden, stellen Sie sicher, dass der Dienst unter diesem Account läuft.
>>
> Für Windows (über SSH/PowerShell)
>>
>> ```powershell
>> msiexec /i windows_exporter.msi ENABLED_COLLECTORS=cpu,cs,logical_disk,net,os,service,system,textfile /qn
>> ```
>>
>> - Auf Desktop oder Core können Sie es direkt in PowerShell ausführen oder es als Windows-Dienst konfigurieren.
>>
>> Es ist möglich, Sammler zu anpassen; siehe die [offizielle Dokumentation](https://github.com/prometheus-community/windows_exporter#collectors) für die vollständige Liste.
>>

### Schritt 6: Node Exporter / Windows Exporter überprüfen

> [!primary]
>
> Node Exporter lauscht standardmäßig auf Port 9100.
>
> Windows Exporter lauscht standardmäßig auf Port 9182.
>
> Ersetzen Sie <PORT> durch 9100 für Linux oder 9182 für Windows.
>

Der folgende Befehl ermöglicht es Ihnen, Metriken wie CPU, Arbeitsspeicher, Disks- und Netzwerkverwendung zu überwachen:

```bash
curl http://<INSTANCE_IP>:<PORT>/metrics
```

> [!primary]
>
> Auf Windows Desktop können Sie auch einen Browser öffnen, um dies zu überprüfen. Über SSH/PowerShell verwenden Sie jedoch `curl` oder `Invoke-WebRequest`.
>

### Schritt 7: Firewall-/Sicherheitsregeln (OVHcloud)

Stellen Sie sicher, dass der von dem Exporter verwendete Port sowohl in der VM-Firewall als auch in Ihrer OVHcloud Sicherheitsgruppe geöffnet ist.

Beschränken Sie den Zugriff auf Ihren Prometheus-Server, um die Sicherheit zu gewährleisten.

> [!tabs]
> Für Linux (Debian/Ubuntu mit UFW)
>>
>> ```bash
>> sudo ufw allow 9100/tcp
>> sudo ufw status
>> ```
>>
>> **Hinweis**: Wenn UFW **Status: inactive** anzeigt, bedeutet dies, dass die Firewall auf der VM nicht aktiviert ist. Die Portregel ist hinzugefügt, aber nicht erzwungen.
>>
>> Die Sicherheit wird hauptsächlich über Ihre OVHcloud Sicherheitsgruppe verwaltet.
>>
>> Wenn Sie UFW aktivieren möchten, erlauben Sie zunächst SSH, um nicht ausgeschlossen zu werden:
>>
>> ```bash
>> sudo ufw allow ssh
>> sudo ufw enable
>> sudo ufw status
>> ```
>>
> Für Windows
>>
>> Öffnen Sie Port 9182 in der Windows-Firewall:
>>
>> ```powershell
>> netsh advfirewall firewall add rule name="Windows Exporter" dir=in action=allow protocol=TCP localport=9182
>> ```
>>
>> Sie können auch überprüfen:
>>
>> ```powershell
>> netsh advfirewall firewall show rule name=all | findstr "9182"
>> ```
>>

### Schritt 8: Node Exporter / Windows Exporter mit Prometheus verbinden

1\. Bearbeiten Sie die Prometheus-Konfiguration auf Ihrem Prometheus-Server (prometheus.yml):

```yaml
scrape_configs:
  - job_name: 'node_exporter' # oder 'windows_exporter'
    static_configs:
      - targets: ['<INSTANCE_IP>:9100'] # oder 9182 für Windows Exporter
```

2\. Laden Sie Prometheus neu:

> [!tabs]
> Für Linux
>>
>> ```bash
>> sudo systemctl reload prometheus
>> ```
>>
> Für Windows
>>
>> ```powershell
>> sc stop prometheus
>> sc start prometheus
>> ```
>>

3\. Die Metriken von Node Exporter / Windows Exporter sollten nun in Prometheus angezeigt werden.

## Weiterführende Informationen

[Offizielle Node Exporter-Dokumentation](https://github.com/prometheus/node_exporter)

[Erstellen und Konfigurieren einer Sicherheitsgruppe in Horizon](/pages/public_cloud/compute/setup_security_group)

Treten Sie unserer [User Community](/links/community) bei.