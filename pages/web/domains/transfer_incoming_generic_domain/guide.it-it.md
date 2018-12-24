---
title: 'Trasferire un dominio generico in OVH'
slug: trasferire-un-dominio-generico-in-ovh
excerpt: 'Come avviare la procedura di trasferimento di un dominio generico verso OVH'
section: Trasferimenti
---

**Ultimo aggiornamento: 13/12/2018**

## Obiettivo

L’operazione di trasferimento consente di spostare un dominio da un Registrar a un altro. Se hai scelto OVH come nuovo provider, le fasi del processo possono richiedere da uno a dieci giorni.

**Questa guida ti mostra la procedura da seguire per effettuare il trasferimento di un dominio generico in OVH.**

## Prerequisiti

- Disporre di un dominio generico registrato presso un altro provider
- Essere abilitato a richiedere il trasferimento di un dominio. Il proprietario del dominio e coloro che lo gestiscono devono essere stati informati della richiesta di trasferimento 
- Essere in possesso del codice di trasferimento o avere la possibilità di recuperarlo
- Il dominio deve essere stato creato da più di 60 giorni
- Il dominio non deve essere stato trasferito o aver cambiato proprietario negli ultimi 60 giorni
- Il dominio non deve risultare bloccato

## Procedura

Se hai registrato il tuo dominio presso un provider esterno e vuoi spostarlo in OVH, è necessario avviare la procedura di trasferimento.

Questa operazione coinvolge diversi soggetti: OVH, il tuo attuale Registrar e terze parti. La tabella qui sotto riassume le fasi del processo di trasferimento:

|Step|Descrizione|Soggetti coinvolti|Dove|Tempistiche|
|---|---|---|---|---|
|1|Verifica delle informazioni associate al dominio|L'amministratore del dominio|Presso il Registrar attuale|In base alla tua richiesta|
|2|Sblocco del dominio e recupero del codice di trasferimento|L'amministratore del dominio, con il consenso del proprietario|Presso il Registrar attuale|In base alla tua richiesta|
|3|Richiesta di trasferimento del dominio|Chiunque se in possesso del codice di trasferimento, sempre con il consenso del proprietario|Presso il nuovo Registrar (ad esempio, OVH)|In base alla tua richiesta|
|4|Prima fase di conferma del trasferimento|Il proprietario del dominio e l’amministratore dichiarato presso il nuovo Registrar|Tramite un’email ricevuta|Massimo cinque giorni|
|5|Seconda fase di conferma del trasferimento|Il Registrar attuale|Tramite una richiesta da parte del Registro che gestisce l’estensione del dominio|Massimo cinque giorni|

> [!warning]
>
> Questa procedura è valida per la maggior parte dei casi di trasferimento ma può variare in base all’estensione del dominio. Pertanto ti suggeriamo di verificare le informazioni presenti nella scheda tecnica dell’estensione corrispondente cliccando su questo link: <https://www.ovh.it/domini/tariffe/>
>

### Step 1: verifica le informazioni associate al dominio

**Come prima cosa, è importante accertarsi che i dati associati al dominio siano aggiornati.** Dopo l’entrata in vigore del *GDPR*, soltanto alcuni dati sono visibili nel *Whois*. Puoi consultare le informazioni relative al tuo dominio presso il tuo attuale Registrar.

- **Se sono corrette**, passa allo step successivo

- **Se non sono corrette o visibili**, contatta il tuo Registrar per verificarle e/o modificarle

> [!primary]
>
> Se non ricordi il nome del tuo provider, è possibile recuperare l’informazione nel risultato della ricerca eseguita con il tool [Whois](https://www.ovh.it/supporto//strumenti/check_whois.pl){.external}, in corrispondenza della voce “Registrar”.
>

### Step 2: sblocca il dominio e recupera il codice di trasferimento

Una volta verificate le informazioni è necessario sbloccare il dominio, operazione che può essere effettuata esclusivamente presso il Registrar attuale. Per conoscere la corretta procedura da seguire, ti consigliamo di contattare il tuo provider.

Una volta sbloccato il dominio, il Registrar deve comunicarti il codice di trasferimento associato (chiamato in diversi modi: **codice di trasferimento**, **AuthCode**, **AuthInfo** o **codice EPP**).

Ti ricordiamo che in questa fase OVH non è ancora il tuo Registrar e che quindi non è in grado di sbloccare il dominio né di recuperare il suo codice di trasferimento. 

> [!warning]
>
> A partire dallo sblocco del tuo dominio, hai sette giorni di tempo per avviare il trasferimento presso OVH. In caso di mancato invio della richiesta entro questo termine, il dominio sarà bloccato automaticamente.
>

### Step 3: richiedi di trasferimento del dominio

Ora che il tuo dominio è sbloccato e che disponi del codice necessario, è possibile richiedere il trasferimento del tuo dominio in OVH tramite il nostro [sito Web](https://www.ovh.it/){.external}. Inserisci il nome del tuo dominio e segui la procedura d’ordine.

Quando ti viene chiesto di fornire il codice di trasferimento, digitalo nella casella accanto al tuo dominio o, se ancora non ne sei in possesso, seleziona la casella `Indica il codice di autorizzazione successivamente nel tuo Spazio Cliente OVH`{.action}. Prima di proseguire, assicurati di essere in grado di recuperare questo codice.

Gli step successivi ti permettono di completare l’ordine scegliendo un piano di [hosting Web](https://www.ovh.it/hosting-web/){.external}, altri servizi OVH o server DNS. Le soluzioni proposte possono essere utili se il trasferimento del tuo dominio prevede anche un progetto di migrazione dei tuoi servizi (sito e email) in OVH. La guida [Migrare un sito e un servizio di posta in OVH](https://docs.ovh.com/it/hosting/migrare-un-sito-in-ovh/){.external} fornisce una panoramica della procedura da seguire per effettuare questa operazione.

> [!warning]
>
> Durante l’ordine, ti invitiamo a prestare particolare attenzione ai seguenti elementi:
>
> - **i dati del proprietario del dominio**: con l’entrata in vigore del GDPR, assicurati che le informazioni del proprietario inserite siano identiche a quelle registrate presso il tuo attuale Registrar per evitare qualsiasi sospetto di furto di dominio.
>
> - **la scelta dei server DNS del dominio**: se utilizzi il tuo dominio per un sito o un servizio di posta, assicurati di specificare i server DNS attualmente in uso per evitare un’interruzione del servizio.  
>

Una volta visualizzato il buono d’ordine, effettua il saldo. Alla ricezione del pagamento, la procedura di trasferimento verrà avviata. Da questo momento, lo stato di avanzamento della procedura sarà disponibile nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} > sezione `Domini`{.action} > `Operazioni in corso`{.action}.

### Step 4: prima fase di conferma del trasferimento

Adesso che l’operazione è in corso, sono necessarie due fasi affinché vada a buon fine. Inizia con l’avvio della procedura di trasferimento e richiede al massimo cinque giorni. Per convalidare questo primo step, vengono inviate due richieste di conferma.  

|Chi riceve una richiesta di conferma|Dove viene inviata la richiesta di conferma|
|---|---|
|Il proprietario del dominio|All’indirizzo email del proprietario inserito nel database *Whois* se disponibile. In caso contrario, all’indirizzo email del proprietario indicato al momento dell’ordine presso OVH.|
|L'amministratore indicato durante l’ordine OVH|All'indirizzo email inserito nel profilo dell’amministratore in OVH|

La conferma da parte dei due contatti viene effettuata da un’interfaccia OVH, raggiungibile tramite un link presente nelle email inviate alle due parti.  

![dominio](images/domaintransfer_gTLD_validation.png){.thumbnail}

Sono possibili diversi scenari di risposta:

|Scenari possibili|Eventi successivi|
|---|---|
|Conferma del proprietario e dell’amministratore|Passaggio al secondo step di conferma entro massimo 24 ore|
|Conferma da parte di un solo contatto e una richiesta senza risposta|Passaggio al secondo step di conferma al termine di un periodo di cinque giorni|
|Nessuna risposta alle due richieste di conferma|Passaggio al secondo step di conferma al termine di un periodo di cinque giorni|
|Rifiuto da parte di uno dei contatti| Il trasferimento viene sospeso a partire dalla ricezione della notifica del rifiuto|

In caso di sospensione della richiesta di trasferimento, assicurati che i contatti siano in accordo relativamente all’operazione e che i loro indirizzi email siano aggiornati. Il trasferimento può essere riavviato dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Domini`{.action} > `Operazioni in corso`{.action}.

### Step 5: seconda fase di conferma del trasferimento

Una volta iniziato il secondo step, il Registrar attuale (non ancora OVH) riceve una richiesta di conferma. Sono possibili diversi scenari di risposta:

|Scenari possibili|Eventi successivi|
|---|---|
|Conferma da parte del provider attuale|Il trasferimento viene effettuato entro massimo 24 ore|
|Nessuna risposta da parte del provider attuale|Il trasferimento viene effettuato al termine di un periodo di cinque giorni|
|Rifiuto da parte del provider attuale| Il trasferimento viene sospeso a partire dalla ricezione della notifica del rifiuto|

In quest’ultimo caso, contatta il tuo provider per conoscerne le motivazioni del rifiuto. Il trasferimento potrà essere riavviato dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external} > sezione `Domini`{.action} > `Operazioni in corso`{.action}.

### Step 6: gestisci il tuo dominio

Una volta completata la procedura, il tuo dominio è disponibile nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Una volta connesso, clicca su `Domini`{.action} nel menu di sinistra e poi seleziona il tuo dominio.

## Per saperne di più

[Migrare un sito e un servizio di posta in OVH](https://docs.ovh.com/it/hosting/migrare-un-sito-in-ovh/){.external}

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}