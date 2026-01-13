---
title:  Trasferisci un Additional IP
excerpt: Questa guida ti mostra come spostare un Additional IP dallo Spazio Cliente OVHcloud o via API OVHcloud
updated: 2026-01-06
---

> [!primary]
> Questo articolo riguarda lo spostamento di indirizzi Additional IPv4, che è limitato secondo le [restrizioni regionali](#limitations).
>
> La configurazione di Additional IP in una vRack (rete privata) aggira queste restrizioni regionali, perdendo la dipendenza da una sola regione e facilitando l'interconnessione su un'ampia gamma di servizi OVHcloud.
>
> Scopri come configurare gli Additional IP in una vRack utilizzando le nostre guide per [IPv4](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack) e [IPv6](/pages/bare_metal_cloud/dedicated_servers/configure-an-ipv6-in-a-vrack).
>

## Obiettivo

Gli Additional IP possono essere trasferiti tra i servizi utilizzati. L'interesse è di non perdere la tua reputazione, la tua referenziazione e migliorare la continuità di servizio delle tue applicazioni e sistemi.

Questa tecnologia permette di scambiare gli indirizzi IP da una soluzione all'altra in meno di un minuto, praticamente senza alcuna interruzione per i tuoi utenti. Può essere utilizzata in caso di migrazione di servizi (ad esempio, spostamento dei progetti dall'ambiente di sviluppo a quello di produzione) o in caso di trasferimento verso un server di backup in caso di guasto.

> [!primary]
> È possibile assegnare blocchi di indirizzi IP a qualsiasi servizio compatibile all'interno di una Region. I blocchi di indirizzi IP di una Region possono essere trasferiti da un datacenter a un altro all'interno della stessa Region, ma non al suo esterno.
>
> Fanno eccezione eu-west-gra, eu-west-rbx e eu-west-sbg: i blocchi di indirizzi IP possono essere spostati tra queste 3 Region.
>
> Una regione è un'area geografica composta da uno o più data center.
>
> Solo l'intero blocco può essere spostato, non è possibile migrare i singoli IP all'interno di un blocco.

**Come migrare un Additional IP dallo Spazio Cliente OVHcloud o tramite le API OVHcloud**

## Prerequisiti

- Disporre di un [server dedicato](/links/bare-metal/bare-metal) nello Spazio Cliente OVHcloud
- Disporre di un [indirizzo Additional IP](/links/network/additional-ip)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](/links/bare-metal/eco-about).
>
> Per maggiori informazioni, consulta la nostra [a confronto](/links/bare-metal/eco-compare).
>

> [!warning]
> Se l'indirizzo Additional IP, o uno degli indirizzi IP del blocco, ha un MAC virtuale compromesso, il server di destinazione deve supportare la funzionalità dei MAC virtuali.
> Consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac) per determinarlo.
>
> In caso contrario, i MAC virtuali devono essere eliminati dagli Additional IP prima dello spostamento.

## Procedura

> [!primary]
> Quando un blocco IP contenente indirizzi MAC virtuali unici viene spostato tra due server, questi indirizzi vengono temporaneamente sospesi. Appariranno sul nuovo server una volta completato lo spostamento.
>
> D'altra parte, i blocchi che contengono indirizzi MAC virtuali duplicati non possono essere spostati. Devi prima cancellare il duplicato dell'indirizzo MAC virtuale sul blocco da spostare.
>
> Se un blocco IP viene spostato/aggiunto al vRack, non è più legato a un server fisico. In questo caso, qualsiasi indirizzo MAC virtuale andrà perso durante il trasferimento.
>

### Blocchi IP geolocalizzati

La geolocalizzazione di un indirizzo IP è indipendente dalla regione di collegamento.

Se ordini un blocco IP aggiuntivo su un server ma scegli una localizzazione diversa (geolocalizzazione) per il blocco IP, il blocco IP non può essere spostato verso un altro server situato nello stesso Paese del blocco. Ad esempio, un blocco IP aggiuntivo geolocalizzato in Polonia (eu-central-war) e ordinato su un server situato in un datacenter in Francia (eu-west-gra) non può essere spostato verso un server situato in un datacenter in Polonia (eu-central-war). Il blocco IP può essere trasferito solo verso un server idoneo localizzato in un datacenter in Francia.

### Sposta un IP dallo Spazio Cliente OVHcloud

> [!warning]
> Solo un blocco di dimensioni singole (/32) potrà essere spostato da un server dedicato a un VPS.
>

Accedi allo [Spazio Cliente OVHcloud](/links/manager), clicca su `Network`{.action} nel menu a sinistra dello schermo e poi su `Indirizzi IP Pubblici`{.action}.

È possibile utilizzare il menu a tendina sotto **I tuoi indirizzi IP pubblici e servizi associati** e selezionare `Tutti gli Additional IP`{.action} per filtrare i servizi, oppure digitare direttamente l'indirizzo IP desiderato nella barra di ricerca.

![Spazio Cliente](/pages/assets/screens/control_panel/product-selection/bare-metal-cloud/network/manage_additional_ips_new.png){.thumbnail}

Clicca sul pulsante `⁝`{.action} a destra dell'indirizzo IP da spostare, quindi su `Sposta Additional IP`{.action}.

![Spazio Cliente](images/move_ip_1_new.png){.thumbnail}

Nel menu contestuale che appare, seleziona il servizio verso cui spostare l'indirizzo IP.

Clicca su `Successivo`{.action} e poi su `Confermare`{.action}.

![Spazio Cliente](images/move_ip_2_new.png){.thumbnail}

> [!warning]
> Si prega di notare che per alcuni prodotti, gli indirizzi IP (o blocchi) devono prima essere spostati in un **Parking IP** (una posizione di archiviazione temporanea), prima di poter essere spostati nel prodotto desiderato.
>
> Per spostare i blocchi IP su una rete vRack specifica, utilizzare **l'interfaccia di gestione vRack**, accessibile cliccando su `Network`{.action} nel menu a sinistra dello schermo, quindi su `Rete privata vRack`{.action}.
>

### Trasferisci un IP via API

Accedi alla pagina web delle [API OVHcloud](/links/api).

Per prima cosa, è meglio verificare se l'indirizzo IP può essere spostato.
<br>Per verificare se l'IP può essere spostato verso uno dei tuoi server dedicati, utilizza questa chiamata:

> [!api]
>
> @api {v1} /dedicated/server GET /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: il riferimento del server dedicato di destinazione
- `ip`: l'indirizzo Additional IP da spostare

Per spostare l'indirizzo IP, utilizza questa chiamata:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: il riferimento del server dedicato di destinazione
- `ip`: l'indirizzo Additional IP da spostare

### Restrizioni <a name="limitations"></a>

Ricordiamo che quando si sposta un blocco di indirizzi IP sono presenti alcune limitazioni: la tabella qui sotto mostra la compatibilità tra le diverse Region.

Per maggiori informazioni, consulta la nostra lista delle [Region disponibili](/links/network/additional-ip).

| Nome della Region  | eu-west-par | eu-west-gra | eu-west-rbx | eu-west-sbg | eu-west-lim | eu-central-war | eu-west-eri | ca-east-bhs | ca-east-tor | ap-southeast-sgp | ap-southeast-syd |
|----------------|-------------|-------------|-------------|-------------|-------------|----------------|-------------|-------------|-------------|-------------|-------------|
| eu-west-par    |      ✅        |      ❌       |     ❌        |     ❌        |      ❌       |      ❌          |       ❌       |       ❌      |     ❌      | ❌      |     ❌      |
| eu-west-gra    |       ❌      |       ✅       |      ✅       |      ✅      |       ❌       |       ❌         |       ❌        |     ❌        |    ❌        | ❌      |     ❌      |
| eu-west-sbg    |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-rbx |       ❌        |      ✅       |      ✅       |      ✅       |      ❌       |      ❌           |      ❌       |      ❌        |    ❌        | ❌      |     ❌      |
| eu-west-lim    |        ❌       |      ❌       |      ❌       |     ❌        |     ✅       |      ❌         |      ❌        |     ❌        |     ❌       | ❌      |     ❌      |
| eu-central-war |      ❌       |      ❌       |     ❌       |      ❌       |      ❌        |       ✅         |       ❌       |       ❌       |       ❌        | ❌      |     ❌      |
| eu-west-eri    |         ❌      |       ❌      |        ❌     |       ❌     |      ❌       |       ❌         |     ✅        |      ❌         |      ❌       | ❌      |     ❌      |
| ca-east-bhs    |     ❌        |      ❌       |    ❌         |        ❌    |        ❌       |      ❌          |       ❌      |     ✅        |      ❌       | ❌      |     ❌      |
| ca-east-tor    |    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ✅     | ❌      |     ❌      |
| ap-southeast-sgp|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ✅       |     ❌      |
| ap-southeast-syd|    ❌         |      ❌       |     ❌        |        ❌       |      ❌       |       ❌         |      ❌       |      ❌       |       ❌       | ❌      |     ✅       |

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).