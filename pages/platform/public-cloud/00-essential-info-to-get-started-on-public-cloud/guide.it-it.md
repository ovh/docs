---
title: "L'essenziale per iniziare con il Public Cloud"
excerpt: Scopri le nozioni di base per iniziare con il Public Cloud OVH
slug: public-cloud-essenziale-informazione
section: Per iniziare
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 07/02/2022**

## Obiettivo

Il Public Cloud OVHcloud è un ambiente che riunisce un gran numero di prodotti Cloud, disponibili in tutto il mondo, compatibili tra loro e il cui utilizzo può essere previsto per un breve periodo (un'ora, qualche giorno...) o più lungo (diversi mesi, anni).

La messa a disposizione è praticamente istantanea e la fatturazione è adattata direttamente al vostro utilizzo, il che apporta semplicità e flessibilità alle vostre pratiche.

Questa guida ti mostra le principali nozioni per una corretta gestione dei prodotti.
<br>In questa pagina vengono mostrati un [approccio globale al Public Cloud](#global-approach) e alcuni concetti generali, seguiti da un [approccio concreto](#concrete-approach) con i vantaggi del Public Cloud e i primi step di avvio.
<br>Infine, proponiamo risorse per [spingervi oltre](#gofurther).

Se hai già familiarità con questi concetti, è possibile continuare la scoperta del Public Cloud OVHcloud attraverso queste guide:

- [Apri un account OVHcloud](https://docs.ovh.com/it/customer/creare-account-ovhcloud/)
- [Crea il tuo primo progetto Public Cloud](https://docs.ovh.com/it/public-cloud/crea_il_primo_progetto_public_cloud/)
- [Scopri l'interfaccia Public Cloud](https://docs.ovh.com/gb/en/public-cloud/public-cloud-interface/)
- [Crea la tua prima istanza](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/)
- [Gestisci le quote](https://docs.ovh.com/it/public-cloud/aumenta_la_quota_del_tuo_public_cloud/)

## Approccio globale <a name="global-approach"></a>

### Un ecosistema di risorse on demand

Tutti i prodotti disponibili nel Public Cloud (server, cluster Kubernetes, volumi disco...) formano un ecosistema.
<br>Ogni elemento corrisponde ad una funzione e risponde ad una necessità, può essere utilizzato da solo o in aggiunta ad altri elementi del catalogo.
<br>Ad esempio, un'istanza (un server on demand) può essere utilizzata in aggiunta agli elementi di storage come l'object storage. Se per eseguire l'applicazione è necessario un database, è necessario disporre di un elemento per rispondere a queste esigenze.

Tutti questi componenti sono integrati in un ambiente che facilita lo sviluppo e l'utilizzo di tali risorse.
<br>avviando risorse come un'istanza o un cluster Kubernetes è semplice: Il deploy avviene in pochi secondi.
<br>Puoi anche eliminare queste risorse qualche ora dopo e pagare solo questo tempo di utilizzo. E' quello che chiamiamo "risorse on demand".

![Public Cloud Ecosystem](images/ecosystem.png){.thumbnail}

### Risorse disponibili ovunque

Il catalogo Public Cloud propone risorse a basso livello come istanze o reti private o risorse gestite in livelli più elevati, come un database.
<br>Queste risorse sono fornite come servizio, nel senso che l'utente non ha bisogno di acquistare gli elementi, li utilizza per un periodo di tempo (come ad esempio la locazione) e paga semplicemente il prezzo corrispondente al tempo di utilizzo.
<br>Nella maggior parte dei casi, l'utilizzo di queste risorse non ha una durata precisa (tranne nel caso di fatturazione mensile destinata a ridurre i costi).

Quando la risorsa proposta è "gestita", si parla spesso di una risorsa negli strati alti, già vicina all'applicazione, come un cluster di database, un cluster Kubernetes, una soluzione di training modello per l'IA...
<br>Per "gestita" si intende il fatto che la piattaforma è sviluppata, monitorata, mantenuta (upgrade) da OVHcloud. Non dovete preoccuparvi di questa gestione e approfittate direttamente del servizio.

Queste risorse sono disponibili nei diversi datacenter localizzati nel mondo OVHcloud offre servizi Public Cloud in Europa, America del Nord, Asia e Oceania.
<br>È possibile avviare una risorsa in ciascuno di questi punti selezionando semplicemente la localizzazione desiderata.

![Public Cloud geolocation](images/geolocation.png){.thumbnail}

### Un provider di servizi Cloud su un mercato maturo

Il Public Cloud OVHcloud è posizionato insieme a provider Cloud conosciuti come AWS (Amazon Web Services), GCP (Google Cloud Platform), Azure (Microsoft) o Alibaba Cloud. La nostra offerta si distingue per [tariffe particolarmente vantaggiose](https://www.ovhcloud.com/it/public-cloud/prices/) e l'utilizzo di API standard che lasciano i nostri utenti liberi di cambiare, senza aderire ad una delle due tecnologie proprietarie.

## Approccio pratico <a name="concrete-approach"></a>

### Modalità di utilizzo: alcuni esempi concreti e i loro vantaggi

- **Maggiore flessibilità**: *Hai un'applicazione che al momento funziona su un hosting classico come uno o più server dedicati e vuoi maggiore flessibilità nell'utilizzo.* L'utilizzo delle istanze Public Cloud è molto simile a quello di un server dedicato, ma offre la possibilità di ridimensionare facilmente il tuo server, seguire l'evoluzione hardware, aggiungere spazio di storage a caldo, configurare l'architettura di rete come preferisci, programmare backup o clonare il tuo server in poche azioni semplici.

- **Più scalabilità**: *Se sviluppi un'applicazione Cloud nativa e vuoi un'infrastruttura in grado di generare forti variazioni di carico.* I cluster Kubernetes possono reagire e adattarsi dinamicamente al carico. Possono aggiungere nodi al cluster automaticamente in caso di aumento della pressione sull'infrastruttura.

- **Per maggiori informazioni sui costi**: *Hai un'applicazione in produzione soggetta a stagionalità e desideri trasferire il carico di calcolo al momento dei picchi, senza mantenere cospicui costi di infrastruttura durante tutto l'anno.* Le istanze con fatturazione oraria possono eseguire le operazioni in poco tempo e, una volta superata la necessità, essere distrutte.
- **Più serenità**: *Hai bisogno di un database ma non vuoi gestire il motore e assicurarne la manutenzione.* I database gestiti sono disponibili in pochi secondi e sono totalmente gestiti da OVHcloud. Puoi utilizzare direttamente il servizio di database liberandoti dall'installazione, dalla manutenzione, dagli aggiornamenti...

### Utilizzo: un'interfaccia semplice e le API standard

Le risorse Public Cloud possono essere manipolate in diversi modi. Sia che si scopra il Public Cloud che che si sia un utente avanzato, l'utilizzo resta semplice.

- Per scoprire i prodotti, lo Spazio Cliente ti accompagna nella creazione di risorse, scegliendo le performance del prodotto, la sua localizzazione, la personalizzazione che desideri o altre impostazioni come la sua modalità di fatturazione.

- Per automatizzare deploy e industrializzare le architetture, puoi utilizzare gli strumenti di mercato anche collegandoti direttamente alle API standard come l'API S3, le API di OpenStack o anche Kubernetes.

### Avvio: presa in mano

#### Il progetto

Per iniziare, ti serve un [account cliente OVHcloud](https://docs.ovh.com/it/customer/creare-account-ovhcloud/).

A questo punto [crei un progetto Public Cloud](https://docs.ovh.com/it/public-cloud/crea_il_primo_progetto_public_cloud/). Un progetto è un ambiente che voi dedicherete a un contesto.

Ad esempio, è possibile scegliere di separare i propri ambienti di test e produzione in due progetti.
<br>Oppure puoi utilizzare diversi progetti per le tue applicazioni (siti pubblici, shop online, applicazioni aziendali, gestione di documenti, ecc...).

Per avviare un progetto è necessario salvare un metodo di pagamento al momento della creazione del progetto.

#### La fatturazione

Una volta registrato il metodo di pagamento, verrà utilizzato per addebitare l'importo calcolato per la tua [fatturazione alla fine del mese](https://docs.ovh.com/it/public-cloud/analizza_i_tuoi_consumi_e_gestisci_la_tua_fatturazione/). Questo calcolo è effettuato in base al tempo di utilizzo di ogni risorsa, in funzione del prezzo delle risorse.

Esempio: Nel mese, hai utilizzato 1 istanza d2-8 per tutto il mese e 3 istanze b2-60 che contano insieme 32 ore.
<br>La tua fattura sarà di 720 (numero di ore nel mese) x 0,0325 € +IVA (prezzo dell'ora di una d2-8) + 32 x 0,4589 € +IVA (prezzo dell'ora di una b2-60). Vale a dire 38,08 € +IVA

#### La gestione delle quote

Forse sarete chiamati a gestire la questione delle quote.
<br>La quota Public Cloud definisce la quantità massima di risorse che puoi avviare. Dipende da alcuni parametri (anzianità dell'account, fatture precedenti...).
<br>Tali quote sono assegnate per localizzazione (regione in senso OpenStack). È quindi possibile che tu raggiunga il massimo delle risorse possibili sul tuo progetto e che sia necessario [aumentare queste quote](https://docs.ovh.com/it/public-cloud/aumenta_la_quota_del_tuo_public_cloud/).

![Public Cloud quota](images/quota.png){.thumbnail}

#### Gestione degli utenti

È possibile che sia necessario gestire diversi utenti che interverranno sul tuo progetto.
<br>Puoi scegliere tra due opzioni:

- Per utilizzare le API OpenStack o S3 o l'interfaccia Horizon, è necessario [creare degli utenti](https://docs.ovh.com/it/public-cloud/creation-and-deletion-of-openstack-user/). Gli utenti possono avere diritti limitati per proteggere i perimetri di azione.
- Se non hai bisogno di accedere alle API o a Horizon, puoi [associare al tuo progetto un altro account cliente OVHcloud](https://docs.ovh.com/it/public-cloud/delega_i_diritti_per_gestire_i_tuoi_progetti/).

## Per saperne di più <a name="gofurther"></a>

Ecco alcune risorse generali che ti aiuteranno nel tuo lancio sul Public Cloud:

|Documentazione|Descrizione|
|---|---|
|[FAQ](https://docs.ovh.com/it/public-cloud/public-cloud-faq/)|Le domande più frequenti su Public Cloud|
|[Lessico](https://docs.ovh.com/gb/en/public-cloud/introduction-to-instances-and-other-cloud-based-terms/)|I concetti e le definizioni di cui avete bisogno per progredire.|
|[Disponibilità dei servizi per localizzazione](https://www.ovhcloud.com/fr/public-cloud/regions-availability/)|Le tabelle di disponibilità dei servizi attraverso le diverse localizzazioni.|
|[Changelog delle immagini](https://docs.ovh.com/it/public-cloud/changelog-immagini/)|Modifiche alle immagini di sistema disponibili al pubblico.|

Nella pratica, ecco alcune guide che ti aiuteranno ad avviare:

|Documentazione|Descrizione|
|---|---|
|[Crea la tua prima istanza](https://docs.ovh.com/it/public-cloud/primi-passi-public-cloud/)|La prima guida pratica per avviare un server Cloud dallo Spazio Cliente OVHcloud.|
|[Utilizzo di una chiave SSH](https://docs.ovh.com/it/public-cloud/utilizzare_una_chiave_ssh_nell_interfaccia_public_cloud/)| Per connetterti a un'istanza Linux, dovrai connetterti in SSH tramite questa guida.|
|[Configura la rete privata](https://docs.ovh.com/gb/en/public-cloud/public-cloud-vrack/)|In OVHcloud le reti private sono basate sulla tecnologia vRack. Questa guida ti mostra come eseguire questa operazione.|
|[Associa un disco aggiuntivo a un'istanza](https://docs.ovh.com/it/public-cloud/crea_e_configura_un_disco_aggiuntivo_sulla_tua_istanza/)|Questa guida ti mostra come aggiungere spazio di storage supplementare alla tua prima istanza.|
|[Accedere all’interfaccia Horizon](https://docs.ovh.com/it/public-cloud/horizon/)|L'interfaccia Horizon di OpenStack permette alcune azioni avanzate: ecco come connettersi.|
|[Crea un cluster Kubernetes](https://docs.ovh.com/gb/en/kubernetes/creating-a-cluster/) (EN)|Questa guida ti mostra come creare il tuo primo cluster Kubernetes.|
|[Configura un Additional IP](https://docs.ovh.com/it/public-cloud/configura-un-ip-failover/)|Gli Additional IP ti permettono di trasferire il traffico da un'istanza all'altra, questa guida ti mostra come configurarlo.|
|[Installazione della CLI OpenStack](https://docs.ovh.com/it/public-cloud/prepare_the_environment_for_using_the_openstack_api/)|OpenStack può essere utilizzato anche da riga di comando, come installare gli strumenti.|

Uno dei principali vantaggi dell'utilizzo di tecnologie standard e aperte, come OpenStack o Kubernetes, è di usufruire di tutta la documentazione disponibile.

|Documentazione|Descrizione|
|---|---|
|[OpenStack CLI](https://docs.openstack.org/python-openstackclient/stein/#using-openstackclient) (EN)|La documentazione completa dell'indispensabile client online d'ordine 'openstack'. Documentazione per la versione Stein, consulta la [tabella di disponibilità](https://www.ovhcloud.com/fr/public-cloud/regions-availability/) per sapere quali servizi sono disponibili.|
|[APIs OpenStack](https://docs.openstack.org/stein/api/) (EN)|La documentazione completa delle API di OpenStack. Documentazione per la versione Stein, consulta la [tabella di disponibilità](https://www.ovhcloud.com/fr/public-cloud/regions-availability/) per sapere quali servizi sono disponibili.|
|[End user Documents](https://docs.openstack.org/stein/user/) (EN)|La documentazione completa per l'utente OpenStack, in versione Stein.|
|[Developer Documents](https://developer.openstack.org/) (EN)|La documentazione per gli sviluppatori che desiderano connettere la loro applicazione alle API di OpenStack utilizzando le librerie/SDK disponibili.|
|[Kubernetes CLI Overview](https://kubernetes.io/docs/reference/kubectl/overview/) (EN)| La documentazione dell'indispensabile client da riga di comando 'kubctl'.|
|[APIs Overview](https://kubernetes.io/docs/reference/using-api/) (EN)| La documentazione dell'API di Kubernetes, utile per avere una visione d'insieme delle possibilità.|

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
