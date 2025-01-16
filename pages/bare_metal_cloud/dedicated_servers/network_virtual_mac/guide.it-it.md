---
title: 'Assegnare un MAC virtuale a un Additional IP'
excerpt: 'Scopri come aggiungere un indirizzo MAC virtuale e come associarlo a un Additional IP'
updated: 2024-12-13
---

## Obiettivo

OVHcloud ti permette di associare un indirizzo MAC virtuale a un indirizzo IP al fine di poter creare VM con una configurazione <i>bridge</i> sul tuo server.

**Questa guida ti mostra come creare un indirizzo MAC virtuale e come associarlo a un Additional IP.**

## Prerequisiti

- Possedere un [server dedicato](/links/bare-metal/bare-metal)
- Disporre di un [indirizzo Additional IP](/links/network/additional-ip) o di un blocco Additional IP (RIPE)
- Essere connesso allo [Spazio Cliente OVHcloud](/links/manager) o all'[API OVHcloud](/links/api)
- Il tuo server deve supportare i MAC virtuali. Consulta [questa guida](/pages/bare_metal_cloud/dedicated_servers/network_support_virtual_mac) per determinarlo

> [!warning]
> - Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](/links/bare-metal/eco-about). Per maggiori informazioni, consulta la nostra [a confronto](/links/bare-metal/eco-compare).
>
> - I server Advance di terza generazione (dotati di processori EPYC 4004 Series) supportano 32 vMAC differenti.
>
> - Questa funzionalità sarà disponibile sulle gamme Scale e High Grade nel 2025.

> [!primary]
> Se non conosci l'utilizzo dell'API OVHcloud, consulta la nostra guida [Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps).

## Procedura

### Assegna un indirizzo MAC

> [!warning]
>
> Se un blocco IP è stato spostato nella vRack, non è più assegnato a un server fisico a questo titolo, non è più possibile assegnare un MAC virtuale a un IP.
>

#### Tramite lo Spazio Cliente OVHcloud

Una volta connesso allo [Spazio Cliente OVHcloud](/links/manager), accedi al menu `Bare Metal Cloud`{.action} e apri la sezione `Network`{.action}. Quindi, clicca su `IP`{.action}.

Clicca sulla scheda `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Successivamente, individua il tuo indirizzo Additional IP (o il tuo blocco) nella lista, clicca sul pulsante `...`{.action} per visualizzare la lista delle opzioni e seleziona Aggiungi un MAC virtuale.

![IP](images/addvmac.png){.thumbnail}

Nella finestra di dialogo, seleziona il tipo di indirizzo dal menu a tendina, inserisci il nome della macchina virtuale e infine clicca su `Conferma`{.action}.

> [!primary]
>
> **Tipo**: si tratta del tipo di indirizzo MAC virtuale (“VMware” per il sistema VMware ESXi e “ovh” per tutti gli altri sistemi di virtualizzazione).
>
> **Nome della macchina virtuale**: si tratta del nome che intendi assegnare all’indirizzo MAC virtuale per poi ritrovare più facilmente la coppia IP/MAC.
>

![IP](images/addvmac2.png){.thumbnail}

> [!primary]
>
> Ricordati di assegnare l’indirizzo MAC virtuale creato durante la configurazione della tua macchina virtuale.
> 

#### Via API OVHcloud

Utilizza questa chiamata API:

> [!api]
>
> @api {v1} /dedicated/server POST /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}

### Elimina un indirizzo MAC

> [!warning]
>
> La rimozione di un indirizzo MAC è definitiva e non sarà quindi più possibile recuperarlo in seguito.
> 

#### Tramite lo Spazio Cliente OVHcloud

Per eliminare un indirizzo MAC virtuale associato a un Additional IP, collegati al tuo [Spazio Cliente](/links/manager), accedi al menu `Bare Metal Cloud`{.action} e apri la sezione `Network`{.action}. Quindi, clicca su `IP`{.action}. Seleziona il server per visualizzare gli Additional IP o i blocchi IP associati.

Infine clicca sul pulsante `...`{.action} sulla destra e seleziona la voce `Elimina il MAC virtuale`{.action}.

#### Via API OVHcloud

Utilizza questa chiamata API:

> [!api]
>
> @api {v1} /dedicated/server DELETE /dedicated/server/{serviceName}/virtualMac/{macAddress}/virtualAddress/{ipAddress}
>

## FAQ

- **Cosa succede se trasferisco un blocco con vMAC su un server Advance di terza generazione (dotato di un processore EPYC 4004 Series) che possiede già 32 vMACs?**

Il blocco non verrà spostato.

Esempio: se tentate di spostare un blocco di 4 IP con vMAC diversi collegati su un server che ha già 30 vMAC, il blocco non verrà spostato perché il totale di vMAC sarebbe superiore ai 32 vMAC autorizzati.

## Per saperne di più

Contatta la nostra [Community di utenti](/links/community).