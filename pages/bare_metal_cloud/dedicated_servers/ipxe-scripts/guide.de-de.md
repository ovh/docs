---
title: "Konfigurieren von personalisierten iPXE Skripten über die OVHcloud API"
excerpt: "Erfahren Sie hier, wie Sie mit der OVHcloud API ein personalisiertes PXE Startskript konfigurieren können, um Ihren Server zu booten"
updated: 2023-08-24
---

> [!primary]
> Diese Übersetzung wurde durch unseren Partner SYSTRAN automatisch erstellt. In manchen Fällen können ungenaue Formulierungen verwendet worden sein, z.B. bei der Beschriftung von Schaltflächen oder technischen Details. Bitte ziehen Sie im Zweifelsfall die englische oder französische Fassung der Anleitung zu Rate. Möchten Sie mithelfen, diese Übersetzung zu verbessern? Dann nutzen Sie dazu bitte den Button "Beitragen" auf dieser Seite.
>

## Ziel

> [!warning]
>
> Dieses Tutorial richtet sich an erfahrene Anwender, die mindestens Grundkenntnisse von [Preboot Execution Environment (PXE)](https://en.wikipedia.org/wiki/Preboot_Execution_Environment) und die bei OVHcloud verwendete Implementierung [iPXE](https://ipxe.org/) haben.
>

Im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) kann der Boot-Modus nur aus einer vorgegebenen Liste ausgewählt werden: Primäre Disk oder Rescue.
Über die [OVHcloud API](https://api.ovh.com/) können Sie auch personalisierte Skripte definieren.

Personalisierte Skripte können in folgenden Fällen interessant sein:

- Sie verwenden ein flüchtiges Betriebssystem, das Sie nicht auf der Disk installieren möchten und das ausschließlich im RAM verbleibt.
- Sie betreiben eine Multicloud-Lösung und einer Ihrer Cloud-Anbieter stellt weder das Betriebssystem, das Sie installieren möchten, noch eine alternative Lösung wie [BringYourOwnImage](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image) zur Verfügung. Sie wollen eine individuelle und standardisierte Installationsmethode unabhängig vom Dienstanbieter und haben deshalb Ihr eigenes Rescue-Image zur vollständigen Verwaltung der Installation Ihrer Dedicated Server erstellt.

## Voraussetzungen

- Sie haben einen [Dedicated Server](https://www.ovhcloud.com/de/bare-metal/) in Ihrem Kunden-Account, der zum **Boot oder Reboot** bereit ist.
- Sie haben Zugriff auf die [OVHcloud API](https://api.ovh.com/).

> [!warning]
>
> Beim Neustart eines Dedicated Servers kann es zur Unterbrechung von Diensten kommen, die ausschließlich von diesem Server abhängig sind.
>

> [!warning]
>
> Diese Funktionalität ist derzeit nur für `UEFI`-fähige Dedicated Server verfügbar. Sie wird demnächst auch für Dedicated Server mit `LEGACY`-Boot bereitgestellt werden.

## In der praktischen Anwendung

### Erstellen von iPXE Skripten für einen Dedicated Server <a name="manageIpxeScript"></a>

#### iPXE Skript eines Servers ändern <a name="changeIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Geben Sie Ihr Skript direkt im Attribut `bootScript` ein.

#### iPXE Skript eines Servers abrufen <a name="getIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Ihr Skript ist sichtbar im Attribut `bootScript`.

Zum Beispiel:

```json
{
    "noIntervention": false,
    "name": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "rack": "SXXXBXX",
    "commercialRange": "fs",
    "os": "debian11_64",
    "rootDevice": null,
    "rescueMail": null,
    "linkSpeed": 1000,
    "bootScript": "#!ipxe\necho Boot first local hdd in LEGACY mode\nsanboot --no-describe --drive 0x80\nexit 1\n",
    "reverse": "nsXXXXXXX.ip-XXX-XXX-XXX.eu",
    "state": "ok",
    "ip": "XXX.XXX.XXX.XXX",
    "bootId": null,
    "newUpgradeSystem": false,
    "datacenter": "sbg3",
    "professionalUse": false,
    "supportLevel": "pro",
    "serverId": 123456,
    "powerState": "poweron",
    "monitoring": false
```

Sie können nun Ihren Server neu starten; er wird unter Verwendung des neuen [iPXE Skripts](https://ipxe.org/) booten.

### Boot-Modus ändern <a name="leaveIpxeScript"></a>

Sie können nun im [OVHcloud Kundencenter](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.de/&ovhSubsidiary=de) oder über die [OVHcloud API](https://api.ovh.com/) auf Disk- oder [Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode) umstellen.

#### Zum Disk-Modus wechseln <a name="switchToDisk"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Wählen Sie `1` für das Attribut `bootId` aus.

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Sie werden feststellen, dass der Wert des Attributs `bootScript` jetzt null ist.

## Weiterführende Informationen <a name="gofurther"></a>

[Dedicated Server neu starten](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#reboot)

[Rescue-Modus](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[iPXE - Open source boot firmware](https://ipxe.org/)

Für den Austausch mit unserer Community gehen Sie auf <https://community.ovh.com/en/>.
