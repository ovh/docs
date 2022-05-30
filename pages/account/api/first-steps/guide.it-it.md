---
title: Iniziare a utilizzare le API OVHcloud
slug: first-steps-with-ovh-api
excerpt: Come utilizzare le API OVHcloud
section: 'Per iniziare'
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 30/05/2022**

## Obiettivo

Le API disponibili su [https://api.ovh.com/](https://api.ovh.com/){.external} ti permettono di acquistare, gestire, aggiornare e configurare prodotti OVHcloud senza utilizzare un'interfaccia grafica come lo Spazio Cliente.

**Scopri come utilizzare le API OVHcloud e come associarle alle tue applicazioni**

## Prerequisiti

- Disporre di un account OVHcloud attivo e conoscere le proprie credenziali
- Essere sulla pagina Web delle [API OVHcloud](https://api.ovh.com/){.external}.

## Procedura

> [!warning]
>
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Garantirne quotidianamente il corretto funzionamento è quindi responsabilità dell’utente.
> 
> Questa guida ti aiuta a eseguire le operazioni necessarie alla configurazione del tuo account. Tuttavia, in caso di difficoltà o dubbi, ti consigliamo di contattare un fornitore specializzato o l’amministratore del servizio. OVH non può fornirti alcuna assistenza. Per maggiori informazioni consulta la sezione “[Per saperne di più](#gofurther)”.
> 


### Utilizzo semplice

#### Accedi alle API OVHcloud

Nella pagina delle [API OVHcloud](https://api.ovh.com/) clicca su `Explore the OVH API`{.action} per visualizzare la lista delle API. 

Per utilizzare le API sui tuoi prodotti, accedi al sito utilizzando le credenziali OVHcloud.

- Clicca su `Login`{.action} in alto a destra. 
- Inserisci le credenziali OVHcloud 
- Definisci una data, sotto la voce **Validity**, durante la quale autorizzi le azioni tramite le API OVHcloud.

![API](images/login.png){.thumbnail} 

> [!primary]
>
> Se il tuo account OVHcloud è protetto da una [doppia autenticazione](https://docs.ovh.com/it/customer/proteggi_il_tuo_account_con_2FA/), inserisci anche il codice generato tramite SMS o applicazione OTP o chiave U2F.
>

#### Esplora i prodotti disponibili sulle API

Una volta connesso, visualizzi la lista dei prodotti OVHcloud che dispongono delle API. Tale elenco è classificato in ordine alfabetico.

![API](images/api-list.png){.thumbnail} 

Per visualizzare, ad esempio, le API associate ai domini, clicca su **/domain** nella lista.

Dopo aver cliccato sul prodotto, visualizzi la lista delle API del prodotto. 

![API](images/api-displayed.png){.thumbnail} 

#### Esegui un'API

Esistono 4 tipi di API disponibili che utilizzano i cosiddetti metodi HTTP: 

**GET** 

La modalità GET ha lo scopo di recuperare i dati di una risorsa.

Ad esempio, per recuperare la lista dei tuoi domini, utilizza questa API:
 
> [!api]
>
> @api {GET} /domain
>

**POST**

Il metodo POST è utilizzato per inviare dati aggiuntivi alla risorsa. 

Ad esempio, per aggiungere un record alla tua zona DNS, utilizza questa API:

> [!api]
>
> @api {POST} /domain/zone/{zoneName}/record
>

**PUT**

Il metodo PUT serve a sostituire i dati attuali della risorsa con i dati della richiesta.

Ad esempio, in caso di errore nel record della tua zona DNS, utilizza questa API:

> [!api]
>
> @api {PUT} /domain/zone/{zoneName}/record/{id}
>

**DELETE**

Il metodo DELETE è utilizzato per eliminare la risorsa chiamata.

Ad esempio, se non vuoi conservare il record DNS che hai aggiunto alla tua zona DNS, utilizza questa API:

> [!api]
>
> @api {DELETE} /domain/zone/{zoneName}/record/{id}
>

##### Impostazioni dell'API

Dopo aver cliccato sull'API di tua scelta, la sezione **Parameters** permette di attribuire le variabili relative alla sua applicazione.
 
Ad esempio, per aggiungere un record TXT nella tua zona DNS, ottieni questi parametri:

![API](images/parameters.png){.thumbnail} 

Una volta definiti i parametri, puoi avviare l'API cliccando su `Execute`{.action}. 

La scheda `Result` mostrata fornirà il report di esecuzione dell'API.

![API](images/result.png){.thumbnail} 

Le schede `PHP` e `Python` contengono gli elementi da aggiungere al tuo script in base al linguaggio utilizzato.

### Utilizzo avanzato: associare le API OVHcloud con un'applicazione

#### Crea le chiavi della tua applicazione

Qualsiasi applicazione che desideri comunicare con l'API OVHcloud deve essere dichiarata in anticipo.

Clicca su questo link: [https://eu.api.ovh.com/createToken/](https://eu.api.ovh.com/createToken/){.external}.

Inserisci il tuo identificativo cliente, la password e il nome della tua applicazione. Il nome sarà utile più tardi se volete autorizzare altre persone a usarlo.

È inoltre possibile aggiungere una descrizione dell'applicazione e una temporalità. 

Il campo `Rights` ti permette di limitare l'utilizzo dell'applicazione a certe API.<br>
Per autorizzare tutte le API OVHcloud per un metodo HTTP, inserisci una stella `*` nel campo, come nell'esempio qui sotto, dove il metodo GET è autorizzato per tutte le API:

![API keys](images/api-keys.png){.thumbnail} 

Dopo aver cliccato su `Create keys`{.action}, ottieni tre chiavi:

- la chiave di applicazione, chiamata **AK**. Ad esempio:

```console
7kbG7Bk7S9Nt7ZSV
```

- la chiave segreta da non divulgare, chiamata **AS**. Ad esempio:

```console
EXEgWIz07P0HYwtQDs7cNIqCiQaWSuHF
```

- una segreta "**consumer key**" da non divulgare, chiamata **CK**. Ad esempio:

```console
MtSwSrPpNjqfVSmJhLbPyr2i45lSwPU1
```

In questo caso, la chiave **CK** è associata al tuo account.

Il token **CK** può essere utilizzato per la delega dei diritti. Per saperne di più, consulta questa guida: [Come gestire l'account di un cliente OVHcloud tramite le API](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (guida in inglese).


#### Primo utilizzo dell'API

Una volta ottenute le tre chiavi (**AK**, **AS**, **CK**), puoi firmare le richieste di API. La firma è calcolata come segue:

```console
"$1$" + SHA1_HEX(AS+"+" + CK+"+"+METHOD+"+"+QUERY+"+"+BODY+"+"+TSTAMP
```

Per semplificare lo sviluppo delle tue applicazioni, OVHcloud mette a disposizione wrappers API in diversi linguaggi.
Utilizzarli ti permette di non preoccuparti del calcolo della firma e di concentrarti sullo sviluppo della tua applicazione.

- *Perl* : <https://eu.api.ovh.com/wrappers/OvhApi-perl-1.1.zip>
- *Python* : <https://github.com/ovh/python-ovh>
- *PHP* : <https://github.com/ovh/php-ovh>
- *Node.js* : <https://github.com/ovh/node-ovh>
- *Swift* : <https://github.com/ovh/swift-ovh>
- *C#* : <https://github.com/ovh/csharp-ovh>

Ecco un esempio di utilizzo della sezione `/me` che permette di gestire il tuo account OVHcloud:

```python
import ovh

# Instantiate. Visit https://api.ovh.com/createToken/?GET=/me
# to get your credentials
client = ovh.Client(
    endpoint='ovh-eu',
    application_key='<application key>',
    application_secret='<application secret>',
    consumer_key='<consumer key>',
)

# Print nice welcome message
print("Welcome", client.get('/me')['firstname'])
```

## Per saperne di più <a name="gofurther"></a>

[Gestire un dominio tramite le API OVHcloud](https://docs.ovh.com/it/domains/api/) (guida in inglese)

[Come gestire l'account di un cliente OVHcloud tramite le API](https://docs.ovh.com/gb/en/api/api-rights-delegation/) (guida in inglese)

Contatta la nostra Community di utenti all’indirizzo [https://community.ovh.com/en](https://community.ovh.com/en/)
