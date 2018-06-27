---
title: 'Trasferire un dominio generico in OVH'
slug: trasferire-un-dominio-generico-in-ovh
excerpt: 'Come avviare la procedura di trasferimento di un dominio generico verso OVH'
section: Trasferimenti
---

**Ultimo aggiornamento: 27/06/2018**

## Obiettivo

L’operazione di trasferimento consente di spostare un dominio da un Registrar a un altro. Se hai scelto OVH come nuovo provider, le fasi del processo possono richiedere da uno a dieci giorni.

**Questa guida ti mostra la procedura da seguire per effettuare il trasferimento di un dominio generico in OVH.**

## Prerequisiti

- Disporre di un dominio generico (ad esempio .com, .net, .info) registrato presso un altro provider
- Essere abilitato a richiedere il trasferimento di un dominio
- Il proprietario del dominio e coloro che lo gestiscono devono essere stati informati della richiesta di trasferimento
- Il dominio deve essere stato creato da più di 61 giorni
- Il dominio non deve essere stato trasferito o aver cambiato proprietario negli ultimi 61 giorni
- Il dominio non deve risultare bloccato
- Essere in possesso del codice di trasferimento o avere la possibilità di recuperarlo
- Gli indirizzi email dei contatti presenti nel database *Whois* devono essere validi

## Procedura

### Step 1: verifica le informazioni associate al dominio

Se hai registrato il tuo dominio presso un provider esterno e vuoi spostarlo in OVH, è necessario avviare la procedura di trasferimento. Questa operazione coinvolge diversi soggetti: OVH, il tuo attuale Registrar e terze parti. La varie fasi della procedura prevedono diverse conferme, **motivo per cui è importante accertarsi che i dati associati al dominio siano aggiornati.**

Per effettuare questa verifica è possibile utilizzare il tool *Whois*, disponibile alla pagina [https://www.ovh.it/cgi-bin/whois.pl](https://www.ovh.it/cgi-bin/whois.pl){.external}. Il risultato ottenuto mostrerà diverse informazioni:

- **se sono corrette**, è possibile sbloccare il dominio presso l’attuale Registrar

- **se non sono corrette o visibili**, contatta il tuo Registrar per verificarle e/o modificarle

> [!primary]
>
> Se non ricordi il nome del tuo provider, è possibile recuperare l’informazione nel risultato della ricerca eseguita con il [tool Whois](https://www.ovh.it/cgi-bin/whois.pl){.external}, in corrispondenza della voce “Registrar”.
>

La tabella qui sotto riassume le fasi del processo di trasferimento:

|Step|Descrizione|Soggetti coinvolti|Dove|Tempistiche| 
|---|---|---|---|---| 
|1|Sblocco del dominio|L'amministratore del dominio, con il consenso del proprietario|Presso il Registrar attuale|In base alla tua richiesta| 
|2|Recupero del codice di trasferimento|L’amministratore del dominio, con il consenso del proprietario|Presso il Registrar attuale|In base alla tua richiesta| 
|3|Richiesta di trasferimento del dominio|Chiunque se in possesso del codice di trasferimento, sempre con il consenso del proprietario|Presso il nuovo Registrar (ad esempio, OVH)|In base alla tua richiesta| 
|4|Prima fase di conferma del trasferimento|Il proprietario del dominio e l’amministratore dichiarato presso il nuovo Registrar|Tramite un’email ricevuta|Massimo cinque giorni| 
|5|Seconda fase di conferma del trasferimento|Il Registrar attuale|Tramite richiesta da parte del Registro che gestisce l’estensione del dominio|Massimo cinque giorni|

### Step 2: sblocca il dominio

Una volta verificate le informazioni è necessario sbloccare il dominio, operazione che può essere effettuata esclusivamente presso il Registrar attuale. Per conoscere la corretta procedura da seguire, ti consigliamo di contattare il tuo provider.

Una volta sbloccato il dominio, il Registrar deve comunicarti il codice di trasferimento associato (chiamato in diversi modi: **codice di trasferimento**, **AuthCode**, **AuthInfo** o **codice EPP**).

Ti ricordiamo che in questa fase OVH non è ancora il tuo Registrar e che quindi non è in grado di sbloccare il dominio né di recuperare il suo codice di trasferimento. 

> [!warning]
>
> A partire dallo sblocco del dominio, hai sette giorni di tempo per avviare il trasferimento presso OVH. In caso di mancato invio della richiesta entro questo termine, il dominio sarà bloccato automaticamente.
>

### Step 3: richiedi il trasferimento 

Ora che il tuo dominio è sbloccato e che disponi del codice necessario, è possibile richiedere il trasferimento del tuo dominio in OVH tramite il nostro [sito Web](https://www.ovh.it/){.external}.

Inserisci il nome del tuo dominio e segui la procedura d‘ordine. Quando ti viene chiesto di fornire il codice di trasferimento, digitalo nella casella accanto al tuo dominio o, se ancora non ne sei in possesso, seleziona la casella `Indica il codice di autorizzazione successivamente nel tuo Spazio Cliente OVH`{.action}. Prima di continuare con la procedura, ti consigliamo di assicurarti di essere in grado di recuperare il codice. 

Gli step successivi ti permettono di completare l’ordine scegliendo un [piano di hosting Web](https://www.ovh.it/hosting-web/){.external}, altri servizi OVH o server DNS. Le soluzioni proposte possono essere utili se il trasferimento del tuo dominio prevede anche un progetto di migrazione dei tuoi servizi (sito e email) in OVH. La guida [Migrare un sito e un servizio di posta in OVH](https://docs.ovh.com/it/hosting/migrare-un-sito-in-ovh/){.external} fornisce una panoramica della procedura da seguire per effettuare questa operazione.

> [!warning]
>
> Durante l’ordine, ti invitiamo a prestare particolare attenzione alla scelta dei server DNS. Se utilizzi il tuo dominio per un sito o per un servizio di posta, assicurati di specificare i server DNS attualmente in uso.
>

Una volta visualizzato il buono d’ordine, effettua il saldo. Alla ricezione del pagamento, la procedura di trasferimento verrà avviata. In base all’estensione del dominio generico, lo stato di avanzamento della procedura sarà disponibile nel tuo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

### Step 4: conferma il trasferimento

Adesso che l’operazione è in corso, sono necessari due step di conferma affinché vada a buon fine.

#### Prima fase di conferma

Inizia con l’avvio della procedura di trasferimento e richiede al massimo cinque giorni. Per convalidare questo primo step, vengono inviate due richieste di conferma.

|Chi riceve una richiesta di conferma|Dove viene inviata la richiesta di confema| 
|---|---| 
|Il proprietario del dominio|All’indirizzo email del proprietario inserito nel database *Whois*| 
|L'amministratore indicato durante l’ordine OVH|All'indirizzo email inserito nel profilo dell’amministratore in OVH|

Sono possibili diversi scenari di risposta:

|Scenari possibili|Eventi successivi| 
|---|---| 
|Conferma del proprietario e dell’amministratore|Passaggio al secondo step di conferma entro massimo 24 ore| 
|Conferma da parte di un solo contatto e una richiesta senza risposta|Passaggio al secondo step di conferma al termine di un periodo di cinque giorni| 
|Nessuna risposta alle due richieste di conferma|La richiesta di trasferimento viene sospesa al termine di un periodo di cinque giorni| 
|Rifiuto da parte di uno dei contatti|Il trasferimento viene sospeso a partire dalla ricezione della notifica del rifiuto|

La conferma da parte dei due contatti viene effettuata da un’interfaccia OVH, raggiungibile tramite un link presente nelle email inviate alle due parti. Questa interfaccia consente anche di convalidare o modificare le informazioni visualizzate.

![domain](images/domaintransfer_gTLD_validation.png){.thumbnail}

In caso di sospensione della richiesta di trasferimento, assicurati che i contatti siano in accordo relativamente all’operazione e che i loro indirizzi email siano aggiornati. Il trasferimento può essere riavviato dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Domini`{.action} > `Operazioni in corso`{.action}.

#### Seconda fase di conferma

Una volta iniziato il secondo step, il Registrar attuale (non ancora OVH) riceve una richiesta di conferma. Sono possibili diversi scenari di risposta:

|Scenari possibili|Eventi successivi| 
|---|---| 
|Conferma da parte del provider attuale|Il trasferimento viene effettuato entro massimo 24 ore| 
|Nessuna risposta da parte del provider attuale|Il trasferimento viene effettuato al termine di un periodo di cinque giorni| 
|Rifiuto da parte del provider attuale|Il trasferimento viene sospeso a partire dalla ricezione della notifica del rifiuto|

In quest’ultimo caso, contatta il tuo provider per conoscere le motivazioni del rifiuto. Il trasferimento potrà essere riavviato dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Domini`{.action} > `Operazioni in corso`{.action}.

### Step 5: gestisci il tuo dominio

Una volta completata la procedura, il tuo dominio è disponibile nello [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}.

Per i domini generici che prevedono il pagamento dell’operazione di trasferimento, alla data di scadenza OVH accredita un anno aggiuntivo.

## Per saperne di più

[Migrare un sito e un servizio di posta in OVH](https://docs.ovh.com/it/hosting/migrare-un-sito-in-ovh/){.external}.

Contatta la nostra Community di utenti all’indirizzo [https://www.ovh.it/community/](https://www.ovh.it/community/){.external}.