---
title: "Come geolocalizzare un sito Web in un paese specifico?"
excerpt: "Questa guida ti mostra come individuare un sito Web grazie agli indirizzi IP geolocalizzati disponibili sulle offerte di hosting condiviso OVHcloud"
updated: 2026-05-04
---

## Obiettivo

I motori di ricerca (Google, Bing, Yahoo, ...) utilizzano robot di indicizzazione e referenziazione su tutti i siti Web. Indicano in via prioritaria i siti geolocalizzati nel paese dal quale effettui la tua ricerca.

**Esempio**: Se lanciate una ricerca attraverso un motore di ricerca e vi trovate in Inghilterra, i siti web geolocalizzati in Inghilterra appariranno più in alto nei risultati della ricerca rispetto agli altri siti web.

Questa geolocalizzazione è basata sull'indirizzo IP dell'hosting in cui si trova il tuo sito Web.

L'opzione di geolocalizzazione sul tuo hosting può essere utile per l'SEO se il tuo sito Web è principalmente consultato in un Paese diverso da quello in cui si trova il tuo hosting condiviso.

**Questa guida ti mostra come geolocalizzare il tuo sito Web utilizzando i nostri indirizzi IP geolocalizzati.**

## Prerequisiti

- Disporre di un [hosting condiviso OVHcloud](/links/web/hosting)
- Disporre di un [dominio](/links/web/domains)
  

<!-- CP-NAV-START:web-hosting -->
---

### Accesso allo Spazio Cliente OVHcloud

- **Link diretto:** [Hosting](/links/control-panel/web-hosting)
- **Percorso di navigazione:** `Web Cloud`{.action} > `Hosting`{.action} > Seleziona il tuo hosting web

---
<!-- CP-NAV-END:web-hosting -->

## Procedura

Per i siti Web consultati principalmente all'estero e ospitati sulla nostra infrastruttura di hosting condivisi OVHcloud, proponiamo un'opzione di geolocalizzazione per indirizzo IP. Permette di indicizzare meglio i siti Web nel Paese in cui si trova l'indirizzo IP scelto con l'opzione.

<!-- CP-STEPS-START:configure-geolocation -->
Per utilizzare l'opzione di geolocalizzazione via IP, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

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
>> ![I miei siti](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites.png){.thumbnail}
>>
> **Passaggio 3**
>>
>> Nel riquadro che appare, fai clic sul pulsante `>`{.action} a sinistra del nome del sito web desiderato per visualizzare i domini o sottodomini associati.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Fai quindi clic sul pulsante `⁝`{.action} a destra del nome del dominio o sottodominio desiderato, quindi su `Modifica il dominio`{.action}.
>>
>> ![Opzioni domini associati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Nella nuova finestra, seleziona `IP del Paese`{.action} e inserisci il menu a tendina.
>>
>> ![geolocation option](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/country-ip-selection.png){.thumbnail}
>>
>> Scegli l'indirizzo IP del Paese per il quale vuoi geolocalizzare il tuo sito, tra i 12 Paesi proposti: *Repubblica Ceca, Finlandia, Francia, Germania, Irlanda, Italia, Lituania, Paesi Bassi, Polonia, Portogallo, Spagna, Regno Unito*.
>>
>> Clicca su `Continua`{.action} e poi su `Conferma`{.action} dalla finestra riepilogativa.
<!-- CP-STEPS-END:configure-geolocation -->

> [!primary]
>
> Una volta completati gli step precedenti e se la zona DNS attiva del dominio è completamente gestita nello [Spazio Cliente OVHcloud](/links/manager), il record di tipo A nella zona DNS del dominio verrà modificato automaticamente. Per verificare che l'indirizzo IP sia stato aggiornato correttamente, consulta la guida su [modifica della zona DNS OVHcloud](/pages/web_cloud/domains/dns_zone_edit).
>
> In caso contrario, sarà necessario effettuare la modifica manualmente presso il provider che gestisce la zona DNS attiva del dominio. Consulta [qui](/pages/web_cloud/web_hosting/clusters_and_shared_hosting_IP) la documentazione che contiene tutti gli indirizzi IP della nostra infrastruttura di hosting condivisi OVHcloud.
>
> In entrambi i casi, un periodo di propagazione da **4 a 24 ore** dopo la modifica sarà necessario per renderla pienamente efficace e visibile su Internet.
>

## Per saperne di più

Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).

Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).

Contatta la nostra [Community di utenti](/links/community).
