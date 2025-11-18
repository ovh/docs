---
title: "Come ottenere l'impronta di carbonio dei servizi OVHcloud"
excerpt: "Questa guida ti mostra come recuperare l’impronta di carbonio mensile dei servizi OVHcloud grazie al nostro calcolatore di carbonio"
updated: 2025-06-17
---

## Obiettivo

Nell’ambito della propria attività professionale o per interesse personale, potrebbe essere necessario calcolare l’impronta di carbonio dei propri servizi.

**Questa guida ti mostra come recuperare ogni mese l’impronta di carbonio dei tuoi servizi OVHcloud.**

## Prerequisiti

- Essere contatto "Fatturazione" dei servizi per i quali si desidera ottenere l'impronta di carbonio. Per maggiori informazioni, consulta la [guida sulla gestione dei contatti](/pages/account_and_service_management/account_information/managing_contacts).

**Il calcolo dell'impronta di carbonio è disponibile per i seguenti servizi:**

- [Server Dedicato](/links/bare-metal/bare-metal) (Advance, Game, Scale, High Grade, Storage)
- [Server Dedicato Eco](/links/bare-metal/eco) (Rise, Kimsufi, So You Start)
- [VMware on OVHcloud](/links/hosted-private-cloud/vmware)
- [Istanze Public Cloud (Compute)](/links/public-cloud/compute)

## Procedura

È necessario tenere conto di diversi aspetti:

- Non è possibile generare un bilancio patrimoniale per il mese in corso.
- Che tu inserisca, tramite l’API OVHcloud, una data di inizio, metà o fine mese per il mese scelto, il bilancio prenderà in considerazione il mese completo.
- Nessun bilancio può essere generato dopo gli ultimi 24 mesi.
- Non è possibile generare bilanci per il periodo precedente la data di attivazione della funzionalità per ogni servizio OVHcloud (vedi la tabella sottostante).

| Servizio | Data di inizio utilizzo del calcolatore di impronta di carbonio |
|---|---|
| Server Dedicato | 2023/05/01 |
| Server Dedicato Eco | 2023/05/01 |
| VMware on OVHcloud | 2023/08/01 |
| Istanze Public Cloud | 2025/01/01 |

### Recupera il bilancio mensile del mese precedente dallo Spazio Cliente OVHcloud

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
1. Nella nuova pagina, nella colonna a sinistra, scorri la pagina fino alla sezione **Link utili**, poi clicca sulla scheda `Il mio bilancio del carbonio`{.action}.
1. Nella nuova pagina clicca su `Scarica la tua impronta di [Mese] [Anno]`{.action}.

![Carbon footprint](/pages/assets/screens/control_panel/product-selection/right-column/carbon-footprint/my-carbon-footprint.png){.thumbnail}

È possibile recuperare ogni mese l'impronta di carbonio del mese precedente per i servizi compatibili.

Se hai bisogno dell’impronta di carbonio per un mese precedente al mese in corso, è necessario passare dalle nostre API per recuperarla.

### Recupera un bilancio mensile precedente al mese precedente via API

Di default, le API OVHcloud sono messe a disposizione per permettere agli sviluppatori o agli integratori di associare funzionalità presenti o meno nello Spazio Cliente OVHcloud direttamente alle loro applicazioni o soluzioni.

#### Passaggio 1 - Accedi all'API OVHcloud

- Accedi al nostro sito [API OVHcloud](/links/api) (verifica di essere su `https://eu.api.ovh.com` se i tuoi servizi sono ospitati in Europa e su `https://ca.api.ovh.com` se i tuoi servizi sono ospitati al di fuori dell’Europa).
- Nella nuova pagina, clicca su `Explore the OVHcloud API`{.action}.
- Nella nuova pagina che appare, nella parte sinistra della pagina, clicca sul form a destra del campo `v1`{.action} e seleziona/inserisci la voce `/me`.
- Tra le chiamate API che compaiono sotto, cerca e clicca sulla chiamata API seguente: **POST /me/carbonCalculator/task**. Per accedervi, clicca direttamente sulla chiamata API qui sotto:

> [!api]
>
> @api {v1} /me POST /me/carbonCalculator/task
>

- Sul lato destro della pagina compare l’API con il riquadro da completare.
- Clicca sul pulsante in alto a destra intitolato `Authenticate`{.action} e poi sul pulsante `Login with OVHcloud SSO`{.action}.
- Si apre l’interfaccia di connessione al tuo [Spazio Cliente OVHcloud](/links/manager).
- Accedi con il tuo identificativo cliente e clicca su `Authorize`{.action} per utilizzare le API OVHcloud con i tuoi servizi.
- Verrai reindirizzato automaticamente alla pagina precedente dell’API **POST /me/carbonCalculator/task**.

#### Passaggio 2 - Richiedi lo stato patrimoniale e recupera l'ID del task richiesto

Sostituire la data corrente visualizzata nel riquadro dell'API con la data in cui si desidera interrompere il calcolo dello stato patrimoniale. Rispettare il seguente formato di data:

```bash
{
  "date": "YYYY-MM-DD"
}
```

![API](/pages/assets/screens/api/post-me-carboncalculator-task.png){.thumbnail}

Una volta scelta la data e inserita correttamente, clicca sul pulsante blu `EXECUTE`{.action} in basso a destra nella sezione precedentemente compilata.

Se tutto è stato effettuato correttamente, nella finestra `RESPONSE`{.action} appare un `taskID` mentre si scende alla pagina, sotto il pulsante `EXECUTE`{.action}.

![API](/pages/assets/screens/api/post-me-carboncalculator-task-response.png){.thumbnail}

Ad esempio, se il tuo identificativo cliente OVHcloud è `aa00000-ovh` e la data scelta precedentemente era `31-01-2025`, otterrai questo risultato:

```bash
{
  "taskID": "aa00000-ovh_202501"
}
```

Copia solo il valore ottenuto dalla tua parte ed equivalente al valore del nostro esempio `aa00000-ovh_202501` (senza copiare i due `"` situati alle estremità).

#### Passaggio 3 - Recupera il file con il bilancio del carbonio dei tuoi servizi in formato PDF

Grazie al valore del `taskID` precedentemente recuperato, potrai recuperare il bilancio del carbonio dei tuoi servizi in formato PDF.

Resta sul nostro sito [API OVHcloud](/links/api) ed effettua le seguenti operazioni:

- Nella parte sinistra della pagina, clicca sul form a destra del form `v1`{.action} e seleziona/inserisci la scelta `/me`{.action}.
- Dall’elenco di chiamate API che appare qui sotto, cerca e clicca sulla chiamata API seguente: **GET /me/carbonCalculator/task/{taskID}**. Per accedervi, clicca direttamente sulla chiamata API qui sotto:

> [!api]
>
> @api {v1} /me GET /me/carbonCalculator/task/{taskID}
>

- Sul lato destro della pagina compare la chiamata API con un form da compilare.

Compila il form nella sezione `PATH PARAMETERS` nel modo seguente:

- `taskID`: copia qui il valore del taskID recuperato allo Step 2.

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid.png){.thumbnail}

Una volta inserito il valore del `taskID`, clicca sul pulsante blu `EXECUTE`{.action}.

Nella finestra `RESPONSE`{.action}, visualizzata al di sotto del pulsante `EXECUTE`{.action}, è possibile visualizzare il seguente risultato:

![API](/pages/assets/screens/api/get-me-carboncalculator-task-taskid-response.png){.thumbnail}

```bash
{
  "link": "Find here the complete URL to download the carbon footprint in PDF format",
  "status": "SUCCESS",
  "taskID": "aa00000-ovh_202501"
}
```

In questo risultato, copiare l'intero URL in "HTTPS" (**senza virgolette**) presente a destra della dicitura `"link":`, quindi incollarlo nella barra di ricerca del browser Internet per avviare il download del bilancio del carbonio in formato PDF.

Il tuo browser scaricherà automaticamente il file e lo mostrerà.

> [!primary]
>
> A seconda della configurazione del browser, il download e la visualizzazione del file potrebbero essere bloccati. In questo caso, verifica la configurazione del browser e ricarica la pagina.

Una volta aperto il file, troverai questi elementi:

- Una tabella riassuntiva delle emissioni di C02 per categoria per il mese richiesto.
- Una tabella riassuntiva delle emissioni di C02 per categoria tra l'inizio dell'anno civile e il mese richiesto.
- Una tabella in cui sono riportati i valori per tipo di prodotto sottoscritto.
- Un grafico delle emissioni di C02 per categoria.

> [!warning]
> Il link generato è valido solo per 24 ore. Una volta aperto il link, assicurati di scaricare il bilancio del carbonio dal browser.

## Per saperne di più <a name="go-further"></a>

[Iniziare a utilizzare le API OVHcloud](/pages/manage_and_operate/api/first-steps)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).