---
title: Enterprise File Storage - Concetti
excerpt: "Scopri i principi di funzionamento dell'offerta Enterprise File Storage"
updated: 2022-04-07
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Enterprise File Storage permette di usufruire di volumi di storage NFS totalmente gestiti da OVHcloud. Questa guida introduttiva ti mostra i concetti e i limiti del servizio Enterprise File Storage.

**Come funziona l'offerta Enterprise File Storage.**

## Procedura

### Enterprise File Storage, cos'è?

Enterprise File Storage è un'offerta di file system gestita da OVHcloud e basata sulla soluzione NetApp&#174; ONTAP.

Puoi ordinare uno o più spazi di archiviazione tra 1TB e 58TB sul tuo account, con una granularità di 1 TB.

### Principio di funzionamento dei servizi

Quando ordini tramite il tuo account OVHcloud un servizio Enterprise File Storage da 1 a 58 TB, ricevi uno spazio di storage NFS.

L'account OVHcloud è di default il contatto amministratore, tecnico e di fatturazione del servizio. Per maggiori informazioni consulta la nostra guida "[Gestire i contatti dei propri servizi"](/pages/account_and_service_management/account_information/managing_contacts)".

![Enterprise File Storage 1](images/Netapp_Concept_1.png)

> [!primary]
>
> Ogni servizio può appartenere a un solo account OVHcloud (NIC-handle). Tuttavia, i contatti tecnici e di fatturazione possono essere modificati a favore di altri account.
>

### Principio di funzionamento dei volumi

Una volta ordinato il servizio Enterprise File Storage, è disponibile un servizio con capacità di storage corrispondente. In questo servizio è possibile creare uno o più volumi, ognuno dei quali corrisponde a una partizione.
<br>Questi volumi permettono di archiviare file e sono accessibili in rete tramite un indirizzo IP fornito da OVHcloud.

![Enterprise File Storage 2](images/Netapp_Concept_2.png)

> [!primary]
>
> - Ogni volume appartiene a un servizio, ma un servizio può contenere più volumi.
>
> - La dimensione di un volume non può superare la dimensione totale del servizio meno lo spazio assegnato agli Snapshot che esso contiene.
>
> - La dimensione di un volume è scalabile, sia in aumento che in calo.
>

Per maggiori informazioni consulta la guida ["Gestire i volumi"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volumes).

### Funzionamento delle ACL

Per motivi di sicurezza, un volume non è immediatamente accessibile tramite il suo percorso. È necessario creare regole nell'elenco di controllo di accesso (ACL) del volume per consentire agli utenti di accedervi.

Queste regole sono costituite da un indirizzo IP di origine della rete in formato x.x.x.x/x e da un tipo di diritti di sola lettura (RO) o di lettura/scrittura (RW).

![Enterprise File Storage 3](images/Netapp_Concept_3.png)

> [!primary]
>
> Potete creare una o più regole per volume.
>

Per maggiori informazioni, consulta la guida ["Gestire le ACL di un volume"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_acl).

### Principio di funzionamento degli Snapshot

La tecnologia di Snapshot di Enterprise File Storage fornisce una soluzione di protezione dei dati locale sullo stesso dispositivo per il ripristino di singoli file.

Uno Snapshot Enterprise File Storage è un'immagine di un volume con una data e un'ora specifiche.

La creazione richiede solo alcuni secondi, indipendentemente dalle dimensioni del volume, dalla capacità utilizzata o dal livello di attività sul volume.

Lo Snapshot è una copia dei metadati del volume in un istante specifico (istantanea della tabella degli indici).

Il consumo giornaliero rilevato degli Snapshot è compreso tra l'1 e il 5% della capacità del volume per numerose applicazioni. Di conseguenza, ad ogni creazione di volume, OVHcloud riserva il 5% della capacità per gli Snapshot.

![Enterprise File Storage 4](images/Netapp_Concept_4.png)

Per maggiori informazioni, consulta la guida ["Gestire gli Snapshot di un volume"](/pages/storage_and_backup/file_storage/enterprise_file_storage/netapp_volume_snapshots).

### Limiti dell'offerta Enterprise File Storage

- un servizio ha una dimensione assegnata e dedicata compresa tra 1 TB e 58 TB
- La granularità di un servizio è di 1 TB
- Il numero di volumi per servizio è limitato a 10 volumi per TB (ad esempio 50 volumi per un servizio da 5 TB)

#### Limiti dei volumi

- Un volume non può superare la dimensione di 29 TB meno il 5% riservato per gli Snapshot (1.45TB), cioè 27,55 TB
- La dimensione minima di un volume è di 100 GB
    - Granularità per volume: 1 GB
    <- Dimensione massima di un file: 16 TB

#### Limiti degli Snapshot

- Un volume non può avere più di 200 Snapshot.
- Numero massimo di policy di Snapshot per volume: 1
- Numero massimo di regole per politica di Snapshot: 4

#### Limiti associati alle ACL

- un volume ha un indirizzo IP sulla rete interna in 10.x.x.x di OVHcloud.
- Numero massimo di vRack (servizio di rete privata) associato al servizio: 0 (il supporto della tecnologia vRack non è ancora disponibile)
- Numero massimo di access list: 1 per volume
- Numero massimo di IP per accesso list: 16 IP per accesso list

#### Limiti delle performance

- Banda passante minima per TB: nessun minimo
- Banda passante massima per TB: 64 MB/s e 4000 IOPS

### Calcolo di un volume

> [!primary]
>
> Qual è la differenza tra Terabyte (TB) e Tebibyte (TiB)?
>
> - T, il prefisso "tera-", è una metrica e uno standard IT che utilizza il base-10. Quindi 1 TB = 10^12 bytes = 100000000000 bytes = 1000 GB.
>
> - Ti, il prefisso "Tebi-", è stato creato in seguito come uno dei prefissi binari che ora sono standard IEC/ISO e che utilizzano la base-2. Questo significa 1024^4=2^40. Quindi 1 TiB = 1099511627776 bytes= 1024 GiB.
>
> - I computer utilizzano il database 2, in modo che la quantità di storage che è possibile vedere nel sistema operativo sia espressa in TiB. I fornitori di storage tendono a utilizzare il TB perché è più importante del TB.
>
> - Il problema è che sono simili (2,4%) a livello di KB, ma a livello di TB si ha una differenza del 10% e l'aumento è esponenziale.
>
> - **Per Enterprise File Storage, perché vogliamo essere trasparenti con voi, consegneremo il volume in TiB anche se vedete il TB come unità, perché il pubblico utilizza il TB.**
>
> - In questo modo, se ordini un servizio Enterprise File Storage da 1 TB, avrai a disposizione 1 TiB = 1,09951 TB.
>

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
