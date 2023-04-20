---
title: "Eliminare la copia di una VM dal sito di recupero Zerto"
excerpt: Come eliminare una VM dal sito di recupero quando viene eliminata dal sito di origine
updated: 2021-12-09
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 09/12/2021**

## Obiettivo

Quando una VM viene volontariamente eliminata dal sito sorgente, la VPG Zerto si ferma nella sincronizzazione e si mette in errore.<br>
I file della copia della VM sono sempre sul sito di destinazione.<br>
Questo documento ti mostra come cancellare i file e riavviare la VPG.

**Utilizza l'interfaccia Zerto per eliminare una copia delle VM dal sito di destinazione.**

## Prerequisiti

- Essere contatto amministratore dell'infrastruttura [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) per ricevere le credenziali di accesso.
- Avere un utente attivo con diritti specifici per Zerto (creato nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it))
- Aver implementato [Zerto Virtual Replication](/pages/cloud/private-cloud/zerto_virtual_replication_as_a_service)

## Procedura

Nell'interfaccia Zerto del sito di destinazione, verifica le dashboard `VPGs`{.action} e `VMs`{.action}.<br>
Nel nostro esempio, VPG1 contiene due VM, vm1-zerto e vm2-zerto. Lo stato della sincronizzazione del sito è operativo.

![Dash](images/en01sync.png){.thumbnail}

Nell'interfaccia vSphere del sito sorgente, vm2-zerto è volontariamente eliminato.<br>
La VM e i dischi sono eliminati.

![VM](images/en02vmdelete.png){.thumbnail}

Di ritorno all'interfaccia Zerto del sito di destinazione, la VPG si ferma nella sincronizzazione e si mette in errore. La VM vm2-zerto è grigia.

![VM](images/en03vpgerror.png){.thumbnail}

Nella scheda `VPGs`{.action}, seleziona VPG1 e nel menu `Actions`{.action}, clicca su `Edit VPG`{.action}.

![VPG](images/en04vpgedit.png){.thumbnail}

Nella `VMs`{.action}, rimuovi vm2-zerto dalla sezione `selected VMS` (spunta la VM e clicca sulla freccia che punta a sinistra).<br>
CLclicca su `Done`{.action}.

![VPG](images/en05vpgremove.png){.thumbnail}

Clicca su `No`{.action} nel finestrino di avvertimento. In genere non è necessario salvare il disco di recupero.

![VPG](images/en06warning.png){.thumbnail}

La VPG si sincronizzerà di nuovo e ridiventerà operativa con una sola VM all'interno.

![DONE](images/en07green.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
