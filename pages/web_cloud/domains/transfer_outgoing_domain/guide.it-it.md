---
title: "Trasferire un nome di dominio verso un altro Registrar"
excerpt: "Questa guida ti mostra come effettuare il trasferimento di un nome di dominio OVHcloud verso un altro provider"
updated: 2026-03-24
---

## Obiettivo

Un **trasferimento di nome di dominio** si riferisce allo spostamento di un nome di dominio da un provider a un altro. Ad esempio, se hai ordinato un nome di dominio sul nostro sito Web, OVHcloud è il suo attuale Registrar. Il trasferimento del nome di dominio in uscita deve essere avviato dal nuovo Registrar.

Per impedire trasferimenti di nomi di dominio non autorizzati, i nomi di dominio sono generalmente bloccati da uno stato *clientTransferProhibited*. Prima di avviare il trasferimento, è necessario rimuovere questa protezione dallo Spazio Cliente OVHcloud.

**Questa guida ti mostra come configurare il tuo nome di dominio per il trasferimento in uscita.**

> [!warning]
>
> Se il nome di dominio in questione deve restare registrato in OVHcloud ma modificato nelle modalità di gestione o di intestazione, il trasferimento in uscita dal nome di dominio non è la procedura appropriata.
>
> Per trasferire la gestione del tuo nome di dominio verso un altro account cliente OVHcloud, il metodo più adatto è la **modifica dei contatti**. La procedura è descritta in [guida](/pages/account_and_service_management/account_information/managing_contacts).
>
> Se è necessario modificare l'**intestatario** del nome di dominio, è necessario farlo **prima** di modificare i contatti del nome di dominio. Segui le istruzioni descritte nella nostra guida sul [cambiamento di intestatario dei nomi di dominio](/pages/web_cloud/domains/trade_domain).
>

## Prerequisiti

- Disporre di un [nome di dominio](/links/web/domains) registrato in OVHcloud
- Avere l'autorizzazione per richiedere il trasferimento di un nome di dominio: l'intestatario e/o gli amministratori devono essere informati della richiesta di trasferimento
- La registrazione del nome di dominio in questione risale ad almeno 60 giorni fa **e** non è stata trasferita o scambiata (ovvero la modifica dell'intestatario) negli ultimi 60 giorni

<!-- CP-NAV-START:web-domains -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Domini](/links/control-panel/web-domains)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Domini`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-domains -->

> [!primary]
>
> Se sei l'**intestatario** del nome di dominio ma la sua gestione nello Spazio Cliente OVHcloud non è disponibile, tramite il tuo accesso o tramite il contatto amministrativo del nome di dominio, consulta [questa guida](/pages/account_and_service_management/account_information/managing_contacts) prima di continuare.
>

## Procedura

> [!warning]
>
> Le istruzioni che seguono descrivono il modo più comune di trasferire un nome di dominio, valido per la maggior parte dei nomi di dominio di primo livello (top level domain, TLD). Tuttavia, le norme procedurali specifiche per gli LD sono definite unicamente dall'autorità competente, vale a dire il **registro**. I Registrar come OVHcloud devono rispettare queste regole e non hanno alcuna influenza sulle decisioni dei Registrar.
>
> La procedura esatta per i trasferimenti di nomi di dominio può quindi variare, in particolare per quanto riguarda alcune TLD di codice del paese (ccTLD, quali .lu, .uk, .hk, .ro) e alcune TLD speciali (.am, .fm, ecc.). I trasferimenti possono anche essere vietati per vari motivi, ad esempio in caso di pagamento in attesa, abuso o blocco del registro.
>
> In caso di dubbi, consulta queste risorse:
>
> - il sito web del registro TLD corrispondente;
> - la [lista dei TLD disponibili in OVHcloud](/links/web/domains-tld);
> - [le spiegazioni dell'ICANN sui codici di stato EPP](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) (per sapere quali codici di status si applicano attualmente al tuo nome di dominio, effettua una ricerca *Whois*, preferibilmente utilizzando il sito web del registro TLD corrispondente);
> - il sito Web e l'interfaccia di gestione del nuovo Registrar, in particolare per le domande relative ad un processo di trasferimento in attesa.
>
> In base al nuovo Registrar che scegli, il trasferimento di un nome di dominio può essere un'operazione a pagamento. Prima di continuare, è possibile informarsi su questo punto.
>

### 1 - Rimuovere la protezione contro il trasferimento del nome di dominio

Clicca sulle schede qui sotto per visualizzare ciascuno dei **3** step.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Nella scheda `Informazioni generali`{.action}, visualizza il cursore `Protezione contro il trasferimento` sotto **Sicurezza**, impostato su `Attiva`{.action} di default.
>>
>> > [!warning]
>> >
>> > Se il pulsante `Protezione contro il trasferimento` non è presente, significa che la tua estensione di nome di dominio non necessita di un codice di trasferimento. A questo punto puoi avviare direttamente il trasferimento.
>>
>> ![protezione attivata](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-enabled.png){.thumbnail}
>>
> **Step 3**
>>
>> Clicca sul cursore e conferma nella nuova finestra che vuoi eliminare questa protezione. Attendi qualche minuto prima che lo stato passi alla `Disattivazione`{.action}.
>>
>> > [!primary]
>> >
>> > Se visualizzi il messaggio "**Si è verificato un errore durante la richiesta di disattivazione della protezione del nome di dominio (User not granted for this request)**", significa che non hai i diritti sufficienti per sbloccare il nome di dominio.
>> >
>> > Inoltre, se visualizzi il messaggio: "**AUTH/INFO code : Authcode is not managed by OVHcloud, contact the registry to claim it**", significa che il codice di trasferimento del tuo nome di dominio non può essere recuperato dal tuo [Spazio Cliente OVHcloud](/links/manager).
>> >
>> > In entrambi i casi, verifica di essere il contatto **amministratore** del nome di dominio utilizzando la nostra guida sulla [gestione dei contatti](/pages/account_and_service_management/account_information/managing_contacts) e verifica che l'estensione del tuo nome di dominio permetta lo sblocco dallo [Spazio Cliente OVHcloud](/links/manager).
>> >
>> > Infatti, alcuni *codici di trasferimento* sono direttamente gestiti dal *Registro* dell'estensione del tuo nome di dominio. Un *Registro* è un'organizzazione che gestisce l'insieme dei nomi di dominio per una determinata estensione. Ad esempio, l'**AFNIC** gestisce l'insieme dei nomi di dominio con l'estensione "*.fr*". In questo caso, contatta direttamente il *Registro* che gestisce l'estensione del tuo nome di dominio per recuperare il *codice di trasferimento*.
>>
>> ![disattivazione protezione](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-deactivating.png){.thumbnail}

> [!primary]
>
> Una volta disattivata la protezione, il nome di dominio resta sbloccato per sette giorni. Dopo questo periodo, la protezione verrà riattivata automaticamente. Se nel frattempo non richiedi il trasferimento di un nome di dominio al tuo nuovo Registrar, sarà necessario rimuovere nuovamente la protezione del nome di dominio.
>

### 2 - Recuperare il codice di trasferimento

> [!warning]
>
> Tieni presente che è sempre possibile sbloccare e recuperare il codice di trasferimento del tuo nome di dominio dopo la scadenza. Secondo le regole del registro, un nome di dominio in [redemptionPeriod](https://www.icann.org/resources/pages/epp-status-codes-2014-06-16-en) potrebbe richiedere il ripristino per essere trasferito. Contatta il tuo nuovo registrar per i dettagli del trasferimento.
>

Una volta disattivata la protezione contro il trasferimento, puoi recuperare il codice di trasferimento del tuo nome di dominio.

Clicca sulle schede qui sotto per visualizzare ciascuno dei **3** step.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domain names](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Nella scheda `Informazioni generali`{.action}, clicca su `AUTH/INFO`{.action} accanto alla voce `Protezione contro il trasferimento`{.action}. Se necessario, aggiorna la pagina.
>>
>> ![outgoingtransfer](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/general-information/protection-against-domain-name-transfert-disabled.png){.thumbnail}
>>
> **Step 3**
>>
>> A questo punto compare una finestra con il tuo codice AUTH/INFO (anche chiamato codice di trasferimento, password del nome di dominio, AUTH-CODE o EPP-Code).
>>
>> Il codice verrà richiesto dal tuo nuovo Registrar per completare il processo di trasferimento. Puoi verificare i dettagli presso il tuo nuovo Registrar.
>>
>> Piuttosto che digitare manualmente il codice, ti consigliamo di copiarlo/incollarlo perché alcuni caratteri possono essere facilmente confondibili.

Una volta recuperato il codice di trasferimento, **non bloccare nuovamente il tuo nome di dominio a meno che non desideri più trasferirlo**.

### 3 - Avviare il trasferimento verso il nuovo Registrar

Una volta terminati gli step precedenti, avvia il processo di trasferimento, generalmente ordinando il nuovo Registrar. Il trasferimento può richiedere fino a 10 giorni.

Per maggiori informazioni, contatta il nuovo Registrar che hai scelto.

> [!warning]
>
> Se il tuo nuovo Registrar richiede un nuovo codice di trasferimento, riattiva la **Protezione contro il trasferimento** per il tuo nome di dominio e disattivala nuovamente pochi minuti dopo. In questo modo è possibile recuperare un nuovo codice di trasferimento.
>

## Per saperne di più

[Trasferimento di nome di dominio.co.uk in uscita](/pages/web_cloud/domains/transfer_outgoing_couk)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
