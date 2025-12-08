---
title: "Come eliminare una zona DNS OVHcloud?"
excerpt: "Questa guida ti mostra come eliminare una zona DNS per il tuo dominio dallo Spazio Cliente OVHcloud"
updated: 2025-10-14
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

**Questa guida ti mostra come eliminare una zona DNS per un dominio dallo Spazio Cliente OVHcloud.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Disporre di una zona DNS nello Spazio Cliente.
- Disporre di diritti sufficienti sulla zona DNS da eliminare. Per maggiori informazioni consulta la nostra guida "[Gestire i contatti dei propri servizi](/pages/account_and_service_management/account_information/managing_contacts)".

> [!primary]
>
> Eliminare una zona DNS non elimina il record del dominio al quale è associato. L’eliminazione di una zona DNS associata non comporta la perdita del dominio.

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

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), clicca sul tuo nome nell'angolo in alto a destra e poi su `Le mie offerte e servizi`{.action}.
>>
>> ![Le mie offerte e servizi](/pages/assets/screens/control_panel/product-selection/right-menu/my-solutions-and-services.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella tabella presente sulla pagina visualizzata, clicca sul pulsante `...`{.action} a destra della zona DNS che desideri annullare, quindi su `Disattivare il servizio`{.action}.
>>
>> ![Annulla](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-cancel-my-subscription.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nella nuova pagina che appare, specifica il motivo della tua richiesta di annullamento e il tuo progetto, quindi clicca su `Conferma`{.action}.
>>
>> ![Annulla il servizio](/pages/assets/screens/control_panel/product-selection/right-column/my-solutions-and-services/dns-zone-delete-your-service.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> L'annullamento del tuo servizio avverrà nella **Data di entrata in vigore** indicata nella tabella "Gestione delle mie offerte e servizi". Se non vedi apparire lo stato "Disattivazione programmata", aggiorna la pagina.
>>
>> > [!primary]
>> >
>> > Se desideri eliminare immediatamente una zona DNS dal tuo [Spazio Cliente OVHcloud](/links/manager), esegui i 4 passi per richiedere l'annullamento alla data di entrata in vigore, quindi contatta il supporto OVHcloud creando un ticket di assistenza dal [centro assistenza](https://help.ovhcloud.com/csm?id=csm_get_help).
>> > Nella richiesta specifica la zona DNS interessata e dichiara chiaramente il tuo desiderio di eliminarla immediatamente senza attendere la data di entrata in vigore.

## Per saperne di più

[Gestire i contatti dei propri servizi](/pages/account_and_service_management/account_information/managing_contacts)

[Modificare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_edit)

[Modificare i server DNS di un dominio OVHcloud](/pages/web_cloud/domains/dns_server_edit)

[Creare una zona DNS in OVHcloud](/pages/web_cloud/domains/dns_zone_create)
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).