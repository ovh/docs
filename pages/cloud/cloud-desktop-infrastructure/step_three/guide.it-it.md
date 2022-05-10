---
title: 'Step 3 - Creare un pool di desktop virtuali'
slug: creare-un-pool
excerpt: 'Scopri come creare un pool con VMware Horizon 7.1'
section: Procedura
order: 3
---

**Ultimo aggiornamento: 21/09/2018**

## Obiettivo

Dopo aver [eseguito l’accesso all’interfaccia VMware Horizon](https://docs.ovh.com/it/cloud-desktop-infrastructure/piattaforma-horizon-7/){.external} e aver [creato il template di un <i>pool</i>](https://docs.ovh.com/it/cloud-desktop-infrastructure/creare-template-pool/){.external}, è il momento di creare il tuo primo <i>pool</i>.

**Questa guida ti mostra come creare un pool utilizzando VMware Horizon 7.1.**


## Prerequisiti

- Essere connesso a VMware Horizon 7.1.


## Procedura

Dopo aver eseguito l’accesso a VMware Horizon, segui i seguenti passaggi:

- sezione `Catalog`{.action} > `Desktop Pools`{.action} > `Add`{.action} e apri il form di creazione del pool.

![création d'un pool](images/1200.png){.thumbnail}

- Scegli il **tipo di pool** (*automatizzato* in questo caso).


> [!primary]
>
> Esistono tre principali tipologie di <i>pool </i>di desktop virtuali: automatizzato, manuale e RDS.
>
> - I <i>pool</i> di desktop virtuali <b>automatizzati</b> si creano a partire dallo stesso template o da uno snapshot del template di una macchina virtuale (VM).
>
> - I <i>pool</i> di desktop virtuali <b>manuali</b> sono una raccolta di VM, computer fisici o VM appartenenti a terzi. Nei <i>pool</i> automatizzati e manuali, ogni macchina è accessibile da un'utenza remota alla volta.
>
> - I <i>pool</i> di desktop virtuali <b>RDS</b> non consistono in una raccolta di macchine ma forniscono sessioni desktop sugli host RDS. Su un host RDS, più utenti possono avere varie sessioni di lavoro aperte contemporaneamente.
>


![création d'un pool](images/1201.png){.thumbnail}

- Scegli il tipo di `User assignment`{.action} per i desktop virtuali:

 - <b>Dedicated</b>: i desktop virtuali sono assegnati ad un unico utente
 - <b>Floating</b>: i desktop virtuali sono distribuiti agli utenti in base alla disponibilità al momento della connessione

![création d'un pool](images/1202.png){.thumbnail}

- Scegli il tipo di clone da impostare per realizzare il <i>pool</i>:

 - *<b>Full virtual machines</b>*: verrà realizzato un clone completo del template della VM
 - *<b>View Composer linked clones</b>*: verrà effettuato un clone legato allo snapshot di riferimento; questo riduce lo spazio sui datastore, risparmia le risorse e migliora la rapidità di distribuzione, mantenendo però un forte legame tra il template della VM e la VM del desktop virtuale utilizzato.

![création d'un pool](images/1203.png){.thumbnail}

- Scegli il nome del <i>pool</i> (puoi modificare il display name in seguito, ma non l’ID).

![création d'un pool](images/1204.png){.thumbnail}

- Scegli la configurazione del <i>pool</i> (ricordati di attivare l’*accesso HTML* se necessario).


> [!primary]
>
> Ti consigliamo di utilizzare il protocollo **Blast**, che ti garantisce in particolare una migliore performance (indipendentemente dalla larghezza di banda della tua connessione), una maggiore sicurezza e, per gli utilizzi da dispositivo mobile, un importante risparmio di batteria. Per maggiori informazioni riguardanti il protocollo, clicca su [questo link](https://docs.vmware.com/fr/VMware-Horizon-7/7.2/com.vmware.horizon-view.installation.doc/GUID-F64BAD49-78A0-44FE-97EA-76A56FD022D6.html){.external}.
>

![création d'un pool](images/1205.png){.thumbnail}

- Puoi selezionare il modo in cui denominare i desktop virtuali, così come il numero di VM da avviare.

![création d'un pool](images/1206.png){.thumbnail}

- Il seguente screenshot ti permette di decidere se i profili utente saranno su un disco persistente e se è necessario un disco separato per i file temporanei.

![création d'un pool](images/1207.png){.thumbnail}

- Successivamente puoi scegliere la policy di storage, così come se separare i dischi permanenti ed i sistemi operativi.

![création d'un pool](images/1208.png){.thumbnail}

- Nella seguente finestra, seleziona il *template della VM* che vuoi avviare.

> [!primary]
>
> Se la VM non appare, seleziona `Show all parent VMs`{.action} per capirne il motivo.
>

![création d'un pool](images/1209.png){.thumbnail}

- Seleziona poi lo *snapshot di riferimento* (è possibile che gli snapshot siano diversi in base alle necessità di gestione delle versioni, di test o di produzione su <i>pool</i> differenti).

![création d'un pool](images/1210.png){.thumbnail}

- Seleziona la *cartella di destinazione* del tuo <i>pool</i> (per l’organizzazione vSphere). Una sottocartella verrà creata sotto il nome del tuo <i>pool</i> per lo storage delle VM distribuite.

![création d'un pool](images/1211.png){.thumbnail}

- Seleziona i *datastore* che serviranno per lo storage delle VM.

![création d'un pool](images/1212.png){.thumbnail}

- La schermata seguente consente di scegliere opzioni avanzate legate allo storage dei desktop virtuali.

![création d'un pool](images/1213.png){.thumbnail}

- Poi puoi scegliere le opzioni di distribuzione associate all’Active Directory e alla personalizzazione delle VM (seleziona una personalizzazione sysprep tra quelle create sul tuo Private Cloud.)

![création d'un pool](images/1214.png){.thumbnail}

- Puoi anche scegliere di assegnare direttamente gli utenti a questo <i>pool</i> di desktop virtuali o completare la creazione e assegnarli più avanti.

La creazione del <i>pool</i> può richiedere una lunga attesa a seconda del template utilizzato. In caso di errore, la sezione `Inventory` del <i>pool</i> fornisce i dettagli sulla creazione di ogni VM e ti permette di capire l’origine del problema.

Adesso che hai creato il <i>pool</i>, vedremo come [assegnare i desktop virtuali agli utenti](https://docs.ovh.com/it/cloud-desktop-infrastructure/assegnare-desktop-virtuali/){.external}.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.