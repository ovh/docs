---
title: "Hosting Web - Modificare un dominio già associato a un hosting"
excerpt: "Questa guida ti mostra come modificare le impostazioni di associazione di un dominio/sottodominio già dichiarato sul tuo piano di hosting Web"
updated: 2026-05-04
---

## Obiettivo

Durante l’utilizzo dell’hosting Web o l’aggiornamento del sito Web, potrebbe essere necessario modificare le impostazioni del dominio o sottodominio già associato all’hosting.

> [!primary]
>
> Questa guida ti mostra esclusivamente come modificare un dominio o un sottodominio già dichiarato su un hosting Web OVHcloud.
>
> - Per associare un nuovo dominio o sottodominio al tuo sito web presente sull'hosting web, consulta la nostra guida "[Come associare un dominio a un sito web esistente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Per aggiungere un nuovo sito web al tuo hosting web, consulta la nostra guida "[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".

**Questa guida ti mostra come modificare le impostazioni di associazione di un dominio/sottodominio già dichiarato sul tuo piano di hosting Web.**

## Prerequisiti

- Disporre di una soluzione [hosting Web OVHcloud](/links/web/hosting).
- Disporre di uno o più [domini](/links/web/domains).
- Disporre dei diritti necessari per tutti i servizi in questione. Per maggiori informazioni consulta la nostra guida "[Gestire i contatti dei servizi OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)".

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
> La modifica delle impostazioni di associazione di un dominio o sottodominio può, in caso di errori, comportare l’interruzione dell’accesso ai servizi (il sito Web). In caso di dubbi sulle modifiche da apportare, ti consigliamo di rivolgerti a un professionista specializzato

Per modificare i parametri di associazione di un dominio o sottodominio già dichiarato sulla tua offerta di hosting web, clicca sulle schede qui sotto per visualizzare in sequenza ciascuno dei **4** passi.

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
>> Nel riquadro che appare, fai clic sul pulsante `>`{.action} a sinistra del nome del sito web desiderato per visualizzare i domini e sottodomini associati.
>>
>> ![Sito web](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/tab.png){.thumbnail}
>>
>> Fai quindi clic sul pulsante `⁝`{.action} a destra del nome del dominio o sottodominio desiderato, quindi su `Modifica il dominio`{.action}.
>>
>> ![Opzioni domini associati](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/my-websites/associated-domains-options.png){.thumbnail}
>>
> **Passaggio 4**
>>
>> Verrà visualizzata la seguente finestra: 
>>
>> ![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}
>>
>> Nella parte successiva di questa guida, troverai una descrizione di ciascun parametro disponibile nella finestra sopra. Dopo aver letto le diverse descrizioni presenti nella sezione "[Descrizione dei parametri modificabili](#step1)" e aver effettuato le tue modifiche, clicca sul pulsante `Continua`{.action} in basso a destra della finestra, quindi vai alla [parte 2](#step2).

### 1 - Descrizione delle impostazioni modificabili <a name="step1"></a>

> [!primary]
>
> I campi `Dominio`{.action} e `Cartella di root`{.action} non sono modificabili, in quanto si tratta di parametri relativi al sito web presente sull'hosting web.
>
> - Per associare un nuovo dominio o sottodominio a un sito web presente sull'hosting web, consulta la nostra guida "[Come associare un dominio a un sito web esistente?](/pages/web_cloud/web_hosting/my_websites_add_domain_existing_website)".
> - Per modificare la cartella di root del tuo sito web, consulta la nostra guida "[Come modificare la cartella di root di un sito web esistente?](/pages/web_cloud/web_hosting/my_websites_modify_root_folder)".

#### L'opzione "Attiva la CDN"

Per usufruire di questa opzione è necessario disporre di una soluzione CDN OVHcloud attiva o di un piano di hosting Web Performance attivo.

Seleziona o deseleziona questa casella di controllo per attivare o disattivare l’opzione CDN per il tuo dominio o sottodominio.

Per maggiori informazioni sulle opzioni/offerte CDN disponibili nella nostra documentazione dedicata "[Aumentare la velocità di un sito Web con la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

#### L'opzione "IP del Paese"

Questa opzione viene utilizzata principalmente per i siti Web il cui pubblico di destinazione si trova all'estero. Questo permette di migliorare il posizionamento SEO del sito Web nel paese scelto.

Per maggiori informazioni su questa opzione, consulta la nostra documentazione dedicata "[Geolocalizzare il vostro sito web in un paese specifico](/pages/web_cloud/web_hosting/multisites_geolocation)".

#### L'opzione "Attiva il firewall"

Questa opzione permette di filtrare le richieste in entrata per proteggere l’hosting Web dagli attacchi più diffusi.

Per maggiori informazioni su questa opzione, consulta la nostra documentazione dedicata "[Hosting condiviso: attiva un firewall applicativo](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

#### L'opzione "Log separati"

Seleziona e deseleziona questa opzione solo se vuoi separare i log del tuo dominio dagli altri domini dichiarati in parallelo sul tuo hosting Web.

Per maggiori informazioni su questa opzione, accedi alla nostra [pagina sulle statistiche dettagliate](/links/web/hosting-traffic-analysis).

Una volta effettuate le modifiche, clicca sul pulsante `Avanti`{.action} in basso a destra per passare alla [parte 2](#step2).

### 2 - Riepilogo delle modifiche <a name="step2"></a>

Una volta cliccato sul pulsante `Seguente`{.action}, visualizzi un riepilogo dei parametri che intendi applicare al dominio:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Se tutte le impostazioni sono configurate secondo le tue necessità, clicca sul pulsante `Conferma`{.action}.

In base alle opzioni selezionate, l'applicazione delle modifiche potrebbe richiedere da pochi minuti a diverse ore.

Se, per le opzioni **CDN**, **IP del paese** e **log separati**, le modifiche non vengono applicate entro 24 ore, consulta le rispettive guide (e pagine) per tutte le opzioni descritte nella [parte 1](#step1), per verificare che tutti i requisiti siano stati rispettati e rispettati.

## Per saperne di più

[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Aumentare la velocità di un sito Web con la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Geolocalizzare il vostro sito web in un paese specifico](/pages/web_cloud/web_hosting/multisites_geolocation).

[Hosting condiviso: attiva un firewall applicativo](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).
