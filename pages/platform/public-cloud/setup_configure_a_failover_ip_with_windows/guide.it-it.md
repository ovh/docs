---
title: Configura un IP Failover su Windows
excerpt: Configura un IP Failover su Windows
slug: configura_un_ip_failover_su_windows
legacy_guide_number: g2046
---


## 
Per configurare un indirizzo IP Failover sulle tue istanze Public Cloud, ad esempio se sulla tua istanza ospiti più siti o progetti internazionali, acquista un indirizzo IP Failover o importalo da un altro servizio OVH.

Gli IP Failover non vengono configurati automaticamente.

Questa guida ti mostra come configurare l'interfaccia di rete della tua istanza per poter aggiungere un indirizzo IP Failover.


## Requisiti necessari

- [Crea un'istanza dallo Spazio Cliente OVH]({legacy}1775)
- Un indirizzo IP Failover




## Configura l'interfaccia
Con Windows non è possibile configurare automaticamente un indirizzo IP Failover in aggiunta alla configurazione dell'indirizzo IP principale in DHCP.
Per farlo, è necessario riconfigurare manualmente la tua scheda di rete utilizzando un IP statico.


- Per visualizzare le informazioni relative alla configurazione di rete utilizza il comando "ipconfig":



![](images/img_3609.jpg){.thumbnail}

- Accedi al Pannello di controllo e poi al Centro connessioni di rete e condivisione:



![](images/img_3602.jpg){.thumbnail}

- Modifica le impostazioni della scheda:



![](images/img_3603.jpg){.thumbnail}

- Clicca su "Prorietà":



![](images/img_3604.jpg){.thumbnail}

- Accedi alla configurazione del protocollo TCP/IPv4



![](images/img_3605.jpg){.thumbnail}

- Inserisci manualmente la configurazione utilizzando i parametri ottenuti con il comando ipconfig e poi clicca su "Avanzate:



![](images/img_3606.jpg){.thumbnail}

- Aggiungi il tuo IP Failover in questo modo:



![](images/img_3607.jpg){.thumbnail}


## 

- [Trasferisci un IP FailOver]({legacy}1890)




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

