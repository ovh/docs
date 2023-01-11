---
title: Creare e configurare un gruppo di sicurezza su Horizon
excerpt: Come creare un gruppo di sicurezza e configurarlo su un'istanza Public Cloud
slug: configure-security-group-horizon
legacy_guide_number: g1925
section: Gestione da Horizon
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Modifica" di questa pagina.
>

**Ultimo aggiornamento: 24/08/2021**

## Obiettivo

Per motivi di sicurezza, è possibile configurare e utilizzare regole di filtraggio che definiranno gli accessi alle tue istanze. È possibile autorizzare o bloccare alcune connessioni in entrata o in uscita tramite gruppi di sicurezza. Queste regole possono essere applicate al traffico proveniente da alcuni indirizzi IP o anche alle istanze configurate su gruppi di sicurezza in particolare.

**Questa guida ti mostra come creare un gruppo di sicurezza e configurarlo su un'istanza Public Cloud.**

## Prerequisiti

- Un [progetto Public Cloud](https://www.ovhcloud.com/it/public-cloud/).
- [Essere connesso all'interfaccia Horizon](https://docs.ovh.com/it/public-cloud/creation-and-deletion-of-openstack-user/)

## Procedura

### Step 1: creare un gruppo di sicurezza

Accedi all'interfaccia [Horizon](https://docs.ovh.com/it/public-cloud/creation-and-deletion-of-openstack-user/). Scegli la Region in cui vuoi creare un gruppo di sicurezza, cliccando sul pulsante in alto a sinistra.

![definire la regione](images/security-group0.png){.thumbnail}

> [!primary]
>
> Se un gruppo di sicurezza deve essere utilizzato in più localizzazioni, è necessario crearlo per ciascuna di esse.
>

A questo punto, apri il menu `Network`{.action} e clicca su `Security Groups`{.action}. Una tabella elenca i gruppi di sicurezza creati. Il gruppo "default" vi è già stato inserito. che permette di passare tutto il traffico in entrata e in uscita.

Per aggiungere un nuovo gruppo di sicurezza, clicca sul pulsante `+ Create Security Group`{.action}.

![accedere ai gruppi di sicurezza](images/security-group1.png){.thumbnail}

Nella nuova pagina, assegna un nome e una descrizione al gruppo che stai per creare. Clicca sul pulsante `Create Security Group`{.action}.

![creare un gruppo di sicurezza](images/security-group2.png){.thumbnail}

Di ritorno alla scheda `Security Groups`{.action}, la tabella mostra il gruppo appena creato. Le regole sono configurate di default Queste ultime lasciano passare solo il traffico in uscita. Prosegui seguendo lo step successivo per modificarle.

Se le regole sono corrette, prosegui nella lettura di questa guida allo Step 3 "[Configura un gruppo di sicurezza sull'istanza](#instance-security-group)".

### Step 2: configurare le regole di un gruppo di sicurezza

Per modificare le regole di default o in caso di necessità, clicca sul pulsante `Manage Rules`{.action}.

![gestire le regole](images/security-group3.png){.thumbnail}

Se hai lasciato le regole di default sul tuo gruppo di sicurezza, queste passano solo al traffico in uscita.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

ssh: connect to host 149.xxx.xxx.177 port 22: Connection timed out
```

A questo punto, sulla pagina di gestione delle regole, hai la possibilità di:

- eliminare una regola esistente: utilizzando il pulsante `Delete Rule`{.action};
- aggiungi una nuova regola: utilizzando il pulsante `+ Add Rule`{.action}.

Quando aggiungi una regola, completa le informazioni richieste e clicca su `Add`{.action}.

Nel nostro esempio, autorizzeremo la connessione SSH all'istanza.

![aggiungi una regola](images/security-group4.png){.thumbnail}

Una volta aggiunta la nuova regola, attendi qualche minuto per la sua elaborazione.

```bash
root@serveur:~$ ssh admin@149.xxx.xxx.177

Last login: Tue Oct 13 13:56:30 2015 from proxy-109-190-254-35.ovh.net
admin@serveur1:~$
```

### Configura un gruppo di sicurezza su un'istanza <a name="instance-security-group"></a>

Dall'interfaccia Horizon, apri il menu `Compute`{.action} e seleziona `Istanze`{.action}. Da questa pagina crei una nuova istanza tramite il pulsante `Launch Instance`{.action}.

Durante la creazione dell'istanza, è possibile scegliere il nuovo gruppo di sicurezza creato nello step precedente tramite il menu `Security Groups`{.action}.

![assegnare il gruppo di sicurezza](images/security-group5.png){.thumbnail}

Per applicare un nuovo gruppo di sicurezza su un'istanza già creata, clicca su `Edit Security Groups`{.action} a destra dell'istanza.

![modifica il gruppo di sicurezza](images/security-group6.png){.thumbnail}

### Elimina un gruppo di sicurezza

Per eliminare un gruppo di sicurezza, selezionalo selezionando la casella corrispondente a sinistra e clicca su `Delete Security Groups`{.action}.

![eliminare il gruppo di sicurezza](images/security-group7.png){.thumbnail}

## Per saperne di più

Contatta la nostra Community di utenti all’indirizzo <https://community.ovh.com/en/>.
