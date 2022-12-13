---
title: "Utilizza un certificato SSL EV per il tuo sito Web"
slug: ssl-ev
excerpt: "Come ordinare e installare un certificato SSL EV sul tuo hosting Web OVHcloud"
section: SSL
order: 03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 13/12/2022**
  
## Obiettivo

I certificati Secure Socket Layer (SSL) permettono di cifrare gli scambi effettuati da o verso il tuo sito Web. In questo modo si evita che una persona o un robot malevolo "ascolti" chiaramente le richieste inviate o inviate al tuo sito Web.

OVHcloud propone diversi tipi di certificati SSL sulle nostre offerte di [hosting condiviso OVHcloud](https://www.ovhcloud.com/it/web-hosting/). Per maggiori informazioni, consulta la guida [Gestire un certificato SSL su un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/). I certificati SSL sono indispensabili per la sicurezza del tuo sito Web.

Esistono tre tipi di certificati SSL:

- Domain Conferma (DV)
- Organizzazione di conferma (OV)
- Extended Conferma (EV)

I livelli di crittografia SSL sono identici tra questi tre tipi di certificati.

La differenza principale risiede nel livello di verifica che sarà realizzato dall'Autorità di certificazione (AC) che rilascia il certificato SSL e ne attesta l'autenticità.

I certificati SSL EV sono quelli con i più elevati livelli di verifica e sicurezza. In genere, il certificato SSL EV è utilizzato per siti Web sensibili o molto grandi. Il certificato fornirà il più alto livello di identificazione disponibile.

Per gli hosting condivisi OVHcloud, l'autorità di certificazione che rilascia i certificati SSL EV è [Sectigo](https://sectigostore.com){.external}.

> [!warning]
>
> I certificati SSL EV non sono disponibili per tutti. Verifica se hai diritto alla sottoscrizione **prima** di ordinarla, aiutandoti con gli elementi indicati nei [prerequisiti](#requirements) di questa guida.
>
> Ti ricordiamo che, una volta avviato l'ordine e trasmesso al nostro provider di certificati/autorità di certificazione Sectigo, **nessun rimborso sarà possibile**.
>

**Questa guida ti mostra come ordinare e installare un certificato SSL EV sul tuo hosting Web OVHcloud**
    
## Prerequisiti <a name="requirements"></a>

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Ordinare o disporre di un [hosting condiviso OVHcloud](https://www.ovhcloud.com/it/web-hosting/) sul quale non è già installato alcun certificato SSL.
- Ordinare o disporre di un [dominio](https://www.ovhcloud.com/it/domains/) e disporre dei diritti esclusivi sull'utilizzo. Il dominio non deve essere già associato a un certificato SSL.
- essere un'organizzazione (impresa, agenzia governativa, ...) registrata presso un registro ufficiale.
- Disporre dell'autorizzazione della tua organizzazione per ordinare un certificato SSL EV
- Essere in grado di giustificare con esattezza le informazioni e le coordinate relative alla tua organizzazione.

Per verificare se hai diritto alla sottoscrizione di un certificato SSL EV, clicca su [questo link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}.
  
## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](https://partner.ovhcloud.com/it/). OVHcloud non sarà infatti in grado di fornirti assistenza **per tutte le fasi di verifica direttamente realizzata con l'autorità di certificazione Sectigo**. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.
>

### Step 1: ordina il certificato SSL EV

#### 1.1 - Per un dominio e un hosting già esistenti presso OVHcloud

Consulta la nostra guida su come [gestire un certificato SSL su un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/) e seleziona il **Certificato SSL EV** una volta arrivato nella galleria di comando.

Inserisci con esattezza le informazioni richieste da **Sectigo** prima di ricevere il certificato SSL EV. 

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Clicca su `Continua`{.action} una volta **tutti gli elementi** inseriti correttamente.

Continua l'ordine fino al pagamento per confermare la richiesta di creazione del certificato SSL.

> [!alert]
>
> Una volta convalidato l'ordine, la domanda di certificato SSL EV viene inviata all'autorità di certificazione **Sectigo**.
>
> Assicurati obbligatoriamente di poter sottoscrivere un certificato SSL EV **prima di pagare il certificato**.
>
> Infatti, non sarà possibile alcun rimborso dell'SSL EV, **anche se la procedura di verifica presso Sectigo non avrà esito positivo**.
>

#### 1.2 - Per un nuovo dominio e un nuovo hosting

Se non hai ancora ordinato il tuo dominio e il servizio di hosting associato, accedi alla pagina [homepage OVHcloud](https://www.ovhcloud.com/it/), inserisci un dominio nel**form di ricerca previsto a questo scopo** e clicca su `Cerca`{.action} per avviare il tuo ordine.

![SSL EV select domain](images/ssl_ev_order_1.png){.thumbnail}

Seleziona il tuo dominio, scegli il tuo hosting e le opzioni fino allo step `Configura il tuo hosting Web`

Seleziona `Modulo in 1 click`{.action} e `CDN`{.action} poi scendi giù dalla sezione `Proteggi il tuo sito Web con i nostri certificati SSL`{.action}

![SSL EV order](images/ssl_ev_order.png){.thumbnail}

Scegli `Sectigo EV SSL`{.action} e clicca su `Seguente`{.action}.

Nella nuova pagina, inserisci correttamente le informazioni richieste da **Sectigo** prima di ricevere il certificato SSL EV:

![SSL EV form](images/ssl_ev_order_6.png){.thumbnail}

Clicca su `Seguente`{.action} una volta **tutti gli elementi** inseriti correttamente.

Continua il tuo ordine fino al pagamento per avviare l'installazione dei tuoi servizi.

> [!alert]
>
> Una volta convalidato l'ordine, la domanda di certificato SSL EV viene inviata all'autorità di certificazione **Sectigo**. 
>
> Assicurati obbligatoriamente di poter sottoscrivere un certificato SSL EV **prima di pagare il certificato**.
>
> Infatti, non sarà possibile alcun rimborso dell'SSL EV, **anche se la procedura di verifica presso Sectigo non avrà esito positivo**.
>

### Step 2: verifiche con l'Autorità di certificazione (AC) Sectigo

Tutte le azioni descritte in questa fase possono essere eseguite su diversi giorni. I termini **dipendono** dalle verifiche effettuate da Sectigo.

> [!warning]
>
> In questo step, l'intero processo dipende dal provider del certificato **Sectigo** e dalle informazioni inserite al momento dell'ordine del tuo certificato SSL EV. 
>
> Solo **Sectigo** può intervenire su questo step e OVHcloud non potrà agire su questo livello.
>
> In effetti, il ruolo dell'AC Sectigo è quello di certificare, in modo indipendente e imparziale, le informazioni della tua organizzazione per integrarle nel certificato SSL EV.
>
> C'è **Sectigo** che decide se rilasciare un certificato SSL EV o meno OVHcloud. Sectigo è per definizione l'unico ad avere autorità sulla certificazione.
>

#### 2.1 - Ricezione dell'email di conferma da parte di Sectigo

Una volta effettuato l'ordine, Sectigo invierà un'email con un link di conferma e una procedura da seguire.
Verifica le tue informazioni e conferma la tua richiesta seguendo le indicazioni presenti in questa email. 

Per assicurarti che gli scambi via email con Sectigo avvengano correttamente, verifica anche la validità dell'indirizzo email inserito nel form al momento dell'ordine del certificato SSL EV e l'indirizzo email di contatto associato al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).

#### 2.2 - Verifiche effettuate dall'Autorità di Certificazione Sectigo

Sectigo verificherà l'esistenza della tua organizzazione ed effettuerà la registrazione presso i registri ufficiali.

> [!primary]
>
> Sectigo può non essere in grado di verificare tutte le informazioni dai registri ufficiali. I servizi di Sectigo possono contattarti telefonicamente al numero indicato al momento dell'ordine o al numero di telefono ufficiale della tua organizzazione.
>

Sectigo verificherà se hai l'esclusiva/autorità sulla proprietà e l'utilizzo del dominio con cui vuoi utilizzare il certificato SSL EV.

#### 2.3 - Ultime verifiche telefoniche con Sectigo

Una volta effettuate le verifiche da Sectigo, verrai contattato dai loro servizi per telefono per finalizzare la sottoscrizione del tuo certificato SSL EV.

> [!success]
>
> Per maggiori informazioni sulle operazioni descritte nello Step 2**, consulta la [documentazione ufficiale di Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external} sull'argomento.
>

### Step 3: installazione del certificato SSL EV con il tuo dominio e il tuo hosting OVHcloud

Una volta completata l'operazione, i loro servizi generano il certificato SSL EV e ci trasmettono gli elementi necessari all'installazione sul tuo hosting.

A questo punto non ti resterà che [inserire il tuo sito in HTTPS](https://docs.ovh.com/it/hosting/attivare-https-su-sito-internet-tramite-certificato-ssl/) per utilizzare appieno il tuo certificato SSL EV.

## Per saperne di più <a name="go-further"></a>

[Sito ufficiale Sectigo](https://sectigostore.com){.external}

[Descrizione delle verifiche effettuate da Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-){.external}

[Gestire un certificato SSL su un hosting Web](https://docs.ovh.com/it/hosting/i_certificati_ssl_sugli_hosting_web_ovh/)

[Attiva il tuo sito in HTTPS](https://docs.ovh.com/it/hosting/attivare-https-su-sito-internet-tramite-certificato-ssl/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.