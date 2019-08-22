---
title: Configura un gruppo di sicurezza
excerpt: Configura un gruppo di sicurezza
slug: configura_un_gruppo_di_sicurezza
legacy_guide_number: g1925
---


## 
Per garantire una maggiore sicurezza, è possibile configurare le regole che definiscono gli accessi alle tue istanze.
Impostare i gruppi di sicurezza ti permette di autorizzare o bloccare alcune connessioni in entrata o in uscita, ad esempio il traffico proveniente da indirizzi IP specifici o da istanze configurate su determinati gruppi di sicurezza.

Questa guida ti mostra come proteggere le tue istanze effettuando questa operazione.


## Requisiti necessari

- [Crea un utente per accedere a Horizon]({legacy}1773)
- Accesso all'interfaccia Horizon




## Crea il gruppo di sicurezza

- Clicca su "Access & Security" nel menu a sinistra e poi sul tab "Security Groups"



![](images/img_2959.jpg){.thumbnail}
Nel nostro esempio è già presente il gruppo di sicurezza "default", che autorizza il traffico in entrata e in uscita.

- Clicca sul tasto "Create Security Group"



![](images/img_2960.jpg){.thumbnail}

- Aggiungi il nome e la descrizione del gruppo e poi clicca su "Create Security Group"


Clicca su "Manage Rules" per visualizzare le regole create di default:

![](images/img_2961.jpg){.thumbnail}
Per impostazione predefinita, il nuovo gruppo di sicurezza creato autorizza solo il traffico in uscita.


## Configura un'istanza con questo gruppo di sicurezza

- Clicca su "Instances" nel menu a sinistra
- Crea una nuova istanza cliccando su "Launch Instance"
- Seleziona "Access & Security", poi il nuovo gruppo di sicurezza e infine clicca su "Launch"



![](images/img_2962.jpg){.thumbnail}
Per modificare la configurazione dei gruppi di sicurezza delle istanze già create, seleziona l'opzione "Edit Security Group" nella colonna "Actions".

![](images/img_2964.jpg){.thumbnail}


## Configura il gruppo di sicurezza
Nel nostro esempio, per impostazione predefinita, il gruppo di sicurezza creato autorizza solo il traffico in uscita:


```
root@serveur:~$ ssh admin@149.xxx.xxx.177

ssh: connect to host 149.xxx.xxx.177 port 22: Connection timed out
```



- Clicca su "Access & Security" nel menu a sinistra e poi sul tab "Security Groups"
- Clicca su "Manage Rules" e poi su "Add Rule"



![](images/img_2963.jpg){.thumbnail}
Una volta aggiunta la regola, attendi qualche minuto che venga applicata.

![](images/img_2965.jpg){.thumbnail}

```
root@serveur:~$ ssh admin@149.xxx.xxx.177

Last login: Tue Oct 13 13:56:30 2015 from proxy-109-190-254-35.ovh.net
admin@serveur1:~$
```




## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

