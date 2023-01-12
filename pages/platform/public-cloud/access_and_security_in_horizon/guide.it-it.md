---
title: Parametri di accesso e sicurezza in Horizon
excerpt: Come gestire e rendere sicuro l'accesso alle tue istanze
slug: access_and_security_in_horizon
legacy_guide_number: g1774
section: Gestione da Horizon
order: 4
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 26/05/2021**

## Obiettivo

OpenStack Horizon offre opzioni per configurare l'accesso alle tue istanze e ad altri servizi.<br>
Ad esempio, è possibile configurare gruppi di sicurezza per filtrare le connessioni in entrata e in uscita o scaricare il file OpenRC contenente le credenziali per utilizzare le API OpenStack.

**Come gestire e rendere sicuro l'accesso alle tue istanze**

## Prerequisiti

- [Accedere all’interfaccia Horizon](../horizon/)

## Procedura

Accedi all'[interfaccia Horizon](https://horizon.cloud.ovh.net/auth/login/).

I parametri di accesso e di sicurezza sono composti dalle sezioni seguenti, accessibili tramite il menu di sinistra:

- **API Access** (sotto `Project`{.action})

La tabella di accesso all'API contiene gli endpoint delle API OpenStack.

![orizzonte - accesso API](images/api_access.png){.thumbnail}

Per verificare i valori di accesso da utilizzare con le API, clicca su `View Credentials`{.action}.

Clicca sul pulsante `Download OpenStack RC File`{.action} per aprire un menu a tendina in cui puoi scegliere il file RC appropriato da scaricare.

- **Key Pairs** (sotto `Project`{.action} e poi `Compute`{.action})

Questa sezione ti permette di archiviare e gestire le coppie di chiavi SSH. Per creare e aggiungere una chiave pubblica e una chiave privata, clicca sul pulsante `Create Key Pair`{.action}.

![orizzonte - chiavi SSH](images/key_pairs.png){.thumbnail}

Per aggiungere una chiave preesistente, clicca su `Import Public Key`{.action}. Nella nuova finestra, inserisci una chiave o seleziona un file di chiave.

Questa sezione di interfaccia contiene le istruzioni di base. Per maggiori informazioni sulle chiavi SSH, consulta [questa guida](../creare-chiave-ssh/).

- **Security Groups** (sotto `Project`{.action} e poi `Network`{.action})

I gruppi di sicurezza sono insiemi di regole di filtraggio applicati alle interfacce di rete. Puoi utilizzarli per limitare l'accesso alle istanze ad indirizzi IP e porte.

![orizzonte - gruppi di sicurezza](images/security_groups.png){.thumbnail}

Per aggiungere un gruppo di sicurezza, clicca su `Create Security Group`{.action} e poi applicagli regole personalizzate o predefinite tramite il pulsante `Manage Rules`{.action} nella tabella.

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
