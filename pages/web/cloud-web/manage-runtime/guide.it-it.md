---
title: 'Gestire i motori di esecuzione di un hosting Cloud Web'
slug: gestire-motori-esecuzione-hosting-cloud-web
excerpt: 'Come scegliere i motori di esecuzione del tuo hosting per realizzare al meglio i tuoi progetti'
section: 'Configurazione dell’hosting'
---

**Ultimo aggiornamento: 23/01/2020**

## Obiettivo

Cloud Web mette a tua disposizione diversi linguaggi di programmazione per consentirti di costruire il tuo progetto. Per realizzarlo nei tempi previsti, infatti, sarà necessario utilizzare un determinato programma di esecuzione. 

**Questa guida ti mostra come gestire i programmi di esecuzione del tuo hosting Cloud Web.**

## Prerequisiti

- Disporre di un piano di hosting [Cloud Web](https://www.ovh.it/hosting-web/cloud-web.xml) attivo
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), sezione `Web`{.action}

## Procedura

Per adattarsi al maggior numero di utilizzi possibile, la soluzione di hosting Cloud Web permette di disporre di uno o più motori di esecuzione, ognuno dei quali risponde a esigenze specifiche di ciascun progetto. 

Per prima cosa, **assicurati che il tuo progetto sia tecnicamente compatibile con il tuo hosting Cloud Web**. La lista dei linguaggi compatibili è disponibile all’indirizzo <https://www.ovh.it/hosting-web/cloud-web.xml> 

Una volta indicati i motori di esecuzione da utilizzare, segui la procedura descritta in questa guida. 

### Step 1: accedi alla gestione dei motori di esecuzione

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, seleziona il tuo servizio Cloud Web nella sezione `Hosting`{.action} nel menu a sinistra  e clicca sulla scheda `Motori di esecuzione`{.action}.

Visualizzi una tabella con tutti i motori di esecuzione aggiunti alla tua soluzione di hosting Cloud Web. Considera che durante l’installazione dell’hosting, sul tuo servizio viene creato automaticamente un motore.

![cloudweb](images/cloud-web-runtime-step1.png){.thumbnail}

### Step 2: gestisci i motori di esecuzione

La gestione dei motori di esecuzione di un hosting Cloud Web comprende diverse operazioni: 

- [aggiungere o modificare un motore di esecuzione](./#21-aggiungere-o-modificare-un-motore-di-esecuzione){.external} (il numero massimo dei motori dipende dal[ servizio attivato](https://www.ovh.it/hosting-web/cloud-web.xml){.external})
- impostare un motore come predefinito
- eliminare un motore di esecuzione

#### 2.1. Aggiungere o modificare un motore di esecuzione

> [!primary]
>
> Prima di modificare un motore di esecuzione, assicurati che l’operazione non abbia impatto sulla raggiungibilità dei siti e delle applicazioni che lo utilizzano. I multisiti che si basano sui motori di esecuzione sono disponibili nella colonna `Numero di multisiti associati`. Nella scheda `Multisito`{.action}, nella colonna `Motore di esecuzione` della tabella, è inoltre possibile visualizzare il motore utilizzato per ogni dominio. .
> 

Per aggiungere o modificare un motore di esecuzione, seleziona l’hosting Cloud Web in questione e clicca sulla scheda `Motori di esecuzione`{.action}. A questo punto: 

- **per aggiungere un motore**, clicca su `Azioni`{.action} in alto a sinistra della tabella e seleziona l’opzione `Aggiungi un motore di esecuzione`{.action}.
- **per modificare un motore**, clicca sul pulsante `...`{.action} in corrispondenza del motore in questione e seleziona `Modifica`{.action}.

![cloudweb](images/cloud-web-runtime-step2.png){.thumbnail}

Nella nuova finestra, inserisci le informazioni richieste e prosegui nella lettura di questa guida in base al motore scelto:

- [PHP](./#php){.external} 
- [Node.js](./#nodejs){.external}
- [Ruby](./#ruby){.external} 
- [Python](./#python){.external} 

##### **PHP**

|Campo|Descrizione| 
|---|---| 
|Nome personalizzato|Assegna al motore un nome che ti permetta di riconoscerlo tra quelli presenti nel tuo Spazio Cliente OVHcloud.|  
|Motore di esecuzione|Seleziona il nuovo motore di esecuzione.|  

Una volta inseriti tutti i dati, clicca su `Conferma`{.action}. A questo punto, verifica che il motore di esecuzione venga correttamente utilizzato dai multisiti corrispondenti. Per eseguire questa operazione, consulta lo [Step 3: associa il motore di esecuzione a un multisito](./#etape-3-associer-le-moteur-dexecution-a-un-multisite_2){.external}.

![cloudweb](images/cloud-web-runtime-step3.png){.thumbnail}

##### **Node.js**

|Campo|Descrizione| 
|---|---| 
|Nome personalizzato|Assegna al motore un nome che ti permetta di riconoscerlo tra quelli presenti nel tuo Spazio Cliente OVHcloud.|
|Motore di esecuzione|Seleziona il nuovo motore di esecuzione.|
|Percorso di accesso alla cartella pubblica|Indica la directory in cui sarà ospitato il contenuto statico del sito (il motore non eseguirà questo contenuto).|
|Ambiente dell’applicazione|Specifica se si tratta di un ambiente di produzione (production), di prova (test) o di sviluppo (development). Ti ricordiamo che quest’ultimo ha un comportamento diverso rispetto agli altri, in quanto mostra gli eventuali errori direttamente nell’interfaccia Web.|
|Script per l’avvio dell'applicazione|Assegna un nome allo script che invierà la richiesta alla tecnologia Node.js.|

Una volta inseriti tutti i dati, clicca su `Conferma`{.action}. A questo punto, verifica che il motore di esecuzione venga correttamente utilizzato dai multisiti corrispondenti. Per eseguire questa operazione, consulta lo [Step 3: associa il motore di esecuzione a un multisito](./#etape-3-associer-le-moteur-dexecution-a-un-multisite_2){.external}.

![cloudweb](images/cloud-web-runtime-step3-2.png){.thumbnail}

##### **Ruby**

|Campo|Descrizione| 
|---|---| 
|Nome personalizzato|Assegna al motore un nome che ti permetta di riconoscerlo tra quelli presenti nel tuo Spazio Cliente OVHcloud.|
|Motore di esecuzione|Seleziona il nuovo motore di esecuzione.|
|Percorso di accesso alla cartella pubblica|Indica la directory in cui sarà ospitato il contenuto statico del sito (il motore non eseguirà questo contenuto).|
|Ambiente dell’applicazione|Specifica se si tratta di un ambiente di produzione (production), di prova (test) o di sviluppo (development). Ti ricordiamo che quest’ultimo ha un comportamento diverso rispetto agli altri, in quanto mostra gli eventuali errori direttamente nell’interfaccia Web.|
|Script di avvio dell'applicazione|Assegna un nome allo script che invierà la richiesta al motore di esecuzione Ruby.|

Una volta inseriti tutti i dati, clicca su `Conferma`{.action}. A questo punto, verifica che il motore di esecuzione venga correttamente utilizzato dai multisiti corrispondenti. Per eseguire questa operazione, consulta il paragrafo [Step 3: associa il motore di esecuzione a un multisito](.#step-3-associa-il-motore-di-esecuzione-a-un-multisito_2){.external}.

![cloudweb](images/cloud-web-runtime-step2-1-3.png){.thumbnail}


##### **Python**

|Campo|Descrizione| 
|---|---| 
|Nome personalizzato|Assegna al motore un nome che ti permetta di riconoscerlo tra quelli presenti nel tuo Spazio Cliente OVHcloud.|
|Motore di esecuzione|Seleziona il nuovo motore di esecuzione.|
|Percorso di accesso alla cartella pubblica|Indica la directory in cui sarà ospitato il contenuto statico del sito (il motore non eseguirà questo contenuto).|
|Ambiente dell’applicazione|Specifica se si tratta di un ambiente di produzione (production), di prova (test) o di sviluppo (development). Ti ricordiamo che quest’ultimo ha un comportamento diverso rispetto agli altri, in quanto mostra gli eventuali errori direttamente nell’interfaccia Web.|
|Script di avvio dell'applicazione|Assegna un nome allo script che invierà la richiesta al motore di esecuzione Python.|

Una volta inseriti tutti i dati, clicca su `Conferma`{.action}. A questo punto, verifica che il motore di esecuzione venga correttamente utilizzato dai multisiti corrispondenti. Per eseguire questa operazione, consulta il paragrafo [Step 3: associa il motore di esecuzione a un multisito](.#step-3-associa-il-motore-di-esecuzione-a-un-multisito_2){.external}.

![cloudweb](images/cloud-web-runtime-step2-1-4.png){.thumbnail}

### Step 3: associa il motore di esecuzione a un multisito

> [!primary]
> Nel nostro esempio, sono stati creati solo i motori PHP e Node.js. È possibile che, nel tuo progetto, tu stia utilizzando Ruby o Python. In questo caso, le operazioni descritte qui di seguito sono
> applicabili.
> 
> L’utilizzo di due motori di esecuzione allo stesso tempo sul tuo hosting Cloud Web dipende dal[piano scelto.]https://www.ovh.it/hosting-web/cloud-web.xml){.external}
> 

Una volta impostati i motori di esecuzione per il tuo progetto, assicurati che siano correttamente associati ai multisiti: clicca sulla scheda `Multisito`{.action} dell’hosting Cloud Web in questione 

e verifica che i nomi mostrati nella colonna `Motore di esecuzione` della tabella corrispondano ai nomi personalizzati indicati durante la creazione del motore.

![cloudweb](images/cloud-web-runtime-step4.png){.thumbnail}

Per modificare un motore associato a un multisito, clicca sull’icona a forma di ingranaggio in corrispondenza del dominio in questione e clicca su `Modifica`{.action}.

![cloudweb](images/cloud-web-runtime-step5.png){.thumbnail}

Nella nuova finestra, accanto a `Motore di esecuzione`, seleziona il motore corretto. Ti ricordiamo che i nomi visualizzati corrispondono al “nome personalizzato” che hai definito e che è necessario che il sito o l’applicazione accessibile dal dominio in questione siano compatibili con il motore scelto. 

Una volta selezionato il motore, segui gli step fino al completamento dell’operazione.

![cloudweb](images/cloud-web-runtime-step6.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.