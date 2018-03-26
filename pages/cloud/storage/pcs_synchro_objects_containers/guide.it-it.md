---
title: Sincronizza container di oggetti
excerpt: Sincronizza container di oggetti
slug: sincronizza_container_di_oggetti
legacy_guide_number: g1919
section: Object Storage
---


## 
Se hai bisogno di spostare i tuoi oggetti da un datacenter a un altro, o da un progetto a un altro, la sincronizzazione dei container di oggetti è la soluzione migliore per evitare disservizi durante il trasferimento.

Questa guida ti mostra come effettuare questa operazione.


## Requisiti necessari

- [Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack]({legacy}1851) con il client Swift
- [Imposta le variabili d'ambiente OpenStack]({legacy}1852)
- 2 container di oggetti in 2 diversi datacenter




## Crea la chiave di sincronizzazione
Per sincronizzare i container è necessario creare una chiave condivisa, da configurare in seguito su tutti i container di oggetti:


- Crea la chiave:


```
root@serveur-1:~$ sharedKey=$(openssl rand -base64 32)
```





## Configura il container di destinazione
Configura la chiave sul container da sincronizzare. Nel nostro caso, si trova a BHS.


- Verifica la Region impostata nelle variabili d'ambiente:


```
root@serveur-1:~$ env | grep OS_REGION

OS_REGION_NAME=BHS1
```


- Configura la chiave sul container di destinazione:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerBHS
```



Per verificare che sia configurato correttamente, utilizza questo comando:


```
root@serveur-1:~$ swift stat containerBHS
Account: AUTH_b3e269xxxxxxxxxxxxxxxxxxxx2b0ba29
Container: containerBHS
Objects: 0
Bytes: 0
Read ACL:
Write ACL:
Sync To:
Sync Key: 4cA5j5LyaaG2ws32d1fsdQSxnvIJv+y2qFnbnm6Kw=
Meta Access-Control-Allow-Origin: https://www.ovh.com
Accept-Ranges: bytes
X-Storage-Policy: Policy-0
Connection: close
X-Timestamp: 1444812373.28095
X-Trans-Id: B2210C05:895E_9E45A961:01BB_561E52E1_16A3:5298
Content-Type: text/plain; charset=utf-8
```



- Recupera l'indirizzo del container di destinazione, ti servirà in un secondo momento per configurarlo sul container sorgente:


```
root@serveur-1:~$ destContainer=$(swift --debug stat containerBHS 2>&1 | grep 'curl -i.*storage' | awk '{ print $4 }')
```





## Configura il container sorgente

- Modifica la Region nelle variabili d'ambiente:


```
root@serveur-1:~$ export OS_REGION_NAME=GRA1
```


- Configura la chiave nel container sorgente:


```
root@serveur-1:~$ swift post --sync-key "$sharedKey" containerGRA
```


- Configura il destinatario nel container d'origine:


```
root@serveur-1:~$ swift post --sync-to "$destContainer" containerGRA
```



Per verificare che sia configurato correttamente, utilizza questo comando:


```
root@serveur-1:~$ swift stat containerGRA
Account: AUTH_b3e269f057d14af594542d6312b0ba29
Container: containerGRA
Objects: 3
Bytes: 15
Read ACL:
Write ACL:
Sync To: https://storage.bhs1.cloud.ovh.net/v1/AUTH_b3e269f057d14af594542d6312b0ba29/containerBHS
Sync Key: 4cA5j5LyaaG2wU4lDYnDmEwQSxnvIJv+y2qFnbnm6Kw=
Accept-Ranges: bytes
Connection: close
X-Timestamp: 1444813114.55493
X-Trans-Id: B2210C05:879E_052711B1:01BB_561E559B_24AE:6B1B
X-Storage-Policy: Policy-0
Content-Type: text/plain; charset=utf-8
```




## Verifica la sincronizzazione
Dopo pochi minuti (in base al numero e alla dimensione dei file da inviare), potrai verificare se la sincronizzazione è avvenuta correttamente. Per farlo, è sufficiente visualizzare l'elenco dei file presenti in ciascuno dei container.


- Visualizza l'elenco dei file presenti nel container sorgente:


```
root@serveur-1:~$ swift list containerGRA
test1.txt
test2.txt
test3.txt
```


- Visualizza l'elenco dei file presenti nel container di destinazione:


```
root@serveur-1:~$ swift list containerBHS
test1.txt
test2.txt
test3.txt
```



Puoi consultare questa guida anche per trasferire gli oggetti da RunAbove al Public Cloud OVH.


## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

