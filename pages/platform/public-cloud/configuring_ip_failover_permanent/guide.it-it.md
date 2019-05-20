---
title: Configura un IP Failover permanente
excerpt: Configura un IP Failover permanente
slug: configura_un_ip_failover_permanente
legacy_guide_number: g1885
---


## 
Per non configurare il tuo IP Failover ogni volta che riavvi il tuo server, puoi impostarlo come permenente.

Questa guida ti mostra come eseguire questa operazione.


## Requisiti necessari

- Possedere un'istanza Public Cloud
- Aver importato un IP Failover verso il progetto Public Cloud
- Essere connesso all'istanza via SSH




## Su Debian/Ubuntu

- Modifica il file di configurazione utilizzando questi parametri:

```
vi /etc/network/interfaces
```


- Alla fine del file, aggiungi:

```
auto ethX:Y
iface ethX:Y inet static
address xxx.xxx.xxx.xxx
netmask 255.255.255.255
broadcast xxx.xxx.xxx.xxx
```



|Parametri|Valori|
|---|---|
|X|numero dell'interfaccia principale (in genere eth0)|
|xxx.xxx.xxx.xxx|IP Failover da configurare|
|Y|numero dell'alias (parti da 0, poi 1, ecc... in base al numero di IP da configurare)|


Se devi aggiungere più IP, utilizza sempre gli stessi parametri incrementando il valore di Y (numero dell'alias).
Riavvia i servizi di rete utilizzando il comando:

```
service networking restart
```




## Su CentOS/Fedora

- Modifica il file di configurazione utilizzando questi parametri:

```
vi /etc/sysconfig/network-scripts/ifcfg-ethX:Y
```



|Parametri|Valori|
|---|---|
|X|numero dell'interfaccia principale (in genere eth0)|
|Y|numero dell'alias (parti da 0, poi 1, ecc... in base al numero di IP da configurare)|



- Aggiungi nel file:

```
DEVICE="ethX:Y"
BOOTPROTO=static
IPADDR="xxx.xxx.xxx.xxx"
NETMASK="255.255.255.255"
BROADCAST="xxx.xxx.xxx.xxx"
ONBOOT=yes
```


- Riavvia i servizi di rete utilizzando il comando:

```
ifup ethX:Y
```





## Su Windows
Con Windows non è possibile configurare automaticamente un indirizzo IP Failover in aggiunta alla configurazione dell'indirizzo IP principale in DHCP.
Per farlo, è necessario riconfigurare manualmente la tua scheda di rete utilizzando un IP statico.


- Per visualizzare le informazioni relative alla configurazione di rete utilizza il comando "ipconfig":



![](images/img_3545.jpg){.thumbnail}

- Accedi al Pannello di controllo e poi al Centro connessioni di rete e condivisione:



![](images/img_3543.jpg){.thumbnail}
]Modifica le impostazioni della scheda:

![](images/img_3544.jpg){.thumbnail}

- Clicca su "Prorietà":



![](images/img_3546.jpg){.thumbnail}

- Accedi alla configurazione del protocollo TCP/IPv4



![](images/img_3547.jpg){.thumbnail}

- Inserisci manualmente la configurazione utilizzando i parametri ottenuti con il comando ipconfig e poi clicca su "Avanzate:



![](images/img_3548.jpg){.thumbnail}

- Aggiungi il tuo IP Failover in questo modo:



![](images/img_3551.jpg){.thumbnail}


## 

- [Trasferisci il tuo IP Failover]({legacy}1890)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

