---
title: 'Configurare la vRack tra un’istanza Public Cloud e un server dedicato'
slug: configurare-vrack-tra-pci-e-server-dedicato
excerpt: 'Scopri come configurare una rete privata tra un’istanza Public Cloud e un server dedicato'
section: vRack
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 22/11/2021**

## Obiettivo

La [vRack](https://www.ovh.it/soluzioni/vrack/){.external} OVHcloud è una rete privata che permette di configurare l’indirizzamento tra due o più [server dedicati](https://www.ovhcloud.com/it/bare-metal/) OVHcloud. Inoltre, consente di aggiungere [istanze Public Cloud](https://www.ovhcloud.com/it/public-cloud/){.external} a una rete privata al fine di creare un’infrastruttura di risorse fisiche e virtuali.

**Questa guida ti mostra come configurare una rete privata tra un’istanza Public Cloud e un server dedicato.**


## Prerequisiti

* Aver creato un'[istanza Public Cloud OVHcloud](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/)
* Aver attivato un servizio [vRack](https://www.ovh.it/soluzioni/vrack/)
* Disporre di un [server dedicato](https://www.ovhcloud.com/it/bare-metal/) compatibile con la vRack
* Avere accesso allo [Spazio Cliente OVHcloud](	https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
* Una gamma di indirizzi IP privati di tua scelta

> [!warning]
> Questa funzionalità può non essere disponibile o limitata sui [server dedicati **Eco**](https://eco.ovhcloud.com/it/about/).
>
> Per maggiori informazioni, consulta la nostra [a confronto](https://eco.ovhcloud.com/it/compare/).

## Procedura

### Aggiungi un progetto Public Cloud alla vRack

Una volta configurato il tuo [progetto Public Cloud](https://docs.ovh.com/it/public-cloud/create_a_public_cloud_project/), è necessario aggiungerlo alla vRack. Ciò può avvenire in due modi:

1. Ordinando un servizio vRack se non ne hai uno, questo servizio è gratuito.

Accedi al menu `Bare Metal Cloud`{.action} e clicca sul pulsante `Ordina`{.action}. Nel menu, clicca sull'opzione `vRack`{.action}.

![Ordina la vRack](images/orderingvrack.png){.thumbnail}

Verrai reindirizzato verso un'altra pagina per confermare l'ordine, l'operazione richiederà alcuni minuti.

Una volta che il servizio vRack viene consegnato sul tuo account, puoi aggiungervi il tuo progetto.

Clicca sul menu `Bare Metal Cloud`{.action}, poi su `Network`{.action}, poi su `vRack`{.action}. Seleziona la tua vRack nella lista.

Nella lista dei servizi ammissibili, seleziona il progetto che vuoi aggiungere alla vRack e clicca sul pulsante `Aggiungi`{.action}.

![aggiungi un progetto alla vrack](images/addprojectvrack.png){.thumbnail}

<ol start="2">
  <li><a href="https://docs.ovh.com/it/public-cloud/public-cloud-vrack/#step-1-attivazione-e-gestione-di-un-vrack">Creando o aggiungendo un servizio vRack esistente</a> nella sezione Public Cloud.</li>
</ol>

### Integra un'istanza nella vRack

Possono presentarsi due situazioni:

- L'istanza non esiste ancora.
- L'istanza esiste già e devi aggiungerla alla vRack.

#### Caso di una nuova istanza

Se hai bisogno di aiuto, consulta la guida: [Creare un'istanza Public Cloud](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/#step-3-crea-unistanza){.external}. Durante la creazione di un'istanza, potrai specificare, nello Step 4, una rete privata nella quale integrare la tua istanza. Nel menu a tendina presentato seleziona la tua vRack creata precedentemente.

#### Caso di un'istanza già esistente

È possibile associare un'istanza esistente a una rete privata. Per maggiori informazioni, consulta [questa sezione](https://docs.ovh.com/it/public-cloud/public-cloud-vrack/#in-caso-di-istanza-esistente_2) della guida corrispondente.

### Crea una VLAN ID

Per comunicare tra loro, i due servizi devono essere contrassegnati con la stessa **VLAN ID**. 

#### Utilizzo della VLAN ID predefinito

Sui server dedicati, di default, sei sulla VLAN **0**. Per utilizzare questo ID, sarà necessario « taglare » la rete privata associata alla tua istanza con VLAN **0**. Non spuntare la casella `Definisci l’ID della VLAN` durante l'aggiunta di una rete privata alla tua istanza.

Per maggiori informazioni, consulta [questa sezione](https://docs.ovh.com/it/public-cloud/public-cloud-vrack/#step-2-crea-una-vlan-nella-vrack_1) della guida corrispondente. 


> [!primary]
> Sul Public Cloud è possibile definire una VLAN ID unica per rete privata.
>
> Non è possibile definire la stessa VLAN ID su due reti private differenti.

#### Utilizzo di una VLAN ID diversa

Se decidi di utilizzare una VLAN ID diversa:

- La rete privata associata all'istanza Public Cloud deve essere contrassegnata con questo ID.
- Nel file di configurazione di rete del server dedicato, l'interfaccia di rete privata deve essere « tag » con questo ID.


> [!primary]
> 
> Diversamente dai server dedicati, non è necessario « taggare » la VLAN direttamente su un'istanza Public Cloud.
>

Ad esempio: se hai definito la rete privata associata alla tua istanza con VLAN 2, l'interfaccia di rete privata del tuo server dedicato deve essere « tag » con VLAN 2. Per maggiori informazioni, consulta questa guida: [Creare due o più VLAN nella vRack](https://docs.ovh.com/it/dedicated/creare-vlan-vrack/).

### Configura le interfacce di rete

Configura le interfacce di rete sulla tua nuova istanza Public Cloud e sul tuo server dedicato utilizzando questa guida: [Configurare diversi server dedicati nella vRack](../configurare-server-dedicati-vrack/){.external}.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.