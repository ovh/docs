---
title: "Come separare un dominio da un sito web esistente"
excerpt: "Scopri come separare un dominio o un sottodominio da un sito web già esistente sul tuo hosting web"
updated: 2025-11-27
---

## Obiettivo

Puoi ospitare diversi siti web sulla stessa offerta di hosting web, anche se i nomi di dominio non sono registrati su OVHcloud. Inoltre, puoi associare uno o più nomi di dominio o sottodomini allo stesso sito web.

Non desideri più utilizzare un nome di dominio o un sottodominio per il tuo sito web?
Vuoi associare il tuo nome di dominio o sottodominio a un altro sito web su uno dei tuoi hosting web?
Devi modificare la directory principale associata al tuo sito web e creare un nuovo sito web sul tuo hosting web per farlo?

**Scopri come separare un nome di dominio o un sottodominio da un sito web già esistente sul tuo hosting web.**

## Prerequisiti

- Disporre di un piano di [hosting web OVHcloud](/links/web/hosting-multisite) compatibile.
- Disporre di uno o più [nomi di dominio](/links/web/domains).
- Poter modificare la configurazione dei tuoi nomi di dominio dalle loro [zone DNS](/pages/web_cloud/domains/dns_zone_edit).
- Essere connesso al tuo [Spazio Cliente OVHcloud](/links/manager), sezione `Web Cloud`{.action}.

## In pratica

> [!warning]
>
> Separare un nome di dominio o un sottodominio da un sito web presente sul tuo hosting web è un'operazione delicata. Infatti, dopo questa operazione, il tuo sito web non sarà più accessibile su Internet con il tuo nome di dominio e/o sottodominio.

Clicca sui tab qui sotto per visualizzare successivamente ciascuna delle **5** fasi.

> [!tabs]
> **Passo 1**
>>
>> Accedi al tuo [Spazio Cliente OVHcloud](/links/manager), quindi vai alla sezione `Web Cloud`{.action}.
>>
>> ![Web Cloud](/pages/assets/screens/control_panel/product-selection/web-cloud.png){.thumbnail}
>>
> **Passo 2**
>>
>> Clicca sul menu `Hosting`{.action}, quindi seleziona l'hosting web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passo 3**
>>
>> Nella pagina che appare, clicca sull'etichetta `I miei siti`{.action}.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passo 4**
>>
>> Nel tableau che appare, clicca sul pulsante `>`{.action} a sinistra del nome del sito web interessato per visualizzare i nomi di dominio e sottodomini associati.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Clicca quindi sul pulsante `⁝`{.action} a destra del nome di dominio o sottodominio interessato, quindi su `Stacca il dominio`{.action}.
>>
>> ![Opzioni domini associati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passo 5**
>>
>> La nuova finestra che si apre ti chiede di confermare lo stacco del nome di dominio o del sottodominio.
>>
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> A seconda della tua scelta, seleziona o meno la casella `Configurazione automatica (raccomandata)`{.action}, quindi clicca su `Conferma`{.action} per confermare la tua scelta.
>>
>> > ![!warning]
>> >
>> > **Caso particolare: Hai associato Git sul tuo sito web e un solo nome di dominio è collegato al sito web**
>> >
>> > Se è così, incontrerai la seguente finestra:
>> >
>> > ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Come indicato dal messaggio, dovrai [eliminare la tua associazione Git](/pages/web_cloud/web_hosting/git_integration_webhosting) in primo luogo, **prima** di staccare il tuo nome di dominio.

### Caso particolare: Stacco di un nome di dominio o di un sottodominio per utilizzarlo con un altro sito web

- Se desideri aggiungere il tuo nome di dominio o sottodominio a un altro sito web esistente su un hosting web, consulta [questa guida](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Se desideri creare un nuovo sito web su un hosting web con il tuo nome di dominio o sottodominio appena staccato, consulta [questa guida](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Per saperne di più

Per prestazioni specializzate (posizionamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Se desideri ricevere un supporto sull'utilizzo e la configurazione delle tue soluzioni OVHcloud, ti invitiamo a consultare le nostre diverse [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).