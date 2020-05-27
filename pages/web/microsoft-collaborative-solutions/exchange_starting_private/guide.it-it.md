---
title: 'Iniziare a utilizzare Private Exchange'
excerpt: 'Come configurare il tuo server Private Exchange'
slug: exchange_pirmi_zingsniai_su_private_serveriu
section: 'Iniziare a utilizzare Exchange'
legacy_guide_number: g2074
---

**Ultimo aggiornamento: 25/03/2020**

## Obiettivo

Se hai appena ordinato una soluzione Private Exchange, segui questi passaggi per configurare il tuo servizio.

**Questa guida ti mostra come configurare la piattaforma Private Exchange**.

## Prerequisiti

- Aver ordinato una [soluzione Private Exchange OVHcloud](https://www.ovh.it/emails/){.external}.
- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)

## Procedura

### Step 1: ricevi l’email di configurazione della tua piattaforma

Una volta saldato il tuo ordine, ricevi un’email all’indirizzo di contatto indicato nel tuo Spazio Cliente, con le informazioni necessarie per eseguire l’installazione della tua piattaforma Private Exchange. 

Per consultare questa email dal tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), clicca sul tuo profilo in alto a destra e poi su `Il tuo account`{.action}. Clicca sulla scheda `Email ricevute`{.action} e cerca l’email che ha come oggetto:

> **[xx-11111-ovh] Il tuo servizio Private Exchange 2016v1 è in consegna!**


![first-use-private-exchange](images/first-use-private-exchange-01.png){.thumbnail}

Questa email contiene un link che consente di effettuare due operazioni di configurazione della piattaforma:

- personalizzare il link d’accesso alla tua Webmail
- inserire l’indirizzo email di contatto per confermare il tuo certificato (attenzione: questo indirizzo email deve essere esistente e accessibile).

Clicca sul link indicato nell’email ricevuta, e poi passa allo [Step 2](./#step-2-avvia-la-piattaforma){.external} :

### Step 2: avvia la piattaforma

Dopo aver cliccato sul link indicato nell’email allo [Step 1](./#step-1-ricevi-lemail-di-configurazione-della-tua-piattaforma){.external} , 

sarai reindirizzato alla pagina di configurazione:

![first-use-private-exchange](images/first-use-private-exchange-02.png){.thumbnail}

Per effettuare la configurazione segui le indicazioni di questa tabella:

| Campo          	| Descrizione                                                                                                                                                                                                                             	|
|----------------------	|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| Nome del server: 	| Nel menu a tendina, seleziona il sottodominio associato al tuo dominio. <br> Nel campo vuoto, inserisci il dominio che vuoi associare.                                                                   	|
| Email               	| Scegli un indirizzo email tra quelli proposti nella lista, per ricevere l’email di conferma del tuo certificato SSL. Per questo motivo è molto importante che sia valido o che reindirizzi verso un altro indirizzo email accessibile per riceverlo.
| DNS Assist:           	| Selezionando questa casella, autorizzi la configurazione automatica della tua zona DNS per il dominio della tua piattaforma. Il dominio deve essere associato allo stesso account OVHcloud della tua piattaforma. Se non selezioni la casella, ti verrà inviata un’email con le informazioni necessarie per la configurazione della tua zona DNS. 	|

Una volta completato questo step, un messaggio ti informa che la configurazione è stata eseguita correttamente e ti ricorda l’indirizzo email di conferma del certificato SSL, nonché l’indirizzo di accesso alla Webmail della tua piattaforma.

### Step 3: configura manualmente la tua zona DNS

> [!primary]
>
> Questo step è facoltativo, se hai selezionato “**DNS Assist**” allo [Step 2](./#step-2-avvia-la-piattaforma){.external}  .
> 

Se il tuo dominio non è associato allo stesso identificativo cliente o non è ospitato in OVHcloud, riceverai un’altra email con le informazioni necessarie a modificare la tua zona DNS.

L’email contiene gli indirizzi IPv4 e IPv6 della tua piattaforma: Inserisci questi indirizzi nella zona DNS del sottodominio creato allo [Step 2](./#step-2-avvia-la-tua-piattaforma){.external}, rispettivamente sotto forma di un record “A” e di un record “AAAA”. Se disponi di un dominio OVHcloud, consulta la nostra guida [Modifica una zona DNS](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/).



### Step 4: conferma il certificato SSL

Una volta completato [lo Step 2](./#step-2-avvia-la-tua-piattaforma){.external}, ricevi un’email all’indirizzo scelto per confermare il tuo certificato SSL.

Questa email è inviata dall’organismo che rilascia il certificato SSL e ha come oggetto:

> **ORDER #1111111 - Domain Control Validation for exchange.votredomaine.com**

Copia il codice presente nell’email e clicca sul link di conferma del certificato SSL.

Incolla il codice nell’apposita casella, all’interno della finestra che appare, e poi clicca su Next.

![first-use-private-exchange](images/first-use-private-exchange-03.png){.thumbnail}

Un messaggio ti informa se il codice inserito è valido. In caso affermativo, clicca su `Close window`{.action}.

### Finalizzazione

Una volta confermato il certificato SSL, potrebbero essere necessarie fino a 4 ore per la consegna del tuo servizio. Durante le fasi di configurazione il tuo server Private Exchange non è visibile nel tuo Spazio Cliente OVHcloud.

Una volta che il tuo server è pronto e disponibile, riceverai un’email di conferma con il seguente oggetto:

> **[xx-11111-ovh] Il tuo servizio Private Exchange 2016v1 è pronto!**

Per aggiungere un dominio alla tua piattaforma e configurare gli account; consulta la nostra guida [“Aggiungere un dominio su Exchange”](../aggiungere-dominio-su-exchange/) 

## Per saperne di più

[Modificare una zona DNS](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/)

[Aggiungere un dominio su Exchange](../aggiungere-dominio-su-exchange/) 

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
