---
title: Creare filtri per i tuoi indirizzi email
excerpt: Come creare e configurare un filtro sul tuo indirizzo email
slug: servizio_email_configura_i_filtri_email_nel_tuo_spazio_cliente_ovh
legacy_guide_number: g1973
section: Funzionalità degli indirizzi email
order: 04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 12/08/2020**

## Obiettivo

Un filtro permette di configurare le condizioni sulle email ricevute e le azioni che ne derivano.

Ad esempio: vuoi che tutte le email contenenti "[SPAM]" nell'oggetto siano eliminate.

- Requisito = soggetto dell'email contenente *SPAM*
- Azione = eliminare l'email

**Come creare e configurare un filtro sul tuo indirizzo email**

## Prerequisiti

- Disporre di una soluzione email MX Plan o di un [Pack Hosting Web](https://www.ovh.it/hosting-web/){.external}
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}

## Procedura

Per prima cosa accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.

Seleziona il dominio dalla sezione `Email`{.action}.

Nella tabella con gli indirizzi email, clicca su `Filtro`{.action} dell'indirizzo corrispondente.

![email](images/img_3239.jpg){.thumbnail}

Puoi accedere alla lista dei tuoi filtri configurati per questo indirizzo email. Per aggiungerne uno, clicca sul pulsante a destra `Aggiungi un Filtro`{.action}.

![email](images/img_3240.jpg){.thumbnail}

### Come configurare i filtri email

![email](images/img_3241.jpg){.thumbnail}

#### Campo

- **Nome del filtro:** per differenziare i filtri nello Spazio Cliente.
- **Priorità:** Questa guida ti mostra l'ordine di esecuzione dei filtri su una stessa casella di posta. Un filtro di priorità 1 verrà eseguito prima di un filtro di priorità 5.
- **Attiva il filtro:** Ciò determina se il filtro sarà effettivo o no (per esempio, è possibile creare un filtro deselezionando l'opzione se desideri attivarla più tardi).

#### Regole

È qui che state per configurare le condizioni, le regole del filtro.

Prima scelta (intestazione):

- **Da:** Corrisponde al mittente, ad esempio: "Se il mittente ..."
- **A:** Corrisponde al destinatario, ad esempio: "Se il destinatario ..."
- **Oggetto del messaggio:** Corrisponde all'argomento del messaggio, ad esempio: "Se il soggetto del messaggio ..."
- **Altro:** Altro parametro

Seconda scelta (Regola):

- **spf:** Parametro che dipende dal record SPF, ad esempio: "... non ha record SPF ..."
- **contiene:** esempio: "... contiene ..."
- **non contiene:** esempio: "... non contiene..."

Terza scelta (valore):

- Esempio: [SPAM]

Quarta scelta (+):

- per permetterti di aggiungere una o più condizioni per la stessa azione.

**Risultato di queste condizioni** - Esempio: "Se il soggetto del messaggio contiene [SPAM]"

#### Azione

È qui che sceglierete cosa verrà fatto dal filtro se le condizioni sopra sono soddisfatte.

Puoi scegliere tra:

- **Accettare:** Le email che soddisfano questi requisiti saranno ricevute normalmente.
- **Reindirizza verso un indirizzo locale:** Reindirizza le email che soddisfano i requisiti necessari verso uno degli indirizzi email del tuo dominio.
- **Eliminazione:** Le email che soddisfano queste condizioni verranno eliminate.
- **Reindirizzare verso un indirizzo remoto:** Reindirizza le email che soddisfano i requisiti all'indirizzo email che preferisci.

### Esempi

#### Elimina Spam

||Intestazione|Regola|Valore|Scenario possibile|
|---|---|---|---|---|
|Impostazioni del filtro|Oggetto del messaggio|contiene|[SPAM]|eliminazione|
|Cosa farà il filtro|Se il soggetto del messaggio|contiene|la suite "[SPAM]"|elimina il messaggio.|

#### Reindirizzare le email di un destinatario

||Intestazione|Regola|Valore|Scenario possibile|
|---|---|---|---|---|
|Impostazioni del filtro|De|contiene|contact@domaintest.ovh|reindirizzare verso un indirizzo remoto: john@otherdomain.ovh|
|Cosa farà il filtro|Se il mittente|è|contact@domaintest.ovh|allora, reindirizza l'email verso john@otherdomain.ovh|

#### Reindirizzare le email indirizzate a una Mailing list

||Intestazione|Regola|Valore|Scenario possibile|
|---|---|---|---|---|
|Impostazioni del filtro|À|contiene|ML@mailing.com|Reindirizza verso un indirizzo locale: recipient@mypersonaldomain.ovh|
|Cosa farà il filtro|Se il messaggio è stato inviato alla Mailing List|chiamata|ML@mailing.com|quindi, reindirizza il messaggio al mio altro indirizzo: recipient@mypersonaldomain.ovh|

#### Eliminare le email contenenti una menzione indesiderata ad eccezione di un mittente

Aggiungi due filtri:

||Intestazione|Regola|Valore|Scenario possibile|
|---|---|---|---|---|
|Parametri del filtro 1|Oggetto del messaggio|contiene|"money"|eliminazione|
|Impostazioni del filtro 2|De|non contiene |john@mybank.ovh|eliminazione|

Se l'oggetto del messaggio contiene la parola "money" **e** il mittente del messaggio non è "john@mybank.ovh", il messaggio sarà soppresso.

In questo caso, la configurazione sarà la seguente:

![email](images/img_3242.jpg){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
