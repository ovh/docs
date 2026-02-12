---
title: "Reindirizzare un nome di dominio gestito da OVHcloud"
excerpt: "I diversi tipi di redirect e come creare un reindirizzamento per un nome di dominio gestito da OVHcloud"
updated: 2026-02-10
---

## Obiettivo

Il reindirizzamento di un nome di dominio consiste nel reindirizzarlo verso una nuova destinazione. Esistono diversi tipi di reindirizzamenti, ognuno dei quali risponde a esigenze specifiche.

**Scopri come reindirizzare il tuo nome di dominio**

## Prerequisiti

- Disporre di [un nome di dominio](/links/web/domains)
- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager)
- Essere connesso al tuo hosting Web (per un reindirizzamento tramite un file [.htaccess](#htaccess_rewrite))

## Procedura

### Comprendere il reindirizzamento di un nome di dominio

Questa funzionalità permette di reindirizzare un nome di dominio/sottodominio verso:

- un altro nome di dominio/sottodominio già esistente:
    - **Esempio**: `domain.tld`
- un URL (Uniform Resource Locator) di sito Internet:
    - **Esempi**: `http://www.domain.tld/welcome/` o `https://www.domain.tld/welcome/` (se il nome di dominio di destinazione dispone di un certificato SSL compatibile).

Queste azioni possono essere eseguite in diversi modi:

- **Dallo [Spazio Cliente OVHcloud](/links/manager)**, dove l'assistente di configurazione permette di impostare il reindirizzamento.
- **Tramite un metodo che richiede programmazione**. Dovrai creare in autonomia il reindirizzamento in un file (in genere un [.htaccess](#htaccess_rewrite).

> [!warning]
>
> L'attivazione di un reindirizzamento può avere conseguenze sull'indicizzazione del tuo sito Internet. 
> Presta la massima attenzione alle operazioni che intendi effettuare o contatta uno dei [provider specializzati](/links/partner) nel referenziamento se necessario.
>
> Attenzione: un reindirizzamento creato dallo [Spazio Cliente OVHcloud](/links/manager) non permette di reindirizzare una URL in `https://` verso un altro nome di dominio o URL. 
> Per creare questo tipo di reindirizzamento, dovrai necessariamente passare per una riscrittura dell'URL tramite un file ".htaccess" ad esempio.

### Reindirizzare un nome di dominio dallo Spazio Cliente OVHcloud

Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}. Clicca sul menu `Zone DNS`{.action} e seleziona il nome di dominio interessato. Clicca sulla scheda `Reindirizzamento`{.action}.

Visualizzi una tabella con tutti i reindirizzamenti attivi per il tuo nome di dominio. Puoi gestire i tuoi reindirizzamenti esistenti con il pulsante dei contorni `...`{.action} situato a destra di ogni linea.

Clicca su `Aggiungi un reindirizzamento`{.action}.

![Presentazione del menu reindirizzamento](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection.png){.thumbnail}

Sono disponibili tre opzioni di reindirizzamento dallo[Spazio Cliente OVHcloud](/links/manager), ognuna delle quali è composta da **5 step** successivi. 

> La scheda `Reindirizzamento`{.action} presenta una quarta opzione che permette di far puntare rapidamente il tuo nome di dominio verso i record DNS A, AAAA e CNAME.<br>
> Dato che non si tratta di un "reindirizzamento", questa opzione non sarà precisata in questa guida.
>
> Per maggiori informazioni sui record DNS, consulta la nostra documentazione sui [record DNS](/pages/web_cloud/domains/dns_zone_records).
>

Di seguito trovi i tre tipi di reindirizzamenti dettagliati passo per passo.

> [!primary]
>
> Indipendentemente dall'opzione di reindirizzamento scelta, la propagazione delle modifiche potrebbe richiedere da 4 a 24 ore.
>

##### Opzione 1: reindirizzamento visibile permanente verso un indirizzo web

Questa opzione permette, dopo l'inserimento del nome di dominio reindirizzato, di visualizzare il nome di dominio di destinazione nella barra degli indirizzi del tuo browser invece del nome di dominio reindirizzato.

- **Esempio**: `domain1.tld` verso `domain2.tld`, nel browser comparirà `domain2.tld`.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Questo reindirizzamento "standard" restituirà un codice HTTP 301.

> [!success]
> Clicca sulle schede qui sotto per visualizzare ognuno dei 5 step successivi.

> [!tabs]
> **Step 1**
>>
>> Nella finestra, il tuo nome di dominio da reindirizzare appare già. Inserisci il form **solo** se vuoi reindirizzare un *sottodominio*.
>>
>> `Reindirizza anche`{.action} è possibile impostare una nuova casella per reindirizzare il tuo sottodominio in `www` verso la stessa destinazione scelta per il tuo nome di dominio/sottodominio.
>>
>> ![Step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 2.
>>
> **Step 2**
>>
>> Seleziona `Verso un indirizzo Web`{.action}.
>>
>> ![Step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 3.
>>
> **Step 3**
>>
>> Seleziona `Con reindirizzamento visibile`{.action} e scegli tra le due opzioni indicate.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 4.
>>
> **Step 4**
>>
>> Seleziona `Permanente (301)`{.action} tra le due opzioni indicate e inserisci il nome di dominio o l'URL di destinazione del tuo reindirizzamento nel modulo `Indirizzo web`{.action} che appare.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-permanent.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 5.
>>
> **Step 5**
>>
>> In quest'ultimo step, assicurati che le informazioni visualizzate siano corrette.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-permanent.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per confermare la tua configurazione.
>> 
>> > [!primary]
>> > 
>> > Se visualizzi il messaggio "*A partire dai nomi di dominio che vuoi reindirizzare che entrano in conflitto con i reindirizzamenti che vuoi aggiungere*", seleziona la casella `Conferma l'eliminazione del reindirizzamento esistente`{.action} per forzare l'applicazione del tuo reindirizzamento.
>> > 
>> > Attenzione, la configurazione precedente verrà disattivata ed eliminata.
>> > 
>>

#### Opzione 2: reindirizzamento visibile temporaneo verso un indirizzo web

Come per l'opzione 1, questa opzione permette di visualizzare, dopo l'inserimento del nome di dominio reindirizzato, il nome di dominio di destinazione nella barra degli indirizzi del tuo browser invece del nome di dominio reindirizzato.

Tuttavia, questa deve essere utilizzata occasionalmente, ad esempio per eventi temporanei.<br>
Infatti, il posizionamento sui motori di ricerca è meno efficace rispetto a un reindirizzamento **visibile permanente** di tipo 301 (codice HTTP).

- **Esempio**: `domain1.tld` verso `domain2.tld`, nel browser comparirà `domain2.tld`.

![Gif1](/pages/assets/schemas/domains/visible-redirection.gif){.thumbnail}

> Questo reindirizzamento restituirà un codice HTTP 302.

> [!success]
> Clicca sulle schede qui sotto per visualizzare ognuno dei 5 step successivi.

> [!tabs]
> **Step 1**
>>
>> Nella finestra, il tuo nome di dominio da reindirizzare appare già. Inserisci il form **solo** se vuoi reindirizzare un *sottodominio*.
>>
>> `Reindirizza anche`{.action} è possibile impostare una nuova casella per reindirizzare il tuo sottodominio in `www` verso la stessa destinazione scelta per il tuo nome di dominio/sottodominio.
>>
>> ![Step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 2.
>>
> **Step 2**
>>
>> Seleziona `Verso un indirizzo Web`{.action}.
>>
>> ![Step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 3.
>>
> **Step 3**
>>
>> Seleziona `Con reindirizzamento visibile`{.action} e scegli tra le due opzioni indicate.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-a-visible-redirection.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 4.
>>
> **Step 4**
>>
>> Seleziona `Temporaneo (302)`{.action} tra le due opzioni indicate e inserisci il nome di dominio o l'URL di destinazione del tuo reindirizzamento nel modulo `Indirizzo web`{.action} che appare.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-temporary.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 5.
>>
> **Step 5**
>>
>> In quest'ultimo step, assicurati che le informazioni visualizzate siano corrette.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-temporary.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per confermare la tua configurazione.
>> 
>> > [!primary]
>> >
>> > Se visualizzi il messaggio "*A partire dai nomi di dominio che vuoi reindirizzare che entrano in conflitto con i reindirizzamenti che vuoi aggiungere*", seleziona la casella `Conferma l'eliminazione del reindirizzamento esistente`{.action} per forzare l'applicazione del tuo reindirizzamento.
>> > 
>> > Attenzione, la configurazione precedente verrà disattivata ed eliminata.
>> > 
>>

##### Opzione 3: reindirizzamento invisibile verso un indirizzo web

Questo reindirizzamento permette, dopo l'inserimento del nome di dominio reindirizzato, di lasciarlo visualizzato nella barra degli indirizzi del browser invece di sostituirlo con il nome di dominio di destinazione.<br>
**Attenzione, questa azione non è compatibile con tutti i siti e incide sull'indicizzazione del tuo sito.**.

- **Esempio**: `domain1.tld` verso `domain2.tld`, nel browser comparirà `domain1.tld`.

![Gif2](/pages/assets/schemas/domains/invisible-redirection.gif){.thumbnail}

Il reindirizzamento invisibile funziona con un tag HTML *iFrame* che permette al nome di dominio reindirizzato di integrare nella propria pagina HTML il contenuto dell'altra pagina corrispondente al nome di dominio di destinazione.

Questa incapsulazione permette di impedire ai visitatori del tuo sito di visualizzare il nome di dominio di destinazione

> Questa opzione restituirà un codice HTTP 200.

> [!warning]
>
Attenzione: le pagine incapsulate con un tag *iFrame* possono non essere lette sugli smartphone. Il loro contenuto non viene generalmente preso in considerazione dai motori di ricerca per l'indicizzazione e l'indicizzazione del tuo sito.
>

> [!success]
> Clicca sulle schede qui sotto per visualizzare ognuno dei 5 step successivi.
>

> [!tabs]
> **Step 1**
>>
>> Nella finestra, il tuo nome di dominio da reindirizzare appare già. Inserisci il form **solo** se vuoi reindirizzare un *sottodominio*.
>>
>> `Reindirizza anche`{.action} è possibile impostare una nuova casella per reindirizzare il tuo sottodominio in `www` verso la stessa destinazione scelta per il tuo nome di dominio/sottodominio.
>>
>> ![Step 1](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-1.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 2.
>>
> **Step 2**
>>
>> Seleziona `Verso un indirizzo Web`{.action}.
>>
>> ![Step 2](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-2-to-a-web-adress.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 3.
>>
> **Step 3**
>>
>> Seleziona `Con un reindirizzamento invisibile`{.action} tra le due opzioni indicate.
>>
>> ![Step 3](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-3-with-an-invisible-redirection.png){.thumbnail}
>>
>> Clicca su `Avanti`{.action} per passare allo Step 4.
>>
> **Step 4**
>>
>> Seleziona `Temporary (iframe)`{.action} e inserisci il nome di dominio o l'URL di destinazione del tuo reindirizzamento nel modulo `Indirizzo web`{.action} che appare.
>>
>> ![Step 4](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-4-iframe.png){.thumbnail}
>>
>> Sono disponibili tre parametri opzionali:
>>
>> - **Titolo**: quello del tuo sito Internet. Comparirà come pagina nella scheda dei browser Internet.<br>
>> - **Parole chiave**: possono essere utilizzati dai motori di ricerca per indicizzare parzialmente la pagina.<br>
>> - **Descrizione**: riguarda il tuo sito Internet. Sarà utilizzata dai motori di ricerca nei loro risultati.
>>
>> Clicca su `Avanti`{.action} per passare allo Step 5.
>>
> **Step 5**
>>
>> In quest'ultimo step, assicurati che le informazioni visualizzate siano corrette.
>>
>> ![Step 5](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/redirection/add-a-redirection-step-5-iframe.png){.thumbnail}
>>
>> Clicca su `Conferma`{.action} per confermare la tua configurazione.
>> 
>> > [!primary]
>> > 
>> > Se visualizzi il messaggio "*A partire dai nomi di dominio che vuoi reindirizzare che entrano in conflitto con i reindirizzamenti che vuoi aggiungere*", seleziona la casella `Conferma l'eliminazione del reindirizzamento esistente`{.action} per forzare l'applicazione del tuo reindirizzamento.
>> >
>> > Attenzione, la configurazione precedente verrà disattivata ed eliminata.
>> >
>>

### Reindirizzare un nome di dominio con un file ".htaccess" <a name="htaccess_rewrite"></a>

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Assicurarne il corretto funzionamento è quindi responsabilità dell'utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di rivolgerti a uno [specialista del settore](/links/partner). OVHcloud non sarà infatti in grado di fornirti assistenza sugli step documentati qui sotto. Per maggiori informazioni, consulta la sezione ["Per saperne di più"](#go-further) di questa guida.
>

I file ".htaccess" sono file di configurazione nei quali possono essere specificati alcuni comandi. Quando il codice del tuo sito Internet viene eseguito dal server Web (Apache), i comandi vengono interpretati e quindi eseguiti.<br>
Tra questi comandi, è possibile creare reindirizzamenti.

Gestire un file ".htaccess" può rendere il tuo sito inaccessibile. In caso di dubbio, contatta uno dei [fornitori specializzati](/links/partner).

Per maggiori informazioni, consulta la nostra guida sul .htaccess nella sezione ["Per saperne di più"](#go-further) di questa guida.

> [!success]
>
> Ti consigliamo di **effettuare un backup del tuo file .htaccess** prima di apportare modifiche. In questo modo è possibile ripristinare la versione precedente del file in caso di errore.
>

Di seguito trovi 4 variabili per effettuare reindirizzamenti tramite il file ".htaccess".

#### Variabile 1 - "Redirect Permanent"

Questa variabile permette di reindirizzare un sito nel suo insieme, o solo una parte di un sito, verso un altro sito o verso un'altra parte di un sito. I visitatori vengono reindirizzati automaticamente verso il giusto indirizzo/URL quando cercano di accedere al tuo sito tramite l'indirizzo/URL storico.

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
>>```bash
>>Redirect permanent /old_folder http://domain.tld/new_folder
>>```
>>
>> Per reindirizzare un file verso un altro:
>>
>>```bash
>>Redirect permanent /old_file.php http://domain.tld/new_file.php
>>```
>>
> Codice HTTP
>>
>> Lo script reindirizzerà un codice HTTP 301. Questo impedirà ai robot dei motori di ricerca di aggiornare i link verso il nuovo indirizzo/URL.
>>

#### Variabile 2 - "Redirect gone"

Questa variabile è utile per i file eliminati. Sostituisce il messaggio *404 documento non trovato* con un messaggio più esplicito del tipo *410 il documento non esiste più*. Il visitatore del tuo sito viene informato che il file che sta cercando di chiamare non esiste più.

> [!tabs]
> Codice da inserire nel ".htaccess" 
>>
>>```bash
>>Redirect gone /fileDeleted.html
>>```
>>
> Codice HTTP
>>
>> Lo script restituirà un codice HTTP 410.
>>

#### Variabile 3 - "Redirect seeother"

Se modifichi l'estensione di un file, la variabile *seeother* permette di modificarne il tipo. Il visitatore che cerca di accedere al vecchio file sarà automaticamente reindirizzato verso quello con la corretta estensione.

> [!tabs]
> Codice da inserire nel ".htaccess" 
>>
>>```bash
>>Redirect seeother /example.doc http://domain.tld/example.pdf
>>```
>>
> Codice HTTP
>>
>> Lo script restituirà un codice HTTP 303.
>>

#### Variabile 4 - "Redirect Temp"

Questa variabile può essere utilizzata quando trasferisci temporaneamente file su un altro sito. I visitatori che tentano di accedere al tuo sito tramite l'indirizzo/URL storico vengono automaticamente reindirizzati verso il nuovo indirizzo/URL temporaneo.

> [!tabs]
> Codice da inserire nel ".htaccess" 
>>
>>```bash
>>Redirect temp / http://OtherWebsite.tld/site/
>>```
>>
> Codice HTTP
>>
>> Lo script restituirà un codice HTTP 302.
>>

## Per saperne di più <a name="go-further"></a>

[Bloccare l'accesso al mio sito per alcuni indirizzi IP tramite un file ".htaccess" ](/pages/web_cloud/web_hosting/htaccess_how_to_block_a_specific_ip_address_from_accessing_your_website)

[Proteggi l'interfaccia di gestione del tuo sito tramite il ".htaccess" ](/pages/web_cloud/web_hosting/htaccess_protect_directory_by_password)

[Effettuare altre operazioni con il file ".htaccess" ](/pages/web_cloud/web_hosting/htaccess_what_else_can_you_do)

[Come modificare la mia zona DNS?](/pages/web_cloud/domains/dns_zone_edit)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).