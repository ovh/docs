---
title: Lista di destinatari SMS
slug: lista_di_destinatari_sms
excerpt: Creare una lista di destinatari SMS
section: Gestisci la tua offerta
---

**Ultimo aggiornamento: 19/05/2020**

## Obiettivo

Tutti gli account SMS OVHcloud possono utilizzare una o più liste di destinatari. Questa guida ti mostra la procedura da seguire per creare una lista di destinatari.

## Prerequisiti
- Disporre di un account SMS OVHcloud attivo
- Disporre di un programma di fogli di calcolo o un editor di testo

## Procedura

### Step 1: crea una lista di destinatari 

#### Procedura per fogli di calcolo

È possibile creare una lista di destinatari tramite un foglio di calcolo oppure riutilizzare una lista già esistente. La lista deve essere in formato .csv e avere il seguente layout:

![recipients](images/img_4831.jpg){.thumbnail}

Se apri il file .csv con un blocco note dovrebbe apparire così:

![recipients](images/sms-recipientlist-1.png){.thumbnail}

Per essere riconosciuta dallo Spazio Cliente OVHcloud, la lista di destinatari deve soddisfare i seguenti requisiti: 

- Tutti i contatti dovranno essere sullo stesso foglio di calcolo in una colonna “number”.
- È necessario eliminare i caratteri speciali, come gli accenti, poiché non saranno accettati durante l’importazione del file .csv nello Spazio Cliente.
- I numeri devono rispettare il formato internazionale. Ad esempio, un numero italiano avrà questo formato: +39212345678.
- Salva il file nel formato .csv (separatore: punto e virgola).

Per impedire che il foglio di calcolo effettui qualsiasi operazione automatica con i numeri, configura il formato delle cellule che contengono i numeri nel campo “Personalizzato” e inserisci manualmente: >0]+0;Standard.

![recipients](images/sms-recipientlist-2.png){.thumbnail}


#### Procedura per editor di testo

Un metodo alternativo consiste nel creare semplicemente un file .txt da un editor di testo o un blocco note.

- Digita “number” nella prima riga.
- Inserisci un numero nel formato internazionale (+39212345678) in ogni riga.

Il risultato ottenuto dovrebbe essere di questo tipo:

![recipients](images/sms-recipientlist-1.png){.thumbnail}


### Step 2: accedi all'interfaccia

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e seleziona `Telecom`. Quindi seleziona `SMS`{.action} nel menu a sinistra.

Infine clicca sull’account SMS in questione.

![recipients](images/sms-recipientlist-3.png){.thumbnail}


### Step 3: importa una lista di destinatari

Seleziona la scheda `Contatti`{.action}.

![recipients](images/sms-recipientlist-4.png){.thumbnail}

Hai la possibilità di creare fino a 9 liste di contatti tramite file di testo.

Per farlo, è necessario cliccare su `Azioni`{.action}, quindi su `Aggiungi`{.action}.

![recipients](images/sms-recipientlist-5.png){.thumbnail}

Attribuisci un nome alla lista di destinatari e importa il file locale nello Spazio Cliente.

![recipients](images/sms-recipientlist-6.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>
