---
title: "Scopri l’interfaccia Public Cloud"
excerpt: "Visita guidata dell'interfaccia Public Cloud per scoprire le diverse sezioni"
slug: interfaccia-public-cloud
section: Per iniziare
order: 03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 06/12/2021**

## Obiettivo

Hai appena creato il tuo progetto Public Cloud e vuoi saperne di più sull'interfaccia utente all'interno dello Spazio Cliente OVHcloud.

**Scopri le sezioni principali dell'interfaccia Public Cloud nello Spazio Cliente OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.
- Aver creato un [primo progetto Public Cloud](https://docs.ovh.com/it/public-cloud/create_a_public_cloud_project/).

## Procedura

Una volta creato il primo progetto Public Cloud, verrai reindirizzato all'interfaccia Public Cloud principale.

![Public Cloud interface](images/main-interface.png){.thumbnail}

### Accesso alle informazioni del tuo account OVHcloud

I parametri del tuo account OVHcloud restano accessibili in qualsiasi momento, così come le notifiche o il cambio di lingua dallo Spazio Cliente.

![Public Cloud Interfaccia - menu account](images/account.png){.thumbnail}

### Il tuo progetto Public Cloud

Poiché è possibile utilizzare diversi progetti (in base alle quote assegnate), il nome e l'ID del progetto sono sempre mostrati, indipendentemente dalla schermata che visitate, per sapere su quale ambiente state agendo.

![Menù del progetto](images/project-menu.png){.thumbnail}

L'ID può essere necessario durante l'utilizzo della CLI, di alcune richieste di supporto o di altro tipo. Per copiarlo, clicca sull'icona a destra.

Per modificare il nome del progetto, accedi alla scheda `Impostazioni`{.action}. Inserisci un nuovo nome e clicca su `Aggiorna`{.action}.

![Rinomina un progetto Public Cloud](images/rename-project.png){.thumbnail}

### Il menu principale Public Cloud

![Interfaccia Public Cloud - menu principale](images/main-menu.png){.thumbnail}

|Sezione|Descrizione delle opzioni|
|---|---|
|**Compute**|Questa sezione permette di avviare le istanze, i server Cloud disponibili *on demand*.|
|**Storage**|In questa sezione, troverai diverse soluzioni di storage e database, ognuna corrispondente a un'esigenza e un utilizzo particolare.|
|**Network**|In questa sezione troverai la connessione delle tue risorse Public Cloud e il loro collegamento con altri prodotti OVHcloud.|
|**Containers and Orchestration**|Questa sezione propone diversi strumenti per automatizzare le architetture e ottenere una maggiore flessibilità.|
|**AI & Machine Learning**|In questa sezione trovi gli strumenti OVHcloud per l'intelligenza artificiale.|
|**Data & Analytics**|Questi servizi ti aiuteranno a risolvere le tue problematiche relative ai Big Data e Data Analytics.|

### Le scorciatoie

Il centro dello schermo vi propone scorciatoie che permettono di accedere rapidamente agli assistenti di configurazione e alle guide più utili.

![Public Cloud interface - menu abbreviati](images/shortcuts.png){.thumbnail}

#### Aiuti alla creazione di risorse

Per ogni risorsa che vuoi creare, sarai accompagnato da un assistente di configurazione che, step by step, ti permetterà di impostare la risorsa in base alle tue necessità.
<br>Nella maggior parte dei casi, sarà necessario scegliere la localizzazione della risorsa, il modello, alcuni parametri personalizzabili e, in alcuni casi, la modalità di fatturazione.

![Interfaccia Public Cloud - assistente di configurazione](images/wizard.png){.thumbnail}

### Strumenti di gestione

Nel tuo progetto Public Cloud sono disponibili diversi tool di gestione, in fondo alla barra dei menu di sinistra.

![Public Cloud Interfaccia - strumenti di gestione](images/management-tools.png){.thumbnail}

|Ingresso del menu|Descrizione|
|---|---|
|**Horizon**|È l'[interfaccia grafica](https://docs.ovh.com/it/public-cloud/horizon/) generalmente disponibile su OpenStack. e non viene modificata, permettendo agli utenti abituati a questa interfaccia di navigare facilmente.|
|**Users and Roles**|Permette di [creare utenti](https://docs.ovh.com/it/public-cloud/creation-and-deletion-of-openstack-user//) e attribuire loro un ruolo. Questi utenti permettono di accedere direttamente alle API o all'interfaccia Horizon. Ad esempio, puoi creare un utente per le tue operazioni di manutenzione classiche e un utente per i tuoi strumenti di automazione, come ad esempio Terraform.|
|**Quota and Regions**|Questo strumento ti permette di gestire le localizzazioni e i limiti di risorse disponibili sul tuo progetto.<br><br>**Quota**: In base a determinati criteri (numero di fatture già pagate, utilizzo di altri prodotti OVHcloud), il nostro sistema applica delle quote (limiti) al numero di risorse che puoi creare, per evitare problemi di mancato pagamento. Di default, il sistema aumenta automaticamente le proprie quote quando vengono soddisfatti determinati criteri. Tuttavia, è possibile [aumentare manualmente una quota](https://docs.ovh.com/it/public-cloud/increase-public-cloud-quota/#aumentare-la-quota-di-risorse-manualmente) tramite questo strumento.<br><br>**Localizzazioni**: Il Public Cloud è disponibile in diverse localizzazioni nel mondo. Inoltre, ogni localizzazione può includere diverse "regioni" (concetto specifico di OpenStack). Ad esempio, per un cliente europeo, la zona APAC (Asia Pacifica) è disattivata di default. Se questo è il tuo caso, puoi attivare altre regione da questo menu.|
|**SSH Keys**|Uno strumento che ti permette di [gestire le tue chiavi SSH](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/#step-1-crea-chiavi-ssh) in modo centralizzato.|
|**Billing Control**|Public Cloud che funziona in *pay as you go*, cioè il pagamento a consumo, le fatture vengono saldate alla fine del mese. In [questo menu](https://docs.ovh.com/it/public-cloud/analizza_i_tuoi_consumi_e_gestisci_la_tua_fatturazione/) è possibile monitorare i consumi correnti, consultare la previsione della prossima fattura e, ovviamente, consultare le fatture precedenti.|
|**Credit and Vouchers**|Questo menu ti permette di consultare il consumo di un *voucher*, aggiungerne una o [aggiungere credito](https://docs.ovh.com/it/public-cloud/aggiungi_credito_cloud_al_tuo_progetto/) direttamente al tuo progetto Public Cloud.|
|**Contacts and Rights**|Oltre a modificare il contatto tecnico o di fatturazione del tuo progetto, puoi [aggiungere altri contatti](https://docs.ovh.com/it/public-cloud/change_project_contacts/) (account OVHcloud) per gestire tecnicamente il tuo progetto. È inoltre possibile aggiungere utenti in consultazione solo *read-only*.|
|**Project settings**|Questo tool ti permette di configurare i parametri generali del progetto come nome, configurazione come "progetto predefinito dell'account", compatibilità HDS o [eliminare il tuo progetto Public Cloud](https://docs.ovh.com/it/public-cloud/delete_a_project/).|

## Per saperne di più

[Creare e connettersi a un’istanza Public Cloud](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.