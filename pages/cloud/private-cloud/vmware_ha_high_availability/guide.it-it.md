---
title: VMware HA (High Availability)
slug: vmware-ha-high-availability
excerpt: Gestire la politica di riavvio con la funzione HA
legacy_guide_number: '2163279'
space_key: VS
space_name: vSphere as a Service
section: Funzionalità VMware vSphere
order: 02
updated: 2020-04-30
---

**Ultimo aggiornamento: 29/08/2018**

## Obiettivo

La funzione principale di **VMware HA** (High Availability) è quella di riavviare le macchine virtuali in un altro host del cluster in caso di guasto hardware.  **HA** permette di monitorare sia le Macchine Virtuali che le applicazioni. 

![schema HA](images/HA3.png){.thumbnail}

**Questa guida ti mostra come configurare questa funzione**

## Prerequisiti

- Avere accesso all’interfaccia vSphere
- Disporre di un servizio [Hosted Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/){.external} attivo

## Procedura

### Attivazione

HA è attivo di default nel cluster di base messo a disposizione da OVHcloud al momento della consegna di un Hosted Private Cloud.

Nel caso in cui venga creato un nuovo cluster, è possibile attivare HA al momento della creazione del cluster o in un secondo momento. 

Se HA non è già attivo nel tuo cluster, clicca sulla scheda`Configura` del cluster e poi su `Disponibilità vSphere` della sezione `Servizi`.

Clicca su`Modifica`{.action} e seleziona la casella per attivare la funzionalità HA.

È inoltre importante attivare il monitoraggio dell’host. Questo parametro consente l’invio di segnali di impulso tra gli host Esxi per rilevare eventuali guasti.  
È necessario disattivarlo per effettuare operazioni di aggiornamento, ad esempio, con [l’update manager](../usare_vmware_update_manager/). In questo caso specifico, l’host è isolato.

![Attivazione HA](images/HA.png){.thumbnail}


### Impostazioni

#### Guasti e risposte

Questa prima categoria permette di definire la politica di riavvio delle VM in base ai vari guasti possibili.

##### Risposta in caso di guasto dell’host

Questa categoria definirà la politica di riavvio delle VM in caso di perdita di un host.

In questo modo, puoi scegliere di riavviare automaticamente le tue macchine virtuali oppure no.
È inoltre possibile attivare il riavvio predefinito del cluster. Puoi impostare questo parametro per ogni macchina virtuale nella scheda `Sostituzione delle VM`.

Inoltre puoi selezionare una condizione diversa da quella predefinita (Risorse allocate), che vSphere HA verificherà prima di procedere al riavvio.

![guasto dell’host](images/HAparam1.PNG){.thumbnail}

##### Risposta all’isolamento dell’host

Questa categoria ti consente di definire le azioni da effettuare in caso di perdita di connettività di rete di un host.

Puoi scegliere tra: 

- Non fare nulla
- Spegnere le macchine virtuali e tentare di riavviarle su un altro host disponibile.
- Spegnere l’host interessato e tentare un riavvio delle macchine virtuali su un altro host disponibile.

![isolamento di host](images/HAparam2.PNG){.thumbnail}

##### Database con PDL

In caso di malfunzionamento di un database con uno stato PDL (permanent device loss) puoi definire le azioni da effettuare:

- Non fare nulla
- Non fare nulla, ma generare log negli eventi.
- Spegnere le macchine virtuali e tentare di riavviarle sugli host che continuano ad essere connessi con i database.

![database con PDL](images/HAparam3.PNG){.thumbnail}

##### Database con APD

In caso di malfunzionamento di un database con uno stato ADP (all path down) puoi definire le azioni da effettuare:

- Non fare nulla
- Non fare nulla, ma generare log negli eventi.
- Spegnere le macchine virtuali e tentare di riavviarle.

![database con APD](images/HAparam4.PNG){.thumbnail}

##### Monitoraggio delle VM

Il monitoraggio delle macchine virtuali è disponibile dopo l’installazione dei [VMware tools](../installare-vmware-tools/).
In caso di non risposta tramite i **tools** (segnali di impulso), la macchina virtuale sarà automaticamente riavviata. Questa funzionalità dispone di una configurazione avanzata (ad esempio, gli intervalli di riavvio).

![Monitoraggio delle MV](images/HAparam5.PNG){.thumbnail}

#### Controllo di ammissione

vSphere HA utilizza il controllo di ammissione per assicurarsi che le risorse sufficienti sono riservate al recupero delle macchine virtuali in caso di guasto di un host.

Il controllo di ammissione impone restrizioni sull’utilizzo delle risorse. Le azioni che rischiano di infrangere queste restrizioni non sono autorizzate. Le azioni che possono non essere autorizzate includono i seguenti esempi:

- Accensione di una macchina virtuale
- Migrazione di una macchina virtuale
- Aumento della riserva del CPU o di memoria di una macchina virtuale

La base del controllo di ammissione vSphere HA corrisponde al numero di guasti host che il cluster è autorizzato a tollerare e che continua a garantire il failover. La capacità di failover degli host può essere definito in tre diversi modi:

- [Percentuale delle risorse del cluster](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-FAFEFEFF-56F7-4CDF-A682-FC3C62A29A95.html){.external-link}

- [Strategia di slot](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-85D9737E-769C-40B6-AB73-F58DA1A451F0.html){.external-link}

- [Host di failover dedicati](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-C4F5F9EE-4235-4151-BEBE-FCB2A752407B.html){.external-link}

#### Database di segnale di impulso

Quando l’host principale di un cluster HA non è in grado di comunicare con un host subordinato nella rete di gestione, l’host principale utilizza il segnale di impulso di database per determinare se l’host subordinato è difettoso, se si trova in una partizione di rete o se è isolato dalla rete.

#### Opzioni avanzate

Nel cluster è possibile utilizzare diverse impostazioni di configurazione avanzata.

Per consultare le impostazioni, clicca [qui](https://docs.vmware.com/fr/VMware-vSphere/6.5/com.vmware.vsphere.avail.doc/GUID-E0161CB5-BD3F-425F-A7E0-BF83B005FECA.html){.external-link}

### Regola HA

Nella sezione `Configurazione`, scheda `Regole VM/Host`, è possibile creare una regola del tipo “Da Macchine virtuali a macchine virtuali”,

che aggiunge una condizione di riavvio per assicurasi che le macchine virtuali di un primo gruppo vengano tutte avviate prima di avviare quelle del secondo gruppo.

Questa regola può perfettamente aggiungersi alle priorità di riavvio che possono essere impostate nella scheda `Sostituzioni VM`.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
