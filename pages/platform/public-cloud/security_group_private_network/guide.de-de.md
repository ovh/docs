---
title: Verwaltung von Firewall-Regeln und Port Security für Netzwerke über die OpenStack CLI
slug: firewall_security_pci
excerpt: Erfahren Sie hier, wie Sicherheitsgruppen in der Public Cloud funktionieren
section: OpenStack
---

<style>
 pre {
     font-size: 14px;
 }
 pre.console {
   background-color: #300A24; 
   color: #ccc;
   font-family: monospace;
   padding: 5px;
   margin-bottom: 5px;
 }
 pre.console code {
   border: solid 0px transparent;
   font-family: monospace !important;
   font-size: 0.75em;
   color: #ccc;
 }
 .small {
     font-size: 0.75em;
 }
</style>

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 25.08.2022**

## Ziel

Die OpenStack-Plattform verwaltet Sicherheit via Firewalls, indem sie Verbindungsregeln in **Sicherheitsgruppen** (*security groups*) zusammenfasst. Die Regeln werden dann angewendet, indem Sicherheitsgruppen Netzwerk-Ports zugewiesen werden.

Ein **Port** im Kontext von [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} ist ein Verbindungspunkt zwischen Subnetzen und Netzwerkelementen (Instanzen, Loadbalancer, Router etc.).

**Diese Anleitung erklärt, wie Sicherheitsgruppen für private und öffentliche Netzwerke in der Public Cloud verwaltet werden.**

## Voraussetzungen

- [Umgebung für die Verwendung der OpenStack-API vorbereiten](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/)
- [OpenStack Umgebungsvariablen einrichten](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/)

## In der praktischen Anwendung

### Aktivierungsvorgang <a name="activation"></a>

> [!primary]
>
> Dieser Abschnitt der Anleitung betrifft nur die Konfiguration privater Netzwerke.

#### Für ein bereits erstelltes privates Netzwerk

Um Konfigurationsfehler bei Upgrades von OpenStack Stein und Open vSwitch zu vermeiden, wurde der Parameter "port security" in bestehenden Netzwerken auf "False" eingestellt.

Verwenden Sie OpenStack CLI, um "port security" für Ihre existierenden Ports und Ihr Netzwerk zu aktivieren.

Wenn Sie Firewall-Regeln in privaten Netzwerken verwenden möchten, muss zuerst die Eigenschaft "port security" auf "True" gesetzt werden:

```bash
openstack network set --enable-port-security <network_ID>
```

Aktivieren Sie anschließend "port security" auf dem Port des entsprechenden Dienstes in diesem Netzwerk. 

> [!primary]
> Zur Erinnerung: Um den Port abzurufen, können Sie OpenStack CLI verwenden. Führen Sie den Befehl `openstack port list --server <server_ID>` aus, um die Ports auf einem bestimmten Server abzurufen.
>

Aktivieren Sie "port security" für alle Dienste mit einem aktiven Port in diesem Netzwerk:

```bash
openstack port set --enable-port-security <port_ID>
```

Sie können überprüfen, ob "port security" auf einem bestimmten Port aktiviert ist:

```bash
openstack port show <port-ID> -f value -c port_security_enabled
```

Das Ergebnis sollte entsprechend der folgenden Ausgabe sein:

<pre class="console"><code>$ openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
</code></pre>

#### Für ein neues privates Netzwerk:

Da die Aktualisierungen auf die Stein-Version in den OpenStack-Regionen und auf die neue Version von Open vSwitch durchgeführt wurde ([Private network port default configuration change](https://public-cloud.status-ovhcloud.com/incidents/z6qq4bcvsn11)), wird der Parameter "port pecurity" in jedem neu erstellten privaten Netzwerk standardmäßig auf "True" festgelegt.

Damit wird sichergestellt, dass die Standardeinstellung "True" als Richtlinie konsistent mit Vanilla-Deployments von OpenStack ist.

### Standardeinstellungen

Jeder Netzwerk-Port ist mit einer Sicherheitsgruppe verbunden, die spezifische Regeln enthält.

Die Sicherheitsgruppe "default" enthält folgende Regeln:

```bash
openstack security group rule list default

+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| ID                                   | IP Protocol | Ethertype | IP Range  | Port Range | Remote Security Group |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
| 3a5564b7-5b68-4923-b796-26eb623c5b53 | None        | IPv6      | ::/0      |            | None                  |
| 43f2b673-9cbc-4bac-ad66-22ef4789d0fc | None        | IPv6      | ::/0      |            | None                  |
| a6a1ecfd-4713-4316-a020-74eccd49fd6c | None        | IPv4      | 0.0.0.0/0 |            | None                  |
| cd66a601-de94-4dbe-ae21-44792229d351 | None        | IPv4      | 0.0.0.0/0 |            | None                  |
+--------------------------------------+-------------+-----------+-----------+------------+-----------------------+
```

Die Ausgabe zeigt, dass alle Verbindungen für jedes Protokoll und in beide Richtungen erlaubt sind.

Je nach Region kann die Implementierung unterschiedlich sein, das Ergebnis ist jedoch identisch: Alle Verbindungen sind erlaubt.

Demnach lassen alle Netzwerk-Ports (öffentlich und privat) jede Verbindung beim Starten einer Instanz zu.

### Private Regeln Ihrer Firewall verwalten

#### Regeln hinzufügen

Wenn Sie bestimmte Regeln konfigurieren möchten, können Sie eine neue Sicherheitsgruppe erstellen und dann Ihren Netzwerk-Port zuweisen.

Verwenden Sie diesen Befehl, um die Gruppe zu erstellen:

```bash
openstack security group create private

+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field           | Value                                                                                                                                                                      |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
| description     | private                                                                                                                                                                    |
| id              | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                       |
| location        | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone=    |
| name            | private                                                                                                                                                                    |
| project_id      | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                           |
| revision_number | 1                                                                                                                                                                          |
| rules           | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv4', id='54fae025-3439-4e45-8745-2ffe5b261f72', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
|                 | created_at='2021-11-05T15:14:37Z', direction='egress', ethertype='IPv6', id='ad1aa507-79bd-434f-b674-221ef41d9ba6', revision_number='1', updated_at='2021-11-05T15:14:37Z' |
| stateful        | None                                                                                                                                                                       |
| tags            | []                                                                                                                                                                         |
| updated_at      | 2021-11-05T15:14:37Z                                                                                                                                                       |
+-----------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

Dieses Beispiel einer Sicherheitsgruppe hat nur Ausgangsregeln, was bedeutet, dass keine Eingangskommunikation erlaubt ist.

Um beispielsweise eine Regel für SSH-Verbindungen hinzuzufügen, verwenden Sie folgenden Befehl:

```bash
openstack security group rule create --protocol tcp --dst-port 22 private

+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field             | Value                                                                                                                                                                   |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| created_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
| description       |                                                                                                                                                                         |
| direction         | ingress                                                                                                                                                                 |
| ether_type        | IPv4                                                                                                                                                                    |
| id                | 8f026e18-1c8b-4042-8655-10c9a773d131                                                                                                                                    |
| location          | cloud='', project.domain_id=, project.domain_name='Default', project.id='9ea425f44c284d488c6d8e28ccc8bff0', project.name='3614264792735868', region_name='GRA11', zone= |
| name              | None                                                                                                                                                                    |
| port_range_max    | 22                                                                                                                                                                      |
| port_range_min    | 22                                                                                                                                                                      |
| project_id        | 9ea425f44c284d488c6d8e28ccc8bff0                                                                                                                                        |
| protocol          | tcp                                                                                                                                                                     |
| remote_group_id   | None                                                                                                                                                                    |
| remote_ip_prefix  | 0.0.0.0/0                                                                                                                                                               |
| revision_number   | 1                                                                                                                                                                       |
| security_group_id | eeae05a8-c81e-40a4-a3aa-fdbebcbf72b4                                                                                                                                    |
| tags              | []                                                                                                                                                                      |
| updated_at        | 2021-11-05T15:19:37Z                                                                                                                                                    |
+-------------------+-------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```


Geben Sie folgenden Befehl ein, um Ihre Sicherheitsgruppe Ihrem Port zuzuweisen:

```bash
openstack port set --security-group private 5be009d9-fc2e-4bf5-a152-dab52614b02d
```


## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
