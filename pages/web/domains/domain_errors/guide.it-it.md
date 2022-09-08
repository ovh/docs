---
title: Risolvere un errore su un dominio
slug: domain-errors
section: Operazioni correnti
order: 01
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 01/09/2022**

## Obiettivo

La creazione di un dominio, il suo trasferimento e la modifica del proprietario sono tutte operazioni per le quali può verificarsi un errore. Potrebbe essere necessario un intervento da parte tua.

**Questa guida ti mostra come agire in caso di errore su un dominio.**

## Prerequisiti

- Disporre di uno o più domini
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Essere aggiornato nei [pagamenti](https://docs.ovh.com/it/billing/gestire-fatture-ovhcloud/#pay-bills) e [rinnovi](https://docs.ovh.com/it/billing/imposta_il_rinnovo_automatico_dei_tuoi_servizi_ovh/#renewal-management) dei servizi associati (dominio e hosting web)

## Procedura

Dallo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), seleziona la sezione `Web Cloud`{.action} e poi i `domini`{.action}. Clicca su `Operazioni in corso`{.action} sopra la lista dei domini.

Una tabella ti permette di consultare tutte le operazioni relative ai domini del tuo Spazio Cliente.

![dominio](images/domain-error-table01.png){.thumbnail}

- `Dominio`: Dominio interessato all'operazione.
- `Operazione`:  Operazione in corso sul dominio.
- `Commento`: Dettagli sull'operazione in corso... Istruzioni.
- `Data di gestione`: Data di creazione dell'operazione.
- `Data update`:  Data di aggiornamento dell'operazione in corso...
- `Data di fine`: Data di fine dell'operazione.
- `Stato`: Stato attuale dell'operazione.

Tutte le operazioni elencate in questa tabella non richiedono il vostro intervento perché si svolgano normalmente.<br>
In questa guida ci concentreremo sulle operazioni **in errore** attraverso esempi ricorrenti.

![dominio](images/domain-error-table02.png){.thumbnail}

### Esempi

> [!primary]
>
> L'elenco degli esempi sotto riportato non è esaustivo. Se riscontri un errore non specificato in questa guida:
>
> - Verifica di essere aggiornato sui [pagamenti](https://docs.ovh.com/it/billing/gestire-fatture-ovhcloud/#pay-bills) e sui [rinnovi](https://docs.ovh.com/it/billing/imposta_il_rinnovo_automatico_dei_tuoi_servizi_ovh/#renewal-management) dei tuoi domini.
> - Per agire, clicca sul pulsante `...`{.action} a destra dell'operazione in questione.
> - Leggi il messaggio descrittivo e controlla se ti permette di risolvere l'errore.
>
> Se, nonostante queste verifiche, non sei in grado di agire sul dominio, ti invitiamo ad aprire un ticket di assistenza dal tuo Spazio Cliente OVHcloud.
>

#### Richiesta di documenti

Alcune estensioni di domini richiedono una documentazione per giustificarne l'utilizzo. In questo caso, trasmetterai i documenti dalla finestra `Operazioni in corso`{.action}.

![dominio](images/domain-error01.png){.thumbnail}

Per fornire il(i) documento(i) necessario(i), clicca sul pulsante `...`{.action} a destra dell'operazione in questione.<br>
La finestra che segue mostra, nella sezione "Descrizione" puoi trovare i dettagli del documento da fornire e un pulsante per caricare il documento.

![dominio](images/domain-error02.png){.thumbnail}

#### Informazioni mancanti

Quando registri il tuo dominio, è necessario completare i dati di "contatto". Se i record non corrispondono ai criteri del dominio, puoi recuperare l'errore qui sotto.

![dominio](images/domain-error03.png){.thumbnail}

Clicca sul pulsante `...`{.action} a destra dell'operazione.<br>
Nella nuova finestra, inserisci le informazioni del contatto corrispondente.

![dominio](images/domain-error04.png){.thumbnail}

#### Codice di trasferimento errato 

Al momento del trasferimento del dominio in OVHcloud è necessario inserire un codice di trasferimento (**authInfo**). Se il codice non è corretto, l'operazione è sospesa ma è possibile riavviarla inserendo il codice corretto.

![dominio](images/domain-error05.png){.thumbnail}

Clicca sul pulsante `...`{.action} a destra dell'operazione.<br>
Nella finestra che segue, inserisci il codice di trasferimento (**authInfo**) e riavvia l'operazione.

![dominio](images/domain-error06.png){.thumbnail}

#### Errore associato ai server DNS

Si può verificare un errore se i server DNS associati a un dominio non funzionano.<br>
Nell'esempio qui sotto, l'indirizzo IP del server DNS non risponde.

![dominio](images/domain-error07.png){.thumbnail}

Nella sezione `Domini`{.action}, seleziona il dominio e clicca sulla scheda `Server DNS`{.action}. Da questa scheda è possibile [modificare i server DNS](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/). 

#### Errore su un dominio.**ie**, **.de** o **.it** dopo un aggiornamento DNS

Quando modifichi i tuoi server DNS, il registro può verificare i nuovi server DNS e la zona DNS associata e bloccare il dominio se la configurazione non è conforme.

> [!warning]
>
> Questo tipo di blocco è disposto dal Registrar e non da OVHcloud. Anche se il dominio è bloccato dal Registro, i server DNS appaiono come `Attivi` nello Spazio Cliente OVHcloud.

Per verificare che il tuo dominio sia bloccato, accedi alla tabella delle `Operazioni in corso`{.action}.

![dominio](images/domain-error08.png){.thumbnail}

Per verificare il tuo dominio, ti consigliamo di utilizzare il tool di verifica rilasciato dal Registro:

- Per un dominio.**de**: <https://nast.denic.de/>.
- Per un dominio.**it**: <https://dns-check.nic.it/>.

> [!primary]
>
> Se il tuo registro non fornisce strumenti di verifica dei server DNS, è possibile interrogare i tuoi nuovi server DNS tramite il comando `nslookup` on su un "ordine di comando" Windows o tramite il comando `dig` su un "terminal" Linux o macOS. 
>
> Se i tuoi server DNS sono raggiungibili, il tool restituisce un indirizzo IP.
>
> In ogni caso, assicurati che il server DNS sia configurato correttamente per accogliere la zona DNS del tuo dominio.

Una volta individuata l'origine dell'errore e corretta, clicca sul pulsante `...`{.action} a destra dell'operazione in questione e riavvia l'operazione di verifica DNS.

#### Errore interno OVHcloud

È possibile riscontrare un errore per i dettagli di "errore interno". Questo errore non consente azioni da parte tua.<br>
Per prima cosa verifica che il tuo dominio e i server DNS siano attivi correttamente. 

Se riscontri un'anomalia non legata alla configurazione dei server DNS o della zona DNS, ti invitiamo ad aprire un ticket di assistenza presso il supporto OVHcloud per identificare l'origine del malfunzionamento.

![dominio](images/domain-error09.png){.thumbnail}

## Per saperne di più

[Trasferire un dominio in OVHcloud](https://docs.ovh.com/it/domains/trasferire-un-dominio-generico-in-ovh/)

[Trasferire un dominio verso un altro Registrar](https://docs.ovh.com/it/domains/trasferisci_in_uscita_un_dominio_generico_o_geografico/)

[Modifica i server DNS di un dominio OVHcloud](https://docs.ovh.com/it/domains/web_hosting_gestisci_il_tuo_server_dns/)
 
Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
