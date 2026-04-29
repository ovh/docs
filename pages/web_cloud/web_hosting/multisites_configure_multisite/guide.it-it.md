---
title: 'Ospitare più siti su uno stesso hosting'
excerpt: 'Questa guida ti mostra come ospitare diversi siti web sulla tua offerta di hosting web'
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

Puoi ospitare diversi siti web su una stessa offerta di hosting web, anche se i nomi di dominio non sono registrati presso OVHcloud.

Desideri aggiungere un nuovo sito web al tuo hosting web?

**Questa guida ti mostra come ospitare diversi siti web sulla tua offerta di hosting web.**

> [!primary]
> Se hai già creato il sito web desiderato sul tuo hosting web e desideri associargli un nuovo nome di dominio o sottodominio, consulta **direttamente** [questa guida](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).

## Prerequisiti

- Disporre di una [soluzione di hosting Web OVHcloud](/links/web/hosting-multisite) compatibile.
- Disporre di uno o più [nomi di dominio](/links/web/domains).
- Poter modificare la configurazione dei tuoi domini (la [zona DNS](/pages/web_cloud/domains/dns_zone_edit)).

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

### 1 - Aggiungere un sito web sulla tua offerta di hosting web

**Fai clic su uno dei titoli qui sotto per visualizzare le spiegazioni.**

<a name="add-domain-ovhcloud"></a>

/// details | Aggiungere un sito web con un nome di dominio gestito dal tuo Spazio Cliente OVHcloud

Questa parte è applicabile **solo** se il nome di dominio (e/o la sua zona DNS attiva) con cui desideri creare il tuo sito web si trova **nel tuo Spazio Cliente OVHcloud**.

<!-- CP-STEPS-START:add-ovhcloud-domain -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **7** passi.

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
>> Nella parte alta a sinistra della tabella visualizzata, fai clic sul pulsante `Aggiungi un sito`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Seleziona l'opzione `Associa un dominio OVHcloud esistente`{.action} e fai clic su `Continua`{.action}.
>>
>> Nel campo **Nome del sito - obbligatorio**, inserisci il nome che desideri utilizzare per il tuo sito web. Questo nome sarà visibile unicamente nell'etichetta `I miei siti`{.action} del tuo hosting web.
>>
>> Successivamente, seleziona il nome di dominio da associare nel menu a discesa **Nome di dominio - obbligatorio** che appare in basso.
>>
>> > [!primary]
>> > Per aggiungere un sottodominio, seleziona prima il nome di dominio nella lista (ad esempio: domain.tld). Seleziona quindi la casella `Crea un sottodominio`{.action}. Un campo di testo apparirà per permetterti di inserire il sottodominio (ad esempio: **sub**.domain.tld).
>> >
>> > **Caso particolare**: I sottodomini in `www` (ad esempio: **www**.domain.tld) vengono automaticamente aggiunti come complemento del nome di dominio. Di conseguenza, non è necessario specificare questo sottodominio particolare nel campo di testo.
>> >
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-step-1.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Per impostazione predefinita, la **cartella di root** del tuo sito web viene creata automaticamente al momento dell'aggiunta del sito web al tuo hosting web. La stessa **cartella di root** viene inoltre generata nello spazio di archiviazione del tuo hosting web (accessibile in FTP, SFTP o SSH, a seconda della tua offerta).
>> >
>> > Se desideri personalizzare il nome della **cartella di root**, soprattutto se il contenuto del tuo sito web è già presente in una directory specifica del tuo spazio di archiviazione, puoi farlo attivando il pulsante `Configurazione avanzata`{.action}.
>>
>> Se desideri personalizzare il nome della cartella di root o utilizzare una delle **opzioni avanzate** disponibili, attiva il pulsante `Configurazione avanzata`{.action} e vai alla **passaggio 6**. Altrimenti, prosegui direttamente alla **passaggio 7**.
>>
> **Passaggio 5**
>>
>> > [!primary]
>> >
>> > Questa fase è **facoltativa**. Si rivolge esclusivamente ai clienti che desiderano personalizzare la cartella di root e/o attivare alcune funzionalità disponibili tramite il pulsante `Configurazione avanzata`{.action}.
>> >
>> > **Tutte queste funzionalità possono essere attivate in un secondo momento una volta che il nome di dominio è stato aggiunto al tuo sito web.** Per farlo, consulta direttamente [questa guida](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> Per personalizzare il nome della cartella di root che sarà associata al tuo sito web e conterrà i suoi file, inserisci il nome desiderato nel campo **Cartella di root**.
>>
>> Di seguito troverai una descrizione delle altre opzioni. A seconda della tua [offerta di hosting web](/links/web/hosting), alcuni elementi tra quelli proposti qui sotto non potranno essere selezionati.
>>
>> ![Add domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-ovh-advanced-configurations.png){.thumbnail}
>>
>> |Opzione|Descrizione|
>> |---|---|
>> |IP del Paese|Consente di beneficiare di un indirizzo IP geolocalizzato (tra una lista di paesi) per il nome di dominio selezionato.<br> Scopri di più grazie a [questa pagina](/links/web/hosting-options).|
>> |Firewall|Consente di attivare un firewall (filtraggio e analisi delle richieste) per il nome di dominio selezionato.<br> Scopri di più grazie a [questa pagina](/links/web/hosting-options).|
>> |CDN|Consente di attivare il CDN (caching degli elementi statici del tuo sito web, come le immagini) per il nome di dominio selezionato.<br> Scopri di più grazie a [questa pagina CDN](/links/web/hosting-options-cdn).<br> Attivando SSL e CDN, potrai beneficiare anche del protocollo **HTTP/2** (questo protocollo è attivo di default nel nostro datacenter di Gravelines).|
>>
>> Una volta attivato il pulsante `Configurazione avanzata`{.action}, puoi anche scegliere la modalità di configurazione DNS del tuo nome di dominio:
>>
>> - **Per una configurazione DNS automatica**, lascia selezionata la casella `Configurazione automatica (Consigliato)`{.action}.
>> - **Per una configurazione DNS manuale**, seleziona la casella `Configurazione manuale`{.action}. Per effettuare quindi la configurazione della tua zona DNS, consulta le seguenti guide:
>>     - [Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>>     - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
> **Passaggio 6**
>>
>> OVHcloud mette a disposizione i moduli WordPress, Joomla!, PrestaShop e Drupal. Essi permettono di disporre di una struttura di sito web pronta all'uso, installata automaticamente nella cartella di root configurata in precedenza. Per saperne di più, consulta la nostra documentazione "[Installare i moduli in 1 click OVHcloud](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>>
>> Se desideri installare un modulo in un clic, seleziona il modulo desiderato in fondo alla pagina, quindi vai alla fase successiva.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Al contrario, se desideri installare manualmente il tuo sito web, recupera i suoi file e caricali nella cartella di root appropriata sullo spazio di archiviazione del tuo hosting web. Per saperne di più, consulta la nostra documentazione "[Mettere online un sito Internet su un hosting Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
>>
> **Passaggio 7**
>>
>> Verifica che tutte le informazioni inserite in precedenza siano corrette, quindi fai clic su `Continua`{.action} per finalizzare l'aggiunta del tuo nome di dominio o sottodominio al tuo sito web.
>>
>> Questa aggiunta può richiedere fino a un'ora.
>>
>> Se non hai selezionato l'opzione `Configurazione manuale`{.action} nella sezione `Configurazione avanzata`{.action}, la configurazione DNS si realizzerà automaticamente se la zona DNS attiva del tuo nome di dominio è gestita nel tuo Spazio Cliente OVHcloud.
>>
>> In caso contrario, consulta le seguenti guide per configurare manualmente la tua zona DNS:
>>
>> - [Hosting Web - Lista degli indirizzi IP per cluster](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP)
>> - [Modificare una zona DNS di OVHcloud](/pages/web_cloud/domains/dns_zone_edit)
>>
>> > [!primary]
>> > La modifica della configurazione DNS del tuo nome di dominio richiede un periodo di propagazione che può arrivare fino a 24 ore prima che diventi pienamente efficace.
<!-- CP-STEPS-END:add-ovhcloud-domain -->

///

/// details | Aggiungere un sito web con un dominio non gestito dal tuo Spazio Cliente OVHcloud

Questa parte è applicabile **solo** se desideri aggiungere un sito web con un nome di dominio che non è presente nel tuo account OVHcloud. Può trattarsi di un nome di dominio presente in un altro account OVHcloud o registrato da un altro fornitore.

<!-- CP-STEPS-START:add-external-domain -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **7** passi.

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
>> Nella parte alta a sinistra della tabella visualizzata, fai clic sul pulsante `Aggiungi un sito`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Seleziona l'opzione `Associa un dominio esterno`{.action} e fai clic su `Continua`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-1.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Nel campo **Nome del sito - obbligatorio**, inserisci il nome che desideri utilizzare per il tuo sito web. Questo nome sarà visibile unicamente nell'etichetta `I miei siti`{.action} del tuo hosting web.
>>
>> Inserisci quindi il nome di dominio (ad esempio: domain.tld) o il sottodominio (ad esempio: **sub**.domain.tld) da associare nel campo **Nome di dominio - obbligatorio** che appare in basso.
>>
>> > [!success]
>> >
>> > **Caso particolare**: I sottodomini in `www` (ad esempio: **www**.domain.tld) vengono automaticamente aggiunti come complemento del nome di dominio. Di conseguenza, non è necessario specificare questo sottodominio particolare nel campo di testo.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-site-external-step-2.png){.thumbnail}
>>
>> > [!warning]
>> >
>> > Per impostazione predefinita, la **cartella di root** del tuo sito web viene creata automaticamente al momento dell'aggiunta del sito web al tuo hosting web. La stessa **cartella di root** viene inoltre generata nello spazio di archiviazione del tuo hosting web (accessibile in FTP, SFTP o SSH, a seconda della tua offerta).
>>
>> Per personalizzare il nome della cartella di root che sarà associata al tuo sito web e conterrà i suoi file, inserisci il nome desiderato nel campo **Cartella di root**. Se non desideri personalizzarlo, lascia il campo vuoto.
>>
>> Una volta completate le informazioni, fai clic sul pulsante `Continua`{.action}.
>>
> **Passaggio 6**
>>
>> > [!primary]
>> >
>> > A differenza dei nomi di dominio gestiti direttamente dal tuo Spazio Cliente OVHcloud, le **opzioni avanzate** non sono direttamente disponibili durante l'aggiunta di un sito web con un nome di dominio o un sottodominio non gestito dal tuo account OVHcloud.
>> >
>> > Tuttavia, **tutte queste funzionalità possono essere attivate o modificate in seguito una volta che il nome del dominio o il sottodominio esterno è stato aggiunto al tuo sito web.** Per farlo, consulta direttamente [questa guida](/pages/web_cloud/web_hosting/multisites_modify_domain).
>>
>> L'aggiunta di un sito web con un nome di dominio esterno a OVHcloud richiede una validazione obbligatoria aggiuntiva. Ciò ci permette di verificare che l'aggiunta del nome di dominio esterno sia legittima. Ti verrà quindi chiesto di modificare la configurazione DNS del nome di dominio.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-external-step-3.png){.thumbnail}
>>
>> Prendi nota degli elementi visualizzati, quindi clicca sul pulsante `Continua`{.action}. A questo punto, il nome del dominio verrà aggiunto temporaneamente, in modo che tu possa modificare la sua configurazione DNS.
>>
>> > [!warning]
>> >
>> > Devi effettuare queste modifiche **rapidamente** affinché il tuo nome di dominio sia correttamente associato al tuo sito web. Senza questa azione, l'aggiunta del tuo nome di dominio verrà annullata e il tuo sito web appena creato non sarà accessibile.
>> >
>> > Le voci DNS di tipo **A** e **TXT** devono essere obbligatoriamente inserite nella zona DNS attiva del tuo nome di dominio affinché esso sia associato al tuo sito web. Solo le voci DNS di tipo **AAAA** sono opzionali.
>> >
>> > Nota che se desideri associare `sub.domain.tld`, dovrai creare l'entrata TXT `ovhcontrol.domain.tld` e non l'entrata `ovhcontrol.sub.domain.tld`.
>> >
>> > Per trovare la zona DNS attiva del tuo nome di dominio, trova i [server DNS](/pages/web_cloud/domains/dns_server_edit) a cui è collegato. Dovrai validare solo il nome di dominio utilizzando il campo **TXT**, non tutti i suoi sottodomini.
>>
> **Passaggio 7**
>>
>> OVHcloud mette a disposizione i moduli WordPress, Joomla!, PrestaShop e Drupal. Essi permettono di disporre di una struttura di sito web pronta all'uso, installata automaticamente nella directory principale configurata in precedenza. Per saperne di più, consulta la nostra documentazione "[Installare i moduli in 1 click OVHcloud](/pages/web_cloud/web_hosting/cms_install_1_click_modules)".
>> 
>> Se desideri installare un modulo in un clic, seleziona il modulo desiderato in fondo alla pagina, quindi clicca su `Continua`{.action} per completare la richiesta di aggiunta del tuo sito web sul tuo hosting web.
>>
>> ![choose module](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-site-choose-1-click-module.png)
>>
>> Al contrario, se desideri installare manualmente il tuo sito web, recupera i suoi file e caricali nella directory principale appropriata sullo spazio di archiviazione del tuo hosting web. Per saperne di più, consulta la nostra documentazione "[Mettere online un sito Internet su un hosting Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)".
<!-- CP-STEPS-END:add-external-domain -->

///

/// details | Aggiungi un sito web con un nuovo nome di dominio che non è ancora stato registrato

Questa parte si applica esclusivamente se desideri aggiungere un sito web con un nome di dominio che non è ancora stato registrato, né presso OVHcloud né presso un altro ufficio di registrazione. In altre parole, riguarda i Domini che non sono ancora stati sottoscritti.

<!-- CP-STEPS-START:add-site-1click-module -->
Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **7** passi.

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
>> Nella parte alta a sinistra della tabella visualizzata, fai clic sul pulsante `Aggiungi un sito`{.action}.
>>
>> ![My websites tab](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Seleziona l'opzione `Ordina un nuovo dominio`{.action} e fai clic su `Continua`{.action}.
>>
>> ![Add external domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/add-a-domain-or-sub-domain-new-step-1.png){.thumbnail}
>>
> **Passaggio 5**
>>
>> Verrai quindi reindirizzato alla nostra pagina commerciale per l'acquisto di un nome di dominio. Scegli il tuo nuovo nome di dominio in base alle disponibilità del mercato. Segui quindi le istruzioni del tunnel di acquisto fino alla validazione del bonifico. Questo senza sottoscrivere un nuovo hosting web.
>>
>> Una volta che la tua ordinazione è stata pagata e validata, attendi alcuni istanti, il tempo necessario per il suo trattamento.
>>
>> > [!primary]
>> >
>> > Una volta che il tuo nome di dominio appare nel tuo Spazio Cliente OVHcloud, segui la parte "[Aggiungi un nome di dominio gestito dal tuo Spazio Cliente OVHcloud](#add-domain-ovhcloud)" di questa guida per aggiungere il tuo sito web al tuo hosting web.
<!-- CP-STEPS-END:add-site-1click-module -->

///

### 2 - Pubblica il tuo sito web <a name="site-online"></a>

Una volta che il sito web è dichiarato con il tuo nome di dominio sul tuo hosting web, puoi pubblicare il contenuto del tuo sito web. A titolo di ricordo, devi effettuare questa operazione nella **cartella di root** che hai definito durante l'aggiunta del sito web nel tuo Spazio Cliente OVHcloud.

> [!primary]
>
> Se desideri aggiungere diversi siti web, ripeti le azioni descritte in questa guida.
>
> Ti invitiamo a prestare attenzione al numero di siti web presenti sul tuo hosting web. Più questo numero è elevato, più le risorse allocate al tuo hosting web vengono sollecitate. [La pagina delle nostre offerte di hosting web](/links/web/hosting) indica il numero raccomandato di siti web che puoi ospitare sul tuo hosting web.

## Per saperne di più

[Installare i moduli in 1 click OVHcloud](/pages/web_cloud/web_hosting/cms_install_1_click_modules)

[Modificare una zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Mettere online un sito Internet su un hosting Web](/pages/web_cloud/web_hosting/hosting_how_to_get_my_website_online)

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
