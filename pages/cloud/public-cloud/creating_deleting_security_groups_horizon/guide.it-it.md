---
title: 'Creare e rimuovere un gruppo di sicurezza in Horizon'
excerpt: 'Scopri come creare o rimuovere un gruppo di sicurezza attraverso Horizon'
slug: creare-rimuovere-gruppo-sicurezza-in-horizon
section: 'Dall’interfaccia Horizon'
---

**Ultimo aggiornamento: 24/08/2018**

## Obiettivo

I gruppi di sicurezza sono insiemi di regole di filtro degli indirizzi IP e delle porte, che si applicano a tutte le istanze di un determinato progetto e definiscono l’accesso rete all’istanza. Le regole del gruppo sono specifiche per ogni progetto. I membri possono modificare le regole di default per il loro gruppo e aggiungere nuovi insiemi di regole. 

Tutti i progetti dispongono di un gruppo di sicurezza di default per ogni regione, utilizzato per ciascuna istanza che non ha nessun altro gruppo di sicurezza definito. In OVH, le impostazioni di default del gruppo di sicurezza autorizzano il traffico dell’istanza in uscita e in entrata. 

**Questa guida ti mostra come creare e rimuovere un gruppo di sicurezza tramite l’interfaccia Horizon.**

## Prerequisiti

- Avere accesso all'[interfaccia Horizon](https://horizon.cloud.ovh.net/){.external}


## Procedura

Collegati all’interfaccia [Horizon](https://horizon.cloud.ovh.net/){.external} poi scegli la regione nella quale vuoi creare un gruppo di sicurezza nel menu sulla parte superiore dello schermo: 

![Scelta della regione](images/1_H_sec_groups_region_choosing.png){.thumbnail}

Il nuovo gruppo di sicurezza verrà creato nella regione selezionata. Se desideri usare un gruppo di sicurezza in diverse regioni, è necessario definirlo per ciascuna di esse. 

Clicca sul pulsante `Network`{.action}, poi `Security Groups`{.action}: 

![Gruppi di sicurezza](images/2_H_crete_sec_group.png){.thumbnail}

Per creare un gruppo di sicurezza, clicca sul pulsante `+ Create Security Group`{.action}, assegna un nome al gruppo e aggiungi una descrizione (facoltativa): 

![Creazione di gruppi di sicurezza](images/3_H_new_sec_gr_name.png){.thumbnail}

Quindi conferma cliccando sul pulsante `Create Security Group`{.action}.
Per rimuovere un gruppo di sicurezza, è sufficiente selezionarlo con una spunta e cliccare su `Delete Security Group`{.action}. 


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.