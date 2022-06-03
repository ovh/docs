---
title: Configurare un DNS secondario OVHcloud su un VPS
slug: dns-secondario-vps
excerpt: Come aggiungere un server DNS secondario al tuo dominio
section: Utilizzo avanzato
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 12/01/2022**

## Obiettivo

Se configuri il tuo VPS come server DNS, puoi utilizzare il servizio DNS secondario di OVHcloud per ospitare una zona DNS secondaria. In questo modo, i server DNS del tuo dominio resteranno disponibili anche se il server DNS primario non risponde più.

**Questa guida ti mostra come aggiungere un dominio nel tuo Spazio Cliente OVHcloud per utilizzare un server DNS secondario.**

## Prerequisiti

- Un dominio a cui hai accesso in qualità di amministratore
- Un server [VPS](https://www.ovhcloud.com/it/vps/) nello Spazio Cliente OVHcloud
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)

> [!warning]
> OVHcloud mette a tua disposizione servizi di cui tu sei responsabile per la configurazione e la gestione. Spetta quindi a te garantirne il buon funzionamento.
>
> Questa guida ti aiuta a eseguire le operazioni necessarie sul tuo VPS. Tuttavia, in caso di difficoltà o dubbi relativi all'amministrazione, all'utilizzo o alla creazione di un servizio su un server, ti consigliamo di contattare un esperto del settore.
>

## Procedura

### Step 1: recupera il codice di conferma <a name="retrievecode"></a>

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it), clicca su `Bare Metal Cloud`{.action} e seleziona il tuo server nella sezione `Server Privati Virtuali`{.action}.

Clicca sulla scheda `DNS secondario`{.action} e poi sul pulsante `Aggiungi un dominio`{.action}.

![DNS secondario](images/sec-01.png){.thumbnail}

Inserisci il dominio che vuoi aggiungere e clicca su `Conferma`{.action}.

![DNS secondario](images/sec-02.png){.thumbnail}

Visualizzerai un messaggio relativo al processo di verifica nel tuo Spazio Cliente OVHcloud.

![DNS secondario](images/sec-03.png){.thumbnail}

Prima di poterlo aggiungere ai DNS secondari di OVHcloud, è necessario convalidare l'autorizzazione di gestione del dominio. Per effettuare questa operazione è necessaria una ricerca DNS automatizzata sul sottodominio *ownercheck.tuodominio*. A tal fine viene generata una stringa di caratteri individuale, che viene visualizzata nella zona di notifica rossa. Copia questo codice di conferma per utilizzarlo allo step successivo.

### Step 2: verifica dell'autorizzazione del dominio <a name="verifyingdomain"></a>

L'operazione da effettuare è diversa a seconda del luogo in cui i DNS del dominio sono gestiti.

- Se il dominio è gestito da un provider esterno **o** se utilizza server DNS esterni in questa fase, accedi allo Spazio Cliente del tuo provider DNS e aggiungi, nella zona DNS, un record di tipo TXT con il sottodominio "ownercheck" e il valore fornito eseguendo lo [Step 1](#retrievecode).

- Se il dominio è gestito da OVHcloud come registrar **e** utilizza i server DNS di OVHcloud, aggiungi il record TXT nella sezione `Web Cloud`{.action} del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Segui le istruzioni descritte nella guida [Modificare la zona DNS](../../domains/web_hosting_modifica_la_tua_zona_dns/)di un dominio.

![DNS secondario](images/sec-04.png){.thumbnail}

### Step 3: aggiunta del dominio

Una volta che il record TXT è presente nella zona DNS del dominio, ripeti gli [step descritti nella prima sezione di questa guida](#retrievecode) per aggiungere il dominio al server DNS secondario di OVHcloud.

Clicca su `Conferma`{.action} per avviare la verifica automatica del proprietario interrogando il record TXT. Un messaggio nel tuo Spazio Cliente ti confermerà la corretta convalida DNS. Adesso puoi eliminare il record TXT.

I domini aggiunti compaiono in questa scheda con il **nome corrispondente al server DNS secondario**. Aggiorna la pagina nel tuo browser dopo aver aggiunto un dominio.

![DNS secondario](images/sec-05.png){.thumbnail}

Per eliminare un dominio, clicca sul pulsante `...`{.action} nella tabella.

> [!primary]
>
> Per configurare il tuo server DNS sui tuoi domini, è necessario eseguire altre azioni:
>
> - la configurazione di un servizio DNS (come *BIND*)
> - configurazione delle registrazioni GLUE
> - autorizzazione al trasferimento di zona DNS
>
> Se hai bisogno di informazioni aggiuntive per eseguire queste operazioni, fai riferimento alla documentazione esterna.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
