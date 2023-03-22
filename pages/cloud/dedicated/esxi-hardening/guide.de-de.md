---
title: ‚Beherrschen und sichern Sie Ihren dedizierten ESXi Server ab dem ersten Start'
slug: esxi-hardening
excerpt: 'Entdecken Sie die verschiedenen Möglichkeiten, um Ihren dedizierten ESXi-Server wirksam zu schützen'
section: 'Sicherheit'
order: 5
updated: 2023-03-22
---

**Letzte Aktualisierung am 22.03.2023**

## Ziel

In dieser Anleitung erfahren Sie, wie Sie die Sicherheit Ihres ESXi-Systems optimieren.

Insbesondere zeigt dieser Leitfaden, wie: 

- Den Zugang zu Ihrem ESXi auf eine bestimmte IP-Adresse oder einen bestimmten Netzwerkbereich beschränken
- Dienste deaktivieren, die die Angriffsfläche Ihres Servers erhöhen.

Wir werden uns dabei auf die bordeigenen Funktionen von VMware, aber auch die von OVHcloud, stützen.

> [!warning]
> 
> In jüngster Zeit wurden die ESXi-Systeme Opfer einer Sicherheitslücke, die von böswilligen Gruppen sehr schnell über öffentliche Netzwerke ausgenutzt wurde.
>
> Weitere Informationen zu diesem Angriff finden Sie in einer zusätzlichen [FAQ (EN)](https://docs.ovh.com/gb/en/dedicated/esxi-faq/).
>

### Bewährte Sicherheitspraktiken:

- Aktualisieren Sie Ihre ESXi-Systeme regelmäßig.
- Beschränken Sie den Zugriff auf vertrauenswürdige IP-Adressen.
- Deaktivieren Sie die Ports und die nicht genutzten Dienstleistungen.
- Stellen Sie sicher, dass der Zugang zu Ihren Servern oder Netzwerkgeräten durch robuste Passwörter eingeschränkt, kontrolliert und geschützt ist.
- Sichern Sie Ihre kritischen Daten auf externen Festplatten und Backup-Servern, die geschützt und vom Internet isoliert sind.

**Optional**:

- Installieren Sie die notwendigen Protokollierungslösungen, um die Ereignisse auf Ihren kritischen Servern und Netzwerkgeräten zu überwachen.
- Erstellen Sie Sicherheitspakete für die Erkennung böswilliger Aktionen, Einbrüche (IPS / NDS) und die Überwachung der Netzwerktraffic-Bandbreite.

## Voraussetzungen

- Sie sind in Ihrem [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de){.external} angemeldet.
- Sie verfügen über einen dedizierten Server mit der deployten ESXi-Lösung.
- Sie haben ein Angebot abonniert, das mit unserer [Network Firewall-Funktion](https://docs.ovh.com/de/dedicated/firewall-network/) kompatibel ist, wenn Sie dieses für die Filterung verwenden möchten.

## In der praktischen Anwendung

### Nativer Einbruchsschutz

Hinweis auf seine Definition und sein Funktionsprinzip:

> [!primary]
> 
> Das ESXi-System verfügt über einen Sicherheitsmechanismus, der mit dem Administratorkonto verbunden ist.
> Bei mehreren irreführenden Zugriffsversuchen wird der Administratoraccount temporär gesperrt.
> Dieser Mechanismus schützt Ihr System und verhindert so böswillige Verbindungen.

> [!warning]
> 
> Wenn dieses System aktiviert wird und Sie sich sofort mit Ihrem ESXi verbinden möchten, müssen Sie den Administratoraccount manuell entsperren.
>
> Dazu müssen Sie Ihren ESXi-Server über das OVHcloud Kundencenter [neu starten](https://docs.ovh.com/de/dedicated/erste-schritte-dedicated-server/#neustart-ihres-dedicated-servers_1).
> 

Sie können die Zugriffs-Logs über einen SSH-Shell in folgenden Dateien einsehen:

- `/var/run/log/vobd.log` enthält die Logs, die für die Überwachung und Problemlösung verwendet werden können:

```
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [GenericCorrelator] 410535559us: [vob.user.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
2023-02-13T16:22:22.897Z: [UserLevelCorrelator] 410535867us: [esx.audit.account.locked] Remote access for ESXi local user account 'root' has been locked for 900 seconds after 6 failed login attempts.
```

- `/var/run/log/hostd.log` enthält die Logs des ESXi-Hosts (Tasks, Zugang zum WEB-Interface etc.):

```
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_do_authenticate: error [login:root][error code:2]
2023-02-21T08:44:19.711Z error hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] [module:pam_lsass]pam_sm_authenticate: failed [error code:2]
2023-02-21T08:44:19.712Z warning hostd[2101004] [Originator@6876 sub=Default opID=esxui-d48c-26a4] Rejected password for user root from xxx.xxx.xxx.xxx
2023-02-21T08:44:19.712Z info hostd[2101004] [Originator@6876 sub=Vimsvc.ha-eventmgr opID=esxui-d48c-26a4] Event 175 : Cannot login root@xxx.xxx.xxx.xxx
```

Alle Informationen sind auch über das Web-Administrations-Interface verfügbar. Klicken Sie auf das `Host`-Menü {.action} und gehen Sie in den Bereich `Monitor`{.action} und klicken Sie dann auf `Logs`{.action}.

![interface](images/gui_logs_.png){.thumbnail}

### Die Network Firewall Lösung

> [!primary]
>
> Zur Erinnerung: Network Firewall wird innerhalb des OVHcloud Netzwerks nicht berücksichtigt. Die konfigurierten Regeln haben daher keine Auswirkungen auf die Verbindungen aus diesem internen Netzwerk.
>

Wir schlagen Ihnen vor, unsere Network Firewall Filterlösung zu [aktivieren und zu verwenden](https://docs.ovh.com/de/dedicated/firewall-network/).
Mit dieser Lösung können Sie die legitimen Zugänge, die Sie über Ihr ESXi-System eingerichtet haben, problemlos verwalten.

Sie vermeiden es auch, Ihren Administrator-Account im Falle eines Angriffs unbeabsichtigt zu sperren.

Es wird daher empfohlen, die legitimen Zugänge wie folgt zu filtern:

- Die Regel 1 (Priority 0) erlaubt es externen vertrauenswürdigen Netzwerken, Zugang zu Ihrem ESXi-System zu erhalten.
- Die Regel 2 (Priority 1) blockiert alles andere.

![Network_Firewall](images/firewall_network_.png){.thumbnail}

### Filterung unter ESXi

> [!primary]
>
> Sie haben auch die Möglichkeit, die Zugriffe auf Ihr ESXi-System über die integrierte Firewall zu filtern.
> Sie können auch unnötige Dienstleistungen entsprechend Ihrer Nutzung deaktivieren.
>

> [!warning]
> 
> Die Deaktivierung der **SSH** und **SLP**-Dienste wird dringend empfohlen.
> Wenn Sie den SSH-Dienst trotzdem weiterhin verwenden, minimieren Sie dessen Verwendung und Zugriff.
> Das gilt auch für den Zugang zum **Shell**.
> Predigen Sie nur das Notwendige für jeden Ihrer Bedürfnisse.

#### Manipulation über das grafische Interface

**Dienste**

Klicken Sie auf das `Host`-Menü{.action} und gehen Sie in den Bereich `Manage`{.action} und klicken Sie dann auf `Services`{.action}.

Finden Sie in der Liste den `TSM-SSH`-Dienst und klicken Sie mit der rechten Maustaste auf die zugeordnete Leitung.

Beenden Sie die Dienstleistung, indem Sie auf `Stop`{.action} klicken:

![services_ssh](images/stop_service.png){.thumbnail}

Wählen Sie die `Policy` aus und ändern Sie sie entsprechend dem angezeigten Beispiel.

Wählen Sie die Option `Start and stop manually`{.action} , um zu vermeiden, dass der Dienst beim Start des Servers aktiv ist.

![services_ssh](images/ssh_disabled_.png){.thumbnail} 

Verwenden Sie die gleichen Einstellungen für den `slpd` Dienst:

![services_slp](images/slpd_.png){.thumbnail}

**Firewall-Regeln**

Klicken Sie auf das Menü `Networking`{.action} und dann auf `Firewall`{.action} rules und wählen Sie `Edit settings`{.action} für jeden der zu schützenden Dienste aus:

![rules](images/firewall_web_.png){.thumbnail}

Bearbeiten Sie die Regel, um nur die IP-Adressen oder Netzwerke hinzuzufügen, die Zugriff auf Ihr ESXi-System haben müssen.

Beispiel, das ausschließlich Verbindungen über IP 192.168.1.10 erlaubt:

![custom](images/custom_fw_rule.png){.thumbnail}

#### Manipulation via Shell

**Dienste**

Deaktivieren Sie unnötige Dienstleistungen:

- Service SLP

```bash
/etc/init.d/slpd stop
esxcli network firewall ruleset set -r CIMSLP -e 0
chkconfig slpd off
```

- SSH-Dienst

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
> - `vSphereClient` Dienst: Diese Dienstleistung entspricht dem WEB-Administrations-Interface auf Port 443 (HTTPS).
> - Der `SSHserver` Dienst: Diese Dienstleistung entspricht dem SSH-Zugang auf Port 22.

Beispiel mit dem vSphereClient-Dienst:

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

Wenn Sie den SSH-Dienst trotzdem verwenden möchten, erklären wir Ihnen hier, wie Sie einen SSH-Schlüssel-Zugang einrichten.

Erzeugen Sie die Schlüssel auf dem Rechner, der sich mit dem ESXi-Server verbinden soll. Der Algorithmus **ECDSA** mit 521 Bit ist für maximale Sicherheit zu bevorzugen:

> [!warning]
> Die Authentifizierung funktioniert mit einem Schlüsselpaar: einem öffentlichen und einem privaten Schlüssel.
> Geben Sie Ihren **privaten** Schlüssel unter keinen Umständen weiter, er muss auf dem Rechner bleiben, auf dem er generiert wurde.

Führen Sie folgenden Befehl aus:

```bash
ssh-keygen -t ecdsa -b 521 -C "key-ecdsa-esxi-host" -f /path-to-my-key/key-ecdsa
```

```
Generating public/private ecdsa key pair.
Enter file in which to save the key (/path-to-my-key/key-ecdsa_rsa):
```

Geben Sie ein robustes Passwort ein:

```
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
```

Nur der öffentliche Schlüssel (key-ecdsa.pub) muss auf den Maschinen, mit denen Sie sich verbinden möchten, mitgeteilt oder hinterlegt werden.

```
Your identification has been saved in /path-to-my-key/key-ecdsa.
Your public key has been saved in /path-to-my-key/key-ecdsa.pub.
The key fingerprint is:
SHA256:******************************************* key-ecdsa-esxi-host
```

Übertragen Sie den öffentlichen Schlüssel auf Ihren ESXi-Host, damit dieser als vertrauenswürdig deklariert werden kann:

```bash
cat /path-to-my-key/key-ecdsa.pub | ssh root@esxi-host-ip 'cat >> /etc/ssh/keys-root/authorized_keys'
```

## Weiterführende Informationen

Weitere Informationen zu bewährten Sicherheitsverfahren finden Sie in dieser [Anleitung](https://core.vmware.com/security-configuration-guide) von VMware.

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.