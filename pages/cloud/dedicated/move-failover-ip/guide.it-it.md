---
title:  Trasferisci un Additional IP
excerpt: Questa guida ti mostra come spostare un Additional IP dallo Spazio Cliente OVHcloud o via API OVHcloud
slug: ip-fo-move
section: Rete e IP
order: 7
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 22-12-2022**

> [!primary]
>
> Dal 6 ottobre 2022, la nostra soluzione "Failover IP" si chiama [Additional IP](https://www.ovhcloud.com/it/network/additional-ip/). Questo non ha alcun impatto sulla sua funzionalità.
>

## Obiettivo

Gli Additional IP possono essere trasferiti tra i servizi utilizzati. L'interesse è di non perdere la tua reputazione, la tua referenziazione e migliorare la continuità di servizio delle tue applicazioni e sistemi.

Questa tecnologia permette di scambiare gli indirizzi IP da una soluzione all'altra in meno di un minuto, praticamente senza alcuna interruzione per i tuoi utenti. Può essere utilizzata in caso di migrazione di servizi (ad esempio, spostamento dei progetti dall'ambiente di sviluppo a quello di produzione) o in caso di trasferimento verso un server di backup in caso di guasto.

> [!primary]
> Un Additional IP non può essere spostato da una zona all'altra. Ad esempio, un IP situato nel datacenter SBG potrà essere spostato verso GRA o RBX ma non potrà essere spostato verso BHS.
> 
> Solo l'intero blocco può essere spostato, non è possibile migrare i singoli IP all'interno di un blocco.

**Come migrare un Additional IP dallo Spazio Cliente OVHcloud o tramite le API OVHcloud**

## Prerequisiti

- Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/){.external} nello Spazio Cliente OVHcloud
- Disporre di un [indirizzo Additional IP](https://www.ovhcloud.com/it/bare-metal/ip/)
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).
>

> [!warning]
> Se l'indirizzo Additional IP, o uno degli indirizzi IP del blocco, ha un MAC virtuale compromesso, il server di destinazione deve supportare la funzionalità dei MAC virtuali.
> Consulta [questa guida](https://docs.ovh.com/it/dedicated/network-support-virtual-mac/) per determinarlo.
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

### Sposta un IP dallo Spazio Cliente OVHcloud

> [!warning]
> Solo un blocco di dimensioni singole (/32) potrà essere spostato da un server dedicato a un VPS.
>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca sul menu `Bare Metal Cloud`{.action} e apri la sezione `IP`{.action}.

Clicca sulla scheda `Additional IP`{.action}.

![manage IPs](images/manageIPs2022.png){.thumbnail}

Clicca sul pulsante `...`{.action} a destra dell'indirizzo IP da spostare e poi su `Sposta Additional IP`{.action}.

![Spazio Cliente](images/moveadditionalIP.png){.thumbnail}

Nel menu contestuale che appare, seleziona il servizio verso cui spostare l'indirizzo IP.

Clicca su `Seguente`{.action} e poi su `Conferma`{.action}.

![Spazio Cliente](images/moveadditionalIP2.png){.thumbnail}

### Trasferisci un IP via API

Accedi alla pagina web delle [API OVHcloud](https://api.ovh.com/).

Per prima cosa, è meglio verificare se l'indirizzo IP può essere spostato.
<br>Per verificare se l'IP può essere spostato verso uno dei tuoi server dedicati, utilizza questa chiamata:

> [!api]
>
> @api {GET} /dedicated/server/{serviceName}/ipCanBeMovedTo
>

- `serviceName`: il riferimento del server dedicato di destinazione
- `ip`: l'indirizzo Additional IP da spostare

Per spostare l'indirizzo IP, utilizza questa chiamata:

> [!api]
>
> @api {POST} /dedicated/server/{serviceName}/ipMove
>

- `serviceName`: il riferimento del server dedicato di destinazione
- `ip`: l'indirizzo Additional IP da spostare

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.