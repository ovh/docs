---
title: Utilizzare Hosted Private Cloud all'interno di una vRack
excerpt:  Scopri come utilizzare la vRack con la tua soluzione Hosted Private Cloud
legacy_guide_number: g1257
updated: 2022-03-28
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

**Ultimo aggiornamento: 28/03/2022**

## Obiettivo

La vRack è la possibilità di connettere diversi servizi Cloud di OVHcloud all'interno di una o più reti private sicure (VLAN).

**Questa guida ti mostra come attivarlo**

## Prerequisiti

- Avere un servizio [vRack](https://www.ovh.it/soluzioni/vrack/) sul tuo account o ordinarne uno se necessario.
- Essere contatto amministratore dell'infrastruttura [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/) per ricevere le credenziali di accesso.
- Avere un utente attivo [creato nello Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

## Procedura

### Spazio cliente

Al momento della consegna del servizio [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/), la sezione *datacenter* è già all'interno di una vRack. Per accedere al vRack, andate nella sezione `Bare Metal Cloud`{.action}, cliccate su `Network`{.action}, poi su `vRack`{.action}. Seleziona il tuo vRack dall'elenco per visualizzare il contenuto.

![Datacenter](images/vRackDatacenter.PNG){.thumbnail}

Per spostare il *datacenter* del tuo Hosted Private Cloud in un'altra vRack, clicca sul pulsante `Sposta`{.action}

### Client vSphere

Nel client vSphere, le *VLANs* compatibili con la vRack sono disponibili nello switch virtuale distribuito (vds), a sua volta situato nella cartella **vrack**.

> [!success]
>
> Di default, OVHcloud fornisce un'infrastruttura con 11 VLAN (da VLAN10 a VLAN20).
>

![VLAN](images/vRackVsphere.png){.thumbnail}

È possibile modificare le impostazioni o crearne di nuove seguendo la guida alla [creazione di VxLAN](../creazione-vlan-vxlan/.

Questi *portgroup* possono essere assegnati alle interfacce di rete delle macchine virtuali.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
