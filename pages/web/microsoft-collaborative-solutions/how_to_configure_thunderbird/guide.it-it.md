---
title: 'Configurare un account Exchange su Thunderbird per Windows'
excerpt: 'Come configurare un account Exchange sul client di posta Thunderbird per Windows'
slug: exchange_20132016_configurazione_di_thunderbird
section: 'Configurazione di un client di posta elettronica Exchange'
legacy_guide_number: g1278
---

**Ultimo aggiornamento: 17/01/2020**

## Obiettivo

Gli account Exchange possono essere configurati su client di posta compatibili. Thunderbird non è compatibile con il protocollo Exchange MAPI, ma la configurazione può essere effettuata in POP o in IMAP. Nel nostro esempio, un account Hosted Exchange è configurato in IMAP.

**Come configurare un account Exchange sul client di posta Thunderbird per Windows.**

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei il responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a realizzare le operazioni più ricorrenti. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare uno esperto del settore 
> o il fornitore del servizio. OVHcloud non potrà fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione [Per saperne di più](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_20132016_configurazione_di_thunderbird/#per_saperne_di_piu_1)
> di questa guida.
> 

## Prerequisiti

- Disporre di una soluzione [Exchange](https://www.ovh.it/emails/){.external}
- Aver installato l’applicazione Thunderbird sul proprio dispositivo
- Disporre delle credenziali associate all’account email da configurare

## Procedura

### Step 1: avvio
Una volta avviata l’applicazione Thunderbird sul tuo dispositivo,

accedi al menu per aggiungere un nuovo account. Seleziona `Posta elettronica`{.action} per continuare.

![emails](images/configuration-thunderbird-exchange-step1.png){.thumbnail}


### Step 2: Crea l'account
Completa i campi richiesti:

- Nome e Cognome *Inserisci qui il nome da visualizzare.*
- Indirizzo di posta elettronica: *Inserisci l’indirizzo email completo.*
- Password:  *La password definita nel tuo [Spazio Cliente](https://www.ovh.com/manager/web/login.html){.external} per l’account Exchange.*
- Ricorda password:  *È necessario selezionare questa opzione.*

Clicca su `Configurazione manuale`{.action} per continuare l’installazione.


![emails](images/configuration-thunderbird-exchange-step2.png){.thumbnail}


### Step 3: Configurazione manuale

> [!primary]
>
> Nel nostro esempio, usiamo il nome del server, ad esempio: **X**.mail.ovh.net.
> 
> Per recuperare i dati del server accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager){.external}, sezione `Web`{.action}, quindi seleziona `Microsoft`{.action}
>  nella colonna a sinistra. Seleziona `Exchange`{.action}, quindi la tua piattaforma. Il server è visibile nel riquadro **Connessione** della scheda `Informazioni Generali`{.action}
> 

Dopo aver cliccato su `Configurazione manuale`{.action}, verifica che i dati siano stati inseriti correttamente.

- Server in entrata: **IMAP** 
- Nome host del server: *indica il server che ospita il il tuo servizio Exchange.*
- Porta:  **993**
- Metodo di cifratura:   **SSL**
- Autenticazione:  **password normale**
- Server in uscita **SMTP**
- Nome host del server: *indica il server che ospita il il tuo servizio Exchange.* 
- Porta:  **587** 
- Metodo di cifratura:  **STARTTLS** 
- Autenticazione:  **password normale** 
- Identificativo: *inserisci l’indirizzo email completo.*

> [!primary]
>
> Per gli account di tipo [Private Exchange](https://docs.ovh.com/it/microsoft-collaborative-solutions/exchange_configura_la_tua_soluzione_private_exchange/){.external}, inserisci il nome del server che hai scelto al momento dell’ordine.
>

Se l’autenticazione **Password normale** non funziona, puoi inserire anche **NTLM**.

Clicca su `Termina`{.action} per continuare l’installazione.


![emails](images/configuration-thunderbird-exchange-step3.png){.thumbnail}


### Step 4: finalizzazione

Il tuo account Exchange è configurato correttamente in IMAP. Da questo momento, puoi infatti inviare e ricevere messaggi.

OVHcloud propone anche un’applicazione Web con > accessibile utilizzando le credenziali del tuo account.


## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.