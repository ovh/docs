---
title: "Hosting Web - Attiva un certificato SSL Sectigo EV"
excerpt: "Questa guida ti mostra come ordinare e installare un certificato SSL Sectigo EV sul tuo hosting Web OVHcloud"
updated: 2025-06-16
---

## Obiettivo

I certificati Secure Socket Layer (SSL) permettono di cifrare gli scambi effettuati da o verso il tuo sito Web. In questo modo si evita che una persona o un robot malevolo "ascolti" chiaramente le richieste inviate o inviate al tuo sito Web.

OVHcloud propone diversi tipi di certificati SSL sulle nostre offerte di [hosting condiviso OVHcloud](/links/web/hosting). Per maggiori informazioni, consulta la guida [Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting). I certificati SSL sono indispensabili per la sicurezza del tuo sito Web.

Esistono tre tipi di certificati SSL:

- Domain Conferma (DV)
- Organizzazione di conferma (OV)
- Extended Conferma (EV)

I livelli di crittografia SSL sono identici tra questi tre tipi di certificati.

La differenza principale risiede nel livello di verifica che sarà realizzato dall'Autorità di certificazione (AC) che rilascia il certificato SSL e ne attesta l'autenticità.

I certificati SSL EV sono quelli con i più elevati livelli di verifica e sicurezza. In genere, il certificato SSL EV è utilizzato per siti Web sensibili o molto grandi. Il certificato fornirà il più alto livello di identificazione disponibile.

Per gli hosting condivisi OVHcloud, l'autorità di certificazione che rilascia i certificati SSL EV è [Sectigo](https://sectigostore.com).

> [!warning]
>
> I certificati SSL EV non sono disponibili per tutti. Verifica se hai diritto alla sottoscrizione **prima** di ordinarla, aiutandoti con gli elementi indicati nei [prerequisiti](#requirements) di questa guida.
>
> Ti ricordiamo che, una volta avviato l'ordine e trasmesso al nostro provider di certificati/autorità di certificazione Sectigo, **nessun rimborso sarà possibile**.
>

**Questa guida ti mostra come ordinare e installare un certificato SSL Sectigo EV sul tuo hosting Web OVHcloud**
    
## Prerequisiti <a name="requirements"></a>

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Ordinare o disporre di un [hosting condiviso OVHcloud](/links/web/hosting).
- Ordinare o disporre di un [dominio](/links/web/domains) e disporre dei diritti esclusivi sull'utilizzo. Il dominio non deve essere già associato a un certificato SSL.
- essere un'organizzazione (impresa, agenzia governativa, ecc.) registrata presso un registro ufficiale.
- Disporre dell'autorizzazione della tua organizzazione per ordinare un certificato SSL Sectigo EV.
- Essere in grado di giustificare con esattezza le informazioni e le coordinate relative alla tua organizzazione.

Per verificare se hai diritto alla sottoscrizione di un certificato SSL Sectigo EV, clicca su [questo link](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-).
  
## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](/links/partner). OVHcloud non sarà infatti in grado di fornirti assistenza **per tutte le fasi di verifica direttamente realizzata con l'autorità di certificazione Sectigo**. Per maggiori informazioni consulta la sezione [Per saperne di più](#go-further) di questa guida.
>

### 1 - ordina il certificato SSL Sectigo EV

> [!warning]
>
> I certificati SSL Sectigo EV offerti da OVHcloud sono validi solo in uno dei due casi seguenti:
>
> - un solo dominio + il suo sottodominio in "www" (esempio: `domain.tld` e `www.domain.tld`);
> - un solo sottodominio (esempio: `sub.domain.tld`).
>
> Se sul tuo hosting Web sono dichiarati altri domini o sottodomini e vuoi anche attribuirgli un certificato SSL, puoi:
>
> - [Attivare un certificato SSL gratuito Let's Encrypt](/pages/web_cloud/web_hosting/ssl_letsencrypt) (se non è già l’opzione predefinita).
> - Attivare uno o più certificati SSL a pagamento ([Sectigo DV](/pages/web_cloud/web_hosting/ssl_dv) o [Sectigo EV](/pages/web_cloud/web_hosting/ssl_ev)).
> - [Installa il tuo certificato SSL](/pages/web_cloud/web_hosting/ssl_custom).

**Prima di proseguire**, verifica che **il dominio e/o sottodominio** interessato dal tuo futuro certificato SSL Sectigo EV:

- punti verso l’indirizzo IP del tuo hosting Web.
- è dichiarato multisito sul tuo hosting Web.
- non dispone già di un certificato SSL attivo.

Per maggiori informazioni, consulta le nostre guide:

- [Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).
- [Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP).
- [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
- [Hosting Web - Gestire un certificato SSL](/pages/web_cloud/web_hosting/ssl_on_webhosting), parte **Disattivare un certificato SSL su un hosting Web**.

> [!primary]
>
> Nel caso in cui desideri sottoscrivere un certificato SSL Sectigo EV per un dominio (esempio: `domain.tld`), verifica che il suo sottodominio in "www" (esempio: `www.domain.tld`) punti anche verso l’indirizzo IP del tuo hosting Web ed sia correttamente dichiarato come multisito.
>
> Perché se ordini il certificato SSL Sectigo EV ma non ti assicuri i i punti precedenti, è necessario effettuare una correzione a posteriori. In questo caso, è necessario eliminare il certificato SSL Sectigo EV precedentemente sottoscritto **senza usufruire di un rimborso** e ordinarne un altro. Il nuovo certificato SSL Sectigo EV deve includere sia il dominio `domain.tld` che il sottodominio "www" `www.domain.tld`.
>
> Ti ricordiamo che se sottoscrivi un certificato SSL Sectigo EV direttamente per un sottodominio (esempio: `sub.domain.tld`), la situazione non interessa te.

#### 1.1 - Per un dominio e un hosting già esistenti presso OVHcloud

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **6** passi:

> [!tabs]
> **Passaggio 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Clicca sul menu `Hosting`{.action} e seleziona l’hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Clicca sulla scheda `Certificati SSL`{.action}.
>>
>> ![Certificati SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Una volta visualizzato il contenuto della scheda, clicca sul pulsante `Ordinare un certificato SSL Sectigo`{.action}.
>>
>> ![SSL Sectigo](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Nella nuova finestra, seleziona il dominio o sottodominio con il menu a tendina e clicca su `Confermare`{.action} per essere reindirizzato al buono d’ordine del tuo certificato SSL Sectigo EV.
>>
>> ![SSL Sectigo selection du domaine](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/ssl-certificates/order-a-sectigo-ssl-certificate-select-domain.png){.thumbnail}
>>
> **Passaggio 6**
>>
>> Seleziona il **Certificato SSL Sectigo EV** una volta arrivato nel tunnel d'ordine, poi prosegui con l'ordine.
>>
>> Inserisci con esattezza le informazioni richieste da **Sectigo** prima di ricevere il certificato SSL Sectigo EV. 
>>
>> ![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}
>>
>> Clicca su `Continua`{.action} una volta **tutti gli elementi** inseriti correttamente.
>>
>> Continua l'ordine fino al pagamento per confermare la richiesta di creazione del certificato SSL.

> [!alert]
>
> Una volta convalidato l'ordine, la domanda di certificato SSL Sectigo EV viene inviata all'autorità di certificazione **Sectigo**.
>
> Assicurati obbligatoriamente di poter sottoscrivere un certificato SSL Sectigo EV **prima di pagare il certificato**.
>
> Infatti, non sarà possibile alcun rimborso dell'SSL Sectigo EV, **anche se la procedura di verifica presso Sectigo non avrà esito positivo**.
>

#### 1.2 - Per un nuovo dominio e un nuovo hosting web

Se non hai ancora ordinato il tuo dominio e il servizio di hosting associato, accedi alla pagina [homepage OVHcloud](/links/website), inserisci un dominio nel**form di ricerca previsto a questo scopo** e clicca su `Cerca`{.action} per avviare il tuo ordine.

![SSL EV select domain](/pages/assets/screens/website/order/ssl-ev-search-bar.png){.thumbnail}

Seleziona il tuo dominio, scegli il tuo hosting e le opzioni fino allo step `Configura il tuo hosting Web`

Seleziona `Modulo in 1 click`{.action} e `CDN`{.action} poi scendi giù dalla sezione `Proteggi il tuo sito Web con i nostri certificati SSL`{.action}

![SSL EV order](/pages/assets/screens/website/order/ssl-ev-selection.png){.thumbnail}

Scegli `Sectigo EV SSL`{.action} e clicca su `Seguente`{.action}.

Nella nuova pagina, inserisci correttamente le informazioni richieste da **Sectigo** prima di ricevere il certificato SSL Sectigo EV:

![SSL EV form](/pages/assets/screens/website/order/ssl-ev-step-2.png){.thumbnail}

Clicca su `Seguente`{.action} una volta **tutti gli elementi** inseriti correttamente.

Continua il tuo ordine fino al pagamento per avviare l'installazione dei tuoi servizi.

> [!alert]
>
> Una volta convalidato l'ordine, la domanda di certificato SSL Sectigo EV viene inviata all'autorità di certificazione **Sectigo**.
>
> Assicurati obbligatoriamente di poter sottoscrivere un certificato SSL Sectigo EV **prima di pagare il certificato**.
>
> Infatti, non sarà possibile alcun rimborso dell'SSL Sectigo EV, **anche se la procedura di verifica presso Sectigo non avrà esito positivo**.
>

### 2 - verifiche con l'Autorità di certificazione (AC) Sectigo

Tutte le azioni descritte in questa fase possono essere eseguite su diversi giorni. I termini **dipendono** dalle verifiche effettuate da Sectigo.

> [!warning]
>
> In questo step, l'intero processo dipende dal provider del certificato **Sectigo** e dalle informazioni inserite al momento dell'ordine del tuo certificato SSL Sectigo EV.
>
> Solo **Sectigo** può intervenire su questo step e OVHcloud non potrà agire su questo livello.
>
> In effetti, il ruolo dell'AC Sectigo è quello di certificare, in modo indipendente e imparziale, le informazioni della tua organizzazione per integrarle nel certificato SSL Sectigo EV.
>
> C'è **Sectigo** che decide se rilasciare un certificato SSL Sectigo EV o meno OVHcloud. Sectigo è per definizione l'unico ad avere autorità sulla certificazione.
>

#### 2.1 - Ricezione dell'email di conferma da parte di Sectigo

Una volta effettuato l'ordine, Sectigo invierà un'email con un link di conferma e una procedura da seguire.
Verifica le tue informazioni e conferma la tua richiesta seguendo le indicazioni presenti in questa email. 

Per assicurarti che gli scambi via email con Sectigo avvengano correttamente, verifica anche la validità dell'indirizzo email inserito nel form al momento dell'ordine del certificato SSL Sectigo EV e l'indirizzo email di contatto associato al tuo [Spazio Cliente OVHcloud](/links/manager).

> [!primary]
>
> Allo stesso tempo e per certificare la proprietà del tuo dominio presso Sectigo, viene automaticamente creato un file in formato *.txt* nello spazio FTP del tuo hosting web. e verrà rimosso quando non sarà più necessario a Sectigo.
>
> Ti ricordiamo che alcune restrizioni applicate dalla tua parte (ad esempio in un file.htaccess) potrebbero impedire questa verifica.
> Se i diritti di accesso FTP "CHMOD" sono anch'essi limitati o insufficienti, la verifica può anche essere bloccata.
>
> Ti consigliamo inoltre di **non** attivare o lasciare attivo il [firewall applicativo](/pages/web_cloud/web_hosting/multisites_activating_application_firewall), disponibile con i nostri hosting Web, per tutta la durata dell'installazione del tuo certificato SSL Sectigo EV.
>

#### 2.2 - Verifiche effettuate dall'Autorità di Certificazione Sectigo

Sectigo verificherà l'esistenza della tua organizzazione ed effettuerà la registrazione presso i registri ufficiali.

> [!primary]
>
> Sectigo può non essere in grado di verificare tutte le informazioni dai registri ufficiali. I servizi di Sectigo possono contattarti telefonicamente al numero indicato al momento dell'ordine o al numero di telefono ufficiale della tua organizzazione.
>

Sectigo verificherà se hai l'esclusiva/autorità sulla proprietà e l'utilizzo del dominio con cui vuoi utilizzare il certificato SSL Sectigo EV.

#### 2.3 - Ultime verifiche telefoniche con Sectigo

Una volta effettuate le verifiche da Sectigo, verrai contattato dai loro servizi per telefono per finalizzare la sottoscrizione del tuo certificato SSL Sectigo EV.

> [!success]
>
> Per maggiori informazioni sulle operazioni descritte nello **Step 2**, consulta la [documentazione ufficiale di Sectigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-) sull'argomento.
>

### 3 - installazione del certificato SSL Sectigo EV con il tuo dominio e il tuo hosting OVHcloud

Una volta completata l'operazione, i loro servizi generano il certificato SSL Sectigo EV e ci trasmettono gli elementi necessari all'installazione sul tuo hosting web.

A questo punto non ti resterà che [inserire il tuo sito in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website) per utilizzare appieno il tuo certificato SSL Sectigo EV.

## Per saperne di più <a name="go-further"></a>

[Sito ufficiale Sectigo](https://sectigostore.com)

[Descrizione delle verifiche effettuate da Setigo](https://help.sectigostore.com/support/solutions/articles/22000218717-extended-validation-ev-)

[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting)

[Attiva il tuo sito in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).