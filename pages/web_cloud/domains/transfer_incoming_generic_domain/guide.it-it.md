---
title: 'Trasferire un nome di dominio in OVHcloud'
excerpt: 'Questa guida ti mostra come avviare la procedura di trasferimento di un nome di dominio generico verso OVHcloud'
updated: 2026-03-27
---

<iframe class="video" width="560" height="315" src="https://www.youtube-nocookie.com/embed/MILAnKdjHns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Obiettivo

Il tuo nome di dominio è registrato in un **Registrar** e vuoi trasferirlo in OVHcloud? è possibile tramite una procedura di trasferimento.

Con il trasferimento del tuo nome di dominio, potrai cambiare da **Registrar** per questo. Per trasferire il tuo nome di dominio in OVHcloud è possibile creare un ordine. Questo processo richiede generalmente da uno a dieci giorni.

**Questa guida ti mostra come trasferire un nome di dominio generico in OVHcloud.**

> [!warning]
>
> Il *Registrar* di un nome di dominio rappresenta l'organizzazione/provider accreditata presso la quale il nome di dominio è registrato/sottoscritto da un privato, un'associazione o un'organizzazione. È presso lo stesso *Registrar* che rinnovi la sottoscrizione del tuo nome di dominio (generalmente una volta all'anno).
>
> Se OVHcloud è già il *Registrar* del tuo nome di dominio **prima** di avviare la procedura che seguirà, il *trasferimento in entrata del nome di dominio* non è la procedura appropriata. La procedura *trasferimento in entrata da un nome di dominio* si applica **solo** ai nomi di dominio registrati in un altro *Registrar* di OVHcloud.
>
> Per trasferire la gestione del tuo nome di dominio verso un altro account cliente OVHcloud, la modalità corretta è una *modifica dei contatti*. La procedura è descritta in [guida](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se è necessario modificare l'**intestatario** del nome di dominio, è necessario farlo **prima** di modificare i contatti del nome di dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di intestatario dei nomi di dominio](/pages/web_cloud/domains/trade_domain).
>
> Se, oltre al trasferimento del nome di dominio, vuoi anche migrare i servizi associati (sito Web, email, ecc...), prima di proseguire consulta la nostra guida "[Migrare il sito Web e i servizi associati in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
> Questa guida ti mostra come migrare tutti i tuoi servizi senza interruzioni di servizio.
>
> Se trasferisci il tuo nome di dominio senza trasferire gli altri servizi, assicurati di recuperare i server DNS attivi per il tuo nome di dominio presso il tuo **Registrar** attuale e di inserirli direttamente nello Step 3 di questa guida.
> In questo modo eviterai di interrompere l'associazione tra il tuo nome di dominio e i tuoi servizi esterni associati.
>

## Prerequisiti

- Il nome di dominio è registrato presso un altro provider.
- Il nome di dominio esiste da più di 60 giorni.
- Il nome di dominio non è stato trasferito o non ha cambiato intestatario negli ultimi 60 giorni.
- Lo stato del nome di dominio è "OK" o "Trasferibile".
- Il nome di dominio non è scaduto e ha una data di scadenza che permette di completare il processo di trasferimento entro i termini (consigliato: più di 60 giorni).
- Essere autorizzato a sbloccare il nome di dominio
- Essere in possesso del codice di trasferimento o avere la possibilità di recuperarlo
- Essere abilitato a richiedere il trasferimento del nome di dominio
- Aver avvisato l'intestatario del nome di dominio e/o i suoi amministratori della richiesta di trasferimento

<!-- CP-NAV-START:web-domains -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Domini](/links/control-panel/web-domains)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Domini`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-domains -->

## Procedura

> [!success]
>
> Per conoscere le condizioni tariffarie per il trasferimento di un nome di dominio in base alla sua estensione, inserisci il nome di dominio che vuoi trasferire sulla nostra pagina [www.ovhcloud.com/it/domains/tld/](/links/web/domains-tld) e segui gli step di questa guida.
>

La procedura di trasferimento prevede diversi step, tra cui l'avvio di contatti con diverse entità. Il tuo attuale Registrar, OVHcloud e altre parti. La tabella qui sotto riassume le diverse fasi del processo:

|Step|Descrizione|Soggetti coinvolti|Dove|Campo obbligatorio|
|---|---|---|---|---|
|[1](#step1)|[Verifica delle informazioni associate al nome di dominio](#step1)|L'amministratore del nome di dominio|Il Registrar attuale|In base alle azioni effettuate|
|[2](#step2)|[Sblocco del nome di dominio e recupero del codice di trasferimento](#step2)|L'amministratore del nome di dominio, con l'autorizzazione dell’intestatario|Il Registrar attuale|In base alle azioni effettuate|
|[3](#step3)|[Trasferimento di un nome di dominio](#step3)|Chiunque sia in possesso del codice di trasferimento, anche con il permesso dell’intestatario|Con il nuovo Registrar (ad esempio, OVHcloud)|In base alle azioni effettuate|
|[4](#step4)|[Conferma del trasferimento](#step4)|Il Registrar attuale|Tramite una richiesta da parte del Registro che gestisce l’estensione del nome di dominio|Massimo cinque giorni|

> [!warning]
>
> La procedura esatta di trasferimento del nome di dominio può variare, in particolare per alcune **TLD** del codice del paese (**ccTLD**, quali .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, ecc.) e per alcune **TLD** speciali (.am, .fm, ecc.). In base all'estensione del tuo nome di dominio, potrebbero essere necessari requisiti aggiuntivi. Ti consigliamo di verificare le informazioni mostrate per l'estensione in questione dal nostro sito Web: <https://www.ovhcloud.com/it/domains/tld/>.
>

### Step 1: verifica le informazioni dell’intestatario del nome di dominio <a name="step1"></a>

**Come prima cosa, è importante accertarsi che i dati associati al nome di dominio siano aggiornati.** Dall'entrata in vigore del GDPR, i dati visibili in « [Whois](/links/web/domains-whois) » sono diventati molto limitati. Puoi consultare le informazioni relative al tuo nome di dominio presso il tuo attuale Registrar.

- **Se le informazioni sono corrette: passa allo step successivo di questa guida.**

- **Se le informazioni sono errate o invisibili: contatta il tuo attuale Registrar per verificarlo e/o modificarlo.**

> [!primary]
>
> Se non sai quale Registrar è responsabile del tuo nome di dominio, la riga "Registrar", che compare nel risultato della ricerca del [tool Whois](/links/web/domains-whois), può fornirti informazioni sulla sua identità.
>

### Step 2: sblocca il nome di dominio e recupera il codice di trasferimento <a name="step2"></a>

Una volta verificate le informazioni è necessario sbloccare il nome di dominio, operazione che può essere effettuata esclusivamente presso il Registrar attuale. Per conoscere la corretta procedura da seguire, ti consigliamo di contattare il tuo provider.

Una volta sbloccato il nome di dominio, il Registrar deve comunicarti il codice di trasferimento associato Questo codice è talvolta indicato con diversi nomi, come: "Codice di trasferimento", "Codice Auth", "Informazioni Auth" o "Codice EPP".

Ti ricordiamo che, non essendo OVHcloud il Registrar del tuo nome di dominio al momento dell'avvio della procedura di trasferimento, non è possibile sbloccare il nome di dominio o fornire il codice di trasferimento.

> [!warning]
>
> Una volta sbloccato il nome di dominio, puoi effettuare il trasferimento in OVHcloud entro sette (7) giorni. Se non effettui la modifica del Registrar, il nome di dominio verrà automaticamente bloccato dopo questo periodo.
>

### Step 3: richiedere il trasferimento di un nome di dominio in OVHcloud <a name="step3"></a>

Una volta sbloccato il nome di dominio e ottenuto il codice, è possibile ordinarne il trasferimento in OVHcloud dal [nostro sito](/links/web/domains). Inserisci il nome del tuo nome di dominio e segui la procedura d’ordine.

![domain](/pages/assets/screens/website/order/domain-transfer-order.png){.thumbnail}

Quando ti viene chiesto di fornire il codice di trasferimento, digitalo nella casella accanto al tuo nome di dominio Se non disponi ancora del codice di trasferimento, seleziona la casella `Inserisci il codice di trasferimento successivamente`{.action}. Prima di proseguire, assicurati di essere in grado di recuperare questo codice. Ricordati che il trasferimento non verrà avviato fino a quando non verrà fornito un codice valido.

![domain](/pages/assets/screens/website/order/step_authinfo_add.png){.thumbnail}

È inoltre possibile completare l'ordine con un [hosting Web](/links/web/hosting) e altre soluzioni OVHcloud. Per effettuare questa operazione è necessario migrare i servizi verso OVHcloud. Questa guida, intitolata "[Migrare un sito e un servizio di posta in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)", fornisce alcune istruzioni su come procedere.

> [!warning]
>
> Durante il processo di ordine, ti consigliamo di considerare questi aspetti:
>
> - **dati sull’intestatario del nome di dominio.** In particolare dall'entrata in vigore del GDPR, è essenziale assicurarsi che le informazioni sull’intestatario del nome di dominio corrispondano a quelle archiviate dal tuo attuale Registrar. per evitare sospetti di furto di nomi di dominio;
>
> - **inserimento dei server DNS per il tuo nome di dominio.** Se utilizzi il tuo nome di dominio per mantenere un sito Internet o un servizio di posta online, è necessario specificare i server DNS per evitare interruzioni di servizio.
>

#### Gestione dell’intestatario e dettagli dei server DNS

- Cliccando su `Modifica la configurazione`{.action} in questo step, puoi inserire i nomi dei server DNS che il nome di dominio sta utilizzando. In questo modo, il nome di dominio sarà già associato a questi server DNS nella configurazione OVHcloud.

- Se continui senza effettuare questa operazione, il nome di dominio verrà fornito sui server DNS OVHcloud con una nuova zona DNS. Una [modifica manuale della zona DNS](/pages/web_cloud/domains/dns_zone_edit) può rendersi necessaria.

- In alcuni casi, la procedura di trasferimento può richiedere informazioni aggiuntive sull’intestatario del nome di dominio. Per aggiungere queste informazioni, clicca sull'opzione `Gestisci i contatti/l’intestatario`{.action}.

![dominio](/pages/assets/screens/website/order/order-summary.png){.thumbnail}

#### Stato del trasferimento dopo l'ordine

Una volta confermato l'ordine, riceverai un buono d'ordine. La procedura di trasferimento inizierà solo dopo aver ricevuto il pagamento. Una volta completata l'operazione, è possibile seguire lo stato di avanzamento del processo dalla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).

> [!primary]
>
> Se il codice di trasferimento non è stato inserito durante l'ordine, è possibile inserirlo da questa stessa pagina per confermare il trasferimento.

### Step 4: conferma del trasferimento da parte dell'attuale Registrar <a name="step4"></a>

Una volta convalidato l'ordine e il codice di trasferimento, il Registrar attuale (non ancora OVHcloud) riceverà una richiesta di conferma. Sono possibili diversi scenari di risposta:

|Scenario possibile|I Risultati|
|---|---|
|Conferma del provider attuale|Il trasferimento viene effettuato entro **24 ore**.|
|Nessuna risposta da parte del provider attuale|Il trasferimento è completato dopo un periodo di **5 giorni**.|
|Rifiuto da parte del provider attuale.|La procedura di trasferimento viene **annullata** non appena viene emesso il rifiuto.|

Se il provider attuale emette un rifiuto, contatta il provider per sapere perché l'ha rifiutata.

Il trasferimento può essere riavviato dalla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).

> [!primary]
>
> Il trasferimento di un nome di dominio con l'estensione ".fr" differisce leggermente dal processo descritto sopra. È necessario sbloccare il nome di dominio e recuperare il codice di trasferimento presso l'attuale Registrar.
> Avvia l'ordine di trasferimento e inserisci il codice di trasferimento come descritto in precedenza.
>
> Una volta avviato il trasferimento, il termine totale del **trasferimento di un nome di dominio in ".fr" richiede almeno 8 giorni incompressibili.**
>
> In caso di **opposizione al trasferimento da parte dell'attuale Registrar**, il trasferimento **si effettuerà comunque**, ma richiederà un **minimo di 22 giorni incompressibili** per essere completato.
>

### Step 5: gestire il nome di dominio con OVHcloud

Una volta completata la procedura, è possibile gestire il nome di dominio dalla pagina [Domini](/links/control-panel/web-domains).

> [!warning]
>
> Per i nomi di dominio con estensione *generica* (i **gTLD** come *.com*, *.net*, *.info*, *.org*, ecc.), la data di scadenza iniziale del nome di dominio è mantenuta. OVHcloud incrementa gratuitamente un anno di sottoscrizione supplementare in aggiunta al trasferimento realizzato.
> Ad esempio, siamo il 04/06/2023 e il tuo nome di dominio con un'estensione *generica* scade il 29/09/2023 **prima** il trasferimento. Una volta trasferito in OVHcloud, il nome di dominio scadrà il 29/09/2024.
>
> Per i nomi di dominio con estensione *locale* o *regionale* (i **ccTLD** come *.it*, *.be*, *.de*, *.es*, ecc.), questo dipende dalle estensioni e dalle regole messe in atto dal **Registro** dell'estensione in questione.
> Una volta completata l'operazione, verifica la data di scadenza del nome di dominio direttamente dallo Spazio Cliente OVHcloud.
>
> In base alla situazione e alla nuova data di scadenza del nome di dominio, potrebbe essere necessario un rinnovo del nome di dominio subito dopo il trasferimento.

<!-- CP-STEPS-START:check-domain-expiry -->
Per verificarlo, clicca sulle schede qui sotto per visualizzare successivamente ognuno dei **2** passaggi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il nome di dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Sulla pagina che appare, appena sotto il nome di dominio, troverai la data di rinnovo prevista con il **mese** e **l'anno** di scadenza.
<!-- CP-STEPS-END:check-domain-expiry -->

## Per saperne di più

[Migrazione del tuo sito Web e delle tue email verso OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
