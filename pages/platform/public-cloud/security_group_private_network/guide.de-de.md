---
title: Verwaltung von Firewall-Regeln und Post Security in privaten Netzwerken
slug: firewall_security_pci
excerpt: Erfahren Sie hier, wie Sicherheitsgruppen auf der Public Cloud funktionieren
section: OpenStack
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie beim geringsten Zweifel die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button «Mitmachen» auf dieser Seite.
>

**Letzte Aktualisierung am 30.11.2021**

## Ziel

Die OpenStack-Plattform verwaltet Sicherheit via Firewalls, indem sie Verbindungsregeln in **Sicherheitsgruppen** (*security groups*) zusammenfasst. Die Regeln werden dann angewendet, indem Sicherheitsgruppen Netzwerk-Ports zugewiesen werden.

Ein **Port** im Kontext von [OpenStack Neutron](https://docs.openstack.org/neutron/latest/index.html){.external} ist ein Verbindungspunkt zwischen Subnetzen und Netzwerkelementen (Instanzen, Loadbalancer, Router etc.).

**Diese Anleitung erklärt, wie Sicherheitsgruppen für private Netzwerke in der Public Cloud verwaltet werden.**

> [!primary]
>
> Diese Anleitung betrifft nur private Netzwerkkonfigurationen. Für öffentliche Netzwerke gelten globale Firewall-Regeln.
>
> Bitte nehmen Sie auch die Informationen zur [Migration](#migration) bezüglich anstehender Änderungen der OpenStack Public Cloud [Regionen](#regions) zur Kenntnis.
>

## Voraussetzungen

- [Umgebung für die Verwendung der OpenStack-API vorbereiten](https://docs.ovh.com/de/public-cloud/vorbereitung_der_umgebung_fur_die_verwendung_der_openstack_api/)
- [OpenStack Umgebungsvariablen einrichten](https://docs.ovh.com/de/public-cloud/die-variablen-der-umgebung-openstack-laden/)

## In der praktischen Anwendung

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

### Regeln Ihrer Privat-Firewall verwalten

#### Regeln hinzufügen

Wenn Sie bestimmte Regeln konfigurieren möchten, können Sie die Standardsicherheitsgruppe ("default") ändern. Sie können auch eine neue Sicherheitsgruppe erstellen und dann Ihren Netzwerk-Port zuweisen.

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

#### Unterschiedliche Verhaltensweisen je nach Region <a name="regions"></a>

Die Standardkonfiguration für private Netzwerke kann je nach verwendeter Region verschieden sein.

> [!primary]
> In einigen Regionen wird die Eigenschaft "port security" als "*enabled*" angezeigt, auch wenn keine Regel auf das private Netzwerk angewendet wird. In einigen anderen Regionen (abhängig von der eingesetzten OpenStack-Version) wird die Eigenschaft "port security" als "*enabled*" angezeigt, aber die Regeln werden im privaten Netzwerk korrekt angewendet.
> 

Zusammengefasst, werden in den folgenden Regionen, in denen OpenStack Newton läuft, **keine Firewall-Regeln** für Ihre privaten Netzwerke funktionieren, selbst wenn die Port-Sicherheit aktiviert ist:

- Beauharnois: BHS1, BHS3, BHS5
- Frankfurt: DE1
- Gravelines: GRA1, GRA3, GRA5, GRA7, GRA11
- Straßburg: SBG5
- Singapur: SGP1
- Sydney: SYD1
- London: UK1
- Warschau: WAW1
- Hillsboro : US-WEST-OR-1
- Vint Hill: US-EAST-VA-1

In den folgenden Regionen (die OpenStack Stein verwenden) werden die Firewall-Regeln für private Netzwerke **wie erwartet funktionieren**:

- Gravelines: GRA9
- Straßburg: SBG7

OVHcloud wird schrittweise alle Regionen von Newton auf Stein upgraden, um die Funktion "port security" verfügbar zu machen.

Um Dienstausfälle während der Aktualisierung zu vermeiden, wird der Wert "port security" in allen bereits erstellten Netzwerken auf "*False*" gesetzt. Sobald eine Region zu OpenStack Stein aktualisiert wird, müssen Sie für die Verwendung von Firewall-Regeln in privaten Netzwerken die Eigenschaft "port security" auf *True* ändern.

Um zu überprüfen, ob die Eigenschaft "port security" in Ihrem privaten Netzwerk-Port aktiviert ist, verwenden Sie folgenden Befehl:

```bash
openstack port show d7c237cd-8dee-4503-9073-693d986baff3 -f value -c port_security_enabled
False
```

### Migrationsprozess <a name="migration"></a>

Die Migration erfolgt nach diesem Prozess:

- GRA9 und SBG7 werden sich den anderen Regionen anschließen, indem "port security" auf **disabled** gesetzt wird.
- Die Firewall-Regeln für neue Ports werden nicht angewendet, bis Sie "port security" für den neuen Port aktiviert haben. Bei bestehenden Ports ändert sich nichts.
- Die OpenStack-Regionen werden zur Stein-Version übergehen.
- Der "port security"-Standardwert wird zu **enabled** geändert (eine globale Kommunikation wird zu gegebener Zeit stattfinden).
- Die Firewall-Regeln werden für die neuen Ports funktionieren. Bei bestehenden Ports ändert sich nichts.
- Die Option zur Aktivierung der Eigenschaft "port security" für die bestehenden Ports wird aktiviert.

## Weiterführende Informationen

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.