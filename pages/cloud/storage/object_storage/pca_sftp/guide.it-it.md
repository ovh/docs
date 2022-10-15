---
title: Object Storage Swift - Gestisci i tuoi archivi con un client SFTP/SCP
slug: pca/sftp
excerpt: Come gestire il tuo servizio Public Cloud Archive
section: OpenStack Swift Archive Storage Class Specifics
order: 100
---

**Ultimo aggiornamento: 13/05/2022**

## Introduzione
Public Cloud Archive (PCA) è una soluzione di archiviazione gestibile tramite l'API di OpenStack. Se non hai familiarità nell'amministrazione dello spazio di storage da riga di comando, abbiamo sviluppato un gateway che ti permette di accedere a PCA tramite un client SFTP.


### Prerequisiti
- Client SFTP: [WinSCP](https://winscp.net/eng/download.php){.external}
- Login e Password OpenStack
- TenantName del progetto


## Client SFTP
Nel nostro esempio, il client SFTP utilizzato è WinSCP. Ne esistono molti altri, con una configurazione simile a quella presentata in questa guida.


## Identificativo OpenStack
Per generare il tuo login e password OpenStack, consulta questa [guida](https://docs.ovh.com/it/public-cloud/creation-and-deletion-of-openstack-user/).


## TenantName
Il TenantName corrisponde al nome del tuo progetto su Horizon. Per recuperarlo, accedi all’interfaccia Web OpenStack utilizzando le credenziali generate precedentemente: [https://horizon.cloud.ovh.net/](https://horizon.cloud.ovh.net/){.external}. Una volta effettuato il login, il TenantName è visibile in alto nella pagina.


![horizon](images/image1.png){.thumbnail}


## Connessione
- Host name: gateways.storage.<region>.cloud.ovh.net
- User name: pca
- Password: <TenantName>.<Username_Openstack>.<Password_Openstack>


![connexion](images/image2.png){.thumbnail}


## Esempio
Hai creato un container PCA nel datacenter SBG:

- Host name: gateways.storage.sbg.cloud.ovh.net
- User name: pca
- Password: 971891XXXX1214.f6nBXXXXXAmcv.SfPeASYfuWeqBZgXXXXX2XhF3DY12RkD


![connexion](images/image3.png){.thumbnail}


## Impostazioni WinSCP
In questa sezione disattiveremo due opzioni di WinSCP:

**Transfer Resume/Transfer to Temporary Filename:** questa opzione deve essere disattivata perché con PCA non è possibile ripristinare i dati e WinSCP può quindi restituire un errore.

- Nella sezione "Endurance", seleziona "Disable".


![connexion](images/conf1.png){.thumbnail}

**Preserve Timestamp:** il TimeStamp corrisponde alla data di modifica del file. Questa opzione deve essere disattivata perché su PCA questa informazione viene sostituita con la data di caricamento del file.

- Nella categoria "Transfer", clicca su "Edit...".


![connexion](images/conf2.png){.thumbnail}

- Deseleziona "Preserve timestamp".


![connexion](images/conf3.png){.thumbnail}


## Recupero dei dati
Per recuperare i dati, per prima cosa è necessario sbloccare l’oggetto effettuando una richiesta di tipo GET. Se questo comando non viene eseguito, il client SFTP restituisce un messaggio di errore durante il tentativo di download del file. Per maggiori informazioni sulla procedura da seguire per sbloccare il tuo oggetto, consulta questa [guida](https://docs.ovh.com/it/storage/pca/unlock/).


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.