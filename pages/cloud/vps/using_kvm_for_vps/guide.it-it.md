---
title: Utilizzare KVM sui VPS 
excerpt: Come accedere a un VPS tramite KVM
slug: utilizza_il_kvm_sul_tuo_vps
section: Per iniziare
---

**Ultimo aggiornamento: 30/01/2018**

## Obiettivo

La console KVM consente di stabilire una connessione diretta al tuo VPS senza utilizzare client esterni come Terminal o Putty. La console è disponibile nello Spazio Cliente OVH o tramite API.  

**Questa guida ti mostra come utilizzare entrambe le soluzioni.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}

## Procedura

### Connettiti al KVM tramite lo Spazio Cliente OVH

Accedi alla sezione “Dedicato” dello Spazio Cliente OVH e seleziona il tuo VPS nel menu a sinistra. Clicca sul pulsante `KVM`{.action}:

![Selezionare il pulsante KVM](images/activating_kvm_manager.png){.thumbnail}

 
Si apre una nuova finestra che avvierà la connessione al tuo VPS. Questa operazione potrebbe richiedere alcuni secondi. Per accedere, è sufficiente inserire le tue credenziali:

![Connessione al KVM](images/kvm_screen.png){.thumbnail}

> [!primary]
>
> La mappatura della tastiera potrebbe essere diversa da quella che utilizzi abitualmente. Verifica le impostazioni per accertare il tipo di tastiera attivo (ad esempio, QWERTY o AZERTY).
>

### Connettiti al KVM via API

Nel caso in cui vengano riscontrati problemi nella connessione al KVM dallo Spazio Cliente, è possibile utilizzare l’API OVH.  Accedi alla pagina delle [API OVH](https://api.ovh.com/){.external}.

#### Sui VPS 2014

In caso di errore 1006 su un VPS 2014, utilizza questa API: 

> [!api]
>
> @api {POST} /vps/{serviceName}/openConsoleAccess
>

L’operazione di connessione potrebbe richiedere uno o due minuti, il tempo necessario affinché la porta sia effettivamente aperta.

#### Sui VPS 2016

Con i VPS 2016, l'API consigliata per accedere al KVM è la seguente:

> [!api]
>
> @api {POST} /vps /{serviceName}/getConsoleUrl
>

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.


