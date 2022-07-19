---
title: 'Modificare una zona DNS di OVHcloud'
excerpt: 'Come modificare una zona DNS OVHcloud dallo Spazio Cliente'
slug: web_hosting_modifica_la_tua_zona_dns
section: 'DNS e zona DNS'
order: 3
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 07/07/2022**

## Obiettivo

### Capire il concetto di DNS <a name="understanddns"></a>

La sigla DNS, che indica **D**omain **N**ame **S**ystem, è un insieme di elementi che permettono di far corrispondere un dominio con un indirizzo IP.

Ad esempio, quando vuoi accedere al sito *mydomain.ovh*, la tua richiesta viene inizialmente trattata da questo insieme DNS che lo indirizza verso l'indirizzo IP del server che ospita il sito *mydomain.ovh*.

Ti ricordiamo che, in base alle operazioni che effettuerai nello Spazio Cliente, è importante distinguere tra i **server DNS** e la **zona DNS**. Infatti, è a livello del **server DNS** che è configurata la **zona DNS**. 

Le informazioni relative ai **server DNS** e la loro modifica sono disponibili nella guida [Modificare i server DNS di un dominio OVHcloud](../web_hosting_gestisci_il_tuo_server_dns/).

![DNS](images/dnsserver.png){.thumbnail}

Se prendiamo l'esempio di cui sopra, quando digitate *mydomain.ovh*, i **server DNS** associati a questo dominio saranno interrogati. che contengono la **zona DNS** del dominio *mydomain.ovh* in cui è inserito l'indirizzo IP dell'hosting di *mydomain.ovh*. In questo modo il browser è in grado di visualizzare il sito web *mydomain.ovh* contenuto sull'hosting. Si chiama risoluzione DNS.

![DNS](images/dnssolve.gif){.thumbnail}

### La zona DNS 

La zona DNS di un dominio è un file di configurazione composto da **record**. che permettono di collegare il dominio ai server che ospitano i servizi Internet, come siti Web (tramite record A) o indirizzi email (record MX).

![DNS](images/dnszone.png){.thumbnail}

**Questa guida ti mostra come modificare la zona DNS OVHcloud dallo Spazio Cliente.**

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BvrUi26ShzI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Prerequisiti

- Avere accesso alla gestione del dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}
- Utilizza la configurazione OVHcloud (server DNS) per il dominio in questione. 

> [!warning]
>
> - Se il dominio non utilizza i server DNS di OVHcloud, è necessario effettuare la modifica attraverso l'interfaccia del provider che gestisce la configurazione del dominio.
> 
> - Se il tuo dominio è registrato in OVHcloud, verifica che utilizzi la nostra configurazione. accedendo allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, cliccando sulla scheda `Server DNS`{.action} del dominio interessato.
> 
> In entrambi i casi, fai attenzione effettuando le modifiche dei server DNS. Infatti, la configurazione precedente che può essere applicata al tuo dominio non sarà più attiva se non hai precedentemente riconfigurato e personalizzato la nuova zona DNS presente in OVHcloud.<br>
> È possibile avere una sola zona DNS attiva per ogni dominio.
>

## Procedura

### Accedere alla gestione di una zona DNS OVHcloud

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} nella sezione `Web Cloud`{.action}. Clicca su `Domini`{.action} e poi seleziona il dominio. e clicca sulla scheda `Zona DNS`{.action}.

Visualizzi una tabella con tutti i record DNS associati al tuo dominio presso OVHcloud. Il contenuto può essere filtrato per tipo di record o per dominio.

![dnszone](images/edit-dns-zone-ovh-control-panel.png){.thumbnail}

### I record DNS

**Modificare i server DNS di un dominio è un’operazione delicata**: se non viene eseguita correttamente, potrebbe risultare impossibile raggiungere il proprio sito e ricevere nuovi messaggi nella casella di posta.

Essere a conoscenza delle diverse tipologie di record consente di modificare al meglio la zona DNS del dominio. Per maggiori informazioni, consulta la lista qui sotto. Essa riprende gli obiettivi e le specificità di ogni registrazione.

#### Registrazioni di puntamento

- **A** (**A**ddress): Collega un dominio a un indirizzo IPv4 `X.X.X.X` (dove le `X` sono cifre comprese tra `0` e `255`). ad esempio, l'indirizzo IPv4 del server in cui è ospitato il tuo sito Web.

- **AAAA** (4 lettere **A** perché questa registrazione è codificata su quattro volte più bit del campo di puntamento **A** storico): Collega un dominio a un indirizzo IPv6. ad esempio, l'indirizzo IPv6 del server in cui è ospitato il tuo sito Web.

> [!primary]
> 
> Gli indirizzi IPv6 vengono progressivamente creati per ovviare alla mancanza di indirizzi IPv4 dovuta all'espansione continua degli usi digitali. La codifica a 128 bits degli indirizzi IPv6 permette di fornire un maggior numero di indirizzi IP.
>
> Tuttavia, se il tuo server dispone già di un IPv4, ti consigliamo di privilegiare l'utilizzo di quest'ultimo sul tuo IPv6.<br>
> Gli IPv6 non sono infatti ancora correttamente interpretati su tutta la rete Internet, il che può causare problemi di visualizzazione o di accesso.
>

<a name="cname"></a>

- **CNAME** (**C**anonical **NAME**): Utilizza l'indirizzo IP di un altro dominio creando un link chiamato alias. Ad esempio, se *www.mydomain.ovh* è un alias di *mydomain.ovh*, ciò indica che *www.mydomain.ovh* utilizzerà l'indirizzo IP di *mydomain.ovh*.

> [!alert]
>
> Un record TXT che utilizza lo stesso dominio o sottodominio di un CNAME interferisce con il suo funzionamento. Il record CNAME funzionerà solo parzialmente o totalmente.
> 

> [!warning]
>
> Per convenzione, i record CNAME non possono essere utilizzati direttamente da un dominio nella sua zona DNS. Il dominio da solo deve necessariamente e direttamente puntare verso un indirizzo IP con un record di tipo A (o AAAA se si tratta di un IPv6).
> 
> Per citare l'esempio di cui sopra, non è possibile creare un record CNAME per il dominio *mydomain.ovh* nella zona DNS che hai creato per questo dominio.
> Puoi creare record CNAME con tutti i sottodomini (ad esempio: *domain.mydomain.ovh* o *www.mydomain.ovh*) del dominio *mydomain.ovh* nella zona DNS creata per *mydomain.ovh*.
>
> Per saperne di più sul piano tecnico, in fondo a questa pagina puoi trovare [un caso particolare di utilizzo dei CNAME e delle zone DNS create per sottodomini](#techusecase).
>

- **DNAME** (**D**elegation **NAME**): Permette di generare un "alias" per tutti i sottodomini di un dominio. Questo record evita di creare una moltitudine di record CNAME. Infatti, un record CNAME reindirizza indipendentemente da un solo sottodominio verso un unico bersaglio.

Esempio: creando un record DNAME de *mydomain.ovh* verso *ovh.com*, tutti i sottodomini di *mydomain.ovh* (come *dname.mydomain.ovh* e *xxx.mydomain.ovh*) saranno reindirizzati rispettivamente verso i sottodomini di impostaovh.comAP (come "IMPROND") ame.ovh.it.com evalixxx.ovh.comcinesesaldo).

In altre parole, il record DNAME indica che *dname.mydomain.ovh* e *xxx.mydomain.ovh* devono rispettivamente visualizzare i risultati di *dname.ovh.com* e *xxx.ovh.com*.

> [!warning]
> 
> Per contro, *midomain.ovh* come dominio non mostrerà la destinazione del dominio *ovh.com* perché il record DNAME è valido solo per i sottodomini definiti nel record DNAME.
>
> Se il sottodominio di destinazione *xxx.ovh.com* non punta da nessuna parte, il record DNAME non mostrerà nulla per *xxx.mydomain.ovh*.
> 

> [!success]
> 
> Il record DNAME è generalmente utilizzato come parte di una modifica della ragione sociale. Può essere installato anche quando un utente dispone di più estensioni di domini (.it, .net, .com, .info, ecc...) per reindirizzarle facilmente tra loro.
>

- **NS** (**N**ame **S**erver): Definisci i server DNS associati alla tua zona DNS. Ad esempio, se i record NS della tua zona DNS visualizzano i server *DNS19.ovh.net* e *ns19.ovh.net*, sarà necessario utilizzarli nella scheda `Server DNS`{.action} del tuo Spazio Cliente OVHcloud. Per maggiori informazioni, consulta la nostra guida [Modificare i server DNS di un dominio OVHcloud](../generalites-serveurs-dns/).

> [!warning]
>
> Non modificare, tramite il pulsante `Utilizza l'editor di testo`{.action}, i record NS della tua zona DNS a vantaggio di server DNS esterni a OVHcloud. Questa zona DNS funziona **esclusivamente** con server DNS OVHcloud.
>

#### Record email

- **MX** (**M**ail e**X**changer): Associa un dominio a un server di posta Ad esempio, l'indirizzo *10 mx1.mail.ovh.net* corrisponde a uno dei server di posta OVHcloud quando possiedi un'offerta email OVHcloud. È probabile che il tuo provider di posta disponga di diversi server di posta: è necessario creare diversi record MX. Consulta la nostra guida [Aggiungere un record MX alla configurazione di un dominio](../mail-mutualise-guide-de-configuration-mx-avec-zone-dns-ovh/).

> [!warning]
>
> In generale, ti consigliamo di utilizzare uno o più server di uno stesso provider email nella tua zona DNS.
> Infatti, se disponi già di servizi email presso un altro provider e aggiungi contemporaneamente (senza sostituire) i server email del tuo nuovo provider, rischi di ricevere casualmente le tue email presso uno dei tuoi due provider.
> 

- **SPF** (**S**ender **P**olicy **F**ramework): Consente di evitare potenziali usurpazioni di identità sugli indirizzi email che utilizzano il tuo dominio (*spoofing*). Ad esempio, il record `v=spf1 include:mx.ovh.com ~all` indica che solo i server di invio associati alla tua offerta mail OVHcloud possono essere considerati legittimi dal server di ricezione. Puoi inserire questo record tramite un record TXT o il nostro sistema di configurazione automatica. Per saperne di più, consulta la guida [Aggiungere un record SPF alla configurazione di un dominio](../le-champ-spf/).

- **DKIM** (**D**omain**K**eys **I**dentified **M**ail): Consente di verificare l'autenticità del dominio del mittente e garantire l'integrità dell'email inviata. Il record DKIM si presenta sotto forma di una chiave composta da diversi caratteri. La chiave DKIM è fornita dal tuo provider di posta (se questa funzionalità è proposta da quest'ultimo), è possibile inserirla in un record TXT.

- **DMARC** (**D**omain-based **M**essage **A**uthentication, **R**eporting and **C**onformance): Contribuisce all'autenticazione delle email in associazione con i metodi SPF e/o DKIM. Questo valore ti verrà dato dal tuo provider email (se questa funzionalità è proposta da quest'ultimo), sarà associato almeno a un record SPF o DKIM.

#### Registrazioni estese

- **TXT** (**T**e**XT**): Consente di aggiungere il valore che preferisci, in formato testuale, alla zona DNS del tuo dominio. Questo record viene spesso utilizzato durante il processo di verifica/convalida o di sicurezza.

> [!warning]
> 
> La registrazione TXT è limitata a 255 caratteri. In alcuni casi è possibile suddividere il valore in più record. Quando ti viene chiesto di inserire un valore superiore alla quota di 255 caratteri, contatta il tuo provider.
> 
> Questo limite non è tuttavia esistente se passi per la funzionalità "Utilizza l'editor di testo" [descritta di seguito](#txtmod) in questa guida (per gli utenti esperti).
> 

- **SRV** (**S**e**RV**ice resource): Consente di indicare l’indirizzo di un server che gestisce un servizio. Ad esempio, può indicare l'indirizzo di un server SIP o quello di un server che permette la configurazione automatica di un client di posta.

- **CAA** (**C**ertification **A**uthority **A**uthorisation): Consente di elencare le autorità di certificazione autorizzate a fornire certificati SSL per un dominio.

> [!warning]
> 
> Se utilizzi un certificato SSL Let's Encrypt su un hosting condiviso OVHcloud e utilizzi un record CAA, quest'ultimo impedirà la rigenerazione del certificato SSL Let's Encrypt.
> 


- **NAPTR** (**N**ame **A**uthority **P**oint**T**e**R**): Utilizzato in telecomunicazione per indirizzare una richiesta emessa da un terminale mobile verso un server. Un record SRV può essere associato per generare in modo dinamico gli URI (Uniform Resource Identifier) di destinazione.

- **LOC** (**LOC**ation): Utilizzato per fornire informazioni sulla posizione geografica (in particolare latitudine, longitudine e altitudine).

- **SSHFP** (**S**ecure **SH**ell **F**inger**P**rint): Utilizzato per inserire l'impronta di una chiave pubblica SSH.

- **TLSA** (**T**ransport **L**ayer **S**ecurity **A**uthentication): Utilizzato per inserire l'impronta di un certificato SSL/TLS.

### Modifica la zona DNS OVHcloud del dominio

Per modificare la zona DNS di un dominio è possibile aggiungere, modificare o rimuovere un record DNS. in due modi diversi:

#### Modifica manualmente la zona in modalità testuale <a name="txtmod"></a>

> [!warning]
> 
> Solo per gli utenti esperti. Presta particolare attenzione alla sintassi durante le modifiche.
> 

Nella scheda `Zona DNS`{.action}, clicca su `Utilizza l'editor di testo`{.action} e segui gli step.

#### Utilizza i nostri assistenti di configurazione

Questa guida descrive la procedura relativa alla configurazione guidata.

> [!primary]
>
> Recupera le informazioni da modificare nella tua zona DNS OVHcloud. Se effettui questa modifica su richiesta di un provider di servizi, questi deve comunicarti l'elenco degli elementi da modificare.
>

#### Aggiungi un nuovo record DNS

Per aggiungere un nuovo record DNS, dalla scheda `Zona DNS`{.action} del tuo dominio, clicca sul pulsante `Aggiungi un record`{.action} a destra della tabella. Seleziona il tipo di record DNS e segui gli step.

Ti consigliamo di verificare se questo record non esiste già e non punta verso un bersaglio diverso. filtrando il contenuto della tabella per tipo di record o dominio. Se il record esiste già, ti consigliamo di modificarlo seguendo la procedura descritta di seguito.

![dnszone](images/edit-dns-zone-ovh-add-entry.png){.thumbnail}

> Quando la destinazione del tuo record è un URL, ricordati di pulire il link. In effetti, se non lo fai, il tuo dominio verrà automaticamente aggiunto alla fine della tua destinazione.
>
> Esempio: vuoi creare un record CNAME di *test.mydomain.ovh* verso *mydomain.ovh*.
>
> Dovrai avere come bersaglio *mydomain.ovh.* e non *mydomain.ovh* senza il "." alla fine.

#### Modifica un record DNS esistente 

Per modificare un record DNS, sempre dalla scheda `Zona DNS`{.action} del tuo Spazio Cliente, clicca sull'icona `...`{.action} nella tabella a destra del record selezionato. Clicca su Modifica `il record`{.action} e segui gli step.

![dnszone](images/edit-dns-zone-ovh-modify-entry.png){.thumbnail}

#### Elimina un record DNS

Per eliminare un record DNS, sempre dalla scheda `Zona DNS`{.action} del tuo Spazio Cliente, clicca sull'icona `...`{.action} nella tabella a destra del record selezionato. Clicca su `Elimina il record`{.action} e segui gli step.

Per eliminare più record in una sola volta, seleziona la casella sinistra della tabella e clicca sul pulsante `Elimina`{.action}.

![dnszone](images/edit-dns-zone-ovh-delete-entry.png){.thumbnail}

#### Reinizializza la zona DNS

Reinizializza la tua zona DNS ti permette di:

- ritornare a una configurazione minima con i record OVHcloud di default.
- ritornare a una zona DNS vuota (ad eccezione dei record NS) per definire una configurazione manuale successiva.

Nella scheda `Zona DNS`{.action}, clicca su `Reimposta la tua zona DNS`{.action} e segui gli step.

![dnszone](images/edit-dns-zone-ovh-reset.png){.thumbnail}

Puoi scegliere tra:

- `Sì, voglio reinizializzare la mia zona DNS con il numero minimo` di record Questa opzione ti permette di reindirizzare il tuo dominio e il tuo servizio di posta verso:
    - uno dei tuoi servizi Web Cloud disponibili nello Spazio Cliente OVHcloud.
    - il servizio di reindirizzamento OVHcloud, accessibile dalla scheda `Reindirizzamento`{.action} del tuo dominio nelle sezioni `Domini`{.action} ed `Email`{.action}.
    - la funzione `Personalizzata`. Inserisci il record `A` e/o `MX` che preferisci.
- `No, ma voglio reinizializzare la mia zona DNS`. La tua zona DNS sarà vuota, ad eccezione dei record NS che saranno automaticamente associati ai server DNS OVHcloud della tua zona DNS.

> [!primary]
>
> Prima di reinizializzare la tua zona DNS, assicurati che il tuo dominio non sia associato a servizi in fase di utilizzo, come siti Web o indirizzi email.
>

### Tempo di propagazione

Una volta modificata la zona DNS del dominio, la propagazione delle modifiche potrebbe richiedere fino a 24 ore.

Per ridurre il tempo di propagazione per le prossime modifiche della zona DNS OVHcloud, è possibile modificarlo in una certa misura adattando il TTL (*Time To Live*) che si applicherà a tutti i record della zona DNS.
Clicca sulla scheda `Zona DNS`{.action} dello Spazio Cliente, clicca sul pulsante `TTL di default`{.action} e segui gli step. 

È inoltre possibile modificare il TTL di un record DNS. ma questa operazione può essere effettuata solo su una registrazione alla volta, modificandola o aggiungendola.

### Caso particolare di utilizzo: utilizzo dei record CNAME <a name="techusecase"></a>

Alcuni utenti creano zone DNS direttamente per il sottodominio di un dominio (ad esempio, *sottodominio-con-propria-zona-DNS.mydomain.ovh*). In questo caso, si applica anche la regola di cui [sopra](#cname). 

La zona DNS è stata creata per il sottodominio (nel nostro esempio, *sottodominio-con-propria-zona-DNS.mydomain.ovh*) e viene quindi considerato un dominio a tutti gli effetti nella sua zona DNS.

Per questo motivo e in questo caso specifico, non è possibile creare un record CNAME per *sottodominio-con-propria-zona-DNS.mydomain.ovh* nella zona DNS che hai creato per quest'ultimo. È possibile creare record CNAME come *sottodominio.sottodominio-con-propria-zona-DNS.mydomain.ovh* o *xxx.sottodominio-con-propria-zona-DNS.mydomain.ovh*.

## Per saperne di più

[Modificare i server DNS di un dominio OVHcloud](../web_hosting_gestisci_il_tuo_server_dns/){.external}

[Aggiungere un record SPF alla configurazione di un dominio](../hosting_condiviso_il_record_spf/){.external}

[Proteggere il dominio dal Cache Poisoning con DNSSEC](../proteggi_il_tuo_dominio_con_dnssec/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>
