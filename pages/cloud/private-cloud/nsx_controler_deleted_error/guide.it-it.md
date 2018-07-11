---
title: 'Capire l’errore “Controller VM deleted”'
slug: errore-controller-nsx
excerpt: 'Scopri cosa significa l’errore “VM del controller rimosso”'
section: NSX
---

**Ultimo aggiornamento: 11/07/2018**

## Obiettivo

Nella tua interfaccia NSX possono comparire diversi tipi di errori.

**Questa guida ti mostra cosa fare in caso di errore Controller VM deleted**.


## Prerequisiti

- Avere attivato l’opzione NSX
- Disporre di un utente con i diritti di accesso su NSX


## Procedura

Dalla tua [Interfaccia NSX](https://docs.ovh.com/gb/en/private-cloud/accessing-NSX-interface/), nella sezione `Installation`{.action}, il messaggio di errore *Controller VM deleted* può apparire sotto il nome del controller:

![Capire l’errore “Controller VM deleted”](images/controllervmdeleted.JPG)


Ciò avviene perché OVH non ospita alcun controller sulla tua infrastruttura, bensì su un’infrastruttura a parte, gestita internamente per non consumare le tue risorse.

Nel funzionamento standard di NSX è previsto che i controller si trovino sullo stesso datacenter delle tue macchine virtuali e ciò spiega l’errore. Questo messaggio non incide sul funzionamento della tua macchina.

Nell’interfaccia NSX, assicurati semplicemente che lo stato dei controller sia impostato su `Connected`. Se è così, la macchina funziona correttamente.


> [!warning]
>
> La risoluzione di questo errore attraverso il pulsante `Risolvere`{.action} comporta la rimozione dei controller dalla tua infrastruttura, compromettendo il funzionamento di NSX e della rete dell’infrastruttura. Pertanto, ti consigliamo di non eseguire questa azione poiché la gestione dei controller NSX rimane a carico di OVH.
> 

Ciò spiega anche il seguente alert sulla dashboard di NSX:

![Alert sull’interfaccia NSX](images/controllervmdeleted2.JPG)


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.