---
title: Object Storage Swift - Configura il tuo Object Storage su Owncloud
excerpt: Configura il tuo Object Storage su Owncloud
slug: pcs/configure-owncloud-with-object-storage
section: OpenStack Swift Storage Class Specifics
legacy_guide_number: g2000
order: 170
---


##
[Owncloud](https://owncloud.org/) è un'applicazione di storage online e di gestione di file.
Questa soluzione offre numerose funzionalità, tra cui la sincronizzazione tra più dispositivi e l'aggiunta di spazio di archiviazione esterno come l'Object Storage di OpenStack.

Questa guida ti mostra come configurare il tuo Object Storage su OwnCloud.


## Requisiti necessari

- Scarica il file OpenRC dal tuo Spazio Cliente OVHcloud o dall'interfaccia Horizon
- [Aggiungi spazio di storage](https://docs.ovh.com/it/public-cloud/aggiungi_storage_al_tuo_cloud/) per Owncloud




## Installazione
Per installare OwnCloud, esegui questo comando:


```
root@instance:~$ apt-get install owncloud
```



## Attenzione:
Assicurati che nei repository utilizzati sia presente l'ultima versione disponibile di OwnCloud.
Per funzionare, OwnCloud deve disporre di un database MySQL. Se non ne hai già uno, installalo eseguendo questo comando:


```
root@instance:~$ apt-get install mysql-server
```




## Configurazione
Per configurare il database che verrà utilizzato da OwnCloud, accedi al tuo server MySQL con la password di root definita durante l'installazione del server:


```
root@instance:~$ mysql -u root -p
```


A questo punto, puoi creare un nuovo utente e un database dedicato a OwnCloud:


```
**** Crea l'utente *****
mysql> CREATE USER 'owncloud'@'localhost' IDENTIFIED BY 'P@ssw0rd';

***** Crea il database *****
mysql> CREATE DATABASE `owncloud` ;

***** Assegna i premessi all'utente "owncloud" sul database "owncloud"
mysql> GRANT ALL PRIVILEGES ON `owncloud` . * TO 'owncloud'@'localhost';
```


Accedi all'interfaccia OwnCloud inserendo sul tuo browser l'indirizzo http://IP.del.tuo.server/owncloud:

![](images/img_3325.jpg){.thumbnail}

In questa interfaccia:

- crea un account amministratore
- inserisci la directory dei dati (facoltativo: se vuoi utilizzare solo l'Object Storage, puoi lasciare quella predefinita)
- inserisci le credenziali del tuo database


Una volta confermata l'operazione, puoi accedere alla tua interfaccia OwnCloud e attivare l’applicazione che ti permette di aggiungere un supporto di archiviazione esterno.
Per farlo, clicca su File in alto a sinistra e seleziona Applicazioni:

![](images/img_3327.jpg){.thumbnail}

Abilita l'applicazione External storage support dal menu delle applicazioni :

![](images/img_3328.jpg){.thumbnail}

Dopo averlo fatto, configura questa applicazione cliccando sul tuo nome utente in alto a destra e selezionando Admin:

![](images/img_3326.jpg){.thumbnail}

In Archiviazione esterna aggiungi un tipo di storage OpenStack Object Storage:

![](images/img_3329.jpg){.thumbnail}

Inserisci le informazioni disponibili nel tuo file OpenRC:

- l'ID del tuo utente Horizon, corrispondente al campo OS_USERNAME nel file OpenRC.
- il nome del container che che hai creato per Owncloud.
- il nome della localizzazione del tuo container, corrispondente al campo OS_REGION_NAME.
- il nome del titolare, corrispondente al campo OS_TENANT_NAME.
- la password del tuo utente Horizon.
- il nome del servizio, corrispondente a swift.
- l'indirizzo dell'endpoint, corrispondente al campo OS_AUTH_URL cioè https://auth.cloud.ovh.net/v3


La chiave API e il Tempo massimo di attesa sono facoltativi.

## Importante:
Il container che hai creato dovrà essere interamente dedicato a OwnCloud perché l'applicazione utilizzerà metadati specifici sul tuo container.
Una volta inserite tutte le informazioni e verificata la loro correttezza, il riquadro rosso davanti al nome della tua cartella diventerà verde e sarà disponibile nella sezione Storage Esterno della tua homepage:

![](images/img_3330.jpg){.thumbnail}


##
[Ritorna all'indice delle guide Cloud]({legacy}1785)
