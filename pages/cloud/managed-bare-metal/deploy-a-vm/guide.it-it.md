---
title: Deploy di una macchina virtuale
slug: deploy-di-una-macchina-virtuale
routes:
    canonical: 'https://docs.ovh.com/it/private-cloud/deploy-di-una-macchina-virtuale/'
excerpt: Come attivare una macchina virtuale dall’interfaccia vSphere
section: Gestione delle macchine virtuali
order: 0
---

**Ultimo aggiornamento: 18/11/2020**

## Obiettivo

L’interfaccia vSphere permette di eseguire il deploy di macchine virtuali in diversi modi. 

**Questa guida ti mostra come creare una VM a partire da un file ISO.**

## Prerequisiti

- Disporre di un servizio [Managed Bare Metal](https://www.ovhcloud.com/it/managed-bare-metal/){.external} attivo
- Avere accesso all’[interfaccia vSphere](../connessione-interfaccia-vsphere/)

## Procedura

### Esegui il deploy di una macchina virtuale

La creazione di una nuova macchina virtuale è disponibile nella sezione `ClusterCDI` del client vSphere.

Per effettuare l’operazione clicca con il tasto destro sul cluster in questione e seleziona `New Virtual Machine`{.action}.

![Deploy di una VM](images/vm01.png){.thumbnail}

Per creare una macchina virtuale è possibile scegliere tra diverse opzioni:

- Da un file ISO, disponibile nel datastore (per importarlo, consulta la [guida di connessione in SFTP](../connessione-in-sftp/)).
- Da un template personale o [fornito da OVHcloud](../installazione-template-ovhcloud/).
- Clonare una VM già esistente, prestando particolare attenzione agli eventuali conflitti di indirizzi IP.
- Clonare una VM in un template per un’implementazione più rapida delle future macchine virtuali.
- Clonare un template in un altro template, ad esempio per averlo a disposizione su diversi datastore e prevenire cali di performance durante i deploy massivi.
- Convertire un template in macchina virtuale. Questa operazione comporta la perdita del template ma potrebbe rivelarsi utile per apportare modifiche.

![Scelta della modalità di creazione](images/vm02.png){.thumbnail}

In questa guida ci concentreremo sul deploy di una macchina virtuale a partire da un file ISO.

Lo step successivo consente di definire il nome della propria macchina e sceglierne la localizzazione. Nel caso in cui non venga selezionata nessuna cartella, la macchina virtuale verrà creata nella root del datacenter.

![Localizzazione della macchina virtuale](images/vm03.png){.thumbnail}

In seguito è possibile scegliere il cluster, l’host, il [pool di risorse](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.resmgmt.doc/GUID-60077B40-66FF-4625-934A-641703ED7601.html){.external-link} o la [vApp](https://docs.vmware.com/en/VMware-vSphere/6.7/com.vmware.vsphere.vm_admin.doc/GUID-E6E9D2A9-D358-4996-9BC7-F8D9D9645290.html){.external-link}di destinazione.

Nel nostro caso, la macchina virtuale sarà implementata secondo le regole DRS configurate e localizzata nella root del cluster.

![Scelta delle risorse](images/vm04.png){.thumbnail}

A questo punto è necessario scegliere il datastore in cui salvare i file di configurazione e del disco.

Sconsigliamo di localizzare la macchina virtuale in “storageLocal”, che corrisponde al disco locale dell’host: in caso di malfunzionamenti dell’host, infatti, la VM non potrà essere riavviata e non sarà più raggiungibile.

![Scelta dello storage](images/vm05.png){.thumbnail}

Successivamente, seleziona il tipo di compatibilità tra macchina virtuale e host. Tranne in casi particolari, consigliamo di scegliere la versione più recente disponibile.

![Scelta della compatibilità](images/vm06.png){.thumbnail}

Nello step successivo, scegli un “guest operating system”. Il “Guest OS” non installa il sistema operativo ma pre-configura automaticamente la macchina virtuale per l’utilizzo (quantità di CPU/RAM, tipo di scheda di rete, installazione dei VMware Tools).

![Scelta del Guest OS](images/vm07.png){.thumbnail}

### Configura la macchina virtuale

Negli step successivi è possibile configurare le risorse della macchina virtuale.

La riga `New Network` permette di aggiungere una scheda di rete:

- la “VM Network” è utilizzata per la rete pubblica e l’accesso diretto a Internet
- le VLAN consentono di utilizzare la rete privata tra le diverse macchine virtuali (e altri servizi OVHcloud tramite la vRack)

![Scelta della rete](images/vm08.png){.thumbnail}

Nella riga `New CD/DVD Drive`, seleziona “Datastore ISO File”.

Si aprirà una nuova finestra in cui è possibile caricare il file ISO, che potrà essere aggiunto anche dopo la creazione della macchina virtuale.

![Scelta del file ISO](images/vm09.png){.thumbnail}

Una volta selezionato il file, verrà mostrato nell’interfaccia come nell’immagine qui sotto. È importante ricordarsi di connetterlo selezionando la casella `Connect At Power On`{.action}.

![Connettere ISO](images/vm10.png){.thumbnail}

A questo punto compare un riepilogo dei componenti della macchina virtuale. Per apportare eventuali modifiche alla configurazione è sufficiente selezionare lo step nella colonna sinistra.

Per completare il deploy, clicca su `FINISH`{.action}

![Riepilogo VM](images/vm11.png){.thumbnail}

Una volta che la macchina compare nell’inventario, è possibile avviarla facendo click con il tasto destro e selezionando `Power`{.action} > `Power on`{.action}. 

Clicca su `Open Remote Console`{.action} per accedere al terminale della VM e iniziare l’installazione del sistema operativo.

![Avvio VM](images/vm12.png){.thumbnail}

La console si aprirà in una nuova finestra e, a operazione ultimata, la macchina virtuale sarà pronta all’utilizzo.

![Console VM](images/vm13.png){.thumbnail}

> [!primary]
> Una volta installata la macchina virtuale, consigliamo di disabilitare l’ISO nelle impostazioni. In caso contrario non sarà possibile spostare la macchina virtuale.
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
