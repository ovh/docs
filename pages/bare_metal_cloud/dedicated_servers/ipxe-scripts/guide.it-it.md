---
title: "Configurare uno script iPXE personalizzato per avviare il tuo server tramite l'API OVHcloud"
excerpt: "Scopri come l'API OVHcloud ti permette di configurare uno script di innesco personalizzato PXE per boot il tuo server"
updated: 2023-08-24
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

> [!warning]
>
> Questo articolo è destinato agli utenti esperti che hanno almeno conoscenze di base sull'[innesco PXE](https://en.wikipedia.org/wiki/Preboot_Execution_Environment) e sull'implementazione utilizzata in OVHcloud: [PXE](https://ipxe.org/).
>

Nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), è possibile specificare una modalità di avvio tra una lista predefinita: disco principale o rescue.
Tramite l'[API OVHcloud](https://api.ovh.com/) è possibile definire gli script personalizzati.

Utilizza uno script personalizzato che potrebbe essere interessante nei seguenti casi:

- Utilizzi un OS volatile che non vuoi installare sul disco e che resta esclusivamente in RAM.
- Fai del multicloud e uno degli altri provider che utilizzi non propone né il sistema operativo che vuoi installare nel suo catalogo, né soluzioni alternative come [BringYourOwnImage](/pages/bare_metal_cloud/dedicated_servers/bring-your-own-image). Desiderando un metodo di installazione unico e standardizzato, indipendentemente dal provider, hai costruito la tua immagine di Rescue d'installazione per gestire l'installazione completa del tuo server dedicato.

## Prerequisiti

- Un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) **pronto per essere boottato/riavviato** sul tuo account OVHcloud.
- Avere accesso all'[API OVHcloud](https://api.ovh.com/).

> [!warning]
>
> Il riavvio di un server dedicato può provocare l'interruzione dei servizi non ridondati che dipendono esclusivamente dal server riavviato.
>

> [!warning]
>
> Questa funzionalità è disponibile solo sui server `UEFI`. Stiamo lavorando per aggiungere questa funzionalità ai server in boot `LEGACY`.
>

## Procedura

### Gestisci uno script iPXE per un server dedicato <a name="manageIpxeScript"></a>

#### Modifica lo script iPXE di un server <a name="changeIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Specifica i tuoi script nell'attributo `bootScript` direttamente.

#### Ottenere lo script iPXE di un server <a name="getIpxeScript"></a>

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Il tuo script si trova nell'attributo `bootScript`.

(ad esempio,

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
}
```

Puoi riavviare il tuo server e questo utilizzerà il tuo script [iPXE](https://ipxe.org/) per l'avvio.

### Altre modalità di boot <a name="leaveIpxeScript"></a>

In qualsiasi momento è possibile reinstallare il disco o la modalità Rescue dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) (consulta la guida [Attiva e utilizza la modalità Rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)) o tramite l'[API OVHcloud](https://api.ovh.com/).

#### Sposta su disco <a name="switchToDisk"></a>

> [!api]
>
> @api {v1} /dedicated/server PUT /dedicated/server/{serviceName}
>

Specifica `1` nell'attributo `bootId`.

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}
>

Ti ricordiamo che il valore dell'attributo `bootScript` è zero.

## Per saperne di più <a name="gofurther"></a>

[Riavvio del tuo server dedicato](/pages/bare_metal_cloud/dedicated_servers/getting-started-with-dedicated-server#reboot)

[Attivare e utilizzare la modalità rescue](/pages/bare_metal_cloud/dedicated_servers/rescue_mode)

[iPXE - Open source boot firmware](https://ipxe.org/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
