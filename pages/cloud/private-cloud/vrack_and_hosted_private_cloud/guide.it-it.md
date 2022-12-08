---
title: Compatibilità della vRack con Hosted Private Cloud
slug: vrack-compatibilita-hosted-private-cloud
excerpt: Guida alla compatibilità tra i prodotti vRack e Hosted Private Cloud
section: Funzionalità OVHcloud
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 31/12/2021**

## Obiettivo

Il prodotto [vRack](https://www.ovh.it/soluzioni/vrack/){.external} permette di interconnettere diversi prodotti OVHcloud e farli comunicare tra loro tramite 1 o più vlan. Alcune configurazioni non sono compatibili con Hosted Private Cloud.

**Questa guida ti mostra la compatibilità di Hosted Private Cloud con la vRack.**

## Prerequisiti

- Essere contatto amministratore dell'infrastruttura [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) per ricevere le credenziali di accesso.
- Avere un utente attivo [creato nello Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

## Contesto

Nel prodotto Hosted Private Cloud esistono 2 tipi di vRack:

- "VM Network", che è una vRack su una singola vlan, la vlan nativa della vlan pubblica di Hosted Private Cloud. Questa vlan è utilizzata in Hosted Private Cloud per routare gli IP pubblici. Lo ritroviamo nell'inventario vSphere come PortGroup, nella categoria "Rete", chiamata VM Network. La vRack è quindi associata allo switch virtuale gestito totalmente da OVHcloud.

- "Datacenter vRack", o "vRack vDC" o "dvs-vrack", è la vRack che permette di avere 4000 Vlan. La vRack è associata allo switch virtuale gestito dal cliente, con le proprie schede di rete dedicate.

È importante notare che alcune gamme commerciali, come le gamme a base di Host AMD, non dispongono di switch virtuali gestiti dal cliente. È quindi disponibile solo la vRack di tipo "VM Network".

Per imitare il contesto, ecco:

![template](images/template.png){.thumbnail}

## Procedura

### Cosa possiamo fare

**Collegare 2 vRack VM Network tra loro, in diverse aree geografiche, in diversi Hosted Private Cloud.**

![VM Network - VM Network differente zona e PCC differente ](images/vmnetwork-vmnetwork-diff-geo-diff-pcc.png){.thumbnail}

**Collegare 1 vRack VM Network e 1 vRack vDC, in diverse aree geografiche, in diversi Hosted Private Cloud.**

![VM Network - vDC zona e PCC differente ](images/vmnetwork-vdc-diff-geo-diff-pcc.png){.thumbnail}

> [!primary]
>
> Affinché le VM della vRack VM Network e le VM della vRack vDC comunichino tra loro, le VM della vRack vDC devono essere sulla vlan nativa.
> 

**Collegare 1 vRack vDC e 1 vRack vDC, in diverse aree geografiche, in diversi Hosted Private Cloud.**

![vDC - vDC differente zona e PCC differente ](images/vdc-vdc-diff-geo-diff-pcc.png){.thumbnail}

**Associare 1 vRack vDC e 1 vRack vDC a uno stesso Hosted Private Cloud.**

![vDC - vDC anche PCC ](images/vdc-vdc-same-pcc.png){.thumbnail}

**Tutti i vDC di uno stesso Hosted Private Cloud condividono la stessa vRack VM Network.**

![VM Network condiviso nel Hosted Private Cloud](images/all-vdc-share-same-vmnetwork.png){.thumbnail}

**Collegare 1 vRack vDC e 1 vRack vDC, nella stessa zona geografica, in diversi Hosted Private Cloud.**

![vDC - vDC, stessa zona e diverse PCC ](images/vdc-vdc-same-zone-diff-pcc.png){.thumbnail}

### Cosa non si può fare

**Collega 1 vRack VM Network e 1 vRack VM Network, nella stessa zona geografica, in diversi Hosted Private Cloud.**

![VM Network - VM Network, zona e PCC ](images/vmnetwork-vmnetwork-same-geo-diff-pcc.png){.thumbnail}

**Associa 1 vRack VM Network e 1 vRack vDC, nella stessa zona geografica, in diversi Hosted Private Cloud.**

![VM Network - vDC, stessa zona e diversi PCC ](images/vmnetwork-vdc-same-geo-diff-pcc.png){.thumbnail}

**Collegare 1 vRack VM Network e 1 vRack vDC, nella stessa zona geografica, nello stesso Hosted Private Cloud.**

![VM Network - vDC, stessa zona e persino PCC ](images/vmnetwork-vdc-same-geo-same-pcc.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
