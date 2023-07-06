---
title: Come utilizzare le politiche IAM dallo Spazio Cliente
excerpt: Come assegnare diritti di accesso specifici agli utenti da un account OVHcloud
updated: 2023-07-06
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

> [!warning]
>
> Questa funzionalità è attualmente in versione beta. Per maggiori informazioni, clicca su <https://labs.ovhcloud.com/en/>.
>

## Obiettivo

Questa guida ti mostra come assegnare diritti di accesso specifici agli utenti di un account OVHcloud.

La gestione degli accessi OVHcloud si basa su un sistema di gestione delle politiche. È possibile scrivere diverse politiche che danno accesso agli utenti a funzionalità specifiche sui prodotti associati a un account OVHcloud.

In dettaglio, una politica contiene:

- Una o più **identità** oggetto di tale politica. 
    - Può trattarsi di identificativi di account, utenti o gruppi di utenti (come quelli utilizzati in [Federation](/pagine/account/customer/ovhcloud-account-connect-saml-adfs) - sono disponibili altre guide SSO). 
- Una o più **risorse** interessate da tale politica. 
    - Una risorsa è un prodotto OVHcloud che sarà interessato da questa politica (un dominio, un server Nutanix, un Load Balancer, ecc...).
- Una o più **azioni** autorizzate o escluse da tale politica.
    - Le azioni sono i diritti specifici coinvolti in questa politica (riavvio di un server, creazione di un account email, rescissione di un abbonamento, ecc...)
 
Ad esempio, possiamo creare una politica per dare ad un utente di nome John, per un VPS, l'accesso all'azione "riavviare".

**Questa guida ti mostra come definire queste politiche tramite lo Spazio Cliente OVHcloud e come elencare le identità, le risorse e le azioni disponibili.**

![politiche IAM](images/iam_policies.png){.thumbnail}

## Prerequisiti

- Disporre di un [account OVHcloud](/pagine/account/customer/ovhcloud-account-creazione)
- Sapere [gestire gli utenti dell'account](/pagine/account/customer/ovhcloud-users-management)
- Uno o più prodotti OVHcloud associati a questo account OVHcloud (Load Balancer, dominio, VPS, ecc...)

## Procedura

### Accedi al menu IAM

Clicca sul nome del tuo account in alto a destra e poi di nuovo sul nome nella barra laterale.

![Accesso al menu IAM](images/access_to_the_IAM_menu_01.png){.thumbnail}

Accedi al menu IAM tramite l'accesso dedicato nel tuo Spazio Cliente.

![Accesso al menu IAM](images/access_to_the_IAM_menu_02.png){.thumbnail}

Visualizzi una lista di tutte le politiche in corso create sul tuo account.

![Accesso al menu IAM](images/access_to_the_IAM_menu_03.png){.thumbnail}

Ogni politica è visualizzata con il suo nome, il numero di identità ad essa associate e il numero di azioni che contiene.

> [!primary]
>
> Cliccare sul pulsante "Modalità avanzata" permette di visualizzare l'elenco di tutte le politiche OVHcloud. Queste politiche vengono create automaticamente da OVHcloud per convertire la delega preesistente delle `NIC Tech` (contatto tecnico) e `NIC Admin` (contatto amministratore) sulla nuova funzionalità IAM. 
>
> I clienti non sono autorizzati a modificare o eliminare queste politiche.

### Gestione delle politiche

#### Crea una politica

Clicca su `Crea una politica`{.action}.

Compare il seguente form:

![Crea una politica](images/create_a_policy_01.png){.thumbnail}

- **Nome della politica** (obbligatorio): è il nome che comparirà nelle interfacce. Il nome deve essere unico e non deve contenere spazi.
- **Tipi di prodotti**: seleziona i tipi di prodotto per definire il campo di applicazione della politica. Uno o più tipi di prodotto possono essere inclusi nella stessa politica.
- **Risorse**: aggiungete risorse o gruppi di risorse che saranno coperti dalla politica. Le risorse disponibili sono filtrate per tipo di prodotto selezionato in precedenza.
- **Azioni**

Esistono 3 modi per aggiungere azioni:

- Attivando l'opzione `Autorizza tutte le azioni`{.action}

![Crea una politica](images/create_a_policy_02.png){.thumbnail}

Al momento dell'attivazione di questa opzione, autorizzi tutte le azioni relative ai prodotti selezionati. Ciò comprende tutte le azioni esistenti e le azioni aggiunte in futuro per queste categorie di prodotti.

- Aggiungendo manualmente azioni

Se conosci il nome dell'azione, puoi aggiungerla manualmente.

![Crea una politica](images/create_a_policy_03.png){.thumbnail}

Si può utilizzare una *wildcard* all'inizio o alla fine dell'azione con `*`.

Ad esempio, l'aggiunta di `vps:apiovh:ips/*` conferirà i seguenti diritti:

vps:apiovh:ips/edit <br>
vps:apiovh:ips/delete <br>
vps:apiovh:ips/get <br>

- Selezionando azioni nell'elenco

Le azioni possono essere selezionate nell'elenco.

![Crea una politica](images/create_a_policy_04.png){.thumbnail}

Le azioni disponibili dipendono dal tipo di risorsa e appartengono ad una delle cinque categorie seguenti:

- **Read**: registra i prodotti e visualizza le informazioni che li riguardano (*es: listare un IP VPS*).
- **Create**: azione che permette di creare qualcosa su un prodotto (*es: creare un ticket supporto*).
- **Delete**: azione che permette di eliminare qualcosa su un prodotto (*es: eliminare un'istanza Public Cloud*)
- **Edit**: azione per modificare un elemento esistente su un prodotto (*es: modificare la rotta TCP di un Load Balancer*).
- **Operate**: applicare modifiche all'infrastruttura connessa al prodotto (*es.: riavviare un server dedicato*).

Per aiutarti a identificare un'azione specifica nella lista, è disponibile un campo di ricerca.

#### Modifica una politica

Per modificare una politica esistente, clicca sul pulsante `...`{.action} a destra della politica e poi su `Modifica la politica`{.action}.

![Modifica una politica](images/editing_a_policy.png){.thumbnail}

In seguito, è possibile modificare la portata della politica.

#### Elimina una politica

Per eliminare una politica esistente, clicca sul pulsante `...`{.action} a destra della politica e poi su `Elimina la politica`{.action}.

Una finestra contestuale ti chiederà di confermare l'eliminazione.

### Associa un'identità a una politica

Per collegare un'identità a una politica, clicca sul pulsante `...`{.action} a destra della politica e poi su `Gestisci le identità associate`{.action}.

![Modifica una politica](images/editing_a_policy.png){.thumbnail}

In questo modo potrai aggiungere ed eliminare gli utenti o i gruppi a cui applicare la politica.

![Associa un'identità](images/link_identity_to_policy.png){.thumbnail}

### Gestione delle identità

Le identità disponibili per le policy sono gestite tramite la scheda `Gestione degli utenti`{.action}, nel menu `Il mio account`{.action}.

`Identità`{.action} del menu IAM ti reindirizza verso questo menu.

Visualizza i dettagli della gestione degli utenti nella [documentazione dedicata](/pagine/account/customer/ovhcloud-users-management).

### Gestione dei gruppi di risorse

Le politiche possono concentrarsi su gruppi di risorse (invece di indirizzare risorse direttamente). Questi gruppi di risorse possono assemblare risorse provenienti da diversi prodotti, ad esempio per configurare un ambiente di test.

#### Crea un gruppo di risorse

Per creare un gruppo di risorse, accedi alla scheda dedicata del menu IAM:

![Resource Group](images/resource_groups.png){.thumbnail}

Clicca su `Crea il gruppo di risorse`{.action}.

![Resource Group](images/resource_groups_form.png){.thumbnail}

- **Nome del gruppo di risorse**: è il nome che comparirà nelle interfacce. Il nome deve essere unico e non deve contenere spazi.
- **Tipi di prodotti**: elenco dei tipi di prodotti interessati da questo gruppo di risorse.
- **Risorse**: elenco delle risorse che il gruppo conterrà.

#### Modifica un gruppo di risorse

Per modificare un gruppo di risorse, clicca sul nome nella lista.

#### Elimina un gruppo di risorse

Per eliminare un gruppo di risorse esistente, clicca sul pulsante `...`{.action} a destra del gruppo e poi su `Elimina il gruppo di risorse`{.action}.

Una finestra contestuale ti chiederà di confermare l'eliminazione.

## Per saperne di più

Contatta la nostra Community di utenti all'indirizzo <https://community.ovh.com/en/>.
