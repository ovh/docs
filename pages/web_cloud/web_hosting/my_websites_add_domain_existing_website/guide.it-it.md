---
title: "Come associare un nome di dominio a un sito web esistente"
excerpt: "Questa guida ti mostra come associare un nome di dominio o un sottodominio a un sito web già esistente sul tuo hosting web"
updated: 2026-05-04
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

Puoi ospitare diversi siti web sulla stessa offerta di hosting web, anche se i domini non sono registrati su OVHcloud. Inoltre, puoi associare uno o più domini o sottodomini allo stesso sito web.

> [!primary]
> Se non hai ancora creato il sito web interessato sul tuo hosting web, consulta **direttamente** [questa guida](/pages/web_cloud/web_hosting/multisites_configure_multisite).

**Questa guida ti mostra come associare un nome di dominio o un sottodominio a un sito web già esistente sul tuo hosting web.**

## Prerequisiti

- Disporre di un'offerta di [hosting web OVHcloud](/links/web/hosting-multisite) compatibile.
- Disporre di uno o più [domini](/links/web/domains).
- Poter modificare la configurazione dei tuoi domini dalle loro [zone DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### Aggiungere un nome di dominio o un sottodominio a un sito web esistente

**Fai clic su uno dei titoli qui sotto per visualizzare le spiegazioni.**

<a name="add-domain-ovhcloud"></a>

/// details | Aggiungere un nome di dominio gestito dal tuo Spazio Cliente OVHcloud

Questa parte si applica esclusivamente se il tuo nome di dominio e/o la sua zona DNS attiva si trovano **nel tuo Spazio Cliente OVHcloud**.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **6** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, fai clic sul pulsante `⁝`{.action} a destra del sito web interessato, quindi su `Aggiungi un dominio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Seleziona l'opzione `Associa un dominio OVHcloud esistente`{.action} e fai clic su `Continua`{.action}.
>>
>> Seleziona quindi il nome di dominio da associare nel menu a discesa **Nome di dominio - obbligatorio** che appare in basso.
>>
>> > [!primary]
>> > Per aggiungere un sottodominio, seleziona prima il nome di dominio nell'elenco (ad esempio: domain.tld). Seleziona quindi la casella intitolata `Crea un sottodominio`{.action}. Un campo di testo appare per permetterti di inserire il sottodominio (ad esempio: **sub**.domain.tld).
>> >
>> > **Caso particolare**: I sottodomini in `www` (ad esempio: **www**.domain.tld) vengono automaticamente aggiunti in aggiunta al nome di dominio. Di conseguenza, non è necessario specificare questo sottodominio particolare nel campo di testo.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-step-1.png){.thumbnail}
>>
>> Se desideri utilizzare una delle **opzioni avanzate** disponibili, attiva il pulsante `Configurazione avanzata`{.action} e vai direttamente al **passagio 7**. Altrimenti, prosegui al **passagio 6**.
>>
> **Passaggio 5**
>>
>> Verifica che tutte le informazioni inserite precedentemente siano corrette, quindi fai clic su `Continua`{.action} per finalizzare l'aggiunta del tuo nome di dominio o del tuo sottodominio al tuo sito web.
>>
>> Questo aggiunta può richiedere fino a un'ora.
>>
>> La configurazione DNS verrà realizzata automaticamente se la zona DNS attiva del tuo nome di dominio è gestita nel tuo Spazio Cliente OVHcloud.
>>
>> Nel caso contrario, consulta le seguenti guide per configurare manualmente la tua zona DNS:
>>
>> - [Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > La modifica della configurazione DNS del tuo nome di dominio richiede un periodo di propagazione che può arrivare fino a 24 ore prima di essere pienamente efficace.
>>
> **Passaggio 6**
>>
>> > [!primary]
>> >
>> > Questo passo è **facoltativo**. Si rivolge esclusivamente ai clienti che desiderano attivare alcune funzionalità disponibili tramite il pulsante `Configurazione avanzata`{.action}.
>> >
>> > **Tutte queste funzionalità possono essere attivate in un secondo momento, una volta che il nome di dominio è stato aggiunto al tuo sito web.** In questo caso specifico, consulta direttamente [questa guida](/pages/web_cloud/web_hosting/multisites_modify_domain).
>> >
>> > Di seguito troverai una descrizione di queste opzioni.
>> >
>> > A seconda della tua offerta di [hosting web](/links/web/hosting), alcuni elementi tra le scelte proposte non potranno essere selezionati.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opzione|Descrizione|
>> |---|---|
>> |IP del Paese|Permette di beneficiare di un indirizzo IP geolocalizzato (tra una lista di paesi) per il nome di dominio selezionato.<br> Scopri di più grazie a [questa pagina](/links/web/hosting-options).|
>> |Firewall|Permette di attivare un firewall (filtraggio e analisi delle richieste) sul nome di dominio selezionato.<br> Scopri di più grazie a [questa pagina](/links/web/hosting-options).|
>> |CDN|Permette di attivare il CDN (caching degli elementi statici del tuo sito web, come le immagini) sul nome di dominio selezionato.<br> Scopri di più grazie alla [nostra pagina CDN](/links/web/hosting-options-cdn).<br> Attivando SSL e CDN, potrai beneficiare anche del protocollo **HTTP/2** (questo protocollo è attivato per default nel nostro datacenter di Gravelines).|
>>
>> Una volta che il pulsante `Configurazione avanzata`{.action} è attivato, puoi anche scegliere la modalità di configurazione DNS del tuo nome di dominio:
>>
>> - **Per una configurazione DNS automatica**, lascia selezionata la casella `Configurazione automatica (Consigliato)`{.action}.
>> - **Per una configurazione DNS manuale**, seleziona la casella `Configurazione manuale`{.action}. Per effettuare quindi la configurazione, consulta le seguenti guide:
>>     - [Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> Una volta che le tue scelte sono state effettuate, fai clic sul pulsante `Continua`{.action} per finalizzare l'aggiunta del tuo nome di dominio o del tuo sottodominio al tuo sito web. Questo aggiunta può richiedere fino a un'ora.
>>
>> Tuttavia, la modifica della configurazione DNS del tuo nome di dominio richiede un periodo di propagazione che può arrivare fino a 24 ore prima di essere pienamente efficace.

///

/// details | Aggiungere un nome di dominio esterno

Questa parte si applica esclusivamente se il tuo nome di dominio non è presente nel tuo account OVHcloud.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **6** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, fai clic sul pulsante `⁝`{.action} a destra del sito web interessato, quindi su `Aggiungi un dominio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Seleziona l'opzione `Associa un dominio esterno`{.action} e fai clic su `Continua`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Inserisci il nome di dominio (ad esempio: domain.tld) o il sottodominio (ad esempio: **sub**.domain.tld) da associare nel campo **Nome di dominio - obbligatorio** che appare in basso.
>>
>> > [!success]
>> >
>> > **Caso particolare**: I sottodomini in `www` (ad esempio: **www**.domain.tld) vengono automaticamente aggiunti in aggiunta al nome di dominio. Di conseguenza, non è necessario specificare questo sottodominio particolare nel campo di testo.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-2.png){.thumbnail}
>>
>> Una volta completate le informazioni, fai clic sul pulsante `Continua`{.action}.
>>
>> > [!primary]
>> >
>> > A differenza dei domini direttamente gestiti dal tuo Spazio Cliente OVHcloud, le **opzioni avanzate** non sono direttamente disponibili durante l'aggiunta di un nome di dominio o di un sottodominio esterno al tuo sito web.
>> >
>> > Tuttavia, **tutte queste funzionalità possono essere attivate in un secondo momento una volta che il nome di dominio o il sottodominio esterno è stato aggiunto al tuo sito web.** Per farlo, consulta direttamente [questa guida](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
> **Passaggio 6**
>>
>> Ogni aggiunta di un nome di dominio esterno a OVHcloud richiede una validazione supplementare obbligatoria. Ciò ci permette di assicurarci che l'aggiunta del nome di dominio esterno sia legittima. Un messaggio ti inviterà quindi a modificare la configurazione DNS del nome di dominio.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Nota gli elementi che appaiono, quindi fai clic sul pulsante `Continua`{.action}. Da allora, il nome di dominio viene aggiunto in modo temporaneo, il tempo necessario per modificare la sua configurazione DNS.
>>
>> > [!warning]
>> >
>> > Devi effettuare queste modifiche **rapidamente** affinché il tuo nome di dominio venga correttamente aggiunto. Senza questa azione, l'aggiunta del tuo nome di dominio verrà annullata.
>> >
>> > Le voci DNS di tipo **A** e **TXT** devono essere obbligatoriamente inserite nella zona DNS attiva del tuo nome di dominio affinché venga aggiunto al tuo sito web. Solo le voci DNS di tipo **AAAA** sono opzionali.
>> >
>> > Nota che se desideri aggiungere `sub.domain.tld`, dovrai creare l'entrata TXT `ovhcontrol.domain.tld` e non l'entrata `ovhcontrol.sub.domain.tld`.
>> >
>> > Per trovare la zona DNS attiva del tuo nome di dominio, trova i [server DNS](/pages/web_cloud/domains/dns_server_edit) a cui è collegato. Dovrai validare solo il nome di dominio utilizzando il campo **TXT**, non tutti i suoi sottodomini.|

///

/// details | Aggiungere un nuovo nome di dominio che non è ancora stato registrato

Questa parte si applica esclusivamente se il tuo nome di dominio non è ancora stato registrato, né presso OVHcloud né presso un altro ufficio di registrazione. In altre parole, riguarda i domini che non sono ancora stati sottoscritti.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **5** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel tavolo che appare, fai clic sul pulsante `⁝`{.action} a destra del sito web interessato, quindi su `Aggiungi un dominio`{.action}.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/website-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Seleziona l'opzione `Ordina un nuovo dominio`{.action} e fai clic su `Continua`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Verrai quindi reindirizzato alla nostra pagina commerciale per la sottoscrizione di un nome di dominio. Scegli il tuo nuovo nome di dominio in base alle disponibilità del mercato. Segui quindi le istruzioni del tunnel d'ordine fino alla validazione del buono d'ordine.
>>
>> Una volta che l'ordine è stato pagato e validato, attendi alcuni istanti, il tempo necessario per il suo trattamento.
>>
>> > [!primary]
>> >
>> > Se, dopo alcune ore, noti che il tuo nuovo nome di dominio non si è correttamente associato al tuo sito web, segui la parte "[Aggiungere un nome di dominio gestito dal tuo Spazio Cliente OVHcloud](#add-domain-ovhcloud)" di questa guida.

///

### Offerta email inclusa con il tuo hosting web

La maggior parte delle offerte di [hosting web OVHcloud](/links/web/hosting) dispone di un'opzione inclusa per la creazione di indirizzi email personalizzati con il tuo nome di dominio.

Questa opzione email può essere attivata per **un solo** nome di dominio. Ciò significa che se ospiti diversi siti web con diversi domini sul tuo hosting web, potrai attivare questa opzione solo per uno dei tuoi domini.

Non esitare a consultare [la nostra guida dedicata](/pages/web_cloud/web_hosting/activate-email-hosting) per ulteriori dettagli sull'attivazione di questa opzione.

## Per saperne di più

[Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Mettere online un sito Internet su un hosting Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
