---
title: 'Configurare la vRack tra un’istanza Public Cloud e un server dedicato'
slug: configurare-vrack-tra-pci-e-server-dedicato
excerpt: 'Scopri come configurare una rete privata tra un’istanza Public Cloud e un server dedicato'
section: vRack
---

**Ultimo aggiornamento: 30/11/2018**

## Obiettivo

La [vRack](https://www.ovh.it/soluzioni/vrack/){.external} è una rete privata che permette di configurare l’indirizzamento tra due o più [server dedicati](https://www.ovh.it/server_dedicati/){.external} OVH. Inoltre, consente di aggiungere [istanze Public Cloud](https://www.ovh.it/public-cloud/istanze/){.external} a una rete privata al fine di creare un’infrastruttura di risorse fisiche e virtuali.

**Questa guida ti mostra come configurare una rete privata tra un’istanza Public Cloud e un server dedicato.**


## Prerequisiti

- Aver attivato un servizio [vRack](https://www.ovh.it/soluzioni/vrack/){.external}
- Disporre di un [server dedicato](https://www.ovh.it/server_dedicati/){.external} compatibile con la vRack
- Essere connesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Avere accesso all’intervallo di indirizzi IP privati preselezionato


## Procedura

### Crea un progetto Public Cloud

Una volta connesso al tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, clicca sul menu `Cloud`{.action} e poi sul pulsante `Ordina`{.action}.

![Creare un progetto](images/pci-project-01.png){.thumbnail}

Seleziona `Progetto Cloud`{.action}.

![Creare un progetto](images/pci-project-02.png){.thumbnail}

Assegna un nome al progetto, scegli un metodo di pagamento e poi clicca su `Crea il tuo progetto`{.action}.

![Creare un progetto](images/pci-project-03.png){.thumbnail}

Dopo aver configurato il progetto, clicca sul pulsante `Attiva le reti private`{.action}. 

![Attivare vRack](images/pci-vrack-01.png){.thumbnail}

Di seguito, clicca sull’opzione `Esistente`{.action} e poi seleziona la tua vRack nel menu a tendina.

![Attivare vRack](images/pci-vrack-02.png){.thumbnail}


### Crea un’istanza Public Cloud

Accedi alla pagina del progetto e, nella sezione `Infrastruttura`{.action}, clicca su `Azioni`{.action}.

![Creare un'istanza](images/pci-01.png){.thumbnail}

Nel menu a tendina clicca sull’opzione `Aggiungi un server`{.action}.

![Creare un'istanza](images/pci-02.png){.thumbnail}

Clicca poi sul pulsante `Opzioni avanzate`{.action}.

![Creare un'istanza](images/pci-03.png){.thumbnail}

Di seguito, clicca sul menu a tendina nella sezione **Associa una vRack** e seleziona la tua vRack. Quindi clicca su `Continua`{.action} (situato nella parte superiore della finestra di dialogo) e torna alla schermata precedente.

![Creare un'istanza](images/pci-04.png){.thumbnail}

Infine, seleziona le opzioni di installazione e clicca su pulsante `Avvia adesso`{.action}.

![Creare un'istanza](images/pci-05.png){.thumbnail}


### Configura le interfacce di rete

Per configurare le interfacce di rete tra l’istanza Public Cloud appena creata e il tuo server dedicato, consulta la nostra guida: [Configurare due o più server dedicati nella vRack](https://docs.ovh.com/it/dedicated/configurare-server-dedicati-vrack/){.external}.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.