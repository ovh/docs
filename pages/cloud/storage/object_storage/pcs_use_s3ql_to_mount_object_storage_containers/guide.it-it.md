---
title: Object Storage Swift - Configura un container di oggetti S3QL
excerpt: Configura un container di oggetti S3QL
slug: pcs/use-s3ql-to-mount-object-storage-containers
legacy_guide_number: g1908
section: OpenStack Swift Storage Class Specifics
order: 160
---


##
S3QL è un file system remoto che può essere configurato in locale per salvare i dati utilizzando soluzioni di archiviazione Cloud, come l'Object Storage OVH.
Le funzionalità disponibili sono numerose, ad esempio compressione dei dati, cifratura e snapshot del container, che rende questa soluzione particolarmente adatta alla creazione di backup.

Per maggiori informazioni, clicca [qui](http://www.rath.org/s3ql-docs/).

Questa guida ti mostra come configurare un container di oggetti come file system.


## Requisiti necessari

- [Crea un utente per accedere a Horizon]({legacy}1773)
- [Aggiungi storage al tuo Cloud](https://docs.ovh.com/it/public-cloud/aggiungi_storage_al_tuo_cloud/)



## Attenzione:
Utilizzare un container di oggetti come file system può causare un calo delle prestazioni delle tue operazioni.


## Crea il tuo file system


- Crea un file che contenga le informazioni di connessione:

```
admin@serveur1:~$ sudo vim s3qlcredentials.txt

[swift]
backend-login: TENANT_NAME:USERNAME
backend-password: PASSWORD
storage-url: swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
fs-passphrase: PASSPHRASE
```



Alcune informazioni, ad esempio il TENANT_NAME e l'USERNAME, sono disponibili nel tuo file OpenRC.
Per recuperarle, consulta questa guida:

- [Accesso e Sicurezza in Horizon]({legacy}1774)


Sostituisci gli argomenti REGION_NAME e CT_NAME con il nome e la localizzazione del tuo container di oggetti.


- Modifica i permessi di accesso al file di autenticazione:

```
admin@serveur1:~$ sudo chmod 600 s3qlcredentials.txt
```


- Formatta il container di oggetti:

```
admin@serveur1:~$ sudo mkfs.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME
```



Inserisci la passphrase che hai aggiunto nel tuo file di autenticazione.
Se non vuoi utilizzare una passphrase, elimina la riga "fs-passphrase: PASSPHRASE" dal tuo file di configurazione.


## Configura il tuo file system

- Crea il punto di mount

```
admin@serveur1:~$ sudo mkdir /mnt/container
```


- Configura il container di oggetti

```
admin@serveur1:~$ sudo mount.s3ql --backend-options domain=default --authfile s3qlcredentials.txt swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME /mnt/container/
```


- Verifica il corretto montaggio

```
admin@serveur1:~$ sudo df -h

Filesystem Size Used Avail Use% Mounted on
/dev/vda1 9.8G 927M 8.5G 10% /
udev 10M 0 10M 0% /dev
tmpfs 393M 5.2M 388M 2% /run
tmpfs 982M 0 982M 0% /dev/shm
tmpfs 5.0M 0 5.0M 0% /run/lock
tmpfs 982M 0 982M 0% /sys/fs/cgroup
swiftks://auth.cloud.ovh.net/REGION_NAME:CT_NAME 1.0T 0 1.0T 0% /mnt/container
```



Non è possibile utilizzare S3QL in modalità "offline".
Ti consigliamo di non effettuare una configurazione permanente utilizzando il file /etc/fstab, è preferibile utilizzare uno script da eseguire in automatico all'avvio del tuo server.
