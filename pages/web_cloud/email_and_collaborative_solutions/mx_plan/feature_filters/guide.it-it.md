---
title: Creare filtri per i tuoi indirizzi email
excerpt: Come creare e configurare un filtro sul tuo indirizzo email
updated: 2024-03-26
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Un filtro email permette di applicare diversi trattamenti ai messaggi ricevuti, in base ai criteri che preferisci.

Ad esempio: vuoi che tutte le email contenenti "[SPAM]" nell'oggetto siano eliminate.

- Criterio = il soggetto dell'email contiene *SPAM*
- Elaborazione = eliminare l'email

**Questa guida ti mostra come creare e configurare un filtro sul tuo account email.**

## Prerequisiti

- Disporre di una soluzione email MX Plan (disponibile tramite: un'offerta di [hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external}, l'[Hosting gratuito 100M](https://www.ovhcloud.com/it/domains/free-web-hosting/){.external} incluso con un dominio o l'offerta MX Plan ordinata separatamente).
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

> [!warning]
>
> Questa guida ti mostra come utilizzare il servizio MXplan storico. Per la nuova offerta, i filtri vengono gestiti direttamente tramite la Webmail OWA (**O**utlook **W**eb **A**pp). Utilizza la tabella qui sotto per identificare la tua offerta.
>

Vecchia versione della soluzione MX Plan|Nuova versione della soluzione MX Plan|
|---|---|
|![email](images/mxplan-starter-legacy-step1.png){.thumbnail}<br> Il servizio è indicato nel riquadro “Abbonamento”|![email](images/mxplan-starter-new-step1.png){.thumbnail}<br>Nel riquadro "Riepilogo", individua il "Referenza server"|
|Prosegui nella lettura di questa guida nella sezione "[In pratica](#oldmxplan)".|Consulta la nostra guida "[Regole di Posta in arrivo dall'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)".|

## In pratica <a name="oldmxplan"></a>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} nella sezione `Web Cloud`.

E seleziona il tuo servizio nella sezione `Email`{.action}.

Nella scheda `Email`{.action} del tuo servizio MXplan, visualizzi la lista dei tuoi indirizzi email. Una colonna `Filtri` è visibile nella tabella degli account email. Clicca sull'icona dell'imbuto.

![email](images/img_3239.png){.thumbnail}

A questo punto, accedi alla lista dei filtri configurati per questo indirizzo email.

![email](images/img_3240.jpg){.thumbnail}

Per aggiungere una regola al tuo indirizzo email, clicca sul pulsante `Aggiungi un Filtro`{.action}.

- **Nome del filtro:** scegli un nome per il tuo filtro.

- **Priorità:** definisce l'ordine di esecuzione dei vostri filtri su un messaggio in entrata. Un filtro di priorità 1 verrà eseguito prima di un filtro di priorità 2.

- **Attiva il filtro:** deseleziona questa opzione per applicare questo filtro in seguito.

### Come configurare i filtri email

Quando aggiungi un filtro, visualizzi questa finestra:

![email](images/img_3241.jpg){.thumbnail}

#### Regole

Questa sezione ti permette di definire i messaggi su cui verrà applicato il filtro.

Prima scelta (intestazione):

- **Da:** designa l'indirizzo email del mittente, ad esempio: "Se il mittente ..."
- **A:** designa l'indirizzo email del destinatario, ad esempio: "Se il destinatario ..."
- **Oggetto del messaggio:** indica il contenuto del soggetto del messaggio, ad esempio: "Se il soggetto del messaggio ... ".
- **Altro:** indica un altro elemento da considerare nell'intestazione dell'email.

Seconda scelta (regola):

- **spf:** Indica un valore del [record SPF](/pages/web_cloud/domains/dns_zone_spf) da considerare, ad esempio: "... non ha record SPF ... ".
- **contiene:** esempio: "... contiene ... ".
- **non contiene:** esempio: "... non contiene... ".

> [!primary]
>
> Il record SPF (Sender Policy Framework) permette al server di posta di verificare che le email in entrata provengano da server di fiducia.
> Permette di prevenire potenziali furti di identità da parte di indirizzi email che utilizzano il tuo dominio (spoofing). Per maggiori informazioni sul record SPF, consulta la guida "[Migliora la sicurezza delle email con un record SPF](/pages/web_cloud/domains/dns_zone_spf)".

Terza scelta (valore):

- Esempio: [SPAM]

Quarta scelta (+):

- per permetterti di aggiungere una o più condizioni per la stessa azione.

#### Azione

Questa sezione ti permette di definire le azioni da applicare.

Puoi scegliere tra:

- **Accettare:** le email che soddisfano questi requisiti saranno ricevute normalmente.
- **Reindirizza verso un indirizzo locale:** reindirizza le email che soddisfano i requisiti verso uno degli indirizzi email del tuo dominio.
- **Eliminazione:** le email che soddisfano queste condizioni verranno eliminate.
- **Reindirizzare verso un indirizzo remoto:** reindirizza le email che soddisfano i requisiti all'indirizzo email scelto.

### Esempi di filtri

#### Elimina Spam

> [!warning]
>
> Nel nostro esempio menzioniamo la dicitura [SPAM] nell’oggetto di un’email. Questa dicitura compare quando l'antispam del server di ricezione consegna le email, che considera indesiderate, direttamente nella casella di posta. Come per la versione storica della soluzione MX Plan.

||Intestazione|Regola|Valore|Scenario possibile|
|---|---|---|---|---|
|Impostazioni del filtro|Oggetto del messaggio|contiene|[SPAM]|eliminazione|
|Cosa farà il filtro|Se il soggetto del messaggio|contiene|[SPAM]|elimina il messaggio.|

#### Reindirizzare le email di un destinatario

||Intestazione|Regola|Valore|Scenario possibile|
|---|---|---|---|---|
|Impostazioni del filtro|Da|contiene|contact@domaintest.ovh|reindirizzare verso un indirizzo remoto: jean@otherdomain.ovh|
|Cosa farà il filtro|Se il mittente|è|contact@domaintest.ovh|allora, reindirizza l'email verso jean@otherdomain.ovh|

#### Reindirizzare le email indirizzate a una Mailing list

||Intestazione|Regola|Valore|Scenario possibile|
|---|---|---|---|---|
|Impostazioni del filtro|A|contiene|ml@mailing.com|Reindirizza verso un indirizzo locale: recipient@mypersonaldomain.ovh|
|Cosa farà il filtro|Se il messaggio è stato inviato alla Mailing List|chiamata|ml@mailing.com|quindi, reindirizza il messaggio al mio altro indirizzo: recipient@mypersonaldomain.ovh|

#### Eliminare le email contenenti una menzione indesiderata, ad eccezione del mittente

Aggiungi due filtri:

||Intestazione|Regola|Valore|Scenario possibile|
|---|---|---|---|---|
|Parametri del filtro 1|Oggetto del messaggio|contiene|"money"|eliminazione|
|Impostazioni del filtro 2|Da|non contiene |john@mybank.ovh|eliminazione|

Se l'oggetto del messaggio contiene la parola "money" **e il** mittente del messaggio non è "john@mybank.ovh", il messaggio sarà soppresso:

![email](images/img_3242.jpg){.thumbnail}

## Per saperne di più

[Iniziare a utilizzare la soluzione MX Plan](/pages/web_cloud/email_and_collaborative_solutions/mx_plan/email_generalities)

[Regole della casella della posta in arrivo dall'interfaccia OWA](/pages/web_cloud/email_and_collaborative_solutions/using_the_outlook_web_app_webmail/creating-inbox-rules-in-owa-mx-plan)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
