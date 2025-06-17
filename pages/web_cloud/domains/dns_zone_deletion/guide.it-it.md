---
title: "Come eliminare una zona DNS OVHcloud?"
excerpt: "Questa guida ti mostra come eliminare una zona DNS per il tuo dominio dallo Spazio Cliente OVHcloud"
updated: 2025-04-28
---

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

> [!primary]
>
> Eliminare una zona DNS non elimina il record del dominio al quale è associato. L’eliminazione di una zona DNS associata non comporta la perdita del dominio.
>

## Procedura

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

### 1 - Inizia a eliminare una zona DNS OVHcloud

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Step 1**
>>
>> Accedi allo [Spazio Cliente OVHcloud](/links/manager) e clicca su `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Step 2**
>>
>> Clicca sul menu `Zone DNS`{.action} e seleziona il dominio interessato.
>>
>> ![DNS zones](/pages/assets/screens/control_panel/product-selection/web-cloud/dns-zones.png){.thumbnail}
>>
> **Step 3**
>>
>> Sul lato destro (o sotto la tabella in base alla risoluzione dello schermo), clicca sul pulsante `Elimina la zona DNS`{.action}.
>>
>> ![delete the DNS zone](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/delete-the-dns-zone.png){.thumbnail}
>>
> **Step 4**
>>
>> Nella nuova finestra, consulta i messaggi indicati all’interno.
>>
>> ![delete the DNS zone validation](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/delete-the-dns-zone-confirmation.png){.thumbnail}
>>
>> Clicca sul pulsante `Conferma`{.action} per completare la prima fase di eliminazione della zona DNS.

### 2 - Conferma l'eliminazione di una zona DNS OVHcloud

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

![cancel the service](/pages/assets/screens/control_panel/product-selection/web-cloud/domain-dns/dns-zone/cancel-my-service.png){.thumbnail}

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