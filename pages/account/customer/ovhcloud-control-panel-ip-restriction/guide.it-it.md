---
title: "Limitare l'accesso via IP al tuo Spazio Cliente OVHcloud"
slug: ovhcloud-control-panel-ip-restriction
excerpt: "Come proteggere un account OVHcloud limitando gli indirizzi IP autorizzati ad accedervi"
section: Sicurezza
order: 03
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 13/12/2022**
  
## Obiettivo

OVHcloud mette a tua disposizione opzioni per rafforzare la sicurezza del tuo Spazio Cliente OVHcloud e dei tuoi servizi.

In particolare, è possibile limitare l'accesso al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it).
L'attivazione di questa opzione, associata alla protezione del tuo account con una [doppia autenticazione](https://docs.ovh.com/it/customer/proteggi_il_tuo_account_con_2FA/), permette di proteggere in modo ottimale il tuo Spazio Cliente OVHcloud contro eventuali tentativi di intrusione.

**Questa guida ti mostra come proteggere il tuo account OVHcloud limitando gli indirizzi IP autorizzati ad accedervi**

> [!warning]
>
> La restrizione degli accessi tramite IP e/o la doppia autenticazione proteggono solo l'accesso allo Spazio Cliente OVHcloud dal quale è possibile ordinare, gestire, rinnovare o eliminare i servizi OVHcloud. Queste opzioni non proteggono i tuoi servizi in sé, per i quali è necessario adottare misure di sicurezza specifiche.
>

## Prerequisiti
  
- Avere accesso allo[Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it)
- Aver letto le [raccomandazioni sulla gestione della password di accesso al tuo account](https://docs.ovh.com/it/customer/gestire-la-password/)

## Procedura

### Step 1 - recuperare gli indirizzi IP pubblici autorizzati ad accedere al tuo Spazio Cliente OVHcloud

Esistono due tipi di indirizzi IP:

- **Gli indirizzi IP pubblici**: sono visibili su tutta la rete Internet. che vengono utilizzate, ad esempio, dal vostro punto di accesso/box Internet per avere un indirizzo su Internet per accedere all'intera rete.
- **Gli indirizzi IP privati**: invisibili e inutilizzabili sulla rete Internet, sono allocate in una rete locale. Per citare il nostro esempio, il tuo box Internet assegnerà un indirizzo IP privato a ogni dispositivo (computer, smartphone, tablet,...) collegato ad esso. Il tuo punto di accesso/box Internet permette così a questi dispositivi di utilizzare il suo IP pubblico per accedere a Internet. Questi indirizzi IP sono facilmente riconoscibili perché iniziano generalmente con 10.0.X.X, 172.16.X.X o 192.168.X.X (dove le X sono tra 0 e 255).

Per utilizzare l'opzione di restrizione IP dello Spazio Cliente OVHcloud è necessario inserire **solo** il tuo indirizzo IP pubblico.

Per recuperare l'indirizzo IP pubblico di un dispositivo che sarà autorizzato ad accedere al tuo Spazio Cliente OVHcloud, accedi al sito [mon-ip.com](https://mon-ip.com){.external} (non gestito da OVHcloud).

Annota l'indirizzo IP che appare e ripeti l'operazione per ogni dispositivo che sarà autorizzato ad accedere al tuo Spazio Cliente OVHcloud.

Se utilizzi una rete 4G/5G in aggiunta, ricordati di recuperare anche l'indirizzo IP di questa(e) rete(e).

> [!warning]
>
> La maggior parte dei provider Internet (ISP) assegna un indirizzo IP **dinamico** al tuo punto di accesso Internet/box. Questi indirizzi IP dinamici cambiano al riavvio del tuo box o ogni 24/48 ore. Tuttavia, alcuni provider possono assegnarti indirizzi IP **fissi** su richiesta.
>
> Per una connessione in 3G/4G/5G, gli indirizzi IP sono sistematicamente **dinamici**.
>
> **Prima** di impostare una restrizione IP sul tuo Spazio Cliente OVHcloud, verifica presso il tuo Provider che gli indirizzi IP recuperati in precedenza siano effettivamente IP **fissi**. In caso contrario, l'accesso allo Spazio Cliente OVHcloud potrebbe essere perso rapidamente dichiarando un IP dinamico.
>

### Step 2 - attiva una restrizione di accesso per IP

Accedi al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it). Clicca su `Nome e cognome` in alto a destra **e** sulla `iniziali` nella colonna blu che appare sulla destra.

![Access from Manager](images/ip1.png){.thumbnail}

Clicca sulla scheda `Sicurezza`{.action} per accedere alla pagina seguente:

![Access from Manager](images/ip2.png){.thumbnail}

Clicca su `Attivare`{.action} a destra di `Restrizione degli accessi per IP`.

#### Presentazione dell'interfaccia

![Access from Manager](images/ip3.png){.thumbnail}

Per l'implementazione delle restrizioni IP sono presenti due sezioni:

- **Regola predefinita**. Questo campo permette di:
    - rifiutare l'accesso a tutti gli indirizzi IP tranne quelli precedentemente dichiarati come **autorizzati** nella seconda sezione *IP configurati*. 
    - autorizzare l'accesso a tutti gli indirizzi IP tranne quelli già dichiarati come **rifiutati** nella seconda sezione *IP configurati*.
    > Seleziona la casella `Alert`{.action} per ricevere una notifica via email al tuo indirizzo email di contatto, nel caso in cui sia stato effettuato un tentativo di connessione non autorizzato per accedere al tuo Spazio Cliente.

- **IP configurati**. Questo campo permette di dichiarare gli indirizzi IP soggetti a restrizione o autorizzazione di accesso. e permette di visualizzare le regole predefinite.

> [!alert]
>
> Attenzione prima di proseguire.
>
> Nella sezione `Regola predefinita`{.action}, conferma **mai** la regola di default in `Rifiutato`{.action} **senza aver autorizzato***correttamente e preventivamente almeno uno dei tuoi indirizzi IP pubblici nella sezione `IP configurati`. 
>
> In caso contrario, bloccherai **assolutamente tutti gli IP pubblici (inclusi i tuoi)** senza alcuna eccezione. Nessuno avrà più accesso al tuo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e dovrai effettuare una procedura amministrativa per sbloccare la tua situazione.
>
> Prestare la massima attenzione su questo punto.
>

#### Rifiuta tutti gli indirizzi IP ad eccezione degli indirizzi legittimi

Per autorizzare l'accesso allo Spazio Cliente OVHcloud esclusivamente a uno o più indirizzi IP legittimi, clicca su `Aggiungere una restrizione`{.action}.

> Nelle successive catture, l'IP **192.0.2.0** sarà sostituito da un IP che ti riguarda.
> 

![Add allow rule](images/ip4.png){.thumbnail}

Nella nuova finestra inserisci l'indirizzo IP pubblico che vuoi autorizzare nel modulo `IP`{.action}. Seleziona la casella `Alert`{.action} per ricevere una notifica via email dei tentativi di connessione tramite questo indirizzo IP e infine lasciala `Regola`{.action} sullo stato `Autorizzato`{.action}.

Clicca su `Continua`{.action} e verifica l'indirizzo IP e la regola prima di cliccare su `Conferma`{.action}.

![Add allow rule](images/ip5.png){.thumbnail}

Nella sezione `IP configuratI` dovrà essere visibile la regola:

![Add allow rule](images/ip6.png){.thumbnail}

> [!primary]
>
> **Prima** di proseguire con le azioni descritte in questo step, ripeti l'operazione per tutti gli altri indirizzi IP che vuoi autorizzare ad accedere al tuo Spazio Cliente OVHcloud.
>

Una volta **l'insieme** dei tuoi indirizzi IP pubblici inseriti nella sezione `IP configurati`, passa alla sezione `Regola predefinita` la regola in stato `Rifiutato`{.action}. Seleziona la casella `Alert`{.action} per ricevere una notifica via email dei tentativi di connessione e clicca su `Conferma`{.action}.

![Add allow rule](images/ip7.png){.thumbnail}

> Da questo momento, **solo** gli indirizzi IP pubblici autorizzati precedentemente nella sezione `IP configurati` possono accedere al tuo Spazio Cliente OVHcloud.

#### Autorizza tutti gli indirizzi IP ad eccezione di alcuni indirizzi

L'opzione di restrizione di accesso per IP permette inoltre di autorizzare tutti gli indirizzi IP ad accedere al tuo Spazio Cliente OVHcloud, ad eccezione di alcune delle quali avrai precedentemente identificato come illegittime.

Per bloccare l'accesso al tuo Spazio Cliente OVHcloud a uno o più indirizzi IP, clicca sulla sezione `IP configurati` e seleziona `Aggiunere una restrizione`{.action}.

![Add deny rule](images/ip9.png){.thumbnail}

Nella nuova finestra inserisci l'indirizzo IP pubblico che vuoi bloccare in `IP`{.action}. Seleziona la casella `Alert`{.action} per ricevere una notifica via email dei tentativi di connessione tramite questo indirizzo IP e passa la `Regola`{.action} sullo stato `Rifiutato`{.action}.

Clicca su `Avanti`{.action}, verifica l'indirizzo IP e la regola prima di cliccare su `Conferma`{.action}.

![Add deny rule](images/ip10.png){.thumbnail}

Nella sezione `IP configurati` dovrà essere visibile la regola:

![Add deny rule](images/ip11.png){.thumbnail}

> [!primary]
>
> **Prima** di continuare con le azioni descritte in questo step, ripeti l'operazione per tutti gli altri indirizzi IP di cui vuoi bloccare l'accesso al tuo Spazio Cliente OVHcloud.
>

Una volta inseriti tutti gli indirizzi IP pubblici nella sezione `IP configurati`, nella sezione `Regola predefinita` segui la regola in stato `Autorizzato`{.action}. Seleziona la casella `Alert`{.action} per la notifica dei tentativi di connessione e clicca su `Conferma`{.action}.

![Add deny rule](images/ip12.png){.thumbnail}

> Da questo momento, **tutte*** gli indirizzi IP pubblici possono accedere al tuo Spazio Cliente OVHcloud, **ad eccezione di** quelli dichiarati nella sezione `IP configurati`.

## Per saperne di più

[Configura la doppia autenticazione sul tuo Spazio Cliente OVHcloud](https://docs.ovh.com/it/customer/proteggi_il_tuo_account_con_2FA/)

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](https://partner.ovhcloud.com/it/).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](https://www.ovhcloud.com/it/support-levels/).

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com>.