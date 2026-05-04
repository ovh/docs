---
title: "Reindirizzare un dominio gestito da OVHcloud"
excerpt: "Scopri i diversi tipi di reindirizzamento e come crearne uno per un dominio gestito da OVHcloud"
updated: 2026-03-27
---

<style>
details>summary {
    color:rgb(33, 153, 232) !important;
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

Il reindirizzamento di un dominio consiste nel reindirizzarlo verso una nuova destinazione. Esistono diversi tipi di reindirizzamento, ognuno dei quali risponde a un'esigenza specifica.

**Scopri le diverse modalità per reindirizzare il tuo dominio**

## Prerequisiti

- Disporre di un [dominio](/links/web/domains)
- Essere connessi al proprio hosting Web (per un reindirizzamento tramite file [.htaccess](#htaccess_rewrite)).

<!-- CP-NAV-START:web-domains -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Domini](/links/control-panel/web-domains)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Domini`{.action} > Seleziona il tuo nome di dominio

---
<!-- CP-NAV-END:web-domains -->

## Procedura

### Comprendere il reindirizzamento di un dominio

Questa funzionalità permette di reindirizzare un dominio/sottodominio verso:

- un altro dominio/sottodominio già esistente:
    - **Esempio**: `domain.tld`
- un URL (Uniform Resource Locator) di un sito Internet:
    - **Esempi**: `http://www.domain.tld/welcome/` o `https://www.domain.tld/welcome/` (se il dominio di destinazione dispone di un certificato SSL compatibile).

Queste operazioni possono essere eseguite in diversi modi:

- **Dallo [Spazio Cliente OVHcloud](/links/manager)**, dove un assistente di configurazione permette di impostare il reindirizzamento.
- **Tramite un metodo che richiede programmazione**. Dovrai creare il reindirizzamento direttamente in un file (generalmente un [.htaccess](#htaccess_rewrite)).

> [!warning]
>
> L'attivazione di un reindirizzamento può avere conseguenze sul posizionamento SEO del sito Internet.
> Presta attenzione alle operazioni che stai per effettuare o contatta un [provider specializzato](/links/partner) nel posizionamento SEO, se necessario.
>
> Attenzione: un reindirizzamento creato dallo [Spazio Cliente OVHcloud](/links/manager) non permette di reindirizzare un URL in `https://` verso un altro dominio o un altro URL.
> Per creare questo tipo di reindirizzamento, è necessario utilizzare [una riscrittura URL](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite) tramite un file ".htaccess", ad esempio.
>

### Reindirizzare un dominio dallo Spazio Cliente

Oltre ai reindirizzamenti di "puntamento" verso i record DNS A, AAAA e CNAME, sono disponibili 3 opzioni di reindirizzamento dallo [Spazio Cliente OVHcloud](/links/manager).

Se necessario, consulta la nostra documentazione sui [record DNS](/pages/web_cloud/domains/dns_zone_records).

> [!warning]
>
> Per utilizzare una delle 3 opzioni seguenti, la zona DNS attiva del dominio deve essere gestita nello Spazio Cliente OVHcloud. Queste opzioni di reindirizzamento modificheranno la configurazione della zona DNS per funzionare.
>
> In caso contrario, i reindirizzamenti non funzioneranno.

> [!primary]
>
> Indipendentemente dall'opzione di reindirizzamento scelta, la modifica richiede un tempo di propagazione da 4 a 24 ore al massimo per essere pienamente effettiva.

**Clicca sull'opzione desiderata per visualizzare il contenuto.**

/// details | Opzione 1 - Reindirizzamento visibile permanente verso un indirizzo web

Questa opzione permette, dopo aver inserito il dominio reindirizzato, di mostrare il dominio di destinazione nella barra degli indirizzi del browser al posto del dominio reindirizzato.

- **Esempio**: se reindirizzi `domain1.tld` verso `domain2.tld`, nella barra degli indirizzi del browser apparirà `domain2.tld`.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Questo reindirizzamento "standard" restituisce un codice HTTP 301.

<!-- CP-STEPS-START:configure-redirect-permanent -->
Clicca sulle schede qui sotto per visualizzare i **7** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sulla scheda `Reindirizzamento`{.action}: la tabella mostra i reindirizzamenti attivi per il tuo dominio. Clicca poi su `Aggiungi un reindirizzamento`{.action}.
>>
>> ![Presentazione del menu reindirizzamento](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Step 3**
>>
>> Nella finestra, il dominio da reindirizzare appare già. Compila il modulo **solo** se desideri reindirizzare un *sottodominio*.
>>
>> La casella `Reindirizza anche`{.action} può essere selezionata per reindirizzare anche il sottodominio in `www` verso la stessa destinazione scelta per il dominio/sottodominio.
>>
>> ![Step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 4**
>>
>> Seleziona `Verso un indirizzo Web`{.action}.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 5**
>>
>> Seleziona `Con un reindirizzamento visibile`{.action} tra le due opzioni indicate.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 6**
>>
>> Seleziona `Permanente (301)`{.action} tra le due opzioni indicate, poi inserisci il dominio o l'URL di destinazione del reindirizzamento nel campo `Indirizzo web`{.action} che appare.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-permanent.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 7**
>>
>> In quest'ultimo step, assicurati che le informazioni mostrate siano corrette.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-permanent.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per confermare la configurazione.
>>
>> > [!primary]
>> >
>> > Se appare il messaggio "*Esistono reindirizzamenti a partire dai nomi di dominio che desideri reindirizzare che entrano in conflitto con i reindirizzamenti che desideri aggiungere*", puoi selezionare la casella `Conferma la sovrascrittura del reindirizzamento esistente`{.action} per forzare l'applicazione del reindirizzamento.
>> >
>> > Attenzione, la configurazione precedente verrà disattivata e rimossa.
>> >
>>
<!-- CP-STEPS-END:configure-redirect-permanent -->

///

/// details | Opzione 2 - Reindirizzamento visibile temporaneo verso un indirizzo web

Come per l'opzione 1, questa opzione permette di mostrare, dopo aver inserito il dominio reindirizzato, il dominio di destinazione nella barra degli indirizzi del browser al posto del dominio reindirizzato.

Tuttavia, questa opzione deve essere utilizzata in modo puntuale, ad esempio per eventi temporanei.

Il posizionamento sui motori di ricerca è meno performante rispetto a un reindirizzamento **visibile permanente** di tipo 301 (codice HTTP).

- **Esempio**: se reindirizzi `domain1.tld` verso `domain2.tld`, nella barra degli indirizzi del browser apparirà `domain2.tld`.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Questo reindirizzamento restituisce un codice HTTP 302.

<!-- CP-STEPS-START:configure-redirect-temporary -->
Clicca sulle schede qui sotto per visualizzare i **7** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sulla scheda `Reindirizzamento`{.action}: la tabella mostra i reindirizzamenti attivi per il tuo dominio. Clicca poi su `Aggiungi un reindirizzamento`{.action}.
>>
>> ![Presentazione del menu reindirizzamento](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Step 3**
>>
>> Nella finestra, il dominio da reindirizzare appare già. Compila il modulo **solo** se desideri reindirizzare un *sottodominio*.
>>
>> La casella `Reindirizza anche`{.action} può essere selezionata per reindirizzare anche il sottodominio in `www` verso la stessa destinazione scelta per il dominio/sottodominio.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 4**
>>
>> Seleziona `Verso un indirizzo Web`{.action}.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 5**
>>
>> Seleziona `Con un reindirizzamento visibile`{.action} tra le due opzioni indicate.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 6**
>>
>> Seleziona `Temporaneo (302)`{.action} tra le due opzioni indicate, poi inserisci il dominio o l'URL di destinazione del reindirizzamento nel campo `Indirizzo web`{.action} che appare.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-temporary.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 7**
>>
>> In quest'ultimo step, assicurati che le informazioni mostrate siano corrette.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-temporary.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per confermare la configurazione.
>>
>> > [!primary]
>> >
>> > Se appare il messaggio "*Esistono reindirizzamenti a partire dai nomi di dominio che desideri reindirizzare che entrano in conflitto con i reindirizzamenti che desideri aggiungere*", puoi selezionare la casella `Conferma la sovrascrittura del reindirizzamento esistente`{.action} per forzare l'applicazione del reindirizzamento.
>> >
>> > Attenzione, la configurazione precedente verrà disattivata e rimossa.
<!-- CP-STEPS-END:configure-redirect-temporary -->

///

/// details | Opzione 3 - Reindirizzamento invisibile verso un indirizzo web

Questo reindirizzamento permette, dopo aver inserito il dominio reindirizzato, di lasciarlo nella barra degli indirizzi del browser invece di sostituirlo con il dominio di destinazione.

**Attenzione, questa operazione non è compatibile con tutti i siti e influisce sul posizionamento SEO del sito.**

- **Esempio**: se reindirizzi `domain1.tld` verso `domain2.tld`, nella barra degli indirizzi del browser apparirà `domain1.tld`.

![Gif2](/pages/assets/schemas/domains/invisible-redirection.gif){.thumbnail}

Il reindirizzamento invisibile funziona con un tag HTML *iFrame*. Questo permette al dominio reindirizzato di integrare nella propria pagina HTML il contenuto dell'altra pagina corrispondente al dominio di destinazione.

Questa incapsulazione impedisce ai visitatori del sito di visualizzare il dominio di destinazione.

> Questa opzione restituisce un codice HTTP 200.

> [!warning]
>
> Attenzione, le pagine incapsulate con un tag *iFrame* potrebbero non essere visualizzate sugli smartphone. Il loro contenuto generalmente non è preso in considerazione dai motori di ricerca per il posizionamento SEO e l'indicizzazione del sito.

<!-- CP-STEPS-START:configure-redirect-invisible -->
Clicca sulle schede qui sotto per visualizzare i **7** step in sequenza.

> [!tabs]
> **Step 1**
>>
>> Accedi alla pagina [Domini](/links/control-panel/web-domains), poi seleziona il dominio interessato.
>>
>> ![Domini](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-names.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sulla scheda `Reindirizzamento`{.action}: la tabella mostra i reindirizzamenti attivi per il tuo dominio. Clicca poi su `Aggiungi un reindirizzamento`{.action}.
>>
>> ![Presentazione del menu reindirizzamento](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}
>>
> **Step 3**
>>
>> Nella finestra, il dominio da reindirizzare appare già. Compila il modulo **solo** se desideri reindirizzare un *sottodominio*.
>>
>> La casella `Reindirizza anche`{.action} può essere selezionata per reindirizzare anche il sottodominio in `www` verso la stessa destinazione scelta per il dominio/sottodominio.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 4**
>>
>> Seleziona `Verso un indirizzo Web`{.action}.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 5**
>>
>> Seleziona `Con un reindirizzamento invisibile`{.action} tra le due opzioni indicate.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-with-an-invisible-redirection.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 6**
>>
>> Seleziona `Temporaneo (iframe)`{.action} tra le due opzioni indicate, poi inserisci il dominio o l'URL di destinazione del reindirizzamento nel campo `Indirizzo web`{.action} che appare.
>>
>> ![Step 6](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-iframe.png){.thumbnail}
>>
>> Tre parametri opzionali sono disponibili in questo step:
>>
>> - **Titolo**: il titolo del sito Internet. Verrà visualizzato come titolo della pagina nella scheda del browser.
>> - **Parole chiave**: possono essere utilizzate dai motori di ricerca per indicizzare parzialmente la pagina.
>> - **Descrizione**: relativa al sito Internet. Verrà utilizzata dai motori di ricerca nei loro risultati.
>>
>> Clicca su `Avanti`{.action}.
>>
> **Step 7**
>>
>> In quest'ultimo step, assicurati che le informazioni mostrate siano corrette.
>>
>> ![Step 7](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-iframe.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per confermare la configurazione.
>>
>> > [!primary]
>> >
>> > Se appare il messaggio "*Esistono reindirizzamenti a partire dai nomi di dominio che desideri reindirizzare che entrano in conflitto con i reindirizzamenti che desideri aggiungere*", puoi selezionare la casella `Conferma la sovrascrittura del reindirizzamento esistente`{.action} per forzare l'applicazione del reindirizzamento.
>> >
>> > Attenzione, la configurazione precedente verrà disattivata e rimossa.
<!-- CP-STEPS-END:configure-redirect-invisible -->

### Reindirizzare un dominio tramite un file ".htaccess" <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud mette a disposizione i servizi la cui configurazione, gestione e responsabilità spettano a te. Spetta a te assicurarne il corretto funzionamento.
>
> Mettiamo a tua disposizione questa parte della guida per assisterti nelle operazioni più comuni. Tuttavia, ti consigliamo di rivolgerti a un [provider specializzato](/links/partner) in caso di difficoltà. Non saremo in grado di fornirti assistenza per i passaggi documentati qui sotto. Trovi maggiori informazioni nella sezione "[Per saperne di più](#go-further)" di questa guida.
>

I file ".htaccess" sono file di configurazione in cui è possibile specificare dei comandi. Quando il server web (Apache) esegue il codice del sito Internet, i comandi vengono interpretati e quindi eseguiti.

Tra questi comandi, è possibile creare reindirizzamenti.

Manipolare un file ".htaccess" può rendere il sito inaccessibile. In caso di dubbio, contatta un [provider specializzato](/links/partner).

Trovi tutta la documentazione sul ".htaccess" nella sezione "[Per saperne di più](#go-further)" di questa guida.

> [!success]
>
> Ti consigliamo di **effettuare un backup del file .htaccess** prima di apportare modifiche. In questo modo potrai ripristinare la versione precedente del file in caso di errore.
>

Di seguito trovi 4 variabili per eseguire reindirizzamenti tramite il file ".htaccess".

#### Variabile 1 - "Redirect permanent"

Questa variabile permette di reindirizzare un sito nella sua interezza, o solo una parte, verso un altro sito o un'altra parte di un sito. I visitatori vengono reindirizzati automaticamente all'indirizzo/URL corretto quando tentano di accedere al sito tramite l'indirizzo/URL precedente.

> [!tabs]
> Codice da inserire nel ".htaccess"
>>
>> Per reindirizzare un sito intero:
>>
>>```bash
>>Redirect permanent / http://domainTarget.tld/
>>```
>>
>> Per reindirizzare una directory verso un'altra:
>>
>> ```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Per reindirizzare un file verso un altro:
>>
>> ```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> Codice HTTP
>>
>> Lo script restituisce un codice HTTP 301. I robot dei motori di ricerca vengono avvisati di aggiornare i loro link al nuovo indirizzo/URL.
>>

#### Variabile 2 - "Redirect gone"

Questa variabile è utile per i file eliminati. Sostituisce il messaggio *404 documento non trovato* con un messaggio più esplicito del tipo *410 il documento non esiste più*. Il visitatore del sito viene informato che il file che sta tentando di raggiungere non esiste più.

> [!tabs]
> Codice da inserire nel ".htaccess"
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> Codice HTTP
>>
>> Lo script restituisce un codice HTTP 410.
>>

#### Variabile 3 - "Redirect seeother"

Se si modifica l'estensione di un file, la variabile *seeother* permette di modificarne il tipo. Il visitatore che tenta di accedere al vecchio file viene reindirizzato automaticamente a quello con l'estensione corretta.

> [!tabs]
> Codice da inserire nel ".htaccess"
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> Codice HTTP
>>
>> Lo script restituisce un codice HTTP 303.
>>

#### Variabile 4 - "Redirect Temp"

Questa variabile può essere utilizzata quando si spostano temporaneamente dei file su un altro sito. I visitatori che tentano di accedere al sito tramite l'indirizzo/URL precedente vengono automaticamente reindirizzati al nuovo indirizzo/URL temporaneo.

> [!tabs]
> Codice da inserire nel ".htaccess"
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> Codice HTTP
>>
>> Lo script restituisce un codice HTTP 302.

///

## Per saperne di più <a name="go-further"></a>

[Bloccare l'accesso al sito per determinati indirizzi IP tramite un file ".htaccess"](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website).

[Proteggere l'interfaccia di amministrazione del sito tramite il ".htaccess"](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password).

[Riscrivere gli URL grazie al "mod_rewrite"](/pages/web_cloud/web_hosting/htaccess_url_rewriting_using_mod_rewrite).

[Effettuare altre operazioni con il file ".htaccess"](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do).

[Come modificare la zona DNS](/pages/web_cloud/domains/dns_zone_records)

Per prestazioni specializzate (SEO, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, consulta le nostre [offerte di supporto](/links/support).

Contatta la nostra [community di utenti](/links/community).
