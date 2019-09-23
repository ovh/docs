---
title: Prepara il tuo ambiente di sviluppo per utilizzare l’API OpenStack
excerpt: Prepara il tuo ambiente di sviluppo per utilizzare l'API OpenStack
slug: prepara_il_tuo_ambiente_di_sviluppo_per_utilizzare_lapi_openstack
legacy_guide_number: g1851
---


## 
Per gestire i tuoi servizi Public Cloud attraverso un terminale, puoi installare i client OpenStack in Python.
Questa operazione ti permette di gestire l'Object Storage e automatizzare le azioni che puoi effettuare utilizzando questi client.

Questa guida ti mostra la procedura da seguire per installare i client OpenStack.


## Con Debian

- Apri un terminale o una connessione SSH verso l'ambiente da configurare

- [Accedi come utente amministratore](https://www.ovh.it/publiccloud/guides/g1786.imposta_una_password_amministratore)

- Aggiorna la cache dei pacchetti:

```
root@vps187763:~# apt-get update
```


- Installa i client per Nova (compute) e Glance (image service)

```
root@vps187763:~# apt-get install python-glanceclient python-novaclient -y
```



A questo punto ti consigliamo di creare un altro utente, in modo da non utilizzare l'utente amministratore.

- Per consultare le guide d'utilizzo delle CLI di Nova e Glance, esegui questi comandi:

```
admin@vps187763:~$ nova help
```



```
admin@vps187763:~$ glance help
```


- Per consultare la documentazione relativa all'API OpenStack, clicca [qui](http://docs.openstack.org/cli-reference/content/).




## Con CentOS

- Apri un terminale o una connessione SSH verso l'ambiente da configurare

- [Accedi come utente amministratore](https://www.ovh.it/publiccloud/guides/g1786.imposta_una_password_amministratore)

- Aggiorna la cache dei pacchetti:

```
[root@vps187769 ~]# yum update -y
```


- Installa il rpm rdo-release:

```
[root@vps187769 ~]# yum install -y https://rdoproject.org/repos/rdo-release.rpm
```


- Installa Nova

```
[root@vps187769 ~]# yum install -y python-novaclient
```


- Installa Glance

```
[root@vps187769 ~]# yum install -y python-glanceclient
```



Fonte: [https://www.rdoproject.org/Quickstart](https://www.rdoproject.org/Quickstart)
A questo punto ti consigliamo di creare un altro utente, in modo da non utilizzare l'utente amministratore.

- Per consultare le guide d'utilizzo delle CLI di Nova e Glance, esegui questi comandi:

```
[root@vps187769 ~]# nova help
```



```
[root@vps187769 ~]# glance help
```


- Per consultare la documentazione relativa all'API OpenStack, clicca [qui](http://docs.openstack.org/cli-reference/content/)




## Con Windows

- Scarica e installa la versione [2.7.10 di Python](https://www.python.org/downloads/release/python-2710/)

- Installa PIP utilizzando easy_install:



![](images/img_3060.jpg){.thumbnail}

- Installa Swift



![](images/img_3061.jpg){.thumbnail}

- Per consultare le guide d'utilizzo delle CLI, utilizza questo comando:


```
C:\Windows\system32>swift --help
```





## 
[Ritorna all'indice delle guide Cloud]({legacy}1785)

