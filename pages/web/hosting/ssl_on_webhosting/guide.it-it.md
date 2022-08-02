---
title: 'Gestire un certificato SSL su un hosting Web'
slug: i_certificati_ssl_sugli_hosting_web_ovh
excerpt: 'Come attivare e utilizzare un certificato SSL sugli hosting Web OVHcloud'
section: SSL
order: 1
legacy_guide_number: g1594
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 01/08/2022**

## Obiettivo

Le operazioni di gestione degli hosting Web OVHcloud, disponibili direttamente nell’area utente dedicata, includono diverse azioni eseguibili sui certificati SSL generati in OVHcloud o ottenuti presso altri provider e poi importati. Installare questi certificati è importante, in quanto consentono ai siti Internet di stabilire una connessione SSL sicura alla rete ed essere accessibili in HTTPS.

**Questa guida ti mostra come gestire un certificato SSL su un hosting Web OVHcloud.**

## Prerequisiti

- Disporre di un piano di [hosting Web OVHcloud](https://www.ovhcloud.com/it/web-hosting/){.external} attivo.
- Aver registrato almeno un [dominio](https://www.ovhcloud.com/it/domains/){.external}.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Web Cloud`{.action}.

## Procedura

Per generare un certificato SSL su un hosting Web OVHcloud sono necessari diversi step. Ti consigliamo di seguire **nell'ordine** i 3 step descritti di seguito.

[2. Attiva un certificato SSL su un multisito](#multisite): se la tua soluzione o il tuo certificato SSL te lo permettono, puoi far beneficiare diversi dei tuoi multisiti di una connessione protetta SSL.

[1. Attiva un certificato SSL sul tuo hosting Web](#enablessl): ti aiuta ad attivare un certificato SSL sul tuo hosting Web. Può trattarsi di un certificato gratuito o a pagamento ordinato presso OVHcloud. Il certificato SSL ordinato può essere importato anche da un altro provider.

[3. Rigenera un certificato SSL su un hosting Web](#regeneratessl): ti permette di rigenerare un certificato SSL Let's Encrypt sul tuo hosting Web attivando l'SSL su uno o più multisiti.

Puoi anche [eliminare il certificato SSL su un hosting Web](#deletessl). **Ti ricordiamo che questo potrebbe comportare dei rischi se uno dei tuoi siti Web utilizza attualmente il certificato che intendi eliminare**.

### 1. Attiva un certificato SSL su un multisito <a name="multisite"></a>

In base al [certificato SSL ](https://www.ovhcloud.com/it/web-hosting/options/ssl/){.external}che vuoi attivare, puoi attivare una connessione SSL sicura su uno o più dei tuoi multisiti. Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e seleziona `Web Cloud`{.action}. Nella sezione `Hosting`{.action}, e clicca sulla scheda Multisito.

La tabella che appare contiene quindi tutti i domini che hai aggiunto al tuo hosting. La colonna "SSL" mostra lo stato di attivazione delle connessioni SSL sui tuoi multisiti.

![Gestione SSL](images/manage-ssl-step5.png){.thumbnail}

A questo punto, tre stati potrebbero apparire:

|Stato|Descrizione|
|---|---|
|Attivo|Sul multisito è già attivo un certificato SSL. Se il tuo sito non è disponibile in HTTPS, consulta la nostra guida [Attivare HTTPS su un sito Internet tramite il certificato SSL](../attivare-https-su-sito-internet-tramite-certificato-ssl/){.external}.|
|Da generare|Sul multisito è stato attivato un certificato SSL ma tecnicamente non è ancora abilitato. In questo caso, è necessario rigenerarlo in modo che includa i nuovi domini del multisito.|
|Disattivo|Sul multisito non è attivo nessun certificato SSL. Per attivarlo, segui le indicazioni descritte qui sotto.|

Per attivare un certificato SSL su un multisito, clicca sui tre puntini `...`{.action} in corrispondenza del multisito interessato e seleziona `Modifica il dominio`{.action}. Nella finestra che appare seleziona la casella `SSL`{.action}. Puoi anche attivare l'opzione per modificare il sottodominio www insieme al dominio associato. Segui gli step fino alla conferma della modifica.

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

Prima di procedere con questa configurazione, assicurati che lo step precedente di [attivazione di un certificato SSL su un sito multisito](#multisito) sia stato effettuato correttamente. Almeno un dominio deve avere l'opzione SSL `Attivata` o lo stato `A Genera` per attivare il certificato SSL.<br>
**Queste informazioni non si applicano se selezioni `Certificato a pagamento`{.action} o `Importa il tuo certificato SSL`{.action}.**

> [!warning]
>
> Prima di proseguire, assicurati anche che il record o i record multisito per i quali attivi l'opzione SSL puntino verso l'indirizzo IP dell'hosting Web. Questa configurazione viene proposta automaticamente quando aggiungi o modifichi un record multisito, ma deve essere fatta manualmente per un dominio non gestito nel tuo Spazio Cliente.<br>
> - Nella scheda `Informazioni generali`{.action}, clicca su `IPv4` e seleziona l'indirizzo IP del tuo hosting.
>![managessl](images/manage-ssl-arecord01.png){.thumbnail}
> - Configura la zona DNS del dominio dichiarato su multisito, dalla sezione `Domini`{.action}, nella scheda `Zona DNS`{.action}. Modifica o aggiungi un record di tipo `A` corrispondente al tuo record multisito e inserisci l'indirizzo IP del tuo hosting nella `Cible`.
>![managessl](images/manage-ssl-arecord02.png){.thumbnail}
>
> Per maggiori informazioni, consulta le nostre guide [sulla configurazione di un record multisito](https://docs.ovh.com/it/hosting/configurare-un-multisito-su-un-hosting-web/) o su [la configurazione di una zona DNS](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/).

Gli hosting Web OVHcloud permettono di attivare diversi tipi di [certificati SSL](https://www.ovhcloud.com/it/web-hosting/options/ssl/){.external}:

- un certificato SSL gratuito Let’s Encrypt, [incluso nei piani di hosting Web compatibili](https://www.ovhcloud.com/it/web-hosting/options/ssl/){.external}
- un certificato SSL a pagamento, [in opzione nei piani di hosting Web compatibili](https://www.ovhcloud.com/it/web-hosting/options/ssl/){.external}
- un certificato SSL ottenuto presso un altro provider e importato sull’hosting Web OVHcloud

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e seleziona `Web Cloud`{.action}. Seleziona il tuo servizio nella sezione `Hosting`{.action}. Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Nella scheda "Certificato SSL" dovrebbe comparire la voce "No", che indica che sull'hosting Web non è stato configurato alcun certificato SSL.


Clicca sui tre puntini `...`{.action} in corrispondenza di "Certificato SSL" e seleziona `Ordina un certificato SSL`{.action}.

Nel caso che invece compaia la voce “Sì”, significa che sull’hosting Web è già installato un certificato e non sarà possibile ordinarne un altro fino a quando quello esistente risulterà attivo.

![Gestione SSL](images/manage-ssl-step1.png){.thumbnail}

Nella nuova finestra, seleziona il certificato che vuoi generare. Ti ricordiamo che, in base al [piano di hosting Web](https://www.ovhcloud.com/it/web-hosting/){.external} attivo e alla sua configurazione, alcune delle soluzioni elencate in questa guida potrebbero non essere disponibili. Una volta effettuata la scelta, clicca sul pulsante `Seguente`{.action}.

![Gestione SSL](images/manage-ssl-step2.png){.thumbnail}

A seconda dell’opzione selezionata, potrebbero essere necessari alcuni step aggiuntivi:

- i **certificati SSL gratuiti** non dovrebbero richiedere ulteriori azioni, tranne nell’eventualità che un elemento tecnico impedisca l’attivazione del certificato (in questo caso compare un messaggio nello Spazio Cliente OVHcloud, che indica gli elementi da verificare) o la convalida del dominio necessaria per il suo ottenimento. Anche in questo caso riceverai una notifica e sarà necessario seguire le indicazioni fornite.

- i **certificati SSL a pagamento** richiedono il completamento degli step del processo d’ordine per essere generati. Per alcune tipologie sono necessarie convalide specifiche ed è quindi possibile che vengano inviate una o più email a questo proposito. Segui le indicazioni contenute in questi messaggi per completare l’installazione.

- l’**importazione di un certificato SSL** richiede l’inserimento di alcune informazioni aggiuntive. Segui le indicazioni fornite dal provider che lo ha generato.

In base alla tipologia di certificato scelta, l’installazione può durare da pochi minuti a diversi giorni. Per verificare che l’operazione sia stata effettuata correttamente, ritorna alla scheda `Informazioni generali`{.action} dello Spazio Cliente OVHcloud e verifica che nel riquadro **Configurazione** sotto **Certificato SSL** compaia la voce “Sì”.

![Gestione SSL](images/manage-ssl-step4.png){.thumbnail}

### 3. Rigenerare un certificato SSL di un hosting Web <a name="regeneratessl"></a>

> [!primary]
>
> Questa operazione è valida esclusivamente per i certificati che consentono l’attivazione di una connessione SSL sicura su più multisiti.
>

Una volta attivata la connessione SSL su uno o più dei tuoi multisiti, lo stato visualizzato è “Da generare”. Questo passaggio è indispensabile per poter aggiungere i domini interessati al certificato SSL dell’hosting.

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e seleziona `Web Cloud`{.action}. Nella sezione `Hosting`{.action}, Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Clicca sui tre puntini `...`{.action} in corrispondenza di "Certificato SSL" e `seleziona Rigenera il certificato SSL`{.action}.

![Gestione SSL](images/manage-ssl-step7.png){.thumbnail}

Leggi le informazioni che compaiono nella nuova finestra, clicca su `Conferma`{.action} e attendi il tempo necessario alla rigenerazione del certificato. Questa operazione potrebbe durare anche diverse ore.

Ti ricordiamo che Let's Encrypt, l’autorità che fornisce i certificati SSL sugli hosting Web OVHcloud, impone un [limite di cinque rigenerazioni a settimana](https://letsencrypt.org/docs/rate-limits/){.external}. Ti consigliamo quindi di verificare attentamente il numero di rigenerazioni settimanali da eseguire, per evitare qualsiasi impatto sulla tua attività.

![Gestione SSL](images/manage-ssl-step8.png){.thumbnail}

### Eliminare un certificato SSL da un hosting Web <a name="deletessl"></a>

Il certificato SSL installato su un hosting può essere eliminato in qualsiasi momento. Prima di effettuare questa operazione **ti consigliamo di assicurarti che la rimozione del certificato non abbia impatto sulla raggiungibilità dei tuoi siti Internet**. Ti ricordiamo inoltre che se il tuo sito utilizza il protocollo HTTPS ma non usufruisce di una connessione SSL, i tuoi visitatori visualizzeranno un errore di sicurezza.

Queste operazioni sono relative ai parametri dei tuoi siti, per cui OVHcloud non fornisce assistenza. In caso di difficoltà o dubbi, ti consigliamo di contattare un esperto del settore.

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.com/fr/&ovhSubsidiary=fr){.external} e seleziona `Web Cloud`{.action}. Nella sezione `Hosting`{.action}, Assicurati di trovarti nella scheda `Informazioni generali`{.action}. Clicca sui tre puntini in corrispondenza di "Certificato SSL" e seleziona `Elimina SSL`{.action}.

Nella nuova pagina, conferma l’eliminazione: l’operazione diventerà effettiva entro poche ore.

![Gestione SSL](images/manage-ssl-step9.png){.thumbnail}

## Per saperne di più

[Attivare HTTPS su un sito Internet tramite il certificato SSL](../attivare-https-su-sito-internet-tramite-certificato-ssl/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
