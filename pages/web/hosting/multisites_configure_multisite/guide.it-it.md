---
title: 'Ospitare più siti su uno stesso hosting'
slug: configurare-un-multisito-su-un-hosting-web
excerpt: 'Come condividere il tuo hosting Web tra più siti Internet'
section: 'Per iniziare'
order: 1
---

**Ultimo aggiornamento: 16/07/2019**

## Obiettivo

Su un hosting Web è possibile ospitare più siti Internet, con domini registrati in OVH o presso altri provider. 

**Questa guida ti mostra come configurare un multisito sul tuo hosting Web OVH.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVH](https://www.ovh.it/hosting-web/){.external} attivo
- Disporre di uno o più [domini](https://www.ovh.it/domini/){.external}
- Poter modificare la configurazione dei domini (zona DNS)
- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

### Step 1: accedi alla gestione del multisito

Accedi allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, clicca su `Hosting`{.action} nel menu a sinistra, seleziona il tuo servizio e clicca sulla scheda `Multisito`{.action}.

Visualizzi una tabella con tutti i domini aggiunti al tuo hosting, alcuni dei quali sono stati creati automaticamente durante l’installazione.

> [!primary]
>
> Per migrare il tuo sito Web evitando un’interruzione del servizio, passa direttamente allo [Step 3: pubblica il sito](./#step-3-pubblica-il-sito){.external}. 
>

![multisito](images/access-multisite-ovh.png){.thumbnail}

### Step 2: aggiungi un dominio o un sottodominio

Per aggiungere un nuovo dominio al tuo hosting, clicca sul pulsante `Aggiungi un dominio o un sottodominio`{.action} e seleziona una delle opzioni proposte. 

- **Aggiungi un dominio registrato in OVH**

Compaiono soltanto i domini che utilizzano una configurazione OVH e inseriti come contatti nel tuo identificativo. Selezionane uno dalla lista e clicca su `Seguente`{.action}. Prosegui seguendo lo [Step 2.1: aggiungi un dominio registrato in OVH](./#step-21-aggiungi-un-dominio-registrato-in-ovh){.external}.

- **Aggiungi un dominio esterno**

Se il dominio non è incluso nella lista, significa che non è registrato in OVH o risulta associato a un altro identificativo. In questo caso, seleziona l’opzione `Aggiungi un dominio esterno`{.action}, clicca su `Seguente`{.action} e prosegui seguendo lo [Step 2.2: aggiungi un dominio esterno](./#step-22-aggiungi-un-dominio-esterno){.external}.

![multisito](images/add-multisite-step1.png){.thumbnail}

### Step 2.1: aggiungi un dominio registrato in OVH 

> [!primary]
>
> Questo step è valido solo se hai selezionato l’opzione “Aggiungi un dominio registrato in OVH”. Per aggiungere un dominio esterno, passa direttamente al paragrafo [Step 2.2: aggiungi un dominio esterno](./#step-22-aggiungi-un-dominio-esterno){.external}.
>

Una volta selezionato il dominio che vuoi associare all’hosting, è necessario personalizzarne i parametri. In base al piano di [hosting Web](https://www.ovh.it/hosting-web/){.external} attivato, alcune opzioni potrebbero non essere disponibili.

|Campo|Descrizione|
|---|---|
|Dominio |Di default, il dominio selezionato viene inserito automaticamente. È possibile aggiungervi un sottodominio (ad esempio, blog.mypersonaldomain.ovh) e creare contemporaneamente il sottodominio “www” corrispondente (ad esempio, www.mypersonaldomain.ovh). Questo dominio corrisponderà al nome del sito che vuoi pubblicare online.|
|Cartella di root|È la directory dello spazio di storage in cui sarà ospitato il dominio selezionato e in cui dovranno essere caricati i file del sito. Ad esempio, per "blog.mypersonaldomai.ovh", la cartella di root potrebbe essere “blog”. Se la cartella non esiste, verrà creata automaticamente.|
|Attiva l’IPv6|Permette di attivare il protocollo IPv6 sul dominio selezionato. Per maggiori informazioni, accedi alla pagina relativa agli [IP](https://www.ovh.it/hosting-web/ip.xml){.external}. |
|SSL|Permette di usufruire di una connessione sicura (https://) sul dominio selezionato. Per maggiori informazioni, accedi alla pagina relativa ai [certificati SSL](https://www.ovh.it/ssl/){.external}. Attivando contemporaneamente le opzioni SSL e CDN (Content Delivery Network), è possibile usufruire anche del protocollo **HTTP2**.|
|Attiva la CDN|Permette di attivare la CDN sul dominio selezionato memorizzando in cache gli elementi statici di un sito, ad esempio le immagini. Per maggiori informazioni, accedi alla pagina relativa alla [CDN](https://www.ovh.it/hosting-web/cdn.xml){.external}. Attivando contemporaneamente le opzioni SSL e CDN (Content Delivery Network), è possibile usufruire anche del protocollo **HTTP2**.|
|IP del Paese|Permette di usufruire di un indirizzo IP geolocalizzato (a scelta tra diversi Paesi) per il dominio selezionato. Per maggiori informazioni, accedi alla pagina relativa agli [IP](https://www.ovh.it/hosting-web/ip.xml){.external}. |
|Attiva il firewall|Permette di attivare un firewall (analisi del traffico) sul dominio selezionato. Per maggiori informazioni, accedi alla pagina relativa a [Mod Security](https://www.ovh.it/hosting-web/mod_security.xml){.external}. |
|Log separati|Permette di attivare un nuovo spazio di log sul dominio selezionato. Dovrai scegliere, tra quelli disponibili nella lista, il dominio che determinerà il nome di accesso al nuovo spazio. Per maggiori informazioni, accedi alla pagina relativa alle [statistiche dettagliate](https://www.ovh.it/hosting-web/sito_web_statistiche.xml){.external}.|

Una volta inseriti tutti i dati, clicca su `Seguente`{.action} e verifica la correttezza delle informazioni inserite.

![multisito](images/add-multisite-step2.png){.thumbnail}

Selezionando un dominio registrato in OVH, hai la possibilità di modificarne automaticamente o manualmente la configurazione DNS.

- **Per una configurazione DNS automatica**, spunta la casella `Configurazione automatica (consigliata)`{.action}
- **Per una configurazione DNS manuale**, deseleziona la casella `Configurazione automatica (consigliata)`{.action} e recupera i parametri da modificare. Per maggiori informazioni sulla procedura da seguire per effettuare questa operazione, consulta la guida [Modificare una zona DNS OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}.

Clicca su `Conferma`{.action} per aggiungere il dominio. Questa operazione potrebbe richiedere circa un’ora per essere completata e la propagazione della nuova configurazione DNS da 4 a 24 ore per diventare effettiva.

Ora che il dominio è stato aggiunto, passa direttamente allo [Step 3: pubblica il sito](./#step-3-pubblica-il-sito){.external}.

### Step 2.2: aggiungi un dominio esterno

> [!primary]
>
> Questo step è valido solo se hai selezionato l’opzione “Aggiungi un dominio esterno” (non registrato in OVH e per cui non disponi dell’accesso alla gestione nello Spazio Cliente OVH). Per aggiungere un dominio registrato in OVH, torna allo [Step 2.1: aggiungi un dominio registrato in OVH](./#step-21-aggiungi-un-dominio-registrato-in-ovh){.external}.
>

Una volta selezionato il dominio che vuoi associare all’hosting, è necessario personalizzarne i parametri. Tieni presente che alcune delle opzioni incluse nel tuo piano di [hosting Web](https://www.ovh.it/hosting-web/){.external} non potranno essere attivate durante questo processo: sarà prima necessario aggiungere il dominio e modificare i parametri del multisito.

|Campo|Descrizione|
|---|---|
|Dominio|Inserisci il dominio che vuoi utilizzare. È possibile aggiungervi un sottodominio (ad esempio, blog.mypersonaldomain.ovh) e creare contemporaneamente il sottodominio “www” corrispondente (ad esempio, www.mypersonaldomain.ovh). Questo dominio corrisponderà al nome del sito che vuoi pubblicare online. Ti ricordiamo che, per poter completare l’aggiunta del dominio, devi essere in grado di modificarne la configurazione (zona DNS).|
|Cartella di root|È la directory dello spazio di storage in cui sarà ospitato il dominio selezionato e in cui dovranno essere caricati i file del sito. Ad esempio, per blog.mypersonaldomai.ovh, la cartella di root potrebbe essere “blog”. Se la cartella non esiste, verrà creata automaticamente.|
|Attiva l’IPv6|Permette di attivare il protocollo IPv6 sul dominio selezionato. Per maggiori informazioni, accedi alla pagina relativa agli [IP](https://www.ovh.it/hosting-web/ip.xml){.external}. |

Una volta inseriti tutti i dati, clicca su `Seguente`{.action} e verifica la correttezza delle informazioni inserite.

![multisito](images/add-multisite-external-step1.png){.thumbnail}

Selezionando un dominio esterno a OVH, è necessario completare un processo di verifica volto a garantire la legittimità dell’operazione. Nello Spazio Cliente comparirà un messaggio che ti inviterà a modificare la configurazione DNS del dominio: annota i parametri indicati e clicca su `Conferma`{.action}. A questo punto, il dominio viene aggiunto provvisoriamente per il tempo necessario a modificare la configurazione DNS.

> [!warning]
>
> Apportare la modifica è indispensabile per poter aggiungere il dominio. Se non viene effettuata, l’operazione verrà annullata. 
>

Per modificare la zona DNS è necessario accedere all’interfaccia del provider responsabile del dominio. Se il provider è OVH, consulta la guida [Modificare una zona DNS OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}. La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore. 

Ecco alcuni elementi della configurazione DNS da modificare:

|Record|Dove trovare l’informazione|Descrizione|
|---|---|---|
|TXT|Nella scheda `Multisito`{.action}, clicca sul pulsante **Configura il token ovhcontrol** in basso a sinistra.|Questo codice permette a OVH di verificare che l’aggiunta di ogni dominio esterno sia legittima. Dovrai creare il record TXT con il sottodominio **ovhcontrol** (ad esempio, ovhcontrol.mypersonaldomain.ovh). Non è necessario confermare i singoli sottodomini ma soltanto il dominio principale.|
|A e AAAA|Nella scheda `Informazioni generali`{.action}, in corrispondenza di **IPv4** e **IPv6**.|Questi due record permettono che il dominio mostri il sito Internet ospitato nel tuo hosting Web. |

### Step 3: pubblica il sito

Una volta che il dominio è stato aggiunto, non ti resta che pubblicare online il sito associato. Ti ricordiamo che questa operazione dovrà essere effettuata nella cartella root indicata nello step precedente.

Per semplificare la procedura, OVH mette a disposizione i “moduli in 1 click”, template pronti all’uso grazie ai quali il sito verrà installato automaticamente nella cartella root. Per maggiori informazioni, consulta la guida [Installare i moduli in 1 click OVH](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/){.external}. 

Se invece vuoi effettuare un’installazione manuale, assicurati di avere a disposizione i file del sito e caricali nella corretta cartella root del tuo spazio di storage. Per maggiori informazioni, consulta la guida [Mettere online un sito Internet su un hosting Web](../hosting_condiviso_come_mettere_online_il_tuo_sito/){.external}.

> [!primary]
>
> Se intendi utilizzare il tuo hosting per ospitare diversi siti, dovrai ripetere l’intera procedura per ognuno di essi.
>
> Ti consigliamo però di prestare la massima attenzione: maggiore è il numero di siti ospitati, più alto sarà il numero di risorse necessarie. Nella pagina delle nostre [soluzioni di hosting](https://www.ovh.it/hosting-web/){.external} puoi verificare il numero di siti che è possibile ospitare nel tuo spazio.
>

## Per saperne di più

[Installare i moduli in 1 click OVH](../hosting_condiviso_guida_ai_moduli_degli_hosting_condivisi/){.external}

[Modificare una zona DNS OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}

[Mettere online un sito Internet su un hosting Web](../hosting_condiviso_come_mettere_online_il_tuo_sito/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.