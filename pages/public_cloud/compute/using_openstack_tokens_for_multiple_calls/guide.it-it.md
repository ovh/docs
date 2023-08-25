---
title: "Utilizzo dei token OpenStack"
excerpt: Come creare e utilizzare token OpenStack per le tue azioni
updated: 2023-05-05
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>


## Obiettivo

**Questa guida ti mostra come eseguire in breve tempo un'ampia gamma di operazioni OpenStack.**

> [!primary]
>
> Gli step descritti in questa guida si basano sulla versione 3.0 dell'API Keystone.
>

### Definizioni

- **Punto terminale (*Endpoint*)**: indirizzo Web che punta direttamente verso l'API di un servizio. Ad esempio, [https://auth.cloud.ovh.net/v3/](https://auth.cloud.ovh.net/v3/) per il punto di accesso all'autenticazione o [https://image.compute.gra11.cloud.ovh.net/](https://image.compute.gra11.cloud.ovh.net/) per il punto di accesso alla gestione delle immagini della zona GRA11. 

- **Jeton (*token*)**: una stringa di caratteri unica utilizzata per autenticarsi e accedere alle risorse. L'utente lo richiede inserendo le sue credenziali di accesso (dettagli di connessione) nell'API di autenticazione. Il token è stato generato ed è valido per 24 ore.

- **OpenRC**: OpenStack supporta script semplici nel tuo ambiente cliente, conosciuti anche come file OpenRC. Si tratta di file che contengono opzioni comuni a tutti i clienti, ma che supportano anche opzioni uniche.

### Problematica

La maggior parte delle richieste inviate all'API OpenStack devono seguire una procedura di autorizzazione che richiede la generazione di un token e la sua conferma.

Se effettui troppe azioni in poco tempo, alcune azioni OpenStack cadranno in errore a causa di un numero troppo elevato di chiamate all'API. Il limite attuale è di 60 creazioni di gettoni al minuto per utente. L'API di autenticazione restituirà errori HTTP 429 oltre questo limite.

Per maggiori informazioni, consulta [la documentazione ufficiale OpenStack API](http://developer.openstack.org/api-guide/quick-start/).

Questa guida ti mostra come emettere un token OpenStack, utilizzarlo per eseguire le operazioni e come rimuovere un token.

## Prerequisiti 

- Avere accesso allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it){.external}.
- Questa guida richiede l'installazione del tool OpenStack CLI sulla tua macchina.

> [!primary]
>
> Per maggiori informazioni su questo tool, consulta la [documentazione OpenStack CLI](https://docs.openstack.org/python-openstackclient/latest/).

Puoi ottenerlo dal gestore di pacchetti apt (per le distribuzioni basate su Debian) o da yum (per le distribuzioni basate su RHEL/CentOS):

```bash
# Distribuzioni Debian 

sudo apt install python3-openstackclient

# Distribuzioni CentOS/RHEL

sudo yum install python3-openstackclient
```

- Per gli utenti di Windows, consulta questa guida per esportare le tue variabili d'ambiente: [Impostare le variabili d'ambiente OpenStack](/pages/public_cloud/compute/loading_openstack_environment_variables/).

## Procedura

### Step 1: scarica e verifica il file OpenRC

Accedi allo [Spazio Cliente OVHcloud](https://www.ovh.com/auth/?action=gotomanager&from=https://www.ovh.it/&ovhSubsidiary=it) e apri il tuo progetto `Public Cloud`{.action}.

Clicca su `Users & Roles`{.action} nella sezione `Project Management` e poi sul pulsante `...`{.action} a destra del tuo utente OpenStack.<br>
Scarica il file OpenRC di questo utente e specifica la Region in cui vuoi effettuare le azioni.

![scarica il file openRC](images/openrc.png){.thumbnail}

Una volta scaricato, modifica il file OpenRC e aggiungi questa riga:

```bash
OS_PASSWORD=<your_password>
```

Adatta questa riga con la password associata all'utente OpenStack durante la creazione dell'utente.

A questo punto, esegui il download del file caricato precedentemente:

```bash
source openrc.sh
```

### Step 2: emissione di un token OpenStack

> [!primary]
>
> Il token OpenStack è valido per 24 ore dopo la sua emissione. Per una maggiore affidabilità, emette un token ogni 8 ore (ad esempio) per evitare di effettuare azioni con token scaduto.
>
> Se pensi ad azioni lunghe come Snapshot, *shelving* di istanze, creazione di immagini, ecc., preferisci la creazione di un nuovo token piuttosto che eseguire direttamente l'azione desiderata.
>

Una volta sorpassato il file OpenRC, esegui il comando seguente per emettere un token:

```bash
openstack token issue
```

Il risultato dovrebbe essere simile a quello riportato di seguito:

```bash
+------------+----------------------------------------------------------------+
| Field      | Value                                                          |
+------------+----------------------------------------------------------------+
| expires    | 2023-04-06T08:33:15+0000                                       |
| id         | gAAAAA[...]                                                    |
| project_id | 8a7[...]                                                       |
| user_id    | f99[...]                                                       |
+------------+----------------------------------------------------------------+
```

Ora puoi esportare l'ID del token emesso in precedenza:

```bash
export OS_TOKEN = gAAAAA[...]
```

Puoi anche esportare direttamente il tuo token con questo comando:

```bash
export OS_TOKEN=$(openstack token issue -f value -c id)
```

### Step 3: eliminare la variabile inutile

Per utilizzare il token per effettuare operazioni con l'utente, è necessario rimuovere la variabile `OS_USER_DOMAIN_NAME`.

Per eseguire questa operazione, esegui il comando:

```bash
unset OS_USER_DOMAIN_NAME
```

### Step 4: utilizzare il token per eseguire ordini

Una volta effettuato il token, è possibile utilizzare le chiamate classiche di OpenStack per gestire la propria infrastruttura.

```bash
openstack --os-auth-type token <command>
```

Esempio: 

```bash
openstack --os-auth-type token image list
```

### Step 5: rimuovi il token OpenStack

Una volta effettuate tutte le operazioni, è possibile rimuovere il token OpenStack per evitare che venga utilizzato per altre azioni.

Per effettuare questa operazione, utilizza il comando:

```bash
openstack --os-auth-type token token revoke <token_id>

# ou 

openstack --os-auth-type token token revoke $OS_TOKEN
```

## Per saperne di più

Unisciti alla nostra Community di utenti <https://community.ovh.com/en/>.