---
title: 'Sichere Verwaltung eines ESXi Dedicated Server'
slug: esxi-hardening
excerpt: 'Erfahren Sie hier, wie Sie Ihren ESXi Server wirksam absichern'
section: 'Sicherheit'
order: 5
updated: 2023-03-22
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button “Mitmachen” auf dieser Seite.
>


**Letzte Aktualisierung am 22.03.2023**

## Ziel

In dieser Anleitung erfahren Sie, wie Sie die Sicherheit Ihres ESXi Systems optimieren.

Insbesondere wird erklärt, wie Sie: 

- Den Zugang zu ESXi auf eine bestimmte IP-Adresse oder einen bestimmten Netzwerkbereich beschränken.
- Dienste deaktivieren, um die Angriffsmöglichkeiten Ihres Servers zu verringern.

Wir behelfen uns dabei der nativen Funktionen von VMware, als auch der Optionen bei OVHcloud.

> [!warning]
> 
> Kürzlich wurden ESXi Systeme Opfer von Angriffen über eine Sicherheitslücke, die über öffentliche Netzwerke ausgenutzt wurde.
>
> Weitere Informationen zu diesem Angriff finden Sie in dieser [zusätzlichen FAQ (EN)](https://docs.ovh.com/gb/en/dedicated/esxi-faq/).
>

### Bewährte Sicherheitspraktiken:

- Aktualisieren Sie Ihre ESXi Systeme regelmäßig.
- Beschränken Sie den Zugriff auf vertrauenswürdige IP-Adressen.
- Deaktivieren Sie Ports und nicht genutzte Dienste.
- Stellen Sie sicher, dass der Zugang zu Ihren Servern und Netzwerkgeräten mit sicheren Passwörtern eingeschränkt, kontrolliert und geschützt ist.
- Sichern Sie Ihre kritischen Daten auf externen Medien und Backup-Servern, die abgesichert und vom Internet isoliert sind.

**Optional**:

- Installieren Sie Protokollierungslösungen, um Ereignisse auf Ihren kritischen Servern und Netzwerkgeräten zu überwachen.
- Konfigurieren Sie Sicherheitspakete für die Erkennung unbefugter Zugriffe und Angriffe (IPS / NIDS) und die Überwachung der Netzwerktraffic-Bandbreite.

## Voraussetzungen

- Sie haben Zugriff auf Ihr [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de).
- Sie verfügen über einen dedizierten Server mit ESXi installiert.
- Sie haben einen separaten Dienst, der mit unserer [Network Firewall](https://docs.ovh.com/de/dedicated/firewall-network/) kompatibel ist, sofern Sie diese Option zur Filterung verwenden möchten.

## In der praktischen Anwendung

### Nativer Einbruchsschutz

Hinweis zu Definition und Funktionsprinzip:

> [!primary]
> 
> Das ESXi System verfügt über einen Sicherheitsmechanismus, der mit dem Administratorkonto verbunden ist.
> Bei mehreren fehlgeschlagenen Zugriffsversuchen wird das Administratorkonto temporär gesperrt.
> Dieser Mechanismus schützt Ihr System und verhindert so unbefugte Verbindungen.

> [!warning]
> 
> Wenn dieser Schutz ausgelöst wurde und Sie sich sofort mit Ihrem ESXi verbinden möchten, müssen Sie das Administratorkonto manuell entsperren.
>
> Dazu muss der ESXi Server über das OVHcloud Kundencenter [neu gestartet werden](https://docs.ovh.com/de/dedicated/erste-schritte-dedicated-server/#neustart-ihres-dedicated-servers).
> 

Sie können die Zugrifflogs über eine SSH-Verbindung in folgenden Dateien einsehen:

- `/var/run/log/vobd.log` enthält die Logs, die für Überwachung und Problemlösung verwendet werden können:

```
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [GenericCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535867us: [esx.audit.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
```

- `/var/run/log/hostd.log` enthält die Logs des ESXi Hosts (Tasks, Zugang zum WEB-Interface, etc.):

```output
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_do_authenticate: error [login:root][error code:2]
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_sm_authenticate: failed [error code:2]
2023-02-21T08:44:19.712Z warning hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] Rejected password for user root from xxx.xxx.xxx.xxx
2023-02-21T08:44:19.712Z info hostd[2101004] [Originator@6876 sub=Vimsvc.ha-eventmgr opID=esxui-d48c-26a4] Event 175 : Cannot login root@xxx.xxx.xxx.xxx
```

Alle Informationen sind auch über das Web-Interface verfügbar. Klicken Sie auf `Host`{.action} und gehen Sie in den Bereich `Monitor`{.action} Klicken Sie dann auf `Logs`{.action}.

![interface](images/gui_logs_.png){.thumbnail}

### Die Network Firewall

> [!primary]
>
> Zur Erinnerung: Regeln der Network Firewall werden innerhalb des OVHcloud Netzwerks nicht berücksichtigt. Die konfigurierten Regeln haben daher keine Auswirkungen auf die Verbindungen aus dem internen Netzwerk.
>

Wir empfehlen, unsere Network Firewall Filterlösung zu [aktivieren und zu verwenden](https://docs.ovh.com/de/dedicated/firewall-network/).
Mit dieser Lösung können Sie die legitimen Zugänge, die Sie über Ihr ESXi System eingerichtet haben, problemlos verwalten.

Sie vermeiden es auch, Ihren Administrator-Account im Falle eines Angriffs unbeabsichtigt zu sperren.

Es wird daher empfohlen, die legitimen Zugänge wie folgt zu filtern:

- Regel 1 (Priority 0) erlaubt es externen vertrauenswürdigen Netzwerken, Zugang zu Ihrem ESXi System zu erhalten.
- Regel 2 (Priority 1) blockiert alles weitere.

![Network_Firewall](images/firewall_network_.png){.thumbnail}

### Filterung unter ESXi

> [!primary]
>
> Sie haben auch die Möglichkeit, die Zugriffe auf Ihr ESXi System über die integrierte Firewall zu filtern.
> Sie können zusätzlich ungenutzte Dienste deaktivieren.
>

> [!warning]
> 
> Die Deaktivierung von **SSH** und **SLP** wird dringend empfohlen.
> Wenn Sie den SSH-Dienst weiterhin verwenden, minimieren Sie dessen Verwendung und die Zugriffe.
> Das gilt auch für den **Shell**-Zugang.
> Lassen Sie nur das absolut Notwendige aktiviert.

#### Manipulation über das grafische Interface

**Dienste**

Klicken Sie auf `Host`{.action} und gehen Sie in den Bereich `Manage`{.action}. Klicken Sie dann auf `Services`{.action}.

Finden Sie in der Liste den `TSM-SSH`-Dienst und klicken Sie mit der rechten Maustaste auf die Zeile.

Beenden Sie den Dienst, indem Sie auf `Stop`{.action} klicken:

![services_ssh](images/stop_service.png){.thumbnail}

Wählen Sie die `Policy` aus und ändern Sie sie entsprechend dem angezeigten Beispiel.

Wählen Sie die Option `Start and stop manually`{.action} , um zu vermeiden, dass der Dienst beim Start des Servers aktiv wird.

![services_ssh](images/ssh_disabled_.png){.thumbnail} 

Verwenden Sie die gleichen Einstellungen für den Dienst `slpd`:

![services_slp](images/slpd_.png){.thumbnail}

**Firewall-Regeln**

Klicken Sie auf das Menü `Networking`{.action} und dann auf `Firewall rules`{.action}. Wählen Sie `Edit settings`{.action} für jeden der zu schützenden Dienste aus.

![rules](images/firewall_web_.png){.thumbnail}

Bearbeiten Sie die Regel, um nur die IP-Adressen oder Netzwerke hinzuzufügen, die Zugriff auf Ihr ESXi System haben müssen.

Beispiel, das ausschließlich Verbindungen über IP 192.168.1.10 erlaubt:

![custom](images/custom_fw_rule.png){.thumbnail}

#### Manipulation via Shell

**Dienste**

Deaktivieren Sie unnötige Dienste:

- SLP

```bash
/etc/init.d/slpd stop
esxcli network firewall ruleset set -r CIMSLP -e 0
chkconfig slpd off
```

- SSH

```bash
/etc/init.d/SSH stop
esxcli network firewall ruleset set -r sshServer -e 0
chkconfig SSH off
```

Überprüfen Sie alle aktiven Dienste beim Start:

```bash
chkconfig --list | grep on
```
<br/>
<br/>

**Firewall-Regeln**

Bestehende Firewall-Regeln anzeigen:

```bash
esxcli network firewall ruleset list
esxcli system account list
```

> Erläuterungen zu den Änderungen/Anpassungen der Zugangsregeln: 
> 
> - `vSphereClient`: Dieser Dienst entspricht dem WEB-Administrationsbereich über Port 443 (HTTPS).
> - `SSHserver`: Dieser Dienst entspricht dem SSH-Zugang über Port 22.

Beispiel mit dem Dienst `vSphereClient`:

```bash
esxcli network firewall ruleset list --ruleset-id vSphereClient
```

Stellen Sie sicher, dass die Firewall-Regel aktiv ist:

```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --enabled true
```

Geben Sie die Liste der für diese Regel autorisierten IPs an:

```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```

Ergebnis:

```
Ruleset        Allowed IP Addresses
-------------  --------------------
vSphereClient  All
```

Ändern Sie den Status des Tags, indem Sie diesen deaktivieren:

```bash
esxcli network firewall ruleset set --ruleset-id vSphereClient --allowed-all false
```

Erlauben Sie ausschließlich die legitime IP-Adresse 192.168.1.10:

```bash
esxcli network firewall ruleset allowedip add --ruleset-id vSphereClient --ip-address 192.168.1.10
```

Überprüfen Sie das Vorhandensein der Adresse in der Zugangsliste:

```bash
esxcli network firewall ruleset allowedip list --ruleset-id vSphereClient
```

Ergebnis:

```
Ruleset        Allowed IP Addresses
-------------  --------------------
vSphereClient  192.168.1.10
```
<br/>
<br/>

Wenn Sie den SSH-Dienst trotzdem verwenden möchten, erklären wir Ihnen hier, wie Sie einen Zugang über SSH-Schlüssel einrichten.

Erzeugen Sie die Schlüssel auf dem Gerät, das sich mit dem ESXi Server verbinden soll. Der Algorithmus **ECDSA** mit 521 Bit ist für maximale Sicherheit zu bevorzugen:

> [!warning]
> Die Authentifizierung funktioniert mit einem Schlüsselpaar: einem öffentlichen und einem privaten Schlüssel.
> Geben Sie Ihren **privaten** Schlüssel unter keinen Umständen weiter. Er verbleibt auf dem System, auf dem er generiert wurde.

Führen Sie folgenden Befehl aus:

```bash
ssh-keygen -t ecdsa -b 521 -C "key-ecdsa-esxi-host" -f /path-to-my-key/key-ecdsa
```

```
Generating public/private ecdsa key pair.
Enter file in which to save the key (/path-to-my-key/key-ecdsa_rsa):
```

Geben Sie ein starkes Passwort ein:

```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Nur der öffentliche Schlüssel (key-ecdsa.pub) muss auf den Servern, mit denen Sie sich verbinden möchten, vorhanden sein.

```
Your identification has been saved in /path-to-my-key/key-ecdsa.
Your public key has been saved in /path-to-my-key/key-ecdsa.pub.
The key fingerprint is:
SHA256:******************************************* key-ecdsa-esxi-host
```

Übertragen Sie den öffentlichen Schlüssel auf Ihren ESXi Host, damit dieser als vertrauenswürdig deklariert werden kann:

```bash
cat /path-to-my-key/key-ecdsa.pub | ssh root@esxi-host-ip 'cat >> /etc/ssh/keys-root/authorized_keys'
```

## Weiterführende Informationen

Weitere Informationen zu bewährten Sicherheitsverfahren finden Sie in [dieser Anleitung von VMware](https://core.vmware.com/security-configuration-guide).

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
