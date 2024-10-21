---
title: 'Modificare i blocchi IP annunciati nella vRack'
excerpt: 'Come cambiare l’annuncio di un blocco IP nella rete privata vRack'
updated: 2019-03-12
---

## Obiettivo

La [vRack](https://www.ovh.it/soluzioni/vrack/){.external} è una rete privata che permette di configurare l’indirizzamento tra due o più [server dedicati](https://www.ovhcloud.com/it/bare-metal/){.external} OVHcloud.

**Questa guida ti mostra come definire la zona annunciata nella vRack per un blocco IP.**

## Prerequisiti

- Disporre di una [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
- Aver [configurato un blocco IP nella vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack)
- Possedere competenze avanzate di rete

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

## Procedura

### Step 1: verifica la zona annunciata corrente

Per prima cosa, verifica la zona annunciata attualmente attiva per il blocco IP in questione, effettuando un `traceroute` su uno qualsiasi degli indirizzi IP del blocco. 

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.443 ms  0.426 ms  0.411 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.394 ms  0.396 ms  0.391 ms
 4  po101.gra-z1g2-a75.fr.eu (92.222.60.119)  0.374 ms  0.356 ms po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.333 ms
 5  be120.gra-d1-a75.fr.eu (37.187.232.74)  0.327 ms be121.gra-d2-a75.fr.eu (37.187.232.80)  0.335 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.328 ms
 6  vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.850 ms vl1248.rbx-d2-a75.fr.eu (37.187.231.252)  1.874 ms vl1247.rbx-g1-a75.fr.eu (37.187.231.234)  1.816 ms
 7  10.95.66.51 (10.95.66.51)  1.943 ms 10.95.66.53 (10.95.66.53)  1.872 ms 10.95.66.59 (10.95.66.59)  1.860 ms
 8  1.2.3.4  2.865 ms
```

In questo esempio l’indirizzo IP testato è annunciato a **Roubaix**, come visibile nell’ultimo hop effettuato: vl1247.**rbx**-g1-a75.fr.eu (37.187.231.234) 1.816 ms.

### Step 2: modifica il blocco IP annunciato

Accedi alla pagina delle [API OVHcloud](https://api.ovh.com/){.external} utilizzando il tuo identificativo cliente e utilizza il comando qui sotto per modificare l’annuncio del blocco IP.

> [!api]
>
> @api {v1} /vrack GET /vrack
> 

Questa chiamata API consente di recuperare l'elenco di tutte le vRack create. Se i riferimenti mostrati non ti permettono di identificare la vRack, recupera l’informazione dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}: nella sezione `Bare Metal Cloud`{.action} è sufficiente cliccare su `Network`{.action}, poi su `vRack`{.action} nella colonna a sinistra per visualizzare tutte le vRack attive.

> [!api]
>
> @api {v1} /vrack POST /vrack/{serviceName}/ip/{ip}/announceInZone#POST
> 

Questa chiamata API consente di modificare l'annuncio di un blocco IP. Completa i campi richiesti:

|Campo|Descrizione|
|---|---|
|serviceName|Inserisci il nome del servizio vRack corrispondente|
|ip|Inserisci il nome del blocco IP corrispondente, facendo attenzione a non inserire l’indirizzo IP testato precedentemente ma l’intero blocco (ad esempio, `1.2.3.4/27`).|
|zone|Seleziona la nuova zona in cui annunciare il blocco IP, facendo attenzione a non inserire la zona recuperata precedentemente.|

A questo punto, esegui la chiamata API per modificare l’annuncio.

### Step 3: verifica la nuova zona annunciata

Per verificare che la modifica apportata sia stata applicata correttamente, effettua un nuovo `traceroute` sull’indirizzo IP utilizzato nello step 1.

```sh
traceroute to 1.2.3.4, 30 hops max, 60 byte packets
 1  54.36.52.1 (54.36.52.1)  0.464 ms  0.461 ms  0.454 ms
 2  158.69.61.222 (158.69.61.222)  0.396 ms  0.379 ms  0.372 ms
 3  gra-z1b1-a70.fr.eu (92.222.60.62)  0.360 ms  0.361 ms  0.354 ms
 4  po101.gra-z1g1-a75.fr.eu (92.222.60.117)  0.401 ms  0.396 ms  0.389 ms
 5  be121.gra-d1-a75.fr.eu (37.187.232.76)  0.346 ms be120.gra-d2-a75.fr.eu (37.187.232.78)  0.318 ms be120.gra-d1-a75.fr.eu (37.187.232.74)  0.351 ms
 6  10.73.0.65 (10.73.0.65)  0.625 ms 10.73.0.69 (10.73.0.69)  0.729 ms 10.73.0.65 (10.73.0.65)  0.526 ms
 7  10.17.145.25 (10.17.145.25)  0.354 ms 10.17.145.29 (10.17.145.29)  0.426 ms 10.17.145.25 (10.17.145.25)  0.415 ms
 8  1.2.3.4  2.865 ms
```

In questo esempio l’indirizzo IP testato è annunciato a **Gravelines**, come visibile nell’ultimo hop effettuato: be120.**gra**-d1-a75.fr.eu (37.187.232.74) 0.351 ms.

## Per saperne di più

[Configurare un blocco di indirizzi IP nella vRack](/pages/bare_metal_cloud/dedicated_servers/configuring-an-ip-block-in-a-vrack){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.