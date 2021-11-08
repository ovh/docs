---
title: Ottimizza il trasferimento dei tuoi file verso l’Object Storage
excerpt: Ottimizza il trasferimento dei tuoi file verso l'Object Storage
slug: ottimizza_il_trasferimento_dei_tuoi_file_verso_lobject_storage
section: Object Storage Standard (Swift)
legacy_guide_number: g1951
---


##
Per inviare file di grandi dimensioni (ad esempio, video o immagini disco) verso l'Object Storage, è possibile utilizzare il client OpenStack Swift per segmentare questi file e ottimizzarne il trasferimento.

Questa guida ti mostra come ottimizzare il trasferimento dei tuoi file verso l'Object Storage utilizzando questa funzionalità.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851) con il client python-swiftclient
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)




##
OpenStack Swift ti permette di archiviare i tuoi file senza limiti di dimensione, dividendoli in più segmenti.

Quando utilizzi un client Swift per l'invio di file, il nodo di storage è determinato dal proxy Swift tramite un hashing del nome dell'oggetto.
Per questo motivo, è molto probabile che i segmenti vengano salvati in diversi nodi dello storage consentendo la scrittura dei tuoi dati a una velocità superiore.

Ad esempio, è possibile inviare un file da 10 GB in 100 segmenti da 100 MB:


```
root@server:~$ swift upload --segment-size 104857600 --segment-threads 100
container_name 10Gio.dat
```


|Argomento|Descrizione|
|---|---|
|--segment-size|Dimensione dei segmenti (byte)|
|--segment-threads|Numero di segmenti|


Per verificare la velocità di invio, utilizza programmi come iftop.


##
[Ritorna all'indice delle guide Cloud]({legacy}1785)
