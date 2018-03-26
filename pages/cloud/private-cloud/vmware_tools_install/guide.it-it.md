---
title: Installare gli strumenti VMWare
excerpt: ''
slug: installare_gli_strumenti_vmware
legacy_guide_number: g621
---


## 
È necessario utilizzare il client vSphere, o accedervi utilizzando il proprio client locale, oppure utilizzando la connessione RDP che ti abbiamo fornito al momento dell'attivazione del tuo PCC.


## 
Monta il disco di strumenti VMware  dalla console della tua VM, validando l'opzione "Installa / Aggiorna strumenti VMware":

![](images/img_142.jpg){.thumbnail}
Quindi si deve montare il volume attivandolo con il comando:


```
# mount /dev/cdrom /mnt
```


Quindi, decomprimi l'archivio degli strumenti. Qui, lo faremo da /home:



```
#cd /home (par exemple)
#tar xvf /mnt/VmareTools-8.3.2-257589.tar.gz
#cd /home/VMWare-tools-distrib
#./VMWare-install.pl default
```


Una volta ultimata l'installazione, il disco degli strumenti sarà automaticamente rimosso dal sistema. #SEZIONE Installare gli strumenti VMware su Linux.


## 
Una volta che hai montato il volume e validato l'opzione "Installa/Aggiorna strumenti VMware", ritroverai il disco nella sezione "stazione di lavoro" della tua VM. Fai doppio clic su di esso per avviare l'installazione degli strumenti:

![](images/img_143.jpg){.thumbnail}
La procedura guidata di installazione inizierà a chiederti di accettare la licenza e il tipo di installazione scelta (si consiglia l'installazione completa).
Una volta terminata l'installazione, ti chiederà di riavviare la macchina per tenere conto dei cambiamenti.

