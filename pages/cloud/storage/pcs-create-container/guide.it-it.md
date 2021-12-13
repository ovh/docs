---
title: Crea un container Object Storage
slug: pcs/creazione-container
excerpt: Come creare i container Object Storage dallo Spazio Cliente OVHcloud
section: Object Storage Standard (Swift)
order: 110
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 27/10/2021**

## Obiettivo

L'offerta Object Storage Public Cloud propone una soluzione di storage illimitata con fatturazione semplice e adattata alle tue necessità. Esistono numerosi tipi di container di oggetti:

- per l'hosting statico (sito web statico);
- per l'hosting privato (esempio: memorizzazione di dati personali);
- per l'hosting pubblico (per archiviare tutto ciò che è accessibile al pubblico);
- per l'archiviazione a freddo (archiviazione).

Il primo step è la creazione di un container che raggrupperà i tuoi file. 

**Questa guida ti mostra come crearlo dallo Spazio Cliente OVHcloud e dall'interfaccia Horizon d'Openstack.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

Se utilizzi Horizon:

- Aver creato un [utente OpenStack](https://docs.ovh.com/it/public-cloud/creation-and-deletion-of-openstack-user/)

## Procedura

### Crea un container Object Storage dallo Spazio Cliente OVHcloud

Accedi al tuo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, accedi alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud. Clicca su `Object Storage`{.action} nella barra di navigazione di sinistra su `Storage`.

Clicca su `Crea un container di oggetti`{.action}.

Per il tuo primo container:

![pcs dashboard](images/create-container-20211005102334181.png)

Se hai già creato container:

![pcs dashboard](images/create-container-20211005115040834.png)

Seleziona la tua soluzione e clicca su `Continua`{.action}:

![select your soluzione](images/create-container-20211005110710249.png)

Seleziona la Region del container e clicca su `Continua`{.action}:

![select a region](images/create-container-20211005110859551.png)

Seleziona il tipo di container e clicca su `Continua`{.action}:

![select a type of container](images/create-container-20211005111542718.png)

Assegna un nome al container e clicca su `Aggiungi il container`{.action}:

> [!warning]
>
> Per collegare il container a un dominio, il nome del container di dati non deve contenere questi caratteri: 
>
> - [ . ] 
> - [ _ ]
> - e non dovete utilizzare maiuscole.
>
> Per maggiori informazioni, consulta la guida [Associare un container a un dominio](https://docs.ovh.com/it/storage/configura_un_dominio_su_un_container_del_tuo_object_storage/).
>

![container name](images/create-container-20211005111805966.png)

Il tuo container è stato creato:

![container created](images/create-container-20211005112013807.png)

### Crea un container Object Storage con Horizon

> [!primary]
>
> Non è possibile creare un container Public Cloud Archive da Horizon
>

Accedi al tuo [spazio Horizon](https://horizon.cloud.ovh.net){.external}:

![orizzonte logistico](images/create-container-20211005155245752.png)

Sviluppa il menu `Object Store`{.action}, clicca su `Containers`{.action} e poi su `+ Container`{.action}

![Horizon containers](images/create-container-20211005155704887.png)

Assegna un nome al tuo container.

  > [!warning]
  >
  > Per collegare il container a un dominio, il nome del container di dati non deve contenere questi caratteri:
  >
  > - [ . ]
  > - [ _ ]
  > - Non è necessario utilizzare maiuscole
  >
  > Per maggiori informazioni, consulta la guida [Associare un container a un dominio](https://docs.ovh.com/it/storage/configura_un_dominio_su_un_container_del_tuo_object_storage/).
  >

Seleziona la politica di accesso del container e clicca su `Next`{.action}

![horizon create container](images/create-container-20211005155824902.png)

Il tuo container è stato creato.

![horizon container created](images/create-container-20211005155936971.png)

Puoi visualizzarlo anche nello Spazio Cliente OVHcloud:

![pcs dashboard](images/create-container-20211005160503200.png)

## Per saperne di più

Contatta la nostra Community di utenti all'indirizzo [https://community.ovh.com](https://community.ovh.com/en/).
