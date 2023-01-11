---
title: Object Storage Swift - Come utilizzare l’API Swift
excerpt: Come utilizzare l'API Swift
slug: pcs/getting-started-with-the-swift-api
legacy_guide_number: g1916
section: OpenStack Swift Storage Class Specifics
order: 010
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 25/06/2021**

## Obiettivo

Utilizza l'API OpenStack per generare diversi script per automatizzare le tue azioni sulle tue istanze Public Cloud.

Lo *swiftclient* OpenStack permette di interagire con i tuoi container e oggetti e di gestirli. Ad esempio, è possibile inviare file in modo regolare verso i container per salvarli.

**Questa guida ti mostra come utilizzare l'API OpenStack per gestire i tuoi container di oggetti con l'aiuto di *python-swiftclient*.**

## Prerequisiti

- [Preparare l'ambiente di sviluppo per utilizzare l'API OpenStack](https://docs.ovh.com/it/public-cloud/prepare_the_environment_for_using_the_openstack_api/) installando python-swiftclient
- [Impostare le variabili d'ambiente OpenStack](https://docs.ovh.com/it/public-cloud/set-openstack-environment-variables/)

## Procedura

> [!primary]
>
Si ricorda che, dopo aver applicato i requisiti di cui sopra, le seguenti istruzioni riguardano esclusivamente l'interfaccia di linea di comando di una distribuzione GNU/Linux.
>

### Documentazione Swift

Nella documentazione del cliente è possibile recuperare la lista dei possibili ordini:

```
admin@server-1:~$ swift --help
```

Ecco la lista dei comandi principali:

|Comando|Descrizione|
|---|---|
|**delete**|Elimina un container o gli oggetti presenti in un container|
|**download**|Scarica oggetti da container|
|**list**|Ripristina i container di un account o gli oggetti di un container|
|**post**|Aggiorna i metadati dell'account, del container o dell'oggetto. Se il container non è raggiungibile, verrà creato automaticamente.|
|**stat**|Indica le informazioni relative all'account, al container o all'oggetto.|
|**upload**|Scarica i file e le directory specificati verso il container dato.|
|**capacità**|Estrai la capacità del proxy.|
|**tempurl**|Genera un URL temporaneo per un oggetto Swift.|

Per maggiori informazioni su uno specifico ordine Swift, aggiungi `--help` alla fine:

```
admin@server-1:~$ swift post --help

Update meta information for the account, container, oro object.
If the container is not found, it will be created automatically.

Positional argomentazione:
[container] Name of container to post to.
[object] Name of object to post. Specify multitime
per diversi obiettivi.
[...]
```

È inoltre possibile consultare la documentazione Swift disponibile sul [sito OpenStack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html).

### Crea un container di oggetti pubblici

- Crea il container "container1":

```
admin@server-1:~$ swift post container1
```

- Configura i diritti di accesso per rendere pubblico il container:

```
admin@server-1:~$ swift post --header "X-Container-Read: .r:*" container1
```

- Verifica la configurazione del container:

```
admin@server-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Obiettivi: 0
Byte: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connessione: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```

### Invio di file nel tuo container

- Seleziona il contenuto di una cartella locale in un container:

```
admin@server-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```

Se invii una cartella intera al posto di un file, verrà aggiunto automaticamente un prefisso.

- Lista i file di un container:

```
admin@server-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```

Puoi visualizzare i file con un prefisso specifico grazie all'argomento `--prefix`:

```
admin@server-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

Se il container è configurato come pubblico, puoi accedere al file utilizzando un URL:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```

Questo URL è composto da un punto terminale, disponibile dall'[interfaccia Horizon](https://docs.ovh.com/it/public-cloud/access_and_security_in_horizon/), dal nome del container e dal nome del tuo oggetto (incluso il prefisso).

### Scaricamento di file

- Scarica un file:

```
admin@server-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```

Puoi scaricare più file con lo stesso prefisso utilizzando questo comando:

```
admin@server-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```

### Eliminazione di container o oggetti

- Elimina un file:

```
admin@server-1:~$ swift delete container1 text1.txt

text1.txt
```

Come per il download, è possibile eliminare diversi file con lo stesso prefisso utilizzando il seguente comando:

```
admin@server-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```

- Elimina un container:

```
admin@server-1:~$ swift delete container1

text2.txt
text3.txt
```

Questa operazione comporta la cancellazione di tutti i file del container.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
