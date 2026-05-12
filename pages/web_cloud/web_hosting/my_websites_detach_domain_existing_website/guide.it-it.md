---
title: "Come scollegare un dominio da un sito web esistente"
excerpt: "Questa guida ti mostra come scollegare un nome di dominio o un sottodominio da un sito web già esistente sul tuo hosting web"
updated: 2026-05-04
---

## Obiettivo

Puoi ospitare diversi siti web sulla stessa offerta di hosting web, anche se i nomi di dominio non sono registrati su OVHcloud. Inoltre, puoi associare uno o più nomi di dominio o sottodomini allo stesso sito web.

Non desideri più utilizzare un nome di dominio o un sottodominio per il tuo sito web?
Vuoi associare il tuo nome di dominio o sottodominio a un altro sito web su uno dei tuoi hosting web?

**Questa guida ti mostra come scollegare un nome di dominio o un sottodominio da un sito web già esistente sul tuo hosting web.**

## Prerequisiti

- Disporre di un piano di [hosting web OVHcloud](/links/web/hosting-multisite) compatibile.
- Disporre di uno o più [nomi di dominio](/links/web/domains).
- Poter modificare la configurazione dei tuoi nomi di dominio dalle loro [zone DNS](/pages/web_cloud/domains/dns_zone_edit).

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

> [!warning]
>
> Scollegare un nome di dominio o un sottodominio da un sito web presente sul tuo hosting web è un'operazione delicata. Infatti, dopo questa operazione, il tuo sito web non sarà più accessibile su Internet con il tuo nome di dominio e/o sottodominio.

Clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

> [!tabs]
> **Passaggio 1**
>>
>> Accedi alla pagina [Hosting](/links/control-panel/web-hosting), poi seleziona l'hosting Web interessato.
>>
>> ![Web Hosting](/pages/assets/screens/control_panel/product-selection/web-cloud/hosting-plans.png){.thumbnail}
>>
> **Passaggio 2**
>>
>> Nella nuova pagina clicca sulla scheda `I miei siti`{.action}.
>>
>> ![My Websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel riquadro che appare, fai clic sul pulsante `>`{.action} a sinistra del nome del sito web desiderato per visualizzare i domini o sottodomini associati.
>>
>> ![Website](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Fai quindi clic sul pulsante `⁝`{.action} a destra del nome del dominio o sottodominio desiderato, quindi su `Scollega il dominio`{.action}.
>>
>> ![Associated domains options](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> La nuova finestra che si apre ti chiede di confermare lo stacco del nome di dominio o del sottodominio.
>>
>> ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-domain-popup.png){.thumbnail}
>>
>> A seconda della tua scelta, seleziona o meno la casella `Configurazione automatica (consigliata)`{.action}, quindi clicca su `Conferma`{.action} per confermare la tua scelta.
>>
>> > ![!warning]
>> >
>> > **Caso particolare: Hai associato Git sul tuo sito web e un solo nome di dominio è collegato al sito web**
>> >
>> > Se è così, incontrerai la seguente finestra:
>> >
>> > ![My websites](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/detach-alone-domain.png){.thumbnail}
>> >
>> > Come indicato dal messaggio, dovrai [eliminare la tua associazione Git](/pages/web_cloud/web_hosting/git_integration_webhosting) in primo luogo, **prima** di staccare il tuo nome di dominio.

### Caso particolare: Stacco di un nome di dominio o di un sottodominio per utilizzarlo con un altro sito web

- Se desideri aggiungere il tuo nome di dominio o sottodominio a un altro sito web esistente su un hosting web, consulta [questa guida](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website).
- Se desideri creare un nuovo sito web su un hosting web con il tuo nome di dominio o sottodominio appena staccato, consulta [questa guida](/pages/web_cloud/web_hosting/multisites_configure_multisite).

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc.), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
