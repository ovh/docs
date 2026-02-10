---
title: Risolvere un errore su un nome di dominio
updated: 2026-02-10
---

## Obiettivo

La creazione di un nome di dominio, il suo trasferimento e la modifica dell'intestatario sono tutte operazioni per le quali può verificarsi un errore. Potrebbe essere necessario un intervento da parte tua.

**Questa guida ti mostra come agire in caso di errore su un nome di dominio.**

## Prerequisiti

- Essere intestatario di uno o più [nomi di dominio](/links/web/domains)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Essere aggiornato nei [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei servizi associati (nome di dominio e hosting web)

## Procedura

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Clicca su `Operazioni in corso`{.action}.

Una tabella ti permette di consultare tutte le operazioni relative ai nomi di dominio del tuo Spazio Cliente.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-header.png){.thumbnail}

- `Nome di dominio`: Nome di dominio interessato all'operazione.
- `Operazione`:  Operazione in corso sul nome di dominio.
- `Commento`: Dettagli sull'operazione in corso... Istruzioni.
- `Data di gestione`: Data di creazione dell'operazione.
- `Data update`:  Data di aggiornamento dell'operazione in corso...
- `Data di fine`: Data di fine dell'operazione.
- `Stato`: Stato attuale dell'operazione.

Tutte le operazioni elencate in questa tabella non richiedono il vostro intervento perché si svolgano normalmente.<br>
In questa guida ci concentreremo sulle operazioni **in errore** attraverso esempi ricorrenti.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-error-creating-domain-name-with-registry.png){.thumbnail}

### Esempi

> [!primary]
>
> L'elenco degli esempi sotto riportato non è esaustivo. Se riscontri un errore non specificato in questa guida:
>
> - Verifica di essere aggiornato sui [pagamenti](/pages/account_and_service_management/managing_billing_payments_and_services/invoice_management#pay-bills) e sui [rinnovi](/pages/account_and_service_management/managing_billing_payments_and_services/how_to_use_automatic_renewal#renewal-management) dei tuoi nomi di dominio.
> - Per agire, clicca sul pulsante `...`{.action} a destra dell'operazione in questione.
> - Leggi il messaggio descrittivo e controlla se ti permette di risolvere l'errore.
>
> Se, nonostante queste verifiche, non sei in grado di agire sul nome di dominio, ti invitiamo ad aprire un ticket di assistenza dal tuo Spazio Cliente OVHcloud.
>

#### Richiesta di documenti

Alcune estensioni di nomi di dominio richiedono una documentazione per giustificarne l'utilizzo. In questo caso, trasmetterai i documenti dalla finestra `Operazioni in corso`{.action}.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/contacts-update-provide-us-with-the-documents-required.png){.thumbnail}

Per fornire il(i) documento(i) necessario(i), clicca sul pulsante `...`{.action} a destra dell'operazione in questione.<br>
La finestra che segue mostra, nella sezione "Descrizione" puoi trovare i dettagli del documento da fornire e un pulsante per caricare il documento.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-provide-us-with-the-documents-required.png){.thumbnail}

#### Informazioni mancanti

Quando registri il tuo nome di dominio, è necessario completare i dati di "contatto". Se i record non corrispondono ai criteri del nome di dominio, puoi recuperare l'errore qui sotto.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-complete-nic-admin-es-tld.png){.thumbnail}

Clicca sul pulsante `...`{.action} a destra dell'operazione.<br>
Nella nuova finestra, inserisci le informazioni del contatto corrispondente.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-complete-nic-admin-es-tld.png){.thumbnail}

#### Codice di trasferimento errato 

Al momento del trasferimento del nome di dominio in OVHcloud è necessario inserire un codice di trasferimento (**authInfo**). Se il codice non è corretto, l'operazione è sospesa ma è possibile riavviarla inserendo il codice corretto.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-auth-code-missing.png){.thumbnail}

Clicca sul pulsante `...`{.action} a destra dell'operazione.<br>
Nella finestra che segue, inserisci il codice di trasferimento (**authInfo**) e riavvia l'operazione.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/operation-data-auth-code-missing.png){.thumbnail}

#### Errore associato ai server DNS

Si può verificare un errore se i server DNS associati a un nome di dominio non funzionano.<br>
Nell'esempio qui sotto, l'indirizzo IP del server DNS non risponde.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-unable-to-retrieve-dns-ip.png){.thumbnail}

Nella sezione `Domini`{.action}, seleziona il nome di dominio e clicca sulla scheda `Server DNS`{.action}. Da questa scheda è possibile [modificare i server DNS](/pages/web_cloud/domains/dns_server_edit). 

#### Errore su un nome di dominio.**ie**, **.de** o **.it** dopo un aggiornamento DNS

Quando modifichi i tuoi server DNS, il registro può verificare i nuovi server DNS e la zona DNS associata e bloccare il nome di dominio se la configurazione non è conforme.

> [!warning]
>
> Questo tipo di blocco è disposto dal Registrar e non da OVHcloud. Anche se il nome di dominio è bloccato dal Registro, i server DNS appaiono come `Attivi` nello Spazio Cliente OVHcloud.

Per verificare che il tuo nome di dominio sia bloccato, accedi alla tabella delle `Operazioni in corso`{.action}.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-dns-update-error-occured-updating-domain.png){.thumbnail}

Per verificare il tuo nome di dominio, ti consigliamo di utilizzare il tool di verifica rilasciato dal Registro:

- Per un nome di dominio.**de**: <https://nast.denic.de/>.
- Per un nome di dominio.**it**: <https://dns-check.nic.it/>.

> [!primary]
>
> Se il tuo registro non fornisce strumenti di verifica dei server DNS, è possibile interrogare i tuoi nuovi server DNS tramite il comando `nslookup` on su un "ordine di comando" Windows o tramite il comando `dig` su un "terminal" Linux o macOS. 
>
> Se i tuoi server DNS sono raggiungibili, il tool restituisce un indirizzo IP.
>
> In ogni caso, assicurati che il server DNS sia configurato correttamente per accogliere la zona DNS del tuo nome di dominio.

Una volta individuata l'origine dell'errore e corretta, clicca sul pulsante `...`{.action} a destra dell'operazione in questione e riavvia l'operazione di verifica DNS.

#### Errore interno OVHcloud

È possibile riscontrare un errore per i dettagli di "errore interno". Questo errore non consente azioni da parte tua.<br>
Per prima cosa verifica che il tuo nome di dominio e i server DNS siano attivi correttamente. 

Se riscontri un'anomalia non legata alla configurazione dei server DNS o della zona DNS, ti invitiamo ad aprire un ticket di assistenza presso il supporto OVHcloud per identificare l'origine del malfunzionamento.

![nome di dominio](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/ongoing-operations/domain-name-operations-renewal-internal-error.png){.thumbnail}

## Per saperne di più

[Trasferire un nome di dominio in OVHcloud](/pages/web_cloud/domains/transfer_incoming_generic_domain)

[Trasferire un nome di dominio verso un altro Registrar](/pages/web_cloud/domains/transfer_outgoing_domain)

[Modifica i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).