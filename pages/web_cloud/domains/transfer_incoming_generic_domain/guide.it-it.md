---
title: 'Trasferire un dominio in OVHcloud'
excerpt: 'Questa guida ti mostra come avviare la procedura di trasferimento di un dominio generico verso OVHcloud'
updated: 2024-06-28
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MILAnKdjHns" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Obiettivo

Il tuo dominio è registrato in un **Registrar** e vuoi trasferirlo in OVHcloud? è possibile tramite una procedura di trasferimento.

Con il trasferimento del tuo dominio, potrai cambiare da **Registrar** per questo. Per trasferire il tuo dominio in OVHcloud è possibile creare un ordine. Questo processo richiede generalmente da uno a dieci giorni.

**Questa guida ti mostra come trasferire un dominio generico in OVHcloud.**

> [!warning]
>
> Il *Registrar* di un dominio rappresenta l'organizzazione/provider accreditata presso la quale il dominio è registrato/sottoscritto da un privato, un'associazione o un'organizzazione. È presso lo stesso *Registrar* che rinnovi la sottoscrizione del tuo dominio (generalmente una volta all'anno).
>
> Se OVHcloud è già il *Registrar* del tuo dominio **prima** di avviare la procedura che seguirà, il *trasferimento in entrata del dominio* non è la procedura appropriata. La procedura *trasferimento in entrata da un dominio** si applica **solo** ai domini registrati in un altro *Registrar* di OVHcloud.
>
> Per trasferire la gestione del tuo dominio verso un altro account cliente OVHcloud, la modalità corretta è una *modifica dei contatti*. La procedura è descritta in [guida](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se è necessario modificare il **proprietario** del dominio, è necessario farlo **prima** di modificare i contatti del dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di proprietario dei domini](/pages/web_cloud/domains/trade_domain).
>
> Se, oltre al trasferimento del dominio, vuoi anche migrare i servizi associati (sito Web, email, ecc...), prima di proseguire consulta la nostra guida "[Migrare il sito Web e i servizi associati in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)".
> Questa guida ti mostra come migrare tutti i tuoi servizi senza interruzioni di servizio.
>
> Se trasferisci il tuo dominio senza trasferire gli altri servizi, assicurati di recuperare i server DNS attivi per il tuo dominio presso il tuo **Registrar** attuale e di inserirli direttamente nello Step 3 di questa guida.
> In questo modo eviterai di interrompere l'associazione tra il tuo dominio e i tuoi servizi esterni associati.
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

> [!success]
>
> Per conoscere le condizioni tariffarie per il trasferimento di un dominio in base alla sua estensione, inserisci il dominio che vuoi trasferire sulla nostra pagina [www.ovhcloud.com/it/domains/tld/](/links/web/domains-tld) e segui gli step di questa guida.
>

La procedura di trasferimento prevede diversi step, tra cui l'avvio di contatti con diverse entità. Il tuo attuale Registrar, OVHcloud e altre parti. La tabella qui sotto riassume le diverse fasi del processo:

|Step|Descrizione|Soggetti coinvolti|Dove|Campo obbligatorio|
|---|---|---|---|---|
|[1](#step1)|[Verifica delle informazioni associate al dominio](#step1)|L'amministratore del dominio|Il Registrar attuale|In base alle azioni effettuate|
|[2](#step2)|[Sblocco del dominio e recupero del codice di trasferimento](#step2)|L'amministratore del dominio, con l'autorizzazione del proprietario|Il Registrar attuale|In base alle azioni effettuate|
|[3](#step3)|[Trasferimento di un dominio](#step3)|Chiunque sia in possesso del codice di trasferimento, anche con il permesso del proprietario|Con il nuovo Registrar (ad esempio, OVHcloud)|In base alle azioni effettuate|
|[4](#step4)|[Conferma del trasferimento](#step4)|Il Registrar attuale|Tramite una richiesta da parte del Registro che gestisce l’estensione del dominio|Massimo cinque giorni|

> [!warning]
>
> La procedura esatta di trasferimento del dominio può variare, in particolare per alcune **TLD** del codice del paese (**ccTLD**, quali .pl, .lu, .hk, .ro, .be, .lt, .dk, .at, .fi, ecc.) e per alcune **TLD** speciali (.am, .fm, ecc.). In base all'estensione del tuo dominio, potrebbero essere necessari requisiti aggiuntivi. Ti consigliamo di verificare le informazioni mostrate per l'estensione in questione dal nostro sito Web: <https://www.ovhcloud.com/it/domains/tld/>.
>

### Step 1: verifica le informazioni del proprietario del dominio <a name="step1"></a>

**Come prima cosa, è importante accertarsi che i dati associati al dominio siano aggiornati.** Dall'entrata in vigore del GDPR, i dati visibili nel ["Whois"](/links/web/domains-whois) sono diventati molto limitati. Puoi consultare le informazioni relative al tuo dominio presso il tuo attuale Registrar.

- **Se le informazioni sono corrette: passa allo step successivo di questa guida.**

- **Se le informazioni sono errate o invisibili: contatta il tuo attuale Registrar per verificarlo e/o modificarlo.**

> [!primary]
>
> Se non sai quale Registrar è responsabile del tuo dominio, la riga "Registrar", che compare nel risultato della ricerca del [tool Whois](/links/web/domains-whois){.external}, può fornirti informazioni sulla sua identità.
>

### Step 2: sblocca il dominio e recupera il codice di trasferimento <a name="step2"></a>

Una volta verificate le informazioni è necessario sbloccare il dominio, operazione che può essere effettuata esclusivamente presso il Registrar attuale. Per conoscere la corretta procedura da seguire, ti consigliamo di contattare il tuo provider.

Una volta sbloccato il dominio, il Registrar deve comunicarti il codice di trasferimento associato Questo codice è talvolta indicato con diversi nomi, come: "Codice di trasferimento", "Codice Auth", "Informazioni Auth" o "Codice EPP".

Ti ricordiamo che, non essendo OVHcloud il Registrar del tuo dominio al momento dell'avvio della procedura di trasferimento, non è possibile sbloccare il dominio o fornire il codice di trasferimento.

> [!warning]
>
> Una volta sbloccato il dominio, puoi effettuare il trasferimento in OVHcloud entro sette (7) giorni. Se non effettui la modifica del Registrar, il dominio verrà automaticamente bloccato dopo questo periodo.
>

### Step 3: richiedere il trasferimento di un dominio in OVHcloud <a name="step3"></a>

Una volta sbloccato il dominio e ottenuto il codice, è possibile ordinarne il trasferimento in OVHcloud dal [nostro sito](/links/web/domains). Inserisci il nome del tuo dominio e segui la procedura d’ordine.

![domain](/pages/assets/screens/website/order/domain-transfer-order.png){.thumbnail

Quando ti viene chiesto di fornire il codice di trasferimento, digitalo nella casella accanto al tuo dominio Se non disponi ancora del codice di trasferimento, seleziona la casella `Inserisci il codice di trasferimento successivamente`{.action}. Prima di proseguire, assicurati di essere in grado di recuperare questo codice. Ricordati che il trasferimento non verrà avviato fino a quando non verrà fornito un codice valido.

![domain](/pages/assets/screens/website/order/step_authinfo_add.png){.thumbnail}

È inoltre possibile completare l'ordine con un [hosting Web](/links/web/hosting){.external} e altre soluzioni OVHcloud. Per effettuare questa operazione è necessario migrare i servizi verso OVHcloud. Questa guida, intitolata "[Migrare un sito e un servizio di posta in OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)", fornisce alcune istruzioni su come procedere.

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

- Se continui senza effettuare questa operazione, il dominio verrà fornito sui server DNS OVHcloud con una nuova zona DNS. Una [modifica manuale della zona DNS](/pages/web_cloud/domains/dns_zone_edit) può rendersi necessaria.

- In alcuni casi, la procedura di trasferimento può richiedere informazioni aggiuntive sul proprietario del dominio. Per aggiungere queste informazioni, clicca sull'opzione `Gestisci i contatti/il proprietario`{.action}.

![dominio](/pages/assets/screens/website/order/order-summary.png){.thumbnail}

#### Stato del trasferimento dopo l'ordine

Una volta confermato l'ordine, riceverai un buono d'ordine. La procedura di trasferimento inizierà solo dopo aver ricevuto il pagamento. Una volta completata l'operazione, è possibile seguire lo stato di avanzamento del processo dallo [Spazio Cliente OVHcloud](/links/manager){.external}. Per monitorare lo stato di avanzamento dell'operazione, clicca su `Domini`{.action} e poi `Operazioni in corso`{.action}.

> [!primary]
>
> Se il codice di trasferimento non è stato inserito durante l'ordine, inseriscilo nella finestra `Operazioni in corso`{.action} e infine confermare il trasferimento.

### Step 4: conferma del trasferimento da parte dell'attuale Registrar <a name="step4"></a>

Una volta convalidato l'ordine e il codice di trasferimento, il Registrar attuale (non ancora OVHcloud) riceverà una richiesta di conferma. Sono possibili diversi scenari di risposta:

|Scenario possibile|I Risultati|
|---|---|
|Conferma del provider attuale|Il trasferimento viene effettuato entro **24 ore**.|
|Nessuna risposta da parte del provider attuale|Il trasferimento è completato dopo un periodo di **5 giorni**.|
|Rifiuto da parte del provider attuale.|La procedura di trasferimento viene **annullata** non appena viene emesso il rifiuto.|

Se il provider attuale emette un rifiuto, contatta il provider per sapere perché l'ha rifiutata.

Il trasferimento può essere riavviato dallo [Spazio Cliente OVHcloud](/links/manager){.external}. Seleziona `Web Cloud`{.action} e accedi alla sezione `Domini`{.action}, poi clicca su `Operazioni in corso`{.action}.

> [!primary]
>
> Il trasferimento di un dominio con l'estensione ".fr" differisce leggermente dal processo descritto sopra. È necessario sbloccare il dominio e recuperare il codice di trasferimento presso l'attuale Registrar.
> Avvia l'ordine di trasferimento e inserisci il codice di trasferimento come descritto in precedenza.
>
> Una volta avviato il trasferimento, il termine totale del **trasferimento di un dominio in ".fr" richiede almeno 8 giorni incompressibili.**
>
> In caso di **opposizione al trasferimento da parte dell'attuale Registrar**, il trasferimento **si effettuerà comunque**, ma richiederà un **minimo di 22 giorni incompressibili** per essere completato.
>

### Step 5: gestire il dominio con OVHcloud

Una volta completata la procedura, è possibile gestire il dominio dallo [Spazio Cliente OVHcloud](/links/manager){.external}. Seleziona `Web Cloud`{.action}, clicca su `Domini`{.action} nel menu a sinistra e poi clicca sul dominio interessato.

> [!warning]
>
> Per i domini con estensione *generica* (i **gTLD** come *.com*, *.net*, *.info*, *.org*, ecc.), la data di scadenza iniziale del dominio è mantenuta. OVHcloud incrementa gratuitamente un anno di sottoscrizione supplementare in aggiunta al trasferimento realizzato.
> Ad esempio, siamo il 04/06/2023 e il tuo dominio con un'estensione *generica* scade il 29/09/2023 **prima** il trasferimento. Una volta trasferito in OVHcloud, il dominio scadrà il 29/09/2024.
>
> Per i domini con estensione *locale* o *regionale* (i **ccTLD** come *.it*, *.be*, *.de*, *.es*, ecc.), questo dipende dalle estensioni e dalle regole messe in atto dal **Registro** dell'estensione in questione.
> Una volta completata l'operazione, verifica la data di scadenza del dominio direttamente dallo Spazio Cliente OVHcloud.
>
> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Nella colonna di sinistra, clicca su `Domini`{.action} e seleziona il dominio interessato. Sulla pagina che appare e appena sotto il tuo dominio sulla parte superiore della pagina, visualizzerai la data di rinnovo prevista con il **mese** e **l'anno** di scadenza.
>
> In base alla situazione e alla nuova data di scadenza del dominio, potrebbe essere necessario un rinnovo del dominio subito dopo il trasferimento.
>

## Per saperne di più

[Migrazione del tuo sito Web e delle tue email verso OVHcloud](/pages/web_cloud/web_hosting/hosting_migrating_to_ovh)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).