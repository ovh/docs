---
title: 'Trasferire un dominio in OVHcloud'
slug: trasferire-un-dominio-generico-in-ovh
excerpt: 'Come avviare la procedura di trasferimento di un dominio generico verso OVHcloud'
section: Trasferimento
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 20/10/2022**

## Obiettivo

Il tuo dominio è registrato presso un provider esterno? è necessario avviare la procedura di trasferimento.

L’operazione di trasferimento consente di spostare un dominio da un Registrar a un altro. Per trasferire il tuo dominio in OVHcloud è possibile creare un ordine. le fasi del processo possono richiedere da uno a dieci giorni.

**Questa guida ti mostra come trasferire un dominio generico in OVHcloud.**

> [!warning]
>
> Se il dominio in corso di modifica è registrato in OVHcloud, il trasferimento in entrata del dominio non è la procedura appropriata. Questa procedura si applica esclusivamente alla modifica del dominio registrato (OVHcloud).
>
> Per trasferire la gestione del tuo dominio verso un altro account cliente OVHcloud, la modalità corretta è una *modifica dei contatti*. La procedura è descritta in [guida](https://docs.ovh.com/it/customer/gestisci_i_tuoi_contatti/).
>
> Se è necessario modificare il **proprietario** del dominio, è necessario farlo **prima** di modificare i contatti del dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di proprietario dei domini](https://docs.ovh.com/it/domains/cambiare_proprietario_dominio/).
>

## Prerequisiti

- Il dominio è registrato presso un altro provider.
- Il dominio esiste da più di 60 giorni.
- Il dominio non è stato trasferito o non ha cambiato proprietario negli ultimi 60 giorni.
- Lo stato del dominio è "OK" o "Trasferibile".
- Il dominio non è scaduto e ha una data di scadenza che permette di completare il processo di trasferimento entro i termini (consigliato: più di 60 giorni).
- Essere autorizzato a sbloccare il dominio
- Essere in possesso del codice di trasferimento o avere la possibilità di recuperarlo
- Essere abilitato a richiedere il trasferimento del dominio
- Aver avvisato il proprietario del dominio e/o i suoi amministratori della richiesta di trasferimento

## Procedura

La procedura di trasferimento prevede diversi step, tra cui l'avvio di contatti con diverse entità. Il tuo attuale Registrar, OVHcloud e altre parti. La tabella qui sotto riassume le diverse fasi del processo:

|Step|Descrizione|Soggetti coinvolti|Dove|Campo obbligatorio|
|---|---|---|---|---|
|1|Verifica delle informazioni associate al dominio|L'amministratore del dominio|Il Registrar attuale|In base alle azioni effettuate|
|2|Sblocco del dominio e recupero del codice di trasferimento|L'amministratore del dominio, con l'autorizzazione del proprietario|Il Registrar attuale|In base alle azioni effettuate|
|3|Trasferimento di un dominio|Chiunque sia in possesso del codice di trasferimento, anche con il permesso del proprietario|Con il nuovo Registrar (ad esempio, OVHcloud)|In base alle azioni effettuate|
|4|Conferma del trasferimento|Il Registrar attuale|Tramite una richiesta da parte del Registro che gestisce l’estensione del dominio|Massimo cinque giorni|

> [!warning]
>
> La procedura esatta di trasferimento del dominio può variare, in particolare per alcune TLD del codice del paese (ccTLD, quali .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, ecc.) e per alcune TLD speciali (.am, .fm, ecc.). In base all'estensione del tuo dominio, potrebbero essere necessari requisiti aggiuntivi. Ti consigliamo di verificare le informazioni mostrate per l'estensione in questione dal nostro sito Web: <https://www.ovhcloud.com/it/domains/tld/>.
>

### Step 1: verifica le informazioni del proprietario del dominio

**Come prima cosa, è importante accertarsi che i dati associati al dominio siano aggiornati.** Dall'entrata in vigore del GDPR, i dati visibili nel ["Whois"](https://www.ovh.it/supporto/strumenti/check_whois.pl) sono diventati molto limitati. Puoi consultare le informazioni relative al tuo dominio presso il tuo attuale Registrar.

- **Se le informazioni sono corrette: passa allo step successivo di questa guida.**

- **Se le informazioni sono errate o invisibili: contatta il tuo attuale Registrar per verificarlo e/o modificarlo.**

> [!primary]
>
> Se non sai quale Registrar è responsabile del tuo dominio, la riga "Registrar", che compare nel risultato della ricerca del [tool Whois](https://www.ovh.it/supporto/strumenti/check_whois.pl){.external}, può fornirti informazioni sulla sua identità.
>

### Step 2: sblocca il dominio e recupera il codice di trasferimento

Una volta verificate le informazioni è necessario sbloccare il dominio, operazione che può essere effettuata esclusivamente presso il Registrar attuale. Per conoscere la corretta procedura da seguire, ti consigliamo di contattare il tuo provider.

Una volta sbloccato il dominio, il Registrar deve comunicarti il codice di trasferimento associato Questo codice è talvolta indicato con diversi nomi, come: "Codice di trasferimento", "Codice Auth", "Informazioni Auth" o "Codice EPP".

Ti ricordiamo che, non essendo OVHcloud il Registrar del tuo dominio al momento dell'avvio della procedura di trasferimento, non è possibile sbloccare il dominio o fornire il codice di trasferimento.

> [!warning]
>
> Una volta sbloccato il dominio, puoi effettuare il trasferimento in OVHcloud entro sette (7) giorni. Se non effettui la modifica del Registrar, il dominio verrà automaticamente bloccato dopo questo periodo.
>

### Step 3: richiedere il trasferimento di un dominio in OVHcloud

Una volta sbloccato il dominio e ottenuto il codice, è possibile ordinarne il trasferimento in OVHcloud dal [nostro sito](https://www.ovhcloud.com/it/domains/). Inserisci il nome del tuo dominio e segui la procedura d’ordine.

Quando ti viene chiesto di fornire il codice di trasferimento, digitalo nella casella accanto al tuo dominio Se non disponi ancora del codice di trasferimento, seleziona la casella `Inserisci il codice di trasferimento successivamente`{.action}. Prima di proseguire, assicurati di essere in grado di recuperare questo codice. Ricordati che il trasferimento non verrà avviato fino a quando non verrà fornito un codice valido.

È inoltre possibile completare l'ordine con un [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} e altre soluzioni OVHcloud. Per effettuare questa operazione è necessario migrare i servizi verso OVHcloud. Questa guida, intitolata "[Migrare un sito e un servizio di posta in OVHcloud](../../hosting/migrare-un-sito-in-ovh/)", fornisce alcune istruzioni su come procedere.

> [!warning]
>
> Durante il processo di ordine, ti consigliamo di considerare questi aspetti:
>
> - **dati sul proprietario del dominio.** In particolare dall'entrata in vigore del GDPR, è essenziale assicurarsi che le informazioni sul proprietario del dominio corrispondano a quelle archiviate dal tuo attuale Registrar. per evitare sospetti di furto di domini;
>
> - **inserimento dei server DNS per il tuo dominio.** Se utilizzi il tuo dominio per mantenere un sito Internet o un servizio di posta online, è necessario specificare i server DNS per evitare interruzioni di servizio.
>

#### Gestione del proprietario e dettagli dei server DNS

- Cliccando su `Modifica la configurazione`{.action} in questo step, puoi inserire i nomi dei server DNS che il dominio sta utilizzando. In questo modo, il dominio sarà già associato a questi server DNS nella configurazione OVHcloud.

- Se continui senza effettuare questa operazione, il dominio verrà fornito sui server DNS OVHcloud con una nuova zona DNS. Una [modifica manuale della zona DNS](../web_hosting_modifica_la_tua_zona_dns/) può rendersi necessaria.

- In alcuni casi, la procedura di trasferimento può richiedere informazioni aggiuntive sul proprietario del dominio. Per aggiungere queste informazioni, clicca sull'opzione `Gestisci i contatti/il proprietario`{.action}.

![dominio](images/Order_summary.png){.thumbnail}

#### Stato del trasferimento dopo l'ordine

Una volta confermato l'ordine, riceverai un buono d'ordine. La procedura di trasferimento inizierà solo dopo aver ricevuto il pagamento. Una volta completata l'operazione, è possibile seguire lo stato di avanzamento del processo dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Per monitorare lo stato di avanzamento dell'operazione, clicca su `Domini`{.action} e poi `Operazioni in corso`{.action}.

> [!primary]
>
> Se il codice di trasferimento non è stato inserito durante l'ordine, inseriscilo nella finestra `Operazioni in corso`{.action} e infine confermare il trasferimento.

### Step 4: conferma del trasferimento da parte dell'attuale Registrar

Una volta convalidato l'ordine e il codice di trasferimento, il Registrar attuale (non ancora OVHcloud) riceverà una richiesta di conferma. Sono possibili diversi scenari di risposta:

|Scenario possibile|I Risultati|
|---|---|
|Conferma del provider attuale|Il trasferimento viene effettuato entro **24 ore**.|
|Nessuna risposta da parte del provider attuale|Il trasferimento è completato dopo un periodo di **5 giorni**.|
|Rifiuto da parte del provider attuale.|La procedura di trasferimento viene **annullata** non appena viene emesso il rifiuto.|

Se il provider attuale emette un rifiuto, contatta il provider per sapere perché l'ha rifiutata.

Il trasferimento può essere riavviato dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona `Web Cloud`{.action} e accedi alla sezione `Domini`{.action}, poi clicca su `Operazioni in corso`{.action}.

### Step 5: gestire il dominio con OVHcloud

Una volta completata la procedura, è possibile gestire il dominio dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}. Seleziona `Web Cloud`{.action}, clicca su `Domini`{.action} nel menu a sinistra e poi clicca sul dominio interessato.

## Per saperne di più

[Migrazione del tuo sito Web e delle tue email verso OVHcloud](../../hosting/migrare-un-sito-in-ovh/){.external}

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
