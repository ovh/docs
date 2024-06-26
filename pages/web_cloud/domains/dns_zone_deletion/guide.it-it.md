---
title: "Come eliminare una zona DNS?"
excerpt: "Questa guida ti mostra come eliminare una zona DNS per il tuo dominio dallo Spazio Cliente OVHcloud"
updated: 2024-06-26
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

La zona **D**omain **N**ame **S**ystem (**DNS**) di un dominio è il suo file di configurazione. ed è composta da informazioni tecniche chiamate *record DNS*. La zona DNS è, in un certo senso, come un centro di scambi.

Per maggiori informazioni sulle zone e i server DNS, consulta le guide seguenti: 

- [Scopri tutto sui server DNS](/pages/web_cloud/domains/dns_server_general_information)
- [Sapere tutto sulla zona DNS](/pages/web_cloud/domains/dns_zone_general_information)
- [Scopri tutto sui record DNS](/pages/web_cloud/domains/dns_zone_records)

Ad esempio, una zona DNS per un dominio può essere eliminata in OVHcloud nei seguenti casi (elenco non esaustivo):

- utilizzi una zona DNS attiva per il tuo dominio presso un provider diverso da OVHcloud.
- Non utilizzi più il dominio associato alla zona DNS presente in OVHcloud.
- hai migrato i tuoi servizi presso un altro provider e desideri disattivare i servizi OVHcloud.

> [!primary]
>
> La creazione / modifica / eliminazione di una zona DNS dallo [Spazio Cliente OVHcloud](/links/manager) è totalmente gratuita.
>

**Questa guida ti mostra come eliminare una zona DNS per un dominio dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Disporre di una zona DNS nello Spazio Cliente.
- Disporre di diritti sufficienti sulla zona DNS da eliminare. Per maggiori informazioni consulta la nostra guida "[Gestire i contatti dei propri servizi](/pages/account_and_service_management/account_information/managing_contacts)".

## In pratica

> [!warning]
>
> Prima di continuare, verifica che la zona DNS che vuoi eliminare non sia più utilizzata dal tuo dominio.
>
> L’eliminazione della zona DNS attiva per il dominio comporta infatti l’interruzione dei servizi online (sito Web, indirizzi email, etc.).
>
> Effettua un [WHOIS](/links/web/domains-whois) del dominio per sapere se la zona DNS attiva del dominio è quella presente in OVHcloud o meno.
>
> Se la zona DNS attiva per il tuo nome di dominio è quella presente in OVHcloud e vuoi sostituirla con una zona DNS ospitata altrove, consulta la nostra guida "[Modificare i server DNS di un nome di dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)" prima di effettuare qualsiasi eliminazione di zona DNS.
>

### Step 1 - Inizia a eliminare una zona DNS OVHcloud

Per avviare l’eliminazione di una zona DNS OVHcloud, esegui queste operazioni: 

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Domini`{.action}.
4. Seleziona il dominio o la zona DNS.
5. Nella nuova pagina, clicca sulla scheda `Zona DNS`{.action} per accedere alla tabella con tutti i record DNS della zona DNS.
6. Sul lato destro (o sotto la tabella in base alla risoluzione dello schermo), clicca sul pulsante `Elimina la zona DNS`{.action}.

![delete the DNS zone](images/delete-the-dns-zone.png){.thumbnail}

Nella nuova finestra, consulta i messaggi indicati all’interno.

![delete the DNS zone validation](images/delete-the-dns-zone-confirmation.png){.thumbnail}

Clicca sul pulsante `Conferma`{.action} per completare il primo step di eliminazione della zona DNS.

### Step 2 - Conferma l'eliminazione di una zona DNS OVHcloud

Al termine dello step precedente, all’indirizzo email del contatto "[Administrator](/pages/account_and_service_management/account_information/managing_contacts)" della zona DNS OVHcloud viene inviata un’email per confermare l’eliminazione della zona DNS.

> [!success]
>
> Se non ricevi l'email, controlla nella posta indesiderata.
>

Questa email contiene due link validi per **72** ore a partire dal momento in cui hai terminato lo Step 1 di questa guida.

Clicca sul **link di conferma** per continuare l’eliminazione della zona DNS OVHcloud o sul **link di annullamento** per interrompere la procedura di eliminazione della zona DNS OVHcloud.

> [!primary]
>
> Se il reindirizzamento dei collegamenti non funziona, fare un **copia/incolla** del collegamento nella barra degli URL del browser Internet. Se necessario, accedi nuovamente allo [Spazio Cliente OVHcloud](/links/manager).
>

Cliccando sul link di conferma verrai reindirizzato a una nuova pagina OVHcloud in cui sarà richiesto il motivo o i motivi dell’eliminazione della zona DNS.

![cancel the service](images/cancel-my-service.png){.thumbnail}

Una volta completato il modulo e se vuoi davvero eliminare definitivamente la zona DNS OVHcloud, clicca sul pulsante `Conferma`{.action} in fondo alla pagina.

Verrà inviata un’ultima email di conferma all’indirizzo email del contatto "[Amministratore](/pages/account_and_service_management/account_information/managing_contacts)" della zona DNS OVHcloud, per confermare l’eliminazione.

## Per saperne di più

[Gestire i contatti dei propri servizi](/pages/account_and_service_management/account_information/managing_contacts)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).