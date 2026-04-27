---
title: 'Risolvere un errore su un nome di dominio'
updated: 2026-03-24
---

<style>
details>summary {
    color:rgb(33, 153, 232);
    cursor: pointer;
}
details>summary::before {
    content:'\25B6';
    padding-right:1ch;
}
details[open]>summary::before {
    content:'\25BC';
}
</style>

## Obiettivo

La creazione, il trasferimento o la modifica dell'intestatario di un nome di dominio possono generare errori che richiedono un intervento da parte tua.

**Questa guida ti mostra come agire quando si verifica un errore su un nome di dominio.**

## Prerequisiti

- Essere intestatario di uno o più [nomi di dominio](/links/web/domains).
- Essere aggiornato nei [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei tuoi nomi di dominio.

<!-- CP-NAV-START:web-ongoing-operations -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Operazioni in corso](/links/control-panel/web-ongoing-operations)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Operazioni in corso`{.action} > Seleziona la scheda `Domini`{.action} o `DNS`{.action}.

---
<!-- CP-NAV-END:web-ongoing-operations -->

## Procedura

### Panoramica dell'interfaccia di gestione delle operazioni in corso

<!-- CP-STEPS-START:ongoing-ops-presentation -->
Clicca sulle schede qui sotto per visualizzare i **2** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).
>>
> **Step 2**
>>
>> Una tabella elenca tutte le operazioni relative ai nomi di dominio del tuo Spazio Cliente.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}
>>
>> - `Dominio`: Nome di dominio interessato dall'operazione.
>> - `Operazione`: Operazione in corso sul nome di dominio.
>> - `Commento`: Dettagli sull'operazione in corso. Istruzioni.
>> - `Data di gestione`: Data di creazione dell'operazione.
>> - `Data di aggiornamento`: Timestamp di aggiornamento dell'operazione in corso.
>> - `Data di fine`: Data di fine dell'operazione.
>> - `Stato`: Stato attuale dell'operazione.
<!-- CP-STEPS-END:ongoing-ops-presentation -->

Non tutte le operazioni elencate in questa tabella richiedono un intervento da parte tua per svolgersi normalmente.

Questa guida tratta delle operazioni **in errore** attraverso situazioni ricorrenti.

### Situazioni

> [!primary]
>
> L'elenco delle situazioni seguenti non è esaustivo. Se riscontri un errore non descritto in questa guida:
>
> - Verifica di essere aggiornato nei [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e nei [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei tuoi nomi di dominio.
> - Verifica se è possibile un'azione consultando le opzioni disponibili a destra dell'operazione in questione.
> - Leggi il messaggio descrittivo e verifica se ti permette di risolvere l'errore.
>
> Se, nonostante queste verifiche, non riesci a risolvere l'errore, [apri un ticket di assistenza](/links/support) dal tuo Spazio Cliente.

**Clicca sulla situazione che ti interessa per visualizzare il contenuto.**

<!-- CP-STEPS-START:situation-document-request -->
/// details | Richiesta di documenti

Alcune estensioni di nomi di dominio richiedono di giustificarne l'utilizzo fornendo dei documenti. In tal caso, è necessario trasmettere i documenti dal tuo Spazio Cliente OVHcloud.

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).
>>
> **Step 2**
>>
>> Individua l'operazione in errore nella tabella.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}
>>
> **Step 3**
>>
>> Clicca sul pulsante `...`{.action} a destra dell'operazione in questione.
>>
> **Step 4**
>>
>> Compare la finestra seguente. La sezione "Descrizione" consente di ottenere dettagli sul documento da fornire e un pulsante per caricare il documento.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

///
<!-- CP-STEPS-END:situation-document-request -->

<!-- CP-STEPS-START:situation-missing-info -->
/// details | Informazioni mancanti

Quando registri un nome di dominio, è talvolta necessario completare i dati di "contatto". Se questi ultimi non corrispondono ai criteri del nome di dominio, è possibile ottenere l'errore seguente.

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).
>>
> **Step 2**
>>
>> Individua l'operazione in errore nella tabella.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}
>>
> **Step 3**
>>
>> Clicca sul pulsante `...`{.action} a destra dell'operazione in questione.
>>
> **Step 4**
>>
>> Compare la finestra seguente. Compila i campi con le informazioni del contatto in questione.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

///
<!-- CP-STEPS-END:situation-missing-info -->

<!-- CP-STEPS-START:situation-transfer-code -->
/// details | Codice di trasferimento errato

Quando trasferisci il tuo nome di dominio verso OVHcloud, devi inserire un codice di trasferimento (**authInfo** / **AuthCode**) al momento dell'ordine. Se il codice è errato, l'operazione viene sospesa. Puoi riavviarla inserendo il codice corretto.

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).
>>
> **Step 2**
>>
>> Individua l'operazione in errore nella tabella.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}
>>
> **Step 3**
>>
>> Clicca sul pulsante `...`{.action} a destra dell'operazione in questione.
>>
> **Step 4**
>>
>> Compare la finestra seguente. Inserisci il codice di trasferimento (**authInfo** / **AuthCode**) e riavvia l'operazione.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

///
<!-- CP-STEPS-END:situation-transfer-code -->

<!-- CP-STEPS-START:situation-dns-error -->
/// details | Errore associato ai server DNS

Un errore può verificarsi se i server DNS associati a un nome di dominio non funzionano.
Nella situazione seguente, l'indirizzo IP del server DNS non risponde.

Clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).
>>
> **Step 2**
>>
>> Individua l'operazione in errore nella tabella.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}
>>
> **Step 3**
>>
>> Nella sezione `Domini`{.action}, seleziona il nome di dominio in questione, poi clicca sulla scheda `Server DNS`{.action}.
>>
> **Step 4**
>>
>> Da questa scheda, [modifica i tuoi server DNS](/pages/web_cloud/domains/dns_server_edit).

///
<!-- CP-STEPS-END:situation-dns-error -->

<!-- CP-STEPS-START:situation-domain-blocked -->
/// details | Errore su un nome di dominio .ie, .de o .it dopo un aggiornamento DNS

Quando modifichi i tuoi server DNS, il registro è suscettibile di verificare i nuovi server DNS e la zona DNS associata e di bloccare il nome di dominio se la configurazione non è conforme.

> [!warning]
>
> Questo tipo di blocco è iniziato dal registro e non da OVHcloud. Pertanto, anche se il nome di dominio è bloccato dal registro, i suoi server DNS risultano come `Attivi` nel tuo Spazio Cliente OVHcloud.

Per verificare se il tuo nome di dominio è soggetto a tale blocco, clicca sulle schede qui sotto per visualizzare i **4** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).
>>
> **Step 2**
>>
>> Individua l'operazione in errore nella tabella.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}
>>
> **Step 3**
>>
>> Per verificare il tuo nome di dominio, ti consigliamo di utilizzare lo strumento di verifica fornito dal registro:
>>
>> - Per un nome di dominio in **.de**: <https://nast.denic.de/>.
>> - Per un nome di dominio in **.it**: <https://dns-check.nic.it/>.
>>
>> > [!primary]
>> >
>> > Se il tuo registro non fornisce uno strumento di verifica dei server DNS, è possibile interrogare i tuoi nuovi server DNS tramite il comando `nslookup` su un "prompt dei comandi" Windows o tramite il comando `dig` su un "terminale" Linux o macOS.
>> >
>> > Se i tuoi server DNS sono raggiungibili, lo strumento restituisce un indirizzo IP.
>> >
>> > In ogni caso, assicurati, presso l'amministratore del server DNS, che il server DNS sia correttamente configurato per ospitare la zona DNS del tuo nome di dominio.
>>
> **Step 4**
>>
>> Una volta identificata l'origine dell'errore e corretta, clicca sul pulsante `...`{.action} a destra dell'operazione in questione e riavvia l'operazione di verifica DNS.

///
<!-- CP-STEPS-END:situation-domain-blocked -->

<!-- CP-STEPS-START:situation-internal-error -->
/// details | Errore interno OVHcloud

Puoi riscontrare un errore con dettaglio "errore interno".

Clicca sulle schede qui sotto per visualizzare i **3** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Operazioni in corso](/links/control-panel/web-ongoing-operations).
>>
> **Step 2**
>>
>> Individua l'operazione in errore nella tabella.
>>
>> ![domain](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}
>>
> **Step 3**
>>
>> Questo errore non consente alcuna azione da parte tua dallo Spazio Cliente OVHcloud.
>>
>> Verifica prima che il tuo nome di dominio e i suoi server DNS siano attivi.
>>
>> Se constati un'anomalia non legata alla configurazione dei server DNS o della zona DNS, [contatta il supporto OVHcloud](/links/support) per identificare l'origine del malfunzionamento.

///
<!-- CP-STEPS-END:situation-internal-error -->

## Per saperne di più

[Trasferire un nome di dominio verso OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Trasferire un nome di dominio verso un altro Registrar](/pages/web_cloud/domains/transfer_outgoing_domain)

[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

Per servizi specializzati (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [soluzioni di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
