---
title: "Die Größe einer Public Cloud Instanz über OpenStack CLI ändern"
excerpt: Erfahren Sie hier, wie Sie die Ressourcen Ihrer Instanz skalieren können, um auf erhöhte Anforderungen zu reagieren
updated: 2023-09-26
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

Ihre Instanz kann aufgrund erhöhter Aktivität oder einfach aufgrund neuer Anforderungen nicht mehr über genügend Ressourcen verfügen, um zusätzliche Lasten zu bewältigen. Mit der OVHcloud Public Cloud können Sie die verfügbaren Ressourcen für Ihre Instanz in nur wenigen Schritten erhöhen.

**Diese Anleitung erklärt, wie Sie die Größe Ihrer Public Cloud Instanz über OpenStack CLI ändern.**

> [!primary]
> **Limitierungen**
>
> - Bei klassischen Instanzen ist nur eine Größenänderung auf ein höheres Modell (*Upscaling*) möglich.
> - Eine [Metal Instanz](https://www.ovhcloud.com/de/public-cloud/metal-instances/) kann nur auf ein anderes Modell der Reihe **Metal** geändert werden.
> - *Flex*-Instanzen ermöglichen die Größenänderung auf größere oder keinere Modelle aufgrund einer fixen Diskgröße.
>

## Voraussetzungen

- Sie verfügen über eine [Public Cloud Instanz](https://www.ovhcloud.com/de/public-cloud/).
- Sie haben einen [OpenStack User erstellt](create_and_delete_a_user1.).
- Sie haben [OpenStack CLI auf Ihrem System installiert](prepare_the_environment_for_using_the_openstack_api1.).
- Sie haben die [OpenStack Umgebungsvariablen konfiguriert](loading_openstack_environment_variables1.).

## In der praktischen Anwendung

> [!warning]
>
> Die Instanz wird für die Dauer der Operation angehalten.
>

### Instanz sichern

Bei einer Größenänderung wird die Instanz für die Dauer der Operation angehalten. Es wird daher empfohlen, vor dem Fortfahren eine Sicherungskopie Ihrer Instanz zu erstellen und alle laufenden Prozesse zu stoppen. Weitere Informationen zu den Backup-Methoden finden Sie in [unserer Anleitung](save_an_instance1.).

### Instanzen auflisten

Als ersten Schritt können Sie Ihre Instanzen auflisten, um den Namen der Instanz abzurufen, deren Größe Sie ändern möchten. In unserem Beispiel möchten wir die Größe der Instanz „OVHcloudInstance“ ändern.

```bash
$ OpenStack Server List
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| ID                                   | Name             | Bild      | Flavor |        | Status | Networks                                    | 
+--------------------------------------+----------------------------------------------------------------+--------+---------------------------------------------+
| 19298898-934b-xxxx-xxxx-xxxxxxxx | TestInstance1    | CentOS 7     | D2-2 |        | AKTIV | Ext-Net=111.112.113.9, 2607:5300:xxx:xxxx::ae9                                                       
| 23ce0491-5e29-xxxx-xxxx-xxxxxxxx | TestInstance2    | Ubuntu 23.04 | D2-2 |        | AKTIV | Ext-Net=111.112.113.61, 2607:5300:xxx:xxxx::c0a                                                          
| 8f9a08a6-f0fe-xxxx-xxxxx-xxxxxxx | OVHcloudInstance | Debian 12    | B2-7 |        | AKTIV | ext-net=111.112.113.200, 2607:5300:xxx:xxxx::9a3                                  
+--------------------------------------+----------------------------------------------------------------+--------+----------------------------------------------+
```

### Modelle auflisten <a name="flavorlist"></a>

Sie müssen nun aus der Liste der in Ihrer Region verfügbaren Modelle (*Flavors*) die ID des neuen Modells abrufen. In unserem Beispiel möchten wir die Größe unserer Instanz auf einem Modell b2-30 mit der ID `098889e6-d1fc-4967-baea-19fd97fd83a8` ändern.

```bash
$ OpenStack Flavor List
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| ID                                   | Name                | RAM | Disk | Ephemeral | VCPUs | is public |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
| 009EE05F-9430-4C85-B9F7-66297DB22731 | win-hg-7-ssd-flex   | 7000 | 50 | 0 | 2 | True      |
| 01EF1E13-5A85-4C4B-84F4-9E9DA85DA51D | R2-15               | 15000 | 50 | 0 | 2 | True      |
| 01f4f140-3d51-4d94-ad26-9aa85941dc63 | win-hg-60-ssd-flex  | 60000 | 50 | 0 | 16 | True      |
| 041d0272-4db5-4c13-9861-a4e17c48fd9c | R2-60               | 60000 | 100 | 0 | 4 | True      |
| 0531d26b-e117-4cdb-9e83-c16727f4737e | C2-60               | 60000 | 400 | 0 | 16 | True      |
| 05ebb9db-d6c8-4b7a-bf38-eea519aa5262 | win-r2-120-flex     | 120000 | 50 | 0 | 8 | True      |
| 098889E6-D1FC-4967-BAEA-19FD97FD83A8 | B2-30               | 30000 | 200 | 0 | 8 | True      |
| 0ec183bd-d014-48ad-a71e-1233c5f5c79b | win-r2-30           | 30000 | 50 | 0 | 2 | True      |
| 1070c9d6-5bc7-45db-bab2-073bff119f22 | R2-30               | 30000 | 50 | 0 | 2 | True      |
| 108e2180-e257-4054-aa23-18b123d06ed8 | win-hg-120-ssd-flex | 120000 | 50 | 0 | 32 | True      |
| 11a77f5f-5cbe-4394-ba85-d4afb2b0bade | EG-30-Flex          | 30000 | 50 | 0 | 8 | True      |
| 125a6e9e-7522-463a-a90d-121abaabf21a | win-b2-30-flex      | 30000 | 50 | 0 | 8 | True      |
| 1335874a-7ddd-453b-b655-d9bf044ef5f9 | EG-120-SSD          | 120000 | 800 | 0 | 32 | True      |
| fd80c213-d30f-4e0c-ae9d-ecdcb422fc1b | EG-7-SSD            | 7000 | 100 | 0 | 2 | True      |
+--------------------------------------+---------------------+--------+------+-----------+-------+-----------+
```

> [!warning]
> Beachten Sie, dass Sie Instanzen nicht von Linux-Modellen auf Windows-Modelle und umgekehrt ändern können.

### Größe der Instanz ändern

Nachdem Sie die Informationen abgerufen haben, können Sie nun die Größe Ihrer Instanz ändern:

```bash
$ openstack server resize --flavor <FLAVOR-ID> <INSTANCE-NAME>
```

Zum Beispiel, um die Größe unserer "OVHcloudInstance" Instanz zu ändern:

```bash
$ openstack server resize --flavor 098889e6-d1fc-4967-baea-19fd97fd83a8 OVHcloudinstance
```

Sie können den Vorgang durch wiederholtes Ausführen des folgenden Befehls verfolgen. Der Status sollte `RESIZE` sein.

```bash
$ openstack server show OVHcloudInstance
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| Field                               | Value                                                                                                                                                                                              |
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
| ID                                  | 8f9a08a6-f0fe-xxxx-xxxxx-xxxxxxx                                                                                                                                                              |
| Bild                               | Debian 12 (31e40bc4-5b35-4c5f-96ff-37df3660dec0)                                                                                                                                                   |

| key_name                            | OVHcloud                                                                                                                                                                                               |
| name                                | OVHcloudInstance                                                                                                                                                                                     |
| Status                              | RESIZE                                                                                                                                                                                             |
| Tags                                |                                                                                                                                                                                                    |
| task_state                          | resize_migrating                                                                                                                                                                                   |
| updated                             | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| updated_at                          | 2023-08-29T20:02:05Z                                                                                                                                                                               |
| vm_state                            | Aktiv           
+-------------------------------------+----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------+
```

### Instanz abstufen

> [!warning]
> Diese Option ist nur für *Flex*-Modelle verfügbar.
>

Wenn Sie Ihre Instanz verkleinern möchten, können Sie dies tun, indem Sie die gleichen Schritte wie [oben](#flavorlist.) ausführen und im Feld <FLAVOR-ID> eine andere ID auswählen.

## Weiterführende Informationen

[Größe einer Public Cloud Instanz über das OVHcloud Kundencenter ändern](resize_instance_manager1.)

[Größe einer Public Cloud Instanz über Horizon ändern](resize_of_an_instance1.)

Für den Austausch mit unserer User Community gehen Sie auf <https://community.ovh.com/en/>.
