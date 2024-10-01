---
title: Object Storage Swift - Crea un container Object Storage
excerpt: Come creare i container Object Storage dallo Spazio Cliente OVHcloud
updated: 2021-10-27
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

L'offerta Object Storage Public Cloud propone una soluzione di storage illimitata con fatturazione semplice e adattata alle tue necessità. Esistono numerosi tipi di container di oggetti:

- per l'hosting statico (sito web statico);
- per l'hosting privato (esempio: memorizzazione di dati personali);
- per l'hosting pubblico (per archiviare tutto ciò che è accessibile al pubblico);
- per l'archiviazione a freddo (archiviazione).

Il primo step è la creazione di un container che raggrupperà i tuoi file.

**Questa guida ti mostra come crearlo dallo Spazio Cliente OVHcloud e dall'interfaccia Horizon d'Openstack.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}

Se utilizzi Horizon:

- Aver creato un [utente OpenStack](/pages/public_cloud/compute/create_and_delete_a_user)

## Procedura

### Crea un container Object Storage dallo Spazio Cliente OVHcloud <a name="controlpanel"></a>

Accedi al tuo [Spazio Cliente](/links/manager){.external}, accedi alla sezione `Public Cloud`{.action} e seleziona il tuo progetto Public Cloud. Clicca su `Object Storage`{.action} nella barra di navigazione di sinistra su `Storage`.

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
> Per maggiori informazioni, consulta la guida [Associare un container a un dominio](/pages/storage_and_backup/object_storage/pcs_link_domain).
>

![container name](images/create-container-20211005111805966.png)

Il tuo container è stato creato:

![container created](images/create-container-20211005112013807.png)

### Crea un container Object Storage con Horizon <a name="horizon"></a>

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
> Per maggiori informazioni, consulta la guida [Associare un container a un dominio](/pages/storage_and_backup/object_storage/pcs_link_domain).
>

Seleziona la politica di accesso del container e clicca su `Next`{.action}

![horizon create container](images/create-container-20211005155824902.png)

Il tuo container è stato creato.

![horizon container created](images/create-container-20211005155936971.png)

Puoi visualizzarlo anche nello Spazio Cliente OVHcloud:

![pcs dashboard](images/create-container-20211005160503200.png)

## Per saperne di più

Se avete bisogno di formazione o di assistenza tecnica per implementare le nostre soluzioni, contattate il vostro rappresentante o cliccate su [questo link](https://www.ovhcloud.com/it/professional-services/) per ottenere un preventivo e richiedere un'analisi personalizzata del vostro progetto da parte dei nostri esperti del team Professional Services.

Contatta la nostra Community di utenti all'indirizzo [https://community.ovh.com](https://community.ovh.com/en/).
