---
title: Come utilizzare l’API Swift
excerpt: Come utilizzare l'API Swift
slug: come_utilizzare_lapi_swift
legacy_guide_number: g1916
---


## 
Se vuoi automatizzare le tue operazioni sul Public Cloud, puoi utilizzare le API di OpenStack per creare diversi script.
Il client Swift di OpenStack ti consente di gestire ed eseguire operazioni sui tuoi container e i tuoi oggetti.

Ad esempio, puoi salvare i tuoi file inviandoli regolarmente verso i tuoi container.

Questa guida ti mostra come utilizzare le API OpenStack per gestire i tuoi container di oggetti con il client Python Swfit.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851)
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)




## Documentazione Swift
Per visualizzare la lista dei comandi disponibili, consulta la documentazione del client:


```
admin@server-1:~$ swift --help
```


Ecco i comandi principali:

|delete|Elimina un container o gli oggetti presenti in un container|
|---|
|delete|Elimina un container o gli oggetti presenti in un container|
|download|Scarica i file di un container|
|list|Mostra la lista dei container di un account o gli oggetti di un container|
|post|Aggiorna i metadati per l'account, il container o l'oggetto. Se il container non esiste, lo crea|
|stat|Visualizza le informazioni dell'account, del container o dell'oggetto|
|upload|Carica file o cartelle nel container|
|capabilities|Elenca i container presenti nel tuo ambiente Swift e la loro quota|
|tempurl|Crea un URL temporaneo|


Se hai bisogno di aiuto per utilizzare un comando specifico, aggiungi "--help" alla fine:


```
admin@server-1:~$ swift post --help

Updates meta information for the account, container, or object.
If the container is not found, it will be created automatically.

Positional arguments:
[container] Name of container to post to.
[object] Name of object to post. Specify multiple times
for multiple objects.
[...]
```


La documentazione del client Swift è disponibile anche sul [sito Openstack](http://docs.openstack.org/cli-reference/content/swiftclient_commands.html)


## Crea un container di oggetti pubblico

- Crea il container "container1"


```
admin@server-1:~$ swift post container1
```


- Definisci i permessi di accesso per rendere pubblico il tuo container 


```
admin@server-1:~$ swift post --header "X-Container-Read: .r:*" container1
```


- Verifica la configurazione del container


```
admin@server-1:~$ swift stat container1

Account: AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29
Container: container1
Objects: 0
Bytes: 0
Read ACL: .r:*
Write ACL:
Sync To:
Sync Key:
Accept-Ranges: bytes
X-Trans-Id: B2210C05:8D93_052711A1:01BB_561CC9DF_1B305:30D7
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444726875.27475
Content-Type: text/plain; charset=utf-8
```





## Carica file sul tuo container

- Invia il contenuto di una cartella locale verso un container


```
admin@server-1:~$ swift upload container1 images/

images/OVHlogo.png
images/OVHSummitKeynote.jpg
```



Se non invii un singolo file ma una cartella completa, viene aggiunto automaticamente un prefisso ai tuoi file.

- Visualizza la lista dei file del container


```
admin@server-1:~$ swift list container1

images/OVHSummitKeynote.jpg
images/OVHlogo.png
text1.txt
text2.txt
text3.txt
```



Per visualizzare i file con un prefisso specifico, utilizza l'argomento "--prefix":


```
admin@server-1:~$ swift list container1 --prefix images

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```


Se il container è stato configurato come pubblico, è possibile accedere al file utilizzando un URL:

```
https://storage.gra1.cloud.ovh.net/v1/AUTH_b3e26xxxxxxxxxxxxxxxxxxxb0ba29/container1/images/OVHlogo.png
```


Questo URL è formato da un endpoint, che puoi recuperare nel menu [Accesso e Sicurezza in Horizon]({legacy}1774), dal nome del tuo container e dal nome del tuo oggetto (prefisso incluso).


## Scarica i tuoi file

- Scarica un file:


```
admin@server-1:~$ swift download container1 text1.txt

text1.txt [auth 0.328s, headers 0.452s, total 0.453s, 0.000 MB/s]
```



Per scaricare più file con lo stesso prefisso, utilizza questo comando:


```
admin@server-1:~$ swift download container1 --prefix images

images/OVHlogo.png [auth 0.383s, headers 0.520s, total 0.522s, 0.135 MB/s]
images/OVHSummitKeynote.jpg [auth 0.371s, headers 0.514s, total 0.559s, 2.657 MB/s]
```




## Elimina i tuoi container o i tuoi oggetti

- Elimina un file:


```
admin@server-1:~$ swift delete container1 text1.txt

text1.txt
```



Come per il download, puoi eliminare più file con lo stesso prefisso utilizzando questo comando:

```
admin@server-1:~$ swift delete container1 images/*

images/OVHSummitKeynote.jpg
images/OVHlogo.png
```



- Elimina un container


```
admin@server-1:~$ swift delete container1

text2.txt
text3.txt
```



Questa operazione comporta la cancellazione di tutti i file presenti nel container.


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

