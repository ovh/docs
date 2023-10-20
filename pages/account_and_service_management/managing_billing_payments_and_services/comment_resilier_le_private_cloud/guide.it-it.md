---
title: Disattivare una soluzione Private Cloud
excerpt: Come richiedere l’eliminazione di un’infrastruttura Private Cloud
updated: 2020-07-08
---

## Obiettivo

Se il servizio Private Cloud utilizzato non è più in grado di rispondere alle esigenze o è necessario sostituire la piattaforma esistente con una nuova, è possibile richiedere la disattivazione di questa infrastruttura dopo aver recuperato tutti i dati in essa contenuti.

**Questa guida ti mostra come richiedere l’eliminazione di una soluzione Private Cloud.** 

## Prerequisiti

- Essere connesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}, sezione `Hosted Private Cloud`{.action} > `Private Cloud`{.action}.
- Disporre di un servizio [Private Cloud](https://www.ovhcloud.com/it/enterprise/products/hosted-private-cloud/){.external} attivo

## Procedura

La soluzione Private Cloud non prevede un impegno contrattuale minimo ma, come indicato nelle [Condizioni Particolari dell’offerta](https://www.ovh.it/supporto/documenti_legali/condizioni_particolari_dell_offerta_dedicated_cloud_2014.pdf){.external}, tutti i mesi iniziati sono interamente dovuti con pagamento anticipato.

>[!warning]
>
> Prima di completare il processo di disattivazione, consigliamo di effettuare un backup di tutti i dati da conservare: l’operazione di cancellazione comporta infatti la completa rimozione del Private Cloud e dei dati ad esso associati.
>

### Step 1: richiedi la disattivazione del servizio dallo Spazio Cliente OVHcloud

Accedi allo [Spazio Cliente](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external} e, nella sezione `Hosted Private Cloud`{.action} (1), clicca su `Private Cloud`{.action} (2) e seleziona il servizio nella lista (3).

Nel riquadro “Gestisci il servizio” disponibile nella scheda “Informazioni generali”, clicca sul pulsante `...`{.action}  (4) in corrispondenza della data di rinnovo e seleziona l’opzione `Elimina il servizio`{.action} (5).

![Disattivazione dallo Spazio Cliente](images/resiliation1.png){.thumbnail}

Ricordiamo che, una volta confermata, l’operazione di eliminazione comporta la rimozione definitiva di tutti i dati presenti sull’infrastruttura. In caso di disattivazione prima della fine del mese non è inoltre previsto alcun rimborso.

Clicca su `Conferma`{.action} per completare l’operazione.

![Conferma disattivazione](images/resiliation2.png){.thumbnail}

Compare un messaggio di conferma di ricezione della richiesta. La procedura da seguire per completare la disattivazione verrà inviata via email all’indirizzo associato all’account OVHcloud.

![Conferma disattivazione](images/resiliation3.png){.thumbnail}

### Step 2: conferma la disattivazione

Una volta inoltrata la richiesta, un’email di conferma della disattivazione viene inviata all’indirizzo associato all’account OVHcloud. 

Il messaggio è disponibile anche nello Spazio Cliente: clicca sul nome utente in alto a destra e seleziona `Email di servizio`{.action}.

![Conferma disattivazione](images/resiliation4.png){.thumbnail}

L’oggetto dell’email dovrebbe essere:

> **Eliminazione del tuo Private Cloud “pcc-xxx-xxx-xxx-xxx”**.

L’email contiene un link con cui è possibile confermare la disattivazione del servizio.

> [!primary]
>
> Attenzione: il link è valido **72 ore**. Consigliamo quindi di inoltrare la domanda di eliminazione a partire dal 25 del mese.
>

L’operazione richiesta può essere confermata anche tramite la seguente API OVHcloud:

> [!api]
>
> @api {v1} /dedicatedCloud POST /dedicatedCloud/{serviceName}/confirmTermination
>

In questo caso è necessario inserire il token riportato nell’email di conferma della cancellazione.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
