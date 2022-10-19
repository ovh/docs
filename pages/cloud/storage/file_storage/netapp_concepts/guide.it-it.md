---
title: Enterprise File Storage - Concetti
slug: netapp/concepts
excerpt: "Scopri i principi di funzionamento dell'offerta Enterprise File Storage"
section: Enterprise File Storage
order: 1
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 27/10/2021**

## Obiettivo

Il servizio OVHcloud Enterprise File Storage permette di ordinare pool di capacità e gestire volumi di file accessibili su una rete.
In questa guida con avvio rapido, scopri i concetti della tua soluzione Enterprise File Storage e i limiti dell'offerta.

**Scopri come funziona l'offerta Enterprise File Storage.**

## Procedura

### Enterprise File Storage, cos'è?

Enterprise File Storage è un'offerta di file system gestita da OVHcloud e basata sulla soluzione NetApp&#174; ONTAP Software-Defined Storage.

Puoi ordinare uno o più spazi di storage tra 1TiB e 29TiB sul tuo account.

> [!primary]
>
> Qual è la differenza tra Terabyte (TB) e Tebibyte (TiB)?
>
> - T, il prefisso "tera-" è una metrica e uno standard IT che utilizza la base-10. 1 TB = 10 TB 12 bytes = 100000000000 bytes = 1000 GB.
>
> - Ti, il prefisso "Tebi-", è stato creato in seguito come uno dei prefissi binari che sono ora standard IEC/ISO e che utilizza il database-2. Significa 1024 volte 4=240. Donc 1 TiB = 1099511627776 bytes = 1024 GiB.
>
> - I computer utilizzano la base 2, in modo che la quantità di storage che potete vedere nel vostro sistema operativo sia espressa in TiB. I fornitori di stoccaggio tendono ad utilizzare il TB in quanto si tratta di un numero superiore a quello del TiB.
>
> - Il problema è che sono simili (2,4%) a livello di KB, ma a livello di TB si registra una differenza del 10% e l'aumento è esponenziale.
>
> - Per Enterprise File Storage, perché vogliamo essere trasparenti con voi, consegneremo il volume in TiB anche se vedete il TB come unità, perché il grande pubblico utilizza il TB.
>
> - Ad esempio, se ordini un servizio Enterprise File Storage da 1 TB, avrai in realtà 1 TiB = 1,09951 TB.
>

### Principio di funzionamento della capacity pools

Quando ordini un servizio Enterprise File Storage tra 1 e 29 TB tramite il tuo account OVHcloud, ricevi una capacity pool NetApp&#174;.

L'account OVHcloud è di default il contatto amministratore, tecnico e di fatturazione del servizio. Per maggiori informazioni, consulta la nostra guida ["Gestire i contatti dei servizi OVHcloud"](https://docs.ovh.com/it/customer/gestisci_i_tuoi_contatti/).

![Enterprise File Storage 1](images/Netapp_Concept_1.PNG)

> [!primary]
>
> Ogni capacity pool può appartenere a un solo account OVHcloud (NIC-handle). Tuttavia, i contatti tecnici e la fatturazione possono essere modificati a vantaggio di altri account.
>

### Principio di funzionamento dei volumi

Una volta attivata la soluzione Enterprise File Storage, è possibile creare uno o più volumi nella capacità del pool.
<br>Questi volumi permettono di salvare file e sono accessibili in rete tramite un indirizzo IP fornito da OVHcloud.
<br>La creazione di un volume comporta automaticamente la creazione di un percorso di accesso principale e di tre vie di accesso secondarie.

![Enterprise File Storage 2](images/Netapp_Concept_2.PNG)

> [!primary]
>
> - Ogni volume appartiene ad una sola capacità pool, ma una capacità pool può contenere diversi volumi.
>
> - La dimensione di un volume non può superare la dimensione totale della capacity pool meno lo spazio assegnato agli snapshot in esso contenuti.
>
> - La dimensione di un volume è scalabile, sia verso l'alto che verso il basso.
>

Per maggiori informazioni, consulta la guida ["Gestire i tuoi volumi"](https://docs.ovh.com/it/storage/file-storage/netapp/volumes/).

### Principio di funzionamento delle ACL

Per motivi di sicurezza, un volume non è immediatamente raggiungibile attraverso il suo percorso di accesso. È necessario creare regole nella lista di controllo degli accessi (ACL) del volume per consentire agli utenti di accedervi.

Queste regole sono costituite da un indirizzo IP sorgente della tua rete in formato x.x.x.x/x e da un tipo di permesso, sia sola lettura (RO) che lettura/scrittura (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.PNG)

> [!primary]
>
> È possibile creare una o più regole per volume.
>

Per maggiori informazioni, consulta la guida ["Gestire le ACL di un volume"](https://docs.ovh.com/it/storage/file-storage/netapp/volume-acl/).

### Principio di funzionamento degli Snapshot

La tecnologia degli Snapshot di Enterprise File Storage fornisce una soluzione di protezione locale dei dati sullo stesso dispositivo per il ripristino di file unici.

Uno Snapshot Enterprise File Storage è un'immagine di un volume con una data e un'ora precise.

La creazione richiede solo pochi secondi, indipendentemente dalla dimensione del volume, dalla capacità utilizzata o dal livello di attività sul volume.

Lo Snapshot è una copia dei metadati del volume in un istante specifico (istantanea della tabella degli inodi).

Il consumo giornaliero constatato degli Snapshot è compreso tra l'1 e il 5% della capacità del volume per numerose applicazioni. Di conseguenza, ad ogni creazione di volume, OVHcloud riserva il 5% della sua capacità per gli Snapshot.

![Enterprise File Storage 4](images/Netapp_Concept_4.PNG)

Per maggiori informazioni, consulta la guida ["Gestire gli Snapshot di un volume"](https://docs.ovh.com/it/storage/file-storage/netapp/volume-snapshots/).

### Limiti dell'offerta Enterprise File Storage per la fase di test esterni (Beta)

Di seguito trovi i limiti della capacity pool dell'offerta Enterprise File Storage:

- Una capacità pool ha una dimensione allocata compresa tra 1TiB e 29TiB.
- Una capacità pool è limitata a 20 volumi per TiB.

Di seguito i limiti dei volumi:

- Un volume non può superare la dimensione di 29TiB meno il 5% riservato per gli snapshot (1.45TiB), cioè 27,55 TiB.
- La dimensione minima di un volume è di 1GiB.
- Un volume non può avere più di 255 Snapshot.
- Un volume ha un indirizzo IP sulla rete interna a 10.x.x.x di OVHcloud.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
