---
title: 'Attiva e gestisci il tuo Sharepoint OVH'
excerpt: 'Attiva e gestisci il tuo Sharepoint OVH'
slug: attiva_e_gestisci_il_tuo_sharepoint_ovh
legacy_guide_number: g2249
---

**Ultimo aggiornamento: 15/04/2020**

## Obiettivo

Le offerte SharePoint ti consentono di usufruire di uno spazio di storage condiviso per il lavoro collaborativo.

**Questa guida ti mostra come ordinare e configurare una piattaforma SharePoint.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager)
- Aver attivato un’offerta [Hosted Exchange](https://www.ovh.it/emails/hosted-exchange/){.external} per poter ordinare una piattaforma SharePoint associata.

## Procedura

### Step 1: Ordina una piattaforma SharePoint

Accedi alla sezione “Web” del tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager). Nella colonna a sinistra clicca su `Ordina`{.action}  e poi su `SharePoint`{.action}.

Puoi scegliere tra due tipi di piattaforme:

| SharePoint associato                                                                                                                      	| SharePoint standalone                                                                                                                                                                       	|
|-----------------------------------------------------------------------------------------------------------------------------------------	|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| ![sharepoint](images/order-manage-sharepoint-02.png){.thumbnail}                                                                        	| ![sharepoint](images/order-manage-sharepoint-03.png){.thumbnail}                                                                                                                            	|
| Se disponi di una soluzione Hosted Exchange sul tuo Spazio Cliente, puoi associare i tuoi account a una piattaforma SharePoint. Seleziona l’account a cui vuoi associare una licenza SharePoint. 	| Se non disponi di una soluzione Exchange Hosted di OVHcloud o non sei interessato a una piattaforma SharePoint indipendente, ordina una piattaforma SharePoint Standalone. <br>Definisci il numero di licenze che ti interessano in base al numero degli utenti.	|

Una volta effettuata la scelta, clicca su `Ordina il servizio`{.action} per completare il tuo ordine.

### Step 2: attiva la piattaforma SharePoint

Una volta confermato l’ordine ed effettuato il saldo, riceverai un messaggio di conferma al tuo indirizzo email principale, che indica che il servizio è pronto per essere configurato.

Per consultare questa email, accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), clicca sul tuo profilo in alto a destra e infine clicca sulle tue iniziali. Vai alla scheda `Email ricevute`{.action} e cerca l’email che ha per oggetto:

> **\[xx-11111-ovh] Configura il tuo servizio Microsoft SharePoint !**

Per avviare la configurazione, accedi alla sezione `Web` del tuo Spazio Cliente. Nella colonna a sinistra clicca su `Microsoft`{.action} > `SharePoint`{.action} e seleziona il servizio SharePoint interessato.

Definisci il nome del tuo servizio nella casella “SharePoint URL” e clicca su `Conferma l’URL`{.action}

![sharepoint](images/order-manage-sharepoint-04.png){.thumbnail}  

> [!warning]
>
> Una volta convalidato l’URL, il nome della piattaforma non può essere modificato.

### Step 3: configura la piattaforma SharePoint

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager), sezione `Web`. Nella colonna a sinistra clicca su `Microsoft`{.action} > `SharePoint`{.action} e seleziona il servizio SharePoint interessato.

#### **SharePoint standalone**

SharePoint è una piattaforma indipendente, quindi è necessario associare un dominio prima di configurare gli utenti.

##### ***Aggiungi un dominio***

Clicca sulla scheda `Domini` e poi su `Aggiungi un dominio`{.action}. Seleziona un dominio già presente nel tuo Spazio Cliente oppure digita un dominio esterno da te gestito. 

- Se scegli un dominio presente nel tuo Spazio Cliente, questo verrà convalidato automaticamente e non dovrai fare altro che configurare i tuoi utenti.
 
- Se scegli un dominio esterno, è necessario aggiungere un record CNAME nella zona DNS del dominio per convalidarlo sulla piattaforma SharePoint. Il record CNAME da inserire è accessibile cliccando sull’icona informazioni accanto alla voce “Convalida del dominio in corso”, come mostrato qui di seguito.


![sharepoint](images/order-manage-sharepoint-05.png){.thumbnail}

##### ***Configura un utente***

Dalla scheda `Utente`, clicca sui `...`{.action} a destra dell’account e poi su `Modifica l’account`{.action}

![sharepoint](images/order-manage-sharepoint-06.png){.thumbnail} 

Nella nuova finestra, inserisci le informazioni dell’utente e poi clicca su `Conferma`{.action}

Per ottenere i diritti di amministratore sulla piattaforma SharePoint, clicca di nuovo sui `...`{.action} a destra dell’account e poi clicca su `Attiva i diritti di amministratore`{.action}

#### **SharePoint associato**

Come indica il nome, questa piattaforma è associata al servizio Exchange che hai scelto al momento dell’ordine. Pertanto non è necessario associare un dominio. 

##### ***Configura un utente***

Clicca sulla scheda `Utenti` della tua piattaforma per visualizzare tutti gli account Exchange che possono usufruire di una licenza SharePoint.

![sharepoint](images/order-manage-sharepoint-07.png){.thumbnail} 

Una colonna `Account attivo`indica se l’account della piattaforma Exchange usufruisce di una licenza SharePoint. 

> [!primary]
>
> Per attivare una licenza su un account, clicca sui `...`{.action} a destra dell’account e poi su `Attiva SharePoint`{.action}.

Un account che usufruisce di una licenza non dispone, di default, dei diritti di amministratore. Per attivarli, clicca sui ` ...`{.action} a destra dell’account e poi su`Attiva i diritti di amministratore`{.action}.

![sharepoint](images/order-manage-sharepoint-08.png){.thumbnail} 

#### **Ripristina i diritti di amministratore**

Su entrambi i tipi di piattaforme SharePoint, troverai il pulsante `Ripristina i diritti di amministratore`{.action}nella scheda `Utente`. Questo pulsante consente di ripristinare i diritti di amministratore della piattaforma in caso di azioni errate dall’interfaccia SharePoint.

![sharepoint](images/order-manage-sharepoint-09.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.