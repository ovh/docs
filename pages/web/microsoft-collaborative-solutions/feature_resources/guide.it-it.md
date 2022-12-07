---
title: 'Crea e utilizza account di risorsa'
excerpt: In questa guida ti mostriamo come configurare degli account di risorsa
slug: exchange_2013_utilizzo_account_di_risorsa
section: Funzionalità degli account Exchange
order: 05
---

**Ultimo aggiornamento: 22 dicembre 2020**

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

## Obiettivo

Questa funzione collaborativa di Exchange permette di creare indirizzi di posta dedicati alle risorse della tua organizzazione, come sale di conferenza e dispositivi condivisi. L'utilizzo di questi account di risorse permette di ottimizzare l'organizzazione di eventi in un ambiente di lavoro collaborativo, fornendo controlli di disponibilità e integrando le risorse in modo trasparente nei calendari Exchange.

**Questa guida ti mostra come gestire le risorse utilizzando lo Spazio Cliente OVHcloud e l'applicazione Outlook Web App (OWA).**

## Prerequisiti

- Disporre di una [soluzione Exchange OVHcloud](https://www.ovhcloud.com/it/emails/hosted-exchange/) già configurata
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Disporre delle credenziali di accesso per gli account di posta che hanno accesso alla risorsa

## Procedura

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona `Web Cloud`{.action} nella barra di navigazione superiore. Clicca su `Microsoft`{.action} e poi su `Exchange`{.action}. Seleziona il servizio Exchange interessato. Clicca sulla scheda `Plus +`{.action} e poi su `Risorse`{.action}.

### Step 1: creare una risorsa

![creare risorse](images/exchange-resources-step1.png){.thumbnail}

Clicca sul pulsante `Aggiungi un account risorsa`{.action} per creare la tua prima risorsa. Nella nuova finestra inserisci i seguenti campi:

![creare risorse](images/exchange-resources-step2.png){.thumbnail}

|Nome|Descrizione|
|---|---|
|Email della risorsa|Inserisci l'indirizzo della risorsa. Non è possibile scegliere un indirizzo di posta esistente.|
|Nome della risorsa|Nome completo che compare nello [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e nella [Webmail OVHcloud](https://www.ovh.it/mail/) (OWA).|
|Capacità|È possibile definire la dimensione massima di una risorsa (specificando, ad esempio, il numero di posti a sedere di una parte o i sedili di un veicolo condiviso).|
|Permettere i conflitti|Se seleziona questa opzione, potrai creare eventi di calendario che si sovrappongono e coinvolgono la stessa risorsa.|
|Tipo di risorsa|Scegli il tipo di risorsa: "Apparecchiature" o "Sala".|

Clicca su `Avanti`{.action} per riassumere e conferma cliccando su `Crea`{.action}.


### Step 2: utilizzare le risorse

Le risorse possono essere gestite dalla tabella della scheda "Risorse". Clicca sui tre puntini `...`{.action}. per modificare o eliminare una risorsa. Comparirà anche l'opzione `Configura le deleghe`{.action}. Con questa opzione, potrai delegare l'accesso allo stesso modo di un account Exchange. Per maggiori informazioni, consulta [questa guida](../exchange_2013_assegna_i_diritti_full_access_a_un_account/).

![utilizzare le risorse](images/exchange-resources-step3.png){.thumbnail}

### Aggiungi un calendario delle risorse in OWA

> [!primary]
>
Consulta anche la nostra guida sulla [condivisione di calendari dall'interfaccia OWA](../exchange_2016_condividi_un_calendario_con_la_webmail_owa/).
>

Accedi al tuo account Exchange tramite la [Webmail OVHcloud](https://www.ovh.it/mail/). Clicca sul pulsante "Avanti" in alto a sinistra e seleziona l'icona `Calendario`{.action}.

![aggiungi un calendario](images/exchange-calendars-step1.png){.thumbnail}

Nella barra di navigazione superiore, clicca su `Aggiungi un calendario`{.action} e poi su `A partire dall'elenco`{.action}.

![selezionare risorsa](images/exchange-resources-step4.png){.thumbnail}

Inserisci un testo per visualizzare i suggerimenti dei tuoi contatti, inserisci un indirizzo email completo o utilizzi l'opzione di ricerca tramite `A partire dall'elenco`{.action}. Tuttavia, l'indirizzo di posta della risorsa deve essere suggerito in questa fase perché è stato automaticamente aggiunto alla lista di indirizzi globale (GAL) al momento della sua creazione. Clicca su `Aprire`{.action} per aggiungere il calendario di questa risorsa alla visione d'insieme del tuo calendario.

### Creare un evento in OWA

Per pianificare un evento, clicca prima su `Nuovo`{.action} nella barra del menu superiore e seleziona `Modifica il calendario`{.action}. Nella nuova finestra, puoi definire i dettagli del tuo evento e aggiungere l'equipaggiamento necessario e la posizione aggiungendo le risorse corrispondenti.

![pianificazione](images/exchange-resources-step5_1.png){.thumbnail}

Il gestore degli eventi è composto da tre parti:

#### Descrizione

- (1) Aggiungi un titolo all'evento: questo sarà visualizzato nei calendari.
- (2) Aggiungere una posizione o una sala: scegli tra i tuoi account di risorse.
- (3) Inizio/Fine: definisci la durata dell'evento.
- (4) Ripetere: se necessario, scegli un ciclo di ripetizione (giornaliero, stesso giorno ogni mese, ecc.).
- (5) Si ricorda: OWA mostra una finestra di promemoria all'ora specificata.
- (6) Mostra come: scegli uno stato per il tuo calendario di disponibilità.
- (7) Aggiungi un promemoria via posta: un'opzione che permette di inviare richiami via email a te stesso o a tutti i partecipanti.

Inserisci il tuo messaggio di invito nell'editore (8) e continua ad aggiungere partecipanti al tuo evento.

Se cerchi di aggiungere una risorsa già riservata ("occupata"), visualizzi un messaggio e suggerisce di utilizzare l'[Assistente di pianificazione](./#pianificazione) (9), che fornisce una visione d'insieme più ampia del calendario del periodo scelto.

#### Contatti

Dato che un account risorsa è anche un contatto, è possibile aggiungere sale e attrezzature in questa sezione, esattamente come per gli altri partecipanti (10). Inizia a digitare per visualizzare i suggerimenti dei tuoi contatti, inserisci un'email completa o utilizzi l'opzione di ricerca (un click su `+`{.action} aprirà i tuoi contatti).

Una volta terminata la pianificazione, clicca su `Invia`{.action} nella barra dei menu superiore, l'account risorsa ti invia un messaggio per confermare che è prenotato per il tuo evento. Seleziona la casella "Richiedere risposte" se hai bisogno di una conferma attiva da parte degli invitati per aggiornare automaticamente il tuo calendario.

#### Pianificazione

A destra compare un estratto del calendario dei tuoi eventi, intitolato **Pianificare**, non appena aggiungi una risorsa o una persona all'evento. fornisce un'anteprima grafica della disponibilità delle risorse il giorno scelto; per definire l'orario e la durata dell'evento, clicca sul mouse e seleziona il menu in alto a destra.

Se necessario, clicca su `Assistant Planification`{.action} nella sezione **Contatti** per aprire una panoramica ancora più dettagliata. Questo assistente è utile per eventi più importanti o per gestire i conflitti, perché visualizza l'intero processo di pianificazione. Per verificare la disponibilità e adattare la tua pianificazione selezionando posizioni e contatti, senza abbandonare questa interfaccia.

![assistente](images/exchange-resources-step6.png){.thumbnail}

### Messaggi di risposta della risorsa

Dopo aver creato l'evento (cliccando su `Invia`{.action} nella barra del menu superiore), Exchange invierà automaticamente dei messaggi:

- I partecipanti riceveranno inviti (per aggiornare i calendari o solo i loro, a seconda della scelta di "richiedere risposte" in precedenza).

- Riceverai un'email di conferma da ogni resource account scelto (se la risorsa è disponibile o se è riservata ma **hai selezionato** "Permettere i conflitti" durante la creazione).

![messaggio di accettazione](images/exchange-resources-step7.png){.thumbnail}

- Riceverai un'email di rifiuto da ogni resource account scelto (se la risorsa non è disponibile e **non hai selezionato** "Permettere i conflitti" durante la creazione).

![messaggio di rifiuto](images/exchange-resources-step8.png){.thumbnail}

## Per saperne di più

[Consulta il tuo account Exchange dall'interfaccia OWA](../exchange_2016_guida_allutilizzo_di_outlook_web_app/)

[Condividi un calendario dall'interfaccia OWA](../exchange_2016_condividi_un_calendario_con_la_webmail_owa/)

[Condividi una cartella con l'interfaccia OWA](../exchange_2016_condividi_una_cartella_con_la_webmail_owa/)

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
