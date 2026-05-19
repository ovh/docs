---
title: Autorizzare IP ad accedere al vCenter
updated: 2023-01-25
---

## Obiettivo

L'accesso al tuo vCenter è limitato agli indirizzi IP autorizzati.

**Questa guida ti mostra come gestire le restrizioni di accesso al vCenter per gli indirizzi IP.**

## Prerequisiti

* Disporre di un’[infrastruttura Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) sul proprio account OVHcloud

<!-- CP-NAV-START:privatecloud-vmware-vsphere -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [VMware vSphere](/links/control-panel/privatecloud-vmware-vsphere)
- **Percorso di navigazione:** `Hosted Private Cloud`{.action} > `Managed VMware vSphere`{.action} > Seleziona il tuo vSphere service

---
<!-- CP-NAV-END:privatecloud-vmware-vsphere -->

## Procedura

Di default, l'accesso al tuo vCenter è limitato. È quindi necessario aggiungere gli IP autorizzati a connettersi al servizio.

Accedi al tuo [Spazio Cliente OVHcloud](/links/manager) e clicca sulla scheda `Hosted Private Cloud`{.action}.

Clicca su `VMware`{.action}, seleziona la tua infrastruttura e clicca sulla scheda `Sicurezza`{.action}. Clicca su `Aggiungi una nuova classe di indirizzi IP`{.action}.

![vCenter](images/restrictIP.JPG){.thumbnail}

Nella nuova finestra, indica l’IP in questione ed eventualmente una descrizione per poterlo trovare più facilmente nella lista in un secondo momento.

Clicca su `Continua`{.action} per confermare l’operazione: una volta che l’IP risulterà **Autorizzato e installato**, potrà essere utilizzato per l’accesso a vSphere.

![vCenter](images/restrictIP2.JPG){.thumbnail}

> [!primary]
>
> Ti ricordiamo che, per motivi di sicurezza, puoi autorizzare un massimo di 2048 indirizzi IP a connettersi al tuo vCenter.
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
