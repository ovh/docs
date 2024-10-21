---
title: "Gestire un certificato SSL su un hosting Web"
excerpt: "Questa quiga ti mostra come attivare e utilizzare un certificato SSL sugli hosting Web OVHcloud"
updated: 2023-12-06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Le operazioni di gestione degli hosting Web OVHcloud, disponibili direttamente nell’area utente dedicata, includono diverse azioni eseguibili sui certificati SSL generati in OVHcloud o ottenuti presso altri provider e poi importati. Installare questi certificati è importante, in quanto consentono ai siti Internet di stabilire una connessione SSL sicura alla rete ed essere accessibili in HTTPS.

**Questa guida ti mostra come gestire un certificato SSL su un hosting Web OVHcloud.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](/links/web/hosting){.external} attivo.
- Aver registrato almeno un [dominio](/links/web/domains){.external}.
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager){.external}, sezione `Web Cloud`{.action}.

## Procedura

Per generare un certificato SSL su un hosting Web OVHcloud sono necessari diversi step. Ti consigliamo di seguire **nell'ordine** i 3 step descritti di seguito.

[1. Attiva un certificato SSL su un multisito](#multisite): se la tua soluzione o il tuo certificato SSL te lo permettono, puoi far beneficiare diversi dei tuoi multisiti di una connessione protetta SSL.

[2. Attiva un certificato SSL sul tuo hosting Web](#enablessl): ti aiuta ad attivare un certificato SSL sul tuo hosting Web. Può trattarsi di un certificato gratuito o a pagamento ordinato presso OVHcloud. Il certificato SSL ordinato può essere importato anche da un altro provider.

[3. Rigenera un certificato SSL su un hosting Web](#regeneratessl): ti permette di rigenerare un certificato SSL Let's Encrypt sul tuo hosting Web attivando l'SSL su uno o più multisiti.

Puoi anche [eliminare il certificato SSL su un hosting Web](#deletessl). **Ti ricordiamo che questo potrebbe comportare dei rischi se uno dei tuoi siti Web utilizza attualmente il certificato che intendi eliminare**.

### 1. Attiva un certificato SSL su un multisito <a name="multisite"></a>

In base al [certificato SSL](/links/web/hosting-options-ssl){.external} che vuoi attivare, puoi attivare una connessione SSL sicura su uno o più dei tuoi multisiti. Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`{.action}. Nella sezione `Hosting`{.action}, e clicca sulla scheda Multisito.

La tabella che appare contiene quindi tutti i domini che hai aggiunto al tuo hosting. La colonna "SSL" mostra lo stato di attivazione delle connessioni SSL sui tuoi multisiti.

![Gestione SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/ssls.png){.thumbnail}

A questo punto, tre stati potrebbero apparire:

|Stato|Descrizione|
|---|---|
|Attivo|Sul multisito è già attivo un certificato SSL. Se il tuo sito non è disponibile in HTTPS, consulta la nostra guida [Attivare HTTPS su un sito Internet tramite il certificato SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website){.external}.|
|Da generare|Sul multisito è stato attivato un certificato SSL ma tecnicamente non è ancora abilitato. In questo caso, è necessario rigenerarlo in modo che includa i nuovi domini del multisito.|
|Disattivo|Sul multisito non è attivo nessun certificato SSL. Per attivarlo, segui le indicazioni descritte qui sotto.|

Per attivare un certificato SSL su un multisito, clicca sui tre puntini `...`{.action} in corrispondenza del multisito interessato e seleziona `Modifica il dominio`{.action}. Nella finestra che appare seleziona la casella `SSL`{.action}. Puoi anche attivare l'opzione per modificare il sottodominio www insieme al dominio associato. Segui gli step fino alla conferma della modifica.

> [!warning]
>
> L'attribuzione di un certificato SSL a un ingresso multisito tramite la tabella "Multisito" è possibile solo se è stato ordinato il certificato SSL gratuito **Let's Encrypt** fornito da OVHcloud.
>
> I certificati SSL a pagamento **Sectigo** (DV ed EV) sono validi per un solo dominio (e il suo sottodominio **www*). La dicitura *Attivato* non potrà quindi comparire a destra degli altri multisiti dichiarati sull’hosting Web.
>
> Alcuni certificati SSL **Esterni** possono essere validi per più domini contemporaneamente. Se utilizzi uno di essi, la dicitura *Attivato* non comparirà per tutti i domini dichiarati nella tabella "multisito". *Il tuo certificato SSL sarà comunque valido per i domini inclusi*.
>

![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Una volta inoltrata la richiesta di attivazione, lo stato della connessione SSL per il multisito deve essere aggiornato dopo pochi secondi e lo stato viene sostituito con "Da generare". Ripeti questa operazione per tutti i multisiti su cui vuoi attivare L’SSL.

> [!primary]
>
> Puoi avere due situazioni in questo stato:
>
> - **Non hai un certificato.**
> Prosegui nella lettura di questa guida nella sezione [Attiva un certificato SSL sul tuo hosting Web](#enablessl) e scegli il "Certificato gratuito (Let's Encrypt)", che supporta i siti multisito.
>
> - **Il certificato SSL è attivo, ma hai aggiunto altri siti multisito.**
> Prosegui nella lettura di questa guida alla sezione [Rigenerare un certificato SSL su un hosting Web](#regeneratessl) per rigenerare il certificato SSL per i multisiti restanti.
>

### 2. Attivare un certificato SSL su un hosting Web <a name="enablessl"></a>

Prima di procedere con questa configurazione, assicurati che lo step precedente di [attivazione di un certificato SSL su un sito multisito](#multisite) sia stato effettuato correttamente. Almeno un dominio deve avere l'opzione SSL `Attivata` o lo stato `A Genera` per attivare il certificato SSL.<br>
**Queste informazioni non si applicano se selezioni `Certificato a pagamento`{.action} o `Importa il tuo certificato SSL`{.action}.**

> [!warning]
>
> Prima di proseguire, assicurati anche che il record o i record multisito per i quali attivi l'opzione SSL puntino verso l'indirizzo IP dell'hosting Web. Questa configurazione viene proposta automaticamente quando aggiungi o modifichi un record multisito, ma deve essere fatta manualmente per un dominio non gestito nel tuo Spazio Cliente.<br>
> - Nella scheda `Informazioni generali`{.action}, clicca su `IPv4` e seleziona l'indirizzo IP del tuo hosting.
>
> ![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/find-ipv4.png){.thumbnail}
>
> - Configura la zona DNS del dominio dichiarato su multisito, dalla sezione `Domini`{.action}, nella scheda `Zona DNS`{.action}. Modifica o aggiungi un record di tipo `A` corrispondente al tuo record multisito e inserisci l'indirizzo IP del tuo hosting nella `Cible`.
>
> ![managessl](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/modify-an-entry.png){.thumbnail}
>
> Per maggiori informazioni, consulta le nostre guide [sulla configurazione di un record multisito](/pages/web_cloud/web_hosting/multisites_configure_multisite) o su [la configurazione di una zona DNS](/pages/web_cloud/domains/dns_zone_edit).

Gli hosting Web OVHcloud permettono di attivare diversi tipi di [certificati SSL](/links/web/hosting-options-ssl){.external}:

- un certificato SSL gratuito Let’s Encrypt, [incluso nei piani di hosting Web compatibili](/links/web/hosting-options-ssl){.external}
- un certificato SSL a pagamento, [in opzione nei piani di hosting Web compatibili](/links/web/hosting-options-ssl){.external}
- un certificato SSL ottenuto presso un altro provider e importato sull’hosting Web OVHcloud

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`{.action}. Seleziona il tuo servizio nella sezione `Hosting`{.action}. Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Nella scheda "Certificato SSL" dovrebbe comparire la voce "No", che indica che sull'hosting Web non è stato configurato alcun certificato SSL.

Clicca sui tre puntini `...`{.action} in corrispondenza di "Certificato SSL" e seleziona `Ordina un certificato SSL`{.action}.

Nel caso che invece compaia la voce “Sì”, significa che sull’hosting Web è già installato un certificato e non sarà possibile ordinarne un altro fino a quando quello esistente risulterà attivo.

![Gestione SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate.png){.thumbnail}

Nella nuova finestra, seleziona il certificato che vuoi generare. Ti ricordiamo che, in base al [piano di hosting Web](/links/web/hosting){.external} attivo e alla sua configurazione, alcune delle soluzioni elencate in questa guida potrebbero non essere disponibili. Una volta effettuata la scelta, clicca sul pulsante `Seguente`{.action}.

![Gestione SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/order-an-ssl-certificate-step-1-le.png){.thumbnail}

A seconda dell’opzione selezionata, potrebbero essere necessari alcuni step aggiuntivi:

- i **certificati SSL gratuiti** non dovrebbero richiedere ulteriori azioni, tranne nell’eventualità che un elemento tecnico impedisca l’attivazione del certificato (in questo caso compare un messaggio nello Spazio Cliente OVHcloud, che indica gli elementi da verificare) o la convalida del dominio necessaria per il suo ottenimento. Anche in questo caso riceverai una notifica e sarà necessario seguire le indicazioni fornite.

- i **certificati SSL a pagamento** richiedono il completamento degli step del processo d’ordine per essere generati. Per alcune tipologie sono necessarie convalide specifiche ed è quindi possibile che vengano inviate una o più email a questo proposito. Segui le indicazioni contenute in questi messaggi per completare l’installazione.

- l’**importazione di un certificato SSL** richiede l’inserimento di alcune informazioni aggiuntive. Segui le indicazioni fornite dal provider che lo ha generato. Di solito forniscono 3 file: `certificate.crt`, `private.key` e `ca_bundle.crt`. Dopo aver selezionato `Importa il tuo certificato SSL`{.action}, clicca su `Avanti`{.action}. Nella prima sezione "Copia il contenuto del tuo certificato (solo RSA):" copia il contenuto del file "certificato.crt", nella seconda sezione "Copia il contenuto della tua chiave privata (non cifrata):" copia il contenuto del file "chiave.privata" e nella terza sezione "Copia il contenuto della tua catena di certificati:" copia il contenuto del file "ca_bundle.crt" e clicca su `Conferma`{.action}.

In base alla tipologia di certificato scelta, l’installazione può durare da pochi minuti a diversi giorni. Per verificare che l’operazione sia stata effettuata correttamente, ritorna alla scheda `Informazioni generali`{.action} dello Spazio Cliente OVHcloud e verifica che nel riquadro **Configurazione** sotto **Certificato SSL** compaia la voce “Sì”.

![Gestione SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/tab-ssl-le.png){.thumbnail}

### 3. Rigenerare un certificato SSL di un hosting Web <a name="regeneratessl"></a>

> [!primary]
>
> Questa operazione è valida esclusivamente per i certificati che consentono l’attivazione di una connessione SSL sicura su più multisiti.
>

Una volta attivata la connessione SSL su uno o più dei tuoi multisiti, lo stato visualizzato è “Da generare”. Questo passaggio è indispensabile per poter aggiungere i domini interessati al certificato SSL dell’hosting.

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`{.action}. Nella sezione `Hosting`{.action}, Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Clicca sui tre puntini `...`{.action} in corrispondenza di "Certificato SSL" e `seleziona Rigenera il certificato SSL`{.action}.

![Gestione SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/regenerate-ssl-certificate.png){.thumbnail}

Leggi le informazioni che compaiono nella nuova finestra, clicca su `Conferma`{.action} e attendi il tempo necessario alla rigenerazione del certificato. Questa operazione potrebbe durare anche diverse ore.

Ti ricordiamo che Let's Encrypt, l’autorità che fornisce i certificati SSL sugli hosting Web OVHcloud, impone un [limite di cinque rigenerazioni a settimana](https://letsencrypt.org/docs/rate-limits/){.external}. Ti consigliamo quindi di verificare attentamente il numero di rigenerazioni settimanali da eseguire, per evitare qualsiasi impatto sulla tua attività.

![Gestione SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/ssl-regeneration.png){.thumbnail}

### Eliminare un certificato SSL da un hosting Web <a name="deletessl"></a>

Il certificato SSL installato su un hosting può essere eliminato in qualsiasi momento. Prima di effettuare questa operazione **ti consigliamo di assicurarti che la rimozione del certificato non abbia impatto sulla raggiungibilità dei tuoi siti Internet**. Ti ricordiamo inoltre che se il tuo sito utilizza il protocollo HTTPS ma non usufruisce di una connessione SSL, i tuoi visitatori visualizzeranno un errore di sicurezza.

Queste operazioni sono relative ai parametri dei tuoi siti, per cui OVHcloud non fornisce assistenza. In caso di difficoltà o dubbi, ti consigliamo di contattare un esperto del settore.

Accedi allo [Spazio Cliente OVHcloud](/links/manager){.external} e seleziona `Web Cloud`{.action}. Nella sezione `Hosting`{.action}, Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Clicca sui tre puntini in corrispondenza di "Certificato SSL" e seleziona `Elimina SSL`{.action}.

Nella nuova pagina, conferma l’eliminazione: l’operazione diventerà effettiva entro poche ore.

![Gestione SSL](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/general-information/delete-ssl.png){.thumbnail}

> [!warning]
>
> L'eliminazione di un certificato SSL a pagamento **Sectigo** (DV o EV) è definitiva, anche se il certificato non era ancora scaduto. Non verrà effettuato alcun rimborso proporzionale al tempo restante. Per reinstallare un certificato SSL **Sectigo** (DV o EV), è necessario effettuare un nuovo ordine e pagare per l'intero importo del nuovo certificato SSL sottoscritto.
>

### Correggi i frequenti errori dei certificati SSL degli hosting Web

#### "You already have an SSL certificate on your account. It will be migrated on new SSL offers in the next week."

Questo messaggio indica che sei già proprietario di un certificato SSL. Non è quindi necessario attivare un nuovo certificato SSL (Let's Encrypt) sul tuo hosting Web.

Per proseguire con le tue azioni, consulta la sezione "[attivazione di un certificato SSL su un sito multisito](#multisite)" di questa guida.

#### "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone."

La notifica può essere motivata in tre casi.

- 1: il dominio associato al sito Web punta verso l'indirizzo IP della CDN del tuo hosting Web, con nessuna opzione CDN attiva sul tuo hosting Web:

Per risolvere il problema, assegna l’indirizzo IP dell’hosting Web senza CDN al dominio nella zona DNS attiva.

Per recuperare l’indirizzo IP dell’hosting Web, consulta la nostra guida "[Elenco degli indirizzi IP dei cluster e degli hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Per modificare la zona DNS attiva del dominio, consulta la nostra guida "[Modifica zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 2: Il dominio associato al sito Web non punta verso l'indirizzo IP dell’hosting Web:

Per risolvere il problema, assegna l’indirizzo IP dell’hosting Web al dominio nella zona DNS attiva.
Se sul tuo hosting Web hai attivato un'opzione CDN, puoi utilizzare anche l'indirizzo IP dell'hosting Web con CDN.

Per recuperare l’indirizzo IP dell’hosting Web, consulta la nostra guida "[Elenco degli indirizzi IP dei cluster e degli hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Per modificare la zona DNS attiva del dominio, consulta la nostra guida "[Modifica zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

- 3: Nessuno dei domini presenti nella scheda "Multisito" dispone di un'opzione SSL "attiva":

Per risolvere il problema, attiva il certificato SSL per il o i domini. In caso di necessità, consulta la sezione "[attivazione di un certificato SSL su un sito multisito](#multisite)" di questa guida per proseguire con le tue azioni.

#### Il certificato SSL è attivo sul tuo hosting Web, ma sul tuo sito viene visualizzato il messaggio "Your connection is not private"

Questo messaggio viene visualizzato nei seguenti casi:

- 1: La regola di reindirizzamento verso il tuo URL in "HTTPS" non è configurata correttamente o non esiste nel file ".htaccess":

Per risolvere il problema, consulta il nostro tutorial "[Riscrivere l'URL di accesso al mio sito grazie al mod_rewrite tramite il file .htaccess](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite)" o rivolgiti a un [provider specializzato](/links/partner) in caso di difficoltà.

- 2: Alcuni elementi della pagina Web non sono correttamente reindirizzati verso elementi cifrati in "HTTPS":

Per risolvere il problema, è necessario crittografare l’intero sito Web con il protocollo "HTTPS".
In caso di difficoltà o dubbi, consulta il nostro tutorial "[Hosting Web: passare il proprio sito Web in HTTPS](/pages/web_cloud/web_hosting/ssl-activate-https-website)" o rivolgiti a un [provider specializzato](/links/partner).

> [!success]
>
> Gli elementi interessati sulla pagina Web possono essere visualizzati direttamente dalle informazioni SSL del browser Internet, consultando i *dettagli del Certificato*.
>

#### Hai ordinato un SSL Sectigo EV contemporaneamente al tuo hosting Web, ma il certificato non è ancora attivo e l'hosting Web non funziona correttamente

Questa situazione è dovuta agli step da eseguire per attivare il certificato SSL EV sul tuo hosting Web.

Per risolvere il problema, consulta la nostra guida "[Utilizzare un certificato SSL EV per il proprio sito Web](/pages/web_cloud/web_hosting/ssl_ev)".

> [!primary]
>
> Se il certificato SSL EV non è totalmente attivo, l'ordine non verrà mai chiuso e non genererà mai fatture. Di conseguenza, il servizio di hosting Web non funzionerà correttamente.
>

#### Dopo la scadenza del Certificato SSL Sectigo (DV o EV), comparirà l'errore "No attached domain with ssl enabled or no attached domain that redirect on hosting IPs, please use hosting IP in your domain zone"

Questo errore si verifica ogni volta che il Certificato SSL Sectigo (attivato direttamente dall'hosting Web) scade e l'indirizzo IP dell'hosting Web cambia. In questo caso è necessario far puntare il dominio verso l’indirizzo IP corretto (record di tipo A), direttamente dalla zona DNS attiva del dominio.

Per recuperare l’indirizzo IP dell’hosting Web, consulta la nostra guida "[Elenco degli indirizzi IP dei cluster e degli hosting Web](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)".
Per modificare la zona DNS attiva del dominio, consulta la nostra guida "[Modifica zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)".

## Per saperne di più

[Attivare HTTPS su un sito Internet tramite il certificato SSL](/pages/web_cloud/web_hosting/ssl-activate-https-website){.external}

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).