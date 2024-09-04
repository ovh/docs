---
title: "Hosting Web - Modificare un dominio già associato a un hosting"
excerpt: "Questa guida ti mostra come modificare le impostazioni di associazione di un dominio/sottodominio già dichiarato sul tuo piano di hosting Web"
updated: 2024-09-04
---

> [!primary]
> Questa traduzione è stata generata automaticamente dal nostro partner SYSTRAN. I contenuti potrebbero presentare imprecisioni, ad esempio la nomenclatura dei pulsanti o alcuni dettagli tecnici. In caso di dubbi consigliamo di fare riferimento alla versione inglese o francese della guida. Per aiutarci a migliorare questa traduzione, utilizza il pulsante "Contribuisci" di questa pagina.
>

## Obiettivo

Durante l’utilizzo dell’hosting Web o l’aggiornamento del sito Web, potrebbe essere necessario modificare le impostazioni del dominio o sottodominio già associato all’hosting.

> [!primary]
>
> Questa guida ti mostra esclusivamente come modificare un dominio o un sottodominio già dichiarato su un hosting Web OVHcloud. Per associare un nuovo dominio/sottodominio al tuo hosting Web, consulta la nostra guida "[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>

**Questa guida ti mostra come modificare le impostazioni di associazione di un dominio/sottodominio già dichiarato sul tuo piano di hosting Web.**

## Prerequisiti

- Avere accesso allo [Spazio Cliente OVHcloud](/links/manager).
- Disporre di una soluzione [hosting Web OVHcloud](/links/web/hosting).
- Disporre di uno o più [domini](/links/web/domains).
- Disporre dei diritti necessari per tutti i servizi in questione. Per maggiori informazioni consulta la nostra guida "[Gestire i contatti dei servizi OVHcloud](/pages/account_and_service_management/account_information/managing_contacts)".

## Procedura

> [!warning]
>
> La modifica delle impostazioni di associazione di un dominio o sottodominio può, in caso di errori, comportare l’interruzione dell’accesso ai servizi (il sito Web). In caso di dubbi sulle modifiche da apportare, ti consigliamo di rivolgerti a un professionista specializzato
>

Per modificare le impostazioni di associazione di un dominio o sottodominio già dichiarato sul tuo piano di hosting Web, esegui queste operazioni:

1. Accedi allo [Spazio Cliente OVHcloud](/links/manager).
2. Nella riga superiore dello Spazio Cliente, clicca sulla scheda `Web Cloud`{.action}.
3. Nella colonna di sinistra, clicca sul menu a tendina `Hosting`{.action}.
4. Seleziona il tuo hosting Web.
5. Clicca sulla scheda `Multisito`{.action}.
6. Nella tabella che appare sotto la scheda, clicca sul pulsante `...`{.action} e poi su `Modifica il dominio`{.action}.

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-2.png){.thumbnail}

Viene visualizzata la seguente finestra:

![Modify domain](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled.png){.thumbnail}

Nella parte restante di questa guida trovi la descrizione di ogni parametro disponibile nella finestra qui sopra. Una volta lette le descrizioni e apportate le modifiche, clicca sul pulsante `Continua`{.action} in basso a destra nella finestra e poi passa allo [step 2](#step2).

### Step 1 - Descrizione delle impostazioni modificabili <a name="step1"></a>

> [!primary]
>
> Il modulo `Dominio`{.action} non può essere modificato perché si tratta di una modifica delle impostazioni del nome di dominio associato all'hosting Web. Se l’azione desiderata consiste nell’associare un nuovo dominio/sottodominio al tuo hosting Web, consulta la nostra guida "[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite)".
>

#### Modifica la "cartella di root"

> [!warning]
> **Caso particolare: configurazione con Git**
>
> Per modificare la `Cartella di root`{.action} dichiarata per il tuo dominio e se esiste una configurazione con Git per lo stesso dominio, è necessario prima eliminare questa configurazione.
>
> Se esiste una configurazione con Git, visualizzi un messaggio sotto il form:
>
> ![Modify domain associed with git](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-a-domain-step-1-all-disabled-git-message.png){.thumbnail}
>
> Per eliminare la configurazione Git di un dominio/sottodominio associato al tuo hosting, consulta la nostra guida "[Configurare e utilizzare Git con un hosting Web OVHcloud](/pages/web_cloud/web_hosting/git_integration_webhosting)".
>

Il modulo `Cartella di root`{.action} indica il nome della cartella che contiene gli elementi visualizzati con il dominio. Può trattarsi, ad esempio, di una cartella che contiene i file del sito Web.

Durante l’utilizzo dei servizi potrebbe essere necessario modificare la `Cartella di root`{.action} dichiarata per il dominio. Questo può verificarsi quando, ad esempio:

- Hai sviluppato un nuovo sito Web in una nuova cartella presente nello spazio di storage FTP del tuo hosting Web.
- Vuoi reindirizzare il tuo dominio verso una cartella vuota per poi inserirvi un nuovo sito Web.
- Ecc.

In questo modulo è quindi necessario sostituire il nome della cartella precompilata con il nome della nuova cartella desiderata.

> [!success]
>
> Se inserisci un nome di cartella inesistente nello spazio di storage FTP del tuo hosting Web, questo verrà creato automaticamente dai nostri robot nel tuo spazio di storage FTP.
>

#### Altre opzioni disponibili

##### L'opzione "SSL"

Seleziona o deseleziona questa casella di controllo solo se vuoi attivare o disattivare il certificato SSL gratuito **Let's Encrypt** per il tuo dominio/sottodominio. Non è necessario spuntare questa casella per le altre offerte SSL proposte da OVHcloud.

Per maggiori informazioni sulle opzioni e le offerte SSL disponibili, consulta la nostra documentazione dedicata "[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting)".

##### L'opzione "Attiva la CDN"

Per usufruire di questa opzione è necessario disporre di una soluzione CDN OVHcloud attiva o di un piano di hosting Web Performance attivo.

Seleziona o deseleziona questa casella di controllo per attivare o disattivare l’opzione CDN per il tuo dominio o sottodominio.

Per maggiori informazioni sulle opzioni/offerte CDN disponibili nella nostra documentazione dedicata "[Aumentare la velocità di un sito Web con la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn)".

##### L'opzione "IP del Paese"

Questa opzione viene utilizzata principalmente per i siti Web il cui pubblico di destinazione si trova all'estero. Questo permette di migliorare il posizionamento SEO del sito Web nel paese scelto.

Per maggiori informazioni su questa opzione, consulta la nostra documentazione dedicata "[Geolocalizzare il vostro sito web in un paese specifico](/pages/web_cloud/web_hosting/multisites_geolocation)".

##### L'opzione "Attiva il firewall"

Questa opzione permette di filtrare le richieste in entrata per proteggere l’hosting Web dagli attacchi più diffusi.

Per maggiori informazioni su questa opzione, consulta la nostra documentazione dedicata "[Hosting condiviso: attiva un firewall applicativo](/pages/web_cloud/web_hosting/multisites_activating_application_firewall)".

##### L'opzione "Log separati"

Seleziona e deseleziona questa opzione solo se vuoi separare i log del tuo dominio dagli altri domini dichiarati in parallelo sul tuo hosting Web.

Per maggiori informazioni su questa opzione, accedi alla nostra [pagina sulle statistiche dettagliate](/links/web/hosting-traffic-analysis).

Una volta effettuate le modifiche, clicca sul pulsante `Avanti`{.action} in basso a destra per passare allo [step 2](#step2).

### Step 2 - Riepilogo delle modifiche <a name="step2"></a>

Una volta cliccato sul pulsante `Seguente`{.action}, visualizzi un riepilogo dei parametri che intendi applicare al dominio:

![Modify domain resume](/pages/assets/screens/control_panel/product-selection/web-cloud/web-hosting/multisite/modify-domain-step2.png){.thumbnail}

Se tutte le impostazioni sono configurate secondo le tue necessità, clicca sul pulsante `Conferma`{.action}.

In base alle opzioni selezionate, l'applicazione delle modifiche potrebbe richiedere da pochi minuti a diverse ore.

Se, per le opzioni **SSL**, **CDN**, **IP del paese** e **log separati**, le modifiche non vengono applicate entro 24 ore, consulta le rispettive guide (e pagine) per tutte le opzioni descritte nello [step 1](#step1), per verificare che tutti i requisiti siano stati rispettati e rispettati.

## Per saperne di più

[Ospitare più siti su uno stesso hosting](/pages/web_cloud/web_hosting/multisites_configure_multisite).

[Gestire un certificato SSL su un hosting Web](/pages/web_cloud/web_hosting/ssl_on_webhosting).

[Aumentare la velocità di un sito Web con la CDN](/pages/web_cloud/web_hosting/cdn_how_to_use_cdn).

[Geolocalizzare il vostro sito web in un paese specifico](/pages/web_cloud/web_hosting/multisites_geolocation).

[Hosting condiviso: attiva un firewall applicativo](/pages/web_cloud/web_hosting/multisites_activating_application_firewall).
 
Per prestazioni specializzate (referenziamento, sviluppo, ecc...), contatta i [partner OVHcloud](/links/partner).
 
Per usufruire di un supporto per l'utilizzo e la configurazione delle soluzioni OVHcloud, è possibile consultare le nostre soluzioni [offerte di supporto](/links/support).
 
Contatta la nostra [Community di utenti](/links/community).