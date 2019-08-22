---
title: 'Creare un DNS secondario su un server dedicato'
slug: creare-dns-secondario-server-dedicato
excerpt: 'Come configurare un DNS secondario sul tuo server dedicato OVH'
section: 'Utilizzo avanzato'
---

**Ultimo aggiornamento: 17/05/2019**

## Obiettivo

Per utilizzare un [server dedicato](https://www.ovh.it/server_dedicati/){.external} come DNS principale per il tuo dominio, è necessario aggiungerlo sulla macchina come DNS secondario.

**Questa guida ti mostra come creare e configurare un DNS secondario sul tuo server dedicato OVH.**


## Prerequisiti

* Disporre di un [server dedicato](https://www.ovh.it/server_dedicati/){.external} Windows
* Aver registrato un [dominio](https://www.ovh.it/domini/){.external} e poterlo gestire dallo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}
* Avere accesso allo [Spazio Cliente OVH](https://www.ovh.com/auth/?action=gotomanager){.external}


## Procedura

### Ottieni un codice di verifica per il dominio

Clicca sulla sezione `Dedicato`{.action} in alto e poi su `Server Dedicati`{.action} nel menu a sinistra per visualizzare l’elenco dei server associati al tuo account: 

![DNS secondario](images/dns2-01.png){.thumbnail}

Seleziona il server, clicca sulla scheda `DNS secondario`{.action} e poi su `Aggiungi un dominio`{.action}:

![DNS secondario](images/dns2-02.png){.thumbnail}

Inserisci il tuo dominio nel campo `Dominio` e clicca su `Seguente`{.action}:

![DNS secondario](images/dns2-03.png){.thumbnail}

Comparirà un messaggio che conferma il record di tipo TXT per il tuo dominio.  Annota il sottodominio e la destinazione indicati nelle istruzioni e clicca su `Annulla`{.action}:

![DNS secondario](images/dns2-04a.png){.thumbnail}


### Procedi alla verifica del dominio

Accedi allo `Spazio Cliente OVH`{.action}, clicca sulla sezione `Web`{.action} e poi su `Domini`{.action} nel menu a sinistra per visualizzare l’elenco dei domini che gestisci:

![Verifica del dominio](images/domain-verification-01.png){.thumbnail}

Seleziona il dominio e clicca su `Aggiungi un record`{.action}: 

![Verifica del dominio](images/domain-verification-02.png){.thumbnail}

Seleziona il tipo di record `TXT`{.action} e clicca su `Seguente`{.action} per continuare:

![Verifica del dominio](images/domain-verification-03.png){.thumbnail}

Completa i campi `Sottodominio` e `Valore` con le informazioni annotate in precedenza. A questo punto, clicca su `Seguente`{.action}:

![Verifica del dominio](images/domain-verification-04.png){.thumbnail}

Per completare l’operazione, clicca su `Conferma`{.action}:

![Verifica del dominio](images/domain-verification-05.png){.thumbnail}

> [!primary]
>
> La propagazione delle modifiche potrebbe richiedere da 4 a 24 ore. Una volta completata, il record sarà disponibile globalmente.
>

### Aggiungi il DNS secondario al server

Ripeti le azioni effettuate nello step 1: ritorna alla sezione `Dedicato`{.action} in alto e clicca su `Server Dedicati`{.action} nel menu a sinistra.  Seleziona il server, clicca sulla scheda `DNS secondario`{.action} e poi su `Aggiungi un dominio`{.action}.

![DNS secondario](images/dns2-02.png){.thumbnail}

Inserisci il tuo dominio nel campo `Dominio` e clicca su `Seguente`{.action} :

![DNS secondario](images/dns2-03.png){.thumbnail}

Dato che il record TXT del dominio è già stato creato, per continuare è sufficiente cliccare su `Seguente`{.action}:

![DNS secondario](images/dns2-04b.png){.thumbnail}

Clicca su`Aggiungi`{.action} per confermare il record.

![DNS secondario](images/dns2-05.png){.thumbnail}


## Per saperne di più

[Modificare una zona DNS OVH](https://docs.ovh.com/it/domains/web_hosting_modifica_la_tua_zona_dns/){.external}

Contatta la nostra Community di utenti all’indirizzo <https://www.ovh.it/community/>.