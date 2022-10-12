---
title: Object Storage Swift - Gestisci i tuoi archivi con Rsync
slug: pca/rsync
excerpt: Scopri come accedere ai tuoi archivi Public Cloud con Rsync
section: OpenStack Swift Archive Storage Class Specifics
order: 090
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 08/12/2020**

## Obiettivo

OVHcloud Public Cloud Archive è una soluzione di storage gestita principalmente tramite l'API OpenStack. Abbiamo sviluppato un gateway che permette di connettersi al tuo container PCA con Rsync.

**Scopri le informazioni necessarie per attivare la connessione ai tuoi dati archiviati con Rsync.**

## Prerequisiti

### Rsync

[Rsync](https://rsync.samba.org/) est un utilitaire Open Source qui permet un transfert de fichiers incrémentiel rapide.<br>
I file binari precompilati sono disponibili nella maggior parte delle distribuzioni dei sistemi operativi recenti. Per questo motivo, è necessario verificare se è possibile installare un package Rsync utilizzando gli strumenti di installazione standard per il tuo sistema operativo.

### ID OpenStack

Per generare l'identificativo cliente e la password OpenStack, consulta questa [guida](https://docs.ovh.com/it/public-cloud/horizon/).

### TenantName

Il TenantName corrisponde al nome del tuo progetto Horizon. Per ottenere il TenantName, accedi all'interfaccia web OpenStack: [https://horizon.cloud.ovh.net/](https://horizon.cloud.ovh.net/){.external}.

Una volta connesso, il TenenteName è visibile in cima alla pagina.

![horizon](images/image1.png){.thumbnail}

## Procedura

### Dettagli della connessione

- Host Name: gateways.storage.{region}.cloud.ovh.net
- User Name: pca
- Password: {TenantName}.{Username_Openstack}.{Password_Openstack}
- Port: 22

### Trasferimento di dati

Esempio di riga di comando se hai creato un container PCA nella Region GRA:

```bash
user@host:~$ rsync -a /path/to/my/dir pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Scaricamento dei dati

Il Public Cloud Archive di OVHcloud offre storage di dati a basso costo in cambio di una maggiore latenza nel processo di recupero. Per accedere al tuo archivio, è necessario ricevere una richiesta di estrazione con i nomi di container e archivi ai quali si riferisce.

Una volta estratto l'archivio, è possibile scaricarlo per 24 ore con una velocità illimitata e una frequenza di accesso illimitata. Dopo questo periodo di recupero, l'archivio sarà nuovamente bloccato.

```bash
user@host:~$ rsync -a pca@gateways.storage.gra.cloud.ovh.net:/container
pca@gateways.storage.gra.cloud.ovh.net's password:
user@host:~$
```

### Ulteriori informazioni: Opzioni Rsync

Dato che il server Rsync è stato configurato per funzionare con l'API Swift, le opzioni saranno applicate lato server per corrispondere al comportamento del server principale di storage di oggetti:

> —inplace: Invece del metodo predefinito che consiste nel creare una nuova copia del file e spostarla una volta terminata la procedura, Rsync scrive i dati aggiornati direttamente nel file di destinazione.
>

Inoltre, è consentito solo un sottoinsieme di opzioni sul lato cliente:

> -a, --archive: Attiva la modalità di archiviazione.
>
> -r, --recursive: Copia le directory in modo ricorsivo.
>
> -v, --verbose: Aumenta la quantità di informazioni che ti vengono fornite durante il trasferimento.
>
> --del, --delete: Elimina i file superflui dalla directory di destinazione.
>
> -P, --progress: Stampa le informazioni che indicano la progressione del trasferimento.


## Per saperne di più

[Particolarità dell'API Openstack Swift su Cloud Archive](https://docs.ovh.com/gb/en/storage/pca/api/)

[Rsync](https://linux.die.net/man/1/rsync)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
